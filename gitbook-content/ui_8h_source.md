---
hidden: true
title: ui.h
---

<a href="ui_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _UI_H_
 9 #define _UI_H_
 10 
 11 #ifndef HEADLESS
 12 #include "html/types.h"
 13 #include "html/gui.h"
 14 #else // HEADLESS
 15 #include <string>
 16 #include <vector>
 17 #include <map>
 18 #include "ipc/jsobject.h"
 19 
 20 namespace vfigui
 21 {
 22  typedef std::map<std::string, std::string> stringmap;
 23  enum UICBType { UI_CB_RESULT,
 24  UI_CB_UPDATE,
 25  UI_CB_LOAD,
 26  UI_CB_ERROR_LIST,
 27  UI_CB_STATISTICS
 28  };
 29  class UICBData;
 30  typedef void (*uiAsyncCallback)(void *data, UICBType type, UICBData &uidata);
 31 }
 32 #endif
 33 
 34 #include "csd.h"
 35 #include "sdi_lang.h"
 36 
 37 // Defines for Status Callbacks on Manual Card Data Entry in headless mode
 38 #define TOO_MANY_DIGITS_ENTERED 0xFB
 39 #define TOO_FEW_DIGITS_ENTERED 0xFC
 40 #define INVALID_VALUE_ENTERED 0xFD
 41 #define PAN_ENTERED_CHECK_AND_CONFIRM 0xFE
 42 
 43 #define CONT_VAL_CONTINUE 0x01
 44 #define CONT_VAL_REENTER 0x02
 45 #define CONT_VAL_ABORT 0x03
 46 
 47 #define CONT_MODE_INITIAL 0x00
 48 #define CONT_MODE_CONTINUE 0x01
 49 #define CONT_MODE_BYPASS 0x02
 50 #define CONT_MODE_SKIP 0x03
 51 
 52 enum ui_async_result
 53 {
 54  UI_AR_NONE = 0,
 55  UI_AR_IN_PROGRESS = 1,
 56  UI_AR_KEY_ENTER = 2,
 57  UI_AR_KEY_CANCEL = 3,
 58  UI_AR_KEY_CLEAR = 4,
 59  UI_AR_TIMEOUT = 5,
 60  UI_AR_FAILED = 6
 62 };
 63 
 65 enum DataEntryType
 66 {
 67  TYPE_PAN,
 68  TYPE_EXPIRYDATE,
 69  TYPE_CVV
 70 };
 71 
 88 int ui_externalDialog(unsigned char templateId, vfigui::stringmap &value, unsigned char confirmation,
 89  unsigned options, unsigned short timeout, int *raw_ui_error);
 90 
 102 int ui_htmlDialog(const std::string &htmlFileName, vfigui::stringmap &value,
 103  unsigned short timeout, sdi::Language lang, int options, int *raw_ui_error);
 104 
 120 int ui_handleSecureInput(unsigned char templateId, sdi::Language textLanguage, unsigned char beep, unsigned short timeout,
 121  vfigui::stringmap &value, char maskingCharacter, char *inputFormatString,
 122  unsigned char *amount = 0, unsigned short currency = 0);
 123 
 131 int ui_handleSignatureCapture(sdi::Language textLanguage, unsigned short timeout, vfigui::stringmap &value);
 132 
 133 /* UI menu options
 134  * Please note that these bit mask is used in DFA13D (dialog options) with
 135  * command Handle Menu 22-05, therefore, do not insert values in between */
 136 enum Ui_MenuOpts
 137 {
 138  MENU_NoOpts = 0x00, // no options, use defaults
 139  MENU_Beep = 0x01, // do a beep when displaying the menu
 140  MENU_NoLEDs = 0x02, // do not show LEDs even if enabled by enableLEDs()
 141  MENU_ClearOnReturn = 0x04, // clear content before the dialog returns
 142  MENU_AbortOnCardRemove = 0x08, // abort the dialog, if the card is removed (returns RESULT_FAIL)
 143  MENU_IgnoreExtAbort = 0x10, /* ignore external abort by check4Interrupt, otherwise
 144  * the menu can be aborted by mobile device (e.g. lost
 145  * link). External abort will return RESULT_MOBILE_ABORT or RESULT_NO_LINK */
 146  MENU_NoHeader = 0x20, /* don't display dialog header (neither logo nor header text is displayed
 147  * even if provided with variable "header_text" */
 148  /*** external options allowed for command Handly Menu 22-05 ***/
 149  MENU_AllowedExtOptions = (MENU_Beep | MENU_NoLEDs | MENU_ClearOnReturn | MENU_AbortOnCardRemove | MENU_IgnoreExtAbort | MENU_NoHeader)
 150 };
 151 
 205 int ui_handleMenu(vfigui::stringmap &value, unsigned options = MENU_NoOpts, int timeout = 30, int *raw_ui_error = 0);
 206 
 217 int ui_handleCardRequestDisplay(unsigned char CardTec,
 218  unsigned char displayMode,
 219  unsigned char *amount,
 220  unsigned short currency,
 221  unsigned char cancel_allowed,
 222  unsigned char transType);
 223 
 238 int ui_handleManualCardDataEntry(sdi::Language textLanguage,
 239  unsigned short timeout,
 240  csd::csd_stringmap &value,
 241  unsigned char cardEntryValueDeactivation,
 242  unsigned char cardEntryMode,
 243  char *inputFormatString,
 244  char *touchCoordinates = NULL,
 245  unsigned char nbrTouchButtons = 0,
 246  unsigned char forceMinPanLenTo7 = 0,
 247  unsigned char skipCb9FFE = 0);
 248 
 249 int ui_getInputMinLength(std::string text);
 250 
 251 
 252 // UI PIN dialog options
 253 enum Ui_PinOpts
 254 {
 255  /* options used in DFA13D (dialog options) with 22-01/22-06),
 256  * thus, do not insert values in between */
 257  PIN_NoOpts = 0x0, // no options, use defaults
 258  PIN_NoLEDs = 0x1, // do not show LEDs even if enabled by enableLEDs()
 259  PIN_NoHeader = 0x2, /* don't display dialog header (neither logo nor header text is displayed
 260  * even if provided with variable "header_text" */
 261  PIN_NoAmount = 0x4, // supress displaying the amount/currency (even if provided in parameter map)
 262  PIN_NoCardAppLabel = 0x8, // supress displaying the card application label (even if provided with 'prefname' in parameter map)
 263  PIN_AllowedExtOptions = (PIN_NoLEDs | PIN_NoHeader | PIN_NoAmount | PIN_NoCardAppLabel),
 264  /* internal options not used in DFA13D (dialog options) with 22-01/22-06,
 265  * thus, values can be inserted or changed later if required */
 266  PIN_ClearOnReturn = 0x100, // clear content before the dialog returns
 267  PIN_AbortOnCardRemove = 0x200, // abort the PIN dialog, if the card is removed (returns RESULT_FAIL)
 268  PIN_IgnoreExtAbort = 0x400, /* ignore external abort by check4Interrupt, otherwise
 269  * the PIN dialog can be aborted by mobile device (e.g. lost
 270  * link). External abort will return RESULT_MOBILE_ABORT or RESULT_NO_LINK */
 271  PIN_NavigatorMode_1 = 0x800, // Navigator mode 1 enabled: double click on touch
 272  PIN_NavigatorMode_2 = 0x1000, // Navigator mode 2 enabled: with tactile button (ignored if PIN_NavigatorMode_1 is set)
 273  PIN_ClearAllDigits = 0x2000, // clear key removes all digits, otherwise the last digit is removed only
 274  PIN_AutoEnter = 0x4000, // automatically confirm PIN entry when the maximum number of PIN digits has been reached
 275  PIN_Beep = 0x8000 // do a beep when displaying the PIN dialog
 276 };
 277 
 278 enum Ui_PinBypass
 279 {
 280  PINBypass_Disabled = 0, // PIN bypass disabled
 281  PINBypass_Enter = 1, // PIN bypass enabled with Enter key
 282  PINBypass_Clear = 2, // PIN bypass enabled with Clear key
 283  PINBypass_DisableByDigit = 4, // disable PIN bypass as soon as a digit has been entered
 284  PINBypass_MaskAllowed = (PINBypass_Enter | PINBypass_Clear | PINBypass_DisableByDigit)
 285 };
 286 
 317 int ui_EnterPin(sdi::Language pinTextLanguage,
 318  unsigned short timeout = 30,
 319  unsigned char *pinBypass = 0,
 320  unsigned opts = PIN_NoOpts,
 321  unsigned char minPINLength = 4,
 322  unsigned char maxPINLength = 12,
 323  unsigned interchar_tout = 0,
 324  vfigui::stringmap *value = 0,
 325  int password_char = '*',
 326  char *touchCoordinates = NULL,
 327  unsigned char nbrTouchButtons = 0);
 328 
 334 void ui_displayTextKey(const std::string &textKey, sdi::Language language);
 335 
 349 int ui_confirmTextKey(const std::string &textKey, sdi::Language language, vfigui::stringmap *value = 0, unsigned short timeout = 30);
 350 
 351 /* UI dialog options
 352  * Please note that these bit mask is used in DFA13D (dialog options) with
 353  * command Handle Display 22-03 and Handle HTML Dialog (24-0A), therefore,
 354  * do not insert values in between */
 355 enum Ui_DialogOpts
 356 {
 357  DLG_DisplayOnly = 0x0000, // display only (text without softkeys)
 358  DLG_Beep = 0x0001, // play one short beep when displaying the dialog
 359  DLG_CancelKey = 0x0002, /* add cancel softkey to dialog. On press, RESULT_USER_CANCEL
 360  * is returned. In addition, cancel key will result the same
 361  * on devices with keyboard. For devices without touch an
 362  * entry in helpers bar is displayed to signal user that the
 363  * enter key can be pressed on the keyboard. */
 364  DLG_ClearKey = 0x0004, /* add clear softkey to dialog. On press, RESULT_CLEAR_BUTTON
 365  * is returned. In addition, clear key will result the same
 366  * on devices with keyboard. For devices without touch an
 367  * entry in helpers bar is displayed to signal user that
 368  * the clear key can be pressed on the keyboard. */
 369  DLG_EnterKey = 0x0008, /* add enter softkey to dialog. On press, RESULT_OK
 370  * is returned. In addition, enter key will result the same
 371  * on devices with keyboard. For devices without touch an
 372  * entry in helpers bar is displayed to signal user that t
 373  * he enter key can be pressed on the keyboard. */
 374  DLG_NoLEDs = 0x0010, // do not show LEDs even if enabled by enableLEDs()
 375  DLG_CtlsLogo = 0x0020, // show CTLS logo on top of the dialog message
 376  DLG_QuestionLogo = 0x0040, // show question logo on top of the dialog message (previous logo bit prior)
 377  DLG_WarningLogo = 0x0080, // show warning logo on top of the dialog message (previous logo bits prior)
 378  DLG_ErrorLogo = 0x0100, // show error logo on top of the dialog message (previous logo bits prior)
 379  DLG_SuccessLogo = 0x0200, // show success logo on top of the dialog message (previous logo bits prior)
 380  DLG_WaitLogo = 0x0400, // show wait logo/animation on top of the dialog message (previous logo bits prior)
 381  DLG_Async = 0x0800, // asynchronous dialog, which lets ui_dialog() return immediatelly
 382  DLG_StoreAsyncResult = 0x1000, /* store asynchornous result to provide it with ui_getAsyncResult()
 383  * after the dialog has been finished */
 384  DLG_HideSoftKeys = 0x2000, /* hide softkeys on touch screen devices enabled by option
 385  * DLG_CancelKey, DLG_ClearKey or DLG_EnterKey. For devices
 386  * without touch, the entry in helpers bar will not apear.
 387  * If the terminal has a keyboard, the dialog returns for
 388  * the corresponding key stroke. */
 389  DLG_TextAlignLeft = 0x4000, /* text message shall be left aligned
 390  * (default: horizontal centered) */
 391  DLG_TextAlignRight = 0x8000, /* text message shall be right aligned
 392  * (default: horizontal centered, left-aligned is prior) */
 393  DLG_TextAlignTop = 0x10000, /* text message shall be top aligned
 394  * (default: vertical centered) */
 395  DLG_TextAlignBottom = 0x20000, /* text message shall be bottom aligned
 396  * (default: vertical centered, top-aligned is prior) */
 397  DLG_NoHeader = 0x40000, /* don't display dialog header field (neither logo nor header text is displayed
 398  * even if provided with variable "header_text" */
 399  DLG_ExtDialogCompat = 0x80000, /* HandleDisplay (24-03) w/o dialog options was invoked, which
 400  * requires some special handling in UI layer (compatibility mode) */
 401  /*** synchronous dialog options (ignored, if DLG_Async is set) ***/
 402  DLG_ClearOnReturn = 0x100000, // clear content before the dialog returns
 403  DLG_AbortOnCardRemove = 0x200000, // abort the dialog, if the card is removed (returns RESULT_FAIL)
 404  DLG_IgnoreExtAbort = 0x400000, /* ignore external abort by check4Interrupt, otherwise
 405  * the dialog can be aborted by mobile device (e.g. lost
 406  * link). External abort will return RESULT_MOBILE_ABORT
 407  * or RESULT_NO_LINK (ignored, if DLG_Async is not set) */
 408  /*** external options allowed for command Handly Display 22-03 ***/
 409  DLG_AllowedExtOptions = (DLG_Beep | DLG_CancelKey | DLG_ClearKey | DLG_EnterKey | DLG_NoLEDs | DLG_CtlsLogo | DLG_QuestionLogo |
 410  DLG_WarningLogo | DLG_ErrorLogo | DLG_SuccessLogo | DLG_WaitLogo | DLG_Async | DLG_StoreAsyncResult |
 411  DLG_HideSoftKeys | DLG_TextAlignLeft | DLG_TextAlignRight | DLG_TextAlignTop | DLG_TextAlignBottom |
 412  DLG_NoHeader | DLG_ClearOnReturn | DLG_AbortOnCardRemove | DLG_IgnoreExtAbort),
 413  /*** external options allowed for command Handle HTML Dialog 24-0A ***/
 414  DLG_AllowedOptsHtmlDialog = (DLG_Beep | DLG_ClearOnReturn | DLG_AbortOnCardRemove | DLG_IgnoreExtAbort)
 415 };
 442 int ui_dialog(const std::string &msg, unsigned options, int timeout = 30,
 443  vfigui::stringmap *value = 0, bool *abort = 0);
 444 
 445 // UI idlescreen options
 446 enum Ui_IdleScreenOpts
 447 {
 448  IDLE_DisplayOnly = 0x0000, // display only (text without softkeys)
 449  IDLE_MenuKey = 0x0001, /* add menu softkey to dialog. On press, 0 is returned.
 450  * In addition, enter key will result the same on devices
 451  * with keyboard. For devices without touch an entry in
 452  * helpers bar is displayed to signal user that the enter key
 453  * can be pressed on the keyboard to display the menu. */
 454  IDLE_InfoKey = 0x0002, /* add info softkey to dialog. On press, 1 is returned.
 455  * In addition, cancel key will result the same on devices
 456  * with keyboard. For devices without touch an entry in
 457  * helpers bar is displayed to signal user that the cancel key
 458  * can be pressed on the keyboard to display the info menu. */
 459  IDLE_NoLEDs = 0x0004, // do not show LEDs even if enabled by enableLEDs()
 460  IDLE_AdminMode = 0x0008, /* Admin mode enabled to enter menu with key compination 2-5-8
 461  * or with touch sequence (4 display corners) */
 462  IDLE_WaitLogo = 0x0010 /* show wait logo on idle screen. If this options is note set,
 463  * the custom logo is looked up. If no custom logo is provided
 464  * with an user config package, finally no logo is displayed. */
 465 };
 478 int ui_idlescreen(const std::string &msg, int options, int timeout = -1, void *data = 0);
 479 
 485 void ui_init(vfigui::uiAsyncCallback idlescreen_cb);
 486 
 489 bool ui_enabled(void);
 490 
 492 void ui_clear(void);
 493 
 494 /* For asynchronous calls of function ui_dialog(), the user may set additional option \c DLG_StoreAsyncResult to
 495  * buffer the dialog result and read it with function ui_getAsyncResult() afterwards. For more details, please refer
 496  * to description of function ui_dialog().
 497  * \param[in] reset set to true to reset the result, in case the dialog has finished
 498  * \param[out] raw_ui_error if a pointer is passed the related variable is set with the
 499  * buffered ADKGUI raw error code of last asynchronous UI dialog.
 500  * \return The buffered result of last asynchronous UI dialog (see enum ui_async_result). The function returns UI_AR_NONE,
 501  * if no asynchronous dialog is active. UI_AR_IN_PROGRESS is returned for and active dialog with pending result.
 502  * Once the result of a finished dialog is returned, the function resets the result back to UI_AR_NONE, if \c reset
 503  * is set to true. In this case, the result is provided exactly once. */
 504 enum ui_async_result ui_getAsyncResult(bool reset = true, int *raw_ui_error = 0);
 505 
 506 /* Enable (or disable) virtual CTLS LED area. Please note that this takes effect with call of the next UI dialog.
 507  * \param[in] enable set to true, to enable the LED area, else the LED area is disabled. */
 508 void ui_enableLEDs(bool enable = true);
 509 
 510 /* Activate/deactivate virtual LEDs during CTLS transaction. The function is passed a bitmask with values of
 511  * CONTACTLESS_LED_0, CONTACTLESS_LED_1, CONTACTLESS_LED_2 and CONTACTLESS_LED_3 (see EMV_CTLS_Interface.h).
 512  * \param[in] leds bitmask to specify the activated/disabled CLTS LEDs */
 513 void ui_dispLEDs(unsigned char leds);
 514 
 515 
 516 #ifndef HEADLESS
 517 
 539 class UICatalog
 540 {
 541  // disable copy constructor and assign operator
 542  UICatalog(const UICatalog&);
 543  UICatalog& operator=(const UICatalog&);
 544 #if __cplusplus >= 201103L // since C++11 also forbid usage of move and heap allocation
 545  UICatalog(const UICatalog&&);
 546  UICatalog& operator=(UICatalog&&);
 547 #endif
 548 
 549  std::string m_error;
 550  std::string m_ctlg_intern;
 551  std::string m_ctlg_extern;
 552  bool m_restore;
 553  std::string m_old_catalog;
 554  static pthread_mutex_t m_mutex;
 556  static std::map<std::string, std::string> catalog_cache;
 559  void restore();
 560 
 566  std::string find_catalog(const std::string &file, bool ext, const std::string &www_dir = "");
 567 
 585  bool textSubstitute(std::string &in, const std::string &deflt, int max_passes = 10);
 586 
 587  public:
 588 
 590  enum Priority
 591  {
 592  Intern = 0,
 593  Extern = 1,
 594  IntExt = 2,
 596  ExtInt = 3
 598  };
 599 
 625  UICatalog(sdi::Language lang = sdi::LANG_NO_LANG, const std::string &www_dir = "");
 626 
 628  virtual ~UICatalog();
 629 
 635  bool set(sdi::Language lang, const std::string &www_dir = "");
 636 
 639  std::string error()
 640  {
 641  return m_error;
 642  }
 643 
 651  bool valid(Priority prio);
 652 
 662  bool setUIGlobal(Priority prio, bool restore = true);
 663 
 681  std::string getText(const std::string &name, const std::string &deflt = "", Priority prio = Intern);
 682 };
 683 #endif
 684 
 685 #endif // _UI_FORK_H_
```
