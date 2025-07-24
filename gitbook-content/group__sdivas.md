---
hidden: true
title: SDI client VAS interface
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| int  | [vasSetTerminalConfig](#gaf0cc3c42dbe67a61120be93a0cb0bfd0) (const std::string &config) |
| int  | [vasGetTerminalConfig](#ga0f4b1008a858641f0dc600b8e5f13398) (const std::string &appid, std::string &config) |
| int  | [vasGetConfig](#gac85917981f00dbad710c46151a43197c) (const std::string &appid, std::string &config) |
| int  | [vasActivate](#gaf126e697ae90b281c40f39f12da03a10) (const std::string &appid, const std::string &config, std::string &data) |
| int  | [vasCancel](#gaa71f392b153b5bb901159a5953d06f55) () |
| int  | [vasUpdateConfig](#gaa4d6d9c81879faf1a5385a6fc66f3181) (const std::string &appid, const std::string &config) |
| int  | [vasCancelConfig](#gae24680ea4deab35ba4a6e3124c5e0683) (const std::string &appid) |
| int  | [vasPreload](#ga2335b9dd2f80d75773117da7968f8635) (const std::string &appid, const std::string &config) |
| int  | [vasCancelPreload](#gae2a688f4a50c36632c5e690f86b9ec15) (const std::string &appid) |
| int  | [vasDecrypt](#ga34b42c5ac7267717ec6d59f4a4dfe325) (const std::string &appid, const std::string &cipher, std::string &plain) |
| int  | [vasAction](#gad286a6d53139efbfcecd1feb7217e348) (const std::string &appid, const std::string &in, std::string &out) |

## DetailedDescription {#detailed-description}

## FunctionDocumentation {#function-documentation}

## vasAction() <a href="#gad286a6d53139efbfcecd1feb7217e348" id="gad286a6d53139efbfcecd1feb7217e348"></a>

<p>int vasAction</p>

VAS action

**Parameters**

\[in\] **appid** application unique identifier \[in\] **in** input data \[out\] **out** output data

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasActivate() <a href="#gaf126e697ae90b281c40f39f12da03a10" id="gaf126e697ae90b281c40f39f12da03a10"></a>

<p>int vasActivate</p>

Activates NFC interface, runs through wallet kernel flow and retrieves VAS data. (32-03)

**Parameters**

\[in\] **appid** application unique identifier \[in\] **config** set of dynamic parameters to be merged with configuration from data base \[out\] **data** VAS data received from the handset

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasCancel() <a href="#gaa71f392b153b5bb901159a5953d06f55" id="gaa71f392b153b5bb901159a5953d06f55"></a>

<p>int vasCancel</p>

Cancel technology discovery process (32-04)

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasCancelConfig() <a href="#gae24680ea4deab35ba4a6e3124c5e0683" id="gae24680ea4deab35ba4a6e3124c5e0683"></a>

<p>int vasCancelConfig</p>

Clear all the VAS configuration by application ID. (32-06)

**Parameters**

\[in\] **appid** application unique identifier

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasCancelPreload() <a href="#gae2a688f4a50c36632c5e690f86b9ec15" id="gae2a688f4a50c36632c5e690f86b9ec15"></a>

<p>int vasCancelPreload</p>

Clear preloaded configuration by application ID and pull latest configuration from data base. (32-08)

**Parameters**

\[in\] **appid** application unique identifier

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasDecrypt() <a href="#ga34b42c5ac7267717ec6d59f4a4dfe325" id="ga34b42c5ac7267717ec6d59f4a4dfe325"></a>

<p>int vasDecrypt</p>

Decrypt an encrypted VAS response. (32-09)

**Parameters**

\[in\] **appid** application unique identifier \[in\] **cipher** VAS data response with the included encrypted message \[out\] **plain** VAS data response with the included decrypted message

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasGetConfig() <a href="#gac85917981f00dbad710c46151a43197c" id="gac85917981f00dbad710c46151a43197c"></a>

<p>int vasGetConfig</p>

Read the most updated wallet configuration (32-02)

**Parameters**

\[in\] **appid** application unique identifier \[out\] **config** terminal configuration and configuration of all wallets in JSON format

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasGetTerminalConfig() <a href="#ga0f4b1008a858641f0dc600b8e5f13398" id="ga0f4b1008a858641f0dc600b8e5f13398"></a>

<p>int vasGetTerminalConfig</p>

Read the most updated terminal configuration (32-01)

**Parameters**

\[in\] **appid** application unique identifier \[out\] **config** terminal configuration in JSON format

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasPreload() <a href="#ga2335b9dd2f80d75773117da7968f8635" id="ga2335b9dd2f80d75773117da7968f8635"></a>

<p>int vasPreload</p>

Configure the terminal with wallet specific parameters. (32-07)

**Parameters**

\[in\] **appid** application unique identifier \[in\] **config** set of preload parameters to be merged with configuration from data base in JSON format

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasSetTerminalConfig() <a href="#gaf0cc3c42dbe67a61120be93a0cb0bfd0" id="gaf0cc3c42dbe67a61120be93a0cb0bfd0"></a>

<p>int vasSetTerminalConfig</p>

Configure the temrinal with terminal parameters (32-00)

**Parameters**

\[in\] **config** terminal configuration in JSON format

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)

## vasUpdateConfig() <a href="#gaa4d6d9c81879faf1a5385a6fc66f3181" id="gaa4d6d9c81879faf1a5385a6fc66f3181"></a>

<p>int vasUpdateConfig</p>

Configure the terminal with wallet specific parameters. (32-05)

**Parameters**

\[in\] **appid** application unique identifier \[in\] **config** set of parameters to configure one or multiple wallets in JSON format

### Returns

SDI error code (<a href="namespacevfisdi.md#a28287671eaf7406afd604bd055ba4066">Result</a>)
