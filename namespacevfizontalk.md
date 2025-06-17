---
title: vfizontalk

---

# vfizontalk

**Module:** **[zontalk protocal APIs](group__zontalk.md)**

 [More...](#detailed-description)

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[download_type](namespacevfizontalk.md#enum-download-type)** { PARTIAL = 0, FULL = 1} |
| typedef void(*)(char *) | **[recieve_callback](namespacevfizontalk.md#typedef-recieve-callback)**  |
| typedef void(*)(int) | **[end_callback](namespacevfizontalk.md#typedef-end-callback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysZontalkReceive](namespacevfizontalk.md#function-syszontalkreceive)**(short com_port, [recieve_callback](namespacevfizontalk.md#typedef-recieve-callback) rc_cb, [end_callback](namespacevfizontalk.md#typedef-end-callback) end_cb, [download_type](namespacevfizontalk.md#enum-download-type) type) |
| [SYS_INFO_API](dllspec_8h.md#define-sys-info-api) int | **[sysZontalkCancel](namespacevfizontalk.md#function-syszontalkcancel)**() |

## Detailed Description


Verifone vfizontalk namespace 

## Types Documentation

### enum download_type

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PARTIAL | 0|   |
| FULL | 1|   |




### typedef recieve_callback

```cpp
typedef void(* recieve_callback) (char *);
```


### typedef end_callback

```cpp
typedef void(* end_callback) (int);
```



## Functions Documentation

### function sysZontalkReceive

```cpp
SYS_INFO_API int sysZontalkReceive(
    short com_port,
    recieve_callback rc_cb,
    end_callback end_cb,
    download_type type
)
```


**Parameters**: 

  * **com_port** Communication port where the download is received. 
  * ***rc_cb** Callback function called when an information/status message is received from the Zontalk/DL server. 
  * **type** download type 
  * ***end_cb** Callback function called when the download completes successfully or failed


**Return**: 

* 0 = Success 
* < 0 = Download failed 

Allows an application to perform a local DL/Zontalk/VeriTalk download. The application must open and configure the port before calling this function.


### function sysZontalkCancel

```cpp
SYS_INFO_API int sysZontalkCancel()
```


**Return**: 

* 0 = Success 
* < 0 = Error occurred or a download is not in progress 

Cancel a Zontalk/DL download (initiated by sysZontalkRecieve)






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100