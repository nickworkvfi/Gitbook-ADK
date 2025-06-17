---
title: EMV ADK functions for configuration

---

# EMV ADK functions for configuration

**Module:** **[Configuration](group___a_d_k___c_o_n_f_i_g_u_r_a_t_i_o_n.md)**



## Functions

|                | Name           |
| -------------- | -------------- |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_MapVirtualTerminal](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-mapvirtualterminal)**([EMV_ADK_VIRTUALTERMMAP_TYPE](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md#typedef-emv-adk-virtualtermmap-type) VirtualTermMapType, unsigned char * TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal)<br>Changes the Virtual Terminal Map.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_StoreCAPKey](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-storecapkey)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleCAPKeyType, const [EMV_CTLS_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capkey-type) * pxKeyData)<br>Stores the specified CAP key.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ReadCAPKeys](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-readcapkeys)**([EMV_CTLS_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capread-type) * pxKeyData, unsigned char * pucMaxnum)<br>Reads CAP keys.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetCAPKeyInfo](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getcapkeyinfo)**([EMV_CTLS_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ctls-capread-type) * pxKeyData, unsigned capacity, unsigned offset, unsigned * numberRead, unsigned * numberConfigured)<br>Reads CAP keys.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-settermdata)**([EMV_CTLS_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ctls-termdata-type) * pxTermData)<br>set terminal specific data and perform verification and saving of data  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-gettermdata)**([EMV_CTLS_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ctls-termdata-type) * pxTermData)<br>get configured terminal data  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_SetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-setapplidataschemespecific)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleAppliType, [EMV_CTLS_APPLI_KERNEL_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-kernel-type) * pxAID, [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-scheme-specific-type) * pxAppliData)<br>Set application specific data and perform verification and saving of data.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_GetAppliDataSchemeSpecific](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getapplidataschemespecific)**([EMV_ADK_READAPPLI_TYPE](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#typedef-emv-adk-readappli-type) eReadAppliType, [EMV_CTLS_APPLI_KERNEL_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-appli-kernel-type) * pxAID, [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ctls-applidata-scheme-specific-type) * pxAppliData)<br>Get configured application data.  |
| [DLL_CLC](_e_m_v___c_t_l_s___interface_8h.md#define-dll-clc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CTLS_ApplyConfiguration](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-applyconfiguration)**(unsigned long options)<br>Transfer the stored configuration to reader.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_MapVirtualTerminal](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal)**([EMV_ADK_VIRTUALTERMMAP_TYPE](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md#typedef-emv-adk-virtualtermmap-type) VirtualTermMapType, unsigned char * TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal)<br>Changes the Virtual Terminal Map.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_StoreCAPKey](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleCAPKeyType, const [EMV_CT_CAPKEY_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capkey-type) * pxKeyData)<br>Stores the specified CAP key.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_ReadCAPKeys](group___f_u_n_c___c_o_n_f.md#function-emv-ct-readcapkeys)**([EMV_CT_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capread-type) * pxKeyData, unsigned char * pucMaxnum)<br>Reads CAP keys.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_GetCAPKeyInfo](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getcapkeyinfo)**([EMV_CT_CAPREAD_TYPE](group___d_e_f___c_a_r_d___c_o_n_f.md#typedef-emv-ct-capread-type) * pxKeyInfo, unsigned capacity, unsigned offset, unsigned * received, unsigned * configured)<br>Reads CAP key information.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata)**([EMV_CT_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ct-termdata-type) * pxTermData)<br>Set terminal specific data and perform verification and saving of data.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_GetTermData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata)**([EMV_CT_TERMDATA_TYPE](group___d_e_f___c_o_n_f___t_e_r_m.md#typedef-emv-ct-termdata-type) * pxTermData)<br>Get configured terminal data.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_SetAppliData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata)**([EMV_ADK_HANDLE_RECORD_TYPE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#typedef-emv-adk-handle-record-type) eHandleAppliType, [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) * pxAID, [EMV_CT_APPLIDATA_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ct-applidata-type) * pxAppliData)<br>Set application specific data and perform verification and saving of data.    Has to be called once per application (Visa, MasterCard, ...).  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_GetAppliData](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata)**([EMV_ADK_READAPPLI_TYPE](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md#typedef-emv-adk-readappli-type) eReadAppliType, [EMV_CT_APPLI_TYPE](_e_m_v___c_t___interface_8h.md#typedef-emv-ct-appli-type) * pxAID, [EMV_CT_APPLIDATA_TYPE](group___d_e_f___c_o_n_f___a_p_p_l_i.md#typedef-emv-ct-applidata-type) * pxAppliData)<br>Get configured application data    Has to be called once per application (Visa, MasterCard, ...).  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc)[EMV_ADK_INFO](group___a_d_k___r_e_t___c_o_d_e.md#typedef-emv-adk-info) | **[EMV_CT_ApplyConfiguration](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration)**(unsigned long options)<br>Write configuration to files.  |
| [DLL_CTC](_e_m_v___c_t___interface_8h.md#define-dll-ctc) unsigned char | **[EMV_CT_LED](group___f_u_n_c___c_o_n_f.md#function-emv-ct-led)**(unsigned char ucLedId, unsigned char ucLedState, unsigned char ucLedColor, unsigned long ulTimeoutMs)<br>Control the Smart Card Reader LEDs.  |


## Functions Documentation

### function EMV_CTLS_MapVirtualTerminal

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_MapVirtualTerminal(
    EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType,
    unsigned char * TLVSwitchValue,
    unsigned int TLVBufLen,
    unsigned char VirtualTerminal
)
```

Changes the Virtual Terminal Map. 

**Parameters**: 

  * **VirtualTermMapType** mode, see [Defines for type of virtual terminal map](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md)

 TLV tag: [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **TLVSwitchValue** TLV buffer containing switch criteria. Must contain tag [TAG_9C_TRANS_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9c-trans-type) and/or tag [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency), all other tags are currently ignored. 

 Restriction for VFI reader: Only EMVCo transaction types are supported ([EMV_ADK_TRAN_TYPE_GOODS_SERVICE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-goods-service), [EMV_ADK_TRAN_TYPE_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cash), [EMV_ADK_TRAN_TYPE_CASHBACK](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-cashback), [EMV_ADK_TRAN_TYPE_MANUAL_CASH](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-manual-cash), [EMV_ADK_TRAN_TYPE_REFUND](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-refund)) 

 TLV tag: [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **TLVBufLen** Length of TLV buffer 

 TLV tag: [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **VirtualTerminal** Virtual Terminal that is selected if switch criteria match. 

 TLV tag: [TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad VirtualTermMapType, TLVSwitchValue or TLVBufLen input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): VirtTermMap file corruption@ [EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): VirtTermMap file persistence problem
**Serialization:** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_VIRT_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-virt-cfg)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Virtual terminal mapping table]


### function EMV_CTLS_StoreCAPKey

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_StoreCAPKey(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType,
    const EMV_CTLS_CAPKEY_TYPE * pxKeyData
)
```

Stores the specified CAP key. 

**Parameters**: 

  * **eHandleCAPKeyType** Mode of CAP key setting, see [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type) (Note: Multiple records are not supported) 
  * **pxKeyData** All the data of the key that needs storing, see [EMV_CTLS_CAPKEY_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_k_e_y___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad eHandleCAPKeyType or pxKeyData input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): maximum number of capkeys exceeded
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): CapKeys file persistence problem

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure CTLS CAP Keys]

**Serialization:**![TLV_StoreCAPKey.jpg](.//TLV_StoreCAPKey.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)


### function EMV_CTLS_ReadCAPKeys

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_ReadCAPKeys(
    EMV_CTLS_CAPREAD_TYPE * pxKeyData,
    unsigned char * pucMaxnum
)
```

Reads CAP keys. 

**Parameters**: 

  * **pxKeyData** CAP key data, [min(*pucMaxnum, number of stored CAP key, 100)](http__get__curl_8c.md#define-min) are written are written to output buffer 

 see [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md)
  * **pucMaxnum** input: maximum number of CAP keys to write to pxKeyData; output: number of CAP keys stored in file 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxKeyData or pucMaxnum input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption

**Author**: GSS R&D Germany

**Note**: Currently maximum number of CAP keys to be stored is 512. **Serialization:**![TLV_ReadCAPKey.jpg](.//TLV_ReadCAPKey.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

Explanation in programmers guide: [Configure CTLS CAP Keys] Due to serialisation buffer limitation the maximum number of read keys is 100. [EMV_CTLS_GetCAPKeyInfo()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-getcapkeyinfo) is without this restriction.


### function EMV_CTLS_GetCAPKeyInfo

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_GetCAPKeyInfo(
    EMV_CTLS_CAPREAD_TYPE * pxKeyData,
    unsigned capacity,
    unsigned offset,
    unsigned * numberRead,
    unsigned * numberConfigured
)
```

Reads CAP keys. 

**Parameters**: 

  * **pxKeyData** CAP key info data (buffer length at least 7 times capacity) 

 see [EMV_CTLS_CAPREAD_STRUCT](struct_e_m_v___c_t_l_s___c_a_p_r_e_a_d___s_t_r_u_c_t.md)

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)
  * **capacity** number of keys that can be stored in pxKeyInfo 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)
  * **offset** for reading the key list in several chunks 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **numberRead** number of data sets stored to pxKeyInfo 
  * **numberConfigured** number of configured keys 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxKeyData input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption

**Author**: GSS R&D Germany

**Note**: Currently maximum number of CAP keys to be stored is 512.

Explanation in programmers guide: [Configure CTLS CAP Keys]

**Serialization:** As this command uses the same class and instruction as [EMV_CTLS_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ctls-readcapkeys) the presence of parameter offset marks the support of compressed response format. Legacy frameworks will ignore this parameter and return key info in TLV format. 
**Request** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

 capacity [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number), up to 255, for more a loop is required 

 offset [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1), length 2 
**Response**

 configured [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number), length 2 indicates compressed format, legacy framework will send length 1 

 key info [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data) sequence of RID, index and key length up to given capacity, data length is 7 times number of keys info blocks while the number of blocks is min(capacity, number of stored keys - offset) 


### function EMV_CTLS_SetTermData

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_SetTermData(
    EMV_CTLS_TERMDATA_TYPE * pxTermData
)
```

set terminal specific data and perform verification and saving of data 

**Parameters**: 

  * **pxTermData** ... terminal data, see [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData file corruption
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData file persistence problem
**Serialization:**![TLV_SetTerminalData.jpg](.//TLV_SetTerminalData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure CTLS Terminal data]


### function EMV_CTLS_GetTermData

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_GetTermData(
    EMV_CTLS_TERMDATA_TYPE * pxTermData
)
```

get configured terminal data 

**Parameters**: 

  * **pxTermData** ... terminal data, see [EMV_CTLS_TERMDATA_STRUCT](struct_e_m_v___c_t_l_s___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): Cless Cfg data not init or memory allocation problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData file corruption
**Serialization:**![TLV_GetTerminalData.jpg](.//TLV_GetTerminalData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure CTLS Terminal data]


### function EMV_CTLS_SetAppliDataSchemeSpecific

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_SetAppliDataSchemeSpecific(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType,
    EMV_CTLS_APPLI_KERNEL_TYPE * pxAID,
    EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE * pxAppliData
)
```

Set application specific data and perform verification and saving of data. 

**Parameters**: 

  * **eHandleAppliType** ... see [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)
  * **pxAID** ... AID/kernel combination, key for this configuration set, see [EMV_CTLS_APPLI_KERNEL_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___k_e_r_n_e_l___s_t_r_u_c_t.md)
  * **pxAppliData** ... application data, see [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md)


**Deprecated**: 

[EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed-wrong-cfg-intf): wrong configuration function

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): illegal handle type or pointer
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): file corruption 
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): persistence problem 
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): if number of configurable AIDs is a limit

**Author**: GSS R&D Germany

This function can only be used if init option [EMV_CTLS_INIT_OPT_NEW_CFG_INTF](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-new-cfg-intf) was set. 

 Has to be called once per application/kernel combination (Visa, MasterCard, ...). 

 Restriction for VFI reader: 

 Max. number allowed is 10 system AIDs + 10 user AIDs 

 System AIDs are: MasterCard, Maestro, Visa, Discover, Amex, Visa electron, VPAY, PBOC, Visa Interlink, Interac

**Serialization:**![TLV_SetApplicationData.jpg](.//TLV_SetApplicationData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)


### function EMV_CTLS_GetAppliDataSchemeSpecific

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_GetAppliDataSchemeSpecific(
    EMV_ADK_READAPPLI_TYPE eReadAppliType,
    EMV_CTLS_APPLI_KERNEL_TYPE * pxAID,
    EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE * pxAppliData
)
```

Get configured application data. 

**Parameters**: 

  * **eReadAppliType** ... see [Defines for type of read application data mode](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md)
  * **pxAID** ... AID, see [EMV_CTLS_APPLI_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i___s_t_r_u_c_t.md)
  * **pxAppliData** ... application data, see [EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___s_c_h_e_m_e___s_p_e_c_i_f_i_c___s_t_r_u_c_t.md)


**Deprecated**: 

[EMV_ADK_NOT_ALLOWED_WRONG_CFG_INTF](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed-wrong-cfg-intf): wrong configuration function

**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad eReadAppliType input param
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): AppliData file corruption 

**Author**: GSS R&D Germany

**Warning**: struct members of type [EMV_CTLS_DATA_TYPE](_e_m_v___c_t_l_s___interface_8h.md#typedef-emv-ctls-data-type) are allocated within libEMV_CTLS_Client. The next call to this function as well as a call to Exit Framework will invalidate the data pointers of the first result. For the same reason, this function is not thread-safe

This function can only be used if init option [EMV_CTLS_INIT_OPT_NEW_CFG_INTF](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-new-cfg-intf) was set. 

Transport tags used in serialization: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv)[INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg)[P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

**Serialization:**![TLV_GetApplicationData.jpg](.//TLV_GetApplicationData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


### function EMV_CTLS_ApplyConfiguration

```
DLL_CLCEMV_ADK_INFO EMV_CTLS_ApplyConfiguration(
    unsigned long options
)
```

Transfer the stored configuration to reader. 

**Parameters**: 

  * **options** Configuration options, see [Options how to apply configuration (VFI reader only)](group___a_p_p_l_y___c_o_n_f_i_g___o_p_t_i_o_n.md)

 TLV tag [TAG_DF8F0F_APPLYCONFIG_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0f-applyconfig-options)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap file corruption@ [EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap file persistence problem
[EMV_ADK_VIRTTERMMAP_WRONG_INIT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-virttermmap-wrong-init): virtual terminal map init has failed
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
**Serialization:**![TLV_ApplyConfiguration.jpg](.//TLV_ApplyConfiguration.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv) or [CLA_EMV_ALT](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv-alt), Instruction: [INS_APPLY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-apply-cfg)

**Author**: GSS R&D Germany

Only functional in context of VFI reader. 

 On velocity solution this function writes the configuration to file system if [EMV_CTLS_INIT_OPT_CONFIG_MODE](group___c_l_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ctls-init-opt-config-mode) was set.

Explanation in programmers guide: [Configure CTLS Application data]


### function EMV_CT_MapVirtualTerminal

```
DLL_CTCEMV_ADK_INFO EMV_CT_MapVirtualTerminal(
    EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType,
    unsigned char * TLVSwitchValue,
    unsigned int TLVBufLen,
    unsigned char VirtualTerminal
)
```

Changes the Virtual Terminal Map. 

**Parameters**: 

  * **VirtualTermMapType** Mode, see [Defines for type of virtual terminal map](group___v_i_r_t_u_a_l_t_e_r_m_m_a_p___m_o_d_e.md)

 TLV tag: [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **TLVSwitchValue** TLV buffer containing switch criteria. Must contain tag [TAG_9C_TRANS_TYPE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9c-trans-type) and/or tag [TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency), all other tags are currently ignored. 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **TLVBufLen** Length of TLV buffer 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **VirtualTerminal** Virtual Terminal (non-zero) that is selected if switch criteria match. 

 TLV tag [TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
**Serialization:** Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_VIRT_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-virt-cfg)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Virtual terminal mapping table]


### function EMV_CT_StoreCAPKey

```
DLL_CTCEMV_ADK_INFO EMV_CT_StoreCAPKey(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType,
    const EMV_CT_CAPKEY_TYPE * pxKeyData
)
```

Stores the specified CAP key. 

**Parameters**: 

  * **eHandleCAPKeyType** Mode of CAP key setting, see [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md) (Note: Multiple records are not supported) 

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)
  * **pxKeyData** All the data of the key that needs storing, see [EMV_CT_CAPKEY_STRUCT](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): invalid input param pxKeyData
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): CapKeys file persistence problem
**Serialization:**![TLV_StoreCAPKey.jpg](.//TLV_StoreCAPKey.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure CAP Keys]


### function EMV_CT_ReadCAPKeys

```
DLL_CTCEMV_ADK_INFO EMV_CT_ReadCAPKeys(
    EMV_CT_CAPREAD_TYPE * pxKeyData,
    unsigned char * pucMaxnum
)
```

Reads CAP keys. 

**Parameters**: 

  * **pxKeyData** CAP key data, [min(*pucMaxnum, number of stored CAP keys, 100)](http__get__curl_8c.md#define-min) are written to output buffer 

 see [EMV_CT_CAPREAD_STRUCT](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md)
  * **pucMaxnum** Input: maximum number of CAP keys to write to pxKeyData; output: number of CAP keys stored in file 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxKeyData or pucMaxnum input params
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption

**Author**: GSS R&D Germany

**Note**: Currently maximum number of CAP keys to be stored is 512. 
**Serialization:**![TLV_ReadCAPKey.jpg](.//TLV_ReadCAPKey.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)


Explanation in programmers guide: [Configure CAP Keys] Due to serialisation buffer limitation the maximum number of read keys is 100, [EMV_CT_GetCAPKeyInfo()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getcapkeyinfo) is without this restriction.


### function EMV_CT_GetCAPKeyInfo

```
DLL_CTCEMV_ADK_INFO EMV_CT_GetCAPKeyInfo(
    EMV_CT_CAPREAD_TYPE * pxKeyInfo,
    unsigned capacity,
    unsigned offset,
    unsigned * received,
    unsigned * configured
)
```

Reads CAP key information. 

**Parameters**: 

  * **pxKeyInfo** CAP key info data (buffer length at least 7 times capacity) 

 see [EMV_CT_CAPREAD_STRUCT](struct_e_m_v___c_t___c_a_p_r_e_a_d___s_t_r_u_c_t.md)

 TLV tag [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data)
  * **capacity** number of keys that can be stored in pxKeyInfo 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)
  * **offset** for reading the key list in several chunks 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **received** number of data sets stored to pxKeyInfo 
  * **configured** number of configured keys 

 TLV tag [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxKeyData or pucMaxnum input params
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): CapKeys file corruption

**Author**: GSS R&D Germany

**Note**: Currently maximum number of CAP keys to be stored is 512.


Explanation in programmers guide: [Configure CAP Keys]

**Serialization:** As this command uses the same class and instruction as [EMV_CT_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-readcapkeys) the presence of parameter offset marks the support of compressed response format. Legacy frameworks will ignore this parameter and return key info in TLV format. 
**Request**

 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_CAPKEY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-capkey-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

 capacity [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number), up to 255, for more a loop is required 

 offset [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1), length 2 
**Response**

 configured [TAG_KEY_NUMBER](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-key-number), length 2 indicates compressed format, legacy framework will send length 1 

 key info [TAG_ISO_DATA](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-iso-data) sequence of RID, index and key length up to given capacity, data length is 7 times number of keys info blocks while the number of blocks is min(capacity, number of stored keys - offset) 


### function EMV_CT_SetTermData

```
DLL_CTCEMV_ADK_INFO EMV_CT_SetTermData(
    EMV_CT_TERMDATA_TYPE * pxTermData
)
```

Set terminal specific data and perform verification and saving of data. 

**Parameters**: 

  * **pxTermData** Terminal data ([EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)) 


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData file persistence problem
**Serialization:**![TLV_SetTerminalData.jpg](.//TLV_SetTerminalData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure Terminal Data]


### function EMV_CT_GetTermData

```
DLL_CTCEMV_ADK_INFO EMV_CT_GetTermData(
    EMV_CT_TERMDATA_TYPE * pxTermData
)
```

Get configured terminal data. 

**Parameters**: 

  * **pxTermData** Terminal data ([EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md)) 


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): TermData file corruption
**Serialization:**![TLV_GetTerminalData.jpg](.//TLV_GetTerminalData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_TERM_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-term-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure Terminal Data]


### function EMV_CT_SetAppliData

```
DLL_CTCEMV_ADK_INFO EMV_CT_SetAppliData(
    EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType,
    EMV_CT_APPLI_TYPE * pxAID,
    EMV_CT_APPLIDATA_TYPE * pxAppliData
)
```

Set application specific data and perform verification and saving of data.    Has to be called once per application (Visa, MasterCard, ...). 

**Parameters**: 

  * **eHandleAppliType** See [Modes of application data and CAP key setting](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md)

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)
  * **pxAID** AID (up to n-times for AIDs with same configuration), see [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)

 TLV tag [TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)
  * **pxAppliData** Application data, see [EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): illegal handle type or pointer
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): file corruption 
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): persistence problem 
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): if number of configurable AIDs is a limit

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure Application Data]

**Serialization:**![TLV_SetAppliData.jpg](.//TLV_SetAppliData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg), P2: [P2_SET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-set)


### function EMV_CT_GetAppliData

```
DLL_CTCEMV_ADK_INFO EMV_CT_GetAppliData(
    EMV_ADK_READAPPLI_TYPE eReadAppliType,
    EMV_CT_APPLI_TYPE * pxAID,
    EMV_CT_APPLIDATA_TYPE * pxAppliData
)
```

Get configured application data    Has to be called once per application (Visa, MasterCard, ...). 

**Parameters**: 

  * **eReadAppliType** See [Defines for type of read application data mode](group___r_e_a_d___a_p_p_l_i___t_y_p_e.md)

 TLV tag [TAG_HANDLE_APPLI_TYPE](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-handle-appli-type)
  * **pxAID** AID, see [EMV_CT_APPLI_STRUCT](struct_e_m_v___c_t___a_p_p_l_i___s_t_r_u_c_t.md)

 TLV tag [TAG_4F_APP_ID](group___e_m_v_c_o___t_a_g_s.md#define-tag-4f-app-id)
  * **pxAppliData** Application data, see [EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param): bad pxTermData input param
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error): AppliData file corruption
**Serialization:**![TLV_GetAppliData.jpg](.//TLV_GetAppliData.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_APPLI_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-appli-cfg), P2: [P2_GET](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-p2-get)

**Author**: GSS R&D Germany

Explanation in programmers guide: [Configure Application Data]


### function EMV_CT_ApplyConfiguration

```
DLL_CTCEMV_ADK_INFO EMV_CT_ApplyConfiguration(
    unsigned long options
)
```

Write configuration to files. 

**Parameters**: 

  * **options** RFU 

 TLV tag [TAG_DF8F0F_APPLYCONFIG_OPTIONS](group___v_e_r_i___p_r_i_m___t_a_g_s__3_b_y_t_e.md#define-tag-df8f0f-applyconfig-options)


**Return**: [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok): success
[EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal): internal communication problem, illegal file content, memory allocation
[EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err): TLV processing problem
[EMV_ADK_NOT_ALLOWED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-not-allowed): concurrent call or not allowed within callback
[EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error): TermData/AppliData/CapKeys/Hotlist/VirtTermMap file persistence problem
[EMV_ADK_NO_EXEC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-no-exec): maximum number of configurable AIDs exceeded
**Serialization:**![TLV_ApplyConfiguration.jpg](.//TLV_ApplyConfiguration.jpg)
 Class: [CLA_EMV](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-cla-emv), Instruction: [INS_APPLY_CFG](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md#define-ins-apply-cfg)

**Author**: GSS R&D Germany

This function writes the configuration to file system if [EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode) was set. If [EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode) was not set, this function returns EMV_ADK_NO_EXEC and does nothing.

Explanation in programmers guide: [Virtual terminal mapping table]


### function EMV_CT_LED

```
DLL_CTC unsigned char EMV_CT_LED(
    unsigned char ucLedId,
    unsigned char ucLedState,
    unsigned char ucLedColor,
    unsigned long ulTimeoutMs
)
```

Control the Smart Card Reader LEDs. 

**Parameters**: 

  * **ucLedId** Id of the LED 

 TLV tag [TAG_DF3B_PARAMETER_1](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3b-parameter-1)
  * **ucLedState** State of the LED (e.g. [CONTACT_LED_ON](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-on)) 

 TLV tag [TAG_DF3C_PARAMETER_2](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3c-parameter-2)
  * **ucLedColor** Color (e.g. [CONTACT_LED_COLOR_RED](group___a_d_k___l_e_d___d_e_f_i_n_e_s.md#define-contact-led-color-red)) 

 TLV tag [TAG_DF3D_PARAMETER_3](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df3d-parameter-3)
  * **ulTimeoutMs** Timeout in milliseconds 

 TLV tag [TAG_DF19_PARAMETER_4](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df19-parameter-4)


**Return**: `0` ... okay 
`!=0` ... error 

**Author**: GSS R&D Germany





-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100