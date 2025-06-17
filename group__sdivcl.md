---
title: VCL interface

---

# VCL interface



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[vclRegistartSRED](group__sdivcl.md#function-vclregistartsred)**(bytevector & track1, bytevector & track2, bytevector & track3) |
| int | **[vclStatusRequest](group__sdivcl.md#function-vclstatusrequest)**(bytevector & status) |
| int | **[vclAdvanceDDK](group__sdivcl.md#function-vcladvanceddk)**(bytevector & track1, bytevector & track2, bytevector & track3) |
| int | **[vclRequestEParms](group__sdivcl.md#function-vclrequesteparms)**(bytevector & eparms) |
| int | **[vclGetDiagnostic](group__sdivcl.md#function-vclgetdiagnostic)**(unsigned format, unsigned page, std::string & diag) |
| int | **[vclGetKeyStatus](group__sdivcl.md#function-vclgetkeystatus)**(unsigned char & status) |
| int | **[vclOverrideMessageQuery](group__sdivcl.md#function-vcloverridemessagequery)**(bytevector & track1, bytevector & track2, bytevector & track3) |
| int | **[vclKSNRequest](group__sdivcl.md#function-vclksnrequest)**(std::string & ksn) |
| int | **[vclKmailinRequest](group__sdivcl.md#function-vclkmailinrequest)**() |


## Functions Documentation

### function vclRegistartSRED

```
int vclRegistartSRED(
    bytevector & track1,
    bytevector & track2,
    bytevector & track3
)
```


**Parameters**: 

  * **track1** VCL track 1 
  * **track2** VCL track 2 
  * **track3** VCL track 3 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Request VCL to turn on the encryption in SRED mode. (28-00) 


### function vclStatusRequest

```
int vclStatusRequest(
    bytevector & status
)
```


**Parameters**: 

  * **status** VLC status 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the current status of VCL. (28-01) 


### function vclAdvanceDDK

```
int vclAdvanceDDK(
    bytevector & track1,
    bytevector & track2,
    bytevector & track3
)
```


**Parameters**: 

  * **track1** VCL track 1 
  * **track2** VCL track 2 
  * **track3** VCL track 3 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Instruct VCL to use the next derived key for future encryption operations. (28-02) 


### function vclRequestEParms

```
int vclRequestEParms(
    bytevector & eparms
)
```


**Parameters**: 

  * **eparms** eParms of the last encryption from VCL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the eParms of the last encryption from VCL. This command should be used by the payment application if eParms is activated only. The eParms will be forwarded from the SDI-Server as obtained from VCL. Further processing is up to the payment application. (28-03) 


### function vclGetDiagnostic

```
int vclGetDiagnostic(
    unsigned format,
    unsigned page,
    std::string & diag
)
```


**Parameters**: 

  * **format** 1=verbose, 2=concise, 4=xml 
  * **page** page number (0-127) 
  * **diag** diagnostic data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the diagnostic data from VCL.(28-06) The diag query will be forwarded from the SDI-Server as obtained from VCL. Further processing is up to the payment application. Additional parameters can be the output format as well as the requested page number. 


### function vclGetKeyStatus

```
int vclGetKeyStatus(
    unsigned char & status
)
```


**Parameters**: 

  * **status** key status: 0=shared key, 1=unique key 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get the key status from VCL. (28-07) 


### function vclOverrideMessageQuery

```
int vclOverrideMessageQuery(
    bytevector & track1,
    bytevector & track2,
    bytevector & track3
)
```


**Parameters**: 

  * **track1** VCL track 1 
  * **track2** VCL track 2 
  * **track3** VCL track 3 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Performs a override message query to the vcl daemon/kernel modul and delivers the response as track data. (28-08) 


### function vclKSNRequest

```
int vclKSNRequest(
    std::string & ksn
)
```


**Parameters**: 

  * **ksn** KSN 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

performs a KSN request to the vcl daemon/kernel modul (28-09) 


### function vclKmailinRequest

```
int vclKmailinRequest()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)); 

The sdi server performs a kmailin request to the vcl daemon/kernel modul and delivers the result (success or failed) (28-0A) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100