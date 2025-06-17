---
title: ADK-AST Programmers Guide

---

# ADK-AST Programmers Guide




# Preface

This guide provides information of the functionality and usage of ADK Anti Skimming Tool (AST) application.


## Audience

This document is meant for programmers who want to understand and use ADK Anti Skimming Tool application.


## Organization

This guide is organized as follows:

[Chapter 1, Introduction]: Introduction to ADK-AST.

[Chapter 2, Getting Started]: Explains concept.

[Chapter 3, Programming]: Presents common uses.

[Chapter 4, System Setup and Requirements]: Environment setup, installation and dependencies to other components.

[Chapter 5, Troubleshooting]: Solutions for possible issues.

[Appendix: Glossary]: Listing and definitions of various acronyms and terms


# Introduction

Anti-Skimming device is implemented to perform distance measurment between card reader slot and surface of keypad to detect overlay that may occur in case of abuse of the terminal.


# Getting Started


## Concepts

AST (Anti-Skimming Tool) is an ADK application which interacts with anti-skimming detection device. Anti-Skimming device is realised as a Probe (card) that can be inserted in card reader. Anti-Skimming tool is supported by Engage multi-line devices (e.g. Mx925, Mx915, M440, M425, M400) and can be delivered as:

* AST - as ADK component
* or ASTS - Standalone version (by loading Anti Skimming Tool Standalone (ASTS) signed application and VHQ Agent).

An operator (a person who checks terminals with AST Probe) initiates Anti-Skimming test application on the terminal and inserts the Probe. This Probe checks card slot thickness and reports a result to the terminal. Terminal saves every test result in a separate json encoded report file. Report file is stored in /home/sys13/logs/ast folder. File name is identical to timestamp. File example: /home/sys13/logs/ast/7001076.txt Only last twenty reports will be stored on filesytem. After test execution, created log files are sent to VHQ/VeriCare system. An Estate Owner (person who reviews reports from Anti-Skimming Tool), has an acces to VHQ/VeriCare dashboard of anti-skimming checks.

The Probe has built-in LED indicators that provides a result of test status:


| Led color  | Description   |
|  -------- | -------- |
| white  | Power   |
| green  | Pass test   |
| red  | Fail test   |



### Log file content


| Field  | Type  | Description   |
|  -------- | -------- | -------- |
| description  | string  | Status description   |
| probe_sn  | string  | Anti skimming device serial number   |
| return_code  | int  | Code returned by libCR-Skimmer   |
| status  | int  | Error code   |
| terminal_sn  | string  | Terminal serial number   |
| timestamp  | int  | Unix timestamp   |
| vhq_status  | int  | Need to clarify   |



### Test result status


| Status  | Description  | Anti-Skimming device led color   |
|  -------- | -------- | -------- |
| 0  | No overlay detected  | Green   |
| 1  | Probe is not detected  |  |
| 2  | Probe communication error  |  |
| 3  | Overlay detected  | Red   |



### Return_code values


| Code  | Value  | Description   |
|  -------- | -------- | -------- |
| SKIMRC_Success  | 0  | Operation was successful   |
| SKIMRC_Failure  | 1  | Operation failed   |
| SKIMRC_Error_Power_Action  | 2  | Power-Up operation failed   |
| SKIMRC_Error_Not_Supported  | 3  | Skimmer probe type not supported   |
| SKIMRC_Error_BadParam  | 4  | A function parameter is invalid   |
| SKIMRC_Error_Protocol  | 5  | Communication error with skimmer probe   |



### Report file example



```cpp
{"description":"No overlay detected","probe_sn":"A01E900714241000317C57A000A0000019","return_code":0,"status":0,"terminal_sn":"275-159-718","timestamp":1597099642,"vhq_status":5010} 
```


### Container diagram for Anti-Skimming Tool

![ast_top_level_context_diagram.png](.//ast_top_level_context_diagram.png)MAC desktop![ast_top_level_context_diagram.png](.//ast_top_level_context_diagram.png)


### Top level Context diagram for Anti-Skimming Tool

![ast_container_diagram.png](.//ast_container_diagram.png)![ast_container_diagram.png](.//ast_container_diagram.png)


### Component diagram for Anti-Skimming test Application

![ast_component_diagram_test_tool_app.png](.//ast_component_diagram_test_tool_app.png)![ast_component_diagram_test_tool_app.png](.//ast_component_diagram_test_tool_app.png)


## Upload to VHQ Server

Anti-Skimming application calls VHQ Agent API, after the Anti-Skimming device interaction log file is generated. VHQ Agent generates a new event message, based on the data passed by the Anti-Skimming test application and send it to the server. VHQ Server receives the event message, parse it and display in the VHQ UI.

![ast_upload_to_vhq_server.png](.//ast_upload_to_vhq_server.png)![ast_upload_to_vhq_server.png](.//ast_upload_to_vhq_server.png)


# Environment setup, installation and dependencies to other components


## Setup and installation

AST release consists of multiple packages:


| Package name  | Description   |
|  -------- | -------- |
| dl.ast-3.71.6.tgz  | AST application (ADK environment)   |
| dl.asts-3.71.6.tgz  | AST application (standalone)   |
| dl.ast-remove-3.71.6.tgz  | AST removal package   |
| dl.asts-remove-3.71.6.tgz  | AST removal package   |


Removal packages are not needed for regular use. They are needed only if you need to downgrade AST version


AST requires ADK. Available as part of these ADK deliveries - ADK-4.4.23, ADK-4.6.12, ADK-4.7.5.

Supported AST languages:


| Language  | Catalogue File   |
|  -------- | -------- |
| English  | en-US.ctlg   |
| French  | fr-FR.ctlg   |


The default AST language is English.

At the first launch, AST will request to select language after installation. AST memorise this selection for the following usage and don't ask for language again. To change the language one more time need reinstall the AST bundle.


## AST comparison with ASTS:


| AST  | ASTS   |
|  -------- | -------- |
| GUI interface  | No GUI interface   |
| Runs as system user (sys13)  | Runs as system user (sys12)   |
| Cleaner approach to killing applications  | No cleaner approach to Killing applications   |
| All dependencies are already included in ADK release  | Very limited dependencies to V/OS APIs   |
| Available as part of ADK  | Does not require ADK, can run on old V/OS releases   |
| Does not require VHQ agent update  | Requires VHQ agent update   |


**AST****dependencies:**

* GUI interface
* MAC
* VHQ Agent

**ASTS****dependencies:**

* VHQ currently supports two release lines that support ASTS:
    * version 2.17.20 and up
    * version 3.2.6 and up
* CR-Skimmer library (dl.skimmerdetect-1.0.2-4)


# Programming


## Common uses


### AST usage in ADK environment



* Press X+3 to get to ADK desktop
* Press AST icon on ADK desktop
* ADK will stop running payment applications and initiate communication with probe
* AST app will wait for probe for 30 seconds
* If probe is inserted AST will generate a report and store it on file system in /home/sys13/logs/ast folder.
* It will also pass same report to VHQ agent
* After that ADK applications will be restarted


### ASTS usage



* ASTS boots at system startup. It sits in a background and awaits for specific key combination - X + 0 + 2 (Red key + Green key + 2).
* When user presses this combination, ASTS will start sysmode, which results in stopping payment application.
* Then ASTS will initiate communication with the probe.
* If probe is inserted AST will generate a report and store it on file system in /home/sys12/logs/asts folder.
* It will also pass same report to VHQ agent.
* After that it will restart applications.


# Troubleshooting


## FAQ

Q: What is the difference between AST and ASTS?

A: AST application is designed to work in ADK environment. ASTS - is stand alone version, which doesn't require ADK.


## Logging

AST is using ADK-LOG component for logging. Please refer to the ADK-LOG documentation for details. Used logging channels:


| Logging channel  | Description   |
|  -------- | -------- |
| AST  | [AST application logs] |



## Debugging


# Appendix: Glossary


| Term  | Description   |
|  -------- | -------- |
| ADK  | Application Development Kit   |
| API  | Application Program Interface   |
| AST  | Anti-Skimming Tool   |
| ASTS  | Anti-Skimming Stand alone Application   |
| GUI  | Graphical User Interface   |
| UI  | User Interface   |
| OS  | Operating System   |
| HTML  | Hypertext Markup Language   |
| JSON  | JavaScript object notation   |
| HW  | Hardware   |
| Sysmode  | V/OS system application.   |

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
