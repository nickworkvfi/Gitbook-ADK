---
title: Netloader/Zontalk

---

# Netloader/Zontalk



Netloader and Zontalk are two protocols for downloading software to a terminal.

Netloader uses TCP for transferring data and Zontalk uses a serial port. This package provides APIs to create a Netloader server or client and a Zontalk server.


# Netloader Server

The server is started using [netloader_start()](netloader_2include_2netloader_8h.md#function-netloader-start). This starts a background thread which implements the server. When software is to be installed, a callback is invoked which provides names to the downloaded files. The server can be stopped using [netloader_stop()](netloader_2include_2netloader_8h.md#function-netloader-stop).

The server code can be accessed via a C API and is contained in libnetloader.so.


# Netloader Client

A netloader client API is provided as C++ API. It is implemented in the ::NetLoaderClient class. The main functionality is to send data using sendFile.

The C++ API is contained in libnetloader.so


# Zontalk Server

The server is started using [zontalk_start()](netloader_2include_2zontalk_8h.md#function-zontalk-start). This starts a background thread which implements the server. When software is to be installed, a callback is invoked which provides names to the downloaded files. The server can be stopped using [zontalk_stop()](netloader_2include_2zontalk_8h.md#function-zontalk-stop).

The server code can be accessed via a C API and is contained in libzontalk.so. 

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100
