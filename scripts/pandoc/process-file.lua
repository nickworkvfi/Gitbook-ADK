local json = require 'pandoc.json'

local DEBUG = true

-- VARIABLES START --

local CURRENT_FILE_NAME = nil
local DOCUMENT_TITLE = nil
local HEADER_ID_TO_TEXT_MAP = {}

-- VARIABLES END --

function debugLog(...)
  if DEBUG then
    local args = {...}
    for i, arg in ipairs(args) do
      if type(arg) == "table" then
        args[i] = pandoc.utils.stringify(arg)
      end
    end
    io.stderr:write(table.concat(args, " ") .. "\n")
  end
end

function Meta(meta)
  local filename = pandoc.utils.stringify(meta.filename or "")
  CURRENT_FILE_NAME = filename
end

-- UTILS START --
local function stringIncludes(str, substr)
  return string.find(str, substr, 1, true) ~= nil
end

local function isLinkAnchor(el)
  local classes = table.concat(el.classes, ", ")
  return stringIncludes(classes, "anchor")
end

local function isPermaLinkAnchor(el)
  local classes = table.concat(el.classes, ", ")
  return stringIncludes(classes, "permalink")
end

local function isEmptySpan(el)
  if el.content == nil or #el.content == 0 then
    return true
  end

  return false
end

function findImageInDivBlock(block)
  for _, content in ipairs(block.content or {}) do
    if content.t == "Plain" then
      for _, inline in ipairs(content.content or {}) do
        if inline.t == "Image" then
          return inline
        end
      end
    end
  end
end

local function contains(t, elem)
  for _, v in ipairs(t) do
    if v == elem then
      return true
    end
  end
  return false
end

local function split(s, sep)
  local parts = {}
  -- the pattern ([^_]+) means “one or more characters other than _”
  for token in string.gmatch(s, "([^" .. sep .. "]+)") do
    table.insert(parts, token)
  end
  return parts
end

local function generateDirectoryTableRows(tree, depth)
  depth = depth or 0
  local rows = {}
  
  for _, node in ipairs(tree) do
    local column1Value = pandoc.utils.stringify(node.row.cells[1]):gsub("^%s+", "") -- remove leading spaces

    if #node.children > 0 then
      column1Value = column1Value:gsub("►", "📁")
    else 
      column1Value = "📄" .. column1Value
    end
  
    local indent = string.rep("─", depth)

    if depth > 0 then
      indent = "└" .. indent
    end

    local column2Value = pandoc.utils.stringify(node.row.cells[2])

    if #column1Value > 0 then
      local row = {{ pandoc.Plain(indent .. column1Value) }, { pandoc.Plain(column2Value) }}
      table.insert(rows, row)
    end
    
    if #node.children > 0 then
      for _, childRow in ipairs(generateDirectoryTableRows(node.children, depth + 1)) do
        table.insert(rows, childRow) 
      end
    end
  end


  return rows
end

local function normalizeDirectoryTable(el)
  local tree = {}
  local lookup = {}

  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows then
      for rowIndex, row in ipairs(rows) do
        local id = row.identifier

        if id then
          local segments =  { table.unpack(split(id, "_"), 2) } 
          local node = { row = row, children = {} }

          lookup[id] = node

          -- Top level node
          if #segments <= 1 then
            table.insert(tree, node)
          else
            local parentId = "row"

            -- reconstruct parent ID from all but the last segment
            for i = 1, #segments - 1 do
              parentId = parentId .. "_" .. segments[i]
            end

            parentId = parentId .. "_"
            local parent = lookup[parentId]

            if parent then
              table.insert(parent.children, node)
            else
              -- fallback to root if parent not found
              table.insert(tree, node)
            end
          end
        end
      end
    end
  end

  local aligns = { pandoc.AlignLeft, pandoc.AlignLeft }
  local widths = { 0, 0 } -- let pandoc determine col widths
  local headers = { { pandoc.Plain({ pandoc.Str " " }) }, { pandoc.Plain({ pandoc.Str " " }) } }
  local generatedRows = generateDirectoryTableRows(tree)

  return pandoc.utils.from_simple_table(pandoc.SimpleTable(
    {},
    aligns,
    widths,
    headers,
    generatedRows
  ))
end

local function normalizeMemnameTable(el)
  local output = {}

  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows then
      for rowIndex, row in ipairs(rows) do
        local cells = {}

        for cellIndex, cell in ipairs(row.cells) do
          if cell.classes:includes("memname") then
            table.insert(cells, pandoc.Div(cell.content))
          end
        end

        table.insert(output, pandoc.Div(cells))
      end
    end
  end

  return output
end


-- UTILS END --

-- BLOCK FILTERS START --

function Header(el)
  debugLog("Processing h" .. el.level .. "#" .. el.identifier .. ": " .. pandoc.utils.stringify(el.content))
  -- any level-1 header auto-injected from <title> gets a “.title” class
  if el.level == 1 and el.classes:includes("title") then
    return {}  -- delete it
  end

  local content = pandoc.utils.stringify(el.content)
  local idToInsert = nil

  for i, inline in ipairs(el.content) do
    if (i == 1 or i == 2) and (inline.t == "SoftBreak" or inline.t == "Space") then
      table.remove(el.content, i) -- trim SoftBreaks and Spaces from  content
    end

    if inline.t == "Span" then
      
      -- If the span has the "anchor" class, we can assume it's a header anchor
      if isLinkAnchor(inline) then
        local id = inline.identifier

        if HEADER_ID_TO_TEXT_MAP[id] then
          io.stderr:write("⚠️ Duplicate header ID found: " .. id .. ". Overwriting previous value.\n")
        end

        idToInsert = id:lower()
        HEADER_ID_TO_TEXT_MAP[id] = content
      elseif isPermaLinkAnchor(inline) then
        local maybeAnchor = inline.content[1]
        if maybeAnchor and maybeAnchor.t == "Link" then
          local id = maybeAnchor.target:gsub("#", "")

          idToInsert = id:lower()
          HEADER_ID_TO_TEXT_MAP[id] = content
          
          -- Remove the permalink anchor from the content otherwise we end up with duplicated links
          table.remove(el.content, i)
        end
      end
    end
  end

  if idToInsert then
    table.insert(el.content, pandoc.Str(' '))
    table.insert(el.content, pandoc.RawInline('html', '<a href="#' .. idToInsert .. '" id="' .. idToInsert .. '"></a>'))
  end


  el.classes = {}  -- remove all classes from headers

  return el
end

function Table(el)
  if el.classes:includes("directory") then
    return normalizeDirectoryTable(el)
  end

  if el.classes:includes("memname") then
    return normalizeMemnameTable(el)
  end

  return el
end

function LineBreak(el)
  return pandoc.Str("\n")
end

function Link(el) 
  -- Strip classes from links
  el.classes = {}
  return el
end

function Div(el)
  -- Convert Doxygen code block fragments to CodeBlock if they have the "fragment" class --
  if el.classes:includes("fragment") then
    local lines = {}

    for i, lineDiv in ipairs(el.content) do
      -- Replace all __INDENT__ placeholders with two spaces
      local content = pandoc.utils.stringify(lineDiv.content):gsub("__INDENT__", "  ")
      table.insert(lines, content)
    end

    return pandoc.CodeBlock(table.concat(lines, "\n"), {class = "cpp"})
  end

  local shouldOmit = false

  if el.classes:includes('title') then
    DOCUMENT_TITLE = pandoc.utils.stringify(el.content)
    shouldOmit = true
  end

  if el.identifier == "titlearea" or el.classes:includes("levels") then
    shouldOmit = true
  end

  -- Exclude ttc/navpath divs, they're not shown in the regular Doxygen output --
  if el.classes:includes("ttc") or el.classes:includes("navpath") then
    shouldOmit = true
  end

  if shouldOmit then
    return {}
  end

  -- Return a caption div as-is, we'll remove it later --
  if el.classes:includes("caption") then
    return el;
  end

  if el.classes:includes("image") then
    local caption = nil;

    local image = findImageInDivBlock(el)

    -- Find image caption
    for i, content in ipairs(el.content or {}) do
      if content.t == "Div" and content.classes:includes("caption") then
        caption = pandoc.utils.stringify(content.content)

        -- Remove the caption div, we don't need it anymore
        el.content[i] = nil
      end
    end

    if image and caption then
      image.caption = caption
    end
  end

  return el.content
end

function Image(el) 
  -- Strip attributes from images --
  el.attributes = {}
  return el
end

local function join(tbl, sep)
  sep = sep or ", "
  return table.concat(tbl, sep)
end

-- BLOCK FILTERS END --

function Pandoc(doc)
  for i, block in ipairs(doc.blocks) do
    doc.blocks[i] = pandoc.walk_block(block, {
      Link = function(link)
        local target = link.target
        local base, fragment = string.match(target, "^([^#]*)#(.+)$")
        local isTargetingSameFile = (base == CURRENT_FILE_NAME) or base == nil or base == ""

        debugLog("Processing link: " .. pandoc.utils.stringify(link.content) .. ", target: " .. target)

        -- If it's targeting the same file, omit the base (filename) and replace the fragment with the lowercased original fragment as GitBook lowercases all header IDs (even if a custom ID is provided)
        if isTargetingSameFile and fragment then
          local newTarget = '#' .. fragment:lower()
          return pandoc.Link(link.content, newTarget, link.title, link.attr)
        end

        -- If it's not targeting the same file, we need to make an HTML <a> instead

        -- If there's no fragment base will be null, it should fall back to the link target
        if base == nil and fragment == nil then
          base = link.target
        end

        local baseWithMarkdownExtension = base:gsub("%.html", ".md")
        local normalizedFragment = ""

        if fragment then
          normalizedFragment = '#' .. fragment:lower()
        end
        
        -- Render an <a> tag, we'll unescape it later
        return pandoc.RawInline('html', '<a href="' .. baseWithMarkdownExtension .. normalizedFragment .. '">' .. pandoc.utils.stringify(link.content) .. '</a>')
      end
    })
  end


  for i, block in ipairs(doc.blocks) do
    doc.blocks[i] = pandoc.walk_block(block, {
      Span = function(el)
        -- Convert span image placeholder into an Image element. If we do this earlier and they're in a table, it will be forced grid table
        for k,v in pairs(el.attr.attributes) do
          if k == "img-src" then
            return pandoc.Image(el.content, v)
          end
        end

        -- Replace internal start and end paragraph placeholders with HTML paragraph tags, we'll unescape them later
        if el.classes:includes("internal-start-p") then
          return pandoc.Span(pandoc.RawInline('html', '<p>'), {})
        end

        if el.classes:includes("internal-end-p") then
          return pandoc.Span(pandoc.RawInline('html', '</p>'), {})
        end

        if el.classes:includes("internal-line-break") then
          return pandoc.Span(pandoc.RawInline('html', '<br/>'), {})
        end

        el.classes = {}
        
        -- Get rid of empty spans
        if isEmptySpan(el) then
          return {}
        end

        return el
      end
    })
  end

  if DOCUMENT_TITLE then
    doc.meta.title = DOCUMENT_TITLE
  end

  local hiddenPagesJSONFilePath = doc.meta.hiddenPagesJSONFile or nil
  local reader = io.open(hiddenPagesJSONFilePath, "r")
  local rawHiddenPagesJSON = reader:read("*all")
  reader:close()
  local obj, pos, err = json.decode(rawHiddenPagesJSON, 1, nil)
  if err then error('JSON parse error: ' .. err) end

  local hiddenFiles = obj;
  local filenameWithMarkdownExtension = CURRENT_FILE_NAME:gsub("%.html", ".md")

  if contains(hiddenFiles, filenameWithMarkdownExtension) then
    doc.meta.hidden = true
  end

  -- Clear other unneeded metadata
  doc.meta.hiddenPagesJSONFile = nil
  doc.meta.filename = nil
  doc.meta.generator = nil
  doc.meta.viewport = nil

  return doc
end
