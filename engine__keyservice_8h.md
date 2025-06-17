---
title: ipc/src/engine_keyservice.h

---

# ipc/src/engine_keyservice.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[KS_IOBuffer](struct_k_s___i_o_buffer.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(const char *file, unsigned line, const char *str) | **[ks_trace_callback](engine__keyservice_8h.md#typedef-ks-trace-callback)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[KS_CMD_READ_CERT](engine__keyservice_8h.md#define-ks-cmd-read-cert)**  |
|  | **[KS_CMD_SET_ERROR_CB](engine__keyservice_8h.md#define-ks-cmd-set-error-cb)**  |
|  | **[KS_CMD_SET_DEBUG_CB](engine__keyservice_8h.md#define-ks-cmd-set-debug-cb)**  |

## Types Documentation

### typedef ks_trace_callback

```cpp
typedef void(* ks_trace_callback) (const char *file, unsigned line, const char *str);
```


**Parameters**: 

  * **file** filename of the module containing the trace point 
  * **line** source line of the module containing the trace point 
  * **str** logging information as zero-terminated string 


**Note**: Only process flow information is logged, key contents are never logged. 

callback trace function invoked, if keyservice engine calls the internal logging function to trace out debug information. This function can eiter be set by engine control command KS_CMD_SET_ERROR_CB to trace error conditions or by KS_CMD_SET_DEBUG_CB to trace informational debug-level messages. 





## Macros Documentation

### define KS_CMD_READ_CERT

```cpp
#define KS_CMD_READ_CERT (ENGINE_CMD_BASE+0x10)
```


**Note**: If the read certificate length exceeds the allocated buffer size of the provided buffer, ENGINE_ctrl() fails and the keyservice returns the required buffer size in buf->size, so that the caller can re-allocate the buffer to the required buffer size. 

Control command to read the certificate from the keyservice engine. The command uses struct [KS_IOBuffer](struct_k_s___i_o_buffer.md) to pass the key reference name to the keyservice, for which the related certificate shall be read. The [KS_IOBuffer](struct_k_s___i_o_buffer.md) should be reserved with malloc() and sufficient buffer size (recommended is at least 8k). As input value the buffer gets the key reference name `key_name`, as output the same buffer is used by the keyservice engine to store the certificate. Example code to read the certificate for key reference `key_name` (C-string): 

```cpp
KS_IOBuffer *buf=(KS_IOBuffer *)malloc(sizeof(KS_IOBuffer)+8192);
buf->maxsize=8192;
buf->size=strlen(key_name);
memcpy(buf->buffer,key_name,buf->size);
if(ENGINE_ctrl(engine,KS_CMD_READ_CERT,0,buf,0)) {
  // success
  memcpy(certbuf,buf->buffer,buf->size);
}
free(buf);
```


### define KS_CMD_SET_ERROR_CB

```cpp
#define KS_CMD_SET_ERROR_CB (ENGINE_CMD_BASE+0x11)
```


If supported by the keyservice engine, the application can use this control command to set a trace callback (see ks_trace_callback), which will be invoked for logging of error conditions. 


### define KS_CMD_SET_DEBUG_CB

```cpp
#define KS_CMD_SET_DEBUG_CB (ENGINE_CMD_BASE+0x12)
```


If supported by the keyservice engine, the application can use this control command to set a trace callback (see ks_trace_callback), which will be invoked for logging of informational debug-level events. 


## Source code

```cpp
#ifndef ENGINE_KEYSERVICE_H_20200206
#define ENGINE_KEYSERVICE_H_20200206

#include <openssl/engine.h>

#define KS_CMD_READ_CERT              (ENGINE_CMD_BASE+0x10)

#define KS_CMD_SET_ERROR_CB           (ENGINE_CMD_BASE+0x11)

#define KS_CMD_SET_DEBUG_CB           (ENGINE_CMD_BASE+0x12)

struct KS_IOBuffer {
   unsigned maxsize;        
   unsigned size;           
   unsigned char buffer[0]; 
};

typedef void (*ks_trace_callback)(const char *file, unsigned line, const char *str);

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
