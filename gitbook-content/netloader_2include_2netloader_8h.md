---
hidden: true
title: netloader.h File Reference
---

[Macros](#define-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

`#include <string>`
`#include <vector>`

Include dependency graph for netloader.h:

![](netloader_2include_2netloader_8h__incl.png)

<a href="netloader_2include_2netloader_8h_source.md">Go to the source code of this file.</a>

|          |                                               |
|----------|-----------------------------------------------|
| Macros   |                                               |
| #define  | [DllSpec](#ad7c2e1cb200073ed64c64285a5f37231) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [NetLoaderResult](#a9c806f2b892df2b3a86e5b1d867bd2d3) { [NETLD_OK](#a9c806f2b892df2b3a86e5b1d867bd2d3af215ffc28a70ad9e84c66eff4223f84f), [NETLD_RUNNING](#a9c806f2b892df2b3a86e5b1d867bd2d3a9b674e4e5ea539a79af9ac516ddddc13), [NETLD_ERROR](#a9c806f2b892df2b3a86e5b1d867bd2d3af9ff6836efc79578afe59eb7effab993) } |
| enum   | [NetLoaderStatus](#a1901938f855dcfca04090c4d682f4283) {<br/>  [NETLD_REBOOT_REQUESTED](#a1901938f855dcfca04090c4d682f4283a00e68895b7ca32382cd2071ff701826a), [NETLD_STOP_REQUESTED](#a1901938f855dcfca04090c4d682f4283a60e03d44908f50e9b98ecdfbcf394945), [NETLD_DISPLAY_MESSAGE](#a1901938f855dcfca04090c4d682f4283af92897b8dc4fd248cd20b727b8589e5a), [NETLD_SET_TIME](#a1901938f855dcfca04090c4d682f4283a9e54aaef828d28a158647d7ebfa61459),<br/>  [NETLD_DOWNLOAD_FILE](#a1901938f855dcfca04090c4d682f4283a858a17c0c1f8e73f2fa2dd9ddd66aa66) =0x10, [NETLD_INSTALL_FILE](#a1901938f855dcfca04090c4d682f4283a099bc7a7e8baa238cdd38d72d8e484a2), [NETLD_DOWNLOAD_OK](#a1901938f855dcfca04090c4d682f4283ac36811050ef96c8aea0ef668fe24d4a7), [NETLD_DOWNLOAD_ERROR](#a1901938f855dcfca04090c4d682f4283aa35c4f74f5771153797d9fc58e5b6f8f),<br/>  [NETLD_INSTALL_OK](#a1901938f855dcfca04090c4d682f4283aaeb6459573a64173495a5464a364fb47), [NETLD_INSTALL_ERROR](#a1901938f855dcfca04090c4d682f4283a086a0806ee60e52609bc97c276df71f3)<br/>} |
| enum   | [NetLoaderInstallResult](#abdc69ece4ccafc7956f556ed63a78533) { [NETINST_OK](#abdc69ece4ccafc7956f556ed63a78533ab3b516fff9f3e84df64b45285a2d5bdc), [NETINST_INVALID_PARAM](#abdc69ece4ccafc7956f556ed63a78533a78c33ba9ac9ecb7270208baf4b2dd810), [NETINST_NO_SOFTWARE](#abdc69ece4ccafc7956f556ed63a78533a64594239006567bc2032abea23724a3d), [NETINST_FAIL](#abdc69ece4ccafc7956f556ed63a78533ab769adefdf8d0d55c529ac404a17f341) } |

|  |  |
|----|----|
| Functions |  |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NetLoaderResult](#a9c806f2b892df2b3a86e5b1d867bd2d3)  | [netloader_start](#ad1c52953b207d5e2120b5ae5ff8cf92b) (const char \*download_dir, void(\*status_cb)(void \*data, enum [NetLoaderStatus](#a1901938f855dcfca04090c4d682f4283) status, const char \*msg, int progress), enum [NetLoaderInstallResult](#abdc69ece4ccafc7956f556ed63a78533)(\*install_cb)(void \*data, const char \*\*files), void \*data) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [netloader_stop](#a3b10a600fb356303f94441e8b36f6441) () |

## MacroDefinition Documentation {#macro-definition-documentation}

## DllSpec <a href="#ad7c2e1cb200073ed64c64285a5f37231" id="ad7c2e1cb200073ed64c64285a5f37231"></a>

<p>#define DllSpec</p>

## EnumerationType Documentation {#enumeration-type-documentation}

## NetLoaderInstallResult <a href="#abdc69ece4ccafc7956f556ed63a78533" id="abdc69ece4ccafc7956f556ed63a78533"></a>

<p>enum [NetLoaderInstallResult](#abdc69ece4ccafc7956f556ed63a78533)</p>

Install callback result

| Enumerator |  |
|----|----|
| NETINST_OK  | <p>installation successful</p> |
| NETINST_INVALID_PARAM  | <p>invalid parameters</p> |
| NETINST_NO_SOFTWARE  | <p>no software download file provided</p> |
| NETINST_FAIL  | <p>software installation failed</p> |

## NetLoaderResult <a href="#a9c806f2b892df2b3a86e5b1d867bd2d3" id="a9c806f2b892df2b3a86e5b1d867bd2d3"></a>

<p>enum [NetLoaderResult](#a9c806f2b892df2b3a86e5b1d867bd2d3)</p>

NetLoader error code

| Enumerator |  |
|----|----|
| NETLD_OK  | <p>no error</p> |
| NETLD_RUNNING  | <p>netloader server is already running</p> |
| NETLD_ERROR  | <p>generic error</p> |

## NetLoaderStatus <a href="#a1901938f855dcfca04090c4d682f4283" id="a1901938f855dcfca04090c4d682f4283"></a>

<p>enum [NetLoaderStatus](#a1901938f855dcfca04090c4d682f4283)</p>

NetLoader status for status callback

| Enumerator |  |
|----|----|
| NETLD_REBOOT_REQUESTED  | <p>reboot is requested (msg is empty)</p> |
| NETLD_STOP_REQUESTED  | <p>stopping the server is requested (msg is empty)</p> |
| NETLD_DISPLAY_MESSAGE  | <p>display message (msg contains message)</p> |
| NETLD_SET_TIME  | <p>set date / time, (msg contains date/time)</p> |
| NETLD_DOWNLOAD_FILE  | <p>file download (msg contains file name)</p> |
| NETLD_INSTALL_FILE  | <p>install file (msg contains file name)</p> |
| NETLD_DOWNLOAD_OK  | <p>download is complete, no installation required (also indicates end of file download, msg contains file name)</p> |
| NETLD_DOWNLOAD_ERROR  | <p>download failed (also indicates end of file download, msg contains error)</p> |
| NETLD_INSTALL_OK  | <p>installation done (also indicates end of file download, msg contains file name)</p> |
| NETLD_INSTALL_ERROR  | <p>installation failed (also indicates end of file download, msg contains error)</p> |

## FunctionDocumentation {#function-documentation}

## netloader_start() <a href="#ad1c52953b207d5e2120b5ae5ff8cf92b" id="ad1c52953b207d5e2120b5ae5ff8cf92b"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [NetLoaderResult](#a9c806f2b892df2b3a86e5b1d867bd2d3) netloader_start</p>

start the netloader server

**Parameters**

\[in\] **download_dir** directory to which files are downloaded \[in\] **status_cb** callback for status updates or NULL \[in\] **install_cb** callback to be invoked or NULL \[in\] **data** data pointer for status_cb and install_cb

### Returns

error code

The status_cb callback is invoked with the following parameters:

**Parameters**

\[in\] **data** data pointer as provided to netloader_set_callback() \[in\] **status** netloader status as above \[in\] **msg** display message, file name or error code (see NetLoaderStatus) \[in\] **progress** progress in % (0..100) for NETLD_DOWN_LOAD_FILE and NETLD_INSTALL_FILE

The install_cb callback is invoked for installing files with the following parameters:

**Parameters**

\[in\] **data** data pointer as provided to netloader_set_callback() \[in\] **files** array of file names to be installed, terminated by NULL pointer

### Returns

NETINST_OK or error code

## netloader_stop() <a href="#a3b10a600fb356303f94441e8b36f6441" id="a3b10a600fb356303f94441e8b36f6441"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void netloader_stop</p>

stop the netloader server
