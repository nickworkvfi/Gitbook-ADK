---
hidden: true
title: sdi_text.h
---

<a href="sdi__text_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _SDI_TEXT_H_
 9 #define _SDI_TEXT_H_
 10 
 11 #include <string>
 12 
 13 namespace sdi
 14 {
 15  // include auto-generated text definitions into namespace sdi
 16 #include "generated/text.h"
 17 
 25  const std::string getInternalTextKey(unsigned EmvTextId);
 26 
 27 } // namespace sdi
 28 
 29 #endif // _SDI_TEXT_H_
```
