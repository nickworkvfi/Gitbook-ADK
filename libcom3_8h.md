---
title: com/src/libcom3.h

---

# com/src/libcom3.h



## Namespaces

| Name           |
| -------------- |
| **[vficom](namespacevficom.md)**  |
| **[vficom::cmd](namespacevficom_1_1cmd.md)**  |
| **[vficom::cmdparam](namespacevficom_1_1cmdparam.md)**  |
| **[vficom::cmdparam::in](namespacevficom_1_1cmdparam_1_1in.md)**  |
| **[vficom::cmdparam::in::stk_on](namespacevficom_1_1cmdparam_1_1in_1_1stk__on.md)**  |
| **[vficom::cmdparam::in::stk_off](namespacevficom_1_1cmdparam_1_1in_1_1stk__off.md)**  |
| **[vficom::cmdparam::in::stk_status](namespacevficom_1_1cmdparam_1_1in_1_1stk__status.md)**  |
| **[vficom::cmdparam::in::stk_write](namespacevficom_1_1cmdparam_1_1in_1_1stk__write.md)**  |
| **[vficom::cmdparam::in::stk_write::msg](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg.md)**  |
| **[vficom::cmdparam::in::stk_write::msg::tr](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1tr.md)**  |
| **[vficom::cmdparam::in::stk_write::msg::tr::refresh](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1tr_1_1refresh.md)**  |
| **[vficom::cmdparam::in::stk_write::msg::tr::setup_event_list](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1tr_1_1setup__event__list.md)**  |
| **[vficom::cmdparam::in::stk_write::msg::tr::select_item](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1tr_1_1select__item.md)**  |
| **[vficom::cmdparam::in::stk_write::msg::tr::setup_menu](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1tr_1_1setup__menu.md)**  |
| **[vficom::cmdparam::in::stk_write::msg::env](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1env.md)**  |
| **[vficom::cmdparam::in::stk_write::msg::env::menu_select](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1env_1_1menu__select.md)**  |
| **[vficom::cmdparam::in::stk_write::msg::env::event_download](namespacevficom_1_1cmdparam_1_1in_1_1stk__write_1_1msg_1_1env_1_1event__download.md)**  |
| **[vficom::cmdparam::in::ussd_write](namespacevficom_1_1cmdparam_1_1in_1_1ussd__write.md)**  |
| **[vficom::cmdparam::in::ussd_status](namespacevficom_1_1cmdparam_1_1in_1_1ussd__status.md)**  |
| **[vficom::cmdparam::in::sim_access](namespacevficom_1_1cmdparam_1_1in_1_1sim__access.md)**  |
| **[vficom::cmdparam::in::ping](namespacevficom_1_1cmdparam_1_1in_1_1ping.md)**  |
| **[vficom::cmdparam::out](namespacevficom_1_1cmdparam_1_1out.md)**  |
| **[vficom::cmdparam::out::ping](namespacevficom_1_1cmdparam_1_1out_1_1ping.md)**  |
| **[vficom::cmdparam::out::stk_status](namespacevficom_1_1cmdparam_1_1out_1_1stk__status.md)**  |
| **[vficom::cmdparam::out::ussd_status](namespacevficom_1_1cmdparam_1_1out_1_1ussd__status.md)**  |
| **[vficom::cmdparam::out::sim_access](namespacevficom_1_1cmdparam_1_1out_1_1sim__access.md)**  |
| **[vficom::cmdparam::out::wlan_scan](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan.md)**  |
| **[vficom::cmdparam::out::wlan_scan::json_keys](namespacevficom_1_1cmdparam_1_1out_1_1wlan__scan_1_1json__keys.md)**  |
| **[vficom::event](namespacevficom_1_1event.md)**  |
| **[vficom::event::stk](namespacevficom_1_1event_1_1stk.md)**  |
| **[vficom::event::stk::set_up_event_list](namespacevficom_1_1event_1_1stk_1_1set__up__event__list.md)**  |
| **[vficom::event::stk::select_item](namespacevficom_1_1event_1_1stk_1_1select__item.md)**  |
| **[vficom::event::stk::menu_selection](namespacevficom_1_1event_1_1stk_1_1menu__selection.md)**  |
| **[vficom::event::ussd](namespacevficom_1_1event_1_1ussd.md)**  |
| **[vficom::status](namespacevficom_1_1status.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vficom::Exception](classvficom_1_1_exception.md)** <br>[Exception]() type thrown by constructors in classes in this file.  |
| class | **[vficom::Milliseconds](classvficom_1_1_milliseconds.md)**  |
| class | **[vficom::CommandPipe](classvficom_1_1_command_pipe.md)**  |
| class | **[vficom::EventPipe](classvficom_1_1_event_pipe.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[COM3_DllSpec](libcom3_8h.md#define-com3-dllspec)**  |




## Macros Documentation

### define COM3_DllSpec

```cpp
#define COM3_DllSpec 
```


## Source code

```cpp
#pragma once

#if defined __GNUC__ && defined VFI_COM_SHARED_EXPORT
#define COM3_DllSpec __attribute__((visibility("default")))
#else
#define COM3_DllSpec // used for both, static libraries and program symbol import
#endif

#include <sys/types.h>
#include <ipc/jsobject.h>
#include <exception>

namespace vficom {

namespace cmd {

COM3_DllSpec extern const char ping[];        
COM3_DllSpec extern const char stk_on[];      
COM3_DllSpec extern const char stk_off[];     
COM3_DllSpec extern const char stk_status[];  
COM3_DllSpec extern const char stk_write[];   
COM3_DllSpec extern const char ussd_status[]; 
COM3_DllSpec extern const char ussd_write[];  
COM3_DllSpec extern const char sim_access[];  
COM3_DllSpec extern const char wlan_scan[];   

} // namespace cmd

namespace cmdparam {

namespace in {

COM3_DllSpec extern const char command[]; 

namespace stk_on {

COM3_DllSpec extern const char timeout[]; 

} // namespace stk_on

namespace stk_off {

COM3_DllSpec extern const char timeout[]; 

} // namespace stk_off

namespace stk_status {

COM3_DllSpec extern const char timeout[]; 

} // namespace stk_status

namespace stk_write {

COM3_DllSpec extern const char timeout[];     
COM3_DllSpec extern const char message_obj[]; 

namespace msg {

enum STKTRCommand {
    STK_TR_CMD_REFRESH          = 1,
    STK_TR_CMD_SETUP_EVENT_LIST = 5,
    STK_TR_CMD_SELECT_ITEM      = 36,
    STK_TR_CMD_SETUP_MENU       = 37,
    STK_TR_MAX_ENUM             = 0x7FFFFFFF
};

enum STKENVCommand {
    STK_ENV_CMD_MENU_SELECT    = 211,
    STK_ENV_CMD_EVENT_DOWNLOAD = 214,
    STK_ENV_MAX_ENUM           = 0x7FFFFFFF
};

COM3_DllSpec extern const char usat_command[]; 
COM3_DllSpec extern const char proactCmd[];    
COM3_DllSpec extern const char envCmd[];       
COM3_DllSpec extern const char parameters[];   

namespace tr {

namespace refresh {

COM3_DllSpec extern const char result[]; 

} // namespace refresh

namespace setup_event_list {

COM3_DllSpec extern const char result[]; 

} // namespace setup_event_list

namespace select_item {

COM3_DllSpec extern const char result[];     
COM3_DllSpec extern const char add_result[]; 
COM3_DllSpec extern const char dcs[];        
COM3_DllSpec extern const char hex_string[]; 

} // namespace select_item

namespace setup_menu {

COM3_DllSpec extern const char result[]; 

} // namespace setup_menu

} // namespace tr

namespace env {

namespace menu_select {

COM3_DllSpec extern const char item_id[]; 

} // namespace menu_select

namespace event_download {

COM3_DllSpec extern const char event[]; 

} // namespace event_download

} // namespace env

} // namespace msg

} // namespace stk_write

namespace ussd_write {

COM3_DllSpec extern const char n[];       
COM3_DllSpec extern const char str[];     
COM3_DllSpec extern const char dcs[];     
COM3_DllSpec extern const char timeout[]; 

} // namespace ussd_write

namespace ussd_status {

COM3_DllSpec extern const char timeout[]; 

} // namespace ussd_status

namespace sim_access {

COM3_DllSpec extern const char timeout[];  
COM3_DllSpec extern const char json_cmd[]; 

} // namespace sim_access

namespace ping {

/* Input parameters */
COM3_DllSpec extern const char destination[];   
COM3_DllSpec extern const char count[];         
COM3_DllSpec extern const char timeout[];       
COM3_DllSpec extern const char addr_family[];   
COM3_DllSpec extern const char dont_fragment[]; 
COM3_DllSpec extern const char interface[];     
COM3_DllSpec extern const char interval[];      
COM3_DllSpec extern const char size[];          
COM3_DllSpec extern const char waittime[];      

} // namespace ping

} // namespace in

namespace out {

COM3_DllSpec extern const char comerr[]; 

namespace ping {

/* Output parameters */
COM3_DllSpec extern const char transmitted[]; 
COM3_DllSpec extern const char received[];    
COM3_DllSpec extern const char rtt_avg[];     
COM3_DllSpec extern const char rtt_min[];     
COM3_DllSpec extern const char rtt_max[];     

} // namespace ping

namespace stk_status {

COM3_DllSpec extern const char status[]; 

} // namespace stk_status

namespace ussd_status {

COM3_DllSpec extern const char status[]; 

} // namespace ussd_status

namespace sim_access {

COM3_DllSpec extern const char json_resp[]; 

} // namespace sim_access

namespace wlan_scan {

COM3_DllSpec extern const char json_resp[]; 

namespace json_keys {

// Keys of the JSON array returned by wlan_scan
COM3_DllSpec extern const char ssid[];  //<! String, can be empty
COM3_DllSpec extern const char bssid[]; 
COM3_DllSpec extern const char adhoc[]; 
COM3_DllSpec extern const char pairw[]; 
COM3_DllSpec extern const char group[]; 
COM3_DllSpec extern const char km[];    
COM3_DllSpec extern const char perc[];  
COM3_DllSpec extern const char dbm[];   
COM3_DllSpec extern const char freq[];  
COM3_DllSpec extern const char proto[]; 
COM3_DllSpec extern const char std[];   

} // namespace json_keys

} // namespace wlan_scan

} // namespace out

} // namespace cmdparam

namespace event {
enum EventType {
    EVT_URC_STK  = 0,
    EVT_URC_USSD = 1,
    EVT_MAX_ENUM = 0x7FFFFFFF
};

namespace stk {
enum STKURCProCommand {
    SET_UP_EVENT_LIST    = 5,
    SELECT_ITEM          = 36,
    MENU_SELECTION       = 37,
    STK_URC_PRO_MAX_ENUM = 0x7FFFFFFF
};

COM3_DllSpec extern const char urc[];               
COM3_DllSpec extern const char proactive_command[]; 
COM3_DllSpec extern const char parameters[];        
COM3_DllSpec extern const char timeout[];           

namespace set_up_event_list {

COM3_DllSpec extern const char event_list[]; 

} // namespace set_up_event_list

namespace select_item {

COM3_DllSpec extern const char cmd_qualifier[];     
COM3_DllSpec extern const char alpha[];             
COM3_DllSpec extern const char item_id[];           
COM3_DllSpec extern const char total_items[];       
COM3_DllSpec extern const char item_text[];         
COM3_DllSpec extern const char next_action[];       
COM3_DllSpec extern const char default_item[];      
COM3_DllSpec extern const char icon_id[];           
COM3_DllSpec extern const char icon_id_list_elem[]; 

} // namespace select_item

namespace menu_selection {

COM3_DllSpec extern const char cmd_qualifier[];     
COM3_DllSpec extern const char alpha[];             
COM3_DllSpec extern const char item_id[];           
COM3_DllSpec extern const char total_items[];       
COM3_DllSpec extern const char item_text[];         
COM3_DllSpec extern const char next_action[];       
COM3_DllSpec extern const char icon_id[];           
COM3_DllSpec extern const char icon_id_list_elem[]; 

} // namespace menu_selection

} // namespace stk

namespace ussd {

// Names correspond to 3GPP TS 27.00, Chapter 7.15, Unstructured supplementary service data +CUSD
COM3_DllSpec extern const char m[];   
COM3_DllSpec extern const char str[]; 
COM3_DllSpec extern const char dcs[]; 

} // namespace ussd

} // namespace event

namespace status {

enum PipeStatus {
    OK             = 0, 
    INVALID        = 1, 
    NOSUPPORT      = 2, 
    NOTREADY       = 3, 
    FAILED         = 5, 
    TIMEOUT        = 6, 
    STARVATION     = 7, 
    USER_INTERRUPT = 8, 
    MAX_ENUM       = 0x7FFFFFFF
};

} // namespace status

class COM3_DllSpec Exception : std::exception {
    char description[64];
    status::PipeStatus error;

public:
    Exception(enum status::PipeStatus error, const char *description);

    virtual const char *what() const throw(); 
    status::PipeStatus getError() const;      
};

class COM3_DllSpec Milliseconds {
public:
    u_int64_t millis;

    Milliseconds(u_int32_t millis);
    ~Milliseconds();
};

class COM3_DllSpec CommandPipe {
    class ComdaemonPipe *impl;

    // Copy not valid
    CommandPipe(const CommandPipe &commandPipe);
    void operator=(const CommandPipe &commandPipe);

public:
    CommandPipe();
    virtual ~CommandPipe();

    enum status::PipeStatus sendRecv(const vfiipc::JSObject &in, vfiipc::JSObject &out, Milliseconds millis);

    enum status::PipeStatus sendRecv(const vfiipc::JSObject &in, vfiipc::JSObject &out, Milliseconds millis, int interruptFD);
};

class COM3_DllSpec EventPipe {
    class ComdaemonPipe *impl;

public:
    EventPipe(event::EventType type);
    ~EventPipe();

    // Copy not valid
    EventPipe(const EventPipe &eventPipe);
    void operator=(const EventPipe &eventPipe);

    enum status::PipeStatus recv(vfiipc::JSObject &out, Milliseconds millis);

    enum status::PipeStatus recv(vfiipc::JSObject &out, Milliseconds millis, int interruptFD);
};

} // namespace vficom

#undef COM3_DllSpec
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
