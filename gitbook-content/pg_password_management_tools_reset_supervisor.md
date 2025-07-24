---
hidden: true
title: Supervisor Password Reset Tool (VOS1, VOS2)
---

# Supervisor Password Reset Tool (VOS1, VOS2) <a href="#pg_password_management_tools_reset_supervisor" id="pg_password_management_tools_reset_supervisor"></a>

# Introduction <a href="#sec_password_reset_intro" id="sec_password_reset_intro"></a>

Password Reset Tool generates a package that sets a new value for the Supervisor password for a specific terminal, without the need to know the pre-existing value. This tool is supposed to be used on VOS1 and VOS2 terminals.

# When to use <a href="#sec_password_reset_when" id="sec_password_reset_when"></a>

This tool addresses the use cases of forgotten or unknown supervisor passwords.

# Functionality <a href="#sec_password_reset_functionality" id="sec_password_reset_functionality"></a>

This tool is a user-generated package for resetting a **supervisor** password only and works on devices with V/OS and V/OS2.

| OS | Package |
|----|----|
| <p>VOS1</p> | <p>dl.pwreset-1.x.x_prod.tgz (located in the V/OS SYS-TOOL directory in full-ADK zip archive, starting with ADK-4.7)</p> |
| <p>VOS2</p> | <p>dl.pwreset-1.x.x_prod.tgz (located in the V/OS2 SYS-TOOL directory in full-ADK zip archive, starting with ADK-4.7)</p> |

The tool contains the configuration file PWRESET.SYS with the following values:

[TABLE]

The example of values:

``` fragment
serialNumber=275-159-718
password=2558a34d4d20964ca1d272ab26ccce9511d880579593cd4c9e01ab91ed00f325  
expire=0
```

The package must be signed by the Terminal Sponsor. After the successful installation of the package on the terminal, the new Supervisor password value will be used to log in to System Mode. If the configuration was set to pre-expire the password, the user is forced to change the password value to a new one.

# Validations <a href="#sec_password_reset_validations" id="sec_password_reset_validations"></a>

The terminal performs the following security checks during the installation of the Password Reset package:

- The correct formatting of the serial number (serialNumber) field.
- The serial number of the package matches the serial number of the device.
- The package timestamp is newer than the last password database change timestamp on the device.
- The package timestamp is older than the device system timestamp

If at least one validation fails then the password will not be changed. The result of the package installation is logged (see [Logging](#sec_password_logging)).

# Logging <a href="#sec_password_logging" id="sec_password_logging"></a>

Password reset tool uses ADK-LOG component for logging. After package installation, a new log file is created (or overwritten if a previous one exists). It is stored in the /mnt/flash/logs/system/pwreset.log file. Logfile content examples:

Successful password reset:

``` fragment
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~ Running PWRESET v1.0.0
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: MIB serial number set: 275-159-718
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~  All conditions have been met, resetting password
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: Resetting password to pre-expired default values
<85> Aug 21 10:43:54 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: Finalize: Code=0 Line=0
```

Unsuccessful password reset:

``` fragment
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ Running PWRESET v1.0.0
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: MIB serial number set: 275-159-718
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: ERROR - Invalid length 12
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: ERROR - PWRESET.SYS format error in serial number field
<85> Aug 20 17:26:38 Raptor authpriv.notice pwreset: ~~SECLOG~~ PWRESET: Finalize: Code=-5 Line=0
```

# Instruction <a href="#sec_password_instruction" id="sec_password_instruction"></a>

The sample Password Reset package should be updated: the \"pwreset-control\" bundle content should be changed - a correct Serial Number, new encrypted password value, and pre-expired state need to be added to the PWRESET.SYS file.

{% hint style="info" %}
To hash a password value, use the Verifone Python executable file: \[unsupported block\]
{% endhint %}

The updated package then should be user-signed using the \"File Signing Tool (FST)\" on ADK 4.7 and older releases or the \"Online Signing Portal\" on ADK 4.8 and newer releases.

{% hint style="info" %}
UX (VOS1) devices which are running on ADK 4.8 and newer releases, should be still signed with the File Signing Tool.
{% endhint %}

# Troubleshooting <a href="#sec_password_troubleshooting" id="sec_password_troubleshooting"></a>

If the package install doesn\'t work and the following messages are found in the pwreset.log:

``` fragment
<85> Jun 12 23:35:19 Raptor authpriv.notice pwreset: ~~SECLOG~~  PWRESET.SYS timestamp is older than password database, needs to be newer
```

Check that date/time through Sysmode on the device is not newer than the timestamp of the PWRESET.SYS file.

``` fragment
<85> Jun 12 11:49:03 Raptor authpriv.notice pwreset: ~~SECLOG~~  PWRESET.SYS is newer than system time, needs to be older to reset password
```

Make sure time zone on the device through Sysmode matches time zone of PC which saved/packaged the PWRESET.SYS file. This issue may happen when package was made on a PC at local date/time in US\>Central Time zone, and date/time on the device in Sysmode was matching, but UTC setting was +0, causing PWRESET.SYS to appear as if it was created 5 hours earlier.
Changing to US\>Central time zone (UDT-0500) and updating time on the device then rebooting, allowed PWRESET.SYS to reset the password properly.
