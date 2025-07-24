---
hidden: true
title: TEC return codes
---

[Macros](#define-members)

These return codes are returned by the various libtec functions. [More\...](#details)

|  |  |
|----|----|
| Macros |  |
| #define  | [CTS_OK](#ga1952f713ce2bbfa1d8b54142ca52ecc4)   0 |
| #define  | [CTS_NO_CHIP](#ga058dc7a7d6d6562dac8171ca86f5b5c0)   1 |
| #define  | [CTS_IN_PROGRESS](#ga7ee2b62641a168354503adbb06508deb)   2 |
| #define  | [CTS_TIMEOUT](#gae1d5a1303c3edd9aa78e9ed9b8c3207a)   3 |
| #define  | [CTS_PARAM](#ga3e498393b2a0ebf740bb6f1e903270a0)   4 |
| #define  | [CTS_NOT_STARTED](#gad672622165e6bdf597675c829606bb62)   5 |
| #define  | [CTS_STOPPED](#ga7cc5cc3d019136c0a8942e62c558b69c)   6 |
| #define  | [CTS_CTLS_INIT](#ga1827cb909b31c770a7af3c5521253ceb)   7 |
| #define  | [CTS_ERROR](#gac7ce1e8ae224edcd06cbd17046a9f9de)   8 |
| #define  | [CTS_CTLS_NOT_ALLOWED](#gaf0431ada300a75873e555d8ec68484c6)   9 |
| #define  | [CTS_CTLS_EMV_NO_CARD](#ga1279a0bd837c7c80b23c747bfe40310f)   10 |
| #define  | [CTS_ERR_LOAD](#ga631b3ac8f6e41ecfa2aefc97296e0f75)   11 |
| #define  | [CTS_VAS_DECRYPTION_NOT_REQUIRED](#ga11e77d01884f12702d0652efb875c9bd)   12 |
| #define  | [CTS_VAS_DATA_DECRYPTED_OK](#ga773aac25463871c28c91a217fca64caa)   13 |
| #define  | [CTS_VAS_DATA_DECRYPTED_FAILED](#gac051158cd3273d316aa38227c996503a)   14 |
| #define  | [CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT](#gadf0a2a2d0df56c222253a27bfeefdbb7)   15 |
| #define  | [CTS_NFC_INIT](#ga1527ff5876cd8d07fb7790fb9582ef8f)   16 |
| #define  | [CTS_CHIP_WITH_WRONG_ATR](#gac43b71a6f5b22f202d8d9ae853d42cf1)   17 |
| #define  | [CTS_API_NOT_ALLOWED](#ga7dd3d4f95380f5b689a4e20aec5a33f7)   18 |
| #define  | [CTS_VAS_DATA_ENCRYPTED_OK](#gafb45d462dce92aeffd12f7867a2c3f6c)   19 |
| #define  | [CTS_UX_NO_MSR_DATA_AFTER_CARD_REMOVL](#gab88646562adf7c9201c7806c4ce3e962)   20 |
| #define  | [CTS_MSR_ONLY_REQUEST_BUT_NO_DEVICE](#gaa49d5062e70c65550fb09392d8e955a7)   21 |

## DetailedDescription {#detailed-description}

These return codes are returned by the various libtec functions.

## MacroDefinition Documentation {#macro-definition-documentation}

## CTS_API_NOT_ALLOWED <a href="#ga7dd3d4f95380f5b689a4e20aec5a33f7" id="ga7dd3d4f95380f5b689a4e20aec5a33f7"></a>

<p>#define CTS_API_NOT_ALLOWED   18</p>

API not allowed because TEC-callback is still in progress.

## CTS_CHIP_WITH_WRONG_ATR <a href="#gac43b71a6f5b22f202d8d9ae853d42cf1" id="gac43b71a6f5b22f202d8d9ae853d42cf1"></a>

<p>#define CTS_CHIP_WITH_WRONG_ATR   17</p>

Chip-Card is inserted but its ATR is not EMV conform. This value may be returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a> only if EMV_CT_DETECT_WRONG_ATR is set in the input parameter options\[4\] of the function <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a>.

## CTS_CTLS_EMV_NO_CARD <a href="#ga1279a0bd837c7c80b23c747bfe40310f" id="ga1279a0bd837c7c80b23c747bfe40310f"></a>

<p>#define CTS_CTLS_EMV_NO_CARD   10</p>

ADK-EMV has detected no medium to perform a contactless payment (returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>).

## CTS_CTLS_INIT <a href="#ga1827cb909b31c770a7af3c5521253ceb" id="ga1827cb909b31c770a7af3c5521253ceb"></a>

<p>#define CTS_CTLS_INIT   7</p>

Contactless transaction was not set up correctly (returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>).

## CTS_CTLS_NOT_ALLOWED <a href="#gaf0431ada300a75873e555d8ec68484c6" id="gaf0431ada300a75873e555d8ec68484c6"></a>

<p>#define CTS_CTLS_NOT_ALLOWED   9</p>

VFI-Reader has not yet finished previous transaction (returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>).

## CTS_ERR_LOAD <a href="#ga631b3ac8f6e41ecfa2aefc97296e0f75" id="ga631b3ac8f6e41ecfa2aefc97296e0f75"></a>

<p>#define CTS_ERR_LOAD   11</p>

Error loading dynamic library (NFC_Client.so/NFC_Client.vsl).

## CTS_ERROR <a href="#gac7ce1e8ae224edcd06cbd17046a9f9de" id="gac7ce1e8ae224edcd06cbd17046a9f9de"></a>

<p>#define CTS_ERROR   8</p>

Internal error.

## CTS_IN_PROGRESS <a href="#ga7ee2b62641a168354503adbb06508deb" id="ga7ee2b62641a168354503adbb06508deb"></a>

<p>#define CTS_IN_PROGRESS   2</p>

Operation in progress (returned by <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a>, <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>, <a href="tec_8h.md#a8db288b6803c1fba534d94a99f1b646b">cts_WaitCardRemoval()</a>).

## CTS_MSR_ONLY_REQUEST_BUT_NO_DEVICE <a href="#gaa49d5062e70c65550fb09392d8e955a7" id="gaa49d5062e70c65550fb09392d8e955a7"></a>

<p>#define CTS_MSR_ONLY_REQUEST_BUT_NO_DEVICE   21</p>

\"MSR only\" requested but the device does not have a magstripe reader (<a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a>).

## CTS_NFC_INIT <a href="#ga1527ff5876cd8d07fb7790fb9582ef8f" id="ga1527ff5876cd8d07fb7790fb9582ef8f"></a>

<p>#define CTS_NFC_INIT   16</p>

NFC not initialized (returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>). Application has to call NFC_Client_Init before.

## CTS_NO_CHIP <a href="#ga058dc7a7d6d6562dac8171ca86f5b5c0" id="ga058dc7a7d6d6562dac8171ca86f5b5c0"></a>

<p>#define CTS_NO_CHIP   1</p>

Card without chip or with broken chip is inserted or card is inserted and <a href="group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#ga1073825ee49c63471bef39392d6df7e6">CTS_NO_POWERON</a> is set (returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>).

## CTS_NOT_STARTED <a href="#gad672622165e6bdf597675c829606bb62" id="gad672622165e6bdf597675c829606bb62"></a>

<p>#define CTS_NOT_STARTED   5</p>

Technology selection is not running (returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>, <a href="tec_8h.md#acaf2d75d1b584ae97ff9ee4da47cee38">cts_StopSelection()</a>, <a href="tec_8h.md#a8569782d27f43e5d88cef3575a5d12c6">cts_RemoveTechnologies()</a>).

## CTS_OK <a href="#ga1952f713ce2bbfa1d8b54142ca52ecc4" id="ga1952f713ce2bbfa1d8b54142ca52ecc4"></a>

<p>#define CTS_OK   0</p>

No error, function executed successfully.

## CTS_PARAM <a href="#ga3e498393b2a0ebf740bb6f1e903270a0" id="ga3e498393b2a0ebf740bb6f1e903270a0"></a>

<p>#define CTS_PARAM   4</p>

Parameter error (returned by <a href="tec_8h.md#aa237be1f0249503d0b959d3800f1ee34">cts_SetOptions()</a>, <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>, <a href="tec_8h.md#a8db288b6803c1fba534d94a99f1b646b">cts_WaitCardRemoval()</a>, <a href="tec_8h.md#aa60922ab5b40a033ac85a36e8022cafa">cts_AddTechnologies()</a>).

## CTS_STOPPED <a href="#ga7cc5cc3d019136c0a8942e62c558b69c" id="ga7cc5cc3d019136c0a8942e62c558b69c"></a>

<p>#define CTS_STOPPED   6</p>

Technology selection was aborted by <a href="tec_8h.md#acaf2d75d1b584ae97ff9ee4da47cee38">cts_StopSelection()</a> or <a href="tec_8h.md#a8569782d27f43e5d88cef3575a5d12c6">cts_RemoveTechnologies()</a> (returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>).

## CTS_TIMEOUT <a href="#gae1d5a1303c3edd9aa78e9ed9b8c3207a" id="gae1d5a1303c3edd9aa78e9ed9b8c3207a"></a>

<p>#define CTS_TIMEOUT   3</p>

Timeout occurred (returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>, <a href="tec_8h.md#a92ab7780df1f8150c6d8a9b3ab3163bf">cts_WaitCardRemoval2()</a>).

## CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT <a href="#gadf0a2a2d0df56c222253a27bfeefdbb7" id="gadf0a2a2d0df56c222253a27bfeefdbb7"></a>

<p>#define CTS_UX_MSRDATA_NOT_AVAILABLE_TIMEOUT   15</p>

Technology selection has been terminated because MSR-Data was not read during the time window set in the input parameter options\[8..9\] of the function <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a>. This return code, which is returned by <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a>, is relevant and possible for UX-Devices only. It can be interpreted by the application as \"card inserted incorrectly\" or \"magstripe reader malfunction\".

## CTS_UX_NO_MSR_DATA_AFTER_CARD_REMOVL <a href="#gab88646562adf7c9201c7806c4ce3e962" id="gab88646562adf7c9201c7806c4ce3e962"></a>

<p>#define CTS_UX_NO_MSR_DATA_AFTER_CARD_REMOVL   20</p>

Ux30x only, card was removed but no MSR data could be read.

## CTS_VAS_DATA_DECRYPTED_FAILED <a href="#gac051158cd3273d316aa38227c996503a" id="gac051158cd3273d316aa38227c996503a"></a>

<p>#define CTS_VAS_DATA_DECRYPTED_FAILED   14</p>

VAS output data decryption failed (returned by TEC if NFC_VAS_Data_Decrypt() == VAS_FAIL).
TLV tag <a href="group___t_e_c___d_a_t_a___t_a_g_s.md#ga1092b3be73e407a67aa85580b4c2400a">CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT</a>

## CTS_VAS_DATA_DECRYPTED_OK <a href="#ga773aac25463871c28c91a217fca64caa" id="ga773aac25463871c28c91a217fca64caa"></a>

<p>#define CTS_VAS_DATA_DECRYPTED_OK   13</p>

VAS output data decrypted successfully (returned by TEC if NFC_VAS_Data_Decrypt() == VAS_OK).
TLV tag <a href="group___t_e_c___d_a_t_a___t_a_g_s.md#ga1092b3be73e407a67aa85580b4c2400a">CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT</a>

## CTS_VAS_DATA_ENCRYPTED_OK <a href="#gafb45d462dce92aeffd12f7867a2c3f6c" id="gafb45d462dce92aeffd12f7867a2c3f6c"></a>

<p>#define CTS_VAS_DATA_ENCRYPTED_OK   19</p>

Encrypted VAS output data was NOT decrypted. Reason: <a href="group___t_e_c___s_t_a_r_t___o_p_t_i_o_n_s.md#ga58a66c0d181fb53ca29ace7158f9d9fb">CTS_VAS_DONT_DECRYPT</a> was put in by application.
TLV tag <a href="group___t_e_c___d_a_t_a___t_a_g_s.md#ga1092b3be73e407a67aa85580b4c2400a">CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT</a>

## CTS_VAS_DECRYPTION_NOT_REQUIRED <a href="#ga11e77d01884f12702d0652efb875c9bd" id="ga11e77d01884f12702d0652efb875c9bd"></a>

<p>#define CTS_VAS_DECRYPTION_NOT_REQUIRED   12</p>

VAS output data is not encrypted (returned by TEC if <a href="titusstubs_8cpp.md#a1f0e681b88497ef9e25abde4ed3b5b3b">NFC_VAS_Activate()</a> reports data-not-encrypted).
TLV tag <a href="group___t_e_c___d_a_t_a___t_a_g_s.md#ga1092b3be73e407a67aa85580b4c2400a">CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT</a>
