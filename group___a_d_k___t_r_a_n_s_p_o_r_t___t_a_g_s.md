---
title: Tags for transport layer
summary: Used for enclosing TLV container at transport. That's necessary in case EMV ADK and calling application are placed in separated entities. Transport layer (e.g. PINPad ISO2) must have indicators to determine whether data is meant for EMV ADK or not. 

---

# Tags for transport layer

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)**

Used for enclosing TLV container at transport. That's necessary in case EMV ADK and calling application are placed in separated entities. Transport layer (e.g. PINPad ISO2) must have indicators to determine whether data is meant for EMV ADK or not.  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)** <br>Class for requests to EMV ADK.  |
|  | **[CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt)** <br>Alternative class for requests to EMV ADK.  |
|  | **[CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)** <br>Class for ICC functions.  |
|  | **[CLA_CRD_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd-alt)** <br>Alternative class for ICC functions.  |
|  | **[CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)** <br>Class for LED functions.  |
|  | **[EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req)** <br>Class for callback requests from EMV ADK to calling application (see [Constructed tags for callback functions]())  |
|  | **[EMV_CTLS_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-resp)** <br>Class for callback responses (see [Constructed tags for callback functions]())  |
|  | **[EMV_CTLS_CLA_RET_OK](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-ret-ok)** <br>Class for Return with no error.  |
|  | **[EMV_CTLS_CLA_RET_ERROR](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-ret-error)** <br>Class for Return with error (function not available / parameter error, ...)  |
|  | **[P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)** <br>Uaed for config command, e.g. [EMV_CTLS_SetTermData]().  |
|  | **[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)** <br>Uaed for config command, e.g. [EMV_CTLS_GetTermData]().  |
|  | **[P2_CLONE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-clone)** <br>Used reading configuration data that shall be transfered to another system (internal use, serialised API only)  |
|  | **[INS_CBCK_FCT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-fct)** <br>Instruction byte used for callback functions, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req).  |
|  | **[INS_CBCK_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-crd)** <br>Instruction byte used for callbacks to cardreader, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req).  |
|  | **[INS_CBCK_TRACE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-trace)** <br>Instruction byte used for trace output, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req). Also used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) in header field passed to EMV_CTLS_IF_BERTLV for client traces.  |
|  | **[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)** <br>Instruction byte for [EMV_CTLS_Init_Framework](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg)** <br>Instruction byte for [EMV_CTLS_SetTermData](), [EMV_CTLS_GetTermData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg)** <br>Instruction byte for [EMV_CTLS_SetAppliDataSchemeSpecific](), [EMV_CTLS_GetAppliDataSchemeSpecific](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg)** <br>Instruction byte for [EMV_CTLS_StoreCAPKey](), [EMV_CTLS_ReadCAPKeys](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_APPLY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-apply-cfg)** <br>Instruction byte for [EMV_CTLS_ApplyConfiguration](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_GET_VER](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-get-ver)** <br>Instruction byte for [EMV_CTLS_FRAMEWORK_GetVersion](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_VIRT_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-virt-cfg)** <br>Instruction byte for [EMV_CTLS_MapVirtualTerminal](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_SELECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-select)** <br>Instruction byte for [EMV_CTLS_SetupTransaction](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_TRANSAC](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-transac)** <br>Instruction byte for [EMV_CTLS_ContinueOffline](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_ONLINE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-online)** <br>Instruction byte for [EMV_CTLS_ContinueOnline](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_RFU](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-rfu)** <br>Instruction byte used in CT mode only.  |
|  | **[INS_FETCH_TAG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-tag)** <br>Instruction byte for [EMV_CTLS_fetchTxnTags](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_END_TRX](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-end-trx)** <br>Instruction byte for [EMV_CTLS_EndTransaction](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CND_DATA](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cnd-data)** <br>Instruction byte for [EMV_CTLS_GetCandidateData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_FETCH_DOL](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-dol)** <br>Instruction byte for [EMV_CTLS_fetchTxnDOL](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_BREAK](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-break)** <br>Instruction byte for [EMV_CTLS_Break](), used wih [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_ICC_RESET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-reset)** <br>Instruction byte for [EMV_CTLS_SmartReset](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_ISO](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-iso)** <br>Instruction byte for [EMV_CTLS_SmartISO](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_OFF](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-off)** <br>Instruction byte for [EMV_CTLS_SmartPowerOff](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_TRANS](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-trans)** <br>Instruction byte for [EMV_CTLS_TransparentCommand](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_SEND](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-send)** <br>Instruction byte for [EMV_CTLS_TransparentSend](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_RECEIVE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-receive)** <br>Instruction byte for [EMV_CTLS_TransparentReceive](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_REMOVAL](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-removal)** <br>Instruction byte for [EMV_CTLS_CardRemoval](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_LED_SWITCH](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-switch)** <br>Instruction byte for [EMV_CTLS_LED](), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led).  |
|  | **[INS_LED_MODE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-mode)** <br>Instruction byte for [EMV_CTLS_LED_SetMode](), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led).  |
|  | **[INS_LED_CONF_DESIGN](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-conf-design)** <br>Instruction byte for [EMV_CTLS_LED_ConfigDesign](), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led).  |
|  | **[CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)** <br>Class for requests to EMV ADK.  |
|  | **[CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd)** <br>Class for ICC functions.  |
|  | **[CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led)** <br>Class for LED functions.  |
|  | **[EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req)** <br>Class for callback requests from EMV ADK to calling application (see [Callback functions]())  |
|  | **[EMV_CT_CLA_CBCK_RESP](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-resp)** <br>Class for callback responses (see [Callback functions]())  |
|  | **[P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)** <br>Used for config command, e.g. [EMV_CT_SetTermData]().  |
|  | **[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)** <br>Used for config command, e.g. [EMV_CT_GetTermData]().  |
|  | **[P2_CLONE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-clone)** <br>Used reading configuration data that shall be transfered to another system (internal use, serialised API only)  |
|  | **[INS_CBCK_FCT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-fct)** <br>Instruction byte used for callback functions, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req).  |
|  | **[INS_CBCK_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-crd)** <br>Instruction byte used for callbacks to cardreader, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req).  |
|  | **[INS_CBCK_TRACE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cbck-trace)** <br>Instruction byte used for trace output, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req). Also used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) in header field passed to EMV_CT_IF_BERTLV for client traces.  |
|  | **[INS_INIT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-init)** <br>Instruction byte for [EMV_CT_Init_Framework()](), respectively EMV_CT_Init_FrameworkClient(), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg)** <br>Instruction byte for [EMV_CT_SetTermData](), [EMV_CT_GetTermData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg)** <br>Instruction byte for [EMV_CT_SetAppliData](), [EMV_CT_GetAppliData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg)** <br>Instruction byte for [EMV_CT_StoreCAPKey](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_APPLY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-apply-cfg)** <br>Instruction byte for [EMV_CT_ApplyConfiguration](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_GET_VER](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-get-ver)** <br>Instruction byte for [EMV_CT_FRAMEWORK_GetVersion](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_VIRT_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-virt-cfg)** <br>Instruction byte for [EMV_CT_MapVirtualTerminal](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_SELECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-select)** <br>Instruction byte for [EMV_CT_StartTransaction](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_TRANSAC](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-transac)** <br>Instruction byte for [EMV_CT_ContinueOffline](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_ONLINE](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-online)** <br>Instruction byte for [EMV_CT_ContinueOnline](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_UPDATE_TAG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-update-tag)** <br>Instruction byte for [EMV_CT_updateTxnTags](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_FETCH_TAG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-tag)** <br>Instruction byte for [EMV_CT_fetchTxnTags](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_END_TRX](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-end-trx)** <br>Instruction byte for [EMV_CT_EndTransaction](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CND_DATA](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-cnd-data)** <br>Instruction byte for [EMV_CT_GetCandidateData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_CHECK_AID](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-check-aid)** <br>Instruction byte for [EMV_CT_CheckSupportedAID](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_FETCH_DOL](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-fetch-dol)** <br>Instruction byte for [EMV_CT_fetchTxnDOL](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv).  |
|  | **[INS_ICC_DETECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-detect)** <br>Instruction byte for [EMV_CT_SmartDetect](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_RESET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-reset)** <br>Instruction byte for [EMV_CT_SmartReset](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_ISO](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-iso)** <br>Instruction byte for [EMV_CT_SmartISO](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_OFF](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-off)** <br>Instruction byte for [EMV_CT_SmartPowerOff](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_PIN](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-pin)** <br>Instruction byte for [EMV_CT_Send_PIN_Offline](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_PIN_DIRECT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-pin-direct)** <br>Instruction byte for [EMV_CT_SmartPIN](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_ICC_LED_SWITCH](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-icc-led-switch)** <br>Instruction byte for [EMV_CT_LED](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd).  |
|  | **[INS_LED_SWITCH](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-led-switch)** <br>Instruction byte for [EMV_CT_LED](), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led).  |

## Detailed Description

Used for enclosing TLV container at transport. That's necessary in case EMV ADK and calling application are placed in separated entities. Transport layer (e.g. PINPad ISO2) must have indicators to determine whether data is meant for EMV ADK or not. 

Used for enclosing TLV container at transport. That's necessary in case EMV ADK and calling application are placed in separated entities. Transport layer (e.g. PINPad ISO2) must have indicators to determine whether data is meant for EMv ADK or not.




## Macros Documentation

### define CLA_EMV

```
#define CLA_EMV 0x39
```

Class for requests to EMV ADK. 

### define CLA_EMV_ALT

```
#define CLA_EMV_ALT 0x40
```

Alternative class for requests to EMV ADK. 

### define CLA_CRD

```
#define CLA_CRD 0x41
```

Class for ICC functions. 

### define CLA_CRD_ALT

```
#define CLA_CRD_ALT 0x42
```

Alternative class for ICC functions. 

### define CLA_LED

```
#define CLA_LED 0x43
```

Class for LED functions. 

### define EMV_CTLS_CLA_CBCK_REQ

```
#define EMV_CTLS_CLA_CBCK_REQ 0x91
```

Class for callback requests from EMV ADK to calling application (see [Constructed tags for callback functions]()) 

### define EMV_CTLS_CLA_CBCK_RESP

```
#define EMV_CTLS_CLA_CBCK_RESP 0x92
```

Class for callback responses (see [Constructed tags for callback functions]()) 

### define EMV_CTLS_CLA_RET_OK

```
#define EMV_CTLS_CLA_RET_OK 0x90
```

Class for Return with no error. 

### define EMV_CTLS_CLA_RET_ERROR

```
#define EMV_CTLS_CLA_RET_ERROR 0x94
```

Class for Return with error (function not available / parameter error, ...) 

### define P2_SET

```
#define P2_SET 0x00
```

Uaed for config command, e.g. [EMV_CTLS_SetTermData](). 

### define P2_GET

```
#define P2_GET 0x01
```

Uaed for config command, e.g. [EMV_CTLS_GetTermData](). 

### define P2_CLONE

```
#define P2_CLONE 0x02
```

Used reading configuration data that shall be transfered to another system (internal use, serialised API only) 

### define INS_CBCK_FCT

```
#define INS_CBCK_FCT 0x01
```

Instruction byte used for callback functions, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req). 

### define INS_CBCK_CRD

```
#define INS_CBCK_CRD 0x02
```

Instruction byte used for callbacks to cardreader, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req). 

### define INS_CBCK_TRACE

```
#define INS_CBCK_TRACE 0xFF
```

Instruction byte used for trace output, used with [EMV_CTLS_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ctls-cla-cbck-req). Also used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) in header field passed to EMV_CTLS_IF_BERTLV for client traces. 

### define INS_INIT

```
#define INS_INIT 0x00
```

Instruction byte for [EMV_CTLS_Init_Framework](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_TERM_CFG

```
#define INS_TERM_CFG 0x01
```

Instruction byte for [EMV_CTLS_SetTermData](), [EMV_CTLS_GetTermData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_APPLI_CFG

```
#define INS_APPLI_CFG 0x02
```

Instruction byte for [EMV_CTLS_SetAppliDataSchemeSpecific](), [EMV_CTLS_GetAppliDataSchemeSpecific](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CAPKEY_CFG

```
#define INS_CAPKEY_CFG 0x03
```

Instruction byte for [EMV_CTLS_StoreCAPKey](), [EMV_CTLS_ReadCAPKeys](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_APPLY_CFG

```
#define INS_APPLY_CFG 0x04
```

Instruction byte for [EMV_CTLS_ApplyConfiguration](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_GET_VER

```
#define INS_GET_VER 0x05
```

Instruction byte for [EMV_CTLS_FRAMEWORK_GetVersion](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_VIRT_CFG

```
#define INS_VIRT_CFG 0x06
```

Instruction byte for [EMV_CTLS_MapVirtualTerminal](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_SELECT

```
#define INS_SELECT 0x10
```

Instruction byte for [EMV_CTLS_SetupTransaction](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_TRANSAC

```
#define INS_TRANSAC 0x11
```

Instruction byte for [EMV_CTLS_ContinueOffline](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_ONLINE

```
#define INS_ONLINE 0x12
```

Instruction byte for [EMV_CTLS_ContinueOnline](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_RFU

```
#define INS_RFU 0x13
```

Instruction byte used in CT mode only. 

### define INS_FETCH_TAG

```
#define INS_FETCH_TAG 0x14
```

Instruction byte for [EMV_CTLS_fetchTxnTags](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_END_TRX

```
#define INS_END_TRX 0x15
```

Instruction byte for [EMV_CTLS_EndTransaction](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CND_DATA

```
#define INS_CND_DATA 0x16
```

Instruction byte for [EMV_CTLS_GetCandidateData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_FETCH_DOL

```
#define INS_FETCH_DOL 0x18
```

Instruction byte for [EMV_CTLS_fetchTxnDOL](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_BREAK

```
#define INS_BREAK 0x20
```

Instruction byte for [EMV_CTLS_Break](), used wih [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_ICC_RESET

```
#define INS_ICC_RESET 0x02
```

Instruction byte for [EMV_CTLS_SmartReset](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_ISO

```
#define INS_ICC_ISO 0x03
```

Instruction byte for [EMV_CTLS_SmartISO](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_OFF

```
#define INS_ICC_OFF 0x04
```

Instruction byte for [EMV_CTLS_SmartPowerOff](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_TRANS

```
#define INS_ICC_TRANS 0x07
```

Instruction byte for [EMV_CTLS_TransparentCommand](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_SEND

```
#define INS_ICC_SEND 0x08
```

Instruction byte for [EMV_CTLS_TransparentSend](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_RECEIVE

```
#define INS_ICC_RECEIVE 0x09
```

Instruction byte for [EMV_CTLS_TransparentReceive](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_REMOVAL

```
#define INS_ICC_REMOVAL 0x0A
```

Instruction byte for [EMV_CTLS_CardRemoval](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_LED_SWITCH

```
#define INS_LED_SWITCH 0x03
```

Instruction byte for [EMV_CTLS_LED](), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led). 

### define INS_LED_MODE

```
#define INS_LED_MODE 0x04
```

Instruction byte for [EMV_CTLS_LED_SetMode](), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led). 

### define INS_LED_CONF_DESIGN

```
#define INS_LED_CONF_DESIGN 0x05
```

Instruction byte for [EMV_CTLS_LED_ConfigDesign](), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led). 

### define CLA_EMV

```
#define CLA_EMV 0x39
```

Class for requests to EMV ADK. 

### define CLA_CRD

```
#define CLA_CRD 0x41
```

Class for ICC functions. 

### define CLA_LED

```
#define CLA_LED 0x43
```

Class for LED functions. 

### define EMV_CT_CLA_CBCK_REQ

```
#define EMV_CT_CLA_CBCK_REQ 0x91
```

Class for callback requests from EMV ADK to calling application (see [Callback functions]()) 

### define EMV_CT_CLA_CBCK_RESP

```
#define EMV_CT_CLA_CBCK_RESP 0x92
```

Class for callback responses (see [Callback functions]()) 

### define P2_SET

```
#define P2_SET 0x00
```

Used for config command, e.g. [EMV_CT_SetTermData](). 

### define P2_GET

```
#define P2_GET 0x01
```

Used for config command, e.g. [EMV_CT_GetTermData](). 

### define P2_CLONE

```
#define P2_CLONE 0x02
```

Used reading configuration data that shall be transfered to another system (internal use, serialised API only) 

### define INS_CBCK_FCT

```
#define INS_CBCK_FCT 0x01
```

Instruction byte used for callback functions, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req). 

### define INS_CBCK_CRD

```
#define INS_CBCK_CRD 0x02
```

Instruction byte used for callbacks to cardreader, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req). 

### define INS_CBCK_TRACE

```
#define INS_CBCK_TRACE 0xFF
```

Instruction byte used for trace output, used with [EMV_CT_CLA_CBCK_REQ](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-emv-ct-cla-cbck-req). Also used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) in header field passed to EMV_CT_IF_BERTLV for client traces. 

### define INS_INIT

```
#define INS_INIT 0x00
```

Instruction byte for [EMV_CT_Init_Framework()](), respectively EMV_CT_Init_FrameworkClient(), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_TERM_CFG

```
#define INS_TERM_CFG 0x01
```

Instruction byte for [EMV_CT_SetTermData](), [EMV_CT_GetTermData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_APPLI_CFG

```
#define INS_APPLI_CFG 0x02
```

Instruction byte for [EMV_CT_SetAppliData](), [EMV_CT_GetAppliData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CAPKEY_CFG

```
#define INS_CAPKEY_CFG 0x03
```

Instruction byte for [EMV_CT_StoreCAPKey](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_APPLY_CFG

```
#define INS_APPLY_CFG 0x04
```

Instruction byte for [EMV_CT_ApplyConfiguration](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_GET_VER

```
#define INS_GET_VER 0x05
```

Instruction byte for [EMV_CT_FRAMEWORK_GetVersion](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_VIRT_CFG

```
#define INS_VIRT_CFG 0x06
```

Instruction byte for [EMV_CT_MapVirtualTerminal](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_SELECT

```
#define INS_SELECT 0x10
```

Instruction byte for [EMV_CT_StartTransaction](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_TRANSAC

```
#define INS_TRANSAC 0x11
```

Instruction byte for [EMV_CT_ContinueOffline](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_ONLINE

```
#define INS_ONLINE 0x12
```

Instruction byte for [EMV_CT_ContinueOnline](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_UPDATE_TAG

```
#define INS_UPDATE_TAG 0x13
```

Instruction byte for [EMV_CT_updateTxnTags](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_FETCH_TAG

```
#define INS_FETCH_TAG 0x14
```

Instruction byte for [EMV_CT_fetchTxnTags](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_END_TRX

```
#define INS_END_TRX 0x15
```

Instruction byte for [EMV_CT_EndTransaction](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CND_DATA

```
#define INS_CND_DATA 0x16
```

Instruction byte for [EMV_CT_GetCandidateData](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_CHECK_AID

```
#define INS_CHECK_AID 0x17
```

Instruction byte for [EMV_CT_CheckSupportedAID](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_FETCH_DOL

```
#define INS_FETCH_DOL 0x18
```

Instruction byte for [EMV_CT_fetchTxnDOL](), used with [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv). 

### define INS_ICC_DETECT

```
#define INS_ICC_DETECT 0x01
```

Instruction byte for [EMV_CT_SmartDetect](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_RESET

```
#define INS_ICC_RESET 0x02
```

Instruction byte for [EMV_CT_SmartReset](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_ISO

```
#define INS_ICC_ISO 0x03
```

Instruction byte for [EMV_CT_SmartISO](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_OFF

```
#define INS_ICC_OFF 0x04
```

Instruction byte for [EMV_CT_SmartPowerOff](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_PIN

```
#define INS_ICC_PIN 0x05
```

Instruction byte for [EMV_CT_Send_PIN_Offline](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_PIN_DIRECT

```
#define INS_ICC_PIN_DIRECT 0x08
```

Instruction byte for [EMV_CT_SmartPIN](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_ICC_LED_SWITCH

```
#define INS_ICC_LED_SWITCH 0x09
```

Instruction byte for [EMV_CT_LED](), used with [CLA_CRD](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-crd). 

### define INS_LED_SWITCH

```
#define INS_LED_SWITCH 0x03
```

Instruction byte for [EMV_CT_LED](), used with [CLA_LED](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-led). 



-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100