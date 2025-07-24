---
hidden: true
title: libsdi Namespace Reference
---

[Data Structures](#nested-classes) \| [Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| class   | <a href="classlibsdi_1_1_card_detection.md">CardDetection</a> |
|   | Interface for SDI Card Detection Interface, command class 23. <a href="classlibsdi_1_1_card_detection.md#details">More...</a><br/> |
| class   | <a href="classlibsdi_1_1_dialog.md">Dialog</a> |
| class   | <a href="classlibsdi_1_1_manual_entry.md">ManualEntry</a> |
|   | Interface for SDI command <a href="pg_sdi_users_guide.md#subsubsec_sdi_msr_card_data_entry">MSR Card Data Entry</a> (21-02) <a href="classlibsdi_1_1_manual_entry.md#details">More...</a><br/> |
| struct   | <a href="structlibsdi_1_1_matching_record.md">MatchingRecord</a> |
| class   | <a href="classlibsdi_1_1_p_e_d.md">PED</a> |
| class   | <a href="classlibsdi_1_1_s_d_i.md">SDI</a> |
| class   | <a href="classlibsdi_1_1_sdi_base.md">SdiBase</a> |
| class   | <a href="classlibsdi_1_1_sdi_cmd.md">SdiCmd</a> |
|   | Composition for TLV based SDI commands. <a href="classlibsdi_1_1_sdi_cmd.md#details">More...</a><br/> |
| class   | <a href="classlibsdi_1_1_sdi_crypt.md">SdiCrypt</a> |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [SDI_SW12](#a0af9b7a9de719071122f396865ecebc9) {<br/>  [SDI_SW12_NONE](#a0af9b7a9de719071122f396865ecebc9a6618acb8d68a00a36aa6aee2b0233e06) = 0, [SDI_SW12_SUCCESS](#a0af9b7a9de719071122f396865ecebc9ae57ec322bacc511a361f808f98f564f3) = 0x9000, [SDI_SW12_TAG_ERROR](#a0af9b7a9de719071122f396865ecebc9a1beeefc2a6d62a7d0d8057caa66d0ed2) = 0x6200, [SDI_SW12_TAG_LENGTH_ERROR](#a0af9b7a9de719071122f396865ecebc9a1d4321526bd3f9cdc8ca2e9dfbbff6e7) = 0x6300,<br/>  [SDI_SW12_EXEC_ERROR](#a0af9b7a9de719071122f396865ecebc9af2a5eae6fa460ebfe095ce27b2fd1b87) = 0x6400, [SDI_SW12_CANCELED_BY_USER](#a0af9b7a9de719071122f396865ecebc9ab03418a12598a6c3e8688c1fd9d79260) = 0x6405, [SDI_SW12_BUSY](#a0af9b7a9de719071122f396865ecebc9a971fb106a8637b298c5824359aa2061c) = 0x640A, [SDI_SW12_TIMEOUT_PIN_ENTRY](#a0af9b7a9de719071122f396865ecebc9a4577fb4a16020814123d3c1fa619d8fd) = 0x640C,<br/>  [SDI_SW12_TIMEOUT_NO_MSR_DATA](#a0af9b7a9de719071122f396865ecebc9ab8a2a0db5f2f52ee3dd1066a8c04192e) = 0x64F6, [SDI_SW12_TIMEOUT_CARD_REMOVAL](#a0af9b7a9de719071122f396865ecebc9ac806247c865c9bdbb21518f96f619dd0) = 0x64F7, [SDI_SW12_INTERCHAR_PIN_ENTRY](#a0af9b7a9de719071122f396865ecebc9a5598ca858d64cfb20049ed0d0f4fb910) = 0x64F8, [SDI_SW12_COMMAND_NOT_ALLOWED](#a0af9b7a9de719071122f396865ecebc9af1291ca386d0f4700445ca995b1863ba) = 0x64F9,<br/>  [SDI_SW12_MAIN_CONNECTION_USED](#a0af9b7a9de719071122f396865ecebc9a75c4fcd5dcf04c1e0f8f1c9e85e30cec) = 0x64FA, [SDI_SW12_INVALID_FILE_CONTENT](#a0af9b7a9de719071122f396865ecebc9a5a6fb112bf92f4f1239f11c3f714e029) = 0x64FB, [SDI_SW12_FILE_ACCESS_ERROR](#a0af9b7a9de719071122f396865ecebc9abd8c845fec4d2d093eaecff6218f3103) = 0x64FC, [SDI_SW12_LOGIC_ERROR](#a0af9b7a9de719071122f396865ecebc9a039afb9d4121e94f28511039018c2034) = 0x64FD,<br/>  [SDI_SW12_SDI_PARAMETER_ERROR](#a0af9b7a9de719071122f396865ecebc9a47864240cdffd5d09a3e02ec0d1e70e9) = 0x64FE, [SDI_SW12_LUHN_CHECK_FAILED](#a0af9b7a9de719071122f396865ecebc9a3abd526d6fd92ac70842b7e43b2313d6) = 0x64FF, [SDI_SW12_EXECUTION_ABORTED](#a0af9b7a9de719071122f396865ecebc9afdd1028b32db6ae5abaa47bb3e7560bc) = 0x6500, [SDI_SW12_EXECUTION_TIMEOUT](#a0af9b7a9de719071122f396865ecebc9a476c3b73e5ff6945ae5a33a27d13d882) = 0x6600,<br/>  [SDI_SW12_MESSAGE_LENGTH_ERROR](#a0af9b7a9de719071122f396865ecebc9a0a771976fb50c1b4986efcdd6f34439d) = 0x6700, [SDI_SW12_NO_SDI_PLUGIN_AVAILABLE](#a0af9b7a9de719071122f396865ecebc9ac86a5a2c8d2be7d739309bc4b1eb99bc) = 0x6800, [SDI_SW12_UNKNOWN_PLUGIN_ID](#a0af9b7a9de719071122f396865ecebc9a85faafe48c5a77b74e64371e00f92552) = 0x6801, [SDI_SW12_UNKNOWN_PLUGING_ID](#a0af9b7a9de719071122f396865ecebc9a154334af8973844fb6186fe237c59c0e) = 0x6801,<br/>  [SDI_SW12_INVALID_PLUGIN_RESPONSE](#a0af9b7a9de719071122f396865ecebc9a6e4e2bf915baeb54c9529294c44b298b) = 0x6802, [SDI_SW12_EPP_CONNECTION_ERROR](#a0af9b7a9de719071122f396865ecebc9a847a49db2ffbf8d1e68b502f582c3dc8) = 0x6900, [SDI_SW12_UNKNOWN_INS_BYTE](#a0af9b7a9de719071122f396865ecebc9a4732718054169c5df10d763f2407cfde) = 0x6D00, [SDI_SW12_UNKNOWN_CLA_BYTE](#a0af9b7a9de719071122f396865ecebc9adaafeb9592a43e1b1e1df473878c12e5) = 0x6E00,<br/>  [SDI_SW12_CMAC_ERROR](#a0af9b7a9de719071122f396865ecebc9a2054c4029c27967fc15fc72840efb3c6) = 0x6FB0, [SDI_SW12_CMAC_LENGTH_ERROR](#a0af9b7a9de719071122f396865ecebc9a33c0dc3478cfdc69bc7057961b7109c4) = 0x6FB1, [SDI_SW12_CMAC_MISSING_ERROR](#a0af9b7a9de719071122f396865ecebc9a01284258ad4e6bff0c61b8702cfb6b56) = 0x6FB2, [SDI_SW12_ENCRYPTION_ERROR](#a0af9b7a9de719071122f396865ecebc9ad51eaabf82a502ff3ed1cb6c295b8a93) = 0x6FB4,<br/>  [SDI_SW12_ENCRYPTION_LENGTH_ERROR](#a0af9b7a9de719071122f396865ecebc9a6e37ee309f409940589fd6c016f35046) = 0x6FB5, [SDI_SW12_ENCRYPTION_MISSING_ERROR](#a0af9b7a9de719071122f396865ecebc9a6a735e602db3e17a88ae4b0c841bd984) = 0x6FB6, [SDI_SW12_DECRYPTION_ERROR](#a0af9b7a9de719071122f396865ecebc9a55f5fd8eaaf801277b52d842cdf43c44) = 0x6FB8, [SDI_SW12_DECRYPTION_LENGTH_ERROR](#a0af9b7a9de719071122f396865ecebc9a47b9270d9134938f2a233c31bb40d526) = 0x6FB9,<br/>  [SDI_SW12_DECRYPTION_MISSING_ERROR](#a0af9b7a9de719071122f396865ecebc9abf2dd4e4ec4cd3b8f742d09d095ba4d0) = 0x6FBA, [SDI_SW12_EXCESSIVE_PIN_REQUESTS](#a0af9b7a9de719071122f396865ecebc9aed62853d0c7dd9ab3f8c5760ab64d522) = 0x6FC0, [SDI_SW12_LOW_BATTERY](#a0af9b7a9de719071122f396865ecebc9a8304873fe61c4d04535d3c1e64b45d1f) = 0x6FD0, [SDI_SW12_NO_DUKPT_KEYS_LOADED](#a0af9b7a9de719071122f396865ecebc9a4889dd18dd1ad0b7344a5d37430bbf78) = 0x6FE0,<br/>  [SDI_SW12_UNIT_TAMPERED](#a0af9b7a9de719071122f396865ecebc9ad9a685bc18c7c8de640ef247e3eee810) = 0x6FF0, [SDI_SW12_RECOVERY_MODE](#a0af9b7a9de719071122f396865ecebc9ae14e896883c5b5d090245170eb232691) = 0x6FF1, [SDI_SW12_PIN_BYPASSED](#a0af9b7a9de719071122f396865ecebc9adc7785d93b0e59939d5800eeb042a1cb) = 0x9070, [SDI_SW12_NO_MACTCH_FOR_CARD_VALIDATION](#a0af9b7a9de719071122f396865ecebc9aa2f57a6386608f977bd13aa7ce1bbc19) = 0x9071,<br/>  [SDI_SW12_SMART_CARD_REMOVED](#a0af9b7a9de719071122f396865ecebc9a7b74452f38eedd39b8a20504ec4f793f) = 0x9401, [SDI_SW12_SMART_CARD_ERROR_TRM](#a0af9b7a9de719071122f396865ecebc9a77445278995fc417f5b2ed7dda4d123f) = 0x9402, [SDI_SW12_SMART_CARD_ERROR](#a0af9b7a9de719071122f396865ecebc9a87db929ea762f69bdb6ae19d3e2d52b1) = 0x9403, [SDI_SW12_TWO_CARDS](#a0af9b7a9de719071122f396865ecebc9a586613b1225fbf678b38cee3cf3a7142) = 0x9404,<br/>  [SDI_SW12_SMART_CARD_ERR_INIT](#a0af9b7a9de719071122f396865ecebc9a092b667be70ac2f9b18163a2f79d120d) = 0x9405, [SDI_SW12_SMART_CARD_ERR_PARAM](#a0af9b7a9de719071122f396865ecebc9aa7dbab4cb10df7f71b21f8ef192b9911) = 0x9406, [SDI_SW12_EMV_TLV_ERROR](#a0af9b7a9de719071122f396865ecebc9aa5cb29a2e25abece508d529c26f9343b) = 0x94F3, [SDI_SW12_ERROR](#a0af9b7a9de719071122f396865ecebc9a1bed2506d1ed0457dd51b36e10b879d4) = 0x6400,<br/>  [SDI_SW12_TIMEOUT](#a0af9b7a9de719071122f396865ecebc9a9c607d5185c40929820c1c9292d9b51d) = 0x6600, [SDI_SW12_NOT_ALLOWED](#a0af9b7a9de719071122f396865ecebc9a322aa24cbcdd0da17e7d06c6e69197fe) = 0x64FD, [SDI_SW12_PARAMETER_ERROR](#a0af9b7a9de719071122f396865ecebc9a153d725d0d6961fca9c22c30d276b8ce) = 0x90E6<br/>} |
| enum   | [SDICLIENT_ERROR](#a88afe55c2211351a88265153f28797e4) {<br/>  [SDICLIENT_ERROR_NONE](#a88afe55c2211351a88265153f28797e4a9cadc1bff1d76bb047113cc578078e77) = 0, [SDICLIENT_ERROR_COMMUNICATION](#a88afe55c2211351a88265153f28797e4aab3b6e7486f51ef410adba644a849a3d) = -1, [SDICLIENT_ERROR_CONCURRENT_USE](#a88afe55c2211351a88265153f28797e4ab43c112b5f9c1dc09079c3f465da64cf) = -2, [SDICLIENT_ERROR_CONNECT](#a88afe55c2211351a88265153f28797e4ac57157366b2f1737fa91428a8eea9abc) = -3,<br/>  [SDICLIENT_ERROR_OVERFLOW](#a88afe55c2211351a88265153f28797e4ad420eeba936f0d2edd106d669eed837a) = -4, [SDICLIENT_ERROR_PARAM](#a88afe55c2211351a88265153f28797e4ad3cf0ecfe1512f2806d2515efdcbf194) = -5, [SDICLIENT_ERROR_OTHER](#a88afe55c2211351a88265153f28797e4ab129b3613fd2cf21c2d573d4499ec5db) = -6, [SDICLIENT_ERROR_NO_RECEIVE](#a88afe55c2211351a88265153f28797e4ae2341948a78a19f5a780d2f5b3acc750) = -7,<br/>  [SDICLIENT_ERROR_NOT_SUPPORTED](#a88afe55c2211351a88265153f28797e4aa664cf103d2d1be3392f0947649ff331) = -10, [SDICLIENT_ERROR_NOT_ALLOWED](#a88afe55c2211351a88265153f28797e4a6b95428c9c6cd460b20eae3c5c5516d5) = -11<br/>} |
| enum   | [SYSUploadType](#af55973ce01a27acae146f17b4a0366fa) {<br/>  [SYS_UPLOAD_SOFTWARE_UPDATE](#af55973ce01a27acae146f17b4a0366faa45f06815e16da88212b9ee5ed2f3ddc8), [SYS_UPLOAD_CONFIG_WHITELIST](#af55973ce01a27acae146f17b4a0366faaec0451d262a6044c91a3858f96195f91), [SYS_UPLOAD_CONFIG_SENSITIVE_TAGS](#af55973ce01a27acae146f17b4a0366faab044559af2f7e7efdb8840a21de1c7e3), [SYS_UPLOAD_CONFIG_CARD_RANGES](#af55973ce01a27acae146f17b4a0366faab3e669cc243295e940eba812f8346805),<br/>  [SYS_UPLOAD_INSTALL_CP_PACKAGE](#af55973ce01a27acae146f17b4a0366faab12973d84013b26e9f9f89a2f4c7e509) = 11, [SYS_UPLOAD_EMV_CONFIGURATION](#af55973ce01a27acae146f17b4a0366faa1d6e6991b8a3f8c12b9caa76c3c04057)<br/>} |

|  |  |
|----|----|
| Functions |  |
| enum [SDICLIENT_ERROR](#a88afe55c2211351a88265153f28797e4)  | [getNfcClientError](#a22b6870acf257e81edc02ef0942b98ed) () |
| enum [SDI_SW12](#a0af9b7a9de719071122f396865ecebc9)  | [getNfcSW12](#a3b0818635e2caaab3b2f98370fb37d16) () |
| CL_STATUS  | [NFC_Client_Init](#ac04174b3f4524e1f9942ebd550ec4743) (CONNECTION_TYPE type) |
| CL_STATUS  | [NFC_Client_Init_CheckVer](#acd919133d0159ee801b6a3b9afdd50ed) (CONNECTION_TYPE type, int maj, int <a href="http__get__curl_8c.md#a8195a86b6d75b9a3939505e8bb50021e">min</a>, int bld) |
| CL_STATUS  | [NFC_SerialOpen](#a016910912f29079a54e53843aa248424) (void) |
| CL_STATUS  | [NFC_SerialClose](#a0dac7cde7c42f27b7d0999f524f1213f) (void) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Ping](#af2720b510afe83dfbb88f8525998110e) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*output) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Get_Version](#ac67395030324faba382bf017a031cccd) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*output) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Config_Init](#adeae9cc7983e75ba2a418f4227eb8e33) (void) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Set_Callback_Function](#a2e0afcf19bc4945282d984edfcb26b5d) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id, <a href="titusstubs_8cpp.md#a09e0971bdc5fca16b920275a5f9aa508">NfcCallbackFunction</a> \*callbackFunction) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Callback_Test](#a49339ad1d7b339377f38add056b17d2b) (void) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_Open](#a725fcbe27b01fb76f0a311837df2b6a2) () |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_Close](#a1ed7f9f633b243555c21f6e743f93818) () |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_FieldOn](#aac507fa74c6e4dee274e8e319fae53b4) () |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_FieldOff](#a6d22f7f2995498c3deeff5ca14f035cd) () |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_Polling](#a7b8940cfad41a41aa030a403673ff08e) (<a href="titusstubs_8cpp.md#ab4fc5a0481fff4756bbb875051581e61">pollReq</a> \*inPollReq, <a href="titusstubs_8cpp.md#abc99c096c433e8ed2fc1a6ac42d2bbc6">pollRes</a> \*outPollRes) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_PollingFull](#a4a38cf0fdbc941135a826e5fb44eeb72) (<a href="titusstubs_8cpp.md#ab4fc5a0481fff4756bbb875051581e61">pollReq</a> \*inPollReq, <a href="titusstubs_8cpp.md#abffd13a24a89d1aedf98ae22d6e40eb4">pollResFull</a> \*outPollRes) |
| void  | [NFC_Free_Poll_Data](#afd6ca719b830ca453cc910dda46abdd6) (<a href="titusstubs_8cpp.md#abc99c096c433e8ed2fc1a6ac42d2bbc6">pollRes</a> \*outPollRes) |
| void  | [NFC_Free_Poll_Data_Full](#a55f7271ee3dd3c5f13e12aa2dd80f989) (<a href="titusstubs_8cpp.md#abffd13a24a89d1aedf98ae22d6e40eb4">pollResFull</a> \*outPollRes) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_Cancel_Polling](#a79e97742ed363fa19b107b3306f5628d) (void) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_Activation](#a81820d4b1d383f7dbec708a62be8682c) (<a href="titusstubs_8cpp.md#aaa127d57ebb465856805042ac5cd3276">NFC_CARD_TYPE</a> cardtype, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*rd_activationData) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_FtechBaud](#a1f60cbbb8ab69f84d3dea7bc2370be7f) (<a href="titusstubs_8cpp.md#afbdd40a0f001fb7ab2c52ee99422b5eb">NFC_F_BAUD</a> baud) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_PT_TxRx](#a1f3eb229b32c5a66e9249be7be57cdfe) (<a href="titusstubs_8cpp.md#aaa127d57ebb465856805042ac5cd3276">NFC_CARD_TYPE</a> cardtype, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*inBuff, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*outBuff) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Mifare_Authenticate](#a6307dc1a4339c298bbeaf61ffff8fb4f) (unsigned char blockNumber, <a href="titusstubs_8cpp.md#a72881cdace76f5df6b0296a826ea71ee">MIFARE_KEY_TYPE</a> keyType, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*Key) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Mifare_Read](#a1bab92fb0966e68a4318d6fec39cd501) (<a href="titusstubs_8cpp.md#a305e8ef6dafad4980a3c94ce20eb4528">I_MIFARE_CARD_TYPE</a> m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*out_buff) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Mifare_Write](#ad4b883fc075f8f66b860ca97cb1a06d5) (<a href="titusstubs_8cpp.md#a305e8ef6dafad4980a3c94ce20eb4528">I_MIFARE_CARD_TYPE</a> m_cardType, unsigned int StartBlockNum, unsigned int blockAmount, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*in_buff) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Mifare_Increment](#ac25aa2323c5c8bc10a993d2e89335037) (unsigned int blockNum, int amount) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Mifare_Decrement](#ad95d22bd21e99d44afccdf91e45daaa4) (unsigned int blockNum, int amount) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Mifare_Increment_Only](#a0501c6d614390321c449b609148b8b79) (unsigned int blockNum, int amount) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Mifare_Decrement_Only](#a35e059c78ad0c5b3a64bf731ea025565) (unsigned int blockNum, int amount) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Mifare_Transfer](#af34c2125714ab64c3b6f6483bb481f1b) (unsigned int blockNum) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Mifare_Restore](#a9dd06c4cbae1d1c5148120dd166a3ddf) (unsigned int blockNum) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Felica_Exchange](#a608fb992b1d21dad9dd507d0b7673d27) (<a href="titusstubs_8cpp.md#structfelica_tx_data">felicaTxData</a> \*in_buff, <a href="titusstubs_8cpp.md#structfelica_rx_data">felicaRxData</a> \*out_buff) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_Felica_Polling](#afbc84f034c17d26d0254a0ee0bca9da6) (unsigned int pollTimeout, <a href="titusstubs_8cpp.md#structfelica_polling">felicaPolling</a> \*inData, <a href="titusstubs_8cpp.md#structfelica_polling_output">felicaPollingOutput</a> \*outData) |
| <a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a>  | [NFC_APDU_Exchange](#ab4e820ce6573ae601d8a3a66d7a775ec) (<a href="titusstubs_8cpp.md#structapdu_tx_data">apduTxData</a> \*txData, <a href="titusstubs_8cpp.md#structapdu_rx_data">apduRxData</a> \*rxData) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_Terminal_Config](#a3b0973ce25d6c02fcd568cd2c7cc8a76) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*input, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*output) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_TERMINAL_ReadConfig](#a55382d02bcabcb88a34fa55bc671a87d) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*output) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_VAS_ReadConfig](#adf9ad7a8bd41321326437e43912f5142) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*output) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_VAS_Activate](#a9bbdb328e88858f94fdf1044e570c104) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*input, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*output) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_VAS_Cancel](#a1dd2e9ef4621db0030ee9018f2ff5169) (void) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_VAS_UpdateConfig](#ab54ae674653c3a11b093fa18cb181f96) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*input, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*output) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_VAS_CancelConfig](#a5569bbf869f3660c48940654b06b17a6) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_VAS_PreLoad](#a1462bff8b73099bdb78609ecf374ce30) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*input, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*output) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_VAS_CancelPreLoad](#a1de872f3d1cecf8d7b266773910bfe4b) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_VAS_Decrypt](#afe16916defaa30dac8f7df05e097e92e) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*input, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*output) |
| <a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a>  | [NFC_VAS_Action](#a634649fbecf2d18816f6e48854916d79) (<a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*id, int action, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*inData, <a href="titusstubs_8cpp.md#structraw_data">rawData</a> \*outBuff) |

## EnumerationType Documentation {#enumeration-type-documentation}

## SDI_SW12 <a href="#a0af9b7a9de719071122f396865ecebc9" id="a0af9b7a9de719071122f396865ecebc9"></a>

<p>enum [SDI_SW12](#a0af9b7a9de719071122f396865ecebc9)</p>

SDI Server Status Words
see <a href="pg_sdi_users_guide.md#subsubsec_sdi_status_word_coding">ADK-SDI Programmers Guide - Status Word Coding</a>

| Enumerator |  |
|----|----|
| SDI_SW12_NONE  | <p>no status word received, e.g. no connection</p> |
| SDI_SW12_SUCCESS  | <p>all okay</p> |
| SDI_SW12_TAG_ERROR  | <p>tag error</p> |
| SDI_SW12_TAG_LENGTH_ERROR  | <p>tag length error</p> |
| SDI_SW12_EXEC_ERROR  | <p>execution error</p> |
| SDI_SW12_CANCELED_BY_USER  | <p>canceled by user</p> |
| SDI_SW12_BUSY  | <p>SDI server is busy</p> |
| SDI_SW12_TIMEOUT_PIN_ENTRY  | <p>timeout during PIN entry</p> |
| SDI_SW12_TIMEOUT_NO_MSR_DATA  | <p>MSR data not available Timeout reached (for UX devices only)</p> |
| SDI_SW12_TIMEOUT_CARD_REMOVAL  | <p>mag. stripe reading on hybrid readers</p> |
| SDI_SW12_INTERCHAR_PIN_ENTRY  | <p>inter-character timeout during PIN entry</p> |
| SDI_SW12_COMMAND_NOT_ALLOWED  | <p>command not allowed</p> |
| SDI_SW12_MAIN_CONNECTION_USED  | <p>main connection (protocol type B) already in use</p> |
| SDI_SW12_INVALID_FILE_CONTENT  | <p>invalid file content</p> |
| SDI_SW12_FILE_ACCESS_ERROR  | <p>file access error</p> |
| SDI_SW12_LOGIC_ERROR  | <p>logic error, e.g. wrong command order</p> |
| SDI_SW12_SDI_PARAMETER_ERROR  | <p>parameter error</p> |
| SDI_SW12_LUHN_CHECK_FAILED  | <p>LUHN check of PAN failed.</p> |
| SDI_SW12_EXECUTION_ABORTED  | <p>execution aborted</p> |
| SDI_SW12_EXECUTION_TIMEOUT  | <p>execution timeout</p> |
| SDI_SW12_MESSAGE_LENGTH_ERROR  | <p>message length erro</p> |
| SDI_SW12_NO_SDI_PLUGIN_AVAILABLE  | <p>no SDI plugin available</p> |
| SDI_SW12_UNKNOWN_PLUGIN_ID  | <p>unknown plugin ID in the Instruction byte (INS)</p> |
| SDI_SW12_UNKNOWN_PLUGING_ID  | <p>typo, obsolete use SDI_SW12_UNKNOWN_PLUGIN_ID</p> |
| SDI_SW12_INVALID_PLUGIN_RESPONSE  | <p>invalid or no result data returned by the plugin</p> |
| SDI_SW12_EPP_CONNECTION_ERROR  | <p>EPP connection error.</p> |
| SDI_SW12_UNKNOWN_INS_BYTE  | <p>unknown Instruction (INS)</p> |
| SDI_SW12_UNKNOWN_CLA_BYTE  | <p>unknown Class (CLA)</p> |
| SDI_SW12_CMAC_ERROR  | <p>CMAC error.</p> |
| SDI_SW12_CMAC_LENGTH_ERROR  | <p>CMAC length error.</p> |
| SDI_SW12_CMAC_MISSING_ERROR  | <p>CMAC missing.</p> |
| SDI_SW12_ENCRYPTION_ERROR  | <p>encryption error</p> |
| SDI_SW12_ENCRYPTION_LENGTH_ERROR  | <p>encryption length error</p> |
| SDI_SW12_ENCRYPTION_MISSING_ERROR  | <p>encryption missing error</p> |
| SDI_SW12_DECRYPTION_ERROR  | <p>decryption error</p> |
| SDI_SW12_DECRYPTION_LENGTH_ERROR  | <p>decryption length error</p> |
| SDI_SW12_DECRYPTION_MISSING_ERROR  | <p>decryption mssing error</p> |
| SDI_SW12_EXCESSIVE_PIN_REQUESTS  | <p>excessive PIN requests</p> |
| SDI_SW12_LOW_BATTERY  | <p>low battery</p> |
| SDI_SW12_NO_DUKPT_KEYS_LOADED  | <p>no DUKPT keys loaded</p> |
| SDI_SW12_UNIT_TAMPERED  | <p>unit tampered</p> |
| SDI_SW12_RECOVERY_MODE  | <p><a href="classlibsdi_1_1_s_d_i.md">SDI</a> only allows Check For Update (20-1D) command. (Android only)</p> |
| SDI_SW12_PIN_BYPASSED  | <p>PIN bypassed.</p> |
| SDI_SW12_NO_MACTCH_FOR_CARD_VALIDATION  | <p>no match for card validation</p> |
| SDI_SW12_SMART_CARD_REMOVED  | <p>smart card removed = error caused by card holder</p> |
| SDI_SW12_SMART_CARD_ERROR_TRM  | <p>smart card error caused by terminal</p> |
| SDI_SW12_SMART_CARD_ERROR  | <p>smart card error caused by ICC</p> |
| SDI_SW12_TWO_CARDS  | <p>CTLS collision, multiple cards in NFC field.</p> |
| SDI_SW12_SMART_CARD_ERR_INIT  | <p>smart card error caused for initialization</p> |
| SDI_SW12_SMART_CARD_ERR_PARAM  | <p>smart card error caused passing invalid parameters</p> |
| SDI_SW12_EMV_TLV_ERROR  |  |
| SDI_SW12_ERROR  | **<a href="deprecated.md#_deprecated000171">Deprecated:</a>** any other error |
| SDI_SW12_TIMEOUT  | **<a href="deprecated.md#_deprecated000172">Deprecated:</a>** card detection/removal |
| SDI_SW12_NOT_ALLOWED  | **<a href="deprecated.md#_deprecated000173">Deprecated:</a>** not allowed for the moment, e.g. card removal |
| SDI_SW12_PARAMETER_ERROR  | **<a href="deprecated.md#_deprecated000174">Deprecated:</a>** parameter error (only in relation with EMV commands) |

## SDICLIENT_ERROR <a href="#a88afe55c2211351a88265153f28797e4" id="a88afe55c2211351a88265153f28797e4"></a>

<p>enum [SDICLIENT_ERROR](#a88afe55c2211351a88265153f28797e4)</p>

Additional Error Code complementing the different component interfaces by client side errors such as inter-process communication problems, concurrent use, parameter error detected on client side, etc. This enumeration is based on libsdiprotocol\'S <a href="group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md">SDI Protocol Error Codes</a> and can be read with <a href="classlibsdi_1_1_sdi_base.md#a167a672bfb8c6f222c4b2a255b053aec">SdiBase::getClientError()</a> and [getNfcClientError()](#a22b6870acf257e81edc02ef0942b98ed).

| Enumerator |  |
|----|----|
| SDICLIENT_ERROR_NONE  | <p>no error on client side, error originates from server</p> |
| SDICLIENT_ERROR_COMMUNICATION  | <p>read/write or protocol error</p> |
| SDICLIENT_ERROR_CONCURRENT_USE  | <p>SDI connection used by other thread</p> |
| SDICLIENT_ERROR_CONNECT  | <p>no connection to SDI server</p> |
| SDICLIENT_ERROR_OVERFLOW  | <p>output buffer too small</p> |
| SDICLIENT_ERROR_PARAM  | <p>function parameter wrong or NULL pointer not allowed</p> |
| SDICLIENT_ERROR_OTHER  | <p>any other problem like thread creation, memory allocation, etc.</p> |
| SDICLIENT_ERROR_NO_RECEIVE  | <p>returned by <a href="sdiprotocol_8h.md#ab3428d0ca92d1516b4efaa2ed7849795">SDI_Send()</a>: command successfully sent, but response for this command is suppressed, therefore, no <a href="sdiprotocol_8h.md#aee8a61a1bccdbe552ecaf1db3e1eacf9">SDI_Receive()</a> must be called afterwards</p> |
| SDICLIENT_ERROR_NOT_SUPPORTED  | <p>command not supported by this library</p> |
| SDICLIENT_ERROR_NOT_ALLOWED  | <p>command not allowed to be sent</p> |

## SYSUploadType <a href="#af55973ce01a27acae146f17b4a0366fa" id="af55973ce01a27acae146f17b4a0366fa"></a>

<p>enum [SYSUploadType](#af55973ce01a27acae146f17b4a0366fa)</p>

Types for sw/file upload command

| Enumerator |  |
|----|----|
| SYS_UPLOAD_SOFTWARE_UPDATE  | <p>Software update</p> |
| SYS_UPLOAD_CONFIG_WHITELIST  | <p>Whitelist configuration: whitelist.json</p> |
| SYS_UPLOAD_CONFIG_SENSITIVE_TAGS  | <p>Sensitive tags configuration: sensitivetags.json</p> |
| SYS_UPLOAD_CONFIG_CARD_RANGES  | <p>Card ranges configuration: cardranges.json</p> |
| SYS_UPLOAD_INSTALL_CP_PACKAGE  | <p>Install commerce platform package</p> |
| SYS_UPLOAD_EMV_CONFIGURATION  | <p>EMV configuration package (uncompressed TAR file)</p> |

## FunctionDocumentation {#function-documentation}

## getNfcClientError() <a href="#a22b6870acf257e81edc02ef0942b98ed" id="a22b6870acf257e81edc02ef0942b98ed"></a>

<p>enum [SDICLIENT_ERROR](#a88afe55c2211351a88265153f28797e4) libsdi::getNfcClientError</p>

Read client side error after NFC/VAS command invocation

## getNfcSW12() <a href="#a3b0818635e2caaab3b2f98370fb37d16" id="a3b0818635e2caaab3b2f98370fb37d16"></a>

<p>enum [SDI_SW12](#a0af9b7a9de719071122f396865ecebc9) libsdi::getNfcSW12</p>

Read SDI Server status after NFC/VAS command invocation

## NFC_APDU_Exchange() <a href="#ab4e820ce6573ae601d8a3a66d7a775ec" id="ab4e820ce6573ae601d8a3a66d7a775ec"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_APDU_Exchange</p>

Data transive of APDU protocol.

{% hint style="info" %}
This command is not allowed on <a href="classlibsdi_1_1_s_d_i.md">SDI</a> Server external interface
{% endhint %} **Parameters**

\[in\] **txData** apduTxData data to send \[out\] **rxData** apduRxData data received

### Returns

EMB_APP_COMMAND_NOT_SUPPORTED

## NFC_Callback_Test() <a href="#a49339ad1d7b339377f38add056b17d2b" id="a49339ad1d7b339377f38add056b17d2b"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Callback_Test</p>

Undocumented function, just included because part of NFC_Interface.h.

### Returns

EMB_APP_COMMAND_NOT_SUPPORTED

## NFC_Client_Init() <a href="#ac04174b3f4524e1f9942ebd550ec4743" id="ac04174b3f4524e1f9942ebd550ec4743"></a>

<p>CL_STATUS libsdi::NFC_Client_Init</p>

This is required to called once before any NFC/VAS is possible. Should be called with CL_TYPE_FUNCTION as client-server is not supported anymore When the <a href="classlibsdi_1_1_s_d_i.md">SDI</a> server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication.

**Parameters**

\[in\] **type** CL_TYPE_FUNCTION

### Returns

CL_STATUS CL_STATUS_NFC_INITILIZED_ALREADY for subsequent calls

## NFC_Client_Init_CheckVer() <a href="#acd919133d0159ee801b6a3b9afdd50ed" id="acd919133d0159ee801b6a3b9afdd50ed"></a>

<p>CL_STATUS libsdi::NFC_Client_Init_CheckVer</p>

Not supported

### Returns

CL_STATUS_NOT_SUPPORTED

## NFC_Config_Init() <a href="#adeae9cc7983e75ba2a418f4227eb8e33" id="adeae9cc7983e75ba2a418f4227eb8e33"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Config_Init</p>

According NFC documentation: Initializes NFC Configuration. But this function does nothing and always returns error.

### Returns

EMB_APP_FAILED

## NFC_Felica_Exchange() <a href="#a608fb992b1d21dad9dd507d0b7673d27" id="a608fb992b1d21dad9dd507d0b7673d27"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Felica_Exchange</p>

Data transive over Felica protocol

**Parameters**

\[in\] **in_buff** binary input \[out\] **out_buff** binary output

### Returns

ResponseCodes

## NFC_Felica_Polling() <a href="#afbc84f034c17d26d0254a0ee0bca9da6" id="afbc84f034c17d26d0254a0ee0bca9da6"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Felica_Polling</p>

FeliCa Polling request

**Parameters**

\[in\] **pollTimeout** timeout in Milli Seconds \[in\] **inData** felicaPolling input data \[out\] **outData** felicaPollingOutput result data

### Returns

ResponseCodes

## NFC_Free_Poll_Data() <a href="#afd6ca719b830ca453cc910dda46abdd6" id="afd6ca719b830ca453cc910dda46abdd6"></a>

<p>void libsdi::NFC_Free_Poll_Data</p>

Releases memory allocated in the pollRes \*outPollRes when [NFC_PT_Polling()](#a7b8940cfad41a41aa030a403673ff08e) was called.

## NFC_Free_Poll_Data_Full() <a href="#a55f7271ee3dd3c5f13e12aa2dd80f989" id="a55f7271ee3dd3c5f13e12aa2dd80f989"></a>

<p>void libsdi::NFC_Free_Poll_Data_Full</p>

Releases memory allocated in the pollResFull \*outPollRes when [NFC_PT_PollingFull()](#a4a38cf0fdbc941135a826e5fb44eeb72) was called.

## NFC_Get_Version() <a href="#ac67395030324faba382bf017a031cccd" id="ac67395030324faba382bf017a031cccd"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Get_Version</p>

Returns ADK-NFC build and kernels versions as JSON string Depending on return code [getNfcSW12()](#a3b0818635e2caaab3b2f98370fb37d16) or [getNfcClientError()](#a22b6870acf257e81edc02ef0942b98ed) might provide the error reason.

**Parameters**

\[out\] **output** data buffer for the version information

### Returns

NFC result, EMB_APP_FAILED for other SW12, EMB_APP_COMM_ERROR for client side error

## NFC_Mifare_Authenticate() <a href="#a6307dc1a4339c298bbeaf61ffff8fb4f" id="a6307dc1a4339c298bbeaf61ffff8fb4f"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Mifare_Authenticate</p>

Authenticates the section with given block address with either key A or B.

**Parameters**

\[in\] **blockNumber** MIFARE block address within the section to authenticate \'00\' .. \'FF\' \[in\] **keyType** MIFARE_KEY_TYPE_A or MIFARE_KEY_TYPE_B \[in\] **Key** MIFARE key (e.g. MIFARE classic crypto-1 key with 48 bit)

### Returns

ResponseCodes

## NFC_Mifare_Decrement() <a href="#ad95d22bd21e99d44afccdf91e45daaa4" id="ad95d22bd21e99d44afccdf91e45daaa4"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Mifare_Decrement</p>

Decrement MIFARE value block by amount and transfer to original location

**Parameters**

\[in\] **blockNum** source and destination block address \[in\] **amount** 4 byte signed integer

### Returns

ResponseCodes

## NFC_Mifare_Decrement_Only() <a href="#a35e059c78ad0c5b3a64bf731ea025565" id="a35e059c78ad0c5b3a64bf731ea025565"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Mifare_Decrement_Only</p>

Decrement MIFARE value block by amount and store at transfer buffer

**Parameters**

\[in\] **blockNum** source block address \[in\] **amount** 4 byte signed integer

### Returns

ResponseCodes

## NFC_Mifare_Increment() <a href="#ac25aa2323c5c8bc10a993d2e89335037" id="ac25aa2323c5c8bc10a993d2e89335037"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Mifare_Increment</p>

Increment MIFARE value block by amount and transfer to original location

**Parameters**

\[in\] **blockNum** source and destination block address \[in\] **amount** 4 byte signed integer

### Returns

ResponseCodes

## NFC_Mifare_Increment_Only() <a href="#a0501c6d614390321c449b609148b8b79" id="a0501c6d614390321c449b609148b8b79"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Mifare_Increment_Only</p>

Increment MIFARE value block by amount and store at transfer buffer

**Parameters**

\[in\] **blockNum** source block address \[in\] **amount** 4 byte signed integer

### Returns

ResponseCodes

## NFC_Mifare_Read() <a href="#a1bab92fb0966e68a4318d6fec39cd501" id="a1bab92fb0966e68a4318d6fec39cd501"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Mifare_Read</p>

Read block data of up to 15 blocks

**Parameters**

\[in\] **m_cardType** I_MIFARE_CARD_TYPE \[in\] **StartBlockNum** address of first block \[in\] **blockAmount** number of blocks to read \[out\] **out_buff** output buffer, required size is 16\*blockAmount

### Returns

ResponseCodes

## NFC_Mifare_Restore() <a href="#a9dd06c4cbae1d1c5148120dd166a3ddf" id="a9dd06c4cbae1d1c5148120dd166a3ddf"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Mifare_Restore</p>

Write value from source block to transfer buffer

**Parameters**

\[in\] **blockNum** source block address

### Returns

ResponseCodes

## NFC_Mifare_Transfer() <a href="#af34c2125714ab64c3b6f6483bb481f1b" id="af34c2125714ab64c3b6f6483bb481f1b"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Mifare_Transfer</p>

Write value from transfer buffer to destination block

**Parameters**

\[in\] **blockNum** destination block address

### Returns

ResponseCodes

## NFC_Mifare_Write() <a href="#ad4b883fc075f8f66b860ca97cb1a06d5" id="ad4b883fc075f8f66b860ca97cb1a06d5"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Mifare_Write</p>

Write block data of up to 15 blocks

**Parameters**

\[in\] **m_cardType** I_MIFARE_CARD_TYPE \[in\] **StartBlockNum** address of first block \[in\] **blockAmount** number of blocks to read \[in\] **in_buff** data to write of size 16\*blockAmount

### Returns

ResponseCodes

## NFC_Ping() <a href="#af2720b510afe83dfbb88f8525998110e" id="af2720b510afe83dfbb88f8525998110e"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Ping</p>

Return NFC Framework State of the NFC framework.

## NFC_PT_Activation() <a href="#a81820d4b1d383f7dbec708a62be8682c" id="a81820d4b1d383f7dbec708a62be8682c"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_Activation</p>

Activates (selects) the card found during polling. When the <a href="classlibsdi_1_1_s_d_i.md">SDI</a> server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication.

**Parameters**

\[in\] **cardtype** value from pollRes::cardInfo\]n\].cardType or pollResFull::cards_info_arr\[n\].m_modulation \[in\] **rd_activationData** value from pollRes::cards_info_arr\[n\].card_info or pollResFull::card_info_arr\[n\].mrd_UID

## NFC_PT_Cancel_Polling() <a href="#a79e97742ed363fa19b107b3306f5628d" id="a79e97742ed363fa19b107b3306f5628d"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_Cancel_Polling</p>

Stop polling before timeout. Note: This command has to be send asynchronously while waiting for polling response. Since is not yet supported on <a href="classlibsdi_1_1_s_d_i.md">SDI</a> Server side there is also no implementation on client side.

### Returns

EMB_APP_COMMAND_NOT_SUPPORTED

## NFC_PT_Close() <a href="#a1ed7f9f633b243555c21f6e743f93818" id="a1ed7f9f633b243555c21f6e743f93818"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_Close</p>

Release NFC L1 driver. When the <a href="classlibsdi_1_1_s_d_i.md">SDI</a> server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication.

## NFC_PT_FieldOff() <a href="#a6d22f7f2995498c3deeff5ca14f035cd" id="a6d22f7f2995498c3deeff5ca14f035cd"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_FieldOff</p>

Turns RF field off. When the <a href="classlibsdi_1_1_s_d_i.md">SDI</a> server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication.

## NFC_PT_FieldOn() <a href="#aac507fa74c6e4dee274e8e319fae53b4" id="aac507fa74c6e4dee274e8e319fae53b4"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_FieldOn</p>

Turns RF field on. When the <a href="classlibsdi_1_1_s_d_i.md">SDI</a> server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication.

## NFC_PT_FtechBaud() <a href="#a1f60cbbb8ab69f84d3dea7bc2370be7f" id="a1f60cbbb8ab69f84d3dea7bc2370be7f"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_FtechBaud</p>

Changes NFC-F baud rate

**Parameters**

\[in\] **baud** value of NFC_F_BAUD

### Returns

value of ResponseCodes

## NFC_PT_Open() <a href="#a725fcbe27b01fb76f0a311837df2b6a2" id="a725fcbe27b01fb76f0a311837df2b6a2"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_Open</p>

Initialise NFC L1 driver. When the <a href="classlibsdi_1_1_s_d_i.md">SDI</a> server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication.

## NFC_PT_Polling() <a href="#a7b8940cfad41a41aa030a403673ff08e" id="a7b8940cfad41a41aa030a403673ff08e"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_Polling</p>

Activates polling. See NFC documentation. When the <a href="classlibsdi_1_1_s_d_i.md">SDI</a> server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication.

## NFC_PT_PollingFull() <a href="#a4a38cf0fdbc941135a826e5fb44eeb72" id="a4a38cf0fdbc941135a826e5fb44eeb72"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_PollingFull</p>

Activates polling. See NFC documentation. When the <a href="classlibsdi_1_1_s_d_i.md">SDI</a> server response is not 90xx or there was a communication problem an appropriate CL_STATUS or CL_STATUS_GENERAL_ERROR is returned. The functions getNfcClientError and getNfcSW12 will provide the error indication.

## NFC_PT_TxRx() <a href="#a1f3eb229b32c5a66e9249be7be57cdfe" id="a1f3eb229b32c5a66e9249be7be57cdfe"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_PT_TxRx</p>

Sends and receives raw data using ISO 14443-3 protocol (31-08) This function is no more available at <a href="classlibsdi_1_1_s_d_i.md">SDI</a> server external interface

### Returns

EMB_APP_COMMAND_NOT_SUPPORTED

## NFC_SerialClose() <a href="#a0dac7cde7c42f27b7d0999f524f1213f" id="a0dac7cde7c42f27b7d0999f524f1213f"></a>

<p>CL_STATUS libsdi::NFC_SerialClose</p>

Not supported

### Returns

CL_STATUS_NOT_SUPPORTED

## NFC_SerialOpen() <a href="#a016910912f29079a54e53843aa248424" id="a016910912f29079a54e53843aa248424"></a>

<p>CL_STATUS libsdi::NFC_SerialOpen</p>

Not supported

### Returns

CL_STATUS_NOT_SUPPORTED

## NFC_Set_Callback_Function() <a href="#a2e0afcf19bc4945282d984edfcb26b5d" id="a2e0afcf19bc4945282d984edfcb26b5d"></a>

<p><a href="titusstubs_8cpp.md#a42e167e83e1f0229d501a09e3f1d2b1a">ResponseCodes</a> libsdi::NFC_Set_Callback_Function</p>

Set UI callback function handling text, status indicators (LEDs) and buzzer. So far, there is no client side implementation.

### Returns

EMB_APP_COMMAND_NOT_SUPPORTED

## NFC_Terminal_Config() <a href="#a3b0973ce25d6c02fcd568cd2c7cc8a76" id="a3b0973ce25d6c02fcd568cd2c7cc8a76"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_Terminal_Config</p>

Terminal wide VAS configuration

**Parameters**

\[in\] **input** JSON string see Terminal Configuration Parameters \[out\] **output** nothing - RFU

### Returns

VasStatus

## NFC_TERMINAL_ReadConfig() <a href="#a55382d02bcabcb88a34fa55bc671a87d" id="a55382d02bcabcb88a34fa55bc671a87d"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_TERMINAL_ReadConfig</p>

Reads the most updated terminal configuration.Static parameter will be returned in case appID is unknown or [NFC_VAS_PreLoad()](#a1462bff8b73099bdb78609ecf374ce30) issued without changing Terminal configuration.

**Parameters**

\[in\] **id** application unique identifier \[out\] **output** JSON string most updated Read Terminal Configuration Parameters

### Returns

VasStatus

## NFC_VAS_Action() <a href="#a634649fbecf2d18816f6e48854916d79" id="a634649fbecf2d18816f6e48854916d79"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_VAS_Action</p>

Key transfer between Counter Top and External PIN pad.

{% hint style="info" %}
Not to be used at external <a href="classlibsdi_1_1_s_d_i.md">SDI</a> Server interface
{% endhint %}

### Returns

VasStatus

## NFC_VAS_Activate() <a href="#a9bbdb328e88858f94fdf1044e570c104" id="a9bbdb328e88858f94fdf1044e570c104"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_VAS_Activate</p>

Activates NFC interface, runs through wallet kernel flow and retrieves VAS data.

**Parameters**

\[in\] **id** application unique identifier \[in\] **input** JSON string set of dynamic parameters to be merged with configuration from data base. \[out\] **output** JSON string VAS data received from the mobile.

### Returns

VasStatus

## NFC_VAS_Cancel() <a href="#a1dd2e9ef4621db0030ee9018f2ff5169" id="a1dd2e9ef4621db0030ee9018f2ff5169"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_VAS_Cancel</p>

Stop VAS activate polling before timeout. Note: This command has to be send asynchronously while waiting for polling response. Since is not yet supported on <a href="classlibsdi_1_1_s_d_i.md">SDI</a> Server side there is also no implementation on client side.

### Returns

EMB_APP_COMMAND_NOT_SUPPORTED

## NFC_VAS_CancelConfig() <a href="#a5569bbf869f3660c48940654b06b17a6" id="a5569bbf869f3660c48940654b06b17a6"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_VAS_CancelConfig</p>

Clears all the VAS configuration by application ID

**Parameters**

\[in\] **id** application unique identifier

### Returns

VasStatus

## NFC_VAS_CancelPreLoad() <a href="#a1de872f3d1cecf8d7b266773910bfe4b" id="a1de872f3d1cecf8d7b266773910bfe4b"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_VAS_CancelPreLoad</p>

Clear preloaded configuration by application ID and pulls latest static configuration from data base.

**Parameters**

\[in\] **id** application unique identifier

### Returns

VasStatus

## NFC_VAS_Decrypt() <a href="#afe16916defaa30dac8f7df05e097e92e" id="afe16916defaa30dac8f7df05e097e92e"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_VAS_Decrypt</p>

Decrypts an encrypted VAS response.

**Parameters**

\[in\] **id** application unique identifier \[in\] **input** The json in the same format of the Vas Data Response with the included encrypted message \[out\] **output** The json in the same format of the Vas Data Response with the included decrypted message

### Returns

VasStatus

## NFC_VAS_PreLoad() <a href="#a1462bff8b73099bdb78609ecf374ce30" id="a1462bff8b73099bdb78609ecf374ce30"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_VAS_PreLoad</p>

Configures the terminal with wallet specific parameters. [NFC_VAS_Activate()](#a9bbdb328e88858f94fdf1044e570c104) has to be called to get VAS data. Only single PreLoaded configuration is available.

**Parameters**

\[in\] **id** application unique identifier \[in\] **input** input Set of PreLoad parameters to be merged with configuration from data base. \[out\] **output** none - RFU

### Returns

VasStatus

## NFC_VAS_ReadConfig() <a href="#adf9ad7a8bd41321326437e43912f5142" id="adf9ad7a8bd41321326437e43912f5142"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_VAS_ReadConfig</p>

Reads the most updated wallets configuration.

**Parameters**

\[in\] **id** application unique identifier \[out\] **output** JSON string most updated configuration for terminal and all wallets

### Returns

VasStatus

## NFC_VAS_UpdateConfig() <a href="#ab54ae674653c3a11b093fa18cb181f96" id="ab54ae674653c3a11b093fa18cb181f96"></a>

<p><a href="titusstubs_8cpp.md#a23878ec2ab700ea0ebd617a736ff664d">VasStatus</a> libsdi::NFC_VAS_UpdateConfig</p>

Configures the terminal with wallet specific parameters.

**Parameters**

\[in\] **id** application unique identifier \[in\] **input** JSON string set of parameters to configure ome or multiple wallets \[out\] **output** none - RFU

### Returns

VasStatus
