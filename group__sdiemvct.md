---
title: EMV contact interface

---

# EMV contact interface



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfisdi::SDIClient::CTCandidateData](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate_data.md)**  |
| struct | **[vfisdi::SDIClient::CTCandidate](structvfisdi_1_1_s_d_i_client_1_1_c_t_candidate.md)**  |
| struct | **[vfisdi::SDIClient::AdditionalCardTag](structvfisdi_1_1_s_d_i_client_1_1_additional_card_tag.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[emvCtInit](group__sdiemvct.md#function-emvctinit)**(int aidCount =0, unsigned options =0) |
| int | **[emvCtExit](group__sdiemvct.md#function-emvctexit)**(unsigned options =0) |
| int | **[emvCtSetTermData](group__sdiemvct.md#function-emvctsettermdata)**(const EMVConf & emv) |
| int | **[emvCtGetTermData](group__sdiemvct.md#function-emvctgettermdata)**(EMVConf & emv) |
| int | **[emvCtSetAppData](group__sdiemvct.md#function-emvctsetappdata)**(const bytevector & aid, const EMVConf & emv) |
| int | **[emvCtClearAppData](group__sdiemvct.md#function-emvctclearappdata)**(const bytevector & aid) |
| int | **[emvCtClearAllAppData](group__sdiemvct.md#function-emvctclearallappdata)**() |
| int | **[emvCtSetTempAppData](group__sdiemvct.md#function-emvctsettempappdata)**(const EMVConf & emv) |
| int | **[emvCtGetAppData](group__sdiemvct.md#function-emvctgetappdata)**(const bytevector & aid, EMVConf & emv) |
| int | **[emvCtGetAppData](group__sdiemvct.md#function-emvctgetappdata)**(bool first, EMVConf & emv) |
| int | **[emvCtSetCAPKey](group__sdiemvct.md#function-emvctsetcapkey)**(const Array< 5 > & rid, unsigned char index, const bytevector & key, unsigned char exp, const bytevector & hash =bytevector(), const bytevector & revocationlist =bytevector()) |
| int | **[emvCtClearCAPKey](group__sdiemvct.md#function-emvctclearcapkey)**(const Array< 5 > & rid, unsigned char index) |
| int | **[emvCtClearAllCAPKey](group__sdiemvct.md#function-emvctclearallcapkey)**() |
| int | **[emvCtGetCAPKeys](group__sdiemvct.md#function-emvctgetcapkeys)**(std::vector< CAPKeyInfo > & keys) |
| int | **[emvCtApplyConfig](group__sdiemvct.md#function-emvctapplyconfig)**(unsigned options =0) |
| int | **[emvCtAddVirtualMapEntry](group__sdiemvct.md#function-emvctaddvirtualmapentry)**(int transaction, int currency, unsigned char vterminal) |
| int | **[emvCtClearVirtualMap](group__sdiemvct.md#function-emvctclearvirtualmap)**() |
| int | **[emvCtSmartDetect](group__sdiemvct.md#function-emvctsmartdetect)**(int timeout_ms) |
| int | **[emvCtActivate](group__sdiemvct.md#function-emvctactivate)**(bytevector * atr =0) |
| int | **[emvCtActivate](group__sdiemvct.md#function-emvctactivate)**(unsigned options, bytevector * atr =0) |
| int | **[emvCtDeactivate](group__sdiemvct.md#function-emvctdeactivate)**() |
| int | **[emvCtDeactivate](group__sdiemvct.md#function-emvctdeactivate)**(unsigned options) |
| int | **[emvCtStartTransaction](group__sdiemvct.md#function-emvctstarttransaction)**(EMVTxn & out, EMVTransaction type, const BCD< 6 > amount, const Array< 3 > & date, const Array< 3 > & time, const BCD< 4 > & counter, const EMVTxn & optional =EMVTxn()) |
| int | **[emvCtContinueOffline](group__sdiemvct.md#function-emvctcontinueoffline)**(EMVTxn & out, const EMVTxn & optional =EMVTxn()) |
| int | **[emvCtContinueOnline](group__sdiemvct.md#function-emvctcontinueonline)**(EMVTxn & out, bool onlineResult, const Array< 2 > & authResp =Array< 2 >(), const EMVTxn & optional =EMVTxn()) |
| int | **[emvCtUpdateTxnTags](group__sdiemvct.md#function-emvctupdatetxntags)**(unsigned options, const EMVTxn & config) |
| int | **[emvCtEndTransaction](group__sdiemvct.md#function-emvctendtransaction)**(unsigned options =0) |
| int | **[emvCtGetCandidateData](group__sdiemvct.md#function-emvctgetcandidatedata)**(std::vector< CTCandidateData > & out) |
| int | **[emvCtSendOfflinePIN](group__sdiemvct.md#function-emvctsendofflinepin)**(unsigned short & chipresult) |
| int | **[emvCtCheckSupportedAID](group__sdiemvct.md#function-emvctchecksupportedaid)**(const bytevector & aid, unsigned char asi, const std::string & defaultLabel, std::vector< CTCandidate > & candlist, unsigned short * sw12 =0, const std::vector< AdditionalCardTag > * adtCrdTags =0) |
| int | **[emvCtLED](group__sdiemvct.md#function-emvctled)**(bool ledState) |
| int | **[emvCtSendReceive](group__sdiemvct.md#function-emvctsendreceive)**(unsigned options, const bytevector & in, bytevector & out) |


## Functions Documentation

### function emvCtInit

```
int emvCtInit(
    int aidCount =0,
    unsigned options =0
)
```


**Parameters**: 

  * **aidCount** number of AIDs 
  * **options** EMV options (see [EMVOptions](namespacevfisdi.md#enum-emvoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: The EMV callback function must have been set before invoking this function 

initialize EMV CT framework (39-00) 


### function emvCtExit

```
int emvCtExit(
    unsigned options =0
)
```


**Parameters**: 

  * **options** EMV options 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

exit EMV CTLS framework (39-00) 


### function emvCtSetTermData

```
int emvCtSetTermData(
    const EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV settings 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CT terminal data (39-01) 


### function emvCtGetTermData

```
int emvCtGetTermData(
    EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV settings 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CT terminal data (39-01) 


### function emvCtSetAppData

```
int emvCtSetAppData(
    const bytevector & aid,
    const EMVConf & emv
)
```


**Parameters**: 

  * **aid** AID that is to be configured 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CT application data (39-02) 


### function emvCtClearAppData

```
int emvCtClearAppData(
    const bytevector & aid
)
```


**Parameters**: 

  * **aid** AID that is to be cleared 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear EMV CT application data (39-02) 


### function emvCtClearAllAppData

```
int emvCtClearAllAppData()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear all EMV CT application data (39-02) 


### function emvCtSetTempAppData

```
int emvCtSetTempAppData(
    const EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: Transaction data (such as time stamp or transaction type) can be updated with [emvCtUpdateTxnTags()](group__sdiemvct.md#function-emvctupdatetxntags)

set EMV CT application data for current transaction (39-02) 


### function emvCtGetAppData

```
int emvCtGetAppData(
    const bytevector & aid,
    EMVConf & emv
)
```


**Parameters**: 

  * **aid** AID 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CT application data (39-02) 


### function emvCtGetAppData

```
int emvCtGetAppData(
    bool first,
    EMVConf & emv
)
```


**Parameters**: 

  * **first** if true get data of first AID, if false get data of next AID 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CT application data of first / next AID (39-02) 


### function emvCtSetCAPKey

```
int emvCtSetCAPKey(
    const Array< 5 > & rid,
    unsigned char index,
    const bytevector & key,
    unsigned char exp,
    const bytevector & hash =bytevector(),
    const bytevector & revocationlist =bytevector()
)
```


**Parameters**: 

  * **rid** key register identifier 
  * **index** key index 
  * **key** key data 
  * **exp** key exponent, use 1 for 63357 
  * **hash** if not empty 20 bytes hash 
  * **revocationlist** if not empty key revocation list, each entry has 3 bytes serial number 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CT CAP key (39-03) 


### function emvCtClearCAPKey

```
int emvCtClearCAPKey(
    const Array< 5 > & rid,
    unsigned char index
)
```


**Parameters**: 

  * **rid** key register identifier 
  * **index** key index 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear EMV CT CAP key (39-03) 


### function emvCtClearAllCAPKey

```
int emvCtClearAllCAPKey()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear all EMV CT CAP keys (39-03) 


### function emvCtGetCAPKeys

```
int emvCtGetCAPKeys(
    std::vector< CAPKeyInfo > & keys
)
```


**Parameters**: 

  * **keys** key information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

read EMV CT CAP key information (39-03) 


### function emvCtApplyConfig

```
int emvCtApplyConfig(
    unsigned options =0
)
```


**Parameters**: 

  * **options** options 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Store configuration (39-04) 


### function emvCtAddVirtualMapEntry

```
int emvCtAddVirtualMapEntry(
    int transaction,
    int currency,
    unsigned char vterminal
)
```


**Parameters**: 

  * **transaction** transaction type ([EMVTransaction](namespacevfisdi.md#enum-emvtransaction)) or -1 
  * **currency** currency ([Currency](namespacevfisdi.md#enum-currency)) or -1 
  * **vterminal** virtual terminal number to switch to in case of a match 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: The wildcard -1 cannot be used for both _transaction_ and _currency_ at the same time. 

Add an entry to the CT virtual map. If an entry in the virtual map matches the transaction and currency, switch to the virtual terminal _vterminal_. Use -1 as wildcard for _transaction_ or _currency_ to match all. (39-06) 


### function emvCtClearVirtualMap

```
int emvCtClearVirtualMap()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

remove all entries from virtual map (39-06) 


### function emvCtSmartDetect

```
int emvCtSmartDetect(
    int timeout_ms
)
```


**Parameters**: 

  * **timeout_ms** timeout in milliseconds, range 0..1275000ms, granularity varies from 500ms to 5s. 


**Return**: 0 if card inserted, 1 if card removed, else SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Handle the Smart Card Detection. It can be used for both a card request and a card removal. (41-01) For detecting card removal it has to be invoked with _timeout_ms==0_ in a loop and the return code has to be checked. 


### function emvCtActivate

```
int emvCtActivate(
    bytevector * atr =0
)
```


**Parameters**: 

  * **atr** if not NULL, the ATR is returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Activate smart card (41-02) 


### function emvCtActivate

```
int emvCtActivate(
    unsigned options,
    bytevector * atr =0
)
```


**Parameters**: 

  * **options** bit mask with options from [EMVCtReaderOptions](namespacevfisdi.md#enum-emvctreaderoptions) (DF06) 
  * **atr** if not NULL, the ATR is returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Activate smart card (41-02) 


### function emvCtDeactivate

```
int emvCtDeactivate()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Deactivate smart card (41-04) 


### function emvCtDeactivate

```
int emvCtDeactivate(
    unsigned options
)
```


**Parameters**: 

  * **options** bit mask with options from [EMVCtReaderOptions](namespacevfisdi.md#enum-emvctreaderoptions) (DF06) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Deactivate smart card (41-04) 


### function emvCtStartTransaction

```
int emvCtStartTransaction(
    EMVTxn & out,
    EMVTransaction type,
    const BCD< 6 > amount,
    const Array< 3 > & date,
    const Array< 3 > & time,
    const BCD< 4 > & counter,
    const EMVTxn & optional =EMVTxn()
)
```


**Parameters**: 

  * **type** transaction type, (see [EMVTransaction](namespacevfisdi.md#enum-emvtransaction)) (9C) 
  * **amount** transaction amount (9F02) 
  * **date** transaction date (9A) 
  * **time** transaction time (9F21) 
  * **counter** transaction sequence counter (9F41) 
  * **optional** optional transaction parameters 
  * **out** transaction result data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

start EMV CT transaction (39-10) 


### function emvCtContinueOffline

```
int emvCtContinueOffline(
    EMVTxn & out,
    const EMVTxn & optional =EMVTxn()
)
```


**Parameters**: 

  * **out** transaction result data 
  * **optional** optional transaction parameters, these may be used to change 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

continue offline EMV CT transaction (39-11) 


### function emvCtContinueOnline

```
int emvCtContinueOnline(
    EMVTxn & out,
    bool onlineResult,
    const Array< 2 > & authResp =Array< 2 >(),
    const EMVTxn & optional =EMVTxn()
)
```


**Parameters**: 

  * **out** transaction result data 
  * **onlineResult** online result, true if transaction was successful, false if not (DF50) 
  * **authResp** authorization response code from the host, ignored if _onlineResult==false_ (8A) 
  * **optional** optional transaction parameters 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

continue online EMV CT transaction (39-12) 


### function emvCtUpdateTxnTags

```
int emvCtUpdateTxnTags(
    unsigned options,
    const EMVTxn & config
)
```


**Parameters**: 

  * **options** update options (see [EMVUpdateOptions](namespacevfisdi.md#enum-emvupdateoptions)) 
  * **config** configuration containing the settings to be updated 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: Application configuration data has to be updated with [emvCtSetTempAppData()](group__sdiemvct.md#function-emvctsettempappdata). 

Update one or several kernel tags during transaction.

This update is restricted to certain (not protected) EMV L2 kernel tags, if there is a need to change these tags during the transaction temporarily and for this transaction only but not for the general configuration. Use carefully. (39-13) 


### function emvCtEndTransaction

```
int emvCtEndTransaction(
    unsigned options =0
)
```


**Parameters**: 

  * **options** reserved for future use 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

End transaction (39-15) 


### function emvCtGetCandidateData

```
int emvCtGetCandidateData(
    std::vector< CTCandidateData > & out
)
```


**Parameters**: 

  * **out** transaction result data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get additional candidate information for reducing, resorting or displaying the mutual candidate list. (39-16) 


### function emvCtSendOfflinePIN

```
int emvCtSendOfflinePIN(
    unsigned short & chipresult
)
```


**Parameters**: 

  * **chipresult** result code from the chip card 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

send entered (ofline) PIN to chip card for verification. (41-05) 


### function emvCtCheckSupportedAID

```
int emvCtCheckSupportedAID(
    const bytevector & aid,
    unsigned char asi,
    const std::string & defaultLabel,
    std::vector< CTCandidate > & candlist,
    unsigned short * sw12 =0,
    const std::vector< AdditionalCardTag > * adtCrdTags =0
)
```


**Parameters**: 

  * **aid** terminal AID 
  * **asi** application selection indicator 0=exact, 1=partial 
  * **defaultLabel** optional default application label 
  * **candlist** candidates found 
  * **sw12** if not NULL status word returned by card '0000' for communication problem 
  * **adtCrdTags** optional list of additional tags to be stored in tag store 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Do List Of Application processing for a single terminal AID. (39-17) 


### function emvCtLED

```
int emvCtLED(
    bool ledState
)
```


**Parameters**: 

  * **ledState** led state, on if true, off if false. 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Control the Smart Card Reader LEDs. (41-09) 


### function emvCtSendReceive

```
int emvCtSendReceive(
    unsigned options,
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **options** bit mask with options from [EMVCtReaderOptions](namespacevfisdi.md#enum-emvctreaderoptions) (DF06) 
  * **in** EMV command (DF01) 
  * **out** EMV result (DF01) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

send EMV command and receive result 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100