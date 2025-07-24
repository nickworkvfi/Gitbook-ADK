---
hidden: true
title: TEC result data tags
---

[Macros](#define-members)

These tags are used in dataBuffer of <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a> if <a href="tec__common_8h.md#a56386219739d173835a83194608fedea">CTS_DATA_TLV</a> is set in usedTechnology. [More\...](#details)

|  |  |
|----|----|
| Macros |  |
| #define  | [CTS_DATA_TAG_NFC_RESULT](#gaf6119d8d13132973743201b7cbb7bb04)   0xDFDB20 |
| #define  | [CTS_DATA_TAG_CARD](#ga1622a00c90e677978ff06581f4630743)   0xFFDB20 |
| #define  | [CTS_DATA_TAG_CARD_TYPE](#gaf6eee3de6886c30697951526013d3794)   0xDFDB21 |
| #define  | [CTS_DATA_TAG_CARD_INFO](#ga63ba82102b4e6fe41cea1b5ccfaf8961)   0xDFDB22 |
| #define  | [CTS_DATA_TAG_VAS_RESULT](#ga90e89126d9d47b47ffc81f383a25f270)   0xDFDB23 |
| #define  | [CTS_DATA_TAG_VAS_DATA](#ga98da116b51dd2dc960e37d72259b2bea)   0xDFDB24 |
| #define  | [CTS_DATA_TAG_EMV_RESULT](#ga6de766623c7d58220a766c7bb6722c6f)   0xDFDB25 |
| #define  | [CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT](#ga1092b3be73e407a67aa85580b4c2400a)   0xDFDB26 |
| #define  | [CTS_DATA_TAG_CARD_TYPE_FULL](#gac639546d7913d5f57190cc84b9c72f79)   0xDFDB27 |
| #define  | [CTS_DATA_TAG_CARDS_TOTAL_COUNT](#gae0ecdfeeff410e46cbe26e14ec60b193)   0xDFDB28 |
| #define  | [CTS_DATA_TAG_CARDS_A](#gacd7882d48b3f77222d363198404c2d08)   0xDFDB29 |
| #define  | [CTS_DATA_TAG_CARDS_B](#ga5910b3f3e2c30f33f80c38db6c06cdb0)   0xDFDB2A |
| #define  | [CTS_DATA_TAG_CARDS_F](#gaa2a77ff11eacad346a5a279052a62f55)   0xDFDB2B |
| #define  | [CTS_DATA_TAG_CUSTOM_POLL_RESULT](#ga3d1c310415df92df05c6ef95f1f359e5)   0xDFDB2C |
| #define  | [CTS_DATA_TAG_CARD_SAK](#gafd4dad5d39906ccf5556501baea1e29d)   0xDFDB2D |
| #define  | [CTS_DATA_TAG_CARD_ATQ](#gae800761c4d8f9fea080b1119fd08cc80)   0xDFDB2E |
| #define  | [CTS_DATA_TAG_CARD_RFU](#ga263dd4e8800e48d2941b9c4c89c18618)   0xDFDB2F |

## DetailedDescription {#detailed-description}

These tags are used in dataBuffer of <a href="tec_8h.md#aee5b104d8ad6e85feddb685379cdbf0c">cts_WaitSelection()</a> if <a href="tec__common_8h.md#a56386219739d173835a83194608fedea">CTS_DATA_TLV</a> is set in usedTechnology.

## MacroDefinition Documentation {#macro-definition-documentation}

## CTS_DATA_TAG_CARD <a href="#ga1622a00c90e677978ff06581f4630743" id="ga1622a00c90e677978ff06581f4630743"></a>

<p>#define CTS_DATA_TAG_CARD   0xFFDB20</p>

card detected by either <a href="titusstubs_8cpp.md#aa1e541259f194621834060bf770b717b">NFC_PT_Polling()</a> or <a href="titusstubs_8cpp.md#ac692591d9c1287d0d4b6131a03b2e977">NFC_PT_PollingFull()</a>, may occur several times.

## CTS_DATA_TAG_CARD_ATQ <a href="#gae800761c4d8f9fea080b1119fd08cc80" id="gae800761c4d8f9fea080b1119fd08cc80"></a>

<p>#define CTS_DATA_TAG_CARD_ATQ   0xDFDB2E</p>

ATQ of the card found by nfc, 2-byte binary array, included in [CTS_DATA_TAG_CARD](#ga1622a00c90e677978ff06581f4630743).

## CTS_DATA_TAG_CARD_INFO <a href="#ga63ba82102b4e6fe41cea1b5ccfaf8961" id="ga63ba82102b4e6fe41cea1b5ccfaf8961"></a>

<p>#define CTS_DATA_TAG_CARD_INFO   0xDFDB22</p>

card info, included in [CTS_DATA_TAG_CARD](#ga1622a00c90e677978ff06581f4630743).

## CTS_DATA_TAG_CARD_RFU <a href="#ga263dd4e8800e48d2941b9c4c89c18618" id="ga263dd4e8800e48d2941b9c4c89c18618"></a>

<p>#define CTS_DATA_TAG_CARD_RFU   0xDFDB2F</p>

RFU of the card found by nfc, n-byte binary array, included in [CTS_DATA_TAG_CARD](#ga1622a00c90e677978ff06581f4630743).

## CTS_DATA_TAG_CARD_SAK <a href="#gafd4dad5d39906ccf5556501baea1e29d" id="gafd4dad5d39906ccf5556501baea1e29d"></a>

<p>#define CTS_DATA_TAG_CARD_SAK   0xDFDB2D</p>

SAK of the card found by nfc, 1 binary byte, included in [CTS_DATA_TAG_CARD](#ga1622a00c90e677978ff06581f4630743).

## CTS_DATA_TAG_CARD_TYPE <a href="#gaf6eee3de6886c30697951526013d3794" id="gaf6eee3de6886c30697951526013d3794"></a>

<p>#define CTS_DATA_TAG_CARD_TYPE   0xDFDB21</p>

card type, included in [CTS_DATA_TAG_CARD](#ga1622a00c90e677978ff06581f4630743).

## CTS_DATA_TAG_CARD_TYPE_FULL <a href="#gac639546d7913d5f57190cc84b9c72f79" id="gac639546d7913d5f57190cc84b9c72f79"></a>

<p>#define CTS_DATA_TAG_CARD_TYPE_FULL   0xDFDB27</p>

nfc-card-type-full, 4-byte binary array in big-endian format, included in [CTS_DATA_TAG_CARD](#ga1622a00c90e677978ff06581f4630743).

## CTS_DATA_TAG_CARDS_A <a href="#gacd7882d48b3f77222d363198404c2d08" id="gacd7882d48b3f77222d363198404c2d08"></a>

<p>#define CTS_DATA_TAG_CARDS_A   0xDFDB29</p>

total number of cards of type A found by nfc, 1 binary byte.

## CTS_DATA_TAG_CARDS_B <a href="#ga5910b3f3e2c30f33f80c38db6c06cdb0" id="ga5910b3f3e2c30f33f80c38db6c06cdb0"></a>

<p>#define CTS_DATA_TAG_CARDS_B   0xDFDB2A</p>

total number of cards of type B found by nfc, 1 binary byte.

## CTS_DATA_TAG_CARDS_F <a href="#gaa2a77ff11eacad346a5a279052a62f55" id="gaa2a77ff11eacad346a5a279052a62f55"></a>

<p>#define CTS_DATA_TAG_CARDS_F   0xDFDB2B</p>

total number of cards of type F found by nfc, 1 binary byte.

## CTS_DATA_TAG_CARDS_TOTAL_COUNT <a href="#gae0ecdfeeff410e46cbe26e14ec60b193" id="gae0ecdfeeff410e46cbe26e14ec60b193"></a>

<p>#define CTS_DATA_TAG_CARDS_TOTAL_COUNT   0xDFDB28</p>

total number of cards found by nfc, 1 byte binary.

## CTS_DATA_TAG_CUSTOM_POLL_RESULT <a href="#ga3d1c310415df92df05c6ef95f1f359e5" id="ga3d1c310415df92df05c6ef95f1f359e5"></a>

<p>#define CTS_DATA_TAG_CUSTOM_POLL_RESULT   0xDFDB2C</p>

custom-poll-result of either <a href="titusstubs_8cpp.md#aa1e541259f194621834060bf770b717b">NFC_PT_Polling()</a> or <a href="titusstubs_8cpp.md#ac692591d9c1287d0d4b6131a03b2e977">NFC_PT_PollingFull()</a>, n-byte binary array.

## CTS_DATA_TAG_EMV_RESULT <a href="#ga6de766623c7d58220a766c7bb6722c6f" id="ga6de766623c7d58220a766c7bb6722c6f"></a>

<p>#define CTS_DATA_TAG_EMV_RESULT   0xDFDB25</p>

return code of <a href="group___f_u_n_c___f_l_o_w.md#gaf23f6f87fe90619810470fad7d11f321">EMV_CTLS_ContinueOffline()</a> / <a href="group___f_u_n_c___i_c_c.md#gae2c93f30f24ceb94c930a7cae2b36116">EMV_CTLS_SmartReset()</a>.

## CTS_DATA_TAG_NFC_RESULT <a href="#gaf6119d8d13132973743201b7cbb7bb04" id="gaf6119d8d13132973743201b7cbb7bb04"></a>

<p>#define CTS_DATA_TAG_NFC_RESULT   0xDFDB20</p>

return code of either <a href="titusstubs_8cpp.md#aa1e541259f194621834060bf770b717b">NFC_PT_Polling()</a> or <a href="titusstubs_8cpp.md#ac692591d9c1287d0d4b6131a03b2e977">NFC_PT_PollingFull()</a>.

## CTS_DATA_TAG_VAS_DATA <a href="#ga98da116b51dd2dc960e37d72259b2bea" id="ga98da116b51dd2dc960e37d72259b2bea"></a>

<p>#define CTS_DATA_TAG_VAS_DATA   0xDFDB24</p>

output data of <a href="titusstubs_8cpp.md#a1f0e681b88497ef9e25abde4ed3b5b3b">NFC_VAS_Activate()</a>.

## CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT <a href="#ga1092b3be73e407a67aa85580b4c2400a" id="ga1092b3be73e407a67aa85580b4c2400a"></a>

<p>#define CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT   0xDFDB26</p>

return code of TEC (<a href="group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#ga11e77d01884f12702d0652efb875c9bd">CTS_VAS_DECRYPTION_NOT_REQUIRED</a>, <a href="group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#ga773aac25463871c28c91a217fca64caa">CTS_VAS_DATA_DECRYPTED_OK</a>, <a href="group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#gac051158cd3273d316aa38227c996503a">CTS_VAS_DATA_DECRYPTED_FAILED</a>, or <a href="group___t_e_c___r_e_t_u_r_n___c_o_d_e_s.md#gafb45d462dce92aeffd12f7867a2c3f6c">CTS_VAS_DATA_ENCRYPTED_OK</a>) based on the return responses of <a href="titusstubs_8cpp.md#a1f0e681b88497ef9e25abde4ed3b5b3b">NFC_VAS_Activate()</a> and NFC_VAS_Data_Decrypt().

## CTS_DATA_TAG_VAS_RESULT <a href="#ga90e89126d9d47b47ffc81f383a25f270" id="ga90e89126d9d47b47ffc81f383a25f270"></a>

<p>#define CTS_DATA_TAG_VAS_RESULT   0xDFDB23</p>

return code of <a href="titusstubs_8cpp.md#a1f0e681b88497ef9e25abde4ed3b5b3b">NFC_VAS_Activate()</a>.
