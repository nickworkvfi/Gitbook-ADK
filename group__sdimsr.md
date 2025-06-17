---
title: MSR interface

---

# MSR interface



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[msrRead](group__sdimsr.md#function-msrread)**(bytevector & pan, std::string & name, std::string & service, std::string & track2, int timeout_sec) |
| int | **[msrRead](group__sdimsr.md#function-msrread)**(bytevector & pan, std::string & name, std::string & service, std::string & track2, Array< 3 > & track_status, int timeout_sec) |
| int | **[msrRead](group__sdimsr.md#function-msrread)**(bytevector & pan, std::string & name, std::string & service, std::string & track2, Array< 3 > & track_status, bytevector & card_token, int timeout_sec, int removal_timeout_ms =-1) |
| int | **[msrRead](group__sdimsr.md#function-msrread)**(bytevector & pan, std::string & name, std::string & service, std::string & track2, Array< 3 > & track_status, bytevector & card_token, std::vector< PluginResult > & plugin_result, int timeout_sec, int removal_timeout_ms =-1) |
| int | **[msrRead](group__sdimsr.md#function-msrread)**(bytevector & pan, std::string & name, std::string & service, std::string & track1, std::string & track2, Array< 3 > & track_status, bytevector & card_token, std::vector< PluginResult > & plugin_result, int timeout_sec, int removal_timeout_ms =-1) |
| int | **[msrCardDataEntry](group__sdimsr.md#function-msrcarddataentry)**(std::string & out, const std::vector< TouchButton > & btn =std::vector< TouchButton >()) |
| int | **[msrCardDataEntry](group__sdimsr.md#function-msrcarddataentry)**(std::string & out, bytevector & card_token, unsigned flags, const std::string & format =std::string(), const std::vector< TouchButton > & btn =std::vector< TouchButton >()) |
| int | **[msrCardDataEntry](group__sdimsr.md#function-msrcarddataentry)**(std::string & out, bytevector & card_token, std::vector< PluginResult > & plugin_result, unsigned flags, const std::string & format =std::string(), const std::vector< TouchButton > & btn =std::vector< TouchButton >()) |
| int | **[msrCardDataEntry](group__sdimsr.md#function-msrcarddataentry)**(std::string & out, bytevector & card_token, std::vector< PluginResult > & plugin_result, unsigned flags, int timeout, const std::string & format =std::string(), const std::vector< TouchButton > & btn =std::vector< TouchButton >()) |
| int | **[msrSetOptions](group__sdimsr.md#function-msrsetoptions)**(unsigned options) |
| int | **[msrLED](group__sdimsr.md#function-msrled)**(unsigned led1, unsigned led2, unsigned led3, unsigned timeout =0) |
| int | **[msrSetSensitivity](group__sdimsr.md#function-msrsetsensitivity)**(unsigned char sensitivity, int dest =1) |


## Functions Documentation

### function msrRead

```
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track2,
    int timeout_sec
)
```


**Parameters**: 

  * **pan** obfuscated PAN 
  * **name** card holder name 
  * **service** service code 
  * **track2** obfuscated track 2 data 
  * **timeout_sec** timeout in seconds (0..128) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrRead

```
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track2,
    Array< 3 > & track_status,
    int timeout_sec
)
```


**Parameters**: 

  * **pan** obfuscated PAN 
  * **name** card holder name 
  * **service** service code 
  * **track2** obfuscated track 2 data 
  * **track_status** track status ([MSRTrackStatus](namespacevfisdi.md#enum-msrtrackstatus), one byte per track, in the order track3, track2, track1!) 
  * **timeout_sec** timeout in seconds (0..128) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrRead

```
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track2,
    Array< 3 > & track_status,
    bytevector & card_token,
    int timeout_sec,
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **pan** obfuscated PAN 
  * **name** card holder name 
  * **service** service code 
  * **track2** obfuscated track 2 data 
  * **track_status** track status ([MSRTrackStatus](namespacevfisdi.md#enum-msrtrackstatus), one byte per track, in the order track3, track2, track1!) 
  * **card_token** unique card token 
  * **timeout_sec** timeout in seconds (0..128) 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrRead

```
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track2,
    Array< 3 > & track_status,
    bytevector & card_token,
    std::vector< PluginResult > & plugin_result,
    int timeout_sec,
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **pan** PAN 
  * **name** card holder name 
  * **service** service code 
  * **track2** track 2 data 
  * **track_status** track status ([MSRTrackStatus](namespacevfisdi.md#enum-msrtrackstatus), one byte per track, in the order track3, track2, track1!) 
  * **card_token** unique card token 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **timeout_sec** timeout in seconds (0..128) 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrRead

```
int msrRead(
    bytevector & pan,
    std::string & name,
    std::string & service,
    std::string & track1,
    std::string & track2,
    Array< 3 > & track_status,
    bytevector & card_token,
    std::vector< PluginResult > & plugin_result,
    int timeout_sec,
    int removal_timeout_ms =-1
)
```


**Parameters**: 

  * **pan** obfuscated PAN 
  * **name** card holder name 
  * **service** service code 
  * **track1** obfuscated track 1 data (DFA040) 
  * **track2** obfuscated track 2 data 
  * **track_status** track status ([MSRTrackStatus](namespacevfisdi.md#enum-msrtrackstatus), one byte per track, in the order track3, track2, track1!) 
  * **card_token** unique card token 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **timeout_sec** timeout in seconds (0..128) 
  * **removal_timeout_ms** optional card removal timeout in milliseconds for reading MSR data. Set to -1 if unused. (DFA153) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read msr (21-01) 


### function msrCardDataEntry

```
int msrCardDataEntry(
    std::string & out,
    const std::vector< TouchButton > & btn =std::vector< TouchButton >()
)
```


**Parameters**: 

  * **out** obfuscated PAN 
  * **btn** position and size of touch buttons 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

manual card data entry (21-02) 


### function msrCardDataEntry

```
int msrCardDataEntry(
    std::string & out,
    bytevector & card_token,
    unsigned flags,
    const std::string & format =std::string(),
    const std::vector< TouchButton > & btn =std::vector< TouchButton >()
)
```


**Parameters**: 

  * **out** obfuscated PAN 
  * **card_token** unique card token 
  * **flags** card entry flags ([MSRDataEntryFlags](namespacevfisdi.md#enum-msrdataentryflags)) 
  * **format** optional alternate input format string 
  * **btn** position and size of touch buttons 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

manual card data entry (21-02) 


### function msrCardDataEntry

```
int msrCardDataEntry(
    std::string & out,
    bytevector & card_token,
    std::vector< PluginResult > & plugin_result,
    unsigned flags,
    const std::string & format =std::string(),
    const std::vector< TouchButton > & btn =std::vector< TouchButton >()
)
```


**Parameters**: 

  * **out** obfuscated PAN 
  * **card_token** unique card token 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **flags** card entry flags ([MSRDataEntryFlags](namespacevfisdi.md#enum-msrdataentryflags)) 
  * **format** optional alternate input format string 
  * **btn** position and size of touch buttons 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

manual card data entry (21-02) 


### function msrCardDataEntry

```
int msrCardDataEntry(
    std::string & out,
    bytevector & card_token,
    std::vector< PluginResult > & plugin_result,
    unsigned flags,
    int timeout,
    const std::string & format =std::string(),
    const std::vector< TouchButton > & btn =std::vector< TouchButton >()
)
```


**Parameters**: 

  * **out** obfuscated PAN 
  * **card_token** unique card token 
  * **plugin_result** array containing plugin results (DFA101/FFA107) 
  * **flags** card entry flags ([MSRDataEntryFlags](namespacevfisdi.md#enum-msrdataentryflags)) 
  * **timeout** timeout in seconds (<0 to use default) 
  * **format** optional alternate input format string 
  * **btn** position and size of touch buttons 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

manual card data entry (21-02) 


### function msrSetOptions

```
int msrSetOptions(
    unsigned options
)
```


**Parameters**: 

  * **options** ([MSROptions](namespacevfisdi.md#enum-msroptions)) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set MSR options. For details see [MSR_SetOptions()](msr_8h.md#function-msr-setoptions) in ADK-MSR (21-03) 


### function msrLED

```
int msrLED(
    unsigned led1,
    unsigned led2,
    unsigned led3,
    unsigned timeout =0
)
```


**Parameters**: 

  * **led1** bit mask for state of led 1 ([MSRLEDState](namespacevfisdi.md#enum-msrledstate)) 
  * **led2** bit mask for state of led 2 ([MSRLEDState](namespacevfisdi.md#enum-msrledstate)) 
  * **led3** bit mask for state of led 3 ([MSRLEDState](namespacevfisdi.md#enum-msrledstate)) 
  * **timeout** if >0 all LEDs are switched off after this time in seconds) 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

switch the MSR LEDs (21-04) 


### function msrSetSensitivity

```
int msrSetSensitivity(
    unsigned char sensitivity,
    int dest =1
)
```


**Parameters**: 

  * **sensitivity** sensitivity level in the range 20..200 or 0 to reset to default setting.

 Values >100 will increase MSR sensitivity and amplify signals.

 Values <100 will decrease MSR sensitivity and damp signals.

 Value 100 means no amplification/damping. 
  * **dest** destination: countertop=1, EPP=2 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set the MSR sensitivity level for the magnetic head for subsequent read operations. Basically, it is recommended to use default MSR sensitivity to get best MSR reading results. Once MSR Set Sensitivity is used with another value than the default, it is recommended to recover default sensitivity as soon as possible. (21-05) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100