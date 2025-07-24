---
hidden: true
title: filesystem.h
---

<a href="filesystem_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef _FILESYSTEM_
 2 #define _FILESYSTEM_
 3 
 4 #include <string>
 5 #include <vector>
 6 #include "config/sdi_sysconfig.h"
 7 
 8 /****** SDI-SERVER FILENAME DEFINITIONS ******/
 9 
 10 // subfolder for COM files
 11 #define COM_PREFIX "com/"
 12 // subfolder for COM files used on CM5/M424/M440
 13 #define COM_ANDROID "com/android/"
 14 
 15 // ADKCOM connection profiles
 16 #define CONNECT_LAN_FILE "CONNECT_LAN.XML" // COM_PREFIX added later in code
 17 #define CONNECT_BT_FILE "CONNECT_BT.XML" // COM_PREFIX added later in code
 18 #define CONNECT_WIFI_FILE "CONNECT_WIFI.XML" // COM_PREFIX added later in code
 19 #define CONNECT_USB_SER_FILE "CONNECT_USB_SER.XML" // COM_PREFIX added later in code
 20 #define CONNECT_USB_LAN_FILE "CONNECT_USB_LAN.XML" // COM_PREFIX added later in code
 21 #define CONNECT_COM1A_FILE "CONNECT_COM1A.XML" // COM_PREFIX added later in code
 22 #define CONNECT_BLE_FILE "CONNECT_BLE.XML" // COM_PREFIX added later in code
 23 #define CONNECT_COM1_FILE "CONNECT_COM1.XML" // COM_PREFIX added later in code
 24 #define CONNECT_ANY_FILE "CONNECT_ANY.XML" // COM_PREFIX added later in code
 25 #define CONNECT_LO_FILE "CONNECT_LO.XML" // COM_PREFIX added later in code
 26 #define CONNECT_ANDROID_FILE "CONNECT_ANDROID.XML" // COM_PREFIX added later in code
 27 // name of ADKCOM GATT server configuration file (BLE)
 28 #define BLE_GATT_FILE "gatt.xml" // COM_PREFIX added later in code
 29 // name of ADKCOM BT network profile copy in flash
 30 #define LOCAL_NET_BT_PAN_FILE "LOCAL_NET_BT_PAN.xml" // COM_PREFIX added later in code
 31 
 32 // name of ADKCOM CCP database file (under $HOME/flash/sdi/com)
 33 #define CCP_DATABASE_FILE "ccp.db" // COM_PREFIX added later in code
 34 // COM configuration file
 35 #define COM_IF_CONFIG_FILE "COM_IF.CFG" // COM_PREFIX added later in code
 36 
 37 /* subfolder for ADKSEC files (recently used for Android user configuration package)
 38  * Note: This prefix is also used by VOS user configuration packages. ADKSEC
 39  * knows this path, since it set with environment variable SCAPPCFG in start file */
 40 #define SEC_PREFIX "sec/"
 41 // ADKSEC configuration file
 42 #define ADKSEC_CONFIG_FILE "sccfg.json" // SEC_PREFIX added later in code
 43 
 44 // subfolder for EPP files
 45 #define EPP_PREFIX "epp/"
 46 // subfolder for CT files
 47 #define CT_PREFIX "ct/"
 48 // EPP configuration file
 49 #define EPP_CONFIG_FILE "epp.json" // EPP_PREFIX/CT_PREFIX added later in code
 50 // CT/EPP network profiles
 51 #define LOCAL_NET_USB_CT "LOCAL_NET_USB_CT.xml" // CT_PREFIX added later in code
 52 #define LOCAL_NET_USB_EPP "LOCAL_NET_USB_EPP.xml" // EPP_PREFIX added later in code
 53 // ADKCOM connection profile used by EPP
 54 #define CONNECT_EPP_TLS "CONNECT_EPP_TLS.XML" // EPP_PREFIX added later in code
 55 
 56 /* subfolder for EMV files (recently used for Android user configuration package)
 57  * Note: ADKEMV specifies "adkemv" as prefix for internal EMV files, but this is handled
 58  * by functions emv_flash_dir() and emv_config_dir(), which already add this prefix. */
 59 #define EMV_PREFIX "emv/"
 60 // EMV (read-only) config file emv-desired.xml
 61 #define EMV_DESIRED_FILE "emv-desired.xml"
 62 // reg-ex pattern for EMV flash configuration files
 63 #define EMV_FLASH_CONFIG_FILES "EMV_.*\\.xml"
 64 
 65 // SDI server specific files (don't use a prefix)
 66 #define SDI_TRX_DATA_FILE "sdi_trx.dat"
 67 #define WHITELIST_FILE "whitelist.json"
 68 #define SENSITIVE_TAGS_FILE "sensitivetags.json"
 69 #define CARD_RANGES_FILE "cardranges.json"
 70 #define STATUS_CFG_FILE "STATUS.CFG"
 71 #define IDLETEXT_CFG_FILE "IDLETEXT.CFG"
 72 #define SDI_CONFIG_FILE "config.json"
 73 #define SDI_ACL_FILE "acl.json"
 74 #define FS_CHECKSUMS_FILE "checksums.json"
 75 
 76 /* Android only: removal file for command
 77  * 20-1D (Check for update) with upload type 8 (user config removal)
 78  * or with upload type 10 (plugin removal) */
 79 #define UPDATE_REMOVE_FILE "remove.json"
 80 
 81 // subfolder for SDI plugins (recently used for Android user configuration package)
 82 #define PLUGIN_PREFIX "plugin/"
 83 // plugin file extension
 84 #define PLUGIN_EXT ".so"
 85 // reg-ex pattern to match SDI plugins
 86 #define PLUGIN_PATTERN "libsdiplugin.*\\" PLUGIN_EXT
 87 // reg-ex pattern to match SDI plugin configuration
 88 #define PLUGIN_CONFIG_PATTERN "libsdiplugin.*\\.(cfg|json)"
 89 // reg-ex pattern for EMV-ADK girocard kernel wrapper, any version
 90 #define GCKERNEL_PATTERN "libEMV_CTLS_GC[0-9]{6}\\.so"
 91 
 92 // subfolder for ADKLOG configuration files (recently used for Android user configuration package)
 93 #define LOG_PREFIX "log/"
 94 // ADKLOG configuration files
 95 #define LOG_CONFIG_FILES ".*_log\\.conf"
 96 
 97 // subfolder for ADKNFC configuration files (recently used for Android user configuration package)
 98 #define NFC_PREFIX "nfc/"
 99 // ADKNFC wallet key files (wky) files
 100 #define NFC_WKY_FILES ".*\\.wky"
 101 
 102 // subfolder for fonts (recently used by ADKPRT for Android user configuration package only)
 103 #define FONT_PREFIX "fonts/"
 104 // fonts files (true type font)
 105 #define FONT_FILES ".*\\.(afm|fnt|fon|gsf|otf|pfa|pfb|pfm|ttc|ttf)"
 106 
 107 #if defined _VOS // grsec on VOS/VOS2 requires to put global shared files to /tmp/share
 108  // lock file to check another running SDI instance
 109  #define SDI_LOCK_FILE "/tmp/share/sdi.lock"
 110  // file to signal SDI server that sdi_cleaner has finished
 111  #define SDI_CLEANUP_DONE_FILE "/tmp/share/sdi.cleanup_done"
 112 #elif defined _VOS3
 113  // lock file to check another running SDI instance
 114  #define SDI_LOCK_FILE "/tmp/sdi.lock"
 115 #endif
 116 
 117 #if defined(__ANDROID__) || defined(_VOS3)
 118  // default name of PEM output file containing CA for CT (EPP client), usually contains AuthEx/AuthN CA
 119  #define EPP_CA_PEM_FILE "epp_ca.pem"
 120 #endif
 121 
 122 // internal file names used by SW upload 20-14/20-15/20-16
 123 #define EMV_CONFIG_TARBALL "emv-config.tar"
 124 #ifdef _STM32
 125  // filename of uploaded download package stored in upload_install_dir()
 126  #define STM32_DL_FILENAME "update.tar"
 127  // file name of uploaded VRK package stored in upload_install_dir()
 128  #define STM32_UVRK_FILENAME "vrkpkg.tar"
 129 #endif
 130 
 131 /****** FILESYSTEM NAMESPACE & FUNCTIONS ******/
 132 
 133 namespace sdi
 134 {
 135  namespace filesystem
 136  {
 137 
 179  void init(enum config::SdiSysConfig::SDIMode sdi_mode);
 180 
 197  void factory_reset();
 198 
 203  bool read_file(const char *file, std::string &data);
 204 
 209  bool write_file(const char *file, const std::string &data);
 210 
 215  bool copy_file(const std::string &src, const std::string &dest);
 216 
 221  bool move_file(const std::string &src, const std::string &dest);
 222 
 238  int get_dir_files(const char *dir, std::vector<std::string> *files = 0, const char *regex = 0);
 239 
 241  enum FilesModes
 242  {
 243  FM_Default = 0,
 244  FM_NoAbort = 1,
 247  FM_Quiet = 2,
 249  FM_KeepTopDir = 4
 251  };
 252 
 260  int copy_files(const std::vector<std::string> &files, const char *dst_dir, unsigned modes = FM_Default);
 261 
 268  int remove_files(const std::vector<std::string> &files, unsigned modes = FM_Default);
 269 
 276  int remove_dir(const std::string &path, unsigned modes = FM_Default);
 277 
 296  int extract_tar(const std::string &tarfile, const std::string &destdir, const char *regex = 0);
 297 
 301  const char* binary_dir();
 302 
 312  const char* home_flash_dir();
 316  std::string home_flash_file(const std::string &file);
 317 
 327  const char* home_config_dir();
 328 
 334  std::string home_config_file(const std::string &file);
 335 
 350  const char* ext_config_dir();
 362  std::string lookup_config_file(const std::string &file);
 363 
 373  const char* emv_flash_dir();
 374 
 382  const char* emv_config_dir();
 383 
 391  const char* log_config_dir();
 392 
 399  const char* nfc_flash_dir();
 400 
 407  const char* home_lib_dir();
 408 
 419  const char* ext_plugin_dir();
 420 
 431  const char* plugin_config_dir();
 432 
 442  const char* ext_font_dir();
 443 
 451  const char* tmp_dir();
 452 
 467  const char* upload_install_dir(bool flash = true);
 468 
 476  const char* sys_remove_sponsor_dir();
 477 
 486  const char* ccp_resource_dir();
 487 
 494  const char* ccp_database_dir();
 495 
 506  const char* sdi_update_dir();
 507 
 519  const char* sdi_persist_dir(bool system = false);
 520 
 526  const char* sdi_certstore_dir();
 527 
 528  /**** Functions required for command "EMV config upload (20-14/20-15/20-16)" ****/
 529 
 537  unsigned short install_emv_config_package(const std::string &emv_config_pkg);
 538 
 539  // x86, ANDROID & Co.
 540 #if !defined (_VOS) && !defined (_VOS3) && !defined (_STM32)
 541  /**** Functions required for command "Check for update (20-1D)" (not supported for VOS/VOS2/VOS3) ****/
 542 
 560  unsigned short install_user_configuration(bool recover = false);
 561 
 593  unsigned short remove_user_configuration();
 594 
 614  unsigned short install_sdi_plugins(bool recover = false);
 615 
 646  unsigned short remove_sdi_plugins();
 647 
 648 #endif // #if !defined (_VOS) && !defined (_VOS3)
 649 
 650  }
 651 } // namespace sdi::filesystem
 652 
 653 #endif
```
