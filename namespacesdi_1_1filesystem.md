---
title: sdi::filesystem

---

# sdi::filesystem



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[sdi::filesystem::UpdateFiles](structsdi_1_1filesystem_1_1_update_files.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Location](namespacesdi_1_1filesystem.md#enum-location)** { LOC_None, LOC_SdiFlashDir, LOC_SdiConfigDir, LOC_SdiExtConfigDir, LOC_EmvFlashDir, LOC_EmvConfigDir, LOC_LogConfigDir, LOC_NfcFlashDir, LOC_SdiExtFontsDir} |
| enum| **[Action](namespacesdi_1_1filesystem.md#enum-action)** { ACT_None =        0, ACT_SecInit = (1 << 0), ACT_DisableEpp = (1 << 1), ACT_EmvExit = (1 << 2), ACT_EmvExitComplete = (1 << 3), ACT_EmvFlashPerm = (1 << 4), ACT_EmvInitInfo = (1 << 5), ACT_LogInit = (1 << 6), ACT_CardRanges = (1 << 7), ACT_WhitelistFile = (1 << 8), ACT_AclInit = (1 << 9)} |
| enum| **[ActionSource](namespacesdi_1_1filesystem.md#enum-actionsource)** { ASRC_Default =        0, ASRC_Removal = (1 << 0), ASRC_PostAction = (1 << 1)} |
| enum| **[FilesModes](namespacesdi_1_1filesystem.md#enum-filesmodes)** { FM_Default = 0, FM_NoAbort = 1, FM_Quiet = 2, FM_KeepTopDir = 4} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[get_user_config_files](namespacesdi_1_1filesystem.md#function-get-user-config-files)**(vector< string > & files) |
| void | **[check_home](namespacesdi_1_1filesystem.md#function-check-home)**() |
| void | **[home_dir](namespacesdi_1_1filesystem.md#function-home-dir)**(string & path) |
| void | **[handle_old_version_files](namespacesdi_1_1filesystem.md#function-handle-old-version-files)**() |
| const char * | **[getLocation](namespacesdi_1_1filesystem.md#function-getlocation)**([Location](namespacesdi_1_1filesystem.md#enum-location) l) |
| void | **[factory_reset](namespacesdi_1_1filesystem.md#function-factory-reset)**() |
| void | **[init](namespacesdi_1_1filesystem.md#function-init)**(enum config::SdiSysConfig::SDIMode sdi_mode) |
| bool | **[read_file](namespacesdi_1_1filesystem.md#function-read-file)**(const char * file, string & data) |
| bool | **[write_file](namespacesdi_1_1filesystem.md#function-write-file)**(const char * file, const string & data) |
| bool | **[copy_file](namespacesdi_1_1filesystem.md#function-copy-file)**(const string & src, const string & dest) |
| bool | **[move_file](namespacesdi_1_1filesystem.md#function-move-file)**(const string & src, const string & dst) |
| int | **[get_dir_files](namespacesdi_1_1filesystem.md#function-get-dir-files)**(const char * dir, vector< string > * files, const char * regex) |
| int | **[copy_files](namespacesdi_1_1filesystem.md#function-copy-files)**(const vector< string > & files, const char * dst_dir, unsigned modes) |
| int | **[remove_dir](namespacesdi_1_1filesystem.md#function-remove-dir)**(const string & path, unsigned modes) |
| int | **[remove_files](namespacesdi_1_1filesystem.md#function-remove-files)**(const vector< string > & files, unsigned modes) |
| const char * | **[binary_dir](namespacesdi_1_1filesystem.md#function-binary-dir)**() |
| string | **[home_flash_file](namespacesdi_1_1filesystem.md#function-home-flash-file)**(const string & file) |
| string | **[home_config_file](namespacesdi_1_1filesystem.md#function-home-config-file)**(const string & file) |
| string | **[lookup_config_file](namespacesdi_1_1filesystem.md#function-lookup-config-file)**(const string & file) |
| const char * | **[plugin_config_dir](namespacesdi_1_1filesystem.md#function-plugin-config-dir)**() |
| unsigned short | **[run_actions](namespacesdi_1_1filesystem.md#function-run-actions)**(unsigned long actions, unsigned long source =[ASRC_Default](namespacesdi_1_1filesystem.md#enumvalue-asrc-default)) |
| bool | **[write_file_from_tar](namespacesdi_1_1filesystem.md#function-write-file-from-tar)**(FILE * tar, const TarEntry & entry, const char * outdir) |
| int | **[extract_tar](namespacesdi_1_1filesystem.md#function-extract-tar)**(const string & tarfile, const string & destdir, const char * regex) |
| unsigned short | **[install_emv_config_package](namespacesdi_1_1filesystem.md#function-install-emv-config-package)**(const string & emv_config_pkg) |
| const char * | **[home_flash_dir](namespacesdi_1_1filesystem.md#function-home-flash-dir)**() |
| const char * | **[home_config_dir](namespacesdi_1_1filesystem.md#function-home-config-dir)**() |
| const char * | **[ext_config_dir](namespacesdi_1_1filesystem.md#function-ext-config-dir)**() |
| const char * | **[emv_flash_dir](namespacesdi_1_1filesystem.md#function-emv-flash-dir)**() |
| const char * | **[emv_config_dir](namespacesdi_1_1filesystem.md#function-emv-config-dir)**() |
| const char * | **[log_config_dir](namespacesdi_1_1filesystem.md#function-log-config-dir)**() |
| const char * | **[nfc_flash_dir](namespacesdi_1_1filesystem.md#function-nfc-flash-dir)**() |
| const char * | **[home_lib_dir](namespacesdi_1_1filesystem.md#function-home-lib-dir)**() |
| const char * | **[ext_plugin_dir](namespacesdi_1_1filesystem.md#function-ext-plugin-dir)**() |
| const char * | **[ext_font_dir](namespacesdi_1_1filesystem.md#function-ext-font-dir)**() |
| const char * | **[tmp_dir](namespacesdi_1_1filesystem.md#function-tmp-dir)**() |
| const char * | **[upload_install_dir](namespacesdi_1_1filesystem.md#function-upload-install-dir)**(bool flash =true) |
| const char * | **[sys_remove_sponsor_dir](namespacesdi_1_1filesystem.md#function-sys-remove-sponsor-dir)**() |
| const char * | **[ccp_resource_dir](namespacesdi_1_1filesystem.md#function-ccp-resource-dir)**() |
| const char * | **[ccp_database_dir](namespacesdi_1_1filesystem.md#function-ccp-database-dir)**() |
| const char * | **[sdi_update_dir](namespacesdi_1_1filesystem.md#function-sdi-update-dir)**() |
| const char * | **[sdi_persist_dir](namespacesdi_1_1filesystem.md#function-sdi-persist-dir)**(bool system =false) |
| const char * | **[sdi_certstore_dir](namespacesdi_1_1filesystem.md#function-sdi-certstore-dir)**() |
| unsigned short | **[readRemovalFile](namespacesdi_1_1filesystem.md#function-readremovalfile)**(const string & remove_file, vector< string > & files) |
| unsigned short | **[install_configuration](namespacesdi_1_1filesystem.md#function-install-configuration)**(bool recover, bool system =false) |
| unsigned short | **[remove_configuration](namespacesdi_1_1filesystem.md#function-remove-configuration)**(bool system =false) |
| unsigned short | **[install_user_configuration](namespacesdi_1_1filesystem.md#function-install-user-configuration)**(bool recover =false) |
| unsigned short | **[remove_user_configuration](namespacesdi_1_1filesystem.md#function-remove-user-configuration)**() |
| unsigned short | **[install_sdi_plugins](namespacesdi_1_1filesystem.md#function-install-sdi-plugins)**(bool recover =false) |
| unsigned short | **[remove_sdi_plugins](namespacesdi_1_1filesystem.md#function-remove-sdi-plugins)**() |
| bool | **[read_file](namespacesdi_1_1filesystem.md#function-read-file)**(const char * file, std::string & data) |
| bool | **[write_file](namespacesdi_1_1filesystem.md#function-write-file)**(const char * file, const std::string & data) |
| bool | **[copy_file](namespacesdi_1_1filesystem.md#function-copy-file)**(const std::string & src, const std::string & dest) |
| bool | **[move_file](namespacesdi_1_1filesystem.md#function-move-file)**(const std::string & src, const std::string & dest) |
| int | **[get_dir_files](namespacesdi_1_1filesystem.md#function-get-dir-files)**(const char * dir, std::vector< std::string > * files =0, const char * regex =0) |
| int | **[copy_files](namespacesdi_1_1filesystem.md#function-copy-files)**(const std::vector< std::string > & files, const char * dst_dir, unsigned modes =[FM_Default](namespacesdi_1_1filesystem.md#enumvalue-fm-default)) |
| int | **[remove_files](namespacesdi_1_1filesystem.md#function-remove-files)**(const std::vector< std::string > & files, unsigned modes =[FM_Default](namespacesdi_1_1filesystem.md#enumvalue-fm-default)) |
| int | **[remove_dir](namespacesdi_1_1filesystem.md#function-remove-dir)**(const std::string & path, unsigned modes =[FM_Default](namespacesdi_1_1filesystem.md#enumvalue-fm-default)) |
| int | **[extract_tar](namespacesdi_1_1filesystem.md#function-extract-tar)**(const std::string & tarfile, const std::string & destdir, const char * regex =0) |
| std::string | **[home_flash_file](namespacesdi_1_1filesystem.md#function-home-flash-file)**(const std::string & file) |
| std::string | **[home_config_file](namespacesdi_1_1filesystem.md#function-home-config-file)**(const std::string & file) |
| std::string | **[lookup_config_file](namespacesdi_1_1filesystem.md#function-lookup-config-file)**(const std::string & file) |
| unsigned short | **[install_emv_config_package](namespacesdi_1_1filesystem.md#function-install-emv-config-package)**(const std::string & emv_config_pkg) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const struct [UpdateFiles](structsdi_1_1filesystem_1_1_update_files.md)[] | **[allowed_usr_files](namespacesdi_1_1filesystem.md#variable-allowed-usr-files)**  |
| const unsigned | **[allowed_usr_files_size](namespacesdi_1_1filesystem.md#variable-allowed-usr-files-size)**  |

## Types Documentation

### enum Location

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| LOC_None | |  No directory  |
| LOC_SdiFlashDir | |  SDI flash configuration directory (read/write)  |
| LOC_SdiConfigDir | |  SDI internal configuration directory (read-only)  |
| LOC_SdiExtConfigDir | |  SDI directory for external user configuration (read-only)  |
| LOC_EmvFlashDir | |  EMV flash configuration directory (read/write)  |
| LOC_EmvConfigDir | |  EMV configuration directory (read-only)  |
| LOC_LogConfigDir | |  ADK Logging configuration directory (read-only)  |
| LOC_NfcFlashDir | |  ADK NFC configuration directory (read/write)  |
| LOC_SdiExtFontsDir | |  SDI directory for external fonts (installed with user config package (read-only)  |




file location directory for SDI configuration files 


### enum Action

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ACT_None |        0|  no action  |
| ACT_SecInit | (1 << 0)|  call [secInit()](namespacecom__verifone__seccmd.md#function-secinit) for this file (Android only)  |
| ACT_DisableEpp | (1 << 1)|  disable attached EPP (if enabled as Countertop)  |
| ACT_EmvExit | (1 << 2)|  call [EMV_CT_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework) and [EMV_CTLS_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ctls-exit-framework) for this file  |
| ACT_EmvExitComplete | (1 << 3)|  call EMV_CT_Exit_Framework_extended(EXIT_CT_COMPLETE) and EMV_CTLS_Exit_Framework_extended(EXIT_CTLS_COMPLETE) for this file  |
| ACT_EmvFlashPerm | (1 << 4)|  call set_emv_flash_permissions() on EMV flash config folder (VOS/VOS2/VOS3 only) Note: ACT_EmvFlashPerm must be below ACT_EmvInitInfo so that it is executed before ACT_EmvInitInfo as both are used together in [install_emv_config_package()](namespacesdi_1_1filesystem.md#function-install-emv-config-package) |
| ACT_EmvInitInfo | (1 << 5)|  call initEmvInfo() to rebuild EMV Info cache  |
| ACT_LogInit | (1 << 6)|  call LogAPI_ReconfigNotification() for this file  |
| ACT_CardRanges | (1 << 7)|  reload cache for card ranges configuration  |
| ACT_WhitelistFile | (1 << 8)|  reload cache for whitelist configuration  |
| ACT_AclInit | (1 << 9)|  reload ACL (access control list) file  |




actions supported by run_actions() below (bitmask used to combine actions). Order of execution is sprecified by run_actions() and recently corresponds to enum order. 


### enum ActionSource

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ASRC_Default |        0|  default: installation (see ASRC_Removal) and pre-action (see ASRC_PostAction)  |
| ASRC_Removal | (1 << 0)|  removal (not installation)  |
| ASRC_PostAction | (1 << 1)|  post-action (not pre-action)  |




action source specifying for what run_actions() was invoked 


### enum FilesModes

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FM_Default | 0|  let first file error abort the function with -1.  |
| FM_NoAbort | 1|  function proceeds, in case of single files cannot be copied or removed. Function returns with number of successfully pocessed files.  |
| FM_Quiet | 2|  don't issue information to log (errors only), e.g. for non-existing files  |
| FM_KeepTopDir | 4|  only supported for [remove_dir()](namespacesdi_1_1filesystem.md#function-remove-dir): keep top level directory, after the content was removed  |




modes for functions [copy_files()](namespacesdi_1_1filesystem.md#function-copy-files), [remove_files()](namespacesdi_1_1filesystem.md#function-remove-files), [remove_dir()](namespacesdi_1_1filesystem.md#function-remove-dir)



## Functions Documentation

### function get_user_config_files

```cpp
static void get_user_config_files(
    vector< string > & files
)
```


**Parameters**: 

  * **files** vector appended by user config files previously installed by user config package(s) 


**Note**: 

  * On Android, this is necessary for all files, since FDR (Android factory reset) will wipe the application domain folder and SDI factory reset is afterwards used to recover the factory installation (including the user config packages). 
  * On Titus, only configuration files are considered, which SDI will modify during runtime. For read-only files no shadow files will be stored in persist folder, these files won't be returned. 
  * Vector _files_ might already contain elements, additional files are added to the end of the vector. 


return list of user config files, which were previously installed by external user config packages with install_configuration(false, false). These files must be considered by [factory_reset()](namespacesdi_1_1filesystem.md#function-factory-reset) and deleted. Finally, [factory_reset()](namespacesdi_1_1filesystem.md#function-factory-reset) will invoke install_configuration(true, false) to recover all shadow files from persist partition/folder, which were previously installed by user config packages. 


### function check_home

```cpp
static void check_home()
```


### function home_dir

```cpp
static void home_dir(
    string & path
)
```


### function handle_old_version_files

```cpp
static void handle_old_version_files()
```


### function getLocation

```cpp
static const char * getLocation(
    Location l
)
```


**Parameters**: 

  * **l** location, see enum Location 


**Return**: directory path (or NULL if `l` is invalid 

returns directory path for location enum 


### function factory_reset

```cpp
void factory_reset()
```


perform a factory reset of SDI server. The function is invoked for external reset by command "Factory Reset (20-22)" and for internal reset by [init()](namespacesdi_1_1filesystem.md#function-init), if the SDI mode has changed since last startup. The function does the following:

* It removes all writable files, which are modified by SDI server during runtime. In addition, all user config files are removed, which must be considered by the reset. On Titus, even system configuration files are removed.
* It creates writeable files (not belonging to user configuration packages) to restore other default settings, e.g. STATUS.CFG.
* On VOS platforms it synchronizes contents of installed user config packages to restore default configurations files coming along with these packages (see step 5 of [init()](namespacesdi_1_1filesystem.md#function-init)). On Android user configuration files and SDI plugins are recovered from persitent partition. For this, functions install_configuration() and [install_sdi_plugins()](namespacesdi_1_1filesystem.md#function-install-sdi-plugins) with flag `recover=true` are invoked. On Titus user and system configuration files are recovered from persist folder. For this, functions install_configuration() with flag `recover=true` is invoked. 


### function init

```cpp
void init(
    enum config::SdiSysConfig::SDIMode sdi_mode
)
```


This function must be called at startup, before SDI server accesses other functions of the filesystem module. The function internally does the following:

1. It checks the $HOME environment variable. If it is not provided by the system, the function sets $HOME to working directory of SDI server, since this environment variable is referred the most filesystem functions.
2. VOS/VOS2: It calls vos_wait_for_sdicleaner() to wait/synchronize with sdicleaner installed with a previous removal package.
3. VOS/VOS2/Android: It checks for old files of previous SDI server versions and if exist, these files were taken over to new destination, which is expected by the recent SDI server. Old obsolete files of previous SDI server versions were removed.
4. Create subfolders in home flash folder ([home_flash_dir()](namespacesdi_1_1filesystem.md#function-home-flash-dir)) so that SDI can create files at startup.
5. Check for validity of configuration files and delete them to recover them with check_config_update() afterwards (see step 8).
6. Read STATUS.CFG (SDI status runtime file). If it does not exist, it is created with defaults. 7 It checks recent SDI mode (passed as parameter _sdi_mode_) equals mode in STATUS.CFG, for which SDI was previously started. If the mode has changed, an internal factory reset (see function [factory_reset()](namespacesdi_1_1filesystem.md#function-factory-reset)) is triggered, since home flash directory with previous files of old mode must be wiped.
7. VOS/VOS2/VOS3: it calls check_config_update() to synchronize files, which were installed with user configuration packages and which require write access. These files are taken over to home flash directory so that SDI is able have write permissions on them. For this, SDI server holds a registration file with a checksum for each file to detect, if it was overloaded by file of the user configuration package. In addition, after removal of a user configuration package, the associated files are removed again and default files from SDI configuration folder are restored. Titus: it calls check_config_update() to checks for installation of user/system configuration files. If installation is pending, the configuration will be processed.
8. It removes files of software upload folder (see [upload_install_dir()](namespacesdi_1_1filesystem.md#function-upload-install-dir)), if download packages were uploaded by software upload commands (20-14,20-15,20-16) of a previous SDI startup. sdi_modeSDI mode, how SDI was started for this runtime, either SDIMode_Headless or SDIMode_Standard, see enum SDIMode of sdi_sysconfig.h 


### function read_file

```cpp
bool read_file(
    const char * file,
    string & data
)
```


### function write_file

```cpp
bool write_file(
    const char * file,
    const string & data
)
```


### function copy_file

```cpp
bool copy_file(
    const string & src,
    const string & dest
)
```


### function move_file

```cpp
bool move_file(
    const string & src,
    const string & dst
)
```


### function get_dir_files

```cpp
int get_dir_files(
    const char * dir,
    vector< string > * files,
    const char * regex
)
```


### function copy_files

```cpp
int copy_files(
    const vector< string > & files,
    const char * dst_dir,
    unsigned modes
)
```


### function remove_dir

```cpp
int remove_dir(
    const string & path,
    unsigned modes
)
```


### function remove_files

```cpp
int remove_files(
    const vector< string > & files,
    unsigned modes
)
```


### function binary_dir

```cpp
const char * binary_dir()
```


**Return**: absolute path to SDI server binary 

**Note**: On Titus, this function returns an empty string. 

return the absolute path to the SDI server binary (without filename) 


### function home_flash_file

```cpp
string home_flash_file(
    const string & file
)
```


### function home_config_file

```cpp
string home_config_file(
    const string & file
)
```


### function lookup_config_file

```cpp
string lookup_config_file(
    const string & file
)
```


### function plugin_config_dir

```cpp
const char * plugin_config_dir()
```


**Return**: bsolute path of the folder containing plugin configuration files 

**Note**: Plugin configuration files are installed with SDI plugin package and treaded like internal SDI configuration (as installed with a SDI config package). The reason is these files are installed with system priviledges, thus, we place them to subfolder plugincfg under home configuration directory (see [home_config_dir()](namespacesdi_1_1filesystem.md#function-home-config-dir)) 

return the absolute path of the folder containing plugin configuration files (with extension cfg, json). VOS3/Android: $HOME/sdi/plugincfg VOS/VOS2: $HOME/share/sdi/plugincfg Titus: $HOME/plugincfg, with /sdi as $HOME (unused so far) 


### function run_actions

```cpp
static unsigned short run_actions(
    unsigned long actions,
    unsigned long source =ASRC_Default
)
```


**Parameters**: 

  * **actions** bitmask containing actions to process, see enum Action. 
  * **source** bitmask containing action sources (e.g. installation or removal), see enum ActionSource. ASRC_Default used as default (installation, pre-action) 


**Return**: SDI error code 0x9000 for success or no action executed, else 0x64xx for error 

runs the actions before or after user configuration update or removal 


### function write_file_from_tar

```cpp
static bool write_file_from_tar(
    FILE * tar,
    const TarEntry & entry,
    const char * outdir
)
```


### function extract_tar

```cpp
int extract_tar(
    const string & tarfile,
    const string & destdir,
    const char * regex
)
```


### function install_emv_config_package

```cpp
unsigned short install_emv_config_package(
    const string & emv_config_pkg
)
```


### function home_flash_dir

```cpp
const char * home_flash_dir()
```


**Return**: absolute path to SDI flash folder for writeable files 

return the absolute path to SDI flash folder in home directory. (VOS/VOS2/VOS3/Android: $HOME/flash/sdi) (Titus: $HOME/flash, with /sdi as $HOME) If subfolders do not already exist, they are created with the first call of this function. The flash folder is the location for files, which require write access by SDI server. Writeable configuration files are synchononized with those files of external user configuration packages by invocation of [init()](namespacesdi_1_1filesystem.md#function-init) function at SDI server startup. 


### function home_config_dir

```cpp
const char * home_config_dir()
```


**Return**: absolute path to SDI default configuration folder (with read-only files) 

return the abloslute path of SDI configuration folder in home directory. (VOS/VOS2: $HOME/share/sdi) (VOS3/Android: $HOME/sdi) (Titus: $HOME, with /sdi as $HOME) This folder holds the SDI default configuration files, which are used, as long as not overloaded by external user configuration package. SDI configuration folder contains files for read access only. 


### function ext_config_dir

```cpp
const char * ext_config_dir()
```


**Return**: absolute path to external SDI configuration folder (with read-only files) 

**Note**: On VOS3 SDI checks at startup for the existence of the folder /home/usr<X>/sdi starting from usr1 up to usr16. If the folder is found under a specific user, this user directory is applied for external SDI configuration. This means, the first user providing the folder wins, other users with higher user numbers will be ignored. 

return the abloslute path of external SDI configuration folder directory. (VOS/VOS2: /etc/config/sdi) (VOS3: /home/usr<X>/sdi) (Android: $HOME/sdi_ext) (Titus: $HOME/ext, with /sdi as $HOME) This folder holds the external configuration files, which were installed by user configuration package to overload SDI default configuration. The external SDI configuration folder contains files for read access only. 


### function emv_flash_dir

```cpp
const char * emv_flash_dir()
```


**Return**: absolute path to shared flash folder for writeable EMV files 

**Note**: Also required for SW update on Android and to access "EMV_Terminal.xml" to get terminal language. 

return the absolute path to flash folder for writeable EMV files. If the directory does not exist, it is created and group is adjusted for EMV usage. (VOS/VOS2: /mnt/flash/etc/config/adkemv) (VOS3: /mnt/appdata/versioned/globalshare/sdi/emv) (Android: $HOME/flash/adkemv) (Titus: $HOME/flash/adkemv, with /sdi as $HOME) 


### function emv_config_dir

```cpp
const char * emv_config_dir()
```


**Return**: absolute path to HOME for read-only EMV files. 

**Note**: Required for SW update on Android. On VOS and Titus, this function is unused. 

return the absolute path to folder for read-only EMV files. (VOS/VOS2: /etc/config/adkemv) (Android: $HOME) (VOS3: <ext_cfg_dir>/emv; <ext_cfg_dir> as provided by [ext_config_dir()](namespacesdi_1_1filesystem.md#function-ext-config-dir)) (Titus: $HOME, with /sdi as $HOME, even emv-desired.xml is not supported on this platform) 


### function log_config_dir

```cpp
const char * log_config_dir()
```


**Return**: absolute path to HOME for ADK Logging configuration files 

**Note**: Required for SW update on Android. On VOS it is unused. 

return the absolute path to folder for ADK Logging configuration files (VOS/VOS2: /mnt/flash/etc/config/adk-log) (Android: $HOME) (VOS/VOS3: /mnt/appdata/versioned/globalshare/etc/config/adk-log) (Titus: <ext_cfg_dir>/adk-log; <ext_cfg_dir> as provided by [ext_config_dir()](namespacesdi_1_1filesystem.md#function-ext-config-dir)) 


### function nfc_flash_dir

```cpp
const char * nfc_flash_dir()
```


**Return**: absolute path to HOME for ADKNFC configuration files 

return the absolute path for destination folder of ADKNFC configuration files These files require write access, therefore, on Engage these are located in flash. (VOS/VOS2/VOS3: $HOME/flash) (Android: $HOME) (Titus: $HOME, with /sdi as $HOME, even NFC is not supported on this platform) 


### function home_lib_dir

```cpp
const char * home_lib_dir()
```


**Return**: absolute path to home lib folder 

**Note**: This library folder is used for SDI plugins and libraries coming along with SDI download packages. 

return the abloslute path of lib folder in home directory. (VOS/VOS2/VOS3/Android: $HOME/lib) (Titus: $HOME, with /sdi as $HOME, even libraries are not supported on this platform) 


### function ext_plugin_dir

```cpp
const char * ext_plugin_dir()
```


**Return**: absolute path to external plugin directory or an empty string 

**Note**: This folder is used on Android platform only, which must use a separate folder for plugins. External plugins come along with SDI plugin packages and on Android SDI server is not able to write to lib folder ([home_lib_dir()](namespacesdi_1_1filesystem.md#function-home-lib-dir)) due to missing write permissions. On platforms without external plugins folder (e.g. VOS), this function returns an empty string. 

return the absolute path of the folder for external plugins (Android: $HOME/plugins) (VOS/VOS2/VOS3/Titus: empty string) 


### function ext_font_dir

```cpp
const char * ext_font_dir()
```


**Return**: absolute path to external fonts directory or an empty string 

**Note**: This function is un-used on VOS, since fonts are installed with SI font packages to the system folder, we ADK components have access to use them. On Android, ADKPRT runs in context of SDI, therefore, fonts are installed with an user config package to application domain folder. 

return the absolute path of the folder for external fonts. (Android: $HOME/fonts/sdi_ext) (VOS/VOS2/VOS3: /usr/share/fonts) (Titus: <ext_cfg_dir>/fonts; <ext_cfg_dir> as provided by [ext_config_dir()](namespacesdi_1_1filesystem.md#function-ext-config-dir), unused so far) 


### function tmp_dir

```cpp
const char * tmp_dir()
```


**Return**: absolute path to writeable system temp folder 

**Note**: This is recently required by SDI server to store some temporary keys for VCL. 

return the absolute path to writeable system temp folder. (VOS/VOS2/VOS3: /tmp) (Android: $HOME/tmp) (Titus: $HOME/tmp, with /sdi as $HOME, unused so far) 


### function upload_install_dir

```cpp
const char * upload_install_dir(
    bool flash =true
)
```


**Parameters**: 

  * **flash** set to true to use home flash folder as installation directory. This parameter is relevant for VOS/VOS2 only, which requires to use home flash directory to store temporary installation files for newer OS versions. This is to reduce RAM usage, since files would be usually stored to /mnt/flash/install/dl, which is a RAM disk. 


**Return**: absolute path to system download package installation directory 

**Note**: This is recently required by SDI server to store download packages with software upload commands (20-14,20-15,20-16) and sponsor certificate installation with command 20-1B. 

return absolute path to upload and installation directory for download packages or certificates (VOS/VOS2: /mnt/flash/install/dl or $HOME/flash/sdi/install) (VOS3: $HOME/flash/sdi/install) (Android: $HOME/install -> e.g. used to install the sponsor certificate) (Titus: $HOME/install, with /sdi as $HOME) 


### function sys_remove_sponsor_dir

```cpp
const char * sys_remove_sponsor_dir()
```


**Return**: absolute path to system sponsor removal directory (or an empty string if not supported) 

**Note**: This is recently required by SDI server for command 20-1D (Check for Update) with command type 7 (remove sponsor certificate). 

return absolute path to system directory for removal of sponsor certificates (VOS/VOS2/VOS3/Titus: not supported, an empty string is returned) (Android: /data/secure/sponsor -> used to store the file CRTRESET.SYS to remove the sponsor certificate). 


### function ccp_resource_dir

```cpp
const char * ccp_resource_dir()
```


**Return**: absolute path to CCP resource directory or NULL in case of error/no CCP support 

**Note**: This function returns NULL, if the platform has no CCP support. 

return absolute path to resource folder of CCP (ADK COM CONTROL PANEL) (VOS/VOS2/VOS3: <ext_cfg_dir>/ccp/www or $HOME/www/ccp or NULL, if no resources are found. <ext_cfg_dir> as provided by [ext_config_dir()](namespacesdi_1_1filesystem.md#function-ext-config-dir)) (Android: NULL, no CCP support) 


### function ccp_database_dir

```cpp
const char * ccp_database_dir()
```


**Return**: absolute path to CCP resource directory or NULL in case of error/no CCP support 

**Note**: This function returns NULL, if the platform has no CCP support. 

return absolute path to database folder of CCP (ADK COM CONTROL PANEL) (VOS/VOS2/VOS3: $HOME/flash/com) (Android: NULL, no CCP support) 


### function sdi_update_dir

```cpp
const char * sdi_update_dir()
```


**Return**: ablosulte path to update package folder or an empty string, if not supported by plattform (e.g. Engage) 

read-only source directory for SDI related update package files. (Android: /data/secure/sdi) (VOS/VOS2/VOS3: empty string) (Titus: $HOME/update) Recently used the following platforms: Android: command "Check for update (20-1D)" Titus: installation for user/system configuration package installation with command "Software Upload (20-14,20-15,20-16)" 


### function sdi_persist_dir

```cpp
const char * sdi_persist_dir(
    bool system =false
)
```


**Return**: ablosulte path to persistent SDI data folder or an empty string, if not supported on platform (e.g. Engage) 

persistant directory to store SDI related update files for default recovery. (Android: /persist/appdata/sdi) (VOS/VOS2/VOS3: empty string) (Titus: $HOME/persist/sys, for system==true $HOME/persist/usr, for system==false) Recently used the following platforms: Android: command "Check for update (20-1D)" and command "Factory Reset (20-22)" Titus: installation for user/system configuration package installation with command "Software Upload (20-14,20-15,20-16)" and command "Factory Reset (20-22)" 


### function sdi_certstore_dir

```cpp
const char * sdi_certstore_dir()
```


**Return**: ablosulte path to SDI certstore folder 

certificate directory, in which SDI stores certificates (e.g. CAs for TLS (Authex) and device pairing). Usually, the function is required for devices with K81, from which certificates are read before used. (Android: $HOME/certstore) (VOS/VOS2/VOS3: $HOME/flash/sdi/certstore) 


### function readRemovalFile

```cpp
static unsigned short readRemovalFile(
    const string & remove_file,
    vector< string > & files
)
```


**Parameters**: 

  * **remove_file** removal file to read 
  * **files** list of files to be removed 


**Return**: SDI error code (0x9000 for success, 0x64xx for error) 

**Note**: The removal file (remove.json) contains an array 'files' with a relative path per file to remove. The same file and format is used for both, removal of user configuration files and SDI plugins.

read removal file used for check for update removal commands 
Example format for removal.json (to remove user configuration files): 

```cpp
{
  "files": [
    "emv/[Ee][Mm][Vv][_-].*\.[Xx][Mm][Ll]",  // remove all EMV config files
    "sec/sccfg.json",
    "config.json",
    "whitelist.json",
    "sensitivetags.json",
    "cardranges.json"
  ]
}
```

Example format for removal.json (to remove a SDI plugin): 

```cpp
{
  "files": [
    "libsdiplugin-myplugin1.so",
    "libsdiplugin-myplugin2.so"
  ]
}
```


### function install_configuration

```cpp
static unsigned short install_configuration(
    bool recover,
    bool system =false
)
```


### function remove_configuration

```cpp
static unsigned short remove_configuration(
    bool system =false
)
```


### function install_user_configuration

```cpp
unsigned short install_user_configuration(
    bool recover =false
)
```


**Parameters**: 

  * **recover** flag set to true to restore and install the configuration files from persistent directory 


**Return**: SDI error code (0x9000 for success, 0x64xx for error) 

install user configuration from update package, which was added to SDI update directory (see [sdi_update_dir()](namespacesdi_1_1filesystem.md#function-sdi-update-dir)). The function is called with command "Check for update (20-1D)" using upload type UPLOAD_TYPE_CONFIG_SDIEMV. On Android the update package data is provided and the command is sent by Android Secure Installer. Configuration files are expected in a specified folder structure, whereas other components than SDI (e.g. ADKEMV or ADKSEC) use a path prefix like "emv" or "sec". The function knows the internal location for each file. In addition, the function does not allow to install arbitrary files, therefore, it checks, if the found files are in internal whitelist (see table allowed_files in [filesystem.cpp](filesystem_8cpp.md#file-filesystem.cpp)). After all configuration files were installed the function runs required post actions (if any), which are related to the installed files. Finally, the function stores a backup copy of each file to persitent directory (see [sdi_persist_dir()](namespacesdi_1_1filesystem.md#function-sdi-persist-dir)) to make the installed files recoverable for command "Factory Reset (20-22)". For command "Factory Reset (20-22)" the same function is invoked with flag `recover=true`, to restore and install the backup copies from persistent directory. 


### function remove_user_configuration

```cpp
unsigned short remove_user_configuration()
```


**Return**: SDI error code (0x9000 for success, 0x64xx for error) 

**Note**: The removal file (remove.json) contains an array 'files' with a relative path per file to remove. The same external path representation as in update packages is used and the function knows the internal location for each file. The lines may also contain reguluar expressions to match multiple files to delete. The function does not allow to remove arbitrary files, therefore, it checks, if the found files are in internal whitelist (see table allowed_files). If a line in the removal file does not match any existing allowed file, the line is ignored and it is proceeded with the next line. Example format for removal.json: 

```cpp
{
  "files": [
    "emv/[Ee][Mm][Vv][_-].*\.[Xx][Mm][Ll]",  // remove all EMV config files
    "sec/sccfg.json",
    "config.json",
    "whitelist.json",
    "sensitivetags.json",
    "cardranges.json"
  ]
}
```

remove user configuration files according removal file, which is looked up in SDI update directory (see [sdi_update_dir()](namespacesdi_1_1filesystem.md#function-sdi-update-dir)). The function is called with command "Check for update (20-1D)" using upload type UPLOAD_TYPE_REMOVE_CONFIG_SDIEMV. On Android the update package data is provided and the command is sent by Android Secure Installer. After removal, it runs required post actions (if any), which are related to the removed files. Finally, the function removes the backup copy of each file from persitent directory (see [sdi_persist_dir()](namespacesdi_1_1filesystem.md#function-sdi-persist-dir)) so that command "Factory Reset (20-22)" will no longer recover the files. 


### function install_sdi_plugins

```cpp
unsigned short install_sdi_plugins(
    bool recover =false
)
```


**Parameters**: 

  * **recover** flag set to true to restore and install the SDI plugins from persistent directory 


**Return**: SDI error code (0x9000 for success, 0x64xx for error) 

install SDI plugins from update package, which was added to SDI update directory (see [sdi_update_dir()](namespacesdi_1_1filesystem.md#function-sdi-update-dir)). Plugins are expected in a specified subfolder "plugin". The function is called wiht command "Check for update (20-1D)" using upload type UPLOAD_TYPE_PLUGIN. On Android the update package data is provided and the command is sent by Android Secure Installer. The function copies the external plugin in internal location, which is specified by [ext_plugin_dir()](namespacesdi_1_1filesystem.md#function-ext-plugin-dir). In addition, the function does not allow to install arbitrary files, therefore, it checks, if each found plugin matches the plugin pattern PLUGIN_PATTERN. After the plugins were overtaken to plugin directory, the plugins are loaded and registered for usage in SDI server. If an external plugin has the same name as an internal plugin (provided with SDI base package, see function [home_lib_dir()](namespacesdi_1_1filesystem.md#function-home-lib-dir)) and shall "overload" it, the internal plugin is unregisted and unloaded before the external plugin installed. Finally, the function stores a backup copy of each plugin to persitent directory (see [sdi_persist_dir()](namespacesdi_1_1filesystem.md#function-sdi-persist-dir)) to make the installed plugins recoverable for command "Factory Reset (20-22)". For command "Factory Reset (20-22)" the same function is invoked with flag `recover=true`, to restore and install the backup copies from persistent directory. 


### function remove_sdi_plugins

```cpp
unsigned short remove_sdi_plugins()
```


**Return**: SDI error code (0x9000 for success, 0x64xx for error) 

**Note**: The removal file (remove.json) contains an array 'files' with a filename per plugin to remove. No path prefix is added, the function knows the internal location for each file. The filenames may also contain reguluar expressions to match multiple files to delete. The function does not allow to remove arbitrary files, therefore, it checks, if the regular expression matches one or more plugins is in external plugin folder before the plugin is unregistered, unloaded and removed. If a filename in the removal file does not match any existing plugin, the entry is ignored and it is proceeded with the next one. Example format for removal.json: 

```cpp
{
  "files": [
    "libsdiplugin.*\.so",  // remove all external SDI plugins
  ]
}
```

remove SDI plugins according removal file, which is looked up in SDI update directory (see [sdi_update_dir()](namespacesdi_1_1filesystem.md#function-sdi-update-dir)). The removal file is expected in a specified subfolder "plugin". The function is called with command "Check for update (20-1D)" using upload type UPLOAD_TYPE_REMOVE_PLUGIN. On Android the update package data is provided and the command is sent by Android Secure Installer. Before removal of a plugin, the plugin is unloaded and unregistered for usage in SDI server. If a plugin is removed, which has the same name as an internal plugin in [home_lib_dir()](namespacesdi_1_1filesystem.md#function-home-lib-dir), the internal plugin is loaded and reactivated again. Finally, the function removes the backup copy of each plugin from persitent directory (see [sdi_persist_dir()](namespacesdi_1_1filesystem.md#function-sdi-persist-dir)) so that command "Factory Reset (20-22)" will no longer recover the plugin. 


### function read_file

```cpp
bool read_file(
    const char * file,
    std::string & data
)
```


**Parameters**: 

  * **file** name of the file to be read 
  * **data** content of the file that was read 


**Return**: true for success, else false (file couldn't been opened) 

helper function to read a file into a string 


### function write_file

```cpp
bool write_file(
    const char * file,
    const std::string & data
)
```


**Parameters**: 

  * **file** name of the file to be written 
  * **data** content of the string to be written 


**Return**: true for success, else false (file couldn't been opened) 

helper function to write a string into a file 


### function copy_file

```cpp
bool copy_file(
    const std::string & src,
    const std::string & dest
)
```


**Parameters**: 

  * **src** source file location 
  * **dest** destination file location 


**Return**: true for success, else false for error 

helper function to copy a file from source `src` to destination `dest`. 


### function move_file

```cpp
bool move_file(
    const std::string & src,
    const std::string & dest
)
```


**Parameters**: 

  * **src** source file location 
  * **dest** destination file location 


**Return**: true for success, else false for error 

helper function to move file from source `src` to destination `dest`. 


### function get_dir_files

```cpp
int get_dir_files(
    const char * dir,
    std::vector< std::string > * files =0,
    const char * regex =0
)
```


**Parameters**: 

  * **dir** path to directory, which contains the files 
  * **files** pointer to vector storing the found files (absolute file paths) or NULL if the function is just used for file counting. 
  * **regex** regular expression to match specific files be considered or NULL to find all regular files in directory `dir`. 


**Return**: number of files, which were found. -1 is returned in case of error (e.g. from directory path or missing permissions). 

**Note**: The function does not work recursive, thus, subfolders in directory `dir` are not considered. 

helper function to count and/or obtain all files in directory `dir`. Caller has the option to pass a regular expression `regex` to match specific files to be considered for the result. The regular expression is applied on the full file path including the path prefix. If no regular expression is passed (NULL), all regular files in the directory are considered. For just counting files of the directory `dir`, caller can set parameter `files` to NULL. 


### function copy_files

```cpp
int copy_files(
    const std::vector< std::string > & files,
    const char * dst_dir,
    unsigned modes =FM_Default
)
```


**Parameters**: 

  * **files** vector of files to be copied to destination directory 
  * **dst_dir** path to destination directory, where the files are copied to 
  * **modes** function operation modes, see enum [FilesModes](namespacesdi_1_1filesystem.md#enum-filesmodes)


**Return**: number of files, which were copied. -1 is returned in case of error due to missing directory or file access. 

helper function to copy multiple files to destination directory `dst_dir`. Source files to be copied are specified by vector `files`. 


### function remove_files

```cpp
int remove_files(
    const std::vector< std::string > & files,
    unsigned modes =FM_Default
)
```


**Parameters**: 

  * **files** vector of files to be removed 
  * **modes** function operation modes, see enum [FilesModes](namespacesdi_1_1filesystem.md#enum-filesmodes)


**Return**: number of files, which were removed. -1 is returned in case of error due to missing directory or file access. 

helper function to remove multiple files. Files to be removed are specified by vector `files`. 


### function remove_dir

```cpp
int remove_dir(
    const std::string & path,
    unsigned modes =FM_Default
)
```


**Parameters**: 

  * **path** path to drectory (or file) to be removed. 
  * **modes** function operation modes, see enum [FilesModes](namespacesdi_1_1filesystem.md#enum-filesmodes)


**Return**: number of files, which were removed. -1 is returned in case of error due to missing directory or file access. 

helper function to remove a directory recursively with all its content. If _path_ already refers a file, the file is removed. 


### function extract_tar

```cpp
int extract_tar(
    const std::string & tarfile,
    const std::string & destdir,
    const char * regex =0
)
```


**Parameters**: 

  * **tarfile** tar file, which shall be extracted 
  * **destdir** destination directory in which all files are extracted. If the directory does not exist yet, it will be created. 
  * **regex** regular expression to match specific files be considered or NULL to extract all regular files from the tar file. 


**Return**: number of files, which were extracted. -1 is returned in case of error (e.g. tar file is not found, not valid or is empty). 

**Note**: The function does not consider empty directories, in addition, other files types (e.g. symbolic links) are ignored. 

helper function to extract all regular files in uncompressed tar file `tarfile` into directory `destdir`. Caller has the option to pass a regular expression `regex` to match specific files to be considered for extraction. Files, which do not match, are skipped/ignored. The regular expression is applied on the filename of the tar file entry, which looks as follows: Examples: file.json (file on root level) dir/file.json (file in subdirectory) If no regular expression is passed (NULL), all regular files of tar file are extracted. 


### function home_flash_file

```cpp
std::string home_flash_file(
    const std::string & file
)
```


**Parameters**: 

  * **file** relative filename to append to [home_flash_dir()](namespacesdi_1_1filesystem.md#function-home-flash-dir)


**Return**: file path 

Appends a relative filename `file` to path returned by [home_flash_dir()](namespacesdi_1_1filesystem.md#function-home-flash-dir)


### function home_config_file

```cpp
std::string home_config_file(
    const std::string & file
)
```


**Parameters**: 

  * **file** relative filename to append to [home_config_dir()](namespacesdi_1_1filesystem.md#function-home-config-dir)


**Return**: file path 

**Note**: Use this function for SDI configuration file provided by SDI installation packages and which cannot be overloaded by user configuration packages. 

Appends a relative filename `file` to path returned by [home_config_dir()](namespacesdi_1_1filesystem.md#function-home-config-dir)


### function lookup_config_file

```cpp
std::string lookup_config_file(
    const std::string & file
)
```


**Parameters**: 

  * **file** relative file path to look up the configuration file (e.g. "sec/sccfg.json") 


**Return**: absolute path of the found configuration file (e.g. "/etc/config/sdi/sec/sccfg.json" or "$HOME/share/sdi/sec/sccfg.json") or an empty string, if the file was not found. 

lookup a configuration file (read-only) by its relative path `file` and return the absolute path for it. The function looks up the file at first in external configuration folder (provided by [ext_config_dir()](namespacesdi_1_1filesystem.md#function-ext-config-dir)). If not found there, the file is searched in SDI default configuration folder (provided by [home_config_dir()](namespacesdi_1_1filesystem.md#function-home-config-dir)). The function return an empty string, if the file is not found in one of both locations. 


### function install_emv_config_package

```cpp
unsigned short install_emv_config_package(
    const std::string & emv_config_pkg
)
```


**Parameters**: 

  * **emv_config_pkg** file path to EMV config update package (tarball) 


**Return**: SDI error code (0x9000 for success, 0x64xx for error) 

install an EMV coniguration package as a tarball (uncompressed), which contains EMV configuration files to be installed into EMV flash directory. This is provided by [emv_flash_dir()](namespacesdi_1_1filesystem.md#function-emv-flash-dir) and contains EMV configuration files on which ADKEMV requires write access. The function is called during "SW upload 20-14/20-15/20-16" using upload type UPLOAD_TYPE_EMV_CONFIG_PACKAGE. After all configuration files were installed the function runs required post actions, which are related to the installed files. 



## Attributes Documentation

### variable allowed_usr_files

```cpp
const struct UpdateFiles[] allowed_usr_files =
    {

      { EMV_PREFIX, EMV_FLASH_CONFIG_FILES, true,  LOC_EmvFlashDir,     "", (ACT_DisableEpp | ACT_EmvExit), ACT_EmvInitInfo },       
      { EMV_PREFIX, EMV_DESIRED_FILE,       false, LOC_EmvConfigDir,    "", (ACT_DisableEpp | ACT_EmvExitComplete), ACT_EmvInitInfo },       
      { SEC_PREFIX, ADKSEC_CONFIG_FILE,     false, LOC_SdiExtConfigDir, SEC_PREFIX, ACT_None, ACT_SecInit       }, 
      { "", SDI_CONFIG_FILE,                false, LOC_SdiExtConfigDir, "",         ACT_None, ACT_None          }, 
      { "", SDI_ACL_FILE,                   false, LOC_SdiExtConfigDir, "",         ACT_None, ACT_AclInit       }, 
      { "", WHITELIST_FILE,                 false, LOC_SdiFlashDir,     "",         ACT_None, ACT_WhitelistFile }, 
      { "", SENSITIVE_TAGS_FILE,            false, LOC_SdiFlashDir,     "",         ACT_None, ACT_None          }, 
      { "", CARD_RANGES_FILE,               false, LOC_SdiFlashDir,     "",         ACT_None, ACT_CardRanges    }, 
      { "", UPDATE_REMOVE_FILE,             false, LOC_None,            "",         ACT_None, ACT_None          }, 
      { LOG_PREFIX, LOG_CONFIG_FILES,       true,  LOC_LogConfigDir,    "",         ACT_None, ACT_LogInit       }, 
      { NFC_PREFIX, NFC_WKY_FILES,          true,  LOC_NfcFlashDir,     "",         ACT_None, ACT_None          }, 
      { FONT_PREFIX, FONT_FILES,            true,  LOC_SdiExtFontsDir,  "",         ACT_None, ACT_None          }  







    };
```


user configuration files allowed for update and removal 


### variable allowed_usr_files_size

```cpp
const unsigned allowed_usr_files_size = (sizeof(allowed_usr_files) / sizeof(allowed_usr_files[0]));
```





-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100