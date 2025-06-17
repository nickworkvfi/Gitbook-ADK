---
title: Data interface

---

# Data interface



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfisdi::SDIClient::PlaceHolder](structvfisdi_1_1_s_d_i_client_1_1_place_holder.md)**  |
| struct | **[vfisdi::SDIClient::Matching](structvfisdi_1_1_s_d_i_client_1_1_matching.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[dataGetEncData](group__sdidata.md#function-datagetencdata)**(unsigned handle, const bytevector & taglist, const bytevector & appdata, unsigned options, bool useStoredTX, bytevector & out, bytevector * iv =0, bytevector * ksn =0) |
| int | **[dataGetEncData](group__sdidata.md#function-datagetencdata)**(unsigned handle, const bytevector & taglist, const bytevector & appdata, unsigned options, bool useStoredTX, bytevector & out, bytevector * iv, bytevector * ksn, bool incrementKSN, unsigned keysetID =0, unsigned masterKeysetID =0) |
| int | **[dataGetEncMsgData](group__sdidata.md#function-datagetencmsgdata)**(unsigned handle, const bytevector & msgtemplate, const std::vector< PlaceHolder > & placeholder, bool useStoredTX, bytevector & out, bytevector * iv =0, bytevector * ksn =0) |
| int | **[dataGetEncMsgData](group__sdidata.md#function-datagetencmsgdata)**(unsigned handle, const bytevector & msgtemplate, const std::vector< PlaceHolder > & placeholder, bool useStoredTX, bytevector & out, bytevector * iv, bytevector * ksn, bool incrementKSN, unsigned keysetID =0, unsigned masterKeysetID =0) |
| int | **[dataFetchTxnTags](group__sdidata.md#function-datafetchtxntags)**(const std::vector< unsigned > & taglist, bytevector & out, unsigned char mode =0, bool cleartext_date =false) |
| int | **[dataFetchTxnTags](group__sdidata.md#function-datafetchtxntags)**(const std::vector< unsigned > & taglist, bytevector & out, unsigned char mode, bool cleartext_date, unsigned options) |
| int | **[dataClearDataStore](group__sdidata.md#function-datacleardatastore)**() |
| int | **[dataGetMsgSignature](group__sdidata.md#function-datagetmsgsignature)**(unsigned handle, const bytevector & msgtemplate, const std::vector< PlaceHolder > & placeholder, bool useStoredTX, bytevector & out, bytevector * iv =0, bytevector * ksn =0) |
| int | **[dataGetMsgSignature](group__sdidata.md#function-datagetmsgsignature)**(unsigned handle, const bytevector & msgtemplate, const std::vector< PlaceHolder > & placeholder, bool useStoredTX, bytevector & out, bytevector * iv, bytevector * ksn, bool incrementKSN, unsigned keysetID =0, unsigned masterKeysetID =0) |
| int | **[dataPerformValidationChecks](group__sdidata.md#function-dataperformvalidationchecks)**(const Array< 3 > & date, Matching & match, std::vector< Matching > * additional =0) |
| int | **[dataPerformValidationChecks](group__sdidata.md#function-dataperformvalidationchecks)**(const Array< 3 > & date, const bytevector & iin, Matching & match, std::vector< Matching > * additional =0) |
| int | **[dataGetValidationInfo](group__sdidata.md#function-datagetvalidationinfo)**(std::string & out) |
| int | **[dataGetEncTxnData](group__sdidata.md#function-datagetenctxndata)**(const std::vector< unsigned > & taglist, bytevector & encrypted) |
| int | **[dataSetEncTxnData](group__sdidata.md#function-datasetenctxndata)**(const bytevector & encrypted) |
| int | **[dataEndEncTxnData](group__sdidata.md#function-dataendenctxndata)**() |
| int | **[dataGetEmvInfo](group__sdidata.md#function-datagetemvinfo)**(EMVConf & emv) |


## Functions Documentation

### function dataGetEncData

```
int dataGetEncData(
    unsigned handle,
    const bytevector & taglist,
    const bytevector & appdata,
    unsigned options,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **taglist** tag list consisting of tag-length pairs 
  * **appdata** application data 
  * **options** data options ([DataOption](namespacevfisdi.md#enum-dataoption)) 
  * **useStoredTX** 
  * **out** encrypted block containing the result of tags with card holder sensitive data 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Encrypt card holder sensitive data. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the result as encrypted BERTLV buffer. (29-01) 


### function dataGetEncData

```
int dataGetEncData(
    unsigned handle,
    const bytevector & taglist,
    const bytevector & appdata,
    unsigned options,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv,
    bytevector * ksn,
    bool incrementKSN,
    unsigned keysetID =0,
    unsigned masterKeysetID =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **taglist** tag list consisting of tag-length pairs 
  * **appdata** application data 
  * **options** data options ([DataOption](namespacevfisdi.md#enum-dataoption)) 
  * **useStoredTX** 
  * **out** encrypted block containing the result of tags with card holder sensitive data 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 
  * **incrementKSN** increment KSN with encryption (default: false) 
  * **keysetID** keyset ID (1,2,3,...), 0: use default 
  * **masterKeysetID** master keyset ID (1,2,3,...), 0: use default 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: 

  * incrementKSN may be ignored by ADKSEC depending on host configuration 
  * masterKeysetID is only relevant for Android. When used keysetID must be provided, too. 


**Par**: 

Encrypt card holder sensitive data. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the result as encrypted BERTLV buffer. (29-01) 


### function dataGetEncMsgData

```
int dataGetEncMsgData(
    unsigned handle,
    const bytevector & msgtemplate,
    const std::vector< PlaceHolder > & placeholder,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **msgtemplate** message template including placeholders for sensitive data elements 
  * **placeholder** placeholder data 
  * **useStoredTX** 
  * **out** encrypted block containing the result of tags with card holder sensitive data 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Encrypt complete host messages that fills sensitive data elements into placeholders. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the encrypted message. (29-01) 


### function dataGetEncMsgData

```
int dataGetEncMsgData(
    unsigned handle,
    const bytevector & msgtemplate,
    const std::vector< PlaceHolder > & placeholder,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv,
    bytevector * ksn,
    bool incrementKSN,
    unsigned keysetID =0,
    unsigned masterKeysetID =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **msgtemplate** message template including placeholders for sensitive data elements 
  * **placeholder** placeholder data 
  * **useStoredTX** 
  * **out** encrypted block containing the result of tags with card holder sensitive data 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 
  * **incrementKSN** increment KSN with encryption (default: false) 
  * **keysetID** keyset ID (1,2,3,...), 0: use default 
  * **masterKeysetID** master keyset ID (1,2,3,...), 0: use default 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: 

  * incrementKSN may be ignored by ADKSEC depending on host configuration 
  * masterKeysetID is only relevant for Android. When used keysetID must be provided, too. 


**Par**: 

Encrypt complete host messages that fills sensitive data elements into placeholders. The command parses the input data (tag list and application data) and fetches the card holder sensitive data from SDI server or ADK-EMV. The response is considered with options for truncation/padding and returns the encrypted message. (29-01) 


### function dataFetchTxnTags

```
int dataFetchTxnTags(
    const std::vector< unsigned > & taglist,
    bytevector & out,
    unsigned char mode =0,
    bool cleartext_date =false
)
```


**Parameters**: 

  * **taglist** list of tags to extract 
  * **out** fetched tags with information 
  * **mode** fetch mode: 0 sensitive tags are not returned, 1: sensitive tags are returned with zero length, 2: sensitive tags are returned with correct length but overwritten with 0xff 
  * **cleartext_date** request expiration date (5F24) encrypted if false or in clear if true 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

fetch non-sensitive transaction data from SDI server (29-02) 


### function dataFetchTxnTags

```
int dataFetchTxnTags(
    const std::vector< unsigned > & taglist,
    bytevector & out,
    unsigned char mode,
    bool cleartext_date,
    unsigned options
)
```


**Parameters**: 

  * **taglist** list of tags to extract 
  * **out** fetched tags with information 
  * **mode** fetch mode: 0: sensitive tags are not returned (default) 1: sensitive tags are returned with zero length, 2: sensitive tags are returned with correct length but overwritten with 0xff 
  * **cleartext_date** request expiration date (5F24) encrypted if false (default) or in clear if true 
  * **options** data options (DFA13A) 0: default 1: Use EMV_ADK_FETCHTAGS_GET_DATA option (for CT only) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

fetch non-sensitive transaction data from SDI server (29-02) 


### function dataClearDataStore

```
int dataClearDataStore()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

clear data store (29-03) 


### function dataGetMsgSignature

```
int dataGetMsgSignature(
    unsigned handle,
    const bytevector & msgtemplate,
    const std::vector< PlaceHolder > & placeholder,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **msgtemplate** message template including placeholders for sensitive data elements (DFA126) 
  * **placeholder** placeholder data 
  * **useStoredTX** 
  * **out** signature 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Fill sensitive data elements into the placeholders and calculates a signature for the complete host messages. (29-04) 


### function dataGetMsgSignature

```
int dataGetMsgSignature(
    unsigned handle,
    const bytevector & msgtemplate,
    const std::vector< PlaceHolder > & placeholder,
    bool useStoredTX,
    bytevector & out,
    bytevector * iv,
    bytevector * ksn,
    bool incrementKSN,
    unsigned keysetID =0,
    unsigned masterKeysetID =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **msgtemplate** message template including placeholders for sensitive data elements (DFA126) 
  * **placeholder** placeholder data 
  * **useStoredTX** 
  * **out** signature 
  * **iv** if not NULL optional initialization vector 
  * **ksn** if not NULL key serial number 
  * **incrementKSN** increment KSN with encryption (default: false) 
  * **keysetID** keyset ID (1,2,3,...), 0: use default 
  * **masterKeysetID** master keyset ID (1,2,3,...), 0: use default 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

**Note**: 

  * incrementKSN may be ignored by ADKSEC depending on host configuration 
  * masterKeysetID is only relevant for Android. When used keysetID must be provided, too. 


**Par**: 

Fill sensitive data elements into the placeholders and calculates a signature for the complete host messages. (29-04) 


### function dataPerformValidationChecks

```
int dataPerformValidationChecks(
    const Array< 3 > & date,
    Matching & match,
    std::vector< Matching > * additional =0
)
```


**Parameters**: 

  * **date** date (DDMMYY) 
  * **match** 
  * **additional** if not NULL additional matches are returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Perform validation checks for the current card regarding the validation table (cardranges.json) stored on the device (29-05) 


### function dataPerformValidationChecks

```
int dataPerformValidationChecks(
    const Array< 3 > & date,
    const bytevector & iin,
    Matching & match,
    std::vector< Matching > * additional =0
)
```


**Parameters**: 

  * **date** date (DDMMYY) 
  * **iin** if not empty Issuer Identification Number (IIN) to be used as alternative for the PAN to find the best match 
  * **match** 
  * **additional** if not NULL additional matches are returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Perform validation checks for the current card regarding the validation table (cardranges.json) stored on the device (29-05) 


### function dataGetValidationInfo

```
int dataGetValidationInfo(
    std::string & out
)
```


**Parameters**: 

  * **out** validation table information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the header information of the validation table file. (29-06) 


### function dataGetEncTxnData

```
int dataGetEncTxnData(
    const std::vector< unsigned > & taglist,
    bytevector & encrypted
)
```


**Parameters**: 

  * **taglist** tag list containing all requested data elements. 
  * **encrypted** encrypted data block containing the requested tags with transaction data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get encrypted transaction data for later use (e.g. offline transaction handling). Data needs to be sent back to SDI-Server with command dataSetEncTxnData (29-07) 


### function dataSetEncTxnData

```
int dataSetEncTxnData(
    const bytevector & encrypted
)
```


**Parameters**: 

  * **encrypted** encrypted data block containing the requested tags with transaction data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set encrypted transaction data (29-08) 


### function dataEndEncTxnData

```
int dataEndEncTxnData()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Finish encrypted transaction data procedure inside the SDI-Server. (29-09) 


### function dataGetEmvInfo

```
int dataGetEmvInfo(
    EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get EMV data from SDI EMV information cache (29-0A) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100