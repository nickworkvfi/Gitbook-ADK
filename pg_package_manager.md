---
title: Package Manager
---

# Package Manager

# Preface

This document is for programmers and users who want to understand how to install and use Verifone Package Manager application. Package Manager Tool is supposed to be used with ADK 4.7 and older ADK lines. For ADK 4.8 and newer use the [Packman Tool](packman_users_guide.md).

# Overview

Package Manager is a Windows-based tool used to create SW bundles to install them on Verifone terminals. The Package Manager has a built-in interaction with a [File Signing Tool (FST)](pg_fst.md).

# Installation and Set-up

1. Install Package Manager (you can find the latest installation file on DevNet under "Downloads/Application Development Kit (ADK) Downloads/Additional Development Tools & Utilities")
2. Run the setup file and follow the wizards to complete the installation. During the installation wizard, it would request for "FST.exe path". [File Signing Tool (FST)](pg_fst.md) must already be installed.

3. Documentation on the Package manager and security system for VOS and VOS2 is contained in the Help for the Package manager: ![package_manager_help.png](.//package_manager_help.png)

Package types are also described here: [Package Format].

# Signing Bundles in Package Manager

1. Run [File Signing Tool](pg_fst.md) as an administrator.
2. Login to both users.
3. Select "Start Signing Service".
4. Select "Secured" (if the target device is production mode).
5. Enter Password for the card twice for the users logged in above.
6. Now run the Package Manager application.
7. Browse and select the package: ![package_manager_grab_file.png](.//package_manager_grab_file.png)
8. Click on "Validate".
9. Click "OK" (unless there are errors).
10. Click "Rebuild Package". A new window "Download Package Build Window" will be opened: ![package_manager_download_window.png](.//package_manager_download_window.png)
11. Select "Sign With a Pin Card" for a production mode terminal.
12. Click "Auto Build Bundle(s)". This will sign & re-tar the package.
13. Package is now signed. Store it in the desired location.

It's important to note that there are two signing stages: one for the packages and one for the bundle, so there are two invocations of the File Signing Tool.

Checklist for using the Package Manager:

- Make sure all executables have the "sign" checkbox checked. This includes libraries (.so files) and executeables. You can sign resources as well. Some applications are checking resource signatures before using them.
- Make sure all permissions are set correctly. The container must have higher or the same permission than the items inside it. To see the permissions on the container (bundle, package, folder) right-click on the container and select chmod.
- Make sure you are signing only "usr" tab, "os" signing is internal only.

---

Updated on 2025-06-17 at 11:52:27 +0100
