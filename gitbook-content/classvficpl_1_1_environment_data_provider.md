---
hidden: true
title: EnvironmentDataProvider Class Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="_environment_data_provider_8h_source.md">EnvironmentDataProvider.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [EnvironmentDataProvider](#a1ec2f9c2a19de504275fb35f0ae70602) () |
| virtual  | [\~EnvironmentDataProvider](#abf3f3c0945ac11f0a45d6a44e1efc2dc) () |
| virtual std::string  | [getLocale](#aee7142d2db4b431dd1d90ea0af37ce4a) () |
| virtual std::string  | [getTimezone](#ab558a82e5acdf889a8c2bc1f960c631b) () |
| virtual std::string  | [getCountry](#a14559cac1d0c6d93eb3de5ca849ad316) () |
| virtual std::string  | [getMerchantName](#a1c05bba3efde99d601e15604db760609) () |
| virtual std::vector\< std::string \>  | [getMerchantAddress](#aa4a23d5cca55da642a7c6b2814a0d210) () |
| virtual float  | [getLatitude](#a2555c4a454e6eeb3c8e24ad55a2cff30) () |
| virtual float  | [getLongitude](#a20223e2b8f264d2e746fa81ef244029c) () |
| virtual float  | [getAltitude](#aaf91fe7efb0743f3fd0c537fdd87b3b8) () |
| virtual std::string  | [getPaymentAppName](#a5d9b36dbd330cf6bfa4490d4b8df5e14) () |
| virtual std::string  | [getPaymentAppVersion](#a69c03854f67151ab5865e99751950e99) () |
| virtual bool  | [isDCCSupported](#a5f824575cb5ae1851d175037ff057ec2) () |
| virtual std::string  | [getPrinterType](#a175db5ae19dfcb150fb428b6ccb0df7d) () |
| virtual int  | [getPrinterColWidth](#a426521da0ee79cd050af74ca79ccb83a) () |
| virtual int  | [getPrinterFontWidth](#a421bc54b53cbca85a259c16800cb0532) () |
| virtual int  | [getPrinterPixelWidth](#ad3b370c08c0873932547e1905ee4c318) () |
| virtual bool  | [isBarcodeReaderSupported](#a6a85721c09b0cc473f4e448ae095809a) () |
| virtual std::vector\< std::string \>  | [getBeaconType](#ada3e668c262f6edd5287693b7be448fd) () |
| virtual bool  | [isPOSSupported](#a7ab43f24f9198fdf7c52631dcd0d5dd7) () |

## Constructor& Destructor Documentation

## EnvironmentDataProvider() <a href="#a1ec2f9c2a19de504275fb35f0ae70602" id="a1ec2f9c2a19de504275fb35f0ae70602"></a>

<p><a href="classvficpl_1_1_environment_data_provider.md">EnvironmentDataProvider</a></p>

constructor

## \~EnvironmentDataProvider() <a href="#abf3f3c0945ac11f0a45d6a44e1efc2dc" id="abf3f3c0945ac11f0a45d6a44e1efc2dc"></a>

<p>virtual \~<a href="classvficpl_1_1_environment_data_provider.md">EnvironmentDataProvider</a></p>

virtual

destructor

## MemberFunction Documentation {#member-function-documentation}

## getAltitude() <a href="#aaf91fe7efb0743f3fd0c537fdd87b3b8" id="aaf91fe7efb0743f3fd0c537fdd87b3b8"></a>

<p>virtual float getAltitude</p>

virtual

Represented as a number, in meters relatively to mean sea level default: 0

### Returns

altitude

## getBeaconType() <a href="#ada3e668c262f6edd5287693b7be448fd" id="ada3e668c262f6edd5287693b7be448fd"></a>

<p>virtual std::vector\<std::string\> getBeaconType</p>

virtual

Specifies the list of beacon types supported. Currently only IBEACON and EDDYSTONE are supported. default: \[\"IBEACON\", \"EDDYSTONE\"\]

### Returns

supported beacon types

## getCountry() <a href="#a14559cac1d0c6d93eb3de5ca849ad316" id="a14559cac1d0c6d93eb3de5ca849ad316"></a>

<p>virtual std::string getCountry</p>

virtual

Country of the terminal location see <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2</a> default: \"US\"

### Returns

country

## getLatitude() <a href="#a2555c4a454e6eeb3c8e24ad55a2cff30" id="a2555c4a454e6eeb3c8e24ad55a2cff30"></a>

<p>virtual float getLatitude</p>

virtual

Represented as a number, positive represents North latitude default: 0

### Returns

latitude

## getLocale() <a href="#aee7142d2db4b431dd1d90ea0af37ce4a" id="aee7142d2db4b431dd1d90ea0af37ce4a"></a>

<p>virtual std::string getLocale</p>

virtual

The default language of the terminal. see <a href="https://tools.ietf.org/html/bcp47">https://tools.ietf.org/html/bcp47</a> for additional details default: \"en-US\"

### Returns

language

## getLongitude() <a href="#a20223e2b8f264d2e746fa81ef244029c" id="a20223e2b8f264d2e746fa81ef244029c"></a>

<p>virtual float getLongitude</p>

virtual

Represented as a number, positive represents East longitude defaut: 0

### Returns

longitude

## getMerchantAddress() <a href="#aa4a23d5cca55da642a7c6b2814a0d210" id="aa4a23d5cca55da642a7c6b2814a0d210"></a>

<p>virtual std::vector\<std::string\> getMerchantAddress</p>

virtual

Street address of the terminal location default: \"88 West Plumeria Dr San Jose, CA 95134\"

### Returns

address

## getMerchantName() <a href="#a1c05bba3efde99d601e15604db760609" id="a1c05bba3efde99d601e15604db760609"></a>

<p>virtual std::string getMerchantName</p>

virtual

Name of the merchant this terminal is located at default: \"Mr. X\"

### Returns

merchant name

## getPaymentAppName() <a href="#a5d9b36dbd330cf6bfa4490d4b8df5e14" id="a5d9b36dbd330cf6bfa4490d4b8df5e14"></a>

<p>virtual std::string getPaymentAppName</p>

virtual

Identification of the payment application environment default: \"X\"

### Returns

application name

## getPaymentAppVersion() <a href="#a69c03854f67151ab5865e99751950e99" id="a69c03854f67151ab5865e99751950e99"></a>

<p>virtual std::string getPaymentAppVersion</p>

virtual

default: \"1.0.0\"

### Returns

payment application version

## getPrinterColWidth() <a href="#a426521da0ee79cd050af74ca79ccb83a" id="a426521da0ee79cd050af74ca79ccb83a"></a>

<p>virtual int getPrinterColWidth</p>

virtual

Specify the width of the printer in columns. The value of printerWidth is considered only when printer is specified and is meaningful. default: 42

### Returns

printer witdh

## getPrinterFontWidth() <a href="#a421bc54b53cbca85a259c16800cb0532" id="a421bc54b53cbca85a259c16800cb0532"></a>

<p>virtual int getPrinterFontWidth</p>

virtual

Specify the width of the font char in pixels. The value of fontWidth is considered only when printer is specified and is meaningful. default: 6

### Returns

font width

## getPrinterPixelWidth() <a href="#ad3b370c08c0873932547e1905ee4c318" id="ad3b370c08c0873932547e1905ee4c318"></a>

<p>virtual int getPrinterPixelWidth</p>

virtual

Specify the width of the printer in pixels. The value of pixelWidth is considered only when printer is specified and is meaningful. default: 256

### Returns

pixel width

## getPrinterType() <a href="#a175db5ae19dfcb150fb428b6ccb0df7d" id="a175db5ae19dfcb150fb428b6ccb0df7d"></a>

<p>virtual std::string getPrinterType</p>

virtual

Specify the presence and capability of the printer. The value either \"TEXT\" or \"GRAPHICS\" indicating the capability of the printer. If not specified (empty string), it is assumed that there is no printer support. default: \"GRAPHICS\"

### Returns

printer type

## getTimezone() <a href="#ab558a82e5acdf889a8c2bc1f960c631b" id="ab558a82e5acdf889a8c2bc1f960c631b"></a>

<p>virtual std::string getTimezone</p>

virtual

Time zone of the terminal location see <a href="https://en.wikipedia.org/wiki/List_of_UTC_time_offsets">https://en.wikipedia.org/wiki/List_of_UTC_time_offsets</a> default: \"UTC-08:00\"

### Returns

time zone

## isBarcodeReaderSupported() <a href="#a6a85721c09b0cc473f4e448ae095809a" id="a6a85721c09b0cc473f4e448ae095809a"></a>

<p>virtual bool isBarcodeReaderSupported</p>

virtual

Indicates if the Payment Application supports barcode reader default: false

### Returns

true if supported

## isDCCSupported() <a href="#a5f824575cb5ae1851d175037ff057ec2" id="a5f824575cb5ae1851d175037ff057ec2"></a>

<p>virtual bool isDCCSupported</p>

virtual

Indicates if Payment Application supports Dynamic Currency Conversion default: false

### Returns

true if DCC supported

## isPOSSupported() <a href="#a7ab43f24f9198fdf7c52631dcd0d5dd7" id="a7ab43f24f9198fdf7c52631dcd0d5dd7"></a>

<p>virtual bool isPOSSupported</p>

virtual

Indicates if Payment Application supports a POS (ECR) default: false

### Returns

true if supported

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- cpl/include/commerce/<a href="_environment_data_provider_8h_source.md">EnvironmentDataProvider.h</a>
