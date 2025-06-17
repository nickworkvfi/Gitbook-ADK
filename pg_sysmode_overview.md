---
title: System Mode Overview

---

# System Mode Overview




# Preface

This page is an overview of different System Modes provided on Verifone devices.


# Overview

The System Mode is used to configure the terminal, download the application, perform routine diagnostic tests and terminal maintenance.

The System Mode is available on VOS1 and VOS2 devices only. On VOS3 the MAC Control Panel is used as a system configuration tool.


Use the System Mode functions to perform the related tasks:

* Application programmers: Configure a development terminal, download development versions of the application program, then test and debug the application.
* Deployers of terminals to end-user sites: Perform the specific tasks required to deploy a new terminal on-site, which includes configuring the terminal, downloading the application software, and testing the terminal prior to deployment.
* Terminal administrators or site managers: Change passwords, perform routine tests, perform terminal maintenance, and configure the terminals for remote diagnostics and downloads.

The functionality of System Mode differs and depends on the device model.


## Engage System Mode (FLTK)

FLTK System Mode is available on Engage (VOS2) terminals. See [FLTK System Mode](pg_sysmode_fltk.md#page-pg-sysmode-fltk) for more details.

The System Mode operations can be categorized as:

* Local operations: Addresses a stand-alone unit and do not require communication or data transfers between the unit and another terminal or computer. Perform local System Mode operations to configure, test and display the information about the terminal.
* Remote operations: Requires communication between the unit and a host computer (or another terminal) to perform remote System Mode operations to download application software to the terminal or download from the VHQ or from another download host.


## Remote System Mode

Carbon terminals(CM5) use Remote System Mode. Android client displays the FLTK System Mode UI from the Engage device (JSON based interface).


## Ux System Mode

Ux POS terminals use a specific Ux System Mode that can be accessed only by pressing a special physical button on the surface of the device. An application is based on black and white UI framework "magic-fusion". Powers all unattended terminal series with black and white screen. Is usually used to support low resolution screen. 

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
