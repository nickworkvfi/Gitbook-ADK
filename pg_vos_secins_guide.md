---
title: V/OS Secure Installer

---

# V/OS Secure Installer




# Secure Installer


# Introduction

On V/OS and V/OS2, the Secure Installer, which is a root process, is responsible for the following.

1. Installing all s/w on to the system - this includes root file system updates and user applications.
2. Launching (starting) User applications.
3. Providing a message interface for running applications to access certain root services e.g. reboot. The functionality provided in this way will be kept to a minimum though!

All content that the installer deals with must be contained within an archive, referred to as an install package, which must be signed. Note the following assumptions though.

On V/OS,

* The root file system (RFS) is created on DRAM, non-persistent memory.
* This means that signed s/w packages stored in flash will be authenticated and extracted to DRAM on every boot-up.

So there are therefore two distinct parts to installing s/w on the system. In the first place the downloaded install packages must be authenticated and stored in flash memory. Then, during every system start-up, the install packages will be authenticated and extracted to the root file system (RFS) in DRAM.

On V/OS2,

* The root file system (RFS) is created on flash, persistent memory. There are two flash areas on V/OS2 systems
    * ‘flash’ - Mounted as read-write and not executable, referred to as ‘flash’ in this document. This also exists on V/OS systems.
    * ‘securefs’ - Mounted as read-only and executable, referred to as ‘securefs’ in this document. ‘securefs’ is the area on the flash where the RFS resides on V/OS2 systems.
* This means that the signed s/w packages are authenticated and extracted into the RFS only once after installation. This way the RFS does not have to be re-created on every boot. Also, the signed packages are removed after the packages are extracted into the RFS on securefs.


# Installing Software

With regard to installing s/w on the system, the following requirements must be met.

* All content must be authenticated before it is installed to flash memory.
* All content must be installed in a package. The package format is defined below.
* Installed packages cannot be extracted to the root file system without first being authenticated.

An important distinction is made between the install packages that reside on the system itself, and the files used to download those packages to the terminal. In particular note the following:

* A signed package (i.e. the package file and it's p7s signature file) can only be downloaded in a signed bundle. A bundle is therefore simply an archive containing one or more signed packages (plus optionally signer certs and a special 'remove' file as described later). The bundle itself is signed so will also have an associated p7s signature.
* To allow everything be downloaded in a single file, the install bundles and their associated signatures are combined in an archive to form a single download file. 

So a download files contains bundles, which in turn contains install packages (as shown in the following diagram). **Only the install packages remain on the system after installation**. Some bundle information is stored but not the bundle tar files themselves. 
| Download File 
| Bundle(s) + Sig(s) 
| Install Packages(s) + Sigs   |
|  -------- |
| Signer Certs   |
| Remove file   |


 |
|  -------- |


 |
|  -------- |


At a high level, the install packages themselves are categorised as OS, System, or User, and are identified as such by a control file contained within the package itself. Packages will of course be authenticated using the relevant 'filetype', so it is not possible for a signer to install a package type unless he is authorised to do so e.g. if a package indicates it is an OS package it will be authenticated using filetype '0'. If the signer certificate does not contain filetype '0', authentication will fail and the package will be rejected.

For application packages the following is the goal.

* The system should guarantee that applications signed by different app signers will run as different users.
* It should be relatively easy to change the user that an application runs as e.g. if two applications currently run as the same user it should ideally be just a matter of re-packaging one of them. This though means that applications cannot make any assumptions about what their user name or home account may ultimately be.


## OS package

OS packages are packages signed by the OS Signer and authenticated using filetype '0'.

* The standard OS package, type 'os', is used to create the root file system (RFS) in DRAM on V/OS and securefs on V/OS2.
    * These are extracted to '/' in the RFS, so all files and directories in the package must be relative to '/'.
    * File ownership on all files in the package after they are extracted to the RFS will be root:root i.e. owner is root and group is root.
    * System processes can be started from rc scripts as per normal.
    * On V/OS these packages are extracted into DRAM on every boot. On V/OS2, they are extracted only once into securefs after which they removed from the flash.
* There is also an OS signed package of type 'osflash' that is extracted to the flash partition, /mnt/flash. These packages are intended for large media files, fonts, etc., which can be authenticated and extracted to flash one time only. Note that executable files and libraries cannot be loaded in this way.
* Finally the 'lowlayers' type package is used to upgrade the low layers such as sbi, uboot, vault, kernel, initramfs, secure-applets on V/OS2.
* Failure to install any lowlayer pkg sets a lowlayer error bit. Reboots do not clear this bit. The only way to clear this bit is successful re-installation of lowlayer packages. This bit when set prevents user apps from starting.


## App packages

App packages are packages that are signed by an App Signer and are authenticated using the filetype corresponding to the user indicated in the package control file e.g. filetype '1' for user 'usr1' (as per Mx), filetype '2' for user 'usr2', etc. This implies that user information must be contained within the package.

* The basic app package, type 'user', is extracted to the relevant User home account.
    * The files extracted to the home account will be owned by the relevant user. This topic is dealt with in detail later.
    * User packages contain a start file, which indicates what applications should be automatically started. Once all App packages have been extracted to the RFS, the installer will start the User applications.
    * The user home accounts are newly created in DRAM on every start up on V/OS systems whereas only once in securefs on V/OS2 systems.
* The 'userflash' package type contains files that will be extracted to a directory in the flash file system.
    * The package is extracted to a directory that is created specifically for the User. The directory will be /mnt/flash/userdata/<username> e.g. if the username is usr1 the flash directory for this user is /mnt/flash/userdata/usr1.
    * User and Group ownership on the extracted files will be exactly as described later for normal app packages.
    * This directory may be referenced using a 'flash' symlink that the installer will create in the user's home account. So to reference a file called "mydata.bin" in flash, the application could use "./flash/mydata.bin" or simply "flash/mydata.bin". In this way all references to the user's files in flash will be relative to the home account.
    * This type of package need only be extracted to flash one time. The package file is then deleted after it has been extracted. Again this is intended primarily for large media files and/or fonts. Executable files or libraries cannot be loaded in this way.
* The 'userfont' package type allows a font to be installed to a central location so that it is available system-wide. This is also a flash package type.
    * The package is extracted to a directory /mnt/flash/system/fonts.
    * Again this type of package need only be extracted to flash one time. The package file is then deleted after it has been extracted.
* The 'service' package type is used to install services. These are authenticated on every start-up and extracted to /usr/local/lib/svcmgr (in DRAM), where they can be found by the service manager process,
* The 'config' package type is used to install global config files. These are authenticated on every start-up and extracted to /etc/config (in DRAM).
* The 'flashconfig' package type is similar to 'config' but is authenticated once only at install time and extracted to /mnt/flash/etc/config.
* The 'vss' package type is used to install vss scripts. On V/OS systems, these are authenticated on every start-up and extracted to /etc/vss/<username> (in DRAM), where <username> is the user indicated in the package control file. VSS packages are authenticated using filetypes 'A', 'B', ... 'P, for usr1, usr2, ..., usr16 respectively and 'S1', 'S2', ... 'S16', for sys1, sys2, ..., sys16 respectively. On V/OS2 systems, these packages are extracted only once into securefs after which the packages are discarded.
* Package type 'unsigned' is a special package that is not signed. This is extracted to a dir called 'unsigned' in the user's flash directory.


## System App Package



* System app packages are just App packages for which the user indicated is sys1, sys2, ..., sys16.
* System apps are signed by the System signer (under the Verifone OS sponsor) and are authenticated using the filetype corresponding to the user indicated in the package control file e.g. filetype 'S1' for user sys1, filetype 'S2' for sys2, etc
* The package types 'user', 'userflash', 'userfont', 'config', 'flashconfig', and 'service', are supported for system signers.
* The flash directory for system applications will be /mnt/flash/sysdata/ <username> e.g. if the username is sys1 the flash directory for this user is /mnt/flash/sysdata/sys1.


## Downloading Packages

The secure installer is not responsible for downloading packages to the unit - it installs download files that have been downloaded by, for example, the sysmode application or other user applications.



* Packages must be downloaded in a download file, the format of which is described in later sections. The secure installer will process download files placed in the directory, **/mnt/flash/install/dl**, which is writeable by all. On V/OS systems /mnt/flash/install/dl is on flash. On V/OS2 systems /mnt/flash/install/dl is a symlink to tmpfs on DRAM.
* When the installer processes a download file it installs all the packages therein to flash. If the system is already up and running when this takes place (e.g. if an application downloads a file and calls the Secins_install_pkgs API in libsecins), installing the packages to flash has no effect on the running applications. Indeed, the newly installed packages are not extracted, to DRAM (or flash for 'userflash' packages), until a reboot occurs or the application calls the Secins_start_user_apps API. On V/OS, since the DRAM tmpfs is execute in place, extracting newly installed DRAM packages while applications are running would cause serious problems. On V/OS2, although it is demand paging from securefs to DRAM it is not safe to replace the current running application. As will be seen later, the 'unsigned' package is the only exception to this because it is extracted to a dir in the User's flash directory at install time.


## Other Flash Directories

In addition to the flash directory that is created specifically for each user, the following directories are also available.


### Log Directory

A partition in flash memory is created just for log files. Each user on the system will have a directory in the log partition to which he can write his log files.

* This secure installer will create a symlink called 'logs' in the user's home account which points to the user's log directory. This symlink should be used to reference log files so that all file references are relative to the home account.
* There is also a common logs directory, /mnt/flash/logs/share, which all users have access to.


### Share Directory in Flash

A common direction '/mnt/flash/userdata/share' is created, which is accessible by all app users (i.e. usr1, usr2, ..., usr16).


## Typical Boot-up Sequence

The typical boot-up sequence will be as follows.

On V/OS systems,

* The kernel boots initially with a minimal initramfs.
* /sbin/init in the initramfs, which is a symlink to the stage 1 secure installer, mounts a tmpfs for the RFS and will extract all installed OS packages to this tmpfs.
* It then does a switch root operation, which makes the mounted tmpfs the new root filesystem, and starts the stage 2 secure installer (in the newly extracted RFS). This will then boot the system as per normal, calling the rc.d scripts etc.
* After the rc.d script execution, the stage 2 secure installer authenticates and extracts all application packages to DRAM, having first set-up all the relevant user information and home accounts.
* Finally user applications will be started.

On V/OS2 systems,

When OS/Sys bundles are installed,

* The kernel boots initially with a minimal initramfs.
* /sbin/init in the initramfs, which is a symlink to the stage 1 secure installer, mounts a tmpfs for the RFS and will extract all installed OS packages and system packags into this tmpfs.
* It then does a switch root operation, which makes the mounted tmpfs the new root filesystem, and starts the stage 2 secure installer (in the newly extracted RFS in securefs). This will then boot the system as per normal, calling the rc.d scripts etc.

When User bundles are installed,

* The kernel instead of booting into the initramfs, boots into the stage 2 secure installer present in the RFS on securefs. This will then boot the system as per normal, calling the rc.d scripts etc.
* After the rc.d script execution, the stage 2 secure installer:
    * mounts the file-system read-write,
    * extracts all the User packages to securefs after authentication,
    * sets up all the relevant user information and home accounts.
* Finally after the securefs is re-mounted read-only again, the user applications will be started.


# Users and Groups

As per the Mx platform, application developers will have the option of running applications as different users so that the files belonging to different applications can remain private from each other. They may also of course choose to run several different applications as the same user.

However, the intention for V/OS is that the system should ensure that applications written by different development groups, for example, may co-exist on the same unit but will automatically run as different users. As we know, if there are two independent development groups developing applications the chances are that they will both write their applications using the default user. If at some point an application from each of these two groups is required to run side-by-side in the same terminal, it will most likely be desirable that they can run privately from each other. This implies that the applications must run as different users, and ideally the system should ensure that this is the case.

** This means then that the application should not make any assumptions about what its user name, and therefore home account, is. Applications should follow these guidelines. **

* Do not use absolute pathnames when referencing files in the home account. All references should be relative to the home account e.g. use "mydata.bin" or "./
mydata.bin" instead of "/home/usr1/mydata.bin".
* Similarly, all references to the user's flash directory should be via the 'flash' symlink in the home account i.e. use './flash/video.mpg'.
* If you really need the home account name it can be got from the HOME environment variable. Alternatively, it will be the working directory when the application is first launched and can be got from getcwd() at that point.
* Do not reference files in another user's home account directly. Applications should share files using a common folder in the RFS or should share information using other forms of IPC.

Following these guidelines will also make it a trivial matter to change the user that an application runs as. It should just be a matter of changing the user indicated in the package control file and re-signing the package.

We must also consider existing legacy applications running on Mx terminals, which do not follow these guidelines of course, the majority being hard-coded to user name usr1 (and home account /home/usr1). By using the same user names as Mx8 devices, V/OS allows these to work without the need to change the hard coded user names. Clearly though, should the need arise for such an application to run as a user other than usr1, some code changes will be required on V/OS.

There is also an existing filetype (or GID as it is sometimes referred to as) scheme, where the app signer certificates contain a list of filetypes that relate to the users that the app signer is allowed to sign applications for. So if an app signer certificate contains the filestypes '1', '2', '3', ..., '8' it is allowed sign applications for usr1, usr2, usr3, ..., usr8.

The filetype has also been incorporated into RKL, so we need to keep a direct connection between the filetype and the actual users on the terminal.


## Assigning Users

As previously stated all packages installed must be signed. Currently with Pedguard there can only be one application sponsor but there can be multiple application signers in a terminal. Furthermore, a single application signer may have multiple signer cards.

Ideally, the following is what we would like to achieve on V/OS.

* The system should assign the user name based on information in the app signer certificate and the application install package.
* It should be a trivial matter to change the user that an application runs as. Ideally it would be just a matter of re-packaging and/or resigning the application package.
* Applications signed by different app signers should automatically run as different users.
* Retain the filetype as it currently exists.

Here is what is proposed.

* The install package will indicate the user that the package will be installed as e.g. usr1, usr2, etc. - 'usr1' will be assumed if no user is specified.
* The 'filetype' will directly relate to the user that the package is installed to. Filetype '1' will be usr1, filetype '2' will be usr2, etc.
* The package filetype will be passed to the authenticate() function when authenticating, so the signer Certificate must allow the filetype that is specified in the install package. It will fail to authenticate otherwise.
* We should ensure that separate app signers, and in particular those whose applications may run side by side in the same terminal, have a different range of filetypes specified in their certificates. This way it is impossible for them to run applications as the same user.
* Note though that if every app signer is happily working away using filetype '1' and then two of them find that they are required to run on the same terminal, from the secure installer point of view, all that needs to occur is for the install package to be changed to indicate a different user and re- signed.
* This assumes of course that the applications do not make any assumptions about their user name as per the guidelines above. This will always be a requirement if it is to be possible to easily change the user that an app runs as. Even today, if you want to move an application from usr1 to usr2 you must change the source code if it references a user name or home account at any point.

So this scheme does guarantee that applications signed by different app signers will run as different users as long as the app signer certificates for those app signers have a completely different range of filetypes specified. So, if there are two totally independent app developers whose applications are required to run side-by-side in the same terminal, should one signer be assigned filetypes '1' ..., '4' and the other be assigned '5' ..., '8', their applications can never run as the same user. Keep in mind also that in cases like this, both signers must share a common app sponsor so the sponsor can control the filetypes assigned to each signer.

Example 1: Default user

* Install package specifies usr1 (or does not specify the user at all so the default, usr1, is used).
* The app signer certificate contains filetype '1' in the list of the allowed filetypes.

For this package then the following applies.

* User name: usr1.
* Home dir: /home/usr1
* The uid will be assigned by the system - uid 500 will be used for usr1, 501 for usr2, etc (as per Mx).

Example 2: Not the Default user.

* Install package specifies usr2.
* The app signer certificate contains filetype '2' in the list of the allowed filetypes.

In this case then:

* User name: usr2
* Home dir: /home/usr2


## Assigning Groups and File Sharing


### Umask

When extracting install packages to RFS or flash, the Secure Installer uses a default umask of 027; so the 'group' write file permission and all 'other' permissions are cleared. Therefore, by default, files installed from an install package will be private to the package User. Note that this umask may be modified using the 'Umask' field in the package control file as described later.

Similarly, user processes started by the Secure Installer (e.g. applications started from the package 'start' file or 'GO' variable) will also have a umask of 027. So keep this in mind when creating files using open() or creat() for example; the effective permissions will be modified by the process's umask in the usual way i.e. the permissions of the created file will be 'mode & ~umask'. Note also that this process umask is unaffected by the 'Umask' field in the package control field. A developer may change the process umask at runtime however, using the umask() system call.


### Assigning Groups

The secure installer uses a user private group type scheme when assigning users to groups.

* Whenever a new user is added to the system a user private group is created.
* This group has the same name as the user for which it was created and that user is the only member of the private group.

In addition there will be an app signer group created for each app signer.

* The system effectively contains two application signer groups, one called 'users' for customer user applications and one called 'system' for system applications.
* All users belonging to a particular application signer will automatically be a member of this app signer group.
* So users usr1, usr2, ..., usr16 will be members of the 'users' group and users sys1, sys2, ..., sys8, will be members of the 'system' group.

There is also a common group called 'share' of which all users, usr1, ..., usr16 and sys1, ..., sys16, are members.

A number of other special purpose groups are also available e.g. for sharing files with system apps. See section [List of Groups for Sharing between Users] for the complete list of package groups available.

Install packages may indicate whether its contents should be installed using the user private group (default), the appsigner group ('system' or 'users' as appropriate), or one of the other groups of which the user is a member. To allow a file be readable by other applications in your app signer group (but not readable by all), for example, would require the file to be installed using the appsigner group. So, from the install package point of view the possibilities are as follows.

* If the package group is not specified the user private group will be used.
* If the package group is specified then it must be as follows.
    * Can match the user pseudonym specified in the package - in which case the user private group is used.
    * Specify one of the groups of which the User is a member e.g. the group 'users' for customer applications or the group 'system' for system applications to use the app signer group.

Example 1: Default Group

* Install package specifies usr1.
* No group specified.

For this package then the following applies.

* User name: usr1
* Home dir: /home/usr1
* Group: usr1

Example 1: App Signer Group

* Install package specifies usr1.
* Group specified is "users".

For this package then the following applies.

* User name: usr1
* Home dir: /home/usr1
* Group: users


### File Sharing

Given that the default umask of 027 strips all 'other' file permissions, it is often easier to share files with other users by setting the group ownership as required. This can be done at install time using the 'Group' field in the package control file or at run time using the chown() system call.

Note that a user may only set the group ownership of a file to a group of which he is a member.

A complete list of available groups follows.

On V/OS and V/OS2, file access is dependent on both standard Linux file permissions (Discretionary Access Control or DAC) and Grsecurity permissions (Mandatory Access Control or MAC). See [Package grsec file] for more information on Grsecurity. Both the Linux file access permissions and Grsecurity must allow access to a file, otherwise access will be denied.


### List of Groups for Sharing between Users

Following is the complete list of groups created by the Secure Installer to allow files sharing between different users on the system.

A user may set the 'Group' field in install packages to any group of which the user is a member. This is also the case when using chown() to set the group ownership of a file.


| Name   | Group ID   | Description    |
|  -------- | -------- | -------- |
| usr1, usr2, ... usr16

 sys1, sys2, ... sys16   | 500, 501, ... 515

 600, 601, ... 615   | 

* User Private Group - one per user.  
* The User is only member of the User Private Group. So user 'usr1' is the only member of the group 'usr1', etc.  
* Use this for files that should remain private.  

 |
| users   | 516   | 

* Signer group for application users.  
* Members are usr1, usr2, ... usr16.  
* Application users should use this group when sharing files with all other application users.  

 |
| system   | 616   | 

* Signer group for System application users.  
* Members are sys1, sys2, ... sys16.  
* System application users should use this group when sharing files with all other System application users  
* Note though that 'system' may also be specified by application users, but in that case it is a pseudonym for 'usr1sys', 'usr2sys', etc. as described below.  

 |
| share   | 700   | 

* Common group for all users.  
* Members are usr1, usr2, ... usr16 and sys1, sys2, ... sys16.  
* Use this when sharing files with all users on the system.  

 |
| usr1sys, usr2sys, ... usr16sys   | 710, 711, ... 715   | 

* Groups containing one application user plus all System application users.  
* usr1sys members are usr1, sys1, sys2, ... sys16,

 usr2sys members are usr2, sys1, sys2, ... sys16,

 etc  
* User applications should use this when sharing files with system applications.  
* Note that since this only applies to application users the pseudonym 'system' may be specified in the package control file e.g. if the package user is usr1 and the Group 'system' is specified, the actual group used will be usr1sys. In this way the Group will automatically change if the Package user changes.  

 |
| u1share, u2share, ... u16share

 u1share, u2share, ... u16share   | 716, 717, ... 731

 732, 733, ... 747   | 

* Group for primary user to share with secondary users. 

 |



## Shared Libraries

A normal application install package may include shared libraries, which will be extracted to the user home directory (or some sub-directory therein, depending on the package layout). To enable these libraries be picked up automatically by the loader, the secure installer will use ldconfig to ensure that the 'lib' directory in the user home directory is automatically searched for shared libraries.

So, if the home directory is '/home/usr2', '/home/usr2/lib' will be searched, so libraries placed here will be automatically picked up by the loader.

* Note that while the 'lib' directory in the home accounts of all users on the system will be searched for shared libraries, in the normal case a user will not have permission to read libraries in another users home account. If a particular app signer wishes to allow shared libraries be shared among different users they must be installed as group 'users' so that they can be read by other users.
* LD_LIBRARY_PATH cannot be reliably used on V/OS - see section [File Capabilities] for the reasons behind this. So, if a user wishes to ensurethat the 'lib' directory in the user home directory will be searched before any system directory or any other user's home directory it must use the ld linker option 'rpath, which specifies the runtime library search path of the particular program being compiled. From gcc, you can invoke the rpath option as follows: 

```cpp
-Wl,-rpath,lib
```



# Software Packaging

Firstly, here are some of the factors that had an influence on the package format chosen.

1. On V/OS, packages will be stored on the system in flash memory (UBIFS) and will be extracted to DRAM on every start-up. On V/OS2, packages are extracted into securefs only once after installation after which they are discared.
2. Packages must be signed and will be signed using existing file signing tools. They will therefore always be a separate signature file with each package file.
3. On V/OS, it should only be possible to execute files that are extracted to DRAM from a signed package on every boot-up. The flash memory should not therefore be executable. On V/OS2, the packages are stored temporarily on flash before they are authenticated and extracted into securefs.
4. It must be possible to download Signer Certificates along with the signed packages.
5. Boot-up time needs to be minimised.
    * Obviously packages will always be an archive of some type but extracting an uncompressed tar file for example will clearly be faster than extracting a compressed archive.
    * UBIFS already gives us some compression in flash; though not quite as much as what gzip would give, it is none the less significant.
6. Package download time must be minimized.
    * Serial downloading is used extensively in many existing Mx installations.
    * Clearly compressed packages would be desirable here.
7. While we may wish to download multiple packages (and their associated signatures) to a device we must be able to download everything in a single download file.
8. We may want to release a number of packages as a set, such that only the complete set can be downloaded together i.e. it would not be possible to download individual packages from that set. For example, an OS update could be released as a set of packages, and even though each package has an individual signature it would not be possible to take a single package from the set and download it alone. This of course would not prevent you from releasing a single package as a set if required.
9. We want to use a differential downloading scheme (bsdiff/bspatch) for downloading updates.
    * Ideally this would be used to update the install packages themselves e.g. if version 1.0.1 of package 'myapp' is installed - a patch file is downloaded that is used to create version 1.0.2 on the system. The signature must also be updated of course.
    * In this way all the work is done at install time rather than boot-up time.
    * An alternative scheme whereby the patch is stored separately to the installed package would lead to increased processing on every boot-up which will increase the boot-up time.
    * Note that compressed files in general are not suitable for patching - that is to say that you cannot efficiently patch the binary file itself - you could patch the contents separately after they have been de-compressed of course. This though is the scenario mentioned in the previous point and in our case would lead to increased processing on every boot-up.
10. Package removal needs to be considered.
    * It is easy to see how new packages can be added to the system or existing installed packages updated just be downloading new packages and/or package updates. However, when installing packages we also need to be able to dictate that some of all of the existing installed packages should be completely removed.
    * Examples of this would include installing a complete older version of the OS for test purposes or loading a complete new app set to an existing device.
    * Terminals being downloaded may be remote so there can be no user involvement in the process of downloading other than selecting a new set of packages to be downloaded and preparing the download file.
    * You cannot install a package on the system unless it is signed. It therefore stands to reason that whatever dictates that a package should be removed must also be signed.


## Package Format

In view of the sometimes conflicting considerations listed above, a distinction is made between the actual install packages themselves and the files used to download packages to the terminal.

In summary, to download a package or packages to the device, the following must be done.

1. Generate one or more install packages.
2. Sign the individual install packages.
3. Combine one of more install packages and package signatures into a bundle. The bundle may also contain signer certificates and a 'remove' file.
4. Sign the bundle
5. Combine one or more bundles and bundle signatures into a single download file.

The details are described in the following sections but note the following points.

* After installation is complete it is the package tar-balls that are stored in flash memory, not the bundle tar-balls.
* The bundle information (e.g. Name, Version, etc.) is however also stored on the system and a package is tied to the bundle it is installed in. So an installed package can only be updated or removed as part of an update to the bundle that it is contained in.


## Install Packages



* On V/OS, the install package is a tar-ball (GNU format) and must not be compressed.
* On V/OS2, the install package is a tar-ball (GNU format) and should be gzip compressed.
* The package must be signed so every package must be accompanied by a p7s signature file.
* The package filename is not important but the signature must have the same filename as the package file with ".P7S" or ".p7s" appended.
* The directory structure and files should appear in the tar-ball as you want them to appear in the RFS when installed; relative to '/' for OS signed packages and relative to the target directory for User or System signed packages, where the target directory for ‘user’ type packages, for example, is the user home dir, for ‘userflash’ packages it is the user flash directory, etc.
* A directory named CONTROL must exist as the top-level of the tar-ball directory structure.
* At a minimum, inside the CONTROL directory there must exist a file named "control". This is described below.
* Other files which may exist in the CONTROL directory are "start", "grsec", "env". Again these are described below. A dependency file will be added at some point also.
* The various types of install packages are described in later sections and Appendix A contains a practical example of how to create install packages.
* An install package can only be loaded as part of signed Install Bundle.

Please refer to [Appendix J: Recommended optimized packaging] for recommended packaging details and optimized installation times.


### Package start file

A file named "start" in the CONTROL directory lists the applications that should be automatically started for that package. Each line is effectively a command line that will be used to start an application but note that this command line is parsed by the secure installer and not a bash shell. In particular special characters normally handled by the shell such as '&', '|', ';', etc. do not have any special significance.

On the other hand, the command line may include environment definitions and command line arguments as well as the executable name itself.

**Example:**

```cpp
myapp -port /dev/ttyS0
testapp
```

 This start file will start both myapp and testapp.

* Note that the executable should be referred to relative to the home account and not as an absolute pathname.
* Note also that environment variables may be specified prior to the executable name as is the case on the bash command line e.g. the following is a valid start file line. 

```cpp
PLATFORM=VOS myapp -port /dev/ttyS0
```

* Only 'user' or 'service' package types may start applications.


### Package env file

A file named "env" in the CONTROL directory may also be used to set-up the environment of user applications. This file is in ini file format.

* Environment definitions in a section named "global" will be passed to every app started for the package.
* Environment definitions in a sections that matches the executable name will be passed to the relevant application.

**Example:**

```cpp
[global]
    DEBUG=off
    PLATFORM=VOS
[myapp]
    DEBUG_LEVEL=1
```


### Package control file

A file named "control" in the package CONTROL directory contains information relating to the package. This file consists of lines of the form "Field:
value".

Currently the following fields are supported (more may be added as development continues).

The Field and value strings defined here are NOT case sensitive.


| Field   | Max Length   | Description    |
|  -------- | -------- | -------- |
| Package   | 24   | 

* The name of the package (Required).  
* The field 'Name' may alternatively be used here - The labels 'Package' and 'Name' are inter-changeable.  

 |
| Version   | 16   | 

* Package Version (Required).  
* See section [Install Package Versions] for more information on package version strings.  

 |
| User   | 8   | 

* User - "usr1, usr2, ..., usr16", or "sys1, sys2, ..., sys16" (Optional).  
* If not specified the default value is as follows. 
    * For os install packages (see Type field), defaults to "root"  
    * For other install packages, defaults to usr1.  

 |
| Group   | 8   | 

* Group. (Optional).  
* May match the User specified (usr1, usr2, ..., etc) or may contain the string 'system', 'users', or any of the valid groups on V/OS. See section [Assigning Groups and File Sharing] for more information on the groups allowed.  
* If not specified, will match the User specified i.e. user private group will be used. Exceptions are packages of Type 'userfont' and 'service', which default to the group 'share'  
* The above applies to system or user packages only. OS packages may specify 'root' if they wish. For OS packages the group will default to 'root' if not specified.  

 |
| Category   | 16   | 

* Package Category (Optional) 
    * 'fs' for filesystem content; this includes the standard os, system, and user packages.  
    * 'patch' for update packages that patch an already installed package.  
    * 'sparse' supported only in V/OS2 to update an already installed package.  
    * Defaults to 'fs' if not specified.  

 |
| Type   | 16   | 

* Package Type (Optional)  
* 'fs' for filesystem content; this includes the standard os, system, and user packages.  
    * 'os' for standard os packages, which are extracted to '/' to form the basic root file system.  
    * 'osflash' for OS signed flash packages.  
    * 'lowlayers' for updating sbi, uboot, etc. Must be OS signed.  
    * 'user' for standard user packages, which are extracted to the home account in DRAM on every boot-up. This is the default value assumed when no type is specified.  
    * 'userflash' for packages that will be extracted to the User flash area. The package is deleted after it has been extracted to flash.  
    * 'userfont' for packages that will be extracted to /mnt/flash/system/fonts (supported from release_20121015).  
    * 'service' for installing services (which must be readable by the svcmgr process).  
    * 'config' for installing global config files.  
    * 'flashconfig' for installing config files to flash. This package is also deleted after it has been extracted.  
    * 'vss' for installing vss scripts.  
    * 'usrapi' for installing shared libraries (available from 30320101, also available in 3025 from 30250201).  
    * 'unsigned' for unsigned user data packages.  
    * If not specified the type defaults to 'os'. However, if the User is specified and is not 'root' (i.e. is sys1, sys2, etc. or usr1, usr2, etc.) then the type defaults to 'user'.  
* For the 'patch' category the type must match the type of the package being patched i.e. the one already loaded on the system.  

 |
| SrcVersion   | 16   | 

* Contains the version of the package being patched.  
* This is required in a 'patch' package.  

 |
| Umask   | 3   | 

* Octal umask to use when extracting a User package to DRAM.  
* By default the secure installer uses umask 027 when extracting user packages to RFS. This removes 'group' write access and all 'other' file access permissions from the files in the package. In this way a user’s files in the home directory will by default be private.  
* This field need only be specified if a umask other than 027 is required. 
Raptor/Engage terminals will prevent the masking of the user write bit as it can cause problems when updating with the flash root filesystem. In general there should be no need to mask the user read or write bits. 


 |
| NoReboot   | 3   | 

* No reboot after install (Optional).  
* When User is “os, sys1, sys2, ...” set NoReboot to “y” or “yes” to prevent reboot.  

 |


**Example: OS Package**

For a normal OS package, the minimum required in the control file is just Package and Version. 

```cpp
Package: busybox
Version: 1.01
```

Here the category defaults to 'fs', the type defaults to 'os' and hence the user defaults to 'root'.

** Example: User Package **

For a normal user package, either the User or the Type MUST also be specified 

```cpp
Package: testapp
Version: 1.00
User: usr1
```

 Here the category defaults to 'fs', the type defaults to 'user' (because User is specified as usr1).

This can also be specified as follows. 

```cpp
Package: testapp
Version: 1.00
Type: user
```

 In this case the category defaults to 'fs' and the User defaults to usr1.

Obviously, both User and Type can be specified if desired. 

```cpp
Package: testapp
Version: 1.00
Type: user
User: usr1
```


### Package grsec file


#### Grsecurity

Grsecurity is a set of patches for the Linux kernel with an emphasis on enhancing security. One component of grsecurity is that it provides a full Role-based access control (RBAC) system. A RBAC system is an approach to restricting the system access of authorized users. You need an RBAC system if you want to restrict access to files, capabilities, resources, or sockets, of all users, **including root**. The aim is to create a fully least-privilege system, where users and processes have the absolute minimum privileges to work correctly and nothing more. This way, if the system is compromised, the ability by the attacker to damage or gain sensitive information on the system can be drastically reduced. See [http://grsecurity.net/](http://grsecurity.net/) for more information.


#### Grsecurity System Policy File

In grsecurity, the RBAC system is managed through a system policy file (/etc/ grsec/policy) which is essentially a system-wide set of rules. The secure installer will be responsible for enabling grsecurity on the system and since it is the secure installer that adds all users to the system (based on the information in the install packages) it must also set up the grsecurity policy file based on what users are present.

For each user that is added to the system, the secure installer adds a User Role to the system policy file. This User Role consists of the following.

* The default subject ('subject /'), which lists the objects and object modes available to the user by default.
* Other subjects may be added by the user via the install package 'grsec' file. For example if a user application, 'myapp', required a capability such as CAP_NET_RAW, which is not included in the default subject, it may include the following in the package grsec file. 

```cpp
[myapp]
    +CAP_NET_RAW
```

 The secure installer will then add a subject to the User Role for 'myapp' e.g. for usr1 it would be as follows in /etc/grsec/policy. 

```cpp
subject /home/usr1/myapp
    +CAP_NET_RAW
```

* The install package 'grsec' files are of course subject to strict checking. User subjects will only be granted access to objects that have already been deemed appropriate for users to use e.g. if a user had '+CAP_SYS_ADMIN' or '/ rw' in its package 'grsec' file, it clearly could not be allowed. See later for more details on this.

The intention is that the default role should cover the vast majority of what a standard user would require access to on the system. So, in most cases a grsec file will not be required in an install package.


#### 'grsec' file

So, as seen above, a file named "grsec" in the CONTROL directory is used to add subjects to a user's grsecurity User Role. This file is also in ini file format.

This file should contain a section for each subject (i.e. executable program in this case) that requires access to system resources other than those contained by default in a User role.

* An application will, by default, have full grsecurity access to its home account and flash directory.
* It will have access to system libraries.
* It will have access to some standard devices such as /dev/null, /dev/urandom, ttys, etc.
* The grsec file need only request access to resources that are not allowed by default. These will be checked against the user policy as described previously.
* Capabilities may also be requested in the grsec file.

Example: Format of the install package grsec file.



```cpp
[myapp]
    /dev/ttyS0  rw
    +CAP_NET_RAW
[testapp]
    /dev/mag    r
```

The objects shown here (/dev/mag and /dev/ttyS0) are for demonstration purposes only - these are normally available by default.


#### Secure Installer Policy Files

The system contains some additional policy files that are used by the secure installer in the creation of the system grsecurity policy file, /etc/grsec/ policy. These policy files are also stored in /etc/grsec on the device and are listed in the following table. These are not standard grsecurity policy files, but are simply files used by the V/OS secure installer to dynamically generate the standard system grsecurity policy file.


| File   | Description    |
|  -------- | -------- |
| root_policy   | 

* This file is used to initialise the system grsec policy i.e. the contents of this file are used verbatim in /etc/grsec/policy.  
* It contains the default and admin roles (which are fully restricted), as well as the initial root user role.  
* The remainder of the root user role comes from the grsec files of OS install packages, which may add to the root user role as required.  

 |
| root_dev_policy   | 

* This replaces the root_policy file on development units.  
* In development it can be desirable to work with grsecurity enabled while also allowing login sessions and other extended system access that would not be available on a deployment unit.  

 |
| sysapp_def_policy   | 

* This is a list of objects and object modes, plus Capabilities, which will be added to the default subject for any system user added to the system. So this is what a System user can access by default.  
* Some pseudonyms are used in this file e.g. <HOME> refers to the user's home account.  

 |
| sysapp_policy   | 

* This contains some additions to the grsecurity policy for system applications. Objects/Capabilities listed here are not given by default but can be available if requested.  
* Objects in this file may be requested by a user process via the package grsec file.  
* As an example, if this file contained '/lib rx' then a system user 'grsec' file may contain '/lib rx' or '/lib r' but not '/lib rw'. (This is just for demonstration purposes, in reality /lib is in the default policy and so need not be requested via the 'grsec' file).  
* If a package 'grsec' file requests an object or object mode that is not listed in this or the default policy file, the package will be rejected. (But there is no need to request objects in the default policy file, since these are already available).  

 |
| sysapp_sqa_policy   | 

* This contains some sysapp_policy file additions for devices in manufacture mode.  

 |
| sysapp_sqa_def_policy   | 

* This contains some sysapp_def_policy file additions for devices in manufacture mode.  

 |
| usrapp_policy   | 

* Same as sysapp_policy but for Application user roles i.e. usr1, usr2, ... usr16.  

 |
| usrapp_def_policy   | 

* Same as sysapp_def_policy but for Application user roles.  

 |



#### Changing the User Role default subject

In the future it is intended that an application sponsor be allowed to change the default subject in the User Roles should he wish to completely control the grsecurity access of all his user applications.

For example, consider the case where the default subject in a User Role is completely restricted. In that case, using the scheme outlined above, every User subject (application) would need an entry in the package 'grsec' file and would need to list every single object and capability it requires.

This would be quite painful for application developers, but would truly restrict applications to just those resources it actually needs.

Most likely a new app sponsor signed install package type will need to be added to facilitate this.


#### File Capabilities

On V/OS the intention from the beginning has been to avoid, as much as is possible, using root processes to provide API's to normal user applications for things that require root privileges e.g. setting the time. Instead kernel capabilities are used, so if, for example, a user process is to be allowed set the system time it can be given the capability CAP_SYS_TIME.

To give a user process a particular root capability, file capabilities must be used. File capabilities are implemented using the file system extended attributes.

On development units, when logged in as root, a file capability may be added using the 'setcap' command, while 'getcap' can be used to view file capabilities (See 'man setcap' for more information). 

```cpp
# setcap cap_sys_time,cap_sys_tty_config = eip /home/usr1/testapp
# getcap /home/usr1/testapp
/home/usr1/testapp = cap_sys_time,cap_sys_tty_config+eip
```

 On V/OS, some capabilities are given to all applications by default. Currently these are as follows.

* CAP_SYS_TIME: Allows setting the system clock and real-time clock.
* CAP_SYS_TTY_CONFIG: Allows configuration of tty devices. This is required by the fancypants GUI library.

Other capabilities must be requested by the application and approved by the secure installer. Rather than introducing a separate control file for file capabilities, file capabilities are assigned based on the install package 'grsec' file.

* If the grsec file requests a capability, which is allowed by the user policy file, then in addition to adding that capability to the system grsecurity policy file, the secure installer will add the corresponding file capability to the executable (in the dramfs) before it starts it.
* Beware that the secure installer can only assign file capabilities to applications that it knows about i.e. those that are explicitly mentioned in an install package 'start' file or 'grsec' file. Of course many application packages do not require a 'grsec' file but most will have a 'start' file that lists the applications that should be started automatically.
* So there is an issue then in cases where an application starts some executables itself (for example using system(), execve(), etc.). If a root capability is required in this case, even one of the default capabilities, there needs to be some way to indicate this to the secure installer. The install package 'grsec' file is the suggested method of doing this - simply add an entry for the executable to the package 'grsec' file. If it is one of the default capabilities that is required then the entry in the 'grsec' file need not list any objects, and can be as follows for example. 

```cpp
[myapp]
```




* LD_LIBRARY_PATH is bypassed for processes that run with escalated privileges, whether that be setuid or capabilities, because someone could overlay some of the functions that the executable calls with malicious code.
* As a result of this we cannot depend on LD_LIBRARY_PATH in V/OS, bearing in mind that all applications started by the secure installer are given some file capabilities by default.
* Alternative arrangements have been made to allow a user's shared libraries be found (i.e. the 'lib' dir in the user home directory - see section [Shared Libraries]).


### Legacy Application

The following is supported to aid the porting of legacy applications to V/OS.

* A package of type 'user', may contain a "config.usr1" file in the CONTROL directory, which will be processed at package install time. The legacy API putEnvFile will be called for each entry in the config file as is the case on Mx. Note the following names are allowed for the config file.
    * 'config' - This is the preferred name as the package user is indicated using the 'User' field in the control file and so no suffix is needed.
    * 'config.<username> will also be accepted e.g. config.usr1 for usr1, config.usr2 for usr2, etc.
    * 'config.usr1' will in fact be accepted regardless of what the package user is. Obviously though if the package user is usr2, config.usr1 will be processed as if it was config.usr2, etc. So the config file does not determine what user a package is for - only the 'User' field in the package control file can do that.
* If no 'start' file is found the installer will check for a GO variable in the package 'config' file (as described above) in the CONTROL directory. Only one application per package may be started in this manner however. Note also that the GO variable is processed just once at install time. Editing the GO variable, for example in config.usr1, after a package is installed will have no effect.
* If no "env" file is found the installer will look for a ".profile" file in the package CONTROL directory. All exported environment variables found in .profile will be added to the environment for each app started for that package (same as if they were in the "global" section of the "env" file).
* The HOME environment variable will be set to the real home account.
* Note again that LD_LIBRARY_PATH cannot reliably be used. A user may place his shared libraries in the home account or in a 'lib' directory in the home account.


### Install Package Types

The following describes the package types in the 'fs' category, which is the default category. If specified the Category field should be set to 'fs' for the package types listed in the following sub-sections. The 'Package' field and 'Version' field must be present in all packages.


See [Appendix A: Creating Install Packages/Bundles] for a practical example of how to create install packages.


#### 'OS' Package



* Must be signed by the OS signer.
* The 'Type' field in the package control file is 'os'. Note though that this is the default package type when the User is also not specified.
* OS packages are extracted relative to '/'. In effect, these packages form the DRAM fs.
* The installer does not start processes automatically for OS packages like it does for user packages. Instead processes should be started as they would be in a normal Linux start-up e.g. from an rc.d script.

Example: 'os' package

* This package tar-ball installs files to /usr/local/lib and /usr/local/sbin.
* The package 'Type' defaults to 'os' and therefore the 'User' defaults to root. So only two fields are necessary in the control file.



```
                 Sample 'os' Package
|-- CONTROL
|  `-- control (see below)
`-- usr
   `-- local
      |-- lib
      |  |-- libvfirkl.so -> libvfirkl.so.1
      |  |-- libvfirkl.so.1 -> libvfirkl.so.1.1.3
      |  `-- libvfirkl.so.1.1.3
      `-- sbin
         `-- rklload
```



```
        Sample 'os' Package Control File
 Package: vfirkl
 Version: 1.0.2
```


#### Osflash' Package



* Must be signed by the OS signer.
* The 'Type' field in the package control file must be present should be set to 'osflash'.
* These packages are extracted relative to '/mnt/flash'. Once extracted the package file itself is removed from the system.

Example: 'osflash' package

* This package tar-ball installs files to /mnt/flash/system/images/ctlsl2.
* The package 'Type' field is required in this case but 'User' defaults to root.



```
             Sample 'osflash' Package
|-- CONTROL
|  `-- control (see below)
`-- system
   `-- images
      `-- ctlsl2
         |-- 320x240
         |  |-- blueled.png
         |  |-- greenled.png
         |  |-- redled.png
         |  `-- yellowled.png
         |-- 480x272
         |  |-- blueled.png
         |  |-- greenled.png
         |  |-- redled.png
         |  `-- yellowled.png
         |-- 800x480
         |  |-- blueled.png
         |  |-- CTLSV.png
         |  |-- greenled.png
         |  |-- redled.png
         |  `-- yellowled.png
         `-- Decker.ttf
```



```
       Sample 'osflash' Package Control File
 Package: ctls
 Version: 1.0.3
 Type: osflash
```


#### 'Lowlayers' Package



* Must be signed by the OS signer.
* The 'Type' field in the package control file must be present and should be set to 'lowlayers'.
* The contents of this package are extracted to a temporary location to be processed. Once processing is complete the package is deleted.
* Note that lowlayer packages are not listed in the installed packages list. The kernel, uboot, sbi, etc. report their own version number and these will be present on the system even when there are no install packages loaded. So, while a low layer package may be downloaded as part of an os bundle that contains other packages, it is not counted as a member of that bundle from a software management point of view. Similarly, if a bundle contains just one or more 'lowlayer' packages, there will be no record of that bundle on the system once the packages are processed.
* Failure to install any lowlayer pkg sets a lowlayer error bit. Reboots do not clear this bit. The only way to clear this bit is successful re-installation of lowlayer packages. This bit when set prevents user apps from starting.

The 'lowlayers' package may contain any of the following.


| Files   | Description    |
|  -------- | -------- |
| 'uuImage'

 'uuImage.p7s'   | 

* These will be used to update the Linux kernel and signature.  

 |
| 'uuImage.patch'

 'uuImage.p7s'   | 

* The file 'uuImage.patch' will first be used to patch the existing installed uuImage, thereby creating a new uuImage.  
* The file 'uuImage.p7s' is the signature of the new uuImage.  
* Obviously the signature will be verified before the new uuImage is installed to verify that the patch applied successfully.  
* Either a full uuImage update or a patch can be contained in any 'lowlayers' package, but not both.  

 |
| 'ext-initramfs.img'

 'ext-initramfs.img.p7s'   | 

* These will be used to update the initramfs and signature.  

 |
| 'ext-initramfs.img.patch'

 'ext-initramfs.img.p7s'   | 

* The file 'ext-initramfs.img.patch' will be used to patch the existing installed ext-initramfs.img, thereby creating a new ext-initramfs.img.  
* The file 'ext-initramfs.img.p7s' is the signature of the new ext-initramfs.img.  
* The signature will be verified before the new ext-initramfs.img is installed to verify that the patch applied successfully.  
* Either a full ext-initramfs.img update or a patch can be contained in any 'lowlayers' package, but not both.  

 |
| *.cib   | 

* Used to update the CIB. (V/OS only)  

 |
| cib.   | 

* Also used to update the CIB (alternate name for CIB file). (V/OS only)  

 |
| sbi.*   | 

* Used to update the SBI. (V/OS only)  

 |
| ssbi.*   | 

* Used to update SSBI. (V/OS only)  

 |
| vault.*   | 

* Used to update the Vault. (V/OS only)  

 |
| u-boot.*   | 

* Used to update u-boot.  

 |
| *.dtb   | 

* Device tree binary. (V/OS2 only)  

 |
| MLO   | 

* Initial boot code. (V/OS2 only)  

 |
| bsi*   | 

* Board support information. (V/OS2 only)  

 |
| Secure-applets like cryptoapp.bin*, nvusr.bin*, aesdesapp.bin*   | 

* Small secure binaries. (V/OS2 only)  

 |
| Pedguard.signed.img   | 

* Pedguard img that authenticates the signed binaries against the Verishield tree (V/OS2 only)  

 |



#### 'User' Package



* The is the default package type when the User is specified and is not 'root'.
* The 'Type' field in the package control file should be set to 'user' if it is present.
* User packages are extracted to the User home account in the DRAM fs on V/OS and securefs on V/OS2. Therefore these packages should contain the executable and data files that are required to run user programs.
* The files in the package may be organised in any directory structure required.
* The 'User' field in the control file determines what user the package will be installed for. This in turn determines the location and ownership of the files when they are extracted to DRAM. This may be set to 'usr1', 'usr2', ..., 'usr16' for application signers and 'sys1', 'sys2', ..., 'sys16' for system application signers. Note that 'usr1' is the default user when the package type is set to 'user'.
* The 'Group' field determines the group ownership of the files. This will default to the user private group associated with the package user i.e. group 'usr1' for user 'usr1', etc. It may also be set to 'users' or 'system' to share files with other users of the same application group (i.e. application users or system application users respectively), or 'share' to share the files in the package with all users. Note that an application must use multiple packages to install files that require different group ownership.
* User library files may also be included here, but should be placed in a lib directory in the home account in order to be picked up automatically.
* The installer will automatically start any processes listed in the start file in the CONTROL directory.
* Note that from release 30050101, the user home directory in RFS is no longer writable (the Grsecurity policy does not allow it). Non-volatile storage remains in flash as always but /tmp should be used for creating temporary files in DRAM. It should not be possible for an application to download something unsigned and execute it. Flash and /tmp are mounted 'noexec' so these may be writable. The home dir must be executable however, and so cannot be writable.

Example: 'user' package

* This package tar-ball will install a file 'testapp' to the user home account, which in this case is /home/usr1, and a directory 'lib', which contains a library and some symlinks.
* The 'User' defaults to 'usr1'. The Group defaults to the user private group, also 'usr1'.



```
              Sample 'user' Package
|-- CONTROL
|  |-- control
|  |-- env
|  `-- start
|-- lib
|  |-- libtest.so -> libtest.so.1
|  |-- libtest.so.1 -> libtest.so.1.0.1
|  `-- libtest.so.1.0.1
`-- testapp
```



```
       Sample 'user' Package 'control' File
Package: testapp
Version: 1.0.1
Type: user
```



```
          Sample 'user' Package 'start' File
testapp arg1 "This is arg2"
```



```
           Sample 'user' Package 'env' File
[global]
       PLATFORM=Mx9
[testapp]
       NAME=testapp
       VERSION=1.0.1
```


#### 'Userflash' Package



* This is an app signer package that is intended to be used to download large data files to flash.
* Executable files cannot be loaded in this way.
* The 'Type' field in the package control file must be set to 'userflash'.
* 'User' and 'Group' fields are as per 'user' packages and determine the ownership of the files once extracted.
* This package will only be extracted to flash one time, after which it is deleted.
* The 'flash' symlink in the user's home account should be used to reference the directory in flash where this package is extracted to.

Example: 'userflash' package

* This package tar-ball will install a theme to the user's flash directory, which in this case is the symlink '/home/usr1/flash' (which points to '/home/ usr1/userdata/usr1').
* The 'User' defaults to 'usr1'. The Group defaults to the user private group, also 'usr1'.



```
            Sample 'userflash' Package
|-- CONTROL
|  `-- control
`-- themes
   `-- themes
      |-- Contemporary
      |  |-- background.png
      |  |-- banner_bg.png
      |  |-- button_100d_normal.png
      |  |-- button_100d_pressed.png
      |  |-- button1.png
      |  |-- button1_pressed.png
      |  |-- button_ok_normal.png
      |  |-- button_ok_pressed.png
      |  |-- customer_logo.png
      |  |-- fonts
      |  |  |-- Vera_Bold.ttf
      |  |  |-- Vera_Italic.ttf
      |  |  `-- Vera.ttf
      |  |-- keypad_numeric_normal.png
      |  |-- keypad_numeric_pressed.png
      |  |-- keypad_textbox_bg.png
      |  |-- metrics.fpt
      |  |-- Pen.png
      |  |-- preview.png
      |  |-- Thumbs.db
      |  |-- verifone_logo.png
      |  `-- wip04-131633cd-2.wav
      `-- theme.txt
```



```
      Sample 'userflash' Package 'control' File
Package: testappflash
Version: 1.0.1
Type: userflash
```


#### 'Userflashshare' Package



* This is an app signer package that is intended to be used to download large data files to flash which could be shared with users in the 'Group'.
* Executable files cannot be loaded in this way.
* The 'Type' field in the package control file must be set to 'userflashshare'.
* 'User' and 'Group' fields are as per 'user' packages and determine the ownership of the files once extracted.
* This package will only be extracted to flash one time, after which it is deleted.
* The files will be placed under /mnt/flash/userdata/share with the permissions as in the package control file. Note that all the files installed by the userflashshare package will be removed if the user who installed it is removed. Care should be taken as it is possible that another user could be using these files. Also, it is possible that another userflashshare package can overwrite the exisiting contents from the previous userflashshare package install.

Example: 'userflashshare' package

* This package tar-ball will install a theme to the user share flash directory, /mnt/flash/userdata/share
* The 'User' set to 'usr1' and the Group set to 'users'.



```
            Sample 'userflashshare' Package
|-- CONTROL
|  `-- control
`-- themes
   `-- themes
      |-- Contemporary
      |  |-- background.png
      |  |-- banner_bg.png
      |  |-- button_100d_normal.png
      |  |-- button_100d_pressed.png
      |  |-- button1.png
      |  |-- button1_pressed.png
      |  |-- button_ok_normal.png
      |  |-- button_ok_pressed.png
      |  |-- customer_logo.png
      |  |-- fonts
      |  |  |-- Vera_Bold.ttf
      |  |  |-- Vera_Italic.ttf
      |  |  `-- Vera.ttf
      |  |-- keypad_numeric_normal.png
      |  |-- keypad_numeric_pressed.png
      |  |-- keypad_textbox_bg.png
      |  |-- metrics.fpt
      |  |-- Pen.png
      |  |-- preview.png
      |  |-- Thumbs.db
      |  |-- verifone_logo.png
      |  `-- wip04-131633cd-2.wav
      `-- theme.txt
```



```
      Sample 'userflashshare' Package 'control' File
Package: testappflash
Version: 1.0.1
Type: userflashshare
Group: users
```


#### 'Userfont' Package



* This is an app signer package that installs a system-wide font to flash (supported from release_20121015).
* The 'Type' field in the package control file must be set to 'userfont'.
* 'User' and 'Group' fields are as per 'user' packages and determine the ownership of the files once extracted. The default Group for 'userfont' packages however is the 'share' group.
* This package is extracted to /mnt/flash/system/fonts and will only be extracted to flash one time, after which it is deleted.

Example: 'userfont' package 

```
             Sample 'userfont' Package
|-- CONTROL
|  `-- control
|-- Vera_Bold.ttf
|-- Vera_Italic.ttf
`-- Vera.ttf
```



```
     Sample 'userfont' Package 'control' File
Package: verafont
Version: 1.0.1
Type: userfont
Group: share
```


#### 'Service' Package



* When a user wishes to install a service library, the library must be accessible by both the user and the svcmgr process, which typically will run as a system user. The sycmgr will look in a single location for all services.
* The Service package will therefore install its contents to the directory '/usr/local/lib/svcmgr'. Note that like 'user' packages these packages are authenticated and extracted to DRAM on every boot-up on V/OS. Whereas on V/OS2 systems, they are authenticated and extracted into securefs only once after which the packages are discarded
* The 'Type' field in the package control file must be set to 'service'.
* 'User' and 'Group' fields are as per 'user' packages and determine the ownership of the files once extracted. Note however that the default group for service packages is 'share'.

Example: 'service' package

* This package tar-ball will install some libs to '/usr/local/lib/svcmgr'.
* The 'User' specified is 'sys2'. The Group defaults to 'share'.



```
             Sample 'service' Package
|-- CONTROL
|  `-- control
|-- libsvc_ecrcom.so
|-- libsvc_ethernet.so
|-- libsvc_event.so
|-- libsvc_kbd.so
|-- libsvc_led.so
|-- libsvc_msr.so
|-- libsvc_netloader.so
|-- libsvc_networkapps.so
|-- libsvc_powermngt.so
|-- libsvc_rfcr.so
|-- libsvc_security.so
|-- libsvc_serialcom.so
|-- libsvc_sigcap.so
|-- libsvc_sysinfo.so
|-- libsvc_utility.so
`-- libsvc_vp2.so
```



```
     Sample 'service' Package 'control' File
Package: vfiservices
Version: 1.0.5
User: sys2
Type: service
```


#### 'Config' Package



* This is an app signer package that is intended to be used to download global configuration files e.g. a configuration file that must be accessed by many users..
* The 'Type' field in the package control file must be set to 'config'.
* 'User' and 'Group' fields are as per 'user' packages and determine the ownership of the files once extracted.
* The [Config](class_config.md) package will be extracted to the directory '/etc/config', and like 'user' packages these are authenticated and extracted to DRAM on every boot-up on V/OS systems. On V/OS2 systems, they are authenticated and extracted into securefs only once after which the packages are discarded.

Example: 'config' Package 

```
             Sample 'config' Package
|-- CONTROL
|  `-- control
|-- lighttpd
|  `-- lighttpd.conf
`-- php
   `-- php.ini
```



```
      Sample 'config' Package 'control' File
Package: wdesvcconfs
Version: 1.0.0
User: sys2
Type: config
Group: share
```


#### 'Flashconfig' Package



* This is similar to the 'config' package type but is a flash package and so is authenticated and the contents extracted to flash once only.
* The 'Type' field in the package control file must be set to 'flashconfig'.
* 'User' and 'Group' fields are as per 'user' packages and determine the ownership of the files once extracted.
* The contents will be extracted to the directory '/mnt/flash/etc/config', and the package is then removed.
* Use this for config files that you wish to download but then change (i.e. write to) afterwards.


#### 'VSS' Package



* This package is used to download and install VSS scripts. Note that VSS scripts are authenticated using filetypes 'A', 'B', 'C', ..., 'P' for users usr1, usr2, usr3, ..., usr16 respectively and 'S1', 'S2', ... 'S16', for sys1, sys2, ..., sys16 respectively. The signer card must have this filetype enabled.
* The 'Type' field in the package control file must be set to 'vss'.
* 'vss' packages are extracted to /etc/vss/<username> where <username> is determined by the package user ('usr1', 'usr2', etc. and 'sys1', 'sys2', etc.).
* VSS scripts are a special case because they cannot be modified by the User that installs them, but they must be readable by that user. Therefore they are owned by root with the group ownership set to the user private group of the user that installs them. Also, 'usrX' scripts can be shared with sys10 user. In that case, the group ownership should be set to uXsys10 via package control file.
* 'u1sys10' package group allows sharing 'usr1' scripts with sys10, 'u2sys10' package group allows sharing 'usr2' scripts with sys10 and so on.
* Note that shared scripts allow sys10 to execute usrX scripts but not vice-versa
* The script ownership can be overridden to shared or back to private by installing the same script with group defined in control file (to share) or only user defined in control file (to disable sharing). To keep the keys, RETAIN_BLK must be used in the script itself.
* These packages are also authenticated and extracted to DRAM on every boot-up on V/OS systems. On V/OS2 systems, they are authenticated and extracted into securefs only once after which the packages are discarded.

Example: 'vss' Package 

```
              Sample 'vss' Package
|-- CONTROL
|  `-- control
`-- ldckkeys.vso
```



```
        Sample private 'vss' Package 'control' File
Package: ldckkeys
Version: 1.0.0
Type: vss
User: usr1
```



```
        Sample shared 'vss' Package 'control' File
Package: ldckkeys
Version: 1.0.0
Type: vss
User: usr1
Group: u1sys10
```


#### 'usrapi' Package



* This package is used to share dynamic libraries among all users.
* Data from this package type will be stored in /usr/local/lib/usrapi directory, which is assign to 'share' group.
* Package signed as 'usrX'/'sysX' will be available for Read/Execute for all existing 'usrX'/'sysX' users.
* 'root' user will fail to Read or Execute this files.
* Files in all created subdirectories won't be available for Read/Execute.


#### 'Unsigned' Packages

The 'unsigned' package type is very much a special case in that the secure installer merely extracts these to the user's flash directory. They are not signed and so cannot be authenticated. They simply contain user data that is extracted by the installer purely to allow these packages be downloaded in a download file along with the normal signed installer packages listed above.

* These packages are not signed and so cannot be inside a bundle (which is signed). They therefore must be inside the download file (which may also contain signed bundles).
* They **must** be **compressed** tar-balls. Note again that a normal install tar-ball is not compressed (it is the bundle that is compressed).
* The compressed tar-ball must contain a 'CONTROL' directory with 'control' file therein. The 'Name', 'Version', and 'Type' fields are required as per normal.
* The 'Type' field must be set to 'unsigned'.
* The 'User' and 'Group' fields are as per 'user' packages and determine the ownership of the files once extracted. These packages **can only be installed by the user they are targeted for**. What this means is that they must be downloaded by the user application. **This means that you cannot install one of these packages via sysmode.**

* The secure installer does not keep a record of these packages in the installed package list.
* Unsigned packages are extracted to a dir called 'unsigned' in the user's flash dir e.g. for usr1 they will be extracted to '/home/usr1/flash/unsigned'. Note that older versions of the SI extracted these packages to the top level of the user's flash dir ('/home/usr1/flash' for usr1).

Example: 'unsigned' Package 

```
           Sample 'unsigned' Package
|-- CONTROL
|  `-- control
`-- themes
   |-- Contemporary
   |  |-- spectrum_bottom_off.png
   |  `-- spectrum_bottom.png
   `-- theme.txt
```



```
       Sample 'unsigned' Package 'control' File
Package: unsigned
Version: 1.0.0
User: usr1
Type: unsigned
```


### Install Package Versions

This section describes how the 'Version' string in the install package 'control' file is handled by the Secure Installer.


#### Comparing Package Versions

The Secure Installer will not normally allow a lower version of an Install Package replace a bigger (i.e. more recent) version e.g. if version 1.0.1 is currently installed, the Secure Installer will refuse to install version 1.0.0.

To determine if a particular package is lower or higher than the one currently installed, the Install Package version strings must be compared. Note though that a standard strcmp() type comparison is **not** used in this case; it is desirable, for example, that version 1.0.10 be seen as a higher version than 1.0.9.

Two Install Package version strings are therefore compared as follows.

* The two version strings are split into sub-strings where each sub-string consists of either consecutive numeric characters (i.e. ASCII '0', '1', ..., '9') or consecutive non-numerical characters (i.e. a change from numerical to non- numeric or vice versa delimits each sub-string).
* Each sub-string is then compared with the corresponding sub-string in the version being compared as follows (i.e. the first sub-string in the first version is compared with the first sub-string in the second version and so on).
    * Two numeric sub-strings are compared as decimal numbers i.e. the strings "9" and "10" are decimal nine and ten. Note that this implies that the "9", "09", "009", etc. are all considered equal.
    * Two non-numeric strings are compared using strcmp().
    * A non-numeric sub-string and a numeric sub-string are also compared using strcmp().

Clearly, some degree of consistency in the package version string is assumed e.g. if the first version of a package contained the version string "v1.0.1", the next version should not be simply "1.0.2", but "v1.0.2".

Examples.

* 1.1.1 is equal to 1.01.1 (or 01.1.01).
* Similarly 1-1-1 is equal to 1-1-01. (There is no special significance to the dot character, it is just another non-numeric sub-string which is compared to the equivalent sub-string in the version being compared. Therefore 1.1.0 is higher version than 1-1-0, since the first dot and first dash will be compared).
* 1.1.1 is bigger than 1.1.0
* 1.1.1b is bigger than 1.1.1a
* 1.1.1.test2 is bigger than 1.1.1.test1. Also, 1.1.1.test02 is the same as 1.1.1.test2. (Note that this is for demonstration purposes only - it's probably best not to use version stings like these!).


#### Recommended Version Format

As noted above, some degree of consistency in the package version strings is required for the Secure Installer version checking to work correctly. In addition to that we must also consider the needs of TMS systems, which have to remotely manage large quantities of terminals in the field.

The following is the recommended format of the package version string:



```
    major.minor.maintenance[.build]
```

'major' is the major version number.

'minor' is the minor version number.

'maintenance' is the maintenance number.

'build' is the optional build number.



* All fields (major, minor, maintenance, build) are numeric.
* The build field is optional.
* The dot character is used to separate the individual fields.

Examples:

* 1.1.0
* 1.1.1.0001


#### Patch Packages



* The 'patch' install package category is used to patch or update already installed packages. Note that the end result of successfully installing a patch package is exactly the same as if a complete new version of an existing package had been downloaded.
* The 'Category' field in the package control file must be set to 'patch'.
* The 'Name' and 'Type' fields of the patch package must exactly match the name and type of the **installed****package** that is being updated.
* The 'Version' field will indicate the new version of the package after the package is applied.
* The 'SrcVersion' field will indicate the version of the package that is being updated. This must exactly match the version of the package installed on the system; otherwise the patch will not be applied.
* For packages such as 'os' and 'user', which are extracted to DRAM on every boot, a binary patching mechanism is used. It is the actual install package in flash that is patched.
* For flash type packages ('osflash', 'userflash', etc.), the downloaded install package is not stored on the system (the package is extracted to flash and is then removed) and so binary patching is not possible. A flash package type may be patched by downloading just those files in the package that have changed.


#### Binary Patching on V/OS



* Package types 'os', 'user', 'service', 'config', and 'vss', may be patched using this method.
* This involves downloading a special package with the 'Category' field set to 'patch', which contains a binary patch for an existing package already installed on the system.
* This 'patch' package must contain just the following two files at the top level (plus the control file in the CONTROL dir).
    * A patch file generated using bsdiff.
    * The updated signature for the newly updated package. (Note that this is not simply the p7s signature of the patch file; it is the p7s signature of the new package tar-ball).
* The 'patch' package tar-ball itself must be signed (as all packages are).

Example:
    * Package myapp-1.0.0.tar is installed, with signature myapp-1.0.0.tar.p7s.
    * An update to this package is available - myapp-1.0.1.tar with signature myapp-1.0.1.tar.p7s
    * Generate the patch file as follows. 

```cpp
$ bsdiff myapp-1.0.0.tar myapp-1.0.1.tar myapp-1.0.1.patch
```

    * The patch package tar file contains the following then. 

```
               Sample 'patch' Package
|--- CONTROL
|   `--- control
|--- myapp-1.0.1.patch
`--- myapp-1.0.1.tar.p7s
```



```
       Sample 'patch' Package 'control' File
Package: myapp
Version: 1.0.1
SrcVersion: 1.0.0
Type: user
Category: patch
```

 So the patch package tar file, called myapp-1.0.1-patch.tar for example, can then be generated using tar. It will contain the CONTROL dir, myapp- 1.0.1.patch, and myapp-1.0.1.tar.p7s as shown above.
    * Now the patch package tar file, myapp-1.0.1-patch.tar, must then be signed to create myapp-1.0.1-patch.tar.p7s. These two files comprise the final 'patch' package.
    * Finally, the 'patch' package files may be placed in a bundle to be downloaded. Note that the bundle will also most likely be a 'patch' bundle. See section [Bundle Versions] for more information on 'patch' bundles.
* It's very important to note that when generating a patch file with bsdiff, the **exact** package file that is installed on the target should be used, rather than one that has been regenerated, which may not be exactly what was released in the first place (e.g. if the file uid/gid or timestamp information is different when the package is rebuilt).


#### Flash Package Patching on V/OS

Flash package types such as 'osflash', 'userflash', 'userflashshare' and 'flashconfig', cannot be patched using the binary patching method. These packages are extracted to flash so it does not make sense to have both the original package and the package contents stored permanently on the system. The original package is therefore removed once extracted and so cannot be patched using the method described above.

* For flash packages a 'patch' package simply allows you to download just the files that have changed in a package, rather than the complete updated package.
* There is also an extra optional control file called 'flashremove' that can be used to remove a file from a flash package. The aim here is that the contents of flash should be the same regardless of whether the complete updated package or a patch to an existing installed version was downloaded. So it may be necessary to remove a file that was downloaded in a previous version.

Example: A patch package for the sample 'userflash' package in ['Userflash' Package]

```
       Sample 'userflash' Patch Package
|-- CONTROL
|   |-- control
|   `-- flashremove
`-- themes
    `-- themes
        `-- Contemporary
            `-- fonts
                |-- Vera_Bold.ttf
                |-- Vera_Italic.ttf
                `-- Vera.ttf
```



```
    Sample 'userflash' patch Package 'control' File
Package: testappflash
Version: 1.0.2
SrcVersion: 1.0.1
Type: userflash
Category: patch
```



```
    Sample 'userflash' Patch Package 'flashremove' File
themes/themes/Contemporary/verifone_logo.png
```



* This updates the 3 files in the fonts dir for version 1.0.2 of the 'testappflash' package, while also removing the verifone_logo.png file completely.
* Note that the 'flashremove' must contain an entry for every individual file you want removed - it is not enough to just list a directory name to have the contents of that directory completely removed. Other pkgs could place files in the same directory.
* Furthermore if you do want the directory itself removed (assuming the content has also been removed) you must include an entry for the directory itself.
* Finally note that the 'flashremove' file is optional and need only be present in the CONTROL dir of a patch package if files need to be removed from the package being updated.


#### Binary Patching on V/OS2

On V/OS2 systems since the RFS is on flash which is a persistent memory, package tar balls are discarded after they are extracted on the flash file-system. Therefore the binary differentials are created between two files instead of two package tar-balls.



* V/OS2 patch package format looks similar to a full package except that the content of the patch package may have the following files
    * <filename>.patch – A .patch file has to be present for every single file inside that package that needs to be updated. This .patch file is the output of the bsdiff operation between the old file and the new file.
    * <filename>.sha256 – The SHA256 sum on the new file has to be present for every single <filename>.patch file. Secure installer uses this information to validate the result of the patching operation.
    * New file – The update package may contain a new file. As this file is a full file and has nothing to be validated against, there is no need to include a .sha256 file for this file.
* There is also an extra optional control file called 'flashremove' that can be used to remove a file from a V/OS2 package. The aim here is that the contents of flash should be the same regardless of whether the complete updated package or a patch to an existing installed version was downloaded. So it may be necessary to remove a file that was downloaded in a previous version.

The binary patch package must include all the control files from the upgrade package like grsec, env, start and control. Of course the control file has to be updated with the 'SrcVersion' and 'Category' information. Also, the CONTROL dir may contain a 'flashremove' file if some files need to be removed from the package.


Example: A patch package for the sample ‘OS’ package 

```
       Sample 'OS' Patch Package
|-- CONTROL
|   |-- control
|   |-- flashremove
|   `-- grsec
|-- etc
|   |-- root_policy.patch
|   `-- root_policy.sha256
`-- usr
    |-- local
        |-- bin
        |   `-- newfile
        `-- sbin
            |-- secins.patch
            `-- secins.sha256
```



```
    Sample 'OS' patch Package 'control' File
Package: secins
Version: 1.0.2
SrcVersion: 1.0.1
Type: os
Category: patch
```



```
    Sample 'OS' Patch Package 'flashremove' File
usr/local/bin/sirunapp
```



* This updates the 2 files 'root_policy' and 'secins' on the flash file-system. Completely removes the file sirunapp from the file-system and adds a new file in /usr/local/bin dir.
* Note that the 'flashremove' must contain an entry for every individual file you want removed - it is not enough to just list a directory name to have the contents of that directory completely removed. Other pkgs could place files in the same directory.
* Furthermore if you do want the directory itself removed (assuming the content has also been removed) you must include an entry for the directory itself.
* Finally note that the 'flashremove' file is optional and need only be present in the CONTROL dir of a patch package if files need to be removed from the package being updated.


#### Binary Patching Shared Libraries on V/OS2

In general, when binary patching a file on V/OS2, it is expected that the file being patched is not renamed during the patching process. An exception to this can occur when binary patching a shared library, when version numbers are being used in the lib filename e.g. libfoo.so.1.0.0 is updated to libfoo.so.1.0.1. In cases like this the following applies:



* As above, the patch will be generated using bsdiff between the old and new versions of the library i.e. libfoo.so.1.0.0 and libfoo.so.1.0.1.
* The resulting patch file will be named after the new library file i.e. libfoo.so.1.0.1.patch.
* The sha256 file will also be named after the new file i.e. libfoo.so.1.0.1.sha256
* The library being patched must remain in the same location (i.e. dir) as before e.g. if old file was ./lib/libfoo.so.1.0.0 then new file must be ./lib/libfoo.so.1.0.1
* Only the version numbers of the library may change. So in our example here, the library must always be named libfoo.so[.*], but this is already the case for shared libraries on Linux.
* It is possible however to update a library that does not already contain version numbers to one that does e.g. libfoo.so could be updated to libfoo.so.1.1.8.

Example: A user patch package containing a shared library patch.

The library being patched here need not have the same filename as that in the patch filename e.g. it could be libutls.so.1.0.0 or even libutls.so. The target library will be searched for and once the patch applies clearly and the resulting SHA256 matches the expected SHA256, it is clear the intended target has been found.



```
├── CONTROL
│   ├── control
│   └── start
├── lib
│   ├── libutls.so.1.0.1.patch
│   └── libutls.so.1.0.1.sha256
├── testappln.patch
└── testappln.sha256```

The 'control' file for the above package would be as follows:



```
Package: usr1test
Version: 1.0.1
SrcVersion: 1.0.0
User: usr1
Category: patch
```


#### Sparse Packages (V/OS2 only)

Sparse packages are the new package types supported in V/OS2 secure installer. Sparse packages are most useful in the cases where a patch or hotfix needs to be applied over a range of package versions. A sparse package size is smaller compared to its full package as sparse packages only contain a sparse set of files from its full package. They contain only the files that have changed and need to be updated on the file system. As long as the 'SrcVersion' in the sparse package is greater than or equal to package version on the terminal, the files in the sparse package replace the files on the file-system.



* The 'sparse' install package category is used to update already installed packages. Note that the end result of successfully installing a sparse package is exactly the same as if a complete new version of an existing package had been downloaded.
* The 'Category' field in the package and bundle control file must be set to 'sparse'.
* The 'Name' and 'Type' fields of the sparse package must exactly match the name and type of the **installed** package that is being updated.
* The 'Version' field will indicate the new version of the package after the package is applied.
* The 'SrcVersion' field will indicate the version of the package that is being updated. As sparse packages can be applied over a range of versions, the 'SrcVersion' in the package must be equal to or greater than the version of the package already installed on the system; otherwise the sparse update will fail.
* There is also an extra optional control file called 'flashremove' that can be used to remove a file from a V/OS2 package. The aim here is that the contents of flash should be the same regardless of whether the complete updated package or a patch to an existing installed version was downloaded. So it may be necessary to remove a file that was downloaded in a previous version.
* Any package type may be updated using sparse packages.
* Sparse packages must be contained in a sparse bundle. For more information on sparse bundle refer [Sparse Bundles (V/OS2 only)]
* A sparse package may only contain full files from the new package that need be replaced on the file system. The fact that a sparse package can be applied to a range of package versions precludes the use of binary patching.
* Secure installer allows installing a sparse package which can downgrade an existing package. This is allowed only for sparse package type. This is allowed in order to allow rolling back the changes from sparse updates to the lower package version to be able to update binary patches.

Example 1: A sparse package for the sample ‘OS’ package 

```
       Sample 'OS' Patch Package
|-- CONTROL
|   |-- control
|   |-- flashremove
|   `-- grsec
|-- etc
|   `-- root_policy
`-- usr
    `-- local
        |-- bin
        |   `-- newfile
        `-- sbin
            `-- secins
```



```
    Sample 'OS' patch Package 'control' File
Package: secins
Version: 1.0.2
SrcVersion: 1.0.1
Type: os
Category: sparse
```



```
    Sample 'OS' Patch Package 'flashremove' File
usr/local/bin/sirunapp
```



* This sparse update replaces the 2 files 'root_policy' and 'secins' on the flash file-system. Completely removes the file 'sirunapp' from the file-system and adds 'newfile' in /usr/local/bin dir.
* Note that the 'flashremove' must contain an entry for every individual file you want removed - it is not enough to just list a directory name to have the contents of that directory completely removed. Other pkgs could place files in the same directory.
* Furthermore if you do want the directory itself removed (assuming the content has also been removed) you must include an entry for the directory itself.
* Finally note that the 'flashremove' file is optional and need only be present in the CONTROL dir of a patch package if files need to be removed from the package being updated.

**Roll-back sparse packages** - In some cases, e.g. to binary patch between two major releases, it might be necessary to roll-back all the changes brought by sparse packages into the system. In such cases a roll-back sparse package needs to be installed on the system. The roll-back sparse package should contain the files from the package that the package version needs to be brought back to on the system.

Example 2: A sparse roll-back package for the sample ‘OS’ package 

```
       Sample 'OS' Patch Package
|-- CONTROL
|   |-- control
|   |-- flashremove
|   `-- grsec
|-- etc
|   `-- root_policy
`-- usr
    `-- local
        |-- bin
        |   `-- sirunapp
        `-- sbin
            `-- secins
```



```
    Sample 'OS' patch Package 'control' File
Package: secins
Version: 1.0.2
SrcVersion: 1.0.1
Type: os
Category: sparse
```



```
    Sample 'OS' Patch Package 'flashremove' File
usr/local/bin/sirunapp
```



* This roll-back sparse update brings the package version on the system back to the version before the update sparse package was installed. Note the 'Version' and 'SrcVersion' in the package 'control' file.
* This install **replaces** the 2 files 'root_policy' and 'secins' on the flash file-system. Completely removes the file 'newfile' from the file-system and adds 'sirunapp' in /usr/local/bin dir.


### Installed Software List

Users may use the libsecins API's [Secins_read_bdllist_entry()](libsecins_8h.md#function-secins-read-bdllist-entry) and [Secins_read_pkglist_entry()](libsecins_8h.md#function-secins-read-pkglist-entry), to get the list installed software bundles and installed software packages respectively.

Refer to the Secure Installer API section below for more details.


## Install Bundles

All install packages (and their associated p7s signature files), as described in the previous section, must be contained within a signed install bundle - a bundle can contain any number of packages (including a single package or none at all). Bundles are used for the following two reasons.

1. A signed bundle allows us to release a number of packages as a set, such that only the complete set can be downloaded together i.e. it would not be possible to download an individual package extracted from that set.
2. It ties a package remove file to a set of packages (see later for description of the package remove file). You cannot separate a remove file from the packages that it is downloaded with.

The bundle itself then is formatted as follows.

* The install bundle is a **compressed** tar-ball. Either gzip or bzip2 compression may be used.
* The bundle must be signed so every bundle must be accompanied by a p7s signature file. Once again the signature file must have the same file name as the bundle file but with ".P7S" or ".p7s" appended.
* A directory named CONTROL must exist as the top-level of the tar-ball directory structure.
* Inside the CONTROL directory there must exist a file named "control". This is described below.
* In addition to the CONTROL/control file, an install bundle may contain one or more of the following.
    * Install packages and associated signature files (as described above).
    * Signer Certificates, which must be contained in a sub-directory named 'crt' or 'CRT'.
    * A package removal file, simply named 'remove'.
    * A target file called 'target' for performing targeted installs. See section [Target file inside Bundles] for more information.
* In order to authenticate a file (a bundle in this case) the filetype must be known, which implies that the user must be known. A bundle may therefore only contain install packages for a single users, since once a bundle is authenticated with a particular 'filetype' (based on the user specified), it would not be correct to allow other user packages within that bundle. Multiple bundles may be used to download files for different users.



* Since packages are signed and require a certificate to authenticate them, it is clear that the signer certificates cannot be contained within a signed package. The certificates found in the install bundle are therefore processed before the install packages themselves are processed.
* Certificates are authenticated by Pedguard.
* The package removal file will be used to remove packages and will also be processed before any install packages are processed. Note that once the install bundle file is in flash (and assuming it has been tested and is signed properly) it will be installed (worst case on the next reboot). It is therefore safe to process the removal file before the packages are processed.
* Note that it is important that the remove file can be tied to a particular set of install packages by virtue of being contained together in a signed bundle e.g. if a remove file contained a command to remove the entire OS then the bundle had better also contain a complete new set of OS packages to be installed.
* The contents of the remove file are described in the following section. Note that in general though, the user and system signers cannot remove packages installed by other signers. The OS signer can remove everything if required.
* Finally note that in general a remove file is only required in some exceptional circumstances such as if completely changing the application set installed on the terminal. If simply updating existing packages or adding new packages there is no need for a remove file.


See [Appendix A: Creating Install Packages/Bundles] for a practical example of how to create install packages and install bundles.


### Bundle Control File

Following then is the summary of the bundle control file.


| Field Label   | Max Length   | Description    |
|  -------- | -------- | -------- |
| Name   | 24   | 

* The name of the bundle (Required).  
* The field 'Package' may alternatively be used here - The labels 'Name' and 'Package' are inter-changeable.  

 |
| Version   | 16   | 

* Bundle Version (Required).  

 |
| User   | 8   | 

* Bundle User (Required for all except OS bundles)  
* Defaults to 'os' if not specified.  

 |
| Category   | 16   | 

* Bundle Category (Optional) 
    * 'fs' for a normal complete bundle.  
    * 'patch' for an update to an already installed bundle  
    * Defaults to 'fs' if not specified.  
    * By definition an 'fs' bundle is a complete bundle. A 'patch' bundle is an update to an existing bundle but does not contain the complete content for that bundle and so requires a previous version of the bundle to be already installed on the system.  

 |
| SrcVersion   | 16   | 

* Contains the version of the bundle being patched.  
* This is required in a 'patch' bundle.  

 |
| Date   | 10   | 

* Optional bundle creation date e.g. YYYY-MM-DD.  

 |
| Option   | 64   | 

* Optional extra information.  

 |
| Type   | 16   | 

* Optional Type field - should be set to 'signed' if used.  
* Defaults to 'signed' if not specified  
* This was added purely for consistency because the 'unsigned' package type is effectively handled at the bundle level.  

 |


Example: Bundle 'control' file 

```
 Name: sec-rfsbundle
 Version: 1.0.5
 User: os
 Date: 2012-05-08
```


### Package Removal File

The Package Removal file, contained in an install bundle, is a simple text file that contains commands, one per line, which will be interpreted by the secure installer.

As noted previously, a remove file is generally only required in some exceptional circumstances such as if completely changing the application set installed on the terminal. If simply updating existing packages or adding new packages there is no need for a remove file.

In particular, note that in a 'patch' bundle, a 'remove' file should only be required if the bundle being updated requires a package to be removed (i.e. the previous bundle version contained a package or packages that the new version does not).

Beware also that the binary patching of a package is not possible if a 'remove' file is used to remove the currently installed package. 

* The Package Removal file is simply called 'remove' and should be contained at the top-level of the compressed bundle file (i.e. it is NOT in a sub-directory and it is NOT in the package tar-ball).
* It is not a bash script and there is no shell involvement whatsoever. Only the commands described here are supported.
* Certain commands are only available to the OS signer.
* Note


Here are the commands supported 



1. removeall

  Usage: removeall [os | sys | user ] [<user>]

For the **OS signer**, the following applies. 
    * If the optional arguments are omitted, i.e. the command is simply 'removeall', all installed packages are removed.  
    * If the first optional argument is 'os' all OS packages are removed.  
    * If the first optional argument is 'sys' or 'user', and the second optional argument is omitted (i.e. the command is 'removeall sys' or 'removeall user', all system or user signed installed packages respectively are removed.  
    * If the first optional argument is 'sys' or 'user', and the second optional argument is specified i.e. the command is for example 'removeall sys sys1' or 'removeall user usr1' then all packages for the specified user are removed. 

For **other users**, it is only possible to remove all packages belonging to the user itself. **Therefore the arguments to the 'removeall' command are irrelevant and are simply ignored**. So all forms of the 'removeall' command for users other than the OS user are equivalent but the command name 'removeall' is all that is in fact required. 'removeall' command does not unregister VSS scripts and does not delete VSS keys. To unregister VSS scripts and delete VSS keys use 'removeall' command together with 'removevss' command. 
2. removebundle

  Usage: removebundle <Bundle> [<Version>]
    * Will remove the specified bundle.
    * If Version is specified then only that version of the specified bundle will be removed (if installed).
    * Any signer, be it os, system, or user, may only remove a bundle that was installed by that signer with this command. 
3. removepkg

  Usage: removepkg <Package> [<Version>]
    * Will remove the specified package from the current bundle (i.e. the bundle that contains the remove file being processed).
    * So in fact this command will only be used when updating an existing bundle using a 'patch' i.e. in the case where the new version of a bundle contains less packages than the old version.
    * If Version is specified then only that version of the specified package will be removed (if present). 
4. removeconfig

  Usage: removeconfig
    * Will remove the legacy config file (e.g. config.usr1) for this user. 
5. Removelogs

  Usage: removelog
    * Will delete the contents of the logs directory for this user. 
6. removeshare

  Usage: removeshare
    * Will delete the contents of the common share directory in flash. 
7. removevss

    * Will unregister VSS scripts and delete VSS keys. 'removevss' command must not be used alone. **'removevss' command must always be used with 'removeall' command.**


### Bundle Versions

Bundle versions are handled in much the same way as package versions i.e. for a particular bundle the Secure Installer will not install a version lower than that already installed. See Section [Install Package Versions] for more information on how version strings are compared by the Secure Installer.

For bundles there some extra checks performed as follows.

* When a bundle is updated (i.e. an installed bundle is being replaced by an update with a higher version), at least one of the packages versions in that bundle must also have changed, or the number of packages in the bundle must have changed (i.e. a package has been added or removed). By definition, a bundle should only change if an install package therein changes.
* In general, re-loading the same bundle version is allowed but if a bundle is being installed with the same version as that already installed, it must also be the case that the package versions in that bundle have not changed either. This attempts to detect the case where a package has been updated but the bundle version has not been. When an install package is updated, the bundle it is contained must also have its version updated.


### Patch Bundles

The 'fs' bundle category is considered to be a complete bundle and will entirely replace a previously installed version of the bundle. If the updated bundle contains less packages than the old version, the removed packages will be automatically removed from the system (i.e. a remove file need not be used).

The 'patch' bundle category is considered to be an update to an existing bundle and so need only contain the differences between the new bundle and bundle being updated. A 'patch' bundle always requires a previous version of the bundle to be already installed on the system. Should it be necessary to remove packages from a bundle, a remove file must be used in this case (i.e. the removepkg command).

So, to update an existing installed bundle there are two options.

1. The entire 'fs' bundle may be downloaded again.
2. Only those packages in the bundle that have changed may be downloaded in a 'patch' bundle.

Furthermore, option 2 above, has a number of possibilities - when using a 'patch' bundle to download the packages that have changed in a bundle, either the complete packages may be downloaded or 'patch' packages may be used (where 'patch' packages just download a 'binary diff' file between the old and new package versions as described in the section of 'Patch Packages').

Example: Consider the following bundle, v1.0.0, which contains 3 packages. 
| Name   | Version   | Packages    |
|  -------- | -------- | -------- |
| testbundle   | 1.0.0   | 
| testapp1   | 1.1.0    |
| testapp2   | 1.0.2    |
| testconfig   | 1.0.0    |


 |
|  -------- | -------- | -------- |


In this case the compressed bundle file would be as follows. 

```
               testbundle
|-- CONTROL
|  `-- control
|-- crt
|  `-- appsigner.crt
|-- testapp1-1.1.0.tar
|-- testapp1-1.1.0.tar.p7s
|-- testapp2-1.0.2.tar
|-- testapp2-1.0.2.tar.p7s
|-- testconfig-1.0.0.tar
`-- testconfig-1.0.0.tar.p7s
```



```
       Bundle 'testbundle' Control File
 Package: testbundle
 Version: 1.0.0
 User: usr1
```

Now if one of the testapp packages is updated, version 1.0.1 of this bundle will be as follows. 
| Name   | Version   | Packages    |
|  -------- | -------- | -------- |
| testbundle   | 1.0.1   | 
| testapp1   | 1.1.0    |
| testapp2   | 1.0.3    |
| testconfig   | 1.0.0    |


 |
|  -------- | -------- | -------- |


So to update testbundle, the following options are available.

* The complete 'testbundle' version 1.0.1 may be downloaded. This should be in an 'fs' bundle (as v1.0.0 would have been). 

```
               testbundle
|-- CONTROL
|  `-- control
|-- crt
|  `-- appsigner.crt
|-- testapp1-1.1.0.tar
|-- testapp1-1.1.0.tar.p7s
|-- testapp2-1.0.3.tar
|-- testapp2-1.0.3.tar.p7s
|-- testconfig-1.0.0.tar
`-- testconfig-1.0.0.tar.p7s
```



```
           Bundle 'testbundle' Control File
 Package: testbundle
 Version: 1.0.1
 User: usr1
```

* A 'patch' bundle containing only the complete testapp2 package may be downloaded. 

```
               testbundle_patch
|-- CONTROL
|  `-- control
|-- crt
|  `-- appsigner.crt
|-- testapp2-1.0.3.tar
`-- testapp2-1.0.3.tar.p7s
```



```
       Bundle 'testbundle' patch Control File
 Package: testbundle
 Category: patch
 Version: 1.0.1
 SrcVersion: 1.0.0
 User:_usr1
```

* Finally, a 'patch' bundle containing a binary patch for the testapp2 package may be downloaded instead. 

```
               testbundle patch
|-- CONTROL
|  `-- control
|-- crt
|  `-- appsigner.crt
|-- testapp2-1.0.3-patch.tar
`-- testapp2-1.0.3-patch.tar.p7s
```


The control file in this case is the same as the previous case - the package control file contains all the information required to determine whether a complete package or a 'patch' package is contained in the 'patch' bundle. 

```
       Bundle 'testbundle' patch Control File
 Package: testbundle
 Category: patch
 Version: 1.0.1
 SrcVersion: 1.0.0
 User: usr1
```

Beware that a 'patch' bundle should not contain a remove file that will remove the bundle being patched (e.g. a 'removeall' command) as this will remove the already installed packages before attempting to install the patch. A patch, by definition, requires a previous bundle version to be already installed.


### Sparse Bundles (V/OS2 only)

Sparse bundles are only supported in V/OS2 secure installer. A sparse bundle should have the ‘Category’ field in the bundle control file specified as ‘sparse’.

* The 'Category' field in the bundle control file must be set to 'sparse'.
* Sparse bundles can only contain sparse packages. For more information on sparse packages refer section [Sparse Packages (V/OS2 only)]
* The 'Version' field will indicate the new version of the bundle after the bundle is applied.
* The 'SrcVersion' field will indicate the version of the bundle that is being updated. As sparse bundle can be applied over a range of versions, the 'SrcVersion' in the package must be equal to or greater than the version of the bundle already installed on the system; otherwise the sparse update will fail.
* Secure installer allows installing a sparse bundle which can downgrade an existing bundle. This is allowed only for sparse bundles. This is allowed in order to allow rolling back the changes from sparse updates to the lower bundle version to be able to update binary patches.
* Sparse bundles can be targeted. For more information on targeting refer to [Target file inside Bundles]



```
   Bundle 'testbundle' sparse Control File
 Package: testbundle
 Category: sparse
 Version: 1.0.1
 SrcVersion: 1.0.0
 User: usr1
```


### Target file inside Bundles

Secure Installer supports including a target file inside the bundle, which is optional. It is a simple text file called 'target' which contains the targeting information for the bundle.

For example, a single download file can contain multiple bundles each targeted for different versions of the software present on the system. The bundles that meet the target requirement will be set for installation and the rest of the bundles will be discarded.

When needed, the 'target' file has to be present inside the CONTROL directory of the bundle.

[Appendix E: Target file format], explains about the content of the target file.


## UVRK (Unified VRK) Download files

UVRK (Unified VRK) is targeted for unified VRKv2 installation on Verifone devices.

* Directly downloadable
* Directly installable
* Support single or multiple payloads
* No additional signature
* Simple

Structure

 The packaging format relies on a simple container and a naming scheme.

Container

 The container **MUST**:

* use GNU TAR format
* be uncompressed (allows in-place processing)
* contain no duplicate entries
* contain no extended attributes
* contain at least one entry

Container naming scheme

 The file name of the container **MUST** be:
**<free_naming>.<vrk_container_type>.tar**

Example: TDES_1451234.uvrk.tar 
| Field   | Mandatory   | Case sensitive   | Value   | Example    |
|  -------- | -------- | -------- | -------- | -------- |
| <free_naming>   | Y   | Y   | Contains any file name permitted characters but MUST be without spaces   | TDES_1451234    |
| .<vrk_container_type>   | Y   | Y   | MUST contain ".uvrk"   | .uvrk    |
| .tar   | Y   | Y   | MUST be ".tar"   | .tar    |


Content file naming scheme

 The entries name in the container **MUST** be:
**<free_naming>_<serial_number>.<payload_type>.<file_type>**

Example: TDES_123-456-789.vrk2.json 
| Field   | Mandatory   | Case sensitive   | Value   | Example    |
|  -------- | -------- | -------- | -------- | -------- |
| <free_naming>_   | Y   | Y   | Contains any file name permitted characters but MUST be without spaces   | TDES_    |
| <serial_number>   | Y   | Y   | MUST be of the form: "<ddd>-<ddd>-<ddd>" where 'd' is a digit 0 - 9   | 123-456-789    |
| .<payload_type>.<file_type>   | Y   | Y   | MUST contain ".vrk2.json"   | .vrk2.json    |



## Download Files

Finally, because of the need to have just a single download file on some legacy systems, install bundles and their associated signatures must be presented to the secure installer (i.e. they must be downloaded to the install directory) in a single compressed tar-ball.

* The download file may be a plain tar archive or a compressed tar-ball
* If compressed, either gzip or bzip2 compression may be used.
* In general, download files just contain install bundles (which are compressed) and their associated signatures.
* Some legacy packages (e.g. VRK payload packages) may also be included in a download file. See section [dl.cfg] below for a description of the legacy files supported.
* From release-30090101, a configuration file, dl.cfg, may be included in the dl file. This will be used to configure certain aspects of how the download file should be handled by the installer. See section [dl.cfg] for more details.
* A 'target' file may optionally be included in the download file if the content of the download file need targeted install. See section [Target file inside Download file] for more information.

[Appendix A: Creating Install Packages/Bundles] contains a practical example of how to create install packages, bundles and the download file.


### Legacy Packages

V/OS is required to support some Mx legacy install files. In general there are two options for installing these files on V/OS.

1. They may be downloaded as install files i.e. they may simply be placed in /mnt/flash/install/dl and the Secure Installer will process them.
2. The may be downloaded within a V/OS Download file i.e. the download file may include signed bundles plus some legacy files.

The following Legacy files are supported.

* VeriShield Remote Key (VRK) Payload packages.
* VRK Bundles.
* Feature Enablement (FE) Tokens.

All of the above files are compressed tar-balls so within a download file the Secure Installer will firstly see these as unsigned packages (there is no matching p7s signature). Once it is determined that the unsigned file is not the 'unsigned' package type as specified above (there will be no CONTROL dir or control file) it will look at the contents of the tar-ball to determine what type of file has been encountered.



* For VRK payload packages the Secure Installer calls remoteKeyLoad_install() in libvfirkl (which is a port from Mx). This in turn invokes the Vault for handling the encrypted payload.
* A VRK bundle is simply a tar-ball of many VRK payload packages, with each one targeted at a specific device serial number. The Secure Installer must simply find the payload that matches its serial number and then process that payload package as per normal.
* A Feature Enablement Token is a tar-ball that contains a Token file (.tok) and a matching p7s signature file (.tok.p7s). This is processed by calling startProcessToken() in the legacy library libvfisvc.


### dl.cfg

The file dl.cfg, which may optionally be included in a download file, is a simple text file that contains "name=value" pairs and is used to change certain aspects of how the installer handles download files.

The following configuration item is currently supported.


| Name   | Value   | Description    |
|  -------- | -------- | -------- |
| IGNORE_OLD_BUNDLE_VER   | Yes/No   | 

* When enabled i.e. dl.cfg contains:

 IGNORE_OLD_BUNDLE_VER=Yes

 Any bundles in the download file that contain versions older than those already installed will be silently ignored.  
* In other words, the installer will not return the error ERROR_SECINS_BUNDLE_VERSION when it encounters a bundle that cannot be installed because of an old version.

 The bundle will be_silently_ignored.  

 |



### Target file inside Download file

Secure Installer supports including a target file inside the download file, which is optional. It is a simple text file called 'target' which contains the targeting information for the download file.

The download file will be set for installation only if all the conditions in the target file are met. If any of the condition in the target file is not met, then the download file with all its contents will be discarded.

[Appendix E: Target file format] explains about the content of the target file.


### Download File Protection (on V/OS2 only)

This is a feature on V/OS2 only where either the entire content of the download file will be installed or nothing. If any of the bundle in a download file fails to install, then the entire content of that download file will not be installed on the system. This is to ensure that the content of a download file is installed in its entirety in one single install.

Download file protection only comes into action after the bundles have been targeted and retained for installation if a target file was present in the bundle. For information on targeting refer to [Appendix E: Target file format] .


# Secure Installer Log

The secure installer will maintain a log file **/mnt/flash/install/secins.log**. All log entries will be date stamped. The following events will be logged.

* Processing of a download file - the file name will be logged.
* Successful install of a package - the package name and version will be logged.
* Failed install of a package - package name, version, and fail reason will be logged.
* Signer Certificate successfully added - Cert name and serial number will be logged.
* Signer Certificate fails to install - Cert name, serial number, and fail reason will be logged.
* Package successfully removed - package name and version logged.
* Package fails to extract to DRAM fs - package name, version, and fail reason logged.
* Installer fails to start application - app name and fail reason logged.


# Special System Users

In general the secure installer deals simply with install packages and does not make distinctions between different packages within a particular signer group e.g. all 'os' packages are treated alike, as are all 'sys' and all 'user' packages. Likewise, the secure installer does not differentiate between different user or system processes - it merely starts applications as directed via the package control information.

However, the system does require some applications to be treated differently, the most obvious example being the sysmode application, which is only started if there are no user applications to start or when the recessed sysmode button is pressed. So it falls on the secure installer to provide the mechanism for handling special case applications like sysmode.

In order to facilitate this, some system users are reserved and treated differently to normal system users. This special users are detailed in the following sections.


## Sysmode User (sys4)

The system user **sys4** is reserved for sysmode.

All installed sys4 packages are handled as follows.

* On start-up, when starting the normal system applications, the sys4 applications will not be started automatically.
* However, if it transpires that there are no payment applications to start in users usr, usr2, ..., usr16, the installer will then start the sys4 applications instead (if there are sys4 packages installed of course) i.e. sysmode will be started.
* Similarly, if there is a tamper or Anti-Removal Switch (ARS) active, the installer will not start applications but will instead start sysmode so that the tamper may be dealt with. See Section [Tamper Handling] for more information on tamper handling.
* When the sysmode recessed button is pressed the installer will kill all running user applications (i.e. usr1, usr2, ..., usr16) and will then start the sys4 applications.


## Manufacturing User (sys16)

The system user **sys16** is reserved for manufacturing test applications.

The main purpose is to allow a test user application run in manufacturing without having to install customer app sponsor/signer certificates.

Sys16 is effectively treated as a normal user (rather than a system user), when a device is in manufacture mode.

* On start-up, when starting the normal system applications, the sys16 applications will not be started automatically.
* However, if a unit is in manufacture mode, the sys16 applications will be started when normal user applications would start. Also, sys16 processes will be killed when entering sysmode and started when 'Run Application' is performed.


## Browser (sys13)

The system user **sys13** is reserved for the browser.

Currently, for WDE, we require the browser to run when user apps are running, but it must not run when sysmode runs.

* On start-up therefore, when starting the normal system applications, the sys13 application (if loaded) will not be started automatically.
* Instead, the sys13 application is started immediately prior to when normal user applications start. Also, sys13 processes will be killed when entering sysmode and re-started again when 'Run Application' is performed.
* Note if if the browser is installed in sys13 but no user packages are installed, the browser will still be automatically started on boot-up (not sysmode).


## Special System Groups

This section is concerned with the mechanism providing by the Secure Installer for creating special groups such as 'audio', 'video', 'tty', etc., which are commonly used on Linux systems. Such groups may only be created by the OS signer, via 'os' install packages.

* To add a special group a configuration file must be downloaded to the directory '/etc/secins/groups' via an 'os' install package. The configuration file name will indicate the name of the group to be added.
* The configuration file consists of name-value pairs in the form _ "name=value". _
* Line starting with # or ; are comment lines and are ignored.
* The following may be specified.


| Name   | Description    |
|  -------- | -------- |
| GID   | 

* The group id (gid) of the group to be added.  
* The specified gid must be in the range 1000-1999  
* This field in mandatory  

 |
| NAME   | 

* The group name.  
* The actual group name used comes from the file name of the config file in the '/etc/secins/groups' directory.

 Therefore this field is optional but if specified it must match the file name.  

 |
| MEMBERS   | 

* Specifies the members of the group.  
* This is in fact a list of V/OS groups, and all members of the specified groups are in turn added to the group being created.

 This allows us to use the V/OS groups 'users', 'system', 'share', for adding multiple users.

 A user private group (e.g. usr1, sys1, etc) can also be specified to add a single user to a group.  
* This field is optional and the default is 'share' if not specified i.e. all system users and app users are added to group.  
* The list members may be separated by white space or one of the characters , . : ;  

 |


Example: Following file adds the 'audio' group (i.e. this file is /etc/secins/ groups/audio)



```
# NAME field is optional but must match the filename if specified.
    NAME=audio

# GID is required and must be in the range 1000 to 1999.
    GID=1000

# MEMBERS is optional and the default is 'share' if not specified.
# This specifies a list of V/OS groups, and all members of the specified
# groups are in turn added to the group being created. So, the groups
# 'share', 'users', and 'system', can be specified here, or any user
# private group such as 'sys1', 'sys2', 'usr1', 'usr2', etc.
# The list members may be separated by white space or one of ,.:;

# e.g. MEMBERS=users,sys2,sys4
    MEMBERS=share
```


# Tamper Handling

During start-up the Secure Installer checks the tamper state of the device by calling the vfiSec_AttackStatus function in libvfiVaultapi.so.

If a tamper is active, running payment applications is not permitted, so the sysmode application (i.e. the application installed to the sys4 user) is started instead of the applications installed to the usr1 - usr16 users. On manufacturing (SVID = 0) or development (SVID = 8) units, tampers/ARS switches are not checked by default, but the secure installer may be configured to do so if required.


## Tamper Handling on UX Platform

On the UX platform, the following is checked in addition to the tamper state of the device itself.

* The internal device Service Switch is checked by calling the vfiSec_ServiceSwitchControl in libvfiVaultapi. Note also that the Service Switch is configured to reboot the unit when it becomes active. This is consistent with what happens when a tamper becomes active.
* When a Ux100 peripheral is connected, the tamper and ARS status of the Ux100 is checked using the ppSecGetSPStatus and ppInfoGetRemovalSwitchStatus functions in libvfiux100.
* Similarly, when a Ux300 is connected, the tamper and ARS status of the Ux300 will be checked.

If any of these are found to be active during start-up, sysmode will be started.

Once the system is up and running however, the installer can only check the tamper/ARS state of peripheral devices such as Ux100/Ux300 by polling them; unlike the internal tampers and Service Switch, an active tamper on a peripheral will not automatically cause the master device to reboot. So on UX devices, the secure installer will start a thread that polls the peripheral devices every 60 secs. If an active tamper or ARS switch is detected the master device will be restarted and the active tamper should be handled during the reboot (i.e. sysmode should be started).


# 24 Hour Selftest

On V/OS the Secure Installer interfaces with the Vault to perform the 24 hour selftest.

The selftest operates as follows.

* On bootup, immediately after the install packages have been authenticated and extracted to DRAM, a HMAC is calculated over the parts of the OS in DRAM that are to be included in the selftest.
* The HMAC is then checked every 24 hours to ensure it has not changed.
* The HMAC key is generated by the Vault and resides in the Vault.
* The generated HMAC is also only known to the Vault.
* The Secure Installer is trusted to pass the HMAC data to the Vault initially. It also is responsible for passing the data to the Vault for checking the HMAC.
* The 24 hour interval is measured by the Vault. A Secure Installer thread is blocked on a read operation of /sys/devices/selftest/selftest. The thread will be unblocked when the selftest is due. From that point the HMAC calculation must be completed and correct within 3 mins. If it is not the system will reboot so that all installed packages can be re-authenticated and re-extracted to DRAM.

Included in the HMAC are complete bundles and packages (i.e. every file in the install package is read from the DRAM RFS and included in the HMAC calculation) as well as some items in Linux kernel space (e.g. the kernel itself).

Specifically, the following is currently included in the HMAC calculation.

* The Linux kernel
* The 'sec-rfsbundle' OS bundle - includes the OS packages 'secins', 'securemods', 'security'.
* The system application bundle 'vcl'.
* The OS package 'openssl'.
* The installed LCD, Smartcard, MSR, driver modules and also included i.e. these are read directly from kernel space and included in the HMAC calculation.

When we say a package (or bundle) is included in the HMAC calculation we mean that each file contained in that package is read from its target location in DRAM and the file contents are included in the HMAC. Symlink files are also read and included. [Directory](class_directory.md) files are not, but if a directory is changed it follows that files in that directory that should be included in the HMAC will not be found and so the HMAC will differ.


## Vault HMAC API

The following Vault API's are used for calculating the initial HMAC on boot up.

* vfiSec_SHAHMAC_Init
* vfiSec_SHA256_Update
* vfiSec_HMACCalcSetup

For checking the HMAC the following are used.

* vfiSec_SHAHMAC_Init
* vfiSec_SHA256_Update
* vfiSec_HMACCalcCompare


## hmac.cfg

The file '/etc/hmac.cfg', which is part of the 'secins' install package, is used by the Secure Installer to determine what should be included in the HMAC.

Each line of the file specifies one item to be included in the HMAC calculation.

Following table describes the allowed entries in hmac.cfg.


| Command   | Parameters   | Description    |
|  -------- | -------- | -------- |
| kernel   | 

* None 

 | Simply includes the Linux Kernel in the HMAC calculation    |
| bundle   | 

* The signer - 'os' or 'sys  
* The bundle name.  

 | Includes the named bundle in the HMAC calculation e.g. 'bundle os sec - rfsbundle' includes the OS bundle 'sec-rfsbundle' while 'bundle sys vcl' includes the system application bundle 'vcl'.    |
| package   | 

* The signer - 'os' or 'sys'  
* The package name.  

 | Includes the named package in the HMAC calculation e.g. 'package os openssl'includes the OS package'openssl'.    |
| module   | 

* Module name(s).  
* A number of alternative names for a module may be specified.  

 | The specified module, if it is present on the system, will be includedin the HMAC calculation.

 Note the following:


* If a single module is specified with the 'module' command an 'insmod' will be attempted if it found that the named module is not installed.  
* When more than one module name is specified they are assumed to be alternative names for the same module. One of those named must already be installed i.e. no 'insmod' is attempted.  

 |


**Sample hmac.cfg**

```
 Kernel
 bundle     os                  sec-rfsbundle
 bundle     sys                 vcl
 packag     os                  openssl
 module     bcm5892_lcd         bcm5892_lcd_mono ux300_video
 module     scr
 module     msr
```


## Selftest Log Files

When calculating the initial HMAC the details are written to '/tmp/secins/hmac.log'.

When calculating the HMAC for the 24 hour selftest the details are written to '/tmp/secins/hmac_check.log'.

Since the SI does not see the actual HMAC value itself, it simply writes a SHA1 checksum over the HMAC data for each item in hmac.cfg. So if the 24 hour selftest fails the OS has an indication of what item has changed by comparing hmac.log and hmac_check.log. This is for diagnostic purposes only and does not affect the system behaviour for a failed self-test.

Note that if selftest failure does occur the most recent hmac.log and hmac_check.log are written to '/mnt/flash/logs/system'.

**Sample hmac.log**

```
 Fri Nov 30 17:43:35 2012
 Kernel Addr: 0xc0024000
 Kernel Size: 3428352
 kernel (20): f9116bee5b995249efc1149e926577063632366b
 sec-rfsbundle (20): 992e9ad011f93f0a43b3a3a154b3e5ad05590d65
 vcl (20): 67b36c3bc5d3e7cf752962bd10a0584c629f0763
 openssl (20): 0b42d1a83440705f72bce4008c54f79c41e3f4ea
 bcm5892_lcd Addr: 0xbf059000
 bcm5892_lcd Size: 14154
 bcm5892_lcd (20): fd27c99b5fb074fbac18bae01e006a1dc4fef005
 scr Addr: 0xbf312000
 scr Size: 38442
 scr (20): 07bc23a59dbc843d252feb24b9440c681bde96be
 msr Addr: 0xbf328000
 msr Size: 12984
 msr (20): e7969186a95acbc39adcd4716e50c192bbf0154a
```


# Secure Installer API

Once the system is up, and all installed applications have been started, the secure installer will remain running and will provide a message interface that allows the user applications to access certain root services e.g. reboot.

A shared library, called libsecins.so, is provided to allow access to the functionality provided.Function prototypes, error codes, etc. can be found in [libsecins.h](libsecins_8h.md#file-libsecins.h).

Unless otherwise noted, the return value of all API's will be 0 on success or an appropriate error code – see [Appendix B: Secure Installer Error Codes] for list of error codes.


## Users/Groups API

For the MagIC project the MagIC application manager requires the ability to add users and groups dynamically to the system. What is proposed is that the secure installer will assign a range of uids and gids to each of the normal V/OS users and they may control those users and groups as they see fit.

Any given user may only use the uid/gids assigned to it – the range assigned to each user may be got from the libsecins API [Secins_get_uid_gid_range()](libsecins_8h.md#function-secins-get-uid-gid-range).

In the following, the normal V/OS users, usr1, usr2, etc. are referred to as the primary user, while the users and groups assigned to each of the primary users are referred to as secondary users.

See [libsecins.h](libsecins_8h.md#file-libsecins.h) for specific Users/Groups API reference.


# Troubleshooting Secure Installer

Secins Troubleshooting guide contains some commonly known issues and ways to debug/fix those or at least a _how-to_ gain required information from device.

check file signing here [Appendix A: Creating Install Packages/Bundles]


## Installation Troubleshooting

Known issues and scenarios.


| SI#  | Category  | Issue  | Symptom  | Cause  | Solution   |
|  -------- | -------- | -------- | -------- | -------- | -------- |
| 1  | Flash Burn  | Incorrect device image flashed on the terminal  | Will not boot into u-boot and beyond.  | Incorrect RAM type or size.  | Re-flashing the correct image again with the restore warranty key process.   |
| 2  | Install Device specific buildall  | Incorrect device specific buildall downloaded and installed  | Installation will be fine but on reboot will not boot into u-boot and beyond.  | Incorrect RAM type or size.  | Re-flashing the correct image that restores the warranty keys   |
| 3  | Install Engage solution buildall (Os + ADK + preinst with blacklist files)  | Failed installation  | Depending on the memory situation, the installation could fail in When the file is copied into /mnt/flash/install/dl (mapped to DRAM) due to insufficient DRAM. OR During first phase of installation i.e. validation of bundles and pkgs due to insufficient DRAM  | Insufficient DRAM to complete the installation  | Install the solutions dl file from rescue menu if the sysmode does not start on reboot OR If the sysmode starts on reboot then install smaller download files. IFADK-4678 will resolve the installtion of large dl files on low-memory devices (128M DRAM).   |
| 4  | Start Apps - Prod mode  | Fail to start apps  | The user apps installed on the terminal fail to start  | Reasons could be either Incorrect grsec files resulting in grsec not loaded correctly. SI does not start user apps if grsec is not loaded correctly. Device is tampered for prod devices. SI does not start apps if the device is tampered.  | Reload the pkg with correct grsec files De-tamper the prod terminal especially after flashing and if possible to de-tamper.   |
| 5  | Start Apps - Manu mode  | Fails to start manu (Sys16) apps  | Sys16 manu apps are not started  | Sys16 apps are not started by SI if the device not in manu mode (SVID not equal to 0)  | Investigate why Sys16 apps still present when the svid is 0 or device is in manu mode. Probably the conversion process from Manu to Prod in the factory did not complete fully and the Sys16 apps were not deleted upon conversion. The expectation is that when a device is converted from manu to prod, the Sys16 apps if present should be removed by SI.   |
| 6  | Install app download files  | Failed installation  | The download file fails to install and the device is left in the pre-install state.  | Causes can be several.. Incorrectly signed pkgs Incorrect control file information Incorrect versions in the pkg/bundle control file. VSS pkgs fails to install because the VSS files fail to load. SI reports the appropriate error.  | Fix the bad pkg/bundle and retry the installation.   |
| 7  | Power failures  | Power failures during installs  | The device may fall into rescue menu if the low-layers are not correctly written.  | Depending on what stage of the installation the power is lost, the symptoms could be different .. May not boot past u-boot if incompatible between raw low-layer images May not boot properly into root-file-system if kernel image and models are incompatible  | Restore the device rescue menu by downloading a dl file again or re-flashing the terminal with the burn image that restores the warranty keys.   |
| 8  | Sparse upgrades  |  |  | Incorrect sparse update generation - patching script  | Contact the ADK integration team for correct content after reviewing the SI logs for problematic pkg/bundle.   |
| 9  | P2P patch upgrades  |  |  | Incorrect patch generation - patching script  | Contact the ADK integration team for correct content after reviewing the SI logs for problematic pkg/bundle.   |
| 10  | crtreset  | Crtreset not clearing files on the terminal.  | Crtreset is expected to remove all the user keys, certs, pkgs and reset db files on the terminal.  | 

* Incorrectly signed crtreset files 
* Incompatible crtreset pkg for the Os on the terminal.

 | There is more than one crtreset pkg for the OS versions. Use the correct version.   |
| 11  | Repair pkgs  | Repair pkgs (Sys15) fail to start or install  |  | USB stick not detected  |  |
| 12  | Error during installation  | Failed installation  | Error message in /mnt/flash/logs/system/secins.log: `ERROR: addCert: -506` | DEV certificate is left in PROD-signed artifact.  | Bundle/package needs to be resigned with prod/user certificates   |
| 13  | Warrantied keys removed after downgrade  | Terminal not usable after downgrage  | The change was integrated to ADK 4.6 and backported only to ADK-4.5. If you upgrade, there should be no issues. If you downgrade from release where sha256 file is NOT present to a older release where it is expected -> Warrantied keys will be removed.  | 

* ADK 4.4 older ADKs store and expect sha256 file for warrantied keys. 
* ADK 4.5, 4.6, 4.7 and newer do not expect and do not store sha256 file for warrantied keys.

 | Do not downgrade from 4.5, 4.6, 4.7 to 4.4.   |



## Secins logs extraction

To transfer OS/ADK logs from production devices please use the Sysmode "Transfer Logs" option.

This will give you a collection of ADK/OS logs together with additional symptom data from the terminal.



1. Format USB stick to FAT.
2. Connect USB stick to device.
3. Enter Sysmode
    * by pressing 1+5+9 or
    * Power on device and When SYSMODE login displayed, press (CANCEL or red button)
4. Select "Transfer Logs" option. V/OS logs are transferred to USB stick to a file <serialno>-<date>-<time>.tgz, e.g. 401-102-532_150526_094323.tgz.
5. On successful detection of external device, Press ok button and remove external device

Valuable information that can be found in secins.log files

From extracted logs go to **/mnt/flash/install/secins.log**

Example of log file content:



```cpp
Wed Feb 19 19:05:01 2020: Extracting Download File /mnt/flash/install/dl/dl.ztdcfg_serial.1.0.0-prod.tgz into /mnt/flash/install/bundles
Wed Feb 19 19:05:01 2020: prepare JSON
Wed Feb 19 19:05:01 2020: We have reached the end of JSON creation
Wed Feb 19 19:05:01 2020: TO send tp -1: {"title":"Installing...","levels":{"level0":{"title":"Stage","current_item":"Extracting DL File","items_total":8,"items_done":1,"percent":0}}}
Wed Feb 19 19:05:01 2020: prepare JSON
Wed Feb 19 19:05:01 2020: We have reached the end of JSON creation
Wed Feb 19 19:05:01 2020: TO send tp -1: {"title":"Installing...","dlname":"dl.ztdcfg_serial.1.0.0-prod.tgz","levels":{"level0":{"title":"Stage","current_item":"Extracting DL File","items_total":8,"items_done":1,"percent":0}}}
Wed Feb 19 19:05:01 2020: prepare JSON
Wed Feb 19 19:05:01 2020: We have reached the end of JSON creation
Wed Feb 19 19:05:01 2020: TO send tp -1: {"title":"Installing...","dlname":"dl.ztdcfg_serial.1.0.0-prod.tgz","levels":{"level0":{"title":"Stage","current_item":"Extracting DL File","items_total":8,"items_done":1,"percent":5}}}
Wed Feb 19 19:05:01 2020: prepare JSON
Wed Feb 19 19:05:01 2020: We have reached the end of JSON creation
Wed Feb 19 19:05:01 2020: TO send tp -1: {"title":"Installing...","dlname":"dl.ztdcfg_serial.1.0.0-prod.tgz","levels":{"level0":{"title":"Stage","current_item":"Targeting bundles","items_total":8,"items_done":2,"percent":5}}}
Wed Feb 19 19:05:01 2020: prepare JSON
Wed Feb 19 19:05:01 2020: We have reached the end of JSON creation
Wed Feb 19 19:05:01 2020: TO send tp -1: {"title":"Installing...","dlname":"dl.ztdcfg_serial.1.0.0-prod.tgz","levels":{"level0":{"title":"Stage","current_item":"Targeting bundles","items_total":8,"items_done":2,"percent":10}}}
Wed Feb 19 19:05:01 2020: TGT check on dl and bundles done.
Wed Feb 19 19:05:01 2020: prepare JSON
Wed Feb 19 19:05:01 2020: We have reached the end of JSON creation
Wed Feb 19 19:05:01 2020: TO send tp -1: {"title":"Installing...","dlname":"dl.ztdcfg_serial.1.0.0-prod.tgz","levels":{"level0":{"title":"Stage","current_item":"Installing bundles","items_total":8,"items_done":3,"percent":10}}}
Wed Feb 19 19:05:01 2020: No SI update pkg found
Wed Feb 19 19:05:01 2020: Installing Bundle File ztdcfg-1.0.0.tgz
Wed Feb 19 19:05:01 2020: ERROR: addCertificate: -506
Wed Feb 19 19:05:01 2020: Failed to install Certificate: Certif.crt
Wed Feb 19 19:05:01 2020: ERROR: addCertificate: -506
Wed Feb 19 19:05:01 2020: Failed to install Certificate: SponsorCertif.crt
Wed Feb 19 19:05:01 2020: Installing ztdcfg-1.0.0.tar
Wed Feb 19 19:05:01 2020: Installed package ztdcfg-1.0.0.tar - ztdcfg: 1.0.0
Wed Feb 19 19:05:01 2020: Installed bundle: ztdcfg-1.0.0.tgz: ztdcfg: 1.0.0
```

In this example it'ls clearly visible that bundle failed to install because of wrong certificate. According to troubleshooting table it corresponds to issue #12.

Secins log file is packed with information and to ease the search what went wrong search for phrase "Failed to install". Found lines will provide you with error code, error message and package/bundle that failed to install.

Remember to look into also [Appendix B: Secure Installer Error Codes]


## Other Known issues

One limitation of the current packaging is that when you install files in a sub-dir, you cannot separate the ownership of the sub-dir and the ownership of the files in that directory - all files/dirs in the package will be installed with the ownership determined by the package control file. I don't see that ever changing tbh. If you need files with different ownership you have to install them to different sub-dirs (or the top-level dir that the pkg installs to because the ownership of that dir cannot be changed from the package e.g. /home/usr1).

For the 'lib' dir in /home/usrX though, it is not possible to use an alternative dir, as it is only 'lib' that will be searched by the loader. We don't see though that there is anything to be gained by sharing libs to some users and not others. If there is a feature that one user should have access to, but not some other user, well hiding library code is not the way to do that.

So if the following is the case then as things stand:



* If you need to share any lib with another user, then you have to install all libs in pkgs with the required Group and all libs then must be installed with that same Group. If you are just sharing with other usrX users you can use 'users' group but if you are sharing libs with both usrX and sysX then you are forced to use 'share'.
* You can still use the access permissions to keep some libs private e.g. 0600 would be private, 0660 would be shared.
* What you cannot do currently is share some lib only with usrX and some other lib only with 'sysX'.

In this particular install it is the lib directory in the 'FP' package that is the problem. Those libs need to be in a pkg with the 'share' group. If you cannot change the Group of that package then you need to move those libs to some other package that has the 'share' Group.


# Appendix A: Creating Install Packages/Bundles

Following demonstrates the generation of a download file that contains a single bundle, which in turn contains a single install package (of type 'user').



1. Generating an Install Package. 
    * First put your files in a directory structure as they should appear on the device (relative to the user home account for sys/user packages, or '/' for os packages).
    * A 'CONTROL' directory containing the 'control' file must be added. Other files such as 'start', 'grsec', 'env', may also be required.

Example: This package consists of an executable called 'testapp', plus a shared library in the 'lib' directory. 

```
package
|-- CONTROL
|  |-- control
|  |-- env
|  `-- start
|-- lib
|  |-- libdes.so -> libdes.so.1
|  |-- libdes.so.1 -> libdes.so.1.0.1
|  `-- libdes.so.1.0.1
`-- testapp
```

    * The control files are as follows
        * CONTROL/control 

```
 Package: testapp\n
 Version: 1.0.2\n
 Type: user\n
 User: usr1
```

        * CONTROL/env 

```
 [global]
     DEBUG=on
 [testapp]
     COMPORT=/dev/ttyAMA0
```

        * CONTROL/start 

```
    testapp arg1 "arg_2" argument3
```

        * 'grsec' is not required in this case.
    * Generate the package tarball as follows - assuming the above files are in a 'package' directory. For V/OS: 

```
$ cd package
$ tar --format=gnu -cf ../testapp-1.0.2.tar *
$ cd ..
```

 For V/OS2: 

```
$ cd package
$ tar --format=gnu -czf ../testapp-1.0.2.tgz *
$ cd ..
```

 (Note for V/OS2: please adapt for "tgz" extension in next steps)
    * Sign the Package tar-ball
        * In a production environment signer cards must be used for signing.
        * In a development environment, with test keys, the vfisigner tool may be used as follows. 

```
$ vfisigner --cert appsignerA1.crt --key appsignerA1.key testapp-1.02.tar
Signing testapp-1.0.2.tar ...
Writing testapp-1.0.2.tar.p7s ...
testapp-1.0.2.tar signed ok
```

 $ appsignerA1.key and appsignerA1.crt are the signer key and signer certificate respectively.
    * The following two files then comprise the signed install package,
        * testapp-1.0.2.tar
        * testapp-1.0.2.tar.p7s 
2. Generating an Install Bundle 
    * The bundle is simply a compressed tar-ball of signed packages, but must also include a CONTROL directory and control file.
    * Optionally the bundle tarball may also include the signer and/or sponsor certificate in a 'crt' directory and a 'remove' file.
    * In this case there is no need for a remove file so we have the following files 

```
bundle
|-- CONTROL
|  `-- control
|-- crt
|  `-- appsignerA1.crt
|-- testapp-1.0.2.tar
`-- testapp-1.0.2.tar.p7s
```

 However had there been a remove file required we would have the following files. 

```
bundle
|-- CONTROL
|  `-- control
|-- crt
|  `-- appsignerA1.crt
|-- testapp-1.0.2.tar
|-- testapp-1.0.2.tar.p7s
`-- remove
```

 So please note that the 'remove' file, when present, will be part of the bundle (not the package).
    * The bundle CONTROL/control file is as follows 

```
 Name: testbundle\n
 Version: 1.0.0\n
 User: usr1
```

    * The bundle in this case contains just a single package.
    * In the bundle directory, the following command can be used to create the bundle. 

```
 $ cd bundle\n
 $ tar czf ../testbundle-1.0.0.tgz *\n
 $ cd ..
```

    * Sign the bundle 

```
 $ vfisigner --cert appsignerA1.crt --key appsignerA1.key testbundle-1.0.0.tgz\n
 Signing testbundle-1.0.0.tgz ...\n
 Writing testbundle-1.0.0.tgz.p7s ...\n
 testbundle-1.0.0.tgz signed ok
```

    * So the following files comprise the signed bundle
        * testbundle-1.0.0.tgz
        * testbundle-1.0.0.tgz.p7s
3. Generating the Download File. 
    * The download file simply contains signed bundles. 

```
 $ tar cvzf dl-testbundle-1.0.0.tgz testbundle-1.0.0.tgz testbundle- 1.0.0.tgz.p7s
```

    * So dl-testbundle-1.0.0.tgz is the final download file and may be downloaded to the device. 

Please refer to [Appendix J: Recommended optimized packaging] for recommended packaging details and optimized installation times.


# Appendix B: Secure Installer Error Codes

For error codes returned by the Secure Installer, see macros defined in [libsecins.h](libsecins_8h.md#file-libsecins.h) starting with a `SECINS_ERROR_` prefix.


# Appendix C: Generating a binary patch install package for V/OS systems

The following demonstrates how to generate a binary 'patch' package.

To start with we must have two versions of the same package - the version to be updated and the update itself. Only DRAM type packages may be used for binary patching, not the flash types 'osflash', 'userflash', 'flashconfig', and 'userfont'.

Remember that the aim here is to download just the difference between the old and the new package tar files so that the system can generate the new tar file itself. However, the system also requires the updated p7s file and cannot generate that itself so it must also be downloaded.

In this example the package tar and p7s files are as follows.

* testapp-1.1.0.tar and testapp-1.1.0.tar.p7s
* testapp-1.2.0.tar and testapp-1.2.0.tar.p7s (which is the udpate). 



1. Generate the binary patch file using bsdiff  

```
 $ bsdiff testapp-1.1.0.tar testapp-1.2.0.tar testapp-1.2.0.patch
```

 So the binary patch file is testapp-1.2.0.patch.
2. Generate the 'patch' package tar file 
The 'patch' package tar file must contain the following.
    * A CONTROL dir and control file as normal.
    * The binary patch file generated in step 1.
    * The updated package signature, which in this example is testapp-1.2.0.tar.p7s.
So the package contents are as follows. 

```
|-- CONTROL
|   `--control
|-- testapp-1.2.0.patch
`--testapp-1.2.0.tar.p7s
```

 The control file is as follows. 

```
 Package: testapp\n
 Version: 1.2.0\n
 SrcVersion: 1.1.0\n
 Type: user\n
 Category: patch
```

 Assuming then that the package files are in a directory called patch, we can generate the package tar file as follows. 

```
 $ cd patch\n
 $ tar -cvzf testapp-1.2.0-patch.tar *\n
 $ cd..
```

 So the 'patch' package tar file is testapp-1.2.0-patch.tar
3. Sign the 'patch' package tar file  

```
 $ vfisigner -cert appsignerA1.crt -key appsignerA1.key testapp-1.2.0-patch.tar
```


The final 'patch' tar and p7s files are therefore testapp-1.2.0-patch.tar and testapp-1.2.0-patch.tar.p7s.

These should be added to a 'patch' bundle to be downloaded.


# Appendix D: Secure Installer Configuration

The secure installer reads configuration variables from text files containing "name=value" pairs. In general, the configuration items supported are only for development and test, and will never be enabled on a production unit. Only the OS signer can install these configuration files.

The configuration files supported are as follows:

* /etc/secins.cfg
* Any file found in the directory /etc/secins/cfg

/etc/secins.cfg is read first, so files in /etc/secins/cfg may override /etc/ secins.cfg.

Example: '/etc/secins/cfg/forcetamperchk' - config file installed to force tamper checking on a development unit (SVID=8). 

```
FORCE_TAMPER_CHECK=yes
```

For files installed to the /etc/secins/cfg directory, the name of the file does not matter other than the fact that the files are processed in alpha- numeric order. As long as the files are text files containing one or more of the supported 'name=value' pairs they will be processed.


The following configuration items are currently supported.



* All name and value strings defined here are NOT case sensitive.
* None of these configuration items are present/enabled by default and unless indicated should never be enabled on production units.


| Name   | Value   | Description    |
|  -------- | -------- | -------- |
| ENABLE_DEV_MODE   | Yes/No   | 

* Enables development mode.  
* In development mode, the installer allows user logins.  
* When development is enabled, the HOME_DIRS_WRITABLE item is also enabled by default(see below for more details).  

 |
| DISABLE_GRSEC   | Yes/No   | 

* Disables Grsecurity Role-based Access Control  

 |
| ALLOW_FLASH_EXEC   | Yes/No   | 

* Allow execute from flash.  

 |
| ENABLE_DIAGS_MODE   | Yes/No   | 

* When enabled, an extended system app Grsecurity policy is used for running diags.  

 |
| BROWSER_USER   | System username e.g. "sys13"   | 

* Defines the browser user for WDE.  
* Default is sys13.  
* This may be used on a production device should we require to use a user other than the default.  

 |
| FORCE_SVID   | 0, 1, ... 8   | 

* Forces the secure installer to use the SVID value set.  
* For example "FORCE_SVID=0" will force the installer to treat the device as being in manufacture mode.  
* This is only for test purposes and note that it is only the secure installer that will use this value. Other components of the system will read SVID as per normal.  

 |
| HOME_DIRS_WRITABLE   | Yes/No   | 

* For SEPA and PCI4 the home directory in DRAM can no longer be writable. This can be used to allow writing to the home dir.  
* Note that when ENABLE_DEV_MODE is set, this HOME_DIRS_WRITABLE item is also set by default. When user logins are enabled, the user would normally expect to be able to write to the home dir.  

 |
| FORCE_TAMPER_CHECK   | Yes/No   | 

* Forces checking of tampers on manufacture and development units. Tamper checking is now disabled by default on manu/dev devices.  

 |
| FORCE_TAMPER   | Yes/No   | 

* Forces the secure installer to behave as if a tamper is active (i.e. will run sysmode rather than the applications).  

 |
| TAMPER_REMOVE_APPS   | Yes/No   | 

* Remove apps on tamper.  
* This is required is some markets and so may be enabled on production units.  

 |
| LEGACY_UNSIGNED_DIR   | Yes/No   | 

* Extract unsigned pkgs to the user flash directory rather than to an 'unsigned' dir in the user flash dir.  
* May be used for legacy applications.  

 |
| DISABLE_SERVICE_SW   | Yes/No   | 

* Disables the checking of the extra tampers/ARS on UX terminals. This includes the internal service switch and Ux100 tampers/ARS. It does not prevent the checking of the internal device tampers.  
* This is mainly obsoleted now because tampers are no longer checked by default on manufacturing and development units (unless FORCE_TAMPER_CHECK is set).  

 |
| USE_HMAC_SELFTEST   | Yes/No   | 

* For 24 hour selftest the terminal can either reboot or perform a HMAC based selftest. If USE_HMAC_SELFTEST is disabled the terminal will perform an automatic reboot instead.  

 |



# Appendix E: Target file format

Targeting can be based on bundle information or system information. Targeted installation is only supported for download files and bundles; meaning 'target' files can be present only inside download files and bundles. Packages cannot contain target files; if present, they will not be processed.

The target file should be called 'target' and the filename is case sensitive.

The bundle or the download file will be considered for installation if condition on every line in the target file is met. If any of the conditions on any line in the target file is not met, then the whole bundle or the download file is discarded.

For 'model_num', 'dt_name' and 'serial_number', it is possible to specify a comma separated list of values. If any one of the values in the list match the system value, then the condition on the line is considered to be met. For 'model_num', 'dt_name' and 'serial_number', wildcards '?' for single character and '*' for one or more characters are allowed. Spaces in the middle of the words and before the comma are not ignored; spaces after the comma are.

**Note: 'dt_name' is only supported on V/OS2.**

Target file can have the following two types of formatted line types

1. For targeting based on bundles
**Bundle Name <Relational Operator> Version Number: Bundle User**
| ** Field ** | ** Meaning ** |
|  -------- | -------- |
| Bundle Name   | Name of the bundle targeting is based on    |
| Relational Operator   | See Relational Operators table below    |
| Version Number   | Version number of the bundle    |
| Bundle User   | User for that bundle. If field not present, then the user in the bundle control file is used. If no bundle user is mentioned in the bundle control file, then it is defaulted to 'root'.    |



Examples of valid lines for bundle based targeting 

```
 rfsbundle=1.0.22
 sec-rfsbundle > 4.0.6:root
 svcstklibs=1.0.5:sys1
```

 Examples of invalid lines for bundle based targeting 
| alsa-utils:1.0.0:root   | ':' not supported between bundle name and version, should be a relational operator   |
|  -------- | -------- |
| alsa-utils=1.0.0=root   | '=' not supported between version number and user    |


2. For targeting based on system requirement
**_ Name <Relational Operator> Version Number _**
| ** Field ** | ** Meaning ** |
|  -------- | -------- |
| Name   | Currently the following is supported: 
    * rfs_version  
    * release_version  
    * serial_number  
    * model_num  
    * dt_name (only supported on V/OS2)  

 NOTE: Targeting is now supported in V/OS2 Initramfs. Targeting based on serial_number, model_num and dt_name are the only valid targeting that can be done in initramfs. If targeting based on any other parameter, then the condition is considered as not met and the bundle is deleted. 

This list will be extended to include more system information as the need arises    |
| Relational Operator   | See Relational Operators table below    |
| Version Number   | 
    * RFS version if the Name field is 'rfs_version' (as returned byplatforminfo_get() with InfoType set to PI_VERSION_RFS).
    * Release version if the Name field is 'release_version' (as returned by platforminfo_get() with InfoType set to PI_VERSION_RELEASE).
    * Device serial number if the Name field is 'serial_number' (as returned_by_platforminfo_get()_with_InfoType_set_to_PI_SERIAL_NUM).
    * Model_num if the Name field is 'model_num' (as returned_by_platforminfo_get()_with_InfoType_set_to_PI_MIB_MODEL_NUM).
    * Device tree name if the Name field is 'dt_name' (as returned_by_platforminfo_get()_with_InfoType_set_to_PI_DT_NAME_STR).

 (Note: For model_num and dt_name, wildcards '?' - single character and '*' - one or more characters are supported)   
 |



Examples of valid lines for system based targeting 

```
 rfs_version >= 1.0.1
 release_version=1.0.21
```



```
 rfs_version >= 1.0.1
 release_version=1.0.21
 model_num = V240m BTWIFI, V200t3GDE
```

Examples of invalid lines for system based targeting 
| rfs_version > = 1.0.1   | space not supported between > and =    |
|  -------- | -------- |


Examples of matching on 'model_num' and 'dt_name' using wildcards for model_num 
| CSV of model_num in target file   | V200t,   | P200 plus,   | V200t3G,   | X?,   | V200t?G,   | *wifi*   | Condition met?    |
|  -------- | -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| If model_num on system is P400  | No   | No   | No   | No   | No   | No   | No    |
| If model_num on system is V200t2G  | No   | No   | No   | No   | Yes   | No   | Yes    |
| If model_num on system is v240mbtWifi  | No   | No   | No   | No   | No   | Yes   | Yes    |
| If model_num on system is X10  | No   | No   | No   | No   | No   | No   | No    |


Relational Operators supported are 
| ** Relational Operator ** | ** Meaning ** |
|  -------- | -------- |
| =   | Check if the installed software version IS EQUAL TO the version mentioned in the target file    |
| >   | Check if the installed software version IS GREATER THAN the version mentioned in the target file    |
| <   | Check if the installed software version IS LESS THAN the version mentioned in the target file    |
| =>   | Check if the installed software version IS EQUAL TO OR GREATER THAN the version mentioned in the target file.
There should be no space between = and >   

 |
| >=   | Check if the installed software version IS GREATER THAN OR EQUAL TO the version mentioned in the target file.
There should be no space between > and =   

 |
| =<   | Check if the installed software version IS EQUAL TO OR LESS THAN the version mentioned in the target file.
There should be no space between = and <   

 |
| <=   | Check if the installed software version IS LESS THAN OR EQUAL TO the version mentioned in the target file.
There should be no space between > and =  

 |



Spaces between Name and Relational Operator and Version number and ':' and Bundle user is allowed. Name, version number and bundle user are case- insensitive.

If there is an unformatted line in the target file, then that line is ignored.

**Sample target file inside a download file**

File name: target

Location: Inside the compressed download file 

```
 rfs_version >= 1.0.1
 rfsbundle=1.0.22:root
 sec-rfsbundle > 4.0.6:root
```

 Meaning: Install the download file if the RFS version on the system is greater than or equal to 1.0.1 AND 'rfsbundle' for user 'root' present on the system is equal to version 1.0.22 AND 'sec-rfsbundle' for user 'root' present on the system is greater than version 4.0.6

**Sample target file inside a bundle**

File name: target

Location: Inside the CONTROL directory of the bundle 

```
 release_version=1.0.21
 sec-rfsbundle > 4.0.6:root
```

 Meaning: Install the bundle if the build release version on the system is equal to 1.0.21 AND 'sec-rfsbundle' for user 'root' present on the system is greater than version 4.0.6


# Appendix F: V/OS2 secure installer highlights

V/OS2 Secure Installer is based on V/OS Secure Installer. V/OS secure installer was designed for a root file system (RFS) which was created on DRAM. Since the same packaging tools would be used to create the packages for V/OS2 systems, the bundle and package formats on the V/OS2 systems are the same as on V/OS. However, since the RFS on the V/OS2 systems is created on flash, there are some adaptations done to the V/OS secure installer to support flash based RFS.

Differences between V/OS and V/OS2 secure installer

* Like on V/OS systems, ‘Osflash’, ‘Userflash’, 'Userflashshare', ‘Userfont’ and ‘Flashconfig’ packages are still extracted only once into the flash after which they are removed from the system. The remaining package types like the ‘OS’ and ‘User’ are extracted into DRAM on V/OS systems and on ‘securefs’ (secure RFS on flash) on V/OS2 systems. As the RFS is on DRAM on V/OS systems, these ‘OS’ and ‘User’ packages are stored on the system and extracted into the RFS on every boot. Whereas on V/OS2 systems, since the ‘OS’ and ‘User’ packages are extracted into ‘securefs’, these packages are removed from the system after they are extracted into the RFS.
* Binary patching is done differently on V/OS2 systems. Since the RFS exists on flash, the packages need to be extracted only once into the flash after which the packages are discarded to save flash. As package tar-balls are not stored on the V/OS2 systems, binary patching cannot be done on package tar-balls anymore like on V/OS systems. Binary diffs are done on individual files and packaged into tar-balls. Refer to section [Binary Patching on V/OS2] for more information on binary patching on V/OS2 systems.
* On V/OS systems, VSS scripts, which are installed onto the system in 'vss' packages, are loaded at install time. On V/OS2 however, VSS scripts only loaded only after a reboot or "Run Apps" has occurred. This is because script processing at install time on V/OS2 must use a pathname for the script that is different to where the script will actually be installed, due to the securefs being read-only at that time. Also on Raptor the full download is protected, so processing a script at install time could have a side effect that cannot be undone should the install not proceed to successful completion.

New features in V/OS2 secure installer

* Download file protection - Either the entire download file content will be installed or nothing. On V/OS, SI installed one bundle at a time. So it is possible that the first few bundles were installed and then the installation stops on encountering a bad bundle. Download file protection only comes into action after the bundles have been targeted and retained for installation if a target file was present in the bundle. For more information on this feature refer to section [Download File Protection (on V/OS2 only)]
* Sparse packages - Sparse packages are the new package types supported in V/OS2 secure installer. Sparse packages are most useful in the cases where a patch or hotfix needs to be applied over a range of package versions. A sparse package size is smaller compared to its full package as sparse packages only contain a sparse set of files from its full package. They contain only the files that have changed and need to be updated on the file system. For more information on sparse packages and bundles please refer sections [Sparse Packages (V/OS2 only)] and [Sparse Bundles (V/OS2 only)]

To aid continuous reading the entire document has been updated with V/OS2 information where relevant.


# Appendix G: Bundles and Packages install order

We know that each download file can contain one or more bundles and each bundle inside it can contain one or more packages. Note that every bundle can only contain packages for a single user.

The upgrade of the bundles and packages is done in two stages

1. Installation
2. Extraction

Let us consider an example for easier explanation and understanding. Suppose that a download file contains four bundles 

```
    OS.bundle1.tgz, OS.bundle1.tgz.p7s
        This bundle contains two packages
        a.pkg.tgz, a.pkg.tgz.p7s (Package name in the CONTROL/control file is '2-pkg')
        b.pkg.tgz, b.pkg.tgz.p7s (Package name in the CONTROL/control file is '1-pkg')
    Sys.sys1.bundle.tgz, Sys.sys1.bundle.tgz.p7s
        This bundle contains one package
        s.pkg.tgz, s.pkg.tgz.p7s (Package name in the CONTROL/control file is 'sys-pkg')
    0.OS.bundle.tgz, 0.OS.bundle.tgz.p7s
        This bundle contains one package
        0.pkg.tgz, 0.pkg.tgz.p7s (Package name in the CONTROL/control file is '0-pkg')
    Usr.usr1.bundle.tgz, Usr.usr1.bundle.tgz.p7s
        This bundle contains one package
        u.pkg.tgz, u.pkg.tgz.p7s (Package name in the CONTROL/control file is 'usr-pkg')```


## Installation

In the installation stage, as a first step all the bundles in the download file not meant to be installed for that device type are discarded based on the targeting and blacklist (only on V/OS2) information in the bundles. After this process, all the remaining bundles from the download file are expected to install fine on the device. Every bundle and package is then authenticated and validated. If all the bundles and packages validate fine, then the resulting packages from these bundles are stored in flash to be extracted into the filesystem. If any bundle or package fails to validate or authenticate, the installation is stopped and the software is rolled back to the last working state as per [Download File Protection (on V/OS2 only)] on V/OS2 systems.

The order in which the bundles are processed is decided by the filenames of the bundles. All the bundles from the download file are first sorted in the alpha-numeric order and processed one bundle at a time. The alpha-numeric sorting is basically based on strcmp() of two strings. In the example above the order of processing for the bundles is as follows 

```
    1. 0.OS.bundle.tgz
    2. OS.bundle1.tgz
    3. Sys.sys1.bundle.tgz
    4. Usr.usr1.bundle.tgz```

Processing of the bundles happens one bundle at a time. Each bundle is validated and its packages extracted for processing. Each package in the bundle is then authenticated, validated and stored in the flash under its respective user directory OS/Sys/User to be extracted into the filesystem later. At the end of this stage, no part of the upgraded software is yet extracted and running. In the example above, after the installation stage the packages are stored in the flash as below 

```
    /mnt/flash/../OS/root/0-pkg/<pkg version>/0.pkg.tgz, 0.pkg.tgz.p7s
    /mnt/flash/../OS/root/1-pkg/<pkg version>/b.pkg.tgz, b.pkg.tgz.p7s
    /mnt/flash/../OS/root/2-pkg/<pkg version>/a.pkg.tgz, a.pkg.tgz.p7s

    /mnt/flash/../Sys/sys1/sys-pkg/<pkg version>/s.pkg.tgz, s.pkg.tgz.p7s

    /mnt/flash/../User/usr1/usr-pkg/<pkg-version>/u.pkg.tgz, u.pkg.tgz.p7s```

 Note here that the packages are stored under their respective user directories OS/root, Sys/sys[x] and User/usr[x]. Also, a sub-directory is created for the package version under which the packages are stored. This is to support installing the base package and its update package as part of the same download file.


## Extraction

At the end of installation either a system reboot or restart of apps is necessary to extract the packages stored in flash into the filesystem. If OS/Sys packages are installed, then a reboot is required. If only user packages are installed then restart of the apps is sufficient.

The order of extraction of the packages is the same as the [Typical Boot-up Sequence]. First the low-layer pkgs are extracted from initramfs after which the system is rebooted. Then the OS packages are extracted followed by Sys packages from initramfs and then switch root is done into the newly created root-file-system. Once in the root-file-system, the user packages are extracted into the filesystem and run.

All packages are extracted in the [alpha_numeric] order from their respective user directories OS/Sys/User regardless of the bundle they were installed in. The packages are authenticated before being extracted into the filesystem.


## Multiple download files with no reboots in-between

The installer processes one download file at a time processing every bundle and package inside the download file until the [Installation] is finished for all the download files. Once the packages are stored in the flash from all the download files, upon next reboot or restart apps, the packages are extracted into the filesystem like in the [Extraction] step.

Note that in this approach, if any download file after the first one fails to install successfully, then SI does not guarantee a complete rollback to the previous working state.


# Appendix H: Environment variable filtration

Now, for all the environment variables that are passed to the start application functionality are filtered by internal mechanism using the whitelist and blacklist system. If some environment variables are passed to the application and it fails to start, it may mean that some of them have been reset or removed by Secins. Please make sure to check your environment before processing any of the variables in the child application.


## Blacklist of environment variables

Blacklist of blocked environment variables for 'usr' user processes:


| Variable name  | Default value   |
|  -------- | -------- |
| IFS  | space   |
| SHELL  | /bin/false on PROD and /bin/sh on DEV   |
| HOME  | /home/USERNAME   |
| LD_*  | LD_LIBRARY_PATH=/home/USERNAME:/home/USERNAME/lib   |
| PATH  | /usr/bin:/bin:/usr/sbin:/sbin   |
| USER  | USERNAME   |
| USERNAME  | USERNAME   |
| PWD  | /home/USERNAME   |
| OLDPWD  | -   |



# Appendix I: Install API guidelines

Secure Installer(SI) provides a few APIs for installing software on the device. They are

1. [Secins_install_pkgs()](libsecins_8h.md#function-secins-install-pkgs)
2. [Secins_install_software()](libsecins_8h.md#function-secins-install-software)
3. [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) API documentation is available in [libsecins.h](libsecins_8h.md#file-libsecins.h)

[Secins_install_pkgs()](libsecins_8h.md#function-secins-install-pkgs) and [Secins_install_software()](libsecins_8h.md#function-secins-install-software) are the legacy APIs that have existed since the beginning of the installer. [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) is the new install API that is introduced to reduce the usage of RAM and flash during installations.

Note: We recommend using [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) API when available as it uses less resources during installation thus allowing for installations to complete. The plan is also to make [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) the only way of installing on V/OS2 platforms and deprecate the legacy APIs.

The usage and behaviour between the legacy APIs and the new efficient install API [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) is significantly different. The flow and the differences are highlighted below.

**Usage flow for [Secins_install_pkgs()](libsecins_8h.md#function-secins-install-pkgs) and [Secins_install_software()](libsecins_8h.md#function-secins-install-software) legacy APIs**


1. Application copies the download file to be installed into /mnt/flash/install/dl
2. Application calls [Secins_install_software()](libsecins_8h.md#function-secins-install-software)
3. SI validates the dl file content and commits the packages to be installed into flash
4. SI removes the download file from /mnt/flash/install/dl
5. SI returns to the caller the status of installation and the action required (reboot or restart apps) to complete the installation.
6. Application as the next step performs "reboot" or "restart applications" to complete the installation process and runs the newly installed software.
7. Installation is complete.

Note: As mentioned above, immediate action to reboot or restart apps is recommended. If this action is deferred and many more large files are attempted to be installed, then there is a possiblity that the device might run out of flash during installation leaving the device in an unknown state. This is highly likely when installing big download files (>40M) back-to-back on low flash devices (256MB flash) with no reboots or restart apps between them.

**Usage flow for [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) API**


1. Application calls [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) passing a list of dl file(s) locations
2. SI gracefully kills applications to obtain more resources using this sequence 
    * First, SI sends signals to warn applications: SIGTERM 
    * Then, SI waits up to 2 seconds 
    * Finally, SI sends signals to kill applications: SIGKILL 
3. SI performs extraction of each dl file passed according to its actual location: 
    * If dl file is in flash, SI performs an "in-place" extraction to flash - ie consumes the file while extracting it. As a result, the dl file is deleted. 
    * If dl file is in /mnt/flash/install/dl, SI performs extraction to flash. The dl file is deleted. 
    * If dl file is in any other location (USB, NFS, etc.), SI performs a direct extraction to flash. The dl file is kept intact. 
4. SI performs "reboot" or "restart applications" according dl file(s) content
5. Installation is complete
6. Application can call [Secins_get_install_status()](libsecins_8h.md#function-secins-get-install-status) to get the outcome status of the installation

**Difference in behaviour of [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) from the legacy APIs**


1. Application need not copy the dl file to /mnt/flash/install/dl but instead simply passes the location of the dl file stored in the user flash location.
2. SI kills all running user applications and displays a progress bar to indicate the installation progress. In legacy case, no user applications are killed. If TMS agent is running as a user application, please take note of this.
3. After the install content is validated, If the content is good, SI itself performs the action needed - reboot or restart apps instead of the user performing that action. If the content is bad, SI returns the install status to the caller if the caller is VHQ agent. If the caller is a user application, then there is no caller to return to as the user application is killed in Step 2 as mentioned above.
4. Application needs to call [Secins_get_install_status()](libsecins_8h.md#function-secins-get-install-status) to get the status of the installation.

**Complimentary APIs for [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) API**

 As the user applications are killed when [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) is called, two complimentary APIs are provided to help with this.



1. [Secins_precheck_software()](libsecins_8h.md#function-secins-precheck-software) This API can be called as the first step before starting the installation in the following cases Application needs to give feedback on the integrity/validity of dl files before launching installation Application needs some indication on installation if the reboot or restart apps will be called by SI to complete the installation. Note: This API is optional and not necessary to perform installations.
2. [Secins_get_install_status()](libsecins_8h.md#function-secins-get-install-status) This API can be called to find out the status of the last installation. This is especially useful when [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended) is used for installation. The status is returned in JSON format. Information returned is the same as in the case of legacy API [Secins_install_software()](libsecins_8h.md#function-secins-install-software) - success or failure, error number on failure.

**Recommendations and steps for issue-free installs**


1. Use [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended)
2. Place dl file to be installed in flash

```
/home/<user>/flash/```

3. Flash has at least 65MB free in the /mnt/flash partition
4. Each Bundle in the dl file does not exceed 15MB (compressed size)
5. Install one dl file per API call
6. At startup, application must check if there is any dl files left in their flash location and must delete them (this is to cope with power cut/reboots)


# Appendix J: Recommended optimized packaging

Some optimizations have been made to Secure Installer for faster installations. Some of these optimizations are relying on a specific way of packaging to allow best installation times.

Notes:

* Installation of non-optimized packaging remains supported as long as the structure of the archives are respected: only time at installation will be slower
* Guidance is given here for both V/OS and V/OS2 unless explicitly stated.


## DL Structure and archives

Mandatory structure:

* Dl files archives contain bundles
* Bundles archives contain packages
* Packages archives contain files to be installed
* All archives must be TAR files in **GNU tar format** (gzip compressed or not)
* When paths of entries in archive are extracted, the destination full path must be less than 255 characters
* The order of the TAR entries must be "Depth-first"
* An entry must only appear once in the archive


## Archive sequence (TAR entries)

A TAR archive is storing in sequence the files that are provided. This sequence (order of content) does matter for optimization. This means that "tar -czvf archive.tgz filea fileb" is DIFFERENT from "tar -czvf archive.tgz fileb filea"

As an example, if all files are in alphabetic order, you can ensure the order in archive even with wildcards "tar * " (all files will be in alphabetic order). On the other hand, you can enforce the order in a tar archive by specifically stating file and directory names "tar firstfile secondfile <the rest>".


## Optimized DL files



* Compression:
    * Must be compressed as tgz (tar+gzip)
* Content:
    * Archive can contain a directory named "0.optim"
* Sequence:
    * Archive content should have "0.optim" directory first if it exists

 To ease the right sequencing, this directory should be the first item in alphabetic order
    * Archive rest of content must be added in alphabetic order


## Optimized Bundles



* Compression:
    * Must be compressed (tgz: tar/gzip)
* Content:
    * CONTROL directory must contain a file named "filelist" which contain the alphabetically sorted list of all files and directories in archive
* Sequence:
    * Archive content must have "CONTROL" directory first
    * Archive content must have "CRT" directory second (if there is one)
    * Archive rest of content must be added in alphabetic order


## Optimized Packages



* Compression:
    * V/OS: Must be uncompressed (tar)
    * V/OS2: Must be compressed (tgz: tar/gzip)
* Content:
    * CONTROL directory must contain a file named "filelist" which contain the alphabetically sorted list of all entries in archive
* Sequence:
    * Archive content must have "CONTROL" directory first
    * Archive rest of content must be added in alphabetic order


## Script example to generate optimized Packages

```sh

# This script function is a helper to create optimized dlfiles, bundles and packages
#
# Here is a sample usage of this function:
# #include this function to your script
# source vos-packaging
# #create optimized package
# make_optimized_tar /home/me/mybundledir "*" -czf mybundle.tgz --exclude-vcs
#
# Usage: make_optimized_tar dir glob <tar options...>
# dir path to directory whose content will be archived
# glob name or glob for content of dir that will be archived
# <tar options> this must contain action and destination file. Any tar options are allowed EXCEPT "--exclude" and "--format"
#
# Notes:
#   - When calling with a globbing option like "*" you must quote it to avoid premature shell expansion
#   - Destination file must be provided as full path or relative to "dir"
 
function make_optimized_tar()
{
    local dir=$1
    shift
    local glob=$1
    shift
    cd "${dir}"
    local control_dir=$(find ${glob} -maxdepth 0 -type d -iname "control")
    local crt_dir=$(find ${glob} -maxdepth 0 -type d -iname "crt")
    if [[ -n ${control_dir} ]] ; then
        touch ${control_dir}/filelist
        find ${glob} | sort > ${control_dir}/filelist
    fi
    find ${glob} -maxdepth 0 -regextype posix-extended ! -regex "${control_dir}|${crt_dir}" | tar --format=gnu ${@} ${control_dir} ${crt_dir} -T -
    cd -
}
```

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100
