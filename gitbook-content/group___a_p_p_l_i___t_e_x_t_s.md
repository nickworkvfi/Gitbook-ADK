---
hidden: true
title: Application text IDsConfiguration » Text data
---

[Macros](#define-members)

Also see <a href="_e_m_v___common___interface_8h.md#struct_e_m_v___a_d_k___t_x_t___t_y_p_e">EMV_ADK_TXT_TYPE</a>. [More\...](#details)

Collaboration diagram for Application text IDs:

![](group___a_p_p_l_i___t_e_x_t_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_TXT_NO_TXT](#gabc10182641e2b92d8a8beee6041cdb04)   0x00 |
|   | no text (internal use) [More\...](#gabc10182641e2b92d8a8beee6041cdb04)<br/> |
| #define  | [EMV_ADK_TXT_REFUND_CONF_AMOUNT](#ga390ca86e7ed5d542c7939a64012e066d)   0x01 |
|   | Refund<br/>EUR XXXXXX,XX<br/>Please confirm<br/>Needed in case <a href="group___t_r_a_n_s___t_y_p_e_s.md#gaf341bd2190b00ce5ee3a8acf6d5311ab">EMV_ADK_TRAN_TYPE_REFUND</a> `AND` <a href="adk__emv__contactless__programmers__guide_8dox.md#a4edf2c5ac7045ec648b60ad31aee30d5">REFUND_CONFIRM_AMOUNT</a>. [More\...](#ga390ca86e7ed5d542c7939a64012e066d)<br/> |
| #define  | [EMV_ADK_TXT_AMOUNT](#ga0558cc3b6c6248c66a7f807b1d435647)   0x02 |
|   | AMOUNT<br/>EUR XXXXXX,XX<br/>PLEASE CONFIRM. [More\...](#ga0558cc3b6c6248c66a7f807b1d435647)<br/> |
| #define  | [EMV_ADK_TXT_3AMO_TIP](#gacbaa960b8006833639293641293bca87)   0xA1 |
|   | second part for 3 amounts for payment with tip input [More\...](#gacbaa960b8006833639293641293bca87)<br/> |
| #define  | [EMV_ADK_TXT_3AMO_CASHBACK](#ga0c45413f78ee57ef8a9de6d1e178df79)   0xA2 |
|   | second part for 3 amounts for payment with cash back [More\...](#ga0c45413f78ee57ef8a9de6d1e178df79)<br/> |
| #define  | [EMV_ADK_TXT_APPROVED](#gad26ca3c6d7d4ba03afbd9f69cbb4df9c)   0x03 |
|   | APPROVED. [More\...](#gad26ca3c6d7d4ba03afbd9f69cbb4df9c)<br/> |
| #define  | [EMV_ADK_TXT_AUTH_APPROVED](#ga23a08236bbdbc14612824ea163b35842)   0xA3 |
|   | like [EMV_ADK_TXT_APPROVED](#gad26ca3c6d7d4ba03afbd9f69cbb4df9c "APPROVED."), but for reservation [More\...](#ga23a08236bbdbc14612824ea163b35842)<br/> |
| #define  | [EMV_ADK_TXT_DECLINED](#ga173c88a3195a0a2b2f92991558425599)   0x04 |
|   | DECLINED. [More\...](#ga173c88a3195a0a2b2f92991558425599)<br/> |
| #define  | [EMV_ADK_TXT_AUTH_DECLINED](#ga962b68fb44b77ae67a05d02048f6bd1d)   0xA4 |
|   | like [EMV_ADK_TXT_DECLINED](#ga173c88a3195a0a2b2f92991558425599 "DECLINED."), but for reservation [More\...](#ga962b68fb44b77ae67a05d02048f6bd1d)<br/> |
| #define  | [EMV_ADK_TXT_NOT_ACCEPTED](#ga991b99b910359dd1e10cededa6dab633)   0x05 |
|   | NOT ACCEPTED. [More\...](#ga991b99b910359dd1e10cededa6dab633)<br/> |
| #define  | [EMV_ADK_TXT_CARD_ERROR](#ga57a4be310e970d3500560e2e8731b12f)   0x06 |
|   | CARD ERROR. [More\...](#ga57a4be310e970d3500560e2e8731b12f)<br/> |
| #define  | [EMV_ADK_TXT_PROCESSING_ERROR](#gafc7f3b612dd3b550ffe3c68c5cf091cb)   0x07 |
|   | PROCESSING ERROR. [More\...](#gafc7f3b612dd3b550ffe3c68c5cf091cb)<br/> |
| #define  | [EMV_ADK_TXT_CARD_READ_OK](#gad7e7de5f5a50e905dabfd69425b5576f)   0x08 |
|   | card read ok [More\...](#gad7e7de5f5a50e905dabfd69425b5576f)<br/> |
| #define  | [EMV_ADK_TXT_AUTHORIZING](#ga379015f0f9cbf0d45dfdf7d1335764a1)   0x09 |
|   | authorizing [More\...](#ga379015f0f9cbf0d45dfdf7d1335764a1)<br/> |
| #define  | [EMV_ADK_TXT_REMOVE_CARD](#gae9a6dcc7dff865a5dc948c5ff0dd93ae)   0x10 |
|   | REMOVE CARD. [More\...](#gae9a6dcc7dff865a5dc948c5ff0dd93ae)<br/> |
| #define  | [EMV_ADK_TXT_USE_CHIP_READER](#ga78850f4ea87126d2fcb62419b42b4eb2)   0x11 |
| #define  | [EMV_ADK_TXT_USE_MAG_STRIPE](#ga95a1de69cab8cc41e2d5dfa721a4acf0)   0x12 |
| #define  | [EMV_ADK_TXT_VOICEAUT](#gac4470540bcffb5f541338816b193677c)   0x13 |
|   | Voice authorization in case of communication problem. [More\...](#gac4470540bcffb5f541338816b193677c)<br/> |
| #define  | [EMV_ADK_TXT_SEE_PHONE](#gaa06ce44c0d2088762672aa1aa477fde3)   0x14 |
|   | CTLS only: \"See phone for instructions\". [More\...](#gaa06ce44c0d2088762672aa1aa477fde3)<br/> |
| #define  | [EMV_ADK_TXT_RETAP_SAME](#gadfb2cecaf8f3b16eb989316465100c6d)   0x15 |
|   | CTLS only: \"Retap (same) card\", probable reason: torn transaction. [More\...](#gadfb2cecaf8f3b16eb989316465100c6d)<br/> |
| #define  | [EMV_ADK_TXT_RETAP_SAME_L1](#ga8bb77717dbe26d78fb082d5a91d9bb3c)   0x16 |
|   | CTLS only: \"Retap (same) card\", reason: L1 error<br/>Only sent in case <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#ga9b11cdf8f106efd6a9e36f849e450cbe">CLTRXOP_L1_ERROR_CALLBACK()</a> is activated<br/>Dependency to <a href="group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#gab76a9e8e1c16629067e6c5ec8296636a">INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT()</a> [More\...](#ga8bb77717dbe26d78fb082d5a91d9bb3c)<br/> |
| #define  | [EMV_ADK_TXT_2_CARDS_IN_FIELD](#gaca116091371024d852c383cf9c9ff674)   0x17 |
|   | CTLS only: 2 card detected in the field<br/>Only sent in case <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#ga9b11cdf8f106efd6a9e36f849e450cbe">CLTRXOP_L1_ERROR_CALLBACK()</a> is activated. [More\...](#gaca116091371024d852c383cf9c9ff674)<br/> |
| #define  | [EMV_ADK_TXT_CARD_READ_COMPLETE](#gaa413f62fdbb9c0c97871b27cf2bc04be)   0x18 |
|   | CTLS only: waiting for Card Removal in the ADK , App should display Card Read Complete, Remove Card<br/>Only sent in case CTLS_WAIT_CARD_REMOVAL_END() in application flow capabilties is activated. [More\...](#gaa413f62fdbb9c0c97871b27cf2bc04be)<br/> |

## DetailedDescription {#detailed-description}

Also see <a href="_e_m_v___common___interface_8h.md#struct_e_m_v___a_d_k___t_x_t___t_y_p_e">EMV_ADK_TXT_TYPE</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_TXT_2_CARDS_IN_FIELD <a href="#gaca116091371024d852c383cf9c9ff674" id="gaca116091371024d852c383cf9c9ff674"></a>

<p>#define EMV_ADK_TXT_2_CARDS_IN_FIELD   0x17</p>

CTLS only: 2 card detected in the field
Only sent in case <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#ga9b11cdf8f106efd6a9e36f849e450cbe">CLTRXOP_L1_ERROR_CALLBACK()</a> is activated.

## EMV_ADK_TXT_3AMO_CASHBACK <a href="#ga0c45413f78ee57ef8a9de6d1e178df79" id="ga0c45413f78ee57ef8a9de6d1e178df79"></a>

<p>#define EMV_ADK_TXT_3AMO_CASHBACK   0xA2</p>

second part for 3 amounts for payment with cash back

## EMV_ADK_TXT_3AMO_TIP <a href="#gacbaa960b8006833639293641293bca87" id="gacbaa960b8006833639293641293bca87"></a>

<p>#define EMV_ADK_TXT_3AMO_TIP   0xA1</p>

second part for 3 amounts for payment with tip input

## EMV_ADK_TXT_AMOUNT <a href="#ga0558cc3b6c6248c66a7f807b1d435647" id="ga0558cc3b6c6248c66a7f807b1d435647"></a>

<p>#define EMV_ADK_TXT_AMOUNT   0x02</p>

AMOUNT
EUR XXXXXX,XX
PLEASE CONFIRM.

## EMV_ADK_TXT_APPROVED <a href="#gad26ca3c6d7d4ba03afbd9f69cbb4df9c" id="gad26ca3c6d7d4ba03afbd9f69cbb4df9c"></a>

<p>#define EMV_ADK_TXT_APPROVED   0x03</p>

APPROVED.

## EMV_ADK_TXT_AUTH_APPROVED <a href="#ga23a08236bbdbc14612824ea163b35842" id="ga23a08236bbdbc14612824ea163b35842"></a>

<p>#define EMV_ADK_TXT_AUTH_APPROVED   0xA3</p>

like [EMV_ADK_TXT_APPROVED](#gad26ca3c6d7d4ba03afbd9f69cbb4df9c "APPROVED."), but for reservation

## EMV_ADK_TXT_AUTH_DECLINED <a href="#ga962b68fb44b77ae67a05d02048f6bd1d" id="ga962b68fb44b77ae67a05d02048f6bd1d"></a>

<p>#define EMV_ADK_TXT_AUTH_DECLINED   0xA4</p>

like [EMV_ADK_TXT_DECLINED](#ga173c88a3195a0a2b2f92991558425599 "DECLINED."), but for reservation

## EMV_ADK_TXT_AUTHORIZING <a href="#ga379015f0f9cbf0d45dfdf7d1335764a1" id="ga379015f0f9cbf0d45dfdf7d1335764a1"></a>

<p>#define EMV_ADK_TXT_AUTHORIZING   0x09</p>

authorizing

## EMV_ADK_TXT_CARD_ERROR <a href="#ga57a4be310e970d3500560e2e8731b12f" id="ga57a4be310e970d3500560e2e8731b12f"></a>

<p>#define EMV_ADK_TXT_CARD_ERROR   0x06</p>

CARD ERROR.

## EMV_ADK_TXT_CARD_READ_COMPLETE <a href="#gaa413f62fdbb9c0c97871b27cf2bc04be" id="gaa413f62fdbb9c0c97871b27cf2bc04be"></a>

<p>#define EMV_ADK_TXT_CARD_READ_COMPLETE   0x18</p>

CTLS only: waiting for Card Removal in the ADK , App should display Card Read Complete, Remove Card
Only sent in case CTLS_WAIT_CARD_REMOVAL_END() in application flow capabilties is activated.

## EMV_ADK_TXT_CARD_READ_OK <a href="#gad7e7de5f5a50e905dabfd69425b5576f" id="gad7e7de5f5a50e905dabfd69425b5576f"></a>

<p>#define EMV_ADK_TXT_CARD_READ_OK   0x08</p>

card read ok

## EMV_ADK_TXT_DECLINED <a href="#ga173c88a3195a0a2b2f92991558425599" id="ga173c88a3195a0a2b2f92991558425599"></a>

<p>#define EMV_ADK_TXT_DECLINED   0x04</p>

DECLINED.

## EMV_ADK_TXT_NO_TXT <a href="#gabc10182641e2b92d8a8beee6041cdb04" id="gabc10182641e2b92d8a8beee6041cdb04"></a>

<p>#define EMV_ADK_TXT_NO_TXT   0x00</p>

no text (internal use)

## EMV_ADK_TXT_NOT_ACCEPTED <a href="#ga991b99b910359dd1e10cededa6dab633" id="ga991b99b910359dd1e10cededa6dab633"></a>

<p>#define EMV_ADK_TXT_NOT_ACCEPTED   0x05</p>

NOT ACCEPTED.

## EMV_ADK_TXT_PROCESSING_ERROR <a href="#gafc7f3b612dd3b550ffe3c68c5cf091cb" id="gafc7f3b612dd3b550ffe3c68c5cf091cb"></a>

<p>#define EMV_ADK_TXT_PROCESSING_ERROR   0x07</p>

PROCESSING ERROR.

## EMV_ADK_TXT_REFUND_CONF_AMOUNT <a href="#ga390ca86e7ed5d542c7939a64012e066d" id="ga390ca86e7ed5d542c7939a64012e066d"></a>

<p>#define EMV_ADK_TXT_REFUND_CONF_AMOUNT   0x01</p>

Refund
EUR XXXXXX,XX
Please confirm
Needed in case <a href="group___t_r_a_n_s___t_y_p_e_s.md#gaf341bd2190b00ce5ee3a8acf6d5311ab">EMV_ADK_TRAN_TYPE_REFUND</a> `AND` <a href="adk__emv__contactless__programmers__guide_8dox.md#a4edf2c5ac7045ec648b60ad31aee30d5">REFUND_CONFIRM_AMOUNT</a>.

## EMV_ADK_TXT_REMOVE_CARD <a href="#gae9a6dcc7dff865a5dc948c5ff0dd93ae" id="gae9a6dcc7dff865a5dc948c5ff0dd93ae"></a>

<p>#define EMV_ADK_TXT_REMOVE_CARD   0x10</p>

REMOVE CARD.

## EMV_ADK_TXT_RETAP_SAME <a href="#gadfb2cecaf8f3b16eb989316465100c6d" id="gadfb2cecaf8f3b16eb989316465100c6d"></a>

<p>#define EMV_ADK_TXT_RETAP_SAME   0x15</p>

CTLS only: \"Retap (same) card\", probable reason: torn transaction.

## EMV_ADK_TXT_RETAP_SAME_L1 <a href="#ga8bb77717dbe26d78fb082d5a91d9bb3c" id="ga8bb77717dbe26d78fb082d5a91d9bb3c"></a>

<p>#define EMV_ADK_TXT_RETAP_SAME_L1   0x16</p>

CTLS only: \"Retap (same) card\", reason: L1 error
Only sent in case <a href="group___c_l_t_r_x___o_p_t_i_o_n_s.md#ga9b11cdf8f106efd6a9e36f849e450cbe">CLTRXOP_L1_ERROR_CALLBACK()</a> is activated
Dependency to <a href="group___t_e_r_m___f_l_o_w___o_p_t_i_o_n_s.md#gab76a9e8e1c16629067e6c5ec8296636a">INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT()</a>

## EMV_ADK_TXT_SEE_PHONE <a href="#gaa06ce44c0d2088762672aa1aa477fde3" id="gaa06ce44c0d2088762672aa1aa477fde3"></a>

<p>#define EMV_ADK_TXT_SEE_PHONE   0x14</p>

CTLS only: \"See phone for instructions\".

## EMV_ADK_TXT_USE_CHIP_READER <a href="#ga78850f4ea87126d2fcb62419b42b4eb2" id="ga78850f4ea87126d2fcb62419b42b4eb2"></a>

<p>#define EMV_ADK_TXT_USE_CHIP_READER   0x11</p>

## EMV_ADK_TXT_USE_MAG_STRIPE <a href="#ga95a1de69cab8cc41e2d5dfa721a4acf0" id="ga95a1de69cab8cc41e2d5dfa721a4acf0"></a>

<p>#define EMV_ADK_TXT_USE_MAG_STRIPE   0x12</p>

## EMV_ADK_TXT_VOICEAUT <a href="#gac4470540bcffb5f541338816b193677c" id="gac4470540bcffb5f541338816b193677c"></a>

<p>#define EMV_ADK_TXT_VOICEAUT   0x13</p>

Voice authorization in case of communication problem.
