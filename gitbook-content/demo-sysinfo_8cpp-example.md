---
hidden: true
title: demo-sysinfo.cpp
---

``` cpp
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
   {"MSR info", MSR_INFO, 0},
   {"SCR info", SCR_INFO, 0},
   {"CTLS info", CTLS_INFO, 0},
   {"Modelname", MODEL_NAME, 0},
   {"OS version", OS_VER, 0},
   {"ADK version", ADK_VER, 0},
   {"SerialNo", SN, 0},
   {"UnitNo (PTID)", PTID, 0},
   {"Read RTC", RTC, 0},
   {"RTC +5min", RTCP5, 0},
   {"RTC -5min", RTCM5, 0},
   {"Shutdown", SHUTDOWN, 0},
   {"Reboot", REBOOT, 0},
   {"Reboot dock", REBOOT_DOCK, 0},
   {"Set env", SET_ENV, 0},
   {"Get env", GET_ENV, 0},
   {"Manufacturing date", MANUF_DATE, 0},
   {"Battery device", BATTERY_DEVICE, 0},
   {"Battery available", BAT_AVAL, 0},
   {"Battery status", BAT_STATUS, 0},
   {"Battery voltage", BAT_VOLT, 0},
   {"Battery capacity", BAT_CAPACITY, 0},
   {"Battery charge level", BAT_LEVEL, 0},
   {"Battery serial No", BAT_SN, 0},
   {"Battery technology", BAT_TECH, 0},
   {"Battery FCC", BAT_FCC, 0},
   {"Battery type", BAT_TYPE, 0},
   {"Battery calibration satus", BAT_CALIBRATION, 0},
   {"ETH1 MAC", MAC_ETH1, 0},
   {"ETH2 MAC", MAC_ETH2, 0},
   {"BT MAC", MAC_BT, 0},
   {"WIFI MAC", MAC_WIFI, 0},
   {"Country code", COUNTRY_CODE, 0},
   {"Warrantied keys", WARRANTIED_KEYS, 0},
   {"All keys", ALL_KEYS, 0},
   {"All keys V2", ALL_KEYS_V2, 0},
   {"Battery SOH", BAT_SOH, 0},
   {"Battery charge cycle count", CHARGE_CYCLE_COUNT, 0},
   {"Battery in power saving mode", CHARGE_ON_SAVING, 0},
   {"Internal battery voltage", INT_BAT_VOLT, 0},
   {"Internal battery status", INT_BAT_STATUS, 0},
   {"Docking status", DOCKED, 0},
   {"Camera status", CAMERA_STATUS, 0},
   {"Barcode reader", BARCODE_STATUS, 0},
   {"Keyboard beep on/off", KBD_BEEPER, 0},
   {"Beep test", BEEPER_TEST, 0},
   {"RAM size", RAM_SZ, 0},
   {"Flash size", FLASH_SZ, 0},
   {"Executables partition size", EXE_PARTITION_SZ, 0},
   {"Data partition size", DATA_PARTITION_SZ, 0},
   {"Variant name", HW_VAR, 0},
   {"Set MIN volume", VOLUME_SET_MIN, 0},
   {"Set MAX volume", VOLUME_SET_MAX, 0},
   {"Get volume", VOLUME_GET, 0},
   {"PartNo", PART_NO, 0},
   {"HW version", HW_VER, 0},
   {"LOT No", LOT_NO, 0},
   {"System versions", VERSIONS, 0},
   {"Display on", DISPLAY_ON, 0},
   {"Display off", DISPLAY_OFF, 0},
   {"Display contrast", DISPLAY_CONTRAST, 0},
   {"Display backlight", DISPLAY_BACKLIGHT, 0},
   {"Keyboard backlight on/off", KBD_BACKLIGHT, 0},
   {"Keyboard backlight state", KBD_BACKLIGHT_STATE, 0},
   {"Keyboard type", KBD_TYPE, 0},
   {"Get console state", GET_CONSOLE_STATE, 0},
   {"LED status", LED_STATUS, 0},
   {"SB refresh -1", SB_REFRESH_1, 0},
   {"SB refresh 0", SB_REFRESH_0, 0},
   {"SB refresh 60", SB_REFRESH_60, 0},
   {"Show external storage", EXT_STORAGE, 0},
   {"Sponsor cert", SPONSOR, 0},
   {"Sponsor cert sn", SPONSOR_SN, 0},
   {"Feature licenses", ADE_FET, 0},
   {"LEDs demo" , LEDS_DEMO, 0},
   {"LEDs brightness demo" , LEDS_BRIGHTNESS_DEMO, 0},
   {"Printer available", PRINTER_AVAILABLE, 0},
   {"UX100 info", UX100_INFO, 0},
   {"UX400 info", UX400_INFO, 0},
   {"Set PCI reboot time", SET_PCI_REBOOT_TIME, 0},
   {"Get PCI reboot time", GET_PCI_REBOOT_TIME, 0},
   {"Library version", LIB_VERSION, 0},
   {"Get time zone list", GET_TIME_ZONE_LIST, 0},
   {"Set time zone ISO", SET_TIME_ZONE_ISO, 0},
   {"Set time zone name", SET_TIME_ZONE_NAME, 0},
   {"Get active time zone", GET_TIME_ZONE, 0},
   {"Install demo package", INSTALL_PACKAGE, 0},
   {"Free and install demo package", FREE_INSTALL_PACKAGE, 0},
   {"Get install status", GET_INSTALL_STATUS, 0},
   {"Package list", PKG_LIST, 0},
   {"App package list", APP_PKG_LIST, 0},
   {"Bundle list", BUNDLE_LIST, 0},
   {"App Bundle list", APP_BUNDLE_LIST, 0},
   {"Set USB2 host", SET_USB2_HOST, 0},
   {"Set USB2 device", SET_USB2_DEVICE, 0},
   {"Set USB2 default", SET_USB2_DEFAULT, 0},
   {"Get USB1 charge", GET_USB1_CHARGE, 0},
   {"Get USB2 charge", GET_USB2_CHARGE, 0},
   {"Get USB2 mode", GET_USB2_MODE, 0},
   {"Set USB1 host", SET_USB1_HOST, 0},
   {"Set USB1 device", SET_USB1_DEVICE, 0},
   {"Get USB1 mode", GET_USB1_MODE, 0},
   {"Get USB1 default", GET_USB1_DEFAULT, 0},
   {"Get USB2 default", GET_USB2_DEFAULT, 0},
   {"Get USB1 role", GET_USB1_ROLE, 0},
   {"Get USB2 role", GET_USB2_ROLE, 0},
   {"Get USB power mode", GET_USB_POWER_MODE, 0},
   {"Set USB power mode", SET_USB_POWER_MODE, 0},
   {"Get MDB", GET_MDB, 0},
   {"Get Switch threshold voltage", GET_SWITCH_THRESHOLD, 0},
   {"Set Switch threshold voltage", SET_SWITCH_THRESHOLD, 0},
   {"Get Low threshold voltage", GET_LOW_THRESHOLD, 0},
   {"Set Low threshold voltage", SET_LOW_THRESHOLD, 0},
   {"Get MSR counters", MSR_COUNTERS, 0},
   {"Get SCR counters", SCR_COUNTERS, 0},
   {"Get CTLS counters", CTLS_COUNTERS, 0},
   {"Get HW string", GET_HW_STRING, 0},
   {"Set time", SET_TIME_1, 0},
   {"Get time", GET_TIME, 0},
   {"Set NTP host", NTP_HOST, 0},
   {"Power status", POWER_STATUS, 0},
   {"Tamper status", ATTACK_STATUS, 0},
   {"VCL encryption status", VCL_ENCRYPTION_STATUS, 0},
   {"Display exists", DISPLAY_STATUS, 0},
   {"Reboot reason", REBOOT_REASON, 0},
   {"Uptime", UPTIME, 0},
   {"Docking station information", DOCKING_STATION_INFO, 0},
   {"Docking station address", DOCKING_STATION_ADDRESS, 0},
   {"Docking station update", DOCKING_STATION_UPDATE, 0},
   {"GSM firmware version", GSM_FIRMWARE_VERSION, 0},
   {"Get tamper records", GET_TAMPER_RECORDS, 0},
   {"Get card slot 2 mode", GET_CARD_SLOT2_MODE, 0},
   {"Set card slot 2 SIM", SET_CARD_SLOT2_SIM, 0},
   {"Set card slot 2 SAM", SET_CARD_SLOT2_SAM, 0},
   {"Get sim slot count ", GET_SIM_SLOT_COUNT, 0},
   {"Get MTD info", GET_MTD_INFO, 0},
   {"Get SLP tainted status", GET_SLP_TAINTED, 0},
   {"Get HW ID", GET_HW_ID, 0},
   {"Get VRK2 support", GET_VRK2_SUPPORT, 0},
   {"Get ECC VRK support", GET_ECC_VRK_SUPPORT, 0},
   {"Get POGO charging state", GET_POGO_STATE, 0},
   {"Get USB_C charging state", GET_USB_C_STATE, 0},
   {"Set POGO charging state/config", SET_POGO_STATE_CONFIG, 0},
   {"Set USB_C charging state/config", SET_USB_C_STATE_CONFIG, 0},
   {"Get LCD panel ID", GET_LCD_PANEL_ID, 0},
   {"Get LCD panel model", GET_LCD_PANEL_MODEL, 0},
   {"Get VRK cert installed", GET_VRK_CERT_INSTALLED, 0},
   {"Get device tree name", GET_DT_NAME, 0},
   {"Get POGO data lines state", GET_POGO_DATA_STATE, 0},
   {"Set POGO data lines to USB-C", SET_POGO_DATA_TO_USB_C, 0},
   {"Set POGO data lines to POGO", SET_POGO_DATA_TO_POGO, 0},
   {"Get mobile radio SW version", GET_MOBILE_RADIO_SW_VERSION,0},
   {"Get touch screen name", GET_TOUCH_SCREEN_NAME, 0},
   {"Get touch screen HW version", GET_TOUCH_SCREEN_HW_VERSION,0},
   {"Get touch screen SW version", GET_TOUCH_SCREEN_SW_VERSION,0},
   {"Get touch screen config version", GET_TOUCH_SCREEN_CONFIG_VERSION,0},
   {"Get Android Gateway address ", GET_ANDROID_GATEWAY, 0},
   {"Get Android DNS1 address ", GET_ANDROID_DNS1, 0},
   {"Get Android DNS2 address ", GET_ANDROID_DNS2, 0},
   {"Get Android network prefix length",GET_ANDROID_PREFIX_LENGTH, 0},
   {"Exit", EXIT, 0},
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
   vfigui::uiConfirm("confirm",vfigui::uiPrint("VRK2 support %d (%s)",vrk2Support,
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
   vfigui::uiConfirm("confirm", vfigui::uiPrint("POGO charging state %d (%s)", state,
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
   vfigui::uiConfirm("confirm", vfigui::uiPrint("USB_C charging state %d (%s)", state,
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
   vfigui::uiConfirm("confirm",vfigui::uiPrint("VRK2 support %d (%s)",eccVrkSupport,
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
   vfigui::uiConfirm("confirm", vfigui::uiPrint("POGO data lines state %d (%s)", state,
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
   vfisysinfo::sysBeepError(volume); // volume 50%
   gettimeofday( &end, NULL );
   vfigui::uiConfirm("confirm","sysBeepError()");
   timersub( &end, &start, &diff );
   LOGF_TRACE( lh, "Time [%ld s %.6ld]", diff.tv_sec, diff.tv_usec );
   gettimeofday( &start, NULL );
   vfisysinfo::sysPlaySoundFreq(666, duration, volume); // volume 50%
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
   "<button accesskey='&#13;' style='visibility:hidden' action='return 0'></button>" +
   "<button accesskey='&#27;' style='visibility:hidden' action='return 0'></button>" +
   "<button accesskey='2' style='visibility:hidden' action='call document.up()'></button>" +
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
