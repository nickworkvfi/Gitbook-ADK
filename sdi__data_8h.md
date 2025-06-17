---
title: sdiclient/client/sdi_data.h

---

# sdiclient/client/sdi_data.h



## Functions

|                | Name           |
| -------------- | -------------- |
| [EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[SDI_fetchTxnTags](sdi__data_8h.md#function-sdi-fetchtxntags)**(unsigned char options, unsigned long * requestedTags, unsigned short noOfRequestedTags, unsigned char * tlvBuffer, unsigned short bufferLength, unsigned short * tlvDataLength)<br>Fetch one or several tags at the end of the transaction, excluding sensitive cardholder data.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_DATA](sdi__data_8h.md#define-cla-data)** <br>Class for Data Handling.  |
|  | **[INS_FETCH_TAGS](sdi__data_8h.md#define-ins-fetch-tags)** <br>Fetch Tags.  |
|  | **[SENSITIVE_TAG_OMIT](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-sensitive-tag-omit)** <br>(b1 & b2): Default handling of sensitive tags by [SDI_fetchTxnTags()](): Sensitive tags are not returned in the response.  |
|  | **[SENSITIVE_TAG_TRUNCATE](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-sensitive-tag-truncate)** <br>b1: Sensitive tags are returned with zero length. Note: b1 and b2 are mutually exclusive  |
|  | **[SENSITIVE_TAG_REPLACE](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-sensitive-tag-replace)** <br>b2: Sensitive tags are returned with data replaced by 0xFF bytes and original length  |
|  | **[FETCHTAGS_EXPIRY_DATE_IN_CLEAR](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-fetchtags-expiry-date-in-clear)** <br>b3: Get expiry date (tag 5F24) in clear text if VCL encryption is enabled  |
|  | **[FETCHTAGS_GET_DATA](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-fetchtags-get-data)** <br>b4: Use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only)  |


## Functions Documentation

### function SDI_fetchTxnTags

```cpp
EMV_ADK_INFO SDI_fetchTxnTags(
    unsigned char options,
    unsigned long * requestedTags,
    unsigned short noOfRequestedTags,
    unsigned char * tlvBuffer,
    unsigned short bufferLength,
    unsigned short * tlvDataLength
)
```

Fetch one or several tags at the end of the transaction, excluding sensitive cardholder data. 

**Parameters**: 

  * **options** ... fetch tags options, see [Options for fetching TLV data](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md)
  * **requestedTags** ... requested tags 
  * **noOfRequestedTags** ... number of requested tags 
  * **tlvBuffer** ... buffer for TLV output, allocated by calling application 
  * **bufferLength** ... number of bytes allocated for tlvBuffer 
  * **tlvDataLength** ... number of bytes written to tlvBuffer


**Return**: EMV_ADK_OK, EMV_ADK_PARAM, EMV_ADK_TLV_BUILD_ERR, EMV_ADK_INTERNAL 

**Author**: GSS R&D Germany

One common function for all technologies: CT, CTLS, MSR and manual entry. Sensitive tags are excluded from the returned data in the way defined by the parameter `mode`. The SDI Server has a predefined set of sensitive tags. Additionally, the user can configure additional sensitive tags using the Software and Configuration Upload command set 20-14, 20-15 and 20-16 as described in the SDI Server documentation. The user can also configure a white list using the same Software and Configuration Upload commands. If a card is in the configured white list, all data is returned in clear text, including also sensitive tags.




## Macros Documentation

### define CLA_DATA

```cpp
#define CLA_DATA 0x29
```

Class for Data Handling. 

### define INS_FETCH_TAGS

```cpp
#define INS_FETCH_TAGS 0x02
```

Fetch Tags. 

### define SENSITIVE_TAG_OMIT

```cpp
#define SENSITIVE_TAG_OMIT 0
```

(b1 & b2): Default handling of sensitive tags by [SDI_fetchTxnTags()](): Sensitive tags are not returned in the response. 

### define SENSITIVE_TAG_TRUNCATE

```cpp
#define SENSITIVE_TAG_TRUNCATE 0x01
```

b1: Sensitive tags are returned with zero length. Note: b1 and b2 are mutually exclusive 

### define SENSITIVE_TAG_REPLACE

```cpp
#define SENSITIVE_TAG_REPLACE 0x02
```

b2: Sensitive tags are returned with data replaced by 0xFF bytes and original length 

### define FETCHTAGS_EXPIRY_DATE_IN_CLEAR

```cpp
#define FETCHTAGS_EXPIRY_DATE_IN_CLEAR 0x04
```

b3: Get expiry date (tag 5F24) in clear text if VCL encryption is enabled 

### define FETCHTAGS_GET_DATA

```cpp
#define FETCHTAGS_GET_DATA 0x08
```

b4: Use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only) 

## Source code

```cpp
/****************************************************************************
*  Product:     ADK Secure Data Interface (SDI)
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     Client (structure) interface - Data functions
****************************************************************************/

#ifndef _SDI_DATA_H_   /* avoid double interface-includes */
#define _SDI_DATA_H_

#ifdef __cplusplus
extern "C" {
#endif

#include "emv/EMV_CT_Interface.h"
#include "emv/EMV_CTLS_Interface.h"

// from sdi/csd/data.h
#define CLA_DATA                0x29 
#define INS_FETCH_TAGS          0x02 

#define SENSITIVE_TAG_OMIT             0     
#define SENSITIVE_TAG_TRUNCATE         0x01  
#define SENSITIVE_TAG_REPLACE          0x02  
#define FETCHTAGS_EXPIRY_DATE_IN_CLEAR 0x04  
#define FETCHTAGS_GET_DATA             0x08  


/*****************************************************************************
*  SDI_fetchTxnTags
*****************************************************************************/
EMV_ADK_INFO SDI_fetchTxnTags(unsigned char options, unsigned long* requestedTags, unsigned short noOfRequestedTags, unsigned char* tlvBuffer, unsigned short bufferLength, unsigned short* tlvDataLength);


#ifdef __cplusplus
}     // extern "C"
#endif

#endif  // #ifndef _SDI_DATA_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
