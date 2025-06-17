---
title: cpl/include/commerce/CpTrigger.h

---

# cpl/include/commerce/CpTrigger.h



## Namespaces

| Name           |
| -------------- |
| **[vficpl](namespacevficpl.md)**  |




## Source code

```cpp
#ifndef CPTRIGGER_H_
#define CPTRIGGER_H_

namespace vficpl
{
  typedef enum
  {
    NOTIF_IDLE = 0,

    NOTIF_MANUAL_LAUNCH = 1,

    REQUEST_CUSTOMER_IDENTIFICATION = 16,

    NOTIF_TRX_STARTED = 2,

    REQUEST_BASKET_ADJUSTMENT = 3,

    NOTIF_BASKET_FINALIZED = 4,

    REQUEST_LOYALTY = 5,

    REQUEST_AMOUNT_ADJUSTMENT = 6,

    NOTIF_AMOUNT_FINALIZED = 7,

    REQUEST_ALT_PAYMENT = 8,

    REQUEST_TECH_ALT_PAYMENT = 17,

    NOTIF_CARD_PRESENTED = 9,

    NOTIF_CARD_BIN_RECEIVED = 10,

    REQUEST_PAYMENT_AMOUNT_ADJUSTMENT = 11,

    NOTIF_AUTHORIZATION_COMPLETED = 12,

    NOTIF_PAYMENT_COMPLETED = 13,

    REQUEST_RECEIPT_MANAGEMENT = 14,

    NOTIF_TRX_ENDED = 15

  } CpTrigger;
} // namespace vficpl

#endif // CPTRIGGER_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
