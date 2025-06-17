---
title: tec/export/tec/ped.h

---

# tec/export/tec/ped.h

 [More...](#detailed-description)

## Types

|                | Name           |
| -------------- | -------------- |
| typedef int(*)(const unsigned char *data, int len) | **[ped_SendCallback](tec_2export_2tec_2ped_8h.md#typedef-ped-sendcallback)**  |
| typedef int(*)(unsigned char *data, int len) | **[ped_RcvCallback](tec_2export_2tec_2ped_8h.md#typedef-ped-rcvcallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[ped_SetSendRcvCb](tec_2export_2tec_2ped_8h.md#function-ped-setsendrcvcb)**([ped_SendCallback](tec_2export_2tec_2ped_8h.md#typedef-ped-sendcallback) scbf, [ped_RcvCallback](tec_2export_2tec_2ped_8h.md#typedef-ped-rcvcallback) rcbf) |
| int | **[ped_Pairing](tec_2export_2tec_2ped_8h.md#function-ped-pairing)**(int * status) |
| int | **[ped_MovePin](tec_2export_2tec_2ped_8h.md#function-ped-movepin)**(void ) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[PED_OK](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-ok)**  |
|  | **[PED_ERROR](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-error)**  |
|  | **[PED_ERR_LOAD](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-err-load)**  |
|  | **[PED_LINK_OK](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#define-ped-link-ok)**  |
|  | **[PED_NS_DONE](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#define-ped-ns-done)**  |
|  | **[PED_CERT_ERR](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#define-ped-cert-err)**  |
|  | **[PED_NS_ERR](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#define-ped-ns-err)**  |

## Detailed Description


**Author**: Thomas Buening, GSS 

This file defines the API for the PP1000 pairing and PIN transfer functionality which is part of technology selection library. 

## Types Documentation

### typedef ped_SendCallback

```cpp
typedef int(* ped_SendCallback) (const unsigned char *data, int len);
```


**Parameters**: 

  * **data** : Data to be sent 
  * **len** : Length of data 


**Return**: number of bytes sent, -1: failure 

Callback function application has to implement for sending data to PED. 


### typedef ped_RcvCallback

```cpp
typedef int(* ped_RcvCallback) (unsigned char *data, int len);
```


**Parameters**: 

  * **data** : received data 
  * **len** : size of data buffer 


**Return**: number of bytes read, -1: failure 

Callback function application has to implement for receiving data from PED. If the received data is not a complete packet, the callback will be invoked again until the whole packet is received. 



## Functions Documentation

### function ped_SetSendRcvCb

```cpp
int ped_SetSendRcvCb(
    ped_SendCallback scbf,
    ped_RcvCallback rcbf
)
```


Set send and receive callback functions for communication with PED. This function is for convenience. You can choose if to use this or directly use the equivalent function from pp1000 library, don't call both!

* [PED_OK](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-ok) : Callback functions successfully registered
* [PED_ERROR](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-error) : Invalid parameter
* [PED_ERR_LOAD](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-err-load) : Error loading dynamic library scbf: Send callback function 

rcbf: Receive callback function 


### function ped_Pairing

```cpp
int ped_Pairing(
    int * status
)
```


**Parameters**: 

  * **status** : additional status information, see [PED status codes](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md), may be NULL 


**Return**: 

* [PED_OK](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-ok) : No error, pairing successful
* [PED_ERROR](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-error) : Pairing failed
* [PED_ERR_LOAD](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-err-load) : Error loading dynamic library 

Execute pairing between CTP and PED. 


### function ped_MovePin

```cpp
int ped_MovePin(
    void 
)
```


**Return**: 

* [PED_OK](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-ok) : No error, PIN successfully moved
* [PED_ERROR](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-error) : Failure
* [PED_ERR_LOAD](group___p_e_d___r_e_t_u_r_n___c_o_d_e_s.md#define-ped-err-load) : Error loading dynamic library 

Move PIN from PED to CTP. 




## Macros Documentation

### define PED_OK

```cpp
#define PED_OK 0
```


No error, function executed successfully 


### define PED_ERROR

```cpp
#define PED_ERROR -1
```


Error 


### define PED_ERR_LOAD

```cpp
#define PED_ERR_LOAD -2
```


Error loading dynamic library (pp1000.so/pp1000.vsl) 


### define PED_LINK_OK

```cpp
#define PED_LINK_OK 0
```


Set by [ped_Pairing()](tec_2export_2tec_2ped_8h.md#function-ped-pairing): Link verification successful, no pairing needed. 


### define PED_NS_DONE

```cpp
#define PED_NS_DONE 1
```


Set by [ped_Pairing()](tec_2export_2tec_2ped_8h.md#function-ped-pairing): Link verification failed, pairing (Needham-Schroeder) successful. 


### define PED_CERT_ERR

```cpp
#define PED_CERT_ERR 2
```


Set by [ped_Pairing()](tec_2export_2tec_2ped_8h.md#function-ped-pairing): Error during certificate exchange. 


### define PED_NS_ERR

```cpp
#define PED_NS_ERR 3
```


Set by [ped_Pairing()](tec_2export_2tec_2ped_8h.md#function-ped-pairing): Error during pairing (Needham-Schroeder). 


## Source code

```cpp

#ifndef __TEC_LIB_PED_INTERFACE__
#define __TEC_LIB_PED_INTERFACE__

#ifdef __cplusplus
extern "C" {
#endif

#define PED_OK                0  
#define PED_ERROR            -1  
#define PED_ERR_LOAD         -2  
#define PED_LINK_OK           0  
#define PED_NS_DONE           1  
#define PED_CERT_ERR          2  
#define PED_NS_ERR            3  
typedef int (* ped_SendCallback) (const unsigned char *data, int len);

typedef int (* ped_RcvCallback) (unsigned char *data, int len);


int ped_SetSendRcvCb(ped_SendCallback scbf, ped_RcvCallback rcbf);

int ped_Pairing(int *status);

int ped_MovePin(void);


#ifdef __cplusplus
}
#endif

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
