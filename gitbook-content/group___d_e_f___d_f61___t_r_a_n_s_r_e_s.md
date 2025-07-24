---
hidden: true
title: "ContinueOffline/ContinueOnline: Information which data was provided by the ICCTransaction execution » Output data"
---

[Macros](#define-members)

Contents of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab08da8ecbb047104d0c58e6f0ea141ee">EMV_CT_TRANSRES_TYPE::T_DF61_Info_Received_Data</a>. [More\...](#details)

Collaboration diagram for ContinueOffline/ContinueOnline: Information which data was provided by the ICC:

![](group___d_e_f___d_f61___t_r_a_n_s_r_e_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TRX_STATUSINFO](#ga85aa74edf5d00ef78256ba6a41b8648d)   0x01 |
|   | B1b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a89b6ee4a99c6f75514d803b0098aa2ed">EMV_CT_TRANSRES_STRUCT::StatusInfo</a>. [More\...](#ga85aa74edf5d00ef78256ba6a41b8648d)<br/> |
| #define  | [TRX_9F27_CRYPTINFO](#gaf0e3187b176002f7271c12e96a166feb)   0x02 |
|   | B1b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a2dbcdd3fc07a3872b2409d8f10cf2120">EMV_CT_TRANSRES_STRUCT::T_9F27_CryptInfo</a>. [More\...](#gaf0e3187b176002f7271c12e96a166feb)<br/> |
| #define  | [TRX_9F36_ATC](#gaa5ea66621354d37745371cc0d1ed55ce)   0x04 |
|   | B1b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aae70ced9d0c58160e46c79790ce36d1c">EMV_CT_TRANSRES_STRUCT::T_9F36_ATC</a>. [More\...](#gaa5ea66621354d37745371cc0d1ed55ce)<br/> |
| #define  | [TRX_9F26_CRYPTOGRAMM](#gae377e82ee401d7ad4526261b34da349d)   0x08 |
|   | B1b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a10c360689ac25ffda269b58686ccfda9">EMV_CT_TRANSRES_STRUCT::T_9F26_Cryptogramm</a>. [More\...](#gae377e82ee401d7ad4526261b34da349d)<br/> |
| #define  | [TRX_5A_PAN](#ga6bf80541362352747351cf3d15898470)   0x10 |
|   | B1b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af0bc634797380c801e22c4d7fbf5255f">EMV_CT_TRANSRES_STRUCT::T_5A_PAN</a>. [More\...](#ga6bf80541362352747351cf3d15898470)<br/> |
| #define  | [TRX_9F39_POS_ENTRY_MODE](#ga9417b309d854dc15bd41946305f78f65)   0x20 |
|   | B1b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a81dbb9b0eba94a7659f91f570a48a4d4">EMV_CT_TRANSRES_STRUCT::T_9F39_POSEntryMode</a>. [More\...](#ga9417b309d854dc15bd41946305f78f65)<br/> |
| #define  | [TRX_5F24_APPEXPDATE](#gac08886f32a00109539aa176ab5f2e9a9)   0x40 |
|   | B1b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9976182c24eef231d092afe3a7c8d348">EMV_CT_TRANSRES_STRUCT::T_5F24_AppExpDate</a>. [More\...](#gac08886f32a00109539aa176ab5f2e9a9)<br/> |
| #define  | [TRX_9F41_TRANSCOUNT](#ga3510ac98d11d29ddfa9e2f9f821ecf1e)   0x80 |
|   | B1b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aa2802e6fa5a5b2f01dd1abcda266a614">EMV_CT_TRANSRES_STRUCT::T_9F41_TransCount</a>. [More\...](#ga3510ac98d11d29ddfa9e2f9f821ecf1e)<br/> |
| #define  | [TRX_5F34_PAN_SEQ_NUMBER](#ga2572515be64a8a8d0c92c636d9c85874)   0x01 |
|   | B2b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#abc4cec20fd3b19b4eb973817adc30eb7">EMV_CT_TRANSRES_STRUCT::T_5F34_PANSequenceNo</a>. [More\...](#ga2572515be64a8a8d0c92c636d9c85874)<br/> |
| #define  | [TRX_57_DATA_TRACK2](#ga0db6d81302224d011f44d9e0ad9c0548)   0x02 |
|   | B2b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a202b3375b38874e88fc09b60d4ac0619">EMV_CT_TRANSRES_STRUCT::T_57_DataTrack2</a>. [More\...](#ga0db6d81302224d011f44d9e0ad9c0548)<br/> |
| #define  | [TRX_9F10_DATAISSUER](#gaa6f6f2af452fe77f30da545acc94075f)   0x04 |
|   | B2b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a5d5a74c79c116d6f888eede9a4fab7b4">EMV_CT_TRANSRES_STRUCT::T_9F10_DataIssuer</a>. [More\...](#gaa6f6f2af452fe77f30da545acc94075f)<br/> |
| #define  | [TRX_9F37_RANDOM_NUMBER](#gaf367dbe23ef3515c6315e6f013ec34b0)   0x08 |
|   | B2b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aeb4a47c49c6c551d25b2fca5be2da26d">EMV_CT_TRANSRES_STRUCT::T_9F37_RandomNumber</a>. [More\...](#gaf367dbe23ef3515c6315e6f013ec34b0)<br/> |
| #define  | [TRX_95_TVR](#ga11d82153d86a298ab139737e39df6984)   0x10 |
|   | B2b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab7c83532ed5caeb00101916a4d20c862">EMV_CT_TRANSRES_STRUCT::T_95_TVR</a>. [More\...](#ga11d82153d86a298ab139737e39df6984)<br/> |
| #define  | [TRX_9A_DATE](#ga7109db7ce9e5c2bd02c3e02fc8822d1c)   0x20 |
|   | B2b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a82dfa85492013ef19f23e3446d470a4a">EMV_CT_TRANSRES_STRUCT::T_9A_Date</a>. [More\...](#ga7109db7ce9e5c2bd02c3e02fc8822d1c)<br/> |
| #define  | [TRX_9F21_TIME](#ga588c6d5f32f3b529e7b699775ca30dd5)   0x40 |
|   | B2b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a174ff228cb3d664e05bbc093fcdd9a3a">EMV_CT_TRANSRES_STRUCT::T_9F21_Time</a>. [More\...](#ga588c6d5f32f3b529e7b699775ca30dd5)<br/> |
| #define  | [TRX_9C_TRANSTYPE](#gae3e8f14d26ff8441ad79c3b57a876176)   0x80 |
|   | B2b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a89e1907a3fb369ef96d8ae2de716acad">EMV_CT_TRANSRES_STRUCT::T_9C_TransType</a>. [More\...](#gae3e8f14d26ff8441ad79c3b57a876176)<br/> |
| #define  | [TRX_5F2A_TRX_CURRENCY](#gaa6da8718840b2b3ef88c8a384ff12309)   0x01 |
|   | B3b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4ff59afe014dcaa2f469e45abd2a2cb7">EMV_CT_TRANSRES_STRUCT::T_5F2A_CurrencyTrans</a>. [More\...](#gaa6da8718840b2b3ef88c8a384ff12309)<br/> |
| #define  | [TRX_82_AIP](#ga206a414c0b0c025cd7b7ccb7cce69a2b)   0x02 |
|   | B3b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4fc70aee9c7e870519b10c2471ae44f2">EMV_CT_TRANSRES_STRUCT::T_82_AIP</a>. [More\...](#ga206a414c0b0c025cd7b7ccb7cce69a2b)<br/> |
| #define  | [TRX_9F1A_TERM_COUNTRY_CODE](#gacef4ed33ea21168991060e59bebe77d5)   0x04 |
|   | B3b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9301d8a1bf495da0078826f0c1a981c8">EMV_CT_TRANSRES_STRUCT::T_9F1A_TermCountryCode</a>. [More\...](#gacef4ed33ea21168991060e59bebe77d5)<br/> |
| #define  | [TRX_9F34_CVM_RES](#ga7543da8df46ea8d4bb9e0a63db74f1a7)   0x08 |
|   | B3b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aff7dce3be9087c81bbf864aa71c7574d">EMV_CT_TRANSRES_STRUCT::T_9F34_CVM_Res</a>. [More\...](#ga7543da8df46ea8d4bb9e0a63db74f1a7)<br/> |
| #define  | [TRX_9F33_TERMCAP](#ga717562fa4431c1ee62a26f9184d50b44)   0x10 |
|   | B3b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9bafc60d1b92fc94619b5f80f664f001">EMV_CT_TRANSRES_STRUCT::T_9F33_TermCap</a>. [More\...](#ga717562fa4431c1ee62a26f9184d50b44)<br/> |
| #define  | [TRX_9F35_TERMTYP](#gac9af36222843f99ca5f20a6285ec8436)   0x20 |
|   | B3b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4ae8c1f40415ecbca8b6664a3bfadcc7">EMV_CT_TRANSRES_STRUCT::T_9F35_TermTyp</a>. [More\...](#gac9af36222843f99ca5f20a6285ec8436)<br/> |
| #define  | [TRX_9F1E_IFDSERIALNUMBER](#ga26fb0c6c62724c8de85493bc9d286c56)   0x40 |
|   | B3b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a291c422cae05265d91a2b025867c32b4">EMV_CT_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber</a>. [More\...](#ga26fb0c6c62724c8de85493bc9d286c56)<br/> |
| #define  | [TRX_84_DFNAME](#ga51cb9cc5128d991be65fcfec1ffa4114)   0x80 |
|   | B3b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a461cb8e7a2ca9d6005f976b490a4bf9f">EMV_CT_TRANSRES_STRUCT::T_84_DFName</a>. [More\...](#ga51cb9cc5128d991be65fcfec1ffa4114)<br/> |
| #define  | [TRX_9F09_VERNUM](#ga96ee22496be0dda0a2505d138392391d)   0x01 |
|   | B4b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a8956aa2ecd06d431a8dac0a799edc944">EMV_CT_TRANSRES_STRUCT::T_9F09_VerNum</a>. [More\...](#ga96ee22496be0dda0a2505d138392391d)<br/> |
| #define  | [TRX_SCRIPTRESULTS](#ga2d0578cbb375799e872a5c9e4506de26)   0x02 |
|   | B4b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a6257b8c91140f05c572607aff48a301e">EMV_CT_TRANSRES_STRUCT::scriptresults</a>. [More\...](#ga2d0578cbb375799e872a5c9e4506de26)<br/> |
| #define  | [TRX_9B_TSI](#gadc1cfbf14ae4ac69969409b775c86494)   0x04 |
|   | B4b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3a483bca9d788db046219dc80b8251e0">EMV_CT_TRANSRES_STRUCT::T_9B_TSI</a>. [More\...](#gadc1cfbf14ae4ac69969409b775c86494)<br/> |
| #define  | [TRX_9F06_AID](#ga06425678c6f00810b8c18da0eef47d6a)   0x08 |
|   | B4b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a01f5f1efd99e3e3be9139a95d5349941">EMV_CT_TRANSRES_STRUCT::T_9F06_AID</a>. [More\...](#ga06425678c6f00810b8c18da0eef47d6a)<br/> |
| #define  | [TRX_ADDITIONAL_TAGS](#gadb443691224a95b2750673813749ad2d)   0x10 |
|   | B4b5: EMV_CT_TRANSRES_STRUCT::Additional_Tags. [More\...](#gadb443691224a95b2750673813749ad2d)<br/> |
| #define  | [TRX_APPNAME](#gac80c6271abd613f58d3595def608d858)   0x20 |
|   | B4b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a1a933985680b099e926e54086a602c12">EMV_CT_TRANSRES_STRUCT::AppName</a>. [More\...](#gac80c6271abd613f58d3595def608d858)<br/> |
| #define  | [TRX_5F25_APPEFFDATE](#ga3740b4602d44fc12c4bf2d0ee846836e)   0x40 |
|   | B4b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3a483d3884951300b21443c7a72003ce">EMV_CT_TRANSRES_STRUCT::T_5F25_AppEffDate</a>. [More\...](#ga3740b4602d44fc12c4bf2d0ee846836e)<br/> |
| #define  | [TRX_5F28_ISSCOUNTRYCODE](#ga07f24fb59c10586b363c532507c4e0fa)   0x80 |
|   | B4b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af6458a2407613872574dccbfb6bef9b9">EMV_CT_TRANSRES_STRUCT::T_5F28_IssCountryCode</a>. [More\...](#ga07f24fb59c10586b363c532507c4e0fa)<br/> |
| #define  | [TRX_9F45_DATAAUTHCODE](#ga73e339aea4484d38bcbb068687fe280d)   0x01 |
|   | B5b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a47e963c2b1eeea3a0c3cfa5b96e9a0b9">EMV_CT_TRANSRES_STRUCT::T_9F45_DataAuthCode</a>. [More\...](#ga73e339aea4484d38bcbb068687fe280d)<br/> |
| #define  | [TRX_9F4C_ICCDYNNUMBER](#ga7f314f4f4f16d8824ff18bf819204a2d)   0x02 |
|   | B5b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4b37f4c0025ccefe02bc0df045e6c95e">EMV_CT_TRANSRES_STRUCT::T_9F4C_ICCDynNumber</a>. [More\...](#ga7f314f4f4f16d8824ff18bf819204a2d)<br/> |
| #define  | [TRX_TAC_DENIAL](#ga52652f439aed9dec78149eb5d0bd3506)   0x04 |
|   | B5b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab4a00313a90f392f78eb7517a136aae6">EMV_CT_TRANSRES_STRUCT::TACDenial</a>. [More\...](#ga52652f439aed9dec78149eb5d0bd3506)<br/> |
| #define  | [TRX_TAC_ONLINE](#gabcb002a600b7c79dc278b8727b6317d4)   0x08 |
|   | B5b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a71a391d7f8da7dc0e5be8b97c14447da">EMV_CT_TRANSRES_STRUCT::TACOnline</a>. [More\...](#gabcb002a600b7c79dc278b8727b6317d4)<br/> |
| #define  | [TRX_TAC_DEFAULT](#ga7d221bfee796bcf6dcd59daec1cc7b5d)   0x10 |
|   | B5b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a6ce1deed9d23bcc207bfb582f59cac6b">EMV_CT_TRANSRES_STRUCT::TACDefault</a>. [More\...](#ga7d221bfee796bcf6dcd59daec1cc7b5d)<br/> |
| #define  | [TRX_9F0E_IAC_DENIAL](#gaad6f4d87fa5690cb2b98dd259808b281)   0x20 |
|   | B5b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a21b49faa952c458dcf2743473486817c">EMV_CT_TRANSRES_STRUCT::T_9F0E_IACDenial</a>. [More\...](#gaad6f4d87fa5690cb2b98dd259808b281)<br/> |
| #define  | [TRX_9F0F_IAC_ONLINE](#ga247d34dff4ae4bdb4cc3d981bfca7abf)   0x40 |
|   | B5b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a685a012758034411221da9ae0b667277">EMV_CT_TRANSRES_STRUCT::T_9F0F_IACOnline</a>. [More\...](#ga247d34dff4ae4bdb4cc3d981bfca7abf)<br/> |
| #define  | [TRX_9F0D_IAC_DEFAULT](#ga45fa27c4b9c64d0597572bc1945d2563)   0x80 |
|   | B5b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a78cc77069e865792d6bfa5d54b7fd3a7">EMV_CT_TRANSRES_STRUCT::T_9F0D_IACDefault</a>. [More\...](#ga45fa27c4b9c64d0597572bc1945d2563)<br/> |
| #define  | [TRX_9F40_TERMCAP](#ga37e4503339b5e6d72abbfeabeeade9f9)   0x02 |
|   | B6b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af48770f2326a1db0c70846dc10a621dd">EMV_CT_TRANSRES_STRUCT::T_9F40_AddTermCap</a>. [More\...](#ga37e4503339b5e6d72abbfeabeeade9f9)<br/> |
| #define  | [TRX_DF62_ERRORDATA_TRANS](#ga87442f4796a27405357fa814dbd678db)   0x04 |
|   | B6b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab039fd7178746c8616263dae202cde7b">EMV_CT_TRANSRES_STRUCT::T_DF62_ErrorData</a>. [More\...](#ga87442f4796a27405357fa814dbd678db)<br/> |
| #define  | [TRX_9F16_MERCHANT_ID](#ga53cf57b0f0e8f8f68ab2eb3172340d25)   0x08 |
|   | B6b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0dc88736d1944c738ad64ea76bf55a82">EMV_CT_TRANSRES_STRUCT::T_9F16_MerchIdent</a>. [More\...](#ga53cf57b0f0e8f8f68ab2eb3172340d25)<br/> |
| #define  | [TRX_5F20_CARDHOLDER](#gade31ad62eb3c198c3e92e61789998987)   0x10 |
|   | B6b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a219a6df022068d85d7f4acfa5d705585">EMV_CT_TRANSRES_STRUCT::T_5F20_Cardholder</a>. [More\...](#gade31ad62eb3c198c3e92e61789998987)<br/> |
| #define  | [TRX_5F2D_LANG_PREFERENCE](#gae82877d3d32ef895433aacf68f5a1102)   0x20 |
|   | B6b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab78d27dc34487f922049e2708780f0b5">EMV_CT_TRANSRES_STRUCT::T_5F2D_Lang_Pref</a>. [More\...](#gae82877d3d32ef895433aacf68f5a1102)<br/> |
| #define  | [TRX_9F08_ICC_APPLI_VERS_NO](#gab2086366e1e9a41859d5b5136e2c8acb)   0x40 |
|   | B6b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae24c7f2703201392ba5eaa2e0d2febd7">EMV_CT_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No</a>. [More\...](#gab2086366e1e9a41859d5b5136e2c8acb)<br/> |
| #define  | [TRX_5F36_TRX_CURRENCY_EXPO](#ga825aa4e407c94d7a093d875ad2442ce7)   0x80 |
|   | B6b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af3c15997b72a0912020557a700633e18">EMV_CT_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp</a>. [More\...](#ga825aa4e407c94d7a093d875ad2442ce7)<br/> |
| #define  | [TRX_5F30_SERVICE_CODE](#ga6f17f844620bb8b8f96bb4749d941d13)   0x01 |
|   | B7b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aba95bf6078aac2295b51ba4f1b7aaff9">EMV_CT_TRANSRES_STRUCT::T_5F30_ServiceCode</a>. [More\...](#ga6f17f844620bb8b8f96bb4749d941d13)<br/> |
| #define  | [EMV_CT_TRX_DF17_FALLBACK_MID](#gacd56e74df31c017a4d26fc9c60daacf9)   0x02 |
|   | B7b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#afabfa1c4e4ce44bfb0050a604bdaf3e5">EMV_CT_TRANSRES_STRUCT::T_DF17_FallbackMID</a>. [More\...](#gacd56e74df31c017a4d26fc9c60daacf9)<br/> |
| #define  | [EMV_CT_TRX_8E_CVM_List](#gab62aa967584441d8fd99f4dfe896c682)   0x04 |
|   | B7b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a43475fc383c8af04a791babac2e7d139">EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List</a>. [More\...](#gab62aa967584441d8fd99f4dfe896c682)<br/> |
| #define  | [TRX_DF63_DISPLAY_ID](#ga066ba655f3d6bf064e487499366facc7)   0x08 |
|   | B7b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3f81899cf94ac8087ae118d0a74bd5a7">EMV_CT_TRANSRES_STRUCT::T_DF63_DisplayText</a>. [More\...](#ga066ba655f3d6bf064e487499366facc7)<br/> |
| #define  | [TRX_DF64_KERNEL_DEBUG](#ga27d556633b00a01f9827213c7d5e7deb)   0x10 |
|   | B7b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a5d30443bc2f23ca5b8e38843f5c9c9e3">EMV_CT_TRANSRES_STRUCT::T_DF64_KernelDebugData</a>. [More\...](#ga27d556633b00a01f9827213c7d5e7deb)<br/> |
| #define  | [TRX_9F02_AMOUNT](#gae97a6a24976c8eabcb36c9b3b2b53b9d)   0x20 |
|   | B7b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#afed4175ef9f37cfe22f013b6587ed799">EMV_CT_TRANSRES_STRUCT::T_9F02_TXNAmount</a>. [More\...](#gae97a6a24976c8eabcb36c9b3b2b53b9d)<br/> |
| #define  | [TRX_9F03_CB_AMOUNT](#gace3da9eaa3d44ac4ba89572043707178)   0x40 |
|   | B7b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a57e16e1b7d78d281fe8390adece90e2f">EMV_CT_TRANSRES_STRUCT::T_9F03_TXNAdditionalAmount</a>. [More\...](#gace3da9eaa3d44ac4ba89572043707178)<br/> |
| #define  | [TRX_9F53_MC_CATCODE](#ga55a6c5cd85e566c93571869b39e70543)   0x80 |
|   | B7b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aeaa27f93433bbe147f581a6165f6f63c">EMV_CT_TRANSRES_STRUCT::T_9F53_MC_CatCode</a>. [More\...](#ga55a6c5cd85e566c93571869b39e70543)<br/> |
| #define  | [TRX_DF59_OFFLINE_PIN_ERRORS](#gab3b6923cae97fedb89048a8b1a40b050)   0x01 |
|   | B8b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a984e4c593ad907f1c110657f73dd6437">EMV_CT_TRANSRES_STRUCT::T_DF59_Offl_PIN_errors</a>. [More\...](#gab3b6923cae97fedb89048a8b1a40b050)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab08da8ecbb047104d0c58e6f0ea141ee">EMV_CT_TRANSRES_TYPE::T_DF61_Info_Received_Data</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_TRX_8E_CVM_List <a href="#gab62aa967584441d8fd99f4dfe896c682" id="gab62aa967584441d8fd99f4dfe896c682"></a>

<p>#define EMV_CT_TRX_8E_CVM_List   0x04</p>

B7b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a43475fc383c8af04a791babac2e7d139">EMV_CT_TRANSRES_STRUCT::T_8E_CVM_List</a>.

## EMV_CT_TRX_DF17_FALLBACK_MID <a href="#gacd56e74df31c017a4d26fc9c60daacf9" id="gacd56e74df31c017a4d26fc9c60daacf9"></a>

<p>#define EMV_CT_TRX_DF17_FALLBACK_MID   0x02</p>

B7b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#afabfa1c4e4ce44bfb0050a604bdaf3e5">EMV_CT_TRANSRES_STRUCT::T_DF17_FallbackMID</a>.

## TRX_57_DATA_TRACK2 <a href="#ga0db6d81302224d011f44d9e0ad9c0548" id="ga0db6d81302224d011f44d9e0ad9c0548"></a>

<p>#define TRX_57_DATA_TRACK2   0x02</p>

B2b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a202b3375b38874e88fc09b60d4ac0619">EMV_CT_TRANSRES_STRUCT::T_57_DataTrack2</a>.

## TRX_5A_PAN <a href="#ga6bf80541362352747351cf3d15898470" id="ga6bf80541362352747351cf3d15898470"></a>

<p>#define TRX_5A_PAN   0x10</p>

B1b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af0bc634797380c801e22c4d7fbf5255f">EMV_CT_TRANSRES_STRUCT::T_5A_PAN</a>.

## TRX_5F20_CARDHOLDER <a href="#gade31ad62eb3c198c3e92e61789998987" id="gade31ad62eb3c198c3e92e61789998987"></a>

<p>#define TRX_5F20_CARDHOLDER   0x10</p>

B6b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a219a6df022068d85d7f4acfa5d705585">EMV_CT_TRANSRES_STRUCT::T_5F20_Cardholder</a>.

## TRX_5F24_APPEXPDATE <a href="#gac08886f32a00109539aa176ab5f2e9a9" id="gac08886f32a00109539aa176ab5f2e9a9"></a>

<p>#define TRX_5F24_APPEXPDATE   0x40</p>

B1b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9976182c24eef231d092afe3a7c8d348">EMV_CT_TRANSRES_STRUCT::T_5F24_AppExpDate</a>.

## TRX_5F25_APPEFFDATE <a href="#ga3740b4602d44fc12c4bf2d0ee846836e" id="ga3740b4602d44fc12c4bf2d0ee846836e"></a>

<p>#define TRX_5F25_APPEFFDATE   0x40</p>

B4b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3a483d3884951300b21443c7a72003ce">EMV_CT_TRANSRES_STRUCT::T_5F25_AppEffDate</a>.

## TRX_5F28_ISSCOUNTRYCODE <a href="#ga07f24fb59c10586b363c532507c4e0fa" id="ga07f24fb59c10586b363c532507c4e0fa"></a>

<p>#define TRX_5F28_ISSCOUNTRYCODE   0x80</p>

B4b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af6458a2407613872574dccbfb6bef9b9">EMV_CT_TRANSRES_STRUCT::T_5F28_IssCountryCode</a>.

## TRX_5F2A_TRX_CURRENCY <a href="#gaa6da8718840b2b3ef88c8a384ff12309" id="gaa6da8718840b2b3ef88c8a384ff12309"></a>

<p>#define TRX_5F2A_TRX_CURRENCY   0x01</p>

B3b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4ff59afe014dcaa2f469e45abd2a2cb7">EMV_CT_TRANSRES_STRUCT::T_5F2A_CurrencyTrans</a>.

## TRX_5F2D_LANG_PREFERENCE <a href="#gae82877d3d32ef895433aacf68f5a1102" id="gae82877d3d32ef895433aacf68f5a1102"></a>

<p>#define TRX_5F2D_LANG_PREFERENCE   0x20</p>

B6b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab78d27dc34487f922049e2708780f0b5">EMV_CT_TRANSRES_STRUCT::T_5F2D_Lang_Pref</a>.

## TRX_5F30_SERVICE_CODE <a href="#ga6f17f844620bb8b8f96bb4749d941d13" id="ga6f17f844620bb8b8f96bb4749d941d13"></a>

<p>#define TRX_5F30_SERVICE_CODE   0x01</p>

B7b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aba95bf6078aac2295b51ba4f1b7aaff9">EMV_CT_TRANSRES_STRUCT::T_5F30_ServiceCode</a>.

## TRX_5F34_PAN_SEQ_NUMBER <a href="#ga2572515be64a8a8d0c92c636d9c85874" id="ga2572515be64a8a8d0c92c636d9c85874"></a>

<p>#define TRX_5F34_PAN_SEQ_NUMBER   0x01</p>

B2b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#abc4cec20fd3b19b4eb973817adc30eb7">EMV_CT_TRANSRES_STRUCT::T_5F34_PANSequenceNo</a>.

## TRX_5F36_TRX_CURRENCY_EXPO <a href="#ga825aa4e407c94d7a093d875ad2442ce7" id="ga825aa4e407c94d7a093d875ad2442ce7"></a>

<p>#define TRX_5F36_TRX_CURRENCY_EXPO   0x80</p>

B6b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af3c15997b72a0912020557a700633e18">EMV_CT_TRANSRES_STRUCT::T_5F36_Trx_Currency_Exp</a>.

## TRX_82_AIP <a href="#ga206a414c0b0c025cd7b7ccb7cce69a2b" id="ga206a414c0b0c025cd7b7ccb7cce69a2b"></a>

<p>#define TRX_82_AIP   0x02</p>

B3b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4fc70aee9c7e870519b10c2471ae44f2">EMV_CT_TRANSRES_STRUCT::T_82_AIP</a>.

## TRX_84_DFNAME <a href="#ga51cb9cc5128d991be65fcfec1ffa4114" id="ga51cb9cc5128d991be65fcfec1ffa4114"></a>

<p>#define TRX_84_DFNAME   0x80</p>

B3b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a461cb8e7a2ca9d6005f976b490a4bf9f">EMV_CT_TRANSRES_STRUCT::T_84_DFName</a>.

## TRX_95_TVR <a href="#ga11d82153d86a298ab139737e39df6984" id="ga11d82153d86a298ab139737e39df6984"></a>

<p>#define TRX_95_TVR   0x10</p>

B2b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab7c83532ed5caeb00101916a4d20c862">EMV_CT_TRANSRES_STRUCT::T_95_TVR</a>.

## TRX_9A_DATE <a href="#ga7109db7ce9e5c2bd02c3e02fc8822d1c" id="ga7109db7ce9e5c2bd02c3e02fc8822d1c"></a>

<p>#define TRX_9A_DATE   0x20</p>

B2b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a82dfa85492013ef19f23e3446d470a4a">EMV_CT_TRANSRES_STRUCT::T_9A_Date</a>.

## TRX_9B_TSI <a href="#gadc1cfbf14ae4ac69969409b775c86494" id="gadc1cfbf14ae4ac69969409b775c86494"></a>

<p>#define TRX_9B_TSI   0x04</p>

B4b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3a483bca9d788db046219dc80b8251e0">EMV_CT_TRANSRES_STRUCT::T_9B_TSI</a>.

## TRX_9C_TRANSTYPE <a href="#gae3e8f14d26ff8441ad79c3b57a876176" id="gae3e8f14d26ff8441ad79c3b57a876176"></a>

<p>#define TRX_9C_TRANSTYPE   0x80</p>

B2b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a89e1907a3fb369ef96d8ae2de716acad">EMV_CT_TRANSRES_STRUCT::T_9C_TransType</a>.

## TRX_9F02_AMOUNT <a href="#gae97a6a24976c8eabcb36c9b3b2b53b9d" id="gae97a6a24976c8eabcb36c9b3b2b53b9d"></a>

<p>#define TRX_9F02_AMOUNT   0x20</p>

B7b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#afed4175ef9f37cfe22f013b6587ed799">EMV_CT_TRANSRES_STRUCT::T_9F02_TXNAmount</a>.

## TRX_9F03_CB_AMOUNT <a href="#gace3da9eaa3d44ac4ba89572043707178" id="gace3da9eaa3d44ac4ba89572043707178"></a>

<p>#define TRX_9F03_CB_AMOUNT   0x40</p>

B7b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a57e16e1b7d78d281fe8390adece90e2f">EMV_CT_TRANSRES_STRUCT::T_9F03_TXNAdditionalAmount</a>.

## TRX_9F06_AID <a href="#ga06425678c6f00810b8c18da0eef47d6a" id="ga06425678c6f00810b8c18da0eef47d6a"></a>

<p>#define TRX_9F06_AID   0x08</p>

B4b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a01f5f1efd99e3e3be9139a95d5349941">EMV_CT_TRANSRES_STRUCT::T_9F06_AID</a>.

## TRX_9F08_ICC_APPLI_VERS_NO <a href="#gab2086366e1e9a41859d5b5136e2c8acb" id="gab2086366e1e9a41859d5b5136e2c8acb"></a>

<p>#define TRX_9F08_ICC_APPLI_VERS_NO   0x40</p>

B6b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae24c7f2703201392ba5eaa2e0d2febd7">EMV_CT_TRANSRES_STRUCT::T_9F08_ICC_Appli_Vers_No</a>.

## TRX_9F09_VERNUM <a href="#ga96ee22496be0dda0a2505d138392391d" id="ga96ee22496be0dda0a2505d138392391d"></a>

<p>#define TRX_9F09_VERNUM   0x01</p>

B4b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a8956aa2ecd06d431a8dac0a799edc944">EMV_CT_TRANSRES_STRUCT::T_9F09_VerNum</a>.

## TRX_9F0D_IAC_DEFAULT <a href="#ga45fa27c4b9c64d0597572bc1945d2563" id="ga45fa27c4b9c64d0597572bc1945d2563"></a>

<p>#define TRX_9F0D_IAC_DEFAULT   0x80</p>

B5b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a78cc77069e865792d6bfa5d54b7fd3a7">EMV_CT_TRANSRES_STRUCT::T_9F0D_IACDefault</a>.

## TRX_9F0E_IAC_DENIAL <a href="#gaad6f4d87fa5690cb2b98dd259808b281" id="gaad6f4d87fa5690cb2b98dd259808b281"></a>

<p>#define TRX_9F0E_IAC_DENIAL   0x20</p>

B5b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a21b49faa952c458dcf2743473486817c">EMV_CT_TRANSRES_STRUCT::T_9F0E_IACDenial</a>.

## TRX_9F0F_IAC_ONLINE <a href="#ga247d34dff4ae4bdb4cc3d981bfca7abf" id="ga247d34dff4ae4bdb4cc3d981bfca7abf"></a>

<p>#define TRX_9F0F_IAC_ONLINE   0x40</p>

B5b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a685a012758034411221da9ae0b667277">EMV_CT_TRANSRES_STRUCT::T_9F0F_IACOnline</a>.

## TRX_9F10_DATAISSUER <a href="#gaa6f6f2af452fe77f30da545acc94075f" id="gaa6f6f2af452fe77f30da545acc94075f"></a>

<p>#define TRX_9F10_DATAISSUER   0x04</p>

B2b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a5d5a74c79c116d6f888eede9a4fab7b4">EMV_CT_TRANSRES_STRUCT::T_9F10_DataIssuer</a>.

## TRX_9F16_MERCHANT_ID <a href="#ga53cf57b0f0e8f8f68ab2eb3172340d25" id="ga53cf57b0f0e8f8f68ab2eb3172340d25"></a>

<p>#define TRX_9F16_MERCHANT_ID   0x08</p>

B6b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0dc88736d1944c738ad64ea76bf55a82">EMV_CT_TRANSRES_STRUCT::T_9F16_MerchIdent</a>.

## TRX_9F1A_TERM_COUNTRY_CODE <a href="#gacef4ed33ea21168991060e59bebe77d5" id="gacef4ed33ea21168991060e59bebe77d5"></a>

<p>#define TRX_9F1A_TERM_COUNTRY_CODE   0x04</p>

B3b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9301d8a1bf495da0078826f0c1a981c8">EMV_CT_TRANSRES_STRUCT::T_9F1A_TermCountryCode</a>.

## TRX_9F1E_IFDSERIALNUMBER <a href="#ga26fb0c6c62724c8de85493bc9d286c56" id="ga26fb0c6c62724c8de85493bc9d286c56"></a>

<p>#define TRX_9F1E_IFDSERIALNUMBER   0x40</p>

B3b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a291c422cae05265d91a2b025867c32b4">EMV_CT_TRANSRES_STRUCT::T_9F1E_IFDSerialNumber</a>.

## TRX_9F21_TIME <a href="#ga588c6d5f32f3b529e7b699775ca30dd5" id="ga588c6d5f32f3b529e7b699775ca30dd5"></a>

<p>#define TRX_9F21_TIME   0x40</p>

B2b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a174ff228cb3d664e05bbc093fcdd9a3a">EMV_CT_TRANSRES_STRUCT::T_9F21_Time</a>.

## TRX_9F26_CRYPTOGRAMM <a href="#gae377e82ee401d7ad4526261b34da349d" id="gae377e82ee401d7ad4526261b34da349d"></a>

<p>#define TRX_9F26_CRYPTOGRAMM   0x08</p>

B1b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a10c360689ac25ffda269b58686ccfda9">EMV_CT_TRANSRES_STRUCT::T_9F26_Cryptogramm</a>.

## TRX_9F27_CRYPTINFO <a href="#gaf0e3187b176002f7271c12e96a166feb" id="gaf0e3187b176002f7271c12e96a166feb"></a>

<p>#define TRX_9F27_CRYPTINFO   0x02</p>

B1b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a2dbcdd3fc07a3872b2409d8f10cf2120">EMV_CT_TRANSRES_STRUCT::T_9F27_CryptInfo</a>.

## TRX_9F33_TERMCAP <a href="#ga717562fa4431c1ee62a26f9184d50b44" id="ga717562fa4431c1ee62a26f9184d50b44"></a>

<p>#define TRX_9F33_TERMCAP   0x10</p>

B3b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9bafc60d1b92fc94619b5f80f664f001">EMV_CT_TRANSRES_STRUCT::T_9F33_TermCap</a>.

## TRX_9F34_CVM_RES <a href="#ga7543da8df46ea8d4bb9e0a63db74f1a7" id="ga7543da8df46ea8d4bb9e0a63db74f1a7"></a>

<p>#define TRX_9F34_CVM_RES   0x08</p>

B3b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aff7dce3be9087c81bbf864aa71c7574d">EMV_CT_TRANSRES_STRUCT::T_9F34_CVM_Res</a>.

## TRX_9F35_TERMTYP <a href="#gac9af36222843f99ca5f20a6285ec8436" id="gac9af36222843f99ca5f20a6285ec8436"></a>

<p>#define TRX_9F35_TERMTYP   0x20</p>

B3b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4ae8c1f40415ecbca8b6664a3bfadcc7">EMV_CT_TRANSRES_STRUCT::T_9F35_TermTyp</a>.

## TRX_9F36_ATC <a href="#gaa5ea66621354d37745371cc0d1ed55ce" id="gaa5ea66621354d37745371cc0d1ed55ce"></a>

<p>#define TRX_9F36_ATC   0x04</p>

B1b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aae70ced9d0c58160e46c79790ce36d1c">EMV_CT_TRANSRES_STRUCT::T_9F36_ATC</a>.

## TRX_9F37_RANDOM_NUMBER <a href="#gaf367dbe23ef3515c6315e6f013ec34b0" id="gaf367dbe23ef3515c6315e6f013ec34b0"></a>

<p>#define TRX_9F37_RANDOM_NUMBER   0x08</p>

B2b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aeb4a47c49c6c551d25b2fca5be2da26d">EMV_CT_TRANSRES_STRUCT::T_9F37_RandomNumber</a>.

## TRX_9F39_POS_ENTRY_MODE <a href="#ga9417b309d854dc15bd41946305f78f65" id="ga9417b309d854dc15bd41946305f78f65"></a>

<p>#define TRX_9F39_POS_ENTRY_MODE   0x20</p>

B1b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a81dbb9b0eba94a7659f91f570a48a4d4">EMV_CT_TRANSRES_STRUCT::T_9F39_POSEntryMode</a>.

## TRX_9F40_TERMCAP <a href="#ga37e4503339b5e6d72abbfeabeeade9f9" id="ga37e4503339b5e6d72abbfeabeeade9f9"></a>

<p>#define TRX_9F40_TERMCAP   0x02</p>

B6b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af48770f2326a1db0c70846dc10a621dd">EMV_CT_TRANSRES_STRUCT::T_9F40_AddTermCap</a>.

## TRX_9F41_TRANSCOUNT <a href="#ga3510ac98d11d29ddfa9e2f9f821ecf1e" id="ga3510ac98d11d29ddfa9e2f9f821ecf1e"></a>

<p>#define TRX_9F41_TRANSCOUNT   0x80</p>

B1b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aa2802e6fa5a5b2f01dd1abcda266a614">EMV_CT_TRANSRES_STRUCT::T_9F41_TransCount</a>.

## TRX_9F45_DATAAUTHCODE <a href="#ga73e339aea4484d38bcbb068687fe280d" id="ga73e339aea4484d38bcbb068687fe280d"></a>

<p>#define TRX_9F45_DATAAUTHCODE   0x01</p>

B5b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a47e963c2b1eeea3a0c3cfa5b96e9a0b9">EMV_CT_TRANSRES_STRUCT::T_9F45_DataAuthCode</a>.

## TRX_9F4C_ICCDYNNUMBER <a href="#ga7f314f4f4f16d8824ff18bf819204a2d" id="ga7f314f4f4f16d8824ff18bf819204a2d"></a>

<p>#define TRX_9F4C_ICCDYNNUMBER   0x02</p>

B5b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4b37f4c0025ccefe02bc0df045e6c95e">EMV_CT_TRANSRES_STRUCT::T_9F4C_ICCDynNumber</a>.

## TRX_9F53_MC_CATCODE <a href="#ga55a6c5cd85e566c93571869b39e70543" id="ga55a6c5cd85e566c93571869b39e70543"></a>

<p>#define TRX_9F53_MC_CATCODE   0x80</p>

B7b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aeaa27f93433bbe147f581a6165f6f63c">EMV_CT_TRANSRES_STRUCT::T_9F53_MC_CatCode</a>.

## TRX_ADDITIONAL_TAGS <a href="#gadb443691224a95b2750673813749ad2d" id="gadb443691224a95b2750673813749ad2d"></a>

<p>#define TRX_ADDITIONAL_TAGS   0x10</p>

B4b5: EMV_CT_TRANSRES_STRUCT::Additional_Tags.

## TRX_APPNAME <a href="#gac80c6271abd613f58d3595def608d858" id="gac80c6271abd613f58d3595def608d858"></a>

<p>#define TRX_APPNAME   0x20</p>

B4b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a1a933985680b099e926e54086a602c12">EMV_CT_TRANSRES_STRUCT::AppName</a>.

## TRX_DF59_OFFLINE_PIN_ERRORS <a href="#gab3b6923cae97fedb89048a8b1a40b050" id="gab3b6923cae97fedb89048a8b1a40b050"></a>

<p>#define TRX_DF59_OFFLINE_PIN_ERRORS   0x01</p>

B8b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a984e4c593ad907f1c110657f73dd6437">EMV_CT_TRANSRES_STRUCT::T_DF59_Offl_PIN_errors</a>.

## TRX_DF62_ERRORDATA_TRANS <a href="#ga87442f4796a27405357fa814dbd678db" id="ga87442f4796a27405357fa814dbd678db"></a>

<p>#define TRX_DF62_ERRORDATA_TRANS   0x04</p>

B6b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab039fd7178746c8616263dae202cde7b">EMV_CT_TRANSRES_STRUCT::T_DF62_ErrorData</a>.

## TRX_DF63_DISPLAY_ID <a href="#ga066ba655f3d6bf064e487499366facc7" id="ga066ba655f3d6bf064e487499366facc7"></a>

<p>#define TRX_DF63_DISPLAY_ID   0x08</p>

B7b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3f81899cf94ac8087ae118d0a74bd5a7">EMV_CT_TRANSRES_STRUCT::T_DF63_DisplayText</a>.

## TRX_DF64_KERNEL_DEBUG <a href="#ga27d556633b00a01f9827213c7d5e7deb" id="ga27d556633b00a01f9827213c7d5e7deb"></a>

<p>#define TRX_DF64_KERNEL_DEBUG   0x10</p>

B7b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a5d30443bc2f23ca5b8e38843f5c9c9e3">EMV_CT_TRANSRES_STRUCT::T_DF64_KernelDebugData</a>.

## TRX_SCRIPTRESULTS <a href="#ga2d0578cbb375799e872a5c9e4506de26" id="ga2d0578cbb375799e872a5c9e4506de26"></a>

<p>#define TRX_SCRIPTRESULTS   0x02</p>

B4b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a6257b8c91140f05c572607aff48a301e">EMV_CT_TRANSRES_STRUCT::scriptresults</a>.

## TRX_STATUSINFO <a href="#ga85aa74edf5d00ef78256ba6a41b8648d" id="ga85aa74edf5d00ef78256ba6a41b8648d"></a>

<p>#define TRX_STATUSINFO   0x01</p>

B1b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a89b6ee4a99c6f75514d803b0098aa2ed">EMV_CT_TRANSRES_STRUCT::StatusInfo</a>.

## TRX_TAC_DEFAULT <a href="#ga7d221bfee796bcf6dcd59daec1cc7b5d" id="ga7d221bfee796bcf6dcd59daec1cc7b5d"></a>

<p>#define TRX_TAC_DEFAULT   0x10</p>

B5b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a6ce1deed9d23bcc207bfb582f59cac6b">EMV_CT_TRANSRES_STRUCT::TACDefault</a>.

## TRX_TAC_DENIAL <a href="#ga52652f439aed9dec78149eb5d0bd3506" id="ga52652f439aed9dec78149eb5d0bd3506"></a>

<p>#define TRX_TAC_DENIAL   0x04</p>

B5b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab4a00313a90f392f78eb7517a136aae6">EMV_CT_TRANSRES_STRUCT::TACDenial</a>.

## TRX_TAC_ONLINE <a href="#gabcb002a600b7c79dc278b8727b6317d4" id="gabcb002a600b7c79dc278b8727b6317d4"></a>

<p>#define TRX_TAC_ONLINE   0x08</p>

B5b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a71a391d7f8da7dc0e5be8b97c14447da">EMV_CT_TRANSRES_STRUCT::TACOnline</a>.
