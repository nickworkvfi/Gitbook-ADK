---
title: adk_sysinfo_programmers_guide.dox

---

# adk_sysinfo_programmers_guide.dox






## Source code

```cpp

  SYS_ERR_PROP_UNSUPPORTED   = -1,  
  SYS_ERR_PROP_READ_ONLY     = -2,  
  SYS_ERR_PROP_WRITE_ONLY    = -3,  
  SYS_ERR_PARAMETER          = -4,  
  SYS_ERR_PERMISSION         = -5,  
  SYS_ERR_REGION             = -6,  
  SYS_ERR_FAIL               = -7,  
  SYS_ERR_UNSUPPORTED        = -8,  
  SYS_ERR_ACTIVE_TIMEZONE    = -9,  
  SYS_ERR_INSTALL_LIMIT      = -10, 
  SYS_ERR_REBOOT_NEEDED      = -11, 
  SYS_ERR_FILE_DOES_NOT_EXIST= -12, 
  SYS_ERR_BUNDLE_VERSION     = -13, 
  SYS_ERR_EXISTS             = -14, 
  SYS_ERR_ACCESS             = -15, 
  SYS_ERR_NOT_DOCKED         = -16, 
  SYS_ERR_KEY_MISSING        = -17, 
  SYS_ERR_EXPECTED_KEY       = -18, 
  SYS_ERR_CONFIGURATIION     = -19, 
  SYS_ERR_PATHNAME_TOO_LONG  = -20, 
  SYS_ERR_GET_CWD            = -21, 
  SYS_ERR_IPC                = -22, 
  SYS_ERR_RUNNING            = -23, 
  SYS_ERR_SDI_NOT_CONNECTED  = -24, 
  SYS_ERR_CALCULATING        = -25, 
  SYS_ERR_BASE_CTRL_NOT_AVAILABLE = -26, 
  SYS_ERR_ANDROID_NOT_AVAILABLE   = -27, 
};
\endcode


\b enum \b displayContrastConstants()

Display contrast constants for SYS_PROP_DISP_CONTRAST property. (Verix only)
\code
enum displayContrastConstants
{
    ContrastMin = 1,
    ContrastDefault = 8,
    ContrastMax = 15,
    ContrastUp = 64,
    ContrastDown = 65
};
\endcode

\b enum \b SYSPropertyInt()

Int type system properties.
\code
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
    SYS_PROP_BATTERY_CHARGE_IN_SLEEP=21,     
    SYS_PROP_UX100_AVAILABLE=22,             
    SYS_PROP_UX400_AVAILABLE=23,             
    SYS_PROP_UX100_OPERATIONAL_MODE=24,      
    SYS_PROP_UX100_BACKLIGHT=209,            
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
    SYS_PROP_PRINTER_AVAILABLE=9,            
    SYS_PROP_POWER_STATUS=12,                
    SYS_PROP_CHARGE_ON_SAVING=703,           
    SYS_PROP_CHARGE_CYCLE_COUNT=704,         
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
    SYS_PROP_HW_FLASH_SIZE=301,              
    SYS_PROP_HW_RAM_USED=302,                
    SYS_PROP_HW_FLASH_USED=303,              
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
    SYS_PROP_SLP_TAINTED_STATUS=514          
    SYS_PROP_VCL_ENCRYPTION_STATUS=503,      
    SYS_PROP_VOLTAGE_ENCRYPTION_STATUS=504,  
    SYS_PROP_POSEIDON_ENCRYPTION_STATUS=505, 
    SYS_PROP_NAVIGATOR_STATUS=506,           
    SYS_PROP_SERVICE_SWITCH_STATUS=507,      
    SYS_PROP_DEVICE_MODE=508,                
    SYS_PROP_SYSMODE_BUTTON=509,             
    SYS_PROP_DEVICE_TYPE=510,                
    SYS_PROP_UX100_ANTI_REMOVAL_SWITCH=511,  
    SYS_PROP_UPTIME=600,                     
    SYS_PROP_BARCODE_SCANNER=33,             
    SYS_PROP_CAMERA=34,                      
    SYS_PROP_BATTERY_CALIBRATION=705,        
    SYS_PROP_BATTERY_TYPE=706,               
    SYS_PROP_BATTERY_CHARGE_MODE=707,        
    SYS_PROP_SWITCH_THRESHOLD_VOLTAGE=35,    
    SYS_PROP_LOW_THRESHOLD_VOLTAGE=36,       
    SYS_PROP_CONSOLE_STATE=37,               
    SYS_PROP_USB_HIGH_POWER_MODE=38,         
    SYS_PROP_UX_MDB = 40,                    
    SYS_PROP_CARD_SLOT2_MODE=41,             
    SYS_PROP_CARD_SLOT_COUNT=42,             
    SYS_PROP_KEYBOARD_TYPE=43,               
    SYS_PROP_EXT_NFC_ANTENNA=44,             
    SYS_PROP_VRK2_SUPPORT=45,                
    SYS_PROP_USB_C_CHARGING_STATE = 708,     
    SYS_PROP_POGO_CHARGING_STATE = 709,      
    SYS_PROP_ECC_VRK_SUPPORT=46,             
    SYS_PROP_LCD_PANEL_ID = 47,              
    SYS_PROP_VRK_CERT_INSTALLED = 48,        
    SYS_PROP_VRK_PACKAGING_UVRK_SUPPORT=49,  
    SYS_PROP_POGO_DATA_STATE=710,            
    SYS_PROP_ANDROID_PREFIX_LENGTH=50,       
    SYS_PROP_UX100_TYPE=51,                  
};
\endcode


\b enum \b SYSPropertyString()

String type system properties.
\code
enum SYSPropertyString {
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
    SYS_PROP_UX100_SERIALNO=13,              
    SYS_PROP_ADK_VERSION=14,                 
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
    SYS_PROP_RTC=100,                        
    SYS_PROP_NTP_SERVER=101,                 
    SYS_PROP_BATTERY_SERIALNO=200,           
    SYS_PROP_TIME_ZONE=300,                  
    SYS_PROP_TIME_ZONE_LIST=301,             
    SYS_PROP_TIME_ZONE_FROM_FILE=302,        
    SYS_PROP_TIME_ZONE_NAME=304,             
    SYS_PROP_TIME_ISO8601=303,               
    SYS_PROP_REBOOT_REASON=400               
    SYS_PROP_ALL_LOADED_KEYS=56,             
    SYS_PROP_ALL_LOADED_KEYS_V2=80,          
    SYS_PROP_UX100_PARTNO=65,                
    SYS_PROP_TAMPER_RECORDS=68,              
    SYS_PROP_ANDROID_VERSION=70,             
    SYS_PROP_STATUSBAR_COLOR=71,             
    SYS_PROP_ANDROID_TIME=72,                
    SYS_PROP_MTD_INFO=73,                    
    SYS_PROP_HW_ID=74,                       
    SYS_PROP_LCD_PANEL_MODEL = 76,           
    SYS_PROP_DT_NAME=77,                     
    SYS_PROP_TOUCH_NAME=83,                  
    SYS_PROP_TOUCH_HW_VERSION=84,            
    SYS_PROP_TOUCH_SW_VERSION=85,            
    SYS_PROP_TOUCH_CONFIG_VERSION=86,        
    SYS_PROP_ANDROID_GATEWAY=87,             
    SYS_PROP_ANDROID_DNS1=88,                
    SYS_PROP_ANDROID_DNS2=89,                
};
\endcode


<b>SYSPropertyString SYS_PROP_REBOOT_REASON possible values</b>

Value | Description
---------|------------
\c 24H      | 24 hour reboot timer
\c WARM     | Reboot with power still connected to device
\c COLD     | Complete removal of power and restart
\c JTAG     | IcePick reset event. This is a source of global warm reset initiated by the emulation.
\c EXT_WARM | External warm reset event
\c 1WDT     | Watchdog1 timer reset event.
\c 0WDT     | Watchdog0 timer reset event.
\c MPU_SEC  | Security violation reset event triggered by Security State Machine inside MPUSS.

\anchor subsubsec_sysinfo_json_examples
<h4>JSON examples</h4>

SYS_PROP_WARRANTIED_KEYS :
\code
    {
        "Date instaled":1552968814,
        "Key":0,
        "Name":"VRK",
        "Status":"Installed",
        "Timestamp":"FFFFFFFFFFFFFF",
        "Type":86,
        "User":0
    }
\endcode

SYS_PROP_ALL_LOADED_KEYS:

\code
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
            "KBH":  "D2832S0RS00N07001012ADKCOM_TLS_Gen110601LB12ADKCOM_TLS_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KP1001D77F007724TS1320220919134643ZPB0B0000000"
        }],
}

\endcode

SYS_PROP_EXT_STORAGE:
\code
{
   "dir":"/media/mmcblk0p1",
   "fsname":"/dev/mmcblk0p1",
   "opts":"rw,relatime,gid=1002,fmask=0007,dmask=0007,allow_utime=0020,codepage=437,iocharset=iso8859-1,shortname=mixed,errors=remount-ro",
   "type":"vfat"
}
\endcode

SYS_PROP_INSTALLED_PCKG_LIST:
\code
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
\endcode

SYS_PROP_APP_PKG_LIST:
\code
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
\endcode

SYS_PROP_BUNDLE_LIST:
\code
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
\endcode

SYS_PROP_APP_BUNDLE_LIST:
\code
   {
      "category":"fs",
      "date":"",
      "name":"sysinfo-demo",
      "option":"",
      "user":"usr2",
      "version":"3.83.2"
   }
\endcode

SYS_PROP_MSR_INFO:
\code
{
   "exist":"1",
   "heads":"21",
   "port":"0",
   "tracks":"8",
   "type":"5"
}
\endcode

SYS_PROP_SCR_INFO:
\code
{
   "exist":"1",
   "motor":"0",
   "port":"3",
   "type":"5"
}
\endcode

SYS_PROP_CTLS_INFO:
\code
{
   "config":"0",
   "exist":"1",
   "port":"0",
   "type":"4"
}
\endcode

SYS_PROP_TAMPER_RECORDS:
\code
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

\endcode


\subsubsection subsubsec_sysinfo_System_Statusbar_Functions System Statusbar Functions
The following lists the system statusbar functions.

- \ref subsubsec_sysinfo_typedef_void
- sysStartStatusbarURL() Start a statusbar for the specified region ID using a URL for the HTML document.
- sysStartStatusbarURLReturnVal() Start a statusbar for the specified region ID using a URL for the HTML document with additional return callback.
- sysStartStatusbar() Starts a statusbar for the specified region ID using a URL for the HTML document.
- sysStopStatusbar() Stops the statusbar display and background update for the specified region ID.
- sysSetStatusbarValues() Set user-defined variables of the statusbar.
- sysGetStatusbarValues() Get statusbar user variables.
- sysSetRefreshTime() Set the refresh time of the statusbar.
- sysGetRefreshTime() Get refresh time of the statusbar.
- sysRefreshStatusBar() Triggers the immediate refresh of the statusbar.
- sysStatusbarGetVersion() Returns a zero-terminated string with version and build information of libvfisysbar.

\paragraph subsubsec_sysinfo_typedef_void typedef void ()

Callback function called every time before the statusbar refreshes.
The statusbar is refreshed at regular intervals, which are specified by the refresh time that can be configured with function \c sysSetRefreshTime().
The application may add customized values to map values that should be passed to next \c uiInvoke() to refresh the statusbar.

<h4>Prototype</h4>

\code
sysStatusbarCallback(void data, int region_id, std::map< std::string, std::string > &values)
\endcode

<h4>Parameters</h4>

Type | Name | Description
-----|------|------------
\c in | \a property | Data pointer provided by the application.
\c in | \a region_id | region_id ID of the GUI region, where the statusbar callback is triggered.
\c in, \c out | \a values | Values to be passed to next \c uiInvoke() call for this statusbar. The map already contains values set by \c sysSetStatusbarValues().


<h4>Return Values</h4>

\code
true    if the statusbar should be refreshed, else no refresh is done.
\endcode

<h4>Programming Notes</h4>

It is not allowed to call any statusbar API functions on the same region region_id from inside the callback function. All API functions will return \c SYS_ERR_PERMISSION in this case.

<!--    This description should be moved under the sysStartStatusbarURL function description                 -->
<!--                                                                                                         -->
<!--                                                                                                         -->
<!--\note                                                                                                    -->
<!--The statusbar is automatically updated based on refresh intervals, if a time unit is increased.\n        -->
<!--Example:                                                                                                 -->
<!--- using variable \c sys_time_sec forces a statusbar update every second                                  -->
<!--- using variable \ sys_time_min forces a statusbar update every minute                                   -->
<!--                                                                                                         -->
<!--\warning                                                                                                 -->
<!--\c sys_time_sec may cause a high CPU load, since the GUI server will refresh statusbar region every second.-->



\subsubsection subsubsec_sysinfo_System_Beep_functions System Beep functions
The following lists the system beep functions.

- sysBeepNormal() Plays a 100 ms tone at 880 Hz (error beep tone, same as error_tone() on Verix).
- sysBeepError() Plays a 100 ms tone at 880 Hz (error beep tone, same as error_tone() on Verix).
- sysPlaySound() Plays an arbitrary tone with arbitrary duration and volume.

<!--    This description should be moved under the sysPlaySound function description                         -->
<!--                                                                                                         -->
<!--                                                                                                         -->
<!--\b Verix \b eVo: Volume is not supported on Verix eVo. Beep is played with a system specified volume.-->
<!---->
<!--\b V/OS: Not all values in the table below are supported and note is interpolated to a supported value on this OS.-->


\subsection subsec_sysinfo_System_Installation_Functions System Installation Functions

Provides information on API for installing packages and related functions (see sysinstall.h). These API functions may be used in an application by linking basic library libvfisysinfo.so.

\subsubsection subsubsec_sysinfo_Sys_AuthenticateFile Authenticate File
The function is used for installation package authentication.
\code
vfisysinfo::sysError sysAuthenticateFile(const std::string & path);
\endcode

\subsubsection subsubsec_sysinfo_Sys_Install Install package
The function is used for installing packages on terminals. In case return code is SYS_ERR_REBOOT_NEEDED reboot is required to finish instalation.
\code
vfisysinfo::sysError sysInstall(const std::string & path);
\endcode

\subsubsection subsubsec_sysinfo_Sys_Base_Install Install package on dock station
The function is used for installing packages on dock stations (Example: V240m B-FF).
The package needs to be placed in /mnt/flash/install/dl/ before API is called.
In case return code is SYS_ERR_REBOOT_NEEDED reboot is required to finish instalation.
\code
vfisysinfo::sysError sysBaseInstall();
\endcode

\subsubsection subsubsec_sysinfo_Free_Resources_And_Install Stop all applications and install package
The function stops all applications on the terminal and then installs package. The function is very usefull on terminals with small flash size.
Depending on what action is needed (reboot or restart apps) to extract the packages into the filesystem, the function will do the needful.
The caller upon reboot/restart should call the new status API sysGetInstallStatus() to find out the status of the installation. (VOS2 only)
\code
vfisysinfo::sysError sysFreeResourcesInstall( const std::string & value );
\endcode

\subsubsection subsubsec_sysinfo_Get_Install_Status Get installation status
The function return the last installation status. The result is JSON formatted status for the install API sysFreeResourcesInstall().
\code
vfisysinfo::sysError sysGetInstallStatus( vfiipc::JSObject & json );
\endcode

\section sec_sysinfo_System_Setup_and_Requirements System Setup and Requirements

\subsection subsec_sysinfo_Compiling_and_Linking Compiling and Linking
This chapter details the settings for compiling and linking the ADK SYS library.

\subsubsection subsubsec_sysinfo_Verix_eVo_compiling_and_linking Compiling and Linking for Verix eVo

- Mandatory flags for VRXCC compiler and linker: \n
Both ADK SYS libraries \c libvfisysinfo.so and \c libvfisybar.so were compiled with VRXCC compiler option \c -p to generate ARM11 optimized code. \n
For this reason, an application must use the option \c -p for the VRXCC compiler and linker.

\note
ADK SYS libraries will not run on old Predator platforms and it is not possible to use these libraries for applications using compiler and linker flag \c -b.

Linking with libsysinfo.so:

- Mandatory libraries for linking with VRXCC: \n
\code
vrx_LIBS=\
        $(vrx_EOSSDK_DIR)/lib/svc_net.o \
        $(vrx_EOSSDK_DIR)/lib/elog.o\
        $(vrx_EOSSDK_DIR)/lib/ceif.o \
        $(vrx_EOSSDK_DIR)/lib/ssl2.o\
        $(vrx_SYSROOT_DIR)/lib/PED.o \
        $(vrx_SYSROOT_DIR)/lib/voyns.o \
        $(vos_ADK_DIR)/vrx/lib/libposix.so \
        $(vos_ADK_DIR)/vrx/lib/libvfiipc.so
\endcode

- Linking with these libraries requires also modifying the application header with:
\code
vrxhdr = -l NET.LIB=N:/NET.LIB \
         -l CEIF.LIB=N:/CEIF.LIB \
         -l SSL2.LIB=N:/SSL2.LIB \
         -l ELOG.LIB=N:/ELOG.LIB \
         -l PED.LIB=T:1/PED.LIB \
         -l VOYNS.LIB=I:/VOYNS.LIB
\endcode

Linking with libsysbar.so:

- Mandatory libraries for linking with VRXCC: \n
\code
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
\endcode

- Linking with these libraries requires also modifying the application header with:
\code
vrxhdr = -l NET.LIB=N:/NET.LIB \
         -l CEIF.LIB=N:/CEIF.LIB \
         -l SSL2.LIB=N:/SSL2.LIB \
         -l ELOG.LIB=N:/ELOG.LIB \
         -l PED.LIB=T:1/PED.LIB \
         -l VOYNS.LIB=I:/VOYNS.LIB
\endcode

\subsubsection subsubsec_sysinfo_V_OS_GCC_specific_settings Compiling and Linking for V/OS

Please note, vos_SYSROOT_DIR should target V/OS SDK directory and vos_ADK_DIR should target used ADK directory

\code
    vos_LDFLAGS = \
        --sysroot $(vos_SYSROOT_DIR) \
        -L$(vos_SYSROOT_DIR)/usr/local/lib \
        -L$(vos_SYSROOT_DIR)/usr/local/lib/svcmgr \
        -L$(vos_ADK_DIR)/vos/lib/
        -Wl,\
        -rpath-link=$(vos_SYSROOT_DIR)/usr/local/lib/svcmgr \
        -rpath-link=$(vos_SYSROOT_DIR)/usr/local/lib/ \
        -rpath-link=$(vos_ADK_DIR)/vos/lib/
\endcode

Linking with libsysinfo.so:
\code
    vos_LIBS = -lvfisysinfo
\endcode

Linking with libsysbar.so:
\code
    vos_LIBS = -lvfisysbar
\endcode

\subsection subsec_sysinfo_ADK_SYS_Deliverables_and_Deployment Deliverables and Deployment
The ADK SYS distribution package contains a demo application that comes with this documentation.
The application demonstrates the usage of ADK SYS interface including the implementation of a system statusbar.
The application can run on Verix eVo, V/OS, and V/OS2 platforms. The README file contains instructions for building and downloading the demo.

\section sec_sysinfo_Troubleshooting Troubleshooting

\subsection subsec_sysinfo_troubleshoot1 Possible deadlock while handling statusbar

Statusbar value handling is protected by mutexes. If applications has multiple threads and have their own mutex protection in statusbar callback function(see sysStartStatusbarURLReturnVal()) and if the same mutex is locked before calling sysRefreshStatusBar().
This can lead to a situation where dead lock occurs ( sysRefreshStatusBar is waiting for the system mutex to unlock and statusbar cb is waiting for application mutex to unlock).
Since these values are protected on system level no addition protection needed on application level.
\subsection subsec_inf_Logging Logging
ADK SYS uses "new" logging method via configuration file in JSON format.
Please refer to the ADK-LOG documentation for details.\n
The logging ID for this component is \c "SYS". In order to lookup the corresponding configuration file, ADKLOG uses component identifiers, which are reserved for each ADK component.
For the \c SYS component, configuration file is \c SYS_log.conf\n

\section sec_sysinfo_Appendix Appendix

\subsection subsec_sysinfo_Acronym_Definitions Acronym Definitions

Acronym | Definitions
--------|------------
ADK | Application Development Kit
API | Application Program Interface
GUI | Graphical User Interface
IPC | Inter-Proces Communication
HTML | HyperText Markup Language
UI | User InTerface
OS | Operating System
CP  | Commerce Platform
CPA | Commerce Platform Application
CPR | Commerce Platform Runtime
ASL | ADK system launcher

\section sec_sys_notify Appendix: Notification interface

ADK-SYS allows some commands to be invoked via ADK-IPC notifications.
First applications needs to register callback for response notification.
Then applications need to generate json with payload and send it to "SYS" application id.
ADK-SYS will send response notification with corresponding payload.

| Request notification | Response notification | Description |
|-|-|-|
| EXT_SYS_DEVICE_CONTROL_REQ | EXT_SYS_DEVICE_CONTROL_RESP | These notifications are used by Android OS on dual chip solutions |

\note Not all commands are allowed for external callers (via EXT_SYS_DEVICE_CONTROL_REQ). Please see table for accepted command list.

Example:
\code
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
\endcode

Supported command list:
| Command | External | Description | Request example | Response example |
|-|-|-|-|-|
|device_info| + | Get information about device | \code {"cmd":"device_info"}\endcode | \code {"adk_version":"ADK-latest","app_mgn_version":"13.18.0","kernel_version":"3.14.43-vf.1.92.0","mib_version":"003 ", "model_name":"P400 DMSR","open_prot_version":"2.0.0","os_version":"dev-31410101-2020-01-15-2107", "part_no":"M435-103-05-JPA-5","release_version":"dev-31410101-2020-01-15-2107","result":"OK", "rfs_version":"1.95.0","sec_boot_version":"2013.10-vf.1.54.0","serial_no":"803-310-429", "sponsor_id":"010245","sred_version":"11.0.0","sred_mode":"010","status":0,"vault_version":"9.12.0"}  \endcode |
|get_app_list| + | Get list of available applications | \code {"cmd":"get_app_list"}\endcode | \code {"appList":[ {"Active":true, "AppId":"ccp", "AppLabel":"Com Control", "AppName":"ccp", "AppVersion":"1.8.0-pre-103","CPApp":false, "Desktop": {"AppLabel":"Com Control", "Type":"app"}, "Running":false, "Type":"app"}, {"Active":true,"AppId":"cpdownloader", "AppLabel":"cpdownloader", "AppName":"cpdownloader", "AppVersion":"2.31.0", "CPApp":false, "Desktop":{"AppLabel":"cpdownloader", "Type":"app"}, "Running":false,"Type":"app"}], "result":"OK", "status":0} \endcode |
|key_info| + | Get warrantied key list | \code {"cmd":"key_info"} \endcode | \code {"AllExpectedKeys":true, "ExpectedKeys":[{"Name":"VRK"}, {"Name":"RSAO10"}, {"Name":"RSAVT00"}, {"Name":"ECCVT00"}], "MissingKeys":null, "WarrantiedKeys":[ {"Date instaled" : 1552968814, "Key":0, "Name":"VRK", "Status":"Installed", "Timestamp":"FFFFFFFFFFFFFF", "Type":86, "User":0}, {"Date instaled":1552968815, "Key":0, "Name":"ECCVT00", "Status":"Installed", "Timestamp":"FFFFFFFFFFFFFF", "Type":69, "User":0}, {"Date instaled":1552968818, "Key":0, "Name":"RSAVT00", "Status":"Installed", "Timestamp":"20190319112143", "Type":82, "User":0}, {"Date instaled":1552968816, "Key":0,"Name":"RSAOS10", "Status":"Installed", "Timestamp":"20190319112143", "Type":82, "User":1}]} \endcode |
|pkg_list| + | \ref vfimac::sysGetAppList "Get package list" | \code {"cmd":"pkg_list"}\endcode | \code {"result":"OK","status":0,"value":[ {"bundledate":"","bundlename":"rfsbundle","bundleversion":"1.56.13.10113","name":"alsa-lib","signer":"os","type":"os","user":"root","version":"1.0.0"}, {"bundledate":"","bundlename":"alsa-utils","bundleversion":"1.0.0","name":"alsa-utils","signer":"os","type":"os","user":"root","version":"1.0.0"}] } \endcode |
|version | + | \ref vfimac::sysMac_GetVersion "Get MAC version" | \code {"cmd":"version" } \endcode | \code {"result":"OK","status":0,"version":"3.71.5-Snapshot"} \endcode |
|get_time| + | Get time | \code {"cmd":"get_time"}\endcode | \code {"status": 0, "result" : "OK", "value":"2017-07-24T08:00:35:100+01:00"} \endcode |
|set_time| + | Set time| \code {"cmd":"set_time", "value":"2017-07-24T08:00:35:100+01:00"} \endcode | \code {"status": 0, "result" : "OK"} \endcode |
|set_env_data| + | \ref vfimac::sysSetCPEnvData "set CPR environment values" | \code {"cmd":"set_env_data", "data":{"name1":"test1","name2":"test2"} \endcode | \code {"status": 0, "result" : "OK"} \endcode |
|to_foreground| + | \ref vfimac::sysToForeground "Bring application to foreground" | \code {"cmd":"to_foreground","appid":"demo1"}\endcode | \code {"status": 0, "result" : "OK"} \endcode |
|show_prev_app| + | \ref vfimac::sysShowPrevApp "Show previously visible application" | \code {"cmd":"show_prev_app"}\endcode | \code {"status": 0, "result" : "OK"} \endcode |
|show_desktop| + | \ref vfimac::sysShowDesktop "Show MAC desktop" | \code {"cmd":"show_dekstop"}\endcode | \code {"status": 0, "result" : "OK"} \endcode |
|launch_appid| - | \ref vfimac::sysLaunchAppid "Launch application" | \code {"cmd":"launch_appid","appid":"demo1"}\endcode | \code {"status": 0, "result" : "OK"} \endcode |
|stop_appid| - | \ref vfimac::sysStopAppid "Stop application" | \code {"cmd":"stop_appid","appid":"demo1"}\endcode | \code {"status": 0, "result" : "OK"} \endcode |
|autolaunch| - | \ref vfimac::sysRelaunchApps "Relaunch applications" | \code {"cmd":"autolaunch"}\endcode | \code {"status": 0, "result" : "OK"} \endcode |
|scan_manifests| - | \ref vfimac::sysScanManifests "Rescan manifest files" | \code {"cmd":"scan_manifests"}\endcode | \code {"status": 0, "result" : "OK"} \endcode |
|audio_volume| + | Set device volume level | \code {"cmd":"audio_volume", "value":"60" } \endcode | \code {"status": 0, "result" : "OK"} \endcode |
|keyboard_backlight| + | Set keyboard backlight level | \code {"cmd":"keyboard_backlight", "value":"30" } \endcode | \code {"status": 0, "result" : "OK"} \endcode |

Return notification will always have two fields indicating request status.
| Field name | Type | Values | Description |
|-|-|-|-|
| result | string | "OK"/"FAIL" | General status |
| status | int | vfimac::macError | Error code |

\note if MAC is not running, you will receive notification unicast error. Please see ADK-IPC documentation for more information.

MAC notification interface usage example:

\code
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
\endcode

\example demo-sysinfo.cpp
*/
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
