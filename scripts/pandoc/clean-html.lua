-- UTILS START --

local DEBUG = true

local function debugLog(...)
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

local function stringIncludes(str, substr)
  return string.find(str, substr, 1, true) ~= nil
end

local function isBlockImage(block)
  return block.t == "Div" and block.classes:includes("image")
end

local function findImageInDivBlock(block)
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

-- Gets an image placeholder from a div.image block included in a table cell, storing its src and caption.
-- At the end of the transformation in another script, we convert it back into an image.
-- This is necessary because pandoc does not support images inside pipe tables but GitBook does.
-- If we didn't do this before running the subsequent script, Pandoc would always choose a grid
-- table, even if we removed all images in the other script.
local function getImagePlaceholderForTable(block)
  local foundSrc = nil

  -- Find image src in div

  local image = findImageInDivBlock(block)

  if image then
    foundSrc = image.src
  end

  if foundSrc then
    local attr = pandoc.Attr(
      "",
      {},
      {{"data-img-src", foundSrc}}
    )

    return pandoc.Plain({ pandoc.Span({}, attr) })
  else
    io.stderr:write("⚠️ No image found inside div.image\n")
    return nil
  end
end

local function createParagraphStartPlaceholder()
  local attr = pandoc.Attr(
    "",
    { "internal-start-p" },
    {}
  )
  return pandoc.Span({}, attr)
end

local function createParagraphEndPlaceholder()
  local attr = pandoc.Attr(
    "",
    { "internal-end-p" },
    {}
  )
  return pandoc.Span({}, attr)
end

local function createLineBreakPlaceholder()
  local attr = pandoc.Attr(
    "",
    { "internal-line-break" },
    {}
  )
  return pandoc.Span({}, attr)
end

local function normalizeNoteSectionDefinitionList(el) 
  local blocks = {}
  local blockInlines = {}

  for _, item in ipairs(el.content) do
    local defs = item[2]        -- a list of lists of Blocks (dd contents)

    for _, def in ipairs(defs) do
      -- Flatten all blocks in the def into inlines
      local inlines = {}

      for _, block in ipairs(def) do

        if block.t == "Para" or block.t == "Plain" then
          for _, inline in ipairs(block.c) do
            table.insert(inlines, inline)
          end
          table.insert(inlines, pandoc.Space())
        elseif block.t == "CodeBlock" then
          table.insert(inlines, pandoc.Code(block.text))
          table.insert(inlines, pandoc.Space())
        else
          -- fallback to stringifying unsupported blocks
          table.insert(inlines, pandoc.Str("[unsupported block]"))
          table.insert(inlines, pandoc.Space())
        end
      end

      -- Remove trailing space
      if #inlines > 0 and inlines[#inlines].t == "Space" then
        table.remove(inlines, #inlines)
      end

      -- Add the flattened content to the blockInlines, we'll generate a hint block later
      table.insert(blockInlines, inlines)
    end
  end

  -- Insert a hint, we'll unescape it later
  table.insert(blocks, pandoc.LineBreak())
  table.insert(blocks, pandoc.RawBlock('html', '{% hint style="info" %}'))
  table.insert(blocks, pandoc.LineBreak())
  for _, inlines in ipairs(blockInlines) do
    table.insert(blocks, inlines)
    table.insert(blocks, pandoc.LineBreak())
  end
  table.insert(blocks, pandoc.RawBlock('html', '{% endhint %}'))

  return blocks
end

local function normalizeParamsDefinitionList(el) 
  local blocks = {}

  for _, item in ipairs(el.content) do
    table.insert(blocks, pandoc.Strong(pandoc.utils.stringify(item[1]))) -- the <dt> content
    table.insert(blocks, pandoc.LineBreak())
    table.insert(blocks, pandoc.LineBreak())

    for _, def in ipairs(item[2]) do
      for _, block in ipairs(def) do
        if block.t == "Table" then
          for _, body in ipairs(block.bodies or {}) do
            local rows = body.body or body.rows
            if rows then
              for rowIndex, row in ipairs(rows) do
                local rowBlocks = {}

                for cellIndex, cell in ipairs(row.cells or row) do
                  local cellContents = cell.contents or cell

                  -- Param name should be bold
                  if cell.classes:includes('paramname') then
                    table.insert(rowBlocks, pandoc.Strong(pandoc.utils.stringify(cellContents)))
                  else
                    table.insert(rowBlocks, pandoc.utils.stringify(cellContents))
                  end

                  table.insert(rowBlocks, pandoc.Space())
                end

                table.insert(blocks, rowBlocks)
              end
            end
          end
        end
      end      
    end

    table.insert(blocks, pandoc.LineBreak())
    table.insert(blocks, pandoc.LineBreak())
  end

  return blocks
end

local function normalizeDeprecatedDefinitionList(el)
  local blocks = {}

  for _, item in ipairs(el.content) do
    local deprecatedLinkAnchor = item[1] -- the <dt> content
    local defs = item[2]        -- a list of lists of Blocks (dd contents)

    table.insert(blocks, pandoc.Span(item[1] or {}))

    for _, inline in ipairs(table.unpack(item[2]) or {}) do
      table.insert(blocks, pandoc.Span(inline.content))
    end
  end

  return blocks
end

local function normalizeDefinitionList(el) 
  local blocks = {}

  for _, item in ipairs(el.content) do
    local termInlines = item[1] -- the <dt> content
    local defs = item[2]        -- a list of lists of Blocks (dd contents)

    if termInlines then
      -- Add the term as a header
      local termText = pandoc.utils.stringify(termInlines)

      if #termText > 0 then
        table.insert(blocks, pandoc.Header(3, {pandoc.Str(termText)}))
      end
    end

    for _, def in ipairs(defs) do
      -- Flatten all blocks in the def into inlines
      local inlines = {}

      for _, block in ipairs(def) do

        if block.t == "Para" or block.t == "Plain" then
          for _, inline in ipairs(block.c) do
            table.insert(inlines, inline)
          end
          table.insert(inlines, pandoc.LineBreak())
          table.insert(inlines, pandoc.LineBreak())
        elseif block.t == "CodeBlock" then
          table.insert(inlines, pandoc.Code(block.text))
          table.insert(inlines, pandoc.Space())
        else
          -- fallback to stringifying unsupported blocks
          table.insert(inlines, pandoc.Str("[unsupported block]"))
          table.insert(inlines, pandoc.Space())
        end
      end

      -- Remove trailing space
      if #inlines > 0 and inlines[#inlines].t == "Space" then
        table.remove(inlines, #inlines)
      end

      -- Add the flattened content prefixed with the term
      table.insert(blocks, pandoc.Plain({
        table.unpack(inlines)
      }))
    end
  end

  return blocks
end

local function removeColAndRowSpansFromTableCells(el) 
  -- Remove the colspan from the header cell otherwise we get an unsupported table
  for _, row in ipairs(el.head.rows) do
    for _, cell in ipairs(row.cells or row) do
      cell.col_span = 1
      cell.row_span = 1
    end
  end
  
  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows then
      for rowIndex, row in ipairs(rows) do
        for cellIndex, cell in ipairs(row.cells or row) do
          cell.col_span = 1
          cell.row_span = 1
        end
      end
    end
  end

  return el
end

local function removeHeadersFromTableCells(el) 
  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows then
      for rowIndex, row in ipairs(rows) do
        for cellIndex, cell in ipairs(row.cells or row) do
          for _, cellBlock in ipairs(cell.contents or cell) do
            if cellBlock.t == "Header" then
              cell.content = pandoc.Plain(pandoc.utils.stringify(cellBlock.content))
            end
          end
        end
      end
    end
  end

  return el
end

local function normalizeLineBreaksAndHeadersFromTableCells(el) 
  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows then
      for rowIndex, row in ipairs(rows) do
        for cellIndex, cell in ipairs(row.cells or row) do
          for _, cellBlock in ipairs(cell.contents or cell) do
            if cellBlock.t == "Header" then
              cell.content = pandoc.Plain(pandoc.utils.stringify(cellBlock.content))
            else
              for inlineIndex, inline in ipairs(cellBlock.content or {}) do
                if inline.t == "LineBreak" then
                  cellBlock.content[inlineIndex] = createLineBreakPlaceholder()
                end
              end
            end
          end
        end
      end
    end
  end

  return el
end

local function removeParagraphsFromTableCells(el) 
  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows then
      for rowIndex, row in ipairs(rows) do
        for cellIndex, cell in ipairs(row.cells or row) do
          for inlineIndex, cellBlock in ipairs(cell.contents or cell) do
            if cellBlock.t == "Para" then
              local inlines = {}

              table.insert(inlines, createParagraphStartPlaceholder())

              for _, inline in ipairs(cellBlock.content) do
                if inline.t ~= "LineBreak" then
                  table.insert(inlines, inline)
                else
                  table.insert(inlines, createLineBreakPlaceholder())
                end
              end

              table.insert(inlines, createParagraphEndPlaceholder())

              cell.contents[inlineIndex] = inlines
            end
          end
        end
      end
    end
  end

  return el
end

local function normalizeUnorderedListInTableCell(el) 
  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows then
      for rowIndex, row in ipairs(rows) do
        for cellIndex, cell in ipairs(row.cells or row) do
          for inlineIndex, cellBlock in ipairs(cell.contents or cell) do
            
            if cellBlock.t == "BulletList" then
              local bulletItems = {}

              for _, item in ipairs(cellBlock.content) do
                for _, block in ipairs(item) do

                  table.insert(block.content, 1, "• ")

                  for blockInlineIndex, inline in ipairs(block.content or {}) do
                    if inline.t == "LineBreak" then
                      block.content[blockInlineIndex] = pandoc.Str("")
                    end
                  end
                  
                  table.insert(bulletItems, block.content)
                end
              end

              cell.contents[inlineIndex] = table.unpack(bulletItems)
            end
          end
        end
      end
    end
  end

  return el
end

local function removeSeparatorRowsFromTable(el) 
  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows then
      for rowIndex, row in ipairs(rows) do
        for _, class in ipairs(row.classes) do
          if stringIncludes(class, "separator") then
            table.remove(rows, rowIndex)
          end
        end
      end
    end
  end

  return el
end

local function normalizeFieldTable(el)
  local tableWithoutColspans = removeColAndRowSpansFromTableCells(el)
  local tableWithoutParagraphs = removeParagraphsFromTableCells(tableWithoutColspans)
  local tableWithNormalizedLists = normalizeUnorderedListInTableCell(tableWithoutParagraphs)
  local tableWithoutLineBreaks = normalizeLineBreaksAndHeadersFromTableCells(tableWithNormalizedLists)
  return tableWithoutLineBreaks
end

local function normalizeMemberDeclarationsTable(el)
  local tableWithoutColspans = removeColAndRowSpansFromTableCells(el)
  local tableWithoutLineBreaks = normalizeLineBreaksAndHeadersFromTableCells(tableWithoutColspans)
  local tableWithoutHeaders = removeHeadersFromTableCells(tableWithoutLineBreaks)
  local tableWithoutSeparators = removeSeparatorRowsFromTable(tableWithoutHeaders)

  return el
end

local function normalizeMlabelsTable(el)
  local blocks = {}

  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows and rows[1] then
      local firstRow = rows[1]
      local nestedTableCell = firstRow.cells[1]
      local labelCell = firstRow.cells[2]

      table.insert(blocks, pandoc.Div(nestedTableCell.contents))
      table.insert(blocks, pandoc.Div(labelCell.contents))
    end
  end

  return blocks
end

-- UTILS END --

-- FILTERS START --

function Table(el)
  -- Removes unnecessary colgroup elements which will cause it to generate a grid table instead of pipe
  el.colspecs = el.colspecs:map(function (colspec)
      local align = colspec[1]
      local width = nil  -- default width
      return {align, width}
  end)

  if el.classes:includes("fieldtable") then
    return normalizeFieldTable(el)
  end

  if el.classes:includes("memberdecls") then
    return normalizeMemberDeclarationsTable(el)
  end

  if el.classes:includes("mlabels") then
    return normalizeMlabelsTable(el)
  end

  el = normalizeLineBreaksAndHeadersFromTableCells(el)
  el = removeColAndRowSpansFromTableCells(el)
  
  for _, body in ipairs(el.bodies or {}) do
    local rows = body.body or body.rows
    if rows then
      for rowIndex, row in ipairs(rows) do
        for cellIndex, cell in ipairs(row.cells or row) do
          local cellBlocks = cell.contents or cell
          
          if type(cellBlocks) == "table" then
            for i = #cellBlocks, 1, -1 do
              local cellBlock = cellBlocks[i]

              if isBlockImage(cellBlock) then
                cellBlocks[i] = getImagePlaceholderForTable(cellBlock)
              else
                -- Cellblock is a plain, loop through contents to determine where to add paragraph placeholders
                if cellBlock.t == "Plain" then
                  local newInlines = {}
                  local isInsideParagraph = false

                  for _, plainChild in ipairs(cellBlock.content) do
                    if not isInsideParagraph then
                      table.insert(newInlines, createParagraphStartPlaceholder())
                      isInsideParagraph = true
                    end

                    if plainChild.t == "LineBreak" then
                      table.insert(newInlines, createParagraphEndPlaceholder())
                      isInsideParagraph = false
                    else
                      table.insert(newInlines, plainChild)
                    end
                  end

                  -- if the last paragraph never ended with a LineBreak, close it now
                  if isInsideParagraph then
                    table.insert(newInlines, createParagraphEndPlaceholder())
                  end

                  cellBlocks[i] = pandoc.Plain(newInlines)
                elseif cellBlock.t == "Header" then
                  cellBlocks[i] = pandoc.Plain(pandoc.Str(pandoc.utils.stringify(cellBlock.content)))
                end
              end
            end
          end
        end
      end
    end
  end

  return el
end

function DefinitionList(el)
  local hasDefinitionTermWithNote = false
  local hasDefinitionTermWithParams = false
  local hasDefinitionTermWithDeprecated = false

  for _, item in ipairs(el.content) do
    local termInlines = item[1] -- the <dt> content
    local content = pandoc.utils.stringify(termInlines)

    if content == "Note" then
      hasDefinitionTermWithNote = true
    elseif content == "Parameters"  then
      hasDefinitionTermWithParams = true
    elseif stringIncludes(content, "Deprecated") then
      hasDefinitionTermWithDeprecated = true
    end
  end

  if hasDefinitionTermWithNote then
    return normalizeNoteSectionDefinitionList(el)
  end

  if hasDefinitionTermWithParams then
    return normalizeParamsDefinitionList(el)
  end

  if hasDefinitionTermWithDeprecated then
    return normalizeDeprecatedDefinitionList(el)
  end
  
  return normalizeDefinitionList(el)
end

-- FILTERS END --
