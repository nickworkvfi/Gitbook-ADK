---
title: libsdi::CardDetection
summary: Interface for SDI Card Detection Interface, command class 23. 

---

# libsdi::CardDetection



Interface for SDI Card Detection Interface, command class 23.  [More...](#detailed-description)


`#include <sdi_if.h>`

Inherits from [SdiCmd](classlibsdi_1_1_sdi_cmd.md), [SdiBase](classlibsdi_1_1_sdi_base.md)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[DetectionMode](classlibsdi_1_1_card_detection.md#enum-detectionmode)** { DETECTION_MODE_BLOCKING, DETECTION_MODE_POLLING, DETECTION_MODE_CALLBACK} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setDetectionMode](classlibsdi_1_1_card_detection.md#function-setdetectionmode)**(const enum [DetectionMode](classlibsdi_1_1_card_detection.md#enum-detectionmode) mode)<br>Set Card Detection mode.  |
| void | **[setTecStartOptions](classlibsdi_1_1_card_detection.md#function-settecstartoptions)**(const std::vector< unsigned char > & opts)<br>Set options for [cts_StartSelection()]() send by [startSelection()]() (DFA12A)  |
| void | **[setTecConfig](classlibsdi_1_1_card_detection.md#function-settecconfig)**(const std::vector< unsigned char > & opts)<br>Set TECSEL ADK configuration (DFA133)  |
| void | **[setCancelButton](classlibsdi_1_1_card_detection.md#function-setcancelbutton)**(bool enable)<br>Method for activation of cancel button.  |
| void | **[setCardEntryValueDeativation](classlibsdi_1_1_card_detection.md#function-setcardentryvaluedeativation)**(unsigned char b)<br>Configure which input is skipped at manual card data entry.  |
| void | **[setAlternativeInputFormat](classlibsdi_1_1_card_detection.md#function-setalternativeinputformat)**(const char * f)<br>Configure alternate input format string for CVV value.  |
| void | **[setCardRemovalTimeout](classlibsdi_1_1_card_detection.md#function-setcardremovaltimeout)**(unsigned timeout_ms)<br>For hybrid card readers set timeout for mag. stripe data available after start of card pull-out (DFA153).  |
| void | **[setCallback](classlibsdi_1_1_card_detection.md#function-setcallback)**(void(*)(unsigned char technology, void *context) cb, void * ctx)<br>Set Callback function to be called in [DETECTION_MODE_CALLBACK](classlibsdi_1_1_card_detection.md#enumvalue-detection-mode-callback) when Card Detection ends.  |
| void | **[cardDetectedCallback](classlibsdi_1_1_card_detection.md#function-carddetectedcallback)**(unsigned char * dataIn, unsigned short sizeIn)<br>Internal Card Detected Callback handler function.  |
| int | **[startSelection](classlibsdi_1_1_card_detection.md#function-startselection)**(unsigned char supportedTechnologies, unsigned seconds)<br>Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using [setDetectionMode()](classlibsdi_1_1_card_detection.md#function-setdetectionmode). Default mode is the blocking mode.  |
| enum [libsdi::SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[stopSelection](classlibsdi_1_1_card_detection.md#function-stopselection)**()<br>Abort Technology Selection via SDI Server's Sys Abort (20-02) when in blocking mode, otherwise send Stop Card Detection (23-05).  |
| unsigned char | **[receiveTechnology](classlibsdi_1_1_card_detection.md#function-receivetechnology)**()<br>Get the Technology Selection Result.  |
| bool | **[cardReadAtEpp](classlibsdi_1_1_card_detection.md#function-cardreadatepp)**()<br>Check at which device the card has been read (DFA150).  |
| unsigned char | **[pollTechnology](classlibsdi_1_1_card_detection.md#function-polltechnology)**()<br>Poll for the asynchronous Card Detection status (23-04).  |
| enum [libsdi::SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[addTechnology](classlibsdi_1_1_card_detection.md#function-addtechnology)**(unsigned char technology, const std::vector< unsigned char > & opts)<br>Add a technology to a running asynchronous Card Detection (23-06)  |
| enum [libsdi::SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[removeTechnology](classlibsdi_1_1_card_detection.md#function-removetechnology)**(unsigned char technology)<br>Remove a technology from a running asynchronous Card Detection (23-07)  |
| std::string | **[getPan](classlibsdi_1_1_card_detection.md#function-getpan)**()<br>Access PAN from mag. stripe or manual entry (DF1A)  |
| std::string | **[getTrack2](classlibsdi_1_1_card_detection.md#function-gettrack2)**()<br>Access track 2 from mag. stripe (DF49)  |
| int | **[getTrack2Bin](classlibsdi_1_1_card_detection.md#function-gettrack2bin)**(std::vector< unsigned char > & data)<br>Access obfuscated track 2 data (DF1B) Note: Data is appended to existing content.  |
| std::string | **[getCardholderName](classlibsdi_1_1_card_detection.md#function-getcardholdername)**()<br>Access card holder name from track 1 (5F20)  |
| std::string | **[getServiceCode](classlibsdi_1_1_card_detection.md#function-getservicecode)**()<br>Access service code from track 3 (5F30)  |
| std::string | **[getTrack1](classlibsdi_1_1_card_detection.md#function-gettrack1)**()<br>Access mag. stripe track 1 (DFA040)  |
| int | **[getPluginResponseData](classlibsdi_1_1_card_detection.md#function-getpluginresponsedata)**(std::vector< unsigned char > & data)<br>Access plugin response data (DFA101) in case one plugin has been triggered.  |
| int | **[getPluginResponseData](classlibsdi_1_1_card_detection.md#function-getpluginresponsedata)**(unsigned index, int32_t & pluginId, int32_t & pluginResponseCode, std::vector< unsigned char > & data)<br>Access plugin response data (FFA107, DFA101, DFA10C, DFA10D)  |
| bool | **[getPluginResponseData](classlibsdi_1_1_card_detection.md#function-getpluginresponsedata)**(std::vector< [PluginResult](structlibsdi_1_1_sdi_base_1_1_plugin_result.md) > & results)<br>Access plugin response data (FFA107, DFA101, DFA10C, DFA10D)  |
| std::string | **[getString](classlibsdi_1_1_card_detection.md#function-getstring)**(unsigned CTS_DATA_TAG)<br>Access cts_WaitSelection result data (FFA102) CTS_DATA_TAG_VAS_DATA: JSON string returned by NFC_VAS_Activate or NFC_VAS_Decrypt (DFDB24)  |
| unsigned char | **[getValue](classlibsdi_1_1_card_detection.md#function-getvalue)**(unsigned CTS_DATA_TAG, unsigned char defaultValue)<br>Access cts_WaitSelection result data tags of 1 byte length (FFA102) CTS_DATA_TAG_NFC_RESULT CTS_DATA_TAG_CARDS_TOTAL_COUNT CTS_DATA_TAG_CARDS_A CTS_DATA_TAG_CARDS_B CTS_DATA_TAG_CARDS_F CTS_DATA_TAG_CARD_TYPE CTS_DATA_TAG_VAS_RESULT CTS_DATA_TAG_EMV_RESULT CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT.  |
| unsigned char | **[getValue](classlibsdi_1_1_card_detection.md#function-getvalue)**(unsigned CTS_DATA_TAG, int n, unsigned char defaultValue)<br>Access cts_WaitSelection result data tags of 1 byte length.  |
| int | **[getData](classlibsdi_1_1_card_detection.md#function-getdata)**(std::vector< unsigned char > & data)<br>Access cts_WaitSelection result data (complete FFA102 content)  |
| int | **[getData](classlibsdi_1_1_card_detection.md#function-getdata)**(unsigned CTS_DATA_TAG, std::vector< unsigned char > & data)<br>Access cts_WaitSelection result data CTS_DATA_TAG_CARD_INFO.  |
| int | **[getData](classlibsdi_1_1_card_detection.md#function-getdata)**(unsigned CTS_DATA_TAG, int n, std::vector< unsigned char > & data)<br>Access cts_WaitSelection result data CTS_DATA_TAG_CARD_INFO.  |
| int | **[getTecselData](classlibsdi_1_1_card_detection.md#function-gettecseldata)**(std::vector< unsigned char > & data)<br>Access cts_WaitSelection result data in case CTS_DATA_TLV is not set ([SDI]() tag DFA154) This can include either the EMV-ADK CTLS framework response code (result of continue offline) or the contactless card type (result of smart reset).  |
| int | **[startMsrRead](classlibsdi_1_1_card_detection.md#function-startmsrread)**(unsigned timeout_sec)<br>Send MSR read request (21-01)  |
| int | **[msrSetOptions](classlibsdi_1_1_card_detection.md#function-msrsetoptions)**(const std::vector< unsigned char > & opts)<br>Set MSR options (21-03)  |
| int | **[msrGetTrackStatus](classlibsdi_1_1_card_detection.md#function-msrgettrackstatus)**(int track) |
| int | **[msrGetCardSpecificToken](classlibsdi_1_1_card_detection.md#function-msrgetcardspecifictoken)**(std::vector< unsigned char > & token) |
| | **[CardDetection](classlibsdi_1_1_card_detection.md#function-carddetection)**() |
| | **[~CardDetection](classlibsdi_1_1_card_detection.md#function-~carddetection)**() |
| virtual void | **[clear](classlibsdi_1_1_card_detection.md#function-clear)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const static unsigned char | **[SDI_TEC_CHIP](classlibsdi_1_1_card_detection.md#variable-sdi-tec-chip)**  |
| const static unsigned char | **[SDI_TEC_MAGN](classlibsdi_1_1_card_detection.md#variable-sdi-tec-magn)**  |
| const static unsigned char | **[SDI_TEC_CTLS](classlibsdi_1_1_card_detection.md#variable-sdi-tec-ctls)**  |
| const static unsigned char | **[SDI_TEC_MANU](classlibsdi_1_1_card_detection.md#variable-sdi-tec-manu)**  |

## Additional inherited members

**Public Functions inherited from [SdiCmd](classlibsdi_1_1_sdi_cmd.md)**

|                | Name           |
| -------------- | -------------- |
| | **[SdiCmd](classlibsdi_1_1_sdi_cmd.md#function-sdicmd)**() |
| virtual | **[~SdiCmd](classlibsdi_1_1_sdi_cmd.md#function-~sdicmd)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[sendReceive](classlibsdi_1_1_sdi_cmd.md#function-sendreceive)**(unsigned char cla, unsigned char ins, unsigned char p1 =0, unsigned char p2 =0, unsigned maxResponseSize =2048)<br>Generic SDI command exchange function combining sending of request, waiting and receiving the response.  |
| int | **[send](classlibsdi_1_1_sdi_cmd.md#function-send)**(unsigned char cla, unsigned char ins, unsigned char p1 =0, unsigned char p2 =0)<br>Like [sendReceive()](classlibsdi_1_1_sdi_cmd.md#function-sendreceive) but without waiting for response.  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receive](classlibsdi_1_1_sdi_cmd.md#function-receive)**(unsigned maxResponseSize =2048)<br>Receive SDI response after request has been send with [send()](classlibsdi_1_1_sdi_cmd.md#function-send) and data availability has been signaled.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, int value, unsigned fixedLength =0)<br>Set integer data object SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, uint32_t value, unsigned fixedLength =0)<br>Set unsigned integer data object SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, const unsigned char * data, unsigned dataLen)<br>Set byte array data object in SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, unsigned char byteValue)<br>Set single byte value in SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, const std::vector< unsigned char > & data)<br>Set byte array data object in SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, const std::string & value)<br>Set character data object in SDI command.  |
| void | **[setCommandDestination](classlibsdi_1_1_sdi_cmd.md#function-setcommanddestination)**(bool epp, bool force =false)<br>Set command destination for systems with EPP Unless force the command destination is set only if parameter epp is true.  |
| virtual void | **[clearResults](classlibsdi_1_1_sdi_cmd.md#function-clearresults)**()<br>Remove all SDI response data.  |
| void | **[importResults](classlibsdi_1_1_sdi_cmd.md#function-importresults)**(const [SdiCmd](classlibsdi_1_1_sdi_cmd.md) & intermediate)<br>Transfer status word, client error and response data from an intermediate command while keeping command input data.  |
| void | **[importResults](classlibsdi_1_1_sdi_cmd.md#function-importresults)**(const unsigned char * sw12, const unsigned char * tlvData, unsigned tlvSize)<br>Inject result data from a call back.  |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, int & value) |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, uint32_t & value) |
| int | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, unsigned char * buffer, unsigned bufferSize) |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, unsigned char & value) |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, std::vector< unsigned char > & buffer) |
| bool | **[get](classlibsdi_1_1_sdi_cmd.md#function-get)**(const char * path, std::string & value) |

**Protected Attributes inherited from [SdiCmd](classlibsdi_1_1_sdi_cmd.md)**

|                | Name           |
| -------------- | -------------- |
| void * | **[dataIn](classlibsdi_1_1_sdi_cmd.md#variable-datain)** <br>Command input buffer collecting TLV data items.  |
| void * | **[dataOut](classlibsdi_1_1_sdi_cmd.md#variable-dataout)** <br>Command response TLV data items.  |

**Public Classes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| struct | **[PluginResult](structlibsdi_1_1_sdi_base_1_1_plugin_result.md)**  |

**Public Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| | **[SdiBase](classlibsdi_1_1_sdi_base.md#function-sdibase)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12)**() |
| int | **[getAdditionalResultValue](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue)**()<br>Access Additional Result Value if returned in SDI response.  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[getClientError](classlibsdi_1_1_sdi_base.md#function-getclienterror)**()<br>Access client side error codes.  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receiveSW12](classlibsdi_1_1_sdi_base.md#function-receivesw12)**()<br>Receive SDI server response with no data.  |
| void | **[importResults](classlibsdi_1_1_sdi_base.md#function-importresults)**(const [SdiBase](classlibsdi_1_1_sdi_base.md) & intermediate)<br>set result data obtained from intermediate SDI communication  |

**Protected Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| void | **[setSdiSw12](classlibsdi_1_1_sdi_base.md#function-setsdisw12)**(enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) s) |
| void | **[setClientError](classlibsdi_1_1_sdi_base.md#function-setclienterror)**(int libsdiprotocol_result) |

**Protected Attributes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| unsigned short | **[sw12](classlibsdi_1_1_sdi_base.md#variable-sw12)**  |
| int | **[additionalResultValue](classlibsdi_1_1_sdi_base.md#variable-additionalresultvalue)**  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[clientErr](classlibsdi_1_1_sdi_base.md#variable-clienterr)**  |


## Detailed Description

```cpp
class libsdi::CardDetection;
```

Interface for SDI Card Detection Interface, command class 23. 

SDI server offers three forms of processing: Blocking, callback and polling mode. For all forms be aware that contactless card acception might generate so called EMV query call backs (Candidate List and Application Selected) that give PPSE and Final Select response discretionary data to an application to control the candidate list or contactless L2 kernel used. These call backs invoke the application's call back function given by [EMV_CTLS_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework). On processing these call backs the application is allowed to gather transaction information from the SDI system or change parameters e.g. by [SDI_CTLS_GetCandidateData()](sdiclient_2client_2sdi__emv_8h.md#function-sdi-ctls-getcandidatedata) or [SDI_fetchTxnTags()](sdi__data_8h.md#function-sdi-fetchtxntags). Apart from these blocking call backs there are some others like light and sound control that do not need an answer (one-way call back). See [startSelection()](classlibsdi_1_1_card_detection.md#function-startselection).

Since returned data is pretty the same this class is also used for the MSR Read command (21-01). See [startMsrRead()](classlibsdi_1_1_card_detection.md#function-startmsrread). 

## Public Types Documentation

### enum DetectionMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DETECTION_MODE_BLOCKING | | using 23-01 command with SDI_Send. Before use [SDI_SetDataAvailableCallback()]() to install notification function. After notification, call [receiveTechnology()]().   |
| DETECTION_MODE_POLLING | | using 23-03 command in polling mode: Poll for technology selection result using [pollTechnology()](). This mode allows [addTechnology()]() and [removeTechnology()]() during wait for card.   |
| DETECTION_MODE_CALLBACK | | using 23-03 command in callback mode: This mode allows [addTechnology()]() and [removeTechnology()]() during wait for card. Before use [setCallback()]() to install notification function().   |




The card detection mode given to [setDetectionMode()](classlibsdi_1_1_card_detection.md#function-setdetectionmode) controls which SDI card detection approach is used when [startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) is invoked 


## Public Functions Documentation

### function setDetectionMode

```cpp
void setDetectionMode(
    const enum DetectionMode mode
)
```

Set Card Detection mode. 

**Parameters**: 

  * **mode** Card Detection mode 


### function setTecStartOptions

```cpp
void setTecStartOptions(
    const std::vector< unsigned char > & opts
)
```

Set options for [cts_StartSelection()]() send by [startSelection()]() (DFA12A) 

**Parameters**: 

  * **opts** cts_StartSelection options of up to 16 bytes length 


### function setTecConfig

```cpp
void setTecConfig(
    const std::vector< unsigned char > & opts
)
```

Set TECSEL ADK configuration (DFA133) 

**Parameters**: 

  * **opts** [cts_SetOptions()](tec_8h.md#function-cts-setoptions) parameter as described by TECSEL ADK 


### function setCancelButton

```cpp
void setCancelButton(
    bool enable
)
```

Method for activation of cancel button. 

**Parameters**: 

  * **enable** flag 


### function setCardEntryValueDeativation

```cpp
void setCardEntryValueDeativation(
    unsigned char b
)
```

Configure which input is skipped at manual card data entry. 

**Parameters**: 

  * **b** bit field 


### function setAlternativeInputFormat

```cpp
void setAlternativeInputFormat(
    const char * f
)
```

Configure alternate input format string for CVV value. 

**Parameters**: 

  * **f** format string 


### function setCardRemovalTimeout

```cpp
void setCardRemovalTimeout(
    unsigned timeout_ms
)
```

For hybrid card readers set timeout for mag. stripe data available after start of card pull-out (DFA153). 

**Parameters**: 

  * **timeout_ms** timeout in milliseconds ..65535 


This setter modifies the [startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) (23-01, 23-03) and [startMsrRead()](classlibsdi_1_1_card_detection.md#function-startmsrread) (21-01) commands. It is forwarded to technology selection [CTS_OPTION_TAG_UX_MSR_TIMEOUT](group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#define-cts-option-tag-ux-msr-timeout).


### function setCallback

```cpp
void setCallback(
    void(*)(unsigned char technology, void *context) cb,
    void * ctx
)
```

Set Callback function to be called in [DETECTION_MODE_CALLBACK](classlibsdi_1_1_card_detection.md#enumvalue-detection-mode-callback) when Card Detection ends. 

**Parameters**: 

  * **cb** callback function pointer 
  * **ctx** callback context to be provided back 


### function cardDetectedCallback

```cpp
void cardDetectedCallback(
    unsigned char * dataIn,
    unsigned short sizeIn
)
```

Internal Card Detected Callback handler function. 

**Parameters**: 

  * **dataIn** callback data received from SDI Server 
  * **sizeIn** callback data length 


### function startSelection

```cpp
int startSelection(
    unsigned char supportedTechnologies,
    unsigned seconds
)
```

Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using [setDetectionMode()](classlibsdi_1_1_card_detection.md#function-setdetectionmode). Default mode is the blocking mode. 

**Parameters**: 

  * **supportedTechnologies** technologies to be detected (DFA108) 
  * **seconds** timeout in seconds [1 .. 1280, 65536] values above one hour trigger the maximal value (P2 & DFA01B)


**Return**: return value from [SDI_Send()](sdiprotocol_8h.md#function-sdi-send)

**Par**: Setters

[setCancelButton()](classlibsdi_1_1_card_detection.md#function-setcancelbutton) (DFA109) 
[setTecStartOptions()](classlibsdi_1_1_card_detection.md#function-settecstartoptions) (DFA12A) 
[setCardEntryValueDeativation()](classlibsdi_1_1_card_detection.md#function-setcardentryvaluedeativation) (DFA017) 
[setAlternativeInputFormat()](classlibsdi_1_1_card_detection.md#function-setalternativeinputformat) (DFA01A) 
[setTecConfig()](classlibsdi_1_1_card_detection.md#function-settecconfig) (DFA133) 
[setCardRemovalTimeout()](classlibsdi_1_1_card_detection.md#function-setcardremovaltimeout) (DFA153)



* In Blocking mode, this function is to be used with [SDI_SetDataAvailableCallback()](sdiprotocol_8h.md#function-sdi-setdataavailablecallback). Once response is available use [receiveTechnology()](classlibsdi_1_1_card_detection.md#function-receivetechnology) to get the output.
* In Callback mode this function is to be used with the callback set using [setCallback()](classlibsdi_1_1_card_detection.md#function-setcallback). Once response is available the [CardDetection](classlibsdi_1_1_card_detection.md) object will be automatically filled with the data received from SDI Server and the callback function will be called.
* In Polling mode this function is to be used with the [pollTechnology()](classlibsdi_1_1_card_detection.md#function-polltechnology) to get the status and the result of the card detection.
Other functions controlling technology selection apart from EMV CTLS configuration are [setTecConfig()](classlibsdi_1_1_card_detection.md#function-settecconfig) and [msrSetOptions()](classlibsdi_1_1_card_detection.md#function-msrsetoptions).


### function stopSelection

```cpp
enum libsdi::SDI_SW12 stopSelection()
```

Abort Technology Selection via SDI Server's Sys Abort (20-02) when in blocking mode, otherwise send Stop Card Detection (23-05). 

**Return**: SW12 returned by the SDI Server

**Note**: You need to call [receiveTechnology()](classlibsdi_1_1_card_detection.md#function-receivetechnology) hereafter to eat the abort result from the IP stack. 

### function receiveTechnology

```cpp
unsigned char receiveTechnology()
```

Get the Technology Selection Result. 

**Return**: selected technology SDI_TEC_CHIP, SDI_TEC_MAGN, SDI_TEC_CTLS, SDI_TEC_MANU or 0 in case of failure or MSR Read

**Par**: 

  * Getters - Card Detection

[getPan()](classlibsdi_1_1_card_detection.md#function-getpan) (DF1A) 
[getTrack2()](classlibsdi_1_1_card_detection.md#function-gettrack2) (DF49) 
[getTrack2Bin()](classlibsdi_1_1_card_detection.md#function-gettrack2bin) (DF1B) 
[getCardholderName()](classlibsdi_1_1_card_detection.md#function-getcardholdername) (5F20) 
[getServiceCode()](classlibsdi_1_1_card_detection.md#function-getservicecode) (5F30) 
[msrGetTrackStatus()](classlibsdi_1_1_card_detection.md#function-msrgettrackstatus) (DFA034) 

 msrGetTrack1() (DFA040) 
[getPluginResponseData()](classlibsdi_1_1_card_detection.md#function-getpluginresponsedata) (DFA101) 
[cardReadAtEpp()](classlibsdi_1_1_card_detection.md#function-cardreadatepp) (DFA150) 
[getValue()](classlibsdi_1_1_card_detection.md#function-getvalue) (FFA102) 
[getData()](classlibsdi_1_1_card_detection.md#function-getdata) (FFA102) 
[getString()](classlibsdi_1_1_card_detection.md#function-getstring) (FF102) 
[getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)
[getClientError()](classlibsdi_1_1_sdi_base.md#function-getclienterror) inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)
  * Getters - MSR Read

[getPan()](classlibsdi_1_1_card_detection.md#function-getpan) (DF1A) 
[getTrack2()](classlibsdi_1_1_card_detection.md#function-gettrack2) (DF49) 
[getTrack2Bin()](classlibsdi_1_1_card_detection.md#function-gettrack2bin) (DF1B) 
[getCardholderName()](classlibsdi_1_1_card_detection.md#function-getcardholdername) (5F20) 
[getServiceCode()](classlibsdi_1_1_card_detection.md#function-getservicecode) (5F30) 
[msrGetTrackStatus()](classlibsdi_1_1_card_detection.md#function-msrgettrackstatus) (DFA034) 
[msrGetCardSpecificToken()](classlibsdi_1_1_card_detection.md#function-msrgetcardspecifictoken) (DFA014) 

 msrGetTrack1() (DFA040) 
[getPluginResponseData()](classlibsdi_1_1_card_detection.md#function-getpluginresponsedata) (DFA101) 
[getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)
[getClientError()](classlibsdi_1_1_sdi_base.md#function-getclienterror) inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)


In case of problem, when '0' is returned use [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) to retrieve the SDI Server SW1 SW2. 


### function cardReadAtEpp

```cpp
bool cardReadAtEpp()
```

Check at which device the card has been read (DFA150). 

**Return**: true for card has been read at EPP, false otherwise 

This function will deliver valid results once the card detection response has been received.


### function pollTechnology

```cpp
unsigned char pollTechnology()
```

Poll for the asynchronous Card Detection status (23-04). 

**Return**: selected technology SDI_TEC_CHIP, SDI_TEC_MAGN, SDI_TEC_CTLS, SDI_TEC_MANU or 0 in case of in progress or failure 

In case of problem, when '0' is returned use getSW12() to retrieve the SDI Server SW1 SW2. 


### function addTechnology

```cpp
enum libsdi::SDI_SW12 addTechnology(
    unsigned char technology,
    const std::vector< unsigned char > & opts
)
```

Add a technology to a running asynchronous Card Detection (23-06) 

**Parameters**: 

  * **technology** technology to be added 
  * **opts** options for cts_StartSelection as described in TECSEL ADK 


**Return**: SW12 returned by the SDI Server 

### function removeTechnology

```cpp
enum libsdi::SDI_SW12 removeTechnology(
    unsigned char technology
)
```

Remove a technology from a running asynchronous Card Detection (23-07) 

**Parameters**: 

  * **technology** technology to be removed 


**Return**: SW12 returned by the SDI Server 

### function getPan

```cpp
std::string getPan()
```

Access PAN from mag. stripe or manual entry (DF1A) 

**Return**: an ..19 

### function getTrack2

```cpp
std::string getTrack2()
```

Access track 2 from mag. stripe (DF49) 

**Return**: ans ..40 

### function getTrack2Bin

```cpp
int getTrack2Bin(
    std::vector< unsigned char > & data
)
```

Access obfuscated track 2 data (DF1B) Note: Data is appended to existing content. 

**Return**: length of appended data ..20, -1 if not present 

### function getCardholderName

```cpp
std::string getCardholderName()
```

Access card holder name from track 1 (5F20) 

**Return**: Name/Christian name according ISO 7810 (ans ..26) 

### function getServiceCode

```cpp
std::string getServiceCode()
```

Access service code from track 3 (5F30) 

**Return**: n 3 

### function getTrack1

```cpp
std::string getTrack1()
```

Access mag. stripe track 1 (DFA040) 

**Return**: ans ..79 

### function getPluginResponseData

```cpp
int getPluginResponseData(
    std::vector< unsigned char > & data
)
```

Access plugin response data (DFA101) in case one plugin has been triggered. 

**Parameters**: 

  * **data** plugin response data (Note: Data is appended to existing content) 


**Return**: length of appended data, -1 if not present 

### function getPluginResponseData

```cpp
int getPluginResponseData(
    unsigned index,
    int32_t & pluginId,
    int32_t & pluginResponseCode,
    std::vector< unsigned char > & data
)
```

Access plugin response data (FFA107, DFA101, DFA10C, DFA10D) 

**Parameters**: 

  * **index** for iterating the result data, starting with 0 
  * **pluginId** return value of a plugin's `moduleID` function also used as INS byte of SDI 26-xx command to invoke a plugin, 0 if not available 
  * **pluginResponseCode** plugin's `processTrigger` function return value, [SDI_SW12_NONE](namespacelibsdi.md#enumvalue-sdi-sw12-none) if not available 
  * **data** plugin response data (Note: Data is appended to existing content) 


**Return**: length of appended data, -1 if not present = end of iteration 

### function getPluginResponseData

```cpp
bool getPluginResponseData(
    std::vector< PluginResult > & results
)
```

Access plugin response data (FFA107, DFA101, DFA10C, DFA10D) 

**Parameters**: 

  * **results** plugin ids, response codes and response data 


**Return**: true if any plugin result has been found 

### function getString

```cpp
std::string getString(
    unsigned CTS_DATA_TAG
)
```

Access cts_WaitSelection result data (FFA102) CTS_DATA_TAG_VAS_DATA: JSON string returned by NFC_VAS_Activate or NFC_VAS_Decrypt (DFDB24) 

**Parameters**: 

  * **CTS_DATA_TAG** item to be read 


**Return**: JSON string from NFC ADK 

### function getValue

```cpp
unsigned char getValue(
    unsigned CTS_DATA_TAG,
    unsigned char defaultValue
)
```

Access cts_WaitSelection result data tags of 1 byte length (FFA102) CTS_DATA_TAG_NFC_RESULT CTS_DATA_TAG_CARDS_TOTAL_COUNT CTS_DATA_TAG_CARDS_A CTS_DATA_TAG_CARDS_B CTS_DATA_TAG_CARDS_F CTS_DATA_TAG_CARD_TYPE CTS_DATA_TAG_VAS_RESULT CTS_DATA_TAG_EMV_RESULT CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT. 

**Parameters**: 

  * **CTS_DATA_TAG** tag to be extracted 
  * **defaultValue** default value to be returned for the case that requested data is not found 


**Return**: requested value or defaultValue if tag not present 

### function getValue

```cpp
unsigned char getValue(
    unsigned CTS_DATA_TAG,
    int n,
    unsigned char defaultValue
)
```

Access cts_WaitSelection result data tags of 1 byte length. 

**Parameters**: 

  * **CTS_DATA_TAG** tag to be extracted 
  * **n** number of card in case multiple cards detected, count starts with 1 
  * **defaultValue** default value to be returned for the case that requested data is not found 


**Return**: requested value or defaultValue if tag not present 

### function getData

```cpp
int getData(
    std::vector< unsigned char > & data
)
```

Access cts_WaitSelection result data (complete FFA102 content) 

**Parameters**: 

  * **data** destination buffer 


**Return**: length of output, -1 if not present 

**Note**: existing data is erased 

### function getData

```cpp
int getData(
    unsigned CTS_DATA_TAG,
    std::vector< unsigned char > & data
)
```

Access cts_WaitSelection result data CTS_DATA_TAG_CARD_INFO. 

**Parameters**: 

  * **CTS_DATA_TAG** tag to be extracted 
  * **data** destination buffer 


**Return**: length of appended data, -1 if not present 

**Note**: Data is appended to existing content 

### function getData

```cpp
int getData(
    unsigned CTS_DATA_TAG,
    int n,
    std::vector< unsigned char > & data
)
```

Access cts_WaitSelection result data CTS_DATA_TAG_CARD_INFO. 

**Parameters**: 

  * **CTS_DATA_TAG** tag to be extracted 
  * **n** number of card in case multiple cards detected, count starts with 1 
  * **data** destination buffer 


**Return**: length of appended data, -1 if not present 

**Note**: Data is appended to existing content 

### function getTecselData

```cpp
int getTecselData(
    std::vector< unsigned char > & data
)
```

Access cts_WaitSelection result data in case CTS_DATA_TLV is not set ([SDI]() tag DFA154) This can include either the EMV-ADK CTLS framework response code (result of continue offline) or the contactless card type (result of smart reset). 

**Parameters**: 

  * **data** destination buffer 


**Return**: length of appended data, -1 if not present 

**Note**: Data is appended to existing content 

### function startMsrRead

```cpp
int startMsrRead(
    unsigned timeout_sec
)
```

Send MSR read request (21-01) 

**Parameters**: 

  * **timeout_sec** timeout in seconds (P2 & DFA01B) 


**Return**: result of [SDI_Send()](sdiprotocol_8h.md#function-sdi-send)

**Par**: Setters

[setCardRemovalTimeout()](classlibsdi_1_1_card_detection.md#function-setcardremovaltimeout) (DFA153)

This command is like [startSelection()](classlibsdi_1_1_card_detection.md#function-startselection) in blocking mode, use it with [SDI_SetDataAvailableCallback()](sdiprotocol_8h.md#function-sdi-setdataavailablecallback). Once response is available use [receiveTechnology()](classlibsdi_1_1_card_detection.md#function-receivetechnology) or [receive()](classlibsdi_1_1_sdi_cmd.md#function-receive) to receive the response and then call the appropriate getters for reading the result data.


### function msrSetOptions

```cpp
int msrSetOptions(
    const std::vector< unsigned char > & opts
)
```

Set MSR options (21-03) 

**Return**: 0 if successful, -1 invalid parameter, SDI command was not sent -2 SDI server error, check sw12 for more details 

These options configure the behavior of magnetic card reader library, set by [MSR_SetOptions()](msr_8h.md#function-msr-setoptions).



 Serialization information can be found in [SDI](classlibsdi_1_1_s_d_i.md) docu [MSR Set Options (21-03)]


### function msrGetTrackStatus

```cpp
int msrGetTrackStatus(
    int track
)
```


**Parameters**: 

  * **track** track number 1..3 


**Return**: MSR_STATUS_xxx or -1 if not available 

Access MSR-ADK track status code (MSR_STATUS_xxx in msr/msr_common.h) (DFA034)

Only available if technology selection result is magnetic stripe read. 


### function msrGetCardSpecificToken

```cpp
int msrGetCardSpecificToken(
    std::vector< unsigned char > & token
)
```


**Parameters**: 

  * **token** buffer for token data **Note** data is appended 


**Return**: data length, -1 if not present 

Read card specific token (DFA014) optionally returned by MSR Read command


### function CardDetection

```cpp
CardDetection()
```


### function ~CardDetection

```cpp
~CardDetection()
```


### function clear

```cpp
virtual void clear()
```


**Reimplements**: [libsdi::SdiCmd::clear](classlibsdi_1_1_sdi_cmd.md#function-clear)


Clean up object status

Buffers, status variables and callback settings are brought back to initial state. Object is afterwards in the same state as if just constructed. 


## Public Attributes Documentation

### variable SDI_TEC_CHIP

```cpp
static const static unsigned char SDI_TEC_CHIP = 1;
```


### variable SDI_TEC_MAGN

```cpp
static const static unsigned char SDI_TEC_MAGN = 2;
```


### variable SDI_TEC_CTLS

```cpp
static const static unsigned char SDI_TEC_CTLS = 4;
```


### variable SDI_TEC_MANU

```cpp
static const static unsigned char SDI_TEC_MANU = 8;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100