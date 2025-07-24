---
hidden: true
title: Graphical User Interface
---

[Namespaces](#namespaces) \| [Macros](#define-members) \| [Enumerations](#enum-members)

|            |                                                  |
|------------|--------------------------------------------------|
| Namespaces |                                                  |
|            | <a href="namespacevfigui.md">vfigui</a> |

|          |                                                |
|----------|------------------------------------------------|
| Macros   |                                                |
| #define  | [DllSpec](#gad7c2e1cb200073ed64c64285a5f37231) |
| #define  | [DllSpec](#gad7c2e1cb200073ed64c64285a5f37231) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [UIError](#ga83f7c4e297519549c9a54137e2eab4fe) {<br/>  [UI_ERR_OK](#gga83f7c4e297519549c9a54137e2eab4fea0e9295b37bfaa07f3b8e2b2f666bcb08) = 0, [UI_ERR_ABORT](#gga83f7c4e297519549c9a54137e2eab4fea6dc64819a8719e862f267b4c31adaa2b) = -1, [UI_ERR_BACK](#gga83f7c4e297519549c9a54137e2eab4fea15472ee6eda060f2cf3b851873c6d36d) = -2, [UI_ERR_TIMEOUT](#gga83f7c4e297519549c9a54137e2eab4fea25c0f4789a50189db529c844fbc5395b) = -3,<br/>  [UI_ERR_PROPERTY](#gga83f7c4e297519549c9a54137e2eab4feadbe8a9e9b76ccd414fe3298b7c0fb547) = -4, [UI_ERR_WRONG_PIN](#gga83f7c4e297519549c9a54137e2eab4fea0feebab162cfb6cdcee4d17207ce129a) = -5, [UI_ERR_PARAMETER](#gga83f7c4e297519549c9a54137e2eab4fea4fb70ece1e94f28779bba6389188e2de) = -6, [UI_ERR_PERMISSION](#gga83f7c4e297519549c9a54137e2eab4feab947423fdbe03bf4ee7d4132a7470271) = -7,<br/>  [UI_ERR_CANCELLED](#gga83f7c4e297519549c9a54137e2eab4feae72b16ac91ed2f069ed4e315c0a66879) = -8, [UI_ERR_REGION](#gga83f7c4e297519549c9a54137e2eab4feadbd688cec162b05d77aab8797757c186) = -9, [UI_ERR_FAIL](#gga83f7c4e297519549c9a54137e2eab4fea0a03c8c4c8aeebc5f13764f769f42f4c) = -10, [UI_ERR_UNSUPPORTED](#gga83f7c4e297519549c9a54137e2eab4fea781613b007357a1ac3bb993fe3b3762e) = -11,<br/>  [UI_ERR_INVALID](#gga83f7c4e297519549c9a54137e2eab4fea2c2b0c364f6e000b6095f46251bce01d) = -12, [UI_ERR_WAIT_TIMEOUT](#gga83f7c4e297519549c9a54137e2eab4fea4f30958efdaaa591b1c9a6fa002c8052) = -13, [UI_ERR_CONNECTION_LOST](#gga83f7c4e297519549c9a54137e2eab4fea2ee7809161321af15ef84d5655faeb38) = -14, [UI_ERR_PROTOCOL](#gga83f7c4e297519549c9a54137e2eab4fea96cc0295432f6a49261ad54fe52480ee) = -15,<br/>  [UI_ERR_SCRIPT](#gga83f7c4e297519549c9a54137e2eab4fea3a64249431f7850af3d70beb6003e656) = -16, [UI_ERR_FILE_READ](#gga83f7c4e297519549c9a54137e2eab4feab1e3d97746123a542bab13edcfdc9b6a) = -17, [UI_ERR_RESTRICTED](#gga83f7c4e297519549c9a54137e2eab4fea8114356c722648f4ee88fd9478c790b7) = -18, [UI_ERR_MODIFIED](#gga83f7c4e297519549c9a54137e2eab4feab37b7cd2ae744a5e47a8ef15c1b0a738) = -19,<br/>  [UI_ERR_ACTION](#gga83f7c4e297519549c9a54137e2eab4fea53bd48814f477e41d8ef8698e1416502) = -20, [UI_ERR_DISPLAY](#gga83f7c4e297519549c9a54137e2eab4fea0f0b76a16470d668ca5249cce7984e28) = -21, [UI_ERR_PIN_ENTRY_DENIED](#gga83f7c4e297519549c9a54137e2eab4fea8f9428454f7865ce15b6fdc8e0ac46b3) = -22<br/>} |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## DllSpec\[1/2\] <a href="#gad7c2e1cb200073ed64c64285a5f37231" id="gad7c2e1cb200073ed64c64285a5f37231"></a> {#dllspec-12}

<p>#define DllSpec</p>

## DllSpec\[2/2\] <a href="#gad7c2e1cb200073ed64c64285a5f37231" id="gad7c2e1cb200073ed64c64285a5f37231"></a> {#dllspec-22}

<p>#define DllSpec</p>

## EnumerationType Documentation {#enumeration-type-documentation}

## UIError <a href="#ga83f7c4e297519549c9a54137e2eab4fe" id="ga83f7c4e297519549c9a54137e2eab4fe"></a>

<p>enum [UIError](#ga83f7c4e297519549c9a54137e2eab4fe)</p>

Verifone GUI namespace error codes returned by the functions

| Enumerator |  |
|----|----|
| UI_ERR_OK  | <p>no error</p> |
| UI_ERR_ABORT  | <p>abort by user</p> |
| UI_ERR_BACK  | <p>user selected back button</p> |
| UI_ERR_TIMEOUT  | <p>dialog timeout</p> |
| UI_ERR_PROPERTY  | <p>the property does not exist</p> |
| UI_ERR_WRONG_PIN  | <p>wrong PIN was entered</p> |
| UI_ERR_PARAMETER  | <p>parameter error</p> |
| UI_ERR_PERMISSION  | <p>insufficient permissions</p> |
| UI_ERR_CANCELLED  | <p>the dialog has been cancelled by callback or by displaying another dialog</p> |
| UI_ERR_REGION  | <p>the region is not known</p> |
| UI_ERR_FAIL  | <p>generic error</p> |
| UI_ERR_UNSUPPORTED  | <p>the function requested is not supported on the current platform/device/\...</p> |
| UI_ERR_INVALID  | <p>an invalid transaction ID was provided</p> |
| UI_ERR_WAIT_TIMEOUT  | <p>timeout while waiting for the result of an async function</p> |
| UI_ERR_CONNECTION_LOST  | <p>cannot connect or lost connection to server</p> |
| UI_ERR_PROTOCOL  | <p>data received violated the protocol</p> |
| UI_ERR_SCRIPT  | <p>error occurred during script processing, check <a href="namespacevfigui.md#a6f12172a8274bd06e3f1bca6a9c4d9de">uiScriptError()</a> for more information about the error</p> |
| UI_ERR_FILE_READ  | <p>the file was not found or could not be read</p> |
| UI_ERR_RESTRICTED  | <p>the dialog was not shown due to security restrictions, e.g. using more than 3 buttons</p> |
| UI_ERR_MODIFIED  | <p>the old layout does not match</p> |
| UI_ERR_ACTION  | <p>invalid action provided</p> |
| UI_ERR_DISPLAY  | <p>invalid display</p> |
| UI_ERR_PIN_ENTRY_DENIED  | <p>requesting too many PIN sessions in a short period of time.</p> |
