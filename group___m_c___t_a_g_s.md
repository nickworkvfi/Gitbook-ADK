---
title: Proprietary tags used by MasterCard
summary: see [MC_FA], page 7-78 

---

# Proprietary tags used by MasterCard

**Module:** **[General topics](group___a_d_k___g_e_n_e_r_a_l.md)** **/** **[Serialization](group___a_d_k___s_e_r_i_a_l_i_z_a_t_i_o_n.md)** **/** **[BER TLV tags used by EMV ADK](group___e_m_v___t_a_g_s.md)**

see [MC_FA], page 7-78 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TAG_9F53_TRANS_CATEGORY_CODE](group___m_c___t_a_g_s.md#define-tag-9f53-trans-category-code)** <br>Transaction Category Code  |
|  | **[TAG_9F5E_DS_ID](group___m_c___t_a_g_s.md#define-tag-9f5e-ds-id)** <br>Data Storage ID = Application PAN (without any 'F' padding) & Application PAN Sequence Number.  |
|  | **[TAG_9F6B_TRACK2_DATA](group___m_c___t_a_g_s.md#define-tag-9f6b-track2-data)** <br>Track 2 Data contains the data objects of the track 2 according to [ISO/IEC 7813], excluding start sentinel, end sentinel and LRC.  |
|  | **[TAG_9F6D_TRM_APP_MSR_VERSION_NB](group___m_c___t_a_g_s.md#define-tag-9f6d-trm-app-msr-version-nb)** <br>Terminal application MSR version number    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-msrversionnumber-9f6d).  |
|  | **[TAG_9F6E_DEVICE_TYPE_INDICATOR](group___m_c___t_a_g_s.md#define-tag-9f6e-device-type-indicator)** <br>Amex device type indicator    used as [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexterminaltransactioncapabilities-9f6e).  |
|  | **[TAG_DF8104_BALANCE_BEFORE](group___m_c___t_a_g_s.md#define-tag-df8104-balance-before)** <br>Balance Read Before Gen AC    used as [EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance).  |
|  | **[TAG_DF8105_BALANCE_AFTER](group___m_c___t_a_g_s.md#define-tag-df8105-balance-after)** <br>Balance Read After Gen AC    used as [EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance).  |
|  | **[TAG_DF8106_DE_DATA_NEEDED](group___m_c___t_a_g_s.md#define-tag-df8106-de-data-needed)** <br>DataExchange, data needed, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE]().  |
|  | **[TAG_DF810C_KERNEL_ID](group___m_c___t_a_g_s.md#define-tag-df810c-kernel-id)** <br>MasterCard Kernel ID    used in [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelid-df810c).  |
|  | **[TAG_DF8115_ERROR_INDICATION](group___m_c___t_a_g_s.md#define-tag-df8115-error-indication)** <br>MasterCard Error Indication (part of Discretionary Data)  |
|  | **[TAG_DF8116_UI_DATA](group___m_c___t_a_g_s.md#define-tag-df8116-ui-data)** <br>User Interface Request Data.  |
|  | **[TAG_DF8117_CARD_DATA_INPUT_CAPABILITY](group___m_c___t_a_g_s.md#define-tag-df8117-card-data-input-capability)** <br>Card data input capability (same as Terminal capability, byte 1)    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-carddatainputcapability-df8117).  |
|  | **[TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED](group___m_c___t_a_g_s.md#define-tag-df8118-cvm-capability--cvm-required)** <br>CVM Capability - CVM Required    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-abovelimit-df8118).  |
|  | **[TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED](group___m_c___t_a_g_s.md#define-tag-df8119-cvm-capability--no-cvm-required)** <br>CVM Capability - No CVM Required    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-belowlimit-df8119).  |
|  | **[TAG_DF811B_KERNEL_CONFIGURATION](group___m_c___t_a_g_s.md#define-tag-df811b-kernel-configuration)** <br>Kernel Configuration    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b).  |
|  | **[TAG_DF811C_TRN_TXN_LIFETIME](group___m_c___t_a_g_s.md#define-tag-df811c-trn-txn-lifetime)** <br>Torn transaction life time    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionlifetime-df811c).  |
|  | **[TAG_DF811D_TRN_TXN_NUMBER](group___m_c___t_a_g_s.md#define-tag-df811d-trn-txn-number)** <br>Torn transaction max. number    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionnumber-df811d).  |
|  | **[TAG_DF811E_MSR_CVM_ABOVE_LIMIT](group___m_c___t_a_g_s.md#define-tag-df811e-msr-cvm-above-limit)** <br>Mag-stripe CVM Capability - CVM Required.  |
|  | **[TAG_DF811F_SECURITY_CAPABILITY](group___m_c___t_a_g_s.md#define-tag-df811f-security-capability)** <br>Security Capability    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-securitycapability-df811f).  |
|  | **[TAG_DF8120_TAC_DEFAULT](group___m_c___t_a_g_s.md#define-tag-df8120-tac-default)** <br>TAC Default    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdefault-df8120).  |
|  | **[TAG_DF8121_TAC_DENIAL](group___m_c___t_a_g_s.md#define-tag-df8121-tac-denial)** <br>TAC Denial    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdenial-df8121).  |
|  | **[TAG_DF8122_TAC_ONLINE](group___m_c___t_a_g_s.md#define-tag-df8122-tac-online)** <br>TAC Online    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-taconline-df8122).  |
|  | **[TAG_DF8123_FLOOR_LIMIT](group___m_c___t_a_g_s.md#define-tag-df8123-floor-limit)** <br>Reader Contactless Floor Limit    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-floorlimit-df8123).  |
|  | **[TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM](group___m_c___t_a_g_s.md#define-tag-df8124-reader-ctls-trx-limit--no-on-dev-cvm)** <br>Reader Contactless Transaction Limit (No On-device CVM)    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitnoondevice-df8124).  |
|  | **[TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM](group___m_c___t_a_g_s.md#define-tag-df8125-reader-ctls-trx-limit--on-device-cvm)** <br>Reader Contactless Transaction Limit (On-device CVM)    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitondevice-df8125).  |
|  | **[TAG_DF8126_CVM_REQUIRED_LIMIT](group___m_c___t_a_g_s.md#define-tag-df8126-cvm-required-limit)** <br>Reader Contactless CVM Required Limit    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126).  |
|  | **[TAG_DF8129_OUTCOME_P_SET](group___m_c___t_a_g_s.md#define-tag-df8129-outcome-p-set)** <br>Outcome Parameter Set.  |
|  | **[TAG_DF812C_MSR_CVM_BELOW_LIMIT](group___m_c___t_a_g_s.md#define-tag-df812c-msr-cvm-below-limit)** <br>Mag-stripe CVM Capability - No CVM Required.  |
|  | **[TAG_DF812D_MESSAGE_HOLD_TIME](group___m_c___t_a_g_s.md#define-tag-df812d-message-hold-time)** <br>Message Hold Time    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d).  |
|  | **[TAG_DF8130_HOLD_TIME_VALUE](group___m_c___t_a_g_s.md#define-tag-df8130-hold-time-value)** <br>Hold Time Value    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-holdtimevalue-df8130).  |
|  | **[TAG_DF8131_PHONE_MSG_TABLE](group___m_c___t_a_g_s.md#define-tag-df8131-phone-msg-table)** <br>Phone Message Table    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-phonemessagetable-df8131).  |
|  | **[TAG_DF8112_TAGS_TO_READ](group___m_c___t_a_g_s.md#define-tag-df8112-tags-to-read)** <br>Tags To Read    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstoread-df8112).  |
|  | **[TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC](group___m_c___t_a_g_s.md#define-tag-ff8102-tags-to-write-before-gen-ac)** <br>Tags To Write Before Gen AC    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowritebeforegenac-ff8102).  |
|  | **[TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC](group___m_c___t_a_g_s.md#define-tag-ff8103-tags-to-write-after-gen-ac)** <br>Tags To Write After Gen AC    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowriteaftergenac-ff8103).  |
|  | **[TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG](group___m_c___t_a_g_s.md#define-tag-df8110-proceed-to-first-write-flag)** <br>Proceed To First Write Flag    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-proceedtofirstwriteflag-df8110).  |
|  | **[TAG_DF810D_DSVN_TERM](group___m_c___t_a_g_s.md#define-tag-df810d-dsvn-term)** <br>DSVN Term.  |
|  | **[TAG_9F5C_DS_REQUESTED_OPERATOR_ID](group___m_c___t_a_g_s.md#define-tag-9f5c-ds-requested-operator-id)** <br>DS Requested Operator ID    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-dsrequestedoperatorid-9f5c).  |
|  | **[TAG_DF8127_DE_TIMEOUT_VALUE](group___m_c___t_a_g_s.md#define-tag-df8127-de-timeout-value)** <br>Data Exchange Time Out Value    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-detimeoutvalue-df8127).  |
|  | **[TAG_DF8132_RR_MIN_GRACE_PERIOD](group___m_c___t_a_g_s.md#define-tag-df8132-rr-min-grace-period)** <br>Minimum Relay Resistance Grace Period [1/100 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-mingraceperiod-df8132).  |
|  | **[TAG_DF8133_RR_MAX_GRACE_PERIOD](group___m_c___t_a_g_s.md#define-tag-df8133-rr-max-grace-period)** <br>Maximum Relay Resistance Grace Period [1/100 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-maxgraceperiod-df8133).  |
|  | **[TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU](group___m_c___t_a_g_s.md#define-tag-df8134-rr-term-expected-trans-time-capdu)** <br>Terminal Expected Transmission Time For Relay Resistance C-APDU [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-capdu-df8134).  |
|  | **[TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU](group___m_c___t_a_g_s.md#define-tag-df8135-rr-term-expected-trans-time-rapdu)** <br>Terminal Expected Transmission Time For Relay Resistance R-APDU [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-rapdu-df8135).  |
|  | **[TAG_DF8136_RR_ACCURACY_THRESHOLD](group___m_c___t_a_g_s.md#define-tag-df8136-rr-accuracy-threshold)** <br>Relay Resistance Accuracy Threshold [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-accuracythreshold-df8136).  |
|  | **[TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD](group___m_c___t_a_g_s.md#define-tag-df8137-rr-trans-time-mismatch-threshold)** <br>Relay Resistance Transmission Time Mismatch Threshold [%]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchthreshold-df8137).  |
|  | **[TAG_DF8306_RR_MEASURED_TIME](group___m_c___t_a_g_s.md#define-tag-df8306-rr-measured-time)** <br>Measured Relay Resistance Processing Time.  |
|  | **[TAG_9F7C_MERCHANT_CUSTOM_DATA](group___m_c___t_a_g_s.md#define-tag-9f7c-merchant-custom-data)** <br>Merchant Custom Data    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcustomdata-9f7c).  |
|  | **[TAG_FF8104_DE_DATA_TO_SEND](group___m_c___t_a_g_s.md#define-tag-ff8104-de-data-to-send)** <br>DataExchange, data to send, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE]().  |
|  | **[TAG_FF8105_DATA_RECORD](group___m_c___t_a_g_s.md#define-tag-ff8105-data-record)** <br>Data Record, The Data Record is a list of TLV encoded data objects returned with the Outcome Parameter Set on the completion of transaction processing.  |
|  | **[TAG_9F53_TRANS_CATEGORY_CODE](group___m_c___t_a_g_s.md#define-tag-9f53-trans-category-code)** <br>Transaction Category Code, 1 byte binary.  |




## Macros Documentation

### define TAG_9F53_TRANS_CATEGORY_CODE

```
#define TAG_9F53_TRANS_CATEGORY_CODE 0x9F53
```

Transaction Category Code 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionCategoryCode_9F53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactioncategorycode-9f53), [EMV_CTLS_TRANSRES_STRUCT::T_9F53_MC_CatCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f53-mc-catcode)


### define TAG_9F5E_DS_ID

```
#define TAG_9F5E_DS_ID 0x9F5E
```

Data Storage ID = Application PAN (without any 'F' padding) & Application PAN Sequence Number. 

### define TAG_9F6B_TRACK2_DATA

```
#define TAG_9F6B_TRACK2_DATA 0x9F6B
```

Track 2 Data contains the data objects of the track 2 according to [ISO/IEC 7813], excluding start sentinel, end sentinel and LRC. 

### define TAG_9F6D_TRM_APP_MSR_VERSION_NB

```
#define TAG_9F6D_TRM_APP_MSR_VERSION_NB 0x9F6D
```

Terminal application MSR version number    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-msrversionnumber-9f6d). 

### define TAG_9F6E_DEVICE_TYPE_INDICATOR

```
#define TAG_9F6E_DEVICE_TYPE_INDICATOR 0x9F6E
```

Amex device type indicator    used as [EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___a_k___s_t_r_u_c_t.md#variable-amexterminaltransactioncapabilities-9f6e). 

### define TAG_DF8104_BALANCE_BEFORE

```
#define TAG_DF8104_BALANCE_BEFORE 0xDF8104
```

Balance Read Before Gen AC    used as [EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8104-cl-mc-balance). 

### define TAG_DF8105_BALANCE_AFTER

```
#define TAG_DF8105_BALANCE_AFTER 0xDF8105
```

Balance Read After Gen AC    used as [EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df8105-cl-mc-balance). 

### define TAG_DF8106_DE_DATA_NEEDED

```
#define TAG_DF8106_DE_DATA_NEEDED 0xDF8106
```

DataExchange, data needed, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE](). 

### define TAG_DF810C_KERNEL_ID

```
#define TAG_DF810C_KERNEL_ID 0xDF810C
```

MasterCard Kernel ID    used in [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelid-df810c). 

### define TAG_DF8115_ERROR_INDICATION

```
#define TAG_DF8115_ERROR_INDICATION 0xDF8115
```

MasterCard Error Indication (part of Discretionary Data) 

### define TAG_DF8116_UI_DATA

```
#define TAG_DF8116_UI_DATA 0xDF8116
```

User Interface Request Data. 

### define TAG_DF8117_CARD_DATA_INPUT_CAPABILITY

```
#define TAG_DF8117_CARD_DATA_INPUT_CAPABILITY 0xDF8117
```

Card data input capability (same as Terminal capability, byte 1)    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-carddatainputcapability-df8117). 

### define TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED

```
#define TAG_DF8118_CVM_CAPABILITY__CVM_REQUIRED 0xDF8118
```

CVM Capability - CVM Required    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-abovelimit-df8118). 

### define TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED

```
#define TAG_DF8119_CVM_CAPABILITY__NO_CVM_REQUIRED 0xDF8119
```

CVM Capability - No CVM Required    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-chipcvm-belowlimit-df8119). 

### define TAG_DF811B_KERNEL_CONFIGURATION

```
#define TAG_DF811B_KERNEL_CONFIGURATION 0xDF811B
```

Kernel Configuration    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-kernelconfiguration-df811b). 

### define TAG_DF811C_TRN_TXN_LIFETIME

```
#define TAG_DF811C_TRN_TXN_LIFETIME 0xDF811C
```

Torn transaction life time    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionlifetime-df811c). 

### define TAG_DF811D_TRN_TXN_NUMBER

```
#define TAG_DF811D_TRN_TXN_NUMBER 0xDF811D
```

Torn transaction max. number    used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-torntransactionnumber-df811d). 

### define TAG_DF811E_MSR_CVM_ABOVE_LIMIT

```
#define TAG_DF811E_MSR_CVM_ABOVE_LIMIT 0xDF811E
```

Mag-stripe CVM Capability - CVM Required. 

Indicates the CVM capability of the Terminal/Reader in the case of a mag-stripe mode transaction when the Amount, Authorized (Numeric) is greater than the Reader CVM Required Limit. 

 Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_aboveLimit_DF811E](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-abovelimit-df811e)


### define TAG_DF811F_SECURITY_CAPABILITY

```
#define TAG_DF811F_SECURITY_CAPABILITY 0xDF811F
```

Security Capability    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-securitycapability-df811f). 

### define TAG_DF8120_TAC_DEFAULT

```
#define TAG_DF8120_TAC_DEFAULT 0xDF8120
```

TAC Default    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdefault-df8120). 

### define TAG_DF8121_TAC_DENIAL

```
#define TAG_DF8121_TAC_DENIAL 0xDF8121
```

TAC Denial    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tacdenial-df8121). 

### define TAG_DF8122_TAC_ONLINE

```
#define TAG_DF8122_TAC_ONLINE 0xDF8122
```

TAC Online    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-taconline-df8122). 

### define TAG_DF8123_FLOOR_LIMIT

```
#define TAG_DF8123_FLOOR_LIMIT 0xDF8123
```

Reader Contactless Floor Limit    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-floorlimit-df8123). 

### define TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM

```
#define TAG_DF8124_READER_CTLS_TRX_LIMIT__NO_ON_DEV_CVM 0xDF8124
```

Reader Contactless Transaction Limit (No On-device CVM)    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitnoondevice-df8124). 

### define TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM

```
#define TAG_DF8125_READER_CTLS_TRX_LIMIT__ON_DEVICE_CVM 0xDF8125
```

Reader Contactless Transaction Limit (On-device CVM)    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactionlimitondevice-df8125). 

### define TAG_DF8126_CVM_REQUIRED_LIMIT

```
#define TAG_DF8126_CVM_REQUIRED_LIMIT 0xDF8126
```

Reader Contactless CVM Required Limit    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-cvmrequiredlimit-df8126). 

### define TAG_DF8129_OUTCOME_P_SET

```
#define TAG_DF8129_OUTCOME_P_SET 0xDF8129
```

Outcome Parameter Set. 

### define TAG_DF812C_MSR_CVM_BELOW_LIMIT

```
#define TAG_DF812C_MSR_CVM_BELOW_LIMIT 0xDF812C
```

Mag-stripe CVM Capability - No CVM Required. 

Indicates the CVM capability of the Terminal/Reader in the case of a mag-stripe mode transaction when the amount is less than or equal to the Reader CVM Required Limit. 

 Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_belowLimit_DF812C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-magstripecvm-belowlimit-df812c)


### define TAG_DF812D_MESSAGE_HOLD_TIME

```
#define TAG_DF812D_MESSAGE_HOLD_TIME 0xDF812D
```

Message Hold Time    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-messageholdtime-df812d). 

### define TAG_DF8130_HOLD_TIME_VALUE

```
#define TAG_DF8130_HOLD_TIME_VALUE 0xDF8130
```

Hold Time Value    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-holdtimevalue-df8130). 

### define TAG_DF8131_PHONE_MSG_TABLE

```
#define TAG_DF8131_PHONE_MSG_TABLE 0xDF8131
```

Phone Message Table    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-phonemessagetable-df8131). 

### define TAG_DF8112_TAGS_TO_READ

```
#define TAG_DF8112_TAGS_TO_READ 0xDF8112
```

Tags To Read    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstoread-df8112). 

### define TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC

```
#define TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC 0xFF8102
```

Tags To Write Before Gen AC    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowritebeforegenac-ff8102). 

### define TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC

```
#define TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC 0xFF8103
```

Tags To Write After Gen AC    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-tagstowriteaftergenac-ff8103). 

### define TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG

```
#define TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG 0xDF8110
```

Proceed To First Write Flag    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-proceedtofirstwriteflag-df8110). 

### define TAG_DF810D_DSVN_TERM

```
#define TAG_DF810D_DSVN_TERM 0xDF810D
```

DSVN Term. 

### define TAG_9F5C_DS_REQUESTED_OPERATOR_ID

```
#define TAG_9F5C_DS_REQUESTED_OPERATOR_ID 0x9F5C
```

DS Requested Operator ID    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-dsrequestedoperatorid-9f5c). 

### define TAG_DF8127_DE_TIMEOUT_VALUE

```
#define TAG_DF8127_DE_TIMEOUT_VALUE 0xDF8127
```

Data Exchange Time Out Value    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-detimeoutvalue-df8127). 

### define TAG_DF8132_RR_MIN_GRACE_PERIOD

```
#define TAG_DF8132_RR_MIN_GRACE_PERIOD 0xDF8132
```

Minimum Relay Resistance Grace Period [1/100 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-mingraceperiod-df8132). 

### define TAG_DF8133_RR_MAX_GRACE_PERIOD

```
#define TAG_DF8133_RR_MAX_GRACE_PERIOD 0xDF8133
```

Maximum Relay Resistance Grace Period [1/100 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-maxgraceperiod-df8133). 

### define TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU

```
#define TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU 0xDF8134
```

Terminal Expected Transmission Time For Relay Resistance C-APDU [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-capdu-df8134). 

### define TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU

```
#define TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU 0xDF8135
```

Terminal Expected Transmission Time For Relay Resistance R-APDU [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-expectedtranstime-rapdu-df8135). 

### define TAG_DF8136_RR_ACCURACY_THRESHOLD

```
#define TAG_DF8136_RR_ACCURACY_THRESHOLD 0xDF8136
```

Relay Resistance Accuracy Threshold [1/10 ms]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-accuracythreshold-df8136). 

### define TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD

```
#define TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD 0xDF8137
```

Relay Resistance Transmission Time Mismatch Threshold [%]    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-rr-transtimemismatchthreshold-df8137). 

### define TAG_DF8306_RR_MEASURED_TIME

```
#define TAG_DF8306_RR_MEASURED_TIME 0xDF8306
```

Measured Relay Resistance Processing Time. 

### define TAG_9F7C_MERCHANT_CUSTOM_DATA

```
#define TAG_9F7C_MERCHANT_CUSTOM_DATA 0x9F7C
```

Merchant Custom Data    Used as [EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-merchantcustomdata-9f7c). 

### define TAG_FF8104_DE_DATA_TO_SEND

```
#define TAG_FF8104_DE_DATA_TO_SEND 0xFF8104
```

DataExchange, data to send, used in [EMV_CTLS_CALLBACK_FnT](), [TAG_BF0E_CBK_DATA_EXCHANGE](). 

### define TAG_FF8105_DATA_RECORD

```
#define TAG_FF8105_DATA_RECORD 0xFF8105
```

Data Record, The Data Record is a list of TLV encoded data objects returned with the Outcome Parameter Set on the completion of transaction processing. 

### define TAG_9F53_TRANS_CATEGORY_CODE

```
#define TAG_9F53_TRANS_CATEGORY_CODE 0x9F53
```

Transaction Category Code, 1 byte binary. 

used as [EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionCategoryCode_9F53](struct_e_m_v___c_t_l_s___a_p_p_l_i_d_a_t_a___m_k___s_t_r_u_c_t.md#variable-transactioncategorycode-9f53), [EMV_CTLS_TRANSRES_STRUCT::T_9F53_MC_CatCode](struct_e_m_v___c_t_l_s___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-9f53-mc-catcode)




-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100