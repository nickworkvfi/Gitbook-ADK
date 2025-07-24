---
hidden: true
title: Development Toolkit VOS1, VOS2
---

# Preface <a href="#sec_development_toolkit_preface" id="sec_development_toolkit_preface"></a>

This document is for programmers and users who want to set-up the development environment for VOS1 and VOS2 platforms.

# Overview <a href="#sec_development_toolkit_overview" id="sec_development_toolkit_overview"></a>

There is a list of tools that could be used to set-up, develop, build and debug an application.

- [Verifone Development Environment (VDE)](#sec_development_toolkit_vde)
- [Software Development Kit (SDK)](#sec_development_toolkit_sdk)

# Verifone Development Environment (VDE) <a href="#sec_development_toolkit_vde" id="sec_development_toolkit_vde"></a>

Verifone Development Environment (VDE) is an integrated software development environment for VOS1, VOS2, Verix platforms. VDE comes with a set of necessary tools and APIs for application development on Verifone Terminals. With VDE, the application developers can build, compile, sign, package, deploy apps that are agnostic of the OS or Platform or Terminal. VDE uses SCONS build system.

## Features <a href="#subsec_development_toolkit_vde_features" id="subsec_development_toolkit_vde_features"></a>

- **Multiple platform support.** VDE is bundled with toolchains that allow the application developers to build for three platforms (V/OS2, V/OS, Verix).
- **One code base.** The developers can have single codebase and build for all three platforms. This is possible with the help of ADK.
- **ADK/SDK integration.** VDE can be integrated with ADKs and SDKs for all supported platforms.
- **Project templates.** VDE comes with four project templates namely \"Empty Application\", \"Hello World Application\", \"Shared Library\", \"Static Library\".
- **Signing and packaging.** VDE hides all the complications behind signing and packaging, and provides tools and scripts to easily sign and package applications.
- **Deployment.** VDE provides tools to deploy applications to various terminals either through IP or through Serial interface.
- **Debugging.** VDE provides CLI command for debugging with GDB. GDB is provided by corresponding toolchain. Verix is not supported.
- **Logging.** VDE provides the CLI commands for downloading the syslog application log files from the terminal and for streaming the syslog UDP messages from the terminal in real time.
- **Additional Demo Application.** An EMV Demo application for VDE is available in Application Development Kit (ADK) Version 4.4.x package. ADK Package `adk-full-ext-4.4*.zip` contains full VDE project in directory \"\\doc\\vdedemo\\EmvTestApp\\\" with:
  - VDE project file `verifone_application.vproj`
  - VDE build description in `readme_VDE.txt`
  - EMV Demo Application sources and resources for different terminal types

You can find the latest VDE installation file (including the User Guide) on DevNet under Downloads/VDE.

{% hint style="info" %}
ADK and SDKs are not a part of the VDE installer and have to be installed separately.
{% endhint %}

# Software Development Kit (SDK) <a href="#sec_development_toolkit_sdk" id="sec_development_toolkit_sdk"></a>

Software Development Kit (SDK) is the collection of available libraries and header files. Starting from ADK 4.6.2 libraries and headers of each ADK are merged with correspond SDK, but only for VOS2 and VOS3.
