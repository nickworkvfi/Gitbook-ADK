---
title: sdi/src/sdi_lang.h

---

# sdi/src/sdi_lang.h



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[sdi::SdiLanguage](classsdi_1_1_sdi_language.md)**  |




## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _SDI_LANG_H_
#define _SDI_LANG_H_

namespace sdi
{
  // include auto-generated language definitions into namespace sdi
#include "generated/lang.h"

  Language languageSupported(unsigned val);

  const char *getLanguageIsoCode(Language lang_id);

  unsigned getLanguage(const char *ISO_639);


  class SdiLanguage
  {
      Language trxLanguageId_;
    public:
      SdiLanguage();

      explicit SdiLanguage(Language languageId);

      Language getLanguageId();

      void setLanguageId(Language languageId);

      void selectLanguage(unsigned char *rsp, unsigned short *rspSize);
  };

} // namespace sdi

#endif // _SDI_LANG_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
