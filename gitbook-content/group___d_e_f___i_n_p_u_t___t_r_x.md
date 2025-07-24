---
hidden: true
title: "Transaction input: Which data is includedTransaction execution » Input data"
---

[Macros](#define-members)

Contents of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CT_TRANSAC_TYPE::Info_Included_Data</a>. [More\...](#details)

Collaboration diagram for Transaction input: Which data is included:

![](group___d_e_f___i_n_p_u_t___t_r_x.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [INPUT_OFL_TXN_COUNTER](#gace86d326747fe03587db12ceb0f3e188)   0x01 |
|   | B1b1: transaction counter, <a href="group___a_d_k___t_r_x___e_x_e_c.md#abe3243bfe7a5470e7218711c199bddc7">EMV_CT_PAYMENT_STRUCT::TransCount</a>. [More\...](#gace86d326747fe03587db12ceb0f3e188)<br/> |
| #define  | [INPUT_OFL_ADD_TAGS](#gae610bdfcda33c7ecd70b90cfa166affd)   0x02 |
|   | B1b2: [More\...](#gae610bdfcda33c7ecd70b90cfa166affd)<br/> |
| #define  | [INPUT_OFL_CB_AMOUNT](#gacafaeeff52bbad962e082a79b32333b4)   0x04 |
|   | B1b3: cashback amount, <a href="group___a_d_k___t_r_x___e_x_e_c.md#aa3226314fccbb9ce083892654db4c0a4">EMV_CT_PAYMENT_STRUCT::Cashback_Amount</a>. [More\...](#gacafaeeff52bbad962e082a79b32333b4)<br/> |
| #define  | [INPUT_OFL_ACCOUNT_TYPE](#gac14b07cb292c195bbfc63ff267e8659a)   0x08 |
|   | B1b4: account type, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a720e112c31478ed6c1a4ed18cb16db2f">EMV_CT_PAYMENT_STRUCT::uc_AccountType</a>. [More\...](#gac14b07cb292c195bbfc63ff267e8659a)<br/> |
| #define  | [INPUT_OFL_LANGUAGE](#ga66c501cd412aef1787c0151c851720b6)   0x10 |
|   | B1b5: language preselected, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a65d6b236583a3e4c90bef5c7043069a6">EMV_CT_PAYMENT_STRUCT::PreSelected_Language</a>. [More\...](#ga66c501cd412aef1787c0151c851720b6)<br/> |
| #define  | [INPUT_OFL_AMOUNT_CONF](#gac2fa1972e352ab402c72f04050401660)   0x20 |
|   | B1b6: amount confirmation, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0bec90f2919a87c70759a313709d4708">EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation</a>. [More\...](#gac2fa1972e352ab402c72f04050401660)<br/> |
| #define  | [INPUT_OFL_TXN_OPTIONS](#ga09b7a235f230898129dea06903d18416)   0x40 |
|   | B1b7: transaction options, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CT_TRANSAC_STRUCT::TxnOptions</a>. [More\...](#ga09b7a235f230898129dea06903d18416)<br/> |
| #define  | [INPUT_OFL_TXN_STEPS](#ga75ef405b76b3decc6676c8f7c3f6c85d)   0x80 |
|   | B1b8: transaction steps if interrupt needed instead of 1 step processing, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a07d050602c00dc417b16d40db60c6de4">EMV_CT_TRANSAC_STRUCT::TxnSteps</a>. [More\...](#ga75ef405b76b3decc6676c8f7c3f6c85d)<br/> |
| #define  | [INPUT_OFL_AMOUNT](#gaf0ada32e4102eb4facbf159e4b3f0aba)   0x01 |
|   | B2b1: txn amount, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a30d37bb81b40a6e53cb3081ee862ddef">EMV_CT_PAYMENT_STRUCT::Amount</a>. [More\...](#gaf0ada32e4102eb4facbf159e4b3f0aba)<br/> |
| #define  | [INPUT_OFL_AMOUNT_CURRENCY](#ga5125e54ddf8ba905668ae87529bd6626)   0x02 |
|   | B2b2: currency of txn, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CT_PAYMENT_STRUCT::CurrencyTrans</a>. [More\...](#ga5125e54ddf8ba905668ae87529bd6626)<br/> |
| #define  | [INPUT_OFL_CUREXPONENT](#gae9290cb42cf39578bde6152be6c25ef1)   0x04 |
|   | B2b3: currency exponent of txn, <a href="group___a_d_k___t_r_x___e_x_e_c.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CT_PAYMENT_STRUCT::ExpTrans</a>. [More\...](#gae9290cb42cf39578bde6152be6c25ef1)<br/> |
| #define  | [INPUT_OFL_DATE](#gaf81492c0273d2a1132c2490fd44ec955)   0x08 |
|   | B2b4: date of txn, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a775d3e156bcce4f815658cbaca54de4f">EMV_CT_PAYMENT_STRUCT::Date</a>. [More\...](#gaf81492c0273d2a1132c2490fd44ec955)<br/> |
| #define  | [INPUT_OFL_TIME](#ga683eca47594e411453e312c309e15a06)   0x10 |
|   | B2b5: time of txn, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab2e402d904a352a99a517cf77ed2d875">EMV_CT_PAYMENT_STRUCT::Time</a>. [More\...](#ga683eca47594e411453e312c309e15a06)<br/> |
| #define  | [INPUT_OFL_FORCE_ONLINE](#gad89906906f236a4bd8bd1be2c59995f3)   0x20 |
|   | B2b6: force it online (suspicious, EMVCo), <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9379ba99fde04b446f004946e00cb7f">EMV_CT_PAYMENT_STRUCT::Force_Online</a>. [More\...](#gad89906906f236a4bd8bd1be2c59995f3)<br/> |
| #define  | [INPUT_OFL_FORCE_ACCEPT](#gaebe39aebc949f5e277b3cfa6880815ac)   0x40 |
|   | B2b7: force acceptance, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9d831c8180100292e2f5e0f198eb3197">EMV_CT_PAYMENT_STRUCT::Force_Acceptance</a>. [More\...](#gaebe39aebc949f5e277b3cfa6880815ac)<br/> |
| #define  | [INPUT_OFL_ONLINE_SWITCH](#ga8d080f2581cfb3b702acc8f7ee222c50)   0x80 |
|   | B2b8: force it online (domestic need), <a href="group___a_d_k___t_r_x___e_x_e_c.md#a21582d26b3baf84a6bf36e1597415195">EMV_CT_PAYMENT_STRUCT::Online_Switch</a>. [More\...](#ga8d080f2581cfb3b702acc8f7ee222c50)<br/> |

## DetailedDescription {#detailed-description}

Contents of <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae71321d54e0269c970e1551e1524d8dc">EMV_CT_TRANSAC_TYPE::Info_Included_Data</a>.

## MacroDefinition Documentation {#macro-definition-documentation}

## INPUT_OFL_ACCOUNT_TYPE <a href="#gac14b07cb292c195bbfc63ff267e8659a" id="gac14b07cb292c195bbfc63ff267e8659a"></a>

<p>#define INPUT_OFL_ACCOUNT_TYPE   0x08</p>

B1b4: account type, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a720e112c31478ed6c1a4ed18cb16db2f">EMV_CT_PAYMENT_STRUCT::uc_AccountType</a>.

## INPUT_OFL_ADD_TAGS <a href="#gae610bdfcda33c7ecd70b90cfa166affd" id="gae610bdfcda33c7ecd70b90cfa166affd"></a>

<p>#define INPUT_OFL_ADD_TAGS   0x02</p>

B1b2:

**<a href="deprecated.md#_deprecated000145">Deprecated:</a>** Don\'t use <a href="group___a_d_k___t_r_x___e_x_e_c.md#abd31d434ee96e0662b86d4ef82017e33">EMV_CT_PAYMENT_STRUCT::Additional_Result_Tags</a> anymore. Use <a href="group___f_u_n_c___f_l_o_w.md#gab005fdec183a0c8fef18ae677cce6dc5">EMV_CT_fetchTxnTags()</a> instead.

## INPUT_OFL_AMOUNT <a href="#gaf0ada32e4102eb4facbf159e4b3f0aba" id="gaf0ada32e4102eb4facbf159e4b3f0aba"></a>

<p>#define INPUT_OFL_AMOUNT   0x01</p>

B2b1: txn amount, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a30d37bb81b40a6e53cb3081ee862ddef">EMV_CT_PAYMENT_STRUCT::Amount</a>.

## INPUT_OFL_AMOUNT_CONF <a href="#gac2fa1972e352ab402c72f04050401660" id="gac2fa1972e352ab402c72f04050401660"></a>

<p>#define INPUT_OFL_AMOUNT_CONF   0x20</p>

B1b6: amount confirmation, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a0bec90f2919a87c70759a313709d4708">EMV_CT_PAYMENT_STRUCT::uc_AmountConfirmation</a>.

## INPUT_OFL_AMOUNT_CURRENCY <a href="#ga5125e54ddf8ba905668ae87529bd6626" id="ga5125e54ddf8ba905668ae87529bd6626"></a>

<p>#define INPUT_OFL_AMOUNT_CURRENCY   0x02</p>

B2b2: currency of txn, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ae1f191741d0c4b9351e7f52d69b20d73">EMV_CT_PAYMENT_STRUCT::CurrencyTrans</a>.

## INPUT_OFL_CB_AMOUNT <a href="#gacafaeeff52bbad962e082a79b32333b4" id="gacafaeeff52bbad962e082a79b32333b4"></a>

<p>#define INPUT_OFL_CB_AMOUNT   0x04</p>

B1b3: cashback amount, <a href="group___a_d_k___t_r_x___e_x_e_c.md#aa3226314fccbb9ce083892654db4c0a4">EMV_CT_PAYMENT_STRUCT::Cashback_Amount</a>.

## INPUT_OFL_CUREXPONENT <a href="#gae9290cb42cf39578bde6152be6c25ef1" id="gae9290cb42cf39578bde6152be6c25ef1"></a>

<p>#define INPUT_OFL_CUREXPONENT   0x04</p>

B2b3: currency exponent of txn, <a href="group___a_d_k___t_r_x___e_x_e_c.md#aaa3e0774e163e148c88b989c3ada3b76">EMV_CT_PAYMENT_STRUCT::ExpTrans</a>.

## INPUT_OFL_DATE <a href="#gaf81492c0273d2a1132c2490fd44ec955" id="gaf81492c0273d2a1132c2490fd44ec955"></a>

<p>#define INPUT_OFL_DATE   0x08</p>

B2b4: date of txn, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a775d3e156bcce4f815658cbaca54de4f">EMV_CT_PAYMENT_STRUCT::Date</a>.

## INPUT_OFL_FORCE_ACCEPT <a href="#gaebe39aebc949f5e277b3cfa6880815ac" id="gaebe39aebc949f5e277b3cfa6880815ac"></a>

<p>#define INPUT_OFL_FORCE_ACCEPT   0x40</p>

B2b7: force acceptance, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a9d831c8180100292e2f5e0f198eb3197">EMV_CT_PAYMENT_STRUCT::Force_Acceptance</a>.

## INPUT_OFL_FORCE_ONLINE <a href="#gad89906906f236a4bd8bd1be2c59995f3" id="gad89906906f236a4bd8bd1be2c59995f3"></a>

<p>#define INPUT_OFL_FORCE_ONLINE   0x20</p>

B2b6: force it online (suspicious, EMVCo), <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9379ba99fde04b446f004946e00cb7f">EMV_CT_PAYMENT_STRUCT::Force_Online</a>.

## INPUT_OFL_LANGUAGE <a href="#ga66c501cd412aef1787c0151c851720b6" id="ga66c501cd412aef1787c0151c851720b6"></a>

<p>#define INPUT_OFL_LANGUAGE   0x10</p>

B1b5: language preselected, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a65d6b236583a3e4c90bef5c7043069a6">EMV_CT_PAYMENT_STRUCT::PreSelected_Language</a>.

## INPUT_OFL_ONLINE_SWITCH <a href="#ga8d080f2581cfb3b702acc8f7ee222c50" id="ga8d080f2581cfb3b702acc8f7ee222c50"></a>

<p>#define INPUT_OFL_ONLINE_SWITCH   0x80</p>

B2b8: force it online (domestic need), <a href="group___a_d_k___t_r_x___e_x_e_c.md#a21582d26b3baf84a6bf36e1597415195">EMV_CT_PAYMENT_STRUCT::Online_Switch</a>.

## INPUT_OFL_TIME <a href="#ga683eca47594e411453e312c309e15a06" id="ga683eca47594e411453e312c309e15a06"></a>

<p>#define INPUT_OFL_TIME   0x10</p>

B2b5: time of txn, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ab2e402d904a352a99a517cf77ed2d875">EMV_CT_PAYMENT_STRUCT::Time</a>.

## INPUT_OFL_TXN_COUNTER <a href="#gace86d326747fe03587db12ceb0f3e188" id="gace86d326747fe03587db12ceb0f3e188"></a>

<p>#define INPUT_OFL_TXN_COUNTER   0x01</p>

B1b1: transaction counter, <a href="group___a_d_k___t_r_x___e_x_e_c.md#abe3243bfe7a5470e7218711c199bddc7">EMV_CT_PAYMENT_STRUCT::TransCount</a>.

## INPUT_OFL_TXN_OPTIONS <a href="#ga09b7a235f230898129dea06903d18416" id="ga09b7a235f230898129dea06903d18416"></a>

<p>#define INPUT_OFL_TXN_OPTIONS   0x40</p>

B1b7: transaction options, <a href="group___a_d_k___t_r_x___e_x_e_c.md#ac9ddf19e79cf70f6331fdb822fdf1d4f">EMV_CT_TRANSAC_STRUCT::TxnOptions</a>.

## INPUT_OFL_TXN_STEPS <a href="#ga75ef405b76b3decc6676c8f7c3f6c85d" id="ga75ef405b76b3decc6676c8f7c3f6c85d"></a>

<p>#define INPUT_OFL_TXN_STEPS   0x80</p>

B1b8: transaction steps if interrupt needed instead of 1 step processing, <a href="group___a_d_k___t_r_x___e_x_e_c.md#a07d050602c00dc417b16d40db60c6de4">EMV_CT_TRANSAC_STRUCT::TxnSteps</a>.
