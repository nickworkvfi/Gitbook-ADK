---
hidden: true
title: TEC option tags
---

[Macros](#define-members)

These options can be set by <a href="tec_8h.md#aa237be1f0249503d0b959d3800f1ee34">cts_SetOptions()</a>. [More\...](#details)

|  |  |
|----|----|
| Macros |  |
| #define  | [CTS_OPTION_TAG_APP_ID](#gaf932194d9ad8e368f5a4cc6ba4a66819)   0xDFDB40 |
| #define  | [CTS_OPTION_TAG_SYNC_CARD_TYPE](#ga10f9930ac821ef5f612690b2201f94e3)   0xDFDB41 |
| #define  | [CTS_OPTION_TAG_UX_MSR_TIMEOUT](#gac87bf22ae5667cc2b22f86aad8218ce5)   0xDFDB42 |

## DetailedDescription {#detailed-description}

These options can be set by <a href="tec_8h.md#aa237be1f0249503d0b959d3800f1ee34">cts_SetOptions()</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## CTS_OPTION_TAG_APP_ID <a href="#gaf932194d9ad8e368f5a4cc6ba4a66819" id="gaf932194d9ad8e368f5a4cc6ba4a66819"></a>

<p>#define CTS_OPTION_TAG_APP_ID   0xDFDB40</p>

application ID, passed on to <a href="titusstubs_8cpp.md#a1f0e681b88497ef9e25abde4ed3b5b3b">NFC_VAS_Activate()</a>.

## CTS_OPTION_TAG_SYNC_CARD_TYPE <a href="#ga10f9930ac821ef5f612690b2201f94e3" id="ga10f9930ac821ef5f612690b2201f94e3"></a>

<p>#define CTS_OPTION_TAG_SYNC_CARD_TYPE   0xDFDB41</p>

Card Type for synchroneous (contact) Chip, passed on to <a href="crdsync_8h.md#a54f538cdfe50976653de0ed7550a716b">crdSync_PowerUp()</a>. 1-byte value. Not supported for trinity/android.

## CTS_OPTION_TAG_UX_MSR_TIMEOUT <a href="#gac87bf22ae5667cc2b22f86aad8218ce5" id="gac87bf22ae5667cc2b22f86aad8218ce5"></a>

<p>#define CTS_OPTION_TAG_UX_MSR_TIMEOUT   0xDFDB42</p>

Ux30x only: How long to wait for MSR data after card removal.
Precondition: Callback <a href="group___t_e_c___n_o_t_i_f_i_c_a_t_i_o_n___c_b_k___t_y_p_e.md#ga131e9251b6b4f9c9c7a187c07f12820a">CTS_NOTIFICATION_CBK_TYPE_UX_CARD_INSERTED</a> is registered.
Format b2 (binary coded, little endian). min = 0x0001, max = 0xFFFF = 65535 ms.
\"0x0000\" means \"wait until main timeout of <a href="tec_8h.md#ac6699fe32fc23e90713eb617e9ff25e7">cts_StartSelection()</a> expires\"
