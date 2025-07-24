---
hidden: true
title: Input params for PIN entryTransaction execution » Callback functions » Definitions for PIN Input callback function
---

[Macros](#define-members)

Collaboration diagram for Input params for PIN entry:

![](group___a_d_k___p_i_n___i_n_p_u_t.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_CT_PIN_INPUT_ONLINE](#ga6e50037ec9acfb5dc5af7e8738ce3f12)   0 |
|   | Online enciphered PIN. [More\...](#ga6e50037ec9acfb5dc5af7e8738ce3f12)<br/> |
| #define  | [EMV_CT_PIN_INPUT_PLAIN](#ga5e82e9ba31d25d95371f61030d0132b2)   1 |
|   | Offline plaintext PIN. [More\...](#ga5e82e9ba31d25d95371f61030d0132b2)<br/> |
| #define  | [EMV_CT_PIN_INPUT_ENCIPHERED](#gaf2bc706ea385477040fc5fa2a0b272c2)   2 |
|   | Offline enciphered PIN. [More\...](#gaf2bc706ea385477040fc5fa2a0b272c2)<br/> |
| #define  | [EMV_CT_PIN_INPUT_PLAIN_EXT](#gabd2fa8d295e9f978983a061974de8e1e)   3 |
|   | Offline plaintext PIN at external device (old Verix devices only) [More\...](#gabd2fa8d295e9f978983a061974de8e1e)<br/> |
| #define  | [EMV_CT_PIN_INPUT_ENCIPHERED_EXT](#ga9822d5331d14c0b6c81a3f1f9519fe6c)   4 |
|   | Offline enciphered PIN at external device (old Verix devices only) [More\...](#ga9822d5331d14c0b6c81a3f1f9519fe6c)<br/> |
| #define  | [EMV_CT_CVM_CUSTOM](#ga370e1133a282c765ec9f12605b172e3a)   5 |
|   | Custom CVM, the highest bit indicates the custom CVM, byte 0\...3 indicates the custom CVM method. [More\...](#ga370e1133a282c765ec9f12605b172e3a)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_CT_CVM_CUSTOM <a href="#ga370e1133a282c765ec9f12605b172e3a" id="ga370e1133a282c765ec9f12605b172e3a"></a>

<p>#define EMV_CT_CVM_CUSTOM   5</p>

Custom CVM, the highest bit indicates the custom CVM, byte 0\...3 indicates the custom CVM method.

## EMV_CT_PIN_INPUT_ENCIPHERED <a href="#gaf2bc706ea385477040fc5fa2a0b272c2" id="gaf2bc706ea385477040fc5fa2a0b272c2"></a>

<p>#define EMV_CT_PIN_INPUT_ENCIPHERED   2</p>

Offline enciphered PIN.

## EMV_CT_PIN_INPUT_ENCIPHERED_EXT <a href="#ga9822d5331d14c0b6c81a3f1f9519fe6c" id="ga9822d5331d14c0b6c81a3f1f9519fe6c"></a>

<p>#define EMV_CT_PIN_INPUT_ENCIPHERED_EXT   4</p>

Offline enciphered PIN at external device (old Verix devices only)

## EMV_CT_PIN_INPUT_ONLINE <a href="#ga6e50037ec9acfb5dc5af7e8738ce3f12" id="ga6e50037ec9acfb5dc5af7e8738ce3f12"></a>

<p>#define EMV_CT_PIN_INPUT_ONLINE   0</p>

Online enciphered PIN.

## EMV_CT_PIN_INPUT_PLAIN <a href="#ga5e82e9ba31d25d95371f61030d0132b2" id="ga5e82e9ba31d25d95371f61030d0132b2"></a>

<p>#define EMV_CT_PIN_INPUT_PLAIN   1</p>

Offline plaintext PIN.

## EMV_CT_PIN_INPUT_PLAIN_EXT <a href="#gabd2fa8d295e9f978983a061974de8e1e" id="gabd2fa8d295e9f978983a061974de8e1e"></a>

<p>#define EMV_CT_PIN_INPUT_PLAIN_EXT   3</p>

Offline plaintext PIN at external device (old Verix devices only)
