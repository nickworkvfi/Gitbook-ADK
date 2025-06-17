---
title: ComConfig

---

# ComConfig



 [More...](#detailed-description)


`#include <com_config.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Com1aMode](class_com_config.md#enum-com1amode)** { Com1a_Usb =  0, Com1a_BtClient = 1, Com1a_BtServer = 2} |
| enum| **[MultiConnectMode](class_com_config.md#enum-multiconnectmode)** { MCM_Default =  0, MCM_Enabled =  1, MCM_Disabled = 2} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [ComConfig](class_com_config.md) & | **[getInstance](class_com_config.md#function-getinstance)**() |
| std::string | **[getCom1aModeName](class_com_config.md#function-getcom1amodename)**(unsigned mode) |
| bool | **[load](class_com_config.md#function-load)**(const std::string & com_if_file, [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & res, bool * storage_needed =0) |
| enum [MultiConnectMode](class_com_config.md#enum-multiconnectmode) | **[getMultiConnectMode](class_com_config.md#function-getmulticonnectmode)**() |
| void | **[lock](class_com_config.md#function-lock)**() |
| void | **[unlock](class_com_config.md#function-unlock)**() |
| pthread_mutex_t & | **[getMutex](class_com_config.md#function-getmutex)**() |
| std::string & | **[profile](class_com_config.md#function-profile)**() |
| const std::vector< std::string > & | **[whitelist](class_com_config.md#function-whitelist)**() |
| std::string & | **[bt_address](class_com_config.md#function-bt-address)**() |
| std::string & | **[bt_device](class_com_config.md#function-bt-device)**() |
| std::string & | **[com1a_address](class_com_config.md#function-com1a-address)**() |
| std::string & | **[com1a_device](class_com_config.md#function-com1a-device)**() |
| bool & | **[com1a_btclient_reconnect_idle](class_com_config.md#function-com1a-btclient-reconnect-idle)**() |
| unsigned & | **[com1a_mode](class_com_config.md#function-com1a-mode)**() |
| bool & | **[com1a_btserver_pairing_idle](class_com_config.md#function-com1a-btserver-pairing-idle)**() |
| std::string & | **[ble_address](class_com_config.md#function-ble-address)**() |
| std::string & | **[ble_device](class_com_config.md#function-ble-device)**() |
| const std::string & | **[bt_own_device_name](class_com_config.md#function-bt-own-device-name)**() |
| std::vector< unsigned > & | **[idx_list](class_com_config.md#function-idx-list)**() |
| void | **[clear](class_com_config.md#function-clear)**() |
| void | **[read](class_com_config.md#function-read)**(bool * storage_needed =0) |
| void | **[store](class_com_config.md#function-store)**() |

## Detailed Description

```cpp
class ComConfig;
```


class which holds settings of COM configuration file COM_IF_CONFIG_FILE 

## Public Types Documentation

### enum Com1aMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Com1a_Usb |  0|   |
| Com1a_BtClient | 1|   |
| Com1a_BtServer | 2|   |




### enum MultiConnectMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MCM_Default |  0|  Use default depending on SDI mode (no configuration available)  |
| MCM_Enabled |  1|  Multi-connection mode enabled, use lib_mADK_PP_Prot_ipc.so  |
| MCM_Disabled | 2|  Multi-connection mode disabled, use lib_mADK_PP_Prot_com.so  |




multi connection mode 


## Public Functions Documentation

### function getInstance

```cpp
static ComConfig & getInstance()
```


**Return**: reference to [ComConfig](class_com_config.md) singleton object 

returns the [ComConfig](class_com_config.md) instance as singleton object 


### function getCom1aModeName

```cpp
static std::string getCom1aModeName(
    unsigned mode
)
```


**Return**: operation mode name 

**Note**: Function is static and thread-safe and does not require protection with [lock()](class_com_config.md#function-lock). 

returns name of operation mode for COM1A profile of enum Com1aMode 


### function load

```cpp
static bool load(
    const std::string & com_if_file,
    vfiipc::JSObject & res,
    bool * storage_needed =0
)
```


**Parameters**: 

  * **com_if_file** file path to COM_IF.CFG in flash folder 
  * **res** JSON object retrieving the result 
  * **storage_needed** optional pointer to flag set to true, if the file is valid, but in old format and requires update. 


**Return**: true if file was found, is correclty formatted and contains a COM profile 

**Note**: Function is static and thread-safe and does not require protection with [lock()](class_com_config.md#function-lock). 

loads COM configuration from config file and checks the file for validity. Usually, COM configuration file is stored in SDI flash folder. 


### function getMultiConnectMode

```cpp
static enum MultiConnectMode getMultiConnectMode()
```


**Return**: value of enum MultiConnectMode 

**Note**: Function is static and thread-safe and does not require protection with [lock()](class_com_config.md#function-lock). 

Check (for Engage/Fusion devices), if multi-connection support with [mADK_PP_Prot](classm_a_d_k___p_p___prot.md) (IPC variant) has been enabled or disabled by configuration. Since [read()](class_com_config.md#function-read) requires bitmask of supported COM interface which is provided by the protocol, we must access the COM configuration file directly (bevor the protocol is started). 


### function lock

```cpp
inline void lock()
```


**Note**: All member function below require protection with this function before accessing data. 

locks the [ComConfig](class_com_config.md) object before accessing data. 


### function unlock

```cpp
inline void unlock()
```


unlocks the [ComConfig](class_com_config.md) object after accessing data 


### function getMutex

```cpp
inline pthread_mutex_t & getMutex()
```


**Return**: reference of internal mutex 

return the reference of internal mutex to allow the use of MutexLock() instead [lock()](class_com_config.md#function-lock)/unlock() 


### function profile

```cpp
inline std::string & profile()
```


**Return**: reference to m_profile 

member function, which require protection with [lock()](class_com_config.md#function-lock)/unlock returns active COM profile 


### function whitelist

```cpp
inline const std::vector< std::string > & whitelist()
```


**Return**: const reference to m_whitelist (read-only) 

returns whitelist of COM profiles 


### function bt_address

```cpp
inline std::string & bt_address()
```


**Return**: reference to m_bt_address 

returns address of the paired BT-client device (used for BT PAN profile) 


### function bt_device

```cpp
inline std::string & bt_device()
```


**Return**: reference to m_bt_device 

returns name of the paired BT-client device (used for BT PAN profile) 


### function com1a_address

```cpp
inline std::string & com1a_address()
```


**Return**: reference to m_com1a_address 

returns address of the paired BT-client device (used for COM1A profile BT-Client) 


### function com1a_device

```cpp
inline std::string & com1a_device()
```


**Return**: reference to m_com1a_device 

returns name of the paired BT-client device (used for COM1A profile BT-Client) 


### function com1a_btclient_reconnect_idle

```cpp
inline bool & com1a_btclient_reconnect_idle()
```


**Return**: reference to m_com1a_btclient_reconnect_idle 

returns flag which enables COM1A BT-client reconnect while idle 


### function com1a_mode

```cpp
inline unsigned & com1a_mode()
```


**Return**: reference to m_com1a_btclient_reconnect_idle 

returns mode for COM1A profile (one of enum Com1aMode) 


### function com1a_btserver_pairing_idle

```cpp
inline bool & com1a_btserver_pairing_idle()
```


**Return**: reference to m_com1a_btserver_pairing_idle 

returns flag which enables COM1A BT-server pairing while idle 


### function ble_address

```cpp
inline std::string & ble_address()
```


**Return**: reference to m_ble_address 

returns address of the last paired BLE device 


### function ble_device

```cpp
inline std::string & ble_device()
```


**Return**: reference to m_ble_device 

returns reference to name of the last paired BLE device 


### function bt_own_device_name

```cpp
inline const std::string & bt_own_device_name()
```


**Return**: const reference to m_bt_own_device_name 

returns reference to BT device name (of this terminal) used for BT pairing (for COM1A BT-client/server and BLE) 


### function idx_list

```cpp
inline std::vector< unsigned > & idx_list()
```


### function clear

```cpp
void clear()
```


clear current configuration settings and reset to appropriate defaults. 


### function read

```cpp
void read(
    bool * storage_needed =0
)
```


**Parameters**: 

  * **storage_needed** optional pointer to flag set to true, if the file requires update and call of [store()](class_com_config.md#function-store)


reads COM configuration from config file COM_IF_CONFIG_FILE from flash. Configuration is reset with [clear()](class_com_config.md#function-clear) and file is read again. If the file is not found, class member variables stay empty or use appropriate defaults. 


### function store

```cpp
void store()
```


stores COM configuration to config file COM_IF_CONFIG_FILE. 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100