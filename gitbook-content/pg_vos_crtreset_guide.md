---
hidden: true
title: V/OS Certificate Reset Tool
---

# Certificate Reset Tool <a href="#crtreset" id="crtreset"></a>

# Introduction <a href="#sec_crtreset_intro" id="sec_crtreset_intro"></a>

The Certificate Reset Tool (CRTRESET), is a software package for removing file authentication certificates from a terminal via a download. All customer files (i.e. user bundles and packages), keys, and passwords will be deleted at the same time from the terminal. Basically it provides an application \"uninstall\" mechanism. No change to installed operating system firmware is taken. However, SYSMODE passwords are returned to their default. This tool is supposed to be used on VOS1 and VOS2 terminals.

## Use Cases <a href="#subsec_crtreset_use_cases" id="subsec_crtreset_use_cases"></a>

The first motivating use case is a merchant switching processors (ISO or \"their bank\") and installing a new sponsor application. The old bank owns the top-level application key. All applications on the terminal are either signed with this key or a key certified by it. The old key certificates must be removed before the new bank\'s certificates can be installed. The old bank should remove its application files at the same time.

The second use case is a merchant selling to returning their terminals. In this case, the merchants banking credentials must first be removed. By removing the application-sponsor certificate, another merchant or ISO is then allowed to install application software they have signed.

## Installation <a href="#subsec_crtreset_installation" id="subsec_crtreset_installation"></a>

The CRTRESET file is a DL-TGZ file that must have applicable serial numbers stored in it, be USR signed, and then downloaded to the terminal.

# Control File <a href="#sec_crtreset_control_file" id="sec_crtreset_control_file"></a>

The CRTRESET.SYS file in the crtreset-control USR1 package/bundle is an ASCII text file in the format illustrated by the following example:

``` fragment
# Serial Number List        Comment
12345678001,                Specific terminal serial number
12345678009,                Another valid serial number
12446******,                "Wild card" range: 12446000000-12446999999
12444883619-12444892351,    Specific range of serial numbers
600-001-000-600-001-999,    Another range; the lowest is 600-001-000
124-***-403,                An unlikely but legal range
12443******-12444******,    Illegal range: program will abort!
12443000000-12444999999     Possibly what was meant in previous example
```

**Comments:** Lines starting with `#` are ignored, so they may be used to record comments.

**Terminal identifier:** The first non-comment line(s) identifies the terminal(s) to which the file applies. If more than one line is given here (because the control file is intended to be used for multiple terminals), each line except for the last one must end with a comma. All of the serial-number lines must have a valid format -- the program will check all of them and any exception will cause the program to fail.

The serial number (range) is compared to the serial number stored in the terminal and the operation is permitted only if one of the serial number ranges in the control file matches the terminal. (It is therefore required that terminals have unique serial numbers loaded into FLASH during manufacturing.)

The terminal number may be specified in several different ways. The most straightforward way is to specify all eleven characters, as they were set during manufacturing. A second method is to specify that certain of the nine digits should be ignored. In this case an asterisk (\"\*\") is used as a \"wild card\" for each position that should not be checked. All eleven character positions must be specified, however. Finally, a third method is to specify a range of serial numbers. The lowest number in the range is specified explicitly using all nine digits (no wild cards are allowed), followed immediately by a dash (\"-\") character, followed by the highest valid number in the range (again specified using exactly eleven characters without wild cards). Note that serial numbers typically have embedded dash characters. In either case serial numbers must ALWAYS be specified with exactly eleven characters, and if a \"low-high\" range is specified, the limits must always be separated by a dash (hyphen). The program will read each line of the CRTRESET.SYS file looking for a matching serial number or serial number range. If it encounters an incorrectly formatted line, the update will be rejected and the certificates will NOT be removed.

### Attention

The certificate removal must be authorized by the terminal's usr1 owner. The CRTRESET.SYS file is loaded as an usr1 package/bundle and consequently usr1 application signer ONLY can sign the control file. In a multi-app scenario (not very common) where different application signers are developing apps for different users on the same terminal (e.g. usr1 and usr2) then only the usr1 app signer signs the control file. The usr2 consent is not required. This requirement, together with serial number checking, ensures that only the current owner of the terminal can remove the certificates.

# Running CRTRESET <a href="#sec_crtreset_running" id="sec_crtreset_running"></a>

To run CRTRESET, a downloadable file containing the following bundles and their associated signatures must be downloaded to the terminal.

| File name | File description |
|----|----|
| <p>OS.crtreset.tgz</p> | <p>OS bundle containing the OS components (script, executable, package & bundle control files) performing the certificate removal</p> |
| <p>OS.crtreset.tgz.P7S</p> | <p>Verifone OS Signature for OS.crtreset.tgz</p> |
| <p>USR1.crtreset-control.tgz</p> | <p>User-supplied bundle & package containing the CRTRESET.SYS control file (serial number list)</p> |
| <p>USR1.crtreset-control.tgz.P7S</p> | <p>User-supplied signature for USR1.crtreset-control.tgz</p> |

The first two files are supplied by VeriFone. The USR1.crtreset-control.tgz tarball containing the CRTRESET.SYS control file described above is supplied as an example. The control file must be modified, re-packaged and re-signed following the same format as for applications. The bundle file and its associated signature can be generated by the same tools: Package Manager and VeriShield File Signing Tool.

## Preparing the CRT Reset Download <a href="#subsec_crtreset_preparing_download" id="subsec_crtreset_preparing_download"></a>

To remove its certifications, passphrases, and the USR application, the (old) bank takes the \"dl.crtreset-2.2.2-PROD.tgz\" download and opens up the USR1 bundle. The OS bundle must not be modified or re-signed. The USR1 package contains a file to hold terminal serial numbers. Only those terminal serial numbers in the control file \"CRTRESET.SYS\" are affected. The outgoing (old) bank then signs this bundle and package (only) with a signing card derived from the same application sponsor as was used to load the application. The outgoing (old) bank removes its certificates by downloading an OS bundle (OS.crtreset-x.y.z.tgz) along with a USR1 control file bundle (USR1.crtreset-control.tgz) that is has signed identifying the terminal(s) to which it applies.

## Using the CRT Reset Download <a href="#subsec_crtreset_using" id="subsec_crtreset_using"></a>

The downloadable file can be transferred by any of the usual methods, e.g. network, serial or USB download. When the terminal processes the downloadable file, the OS and control file bundles and packages are authenticated and installed. The terminal restarts and certificate deletion proceeds as follows:

1.  Delete the CRTRESET bundles and packages. Whether or not it succeeds, CRTRESET will not run again without a fresh download.
2.  Check that CRTRESET.SYS exists in DRAM (it means that it was authenticated), and is in the correct format. If it is not found, not authenticated, or not valid, skip to Step 8.
3.  Verify the terminal serial number. If it does not match any value specified in CRTRESET.SYS, skip to Step 8.
4.  Remove all customer keys.
5.  Delete all customer files, packages and bundles in DRAM and FLASH memory for all users (usr1 through usr16).
6.  Reset all SYSMODE system and user passwords to their pre-expired default values.
7.  Remove Feature Enablement (FE) license files.
8.  Prune the application and RKL partitions of the certificate tree. Note that this removes ALL user-downloaded certificates, including group 1-16 certificates for VSS scripts. It removed unused and duplicate KLD & WK certificates.
9.  Delete the customer's SSL passphrase files, for users 1 to 9.
10. Report results in a log file.
11. Reboot the system.

# Status Log and Codes <a href="#sec_crtreset_status_and_logs" id="sec_crtreset_status_and_logs"></a>

CRTREST does not display any status message on the terminal screen.

To check the removal of the customer certificates, the operator can display the VeriShield certificate tree from system mode (menu Home \> Security \> VeriShield Tree).

CRTRESET also outputs logs messages in a file named crtreset.log in the /mnt/flash/logs/system directory. This file is exported to external storage along with all the other logs. At the login screen, press the \[X\] key to bring the menu, connect a USB stick to the terminal and select 3 \"Transfer Logs\". The TGZ file containing logs and system information will be created and can be analyzed on PC.

A typical /mnt/flash/logs/system/crtreset.log will look like the following:

``` fragment
Nov 20 13:17:07 Trident authpriv.notice crtreset: ~~SECLOG~~ Running CRTRESET v2.2.2
Nov 20 13:17:07 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: MIB serial number set: 999-999-999
Nov 20 13:17:07 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: ERROR - No matching serial number
Nov 20 13:17:07 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Finalize: Code=-4 Line=0
```

Or

``` fragment
Nov 20 13:07:36 Trident authpriv.notice crtreset: ~~SECLOG~~ Running CRTRESET v2.2.2
Nov 20 13:07:36 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: MIB serial number set: 999-999-999
Nov 20 13:07:36 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Serial number match!
Nov 20 13:07:36 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Removing all customer keys
Nov 20 13:07:37 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Removing all user files
Nov 20 13:07:38 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Removing SSL passphrase files
Nov 20 13:07:38 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Resetting passwords to pre-expired default values
Nov 20 13:07:38 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Remove Feature Enablement license file
Nov 20 13:07:39 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Pruning certificate tree up to application partition
Nov 20 13:07:39 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Removed customer sponsor certificate
Nov 20 13:07:39 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Removing WK certs from certificate tree
Nov 20 13:07:39 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Removed RKL ENC CA certificates
Nov 20 13:07:39 Trident authpriv.notice crtreset: ~~SECLOG~~ CRTRESET: Finalize: Code=0 Line=0
```

The last line will include a status code and a line number. Success is reported with a code 0. An error condition is reported with a negative number:

| Error code | Description |
|----|----|
| <p>-1</p> | <p>CRTRESET.SYS file not found</p> |
| <p>-2</p> | <p>CRTRESET.SYS file not authenticated</p> |
| <p>-4</p> | <p>MIB serial number is invalid or does not match in any in CRTRESET.SYS</p> |
| <p>-5</p> | <p>Formatting error in CRTRESET.SYS at the given line number</p> |

{% hint style="info" %}
\[unsupported block\]
{% endhint %}

# Instruction <a href="#sec_crtreset_user_instructions" id="sec_crtreset_user_instructions"></a>

The sample CRTRESET package should be updated: the \"crtreset-control\" bundle content should be changed - a correct Serial Number(s) needs to be added to the CRTRESET.SYS file.

The updated package then should be user-signed using the \"File Signing Tool (FST)\" on ADK 4.7 and older releases or the \"Online Signing Portal\" on ADK 4.8 and newer releases.

{% hint style="info" %}
UX (VOS1) devices which are running on ADK 4.8 and newer releases, should be still signed with the File Signing Tool.
{% endhint %}

# Reseting terminal but keeping sponsor certificate <a href="#sec_crtreset_keeping_sponsor" id="sec_crtreset_keeping_sponsor"></a>

There is also a modified version of the crtReset available that keeps sponsor certificates. This version is available by request from the Support Team.
