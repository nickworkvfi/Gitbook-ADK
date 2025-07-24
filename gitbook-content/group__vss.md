---
hidden: true
title: Vss
---

[Macros](#define-members)

|  |  |
|----|----|
| Macros |  |
| #define  | [LOAD_DUKPT_KEY](#ga2f8314814320e4351da7667a05351b91)   (0x10) |
| #define  | [LOAD_TMK_KEY](#ga84c44483f34c0d84f9417f64565115ed)   (0x11) |
| #define  | [LOAD_KEY_ENC_DATA_MSK](#gac44d638245acd1064fa841bf75d68cfe)   (0x15) |
| #define  | [LOAD_KEY_PIN_MSK](#ga9da65fd69ba099e1d6a5e9c63c0fd3fa)   (0x16) |
| #define  | [LOAD_KEY_GEN_MAC_MSK](#gadbaeedb2248878267eef9b883e441514)   (0x17) |
| #define  | [LOAD_KEY_DEC_DATA_MSK](#gae278ff558bc8dff84e612dc0d3e1ae4f)   (0x18) |
| #define  | [LOAD_KEY_VER_MAC_MSK](#gaaf79eb5edf10c8202dcfe8876baedf26)   (0x19) |
| #define  | [LOAD_KEY_KEK_MSK](#ga2abc8361ea15929c0ec2ff73e27bfb36)   (0x1A) |
| #define  | [GET_NEW_DUKPT](#ga7af69135d805e5206cf42c8783c9c8f9)   (0x28) |
| #define  | [START_TRANSACTION](#gaf1654585c80282f2dc54a9d16b915e6c)   (0x28) |
| #define  | [SET_DUKPT_MASK](#ga3a5d8d8353446c85f08767651812963b)   (0x29) |
| #define  | [SCRIPT_INIT](#gae1bdf3a721db08a56686cdc1fbd1a396)   (0x30) |
| #define  | [SCRIPT_GET_KEY_SET_INIT](#ga4c974ae980ab4b8813673b5b555836b8)   (0x32) |
| #define  | [SCRIPT_CHECK_INIT](#ga6f0b4e52bf562c5a7496865d4dffadb6)   (0x33) |
| #define  | [TEST_TMK_ENGINE](#ga95182c9326b061c4c55a66f50a2a0c56)   (0x35) |
| #define  | [TEST_DUKPT_ENGINE](#ga790e4a13adc7aec51a64ef5b360dfb3e)   (0x39) |
| #define  | [TEST_KEY_FOR_DATA](#gac7cddf4fea9c3a9797bcbcdd5d5dd91c)   (0x36) |
| #define  | [TEST_KEY_FOR_PIN](#ga44579064b0c0e6fff38ff82012880edc)   (0x37) |
| #define  | [TEST_KEY_FOR_MAC](#ga04aa97a435b4d74bf669e639ae6b15fb)   (0x38) |
| #define  | [ENCRYPT_INIT](#ga8b6f0172ea31c17b9d7aa5784c2b651a)   (0x40) |
| #define  | [ENCRYPT_ITERATION](#gadef6432b1d8f7ad14a2ba8f13f9f7a32)   (0x41) |
| #define  | [ENCRYPT_FINISH](#ga2ab5d4276702a3de7d567eb055f911f4)   (0x42) |
| #define  | [ENCRYPT_CBC_ITERATION](#ga03e6109541a1e1f33087fcc8cacefbfb)   (0x43) |
| #define  | [DECRYPT_INIT](#ga9dda1955fda005d373617cea91fa60fb)   (0x50) |
| #define  | [DECRYPT_ITERATION](#ga0f890003acddc5ab054f9be9bb9c4638)   (0x51) |
| #define  | [DECRYPT_FINISH](#ga23484114a161add6102ec674917c0666)   (0x52) |
| #define  | [DECRYPT_CBC_ITERATION](#ga286799b6e4775a2000f8f23a3deae819)   (0x53) |
| #define  | [MAC_GENERATE_INIT](#ga85df78895c20a18314d6850ce625e374)   (0x60) |
| #define  | [MAC_GENERATE_ITERATION](#ga24f89abac32c71a7d6f7f2e07a3c69a9)   (0x61) |
| #define  | [MAC_GENERATE_FINISH](#ga5cb7f35bc0bdfe24ac0f5047fac450d4)   (0x62) |
| #define  | [MAC_VERIFY_INIT](#ga86701406c0b8568a4e3c56342e3a4a5e)   (0x63) |
| #define  | [MAC_VERIFY_ITERATION](#gaa40c8ef7083d0257720ff3dcbf8aabb9)   (0x64) |
| #define  | [MAC_VERIFY_FINISH](#ga0ef87de359bc3cc2ca1e28e6ace768ae)   (0x65) |
| #define  | [PIN_INIT](#ga66a8f8bb1534842a3e7cab64637fef1f)   (0x70) |
| #define  | [ISO_0_PREPARE](#gab0401f08b432090d24c08d693c24623f)   (0x71) |
| #define  | [ISO_1_PREPARE](#ga00b2e946cd1be6cf52c2c7a4053dfbe1)   (0x72) |
| #define  | [ISO_2_PREPARE](#gacea965f7ae6b742e08f5b58bb3d5662f)   (0x73) |
| #define  | [ISO_3_PREPARE](#ga8f23d658f785f47190fec967d9783060)   (0x74) |
| #define  | [ISO_0_PREPARE_PIN_0](#gaf2d8b3378e65c59be442b014f2b8d778)   (0x80) |
| #define  | [ISO_1_PREPARE_PIN_0](#ga39c55220e84204f89781f2d6de3f6816)   (0x81) |
| #define  | [ISO_2_PREPARE_PIN_0](#ga9d809956812d078bd317d5ea51d3a3b7)   (0x82) |
| #define  | [ISO_3_PREPARE_PIN_0](#gaf265eb037a8e3c00a57d1e62a5ee1d95)   (0x83) |
| #define  | [PIN_ITERATION](#ga78fe99462d905bd0aa6f43e50052c1ed)   (0x75) |
| #define  | [PIN_FINISH](#gab26fba5550fe958a8d95fa51a700cc38)   (0x76) |
| #define  | [PIN_CANCEL](#ga5cf897892e478bad3ca024677db9651d)   (0x77) |
| #define  | [MACRO_RETRIEVE_STATUS](#ga9555597847d1ff329ee5de359d2b0814)   0xB0 |
| #define  | [MACRO_CLEAR_IV](#ga34216860584b51097a07abe8a8bfd3e8)   0xB1 |
| #define  | [MACRO_ENCRYPT_KSK](#gadf2cebcad2bc2e1912538539fc13780b)   0xB2 |
| #define  | [MACRO_DECRYPT_KSK](#gab598cbc3e161e5527d6f1a690488661c)   0xB3 |
| #define  | [MACRO_RETRIEVE_PPID](#ga4be5ce903079bf3d5be7ae1440fa5b65)   0xB4 |
| #define  | [MACRO_STORE_RN](#gaa1b177bb54992520d6d2f7a6e965d2bc)   0xB5 |
| #define  | [MACRO_RETRIEVE_RN](#ga209f18fd4109457287f2fd79c557f171)   0xB6 |
| #define  | [MACRO_STORE_DATETIME](#gadca81798d3b3ceee1a49c232e70e0bdf)   0xB7 |
| #define  | [MACRO_RETRIEVE_DATETIME](#ga78e4cd082f6cb81b324a23a7d61ecc3c)   0xB8 |
| #define  | [MACRO_GENERATE_KI](#ga86fed5f3892bf79d171611fd107bdea3)   0xB9 |
| #define  | [MACRO_LOAD_RSA_SLOT_4](#gacffc4b58b7e3fdc12cce07393cb9637f)   0xBA |
| #define  | [MACRO_LOAD_RSA_SLOT_5](#ga0b97763de72b193f006ec1afd8d9991b)   0xBB |
| #define  | [MACRO_RSA_CALC_SLOT_4](#ga2d6440e0dca64696339b0f6df7878b5b)   0xBC |
| #define  | [MACRO_RSA_CALC_SLOT_5](#gaa54f0b04fd8994c65d196e00b3e39144)   0xBD |
| #define  | [MACRO_STORE_KCA](#gaaf4a0220291a3daecae73fbed2d39c2a)   0xBE |
| #define  | [MACRO_STORE_KCA_V44](#gac946bb139c7f8a7ba259f509aecb5323)   0xBF |
| #define  | [MACRO_STORE_KMACH](#gae9bd22333a3f4056b37defb29cd22903)   0xC0 |
| #define  | [MACRO_STORE_AIIC](#ga8618ca26da69f4fae99115db11ea3335)   0xC1 |
| #define  | [MACRO_COMPUTE_KIA](#ga3879e6c5999e10831396eb49c5eef807)   0xC2 |
| #define  | [MACRO_RETRIEVE_ENC_PPID](#ga0f52f7ec9339fa97e562293a9fb05aaa)   0xC3 |
| #define  | [MACRO_RETRIEVE_KVC_KIA](#ga407312cbba92b1160a4c767f941cdf5c)   0xC4 |
| #define  | [MACRO_COMPUTE_KMACI](#gab0a816007427bc3ea0d6f6c55e8d9f4d)   0xC5 |
| #define  | [MACRO_COMPUTE_MAC_ACQ_MKEYS](#ga3b986cd0e3d383795e565d2454ab2398)   0xC6 |
| #define  | [MACRO_SELECT_KEY_SET_ID_1](#ga720cc8ec469e36af59973ec62fc95702)   0xC7 |
|   | select KeySet Macro for ksid=1 and version=1. No input parameters. [More\...](#ga720cc8ec469e36af59973ec62fc95702)<br/> |
| #define  | [MACRO_SELECT_KEY_SET_ID_2](#ga026455d05e3db8eee131e81f1b73a171)   0xC8 |
|   | select KeySet Macro for ksid=2 and version=1. No input parameters. [More\...](#ga026455d05e3db8eee131e81f1b73a171)<br/> |
| #define  | [MACRO_SELECT_KEY_SET_ID_3](#gacd684d770244e27ad3ffd89c40cf4c5f)   0xC9 |
|   | select KeySet Macro for ksid=3 and version=1. No input parameters. [More\...](#gacd684d770244e27ad3ffd89c40cf4c5f)<br/> |
| #define  | [MACRO_SELECT_KEY_SET_ID_4](#ga4939047f2ecc51a26d01049eac766202)   0xCA |
|   | select KeySet Macro for ksid=4 and version=1. No input parameters. [More\...](#ga4939047f2ecc51a26d01049eac766202)<br/> |
| #define  | [MACRO_SELECT_KEY_SET_ID_5](#ga0c1873c097c088a490799c0a85e99435)   0xCB |
|   | select KeySet Macro for ksid=5 and version=1. No input parameters. [More\...](#ga0c1873c097c088a490799c0a85e99435)<br/> |
| #define  | [MACRO_SELECT_KEY_SET_ID_6](#ga848afe390caa06816c951a5b03becb68)   0xCC |
|   | select KeySet Macro for ksid=6 and version=1. No input parameters. [More\...](#ga848afe390caa06816c951a5b03becb68)<br/> |
| #define  | [MACRO_SELECT_KEY_SET_ID_7](#gab79e7d05864c8a2016482542ba776775)   0xCD |
|   | select KeySet Macro for ksid=7 and version=1. No input parameters. [More\...](#gab79e7d05864c8a2016482542ba776775)<br/> |
| #define  | [MACRO_SELECT_KEY_SET_ID_8](#ga392ad9e8494ee717ef2b8a63220ed19f)   0xCE |
|   | select KeySet Macro for ksid=8 and version=1. No input parameters. [More\...](#ga392ad9e8494ee717ef2b8a63220ed19f)<br/> |
| #define  | [MACRO_SELECT_KEY_SET_ID_MAX](#ga0357d5563c50c72b7b57da0e002c6895)   [MACRO_SELECT_KEY_SET_ID_8](#ga392ad9e8494ee717ef2b8a63220ed19f) |
|   | used to check limitation of select KeySet Macros [More\...](#ga0357d5563c50c72b7b57da0e002c6895)<br/> |
| #define  | [MACRO_SELECT_KEY_SET_ID_X](#ga9aa98a84182f89bbb537c5290eaecc69)   [MACRO_SELECT_KEY_SET_ID_1](#ga720cc8ec469e36af59973ec62fc95702) |
|   | select KeySet Macro for all ksid and version=2. input parameter: ksid. [More\...](#ga9aa98a84182f89bbb537c5290eaecc69)<br/> |
| #define  | [MACRO_STORE_KEK1](#gabc8dda11a9c7e5a3bebd90821f7d88c1)   0xCF |
| #define  | [MACRO_STORE_KEK2](#gace90185513e8afec78481117fdcb5422)   0xD0 |
| #define  | [MACRO_STORE_PPASN](#ga4600092e676f01de5b49179662536616)   0xD1 |
| #define  | [MACRO_RETRIEVE_KVC_KEK1](#ga33e6d63a0483541e1a6856be4a3c1925)   0xD2 |
| #define  | [MACRO_RETRIEVE_eKEK1_PPASN](#gae05304ea913d5efdabbb48e7e68a7b12)   0xD3 |
| #define  | [MACRO_RETRIEVE_eKEK2_PPASN](#ga59050825a5df2553e0db52690effe87f)   0xD4 |
| #define  | [MACRO_ROLL_KEK1](#ga64845bce0261fda7a642832e3fd243af)   0xD5 |
| #define  | [MACRO_ROLL_KEK2](#ga8096ea6536b1f3413e29699f2a8b26bf)   0xD6 |
| #define  | [MACRO_STORE_eKEK1_KMACr](#ga1ba8fbbb557d5468e3bfa29f678de92b)   0xD7 |
| #define  | [MACRO_STORE_eKEK2_KMACr](#ga778fe1dddee857344c6e72bc8fc67092)   0xD8 |
| #define  | [MACRO_STORE_eKEK1_KMACs](#ga459e37334b9fc250f27aec4842e29ab8)   0xD9 |
| #define  | [MACRO_STORE_eKEK2_KMACs](#gaaa7b26e0f63be6065aa68b3a3cb7cb7e)   0xDA |
| #define  | [MACRO_STORE_eKEK1_KDr](#ga2f8351b863eed3195f6566528b7f4d5b)   0xDB |
| #define  | [MACRO_STORE_eKEK2_KDr](#ga2d2cb27c26d363a3791cbca7bb354a73)   0xDC |
| #define  | [MACRO_STORE_eKEK1_KDs](#ga3815b76ae48c95905ccfa0d51a75dd71)   0xDD |
| #define  | [MACRO_STORE_eKEK2_KDs](#gaf3e56a39969d1a6944c33ff1e827dd24)   0xDE |
| #define  | [MACRO_STORE_eKEK1_KPP_V42](#gaa78c758b046f92a8e04e35328b33c869)   0xDF |
| #define  | [MACRO_STORE_eKEK1_KPP_V28](#ga42b31435e83343186a3a322764171977)   0xE0 |
| #define  | [MACRO_STORE_eKEK2_KPP_V42](#gaccbbb626e498abd3b78c3fd9655de6ea)   0xE1 |
| #define  | [MACRO_STORE_eKEK2_KPP_V28](#ga3a970b4b0fa2fc405cbdb8646a27a580)   0xE2 |
| #define  | [MAX_SCRIPT_NAME](#gabdc146eea2ff373e4a6fb2ae534c8ca8)   9 |
| #define  | [D_MAX](#ga80559d0c68c2da7e9f75937fd154a93c)   521 |
| #define  | [D_MAX](#ga80559d0c68c2da7e9f75937fd154a93c)   521 |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## D_MAX\[1/2\] <a href="#ga80559d0c68c2da7e9f75937fd154a93c" id="ga80559d0c68c2da7e9f75937fd154a93c"></a> {#d_max-12}

<p>#define D_MAX   521</p>

## D_MAX\[2/2\] <a href="#ga80559d0c68c2da7e9f75937fd154a93c" id="ga80559d0c68c2da7e9f75937fd154a93c"></a> {#d_max-22}

<p>#define D_MAX   521</p>

## DECRYPT_CBC_ITERATION <a href="#ga286799b6e4775a2000f8f23a3deae819" id="ga286799b6e4775a2000f8f23a3deae819"></a>

<p>#define DECRYPT_CBC_ITERATION   (0x53)</p>

## DECRYPT_FINISH <a href="#ga23484114a161add6102ec674917c0666" id="ga23484114a161add6102ec674917c0666"></a>

<p>#define DECRYPT_FINISH   (0x52)</p>

## DECRYPT_INIT <a href="#ga9dda1955fda005d373617cea91fa60fb" id="ga9dda1955fda005d373617cea91fa60fb"></a>

<p>#define DECRYPT_INIT   (0x50)</p>

## DECRYPT_ITERATION <a href="#ga0f890003acddc5ab054f9be9bb9c4638" id="ga0f890003acddc5ab054f9be9bb9c4638"></a>

<p>#define DECRYPT_ITERATION   (0x51)</p>

## ENCRYPT_CBC_ITERATION <a href="#ga03e6109541a1e1f33087fcc8cacefbfb" id="ga03e6109541a1e1f33087fcc8cacefbfb"></a>

<p>#define ENCRYPT_CBC_ITERATION   (0x43)</p>

## ENCRYPT_FINISH <a href="#ga2ab5d4276702a3de7d567eb055f911f4" id="ga2ab5d4276702a3de7d567eb055f911f4"></a>

<p>#define ENCRYPT_FINISH   (0x42)</p>

## ENCRYPT_INIT <a href="#ga8b6f0172ea31c17b9d7aa5784c2b651a" id="ga8b6f0172ea31c17b9d7aa5784c2b651a"></a>

<p>#define ENCRYPT_INIT   (0x40)</p>

## ENCRYPT_ITERATION <a href="#gadef6432b1d8f7ad14a2ba8f13f9f7a32" id="gadef6432b1d8f7ad14a2ba8f13f9f7a32"></a>

<p>#define ENCRYPT_ITERATION   (0x41)</p>

## GET_NEW_DUKPT <a href="#ga7af69135d805e5206cf42c8783c9c8f9" id="ga7af69135d805e5206cf42c8783c9c8f9"></a>

<p>#define GET_NEW_DUKPT   (0x28)</p>

## ISO_0_PREPARE <a href="#gab0401f08b432090d24c08d693c24623f" id="gab0401f08b432090d24c08d693c24623f"></a>

<p>#define ISO_0_PREPARE   (0x71)</p>

## ISO_0_PREPARE_PIN_0 <a href="#gaf2d8b3378e65c59be442b014f2b8d778" id="gaf2d8b3378e65c59be442b014f2b8d778"></a>

<p>#define ISO_0_PREPARE_PIN_0   (0x80)</p>

## ISO_1_PREPARE <a href="#ga00b2e946cd1be6cf52c2c7a4053dfbe1" id="ga00b2e946cd1be6cf52c2c7a4053dfbe1"></a>

<p>#define ISO_1_PREPARE   (0x72)</p>

## ISO_1_PREPARE_PIN_0 <a href="#ga39c55220e84204f89781f2d6de3f6816" id="ga39c55220e84204f89781f2d6de3f6816"></a>

<p>#define ISO_1_PREPARE_PIN_0   (0x81)</p>

## ISO_2_PREPARE <a href="#gacea965f7ae6b742e08f5b58bb3d5662f" id="gacea965f7ae6b742e08f5b58bb3d5662f"></a>

<p>#define ISO_2_PREPARE   (0x73)</p>

## ISO_2_PREPARE_PIN_0 <a href="#ga9d809956812d078bd317d5ea51d3a3b7" id="ga9d809956812d078bd317d5ea51d3a3b7"></a>

<p>#define ISO_2_PREPARE_PIN_0   (0x82)</p>

## ISO_3_PREPARE <a href="#ga8f23d658f785f47190fec967d9783060" id="ga8f23d658f785f47190fec967d9783060"></a>

<p>#define ISO_3_PREPARE   (0x74)</p>

## ISO_3_PREPARE_PIN_0 <a href="#gaf265eb037a8e3c00a57d1e62a5ee1d95" id="gaf265eb037a8e3c00a57d1e62a5ee1d95"></a>

<p>#define ISO_3_PREPARE_PIN_0   (0x83)</p>

## LOAD_DUKPT_KEY <a href="#ga2f8314814320e4351da7667a05351b91" id="ga2f8314814320e4351da7667a05351b91"></a>

<p>#define LOAD_DUKPT_KEY   (0x10)</p>

## LOAD_KEY_DEC_DATA_MSK <a href="#gae278ff558bc8dff84e612dc0d3e1ae4f" id="gae278ff558bc8dff84e612dc0d3e1ae4f"></a>

<p>#define LOAD_KEY_DEC_DATA_MSK   (0x18)</p>

## LOAD_KEY_ENC_DATA_MSK <a href="#gac44d638245acd1064fa841bf75d68cfe" id="gac44d638245acd1064fa841bf75d68cfe"></a>

<p>#define LOAD_KEY_ENC_DATA_MSK   (0x15)</p>

## LOAD_KEY_GEN_MAC_MSK <a href="#gadbaeedb2248878267eef9b883e441514" id="gadbaeedb2248878267eef9b883e441514"></a>

<p>#define LOAD_KEY_GEN_MAC_MSK   (0x17)</p>

## LOAD_KEY_KEK_MSK <a href="#ga2abc8361ea15929c0ec2ff73e27bfb36" id="ga2abc8361ea15929c0ec2ff73e27bfb36"></a>

<p>#define LOAD_KEY_KEK_MSK   (0x1A)</p>

## LOAD_KEY_PIN_MSK <a href="#ga9da65fd69ba099e1d6a5e9c63c0fd3fa" id="ga9da65fd69ba099e1d6a5e9c63c0fd3fa"></a>

<p>#define LOAD_KEY_PIN_MSK   (0x16)</p>

## LOAD_KEY_VER_MAC_MSK <a href="#gaaf79eb5edf10c8202dcfe8876baedf26" id="gaaf79eb5edf10c8202dcfe8876baedf26"></a>

<p>#define LOAD_KEY_VER_MAC_MSK   (0x19)</p>

## LOAD_TMK_KEY <a href="#ga84c44483f34c0d84f9417f64565115ed" id="ga84c44483f34c0d84f9417f64565115ed"></a>

<p>#define LOAD_TMK_KEY   (0x11)</p>

## MAC_GENERATE_FINISH <a href="#ga5cb7f35bc0bdfe24ac0f5047fac450d4" id="ga5cb7f35bc0bdfe24ac0f5047fac450d4"></a>

<p>#define MAC_GENERATE_FINISH   (0x62)</p>

## MAC_GENERATE_INIT <a href="#ga85df78895c20a18314d6850ce625e374" id="ga85df78895c20a18314d6850ce625e374"></a>

<p>#define MAC_GENERATE_INIT   (0x60)</p>

## MAC_GENERATE_ITERATION <a href="#ga24f89abac32c71a7d6f7f2e07a3c69a9" id="ga24f89abac32c71a7d6f7f2e07a3c69a9"></a>

<p>#define MAC_GENERATE_ITERATION   (0x61)</p>

## MAC_VERIFY_FINISH <a href="#ga0ef87de359bc3cc2ca1e28e6ace768ae" id="ga0ef87de359bc3cc2ca1e28e6ace768ae"></a>

<p>#define MAC_VERIFY_FINISH   (0x65)</p>

## MAC_VERIFY_INIT <a href="#ga86701406c0b8568a4e3c56342e3a4a5e" id="ga86701406c0b8568a4e3c56342e3a4a5e"></a>

<p>#define MAC_VERIFY_INIT   (0x63)</p>

## MAC_VERIFY_ITERATION <a href="#gaa40c8ef7083d0257720ff3dcbf8aabb9" id="gaa40c8ef7083d0257720ff3dcbf8aabb9"></a>

<p>#define MAC_VERIFY_ITERATION   (0x64)</p>

## MACRO_CLEAR_IV <a href="#ga34216860584b51097a07abe8a8bfd3e8" id="ga34216860584b51097a07abe8a8bfd3e8"></a>

<p>#define MACRO_CLEAR_IV   0xB1</p>

## MACRO_COMPUTE_KIA <a href="#ga3879e6c5999e10831396eb49c5eef807" id="ga3879e6c5999e10831396eb49c5eef807"></a>

<p>#define MACRO_COMPUTE_KIA   0xC2</p>

## MACRO_COMPUTE_KMACI <a href="#gab0a816007427bc3ea0d6f6c55e8d9f4d" id="gab0a816007427bc3ea0d6f6c55e8d9f4d"></a>

<p>#define MACRO_COMPUTE_KMACI   0xC5</p>

## MACRO_COMPUTE_MAC_ACQ_MKEYS <a href="#ga3b986cd0e3d383795e565d2454ab2398" id="ga3b986cd0e3d383795e565d2454ab2398"></a>

<p>#define MACRO_COMPUTE_MAC_ACQ_MKEYS   0xC6</p>

## MACRO_DECRYPT_KSK <a href="#gab598cbc3e161e5527d6f1a690488661c" id="gab598cbc3e161e5527d6f1a690488661c"></a>

<p>#define MACRO_DECRYPT_KSK   0xB3</p>

## MACRO_ENCRYPT_KSK <a href="#gadf2cebcad2bc2e1912538539fc13780b" id="gadf2cebcad2bc2e1912538539fc13780b"></a>

<p>#define MACRO_ENCRYPT_KSK   0xB2</p>

## MACRO_GENERATE_KI <a href="#ga86fed5f3892bf79d171611fd107bdea3" id="ga86fed5f3892bf79d171611fd107bdea3"></a>

<p>#define MACRO_GENERATE_KI   0xB9</p>

## MACRO_LOAD_RSA_SLOT_4 <a href="#gacffc4b58b7e3fdc12cce07393cb9637f" id="gacffc4b58b7e3fdc12cce07393cb9637f"></a>

<p>#define MACRO_LOAD_RSA_SLOT_4   0xBA</p>

## MACRO_LOAD_RSA_SLOT_5 <a href="#ga0b97763de72b193f006ec1afd8d9991b" id="ga0b97763de72b193f006ec1afd8d9991b"></a>

<p>#define MACRO_LOAD_RSA_SLOT_5   0xBB</p>

## MACRO_RETRIEVE_DATETIME <a href="#ga78e4cd082f6cb81b324a23a7d61ecc3c" id="ga78e4cd082f6cb81b324a23a7d61ecc3c"></a>

<p>#define MACRO_RETRIEVE_DATETIME   0xB8</p>

## MACRO_RETRIEVE_eKEK1_PPASN <a href="#gae05304ea913d5efdabbb48e7e68a7b12" id="gae05304ea913d5efdabbb48e7e68a7b12"></a>

<p>#define MACRO_RETRIEVE_eKEK1_PPASN   0xD3</p>

## MACRO_RETRIEVE_eKEK2_PPASN <a href="#ga59050825a5df2553e0db52690effe87f" id="ga59050825a5df2553e0db52690effe87f"></a>

<p>#define MACRO_RETRIEVE_eKEK2_PPASN   0xD4</p>

## MACRO_RETRIEVE_ENC_PPID <a href="#ga0f52f7ec9339fa97e562293a9fb05aaa" id="ga0f52f7ec9339fa97e562293a9fb05aaa"></a>

<p>#define MACRO_RETRIEVE_ENC_PPID   0xC3</p>

## MACRO_RETRIEVE_KVC_KEK1 <a href="#ga33e6d63a0483541e1a6856be4a3c1925" id="ga33e6d63a0483541e1a6856be4a3c1925"></a>

<p>#define MACRO_RETRIEVE_KVC_KEK1   0xD2</p>

## MACRO_RETRIEVE_KVC_KIA <a href="#ga407312cbba92b1160a4c767f941cdf5c" id="ga407312cbba92b1160a4c767f941cdf5c"></a>

<p>#define MACRO_RETRIEVE_KVC_KIA   0xC4</p>

## MACRO_RETRIEVE_PPID <a href="#ga4be5ce903079bf3d5be7ae1440fa5b65" id="ga4be5ce903079bf3d5be7ae1440fa5b65"></a>

<p>#define MACRO_RETRIEVE_PPID   0xB4</p>

## MACRO_RETRIEVE_RN <a href="#ga209f18fd4109457287f2fd79c557f171" id="ga209f18fd4109457287f2fd79c557f171"></a>

<p>#define MACRO_RETRIEVE_RN   0xB6</p>

## MACRO_RETRIEVE_STATUS <a href="#ga9555597847d1ff329ee5de359d2b0814" id="ga9555597847d1ff329ee5de359d2b0814"></a>

<p>#define MACRO_RETRIEVE_STATUS   0xB0</p>

## MACRO_ROLL_KEK1 <a href="#ga64845bce0261fda7a642832e3fd243af" id="ga64845bce0261fda7a642832e3fd243af"></a>

<p>#define MACRO_ROLL_KEK1   0xD5</p>

## MACRO_ROLL_KEK2 <a href="#ga8096ea6536b1f3413e29699f2a8b26bf" id="ga8096ea6536b1f3413e29699f2a8b26bf"></a>

<p>#define MACRO_ROLL_KEK2   0xD6</p>

## MACRO_RSA_CALC_SLOT_4 <a href="#ga2d6440e0dca64696339b0f6df7878b5b" id="ga2d6440e0dca64696339b0f6df7878b5b"></a>

<p>#define MACRO_RSA_CALC_SLOT_4   0xBC</p>

## MACRO_RSA_CALC_SLOT_5 <a href="#gaa54f0b04fd8994c65d196e00b3e39144" id="gaa54f0b04fd8994c65d196e00b3e39144"></a>

<p>#define MACRO_RSA_CALC_SLOT_5   0xBD</p>

## MACRO_SELECT_KEY_SET_ID_1 <a href="#ga720cc8ec469e36af59973ec62fc95702" id="ga720cc8ec469e36af59973ec62fc95702"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_1   0xC7</p>

select KeySet Macro for ksid=1 and version=1. No input parameters.

## MACRO_SELECT_KEY_SET_ID_2 <a href="#ga026455d05e3db8eee131e81f1b73a171" id="ga026455d05e3db8eee131e81f1b73a171"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_2   0xC8</p>

select KeySet Macro for ksid=2 and version=1. No input parameters.

## MACRO_SELECT_KEY_SET_ID_3 <a href="#gacd684d770244e27ad3ffd89c40cf4c5f" id="gacd684d770244e27ad3ffd89c40cf4c5f"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_3   0xC9</p>

select KeySet Macro for ksid=3 and version=1. No input parameters.

## MACRO_SELECT_KEY_SET_ID_4 <a href="#ga4939047f2ecc51a26d01049eac766202" id="ga4939047f2ecc51a26d01049eac766202"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_4   0xCA</p>

select KeySet Macro for ksid=4 and version=1. No input parameters.

## MACRO_SELECT_KEY_SET_ID_5 <a href="#ga0c1873c097c088a490799c0a85e99435" id="ga0c1873c097c088a490799c0a85e99435"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_5   0xCB</p>

select KeySet Macro for ksid=5 and version=1. No input parameters.

## MACRO_SELECT_KEY_SET_ID_6 <a href="#ga848afe390caa06816c951a5b03becb68" id="ga848afe390caa06816c951a5b03becb68"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_6   0xCC</p>

select KeySet Macro for ksid=6 and version=1. No input parameters.

## MACRO_SELECT_KEY_SET_ID_7 <a href="#gab79e7d05864c8a2016482542ba776775" id="gab79e7d05864c8a2016482542ba776775"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_7   0xCD</p>

select KeySet Macro for ksid=7 and version=1. No input parameters.

## MACRO_SELECT_KEY_SET_ID_8 <a href="#ga392ad9e8494ee717ef2b8a63220ed19f" id="ga392ad9e8494ee717ef2b8a63220ed19f"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_8   0xCE</p>

select KeySet Macro for ksid=8 and version=1. No input parameters.

## MACRO_SELECT_KEY_SET_ID_MAX <a href="#ga0357d5563c50c72b7b57da0e002c6895" id="ga0357d5563c50c72b7b57da0e002c6895"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_MAX   [MACRO_SELECT_KEY_SET_ID_8](#ga392ad9e8494ee717ef2b8a63220ed19f)</p>

used to check limitation of select KeySet Macros

## MACRO_SELECT_KEY_SET_ID_X <a href="#ga9aa98a84182f89bbb537c5290eaecc69" id="ga9aa98a84182f89bbb537c5290eaecc69"></a>

<p>#define MACRO_SELECT_KEY_SET_ID_X   [MACRO_SELECT_KEY_SET_ID_1](#ga720cc8ec469e36af59973ec62fc95702)</p>

select KeySet Macro for all ksid and version=2. input parameter: ksid.

## MACRO_STORE_AIIC <a href="#ga8618ca26da69f4fae99115db11ea3335" id="ga8618ca26da69f4fae99115db11ea3335"></a>

<p>#define MACRO_STORE_AIIC   0xC1</p>

## MACRO_STORE_DATETIME <a href="#gadca81798d3b3ceee1a49c232e70e0bdf" id="gadca81798d3b3ceee1a49c232e70e0bdf"></a>

<p>#define MACRO_STORE_DATETIME   0xB7</p>

## MACRO_STORE_eKEK1_KDr <a href="#ga2f8351b863eed3195f6566528b7f4d5b" id="ga2f8351b863eed3195f6566528b7f4d5b"></a>

<p>#define MACRO_STORE_eKEK1_KDr   0xDB</p>

## MACRO_STORE_eKEK1_KDs <a href="#ga3815b76ae48c95905ccfa0d51a75dd71" id="ga3815b76ae48c95905ccfa0d51a75dd71"></a>

<p>#define MACRO_STORE_eKEK1_KDs   0xDD</p>

## MACRO_STORE_eKEK1_KMACr <a href="#ga1ba8fbbb557d5468e3bfa29f678de92b" id="ga1ba8fbbb557d5468e3bfa29f678de92b"></a>

<p>#define MACRO_STORE_eKEK1_KMACr   0xD7</p>

## MACRO_STORE_eKEK1_KMACs <a href="#ga459e37334b9fc250f27aec4842e29ab8" id="ga459e37334b9fc250f27aec4842e29ab8"></a>

<p>#define MACRO_STORE_eKEK1_KMACs   0xD9</p>

## MACRO_STORE_eKEK1_KPP_V28 <a href="#ga42b31435e83343186a3a322764171977" id="ga42b31435e83343186a3a322764171977"></a>

<p>#define MACRO_STORE_eKEK1_KPP_V28   0xE0</p>

## MACRO_STORE_eKEK1_KPP_V42 <a href="#gaa78c758b046f92a8e04e35328b33c869" id="gaa78c758b046f92a8e04e35328b33c869"></a>

<p>#define MACRO_STORE_eKEK1_KPP_V42   0xDF</p>

## MACRO_STORE_eKEK2_KDr <a href="#ga2d2cb27c26d363a3791cbca7bb354a73" id="ga2d2cb27c26d363a3791cbca7bb354a73"></a>

<p>#define MACRO_STORE_eKEK2_KDr   0xDC</p>

## MACRO_STORE_eKEK2_KDs <a href="#gaf3e56a39969d1a6944c33ff1e827dd24" id="gaf3e56a39969d1a6944c33ff1e827dd24"></a>

<p>#define MACRO_STORE_eKEK2_KDs   0xDE</p>

## MACRO_STORE_eKEK2_KMACr <a href="#ga778fe1dddee857344c6e72bc8fc67092" id="ga778fe1dddee857344c6e72bc8fc67092"></a>

<p>#define MACRO_STORE_eKEK2_KMACr   0xD8</p>

## MACRO_STORE_eKEK2_KMACs <a href="#gaaa7b26e0f63be6065aa68b3a3cb7cb7e" id="gaaa7b26e0f63be6065aa68b3a3cb7cb7e"></a>

<p>#define MACRO_STORE_eKEK2_KMACs   0xDA</p>

## MACRO_STORE_eKEK2_KPP_V28 <a href="#ga3a970b4b0fa2fc405cbdb8646a27a580" id="ga3a970b4b0fa2fc405cbdb8646a27a580"></a>

<p>#define MACRO_STORE_eKEK2_KPP_V28   0xE2</p>

## MACRO_STORE_eKEK2_KPP_V42 <a href="#gaccbbb626e498abd3b78c3fd9655de6ea" id="gaccbbb626e498abd3b78c3fd9655de6ea"></a>

<p>#define MACRO_STORE_eKEK2_KPP_V42   0xE1</p>

## MACRO_STORE_KCA <a href="#gaaf4a0220291a3daecae73fbed2d39c2a" id="gaaf4a0220291a3daecae73fbed2d39c2a"></a>

<p>#define MACRO_STORE_KCA   0xBE</p>

## MACRO_STORE_KCA_V44 <a href="#gac946bb139c7f8a7ba259f509aecb5323" id="gac946bb139c7f8a7ba259f509aecb5323"></a>

<p>#define MACRO_STORE_KCA_V44   0xBF</p>

## MACRO_STORE_KEK1 <a href="#gabc8dda11a9c7e5a3bebd90821f7d88c1" id="gabc8dda11a9c7e5a3bebd90821f7d88c1"></a>

<p>#define MACRO_STORE_KEK1   0xCF</p>

## MACRO_STORE_KEK2 <a href="#gace90185513e8afec78481117fdcb5422" id="gace90185513e8afec78481117fdcb5422"></a>

<p>#define MACRO_STORE_KEK2   0xD0</p>

## MACRO_STORE_KMACH <a href="#gae9bd22333a3f4056b37defb29cd22903" id="gae9bd22333a3f4056b37defb29cd22903"></a>

<p>#define MACRO_STORE_KMACH   0xC0</p>

## MACRO_STORE_PPASN <a href="#ga4600092e676f01de5b49179662536616" id="ga4600092e676f01de5b49179662536616"></a>

<p>#define MACRO_STORE_PPASN   0xD1</p>

## MACRO_STORE_RN <a href="#gaa1b177bb54992520d6d2f7a6e965d2bc" id="gaa1b177bb54992520d6d2f7a6e965d2bc"></a>

<p>#define MACRO_STORE_RN   0xB5</p>

## MAX_SCRIPT_NAME <a href="#gabdc146eea2ff373e4a6fb2ae534c8ca8" id="gabdc146eea2ff373e4a6fb2ae534c8ca8"></a>

<p>#define MAX_SCRIPT_NAME   9</p>

## PIN_CANCEL <a href="#ga5cf897892e478bad3ca024677db9651d" id="ga5cf897892e478bad3ca024677db9651d"></a>

<p>#define PIN_CANCEL   (0x77)</p>

## PIN_FINISH <a href="#gab26fba5550fe958a8d95fa51a700cc38" id="gab26fba5550fe958a8d95fa51a700cc38"></a>

<p>#define PIN_FINISH   (0x76)</p>

## PIN_INIT <a href="#ga66a8f8bb1534842a3e7cab64637fef1f" id="ga66a8f8bb1534842a3e7cab64637fef1f"></a>

<p>#define PIN_INIT   (0x70)</p>

## PIN_ITERATION <a href="#ga78fe99462d905bd0aa6f43e50052c1ed" id="ga78fe99462d905bd0aa6f43e50052c1ed"></a>

<p>#define PIN_ITERATION   (0x75)</p>

## SCRIPT_CHECK_INIT <a href="#ga6f0b4e52bf562c5a7496865d4dffadb6" id="ga6f0b4e52bf562c5a7496865d4dffadb6"></a>

<p>#define SCRIPT_CHECK_INIT   (0x33)</p>

## SCRIPT_GET_KEY_SET_INIT <a href="#ga4c974ae980ab4b8813673b5b555836b8" id="ga4c974ae980ab4b8813673b5b555836b8"></a>

<p>#define SCRIPT_GET_KEY_SET_INIT   (0x32)</p>

## SCRIPT_INIT <a href="#gae1bdf3a721db08a56686cdc1fbd1a396" id="gae1bdf3a721db08a56686cdc1fbd1a396"></a>

<p>#define SCRIPT_INIT   (0x30)</p>

## SET_DUKPT_MASK <a href="#ga3a5d8d8353446c85f08767651812963b" id="ga3a5d8d8353446c85f08767651812963b"></a>

<p>#define SET_DUKPT_MASK   (0x29)</p>

## START_TRANSACTION <a href="#gaf1654585c80282f2dc54a9d16b915e6c" id="gaf1654585c80282f2dc54a9d16b915e6c"></a>

<p>#define START_TRANSACTION   (0x28)</p>

## TEST_DUKPT_ENGINE <a href="#ga790e4a13adc7aec51a64ef5b360dfb3e" id="ga790e4a13adc7aec51a64ef5b360dfb3e"></a>

<p>#define TEST_DUKPT_ENGINE   (0x39)</p>

## TEST_KEY_FOR_DATA <a href="#gac7cddf4fea9c3a9797bcbcdd5d5dd91c" id="gac7cddf4fea9c3a9797bcbcdd5d5dd91c"></a>

<p>#define TEST_KEY_FOR_DATA   (0x36)</p>

## TEST_KEY_FOR_MAC <a href="#ga04aa97a435b4d74bf669e639ae6b15fb" id="ga04aa97a435b4d74bf669e639ae6b15fb"></a>

<p>#define TEST_KEY_FOR_MAC   (0x38)</p>

## TEST_KEY_FOR_PIN <a href="#ga44579064b0c0e6fff38ff82012880edc" id="ga44579064b0c0e6fff38ff82012880edc"></a>

<p>#define TEST_KEY_FOR_PIN   (0x37)</p>

## TEST_TMK_ENGINE <a href="#ga95182c9326b061c4c55a66f50a2a0c56" id="ga95182c9326b061c4c55a66f50a2a0c56"></a>

<p>#define TEST_TMK_ENGINE   (0x35)</p>
