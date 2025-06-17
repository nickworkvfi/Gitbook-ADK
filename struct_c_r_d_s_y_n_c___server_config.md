---
title: CRDSYNC_ServerConfig

---

# CRDSYNC_ServerConfig



 [More...](#detailed-description)


`#include <crdsync_client.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const char * | **[hostname](struct_c_r_d_s_y_n_c___server_config.md#variable-hostname)**  |
| unsigned short | **[port](struct_c_r_d_s_y_n_c___server_config.md#variable-port)**  |

## Detailed Description

```cpp
struct CRDSYNC_ServerConfig;
```


Server configuration 

## Public Attributes Documentation

### variable hostname

```cpp
const char * hostname;
```


host name of server, NULL or empty string means localhost 


### variable port

```cpp
unsigned short port;
```


port to connect to, 0 means default port (5805) 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100