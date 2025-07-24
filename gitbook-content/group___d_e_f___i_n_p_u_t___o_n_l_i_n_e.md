---
hidden: true
title: "EMV_CTLS_ContinueOnline: Which data is includedTransaction execution » Input data"
---

[Macros](#define-members)

Contents of the input in <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CTLS_HOST_STRUCT::Info_Included_Data</a>, <a href="group___f_u_n_c___f_l_o_w.md#ga297b6843994afaa2e7a6f5e0e4a8af3e">EMV_CTLS_ContinueOnline()</a> [More\...](#details)

Collaboration diagram for EMV_CTLS_ContinueOnline: Which data is included:

![](group___d_e_f___i_n_p_u_t___o_n_l_i_n_e.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [INPUT_CTLS_ONL_ONLINE_RESP](#gace037a1e731007caba3d599e9e89057f)   0x01 |
|   | B1b1: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#aa5f1fe97be1fb8a9c85bf53e241c4b7e">EMV_CTLS_HOST_STRUCT::OnlineResult</a>. [More\...](#gace037a1e731007caba3d599e9e89057f)<br/> |
| #define  | [INPUT_CTLS_ONL_AUTH_RESP](#ga10f89377c496fb3830e6dd82570b9651)   0x02 |
|   | B1b2: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a50f253cd97f2612f2d5abe02959e130f">EMV_CTLS_HOST_STRUCT::AuthResp</a>. [More\...](#ga10f89377c496fb3830e6dd82570b9651)<br/> |
| #define  | [INPUT_CTLS_ONL_TXN_OPTIONS](#ga04fb74d89a08666b258bf6d15bf53986)   0x04 |
|   | B1b3: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CTLS_HOST_STRUCT::TxnOptions</a>. [More\...](#ga04fb74d89a08666b258bf6d15bf53986)<br/> |
| #define  | [INPUT_CTLS_ONL_SCRIPT](#ga01f2fed1a6e3e782e71ba9edee57ab6c)   0x08 |
|   | B1b4: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#afd420a16596fd515042c455eaf81dbc5">EMV_CTLS_HOST_STRUCT::ScriptData</a>. [More\...](#ga01f2fed1a6e3e782e71ba9edee57ab6c)<br/> |
| #define  | [INPUT_CTLS_ONL_AUTHDATA](#ga501bd7c13e8d11791223dace897bf90e)   0x10 |
|   | B1b5: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a3e5fe321afd3d5b2db35d2d2bcdc800e">EMV_CTLS_HOST_STRUCT::AuthData</a>. [More\...](#ga501bd7c13e8d11791223dace897bf90e)<br/> |
| #define  | [INPUT_CTLS_ONL_ARC_POSITIVE](#ga4aa0c97e6abe42a39cbd43f019871b8a)   0x20 |
|   | B1b6: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a7732f5779810f1f81941cda574764137">EMV_CTLS_HOST_STRUCT::AuthResp_Positive</a>. [More\...](#ga4aa0c97e6abe42a39cbd43f019871b8a)<br/> |
| #define  | [INPUT_CTLS_ONL_ARC_SWITCH_IF](#gae8d7697068dbe85852956d2eb6941fff)   0x40 |
|   | B1b7: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a37473dcadabfbafff56a7180afba0e30">EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface</a>. [More\...](#gae8d7697068dbe85852956d2eb6941fff)<br/> |
| #define  | [INPUT_CTLS_ONL_ARC_ONLINE_PIN](#ga9e38cce5aae4ed03db650afd810da1e5)   0x80 |
|   | B1b8: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a319a55d188b9bc5e6c1698638169f0d0">EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN</a>. [More\...](#ga9e38cce5aae4ed03db650afd810da1e5)<br/> |
| #define  | [INPUT_CTLS_ONL_AMOUNT](#ga545c494c4d249539101ca0360d9e2f64)   0x01 |
|   | B2b1: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae96de7b8f91cb72f914fe3b226366f04">EMV_CTLS_HOST_STRUCT::amountUpd</a>. [More\...](#ga545c494c4d249539101ca0360d9e2f64)<br/> |
| #define  | [INPUT_CTLS_ONL_AMOUNT_OTH](#ga2aab8f4b1b1ac6194f519358487ae8aa)   0x02 |
|   | B2b2: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a950050a0a50c3a85bf52afa53b989ed8">EMV_CTLS_HOST_STRUCT::amountOthUpd</a>. [More\...](#ga2aab8f4b1b1ac6194f519358487ae8aa)<br/> |
| #define  | [INPUT_ONL_ONLINE_RESP](#ga98ca729b5fe7aa42496848f5a5dcad76)   0x01 |
|   | B1b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aa5f1fe97be1fb8a9c85bf53e241c4b7e">EMV_CT_HOST_STRUCT::OnlineResult</a>. [More\...](#ga98ca729b5fe7aa42496848f5a5dcad76)<br/> |
| #define  | [INPUT_ONL_ONLINE_AC](#ga752c13179b89b1600dee161658ca8845)   0x02 |
|   | B1b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a50f253cd97f2612f2d5abe02959e130f">EMV_CT_HOST_STRUCT::AuthResp</a>. [More\...](#ga752c13179b89b1600dee161658ca8845)<br/> |
| #define  | [INPUT_ONL_AUTHDATA](#gace44b7a66114473828ecd9013427ea3b)   0x04 |
|   | B1b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9c0d8eae37200d205013e0a17f2d2ff1">EMV_CT_HOST_STRUCT::AuthData</a>. [More\...](#gace44b7a66114473828ecd9013427ea3b)<br/> |
| #define  | [INPUT_ONL_SCRIPTCRIT](#ga0b132296227343c954936efa25aef9c3)   0x08 |
|   | B1b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aebdbfdfe3e9b08ddae10d62d723c25f5">EMV_CT_HOST_STRUCT::ScriptCritData</a>. [More\...](#ga0b132296227343c954936efa25aef9c3)<br/> |
| #define  | [INPUT_ONL_SCRIPTUNCRIT](#ga9de29596c87d45928f095f28ca6b3ef6)   0x10 |
|   | B1b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3ef982ce26d673b8463978645a76962e">EMV_CT_HOST_STRUCT::ScriptUnCritData</a>. [More\...](#ga9de29596c87d45928f095f28ca6b3ef6)<br/> |
| #define  | [INPUT_ONL_AUTHCODE](#ga3018bf4e37626be54a1ec843f43e8585)   0x20 |
|   | B1b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a49703db8aea6f6b5cb2b40690d7c7f1a">EMV_CT_HOST_STRUCT::AuthorizationCode</a>. [More\...](#ga3018bf4e37626be54a1ec843f43e8585)<br/> |
| #define  | [INPUT_ONL_RESULT_REFERRAL](#ga05d966eb9c501a618f015b912e440293)   0x40 |
|   | B1b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a21f9d40183d72a1462d5152cf00f3b23">EMV_CT_HOST_STRUCT::Result_referral</a>. [More\...](#ga05d966eb9c501a618f015b912e440293)<br/> |
| #define  | [INPUT_ONL_ARC_REFERRAL](#ga46b0d7ef9f3b37f2fc62cec19c613a68)   0x80 |
|   | B1b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#adf1d52bf324a6262866da8d78e5619f0">EMV_CT_HOST_STRUCT::AuthResp_Referral</a>. [More\...](#ga46b0d7ef9f3b37f2fc62cec19c613a68)<br/> |
| #define  | [INPUT_ONL_ARC_WRONGPIN](#ga56090280a382475c499c2cba27dcc4a0)   0x01 |
|   | B2b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4a45b2dc93e569bfabd0a5ec3188a706">EMV_CT_HOST_STRUCT::AuthResp_Wrong_PIN</a>. [More\...](#ga56090280a382475c499c2cba27dcc4a0)<br/> |
| #define  | [INPUT_ONL_TXN_OPTIONS](#ga87b94cd4be2d5b1460107ee925485d09)   0x02 |
|   | B2b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CT_HOST_STRUCT::TxnOptions</a>. [More\...](#ga87b94cd4be2d5b1460107ee925485d09)<br/> |
| #define  | [INPUT_ONL_AMOUNT_GAC2](#ga699a36bb2041de7bcb0dff77c942fe3e)   0x04 |
|   | B2b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a30e81fd1e6591284b3122a39e3d5a9e2">EMV_CT_HOST_STRUCT::PreAuth_Amount</a>. [More\...](#ga699a36bb2041de7bcb0dff77c942fe3e)<br/> |
| #define  | [INPUT_ONL_TXN_STEPS](#gae3c61af9c1bf07c0ba0848f2daa55711)   0x08 |
|   | B2b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a07d050602c00dc417b16d40db60c6de4">EMV_CT_HOST_STRUCT::TxnSteps</a>. [More\...](#gae3c61af9c1bf07c0ba0848f2daa55711)<br/> |
| #define  | [INPUT_ONL_ARC_POSITIVE](#ga7d5d36a7e6195b14e0d98977f7c18623)   0x10 |
|   | B2b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a159e8303937fe013eee7c00aebc17483">EMV_CT_HOST_STRUCT::AuthResp_Positive</a>. [More\...](#ga7d5d36a7e6195b14e0d98977f7c18623)<br/> |
| #define  | [INPUT_ONL_WRITE_DS_DATA](#gae77bd582b0f3db081dd65a23271dd796)   0x20 |
|   | B2b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#afe256808b40eb152d0293d76b904ef8c">EMV_CT_HOST_STRUCT::WriteDataStorageData</a>. [More\...](#gae77bd582b0f3db081dd65a23271dd796)<br/> |
| #define  | [INPUT_ONL_AMOUNT_OTH](#ga9f952ec74b265a98a9a60a6f1aba87a5)   0x40 |
|   | B2b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af4c05d872e15a85655bf94ea4b34a0f5">EMV_CT_HOST_STRUCT::amountOthUpd</a>. [More\...](#ga9f952ec74b265a98a9a60a6f1aba87a5)<br/> |

## DetailedDescription {#detailed-description}

Contents of the input in <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CTLS_HOST_STRUCT::Info_Included_Data</a>, <a href="group___f_u_n_c___f_l_o_w.md#ga297b6843994afaa2e7a6f5e0e4a8af3e">EMV_CTLS_ContinueOnline()</a>

Contents of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CT_HOST_TYPE::Info_Included_Data</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## INPUT_CTLS_ONL_AMOUNT <a href="#ga545c494c4d249539101ca0360d9e2f64" id="ga545c494c4d249539101ca0360d9e2f64"></a>

<p>#define INPUT_CTLS_ONL_AMOUNT   0x01</p>

B2b1: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ae96de7b8f91cb72f914fe3b226366f04">EMV_CTLS_HOST_STRUCT::amountUpd</a>.

## INPUT_CTLS_ONL_AMOUNT_OTH <a href="#ga2aab8f4b1b1ac6194f519358487ae8aa" id="ga2aab8f4b1b1ac6194f519358487ae8aa"></a>

<p>#define INPUT_CTLS_ONL_AMOUNT_OTH   0x02</p>

B2b2: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a950050a0a50c3a85bf52afa53b989ed8">EMV_CTLS_HOST_STRUCT::amountOthUpd</a>.

## INPUT_CTLS_ONL_ARC_ONLINE_PIN <a href="#ga9e38cce5aae4ed03db650afd810da1e5" id="ga9e38cce5aae4ed03db650afd810da1e5"></a>

<p>#define INPUT_CTLS_ONL_ARC_ONLINE_PIN   0x80</p>

B1b8: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a319a55d188b9bc5e6c1698638169f0d0">EMV_CTLS_HOST_STRUCT::AuthResp_OnlinePIN</a>.

## INPUT_CTLS_ONL_ARC_POSITIVE <a href="#ga4aa0c97e6abe42a39cbd43f019871b8a" id="ga4aa0c97e6abe42a39cbd43f019871b8a"></a>

<p>#define INPUT_CTLS_ONL_ARC_POSITIVE   0x20</p>

B1b6: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a7732f5779810f1f81941cda574764137">EMV_CTLS_HOST_STRUCT::AuthResp_Positive</a>.

## INPUT_CTLS_ONL_ARC_SWITCH_IF <a href="#gae8d7697068dbe85852956d2eb6941fff" id="gae8d7697068dbe85852956d2eb6941fff"></a>

<p>#define INPUT_CTLS_ONL_ARC_SWITCH_IF   0x40</p>

B1b7: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a37473dcadabfbafff56a7180afba0e30">EMV_CTLS_HOST_STRUCT::AuthResp_SwitchInterface</a>.

## INPUT_CTLS_ONL_AUTH_RESP <a href="#ga10f89377c496fb3830e6dd82570b9651" id="ga10f89377c496fb3830e6dd82570b9651"></a>

<p>#define INPUT_CTLS_ONL_AUTH_RESP   0x02</p>

B1b2: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a50f253cd97f2612f2d5abe02959e130f">EMV_CTLS_HOST_STRUCT::AuthResp</a>.

## INPUT_CTLS_ONL_AUTHDATA <a href="#ga501bd7c13e8d11791223dace897bf90e" id="ga501bd7c13e8d11791223dace897bf90e"></a>

<p>#define INPUT_CTLS_ONL_AUTHDATA   0x10</p>

B1b5: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#a3e5fe321afd3d5b2db35d2d2bcdc800e">EMV_CTLS_HOST_STRUCT::AuthData</a>.

## INPUT_CTLS_ONL_ONLINE_RESP <a href="#gace037a1e731007caba3d599e9e89057f" id="gace037a1e731007caba3d599e9e89057f"></a>

<p>#define INPUT_CTLS_ONL_ONLINE_RESP   0x01</p>

B1b1: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#aa5f1fe97be1fb8a9c85bf53e241c4b7e">EMV_CTLS_HOST_STRUCT::OnlineResult</a>.

## INPUT_CTLS_ONL_SCRIPT <a href="#ga01f2fed1a6e3e782e71ba9edee57ab6c" id="ga01f2fed1a6e3e782e71ba9edee57ab6c"></a>

<p>#define INPUT_CTLS_ONL_SCRIPT   0x08</p>

B1b4: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#afd420a16596fd515042c455eaf81dbc5">EMV_CTLS_HOST_STRUCT::ScriptData</a>.

## INPUT_CTLS_ONL_TXN_OPTIONS <a href="#ga04fb74d89a08666b258bf6d15bf53986" id="ga04fb74d89a08666b258bf6d15bf53986"></a>

<p>#define INPUT_CTLS_ONL_TXN_OPTIONS   0x04</p>

B1b3: <a href="group___d_e_f___f_l_o_w___i_n_p_u_t.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CTLS_HOST_STRUCT::TxnOptions</a>.

## INPUT_ONL_AMOUNT_GAC2 <a href="#ga699a36bb2041de7bcb0dff77c942fe3e" id="ga699a36bb2041de7bcb0dff77c942fe3e"></a>

<p>#define INPUT_ONL_AMOUNT_GAC2   0x04</p>

B2b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a30e81fd1e6591284b3122a39e3d5a9e2">EMV_CT_HOST_STRUCT::PreAuth_Amount</a>.

## INPUT_ONL_AMOUNT_OTH <a href="#ga9f952ec74b265a98a9a60a6f1aba87a5" id="ga9f952ec74b265a98a9a60a6f1aba87a5"></a>

<p>#define INPUT_ONL_AMOUNT_OTH   0x40</p>

B2b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#af4c05d872e15a85655bf94ea4b34a0f5">EMV_CT_HOST_STRUCT::amountOthUpd</a>.

## INPUT_ONL_ARC_POSITIVE <a href="#ga7d5d36a7e6195b14e0d98977f7c18623" id="ga7d5d36a7e6195b14e0d98977f7c18623"></a>

<p>#define INPUT_ONL_ARC_POSITIVE   0x10</p>

B2b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a159e8303937fe013eee7c00aebc17483">EMV_CT_HOST_STRUCT::AuthResp_Positive</a>.

## INPUT_ONL_ARC_REFERRAL <a href="#ga46b0d7ef9f3b37f2fc62cec19c613a68" id="ga46b0d7ef9f3b37f2fc62cec19c613a68"></a>

<p>#define INPUT_ONL_ARC_REFERRAL   0x80</p>

B1b8: <a href="group___a_d_k___t_r_x___e_x_e_c.md#adf1d52bf324a6262866da8d78e5619f0">EMV_CT_HOST_STRUCT::AuthResp_Referral</a>.

## INPUT_ONL_ARC_WRONGPIN <a href="#ga56090280a382475c499c2cba27dcc4a0" id="ga56090280a382475c499c2cba27dcc4a0"></a>

<p>#define INPUT_ONL_ARC_WRONGPIN   0x01</p>

B2b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a4a45b2dc93e569bfabd0a5ec3188a706">EMV_CT_HOST_STRUCT::AuthResp_Wrong_PIN</a>.

## INPUT_ONL_AUTHCODE <a href="#ga3018bf4e37626be54a1ec843f43e8585" id="ga3018bf4e37626be54a1ec843f43e8585"></a>

<p>#define INPUT_ONL_AUTHCODE   0x20</p>

B1b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a49703db8aea6f6b5cb2b40690d7c7f1a">EMV_CT_HOST_STRUCT::AuthorizationCode</a>.

## INPUT_ONL_AUTHDATA <a href="#gace44b7a66114473828ecd9013427ea3b" id="gace44b7a66114473828ecd9013427ea3b"></a>

<p>#define INPUT_ONL_AUTHDATA   0x04</p>

B1b3: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9c0d8eae37200d205013e0a17f2d2ff1">EMV_CT_HOST_STRUCT::AuthData</a>.

## INPUT_ONL_ONLINE_AC <a href="#ga752c13179b89b1600dee161658ca8845" id="ga752c13179b89b1600dee161658ca8845"></a>

<p>#define INPUT_ONL_ONLINE_AC   0x02</p>

B1b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a50f253cd97f2612f2d5abe02959e130f">EMV_CT_HOST_STRUCT::AuthResp</a>.

## INPUT_ONL_ONLINE_RESP <a href="#ga98ca729b5fe7aa42496848f5a5dcad76" id="ga98ca729b5fe7aa42496848f5a5dcad76"></a>

<p>#define INPUT_ONL_ONLINE_RESP   0x01</p>

B1b1: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aa5f1fe97be1fb8a9c85bf53e241c4b7e">EMV_CT_HOST_STRUCT::OnlineResult</a>.

## INPUT_ONL_RESULT_REFERRAL <a href="#ga05d966eb9c501a618f015b912e440293" id="ga05d966eb9c501a618f015b912e440293"></a>

<p>#define INPUT_ONL_RESULT_REFERRAL   0x40</p>

B1b7: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a21f9d40183d72a1462d5152cf00f3b23">EMV_CT_HOST_STRUCT::Result_referral</a>.

## INPUT_ONL_SCRIPTCRIT <a href="#ga0b132296227343c954936efa25aef9c3" id="ga0b132296227343c954936efa25aef9c3"></a>

<p>#define INPUT_ONL_SCRIPTCRIT   0x08</p>

B1b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#aebdbfdfe3e9b08ddae10d62d723c25f5">EMV_CT_HOST_STRUCT::ScriptCritData</a>.

## INPUT_ONL_SCRIPTUNCRIT <a href="#ga9de29596c87d45928f095f28ca6b3ef6" id="ga9de29596c87d45928f095f28ca6b3ef6"></a>

<p>#define INPUT_ONL_SCRIPTUNCRIT   0x10</p>

B1b5: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a3ef982ce26d673b8463978645a76962e">EMV_CT_HOST_STRUCT::ScriptUnCritData</a>.

## INPUT_ONL_TXN_OPTIONS <a href="#ga87b94cd4be2d5b1460107ee925485d09" id="ga87b94cd4be2d5b1460107ee925485d09"></a>

<p>#define INPUT_ONL_TXN_OPTIONS   0x02</p>

B2b2: <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CT_HOST_STRUCT::TxnOptions</a>.

## INPUT_ONL_TXN_STEPS <a href="#gae3c61af9c1bf07c0ba0848f2daa55711" id="gae3c61af9c1bf07c0ba0848f2daa55711"></a>

<p>#define INPUT_ONL_TXN_STEPS   0x08</p>

B2b4: <a href="group___a_d_k___t_r_x___e_x_e_c.md#a07d050602c00dc417b16d40db60c6de4">EMV_CT_HOST_STRUCT::TxnSteps</a>.

## INPUT_ONL_WRITE_DS_DATA <a href="#gae77bd582b0f3db081dd65a23271dd796" id="gae77bd582b0f3db081dd65a23271dd796"></a>

<p>#define INPUT_ONL_WRITE_DS_DATA   0x20</p>

B2b6: <a href="group___a_d_k___t_r_x___e_x_e_c.md#afe256808b40eb152d0293d76b904ef8c">EMV_CT_HOST_STRUCT::WriteDataStorageData</a>.
