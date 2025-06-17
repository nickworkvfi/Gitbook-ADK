---
title: guiprt/src/html/input_plugin.h

---

# guiprt/src/html/input_plugin.h

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpec](sound_8h.md#define-dllspec) void * | **[input_start](input__plugin_8h.md#function-input-start)**(const char * parameter, char ** log_msg) |
| [DllSpec](sound_8h.md#define-dllspec) char * | **[input_poll](input__plugin_8h.md#function-input-poll)**(void * handle) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[input_end](input__plugin_8h.md#function-input-end)**(void * handle) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](input__plugin_8h.md#define-dllspec)**  |

## Detailed Description


Interface for input plugin modules 


## Functions Documentation

### function input_start

```cpp
DllSpec void * input_start(
    const char * parameter,
    char ** log_msg
)
```


**Parameters**: 

  * **parameter** string containing the parameters for the input plugin 
  * **log_msg** pointer to log message. If not NULL ADKGUI will log the message at error level and release the returned string using free(). 


**Return**: handle handle that will be passed to input_poll and input_end or NULL in case of error 

start the input 


### function input_poll

```cpp
DllSpec char * input_poll(
    void * handle
)
```


**Parameters**: 

  * **handle** handle as returned by [input_start()](input__plugin_8h.md#function-input-start)


**Return**: Input string or NULL if there is no input. The returned input string will be released using free(). 

**Note**: The format of the returned string is plugin-specific. 

poll for input. If input is ready it is returned as string. 


### function input_end

```cpp
DllSpec void input_end(
    void * handle
)
```


**Parameters**: 

  * **handle** handle as returned by [input_start()](input__plugin_8h.md#function-input-start). After [input_end()](input__plugin_8h.md#function-input-end) returns the handle is no longer valid. 


stop input and release all internal resources 




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
#ifndef INPUT_PLUGIN_H_20160330
#define INPUT_PLUGIN_H_20160330

#if defined _WIN32 && defined VFI_INPUTPLUGIN_SHARED_EXPORT
#  define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_INPUTPLUGIN_SHARED_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

#ifdef __cplusplus
extern "C" {
#endif

DllSpec void *input_start(const char *parameter, char **log_msg);

DllSpec char *input_poll(void *handle);

DllSpec void input_end(void *handle);


#ifdef __cplusplus
}
#endif

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
