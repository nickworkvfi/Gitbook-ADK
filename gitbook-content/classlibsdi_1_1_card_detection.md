---
hidden: true
title: CardDetection Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Static Public Attributes](#pub-static-attribs)

Interface for SDI Card Detection Interface, command class 23. [More\...](#details)

`#include <`<a href="sdi__if_8h_source.md">sdi_if.h</a>`>`

Inheritance diagram for CardDetection:

![Inheritance graph](classlibsdi_1_1_card_detection__inherit__graph.png)

\[<a href="graph_legend.md">legend</a>\]

Collaboration diagram for CardDetection:

![Collaboration graph](classlibsdi_1_1_card_detection__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

|  |  |
|----|----|
| Public Types |  |
| enum   | [DetectionMode](#a0e6b4f9573cc4a509a0aa899db897cea) { [DETECTION_MODE_BLOCKING](#a0e6b4f9573cc4a509a0aa899db897ceaa90305cd42b075df69032d816d8a6125e), [DETECTION_MODE_POLLING](#a0e6b4f9573cc4a509a0aa899db897ceaa647b182d54f277c18390c7efc1a9e393), [DETECTION_MODE_CALLBACK](#a0e6b4f9573cc4a509a0aa899db897ceaa258ceb8db19545c478b1c9342b535458) } |

|  |  |
|----|----|
| Public Member Functions |  |
| void  | [setDetectionMode](#a71a713082e9f559eaa5e6a48d66233d4) (const enum [DetectionMode](#a0e6b4f9573cc4a509a0aa899db897cea) mode) |
|   | Set Card Detection mode. [More\...](#a71a713082e9f559eaa5e6a48d66233d4)<br/> |
| void  | [setTecStartOptions](#aede6edfe75cdcf4d2cf7abfa28fc8dd8) (const std::vector\< unsigned char \> &opts) |
|   | Set options for <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a> send by [startSelection()](#abd641215dab1399373c2ab31e74e8343 "Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using se...") (DFA12A) [More\...](#aede6edfe75cdcf4d2cf7abfa28fc8dd8)<br/> |
| void  | [setTecConfig](#a81f193951a33fb573bfde228436b9a03) (const std::vector\< unsigned char \> &opts) |
|   | Set TECSEL ADK configuration (DFA133) [More\...](#a81f193951a33fb573bfde228436b9a03)<br/> |
| void  | [setCancelButton](#a1cf13e9df55e7572debed5522d9eaf29) (bool enable) |
|   | Method for activation of cancel button. [More\...](#a1cf13e9df55e7572debed5522d9eaf29)<br/> |
| void  | [setCardEntryValueDeativation](#aacf3c852c0ccedfb8e493ac0d4aafe01) (unsigned char b) |
|   | Configure which input is skipped at manual card data entry. [More\...](#aacf3c852c0ccedfb8e493ac0d4aafe01)<br/> |
| void  | [setAlternativeInputFormat](#a3e468348fad6b657f0cea8f3ccfaa6f6) (const char \*f) |
|   | Configure alternate input format string for CVV value. [More\...](#a3e468348fad6b657f0cea8f3ccfaa6f6)<br/> |
| void  | [setCardRemovalTimeout](#ae95fd131087aa3d21c93e513104f38ed) (unsigned timeout_ms) |
|   | For hybrid card readers set timeout for mag. stripe data available after start of card pull-out (DFA153). [More\...](#ae95fd131087aa3d21c93e513104f38ed)<br/> |
| void  | [setCallback](#aa20cfc93106aeadbd200b8b8133d709c) (void(\*cb)(unsigned char technology, void \*context), void \*ctx) |
|   | Set Callback function to be called in [DETECTION_MODE_CALLBACK](#a0e6b4f9573cc4a509a0aa899db897ceaa258ceb8db19545c478b1c9342b535458 "using 23-03 command in callback mode: This mode allows addTechnology() and removeTechnology() during ...") when Card Detection ends. [More\...](#aa20cfc93106aeadbd200b8b8133d709c)<br/> |
| void  | [cardDetectedCallback](#acc0efc73ca1e0b855ccbe2650fa559c4) (unsigned char \*<a href="classlibsdi_1_1_sdi_cmd.md#a2b7c2d6ae6cb8a37cd3cc6c2a053abbc">dataIn</a>, unsigned short sizeIn) |
|   | Internal Card Detected Callback handler function. [More\...](#acc0efc73ca1e0b855ccbe2650fa559c4)<br/> |
| int  | [startSelection](#abd641215dab1399373c2ab31e74e8343) (unsigned char supportedTechnologies, unsigned seconds) |
|   | Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using [setDetectionMode()](#a71a713082e9f559eaa5e6a48d66233d4 "Set Card Detection mode."). Default mode is the blocking mode. [More\...](#abd641215dab1399373c2ab31e74e8343)<br/> |
| enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">libsdi::SDI_SW12</a>  | [stopSelection](#a1eab262c8c87517bc6d62fe11b5f0927) () |
|   | Abort Technology Selection via SDI Server\'s Sys Abort (20-02) when in blocking mode, otherwise send Stop Card Detection (23-05). [More\...](#a1eab262c8c87517bc6d62fe11b5f0927)<br/> |
| unsigned char  | [receiveTechnology](#ad6eef14b6e8830178bd8330ef2dbcb6e) () |
|   | Get the Technology Selection Result. [More\...](#ad6eef14b6e8830178bd8330ef2dbcb6e)<br/> |
| bool  | [cardReadAtEpp](#ae7e1b4abf492809715029b687568c85d) () |
|   | Check at which device the card has been read (DFA150). [More\...](#ae7e1b4abf492809715029b687568c85d)<br/> |
| unsigned char  | [pollTechnology](#ac8badf7309b3dec37c15fb5df3adfc8c) () |
|   | Poll for the asynchronous Card Detection status (23-04). [More\...](#ac8badf7309b3dec37c15fb5df3adfc8c)<br/> |
| enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">libsdi::SDI_SW12</a>  | [addTechnology](#a7ccceaf4350919543165633cbadf7ad2) (unsigned char technology, const std::vector\< unsigned char \> &opts) |
|   | Add a technology to a running asynchronous Card Detection (23-06) [More\...](#a7ccceaf4350919543165633cbadf7ad2)<br/> |
| enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">libsdi::SDI_SW12</a>  | [removeTechnology](#aa0e4580b1535e8cf36d697d6374847a0) (unsigned char technology) |
|   | Remove a technology from a running asynchronous Card Detection (23-07) [More\...](#aa0e4580b1535e8cf36d697d6374847a0)<br/> |
| std::string  | [getPan](#a05af9f3debd343cbfbc8a57c9a75f632) () |
|   | Access PAN from mag. stripe or manual entry (DF1A) [More\...](#a05af9f3debd343cbfbc8a57c9a75f632)<br/> |
| std::string  | [getTrack2](#acc3a5abd286a96860c86b88539c77d23) () |
|   | Access track 2 from mag. stripe (DF49) [More\...](#acc3a5abd286a96860c86b88539c77d23)<br/> |
| int  | [getTrack2Bin](#a1f94c9d8513a5b7b62d8486c7b9c8b04) (std::vector\< unsigned char \> &data) |
|   | Access obfuscated track 2 data (DF1B) Note: Data is appended to existing content. [More\...](#a1f94c9d8513a5b7b62d8486c7b9c8b04)<br/> |
| std::string  | [getCardholderName](#a126687537a33e25f76cefb8d97217447) () |
|   | Access card holder name from track 1 (5F20) [More\...](#a126687537a33e25f76cefb8d97217447)<br/> |
| std::string  | [getServiceCode](#a73cf8d35894bb312acc10fe70d69abd9) () |
|   | Access service code from track 3 (5F30) [More\...](#a73cf8d35894bb312acc10fe70d69abd9)<br/> |
| std::string  | [getTrack1](#a1e160f7c099a9231095fa7c70ede0372) () |
|   | Access mag. stripe track 1 (DFA040) [More\...](#a1e160f7c099a9231095fa7c70ede0372)<br/> |
| int  | [getPluginResponseData](#a76dd851840d45388ad42ca8c1ee57074) (std::vector\< unsigned char \> &data) |
|   | Access plugin response data (DFA101) in case one plugin has been triggered. [More\...](#a76dd851840d45388ad42ca8c1ee57074)<br/> |
| int  | [getPluginResponseData](#acfed80583b45ecca83c85e0f076d4296) (unsigned index, int32_t &pluginId, int32_t &pluginResponseCode, std::vector\< unsigned char \> &data) |
|   | Access plugin response data (FFA107, DFA101, DFA10C, DFA10D) [More\...](#acfed80583b45ecca83c85e0f076d4296)<br/> |
| bool  | [getPluginResponseData](#aae35f08592a982e6a936085b657efd27) (std::vector\< <a href="classlibsdi_1_1_sdi_base.md#structlibsdi_1_1_sdi_base_1_1_plugin_result">PluginResult</a> \> &results) |
|   | Access plugin response data (FFA107, DFA101, DFA10C, DFA10D) [More\...](#aae35f08592a982e6a936085b657efd27)<br/> |
| std::string  | [getString](#ade73564c46848deb409a02a81b4f2b75) (unsigned CTS_DATA_TAG) |
|   | Access cts_WaitSelection result data (FFA102) CTS_DATA_TAG_VAS_DATA: JSON string returned by NFC_VAS_Activate or NFC_VAS_Decrypt (DFDB24) [More\...](#ade73564c46848deb409a02a81b4f2b75)<br/> |
| unsigned char  | [getValue](#a5029da404b1443022812c57236837716) (unsigned CTS_DATA_TAG, unsigned char defaultValue) |
|   | Access cts_WaitSelection result data tags of 1 byte length (FFA102) CTS_DATA_TAG_NFC_RESULT CTS_DATA_TAG_CARDS_TOTAL_COUNT CTS_DATA_TAG_CARDS_A CTS_DATA_TAG_CARDS_B CTS_DATA_TAG_CARDS_F CTS_DATA_TAG_CARD_TYPE CTS_DATA_TAG_VAS_RESULT CTS_DATA_TAG_EMV_RESULT CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT. [More\...](#a5029da404b1443022812c57236837716)<br/> |
| unsigned char  | [getValue](#a44af5b7a2f513acb372ed163d4694a19) (unsigned CTS_DATA_TAG, int n, unsigned char defaultValue) |
|   | Access cts_WaitSelection result data tags of 1 byte length. [More\...](#a44af5b7a2f513acb372ed163d4694a19)<br/> |
| int  | [getData](#a11651701a8cc61638dfa1b3ae575c539) (std::vector\< unsigned char \> &data) |
|   | Access cts_WaitSelection result data (complete FFA102 content) [More\...](#a11651701a8cc61638dfa1b3ae575c539)<br/> |
| int  | [getData](#a9b780e23e23268391d95fb6123a64c36) (unsigned CTS_DATA_TAG, std::vector\< unsigned char \> &data) |
|   | Access cts_WaitSelection result data CTS_DATA_TAG_CARD_INFO. [More\...](#a9b780e23e23268391d95fb6123a64c36)<br/> |
| int  | [getData](#a091870a5cadfac43e94a676da54ff5ca) (unsigned CTS_DATA_TAG, int n, std::vector\< unsigned char \> &data) |
|   | Access cts_WaitSelection result data CTS_DATA_TAG_CARD_INFO. [More\...](#a091870a5cadfac43e94a676da54ff5ca)<br/> |
| int  | [getTecselData](#ac1173d06deadb7bdd61b426c7a011d0a) (std::vector\< unsigned char \> &data) |
|   | Access cts_WaitSelection result data in case CTS_DATA_TLV is not set (<a href="classlibsdi_1_1_s_d_i.md">SDI</a> tag DFA154) This can include either the EMV-ADK CTLS framework response code (result of continue offline) or the contactless card type (result of smart reset). [More\...](#ac1173d06deadb7bdd61b426c7a011d0a)<br/> |
| int  | [startMsrRead](#a5d4d9b3d1806fd63f22f8d0cf1f8ff36) (unsigned timeout_sec) |
|   | Send MSR read request (21-01) [More\...](#a5d4d9b3d1806fd63f22f8d0cf1f8ff36)<br/> |
| int  | [msrSetOptions](#a065d25439941338d5f4c36cbb528ca6b) (const std::vector\< unsigned char \> &opts) |
|   | Set MSR options (21-03) [More\...](#a065d25439941338d5f4c36cbb528ca6b)<br/> |
| int  | [msrGetTrackStatus](#a94ecdcadeb9ee37d90150c2aefb07383) (int track) |
| int  | [msrGetCardSpecificToken](#aa204675a89680c85dcfffc81b89d5f2b) (std::vector\< unsigned char \> &token) |
|   | [CardDetection](#a4272e3875f1ff737670b4470e4032404) () |
|   | [\~CardDetection](#aeb4dfa0e68b1eb5ecfcd63dff40e8215) () |
| virtual void  | [clear](#aae048282c7011eedc2e0492f6421ea73) () |
| ![-](closed.png) Public Member Functions inherited from <a href="classlibsdi_1_1_sdi_cmd.md">SdiCmd</a> |  |
|   | <a href="classlibsdi_1_1_sdi_cmd.md#a9a5f0b856a4b8e0f337770f1fa841c80">SdiCmd</a> () |
| virtual  | <a href="classlibsdi_1_1_sdi_cmd.md#add17dace52a0c4b8f6004f7bcc867e3e">~SdiCmd</a> () |
| enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">SDI_SW12</a>  | <a href="classlibsdi_1_1_sdi_cmd.md#a59300a399fbda10c562a2470fc4cde52">sendReceive</a> (unsigned char cla, unsigned char ins, unsigned char p1=0, unsigned char p2=0, unsigned maxResponseSize=2048) |
|   | Generic SDI command exchange function combining sending of request, waiting and receiving the response. <a href="classlibsdi_1_1_sdi_cmd.md#a59300a399fbda10c562a2470fc4cde52">More...</a><br/> |
| int  | <a href="classlibsdi_1_1_sdi_cmd.md#adf6959d0550be4ff756c3ee4b7f104fe">send</a> (unsigned char cla, unsigned char ins, unsigned char p1=0, unsigned char p2=0) |
|   | Like <a href="classlibsdi_1_1_sdi_cmd.md#a59300a399fbda10c562a2470fc4cde52">sendReceive()</a> but without waiting for response. <a href="classlibsdi_1_1_sdi_cmd.md#adf6959d0550be4ff756c3ee4b7f104fe">More...</a><br/> |
| enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">SDI_SW12</a>  | <a href="classlibsdi_1_1_sdi_cmd.md#a22eddbbef80354a4641b55828346c7d7">receive</a> (unsigned maxResponseSize=2048) |
|   | Receive SDI response after request has been send with <a href="classlibsdi_1_1_sdi_cmd.md#adf6959d0550be4ff756c3ee4b7f104fe">send()</a> and data availability has been signaled. <a href="classlibsdi_1_1_sdi_cmd.md#a22eddbbef80354a4641b55828346c7d7">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_cmd.md#ae460ac8618ec349ff0289c578539d9f2">set</a> (const char \*path, int <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, unsigned fixedLength=0) |
|   | Set integer data object SDI command. <a href="classlibsdi_1_1_sdi_cmd.md#ae460ac8618ec349ff0289c578539d9f2">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_cmd.md#a1ec79e2e0211c6c8ee229ba779ec9eff">set</a> (const char \*path, uint32_t <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, unsigned fixedLength=0) |
|   | Set unsigned integer data object SDI command. <a href="classlibsdi_1_1_sdi_cmd.md#a1ec79e2e0211c6c8ee229ba779ec9eff">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_cmd.md#ac72a9a24645c216539ab422b50a763cb">set</a> (const char \*path, const unsigned char \*data, unsigned dataLen) |
|   | Set byte array data object in SDI command. <a href="classlibsdi_1_1_sdi_cmd.md#ac72a9a24645c216539ab422b50a763cb">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_cmd.md#acae91bc646226025ace047bdba7a2d5d">set</a> (const char \*path, unsigned char byteValue) |
|   | Set single byte value in SDI command. <a href="classlibsdi_1_1_sdi_cmd.md#acae91bc646226025ace047bdba7a2d5d">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_cmd.md#a5c4ad2fa43dc552bccc10404a5bd28d0">set</a> (const char \*path, const std::vector\< unsigned char \> &data) |
|   | Set byte array data object in SDI command. <a href="classlibsdi_1_1_sdi_cmd.md#a5c4ad2fa43dc552bccc10404a5bd28d0">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_cmd.md#aa6eb7cd81eecfd63f2ccb5980213e37c">set</a> (const char \*path, const std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Set character data object in SDI command. <a href="classlibsdi_1_1_sdi_cmd.md#aa6eb7cd81eecfd63f2ccb5980213e37c">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_cmd.md#a365ef386b964414cd160cc03e5063745">setCommandDestination</a> (bool epp, bool force=false) |
|   | Set command destination for systems with EPP Unless force the command destination is set only if parameter epp is true. <a href="classlibsdi_1_1_sdi_cmd.md#a365ef386b964414cd160cc03e5063745">More...</a><br/> |
| virtual void  | <a href="classlibsdi_1_1_sdi_cmd.md#a509a30dbc3c5bb52a8ceb38bedad6e82">clear</a> (const char \*path) |
|   | Remove single input data stored in <a href="classlibsdi_1_1_sdi_cmd.md#a2b7c2d6ae6cb8a37cd3cc6c2a053abbc">dataIn</a>. <a href="classlibsdi_1_1_sdi_cmd.md#a509a30dbc3c5bb52a8ceb38bedad6e82">More...</a><br/> |
| virtual void  | <a href="classlibsdi_1_1_sdi_cmd.md#a80eff6d974183e99f91c034c49d2ecde">clearResults</a> () |
|   | Remove all SDI response data. <a href="classlibsdi_1_1_sdi_cmd.md#a80eff6d974183e99f91c034c49d2ecde">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_cmd.md#a9490be5475acb6b165642dd2c3d1caf2">importResults</a> (const <a href="classlibsdi_1_1_sdi_cmd.md">SdiCmd</a> &intermediate) |
|   | Transfer status word, client error and response data from an intermediate command while keeping command input data. <a href="classlibsdi_1_1_sdi_cmd.md#a9490be5475acb6b165642dd2c3d1caf2">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_cmd.md#a33a1327fd18f767afb4baa2e5a814455">importResults</a> (const unsigned char \*<a href="classlibsdi_1_1_sdi_base.md#abc00684400484823da87a8e9d3f06267">sw12</a>, const unsigned char \*tlvData, unsigned tlvSize) |
|   | Inject result data from a call back. <a href="classlibsdi_1_1_sdi_cmd.md#a33a1327fd18f767afb4baa2e5a814455">More...</a><br/> |
| bool  | <a href="classlibsdi_1_1_sdi_cmd.md#a733bf780a710be27b4b3d95bd148e45c">get</a> (const char \*path, int &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| bool  | <a href="classlibsdi_1_1_sdi_cmd.md#aacea549b9a51b2341447610bfd407f68">get</a> (const char \*path, uint32_t &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| int  | <a href="classlibsdi_1_1_sdi_cmd.md#a68f21c216cef62cc1922cc25b07d241a">get</a> (const char \*path, unsigned char \*buffer, unsigned bufferSize) |
| bool  | <a href="classlibsdi_1_1_sdi_cmd.md#aa3551e32ad6b0779ce2597e502602c75">get</a> (const char \*path, unsigned char &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| bool  | <a href="classlibsdi_1_1_sdi_cmd.md#a5b5da404e34fc6cc0d5f989e5a1ef75e">get</a> (const char \*path, std::vector\< unsigned char \> &buffer) |
| bool  | <a href="classlibsdi_1_1_sdi_cmd.md#acdc1d042dccffeb62ba2859c9d16a87a">get</a> (const char \*path, std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| std::string  | <a href="classlibsdi_1_1_sdi_cmd.md#ac8fbd8404dfbc8ef830c77842542f38d">getString</a> (const char \*path) |
| ![-](closed.png) Public Member Functions inherited from <a href="classlibsdi_1_1_sdi_base.md">SdiBase</a> |  |
|   | <a href="classlibsdi_1_1_sdi_base.md#ad34d14385bdce6579d34f049c6d8dee5">SdiBase</a> () |
| enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">SDI_SW12</a>  | <a href="classlibsdi_1_1_sdi_base.md#a4058a7890507b92a38f3921ff4bf863b">getSdiSw12</a> () |
| int  | <a href="classlibsdi_1_1_sdi_base.md#a03cfc4186ba19fa866f27a0c12dbb4ad">getAdditionalResultValue</a> () |
|   | Access Additional Result Value if returned in SDI response. <a href="classlibsdi_1_1_sdi_base.md#a03cfc4186ba19fa866f27a0c12dbb4ad">More...</a><br/> |
| <a href="namespacelibsdi.md#a88afe55c2211351a88265153f28797e4">SDICLIENT_ERROR</a>  | <a href="classlibsdi_1_1_sdi_base.md#a167a672bfb8c6f222c4b2a255b053aec">getClientError</a> () |
|   | Access client side error codes. <a href="classlibsdi_1_1_sdi_base.md#a167a672bfb8c6f222c4b2a255b053aec">More...</a><br/> |
| enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">SDI_SW12</a>  | <a href="classlibsdi_1_1_sdi_base.md#a23032d620c1f454fc5f00ff4f2f4ceb7">receiveSW12</a> () |
|   | Receive SDI server response with no data. <a href="classlibsdi_1_1_sdi_base.md#a23032d620c1f454fc5f00ff4f2f4ceb7">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_base.md#ac8bb3912a3ce86b15842e79d0b421204">clear</a> () |
|   | clear result data obtained from SDI communication <a href="classlibsdi_1_1_sdi_base.md#ac8bb3912a3ce86b15842e79d0b421204">More...</a><br/> |
| void  | <a href="classlibsdi_1_1_sdi_base.md#a7ffb7b7b3ae189a49b5eb16b605bb574">importResults</a> (const <a href="classlibsdi_1_1_sdi_base.md">SdiBase</a> &intermediate) |
|   | set result data obtained from intermediate SDI communication <a href="classlibsdi_1_1_sdi_base.md#a7ffb7b7b3ae189a49b5eb16b605bb574">More...</a><br/> |

|  |  |
|----|----|
| Static Public Attributes |  |
| const static unsigned char  | [SDI_TEC_CHIP](#a4f66647684e3e158b193b52f566c3de8) = 1 |
| const static unsigned char  | [SDI_TEC_MAGN](#a2c7e8e561f16161b518a8c4d9717a892) = 2 |
| const static unsigned char  | [SDI_TEC_CTLS](#aa238e0ad33ea783afe0cbac0e150bc58) = 4 |
| const static unsigned char  | [SDI_TEC_MANU](#a4376c0baf8289ad0f7c087d717d31a2c) = 8 |

|  |  |
|----|----|
| Additional Inherited Members |  |
| ![-](closed.png) Protected Member Functions inherited from <a href="classlibsdi_1_1_sdi_base.md">SdiBase</a> |  |
| void  | <a href="classlibsdi_1_1_sdi_base.md#a0e6f27ea2daaead68e7b246333a65bd8">setSdiSw12</a> (enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">SDI_SW12</a> s) |
| void  | <a href="classlibsdi_1_1_sdi_base.md#a28b2175186ba74bace6610ded1c3c261">setClientError</a> (int libsdiprotocol_result) |
| ![-](closed.png) Protected Attributes inherited from <a href="classlibsdi_1_1_sdi_cmd.md">SdiCmd</a> |  |
| void \*  | <a href="classlibsdi_1_1_sdi_cmd.md#a2b7c2d6ae6cb8a37cd3cc6c2a053abbc">dataIn</a> |
|   | Command input buffer collecting TLV data items. <a href="classlibsdi_1_1_sdi_cmd.md#a2b7c2d6ae6cb8a37cd3cc6c2a053abbc">More...</a><br/> |
| void \*  | <a href="classlibsdi_1_1_sdi_cmd.md#a63c88c0318a60c296203e18195a8846a">dataOut</a> |
|   | Command response TLV data items. <a href="classlibsdi_1_1_sdi_cmd.md#a63c88c0318a60c296203e18195a8846a">More...</a><br/> |
| ![-](closed.png) Protected Attributes inherited from <a href="classlibsdi_1_1_sdi_base.md">SdiBase</a> |  |
| unsigned short  | <a href="classlibsdi_1_1_sdi_base.md#abc00684400484823da87a8e9d3f06267">sw12</a> |
| int  | <a href="classlibsdi_1_1_sdi_base.md#aec8bd96d4ee40a80283213584fb4ef05">additionalResultValue</a> |
| <a href="namespacelibsdi.md#a88afe55c2211351a88265153f28797e4">SDICLIENT_ERROR</a>  | <a href="classlibsdi_1_1_sdi_base.md#a1595e9ce662f397b69db2b335b6bc847">clientErr</a> |

## DetailedDescription {#detailed-description}

Interface for SDI Card Detection Interface, command class 23.

SDI server offers three forms of processing: Blocking, callback and polling mode. For all forms be aware that contactless card acception might generate so called EMV query call backs (Candidate List and Application Selected) that give PPSE and Final Select response discretionary data to an application to control the candidate list or contactless L2 kernel used. These call backs invoke the application\'s call back function given by <a href="group___f_u_n_c___i_n_i_t.md#ga63240773908b46180eeec866ef33f93f">EMV_CTLS_Init_Framework()</a>. On processing these call backs the application is allowed to gather transaction information from the SDI system or change parameters e.g. by <a href="sdiclient_2client_2sdi__emv_8h.md#a9eb1db9d7e8a5285150d22cb695ac4ef">SDI_CTLS_GetCandidateData()</a> or <a href="sdi__data_8h.md#aa0964da27a7a19aaae21a423f330af83">SDI_fetchTxnTags()</a>. Apart from these blocking call backs there are some others like light and sound control that do not need an answer (one-way call back). See [startSelection()](#abd641215dab1399373c2ab31e74e8343 "Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using se...").

Since returned data is pretty the same this class is also used for the MSR Read command (21-01). See [startMsrRead()](#a5d4d9b3d1806fd63f22f8d0cf1f8ff36 "Send MSR read request (21-01)").

## MemberEnumeration Documentation {#member-enumeration-documentation}

## DetectionMode <a href="#a0e6b4f9573cc4a509a0aa899db897cea" id="a0e6b4f9573cc4a509a0aa899db897cea"></a>

<p>enum [DetectionMode](#a0e6b4f9573cc4a509a0aa899db897cea)</p>

The card detection mode given to [setDetectionMode()](#a71a713082e9f559eaa5e6a48d66233d4 "Set Card Detection mode.") controls which SDI card detection approach is used when [startSelection()](#abd641215dab1399373c2ab31e74e8343 "Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using se...") is invoked

| Enumerator |  |
|----|----|
| DETECTION_MODE_BLOCKING  | <p>using 23-01 command with SDI_Send. Before use <a href="sdiprotocol_8h.md#ab08218e1215675470afea05b45bdccb9">SDI_SetDataAvailableCallback()</a> to install notification function. After notification, call [receiveTechnology()](#ad6eef14b6e8830178bd8330ef2dbcb6e "Get the Technology Selection Result.").</p> |
| DETECTION_MODE_POLLING  | <p>using 23-03 command in polling mode: Poll for technology selection result using [pollTechnology()](#ac8badf7309b3dec37c15fb5df3adfc8c "Poll for the asynchronous Card Detection status (23-04)."). This mode allows [addTechnology()](#a7ccceaf4350919543165633cbadf7ad2 "Add a technology to a running asynchronous Card Detection (23-06)") and [removeTechnology()](#aa0e4580b1535e8cf36d697d6374847a0 "Remove a technology from a running asynchronous Card Detection (23-07)") during wait for card.</p> |
| DETECTION_MODE_CALLBACK  | <p>using 23-03 command in callback mode: This mode allows [addTechnology()](#a7ccceaf4350919543165633cbadf7ad2 "Add a technology to a running asynchronous Card Detection (23-06)") and [removeTechnology()](#aa0e4580b1535e8cf36d697d6374847a0 "Remove a technology from a running asynchronous Card Detection (23-07)") during wait for card. Before use [setCallback()](#aa20cfc93106aeadbd200b8b8133d709c "Set Callback function to be called in DETECTION_MODE_CALLBACK when Card Detection ends.") to install notification function().</p> |

## Constructor& Destructor Documentation

## CardDetection() <a href="#a4272e3875f1ff737670b4470e4032404" id="a4272e3875f1ff737670b4470e4032404"></a>

<p><a href="classlibsdi_1_1_card_detection.md">CardDetection</a></p>

## \~CardDetection() <a href="#aeb4dfa0e68b1eb5ecfcd63dff40e8215" id="aeb4dfa0e68b1eb5ecfcd63dff40e8215"></a>

<p>\~<a href="classlibsdi_1_1_card_detection.md">CardDetection</a></p>

## MemberFunction Documentation {#member-function-documentation}

## addTechnology() <a href="#a7ccceaf4350919543165633cbadf7ad2" id="a7ccceaf4350919543165633cbadf7ad2"></a>

<p>enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">libsdi::SDI_SW12</a> addTechnology</p>

Add a technology to a running asynchronous Card Detection (23-06)

**Parameters**

\[in\] **technology** technology to be added \[in\] **opts** options for cts_StartSelection as described in TECSEL ADK

### Returns

SW12 returned by the SDI Server

## cardDetectedCallback() <a href="#acc0efc73ca1e0b855ccbe2650fa559c4" id="acc0efc73ca1e0b855ccbe2650fa559c4"></a>

<p>void cardDetectedCallback</p>

Internal Card Detected Callback handler function.

**Parameters**

\[in\] **dataIn** callback data received from SDI Server \[in\] **sizeIn** callback data length

## cardReadAtEpp() <a href="#ae7e1b4abf492809715029b687568c85d" id="ae7e1b4abf492809715029b687568c85d"></a>

<p>bool cardReadAtEpp</p>

Check at which device the card has been read (DFA150).

This function will deliver valid results once the card detection response has been received.

### Returns

true for card has been read at EPP, false otherwise

## clear() <a href="#aae048282c7011eedc2e0492f6421ea73" id="aae048282c7011eedc2e0492f6421ea73"></a>

<p>virtual void clear</p>

virtual

Clean up object status

Buffers, status variables and callback settings are brought back to initial state. Object is afterwards in the same state as if just constructed.

Reimplemented from <a href="classlibsdi_1_1_sdi_cmd.md#aae048282c7011eedc2e0492f6421ea73">SdiCmd</a>.

## getCardholderName() <a href="#a126687537a33e25f76cefb8d97217447" id="a126687537a33e25f76cefb8d97217447"></a>

<p>std::string getCardholderName</p>

Access card holder name from track 1 (5F20)

### Returns

Name/Christian name according ISO 7810 (ans ..26)

## getData()\[1/3\] <a href="#a11651701a8cc61638dfa1b3ae575c539" id="a11651701a8cc61638dfa1b3ae575c539"></a> {#getdata-13}

<p>int getData</p>

Access cts_WaitSelection result data (complete FFA102 content)

**Parameters**

\[out\] **data** destination buffer


{% hint style="info" %}
existing data is erased
{% endhint %}

### Returns

length of output, -1 if not present

## getData()\[2/3\] <a href="#a091870a5cadfac43e94a676da54ff5ca" id="a091870a5cadfac43e94a676da54ff5ca"></a> {#getdata-23}

<p>int getData</p>

Access cts_WaitSelection result data CTS_DATA_TAG_CARD_INFO.

**Parameters**

\[in\] **CTS_DATA_TAG** tag to be extracted \[in\] **n** number of card in case multiple cards detected, count starts with 1 \[out\] **data** destination buffer


{% hint style="info" %}
Data is appended to existing content
{% endhint %}

### Returns

length of appended data, -1 if not present

## getData()\[3/3\] <a href="#a9b780e23e23268391d95fb6123a64c36" id="a9b780e23e23268391d95fb6123a64c36"></a> {#getdata-33}

<p>int getData</p>

Access cts_WaitSelection result data CTS_DATA_TAG_CARD_INFO.

**Parameters**

\[in\] **CTS_DATA_TAG** tag to be extracted \[out\] **data** destination buffer


{% hint style="info" %}
Data is appended to existing content
{% endhint %}

### Returns

length of appended data, -1 if not present

## getPan() <a href="#a05af9f3debd343cbfbc8a57c9a75f632" id="a05af9f3debd343cbfbc8a57c9a75f632"></a>

<p>std::string getPan</p>

Access PAN from mag. stripe or manual entry (DF1A)

### Returns

an ..19

## getPluginResponseData()\[1/3\] <a href="#aae35f08592a982e6a936085b657efd27" id="aae35f08592a982e6a936085b657efd27"></a> {#getpluginresponsedata-13}

<p>bool getPluginResponseData</p>

Access plugin response data (FFA107, DFA101, DFA10C, DFA10D)

**Parameters**

\[out\] **results** plugin ids, response codes and response data

### Returns

true if any plugin result has been found

## getPluginResponseData()\[2/3\] <a href="#a76dd851840d45388ad42ca8c1ee57074" id="a76dd851840d45388ad42ca8c1ee57074"></a> {#getpluginresponsedata-23}

<p>int getPluginResponseData</p>

Access plugin response data (DFA101) in case one plugin has been triggered.

**Parameters**

\[out\] **data** plugin response data (Note: Data is appended to existing content)

### Returns

length of appended data, -1 if not present

## getPluginResponseData()\[3/3\] <a href="#acfed80583b45ecca83c85e0f076d4296" id="acfed80583b45ecca83c85e0f076d4296"></a> {#getpluginresponsedata-33}

<p>int getPluginResponseData</p>

Access plugin response data (FFA107, DFA101, DFA10C, DFA10D)

**Parameters**

\[in\] **index** for iterating the result data, starting with 0 \[out\] **pluginId** return value of a plugin\'s moduleID function also used as INS byte of SDI 26-xx command to invoke a plugin, 0 if not available \[out\] **pluginResponseCode** plugin\'s processTrigger function return value, SDI_SW12_NONE if not available \[out\] **data** plugin response data (Note: Data is appended to existing content)

### Returns

length of appended data, -1 if not present = end of iteration

## getServiceCode() <a href="#a73cf8d35894bb312acc10fe70d69abd9" id="a73cf8d35894bb312acc10fe70d69abd9"></a>

<p>std::string getServiceCode</p>

Access service code from track 3 (5F30)

### Returns

n 3

## getString() <a href="#ade73564c46848deb409a02a81b4f2b75" id="ade73564c46848deb409a02a81b4f2b75"></a>

<p>std::string getString</p>

Access cts_WaitSelection result data (FFA102) CTS_DATA_TAG_VAS_DATA: JSON string returned by NFC_VAS_Activate or NFC_VAS_Decrypt (DFDB24)

**Parameters**

\[in\] **CTS_DATA_TAG** item to be read

### Returns

JSON string from NFC ADK

## getTecselData() <a href="#ac1173d06deadb7bdd61b426c7a011d0a" id="ac1173d06deadb7bdd61b426c7a011d0a"></a>

<p>int getTecselData</p>

Access cts_WaitSelection result data in case CTS_DATA_TLV is not set (<a href="classlibsdi_1_1_s_d_i.md">SDI</a> tag DFA154) This can include either the EMV-ADK CTLS framework response code (result of continue offline) or the contactless card type (result of smart reset).

**Parameters**

\[out\] **data** destination buffer


{% hint style="info" %}
Data is appended to existing content
{% endhint %}

### Returns

length of appended data, -1 if not present

## getTrack1() <a href="#a1e160f7c099a9231095fa7c70ede0372" id="a1e160f7c099a9231095fa7c70ede0372"></a>

<p>std::string getTrack1</p>

Access mag. stripe track 1 (DFA040)

### Returns

ans ..79

## getTrack2() <a href="#acc3a5abd286a96860c86b88539c77d23" id="acc3a5abd286a96860c86b88539c77d23"></a>

<p>std::string getTrack2</p>

Access track 2 from mag. stripe (DF49)

### Returns

ans ..40

## getTrack2Bin() <a href="#a1f94c9d8513a5b7b62d8486c7b9c8b04" id="a1f94c9d8513a5b7b62d8486c7b9c8b04"></a>

<p>int getTrack2Bin</p>

Access obfuscated track 2 data (DF1B) Note: Data is appended to existing content.

### Returns

length of appended data ..20, -1 if not present

## getValue()\[1/2\] <a href="#a44af5b7a2f513acb372ed163d4694a19" id="a44af5b7a2f513acb372ed163d4694a19"></a> {#getvalue-12}

<p>unsigned char getValue</p>

Access cts_WaitSelection result data tags of 1 byte length.

**Parameters**

\[in\] **CTS_DATA_TAG** tag to be extracted \[in\] **n** number of card in case multiple cards detected, count starts with 1 \[in\] **defaultValue** default value to be returned for the case that requested data is not found

### Returns

requested value or defaultValue if tag not present

## getValue()\[2/2\] <a href="#a5029da404b1443022812c57236837716" id="a5029da404b1443022812c57236837716"></a> {#getvalue-22}

<p>unsigned char getValue</p>

Access cts_WaitSelection result data tags of 1 byte length (FFA102) CTS_DATA_TAG_NFC_RESULT CTS_DATA_TAG_CARDS_TOTAL_COUNT CTS_DATA_TAG_CARDS_A CTS_DATA_TAG_CARDS_B CTS_DATA_TAG_CARDS_F CTS_DATA_TAG_CARD_TYPE CTS_DATA_TAG_VAS_RESULT CTS_DATA_TAG_EMV_RESULT CTS_DATA_TAG_VAS_DECRYPT_DATA_RESULT.

**Parameters**

\[in\] **CTS_DATA_TAG** tag to be extracted \[in\] **defaultValue** default value to be returned for the case that requested data is not found

### Returns

requested value or defaultValue if tag not present

## msrGetCardSpecificToken() <a href="#aa204675a89680c85dcfffc81b89d5f2b" id="aa204675a89680c85dcfffc81b89d5f2b"></a>

<p>int msrGetCardSpecificToken</p>

Read card specific token (DFA014) optionally returned by MSR Read command

**Parameters**

\[out\] **token** buffer for token data Note data is appended

### Returns

data length, -1 if not present

## msrGetTrackStatus() <a href="#a94ecdcadeb9ee37d90150c2aefb07383" id="a94ecdcadeb9ee37d90150c2aefb07383"></a>

<p>int msrGetTrackStatus</p>

Access MSR-ADK track status code (MSR_STATUS_xxx in msr/msr_common.h) (DFA034)

Only available if technology selection result is magnetic stripe read.

**Parameters**

\[in\] **track** track number 1..3

### Returns

MSR_STATUS_xxx or -1 if not available

## msrSetOptions() <a href="#a065d25439941338d5f4c36cbb528ca6b" id="a065d25439941338d5f4c36cbb528ca6b"></a>

<p>int msrSetOptions</p>

Set MSR options (21-03)

These options configure the behavior of magnetic card reader library, set by <a href="msr_8h.md#ac3c6f568aa57690a8b369936fc362c2a">MSR_SetOptions()</a>.

Serialization information can be found in <a href="classlibsdi_1_1_s_d_i.md">SDI</a> docu <a href="pg_sdi_users_guide.md#subsubsec_sdi_msr_set_options">MSR Set Options (21-03)</a>

### Returns

0 if successful, -1 invalid parameter, SDI command was not sent -2 SDI server error, check sw12 for more details

## pollTechnology() <a href="#ac8badf7309b3dec37c15fb5df3adfc8c" id="ac8badf7309b3dec37c15fb5df3adfc8c"></a>

<p>unsigned char pollTechnology</p>

Poll for the asynchronous Card Detection status (23-04).

In case of problem, when \'0\' is returned use getSW12() to retrieve the SDI Server SW1 SW2.

### Returns

selected technology SDI_TEC_CHIP, SDI_TEC_MAGN, SDI_TEC_CTLS, SDI_TEC_MANU or 0 in case of in progress or failure

## receiveTechnology() <a href="#ad6eef14b6e8830178bd8330ef2dbcb6e" id="ad6eef14b6e8830178bd8330ef2dbcb6e"></a>

<p>unsigned char receiveTechnology</p>

Get the Technology Selection Result.

In case of problem, when \'0\' is returned use <a href="classlibsdi_1_1_sdi_base.md#a4058a7890507b92a38f3921ff4bf863b">getSdiSw12()</a> to retrieve the SDI Server SW1 SW2.

### Returns

selected technology SDI_TEC_CHIP, SDI_TEC_MAGN, SDI_TEC_CTLS, SDI_TEC_MANU or 0 in case of failure or MSR Read

### Getters- Card Detection {#getters---card-detection}

[getPan()](#a05af9f3debd343cbfbc8a57c9a75f632 "Access PAN from mag. stripe or manual entry (DF1A)") (DF1A)
[getTrack2()](#acc3a5abd286a96860c86b88539c77d23 "Access track 2 from mag. stripe (DF49)") (DF49)
[getTrack2Bin()](#a1f94c9d8513a5b7b62d8486c7b9c8b04 "Access obfuscated track 2 data (DF1B) Note: Data is appended to existing content.") (DF1B)
[getCardholderName()](#a126687537a33e25f76cefb8d97217447 "Access card holder name from track 1 (5F20)") (5F20)
[getServiceCode()](#a73cf8d35894bb312acc10fe70d69abd9 "Access service code from track 3 (5F30)") (5F30)
[msrGetTrackStatus()](#a94ecdcadeb9ee37d90150c2aefb07383) (DFA034)
msrGetTrack1() (DFA040)
[getPluginResponseData()](#a76dd851840d45388ad42ca8c1ee57074 "Access plugin response data (DFA101) in case one plugin has been triggered.") (DFA101)
[cardReadAtEpp()](#ae7e1b4abf492809715029b687568c85d "Check at which device the card has been read (DFA150).") (DFA150)
[getValue()](#a5029da404b1443022812c57236837716 "Access cts_WaitSelection result data tags of 1 byte length (FFA102) CTS_DATA_TAG_NFC_RESULT CTS_DATA_...") (FFA102)
[getData()](#a11651701a8cc61638dfa1b3ae575c539 "Access cts_WaitSelection result data (complete FFA102 content)") (FFA102)
[getString()](#ade73564c46848deb409a02a81b4f2b75 "Access cts_WaitSelection result data (FFA102) CTS_DATA_TAG_VAS_DATA: JSON string returned by NFC_VAS_...") (FF102)
<a href="classlibsdi_1_1_sdi_base.md#a4058a7890507b92a38f3921ff4bf863b">getSdiSw12()</a> inherited from <a href="classlibsdi_1_1_sdi_base.md">SdiBase</a>
<a href="classlibsdi_1_1_sdi_base.md#a167a672bfb8c6f222c4b2a255b053aec">getClientError()</a> inherited from <a href="classlibsdi_1_1_sdi_base.md">SdiBase</a>

### Getters- MSR Read {#getters---msr-read}

[getPan()](#a05af9f3debd343cbfbc8a57c9a75f632 "Access PAN from mag. stripe or manual entry (DF1A)") (DF1A)
[getTrack2()](#acc3a5abd286a96860c86b88539c77d23 "Access track 2 from mag. stripe (DF49)") (DF49)
[getTrack2Bin()](#a1f94c9d8513a5b7b62d8486c7b9c8b04 "Access obfuscated track 2 data (DF1B) Note: Data is appended to existing content.") (DF1B)
[getCardholderName()](#a126687537a33e25f76cefb8d97217447 "Access card holder name from track 1 (5F20)") (5F20)
[getServiceCode()](#a73cf8d35894bb312acc10fe70d69abd9 "Access service code from track 3 (5F30)") (5F30)
[msrGetTrackStatus()](#a94ecdcadeb9ee37d90150c2aefb07383) (DFA034)
[msrGetCardSpecificToken()](#aa204675a89680c85dcfffc81b89d5f2b) (DFA014)
msrGetTrack1() (DFA040)
[getPluginResponseData()](#a76dd851840d45388ad42ca8c1ee57074 "Access plugin response data (DFA101) in case one plugin has been triggered.") (DFA101)
<a href="classlibsdi_1_1_sdi_base.md#a4058a7890507b92a38f3921ff4bf863b">getSdiSw12()</a> inherited from <a href="classlibsdi_1_1_sdi_base.md">SdiBase</a>
<a href="classlibsdi_1_1_sdi_base.md#a167a672bfb8c6f222c4b2a255b053aec">getClientError()</a> inherited from <a href="classlibsdi_1_1_sdi_base.md">SdiBase</a>

## removeTechnology() <a href="#aa0e4580b1535e8cf36d697d6374847a0" id="aa0e4580b1535e8cf36d697d6374847a0"></a>

<p>enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">libsdi::SDI_SW12</a> removeTechnology</p>

Remove a technology from a running asynchronous Card Detection (23-07)

**Parameters**

\[in\] **technology** technology to be removed

### Returns

SW12 returned by the SDI Server

## setAlternativeInputFormat() <a href="#a3e468348fad6b657f0cea8f3ccfaa6f6" id="a3e468348fad6b657f0cea8f3ccfaa6f6"></a>

<p>void setAlternativeInputFormat</p>

Configure alternate input format string for CVV value.

**Parameters**

\[in\] **f** format string

## setCallback() <a href="#aa20cfc93106aeadbd200b8b8133d709c" id="aa20cfc93106aeadbd200b8b8133d709c"></a>

<p>void setCallback</p>

Set Callback function to be called in [DETECTION_MODE_CALLBACK](#a0e6b4f9573cc4a509a0aa899db897ceaa258ceb8db19545c478b1c9342b535458 "using 23-03 command in callback mode: This mode allows addTechnology() and removeTechnology() during ...") when Card Detection ends.

**Parameters**

\[in\] **cb** callback function pointer \[in\] **ctx** callback context to be provided back

## setCancelButton() <a href="#a1cf13e9df55e7572debed5522d9eaf29" id="a1cf13e9df55e7572debed5522d9eaf29"></a>

<p>void setCancelButton</p>

Method for activation of cancel button.

**Parameters**

\[in\] **enable** flag

## setCardEntryValueDeativation() <a href="#aacf3c852c0ccedfb8e493ac0d4aafe01" id="aacf3c852c0ccedfb8e493ac0d4aafe01"></a>

<p>void setCardEntryValueDeativation</p>

Configure which input is skipped at manual card data entry.

**Parameters**

\[in\] **b** bit field

## setCardRemovalTimeout() <a href="#ae95fd131087aa3d21c93e513104f38ed" id="ae95fd131087aa3d21c93e513104f38ed"></a>

<p>void setCardRemovalTimeout</p>

For hybrid card readers set timeout for mag. stripe data available after start of card pull-out (DFA153).

This setter modifies the [startSelection()](#abd641215dab1399373c2ab31e74e8343 "Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using se...") (23-01, 23-03) and [startMsrRead()](#a5d4d9b3d1806fd63f22f8d0cf1f8ff36 "Send MSR read request (21-01)") (21-01) commands. It is forwarded to technology selection <a href="group___t_e_c___o_p_t_i_o_n___t_a_g_s.md#gac87bf22ae5667cc2b22f86aad8218ce5">CTS_OPTION_TAG_UX_MSR_TIMEOUT</a>.

**Parameters**

\[in\] **timeout_ms** timeout in milliseconds ..65535

## setDetectionMode() <a href="#a71a713082e9f559eaa5e6a48d66233d4" id="a71a713082e9f559eaa5e6a48d66233d4"></a>

<p>void setDetectionMode</p>

Set Card Detection mode.

**Parameters**

\[in\] **mode** Card Detection mode

## setTecConfig() <a href="#a81f193951a33fb573bfde228436b9a03" id="a81f193951a33fb573bfde228436b9a03"></a>

<p>void setTecConfig</p>

Set TECSEL ADK configuration (DFA133)

**Parameters**

\[in\] **opts** cts_SetOptions() parameter as described by TECSEL ADK

## setTecStartOptions() <a href="#aede6edfe75cdcf4d2cf7abfa28fc8dd8" id="aede6edfe75cdcf4d2cf7abfa28fc8dd8"></a>

<p>void setTecStartOptions</p>

Set options for <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a> send by [startSelection()](#abd641215dab1399373c2ab31e74e8343 "Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using se...") (DFA12A)

**Parameters**

\[in\] **opts** cts_StartSelection options of up to 16 bytes length

## startMsrRead() <a href="#a5d4d9b3d1806fd63f22f8d0cf1f8ff36" id="a5d4d9b3d1806fd63f22f8d0cf1f8ff36"></a>

<p>int startMsrRead</p>

Send MSR read request (21-01)

This command is like [startSelection()](#abd641215dab1399373c2ab31e74e8343 "Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using se...") in blocking mode, use it with <a href="sdiprotocol_8h.md#ab08218e1215675470afea05b45bdccb9">SDI_SetDataAvailableCallback()</a>. Once response is available use [receiveTechnology()](#ad6eef14b6e8830178bd8330ef2dbcb6e "Get the Technology Selection Result.") or <a href="classlibsdi_1_1_sdi_cmd.md#a22eddbbef80354a4641b55828346c7d7">receive()</a> to receive the response and then call the appropriate getters for reading the result data.

### Setters

[setCardRemovalTimeout()](#ae95fd131087aa3d21c93e513104f38ed "For hybrid card readers set timeout for mag. stripe data available after start of card pull-out (DFA1...") (DFA153)

**Parameters**

\[in\] **timeout_sec** timeout in seconds (P2 & DFA01B)

### Returns

result of <a href="sdiprotocol_8h.md#ab3428d0ca92d1516b4efaa2ed7849795">SDI_Send()</a>

## startSelection() <a href="#abd641215dab1399373c2ab31e74e8343" id="abd641215dab1399373c2ab31e74e8343"></a>

<p>int startSelection</p>

Start Technology Selection (23-01) or (23-03) according to the previously set detection mode using [setDetectionMode()](#a71a713082e9f559eaa5e6a48d66233d4 "Set Card Detection mode."). Default mode is the blocking mode.

- In Blocking mode, this function is to be used with <a href="sdiprotocol_8h.md#ab08218e1215675470afea05b45bdccb9">SDI_SetDataAvailableCallback()</a>. Once response is available use [receiveTechnology()](#ad6eef14b6e8830178bd8330ef2dbcb6e "Get the Technology Selection Result.") to get the output.

- In Callback mode this function is to be used with the callback set using [setCallback()](#aa20cfc93106aeadbd200b8b8133d709c "Set Callback function to be called in DETECTION_MODE_CALLBACK when Card Detection ends."). Once response is available the <a href="classlibsdi_1_1_card_detection.md">CardDetection</a> object will be automatically filled with the data received from SDI Server and the callback function will be called.

- In Polling mode this function is to be used with the [pollTechnology()](#ac8badf7309b3dec37c15fb5df3adfc8c "Poll for the asynchronous Card Detection status (23-04).") to get the status and the result of the card detection.

  Other functions controlling technology selection apart from EMV CTLS configuration are [setTecConfig()](#a81f193951a33fb573bfde228436b9a03 "Set TECSEL ADK configuration (DFA133)") and [msrSetOptions()](#a065d25439941338d5f4c36cbb528ca6b "Set MSR options (21-03)").

### Setters

[setCancelButton()](#a1cf13e9df55e7572debed5522d9eaf29 "Method for activation of cancel button.") (DFA109)
[setTecStartOptions()](#aede6edfe75cdcf4d2cf7abfa28fc8dd8 "Set options for cts_StartSelection() send by startSelection() (DFA12A)") (DFA12A)
[setCardEntryValueDeativation()](#aacf3c852c0ccedfb8e493ac0d4aafe01 "Configure which input is skipped at manual card data entry.") (DFA017)
[setAlternativeInputFormat()](#a3e468348fad6b657f0cea8f3ccfaa6f6 "Configure alternate input format string for CVV value.") (DFA01A)
[setTecConfig()](#a81f193951a33fb573bfde228436b9a03 "Set TECSEL ADK configuration (DFA133)") (DFA133)
[setCardRemovalTimeout()](#ae95fd131087aa3d21c93e513104f38ed "For hybrid card readers set timeout for mag. stripe data available after start of card pull-out (DFA1...") (DFA153)

**Parameters**

\[in\] **supportedTechnologies** technologies to be detected (DFA108) \[in\] **seconds** timeout in seconds \[1 .. 1280, 65536\] values above one hour trigger the maximal value (P2 & DFA01B)

### Returns

return value from <a href="sdiprotocol_8h.md#ab3428d0ca92d1516b4efaa2ed7849795">SDI_Send()</a>

## stopSelection() <a href="#a1eab262c8c87517bc6d62fe11b5f0927" id="a1eab262c8c87517bc6d62fe11b5f0927"></a>

<p>enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">libsdi::SDI_SW12</a> stopSelection</p>

Abort Technology Selection via SDI Server\'s Sys Abort (20-02) when in blocking mode, otherwise send Stop Card Detection (23-05).

### Returns

SW12 returned by the SDI Server


{% hint style="info" %}
You need to call [receiveTechnology()](#ad6eef14b6e8830178bd8330ef2dbcb6e "Get the Technology Selection Result.") hereafter to eat the abort result from the IP stack.
{% endhint %}

## FieldDocumentation {#field-documentation}

## SDI_TEC_CHIP <a href="#a4f66647684e3e158b193b52f566c3de8" id="a4f66647684e3e158b193b52f566c3de8"></a>

<p>const static unsigned char SDI_TEC_CHIP = 1</p>

static

## SDI_TEC_CTLS <a href="#aa238e0ad33ea783afe0cbac0e150bc58" id="aa238e0ad33ea783afe0cbac0e150bc58"></a>

<p>const static unsigned char SDI_TEC_CTLS = 4</p>

static

## SDI_TEC_MAGN <a href="#a2c7e8e561f16161b518a8c4d9717a892" id="a2c7e8e561f16161b518a8c4d9717a892"></a>

<p>const static unsigned char SDI_TEC_MAGN = 2</p>

static

## SDI_TEC_MANU <a href="#a4376c0baf8289ad0f7c087d717d31a2c" id="a4376c0baf8289ad0f7c087d717d31a2c"></a>

<p>const static unsigned char SDI_TEC_MANU = 8</p>

static

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sdiclient/client/<a href="sdi__if_8h_source.md">sdi_if.h</a>
