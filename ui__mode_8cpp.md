---
title: sdi/src/ui_mode.cpp

---

# sdi/src/ui_mode.cpp



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ComIfTable](struct_com_if_table.md)**  |
| struct | **[BtCom1aContext](struct_bt_com1a_context.md)**  |
| struct | **[IfInfo](struct_if_info.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[CCPInterfaces](ui__mode_8cpp.md#enum-ccpinterfaces)** { CCP_INTERFACE_ETH0 = 0, CCP_INTERFACE_ETH1 = 1, CCP_INTERFACE_WLAN0 = 2, CCP_INTERFACE_PPP_DIAL = 3, CCP_INTERFACE_GPRS0 = 4, CCP_INTERFACE_ETH_BT = 5, CCP_INTERFACE_PPP_BT = 6, CCP_INTERFACE_ETH_USB_GADGET = 7, CCP_INTERFACE_ETH_USB1_GADGET = 8, CCP_INTERFACE_ETH_USB_HOST_GADGET = 9, CCP_INTERFACE_PPP_USBD = 10, CCP_INTERFACE_BRIDGE = 11, CCP_INTERFACE_SERIAL_USBD = 12, CCP_INTERFACE_ETH_USB0 = 13, CCP_INTERFACE_BT = 14} |
| enum| **[ProfileSubType](ui__mode_8cpp.md#enum-profilesubtype)** { PST_NONE = 0, PST_INTERNAL_ANDROID = 1, PST_COM1A_BT_USB = 2, PST_COM1A_USB = 3, PST_EPP_TLS = 4} |
| enum| **[DisplayConnectStatus](ui__mode_8cpp.md#enum-displayconnectstatus)** { DCS_None = 0, DCS_ComWaitOpen = 1, DCS_ComOpened = 2, DCS_ComConnected = 4, DCS_ComFailed = 8, DCS_All = (DCS_ComWaitOpen | DCS_ComOpened | DCS_ComConnected | DCS_ComFailed)} |
| enum| **[BTCom1AOpts](ui__mode_8cpp.md#enum-btcom1aopts)** { BTCom1A_None = 0, BTCom1A_Headless = 1, BTCom1A_Reconnect = 2} |
| enum| **[BTPairingState](ui__mode_8cpp.md#enum-btpairingstate)** { BT_PairingStopped = 0, BT_PairingStarted, BT_ConfirmPIN, BT_ConfirmPINDone, BT_PairingSuccess, BT_PairingFailed, BT_PairingTimeout, BT_PairingCancelled} |

## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[eth_menu](ui__mode_8cpp.md#function-eth-menu)**(int new_idx) |
| bool | **[bt_pan_menu](ui__mode_8cpp.md#function-bt-pan-menu)**(int new_idx) |
| bool | **[wifi_menu](ui__mode_8cpp.md#function-wifi-menu)**(int new_idx) |
| bool | **[usb_eth_menu](ui__mode_8cpp.md#function-usb-eth-menu)**(int new_idx) |
| bool | **[com1a_menu](ui__mode_8cpp.md#function-com1a-menu)**(int new_idx) |
| bool | **[ble_menu](ui__mode_8cpp.md#function-ble-menu)**(int new_idx) |
| bool | **[displayCOMMenu](ui__mode_8cpp.md#function-displaycommenu)**(bool & activate_profile) |
| bool | **[displayInfoMenu](ui__mode_8cpp.md#function-displayinfomenu)**() |
| void | **[terminateCCPThread](ui__mode_8cpp.md#function-terminateccpthread)**() |
| void | **[stopCom1ABtPairingThread](ui__mode_8cpp.md#function-stopcom1abtpairingthread)**() |
| string | **[activateConnectionProfile](ui__mode_8cpp.md#function-activateconnectionprofile)**(int idx) |
| unsigned | **[enableIdleConnectStatus](ui__mode_8cpp.md#function-enableidleconnectstatus)**(unsigned dcs_mask =[DCS_All](ui__mode_8cpp.md#enumvalue-dcs-all)) |
| bool | **[showIdleConnectStatus](ui__mode_8cpp.md#function-showidleconnectstatus)**(int state =-1, int last_com_error =-1) |
| void | **[show_idle_connect_status](ui__mode_8cpp.md#function-show-idle-connect-status)**() |
| void * | **[io_menu_invoker](ui__mode_8cpp.md#function-io-menu-invoker)**(void * data) |
| void | **[ui_async_idlescreen_cb](ui__mode_8cpp.md#function-ui-async-idlescreen-cb)**(void * data, [UICBType](namespacevfigui.md#enum-uicbtype) type, [UICBData](classvfigui_1_1_u_i_c_b_data.md) & uidata) |
| void | **[init_ui_mode](ui__mode_8cpp.md#function-init-ui-mode)**() |
| bool | **[read_file_to_xmldoc](ui__mode_8cpp.md#function-read-file-to-xmldoc)**(const string & file, struct [XMLDocument](struct_x_m_l_document.md) & doc) |
| bool | **[write_xmldoc_to_file](ui__mode_8cpp.md#function-write-xmldoc-to-file)**(const string & file, const struct [XMLDocument](struct_x_m_l_document.md) & doc) |
| bool | **[writeBTAddrToLocalNetBtPanProfile](ui__mode_8cpp.md#function-writebtaddrtolocalnetbtpanprofile)**(const string & btDeviceAddr, const string & cp_name) |
| void * | **[ccp_thread_func](ui__mode_8cpp.md#function-ccp-thread-func)**(void * data) |
| bool | **[ccpWizardSupported](ui__mode_8cpp.md#function-ccpwizardsupported)**() |
| void | **[displayCCPWizard](ui__mode_8cpp.md#function-displayccpwizard)**(enum [CCPInterfaces](ui__mode_8cpp.md#enum-ccpinterfaces) type) |
| bool | **[enableBLE](ui__mode_8cpp.md#function-enableble)**(bool enable =true, enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) * com_errno =0) |
| bool | **[enableBTClientCom1A](ui__mode_8cpp.md#function-enablebtclientcom1a)**(bool enable =true, enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) * com_errno =0, int options =[BTCom1A_None](ui__mode_8cpp.md#enumvalue-btcom1a-none)) |
| int | **[displaySubmenu](ui__mode_8cpp.md#function-displaysubmenu)**(const char * headline, bool showConfigure =true) |
| void | **[network_bt_ext_cb](ui__mode_8cpp.md#function-network-bt-ext-cb)**(enum [com_NetworkEvent](libcom_8h.md#enum-com-networkevent) event, enum [com_NetworkType](libcom_8h.md#enum-com-networktype) type, const void * data, void * priv, enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) com_errno) |
| bool | **[btStartPairing](ui__mode_8cpp.md#function-btstartpairing)**(unsigned discovery_tout_sec, enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) * com_errno =0, bool ble =false) |
| enum [BTPairingState](ui__mode_8cpp.md#enum-btpairingstate) | **[btWaitForPairedDevice](ui__mode_8cpp.md#function-btwaitforpaireddevice)**(string & bt_addr, string & bt_name, bool(*)(void) cancel_cb =0, enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) * com_errno =0) |
| void | **[btStopPairing](ui__mode_8cpp.md#function-btstoppairing)**() |
| bool | **[btGetDeviceList](ui__mode_8cpp.md#function-btgetdevicelist)**(vector< pair< string, string > > & list) |
| void | **[btDeviceListResize](ui__mode_8cpp.md#function-btdevicelistresize)**(unsigned max_paired_devices) |
| bool | **[btSelectDevice](ui__mode_8cpp.md#function-btselectdevice)**(string & dev_addr, string & dev_name, const char * headline ="Select Bluetooth device") |
| void * | **[com1a_bt_thread_func](ui__mode_8cpp.md#function-com1a-bt-thread-func)**(void * data) |
| bool | **[startCom1ABtPairingThread](ui__mode_8cpp.md#function-startcom1abtpairingthread)**(enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) * com_errno =0) |
| bool | **[bt_async_cancel_cb](ui__mode_8cpp.md#function-bt-async-cancel-cb)**(void ) |
| bool | **[bt_pairing_submenu](ui__mode_8cpp.md#function-bt-pairing-submenu)**(const char * headline, bool ble =false) |
| void | **[get_iflist_for_ip](ui__mode_8cpp.md#function-get-iflist-for-ip)**(const char * ip_address, int af, vector< [IfInfo](struct_if_info.md) > & if_list) |
| void | **[displayCOMStatus](ui__mode_8cpp.md#function-displaycomstatus)**() |
| void | **[displaySWInfo](ui__mode_8cpp.md#function-displayswinfo)**() |
| void | **[init_com_profile](ui__mode_8cpp.md#function-init-com-profile)**(int supportedComIf, [ComConfig](class_com_config.md) & comcfg) |
| bool | **[select_com_profile](ui__mode_8cpp.md#function-select-com-profile)**(int comInterfaces, char ** ComFileName) |
| void | **[reset_com_profile](ui__mode_8cpp.md#function-reset-com-profile)**() |
| bool | **[multi_connection_support_enabled](ui__mode_8cpp.md#function-multi-connection-support-enabled)**() |
| bool | **[comcfg_file_valid](ui__mode_8cpp.md#function-comcfg-file-valid)**(const string & comcfg_file) |
| void | **[protocol_status_ui_update](ui__mode_8cpp.md#function-protocol-status-ui-update)**(const struct ProtStatus * status) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[idle_auto_com_init](ui__mode_8cpp.md#variable-idle-auto-com-init)**  |
| bool | **[com_setup_done](ui__mode_8cpp.md#variable-com-setup-done)**  |
| const struct [ComIfTable](struct_com_if_table.md)[] | **[comIfTable](ui__mode_8cpp.md#variable-comiftable)**  |
| pthread_mutex_t | **[connectStatusMutex](ui__mode_8cpp.md#variable-connectstatusmutex)**  |
| unsigned | **[displayConnectStatus](ui__mode_8cpp.md#variable-displayconnectstatus)**  |
| bool | **[com1a_wait_displayed](ui__mode_8cpp.md#variable-com1a-wait-displayed)**  |
| pthread_mutex_t | **[ccp_mutex](ui__mode_8cpp.md#variable-ccp-mutex)**  |
| pthread_cond_t | **[ccp_thread_cond](ui__mode_8cpp.md#variable-ccp-thread-cond)**  |
| pthread_cond_t | **[ccp_waiter_cond](ui__mode_8cpp.md#variable-ccp-waiter-cond)**  |
| bool | **[ccp_thread_flag](ui__mode_8cpp.md#variable-ccp-thread-flag)**  |
| bool | **[ccp_waiter_flag](ui__mode_8cpp.md#variable-ccp-waiter-flag)**  |
| bool | **[ccp_thread_running](ui__mode_8cpp.md#variable-ccp-thread-running)**  |
| pthread_t | **[ccp_thread](ui__mode_8cpp.md#variable-ccp-thread)**  |
| enum [CCPInterfaces](ui__mode_8cpp.md#enum-ccpinterfaces) | **[ccp_if_type](ui__mode_8cpp.md#variable-ccp-if-type)**  |
| pthread_mutex_t | **[btMutex](ui__mode_8cpp.md#variable-btmutex)**  |
| pthread_cond_t | **[btCond](ui__mode_8cpp.md#variable-btcond)**  |
| string | **[btPairingPIN](ui__mode_8cpp.md#variable-btpairingpin)**  |
| string | **[btAddress](ui__mode_8cpp.md#variable-btaddress)**  |
| string | **[btDeviceName](ui__mode_8cpp.md#variable-btdevicename)**  |
| enum [BTPairingState](ui__mode_8cpp.md#enum-btpairingstate) | **[bt_pairing_state](ui__mode_8cpp.md#variable-bt-pairing-state)**  |
| enum [com_ErrorCodes](libcom_8h.md#enum-com-errorcodes) | **[bt_pairing_errno](ui__mode_8cpp.md#variable-bt-pairing-errno)**  |
| pthread_mutex_t | **[com1a_bt_mutex](ui__mode_8cpp.md#variable-com1a-bt-mutex)**  |
| pthread_cond_t | **[com1a_bt_waiter_cond](ui__mode_8cpp.md#variable-com1a-bt-waiter-cond)**  |
| int | **[com1a_bt_init_result](ui__mode_8cpp.md#variable-com1a-bt-init-result)**  |
| bool | **[com1a_bt_thread_running](ui__mode_8cpp.md#variable-com1a-bt-thread-running)**  |
| bool | **[com1a_bt_thread_joined](ui__mode_8cpp.md#variable-com1a-bt-thread-joined)**  |
| pthread_t | **[com1a_bt_thread](ui__mode_8cpp.md#variable-com1a-bt-thread)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[FALL_THROUGH](ui__mode_8cpp.md#define-fall-through)**  |
|  | **[BT_PAIRING_TIMEOUT](ui__mode_8cpp.md#define-bt-pairing-timeout)**  |

## Types Documentation

### enum CCPInterfaces

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| CCP_INTERFACE_ETH0 | 0|   |
| CCP_INTERFACE_ETH1 | 1|   |
| CCP_INTERFACE_WLAN0 | 2|   |
| CCP_INTERFACE_PPP_DIAL | 3|   |
| CCP_INTERFACE_GPRS0 | 4|   |
| CCP_INTERFACE_ETH_BT | 5|   |
| CCP_INTERFACE_PPP_BT | 6|   |
| CCP_INTERFACE_ETH_USB_GADGET | 7|   |
| CCP_INTERFACE_ETH_USB1_GADGET | 8|   |
| CCP_INTERFACE_ETH_USB_HOST_GADGET | 9|   |
| CCP_INTERFACE_PPP_USBD | 10|   |
| CCP_INTERFACE_BRIDGE | 11|   |
| CCP_INTERFACE_SERIAL_USBD | 12|   |
| CCP_INTERFACE_ETH_USB0 | 13|   |
| CCP_INTERFACE_BT | 14|   |




### enum ProfileSubType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PST_NONE | 0|  no profile subtype  |
| PST_INTERNAL_ANDROID | 1|  allow this profile for Engage devices with internal Android only, e.g. CM5, M440, M424  |
| PST_COM1A_BT_USB | 2|  option to mark the profile to be used for COM1A (BT-SPP client/server and USB Host). Profile makred with PST_COM1A_BT_USB will skip profile with PST_COM1A_USB, which must be the next profile entry in table !!!  |
| PST_COM1A_USB | 3|  option to mark the profile to be used for COM1A (USB host only)  |
| PST_EPP_TLS | 4|  this profile is used for an external PINPad (EPP) using TLS over USB  |




### enum DisplayConnectStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| DCS_None | 0|  status display disabled for all, even for ComInterrupt, ComClose  |
| DCS_ComWaitOpen | 1|  show display updates for status ComWaitOpen  |
| DCS_ComOpened | 2|  show display updates for status ComOpened  |
| DCS_ComConnected | 4|  show display updates for status DCS_ComConnected  |
| DCS_ComFailed | 8|  show suppress display updates for status ComFailed  |
| DCS_All | (DCS_ComWaitOpen \| DCS_ComOpened \| DCS_ComConnected \| DCS_ComFailed)|   |




### enum BTCom1AOpts

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BTCom1A_None | 0|  no option  |
| BTCom1A_Headless | 1|  don't display wait screen to abort BT connnect  |
| BTCom1A_Reconnect | 2|  force reconnect, even if device was already connected  |




### enum BTPairingState

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BT_PairingStopped | 0|   |
| BT_PairingStarted | |   |
| BT_ConfirmPIN | |   |
| BT_ConfirmPINDone | |   |
| BT_PairingSuccess | |   |
| BT_PairingFailed | |   |
| BT_PairingTimeout | |   |
| BT_PairingCancelled | |   |





## Functions Documentation

### function eth_menu

```cpp
static bool eth_menu(
    int new_idx
)
```


### function bt_pan_menu

```cpp
static bool bt_pan_menu(
    int new_idx
)
```


### function wifi_menu

```cpp
static bool wifi_menu(
    int new_idx
)
```


### function usb_eth_menu

```cpp
static bool usb_eth_menu(
    int new_idx
)
```


### function com1a_menu

```cpp
static bool com1a_menu(
    int new_idx
)
```


### function ble_menu

```cpp
static bool ble_menu(
    int new_idx
)
```


### function displayCOMMenu

```cpp
static bool displayCOMMenu(
    bool & activate_profile
)
```


### function displayInfoMenu

```cpp
static bool displayInfoMenu()
```


### function terminateCCPThread

```cpp
static void terminateCCPThread()
```


### function stopCom1ABtPairingThread

```cpp
static void stopCom1ABtPairingThread()
```


stop asynchronous BT prairing started with startCom1ABtPairingThread() before. The function returns after the BT pairing thread has been terminated 


### function activateConnectionProfile

```cpp
static string activateConnectionProfile(
    int idx
)
```


Activates the ADKCOM connection profile for index `idx` of table comIfTable and (on success) it returns the full filepath of the ADKCOM connection profile. As first step, the function checks for existance of the profile in external user configuration folder and in home configuration folder. If profile is found, the function will run additional post actions as second step (e.g. additional initialisations), which are required for the new active profile. In case the profile was found (and all optional post actions were successful), the function returns the filepath of the profile, else an empty string is returned. Depending on the COM profile, the following actions are performed:

1. BT-PAN profile: BT PAN connection profile is modified with recent BT device address. Thus, the connection profile is stored in writeable flash configuration folder and the function will return the path of the modified file to use it for ADKCOM.
2. BLE, COM1A BT, BT-PAN profile: For BT related profiles, the function will power the BT module, if required. In addition it sets the BT device name (ADKCOM property COM_PROP_BT_OWN_NAME), which is provided by SDI COM configuration see ([ComConfig::bt_own_device_name](class_com_config.md#function-bt-own-device-name)).
3. Wifi profile: If required, the function will power the Wifi module. idxconnection profile index (see table comIfTable) 

absolute file path of the connection profile 

The function uses global configuration [ComConfig](class_com_config.md), which requires lock of mutex [ComConfig::getMutex()](class_com_config.md#function-getmutex). Since it is invoked by [mADK_PP_Prot()](classm_a_d_k___p_p___prot.md) select cyclically with the same idx, it implements some optimisations with static variables. Therefore, it must not be invoked by multiple threads at the same time. This shouldn't happen, if protected by [ComConfig::getMutex()](class_com_config.md#function-getmutex) as mentioned above. 


### function enableIdleConnectStatus

```cpp
static unsigned enableIdleConnectStatus(
    unsigned dcs_mask =DCS_All
)
```


**Parameters**: 

  * **enable** true to enable idle screen connection status updates, else false 


**Return**: old value of displayConnectStatus variable before the function was called. 

function to enable/disable idle screen updates with connection status 


### function showIdleConnectStatus

```cpp
static bool showIdleConnectStatus(
    int state =-1,
    int last_com_error =-1
)
```


**Parameters**: 

  * **state** connection state of the PP protocol. For internal calls by SDI server, this value is set to -1, which reads the status from the PP protocol. 
  * **last_com_error** 


**Return**: true, if the idle screen was displayed, else false 

Show idlescreen with connection status. This function is either invoked by the protocol status callback mADK_PP_Prot::status_cb() or from SDI server to update the idle screen (e.g. when leaving the COM menu). 


### function show_idle_connect_status

```cpp
void show_idle_connect_status()
```


function to read the connect status from the SDI protocol and to display with the idlescreen. This is usually triggered by the running SDI protocol via callback, but in special situations this is required to be triggered by SDI (e.g. in EPP mode during SDI startup). 


### function io_menu_invoker

```cpp
void * io_menu_invoker(
    void * data
)
```


### function ui_async_idlescreen_cb

```cpp
static void ui_async_idlescreen_cb(
    void * data,
    UICBType type,
    UICBData & uidata
)
```


**Parameters**: 

  * **data** NULL (unused) 
  * **type** type / reason why the callback was invoked 
  * **uidata** object to access data of the current dialog 


UI callback for asynchronous idlescreen, triggered by function [sysDisplayIdleScreen()](sys_8cpp.md#function-sysdisplayidlescreen). 


### function init_ui_mode

```cpp
void init_ui_mode()
```


This module contains implementation, which is additionally required to support standard UI mode. Most of these implementations are UI related (e.g. to provide COM menus, idlescreen etc.) SDI variants using this module are compiled without define HEADLESS to add UI standard mode, in addition to headless mode. Finally, program parameter &ndash;headless will switch the SDI mode at startup. Recently supported platforms with UI support are: VOS/VOS2/VOS3 Note: This module also contains functions invoked for headless mode on these platforms, too. This is to cover the same behavior as in UI mode. (e.g. selection of a COM profile by COM_IF.CFG (COM settings file). function called once at startup to initialize UI mode of SDI 


### function read_file_to_xmldoc

```cpp
static bool read_file_to_xmldoc(
    const string & file,
    struct XMLDocument & doc
)
```


### function write_xmldoc_to_file

```cpp
static bool write_xmldoc_to_file(
    const string & file,
    const struct XMLDocument & doc
)
```


### function writeBTAddrToLocalNetBtPanProfile

```cpp
static bool writeBTAddrToLocalNetBtPanProfile(
    const string & btDeviceAddr,
    const string & cp_name
)
```


### function ccp_thread_func

```cpp
void * ccp_thread_func(
    void * data
)
```


### function ccpWizardSupported

```cpp
static bool ccpWizardSupported()
```


### function displayCCPWizard

```cpp
static void displayCCPWizard(
    enum CCPInterfaces type
)
```


### function enableBLE

```cpp
static bool enableBLE(
    bool enable =true,
    enum com_ErrorCodes * com_errno =0
)
```


### function enableBTClientCom1A

```cpp
static bool enableBTClientCom1A(
    bool enable =true,
    enum com_ErrorCodes * com_errno =0,
    int options =BTCom1A_None
)
```


### function displaySubmenu

```cpp
static int displaySubmenu(
    const char * headline,
    bool showConfigure =true
)
```


**Parameters**: 

  * **headline** text used for menu headline 


**Return**: 0: Configure entry selected 1: Activate entry selected <0: Cancel pressed or timeout 

Displays a submenu with 2 menu enties (Configure, Activate). 


### function network_bt_ext_cb

```cpp
static void network_bt_ext_cb(
    enum com_NetworkEvent event,
    enum com_NetworkType type,
    const void * data,
    void * priv,
    enum com_ErrorCodes com_errno
)
```


### function btStartPairing

```cpp
bool btStartPairing(
    unsigned discovery_tout_sec,
    enum com_ErrorCodes * com_errno =0,
    bool ble =false
)
```


### function btWaitForPairedDevice

```cpp
static enum BTPairingState btWaitForPairedDevice(
    string & bt_addr,
    string & bt_name,
    bool(*)(void) cancel_cb =0,
    enum com_ErrorCodes * com_errno =0
)
```


### function btStopPairing

```cpp
static void btStopPairing()
```


### function btGetDeviceList

```cpp
static bool btGetDeviceList(
    vector< pair< string, string > > & list
)
```


**Parameters**: 

  * **list** list of paired BT devices pair entries (MAC address, device name). 


**Return**: true for success, else false (obtaining list from ADKCOM failed) 

Read list of paired BT devices from ADKCOM. An entry of the list contains a pair of strings: First entry always stores the BT MAC address. The second provides the BT device name, which is optional. 


### function btDeviceListResize

```cpp
static void btDeviceListResize(
    unsigned max_paired_devices
)
```


**Parameters**: 

  * **max_paired_devices** if the recent ADKCOM list of BT devices exceeds the this value, the list of BT devices will be resized to it. If value 0 is passed, the function does nothing. 


Read list of paired BT devices from ADKCOM and if the number of devices exceedes value of `max_paired_devices`, the ADKCOM device list is resized to this value. Always the oldest devices are removed, which were chronologically paired at first. 


### function btSelectDevice

```cpp
static bool btSelectDevice(
    string & dev_addr,
    string & dev_name,
    const char * headline ="Select Bluetooth device"
)
```


**Parameters**: 

  * **dev_addr** MAC address of selected BT device. Pass an address as input to pre-select an entry in the menu. 
  * **dev_name** name of the selected BT device (of no name is available, an empty string is returned. 
  * **headline** dialog headline (can be NULL to ommit headline) 


**Return**: true for success, else false for error or if menu was aborted by user. 

Show menu with paired BT devices for selection of one device. Address and name of selected device is returned. 


### function com1a_bt_thread_func

```cpp
void * com1a_bt_thread_func(
    void * data
)
```


### function startCom1ABtPairingThread

```cpp
static bool startCom1ABtPairingThread(
    enum com_ErrorCodes * com_errno =0
)
```


**Parameters**: 

  * **com_errno** pointer to ADKCOM error code variable, can be set to NULL, if no error info is required 


**Return**: true, if BT pairing thread was successfully starte or is already running 

**Note**: Call stopCom1ABtPairingThread() to stop a started BT pairing thread. 

start BT pairing asynchronously in a separate thread. The function return true, if BT pairing was successfully started or if the BT prairing thread was already started and is already running In case of error the ADKCOM error code of [btStartPairing()](ui__mode_8cpp.md#function-btstartpairing) is returned. 


### function bt_async_cancel_cb

```cpp
static bool bt_async_cancel_cb(
    void 
)
```


### function bt_pairing_submenu

```cpp
static bool bt_pairing_submenu(
    const char * headline,
    bool ble =false
)
```


**Parameters**: 

  * **headline** headline text used for this pairing menu 
  * **ble** set to true, if this function is used for BLE pairing 


**Return**: true if BLE was enabled for BT pairing 

generic BT menu used for BT pairing for COM types

* COM1A (BT-Server)
* COM1A (BT-client)
* BLE


For COM type BLE the paramter `ble` is set to true. In this case the function will return true, if BLE was enabled during pairing. For other COM types than BLE this function always return false. 


### function get_iflist_for_ip

```cpp
static void get_iflist_for_ip(
    const char * ip_address,
    int af,
    vector< IfInfo > & if_list
)
```


### function displayCOMStatus

```cpp
static void displayCOMStatus()
```


### function displaySWInfo

```cpp
static void displaySWInfo()
```


### function init_com_profile

```cpp
static void init_com_profile(
    int supportedComIf,
    ComConfig & comcfg
)
```


**Parameters**: 

  * **supportedComIf** supported COM interfaces, bitmask of ADKCOM enum com_FeatureMask1 
  * **comcfg** object of class [ComConfig](class_com_config.md) storing results 


**Note**: Since function is modifying _comcfg_, it requires locking of [ComConfig::getMutex()](class_com_config.md#function-getmutex)

Initialize parameter _comcfg_ with settings of COM configuration file and set the initial table index according the configuration that was read. Regarding the mask of supported COM interface provided with parameter _supportedComIf_) and whitelist of configuration file the index list of objectd _comcfg_ is filled with entries of COM types to be displayed in the COM menu. 


### function select_com_profile

```cpp
bool select_com_profile(
    int comInterfaces,
    char ** ComFileName
)
```


**Parameters**: 

  * **comInterfaces** available COM interfaces, bitmask of ADKCOM enum com_FeatureMask1 
  * **ComFileName** full path to COM profile to use 


**Return**: true on success, else false on error 

Function invoked by SDI protocol to select and specify the used COM profile. The function passes the available COM interfaces in parameter _comInterfaces_ as bitmask with values of ADKCOM enum com_FeatureMask1, so that SDI COM settings menu is displayed with corresponding entries with configuration options. With first invocation at startup with default settings, SDI shows up a COM setting wizard (in standard UI mode) from which the user is able to select the COM profile to use. Once the profile and settings are applied the function knows the stored settings for further SDI startups. On success, the function returns full path of the COM profile assigned to pointer of parameter _ComFileName_. The supplied buffer of this parameter is static, thus, the caller (SDI protocol) doen't need to care about to release resources of it. 


### function reset_com_profile

```cpp
void reset_com_profile()
```


Function to reset selected COM profile and clear current COM configuration. This will force reading of COM configuration and selection of COM profile with next call of [select_com_profile()](ui__mode_8h.md#function-select-com-profile). 


### function multi_connection_support_enabled

```cpp
bool multi_connection_support_enabled()
```


**Return**: true, if the IPC variant of the SDI protocol library shall be used on VOS/VOS2/VOS3, else false (e.g. disabled by configuration or wrong platform). 

For VOS/VOS2/VOS3 devices this function returns true, if SDI protocol with multi-connection support (using ADKIPC) was enabled by COM settings file. For other platforms this function just returns false. 


### function comcfg_file_valid

```cpp
bool comcfg_file_valid(
    const string & comcfg_file
)
```


### function protocol_status_ui_update

```cpp
void protocol_status_ui_update(
    const struct ProtStatus * status
)
```



## Attributes Documentation

### variable idle_auto_com_init

```cpp
static bool idle_auto_com_init = true;
```


### variable com_setup_done

```cpp
static bool com_setup_done = false;
```


### variable comIfTable

```cpp
const struct ComIfTable[] comIfTable =
{
  
  {COM_LAN_1,                        PST_NONE,             "ETH (LAN)",          COM_PREFIX CONNECT_LAN_FILE,          eth_menu            },
  {COM_BLUETOOTH,                    PST_NONE,             "BT PAN",             COM_PREFIX CONNECT_BT_FILE,           bt_pan_menu,        },
  {COM_WIFI,                         PST_NONE,             "WiFi",               COM_PREFIX CONNECT_WIFI_FILE,         wifi_menu,          },
  {COM_SERIAL_USBD,                  PST_NONE,             "USB (serial)",       COM_PREFIX CONNECT_USB_SER_FILE,      0,                  },
  {COM_LAN_USBD,                     PST_NONE,             "USB (LAN)",          COM_PREFIX CONNECT_USB_LAN_FILE,      usb_eth_menu,       },
  {COM_SERIAL_COM1A | COM_BLUETOOTH, PST_COM1A_BT_USB,     "COM1A",              COM_PREFIX CONNECT_COM1A_FILE,        com1a_menu          },
  {COM_SERIAL_COM1A,                 PST_COM1A_USB,        "COM1A (USB)",        COM_PREFIX CONNECT_COM1A_FILE,        0,                  },
  {COM_BLE,                          PST_NONE,             "BLE",                COM_PREFIX CONNECT_BLE_FILE,          ble_menu,           },
  {COM_SERIAL_1,                     PST_NONE,             "COM1",               COM_PREFIX CONNECT_COM1_FILE,         0,                  },
  {0,                                PST_NONE,             "ANY (LAN)",          COM_PREFIX CONNECT_ANY_FILE,          eth_menu,           },
  {0,                                PST_NONE,             "LOCALHOST",          COM_PREFIX CONNECT_LO_FILE,           0,                  },
  {0,                                PST_INTERNAL_ANDROID, "ANDROID (intern)",   COM_PREFIX CONNECT_ANDROID_FILE,      0,                  },
  {0,                                PST_EPP_TLS,          "" , EPP_PREFIXCONNECT_EPP_TLS,           0,                  }
};
```


### variable connectStatusMutex

```cpp
static pthread_mutex_t connectStatusMutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable displayConnectStatus

```cpp
static unsigned displayConnectStatus = DCS_None;
```


### variable com1a_wait_displayed

```cpp
static bool com1a_wait_displayed = false;
```


### variable ccp_mutex

```cpp
static pthread_mutex_t ccp_mutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable ccp_thread_cond

```cpp
static pthread_cond_t ccp_thread_cond = PTHREAD_COND_INITIALIZER;
```


### variable ccp_waiter_cond

```cpp
static pthread_cond_t ccp_waiter_cond = PTHREAD_COND_INITIALIZER;
```


### variable ccp_thread_flag

```cpp
static bool ccp_thread_flag = false;
```


### variable ccp_waiter_flag

```cpp
static bool ccp_waiter_flag = false;
```


### variable ccp_thread_running

```cpp
static bool ccp_thread_running = false;
```


### variable ccp_thread

```cpp
static pthread_t ccp_thread;
```


### variable ccp_if_type

```cpp
enum CCPInterfaces ccp_if_type;
```


### variable btMutex

```cpp
static pthread_mutex_t btMutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable btCond

```cpp
static pthread_cond_t btCond;
```


### variable btPairingPIN

```cpp
static string btPairingPIN;
```


### variable btAddress

```cpp
static string btAddress;
```


### variable btDeviceName

```cpp
static string btDeviceName;
```


### variable bt_pairing_state

```cpp
enum BTPairingState bt_pairing_state = BT_PairingStopped;
```


### variable bt_pairing_errno

```cpp
enum com_ErrorCodes bt_pairing_errno;
```


### variable com1a_bt_mutex

```cpp
static pthread_mutex_t com1a_bt_mutex = PTHREAD_MUTEX_INITIALIZER;
```


### variable com1a_bt_waiter_cond

```cpp
static pthread_cond_t com1a_bt_waiter_cond = PTHREAD_COND_INITIALIZER;
```


### variable com1a_bt_init_result

```cpp
static int com1a_bt_init_result = -1;
```


### variable com1a_bt_thread_running

```cpp
static bool com1a_bt_thread_running = false;
```


### variable com1a_bt_thread_joined

```cpp
static bool com1a_bt_thread_joined = true;
```


### variable com1a_bt_thread

```cpp
static pthread_t com1a_bt_thread;
```



## Macros Documentation

### define FALL_THROUGH

```cpp
#define FALL_THROUGH 
```


### define BT_PAIRING_TIMEOUT

```cpp
#define BT_PAIRING_TIMEOUT 120
```


## Source code

```cpp

#ifndef HEADLESS

#include "ui_mode.h"
#include "com_config.h"
#include "sys.h"
#include "ui.h"
#include "epp/counterTop.h"
#include "madk_pp_protocol.h"
#include "ipc/jsobject.h"
#include "ipc/notify.h"
#include "xmldoc.h"
#include "pathutil.h"
#include "pthreadutil.h" // MutexLock
#include "filesystem.h"
#include "_logf.h"
#include "main.h"
#include "version.h"
#include "csd-version.h"
#include "sdikeyservice.h"
#include "loadplugin.h"
#include "sdi_text.h"
#include "timestamp.h"

/* protocol library header
 * Depending on define NO_LIBCOM this either includes for
 * NO_LIBCOM==0: "com/libcom.h" (requires linking of ADKCOM library)
 * NO_LIBCOM==1: "libcom_adapt/libcom_adapt.h" (requires adding ADKCOM library adaption module libcom_adapt.cpp) */
#include "lib_mADK_PP_Prot/mADK_PP_Prot.h"

#include <arpa/inet.h>
#include <ifaddrs.h>
#include <sys/socket.h>
#include <netdb.h>
#include <net/if.h>
#include <sys/stat.h>

using namespace sdi;
using namespace std;
using namespace vfigui;

#if __cplusplus >= 201402L // since C++14 use [[fallthrough]] to suppress warnings
  #define FALL_THROUGH [[fallthrough]];
#else
  #define FALL_THROUGH
#endif

#if defined (_VOS) || defined (_VOS3) // CCP only available on VOS/VOS2/VOS3
#  include "com/libccp.h"
#else
// provide some CCP definitions required for compiler (e.g. for x86)
enum CCPInterfaces
{
  CCP_INTERFACE_ETH0                = 0,
  CCP_INTERFACE_ETH1                = 1,
  CCP_INTERFACE_WLAN0               = 2,
  CCP_INTERFACE_PPP_DIAL            = 3,
  CCP_INTERFACE_GPRS0               = 4,
  CCP_INTERFACE_ETH_BT              = 5,
  CCP_INTERFACE_PPP_BT              = 6,
  CCP_INTERFACE_ETH_USB_GADGET      = 7,
  CCP_INTERFACE_ETH_USB1_GADGET     = 8,
  CCP_INTERFACE_ETH_USB_HOST_GADGET = 9,
  CCP_INTERFACE_PPP_USBD            = 10,
  CCP_INTERFACE_BRIDGE              = 11,
  CCP_INTERFACE_SERIAL_USBD         = 12,
  CCP_INTERFACE_ETH_USB0            = 13,
  CCP_INTERFACE_BT                  = 14
};
#endif

enum ProfileSubType
{
  PST_NONE             = 0, 
  PST_INTERNAL_ANDROID = 1, 
  PST_COM1A_BT_USB     = 2, 
  PST_COM1A_USB        = 3, 
  PST_EPP_TLS          = 4, 
};

#define BT_PAIRING_TIMEOUT 120   // timeout for BT pairing in menu and for idle pairing

/* set to true/false, if auto ADKCOM initialisation is temporarly
 * enabled/disabled by select_com_profile() (e.g. disabled, if the menu is entered). The flag is
 * recently applied for profiles COM1A BT-Client (idle reconnect) and COM1A BT-Server (idle pairing) */
static bool idle_auto_com_init = true;

/* flag required for select_com_profile() indicating initial COM setup was done.
 * Note: The flag will be reset by reset_com_profile()! */
static bool com_setup_done = false;

struct ComIfTable
{
  /* bitmask with values of enum com_InterfaceMask (ADKCOM network capabilities).
   * Only those profile entries are allowed to be used, which fit the ADKCOM device
   * capabilities. If bits are combined, all bits must match the ADKCOM capability bits.
   * If this value set to 0, the profile is always allowed to be used as long as not
   * disabled by additional \c subtype below. */
  int comIf;
  /* ADKCOM capabilitiy bits in value \c comIf do not ambiguously identify the profile
   * (e.g. same bits used for multiple entries \c comIf is set to 0), this value contains
   * an additional profile subtype (see enum ProfileSubType), for which additional conditions
   * must be fulfilled to enable and activate the profile. If this value is set to PST_NONE,
   * it depends on ADKCOM capabilitiy bits in value \c comIf only, if the profile is enabled. */
  enum ProfileSubType subtype;
  // SDI menu text
  const char *menuText;
  // COM profile filename
  const char *comIfFile;
  /* submenu function, returns true if new profile shall be enabled,
   * additional data is added to data map (e.g. BT address)
   * \param[in] new_idx comIfTable table index of the profile to enable
   * \return true if the new profile shall be enabled */
  bool (*menu_func)(int new_idx);
};

static bool eth_menu(int new_idx);
static bool bt_pan_menu(int new_idx);
static bool wifi_menu(int new_idx);
static bool usb_eth_menu(int new_idx);
static bool com1a_menu(int new_idx);
static bool ble_menu(int new_idx);
static bool displayCOMMenu(bool &activate_profile);
static bool displayInfoMenu();
static void terminateCCPThread();
static void stopCom1ABtPairingThread();
static string activateConnectionProfile(int idx);

const struct ComIfTable comIfTable[] =
{
  // Supported network feature       Profile subtype       Menu text             Config file                           Submenu function
  {COM_LAN_1,                        PST_NONE,             "ETH (LAN)",          COM_PREFIX CONNECT_LAN_FILE,          eth_menu            },
  {COM_BLUETOOTH,                    PST_NONE,             "BT PAN",             COM_PREFIX CONNECT_BT_FILE,           bt_pan_menu,        },
  {COM_WIFI,                         PST_NONE,             "WiFi",               COM_PREFIX CONNECT_WIFI_FILE,         wifi_menu,          },
  {COM_SERIAL_USBD,                  PST_NONE,             "USB (serial)",       COM_PREFIX CONNECT_USB_SER_FILE,      0,                  },
  {COM_LAN_USBD,                     PST_NONE,             "USB (LAN)",          COM_PREFIX CONNECT_USB_LAN_FILE,      usb_eth_menu,       },
  {COM_SERIAL_COM1A | COM_BLUETOOTH, PST_COM1A_BT_USB,     "COM1A",              COM_PREFIX CONNECT_COM1A_FILE,        com1a_menu          },
  {COM_SERIAL_COM1A,                 PST_COM1A_USB,        "COM1A (USB)",        COM_PREFIX CONNECT_COM1A_FILE,        0,                  },
  {COM_BLE,                          PST_NONE,             "BLE",                COM_PREFIX CONNECT_BLE_FILE,          ble_menu,           },
  {COM_SERIAL_1,                     PST_NONE,             "COM1",               COM_PREFIX CONNECT_COM1_FILE,         0,                  },
  {0,                                PST_NONE,             "ANY (LAN)",          COM_PREFIX CONNECT_ANY_FILE,          eth_menu,           },
  {0,                                PST_NONE,             "LOCALHOST",          COM_PREFIX CONNECT_LO_FILE,           0,                  },
  {0,                                PST_INTERNAL_ANDROID, "ANDROID (intern)",   COM_PREFIX CONNECT_ANDROID_FILE,      0,                  },
  {0,                                PST_EPP_TLS,          "" /*menu disabled*/, EPP_PREFIX CONNECT_EPP_TLS,           0,                  }
};

// mutex to synchronize function showIdleConnectStatus() called by SDI server and PP protocol
static pthread_mutex_t connectStatusMutex = PTHREAD_MUTEX_INITIALIZER;
/* bits to suppress specific connection status display updates.
 * Note: So far, ComInterrupt and ComClose are not considered with separate
 *       bits, since the these states are covered by DCS_None and DCS_All. */
enum DisplayConnectStatus
{
  DCS_None         = 0,  
  DCS_ComWaitOpen  = 1,  
  DCS_ComOpened    = 2,  
  DCS_ComConnected = 4,  
  DCS_ComFailed    = 8,  
  DCS_All          = (DCS_ComWaitOpen | DCS_ComOpened | DCS_ComConnected | DCS_ComFailed) 
};
// flag to enable connection status message with protocol_status_ui_update()
static unsigned displayConnectStatus = DCS_None;
// flag to control COM1A "Wait for connection" with ComFailed and COM_ERR_DEV_OPEN
static bool com1a_wait_displayed = false;

static unsigned enableIdleConnectStatus(unsigned dcs_mask = DCS_All)
{
  MutexLock m(&connectStatusMutex);
  unsigned oldval = displayConnectStatus;
  displayConnectStatus = dcs_mask;

  // reset flag to display COM1A "Wait for connection" again
  if (dcs_mask == DCS_All)
  {
    com1a_wait_displayed = false;
  }

  return oldval;
}

static bool showIdleConnectStatus(int state = -1, int last_com_error = -1)
{
  if (!ui_enabled())
  {
    return false;
  }

  MutexLock m(&connectStatusMutex);

  if (displayConnectStatus == DCS_None)
  {
    return false;
  }

  // internal SDI server call -> read status from protocol
  if (state == -1)
  {
    mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
    struct ProtStatus status;

    if (!proto->get_status(&status))
    {
      _LOGF_ERROR("%s: get_status() failed, protocol not running", __FUNCTION__);
      return false;
    }

    state = (int)status.connection_state;
    last_com_error = status.last_com_errno;
  }

  // show "Wait for Countertop on USB..." if EPP
  if (vfiepm::CounterTop::getInstance().isEpp())
  {
    mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();

    /* 1: protocol wasn't started yet (or was stopped, e.g. in EPP mode)
     * 2: protocol still running, but ComClosed signals that it will stop */
    if (proto->get_protocol_state() == mADK_PP_Prot::PS_Stopped // 1
        || (enum ConnectionState)state == ComClosed)            // 2
    {
      sysDisplayIdleScreen(Idle_MenuEnabled | Idle_WaitLogo, "Wait for Countertop on USB...");
      return true;
    }
  }

  switch ((enum ConnectionState)state)
  {
    case ComWaitOpen:
      if (!(displayConnectStatus & DCS_ComWaitOpen))
      {
        return false; // connect status ComWaitOpen suppressed
      }

      // display idle screen
      sysDisplayIdleScreen(Idle_MenuEnabled | Idle_WaitLogo, "Open COM inteface...");
      break;

    case ComOpened:
      if (!(displayConnectStatus & DCS_ComOpened))
      {
        return false; // connect status ComOpened suppressed
      }

      sysDisplayIdleScreen(Idle_MenuEnabled | Idle_WaitLogo, "Wait for connection...");
      break;

    case ComConnected:
    {
      if (!(displayConnectStatus & DCS_ComConnected))
      {
        return false; // connect status ComConnected suppressed
      }

      // display normal idle screen
      sysDisplayIdleScreen(Idle_MenuEnabled);
      break;
    }

    case ComFailed:
    {
      if (!(displayConnectStatus & DCS_ComFailed))
      {
        return false; // connect status ComFailed suppressed
      }

      ComConfig &comcfg = ComConfig::getInstance();
      MutexLock mconfig(&comcfg.getMutex());

      /* COM1A (BT-client, BT-server and USB) uses virtual channels,
       * which are created by system service in background. This requires
       * some special handling for the display depending on the COM1A mode. */
      if (comcfg.idx() != -1
          && comIfTable[comcfg.idx()].subtype == PST_COM1A_BT_USB)
      {
        // COM1A BT-client
        if (comcfg.com1a_mode() == ComConfig::Com1a_BtClient)
        {
          if (comcfg.com1a_btclient_reconnect_idle())
          {
            // show an async error dialog
            ui_dialog(uiPrint("Connect failed!<br><br>COM Error:<br>%s",
                              com_GetErrorString((enum com_ErrorCodes)last_com_error)),
                      DLG_ErrorLogo | DLG_NoLEDs | DLG_IgnoreExtAbort | DLG_Async);
            return true;
          } // else fall through and display COM error with synchronous UI dialog
        }
        else // COM1A BT-server, COM1A (USB)
        {
          /* As long as virtual channels are not created, there is no connection and ADKCOM
           * just returns COM_ERR_DEV_OPEN when SDI protocol calls com_ConnectAsync().
           * Thus, SDI protocol more or less polls with com_ConnectAsync() for a new connection
           * and cyclically we get the same error. Thus, the first ComFailed with COM_ERR_DEV_OPEN
           * will display "Wait for connection", following are suppressed to avoid flickering display. */
          if (last_com_error == COM_ERR_DEV_OPEN)
          {
            if (comcfg.com1a_btserver_pairing_idle())
            {
              // while active idle pairing startCom1ABtPairingThread() displays the idlescreen
              return false;
            }

            if (!com1a_wait_displayed)
            {
              sysDisplayIdleScreen(Idle_MenuEnabled | Idle_WaitLogo, "Wait for connection...");
              com1a_wait_displayed = true;
              return true;
            }
            else
            {
              return false;
            }
          }

          /* other error codes are considered as critical, thus,
           * fall through and display COM error with synchronous UI dialog */
        }
      }

      const char *menu_text = "";

      enum IdleLockType lock_type = sysGetIdleScreenLocked();

      // no option to enter menu, if idle screen was locked by sysSetIdleScreenLocked()
      if (lock_type != ILT_ApiLock)
      {
        if (lock_type == ILT_AdminLock)
        {
          menu_text = "<br><br>Enter admin menu to configure COM interface.";
        }
        else
        {
          menu_text = "<br><br>Enter menu to configure COM interface.";
        }

        /* stop display status for this COM type (do it only at once),
          unless menu is entered, to re-configure COM interface */
        displayConnectStatus = false;
      }

      ui_dialog(uiPrint("COM Error:<br>%s%s",
                        com_GetErrorString((enum com_ErrorCodes)last_com_error), menu_text),
                DLG_ErrorLogo | DLG_EnterKey | DLG_IgnoreExtAbort);
      // display normal idle screen (in case of locked idle screen, menu is not displayed)
      sysDisplayIdleScreen(Idle_MenuEnabled);
      break;
    }

    case ComInterrupt:
    {
      // display COM1A "Wait for connection" again, if connection was interrupted
      com1a_wait_displayed = false;

      ComConfig &comcfg = ComConfig::getInstance();
      MutexLock mconfig(&comcfg.getMutex());

      // show connect lost for COM1A over BT and ask for reconnect
      if (comcfg.idx() != -1
          && comIfTable[comcfg.idx()].subtype == PST_COM1A_BT_USB
          && comcfg.com1a_mode() == ComConfig::Com1a_BtClient
          && comcfg.com1a_btclient_reconnect_idle())
      {
        /* stop display status for this COM type, since re-open
         * will result a status call with ComFailed */
        displayConnectStatus = false;

        int res = ui_dialog(
                    uiPrint("Lost connection to COM1A Bluetooth device %s (%s).<br><br>Reconnect to device?",
                            comcfg.com1a_device().c_str(), comcfg.com1a_address().c_str()),
                    DLG_ErrorLogo | DLG_EnterKey | DLG_CancelKey | DLG_IgnoreExtAbort);

        if (res == RESULT_OK)
        {
          // enable auto COM1A reconnect with next call of select_com_profile()
          idle_auto_com_init = true;
          return false;
        }

        // disable auto COM1A reconnect in function select_com_profile() temporary
        idle_auto_com_init = false;
        // display normal idle screen
        sysDisplayIdleScreen(Idle_MenuEnabled);
        break;
      }

      /* else fall through */
    }

    // fall through
    case ComClosed:  // do nothing for normal COM close
    default:
      return false;
  }

  return true;
}

// function exported for update UI idlescreen by main()
void show_idle_connect_status()
{
  (void)showIdleConnectStatus();
}

/* menu invoker thread. This thread is required, since displayCOMMenu() invokes
 * CCP wizard, which itself uses asynchronous UI callbacks. Since ADKGUI uses
 * only 1 thread used for all UI callbacks, we have to start the menu in a different
 * thread so that the ui_async_idlescreen_cb() returns */
void *io_menu_invoker(void *data)
{
  (void)data;

  // if we have already an active COM, decline incoming commands with busy error code
  mADK_PP_ProtBusyLock bl(false); // no command context, block all connections

  if (!bl.locked())
  {
    ui_dialog("SDI command active, menu locked.",
              DLG_WarningLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
    return 0;
  }

  // Enter a critical section for power management, Standby suppressed
  pm_setCriticalSection(true);

  /* disable connection status updates on idlescreen
   * Note: showIdleConnectStatus() requires comcfg_mutex, therefore, we must
   *       call it before obtaining the mutex below to avoid deadlock ! */
  unsigned old_value = enableIdleConnectStatus(DCS_None);

  /* syncronize with select_com_profile(),
   * so that menu can update COM config safety */
  ComConfig &comcfg = ComConfig::getInstance();
  MutexLock mconfig(&comcfg.getMutex());

  // disable auto COM initialisation in function select_com_profile() temporary
  idle_auto_com_init = false;
  // disable idle COM1A BT pairing (if enabled)
  stopCom1ABtPairingThread();

  bool activate_profile = false;

  while (displayCOMMenu(activate_profile));

  string new_profile;

  if (activate_profile)
  {
    new_profile = activateConnectionProfile(comcfg.idx());

    // profile couldn't be activated
    if (new_profile.empty())
    {
      ui_dialog(uiPrint("Failed to activate COM profile %s!", comIfTable[comcfg.idx()].menuText),
                DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
    }
  }

  /* menu has updated COM config, thus, we release mutex so
   * that select_com_profile() can access ComConfig again
   * and set_com_profile() is waiting for this callback thread */
  mconfig.unlock();

  /* returning from menu with enabled admin mode will disable admin menu for idle screen.
   * Note: This functions does nothing, if admin mode is disabled by configuration at all. */
  sysSetIdleScreenAdminMenu(false);

  // switch to COM profile
  if (!new_profile.empty())  // ensures that comcfg.idx() is valid
  {
    // display idle screen
    sysDisplayIdleScreen(Idle_MenuEnabled | Idle_WaitLogo, "Initialize COM inteface...");
    // enable connection status updates on idlescreen
    enableIdleConnectStatus();
    // activate the new COM profile
    mADK_PP_Prot::getInstance()->set_com_profile(new_profile.c_str());
  }
  else
  {
    // enable connection status updates on idlescreen again
    enableIdleConnectStatus(old_value);

    // show the recent connection status on idle screen
    if (!showIdleConnectStatus())
    {
      // display normal idle screen, if showIdleConnectStatus() did nothing
      sysDisplayIdleScreen(Idle_MenuEnabled);
    }
  }

  // Leave a critical section for power management, Standby allowed
  pm_setCriticalSection(false);
  // if enabled by config, enable auto COM initialisation in function select_com_profile()
  idle_auto_com_init = true;
  return 0;
}
static void ui_async_idlescreen_cb(void *data, UICBType type, UICBData &uidata)
{
  if (type != UI_CB_RESULT)
  {
    return;
  }

  bool was_admin_screen = sysSetIdleScreenFinished((unsigned long)data);

  int res = uidata.result();

  switch (res)
  {
    case 0:   // menu button
    {
      pthread_t th;
      pthread_create_detached(&th, io_menu_invoker, 0);
      break;
    }

    case 1:   // info button
    {
      // if we have already an active COM, decline incoming commands with busy error code
      mADK_PP_ProtBusyLock bl(false); // no command context, block all connections

      if (!bl.locked())
      {
        ui_dialog("SDI command active, menu locked.",
                  DLG_WarningLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
        return;
      }

      // Enter a critical section for power management, Standby suppressed
      pm_setCriticalSection(true);

      /* disable connection status updates on idlescreen
       * Note: showIdleConnectStatus() requires ComConfig::getMutex(), therefore,
       *       we must call it before obtaining the mutex below to avoid deadlock ! */
      unsigned old_value = enableIdleConnectStatus(DCS_None);

      /* syncronize with select_com_profile(),
       * so that menu can access COM config safety */
      ComConfig &comcfg = ComConfig::getInstance();
      MutexLock mconfig(&comcfg.getMutex());

      // disable auto COM initialisation in function select_com_profile() temporary
      idle_auto_com_init = false;
      // disable idle COM1A BT pairing (if enabled)
      stopCom1ABtPairingThread();

      // display the info menu
      while (displayInfoMenu());

      /* menu has accessed COM config, thus, we release mutex so
       * that showIdleConnectStatus() can access config again */
      mconfig.unlock();

      /* returning from menu with enabled admin mode will disable admin menu for idle screen.
       * Note: This functions does nothing, if admin mode is disabled by configuration at all. */
      sysSetIdleScreenAdminMenu(false);

      // enable connection status updates on idlescreen again
      enableIdleConnectStatus(old_value);

      // show the recent connection status on idle screen
      if (!showIdleConnectStatus())
      {
        // display normal idle screen, if showIdleConnectStatus() did nothing
        sysDisplayIdleScreen(Idle_MenuEnabled);
      }

      // Leave a critical section for power management, Standby allowed
      pm_setCriticalSection(false);
      // if enabled by config, enable auto COM initialisation in function select_com_profile()
      idle_auto_com_init = true;
      break;
    }

    case 2:   // admin mode has triggered admin menu (key comination 2-5-8 or touch sequence (4 display corners)
    {
      sysSetIdleScreenAdminMenu(true);
      sysDisplayIdleScreen(Idle_MenuEnabled, "ADMIN MODE");
      break;
    }

    case UI_ERR_TIMEOUT:   // idle screen timed out
    {
      // idle screen with admin menu timed out -> display idle screen w/o admin menu again
      if (was_admin_screen)
      {
        sysSetIdleScreenAdminMenu(false);

        // show the recent connection status on idle screen
        if (!showIdleConnectStatus())
        {
          // display normal idle screen, if showIdleConnectStatus() did nothing
          sysDisplayIdleScreen();
        }
      }

      break;
    }

    default:
      break;
  }
}


void init_ui_mode()
{
  // set application ID for IPC notifications
  vfiipc::ipcSetAppID("SDI_Server");
  // init UI interface
  ui_init(ui_async_idlescreen_cb);
  // Enable display area for virtual LEDs
  ui_enableLEDs();
  // activate UI update of idlescreen with connection status
  enableIdleConnectStatus();
}


/* helper function to read a file into XML document object
 * \param[in] file name of the file to read
 * \param[out] doc XML document object
 * \return true for success, else false
 */
static bool read_file_to_xmldoc(const string &file, struct XMLDocument &doc)
{
  bool ret = false;
  XMLDocument__clear(&doc);
  FILE *fp = fopen(file.c_str(), "rb");

  if (fp)
  {
    vector<char> v;
    size_t r = 0, i = 0;

    do
    {
      v.resize(i + 1025);
      r = fread(&v[i], 1, 1024, fp);
      i += r;
    }
    while (r == 1024);

    v[i] = 0;
    fclose(fp);

    if (v[0] && XMLDocument__read(&doc, &v[0]))
    {
      ret = true;
    }
  }

  return ret;
}

/* helper function to write a XML document object to file
 * \param[in] file name of the file to write
 * \param[out] doc XML document object
 * \return true for success, else false
 */
static bool write_xmldoc_to_file(const string &file, const struct XMLDocument &doc)
{
  vector<char> v;
  v.resize(1024);
  int size;

  // -1 (buffer too small)
  while ((size = XMLDocument__write(&doc, &v[0], v.size())) == -1)
  {
    v.resize(v.size() * 2);
  }

  // remove XML header
  string data(&v[0], size);
  size_t pos = data.find("<?xml");

  if (pos != string::npos)
  {
    size_t pos2 = data.find("?>", pos + 5);

    if (pos2 != string::npos)
    {
      data.erase(pos, pos2 + 2 - pos);
    }

    while (data[0] == '\n')
    {
      data.erase(0, 1);
    }
  }

  return sdi::filesystem::write_file(file.c_str(), data);
}

/* ADKCOM requires to add the address of the paired BT device to network profile of connection type BT PAN.
 * This function reads the network profile from connection profile \c cp_name and adds the BT address
 * \c btDeviceAddress to XML element NETWORK_PROFILE/BT_ADDR of the network profile, which is stored in
 * home flash directory. If the network profile path in the connection profile (XML element
 * CONNECTION_PROFILE/CONNECTION/NETWORK does not already point to home flash directory (e.g. after user
 * configuration package has been installed), the network profile path is updated. In this case
 * the existing network profile (if any) is overwritten with content of the network profile of the
 * new configuration.
 * \param[in] btDeviceAddr BT device address to be added to network profile
 * \param[in] cp_name of connection profile, which refers to the network profile
 * \return true for success, else false error
 */
static bool writeBTAddrToLocalNetBtPanProfile(const string &btDeviceAddr, const string &cp_name)
{
  bool retval;
  struct XMLDocument cp_doc; // connection profile data
  struct XMLDocument np_doc; // network profile data
  struct XMLNode *np_node, *n;
  const char *val;
  bool write_cp = false;
  bool write_np = false;
  string np_name; // filename of network profile
  const char *ext[] = {"", ".xml", ".XML"};

  XMLDocument__Constructor(&cp_doc, XMLTokenizer__UTF8);
  XMLDocument__Constructor(&np_doc, XMLTokenizer__UTF8);

  retval = read_file_to_xmldoc(cp_name, cp_doc);

  if (!retval)
  {
    _LOGF_ERROR("%s: cannot read connection profile %s", __FUNCTION__, cp_name.c_str());
    goto done;
  }

  // read the network profile name from connection profile
  np_node = XMLDocument__findNode(&cp_doc, "CONNECTION_PROFILE/CONNECTION/NETWORK/#0");

  if (!np_node || (val = XMLNode__getValue(np_node)) == 0 || !strlen(val))
  {
    _LOGF_ERROR("writeBTAddrToLocalNetBtPanProfile: value of element CONNECTION_PROFILE/CONNECTION/NETWORK not found in connection profile %s", cp_name.c_str());
    goto done;
  }

  // read the network profile filename (try with different extensions like ADKCOM does)
  for (unsigned i = 0; i < (sizeof(ext) / sizeof(ext[0])); i++)
  {
    np_name = string(val) + string(ext[i]);
    retval = read_file_to_xmldoc(np_name, np_doc);

    if (retval)
    {
      break;
    }
  }

  if (!retval)
  {
    _LOGF_ERROR("%s: cannot read network profile %s referred by connection profile %s", __FUNCTION__, val, cp_name.c_str());
    goto done;
  }

  /* if connection profile does not already refer to network profile in flash,
   * the configuration has changed and we have to update both files in flash */
  if (np_name.compare(0, strlen(sdi::filesystem::home_flash_dir()), sdi::filesystem::home_flash_dir()) != 0)
  {
    np_name = sdi::filesystem::home_flash_file(COM_PREFIX LOCAL_NET_BT_PAN_FILE);
    // update network profile name in connection profile
    XMLNode__setValue(np_node, np_name.c_str());
    // write both files to flash (connection and network profile)
    write_cp = write_np = true;
  }

  // update network profile values: behave the same as old SDI server an add defaults for missing mandatory values
  np_node = XMLDocument__findNode(&np_doc, "NETWORK_PROFILE");

  if (!np_node)
  {
    np_node = XMLNode__Create("NETWORK_PROFILE", 0);
    XMLDocument__insertNode(&np_doc, "NETWORK_PROFILE", np_node);
    write_np = true; // write network profile to flash
  }

  // add default TYPE node with "LAN"
  n = XMLNode__findNode(np_node, "TYPE");

  if (!n)
  {
    XMLNode__insertNode(np_node, "TYPE/+", XMLNode__Create(0, "LAN"));
    write_np = true; // write network profile to flash
  }

  // add default timeout
  n = XMLNode__findNode(np_node, "TIMEOUT");

  if (!n)
  {
    XMLNode__insertNode(np_node, "TIMEOUT/+", XMLNode__Create(0, "40000"));
    write_np = true; // write network profile to flash
  }

  // add default device name
  n = XMLNode__findNode(np_node, "DEVICE_NAME");

  if (!n)
  {
    XMLNode__insertNode(np_node, "DEVICE_NAME/+", XMLNode__Create(0, "BT_PAN"));
    write_np = true; // write network profile to flash
  }

  // add default startup mode
  n = XMLNode__findNode(np_node, "STARTUP_MODE");

  if (!n)
  {
    XMLNode__insertNode(np_node, "STARTUP_MODE/+", XMLNode__Create(0, "AUTO"));
    write_np = true; // write network profile to flash
  }

  // add default DHCP setting
  n = XMLNode__findNode(np_node, "DHCP_ENABLED");

  if (!n)
  {
    XMLNode__insertNode(np_node, "DHCP_ENABLED/+", XMLNode__Create(0, "1"));
    write_np = true; // write network profile to flash
  }

  /* if provided by COM_IF.cfg (or entered via menu), update network profile with
   * with this BT address, otherwise use pre-configured BT address in the profile (if any) */
  n = XMLNode__findNode(np_node, "BT_ADDR/#0");
  val = "";

  if (n)
  {
    val = XMLNode__getValue(n);

    if (!val)
    {
      val = "";
    }
  }

  if (!btDeviceAddr.empty())
  {
    if (btDeviceAddr.compare(val) != 0)
    {
      if (n)
      {
        XMLNode__setValue(n, btDeviceAddr.c_str());
      }
      else
      {
        XMLNode__insertNode(np_node, "BT_ADDR/+", XMLNode__Create(0, btDeviceAddr.c_str()));
      }

      write_np = true; // write network profile in flash
    } // else: BT address already added
  }
  else
  {
    if (strlen(val) == 0)
    {
      _LOGF_ERROR("%s: value of element NETWORK_PROFILE/BT_ADDR not found in network profile %s", __FUNCTION__, np_name.c_str());
      goto done;
    }
  }

  // write connection profile
  if (write_cp)
  {
    retval = write_xmldoc_to_file(cp_name, cp_doc);

    if (!retval)
    {
      _LOGF_ERROR("%s: cannot write connection profile %s", __FUNCTION__, cp_name.c_str());
      goto done;
    }
  }

  // write network profile
  if (write_np)
  {
    retval = write_xmldoc_to_file(np_name, np_doc);

    if (!retval)
    {
      _LOGF_ERROR("%s: cannot write network profile %s", __FUNCTION__, np_name.c_str());
      goto done;
    }
  }

done:
  XMLDocument__Destructor(&cp_doc);
  XMLDocument__Destructor(&np_doc);
  return retval;
}

static string activateConnectionProfile(int idx)
{
  if (idx < 0 || idx >= (int)(sizeof(comIfTable) / sizeof(comIfTable[0])))
  {
    return "";
  }

  // PWMADK-2671: Use internal EPP COM profile (installed with base package)
  if (comIfTable[idx].subtype == PST_EPP_TLS)
  {
    // return filepath, since ComConfig::read() already checked for existance
    return sdi::filesystem::home_config_file(comIfTable[idx].comIfFile);
  }

  // prefer connection profile from external user configuration folder
  string profile = sdi::filesystem::lookup_config_file(comIfTable[idx].comIfFile);

  if (profile.empty())
  {
    return "";
  }

  /* for BT PAN we need to add the BT device address to ADKCOM network profile,
   * which is referred by the BT connection profile that was already moved to
   * writeable flash folder (see function sdi::filesystem::config_sync() called at startup) */
  if (comIfTable[idx].comIf == COM_BLUETOOTH)
  {
    profile = sdi::filesystem::home_flash_file(comIfTable[idx].comIfFile);

    static string last_profile, last_bt_address;
    ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked

    if (profile != last_profile || last_bt_address != comcfg.bt_address())
    {
      if (!writeBTAddrToLocalNetBtPanProfile(comcfg.bt_address(), profile))
      {
        last_profile.clear();
        last_bt_address.clear();
        return "";
      }

      last_profile = profile;
      last_bt_address = comcfg.bt_address();
    }
  }

  // feature2 mask used for BT and Wifi (see below)
  static int features2 = 0;

  // for BT related profiles, power the BT module (if required) and set the BT device name
  if (comIfTable[idx].comIf & (COM_BLUETOOTH | COM_BLE)) // BT-PAN, COM1A (BT) and BLE
  {
    enum com_ErrorCodes com_errno;

    if (!features2)
    {
      if (com_GetDevicePropertyInt(COM_PROP_SUPPORTED_FEATURES_2, &features2, &com_errno) != 0)
      {
        _LOGF_ERROR("%s: com_GetDevicePropertyInt(COM_PROP_SUPPORTED_FEATURES_2) failed (errno = %d)", __FUNCTION__, com_errno);
        features2 = 0;
        return "";
      }
    }

    // no auto-power configured
    if (features2 & COM_FEATURE2_DEVICE_NO_AUTOPOWER)
    {
      enum com_DevicePowerMode power_mode;

      // check BT module is powered
      if (com_PowerModeStatus(COM_DEVICE_BT, &power_mode, &com_errno) != 0)
      {
        _LOGF_ERROR("%s: com_PowerModeStatus(COM_DEVICE_BT) failed (errno = %d)", __FUNCTION__, com_errno);
        power_mode = COM_DEVICE_POWER_OFF;
      }

      if (power_mode != COM_DEVICE_POWER_ON)
      {
        // power the BT module
        if (com_PowerModeSet(COM_DEVICE_BT, COM_DEVICE_POWER_ON, &com_errno) != 0)
        {
          _LOGF_ERROR("%s: com_PowerModeSet(COM_DEVICE_BT, COM_DEVICE_POWER_ON) failed (errno = %d)", __FUNCTION__, com_errno);
          // not able to power BT module
          return "";
        }
      }
    }

    // set the BT device name for this terminal (if no auto-power mode is enabled, this will power the BT module by API call)
    static string last_bt_own_device_name;
    ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked

    if (comcfg.bt_own_device_name() != last_bt_own_device_name)
    {
      if (com_SetDevicePropertyString(COM_PROP_BT_OWN_NAME, comcfg.bt_own_device_name().c_str(), &com_errno) != 0)
      {
        _LOGF_ERROR("%s: com_SetDevicePropertyString(COM_PROP_BT_OWN_NAME,%s) failed (errno = %d)",
                    __FUNCTION__, comcfg.bt_own_device_name().c_str(), com_errno);
        last_bt_own_device_name.clear();
        return "";
      }

      last_bt_own_device_name = comcfg.bt_own_device_name();
    }
  }

  // for Wifi profiles, power the Wifi module (if required)
  if (comIfTable[idx].comIf & COM_WIFI)
  {
    enum com_ErrorCodes com_errno;

    if (!features2)
    {
      if (com_GetDevicePropertyInt(COM_PROP_SUPPORTED_FEATURES_2, &features2, &com_errno) != 0)
      {
        _LOGF_ERROR("%s: com_GetDevicePropertyInt(COM_PROP_SUPPORTED_FEATURES_2) failed (errno = %d)", __FUNCTION__, com_errno);
        features2 = 0;
        return "";
      }
    }

    if (features2 & COM_FEATURE2_DEVICE_NO_AUTOPOWER)
    {
      enum com_DevicePowerMode power_mode;

      if (com_PowerModeStatus(COM_DEVICE_WIFI, &power_mode, &com_errno) != 0)
      {
        _LOGF_ERROR("%s: com_PowerModeStatus(COM_DEVICE_WIFI) failed (errno = %d)", __FUNCTION__, com_errno);
        power_mode = COM_DEVICE_POWER_OFF;
      }

      if (power_mode != COM_DEVICE_POWER_ON)
      {
        // power the Wifi module
        if (com_PowerModeSet(COM_DEVICE_WIFI, COM_DEVICE_POWER_ON, &com_errno) != 0)
        {
          _LOGF_ERROR("%s: com_PowerModeSet(COM_DEVICE_WIFI,COM_DEVICE_POWER_ON) failed (errno = %d)", __FUNCTION__, com_errno);
          // not able to power Wifi module
          return "";
        }
      }
    }
  }

  return profile;
}

/* libCCP stuff */
static pthread_mutex_t ccp_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t ccp_thread_cond = PTHREAD_COND_INITIALIZER;
static pthread_cond_t ccp_waiter_cond = PTHREAD_COND_INITIALIZER;
static bool ccp_thread_flag = false;
static bool ccp_waiter_flag = false;
static bool ccp_thread_running = false;
static pthread_t ccp_thread;
enum CCPInterfaces ccp_if_type;

void *ccp_thread_func(void *data)
{
  (void) data;
  MutexLock m(&ccp_mutex);
  // UI initialization
  uiSetLocalProperties(true); // use own UI settings for CCP
  // setup the CCP resource path
  int w, h, cd, nk, t;
  uiGetPropertyInt(UI_DEVICE_WIDTH, &w);
  uiGetPropertyInt(UI_DEVICE_HEIGHT, &h);
  uiGetPropertyInt(UI_DEVICE_COLOR_DEPTH, &cd);
  uiGetPropertyInt(UI_DEVICE_KEY_COUNT, &nk);
  uiGetPropertyInt(UI_DEVICE_SUPPORTS_TOUCH, &t);
  char device_dir[256];
  sprintf(device_dir, "%dx%d%c%d%c", w, h, cd > 1 ? 'C' : 'M', nk, t == 1 ? 'T' : 'N');
  string dir;
  const char *ccp_res_dir = sdi::filesystem::ccp_resource_dir();
  // set resource path for CCP
  dir = pathcat(ccp_res_dir ? ccp_res_dir : "www/ccp", device_dir);
  uiSetPropertyString(UI_PROP_RESOURCE_PATH, dir);
  // set resource default path for CCP
  dir = pathcat(ccp_res_dir ? ccp_res_dir : "www/ccp", "default");
  uiSetPropertyString(UI_PROP_RESOURCE_DEFAULT_PATH, dir);
  // re-read the gui.ini with UI settings
  uiReadConfig();
  // load the CPP catalog file
  uiSetCatalog("en-US.ctlg"); // recently only en-US supported
  // signal UI initialization is done
  ccp_waiter_flag = true;
  pthread_cond_signal(&ccp_waiter_cond);

  while (1)
  {
    ccp_thread_flag = false;

    while (!ccp_thread_flag)
    {
      pthread_cond_wait(&ccp_thread_cond, &ccp_mutex);
    }

    if (!ccp_thread_running)
    {
      break;
    }

#if defined (_VOS) || defined (_VOS3)

    // display CCP wizard for this COM interface
    if (ccp_setWhiteList(&ccp_if_type, 1) == CCP_LIB_OK)
    {
      const char *ccp_db_dir = sdi::filesystem::ccp_database_dir();

      if (ccp_db_dir)
      {
        string ccp_db_file = pathcat(ccp_db_dir, CCP_DATABASE_FILE);
        ccp_wizard(ccp_db_file.c_str(), true);
      }
      else
      {
        // shouldn't happen, since already checked by ccpWizardSupported()
        uiInvoke("No CCP support for this platform<br><br>"
                 "<button accesskey='&#13' action='return 1'>OK</button>");
      }
    }

#else
    // shouldn't happen, since already checked by ccpWizardSupported()
    uiInvoke("No CCP support for this platform<br><br>"
             "<button accesskey='&#13' action='return 1'>OK</button>");
#endif
    // signal CCP wizard has returned
    ccp_waiter_flag = true;
    pthread_cond_signal(&ccp_waiter_cond);
  }

  return 0;
}

static void terminateCCPThread()
{
  MutexLock m(&ccp_mutex);

  if (!ccp_thread_running)
  {
    return;
  }

  ccp_thread_running = false;
  ccp_thread_flag = true;
  pthread_cond_signal(&ccp_thread_cond);
  m.unlock();
  pthread_join(ccp_thread, 0);
}

static bool ccpWizardSupported()
{
  static int ccpSupported = -1;

  if (ccpSupported < 0)
  {
    ccpSupported = 0;

    // CCP is supported, if CCP resources are installed and database folder exists
    if (sdi::filesystem::ccp_resource_dir() && sdi::filesystem::ccp_database_dir())
    {
      ccpSupported = 1;
    }
  }

  return (ccpSupported == 1);
}

static void displayCCPWizard(enum CCPInterfaces type)
{
  MutexLock m(&ccp_mutex);

  if (!ccp_thread_running)
  {
    int r = pthread_create(&ccp_thread, 0, ccp_thread_func, 0);

    if (r)
    {
      return;
    }

    ccp_thread_running = true;
    // wait for UI initialization
    ccp_waiter_flag = false;

    while (!ccp_waiter_flag)
    {
      pthread_cond_wait(&ccp_waiter_cond, &ccp_mutex);
    }
  }

  ccp_if_type = type;
  // signal CCP thread to show the wizard
  ccp_thread_flag = true;
  pthread_cond_signal(&ccp_thread_cond);
  // wait for return of CCP wizard
  ccp_waiter_flag = false;

  while (!ccp_waiter_flag)
  {
    pthread_cond_wait(&ccp_waiter_cond, &ccp_mutex);
  }
}

static bool enableBLE(bool enable = true, enum com_ErrorCodes *com_errno = 0)
{
  static bool ble_enabled = false;

  if (enable && ble_enabled)
  {
    return true;  // already enabled
  }

  if (!enable && !ble_enabled)
  {
    return true;  // already disabled
  }

  if (enable)
  {
    string gatt_file = sdi::filesystem::lookup_config_file(COM_PREFIX BLE_GATT_FILE);
    ble_enabled = (com_BTGATTStart(gatt_file.c_str(), com_errno) == 0);

    if (!ble_enabled)
    {
      _LOGF_ERROR("%s: com_BTGATTStart(%s) failed (errno = %d)", __FUNCTION__, gatt_file.c_str(), *com_errno);
    }

    return ble_enabled;
  }

  com_BTGATTStop(com_errno);
  ble_enabled = false;
  return true;
}

struct BtCom1aContext
{
  pthread_mutex_t mutex;
  pthread_cond_t cond;
  bool flag;
  bool abort_ui;
  bool ui_enabled;
  bool is_reconnect;
  pthread_t ui_thread;

  BtCom1aContext(bool enable_ui, bool reconnect)
  {
    pthread_mutex_init(&mutex, 0);
    pthread_condattr_t attr;
    pthread_condattr_init(&attr);
    pthread_condattr_setclock(&attr, CLOCK_MONOTONIC);
    pthread_cond_init(&cond, &attr);
    pthread_condattr_destroy(&attr);
    flag = false;
    abort_ui = false;
    ui_enabled = false;

    if (enable_ui)
    {
      ui_enabled = (pthread_create(&ui_thread, 0, ui_thread_func, this) == 0);
    }

    is_reconnect = reconnect;
  }

  virtual ~BtCom1aContext()
  {
    if (ui_enabled)
    {
      abort_ui = true; // cancel UI thread
      pthread_join(ui_thread, 0);
    }

    pthread_cond_destroy(&cond);
    pthread_mutex_destroy(&mutex);
  }

  bool wait(unsigned seconds)
  {
    struct timespec ts;
    clock_gettime(CLOCK_MONOTONIC, &ts);
    ts.tv_sec += seconds;

    pthread_mutex_lock(&mutex);

    while (!flag)
    {
      if (pthread_cond_timedwait(&cond, &mutex, &ts) == ETIMEDOUT)
      {
        break; // timeout
      }
    }

    bool ret = flag;
    pthread_mutex_unlock(&mutex);
    return ret;
  }

  static void *ui_thread_func(void *data)
  {
    BtCom1aContext *ctx = (BtCom1aContext *)data;
    ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked
    string msg = uiPrint("%s COM1A to Bluetooth device %s (%s)...",
                         ctx->is_reconnect ? "Reconnect" : "Connect",
                         comcfg.com1a_device().c_str(), comcfg.com1a_address().c_str());
    ui_dialog(msg, DLG_CancelKey | DLG_WaitLogo | DLG_NoLEDs | DLG_IgnoreExtAbort,
              -1, 0, &ctx->abort_ui);

    if (!ctx->abort_ui)  // don't signal, if we are already done
    {
      pthread_mutex_lock(&ctx->mutex);
      ctx->flag = true; // abort wait() function
      pthread_cond_signal(&ctx->cond);
      ui_dialog("Aborted, please wait...",
                DLG_WaitLogo | DLG_NoLEDs | DLG_IgnoreExtAbort | DLG_Async, -1);
      pthread_mutex_unlock(&ctx->mutex);
    }

    return 0;
  }

};

/* options for function enableBTClientCom1A() */
enum BTCom1AOpts
{
  BTCom1A_None     = 0,  
  BTCom1A_Headless = 1,  
  BTCom1A_Reconnect = 2  
};

static bool enableBTClientCom1A(bool enable = true, enum com_ErrorCodes *com_errno = 0, int options = BTCom1A_None)
{
  static string connected_device; // address of connected BT device
  enum com_ErrorCodes local_errno;

  if (!com_errno)
  {
    com_errno = &local_errno;
  }

  ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked

  if (enable && !connected_device.empty()
      && connected_device == comcfg.com1a_address() // reconnect, if device has changed
      && !(options & BTCom1A_Reconnect))         // force reconnect by option
  {
    return true;   // already connected
  }

  if (!enable && connected_device.empty())
  {
    return true;  // already disconnected
  }

  // disconnect current BT device
  com_BTDisableVirtualChannels(com_errno);
  connected_device.clear();

  if (!enable)
  {
    return true;
  }

  // connect BT device
  if (comcfg.com1a_address().empty())
  {
    *com_errno = COM_ERR_NONE;
    return false;
  }

  bool enable_ui = !(options & BTCom1A_Headless);
  bool reconnect = !!(options & BTCom1A_Reconnect);
  BtCom1aContext ctx(enable_ui, reconnect);

  if (enable_ui != ctx.ui_enabled)
  {
    *com_errno = COM_ERR_OS_OPERATION_FAILED;
    return false;
  }

  // workaround for ADKCOM: we must wait between disable/enable virtual BT channel calls
  if (ctx.wait(3))  // wait 3 seconds
  {
    *com_errno = COM_ERR_NONE;
    return false; // UI abort
  }

  int err = com_BTEnableVirtualChannels(comcfg.com1a_address().c_str(), com_errno);

  if (err == 0)
  {
    if (ctx.wait(0)) // check abort, while com_BTEnableVirtualChannels() was called
    {
      com_BTDisableVirtualChannels(com_errno);
      *com_errno = COM_ERR_NONE;
      return false; // UI abort
    }

    connected_device = comcfg.com1a_address();
    _LOGF_INFO("%s: com_BTEnableVirtualChannels(%s) succeeded",
               __FUNCTION__, comcfg.com1a_address().c_str());
    return true;
  }

  _LOGF_INFO("%s: 1. com_BTEnableVirtualChannels(%s) failed (errno = %d)",
             __FUNCTION__, comcfg.com1a_address().c_str(), *com_errno);

  if (ctx.wait(3))  // wait 3 seconds
  {
    *com_errno = COM_ERR_NONE;
    return false; // UI abort
  }

  // workaround for VOSCOR-25915: call function for a second time
  err = com_BTEnableVirtualChannels(comcfg.com1a_address().c_str(), com_errno);

  if (err == 0 || *com_errno == COM_ERR_NET_ALREADY_UP)
  {
    if (ctx.wait(0)) // check abort, while com_BTEnableVirtualChannels() was called
    {
      com_BTDisableVirtualChannels(com_errno);
      *com_errno = COM_ERR_NONE;
      return false; // UI abort
    }

    connected_device = comcfg.com1a_address();
    _LOGF_INFO("%s: 2. com_BTEnableVirtualChannels(%s) succeeded (errno = %d)",
               __FUNCTION__, comcfg.com1a_address().c_str(), *com_errno);
    return true;
  }

  _LOGF_INFO("%s: 2. com_BTEnableVirtualChannels(%s) failed (errno = %d)",
             __FUNCTION__, comcfg.com1a_address().c_str(), *com_errno);
  return false;
}

static int displaySubmenu(const char *headline, bool showConfigure = true)
{
  // setup entries for submenu
  JSObject entries;
  int idx = 0;

  if (showConfigure)
  {
    // first entry calls configuration options (CPP wizard)
    entries[idx]("submenu") = true;
    entries[idx]("text") = "Configure";
    entries[idx]("value") = 0;
    idx++;
  }

  // second entry activates the COM type
  entries[idx]("submenu") = false;
  entries[idx]("text") = "Activate";
  entries[idx]("value") = 1;
  map<string, string> value;
  value["headline"] = headline;
  value["menu"] = entries.dump();
  return ui_handleMenu(value, MENU_NoLEDs | MENU_IgnoreExtAbort, 0); // wait infinite
}

static bool eth_menu(int new_idx)
{
  while (1)
  {
    int res = displaySubmenu(comIfTable[new_idx].menuText, ccpWizardSupported());

    switch (res)
    {
      case 0: // Configure selected
        displayCCPWizard(CCP_INTERFACE_ETH0);
        break;

      case 1: // Activate selected
        return true;

      default: // cancel/timeout
        return false;
    }
  }
}

static bool wifi_menu(int new_idx)
{
  while (1)
  {
    int res = displaySubmenu(comIfTable[new_idx].menuText, ccpWizardSupported());

    switch (res)
    {
      case 0: // Configure selected
        displayCCPWizard(CCP_INTERFACE_WLAN0);
        break;

      case 1: // Activate selected
        return true;

      default: // cancel/timeout
        return false;
    }
  }
}

static bool usb_eth_menu(int new_idx)
{
  while (1)
  {
    int res = displaySubmenu(comIfTable[new_idx].menuText, ccpWizardSupported());

    switch (res)
    {
      case 0: // Configure selected
        displayCCPWizard(CCP_INTERFACE_ETH_USB0);
        break;

      case 1: // Activate selected
        return true;

      default: // cancel/timeout
        return false;
    }
  }
}

static pthread_mutex_t btMutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t btCond;
static string btPairingPIN, btAddress, btDeviceName;
enum BTPairingState
{
  BT_PairingStopped = 0,
  BT_PairingStarted,
  BT_ConfirmPIN,
  BT_ConfirmPINDone,
  BT_PairingSuccess,
  BT_PairingFailed,
  BT_PairingTimeout,
  BT_PairingCancelled
} bt_pairing_state = BT_PairingStopped;
enum com_ErrorCodes bt_pairing_errno;

static void network_bt_ext_cb(enum com_NetworkEvent event, enum com_NetworkType type, const void *data, void *priv, enum com_ErrorCodes com_errno)
{
  (void) type;
  (void) data;
  (void) priv;
  (void) com_errno;
  JSObject btPairingData;

  MutexLock m(&btMutex);

  _LOGF_INFO("%s: ####Network callback BT (event=%d) -----\n", __FUNCTION__, event);

  // ignore callbacks after we already got the result
  if (bt_pairing_state >= BT_PairingSuccess)
  {
    return;
  }

  // store recent pairing state to signal on state change below
  enum BTPairingState state = bt_pairing_state;

  switch (event)
  {
    case COM_EVENT_BT_EXT_PIN:
    case COM_EVENT_BLE_EXT_PIN:
      _LOGF_INFO("%s: BT Pairing CB: PIN. The PIN shown on the remote device must be entered on this device\n", __FUNCTION__);
      break;

    case COM_EVENT_BT_EXT_VISUALIZE:
    case COM_EVENT_BLE_EXT_VISUALIZE:
      _LOGF_INFO("%s: BT Pairing CB: Visualize. Show PIN on the screen\n", __FUNCTION__);

    /* fall through to take over PIN */
    case COM_EVENT_BT_EXT_CONFIRM:
    case COM_EVENT_BLE_EXT_CONFIRM:
    {
      if (event == COM_EVENT_BT_EXT_CONFIRM || event == COM_EVENT_BLE_EXT_CONFIRM)
      {
        _LOGF_INFO("%s: BT Pairing CB: Confirm. Show the PIN on screen. The same PIN will be shown on the PIN of the remote device. Confirmation that the PIN is identical by the user is needed\n", __FUNCTION__);
      }

      const char *add_data = data ? ((com_networkEventData *)data)->data1 : 0;

      /* take over the PIN (and BT address) */
      if (add_data)
      {
        _LOGF_INFO("%s: ###Data [%s]###\n", __FUNCTION__, add_data);

        //###Data [{"address":"4C:BB:58:9A:3D:E0","name":"imin-bluetooth","pin":"904215"}]###
        if (btPairingData.load(add_data))
        {
          if (btPairingData.exists("pin") && btPairingData("pin").isString())
          {
            btPairingPIN = btPairingData("pin").getString();
            _LOGF_INFO("%s: BT PIN: %s", __FUNCTION__, btPairingPIN.c_str());

            // additionally take over BT address and device name, if the PIN is present
            if (btPairingData.exists("address") && btPairingData("address").isString())
            {
              btAddress = btPairingData("address").getString();
              _LOGF_INFO("%s: BT address: %s", __FUNCTION__, btAddress.c_str());
            }

            if (btPairingData.exists("name") && btPairingData("name").isString())
            {
              btDeviceName = btPairingData("name").getString();
              _LOGF_INFO("%s: BT device: %s", __FUNCTION__, btDeviceName.c_str());
            }
          }
        }
      }

      /* Pairing PIN is mandatory for COM_EVENT_BT/BLE_EXT_CONFIRM, thus, if not already
       * provided with COM_EVENT_BT_EXT_VISUALIZE, we will abort BT pairing immediatelly */
      if ((event == COM_EVENT_BT_EXT_CONFIRM || event == COM_EVENT_BLE_EXT_CONFIRM) && btPairingPIN.empty())
      {
        bt_pairing_state = BT_PairingFailed;
        // BT_PairingFailed must provide a COM error, thus, we set one
        bt_pairing_errno = COM_ERR_INVALID_PARAM;
        break;
      }

      bt_pairing_state = BT_ConfirmPIN;
      break;
    }

    case COM_EVENT_BT_EXT_TIMEOUT:
    case COM_EVENT_BLE_EXT_TIMEOUT:
      _LOGF_INFO("%s: BT Pairing CB: Timeout while pairing with remote device\n", __FUNCTION__);
      bt_pairing_state = BT_PairingTimeout;
      break;

    case COM_EVENT_BT_EXT_FAILED:
    case COM_EVENT_BLE_EXT_FAILED:
      _LOGF_INFO("%s: BT Pairing CB: Failed to pair with remote device\n", __FUNCTION__);
      bt_pairing_state = BT_PairingFailed;
      bt_pairing_errno = com_errno;
      break;

    case COM_EVENT_BT_EXT_SUCCESS:
    case COM_EVENT_BLE_EXT_SUCCESS:
      _LOGF_INFO("%s: BT Pairing CB: Success. The device should now be paired\n", __FUNCTION__);
      bt_pairing_state = BT_PairingSuccess;
      break;

    default:
      _LOGF_INFO("%s: BT Pairing CB: Obtained spurious event\n", __FUNCTION__);
      break;
  }

  // new pairing state -> awake waiter in btWaitForPairedDevice()
  if (state != bt_pairing_state)
  {
    pthread_cond_signal(&btCond);
  }
}

/* Start BT pairing to wait with btWaitForPairedDevice() for paired devices afterwards.
 * Functions are used for both modes, COM1A (BT-server) and BLE.
 * \param[in] discovery_tout_sec discovery timeout in seconds. btWaitForPairedDevice() will
 *                               return with BT_PairingTimeout.
 * \param[out] com_errno ADKCOM error code returned in case if function fails. Parameter can be set to NULL, if no error info is required.
 * \param[int] ble set to true in case functions btStartPairing() and btWaitForPairedDevice() shall be used for COM type BLE.
 *                 Default is normal BT pairing (BT server mode).
 * \return true in case of success, else false is returned for failure */
bool btStartPairing(unsigned discovery_tout_sec, enum com_ErrorCodes *com_errno = 0, bool ble = false)
{
  enum com_ErrorCodes local_com_errno;

  if (!com_errno)
  {
    com_errno = &local_com_errno;
  }

  com_NetworkEvent bt_events[] =
  {
    COM_EVENT_BT_EXT_CONFIRM,
    COM_EVENT_BT_EXT_VISUALIZE,
    COM_EVENT_BT_EXT_CONFIRM,
    COM_EVENT_BT_EXT_PIN,
    COM_EVENT_BT_EXT_TIMEOUT,
    COM_EVENT_BT_EXT_FAILED,
    COM_EVENT_BT_EXT_SUCCESS
  };

  com_NetworkEvent ble_events[] =
  {
    COM_EVENT_BLE_EXT_CONFIRM,
    COM_EVENT_BLE_EXT_VISUALIZE,
    COM_EVENT_BLE_EXT_CONFIRM,
    COM_EVENT_BLE_EXT_PIN,
    COM_EVENT_BLE_EXT_TIMEOUT,
    COM_EVENT_BLE_EXT_FAILED,
    COM_EVENT_BLE_EXT_SUCCESS
  };

  com_NetworkEvent *events = bt_events;
  size_t num_events = (sizeof(bt_events) / sizeof(bt_events[0]));

  if (ble)
  {
    events = ble_events;
    num_events = (sizeof(ble_events) / sizeof(ble_events[0]));
  }

  MutexLock m(&btMutex);

  // pairing already started
  if (bt_pairing_state >= BT_PairingStarted && bt_pairing_state < BT_PairingSuccess)
  {
    return true;
  }

  if (com_NetworkAddCallback(network_bt_ext_cb, events, num_events, 0, com_errno) != 0)
  {
    _LOGF_ERROR("%s: com_NetworkAddCallback failed (errno = %d)", __FUNCTION__, *com_errno);
    goto failure;
  }

  if (com_BTExtStartDiscovery(discovery_tout_sec, com_errno) != 0)
  {
    _LOGF_ERROR("%s: com_BTExtStartDiscovery failed (errno = %d)", __FUNCTION__, *com_errno);
    goto failure;
  }

  static bool btCondInited = false; // flag that init of btCond is required

  if (!btCondInited)
  {
    pthread_condattr_t attr;
    pthread_condattr_init(&attr);
    pthread_condattr_setclock(&attr, CLOCK_MONOTONIC);
    pthread_cond_init(&btCond, &attr);
    pthread_condattr_destroy(&attr);
    btCondInited = true;
  }

  btPairingPIN.clear();
  btAddress.clear();
  btDeviceName.clear();
  bt_pairing_state = BT_PairingStarted;
  _LOGF_INFO("%s: BT pairing successfully started", __FUNCTION__);
  return true;

failure:
  com_BTExtStopDiscovery(0);
  com_NetworkRemoveCallback(network_bt_ext_cb, 0);
  bt_pairing_state = BT_PairingStopped;
  return false;
}

/* Wait for a paired BT device for which the BT address and BT device name is returned on success.
 * Please note that BT pairing must be started with btStartPairing() before.
 * The function will request the user to confirm the presented PIN on screen.
 * \param[out] bt_addr address of the paired BT device
 * \param[out] bt_name name of the paired BT device
 * \param[in]  cancel_cb callback function pointer (optional). If this function returns true bt_WaitForPairedDevice()
 *                       is aborted with error BTP_Cancelled.
 * \param[out] com_errno ADKCOM error code returned in case if function fails
 * \return BT_PairingSuccess in case of success, else error state of enum BTPairingState */
static enum BTPairingState btWaitForPairedDevice(string &bt_addr, string &bt_name, bool (*cancel_cb)(void) = 0, enum com_ErrorCodes *com_errno = 0)
{
  bool confirm_cancelled = false;
  enum com_ErrorCodes local_com_errno;

  if (!com_errno)
  {
    com_errno = &local_com_errno;
  }

  MutexLock m(&btMutex);

  if (bt_pairing_state == BT_PairingStarted)
  {
    _LOGF_INFO("%s: Wait for paired devices", __FUNCTION__);
  }
  else
  {
    // invalid state, stop BT pairing immediately
    bt_pairing_state = BT_PairingStopped;
  }

  while (bt_pairing_state >= BT_PairingStarted && bt_pairing_state < BT_PairingSuccess)
  {
    switch (bt_pairing_state)
    {
      case BT_PairingStarted:
      {
        // allow to cancel BT pairing as long as in state BT_PairingStarted
        if (cancel_cb && cancel_cb())
        {
          bt_pairing_state = BT_PairingCancelled;
        }

        break;
      }

      case BT_ConfirmPIN:
      {
        // take over MAC address and name of BT device
        bt_addr = btAddress;
        bt_name = btDeviceName;
        // confirm the PIN
        string msg = "Pair with device";

        if (!bt_name.empty())
        {
          msg += " " + bt_name;
        }

        if (!bt_addr.empty())
        {
          msg += " (" + bt_addr + ")";
        }

        msg += "?<br><br>PIN: " + btPairingPIN;
        int res = ui_dialog(msg,
                            DLG_CancelKey | DLG_EnterKey | DLG_Beep | DLG_QuestionLogo | DLG_NoLEDs | DLG_IgnoreExtAbort, 20);

        if (com_BTExtConfirm(res == RESULT_OK ? 1 : 0, com_errno) != 0)
        {
          _LOGF_INFO("%s: com_BTExtConfirm(%d) failed (errno = %d)",
                     __FUNCTION__, res == RESULT_OK ? 1 : 0, *com_errno);
          bt_pairing_state = BT_PairingFailed;
          break;
        }

        if (res != RESULT_OK)
        {
          // set local flag and wait for end of pairing by callback event
          confirm_cancelled = true;
          _LOGF_INFO("%s: pairing cancelled", __FUNCTION__);
        }
        else
        {
          _LOGF_INFO("%s: pairing confirmed", __FUNCTION__);
        }

        // wait for pairing result provided by callback
        ui_dialog("Please wait...",  DLG_WaitLogo | DLG_Async | DLG_NoLEDs | DLG_IgnoreExtAbort, -1);
        bt_pairing_state = BT_ConfirmPINDone;
        break;
      }

      case BT_ConfirmPINDone:
        // nothing to do, just wait for pairing result in callback
        break;

      case BT_PairingFailed:
        // take over COM error code from callback
        *com_errno = bt_pairing_errno;

      // fall through
      case BT_PairingTimeout:
      case BT_PairingSuccess:

        // device was declined, map state to BT_PairingCancelled
        if (confirm_cancelled)
        {
          bt_pairing_state = BT_PairingCancelled;
        }

      default:
        break;
    }

    if (bt_pairing_state >= BT_PairingSuccess)
    {
      break;
    }

    // wait for new state being changed by network_bt_ext_cb()
    enum BTPairingState state = bt_pairing_state;

    while (bt_pairing_state == state)
    {
      // cancel callback must be called in cycly intervalls
      if (cancel_cb)
      {
        sdi::TimeStamp tout = sdi::TimeStamp::Monotonic() + 200 * sdi::TimeStamp::MS;

        if (pthread_cond_timedwait(&btCond, &btMutex, &tout) == ETIMEDOUT)
        {
          break;
        }
      }
      else
      {
        pthread_cond_wait(&btCond, &btMutex);
      }
    }
  }

  // stop discovery and unset status callbacks
  com_BTExtStopDiscovery(0);
  com_NetworkRemoveCallback(network_bt_ext_cb, 0);

  // reset callback variables
  btPairingPIN.clear();
  btAddress.clear();
  btDeviceName.clear();

  if (bt_pairing_state == BT_PairingSuccess)
  {
    if (bt_addr.empty())
    {
      bt_addr = "unknown";
    }

    if (bt_name.empty())
    {
      bt_name = "unknown";
    }

    _LOGF_INFO("%s: BT device (addr: %s, name: %s) successfully paired", __FUNCTION__, bt_addr.c_str(), bt_name.c_str());
    return BT_PairingSuccess;
  }

  // else :BT_PairingFailed/BT_PairingTimeout/BT_PairingCancelled/BT_PairingStopped

  // BT pairing not successful, clear MAC address and device name
  bt_addr.clear();
  bt_name.clear();

  const char *err = "BT_PairingFailed";

  // map state to error string for log
  switch (bt_pairing_state)
  {
    case BT_PairingTimeout:
      err = "BT_PairingTimeout";
      break;

    case BT_PairingCancelled:
      err = "BT_PairingCancelled";
      break;

    case BT_PairingStopped:
      err = "BT_PairingStopped";
      break;

    default:
    case BT_PairingFailed: // already set
      break;
  }

  _LOGF_ERROR("%s: BT pairing failed with error: %s", __FUNCTION__, err);
  return bt_pairing_state;
}

/* Break function to abort btWaitForPairedDevice().
 * This function migth be called asynchronously from a separate thread. */
static void btStopPairing()
{
  MutexLock m(&btMutex);

  if (bt_pairing_state > BT_PairingStopped)
  {
    bt_pairing_state = BT_PairingStopped;
    pthread_cond_signal(&btCond);
  }
}

static bool btGetDeviceList(vector< pair<string, string> > &list)
{
  enum com_ErrorCodes com_errno;
  // ADKCOM getProperty uses buffers, therefore, reserve enough space for device list
  char buf[10 * 1024]; // one entry takes about 170 bytes
  unsigned num_devices;
  JSObject btDevices;

  list.clear();

  // obtain list of paired BT devices from ADKCOM
  if (com_GetDevicePropertyString(COM_PROP_BT_PAIRING_LIST, buf, sizeof(buf), &com_errno) != 0)
  {
    _LOGF_ERROR("%s: com_GetDevicePropertyString(COM_PROP_BT_PAIRING_LIST) failed (errno=%d)", __FUNCTION__, com_errno);
    return false;
  }

  if (!btDevices.load(buf) || btDevices.isNull())
  {
    _LOGF_ERROR("%s: returned device list is invalid (no JSON format)", __FUNCTION__);
    return false;
  }

  if (!btDevices.exists("BT_COUNT") || !btDevices("BT_COUNT").isNumber())
  {
    _LOGF_ERROR("%s: returned device list is invalid (no BT_COUNT found)", __FUNCTION__);
    return false;
  }

  num_devices = (unsigned)btDevices("BT_COUNT").getInt();

  if (num_devices == 0)
  {
    _LOGF_INFO("%s: no BT devices paired", __FUNCTION__);
    return true;
  }

  for (unsigned i = 0; i < num_devices; i++)
  {
    // check for mandatory BT address
    sprintf(buf, "BT%u_ADDR", i);

    if (!btDevices.exists(buf) || !btDevices(buf).isString())
    {
      list.clear();
      _LOGF_ERROR("%s: returned device list is invalid (no BT%u_ADDR found)", __FUNCTION__, i);
      return false;
    }

    if (btDevices(buf).getString().empty())
    {
      list.clear();
      _LOGF_ERROR("%s: returned device list is invalid (BT%u_ADDR is empty)", __FUNCTION__, i);
      return false;
    }

    pair<string, string> entry;
    entry.first = btDevices(buf).getString();

    // ADK-COM may return BT address without device name
    sprintf(buf, "BT%u_NAME", i);

    if (btDevices.exists(buf) && btDevices(buf).isString() && !btDevices(buf).getString().empty())
    {
      // prefer diplaying the BT device name
      entry.second = btDevices(buf).getString();
    }

    list.push_back(entry);
  }

  return true;
}

static void btDeviceListResize(unsigned max_paired_devices)
{
  // value 0 means no limit
  if (max_paired_devices == 0)
  {
    return;
  }

  vector< pair<string, string> > list;

  if (!btGetDeviceList(list))
  {
    _LOGF_ERROR("%s: btGetDeviceList() failed", __FUNCTION__);
    return;
  }

  if (list.size() > max_paired_devices)
  {
    // number of devices to remove
    unsigned cnt = list.size() - max_paired_devices;

    /* unpair devices, list is ordered chronologically
     * and the list always starts with oldest device */
    for (unsigned i = 0; i < cnt; i++)
    {
      enum com_ErrorCodes com_errno;

      if (com_BTUnPair(list[i].first.c_str(), &com_errno) != 0)
      {
        _LOGF_ERROR("%s: com_BTUnPair() failed (errno=%d)", __FUNCTION__, com_errno);
        break;
      }
    }
  }
}

static bool btSelectDevice(string &dev_addr, string &dev_name, const char *headline = "Select Bluetooth device")
{
  vector< pair<string, string> > list;

  if (!btGetDeviceList(list))
  {
    ui_dialog("Obtaining Bluetooth device list failed!",
              DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
    return false;
  }

  if (list.size() == 0)
  {
    ui_dialog("No Bluetooth devices paired!",
              DLG_WarningLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
    return false;
  }

  // setup UI menu
  JSObject entries;

  for (unsigned i = 0; i < list.size(); i++)
  {
    unsigned menuIdx = entries.size();
    // prefer diplaying the BT device name
    entries[menuIdx]("text") = list[i].second.empty() ? list[i].first : list[i].second;

    // pre-select the current active device
    if (dev_addr == list[i].first)
    {
      entries[menuIdx]("selected") = true;
    }

    entries[menuIdx]("value") = i;
  }

  map<string, string> value;

  if (headline)
  {
    value["headline"] = headline;
  }

  value["menu"] = entries.dump();
  int res = ui_handleMenu(value, MENU_NoLEDs | MENU_IgnoreExtAbort, 0); // wait infinite

  if (res < 0)
  {
    return false;  // cancel
  }

  if (res >= (int)list.size())
  {
    return false;  // shouldn't happen
  }

  dev_addr = list[res].first;
  dev_name = list[res].second;
  return true;
}


static pthread_mutex_t com1a_bt_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t com1a_bt_waiter_cond = PTHREAD_COND_INITIALIZER;
static int com1a_bt_init_result = -1; // -1=no result, else one of com_ErrorCodes error codes (COM_ERR_NONE for success)
static bool com1a_bt_thread_running = false; // BT pairing thread running
static bool com1a_bt_thread_joined = true; // BT pairing thread joined
static pthread_t com1a_bt_thread;

void *com1a_bt_thread_func(void *data)
{
  (void) data;

  MutexLock m(&com1a_bt_mutex);

  com1a_bt_thread_running = true;

  _LOGF_INFO("%s: Start pairing (Com1A BT pairing thread)", __FUNCTION__);
  sysDisplayIdleScreen(Idle_MenuEnabled | Idle_WaitLogo, "Start Bluetooth pairing...");

  ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked
  unsigned max_paired = comcfg.bt_num_paired();

  enum com_ErrorCodes com_errno;
  bool pairing = btStartPairing(BT_PAIRING_TIMEOUT, &com_errno);
  com1a_bt_init_result = COM_ERR_NONE;

  if (!pairing)
  {
    com1a_bt_init_result = COM_ERR_NET_BT_PAIR_FAILED; // shouldn't happen, in case ADKCOM doesn't provide errno in error case

    if (com_errno != COM_ERR_NONE)
    {
      com1a_bt_init_result = com_errno;
    }
  }

  // signal BT initialization is done
  pthread_cond_signal(&com1a_bt_waiter_cond);

  bool first_pairing = true;

  while (1)
  {
    // pairing couldn't be started -> abort pairing thread
    if (!pairing)
    {
      _LOGF_ERROR("%s: btStartPairing() failed (errno=%d)", __FUNCTION__, com_errno);
      ui_dialog(uiPrint("COM Error:<br>%s<br><br>Initialization Bluetooth pairing failed.<br>Enter menu to configure COM interface.",
                        com_GetErrorString(com_errno)),
                DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);

      /* for first pairing startCom1ABtPairingThread() returns to mADK_PP_Prot::select(),
       * which shows the idlescreen and does the flag handling, therefore, we're done here */
      if (!first_pairing)
      {
        /* Disable BT idle pairing being triggered from mADK_PP_Prot::select(),
         * users must enter menu to setup COM interface again */
        idle_auto_com_init = false;
        // display normal idle screen
        sysDisplayIdleScreen(Idle_MenuEnabled);
      }

      break;
    }

    first_pairing = false;

    /* unlock mutex so that stopCom1ABtPairingThread() can abort
     * this thread waiting in btWaitForPairedDevice */
    m.unlock();

    sysDisplayIdleScreen(Idle_MenuEnabled | Idle_WaitLogo, "Bluetooth device pairing...<br>Wait for connection...");
    // wait for a paired BT device
    string bt_addr, bt_name;
    enum BTPairingState res = btWaitForPairedDevice(bt_addr, bt_name, 0, &com_errno);

    // pairing aborted by btStopPairing() asynchronously
    if (res == BT_PairingStopped)
    {
      _LOGF_INFO("%s: btWaitForPairedDevice() stopped", __FUNCTION__);
      break;
    }

    m.lock();

    if (res == BT_PairingSuccess)
    {
      _LOGF_INFO("%s: btWaitForPairedDevice() successful, new device: %s (%s) ", __FUNCTION__, bt_name.c_str(), bt_addr.c_str());
      ui_dialog(uiPrint("Bluetooth pairing successful.<br>New device:<br>%s (%s)", bt_name.c_str(), bt_addr.c_str()),
                DLG_SuccessLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
      /* If a new BT device was added, check if max. number of paired devices is exceeded.
       * In this case we do housekeeping and remove the oldest BT devices from the list */
      btDeviceListResize(max_paired);
    }
    else
    {
      // PWMADK-2957: BT_PairingFailed shall no abort BT pairing with UI error message and restart pairing
      if (res == BT_PairingFailed)
      {
        _LOGF_ERROR("%s: btWaitForPairedDevice() failed (errno=%d), restart pairing", __FUNCTION__, com_errno);
      }
      else
      {
        /* BT_PairingTimeout -> restart pairing
         * BT_PairingCancelled -> restart pairing, if user has denied a device */
        _LOGF_INFO("%s: btWaitForPairedDevice() returned with state %d, restart pairing", __FUNCTION__, res);
      }
    }

    // restart pairing
    sysDisplayIdleScreen(Idle_MenuEnabled | Idle_WaitLogo, "Restart Bluetooth pairing...");
    pairing = btStartPairing(BT_PAIRING_TIMEOUT, &com_errno);
  }

  com1a_bt_thread_running = false;
  return 0;
}

static void stopCom1ABtPairingThread()
{
  MutexLock m(&com1a_bt_mutex);

  if (com1a_bt_thread_running)
  {
    btStopPairing();
  }

  if (!com1a_bt_thread_joined)
  {
    pthread_join(com1a_bt_thread, 0);
    com1a_bt_thread_joined = true;
  }
}

static bool startCom1ABtPairingThread(enum com_ErrorCodes *com_errno = 0)
{
  MutexLock m(&com1a_bt_mutex);

  // we're done, if BT pairing thread is already running
  if (com1a_bt_thread_running)
  {
    if (com_errno)
    {
      *com_errno = COM_ERR_NONE;
    }

    return true;
  }

  // join a previous started BT pairing thread
  if (!com1a_bt_thread_joined)
  {
    pthread_join(com1a_bt_thread, 0);
    com1a_bt_thread_joined = true;
  }

  /* PWMADK-2837: idle_auto_com_init can be set by previous running BT thread,
   * which was joined above, therefore, we have to check idle_auto_com_init here */
  if (!idle_auto_com_init)
  {
    return false;
  }

  int r = pthread_create(&com1a_bt_thread, 0, com1a_bt_thread_func, 0);

  if (r)
  {
    return false;
  }

  com1a_bt_thread_joined = false;

  // wait for BT initialization result
  com1a_bt_init_result = -1;

  while (com1a_bt_init_result == -1)
  {
    pthread_cond_wait(&com1a_bt_waiter_cond, &com1a_bt_mutex);
  }

  // take over BT initialization result for caller
  if (com_errno)
  {
    *com_errno = (enum com_ErrorCodes) com1a_bt_init_result;
  }

  // BT initialization failed -> thread returns immediatelly
  if (com1a_bt_init_result != COM_ERR_NONE)
  {
    pthread_join(com1a_bt_thread, 0);
    com1a_bt_thread_joined = true;
    return false;
  }

  return true;
}

static bool bt_async_cancel_cb(void)
{
  // reset result, so that this internal dialog is not returned with 24-0B
  return (UI_AR_KEY_CANCEL == ui_getAsyncResult(true));
}

static bool bt_pairing_submenu(const char *headline, bool ble = false)
{
  bool ble_enabled = false;
  // disable other BT stuff, which could affect generic BT pairing
  enableBLE(false);           // disalbe BLE
  enableBTClientCom1A(false); // disable COM1A BT-Client (virtual channels)

  const char *bt_type = ble ? "BLE" : "Bluetooth";

  ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked

  while (1)
  {
    // setup entries for submenu
    JSObject entries;

    entries[0]("text") = uiPrint("Pair new %s device", bt_type);
    entries[0]("value") = 0;

    entries[1]("text") = uiPrint("List paired %s devices", bt_type);
    entries[1]("value") = 1;

    entries[2]("text") = uiPrint("Remove paired %s device", bt_type);
    entries[2]("value") = 2;

    map<string, string> value;

    if (headline)
    {
      value["headline"] = headline;
    }

    value["menu"] = entries.dump();
    int res = ui_handleMenu(value, MENU_NoLEDs | MENU_IgnoreExtAbort, 0); // wait infinite

    switch (res)
    {
      case 0:   // Pair new BT device
      {
        enum com_ErrorCodes com_errno;

        // start BLE pairing
        if (!btStartPairing(BT_PAIRING_TIMEOUT, &com_errno))
        {
          ui_dialog(uiPrint("COM Error:<br>%s<br><br>%s pairing couldn't be started.",
                            bt_type, com_GetErrorString(com_errno)),
                    DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
          break; // show submenu again, since user can press cancel to leave it
        }

        // for BLE Gatt-Server must be enabled during pairing
        if (ble)
        {
          if (!enableBLE(true, &com_errno))
          {
            ui_dialog(uiPrint("COM Error:<br>%s<br><br>Cannot enable BLE",
                              com_GetErrorString(com_errno)),
                      DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
            // stop BT pairing
            btStopPairing();
            break; // show submenu again, since user can press cancel to leave it
          }

          ble_enabled = true;
        }

        // start an async dialog, which to cancel BT pairing with ui_async_cancel_cb()
        ui_dialog(uiPrint("%s pairing...", bt_type),
                  DLG_CancelKey | DLG_WaitLogo | DLG_Async | DLG_StoreAsyncResult | DLG_NoLEDs | DLG_IgnoreExtAbort, -1);

        // wait for paired devices
        string device_addr, device_name;
        enum BTPairingState res = btWaitForPairedDevice(device_addr, device_name, bt_async_cancel_cb, &com_errno);

        switch (res)
        {
          case BT_PairingSuccess:
          {
            ui_dialog(uiPrint("%s pairing successful.<br><br>New device:<br>%s<br>(%s)",
                              bt_type, device_name.c_str(), device_addr.c_str()),
                      DLG_SuccessLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
            /* If a new BT device was added, check if max. number of paired devices is exceeded.
             * In this case we do housekeeping and remove the oldest BT devices from the list */
            btDeviceListResize(comcfg.bt_num_paired());

            if (ble)
            {
              comcfg.ble_address() = device_addr;
              comcfg.ble_device() = device_name;
            }

            break;
          }

          case BT_PairingTimeout:
          {
            ui_dialog(uiPrint("%s pairing timed out.", bt_type),
                      DLG_WarningLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);

            if (ble)
            {
              enableBLE(false); // disable BLE again
              ble_enabled = false;
            }

            break;
          }

          case BT_PairingCancelled:
          {
            ui_dialog(uiPrint("%s pairing cancelled by user.", bt_type),
                      DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);

            if (ble)
            {
              enableBLE(false); // disable BLE again
              ble_enabled = false;
            }

            break;
          }

          default:
          case BT_PairingFailed:
          {
            ui_dialog(uiPrint("COM Error:<br>%s<br><br>%s pairing failed.", com_GetErrorString(com_errno), bt_type),
                      DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);

            if (ble)
            {
              enableBLE(false); // disable BLE again
              ble_enabled = false;
            }

            break;
          }
        }

        // stop BT pairing
        btStopPairing();
        break;
      }

      case 1:   // Show paired BT devices
      {
        vector< pair<string, string> > list;

        if (!btGetDeviceList(list))
        {
          ui_dialog(uiPrint("Obtaining %s device list failed!", bt_type),
                    DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
          break;
        }

        if (list.size() == 0)
        {
          ui_dialog(uiPrint("No %s devices paired.", bt_type),
                    DLG_WarningLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
          break;
        }

        string uitext = uiPrint("List of paired %s devices:<br>", bt_type);

        for (unsigned i = 0; i < list.size(); i++)
        {
          uitext += uiPrint("%u. %s (%s)", i + 1, list[i].second.c_str(), list[i].first.c_str());

          if (i + 1 < list.size())
          {
            uitext += "<br>";
          }
        }

        ui_dialog(uitext, DLG_EnterKey | DLG_TextAlignTop | DLG_TextAlignLeft | DLG_NoLEDs | DLG_IgnoreExtAbort);
        break;
      }

      case 2:   // remove BT device
      {
        string addr, name, headline;
        headline = uiPrint("Remove paired %s device", bt_type);

        if (btSelectDevice(addr, name, headline.c_str()))
        {
          if (ui_dialog(uiPrint("Remove %s device?<br>%s (%s)", bt_type, name.c_str(), addr.c_str()),
                        DLG_QuestionLogo | DLG_CancelKey | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort) == RESULT_OK)
          {
            enum com_ErrorCodes com_errno;

            if (com_BTUnPair(addr.c_str(), &com_errno) != 0)
            {
              _LOGF_ERROR("%s: com_BTUnPair() failed (errno=%d)", __FUNCTION__, com_errno);
              ui_dialog(uiPrint("Failed to remove %s device<br>%s (%s)", bt_type, name.c_str(), addr.c_str()),
                        DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
            }
            else
            {
              // BLE device was unpaired
              if (comcfg.ble_address() == addr)
              {
                comcfg.ble_address().clear();
                comcfg.ble_device().clear();

                if (ble)
                {
                  enableBLE(false); // disable BLE again
                  ble_enabled = false;
                }
              }
            }
          }
        }

        break;
      }

      default: // cancel/timeout
        return ble_enabled;
    }
  }

  return ble_enabled;
}

static bool com1a_menu(int new_idx)
{
  ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked

  while (1)
  {
    int res = displaySubmenu(comIfTable[new_idx].menuText);

    switch (res)
    {
      case 0:   // Configure selected
      {
        while (1)
        {
          const char *bt_pairing = "Bluetooth pairing";

          // setup entries for submenu
          JSObject entries;

          entries[0]("text") = "Mode: " + ComConfig::getCom1aModeName(comcfg.com1a_mode());
          entries[0]("value") = 0;
          entries[0]("submenu") = true;

          if (comcfg.com1a_mode() == ComConfig::Com1a_BtServer || comcfg.com1a_mode() == ComConfig::Com1a_BtClient)
          {
            entries[1]("text") = bt_pairing;
            entries[1]("value") = 1;
            entries[1]("submenu") = true;

            if (comcfg.com1a_mode() == ComConfig::Com1a_BtServer)
            {
              entries[2]("text") = "Bluetooth pairing when idle";
              entries[2]("value") = 2;
              entries[2]("icon_id") = comcfg.com1a_btserver_pairing_idle() ? "checked" : "unchecked";
            }
            else // Com1a_BtClient
            {
              entries[2]("text") = "Bluetooth reconnect when idle";
              entries[2]("value") = 3;
              entries[2]("icon_id") = comcfg.com1a_btclient_reconnect_idle() ? "checked" : "unchecked";
            }
          }

          map<string, string> value;
          value["headline"] = comIfTable[new_idx].menuText;
          value["menu"] = entries.dump();
          res = ui_handleMenu(value, MENU_NoLEDs | MENU_IgnoreExtAbort, 0); // wait infinite

          switch (res)
          {
            case 0:   // COM1A mode
            {
              entries.clear();
              entries[0]("text") = ComConfig::getCom1aModeName(ComConfig::Com1a_BtServer);
              entries[0]("value") = ComConfig::Com1a_BtServer;
              entries[0]("selected") = (comcfg.com1a_mode() == ComConfig::Com1a_BtServer);
              entries[1]("text") = ComConfig::getCom1aModeName(ComConfig::Com1a_BtClient);
              entries[1]("value") = ComConfig::Com1a_BtClient;
              entries[1]("selected") = (comcfg.com1a_mode() == ComConfig::Com1a_BtClient);
              entries[2]("text") = ComConfig::getCom1aModeName(ComConfig::Com1a_Usb);
              entries[2]("value") =  ComConfig::Com1a_Usb;
              entries[2]("selected") = (comcfg.com1a_mode() == ComConfig::Com1a_Usb);
              value.clear();
              value["headline"] = "COM1A mode";
              value["menu"] = entries.dump();
              int res2 = ui_handleMenu(value, MENU_NoLEDs | MENU_IgnoreExtAbort, 0); // wait infinite

              if (res2 == ComConfig::Com1a_BtServer || res2 == ComConfig::Com1a_BtClient || res2 == ComConfig::Com1a_Usb)
              {
                comcfg.com1a_mode() = (unsigned)res2;
              }

              break;
            }

            case 1:   // Bluetooth pairing
            {
              (void)bt_pairing_submenu(bt_pairing);
              break;
            }

            case 2:   // BT-server: Bluetooth pairing when idle
            {
              comcfg.com1a_btserver_pairing_idle() = !comcfg.com1a_btserver_pairing_idle();
              // COM config is stored after profile is activated
              break;
            }

            case 3:   // BT-client: Bluetooth reconnect when idle
            {
              comcfg.com1a_btclient_reconnect_idle() = !comcfg.com1a_btclient_reconnect_idle();
              // COM config is stored after profile is activated
              break;
            }

            default: // cancel/timeout
              break;
          }

          if (res < 0)
          {
            break;
          }
        }

        break;
      }

      case 1: // Activate selected
        // COM1A requires to disable BLE
        enableBLE(false);
        // also disable COM1A BT-Client, since it is enabled below or with reconnect in idle
        enableBTClientCom1A(false);

        // for BT-server and USB return immediately
        if (comcfg.com1a_mode() != ComConfig::Com1a_BtClient)
        {
          return true;
        }

        // for BT-client select the BT-device, where connect to
        if (btSelectDevice(comcfg.com1a_address(), comcfg.com1a_device()))
        {
          enum com_ErrorCodes com_errno;

          // if auto COM1A reconnect in idle is not enabled we must connect in menu here
          if (!comcfg.com1a_btclient_reconnect_idle()
              && !enableBTClientCom1A(true, &com_errno))
          {
            string msg =
              uiPrint("COM Error:<br>%s<br><br>Cannot enable COM1A for BT device %s (%s)",
                      com_errno == COM_ERR_NONE ? "User Abort" : com_GetErrorString(com_errno),
                      comcfg.com1a_device().c_str(), comcfg.com1a_address().c_str());
            ui_dialog(msg, DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
            break; // or error show submenu again, since user might scan for new BT devices again
          }

          return true;
        }

        break; // on abort show submenu again, since user might scan for new BT devices again

      default: // cancel/timeout
        return false;
    }
  }

  return false;
}

static bool ble_menu(int new_idx)
{
  bool ble_enabled = false;

  ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked

  while (1)
  {
    int res = displaySubmenu(comIfTable[new_idx].menuText);

    switch (res)
    {
      case 0: // Configure selected
        ble_enabled = bt_pairing_submenu("BLE pairing", true); // enable BLE pairing
        break;

      case 1:   // Activate selected
      {
        if (ble_enabled)
        {
          // BLE already enabled by pairing dialog
          return true;
        }

        if (comcfg.ble_address().empty())
        {
          ui_dialog("No device paired, please configure BLE!",
                    DLG_WarningLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
          break; // show submenu again, since user can press cancel to leave it
        }

        // BLE requires to disable BT virtual channels for COM1A
        enableBTClientCom1A(false);
        enum com_ErrorCodes com_errno;

        if (!enableBLE(true, &com_errno))
        {
          ui_dialog(uiPrint("COM Error:<br>%s<br><br>Cannot enable BLE",
                            com_GetErrorString(com_errno)),
                    DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
          break; // show submenu again, since user can press cancel to leave it
        }

        return true;
      }

      default: // cancel/timeout
        return false;
    }
  }

  return false;
}

static bool bt_pan_menu(int new_idx)
{
  ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked

  while (1)
  {
    int res = displaySubmenu(comIfTable[new_idx].menuText, ccpWizardSupported());

    switch (res)
    {
      case 0: // Configure selected
        displayCCPWizard(CCP_INTERFACE_ETH_BT);
        break;

      case 1: // Activate selected
        if (btSelectDevice(comcfg.bt_address(), comcfg.bt_device()))
        {
          return true;
        }

        break; // on abort or error, show submenu again, since user can press cancel to leave it

      default: // cancel/timeout
        return false;
    }
  }
}

/* interface information struct returned by get_iflist_for_ip() */
struct IfInfo
{
  string ifname; 
  string ipaddr; 
  int family;    
  IfInfo(const string &ifn, const string &ip, int af): ifname(ifn), ipaddr(ip), family(af) {}
};

/* return a vector with entries of network interface name with its
 * linked IP address (see structure IfInfo). The IP address passed in
 * parameter \c ip_address will filter out those network interfaces,
 * which IP address matches to it. For instance passing "0.0.0.0" (any)
 * will match all interfaces having an IPv4 address. If "::" is passed
 * (IPv6 any) and address family \c af is set to AF_UNSPEC, both interface
 * types with IPv6 and IPv6 addresses are returned, since IPv4 is a subset
 * of IPv6. In this case the caller can pass address family AF_INET6 to
 * return network interfaces only linked with an IPv6 address.
 * An invalid IP address or NULL pointer for ip_address results an empty list.
 * The same is if address family does not fit to the provided IP address
 * (e.g. AF_INET6 passed for an IPv4 address).
 * \param[in] ip_address IP address to match the linked network interface(s)
 * \param[in] af address family for IP address \c ip_address
 * \param[out] if_list list with names of network interface names */
static void get_iflist_for_ip(const char *ip_address, int af, vector<IfInfo> &if_list)
{
  if_list.clear();

  if (!ip_address)
  {
    return;
  }

  bool any = false;
  int family = AF_UNSPEC;
  // check for any interface
  struct in_addr inaddr;

  if (inet_pton(AF_INET, ip_address, &inaddr) > 0)
  {
    family = AF_INET;

    if (ntohl(inaddr.s_addr) == INADDR_ANY)
    {
      any = true;
    }
  }
  else
  {
    struct in6_addr in6addr;

    if (inet_pton(AF_INET6, ip_address, &in6addr) > 0)
    {
      family = AF_INET6;

      if (!memcmp(&in6addr, &in6addr_any, sizeof(struct in6_addr)))
      {
        any = true;
      }
    }
  }

  // an invalid IP address passed
  if (family == AF_UNSPEC)
  {
    return;
  }

  // invalied address family for this IP address passed
  if (af != AF_UNSPEC && family != af)
  {
    return;
  }

  struct ifaddrs *ifaddr, *ifa;

  if (getifaddrs(&ifaddr) == -1)
  {
    return;
  }

  // walk through linked list
  for (ifa = ifaddr; ifa != NULL; ifa = ifa->ifa_next)
  {
    if (ifa->ifa_addr == NULL)
    {
      continue;
    }

    if (ifa->ifa_addr->sa_family != AF_INET
        && ifa->ifa_addr->sa_family != AF_INET6)
    {
      continue;
    }

    // if not any interface, address family must match
    if (!any && family != ifa->ifa_addr->sa_family)
    {
      continue;
    }

    char host[NI_MAXHOST];
    int s = getnameinfo(ifa->ifa_addr,
                        (ifa->ifa_addr->sa_family == AF_INET) ?
                        sizeof(struct sockaddr_in) : sizeof(struct sockaddr_in6),
                        host, NI_MAXHOST, NULL, 0, NI_NUMERICHOST);

    if (s != 0)
    {
      continue;
    }

    // skip not running interfaces
    if (!(IFF_RUNNING & ifa->ifa_flags))
    {
      continue;
    }

    // skip link local address
    if (0 == strncmp("fe80:", host, 5))
    {
      continue;
    }

    bool add_entry = false;

    // any interface
    if (any)
    {
      // IPv6 ("::")
      if (family == AF_INET6)
      {
        /* if af==AF_UNSPEC, add interfaces with IPv4 and IPv6 address
         * else add only interface having IPv6 address  */
        add_entry = (af == AF_UNSPEC || AF_INET6 == ifa->ifa_addr->sa_family);
      }
      else     // IPv4 ("0.0.0.0")
      {
        // add only inerfaces having IPv4 address
        add_entry = (AF_INET == ifa->ifa_addr->sa_family);
      }
    }
    else
    {
      // IP address must match IP address of the interface inteface
      add_entry = (0 == strcmp(ip_address, host));
    }

    // add the entry for this interface
    if (add_entry)
    {
      IfInfo entry(ifa->ifa_name, host, ifa->ifa_addr->sa_family);
      if_list.push_back(entry);
    }
  }

  freeifaddrs(ifaddr);
}


static void displayCOMStatus()
{
  ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked

  // read the status from the protocol
  mADK_PP_Prot *proto = mADK_PP_Prot::getInstance();
  struct ProtStatus status;

  if (!proto->get_status(&status))
  {
    ui_dialog("Cannot obtain protocol status, protocol not running.",
              DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
    return;
  }

  const char *stat_table[] =
  {
    "CLOSED",    // ComClosed
    "OPENING",   // ComWaitOpen
    "OPENED",    // ComOpened
    "CONNECTED", // ComConnected
    "FAILED",    // ComFailed
    "DISTURBED"  // ComInterrupt
  };

  string msg = "Connection State: ";

  if (status.connection_state >= ComClosed && status.connection_state <= ComInterrupt)
  {
    msg += stat_table[status.connection_state];
  }
  else
  {
    msg += "NONE";
  }

  msg += "<br>";

  // on failure, display last COM error that was detected by protocol
  if (status.connection_state == ComFailed)
  {
    const char *err = status.last_com_errno == -1 ? "Internal Error" :
                      com_GetErrorString((enum com_ErrorCodes)status.last_com_errno);
    msg += "COM Error: " + string(err) + "<br>";
  }

  if (comcfg.idx() != -1)
  {
    msg += uiPrint("Communication type: %s<br>", comIfTable[comcfg.idx()].menuText);

    const char *ifname = 0;

    switch (status.interface)
    {
      case COM_INTERFACE_NONE: // ifname=0 -> don't show "NONE"
        break;

      case COM_INTERFACE_ETH0:
        ifname = "ETH0";
        break;

      case COM_INTERFACE_ETH1:
        ifname = "ETH1";
        break;

      case COM_INTERFACE_SERIAL_COM1:
        ifname = "COM1";
        break;

      case COM_INTERFACE_SERIAL_COM2:
        ifname = "COM2";
        break;

      case COM_INTERFACE_SERIAL_COM3:
        ifname = "COM3";
        break;

      case COM_INTERFACE_SERIAL_COM4:
        ifname = "COM4";
        break;

      case COM_INTERFACE_SERIAL_COM5:
        ifname = "COM5";
        break;

      case COM_INTERFACE_SERIAL_COM6:
        ifname = "COM6";
        break;

      case COM_INTERFACE_SERIAL_USBD:
        ifname = "USBD";
        break;

      case COM_INTERFACE_SERIAL_USBSER:
        ifname = "USBSER";
        break;

      case COM_INTERFACE_SERIAL_USB_DYN:
        ifname = "USB&nbsp;DYN";
        break;

      case COM_INTERFACE_SERIAL_GATT:
        ifname = "GATT";
        break;

      case COM_INTERFACE_WLAN0:
        ifname = "WLAN0";
        break;

      case COM_INTERFACE_BT:
        ifname = "BT";
        break;

      case COM_INTERFACE_ETH_BT:
        ifname = "ETH&nbsp;BT";
        break;

      case COM_INTERFACE_ETH_USB_GADGET:
        ifname = "ETH&nbsp;USB&nbsp;GADGET";
        break;

      case COM_INTERFACE_ETH_USB1_GADGET:
        ifname = "ETH&nbsp;USB1&nbsp;GADGET";
        break;

      case COM_INTERFACE_ETH_USB2_GADGET:
        ifname = "ETH&nbsp;USB2&nbsp;GADGET";
        break;

      case COM_INTERFACE_ETH_USB3_GADGET:
        ifname = "ETH&nbsp;USB3&nbsp;GADGET";
        break;

      case COM_INTERFACE_SERIAL_COM1A:
        ifname = "COM1A";
        break;

      case COM_INTERFACE_SERIAL_COM1B:
        ifname = "COM1B";
        break;

      case COM_INTERFACE_SERIAL_COM1C:
        ifname = "COM1C";
        break;

      case COM_INTERFACE_SERIAL_COM1D:
        ifname = "COM1D";
        break;

      case COM_INTERFACE_SERIAL_COM1E:
        ifname = "COM1E";
        break;

      case COM_INTERFACE_ETH_USB_HOST_GADGET:
        ifname = "ETH&nbsp;USB&nbsp;HOST&nbsp;GADGET";
        break;

      case COM_INTERFACE_BRIDGE:
        ifname = "BRIDGE";
        break;

      case COM_INTERFACE_LOOP_LOCAL:
        ifname = "LOOP&nbsp;LOCAL";
        break;

      case COM_INTERFACE_ANY:
        ifname = "ANY";
        break;

      default:
        break;
    }

    const char *server_type = 0;
    bool serial_mode = false;

    switch (status.type)
    {
      case COM_CONNECTION_TYPE_TCP:
        server_type = "TCP ";
        break;

      case COM_CONNECTION_TYPE_UDP:
        server_type = "UDP "; // even not possible
        break;

      case COM_CONNECTION_TYPE_SSL:
        server_type = "TLS ";
        break;

      case COM_CONNECTION_TYPE_RAW_SERIAL:
        serial_mode = true;
        break;

      // these types never will be supported by SDI
      case COM_CONNECTION_TYPE_WS:
        FALL_THROUGH
      case COM_CONNECTION_TYPE_WSS:
        FALL_THROUGH
      case COM_CONNECTION_TYPE_RAW_MODEM:
        FALL_THROUGH
      case COM_CONNECTION_TYPE_RAW_CSD:
        FALL_THROUGH
      case COM_CONNECTION_TYPE_RAW_ISDN:
        FALL_THROUGH
      default:
        break;
    }

    const char *server_ip = 0;

    if (strlen(status.server.ipv4_addr) > 0)
    {
      server_ip = status.server.ipv4_addr;
    }
    else if (strlen(status.server.ipv6_addr) > 0)
    {
      server_ip = status.server.ipv6_addr;
    }

    /* for IP based connections, ADK-COM returns the device name, which is
     * provided by the network profile. This is not exactly, what we want to
     * have, since it does not contain the real interface name, in addition,
     * the network device 'LO' is misused for some profiles like CONNECT_ANY.XML.
     * Therefore, we try to figure out interface name with its IP address. */
    if (server_ip && status.server.port != -1)
    {
      // map address family
      int af;

      switch (status.server.address_family)
      {
        case COM_AF_INET:
          af = AF_INET;
          break;

        case COM_AF_INET6:
          af = AF_INET6;
          break;

        default:
          af = AF_UNSPEC;
          break;
      }

      vector<IfInfo> list;
      // read interface(s) linked to this IP address
      get_iflist_for_ip(server_ip, af, list);

      // no interface found, use settings provided by ADK-COM
      if (list.size() == 0)
      {
        if (ifname)
        {
          msg += uiPrint("Active IP interface: %s<br>", ifname);
        }

        bool ipV6 = (server_ip == status.server.ipv6_addr);
        msg += uiPrint("%sServer: %s%s%s:%d<br>", server_type ? server_type : "",
                       ipV6 ? "[" : "", server_ip, ipV6 ? "]" : "", status.server.port);
      }
      else
      {
        msg += uiPrint("Active IP interfaces: %d<br>", list.size());

        for (unsigned i = 0; i < list.size(); i++)
        {
          msg += uiPrint("%d. Interface: %s<br>", i + 1, list[i].ifname.c_str());
          bool ipV6 = (list[i].family == AF_INET6);
          msg += uiPrint("%d. %sServer: %s%s%s:%d<br>", i + 1, server_type ? server_type : "",
                         ipV6 ? "[" : "", list[i].ipaddr.c_str(), ipV6 ? "]" : "", status.server.port);
        }
      }
    }
    else
    {
      // display interface name for other connection types (e.g. serial)
      if (ifname)
      {
        msg += uiPrint("Active interface:<br>%s<br>", ifname);
      }
    }

    if (status.uds_path && strlen(status.uds_path) > 0)
    {
      msg += uiPrint("Active UDS interface:<br>%s<br>", status.uds_path);
    }

    struct ConnectInfo info;

    if (!proto->get_connection_info(&info))
    {
      ui_dialog("Cannot obtain connection info, protocol not running.",
                DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
      return;
    }

    if (info.tcp_cnt > 0)
    {
      msg += uiPrint("Active TCP/IP connections: %d<br>", info.tcp_cnt);

      for (unsigned i = 0; i < info.tcp_cnt; i++)
      {
        if (strlen(info.tcp_clients[i].ipv4_addr) > 0)
        {
          msg += uiPrint("%d. Client: %s:%d<br>", i + 1, info.tcp_clients[i].ipv4_addr, info.tcp_clients[i].port);
        }

        if (strlen(info.tcp_clients[i].ipv6_addr) > 0)
        {
          msg += uiPrint("%d. Client: [%s]:%d<br>", i + 1, info.tcp_clients[i].ipv6_addr, info.tcp_clients[i].port);
        }
      }
    }

    if (info.uds_cnt > 0)
    {
      msg += uiPrint("Active UDS connections: %d<br>", info.uds_cnt);

      for (unsigned i = 0; i < info.uds_cnt; i++)
      {
        msg += uiPrint("%d. Client: PID=%u, UID=%u, GID=%u<br>",
                       i + 1, info.uds_clients[i].pid, info.uds_clients[i].uid, info.uds_clients[i].gid);

        if (strlen(info.uds_clients[i].app_name) > 0)
        {
          msg += uiPrint("%d. Client: %s<br>",
                         i + 1, info.uds_clients[i].app_name);
        }
      }
    }

    proto->free_connection_info(&info);

    // serial mode
    if (serial_mode)
    {
      if (status.serial.baudrate != COM_SERIAL_BAUD_INVALID)
      {
        if (status.serial.baudrate == COM_SERIAL_BAUD_921600) // used for USB
        {
          msg += uiPrint("Mode: Serial over USB<br>");
        }
        else
        {
          msg += uiPrint("Mode: Serial<br>");
          msg += uiPrint("Serial baudrate: %d Baud<br>", (int)status.serial.baudrate);
        }
      }

      if (status.serial.parity != COM_SERIAL_PAR_INVALID)
      {
        msg += "Serial parity: ";

        switch (status.serial.parity)
        {
          default:
          case COM_SERIAL_PAR_NONE:
            msg += "NONE";
            break;

          case COM_SERIAL_PAR_ODD:
            msg += "ODD";
            break;

          case COM_SERIAL_PAR_EVEN:
            msg += "EVEN";
            break;
        }

        msg += "<br>";
      }

      if (status.serial.databits != COM_SERIAL_DATAB_INVALID)
      {
        msg += uiPrint("Serial databits: %d<br>", (int)status.serial.databits);
      }

      if (status.serial.stopbits != COM_SERIAL_STOPB_INVALID)
      {
        msg += uiPrint("Serial stopbits: %d<br>", (int)status.serial.stopbits);
      }

      if (status.serial.flowctrl != COM_SERIAL_FLOW_INVALID)
      {
        msg += "Serial flow control: ";

        switch (status.serial.flowctrl)
        {
          default:
          case COM_SERIAL_FLOW_NONE:
            msg += "NONE";
            break;

          case COM_SERIAL_FLOW_HARDWARE:
            msg += "HARDWARE";
            break;

          case COM_SERIAL_FLOW_SOFTWARE:
            msg += "SOFTWARE";
            break;
        }

        msg += "<br>";
      }
    }

    if (comIfTable[comcfg.idx()].comIf == COM_BLUETOOTH) // BT PAN
    {
      if (!comcfg.bt_device().empty())
      {
        msg += "Paired BT device: " + comcfg.bt_device() + "<br>";
      }

      if (!comcfg.bt_address().empty())
      {
        msg += "BT device address: " + comcfg.bt_address() + "<br>";
      }
    }
    else if (comIfTable[comcfg.idx()].subtype == PST_COM1A_BT_USB)  // COM1A (BT/USB)

    {
      // COM1A mode
      msg += "Mode: " + ComConfig::getCom1aModeName(comcfg.com1a_mode()) + "<br>";

      if (comcfg.com1a_mode() == ComConfig::Com1a_BtClient) // COM1A BT-client
      {
        if (!comcfg.com1a_device().empty())
        {
          msg += "BT client: " + comcfg.com1a_device() + "<br>";
        }

        if (!comcfg.com1a_address().empty())
        {
          msg += "BT client address: " + comcfg.com1a_address() + "<br>";
        }
      }
    }
    else if (comIfTable[comcfg.idx()].comIf == COM_BLE) // BLE
    {
      if (!comcfg.ble_device().empty())
      {
        msg += "BLE device: " + comcfg.ble_device() + "<br>";
      }

      if (!comcfg.ble_address().empty())
      {
        msg += "BLE device address: " + comcfg.ble_address() + "<br>";
      }
    }
  }
  else
  {
    msg += "Communication type: NONE";
  }

  map<string, string> value;
  value["header_text"] = "Connection Status";
  int opt = DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort | DLG_TextAlignLeft;

  // error logo for COM failures
  if (status.connection_state == ComFailed)
  {
    opt |= DLG_ErrorLogo;
  }
  // warning logo for COM closed or interupted
  else if (status.connection_state == ComClosed
           || status.connection_state == ComInterrupt)
  {
    opt |= DLG_WarningLogo;
  }
  // success logo for COM opened or connected
  else
  {
    opt |= DLG_SuccessLogo;
  }

  ui_dialog(msg, opt, -1, &value);
}

static void displaySWInfo()
{
  // SDI Server version, libsdicsd version
  string msg = string(SDI_APP_NAME) + ": " + string(SDI_VERSION) + "<br>" +
               string(CSD_LIBNAME) + ": " + string(csd::csd_GetVersion()) + "<br>";

  string bd = string(__DATE__) + " " + string(__TIME__);
  // replace space by nbsp
  size_t pos = 0;

  while ((pos = bd.find(" ", pos)) != string::npos)
  {
    bd.replace(pos, 1, "&nbsp;");
    pos += 6;
  }

  msg += "Build date: " + bd;

  msg += "<br><br>" + keyservice_get_libname() + ": " + keyservice_get_version() + "<br>";

  pos = 0;
  bd = keyservice_get_build_date();

  while ((pos = bd.find(" ", pos)) != string::npos)
  {
    bd.replace(pos, 1, "&nbsp;");
    pos += 6;
  }

  msg += "Build date: " + bd;

  // add SDI plugin versions
  const vector<SDIPluginCtx *> &plugins = getLoadedPlugins();

  if (plugins.size() > 0)
  {
    msg += "<br><br>SDI plugins:<br>";

    for (unsigned i = 0; i < plugins.size(); i++)
    {
      msg += plugins[i]->getName() + ": " + plugins[i]->getVersion();

      if (i + 1 < plugins.size())
      {
        msg += "<br>";
      }
    }
  }

  map<string, string> value;
  value["header_text"] = "Software Information";
  ui_dialog(msg,
            DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort | DLG_TextAlignLeft | DLG_TextAlignTop,
            -1, &value);
}

static bool displayInfoMenu()
{
  // setup entries for info menu
  JSObject entries;
  // first entry calls configuration options (CPP wizard)
  entries[0]("text") = "Connection Status";
  entries[0]("value") = 0;
  // second entry activates the COM type
  entries[1]("text") = "Software Information";
  entries[1]("value") = 1;
  map<string, string> value;
  value["headline"] = "INFORMATION";
  value["menu"] = entries.dump();
  int res = ui_handleMenu(value, MENU_NoLEDs | MENU_IgnoreExtAbort, 0); // wait infinite

  if (res < 0)
  {
    return false;  // cancel or timeout
  }

  switch (res)
  {
    case 0:
    {
      displayCOMStatus();
      break;
    }

    case 1:
    {
      displaySWInfo();
      break;
    }

    default:
      break; // shouldn't happen
  }

  return true; // show info menu again
}

static bool displayCOMMenu(bool &activate_profile)
{
  ComConfig &comcfg = ComConfig::getInstance(); // ComConfig::getMutex() already locked

  if (comcfg.idx_list().size() == 0)
  {
    // in case if ADKCOM does not provide supported COM types
    ui_dialog("No communication support!",
              DLG_WarningLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
    return false;
  }

  // setup entries for I/O menu
  JSObject entries;

  for (unsigned i = 0; i < comcfg.idx_list().size(); i++)
  {
    unsigned idx = comcfg.idx_list()[i];
    unsigned menuIdx = entries.size();

    // disable pre-selection
    entries[menuIdx]("selected") = false;
    // ckeck the enabled COM type in list
    entries[menuIdx]("icon_id") = (comcfg.idx() == (int)idx) ? "checked" : "unchecked";
    entries[menuIdx]("submenu") = (comIfTable[idx].menu_func != 0);
    entries[menuIdx]("text") = comIfTable[idx].menuText;
    entries[menuIdx]("value") = idx;
  }

  map<string, string> value;
  UICatalog syscat; // SDI catalog for configured system language
  value["headline"] = syscat.getText(TXT_SEL_COM_IF, "");
  value["menu"] = entries.dump();
  int res = ui_handleMenu(value, MENU_NoLEDs | MENU_IgnoreExtAbort, 0); // wait infinite

  if (res < 0)
  {
    // CCP thread no longer required
    terminateCCPThread();
    return false;  // cancel, leave COM menu
  }

  if (res >= (int)(sizeof(comIfTable) / sizeof(comIfTable[0])))
  {
    // CCP thread no longer required
    terminateCCPThread();
    return false;  // shouldn't happen
  }

  bool activate = true;

  // display submenu
  if (comIfTable[res].menu_func)
  {
    activate = comIfTable[res].menu_func(res);
  }

  // ask to enable selected COM type
  if (activate)
  {
    string msg = uiPrint("Activate COM profile for %s?", comIfTable[res].menuText);

    if (ui_dialog(msg,
                  DLG_QuestionLogo | DLG_CancelKey | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort) == RESULT_OK)
    {
      // take over index of the new profile
      comcfg.idx() = res;
      // store profile name (w/o path prefix) to COM configuration file
      comcfg.profile() = filename_from_path(comIfTable[res].comIfFile);
      comcfg.store();
      // signal caller to activate the profile
      activate_profile = true;
    }
  }

  /* COM1A (BT-Client) was enabled before, it must be disabled, since this could affect
   * other COM types e.g. COM1A (USB or BT-Server) or BLE. */
  if (comIfTable[comcfg.idx()].subtype != PST_COM1A_BT_USB
      || comcfg.com1a_mode() != ComConfig::Com1a_BtClient)
  {
    enableBTClientCom1A(false);
  }

  /* COM1A BT and BLE are contrary and BLE may be deactivated by the other menu
   * com1a_btclient_menu() without activation of the COM1A BT-Client profile */
  if (comIfTable[comcfg.idx()].comIf == COM_BLE)
  {
    enum com_ErrorCodes com_errno;

    if (!enableBLE(true, &com_errno))
    {
      string msg = uiPrint("COM Error:<br>%s<br><br>Cannot enable BLE.<br>\
Please re-activate COM interface.", com_GetErrorString(com_errno));
      ui_dialog(msg, DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
    }
  }
  else
  {
    /* BLE was enabled before, it must be disabled, since this could affect
     * other COM types e.g. COM1A (USB, BT-Client, BT-Server). */
    enableBLE(false);
  }

  // COM1A BT is enabled with auto reconnect in select_com_callback()
  return true; // stay in COM menu
}


static void init_com_profile(int supportedComIf, ComConfig &comcfg)
{
  // return, if profile index was already set or profile already read from file
  if (comcfg.idx() != -1 || !comcfg.profile().empty())
  {
    return;
  }

  // read COM configuration file
  bool storage_needed(false);
  comcfg.read(&storage_needed); // calls ComConfig::clear()

  // for standard mode, consider profile whitelist (PWMADK-1626)
  bool whitelist = (ui_enabled() && !comcfg.whitelist().empty());

  // interate COM interface table with known profiles and specify table index for comIfTable
  for (unsigned i = 0; i < (sizeof(comIfTable) / sizeof(comIfTable[0])); i++)
  {
    // PWMADK-2671: enable internal EPP profile, which cannot be configured with COM_IF.cfg
    if (vfiepm::CounterTop::getInstance().isEpp())
    {
      if (comIfTable[i].subtype != PST_EPP_TLS)
      {
        _LOGF_INFO("%s: COM profile '%s' disabled for EPP",
                   __FUNCTION__, filename_from_path(comIfTable[i].comIfFile).c_str());
        continue;
      }

      // EPP file is taken from internal config folder (installed with base package)
      string filename = sdi::filesystem::home_config_file(comIfTable[i].comIfFile);
      struct stat s;

      if (stat(filename.c_str(), &s) != 0 || !S_ISREG(s.st_mode))
      {
        _LOGF_ERROR("%s: EPP COM profile '%s' not installed", __FUNCTION__, filename.c_str());
        break;
      }

      comcfg.idx() = (int)i;

      _LOGF_INFO("%s: COM profile '%s' activated for EPP",
                 __FUNCTION__, filename_from_path(comIfTable[i].comIfFile).c_str());
      // don't add to idx_list, since EPP has no COM menu
      break;
    }
    else
    {
      if (comIfTable[i].subtype == PST_EPP_TLS)
      {
        _LOGF_INFO("%s: COM profile '%s' disabled on CT/standalone, since only used for EPP",
                   __FUNCTION__, filename_from_path(comIfTable[i].comIfFile).c_str());
        continue;
      }
    }

    // PWMADK-3437: force CONNECT_ANDROID.XML for Engage with internal Android (CM5/M424/M440)
    if (sys_internal_android())
    {
      // skip other COM profiles
      if (comIfTable[i].subtype != PST_INTERNAL_ANDROID)
      {
        _LOGF_INFO("%s: COM profile '%s' disabled for Engage with internal Android (CM5/M424/M440)",
                   __FUNCTION__, filename_from_path(comIfTable[i].comIfFile).c_str());
        continue;
      }

      // Android COM profile is taken from internal config folder (installed with base package)
      string filename = sdi::filesystem::home_config_file(comIfTable[i].comIfFile);
      struct stat s;

      if (stat(filename.c_str(), &s) != 0 || !S_ISREG(s.st_mode))
      {
        _LOGF_ERROR("%s: COM profile '%s' not installed for Engage with internal Android (CM5/M424/M440) ",
                    __FUNCTION__, filename.c_str());
        break;
      }

      comcfg.idx() = (int)i;

      _LOGF_INFO("%s: COM profile '%s' activated for Engage with internal Android (CM5/M424/M440)",
                 __FUNCTION__, filename_from_path(comIfTable[i].comIfFile).c_str());
      // don't add to idx_list, since terminal (CM5/M424/M440) has no display with COM menu
      break;
    }
    else
    {
      // disable profile "Android (intern)" on devices w/o internal Android
      if (comIfTable[i].subtype == PST_INTERNAL_ANDROID)
      {
        _LOGF_INFO("%s: COM profile '%s' disabled, since only used for Engage with internal Android (CM5/M424/M440)",
                   __FUNCTION__, filename_from_path(comIfTable[i].comIfFile).c_str());
        continue;
      }
    }

    if ((comIfTable[i].comIf & supportedComIf) != comIfTable[i].comIf)
    {
      _LOGF_INFO("%s: COM profile '%s' disabled due to ADKCOM capabilities 0x%x (not matching 0x%x)",
                 __FUNCTION__, filename_from_path(comIfTable[i].comIfFile).c_str(), supportedComIf, comIfTable[i].comIf);
      continue; // profile disabled due to missing ADKCOM capabilities
    }

    // check for existance of the COM profile and get file path
    string pf = sdi::filesystem::lookup_config_file(comIfTable[i].comIfFile);

    // connection profile not installed
    if (pf.empty())
    {
      _LOGF_INFO("%s: COM profile '%s' not found and disabled",
                 __FUNCTION__, filename_from_path(comIfTable[i].comIfFile).c_str());
      continue;
    }

    // remove the path prefix to get filename only
    string pfname = filename_from_path(pf);

    // check whitelist
    if (whitelist)
    {
      unsigned j;

      for (j = 0; j < comcfg.whitelist().size(); j++)
      {
        if (comcfg.whitelist()[j] == pfname)
        {
          break;
        }
      }

      // profile not in whitelist
      if (j >= comcfg.whitelist().size())
      {
        _LOGF_INFO("%s: COM profile '%s' disabled (not in whitelist)", __FUNCTION__, pf.c_str());
        continue;
      }
    }

    // add to list of allowed/supported COM profiles for menu
    comcfg.idx_list().push_back(i);

    // use profile, if matching with configuration file
    if (comcfg.profile() == pfname)
    {
      comcfg.idx() = (int)i;
      _LOGF_INFO("%s: COM profile '%s' found and activated", __FUNCTION__, pf.c_str());
    }
    else
    {
      _LOGF_INFO("%s: COM profile '%s' found and added to allowed list", __FUNCTION__, pf.c_str());
    }

    // skip PST_COM1A_USB, if PST_COM1A_BT_USB is supported
    if (comIfTable[i].subtype == PST_COM1A_BT_USB)
    {
      i++;
    }
  }

  // issue an error, if expected COM profile in COM_IF.cfg couldn't be activated
  if (!comcfg.profile().empty() && comcfg.idx() == -1)
  {
    _LOGF_ERROR("%s: Configured COM profile '%s' in '%s' couldn't be activated",
                __FUNCTION__, comcfg.profile().c_str(), COM_IF_CONFIG_FILE);
  }

  // update file (if required and profile is valid)
  if (storage_needed && comcfg.idx() != -1)
  {
    // store profile name (w/o path prefix) to COM configuration file
    comcfg.profile() = filename_from_path(comIfTable[comcfg.idx()].comIfFile);
    comcfg.store();
  }
}

bool select_com_profile(int comInterfaces, char **ComFileName)
{
  static string new_profile; // static string holding the buffer for pointer ComFileName
  *ComFileName = 0;

  ComConfig &comcfg = ComConfig::getInstance();

  // syncronize callback with menu/info button
  MutexLock mconfig(&comcfg.getMutex());

  // if not already done, read COM configuration file and initialize index for comIfTable
  init_com_profile(comInterfaces, comcfg);

  // #### headless mode ####
  if (!ui_enabled())
  {
    // invalid COM configuration for headless mode, will exit SDI server with error log entry
    if (comcfg.idx() == -1)
    {
      _LOGF_ERROR("%s: No valid file '%s' found in headless mode, exit 1 !!!", __FUNCTION__, COM_IF_CONFIG_FILE);
      sdi_exit(1); // COM configuration mandatory to run SDI server in headless mode
    }

    // enable BT device for COM1A (BT-Client/BT-Server)
    if (comIfTable[comcfg.idx()].subtype == PST_COM1A_BT_USB)
    {
      /* COM1A (BT server) requires UI of SDI server for pairing,
       * therefore, it is not supported for headless mode */
      if (comcfg.com1a_mode() == ComConfig::Com1a_BtServer)
      {
        _LOGF_ERROR("%s: COM1A (BT server) not supported in headless mode, exit 1 !!!", __FUNCTION__);
        sdi_exit(1);
      }

      if (comcfg.com1a_mode() == ComConfig::Com1a_BtClient)
      {
        if (!comcfg.com1a_address().empty())
        {
          enum com_ErrorCodes com_errno;

          // reconnect COM1A BT virtual channels (PWMADK-1691)
          if (!enableBTClientCom1A(true, &com_errno, BTCom1A_Headless | BTCom1A_Reconnect))
          {
            _LOGF_ERROR("%s: Failed to connect COM1A for \
BT device '%s' in headless mode (error = %s)! Try to reconnect later...",
                        __FUNCTION__, comcfg.com1a_address().c_str(), com_GetErrorString(com_errno));
          }
        }
        else
        {
          // fall back to COM1A with USB (as previous SDI versions did)
          comcfg.com1a_mode() = ComConfig::Com1a_Usb;
        }
      }
    }

    /* BLE requires UI of SDI server for pairing,
     * therefore, it is not supported for headless mode */
    if (comIfTable[comcfg.idx()].comIf == COM_BLE)
    {
      _LOGF_ERROR("%s: BLE not supported in headless mode, exit 1 !!!", __FUNCTION__);
      sdi_exit(1);
    }

    // activate the current profile
    new_profile = activateConnectionProfile(comcfg.idx());
    *ComFileName = (char *)new_profile.c_str();
    return true;
  }

  // #### standard mode ####

  // flag set to true, if this function shall display the idlescreen before it retuns
  bool show_idlescreen = false;

  // select_com_profile() already called -> COM setup already done (see below)
  if (com_setup_done)
  {
    /* Enable menu and status softkeys/keyhelpers on display idlescreen,
     * This is necessary, if the menu was locked by an active connection,
     * which is was lost. For some profiles then this callback gets called. */
    bool was_locked = sysSetIdleScreenLocked(false, false);

    if (was_locked)
    {
      show_idlescreen = true;
    }

    /* second call of select_com_profile(), which means that the protocol wasn't
     * able to open the COM interface. In this case, we have no connection to mobile device
     * anymore and we can recover COM interface or display the idlescreen with the COM menu */
    if (idle_auto_com_init && comcfg.idx() != -1)
    {
      // COM1A BT
      if (comIfTable[comcfg.idx()].subtype == PST_COM1A_BT_USB)
      {
        // COM1A BT-Server: start pairing in idle to accept new devices (PWMADK-2535)
        if (comcfg.com1a_mode() == ComConfig::Com1a_BtServer
            && comcfg.com1a_btserver_pairing_idle())
        {
          /* disable idlescreen updates with connection status except
           * for ComFailed and DCS_ComConnected, since both are used to
           * display "Wait for connection" and disable BT pairing. For
           * more details see function showIdleConnectStatus(). */
          enableIdleConnectStatus(DCS_ComFailed | DCS_ComConnected);

          enum com_ErrorCodes com_errno = COM_ERR_NONE;

          if (!startCom1ABtPairingThread(&com_errno))
          {
            if (com_errno == COM_ERR_NONE)
            {
              _LOGF_INFO("%s: Idle BT pairing for COM1A aborted.", __FUNCTION__);
            }
            else
            {
              _LOGF_ERROR("%s: Failed to start idle BT pairing for COM1A (error = %s)!",
                          __FUNCTION__, com_GetErrorString(com_errno));
            }

            /* UI error message already displayed startCom1ABtPairingThread(),
             * show idle screen and disable BT pairing as of now, which can be
             * re-enabled by entering/leaving the SDI menu */
            show_idlescreen = true;
            idle_auto_com_init = false;
          }
          else
          {
            /* if BT pairing in idle was started, the BT pairing thread
             * takes over control to display the idlescreen */
            show_idlescreen = false;
          }
        }
        // COM1A BT-Client: reconnect COM1A BT virtual channels (PWMADK-1691)
        else if (comcfg.com1a_mode() == ComConfig::Com1a_BtClient
                 && comcfg.com1a_btclient_reconnect_idle()
                 && !comcfg.com1a_address().empty())
        {
          // disable idlescreen updates with connect status
          enableIdleConnectStatus(DCS_None);

          while (1)
          {
            enum com_ErrorCodes com_errno;

            if (enableBTClientCom1A(true, &com_errno, BTCom1A_Reconnect))
            {
              _LOGF_INFO("%s: Reconnect COM1A for \
BT device '%s' successful!", __FUNCTION__, comcfg.com1a_address().c_str());
              /* don't show idlescreen, but enable enable idlescreen updates
               * with connection status, which will display idlescreen immediatelly */
              show_idlescreen = false;
              enableIdleConnectStatus();
              // show until next idlescreen status comes up
              ui_dialog("Please wait...",
                        DLG_WaitLogo | DLG_NoLEDs | DLG_IgnoreExtAbort | DLG_Async, -1);
              break;
            }
            else
            {
              // enableBTClientCom1A() was aborted by user if it fails with com_errno==COM_ERR_NONE
              if (com_errno == COM_ERR_NONE)
              {
                _LOGF_INFO("%s: Aborted reconnect COM1A for \
BT device '%s' (error = %s)! Stopped auto reconnect.",
                           __FUNCTION__, comcfg.com1a_address().c_str(), com_GetErrorString(com_errno));
                // show idle screen, disable displaying status and auto reconnnect
                show_idlescreen = true;
                enableIdleConnectStatus(DCS_None);
                // disable auto COM1A reconnect temporary
                idle_auto_com_init = false;
                break;
              }
              else
              {
                _LOGF_ERROR("%s: Failed to reconnect COM1A for \
BT device '%s' (error = %s)! Continue auto reconnect...",
                            __FUNCTION__, comcfg.com1a_address().c_str(), com_GetErrorString(com_errno));
                // show until next idlescreen status comes up
                ui_dialog("Please wait...",
                          DLG_WaitLogo | DLG_NoLEDs | DLG_IgnoreExtAbort | DLG_Async, -1);
                // don't show idlescreen here, let status callback do this job
                show_idlescreen = false;
              }
            }
          }
        }
      }
    }

    if (show_idlescreen)
    {
      // show idlescreen with COM menu (if not suppressed by admin mode)
      sysDisplayIdleScreen(Idle_MenuEnabled);
    }

    /* activate the profile (don't show UI error message with every call of select(), since this
     * would appear all the time. Only first invocation will lead to error message, see below.
     * Further error message are displayed be io_menu_invoker(), when configuring profile via menu */
    new_profile = activateConnectionProfile(comcfg.idx());
    *ComFileName = (char *)new_profile.c_str();

    return true;
  }

  /*** COM SETUP: DISPLAY COM SETUP WIZARD OR INIT PRE-SELECTED COM TYPE ***/

  /* Disable COM setup wizard for next call of select_com_profile().
   * COM menu can be displayed with idlescreen softkeys manually */
  com_setup_done = true;

  show_idlescreen = true; // show idlescreen

  // if no COM profile was selected/pre-configured before, display the COM setup wizard
  if (comcfg.idx() == -1)
  {
    // if we have only one COM type, enable it automatically (without COM type menu)
    if (comcfg.idx_list().size() == 1)
    {
      unsigned i = comcfg.idx_list()[0];
      // do the same as displayCOMMenu() does after a COM type is activated
      bool enable_profile = true;

      // display submenu (if any)
      if (comIfTable[i].menu_func)
      {
        enable_profile = comIfTable[i].menu_func(i);
      }

      // enable selected COM type
      if (enable_profile)
      {
        comcfg.idx() = i;
        // store profile name (w/o path prefix) to COM configuration file
        comcfg.profile() = filename_from_path(comIfTable[i].comIfFile);
        comcfg.store();
      }
    }
    else
    {
      // display COM type menu
      bool dummy; // un-used, since idx will be set on profile activation

      while (displayCOMMenu(dummy));
    }
  }
  else // initializations with pre-selected COM type
  {
    // prerequisite for BLE: a device must already be paired with the terminal
    if (comIfTable[comcfg.idx()].comIf == COM_BLE)
    {
      if (comcfg.ble_address().empty())  // no device was once paired with SDI server
      {
        // show submenu for BLE pairing and activation
        if (!comIfTable[comcfg.idx()].menu_func
            || !comIfTable[comcfg.idx()].menu_func(comcfg.idx()))
        {
          comcfg.idx() = -1; // disable BLE profile
        }
      }
      else
      {
        enum com_ErrorCodes com_errno;

        if (!enableBLE(true, &com_errno))
        {
          ui_dialog(uiPrint("COM Error:<br>%s<br><br>Cannot enable BLE",
                            com_GetErrorString(com_errno)),
                    DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
          comcfg.idx() = -1; // disable BLE profile
        }
      }
    }
    // prerequisite for COM1A (BT client): a device must already be paired with the terminal
    else if (comIfTable[comcfg.idx()].subtype == PST_COM1A_BT_USB
             && comcfg.com1a_mode() == ComConfig::Com1a_BtClient)
    {
      // enable COM1A over BT with existing BT address
      if (!comcfg.com1a_address().empty())
      {
        /* don't show idlescreen and let displayConnectStatus()
         * do the job with error message and pending idlescreen */
        show_idlescreen = false;

        enum com_ErrorCodes com_errno;

        if (!enableBTClientCom1A(true, &com_errno))
        {
          // enableBTClientCom1A() was aborted by user if it fails with com_errno==COM_ERR_NONE
          if (com_errno == COM_ERR_NONE)
          {
            _LOGF_INFO("%s: Aborted connect COM1A for \
BT device '%s' (error = %s)! Stopped auto reconnect.",
                       __FUNCTION__, comcfg.com1a_address().c_str(), com_GetErrorString(com_errno));
            enableIdleConnectStatus(DCS_None);
            // disable auto COM1A reconnect temporary
            idle_auto_com_init = false;
            // show idlescreen after abort
            show_idlescreen = true;
          }
          else
          {
            // enable auto COM1A reconnect (if enabled by config)
            idle_auto_com_init = true;
            // show until next idlescreen status comes up
            ui_dialog("Please wait...",
                      DLG_WaitLogo | DLG_NoLEDs | DLG_IgnoreExtAbort | DLG_Async, -1);
          }
        }
        else
        {
          // show until next idlescreen status comes up
          ui_dialog("Please wait...",
                    DLG_WaitLogo | DLG_NoLEDs | DLG_IgnoreExtAbort | DLG_Async, -1);
        }
      }
      else
      {
        // show submenu for BT pairing and activation
        if (!comIfTable[comcfg.idx()].menu_func
            || !comIfTable[comcfg.idx()].menu_func(comcfg.idx()))
        {
          comcfg.idx() = -1; // disable COM1A BT profile
        }
      }
    }
  }

  if (comcfg.idx() == -1)
  {
    // in case if ADKCOM does not provide suppported COM types
    ui_dialog("No COM profile enabled!<br><br>Enter menu to activate COM interface.",
              DLG_WarningLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
  }
  else
  {
    // set the profile name to protocol
    new_profile = activateConnectionProfile(comcfg.idx());

    if (new_profile.empty())
    {
      // profile couldn't be activated
      ui_dialog(uiPrint("Failed to activate COM profile %s!", comIfTable[comcfg.idx()].menuText),
                DLG_ErrorLogo | DLG_EnterKey | DLG_NoLEDs | DLG_IgnoreExtAbort);
    }

    *ComFileName = (char *)new_profile.c_str();
  }

  // enable menu and status softkeys/keyhelpers
  if (show_idlescreen)
  {
    sysDisplayIdleScreen(Idle_MenuEnabled);
  }

  return (comcfg.idx() != -1);
}

void reset_com_profile()
{
  ComConfig &comcfg = ComConfig::getInstance();
  MutexLock mconfig(&comcfg.getMutex());
  /* clear current COM configuration and force to read
   * new configuration with next call of select_com_profile()  */
  comcfg.clear();
  /* ensure with enabled UI that COM setup wizard will pop up */
  com_setup_done = false;
}

bool multi_connection_support_enabled()
{
  ComConfig::MultiConnectMode mcm = ComConfig::MCM_Default;

  /* PWMADK-2030: CM5/M440/M424 always uses IPC variant with multi connection support.
   * PWMADK-2671: EPP always uses IPC variant, which provides TLS support */
  if (sys_internal_android()                        // PWMADK-2030
      || vfiepm::CounterTop::getInstance().isEpp()) // PWMADK-2671
  {
    mcm = ComConfig::MCM_Enabled;
  }
  else // read configuration from COM settings file
  {
    // PWMADK-2573: IPC variant can be enabled by configuration
    // PWMADK-2966: Use defaults depending on SDI mode, but config might change defaults
    mcm = ComConfig::getMultiConnectMode();

    if (mcm == ComConfig::MCM_Default)
    {
      /* standard mode: use ADKCOM variant lib_mADK_PP_Prot_com.so (w/o multi connection support)
       * headless mode: use ADKIPC variant lib_mADK_PP_Prot_ipc.so (with multi connection support) */
      mcm = (ui_enabled() ? ComConfig::MCM_Disabled : ComConfig::MCM_Enabled);
    }
  }

  return (mcm == ComConfig::MCM_Enabled);
}

bool comcfg_file_valid(const string &comcfg_file)
{
  JSObject obj;
  return ComConfig::load(comcfg_file, obj);
}

void protocol_status_ui_update(const struct ProtStatus *status)
{
  if (!status)
  {
    return;
  }

  // disable BT pairing once a device has connected to SDI server
  if (status->connection_state == ComConnected)
  {
    ComConfig &comcfg = ComConfig::getInstance();
    MutexLock mconfig(&comcfg.getMutex());

    // disable idle COM1A BT pairing (if enabled)
    if (comcfg.idx() != -1
        && comIfTable[comcfg.idx()].subtype == PST_COM1A_BT_USB
        && comcfg.com1a_mode() == ComConfig::Com1a_BtServer)
    {
      stopCom1ABtPairingThread();
    }
  }

  // unlock idlescreen on EPP (enable info button again), if connection gets lost
  if (vfiepm::CounterTop::getInstance().isEpp() && status->connection_state == ComClosed)
  {
    (void)sysSetIdleScreenLocked(false, false);
  }

  // display the connection status as idlescreen (UI only)
  showIdleConnectStatus((int)status->connection_state, status->last_com_errno);
}

#endif // HEADLESS
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
