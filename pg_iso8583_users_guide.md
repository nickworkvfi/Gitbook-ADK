---
title: ADK-ISO8583 Programmers Guide

---

# ADK-ISO8583 Programmers Guide




# Preface

ADK-ISO8583 is a library that provides an API for building and parsing ISO8583 messages.


# Introduction

This ADK can be used to build and parse ISO8583 messages including automatic bitmap generation, handling of length indicators and padding as well as integration of TLV buffers.


# Getting Started

Starting point is the header file [dl_iso8583.h](dl__iso8583_8h.md#file-dl-iso8583.h). This declares the class [ISO8583_MSG](class_i_s_o8583___m_s_g.md) which represents an ISO8583 message. When creating an [ISO8583_MSG](class_i_s_o8583___m_s_g.md) object you need to pass a message handler. This message handler contains an ISO handler and an optional array of tag definitions (required if you want to construct ISO8583 messages from TLV buffers). The ISO handler contains an array of field definitions. Each field definition contains a field type (e.g. alphanumeric, numeric, or binary), a field length and a length indicator (e.g. fixed length or variable length with 2 length bytes in BCD format). Let's have a look at the following example: 

```cpp
DL_ISO8583_FIELD_DEF fields[] = { {kDL_ISO8583_BMP,  0, kDL_ISO8583_FIXED },
                                  {kDL_ISO8583_ANS,  3, kDL_ISO8583_FIXED },
                                  {kDL_ISO8583_ANS,  3, kDL_ISO8583_FIXED },
                                  {kDL_ISO8583_ANS, 10, kDL_ISO8583_LLVAR },
                                  {kDL_ISO8583_ANS, 10, kDL_ISO8583_LLVARA},
                                  {kDL_ISO8583_N,    5, kDL_ISO8583_FIXED },
                                  {kDL_ISO8583_N,    5, kDL_ISO8583_FIXED },
                                  {kDL_ISO8583_N,    5, kDL_ISO8583_LLVAR },
                                  {kDL_ISO8583_N,    5, kDL_ISO8583_LLVAR },
                                  {kDL_ISO8583_B,    5, kDL_ISO8583_LLVAR },
                                  {kDL_ISO8583_B,    6, kDL_ISO8583_FIXED },
                                  {kDL_ISO8583_B,    3, kDL_ISO8583_FIXED },
                                  {kDL_ISO8583_B,   16, kDL_ISO8583_LLVAR } };
com_verifone_TLVLite::ConstData tag_amount("\x9f\x02", 2);
com_verifone_TLVLite::ConstData tag_date("\x9A", 1);
com_verifone_TLVLite::ConstData tag_aid("\x9F\x06", 2);
DL_ISO8583_MSG_FIELD_DEF tlvDef[] = { { 10, true, tag_amount },
                                      { 11, true, tag_date },
                                      { 12, true, tag_aid } };
DL_ISO8583_HANDLER iso_handler = { fields, 13 };
DL_ISO8583_MSG_HANDLER msg_handler = { iso_handler, tlvDef, 3 };
ISO8583_MSG msg(&msg_handler);
```

 There are 13 fields defined, the first one is the bitmap field (always length 8, so specified length does not matter). After this there are some alphanumeric, numeric and binary fields with fixed and variable lengths. For fields with variable length the number and format of the length bytes can be specified. These formats are described in [dl_iso8583_common.h](dl__iso8583__common_8h.md#file-dl-iso8583-common.h). The last 3 fields are linked with TLV tags, amount(9F02) and date(9A) have fixed length while AID(9F06) has variable length (up to 16 bytes).

Now the message can be filled with data. This is done by the following functions:

* Set the string "hello" as value of the field with index 3 (alphanumeric with variable length): 

```cpp
ret = msg.SetField_Str(3, "hello");
```

* Set the number 1234 as value of the field with index 8 (numeric with variable length): 

```cpp
ret = msg.SetField_Str(8, "1234");
```

* Set binary data as value of the field with index 9 (binary with variable length): 

```cpp
unsigned char a[] = {0x12, 0x34, 0x56, 0x78};
ret = msg.SetField_Bin(9, a, sizeof(a));
```


The fields which are linked to TLV tags may be filled at once by supplying a TLV buffer that contains all tags: 

```cpp
com_verifone_TLVLite::ConstData tlvBuffer("\x9f\x02\x06\x00\x00\x00\x00\x01\x00\x9A\x03\x16\x11\x14\x9F\x06\x07\xA0\x00\x00\x00\x03\x10\x10", 24);
ret = msg.SetFields_TLV(tlvBuffer);
```

If the field has fixed length and less data is supplied than defined, the field is automatically padded (e.g. with concluding spaces for alphanumeric fields and leading zeros for numeric fields).

After the message object is filled with data, the message itself can be written to a buffer: 

```cpp
unsigned char buf[200];
unsigned short len = 0;
unsigned short errFieldIdx = 0;
ret = msg.Pack(buf, sizeof(buf), &len, &errFieldIdx);
```

 In case of success len contains the length of the message written to buf, in case of error errFieldIdx contains the index of the field that caused the error.

Importing a message from a buffer into a message object is done like this: 

```cpp
ret = msg.Unpack(buf, len);
```

 Use the following functions to retrieve field values from a message object. In case of success ptr points to the field value. 

```cpp
unsigned char *ptr;
unsigned short len;
ret = msg.GetField_Str(3, &ptr);
ret = msg.GetField_Bin(9, &ptr, &len);
```

 The following code can be used to extract all fields that are linked to TLV tags and build a TLV buffer from them: 

```cpp
unsigned char buf[200];
com_verifone_TLVLite::SafeBuffer tlv(buf, sizeof(buf));
ret = msg.GetFields_TLV(tlv);
```

 Upon success buf will contain the TLV data with length tlv.getLength().


## Example

The above examples are part of the file example.cpp that is shipped together with ADK-ISO8583.

This code generates the following output: 

```cpp
msg.SetField_Str "abc"
msg.SetField_Str "xy"
msg.SetField_Str "hello"
msg.SetField_Str "world"
msg.SetField_Str "12345"
msg.SetField_Str "1234"
msg.SetField_Str "12345"
msg.SetField_Str "1234"
msg.SetField_Bin 0x12345678
msg.SetFields_TLV 9f02060000000001009a031611149f0607a0000000031010
msg.Pack: 0
msg [62]: 7ff80000000000006162637879200568656c6c6f3035776f726c640123450012340512345f041234041234567800000000010016111407a0000000031010
msg.Unpack: 0
GetField_Str: "abc"
GetField_Str: "xy "
GetField_Str: "hello"
GetField_Str: "world"
GetField_Str: "12345"
GetField_Str: "01234"
GetField_Str: "12345"
GetField_Str: "1234"
GetField_Bin: 0x12345678
GetFields_TLV: 9f02060000000001009a031611149f0607a0000000031010
```


# System Setup and Requirements


## Compiler and Linker Settings

Include header file [dl_iso8583.h](dl__iso8583_8h.md#file-dl-iso8583.h) and link the appropriate library for your operating system (see [Deliverables and Deployment]).


## Hardware

ADK-ISO8583 does not depend on any special hardware.


## Software

ADK-ISO8583 is designed to be platform agnostic and will be supported on V/OS, Verix, VOS2 and Android terminal operating systems.


## Deliverables and Deployment

ADK-ISO8583 is delivered as static and shared library.

* V/OS and V/OS2:
    * static: libiso8583.a
    * shared:
        * for linking: libiso8583.so.x.x
        * for loading: dl.libiso8583-x.x.x-xx(-prod).tar
* Verix:
    * static:
        * libiso8583.a (for use in applications)
        * libiso8583_libpic.a (for use in LIB libraries)
        * libiso8583_vslpic.a (for use in VSL libraries)
    * shared:
        * for linking: libiso8583.so
        * load to terminal with load_libiso8583(-sys).bat


# Troubleshooting


## Frequently Asked Questions


## Logging

Not supported.


## Debugging

Not supported. 

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100
