---
title: libsdi::Dialog

---

# libsdi::Dialog



 [More...](#detailed-description)


`#include <sdi_if.h>`

Inherits from [SdiCmd](classlibsdi_1_1_sdi_cmd.md), [SdiBase](classlibsdi_1_1_sdi_base.md)

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[REQUEST_CARD_MODE](classlibsdi_1_1_dialog.md#enum-request-card-mode)** { REQUEST_CARD_STANDARD = 0, REQUEST_CARD_FALLBACK = 1, REQUEST_CARD_RETRY = 2} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[clearScreen](classlibsdi_1_1_dialog.md#function-clearscreen)**(bool epp =true)<br>Clear display (24 03)  |
| int | **[display](classlibsdi_1_1_dialog.md#function-display)**(const std::string & text, bool epp =true)<br>Call _Handle Display_ (24 03)  |
| int | **[secureInput](classlibsdi_1_1_dialog.md#function-secureinput)**(bool epp =true)<br>Start SDI command _Handle Secure Input_ (24 04)  |
| int | **[menu](classlibsdi_1_1_dialog.md#function-menu)**(bool epp =true)<br>Start SDI command _Handle Menu_ (24 05)  |
| int | **[requestCard](classlibsdi_1_1_dialog.md#function-requestcard)**(unsigned char technology, enum [REQUEST_CARD_MODE](classlibsdi_1_1_dialog.md#enum-request-card-mode) mode =[REQUEST_CARD_STANDARD](classlibsdi_1_1_dialog.md#enumvalue-request-card-standard), bool epp =true)<br>Start SDI command _Handle Card Request Display_ (24 06)  |
| bool | **[idleScreen](classlibsdi_1_1_dialog.md#function-idlescreen)**(bool epp =true)<br>Send SDI command _Display Idle Screen_ (24 07)  |
| int | **[captureSignature](classlibsdi_1_1_dialog.md#function-capturesignature)**(std::vector< unsigned char > & signature, std::string & format, bool epp =true)<br>Start SDI command _Handle Signature Capture_ (24 08)  |
| int | **[htmlDialog](classlibsdi_1_1_dialog.md#function-htmldialog)**(const std::string & fname, bool epp =true)<br>Call SDI command _Handle HTML Dialog_ (24 0A)  |
| int | **[getAsyncResult](classlibsdi_1_1_dialog.md#function-getasyncresult)**(bool epp =true)<br>Get result of asynchronous dialog invocation (24-0B)  |
| void | **[setTemplate](classlibsdi_1_1_dialog.md#function-settemplate)**(unsigned char id)<br>Set HTML template identifier (DFA010)  |
| void | **[setInputTemplate](classlibsdi_1_1_dialog.md#function-setinputtemplate)**(unsigned char id)<br>Set input template identifier (DFA007)  |
| void | **[setLanguage](classlibsdi_1_1_dialog.md#function-setlanguage)**(unsigned char language)<br>Set language (DFA008)  |
| void | **[addData](classlibsdi_1_1_dialog.md#function-adddata)**(const std::string & name, const std::string & value)<br>Add display data name-value pair (FFA011, DFA012, DFA013)  |
| void | **[setTimeout](classlibsdi_1_1_dialog.md#function-settimeout)**(int seconds)<br>Set dialog timeout (DFA005)  |
| void | **[setOptions](classlibsdi_1_1_dialog.md#function-setoptions)**(unsigned options)<br>Set dialog options (DFA13D)  |
| void | **[setEnterKeyLabel](classlibsdi_1_1_dialog.md#function-setenterkeylabel)**(const std::string & label)<br>Set label for the _Enter_ soft key or the key helper in the dialog control bar (DFA13E)  |
| void | **[setClearKeyLabel](classlibsdi_1_1_dialog.md#function-setclearkeylabel)**(const std::string & label)<br>Set label for the _Clear_ soft key or the key helper in the dialog control bar (DFA13F)  |
| void | **[setCancelKeyLabel](classlibsdi_1_1_dialog.md#function-setcancelkeylabel)**(const std::string & label)<br>Set label for the _Cancel_ soft key or the key helper in the dialog control bar (DFA140)  |
| void | **[setUpKeyLabel](classlibsdi_1_1_dialog.md#function-setupkeylabel)**(const std::string & label)<br>Set label for the _up_ soft key or the key helper in the dialog control bar (DFA141)  |
| void | **[setDownKeyLabel](classlibsdi_1_1_dialog.md#function-setdownkeylabel)**(const std::string & label)<br>Set label for the _down_ soft key or the key helper in the dialog control bar (DFA142)  |
| void | **[setHeader](classlibsdi_1_1_dialog.md#function-setheader)**(const std::string & text)<br>Set Text shown in the header area (DFA143)  |
| void | **[setBeep](classlibsdi_1_1_dialog.md#function-setbeep)**(bool active =true)<br>Enable/Disable a beep played when the dialog appears (DFA00D)  |
| void | **[addAction](classlibsdi_1_1_dialog.md#function-addaction)**(const std::string & key, const std::string & action)<br>Set additional key action (FFA106, DFA13B, DFA13C)  |
| void | **[setMaskingCharacter](classlibsdi_1_1_dialog.md#function-setmaskingcharacter)**(char c)<br>Set masking character (DFA019)  |
| void | **[setAlternativeInputFormat](classlibsdi_1_1_dialog.md#function-setalternativeinputformat)**(const char * f)<br>Configure alternative input format string (DFA01A)  |
| void | **[setAmount](classlibsdi_1_1_dialog.md#function-setamount)**(const unsigned char * amount)<br>Configure amount (9F02)  |
| void | **[setCurrency](classlibsdi_1_1_dialog.md#function-setcurrency)**(const unsigned char * currency)<br>Configure currency (5F2A)  |
| void | **[setTransactionType](classlibsdi_1_1_dialog.md#function-settransactiontype)**(unsigned char txnType)<br>Configure transaction type (9C) for _Handle Card Request Display_ |
| void | **[setMenuText](classlibsdi_1_1_dialog.md#function-setmenutext)**(const std::string & text)<br>Set menu text prompt (DFA00A) for SDI command _Handle Menu_ |
| void | **[addMenuItem](classlibsdi_1_1_dialog.md#function-addmenuitem)**(const std::string & item)<br>add menu item (DFA00B) for SDI command _Handle Menu_ |
| void | **[setPreSelected](classlibsdi_1_1_dialog.md#function-setpreselected)**(unsigned char itemNumber)<br>Set a preselected item other than the first or disable pre-selection (DFA00C)  |
| void | **[setAdminMenu](classlibsdi_1_1_dialog.md#function-setadminmenu)**(unsigned char adminMenu)<br>Enable showing of Info/Menu softkeys/keyhelpers or control admin menu access for idle screen to display (DFA155). This tag is ignored, if administration mode is disabled (default).  |
| unsigned char | **[getSelected](classlibsdi_1_1_dialog.md#function-getselected)**()<br>Get selected item number (DFA00C) from _Handle Menu_ invocation.  |
| std::string | **[get](classlibsdi_1_1_dialog.md#function-get)**(const std::string & name)<br>Get output data of dialog invocation (FFA014, DFA015, DFA016)  |
| std::vector< std::string > | **[getInputFieldNames](classlibsdi_1_1_dialog.md#function-getinputfieldnames)**()<br>List up data input field names found in the dialog invocation result (FFA014, DFA015)  |
| void | **[showLedArea](classlibsdi_1_1_dialog.md#function-showledarea)**(bool show)<br>Show or hide area with status indicators for contactless transactions by SDI command _Activate LEDs_ (24-09)  |
| void | **[abort](classlibsdi_1_1_dialog.md#function-abort)**()<br>Abort a dialog by sending _SDI SysAbort_ (20 02)  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const static int | **[DIALOG_SUCCESS](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-success)** <br>Dialog invocation return value on success  |
| const static int | **[DIALOG_CANCEL_PRESSED](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-cancel-pressed)** <br>Dialog invocation return value in case of cancel key pressed  |
| const static int | **[DIALOG_TIMEOUT](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-timeout)** <br>Dialog invocation return value in case dialog timeout  |
| const static int | **[DIALOG_SYS_ABORT](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-sys-abort)** <br>Dialog invocation return value in case of abort by _SDI Sys Abort_ (20-02), e.g. [abort()]() |
| const static int | **[DIALOG_CLIENT_ERROR](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-client-error)** <br>Dialog invocation return value in case of client side error  |
| const static int | **[DIALOG_SDI_SW12](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-sdi-sw12)** <br>Dialog invocation return value in case of other SDI status word  |
| const static int | **[DIALOG_NO_ASYNC_DIALOG](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-no-async-dialog)** <br>[getAsyncResult()]() return value when there is no asynchronous dialog running  |
| const static int | **[DIALOG_IN_PROGRESS](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-in-progress)** <br>[getAsyncResult()]() return value when the asynchronous dialog is in progress  |
| const static unsigned | **[DLG_DisplayOnly](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-displayonly)**  |
| const static unsigned | **[DLG_CancelKey](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-cancelkey)**  |
| const static unsigned | **[DLG_ClearKey](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-clearkey)**  |
| const static unsigned | **[DLG_EnterKey](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-enterkey)**  |
| const static unsigned | **[DLG_NoLEDs](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-noleds)**  |
| const static unsigned | **[DLG_CtlsLogo](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-ctlslogo)**  |
| const static unsigned | **[DLG_QuestionLogo](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-questionlogo)**  |
| const static unsigned | **[DLG_WarningLogo](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-warninglogo)**  |
| const static unsigned | **[DLG_ErrorLogo](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-errorlogo)**  |
| const static unsigned | **[DLG_SuccessLogo](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-successlogo)**  |
| const static unsigned | **[DLG_WaitLogo](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-waitlogo)**  |
| const static unsigned | **[DLG_Async](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-async)**  |
| const static unsigned | **[DLG_StoreAsyncResult](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-storeasyncresult)**  |
| const static unsigned | **[DLG_HideSoftKeys](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-hidesoftkeys)**  |
| const static unsigned | **[DLG_TextAlignLeft](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-textalignleft)**  |
| const static unsigned | **[DLG_TextAlignRight](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-textalignright)**  |
| const static unsigned | **[DLG_TextAlignTop](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-textaligntop)**  |
| const static unsigned | **[DLG_TextAlignButton](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-textalignbutton)**  |
| const static unsigned | **[DLG_NoHeader](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-noheader)**  |
| const static unsigned | **[DLG_ClearOnReturn](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-clearonreturn)**  |
| const static unsigned | **[DLG_AbortOnCardRemove](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-abortoncardremove)**  |
| const static unsigned | **[DLG_IgnoreExtAbort](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md#variable-dlg-ignoreextabort)**  |
| const static unsigned | **[MENU_NoOpts](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___m_e_n_u___o_p_t_i_o_n_s.md#variable-menu-noopts)**  |
| const static unsigned | **[MENU_NoLEDs](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___m_e_n_u___o_p_t_i_o_n_s.md#variable-menu-noleds)**  |
| const static unsigned | **[MENU_ClearOnReturn](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___m_e_n_u___o_p_t_i_o_n_s.md#variable-menu-clearonreturn)**  |
| const static unsigned | **[MENU_AbortOnCardRemove](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___m_e_n_u___o_p_t_i_o_n_s.md#variable-menu-abortoncardremove)**  |
| const static unsigned | **[MENU_IgnoreExtAbort](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___m_e_n_u___o_p_t_i_o_n_s.md#variable-menu-ignoreextabort)**  |
| const static unsigned | **[MENU_NoHeader](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___m_e_n_u___o_p_t_i_o_n_s.md#variable-menu-noheader)**  |

## Additional inherited members

**Public Functions inherited from [SdiCmd](classlibsdi_1_1_sdi_cmd.md)**

|                | Name           |
| -------------- | -------------- |
| | **[SdiCmd](classlibsdi_1_1_sdi_cmd.md#function-sdicmd)**() |
| virtual | **[~SdiCmd](classlibsdi_1_1_sdi_cmd.md#function-~sdicmd)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[sendReceive](classlibsdi_1_1_sdi_cmd.md#function-sendreceive)**(unsigned char cla, unsigned char ins, unsigned char p1 =0, unsigned char p2 =0, unsigned maxResponseSize =2048)<br>Generic SDI command exchange function combining sending of request, waiting and receiving the response.  |
| int | **[send](classlibsdi_1_1_sdi_cmd.md#function-send)**(unsigned char cla, unsigned char ins, unsigned char p1 =0, unsigned char p2 =0)<br>Like [sendReceive()](classlibsdi_1_1_sdi_cmd.md#function-sendreceive) but without waiting for response.  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receive](classlibsdi_1_1_sdi_cmd.md#function-receive)**(unsigned maxResponseSize =2048)<br>Receive SDI response after request has been send with [send()](classlibsdi_1_1_sdi_cmd.md#function-send) and data availability has been signaled.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, int value, unsigned fixedLength =0)<br>Set integer data object SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, uint32_t value, unsigned fixedLength =0)<br>Set unsigned integer data object SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, const unsigned char * data, unsigned dataLen)<br>Set byte array data object in SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, unsigned char byteValue)<br>Set single byte value in SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, const std::vector< unsigned char > & data)<br>Set byte array data object in SDI command.  |
| void | **[set](classlibsdi_1_1_sdi_cmd.md#function-set)**(const char * path, const std::string & value)<br>Set character data object in SDI command.  |
| void | **[setCommandDestination](classlibsdi_1_1_sdi_cmd.md#function-setcommanddestination)**(bool epp, bool force =false)<br>Set command destination for systems with EPP Unless force the command destination is set only if parameter epp is true.  |
| virtual void | **[clear](classlibsdi_1_1_sdi_cmd.md#function-clear)**()<br>Remove all SDI command command input data.  |
| virtual void | **[clear](classlibsdi_1_1_sdi_cmd.md#function-clear)**(const char * path)<br>Remove single input data stored in [dataIn](classlibsdi_1_1_sdi_cmd.md#variable-datain).  |
| virtual void | **[clearResults](classlibsdi_1_1_sdi_cmd.md#function-clearresults)**()<br>Remove all SDI response data.  |
| void | **[importResults](classlibsdi_1_1_sdi_cmd.md#function-importresults)**(const [SdiCmd](classlibsdi_1_1_sdi_cmd.md) & intermediate)<br>Transfer status word, client error and response data from an intermediate command while keeping command input data.  |
| void | **[importResults](classlibsdi_1_1_sdi_cmd.md#function-importresults)**(const unsigned char * sw12, const unsigned char * tlvData, unsigned tlvSize)<br>Inject result data from a call back.  |
| std::string | **[getString](classlibsdi_1_1_sdi_cmd.md#function-getstring)**(const char * path) |

**Protected Attributes inherited from [SdiCmd](classlibsdi_1_1_sdi_cmd.md)**

|                | Name           |
| -------------- | -------------- |
| void * | **[dataIn](classlibsdi_1_1_sdi_cmd.md#variable-datain)** <br>Command input buffer collecting TLV data items.  |
| void * | **[dataOut](classlibsdi_1_1_sdi_cmd.md#variable-dataout)** <br>Command response TLV data items.  |

**Public Classes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| struct | **[PluginResult](structlibsdi_1_1_sdi_base_1_1_plugin_result.md)**  |

**Public Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| | **[SdiBase](classlibsdi_1_1_sdi_base.md#function-sdibase)**() |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[getSdiSw12](classlibsdi_1_1_sdi_base.md#function-getsdisw12)**() |
| int | **[getAdditionalResultValue](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue)**()<br>Access Additional Result Value if returned in SDI response.  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[getClientError](classlibsdi_1_1_sdi_base.md#function-getclienterror)**()<br>Access client side error codes.  |
| enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) | **[receiveSW12](classlibsdi_1_1_sdi_base.md#function-receivesw12)**()<br>Receive SDI server response with no data.  |
| void | **[clear](classlibsdi_1_1_sdi_base.md#function-clear)**()<br>clear result data obtained from SDI communication  |
| void | **[importResults](classlibsdi_1_1_sdi_base.md#function-importresults)**(const [SdiBase](classlibsdi_1_1_sdi_base.md) & intermediate)<br>set result data obtained from intermediate SDI communication  |

**Protected Functions inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| void | **[setSdiSw12](classlibsdi_1_1_sdi_base.md#function-setsdisw12)**(enum [SDI_SW12](namespacelibsdi.md#enum-sdi-sw12) s) |
| void | **[setClientError](classlibsdi_1_1_sdi_base.md#function-setclienterror)**(int libsdiprotocol_result) |

**Protected Attributes inherited from [SdiBase](classlibsdi_1_1_sdi_base.md)**

|                | Name           |
| -------------- | -------------- |
| unsigned short | **[sw12](classlibsdi_1_1_sdi_base.md#variable-sw12)**  |
| int | **[additionalResultValue](classlibsdi_1_1_sdi_base.md#variable-additionalresultvalue)**  |
| [SDICLIENT_ERROR](namespacelibsdi.md#enum-sdiclient-error) | **[clientErr](classlibsdi_1_1_sdi_base.md#variable-clienterr)**  |


## Detailed Description

```cpp
class libsdi::Dialog;
```


Interface for SDI Display Interface, command class 24. This is basically required for External PIN pad control.

This table lists up which getters and setters are relevant for a given SDI command out of 

* _Handle Display_[display()](classlibsdi_1_1_dialog.md#function-display)
* _Handle Secure Input_[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)
* _Handle Menu_[menu()](classlibsdi_1_1_dialog.md#function-menu)
* _Handle Card Request Display_[requestCard()](classlibsdi_1_1_dialog.md#function-requestcard)
* _Handle Signature Capture_[captureSignature()](classlibsdi_1_1_dialog.md#function-capturesignature)
* _Handle HTML Dialog_[htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog)


| Tag  | Setter/Getter  | Function List   |
|  -------- | -------- | -------- |
| DFA005  | [setTimeout()](classlibsdi_1_1_dialog.md#function-settimeout) | [display()](classlibsdi_1_1_dialog.md#function-display), [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput), [htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog), [captureSignature()](classlibsdi_1_1_dialog.md#function-capturesignature) |
| DFA007  | [setInputTemplate()](classlibsdi_1_1_dialog.md#function-setinputtemplate) | [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput) |
| DFA008  | [setLanguage()](classlibsdi_1_1_dialog.md#function-setlanguage) | [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput), [htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog), [captureSignature()](classlibsdi_1_1_dialog.md#function-capturesignature) |
| DFA00A  | [setMenuText()](classlibsdi_1_1_dialog.md#function-setmenutext) | [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| DFA00B  | [addMenuItem()](classlibsdi_1_1_dialog.md#function-addmenuitem) | [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| DFA00C  | [setPreSelected()](classlibsdi_1_1_dialog.md#function-setpreselected) | [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| DFA00D  | [setBeep()](classlibsdi_1_1_dialog.md#function-setbeep) | [display()](classlibsdi_1_1_dialog.md#function-display), [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput), [htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog), [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| DFA010  | [setTemplate()](classlibsdi_1_1_dialog.md#function-settemplate) | [display()](classlibsdi_1_1_dialog.md#function-display) |
| DFA019  | [setMaskingCharacter()](classlibsdi_1_1_dialog.md#function-setmaskingcharacter) | [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput) |
| DFA01A  | [setAlternativeInputFormat()](classlibsdi_1_1_dialog.md#function-setalternativeinputformat) | [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput) |
| DFA13D  | [setOptions()](classlibsdi_1_1_dialog.md#function-setoptions) | [display()](classlibsdi_1_1_dialog.md#function-display), [menu()](classlibsdi_1_1_dialog.md#function-menu), [htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog) |
| DFA13E  | [setEnterKeyLabel()](classlibsdi_1_1_dialog.md#function-setenterkeylabel) | [display()](classlibsdi_1_1_dialog.md#function-display), [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| DFA13F  | [setClearKeyLabel()](classlibsdi_1_1_dialog.md#function-setclearkeylabel) | [display()](classlibsdi_1_1_dialog.md#function-display) |
| DFA140  | [setCancelKeyLabel()](classlibsdi_1_1_dialog.md#function-setcancelkeylabel) | [display()](classlibsdi_1_1_dialog.md#function-display), [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| DFA141  | [setUpKeyLabel()](classlibsdi_1_1_dialog.md#function-setupkeylabel) | [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| DFA142  | [setDownKeyLabel()](classlibsdi_1_1_dialog.md#function-setdownkeylabel) | [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| DFA143  | [setHeader()](classlibsdi_1_1_dialog.md#function-setheader) | [display()](classlibsdi_1_1_dialog.md#function-display), [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| FFA011  | [addData()](classlibsdi_1_1_dialog.md#function-adddata) | [display()](classlibsdi_1_1_dialog.md#function-display), [htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog) |
| FFA106  | [addAction()](classlibsdi_1_1_dialog.md#function-addaction) | [display()](classlibsdi_1_1_dialog.md#function-display), [menu()](classlibsdi_1_1_dialog.md#function-menu) |
| 9F02  | [setAmount()](classlibsdi_1_1_dialog.md#function-setamount) | [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput), [requestCard()](classlibsdi_1_1_dialog.md#function-requestcard) |
| 5F2A  | [setCurrency()](classlibsdi_1_1_dialog.md#function-setcurrency) | [secureInput()](classlibsdi_1_1_dialog.md#function-secureinput), [requestCard()](classlibsdi_1_1_dialog.md#function-requestcard) |
| 9C  | [setTransactionType()](classlibsdi_1_1_dialog.md#function-settransactiontype) | [requestCard()](classlibsdi_1_1_dialog.md#function-requestcard) |


Other functions lack that any getters and setters are 

* _Handle Display_ without parameters [clearScreen()](classlibsdi_1_1_dialog.md#function-clearscreen)
* _Display Idle Screen_[idleScreen()](classlibsdi_1_1_dialog.md#function-idlescreen)
* _Activate LEDs_[showLedArea()](classlibsdi_1_1_dialog.md#function-showledarea)
* [abort()](classlibsdi_1_1_dialog.md#function-abort)
* [getAsyncResult()](classlibsdi_1_1_dialog.md#function-getasyncresult)

## Public Types Documentation

### enum REQUEST_CARD_MODE

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| REQUEST_CARD_STANDARD | 0| Initial request card dialog, e.g. "please tab".   |
| REQUEST_CARD_FALLBACK | 1| Modified dialog for a fall back use case.   |
| REQUEST_CARD_RETRY | 2| Modified dialog, e.g. "please tab again".   |




Dialog use cases for [requestCard()](classlibsdi_1_1_dialog.md#function-requestcard)


## Public Functions Documentation

### function clearScreen

```cpp
bool clearScreen(
    bool epp =true
)
```

Clear display (24 03) 

**Parameters**: 

  * **epp** command destination (DFA150) is External PIN pad 


**Return**: true for success 

Issue _Handle Display_ without parameters except destination (DFA150)


### function display

```cpp
int display(
    const std::string & text,
    bool epp =true
)
```

Call _Handle Display_ (24 03) 

**Parameters**: 

  * **text** value for parameter _text_ (FFA011/DFA013), utf-8 
  * **epp** command destination (DFA150) is External PIN pad


**Return**: [Dialog invocation return values](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md)

**Par**: Setters

[setTemplate()](classlibsdi_1_1_dialog.md#function-settemplate)
[addData()](classlibsdi_1_1_dialog.md#function-adddata)
[setTimeout()](classlibsdi_1_1_dialog.md#function-settimeout)
[setOptions()](classlibsdi_1_1_dialog.md#function-setoptions)
[setEnterKeyLabel()](classlibsdi_1_1_dialog.md#function-setenterkeylabel)
[setClearKeyLabel()](classlibsdi_1_1_dialog.md#function-setclearkeylabel)
[setCancelKeyLabel()](classlibsdi_1_1_dialog.md#function-setcancelkeylabel)
[setHeader()](classlibsdi_1_1_dialog.md#function-setheader)
[setBeep()](classlibsdi_1_1_dialog.md#function-setbeep)
[addAction()](classlibsdi_1_1_dialog.md#function-addaction)

Send SDI command _Handle Display_ with parameters configured with this object's setters.


### function secureInput

```cpp
int secureInput(
    bool epp =true
)
```

Start SDI command _Handle Secure Input_ (24 04) 

**Parameters**: 

  * **epp** command destination DFA150 is External PIN pad


**Return**: [Dialog invocation return values](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md)

**Par**: 

  * Setters

[setInputTemplate()](classlibsdi_1_1_dialog.md#function-setinputtemplate)
[setLanguage()](classlibsdi_1_1_dialog.md#function-setlanguage)
[setTimeout()](classlibsdi_1_1_dialog.md#function-settimeout)
[setBeep()](classlibsdi_1_1_dialog.md#function-setbeep)
[setMaskingCharacter()](classlibsdi_1_1_dialog.md#function-setmaskingcharacter)
[setAlternativeInputFormat()](classlibsdi_1_1_dialog.md#function-setalternativeinputformat)
[setAmount()](classlibsdi_1_1_dialog.md#function-setamount)
[setCurrency()](classlibsdi_1_1_dialog.md#function-setcurrency)
  * Getters

[get()](classlibsdi_1_1_dialog.md#function-get)


Send SDI command _Handle Secure Input_ with parameters configured with this object's setters.


### function menu

```cpp
int menu(
    bool epp =true
)
```

Start SDI command _Handle Menu_ (24 05) 

**Parameters**: 

  * **epp** command destination DFA150 is External PIN pad


**Return**: selected item index or UIError as defined in [html/gui_error.h](gui__error_8h.md#file-gui-error.h), UI_ERR_CONNECTION_LOST for client side error - inspect with [getClientError()](classlibsdi_1_1_sdi_base.md#function-getclienterror), UI_ERR_PROTOCOL for other SDI SW12 - inspect with [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12)

**Par**: 

  * Setters

[setMenuText()](classlibsdi_1_1_dialog.md#function-setmenutext)
[addMenuItem()](classlibsdi_1_1_dialog.md#function-addmenuitem)
[setTimeout()](classlibsdi_1_1_dialog.md#function-settimeout)
[setOptions()](classlibsdi_1_1_dialog.md#function-setoptions)
[setEnterKeyLabel()](classlibsdi_1_1_dialog.md#function-setenterkeylabel)
[setCancelKeyLabel()](classlibsdi_1_1_dialog.md#function-setcancelkeylabel)
[setUpKeyLabel()](classlibsdi_1_1_dialog.md#function-setupkeylabel)
[setDownKeyLabel()](classlibsdi_1_1_dialog.md#function-setdownkeylabel)
[setHeader()](classlibsdi_1_1_dialog.md#function-setheader)
[setBeep()](classlibsdi_1_1_dialog.md#function-setbeep)
[setPreSelected()](classlibsdi_1_1_dialog.md#function-setpreselected)
[addAction()](classlibsdi_1_1_dialog.md#function-addaction)
  * Getters

[getSelected()](classlibsdi_1_1_dialog.md#function-getselected) (DFA00C) 
[getAdditionalResultValue()](classlibsdi_1_1_sdi_base.md#function-getadditionalresultvalue) (DFA000) 


Send SDI command _Handle Menu_ with parameters configured with this object's setters.


### function requestCard

```cpp
int requestCard(
    unsigned char technology,
    enum REQUEST_CARD_MODE mode =REQUEST_CARD_STANDARD,
    bool epp =true
)
```

Start SDI command _Handle Card Request Display_ (24 06) 

**Parameters**: 

  * **technology** (DFA108, see [Card Detection (23-01)]) 
  * **mode** use case variant out of [REQUEST_CARD_MODE](classlibsdi_1_1_dialog.md#enum-request-card-mode) (DFA10A) 
  * **epp** command destination DFA150 is External PIN pad


**Return**: [Dialog invocation return values](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md)

**Par**: Setters


[setAmount()](classlibsdi_1_1_dialog.md#function-setamount)
[setCurrency()](classlibsdi_1_1_dialog.md#function-setcurrency)
[setTransactionType()](classlibsdi_1_1_dialog.md#function-settransactiontype)

Send SDI command _Handle Menu_ with parameters configured with this object's setters.


### function idleScreen

```cpp
bool idleScreen(
    bool epp =true
)
```

Send SDI command _Display Idle Screen_ (24 07) 

**Parameters**: 

  * **epp** command destination DFA150 is External PIN pad 


**Return**: true for success 

### function captureSignature

```cpp
int captureSignature(
    std::vector< unsigned char > & signature,
    std::string & format,
    bool epp =true
)
```

Start SDI command _Handle Signature Capture_ (24 08) 

**Parameters**: 

  * **signature** signature data (DFA01D) 
  * **format** signature format (DFA01C) 
  * **epp** command destination DFA150 is External PIN pad


**Return**: [Dialog invocation return values](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md)

**Par**: Setters

[setLanguage()](classlibsdi_1_1_dialog.md#function-setlanguage)
[setTimeout()](classlibsdi_1_1_dialog.md#function-settimeout)

Send SDI command _Handle Menu_ with parameters configured with this object's setters.


### function htmlDialog

```cpp
int htmlDialog(
    const std::string & fname,
    bool epp =true
)
```

Call SDI command _Handle HTML Dialog_ (24 0A) 

**Parameters**: 

  * **fname** HTML file name without path (DFA020) 
  * **epp** command destination (DFA150) is External PIN pad


**Return**: [Dialog invocation return values](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md)

**Par**: 

  * Setters


[addData()](classlibsdi_1_1_dialog.md#function-adddata)
[setTimeout()](classlibsdi_1_1_dialog.md#function-settimeout)
[setOptions()](classlibsdi_1_1_dialog.md#function-setoptions)
[setBeep()](classlibsdi_1_1_dialog.md#function-setbeep)
[setLanguage()](classlibsdi_1_1_dialog.md#function-setlanguage)
  * Getters

[get()](classlibsdi_1_1_dialog.md#function-get)


Send SDI command _Handle HTML Dialog_ with parameters configured with this object's setters.


### function getAsyncResult

```cpp
int getAsyncResult(
    bool epp =true
)
```

Get result of asynchronous dialog invocation (24-0B) 

**Parameters**: 

  * **epp** command destination DFA150 is External PIN pad


**Return**: dialog status 

 0, [DIALOG_SUCCESS](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-success) Dialog finished with _UI_ERR_OK_

 1, [DIALOG_NO_ASYNC_DIALOG](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-no-async-dialog) No asynchronous dialog started 

 2, [DIALOG_IN_PROGRESS](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md#variable-dialog-in-progress)

 or any other of [Dialog invocation return values](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___r_e_t_u_r_n___v_a_l_u_e_s.md)

### function setTemplate

```cpp
void setTemplate(
    unsigned char id
)
```

Set HTML template identifier (DFA010) 

**Parameters**: 

  * **id** identifier >= '02' 


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display)

### function setInputTemplate

```cpp
void setInputTemplate(
    unsigned char id
)
```

Set input template identifier (DFA007) 

**Parameters**: 

  * **id** input template id 


**Par**: Setter for

[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)

### function setLanguage

```cpp
void setLanguage(
    unsigned char language
)
```

Set language (DFA008) 

**Parameters**: 

  * **language** [%SDI language code]


**Par**: Setter for

[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)
[captureSignature()](classlibsdi_1_1_dialog.md#function-capturesignature)
[htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog)

### function addData

```cpp
void addData(
    const std::string & name,
    const std::string & value
)
```

Add display data name-value pair (FFA011, DFA012, DFA013) 

**Parameters**: 

  * **name** variable name DFA012, ans 
  * **value** variable value DFA013, utf-8 


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display)
[htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog)

Adds another name-value pair for the dialog


### function setTimeout

```cpp
void setTimeout(
    int seconds
)
```

Set dialog timeout (DFA005) 

**Parameters**: 

  * **seconds** timeout in seconds, 0 or -1 for infinite depending on template id 


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display)
[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)
[captureSignature()](classlibsdi_1_1_dialog.md#function-capturesignature)
[htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog)

### function setOptions

```cpp
void setOptions(
    unsigned options
)
```

Set dialog options (DFA13D) 

**Parameters**: 

  * **options** dialog options, see [Dialog options](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md) or [Menu options](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___m_e_n_u___o_p_t_i_o_n_s.md)


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display) with [Dialog options](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md)
[menu()](classlibsdi_1_1_dialog.md#function-menu) with [Menu options](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___m_e_n_u___o_p_t_i_o_n_s.md)
[htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog) with [Dialog options](group___d_e_f___l_i_b_s_d_i_c_l_i_e_n_t___d_i_a_l_o_g___o_p_t_i_o_n_s.md)

### function setEnterKeyLabel

```cpp
void setEnterKeyLabel(
    const std::string & label
)
```

Set label for the _Enter_ soft key or the key helper in the dialog control bar (DFA13E) 

**Parameters**: 

  * **label** label, utf-8 


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display)
[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function setClearKeyLabel

```cpp
void setClearKeyLabel(
    const std::string & label
)
```

Set label for the _Clear_ soft key or the key helper in the dialog control bar (DFA13F) 

**Parameters**: 

  * **label** label, utf-8 


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display)
[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function setCancelKeyLabel

```cpp
void setCancelKeyLabel(
    const std::string & label
)
```

Set label for the _Cancel_ soft key or the key helper in the dialog control bar (DFA140) 

**Parameters**: 

  * **label** label, utf-8 


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display)

### function setUpKeyLabel

```cpp
void setUpKeyLabel(
    const std::string & label
)
```

Set label for the _up_ soft key or the key helper in the dialog control bar (DFA141) 

**Parameters**: 

  * **label** label, utf-8 


**Par**: Setter for

[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function setDownKeyLabel

```cpp
void setDownKeyLabel(
    const std::string & label
)
```

Set label for the _down_ soft key or the key helper in the dialog control bar (DFA142) 

**Parameters**: 

  * **label** label, utf-8 


**Par**: Setter for

[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function setHeader

```cpp
void setHeader(
    const std::string & text
)
```

Set Text shown in the header area (DFA143) 

**Parameters**: 

  * **text** header text, utf-8 


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display)
[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function setBeep

```cpp
void setBeep(
    bool active =true
)
```

Enable/Disable a beep played when the dialog appears (DFA00D) 

**Parameters**: 

  * **active** flag: True for beep, false for no beep 


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display)
[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)
[menu()](classlibsdi_1_1_dialog.md#function-menu)
[htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog)

### function addAction

```cpp
void addAction(
    const std::string & key,
    const std::string & action
)
```

Set additional key action (FFA106, DFA13B, DFA13C) 

**Parameters**: 

  * **key** ADKGUI key code, utf-8 
  * **action** associated dialog action, utf-8 


**Par**: Setter for

[display()](classlibsdi_1_1_dialog.md#function-display)
[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function setMaskingCharacter

```cpp
void setMaskingCharacter(
    char c
)
```

Set masking character (DFA019) 

**Parameters**: 

  * **c** character used to illustrate the input length 


**Par**: Setter for

[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)

### function setAlternativeInputFormat

```cpp
void setAlternativeInputFormat(
    const char * f
)
```

Configure alternative input format string (DFA01A) 

**Parameters**: 

  * **f** format string 


**Par**: Setter for

[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)

### function setAmount

```cpp
void setAmount(
    const unsigned char * amount
)
```

Configure amount (9F02) 

**Parameters**: 

  * **amount** amount in numeric format n12 (6 bytes BCD) 


**Par**: Setter for

[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)
[requestCard()](classlibsdi_1_1_dialog.md#function-requestcard)

### function setCurrency

```cpp
void setCurrency(
    const unsigned char * currency
)
```

Configure currency (5F2A) 

**Parameters**: 

  * **currency** currency in numeric format n3 (2 bytes BCD) 


**Par**: Setter for

[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)
[requestCard()](classlibsdi_1_1_dialog.md#function-requestcard)


See [Supported Currencies]


### function setTransactionType

```cpp
void setTransactionType(
    unsigned char txnType
)
```

Configure transaction type (9C) for _Handle Card Request Display_

**Parameters**: 

  * **txnType** transaction type 


**Par**: Setter for

[requestCard()](classlibsdi_1_1_dialog.md#function-requestcard)

See [Supported Currencies]


### function setMenuText

```cpp
void setMenuText(
    const std::string & text
)
```

Set menu text prompt (DFA00A) for SDI command _Handle Menu_

**Parameters**: 

  * **text** menu text prompt 


**Par**: Setter for

[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function addMenuItem

```cpp
void addMenuItem(
    const std::string & item
)
```

add menu item (DFA00B) for SDI command _Handle Menu_

**Parameters**: 

  * **item** menu item 


**Par**: Setter for

[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function setPreSelected

```cpp
void setPreSelected(
    unsigned char itemNumber
)
```

Set a preselected item other than the first or disable pre-selection (DFA00C) 

**Parameters**: 

  * **itemNumber** number of item to select, count starts with 1, invalid value disables pre-selection 


**Par**: Setter for

[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function setAdminMenu

```cpp
void setAdminMenu(
    unsigned char adminMenu
)
```

Enable showing of Info/Menu softkeys/keyhelpers or control admin menu access for idle screen to display (DFA155). This tag is ignored, if administration mode is disabled (default). 

**Parameters**: 

  * **adminMenu** admin menu access mode in idle screen to display. Possible values are: 00 = Don't show admin menu softkeys/keyhelpers and allow to enable admin menu by key combination 2-5-8 or clockwise touch presses on four display corners (default). 01 = Don't show admin menu softkeys/keyhelpers, but disallow to enable admin menu. 02 = Show admin menu softkeys/keyhelpers. 


**Par**: Setter for

[idleScreen()](classlibsdi_1_1_dialog.md#function-idlescreen)

### function getSelected

```cpp
unsigned char getSelected()
```

Get selected item number (DFA00C) from _Handle Menu_ invocation. 

**Return**: number of selected item, count starts with 1 

**Par**: Getter for

[menu()](classlibsdi_1_1_dialog.md#function-menu)

### function get

```cpp
std::string get(
    const std::string & name
)
```

Get output data of dialog invocation (FFA014, DFA015, DFA016) 

**Parameters**: 

  * **name** variable name (DFA015), ans 


**Return**: variable value, empty string if not found 

**Par**: Getter for

[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)
[htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog)

### function getInputFieldNames

```cpp
std::vector< std::string > getInputFieldNames()
```

List up data input field names found in the dialog invocation result (FFA014, DFA015) 

**Return**: list of input field names found in the dialog result 

**Par**: Getter for

[secureInput()](classlibsdi_1_1_dialog.md#function-secureinput)
[htmlDialog()](classlibsdi_1_1_dialog.md#function-htmldialog)

Can be used to iterate through all entered data in conjunction with the [get()](classlibsdi_1_1_dialog.md#function-get) function.


### function showLedArea

```cpp
static void showLedArea(
    bool show
)
```

Show or hide area with status indicators for contactless transactions by SDI command _Activate LEDs_ (24-09) 

**Parameters**: 

  * **show** _true_ for show, _false_ for hide 


### function abort

```cpp
static void abort()
```

Abort a dialog by sending _SDI SysAbort_ (20 02) 

## Public Attributes Documentation

### variable DIALOG_SUCCESS

```cpp
static const static int DIALOG_SUCCESS = 0;
```

Dialog invocation return value on success 

Equal to _UI_ERR_OK_, mapped from SDI: [SDI_SW12_SUCCESS](namespacelibsdi.md#enumvalue-sdi-sw12-success)


### variable DIALOG_CANCEL_PRESSED

```cpp
static const static int DIALOG_CANCEL_PRESSED = -1;
```

Dialog invocation return value in case of cancel key pressed 

Equal to _UI_ERR_ABORT_, mapped from SDI: [SDI_SW12_CANCELED_BY_USER](namespacelibsdi.md#enumvalue-sdi-sw12-canceled-by-user)


### variable DIALOG_TIMEOUT

```cpp
static const static int DIALOG_TIMEOUT = -3;
```

Dialog invocation return value in case dialog timeout 

Equal to _UI_ERR_TIMEOUT_, mapped from SDI: [SDI_SW12_EXECUTION_TIMEOUT](namespacelibsdi.md#enumvalue-sdi-sw12-execution-timeout)


### variable DIALOG_SYS_ABORT

```cpp
static const static int DIALOG_SYS_ABORT = -8;
```

Dialog invocation return value in case of abort by _SDI Sys Abort_ (20-02), e.g. [abort()]()

Equal to _UI_ERR_CANCELLED_, mapped from SDI: [SDI_SW12_EXECUTION_ABORTED](namespacelibsdi.md#enumvalue-sdi-sw12-execution-aborted)


### variable DIALOG_CLIENT_ERROR

```cpp
static const static int DIALOG_CLIENT_ERROR = -14;
```

Dialog invocation return value in case of client side error 

Equal to _UI_ERR_CONNECTION_LOST_, use [getClientError()](classlibsdi_1_1_sdi_base.md#function-getclienterror) for closer analysis. 


### variable DIALOG_SDI_SW12

```cpp
static const static int DIALOG_SDI_SW12 = -15;
```

Dialog invocation return value in case of other SDI status word 

Equal to _UI_ERR_PROTOCOL_, use [getSdiSw12()](classlibsdi_1_1_sdi_base.md#function-getsdisw12) for closer analysis. 


### variable DIALOG_NO_ASYNC_DIALOG

```cpp
static const static int DIALOG_NO_ASYNC_DIALOG = 1;
```

[getAsyncResult()]() return value when there is no asynchronous dialog running 

### variable DIALOG_IN_PROGRESS

```cpp
static const static int DIALOG_IN_PROGRESS = 2;
```

[getAsyncResult()]() return value when the asynchronous dialog is in progress 

### variable DLG_DisplayOnly

```cpp
static const static unsigned DLG_DisplayOnly = 0x00000000;
```


### variable DLG_CancelKey

```cpp
static const static unsigned DLG_CancelKey = 0x00000002;
```


### variable DLG_ClearKey

```cpp
static const static unsigned DLG_ClearKey = 0x00000004;
```


### variable DLG_EnterKey

```cpp
static const static unsigned DLG_EnterKey = 0x00000008;
```


### variable DLG_NoLEDs

```cpp
static const static unsigned DLG_NoLEDs = 0x00000010;
```


### variable DLG_CtlsLogo

```cpp
static const static unsigned DLG_CtlsLogo = 0x00000020;
```


### variable DLG_QuestionLogo

```cpp
static const static unsigned DLG_QuestionLogo = 0x00000040;
```


### variable DLG_WarningLogo

```cpp
static const static unsigned DLG_WarningLogo = 0x00000080;
```


### variable DLG_ErrorLogo

```cpp
static const static unsigned DLG_ErrorLogo = 0x00000100;
```


### variable DLG_SuccessLogo

```cpp
static const static unsigned DLG_SuccessLogo = 0x00000200;
```


### variable DLG_WaitLogo

```cpp
static const static unsigned DLG_WaitLogo = 0x00000400;
```


### variable DLG_Async

```cpp
static const static unsigned DLG_Async = 0x00000800;
```


### variable DLG_StoreAsyncResult

```cpp
static const static unsigned DLG_StoreAsyncResult = 0x00001000;
```


### variable DLG_HideSoftKeys

```cpp
static const static unsigned DLG_HideSoftKeys = 0x00002000;
```


### variable DLG_TextAlignLeft

```cpp
static const static unsigned DLG_TextAlignLeft = 0x00004000;
```


### variable DLG_TextAlignRight

```cpp
static const static unsigned DLG_TextAlignRight = 0x00008000;
```


### variable DLG_TextAlignTop

```cpp
static const static unsigned DLG_TextAlignTop = 0x00010000;
```


### variable DLG_TextAlignButton

```cpp
static const static unsigned DLG_TextAlignButton = 0x00020000;
```


### variable DLG_NoHeader

```cpp
static const static unsigned DLG_NoHeader = 0x00040000;
```


### variable DLG_ClearOnReturn

```cpp
static const static unsigned DLG_ClearOnReturn = 0x00100000;
```


### variable DLG_AbortOnCardRemove

```cpp
static const static unsigned DLG_AbortOnCardRemove = 0x00200000;
```


### variable DLG_IgnoreExtAbort

```cpp
static const static unsigned DLG_IgnoreExtAbort = 0x00400000;
```


### variable MENU_NoOpts

```cpp
static const static unsigned MENU_NoOpts = 0x00000000;
```


### variable MENU_NoLEDs

```cpp
static const static unsigned MENU_NoLEDs = 0x00000002;
```


### variable MENU_ClearOnReturn

```cpp
static const static unsigned MENU_ClearOnReturn = 0x00000004;
```


### variable MENU_AbortOnCardRemove

```cpp
static const static unsigned MENU_AbortOnCardRemove = 0x00000008;
```


### variable MENU_IgnoreExtAbort

```cpp
static const static unsigned MENU_IgnoreExtAbort = 0x00000010;
```


### variable MENU_NoHeader

```cpp
static const static unsigned MENU_NoHeader = 0x00000020;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100