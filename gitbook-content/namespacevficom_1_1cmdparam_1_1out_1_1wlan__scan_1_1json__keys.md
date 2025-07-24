---
hidden: true
title: "vficom::cmdparam::out::wlan_scan::json_keys Namespace Reference"
---

[Variables](#var-members)

|  |  |
|----|----|
| Variables |  |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [ssid](#a58be0109b1094934766fb07b04083670) \[\] |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [bssid](#afb3575d386e9da9e5e13a0a1c2768bb1) \[\] |
|   | String. [More\...](#afb3575d386e9da9e5e13a0a1c2768bb1)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [adhoc](#ad5782227c6fa2d04025869eadd49edd0) \[\] |
|   | Bool, is the network AdHoc? [More\...](#ad5782227c6fa2d04025869eadd49edd0)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [pairw](#a4a156ee852ab5fa19e3abe3ae6de5941) \[\] |
|   | Int, pairwise cipher, com_WLANCipherTypes. [More\...](#a4a156ee852ab5fa19e3abe3ae6de5941)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [group](#afd95b3d6f9333bb89f82ba0c38dccfd3) \[\] |
|   | Int, group cipher, com_WLANCipherTypes. [More\...](#afd95b3d6f9333bb89f82ba0c38dccfd3)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [km](#acb03137853de2d38c2c2a2154fbb21eb) \[\] |
|   | Int, key management, com_WLANKeyMgmt. [More\...](#acb03137853de2d38c2c2a2154fbb21eb)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [perc](#a1275baf83e21b56d7dd2cc08c1a584b0) \[\] |
|   | Int, signal level (percentage) [More\...](#a1275baf83e21b56d7dd2cc08c1a584b0)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [dbm](#aeff6429db6f3170400b6f52c36d3bec0) \[\] |
|   | Int, signal level (dBm) [More\...](#aeff6429db6f3170400b6f52c36d3bec0)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [freq](#ac9376942c10c0db2a7e73ac587a1d33c) \[\] |
|   | Int, channel frequency. [More\...](#ac9376942c10c0db2a7e73ac587a1d33c)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [proto](#a0430f507936d95741e834441df04acaf) \[\] |
|   | Int, protocol, com_WLANProto. [More\...](#a0430f507936d95741e834441df04acaf)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [std](#aeeb2b1c8a9d5f1a4aaf251729b2b8368) \[\] |
|   | Int, standard, com_WLANStandard; present only on VOS3. [More\...](#aeeb2b1c8a9d5f1a4aaf251729b2b8368)<br/> |

## VariableDocumentation {#variable-documentation}

## adhoc <a href="#ad5782227c6fa2d04025869eadd49edd0" id="ad5782227c6fa2d04025869eadd49edd0"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char adhoc\[\]</p>

Bool, is the network AdHoc?

## bssid <a href="#afb3575d386e9da9e5e13a0a1c2768bb1" id="afb3575d386e9da9e5e13a0a1c2768bb1"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char bssid\[\]</p>

String.

## dbm <a href="#aeff6429db6f3170400b6f52c36d3bec0" id="aeff6429db6f3170400b6f52c36d3bec0"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char dbm\[\]</p>

Int, signal level (dBm)

## freq <a href="#ac9376942c10c0db2a7e73ac587a1d33c" id="ac9376942c10c0db2a7e73ac587a1d33c"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char freq\[\]</p>

Int, channel frequency.

## group <a href="#afd95b3d6f9333bb89f82ba0c38dccfd3" id="afd95b3d6f9333bb89f82ba0c38dccfd3"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char group\[\]</p>

Int, group cipher, com_WLANCipherTypes.

### Examples

<a href="mac_demo2_8cpp-example.md#a16">mac_demo2.cpp</a>.

## km <a href="#acb03137853de2d38c2c2a2154fbb21eb" id="acb03137853de2d38c2c2a2154fbb21eb"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char km\[\]</p>

Int, key management, com_WLANKeyMgmt.

## pairw <a href="#a4a156ee852ab5fa19e3abe3ae6de5941" id="a4a156ee852ab5fa19e3abe3ae6de5941"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char pairw\[\]</p>

Int, pairwise cipher, com_WLANCipherTypes.

## perc <a href="#a1275baf83e21b56d7dd2cc08c1a584b0" id="a1275baf83e21b56d7dd2cc08c1a584b0"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char perc\[\]</p>

Int, signal level (percentage)

## proto <a href="#a0430f507936d95741e834441df04acaf" id="a0430f507936d95741e834441df04acaf"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char proto\[\]</p>

Int, protocol, com_WLANProto.

## ssid <a href="#a58be0109b1094934766fb07b04083670" id="a58be0109b1094934766fb07b04083670"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char ssid\[\]</p>

## std <a href="#aeeb2b1c8a9d5f1a4aaf251729b2b8368" id="aeeb2b1c8a9d5f1a4aaf251729b2b8368"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char std\[\]</p>

Int, standard, com_WLANStandard; present only on VOS3.
