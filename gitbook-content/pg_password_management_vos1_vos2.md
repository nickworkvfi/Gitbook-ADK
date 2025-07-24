---
hidden: true
title: Password Management VOS1, VOS2
---

# Preface <a href="#sec_password_management_preface" id="sec_password_management_preface"></a>

This page contains information about the system password management on VOS1 and VOS2 platforms. On VOS1 and VOS2, passwords are used to protect the <a href="pg_sysmode_overview.md">System Mode Overview</a> from unauthorized use. The initial password value is set on the factory and can be set/changed by the deployment process.

# Overview <a href="#sec_password_management_overview" id="sec_password_management_overview"></a>

## Data Structure <a href="#subsec_password_management_data_structure" id="subsec_password_management_data_structure"></a>

Password database location:

- /mnt/flash/system/passwords_db
- /mnt/flash/system/passwords_db.sha (cryptographic signature, contains a HMAC that is generated using a h.w OTP key) Both files are binary files. Sys-mode Password database file can be accessed by system users (sysN), but not regular users (usrN).

## Password Change History <a href="#subsec_password_management_passwrod_change_history" id="subsec_password_management_passwrod_change_history"></a>

The Password database content history is not accessible.
The Password database file modification date is only modified after a password change. This date can be used to get the last date when passwords were modified (value or expiration state is changed).

Example:

``` cpp
root@Raptor:~# su - usr1
usr1@Raptor:~$ stat /mnt/flash/system/passwords_db
File: /mnt/flash/system/passwords_db
Size: 2088 Blocks: 8 IO Block: 4096 regular file
Device: 14h/20d Inode: 21275 Links: 1
Access: (0660/-rw-rw----) Uid: ( 0/ root) Gid: ( 616/ system)
Access: 2020-10-13 00:04:17.000000000
Modify: 2020-10-13 00:05:35.000000000
Change: 2020-10-13 00:05:35.000000000
```

## System Passwords <a href="#subsec_password_management_system_passwords" id="subsec_password_management_system_passwords"></a>

\"passwords_db\" stores hashed values of system passwords listed below:

| Password type | Description |
|----|----|
| <p>supervisor</p> | <p>Full access to all System mode functionality. Supervisor password is also used to protect Rescue menu</p> |
| <p>maintenance</p> | <p>View settings and perform diagnostics either at the customer site or a repair depot. Does not allow changes to the device</p> |
| <p>level1, level2</p> | <p>These optional logins have System mode access limits defined by the security policy file. Note that the Level1 and Level2 login acts as a subset of the usr1 account</p> |
| <p>keyload1, keyload2</p> | <p>These passwords requested to initiate key loading</p> |
| <p>switch1, switch2</p> | <p>These passwords requested to activate devices when Anti Removal Switches (ARS) are activated (e.g. UX300 and UX100 Installation)</p> |

## Password Value Guidelines <a href="#subsec_password_management_password_value_guidelines" id="subsec_password_management_password_value_guidelines"></a>

- The password entered should be a minimum of 7 digits.
- The new password entered should not match the previous password.
- The new password entered should not match the default password.

## Password Value Entering <a href="#subsec_password_management_password_value_entering" id="subsec_password_management_password_value_entering"></a>

During the input of passwords and key components into the POI keypad, if a button is not pressed every 60 seconds an inactivity time-out is implemented such that the device will exit the sensitive state.
Password Entry timeouts for 5 seconds on wrong password entry.
The entered password is not stored. Once a full password is entered, or password entry is canceled/timed out, the password is cleared from memory immediately.

## Password Value Validation <a href="#subsec_password_management_password_value_validation" id="subsec_password_management_password_value_validation"></a>

**Trident and Engage:**

When the user is logging in, the value entered in UI is hashed (SHA-256) and the hashed value is compared with the value stored in the database (that is already hashed using the same hash type).

If the user logins into the sysmode, and enters a password value, that is less than 7 digits, then - even if the hash of this password value entered is the same as stored on the device:

- the password state is changed to \'\'expired\'\',
- the sysmode prompts the user to enter a new password value that should be at least 7 digits long.

A new password (if it is entered via the UI) can not be equal to the old value. A new password must be entered twice for validation.

{% hint style="info" %}
Password length validation doesn\'t affect DEV mode devices to keep the possibility to use the default factory password that is 6 digits long.
{% endhint %}

## Password Value Expiring <a href="#subsec_password_management_password_value_expiring" id="subsec_password_management_password_value_expiring"></a>

It is a PCI requirement for passwords allowing access to sensitive areas of the system to expire when the unit is shipped from the factory.

The first login after the unit leaves the factory forces the operator to change the password.
The password expiration state can be changed by password change packages (<a href="pg_vos_password_management_tools_update_password_vos2.md#pg_vos_password_management_tools_update_password_vos2">Password update (V/OS2)</a>, Supervisor password Reset).
If the password is expired, then during login user is forced to change the password.

{% hint style="info" %}
Maintenance mode - Does not require expired passwords as there is no ability to access sensitive areas or clear tamper codes. Allows the password to be reset to the default.
{% endhint %}
