---
title: sys/export/sysinfo/sysinfo.h

---

# sys/export/sysinfo/sysinfo.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysinfo](namespacevfisysinfo.md)**  |




## Source code

```cpp
#pragma once

#include <string>
#include "dllspec.h"
#include "syserror.h"

#ifndef DOXYGEN

namespace vfisysinfo
{
#endif


enum displayContrastConstants
{
    ContrastMin     = 1,  
    ContrastDefault = 8,  
    ContrastMax     = 15, 
    ContrastUp      = 64, 
    ContrastDown    = 65  
};

enum batteryTechnology
{
    BattTUnknown = 0,     
    BattTNiMH    = 1,     
    BattTLiIon   = 2,     
    BattTLiPoly  = 3,     
    BattTLiFe    = 4,     
    BattTNiCd    = 5,     
    BattTLiMn    = 6      
};

enum deviceMode
{
    DEVICE_MANUF  = 0,    
    DEVICE_PROD   = 1,    
    DEVICE_OS_DEV = 2,    
    DEVICE_CP_DEV = 3     
};

enum batteryChargeMode
{
    UNRESTRICTED_CHARGE_MODE = 1, 
    CAR_CHARGER_MODE         = 2, 
};

enum chargingPort
{
    CHARGING_USB_C_PORT  = 0,  
    CHARGING_POGO_PORT   = 1,  
};

enum sysUSBmode
{
    SYS_USB_UNKNOWN = 0,  
    SYS_USB_DEFAULT = 1,  
    SYS_USB_HOST    = 2,  
    SYS_USB_DEVICE  = 3,  
};

enum deviceType
{
    DEVICE_NON_PORTABLE = 0, 
    DEVICE_HANDSET      = 1, 
    DEVICE_BASE         = 2, 
    DEVICE_MOBILE       = 3  
};

enum batteryType
{
    BATTERY_TYPE_SMART  = 1, 
    BATTERY_TYPE_SIMPLE = 2  
};

enum keyboardType
{
    KEYBOARD_TYPE_UNKNOWN  = 0, 
    KEYBOARD_TYPE_STANDARD = 3, 
    KEYBOARD_TYPE_EBS100   = 4, 
    KEYBOARD_TYPE_ARABIC   = 5, 
    KEYBOARD_TYPE_RNIB     = 6  
};

enum SYSPropertyInt
{
    SYS_PROP_BATTERY_AVAILABLE=0,            
    SYS_PROP_BATTERY_STATUS_OK=1,            
    SYS_PROP_BATTERY_DEVICE=2,               
    SYS_PROP_BATTERY_VOLTAGE=3,              
    SYS_PROP_BATTERY_CAPACITY=4,             
    SYS_PROP_BATTERY_CHARGE_LEVEL=5,         
    SYS_PROP_BATTERY_CHARGING=10,            
    SYS_PROP_BATTERY_FULL=11,                
    SYS_PROP_BATTERY_TEMP=13,                
    SYS_PROP_BATTERY_CURRENT=14,             
    SYS_PROP_BATTERY_CRITICAL=18,            
    SYS_PROP_BATTERY_LOW=19,                 
    SYS_PROP_BATTERY_NORMAL=20,              
    SYS_PROP_BATTERY_TECHNOLOGY=700,         
    SYS_PROP_BATTERY_FCC=701,                
    SYS_PROP_BATTERY_SOH=702,                
    SYS_PROP_BATTERY_CHARGE_IN_SLEEP=21,     
    SYS_PROP_BATTERY_CALIBRATION=705,        
    SYS_PROP_BATTERY_TYPE=706,               
    SYS_PROP_BATTERY_CHARGE_MODE=707,        
    SYS_PROP_CHARGE_CYCLE_COUNT=704,         
    SYS_PROP_UX100_AVAILABLE=22,             
    SYS_PROP_UX100_OPERATIONAL_MODE=24,      
    SYS_PROP_UX100_BACKLIGHT=209,            
    SYS_PROP_UX400_AVAILABLE=23,             
    SYS_PROP_UX115_UNIT=26,                  
    SYS_PROP_UX_UNIT=25,                     
    SYS_PROP_INTERNAL_BATTERY_STATUS=7,      
    SYS_PROP_INTERNAL_BATTERY_VOLTAGE=8,     
    SYS_PROP_DOCKING_STATUS=6,               
    SYS_PROP_DOCK_SUPPORT=15,                
    SYS_PROP_USB1_MODE=16,                   
    SYS_PROP_USB2_MODE=17,                   
    SYS_PROP_USB1_CONFIGURABLE=27,           
    SYS_PROP_USB2_CONFIGURABLE=28,           
    SYS_PROP_USB1_DEFAULT=29,                
    SYS_PROP_USB2_DEFAULT=30,                
    SYS_PROP_USB1_CHARGE=31,                 
    SYS_PROP_USB2_CHARGE=32,                 
    SYS_PROP_USB_HIGH_POWER_MODE=38,         
    SYS_PROP_PRINTER_AVAILABLE=9,            
    SYS_PROP_POWER_STATUS=12,                
    SYS_PROP_POWER_ON=39,                    
    SYS_PROP_CHARGE_ON_SAVING=703,           
    SYS_PROP_KEYBOARD_BEEP=100,              
    SYS_PROP_KEYB_BACKLIGHT=101,             
    SYS_PROP_KEYBOARD_HW=102,                
    SYS_PROP_KEYBOARD_SIZE=103,              
    SYS_PROP_DISP_CONTRAST=200,              
    SYS_PROP_DISP_BACKLIGHT=201,             
    SYS_PROP_DISP=202,                       
    SYS_PROP_DISP_HW=203,                    
    SYS_PROP_DISP_COLOR=205,                 
    SYS_PROP_DISP_HEIGHT=206,                
    SYS_PROP_DISP_WIDTH=207,                 
    SYS_PROP_DISP_TOUCH=208,                 
    SYS_PROP_ANDROID=204,                    
    SYS_PROP_HW_RAM_SIZE=300,                
    SYS_PROP_HW_RAM_USED=302,                
    SYS_PROP_HW_FLASH_SIZE=301,              
    SYS_PROP_HW_FLASH_USED=303,              
    SYS_PROP_HW_EXE_PARTITION_SIZE=307,      
    SYS_PROP_HW_EXE_PARTITION_USED=308,      
    SYS_PROP_HW_DATA_PARTITION_SIZE=309,     
    SYS_PROP_HW_DATA_PARTITION_USED=310,     
    SYS_PROP_HW_TOUCH_GROUNDED=306,          
    SYS_PROP_LED=304,                        
    SYS_PROP_PCI=305,                        
    SYS_PROP_VOLUME=400,                     
    SYS_PROP_SPEAKER_AVAILABLE=401,          
    SYS_PROP_BUZZER_AVAILABLE=402,           
    SYS_PROP_ADE_STATUS=500,                 
    SYS_PROP_CERT_SPONSOR_PROD=501,          
    SYS_PROP_ATTACK_STATUS=502,              
    SYS_PROP_ATTACK_STATUS_CODE=513,         
    SYS_PROP_VCL_ENCRYPTION_STATUS=503,      
    SYS_PROP_VOLTAGE_ENCRYPTION_STATUS=504,  
    SYS_PROP_POSEIDON_ENCRYPTION_STATUS=505, 
    SYS_PROP_NAVIGATOR_STATUS=506,           
    SYS_PROP_SERVICE_SWITCH_STATUS=507,      
    SYS_PROP_DEVICE_MODE=508,                
    SYS_PROP_SYSMODE_BUTTON=509,             
    SYS_PROP_DEVICE_TYPE=510,                
    SYS_PROP_VATS=512,                       
    SYS_PROP_UX100_ANTI_REMOVAL_SWITCH=511,  
    SYS_PROP_SLP_TAINTED_STATUS=514,         
    SYS_PROP_UPTIME=600,                     
    SYS_PROP_BARCODE_SCANNER=33,             
    SYS_PROP_CAMERA=34,                      
    SYS_PROP_SWITCH_THRESHOLD_VOLTAGE=35,    
    SYS_PROP_LOW_THRESHOLD_VOLTAGE=36,       
    SYS_PROP_CONSOLE_STATE=37,               
    SYS_PROP_UX_MDB = 40,                    
    SYS_PROP_CARD_SLOT2_MODE=41,             
    SYS_PROP_CARD_SLOT_COUNT=42,             
    SYS_PROP_KEYBOARD_TYPE=43,               
    SYS_PROP_EXT_NFC_ANTENNA=44,             
    SYS_PROP_VRK2_SUPPORT=45,                
    SYS_PROP_USB_C_CHARGING_STATE=708,       
    SYS_PROP_POGO_CHARGING_STATE=709,        
    SYS_PROP_ECC_VRK_SUPPORT=46,             
    SYS_PROP_LCD_PANEL_ID=47,                
    SYS_PROP_VRK_CERT_INSTALLED=48,          
    SYS_PROP_VRK_PACKAGING_UVRK_SUPPORT=49,  
    SYS_PROP_POGO_DATA_STATE=710,            
    SYS_PROP_ANDROID_PREFIX_LENGTH=50,       
    SYS_PROP_UX100_TYPE=51,                  
};

enum SYSPropertyString
{
    SYS_PROP_HW_MODEL_NAME=0,                
    SYS_PROP_HW_MODEL_NAME_SHORT=54,         
    SYS_PROP_HW_SERIALNO=1,                  
    SYS_PROP_OS_VERSION=2,                   
    SYS_PROP_HW_PTID=3,                      
    SYS_PROP_HW_VARIANT_NAME=4,              
    SYS_PROP_HW_PART_NO=5,                   
    SYS_PROP_HW_VERSION=6,                   
    SYS_PROP_HW_LOT_NO=7,                    
    SYS_PROP_BOOT_VERSION=8,                 
    SYS_PROP_TERMINAL_SPONSOR=9,             
    SYS_PROP_MANUF_DATE=10,                  
    SYS_PROP_CERT_SPONSOR_SN=11,             
    SYS_PROP_CERT_SPONSOR_MODE=12,           
    SYS_PROP_ADK_VERSION=14,                 
    SYS_PROP_UX100_SERIALNO=13,              
    SYS_PROP_UX100_PARTNO=65,                
    SYS_PROP_UX100_FW_VERSION=15,            
    SYS_PROP_SBI_VERSION=16,                 
    SYS_PROP_VAULT_VERSION=17,               
    SYS_PROP_CIB_VERSION=18,                 
    SYS_PROP_MIB_VERSION=19,                 
    SYS_PROP_KERNEL_VERSION=20,              
    SYS_PROP_RFS_VERSION=21,                 
    SYS_PROP_RELEASE_VERSION=22,             
    SYS_PROP_RFS_SECURITY_VERSION=23,        
    SYS_PROP_SRED_VERSION=24,                
    SYS_PROP_SRED_MODE=75,                   
    SYS_PROP_OPENPROTOCOL_VERSION=25,        
    SYS_PROP_PCI_REBOOT_TIME=26,             
    SYS_PROP_FILE_NAME_TO_INSTALL=27,        
    SYS_PROP_MSR_COUNTERS=29,                
    SYS_PROP_SCR_COUNTERS=30,                
    SYS_PROP_CTLS_COUNTERS=58,               
    SYS_PROP_DOCK_STATION_SN=31,             
    SYS_PROP_DOCK_STATION_PN=32,             
    SYS_PROP_DOCK_STATION_MODEL=33,          
    SYS_PROP_DOCK_STATION_MAC=34,            
    SYS_PROP_DOCK_STATION_HW_REV=35,         
    SYS_PROP_DOCK_STATION_INSTALL=36,        
    SYS_PROP_GSM_FIRMWARE_VERSION=37,        
    SYS_PROP_DOCK_STATION_OS_VERSION=38,     
    SYS_PROP_DOCK_STATION_IP_ADDRESS=39,     
    SYS_PROP_DOCK_STATION_IP_V6_ADDRESS=51,  
    SYS_PROP_DOCK_STATION_USB1_IP_ADDRESS=57,
    SYS_PROP_ANDROID_IP_V4_ADDRESS=59,       
    SYS_PROP_ANDROID_IP_V6_ADDRESS=66,       
    SYS_PROP_ANDROID_MAC=67,                 
    SYS_PROP_WARRANTIED_KEYS=53,             
    SYS_PROP_SECAPP_VERSION=40,              
    SYS_PROP_VSS_VERSION=41,                 
    SYS_PROP_STBY_MCU_VERSION=42,            
    SYS_PROP_EXT_STORAGE=43,                 
    SYS_PROP_INSTALLED_PCKG_LIST=28,         
    SYS_PROP_PKG_LIST=28,                    
    SYS_PROP_APP_PKG_LIST=44,                
    SYS_PROP_BUNDLE_LIST=45,                 
    SYS_PROP_APP_BUNDLE_LIST=49,             
    SYS_PROP_MSR_INFO=46,                    
    SYS_PROP_SCR_INFO=47,                    
    SYS_PROP_CTLS_INFO=48,                   
    SYS_PROP_HW_STRING=50,                   
    SYS_PROP_DEV_ID=52,                      
    SYS_PROP_FET=55,                         
    SYS_PROP_BT_MAC=60,                      
    SYS_PROP_WIFI_MAC=61,                    
    SYS_PROP_ETH_MAC=62,                     
    SYS_PROP_ETH2_MAC=63,                    
    SYS_PROP_COUNTRY=64,                     
    SYS_PROP_RTC=100,                        
    SYS_PROP_NTP_SERVER=101,                 
    SYS_PROP_BATTERY_SERIALNO=200,           
    SYS_PROP_TIME_ZONE=300,                  
    SYS_PROP_TIME_ZONE_LIST=301,             
    SYS_PROP_TIME_ZONE_FROM_FILE=302,        
    SYS_PROP_TIME_ZONE_NAME=304,             
    SYS_PROP_TIME_ISO8601=303,               
    SYS_PROP_REBOOT_REASON=400,              
    SYS_PROP_ALL_LOADED_KEYS=56,             
    SYS_PROP_ALL_LOADED_KEYS_V2=80,          
    SYS_PROP_TAMPER_RECORDS=68,              
    SYS_PROP_BARCODE_SCANNER_FW_VERSION=69,  
    SYS_PROP_ANDROID_VERSION=70,             
    SYS_PROP_STATUSBAR_COLOR=71,             
    SYS_PROP_ANDROID_TIME=72,                
    SYS_PROP_MTD_INFO=73,                    
    SYS_PROP_HW_ID=74,                       
    SYS_PROP_LCD_PANEL_MODEL=76,             
    SYS_PROP_DT_NAME=77,                     
    SYS_PROP_PCI_APPS=78,                    
    SYS_PROP_FW_PCI_VERSION=79,              
    SYS_PROP_HW_MODEL_NAME_SEC=81,           
    SYS_PROP_MOBILE_RADIO_SW_VERSION=82,     
    SYS_PROP_TOUCH_NAME=83,                  
    SYS_PROP_TOUCH_HW_VERSION=84,            
    SYS_PROP_TOUCH_SW_VERSION=85,            
    SYS_PROP_TOUCH_CONFIG_VERSION=86,        
    SYS_PROP_ANDROID_GATEWAY=87,             
    SYS_PROP_ANDROID_DNS1=88,                
    SYS_PROP_ANDROID_DNS2=89,                
};

SYS_INFO_API int sysGetPropertyInt(enum SYSPropertyInt property, int & value);

SYS_INFO_API int sysGetPropertyInt(enum SYSPropertyInt property, int * value);

SYS_INFO_API int sysSetPropertyInt(enum SYSPropertyInt property, int value);

SYS_INFO_API int sysGetPropertyString(enum SYSPropertyString property, char * value, int len);

SYS_INFO_API int sysSetPropertyString(enum SYSPropertyString property, const char * value);

SYS_INFO_API int sysGetPropertyString(enum SYSPropertyString property, std::string & value);

SYS_INFO_API int sysSetPropertyString(enum SYSPropertyString property, const std::string & value);

SYS_INFO_API const char *sysInfo_GetVersion();

SYS_INFO_API const char *sysLibInfo_GetVersion();

SYS_INFO_API const char *sysGetVersion();

SYS_INFO_API int sysReboot();

SYS_INFO_API int sysSleep();

SYS_INFO_API int sysDeepSleep();

SYS_INFO_API int sysHibernate();

SYS_INFO_API int sysShutdown();

SYS_INFO_API int sysRebootDock();

SYS_INFO_API std::string sysErrorMsg( enum sysError code );

SYS_INFO_API const char * sysErrorMessage( enum sysError code );

inline const char * sysSDKVersion()
{
    return "UNSUPPORTED";
}

#ifndef DOXYGEN
} // namespace vfisysinfo
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
