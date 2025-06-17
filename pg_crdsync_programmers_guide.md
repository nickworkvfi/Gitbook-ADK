---
title: ADK-CRD-SYNC Programmers Guide

---

# ADK-CRD-SYNC Programmers Guide




# Preface

The CRD-SYNC library is an optional component supporting reading and writing of synchronous contact chip cards. 

# Introduction

The operating system of VOS and VOS2 terminals supports handling of synchronous contact chip cards by means of L1 libraries. Based on this the so called "Card Reader Synchronous" was built. This shared library is wrapped by ADK-CRD-SYNC.


# Getting Started



* Analyze which preconditions are required: [System Setup and Requirements]
* Acquire synchronous contact test cards. 
* Study the sample code: [Sample Code]


# Programming


## API Functions



* [crdSync_Version(char *version, unsigned char len)](crdsync__client_8h.md#function-crdsync-version)
* [crdSync_SetTraceCallback(CRDSYNC_TraceCallback cbf, void *cb_data)](crdsync__client_8h.md#function-crdsync-settracecallback)
* [crdSync_Open(unsigned Options)](crdsync_8h.md#function-crdsync-open)
* [crdSync_Close(unsigned Options)](crdsync_8h.md#function-crdsync-close)
* [crdSync_IsCardPresent(void)](crdsync_8h.md#function-crdsync-iscardpresent)
* [crdSync_PowerUp(int CardType, unsigned char AtrBuf[], unsigned char *AtrLen)](crdsync_8h.md#function-crdsync-powerup)
* [crdSync_PowerDown(void)](crdsync_8h.md#function-crdsync-powerdown)
* [crdSync_ReadData(int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)](crdsync_8h.md#function-crdsync-readdata)
* [crdSync_WriteData(int MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)](crdsync_8h.md#function-crdsync-writedata)
* _ SLE cards: _
    * [crdSync_PresentSecretCode(const unsigned char PinCode[], unsigned short nSize)](crdsync_8h.md#function-crdsync-presentsecretcode)
    * [crdSync_ReadSecurityMem(unsigned char RxBuff[], unsigned char * BufLen)](crdsync_8h.md#function-crdsync-readsecuritymem)
    * [crdSync_WriteSecurityMem(const unsigned char TxBuf[], unsigned short TxLen)](crdsync_8h.md#function-crdsync-writesecuritymem)
    * _ SLE4442: _
        * [crdSync_ReadProtectionMem(unsigned char RxBuf[])](crdsync_8h.md#function-crdsync-readprotectionmem)
        * [crdSync_WriteProtectionMem(unsigned short MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)](crdsync_8h.md#function-crdsync-writeprotectionmem)
    * _ SLE4428: _
        * [crdSync_ReadWithProtectionBit(int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)](crdsync_8h.md#function-crdsync-readwithprotectionbit)
        * [crdSync_WriteWithProtectionBit(int MemoryAddress, unsigned char TxBuf[], unsigned short TxLen)](crdsync_8h.md#function-crdsync-writewithprotectionbit)


## Sample Code

[C++ example source code](crdsync-demo_8cpp-example.md#example-crdsync-demo.cpp)


# System Setup and Requirements



* No support for Verix platform.
* ** Build Your Application **
    * use delivery package **crdsync-vos(2)-dev-x.x.x-x.zip**
    * include header _[crdsync.h](crdsync_8h.md#file-crdsync.h)_
    * link against _libcrdsync.so_
* ** Terminal loading **
    * "Synchronous Card API Library" must be loaded to the terminal: 
** dl.vertexreadersync-x.x.x-xxx.tar**, 

 see [https://artifactory.verifone.com/artifactory/RMS_Release_CLW/ADK/CR-SYNC](https://artifactory.verifone.com/artifactory/RMS_Release_CLW/ADK/CR-SYNC)
    * Load ADK-CRD-SYNC component to terminal: 
** dl.libcrdsync-x.x.x-xxx.tar**, 

 see [https://artifactory.verifone.com/artifactory/RMS_Release_CLW/ADK/CRD-SYNC](https://artifactory.verifone.com/artifactory/RMS_Release_CLW/ADK/CRD-SYNC)
* For client/server see [Client/Server usage]


# Troubleshooting



* ** Synchronous Card API Library **

 Check presence of needed component _dl.vertexreadersync-x.x.x-xxx.tar_. 
* ** Trace **

 Activate the trace with help of [crdSync_SetTraceCallback()](crdsync_8h.md#function-crdsync-settracecallback). 

 Provide the resulting output to ADK team for analysis.


# Appendix


## Client/Server usage

ADK-CRD-SYNC delivery includes client/server components. 

 These may be needed under special project requirements, e.g. the so called "two-piece-solution". 

 In client/server architecture the application process links to **libcrdsyncclient**. 

 A separate process (**crdsyncserver**) links the libcrdsync. 

 Each command request and response is serialized and transferred via IPC between application and server process.


### Client API

The API is very similar to [API Functions]. 

 All functions have the same names and parameters. But they have one additional parameter "server index" to identify which server to use. 

 There is one additional function to set and connect the servers: 
[crdSync_ConfigureServer()](crdsync__client_8h.md#function-crdsync-configureserver)



* [crdSync_Version(char *version, unsigned char len)](crdsync__client_8h.md#function-crdsync-version)
* [crdSync_SetTraceCallback(CRDSYNC_TraceCallback cbf, void *cb_data)](crdsync__client_8h.md#function-crdsync-settracecallback)
* [crdSync_Open(unsigned char server_idx, unsigned Options)](crdsync__client_8h.md#function-crdsync-open)
* [crdSync_Close(unsigned char server_idx, unsigned Options)](crdsync__client_8h.md#function-crdsync-close)
* [crdSync_IsCardPresent(unsigned char server_idx)](crdsync__client_8h.md#function-crdsync-iscardpresent)
* [crdSync_PowerUp(unsigned char server_idx, int CardType, unsigned char AtrBuf[], unsigned char *AtrLen)](crdsync__client_8h.md#function-crdsync-powerup)
* [crdSync_PowerDown(unsigned char server_idx)](crdsync__client_8h.md#function-crdsync-powerdown)
* [crdSync_ReadData(unsigned char server_idx, int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)](crdsync__client_8h.md#function-crdsync-readdata)
* [crdSync_WriteData(unsigned char server_idx, int MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)](crdsync__client_8h.md#function-crdsync-writedata)
* _ SLE cards: _
    * [crdSync_PresentSecretCode(unsigned char server_idx, const unsigned char PinCode[], unsigned short nSize)](crdsync__client_8h.md#function-crdsync-presentsecretcode)
    * [crdSync_ReadSecurityMem(unsigned char server_idx, unsigned char RxBuff[], unsigned char * BufLen)](crdsync__client_8h.md#function-crdsync-readsecuritymem)
    * [crdSync_WriteSecurityMem(unsigned char server_idx, const unsigned char TxBuf[], unsigned short TxLen)](crdsync__client_8h.md#function-crdsync-writesecuritymem)
    * _ SLE4442: _
        * [crdSync_ReadProtectionMem(unsigned char server_idx, unsigned char RxBuf[])](crdsync__client_8h.md#function-crdsync-readprotectionmem)
        * [crdSync_WriteProtectionMem(unsigned char server_idx, unsigned short MemoryAddress, const unsigned char TxBuf[], unsigned short TxLen)](crdsync__client_8h.md#function-crdsync-writeprotectionmem)
    * _ SLE4428: _
        * [crdSync_ReadWithProtectionBit(unsigned char server_idx, int MemoryAddress, unsigned char RxBuf[], unsigned short RxLen)](crdsync__client_8h.md#function-crdsync-readwithprotectionbit)
        * [crdSync_WriteWithProtectionBit(unsigned char server_idx, int MemoryAddress, unsigned char TxBuf[], unsigned short TxLen)](crdsync__client_8h.md#function-crdsync-writewithprotectionbit)


### Client/Server Delivery Packages

To use client/server it's necessary to

* build your application
    * include header _[crdsync_client.h](crdsync__client_8h.md#file-crdsync-client.h)_
    * link against _libcrdsyncclient.so_
    * these components are part of delivery package _crdsync-vos(2)-dev-x.x.x-x.zip_
* load client and server to terminal:
    * _dl.libcrdsyncclient-x.x.x-x.tar_
    * _dl.crdsyncserver-x.x.x-x.tar_
    * these components are part of delivery package _crdsync-vos(2)-load-x.x.x-x.zip_

-------------------------------

Updated on 2025-06-17 at 11:52:28 +0100
