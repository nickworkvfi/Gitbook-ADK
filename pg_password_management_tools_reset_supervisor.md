---
title: Supervisor Password Reset Tool (VOS1, VOS2)

---

# Supervisor Password Reset Tool (VOS1, VOS2)




# Supervisor Password Reset Tool (VOS1, VOS2)


# Introduction

Password Reset Tool generates a package that sets a new value for the Supervisor password for a specific terminal, without the need to know the pre-existing value. This tool is supposed to be used on VOS1 and VOS2 terminals.


# When to use

This tool addresses the use cases of forgotten or unknown supervisor passwords.


# Functionality

This tool is a user-generated package for resetting a **supervisor** password only and works on devices with V/OS and V/OS2.


| OS  | Package   |
|  -------- | -------- |
| VOS1  | dl.pwreset-1.x.x_prod.tgz (located in the V/OS SYS-TOOL directory in full-ADK zip archive, starting with ADK-4.7)   |
| VOS2  | dl.pwreset-1.x.x_prod.tgz (located in the V/OS2 SYS-TOOL directory in full-ADK zip archive, starting with ADK-4.7)   |


The tool contains the configuration file PWRESET.SYS with the following values:


| Value  | Description  | Mandatory  |
|  -------- | -------- | -------- |
| serialNumber  | Nine digits serial number (S/N) of the terminal in format: "nnn-nnn-nnn". Only one specific terminal serial number allowed | Yes  |
| password  | Hashed value of the Supervisor password  | Yes  |
| expire  | 

* 1: sets the password as pre-expired (force a change upon first use) 
* 0: not pre-expired 

 | Yes  |


The example of values:



```
serialNumber=275-159-718
password=2558a34d4d20964ca1d272ab26ccce9511d880579593cd4c9e01ab91ed00f325  
expire=0
```

The package must be signed by the Terminal Sponsor. After the successful installation of the package on the terminal, the new Supervisor password value will be used to log in to System Mode. If the configuration was set to pre-expire the password, the user is forced to change the password value to a new one.


# Validations

The terminal performs the following security checks during the installation of the Password Reset package:

* The correct formatting of the serial number (serialNumber) field.
* The serial number of the package matches the serial number of the device.
* The package timestamp is newer than the last password database change timestamp on the device.
* The package timestamp is older than the device system timestamp

If at least one validation fails then the password will not be changed. The result of the package installation is logged (see [Logging]).


# Logging

Password reset tool uses ADK-LOG component for logging. After package installation, a new log file is created (or overwritten if a previous one exists). It is stored in the /mnt/flash/logs/system/pwreset.log file. Logfile content examples:

Successful password reset: 

```
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~ Running PWRESET v1.0.0
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: MIB serial number set: 275-159-718
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~  All conditions have been met, resetting password
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: Resetting password to pre-expired default values
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: Finalize: Code=0 Line=0
```

Unsuccessful password reset: 

```
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ Running PWRESET v1.0.0
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: MIB serial number set: 275-159-718
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: ERROR - Invalid length 12
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: ERROR - PWRESET.SYS format error in serial number field
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: Finalize: Code=-5 Line=0
```


# Instruction

The sample Password Reset package should be updated: the "pwreset-control" bundle content should be changed - a correct Serial Number, new encrypted password value, and pre-expired state need to be added to the PWRESET.SYS file.

To hash a password value, use the Verifone Python executable file:

* copy the Python executable file "encryptPw" to your PC
* run cmd
* switch to the directory where the Phyton executable file is located
* run command:
    * Windows:

```
encryptPw <password value> ```

 Example:

```
encryptPw 1234567 ```

    * Linux:

```
./encryptPw <password value>" ```

 Example:

```
./encryptPw 1234567 ```

* the value entered should be at least 7 digits long. If not, the script will return an error message.
* copy resulting hashed value to **PWRESET.SYS** file


The updated package then should be user-signed using the "File Signing Tool (FST)" on ADK 4.7 and older releases or the "Online Signing Portal" on ADK 4.8 and newer releases.

UX (VOS1) devices which are running on ADK 4.8 and newer releases, should be still signed with the File Signing Tool.


# Troubleshooting

If the package install doesn't work and the following messages are found in the pwreset.log:



```
<85> Jun 12 23:35:19 Raptor authpriv.notice pwreset: ~~SECLOG~~  PWRESET.SYS timestamp is older than password database, needs to be newer
```

Check that date/time through Sysmode on the device is not newer than the timestamp of the PWRESET.SYS file.



```
<85> Jun 12 11:49:03 Raptor authpriv.notice pwreset: ~~SECLOG~~  PWRESET.SYS is newer than system time, needs to be older to reset password
```

Make sure time zone on the device through Sysmode matches time zone of PC which saved/packaged the PWRESET.SYS file. This issue may happen when package was made on a PC at local date/time in US>Central Time zone, and date/time on the device in Sysmode was matching, but UTC setting was +0, causing PWRESET.SYS to appear as if it was created 5 hours earlier. 

 Changing to US>Central time zone (UDT-0500) and updating time on the device then rebooting, allowed PWRESET.SYS to reset the password properly. 

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100
