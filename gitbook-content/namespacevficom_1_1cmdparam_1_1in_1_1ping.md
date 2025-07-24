---
hidden: true
title: "vficom::cmdparam::in::ping Namespace Reference"
---

[Variables](#var-members)

|  |  |
|----|----|
| Variables |  |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [destination](#a920892b2ff3fe5a072f035eb2a5920c9) \[\] |
|   | string - dns name or ip address [More\...](#a920892b2ff3fe5a072f035eb2a5920c9)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [count](#a4f51ec05d10dbe4d0d8e2e17fa76cd03) \[\] |
|   | integer - stop after \"count\" ping request [More\...](#a4f51ec05d10dbe4d0d8e2e17fa76cd03)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [timeout](#a2b4a0dc4f4178cae0b1a5abb7d0122de) \[\] |
|   | integer - Overall timeout in milliseconds [More\...](#a2b4a0dc4f4178cae0b1a5abb7d0122de)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [addr_family](#a8da131bd7b2090ec245661c0d77811c4) \[\] |
|   | integer - \[optional\] value of type <a href="libcom_8h.md#a9d0a5913331bf7ad7df0fd094ba5ebac">com_AddressFamily</a>, default <a href="libcom_8h.md#a9d0a5913331bf7ad7df0fd094ba5ebaca543d618d8f9ef06977cc6ae9023ca6a2">COM_AF_UNSPEC</a> [More\...](#a8da131bd7b2090ec245661c0d77811c4)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [dont_fragment](#a9baf2a893a551768cd734a9e59bbe897) \[\] |
|   | boolean - \[optional\] set or unset the DF flag in IP header, default (not specified in input command): set automatically based on routing table [More\...](#a9baf2a893a551768cd734a9e59bbe897)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [interface](#a2a1d0b5edb4eebde7e6d5bbc84c02730) \[\] |
|   | integer - \[optional\] value of type \'enum com_Interface\', default <a href="libcom_8h.md#af5a039e966328fc65a4de3506050898ea7b596c612d40d9611370b1cbcd242b0b">COM_INTERFACE_ANY</a> [More\...](#a2a1d0b5edb4eebde7e6d5bbc84c02730)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [interval](#a98835b95b5bab834959434cf556f73da) \[\] |
|   | integer - \[optional\] milliseconds between sending each packet, default: 1000 [More\...](#a98835b95b5bab834959434cf556f73da)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [size](#ae0d180616fe53dddd61f70c62526b0db) \[\] |
|   | integer - \[optional\] use \"size\" as number of data bytes to be sent, default 56 [More\...](#ae0d180616fe53dddd61f70c62526b0db)<br/> |
| const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char  | [waittime](#a08da058f9e2399639365eccf1f7706d3) \[\] |
|   | integer - \[optional\] reply wait \"waittime\" in milliseconds, default 5000 milliseconds [More\...](#a08da058f9e2399639365eccf1f7706d3)<br/> |

## VariableDocumentation {#variable-documentation}

## addr_family <a href="#a8da131bd7b2090ec245661c0d77811c4" id="a8da131bd7b2090ec245661c0d77811c4"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char addr_family\[\]</p>

integer - \[optional\] value of type <a href="libcom_8h.md#a9d0a5913331bf7ad7df0fd094ba5ebac">com_AddressFamily</a>, default <a href="libcom_8h.md#a9d0a5913331bf7ad7df0fd094ba5ebaca543d618d8f9ef06977cc6ae9023ca6a2">COM_AF_UNSPEC</a>

## count <a href="#a4f51ec05d10dbe4d0d8e2e17fa76cd03" id="a4f51ec05d10dbe4d0d8e2e17fa76cd03"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char count\[\]</p>

integer - stop after \"count\" ping request

### Examples

<a href="demo-sysinfo_8cpp-example.md#a98">demo-sysinfo.cpp</a>.

## destination <a href="#a920892b2ff3fe5a072f035eb2a5920c9" id="a920892b2ff3fe5a072f035eb2a5920c9"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char destination\[\]</p>

string - dns name or ip address

## dont_fragment <a href="#a9baf2a893a551768cd734a9e59bbe897" id="a9baf2a893a551768cd734a9e59bbe897"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char dont_fragment\[\]</p>

boolean - \[optional\] set or unset the DF flag in IP header, default (not specified in input command): set automatically based on routing table

## interface <a href="#a2a1d0b5edb4eebde7e6d5bbc84c02730" id="a2a1d0b5edb4eebde7e6d5bbc84c02730"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char interface\[\]</p>

integer - \[optional\] value of type \'enum com_Interface\', default <a href="libcom_8h.md#af5a039e966328fc65a4de3506050898ea7b596c612d40d9611370b1cbcd242b0b">COM_INTERFACE_ANY</a>

## interval <a href="#a98835b95b5bab834959434cf556f73da" id="a98835b95b5bab834959434cf556f73da"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char interval\[\]</p>

integer - \[optional\] milliseconds between sending each packet, default: 1000

## size <a href="#ae0d180616fe53dddd61f70c62526b0db" id="ae0d180616fe53dddd61f70c62526b0db"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char size\[\]</p>

integer - \[optional\] use \"size\" as number of data bytes to be sent, default 56

### Examples

<a href="crdsync-demo_8cpp-example.md#a17">crdsync-demo.cpp</a>, and <a href="demo-sysinfo_8cpp-example.md#a51">demo-sysinfo.cpp</a>.

## timeout <a href="#a2b4a0dc4f4178cae0b1a5abb7d0122de" id="a2b4a0dc4f4178cae0b1a5abb7d0122de"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char timeout\[\]</p>

integer - Overall timeout in milliseconds

## waittime <a href="#a08da058f9e2399639365eccf1f7706d3" id="a08da058f9e2399639365eccf1f7706d3"></a>

<p>const <a href="libcom3_8h.md#af8173355d81a442e8fec1ebd507e3a36">COM3_DllSpec</a> char waittime\[\]</p>

integer - \[optional\] reply wait \"waittime\" in milliseconds, default 5000 milliseconds
