---
hidden: true
title: Re-entrance optionsTransaction execution » Input data
---

[Macros](#define-members)

Defines for <a href="group___a_d_k___t_r_x___e_x_e_c.md#a07d050602c00dc417b16d40db60c6de4">EMV_CT_SELECT_TYPE::TxnSteps</a> resp. <a href="group___a_d_k___t_r_x___e_x_e_c.md#a07d050602c00dc417b16d40db60c6de4">EMV_CT_TRANSAC_TYPE::TxnSteps</a>. [More\...](#details)

Collaboration diagram for Re-entrance options:

![](group___t_x_n___s_t_e_p_s.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [RETURN_CANDIDATE_LIST](#ga2fcaeb6dbd43fde799d243d0ff1c223e)   0x01 |
|   | B1b1: return for selecting the candidate on application level. [More\...](#ga2fcaeb6dbd43fde799d243d0ff1c223e)<br/> |
| #define  | [RETURN_AFTER_GPO](#ga242a275c33fc187bc155a62f1b117ded)   0x02 |
|   | B1b2: return after finishing GPO. [More\...](#ga242a275c33fc187bc155a62f1b117ded)<br/> |
| #define  | [RETURN_AFTER_READ_RECORD](#ga034cedd9b2f9196288f02f76c5fe38ae)   0x04 |
|   | B1b3: return after finishing ReadRecords. [More\...](#ga034cedd9b2f9196288f02f76c5fe38ae)<br/> |
| #define  | [RETURN_AFTER_DATA_AUTH](#ga7b5030355cb76586dc00a45adc88a42e)   0x08 |
|   | B1b4: return after finishing Data Authentication. [More\...](#ga7b5030355cb76586dc00a45adc88a42e)<br/> |
| #define  | [RETURN_FOR_CVM_PROCESS](#gab1f1530a8f022054521575d32f1cce11)   0x10 |
|   | B1b5: for each selected CV PIN method the control is given to the application to handle it. [More\...](#gab1f1530a8f022054521575d32f1cce11)<br/> |
| #define  | [RETURN_FOR_CVM_FINISH](#gaa698e670b797ef1b9ea264e79e9f4424)   0x20 |
|   | B1b6: CV finished. [More\...](#gaa698e670b797ef1b9ea264e79e9f4424)<br/> |
| #define  | [RETURN_AFTER_RISK_MANGEMENT](#gae4a2d66cd15dbf9caddc6b8f84519a75)   0x80 |
|   | B1b8: return after finishing the terminal risk management (before 1st GAC) [More\...](#gae4a2d66cd15dbf9caddc6b8f84519a75)<br/> |
| #define  | [RETURN_CAND_LIST_PREPROC](#ga8936aac92ebd19fa3666653d34d6216f)   0x01 |
|   | B2b1: return once the candidate list is known to manipulate the list. [More\...](#ga8936aac92ebd19fa3666653d34d6216f)<br/> |
| #define  | [RETURN_CAND_LIST_SKIP](#ga35175331617a57b7eac76191bff8cac1)   0x02 |
|   | B2b2: Candidate list building by calling application. [More\...](#ga35175331617a57b7eac76191bff8cac1)<br/> |
| #define  | [MS_RETURN_CALLBACKS](#gaddc20bcb42b1a9a5ec97e7514f2d4504)   0x80 |
|   | B3b8: If Set: All callbacks are disabled completely, otherwise they are used as configured in the parameter set. [More\...](#gaddc20bcb42b1a9a5ec97e7514f2d4504)<br/> |
| #define  | [MS_ADD_TO_HOTLIST](#ga22a9d0a36089697f9bae206011b8c628)   0x01 |
|   | B3b1: If Set: The card of this txn will be added to the hotlist (processed after ReadRecords) [More\...](#ga22a9d0a36089697f9bae206011b8c628)<br/> |
| #define  | [MS_DECLINE_AAC](#gae5e90ef0b75bc669777a3720159fe7cd)   0x02 |
|   | B3b2: If Set: The transaction will be declined with requesting an AAC. [More\...](#gae5e90ef0b75bc669777a3720159fe7cd)<br/> |
| #define  | [MS_ABORT_TXN](#ga05ed3897d8e47b0d0b319b76a6e023a8)   0x04 |
|   | B3b3: If Set: The transaction will be terminated immediately. [More\...](#ga05ed3897d8e47b0d0b319b76a6e023a8)<br/> |
| #define  | [MS_PIN_BYPASS](#ga50caba2cc0982774a282c2680078e664)   0x08 |
|   | B3b4: If Set: Customer or Merchant bypassed PIN entry. [More\...](#ga50caba2cc0982774a282c2680078e664)<br/> |
| #define  | [MS_CUST_CVM_OK](#ga3793cdb806c561ffee4255c59adbeaa1)   0x10 |
|   | B3b5: If Set: Customer CVM method success. [More\...](#ga3793cdb806c561ffee4255c59adbeaa1)<br/> |
| #define  | [MS_PINPAD_NOTPRESENT](#ga07b574bd58625df1325514965fc34d86)   0x20 |
|   | B3b6: If Set: external PINPad was not detected for PIN processing. [More\...](#ga07b574bd58625df1325514965fc34d86)<br/> |
| #define  | [MS_PINICC_STOP](#gac763ebcce456feede041f410bc648425)   0x40 |
|   | B3b7: If Set: ICC stopped working during PIN processing. [More\...](#gac763ebcce456feede041f410bc648425)<br/> |

## DetailedDescription {#detailed-description}

Defines for <a href="group___a_d_k___t_r_x___e_x_e_c.md#a07d050602c00dc417b16d40db60c6de4">EMV_CT_SELECT_TYPE::TxnSteps</a> resp. <a href="group___a_d_k___t_r_x___e_x_e_c.md#a07d050602c00dc417b16d40db60c6de4">EMV_CT_TRANSAC_TYPE::TxnSteps</a>.

At each of the given substeps the EMV transaction is interrupted and can be re-entered accordingly by calling the same function again.
This repeats until the end of the transaction, at each re-entry transaction parameters are updated accordingly.
Before interrupting the flow the framework fetches the latest up to date transaction parameters.
Byte 3 determines the handling of callbacks.
Possible returncodes for an interrupted function:

- <a href="group___a_d_k___r_e_t___c_o_d_e.md#gaed9d54e360dbfb4a72c615596c8a87fc">EMV_ADK_APP_REQ_CANDIDATE</a>
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga7e8709216fe47553fc0c129f71846579">EMV_ADK_APP_REQ_READREC</a>
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga3ebf5cde005e4770514ac5b6c4a93cf0">EMV_ADK_APP_REQ_DATAAUTH</a>
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga50c0c0b8fa6d7b1356c1604ad4f04e2e">EMV_ADK_APP_REQ_ONL_PIN</a>
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga9f24ffaff279cf995620ec108e5f43ae">EMV_ADK_APP_REQ_OFL_PIN</a>
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#gae60344ca125866bbf74c921df04c6a15">EMV_ADK_APP_REQ_PLAIN_PIN</a>
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#gabdfc095e6577d12f82285f938328b678">EMV_ADK_APP_REQ_CVM_END</a>
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#gaeec298e8f5ee75843d4b029f06334038">EMV_ADK_APP_REQ_RISK_MAN</a>
- <a href="group___a_d_k___r_e_t___c_o_d_e.md#ga6f0928c2fe4216f6c7b8d95a295ea27a">EMV_ADK_APP_REQ_APPS_PREPROC</a>

## MacroDefinition Documentation {#macro-definition-documentation}

## MS_ABORT_TXN <a href="#ga05ed3897d8e47b0d0b319b76a6e023a8" id="ga05ed3897d8e47b0d0b319b76a6e023a8"></a>

<p>#define MS_ABORT_TXN   0x04</p>

B3b3: If Set: The transaction will be terminated immediately.

## MS_ADD_TO_HOTLIST <a href="#ga22a9d0a36089697f9bae206011b8c628" id="ga22a9d0a36089697f9bae206011b8c628"></a>

<p>#define MS_ADD_TO_HOTLIST   0x01</p>

B3b1: If Set: The card of this txn will be added to the hotlist (processed after ReadRecords)

## MS_CUST_CVM_OK <a href="#ga3793cdb806c561ffee4255c59adbeaa1" id="ga3793cdb806c561ffee4255c59adbeaa1"></a>

<p>#define MS_CUST_CVM_OK   0x10</p>

B3b5: If Set: Customer CVM method success.

## MS_DECLINE_AAC <a href="#gae5e90ef0b75bc669777a3720159fe7cd" id="gae5e90ef0b75bc669777a3720159fe7cd"></a>

<p>#define MS_DECLINE_AAC   0x02</p>

B3b2: If Set: The transaction will be declined with requesting an AAC.

## MS_PIN_BYPASS <a href="#ga50caba2cc0982774a282c2680078e664" id="ga50caba2cc0982774a282c2680078e664"></a>

<p>#define MS_PIN_BYPASS   0x08</p>

B3b4: If Set: Customer or Merchant bypassed PIN entry.

## MS_PINICC_STOP <a href="#gac763ebcce456feede041f410bc648425" id="gac763ebcce456feede041f410bc648425"></a>

<p>#define MS_PINICC_STOP   0x40</p>

B3b7: If Set: ICC stopped working during PIN processing.

## MS_PINPAD_NOTPRESENT <a href="#ga07b574bd58625df1325514965fc34d86" id="ga07b574bd58625df1325514965fc34d86"></a>

<p>#define MS_PINPAD_NOTPRESENT   0x20</p>

B3b6: If Set: external PINPad was not detected for PIN processing.

## MS_RETURN_CALLBACKS <a href="#gaddc20bcb42b1a9a5ec97e7514f2d4504" id="gaddc20bcb42b1a9a5ec97e7514f2d4504"></a>

<p>#define MS_RETURN_CALLBACKS   0x80</p>

B3b8: If Set: All callbacks are disabled completely, otherwise they are used as configured in the parameter set.

## RETURN_AFTER_DATA_AUTH <a href="#ga7b5030355cb76586dc00a45adc88a42e" id="ga7b5030355cb76586dc00a45adc88a42e"></a>

<p>#define RETURN_AFTER_DATA_AUTH   0x08</p>

B1b4: return after finishing Data Authentication.

## RETURN_AFTER_GPO <a href="#ga242a275c33fc187bc155a62f1b117ded" id="ga242a275c33fc187bc155a62f1b117ded"></a>

<p>#define RETURN_AFTER_GPO   0x02</p>

B1b2: return after finishing GPO.

## RETURN_AFTER_READ_RECORD <a href="#ga034cedd9b2f9196288f02f76c5fe38ae" id="ga034cedd9b2f9196288f02f76c5fe38ae"></a>

<p>#define RETURN_AFTER_READ_RECORD   0x04</p>

B1b3: return after finishing ReadRecords.

## RETURN_AFTER_RISK_MANGEMENT <a href="#gae4a2d66cd15dbf9caddc6b8f84519a75" id="gae4a2d66cd15dbf9caddc6b8f84519a75"></a>

<p>#define RETURN_AFTER_RISK_MANGEMENT   0x80</p>

B1b8: return after finishing the terminal risk management (before 1st GAC)

## RETURN_CAND_LIST_PREPROC <a href="#ga8936aac92ebd19fa3666653d34d6216f" id="ga8936aac92ebd19fa3666653d34d6216f"></a>

<p>#define RETURN_CAND_LIST_PREPROC   0x01</p>

B2b1: return once the candidate list is known to manipulate the list.

## RETURN_CAND_LIST_SKIP <a href="#ga35175331617a57b7eac76191bff8cac1" id="ga35175331617a57b7eac76191bff8cac1"></a>

<p>#define RETURN_CAND_LIST_SKIP   0x02</p>

B2b2: Candidate list building by calling application.

## RETURN_CANDIDATE_LIST <a href="#ga2fcaeb6dbd43fde799d243d0ff1c223e" id="ga2fcaeb6dbd43fde799d243d0ff1c223e"></a>

<p>#define RETURN_CANDIDATE_LIST   0x01</p>

B1b1: return for selecting the candidate on application level.

## RETURN_FOR_CVM_FINISH <a href="#gaa698e670b797ef1b9ea264e79e9f4424" id="gaa698e670b797ef1b9ea264e79e9f4424"></a>

<p>#define RETURN_FOR_CVM_FINISH   0x20</p>

B1b6: CV finished.

## RETURN_FOR_CVM_PROCESS <a href="#gab1f1530a8f022054521575d32f1cce11" id="gab1f1530a8f022054521575d32f1cce11"></a>

<p>#define RETURN_FOR_CVM_PROCESS   0x10</p>

B1b5: for each selected CV PIN method the control is given to the application to handle it.
