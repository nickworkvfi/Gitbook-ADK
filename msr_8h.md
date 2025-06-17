---
title: msr/export/msr.h

---

# msr/export/msr.h

 [More...](#detailed-description)

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(void *data) | **[MSR_Callback](msr_8h.md#typedef-msr-callback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[MSR_SetOptions](msr_8h.md#function-msr-setoptions)**(unsigned char * options, unsigned char options_len) |
| int | **[MSR_Activate](msr_8h.md#function-msr-activate)**([MSR_Callback](msr_8h.md#typedef-msr-callback) cbf, void * cb_data) |
| int | **[MSR_Deactivate](msr_8h.md#function-msr-deactivate)**(void ) |
| int | **[MSR_DataAvailable](msr_8h.md#function-msr-dataavailable)**(void ) |
| int | **[MSR_GetData](msr_8h.md#function-msr-getdata)**(int timeout_msec, [MSR_TrackData](struct_m_s_r___track_data.md) * tracks, [MSR_DecodedData](struct_m_s_r___decoded_data.md) * data) |
| int | **[MSR_GetData2](msr_8h.md#function-msr-getdata2)**(int timeout_msec, [MSR_TrackData2](struct_m_s_r___track_data2.md) * tracks, [MSR_DecodedData](struct_m_s_r___decoded_data.md) * data) |
| int | **[MSR_GetData3](msr_8h.md#function-msr-getdata3)**(int timeout_msec, [MSR_TrackData3](struct_m_s_r___track_data3.md) * tracks, [MSR_DecodedData](struct_m_s_r___decoded_data.md) * data) |
| int | **[MSR_GetData4](msr_8h.md#function-msr-getdata4)**(int timeout_msec, [MSR_TrackData4](struct_m_s_r___track_data4.md) * tracks, [MSR_DecodedData4](struct_m_s_r___decoded_data4.md) * data) |
| void | **[MSR_AbortGetData](msr_8h.md#function-msr-abortgetdata)**(void ) |
| int | **[MSR_SwitchLeds](msr_8h.md#function-msr-switchleds)**(int led1, int led2, int led3, int duration) |

## Detailed Description


**Author**: 

  * Thomas Buening, GSS
  * Dirk Germann, GSS 


Interface definitions for libmsr. This file defines the API for the magnetic card reader library. 
Interface definitions for libmsr - part which is common for direct linking and client/server. This file defines the API for the magnetic card reader library. 

## Types Documentation

### typedef MSR_Callback

```cpp
typedef void(* MSR_Callback) (void *data);
```


**Parameters**: 

  * **data** : Data pointer provided by the application. 


Type of function that is called after magnetic card has been swiped, see [MSR_Activate()](msr_8h.md#function-msr-activate). 



## Functions Documentation

### function MSR_SetOptions

```cpp
int MSR_SetOptions(
    unsigned char * options,
    unsigned char options_len
)
```


**Parameters**: 

  * **options** : data pointer, [0]-[2] [Options bitmask](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md), [3] sensitivity (for Samsung MST usage, values 0-100) 
  * **options_len** : length of options 


**Return**: 

* [MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok) : No error
* [MSR_PARAM](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-param) : options == NULL or options_len == 0
* [MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error) : MSR is activated, call [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) first. 

This function has to be called while MSR is _deactivated_. [MSR_Activate()](msr_8h.md#function-msr-activate) / [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) do not discard the options previously set, so setting the options once at terminal start is sufficient. 

 Note: Options not overwritten by options_len remain unchanged. 


### function MSR_Activate

```cpp
int MSR_Activate(
    MSR_Callback cbf,
    void * cb_data
)
```


**Parameters**: 

  * **cbf** : Callback function that is called every time a card has been swiped, may be NULL. Within the callback function card data can be obtained by [MSR_GetData()](msr_8h.md#function-msr-getdata). 
  * **cb_data** : Data pointer that is passed on to the callback function cbf, may be NULL. 


**Return**: 

* [MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok) : Successfully activated.
* [MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error) : No reader present, device could not be opened, or internal error.
* [MSR_ACTIVE](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-active) : Interface is already activated, nothing done (especially cbf and cb_data are not taken over, these will only be set if function returns [MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok)). 

Activate magnetic card reader interface. After successful execution of this function every swiped card is read and its data is stored internally. Upon storing card data any previously stored data is erased, so only the data of the last swiped card remains available. To obtain the stored data, call [MSR_GetData()](msr_8h.md#function-msr-getdata). After doing so, the stored data is erased as well, so that card data can only be obtained once. 


### function MSR_Deactivate

```cpp
int MSR_Deactivate(
    void 
)
```


**Return**: 

* [MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok) : Successfully deactivated or not activated before.
* [MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error) : Internal error. 

**Note**: Calling this function is mandatory at the end of each transaction. Otherwise the internal thread is not correctly ended and resource leaks are remain. 

Deactivate magnetic card reader interface. After deactivating the card reader interface no more swiped cards are read and no data is stored. Any previously stored card data will be erased. 


### function MSR_DataAvailable

```cpp
int MSR_DataAvailable(
    void 
)
```


**Return**: 

* 1 : Data available.
* 0 : No data available.
* [MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error) : Magnetic card reader interface not activated.
* [MSR_PROCESS](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-process) : MSR_ONE_SWIPE was set and card data has already been obtained by [MSR_GetData()](msr_8h.md#function-msr-getdata). Reactivation needed before next card swipe. 

Check if magnetic card has been swiped and its data is stored. After obtaining the stored data with [MSR_GetData()](msr_8h.md#function-msr-getdata) or deactivating the card reader interface with [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) the stored data is erased and not available any longer. 


### function MSR_GetData

```cpp
int MSR_GetData(
    int timeout_msec,
    MSR_TrackData * tracks,
    MSR_DecodedData * data
)
```


**Parameters**: 

  * **timeout_msec** : Time (in milliseconds, < 0 : infinite) to wait for a card swipe if no card data has been stored previously. 
  * **tracks** : Track data, may be NULL. 
  * **data** : Decoded track data, may be NULL. 


**Return**: 

* [MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok) : Magnetic card data is available or became available within the supplied timeout period.
* [MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error) : Magnetic card reader interface not activated or internal error.
* [MSR_TIMEOUT](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-timeout) : No magnetic card data available within the specified timeout.
* [MSR_ABORTED](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-aborted) : Aborted by [MSR_AbortGetData()](msr_8h.md#function-msr-abortgetdata).
* [MSR_PARAM](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-param) : Callback function supplied to [MSR_Activate()](msr_8h.md#function-msr-activate) and timeout != 0.
* [MSR_PROCESS](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-process) : MSR_ONE_SWIPE was set and card data has already been obtained. Reactivation needed before next card swipe. 

**Note**: To clear the internal resources a succeeding call to [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) is mandatory. 

Obtain magnetic card data. With this function the internally stored card data can be obtained. In doing so, the internally stored data is erased, so that data of each card swipe can only be obtained once. If no card data is stored at the moment, the function waits for a specified time for a card swipe. If a timeout is supplied, the function is blocking and can be aborted by [MSR_AbortGetData()](msr_8h.md#function-msr-abortgetdata). If a callback function is supplied to [MSR_Activate()](msr_8h.md#function-msr-activate), setting a timeout != 0 is not allowed. [MSR_GetData()](msr_8h.md#function-msr-getdata) can be called from within a callback function supplied to [MSR_Activate()](msr_8h.md#function-msr-activate) but there's no need to do so. 

 Remark: In case the terminal has two magnetic heads the data from the first head is populated. If there is no data from first head the data from the second head is returned. If you need data from both heads you shall use [MSR_GetData4()](msr_8h.md#function-msr-getdata4). 


### function MSR_GetData2

```cpp
int MSR_GetData2(
    int timeout_msec,
    MSR_TrackData2 * tracks,
    MSR_DecodedData * data
)
```


**Parameters**: 

  * **timeout_msec** : Time (in milliseconds, < 0 : infinite) to wait for a card swipe if no card data has been stored previously. 
  * **tracks** : Track data, may be NULL. 
  * **data** : Decoded track data, may be NULL. 


**Return**: 

* [MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok) : Magnetic card data is available of became available within the supplied timeout period.
* [MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error) : Magnetic card reader interface not activated or internal error.
* [MSR_TIMEOUT](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-timeout) : No magnetic card data available within the specified timeout.
* [MSR_ABORTED](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-aborted) : Aborted by [MSR_AbortGetData()](msr_8h.md#function-msr-abortgetdata).
* [MSR_PARAM](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-param) : Callback function supplied to [MSR_Activate()](msr_8h.md#function-msr-activate) and timeout != 0.
* [MSR_PROCESS](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-process) : MSR_ONE_SWIPE was set and card data has already been obtained. Reactivation needed before next card swipe. 

**Note**: To clear the internal resources a succeeding call to [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) is mandatory. 

Obtain magnetic card data including card type. This is the same as [MSR_GetData()](msr_8h.md#function-msr-getdata) but additionally offers [Card Type Code](group___m_s_r___c_a_r_d___c_o_d_e_s.md). With this function the internally stored card data can be obtained. In doing so, the internally stored data is erased, so that data of each card swipe can only be obtained once. If no card data is stored at the moment, the function waits for a specified time for a card swipe. If a timeout is supplied, the function is blocking and can be aborted by [MSR_AbortGetData()](msr_8h.md#function-msr-abortgetdata). If a callback function is supplied to [MSR_Activate()](msr_8h.md#function-msr-activate), setting a timeout != 0 is not allowed. [MSR_GetData2()](msr_8h.md#function-msr-getdata2) can be called from within a callback function supplied to [MSR_Activate()](msr_8h.md#function-msr-activate) but there's no need to do so. 


### function MSR_GetData3

```cpp
int MSR_GetData3(
    int timeout_msec,
    MSR_TrackData3 * tracks,
    MSR_DecodedData * data
)
```


**Parameters**: 

  * **timeout_msec** : Time (in milliseconds, < 0 : infinite) to wait for a card swipe if no card data has been stored previously. 
  * **tracks** : Track data, may be NULL. 
  * **data** : Decoded track data, may be NULL. 


**Return**: 

* [MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok) : Magnetic card data is available of became available within the supplied timeout period.
* [MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error) : Magnetic card reader interface not activated or internal error.
* [MSR_TIMEOUT](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-timeout) : No magnetic card data available within the specified timeout.
* [MSR_ABORTED](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-aborted) : Aborted by [MSR_AbortGetData()](msr_8h.md#function-msr-abortgetdata).
* [MSR_PARAM](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-param) : Callback function supplied to [MSR_Activate()](msr_8h.md#function-msr-activate) and timeout != 0.
* [MSR_PROCESS](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-process) : MSR_ONE_SWIPE was set and card data has already been obtained. Reactivation needed before next card swipe. 

**Note**: To clear the internal resources a succeeding call to [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) is mandatory. 

Obtain magnetic card data including additional information. This is the same as [MSR_GetData()](msr_8h.md#function-msr-getdata) but additionally offers [Card Type Code](group___m_s_r___c_a_r_d___c_o_d_e_s.md) and [Track Type Code](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md). With this function the internally stored card data can be obtained. In doing so, the internally stored data is erased, so that data of each card swipe can only be obtained once. If no card data is stored at the moment, the function waits for a specified time for a card swipe. If a timeout is supplied, the function is blocking and can be aborted by [MSR_AbortGetData()](msr_8h.md#function-msr-abortgetdata). If a callback function is supplied to [MSR_Activate()](msr_8h.md#function-msr-activate), setting a timeout != 0 is not allowed. [MSR_GetData3()](msr_8h.md#function-msr-getdata3) can be called from within a callback function supplied to [MSR_Activate()](msr_8h.md#function-msr-activate) but there's no need to do so. 


### function MSR_GetData4

```cpp
int MSR_GetData4(
    int timeout_msec,
    MSR_TrackData4 * tracks,
    MSR_DecodedData4 * data
)
```


**Parameters**: 

  * **timeout_msec** : Time (in milliseconds, < 0 : infinite) to wait for a card swipe if no card data has been stored previously. 
  * **tracks** : Track data, may be NULL. 
  * **data** : Decoded track data, may be NULL. 


**Return**: 

* [MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok) : Magnetic card data is available of became available within the supplied timeout period.
* [MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error) : Magnetic card reader interface not activated or internal error.
* [MSR_TIMEOUT](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-timeout) : No magnetic card data available within the specified timeout.
* [MSR_ABORTED](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-aborted) : Aborted by [MSR_AbortGetData()](msr_8h.md#function-msr-abortgetdata).
* [MSR_PARAM](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-param) : Callback function supplied to [MSR_Activate()](msr_8h.md#function-msr-activate) and timeout != 0.
* [MSR_PROCESS](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-process) : MSR_ONE_SWIPE was set and card data has already been obtained. Reactivation needed before next card swipe. 

**Note**: To clear the internal resources a succeeding call to [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) is mandatory. 

Obtain magnetic card data including additional information. This is the same as [MSR_GetData()](msr_8h.md#function-msr-getdata) but additionally offers [Card Type Code](group___m_s_r___c_a_r_d___c_o_d_e_s.md), [Track Type Code](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md) and second magstripe data (if present). With this function the internally stored card data can be obtained. In doing so, the internally stored data is erased, so that data of each card swipe can only be obtained once. If no card data is stored at the moment, the function waits for a specified time for a card swipe. If a timeout is supplied, the function is blocking and can be aborted by [MSR_AbortGetData()](msr_8h.md#function-msr-abortgetdata). If a callback function is supplied to [MSR_Activate()](msr_8h.md#function-msr-activate), setting a timeout != 0 is not allowed. [MSR_GetData4()](msr_8h.md#function-msr-getdata4) can be called from within a callback function supplied to [MSR_Activate()](msr_8h.md#function-msr-activate) but there's no need to do so. 


### function MSR_AbortGetData

```cpp
void MSR_AbortGetData(
    void 
)
```


Abort blocking function [MSR_GetData()](msr_8h.md#function-msr-getdata). If [MSR_GetData()](msr_8h.md#function-msr-getdata) is waiting for a card swipe, the blocking function can be aborted by invoking this function from another thread. If [MSR_GetData()](msr_8h.md#function-msr-getdata) wasn't invoked, this function does nothing. 


### function MSR_SwitchLeds

```cpp
int MSR_SwitchLeds(
    int led1,
    int led2,
    int led3,
    int duration
)
```


**Parameters**: 

  * **led1** : state of LED 1 (top), see [LED states](group___l_e_d___s_t_a_t_e_s.md). 
  * **led2** : state of LED 2 (mid), see [LED states](group___l_e_d___s_t_a_t_e_s.md)
  * **led3** : state of LED 3 (bottom), see [LED states](group___l_e_d___s_t_a_t_e_s.md)
  * **duration** : if > 0: all LEDs are switched off after this time (in seconds). 


**Return**: 

* [MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok) : Successfully set LED state.
* [MSR_PARAM](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-param) : Invalid parameter.
* [MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error) : Internal error. 

Set state of MSR LEDs. 




## Source code

```cpp

#ifndef __MSR_LIB_INTERFACE__
#define __MSR_LIB_INTERFACE__

#ifdef __cplusplus
extern "C" {
#endif

#include "msr_common.h"

typedef void (* MSR_Callback) (void *data);

int MSR_SetOptions(unsigned char *options, unsigned char options_len);

int MSR_Activate(MSR_Callback cbf, void *cb_data);

int MSR_Deactivate(void);

int MSR_DataAvailable(void);

int MSR_GetData(int timeout_msec, MSR_TrackData *tracks, MSR_DecodedData *data);

int MSR_GetData2(int timeout_msec, MSR_TrackData2 *tracks, MSR_DecodedData *data);

int MSR_GetData3(int timeout_msec, MSR_TrackData3 *tracks, MSR_DecodedData *data);

int MSR_GetData4(int timeout_msec, MSR_TrackData4 *tracks, MSR_DecodedData4 *data);

void MSR_AbortGetData(void);

int MSR_SwitchLeds(int led1, int led2, int led3, int duration);


#ifdef __cplusplus
}
#endif

#endif  // avoid double include
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
