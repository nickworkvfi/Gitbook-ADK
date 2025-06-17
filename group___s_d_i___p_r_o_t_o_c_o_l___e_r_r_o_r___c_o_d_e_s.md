---
title: SDI Protocol Error Codes
summary: SDI protocol error codes. 

---

# SDI Protocol Error Codes

SDI protocol error codes. 

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SDI_PROTOCOL_ERR_IO](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-io)** <br>read, write or protocol error  |
|  | **[SDI_PROTOCOL_ERR_CONCURRENT_USE](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-concurrent-use)** <br>SDI protocol library currently used by another thread, maybe try later.  |
|  | **[SDI_PROTOCOL_ERR_CONNECT](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-connect)** <br>connection establishment to SDI server failed  |
|  | **[SDI_PROTOCOL_ERR_OVERFLOW](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-overflow)** <br>response buffer too small, response has been dropped  |
|  | **[SDI_PROTOCOL_ERR_PARAM](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-param)** <br>wrong formal parameter like NULL pointer  |
|  | **[SDI_PROTOCOL_ERR_OTHER](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-other)** <br>any other problem like thread creation, memory allocation, etc.  |
|  | **[SDI_PROTOCOL_ERR_NO_RECEIVE](group___s_d_i___p_r_o_t_o_c_o_l___e_r_r_o_r___c_o_d_e_s.md#define-sdi-protocol-err-no-receive)** <br>command is suppressed, therefore, no [SDI_Receive()]() must be called afterwards  |




## Macros Documentation

### define SDI_PROTOCOL_ERR_IO

```
#define SDI_PROTOCOL_ERR_IO -1
```

read, write or protocol error 

### define SDI_PROTOCOL_ERR_CONCURRENT_USE

```
#define SDI_PROTOCOL_ERR_CONCURRENT_USE -2
```

SDI protocol library currently used by another thread, maybe try later. 

### define SDI_PROTOCOL_ERR_CONNECT

```
#define SDI_PROTOCOL_ERR_CONNECT -3
```

connection establishment to SDI server failed 

### define SDI_PROTOCOL_ERR_OVERFLOW

```
#define SDI_PROTOCOL_ERR_OVERFLOW -4
```

response buffer too small, response has been dropped 

### define SDI_PROTOCOL_ERR_PARAM

```
#define SDI_PROTOCOL_ERR_PARAM -5
```

wrong formal parameter like NULL pointer 

### define SDI_PROTOCOL_ERR_OTHER

```
#define SDI_PROTOCOL_ERR_OTHER -6
```

any other problem like thread creation, memory allocation, etc. 

### define SDI_PROTOCOL_ERR_NO_RECEIVE

```
#define SDI_PROTOCOL_ERR_NO_RECEIVE -7
```

command is suppressed, therefore, no [SDI_Receive()]() must be called afterwards 

returned by [SDI_Send()](sdiprotocol_8h.md#function-sdi-send): command successfully sent, but response for this 




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100