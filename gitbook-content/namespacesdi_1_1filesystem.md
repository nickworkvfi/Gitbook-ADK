---
hidden: true
title: "sdi::filesystem Namespace Reference"
---

[Data Structures](#nested-classes) \| [Enumerations](#enum-members) \| [Functions](#func-members) \| [Variables](#var-members)

|                 |                                                          |
|-----------------|----------------------------------------------------------|
| Data Structures |                                                          |
| struct          | [UpdateFiles](#structsdi_1_1filesystem_1_1_update_files) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [Location](#aecaf6a9545fa815deb4b8e64e144ce43) {<br/>  [LOC_None](#aecaf6a9545fa815deb4b8e64e144ce43a3b40dfe58ff7a5a338c90da1545ec573), [LOC_SdiFlashDir](#aecaf6a9545fa815deb4b8e64e144ce43a878e84fff242aa27fa3ec07e9df71ea0), [LOC_SdiConfigDir](#aecaf6a9545fa815deb4b8e64e144ce43aec2d78a615b70e9f406ed59e7e089137), [LOC_SdiExtConfigDir](#aecaf6a9545fa815deb4b8e64e144ce43ab7bebc1fd312b79d4400b0bd715d837c),<br/>  [LOC_EmvFlashDir](#aecaf6a9545fa815deb4b8e64e144ce43a2adeec59d3dfd549c01ce9105dce5f5b), [LOC_EmvConfigDir](#aecaf6a9545fa815deb4b8e64e144ce43aa652c98e536a9dd60108b492c7d56501), [LOC_LogConfigDir](#aecaf6a9545fa815deb4b8e64e144ce43a28744a191aee5516275e3a88c20a0851), [LOC_NfcFlashDir](#aecaf6a9545fa815deb4b8e64e144ce43a836a3a9c2556f7f29455d5fc7a9cf19c),<br/>  [LOC_SdiExtFontsDir](#aecaf6a9545fa815deb4b8e64e144ce43acfc7b9731795d36feedccae005c07052)<br/>} |
| enum   | [Action](#a8bb1ef53467e4f61410d12822d922498) {<br/>  [ACT_None](#a8bb1ef53467e4f61410d12822d922498a56fb111b33a737bdddf89dd9568687df) = 0, [ACT_SecInit](#a8bb1ef53467e4f61410d12822d922498a3938f7524a0b71efd9adfd59a5f35f83) = (1 \<\< 0), [ACT_DisableEpp](#a8bb1ef53467e4f61410d12822d922498aae9ce02546bfc5b212048612e81b0825) = (1 \<\< 1), [ACT_EmvExit](#a8bb1ef53467e4f61410d12822d922498a531ff0d0f64adc3d9a04d15f268488da) = (1 \<\< 2),<br/>  [ACT_EmvExitComplete](#a8bb1ef53467e4f61410d12822d922498a1a0540a4bf370403942cf6c61cbf5a3c) = (1 \<\< 3), [ACT_EmvFlashPerm](#a8bb1ef53467e4f61410d12822d922498af5c01ad9c75206913bc3a8494842e468) = (1 \<\< 4), [ACT_EmvInitInfo](#a8bb1ef53467e4f61410d12822d922498ae62045a4320284f9bc06396b757bf777) = (1 \<\< 5), [ACT_LogInit](#a8bb1ef53467e4f61410d12822d922498a3e449095c7a30b5021d4675cde6d19c3) = (1 \<\< 6),<br/>  [ACT_CardRanges](#a8bb1ef53467e4f61410d12822d922498aeb9762197fdaecdeb2b76f59609636a5) = (1 \<\< 7), [ACT_WhitelistFile](#a8bb1ef53467e4f61410d12822d922498ab4b30277a00cda99b05dac98fe652c2f) = (1 \<\< 8), [ACT_AclInit](#a8bb1ef53467e4f61410d12822d922498a3b94499f650fd93b67a6d89f1420bcae) = (1 \<\< 9)<br/>} |
| enum   | [ActionSource](#a69f0011e8e844cb97a3507c1da3aa656) { [ASRC_Default](#a69f0011e8e844cb97a3507c1da3aa656a741d7fd60e2d656f4d4b71f9a29e79df) = 0, [ASRC_Removal](#a69f0011e8e844cb97a3507c1da3aa656a49f1485000653c3415ca12d3b95637c5) = (1 \<\< 0), [ASRC_PostAction](#a69f0011e8e844cb97a3507c1da3aa656a3c65ad6d8cd1e0a6bcd6852569b3b0d9) = (1 \<\< 1) } |
| enum   | [FilesModes](#a0b27accd35d4c377ef3a7c04b82a8b1f) { [FM_Default](#a0b27accd35d4c377ef3a7c04b82a8b1fa01ae168a66b5e79c94c5eccc153602b1) = 0, [FM_NoAbort](#a0b27accd35d4c377ef3a7c04b82a8b1fa47ea781826f29e64b46f2feb5780be07) = 1, [FM_Quiet](#a0b27accd35d4c377ef3a7c04b82a8b1faf990ad75b23de549d4a319237a47974f) = 2, [FM_KeepTopDir](#a0b27accd35d4c377ef3a7c04b82a8b1fa1a3a418ff306a51b0124aca8c1ca1bac) = 4 } |

|  |  |
|----|----|
| Functions |  |
| void  | [factory_reset](#a12545d574e9182af24a177d1cf453c0c) () |
| void  | [init](#a43918d493a7f56eef174f3c9a82a8e20) (enum config::SdiSysConfig::SDIMode sdi_mode) |
| bool  | [read_file](#a141d15606acd013831d2e4ead7765ab5) (const char \*file, string &data) |
| bool  | [write_file](#a3a27a49de579060fada2de1f1fcb72c5) (const char \*file, const string &data) |
| bool  | [copy_file](#a738972c314285885ecc6cbf7a864339a) (const string &src, const string &dest) |
| bool  | [move_file](#a5dd1f08cec548612d55ff24e08ae4dcd) (const string &src, const string &dst) |
| int  | [get_dir_files](#a1f6ec3c997cecac6418ae2cbe35b92d0) (const char \*dir, vector\< string \> \*files, const char \*regex) |
| int  | [copy_files](#a8f5d2647f4272f5b555144ad2c9f5239) (const vector\< string \> &files, const char \*dst_dir, unsigned modes) |
| int  | [remove_dir](#a8241068dfa57d30c7be7a289815533bf) (const string &path, unsigned modes) |
| int  | [remove_files](#a95279759f98284266e220092cbb51508) (const vector\< string \> &files, unsigned modes) |
| const char \*  | [binary_dir](#a52dd354a0640fd070653611d6de4722b) () |
| string  | [home_flash_file](#aabc728c4e4c0574111826ca732390cca) (const string &file) |
| string  | [home_config_file](#adebb7050fa15bdc4361a3d24f2c6e2f3) (const string &file) |
| string  | [lookup_config_file](#aae28890912feff7f83d3af43e35b986c) (const string &file) |
| const char \*  | [plugin_config_dir](#a383b7331d5268ea154c61f4ff4eb6ab8) () |
| int  | [extract_tar](#a71438e4a73e8ac1cecae82089cd9dded) (const string &tarfile, const string &destdir, const char \*regex) |
| unsigned short  | [install_emv_config_package](#a7412f8e8dc1ea4a649358a45031df492) (const string &emv_config_pkg) |
| const char \*  | [home_flash_dir](#a0de1824701ee8494b54c3c97cb17039b) () |
| const char \*  | [home_config_dir](#a1eee0f47abbf3108854b4178e194ba45) () |
| const char \*  | [ext_config_dir](#a1518fc71a30bfab59f82fc1a2726c627) () |
| const char \*  | [emv_flash_dir](#a817ffa0e3dd4d66ee5a1717aac4c94b8) () |
| const char \*  | [emv_config_dir](#a65ac0c4801674fbc1832569c7f34457d) () |
| const char \*  | [log_config_dir](#a1ba2e0d2621785a746e8a2bc2b85bfab) () |
| const char \*  | [nfc_flash_dir](#a3eb6af6e0de2e982c40979a8282da21b) () |
| const char \*  | [home_lib_dir](#a98b1808447b0f9e7848b35156a4c7cc9) () |
| const char \*  | [ext_plugin_dir](#ae7f61379f5979fbb09444be76ab12a1f) () |
| const char \*  | [ext_font_dir](#a01f85298159181054db31598024a039e) () |
| const char \*  | [tmp_dir](#a9bc32456ce574dce7e0dbee9f49ed5cd) () |
| const char \*  | [upload_install_dir](#a34a571792ddd1cbbe291af193597d9a0) (bool flash) |
| const char \*  | [sys_remove_sponsor_dir](#a6c67d203b4323cce1f3c274d3f2827ee) () |
| const char \*  | [ccp_resource_dir](#ac4b7a1244864c6c42d667f71e517c129) () |
| const char \*  | [ccp_database_dir](#a8705c6880d517d88098ddd7aa1e3716d) () |
| const char \*  | [sdi_update_dir](#a62f821b6937b4f380d3e22cde31d2920) () |
| const char \*  | [sdi_persist_dir](#aeddca685a1e934168171cfef8ef8697e) (bool system) |
| const char \*  | [sdi_certstore_dir](#abfa13da98e3a50c8c79f55671a6c71be) () |
| unsigned short  | [install_user_configuration](#ad41174b98a363bf48bbcfc62984939ef) (bool recover) |
| unsigned short  | [remove_user_configuration](#abfc178565b6c9e326831f7ef51646744) () |
| unsigned short  | [install_sdi_plugins](#af65203b969499e2d36e34c08172a9f30) (bool recover) |
| unsigned short  | [remove_sdi_plugins](#ac42ad54eda4b15aa9d9f2d7bda4a55a5) () |
| bool  | [read_file](#ad9ecf729e46fab7ad576ed4bc9b4b2cf) (const char \*file, std::string &data) |
| bool  | [write_file](#a0c3b0966ff7d9a48ffef25f5c1715e82) (const char \*file, const std::string &data) |
| bool  | [copy_file](#afa6d3c16d20a51cd378284f6829cebf0) (const std::string &src, const std::string &dest) |
| bool  | [move_file](#acc0eb80e0e44c07c5f0edfa0763150a5) (const std::string &src, const std::string &dest) |
| int  | [get_dir_files](#a1141fe1b44fce28b28f053c07fc3d591) (const char \*dir, std::vector\< std::string \> \*files=0, const char \*regex=0) |
| int  | [copy_files](#a97c401199b467196a4e427c5c51ac5d3) (const std::vector\< std::string \> &files, const char \*dst_dir, unsigned modes=[FM_Default](#a0b27accd35d4c377ef3a7c04b82a8b1fa01ae168a66b5e79c94c5eccc153602b1)) |
| int  | [remove_files](#ae04fc0d5bbc079cc49174bbe72ec2d7c) (const std::vector\< std::string \> &files, unsigned modes=[FM_Default](#a0b27accd35d4c377ef3a7c04b82a8b1fa01ae168a66b5e79c94c5eccc153602b1)) |
| int  | [remove_dir](#add3a308833cddc7775215c8fc3d1d608) (const std::string &path, unsigned modes=[FM_Default](#a0b27accd35d4c377ef3a7c04b82a8b1fa01ae168a66b5e79c94c5eccc153602b1)) |
| int  | [extract_tar](#a3f65ebfc86c128bc4d198e376e187ff7) (const std::string &tarfile, const std::string &destdir, const char \*regex=0) |
| std::string  | [home_flash_file](#a5748ac7656cef8d6b10941d76eac115d) (const std::string &file) |
| std::string  | [home_config_file](#ab8862ea906c088c55072c8ea390c0adc) (const std::string &file) |
| std::string  | [lookup_config_file](#a3f6f1faaea3bfa5fb011c57ec15c7749) (const std::string &file) |
| unsigned short  | [install_emv_config_package](#a292b4583cbbd3327c059f32edc6e6168) (const std::string &emv_config_pkg) |

|  |  |
|----|----|
| Variables |  |
| const struct [UpdateFiles](#structsdi_1_1filesystem_1_1_update_files)  | [allowed_usr_files](#af64ea9fc2f13d8f3be606630ef0436cd) \[\] |
| const unsigned  | [allowed_usr_files_size](#a8ab079877b3d40867b387ea29bf1db93) = (sizeof([allowed_usr_files](#af64ea9fc2f13d8f3be606630ef0436cd)) / sizeof([allowed_usr_files](#af64ea9fc2f13d8f3be606630ef0436cd)\[0\])) |

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## sdi::filesystem::UpdateFiles <a href="#structsdi_1_1filesystem_1_1_update_files" id="structsdi_1_1filesystem_1_1_update_files"></a>

<p>struct sdi::filesystem::UpdateFiles</p>

update file definition to check for allowed files to update and remove

| Data Fields |  |  |
|----|----|----|
| enum [Location](#aecaf6a9545fa815deb4b8e64e144ce43) | dest | <p>destination on terminal, see enum Dest</p> |
| const char \* | dest_prefix | <p>file prefix (path) used in application folder (if any)</p> |
| const char \* | file | <p>name of the update file (without path)</p> |
| unsigned long | post_actions | <p>post-actions (bitmask) to execute for this file after update (see enum Action)</p> |
| unsigned long | pre_actions | <p>pre-actions (bitmask) to execute for this file before update (see enum Action)</p> |
| const char \* | prefix | <p>file prefix (path) in the user configuration package</p> |
| bool | regex | <p>file is already a regular expression</p> |

## EnumerationType Documentation {#enumeration-type-documentation}

## Action <a href="#a8bb1ef53467e4f61410d12822d922498" id="a8bb1ef53467e4f61410d12822d922498"></a>

<p>enum [Action](#a8bb1ef53467e4f61410d12822d922498)</p>

actions supported by run_actions() below (bitmask used to combine actions). Order of execution is sprecified by run_actions() and recently corresponds to enum order.

| Enumerator |  |
|----|----|
| ACT_None  | <p>no action</p> |
| ACT_SecInit  | <p>call <a href="namespacecom__verifone__seccmd.md#ab649bee85abb5cb4085c3958f279483d">secInit()</a> for this file (Android only)</p> |
| ACT_DisableEpp  | <p>disable attached EPP (if enabled as Countertop)</p> |
| ACT_EmvExit  | <p>call <a href="group___f_u_n_c___i_n_i_t.md#gaad2d6cdd1249528199d5dc969e48b43c">EMV_CT_Exit_Framework()</a> and <a href="group___f_u_n_c___i_n_i_t.md#gafe86c6980355b69b6a650af0bffcb7ed">EMV_CTLS_Exit_Framework()</a> for this file</p> |
| ACT_EmvExitComplete  | <p>call EMV_CT_Exit_Framework_extended(EXIT_CT_COMPLETE) and EMV_CTLS_Exit_Framework_extended(EXIT_CTLS_COMPLETE) for this file</p> |
| ACT_EmvFlashPerm  | <p>call set_emv_flash_permissions() on EMV flash config folder (VOS/VOS2/VOS3 only) Note: ACT_EmvFlashPerm must be below ACT_EmvInitInfo so that it is executed before ACT_EmvInitInfo as both are used together in [install_emv_config_package()](#a7412f8e8dc1ea4a649358a45031df492)</p> |
| ACT_EmvInitInfo  | <p>call initEmvInfo() to rebuild EMV Info cache</p> |
| ACT_LogInit  | <p>call LogAPI_ReconfigNotification() for this file</p> |
| ACT_CardRanges  | <p>reload cache for card ranges configuration</p> |
| ACT_WhitelistFile  | <p>reload cache for whitelist configuration</p> |
| ACT_AclInit  | <p>reload ACL (access control list) file</p> |

## ActionSource <a href="#a69f0011e8e844cb97a3507c1da3aa656" id="a69f0011e8e844cb97a3507c1da3aa656"></a>

<p>enum [ActionSource](#a69f0011e8e844cb97a3507c1da3aa656)</p>

action source specifying for what run_actions() was invoked

| Enumerator |  |
|----|----|
| ASRC_Default  | <p>default: installation (see ASRC_Removal) and pre-action (see ASRC_PostAction)</p> |
| ASRC_Removal  | <p>removal (not installation)</p> |
| ASRC_PostAction  | <p>post-action (not pre-action)</p> |

## FilesModes <a href="#a0b27accd35d4c377ef3a7c04b82a8b1f" id="a0b27accd35d4c377ef3a7c04b82a8b1f"></a>

<p>enum [FilesModes](#a0b27accd35d4c377ef3a7c04b82a8b1f)</p>

modes for functions [copy_files()](#a8f5d2647f4272f5b555144ad2c9f5239), [remove_files()](#a95279759f98284266e220092cbb51508), [remove_dir()](#a8241068dfa57d30c7be7a289815533bf)

| Enumerator |  |
|----|----|
| FM_Default  | <p>let first file error abort the function with -1.</p> |
| FM_NoAbort  | <p>function proceeds, in case of single files cannot be copied or removed. Function returns with number of successfully pocessed files.</p> |
| FM_Quiet  | <p>don\'t issue information to log (errors only), e.g. for non-existing files</p> |
| FM_KeepTopDir  | <p>only supported for [remove_dir()](#a8241068dfa57d30c7be7a289815533bf): keep top level directory, after the content was removed</p> |

## Location <a href="#aecaf6a9545fa815deb4b8e64e144ce43" id="aecaf6a9545fa815deb4b8e64e144ce43"></a>

<p>enum [Location](#aecaf6a9545fa815deb4b8e64e144ce43)</p>

file location directory for SDI configuration files

| Enumerator |  |
|----|----|
| LOC_None  | <p>No directory</p> |
| LOC_SdiFlashDir  | <p>SDI flash configuration directory (read/write)</p> |
| LOC_SdiConfigDir  | <p>SDI internal configuration directory (read-only)</p> |
| LOC_SdiExtConfigDir  | <p>SDI directory for external user configuration (read-only)</p> |
| LOC_EmvFlashDir  | <p>EMV flash configuration directory (read/write)</p> |
| LOC_EmvConfigDir  | <p>EMV configuration directory (read-only)</p> |
| LOC_LogConfigDir  | <p>ADK Logging configuration directory (read-only)</p> |
| LOC_NfcFlashDir  | <p>ADK NFC configuration directory (read/write)</p> |
| LOC_SdiExtFontsDir  | <p>SDI directory for external fonts (installed with user config package (read-only)</p> |

## FunctionDocumentation {#function-documentation}

## binary_dir() <a href="#a52dd354a0640fd070653611d6de4722b" id="a52dd354a0640fd070653611d6de4722b"></a>

<p>const char \* binary_dir</p>

return the absolute path to the SDI server binary (without filename)

### Returns

absolute path to SDI server binary


{% hint style="info" %}
On Titus, this function returns an empty string.
{% endhint %}

## ccp_database_dir() <a href="#a8705c6880d517d88098ddd7aa1e3716d" id="a8705c6880d517d88098ddd7aa1e3716d"></a>

<p>const char \* ccp_database_dir</p>

return absolute path to database folder of CCP (ADK COM CONTROL PANEL) (VOS/VOS2/VOS3: \$HOME/flash/com) (Android: NULL, no CCP support)

{% hint style="info" %}
This function returns NULL, if the platform has no CCP support.
{% endhint %}

### Returns

absolute path to CCP resource directory or NULL in case of error/no CCP support

## ccp_resource_dir() <a href="#ac4b7a1244864c6c42d667f71e517c129" id="ac4b7a1244864c6c42d667f71e517c129"></a>

<p>const char \* ccp_resource_dir</p>

return absolute path to resource folder of CCP (ADK COM CONTROL PANEL) (VOS/VOS2/VOS3: \<ext_cfg_dir\>/ccp/www or \$HOME/www/ccp or NULL, if no resources are found. \<ext_cfg_dir\> as provided by [ext_config_dir()](#a1518fc71a30bfab59f82fc1a2726c627)) (Android: NULL, no CCP support)

{% hint style="info" %}
This function returns NULL, if the platform has no CCP support.
{% endhint %}

### Returns

absolute path to CCP resource directory or NULL in case of error/no CCP support

## copy_file()\[1/2\] <a href="#afa6d3c16d20a51cd378284f6829cebf0" id="afa6d3c16d20a51cd378284f6829cebf0"></a> {#copy_file-12}

<p>bool sdi::filesystem::copy_file</p>

helper function to copy a file from source `src` to destination `dest`.

**Parameters**

\[in\] **src** source file location \[in\] **dest** destination file location

### Returns

true for success, else false for error

## copy_file()\[2/2\] <a href="#a738972c314285885ecc6cbf7a864339a" id="a738972c314285885ecc6cbf7a864339a"></a> {#copy_file-22}

<p>bool sdi::filesystem::copy_file</p>

## copy_files()\[1/2\] <a href="#a97c401199b467196a4e427c5c51ac5d3" id="a97c401199b467196a4e427c5c51ac5d3"></a> {#copy_files-12}

<p>int sdi::filesystem::copy_files</p>

helper function to copy multiple files to destination directory `dst_dir`. Source files to be copied are specified by vector `files`.

**Parameters**

\[in\] **files** vector of files to be copied to destination directory \[in\] **dst_dir** path to destination directory, where the files are copied to \[in\] **modes** function operation modes, see enum FilesModes

### Returns

number of files, which were copied. -1 is returned in case of error due to missing directory or file access.

## copy_files()\[2/2\] <a href="#a8f5d2647f4272f5b555144ad2c9f5239" id="a8f5d2647f4272f5b555144ad2c9f5239"></a> {#copy_files-22}

<p>int sdi::filesystem::copy_files</p>

## emv_config_dir() <a href="#a65ac0c4801674fbc1832569c7f34457d" id="a65ac0c4801674fbc1832569c7f34457d"></a>

<p>const char \* emv_config_dir</p>

return the absolute path to folder for read-only EMV files. (VOS/VOS2: /etc/config/adkemv) (Android: \$HOME) (VOS3: \<ext_cfg_dir\>/emv; \<ext_cfg_dir\> as provided by [ext_config_dir()](#a1518fc71a30bfab59f82fc1a2726c627)) (Titus: \$HOME, with /sdi as \$HOME, even emv-desired.xml is not supported on this platform)

{% hint style="info" %}
Required for SW update on Android. On VOS and Titus, this function is unused.
{% endhint %}

### Returns

absolute path to HOME for read-only EMV files.

## emv_flash_dir() <a href="#a817ffa0e3dd4d66ee5a1717aac4c94b8" id="a817ffa0e3dd4d66ee5a1717aac4c94b8"></a>

<p>const char \* emv_flash_dir</p>

return the absolute path to flash folder for writeable EMV files. If the directory does not exist, it is created and group is adjusted for EMV usage. (VOS/VOS2: /mnt/flash/etc/config/adkemv) (VOS3: /mnt/appdata/versioned/globalshare/sdi/emv) (Android: \$HOME/flash/adkemv) (Titus: \$HOME/flash/adkemv, with /sdi as \$HOME)

{% hint style="info" %}
Also required for SW update on Android and to access \"EMV_Terminal.xml\" to get terminal language.
{% endhint %}

### Returns

absolute path to shared flash folder for writeable EMV files

## ext_config_dir() <a href="#a1518fc71a30bfab59f82fc1a2726c627" id="a1518fc71a30bfab59f82fc1a2726c627"></a>

<p>const char \* ext_config_dir</p>

return the abloslute path of external SDI configuration folder directory. (VOS/VOS2: /etc/config/sdi) (VOS3: /home/usr\<X\>/sdi) (Android: \$HOME/sdi_ext) (Titus: \$HOME/ext, with /sdi as \$HOME) This folder holds the external configuration files, which were installed by user configuration package to overload SDI default configuration. The external SDI configuration folder contains files for read access only.

### Returns

absolute path to external SDI configuration folder (with read-only files)


{% hint style="info" %}
On VOS3 SDI checks at startup for the existence of the folder /home/usr\<X\>/sdi starting from usr1 up to usr16. If the folder is found under a specific user, this user directory is applied for external SDI configuration. This means, the first user providing the folder wins, other users with higher user numbers will be ignored.
{% endhint %}

## ext_font_dir() <a href="#a01f85298159181054db31598024a039e" id="a01f85298159181054db31598024a039e"></a>

<p>const char \* ext_font_dir</p>

return the absolute path of the folder for external fonts. (Android: \$HOME/fonts/sdi_ext) (VOS/VOS2/VOS3: /usr/share/fonts) (Titus: \<ext_cfg_dir\>/fonts; \<ext_cfg_dir\> as provided by [ext_config_dir()](#a1518fc71a30bfab59f82fc1a2726c627), unused so far)

{% hint style="info" %}
This function is un-used on VOS, since fonts are installed with SI font packages to the system folder, we ADK components have access to use them. On Android, ADKPRT runs in context of SDI, therefore, fonts are installed with an user config package to application domain folder.
{% endhint %}

### Returns

absolute path to external fonts directory or an empty string

## ext_plugin_dir() <a href="#ae7f61379f5979fbb09444be76ab12a1f" id="ae7f61379f5979fbb09444be76ab12a1f"></a>

<p>const char \* ext_plugin_dir</p>

return the absolute path of the folder for external plugins (Android: \$HOME/plugins) (VOS/VOS2/VOS3/Titus: empty string)

{% hint style="info" %}
This folder is used on Android platform only, which must use a separate folder for plugins. External plugins come along with SDI plugin packages and on Android SDI server is not able to write to lib folder ([home_lib_dir()](#a98b1808447b0f9e7848b35156a4c7cc9)) due to missing write permissions. On platforms without external plugins folder (e.g. VOS), this function returns an empty string.
{% endhint %}

### Returns

absolute path to external plugin directory or an empty string

## extract_tar()\[1/2\] <a href="#a3f65ebfc86c128bc4d198e376e187ff7" id="a3f65ebfc86c128bc4d198e376e187ff7"></a> {#extract_tar-12}

<p>int sdi::filesystem::extract_tar</p>

helper function to extract all regular files in uncompressed tar file `tarfile` into directory `destdir`. Caller has the option to pass a regular expression `regex` to match specific files to be considered for extraction. Files, which do not match, are skipped/ignored. The regular expression is applied on the filename of the tar file entry, which looks as follows: Examples: file.json (file on root level) dir/file.json (file in subdirectory) If no regular expression is passed (NULL), all regular files of tar file are extracted.

**Parameters**

\[in\] **tarfile** tar file, which shall be extracted \[in\] **destdir** destination directory in which all files are extracted. If the directory does not exist yet, it will be created. \[in\] **regex** regular expression to match specific files be considered or NULL to extract all regular files from the tar file.

### Returns

number of files, which were extracted. -1 is returned in case of error (e.g. tar file is not found, not valid or is empty).


{% hint style="info" %}
The function does not consider empty directories, in addition, other files types (e.g. symbolic links) are ignored.
{% endhint %}

## extract_tar()\[2/2\] <a href="#a71438e4a73e8ac1cecae82089cd9dded" id="a71438e4a73e8ac1cecae82089cd9dded"></a> {#extract_tar-22}

<p>int sdi::filesystem::extract_tar</p>

## factory_reset() <a href="#a12545d574e9182af24a177d1cf453c0c" id="a12545d574e9182af24a177d1cf453c0c"></a>

<p>void factory_reset</p>

perform a factory reset of SDI server. The function is invoked for external reset by command \"Factory Reset (20-22)\" and for internal reset by [init()](#a43918d493a7f56eef174f3c9a82a8e20), if the SDI mode has changed since last startup. The function does the following:

- It removes all writable files, which are modified by SDI server during runtime. In addition, all user config files are removed, which must be considered by the reset. On Titus, even system configuration files are removed.
- It creates writeable files (not belonging to user configuration packages) to restore other default settings, e.g. STATUS.CFG.
- On VOS platforms it synchronizes contents of installed user config packages to restore default configurations files coming along with these packages (see step 5 of [init()](#a43918d493a7f56eef174f3c9a82a8e20)). On Android user configuration files and SDI plugins are recovered from persitent partition. For this, functions install_configuration() and [install_sdi_plugins()](#af65203b969499e2d36e34c08172a9f30) with flag `recover=true` are invoked. On Titus user and system configuration files are recovered from persist folder. For this, functions install_configuration() with flag `recover=true` is invoked.

## get_dir_files()\[1/2\] <a href="#a1141fe1b44fce28b28f053c07fc3d591" id="a1141fe1b44fce28b28f053c07fc3d591"></a> {#get_dir_files-12}

<p>int sdi::filesystem::get_dir_files</p>

helper function to count and/or obtain all files in directory `dir`. Caller has the option to pass a regular expression `regex` to match specific files to be considered for the result. The regular expression is applied on the full file path including the path prefix. If no regular expression is passed (NULL), all regular files in the directory are considered. For just counting files of the directory `dir`, caller can set parameter `files` to NULL.

**Parameters**

\[in\] **dir** path to directory, which contains the files \[out\] **files** pointer to vector storing the found files (absolute file paths) or NULL if the function is just used for file counting. \[in\] **regex** regular expression to match specific files be considered or NULL to find all regular files in directory dir.

### Returns

number of files, which were found. -1 is returned in case of error (e.g. from directory path or missing permissions).


{% hint style="info" %}
The function does not work recursive, thus, subfolders in directory `dir` are not considered.
{% endhint %}

## get_dir_files()\[2/2\] <a href="#a1f6ec3c997cecac6418ae2cbe35b92d0" id="a1f6ec3c997cecac6418ae2cbe35b92d0"></a> {#get_dir_files-22}

<p>int sdi::filesystem::get_dir_files</p>

## home_config_dir() <a href="#a1eee0f47abbf3108854b4178e194ba45" id="a1eee0f47abbf3108854b4178e194ba45"></a>

<p>const char \* home_config_dir</p>

return the abloslute path of SDI configuration folder in home directory. (VOS/VOS2: \$HOME/share/sdi) (VOS3/Android: \$HOME/sdi) (Titus: \$HOME, with /sdi as \$HOME) This folder holds the SDI default configuration files, which are used, as long as not overloaded by external user configuration package. SDI configuration folder contains files for read access only.

### Returns

absolute path to SDI default configuration folder (with read-only files)

## home_config_file()\[1/2\] <a href="#ab8862ea906c088c55072c8ea390c0adc" id="ab8862ea906c088c55072c8ea390c0adc"></a> {#home_config_file-12}

<p>std::string sdi::filesystem::home_config_file</p>

Appends a relative filename `file` to path returned by [home_config_dir()](#a1eee0f47abbf3108854b4178e194ba45)

**Parameters**

\[in\] **file** relative filename to append to home_config_dir()

### Returns

file path


{% hint style="info" %}
Use this function for SDI configuration file provided by SDI installation packages and which cannot be overloaded by user configuration packages.
{% endhint %}

## home_config_file()\[2/2\] <a href="#adebb7050fa15bdc4361a3d24f2c6e2f3" id="adebb7050fa15bdc4361a3d24f2c6e2f3"></a> {#home_config_file-22}

<p>string sdi::filesystem::home_config_file</p>

## home_flash_dir() <a href="#a0de1824701ee8494b54c3c97cb17039b" id="a0de1824701ee8494b54c3c97cb17039b"></a>

<p>const char \* home_flash_dir</p>

return the absolute path to SDI flash folder in home directory. (VOS/VOS2/VOS3/Android: \$HOME/flash/sdi) (Titus: \$HOME/flash, with /sdi as \$HOME) If subfolders do not already exist, they are created with the first call of this function. The flash folder is the location for files, which require write access by SDI server. Writeable configuration files are synchononized with those files of external user configuration packages by invocation of [init()](#a43918d493a7f56eef174f3c9a82a8e20) function at SDI server startup.

### Returns

absolute path to SDI flash folder for writeable files

## home_flash_file()\[1/2\] <a href="#a5748ac7656cef8d6b10941d76eac115d" id="a5748ac7656cef8d6b10941d76eac115d"></a> {#home_flash_file-12}

<p>std::string sdi::filesystem::home_flash_file</p>

Appends a relative filename `file` to path returned by [home_flash_dir()](#a0de1824701ee8494b54c3c97cb17039b)

**Parameters**

\[in\] **file** relative filename to append to home_flash_dir()

### Returns

file path

## home_flash_file()\[2/2\] <a href="#aabc728c4e4c0574111826ca732390cca" id="aabc728c4e4c0574111826ca732390cca"></a> {#home_flash_file-22}

<p>string sdi::filesystem::home_flash_file</p>

## home_lib_dir() <a href="#a98b1808447b0f9e7848b35156a4c7cc9" id="a98b1808447b0f9e7848b35156a4c7cc9"></a>

<p>const char \* home_lib_dir</p>

return the abloslute path of lib folder in home directory. (VOS/VOS2/VOS3/Android: \$HOME/lib) (Titus: \$HOME, with /sdi as \$HOME, even libraries are not supported on this platform)

{% hint style="info" %}
This library folder is used for SDI plugins and libraries coming along with SDI download packages.
{% endhint %}

### Returns

absolute path to home lib folder

## init() <a href="#a43918d493a7f56eef174f3c9a82a8e20" id="a43918d493a7f56eef174f3c9a82a8e20"></a>

<p>void init</p>

This function must be called at startup, before SDI server accesses other functions of the filesystem module. The function internally does the following:

1.  It checks the \$HOME environment variable. If it is not provided by the system, the function sets \$HOME to working directory of SDI server, since this environment variable is referred the most filesystem functions.
2.  VOS/VOS2: It calls vos_wait_for_sdicleaner() to wait/synchronize with sdicleaner installed with a previous removal package.
3.  VOS/VOS2/Android: It checks for old files of previous SDI server versions and if exist, these files were taken over to new destination, which is expected by the recent SDI server. Old obsolete files of previous SDI server versions were removed.
4.  Create subfolders in home flash folder ([home_flash_dir()](#a0de1824701ee8494b54c3c97cb17039b)) so that SDI can create files at startup.
5.  Check for validity of configuration files and delete them to recover them with check_config_update() afterwards (see step 8).
6.  Read STATUS.CFG (SDI status runtime file). If it does not exist, it is created with defaults. 7 It checks recent SDI mode (passed as parameter *sdi_mode*) equals mode in STATUS.CFG, for which SDI was previously started. If the mode has changed, an internal factory reset (see function [factory_reset()](#a12545d574e9182af24a177d1cf453c0c)) is triggered, since home flash directory with previous files of old mode must be wiped.
7.  VOS/VOS2/VOS3: it calls check_config_update() to synchronize files, which were installed with user configuration packages and which require write access. These files are taken over to home flash directory so that SDI is able have write permissions on them. For this, SDI server holds a registration file with a checksum for each file to detect, if it was overloaded by file of the user configuration package. In addition, after removal of a user configuration package, the associated files are removed again and default files from SDI configuration folder are restored. Titus: it calls check_config_update() to checks for installation of user/system configuration files. If installation is pending, the configuration will be processed.
8.  It removes files of software upload folder (see [upload_install_dir()](#a34a571792ddd1cbbe291af193597d9a0)), if download packages were uploaded by software upload commands (20-14,20-15,20-16) of a previous SDI startup. **Parameters**

    \[in\] **sdi_mode** SDI mode, how SDI was started for this runtime, either SDIMode_Headless or SDIMode_Standard, see enum SDIMode of sdi_sysconfig.h

## install_emv_config_package()\[1/2\] <a href="#a292b4583cbbd3327c059f32edc6e6168" id="a292b4583cbbd3327c059f32edc6e6168"></a> {#install_emv_config_package-12}

<p>unsigned short sdi::filesystem::install_emv_config_package</p>

install an EMV coniguration package as a tarball (uncompressed), which contains EMV configuration files to be installed into EMV flash directory. This is provided by [emv_flash_dir()](#a817ffa0e3dd4d66ee5a1717aac4c94b8) and contains EMV configuration files on which ADKEMV requires write access. The function is called during \"SW upload 20-14/20-15/20-16\" using upload type UPLOAD_TYPE_EMV_CONFIG_PACKAGE. After all configuration files were installed the function runs required post actions, which are related to the installed files.

**Parameters**

\[in\] **emv_config_pkg** file path to EMV config update package (tarball)

### Returns

SDI error code (0x9000 for success, 0x64xx for error)

## install_emv_config_package()\[2/2\] <a href="#a7412f8e8dc1ea4a649358a45031df492" id="a7412f8e8dc1ea4a649358a45031df492"></a> {#install_emv_config_package-22}

<p>unsigned short sdi::filesystem::install_emv_config_package</p>

## install_sdi_plugins() <a href="#af65203b969499e2d36e34c08172a9f30" id="af65203b969499e2d36e34c08172a9f30"></a>

<p>unsigned short install_sdi_plugins</p>

install SDI plugins from update package, which was added to SDI update directory (see [sdi_update_dir()](#a62f821b6937b4f380d3e22cde31d2920)). Plugins are expected in a specified subfolder \"plugin\". The function is called wiht command \"Check for update (20-1D)\" using upload type UPLOAD_TYPE_PLUGIN. On Android the update package data is provided and the command is sent by Android Secure Installer. The function copies the external plugin in internal location, which is specified by [ext_plugin_dir()](#ae7f61379f5979fbb09444be76ab12a1f). In addition, the function does not allow to install arbitrary files, therefore, it checks, if each found plugin matches the plugin pattern PLUGIN_PATTERN. After the plugins were overtaken to plugin directory, the plugins are loaded and registered for usage in SDI server. If an external plugin has the same name as an internal plugin (provided with SDI base package, see function [home_lib_dir()](#a98b1808447b0f9e7848b35156a4c7cc9)) and shall \"overload\" it, the internal plugin is unregisted and unloaded before the external plugin installed. Finally, the function stores a backup copy of each plugin to persitent directory (see [sdi_persist_dir()](#aeddca685a1e934168171cfef8ef8697e)) to make the installed plugins recoverable for command \"Factory Reset (20-22)\". For command \"Factory Reset (20-22)\" the same function is invoked with flag `recover=true`, to restore and install the backup copies from persistent directory.

**Parameters**

\[in\] **recover** flag set to true to restore and install the SDI plugins from persistent directory

### Returns

SDI error code (0x9000 for success, 0x64xx for error)

## install_user_configuration() <a href="#ad41174b98a363bf48bbcfc62984939ef" id="ad41174b98a363bf48bbcfc62984939ef"></a>

<p>unsigned short install_user_configuration</p>

install user configuration from update package, which was added to SDI update directory (see [sdi_update_dir()](#a62f821b6937b4f380d3e22cde31d2920)). The function is called with command \"Check for update (20-1D)\" using upload type UPLOAD_TYPE_CONFIG_SDIEMV. On Android the update package data is provided and the command is sent by Android Secure Installer. Configuration files are expected in a specified folder structure, whereas other components than SDI (e.g. ADKEMV or ADKSEC) use a path prefix like \"emv\" or \"sec\". The function knows the internal location for each file. In addition, the function does not allow to install arbitrary files, therefore, it checks, if the found files are in internal whitelist (see table allowed_files in <a href="filesystem_8cpp.md">filesystem.cpp</a>). After all configuration files were installed the function runs required post actions (if any), which are related to the installed files. Finally, the function stores a backup copy of each file to persitent directory (see [sdi_persist_dir()](#aeddca685a1e934168171cfef8ef8697e)) to make the installed files recoverable for command \"Factory Reset (20-22)\". For command \"Factory Reset (20-22)\" the same function is invoked with flag `recover=true`, to restore and install the backup copies from persistent directory.

**Parameters**

\[in\] **recover** flag set to true to restore and install the configuration files from persistent directory

### Returns

SDI error code (0x9000 for success, 0x64xx for error)

## log_config_dir() <a href="#a1ba2e0d2621785a746e8a2bc2b85bfab" id="a1ba2e0d2621785a746e8a2bc2b85bfab"></a>

<p>const char \* log_config_dir</p>

return the absolute path to folder for ADK Logging configuration files (VOS/VOS2: /mnt/flash/etc/config/adk-log) (Android: \$HOME) (VOS/VOS3: /mnt/appdata/versioned/globalshare/etc/config/adk-log) (Titus: \<ext_cfg_dir\>/adk-log; \<ext_cfg_dir\> as provided by [ext_config_dir()](#a1518fc71a30bfab59f82fc1a2726c627))

{% hint style="info" %}
Required for SW update on Android. On VOS it is unused.
{% endhint %}

### Returns

absolute path to HOME for ADK Logging configuration files

## lookup_config_file()\[1/2\] <a href="#a3f6f1faaea3bfa5fb011c57ec15c7749" id="a3f6f1faaea3bfa5fb011c57ec15c7749"></a> {#lookup_config_file-12}

<p>std::string sdi::filesystem::lookup_config_file</p>

lookup a configuration file (read-only) by its relative path `file` and return the absolute path for it. The function looks up the file at first in external configuration folder (provided by [ext_config_dir()](#a1518fc71a30bfab59f82fc1a2726c627)). If not found there, the file is searched in SDI default configuration folder (provided by [home_config_dir()](#a1eee0f47abbf3108854b4178e194ba45)). The function return an empty string, if the file is not found in one of both locations.

**Parameters**

\[in\] **file** relative file path to look up the configuration file (e.g. \"sec/sccfg.json\")

### Returns

absolute path of the found configuration file (e.g. \"/etc/config/sdi/sec/sccfg.json\" or \"\$HOME/share/sdi/sec/sccfg.json\") or an empty string, if the file was not found.

## lookup_config_file()\[2/2\] <a href="#aae28890912feff7f83d3af43e35b986c" id="aae28890912feff7f83d3af43e35b986c"></a> {#lookup_config_file-22}

<p>string sdi::filesystem::lookup_config_file</p>

## move_file()\[1/2\] <a href="#acc0eb80e0e44c07c5f0edfa0763150a5" id="acc0eb80e0e44c07c5f0edfa0763150a5"></a> {#move_file-12}

<p>bool sdi::filesystem::move_file</p>

helper function to move file from source `src` to destination `dest`.

**Parameters**

\[in\] **src** source file location \[in\] **dest** destination file location

### Returns

true for success, else false for error

## move_file()\[2/2\] <a href="#a5dd1f08cec548612d55ff24e08ae4dcd" id="a5dd1f08cec548612d55ff24e08ae4dcd"></a> {#move_file-22}

<p>bool sdi::filesystem::move_file</p>

## nfc_flash_dir() <a href="#a3eb6af6e0de2e982c40979a8282da21b" id="a3eb6af6e0de2e982c40979a8282da21b"></a>

<p>const char \* nfc_flash_dir</p>

return the absolute path for destination folder of ADKNFC configuration files These files require write access, therefore, on Engage these are located in flash. (VOS/VOS2/VOS3: \$HOME/flash) (Android: \$HOME) (Titus: \$HOME, with /sdi as \$HOME, even NFC is not supported on this platform)

### Returns

absolute path to HOME for ADKNFC configuration files

## plugin_config_dir() <a href="#a383b7331d5268ea154c61f4ff4eb6ab8" id="a383b7331d5268ea154c61f4ff4eb6ab8"></a>

<p>const char \* plugin_config_dir</p>

return the absolute path of the folder containing plugin configuration files (with extension cfg, json). VOS3/Android: \$HOME/sdi/plugincfg VOS/VOS2: \$HOME/share/sdi/plugincfg Titus: \$HOME/plugincfg, with /sdi as \$HOME (unused so far)

{% hint style="info" %}
Plugin configuration files are installed with SDI plugin package and treaded like internal SDI configuration (as installed with a SDI config package). The reason is these files are installed with system priviledges, thus, we place them to subfolder plugincfg under home configuration directory (see [home_config_dir()](#a1eee0f47abbf3108854b4178e194ba45))
{% endhint %}

### Returns

bsolute path of the folder containing plugin configuration files

## read_file()\[1/2\] <a href="#ad9ecf729e46fab7ad576ed4bc9b4b2cf" id="ad9ecf729e46fab7ad576ed4bc9b4b2cf"></a> {#read_file-12}

<p>bool sdi::filesystem::read_file</p>

helper function to read a file into a string

**Parameters**

\[in\] **file** name of the file to be read \[out\] **data** content of the file that was read

### Returns

true for success, else false (file couldn\'t been opened)

## read_file()\[2/2\] <a href="#a141d15606acd013831d2e4ead7765ab5" id="a141d15606acd013831d2e4ead7765ab5"></a> {#read_file-22}

<p>bool sdi::filesystem::read_file</p>

## remove_dir()\[1/2\] <a href="#add3a308833cddc7775215c8fc3d1d608" id="add3a308833cddc7775215c8fc3d1d608"></a> {#remove_dir-12}

<p>int sdi::filesystem::remove_dir</p>

helper function to remove a directory recursively with all its content. If *path* already refers a file, the file is removed.

**Parameters**

\[in\] **path** path to drectory (or file) to be removed. \[in\] **modes** function operation modes, see enum FilesModes

### Returns

number of files, which were removed. -1 is returned in case of error due to missing directory or file access.

## remove_dir()\[2/2\] <a href="#a8241068dfa57d30c7be7a289815533bf" id="a8241068dfa57d30c7be7a289815533bf"></a> {#remove_dir-22}

<p>int sdi::filesystem::remove_dir</p>

## remove_files()\[1/2\] <a href="#ae04fc0d5bbc079cc49174bbe72ec2d7c" id="ae04fc0d5bbc079cc49174bbe72ec2d7c"></a> {#remove_files-12}

<p>int sdi::filesystem::remove_files</p>

helper function to remove multiple files. Files to be removed are specified by vector `files`.

**Parameters**

\[in\] **files** vector of files to be removed \[in\] **modes** function operation modes, see enum FilesModes

### Returns

number of files, which were removed. -1 is returned in case of error due to missing directory or file access.

## remove_files()\[2/2\] <a href="#a95279759f98284266e220092cbb51508" id="a95279759f98284266e220092cbb51508"></a> {#remove_files-22}

<p>int sdi::filesystem::remove_files</p>

## remove_sdi_plugins() <a href="#ac42ad54eda4b15aa9d9f2d7bda4a55a5" id="ac42ad54eda4b15aa9d9f2d7bda4a55a5"></a>

<p>unsigned short remove_sdi_plugins</p>

remove SDI plugins according removal file, which is looked up in SDI update directory (see [sdi_update_dir()](#a62f821b6937b4f380d3e22cde31d2920)). The removal file is expected in a specified subfolder \"plugin\". The function is called with command \"Check for update (20-1D)\" using upload type UPLOAD_TYPE_REMOVE_PLUGIN. On Android the update package data is provided and the command is sent by Android Secure Installer. Before removal of a plugin, the plugin is unloaded and unregistered for usage in SDI server. If a plugin is removed, which has the same name as an internal plugin in [home_lib_dir()](#a98b1808447b0f9e7848b35156a4c7cc9), the internal plugin is loaded and reactivated again. Finally, the function removes the backup copy of each plugin from persitent directory (see [sdi_persist_dir()](#aeddca685a1e934168171cfef8ef8697e)) so that command \"Factory Reset (20-22)\" will no longer recover the plugin.

{% hint style="info" %}
The removal file (remove.json) contains an array \'files\' with a filename per plugin to remove. No path prefix is added, the function knows the internal location for each file. The filenames may also contain reguluar expressions to match multiple files to delete. The function does not allow to remove arbitrary files, therefore, it checks, if the regular expression matches one or more plugins is in external plugin folder before the plugin is unregistered, unloaded and removed. If a filename in the removal file does not match any existing plugin, the entry is ignored and it is proceeded with the next one. Example format for removal.json: \[unsupported block\]
{% endhint %}

### Returns

SDI error code (0x9000 for success, 0x64xx for error)

## remove_user_configuration() <a href="#abfc178565b6c9e326831f7ef51646744" id="abfc178565b6c9e326831f7ef51646744"></a>

<p>unsigned short remove_user_configuration</p>

remove user configuration files according removal file, which is looked up in SDI update directory (see [sdi_update_dir()](#a62f821b6937b4f380d3e22cde31d2920)). The function is called with command \"Check for update (20-1D)\" using upload type UPLOAD_TYPE_REMOVE_CONFIG_SDIEMV. On Android the update package data is provided and the command is sent by Android Secure Installer. After removal, it runs required post actions (if any), which are related to the removed files. Finally, the function removes the backup copy of each file from persitent directory (see [sdi_persist_dir()](#aeddca685a1e934168171cfef8ef8697e)) so that command \"Factory Reset (20-22)\" will no longer recover the files.

{% hint style="info" %}
The removal file (remove.json) contains an array \'files\' with a relative path per file to remove. The same external path representation as in update packages is used and the function knows the internal location for each file. The lines may also contain reguluar expressions to match multiple files to delete. The function does not allow to remove arbitrary files, therefore, it checks, if the found files are in internal whitelist (see table allowed_files). If a line in the removal file does not match any existing allowed file, the line is ignored and it is proceeded with the next line. Example format for removal.json: \[unsupported block\]
{% endhint %}

### Returns

SDI error code (0x9000 for success, 0x64xx for error)

## sdi_certstore_dir() <a href="#abfa13da98e3a50c8c79f55671a6c71be" id="abfa13da98e3a50c8c79f55671a6c71be"></a>

<p>const char \* sdi_certstore_dir</p>

certificate directory, in which SDI stores certificates (e.g. CAs for TLS (Authex) and device pairing). Usually, the function is required for devices with K81, from which certificates are read before used. (Android: \$HOME/certstore) (VOS/VOS2/VOS3: \$HOME/flash/sdi/certstore)

### Returns

ablosulte path to SDI certstore folder

## sdi_persist_dir() <a href="#aeddca685a1e934168171cfef8ef8697e" id="aeddca685a1e934168171cfef8ef8697e"></a>

<p>const char \* sdi_persist_dir</p>

persistant directory to store SDI related update files for default recovery. (Android: /persist/appdata/sdi) (VOS/VOS2/VOS3: empty string) (Titus: \$HOME/persist/sys, for system==true \$HOME/persist/usr, for system==false) Recently used the following platforms: Android: command \"Check for update (20-1D)\" and command \"Factory Reset (20-22)\" Titus: installation for user/system configuration package installation with command \"Software Upload (20-14,20-15,20-16)\" and command \"Factory Reset (20-22)\"

### Returns

ablosulte path to persistent SDI data folder or an empty string, if not supported on platform (e.g. Engage)

## sdi_update_dir() <a href="#a62f821b6937b4f380d3e22cde31d2920" id="a62f821b6937b4f380d3e22cde31d2920"></a>

<p>const char \* sdi_update_dir</p>

read-only source directory for SDI related update package files. (Android: /data/secure/sdi) (VOS/VOS2/VOS3: empty string) (Titus: \$HOME/update) Recently used the following platforms: Android: command \"Check for update (20-1D)\" Titus: installation for user/system configuration package installation with command \"Software Upload (20-14,20-15,20-16)\"

### Returns

ablosulte path to update package folder or an empty string, if not supported by plattform (e.g. Engage)

## sys_remove_sponsor_dir() <a href="#a6c67d203b4323cce1f3c274d3f2827ee" id="a6c67d203b4323cce1f3c274d3f2827ee"></a>

<p>const char \* sys_remove_sponsor_dir</p>

return absolute path to system directory for removal of sponsor certificates (VOS/VOS2/VOS3/Titus: not supported, an empty string is returned) (Android: /data/secure/sponsor -\> used to store the file CRTRESET.SYS to remove the sponsor certificate).

{% hint style="info" %}
This is recently required by SDI server for command 20-1D (Check for Update) with command type 7 (remove sponsor certificate).
{% endhint %}

### Returns

absolute path to system sponsor removal directory (or an empty string if not supported)

## tmp_dir() <a href="#a9bc32456ce574dce7e0dbee9f49ed5cd" id="a9bc32456ce574dce7e0dbee9f49ed5cd"></a>

<p>const char \* tmp_dir</p>

return the absolute path to writeable system temp folder. (VOS/VOS2/VOS3: /tmp) (Android: \$HOME/tmp) (Titus: \$HOME/tmp, with /sdi as \$HOME, unused so far)

{% hint style="info" %}
This is recently required by SDI server to store some temporary keys for VCL.
{% endhint %}

### Returns

absolute path to writeable system temp folder

## upload_install_dir() <a href="#a34a571792ddd1cbbe291af193597d9a0" id="a34a571792ddd1cbbe291af193597d9a0"></a>

<p>const char \* upload_install_dir</p>

return absolute path to upload and installation directory for download packages or certificates (VOS/VOS2: /mnt/flash/install/dl or \$HOME/flash/sdi/install) (VOS3: \$HOME/flash/sdi/install) (Android: \$HOME/install -\> e.g. used to install the sponsor certificate) (Titus: \$HOME/install, with /sdi as \$HOME)

{% hint style="info" %}
This is recently required by SDI server to store download packages with software upload commands (20-14,20-15,20-16) and sponsor certificate installation with command 20-1B.
{% endhint %} **Parameters**

\[in\] **flash** set to true to use home flash folder as installation directory. This parameter is relevant for VOS/VOS2 only, which requires to use home flash directory to store temporary installation files for newer OS versions. This is to reduce RAM usage, since files would be usually stored to /mnt/flash/install/dl, which is a RAM disk.

### Returns

absolute path to system download package installation directory

## write_file()\[1/2\] <a href="#a0c3b0966ff7d9a48ffef25f5c1715e82" id="a0c3b0966ff7d9a48ffef25f5c1715e82"></a> {#write_file-12}

<p>bool sdi::filesystem::write_file</p>

helper function to write a string into a file

**Parameters**

\[in\] **file** name of the file to be written \[out\] **data** content of the string to be written

### Returns

true for success, else false (file couldn\'t been opened)

## write_file()\[2/2\] <a href="#a3a27a49de579060fada2de1f1fcb72c5" id="a3a27a49de579060fada2de1f1fcb72c5"></a> {#write_file-22}

<p>bool sdi::filesystem::write_file</p>

## VariableDocumentation {#variable-documentation}

## allowed_usr_files <a href="#af64ea9fc2f13d8f3be606630ef0436cd" id="af64ea9fc2f13d8f3be606630ef0436cd"></a>

<p>const struct [UpdateFiles](#structsdi_1_1filesystem_1_1_update_files) allowed_usr_files\[\]</p>

**Initial value:**

``` cpp
=
   {
   { EMV_PREFIX, EMV_FLASH_CONFIG_FILES, true, LOC_EmvFlashDir, "", (ACT_DisableEpp | ACT_EmvExit), ACT_EmvInitInfo },
   { EMV_PREFIX, EMV_DESIRED_FILE, false, LOC_EmvConfigDir, "", (ACT_DisableEpp | ACT_EmvExitComplete), ACT_EmvInitInfo },
   { SEC_PREFIX, ADKSEC_CONFIG_FILE, false, LOC_SdiExtConfigDir, SEC_PREFIX, ACT_None, ACT_SecInit },
   { "", SDI_CONFIG_FILE, false, LOC_SdiExtConfigDir, "", ACT_None, ACT_None },
   { "", SDI_ACL_FILE, false, LOC_SdiExtConfigDir, "", ACT_None, ACT_AclInit },
   { "", WHITELIST_FILE, false, LOC_SdiFlashDir, "", ACT_None, ACT_WhitelistFile },
   { "", SENSITIVE_TAGS_FILE, false, LOC_SdiFlashDir, "", ACT_None, ACT_None },
   { "", CARD_RANGES_FILE, false, LOC_SdiFlashDir, "", ACT_None, ACT_CardRanges },
   { "", UPDATE_REMOVE_FILE, false, LOC_None, "", ACT_None, ACT_None },
   { LOG_PREFIX, LOG_CONFIG_FILES, true, LOC_LogConfigDir, "", ACT_None, ACT_LogInit },
   { NFC_PREFIX, NFC_WKY_FILES, true, LOC_NfcFlashDir, "", ACT_None, ACT_None },
   { FONT_PREFIX, FONT_FILES, true, LOC_SdiExtFontsDir, "", ACT_None, ACT_None }
   }
```

user configuration files allowed for update and removal

## allowed_usr_files_size <a href="#a8ab079877b3d40867b387ea29bf1db93" id="a8ab079877b3d40867b387ea29bf1db93"></a>

<p>const unsigned allowed_usr_files_size = (sizeof([allowed_usr_files](#af64ea9fc2f13d8f3be606630ef0436cd)) / sizeof([allowed_usr_files](#af64ea9fc2f13d8f3be606630ef0436cd)\[0\]))</p>
