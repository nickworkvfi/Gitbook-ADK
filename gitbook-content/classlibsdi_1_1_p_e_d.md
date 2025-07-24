---
hidden: true
title: PED Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods)

`#include <`<a href="sdi__if_8h_source.md">sdi_if.h</a>`>`

Inheritance diagram for PED:

![Inheritance graph](classlibsdi_1_1_p_e_d__inherit__graph.png)

\[<a href="graph_legend.md">legend</a>\]

Collaboration diagram for PED:

![Collaboration graph](classlibsdi_1_1_p_e_d__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

|  |  |
|----|----|
| Public Types |  |
| enum   | [NavigatorMode](#aa7abea10c4888b7b63ce4085016378b9) { [NAVIGATOR_MODE_OFF](#aa7abea10c4888b7b63ce4085016378b9a0a35e411651c579d780f67e80a8d4a89), [NAVIGATOR_MODE_DOUBLE_TAB](#aa7abea10c4888b7b63ce4085016378b9ab820c8946903beae69739681802aee1a), [NAVIGATOR_MODE_TACTILE_BUTTON](#aa7abea10c4888b7b63ce4085016378b9a11d9ec9b9af09fbf56f1b8d11194b4c1) } |

|  |  |
|----|----|
| Public Member Functions |  |
| void  | [setTimeout](#a5cafd646c856f6c7687428b41cb97f36) (unsigned seconds) |
|   | Set PIN input dialog timeout (DFA005) for [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode)."). [More\...](#a5cafd646c856f6c7687428b41cb97f36)<br/> |
| bool  | [setDefaultTimeout](#a13e92404ba1a5650243c23613f2c8fbf) (unsigned seconds) |
|   | Configure PIN input dialog default timeout (22-02) [More\...](#a13e92404ba1a5650243c23613f2c8fbf)<br/> |
| void  | [setTouchCoordinates](#a9cc16dd57c921d5d04db62f38f8226c1) (const unsigned char \*array, unsigned size) |
|   | configure touch coordinates (DFA024) for [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode)."). [More\...](#a9cc16dd57c921d5d04db62f38f8226c1)<br/> |
| void  | [setNavigatorMode](#a133b4ba8c1786a1c3f0f7b39e0ec2dfd) (enum [NavigatorMode](#aa7abea10c4888b7b63ce4085016378b9) mode) |
|   | Activate Navigator Mode (DFA025) for [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode)."). [More\...](#a133b4ba8c1786a1c3f0f7b39e0ec2dfd)<br/> |
| void  | [setPinDigitCountMinMax](#a6bff7c1fd7963b8a46760d1b56799c82) (unsigned char <a href="http__get__curl_8c.md#a8195a86b6d75b9a3939505e8bb50021e">min</a>, unsigned char max) |
|   | Change PIN digit count limits (DFA02B and DFA02C) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06)."), [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode)."). [More\...](#a6bff7c1fd7963b8a46760d1b56799c82)<br/> |
| void  | [setLanguage](#a98e014cadc49bad1311f5a4ed7ac808b) (unsigned char lang) |
|   | Set language (DFA008) for Pin input dialog of [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01)."). [More\...](#a98e014cadc49bad1311f5a4ed7ac808b)<br/> |
| void  | [setAmount](#ac0d27bf33ac613abc2f2b08af96df81c) (const unsigned char \*amount) |
|   | Amount (9F02) for PIN input dialog of [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") [More\...](#ac0d27bf33ac613abc2f2b08af96df81c)<br/> |
| void  | [setCurrency](#adc08049865cac87bb09f0c5876b41f11) (const unsigned char \*currency) |
|   | Currency (5F2A) for PIN input dialog of [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") [More\...](#adc08049865cac87bb09f0c5876b41f11)<br/> |
| void  | [setAppLabel](#ab4bb33c2a83ab5bf8f420bb8979986df) (const std::string &appLabel) |
|   | Card application label (DFA037) for PIN input dialog of [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") [More\...](#ab4bb33c2a83ab5bf8f420bb8979986df)<br/> |
| int  | [startPinInput](#a72d4729d98f034d6d1de480fd7ead4c4) () |
|   | Send command for PIN input (22-01). [More\...](#a72d4729d98f034d6d1de480fd7ead4c4)<br/> |
| int  | [startPinInput](#a36f4fbbb6cd946a49aaf4c0069e9e2de) (bool enablePinBypass) |
|   | Send command for PIN input (22-01). [More\...](#a36f4fbbb6cd946a49aaf4c0069e9e2de)<br/> |
| bool  | [startPinEntry](#a54143c9cc693d00b948f64b3372cb4bc) (unsigned pinBypassKey=0) |
|   | Send command for asynchronous PIN input (22-03, polling mode). [More\...](#a54143c9cc693d00b948f64b3372cb4bc)<br/> |
| bool  | [pollPinEntry](#a38a6450328edc2164a74cf4fda14c79c) (std::vector\< unsigned char \> &status) |
|   | poll PIN input status after [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode).") (22-04) [More\...](#a38a6450328edc2164a74cf4fda14c79c)<br/> |
| bool  | [stopPinEntry](#a04d8e1713192151774e9bc1692ffbf3c) () |
|   | abort PIN entry (22-05) [More\...](#a04d8e1713192151774e9bc1692ffbf3c)<br/> |
| bool  | [setPinInputClearKeyMode](#a08cdfc3ee473c2c94fc3847ec26ee775) (bool clearAllDigits) |
|   | Configure behavior of the backspace key for the PIN input dialog (22-06). [More\...](#a08cdfc3ee473c2c94fc3847ec26ee775)<br/> |
| void  | [setClearKeyMode](#a785f227581bd37d2c8cb6cee848122dc) (bool clearAllDigits) |
|   | Setter for clear key behavior (DFA02F) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06)."), [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode)."). [More\...](#a785f227581bd37d2c8cb6cee848122dc)<br/> |
| void  | [setPinBypassKeyAndMode](#a8e46927fa23ee989af96365f51c5b3ec) (unsigned char <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Set PIN bypass key and mode bit mask (DFA104) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01)."). [More\...](#a8e46927fa23ee989af96365f51c5b3ec)<br/> |
| void  | [setAutoConfirmation](#ae520c7f2f64475d71d34fa801ce5d066) (bool enable) |
|   | Set automatic confirmation when maximum digits are entered (DFA02E) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06)."), [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode)."). [More\...](#ae520c7f2f64475d71d34fa801ce5d066)<br/> |
| void  | [setDialogOptions](#aece5a11a701d18c89ebf8980cb66b525) (uint32_t options) |
|   | Set dialog option bit mask (DFA13D) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01)."). [More\...](#aece5a11a701d18c89ebf8980cb66b525)<br/> |
| void  | [setIntercharTimeout](#a21621255f3f0b9dfc0c8fcd9f0a215b0) (uint32_t millis) |
|   | Set inter-character timeout (DFA035) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01)."). [More\...](#a21621255f3f0b9dfc0c8fcd9f0a215b0)<br/> |
| void  | [setHeaderLabel](#ac7de420d901a1f439e64c5487898ae47) (const std::string &label) |
|   | Set label for header area (DFA143) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01)."). [More\...](#ac7de420d901a1f439e64c5487898ae47)<br/> |
| void  | [setEchoChar](#a157dacdca838a444ce4c0b8d136b9e63) (uint32_t unicode) |
|   | Set PIN echo character as unicode (DFA036) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01)."). [More\...](#a157dacdca838a444ce4c0b8d136b9e63)<br/> |
| bool  | [sendPinInputParameters](#a2dd6e63a41be7826b4a7d7fcc54b26bd) (bool epp=true) |
|   | Send parameters that have been set before (22-06). [More\...](#a2dd6e63a41be7826b4a7d7fcc54b26bd)<br/> |
| enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">SDI_SW12</a>  | [receiveGetPinResult](#af80596e1dd022dce76a2420ef9b1c3da) () |
|   | Receive Pin Input result after [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01)."). [More\...](#af80596e1dd022dce76a2420ef9b1c3da)<br/> |
| bool  | [getPinBypassKey](#a0e7115420a4ab303510fdbcf976f2c5b) (unsigned char &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Get PIN bypass key after [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [receiveGetPinResult()](#af80596e1dd022dce76a2420ef9b1c3da "Receive Pin Input result after startPinInput()."). [More\...](#a0e7115420a4ab303510fdbcf976f2c5b)<br/> |
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
| virtual void  | <a href="classlibsdi_1_1_sdi_cmd.md#aae048282c7011eedc2e0492f6421ea73">clear</a> () |
|   | Remove all SDI command command input data. <a href="classlibsdi_1_1_sdi_cmd.md#aae048282c7011eedc2e0492f6421ea73">More...</a><br/> |
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

Interface for PIN input dialog control *<a href="classlibsdi_1_1_p_e_d.md">PED</a> Interface*

## MemberEnumeration Documentation {#member-enumeration-documentation}

## NavigatorMode <a href="#aa7abea10c4888b7b63ce4085016378b9" id="aa7abea10c4888b7b63ce4085016378b9"></a>

<p>enum [NavigatorMode](#aa7abea10c4888b7b63ce4085016378b9)</p>

Navigator Mode is used for barrier-free PIN entry on touch-only devices

| Enumerator |  |
|----|----|
| NAVIGATOR_MODE_OFF  | <p>Navigator Mode disabled.</p> |
| NAVIGATOR_MODE_DOUBLE_TAB  | <p>mode 1 with double tap</p> |
| NAVIGATOR_MODE_TACTILE_BUTTON  | <p>mode 2 with tactile button</p> |

## MemberFunction Documentation {#member-function-documentation}

## getPinBypassKey() <a href="#a0e7115420a4ab303510fdbcf976f2c5b" id="a0e7115420a4ab303510fdbcf976f2c5b"></a>

<p>bool getPinBypassKey</p>

Get PIN bypass key after [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [receiveGetPinResult()](#af80596e1dd022dce76a2420ef9b1c3da "Receive Pin Input result after startPinInput().").

This is for the case that multiple bypass keys are possible

**Parameters**

\[out\] **value** key code (see 22-01 documentation, DFA038) return true if information had been received

## pollPinEntry() <a href="#a38a6450328edc2164a74cf4fda14c79c" id="a38a6450328edc2164a74cf4fda14c79c"></a>

<p>bool pollPinEntry</p>

poll PIN input status after [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode).") (22-04)

**Parameters**

\[out\] **status** like described for tag DFA000

### Returns

true for success

## receiveGetPinResult() <a href="#af80596e1dd022dce76a2420ef9b1c3da" id="af80596e1dd022dce76a2420ef9b1c3da"></a>

<p>enum <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9">SDI_SW12</a> receiveGetPinResult</p>

Receive Pin Input result after [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).").

This is the alternative to <a href="classlibsdi_1_1_sdi_base.md#a23032d620c1f454fc5f00ff4f2f4ceb7">receiveSW12()</a> if data is expected, e.g. if two bypass keys are possible and [getPinBypassKey()](#a0e7115420a4ab303510fdbcf976f2c5b "Get PIN bypass key after startPinInput() and receiveGetPinResult().") will be called later.

## sendPinInputParameters() <a href="#a2dd6e63a41be7826b4a7d7fcc54b26bd" id="a2dd6e63a41be7826b4a7d7fcc54b26bd"></a>

<p>bool sendPinInputParameters</p>

Send parameters that have been set before (22-06).

Note: This command should be used to configure standard mode behavior only and therefore the command destination defaults to EPP

### Setters

[setClearKeyMode()](#a785f227581bd37d2c8cb6cee848122dc "Setter for clear key behavior (DFA02F) for sendPinInputParameters(), startPinInput() and startPinEntr...") for DFA02F
[setPinBypassKeyAndMode()](#a8e46927fa23ee989af96365f51c5b3ec "Set PIN bypass key and mode bit mask (DFA104) for sendPinInputParameters() and startPinInput().") for DFA104
[setPinDigitCountMinMax()](#a6bff7c1fd7963b8a46760d1b56799c82 "Change PIN digit count limits (DFA02B and DFA02C) for sendPinInputParameters(), startPinInput() and s...") for DFA02B and DFA02C
[setDialogOptions()](#aece5a11a701d18c89ebf8980cb66b525 "Set dialog option bit mask (DFA13D) for sendPinInputParameters() and startPinInput().") for DFA13D
[setHeaderLabel()](#ac7de420d901a1f439e64c5487898ae47 "Set label for header area (DFA143) for sendPinInputParameters() and startPinInput().") for DFA143
[setIntercharTimeout()](#a21621255f3f0b9dfc0c8fcd9f0a215b0 "Set inter-character timeout (DFA035) for sendPinInputParameters() and startPinInput().") for DFA035
[setAutoConfirmation()](#ae520c7f2f64475d71d34fa801ce5d066 "Set automatic confirmation when maximum digits are entered (DFA02E) for sendPinInputParameters(),...") for DFA02E
[setEchoChar()](#a157dacdca838a444ce4c0b8d136b9e63 "Set PIN echo character as unicode (DFA036) for sendPinInputParameters() and startPinInput().") for DFA036

**Parameters**

\[in\] **epp** command destination, default is true for EPP

## setAmount() <a href="#ac0d27bf33ac613abc2f2b08af96df81c" id="ac0d27bf33ac613abc2f2b08af96df81c"></a>

<p>void setAmount</p>

Amount (9F02) for PIN input dialog of [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).")

{% hint style="info" %}
this option is valid in standard mode only
{% endhint %} **Parameters**

\[in\] **amount** n12 (6 bytes)

## setAppLabel() <a href="#ab4bb33c2a83ab5bf8f420bb8979986df" id="ab4bb33c2a83ab5bf8f420bb8979986df"></a>

<p>void setAppLabel</p>

Card application label (DFA037) for PIN input dialog of [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).")

{% hint style="info" %}
this option is valid in standard mode only
{% endhint %} **Parameters**

\[in\] **appLabel** Card application as UTF-8 string

## setAutoConfirmation() <a href="#ae520c7f2f64475d71d34fa801ce5d066" id="ae520c7f2f64475d71d34fa801ce5d066"></a>

<p>void setAutoConfirmation</p>

Set automatic confirmation when maximum digits are entered (DFA02E) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06)."), [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode).").

**Parameters**

\[in\] **enable** enable auto confirmation

## setClearKeyMode() <a href="#a785f227581bd37d2c8cb6cee848122dc" id="a785f227581bd37d2c8cb6cee848122dc"></a>

<p>void setClearKeyMode</p>

Setter for clear key behavior (DFA02F) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06)."), [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode).").

**Parameters**

\[in\] **clearAllDigits** true: Clear all input, false: Just clear one digit.

## setCurrency() <a href="#adc08049865cac87bb09f0c5876b41f11" id="adc08049865cac87bb09f0c5876b41f11"></a>

<p>void setCurrency</p>

Currency (5F2A) for PIN input dialog of [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).")

{% hint style="info" %}
this option is valid in standard mode only
{% endhint %} **Parameters**

\[in\] **currency** n3 (2 bytes, padded left with \'0\')

## setDefaultTimeout() <a href="#a13e92404ba1a5650243c23613f2c8fbf" id="a13e92404ba1a5650243c23613f2c8fbf"></a>

<p>bool setDefaultTimeout</p>

Configure PIN input dialog default timeout (22-02)

This timeout will be applied in case [setTimeout()](#a5cafd646c856f6c7687428b41cb97f36 "Set PIN input dialog timeout (DFA005) for startPinEntry().") has not been invoked.

**Parameters**

\[in\] **seconds** PIN input dialog timeout

### Returns

true in case of successful execution

## setDialogOptions() <a href="#aece5a11a701d18c89ebf8980cb66b525" id="aece5a11a701d18c89ebf8980cb66b525"></a>

<p>void setDialogOptions</p>

Set dialog option bit mask (DFA13D) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).").

**Parameters**

\[in\] **options** Option bit mask

## setEchoChar() <a href="#a157dacdca838a444ce4c0b8d136b9e63" id="a157dacdca838a444ce4c0b8d136b9e63"></a>

<p>void setEchoChar</p>

Set PIN echo character as unicode (DFA036) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).").

**Parameters**

\[in\] **unicode** unicode code

## setHeaderLabel() <a href="#ac7de420d901a1f439e64c5487898ae47" id="ac7de420d901a1f439e64c5487898ae47"></a>

<p>void setHeaderLabel</p>

Set label for header area (DFA143) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).").

Setting empty value resets the default.

**Parameters**

\[in\] **label** Label

## setIntercharTimeout() <a href="#a21621255f3f0b9dfc0c8fcd9f0a215b0" id="a21621255f3f0b9dfc0c8fcd9f0a215b0"></a>

<p>void setIntercharTimeout</p>

Set inter-character timeout (DFA035) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).").

**Parameters**

\[in\] **millis** timout in milli seconds

## setLanguage() <a href="#a98e014cadc49bad1311f5a4ed7ac808b" id="a98e014cadc49bad1311f5a4ed7ac808b"></a>

<p>void setLanguage</p>

Set language (DFA008) for Pin input dialog of [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).").

{% hint style="info" %}
this option is valid in standard mode only
{% endhint %} **Parameters**

\[in\] **lang** language code

## setNavigatorMode() <a href="#a133b4ba8c1786a1c3f0f7b39e0ec2dfd" id="a133b4ba8c1786a1c3f0f7b39e0ec2dfd"></a>

<p>void setNavigatorMode</p>

Activate Navigator Mode (DFA025) for [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode).").

## setPinBypassKeyAndMode() <a href="#a8e46927fa23ee989af96365f51c5b3ec" id="a8e46927fa23ee989af96365f51c5b3ec"></a>

<p>void setPinBypassKeyAndMode</p>

Set PIN bypass key and mode bit mask (DFA104) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") and [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).").

**Parameters**

\[in\] **value** value for DFA104

## setPinDigitCountMinMax() <a href="#a6bff7c1fd7963b8a46760d1b56799c82" id="a6bff7c1fd7963b8a46760d1b56799c82"></a>

<p>void setPinDigitCountMinMax</p>

Change PIN digit count limits (DFA02B and DFA02C) for [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06)."), [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode).").

The default values are 4 and 12. Calling this method is only required if other values shall be applied.

**Parameters**

\[in\] **min** minimal number of PIN digits \[4..12\] \[in\] **max** maximal number of PIN digits \[4..12\]

## setPinInputClearKeyMode() <a href="#a08cdfc3ee473c2c94fc3847ec26ee775" id="a08cdfc3ee473c2c94fc3847ec26ee775"></a>

<p>bool setPinInputClearKeyMode</p>

Configure behavior of the backspace key for the PIN input dialog (22-06).

Note: In contrast to other setters this function sends this single configuration immediately. This is somewhat obsolete as there are [setClearKeyMode()](#a785f227581bd37d2c8cb6cee848122dc "Setter for clear key behavior (DFA02F) for sendPinInputParameters(), startPinInput() and startPinEntr...") and [sendPinInputParameters()](#a2dd6e63a41be7826b4a7d7fcc54b26bd "Send parameters that have been set before (22-06).") can do the same together with other parameters.

**Parameters**

\[in\] **clearAllDigits** true: Clear all input, false: Just clear one digit.

## setTimeout() <a href="#a5cafd646c856f6c7687428b41cb97f36" id="a5cafd646c856f6c7687428b41cb97f36"></a>

<p>void setTimeout</p>

Set PIN input dialog timeout (DFA005) for [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode).").

This timeout will be used for PIN entries started with this object and replaces the SDI services default timeout configured via setDefaultTimeout.

**Parameters**

\[in\] **seconds** PIN input dialog timeout

## setTouchCoordinates() <a href="#a9cc16dd57c921d5d04db62f38f8226c1" id="a9cc16dd57c921d5d04db62f38f8226c1"></a>

<p>void setTouchCoordinates</p>

configure touch coordinates (DFA024) for [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") and [startPinEntry()](#a54143c9cc693d00b948f64b3372cb4bc "Send command for asynchronous PIN input (22-03, polling mode).").

Each key consists of x-position b2 y-position b2 button width b2 button height b2 associated key ASCII code b1 (\"0\" .. \"9\" = \'30\' .. \'31\', cancel = \'1B\', correction = \'08\', enter = \'0D\')

**Parameters**

\[in\] **array** coordinates \[in\] **size** size of coordinates array (n\*9)

## startPinEntry() <a href="#a54143c9cc693d00b948f64b3372cb4bc" id="a54143c9cc693d00b948f64b3372cb4bc"></a>

<p>bool startPinEntry</p>

Send command for asynchronous PIN input (22-03, polling mode).

Use [pollPinEntry()](#a38a6450328edc2164a74cf4fda14c79c "poll PIN input status after startPinEntry() (22-04)") and [stopPinEntry()](#a04d8e1713192151774e9bc1692ffbf3c "abort PIN entry (22-05)") hereafter.

### Setters

[setPinDigitCountMinMax()](#a6bff7c1fd7963b8a46760d1b56799c82 "Change PIN digit count limits (DFA02B and DFA02C) for sendPinInputParameters(), startPinInput() and s...") for DFA02B and DFA02C
[setAutoConfirmation()](#ae520c7f2f64475d71d34fa801ce5d066 "Set automatic confirmation when maximum digits are entered (DFA02E) for sendPinInputParameters(),...") for DFA02E
[setClearKeyMode()](#a785f227581bd37d2c8cb6cee848122dc "Setter for clear key behavior (DFA02F) for sendPinInputParameters(), startPinInput() and startPinEntr...") for DFA02F
[setNavigatorMode()](#a133b4ba8c1786a1c3f0f7b39e0ec2dfd "Activate Navigator Mode (DFA025) for startPinInput() and startPinEntry().") for DFA025
[setTouchCoordinates()](#a9cc16dd57c921d5d04db62f38f8226c1 "configure touch coordinates (DFA024) for startPinInput() and startPinEntry().") for DFA024

**Parameters**

\[in\] **pinBypassKey** PIN bypass key (DFA02D),0: deactivate (default),ASCII code of bypass key,256 for direct PIN bypass

### Returns

true for success

## startPinInput()\[1/2\] <a href="#a72d4729d98f034d6d1de480fd7ead4c4" id="a72d4729d98f034d6d1de480fd7ead4c4"></a> {#startpininput-12}

<p>int startPinInput</p>

Send command for PIN input (22-01).

The response should be received with [receiveGetPinResult()](#af80596e1dd022dce76a2420ef9b1c3da "Receive Pin Input result after startPinInput().") or <a href="classlibsdi_1_1_sdi_base.md#a23032d620c1f454fc5f00ff4f2f4ceb7">receiveSW12()</a>. <a href="sdiprotocol_8h.md#a77a7796fbf67ab1207dd80355dfcc251">SDI_SetSdiCallback()</a> can be used to receive PIN input status messages, i.e. the digit count.

### Setters

[setTimeout()](#a5cafd646c856f6c7687428b41cb97f36 "Set PIN input dialog timeout (DFA005) for startPinEntry().") for DFA005
[setPinBypassKeyAndMode()](#a8e46927fa23ee989af96365f51c5b3ec "Set PIN bypass key and mode bit mask (DFA104) for sendPinInputParameters() and startPinInput().") for DFA104
[setTouchCoordinates()](#a9cc16dd57c921d5d04db62f38f8226c1 "configure touch coordinates (DFA024) for startPinInput() and startPinEntry().") for DFA024 (headless mode only)
[setNavigatorMode()](#a133b4ba8c1786a1c3f0f7b39e0ec2dfd "Activate Navigator Mode (DFA025) for startPinInput() and startPinEntry().") for DFA025
[setPinDigitCountMinMax()](#a6bff7c1fd7963b8a46760d1b56799c82 "Change PIN digit count limits (DFA02B and DFA02C) for sendPinInputParameters(), startPinInput() and s...") for DFA02B and DFA02C
[setClearKeyMode()](#a785f227581bd37d2c8cb6cee848122dc "Setter for clear key behavior (DFA02F) for sendPinInputParameters(), startPinInput() and startPinEntr...") for DFA02F
[setIntercharTimeout()](#a21621255f3f0b9dfc0c8fcd9f0a215b0 "Set inter-character timeout (DFA035) for sendPinInputParameters() and startPinInput().") for DFA035
[setAutoConfirmation()](#ae520c7f2f64475d71d34fa801ce5d066 "Set automatic confirmation when maximum digits are entered (DFA02E) for sendPinInputParameters(),...") for DFA02E
[setLanguage()](#a98e014cadc49bad1311f5a4ed7ac808b "Set language (DFA008) for Pin input dialog of startPinInput().") for DFA008 (standard mode only)
[setAmount()](#ac0d27bf33ac613abc2f2b08af96df81c "Amount (9F02) for PIN input dialog of startPinInput()") for 9F02 (standard mode only)
[setCurrency()](#adc08049865cac87bb09f0c5876b41f11 "Currency (5F2A) for PIN input dialog of startPinInput()") for 5F2A (standard mode only)
[setAppLabel()](#ab4bb33c2a83ab5bf8f420bb8979986df "Card application label (DFA037) for PIN input dialog of startPinInput()") for DFA037 (stanard mode only)
[setDialogOptions()](#aece5a11a701d18c89ebf8980cb66b525 "Set dialog option bit mask (DFA13D) for sendPinInputParameters() and startPinInput().") for DFA13D (standard mode only)
[setHeaderLabel()](#ac7de420d901a1f439e64c5487898ae47 "Set label for header area (DFA143) for sendPinInputParameters() and startPinInput().") for DFA143 (standard mode only)
[setEchoChar()](#a157dacdca838a444ce4c0b8d136b9e63 "Set PIN echo character as unicode (DFA036) for sendPinInputParameters() and startPinInput().") for DFA036 (standard mode only)

### Returns

return value from <a href="sdiprotocol_8h.md#ab3428d0ca92d1516b4efaa2ed7849795">SDI_Send()</a>

## startPinInput()\[2/2\] <a href="#a36f4fbbb6cd946a49aaf4c0069e9e2de" id="a36f4fbbb6cd946a49aaf4c0069e9e2de"></a> {#startpininput-22}

<p>int startPinInput</p>

Send command for PIN input (22-01).

This is for backward compatibility with previous libsdiclient versions having a default parameter. For description, see [startPinInput()](#a72d4729d98f034d6d1de480fd7ead4c4 "Send command for PIN input (22-01).") without parameters.

**Parameters**

\[in\] **enablePinBypass** if false, PIN bypass is disabled otherwise current configuration from setPinBypassKeyAndMode() is applied.

### Returns

return value from <a href="sdiprotocol_8h.md#ab3428d0ca92d1516b4efaa2ed7849795">SDI_Send()</a>

## stopPinEntry() <a href="#a04d8e1713192151774e9bc1692ffbf3c" id="a04d8e1713192151774e9bc1692ffbf3c"></a>

<p>bool stopPinEntry</p>

abort PIN entry (22-05)

### Returns

true for success

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sdiclient/client/<a href="sdi__if_8h_source.md">sdi_if.h</a>
