local json = require 'pandoc.json'

local CURRENT_FILE_NAME = nil
local PAGES_MAP = {}
local PAGES_JSON_FILE_PATH = nil

function Meta(meta)
  local filename = pandoc.utils.stringify(meta.filename or "")
  local pagesJSONFilePath = meta.pagesJSONFile or nil

  local reader = io.open(pagesJSONFilePath, "r")
  local rawPagesJSON = reader:read("*all")
  reader:close()
  local obj, pos, err = json.decode(rawPagesJSON, 1, nil)
  if err then error('JSON parse error: ' .. err) end

  PAGES_JSON_FILE_PATH = pagesJSONFilePath
  PAGES_MAP = obj
  CURRENT_FILE_NAME = filename
end

function Div(el)
  if el.classes:includes('title') then
    DOCUMENT_TITLE = pandoc.utils.stringify(el.content)
    return {}
  end
end

function Pandoc(doc)
  if DOCUMENT_TITLE then
    -- Update the pages map with the current file name and document title
    PAGES_MAP[CURRENT_FILE_NAME:gsub("%.html", ".md")] = DOCUMENT_TITLE

    local writer = io.open(PAGES_JSON_FILE_PATH, "w")
    writer:write(json.encode(PAGES_MAP, {
      indent = true,
      newline = '\n'
    }))
    writer:close()
  end
  return doc
end
