---
title: adk_emv_contactless_programmers_guide.dox

---

# adk_emv_contactless_programmers_guide.dox



## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(unsigned char *pucSend, short sSendSize, unsigned char *pucReceive, short *psReceiveSize, void *externalData) | **[EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt)** <br>not valid  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps)** <br>not valid  |
|  | **[TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)** <br>not valid  |
|  | **[TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks)** <br>not valid  |
|  | **[EMV_CT_SELOP_RESERV_ALLOW_B_ON_A](adk__emv__contactless__programmers__guide_8dox.md#define-emv-ct-selop-reserv-allow-b-on-a)** <br>not valid  |
|  | **[REFERRAL_AFTER_TRX](adk__emv__contactless__programmers__guide_8dox.md#define-referral-after-trx)** <br>not valid  |
|  | **[FB_GERMAN_POS_SPEC](adk__emv__contactless__programmers__guide_8dox.md#define-fb-german-pos-spec)** <br>not valid  |
|  | **[REFUND_CONFIRM_AMOUNT](adk__emv__contactless__programmers__guide_8dox.md#define-refund-confirm-amount)** <br>not valid  |
|  | **[DOM_OPTION_TRX_INTERCEPT](adk__emv__contactless__programmers__guide_8dox.md#define-dom-option-trx-intercept)** <br>not valid  |

## Types Documentation

### typedef EMV_CT_CALLBACK_FnT

```cpp
typedef void(* EMV_CT_CALLBACK_FnT) (unsigned char *pucSend, short sSendSize, unsigned char *pucReceive, short *psReceiveSize, void *externalData);
```

not valid 




## Macros Documentation

### define TAG_BF05_CBK_DOM_APPS

```cpp
#define TAG_BF05_CBK_DOM_APPS 
```

not valid 

### define TAG_BF07_CBK_DCC

```cpp
#define TAG_BF07_CBK_DCC 
```

not valid 

### define TAG_BF06_CBK_LOCAL_CHECKS

```cpp
#define TAG_BF06_CBK_LOCAL_CHECKS 
```

not valid 

### define EMV_CT_SELOP_RESERV_ALLOW_B_ON_A

```cpp
#define EMV_CT_SELOP_RESERV_ALLOW_B_ON_A 
```

not valid 

### define REFERRAL_AFTER_TRX

```cpp
#define REFERRAL_AFTER_TRX 
```

not valid 

### define FB_GERMAN_POS_SPEC

```cpp
#define FB_GERMAN_POS_SPEC 
```

not valid 

### define REFUND_CONFIRM_AMOUNT

```cpp
#define REFUND_CONFIRM_AMOUNT 
```

not valid 

### define DOM_OPTION_TRX_INTERCEPT

```cpp
#define DOM_OPTION_TRX_INTERCEPT 
```

not valid 

## Source code

```cpp

//  ===============================================================================================
//  ===============================================================================================
//  === GROUPS DEFINITIONS
//  ===============================================================================================
//  ===============================================================================================




//  ============================================================================

//  ============================================================================

//  ============================================================================





// ============================================================================





// ===============================================================================================


// ============================================================================


//  ===============================================================================================
//  ===============================================================================================
//  === DUMMIES
//  ===============================================================================================
//  ===============================================================================================

typedef void (* EMV_CT_CALLBACK_FnT) (unsigned char *pucSend, short sSendSize, unsigned char *pucReceive, short *psReceiveSize, void* externalData);

#define TAG_BF05_CBK_DOM_APPS 
#define TAG_BF07_CBK_DCC 
#define TAG_BF06_CBK_LOCAL_CHECKS 

#define EMV_CT_SELOP_RESERV_ALLOW_B_ON_A 

#define REFERRAL_AFTER_TRX 
#define FB_GERMAN_POS_SPEC 
#define REFUND_CONFIRM_AMOUNT 
#define DOM_OPTION_TRX_INTERCEPT 
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
