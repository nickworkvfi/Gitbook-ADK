---
title: ADK-SYS Programmers Guide

---

# ADK-SYS Programmers Guide




# Preface

This guide provides information on the usage of the ADK SYS components.


## Audience

This document is intended for programmers who want to understand and use ADK SYS components.


## Organization

This guide is organized as follows:

[Introduction]. Provides an overview of the ADK SYS functionality.

[Getting Started].

[Programming].

[System Setup and Requirements].

[Troubleshooting]. Gives solutions for possible issues in ADK SYS.

[Appendix]. Acronym Definitions.


# Introduction

SYS Info is a component to read and write system properties and to control statusbar, beeper and LEDs


## Concepts

[System Statusbar]. Provides information on service functions used to setup a system statusbar.

[System Property Functions]. Provides information on API functions for reading/writing system related properties.

[System Beep Functions]. Provides information on API functions used for beeping and playing sounds.

[System LED Functions]. Provides information on API functions for terminal LEDs management.

[System Installation Functions]. Provides information on API for installing packages and related functions.

[Compiling and Linking]. Contains information on settings for compiling and linking the ADK SYS library.

[Module Documentation]. Contains a detailed description of the ADK SYS library components.


# Getting Started


## Demo Application

Demo source code from the ADK SYS distribution package can be found in "Examples" menu.


# Programming


## System Statusbar

ADK SYS library provides service functions (see `[sysbar.h](sysbar_8h.md#file-sysbar.h)`) that can be used to setup a system statusbar, which is composed of an HTML document. The statusbar, which runs with DirectGUI and the ADK SYS library, internally invokes `[uiInvokeAsync()](namespacevfigui.md#function-uiinvokeasync)` of VFIGUI library to display and refresh the statusbar contents. Statusbar functions are implemented in the separate library `libvfisysbar.so`, which needs to be linked to ADK SYS library `libvfisysinfo.so` and VFIGUI.


### Statusbar Region

The ADK SYS statusbar is designed to run in a separate UI region of DirectGUI, having its own HTML document as source. The HTML content of a statusbar is usually dynamic and needs to updated on special system events (e.g. on change of time, battery level or signal strength).

![04_sysinfo_System_Statusbar_Running_in_a_Separate_UI_Region.png](.//04_sysinfo_System_Statusbar_Running_in_a_Separate_UI_Region.png)Figure System Statusbar Running in a Separate UI Region![04_sysinfo_System_Statusbar_Running_in_a_Separate_UI_Region.png](.//04_sysinfo_System_Statusbar_Running_in_a_Separate_UI_Region.png)Figure System Statusbar Running in a Separate UI Region![04_sysinfo_System_Statusbar_Running_in_a_Separate_UI_Region.png](.//04_sysinfo_System_Statusbar_Running_in_a_Separate_UI_Region.png)Figure System Statusbar Running in a Separate UI Region![04_sysinfo_System_Statusbar_Running_in_a_Separate_UI_Region.png](.//04_sysinfo_System_Statusbar_Running_in_a_Separate_UI_Region.png)Figure System Statusbar Running in a Separate UI Region

The figure shows the display dividing into two UI regions: UI region 0 (default region) is used to display the application's HTML content and UI region 1 runs the system statusbar. In order to divide the display into regions, the application must either call UI function `[uiLayout()](namespacevfigui.md#function-uilayout)` or use a GUI configuration file `gui.ini` containing a default section [layout] that configures the two regions as follows: 

```cpp
[layout]
1=0 0 -1 20
0=0 21 -1 -1
```

 This ``[layout] section defines the UI region 1 with a height of 20 pixels, which is used for the system statusbar.

The regions must be set up before invoking `[sysStartStatusbarURL()](namespacevfisysinfo.md#function-sysstartstatusbarurl)` or `sysStart``Statusbar()`. If the region for the statusbar does not exist, starting the statusbar will fail.


### Running the Statusbar

Statusbar items are usually dynamic and event-driven. For this reason, the UI statusbar region needs to be updated with new HTML content on different system events. Since Verix and V/OS do not provide an event-based interface supplying system information, a seperate thread must read the system properties cyclically and update the UI statusbar region according to these values. Running a separate thread for a UI region, DirectGUI provides function `uiCreateThread()`. This function creates a new thread and automatically overtakes UI properties (like default font, resource path etc.) to that thread, which allows the thread to invoke UI functions (e.g. `[uiInvoke()](namespacevfigui.md#function-uiinvoke)`) to display or refresh a statusbar. In order to keep such complexibilty away from developers and to reduce efforts for synchronisation of system properties with the UI, the ADK SYS library provides a simple API function that does just that: 

```cpp
int sysStartStatusbarURL(int region_id,
                    const std::string &url,
                    const std::map<std::string,std::string> &values, sysStatusbarCallback cb=0,
                    void *cbdata=0);

int sysStartStatusbar(int region_id,
                    const std::string &html,
                    const std::map<std::string,
                    std::string> &values,
                    const std::string &resource_path=std::string(),
                    sysStatusbarCallback cb=0,
                    void *cbdata=0);

int sysStartStatusbarURLReturnVal(int region_id,
                    const std::string &url,
                    const std::map<std::string,std::string> &values,
                    sysStatusbarCallback cb=0,
                    void *cbdata=0,
                    sysStatusbarReturnCallback returncb=0);
```

 Both `[sysStartStatusbarURL()](namespacevfisysinfo.md#function-sysstartstatusbarurl)` and `[sysStartStatusbar()](namespacevfisysinfo.md#function-sysstartstatusbar)` run a new UI thread, which cyclically updates and repaints the statusbar for UI region `region_id`.

Unlike `[sysStartStatusbarURL()](namespacevfisysinfo.md#function-sysstartstatusbarurl)`, function `[sysStartStatusbar()](namespacevfisysinfo.md#function-sysstartstatusbar)` takes the HTML string instead of an URL as second parameter and additional parameter resource_path must be provided to point to the resource path. This path is used by DirectGUI to find resource files referenced from the HTML string.

The HTML string or HTML file may contain system built-in variables, which are described in [Updating the Statusbar].

In addition, the application may inject user-defined values with string map values to be passed to XML processing instructions in the HTML document (e.g. <?var...?>). This mechanism is similar to the one from DirectGUI.

Last parameters cb and cbdata may be optionally set to install a callback for the statusbar, which is called every time before the statusbar is refreshed. From this callback, the application may inject a value map to update the user-defined values that were previously provided by string map values. For more details, see [Updating the Statusbar].

`[sysStartStatusbarURLReturnVal()](namespacevfisysinfo.md#function-sysstartstatusbarurlreturnval)` behaves the same as `[sysStartStatusbarURL()](namespacevfisysinfo.md#function-sysstartstatusbarurl)`, but allows to pass additional `sysStatusbarReturnCallback` callback. It is passed to [uiInvokeAsync()](namespacevfigui.md#function-uiinvokeasync) function and is called when function returns result. After `sysStatusbarReturnCallback` is called `[sysRefreshStatusBar()](namespacevfisysinfo.md#function-sysrefreshstatusbar)` should be called to reinvoke statusbar HTML file and allow to receive next result.

It is possible to invoke `[sysStartStatusbarURL()](namespacevfisysinfo.md#function-sysstartstatusbarurl)` or `[sysStartStatusbar()](namespacevfisysinfo.md#function-sysstartstatusbar)` with different region IDs to run multiple statusbars. Invoking the functions on the same region ID will restart the statusbar and corresponds to the following sequence: 

```cpp
sysStopStatusbar();

sysStartStatusbar();
```


### Updating the Statusbar

ADK SYS statusbar is automatically updated in intervals, which are configured by the refresh time (default: 4 seconds). The application may change the refresh time by calling `[sysSetRefreshTime()](namespacevfisysinfo.md#function-syssetrefreshtime)` (or `[sysGetRefreshTime()](namespacevfisysinfo.md#function-sysgetrefreshtime)` to read the time). If the application wants to force an update out of the interval, `[sysRefreshStatusBar()](namespacevfisysinfo.md#function-sysrefreshstatusbar)` may be used.

With every statusbar update the UI statusbar thread does the following:


#### 1 Update HTML built-in system variables

HTML built-in system variables are provided for use in the HTML document. The values for these variables are automatically supplied and updated by the statusbar thread and need not to be provided by the application. 

They can be used in the HTML document for XML processing instructions (e.g. <?var name?>). The following HTML variables are recently supported:



* Date/Time variables: 
| Variable Name  | Description   |
|  -------- | -------- |
| sys_time  | preformated time string, format: hh:mm   |
| sys_time_hour  | hours, format: 00 - 23   |
| sys_time_min  | min, format: 00 - 59   |
| sys_time_sec  | sec, format: 00 - 60 (The range is up to 60 to allow for occasional leap seconds)   |
| sys_time_day  | day, format: 01 - 31   |
| sys_time_month  | month, format: 01 - 12   |
| sys_time_year  | year, format: yyyy   |
| sys_time_12h  | hours, format: 01 - 12   |
| sys_time_am_pm  | AM or PM designation, format: AM or PM   |



A more up to date list of Date/Time variables is provided by reference description for `[sysStartStatusbarURL()](namespacevfisysinfo.md#function-sysstartstatusbarurl)`.

The statusbar is automatically updated based on refresh intervals, if a time unit is increased. _Example:_

* using variable `sys_time_sec` forces a statusbar update every second
* using variable `sys_time_min` forces a statusbar update every minute

sys_time_sec may cause a high CPU load, since the GUI server will refresh statusbar region every second.



* Battery information variables: 
| Variable Name  | Description   |
|  -------- | -------- |
| sys_battery_percentage  | Battery Charge Percentage, format: 0 - 100 , -1 if no battery is available   |
| sys_battery_percentage2  | Battery Charge Percentage, format: 0% - 100% , if no battery is available   |
| sys_battery_level  | Battery Charge Level, format: 1 - 11 (or 101-111 for battery charging), -1 if no battery available   |
| sys_battery_charge_mode  | Battery charge mode, format: 1-2 , empty if no battery is available   |


* Docking status variables: 
| Variable Name  | Description   |
|  -------- | -------- |
| sys_docking_status  | Docking Status (format: 0 == undocked, 1 == docked, battery charging)   |



A more up to date list of docking status variables is provided by reference description for `[sysStartStatusbarURL()](namespacevfisysinfo.md#function-sysstartstatusbarurl)`.


#### 2 Invoking statusbar callback to update application user defined values

If `[sysStartStatusbar()](namespacevfisysinfo.md#function-sysstartstatusbar)` has passed the callback function `sysStatusbarCallback`, the statusbar thread invokes this callback every time before the statusbar is refreshed. The callback function provides the application data pointer from `[sysStartStatusbar()](namespacevfisysinfo.md#function-sysstartstatusbar)` and the region ID of the statusbar for which the callback was triggered. The last parameter is a string map containing name-value pairs, which were previously initialized with `[sysStartStatusbar()](namespacevfisysinfo.md#function-sysstartstatusbar)`. 

```cpp
typedef void (*sysStatusbarCallback)(void *data, int region_id, std::map<std::string,std::string> &values);
```

 From inside the callback, the application may modify the string map which contains the name-value pairs. The map is directly passed to the next call of `[uiInvoke()](namespacevfigui.md#function-uiinvoke)` of DirectGUI to refresh the statusbar region. The HTML document for the statusbar may contain XML processing instructions refering these values as shown in the following example:



* Application callback function: 

```cpp
static void statusbar_callback(void *data, int region_id, map<string,string> &values)
{

// region ID is useful, if application uses one callback for multiple statusbars
if(region_id==1) { values["mob_netw_type"]="GPRS";
}

}
```

* Statusbar HTML document: 

```cpp
...

<div style=’font-size:10px><?var mob_netw_type?></div>

...
```


The application may either use the callback function to update the user-defined values for a statusbar region or it may use `[sysSetStatusbarValues()](namespacevfimac.md#function-syssetstatusbarvalues)`. The function is thread-safe and can be invoked from any thread for asynchronous statusbar updates. `[sysSetStatusbarValues()](namespacevfimac.md#function-syssetstatusbarvalues)` must not be used inside the statusbar callback. Also note that `[sysSetStatusbarValues()](namespacevfimac.md#function-syssetstatusbarvalues)` will do a repaint on the statusbar. The application may use `[sysGetStatusbarValues()](namespacevfimac.md#function-sysgetstatusbarvalues)` to read name-value pairs from the library.


### Statusbar return callback

Return callback declaration is identical to `[vfigui::uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback)`. This callback is called by `[uiInvokeAsync()](namespacevfigui.md#function-uiinvokeasync)`

```cpp
typedef vfigui::uiAsyncCallback sysStatusbarReturnCallback;
```



* statusbar return callback function 

```cpp
static void statusbar_return_callback(void *data, vfigui::UICBType type, vfigui::UICBData &uidata)
{
    if ( vfigui::UI_CB_RESULT == type )
    {
        int return_value = uidata.result();

        if ( result > vfigui::UI_ERR_OK )
        {
            // do something
        }
    }
}
```


After `sysStatusbarReturnCallback` is called `[sysRefreshStatusBar()](namespacevfisysinfo.md#function-sysrefreshstatusbar)` should be called to reinvoke statusbar HTML file and allow to receive next result.


### Stopping the Statusbar

Application can stop a running statusbar by calling the following function 

```cpp
int sysStopStatusbar(int region_id);
```

 If the application runs multiple statusbars, `[sysStopStatusbar()](namespacevfisysinfo.md#function-sysstopstatusbar)` must be called for each statusbar region that is specified by parameter region_id. After stopping the statusbar, the application should invoke `[uiLayout()](namespacevfigui.md#function-uilayout)` to switch back to normal layout. For example, when switching to a full screen layout: 

```cpp
sysStopStatusbar(1);

uiLayout("layout-fullscreen");
```

GUI configuration file: 

```cpp
[layout-fullscreen]
0=0 0 -1 -1
```

Invoking `[uiLayout()](namespacevfigui.md#function-uilayout)` may cause a running statusbar to abort, if the new layout does not provide the same statusbar region.

The running statusbar does regular updates in the background and needs to be stopped for power-saving to take effect on some platforms. For instance, Verix eVo requires all tasks in the system to call `SVC_WAIT()` or `wait_event()` to enter the sleep mode. This means a running statusbar that is periodically updated would break this power-saving concept.


## System Property Functions

ADK SYS offers API functions for reading and writing system related properties (see `[sysinfo.h](sysinfo_8h.md#file-sysinfo.h)`). These API functions may be used in an application by linking basic library `libvfisysinfo.so`.

On VOS3 libvfisysinfo.so has dependencies on internal libraries that are not provided within SDK. So, client must build with "-Wl,--allow-shlib-undefined" linker option.


### Reading System Properties

The following functions can be used to read system related properties:



```cpp
int sysGetPropertyInt(enum SYSPropertyInt property, int *value);
int sysGetPropertyString(enum SYSPropertyString property, char* value, int len);
int sysGetPropertyString(enum SYSPropertyString property, std::string &value);
```

`[sysGetPropertyInt()](namespacevfisysinfo.md#function-sysgetpropertyint)` is used to read system properties, which is defined as an integer (e.g. `SYS_PROP_BATTERY_CHARGE_LEVEL`, member of `enum``SYSPropertyInt`).

`[sysGetPropertyString()](namespacevfisysinfo.md#function-sysgetpropertystring)` is used to read system properties, which is defined as a string (e.g. `SYS_PROP_HW_MODEL_NAME`, member of `enum``SYSPropertyString`). The second overloaded function takes a STL string as second parameter preventing the user to specify an insufficient buffer size. The first variant will return `SYS_ERR_PARAMETER`, if the buffer is too small.

All properties are intended for reading. If a property is only allowed for writing, the functions will return `SYS_ERR_PROP_WRITE_ONLY`.


The properties compatibility matrix on all platforms - VOS1/VOS2/VOS3:


### Int type properties


| Int type property name  | VOS  | VOS2  | VOS3   |
|  -------- | -------- | -------- | -------- |
| SYS_PROP_BATTERY_AVAILABLE  | -  | +  | +   |
| SYS_PROP_BATTERY_STATUS_OK  | -  | +  | +   |
| SYS_PROP_BATTERY_DEVICE  | +  | +  | +   |
| SYS_PROP_BATTERY_VOLTAGE  | -  | +  | +   |
| SYS_PROP_BATTERY_CAPACITY  | -  | +  | +   |
| SYS_PROP_BATTERY_CHARGE_LEVEL  | -  | +  | +   |
| SYS_PROP_BATTERY_CHARGING  | -  | +  | +   |
| SYS_PROP_BATTERY_FULL  | -  | +  | +   |
| SYS_PROP_BATTERY_TEMP  | -  | +  | +   |
| SYS_PROP_BATTERY_CURRENT  | -  | +  | +   |
| SYS_PROP_BATTERY_CRITICAL  | -  | +  | +   |
| SYS_PROP_BATTERY_LOW  | -  | +  | +   |
| SYS_PROP_BATTERY_NORMAL  | -  | +  | +   |
| SYS_PROP_BATTERY_TECHNOLOGY  | -  | +  | +   |
| SYS_PROP_BATTERY_FCC  | -  | +  | +   |
| SYS_PROP_BATTERY_SOH  | -  | +  | +   |
| SYS_PROP_BATTERY_CHARGE_IN_SLEEP  | -  | +  | +   |
| SYS_PROP_BATTERY_CALIBRATION  | -  | +  | +   |
| SYS_PROP_BATTERY_TYPE  | -  | +  | +   |
| SYS_PROP_BATTERY_CHARGE_MODE  | -  | +  | -   |
| SYS_PROP_CHARGE_CYCLE_COUNT  | -  | +  | +   |
| SYS_PROP_UX100_AVAILABLE  | +  | -  | -   |
| SYS_PROP_UX100_OPERATIONAL_MODE  | +  | -  | -   |
| SYS_PROP_UX100_BACKLIGHT  | +  | -  | -   |
| SYS_PROP_UX400_AVAILABLE  | +  | -  | +   |
| SYS_PROP_UX115_UNIT  | +  | -  | -   |
| SYS_PROP_UX_UNIT  | +  | +  | +   |
| SYS_PROP_INTERNAL_BATTERY_STATUS  | +  | +  | +   |
| SYS_PROP_INTERNAL_BATTERY_VOLTAGE  | +  | +  | +   |
| SYS_PROP_DOCKING_STATUS  | +  | +  | +   |
| SYS_PROP_DOCK_SUPPORT  | +  | +  | +   |
| SYS_PROP_USB1_MODE  | -  | +  | +   |
| SYS_PROP_USB2_MODE  | -  | +  | +   |
| SYS_PROP_USB1_CONFIGURABLE  | -  | +  | +   |
| SYS_PROP_USB2_CONFIGURABLE  | -  | +  | -   |
| SYS_PROP_USB1_DEFAULT  | -  | +  | +   |
| SYS_PROP_USB2_DEFAULT  | -  | +  | -   |
| SYS_PROP_USB1_CHARGE  | -  | +  | -   |
| SYS_PROP_USB2_CHARGE  | -  | +  | -   |
| SYS_PROP_USB_HIGH_POWER_MODE  | -  | +  | -   |
| SYS_PROP_PRINTER_AVAILABLE  | +  | +  | +   |
| SYS_PROP_POWER_STATUS  | +  | +  | +   |
| SYS_PROP_POWER_ON  | -  | +  | -   |
| SYS_PROP_CHARGE_ON_SAVING  | -  | +  | +   |
| SYS_PROP_KEYBOARD_BEEP  | +  | +  | +   |
| SYS_PROP_KEYB_BACKLIGHT  | +  | +  | +   |
| SYS_PROP_KEYBOARD_HW  | +  | +  | +   |
| SYS_PROP_KEYBOARD_SIZE  | +  | +  | +   |
| SYS_PROP_DISP_CONTRAST  | +  | -  | -   |
| SYS_PROP_DISP_BACKLIGHT  | +  | +  | +   |
| SYS_PROP_DISP  | +  | +  | +   |
| SYS_PROP_DISP_HW  | +  | +  | +   |
| SYS_PROP_DISP_COLOR  | +  | +  | +   |
| SYS_PROP_DISP_HEIGHT  | +  | +  | +   |
| SYS_PROP_DISP_WIDTH  | +  | +  | +   |
| SYS_PROP_DISP_TOUCH  | +  | +  | +   |
| SYS_PROP_ANDROID  | +  | +  | -   |
| SYS_PROP_HW_RAM_SIZE  | +  | +  | +   |
| SYS_PROP_HW_RAM_USED  | +  | +  | +   |
| SYS_PROP_HW_FLASH_SIZE  | +  | +  | +   |
| SYS_PROP_HW_FLASH_USED  | +  | +  | +   |
| SYS_PROP_HW_EXE_PARTITION_SIZE  | +  | +  | +   |
| SYS_PROP_HW_EXE_PARTITION_USED  | +  | +  | +   |
| SYS_PROP_HW_DATA_PARTITION_SIZE  | +  | +  | +   |
| SYS_PROP_HW_DATA_PARTITION_USED  | +  | +  | +   |
| SYS_PROP_HW_TOUCH_GROUNDED  | -  | -  | -   |
| SYS_PROP_LED  | +  | +  | +   |
| SYS_PROP_PCI  | +  | +  | +   |
| SYS_PROP_VOLUME  | -  | +  | +   |
| SYS_PROP_SPEAKER_AVAILABLE  | -  | +  | +   |
| SYS_PROP_BUZZER_AVAILABLE  | +  | +  | +   |
| SYS_PROP_ADE_STATUS  | +  | +  | -   |
| SYS_PROP_CERT_SPONSOR_PROD  | +  | +  | +   |
| SYS_PROP_ATTACK_STATUS  | +  | +  | +   |
| SYS_PROP_ATTACK_STATUS_CODE  | -  | -  | -   |
| SYS_PROP_VCL_ENCRYPTION_STATUS  | +  | +  | +   |
| SYS_PROP_VOLTAGE_ENCRYPTION_STATUS  | +  | +  | -   |
| SYS_PROP_POSEIDON_ENCRYPTION_STATUS  | +  | +  | -   |
| SYS_PROP_NAVIGATOR_STATUS  | -  | +  | -   |
| SYS_PROP_SERVICE_SWITCH_STATUS  | +  | +  | +   |
| SYS_PROP_DEVICE_MODE  | +  | +  | +   |
| SYS_PROP_SYSMODE_BUTTON  | +  | +  | +   |
| SYS_PROP_DEVICE_TYPE  | +  | +  | +   |
| SYS_PROP_VATS  | +  | +  | +   |
| SYS_PROP_UX100_ANTI_REMOVAL_SWITCH  | +  | -  | -   |
| SYS_PROP_SLP_TAINTED_STATUS  | -  | +  | +   |
| SYS_PROP_UPTIME  | +  | +  | +   |
| SYS_PROP_BARCODE_SCANNER  | -  | +  | +   |
| SYS_PROP_CAMERA  | -  | +  | +   |
| SYS_PROP_SWITCH_THRESHOLD_VOLTAGE  | -  | +  | -   |
| SYS_PROP_LOW_THRESHOLD_VOLTAGE  | -  | +  | -   |
| SYS_PROP_CONSOLE_STATE  | +  | +  | -   |
| SYS_PROP_UX_MDB  | +  | +  | +   |
| SYS_PROP_CARD_SLOT2_MODE  | -  | +  | -   |
| SYS_PROP_CARD_SLOT_COUNT  | -  | +  | -   |
| SYS_PROP_KEYBOARD_TYPE  | +  | +  | +   |
| SYS_PROP_EXT_NFC_ANTENNA  | +  | -  | +   |
| SYS_PROP_VRK2_SUPPORT  | -  | +  | +   |
| SYS_PROP_USB_C_CHARGING_STATE  | -  | +  | -   |
| SYS_PROP_POGO_CHARGING_STATE  | -  | +  | -   |
| SYS_PROP_ECC_VRK_SUPPORT  | -  | +  | +   |
| SYS_PROP_LCD_PANEL_ID  | -  | +  | -   |
| SYS_PROP_VRK_CERT_INSTALLED  | -  | -  | +   |
| SYS_PROP_VRK_PACKAGING_UVRK_SUPPORT  | -  | +  | +   |
| SYS_PROP_POGO_DATA_STATE  | -  | +  | -   |
| SYS_PROP_UX100_TYPE  | +  | -  | -   |



### String type properties


| String type property name  | VOS  | VOS2  | VOS3   |
|  -------- | -------- | -------- | -------- |
| SYS_PROP_HW_MODEL_NAME  | +  | +  | +   |
| SYS_PROP_HW_MODEL_NAME_SHORT  | +  | +  | +   |
| SYS_PROP_HW_SERIALNO  | +  | +  | +   |
| SYS_PROP_OS_VERSION  | +  | +  | +   |
| SYS_PROP_HW_PTID  | +  | +  | +   |
| SYS_PROP_HW_VARIANT_NAME  | +  | +  | +   |
| SYS_PROP_HW_PART_NO  | +  | +  | +   |
| SYS_PROP_HW_VERSION  | +  | +  | +   |
| SYS_PROP_HW_LOT_NO  | +  | +  | +   |
| SYS_PROP_BOOT_VERSION  | +  | +  | +   |
| SYS_PROP_TERMINAL_SPONSOR  | +  | +  | +   |
| SYS_PROP_MANUF_DATE  | +  | +  | -   |
| SYS_PROP_CERT_SPONSOR_SN  | +  | +  | +   |
| SYS_PROP_CERT_SPONSOR_MODE  | +  | +  | +   |
| SYS_PROP_ADK_VERSION  | +  | +  | +   |
| SYS_PROP_UX100_SERIALNO  | +  | -  | -   |
| SYS_PROP_UX100_PARTNO  | +  | -  | -   |
| SYS_PROP_UX100_FW_VERSION  | +  | -  | -   |
| SYS_PROP_SBI_VERSION  | +  | +  | +   |
| SYS_PROP_VAULT_VERSION  | +  | +  | +   |
| SYS_PROP_CIB_VERSION  | +  | +  | -   |
| SYS_PROP_MIB_VERSION  | +  | +  | +   |
| SYS_PROP_KERNEL_VERSION  | +  | +  | +   |
| SYS_PROP_RFS_VERSION  | +  | +  | -   |
| SYS_PROP_RELEASE_VERSION  | +  | +  | +   |
| SYS_PROP_RFS_SECURITY_VERSION  | +  | +  | -   |
| SYS_PROP_SRED_VERSION  | +  | +  | -   |
| SYS_PROP_SRED_MODE  | +  | +  | -   |
| SYS_PROP_OPENPROTOCOL_VERSION  | +  | +  | -   |
| SYS_PROP_PCI_REBOOT_TIME  | +  | +  | +   |
| SYS_PROP_FILE_NAME_TO_INSTALL  | +  | +  | -   |
| SYS_PROP_MSR_COUNTERS  | +  | +  | -   |
| SYS_PROP_SCR_COUNTERS  | +  | +  | -   |
| SYS_PROP_CTLS_COUNTERS  | +  | +  | -   |
| SYS_PROP_DOCK_STATION_SN  | -  | +  | -   |
| SYS_PROP_DOCK_STATION_PN  | -  | +  | -   |
| SYS_PROP_DOCK_STATION_MODEL  | -  | +  | -   |
| SYS_PROP_DOCK_STATION_MAC  | -  | +  | -   |
| SYS_PROP_DOCK_STATION_HW_REV  | -  | +  | -   |
| SYS_PROP_DOCK_STATION_INSTALL  | -  | +  | -   |
| SYS_PROP_GSM_FIRMWARE_VERSION  | -  | +  | -   |
| SYS_PROP_DOCK_STATION_OS_VERSION  | -  | +  | -   |
| SYS_PROP_DOCK_STATION_IP_ADDRESS  | -  | +  | -   |
| SYS_PROP_DOCK_STATION_IP_V6_ADDRESS  | -  | +  | -   |
| SYS_PROP_DOCK_STATION_USB1_IP_ADDRESS  | -  | +  | -   |
| SYS_PROP_ANDROID_IP_V4_ADDRESS  | -  | +  | -   |
| SYS_PROP_ANDROID_IP_V6_ADDRESS  | -  | +  | -   |
| SYS_PROP_ANDROID_MAC  | -  | +  | -   |
| SYS_PROP_WARRANTIED_KEYS  | +  | +  | +   |
| SYS_PROP_SECAPP_VERSION  | +  | +  | -   |
| SYS_PROP_VSS_VERSION  | +  | +  | -   |
| SYS_PROP_STBY_MCU_VERSION  | +  | -  | -   |
| SYS_PROP_EXT_STORAGE  | +  | +  | +   |
| SYS_PROP_INSTALLED_PCKG_LIST  | +  | +  | -   |
| SYS_PROP_PKG_LIST  | +  | +  | -   |
| SYS_PROP_APP_PKG_LIST  | +  | +  | -   |
| SYS_PROP_BUNDLE_LIST  | +  | +  | -   |
| SYS_PROP_APP_BUNDLE_LIST  | +  | +  | -   |
| SYS_PROP_MSR_INFO  | +  | +  | +   |
| SYS_PROP_SCR_INFO  | +  | +  | +   |
| SYS_PROP_CTLS_INFO  | +  | +  | +   |
| SYS_PROP_HW_STRING  | +  | +  | +   |
| SYS_PROP_DEV_ID  | +  | +  | +   |
| SYS_PROP_FET  | +  | +  | -   |
| SYS_PROP_BT_MAC  | +  | +  | +   |
| SYS_PROP_WIFI_MAC  | +  | +  | +   |
| SYS_PROP_ETH_MAC  | +  | +  | +   |
| SYS_PROP_ETH2_MAC  | +  | +  | +   |
| SYS_PROP_COUNTRY  | +  | +  | -   |
| SYS_PROP_RTC  | +  | +  | +   |
| SYS_PROP_NTP_SERVER  | +  | +  | +   |
| SYS_PROP_BATTERY_SERIALNO  | -  | -  | -   |
| SYS_PROP_TIME_ZONE  | +  | +  | +   |
| SYS_PROP_TIME_ZONE_LIST  | +  | +  | +   |
| SYS_PROP_TIME_ZONE_FROM_FILE  | +  | +  | +   |
| SYS_PROP_TIME_ZONE_NAME  | +  | +  | +   |
| SYS_PROP_TIME_ISO8601  | +  | +  | +   |
| SYS_PROP_REBOOT_REASON  | -  | +  | +   |
| SYS_PROP_ALL_LOADED_KEYS  | +  | +  | +   |
| SYS_PROP_ALL_LOADED_KEYS_V2  | -  | +  | -   |
| SYS_PROP_TAMPER_RECORDS  | +  | +  | +   |
| SYS_PROP_BARCODE_SCANNER_FW_VERSION  | -  | +  | -   |
| SYS_PROP_ANDROID_VERSION  | -  | +  | -   |
| SYS_PROP_STATUSBAR_COLOR  | -  | +  | -   |
| SYS_PROP_ANDROID_TIME  | -  | +  | -   |
| SYS_PROP_MTD_INFO  | -  | +  | -   |
| SYS_PROP_HW_ID  | -  | +  | +   |
| SYS_PROP_LCD_PANEL_MODEL  | -  | +  | -   |
| SYS_PROP_DT_NAME  | -  | +  | -   |
| SYS_PROP_TOUCH_NAME  | -  | +  | -   |
| SYS_PROP_TOUCH_HW_VERSION  | -  | +  | -   |
| SYS_PROP_TOUCH_SW_VERSION  | -  | +  | -   |
| SYS_PROP_TOUCH_CONFIG_VERSION  | -  | +  | -   |
| SYS_PROP_ANDROID_GATEWAY  | -  | +  | -   |
| SYS_PROP_ANDROID_DNS1  | -  | +  | -   |
| SYS_PROP_ANDROID_DNS2  | -  | +  | -   |
| SYS_PROP_ANDROID_PREFIX_LENGTH  | -  | +  | -   |


[vfisysinfo](sysinfo_8h.md#file-sysinfo.h) API usage example: ```cpp

// sdk
#include <sys/time.h>
#include <sys/stat.h>
#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <unistd.h>
#include <string>

// adk
#include "html/gui.h"
#include "log/liblog2.h"
#include "ipc/jsobject.h"
#include "sysinfo/util.h"
#include "sysinfo/inifile.h"
#include "sysinfo/sysinfo.h"
#include "sysinfo/syspm.h"
#include "sysinfo/sysbar.h"
#include "sysinfo/sysbeep.h"
#include "sysinfo/leds.h"
#include "sysinfo/sysinstall.h"

// sdk
#ifdef RAPTOR
#include <lli.h>
#endif

// macro
#include "constants/macro.h"

// constants
enum
{
    MODEL_NAME,
    OS_VER,
    ADK_VER,
    GET_HW_STRING,
    WARRANTIED_KEYS,
    ALL_KEYS,
    ALL_KEYS_V2,
    SN,
    PTID,
    RTC,
    RTCP5,
    RTCM5,
    NTP_HOST,
    BAT_STATUS,
    BAT_VOLT,
    BAT_CAPACITY,
    BAT_LEVEL,
    BAT_SN,
    BAT_AVAL,
    BAT_TECH,
    BAT_FCC,
    BAT_SOH,
    BAT_CALIBRATION,
    BAT_TYPE,
    MSR_INFO,
    SCR_INFO,
    CTLS_INFO,
    CHARGE_ON_SAVING,
    CHARGE_CYCLE_COUNT,
    INT_BAT_STATUS,
    INT_BAT_VOLT,
    DOCKED,
    KBD_BEEPER,
    BEEPER_TEST,
    RAM_SZ,
    FLASH_SZ,
    EXE_PARTITION_SZ,
    DATA_PARTITION_SZ,
    PART_NO,
    HW_VER,
    SET_ENV,
    GET_ENV,
    HW_VAR,
    LOT_NO,
    VERSIONS,
    MAC_ETH1,
    MAC_ETH2,
    MAC_BT,
    MAC_WIFI,
    COUNTRY_CODE,
    SHUTDOWN,
    REBOOT,
    REBOOT_DOCK,
    MANUF_DATE,
    DISPLAY_ON,
    DISPLAY_OFF,
    DISPLAY_CONTRAST,
    DISPLAY_BACKLIGHT,
    KBD_BACKLIGHT,
    KBD_BACKLIGHT_STATE,
    LED_STATUS,
    EXT_STORAGE,
    SPONSOR,
    SPONSOR_SN,
    VOLUME_SET_MIN,
    VOLUME_SET_MAX,
    VOLUME_GET,
    LEDS_DEMO,
    LEDS_BRIGHTNESS_DEMO,
    PRINTER_AVAILABLE,
    SB_REFRESH_1,
    SB_REFRESH_0,
    SB_REFRESH_60,
    UX400_INFO,
    UX100_INFO,
    SET_PCI_REBOOT_TIME,
    GET_PCI_REBOOT_TIME,
    LIB_VERSION,
    GET_TIME_ZONE_LIST,
    SET_TIME_ZONE_NAME,
    SET_TIME_ZONE_ISO,
    GET_TIME_ZONE,
    INSTALL_PACKAGE,
    PKG_LIST,
    APP_PKG_LIST,
    BUNDLE_LIST,
    APP_BUNDLE_LIST,
    MSR_COUNTERS,
    SCR_COUNTERS,
    CTLS_COUNTERS,
    GET_MDB,
    GET_USB1_DEFAULT,
    GET_USB2_DEFAULT,
    GET_USB1_ROLE,
    GET_USB2_ROLE,
    GET_USB1_MODE,
    GET_USB2_MODE,
    GET_USB1_CHARGE,
    GET_USB2_CHARGE,
    SET_USB1_HOST,
    SET_USB1_DEVICE,
    SET_USB2_HOST,
    SET_USB2_DEVICE,
    SET_USB2_DEFAULT,
    GET_USB_POWER_MODE,
    SET_USB_POWER_MODE,
    SET_TIME_1,
    GET_TIME,
    BATTERY_DEVICE,
    POWER_STATUS,
    ATTACK_STATUS,
    VCL_ENCRYPTION_STATUS,
    DISPLAY_STATUS,
    REBOOT_REASON,
    UPTIME,
    DOCKING_STATION_INFO,
    DOCKING_STATION_ADDRESS,
    DOCKING_STATION_UPDATE,
    GSM_FIRMWARE_VERSION,
    CAMERA_STATUS,
    BARCODE_STATUS,
    ADE_FET,
    GET_SWITCH_THRESHOLD,
    GET_LOW_THRESHOLD,
    SET_SWITCH_THRESHOLD,
    SET_LOW_THRESHOLD,
    FREE_INSTALL_PACKAGE,
    GET_INSTALL_STATUS,
    GET_CONSOLE_STATE,
    GET_TAMPER_RECORDS,
    GET_CARD_SLOT2_MODE,
    SET_CARD_SLOT2_SIM,
    SET_CARD_SLOT2_SAM,
    GET_SIM_SLOT_COUNT,
    KBD_TYPE,
    GET_MTD_INFO,
    GET_SLP_TAINTED,
    GET_HW_ID,
    GET_VRK2_SUPPORT,
    GET_POGO_STATE,
    GET_USB_C_STATE,
    SET_POGO_STATE_CONFIG,
    SET_USB_C_STATE_CONFIG,
    GET_ECC_VRK_SUPPORT,
    GET_LCD_PANEL_ID,
    GET_LCD_PANEL_MODEL,
    GET_VRK_CERT_INSTALLED,
    GET_DT_NAME,
    GET_POGO_DATA_STATE,
    SET_POGO_DATA_TO_USB_C,
    SET_POGO_DATA_TO_POGO,
    GET_MOBILE_RADIO_SW_VERSION,
    GET_TOUCH_SCREEN_NAME,
    GET_TOUCH_SCREEN_HW_VERSION,
    GET_TOUCH_SCREEN_SW_VERSION,
    GET_TOUCH_SCREEN_CONFIG_VERSION,
    GET_ANDROID_GATEWAY,
    GET_ANDROID_PREFIX_LENGTH,
    GET_ANDROID_DNS1,
    GET_ANDROID_DNS2,
    EXIT,
};

const struct vfigui::UIMenuEntry menu[]=
{
    {"MSR info",                         MSR_INFO,                   0},
    {"SCR info",                         SCR_INFO,                   0},
    {"CTLS info",                        CTLS_INFO,                  0},
    {"Modelname",                        MODEL_NAME,                 0},
    {"OS version",                       OS_VER,                     0},
    {"ADK version",                      ADK_VER,                    0},
    {"SerialNo",                         SN,                         0},
    {"UnitNo (PTID)",                    PTID,                       0},
    {"Read RTC",                         RTC,                        0},
    {"RTC +5min",                        RTCP5,                      0},
    {"RTC -5min",                        RTCM5,                      0},
    {"Shutdown",                         SHUTDOWN,                   0},
    {"Reboot",                           REBOOT,                     0},
    {"Reboot dock",                      REBOOT_DOCK,                0},
    {"Set env",                          SET_ENV,                    0},
    {"Get env",                          GET_ENV,                    0},
    {"Manufacturing date",               MANUF_DATE,                 0},
    {"Battery device",                   BATTERY_DEVICE,             0},
    {"Battery available",                BAT_AVAL,                   0},
    {"Battery status",                   BAT_STATUS,                 0},
    {"Battery voltage",                  BAT_VOLT,                   0},
    {"Battery capacity",                 BAT_CAPACITY,               0},
    {"Battery charge level",             BAT_LEVEL,                  0},
    {"Battery serial No",                BAT_SN,                     0},
    {"Battery technology",               BAT_TECH,                   0},
    {"Battery FCC",                      BAT_FCC,                    0},
    {"Battery type",                     BAT_TYPE,                   0},
    {"Battery calibration satus",        BAT_CALIBRATION,            0},
    {"ETH1 MAC",                         MAC_ETH1,                   0},
    {"ETH2 MAC",                         MAC_ETH2,                   0},
    {"BT MAC",                           MAC_BT,                     0},
    {"WIFI MAC",                         MAC_WIFI,                   0},
    {"Country code",                     COUNTRY_CODE,               0},
    {"Warrantied keys",                  WARRANTIED_KEYS,            0},
    {"All keys",                         ALL_KEYS,                   0},
    {"All keys V2",                      ALL_KEYS_V2,                0},
    {"Battery SOH",                      BAT_SOH,                    0},
    {"Battery charge cycle count",       CHARGE_CYCLE_COUNT,         0},
    {"Battery in power saving mode",     CHARGE_ON_SAVING,           0},
    {"Internal battery voltage",         INT_BAT_VOLT,               0},
    {"Internal battery status",          INT_BAT_STATUS,             0},
    {"Docking status",                   DOCKED,                     0},
    {"Camera status",                    CAMERA_STATUS,              0},
    {"Barcode reader",                   BARCODE_STATUS,             0},
    {"Keyboard beep on/off",             KBD_BEEPER,                 0},
    {"Beep test",                        BEEPER_TEST,                0},
    {"RAM size",                         RAM_SZ,                     0},
    {"Flash size",                       FLASH_SZ,                   0},
    {"Executables partition size",       EXE_PARTITION_SZ,           0},
    {"Data partition size",              DATA_PARTITION_SZ,          0},
    {"Variant name",                     HW_VAR,                     0},
    {"Set MIN volume",                   VOLUME_SET_MIN,             0},
    {"Set MAX volume",                   VOLUME_SET_MAX,             0},
    {"Get volume",                       VOLUME_GET,                 0},
    {"PartNo",                           PART_NO,                    0},
    {"HW version",                       HW_VER,                     0},
    {"LOT No",                           LOT_NO,                     0},
    {"System versions",                  VERSIONS,                   0},
    {"Display on",                       DISPLAY_ON,                 0},
    {"Display off",                      DISPLAY_OFF,                0},
    {"Display contrast",                 DISPLAY_CONTRAST,           0},
    {"Display backlight",                DISPLAY_BACKLIGHT,          0},
    {"Keyboard backlight on/off",        KBD_BACKLIGHT,              0},
    {"Keyboard backlight state",         KBD_BACKLIGHT_STATE,        0},
    {"Keyboard type",                    KBD_TYPE,                   0},
    {"Get console state",                GET_CONSOLE_STATE,          0},
    {"LED status",                       LED_STATUS,                 0},
    {"SB refresh -1",                    SB_REFRESH_1,               0},
    {"SB refresh 0",                     SB_REFRESH_0,               0},
    {"SB refresh 60",                    SB_REFRESH_60,              0},
    {"Show external storage",            EXT_STORAGE,                0},
    {"Sponsor cert",                     SPONSOR,                    0},
    {"Sponsor cert sn",                  SPONSOR_SN,                 0},
    {"Feature licenses",                 ADE_FET,                    0},
    {"LEDs demo" ,                       LEDS_DEMO,                  0},
    {"LEDs brightness demo" ,            LEDS_BRIGHTNESS_DEMO,       0},
    {"Printer available",                PRINTER_AVAILABLE,          0},
    {"UX100 info",                       UX100_INFO,                 0},
    {"UX400 info",                       UX400_INFO,                 0},
    {"Set PCI reboot time",              SET_PCI_REBOOT_TIME,        0},
    {"Get PCI reboot time",              GET_PCI_REBOOT_TIME,        0},
    {"Library version",                  LIB_VERSION,                0},
    {"Get time zone list",               GET_TIME_ZONE_LIST,         0},
    {"Set time zone ISO",                SET_TIME_ZONE_ISO,          0},
    {"Set time zone name",               SET_TIME_ZONE_NAME,         0},
    {"Get active time zone",             GET_TIME_ZONE,              0},
    {"Install demo package",             INSTALL_PACKAGE,            0},
    {"Free and install demo package",    FREE_INSTALL_PACKAGE,       0},
    {"Get install status",               GET_INSTALL_STATUS,         0},
    {"Package list",                     PKG_LIST,                   0},
    {"App package list",                 APP_PKG_LIST,               0},
    {"Bundle list",                      BUNDLE_LIST,                0},
    {"App Bundle list",                  APP_BUNDLE_LIST,            0},
    {"Set USB2 host",                    SET_USB2_HOST,              0},
    {"Set USB2 device",                  SET_USB2_DEVICE,            0},
    {"Set USB2 default",                 SET_USB2_DEFAULT,           0},
    {"Get USB1 charge",                  GET_USB1_CHARGE,            0},
    {"Get USB2 charge",                  GET_USB2_CHARGE,            0},
    {"Get USB2 mode",                    GET_USB2_MODE,              0},
    {"Set USB1 host",                    SET_USB1_HOST,              0},
    {"Set USB1 device",                  SET_USB1_DEVICE,            0},
    {"Get USB1 mode",                    GET_USB1_MODE,              0},
    {"Get USB1 default",                 GET_USB1_DEFAULT,           0},
    {"Get USB2 default",                 GET_USB2_DEFAULT,           0},
    {"Get USB1 role",                    GET_USB1_ROLE,              0},
    {"Get USB2 role",                    GET_USB2_ROLE,              0},
    {"Get USB power mode",               GET_USB_POWER_MODE,         0},
    {"Set USB power mode",               SET_USB_POWER_MODE,         0},
    {"Get MDB",                          GET_MDB,                    0},
    {"Get Switch threshold voltage",     GET_SWITCH_THRESHOLD,       0},
    {"Set Switch threshold voltage",     SET_SWITCH_THRESHOLD,       0},
    {"Get Low threshold voltage",        GET_LOW_THRESHOLD,          0},
    {"Set Low threshold voltage",        SET_LOW_THRESHOLD,          0},
    {"Get MSR counters",                 MSR_COUNTERS,               0},
    {"Get SCR counters",                 SCR_COUNTERS,               0},
    {"Get CTLS counters",                CTLS_COUNTERS,              0},
    {"Get HW string",                    GET_HW_STRING,              0},
    {"Set time",                         SET_TIME_1,                 0},
    {"Get time",                         GET_TIME,                   0},
    {"Set NTP host",                     NTP_HOST,                   0},
    {"Power status",                     POWER_STATUS,               0},
    {"Tamper status",                    ATTACK_STATUS,              0},
    {"VCL encryption status",            VCL_ENCRYPTION_STATUS,      0},
    {"Display exists",                   DISPLAY_STATUS,             0},
    {"Reboot reason",                    REBOOT_REASON,              0},
    {"Uptime",                           UPTIME,                     0},
    {"Docking station information",      DOCKING_STATION_INFO,       0},
    {"Docking station address",          DOCKING_STATION_ADDRESS,    0},
    {"Docking station update",           DOCKING_STATION_UPDATE,     0},
    {"GSM firmware version",             GSM_FIRMWARE_VERSION,       0},
    {"Get tamper records",               GET_TAMPER_RECORDS,         0},
    {"Get card slot 2 mode",             GET_CARD_SLOT2_MODE,        0},
    {"Set card slot 2 SIM",              SET_CARD_SLOT2_SIM,         0},
    {"Set card slot 2 SAM",              SET_CARD_SLOT2_SAM,         0},
    {"Get sim slot count ",              GET_SIM_SLOT_COUNT,         0},
    {"Get MTD info",                     GET_MTD_INFO,               0},
    {"Get SLP tainted status",           GET_SLP_TAINTED,            0},
    {"Get HW ID",                        GET_HW_ID,                  0},
    {"Get VRK2 support",                 GET_VRK2_SUPPORT,           0},
    {"Get ECC VRK support",              GET_ECC_VRK_SUPPORT,        0},
    {"Get POGO charging state",          GET_POGO_STATE,             0},
    {"Get USB_C charging state",         GET_USB_C_STATE,            0},
    {"Set POGO charging state/config",   SET_POGO_STATE_CONFIG,      0},
    {"Set USB_C charging state/config",  SET_USB_C_STATE_CONFIG,     0},
    {"Get LCD panel ID",                 GET_LCD_PANEL_ID,           0},
    {"Get LCD panel model",              GET_LCD_PANEL_MODEL,        0},
    {"Get VRK cert installed",           GET_VRK_CERT_INSTALLED,     0},
    {"Get device tree name",             GET_DT_NAME,                0},
    {"Get POGO data lines state",        GET_POGO_DATA_STATE,        0},
    {"Set POGO data lines to USB-C",     SET_POGO_DATA_TO_USB_C,     0},
    {"Set POGO data lines to POGO",      SET_POGO_DATA_TO_POGO,      0},
    {"Get mobile radio SW version",      GET_MOBILE_RADIO_SW_VERSION,0},
    {"Get touch screen name",            GET_TOUCH_SCREEN_NAME,      0},
    {"Get touch screen HW version",      GET_TOUCH_SCREEN_HW_VERSION,0},
    {"Get touch screen SW version",      GET_TOUCH_SCREEN_SW_VERSION,0},
    {"Get touch screen config version",  GET_TOUCH_SCREEN_CONFIG_VERSION,0},
    {"Get Android Gateway address ",     GET_ANDROID_GATEWAY,        0},
    {"Get Android DNS1 address ",        GET_ANDROID_DNS1,           0},
    {"Get Android DNS2 address ",        GET_ANDROID_DNS2,           0},
    {"Get Android network prefix length",GET_ANDROID_PREFIX_LENGTH,  0},
    {"Exit",                             EXIT,                       0},
};

// vars
const int SUCCEED = 0;
const int FAIL = -1;
const int SB_GUI_REGION = 1;
const std::string appid("SYS");
const std::string statusbar_html("statusbar.html");
const std::string message_html("message.html");
static LibLogHandle lh = LOGAPI_INIT(appid.c_str());

// functions
static int get_all_keys();
static int get_bt_mac_string();
static int get_wifi_mac_string();
static int get_eth_mac_string();
static int get_eth2_mac_string();
static int get_country_string();
static int get_usb1_role();
static int get_mdb();
static int get_usb1_charge();
static int get_usb2_charge();
static int get_usb2_role();
static int get_hw_string();
static int ux100_info();
static int get_usb1_default();
static int get_usb2_default();
static int show_ctls_info();
static int show_scr_info();
static int show_msr_info();
static int get_warrantied_keys();
static int get_volume();
static int get_env();
static int set_env();
static int set_volume_min();
static int set_volume_max();
static int set_time_zone_name();
static int set_time_zone_iso();
static int time_zone_list();
static int beep_on_off();
static int get_time_zone();
static int show_sponsor();
static int show_dock_info();
static int install_pkg();
static int show_versions();
static int show_external_storage();
static int show_uptime();
static int beep_test();
static int show_dock_adress();
static int kbd_backlight();
static int kbd_backlight_state();
static int display_backlight();
static int show_bundle_list();
static int show_app_bundle_list();
static int leds_demo();
static int leds_brightness_demo();
static int show_app_pkg_list();
static int show_pkg_list();
static int free_resources_install_pkg();
static int get_install_status();
static int get_mtd_info();
static void statusbar_cb(void *data, int region_id, std::map<std::string,std::string> &values);

int main()
{
    int status = SUCCEED;

    lh = LOGAPI_INIT(appid.c_str());
    std::map<std::string,std::string> values;

#ifdef _VOS2
    vfigui::uiLayout("layout");
    status = vfisysinfo::sysStartStatusbarURLReturnVal(
            SB_GUI_REGION,
            statusbar_html,
            values,
            statusbar_cb,
            NULL,
            NULL);
    LOGF_TRACE( lh, "statusbar start status[%d]", status );
#endif

    vfigui::uiSetPropertyInt(vfigui::UI_PROP_CIRCULAR_MENU,1);

    int s=0;
    int r=0;
    bool loop = true;
    while(loop)
    {
        r = vfisysinfo::SYS_ERR_OK;
        s = vfigui::uiMenu("mainmenu","sysinfo demo",menu,sizeof(menu)/sizeof(menu[0]),s>=0?s:0);
        if (s==vfigui::UI_ERR_CONNECTION_LOST)
        {
            LOGF_ERROR( lh, "GUI is not running");
            break;
        }

        switch(s)
        {
            case MAC_ETH1:
            {
                r = get_eth_mac_string();
                break;
            }
            case MAC_ETH2:
            {
                r = get_eth2_mac_string();
                break;
            }
            case MAC_BT:
            {
                r = get_bt_mac_string();
                break;
            }
            case MAC_WIFI:
            {
                r = get_wifi_mac_string();
                break;
            }
            case COUNTRY_CODE:
            {
                r = get_country_string();
                break;
            }
            case SB_REFRESH_1:
            {
                r = vfisysinfo::sysSetRefreshTime(SB_GUI_REGION,-1);
                break;
            }
            case SB_REFRESH_0:
            {
                r = vfisysinfo::sysSetRefreshTime(SB_GUI_REGION,0);
                break;
            }
            case SB_REFRESH_60:
            {
                r = vfisysinfo::sysSetRefreshTime(SB_GUI_REGION,60000);
                break;
            }
            case SET_ENV:
            {
                r = set_env();
                break;
            }
            case GET_ENV:
            {
                r = get_env();
                break;
            }
            case EXT_STORAGE:
            {
                r = show_external_storage();
                break;
            }
            case SPONSOR:
            {
                r = show_sponsor();
                break;
            }
            case GET_TIME_ZONE_LIST:
            {
                r = time_zone_list();
                break;
            }
            case SET_TIME_ZONE_ISO:
            {
                r = set_time_zone_iso();
                break;
            }
            case SET_TIME_ZONE_NAME:
            {
                r = set_time_zone_name();
                break;
            }
            case GET_TIME_ZONE:
            {
                r = get_time_zone();
                break;
            }
            case DISPLAY_CONTRAST:
            {
                int value = 52;
                r = vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_DISP_CONTRAST, value);
                vfigui::uiConfirm("confirm",
                    vfigui::uiPrint("Display contrast set to :<br>%d",value));
                break;
            }
            case DISPLAY_BACKLIGHT:
            {
                r = display_backlight();
                break;
            }
            case KBD_BACKLIGHT_STATE:
            {
                r = kbd_backlight_state();
                break;
            }
            case KBD_BACKLIGHT:
            {
                r = kbd_backlight();
                break;
            }
            case WARRANTIED_KEYS:
            {
                r = get_warrantied_keys();
                break;
            }
            case ALL_KEYS:
            {
                r = get_all_keys();
                break;
            }
            case ALL_KEYS_V2:
            {
                std::string keys;
                int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_ALL_LOADED_KEYS_V2,keys);
                if (r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm","keys:<br>"+keys);
                }
                else if ((r==vfisysinfo::SYS_ERR_UNSUPPORTED))
                {
                    vfigui::uiConfirm("confirm","new keys not available");
                }
                break;
            }
            case LEDS_DEMO:
            {
                r = leds_demo();
                break;
            }
            case LEDS_BRIGHTNESS_DEMO:
            {
                r = leds_brightness_demo();
                break;
            }
            case DISPLAY_ON:
            {
                r = sysSetPropertyInt(vfisysinfo::SYS_PROP_DISP,1);
                break;
            }
            case DISPLAY_OFF:
            {
                r = sysSetPropertyInt(vfisysinfo::SYS_PROP_DISP,0);
                break;
            }
            case VERSIONS:
            {
                r = show_versions();
                break;
            }
            case KBD_BEEPER:
            {
                r = beep_on_off();
                break;
            }
            case BEEPER_TEST:
            {
                r = beep_test();
                break;
            }
            case INSTALL_PACKAGE:
            {
                r = install_pkg();
                break;
            }
            case VOLUME_SET_MIN:
            {
                r = set_volume_min();
                break;
            }
            case VOLUME_SET_MAX:
            {
                r = set_volume_max();
                break;
            }
            case VOLUME_GET:
            {
                r = get_volume();
                break;
            }
            case PKG_LIST:
            {
                r = show_pkg_list();
                break;
            }
            case APP_BUNDLE_LIST:
            {
                r = show_app_bundle_list();
                break;
            }
            case BUNDLE_LIST:
            {
                r = show_bundle_list();
                break;
            }
            case APP_PKG_LIST:
            {
                r = show_app_pkg_list();
                break;
            }
            case MSR_INFO:
            {
                r = show_msr_info();
                break;
            }
            case SCR_INFO:
            {
                r = show_scr_info();
                break;
            }
            case CTLS_INFO:
            {
                r = show_ctls_info();
                break;
            }
            case GET_MDB:
            {
                r = get_mdb();
                break;
            }
            case GET_USB1_ROLE:
            {
                r = get_usb1_role();
                break;
            }
            case GET_USB2_ROLE:
            {
                r = get_usb2_role();
                break;
            }
            case GET_USB1_DEFAULT:
            {
                r = get_usb1_default();
                break;
            }
            case GET_USB2_DEFAULT:
            {
                r = get_usb2_default();
                break;
            }
            case GET_USB1_CHARGE:
            {
                r = get_usb1_charge();
                break;
            }
            case GET_USB2_CHARGE:
            {
                r = get_usb2_charge();
                break;
            }
            case GET_HW_STRING:
            {
                r = get_hw_string();
                break;
            }
            case SPONSOR_SN:
            {
                std::string sponsor_sn, mode;

                r = vfisysinfo::sysGetPropertyString(
                        vfisysinfo::SYS_PROP_CERT_SPONSOR_SN,sponsor_sn);
                r = vfisysinfo::sysGetPropertyString(
                        vfisysinfo::SYS_PROP_CERT_SPONSOR_MODE,mode);
                if(vfisysinfo::SYS_ERR_OK==r)
                {
                    vfigui::uiConfirm("confirm","Sponsor sn:<br>"+sponsor_sn+"<br>Mode: "+mode);
                }
                break;
            }
            case MODEL_NAME:
            {
                std::string modelname;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_MODEL_NAME,modelname);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Modelname:<br>"+modelname);
                break;
            }
            case MANUF_DATE:
            {
                std::string date;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_MANUF_DATE,date);
                if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Manufacturing date:<br>"+date);
                break;
            }
            case REBOOT_REASON:
            {
                std::string reason;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_REBOOT_REASON,reason);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Reboot reson:<br>"+reason);
                break;
            }

            case ADK_VER:
            {
                std::string version;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_ADK_VERSION,version);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","ADK version:<br>"+version);
                break;
            }
            case OS_VER:
            {
                std::string version;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_OS_VERSION,version);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","OS version:<br>"+version);
                break;
            }
            case SN:
            {
                std::string serialno;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_SERIALNO,serialno);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Serial No:<br>"+serialno);
                break;
            }
            case PTID:
            {
                std::string ptid;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_PTID,ptid);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","PTID:<br>"+ptid);
                break;
            }
            case RTC:
            {
                std::string rtc;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_RTC,rtc);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","RTC:<br>"+rtc);
                break;
            }
            case RTCP5: // RTC +5min
            case RTCM5: // RTC -5min
            {
                char rtc[15]={0};
                time_t tt;
                struct tm t;
                time(&tt);
                tt=(s==RTCP5?(tt+300):(tt-300));
                // format: yyyymmddhhmmss
                struct tm * loc_time = localtime_r(&tt,&t);
                if ( NULL != loc_time )
                {
                    strftime(rtc,sizeof(rtc),"%Y%m%d%H%M%S",loc_time);
                }

                r=sysSetPropertyString(vfisysinfo::SYS_PROP_RTC,rtc);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm","RTC set to:<br>"+std::string(rtc));
                }
                break;
            }
            case NTP_HOST:
            {
                // Set NTP server
                r = vfisysinfo::sysSetPropertyString( vfisysinfo::SYS_PROP_NTP_SERVER, "0.in.pool.ntp.org" );
                if ( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", "NTP server is set<br>" );
                }
                break;
            }
            case INT_BAT_STATUS:
            {
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_INTERNAL_BATTERY_STATUS,&status);
                if (r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                            vfigui::uiPrint("Battery status:<br>%d (%s)",status,(status==1?"OK":"NOK")));
                }
                break;
            }
            case UX100_INFO:
            {
                ux100_info();
                break;
            }
            case UX400_INFO:
            {
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_UX400_AVAILABLE,&status);
                if (r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                            vfigui::uiPrint("UX400 status:<br>%d (%s)",status,(status==1?"attached":"absent")));
                }
                break;
            }
            case INT_BAT_VOLT:
            {
                int voltage;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_INTERNAL_BATTERY_VOLTAGE,&voltage);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Internal battery voltage:<br>%d mV",voltage));
                }
                break;
            }
            case BAT_AVAL:
            {
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_BATTERY_AVAILABLE,&status);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",vfigui::uiPrint("Battery:<br>%d (%s)",status,
                                (status==1?"available":"unavailable")));
                }
                break;
            }
            case BAT_STATUS:
            {
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_BATTERY_STATUS_OK,&status);
                if (r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Battery status:<br>%d (%s)",status,(status==1?"OK":"NOK")));
                }
                break;
            }
            case BAT_VOLT:
            {
                int voltage;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_BATTERY_VOLTAGE,&voltage);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Battery voltage:<br>%d mV",voltage));
                }
                break;
            }
            case BAT_CAPACITY:
            {
                int capacity;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_BATTERY_CAPACITY,&capacity);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Battery capacity:<br>%d mAh",capacity));
                }
                break;
            }
            case BAT_LEVEL:
            {
                int level;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_BATTERY_CHARGE_LEVEL,&level);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Battery charge level:<br>%d %%",level));
                }
                break;
            }
            case DOCKED:
            {
                int docked=0;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_DOCKING_STATUS,&docked);
                if (vfisysinfo::SYS_ERR_OK!=r)
                {
                    break;
                }
                else if ( docked )
                {
                    vfigui::uiConfirm("confirm","Terminal is docked");
                }
                else
                {
                    vfigui::uiConfirm("confirm","Terminal is undocked");
                }
                break;
            }
            case BAT_SN:
            { // battery serial No
                std::string serialno;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_BATTERY_SERIALNO,serialno);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm","Battery serial No:<br>"+serialno);
                }
                break;
            }
            case BAT_TECH:
            { // battery technology
                int value;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_BATTERY_TECHNOLOGY,&value);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Battery technology:<br>%d",value));
                }
                break;
            }
            case BAT_FCC:
            { // battery technology
                int value;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_BATTERY_FCC,&value);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Battery FCC, mAh:<br>%d",value));
                }
                break;
            }
            case BAT_SOH:
            { // battery technology
                int value;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_BATTERY_SOH,&value);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Battery SOH:<br>%d",value));
                }
                break;
            }
            case CHARGE_ON_SAVING:
            { // Unit can be charged during power saving state
                int value;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_CHARGE_ON_SAVING,&value);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Unit can be charged during power saving state:<br>%d",value));
                }
                break;
            }
            case CHARGE_CYCLE_COUNT:
            { // Unit can be charged during power saving state
                int value;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_CHARGE_CYCLE_COUNT,&value);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",
                        vfigui::uiPrint("Battery charge cycle count:<br>%d",value));
                }
                break;
            }

            case RAM_SZ:
            { // RAM size
                int size;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_HW_RAM_SIZE ,&size);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm",vfigui::uiPrint("RAM size:<br>%d KB",size));
                break;
            }
            case FLASH_SZ:
            { // Flash size
                int size;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_HW_FLASH_SIZE ,&size);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm",vfigui::uiPrint("Flash size:<br>%d KB",size));
                break;
            }
            case EXE_PARTITION_SZ:
            { // Flash size
                int size;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_HW_EXE_PARTITION_SIZE ,&size);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm",vfigui::uiPrint("Executables partition size:<br>%d KB",size));
                break;
            }
            case DATA_PARTITION_SZ:
            { // Flash size
                int size;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_HW_DATA_PARTITION_SIZE ,&size);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm",vfigui::uiPrint("Data partition size:<br>%d KB",size));
                break;
            }
            case HW_VAR:
            { // terminal unit variant
                std::string variant;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_VARIANT_NAME,variant);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Version:<br>"+variant);
                break;
            }
            case PART_NO:
            { // terminal unit part number
                std::string partNo;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_PART_NO,partNo);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Part No:<br>"+partNo);
                break;
            }
            case HW_VER:
            { // terminal unit version
                std::string lotNo;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_VERSION,lotNo);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","HW version:<br>"+lotNo);
                break;
            }
            case LOT_NO:
            { // LOT number
                std::string lotNo;
                r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_LOT_NO,lotNo);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","LOT no:<br>"+lotNo);
                break;
            }
            case LIB_VERSION:
            {
                std::string version = "Version: ";
                version += vfisysinfo::sysGetVersion();
                r=vfigui::uiConfirm("confirm", version.c_str());
                break;
            }
            case SHUTDOWN:
            {
                if(vfigui::uiConfirm("confirm","Shutdown")==vfisysinfo::SYS_ERR_OK)
                {
                    r=vfisysinfo::sysShutdown();
                }
                break;
            }
            case REBOOT:
            {
                if(vfigui::uiConfirm("confirm","Restart")==vfisysinfo::SYS_ERR_OK)
                {
                    r=vfisysinfo::sysReboot();
                }
                break;
            }
            case REBOOT_DOCK:
            {
                r=vfisysinfo::sysRebootDock();
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Restart dock");
                break;
            }
            case LED_STATUS:
            {
                int ledStatus;
                r=sysGetPropertyInt(vfisysinfo::SYS_PROP_LED, &ledStatus);
                if(r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm",vfigui::uiPrint("LED status:<br>%d",ledStatus));
                break;
            }
            case SET_PCI_REBOOT_TIME:
            {
                std::string time("12:00:00");
                r = vfisysinfo::sysSetPropertyString(vfisysinfo::SYS_PROP_PCI_REBOOT_TIME,time);
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm("confirm","PCI reboot time set to:<br>"+ time );
                }
                break;
            }
            case GET_PCI_REBOOT_TIME:
            {
                std::string time;
                r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_PCI_REBOOT_TIME, time );
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", "PCI reboot time:<br>" + time );
                }
                break;
            }
            case PRINTER_AVAILABLE:
            {
                int printerStatus;
                r = sysGetPropertyInt( vfisysinfo::SYS_PROP_PRINTER_AVAILABLE, &printerStatus );
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm",
                            vfigui::uiPrint( "Printer status:<br>%d (%s)",
                                printerStatus, ( printerStatus == 1 ? "available" : "unavailable" ) ) );
                }
                break;
            }
            case MSR_COUNTERS:
            {
                std::string msrCounters;
                if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_MSR_COUNTERS, msrCounters ) ) == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::stringmap values;
                    values[ "msg" ] = msrCounters;
                    vfigui::uiInvokeURL( values, message_html.c_str() );
                }
                break;
            }
            case SCR_COUNTERS:
            {
                std::string scrCounters;
                if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_SCR_COUNTERS, scrCounters ) ) == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::stringmap values;
                    values[ "msg" ] = scrCounters;
                    vfigui::uiInvokeURL( values, message_html.c_str() );
                }
                break;
            }
            case CTLS_COUNTERS:
            {
                std::string ctlsCounters;
                if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_CTLS_COUNTERS, ctlsCounters ) ) == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::stringmap values;
                    values[ "msg" ] = ctlsCounters;
                    vfigui::uiInvokeURL( values, message_html.c_str() );
                }
                break;
            }
            case SET_TIME_1:
            {
                r = vfisysinfo::sysSetPropertyString( vfisysinfo::SYS_PROP_TIME_ISO8601, "2017-10-05T12:00:00.000+02:00" );
                if ( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", "Time is set<br>" );
                }
                break;
            }
            case GET_USB1_MODE:
            {
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_USB1_MODE, status );
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("USB1 mode: %d",status));
                }
                break;
            }
            case SET_USB1_DEVICE:
            {
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_USB1_MODE, vfisysinfo::SYS_USB_DEVICE );
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", "USB1 mode is set<br>" );
                }
                break;
            }
            case SET_USB1_HOST:
            {
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_USB1_MODE, vfisysinfo::SYS_USB_HOST );
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", "USB1 mode is set<br>" );
                }
                break;
            }
            case GET_USB2_MODE:
            {
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_USB2_MODE, status );
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("USB2 mode: %d",status));
                }
                break;
            }
            case SET_USB2_DEFAULT:
            {
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_USB2_MODE, vfisysinfo::SYS_USB_DEFAULT );
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", "USB2 mode is set<br>" );
                }
                break;
            }
            case SET_USB2_DEVICE:
            {
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_USB2_MODE, vfisysinfo::SYS_USB_DEVICE );
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", "USB2 mode is set<br>" );
                }
                break;
            }
            case SET_USB2_HOST:
            {
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_USB2_MODE, vfisysinfo::SYS_USB_HOST );
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", "USB2 mode is set<br>" );
                }
                break;
            }
            case GET_USB_POWER_MODE:
            {
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_USB_HIGH_POWER_MODE, status);
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("USB power mode = %d", status));
                }
                break;
            }
            case SET_USB_POWER_MODE:
            {
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_USB_HIGH_POWER_MODE, status);
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", "USB high power mode set" );

                }
                break;
            }
            case GET_TIME:
            {
                std::string time;

                if( vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_TIME_ISO8601, time ) == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm( "confirm", time );
                }
                break;
            }
            case DISPLAY_STATUS:
            {
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_DISP_HW,&status);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Display status: %d",status));
                }
                break;
            }
            case ATTACK_STATUS:
            {
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_ATTACK_STATUS,&status);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Tamper status: %d",status));
                }
                break;
            }
            case VCL_ENCRYPTION_STATUS:
            {
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_VCL_ENCRYPTION_STATUS,&status);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("VCL encryption status: %d",status));
                }
                break;
            }
            case POWER_STATUS:
            {
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_POWER_STATUS,&status);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Device is line powered: %d",status));
                }
                break;
            }
            case BATTERY_DEVICE:
            {
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_BATTERY_DEVICE,&status);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Battery device: %d",status));
                }
                break;
            }
            case DOCKING_STATION_INFO:
            {
                r = show_dock_info();
                break;
            }
            case DOCKING_STATION_ADDRESS:
            {
                r = show_dock_adress();
                break;
            }
            case DOCKING_STATION_UPDATE:
            {
                r = vfisysinfo::sysSetPropertyString( vfisysinfo::SYS_PROP_DOCK_STATION_INSTALL, "" );
                vfigui::uiConfirm( "confirm", r == SUCCEED ? "Success" : r == 1 ? "Success, reboot needed" : vfisysinfo::sysErrorMsg((vfisysinfo::sysError) r ));
                break;
            }
            case GSM_FIRMWARE_VERSION:
            {
                std::string tmpStr;
                r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_GSM_FIRMWARE_VERSION, tmpStr );
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("GSM firmware version: %s", tmpStr.c_str()));
                }
                break;
            }
            case UPTIME:
            {
                r = show_uptime();
                break;
            }
            case CAMERA_STATUS:
            {
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_CAMERA,&status);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Camera: %d",status));
                }
                break;
            }
            case BARCODE_STATUS:
            {
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_BARCODE_SCANNER,&status);
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Battery device: %d",status));
                }
                break;
            }
            case ADE_FET:
            {
                std::string adeFet;
                if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_FET, adeFet ) ) == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiInvokeURL( values, adeFet.c_str() );
                }
                break;
            }
            case BAT_TYPE:
            {
                int batteryType = 0 ;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_BATTERY_TYPE, &batteryType);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Battery type = %d (%s)", batteryType, (batteryType == 1 ? "Smart battery" : "Simple Battery")));
                }
                break;
            }
            case BAT_CALIBRATION:
            {
                int battCalibration = 0 ;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_BATTERY_CALIBRATION, &battCalibration);
                if( r == vfisysinfo::SYS_ERR_OK )
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Calibration status: %d (%s)",battCalibration, ( battCalibration == 1 ? "Calibration Good" : "Calibration Bad" )));
                }
                break;
            }
            case GET_SWITCH_THRESHOLD:
            {
                int value = 0;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_SWITCH_THRESHOLD_VOLTAGE, &value );
                vfigui::uiConfirm("confirm", vfigui::uiPrint("Switch threshold voltage : %d Status : %d", value, r ) );
                break;
            }
            case SET_SWITCH_THRESHOLD:
            {
                int value = 3900000;
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_SWITCH_THRESHOLD_VOLTAGE, value );
                vfigui::uiConfirm("confirm", vfigui::uiPrint("Set switch threshold voltage status : %d", r ) );
                break;
            }
            case GET_LOW_THRESHOLD:
            {
                int value = 0;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_LOW_THRESHOLD_VOLTAGE, &value );
                vfigui::uiConfirm("confirm", vfigui::uiPrint("Low threshold voltage : %d Status : %d", value, r ) );
                break;
            }
            case SET_LOW_THRESHOLD:
            {
                int value = 3600000;
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_LOW_THRESHOLD_VOLTAGE, value );
                vfigui::uiConfirm("confirm", vfigui::uiPrint("Set low threshold voltage status : %d", r ) );
                break;
            }
            case FREE_INSTALL_PACKAGE:
                r = free_resources_install_pkg();
                break;
            case GET_INSTALL_STATUS:
                r = get_install_status();
                break;
            case GET_CONSOLE_STATE:
            {
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_CONSOLE_STATE,&status);
                vfigui::uiConfirm("confirm", vfigui::uiPrint("Console state : %d Status : %d", status, r ) );
                break;
            }
            case GET_TAMPER_RECORDS:
            {
                std::string tamperRecords;
                r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_TAMPER_RECORDS, tamperRecords );
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Tamper logs: %s",tamperRecords.c_str()));
                }
                break;
            }
            case GET_CARD_SLOT2_MODE:
            {
                int mode;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_CARD_SLOT2_MODE, &mode );
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Card slot2 mode: %d",mode));
                }
                if(r==vfisysinfo::SYS_ERR_REBOOT_NEEDED)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Card slot2 mode: %d, reboot needed to take effect",mode));
                }
                break;
            }
            case SET_CARD_SLOT2_SIM:
            {
                int mode = 0;
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_CARD_SLOT2_MODE, mode );
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Card slot2 mode: %d",mode));
                }
                if(r==vfisysinfo::SYS_ERR_REBOOT_NEEDED)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Card slot2 mode: %d, reboot needed to take effect",mode));
                }
                break;
            }
            case SET_CARD_SLOT2_SAM:
            {
                int mode = 1;
                r = vfisysinfo::sysSetPropertyInt( vfisysinfo::SYS_PROP_CARD_SLOT2_MODE, mode );
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Card slot2 mode: %d",mode));
                }
                if(r==vfisysinfo::SYS_ERR_REBOOT_NEEDED)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Card slot2 mode: %d, reboot needed to take effect",mode));
                }
                break;
            }
            case GET_SIM_SLOT_COUNT:
            {
                int count;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_CARD_SLOT_COUNT, &count );
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("SIM card slot count: %d",count));
                }
                break;
            }
            case KBD_TYPE:
            {
                int type;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_KEYBOARD_TYPE, &type);
                if (r== vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",vfigui::uiPrint("Keyboard type = %d",type));
                }
                break;
            }
            case GET_MTD_INFO:
            {
                r = get_mtd_info();
                break;
            }
            case GET_SLP_TAINTED:
            {
                int slp_status;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_SLP_TAINTED_STATUS, &slp_status);
                if (r== vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",vfigui::uiPrint("SLP tainted status = %d",slp_status));
                }
                break;
            }
            case GET_HW_ID:
            {
                std::string hwid;
                r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_HW_ID, hwid );
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("HW ID: %s",hwid.c_str()));
                }
                break;
            }
            case GET_VRK2_SUPPORT:
            {
                int vrk2Support;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_VRK2_SUPPORT, &vrk2Support );
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",vfigui::uiPrint("VRK2 support  %d (%s)",vrk2Support,
                                (vrk2Support==1?"available":"unavailable")));
                }
                break;
            }
            case GET_POGO_STATE:
            {
                int state;
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_POGO_CHARGING_STATE, &state);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("POGO charging state  %d (%s)", state,
                                                                 (state == 1 ? "enabled" : "disabled")));
                }
                else
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("POGO charging state unavailable"));
                }
                break;
            }
            case GET_USB_C_STATE:
            {
                int state;
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_USB_C_CHARGING_STATE, &state);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("USB_C charging state  %d (%s)", state,
                                                                 (state == 1 ? "enabled" : "disabled")));
                }
                else
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("USB_C charging state unavailable"));
                }
                break;
            }
            case SET_POGO_STATE_CONFIG:
            {
                int state;
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_POGO_CHARGING_STATE, &state);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    state = state == 0 ? 1 : 0;
                    r = vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_POGO_CHARGING_STATE, state);
                    if (r == vfisysinfo::SYS_ERR_OK)
                    {
                        vfigui::uiConfirm("confirm",
                                        vfigui::uiPrint("POGO charging state/config changed from %d (%s) to %d (%s)",
                                                        !state, (state == 1 ? "disabled" : "enabled"),
                                                        state, (state == 1 ? "enabled" : "disabled")));
                    }
                }
                break;
            }
            case SET_USB_C_STATE_CONFIG:
            {
                int state;
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_USB_C_CHARGING_STATE, &state);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    state = state == 0 ? 1 : 0;
                    r = vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_USB_C_CHARGING_STATE, state);
                    if (r == vfisysinfo::SYS_ERR_OK)
                    {
                        vfigui::uiConfirm("confirm",
                                        vfigui::uiPrint("USB_C charging state/config changed from %d (%s) to %d (%s)",
                                                        !state, (state == 1 ? "disabled" : "enabled"),
                                                        state, (state == 1 ? "enabled" : "disabled")));
                    }
                }
                break;
            }
            case GET_ECC_VRK_SUPPORT:
            {
                int eccVrkSupport;
                r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_ECC_VRK_SUPPORT, &eccVrkSupport );
                if(r==vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm",vfigui::uiPrint("VRK2 support  %d (%s)",eccVrkSupport,
                                (eccVrkSupport==1?"available":"unavailable")));
                }
                break;
            }
            case GET_LCD_PANEL_ID:
            {
                int lcd_panel_id;
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_LCD_PANEL_ID, lcd_panel_id);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("LCD panel ID: %d", lcd_panel_id));
                }
                break;
            }
            case GET_LCD_PANEL_MODEL:
            {
                std::string lcd_panel_model;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_LCD_PANEL_MODEL, lcd_panel_model);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("LCD panel model: %s", lcd_panel_model.c_str()));
                }
                break;
            }
            case GET_VRK_CERT_INSTALLED:
            {
                int is_installed;
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_VRK_CERT_INSTALLED, is_installed);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("VRK certificate is installed/available: %d", is_installed));
                }
                break;
            }
            case GET_DT_NAME:
            {
                std::string dt_name;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_DT_NAME, dt_name);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Device tree name: %s", dt_name.c_str()));
                }
                break;
            }
            case GET_POGO_DATA_STATE:
            {
                int state;
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_POGO_DATA_STATE, &state);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("POGO data lines state  %d (%s)", state,
                                                                (state == 0 ? "USB-C" : "POGO")));
                }
                break;
            }
            case SET_POGO_DATA_TO_POGO:
            {
                r = vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_POGO_DATA_STATE, 1);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("POGO data lines switched to POGO (%d)", 1));
                }
                break;
            }
            case SET_POGO_DATA_TO_USB_C:
            {
                r = vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_POGO_DATA_STATE, 0);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("POGO data lines switched to USB-C (%d)", 0));
                }
                break;
            }
            case GET_MOBILE_RADIO_SW_VERSION:
            {
                std::string radio_version;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_MOBILE_RADIO_SW_VERSION, radio_version);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Mobile radio sw version: %s", radio_version.c_str()));
                }
                break;
            }
            case GET_TOUCH_SCREEN_NAME:
            {
                std::string name;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_TOUCH_NAME, name);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Touch screen name: %s", name.c_str()));
                }
                break;
            }
            case GET_TOUCH_SCREEN_HW_VERSION:
            {
                std::string version;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_TOUCH_HW_VERSION, version);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Touch screen HW version: %s", version.c_str()));
                }
                break;
            }
            case GET_TOUCH_SCREEN_SW_VERSION:
            {
                std::string version;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_TOUCH_SW_VERSION, version);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Touch screen SW version: %s", version.c_str()));
                }
                break;
            }
            case GET_TOUCH_SCREEN_CONFIG_VERSION:
            {
                std::string version;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_TOUCH_CONFIG_VERSION, version);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Touch screen config version: %s", version.c_str()));
                }
                break;
            }
            case GET_ANDROID_GATEWAY:
            {
                std::string gateway;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_ANDROID_GATEWAY, gateway);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Gateway address: %s", gateway.c_str()));
                }
                break;
            }
            case GET_ANDROID_DNS1:
            {
                std::string dns;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_ANDROID_DNS1, dns);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("DNS1 address: %s", dns.c_str()));
                }
                break;
            }
            case GET_ANDROID_DNS2:
            {
                std::string dns;
                r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_ANDROID_DNS2, dns);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("DNS2 address: %s", dns.c_str()));
                }
                break;
            }
            case GET_ANDROID_PREFIX_LENGTH:
            {
                int length;
                r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_ANDROID_PREFIX_LENGTH, &length);
                if (r == vfisysinfo::SYS_ERR_OK)
                {
                    vfigui::uiConfirm("confirm", vfigui::uiPrint("Network prefix length: %d", length));
                }
                break;
            }
            case EXIT:
            {
                loop=false;
                break;
            }
            default:
            {
                break;
            }
        }

        if (r!=vfisysinfo::SYS_ERR_OK)
        {
            vfigui::uiConfirm("confirm","Error:<br>"+vfisysinfo::sysErrorMsg((enum vfisysinfo::sysError) r));
        }
    }

    LOGAPI_DEINIT(lh);

    return 0;
}

static int display_backlight()
{
    int r = 0;
    // this is just to configure another default timeout for UI dialogs
    int timeout = 0;
    int backlight = 0;
    vfigui::uiGetPropertyInt(vfigui::UI_PROP_TIMEOUT,&timeout);
    // set timeout to 0 to force dialog to return directly
    vfigui::uiSetPropertyInt(vfigui::UI_PROP_TIMEOUT,1000); // ms

    for (int i = 0; i < 100; i++)
    {
        r = vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_DISP_BACKLIGHT, i);
        LOGF_INFO( lh, "set disp backligth value[%d] status[%d]", i, r );
        r = sysGetPropertyInt(vfisysinfo::SYS_PROP_DISP_BACKLIGHT, &backlight);
        LOGF_INFO( lh, "get disp backligth value[%d] status[%d]", r, backlight );
        int res = vfigui::uiConfirm("confirm",
            vfigui::uiPrint("Display backlight: %d / %d<br>Status: %d Press X to abort.",
                i,
                backlight,
                r));
        if (vfigui::UI_ERR_ABORT==res)
        {
            break;
        }
    }

    vfigui::uiSetPropertyInt(vfigui::UI_PROP_TIMEOUT,timeout);
    vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_DISP_BACKLIGHT, 100);
    vfigui::uiConfirm("confirm",vfigui::uiPrint("Display backlight: 100"));

    return r;
}

static int kbd_backlight()
{
    int r=0;
    static int keyb_backlight_on = 1;
    int kb_on=(int)!keyb_backlight_on;
    r=vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_KEYB_BACKLIGHT,kb_on);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm",vfigui::uiPrint("Keyboard backlight:<br>%s",kb_on==1?"enabled":"disabled"));
        keyb_backlight_on=kb_on; // overtake state on success
    }
    return r;
}

static int kbd_backlight_state()
{
    int r=0;
    int kb_on=0;
    r=vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_KEYB_BACKLIGHT,kb_on);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm",vfigui::uiPrint("Keyboard backlight:<br>%s",kb_on==1?"enabled":"disabled"));
    }
    return r;
}

static int beep_test()
{
    int status = SUCCEED;
    // beep test
    // this is just to configure another default timeout for UI dialogs
    int timeout;
    vfigui::uiGetPropertyInt(vfigui::UI_PROP_TIMEOUT,&timeout);
    // set timeout to 0 to force dialog to return directly
    vfigui::uiSetPropertyInt(vfigui::UI_PROP_TIMEOUT,500); // ms

    for(int i=3;i>0;i--)
    {
        vfigui::uiInvoke("Start beep test<br>in "+
                vfigui::uiPrint("%d",i)+
                " seconds.<input type='timeout' value='1' style='visibility:hidden' action='return 0'>");
    }

    struct timeval start, end, diff;

    const int duration = 500;
    const int volume = 50;
    const int max_note = 95;

    // start beep test
    gettimeofday( &start, NULL );
    vfisysinfo::sysBeepNormal(volume); // volume 50%
    gettimeofday( &end, NULL );
    vfigui::uiConfirm("confirm","sysBeepNormal()");
    timersub( &end, &start, &diff );
    LOGF_TRACE( lh, "Time [%ld s %.6ld]", diff.tv_sec, diff.tv_usec );

    gettimeofday( &start, NULL );
    vfisysinfo::sysBeepError(volume);  // volume 50%
    gettimeofday( &end, NULL );
    vfigui::uiConfirm("confirm","sysBeepError()");
    timersub( &end, &start, &diff );
    LOGF_TRACE( lh, "Time [%ld s %.6ld]", diff.tv_sec, diff.tv_usec );

    gettimeofday( &start, NULL );
    vfisysinfo::sysPlaySoundFreq(666, duration, volume);  // volume 50%
    gettimeofday( &end, NULL );
    vfigui::uiConfirm("confirm","sysPlaySoundFreq()");
    timersub( &end, &start, &diff );
    LOGF_TRACE( lh, "Time [%ld s %.6ld]", diff.tv_sec, diff.tv_usec );


    for(int note=0;note<=max_note;note++)
    {
        status = vfisysinfo::sysPlaySound(note,duration,volume);
        LOGF_TRACE( lh, "sysPlaySound[%d]", status );
        if(vfigui::uiConfirm
            ("confirm",
            vfigui::uiPrint("sysPlaySound()<br>Note: %d<br><br>Press X to abort.",note))
            ==vfigui::UI_ERR_ABORT) break;
    }

    vfigui::uiInvoke(
        "Beep test finished.<input type='timeout' value='1'\
        style='visibility:hidden' action='return 0'>");
    // restore timeout
    vfigui::uiSetPropertyInt(vfigui::UI_PROP_TIMEOUT,timeout);

    return status;
}

static int leds_demo()
{
    int mask = 0;

    std::string tmpStr;

    tmpStr += vfigui::uiPrint( "Smartcard reader LEDs SWITCH_ON: %d<br>", vfisysinfo::scrLedChangeState( vfisysinfo::SWITCH_ON ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    tmpStr += vfigui::uiPrint( "Logo LED SWITCH_ON: %d<br>", vfisysinfo::logoLedChangeState( vfisysinfo::SWITCH_ON ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    tmpStr += vfigui::uiPrint( "Logo LED SWITCH_OFF: %d<br>", vfisysinfo::logoLedChangeState( vfisysinfo::SWITCH_OFF ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    tmpStr += vfigui::uiPrint( "Logo LED SWITCH_ON: %d<br>", vfisysinfo::logoLedChangeState( vfisysinfo::SWITCH_ON ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    tmpStr += vfigui::uiPrint( "Magstripe runway LEDs demo: %d<br>", vfisysinfo::msrShowRunway( 0 ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    tmpStr += vfigui::uiPrint( "Contactless LEDs CTLS_LED_ALL: %d<br>", vfisysinfo::ctlsLedsChangeState( vfisysinfo::CTLS_LED_ALL ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    mask = vfisysinfo::CTLS_LED_0;

    tmpStr += vfigui::uiPrint( "Contactless LEDs mask[%d]: %d<br>", mask, vfisysinfo::ctlsLedsChangeState( mask ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    mask = vfisysinfo::CTLS_LED_0 |
           vfisysinfo::CTLS_LED_1 |
           vfisysinfo::CTLS_LED_LOGO;

    tmpStr += vfigui::uiPrint( "Contactless LEDs mask[%d]: %d<br>", mask, vfisysinfo::ctlsLedsChangeState( mask ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    mask = vfisysinfo::CTLS_LED_0 |
           vfisysinfo::CTLS_LED_1 |
           vfisysinfo::CTLS_LED_2;

    tmpStr += vfigui::uiPrint( "Contactless LEDs mask[%d]: %d<br>", mask, vfisysinfo::ctlsLedsChangeState( mask ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    mask = vfisysinfo::CTLS_LED_0 |
           vfisysinfo::CTLS_LED_1 |
           vfisysinfo::CTLS_LED_2 |
           vfisysinfo::CTLS_LED_3 |
           vfisysinfo::CTLS_LED_LOGO;

    tmpStr += vfigui::uiPrint( "Contactless LEDs mask[%d]: %d<br>", mask, vfisysinfo::ctlsLedsChangeState( mask ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    tmpStr += vfigui::uiPrint( "Contactless LEDs CTLS_LED_NONE: %d<br>", vfisysinfo::ctlsLedsChangeState( vfisysinfo::CTLS_LED_NONE ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    tmpStr += vfigui::uiPrint( "Magstripe LEDs MSR_LED_ALL: %d<br>", vfisysinfo::msrLedsChangeState( vfisysinfo::MSR_LED_ALL ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    mask = vfisysinfo::MSR_LED_0;

    tmpStr += vfigui::uiPrint( "Magstripe LEDs mask[%d]: %d<br>", mask, vfisysinfo::msrLedsChangeState( mask ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    mask = vfisysinfo::MSR_LED_0 | vfisysinfo::MSR_LED_1;

    tmpStr += vfigui::uiPrint( "Magstripe LEDs mask[%d]: %d<br>", mask, vfisysinfo::msrLedsChangeState( mask ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    mask = vfisysinfo::MSR_LED_0 |
           vfisysinfo::MSR_LED_1 |
           vfisysinfo::MSR_LED_2;

    tmpStr += vfigui::uiPrint( "Magstripe LEDs mask[%d]: %d<br>", mask, vfisysinfo::msrLedsChangeState( mask ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    tmpStr += vfigui::uiPrint( "Magstripe LEDs MSR_LED_NONE: %d<br>", vfisysinfo::msrLedsChangeState( vfisysinfo::MSR_LED_NONE ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );

    tmpStr += vfigui::uiPrint( "Magstripe runway LEDs demo: %d<br>", vfisysinfo::msrShowRunway( 2 ) );
    vfigui::uiDisplayAsync( tmpStr );
    sleep( 1 );


    vfisysinfo::scrLedChangeState( vfisysinfo::SWITCH_OFF );

    tmpStr += vfigui::uiPrint( "Smartcard reader LEDs SWITCH_OFF: %d<br>", vfisysinfo::scrLedChangeState( vfisysinfo::SWITCH_OFF ) );
    //vfigui::uiDisplay( tmpStr );
    //sleep( 1 );
    vfigui::uiConfirm( "confirm", tmpStr );
    return 0;
}

void statusbar_cb(void *data, int region_id, std::map<std::string,std::string> &values)
{
    UNUSED(data);
    UNUSED(region_id);
    UNUSED(values);
    LOGF_TRACE( lh, "Refreshing statusbar" );
}

void test_brightness( int ledMap )
{
    for( int i = vfisysinfo::MIN_BRIGHTNESS; i <= vfisysinfo::MAX_BRIGHTNESS; i++ )
    {
        vfisysinfo::setBrightness( ledMap, i );
    }
    for( int i = vfisysinfo::MAX_BRIGHTNESS; i >= vfisysinfo::MIN_BRIGHTNESS; i-- )
    {
        vfisysinfo::setBrightness( ledMap, i );
    }
    for( int i = vfisysinfo::MIN_BRIGHTNESS; i <= vfisysinfo::MAX_BRIGHTNESS; i++ )
    {
        vfisysinfo::setBrightness( ledMap, i );
    }
    for( int i = vfisysinfo::MAX_BRIGHTNESS; i >= vfisysinfo::MIN_BRIGHTNESS; i-- )
    {
        vfisysinfo::setBrightness( ledMap, i );
    }
}

static int leds_brightness_demo()
{
    int r = 0;
    if( vfisysinfo::isBrightnessAdjustable( vfisysinfo::MSR_LED_0 ) )
    {
        vfigui::uiDisplayAsync( "Magstripe LEDs brightness test.<br>" );
        test_brightness( vfisysinfo::MSR_LED_0 | vfisysinfo::MSR_LED_1 | vfisysinfo::MSR_LED_2 );
    }
    else
    {
        vfigui::uiConfirm( "confirm", "Magstripe LEDs are not brightness adjustable.<br>" );
    }

    if( vfisysinfo::isBrightnessAdjustable( vfisysinfo::CTLS_LED_0 ) )
    {
        vfigui::uiDisplayAsync( "Contactless LEDs brightness test.<br>" );
        test_brightness( vfisysinfo::CTLS_LED_0 | vfisysinfo::CTLS_LED_1 | vfisysinfo::CTLS_LED_2 | vfisysinfo::CTLS_LED_3 );
    }
    else
    {
        vfigui::uiConfirm( "confirm", "Contactless LEDs are not brightness adjustable.<br>" );
    }

    if( vfisysinfo::isBrightnessAdjustable( vfisysinfo::CTLS_LED_LOGO ) )
    {
        vfigui::uiDisplayAsync( "Contactless Logo LED brightness test.<br>" );
        test_brightness( vfisysinfo::CTLS_LED_LOGO );
    }
    else
    {
        vfigui::uiConfirm( "confirm", "Contactless Logo LED is not brightness adjustable.<br>" );
    }
    return r;
}

static int show_versions()
{
    int r = 0;
    std::string versions;
    std::string tmpStr;

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_BOOT_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "Boot: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_SBI_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "SBI: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_VAULT_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "Vault: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_CIB_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "CIB: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_MIB_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "MIB: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_KERNEL_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "Linux Kernel: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_RFS_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "Overall RFS: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_RELEASE_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "Build Release: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_RFS_SECURITY_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "Application Manager: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_SRED_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "SRED: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_SRED_MODE, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "SRED MODE: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_OPENPROTOCOL_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "OpenProtocol: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_SECAPP_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "Secapp: " + tmpStr + "<br>";

    r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_VSS_VERSION, tmpStr );
    if( r == vfisysinfo::SYS_ERR_OK ) versions += "VSS: " + tmpStr + "<br>";


    vfigui::uiInvoke( versions.empty() ? "Error:<br>" + vfisysinfo::sysErrorMsg((vfisysinfo::sysError) r ) : versions +
            "<button accesskey='&#13;'  style='visibility:hidden' action='return 0'></button>" +
            "<button accesskey='&#27;' style='visibility:hidden' action='return 0'></button>" +
            "<button accesskey='2'  style='visibility:hidden' action='call document.up()'></button>" +
            "<button accesskey='8' style='visibility:hidden' action='call document.down()'></button>" );
    return r;
}

static int show_dock_info()
{
    int r = 0;
    std::string tmpStr;
    std::string info;
    if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_DOCK_STATION_SN, info ) ) == vfisysinfo::SYS_ERR_OK )
    {
        tmpStr += vfigui::uiPrint( "Serial number: %s<br>", info.c_str() );
    }

    if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_DOCK_STATION_PN, info ) ) == vfisysinfo::SYS_ERR_OK )
    {
        tmpStr += vfigui::uiPrint( "Product number: %s<br>", info.c_str() );
    }

    if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_DOCK_STATION_MODEL, info ) ) == vfisysinfo::SYS_ERR_OK )
    {
        tmpStr += vfigui::uiPrint( "Model: %s<br>", info.c_str() );
    }

    if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_DOCK_STATION_OS_VERSION, info ) ) == vfisysinfo::SYS_ERR_OK )
    {
        tmpStr += vfigui::uiPrint( "OS version: %s<br>", info.c_str() );
    }

    if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_DOCK_STATION_HW_REV, info ) ) == vfisysinfo::SYS_ERR_OK )
    {
        tmpStr += vfigui::uiPrint( "Hardware revision: %s<br>", info.c_str() );
    }
    vfigui::uiConfirm( "confirm", tmpStr );
    return r;
}

static int show_dock_adress()
{
    int r = 0;
    std::string tmpStr;
    std::string info;

    if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_DOCK_STATION_MAC, info ) ) == vfisysinfo::SYS_ERR_OK )
    {
        tmpStr += vfigui::uiPrint( "MAC address: %s<br>", info.c_str() );
    }

    if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_DOCK_STATION_IP_ADDRESS, info ) ) == vfisysinfo::SYS_ERR_OK )
    {
        tmpStr += vfigui::uiPrint( "IP address: %s<br>", info.c_str() );
    }
    vfigui::uiConfirm( "confirm", tmpStr );
    return r;
}

static int show_uptime()
{
    int uptime = 0;
    int r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_UPTIME,&uptime);
    if( r == vfisysinfo::SYS_ERR_OK )
    {
        int ss = uptime % 60;
        uptime /= 60;
        int mm = uptime % 60;
        uptime /= 60;
        int hh = uptime;
        vfigui::uiConfirm( "confirm", vfigui::uiPrint("Uptime: %d:%02d:%02d", hh, mm, ss) );
    }
    return r;
}

static int set_time_zone_iso()
{
    int r = vfisysinfo::sysSetPropertyString( vfisysinfo::SYS_PROP_TIME_ISO8601, "2017-07-26T07:39:31.000+00:00" );
    if ( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm( "confirm", "Time zone is set<br>" );
    }
    return r;
}

static int set_time_zone_name()
{
    int r = vfisysinfo::sysSetPropertyString( vfisysinfo::SYS_PROP_TIME_ZONE_NAME, "Canada/Atlantic" );
    if ( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm( "confirm", "Time zone is set<br>" );
    }
    return r;
}

static int show_sponsor()
{
    std::string sponsor;
    int r = vfisysinfo::sysGetPropertyString(
            vfisysinfo::SYS_PROP_TERMINAL_SPONSOR,
            sponsor);
    if(vfisysinfo::SYS_ERR_OK==r)
    {
        vfigui::uiConfirm("confirm","Sponsor:<br>"+sponsor);
    }
    return r;
}

static int beep_on_off()
{ // beep on/off:
    int r = 0;
    static int keyb_beep_on = 1;
    int kb_on=(int)!keyb_beep_on;
    r=vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_KEYBOARD_BEEP,kb_on);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm",
                vfigui::uiPrint("Keyboard beep:<br>%s",kb_on==1?"enabled":"disabled"));
        keyb_beep_on=kb_on; // overtake state on success
    }
    return r;
}

static int time_zone_list()
{
    int r = 0;
    std::string zList;
    if( ( r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_TIME_ZONE_LIST, zList ) ) == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::stringmap values;
        values[ "msg" ] = zList;
        vfigui::uiInvokeURL( values, message_html.c_str() );
    }
    return r;
}

static int get_time_zone()
{
    std::string timeZone;
    int r = vfisysinfo::sysGetPropertyString( vfisysinfo::SYS_PROP_TIME_ZONE, timeZone );
    if ( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm( "confirm", timeZone );
    }
    return r;
}

static int install_pkg()
{
    std::string package( "dl.dummy.tgz" );
    int r = vfisysinfo::sysSetPropertyString( vfisysinfo::SYS_PROP_FILE_NAME_TO_INSTALL, package );
    if ( r == vfisysinfo::SYS_ERR_OK )
    {
        vfisysinfo::sysErrorMsg((vfisysinfo::sysError) r );
    }
    return r;
}

static int free_resources_install_pkg()
{
#ifdef _VOS3
    vfigui::uiConfirm("confirm", vfigui::uiPrint("Unsupported property"));
    return vfisysinfo::SYS_ERR_OK;
#else
    char wd[256] = { 0 };
    char pathname[256] = { 0 };
    getcwd( wd, sizeof(wd) );
    snprintf( pathname, sizeof(pathname), "%s/dummy.tgz", wd );
    int r = vfisysinstall::sysFreeResourcesInstall( pathname );

    if ( r == vfisysinfo::SYS_ERR_OK )
    {
        vfisysinfo::sysErrorMsg((vfisysinfo::sysError) r );
    }
    return r;
#endif
}

static int get_install_status()
{
#ifdef _VOS3
    vfigui::uiConfirm("confirm", vfigui::uiPrint("Unsupported property"));
    return vfisysinfo::SYS_ERR_OK;
#else
    vfiipc::JSObject value;
    int r = vfisysinstall::sysGetInstallStatus( value );

    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("Install status: %s",value.getString().c_str()));
    }
    return r;
#endif
}

static int set_volume_min()
{
    int status = 10;
    int r=vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_VOLUME,status);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("Volume is set to: %d",status));
    }
    return r;
}

static int set_volume_max()
{
    int status = 100;
    int r=vfisysinfo::sysSetPropertyInt(vfisysinfo::SYS_PROP_VOLUME,status);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("Volume is set to: %d",status));
    }
    return r;
}

static int get_volume()
{
    int status = 0;
    int r = vfisysinfo::sysGetPropertyInt(vfisysinfo::SYS_PROP_VOLUME,&status);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("Volume: %d",status));
    }
    return r;
}

static int show_external_storage()
{
    std::string value;
    int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_EXT_STORAGE,value);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("External storage: %s",value.c_str()));
    }
    return r;
}

static int show_pkg_list()
{
    std::string value;
    int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_INSTALLED_PCKG_LIST,value);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("PKG list: %s",value.c_str()));
    }
    return r;
}

static int show_app_pkg_list()
{
    std::string value;
    int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_APP_PKG_LIST,value);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("PKG list: %s",value.c_str()));
    }
    return r;
}

static int show_app_bundle_list()
{
    std::string value;
    int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_APP_BUNDLE_LIST,value);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("Bundles: %s",value.c_str()));
    }
    return r;
}

static int show_bundle_list()
{
    std::string value;
    int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_BUNDLE_LIST,value);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("Bundles: %s",value.c_str()));
    }
    return r;
}

static int show_msr_info()
{
    std::string value;
    int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_MSR_INFO,value);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("Reader info: %s",value.c_str()));
    }
    return r;
}

static int show_scr_info()
{
    std::string value;
    int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_SCR_INFO,value);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("Reader info: %s",value.c_str()));
    }
    return r;
}

static int show_ctls_info()
{
    std::string value;
    int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_CTLS_INFO,value);
    if(r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("Reader info: %s",value.c_str()));
    }
    return r;
}

static int get_usb1_default()
{
    int status = 0;
    int r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_USB1_DEFAULT, status );
    if( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("USB1 default: %d",status));
    }
    return r;
}

static int get_usb2_default()
{
    int status = 0;
    int r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_USB2_DEFAULT, status );
    if( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("USB2 default: %d",status));
    }
    return r;
}

static int get_usb1_role()
{
    int status = 0;
    int r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_USB1_CONFIGURABLE, status );
    if( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("USB1 configurable: %d",status));
    }
    return r;
}

static int get_usb2_role()
{
    int status = 0;
    int r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_USB2_CONFIGURABLE, status );
    if( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("USB2 configurable: %d",status));
    }
    return r;
}

static int get_usb1_charge()
{
    int status = 0;
    int r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_USB1_CHARGE, status );
    if( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("USB1 configurable: %d",status));
    }
    return r;
}

static int get_usb2_charge()
{
    int status = 0;
    int r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_USB2_CHARGE, status );
    if( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("USB2 configurable: %d",status));
    }
    return r;
}

static int get_mdb()
{
    int status = 0;
    int r = vfisysinfo::sysGetPropertyInt( vfisysinfo::SYS_PROP_UX_MDB, status );
    if( r == vfisysinfo::SYS_ERR_OK )
    {
        vfigui::uiConfirm("confirm", vfigui::uiPrint("MDB: %d",status));
    }
    return r;
}

static int get_hw_string()
{
    std::string hw;
    int r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_STRING,hw);
    if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","HW string:<br>"+hw);
    return r;
}

static int set_env()
{
    const std::string section = "perm";
    const std::string label = "test_label";
    const std::string value = "test_value";
    int r = vfisysinfo::sysPutEnv( section, label, value );
    if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Env is set to "+value);
    return r;
}

static int get_env()
{
    const std::string section = "perm";
    const std::string label = "test_label";
    std::string value;
    int r = vfisysinfo::sysGetEnv( section, label, value );
    if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Env value:<br>"+value);
    return r;
}

static int get_bt_mac_string()
{
    std::string mac;
    int r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_BT_MAC,mac);
    if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","BT MAC:<br>"+mac);
    return r;
}

static int get_wifi_mac_string()
{
    std::string mac;
    int r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_WIFI_MAC,mac);
    if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","WIFI MAC:<br>"+mac);
    return r;
}

static int get_eth_mac_string()
{
    std::string mac;
    int r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_ETH_MAC,mac);
    if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","ETH MAC:<br>"+mac);
    return r;
}

static int get_eth2_mac_string()
{
    std::string mac;
    int r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_ETH2_MAC,mac);
    if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","ETH2 MAC:<br>"+mac);
    return r;
}

static int get_country_string()
{
    std::string value;
    int r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_COUNTRY,value);
    if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","Country:<br>"+value);
    return r;
}

static int get_warrantied_keys()
{
    std::string keys;
    int r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_WARRANTIED_KEYS,keys);
    if (r==vfisysinfo::SYS_ERR_OK) vfigui::uiConfirm("confirm","keys:<br>"+keys);
    return r;
}

static int get_all_keys()
{
    std::string keys;
    int r = vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_ALL_LOADED_KEYS,keys);
    if (r==vfisysinfo::SYS_ERR_OK)
    {
        vfigui::uiConfirm("confirm","keys:<br>"+keys);
    }
    return r;
}

static int ux100_info()
{
    std::string sn;
    std::string pn;
    std::string fw;
    std::string mcu;
    sysGetPropertyString( vfisysinfo::SYS_PROP_UX100_SERIALNO, sn );
    sysGetPropertyString( vfisysinfo::SYS_PROP_UX100_PARTNO, pn );
    sysGetPropertyString( vfisysinfo::SYS_PROP_UX100_FW_VERSION, fw );
    sysGetPropertyString( vfisysinfo::SYS_PROP_STBY_MCU_VERSION, mcu );
    int availible = 0;
    int mode = 0;
    int rem_switch = 0;
    sysGetPropertyInt( vfisysinfo::SYS_PROP_UX100_AVAILABLE, availible );
    sysGetPropertyInt( vfisysinfo::SYS_PROP_UX100_OPERATIONAL_MODE, mode );
    sysGetPropertyInt( vfisysinfo::SYS_PROP_UX100_ANTI_REMOVAL_SWITCH, rem_switch );
        vfigui::uiConfirm("confirm",
                vfigui::uiPrint("UX100 info:<br>\
                    S/N: %s<br>\
                    PN: %s<br>FW ver:%s<br>\
                    MCU ver: %s<br>\
                    Avalbile: %d<br>\
                    Mode: %d<br>\
                    Removal switch:%d<br>",
                    sn.c_str(), pn.c_str(), fw.c_str(), mcu.c_str(), availible, mode, rem_switch));
    return 0;
}

static int get_mtd_info()
{
    std::string str;

    int r=vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_MTD_INFO, str);
    if(r!=vfisysinfo::SYS_ERR_OK)
    {
        return r;
    }
#ifdef RAPTOR
    // a little bit of parsing
    char buf[8] = {0};
    int i = 0, j = 0;
    vfiipc::JSObject json;
    vfiipc::JSObject json_mtd;
    vfiipc::JSObject json_image;
    vfiipc::JSObject js;
    json.load(str);

    str.clear();
    for(i = 0; i < NUM_OF_MTD; i++)
    {
        snprintf(buf, sizeof(buf), "mtd%d", i);
        json_mtd = json(buf);
        if(json_mtd.isObject())
        {
            str += "--";
            str += buf;
            str += ": blocks/bad: ";
            js = json_mtd("blocks_total");
            snprintf(buf, sizeof(buf), "%d", (int)js.getInt());
            str += buf;
            str += "/";
            js = json_mtd("blocks_bad");
            snprintf(buf, sizeof(buf), "%d", (int)js.getInt());
            str += buf;
            str += "--<br>";
            json_image = json_mtd("images");
            if(json_image.isArray())
            {
                for(j = 0; j < json_image.size(); j++)
                {
                    str += "size/count: ";
                    js = json_image[j]("size");
                    snprintf(buf, sizeof(buf), "%d", (int)js.getInt());
                    str += buf;
                    str += "/";
                    js = json_image[j]("count");
                    snprintf(buf, sizeof(buf), "%d", (int)js.getInt());
                    str += buf;
                    str += "<br>";
                }
            }
        }
    }
#endif
    vfigui::uiConfirm("confirm", str);

    return r;
}
```

_Filename: demo-sysinfo.cpp_


### Writing System Properties

The following functions can be used to write system related properties: 

```cpp
int sysSetPropertyInt(enum SYSPropertyInt property, int value);
int sysSetPropertyString(enum SYSPropertyString property, const char* value);
int sysSetPropertyString(enum SYSPropertyString property, const std::string &value);
```

`[sysSetPropertyInt()](namespacevfisysinfo.md#function-syssetpropertyint)` is used to write system properties, which is defined as an integer value (e.g. `SYS_PROP_KEYBOARD_BEEP`, member of `enum``SYSPropertyInt`).

`[sysGetPropertyString()](namespacevfisysinfo.md#function-sysgetpropertystring)` is used to read system properties, which is defined as a string (e.g. `SYS_PROP_RTC`, member of `enum``SYSPropertyString`).

Not all properties are intended for writing. If a property is only allowed for reading, the functions will return `SYS_ERR_PROP_READ_ONLY`.


## System Beep Functions

The ADK SYS library offers API functions for beeping and playing sounds (see `[sysbeep.h](sysbeep_8h.md#file-sysbeep.h)`). These API functions may be used in an application by linking basic library `libvfisysinfo.so`.


### Normal System Beeps

This function can be used to notify the user in normal situations. It plays a 50 ms standard tone at 1245 Hz. Volume in percent can be passed as parameter (use 50 for normal volume). 

```cpp
int sysBeepNormal(int volume);
```


### Error System Beeps

This function can be used to notify the user in error situations. It plays a 100 ms error tone at 880 Hz. Volume in percent can be passed as parameter (use 50 for normal volume). 

```cpp
int sysBeepError(int volume);
```


### Arbitrary Sounds

This function can be used to play an arbitrary tone and with an arbitrary duration. Volume in percent can be passed as parameter (use 50 for normal volume). Parameter note is a value between 0-95, which is nearly described in API reference to function `[sysPlaySound()](namespacevfisysinfo.md#function-sysplaysound)`. 

```cpp
int sysPlaySound(int note, int duration, int volume);
```

Please note the following restrictions due to OS limitations regarding system beep functions:

1. V/OS: Function `[sysPlaySound()](namespacevfisysinfo.md#function-sysplaysound)` does not support complete list of notes, since OS function `Buzzer_Play()` is limited to play just 5 different tones. Notes are interpolated by the function to supported values.
2. Verix eVo: Parameter volume for functions `[sysBeepNormal()](namespacevfisysinfo.md#function-sysbeepnormal)`, `[sysBeepError()](namespacevfisysinfo.md#function-sysbeeperror)`, and `[sysPlaySound()](namespacevfisysinfo.md#function-sysplaysound)` is not supported. Beep is played with a system specified volume.


## System LED Functions

The ADK SYS library offers API functions for managing terminal LEDs. (see `[leds.h](leds_8h.md#file-leds.h)`). These API functions may be used in an application by linking basic library `libvfisysinfo.so`.


### Contactless reader LEDs.

This function can be used to switch on/off contactless reader LEDs. 

```cpp
if( ctlsLedsChangeState( CTLS_LED_ALL ) == SYS_ERR_OK )
{
    DBGF_TRACE( "Contactless LEDs are switched on." );
    if( ctlsLedsChangeState( CTLS_LED_NONE ) == SYS_ERR_OK )
    {
        DBGF_TRACE( "Contactless LEDs are switched off." );
    }
    else
    {
        DBGF_ERROR( "Failed to switch off contactless LEDs." );
    }
}
else
{
    DBGF_ERROR( "Failed to switch on contactless LEDs." );
}
```


### Magnetic stripe reader LEDs.

This function can be used to switch on/off magnetic stripe reader LEDs. 

```cpp
if( msrLedsChangeState( MSR_LED_0 | MSR_LED_1 | MSR_LED_2 ) == SYS_ERR_OK )
{
    DBGF_TRACE( "MSR LEDs are switched on." );
    if( msrLedsChangeState( MSR_LED_NONE ) == SYS_ERR_OK )
    {
        DBGF_TRACE( "MSR LEDs are switched off." );
    }
    else
    {
        DBGF_ERROR( "Failed to switch off MSR LEDs." );
    }
}
else
{
    DBGF_ERROR( "Failed to switch on MSR LEDs." );
}
```


### Secure card reader LED.

This function can be used to switch on/off secure card reader LED. 

```cpp
if( scrLedsChangeState( SWITCH_ON ) == SYS_ERR_OK )
{
    DBGF_TRACE( "MSR LED is switched on." );
    if( scrLedsChangeState( SWITCH_OFF ) == SYS_ERR_OK )
    {
        DBGF_TRACE( "SCR LED is switched off." );
    }
    else
    {
        DBGF_ERROR( "Failed to switch off SCR LED." );
    }
}
else
{
    DBGF_ERROR( "Failed to switch on SCR LED." );
}
```


### Magnetic stripe reader LEDs runway.

This function can be used to show magnetic stripe reader LEDs runway. 

```cpp
if( msrShowRunway( 2 ) == SYS_ERR_OK )
{
    DBGF_TRACE( "MSR runway is started." );
}
else
{
    DBGF_ERROR( "Failed to start MSR runway." );
}
```


### Magnetic stripe reader LEDs cancel runway.

This function can be used to cancel showing magnetic stripe reader LEDs runway. 

```cpp
if( msrShowRunway( 0 ) == SYS_ERR_OK )
{
    DBGF_TRACE( "MSR runway is started for infinite repeat times." );
    sleep( 5 );
    if( msrShowCancel() == SYS_ERR_OK )
    {
        DBGF_TRACE( "MSR runway is stopped." );
    }
    else
    {
        DBGF_ERROR( "Failed to stop MSR runway." );
    }
}
else
{
    DBGF_ERROR( "Failed to start MSR runway." );
}
```


### Logo LED.

This function can be used to switch on/off terminal logo LED. 

```cpp
if( logoLedsChangeState( SWITCH_ON ) == SYS_ERR_OK )
{
    DBGF_TRACE( LOGO LED is switched on." );
    if( logoLedsChangeState( SWITCH_OFF ) == SYS_ERR_OK )
    {
        DBGF_TRACE( "LOGO LED is switched off." );
    }
    else
    {
        DBGF_ERROR( "Failed to switch off LOGO LED." );
    }
}
else
{
    DBGF_ERROR( "Failed to switch on LOGO LED." );
}
```


### LED brightness.

These functions can be used to check is LED brightness adjustable and to set LED brightness. 

```cpp
if( isBrightnessAdjustable( MSR_LED_0 ) )
{
    setBrightness( MSR_LED_0 | MSR_LED_1 | MSR_LED_2, MAX_BRIGHTNESS )
}
else
{
    DBGF_ERROR( "MSR LEDs are not brightness adjustable." );
}
```


## Module Documentation

This chapter contains a detailed description of the ADK SYS library components.


### System Property Functions

The following lists the system property functions.



* [sysGetPropertyInt()](namespacevfisysinfo.md#function-sysgetpropertyint) Get int property.
* [sysSetPropertyInt()](namespacevfisysinfo.md#function-syssetpropertyint) Set int property.
* [sysGetPropertyString()](namespacevfisysinfo.md#function-sysgetpropertystring) Get string property. Different function variants for char and string values.
* [sysSetPropertyString()](namespacevfisysinfo.md#function-syssetpropertystring) Set string property. Different function variants for char and string values.
* [sysReboot()](namespacevfisysinfo.md#function-sysreboot) Reboot terminal.
* [sysSleep()](namespacevfisysinfo.md#function-syssleep) Puts terminal in sleep mode.
* [sysShutdown()](namespacevfisysinfo.md#function-sysshutdown) Shut down terminal.
* [sysRebootDock()](namespacevfisysinfo.md#function-sysrebootdock) Reboot base (if docked or BT connected only 1 base).


#### Enumerations

**enum****[sysError()](namespacevfisysinfo.md#enum-syserror)**

Error codes returned by the functions 

```cpp
enum sysError{
  // general errors
  SYS_ERR_OK                 =  0,  /**< no error */
  SYS_ERR_PROP_UNSUPPORTED   = -1,  /**< the property does not exist or is not supported on the platform */
  SYS_ERR_PROP_READ_ONLY     = -2,  /**< the property value can only be get */
  SYS_ERR_PROP_WRITE_ONLY    = -3,  /**< the property value can only be set */
  SYS_ERR_PARAMETER          = -4,  /**< parameter error */
  SYS_ERR_PERMISSION         = -5,  /**< insufficient permissions */
  SYS_ERR_REGION             = -6,  /**< wrong region ID */
  SYS_ERR_FAIL               = -7,  /**< generic error */
  SYS_ERR_UNSUPPORTED        = -8,  /**< the function requested is not supported on the current platform/device/... */
  SYS_ERR_ACTIVE_TIMEZONE    = -9,  /**< the time zone is active already */
  SYS_ERR_INSTALL_LIMIT      = -10, /**< No more bundles can be installed. Reboot needed */
  SYS_ERR_REBOOT_NEEDED      = -11, /**< Reboot needed to install bundle */
  SYS_ERR_FILE_DOES_NOT_EXIST= -12, /**< File doesn't exist */
  SYS_ERR_BUNDLE_VERSION     = -13, /**< Higher bundle version already installed */
  SYS_ERR_EXISTS             = -14, /**< the property does not exist */
  SYS_ERR_ACCESS             = -15, /**< Not enough privileges */
  SYS_ERR_NOT_DOCKED         = -16, /**< Terminal isn't docked */
  SYS_ERR_KEY_MISSING        = -17, /**< Keys are missing */
  SYS_ERR_EXPECTED_KEY       = -18, /**< No information on expected keys */
  SYS_ERR_CONFIGURATIION     = -19, /**< Not configured properly */
  SYS_ERR_PATHNAME_TOO_LONG  = -20, /**< Pathname is too long */
  SYS_ERR_GET_CWD            = -21, /**< Not possible to get pathname of the curent directory */
  SYS_ERR_IPC                = -22, /**< IPC error */
  SYS_ERR_RUNNING            = -23, /**< Daemon is not running */
  SYS_ERR_SDI_NOT_CONNECTED  = -24, /**< No connection to SDI server */
  SYS_ERR_CALCULATING        = -25, /**< Value gets calculated (not available yet) */
  SYS_ERR_BASE_CTRL_NOT_AVAILABLE = -26, /**< Terminal base control link is not available */
  SYS_ERR_ANDROID_NOT_AVAILABLE   = -27, /**< Android information not available yet */

};
```

**enum****[displayContrastConstants()](namespacevfisysinfo.md#enum-displaycontrastconstants)**

Display contrast constants for SYS_PROP_DISP_CONTRAST property. (Verix only) 

```cpp
enum displayContrastConstants
{
    ContrastMin = 1,
    ContrastDefault = 8,
    ContrastMax = 15,
    ContrastUp = 64,
    ContrastDown = 65
};
```

**enum****[SYSPropertyInt()](namespacevfisdi.md#enum-syspropertyint)**

Int type system properties. 

```cpp
enum SYSPropertyInt
{
    SYS_PROP_BATTERY_AVAILABLE=0,            /**< read-only,  Battery exists: 1: battery available, else 0*/
    SYS_PROP_BATTERY_STATUS_OK=1,            /**< read-only,  Battery status: 1: ok, else 0 */
    SYS_PROP_BATTERY_DEVICE=2,               /**< read-only,  Device can be battery powered: 1: Portable device, else 0 */
    SYS_PROP_BATTERY_VOLTAGE=3,              /**< read-only,  Battery voltage in units of mV */
    SYS_PROP_BATTERY_CAPACITY=4,             /**< read-only,  Battery capacity in mAh */
    SYS_PROP_BATTERY_CHARGE_LEVEL=5,         /**< read-only,  Battery charge level in percent (0-100)*/
    SYS_PROP_BATTERY_CHARGING=10,            /**< read-only,  Battery charging status: 1: charging, else 0 */
    SYS_PROP_BATTERY_FULL=11,                /**< read-only,  Battery full: 1: battery fully charged, else 0 */
    SYS_PROP_BATTERY_TEMP=13,                /**< read-only,  Battery temperature in degree Celsius */
    SYS_PROP_BATTERY_CURRENT=14,             /**< read-only,  Battery current in in units of 0.01A */
    SYS_PROP_BATTERY_CRITICAL=18,            /**< read-only,  Battery critical: 1: battery level is critical, else 0 */
    SYS_PROP_BATTERY_LOW=19,                 /**< read-only,  Battery low: 1: battery level is low, else 0 */
    SYS_PROP_BATTERY_NORMAL=20,              /**< read-only,  Battery normal: 1: battery level is normal, else 0 */
    SYS_PROP_BATTERY_TECHNOLOGY=700,         /**< read-only,  Possible values are enumerated in batteryTechnology enum */
    SYS_PROP_BATTERY_FCC=701,                /**< read-only,  Percent Battery FCC (Full Charge Capacity) in mAh */
    SYS_PROP_BATTERY_CHARGE_IN_SLEEP=21,     /**< read-only,  Battery can be charged when unit is in power saving state, 1: battery can be charged, 0: can't be charged */
    SYS_PROP_UX100_AVAILABLE=22,             /**< read-only,  presence of UX100 device */
    SYS_PROP_UX400_AVAILABLE=23,             /**< read-only,  presence of UX400 device */
    SYS_PROP_UX100_OPERATIONAL_MODE=24,      /**< read-only,  Get PINPAD Operational Mode */
    SYS_PROP_UX100_BACKLIGHT=209,            /**< read/write, Ux100 display backlight */
    SYS_PROP_UX_UNIT=25,                     /**< read-only,  If it is UX unit, 1: Ux unit, else 0 */
    SYS_PROP_INTERNAL_BATTERY_STATUS=7,      /**< read-only,  Internal battery battery status, 1: ok, else 0 */
    SYS_PROP_INTERNAL_BATTERY_VOLTAGE=8,     /**< read-only,  Internal battery voltage in units of mV, possible values: 3000 = ideal, 2600 = good, 2300 = low*/
    SYS_PROP_DOCKING_STATUS=6,               /**< read-only,  Docking status, 1:docked, 0:undocked */
    SYS_PROP_DOCK_SUPPORT=15,                /**< read-only,  Docking supports dock station, 1: dock station supported, 0: not supported */
    SYS_PROP_USB1_MODE=16,                   /**< read/write, USB1 mode, sysUSBmode enum value */
    SYS_PROP_USB2_MODE=17,                   /**< read/write, USB2 mode, sysUSBmode enum value */
    SYS_PROP_USB1_CONFIGURABLE=27,           /**< read-only,  USB1 configurable, 1: configurable, else 0 */
    SYS_PROP_USB2_CONFIGURABLE=28,           /**< read-only,  USB2 configurable, 1: configurable, else 0 */
    SYS_PROP_USB1_DEFAULT=29,                /**< read-only,  USB1 default mode: sysUSBmode enum value */
    SYS_PROP_USB2_DEFAULT=30,                /**< read-only,  USB2 default mode: sysUSBmode enum value */
    SYS_PROP_USB1_CHARGE=31,                 /**< read-only,  USB1 charge port, 1: charge port, else 0 */
    SYS_PROP_USB2_CHARGE=32,                 /**< read-only,  USB2 charge port, 1: charge port, else 0 */
    SYS_PROP_PRINTER_AVAILABLE=9,            /**< read-only,  Printer exists: 1: printer available, else 0*/
    SYS_PROP_POWER_STATUS=12,                /**< read-only,  Power status, 1: unit is line powered, else 0 */
    SYS_PROP_CHARGE_ON_SAVING=703,           /**< read-only,  Unit can be charged during power saving state (during sleep) */
    SYS_PROP_CHARGE_CYCLE_COUNT=704,         /**< read-only,  Battery charge cycle count */
    SYS_PROP_KEYBOARD_BEEP=100,              /**< write-only, Keyboard beep on key press, 1: enabled, 0: disabled; note: on VOS3 also enables beep on secure touch input */
    SYS_PROP_KEYB_BACKLIGHT=101,             /**< read/write, Keyboard backlight */
    SYS_PROP_KEYBOARD_HW=102,                /**< read-only,  HW keyboard exists, 1: exists, 0: touch only unit */
    SYS_PROP_KEYBOARD_SIZE=103,              /**< read-only,  Number of keys on HW keyboard */
    SYS_PROP_DISP_CONTRAST=200,              /**< read/write, Display contrast ( V/OS only for UX ) min:35 max:52 */
    SYS_PROP_DISP_BACKLIGHT=201,             /**< read/write, Display backlight has 8 levels. Takes and return value in range 0-100, which is mapped to these 8 levels. */
    SYS_PROP_DISP=202,                       /**< write-only, Turn display on/off, 1: turn on, 0: turn off */
    SYS_PROP_DISP_HW=203,                    /**< read-only,  Display exists, 1: exists, 0: no display available */
    SYS_PROP_DISP_COLOR=205,                 /**< read-only,  Color display exists, 1: color display, 0: monochrome display */
    SYS_PROP_DISP_HEIGHT=206,                /**< read-only,  Color display height in pixels */
    SYS_PROP_DISP_WIDTH=207,                 /**< read-only,  Color display width in pixels */
    SYS_PROP_DISP_TOUCH=208,                 /**< read-only,  Is touchscreen available, 1: touchscreen, else 0 */
    SYS_PROP_ANDROID=204,                    /**< read-only,  Android side available 1: available, 0: non Android unit */
    SYS_PROP_HW_RAM_SIZE=300,                /**< read-only,  RAM size KB*/
    SYS_PROP_HW_FLASH_SIZE=301,              /**< read-only,  Flash size KB*/
    SYS_PROP_HW_RAM_USED=302,                /**< read-only,  Used ram size KB */
    SYS_PROP_HW_FLASH_USED=303,              /**< read-only,  Used flash size KB */
    SYS_PROP_HW_TOUCH_GROUNDED=306,          /**< read/write, Touch screen grounded, 1: grounded, 0: not grounded */
    SYS_PROP_LED=304,                        /**< read-only,  Returns mask with available LEDs. Please see enum LEDs from leds.h */
    SYS_PROP_PCI=305,                        /**< read-only,  Returns terminal PCI version */
    SYS_PROP_VOLUME=400,                     /**< read/write, speaker volume (0-100) (Engage only) */
    SYS_PROP_SPEAKER_AVAILABLE=401,          /**< read-only,  speaker exists, 1: exists, 0: no speaker (Engage only) */
    SYS_PROP_BUZZER_AVAILABLE=402,           /**< read-only,  buzzer exists, 1: exists, 0: no buzzer */
    SYS_PROP_ADE_STATUS=500,                 /**< read-only,  ADE status 1: active, 0: inactive */
    SYS_PROP_CERT_SPONSOR_PROD=501,          /**< read-only,  sponsor certificate 1: prod, 0: test */
    SYS_PROP_ATTACK_STATUS=502,              /**< read-only,  Tamper status 1: device tampered, else 0 */
    SYS_PROP_ATTACK_STATUS_CODE=513,         /**< read-only,  Tamper status code: device tampered, else 0 (Android only) */
    SYS_PROP_SLP_TAINTED_STATUS=514          /**< read-only,  SLP tainted status. 1: SLP tainted (NOK), 0: SLP OK */
    SYS_PROP_VCL_ENCRYPTION_STATUS=503,      /**< read-only,  VCL encryption status 1: enabled, else 0 */
    SYS_PROP_VOLTAGE_ENCRYPTION_STATUS=504,  /**< read-only,  VOLTAGE encryption status 1: enabled, else 0 */
    SYS_PROP_POSEIDON_ENCRYPTION_STATUS=505, /**< read-only,  POSEIDON encryption status 1: enabled, else 0 */
    SYS_PROP_NAVIGATOR_STATUS=506,           /**< read-only,  NAVIGATOR status 1: enabled, else 0 */
    SYS_PROP_SERVICE_SWITCH_STATUS=507,      /**< read-only,  Service switch status: 1: service switch triggered, else 0 */
    SYS_PROP_DEVICE_MODE=508,                /**< read-only,  Device mode from deviceMode enum */
    SYS_PROP_SYSMODE_BUTTON=509,             /**< write-only, Enable/disable sysmode button, 1: enable, 0: disable */
    SYS_PROP_DEVICE_TYPE=510,                /**< read-only,  Device type from deviceType enum */
    SYS_PROP_UX100_ANTI_REMOVAL_SWITCH=511,  /**< read-only,  Status of the anti-removal switch of the ux100. 1: trigged, 0: armed */
    SYS_PROP_UPTIME=600,                     /**< read-only,  System uptime in seconds */
    SYS_PROP_BARCODE_SCANNER=33,             /**< read-only,  Barcode scanner exists: 1: barcode scanner available, else 0*/
    SYS_PROP_CAMERA=34,                      /**< read-only,  Camera exists: 1: camera available, else 0*/
    SYS_PROP_BATTERY_CALIBRATION=705,        /**< read-only,  Battery calibration status 1:Calibrated 0:not calibrated */
    SYS_PROP_BATTERY_TYPE=706,               /**< read-only,  Battery type 1 = Smart battery, 2 = Simple battery (No fuel gauge) */
    SYS_PROP_BATTERY_CHARGE_MODE=707,        /**< read/write, Battery charge mode, batteryChargeMode enum value (V210/V240m/V400m only)*/
    SYS_PROP_SWITCH_THRESHOLD_VOLTAGE=35,    /**< read/write, Threshold voltage for successful switchback to HOST mode (Default: 3900000) (E285/E280 only) */
    SYS_PROP_LOW_THRESHOLD_VOLTAGE=36,       /**< read/write, Low threshold voltage (Default: 3600000) (E285/E280 only) */
    SYS_PROP_CONSOLE_STATE=37,               /**< read/write, Enable/disable console: 1 - console enabled; 0 - console disabled */
    SYS_PROP_USB_HIGH_POWER_MODE=38,         /**< read/write, Enable/disable high power mode: 2 - High power mode; 1 - Medium power mode; 0 - Low power mode */
    SYS_PROP_UX_MDB = 40,                    /**< read-only,  If UX unit supports MDB, 1: MDB is supported, else 0 */
    SYS_PROP_CARD_SLOT2_MODE=41,             /**< read/write, Card slot2 mode, 1: SAM 0: SIM2 (For V210) reboot needed to apply new value*/
    SYS_PROP_CARD_SLOT_COUNT=42,             /**< read-only,  Number of available SIM card slots*/
    SYS_PROP_KEYBOARD_TYPE=43,               /**< read-only,  keyboard type from enum keyboardType*/
    SYS_PROP_EXT_NFC_ANTENNA=44,             /**< read-only,  If external NFC antenna is attached 1:Antenna attached 0:Not attached*/
    SYS_PROP_VRK2_SUPPORT=45,                /**< read-only,  Verifone Remote Keys injection version 2 support : 1 supported, 0 unsupported*/
    SYS_PROP_USB_C_CHARGING_STATE = 708,     /**< read/write, Enable/disable USB-C port charging: 1 - enabled, 0 - disabled, <0 - error */
    SYS_PROP_POGO_CHARGING_STATE = 709,      /**< read/write, Enable/disable POGO port charging: 1 - enabled, 0 - disabled, <0 - error */
    SYS_PROP_ECC_VRK_SUPPORT=46,             /**< read-only,  Elliptic curve cryptography Verifone Remote Keyloading support : 1 supported, 0 unsupported */
    SYS_PROP_LCD_PANEL_ID = 47,              /**< read-only,  Returns LCD panel ID (only if information is available) */
    SYS_PROP_VRK_CERT_INSTALLED = 48,        /**< read-only,  VRK certificate is installed/available on device: 1 - true, 0 - false  */
    SYS_PROP_VRK_PACKAGING_UVRK_SUPPORT=49,  /**< read-only,  Unified VRK packaging support, 1 - supported, 0 - unsupported */
    SYS_PROP_POGO_DATA_STATE=710,            /**< read/write, Switch USB data lines between USB-C and POGO ports: 0 - USB-C, 1 - POGO */
    SYS_PROP_ANDROID_PREFIX_LENGTH=50,       /**< read-only,  Android network prefix length. Applicable only to Dual Chip solutions */
    SYS_PROP_UX100_TYPE=51,                  /**< read-only,  UX1 model (0-unknown, 100-UX100, 110-UX110) */
};
```

**enum****[SYSPropertyString()](namespacevfisdi.md#enum-syspropertystring)**

String type system properties. 

```cpp
enum SYSPropertyString {
    SYS_PROP_HW_MODEL_NAME=0,                /**< read-only,  Hardware model name  */
    SYS_PROP_HW_MODEL_NAME_SHORT=54,         /**< read-only,  Short model name (without information on modifications), e.g. "P400" */
    SYS_PROP_HW_SERIALNO=1,                  /**< read-only,  Hardware serial number */
    SYS_PROP_OS_VERSION=2,                   /**< read-only,  OS version */
    SYS_PROP_HW_PTID=3,                      /**< read-only,  Terminal unit identification number */
    SYS_PROP_HW_VARIANT_NAME=4,              /**< read-only,  Hardware variant name*/
    SYS_PROP_HW_PART_NO=5,                   /**< read-only,  Hardware part number*/
    SYS_PROP_HW_VERSION=6,                   /**< read-only,  Hardware version*/
    SYS_PROP_HW_LOT_NO=7,                    /**< read-only,  Hardware LOT number*/
    SYS_PROP_BOOT_VERSION=8,                 /**< read-only,  Boot(SBI) version*/
    SYS_PROP_TERMINAL_SPONSOR=9,             /**< read-only,  Sponsor certificate name (empty string if certificate not installed)*/
    SYS_PROP_MANUF_DATE=10,                  /**< read-only,  manufacturing date/time in format "yyyymmddhhmmss" */
    SYS_PROP_CERT_SPONSOR_SN=11,             /**< read-only,  Sponsor certificate serial number (empty string if certificate not installed)*/
    SYS_PROP_CERT_SPONSOR_MODE=12,           /**< read-only,  Sponsor certificate mode: "test" or "prod" */
    SYS_PROP_UX100_SERIALNO=13,              /**< read-only,  UX100 Hardware serial number (UX100 only) */
    SYS_PROP_ADK_VERSION=14,                 /**< read-only,  ADK version */
    SYS_PROP_UX100_FW_VERSION=15,            /**< read-only,  UX100 firmware version (UX100 only) */
    SYS_PROP_SBI_VERSION=16,                 /**< read-only,  Secure Boot Image version */
    SYS_PROP_VAULT_VERSION=17,               /**< read-only,  Vault version */
    SYS_PROP_CIB_VERSION=18,                 /**< read-only,  Control Information Block version */
    SYS_PROP_MIB_VERSION=19,                 /**< read-only,  Machine Information Block version */
    SYS_PROP_KERNEL_VERSION=20,              /**< read-only,  Linux Kernel version */
    SYS_PROP_RFS_VERSION=21,                 /**< read-only,  Overall RFS version */
    SYS_PROP_RELEASE_VERSION=22,             /**< read-only,  Build Release version */
    SYS_PROP_RFS_SECURITY_VERSION=23,        /**< read-only,  Application Manager version */
    SYS_PROP_SRED_VERSION=24,                /**< read-only,  SRED version */
    SYS_PROP_SRED_MODE=75,                   /**< read-omly,  SRED runtime mode */
    SYS_PROP_OPENPROTOCOL_VERSION=25,        /**< read-only,  OpenProtocol version */
    SYS_PROP_PCI_REBOOT_TIME=26,             /**< read/write, PCI 24h reboot time "hh:mm:ss" */
    SYS_PROP_FILE_NAME_TO_INSTALL=27,        /**< write-only, please use API from sysinstall.h header instead */
    SYS_PROP_MSR_COUNTERS=29,                /**< read-only,  MSR counters  */
    SYS_PROP_SCR_COUNTERS=30,                /**< read-only,  SCR counters */
    SYS_PROP_CTLS_COUNTERS=58,               /**< read-only,  CTLS counters */
    SYS_PROP_DOCK_STATION_SN=31,             /**< read-only,  Docking station serial number */
    SYS_PROP_DOCK_STATION_PN=32,             /**< read-only,  Docking station product number */
    SYS_PROP_DOCK_STATION_MODEL=33,          /**< read-only,  Docking station model */
    SYS_PROP_DOCK_STATION_MAC=34,            /**< read-only,  Docking station MAC address */
    SYS_PROP_DOCK_STATION_HW_REV=35,         /**< read-only,  Docking station hardware revision */
    SYS_PROP_DOCK_STATION_INSTALL=36,        /**< write-only, Please use API from from sysinstall.h instead */
    SYS_PROP_GSM_FIRMWARE_VERSION=37,        /**< read-only,  GSM firmware version */
    SYS_PROP_DOCK_STATION_OS_VERSION=38,     /**< read-only,  Docking station OS version */
    SYS_PROP_DOCK_STATION_IP_ADDRESS=39,     /**< read-only,  Docking station IP V4 address corresponding to SYS_PROP_DOCK_STATION_MAC*/
    SYS_PROP_DOCK_STATION_IP_V6_ADDRESS=51,  /**< read-only,  Docking station IP V6 address corresponding to SYS_PROP_DOCK_STATION_MAC*/
    SYS_PROP_DOCK_STATION_USB1_IP_ADDRESS=57,/**< read-only,  Returns usb1 local IP address for base*/
    SYS_PROP_WARRANTIED_KEYS=53,             /**< read-only,  JSON encoded information on warrantied keys (warrantied keys/missing keys) */
    SYS_PROP_SECAPP_VERSION=40,              /**< read-only,  Security application version */
    SYS_PROP_VSS_VERSION=41,                 /**< read-only,  VSS version */
    SYS_PROP_STBY_MCU_VERSION=42,            /**< read-only,  Standby MCU firmware version */
    SYS_PROP_EXT_STORAGE=43,                 /**< read-only,  JSON encoded information on external storage devices */
    SYS_PROP_INSTALLED_PCKG_LIST=28,         /**< read-only,  JSON encoded information on installed packages */
    SYS_PROP_PKG_LIST=28,                    /**< read-only,  JSON encoded information on installed packages */
    SYS_PROP_APP_PKG_LIST=44,                /**< read-only,  JSON encoded information on installed application packages */
    SYS_PROP_BUNDLE_LIST=45,                 /**< read-only,  JSON encoded information on bundles */
    SYS_PROP_APP_BUNDLE_LIST=49,             /**< read-only,  JSON encoded information on installed application bundles */
    SYS_PROP_MSR_INFO=46,                    /**< read-only,  JSON encoded information on MSR card reader */
    SYS_PROP_SCR_INFO=47,                    /**< read-only,  JSON encoded information on SCR card reader */
    SYS_PROP_CTLS_INFO=48,                   /**< read-only,  JSON encoded information on CTLS card reader */
    SYS_PROP_HW_STRING=50,                   /**< read-only,  HW description string: Example: 320x480C15T */
    SYS_PROP_DEV_ID=52,                      /**< read-only,  Device Id string: Example: 6E00F942-C5949001-41A97FA3-2F396409-F0896835-6898E7D4-142B43B7-105FEEB0 */
    SYS_PROP_FET=55,                         /**< read-only,  JSON encoded information on Featue licenses (FET) */
    SYS_PROP_RTC=100,                        /**< read/write, VOS1,VOS2:system date/time VOS3:Real-Time-Clock date/time in format "yyyymmddhhmmss" (write limited to secproc_cmd group)*/
    SYS_PROP_NTP_SERVER=101,                 /**< write-only, Network Time Protocol host name (if value is empty, pool.ntp.org is used) */
    SYS_PROP_BATTERY_SERIALNO=200,           /**< read-only,  Battery serial number, only available on some devices (Not supported on V/OS) */
    SYS_PROP_TIME_ZONE=300,                  /**< read-only,  JSON encoded information on current time zone, e.g. {"doff":"0","dst":"0","end":"0","soff":"UTC+08","start":"0","std":"CST"} */
    SYS_PROP_TIME_ZONE_LIST=301,             /**< read-only,  JSON encoded information on all available timezones */
    SYS_PROP_TIME_ZONE_FROM_FILE=302,        /**< write-only, Set time zone using path, e.g. /usr/share/zoneinfo/US/Pacific */
    SYS_PROP_TIME_ZONE_NAME=304,             /**< write-only, Set time zone using name, e.g. US/Hawaii  */
    SYS_PROP_TIME_ISO8601=303,               /**< read/write, Set time format "YYYY-MM-ddTHH:mm:ss.SSSxxxxx" */
    SYS_PROP_REBOOT_REASON=400               /**< read-only,  Returns reason for last reboot */
    SYS_PROP_ALL_LOADED_KEYS=56,             /**< read-only,  JSON encoded information on generic,payment and warrantied keys */
    SYS_PROP_ALL_LOADED_KEYS_V2=80,          /**< read-only,  JSON encoded information on all keys */
    SYS_PROP_UX100_PARTNO=65,                /**< read-only,  UX100 Hardware part number (UX100 only) */
    SYS_PROP_TAMPER_RECORDS=68,              /**< read-only,  JSON encoded information on tamper records */
    SYS_PROP_ANDROID_VERSION=70,             /**< read-only,  Returns JSON encoded Android version */
    SYS_PROP_STATUSBAR_COLOR=71,             /**< read/write, Controls status bar background color on Android devices. Format: HTML #RRGGBB or hex 0xRRGGBB, e.g. #21618c */
    SYS_PROP_ANDROID_TIME=72,                /**< read/write, Get/set time for Android side. Format "YYYY-MM-ddTHH:mm:ss" */
    SYS_PROP_MTD_INFO=73,                    /**< read-only,  JSON encoded information about MTD partition: total/bad blocks count, images copies count */
    SYS_PROP_HW_ID=74,                       /**< read-only,  Returns hardware ID (Only if information is available in MIB)*/
    SYS_PROP_LCD_PANEL_MODEL = 76,           /**< read-only,  Returns LCD panel model (only if information is available) */
    SYS_PROP_DT_NAME=77,                     /**< read-only,  Returns device dt_name id string from device tree */
    SYS_PROP_TOUCH_NAME=83,                  /**< read-only,  Touch scren name */
    SYS_PROP_TOUCH_HW_VERSION=84,            /**< read-only,  Touch screen HW version */
    SYS_PROP_TOUCH_SW_VERSION=85,            /**< read-only,  Touch screen SW version */
    SYS_PROP_TOUCH_CONFIG_VERSION=86,        /**< read-only,  Touch screen config version */
    SYS_PROP_ANDROID_GATEWAY=87,             /**< read-only,  Android Network Gateway address. Applicable only to Dual Chip solutions */
    SYS_PROP_ANDROID_DNS1=88,                /**< read-only,  Android DNS1 server address. Applicable only to Dual Chip solutions */
    SYS_PROP_ANDROID_DNS2=89,                /**< read-only,  Android DNS2 server address. Applicable only to Dual Chip solutions */
};
```

**SYSPropertyString SYS_PROP_REBOOT_REASON possible values**


| Value  | Description   |
|  -------- | -------- |
| `24H` | 24 hour reboot timer   |
| `WARM` | Reboot with power still connected to device   |
| `COLD` | Complete removal of power and restart   |
| `JTAG` | IcePick reset event. This is a source of global warm reset initiated by the emulation.   |
| `EXT_WARM` | External warm reset event   |
| `1WDT` | Watchdog1 timer reset event.   |
| `0WDT` | Watchdog0 timer reset event.   |
| `MPU_SEC` | Security violation reset event triggered by Security State Machine inside MPUSS.   |



#### JSON examples

SYS_PROP_WARRANTIED_KEYS : 

```cpp
{
    "Date instaled":1552968814,
    "Key":0,
    "Name":"VRK",
    "Status":"Installed",
    "Timestamp":"FFFFFFFFFFFFFF",
    "Type":86,
    "User":0
}
```

SYS_PROP_ALL_LOADED_KEYS:



```cpp
{
    "AESKeys":[
        {
            "Date installed":119649095,
            "KSN":"0x12345678901234560000000000",
            "Key":"1234567890123456",
            "Name":"key0",
            "Status":"Installed",
            "Timestamp":"20191001172951",
            "User":1
        }
    ],
    "PaymentKeys":[
        {
            "Date installed":0,
            "EngineId":97,
            "InstanceId":1,
            "Name":"ADE0",
            "SlotId":0,
            "Status":1,
            "User":0,
            "Version":1
        },
        {
            "Date installed":0,
            "EngineId":111,
            "InstanceId":1,
            "Name":"VCL",
            "SlotId":0,
            "Status":0,
            "User":0,
            "Version":1
        }
    ],
    "VSSKeys":[
        {
            "EngineId":111,
            "InstanceId":1,
            "Name":"VSS#0",
            "Version":1,
            "DUKPT KSN":"0x1234566789ABCDEF00",
            "keys":[
                {
                    "Name":"VSS key#0",
                    "SlotId":0,
                    "Status":"Loaded"
                },
                {
                    "Name":"VSS key#1",
                    "SlotId":1,
                    "Status":"Loaded"
                }
            ]
        },
        {
            "EngineId":111,
            "InstanceId":1,
            "Name":"VSS#3",
            "Version":1
        }
    ],
    "WarrantiedKeys":[
        {
            "Date instaled":1583444075,
            "Key":0,
            "Name":"VRK",
            "Status":"Installed",
            "Timestamp":"FFFFFFFFFFFFFF",
            "Type":86,
            "User":0
        },
        {
            "Date instaled":1583444075,
            "Key":0,
            "Name":"ECCVT00",
            "Status":"Installed",
            "Timestamp":"FFFFFFFFFFFFFF",
            "Type":69,
            "User":0
        },
        {
            "Date instaled":1583444078,
            "Key":0,
            "Name":"RSAVT00",
            "Status":"Installed",
            "Timestamp":"20200305131412",
            "Type":82,
            "User":0
        },
        {
            "Date instaled":1583444077,
            "Key":0,
            "Name":"RSAOS10",
            "Status":"Installed",
            "Timestamp":"20200305131412",
            "Type":82,
            "User":1
        }
    ]
    "generic_keys": [{
            "version":  1,
            "install_date": "28/09/2022 12:33:19",
            "name": "ADKCOM_TLS_Gen",
            "skid": "9E:B5:E9:C1:E8:1B:23:58:43:5F:6E:C6:3C:F1:60:34:67:69:90:E5",
            "file_content_pem": "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgIIfeBX0mAJFTUwDQYJKoZIhvcNAQELBQAwgYsxCzAJBgNV\nBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRAwDgYDVQQHEwdSb2NrbGluMRUw\nEwYDVQQKEwxWZXJpZm9uZSBJbmMxGjAYBgNVBAsTEVBsYXRmb3JtIFNlY3VyaXR5\nMSIwIAYDVQQDExlWZXJpZm9uZSBEZXZpY2UgVlJLIENBIHYyMB4XDTIyMDkxOTE2\nNDY0M1oXDTQ3MDkxMzE2NDY0M1owgYsxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApD\nYWxpZm9ybmlhMRAwDgYDVQQHDAdSb2NrbGluMRUwEwYDVQQKDAxWZXJpZm9uZSBJ\nbmMxEjAQBgNVBAsMCVZSSyAtIFJTQTEUMBIGA1UEDAwLOTk5LTk5OS05OTkxFDAS\nBgNVBAMMCzk5OS05OTktOTk5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC\nAQEAuKymFy38A3CVIRaned1+vedx6GgX75bvR5cLxxcG1hcco7dXqkHfXxRTb222\nHwXAvdbs8tce/tpZUReFz73odzfaUFDMi/rF7dHBoGym52s3/xYbhIAZlsWzd3s3\nOsggRbeMiu+N5kfgvEVzEmqTEc88nVejuL4O46bRXo06FX6IC3SyUuFgKpf4PsFl\nQGzAyOp5k804lABxW1OmGBAHKUk7oi/d/FqOnVqDCnDJu34e756xs3nV67EUkr/B\nLqNfz1EES1DGdfPdTYVMjG/5QIQN8/VV72C7Pa5+qLZQSREYBnP/rRTeWyhWV10d\nPv98oFHsHKlK6QcNmsPSEFUqKwIDAQABo3AwbjAdBgNVHQ4EFgQUnrXpwegbI1hD\nX27GPPFgNGdpkOUwCQYDVR0TBAIwADAfBgNVHSMEGDAWgBQoZP5R0bS8d6rJkZ/X\nuLoPZNXQejAOBgNVHQ8BAf8EBAMCBaAwEQYKYIZIAYyaQAEBAgQDAQEAMA0GCSqG\nSIb3DQEBCwUAA4IBAQC83Sc01kfiwPdbuMh2haVZHqOSceG18E+R3WsRVBjhQ7SQ\n+2wMU0jLBOtwO0UYKdhfk4X7AwwfdjTYb/K1Hc/+qIOpM7jLNSbtZCgJRB4FizkK\nXcaYKOvDD6+epKDe9s8ACgQdB1WReQD5Wywt/1bAYQkxA8msFYRNyFodvKQpYt/M\nbfoULeYmVZZG8NRALUNtTF7Nmc6hFvgU8VAeTI2VNnyYuQvK8pWGe9cH+Kr0W2Vx\nAw0o1pxyaEFHCFW3m7JSQAt+0OZiK36VjzafgM2cXRPe99JeLB4wBZSc+VG7/bp7\nvnkfy/NHVlIz+O0a7haOHtNAoRS0GTNLsick982I\n-----END CERTIFICATE-----\n",
            "info_type":    "RSA",
            "info": {
                "status":   3,
                "type": "",
                "ts":   "20220919134643"
            },
            "KBH":  "D2832S0RS00N07001012ADKCOM_TLS_Gen110601LB12ADKCOM_TLS_GenCT00040aa8CC0568MIIECjCCAvKgAwIBAgIIfeBX0mAJFTUwDQYJKoZIhvcNAQELBQAwgYsxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRAwDgYDVQQHEwdSb2NrbGluMRUwEwYDVQQKEwxWZXJpZm9uZSBJbmMxGjAYBgNVBAsTEVBsYXRmb3JtIFNlY3VyaXR5MSIwIAYDVQQDExlWZXJpZm9uZSBEZXZpY2UgVlJLIENBIHYyMB4XDTIyMDkxOTE2NDY0M1oXDTQ3MDkxMzE2NDY0M1owgYsxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRAwDgYDVQQHDAdSb2NrbGluMRUwEwYDVQQKDAxWZXJpZm9uZSBJbmMxEjAQBgNVBAsMCVZSSyAtIFJTQTEUMBIGA1UEDAwLOTk5LTk5OS05OTkxFDASBgNVBAMMCzk5OS05OTktOTk5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuKymFy38A3CVIRaned1+vedx6GgX75bvR5cLxxcG1hcco7dXqkHfXxRTb222HwXAvdbs8tce/tpZUReFz73odzfaUFDMi/rF7dHBoGym52s3/xYbhIAZlsWzd3s3OsggRbeMiu+N5kfgvEVzEmqTEc88nVejuL4O46bRXo06FX6IC3SyUuFgKpf4PsFlQGzAyOp5k804lABxW1OmGBAHKUk7oi/d/FqOnVqDCnDJu34e756xs3nV67EUkr/BLqNfz1EES1DGdfPdTYVMjG/5QIQN8/VV72C7Pa5+qLZQSREYBnP/rRTeWyhWV10dPv98oFHsHKlK6QcNmsPSEFUqKwIDAQABo3AwbjAdBgNVHQ4EFgQUnrXpwegbI1hDX27GPPFgNGdpkOUwCQYDVR0TBAIwADAfBgNVHSMEGDAWgBQoZP5R0bS8d6rJkZ/XuLoPZNXQejAOBgNVHQ8BAf8EBAMCBaAwEQYKYIZIAYyaQAEBAgQDAQEAMA0GCSqGSIb3DQEBCwUAA4IBAQC83Sc01kfiwPdbuMh2haVZHqOSceG18E+R3WsRVBjhQ7SQ+2wMU0jLBOtwO0UYKdhfk4X7AwwfdjTYb/K1Hc/+qIOpM7jLNSbtZCgJRB4FizkKXcaYKOvDD6+epKDe9s8ACgQdB1WReQD5Wywt/1bAYQkxA8msFYRNyFodvKQpYt/MbfoULeYmVZZG8NRALUNtTF7Nmc6hFvgU8VAeTI2VNnyYuQvK8pWGe9cH+Kr0W2VxAw0o1pxyaEFHCFW3m7JSQAt+0OZiK36VjzafgM2cXRPe99JeLB4wBZSc+VG7/bp7vnkfy/NHVlIz+O0a7haOHtNAoRS0GTNLsick982I052cMIID2zCCAsOgAwIBAgIGMzQxMDAyMA0GCSqGSIb3DQEBCwUAMD8xEjAQBgNVBAoTCU14ODAwIFJLTDEpMBAGA1UELQMJAAICAQAXGG5lMBUGA1UECxMOUktMIFNVQi1DQSBFTkMwIBcNMTYwMTE0MjIxODU4WhgPMjExMDAxMDEwMDAwMDBaMFoxKTAQBgNVBAoTCU14ODAwIFJLTDAVBgNVBAsTDlJLTCBTVUItQ0EgRU5DMS0wEAYDVQQtAwkBAgMBAEbmUoYwGQYDVQQDExJWUksgQ0EgMiBTaW11bGF0b3IwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDRp4AbfTW6FHttEC47AguN3o3layPrVyJe+lPXUX5lN+G/adGg6Rdw9qAPzON8etOO06xA9IfIFXd2vpZKhNJp22dwsi1VpNr8gYC5IQyuorsj+ypy22yga4PvVHni2jAyWYTe25EWnxXDnKwLvmhKHPKHU4AY2+J1AX6GnAIqeZK9tqKYuBwxD9In6LUPCctHQ6YLjMwzcFeE8sjsR42bYbsQUmpmKBiKsws35m5cnFNaP1CjeSpQr65l8F4qy3r/tGoMAvJNdWKG+bPQU2DO/lolMi/i5Y5kWosouaY6x0FQwgusTdEPDPBSKYqH7s2YgM07TgmvHcJCgiv8FiHvAgMBAAGjgb8wgbwwIgYDVR0jAQH/BBgwFoAU5l8PR008ipTmVmHn48TTOtk6zkkwIAYDVR0OAQH/BBYEFChk/lHRtLx3qsmRn9e4ug9k1dB6MAwGA1UdDwQFAwMHBAAwDAYDVR0TBAUwAwIBADAVBgpghkgBjJpAAQEBBAcwBQEBADAAMBQGCmCGSAGMmkABAQIBAf8EAwEBADAVBgpghkgBjJpAAQEDAQH/BAQCAgD/MBQGCmCGSAGMmkABAQQBAf8EAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEAcyvghPKalpwDzB5Itp7/3vZKDaVnuCdemXGHBpAo5CbyBW2InlIB8quRiryoprK6bru/4VX5mIt57+c4QDk7nUVSN43+4kbxZad4+HM4wJDdeCpWTXQPJU2O06PjBXh2XmUuTjSTLwjT4Ed8MyU8rN9+xqgkFjH5z3azW2EGDpUOgHPTkJsz7T8USEdBWGdbWv9cGKrB+YHnIET5HweqeFQsoypJ//p6ag8xEIRaqqA3+gOcXjroWKT+g/l+A/oizhyN7wt4HGM8z6e+D0fdxsSMzH0wkiOaWU6Ru8lcq5N9+ms9cNOp/tYXKoE7kzqQCxFUg97mXsCx32wZ2JhVhQ==KP1001D77F007724TS1320220919134643ZPB0B0000000"
        }],
}
```

SYS_PROP_EXT_STORAGE: 

```cpp
{
   "dir":"/media/mmcblk0p1",
   "fsname":"/dev/mmcblk0p1",
   "opts":"rw,relatime,gid=1002,fmask=0007,dmask=0007,allow_utime=0020,codepage=437,iocharset=iso8859-1,shortname=mixed,errors=remount-ro",
   "type":"vfat"
}
```

SYS_PROP_INSTALLED_PCKG_LIST: 

```cpp
{
   "bundledate":"",
   "bundlename":"sysinfo-demo",
   "bundleversion":"3.83.2",
   "name":"sysinfo-demo",
   "signer":"user",
   "type":"user",
   "user":"usr2",
   "version":"3.83.2"
}
```

SYS_PROP_APP_PKG_LIST: 

```cpp
{
   "bundledate":"",
   "bundlename":"sysinfo-demo",
   "bundleversion":"3.83.2",
   "name":"sysinfo-demo",
   "signer":"user",
   "type":"user",
   "user":"usr2",
   "version":"3.83.2"
}
```

SYS_PROP_BUNDLE_LIST: 

```cpp
   {
      "category":"fs",
      "date":"",
      "name":"basectrl",
      "option":"",
      "user":"root",
      "version":"1.26.9.10109"
   },
   {
      "category":"fs",
      "date":"",
      "name":"basectrl-requests",
      "option":"",
      "user":"root",
      "version":"1.0.0"
   },
...
```

SYS_PROP_APP_BUNDLE_LIST: 

```cpp
{
   "category":"fs",
   "date":"",
   "name":"sysinfo-demo",
   "option":"",
   "user":"usr2",
   "version":"3.83.2"
}
```

SYS_PROP_MSR_INFO: 

```cpp
{
   "exist":"1",
   "heads":"21",
   "port":"0",
   "tracks":"8",
   "type":"5"
}
```

SYS_PROP_SCR_INFO: 

```cpp
{
   "exist":"1",
   "motor":"0",
   "port":"3",
   "type":"5"
}
```

SYS_PROP_CTLS_INFO: 

```cpp
{
   "config":"0",
   "exist":"1",
   "port":"0",
   "type":"4"
}
```

SYS_PROP_TAMPER_RECORDS: 

```cpp
[
   {
      "Date/Time":"15/10/2020 20:50:05",     // Date/Time of Tamper
      "EncodedSrcReg":"00000001",            // Encoded Tamper Source Register
      "SBF":"00",                            // Security Barrier Flag
      "Status":"000000"                      // Tamper Register
   },
   {
      "Date/Time":"15/10/2020 20:49:17",
      "EncodedSrcReg":"00000000",
      "SBF":"01",
      "Status":"000000"
   },
   {
      "Date/Time":"15/10/2020 20:49:17",
      "EncodedSrcReg":"00000008",
      "SBF":"03",
      "Status":"000000"
   }
]
```


### System Statusbar Functions

The following lists the system statusbar functions.



* [typedef void ()]
* [sysStartStatusbarURL()](namespacevfisysinfo.md#function-sysstartstatusbarurl) Start a statusbar for the specified region ID using a URL for the HTML document.
* [sysStartStatusbarURLReturnVal()](namespacevfisysinfo.md#function-sysstartstatusbarurlreturnval) Start a statusbar for the specified region ID using a URL for the HTML document with additional return callback.
* [sysStartStatusbar()](namespacevfisysinfo.md#function-sysstartstatusbar) Starts a statusbar for the specified region ID using a URL for the HTML document.
* [sysStopStatusbar()](namespacevfisysinfo.md#function-sysstopstatusbar) Stops the statusbar display and background update for the specified region ID.
* [sysSetStatusbarValues()](namespacevfimac.md#function-syssetstatusbarvalues) Set user-defined variables of the statusbar.
* [sysGetStatusbarValues()](namespacevfimac.md#function-sysgetstatusbarvalues) Get statusbar user variables.
* [sysSetRefreshTime()](namespacevfisysinfo.md#function-syssetrefreshtime) Set the refresh time of the statusbar.
* [sysGetRefreshTime()](namespacevfisysinfo.md#function-sysgetrefreshtime) Get refresh time of the statusbar.
* [sysRefreshStatusBar()](namespacevfisysinfo.md#function-sysrefreshstatusbar) Triggers the immediate refresh of the statusbar.
* [sysStatusbarGetVersion()](namespacevfisysinfo.md#function-sysstatusbargetversion) Returns a zero-terminated string with version and build information of libvfisysbar.


#### typedef void ()

Callback function called every time before the statusbar refreshes. The statusbar is refreshed at regular intervals, which are specified by the refresh time that can be configured with function `[sysSetRefreshTime()](namespacevfisysinfo.md#function-syssetrefreshtime)`. The application may add customized values to map values that should be passed to next `[uiInvoke()](namespacevfigui.md#function-uiinvoke)` to refresh the statusbar.


#### Prototype



```cpp
sysStatusbarCallback(void data, int region_id, std::map< std::string, std::string > &values)
```


#### Parameters


| Type  | Name  | Description   |
|  -------- | -------- | -------- |
| `in` | _property_ | Data pointer provided by the application.   |
| `in` | _region_id_ | region_id ID of the GUI region, where the statusbar callback is triggered.   |
| `in`, `out` | _values_ | Values to be passed to next `[uiInvoke()](namespacevfigui.md#function-uiinvoke)` call for this statusbar. The map already contains values set by `[sysSetStatusbarValues()](namespacevfimac.md#function-syssetstatusbarvalues)`.   |



#### Return Values



```cpp
true    if the statusbar should be refreshed, else no refresh is done.
```


#### Programming Notes

It is not allowed to call any statusbar API functions on the same region region_id from inside the callback function. All API functions will return `SYS_ERR_PERMISSION` in this case.


### System Beep functions

The following lists the system beep functions.



* [sysBeepNormal()](namespacevfisysinfo.md#function-sysbeepnormal) Plays a 100 ms tone at 880 Hz (error beep tone, same as error_tone() on Verix).
* [sysBeepError()](namespacevfisysinfo.md#function-sysbeeperror) Plays a 100 ms tone at 880 Hz (error beep tone, same as error_tone() on Verix).
* [sysPlaySound()](namespacevfisysinfo.md#function-sysplaysound) Plays an arbitrary tone with arbitrary duration and volume.


## System Installation Functions

Provides information on API for installing packages and related functions (see [sysinstall.h](sysinstall_8h.md#file-sysinstall.h)). These API functions may be used in an application by linking basic library libvfisysinfo.so.


### Authenticate File

The function is used for installation package authentication. 

```cpp
vfisysinfo::sysError sysAuthenticateFile(const std::string & path);
```


### Install package

The function is used for installing packages on terminals. In case return code is SYS_ERR_REBOOT_NEEDED reboot is required to finish instalation. 

```cpp
vfisysinfo::sysError sysInstall(const std::string & path);
```


### Install package on dock station

The function is used for installing packages on dock stations (Example: V240m B-FF). The package needs to be placed in /mnt/flash/install/dl/ before API is called. In case return code is SYS_ERR_REBOOT_NEEDED reboot is required to finish instalation. 

```cpp
vfisysinfo::sysError sysBaseInstall();
```


### Stop all applications and install package

The function stops all applications on the terminal and then installs package. The function is very usefull on terminals with small flash size. Depending on what action is needed (reboot or restart apps) to extract the packages into the filesystem, the function will do the needful. The caller upon reboot/restart should call the new status API [sysGetInstallStatus()](namespacevfisysinstall.md#function-sysgetinstallstatus) to find out the status of the installation. (VOS2 only) 

```cpp
vfisysinfo::sysError sysFreeResourcesInstall( const std::string & value );
```


### Get installation status

The function return the last installation status. The result is JSON formatted status for the install API [sysFreeResourcesInstall()](namespacevfisysinstall.md#function-sysfreeresourcesinstall). 

```cpp
vfisysinfo::sysError sysGetInstallStatus( vfiipc::JSObject & json );
```


# System Setup and Requirements


## Compiling and Linking

This chapter details the settings for compiling and linking the ADK SYS library.


### Compiling and Linking for Verix eVo



* Mandatory flags for VRXCC compiler and linker: 

Both ADK SYS libraries `libvfisysinfo.so` and `libvfisybar.so` were compiled with VRXCC compiler option `-p` to generate ARM11 optimized code. 

For this reason, an application must use the option `-p` for the VRXCC compiler and linker.

ADK SYS libraries will not run on old Predator platforms and it is not possible to use these libraries for applications using compiler and linker flag `-b`.


Linking with libsysinfo.so:



* Mandatory libraries for linking with VRXCC: 


```cpp
vrx_LIBS=\
        $(vrx_EOSSDK_DIR)/lib/svc_net.o \
        $(vrx_EOSSDK_DIR)/lib/elog.o\
        $(vrx_EOSSDK_DIR)/lib/ceif.o \
        $(vrx_EOSSDK_DIR)/lib/ssl2.o\
        $(vrx_SYSROOT_DIR)/lib/PED.o \
        $(vrx_SYSROOT_DIR)/lib/voyns.o \
        $(vos_ADK_DIR)/vrx/lib/libposix.so \
        $(vos_ADK_DIR)/vrx/lib/libvfiipc.so
```

* Linking with these libraries requires also modifying the application header with: 

```cpp
vrxhdr = -l NET.LIB=N:/NET.LIB \
         -l CEIF.LIB=N:/CEIF.LIB \
         -l SSL2.LIB=N:/SSL2.LIB \
         -l ELOG.LIB=N:/ELOG.LIB \
         -l PED.LIB=T:1/PED.LIB \
         -l VOYNS.LIB=I:/VOYNS.LIB
```


Linking with libsysbar.so:



* Mandatory libraries for linking with VRXCC: 


```cpp
vrx_LIBS=\
        $(vrx_EOSSDK_DIR)/lib/svc_net.o \
        $(vrx_EOSSDK_DIR)/lib/elog.o\
        $(vrx_EOSSDK_DIR)/lib/ceif.o \
        $(vrx_EOSSDK_DIR)/lib/ssl2.o\
        $(vrx_SYSROOT_DIR)/lib/PED.o \
        $(vrx_SYSROOT_DIR)/lib/voyns.o \
        $(vos_ADK_DIR)/vrx/lib/libsysino.so \
        $(vos_ADK_DIR)/vrx/lib/libposix.so \
        $(vos_ADK_DIR)/vrx/lib/libvfiipc.so \
        $(vos_ADK_DIR)/vrx/lib/libvfiguiprt.so
```

* Linking with these libraries requires also modifying the application header with: 

```cpp
vrxhdr = -l NET.LIB=N:/NET.LIB \
         -l CEIF.LIB=N:/CEIF.LIB \
         -l SSL2.LIB=N:/SSL2.LIB \
         -l ELOG.LIB=N:/ELOG.LIB \
         -l PED.LIB=T:1/PED.LIB \
         -l VOYNS.LIB=I:/VOYNS.LIB
```



### Compiling and Linking for V/OS

Please note, vos_SYSROOT_DIR should target V/OS SDK directory and vos_ADK_DIR should target used ADK directory



```cpp
vos_LDFLAGS = \
    --sysroot $(vos_SYSROOT_DIR) \
    -L$(vos_SYSROOT_DIR)/usr/local/lib \
    -L$(vos_SYSROOT_DIR)/usr/local/lib/svcmgr \
    -L$(vos_ADK_DIR)/vos/lib/
    -Wl,\
    -rpath-link=$(vos_SYSROOT_DIR)/usr/local/lib/svcmgr \
    -rpath-link=$(vos_SYSROOT_DIR)/usr/local/lib/ \
    -rpath-link=$(vos_ADK_DIR)/vos/lib/
```

Linking with libsysinfo.so: 

```cpp
vos_LIBS = -lvfisysinfo
```

Linking with libsysbar.so: 

```cpp
vos_LIBS = -lvfisysbar
```


## Deliverables and Deployment

The ADK SYS distribution package contains a demo application that comes with this documentation. The application demonstrates the usage of ADK SYS interface including the implementation of a system statusbar. The application can run on Verix eVo, V/OS, and V/OS2 platforms. The README file contains instructions for building and downloading the demo.


# Troubleshooting


## Possible deadlock while handling statusbar

Statusbar value handling is protected by mutexes. If applications has multiple threads and have their own mutex protection in statusbar callback function(see sysStartStatusbarURLReturnVal()) and if the same mutex is locked before calling [sysRefreshStatusBar()](namespacevfisysinfo.md#function-sysrefreshstatusbar). This can lead to a situation where dead lock occurs ( sysRefreshStatusBar is waiting for the system mutex to unlock and statusbar cb is waiting for application mutex to unlock). Since these values are protected on system level no addition protection needed on application level. 


## Logging

ADK SYS uses "new" logging method via configuration file in JSON format. Please refer to the ADK-LOG documentation for details.

The logging ID for this component is `"SYS"`. In order to lookup the corresponding configuration file, ADKLOG uses component identifiers, which are reserved for each ADK component. For the `SYS` component, configuration file is `SYS_log.conf\n`


# Appendix


## Acronym Definitions


| Acronym  | Definitions   |
|  -------- | -------- |
| ADK  | Application Development Kit   |
| API  | Application Program Interface   |
| GUI  | Graphical User Interface   |
| IPC  | Inter-Proces Communication   |
| HTML  | HyperText Markup Language   |
| UI  | User InTerface   |
| OS  | Operating System   |
| CP  | Commerce Platform   |
| CPA  | Commerce Platform Application   |
| CPR  | Commerce Platform Runtime   |
| ASL  | ADK system launcher   |



# Appendix: Notification interface

ADK-SYS allows some commands to be invoked via ADK-IPC notifications. First applications needs to register callback for response notification. Then applications need to generate json with payload and send it to "SYS" application id. ADK-SYS will send response notification with corresponding payload.


| Request notification  | Response notification  | Description   |
|  -------- | -------- | -------- |
| EXT_SYS_DEVICE_CONTROL_REQ  | EXT_SYS_DEVICE_CONTROL_RESP  | These notifications are used by Android OS on dual chip solutions   |


Not all commands are allowed for external callers (via EXT_SYS_DEVICE_CONTROL_REQ). Please see table for accepted command list.


Example: 

```cpp
void cb( void *data,
    const std::string &from,
    const std::string &to,
    const std::string &notification_id,
    const vfiipc::JSObject &jsobj,
    unsigned flags)
{
    // Process response here
}

// init ADK-IPC
vfiipc::ipcSetAppID( "demo" );
// register response callback
vfiipc::ipcRegisterNotificationCB( "EXT_SYS_DEVICE_CONTROL_REQ" , cb, NULL );
// generate json payload
vfiipc::JSObject jsobj;
jsobj("cmd")="device_info";
vfiipc::ipcNotify("SYS","_MacControlRequest", jsobj, 0 );
```

Supported command list: 
| Command  | External  | Description  | Request example  | Response example   |
|  -------- | -------- | -------- | -------- | -------- |
| device_info  | +  | Get information about device  | 

```cpp
{"cmd":"device_info"}
```

 | 

```cpp
{"adk_version":"ADK-latest","app_mgn_version":"13.18.0","kernel_version":"3.14.43-vf.1.92.0","mib_version":"003 ", "model_name":"P400 DMSR","open_prot_version":"2.0.0","os_version":"dev-31410101-2020-01-15-2107", "part_no":"M435-103-05-JPA-5","release_version":"dev-31410101-2020-01-15-2107","result":"OK", "rfs_version":"1.95.0","sec_boot_version":"2013.10-vf.1.54.0","serial_no":"803-310-429", "sponsor_id":"010245","sred_version":"11.0.0","sred_mode":"010","status":0,"vault_version":"9.12.0"}  
```

 |
| get_app_list  | +  | Get list of available applications  | 

```cpp
{"cmd":"get_app_list"}
```

 | 

```cpp
{"appList":[ {"Active":true, "AppId":"ccp", "AppLabel":"Com Control", "AppName":"ccp", "AppVersion":"1.8.0-pre-103","CPApp":false, "Desktop": {"AppLabel":"Com Control", "Type":"app"}, "Running":false, "Type":"app"}, {"Active":true,"AppId":"cpdownloader", "AppLabel":"cpdownloader", "AppName":"cpdownloader", "AppVersion":"2.31.0", "CPApp":false, "Desktop":{"AppLabel":"cpdownloader", "Type":"app"}, "Running":false,"Type":"app"}], "result":"OK", "status":0} 
```

 |
| key_info  | +  | Get warrantied key list  | 

```cpp
{"cmd":"key_info"} 
```

 | 

```cpp
{"AllExpectedKeys":true, "ExpectedKeys":[{"Name":"VRK"}, {"Name":"RSAO10"}, {"Name":"RSAVT00"}, {"Name":"ECCVT00"}], "MissingKeys":null, "WarrantiedKeys":[ {"Date instaled" : 1552968814, "Key":0, "Name":"VRK", "Status":"Installed", "Timestamp":"FFFFFFFFFFFFFF", "Type":86, "User":0}, {"Date instaled":1552968815, "Key":0, "Name":"ECCVT00", "Status":"Installed", "Timestamp":"FFFFFFFFFFFFFF", "Type":69, "User":0}, {"Date instaled":1552968818, "Key":0, "Name":"RSAVT00", "Status":"Installed", "Timestamp":"20190319112143", "Type":82, "User":0}, {"Date instaled":1552968816, "Key":0,"Name":"RSAOS10", "Status":"Installed", "Timestamp":"20190319112143", "Type":82, "User":1}]} 
```

 |
| pkg_list  | +  | [Get package list](namespacevfimac.md#function-sysgetapplist) | 

```cpp
{"cmd":"pkg_list"}
```

 | 

```cpp
{"result":"OK","status":0,"value":[ {"bundledate":"","bundlename":"rfsbundle","bundleversion":"1.56.13.10113","name":"alsa-lib","signer":"os","type":"os","user":"root","version":"1.0.0"}, {"bundledate":"","bundlename":"alsa-utils","bundleversion":"1.0.0","name":"alsa-utils","signer":"os","type":"os","user":"root","version":"1.0.0"}] } 
```

 |
| version  | +  | [Get MAC version](namespacevfimac.md#function-sysmac-getversion) | 

```cpp
{"cmd":"version" } 
```

 | 

```cpp
{"result":"OK","status":0,"version":"3.71.5-Snapshot"} 
```

 |
| get_time  | +  | Get time  | 

```cpp
{"cmd":"get_time"}
```

 | 

```cpp
{"status": 0, "result" : "OK", "value":"2017-07-24T08:00:35:100+01:00"} 
```

 |
| set_time  | +  | Set time  | 

```cpp
{"cmd":"set_time", "value":"2017-07-24T08:00:35:100+01:00"} 
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| set_env_data  | +  | [set CPR environment values](namespacevfimac.md#function-syssetcpenvdata) | 

```cpp
{"cmd":"set_env_data", "data":{"name1":"test1","name2":"test2"} 
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| to_foreground  | +  | [Bring application to foreground](namespacevfimac.md#function-systoforeground) | 

```cpp
{"cmd":"to_foreground","appid":"demo1"}
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| show_prev_app  | +  | [Show previously visible application](namespacevfimac.md#function-sysshowprevapp) | 

```cpp
{"cmd":"show_prev_app"}
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| show_desktop  | +  | [Show MAC desktop](namespacevfimac.md#function-sysshowdesktop) | 

```cpp
{"cmd":"show_dekstop"}
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| launch_appid  | -  | [Launch application](namespacevfimac.md#function-syslaunchappid) | 

```cpp
{"cmd":"launch_appid","appid":"demo1"}
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| stop_appid  | -  | [Stop application](namespacevfimac.md#function-sysstopappid) | 

```cpp
{"cmd":"stop_appid","appid":"demo1"}
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| autolaunch  | -  | [Relaunch applications](namespacevfimac.md#function-sysrelaunchapps) | 

```cpp
{"cmd":"autolaunch"}
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| scan_manifests  | -  | [Rescan manifest files](namespacevfimac.md#function-sysscanmanifests) | 

```cpp
{"cmd":"scan_manifests"}
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| audio_volume  | +  | Set device volume level  | 

```cpp
{"cmd":"audio_volume", "value":"60" } 
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |
| keyboard_backlight  | +  | Set keyboard backlight level  | 

```cpp
{"cmd":"keyboard_backlight", "value":"30" } 
```

 | 

```cpp
{"status": 0, "result" : "OK"} 
```

 |


Return notification will always have two fields indicating request status. 
| Field name  | Type  | Values  | Description   |
|  -------- | -------- | -------- | -------- |
| result  | string  | "OK"/"FAIL"  | General status   |
| status  | int  | [vfimac::macError](namespacevfimac.md#enum-macerror) | Error code   |


if MAC is not running, you will receive notification unicast error. Please see ADK-IPC documentation for more information.


MAC notification interface usage example:



```cpp
void device_resp_callback(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags)
{
    LOGF_TRACE( lh, "trigger from[%s] to[%s] id[%s] flags[%d] jsobj[%s]",
            from.c_str(),
            to.c_str(),
            notification_id.c_str(),
            flags,
            jsobj.dump().c_str() );
}

const int SUCCEED = 0;
const int FAIL = -1;
const std::string one_receiver("1");
const std::string appid( "MACDEMO2" );
const std::string device_control_request_trigger("EXT_SYS_DEVICE_CONTROL_REQ");
const std::string device_control_response_trigger("EXT_SYS_DEVICE_CONTROL_RESP");

vfiipc::ipcSetAppID( appid );
vfiipc::ipcRegisterNotificationCB( device_control_response_trigger, device_resp_callback, NULL );
vfiipc::JSObject jsobj;
jsobj("cmd")="get_time";
vfiipc::ipcNotify(one_receiver, device_control_request_trigger, jsobj, 0 );
```

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100
