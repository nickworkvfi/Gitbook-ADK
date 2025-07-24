---
hidden: true
title: crdsync_client.h File Reference
---

[Data Structures](#nested-classes) \| [Macros](#define-members) \| [Typedefs](#typedef-members) \| [Functions](#func-members)

<a href="crdsync__client_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Data Structures |  |
| struct   | [CRDSYNC_ServerConfig](#struct_c_r_d_s_y_n_c___server_config) |

|  |  |
|----|----|
| Macros |  |
| #define  | [CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf)   0 |
|   | Operation was successful. [More\...](#a9e601169c9ae8fcf306f0640d1fc79bf)<br/> |
| #define  | [CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65)   1 |
|   | Operation failed. [More\...](#a438c2eefe1adbe5b412a561ca7003f65)<br/> |
| #define  | [CRDSYNC_Error_Power_Action](#a36be0541d706234898ff7a226df06d3c)   2 |
|   | Power-Up operation failed. [More\...](#a36be0541d706234898ff7a226df06d3c)<br/> |
| #define  | [CRDSYNC_Error_Not_Supported](#a9ad14b772af28822cf3007a004028f84)   3 |
|   | Synchronous card type not supported. [More\...](#a9ad14b772af28822cf3007a004028f84)<br/> |
| #define  | [CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d)   4 |
|   | A function parameter is invalid. [More\...](#a18ce9d5f234d75e198c6a6c694e5109d)<br/> |
| #define  | [CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c)   5 |
|   | Communication error with synchronous card. [More\...](#a7be5ace5182e07f48c854c2d792efb4c)<br/> |
| #define  | [CRDSYNC_Error_Mem_Protected](#a8279589bd954c9541310ecf07530e03a)   6 |
|   | SLE Memory protected. [More\...](#a8279589bd954c9541310ecf07530e03a)<br/> |
| #define  | [CRDSYNC_Error_PSC_Required](#a4398c6dd2a7cd44a64fd80865cd12efb)   7 |
|   | PSC Validation Required. [More\...](#a4398c6dd2a7cd44a64fd80865cd12efb)<br/> |
| #define  | [CRDSYNC_Error_PSC](#a36b31958b780b18b1381358cb08f6079)   8 |
|   | PSC Validation Failed. [More\...](#a36b31958b780b18b1381358cb08f6079)<br/> |
| #define  | [CRDSYNC_Error_FORMAT](#af23ea59b988dd1a0107bd79e4230341e)   -101 |
|   | Malformed message. [More\...](#af23ea59b988dd1a0107bd79e4230341e)<br/> |
| #define  | [CRDSYNC_Error_TLV](#ae324828c9ccef6dc699ea8b497fc07fb)   -102 |
|   | Error parsing TLV input buffer. [More\...](#ae324828c9ccef6dc699ea8b497fc07fb)<br/> |
| #define  | [CRDSYNC_Error_PARAMETER](#a7aa81e47610895df8f3db4283eee6a56)   -103 |
|   | Missing parameter. [More\...](#a7aa81e47610895df8f3db4283eee6a56)<br/> |
| #define  | [CRDSYNC_Error_UNKNOWN_CLA](#ac65629cac4b09696cb5d70dfd40fa482)   -104 |
|   | Unknown class. [More\...](#ac65629cac4b09696cb5d70dfd40fa482)<br/> |
| #define  | [CRDSYNC_Error_UNKNOWN_INS](#a432ab09e41a0e352cf6edca01dee36a4)   -105 |
|   | Unknown instruction. [More\...](#a432ab09e41a0e352cf6edca01dee36a4)<br/> |
| #define  | [CRDSYNC_Error_BLOCKED](#a64ab17b6dd100c1a584970fbdc61a95c)   -106 |
|   | CRDSYNC service is blocked by another client/function call. [More\...](#a64ab17b6dd100c1a584970fbdc61a95c)<br/> |
| #define  | [CRDSYNC_Error_NO_SERVER](#a5616b956f5b62c752e39e42d9ee0f68d)   -201 |
|   | No server configured. [More\...](#a5616b956f5b62c752e39e42d9ee0f68d)<br/> |
| #define  | [CRDSYNC_Error_IPC](#a9ff7df4813e73b811e153c746d900945)   -202 |
|   | IPC error (e.g. connection to server lost) [More\...](#a9ff7df4813e73b811e153c746d900945)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C01SC](#a0498c6b5a79796abfb55dc0b9b2037c2)   1 |
|   | Atmel AT24C01SC. [More\...](#a0498c6b5a79796abfb55dc0b9b2037c2)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C02SC](#a0275ae827d5612fc02a2390754ab1ce6)   2 |
|   | Atmel AT24C02SC. [More\...](#a0275ae827d5612fc02a2390754ab1ce6)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C04SC](#aedf79d2acabae0e89c9f627faeed61e2)   3 |
|   | Atmel AT24C04SC. [More\...](#aedf79d2acabae0e89c9f627faeed61e2)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C08SC](#abc73a9cc90b40c139244436baefd48b7)   4 |
|   | Atmel AT24C08SC. [More\...](#abc73a9cc90b40c139244436baefd48b7)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C16SC](#a101ac06486cf501d08af0213a9f91674)   5 |
|   | Atmel AT24C16SC. [More\...](#a101ac06486cf501d08af0213a9f91674)<br/> |
| #define  | [CRDSYNC_CARDTYPE_ST14C02SC](#a80ebd75ac4813946bf8dec804f90078a)   6 |
|   | STMicro ST14C02SC. [More\...](#a80ebd75ac4813946bf8dec804f90078a)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C32SC](#a61b592579b3b6cf111114ba5a84a2a3b)   7 |
|   | Atmel AT24C16SC. [More\...](#a61b592579b3b6cf111114ba5a84a2a3b)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C64SC](#a094e8a68eba25d222082c97981d70ed7)   8 |
|   | Atmel AT24C16SC. [More\...](#a094e8a68eba25d222082c97981d70ed7)<br/> |
| #define  | [CRDSYNC_CARDTYPE_SLE4418](#ad5812d694bd9e08939f6097b9da33bfd)   9 |
|   | Siemens SLE4418. [More\...](#ad5812d694bd9e08939f6097b9da33bfd)<br/> |
| #define  | [CRDSYNC_CARDTYPE_SLE4428](#a4ca8213e6acb777ca491b936b14684e3)   10 |
|   | Siemens SLE4428. [More\...](#a4ca8213e6acb777ca491b936b14684e3)<br/> |
| #define  | [CRDSYNC_CARDTYPE_SLE4432](#a60f7b1166993324b8adfd3297c400f2a)   11 |
|   | Siemens SLE4432. [More\...](#a60f7b1166993324b8adfd3297c400f2a)<br/> |
| #define  | [CRDSYNC_CARDTYPE_SLE4442](#ace0f6eb7b9fc63e0f37634f89945322e)   12 |
|   | Siemens SLE4442. [More\...](#ace0f6eb7b9fc63e0f37634f89945322e)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C128SC](#afc98db73875c13859903cb976ae37883)   13 |
|   | Atmel AT24C128SC. [More\...](#afc98db73875c13859903cb976ae37883)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C256SC](#acc68fe707fe903d871e1b3e422a35a30)   14 |
|   | Atmel AT24C256SC. [More\...](#acc68fe707fe903d871e1b3e422a35a30)<br/> |

|  |  |
|----|----|
| Typedefs |  |
| typedef int  | [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) |
|   | Response code type definition. [More\...](#af21f57a16d031a8c4583bf2a77834301)<br/> |
| typedef void(\*  | [CRDSYNC_TraceCallback](#a5509d72b001f4754e45644e8f09dbb42)) (const char \*str, void \*data) |

|  |  |
|----|----|
| Functions |  |
| int  | [crdSync_ConfigureServer](#ab2e78bd9c5c6b74f19cea21b58cc46ff) (unsigned char server_cnt, const [CRDSYNC_ServerConfig](#struct_c_r_d_s_y_n_c___server_config) \*server_cfg) |
| void  | [crdSync_Version](#aad6e42b9b4a77a320b963da0d9ebd455) (char \*version, unsigned char len) |
| void  | [crdSync_SetTraceCallback](#a3d9902893c6348c09d6d70f20b0a13b2) ([CRDSYNC_TraceCallback](#a5509d72b001f4754e45644e8f09dbb42) cbf, void \*cb_data) |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_Open](#ae4db0dd5e9a3959cb1c275398d12a5ab) (unsigned char server_idx, unsigned Options) |
|   | Open the synchronous card driver<br/>. [More\...](#ae4db0dd5e9a3959cb1c275398d12a5ab)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_Close](#ab0c482a0301b187a94c57efcb14cadbc) (unsigned char server_idx, unsigned Options) |
|   | Close the synchronous card driver<br/>. [More\...](#ab0c482a0301b187a94c57efcb14cadbc)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_IsCardPresent](#a6c35c135ee3df66ce32f0046b68ff136) (unsigned char server_idx) |
|   | Check if a card is inserted in the full-sized card reader.<br/>. [More\...](#a6c35c135ee3df66ce32f0046b68ff136)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_PowerUp](#a7ab38bf1f5e50e8abfcd793fbd0afaca) (unsigned char server_idx, int CardType, unsigned char AtrBuf\[\], unsigned char \*AtrLen) |
|   | Power up the synchronous card<br/>. [More\...](#a7ab38bf1f5e50e8abfcd793fbd0afaca)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_PowerDown](#ac07f135ba2e36dd12e6b119c6595173f) (unsigned char server_idx) |
|   | Power down the synchronous card<br/>. [More\...](#ac07f135ba2e36dd12e6b119c6595173f)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_ReadData](#a46ece5ab7da04e01c3e816dfbad788b9) (unsigned char server_idx, int MemoryAddress, unsigned char RxBuf\[\], unsigned short RxLen) |
|   | Read data from the synchronous card<br/>. [More\...](#a46ece5ab7da04e01c3e816dfbad788b9)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_WriteData](#ac37939611b8253d24be1eda8ec7ae0a9) (unsigned char server_idx, int MemoryAddress, const unsigned char TxBuf\[\], unsigned short TxLen) |
|   | Write data to the synchronous card<br/>. [More\...](#ac37939611b8253d24be1eda8ec7ae0a9)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_PresentSecretCode](#aac1af40e85e5849800866c522caed887) (unsigned char server_idx, const unsigned char PinCode\[\], unsigned short nSize) |
|   | Present Secret code to the synchronous card<br/>. [More\...](#aac1af40e85e5849800866c522caed887)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_ReadSecurityMem](#af865ea38609963f14c129e150586ce0e) (unsigned char server_idx, unsigned char RxBuff\[\], unsigned char \*BufLen) |
|   | Read Security Memory from synchronous card<br/>. [More\...](#af865ea38609963f14c129e150586ce0e)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_WriteSecurityMem](#a5f567f6f82f15f84a73e08a589da5a55) (unsigned char server_idx, const unsigned char TxBuf\[\], unsigned short TxLen) |
|   | Update PIN Code (PSC) in synchronous card<br/>. [More\...](#a5f567f6f82f15f84a73e08a589da5a55)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_ReadProtectionMem](#afce4d1364cf78742a866311f793fd433) (unsigned char server_idx, unsigned char RxBuf\[\]) |
|   | SLE4442: Read Protection Memory<br/>. [More\...](#afce4d1364cf78742a866311f793fd433)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_WriteProtectionMem](#a4d53646e79d8f7e0cd5ff8076328ebc7) (unsigned char server_idx, unsigned short MemoryAddress, const unsigned char TxBuf\[\], unsigned short TxLen) |
|   | SLE4442: Write Protection Memory<br/>. [More\...](#a4d53646e79d8f7e0cd5ff8076328ebc7)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_ReadWithProtectionBit](#afcab5a3b6a0f4e7fa248da2652653d8f) (unsigned char server_idx, int MemoryAddress, unsigned char RxBuf\[\], unsigned short RxLen) |
|   | SLE4428: Read data with protection bit<br/>. [More\...](#afcab5a3b6a0f4e7fa248da2652653d8f)<br/> |
| <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a>  | [crdSync_WriteWithProtectionBit](#a55cf46f272ccde8eb8c2d1f4d37e490a) (unsigned char server_idx, int MemoryAddress, unsigned char TxBuf\[\], unsigned short TxLen) |
|   | SLE4428: Write data with protection bit<br/>. [More\...](#a55cf46f272ccde8eb8c2d1f4d37e490a)<br/> |

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## CRDSYNC_ServerConfig <a href="#struct_c_r_d_s_y_n_c___server_config" id="struct_c_r_d_s_y_n_c___server_config"></a>

<p>struct CRDSYNC_ServerConfig</p>

Server configuration

| Data Fields |  |  |
|----|----|----|
| const char \* | hostname | <p>host name of server, NULL or empty string means localhost</p> |
| unsigned short | port | <p>port to connect to, 0 means default port (5805)</p> |

## MacroDefinition Documentation {#macro-definition-documentation}

## CRDSYNC_CARDTYPE_AT24C01SC <a href="#a0498c6b5a79796abfb55dc0b9b2037c2" id="a0498c6b5a79796abfb55dc0b9b2037c2"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C01SC   1</p>

Atmel AT24C01SC.

## CRDSYNC_CARDTYPE_AT24C02SC <a href="#a0275ae827d5612fc02a2390754ab1ce6" id="a0275ae827d5612fc02a2390754ab1ce6"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C02SC   2</p>

Atmel AT24C02SC.

## CRDSYNC_CARDTYPE_AT24C04SC <a href="#aedf79d2acabae0e89c9f627faeed61e2" id="aedf79d2acabae0e89c9f627faeed61e2"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C04SC   3</p>

Atmel AT24C04SC.

## CRDSYNC_CARDTYPE_AT24C08SC <a href="#abc73a9cc90b40c139244436baefd48b7" id="abc73a9cc90b40c139244436baefd48b7"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C08SC   4</p>

Atmel AT24C08SC.

## CRDSYNC_CARDTYPE_AT24C128SC <a href="#afc98db73875c13859903cb976ae37883" id="afc98db73875c13859903cb976ae37883"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C128SC   13</p>

Atmel AT24C128SC.

## CRDSYNC_CARDTYPE_AT24C16SC <a href="#a101ac06486cf501d08af0213a9f91674" id="a101ac06486cf501d08af0213a9f91674"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C16SC   5</p>

Atmel AT24C16SC.

## CRDSYNC_CARDTYPE_AT24C256SC <a href="#acc68fe707fe903d871e1b3e422a35a30" id="acc68fe707fe903d871e1b3e422a35a30"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C256SC   14</p>

Atmel AT24C256SC.

## CRDSYNC_CARDTYPE_AT24C32SC <a href="#a61b592579b3b6cf111114ba5a84a2a3b" id="a61b592579b3b6cf111114ba5a84a2a3b"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C32SC   7</p>

Atmel AT24C16SC.

## CRDSYNC_CARDTYPE_AT24C64SC <a href="#a094e8a68eba25d222082c97981d70ed7" id="a094e8a68eba25d222082c97981d70ed7"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C64SC   8</p>

Atmel AT24C16SC.

## CRDSYNC_CARDTYPE_SLE4418 <a href="#ad5812d694bd9e08939f6097b9da33bfd" id="ad5812d694bd9e08939f6097b9da33bfd"></a>

<p>#define CRDSYNC_CARDTYPE_SLE4418   9</p>

Siemens SLE4418.

## CRDSYNC_CARDTYPE_SLE4428 <a href="#a4ca8213e6acb777ca491b936b14684e3" id="a4ca8213e6acb777ca491b936b14684e3"></a>

<p>#define CRDSYNC_CARDTYPE_SLE4428   10</p>

Siemens SLE4428.

## CRDSYNC_CARDTYPE_SLE4432 <a href="#a60f7b1166993324b8adfd3297c400f2a" id="a60f7b1166993324b8adfd3297c400f2a"></a>

<p>#define CRDSYNC_CARDTYPE_SLE4432   11</p>

Siemens SLE4432.

## CRDSYNC_CARDTYPE_SLE4442 <a href="#ace0f6eb7b9fc63e0f37634f89945322e" id="ace0f6eb7b9fc63e0f37634f89945322e"></a>

<p>#define CRDSYNC_CARDTYPE_SLE4442   12</p>

Siemens SLE4442.

## CRDSYNC_CARDTYPE_ST14C02SC <a href="#a80ebd75ac4813946bf8dec804f90078a" id="a80ebd75ac4813946bf8dec804f90078a"></a>

<p>#define CRDSYNC_CARDTYPE_ST14C02SC   6</p>

STMicro ST14C02SC.

## CRDSYNC_Error_BadParam <a href="#a18ce9d5f234d75e198c6a6c694e5109d" id="a18ce9d5f234d75e198c6a6c694e5109d"></a>

<p>#define CRDSYNC_Error_BadParam   4</p>

A function parameter is invalid.

## CRDSYNC_Error_BLOCKED <a href="#a64ab17b6dd100c1a584970fbdc61a95c" id="a64ab17b6dd100c1a584970fbdc61a95c"></a>

<p>#define CRDSYNC_Error_BLOCKED   -106</p>

CRDSYNC service is blocked by another client/function call.

## CRDSYNC_Error_FORMAT <a href="#af23ea59b988dd1a0107bd79e4230341e" id="af23ea59b988dd1a0107bd79e4230341e"></a>

<p>#define CRDSYNC_Error_FORMAT   -101</p>

Malformed message.

## CRDSYNC_Error_IPC <a href="#a9ff7df4813e73b811e153c746d900945" id="a9ff7df4813e73b811e153c746d900945"></a>

<p>#define CRDSYNC_Error_IPC   -202</p>

IPC error (e.g. connection to server lost)

## CRDSYNC_Error_Mem_Protected <a href="#a8279589bd954c9541310ecf07530e03a" id="a8279589bd954c9541310ecf07530e03a"></a>

<p>#define CRDSYNC_Error_Mem_Protected   6</p>

SLE Memory protected.

## CRDSYNC_Error_NO_SERVER <a href="#a5616b956f5b62c752e39e42d9ee0f68d" id="a5616b956f5b62c752e39e42d9ee0f68d"></a>

<p>#define CRDSYNC_Error_NO_SERVER   -201</p>

No server configured.

## CRDSYNC_Error_Not_Supported <a href="#a9ad14b772af28822cf3007a004028f84" id="a9ad14b772af28822cf3007a004028f84"></a>

<p>#define CRDSYNC_Error_Not_Supported   3</p>

Synchronous card type not supported.

## CRDSYNC_Error_PARAMETER <a href="#a7aa81e47610895df8f3db4283eee6a56" id="a7aa81e47610895df8f3db4283eee6a56"></a>

<p>#define CRDSYNC_Error_PARAMETER   -103</p>

Missing parameter.

## CRDSYNC_Error_Power_Action <a href="#a36be0541d706234898ff7a226df06d3c" id="a36be0541d706234898ff7a226df06d3c"></a>

<p>#define CRDSYNC_Error_Power_Action   2</p>

Power-Up operation failed.

## CRDSYNC_Error_Protocol <a href="#a7be5ace5182e07f48c854c2d792efb4c" id="a7be5ace5182e07f48c854c2d792efb4c"></a>

<p>#define CRDSYNC_Error_Protocol   5</p>

Communication error with synchronous card.

## CRDSYNC_Error_PSC <a href="#a36b31958b780b18b1381358cb08f6079" id="a36b31958b780b18b1381358cb08f6079"></a>

<p>#define CRDSYNC_Error_PSC   8</p>

PSC Validation Failed.

## CRDSYNC_Error_PSC_Required <a href="#a4398c6dd2a7cd44a64fd80865cd12efb" id="a4398c6dd2a7cd44a64fd80865cd12efb"></a>

<p>#define CRDSYNC_Error_PSC_Required   7</p>

PSC Validation Required.

## CRDSYNC_Error_TLV <a href="#ae324828c9ccef6dc699ea8b497fc07fb" id="ae324828c9ccef6dc699ea8b497fc07fb"></a>

<p>#define CRDSYNC_Error_TLV   -102</p>

Error parsing TLV input buffer.

## CRDSYNC_Error_UNKNOWN_CLA <a href="#ac65629cac4b09696cb5d70dfd40fa482" id="ac65629cac4b09696cb5d70dfd40fa482"></a>

<p>#define CRDSYNC_Error_UNKNOWN_CLA   -104</p>

Unknown class.

## CRDSYNC_Error_UNKNOWN_INS <a href="#a432ab09e41a0e352cf6edca01dee36a4" id="a432ab09e41a0e352cf6edca01dee36a4"></a>

<p>#define CRDSYNC_Error_UNKNOWN_INS   -105</p>

Unknown instruction.

## CRDSYNC_Failure <a href="#a438c2eefe1adbe5b412a561ca7003f65" id="a438c2eefe1adbe5b412a561ca7003f65"></a>

<p>#define CRDSYNC_Failure   1</p>

Operation failed.

## CRDSYNC_Success <a href="#a9e601169c9ae8fcf306f0640d1fc79bf" id="a9e601169c9ae8fcf306f0640d1fc79bf"></a>

<p>#define CRDSYNC_Success   0</p>

Operation was successful.

## TypedefDocumentation {#typedef-documentation}

## CRDSYNC_RET <a href="#af21f57a16d031a8c4583bf2a77834301" id="af21f57a16d031a8c4583bf2a77834301"></a>

<p>typedef int <a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a></p>

Response code type definition.

## CRDSYNC_TraceCallback <a href="#a5509d72b001f4754e45644e8f09dbb42" id="a5509d72b001f4754e45644e8f09dbb42"></a>

<p>typedef void(\* CRDSYNC_TraceCallback) (const char \*str, void \*data)</p>

Type of function that is called for traces, see [crdSync_SetTraceCallback()](#a3d9902893c6348c09d6d70f20b0a13b2)

**Parameters**

\[in\] **str** : Trace message. \[in\] **data** : Data pointer provided by the application.

## FunctionDocumentation {#function-documentation}

## crdSync_Close() <a href="#ab0c482a0301b187a94c57efcb14cadbc" id="ab0c482a0301b187a94c57efcb14cadbc"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_Close</p>

Close the synchronous card driver
.

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in\] **Options** - Reserved for future use

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Synchronous card driver closed.

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error, synchronous card driver is not opened.

## crdSync_ConfigureServer() <a href="#ab2e78bd9c5c6b74f19cea21b58cc46ff" id="ab2e78bd9c5c6b74f19cea21b58cc46ff"></a>

<p>int crdSync_ConfigureServer</p>

Configure servers. Set servers and connect to them.

**Parameters**

\[in\] **server_cnt** : number of servers. Set to 0 to disconnect from all servers. \[in\] **server_cfg** : list of server configurations

### Returns

\[unsupported block\]

## crdSync_IsCardPresent() <a href="#a6c35c135ee3df66ce32f0046b68ff136" id="a6c35c135ee3df66ce32f0046b68ff136"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_IsCardPresent</p>

Check if a card is inserted in the full-sized card reader.
.

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()).

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - A card is inserted.

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - No card inserted.

## crdSync_Open() <a href="#ae4db0dd5e9a3959cb1c275398d12a5ab" id="ae4db0dd5e9a3959cb1c275398d12a5ab"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_Open</p>

Open the synchronous card driver
.

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in\] **Options** - Reserved for future use

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Synchronous card driver opened.

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error, synchronous card driver is already opened.

## crdSync_PowerDown() <a href="#ac07f135ba2e36dd12e6b119c6595173f" id="ac07f135ba2e36dd12e6b119c6595173f"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_PowerDown</p>

Power down the synchronous card
.

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()).

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Card powered down successfully.

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error powering down card - not powered up.

## crdSync_PowerUp() <a href="#a7ab38bf1f5e50e8abfcd793fbd0afaca" id="a7ab38bf1f5e50e8abfcd793fbd0afaca"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_PowerUp</p>

Power up the synchronous card
.

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in\] **CardType** - Synchronous card type, see Synchronous Card Types \[in,out\] **AtrBuf** - Pointer to buffer to hold any response from the card (optional) \[in,out\] **AtrLen** - Pointer to 8-bit variable to hold length of card response (optional)

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - No card

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error, driver not opened or card not inserted

[CRDSYNC_Error_Power_Action](#a36be0541d706234898ff7a226df06d3c "Power-Up operation failed.") - Error, unable to power up card

[CRDSYNC_Error_Not_Supported](#a9ad14b772af28822cf3007a004028f84 "Synchronous card type not supported.") - Invalid CardType

## crdSync_PresentSecretCode() <a href="#aac1af40e85e5849800866c522caed887" id="aac1af40e85e5849800866c522caed887"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_PresentSecretCode</p>

Present Secret code to the synchronous card
.

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in\] **PinCode** - Pointer to buffer where Pin Code is stored \[in\] **nSize** - PinCode size (e.g. 2 for SLE4428, 3 for SLE4442)

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, nSize is wrong, or PinCode is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_ReadData() <a href="#a46ece5ab7da04e01c3e816dfbad788b9" id="a46ece5ab7da04e01c3e816dfbad788b9"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_ReadData</p>

Read data from the synchronous card
.

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in\] **MemoryAddress** - memory address where to start reading from if -1, start at current location \[in,out\] **RxBuf** - Pointer to buffer where read data is stored Must be large enough to hold \'RxLen\' bytes \[in\] **RxLen** - Number of bytes to read from card

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, RxLen is zero, or RxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card - wrong CardType

## crdSync_ReadProtectionMem() <a href="#afce4d1364cf78742a866311f793fd433" id="afce4d1364cf78742a866311f793fd433"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_ReadProtectionMem</p>

SLE4442: Read Protection Memory
.

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[out\] **RxBuf** - Pointer to 4-byte-buffer where protection memory shall be stored

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, RxBuf is NULL

## crdSync_ReadSecurityMem() <a href="#af865ea38609963f14c129e150586ce0e" id="af865ea38609963f14c129e150586ce0e"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_ReadSecurityMem</p>

Read Security Memory from synchronous card
.

Without a preceding successful [crdSync_PresentSecretCode()](#aac1af40e85e5849800866c522caed887 "Present Secret code to the synchronous card  .") only the first byte is read.
This represents the Error Counter (EC). Each set bit shows a remaining PSC entry try.
Max. PSC entry tries: 8 for SLE4428, 3 for SLE 4442.
With a preceding successful [crdSync_PresentSecretCode()](#aac1af40e85e5849800866c522caed887 "Present Secret code to the synchronous card  .") additionally the PSC is read.

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[out\] **RxBuff** - Pointer to buffer where security memory has to be stored \[in,out\] **BufLen** - security memory length returned

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, TxLen is zero, or TxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_ReadWithProtectionBit() <a href="#afcab5a3b6a0f4e7fa248da2652653d8f" id="afcab5a3b6a0f4e7fa248da2652653d8f"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_ReadWithProtectionBit</p>

SLE4428: Read data with protection bit
.

Read `RxLen` data bytes + 1 byte protection bit per data byte

**Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in\] **MemoryAddress** - memory address where to start reading from if -1, start at current location \[out\] **RxBuf** - Pointer to buffer where the read data (incl. protection bits) has to be stored Must be large enough to hold 2\*RxLen bytes \[in\] **RxLen** - Number of data bytes to read if 0, operation effectively sets the current address

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, RxLen is zero, or RxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_SetTraceCallback() <a href="#a3d9902893c6348c09d6d70f20b0a13b2" id="a3d9902893c6348c09d6d70f20b0a13b2"></a>

<p>void crdSync_SetTraceCallback</p>

Set callback function for trace output.

**Parameters**

\[in\] **cbf** : Callback function for trace messages, may be NULL. \[in\] **cb_data** : Data pointer that is passed on to the callback function cbf, may be NULL.

## crdSync_Version() <a href="#aad6e42b9b4a77a320b963da0d9ebd455" id="aad6e42b9b4a77a320b963da0d9ebd455"></a>

<p>void crdSync_Version</p>

Get Version of library

**Parameters**

\[in,out\] **version** in: Buffer for version info, out: C-String with library name and version \[in\] **len** Allocated size of version

## crdSync_WriteData() <a href="#ac37939611b8253d24be1eda8ec7ae0a9" id="ac37939611b8253d24be1eda8ec7ae0a9"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_WriteData</p>

Write data to the synchronous card
.

{% hint style="info" %}
For SLE4428 and SLE4442 a preceding successful [crdSync_PresentSecretCode()](#aac1af40e85e5849800866c522caed887 "Present Secret code to the synchronous card  .") is needed.
{% endhint %} **Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in\] **MemoryAddress** - memory address where to start reading from \[in\] **TxBuf** - Pointer to buffer where data to write is stored \[in\] **TxLen** - Number of bytes to write to the card

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, TxLen is zero, or TxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card - wrong CardType

## crdSync_WriteProtectionMem() <a href="#a4d53646e79d8f7e0cd5ff8076328ebc7" id="a4d53646e79d8f7e0cd5ff8076328ebc7"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_WriteProtectionMem</p>

SLE4442: Write Protection Memory
.

{% hint style="info" %}
The data must have been already stored on the card by means of [crdSync_WriteData()](#ac37939611b8253d24be1eda8ec7ae0a9 "Write data to the synchronous card  .").
The contents of `TxBuf` is compared with the data on the card.
Only in case of match the protection bits are set.
{% endhint %} **Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in\] **MemoryAddress** - memory address where to start writing if -1, start at current location \[in\] **TxBuf** - Pointer to buffer where the source data is stored \[in\] **TxLen** - Number of bytes of source data

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, TxLen is zero, or TxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_WriteSecurityMem() <a href="#a5f567f6f82f15f84a73e08a589da5a55" id="a5f567f6f82f15f84a73e08a589da5a55"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_WriteSecurityMem</p>

Update PIN Code (PSC) in synchronous card
.

{% hint style="info" %}
A preceding successful [crdSync_PresentSecretCode()](#aac1af40e85e5849800866c522caed887 "Present Secret code to the synchronous card  .") is needed.
{% endhint %} **Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in,out\] **TxBuf** - Pointer to buffer where PSC data is stored \[in\] **TxLen** - Number of bytes to write to the card (e.g. 2 for SLE4428, 3 for SLE4442)

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, TxLen is zero, or TxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_WriteWithProtectionBit() <a href="#a55cf46f272ccde8eb8c2d1f4d37e490a" id="a55cf46f272ccde8eb8c2d1f4d37e490a"></a>

<p><a href="crdsync_8h.md#af21f57a16d031a8c4583bf2a77834301">CRDSYNC_RET</a> crdSync_WriteWithProtectionBit</p>

SLE4428: Write data with protection bit
.

{% hint style="info" %}
The data must have been already stored on the card by means of [crdSync_WriteData()](#ac37939611b8253d24be1eda8ec7ae0a9 "Write data to the synchronous card  .").
The contents of `TxBuf` is compared with the data on the card.
Only in case of match the protection bits are set.
{% endhint %} **Parameters**

\[in\] **server_idx** - index of server in server configuration (see crdSync_ConfigureServer()). \[in\] **MemoryAddress** - memory address where to start writing if -1, start at current location \[in\] **TxBuf** - Pointer to buffer where the source data is stored \[in\] **TxLen** - Number of bytes of source data

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, RxLen is zero, or RxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

[CRDSYNC_Error_Not_Supported](#a9ad14b772af28822cf3007a004028f84 "Synchronous card type not supported.") - Bad Card Type
