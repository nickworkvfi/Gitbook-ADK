---
title: GDA Programmers Guide

---

# GDA Programmers Guide




# Introduction


## Purpose

This guide provides information on the usage of the Diagnostic Application.


## Hardware Support

The Diagnostic application is currently supported on Engage devices - V200c, V400M, V240M.


## Organization

This guide is organized as follows: 

[Chapter 1, Overview]: Provides an overview of the Diagnostic application. 



[Chapter 2, Help and Tamper Information]: Guides in populating the help information. 



[Chapter 3, Using the Diagnostic application by payment application]: Gives list of APIs that the payment application can use to display diagnostics.


# Overview

This chapter presents a short introduction to the Diagnostic application


## Diagnostic Main Screen

The Diagnostic application is a tool which provides basic diagnosis of componenents. This application can be invoked from the MAC screen and also by any payment application.

The landing page or the Main screen consists of the traffic light status indications for different componenents. Currently, the diagnostic application supports only Battery and Memory Components. This page also consists of the Battery temperature and charge level along with number of Contact,Contactless and MSR transactions performed on the terminal. Below is the sample landing page.


|  |
|  -------- |
| ![LandingPage.png](.//LandingPage.png)![LandingPage.png](.//LandingPage.png)![LandingPage.png](.//LandingPage.png)![LandingPage.png](.//LandingPage.png) |


In case Device is tampered, the landing page will contain a QR code with useful URLs. Below is the sample landing page in case device is tampered.


|  |
|  -------- |
| ![Tampered.png](.//Tampered.png)![Tampered.png](.//Tampered.png)![Tampered.png](.//Tampered.png)![Tampered.png](.//Tampered.png) |


The detail diagnostics can be navigated from the landing page on Enter button. The detail diagnostics contains widgets for each component information. Below are the screenshots for some of the widgets.


| Summary  | Device  | Battery  | Memory  | Help   |
|  -------- | -------- | -------- | -------- | -------- |
| ![Summary.png](.//Summary.png)![Summary.png](.//Summary.png)![Summary.png](.//Summary.png)![Summary.png](.//Summary.png) | ![Device.png](.//Device.png)![Device.png](.//Device.png)![Device.png](.//Device.png)![Device.png](.//Device.png) | ![Battery.png](.//Battery.png)![Battery.png](.//Battery.png)![Battery.png](.//Battery.png)![Battery.png](.//Battery.png) | ![Memory.png](.//Memory.png)![Memory.png](.//Memory.png)![Memory.png](.//Memory.png)![Memory.png](.//Memory.png) | ![Help.png](.//Help.png)![Help.png](.//Help.png)![Help.png](.//Help.png)![Help.png](.//Help.png) |


In case of QR generated screens, like Tamper and Help screens, there is a provision to enlarge the QR code for better scanning. Use * and # keys to magnify and close respectively. Below is the sample magnified QR code screen for the Tamper QR.


|  |
|  -------- |
| ![TamperPopout.png](.//TamperPopout.png)![TamperPopout.png](.//TamperPopout.png)![TamperPopout.png](.//TamperPopout.png)![TamperPopout.png](.//TamperPopout.png) |


The default language supported is English. There is no multi-language support currently.


## Configuration for determining the component status.

We use the following default configuration for determining the status. The configuration is available in the gda-config.json file which will be packaged along with the diagnostic application. Note that these values cannot be modified by the payment application.



```cpp
{
    "DetailMenuEnabled": 1,                         //To enable/disable detailed diagnostics. Not used currently
    "IdleTimeout": 30,                              //Time out to refresh the screens
    "widgets": [ 
                {
                    "name": "summary",              //Summary widget
                    "Enabled": 1,                   //Enable/Disable summary widget. Not used currently
                    "id":0,
                },
                {
                    "name": "device",                //Device Details widget
                    "Enabled": 1,
                    "id":1,
                },
                {
                    "name": "battery",              //Battery widget
                    "Enabled": 1,
                    "id":2,
                    "statusThresholdValues": {
                        "lowThresholdPercent": 10,  // Less than the lowThresholdPercent - Display red  
                        "medThresholdPercent": 60,  // Less than the medThresholdPercent - Display amber     
                        "highThresholdPercent": 100 // greater than the medThresholdPercent - Display green     
                    }
                },
                {
                    "name": "memory",               //Memory widget
                    "Enabled": 0,
                    "id":3,
                    "statusThresholdValues": {
                        "lowThresholdPercent": 10,
                        "medThresholdPercent": 60,
                        "highThresholdPercent": 100
                    }
                },
                {
                    "name": "help",
                    "Enabled": 1,
                    "id":4,
                },
                {
                    "name": "ethernet",
                    "Enabled": 1,
                    "id":5,
                },
                {
                    "name": "wifi",
                    "Enabled": 1,
                    "id":6,
                },
                {
                    "name": "gsm",
                    "Enabled": 1,
                    "id":7,
                }
        ]
}
```


### Battery

The battery status is determined by battery charge level. The default values are 
| 0-9%   | Red   |
|  -------- | -------- |
| 10-59%   | Amber   |
| 60-100%   | Green   |


Also the coin cell (internal battery) status is determined. The most severity level of Internal and Rechargeable batteries are considered for status. Suppose Internal battery is red status and the Rechargeable battery is green status, we will consider the Battery status as Red.


### Memory

The memory status is determined by the free RAM and Flash available. The default values are 

| 0-9%   | Red   |
|  -------- | -------- |
| 10-59%   | Amber   |
| 60-100%   | Green   |


The most severity level of RAM and Flash are considered for status.


# Help and Tamper information

In case device is tampered, the diagnostic application auto launches and displays the tamper information in form of a QR code on the landing page. The QR code can be scanned by Verifone app or any other mobile app and useful URLs can be retrieved from the QR code.

There is a help widget in the detail menu screens. In this help widget, useful URLs are embeded in to the QR code. The data to display the QR codes and other help information is configured in the below file gda-helpinfo.json. This file can also be provided by any payment application in the path /mnt/flash/etc/config/gda If the file is not provided by the payment application, then the default values will be used.



```cpp
{
    "widget_details":[
    {   
        "id":4,                //Id should not be changed. It reflects HelpInformation
        "icon":"color.png",
        "title":"help_info",
        "qr_code_data": ["http://help.verifonehq.net/faqs/220-troubleshooting/low-battery", "http://help.verifonehq.net/faqs/223-troubleshooting/low-memory"],
        "dynamic_details":[
            {"phone_number": "12345678"},
            {"support_email": "abc@verifone.com"},
            {"suggestion_email": "xyz@verifone.com"}
        ]   
    },
    {
        "id":8,                   //Id should not be changed. It reflects TamperInformation
        "icon":"color.png",       //Not used
        "title":"tamper_info",    //Not used
        "qr_code_data": ["http://help.verifonehq.net/faqs/222-troubleshooting/tampered-device"],  //Tamper information URLs needs to be given here
        "dynamic_details":[ 
            {"contact": "12345678"}
        ]
    }
    ]
}
```

The "qr_code_data" needs to be configured by the payment application with all the URLs to be retrieved. The "dynamic_details" of Help Information consists of all the helpinfo like email and phone number. If payment application requires, more entries can be added to this section.

Note that, for tamper, we can display only "contact" information.


# Using the Diagnostic application by payment application

The payment application can load the diagnostic shared library and invoke APIs to display the diagnostics. The following code snippet will help in understanding on how to invoke the APIs. Also note that the payment application needs to backup the GUI settings like ctlg information, font, resource path before invoking diagnostics and restore after. Based on the GUI region used, payment application may need to invoke [vfigui::uiEnterRegion()](namespacevfigui.md#function-uienterregion) and [vfigui::uiLeaveRegion()](namespacevfigui.md#function-uileaveregion) APIs of ADK-GUI.



```cpp
const std::string diagLibraryPath = "/home/sys13/lib/libdiag.so";
void *handle = dlopen(diagLibraryPath.c_str(), RTLD_LAZY);
if (!handle)
{
    //Error
} else
{
    
    typedef int (*diag_show)();
    typedef bool (*isdeviceSupported)();
    
    diag_show diagSym;
    isdeviceSupported modelSupports;

    modelSupports = (isdeviceSupported) dlsym(handle, "isdeviceSupported");
    if (modelSupports && modelSupports())
    {
        //"Device is Supported for Diagnostic App";
    }
    else
    {
        //"Cannot load the symbol - isdeviceSupported";
    }

    diagSym = (diag_show) dlsym(handle, "display_diagnostics");
    if (diagSym)
    {
        diagSym();
    } else
    {
        //"Cannot load the symbol - display_diagnostics";
    }

    dlclose(handle); // close the library
    
}
```

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100
