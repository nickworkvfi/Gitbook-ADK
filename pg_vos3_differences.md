---
title: VOS3 Main Differences and Migration from VOS1/VOS2

---

# VOS3 Main Differences and Migration from VOS1/VOS2




# Main Differences to VOS1/VOS2

The following table provides summary on changes compared to existing VOS2 platform and lists potential impact to applications.


|  | Area  | Changes  | Impacts   |
|  -------- | -------- | -------- | -------- |
| 1  | Packaging format and tools  | Control files are replaced by manifest (json) files describing the bundle and its packages.

 Adapt package types to vos3 package types.  | Users to repackage applications with the new VOS3 packaging tools.

 Notes:

 - Bundles targeting read-only partitions (system_ro & user_ro) are not allowed to target the same file location on device (i.e. conflict). Installation will fail and report this error. 

 - Bundles must have unique names on the system. On vos1/vos2 bundles with different users could have same name. This was confusing and error prone. Installation and packaging will fail and report this error.   |
| 2  | Signing  | VOS3 will no longer support signing via signing cards, but only via online signing service.  | Need to use VF online signing methods.   |
| 3  | Compiler and Toolset  | VOS3 will use newer compiler and tools for building applications. This is to enable more recent C/C++ standards  | Users to update to the new Compiler and revise code as needed according to findings caused by stricter or different checks that come with changed tools. 

 Plan is to use gcc-Version 11.2.1 20220111 (GNU Toolchain for the Arm Architecture 11.2-2022.02 (arm-11.14))

 - C++17 Support in GCC: GCC has almost full support for the previous revision of the C++ standard, which was published in 2017. Some library features are missing or incomplete, as described in the library documentation.

 - C++20 Support in GCC: GCC has experimental support for the latest revision of the C++ standard, which was published in 2020. C++20 features are available since GCC 8. To enable C++20 support, add the command-line parameter -std=c++20 (use -std=c++2a in GCC 9 and earlier) to your g++ command line. Or, to enable GNU extensions in addition to C++20 features, add -std=gnu++20. Important: Because the ISO C++20 standard is very recent, GCC's support is experimental.

 - Default is: Default ist #define __cplusplus 201703L, meaning C++17 standard.   |
| 4  | Linux Kernel  | VOS3 will user newer revisions of the linux kernel. Also the Linux kernel revisions might be different between various products running VOS3.  | Users will need to adjust to some potential (even though not expected) behavior changes of the underlying Linux system when using direct calls to the POSIX APIs of the system.   |
| 5  | A/B Images  | VOS3 will support A/B scheme for supporting both seamless updates and allow fallback to previous image of the system.  | A VOS3 device will contain two versions of the installed software: 

 - "active" version (currently running) 

 - "fallback" version (previous version) 

 Thus, application executables, libraries and read-only resources will reside in the device in two versions (as for the system software itself). Each time an installation takes place, the current "fallback" version is lost, the current "active" version becomes the fallback and the newly installed version becomes "active" version. 


 To take advantage of this versioning, the read/write data storage for applications will come in two forms: 

 - "versioned data" : this storage is kept in two versions and will be restored as it was when falling back ("/home/usr1/versioned_data") 

 - "flash" : this storage is not versioned and is thus common to all versions ("/home/usr1/flash")   |
| 6  | Sysmode vs. VOS3 control panels  | VOS3 will have changed Sysmode Interface. Most of previous VOS1/VOS2 sysmode gets replaced with System applications for various purpose (e.g. Log Control Panel, Comms Control Panel, Power Panel, etc.).  | No changes to applications expected, but operational differences.   |
| 7  | No VOS Private APIs  | VOS3 will no longer support the VOS1/VOS2 private APIs. Older VOS services APIs have been deprecated and removed from VOS3 products.  | Users need to revise their application code to use and comply with ADK APIs.   |
| 8  | No VSS Support  | VOS3 will no longer support Verifone Secure Scripts (VSS).  | Users will need to adapt any security customization to make use of new Secure Interfaces for Key management or Key derivation using Verifone Customizable Crypto Interface (VCCI).   |
| 9  | No direct key loading  | VOS3 will not support direct key loading APIs.  | Users will need to migrate key all loading to VRK or make use of new Secure Interfaces for Key management using Verifone Customizable Crypto Interface (VCCI).   |
| 10  | Transparent Card Data and Card Reader Access  | VOS3 enforces card holder data protection by default through a system service called SDI that blocks transparent card data access and offers encrypted card data to transactions. This enables P2PE/PCI-SSF compliant support for VOS3 products.  | Users can change behavior if needed by using one of the following methods: 

 - Configuration of BIN ranges that can be excluded from card holder data protection. 

 - Installation of extension regional/customer plug-ins that enable transparent card reader access 

 - Installation of vos3-cards plugin that offers VOS2 APIs and card data access compatible to VOS2   |
| 11  | Flash partitions not using "synchronized I/O"  | In VOS2, flash partitions were mounted with the "sync" option (aka "synchronized I/O"). This is a bottleneck of performance (cpu and io) for both system and applications. On VOS3, all flash partitions will not be mounted with that option. It is also strongly discouraged to use the sync() call in any part of the VOS3 system or applications as this synchronizes all files of all filesystems: thus very inefficient.  | An application that really needs a "transactional" behavior on a specific file can use one of the following methods: 

 - open the file with "O_DSYNC": all writing to this file will be synchronized 

 - use fsync() on a file to synchronize   |
| 12  | No ADK-SEC 1.x compatibility layer  | VOS3 will no longer support a compatibility layer for ADK-SEC 1.x APIs.  | Users still using ADK-SEC 1.x APIs need to revise their application code to use and comply with ADK 2.x APIs. 

 - ADK-SEC 1.x has been deprecated since ADK 4.5 and eventually removed in ADK 4.8. 

 - ADK-SEC 2.x has provided a compatibility layer with ADK-SEC 1.x interface (libseccmd.h) for the time of migration. 

 VOS3 will no longer support ADK-SEC 1.x APIs (neither native, nor in a compatibility layer). Users still using ADK-SEC 1.x APIs have to migrate to ADK-SEC 2.x APIs introduced since ADK 4.4. Applications already using ADK-SEC 2.x API will not be affected from this change.   |
| 13  | OpenSSL Update  | VOS3 will update to OpenSSL v3 as this is the long-term supported release of OpenSSL. However, OpenSSL experied some incompatible changes when coming from earlier revisions of the library.  | Applications that use OpenSSL directly twill need to adapt their application code to comply with changed APIs in OpenSSL v3.   |
| 14  | ADK COM: PKCS#12 support  | Following ADK COM features will not be supported on VOS3: 

 - PKCS#12 files for Wifi Cert loading - replaced with VRK packages for secure loading of Wifi certs  | Applications to load Wifi certs using VRK packages.   |
| 15  | ADK COM: Analog Modem Support removed  | Analog Modem support (VOS3 products will not have any analog modem support. Only exception is FF base, but VOS3 will not support the analog modem in FF Base either)  | No application impact.   |
| 16  | ADK COM: No Dial-up Networking Profile (DUN)  | No dial-up network support in VOS3. Neither internal dial-up modem (no HW) nor the dial-up modem in a connected FF base are supported any longer.  | no deployements with dial-up mode supported.   |
| 17  | ADK COM: STunnel API support removed  | STunnel APIs for SDI based external pinpads - replaced in SDI internally  | No application impact. 

 SDI external pinpad connection is transparent to applications.   |
| 18  | ADK COM: External Barcode reader  | Support for HID based external barcode readers removed  | no support of external barcode readers - use built-in camera or HW barcode decoder supported through ADK-GUI.   |
| 19  | Installation  | - Apps cannot be installed without reboot 

 - new installer API  | No impact on applications. Applications implementing own download mechanisms are recommended to use the new installer API.   |



# Porting Guidelines


## VOS1/VOS2 Private APIs

No longer supported and deprecated since ADK 4.6. Use ADK APIs.


## Application Packaging


### Translating VOS2 into VOS3 Package types

The following table provides guidance on translating VOS2 packages into VOS3 packages.


| VOS2 package type | VOS2 destination | Possible VOS3 package types | VOS3 destination | Notes  |
|  -------- | -------- | -------- | -------- | -------- |
| user  | /home/<user>/  | user_ro  | /home/<user>/  |  |
| userflash  | /mnt/flash/userdata/<user>/  | system_versioned_data 

 system_data 

 user_versioned_data 

 user_data  | /mnt/sysdata/versioned/<user>/ 

 /mnt/sysdata/data/<user>/ 

 /mnt/appdata/versioned/<user>/ 

 /mnt/appdata/data/<user>/  |  |
| userflashshare  | /mnt/flash/userdata/share/  | share_system_versioned_data 

 share_user_versioned_data 

 share_all_versioned_data  | /mnt/sysdata/versioned/share/ 

 /mnt/appdata/versioned/share/ 

 /mnt/appdata/versioned/globalshare/  |  |
| userfont  | /mnt/flash/system/fonts/  | font_ro  | /usr/share/fonts/  |  |
| config  | /etc/config/  | partial support 

 (sys_<> can use system_ro) 

 (usr<X> can use user_ro)  |
| flashconfig  | /mnt/flash/etc/config/  | share_system_versioned_data 

 share_user_versioned_data 

 share_all_versioned_data  | /mnt/sysdata/versioned/share/ 

 /mnt/appdata/versioned/share/ 

 /mnt/appdata/versioned/globalshare/  | Global config is: /mnt/appdata/versioned/globalshare/etc/config/  |
| vss  | /etc/vss/<user>/  | not supported  |
| unsigned  | /mnt/flash/userdata/<user>/unsigned/  | user_unsigned_data  | /mnt/appdata/data/<user>/unsigned/  |  |



### Application Manifests

With VOS3 all applications get launched using the Multi-Application Controller. Applications need to provide a manifest file for getting started by MAC. Details on manifest parameter and example JSON manifests are provided as part of the MAC documentation.

Both JSON and INI data format manifest files are compatible with VOS1/VOS2.

The JSON manifest files need to be packaged with the applications and will be installed to user's home directory:



```
- /home/usr*/www
- /home/sys_*/www
```

Manifest file names should end with **.mft**


### VHQ Manifest



* New dlfile.mfg (packaged into dlfile.mft.tgz as part of the dlfile.tar)
* JSON formatted file similar to Engage.mfg on VOS2
    * Some field will be different
* dlfile.mfg will be auto-generated by packman - no need to add Engage.mfg manually


## ADK MAC (Multi-application Controller)

MAC is a mandatory component on VOS3. 

 Any application on VOS3 needs to provide a corresponding MAC manifest file to configure the appliaction for launching. 

 This allows also to let MAC launch applications automatically to avoid manual start from MAC desktop.


MAC is a display controller daemon. It provides application developers a way to start/stop applications and controls treir visibility.


### API compatibility

All APIs supported as on VOS1/VOS2.


### Launching via Multi-Application Controller (MAC)

With VOS3 all applications get launched using the Multi-Application Controller. This enables:



* auto-launching of applications and services
* manual launch from desktop
* assignment of UI resources for applications
* switching between applications
* access to system control panels

There is no support outside of MAC launching for applications. 

 Applications should use following API for that: 

 - [sysLaunchApp()](namespacevfimac.md#function-syslaunchapp) - run application by it's name in manifest file 

 - [sysLaunchAppid()](namespacevfimac.md#function-syslaunchappid) - run application by it's identifier in manifest file


### Hotkey combinations


| Key combination  | Action   |
|  -------- | -------- |
| X + 1  | starts Control Panel   |
| X + 3  | shows MAC Desktop   |
| 1 + 5 + 9  | shows MAC Desktop   |
| 1 + 5 + 9 (on MAC desktop)  | sysmode is no more available on VOS3!   |



### Manifests

Application developers describe how MAC should handle their applications by providing a manifest file.

Manifests are text files, whose names ends with .mft

Manifest is accepted in JSON or INI data formats, as it was on previous VOS versions.

MAC is looking for manifest files in the following locations:



```
- /home/usr*/www
- /home/sys_*/www
```

MAC manifest example: 

```cpp
[application]
id=mac_demo1
version=3.83.15
statusbar=y
app_resource_dir=mac_demo1
depends=mac_demo2;mac_demo3;
recover=n

[desktop]
label=mac_demo1
icon=mac_demo1/default/verifone-icon.png
cmdline=../mac_demo1
args=r1d2 r2d3

[autolaunch]
cmdline=../mac_demo1
start_hidden=y
```

MAC manifest is not the same thing as installable package manifest.


### Sample MAC application package



```cpp
mac_sample
├── mac_demo1
│   ├── mac_demo1                         Applicatyion binary
│   └── www
│       ├── mac_demo1
│       │   ├── 128x64M16N                  Specific screen resolution resources
│       │   │   ├── gui.ini
│       │   │   ├── mainmenu.html
│       │   └── default                     default GUI resources
│       │       ├── default-icon.png       
│       │       ├── gui.ini
│       │       ├── mainmenu.html
│       └── mac_demo1.mft                 MAC manifest
└── manifest.json                           Packman manifest file
```


## ADK-LOG (Logging)


### API compatibility

All APIs supported as on VOS1/VOS2.


## ADK-IPC (Inter-Process Communication)


### API compatibility

All APIs supported as on VOS1/VOS2.


## ADK-INF (Information Database Service)


### API compatibility

All APIs supported as on VOS1/VOS2.


## ADK-EVT (Event Service)


### API compatibility

All APIs supported as on VOS1/VOS2.


## ADK-COM (Network Setup and Communications)


### API compatibility

In general all ADK-COM APIs are supported same way as on previous VOS1/VOS2 platform.

Following deprecations/extensions are applicable for VOS3:



* any analogue modem related device properties and connection profiles are not supported
    * e.g. COM_PROP_RAW_MODEM_CURRENT_MODULATION
* no support for external BC reader using USB HID
    * i.e. serial connection profile with por BC_READER. Serial devices using dynUSB can still be used.
* not supported API support for STunnel on VOS3. This configuration option for a "2-piece" PIN pad use-case is replaced by SDI EPP/EPM.
    * com_SetStunnelConfig
* new APIs for iBeacon- recommended to be used with VOS3
    * [com_IBeaconGetAdvertisement()](libcom_8h.md#function-com-ibeacongetadvertisement)
    * [com_IBeaconSetAdvertisement()](libcom_8h.md#function-com-ibeaconsetadvertisement)
    * [com_IBeaconStartAdvertisement()](libcom_8h.md#function-com-ibeaconstartadvertisement)
    * [com_IBeaconStopAdvertisement()](libcom_8h.md#function-com-ibeaconstopadvertisement)
* new APIs for Eddystone Beacon - recommended to be used with VOS3
    * [com_EddystoneURLGetAdvertisementExt()](libcom_8h.md#function-com-eddystoneurlgetadvertisementext)
    * [com_EddystoneURLSetAdvertisementExt()](libcom_8h.md#function-com-eddystoneurlsetadvertisementext)


### Communication and Network Descriptors

VOS3 continues to use the same format and parameter for ADK connection and network profiles. Exeption: connection and network profiles for modem (MDM_INT, BT_DUN) and external barcode reader (BC_READER).


### Custom Certificate Loading and pre-loaded authentication key

VOS3 will no longer support loading certificates for TLS, Wifi EAP and LAN 802.1x using PKCS#12 files.

The system now supports secure loading of these certificates using VRKv2. The loaded certificates will be stored securely in the system and can be referenced by the SSL_OWN_CERT and SSL_OWN_KEY parameter with "vault:<keyname>" in the related connection profile for TLS or network profile for Wifi or LAN. The <keyname> needs to match the name of the loaded certificate / key used in the VRKv2 package.

The preloaded Authentication Key (Authex/ AuthN) / warranty key can be referenced using "vault:" as a name for SSL_OWN_CERT and SSL_OWN_PKEY.


### Network Startup and Recovery handling

Unlike VOS1/VOS2, the VOS3 system always implements an auto start and recovery for configured networks. With this the VOS3 system will always:



* BT: try to re-establish connection via BT-PAN to the previously connected device when coming back in range
* Wifi: try to re-establish Wifi connection to the previously connected SSID or other in-range configured SSID when coming back in range
* Cellular: try to re-establish connection to the previously connected mobile network
* LAN: try to re-establish connection to the previously connected LAN network

The previous support for manual configuration of recovery handling using load packages is deprecated (previous: dl.comcfg-no-rc-1.0.0.tgz and dl.comcfg-no-rc-remove-1.0.0.tgz packages).


### Network Diagnose Functions

Comunication Control Panel (CCP) supports network diagnose (ping sequence, NSLookup, connection test to remote host, extended http server tests).

CCP also supports manual network restart for trouble shooting.

Since VOS3 no longer supports Sysmode, CCP needs to be extended by a couple of diagnostics and communication related information previously provided by VOS2 Sysmode.


### Changes in configuration files

Any user generated configuration for ADK-COM / CCP need to be regenerated with the new VOS3 packaging system using type flashconfig. e.g. the location is changed to /mnt/appdata/versioned/globalshare/etc/config/adk-com.


## ADK-GUIPRT (HTML Rendering, Video playback, Barcode Scanner)


### API compatibility

All APIs supported as on VOS1/VOS2.


### HTML / CSS Resource files



* As on VOS1/VOS2 resource files are expected to be stored in www in the home of the user. Depending on manifest configuration this is
    * /home/<user>/www/<resourcedir>
    * /home/<user>/www/<appdir>/<resourcedir>
* <appdir> depends on MAC manifest configuration
* <resourcedir> is handled the same way as on VOS1/VOS2, it can be the model name (e.g. P630) or based on display resolution and keypad, e.g. 320x480C15T
* Since VOS3 no longer is using Grsecurity, setting up file permissions when packaging resource files is slightly different as on VOS1/VOS2: Files need to be in group share instead of group system.
    * Using makepackage3 use "--group share"
    * Directly preparing a Packman manifest, it looks like this:



```cpp
 {
"name":"demo",
"version":"1.2.3",
"user":"usr1",
"software_platforms":["vos3"],
"packages":[{
   "name":"executable",
   "type":"user_ro"
},{
   "name":"resource",
   "group":"share",
   "type":"user_ro"
}],
"signers":["SPONSOR"]
 }
```

group "share" shares the resource files with all users. Depending on context, group "usr1sys" ("usr2sys" for usr2, ...) may also be used.


### Video files

As on VOS1/VOS2 mplayer is used for playing videos. The supported video formats depend on those supported by mplayer.


### Barcode scanning

Barcode scanning works the same as on VOS1/VOS2 (use <input type="barcode" ....>)


### Adding fonts

Fonts may be installed using font packages. For this set the type of the package to "font_ro". This takes care of generating the required fonts.dir file so that the font can be found later on.


## ADK-PRX (CPR proxy to access Verifone webservices)


### Prerequisites



* VOS3 support added with version 3.0.5
* Requires at least ADKIPC 1.26.0


### Compatibility



* API compatibility: Pure service, no APIs as on VOS1/VOS2
* Interface compatibility: All interfaces (listen port, config interface) supported as on VOS1/VOS2
* Package format: Package format changed, but same naming for base and activation packages
* Features: Same code base as on VOS1/VOS2, thus, the same features are provided


### No support for old CG endpoints



* Support for old CG endpoints (dev.cgateway.verifone.com, test.cgateway.verifone.com, staging1.cgateway.verifone.com, cgateway.verifone.com) was dropped. CG endpoints from now are deprecated!

* ADKPRX base package only installs GSC endpoints as default environments
* Last option to use CG endpoints with version 3.5.0 is the installation of an user config package on top of ADKPRX (sample user config package coming along with ADKPRX documentation) Customers are advised to do this for testing purposes only. Do NOT use old CG endpoints for productive installations, since old CG environment endpoints will go offline sooner or later.

* Old ADKs might can still use version 3.0.50 (VOS/VOS2 only), which still contains CG endpoints, but also these installations should move to GSC soon


### User config packages



* Cloudproxy uses the same configuration files for all platforms (VOS/VOS2 and VOS3)
* VOS3 platform uses a different package format and installation location on target
* Wheras VOS/VOS2 has used global folder `/etc/config/proxy`, on VOS3 configuration files are looked up under `/home/usr` <X>/proxy: At startup ADK cloudproxy checks for the existence of the folder with included files starting from `usr1` up to `usr16`. If there are related files found under a specific user, this user directory is applied as source for user configuration files. This means, the first user providing the files wins, other users with higher user numbers will be ignored.
* Since VOS3 no longer is using Grsecurity, setting up file permissions when packaging files is slightly different as on VOS1/VOS2: User config packages must use group `usr<X>sys` with type `user_ro` (instead VOS/VOS2 has used group share and type `config`.

For details please read documentation coming along with package `prx-doc-X.X.X-X.zip` with the ADK Cloud Proxy release.


## ADK-SND (Sound Playback)


### API compatibility



* All APIs supported as on VOS1/VOS2.
* Same WAV and MP3 files can be reused on VOS3.


## ADK-Cards (Card Acceptance, Processing and EMV kernels)


### API compatibility

Migrating from VOS2 to VOS3 requires to migrate to Secure Data Interface (SDI) as SDI will be no longer an optional component on VOS3 systems. To simplify migration VOS3 introduced a new SDI client library (libSDIClient) that exports existing Cards/EMV APIs similar to ADK on VOS2. The provided VOS3 libSDIClient includes



* ADK_EMV CT functions
* ADK EMV CTLS functions
* ADK-MSR functions
* ADK-NFC functions
* ADK-TEC functions


### Transparent L1 card reader access APIs

On VOS3 specifically the libSDIClient also provides the transparent L1 access together with loading a specific SDI Plugin for VOS3 called vos3-cards. This of course must not be loaded when using SDI in headed mode and/or with external connections. The SDI Plugin will add all the VOS/VOS2 APIs back on VOS3 and must be loaded / used in VOS3 application projects whenever transparent card reader access is required. All these legacy APIs for transparent access will then be available also in SDI environment on VOS3. Transaction data fetching functions (including cardholder sensitive data) such as [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) or [EMV_CTLS_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ctls-fetchtxntags) will also be fully supported when the specific vos3-cards plugin is loaded.


### Card Acceptance APIs (ADK-TEC)

Although ADK-TEC APIs will be moved forward too, it is recommended to be replaced by the SDI card detection. This is due to the nature of the architecture of VOS3 terminals where parallel access to physical readers is restricted due to the command response interface to the K81, which will result in a different timing. The underlying K81 on VOS3 (and Android systems) has a single serial connection to the K81 main processor, where access must be controlled and organized (e.g. by SDI). Polling from multiple application threads and tasks on various hardware pieces on K81 side, e.g. CT / CTLS / MSR and other K81 resources in parallel may result in deviations from VOS2. All ADK-TEC features are covered with the SDI card detection and can be used in the 23-01 (synchronous) and 23-03 (asynchronous) card detection. For details, please refer to the SDI documentation. Both commands (23-01 and 23-03) are of course part of the libSDIClient. Your ADK-TEC calls can be replaced by these functions.


### General migration strategy towards SDI

Currently the following type of solutions exist on VOS2:



* TYPE1: Plain ADK/VOS2 implementations, not making use of SDI today
* TYPE2: VOS2 implementations that are based on SDI and use the libSDIClient already, but still DO bypass SDI with direct ADK calls (i.e. do use not existing SDI functionality of ADK-CARDS )
* TYPE3: Implementations that are based on SDI and use the libSDIClient already but do NOT bypass SDI. Those implementations are also Android (Trinity and NEO) compliant

Migration for Type 1: As explained in detail above. Use libSDIClient and load the plugin. The APIs for card handling are available in the same way as in VOS1/VOS2. **You are getting the payment/sensitive data in clear as on VOS2. You can NOT make use of the SDI P2PE certification.** You may want to consider to migrate from ADK-TEC to the SDI Card Detection (23-01 / 23-03), which is part of the libSDIClient APIs.

Migration for TYPE 2: This is similar to TYPE 1. Instead of directly calling the VOS1/VOS2 ADK functions you will now simply call the counterpart functions of the libSDIClient (names and APIs will be the same), so nothing to do on application level. **The SDI plugin for VOS3 enables that you to get the payment/sensitive data in clear as on VOS2. You can NOT make use of the SDI P2PE certification.** You may want to consider to migrate from ADK-TEC to the SDI Card Detection (23-01 / 23-03), which is part of the libSDIClient.

Migration for TYPE 3: You are already fully compliant to SDI. Please do **NOT** load the new SDI Plugin for VOS3. This way sensitive data is protected. **You are NOT getting the payment/sensitive data in clear as on VOS2. You CAN make use of the SDI P2PE certification. There is no need to change your existing VOS/VOS2 SDI solution on VOS3.**


### EMV L1/L2 Kernels on Neo Platforms (Android vs. VOS3)

The same type-approved EMV kernels for CT and CTLS (L1 and L2) are used on Neo HW platforms between VOS3 and Android operating systems. Thus the emv_allowed.xml and the emv_desired.xml can be used for both OS variants with the same kernels, same LOAs and same certifications. The emv_desired.xml configuration files on VOS3 has same format as on VOS1/VOS2.

**Note on P630 and P630-2 units:**



* earlier "P630" products had a different CTLS1 HW architecture compared to "P630-2" - for this reason new L1/L2 certifications are provided for P630-2 hardware
* VOS3 will only run on P630-2 units, while Android can run on both P630 and P630-2
* Please make sure you configure the correct L1/L2 kernels for VOS3 on P630-2

**All other future Neo devices that can run VOS3 or Android will share the same L1 and L2 approvals between VOS3 and Android/NEO as long as the hardware has not deviations in the CTLS L1 architecture.**


### Customizations

SDI supports customizations with SDI plugins. These plugins enable extensions and specific card schemes handling.

**Customization Plugins**

 Customization Plugins for SDI can be provided to implement specific card processing extensions. 

 Please work with Verifone Platform SW group on specific requirements and implementation plan.


## ADK SEC (Security)


### API compatibility



* VOS3 will no longer support a compatibility layer for ADK-SEC 1.x APIs.
* VOS1/VOS2 ADK SEC transaction data APIs will no longer be supported with VOS3 - now implemented through SDI directly
* extended secSetKSId parameter for MSK handling (optional for non-MSK handling)


### SDI as Security Provider on VOS3

Unlike VOS1/VOS2 the ADK SEC interface is provided through SDI service that works with the security processor directly for all security functions. There is no scapp2 daemon on VOS3.

Applications continue to link against libsec2.so as a client library and this library connects to SDI.


### Key Identification

Unlike VOS1/VOS2, keys in VOS3 are identified by a unique name. Keys are identified by a unique name across all loaded keys including pre-loaded warrantied keys.

The use of former VOS1/VOS2 key slot IDs as unique key names is not recommended but speaking key names are suggested.


### Supported Schemes and Algorithms - Comparing to VOS1/VOS2

When migrating from VOS1/2 to VOS3 the following changes needs to be considered when configuring security engines and related operations:

Supported Modules and Operations by Platform: ENC=secEncryptData, DEC=secDecryptData, SIG=secSign, VFY=secVerify, PIN=secRetrieveEncryptedPIN, UPD=secUpdateKey


| **Engine** | **VOS** | **VOS2** | **VOS3** | **Notes** |
|  -------- | -------- | -------- | -------- | -------- |
| Verishield Security Scripts (VSS)  | VSS: all operation  | VSS: all operation  | &ndash; | - VOS3: replaced with VCCI, new Key Mgmt APIs   |
| Verifone Customizable Crypto Interface (VCCI)  | &ndash; | &ndash; | X  | - requires a Verifone signed SDI plug-in for VCCI extensions   |
| Triple-DES Master-/Session-Key  | **IPPmsk:** PIN, SIG, UPD 

 UPD key in GISKE format  | **IPPmsk:** PIN, SIG, UPD 

 UPD key in GISKE format  | **TDES-MSK**: PIN, ENC, DEC, SIG, VFY, UPD  | - Master-Session Scheme Support, but no support for older IPP GISKE keyblock format 

 - PIN: SDI will provide PAN for ISO format #0 or #3   |
| Triple-DES Fixed Key  | &ndash; | &ndash; | **TDES-FIXED**: ENC, DEC, SIG, VFY  | - PIN encryption with fixed keys not allowed!   |
| Triple DES-DUKPT  | **IPPdukpt:** PIN 
**ADE:** ENC 
**SREDMAC:** SIG, VFY, UPD  | **IPPdukpt:** PIN 
**ADE:** ENC 
**SREDMAC:** SIG, VFY, UPD  | **TDES-DUKPT**: PIN, ENC, DEC, SIG, VFY, UPD  | - UPD=manual increment of Key Serial Number (KSN) 

 - PIN: SDI will provide PAN for ISO format #0 or #3   |
| AES - DUKPT  | &ndash; | **AES:** PIN, ENC, DEC, SIG, VFY, UPD  | **AES-DUKPT**: PIN, ENC, DEC, SIG, VFY, UPD  | - UPD=manual increment of Key Serial Number (KSN) 

 - PIN: PIN-Block Format #4 only 

 - Data: ECB and CBC mode 

 - MAC: CMAC only   |
| RSA Operations  | **RSA:** ENC, DEC, SIG, VFY  | **RSA:** ENC, DEC, SIG, VFY  | **RSA:** ENC, DEC, SIG, VFY  | - allows use of AUTHN warrantied key   |
| SDI Secured File Storage (Crypto-RW)  | X  | X  | X  | - invalidates file content on tamper (no decryption possible)   |
| Verishield Protect (VSP/VCL)  | X  | X  | X  | - configured separately outside of SDI, not a module name   |



### SDI Security Configuration File

In general VOS3 continues to use the same sccfg.json security configuration file format as used in earlier VOS1/2 for SDI and ADK-SEC.

SDI security configuration needs to be adapted for VOS3. Following items need to be checked:



* key names (as per new unique name in the VRK loading package)
* security module type (as per above table)

Unlike VOS1/2 the security configuration file is no longer provided in the user home path of the application. For VOS3 the security configuration has to be loaded with SDI user config package.

**Key Usage Checks.** The secure processor performs key usage checks for each crypto operation. That means VRK payloads have to be provided with proper key usage and mode according their intended usage. Keys with improper settings will be rejected by operations.


### Replacement for VSS Scripts

On VOS1/VOS2 Verifone Security Scripts (VSS) support was available and had been used by some applications for various security operations including

* direct key loading, key derivation
* PIN block generation
* custom encryption, MACing
* etc.

On VOS3 there is no support for no support for direct key loading, but VRK key loading is the default key loading mechnism.

However, if customizations are required, VOS3 provides new mechanisms for that purpose

* Verifone Customizable Crypt Interface (VCCI)
* Extended Key Management Mechanisms

**Customization Plugins.** Customization Plugins for SDI can be provided to implement specific key derivation or custom key management solution.


# Development environment for VOS3 Application Developers

Developers use system development kit for developing applications. This includes the following:


| **Item** | **Contents** |
|  -------- | -------- |
| VOS3 build tools  | - gcc compiler 

 - gcc build tools   |
| VOS3 host debug tools  | - gdb debugger   |
| VOS3 device debug tools  | - debug tools download package (dropbear, gdb, gdbserver, strace, etc.)   |
| VOS3 packaging and development signing tool  | - packman   |
| VOS3 system download files  | - VOS3 system download files for system update   |
| VOS3 / ADK APIs  | - ADK headers, link libraries   |
| ADK Documentation  | - ADK release notes 

 - ADK component programmers guides 

 - examples   |



## ADK API Libraries

Application use API prototypes from provided headers files and link against the ADK libraries to use


| **Component** | **Client** Libraries  | **Client** Header Files   |
|  -------- | -------- | -------- |
| ADK GUIPRT  | - libvfiguiprt.so  | - [html/gui.h](gui_8h.md#file-gui.h)

 - [html/prt.h](guiprt_2src_2html_2prt_8h.md#file-prt.h) |
| ADK IPC  | - libvfiipc.so 

 - libvfiipctls.so  | - [ipc/ipc.h](ipc_8h.md#file-ipc.h)

 - [ipc/notify.h](notify_8h.md#file-notify.h)

 - [ipc/jsobject.h](ipc_2src_2ipc_2jsobject_8h.md#file-jsobject.h)

 - [ipc/tls.h](tls_8h.md#file-tls.h) |
| ADK COM  | - libcom.so  | - com/libcom.h 

 - com/libcom3.h   |
| ADK CCP  | - libccp.so  | - com/libccp.h   |
| ADK MAC  | - libvfimac.so 

 - libvficpr.so  | - [sysinfo/mac.h](mac_8h.md#file-mac.h) |
| ADK PM  | - libvfisyspm.so  | - [sysinfo/vfisyspm.h](vfisyspm_8h.md#file-vfisyspm.h) |
| ADK EMV  | - libEMV_CTLS_Client.a 

 - libEMV_CT_Client.a 

 - libEMV_CT_Link.so 

 - libEMV_CTLS_Link.so 

 - libsdiclient.a 

 - libTLV_Util.so  | - [emv/EMV_Common_Interface.h](_e_m_v___common___interface_8h.md#file-emv-common-interface.h)

 - [emv/EMV_CT_Interface.h](_e_m_v___c_t___interface_8h.md#file-emv-ct-interface.h)

 - [emv/EMV_CTLS_Interface.h](_e_m_v___c_t_l_s___interface_8h.md#file-emv-ctls-interface.h)

 - [emv/EMV_CT_SerInterface.h](_e_m_v___c_t___ser_interface_8h.md#file-emv-ct-serinterface.h)

 - [emv/EMV_CTLS_SerInterface.h](_e_m_v___c_t_l_s___ser_interface_8h.md#file-emv-ctls-serinterface.h)

 - [emv/E2E_EMV_CT_Serialize.h](_e2_e___e_m_v___c_t___serialize_8h.md#file-e2e-emv-ct-serialize.h)

 - [emv/E2E_EMV_CTLS_Serialize.h](_e2_e___e_m_v___c_t_l_s___serialize_8h.md#file-e2e-emv-ctls-serialize.h)

 - [emv/btlv.h](btlv_8h.md#file-btlv.h)

 - [emv/EMV_CT_XML.h](_e_m_v___c_t___x_m_l_8h.md#file-emv-ct-xml.h)

 - [emv/EMV_CTLS_XML.h](_e_m_v___c_t_l_s___x_m_l_8h.md#file-emv-ctls-xml.h)

 - [emv/hexutil.h](emv_2_t_l_v___util_2export_2emv_2hexutil_8h.md#file-hexutil.h) |
| ADK MSR  | - libsdiclient.a  | - msr/msr.h   |
| ADK TEC  | - libsdiclient.a  | - [tec/tec.h](tec_8h.md#file-tec.h) |
| ADK NFC  | - libsdiclient.a  | - nfc/NFC_Client.h 

 - nfc/NFC_Interface.h   |
| ADK SYS  | - libvfisysinfo.so 

 - libvfisysbar.so 

 - libutil.so  | - [sysinfo/sysinfo.h](sysinfo_8h.md#file-sysinfo.h)

 - [sysinfo/leds.h](leds_8h.md#file-leds.h)

 - [sysinfo/sysbar.h](sysbar_8h.md#file-sysbar.h)

 - [sysinfo/sysbeep.h](sysbeep_8h.md#file-sysbeep.h)

 - [sysinfo/util.h](sys_2export_2sysinfo_2util_8h.md#file-util.h)

 - [sysinfo/inifile.h](inifile_8h.md#file-inifile.h) |
| ADK CPL  | - libcpl.so  | - [commerce/commerce.h](_commerce_8h.md#file-commerce.h) |
| ADK LOG  | - liblog.so  | - log/liblog2.h   |
| ADK ISO8583  | - libiso8583.so  | - iso8583/ConstData.h 

 - iso8583/dl_err.h 

 - iso8583/dl_str.h 

 - iso8583/dl_iso8583.h 

 - iso8583/SafeBuffer.hpp 

 - iso8583/dl_iso8583_fields. 

 - iso8583/dl_base.h 

 - iso8583/dl_iso8583_common. 

 - iso8583/dl_mem.h 

 - iso8583/defs/dl_iso8583_de 

 - iso8583/defs/dl_AS2805_def 

 - iso8583/fwd/ConstData.h 

 - iso8583/fwd/SafeBuffer.hpp   |
| ADK INF  | - libinf.so 

 - libinf_util.so  | - [inf/infodb.h](infodb_8h.md#file-infodb.h)

 - [inf/inf_util.h](inf__util_8h.md#file-inf-util.h) |
| ADK SND  | - libsound.so  | - [sound/sound.h](sound_8h.md#file-sound.h) |
| ADK SEC  | - libsec2.so  | - [sec/libsec.h](libsec_8h.md#file-libsec.h) |
| ADK EVT  | - libevt.so  | - evt/libevt.h   |
| ADK AGT  | - libsvc_tms.so  | - agt/svc_tms.h 

 - agt/tms_status.h   |
| SDI CLIENT  | - libsdiclient.a 

 - libsdiprotocol.so  | - sdiclient/sdi_if.h 

 - sdiclient/sdiprotocol.h   |
| SDI C++ API  | - libsdiapi.so  | - [sdiapi/sdi.h](sdi_8h.md#file-sdi.h) |
| INSTALLER  | - libinstall.so  | - installer/installer.hpp   |



## Open Source libraries

In addition to ADK APIs, applications can use the following provided Open Source libraries directly from within applications.


| **Component** | **libraries** | **header** files  | **Notes** |
|  -------- | -------- | -------- | -------- |
| OpenSSL  | - libssl.so 

 - libcrypto.so  |  |  |
| Compression  | - libz.so  |  |  |
| CURL  | - libcurl.so  |  |  |
| Expat  | - libexpat.so  |  |  |
| SQLite  | - libsqlite3.so  |  |  |
| Libxml  | - libxml.so 

 - libxml2.so  | all headers from libxml2  | added in OSS release 1.9.1   |



## Secondary Library dependencies

Provided client libraries have additional dependencies that are usually not reflected to the applications and they are being resolved internally.

Applications should only link to the above libraries, unless told differently.


## VOS3 Platform internal libraries

DO NOT USE INTERNAL LIBRARIES. The SDK contains additional libraries not listed above as supported ADK or Open Source libraries. These libraries do not expose public interfaces for applications and can be subject to change with new VOS3 releases. Please do not use these libraries directly! 

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
