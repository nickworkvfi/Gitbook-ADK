---
hidden: true
title: Display interface
---

[Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Enumerations |  |
| enum   | [IdleScreenMode](#gacdffce6b62c4db2a50dd9cdae6caba78) { [IDLE_HOTKEY_ADMIN](#ggacdffce6b62c4db2a50dd9cdae6caba78a4f3405ef030cb85be40c62851dedd293) =0, [IDLE_NO_ADMIN](#ggacdffce6b62c4db2a50dd9cdae6caba78a43e3b94725d1c312edc4bb14576ab9ee) =1, [IDEL_SHOW_ADMIN](#ggacdffce6b62c4db2a50dd9cdae6caba78a27549d2e45dc641b812b29bf0c3ac692) =2 } |

|  |  |
|----|----|
| Functions |  |
| int  | [displayText](#ga440d80337e047a445a11d9c4a2e41de7) (int template_id, const std::string &data_name, const std::string &data_value, int timeout=0, bool confirm=false, bool beep=false, int dest=1) |
| int  | [displayText](#ga3947b5121e12c60255720f0e4b65ade0) (int template_id, unsigned dialog_opt, const std::map\< std::string, std::string \> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::map\< std::string, std::string \> &key_actions, const char \*header_text=0, const char \*enter_text=0, const char \*clear_text=0, const char \*cancel_text=0, int timeout=0, int dest=1) |
| int  | [displayText](#gacfe3552d7e940337249c23e10250e3f2) (const std::string &data_value, int timeout=0, bool confirm=false, bool beep=false, int dest=1) |
| int  | [displayInput](#ga1318cae26cf697940b77f5ae3cd7b836) (std::string &out, <a href="namespacevfisdi.md#a5fc772c800c3d40d2b95564e8a839bab">InputType</a> type, <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> language=<a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705aabdfcddde54087079139e916b59fe058">LANGUAGE_NO_LANGUAGE</a>, char maskchar=0, const std::string &altformat=\"\", int timeout=0, bool beep=false, int dest=1) |
| int  | [displayInputTipWithAmount](#ga80ccc4543482b08097ff08df6b985758) (std::string &out, <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> language, const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount, <a href="namespacevfisdi.md#a59f74bf9ae55ffd390b8806b2559021c">Currency</a> currency, char maskchar=0, const std::string &altformat=\"\", int timeout=0, bool beep=false, int dest=1) |
| int  | [displayMenu](#ga2414de266c381974616ae16049a98f2b) (const std::string &prompt, const std::vector\< std::string \> &entries, int timeout=0, bool beep=false, int dest=1) |
| int  | [displayMenu](#gacc10db22aa6042f969f329dbf0cad703) (unsigned dialog_opt, const std::string &prompt, const std::vector\< std::string \> &entries, int preselect, const std::map\< std::string, std::string \> &key_actions, const char \*header_text=0, const char \*enter_text=0, const char \*cancel_text=0, const char \*up_text=0, const char \*down_text=0, int timeout=0, int dest=1) |
| int  | [displayCardRequest](#gaef4175d6f3f65d71489a32680a8fd61f) (unsigned char tec, unsigned char mode, const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> amount, int currency, int dest=1) |
| int  | [displayCardRequest](#ga56f054652c2dcbe92fb6f52c819fd14f) (unsigned char tec, unsigned char mode, int dest=1) |
| int  | [displayCardRequest](#gaea500b47f5c11b0fdb725dc88e409499) (unsigned char tec, unsigned char mode, const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> amount, int currency, enum <a href="namespacevfisdi.md#a36a1ebacbf82d10a5db76377f8e225fd">EMVTransaction</a> txn, int dest=1) |
| int  | [displayCardRequest](#ga40b78a6727d9738c638b32e304aeee20) (unsigned char tec, unsigned char mode, enum <a href="namespacevfisdi.md#a36a1ebacbf82d10a5db76377f8e225fd">EMVTransaction</a> txn, int dest=1) |
| int  | [displayIdleScreen](#ga3465958027d8b0b80dd2eef84345d39d) (int dest=1) |
| int  | [displayIdleScreenMode](#ga3c96a2b500a3a1a03298d44242c188c7) (enum [IdleScreenMode](#gacdffce6b62c4db2a50dd9cdae6caba78) mode, int dest=1) |
| int  | [displaySignatureCapture](#gaf658018de94876a5d65e50f090fa5a63) (std::string &outformat, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &outdata, <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> lang, unsigned short timeout=0, int dest=1) |
| int  | [displayLEDs](#ga81bcd0770b43444e43fd6ab3c9489827) (bool on) |
| int  | [displayDialog](#ga0940e7bff1e3ca3f71e752e11e68e892) (const std::string &filename, std::map\< std::string, std::string \> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> lang=<a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705aabdfcddde54087079139e916b59fe058">LANGUAGE_NO_LANGUAGE</a>, bool beep=false, int dest=1) |
| int  | [displayDialog](#ga16d8bea3e5a11f7164e3ce225ece9500) (unsigned dialog_opt, const std::string &filename, std::map\< std::string, std::string \> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> lang=<a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705aabdfcddde54087079139e916b59fe058">LANGUAGE_NO_LANGUAGE</a>, int dest=1) |
| int  | [displayGetAsyncResult](#gaaa69909a79a4a18a0cdacaa103a1ad77) (enum <a href="namespacevfisdi.md#a948de32bb8a31f38655af1ad0f5a969c">DialogAsyncStatus</a> &status, int dest=1) |

## DetailedDescription {#detailed-description}

## EnumerationType Documentation {#enumeration-type-documentation}

## IdleScreenMode <a href="#gacdffce6b62c4db2a50dd9cdae6caba78" id="gacdffce6b62c4db2a50dd9cdae6caba78"></a>

<p>enum [IdleScreenMode](#gacdffce6b62c4db2a50dd9cdae6caba78)</p>

idle screen mode (if enabled in config.json), (DFA155)

| Enumerator |  |
|----|----|
| IDLE_HOTKEY_ADMIN  | <p>Admin menu can be activated using 2-5-8 (default)</p> |
| IDLE_NO_ADMIN  | <p>Admin menu is disabled</p> |
| IDEL_SHOW_ADMIN  | <p>Admin menu is enabled</p> |

## FunctionDocumentation {#function-documentation}

## displayCardRequest()\[1/4\] <a href="#gaea500b47f5c11b0fdb725dc88e409499" id="gaea500b47f5c11b0fdb725dc88e409499"></a> {#displaycardrequest-14}

<p>int displayCardRequest</p>

Show card request display according the given parameter. It can be used directly before the Card Detection command (23-01) to show the corresponding display including the contactless logo if required. Only physical card technologies are supported. For manual card data entry only this command is not to be used because the user dialog is handled automatically inside the Card Detection command. (24-06)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry \[in\] **mode** mode: 0 = default, 1 = fallback, 2 = retry \[in\] **amount** amount \[in\] **currency** currency (Currency) \[in\] **txn** EMV transaction type \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayCardRequest()\[2/4\] <a href="#gaef4175d6f3f65d71489a32680a8fd61f" id="gaef4175d6f3f65d71489a32680a8fd61f"></a> {#displaycardrequest-24}

<p>int displayCardRequest</p>

Show card request display according the given parameter. It can be used directly before the Card Detection command (23-01) to show the corresponding display including the contactless logo if required. Only physical card technologies are supported. For manual card data entry only this command is not to be used because the user dialog is handled automatically inside the Card Detection command. (24-06)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry \[in\] **mode** mode: 0 = default, 1 = fallback, 2 = retry \[in\] **amount** amount \[in\] **currency** currency (Currency) \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayCardRequest()\[3/4\] <a href="#ga40b78a6727d9738c638b32e304aeee20" id="ga40b78a6727d9738c638b32e304aeee20"></a> {#displaycardrequest-34}

<p>int displayCardRequest</p>

inline

Show card request display without amount. (24-06)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry \[in\] **mode** mode: 0 = default, 1 = fallback, 2 = retry \[in\] **txn** EMV transaction type \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayCardRequest()\[4/4\] <a href="#ga56f054652c2dcbe92fb6f52c819fd14f" id="ga56f054652c2dcbe92fb6f52c819fd14f"></a> {#displaycardrequest-44}

<p>int displayCardRequest</p>

inline

Show card request display without amount. (24-06)

**Parameters**

\[in\] **tec** bit mask of supported card technology (DFA108):1: CT smart card2: magnetic stripe4: CTLS smart card8: manual card entry \[in\] **mode** mode: 0 = default, 1 = fallback, 2 = retry \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayDialog()\[1/2\] <a href="#ga0940e7bff1e3ca3f71e752e11e68e892" id="ga0940e7bff1e3ca3f71e752e11e68e892"></a> {#displaydialog-12}

<p>int displayDialog</p>

Display customer specific HTML dialog.The dialog has to be stored in a separate user signed HTML file. The appearance of the dialog can be controlled with a corresponding CSS file. (24-0A)

**Parameters**

\[in\] **filename** HTML file name without path \[in,out\] **value** key value map containing the values for display. It gets updated by the values that have been entered in the dialog. \[in\] **lang** language \[in\] **beep** beep when text will be displayed \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

Dialog result (\>=0) or SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)


{% hint style="info" %}
GUI error codes are mapped to SDI error codes!
{% endhint %}

## displayDialog()\[2/2\] <a href="#ga16d8bea3e5a11f7164e3ce225ece9500" id="ga16d8bea3e5a11f7164e3ce225ece9500"></a> {#displaydialog-22}

<p>int displayDialog</p>

Display customer specific HTML dialog.The dialog has to be stored in a separate user signed HTML file. The appearance of the dialog can be controlled with a corresponding CSS file. (24-0A)

**Parameters**

\[in\] **dialog_opt** dialog options (DialogOptions) (DFA13D) \[in\] **filename** HTML file name without path \[in,out\] **value** key value map containing the values for display. It gets updated by the values that have been entered in the dialog. \[in\] **lang** language \[in\] **beep** beep when text will be displayed \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

Dialog result (\>=0) or SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)


{% hint style="info" %}
GUI error codes are mapped to SDI error codes!
{% endhint %}

## displayGetAsyncResult() <a href="#gaaa69909a79a4a18a0cdacaa103a1ad77" id="gaaa69909a79a4a18a0cdacaa103a1ad77"></a>

<p>int displayGetAsyncResult</p>

get the result of an input started with dialog option DLG_ASYNC

**Parameters**

\[out\] **status** async dialog status \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

Dialog result (\>=0) or SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayIdleScreen() <a href="#ga3465958027d8b0b80dd2eef84345d39d" id="ga3465958027d8b0b80dd2eef84345d39d"></a>

<p>int displayIdleScreen</p>

Display idle screen, check the SDI server documentation for more information on the idle screen (24-07)

**Parameters**

\[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayIdleScreenMode() <a href="#ga3c96a2b500a3a1a03298d44242c188c7" id="ga3c96a2b500a3a1a03298d44242c188c7"></a>

<p>int displayIdleScreenMode</p>

Display idle screen with selecting admin mode, check the SDI server documentation for more information on the idle screen (24-07)

**Parameters**

\[in\] **mode** idle screen mode \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayInput() <a href="#ga1318cae26cf697940b77f5ae3cd7b836" id="ga1318cae26cf697940b77f5ae3cd7b836"></a>

<p>int displayInput</p>

secure input (24-04)

**Parameters**

\[out\] **out** entered value \[in\] **type** InputType \[in\] **language** language (e.g. LANGUAGE_ENGLISH) \[in\] **maskchar** masking character in the range 20..7E, 0 disables masking character \[in\] **altformat** alternate format string, if not empty \[in\] **timeout** timeout in seconds, 0 means no timeout \[in\] **beep** beep when text will be displayed \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayInputTipWithAmount() <a href="#ga80ccc4543482b08097ff08df6b985758" id="ga80ccc4543482b08097ff08df6b985758"></a>

<p>int displayInputTipWithAmount</p>

secure tip input with display of the payment amount (24-04)

**Parameters**

\[out\] **out** entered value \[in\] **language** language (e.g. LANGUAGE_ENGLISH) \[in\] **amount** payment amount \[in\] **currency** currency \[in\] **maskchar** masking character in the range 20..7E, 0 disables masking character \[in\] **altformat** alternate format string, if not empty \[in\] **timeout** timeout in seconds, 0 means no timeout \[in\] **beep** beep when text will be displayed \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayLEDs() <a href="#ga81bcd0770b43444e43fd6ab3c9489827" id="ga81bcd0770b43444e43fd6ab3c9489827"></a>

<p>int displayLEDs</p>

Activate / deactivate display of virtual CTLS LED area on the display. The command itself doesn\'t change the display at all. The display content will be updated with the next screen update. The payment application is responsible for the correct command order. (24-09)

**Parameters**

\[in\] **on** true to activate, false to deactivate

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayMenu()\[1/2\] <a href="#ga2414de266c381974616ae16049a98f2b" id="ga2414de266c381974616ae16049a98f2b"></a> {#displaymenu-12}

<p>int displayMenu</p>

display menu (24-05)

**Parameters**

\[in\] **prompt** menu prompt \[in\] **dialog_opt** dialog options (DialogOptions) (DFA13D) \[in\] **entries** menu entries \[in\] **timeout** timeout in seconds, 0 means no timeout \[in\] **beep** beep when text will be displayed \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

Selected menu entry (first menu entry has index 0) (\>=0) or SDI error code (\<0).


{% hint style="info" %}
GUI error codes are mapped to SDI error codes!
{% endhint %}

## displayMenu()\[2/2\] <a href="#gacc10db22aa6042f969f329dbf0cad703" id="gacc10db22aa6042f969f329dbf0cad703"></a> {#displaymenu-22}

<p>int displayMenu</p>

display menu (24-05)

**Parameters**

\[in\] **prompt** menu prompt (DFA00A) \[in\] **dialog_opt** dialog options (DialogOptions) (DFA13D) \[in\] **entries** menu entries (DFA00B) \[in\] **preselect** if \>0 preselected menu entry, index of first entry is 1 (DFA00C) \[in\] **key_actions** (FFA106) \[in\] **header_text** optional header text. If provided flag DLG_NO_HEADER is ignored. (DFA143) \[in\] **enter_text** optional enter button text. (DFA13E) \[in\] **cancel_text** optional cancel button text. (DFA140) \[in\] **up_text** optional up button text. (DFA141) \[in\] **down_text** optional down button text. (DFA142) \[in\] **timeout** timeout in seconds, 0 means no timeout \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

Selected menu entry (first menu entry has index 1) / exit code (\>=0) or SDI error code (\<0).


{% hint style="info" %}
IMPORTANT: This function uses a different indexing of menu entries than the other (old) displayMenu function. The reason for this is that SDI uses indexes starting at 1 and mapping the menu index to be 0-based could collide with return values configured in key_actions so that this mapping can no longer be provided.
{% endhint %}
{% hint style="info" %}
GUI error codes are mapped to SDI error codes!
{% endhint %}

## displaySignatureCapture() <a href="#gaf658018de94876a5d65e50f090fa5a63" id="gaf658018de94876a5d65e50f090fa5a63"></a>

<p>int displaySignatureCapture</p>

Show signature capture dialog (24-08)

**Parameters**

\[out\] **outformat** signature format, e.g. \"png\" \[out\] **outdata** signature data \[in\] **lang** language (e.g. LANGUAGE_ENGLISH) \[in\] **timeout** timeout in seconds, 0 to deactivate timeout \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayText()\[1/3\] <a href="#gacfe3552d7e940337249c23e10250e3f2" id="gacfe3552d7e940337249c23e10250e3f2"></a> {#displaytext-13}

<p>int displayText</p>

inline

display text using display template_id=1 and data_name=\"text\" (24-03)

**Parameters**

\[in\] **data_value** display data value (e.g UTF-8 coded text string) \[in\] **timeout** timeout in seconds, 0 means no timeout \[in\] **confirm** confirmation requested \[in\] **beep** beep when text will be displayed \[in\] **dest** display destination: countertop=1, EPP=2

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayText()\[2/3\] <a href="#ga440d80337e047a445a11d9c4a2e41de7" id="ga440d80337e047a445a11d9c4a2e41de7"></a> {#displaytext-23}

<p>int displayText</p>

display text (24-03)

**Parameters**

\[in\] **template_id** display template identifier (DFA010) \[in\] **data_name** display data name (DFA012) \[in\] **data_value** display data value (e.g UTF-8 coded text string) (DFA013) \[in\] **timeout** timeout in seconds, 0 means no timeout (DFA005) \[in\] **confirm** confirmation requested (DFA006) \[in\] **beep** beep when text will be displayed (DFA00D) \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## displayText()\[3/3\] <a href="#ga3947b5121e12c60255720f0e4b65ade0" id="ga3947b5121e12c60255720f0e4b65ade0"></a> {#displaytext-33}

<p>int displayText</p>

display text (24-03)

**Parameters**

\[in\] **template_id** display template identifier (DFA010) \[in\] **dialog_opt** dialog options (DialogOptions) (DFA13D) \[in\] **value** display data key value map (FFA011) \[in\] **key_actions** (FFA106) \[in\] **header_text** optional header text. If provided flag DLG_NO_HEADER is ignored. (DFA143) \[in\] **enter_text** optional enter button text. If provided flag DLG_ENTER_KEY is implicitly added. (DFA13E) \[in\] **clear_text** optional clear button text. If provided flag DLG_CLEAR_KEY is implicitly added. (DFA13F) \[in\] **cancel_text** optional cancel button text. If provided flag DLG_CANCEL_KEY is implicitly added. (DFA140) \[in\] **timeout** timeout in seconds, 0 means no timeout (DFA005) \[in\] **dest** display destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)
