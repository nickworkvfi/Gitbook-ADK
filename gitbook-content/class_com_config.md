---
hidden: true
title: ComConfig Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods)

`#include <`<a href="com__config_8h_source.md">com_config.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [Com1aMode](#af714a48ebd5dbbca4981e356a10e9f11) { [Com1a_Usb](#af714a48ebd5dbbca4981e356a10e9f11a953310e434e0a3fe29ae6ff1674f7129) = 0, [Com1a_BtClient](#af714a48ebd5dbbca4981e356a10e9f11aa89dc7579b9472e5258f23c1c1db5494) = 1, [Com1a_BtServer](#af714a48ebd5dbbca4981e356a10e9f11a474e667cc13de1b7303d4d712bd951bd) = 2 } |
| enum   | [MultiConnectMode](#afe439717727490cf1df729c2a6187c48) { [MCM_Default](#afe439717727490cf1df729c2a6187c48a8af98f4003e40af199298c820b083b6b) = 0, [MCM_Enabled](#afe439717727490cf1df729c2a6187c48a380bfbfd12b2d8a217045458e1d708b2) = 1, [MCM_Disabled](#afe439717727490cf1df729c2a6187c48a2a70c1d5b742b22562a6353e4b4759ba) = 2 } |

|  |  |
|----|----|
| Public Member Functions |  |
| void  | [lock](#aa81aed607133209dade63a226818224d) () |
| void  | [unlock](#a9278be8203e1c42e2619179882ae4403) () |
| pthread_mutex_t &  | [getMutex](#ae26916ef11a3f54b2530b55fcb592c16) () |
| std::string &  | [profile](#a9ca27570961b101e89318d3a3ac39d8f) () |
| const std::vector\< std::string \> &  | [whitelist](#a020b12d1010cec9f8c4b3a815f082955) () |
| std::string &  | [bt_address](#ade9b87727d0a33bc5331f9425e051e2f) () |
| std::string &  | [bt_device](#a180abc12542d25ee0bf2a8a73ca029c2) () |
| std::string &  | [com1a_address](#a60e1fbb37f36e32dcebe88ef7ca2b890) () |
| std::string &  | [com1a_device](#a6138436a34e24a76fe64a00a63fa23ce) () |
| bool &  | [com1a_btclient_reconnect_idle](#acf979aafcdf34b7cde58dd58e4da42b6) () |
| unsigned &  | [com1a_mode](#a9bed2c8bcb1ac3c1e1c9acdb843ef06a) () |
| bool &  | [com1a_btserver_pairing_idle](#a9373e79b97e460557e023229937c2f1e) () |
| std::string &  | [ble_address](#a650efc2582147b8afe73fb6864e8123e) () |
| std::string &  | [ble_device](#a60492ca27221615d8287a7c0453d83e1) () |
| const std::string &  | [bt_own_device_name](#ad0c5bcfac0afdd54eadcc6d1d8b08ba5) () |
| std::vector\< unsigned \> &  | [idx_list](#a94a140f49c60763246a9400fc2b149f4) () |
| void  | [clear](#ac8bb3912a3ce86b15842e79d0b421204) () |
| void  | [read](#a95212aa577485c0f3f2d50f1e20544ec) (bool \*storage_needed=0) |
| void  | [store](#af5d1fdcbfe78592afb590a4c244acf20) () |

|  |  |
|----|----|
| Static Public Member Functions |  |
| static <a href="class_com_config.md">ComConfig</a> &  | [getInstance](#a2305b98ede094139aa7d104ec73371fe) () |
| static std::string  | [getCom1aModeName](#a37d50030103171103d6f08f40c05f1ce) (unsigned mode) |
| static bool  | [load](#abb23423df3bfa5d6137393d5a22297ec) (const std::string &com_if_file, <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &res, bool \*storage_needed=0) |
| static enum [MultiConnectMode](#afe439717727490cf1df729c2a6187c48)  | [getMultiConnectMode](#a9658e01c9bc759c0ee2197ced4c6af4f) () |

## DetailedDescription {#detailed-description}

class which holds settings of COM configuration file COM_IF_CONFIG_FILE

## MemberEnumeration Documentation {#member-enumeration-documentation}

## Com1aMode <a href="#af714a48ebd5dbbca4981e356a10e9f11" id="af714a48ebd5dbbca4981e356a10e9f11"></a>

<p>enum [Com1aMode](#af714a48ebd5dbbca4981e356a10e9f11)</p>

| Enumerator      |     |
|-----------------|-----|
| Com1a_Usb       |     |
| Com1a_BtClient  |     |
| Com1a_BtServer  |     |

## MultiConnectMode <a href="#afe439717727490cf1df729c2a6187c48" id="afe439717727490cf1df729c2a6187c48"></a>

<p>enum [MultiConnectMode](#afe439717727490cf1df729c2a6187c48)</p>

multi connection mode

| Enumerator |  |
|----|----|
| MCM_Default  | <p>Use default depending on SDI mode (no configuration available)</p> |
| MCM_Enabled  | <p>Multi-connection mode enabled, use lib_mADK_PP_Prot_ipc.so</p> |
| MCM_Disabled  | <p>Multi-connection mode disabled, use lib_mADK_PP_Prot_com.so</p> |

## MemberFunction Documentation {#member-function-documentation}

## ble_address() <a href="#a650efc2582147b8afe73fb6864e8123e" id="a650efc2582147b8afe73fb6864e8123e"></a>

<p>std::string& ble_address</p>

inline

returns address of the last paired BLE device

### Returns

reference to m_ble_address

## ble_device() <a href="#a60492ca27221615d8287a7c0453d83e1" id="a60492ca27221615d8287a7c0453d83e1"></a>

<p>std::string& ble_device</p>

inline

returns reference to name of the last paired BLE device

### Returns

reference to m_ble_device

## bt_address() <a href="#ade9b87727d0a33bc5331f9425e051e2f" id="ade9b87727d0a33bc5331f9425e051e2f"></a>

<p>std::string& bt_address</p>

inline

returns address of the paired BT-client device (used for BT PAN profile)

### Returns

reference to m_bt_address

## bt_device() <a href="#a180abc12542d25ee0bf2a8a73ca029c2" id="a180abc12542d25ee0bf2a8a73ca029c2"></a>

<p>std::string& bt_device</p>

inline

returns name of the paired BT-client device (used for BT PAN profile)

### Returns

reference to m_bt_device

## bt_own_device_name() <a href="#ad0c5bcfac0afdd54eadcc6d1d8b08ba5" id="ad0c5bcfac0afdd54eadcc6d1d8b08ba5"></a>

<p>const std::string& bt_own_device_name</p>

inline

returns reference to BT device name (of this terminal) used for BT pairing (for COM1A BT-client/server and BLE)

### Returns

const reference to m_bt_own_device_name

## clear() <a href="#ac8bb3912a3ce86b15842e79d0b421204" id="ac8bb3912a3ce86b15842e79d0b421204"></a>

<p>void clear</p>

clear current configuration settings and reset to appropriate defaults.

## com1a_address() <a href="#a60e1fbb37f36e32dcebe88ef7ca2b890" id="a60e1fbb37f36e32dcebe88ef7ca2b890"></a>

<p>std::string& com1a_address</p>

inline

returns address of the paired BT-client device (used for COM1A profile BT-Client)

### Returns

reference to m_com1a_address

## com1a_btclient_reconnect_idle() <a href="#acf979aafcdf34b7cde58dd58e4da42b6" id="acf979aafcdf34b7cde58dd58e4da42b6"></a>

<p>bool& com1a_btclient_reconnect_idle</p>

inline

returns flag which enables COM1A BT-client reconnect while idle

### Returns

reference to m_com1a_btclient_reconnect_idle

## com1a_btserver_pairing_idle() <a href="#a9373e79b97e460557e023229937c2f1e" id="a9373e79b97e460557e023229937c2f1e"></a>

<p>bool& com1a_btserver_pairing_idle</p>

inline

returns flag which enables COM1A BT-server pairing while idle

### Returns

reference to m_com1a_btserver_pairing_idle

## com1a_device() <a href="#a6138436a34e24a76fe64a00a63fa23ce" id="a6138436a34e24a76fe64a00a63fa23ce"></a>

<p>std::string& com1a_device</p>

inline

returns name of the paired BT-client device (used for COM1A profile BT-Client)

### Returns

reference to m_com1a_device

## com1a_mode() <a href="#a9bed2c8bcb1ac3c1e1c9acdb843ef06a" id="a9bed2c8bcb1ac3c1e1c9acdb843ef06a"></a>

<p>unsigned& com1a_mode</p>

inline

returns mode for COM1A profile (one of enum Com1aMode)

### Returns

reference to m_com1a_btclient_reconnect_idle

## getCom1aModeName() <a href="#a37d50030103171103d6f08f40c05f1ce" id="a37d50030103171103d6f08f40c05f1ce"></a>

<p>string getCom1aModeName</p>

static

returns name of operation mode for COM1A profile of enum Com1aMode

### Returns

operation mode name


{% hint style="info" %}
Function is static and thread-safe and does not require protection with [lock()](#aa81aed607133209dade63a226818224d).
{% endhint %}

## getInstance() <a href="#a2305b98ede094139aa7d104ec73371fe" id="a2305b98ede094139aa7d104ec73371fe"></a>

<p><a href="class_com_config.md">ComConfig</a> & getInstance</p>

static

returns the <a href="class_com_config.md">ComConfig</a> instance as singleton object

### Returns

reference to <a href="class_com_config.md">ComConfig</a> singleton object

## getMultiConnectMode() <a href="#a9658e01c9bc759c0ee2197ced4c6af4f" id="a9658e01c9bc759c0ee2197ced4c6af4f"></a>

<p>enum [ComConfig::MultiConnectMode](#afe439717727490cf1df729c2a6187c48) getMultiConnectMode</p>

static

Check (for Engage/Fusion devices), if multi-connection support with <a href="classm_a_d_k___p_p___prot.md">mADK_PP_Prot</a> (IPC variant) has been enabled or disabled by configuration. Since [read()](#a95212aa577485c0f3f2d50f1e20544ec) requires bitmask of supported COM interface which is provided by the protocol, we must access the COM configuration file directly (bevor the protocol is started).

### Returns

value of enum MultiConnectMode


{% hint style="info" %}
Function is static and thread-safe and does not require protection with [lock()](#aa81aed607133209dade63a226818224d).
{% endhint %}

## getMutex() <a href="#ae26916ef11a3f54b2530b55fcb592c16" id="ae26916ef11a3f54b2530b55fcb592c16"></a>

<p>pthread_mutex_t& getMutex</p>

inline

return the reference of internal mutex to allow the use of MutexLock() instead [lock()](#aa81aed607133209dade63a226818224d)/unlock()

### Returns

reference of internal mutex

## idx_list() <a href="#a94a140f49c60763246a9400fc2b149f4" id="a94a140f49c60763246a9400fc2b149f4"></a>

<p>std::vector\<unsigned\>& idx_list</p>

inline

## load() <a href="#abb23423df3bfa5d6137393d5a22297ec" id="abb23423df3bfa5d6137393d5a22297ec"></a>

<p>bool load</p>

static

loads COM configuration from config file and checks the file for validity. Usually, COM configuration file is stored in SDI flash folder.

**Parameters**

\[in\] **com_if_file** file path to COM_IF.CFG in flash folder \[out\] **res** JSON object retrieving the result \[out\] **storage_needed** optional pointer to flag set to true, if the file is valid, but in old format and requires update.

### Returns

true if file was found, is correclty formatted and contains a COM profile


{% hint style="info" %}
Function is static and thread-safe and does not require protection with [lock()](#aa81aed607133209dade63a226818224d).
{% endhint %}

## lock() <a href="#aa81aed607133209dade63a226818224d" id="aa81aed607133209dade63a226818224d"></a>

<p>void lock</p>

inline

locks the <a href="class_com_config.md">ComConfig</a> object before accessing data.

{% hint style="info" %}
All member function below require protection with this function before accessing data.
{% endhint %}

## profile() <a href="#a9ca27570961b101e89318d3a3ac39d8f" id="a9ca27570961b101e89318d3a3ac39d8f"></a>

<p>std::string& profile</p>

inline

member function, which require protection with [lock()](#aa81aed607133209dade63a226818224d)/unlock returns active COM profile

### Returns

reference to m_profile

## read() <a href="#a95212aa577485c0f3f2d50f1e20544ec" id="a95212aa577485c0f3f2d50f1e20544ec"></a>

<p>void read</p>

reads COM configuration from config file COM_IF_CONFIG_FILE from flash. Configuration is reset with [clear()](#ac8bb3912a3ce86b15842e79d0b421204) and file is read again. If the file is not found, class member variables stay empty or use appropriate defaults.

**Parameters**

\[out\] **storage_needed** optional pointer to flag set to true, if the file requires update and call of store()

## store() <a href="#af5d1fdcbfe78592afb590a4c244acf20" id="af5d1fdcbfe78592afb590a4c244acf20"></a>

<p>void store</p>

stores COM configuration to config file COM_IF_CONFIG_FILE.

## unlock() <a href="#a9278be8203e1c42e2619179882ae4403" id="a9278be8203e1c42e2619179882ae4403"></a>

<p>void unlock</p>

inline

unlocks the <a href="class_com_config.md">ComConfig</a> object after accessing data

## whitelist() <a href="#a020b12d1010cec9f8c4b3a815f082955" id="a020b12d1010cec9f8c4b3a815f082955"></a>

<p>const std::vector\<std::string\>& whitelist</p>

inline

returns whitelist of COM profiles

### Returns

const reference to m_whitelist (read-only)

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="com__config_8h_source.md">com_config.h</a>
- sdi/src/<a href="com__config_8cpp.md">com_config.cpp</a>
