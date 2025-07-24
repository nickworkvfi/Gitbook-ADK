---
hidden: true
title: Dialog invocation return values
---

[Variables](#var-members)

Return values from <a href="classlibsdi_1_1_dialog.md#a6c0c8abff6439cb7ff87d62cd27d0934">display()</a>, <a href="classlibsdi_1_1_dialog.md#aa009968eec1dfccd208de74b02751faf">secureInput()</a>, <a href="classlibsdi_1_1_dialog.md#a5051e1a28471ee0017c86d442e2b2aaa">htmlDialog()</a>, <a href="classlibsdi_1_1_dialog.md#a107276ae07528d74dcf34e02b20917a9">menu()</a>, <a href="classlibsdi_1_1_dialog.md#a3f9167afa0b6593b06560072bf94be9e">requestCard()</a> and <a href="classlibsdi_1_1_dialog.md#a41c8e442425f8a584b0c85e2837807f3">captureSignature()</a> are defined as integer values according to <a href="gui__error_8h.md">html/gui_error.h</a> to be able to return a positive value for the selected menu item. [More\...](#details)

|  |  |
|----|----|
| Variables |  |
| const static int  | [DIALOG_SUCCESS](#ga5b6b3dbaac7db77ddf61aba3e56f96a8) = 0 |
|   | Dialog invocation return value on success [More\...](#ga5b6b3dbaac7db77ddf61aba3e56f96a8)<br/> |
| const static int  | [DIALOG_CANCEL_PRESSED](#ga754daf04821eeb5ba34d99aabc441ac1) = -1 |
|   | Dialog invocation return value in case of cancel key pressed [More\...](#ga754daf04821eeb5ba34d99aabc441ac1)<br/> |
| const static int  | [DIALOG_TIMEOUT](#ga278af37213f4919300755bf8538470a5) = -3 |
|   | Dialog invocation return value in case dialog timeout [More\...](#ga278af37213f4919300755bf8538470a5)<br/> |
| const static int  | [DIALOG_SYS_ABORT](#gab24d917fd8f0be51dc1d3c787443343b) = -8 |
|   | Dialog invocation return value in case of abort by *SDI Sys Abort* (20-02), e.g. <a href="classlibsdi_1_1_dialog.md#a224765e61f087ca95b7eded9a3bf0e0c">abort()</a> [More\...](#gab24d917fd8f0be51dc1d3c787443343b)<br/> |
| const static int  | [DIALOG_CLIENT_ERROR](#gaeb5d38cd30058e5f63b978b7b2b9d2d9) = -14 |
|   | Dialog invocation return value in case of client side error [More\...](#gaeb5d38cd30058e5f63b978b7b2b9d2d9)<br/> |
| const static int  | [DIALOG_SDI_SW12](#gae2484756f41700172f08fdbefc82a3f8) = -15 |
|   | Dialog invocation return value in case of other SDI status word [More\...](#gae2484756f41700172f08fdbefc82a3f8)<br/> |
| const static int  | [DIALOG_NO_ASYNC_DIALOG](#gad2238911c1c10e0e5f72ba0d930c2601) = 1 |
|   | <a href="classlibsdi_1_1_dialog.md#a5dc7bec3fd34264255ba456fb5522839">getAsyncResult()</a> return value when there is no asynchronous dialog running [More\...](#gad2238911c1c10e0e5f72ba0d930c2601)<br/> |
| const static int  | [DIALOG_IN_PROGRESS](#gafe6b72ba6b4f2047874c33ab4f207997) = 2 |
|   | <a href="classlibsdi_1_1_dialog.md#a5dc7bec3fd34264255ba456fb5522839">getAsyncResult()</a> return value when the asynchronous dialog is in progress [More\...](#gafe6b72ba6b4f2047874c33ab4f207997)<br/> |

## DetailedDescription {#detailed-description}

Return values from <a href="classlibsdi_1_1_dialog.md#a6c0c8abff6439cb7ff87d62cd27d0934">display()</a>, <a href="classlibsdi_1_1_dialog.md#aa009968eec1dfccd208de74b02751faf">secureInput()</a>, <a href="classlibsdi_1_1_dialog.md#a5051e1a28471ee0017c86d442e2b2aaa">htmlDialog()</a>, <a href="classlibsdi_1_1_dialog.md#a107276ae07528d74dcf34e02b20917a9">menu()</a>, <a href="classlibsdi_1_1_dialog.md#a3f9167afa0b6593b06560072bf94be9e">requestCard()</a> and <a href="classlibsdi_1_1_dialog.md#a41c8e442425f8a584b0c85e2837807f3">captureSignature()</a> are defined as integer values according to <a href="gui__error_8h.md">html/gui_error.h</a> to be able to return a positive value for the selected menu item.

## VariableDocumentation {#variable-documentation}

## DIALOG_CANCEL_PRESSED <a href="#ga754daf04821eeb5ba34d99aabc441ac1" id="ga754daf04821eeb5ba34d99aabc441ac1"></a>

<p>const static int DIALOG_CANCEL_PRESSED = -1</p>

static

Dialog invocation return value in case of cancel key pressed

Equal to *UI_ERR_ABORT*, mapped from SDI: <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9ab03418a12598a6c3e8688c1fd9d79260">SDI_SW12_CANCELED_BY_USER</a>

## DIALOG_CLIENT_ERROR <a href="#gaeb5d38cd30058e5f63b978b7b2b9d2d9" id="gaeb5d38cd30058e5f63b978b7b2b9d2d9"></a>

<p>const static int DIALOG_CLIENT_ERROR = -14</p>

static

Dialog invocation return value in case of client side error

Equal to *UI_ERR_CONNECTION_LOST*, use <a href="classlibsdi_1_1_sdi_base.md#a167a672bfb8c6f222c4b2a255b053aec">getClientError()</a> for closer analysis.

## DIALOG_IN_PROGRESS <a href="#gafe6b72ba6b4f2047874c33ab4f207997" id="gafe6b72ba6b4f2047874c33ab4f207997"></a>

<p>const static int DIALOG_IN_PROGRESS = 2</p>

static

<a href="classlibsdi_1_1_dialog.md#a5dc7bec3fd34264255ba456fb5522839">getAsyncResult()</a> return value when the asynchronous dialog is in progress

## DIALOG_NO_ASYNC_DIALOG <a href="#gad2238911c1c10e0e5f72ba0d930c2601" id="gad2238911c1c10e0e5f72ba0d930c2601"></a>

<p>const static int DIALOG_NO_ASYNC_DIALOG = 1</p>

static

<a href="classlibsdi_1_1_dialog.md#a5dc7bec3fd34264255ba456fb5522839">getAsyncResult()</a> return value when there is no asynchronous dialog running

## DIALOG_SDI_SW12 <a href="#gae2484756f41700172f08fdbefc82a3f8" id="gae2484756f41700172f08fdbefc82a3f8"></a>

<p>const static int DIALOG_SDI_SW12 = -15</p>

static

Dialog invocation return value in case of other SDI status word

Equal to *UI_ERR_PROTOCOL*, use <a href="classlibsdi_1_1_sdi_base.md#a4058a7890507b92a38f3921ff4bf863b">getSdiSw12()</a> for closer analysis.

## DIALOG_SUCCESS <a href="#ga5b6b3dbaac7db77ddf61aba3e56f96a8" id="ga5b6b3dbaac7db77ddf61aba3e56f96a8"></a>

<p>const static int DIALOG_SUCCESS = 0</p>

static

Dialog invocation return value on success

Equal to *UI_ERR_OK*, mapped from SDI: <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9ae57ec322bacc511a361f808f98f564f3">SDI_SW12_SUCCESS</a>

## DIALOG_SYS_ABORT <a href="#gab24d917fd8f0be51dc1d3c787443343b" id="gab24d917fd8f0be51dc1d3c787443343b"></a>

<p>const static int DIALOG_SYS_ABORT = -8</p>

static

Dialog invocation return value in case of abort by *SDI Sys Abort* (20-02), e.g. <a href="classlibsdi_1_1_dialog.md#a224765e61f087ca95b7eded9a3bf0e0c">abort()</a>

Equal to *UI_ERR_CANCELLED*, mapped from SDI: <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9afdd1028b32db6ae5abaa47bb3e7560bc">SDI_SW12_EXECUTION_ABORTED</a>

## DIALOG_TIMEOUT <a href="#ga278af37213f4919300755bf8538470a5" id="ga278af37213f4919300755bf8538470a5"></a>

<p>const static int DIALOG_TIMEOUT = -3</p>

static

Dialog invocation return value in case dialog timeout

Equal to *UI_ERR_TIMEOUT*, mapped from SDI: <a href="namespacelibsdi.md#a0af9b7a9de719071122f396865ecebc9a476c3b73e5ff6945ae5a33a27d13d882">SDI_SW12_EXECUTION_TIMEOUT</a>
