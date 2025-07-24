---
hidden: true
title: Support of cardholder confirmationTransaction execution » Input data
---

[Data Structures](#nested-classes) \| [Macros](#define-members) \| [Typedefs](#typedef-members)

DF4D, see `ucCardholderConfirmation` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#ga58431469c9e1e41d6e419cbc246fd4bb">EMV_CT_SELECT_TYPE</a>. [More\...](#details)

Collaboration diagram for Support of cardholder confirmation:

![](group___d_e_f___c_a_r_d___c_o_n_f.png)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [EMV_CTLS_CAPKEY_STRUCT](#struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t) |
|   | Data structure CAP keys. [More\...](#struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t)<br/> |
| struct   | [EMV_CTLS_CAPREAD_STRUCT](#struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t) |
|   | Data structure CAP keys. [More\...](#struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t)<br/> |
| struct   | [EMV_CT_CAPKEY_STRUCT](#struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t) |
|   | Data structure CAP keys. [More\...](#struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t)<br/> |
| struct   | [EMV_CT_CAPREAD_STRUCT](#struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t) |
|   | Data structure CAP keys. [More\...](#struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t)<br/> |

|  |  |
|----|----|
| Macros |  |
| #define  | [CARD_CONF_YES](#ga34d11839da6a5658907809a64d00abb3)   0x00 |
|   | **default**<br/>support of cardholder confirmation [More\...](#ga34d11839da6a5658907809a64d00abb3)<br/> |
| #define  | [CARD_CONF_NO](#gac6be81480e56217a190f5176c952baed)   0x01 |
|   | no cardholder confirmation, e.g. no cardholder display [More\...](#gac6be81480e56217a190f5176c952baed)<br/> |

|  |  |
|----|----|
| Typedefs |  |
| typedef struct [EMV_CTLS_CAPKEY_STRUCT](#struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t)  | [EMV_CTLS_CAPKEY_TYPE](#ga29fb30f218cea136b382fedf85650300) |
|   | Data structure CAP keys. [More\...](#ga29fb30f218cea136b382fedf85650300)<br/> |
| typedef struct [EMV_CTLS_CAPREAD_STRUCT](#struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t)  | [EMV_CTLS_CAPREAD_TYPE](#ga0bc19981bd2520ebd2fb7b58a70dde6b) |
|   | Data structure CAP keys. [More\...](#ga0bc19981bd2520ebd2fb7b58a70dde6b)<br/> |
| typedef struct [EMV_CT_CAPKEY_STRUCT](#struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t)  | [EMV_CT_CAPKEY_TYPE](#gaec114225658dc96eade72d72c1a7ca58) |
|   | Data structure CAP keys. [More\...](#gaec114225658dc96eade72d72c1a7ca58)<br/> |
| typedef struct [EMV_CT_CAPREAD_STRUCT](#struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t)  | [EMV_CT_CAPREAD_TYPE](#ga1d17166f51e2bc35511368552eab687a) |
|   | Data structure CAP keys. [More\...](#ga1d17166f51e2bc35511368552eab687a)<br/> |

## DetailedDescription {#detailed-description}

DF4D, see `ucCardholderConfirmation` in <a href="group___a_d_k___t_r_x___e_x_e_c.md#ga58431469c9e1e41d6e419cbc246fd4bb">EMV_CT_SELECT_TYPE</a>.

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## EMV_CTLS_CAPKEY_STRUCT <a href="#struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t" id="struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t"></a>

<p>struct EMV_CTLS_CAPKEY_STRUCT</p>

Data structure CAP keys.

Max. no.: <a href="_e_m_v___c_t_l_s___interface_8h.md#aec6ff9dcf4956993e9dd0b290490365d">MAX_CTLS_CONF_KEYS</a>

| Data Fields |  |  |
|----|----|----|
| unsigned char | Exponent | Exponent - 01 used for 65537<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3301dc858f4033e7100dae7d71a7e1e0">TAG_KEY_EXPONENT</a><br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga19533a461456afae8eb33ee784fd361b">XML_TAG_CAP_KEYS_EXPONENT</a>. |
| unsigned char \* | Hash | Hash value of rid, index, key, exponent<br/>Optional, if not provided it\'s simply not checked.<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac037a26b7d73563286fb125d59f1265d">TAG_KEY_HASH</a><br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#gad6a0497d2964a67cec810ea12c8279a1">XML_TAG_CAP_KEYS_HASH</a>. |
| unsigned char | Index | Index<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga7b2bdd988a89e21cd04afe12a30c0ddf">TAG_KEY_INDEX</a><br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga2564b8002f03295e157b242ad2efa950">XML_TAG_CAP_KEYS_INDEX</a>. |
| unsigned char \* | Key | Actual Key data<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a><br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga151215aa136d44cb12e3ea1d392c744f">XML_TAG_CAP_KEYS_KEY</a>. |
| unsigned char | KeyLen | length of key in bytes<br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga94a87250bc33e6e85a09285f832fbfd9">XML_TAG_CAP_KEYS_KEYLEN</a> |
| unsigned char | noOfRevocEntries | No of entries in revocation list. |
| unsigned char \* | RevocEntries | Revocation list, each entry consists of 3 byte serial no.<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae92f2b4a70d0c2217bdcc751106477d1">TAG_KEY_CRL</a><br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga1e433908dd992082b5a252f39d60f45d">XML_TAG_CAP_KEYS_REVOC_LIST</a>. |
| unsigned char \* | RID | Registered Identifier<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga0c86b48955a7de5b01796ece1dd8157b">TAG_KEY_RID</a><br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga2acfa293c67d4c30b81f26f1fc51f677">XML_TAG_CAP_KEYS_RID</a>. |

## EMV_CTLS_CAPREAD_STRUCT <a href="#struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t" id="struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t"></a>

<p>struct EMV_CTLS_CAPREAD_STRUCT</p>

Data structure CAP keys.

| Data Fields |  |  |
|----|----|----|
| unsigned char | Index | Index<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga7b2bdd988a89e21cd04afe12a30c0ddf">TAG_KEY_INDEX</a>. |
| unsigned char | KeyLen | length of key in bytes<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaae9648dee8748715de2de847955929f5">TAG_KEY_KEYLEN</a> |
| unsigned char | RID\[5\] | Registered Identifier<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga0c86b48955a7de5b01796ece1dd8157b">TAG_KEY_RID</a>. |

## EMV_CT_CAPKEY_STRUCT <a href="#struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t" id="struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t"></a>

<p>struct EMV_CT_CAPKEY_STRUCT</p>

Data structure CAP keys.

| Data Fields |  |  |
|----|----|----|
| unsigned char | Exponent | Exponent - 01 used for 65537<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga3301dc858f4033e7100dae7d71a7e1e0">TAG_KEY_EXPONENT</a>,<br/>Exponent in [EMV_CT_CAPKEY_STRUCT::Exponent](#a65d7fb542cdae2f7104b266bbe3ac9b2 "Exponent - 01 used for 65537   TLV tag TAG_KEY_EXPONENT,   Exponent in EMV_CT_CAPKEY_STRUCT::Exponent..."),<br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga19533a461456afae8eb33ee784fd361b">XML_TAG_CAP_KEYS_EXPONENT</a>. |
| unsigned char \* | Hash | Hash value of rid, index, key, exponent<br/>Optional, if not provided it\'s simply not checked.<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gac037a26b7d73563286fb125d59f1265d">TAG_KEY_HASH</a>,<br/>Hash in [EMV_CT_CAPKEY_STRUCT::Hash](#aa04067e88f6cfe9465c0a92f7233ebee "Hash value of rid, index, key, exponent   Optional, if not provided it's simply not checked...."),<br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#gad6a0497d2964a67cec810ea12c8279a1">XML_TAG_CAP_KEYS_HASH</a>. |
| unsigned char | Index | Index<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga7b2bdd988a89e21cd04afe12a30c0ddf">TAG_KEY_INDEX</a>,<br/>Index in [EMV_CT_CAPKEY_STRUCT::Index](#ac24ea04d0a0218723498d1632c6875a9 "Index   TLV tag TAG_KEY_INDEX,   Index in EMV_CT_CAPKEY_STRUCT::Index,   XML Tag: XML_TAG_CAP_KEYS_IN..."),<br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga2564b8002f03295e157b242ad2efa950">XML_TAG_CAP_KEYS_INDEX</a>. |
| unsigned char \* | Key | Actual Key data<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaf84423fc102deeb813ec75aa301facca">TAG_KEY_KEY</a>,<br/>Key in [EMV_CT_CAPKEY_STRUCT::Key](#a0a3543353678a64e265f8d5a817c52db "Actual Key data   TLV tag TAG_KEY_KEY,   Key in EMV_CT_CAPKEY_STRUCT::Key,   XML Tag: XML_TAG_CAP_KEY..."),<br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga151215aa136d44cb12e3ea1d392c744f">XML_TAG_CAP_KEYS_KEY</a>. |
| unsigned char | KeyLen | length of key in bytes<br/>KeyLen in [EMV_CT_CAPKEY_STRUCT::KeyLen](#aeb6f1a41fb682dc06cfdc1d0c1bef18f "length of key in bytes   KeyLen in EMV_CT_CAPKEY_STRUCT::KeyLen,   XML Tag: XML_TAG_CAP_KEYS_KEYLEN"),<br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga94a87250bc33e6e85a09285f832fbfd9">XML_TAG_CAP_KEYS_KEYLEN</a> |
| unsigned char | noOfRevocEntries | No of entries in revocation list. |
| unsigned char \* | RevocEntries | Revocation list, each entry consists of 3 byte serial no.<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gae92f2b4a70d0c2217bdcc751106477d1">TAG_KEY_CRL</a>,<br/>RevocEntries in [EMV_CT_CAPKEY_STRUCT::RevocEntries](#aad05155fcd539c313f48260d8ebd2f76 "Revocation list, each entry consists of 3 byte serial no.   TLV tag TAG_KEY_CRL,   RevocEntries in EM..."),<br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga1e433908dd992082b5a252f39d60f45d">XML_TAG_CAP_KEYS_REVOC_LIST</a>. |
| unsigned char \* | RID | Registered Identifier<br/>TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga0c86b48955a7de5b01796ece1dd8157b">TAG_KEY_RID</a>,<br/>RID in [EMV_CT_CAPKEY_STRUCT::RID](#a7d507a69b2eb69015b1ced0f4c4d47fd "Registered Identifier   TLV tag TAG_KEY_RID,   RID in EMV_CT_CAPKEY_STRUCT::RID,   XML Tag: XML_TAG_C..."),<br/>XML Tag: <a href="group___a_d_k___x_m_l___t_a_g_s.md#ga2acfa293c67d4c30b81f26f1fc51f677">XML_TAG_CAP_KEYS_RID</a>. |

## EMV_CT_CAPREAD_STRUCT <a href="#struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t" id="struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t"></a>

<p>struct EMV_CT_CAPREAD_STRUCT</p>

Data structure CAP keys.

| Data Fields |  |  |
|----|----|----|
| unsigned char | Index | Index, TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga7b2bdd988a89e21cd04afe12a30c0ddf">TAG_KEY_INDEX</a>. |
| unsigned char | KeyLen | Length of key in bytes, TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#gaae9648dee8748715de2de847955929f5">TAG_KEY_KEYLEN</a>. |
| unsigned char | RID\[5\] | Registered Identifier, TLV tag <a href="group___v_e_r_i___p_r_i_m___t_a_g_s.md#ga0c86b48955a7de5b01796ece1dd8157b">TAG_KEY_RID</a>. |

## MacroDefinition Documentation {#macro-definition-documentation}

## CARD_CONF_NO <a href="#gac6be81480e56217a190f5176c952baed" id="gac6be81480e56217a190f5176c952baed"></a>

<p>#define CARD_CONF_NO   0x01</p>

no cardholder confirmation, e.g. no cardholder display

## CARD_CONF_YES <a href="#ga34d11839da6a5658907809a64d00abb3" id="ga34d11839da6a5658907809a64d00abb3"></a>

<p>#define CARD_CONF_YES   0x00</p>

**default**
support of cardholder confirmation

## TypedefDocumentation {#typedef-documentation}

## EMV_CT_CAPKEY_TYPE <a href="#gaec114225658dc96eade72d72c1a7ca58" id="gaec114225658dc96eade72d72c1a7ca58"></a>

<p>typedef struct [EMV_CT_CAPKEY_STRUCT](#struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t) [EMV_CT_CAPKEY_TYPE](#gaec114225658dc96eade72d72c1a7ca58)</p>

Data structure CAP keys.

## EMV_CT_CAPREAD_TYPE <a href="#ga1d17166f51e2bc35511368552eab687a" id="ga1d17166f51e2bc35511368552eab687a"></a>

<p>typedef struct [EMV_CT_CAPREAD_STRUCT](#struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t) [EMV_CT_CAPREAD_TYPE](#ga1d17166f51e2bc35511368552eab687a)</p>

Data structure CAP keys.

## EMV_CTLS_CAPKEY_TYPE <a href="#ga29fb30f218cea136b382fedf85650300" id="ga29fb30f218cea136b382fedf85650300"></a>

<p>typedef struct [EMV_CTLS_CAPKEY_STRUCT](#struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t) [EMV_CTLS_CAPKEY_TYPE](#ga29fb30f218cea136b382fedf85650300)</p>

Data structure CAP keys.

Max. no.: <a href="_e_m_v___c_t_l_s___interface_8h.md#aec6ff9dcf4956993e9dd0b290490365d">MAX_CTLS_CONF_KEYS</a>

## EMV_CTLS_CAPREAD_TYPE <a href="#ga0bc19981bd2520ebd2fb7b58a70dde6b" id="ga0bc19981bd2520ebd2fb7b58a70dde6b"></a>

<p>typedef struct [EMV_CTLS_CAPREAD_STRUCT](#struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t) [EMV_CTLS_CAPREAD_TYPE](#ga0bc19981bd2520ebd2fb7b58a70dde6b)</p>

Data structure CAP keys.
