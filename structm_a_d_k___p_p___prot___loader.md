---
title: mADK_PP_Prot_Loader

---

# mADK_PP_Prot_Loader





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[mADK_PP_Prot_Loader](structm_a_d_k___p_p___prot___loader.md#function-madk-pp-prot-loader)**(bool & error, string & info) |
| virtual | **[~mADK_PP_Prot_Loader](structm_a_d_k___p_p___prot___loader.md#function-~madk-pp-prot-loader)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| void * | **[so_handle](structm_a_d_k___p_p___prot___loader.md#variable-so-handle)**  |
| void(*)(struct ProtStatus *status) | **[_mADK_PP_Prot_GetStatus](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-getstatus)**  |
| void(*)(struct ConnectInfo *info) | **[_mADK_PP_Prot_GetConnectInfo](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-getconnectinfo)**  |
| void(*)(struct ConnectInfo *info) | **[_mADK_PP_Prot_FreeConnectInfo](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-freeconnectinfo)**  |
| void(*)(const char *newComFileName) | **[_mADK_PP_Prot_SelectComProfile](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-selectcomprofile)**  |
| void(*)(mADK_PP_Prot_StatusCallback cb, void *cb_data) | **[_mADK_PP_Prot_SetStatusCallback](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-setstatuscallback)**  |
| void(*)(mADK_PP_Prot_TraceCallback cbf, void *cb_data) | **[_mADK_PP_Prot_SetTraceCallback](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-settracecallback)**  |
| void(*)(mADK_PP_Prot_ProcessCommand cmd_cb, void *cmd_data, mADK_PP_Prot_CommSelection sel_cb) | **[_mADK_PP_Prot_handleComm](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-handlecomm)**  |
| int(*)(void *handle, char *data, unsigned long dataLength, char protType, unsigned msgId) | **[_mADK_PP_Prot_SendCommand](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-sendcommand)**  |
| int(*)(void *handle, int interal_android) | **[_mADK_PP_Prot_isTrustedConnection](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-istrustedconnection)**  |
| int(*)(const char *acl_default, const char *acl_user) | **[_mADK_PP_Prot_SetAclConfig](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-setaclconfig)**  |
| int(*)(void *handle, struct TcpInfo *info) | **[_mADK_PP_Prot_GetTcpClientInfo](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-gettcpclientinfo)**  |
| int(*)(void *handle, struct UdsInfo *info) | **[_mADK_PP_Prot_GetUdsClientInfo](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-getudsclientinfo)**  |
| int(*)(void *handle) | **[_mADK_PP_Prot_GetConnectionType](structm_a_d_k___p_p___prot___loader.md#variable--madk-pp-prot-getconnectiontype)**  |

## Public Functions Documentation

### function mADK_PP_Prot_Loader

```cpp
inline mADK_PP_Prot_Loader(
    bool & error,
    string & info
)
```


### function ~mADK_PP_Prot_Loader

```cpp
inline virtual ~mADK_PP_Prot_Loader()
```


## Public Attributes Documentation

### variable so_handle

```cpp
void * so_handle;
```


### variable _mADK_PP_Prot_GetStatus

```cpp
void(*)(struct ProtStatus *status) _mADK_PP_Prot_GetStatus;
```


### variable _mADK_PP_Prot_GetConnectInfo

```cpp
void(*)(struct ConnectInfo *info) _mADK_PP_Prot_GetConnectInfo;
```


### variable _mADK_PP_Prot_FreeConnectInfo

```cpp
void(*)(struct ConnectInfo *info) _mADK_PP_Prot_FreeConnectInfo;
```


### variable _mADK_PP_Prot_SelectComProfile

```cpp
void(*)(const char *newComFileName) _mADK_PP_Prot_SelectComProfile;
```


### variable _mADK_PP_Prot_SetStatusCallback

```cpp
void(*)(mADK_PP_Prot_StatusCallback cb, void *cb_data) _mADK_PP_Prot_SetStatusCallback;
```


### variable _mADK_PP_Prot_SetTraceCallback

```cpp
void(*)(mADK_PP_Prot_TraceCallback cbf, void *cb_data) _mADK_PP_Prot_SetTraceCallback;
```


### variable _mADK_PP_Prot_handleComm

```cpp
void(*)(mADK_PP_Prot_ProcessCommand cmd_cb, void *cmd_data, mADK_PP_Prot_CommSelection sel_cb) _mADK_PP_Prot_handleComm;
```


### variable _mADK_PP_Prot_SendCommand

```cpp
int(*)(void *handle, char *data, unsigned long dataLength, char protType, unsigned msgId) _mADK_PP_Prot_SendCommand;
```


### variable _mADK_PP_Prot_isTrustedConnection

```cpp
int(*)(void *handle, int interal_android) _mADK_PP_Prot_isTrustedConnection;
```


### variable _mADK_PP_Prot_SetAclConfig

```cpp
int(*)(const char *acl_default, const char *acl_user) _mADK_PP_Prot_SetAclConfig;
```


### variable _mADK_PP_Prot_GetTcpClientInfo

```cpp
int(*)(void *handle, struct TcpInfo *info) _mADK_PP_Prot_GetTcpClientInfo;
```


### variable _mADK_PP_Prot_GetUdsClientInfo

```cpp
int(*)(void *handle, struct UdsInfo *info) _mADK_PP_Prot_GetUdsClientInfo;
```


### variable _mADK_PP_Prot_GetConnectionType

```cpp
int(*)(void *handle) _mADK_PP_Prot_GetConnectionType;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100