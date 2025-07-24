---
hidden: true
title: Proprietary tags used by MasterCardGeneral topics » Serialization » BER TLV tags used by EMV ADK
---

[Macros](#define-members)

see \[MC_FA\], page 7-78 [More\...](#details)

Collaboration diagram for Proprietary tags used by MasterCard:

![](group___m_c___t_a_g_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [TAG_9F53_TRANS_CATEGORY_CODE](#ga47396b01e28e3eadd46f0f1a5f79662e)   0x9F53 |
|   | Transaction Category Code<br/>[More\...](#ga47396b01e28e3eadd46f0f1a5f79662e)<br/> |
| #define  | [TAG_9F5E_DS_ID](#gae00c981e176eff37b3fe4ab9b4a6fab1)   0x9F5E |
|   | Data Storage ID = Application PAN (without any \'F\' padding) & Application PAN Sequence Number. [More\...](#gae00c981e176eff37b3fe4ab9b4a6fab1)<br/> |
| #define  | [TAG_9F6B_TRACK2_DATA](#gaa3665e5db97afb028429d5d0b8fb14b9)   0x9F6B |
|   | Track 2 Data contains the data objects of the track 2 according to \[ISO/IEC 7813\], excluding start sentinel, end sentinel and LRC. [More\...](#gaa3665e5db97afb028429d5d0b8fb14b9)<br/> |
| #define  | [TAG_9F6D_TRM_APP_MSR_VERSION_NB](#gad65f96e73f89dae30c874870e0f97cb2)   0x9F6D |
|   | Terminal application MSR version number<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#adfde93ebf20039feac2f95c2d0184277">EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D</a>. [More\...](#gad65f96e73f89dae30c874870e0f97cb2)<br/> |
| #define  | [TAG_9F6E_DEVICE_TYPE_INDICATOR](#ga77800c9d29af03e0ae6d5375e77d0eae)   0x9F6E |
|   | Amex device type indicator<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5b96a70efc27aea80f2807131bc3232f">EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E</a>. [More\...](#ga77800c9d29af03e0ae6d5375e77d0eae)<br/> |
| #define  | [TAG_DF8104_BALANCE_BEFORE](#gaaf73d59c995066da07abf99efa722e3d)   0xDF8104 |
|   | Balance Read Before Gen AC<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aaa2b980589b22306e765e0d5a78d99be">EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE</a>. [More\...](#gaaf73d59c995066da07abf99efa722e3d)<br/> |
| #define  | [TAG_DF8105_BALANCE_AFTER](#ga41d02c35cdd7230bee2bd6d19ac33719)   0xDF8105 |
|   | Balance Read After Gen AC<br/>used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a22bf7f2806cda0300c9e8a4c31338468">EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE</a>. [More\...](#ga41d02c35cdd7230bee2bd6d19ac33719)<br/> |
| #define  | [TAG_DF8106_DE_DATA_NEEDED](#ga42d1ee853afeb21f585492a4c8428382)   0xDF8106 |
|   | DataExchange, data needed, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>. [More\...](#ga42d1ee853afeb21f585492a4c8428382)<br/> |
| #define  | [TAG_DF810C_KERNEL_ID](#ga1ac3033fda29e12b9fecdc62b2744d46)   0xDF810C |
|   | MasterCard Kernel ID<br/>used in <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ada17f52aa7c3dbdd8b774922168c09">EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C</a>. [More\...](#ga1ac3033fda29e12b9fecdc62b2744d46)<br/> |
| #define  | [TAG_DF8115_ERROR_INDICATION](#gafff11ef6c6a52560ea8ba92fdc979a4f)   0xDF8115 |
|   | MasterCard Error Indication (part of Discretionary Data) [More\...](#gafff11ef6c6a52560ea8ba92fdc979a4f)<br/> |
| #define  | [TAG_DF8116_UI_DATA](#ga342edb773029edb17d4c969216e5a78d)   0xDF8116 |
|   | User Interface Request Data. [More\...](#ga342edb773029edb17d4c969216e5a78d)<br/> |
| #define  | [TAG_DF8117_CARD_DATA_INPUT_CAPABILITY](#ga42b2457c0910cc5d33ad04ec5ca22974)   0xDF8117 |
|   | Card data input capability (same as Terminal capability, byte 1)<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aae06d72d84f8cd4b1c6dbec8b6595e50">EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117</a>. [More\...](#ga42b2457c0910cc5d33ad04ec5ca22974)<br/> |
| #define  | [TAG_DF8118_CVM_CAPABILITY\_\_CVM_REQUIRED](#gae26b009b2e8fbc3f96890a6f8f05f917)   0xDF8118 |
|   | CVM Capability - CVM Required<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afd2cc1051e044d0ef00f4f0713abea9b">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118</a>. [More\...](#gae26b009b2e8fbc3f96890a6f8f05f917)<br/> |
| #define  | [TAG_DF8119_CVM_CAPABILITY\_\_NO_CVM_REQUIRED](#ga891bf29200fdd3a0e520e68bb06d5a8d)   0xDF8119 |
|   | CVM Capability - No CVM Required<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a51dce31dfdd9f05c79f0b3eba62cea89">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119</a>. [More\...](#ga891bf29200fdd3a0e520e68bb06d5a8d)<br/> |
| #define  | [TAG_DF811B_KERNEL_CONFIGURATION](#gaf54761e0bb859b84f08931b53ea2bcb3)   0xDF811B |
|   | Kernel Configuration<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a896642c3eff7c8a2bb637aea4a3cf625">EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B</a>. [More\...](#gaf54761e0bb859b84f08931b53ea2bcb3)<br/> |
| #define  | [TAG_DF811C_TRN_TXN_LIFETIME](#ga8aaa1d9ac0acc2a512ea7c4292942818)   0xDF811C |
|   | Torn transaction life time<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae7ce805109961212fd3b81f2893f854c">EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C</a>. [More\...](#ga8aaa1d9ac0acc2a512ea7c4292942818)<br/> |
| #define  | [TAG_DF811D_TRN_TXN_NUMBER](#gaafcebff672b6d27983cfd3ffe9568112)   0xDF811D |
|   | Torn transaction max. number<br/>used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2961d7ec31ba7257e02df650186fa2cf">EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D</a>. [More\...](#gaafcebff672b6d27983cfd3ffe9568112)<br/> |
| #define  | [TAG_DF811E_MSR_CVM_ABOVE_LIMIT](#gaafb1df3552503b65888886ebc175c2eb)   0xDF811E |
|   | Mag-stripe CVM Capability - CVM Required. [More\...](#gaafb1df3552503b65888886ebc175c2eb)<br/> |
| #define  | [TAG_DF811F_SECURITY_CAPABILITY](#gaf663ad885385fe9b0764fd5e159c1b3a)   0xDF811F |
|   | Security Capability<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afb9be05d474bc208569ed6f61ea55a9f">EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F</a>. [More\...](#gaf663ad885385fe9b0764fd5e159c1b3a)<br/> |
| #define  | [TAG_DF8120_TAC_DEFAULT](#ga8de41e2b23c67abd4560ad0e210ebcc0)   0xDF8120 |
|   | TAC Default<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7680fabfb53533dd8b3bb0c71a7484fe">EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120</a>. [More\...](#ga8de41e2b23c67abd4560ad0e210ebcc0)<br/> |
| #define  | [TAG_DF8121_TAC_DENIAL](#gaf7567abd6f21a6c76f4cf7c5be314b34)   0xDF8121 |
|   | TAC Denial<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a78079e1470342e9c9677c8cecb4e5580">EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121</a>. [More\...](#gaf7567abd6f21a6c76f4cf7c5be314b34)<br/> |
| #define  | [TAG_DF8122_TAC_ONLINE](#ga223085b47b7d8ef1a7f4ec69f9a32efb)   0xDF8122 |
|   | TAC Online<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa15ba42840580205287542f74ee37b66">EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122</a>. [More\...](#ga223085b47b7d8ef1a7f4ec69f9a32efb)<br/> |
| #define  | [TAG_DF8123_FLOOR_LIMIT](#ga7e3bc2b53045bb7f683762fdb53a4358)   0xDF8123 |
|   | Reader Contactless Floor Limit<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a120bc0b391b6eb0b1dc88076cd460664">EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123</a>. [More\...](#ga7e3bc2b53045bb7f683762fdb53a4358)<br/> |
| #define  | [TAG_DF8124_READER_CTLS_TRX_LIMIT\_\_NO_ON_DEV_CVM](#ga97bfc09582df37b5cc75822f4efbfeb3)   0xDF8124 |
|   | Reader Contactless Transaction Limit (No On-device CVM)<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0c42a791bdd3497f5518e08ff7e6f18e">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124</a>. [More\...](#ga97bfc09582df37b5cc75822f4efbfeb3)<br/> |
| #define  | [TAG_DF8125_READER_CTLS_TRX_LIMIT\_\_ON_DEVICE_CVM](#ga55d133646b780225892a8e430d85ed71)   0xDF8125 |
|   | Reader Contactless Transaction Limit (On-device CVM)<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aad3ddefb848e37af03377938289edbfc">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125</a>. [More\...](#ga55d133646b780225892a8e430d85ed71)<br/> |
| #define  | [TAG_DF8126_CVM_REQUIRED_LIMIT](#ga30158fe6b585cce6e0f823d6f3893821)   0xDF8126 |
|   | Reader Contactless CVM Required Limit<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb20a04d178dc35df1a42c2d564f2440">EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126</a>. [More\...](#ga30158fe6b585cce6e0f823d6f3893821)<br/> |
| #define  | [TAG_DF8129_OUTCOME_P_SET](#ga7c0a8175026a96896948fddbf814b2e3)   0xDF8129 |
|   | Outcome Parameter Set. [More\...](#ga7c0a8175026a96896948fddbf814b2e3)<br/> |
| #define  | [TAG_DF812C_MSR_CVM_BELOW_LIMIT](#gab4ad1694319aab79dd087cd77de574b9)   0xDF812C |
|   | Mag-stripe CVM Capability - No CVM Required. [More\...](#gab4ad1694319aab79dd087cd77de574b9)<br/> |
| #define  | [TAG_DF812D_MESSAGE_HOLD_TIME](#gab6639b6014ddbc22057a1ad2ed9f21f1)   0xDF812D |
|   | Message Hold Time<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1b020166d324dd6547910c8a661ee8e0">EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D</a>. [More\...](#gab6639b6014ddbc22057a1ad2ed9f21f1)<br/> |
| #define  | [TAG_DF8130_HOLD_TIME_VALUE](#ga14b2bd792d60d8cba426bccfc2546ffa)   0xDF8130 |
|   | Hold Time Value<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a65466db9794ad80b1497f1d20d32e2e9">EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130</a>. [More\...](#ga14b2bd792d60d8cba426bccfc2546ffa)<br/> |
| #define  | [TAG_DF8131_PHONE_MSG_TABLE](#ga19265599710cf038895aea974b000166)   0xDF8131 |
|   | Phone Message Table<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac229a9f37336fc77ec29829b7ef38d21">EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131</a>. [More\...](#ga19265599710cf038895aea974b000166)<br/> |
| #define  | [TAG_DF8112_TAGS_TO_READ](#ga634f6329a34aa4633f4514a41f31a0e3)   0xDF8112 |
|   | Tags To Read<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac3fe9ed51d7b7d75ea949a449311d7bd">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112</a>. [More\...](#ga634f6329a34aa4633f4514a41f31a0e3)<br/> |
| #define  | [TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC](#ga91e87ea5c33e41742332a70c9e9b25e4)   0xFF8102 |
|   | Tags To Write Before Gen AC<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7521fa6374def935989383f7c5ce25e3">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102</a>. [More\...](#ga91e87ea5c33e41742332a70c9e9b25e4)<br/> |
| #define  | [TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC](#ga59594ea453d6ad2452b61008edaf17f0)   0xFF8103 |
|   | Tags To Write After Gen AC<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6bb13b23e1ca9c0f8f501dddcf36834e">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103</a>. [More\...](#ga59594ea453d6ad2452b61008edaf17f0)<br/> |
| #define  | [TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG](#ga3c18d291635a36adf3d61b16ad5e9ee2)   0xDF8110 |
|   | Proceed To First Write Flag<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a331f32df08bf0303f3cf092352d219ba">EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110</a>. [More\...](#ga3c18d291635a36adf3d61b16ad5e9ee2)<br/> |
| #define  | [TAG_DF810D_DSVN_TERM](#gad2d7ce1db7335ee1a52bf833461268e6)   0xDF810D |
|   | DSVN Term. [More\...](#gad2d7ce1db7335ee1a52bf833461268e6)<br/> |
| #define  | [TAG_9F5C_DS_REQUESTED_OPERATOR_ID](#gae3ff1dcce86b00807abf063eb2a6de2f)   0x9F5C |
|   | DS Requested Operator ID<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80e6584bda848e756f8c9d5a5b832812">EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C</a>. [More\...](#gae3ff1dcce86b00807abf063eb2a6de2f)<br/> |
| #define  | [TAG_DF8127_DE_TIMEOUT_VALUE](#ga4f61ce936421c5a1abfea829e94e5567)   0xDF8127 |
|   | Data Exchange Time Out Value<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5cc8d2ff01a1967ba0e0b5eba8e3487">EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127</a>. [More\...](#ga4f61ce936421c5a1abfea829e94e5567)<br/> |
| #define  | [TAG_DF8132_RR_MIN_GRACE_PERIOD](#gad002d7cb64f70850b6b57e2afe610eb2)   0xDF8132 |
|   | Minimum Relay Resistance Grace Period \[1/100 ms\]<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2bb03c9482e6fc62c5683eaef07c8e37">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132</a>. [More\...](#gad002d7cb64f70850b6b57e2afe610eb2)<br/> |
| #define  | [TAG_DF8133_RR_MAX_GRACE_PERIOD](#gaff8cee533b36d5c16c57f9238ef5287f)   0xDF8133 |
|   | Maximum Relay Resistance Grace Period \[1/100 ms\]<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a32193ead58f5038dbcb61f81eb5e28ae">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133</a>. [More\...](#gaff8cee533b36d5c16c57f9238ef5287f)<br/> |
| #define  | [TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU](#gaeb20fef28673994edbc531e8e1deef45)   0xDF8134 |
|   | Terminal Expected Transmission Time For Relay Resistance C-APDU \[1/10 ms\]<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af860b71c8466de6cfb4aaae655be44e4">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134</a>. [More\...](#gaeb20fef28673994edbc531e8e1deef45)<br/> |
| #define  | [TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU](#ga884b0eba03de051b0c696f740431e651)   0xDF8135 |
|   | Terminal Expected Transmission Time For Relay Resistance R-APDU \[1/10 ms\]<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a99c98ba33d7b823984a9d3435666d65f">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135</a>. [More\...](#ga884b0eba03de051b0c696f740431e651)<br/> |
| #define  | [TAG_DF8136_RR_ACCURACY_THRESHOLD](#gaa8edcf63c6c6e3573a87c1eb06d2c6b1)   0xDF8136 |
|   | Relay Resistance Accuracy Threshold \[1/10 ms\]<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa07f0821f57d18b5d1a8c0c02ee1c62a">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136</a>. [More\...](#gaa8edcf63c6c6e3573a87c1eb06d2c6b1)<br/> |
| #define  | [TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD](#ga13ac475cae84818b777e7d7a697f7001)   0xDF8137 |
|   | Relay Resistance Transmission Time Mismatch Threshold \[%\]<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae4e57b81456960fa9bf5ba1eef3bc0ff">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137</a>. [More\...](#ga13ac475cae84818b777e7d7a697f7001)<br/> |
| #define  | [TAG_DF8306_RR_MEASURED_TIME](#ga2435383081cf37654c6665bbc1b53334)   0xDF8306 |
|   | Measured Relay Resistance Processing Time. [More\...](#ga2435383081cf37654c6665bbc1b53334)<br/> |
| #define  | [TAG_9F7C_MERCHANT_CUSTOM_DATA](#ga347a4ace211c5abd340cc2c2f47e20f0)   0x9F7C |
|   | Merchant Custom Data<br/>Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aec9159fa9d8ddc9e72887eec78e0466a">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C</a>. [More\...](#ga347a4ace211c5abd340cc2c2f47e20f0)<br/> |
| #define  | [TAG_FF8104_DE_DATA_TO_SEND](#ga31cbc9b6d96370b74c32970e1967b42d)   0xFF8104 |
|   | DataExchange, data to send, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>. [More\...](#ga31cbc9b6d96370b74c32970e1967b42d)<br/> |
| #define  | [TAG_FF8105_DATA_RECORD](#gaa905c75ee960312b405985befc1cdbde)   0xFF8105 |
|   | Data Record, The Data Record is a list of TLV encoded data objects returned with the Outcome Parameter Set on the completion of transaction processing. [More\...](#gaa905c75ee960312b405985befc1cdbde)<br/> |
| #define  | [TAG_9F53_TRANS_CATEGORY_CODE](#ga47396b01e28e3eadd46f0f1a5f79662e)   0x9F53 |
|   | Transaction Category Code, 1 byte binary. [More\...](#ga47396b01e28e3eadd46f0f1a5f79662e)<br/> |

## DetailedDescription {#detailed-description}

see \[MC_FA\], page 7-78

## MacroDefinition Documentation {#macro-definition-documentation}

## TAG_9F53_TRANS_CATEGORY_CODE\[1/2\] <a href="#ga47396b01e28e3eadd46f0f1a5f79662e" id="ga47396b01e28e3eadd46f0f1a5f79662e"></a> {#tag_9f53_trans_category_code-12}

<p>#define TAG_9F53_TRANS_CATEGORY_CODE   0x9F53</p>

Transaction Category Code, 1 byte binary.

## TAG_9F53_TRANS_CATEGORY_CODE\[2/2\] <a href="#ga47396b01e28e3eadd46f0f1a5f79662e" id="ga47396b01e28e3eadd46f0f1a5f79662e"></a> {#tag_9f53_trans_category_code-22}

<p>#define TAG_9F53_TRANS_CATEGORY_CODE   0x9F53</p>

Transaction Category Code

used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac6b7c2240547bac95c5b696d14049a3b">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionCategoryCode_9F53</a>, <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aeaa27f93433bbe147f581a6165f6f63c">EMV_CTLS_TRANSRES_STRUCT::T_9F53_MC_CatCode</a>

## TAG_9F5C_DS_REQUESTED_OPERATOR_ID <a href="#gae3ff1dcce86b00807abf063eb2a6de2f" id="gae3ff1dcce86b00807abf063eb2a6de2f"></a>

<p>#define TAG_9F5C_DS_REQUESTED_OPERATOR_ID   0x9F5C</p>

DS Requested Operator ID
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a80e6584bda848e756f8c9d5a5b832812">EMV_CTLS_APPLIDATA_MK_STRUCT::DSRequestedOperatorID_9F5C</a>.

## TAG_9F5E_DS_ID <a href="#gae00c981e176eff37b3fe4ab9b4a6fab1" id="gae00c981e176eff37b3fe4ab9b4a6fab1"></a>

<p>#define TAG_9F5E_DS_ID   0x9F5E</p>

Data Storage ID = Application PAN (without any \'F\' padding) & Application PAN Sequence Number.

## TAG_9F6B_TRACK2_DATA <a href="#gaa3665e5db97afb028429d5d0b8fb14b9" id="gaa3665e5db97afb028429d5d0b8fb14b9"></a>

<p>#define TAG_9F6B_TRACK2_DATA   0x9F6B</p>

Track 2 Data contains the data objects of the track 2 according to \[ISO/IEC 7813\], excluding start sentinel, end sentinel and LRC.

## TAG_9F6D_TRM_APP_MSR_VERSION_NB <a href="#gad65f96e73f89dae30c874870e0f97cb2" id="gad65f96e73f89dae30c874870e0f97cb2"></a>

<p>#define TAG_9F6D_TRM_APP_MSR_VERSION_NB   0x9F6D</p>

Terminal application MSR version number
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#adfde93ebf20039feac2f95c2d0184277">EMV_CTLS_APPLIDATA_MK_STRUCT::MSRVersionNumber_9F6D</a>.

## TAG_9F6E_DEVICE_TYPE_INDICATOR <a href="#ga77800c9d29af03e0ae6d5375e77d0eae" id="ga77800c9d29af03e0ae6d5375e77d0eae"></a>

<p>#define TAG_9F6E_DEVICE_TYPE_INDICATOR   0x9F6E</p>

Amex device type indicator
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a5b96a70efc27aea80f2807131bc3232f">EMV_CTLS_APPLIDATA_AK_STRUCT::AmexTerminalTransactionCapabilities_9F6E</a>.

## TAG_9F7C_MERCHANT_CUSTOM_DATA <a href="#ga347a4ace211c5abd340cc2c2f47e20f0" id="ga347a4ace211c5abd340cc2c2f47e20f0"></a>

<p>#define TAG_9F7C_MERCHANT_CUSTOM_DATA   0x9F7C</p>

Merchant Custom Data
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aec9159fa9d8ddc9e72887eec78e0466a">EMV_CTLS_APPLIDATA_MK_STRUCT::MerchantCustomData_9F7C</a>.

## TAG_DF8104_BALANCE_BEFORE <a href="#gaaf73d59c995066da07abf99efa722e3d" id="gaaf73d59c995066da07abf99efa722e3d"></a>

<p>#define TAG_DF8104_BALANCE_BEFORE   0xDF8104</p>

Balance Read Before Gen AC
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#aaa2b980589b22306e765e0d5a78d99be">EMV_CTLS_TRANSRES_STRUCT::T_DF8104_CL_MC_BALANCE</a>.

## TAG_DF8105_BALANCE_AFTER <a href="#ga41d02c35cdd7230bee2bd6d19ac33719" id="ga41d02c35cdd7230bee2bd6d19ac33719"></a>

<p>#define TAG_DF8105_BALANCE_AFTER   0xDF8105</p>

Balance Read After Gen AC
used as <a href="group___d_e_f___f_l_o_w___o_u_t_p_u_t.md#a22bf7f2806cda0300c9e8a4c31338468">EMV_CTLS_TRANSRES_STRUCT::T_DF8105_CL_MC_BALANCE</a>.

## TAG_DF8106_DE_DATA_NEEDED <a href="#ga42d1ee853afeb21f585492a4c8428382" id="ga42d1ee853afeb21f585492a4c8428382"></a>

<p>#define TAG_DF8106_DE_DATA_NEEDED   0xDF8106</p>

DataExchange, data needed, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>.

## TAG_DF810C_KERNEL_ID <a href="#ga1ac3033fda29e12b9fecdc62b2744d46" id="ga1ac3033fda29e12b9fecdc62b2744d46"></a>

<p>#define TAG_DF810C_KERNEL_ID   0xDF810C</p>

MasterCard Kernel ID
used in <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2ada17f52aa7c3dbdd8b774922168c09">EMV_CTLS_APPLIDATA_MK_STRUCT::KernelID_DF810C</a>.

## TAG_DF810D_DSVN_TERM <a href="#gad2d7ce1db7335ee1a52bf833461268e6" id="gad2d7ce1db7335ee1a52bf833461268e6"></a>

<p>#define TAG_DF810D_DSVN_TERM   0xDF810D</p>

DSVN Term.

## TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG <a href="#ga3c18d291635a36adf3d61b16ad5e9ee2" id="ga3c18d291635a36adf3d61b16ad5e9ee2"></a>

<p>#define TAG_DF8110_PROCEED_TO_FIRST_WRITE_FLAG   0xDF8110</p>

Proceed To First Write Flag
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a331f32df08bf0303f3cf092352d219ba">EMV_CTLS_APPLIDATA_MK_STRUCT::ProceedToFirstWriteFlag_DF8110</a>.

## TAG_DF8112_TAGS_TO_READ <a href="#ga634f6329a34aa4633f4514a41f31a0e3" id="ga634f6329a34aa4633f4514a41f31a0e3"></a>

<p>#define TAG_DF8112_TAGS_TO_READ   0xDF8112</p>

Tags To Read
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac3fe9ed51d7b7d75ea949a449311d7bd">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToRead_DF8112</a>.

## TAG_DF8115_ERROR_INDICATION <a href="#gafff11ef6c6a52560ea8ba92fdc979a4f" id="gafff11ef6c6a52560ea8ba92fdc979a4f"></a>

<p>#define TAG_DF8115_ERROR_INDICATION   0xDF8115</p>

MasterCard Error Indication (part of Discretionary Data)

## TAG_DF8116_UI_DATA <a href="#ga342edb773029edb17d4c969216e5a78d" id="ga342edb773029edb17d4c969216e5a78d"></a>

<p>#define TAG_DF8116_UI_DATA   0xDF8116</p>

User Interface Request Data.

## TAG_DF8117_CARD_DATA_INPUT_CAPABILITY <a href="#ga42b2457c0910cc5d33ad04ec5ca22974" id="ga42b2457c0910cc5d33ad04ec5ca22974"></a>

<p>#define TAG_DF8117_CARD_DATA_INPUT_CAPABILITY   0xDF8117</p>

Card data input capability (same as Terminal capability, byte 1)
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aae06d72d84f8cd4b1c6dbec8b6595e50">EMV_CTLS_APPLIDATA_MK_STRUCT::CardDataInputCapability_DF8117</a>.

## TAG_DF8118_CVM_CAPABILITY\_\_CVM_REQUIRED <a href="#gae26b009b2e8fbc3f96890a6f8f05f917" id="gae26b009b2e8fbc3f96890a6f8f05f917"></a>

<p>#define TAG_DF8118_CVM_CAPABILITY\_\_CVM_REQUIRED   0xDF8118</p>

CVM Capability - CVM Required
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afd2cc1051e044d0ef00f4f0713abea9b">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_aboveLimit_DF8118</a>.

## TAG_DF8119_CVM_CAPABILITY\_\_NO_CVM_REQUIRED <a href="#ga891bf29200fdd3a0e520e68bb06d5a8d" id="ga891bf29200fdd3a0e520e68bb06d5a8d"></a>

<p>#define TAG_DF8119_CVM_CAPABILITY\_\_NO_CVM_REQUIRED   0xDF8119</p>

CVM Capability - No CVM Required
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a51dce31dfdd9f05c79f0b3eba62cea89">EMV_CTLS_APPLIDATA_MK_STRUCT::ChipCVM_belowLimit_DF8119</a>.

## TAG_DF811B_KERNEL_CONFIGURATION <a href="#gaf54761e0bb859b84f08931b53ea2bcb3" id="gaf54761e0bb859b84f08931b53ea2bcb3"></a>

<p>#define TAG_DF811B_KERNEL_CONFIGURATION   0xDF811B</p>

Kernel Configuration
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a896642c3eff7c8a2bb637aea4a3cf625">EMV_CTLS_APPLIDATA_MK_STRUCT::KernelConfiguration_DF811B</a>.

## TAG_DF811C_TRN_TXN_LIFETIME <a href="#ga8aaa1d9ac0acc2a512ea7c4292942818" id="ga8aaa1d9ac0acc2a512ea7c4292942818"></a>

<p>#define TAG_DF811C_TRN_TXN_LIFETIME   0xDF811C</p>

Torn transaction life time
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae7ce805109961212fd3b81f2893f854c">EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionLifetime_DF811C</a>.

## TAG_DF811D_TRN_TXN_NUMBER <a href="#gaafcebff672b6d27983cfd3ffe9568112" id="gaafcebff672b6d27983cfd3ffe9568112"></a>

<p>#define TAG_DF811D_TRN_TXN_NUMBER   0xDF811D</p>

Torn transaction max. number
used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2961d7ec31ba7257e02df650186fa2cf">EMV_CTLS_APPLIDATA_MK_STRUCT::TornTransactionNumber_DF811D</a>.

## TAG_DF811E_MSR_CVM_ABOVE_LIMIT <a href="#gaafb1df3552503b65888886ebc175c2eb" id="gaafb1df3552503b65888886ebc175c2eb"></a>

<p>#define TAG_DF811E_MSR_CVM_ABOVE_LIMIT   0xDF811E</p>

Mag-stripe CVM Capability - CVM Required.

Indicates the CVM capability of the Terminal/Reader in the case of a mag-stripe mode transaction when the Amount, Authorized (Numeric) is greater than the Reader CVM Required Limit.
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a82fc51540e28fb76b48dd01347e13f43">EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_aboveLimit_DF811E</a>

## TAG_DF811F_SECURITY_CAPABILITY <a href="#gaf663ad885385fe9b0764fd5e159c1b3a" id="gaf663ad885385fe9b0764fd5e159c1b3a"></a>

<p>#define TAG_DF811F_SECURITY_CAPABILITY   0xDF811F</p>

Security Capability
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#afb9be05d474bc208569ed6f61ea55a9f">EMV_CTLS_APPLIDATA_MK_STRUCT::SecurityCapability_DF811F</a>.

## TAG_DF8120_TAC_DEFAULT <a href="#ga8de41e2b23c67abd4560ad0e210ebcc0" id="ga8de41e2b23c67abd4560ad0e210ebcc0"></a>

<p>#define TAG_DF8120_TAC_DEFAULT   0xDF8120</p>

TAC Default
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7680fabfb53533dd8b3bb0c71a7484fe">EMV_CTLS_APPLIDATA_MK_STRUCT::TACDefault_DF8120</a>.

## TAG_DF8121_TAC_DENIAL <a href="#gaf7567abd6f21a6c76f4cf7c5be314b34" id="gaf7567abd6f21a6c76f4cf7c5be314b34"></a>

<p>#define TAG_DF8121_TAC_DENIAL   0xDF8121</p>

TAC Denial
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a78079e1470342e9c9677c8cecb4e5580">EMV_CTLS_APPLIDATA_MK_STRUCT::TACDenial_DF8121</a>.

## TAG_DF8122_TAC_ONLINE <a href="#ga223085b47b7d8ef1a7f4ec69f9a32efb" id="ga223085b47b7d8ef1a7f4ec69f9a32efb"></a>

<p>#define TAG_DF8122_TAC_ONLINE   0xDF8122</p>

TAC Online
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa15ba42840580205287542f74ee37b66">EMV_CTLS_APPLIDATA_MK_STRUCT::TACOnline_DF8122</a>.

## TAG_DF8123_FLOOR_LIMIT <a href="#ga7e3bc2b53045bb7f683762fdb53a4358" id="ga7e3bc2b53045bb7f683762fdb53a4358"></a>

<p>#define TAG_DF8123_FLOOR_LIMIT   0xDF8123</p>

Reader Contactless Floor Limit
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a120bc0b391b6eb0b1dc88076cd460664">EMV_CTLS_APPLIDATA_MK_STRUCT::FloorLimit_DF8123</a>.

## TAG_DF8124_READER_CTLS_TRX_LIMIT\_\_NO_ON_DEV_CVM <a href="#ga97bfc09582df37b5cc75822f4efbfeb3" id="ga97bfc09582df37b5cc75822f4efbfeb3"></a>

<p>#define TAG_DF8124_READER_CTLS_TRX_LIMIT\_\_NO_ON_DEV_CVM   0xDF8124</p>

Reader Contactless Transaction Limit (No On-device CVM)
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a0c42a791bdd3497f5518e08ff7e6f18e">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitNoOnDevice_DF8124</a>.

## TAG_DF8125_READER_CTLS_TRX_LIMIT\_\_ON_DEVICE_CVM <a href="#ga55d133646b780225892a8e430d85ed71" id="ga55d133646b780225892a8e430d85ed71"></a>

<p>#define TAG_DF8125_READER_CTLS_TRX_LIMIT\_\_ON_DEVICE_CVM   0xDF8125</p>

Reader Contactless Transaction Limit (On-device CVM)
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aad3ddefb848e37af03377938289edbfc">EMV_CTLS_APPLIDATA_MK_STRUCT::TransactionLimitOnDevice_DF8125</a>.

## TAG_DF8126_CVM_REQUIRED_LIMIT <a href="#ga30158fe6b585cce6e0f823d6f3893821" id="ga30158fe6b585cce6e0f823d6f3893821"></a>

<p>#define TAG_DF8126_CVM_REQUIRED_LIMIT   0xDF8126</p>

Reader Contactless CVM Required Limit
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#abb20a04d178dc35df1a42c2d564f2440">EMV_CTLS_APPLIDATA_MK_STRUCT::CVMRequiredLimit_DF8126</a>.

## TAG_DF8127_DE_TIMEOUT_VALUE <a href="#ga4f61ce936421c5a1abfea829e94e5567" id="ga4f61ce936421c5a1abfea829e94e5567"></a>

<p>#define TAG_DF8127_DE_TIMEOUT_VALUE   0xDF8127</p>

Data Exchange Time Out Value
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac5cc8d2ff01a1967ba0e0b5eba8e3487">EMV_CTLS_APPLIDATA_MK_STRUCT::DETimeoutValue_DF8127</a>.

## TAG_DF8129_OUTCOME_P_SET <a href="#ga7c0a8175026a96896948fddbf814b2e3" id="ga7c0a8175026a96896948fddbf814b2e3"></a>

<p>#define TAG_DF8129_OUTCOME_P_SET   0xDF8129</p>

Outcome Parameter Set.

## TAG_DF812C_MSR_CVM_BELOW_LIMIT <a href="#gab4ad1694319aab79dd087cd77de574b9" id="gab4ad1694319aab79dd087cd77de574b9"></a>

<p>#define TAG_DF812C_MSR_CVM_BELOW_LIMIT   0xDF812C</p>

Mag-stripe CVM Capability - No CVM Required.

Indicates the CVM capability of the Terminal/Reader in the case of a mag-stripe mode transaction when the amount is less than or equal to the Reader CVM Required Limit.
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#adf50b490082b4ad86b03ed2e044f1b98">EMV_CTLS_APPLIDATA_MK_STRUCT::MagstripeCVM_belowLimit_DF812C</a>

## TAG_DF812D_MESSAGE_HOLD_TIME <a href="#gab6639b6014ddbc22057a1ad2ed9f21f1" id="gab6639b6014ddbc22057a1ad2ed9f21f1"></a>

<p>#define TAG_DF812D_MESSAGE_HOLD_TIME   0xDF812D</p>

Message Hold Time
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a1b020166d324dd6547910c8a661ee8e0">EMV_CTLS_APPLIDATA_MK_STRUCT::MessageHoldTime_DF812D</a>.

## TAG_DF8130_HOLD_TIME_VALUE <a href="#ga14b2bd792d60d8cba426bccfc2546ffa" id="ga14b2bd792d60d8cba426bccfc2546ffa"></a>

<p>#define TAG_DF8130_HOLD_TIME_VALUE   0xDF8130</p>

Hold Time Value
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a65466db9794ad80b1497f1d20d32e2e9">EMV_CTLS_APPLIDATA_MK_STRUCT::HoldTimeValue_DF8130</a>.

## TAG_DF8131_PHONE_MSG_TABLE <a href="#ga19265599710cf038895aea974b000166" id="ga19265599710cf038895aea974b000166"></a>

<p>#define TAG_DF8131_PHONE_MSG_TABLE   0xDF8131</p>

Phone Message Table
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ac229a9f37336fc77ec29829b7ef38d21">EMV_CTLS_APPLIDATA_MK_STRUCT::PhoneMessageTable_DF8131</a>.

## TAG_DF8132_RR_MIN_GRACE_PERIOD <a href="#gad002d7cb64f70850b6b57e2afe610eb2" id="gad002d7cb64f70850b6b57e2afe610eb2"></a>

<p>#define TAG_DF8132_RR_MIN_GRACE_PERIOD   0xDF8132</p>

Minimum Relay Resistance Grace Period \[1/100 ms\]
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a2bb03c9482e6fc62c5683eaef07c8e37">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MinGracePeriod_DF8132</a>.

## TAG_DF8133_RR_MAX_GRACE_PERIOD <a href="#gaff8cee533b36d5c16c57f9238ef5287f" id="gaff8cee533b36d5c16c57f9238ef5287f"></a>

<p>#define TAG_DF8133_RR_MAX_GRACE_PERIOD   0xDF8133</p>

Maximum Relay Resistance Grace Period \[1/100 ms\]
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a32193ead58f5038dbcb61f81eb5e28ae">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_MaxGracePeriod_DF8133</a>.

## TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU <a href="#gaeb20fef28673994edbc531e8e1deef45" id="gaeb20fef28673994edbc531e8e1deef45"></a>

<p>#define TAG_DF8134_RR_TERM_EXPECTED_TRANS_TIME_CAPDU   0xDF8134</p>

Terminal Expected Transmission Time For Relay Resistance C-APDU \[1/10 ms\]
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#af860b71c8466de6cfb4aaae655be44e4">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_CAPDU_DF8134</a>.

## TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU <a href="#ga884b0eba03de051b0c696f740431e651" id="ga884b0eba03de051b0c696f740431e651"></a>

<p>#define TAG_DF8135_RR_TERM_EXPECTED_TRANS_TIME_RAPDU   0xDF8135</p>

Terminal Expected Transmission Time For Relay Resistance R-APDU \[1/10 ms\]
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a99c98ba33d7b823984a9d3435666d65f">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_ExpectedTransTime_RAPDU_DF8135</a>.

## TAG_DF8136_RR_ACCURACY_THRESHOLD <a href="#gaa8edcf63c6c6e3573a87c1eb06d2c6b1" id="gaa8edcf63c6c6e3573a87c1eb06d2c6b1"></a>

<p>#define TAG_DF8136_RR_ACCURACY_THRESHOLD   0xDF8136</p>

Relay Resistance Accuracy Threshold \[1/10 ms\]
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#aa07f0821f57d18b5d1a8c0c02ee1c62a">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_AccuracyThreshold_DF8136</a>.

## TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD <a href="#ga13ac475cae84818b777e7d7a697f7001" id="ga13ac475cae84818b777e7d7a697f7001"></a>

<p>#define TAG_DF8137_RR_TRANS_TIME_MISMATCH_THRESHOLD   0xDF8137</p>

Relay Resistance Transmission Time Mismatch Threshold \[%\]
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#ae4e57b81456960fa9bf5ba1eef3bc0ff">EMV_CTLS_APPLIDATA_MK_STRUCT::RR_TransTimeMismatchThreshold_DF8137</a>.

## TAG_DF8306_RR_MEASURED_TIME <a href="#ga2435383081cf37654c6665bbc1b53334" id="ga2435383081cf37654c6665bbc1b53334"></a>

<p>#define TAG_DF8306_RR_MEASURED_TIME   0xDF8306</p>

Measured Relay Resistance Processing Time.

## TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC <a href="#ga91e87ea5c33e41742332a70c9e9b25e4" id="ga91e87ea5c33e41742332a70c9e9b25e4"></a>

<p>#define TAG_FF8102_TAGS_TO_WRITE_BEFORE_GEN_AC   0xFF8102</p>

Tags To Write Before Gen AC
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a7521fa6374def935989383f7c5ce25e3">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteBeforeGenAC_FF8102</a>.

## TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC <a href="#ga59594ea453d6ad2452b61008edaf17f0" id="ga59594ea453d6ad2452b61008edaf17f0"></a>

<p>#define TAG_FF8103_TAGS_TO_WRITE_AFTER_GEN_AC   0xFF8103</p>

Tags To Write After Gen AC
Used as <a href="group___d_e_f___c_o_n_f___a_p_p_l_i.md#a6bb13b23e1ca9c0f8f501dddcf36834e">EMV_CTLS_APPLIDATA_MK_STRUCT::TagsToWriteAfterGenAC_FF8103</a>.

## TAG_FF8104_DE_DATA_TO_SEND <a href="#ga31cbc9b6d96370b74c32970e1967b42d" id="ga31cbc9b6d96370b74c32970e1967b42d"></a>

<p>#define TAG_FF8104_DE_DATA_TO_SEND   0xFF8104</p>

DataExchange, data to send, used in <a href="group___t_l_v___c_a_l_l_b_c_k.md#ga6557e914101768d67635ca44e54362ab">EMV_CTLS_CALLBACK_FnT</a>, <a href="group___c_b_c_k___f_c_t___t_a_g_s.md#ga32719fcef354a44723c8b6561716f5bd">TAG_BF0E_CBK_DATA_EXCHANGE</a>.

## TAG_FF8105_DATA_RECORD <a href="#gaa905c75ee960312b405985befc1cdbde" id="gaa905c75ee960312b405985befc1cdbde"></a>

<p>#define TAG_FF8105_DATA_RECORD   0xFF8105</p>

Data Record, The Data Record is a list of TLV encoded data objects returned with the Outcome Parameter Set on the completion of transaction processing.
