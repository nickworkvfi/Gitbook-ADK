---
hidden: true
title: PIN entry interface
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| int  | [pedGetPIN](#gab8571dbdf371d728c742476ba7de0c1d) (const std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \> &btn=std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \>(), bool bypass=false, int timeout=300, int navigator_mode=0, int min_digits=4, int max_digits=12, <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> lang=<a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705aabdfcddde54087079139e916b59fe058">LANGUAGE_NO_LANGUAGE</a>) |
| int  | [pedGetPIN](#ga78cb1f9e229489cf6c0ec6125d007350) (unsigned pin_options, const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> amount=0, int currency=-1, const char \*applabel=0, const char \*headline=0, unsigned pwd_char=0, const std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \> &btn=std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \>(), unsigned bypass=<a href="namespacevfisdi.md#a7f70949d162e40270307b2aaf481e2b2ac8b620f3612cc9f6539913ac47545459">BYPASS_DISABLED</a>, int timeout=300, int interchar_timeout=0, int min_digits=4, int max_digits=12, <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> lang=<a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705aabdfcddde54087079139e916b59fe058">LANGUAGE_NO_LANGUAGE</a>) |
| int  | [pedGetPIN](#gac3ae9329871381b96ffe300f58d54bf7) (bool bypass=false, int timeout=300, int min_digits=4, int max_digits=12, <a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705">Language</a> lang=<a href="namespacevfisdi.md#a315ca917ad583797f709ea477dd28705aabdfcddde54087079139e916b59fe058">LANGUAGE_NO_LANGUAGE</a>) |
| int  | [pedSetPINTimeout](#gae0e5bc21aac331f55db87f5c8c32b779) (unsigned short timeout_sec) |
| void  | [pedConfirmKey](#ga9b28c032314828db9f193eea6092001e) () |
| int  | [pedStartPIN](#ga8f85134183cb72f71870c6cf81a6f85e) (const std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \> &btn=std::vector\< <a href="classvfisdi_1_1_s_d_i_client.md#structvfisdi_1_1_s_d_i_client_1_1_touch_button">TouchButton</a> \>(), int bypass_key=0, int navigator_mode=0, int minlen=4, int maxlen=12, bool clear_all=false, bool auto_enter=false) |
| int  | [pedPollPIN](#ga47195163ef92790cfbaafaa129f02279) (<a href="namespacevfisdi.md#a7cb4a518b7083f951a212048cbf2db08">PINStatus</a> &pin, int &digits, int &status) |
| int  | [pedStopPIN](#ga2ce1660af41bbb184509a29064ef5231) () |
| int  | [pedSetPINInputParameter](#ga17e126450dd93ce68a12128c361141ea) (bool clear_all) |
| int  | [pedSetPINInputParameter](#gaeed75236f49331fc270e3dfe04fe3f73) (unsigned pin_options, const char \*headline=0, unsigned pwd_char=0, unsigned bypass=<a href="namespacevfisdi.md#a7f70949d162e40270307b2aaf481e2b2ac8b620f3612cc9f6539913ac47545459">BYPASS_DISABLED</a>, int interchar_timeout=0, int min_digits=4, int max_digits=12, int dest=1) |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## pedConfirmKey() <a href="#ga9b28c032314828db9f193eea6092001e" id="ga9b28c032314828db9f193eea6092001e"></a>

<p>void pedConfirmKey</p>

confirm the selected key in Navigator mode 2 (20-20)

## pedGetPIN()\[1/3\] <a href="#gac3ae9329871381b96ffe300f58d54bf7" id="gac3ae9329871381b96ffe300f58d54bf7"></a> {#pedgetpin-13}

<p>int pedGetPIN</p>

inline

PIN entry using keypad, PIN status updates trigger invocation of the status callback set using <a href="group__sdicallback.md#ga823e5713481277604b8e8740b7908953">setStatusCallback()</a> (22-01)

**Parameters**

\[in\] **bypass** true if bypass is enabled, else false \[in\] **timeout** timeout in seconds \[in\] **min_digits** minimum number of PIN digits \[in\] **max_digits** maximum number of PIN digits \[in\] **lang** language, default is current terminal/transaction language

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## pedGetPIN()\[2/3\] <a href="#gab8571dbdf371d728c742476ba7de0c1d" id="gab8571dbdf371d728c742476ba7de0c1d"></a> {#pedgetpin-23}

<p>int pedGetPIN</p>

PIN entry, PIN status updates trigger invocation of the status callback set using <a href="group__sdicallback.md#ga823e5713481277604b8e8740b7908953">setStatusCallback()</a> (22-01)

**Parameters**

\[in\] **btn** position and size of touch buttons \[in\] **bypass** true if bypass is enabled, else false \[in\] **timeout** timeout in seconds \[in\] **navigator_mode** navigator mode: 0 (disabled), 1 (mode 1) or 2 (mode 2) \[in\] **min_digits** minimum number of PIN digits \[in\] **max_digits** maximum number of PIN digits \[in\] **lang** language, default is current terminal/transaction language

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)


{% hint style="info" %}
In case of bypass ERR_PED_BYPASS is returned.
{% endhint %}

## pedGetPIN()\[3/3\] <a href="#ga78cb1f9e229489cf6c0ec6125d007350" id="ga78cb1f9e229489cf6c0ec6125d007350"></a> {#pedgetpin-33}

<p>int pedGetPIN</p>

PIN entry, PIN status updates trigger invocation of the status callback set using <a href="group__sdicallback.md#ga823e5713481277604b8e8740b7908953">setStatusCallback()</a> (22-01)

**Parameters**

\[in\] **pin_options** PIN entry options (PINEntryOptions) \[in\] **amount** payment amount (only displayed if also a valid currency is provided) \[in\] **currency** currency (Currency) or -1 \[in\] **applabel** application label for display or NULL \[in\] **headline** headline for display or NULL \[in\] **pwd_char** unicode password character code (0: default character) \[in\] **btn** position and size of touch buttons \[in\] **bypass** true if bypass is enabled, else false \[in\] **timeout** timeout in seconds \[in\] **interchar_timeout** inter character timeout in milliseconds (0: disabled) \[in\] **min_digits** minimum number of PIN digits \[in\] **max_digits** maximum number of PIN digits \[in\] **lang** language, default is current terminal/transaction language

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)


{% hint style="info" %}
In case of bypass ERR_PED_BYPASS is returned.
{% endhint %}

## pedPollPIN() <a href="#ga47195163ef92790cfbaafaa129f02279" id="ga47195163ef92790cfbaafaa129f02279"></a>

<p>int pedPollPIN</p>

poll PIN entry status (22-04)

**Parameters**

\[out\] **pin** PINSTATUS_COLLECTING while PIN is entered, PINSTATUS_OK, PINSTATUS_CANCELLED, PINSTATUS_BYPASS, PINSTATUS_TIMEOUT or PINSTATUS_ERROR when done \[out\] **digits** number of digits entered or 0xFC for bypass, 0xFD for cancel, 0xFE for timeout or 0xFF for error \[out\] **status** additional status information (e.g. for Navigator)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

Status information:

| Status | Description |
|----|----|
| <p>0x00</p> | <p>no key entered or selected</p> |
| <p>0x01</p> | <p>digit entered</p> |
| <p>0x08</p> | <p>backspace entered</p> |
| <p>0x0D</p> | <p>OK entered</p> |
| <p>0x1B</p> | <p>cancel enterd</p> |
| <p>0xD1</p> | <p>numeric key selected</p> |
| <p>0xD2</p> | <p>cancel selected</p> |
| <p>0xD3</p> | <p>backspace selected</p> |
| <p>0xDE</p> | <p>OK selected</p> |
| <p>0xDF</p> | <p>multiple touches</p> |
| <p>0xF8</p> | <p>underflow</p> |
| <p>0xF9</p> | <p>overflow</p> |

## pedSetPINInputParameter()\[1/2\] <a href="#ga17e126450dd93ce68a12128c361141ea" id="ga17e126450dd93ce68a12128c361141ea"></a> {#pedsetpininputparameter-12}

<p>int pedSetPINInputParameter</p>

Configure input parameter for PIN entry (22-06)

**Parameters**

\[in\] **clear_all** if true backspace clears all digits instead of only last one

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## pedSetPINInputParameter()\[2/2\] <a href="#gaeed75236f49331fc270e3dfe04fe3f73" id="gaeed75236f49331fc270e3dfe04fe3f73"></a> {#pedsetpininputparameter-22}

<p>int pedSetPINInputParameter</p>

Configure input parameter for PIN entry (22-06)

**Parameters**

\[in\] **pin_options** PIN entry options (PINEntryOptions) \[in\] **headline** headline for display or NULL \[in\] **pwd_char** unicode password character code (0: default character) \[in\] **bypass** true if bypass is enabled, else false \[in\] **interchar_timeout** inter character timeout in milliseconds (0: disabled) \[in\] **min_digits** minimum number of PIN digits \[in\] **max_digits** maximum number of PIN digits \[in\] **dest** destination: countertop=1, EPP=2 (DFA150)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)


{% hint style="info" %}
In case of bypass ERR_PED_BYPASS is returned.
{% endhint %}

## pedSetPINTimeout() <a href="#gae0e5bc21aac331f55db87f5c8c32b779" id="gae0e5bc21aac331f55db87f5c8c32b779"></a>

<p>int pedSetPINTimeout</p>

configure PIN timeout for pedGetPIN (22-02)

**Parameters**

\[in\] **timeout_sec** timeout in seconds

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## pedStartPIN() <a href="#ga8f85134183cb72f71870c6cf81a6f85e" id="ga8f85134183cb72f71870c6cf81a6f85e"></a>

<p>int pedStartPIN</p>

start PIN entry (22-03)

**Parameters**

\[in\] **btn** position and size of touch buttons \[in\] **bypass_key** 0: no bypass, ASCII code of bypass key, add ASCII+256 to activate direct bypass \[in\] **navigator_mode** navigator mode: 0 (disabled), 1 (mode 1) or 2 (mode 2) \[in\] **minlen** minimum PIN length \[in\] **maxlen** maximum PIN length \[in\] **clear_all** if true backspace clears all digits instead of only last one \[in\] **auto_enter** if true automatically confirm PIN if maxlen has been reached

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## pedStopPIN() <a href="#ga2ce1660af41bbb184509a29064ef5231" id="ga2ce1660af41bbb184509a29064ef5231"></a>

<p>int pedStopPIN</p>

Stop PIN entry and release resources, cancel PIN entry if required. (22-05)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)
