---
title: sdi/src/sdi_text.cpp

---

# sdi/src/sdi_text.cpp



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

#include "sdi_text.h"
#include "emv/EMV_Common_Interface.h"

namespace sdi
{

  // include auto-generated text definitions into namespace sdi
#include "generated/text.cpp"

  const std::string getInternalTextKey(unsigned EmvTextId)
  {
    // mapping
    switch (EmvTextId)
    {
      default:
      case EMV_ADK_TXT_NO_TXT:
        break; // TXT_NO_TXT

      case EMV_ADK_TXT_REFUND_CONF_AMOUNT:
        return TXT_REFUND_CONF_AMOUNT;

      case EMV_ADK_TXT_AMOUNT:
        return TXT_AMOUNT;

      case EMV_ADK_TXT_APPROVED:
        return TXT_APPROVED;

      case EMV_ADK_TXT_DECLINED:
        return TXT_DECLINED;

      case EMV_ADK_TXT_NOT_ACCEPTED:
        return TXT_NOT_ACCEPTED;

      case EMV_ADK_TXT_CARD_ERROR:
        return TXT_CARD_ERROR;

      case EMV_ADK_TXT_PROCESSING_ERROR:
        return TXT_PROCESSING_ERROR;

      case EMV_ADK_TXT_CARD_READ_OK:
        return TXT_CARD_READ_OK;

      case EMV_ADK_TXT_AUTHORIZING:
        return TXT_AUTHORIZING;

      case EMV_ADK_TXT_REMOVE_CARD:
        return TXT_REMOVE_CARD;

      case EMV_ADK_TXT_USE_CHIP_READER:
        return TXT_USE_CHIP_READER;

      case EMV_ADK_TXT_USE_MAG_STRIPE:
        return TXT_USE_MAG_STRIPE;

      case EMV_ADK_TXT_VOICEAUT:
        return TXT_VOICEAUT;

      case EMV_ADK_TXT_SEE_PHONE:
        return TXT_SEE_PHONE;

      case EMV_ADK_TXT_RETAP_SAME:
        return TXT_RETAP;

      case EMV_ADK_TXT_RETAP_SAME_L1:
        return TXT_RETAP_L1;

      case EMV_ADK_TXT_2_CARDS_IN_FIELD:
        return TXT_2_CARDS_IN_FIELD;

      case 0x27:
        return TXT_LAST_PIN_TRY; // No EMV ID! Still required?

      case 0x30:
        return TXT_INVALID_PIN;  // No EMV ID! Still required?

      case EMV_ADK_TXT_3AMO_TIP:
        return TXT_3AMO_TIP;

      case EMV_ADK_TXT_3AMO_CASHBACK:
        return TXT_3AMO_CASHBACK;

      case EMV_ADK_TXT_AUTH_APPROVED:
        return TXT_AUTH_APPROVED;

      case EMV_ADK_TXT_AUTH_DECLINED:
        return TXT_AUTH_DECLINED;
    }

    return TXT_NO_TXT;
  }
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
