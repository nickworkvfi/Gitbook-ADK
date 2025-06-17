---
title: PED status codes
summary: These codes are set by ped_Pairing(). 

---

# PED status codes

These codes are set by [ped_Pairing()](). 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[PED_LINK_OK](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#define-ped-link-ok)**  |
|  | **[PED_NS_DONE](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#define-ped-ns-done)**  |
|  | **[PED_CERT_ERR](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#define-ped-cert-err)**  |
|  | **[PED_NS_ERR](group___p_e_d___s_t_a_t_u_s___c_o_d_e_s.md#define-ped-ns-err)**  |




## Macros Documentation

### define PED_LINK_OK

```
#define PED_LINK_OK 0
```


Set by [ped_Pairing()](tec_2export_2tec_2ped_8h.md#function-ped-pairing): Link verification successful, no pairing needed. 


### define PED_NS_DONE

```
#define PED_NS_DONE 1
```


Set by [ped_Pairing()](tec_2export_2tec_2ped_8h.md#function-ped-pairing): Link verification failed, pairing (Needham-Schroeder) successful. 


### define PED_CERT_ERR

```
#define PED_CERT_ERR 2
```


Set by [ped_Pairing()](tec_2export_2tec_2ped_8h.md#function-ped-pairing): Error during certificate exchange. 


### define PED_NS_ERR

```
#define PED_NS_ERR 3
```


Set by [ped_Pairing()](tec_2export_2tec_2ped_8h.md#function-ped-pairing): Error during pairing (Needham-Schroeder). 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100