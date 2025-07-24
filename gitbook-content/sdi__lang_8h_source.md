---
hidden: true
title: sdi_lang.h
---

<a href="sdi__lang_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _SDI_LANG_H_
 9 #define _SDI_LANG_H_
 10 
 11 namespace sdi
 12 {
 13  // include auto-generated language definitions into namespace sdi
 14 #include "generated/lang.h"
 15 
 20  Language languageSupported(unsigned val);
 21 
 27  const char *getLanguageIsoCode(Language lang_id);
 28 
 35  unsigned getLanguage(const char *ISO_639);
 36 
 37 
 38  class SdiLanguage
 39  {
 40  Language trxLanguageId_;
 41  public:
 43  SdiLanguage();
 44 
 49  explicit SdiLanguage(Language languageId);
 50 
 55  Language getLanguageId();
 56 
 61  void setLanguageId(Language languageId);
 62 
 68  void selectLanguage(unsigned char *rsp, unsigned short *rspSize);
 69  };
 70 
 71 } // namespace sdi
 72 
 73 #endif // _SDI_LANG_H_
```
