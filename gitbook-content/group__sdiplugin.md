---
hidden: true
title: SDI plugin commands
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| int  | [pluginCmd](#gacef96fd0fab889b9118f552421198b63) (unsigned char plugin, unsigned char cmd, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &in, <a href="classvfisdi_1_1_s_d_i_client.md#a64b5be62be31dcda165d2c6c3c262fb5">bytevector</a> &out) |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## pluginCmd() <a href="#gacef96fd0fab889b9118f552421198b63" id="gacef96fd0fab889b9118f552421198b63"></a>

<p>int pluginCmd</p>

Send an SDI plugin command

**Parameters**

\[in\] **plugin** plugin ID \[in\] **cmd** command ID \[in\] **in** command data \[out\] **out** plugin response data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)
