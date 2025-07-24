---
hidden: true
title: ped.h File Reference
---

[Macros](#define-members) \| [Typedefs](#typedef-members) \| [Functions](#func-members)

<a href="tec_2export_2tec_2ped_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Macros |  |
| #define  | <a href="group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#ga554b92063910b0a4149bb5d59fb62af3">PED_OK</a>   0 |
| #define  | <a href="group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#ga07ea4d4fee5bde6444f6b3d28bbc59b5">PED_ERROR</a>   -1 |
| #define  | <a href="group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#ga32914a81dec6b55185b81e4bf63d97be">PED_ERR_LOAD</a>   -2 |
| #define  | <a href="group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#ga17d00e6cf6e771b1e428c332fe87a23f">PED_LINK_OK</a>   0 |
| #define  | <a href="group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#ga8fc33540b096a9d3fe25a78f13b3968c">PED_NS_DONE</a>   1 |
| #define  | <a href="group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#gadc787271097273d39c4fb060749b1fab">PED_CERT_ERR</a>   2 |
| #define  | <a href="group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#gad80ab1587eb3f1a4dc204cd277098cd9">PED_NS_ERR</a>   3 |

|  |  |
|----|----|
| Typedefs |  |
| typedef int(\*  | [ped_SendCallback](#a0999264b51baabb5ce8b71694e5b3b85)) (const unsigned char \*data, int len) |
| typedef int(\*  | [ped_RcvCallback](#a944bf4f4f1a0e2f08d0a0f21a5e1718a)) (unsigned char \*data, int len) |

|  |  |
|----|----|
| Functions |  |
| int  | [ped_SetSendRcvCb](#aa093da583e918cfb6dd8e152c39af3bc) ([ped_SendCallback](#a0999264b51baabb5ce8b71694e5b3b85) scbf, [ped_RcvCallback](#a944bf4f4f1a0e2f08d0a0f21a5e1718a) rcbf) |
| int  | [ped_Pairing](#a124ea72634b37bdf5d09ce5e0869ca55) (int \*status) |
| int  | [ped_MovePin](#ab4792fd3cacefd42f8f7bf365e779484) (void) |

## DetailedDescription {#detailed-description}

This file defines the API for the PP1000 pairing and PIN transfer functionality which is part of technology selection library.

### Author

Thomas Buening, GSS

## TypedefDocumentation {#typedef-documentation}

## ped_RcvCallback <a href="#a944bf4f4f1a0e2f08d0a0f21a5e1718a" id="a944bf4f4f1a0e2f08d0a0f21a5e1718a"></a>

<p>typedef int(\* ped_RcvCallback) (unsigned char \*data, int len)</p>

Callback function application has to implement for receiving data from PED. If the received data is not a complete packet, the callback will be invoked again until the whole packet is received.

**Parameters**

\[out\] **data** : received data \[in\] **len** : size of data buffer

### Returns

number of bytes read, -1: failure

## ped_SendCallback <a href="#a0999264b51baabb5ce8b71694e5b3b85" id="a0999264b51baabb5ce8b71694e5b3b85"></a>

<p>typedef int(\* ped_SendCallback) (const unsigned char \*data, int len)</p>

Callback function application has to implement for sending data to PED.

**Parameters**

\[in\] **data** : Data to be sent \[in\] **len** : Length of data

### Returns

number of bytes sent, -1: failure

## FunctionDocumentation {#function-documentation}

## ped_MovePin() <a href="#ab4792fd3cacefd42f8f7bf365e779484" id="ab4792fd3cacefd42f8f7bf365e779484"></a>

<p>int ped_MovePin</p>

Move PIN from PED to CTP.

### Returns

\[unsupported block\]

## ped_Pairing() <a href="#a124ea72634b37bdf5d09ce5e0869ca55" id="a124ea72634b37bdf5d09ce5e0869ca55"></a>

<p>int ped_Pairing</p>

Execute pairing between CTP and PED.

**Parameters**

\[out\] **status** : additional status information, see PED status codes, may be NULL

### Returns

\[unsupported block\]

## ped_SetSendRcvCb() <a href="#aa093da583e918cfb6dd8e152c39af3bc" id="aa093da583e918cfb6dd8e152c39af3bc"></a>

<p>int ped_SetSendRcvCb</p>

Set send and receive callback functions for communication with PED. This function is for convenience. You can choose if to use this or directly use the equivalent function from pp1000 library, don\'t call both!

- <a href="group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#ga554b92063910b0a4149bb5d59fb62af3">PED_OK</a> : Callback functions successfully registered
- <a href="group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#ga07ea4d4fee5bde6444f6b3d28bbc59b5">PED_ERROR</a> : Invalid parameter
- <a href="group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#ga32914a81dec6b55185b81e4bf63d97be">PED_ERR_LOAD</a> : Error loading dynamic library **Parameters**

  \[in\] **scbf** : Send callback function \[in\] **rcbf** : Receive callback function
