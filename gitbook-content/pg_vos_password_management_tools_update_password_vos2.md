---
hidden: true
title: Password update tool (VOS2)
---

# Password update tool (VOS2) <a href="#pg_vos_password_management_tools_update_password_vos2" id="pg_vos_password_management_tools_update_password_vos2"></a>

# Introduction <a href="#sec_password_update_vos2_intro" id="sec_password_update_vos2_intro"></a>

The Password update tool can be used on VOS2 Engage terminals and updates system-level passwords via packaging by:

- Direct Load to the terminal via USB or Netloader
- Remotely using VHQ or other Terminal Management System (TMS) Password Update package should be signed using the Application file signing cards. Once processed on the terminal, the Password Update package is deleted and the values set in it cannot be viewed or edited from System mode.

# When to use <a href="#sec_password_update_vos2_when" id="sec_password_update_vos2_when"></a>

Use case examples when this tool can be used:

- A customer wants to update the password value on a particular Engage device.
- A customer has a password management policy that requires periodic password changes on all Engage devices.
- Deployment wants to set the same pre-expired password value on all Engage devices for the same region.

# Functionality <a href="#sec_password_update_vos2_functionality" id="sec_password_update_vos2_functionality"></a>

You must have downloaded and installed/unzipped the following:

- pwdconvert-bin-1.0.5.zip - this file provides a utility to define which terminals and how to change the passwords, this must be unzipped into a directory,
- dl.pwdupdate-1.0.9-rap-prod.tgz - this provides the bundle to which the password change file is bundled.

{% hint style="info" %}
External users should contact their Support Team to get appropriate packages.
{% endhint %}

Additionally, you must already have installed and have available the Package Manager and the standard VeriFone signing tools and your customer production cards.

The Password Update package is installed on the device and should contain a \"pwdupdate.txt\" file that has old and new password hashed values inside. The tool can be used on VOS2 devices only and provides to update system password value or password expiration state if the old password value is known. The tool can contain a defined S/N of a device or a S/N wildcard.

# Validations <a href="#sec_password_update_vos2_validations" id="sec_password_update_vos2_validations"></a>

Validations of the Security Policy File are performed during the installation on the terminal.

- the S/N value provided by the package must match the S/N format
- S/N provided by the package must match the S/N of the device
- the old password value entered in the config file must match the old password value on the device

If at least one validation fails then the password will not be changed. The result of the package installation is logged (see [Logging](#sec_password_update_vos2_logging)).

# Logging <a href="#sec_password_update_vos2_logging" id="sec_password_update_vos2_logging"></a>

The result of the password update package installation is stored in the /mnt/flash/logs/system file \"messages\".

Example:

``` fragment
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:main() Started. Version=[1.0.9] Mode=[Password Changer] uid=[0] gid=[0]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:get_serial_number() Terminal serial number from MIB: [123-456-789]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() DONE! Password successfully updated for section [123-456-789] user name [supervisor]!
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() User name [maintenance] password not provided in section [123-456-789]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() User name [keyload1] password not provided in section [123-456-789]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() User name [keyload2] password not provided in section [123-456-789]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() User name [level1] password not provided in section [123-456-789]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() User name [level2] password not provided in section [123-456-789]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() User name [svcswitch1] password not provided in section [123-456-789]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() User name [svcswitch2] password not provided in section [123-456-789]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() User name [switch1] password not provided in section [123-456-789]
<13> Jul  6 12:17:27 Raptor user.notice pwdupdate: ~~SECLOG~~ pwdupdate:proc_sect_params() User name [switch2] password not provided in section [123-456-789]
```

# Instruction <a href="#sec_password_update_vos2_instruction" id="sec_password_update_vos2_instruction"></a>

## Generate password hash batch file <a href="#subsec_password_update_vos2_tool_generate_password_hash_file" id="subsec_password_update_vos2_tool_generate_password_hash_file"></a>

To generate a password hash batch file, using \"pwdconvert.exe\" (mentioned above), a password plain-text batch file should be prepared before.

**Input** **file** **content** **example:**

``` fragment
[123-000-001]
*level1expired=
*level1pending=166831,974556
*level2expired=
*level2pending=166831,467899
*supervisorexpired=
*supervisorpending=123456,987324
*keyload1expired=
*keyload1pending=166831,677644
*keyload2expired=
*keyload2pending=166831,483485
```

You can use

``` fragment
[***-***-***]
```

as a S/N wildcard.

**Format** Each section is headered as \[\<serial-no\>\], and then line by line each password type setting is documented.

| Field | Description | Valid values |
|----|----|----|
| <p>level1expired</p> | <p>Level 1 Password set expired</p> | <p>blank = do nothing, 1 = expired</p> |
| <p>level1pending</p> | <p>Level 1 Old and New Password</p> | <p>\[old password\],\[new password\]</p> |
| <p>level2expired</p> | <p>Level 2 Password set expired</p> | <p>blank = do nothing, 1 = expired</p> |
| <p>level2pending</p> | <p>Level 2 Old and New Password</p> | <p>\[old password\],\[new password\]</p> |
| <p>supervisorexpired</p> | <p>Supervisor Password set expired</p> | <p>blank = do nothing, 1 = expired</p> |
| <p>supervisorpending</p> | <p>Supervisor Old and New Password</p> | <p>\[old password\],\[new password\]</p> |
| <p>keyload1expired</p> | <p>Keyload 1 Password set expired</p> | <p>blank = do nothing, 1 = expired</p> |
| <p>keyload1pending</p> | <p>Keyload 1 Old and New Password</p> | <p>\[old password\],\[new password\]</p> |
| <p>keyload2expired</p> | <p>Keyload 2 Password set expired</p> | <p>blank = do nothing, 1 = expired</p> |
| <p>keyload2pending</p> | <p>Keyload 2 Old and New Password</p> | <p>\[old password\],\[new password\]</p> |

Generate password hash batch file using \"pwdconvert.exe\":

``` cpp
pwdconvert.exe nosalt input.txt output.txt
```

where:

- input.txt - file name of password plain-text batch file
- output.txt - file name of password hash batch file

**Output** **file** **example:**

``` fragment
[123-000-001]
*level1expired=
*level1pending=D04250313FB8AD6EBF027A26FFB53159DE4C7A28AA1635A8ACF904CFCBC31174
*level2expired=
*level2pending=AD173F43A4558D140D61F447C3A2C4BF3CF476B615491EF8FAED08155A3CD384
*supervisorexpired=
*supervisorpending=8B20E62108D56CE822192DD39E27475570F9FE9BD52D677085577530B15613E3
*keyload1expired=
*keyload1pending=88149A8DCA7D972D46EB7DC4F187DC3D4BA37BB07350C0026F8A0DAE885E831B
*keyload2expired=
*keyload2pending=C6A21D4A7868F532DC9E476A0B616A183FCB4BC5FF1AE5BBBD6192EE739BBA84
```

## Creating the Bundle <a href="#subsec_password_update_vos2_tool_creating_the_bundle" id="subsec_password_update_vos2_tool_creating_the_bundle"></a>

This part of the procedure takes the \"output.txt\" from the previous file and bundles it into the VOS2 bundle to be downloaded. The \"pwdupdate-passwords\" bundle should be updated - the generated \"output.txt\" content should be copied into the \"pwdupdate.txt\" file as a password hash value. The updated package then should be user-signed using the \"File Signing Tool (FST)\" on ADK 4.7 and older releases or the \"Online Signing Portal\" on ADK 4.8 and newer releases.

{% hint style="info" %}
UX (VOS1) devices which are running on ADK 4.8 and newer releases, should be still signed with the File Signing Tool.
{% endhint %}
