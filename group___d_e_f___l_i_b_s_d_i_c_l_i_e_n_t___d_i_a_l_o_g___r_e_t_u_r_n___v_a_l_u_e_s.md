---
title: Dialog invocation return values
summary: Return values from display(), secureInput(), htmlDialog(), menu(), requestCard() and captureSignature() are defined as integer values according to html/gui_error.h to be able to return a positive value for the selected menu item. 

---

# Dialog invocation return values

Return values from [display()](classlibsdi_1_1_dialog.md#function-display), [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput), [htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog), [menu()](classlibsdi_1_1_dialog.md#function-menu), [requestCard()](classlibsdi_1_1_dialog.md#function-requestcard) and [captureSignature()](classlibsdi_1_1_dialog.md#function-capturesignature) are defined as integer values according to [html/gui_error.h]() to be able to return a positive value for the selected menu item. 

## Attributes

|                | Name           |
| -------------- | -------------- |
| const static int | **[DIALOG_SUCCESS](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-success)** <br>Dialog invocation return value on success  |
| const static int | **[DIALOG_CANCEL_PRESSED](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-cancel-pressed)** <br>Dialog invocation return value in case of cancel key pressed  |
| const static int | **[DIALOG_TIMEOUT](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-timeout)** <br>Dialog invocation return value in case dialog timeout  |
| const static int | **[DIALOG_SYS_ABORT](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-sys-abort)** <br>Dialog invocation return value in case of abort by _SDI Sys Abort_ (20-02), e.g. [abort()](classlibsdi_1_1_dialog.md#function-abort) |
| const static int | **[DIALOG_CLIENT_ERROR](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-client-error)** <br>Dialog invocation return value in case of client side error  |
| const static int | **[DIALOG_SDI_SW12](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-sdi-sw12)** <br>Dialog invocation return value in case of other SDI status word  |
| const static int | **[DIALOG_NO_ASYNC_DIALOG](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-no-async-dialog)** <br>[getAsyncResult()](classlibsdi_1_1_dialog.md#function-getasyncresult) return value when there is no asynchronous dialog running  |
| const static int | **[DIALOG_IN_PROGRESS](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-in-progress)** <br>[getAsyncResult()](classlibsdi_1_1_dialog.md#function-getasyncresult) return value when the asynchronous dialog is in progress  |



## Attributes Documentation

### variable DIALOG_SUCCESS

```
static const static int DIALOG_SUCCESS = 0;
```

Dialog invocation return value on success 

Equal to _UI_ERR_OK_, mapped from SDI: [SDI_SW12_SUCCESS](namespacelibsdi.md#enumvalue-sdi-sw12-success)


### variable DIALOG_CANCEL_PRESSED

```
static const static int DIALOG_CANCEL_PRESSED = -1;
```

Dialog invocation return value in case of cancel key pressed 

Equal to _UI_ERR_ABORT_, mapped from SDI: [SDI_SW12_CANCELED_BY_USER](namespacelibsdi.md#enumvalue-sdi-sw12-canceled-by-user)


### variable DIALOG_TIMEOUT

```
static const static int DIALOG_TIMEOUT = -3;
```

Dialog invocation return value in case dialog timeout 

Equal to _UI_ERR_TIMEOUT_, mapped from SDI: [SDI_SW12_EXECUTION_TIMEOUT](namespacelibsdi.md#enumvalue-sdi-sw12-execution-timeout)


### variable DIALOG_SYS_ABORT

```
static const static int DIALOG_SYS_ABORT = -8;
```

Dialog invocation return value in case of abort by _SDI Sys Abort_ (20-02), e.g. [abort()](classlibsdi_1_1_dialog.md#function-abort)

Equal to _UI_ERR_CANCELLED_, mapped from SDI: [SDI_SW12_EXECUTION_ABORTED](namespacelibsdi.md#enumvalue-sdi-sw12-execution-aborted)


### variable DIALOG_CLIENT_ERROR

```
static const static int DIALOG_CLIENT_ERROR = -14;
```

Dialog invocation return value in case of client side error 

Equal to _UI_ERR_CONNECTION_LOST_, use [getClientError()](classlibsdi_1_1_sdi_base.md#function-getclienterror) for closer analysis. 


### variable DIALOG_SDI_SW12

```
static const static int DIALOG_SDI_SW12 = -15;
```

Dialog invocation return value in case of other SDI status word 

Equal to _UI_ERR_PROTOCOL_, use [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) for closer analysis. 


### variable DIALOG_NO_ASYNC_DIALOG

```
static const static int DIALOG_NO_ASYNC_DIALOG = 1;
```

[getAsyncResult()](classlibsdi_1_1_dialog.md#function-getasyncresult) return value when there is no asynchronous dialog running 

### variable DIALOG_IN_PROGRESS

```
static const static int DIALOG_IN_PROGRESS = 2;
```

[getAsyncResult()](classlibsdi_1_1_dialog.md#function-getasyncresult) return value when the asynchronous dialog is in progress 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100