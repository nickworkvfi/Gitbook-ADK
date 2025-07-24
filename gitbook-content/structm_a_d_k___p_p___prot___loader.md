---
hidden: true
title: mADK_PP_Prot_Loader Struct Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

|  |  |
|----|----|
| Public Member Functions |  |
|   | [mADK_PP_Prot_Loader](#a09bc347ad6b17ce26abb3781ac90576b) (bool &error, string &info) |
| virtual  | [\~mADK_PP_Prot_Loader](#a4deb70e03e199b50399a86f2187dc0f2) () |

|  |  |
|----|----|
| Data Fields |  |
| void \*  | [so_handle](#abde8636f56884da3899be060f172da00) |
| void(\*  | [\_mADK_PP_Prot_GetStatus](#aaf67168ebce2d7cabc2617680e01ad31) )(struct ProtStatus \*status) |
| void(\*  | [\_mADK_PP_Prot_GetConnectInfo](#afaf640428d2296af79515e06d9e57215) )(struct ConnectInfo \*info) |
| void(\*  | [\_mADK_PP_Prot_FreeConnectInfo](#aee0e25835ac7347c07fda064f2e20552) )(struct ConnectInfo \*info) |
| void(\*  | [\_mADK_PP_Prot_SelectComProfile](#a583e5390f50066305ae7439922eec7eb) )(const char \*newComFileName) |
| void(\*  | [\_mADK_PP_Prot_SetStatusCallback](#aeaf789ced36cb9f504c7dbe4d1c52361) )(mADK_PP_Prot_StatusCallback cb, void \*cb_data) |
| void(\*  | [\_mADK_PP_Prot_SetTraceCallback](#af7f63a802c696934e6ce857c881c9c91) )(mADK_PP_Prot_TraceCallback cbf, void \*cb_data) |
| void(\*  | [\_mADK_PP_Prot_handleComm](#aa638d20f011ddb0679c56994f2986e6e) )(mADK_PP_Prot_ProcessCommand cmd_cb, void \*cmd_data, mADK_PP_Prot_CommSelection sel_cb) |
| int(\*  | [\_mADK_PP_Prot_SendCommand](#a5712919c3692404d958243bf243b656d) )(void \*handle, char \*data, unsigned long dataLength, char protType, unsigned msgId) |
| int(\*  | [\_mADK_PP_Prot_isTrustedConnection](#a3833dba4e7af048ac33604894bd04473) )(void \*handle, int interal_android) |
| int(\*  | [\_mADK_PP_Prot_SetAclConfig](#a42426ae28733c9a2944313c06e3e5d8e) )(const char \*acl_default, const char \*acl_user) |
| int(\*  | [\_mADK_PP_Prot_GetTcpClientInfo](#a955813a3c7f43a39f9ca9580e253fa08) )(void \*handle, struct TcpInfo \*info) |
| int(\*  | [\_mADK_PP_Prot_GetUdsClientInfo](#ae08898fada02c900214a2e654365fb93) )(void \*handle, struct UdsInfo \*info) |
| int(\*  | [\_mADK_PP_Prot_GetConnectionType](#a07e2f1e01cbc01dd6f67158651f4b59a) )(void \*handle) |

## Constructor& Destructor Documentation

## mADK_PP_Prot_Loader() <a href="#a09bc347ad6b17ce26abb3781ac90576b" id="a09bc347ad6b17ce26abb3781ac90576b"></a>

<p><a href="structm_a_d_k___p_p___prot___loader.md">mADK_PP_Prot_Loader</a></p>

inline

## \~mADK_PP_Prot_Loader() <a href="#a4deb70e03e199b50399a86f2187dc0f2" id="a4deb70e03e199b50399a86f2187dc0f2"></a>

<p>virtual \~<a href="structm_a_d_k___p_p___prot___loader.md">mADK_PP_Prot_Loader</a></p>

inlinevirtual

## FieldDocumentation {#field-documentation}

## \_mADK_PP_Prot_FreeConnectInfo <a href="#aee0e25835ac7347c07fda064f2e20552" id="aee0e25835ac7347c07fda064f2e20552"></a>

<p>void(\* \_mADK_PP_Prot_FreeConnectInfo(struct ConnectInfo \*info)</p>

## \_mADK_PP_Prot_GetConnectInfo <a href="#afaf640428d2296af79515e06d9e57215" id="afaf640428d2296af79515e06d9e57215"></a>

<p>void(\* \_mADK_PP_Prot_GetConnectInfo(struct ConnectInfo \*info)</p>

## \_mADK_PP_Prot_GetConnectionType <a href="#a07e2f1e01cbc01dd6f67158651f4b59a" id="a07e2f1e01cbc01dd6f67158651f4b59a"></a>

<p>int(\* \_mADK_PP_Prot_GetConnectionType(void \*handle)</p>

## \_mADK_PP_Prot_GetStatus <a href="#aaf67168ebce2d7cabc2617680e01ad31" id="aaf67168ebce2d7cabc2617680e01ad31"></a>

<p>void(\* \_mADK_PP_Prot_GetStatus(struct ProtStatus \*status)</p>

## \_mADK_PP_Prot_GetTcpClientInfo <a href="#a955813a3c7f43a39f9ca9580e253fa08" id="a955813a3c7f43a39f9ca9580e253fa08"></a>

<p>int(\* \_mADK_PP_Prot_GetTcpClientInfo(void \*handle, struct TcpInfo \*info)</p>

## \_mADK_PP_Prot_GetUdsClientInfo <a href="#ae08898fada02c900214a2e654365fb93" id="ae08898fada02c900214a2e654365fb93"></a>

<p>int(\* \_mADK_PP_Prot_GetUdsClientInfo(void \*handle, struct UdsInfo \*info)</p>

## \_mADK_PP_Prot_handleComm <a href="#aa638d20f011ddb0679c56994f2986e6e" id="aa638d20f011ddb0679c56994f2986e6e"></a>

<p>void(\* \_mADK_PP_Prot_handleComm(mADK_PP_Prot_ProcessCommand cmd_cb, void \*cmd_data, mADK_PP_Prot_CommSelection sel_cb)</p>

## \_mADK_PP_Prot_isTrustedConnection <a href="#a3833dba4e7af048ac33604894bd04473" id="a3833dba4e7af048ac33604894bd04473"></a>

<p>int(\* \_mADK_PP_Prot_isTrustedConnection(void \*handle, int interal_android)</p>

## \_mADK_PP_Prot_SelectComProfile <a href="#a583e5390f50066305ae7439922eec7eb" id="a583e5390f50066305ae7439922eec7eb"></a>

<p>void(\* \_mADK_PP_Prot_SelectComProfile(const char \*newComFileName)</p>

## \_mADK_PP_Prot_SendCommand <a href="#a5712919c3692404d958243bf243b656d" id="a5712919c3692404d958243bf243b656d"></a>

<p>int(\* \_mADK_PP_Prot_SendCommand(void \*handle, char \*data, unsigned long dataLength, char protType, unsigned msgId)</p>

## \_mADK_PP_Prot_SetAclConfig <a href="#a42426ae28733c9a2944313c06e3e5d8e" id="a42426ae28733c9a2944313c06e3e5d8e"></a>

<p>int(\* \_mADK_PP_Prot_SetAclConfig(const char \*acl_default, const char \*acl_user)</p>

## \_mADK_PP_Prot_SetStatusCallback <a href="#aeaf789ced36cb9f504c7dbe4d1c52361" id="aeaf789ced36cb9f504c7dbe4d1c52361"></a>

<p>void(\* \_mADK_PP_Prot_SetStatusCallback(mADK_PP_Prot_StatusCallback cb, void \*cb_data)</p>

## \_mADK_PP_Prot_SetTraceCallback <a href="#af7f63a802c696934e6ce857c881c9c91" id="af7f63a802c696934e6ce857c881c9c91"></a>

<p>void(\* \_mADK_PP_Prot_SetTraceCallback(mADK_PP_Prot_TraceCallback cbf, void \*cb_data)</p>

## so_handle <a href="#abde8636f56884da3899be060f172da00" id="abde8636f56884da3899be060f172da00"></a>

<p>void\* so_handle</p>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- sdi/src/<a href="madk__pp__protocol_8cpp.md">madk_pp_protocol.cpp</a>
