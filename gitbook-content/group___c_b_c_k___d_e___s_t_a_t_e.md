---
hidden: true
title: Options for DataExchange stateTransaction execution » Callback functions
---

[Macros](#define-members)

Used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>, <a href="group___t_l_v___c_b_c_k.md#ga350252d0754af29e65491c61efafd681">TAG_DF8F59_DE_STATE</a>. [More\...](#details)

Collaboration diagram for Options for DataExchange state:

![](group___c_b_c_k___d_e___s_t_a_t_e.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CTLS_DE_STATE_0](#gae12fe535009ed6a4c195f838825966e6)   0x00 |
|   | DataExchange Inactive. [More\...](#gae12fe535009ed6a4c195f838825966e6)<br/> |
| #define  | [EMV_CTLS_DE_STATE_1](#gad22e511f8d14830b7d5bfa21cbe9d562)   0x01 |
|   | MSD/Chip - Waiting for PDOL Data. [More\...](#gad22e511f8d14830b7d5bfa21cbe9d562)<br/> |
| #define  | [EMV_CTLS_DE_STATE_2](#ga520ce402d31d3fd7e03ca056542e89b6)   0x02 |
|   | MSD - Data update prior to RR. [More\...](#ga520ce402d31d3fd7e03ca056542e89b6)<br/> |
| #define  | [EMV_CTLS_DE_STATE_3](#gaceb77514482e4535f8863f8f23778a5e)   0x03 |
|   | MSD - Waiting for proceed to first write flag. [More\...](#gaceb77514482e4535f8863f8f23778a5e)<br/> |
| #define  | [EMV_CTLS_DE_STATE_4](#ga5f696c2c21f0dd85671c6c868e8edef8)   0x04 |
|   | MSD - Final data to send. [More\...](#ga5f696c2c21f0dd85671c6c868e8edef8)<br/> |
| #define  | [EMV_CTLS_DE_STATE_5](#ga0a73912e69c3036c6cdb0bde5cc085f7)   0x05 |
|   | Chip - Update befre/during RR/GD. [More\...](#ga0a73912e69c3036c6cdb0bde5cc085f7)<br/> |
| #define  | [EMV_CTLS_DE_STATE_6](#ga9d7dd4261ff22430c9a46241ad6fb744)   0x06 |
|   | Chip - Data update after RR. [More\...](#ga9d7dd4261ff22430c9a46241ad6fb744)<br/> |
| #define  | [EMV_CTLS_DE_STATE_7](#gac09893683d58c7a3f54b2fe101dc6338)   0x07 |
|   | Chip - Waiting for proceed to first write flag. [More\...](#gac09893683d58c7a3f54b2fe101dc6338)<br/> |
| #define  | [EMV_CTLS_DE_STATE_8](#ga4586981584a22b9126a432b1b17a8373)   0x08 |
|   | Chip - Final data to send. [More\...](#ga4586981584a22b9126a432b1b17a8373)<br/> |

## DetailedDescription {#detailed-description}

Used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>, <a href="group___t_l_v___c_b_c_k.md#ga350252d0754af29e65491c61efafd681">TAG_DF8F59_DE_STATE</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CTLS_DE_STATE_0 <a href="#gae12fe535009ed6a4c195f838825966e6" id="gae12fe535009ed6a4c195f838825966e6"></a>

<p>#define EMV_CTLS_DE_STATE_0   0x00</p>

DataExchange Inactive.

## EMV_CTLS_DE_STATE_1 <a href="#gad22e511f8d14830b7d5bfa21cbe9d562" id="gad22e511f8d14830b7d5bfa21cbe9d562"></a>

<p>#define EMV_CTLS_DE_STATE_1   0x01</p>

MSD/Chip - Waiting for PDOL Data.

## EMV_CTLS_DE_STATE_2 <a href="#ga520ce402d31d3fd7e03ca056542e89b6" id="ga520ce402d31d3fd7e03ca056542e89b6"></a>

<p>#define EMV_CTLS_DE_STATE_2   0x02</p>

MSD - Data update prior to RR.

## EMV_CTLS_DE_STATE_3 <a href="#gaceb77514482e4535f8863f8f23778a5e" id="gaceb77514482e4535f8863f8f23778a5e"></a>

<p>#define EMV_CTLS_DE_STATE_3   0x03</p>

MSD - Waiting for proceed to first write flag.

## EMV_CTLS_DE_STATE_4 <a href="#ga5f696c2c21f0dd85671c6c868e8edef8" id="ga5f696c2c21f0dd85671c6c868e8edef8"></a>

<p>#define EMV_CTLS_DE_STATE_4   0x04</p>

MSD - Final data to send.

## EMV_CTLS_DE_STATE_5 <a href="#ga0a73912e69c3036c6cdb0bde5cc085f7" id="ga0a73912e69c3036c6cdb0bde5cc085f7"></a>

<p>#define EMV_CTLS_DE_STATE_5   0x05</p>

Chip - Update befre/during RR/GD.

## EMV_CTLS_DE_STATE_6 <a href="#ga9d7dd4261ff22430c9a46241ad6fb744" id="ga9d7dd4261ff22430c9a46241ad6fb744"></a>

<p>#define EMV_CTLS_DE_STATE_6   0x06</p>

Chip - Data update after RR.

## EMV_CTLS_DE_STATE_7 <a href="#gac09893683d58c7a3f54b2fe101dc6338" id="gac09893683d58c7a3f54b2fe101dc6338"></a>

<p>#define EMV_CTLS_DE_STATE_7   0x07</p>

Chip - Waiting for proceed to first write flag.

## EMV_CTLS_DE_STATE_8 <a href="#ga4586981584a22b9126a432b1b17a8373" id="ga4586981584a22b9126a432b1b17a8373"></a>

<p>#define EMV_CTLS_DE_STATE_8   0x08</p>

Chip - Final data to send.
