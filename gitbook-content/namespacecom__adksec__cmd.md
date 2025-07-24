---
hidden: true
title: com_adksec_cmd Namespace Reference
---

[Data Structures](#nested-classes) \| [Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| class   | <a href="classcom__adksec__cmd_1_1_c_transaction_data.md">CTransactionData</a> |
| class   | <a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a> |

|  |  |
|----|----|
| Typedefs |  |
| typedef uint32_t  | [secHandle_t](#acc01edab4b0f73c92142d9d43dc7a7f7) |
| typedef uint8_t  | [bitMask_t](#af79ae13c5f9ec8424f44764288144041) |
| typedef std::string  | [secIndex_t](#ad15b3c697f22fd80a8a42e5547c5b8e4) |
| typedef unsigned char  | [eSecCommandtype](#a74b8a37bc3557f7d5fc9a2d70737ab33) |
| typedef <a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a>  | [SecTransactionValue](#abddf3fd58f8658a7475911ed80e0fe20) |
| typedef <a href="classcom__adksec__cmd_1_1_c_transaction_data.md">CTransactionData</a>  | [SecTransactionData_t](#a8963c1dd7c626a621a8033209294fcbd) |
| typedef uint32_t  | [secError_t](#ae9f0bf534a30b1423c9e00302d53b7b8) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [secErrorGroup](#afe1062c1bfd2726a8d1ab38e7811bfb1) {<br/>  [EsecGroupCommon](#afe1062c1bfd2726a8d1ab38e7811bfb1a54e1471760a67dae8d22721a00ede39a) = 0x00000000, [EsecGroupApi](#afe1062c1bfd2726a8d1ab38e7811bfb1a167ffff4c0820ffb92f955cb7a8d29ee) = 0x00010000, [EsecGroupEncGov](#afe1062c1bfd2726a8d1ab38e7811bfb1a7b2a912e9a3211090f9892b058f0a6ca) = 0x00020000, [EsecGroupIPC](#afe1062c1bfd2726a8d1ab38e7811bfb1a8d1038dad4c0f15215f4788a08f9584e) = 0x00030000,<br/>  [EsecGroupEncConfig](#afe1062c1bfd2726a8d1ab38e7811bfb1a960eca2e08f9da84f901ce8e933aa07a) = 0x00040000, [EsecGroupEncTA](#afe1062c1bfd2726a8d1ab38e7811bfb1afd58b9d738baecee7f34327b36d93e3a) = 0x00050000, [EsecGroupEncVSS](#afe1062c1bfd2726a8d1ab38e7811bfb1a0eddf41a8245133990b360f9e6ac6f1c) = 0x00110000, [EsecGroupEncIPP](#afe1062c1bfd2726a8d1ab38e7811bfb1ae118f32b45b0853d48da2c67b47b4055) = 0x00120000,<br/>  [EsecGroupEncSRED](#afe1062c1bfd2726a8d1ab38e7811bfb1a212740110be098540fa62ca02ded6c37) = 0x00130000, [EsecGroupEncADE](#afe1062c1bfd2726a8d1ab38e7811bfb1afab318675e1a1fad08fc0e153a9b1557) = 0x00140000, [EsecGroupEncBendigo](#afe1062c1bfd2726a8d1ab38e7811bfb1a4ee53414e3e303fe1fcd0683f49da4d4) = 0x00150000, [EsecGroupEncVOL](#afe1062c1bfd2726a8d1ab38e7811bfb1a537062d96ccd76dc0de27bff61b91175) = 0x00160000,<br/>  [EsecGroupEncVDSP](#afe1062c1bfd2726a8d1ab38e7811bfb1a4d935076f45fc9d8c21907e8277af7c3) = 0x00170000, [EsecGroupEncRSA](#afe1062c1bfd2726a8d1ab38e7811bfb1abef4c4b4626d100bda0d1d9113c70051) = 0x00180000, [EsecGroupEncAES](#afe1062c1bfd2726a8d1ab38e7811bfb1a019138033a54e4e59615ea7581370327) = 0x00190000, [EsecGroupEncCryptRW](#afe1062c1bfd2726a8d1ab38e7811bfb1ad31dfaf8b9e1e4e25219430e8f9a1acf) = 0x001A0000,<br/>  [EsecGroupEncMSK](#afe1062c1bfd2726a8d1ab38e7811bfb1a7efded02437b12a6fa601841bdaa04dc) = 0x001B0000, [EsecGroupEncCustRKL](#afe1062c1bfd2726a8d1ab38e7811bfb1a96a3fb4ac144556336f923b4bd04ac40) = 0x001C0000, [EsecGroupDUKPT](#afe1062c1bfd2726a8d1ab38e7811bfb1a0607e193fbd3d2cfd51eb49385c95dc5) = 0x001D0000, [EsecGroupMASK](#afe1062c1bfd2726a8d1ab38e7811bfb1a400628f4e2dca15e56606f2095c77091) = 0x00FF0000<br/>} |
| enum   | [secError](#af511ddd4237541a758df48299546d49a) |

|  |  |
|----|----|
| Functions |  |
| std::string  | [getErrorString](#aad94ea47fc0f24cdb4d5079c910d11b5) ([secError_t](#ae9f0bf534a30b1423c9e00302d53b7b8) error) |
| std::string  | [getErrorDescription](#a3121d76c18d310000977ac9d2ddc3c07) ([secError_t](#ae9f0bf534a30b1423c9e00302d53b7b8) error) |

## TypedefDocumentation {#typedef-documentation}

## bitMask_t <a href="#af79ae13c5f9ec8424f44764288144041" id="af79ae13c5f9ec8424f44764288144041"></a>

<p>typedef uint8_t [bitMask_t](#af79ae13c5f9ec8424f44764288144041)</p>

## eSecCommandtype <a href="#a74b8a37bc3557f7d5fc9a2d70737ab33" id="a74b8a37bc3557f7d5fc9a2d70737ab33"></a>

<p>typedef unsigned char [eSecCommandtype](#a74b8a37bc3557f7d5fc9a2d70737ab33)</p>

## secError_t <a href="#ae9f0bf534a30b1423c9e00302d53b7b8" id="ae9f0bf534a30b1423c9e00302d53b7b8"></a>

<p>typedef uint32_t [secError_t](#ae9f0bf534a30b1423c9e00302d53b7b8)</p>

type which is used to transport secError in TLV-Packets, etc

## secHandle_t <a href="#acc01edab4b0f73c92142d9d43dc7a7f7" id="acc01edab4b0f73c92142d9d43dc7a7f7"></a>

<p>typedef uint32_t [secHandle_t](#acc01edab4b0f73c92142d9d43dc7a7f7)</p>

## secIndex_t <a href="#ad15b3c697f22fd80a8a42e5547c5b8e4" id="ad15b3c697f22fd80a8a42e5547c5b8e4"></a>

<p>typedef std::string [secIndex_t](#ad15b3c697f22fd80a8a42e5547c5b8e4)</p>

## SecTransactionData_t <a href="#a8963c1dd7c626a621a8033209294fcbd" id="a8963c1dd7c626a621a8033209294fcbd"></a>

<p>typedef <a href="classcom__adksec__cmd_1_1_c_transaction_data.md">CTransactionData</a> [SecTransactionData_t](#a8963c1dd7c626a621a8033209294fcbd)</p>

## SecTransactionValue <a href="#abddf3fd58f8658a7475911ed80e0fe20" id="abddf3fd58f8658a7475911ed80e0fe20"></a>

<p>typedef <a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a> [SecTransactionValue](#abddf3fd58f8658a7475911ed80e0fe20)</p>

## EnumerationType Documentation {#enumeration-type-documentation}

## secError <a href="#af511ddd4237541a758df48299546d49a" id="af511ddd4237541a758df48299546d49a"></a>

<p>enum [secError](#af511ddd4237541a758df48299546d49a)</p>

Error-codes

## secErrorGroup <a href="#afe1062c1bfd2726a8d1ab38e7811bfb1" id="afe1062c1bfd2726a8d1ab38e7811bfb1"></a>

<p>enum [secErrorGroup](#afe1062c1bfd2726a8d1ab38e7811bfb1)</p>

This is for Grouping the Error-Codes of secError in Groups using an offset

| Enumerator |  |
|----|----|
| EsecGroupCommon  | <p>Common, compatible with errno.h.</p> |
| EsecGroupApi  | <p>Api-lib.</p> |
| EsecGroupEncGov  | <p>EncryptionGovernor main.</p> |
| EsecGroupIPC  | <p>IPC related.</p> |
| EsecGroupEncConfig  | <p>Configuration related.</p> |
| EsecGroupEncTA  | <p>TransactionData related.</p> |
| EsecGroupEncVSS  | <p>VSS specific.</p> |
| EsecGroupEncIPP  | <p>IPP specific.</p> |
| EsecGroupEncSRED  | <p>SRED specific.</p> |
| EsecGroupEncADE  | <p>ADE specific.</p> |
| EsecGroupEncBendigo  | <p>Bendigo specific.</p> |
| EsecGroupEncVOL  | <p>Voltage specific.</p> |
| EsecGroupEncVDSP  | <p>Visa DSP specific.</p> |
| EsecGroupEncRSA  | <p>RSA specific.</p> |
| EsecGroupEncAES  | <p>AES specific.</p> |
| EsecGroupEncCryptRW  | <p>Crypto Read/Write module specific.</p> |
| EsecGroupEncMSK  | <p>MSK module specific.</p> |
| EsecGroupEncCustRKL  | <p>Custom RKL module specific.</p> |
| EsecGroupDUKPT  | <p>DUKPT modules group.</p> |
| EsecGroupMASK  |  |

## FunctionDocumentation {#function-documentation}

## getErrorDescription() <a href="#a3121d76c18d310000977ac9d2ddc3c07" id="a3121d76c18d310000977ac9d2ddc3c07"></a>

<p>std::string com_adksec_cmd::getErrorDescription</p>

Get description of error-code

**Parameters**

**error** value of secError e.g. EsecINVAL

### Returns

descriptive text, e.g \"Invalid argument\"

## getErrorString() <a href="#aad94ea47fc0f24cdb4d5079c910d11b5" id="aad94ea47fc0f24cdb4d5079c910d11b5"></a>

<p>std::string com_adksec_cmd::getErrorString</p>

Get name of error-code

**Parameters**

**error** value of secError e.g. EsecINVAL

### Returns

descriptive text, e.g \"EsecINVAL\"
