---
hidden: true
title: Netloader/Zontalk
---

Netloader and Zontalk are two protocols for downloading software to a terminal.

Netloader uses TCP for transferring data and Zontalk uses a serial port. This package provides APIs to create a Netloader server or client and a Zontalk server.

# Netloader Server <a href="#netloader_server" id="netloader_server"></a>

The server is started using <a href="netloader_2include_2netloader_8h.md#ad1c52953b207d5e2120b5ae5ff8cf92b">netloader_start()</a>. This starts a background thread which implements the server. When software is to be installed, a callback is invoked which provides names to the downloaded files. The server can be stopped using <a href="netloader_2include_2netloader_8h.md#a3b10a600fb356303f94441e8b36f6441">netloader_stop()</a>.

The server code can be accessed via a C API and is contained in libnetloader.so.

# Netloader Client <a href="#netloader_client" id="netloader_client"></a>

A netloader client API is provided as C++ API. It is implemented in the ::NetLoaderClient class. The main functionality is to send data using sendFile.

The C++ API is contained in libnetloader.so

# Zontalk Server <a href="#zontalk_server" id="zontalk_server"></a>

The server is started using <a href="netloader_2include_2zontalk_8h.md#ae82bb76dbde2d2bff589b145656f9413">zontalk_start()</a>. This starts a background thread which implements the server. When software is to be installed, a callback is invoked which provides names to the downloaded files. The server can be stopped using <a href="netloader_2include_2zontalk_8h.md#a2759e0db7fe364e7c010c58b2b4efd58">zontalk_stop()</a>.

The server code can be accessed via a C API and is contained in libzontalk.so.
