---
hidden: true
title: crdsync.h File Reference
---

[Macros](#define-members) \| [Typedefs](#typedef-members) \| [Functions](#func-members)

<a href="crdsync_8h_source.md">Go to the source code of this file.</a>

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
|   | Atmel AT24C32SC. [More\...](#a61b592579b3b6cf111114ba5a84a2a3b)<br/> |
| #define  | [CRDSYNC_CARDTYPE_AT24C64SC](#a094e8a68eba25d222082c97981d70ed7)   8 |
|   | Atmel AT24C64SC. [More\...](#a094e8a68eba25d222082c97981d70ed7)<br/> |
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
| void  | [crdSync_Version](#aad6e42b9b4a77a320b963da0d9ebd455) (char \*version, unsigned char len) |
| void  | [crdSync_SetTraceCallback](#a3d9902893c6348c09d6d70f20b0a13b2) (<a href="crdsync__client_8h.md#a5509d72b001f4754e45644e8f09dbb42">CRDSYNC_TraceCallback</a> cbf, void \*cb_data) |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_Open](#af2e8b408142c3fdf772936352aaec87a) (unsigned Options) |
|   | Open the synchronous card driver<br/>. [More\...](#af2e8b408142c3fdf772936352aaec87a)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_Close](#a6f7218a5eddce4c7a642d1c020192934) (unsigned Options) |
|   | Close the synchronous card driver<br/>. [More\...](#a6f7218a5eddce4c7a642d1c020192934)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_IsCardPresent](#a0337406ca951ed912c718448567f0c86) () |
|   | Check if a card is inserted in the full-sized card reader.<br/>. [More\...](#a0337406ca951ed912c718448567f0c86)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_PowerUp](#a54f538cdfe50976653de0ed7550a716b) (int CardType, unsigned char AtrBuf\[\], unsigned char \*AtrLen) |
|   | Power up the synchronous card<br/>. [More\...](#a54f538cdfe50976653de0ed7550a716b)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_PowerDown](#aa210b9d21f89580090da29bf7b9de69d) () |
|   | Power down the synchronous card<br/>. [More\...](#aa210b9d21f89580090da29bf7b9de69d)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_ReadData](#afbd3dd4039b9bf6429ed7ea88d90826d) (int MemoryAddress, unsigned char RxBuf\[\], unsigned short RxLen) |
|   | Read data from the synchronous card<br/>. [More\...](#afbd3dd4039b9bf6429ed7ea88d90826d)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_WriteData](#a74d8a2a3fedd23009bdbb24d34883b86) (int MemoryAddress, const unsigned char TxBuf\[\], unsigned short TxLen) |
|   | Write data to the synchronous card<br/>. [More\...](#a74d8a2a3fedd23009bdbb24d34883b86)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_PresentSecretCode](#a0956e82cc1a12c4f1b9f27b6dd2d576c) (const unsigned char PinCode\[\], unsigned short nSize) |
|   | Present Secret code to the synchronous card<br/>. [More\...](#a0956e82cc1a12c4f1b9f27b6dd2d576c)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_ReadSecurityMem](#ad3eccb6485c7583082120d95981a6a38) (unsigned char RxBuff\[\], unsigned char \*BufLen) |
|   | Read Security Memory from synchronous card<br/>. [More\...](#ad3eccb6485c7583082120d95981a6a38)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_WriteSecurityMem](#aa41d492f0275f153748ef692748b1f8c) (const unsigned char TxBuf\[\], unsigned short TxLen) |
|   | Update PIN Code (PSC) in synchronous card<br/>. [More\...](#aa41d492f0275f153748ef692748b1f8c)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_ReadProtectionMem](#a89f8fa5cd76e3b6c9a86f57281339f32) (unsigned char RxBuf\[\]) |
|   | SLE4442: Read Protection Memory from synchronous card<br/>. [More\...](#a89f8fa5cd76e3b6c9a86f57281339f32)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_WriteProtectionMem](#a3e651310d7f0502e94062bffdadf102e) (unsigned short MemoryAddress, const unsigned char TxBuf\[\], unsigned short TxLen) |
|   | SLE4442: Write Protection Memory<br/>. [More\...](#a3e651310d7f0502e94062bffdadf102e)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_ReadWithProtectionBit](#aa7f47bb821fe3ca17f13e5db732f8aed) (int MemoryAddress, unsigned char RxBuf\[\], unsigned short RxLen) |
|   | SLE4428: Read data with protection bit<br/>. [More\...](#aa7f47bb821fe3ca17f13e5db732f8aed)<br/> |
| [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)  | [crdSync_WriteWithProtectionBit](#a5d10ad831fab9466b20dd3ae4dccaa0e) (int MemoryAddress, unsigned char TxBuf\[\], unsigned short TxLen) |
|   | SLE4428: Write data with protection bit<br/>. [More\...](#a5d10ad831fab9466b20dd3ae4dccaa0e)<br/> |

## MacroDefinition Documentation {#macro-definition-documentation}

## CRDSYNC_CARDTYPE_AT24C01SC <a href="#a0498c6b5a79796abfb55dc0b9b2037c2" id="a0498c6b5a79796abfb55dc0b9b2037c2"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C01SC   1</p>

Atmel AT24C01SC.

### Examples

<a href="crdsync-demo_8cpp-example.md#a7">crdsync-demo.cpp</a>.

## CRDSYNC_CARDTYPE_AT24C02SC <a href="#a0275ae827d5612fc02a2390754ab1ce6" id="a0275ae827d5612fc02a2390754ab1ce6"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C02SC   2</p>

Atmel AT24C02SC.

### Examples

<a href="crdsync-demo_8cpp-example.md#a8">crdsync-demo.cpp</a>.

## CRDSYNC_CARDTYPE_AT24C04SC <a href="#aedf79d2acabae0e89c9f627faeed61e2" id="aedf79d2acabae0e89c9f627faeed61e2"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C04SC   3</p>

Atmel AT24C04SC.

### Examples

<a href="crdsync-demo_8cpp-example.md#a9">crdsync-demo.cpp</a>.

## CRDSYNC_CARDTYPE_AT24C08SC <a href="#abc73a9cc90b40c139244436baefd48b7" id="abc73a9cc90b40c139244436baefd48b7"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C08SC   4</p>

Atmel AT24C08SC.

### Examples

<a href="crdsync-demo_8cpp-example.md#a10">crdsync-demo.cpp</a>.

## CRDSYNC_CARDTYPE_AT24C128SC <a href="#afc98db73875c13859903cb976ae37883" id="afc98db73875c13859903cb976ae37883"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C128SC   13</p>

Atmel AT24C128SC.

## CRDSYNC_CARDTYPE_AT24C16SC <a href="#a101ac06486cf501d08af0213a9f91674" id="a101ac06486cf501d08af0213a9f91674"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C16SC   5</p>

Atmel AT24C16SC.

### Examples

<a href="crdsync-demo_8cpp-example.md#a11">crdsync-demo.cpp</a>.

## CRDSYNC_CARDTYPE_AT24C256SC <a href="#acc68fe707fe903d871e1b3e422a35a30" id="acc68fe707fe903d871e1b3e422a35a30"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C256SC   14</p>

Atmel AT24C256SC.

## CRDSYNC_CARDTYPE_AT24C32SC <a href="#a61b592579b3b6cf111114ba5a84a2a3b" id="a61b592579b3b6cf111114ba5a84a2a3b"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C32SC   7</p>

Atmel AT24C32SC.

## CRDSYNC_CARDTYPE_AT24C64SC <a href="#a094e8a68eba25d222082c97981d70ed7" id="a094e8a68eba25d222082c97981d70ed7"></a>

<p>#define CRDSYNC_CARDTYPE_AT24C64SC   8</p>

Atmel AT24C64SC.

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

### Examples

<a href="crdsync-demo_8cpp-example.md#a12">crdsync-demo.cpp</a>.

## CRDSYNC_Error_BadParam <a href="#a18ce9d5f234d75e198c6a6c694e5109d" id="a18ce9d5f234d75e198c6a6c694e5109d"></a>

<p>#define CRDSYNC_Error_BadParam   4</p>

A function parameter is invalid.

## CRDSYNC_Error_Mem_Protected <a href="#a8279589bd954c9541310ecf07530e03a" id="a8279589bd954c9541310ecf07530e03a"></a>

<p>#define CRDSYNC_Error_Mem_Protected   6</p>

SLE Memory protected.

## CRDSYNC_Error_Not_Supported <a href="#a9ad14b772af28822cf3007a004028f84" id="a9ad14b772af28822cf3007a004028f84"></a>

<p>#define CRDSYNC_Error_Not_Supported   3</p>

Synchronous card type not supported.

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

## CRDSYNC_Failure <a href="#a438c2eefe1adbe5b412a561ca7003f65" id="a438c2eefe1adbe5b412a561ca7003f65"></a>

<p>#define CRDSYNC_Failure   1</p>

Operation failed.

## CRDSYNC_Success <a href="#a9e601169c9ae8fcf306f0640d1fc79bf" id="a9e601169c9ae8fcf306f0640d1fc79bf"></a>

<p>#define CRDSYNC_Success   0</p>

Operation was successful.

## TypedefDocumentation {#typedef-documentation}

## CRDSYNC_RET <a href="#af21f57a16d031a8c4583bf2a77834301" id="af21f57a16d031a8c4583bf2a77834301"></a>

<p>typedef int [CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301)</p>

Response code type definition.

## CRDSYNC_TraceCallback <a href="#a5509d72b001f4754e45644e8f09dbb42" id="a5509d72b001f4754e45644e8f09dbb42"></a>

<p>typedef void(\* CRDSYNC_TraceCallback) (const char \*str, void \*data)</p>

Type of function that is called for traces, see [crdSync_SetTraceCallback()](#a3d9902893c6348c09d6d70f20b0a13b2);

**Parameters**

\[in\] **str** : Trace message. \[in\] **data** : Data pointer provided by the application.

## FunctionDocumentation {#function-documentation}

## crdSync_Close() <a href="#a6f7218a5eddce4c7a642d1c020192934" id="a6f7218a5eddce4c7a642d1c020192934"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_Close</p>

Close the synchronous card driver
.

**Parameters**

\[in\] **Options** - Reserved for future use

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Synchronous card driver closed.

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error, synchronous card driver is not opened.

### Examples

<a href="crdsync-demo_8cpp-example.md#a16">crdsync-demo.cpp</a>.

## crdSync_IsCardPresent() <a href="#a0337406ca951ed912c718448567f0c86" id="a0337406ca951ed912c718448567f0c86"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_IsCardPresent</p>

Check if a card is inserted in the full-sized card reader.
.

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - A card is inserted.

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - No card inserted.

### Examples

<a href="crdsync-demo_8cpp-example.md#a5">crdsync-demo.cpp</a>.

## crdSync_Open() <a href="#af2e8b408142c3fdf772936352aaec87a" id="af2e8b408142c3fdf772936352aaec87a"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_Open</p>

Open the synchronous card driver
.

**Parameters**

\[in\] **Options** - Reserved for future use

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Synchronous card driver opened.

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error, synchronous card driver is already opened.

### Examples

<a href="crdsync-demo_8cpp-example.md#a4">crdsync-demo.cpp</a>.

## crdSync_PowerDown() <a href="#aa210b9d21f89580090da29bf7b9de69d" id="aa210b9d21f89580090da29bf7b9de69d"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_PowerDown</p>

Power down the synchronous card
.

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Card powered down successfully.

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error powering down card - not powered up.

### Examples

<a href="crdsync-demo_8cpp-example.md#a15">crdsync-demo.cpp</a>.

## crdSync_PowerUp() <a href="#a54f538cdfe50976653de0ed7550a716b" id="a54f538cdfe50976653de0ed7550a716b"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_PowerUp</p>

Power up the synchronous card
.

**Parameters**

\[in\] **CardType** - Synchronous card type, see Synchronous Card Types \[in,out\] **AtrBuf** - Pointer to buffer to hold any response from the card (optional) \[in,out\] **AtrLen** - Pointer to 8-bit variable to hold length of card response (optional)

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - No card

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error, driver not opened or card not inserted

[CRDSYNC_Error_Power_Action](#a36be0541d706234898ff7a226df06d3c "Power-Up operation failed.") - Error, unable to power up card

[CRDSYNC_Error_Not_Supported](#a9ad14b772af28822cf3007a004028f84 "Synchronous card type not supported.") - Invalid CardType

### Examples

<a href="crdsync-demo_8cpp-example.md#a6">crdsync-demo.cpp</a>.

## crdSync_PresentSecretCode() <a href="#a0956e82cc1a12c4f1b9f27b6dd2d576c" id="a0956e82cc1a12c4f1b9f27b6dd2d576c"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_PresentSecretCode</p>

Present Secret code to the synchronous card
.

**Parameters**

\[in\] **PinCode** - Pointer to buffer where Pin Code is stored \[in\] **nSize** - PinCode size (e.g. 2 for SLE4428, 3 for SLE4442)

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, nSize is wrong, or PinCode is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_ReadData() <a href="#afbd3dd4039b9bf6429ed7ea88d90826d" id="afbd3dd4039b9bf6429ed7ea88d90826d"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_ReadData</p>

Read data from the synchronous card
.

**Parameters**

\[in\] **MemoryAddress** - memory address where to start reading from if -1, start at current location \[in,out\] **RxBuf** - Pointer to buffer where read data is stored Must be large enough to hold \'RxLen\' bytes \[in\] **RxLen** - Number of bytes to read from card

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, RxLen is zero, or RxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card - wrong CardType

### Examples

<a href="crdsync-demo_8cpp-example.md#a14">crdsync-demo.cpp</a>.

## crdSync_ReadProtectionMem() <a href="#a89f8fa5cd76e3b6c9a86f57281339f32" id="a89f8fa5cd76e3b6c9a86f57281339f32"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_ReadProtectionMem</p>

SLE4442: Read Protection Memory from synchronous card
.

**Parameters**

\[out\] **RxBuf** - Pointer to 4-byte-buffer where protection memory shall be stored

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, RxBuf is NULL

## crdSync_ReadSecurityMem() <a href="#ad3eccb6485c7583082120d95981a6a38" id="ad3eccb6485c7583082120d95981a6a38"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_ReadSecurityMem</p>

Read Security Memory from synchronous card
.

Without a preceding successful [crdSync_PresentSecretCode()](#a0956e82cc1a12c4f1b9f27b6dd2d576c "Present Secret code to the synchronous card  .") only the first byte is read.
This represents the Error Counter (EC). Each set bit shows a remaining PSC entry try.
Max. PSC entry tries: 8 for SLE4428, 3 for SLE 4442.
With a preceding successful [crdSync_PresentSecretCode()](#a0956e82cc1a12c4f1b9f27b6dd2d576c "Present Secret code to the synchronous card  .") additionally the PSC is read.

**Parameters**

\[out\] **RxBuff** - Pointer to buffer where security memory has to be stored \[in,out\] **BufLen** - security memory length returned

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, TxLen is zero, or TxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_ReadWithProtectionBit() <a href="#aa7f47bb821fe3ca17f13e5db732f8aed" id="aa7f47bb821fe3ca17f13e5db732f8aed"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_ReadWithProtectionBit</p>

SLE4428: Read data with protection bit
.

Read `RxLen` data bytes + 1 byte protection bit per data byte

**Parameters**

\[in\] **MemoryAddress** - memory address where to start reading from if -1, start at current location \[out\] **RxBuf** - Pointer to buffer where the read data (incl. protection bits) has to be stored Must be large enough to hold 2\*RxLen bytes \[in\] **RxLen** - Number of bytes to read if 0, operation effectively sets the current address

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter (e.g. RxLen != 0 && RxBuf == NULL)

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_SetTraceCallback() <a href="#a3d9902893c6348c09d6d70f20b0a13b2" id="a3d9902893c6348c09d6d70f20b0a13b2"></a>

<p>void crdSync_SetTraceCallback</p>

Set callback function for trace output.

**Parameters**

\[in\] **cbf** : Callback function for trace messages, may be NULL. \[in\] **cb_data** : Data pointer that is passed on to the callback function cbf, may be NULL.

### Examples

<a href="crdsync-demo_8cpp-example.md#a2">crdsync-demo.cpp</a>.

## crdSync_Version() <a href="#aad6e42b9b4a77a320b963da0d9ebd455" id="aad6e42b9b4a77a320b963da0d9ebd455"></a>

<p>void crdSync_Version</p>

Get Version of library

**Parameters**

\[in,out\] **version** in: Buffer for version info, out: C-String with library name and version \[in\] **len** Allocated size of version

### Examples

<a href="crdsync-demo_8cpp-example.md#a3">crdsync-demo.cpp</a>.

## crdSync_WriteData() <a href="#a74d8a2a3fedd23009bdbb24d34883b86" id="a74d8a2a3fedd23009bdbb24d34883b86"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_WriteData</p>

Write data to the synchronous card
.

{% hint style="info" %}
For SLE4428 and SLE4442 a preceding successful [crdSync_PresentSecretCode()](#a0956e82cc1a12c4f1b9f27b6dd2d576c "Present Secret code to the synchronous card  .") is needed.
{% endhint %} **Parameters**

\[in\] **MemoryAddress** - memory address where to start reading from \[in\] **TxBuf** - Pointer to buffer where data to write is stored \[in\] **TxLen** - Number of bytes to write to the card

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, TxLen is zero, or TxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card - wrong CardType

### Examples

<a href="crdsync-demo_8cpp-example.md#a13">crdsync-demo.cpp</a>.

## crdSync_WriteProtectionMem() <a href="#a3e651310d7f0502e94062bffdadf102e" id="a3e651310d7f0502e94062bffdadf102e"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_WriteProtectionMem</p>

SLE4442: Write Protection Memory
.

{% hint style="info" %}
The data must have been already stored on the card by means of [crdSync_WriteData()](#a74d8a2a3fedd23009bdbb24d34883b86 "Write data to the synchronous card  .").
The contents of `TxBuf` is compared with the data on the card.
Only in case of match the protection bits are set.
{% endhint %} **Parameters**

\[in\] **MemoryAddress** - memory address where to start writing if -1, start at current location \[in\] **TxBuf** - Pointer to buffer where the source data is stored \[in\] **TxLen** - Number of bytes of source data

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, TxLen is zero, or TxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_WriteSecurityMem() <a href="#aa41d492f0275f153748ef692748b1f8c" id="aa41d492f0275f153748ef692748b1f8c"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_WriteSecurityMem</p>

Update PIN Code (PSC) in synchronous card
.

{% hint style="info" %}
A preceding successful [crdSync_PresentSecretCode()](#a0956e82cc1a12c4f1b9f27b6dd2d576c "Present Secret code to the synchronous card  .") is needed.
{% endhint %} **Parameters**

\[in\] **TxBuf** - Pointer to buffer where PSC data is stored \[in\] **TxLen** - Number of bytes to write to the card (e.g. 2 for SLE4428, 3 for SLE4442)

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, TxLen is zero, or TxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

## crdSync_WriteWithProtectionBit() <a href="#a5d10ad831fab9466b20dd3ae4dccaa0e" id="a5d10ad831fab9466b20dd3ae4dccaa0e"></a>

<p>[CRDSYNC_RET](#af21f57a16d031a8c4583bf2a77834301) crdSync_WriteWithProtectionBit</p>

SLE4428: Write data with protection bit
.

{% hint style="info" %}
The data must have been already stored on the card by means of [crdSync_WriteData()](#a74d8a2a3fedd23009bdbb24d34883b86 "Write data to the synchronous card  .").
The contents of `TxBuf` is compared with the data on the card.
Only in case of match the protection bits are set.
{% endhint %} **Parameters**

\[in\] **MemoryAddress** - memory address where to start writing if -1, start at current location \[in\] **TxBuf** - Pointer to buffer where the source data is stored \[in\] **TxLen** - Number of bytes of source data

### Returns

[CRDSYNC_Success](#a9e601169c9ae8fcf306f0640d1fc79bf "Operation was successful.") - Operation successful

[CRDSYNC_Failure](#a438c2eefe1adbe5b412a561ca7003f65 "Operation failed.") - Error - driver not opened, card not inserted or powered up

[CRDSYNC_Error_BadParam](#a18ce9d5f234d75e198c6a6c694e5109d "A function parameter is invalid.") - Invalid parameter, RxLen is zero, or RxBuf is NULL

[CRDSYNC_Error_Protocol](#a7be5ace5182e07f48c854c2d792efb4c "Communication error with synchronous card.") - Error communicating with the card

[CRDSYNC_Error_Not_Supported](#a9ad14b772af28822cf3007a004028f84 "Synchronous card type not supported.") - Bad Card Type
