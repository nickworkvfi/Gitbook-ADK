---
title: Re-entrance options
summary: Defines for EMV_CT_SELECT_TYPE::TxnSteps resp. EMV_CT_TRANSAC_TYPE::TxnSteps. 

---

# Re-entrance options

**Module:** **[Transaction execution](group___a_d_k___t_r_x___e_x_e_c.md)** **/** **[Input data](group___d_e_f___f_l_o_w___i_n_p_u_t.md)**

Defines for [EMV_CT_SELECT_TYPE::TxnSteps](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnsteps) resp. [EMV_CT_TRANSAC_TYPE::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps).  [More...](#detailed-description)

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[RETURN_CANDIDATE_LIST](group___t_x_n___s_t_e_p_s.md#define-return-candidate-list)** <br>B1b1: return for selecting the candidate on application level.  |
|  | **[RETURN_AFTER_GPO](group___t_x_n___s_t_e_p_s.md#define-return-after-gpo)** <br>B1b2: return after finishing GPO.  |
|  | **[RETURN_AFTER_READ_RECORD](group___t_x_n___s_t_e_p_s.md#define-return-after-read-record)** <br>B1b3: return after finishing ReadRecords.  |
|  | **[RETURN_AFTER_DATA_AUTH](group___t_x_n___s_t_e_p_s.md#define-return-after-data-auth)** <br>B1b4: return after finishing Data Authentication.  |
|  | **[RETURN_FOR_CVM_PROCESS](group___t_x_n___s_t_e_p_s.md#define-return-for-cvm-process)** <br>B1b5: for each selected CV PIN method the control is given to the application to handle it.  |
|  | **[RETURN_FOR_CVM_FINISH](group___t_x_n___s_t_e_p_s.md#define-return-for-cvm-finish)** <br>B1b6: CV finished.  |
|  | **[RETURN_AFTER_RISK_MANGEMENT](group___t_x_n___s_t_e_p_s.md#define-return-after-risk-mangement)** <br>B1b8: return after finishing the terminal risk management (before 1st GAC)  |
|  | **[RETURN_CAND_LIST_PREPROC](group___t_x_n___s_t_e_p_s.md#define-return-cand-list-preproc)** <br>B2b1: return once the candidate list is known to manipulate the list.  |
|  | **[RETURN_CAND_LIST_SKIP](group___t_x_n___s_t_e_p_s.md#define-return-cand-list-skip)** <br>B2b2: Candidate list building by calling application.  |
|  | **[MS_RETURN_CALLBACKS](group___t_x_n___s_t_e_p_s.md#define-ms-return-callbacks)** <br>B3b8: If Set: All callbacks are disabled completely, otherwise they are used as configured in the parameter set.  |
|  | **[MS_ADD_TO_HOTLIST](group___t_x_n___s_t_e_p_s.md#define-ms-add-to-hotlist)** <br>B3b1: If Set: The card of this txn will be added to the hotlist (processed after ReadRecords)  |
|  | **[MS_DECLINE_AAC](group___t_x_n___s_t_e_p_s.md#define-ms-decline-aac)** <br>B3b2: If Set: The transaction will be declined with requesting an AAC.  |
|  | **[MS_ABORT_TXN](group___t_x_n___s_t_e_p_s.md#define-ms-abort-txn)** <br>B3b3: If Set: The transaction will be terminated immediately.  |
|  | **[MS_PIN_BYPASS](group___t_x_n___s_t_e_p_s.md#define-ms-pin-bypass)** <br>B3b4: If Set: Customer or Merchant bypassed PIN entry.  |
|  | **[MS_CUST_CVM_OK](group___t_x_n___s_t_e_p_s.md#define-ms-cust-cvm-ok)** <br>B3b5: If Set: Customer CVM method success.  |
|  | **[MS_PINPAD_NOTPRESENT](group___t_x_n___s_t_e_p_s.md#define-ms-pinpad-notpresent)** <br>B3b6: If Set: external PINPad was not detected for PIN processing.  |
|  | **[MS_PINICC_STOP](group___t_x_n___s_t_e_p_s.md#define-ms-pinicc-stop)** <br>B3b7: If Set: ICC stopped working during PIN processing.  |

## Detailed Description

Defines for [EMV_CT_SELECT_TYPE::TxnSteps](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnsteps) resp. [EMV_CT_TRANSAC_TYPE::TxnSteps](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnsteps). 

At each of the given substeps the EMV transaction is interrupted and can be re-entered accordingly by calling the same function again. 

 This repeats until the end of the transaction, at each re-entry transaction parameters are updated accordingly. 

 Before interrupting the flow the framework fetches the latest up to date transaction parameters. 

 Byte 3 determines the handling of callbacks. 

 Possible returncodes for an interrupted function:

* [EMV_ADK_APP_REQ_CANDIDATE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-candidate)
* [EMV_ADK_APP_REQ_READREC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-readrec)
* [EMV_ADK_APP_REQ_DATAAUTH](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-dataauth)
* [EMV_ADK_APP_REQ_ONL_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-onl-pin)
* [EMV_ADK_APP_REQ_OFL_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-ofl-pin)
* [EMV_ADK_APP_REQ_PLAIN_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-plain-pin)
* [EMV_ADK_APP_REQ_CVM_END](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-cvm-end)
* [EMV_ADK_APP_REQ_RISK_MAN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-risk-man)
* [EMV_ADK_APP_REQ_APPS_PREPROC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-apps-preproc)




## Macros Documentation

### define RETURN_CANDIDATE_LIST

```
#define RETURN_CANDIDATE_LIST 0x01
```

B1b1: return for selecting the candidate on application level. 

### define RETURN_AFTER_GPO

```
#define RETURN_AFTER_GPO 0x02
```

B1b2: return after finishing GPO. 

### define RETURN_AFTER_READ_RECORD

```
#define RETURN_AFTER_READ_RECORD 0x04
```

B1b3: return after finishing ReadRecords. 

### define RETURN_AFTER_DATA_AUTH

```
#define RETURN_AFTER_DATA_AUTH 0x08
```

B1b4: return after finishing Data Authentication. 

### define RETURN_FOR_CVM_PROCESS

```
#define RETURN_FOR_CVM_PROCESS 0x10
```

B1b5: for each selected CV PIN method the control is given to the application to handle it. 

### define RETURN_FOR_CVM_FINISH

```
#define RETURN_FOR_CVM_FINISH 0x20
```

B1b6: CV finished. 

### define RETURN_AFTER_RISK_MANGEMENT

```
#define RETURN_AFTER_RISK_MANGEMENT 0x80
```

B1b8: return after finishing the terminal risk management (before 1st GAC) 

### define RETURN_CAND_LIST_PREPROC

```
#define RETURN_CAND_LIST_PREPROC 0x01
```

B2b1: return once the candidate list is known to manipulate the list. 

### define RETURN_CAND_LIST_SKIP

```
#define RETURN_CAND_LIST_SKIP 0x02
```

B2b2: Candidate list building by calling application. 

### define MS_RETURN_CALLBACKS

```
#define MS_RETURN_CALLBACKS 0x80
```

B3b8: If Set: All callbacks are disabled completely, otherwise they are used as configured in the parameter set. 

### define MS_ADD_TO_HOTLIST

```
#define MS_ADD_TO_HOTLIST 0x01
```

B3b1: If Set: The card of this txn will be added to the hotlist (processed after ReadRecords) 

### define MS_DECLINE_AAC

```
#define MS_DECLINE_AAC 0x02
```

B3b2: If Set: The transaction will be declined with requesting an AAC. 

### define MS_ABORT_TXN

```
#define MS_ABORT_TXN 0x04
```

B3b3: If Set: The transaction will be terminated immediately. 

### define MS_PIN_BYPASS

```
#define MS_PIN_BYPASS 0x08
```

B3b4: If Set: Customer or Merchant bypassed PIN entry. 

### define MS_CUST_CVM_OK

```
#define MS_CUST_CVM_OK 0x10
```

B3b5: If Set: Customer CVM method success. 

### define MS_PINPAD_NOTPRESENT

```
#define MS_PINPAD_NOTPRESENT 0x20
```

B3b6: If Set: external PINPad was not detected for PIN processing. 

### define MS_PINICC_STOP

```
#define MS_PINICC_STOP 0x40
```

B3b7: If Set: ICC stopped working during PIN processing. 



-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100