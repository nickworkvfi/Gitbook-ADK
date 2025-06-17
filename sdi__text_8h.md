---
title: sdi/src/sdi_text.h

---

# sdi/src/sdi_text.h



## Namespaces

| Name           |
| -------------- |
| **[sdi](namespacesdi.md)**  |




## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _SDI_TEXT_H_
#define _SDI_TEXT_H_

#include <string>

namespace sdi
{
  // include auto-generated text definitions into namespace sdi
#include "generated/text.h"

  const std::string getInternalTextKey(unsigned EmvTextId);

} // namespace sdi

#endif // _SDI_TEXT_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
