---
title: EMV contactless interface

---

# EMV contactless interface



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfisdi::SDIClient::CTLSCandidateData](structvfisdi_1_1_s_d_i_client_1_1_c_t_l_s_candidate_data.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[emvCtlsInit](group__sdiemvctls.md#function-emvctlsinit)**(int aidCount =0, unsigned options =0) |
| int | **[emvCtlsExit](group__sdiemvctls.md#function-emvctlsexit)**(unsigned options =0) |
| int | **[emvCtlsSetTermData](group__sdiemvctls.md#function-emvctlssettermdata)**(const EMVConf & emv) |
| int | **[emvCtlsGetTermData](group__sdiemvctls.md#function-emvctlsgettermdata)**(EMVConf & emv) |
| int | **[emvCtlsSetAppData](group__sdiemvctls.md#function-emvctlssetappdata)**(unsigned kernel_id, const bytevector & aid, const EMVConf & emv) |
| int | **[emvCtlsClearAppData](group__sdiemvctls.md#function-emvctlsclearappdata)**(unsigned kernel_id, const bytevector & aid) |
| int | **[emvCtlsClearAllAppData](group__sdiemvctls.md#function-emvctlsclearallappdata)**() |
| int | **[emvCtlsSetTempAppData](group__sdiemvctls.md#function-emvctlssettempappdata)**(unsigned kernel_id, const bytevector & aid, const EMVConf & emv) |
| int | **[emvCtlsGetAppData](group__sdiemvctls.md#function-emvctlsgetappdata)**(unsigned kernel_id, const bytevector & aid, EMVConf & emv) |
| int | **[emvCtlsGetAppData](group__sdiemvctls.md#function-emvctlsgetappdata)**(bool first, EMVConf & emv) |
| int | **[emvCtlsSetCAPKey](group__sdiemvctls.md#function-emvctlssetcapkey)**(const Array< 5 > & rid, unsigned char index, const bytevector & key, unsigned char exp, const bytevector & hash =bytevector(), const bytevector & revocationlist =bytevector()) |
| int | **[emvCtlsClearCAPKey](group__sdiemvctls.md#function-emvctlsclearcapkey)**(const Array< 5 > & rid, unsigned char index) |
| int | **[emvCtlsClearAllCAPKey](group__sdiemvctls.md#function-emvctlsclearallcapkey)**() |
| int | **[emvCtlsGetCAPKeys](group__sdiemvctls.md#function-emvctlsgetcapkeys)**(std::vector< CAPKeyInfo > & keys) |
| int | **[emvCtlsApplyConfig](group__sdiemvctls.md#function-emvctlsapplyconfig)**(unsigned options =7) |
| int | **[emvCtlsAddVirtualMapEntry](group__sdiemvctls.md#function-emvctlsaddvirtualmapentry)**(int transaction, int currency, unsigned char vterminal) |
| int | **[emvCtlsClearVirtualMap](group__sdiemvctls.md#function-emvctlsclearvirtualmap)**() |
| int | **[emvCtlsSetupTransaction](group__sdiemvctls.md#function-emvctlssetuptransaction)**(EMVTxn & out, EMVTransaction type, const BCD< 6 > amount, const Array< 3 > & date, const Array< 3 > & time, const BCD< 4 > & counter, const EMVTxn & optional =EMVTxn()) |
| int | **[emvCtlsContinueOffline](group__sdiemvctls.md#function-emvctlscontinueoffline)**(EMVTxn & out, unsigned options =0) |
| int | **[emvCtlsContinueOnline](group__sdiemvctls.md#function-emvctlscontinueonline)**(EMVTxn & out, bool onlineResult, const Array< 2 > & authResp =Array< 2 >(), const EMVTxn & optional =EMVTxn()) |
| int | **[emvCtlsEndTransaction](group__sdiemvctls.md#function-emvctlsendtransaction)**(unsigned options =0) |
| int | **[emvCtlsGetCandidateData](group__sdiemvctls.md#function-emvctlsgetcandidatedata)**(std::vector< CTLSCandidateData > & out) |
| int | **[emvCtlsBreak](group__sdiemvctls.md#function-emvctlsbreak)**() |
| int | **[emvCtlsSmartReset](group__sdiemvctls.md#function-emvctlssmartreset)**(unsigned char readeropt =0, bytevector * atr =0) |
| int | **[emvCtlsSmartPowerOff](group__sdiemvctls.md#function-emvctlssmartpoweroff)**(unsigned char options) |
| int | **[emvCtlsCardRemoval](group__sdiemvctls.md#function-emvctlscardremoval)**(unsigned timeout_ms) |
| int | **[emvCtlsTransparentCommand](group__sdiemvctls.md#function-emvctlstransparentcommand)**(const bytevector & in, bytevector & out) |
| int | **[emvCtlsTransparentSend](group__sdiemvctls.md#function-emvctlstransparentsend)**(const bytevector & in) |
| int | **[emvCtlsTransparentReceive](group__sdiemvctls.md#function-emvctlstransparentreceive)**(bytevector & out) |
| int | **[emvCtlsLEDMode](group__sdiemvctls.md#function-emvctlsledmode)**(unsigned char mode) |
| int | **[emvCtlsLED](group__sdiemvctls.md#function-emvctlsled)**(int led, unsigned char state) |
| int | **[emvCtlsSendReceive](group__sdiemvctls.md#function-emvctlssendreceive)**(const bytevector & in, bytevector & out) |


## Functions Documentation

### function emvCtlsInit

```
int emvCtlsInit(
    int aidCount =0,
    unsigned options =0
)
```


**Parameters**: 

  * **aidCount** number of AIDs 
  * **options** EMV options (see [EMVOptions](namespacevfisdi.md#enum-emvoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

**Note**: The EMV callback function must have been set before invoking this function 

initialize EMV CTLS framework (40-00) 


### function emvCtlsExit

```
int emvCtlsExit(
    unsigned options =0
)
```


**Parameters**: 

  * **options** EMV options 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

exit EMV CTLS framework (40-00) 


### function emvCtlsSetTermData

```
int emvCtlsSetTermData(
    const EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV settings 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CTLS terminal data (40-01) 


### function emvCtlsGetTermData

```
int emvCtlsGetTermData(
    EMVConf & emv
)
```


**Parameters**: 

  * **emv** EMV settings 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CTLS terminal data (40-01) 


### function emvCtlsSetAppData

```
int emvCtlsSetAppData(
    unsigned kernel_id,
    const bytevector & aid,
    const EMVConf & emv
)
```


**Parameters**: 

  * **kernel_id** ID of contactless kernel 
  * **aid** AID that is to be configured 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CTLS application data (40-02) 


### function emvCtlsClearAppData

```
int emvCtlsClearAppData(
    unsigned kernel_id,
    const bytevector & aid
)
```


**Parameters**: 

  * **kernel_id** ID of contactless kernel 
  * **aid** AID that is to be configured 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear EMV CTLS application data (40-02) 


### function emvCtlsClearAllAppData

```
int emvCtlsClearAllAppData()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear all EMV CTLS application data (40-02) 


### function emvCtlsSetTempAppData

```
int emvCtlsSetTempAppData(
    unsigned kernel_id,
    const bytevector & aid,
    const EMVConf & emv
)
```


**Parameters**: 

  * **kernel_id** ID of contactless kernel 
  * **aid** AID that is to be configured 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

set EMV CTLS application data for current transaction (40-02) 


### function emvCtlsGetAppData

```
int emvCtlsGetAppData(
    unsigned kernel_id,
    const bytevector & aid,
    EMVConf & emv
)
```


**Parameters**: 

  * **kernel_id** ID of contactless kernel 
  * **aid** AID 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CTLS application data (40-02) 


### function emvCtlsGetAppData

```
int emvCtlsGetAppData(
    bool first,
    EMVConf & emv
)
```


**Parameters**: 

  * **first** if true get data of first AID, if false get data of next AID 
  * **emv** EMV application data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get EMV CTLS application data of first / next AID (40-02) 


### function emvCtlsSetCAPKey

```
int emvCtlsSetCAPKey(
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

set EMV CTLS CAP key 


### function emvCtlsClearCAPKey

```
int emvCtlsClearCAPKey(
    const Array< 5 > & rid,
    unsigned char index
)
```


**Parameters**: 

  * **rid** key register identifier 
  * **index** key index 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear EMV CTLS CAP key (40-03) 


### function emvCtlsClearAllCAPKey

```
int emvCtlsClearAllCAPKey()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

clear all EMV CTLS CAP keys (40-03) 


### function emvCtlsGetCAPKeys

```
int emvCtlsGetCAPKeys(
    std::vector< CAPKeyInfo > & keys
)
```


**Parameters**: 

  * **keys** key information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

read EMV CTLS CAP key information (40-03) 


### function emvCtlsApplyConfig

```
int emvCtlsApplyConfig(
    unsigned options =7
)
```


**Parameters**: 

  * **options** options bit mask:

* 1: Apply application data if something changed since last configuration
* 2: Apply terminal data if something changed since last configuration
* 4: Apply CAP key data if something changed since last configuration
* 8: Apply all configuration data even in case nothing changed 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Store configuration (40-04) 


### function emvCtlsAddVirtualMapEntry

```
int emvCtlsAddVirtualMapEntry(
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

Add an entry to the CT virtual map. If an entry in the virtual map matches the transaction and currency, switch to the virtual terminal _vterminal_. Use -1 as wildcard for _transaction_ or _currency_ to match all. (40-06) 


### function emvCtlsClearVirtualMap

```
int emvCtlsClearVirtualMap()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

remove all entries from virtual map (40-06) 


### function emvCtlsSetupTransaction

```
int emvCtlsSetupTransaction(
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

  * **type** transaction type (9C) 
  * **amount** transaction amount (9F02) 
  * **date** transaction date (YYMMDD) (9A) 
  * **time** transaction time (HHMMSS) (9F21) 
  * **counter** transaction sequence counter (9F41) 
  * **optional** optional transaction parameters 
  * **out** transaction result data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

setup EMV CTLS transaction (40-10) 


### function emvCtlsContinueOffline

```
int emvCtlsContinueOffline(
    EMVTxn & out,
    unsigned options =0
)
```


**Parameters**: 

  * **out** transaction result data 
  * **options** input parameter for special use case (see [EMVContinueOfflineOptions](namespacevfisdi.md#enum-emvcontinueofflineoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

CTLS EMV transaction (offline part ... including 1st cryptogram, depends on CTLS scheme) (40-11) 


### function emvCtlsContinueOnline

```
int emvCtlsContinueOnline(
    EMVTxn & out,
    bool onlineResult,
    const Array< 2 > & authResp =Array< 2 >(),
    const EMVTxn & optional =EMVTxn()
)
```


**Parameters**: 

  * **out** transaction result data 
  * **onlineResult** online result (DF50) 
  * **authResp** authorization response code from the host, ignored if _onlineResult==false_ (8A) 
  * **optional** optional transaction parameters 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

continue online EMV CTLS transaction (40-12) 


### function emvCtlsEndTransaction

```
int emvCtlsEndTransaction(
    unsigned options =0
)
```


**Parameters**: 

  * **options** options (see [EMVEndOptions](namespacevfisdi.md#enum-emvendoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

End transaction (40-15) 


### function emvCtlsGetCandidateData

```
int emvCtlsGetCandidateData(
    std::vector< CTLSCandidateData > & out
)
```


**Parameters**: 

  * **out** transaction result data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

get additional candidate information for reducing, resorting or displaying the mutual candidate list. (40-16) 


### function emvCtlsBreak

```
int emvCtlsBreak()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Universal CTLS break command (40-20) 


### function emvCtlsSmartReset

```
int emvCtlsSmartReset(
    unsigned char readeropt =0,
    bytevector * atr =0
)
```


**Parameters**: 

  * **readeropt** reader options (see [EMVCtlsReaderOptions](namespacevfisdi.md#enum-emvctlsreaderoptions)) 
  * **atr** if not NULL, the ATR is returned here 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Detect if card is present in the RF field (read ATR) (42-02) 


### function emvCtlsSmartPowerOff

```
int emvCtlsSmartPowerOff(
    unsigned char options
)
```


**Parameters**: 

  * **options** reader options (see [EMVCtReaderOptions](namespacevfisdi.md#enum-emvctreaderoptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

deactivate chip card. (42-04) 


### function emvCtlsCardRemoval

```
int emvCtlsCardRemoval(
    unsigned timeout_ms
)
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

wait until contactless card removed or timeout (42-0A) 


### function emvCtlsTransparentCommand

```
int emvCtlsTransparentCommand(
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **in** reader command 
  * **out** reader response 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Transparently send a command to the reader and receive it's response (42-07) only supported for VFI reader. 


### function emvCtlsTransparentSend

```
int emvCtlsTransparentSend(
    const bytevector & in
)
```


**Parameters**: 

  * **in** reader command 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Transparently send a command to the reader (42-08) only supported for VFI reader. 


### function emvCtlsTransparentReceive

```
int emvCtlsTransparentReceive(
    bytevector & out
)
```


**Parameters**: 

  * **out** reader response 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Transparent VFI reader access: Receive a response (42-09) only supported for VFI reader. 


### function emvCtlsLEDMode

```
int emvCtlsLEDMode(
    unsigned char mode
)
```


**Parameters**: 

  * **mode** LED mode control (see [EMVLEDMode](namespacevfisdi.md#enum-emvledmode)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

Set mode of LED control (43-04) 


### function emvCtlsLED

```
int emvCtlsLED(
    int led,
    unsigned char state
)
```


**Parameters**: 

  * **led** bit mask of LEDs to be switched, bit 0 represents LED 0, bit 1 represents LED 1, and so on. 
  * **state** 0: off, 1: on, 2: blinking (only LED 0) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

switch LEDs (43-03) 


### function emvCtlsSendReceive

```
int emvCtlsSendReceive(
    const bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **in** EMV command (DF01) 
  * **out** EMV result (DF01) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) (<=0) or SDI EMV status code ([EMVStatus](namespacevfisdi.md#enum-emvstatus)) (>0) 

send EMV command and receive result 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100