---
hidden: true
title: Package Signing Tools
---

# Preface <a href="#sec_package_signing_preface" id="sec_package_signing_preface"></a>

This document contains the summary description of Package Signing Tools.

# Overview <a href="#sec_package_signing_overview" id="sec_package_signing_overview"></a>

Download files are compressed packages to load content into a terminal and should be signed prior to the installation. Operating system and middleware files (e.g. OS load packages, ADK integration packages) are pre-signed by Verifone Sponsor. User applications, Configuration packages, etc. must be signed with a Customer Sponsor card before installing on Verifone Terminal. See the <a href="pg_all_packages.md">ADK packages and available download files</a> chapter for VOS2 and the <a href="pg_vos3_architecture.md#vos3_packages_and_installation">VOS3 Packaging Structure</a> for a detailed description of download files.

{% hint style="info" %}
If the Sponsor certificate of the package differs from the Sponsor certificate on the terminal, the file can\'t be installed. The error message appears on the terminal screen during install; error logs are stored on the device (/mnt/flash/logs/system/secins.log).
{% endhint %}

The file can be signed using

- <a href="pg_fst.md">File Signing Tool (FST)</a> File Signing Tool (FST)
- [File Signing Portal](#subsec_package_signing_fsp) File Signing Portal

## File Signing Tool (FST) <a href="#subsec_package_signing_fst" id="subsec_package_signing_fst"></a>

VeriShield File Signing Tool (FST) is the tool used to sign Software installation and configuration packages prior to installation on a Verifone terminal. The FST tool is for Windows only and drives the signature process through a Graphical User Interface (GUI) in English. See the <a href="pg_fst.md">File Signing Tool</a> for a detailed description of FST installation, set-up, and functionality.

### Warning

The FST is offered for use on Trident devices (ADK 4.4 and upper), and on Engage devices that have ADK 4.4, 4.6, or 4.7. On Engage devices which has ADK 4.8 and upper ADK version, the Online Signing Portal should be used instead.

## File Signing Portal <a href="#subsec_package_signing_fsp" id="subsec_package_signing_fsp"></a>

Verifone File Signing (VFS) online portal provides the ability to sign customer application files for Verifone's hardened Android Platforms including Carbon Mobile 5 (CM5), M440, and Trinity. It supports also Engage application signing starting with ADK 4.8.x and the VOS3 SW shouldbe only signed online.

VFS provides user management, auditability, and dual control for sensitive functions including user management and signing approval functions. Physical signing smartcards are not needed to sign a file via the File Signing Portal.

VFS provides Dual Control for Signing Operation. When an APK is to be signed, at least two different Security Officers will be required to complete the signing operation.
These two users must approve the signing operation before a signature is applied by the VFS system.

## File Signing Portal known limitations <a href="#subsec_package_signing_fsp_kl" id="subsec_package_signing_fsp_kl"></a>

1.  \'0.optim\' directory issue
    - Cause of issue: An optimization directory in dlfile has been added for improving installation speed on devices. File Signing Portal does not allow directories at the root of a dlfile.
    - Workaround: Remove the \"0.optim\" directory from the dlfile before uploading to File Signing portal. Removing this directory is safe and does not impact the correct signing, packaging and installation on device.
2.  \'.\' directory issue
    - Cause of issue: The File Signing Portal is recursively trying to resign any resource tar/tgz file that is part of the content of a package which is not compressed. dlfile.tgz -\> bundle.tgz -\> package.**tar** -\> some_resource.tar/tgz. As a consequence of this attempt, the package.tar file is broken in its structure and contains a \".\" entry which does not relate to the rest of the entries. This causes Secure Installer to fail installing the package.
      - Workaround: Workaround is to compress the package: dlfile.tgz -\> bundle.tgz -\> package.**tgz** -\> some_resource.tar/tgz
3.  tar package with dlfile as content
    - Cause of issue: When a package is not compressed, the File Signing Portal tries to recursively sign the dlfile that is embedded within the package and results in undefined behaviour.
    - Workaround: Workaround is to compress the package: dlfile.tgz -\> bundle.tgz -\> package.**tgz** -\> some_resource.tar/tgz
4.  \'Package\' in bundle control file
    - Cause of issue: Secure Installer allows \"Name\" or \"Package\" to be used in bundle control file to identify bundle name. The File Signing Portal does not support the use of \"Package\" entry in control file of a bundle. As a consequence, the File Signing Portal keeps signing card certificates and does not add signing portal certificates to the bundle.
    - Workaround: Change control file of bundle with \"Name\" instead of \"Package\" to provide the bundle name.
5.  \'Name\' in package control file
    - Cause of issue: Secure Installer allows \"Package\" or \"Name\" to be used in package control file to identify package name. The File Signing Portal does not support the use of \"Name\" entry in control file of a package. As a consequence, the File Signing Portal will add signing portal certificates to the package in crt directory.
    - Workaround: Change control file of package with \"Package\" instead of \"Name\" to provide the package name.
