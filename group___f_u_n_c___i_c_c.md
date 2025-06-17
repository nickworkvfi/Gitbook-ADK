---
title: Functions for transparent ICC access

---

# Functions for transparent ICC access

**Module:** **[ICC Interface](group___a_d_k___i_c_c___i_f.md)**



## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_TransparentCommand](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentcommand)**(unsigned short usInDataLen, unsigned char * pucDataIn, unsigned short * pusOutDataLen, unsigned char * pucDataOut)<br>Transparently send a command to the reader and receive it's response.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_TransparentSend](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend)**(unsigned short usInDataLen, unsigned char * pucDataIn)<br>Transparently send a command to the reader.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_TransparentReceive](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive)**(unsigned short * pusOutDataLen, unsigned char * pucDataOut)<br>Transparent VFI reader access: Receive a response.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SmartISO](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartiso)**(unsigned char ucOptions, unsigned short usInDataLen, unsigned char * pucDataIn, unsigned short * pusOutDataLen, unsigned char * pucDataOut, unsigned short usOutBufferLength)<br>Send chip card command and receive response.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SmartReset](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartreset)**(unsigned char ucOptions, unsigned char * pucCardInfo, unsigned long * pnInfoLength)<br>Detect if card is present in the RF field (read ATR)  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) unsigned char | **[EMV_CTLS_SmartPowerOff](group___f_u_n_c___i_c_c.md#function-emv-ctls-smartpoweroff)**(unsigned char ucOptions)<br>Deactivate chip card.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartISO](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso)**(unsigned char ucOptions, unsigned short usInDataLen, unsigned char * pucDataIn, unsigned short * pusOutDataLen, unsigned char * pucDataOut, unsigned short usOutBufferLength)<br>send chip card command and receive response  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartDetect](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect)**(unsigned char ucOptions)<br>Detect if chip card is inserted in card reader (in readable position)  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartReset](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset)**(unsigned char ucOptions, unsigned char * pucATR, unsigned long * pnATRLength)<br>Detect if chip card is inserted in card reader (read ATR)  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartPowerOff](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpoweroff)**(unsigned char ucOptions)<br>Deactivate chip card.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_SmartPIN](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpin)**(const unsigned char * INICCRandom, const unsigned char * PubKeyData, int PubKeyLen, int Exponent, unsigned char * pucPINResultData)<br>Encipher PIN and send VERIFY command.  |


## Functions Documentation

### function EMV_CTLS_TransparentCommand

```
DLL_CLC unsigned char EMV_CTLS_TransparentCommand(
    unsigned short usInDataLen,
    unsigned char * pucDataIn,
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut
)
```

Transparently send a command to the reader and receive it's response. 

**Parameters**: 

  * **usInDataLenpucDataIn** ... reader command 
  * **pusOutDataLenpucDataOut** ... reader response


**Deprecated**: 

except for VFI reader on VOS-1

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucDataIn, pusOutDataLen or pucDataOut input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): not VFI reader

**Author**: GSS R&D Germany



This function has limited functionality. 

 In case the restrictions are not acceptable for your need: 

 Use [EMV_CTLS_TransparentSend()](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend) and [EMV_CTLS_TransparentReceive()](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive) instead. 

 Restrictions: 

* Internal timeout to wait for a response is 3 seconds. 
* Protocol 1 commands not supported. As these commands have (sometimes) double responses.


Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_TRANS](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-trans)


### function EMV_CTLS_TransparentSend

```
DLL_CLC unsigned char EMV_CTLS_TransparentSend(
    unsigned short usInDataLen,
    unsigned char * pucDataIn
)
```

Transparently send a command to the reader. 

**Parameters**: 

  * **usInDataLenpucDataIn** ... reader command


**Deprecated**: 

except for VFI reader on VOS-1

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucDataIn input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): not VFI reader

**Author**: GSS R&D Germany



Use [EMV_CTLS_TransparentReceive()](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentreceive) to fetch the response.

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_SEND](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-send)


### function EMV_CTLS_TransparentReceive

```
DLL_CLC unsigned char EMV_CTLS_TransparentReceive(
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut
)
```

Transparent VFI reader access: Receive a response. 

**Parameters**: 

  * **pusOutDataLenpucDataOut** ... reader response


**Deprecated**: 

except for VFI reader on VOS-1

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pusOutDataLen or pucDataOut input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): not VFI reader

**Author**: GSS R&D Germany



A command can be sent with help of [EMV_CTLS_TransparentSend()](group___f_u_n_c___i_c_c.md#function-emv-ctls-transparentsend)

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_RECEIVE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-receive)


### function EMV_CTLS_SmartISO

```
DLL_CLC unsigned char EMV_CTLS_SmartISO(
    unsigned char ucOptions,
    unsigned short usInDataLen,
    unsigned char * pucDataIn,
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut,
    unsigned short usOutBufferLength
)
```

Send chip card command and receive response. 

**Parameters**: 

  * **ucOptions** ... [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)
  * **usInDataLenpucDataIn** ... chip card command 
  * **usOutBufferLength** ... max length of output buffer 
  * **pusOutDataLenpucDataOut** ... chip card response


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md)

 additionally possible:
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucDataIn, pusOutDataLen or pucDataOut input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_ISO](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-iso)

[Explanation in programmers guide]


### function EMV_CTLS_SmartReset

```
DLL_CLC unsigned char EMV_CTLS_SmartReset(
    unsigned char ucOptions,
    unsigned char * pucCardInfo,
    unsigned long * pnInfoLength
)
```

Detect if card is present in the RF field (read ATR) 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)
  * **pucCardInfo** Card type, 0: No card, 1: ISO14443A, 2: ISO14443B, for non-EMV values see OS header picc.h 

 appended if available and option [EMV_CTLS_RESET_NO_EMV](group___a_d_k___i_c_c___o_p_t_i_o_n.md#define-emv-ctls-reset-no-emv): UID (1 byte data length, n byte data) 
  * **pnInfoLength** in: allocated size of pucCardInfo, out: Number of bytes written to pucCardInfo


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md)

 additionally possible:
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucCardInfo or pnInfoLength input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_RESET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-reset)

[Explanation in programmers guide]


### function EMV_CTLS_SmartPowerOff

```
DLL_CLC unsigned char EMV_CTLS_SmartPowerOff(
    unsigned char ucOptions
)
```

Deactivate chip card. 

**Parameters**: 

  * **ucOptions** ... [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md)

 additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): function not allowed in a concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Transport tags used for serialization: [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)[INS_ICC_OFF](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-off)

[Explanation in programmers guide]


### function EMV_CT_SmartISO

```
DLL_CTC unsigned char EMV_CT_SmartISO(
    unsigned char ucOptions,
    unsigned short usInDataLen,
    unsigned char * pucDataIn,
    unsigned short * pusOutDataLen,
    unsigned char * pucDataOut,
    unsigned short usOutBufferLength
)
```

send chip card command and receive response 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)

 TLV tag [TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)
  * **usInDataLenpucDataIn** Chip card command 

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)
  * **usOutBufferLength** Length of output buffer 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1), optional, length 2, default 512 
  * **pusOutDataLenpucDataOut** Chip card response (with leading status word SW1/2) 

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucDataIn, pucDataOut or pusOutDataLen input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Explanation in programmers guide: [ISO Command to a Smart Card]


### function EMV_CT_SmartDetect

```
DLL_CTC unsigned char EMV_CT_SmartDetect(
    unsigned char ucOptions
)
```

Detect if chip card is inserted in card reader (in readable position) 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)

 TLV tag [TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Explanation in programmers guide: [Detecting a Smart Card]


### function EMV_CT_SmartReset

```
DLL_CTC unsigned char EMV_CT_SmartReset(
    unsigned char ucOptions,
    unsigned char * pucATR,
    unsigned long * pnATRLength
)
```

Detect if chip card is inserted in card reader (read ATR) 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)

 TLV tag [TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)
  * **pucATR** ATR (min. 40 bytes must be allocated) 

 TLV tag [TAG_ATR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-atr)
  * **pnATRLength** ATR length 

 TLV tag [TAG_ATR](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-atr)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pucATR or pnATRLength input params
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Explanation in programmers guide: [Activating a Smart Card]


### function EMV_CT_SmartPowerOff

```
DLL_CTC unsigned char EMV_CT_SmartPowerOff(
    unsigned char ucOptions
)
```

Deactivate chip card. 

**Parameters**: 

  * **ucOptions** [Options for ICC access](group___a_d_k___i_c_c___o_p_t_i_o_n.md)

 TLV tag [TAG_DF06_CARDREADER_NUM](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df06-cardreader-num)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

Explanation in programmers guide: [Deactivate a Smart Card]


### function EMV_CT_SmartPIN

```
DLL_CTC unsigned char EMV_CT_SmartPIN(
    const unsigned char * INICCRandom,
    const unsigned char * PubKeyData,
    int PubKeyLen,
    int Exponent,
    unsigned char * pucPINResultData
)
```

Encipher PIN and send VERIFY command. 

**Parameters**: 

  * **INICCRandom** ICC random number extracted from Get Challenge response (8 bytes) 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **PubKeyData** PIN verification public key modulus 

 TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)
  * **PubKeyLen** length of PubKeyData in bytes 

 TLV tag [TAG_KEY_KEY](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-key)
  * **Exponent** PIN verification public key exponent (0 for 2, 1 for 3, 16 for 65537) 

 TLV tag [TAG_KEY_EXPONENT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-exponent)
  * **pucPINResultData** PIN result data (usually 2 bytes length + status word SW12, buffer size 4 bytes) 

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)


**Return**: see [Smart status](group___s_m_a_r_t___s_t_a_t_u_s.md), additionally possible:
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation

**Author**: GSS R&D Germany

This function extends the transparent card access function group. It is only required if the control flow is outside the framework. Otherwise you should call EMV_CT_Send_PIN_Offline, no matter if PIN is enciphered or plain because this function will not be allowed.






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100