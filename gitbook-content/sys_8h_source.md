---
hidden: true
title: sys.h
---

<a href="sys_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _SYS_H_
 9 #define _SYS_H_
 10 
 11 #define CLA_SYS 0x20 
 12 
 13 #define INS_SYS_SYNC_TURN_ON 0x00 
 14 #define INS_SYS_TURN_OFF 0x01 
 15 #define INS_SYS_ABORT 0x02 
 16 #define INS_SYS_GET_CONFIG 0x03 
 17 #define INS_SYS_GET_STATUS 0x04 
 18 #define INS_SYS_SELFTEST 0x05 
 19 #define INS_SYS_LOCK_PAYMENT 0x06 
 20 #define INS_SYS_SET_STATUS 0x09 
 21 #define INS_SYS_AUTH 0x11 
 22 
 23 #define INS_SYS_SET_IDLE_TEXT 0x13 
 24 
 25 #define INS_SYS_SW_UPLOAD_START 0x14 
 26 #define INS_SYS_SW_UPLOAD_TRANSFER 0x15 
 27 #define INS_SYS_SW_UPLOAD_FINALIZE 0x16 
 28 
 29 #define INS_SYS_SHUTDOWN_REBOOT_SLEEP 0x17 
 30 #define INS_SYS_MAC_SHOW_DESKTOP 0x18 
 31 
 32 #define INS_SYS_SET_PROPERTY 0x19 
 33 #define INS_SYS_GET_PROPERTY 0x1A 
 34 
 35 #define INS_SYS_INSTALL_SPONSOR_CERT 0x1B 
 36 
 37 #define INS_SYS_GET_VERSION_INFO 0x1C 
 38 #define INS_SYS_CHECK_FOR_UPDATE 0x1D 
 39 
 40 #define INS_SYS_SW_GET_LAST_INSTALL_ERROR 0x1E 
 41 
 42 #define INS_SYS_EXT_BUTTON 0x20 
 43 
 44 #define INS_SYS_EPP_ENABLE 0x21 
 45 
 46 #define INS_SYS_FACTORY_RESET 0x22 
 47 
 48 #define INS_SYS_READ_CERTIFICATE 0x23 
 49 
 50 #define INS_SYS_FORCE_CURR_ABBR 0x24 
 51 
 52 #define MAX_OUT_MSG_SIZE_A 0xFFF0 // 16 * 0xFFF
 53 #define MAX_OUT_MSG_SIZE_B_C_D 0xFFFF // 64KB - 1
 54 
 55 #ifndef MIN
 56  #define MIN(a,b) ((a)<(b)?(a):(b))
 57 #endif
 58 
 59 typedef struct thread_data
 60 {
 61  char *cmdData;
 62  unsigned long cmdSize;
 63  void *addThreadData;
 64  int taskId;
 65 } Thread_Data;
 66 
 68 enum ExtserverResult
 69 {
 70  RESULT_OK = 0,
 71  RESULT_FAIL = -1,
 72  RESULT_TIMEOUT = -2,
 73  RESULT_USER_CANCEL = -3,
 74  RESULT_MOBILE_ABORT = -4,
 75  RESULT_NO_LINK = -5,
 76  RESULT_CLEAR_BUTTON = -6,
 77  RESULT_DATA_AVAILABLE = -7,
 78  RESULT_EXCESSIVE_PIN_REQUESTS = -8,
 79  RESULT_TAG_ERROR = -9,
 80  RESULT_TAG_LENGTH_ERROR = -10,
 81  RESULT_PARAMETER_ERROR = -11,
 82  RESULT_INTERCHAR_TIMEOUT = -12,
 83  RESULT_LOGIC_ERROR = -13
 84 };
 85 
 87 enum UploadType
 88 {
 89  UPLOAD_TYPE_SOFTWARE_UPDATE,
 90  UPLOAD_TYPE_CONFIG_WHITELIST,
 91  UPLOAD_TYPE_CONFIG_SENSITIVE_TAGS,
 92  UPLOAD_TYPE_CONFIG_CARD_RANGES,
 93  UPLOAD_TYPE_FIRMWARE_UPDATE,
 94  UPLOAD_TYPE_KEYS,
 95  UPLOAD_TYPE_CONFIG_SDIEMV,
 96  UPLOAD_TYPE_REMOVE_SPONSOR,
 97  UPLOAD_TYPE_REMOVE_CONFIG_SDIEMV,
 98  UPLOAD_TYPE_PLUGIN,
 99  UPLOAD_TYPE_REMOVE_PLUGIN,
 100  UPLOAD_TYPE_CP_PACKAGE,
 101  UPLOAD_TYPE_EMV_CONFIG_PACKAGE,
 102  UPLOAD_TYPE_UVRK_PACKAGE,
 104  UPLOAD_TYPE_MAX
 105 };
 106 
 117 bool handleSystemCmd(unsigned long msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
 118 
 125 int check4Interrupt(void);
 126 
 130 void setInterrupt(enum ExtserverResult reason);
 131 
 136 int isCardRemoved(void);
 137 
 142 const char *errText(int err);
 143 
 147 void setDevice2Idle(void);
 148 
 149 enum IdleScreenMode
 150 {
 151  Idle_Normal = 0,
 152  Idle_MenuEnabled = 1,
 157  Idle_WaitLogo = 2,
 159  Idle_NoAdminMode = 4
 162 };
 166 void sysDisplayIdleScreen(unsigned mode = Idle_Normal, const char *idletext = 0);
 167 
 172 bool sysSetIdleScreenFinished(unsigned long id);
 173 
 179 void sysSetIdleScreenAdminMenu(bool on);
 180 
 195 bool sysSetIdleScreenLocked(bool lock = true, bool update_screen = true);
 196 
 197 enum IdleLockType
 198 {
 199  ILT_NoLock = 0,
 200  ILT_ApiLock = 1,
 201  ILT_AdminLock = 2
 202 };
 203 
 208 enum IdleLockType sysGetIdleScreenLocked();
 209 
 215 void setSW1SW2(int result, unsigned char *rsp);
 216 
 223 bool sys_internal_android();
 224 
 227 bool vos_sys8();
 228 
 236 bool checkBundleInstalled(const char *bdlname);
 237 
 243 bool isHwModelName(const char *targetHwModelName);
 244 
 254 void sysResetUpdateContext(void *handle);
 255 
 256 #endif // _SYS_H_
```
