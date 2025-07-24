---
hidden: true
title: SDI and EMV callbacks
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| void  | [setCallbackData](#gac5c6159718bd73d3bf80d320e0db5a08) (void \*d) |
| void  | [setStatusCallback](#ga823e5713481277604b8e8740b7908953) (void(\*cb)(void \*data, int digits, std::string &display)) |
| void  | [setControlCallback](#gaf1aa6cc653c07adc697e2cb2cc4fa6d4) (int(\*cb)(void \*data, <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &t)) |
| void  | [setNotifyCallback](#ga6cb13ee0fa80d5816d673febab88e69b) (void(\*cb)(void \*data, <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &t)) |
| void  | [setNavigatorCallback](#ga1dfc34b165f679f65a6b6eac6e63837d) (void(\*cb)(void \*data, int status)) |
| void  | [setCardDetectCallback](#gafc4be5e72143f6ea12185dec087ef197) (void(\*cb)(void \*data, int retcode, unsigned char tec_out, <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &emv_out, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &plugin_result)) |
| void  | [setEMVCallback](#ga30c8aba2dc67708b8880967576f7473a) (void(\*cb)(void \*data, unsigned type, <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &in, <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &out)) |
| void  | [setAsyncCardDetectEmvCallback](#gae2dc52ee22f4abe358ca411baaeef759) (void(\*cb)(void \*data, unsigned type, <a href="structvfisdi_1_1_e_m_v_txn.md">EMVTxn</a> &in)) |
| void  | [setCardRemovalCallback](#gae7bce74819aa4fb698febc5d3bfd0121) (void(\*cb)(void \*data)) |
| void  | [setDisconnectCallback](#gade9449ce1e2d63670d4e53f83d9fea1c) (void(\*cb)(void \*data)) |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## setAsyncCardDetectEmvCallback() <a href="#gae2dc52ee22f4abe358ca411baaeef759" id="gae2dc52ee22f4abe358ca411baaeef759"></a>

<p>void setAsyncCardDetectEmvCallback</p>

set async card detect callback

**Parameters**

\[in\] **cb** pointer to callback function, NULL to disable callback

The callback gets the following parameters:

**Parameters**

\[in\] **data** data pointer as set by setCallbackData() \[in\] **type** callback type (see EMVCallbackType) \[in\] **in** TLV data received from SDI server


{% hint style="info" %}
It is safe it the callback modifies *in*, modifications are ignored.
{% endhint %}

## setCallbackData() <a href="#gac5c6159718bd73d3bf80d320e0db5a08" id="gac5c6159718bd73d3bf80d320e0db5a08"></a>

<p>void setCallbackData</p>

set callback data passed on as data pointer to the callback functions. The data pointer is shared between all callback functions.

**Parameters**

\[in\] **d** callback data pointer

## setCardDetectCallback() <a href="#gafc4be5e72143f6ea12185dec087ef197" id="gafc4be5e72143f6ea12185dec087ef197"></a>

<p>void setCardDetectCallback</p>

set card detect callback

**Parameters**

\[in\] **cb** pointer to callback function, NULL to disable callback

The callback gets the following parameters:

**Parameters**

\[in\] **data** data pointer as set by setCallbackData() \[in\] **retcode** return code that would have been returned in crdPollDetect \[in\] **tec_out** selected card technology (DFA108) \[in\] **emv_out** emv data \[in\] **plugin_result** plugin result of the card detect trigger (DFA101)


{% hint style="info" %}
Important: The callback function must not invoke any method of the same <a href="classvfisdi_1_1_s_d_i_client.md">SDIClient</a> object or a deadlock may occur.
{% endhint %}

## setCardRemovalCallback() <a href="#gae7bce74819aa4fb698febc5d3bfd0121" id="gae7bce74819aa4fb698febc5d3bfd0121"></a>

<p>void setCardRemovalCallback</p>

set card removal callback

**Parameters**

\[in\] **cb** pointer to callback function, NULL to disable callback

The callback gets the following parameters:

**Parameters**

\[in\] **data** data pointer as set by setCallbackData()

## setControlCallback() <a href="#gaf1aa6cc653c07adc697e2cb2cc4fa6d4" id="gaf1aa6cc653c07adc697e2cb2cc4fa6d4"></a>

<p>void setControlCallback</p>

set control callback

**Parameters**

\[in\] **cb** pointer to callback function, NULL to disable callback

The callback gets the following parameters:

**Parameters**

\[in\] **data** data pointer as set by setCallbackData() \[in\] **t** TLV data received from SDI server

### Returns

\[unsupported block\]
{% hint style="info" %}
ALT_INPUT_FORMAT_STRING and CONTINUATION_MODE can be set by updating *t*.
{% endhint %}
{% hint style="info" %}
Important: The callback function must not invoke any method of the same <a href="classvfisdi_1_1_s_d_i_client.md">SDIClient</a> object or a deadlock may occur.
{% endhint %}
{% hint style="info" %}
It is safe if the callback modifies *t*.
{% endhint %}

## setDisconnectCallback() <a href="#gade9449ce1e2d63670d4e53f83d9fea1c" id="gade9449ce1e2d63670d4e53f83d9fea1c"></a>

<p>void setDisconnectCallback</p>

set callback, that gets invoked when the connection to SDI server has been closed by SDI server

The callback gets the following parameters:

**Parameters**

\[in\] **data** data pointer as set by setCallbackData()

## setEMVCallback() <a href="#ga30c8aba2dc67708b8880967576f7473a" id="ga30c8aba2dc67708b8880967576f7473a"></a>

<p>void setEMVCallback</p>

set EMV callback

**Parameters**

\[in\] **cb** pointer to callback function, NULL to disable callback

The callback gets the following parameters:

**Parameters**

\[in\] **data** data pointer as set by setCallbackData() \[in\] **type** callback type (see EMVCallbackType) \[in\] **in** TLV data received from SDI server \[out\] **out** TLV data to be sent to SDI server


{% hint style="info" %}
It is safe it the callback modifies *in*, modifications are ignored.
{% endhint %}

## setNavigatorCallback() <a href="#ga1dfc34b165f679f65a6b6eac6e63837d" id="ga1dfc34b165f679f65a6b6eac6e63837d"></a>

<p>void setNavigatorCallback</p>

set navigator callback

**Parameters**

\[in\] **cb** pointer to callback function, NULL to disable callback

The callback gets the following parameters:

**Parameters**

\[in\] **data** data pointer as set by setCallbackData() \[in\] **status** navigator status:00 Digit selected01 OK selected02 Cancel selected03 Backspace/Clear selected04 Multiple touches detected05 Pin digit underflow06 Pin digit overflow10 Selection confirmed


{% hint style="info" %}
Important: The callback function must not invoke any method of the same <a href="classvfisdi_1_1_s_d_i_client.md">SDIClient</a> object or a deadlock may occur.
{% endhint %}

## setNotifyCallback() <a href="#ga6cb13ee0fa80d5816d673febab88e69b" id="ga6cb13ee0fa80d5816d673febab88e69b"></a>

<p>void setNotifyCallback</p>

set notifycallback

**Parameters**

\[in\] **cb** pointer to callback function, NULL to disable callback

The callback gets the following parameters:

**Parameters**

\[in\] **data** data pointer as set by setCallbackData() \[in\] **t** TLV data received from SDI server


{% hint style="info" %}
Important: The callback function must not invoke any method of the same <a href="classvfisdi_1_1_s_d_i_client.md">SDIClient</a> object or a deadlock may occur.
{% endhint %}
{% hint style="info" %}
It is safe it the callback modifies *t*, modifications are ignored.
{% endhint %}

## setStatusCallback() <a href="#ga823e5713481277604b8e8740b7908953" id="ga823e5713481277604b8e8740b7908953"></a>

<p>void setStatusCallback</p>

set status callback

**Parameters**

\[in\] **cb** pointer to callback function, NULL to disable callback

The callback gets the following parameters:

**Parameters**

\[in\] **data** data pointer as set by setCallbackData() \[in\] **digits** number of digits entered so far \[in\] **display** string for display


{% hint style="info" %}
Important: The callback function must not invoke any method of the same <a href="classvfisdi_1_1_s_d_i_client.md">SDIClient</a> object or a deadlock may occur.
{% endhint %}
