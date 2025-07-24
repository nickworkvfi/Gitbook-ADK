---
hidden: true
title: sdi_emv.h File Reference
---

[Data Structures](#nested-classes) \| [Namespaces](#namespaces) \| [Macros](#define-members) \| [Typedefs](#typedef-members)

`#include "`<a href="tlv_8h_source.md">tlv.h</a>`"`
`#include "`<a href="sdi__enum_8h_source.md">sdi_enum.h</a>`"`
`#include "`<a href="sdi__emvbits_8h_source.md">sdi_emvbits.h</a>`"`
`#include "`<a href="array_8h_source.md">array.h</a>`"`
`#include "`<a href="bcd_8h_source.md">bcd.h</a>`"`
`#include <utility>`

Include dependency graph for sdi_emv.h:

![](sdiapi_2src_2sdiapi_2sdi__emv_8h__incl.png)

This graph shows which files directly or indirectly include this file:

![](sdiapi_2src_2sdiapi_2sdi__emv_8h__dep__incl.png)

<a href="sdiapi_2src_2sdiapi_2sdi__emv_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Data Structures |  |
| class   | <a href="classvfisdi_1_1_e_m_v_special_transactions.md">EMVSpecialTransactions</a> |
| struct   | <a href="structvfisdi_1_1_e_m_v_conf.md">EMVConf</a> |
| struct   | <a href="structvfisdi_1_1_e_m_v_conf.md#structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits">EMVConf::DynamicReaderLimits</a> |
| struct   | <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> |
| struct   | <a href="structvfisdi_1_1_e_m_v_txn.md#structvfisdi_1_1_e_m_v_txn_1_1_domestic_app">EMVTxn::DomesticApp</a> |
| struct   | <a href="structvfisdi_1_1_e_m_v_txn.md#structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r">EMVTxn::FallbackMSR</a> |
| struct   | <a href="structvfisdi_1_1_e_m_v_txn.md#structvfisdi_1_1_e_m_v_txn_1_1_candidate">EMVTxn::Candidate</a> |
| struct   | <a href="structvfisdi_1_1_e_m_v_txn.md#structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext">EMVTxn::CandidateExt</a> |

|            |                                                  |
|------------|--------------------------------------------------|
| Namespaces |                                                  |
|            | <a href="namespacevfisdi.md">vfisdi</a> |

|          |                                               |
|----------|-----------------------------------------------|
| Macros   |                                               |
| #define  | [DllSpec](#ad7c2e1cb200073ed64c64285a5f37231) |

|  |  |
|----|----|
| Typedefs |  |
| typedef BitMask\< 40, EMVAppFlowCapabilityBits \>  | <a href="namespacevfisdi.md#a44617adc8f4a66d0aed5cc243140d735">EMVAppFlowCapabilities</a> |
| typedef BitMask\< 40, EMVKernelAppFlowCapabilityBits \>  | <a href="namespacevfisdi.md#afbf44378c420013894c6d1ec2396557a">EMVKernelAppFlowCapabilities</a> |
| typedef BitMask\< 80, EMVFlowOptionBits \>  | <a href="namespacevfisdi.md#a7aa35087a65d5c2673093eaeecd7a30f">EMVFlowOptions</a> |
| typedef BitMask\< 40, EMVChecksumOptionBits \>  | <a href="namespacevfisdi.md#af00bb692a2a174186fe3cb16326581bd">EMVChecksumOptions</a> |
| typedef BitMask\< 40, EMVTransactionOptionBits \>  | <a href="namespacevfisdi.md#aa3b8e383f2f4b4a88300bbeb10f423bb">EMVTransactionOptions</a> |
| typedef BitMask\< 24, EMVTransactionStepBits \>  | <a href="namespacevfisdi.md#ab48783102ea080d5f86d54616950c195">EMVTransactionSteps</a> |
| typedef BitMask\< 24, EMVDomesticOptionBits \>  | <a href="namespacevfisdi.md#a7fcca20a9f7822f498e8019bb6418bd9">EMVDomesticOptions</a> |

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfisdi::EMVConf::DynamicReaderLimits <a href="#structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits" id="structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits"></a>

<p>struct vfisdi::EMVConf::DynamicReaderLimits</p>

dynamic reader limits

Collaboration diagram for EMVConf::DynamicReaderLimits:

![Collaboration graph](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

| Data Fields |  |  |
|----|----|----|
| <a href="structvfisdi_1_1_e_m_v_conf.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | appProgramID | <p>application program ID (9F5A)</p> |
| <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> | CVMRequiredLimit | <p>CVM required limit (DFAB42)</p> |
| <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> | floorLimit | <p>floor limit (DFAB40)</p> |
| unsigned char | options | <p>dynamic reader options (DFAB49)</p> |
| <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> | transactionLimit | <p>transaction limit (DFAB41)</p> |

## vfisdi::EMVTxn::DomesticApp <a href="#structvfisdi_1_1_e_m_v_txn_1_1_domestic_app" id="structvfisdi_1_1_e_m_v_txn_1_1_domestic_app"></a>

<p>struct vfisdi::EMVTxn::DomesticApp</p>

domestic application information

| Data Fields |  |  |
|----|----|----|
| <a href="structvfisdi_1_1_e_m_v_txn.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | aid | <p>(DF04)<br/></p> |
| string | appLabel | <p>(50)<br/></p> |
| unsigned char | asi | <p>(DFAB02)</p> |
| unsigned char | noEMVConformSelect | <p>(DF6A)<br/></p> |
| unsigned char | specialTX\[8\] | <p>(DF1C)<br/></p> |

## vfisdi::EMVTxn::FallbackMSR <a href="#structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r" id="structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r"></a>

<p>struct vfisdi::EMVTxn::FallbackMSR</p>

fallback configuration

| Data Fields   |                |                                 |
|---------------|----------------|---------------------------------|
| unsigned char | fallback       | <p>(DF18)</p> |
| unsigned char | mid            | <p>(DF17)</p> |
| unsigned char | options        | <p>(DF3A)</p> |
| unsigned char | specialTX\[8\] | <p>(DF1C)</p> |

## vfisdi::EMVTxn::Candidate <a href="#structvfisdi_1_1_e_m_v_txn_1_1_candidate" id="structvfisdi_1_1_e_m_v_txn_1_1_candidate"></a>

<p>struct vfisdi::EMVTxn::Candidate</p>

<a href="structvfisdi_1_1_e_m_v_txn.md#structvfisdi_1_1_e_m_v_txn_1_1_candidate">Candidate</a>

| Data Fields |  |  |
|----|----|----|
| <a href="structvfisdi_1_1_e_m_v_txn.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | aid | <p>(DF04)</p> |
| string | appName | <p>(50)<br/></p> |

## vfisdi::EMVTxn::CandidateExt <a href="#structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext" id="structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext"></a>

<p>struct vfisdi::EMVTxn::CandidateExt</p>

<a href="structvfisdi_1_1_e_m_v_txn.md#structvfisdi_1_1_e_m_v_txn_1_1_candidate">Candidate</a> entry in callback

| Data Fields |  |  |
|----|----|----|
| <a href="structvfisdi_1_1_e_m_v_txn.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> | aid | <p>(DF04)</p> |
| string | appName | <p>(50)<br/></p> |
| unsigned | kernelID | <p>(DFD003)</p> |
| string | language | <p>(5F2D)</p> |
| unsigned char | velocityOrigIdx | <p>(DF60)</p> |
| unsigned char | velocityProcResult | <p>(DF63)</p> |

## MacroDefinition Documentation {#macro-definition-documentation}

## DllSpec <a href="#ad7c2e1cb200073ed64c64285a5f37231" id="ad7c2e1cb200073ed64c64285a5f37231"></a>

<p>#define DllSpec</p>
