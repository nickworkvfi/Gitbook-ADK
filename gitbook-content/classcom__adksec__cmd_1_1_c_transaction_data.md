---
hidden: true
title: CTransactionData Class Reference
---

[Public Member Functions](#pub-methods) \| [Static Public Attributes](#pub-static-attribs)

`#include <`<a href="_c_transaction_data_8h_source.md">CTransactionData.h</a>`>`

Inheritance diagram for CTransactionData:

![Inheritance graph](classcom__adksec__cmd_1_1_c_transaction_data__inherit__graph.png)

\[<a href="graph_legend.md">legend</a>\]

Collaboration diagram for CTransactionData:

![Collaboration graph](classcom__adksec__cmd_1_1_c_transaction_data__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

|  |  |
|----|----|
| Public Member Functions |  |
|   | [CTransactionData](#a11419fb46b809a3ad9744800aa1e4ad2) (const std::string &jsonString) |
|   | [CTransactionData](#a67f53d824e4feb6d2bd0a835edf0e70b) () |
| virtual  | [\~CTransactionData](#a0f5b4a60590e085453de19319f1eebfc) () |
| std::string  | [dump](#a7de861082da81700dd1481385268c4ff) () const |
| void  | [load](#a52363cd24719cd696e4b260fdac780db) (const std::string &jsonString) |
| bool  | [isAvailable](#af46b3cdc245b72805647d3f73b93fdb5) (const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> &key) const |

|  |  |
|----|----|
| Static Public Attributes |  |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagKeySetID](#ada66db3e2e7ffdf208da77c358a130d8) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagIPPUseBinFormat](#a94a7b675572189cf4c3786b8da85f2dd) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagADEEncMode](#af5e1be69936d0509ab4c7e5be5974f9d) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagBendigoKEKFlag](#a06433ac0e068cf8c70d478d0512efa40) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagAS2805Func](#a76a30cfa9bd719a3e5a4d6464f1a8b01) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagVSSDUKPTMaskPIN](#a2184e7cd21e24db145ac95c0d4188878) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagVSSDUKPTMaskMAC](#ae1f03aa34f88ca2a2d2b48d20dc42a17) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagVSSDUKPTMaskENC](#aaa6658b9d075bad211bbcb692b3080c7) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [setDUKPTmasks](#af99ef157338b014adb407416d0745b8f) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagHostName](#af5bec0d34599f4c601103a062bdf69ed) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagPAN](#a790affb24f06596955ee45cfdf8e7e75) |
|   | ASCII format expected. [More\...](#a790affb24f06596955ee45cfdf8e7e75)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagCHName](#ac59568cd75a9ad51d16b66886ee492ef) |
|   | ASCII format expected. [More\...](#ac59568cd75a9ad51d16b66886ee492ef)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagMID](#a8d11900f080068bd258c318d0c316701) |
|   | ASCII format expected. [More\...](#a8d11900f080068bd258c318d0c316701)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagPANandCVV](#a45d530ec3b75ebf0dde157237ce2bdc6) |
|   | ASCII format expected. [More\...](#a45d530ec3b75ebf0dde157237ce2bdc6)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagTrack1](#ad1e31d711238acdeabc67b3bc8cb3276) |
|   | ASCII format expected. [More\...](#ad1e31d711238acdeabc67b3bc8cb3276)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagTrack2](#a067a929e2de18912d1b4ef207502c62e) |
|   | ASCII format expected. [More\...](#a067a929e2de18912d1b4ef207502c62e)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagTrack3](#acc4988f66189ea867e25ee2d3a684d04) |
|   | ASCII format expected. [More\...](#acc4988f66189ea867e25ee2d3a684d04)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagAlphaNum](#a6aeff9d05a4f0cf904432b3833b3f081) |
|   | ASCII format expected. [More\...](#a6aeff9d05a4f0cf904432b3833b3f081)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagByteArray](#aa0a0a34eecf5ca7d5569f88509023c3b) |
|   | ASCII format expected. [More\...](#aa0a0a34eecf5ca7d5569f88509023c3b)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagCardDataType](#a291eba7cf1f9f49492153a2bebdfb6f0) |
|   | ASCII format expected. [More\...](#a291eba7cf1f9f49492153a2bebdfb6f0)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagObfuscatedPAN](#ab463c9122c9a52b6bc2ea1c4331dcb90) |
|   | ASCII format provided. [More\...](#ab463c9122c9a52b6bc2ea1c4331dcb90)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagObfuscatedCHName](#a26749bcf257e18f46431126e34eadbdb) |
|   | ASCII format provided. [More\...](#a26749bcf257e18f46431126e34eadbdb)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagObfuscatedTrack1](#a50a3db76f34b17c22ace8c88bfaf08fa) |
|   | ASCII format provided. [More\...](#a50a3db76f34b17c22ace8c88bfaf08fa)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagObfuscatedTrack2](#a1b980f4e82826e3c4bff07e0eec7cc2d) |
|   | ASCII format provided. [More\...](#a1b980f4e82826e3c4bff07e0eec7cc2d)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagStan](#a967306a5cbb80918a0e54cd26a5fa664) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagTransAmount](#add2cc0b255a1edd21bca8c9c873201df) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagVSSPropData](#a88a475df15f6326ae91556a87a8b6d56) |
|   | proprietary data passed to VSS scripts [More\...](#a88a475df15f6326ae91556a87a8b6d56)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagFlagBypassKsnIncr](#a534911360b6c2283c71eb96473875dbe) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagNextKSNState](#aabd8c4732ca2db77bd843a7523863e27) |
|   | int expected [More\...](#aabd8c4732ca2db77bd843a7523863e27)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [Tag0PinBlockRequest](#a3a77528eab825d9fbc8df0a24cb584c2) |
|   | bool do 0PinBlockRequest [More\...](#a3a77528eab825d9fbc8df0a24cb584c2)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [\_TDindex](#a8f0c510e4d1b27f2aa280d53a676a001) |
|   | internally used for secEncryptTransactionData to refer TD-Value to be encrypted [More\...](#a8f0c510e4d1b27f2aa280d53a676a001)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [\_SessionKey](#a085856e50c4d4d2710818e103565ab53) |
|   | internally used to store SessionKey (MSK) [More\...](#a085856e50c4d4d2710818e103565ab53)<br/> |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagCryptoRWLegacyDecrypt](#ab5aff0278f7b0482a946cf9008dacb7d) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagTrustConn](#af27061b20519dff632029d078ec76426) |
| static const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a>  | [TagPeerUID](#ade93de6b51563a3b65ad89b55e97043b) |

## Constructor& Destructor Documentation

## CTransactionData()\[1/2\] <a href="#a11419fb46b809a3ad9744800aa1e4ad2" id="a11419fb46b809a3ad9744800aa1e4ad2"></a> {#ctransactiondata-12}

<p><a href="classcom__adksec__cmd_1_1_c_transaction_data.md">CTransactionData</a></p>

## CTransactionData()\[2/2\] <a href="#a67f53d824e4feb6d2bd0a835edf0e70b" id="a67f53d824e4feb6d2bd0a835edf0e70b"></a> {#ctransactiondata-22}

<p><a href="classcom__adksec__cmd_1_1_c_transaction_data.md">CTransactionData</a></p>

## \~CTransactionData() <a href="#a0f5b4a60590e085453de19319f1eebfc" id="a0f5b4a60590e085453de19319f1eebfc"></a>

<p>virtual \~<a href="classcom__adksec__cmd_1_1_c_transaction_data.md">CTransactionData</a></p>

virtual

## MemberFunction Documentation {#member-function-documentation}

## dump() <a href="#a7de861082da81700dd1481385268c4ff" id="a7de861082da81700dd1481385268c4ff"></a>

<p>std::string dump</p>

## isAvailable() <a href="#af46b3cdc245b72805647d3f73b93fdb5" id="af46b3cdc245b72805647d3f73b93fdb5"></a>

<p>bool isAvailable</p>

## load() <a href="#a52363cd24719cd696e4b260fdac780db" id="a52363cd24719cd696e4b260fdac780db"></a>

<p>void load</p>

## FieldDocumentation {#field-documentation}

## \_SessionKey <a href="#a085856e50c4d4d2710818e103565ab53" id="a085856e50c4d4d2710818e103565ab53"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> \_SessionKey</p>

static

internally used to store SessionKey (MSK)

## \_TDindex <a href="#a8f0c510e4d1b27f2aa280d53a676a001" id="a8f0c510e4d1b27f2aa280d53a676a001"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> \_TDindex</p>

static

internally used for secEncryptTransactionData to refer TD-Value to be encrypted

## setDUKPTmasks <a href="#af99ef157338b014adb407416d0745b8f" id="af99ef157338b014adb407416d0745b8f"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> setDUKPTmasks</p>

static

## Tag0PinBlockRequest <a href="#a3a77528eab825d9fbc8df0a24cb584c2" id="a3a77528eab825d9fbc8df0a24cb584c2"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> Tag0PinBlockRequest</p>

static

bool do 0PinBlockRequest

## TagADEEncMode <a href="#af5e1be69936d0509ab4c7e5be5974f9d" id="af5e1be69936d0509ab4c7e5be5974f9d"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagADEEncMode</p>

static

## TagAlphaNum <a href="#a6aeff9d05a4f0cf904432b3833b3f081" id="a6aeff9d05a4f0cf904432b3833b3f081"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagAlphaNum</p>

static

ASCII format expected.

## TagAS2805Func <a href="#a76a30cfa9bd719a3e5a4d6464f1a8b01" id="a76a30cfa9bd719a3e5a4d6464f1a8b01"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagAS2805Func</p>

static

## TagBendigoKEKFlag <a href="#a06433ac0e068cf8c70d478d0512efa40" id="a06433ac0e068cf8c70d478d0512efa40"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagBendigoKEKFlag</p>

static

## TagByteArray <a href="#aa0a0a34eecf5ca7d5569f88509023c3b" id="aa0a0a34eecf5ca7d5569f88509023c3b"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagByteArray</p>

static

ASCII format expected.

## TagCardDataType <a href="#a291eba7cf1f9f49492153a2bebdfb6f0" id="a291eba7cf1f9f49492153a2bebdfb6f0"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagCardDataType</p>

static

ASCII format expected.

## TagCHName <a href="#ac59568cd75a9ad51d16b66886ee492ef" id="ac59568cd75a9ad51d16b66886ee492ef"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagCHName</p>

static

ASCII format expected.

## TagCryptoRWLegacyDecrypt <a href="#ab5aff0278f7b0482a946cf9008dacb7d" id="ab5aff0278f7b0482a946cf9008dacb7d"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagCryptoRWLegacyDecrypt</p>

static

## TagFlagBypassKsnIncr <a href="#a534911360b6c2283c71eb96473875dbe" id="a534911360b6c2283c71eb96473875dbe"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagFlagBypassKsnIncr</p>

static

## TagHostName <a href="#af5bec0d34599f4c601103a062bdf69ed" id="af5bec0d34599f4c601103a062bdf69ed"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagHostName</p>

static

## TagIPPUseBinFormat <a href="#a94a7b675572189cf4c3786b8da85f2dd" id="a94a7b675572189cf4c3786b8da85f2dd"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagIPPUseBinFormat</p>

static

## TagKeySetID <a href="#ada66db3e2e7ffdf208da77c358a130d8" id="ada66db3e2e7ffdf208da77c358a130d8"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagKeySetID</p>

static

## TagMID <a href="#a8d11900f080068bd258c318d0c316701" id="a8d11900f080068bd258c318d0c316701"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagMID</p>

static

ASCII format expected.

## TagNextKSNState <a href="#aabd8c4732ca2db77bd843a7523863e27" id="aabd8c4732ca2db77bd843a7523863e27"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagNextKSNState</p>

static

int expected

## TagObfuscatedCHName <a href="#a26749bcf257e18f46431126e34eadbdb" id="a26749bcf257e18f46431126e34eadbdb"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagObfuscatedCHName</p>

static

ASCII format provided.

## TagObfuscatedPAN <a href="#ab463c9122c9a52b6bc2ea1c4331dcb90" id="ab463c9122c9a52b6bc2ea1c4331dcb90"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagObfuscatedPAN</p>

static

ASCII format provided.

## TagObfuscatedTrack1 <a href="#a50a3db76f34b17c22ace8c88bfaf08fa" id="a50a3db76f34b17c22ace8c88bfaf08fa"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagObfuscatedTrack1</p>

static

ASCII format provided.

## TagObfuscatedTrack2 <a href="#a1b980f4e82826e3c4bff07e0eec7cc2d" id="a1b980f4e82826e3c4bff07e0eec7cc2d"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagObfuscatedTrack2</p>

static

ASCII format provided.

## TagPAN <a href="#a790affb24f06596955ee45cfdf8e7e75" id="a790affb24f06596955ee45cfdf8e7e75"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagPAN</p>

static

ASCII format expected.

## TagPANandCVV <a href="#a45d530ec3b75ebf0dde157237ce2bdc6" id="a45d530ec3b75ebf0dde157237ce2bdc6"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagPANandCVV</p>

static

ASCII format expected.

## TagPeerUID <a href="#ade93de6b51563a3b65ad89b55e97043b" id="ade93de6b51563a3b65ad89b55e97043b"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagPeerUID</p>

static

## TagStan <a href="#a967306a5cbb80918a0e54cd26a5fa664" id="a967306a5cbb80918a0e54cd26a5fa664"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagStan</p>

static

## TagTrack1 <a href="#ad1e31d711238acdeabc67b3bc8cb3276" id="ad1e31d711238acdeabc67b3bc8cb3276"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagTrack1</p>

static

ASCII format expected.

## TagTrack2 <a href="#a067a929e2de18912d1b4ef207502c62e" id="a067a929e2de18912d1b4ef207502c62e"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagTrack2</p>

static

ASCII format expected.

## TagTrack3 <a href="#acc4988f66189ea867e25ee2d3a684d04" id="acc4988f66189ea867e25ee2d3a684d04"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagTrack3</p>

static

ASCII format expected.

## TagTransAmount <a href="#add2cc0b255a1edd21bca8c9c873201df" id="add2cc0b255a1edd21bca8c9c873201df"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagTransAmount</p>

static

## TagTrustConn <a href="#af27061b20519dff632029d078ec76426" id="af27061b20519dff632029d078ec76426"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagTrustConn</p>

static

## TagVSSDUKPTMaskENC <a href="#aaa6658b9d075bad211bbcb692b3080c7" id="aaa6658b9d075bad211bbcb692b3080c7"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagVSSDUKPTMaskENC</p>

static

## TagVSSDUKPTMaskMAC <a href="#ae1f03aa34f88ca2a2d2b48d20dc42a17" id="ae1f03aa34f88ca2a2d2b48d20dc42a17"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagVSSDUKPTMaskMAC</p>

static

## TagVSSDUKPTMaskPIN <a href="#a2184e7cd21e24db145ac95c0d4188878" id="a2184e7cd21e24db145ac95c0d4188878"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagVSSDUKPTMaskPIN</p>

static

## TagVSSPropData <a href="#a88a475df15f6326ae91556a87a8b6d56" id="a88a475df15f6326ae91556a87a8b6d56"></a>

<p>const <a href="namespacecom__adksec__cmd.md#ad15b3c697f22fd80a8a42e5547c5b8e4">secIndex_t</a> TagVSSPropData</p>

static

proprietary data passed to VSS scripts

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sec/src/api/export/sec/<a href="_c_transaction_data_8h_source.md">CTransactionData.h</a>
