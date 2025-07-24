---
hidden: true
title: Functions for transparent ICC accessICC Interface
---

[Functions](#func-members)

Collaboration diagram for Functions for transparent ICC access:

![](group___f_u_n_c___i_c_c.png)

|  |  |
|----|----|
| Functions |  |
| <a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char  | [EMV_CTLS_TransparentCommand](#ga5290215f61c323842d712a8ad130c758) (unsigned short usInDataLen, unsigned char \*pucDataIn, unsigned short \*pusOutDataLen, unsigned char \*pucDataOut) |
|   | Transparently send a command to the reader and receive it\'s response. [More\...](#ga5290215f61c323842d712a8ad130c758)<br/> |
| <a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char  | [EMV_CTLS_TransparentSend](#ga91409ddd42bd277e1be3157f6c3bd445) (unsigned short usInDataLen, unsigned char \*pucDataIn) |
|   | Transparently send a command to the reader. [More\...](#ga91409ddd42bd277e1be3157f6c3bd445)<br/> |
| <a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char  | [EMV_CTLS_TransparentReceive](#ga13fd81242d6f2012ffade242f069a7f0) (unsigned short \*pusOutDataLen, unsigned char \*pucDataOut) |
|   | Transparent VFI reader access: Receive a response. [More\...](#ga13fd81242d6f2012ffade242f069a7f0)<br/> |
| <a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char  | [EMV_CTLS_SmartISO](#gafbcdb0278723b9629eb7c12532119e2d) (unsigned char ucOptions, unsigned short usInDataLen, unsigned char \*pucDataIn, unsigned short \*pusOutDataLen, unsigned char \*pucDataOut, unsigned short usOutBufferLength) |
|   | Send chip card command and receive response. [More\...](#gafbcdb0278723b9629eb7c12532119e2d)<br/> |
| <a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char  | [EMV_CTLS_SmartReset](#gae2c93f30f24ceb94c930a7cae2b36116) (unsigned char ucOptions, unsigned char \*pucCardInfo, unsigned long \*pnInfoLength) |
|   | Detect if card is present in the RF field (read ATR) [More\...](#gae2c93f30f24ceb94c930a7cae2b36116)<br/> |
| <a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char  | [EMV_CTLS_SmartPowerOff](#gadd0716253a50b2791ac4e2a1627d1e8d) (unsigned char ucOptions) |
|   | Deactivate chip card. [More\...](#gadd0716253a50b2791ac4e2a1627d1e8d)<br/> |
| <a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char  | [EMV_CT_SmartISO](#ga728923e6e6be8867cf954b7c8d4414d5) (unsigned char ucOptions, unsigned short usInDataLen, unsigned char \*pucDataIn, unsigned short \*pusOutDataLen, unsigned char \*pucDataOut, unsigned short usOutBufferLength) |
|   | send chip card command and receive response [More\...](#ga728923e6e6be8867cf954b7c8d4414d5)<br/> |
| <a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char  | [EMV_CT_SmartDetect](#ga62577d8d938685a65dd2b326cb03522d) (unsigned char ucOptions) |
|   | Detect if chip card is inserted in card reader (in readable position) [More\...](#ga62577d8d938685a65dd2b326cb03522d)<br/> |
| <a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char  | [EMV_CT_SmartReset](#gaa63515431ea6f33b113fa7af5562db11) (unsigned char ucOptions, unsigned char \*pucATR, unsigned long \*pnATRLength) |
|   | Detect if chip card is inserted in card reader (read ATR) [More\...](#gaa63515431ea6f33b113fa7af5562db11)<br/> |
| <a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char  | [EMV_CT_SmartPowerOff](#gab99f6946bd7815a64a54be66652c2840) (unsigned char ucOptions) |
|   | Deactivate chip card. [More\...](#gab99f6946bd7815a64a54be66652c2840)<br/> |
| <a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char  | [EMV_CT_SmartPIN](#ga1399e33e4c57a10554adbb2aa16d4dcb) (const unsigned char \*INICCRandom, const unsigned char \*PubKeyData, int PubKeyLen, int Exponent, unsigned char \*pucPINResultData) |
|   | Encipher PIN and send VERIFY command. [More\...](#ga1399e33e4c57a10554adbb2aa16d4dcb)<br/> |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## EMV_CT_SmartDetect() <a href="#ga62577d8d938685a65dd2b326cb03522d" id="ga62577d8d938685a65dd2b326cb03522d"></a>

<p><a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char EMV_CT_SmartDetect</p>

Detect if chip card is inserted in card reader (in readable position)

Explanation in programmers guide: <a href="pg_emv_contact_users_guide.md#anchor_emv_ct_detecting_a_smart_card">Detecting a Smart Card</a>

### Author

GSS R&D Germany

**Parameters**

\[in\] **ucOptions** Options for ICC accessTLV tag TAG_DF06_CARDREADER_NUM

### Returns

see <a href="group___s_m_a_r_t___s_t_a_t_u_s.md">Smart status</a>, additionally possible:
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: concurrent call or not allowed within callback
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation

## EMV_CT_SmartISO() <a href="#ga728923e6e6be8867cf954b7c8d4414d5" id="ga728923e6e6be8867cf954b7c8d4414d5"></a>

<p><a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char EMV_CT_SmartISO</p>

send chip card command and receive response

Explanation in programmers guide: <a href="pg_emv_contact_users_guide.md#anchor_emv_ct_send_an_iso_command_to_a_smart_card">ISO Command to a Smart Card</a>

### Author

GSS R&D Germany

**Parameters**

\[in\] **ucOptions** Options for ICC accessTLV tag TAG_DF06_CARDREADER_NUM \[in\] **usInDataLen,pucDataIn** Chip card commandTLV tag TAG_ISO_DATA \[in\] **usOutBufferLength** Length of output bufferTLV tag TAG_DF3B_PARAMETER_1, optional, length 2, default 512 \[out\] **pusOutDataLen,pucDataOut** Chip card response (with leading status word SW1/2)TLV tag TAG_ISO_DATA

### Returns

see <a href="group___s_m_a_r_t___s_t_a_t_u_s.md">Smart status</a>, additionally possible:
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga89c11346e5e636e7c9d42c6a772674bf">EMV_ADK_PARAM</a>: bad pucDataIn, pucDataOut or pusOutDataLen input params
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: concurrent call or not allowed within callback
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation

## EMV_CT_SmartPIN() <a href="#ga1399e33e4c57a10554adbb2aa16d4dcb" id="ga1399e33e4c57a10554adbb2aa16d4dcb"></a>

<p><a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char EMV_CT_SmartPIN</p>

Encipher PIN and send VERIFY command.

This function extends the transparent card access function group. It is only required if the control flow is outside the framework. Otherwise you should call EMV_CT_Send_PIN_Offline, no matter if PIN is enciphered or plain because this function will not be allowed.

### Author

GSS R&D Germany

**Parameters**

\[in\] **INICCRandom** ICC random number extracted from Get Challenge response (8 bytes)TLV tag TAG_DF3B_PARAMETER_1 \[in\] **PubKeyData** PIN verification public key modulusTLV tag TAG_KEY_KEY \[in\] **PubKeyLen** length of PubKeyData in bytesTLV tag TAG_KEY_KEY \[in\] **Exponent** PIN verification public key exponent (0 for 2, 1 for 3, 16 for 65537)TLV tag TAG_KEY_EXPONENT \[out\] **pucPINResultData** PIN result data (usually 2 bytes length + status word SW12, buffer size 4 bytes)TLV tag TAG_ISO_DATA

### Returns

see <a href="group___s_m_a_r_t___s_t_a_t_u_s.md">Smart status</a>, additionally possible:
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: concurrent call or not allowed within callback
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation

## EMV_CT_SmartPowerOff() <a href="#gab99f6946bd7815a64a54be66652c2840" id="gab99f6946bd7815a64a54be66652c2840"></a>

<p><a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char EMV_CT_SmartPowerOff</p>

Deactivate chip card.

Explanation in programmers guide: <a href="pg_emv_contact_users_guide.md#anchor_emv_ct_deactivate_a_smart_card">Deactivate a Smart Card</a>

### Author

GSS R&D Germany

**Parameters**

\[in\] **ucOptions** Options for ICC accessTLV tag TAG_DF06_CARDREADER_NUM

### Returns

see <a href="group___s_m_a_r_t___s_t_a_t_u_s.md">Smart status</a>, additionally possible:
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: concurrent call or not allowed within callback
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation

## EMV_CT_SmartReset() <a href="#gaa63515431ea6f33b113fa7af5562db11" id="gaa63515431ea6f33b113fa7af5562db11"></a>

<p><a href="_e_m_v___c_t___interface_8h.md#aba0ead6baeabe51c5f4fe870feb9ec16">DLL_CTC</a> unsigned char EMV_CT_SmartReset</p>

Detect if chip card is inserted in card reader (read ATR)

Explanation in programmers guide: <a href="pg_emv_contact_users_guide.md#anchor_emv_ct_activating_a_smart_card">Activating a Smart Card</a>

### Author

GSS R&D Germany

**Parameters**

\[in\] **ucOptions** Options for ICC accessTLV tag TAG_DF06_CARDREADER_NUM \[out\] **pucATR** ATR (min. 40 bytes must be allocated)TLV tag TAG_ATR \[out\] **pnATRLength** ATR lengthTLV tag TAG_ATR

### Returns

see <a href="group___s_m_a_r_t___s_t_a_t_u_s.md">Smart status</a>, additionally possible:
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga89c11346e5e636e7c9d42c6a772674bf">EMV_ADK_PARAM</a>: bad pucATR or pnATRLength input params
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: concurrent call or not allowed within callback
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation

## EMV_CTLS_SmartISO() <a href="#gafbcdb0278723b9629eb7c12532119e2d" id="gafbcdb0278723b9629eb7c12532119e2d"></a>

<p><a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char EMV_CTLS_SmartISO</p>

Send chip card command and receive response.

Transport tags used for serialization: <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#ga5bba87bf3fef52692566815cace38934">CLA_CRD</a> <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#gabca70fa6b551edc49bd98ac79f50bfbf">INS_ICC_ISO</a>

<a href="pg_emv_contactless_users_guide.md#anchor_emv_ctls_send_an_iso_command_to_a_contactless_smart_card">Explanation in programmers guide</a>

### Author

GSS R&D Germany

**Parameters**

\[in\] **ucOptions** \... Options for ICC access \[in\] **usInDataLen,pucDataIn** \... chip card command \[in\] **usOutBufferLength** \... max length of output buffer \[out\] **pusOutDataLen,pucDataOut** \... chip card response

### Returns

see <a href="group___s_m_a_r_t___s_t_a_t_u_s.md">Smart status</a>
additionally possible:
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga89c11346e5e636e7c9d42c6a772674bf">EMV_ADK_PARAM</a>: bad pucDataIn, pusOutDataLen or pucDataOut input params
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: TLV processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: function not allowed in a concurrent call or not allowed within callback

## EMV_CTLS_SmartPowerOff() <a href="#gadd0716253a50b2791ac4e2a1627d1e8d" id="gadd0716253a50b2791ac4e2a1627d1e8d"></a>

<p><a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char EMV_CTLS_SmartPowerOff</p>

Deactivate chip card.

Transport tags used for serialization: <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#ga5bba87bf3fef52692566815cace38934">CLA_CRD</a> <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#gad4ec43d9380ec71d8c396270b5d34bc2">INS_ICC_OFF</a>

<a href="pg_emv_contactless_users_guide.md#anchor_emv_ctls_deactivate_a_smart_card">Explanation in programmers guide</a>

### Author

GSS R&D Germany

**Parameters**

\[in\] **ucOptions** \... Options for ICC access

### Returns

see <a href="group___s_m_a_r_t___s_t_a_t_u_s.md">Smart status</a>
additionally possible:
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: TLV processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: function not allowed in a concurrent call or not allowed within callback

## EMV_CTLS_SmartReset() <a href="#gae2c93f30f24ceb94c930a7cae2b36116" id="gae2c93f30f24ceb94c930a7cae2b36116"></a>

<p><a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char EMV_CTLS_SmartReset</p>

Detect if card is present in the RF field (read ATR)

Transport tags used for serialization: <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#ga5bba87bf3fef52692566815cace38934">CLA_CRD</a> <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#ga93317ba7df100e161844932dbd20698f">INS_ICC_RESET</a>

<a href="pg_emv_contactless_users_guide.md#anchor_emv_ctls_activating_a_contactless_smart_card">Explanation in programmers guide</a>

### Author

GSS R&D Germany

**Parameters**

\[in\] **ucOptions** Options for ICC access \[out\] **pucCardInfo** Card type, 0: No card, 1: ISO14443A, 2: ISO14443B, for non-EMV values see OS header picc.happended if available and option EMV_CTLS_RESET_NO_EMV: UID (1 byte data length, n byte data) \[in,out\] **pnInfoLength** in: allocated size of pucCardInfo, out: Number of bytes written to pucCardInfo

### Returns

see <a href="group___s_m_a_r_t___s_t_a_t_u_s.md">Smart status</a>
additionally possible:
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga89c11346e5e636e7c9d42c6a772674bf">EMV_ADK_PARAM</a>: bad pucCardInfo or pnInfoLength input params
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: TLV processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: function not allowed in a concurrent call or not allowed within callback

## EMV_CTLS_TransparentCommand() <a href="#ga5290215f61c323842d712a8ad130c758" id="ga5290215f61c323842d712a8ad130c758"></a>

<p><a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char EMV_CTLS_TransparentCommand</p>

Transparently send a command to the reader and receive it\'s response.

**<a href="deprecated.md#_deprecated000062">Deprecated:</a>** except for VFI reader on VOS-1

This function has limited functionality.
In case the restrictions are not acceptable for your need:
Use [EMV_CTLS_TransparentSend()](#ga91409ddd42bd277e1be3157f6c3bd445 "Transparently send a command to the reader.") and [EMV_CTLS_TransparentReceive()](#ga13fd81242d6f2012ffade242f069a7f0 "Transparent VFI reader access: Receive a response.") instead.
Restrictions:

- Internal timeout to wait for a response is 3 seconds.
- Protocol 1 commands not supported. As these commands have (sometimes) double responses.

Transport tags used for serialization: <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#ga5bba87bf3fef52692566815cace38934">CLA_CRD</a> <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#gaa274137086fb28a0e9697deb17555113">INS_ICC_TRANS</a>

### Author

GSS R&D Germany

**Parameters**

\[in\] **usInDataLen,pucDataIn** \... reader command \[out\] **pusOutDataLen,pucDataOut** \... reader response

### Returns

<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga1456bb13b42906927f8a8942169b62e7">EMV_ADK_OK</a>: success
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga89c11346e5e636e7c9d42c6a772674bf">EMV_ADK_PARAM</a>: bad pucDataIn, pusOutDataLen or pucDataOut input params
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: TLV processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: function not allowed in a concurrent call or not allowed within callback
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga7ffea44a30b0451d393487eae4035b4e">EMV_ADK_NO_EXEC</a>: not VFI reader

## EMV_CTLS_TransparentReceive() <a href="#ga13fd81242d6f2012ffade242f069a7f0" id="ga13fd81242d6f2012ffade242f069a7f0"></a>

<p><a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char EMV_CTLS_TransparentReceive</p>

Transparent VFI reader access: Receive a response.

**<a href="deprecated.md#_deprecated000064">Deprecated:</a>** except for VFI reader on VOS-1

A command can be sent with help of [EMV_CTLS_TransparentSend()](#ga91409ddd42bd277e1be3157f6c3bd445 "Transparently send a command to the reader.")

Transport tags used for serialization: <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#ga5bba87bf3fef52692566815cace38934">CLA_CRD</a> <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#gab3ddc4213a9aaf815a80fcf39dffa699">INS_ICC_RECEIVE</a>

### Author

GSS R&D Germany

**Parameters**

\[out\] **pusOutDataLen,pucDataOut** \... reader response

### Returns

<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga1456bb13b42906927f8a8942169b62e7">EMV_ADK_OK</a>: success
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga89c11346e5e636e7c9d42c6a772674bf">EMV_ADK_PARAM</a>: bad pusOutDataLen or pucDataOut input params
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: TLV processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: function not allowed in a concurrent call or not allowed within callback
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga7ffea44a30b0451d393487eae4035b4e">EMV_ADK_NO_EXEC</a>: not VFI reader

## EMV_CTLS_TransparentSend() <a href="#ga91409ddd42bd277e1be3157f6c3bd445" id="ga91409ddd42bd277e1be3157f6c3bd445"></a>

<p><a href="_e_m_v___c_t_l_s___interface_8h.md#a0c075561565f443dd054da7871da8462">DLL_CLC</a> unsigned char EMV_CTLS_TransparentSend</p>

Transparently send a command to the reader.

**<a href="deprecated.md#_deprecated000063">Deprecated:</a>** except for VFI reader on VOS-1

Use [EMV_CTLS_TransparentReceive()](#ga13fd81242d6f2012ffade242f069a7f0 "Transparent VFI reader access: Receive a response.") to fetch the response.

Transport tags used for serialization: <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#ga5bba87bf3fef52692566815cace38934">CLA_CRD</a> <a href="group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#ga25d2323eddf0061e3eadabbbfe766638">INS_ICC_SEND</a>

### Author

GSS R&D Germany

**Parameters**

\[in\] **usInDataLen,pucDataIn** \... reader command

### Returns

<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga1456bb13b42906927f8a8942169b62e7">EMV_ADK_OK</a>: success
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga89c11346e5e636e7c9d42c6a772674bf">EMV_ADK_PARAM</a>: bad pucDataIn input param
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga4837e54c589150debdef49afb8f9b5db">EMV_ADK_TLV_BUILD_ERR</a>: TLV processing problem
<a href="group___a_d_k___r_e_t___c_o_d_e.md#gab0e8158b5e7019f0da44c5cbc37bae3d">EMV_ADK_INTERNAL</a>: internal communication problem, illegal file content, memory allocation
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3a1d800696b9d7a86c0e39068d3fde57">EMV_ADK_NOT_ALLOWED</a>: function not allowed in a concurrent call or not allowed within callback
<a href="group___a_d_k___r_e_t___c_o_d_e.md#ga7ffea44a30b0451d393487eae4035b4e">EMV_ADK_NO_EXEC</a>: not VFI reader

