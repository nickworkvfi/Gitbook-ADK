---
title: sdi/src/sdi_lang.cpp

---

# sdi/src/sdi_lang.cpp



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[XML_TAG_TERMDATA](sdi__lang_8cpp.md#define-xml-tag-termdata)**  |
|  | **[XML_TAG_TERMDATA_SUPP_LANG](sdi__lang_8cpp.md#define-xml-tag-termdata-supp-lang)**  |




## Macros Documentation

### define XML_TAG_TERMDATA

```cpp
#define XML_TAG_TERMDATA "TerminalData"
```


### define XML_TAG_TERMDATA_SUPP_LANG

```cpp
#define XML_TAG_TERMDATA_SUPP_LANG "SuppLang"
```


## Source code

```cpp
#include "sdi_lang.h"

#include <stdio.h>
#include <string.h>
#include <string>
#include <fcntl.h>
#include <unistd.h>
#include "_logf.h"
#include "hexutil.h"
#include "xmldoc.h"
#include "emv/E2E_EMV_CT_Serialize.h"
#include "emv_common.h"
#include "sdi_tags.h"
#include "filesystem.h"
#include "pathutil.h"

#define XML_TAG_TERMDATA             "TerminalData"
#define XML_TAG_TERMDATA_SUPP_LANG   "SuppLang"

using namespace std;

namespace sdi
{
  // include auto-generated language table into namespace sdi
#include "generated/lang.cpp"

  /**** LANGUAGE MAP FUNCTIONS ****/

  Language languageSupported(unsigned val)
  {
    if (val >= (sizeof(langMapTable) / sizeof(langMapTable[0])))
    {
      // invalid language ID
      return LANG_NO_LANG;
    }

    if (!langMapTable[val].supported)
    {
      // language not supported by SDI
      return LANG_NO_LANG;
    }

    // language ID valid and supported
    return (Language) val;
  }

  const char *getLanguageIsoCode(Language lang_id)
  {
    if ((unsigned)lang_id < (sizeof(langMapTable) / sizeof(langMapTable[0])))
    {
      return langMapTable[lang_id].ISO_639;
    }

    return "";
  }

  unsigned getLanguage(const char *ISO_639)
  {
    if (!ISO_639)
    {
      return 0;
    }

    char iso[3] = {0, 0, 0};
    iso[0] = tolower(ISO_639[0]);
    iso[1] = tolower(ISO_639[1]);

    for (unsigned i = 0; i < sizeof(langMapTable) / sizeof(langMapTable[0]); i++)
    {
      if (strcmp(iso, langMapTable[i].ISO_639) == 0)
      {
        return i;
      }
    }

    return 0;
  }

  /**** SdiLanguage CLASS IMPLEMENTATION ****/

  static void getTermLangs(vector<unsigned char> &termLangs)
  {
    int    hfile;
    char   *fileContent = NULL;
    struct XMLDocument xmlDoc;
    struct XMLNode *ck;

    termLangs.clear();

    string emv_term_file = pathcat(sdi::filesystem::emv_flash_dir(), "EMV_Terminal.xml");
    // Open XML file
    hfile = open(emv_term_file.c_str(), O_RDONLY);

    if (hfile != -1)
    {
      int fileSize = 0;
      int bytesRead = 0;

      // Determine the file size
      fileSize = lseek(hfile, 0, SEEK_END);
      lseek(hfile, 0, SEEK_SET);

      _LOGF_INFO("%s %d %s", "getTermLangs: fileSize =", fileSize, "Bytes");

      // Allocate enough memory and load the file content
      if (fileSize > 0)
      {
        fileContent = (char *)malloc(fileSize + 1);
      }

      if (!fileContent)
      {
        _LOGF_ERROR("getTermLangs: fileContent ERROR");

        // Close the XML file
        close(hfile);

        return; //ToDo: Correct value?
      }
      else
      {
        // Initialize buffer
        memset(fileContent, 0x00, fileSize + 1);

        // Load file content into memory
        bytesRead = read(hfile, fileContent, fileSize);
      }

      // Close the XML file
      close(hfile);

      if (bytesRead <= 0)
      {
        free(fileContent);

        _LOGF_ERROR("getTermLangs: bytesRead ERROR");

        return; //ToDo: Correct value?
      }
    }
    else
    {
      _LOGF_ERROR("getTermLangs: hfile ERROR");

      return; //ToDo: Correct value?
    }

    XMLDocument__Constructor(&xmlDoc, XMLTokenizer__ISOLATIN1);

    if (XMLDocument__read(&xmlDoc, fileContent) == 0)
    {
      free(fileContent);

      _LOGF_ERROR("getTermLangs: XMLDocument__read ERROR");

      XMLDocument__Destructor(&xmlDoc);
      return; //ToDo: Correct value?
    }

    if ((ck = XMLDocument__findNode(&xmlDoc, XML_TAG_TERMDATA)) != NULL)
    {
      struct XMLNode *node;

      _LOGF_INFO("getTermLangs: XML_TAG_TERMDATA found");

      // Supported Languages
      if ((node = XMLNode__findNode(ck, XML_TAG_TERMDATA_SUPP_LANG)) != NULL)
      {
        struct XMLNode *content;
        const char *val;

        if ((content = XMLNode__findNode(node, "")) != NULL && (val = XMLNode__getValue(content)) != NULL && strlen(val) > 0)
        {
          termLangs.resize(strlen(val) / 2);

          if (sdi::hextobin(&termLangs[0], (const unsigned char *)val, strlen(val)) != 1)
          {
            termLangs.clear();
          }
        }
      }
    }

    free(fileContent);
    XMLDocument__Destructor(&xmlDoc);
  }

  SdiLanguage::SdiLanguage() :
    trxLanguageId_(LANG_ENGLISH)
  {
    // nothing else to do
  }

  SdiLanguage::SdiLanguage(Language languageId) :
    trxLanguageId_(languageId)
  {
    // nothing else to do
  }

  Language SdiLanguage::getLanguageId()
  {
    return trxLanguageId_;
  }

  void SdiLanguage::setLanguageId(Language languageId)
  {
    trxLanguageId_ = languageId;
  }

  void SdiLanguage::selectLanguage(unsigned char *rsp, unsigned short *rspSize)
  {
    vector<char> emvPrefLangs;
    emvPrefLangs.resize(512);

    int emvPrefLangSize = csd::getTagData(&rsp[4], *rspSize - 4, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, "5F2D"),
                                          (unsigned char *)&emvPrefLangs[0], emvPrefLangs.size());

    if (emvPrefLangSize <= 0)
    {
      _LOGF_INFO("%s: No language preferences in 5F2D (emvPrefLangSize=%d)", __FUNCTION__, emvPrefLangSize) ;
      return;
    }

    emvPrefLangs.resize(emvPrefLangSize);
    emvPrefLangs.push_back(0); // C-String

    _LOGF_INFO("%s: Language preferences in 5F2D: %s (emvPrefLangSize=%d)", __FUNCTION__, &emvPrefLangs[0], emvPrefLangSize);

    vector<unsigned char> termLangs;
    // Get terminal language configuration from XML file
    getTermLangs(termLangs);

    if (!termLangs.empty())
    {
#ifdef _DEBUG
      _LOGF_INFO("%s: termLangs:", __FUNCTION__);
      _LOGAPI_HEXDUMP_RAW_INFO(&termLangs[0], termLangs.size());
#endif

      for (unsigned i = 0; i < (unsigned)emvPrefLangSize; i += 2)
      {
        bool matched = false;
        unsigned lang = getLanguage(&emvPrefLangs[i]);

        if (lang != 0)
        {
          // Check for language matching
          for (unsigned j = 0; j < termLangs.size(); j++)
          {
            if (termLangs[j] == 0x00)
            {
              break;
            }

            if (termLangs[j] == lang)
            {
              _LOGF_INFO("%s: Language MATCHED -> %02X", __FUNCTION__, lang);

              Language sdi_lang = languageSupported(lang);

              if (sdi_lang != LANG_NO_LANG)
              {
                trxLanguageId_ = sdi_lang;
                matched = true;
              }

              break;
            }
          }

          if (matched)
          {
            break;
          }
        }
      }
    }
  }

} // namespace sdi
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
