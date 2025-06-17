---
title: EMV ADK functions for initialization

---

# EMV ADK functions for initialization

**Module:** **[Initialization](group___a_d_k___i_n_i_t_i_a_l_i_z_a_t_i_o_n.md)**



## Modules

| Name           |
| -------------- |
| **[Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md)** <br>Meaning of [TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options), see also [EMV_CTLS_Exit_Framework_extended()](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework-extended) |
| **[Options for End Transaction](group___e_n_d___t_x_n___o_p_t_i_o_n_s.md)** <br>Meaning of [TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options), see also [EMV_CTLS_EndTransaction()]() |
| **[Options at framework initialisation](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md)** <br>Flags used in [EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework).  |
| **[Result flags for outcome of framework initialization](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md)** <br>Flags used in [EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework).  |
| **[Options at framework initialisation](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md)** <br>Flags used in parameter `options` in [EMV_CT_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework).  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) void | **[EMV_CTLS_Exit_Framework](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework)**(void )<br>Kernel deactivation.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) void | **[EMV_CTLS_Exit_Framework_extended](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework-extended)**(unsigned char options)<br>Kernel deactivation with options.  |
| const [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) char * | **[EMV_CTLS_CLIENT_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-client-getversion)**(void )<br>Get contactless client version.  |
| const [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc) char * | **[EMV_CTLS_FRAMEWORK_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-framework-getversion)**(void )<br>Get contactless framework version.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) void | **[EMV_CT_Exit_Framework](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework)**(void )<br>Kernel deactivation.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) void | **[EMV_CT_Exit_Framework_extended](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework-extended)**(unsigned char options)<br>Kernel deactivation.  |
| const [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) char * | **[EMV_CT_CLIENT_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ct-client-getversion)**(void )<br>Get contact client version.  |
| const [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) char * | **[EMV_CT_FRAMEWORK_GetVersion](group___f_u_n_c___i_n_i_t.md#function-emv-ct-framework-getversion)**(void )<br>Get contact framework version.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EMV_CTLS_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ctls-init-framework)**(numberOfAIDs, EMV_Callback, externalData, options, ulResult) <br>Initialize EMV ADK.  |
|  | **[EMV_CT_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework)**(numberOfAIDs, EMV_Callback, externalData, options) <br>Initialize EMV ADK.  |


## Functions Documentation

### function EMV_CTLS_Exit_Framework

```
DLL_CLC void EMV_CTLS_Exit_Framework(
    void 
)
```

Kernel deactivation. 

**Author**: GSS R&D Germany

**Note**: this function calls [EMV_CTLS_Exit_Framework_extended](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework-extended) (0) 

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

[Explanation in programmers guide]


### function EMV_CTLS_Exit_Framework_extended

```
DLL_CLC void EMV_CTLS_Exit_Framework_extended(
    unsigned char options
)
```

Kernel deactivation with options. 

**Parameters**: 

  * **options** Bitset of [Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md)


**Author**: GSS R&D Germany

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CTLS_CLIENT_GetVersion

```
const DLL_CLC char * EMV_CTLS_CLIENT_GetVersion(
    void 
)
```

Get contactless client version. 

**Return**: Client version as C-string 

**Author**: GSS R&D Germany

### function EMV_CTLS_FRAMEWORK_GetVersion

```
const DLL_CLC char * EMV_CTLS_FRAMEWORK_GetVersion(
    void 
)
```

Get contactless framework version. 

**Return**: Framework version as C-string 

**Author**: GSS R&D Germany

**Serialization:**![TLV_GetFrameworkVersion.jpg](.//TLV_GetFrameworkVersion.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_GET_VER](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-get-ver), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CT_Exit_Framework

```
DLL_CTC void EMV_CT_Exit_Framework(
    void 
)
```

Kernel deactivation. 

**Author**: GSS R&D Germany

Explanation in programmers guide: [Initialize EMV Framework]

**Serialization:**![TLV_ExitFramework.jpg](.//TLV_ExitFramework.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CT_Exit_Framework_extended

```
DLL_CTC void EMV_CT_Exit_Framework_extended(
    unsigned char options
)
```

Kernel deactivation. 

**Parameters**: 

  * **options** Bitset of [Options for Exit Framework](group___e_x_i_t___f_w___o_p_t_i_o_n_s.md)

 TLV tag [TAG_DF8F0A_EXIT_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0a-exit-options)


**Author**: GSS R&D Germany

Explanation in programmers guide: [Initialize EMV Framework]

**Serialization:**![TLV_ExitFramework.jpg](.//TLV_ExitFramework.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CT_CLIENT_GetVersion

```
const DLL_CTC char * EMV_CT_CLIENT_GetVersion(
    void 
)
```

Get contact client version. 

**Return**: Client version as zero-terminated C-String 

**Author**: GSS R&D Germany

### function EMV_CT_FRAMEWORK_GetVersion

```
const DLL_CTC char * EMV_CT_FRAMEWORK_GetVersion(
    void 
)
```

Get contact framework version. 

**Return**: Framework version as zero-terminated C-String 

 TLV tag: [TAG_DF11_LIB_VERSION](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df11-lib-version)

**Author**: GSS R&D Germany

**Serialization:**![TLV_GetFrameworkVersion.jpg](.//TLV_GetFrameworkVersion.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_GET_VER](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-get-ver), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)




## Macros Documentation

### define EMV_CTLS_Init_Framework

```
#define EMV_CTLS_Init_Framework(
    numberOfAIDs,
    EMV_Callback,
    externalData,
    options,
    ulResult
)
EMV_CTLS_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options),(ulResult))
```

Initialize EMV ADK. 

**Parameters**: 

  * **numberOfAIDs** ... number of AIDs 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **EMV_Callback** ... function pointer for callback (see [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt)) 

 no TLV tag, because it's not serialized 
  * **externalData** ... Application data pointer, is transmitted unchanged to callback function [EMV_CTLS_CALLBACK_FnT](group___t_l_v___c_a_l_l_b_c_k.md#typedef-emv-ctls-callback-fnt)

 no TLV tag, because it's not serialized 
  * **options** ... flags for framework initialisation, allowed values see [Options at framework initialisation](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md)

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **ulResult** ... bitstring with information flags about the outcome, see [Result flags for outcome of framework initialization](group___c_l_i_n_i_t___r_e_s_u_l_t___f_l_a_g_s.md)

 TLV tag [TAG_DF8F0C_INIT_RESULT_FLAGS](group___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0c-init-result-flags). Can be NULL. 


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): interface version mismatch
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err) TLV: processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_CTLS_NOT_AVAILABLE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ctls-not-available): CTLS not present on terminal
[EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort): insufficient memory to allocate main ADK context
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): insufficient memory to allocate other internal structs or empty desired/allowed kernel list
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap file persistence problem
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap or emv desired/allowed file corruption

**Author**: GSS R&D Germany

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)[P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)

[Explanation in programmers guide]


### define EMV_CT_Init_Framework

```
#define EMV_CT_Init_Framework(
    numberOfAIDs,
    EMV_Callback,
    externalData,
    options
)
EMV_CT_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options))
```

Initialize EMV ADK. 

**Parameters**: 

  * **numberOfAIDs** Number of AIDs 

 Default: [EMV_ADK_DEFAULT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-default-aidsupp), max.: [EMV_ADK_LIMIT_AIDSUPP](group___a_d_k___l_i_m_i_t_s.md#define-emv-adk-limit-aidsupp)

 TLV tag: [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **EMV_Callback** Function pointer for callback (see [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt)) 

 Not serialized to TLV interface. 
  * **externalData** Application data pointer, is transmitted unchanged to callback function [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt)

 Not serialized to TLV interface. 
  * **options** Flags for framework initialisation, allowed values see [Options at framework initialisation](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md)

 TLV tag: [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)


**Return**: `[EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok):` success
`[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal):` internal communication problem, illegal file content, memory allocation
`[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param):` interface version mismatch or buffer overflow
`[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err):` TLV processing problem
`[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed):` concurrent call or not allowed within callback

**Author**: GSS R&D Germany

Explanation in programmers guide: [Initialize EMV Framework]

Transport tags used for serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)[P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)




-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100