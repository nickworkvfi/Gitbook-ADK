---
title: vficpl::EnvironmentDataProvider

---

# vficpl::EnvironmentDataProvider






`#include <EnvironmentDataProvider.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md#function-environmentdataprovider)**() |
| virtual | **[~EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md#function-~environmentdataprovider)**() |
| virtual std::string | **[getLocale](classvficpl_1_1_environment_data_provider.md#function-getlocale)**() |
| virtual std::string | **[getTimezone](classvficpl_1_1_environment_data_provider.md#function-gettimezone)**() |
| virtual std::string | **[getCountry](classvficpl_1_1_environment_data_provider.md#function-getcountry)**() |
| virtual std::string | **[getMerchantName](classvficpl_1_1_environment_data_provider.md#function-getmerchantname)**() |
| virtual std::vector< std::string > | **[getMerchantAddress](classvficpl_1_1_environment_data_provider.md#function-getmerchantaddress)**() |
| virtual float | **[getLatitude](classvficpl_1_1_environment_data_provider.md#function-getlatitude)**() |
| virtual float | **[getLongitude](classvficpl_1_1_environment_data_provider.md#function-getlongitude)**() |
| virtual float | **[getAltitude](classvficpl_1_1_environment_data_provider.md#function-getaltitude)**() |
| virtual std::string | **[getPaymentAppName](classvficpl_1_1_environment_data_provider.md#function-getpaymentappname)**() |
| virtual std::string | **[getPaymentAppVersion](classvficpl_1_1_environment_data_provider.md#function-getpaymentappversion)**() |
| virtual bool | **[isDCCSupported](classvficpl_1_1_environment_data_provider.md#function-isdccsupported)**() |
| virtual std::string | **[getPrinterType](classvficpl_1_1_environment_data_provider.md#function-getprintertype)**() |
| virtual int | **[getPrinterColWidth](classvficpl_1_1_environment_data_provider.md#function-getprintercolwidth)**() |
| virtual int | **[getPrinterFontWidth](classvficpl_1_1_environment_data_provider.md#function-getprinterfontwidth)**() |
| virtual int | **[getPrinterPixelWidth](classvficpl_1_1_environment_data_provider.md#function-getprinterpixelwidth)**() |
| virtual bool | **[isBarcodeReaderSupported](classvficpl_1_1_environment_data_provider.md#function-isbarcodereadersupported)**() |
| virtual std::vector< std::string > | **[getBeaconType](classvficpl_1_1_environment_data_provider.md#function-getbeacontype)**() |
| virtual bool | **[isPOSSupported](classvficpl_1_1_environment_data_provider.md#function-ispossupported)**() |

## Public Functions Documentation

### function EnvironmentDataProvider

```cpp
EnvironmentDataProvider()
```


constructor 


### function ~EnvironmentDataProvider

```cpp
virtual ~EnvironmentDataProvider()
```


destructor 


### function getLocale

```cpp
virtual std::string getLocale()
```


**Return**: language 

The default language of the terminal. see [https://tools.ietf.org/html/bcp47](https://tools.ietf.org/html/bcp47) for additional details default: "en-US" 


### function getTimezone

```cpp
virtual std::string getTimezone()
```


**Return**: time zone 

Time zone of the terminal location see [https://en.wikipedia.org/wiki/List_of_UTC_time_offsets](https://en.wikipedia.org/wiki/List_of_UTC_time_offsets) default: "UTC-08:00" 


### function getCountry

```cpp
virtual std::string getCountry()
```


**Return**: country 

Country of the terminal location see [https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) default: "US" 


### function getMerchantName

```cpp
virtual std::string getMerchantName()
```


**Return**: merchant name 

Name of the merchant this terminal is located at default: "Mr. X" 


### function getMerchantAddress

```cpp
virtual std::vector< std::string > getMerchantAddress()
```


**Return**: address 

Street address of the terminal location default: "88 West Plumeria Dr San Jose, CA 95134" 


### function getLatitude

```cpp
virtual float getLatitude()
```


**Return**: latitude 

Represented as a number, positive represents North latitude default: 0 


### function getLongitude

```cpp
virtual float getLongitude()
```


**Return**: longitude 

Represented as a number, positive represents East longitude defaut: 0 


### function getAltitude

```cpp
virtual float getAltitude()
```


**Return**: altitude 

Represented as a number, in meters relatively to mean sea level default: 0 


### function getPaymentAppName

```cpp
virtual std::string getPaymentAppName()
```


**Return**: application name 

Identification of the payment application environment default: "X" 


### function getPaymentAppVersion

```cpp
virtual std::string getPaymentAppVersion()
```


**Return**: payment application version 

default: "1.0.0" 


### function isDCCSupported

```cpp
virtual bool isDCCSupported()
```


**Return**: true if DCC supported 

Indicates if Payment Application supports Dynamic Currency Conversion default: false 


### function getPrinterType

```cpp
virtual std::string getPrinterType()
```


**Return**: printer type 

Specify the presence and capability of the printer. The value either "TEXT" or "GRAPHICS" indicating the capability of the printer. If not specified (empty string), it is assumed that there is no printer support. default: "GRAPHICS" 


### function getPrinterColWidth

```cpp
virtual int getPrinterColWidth()
```


**Return**: printer witdh 

Specify the width of the printer in columns. The value of printerWidth is considered only when printer is specified and is meaningful. default: 42 


### function getPrinterFontWidth

```cpp
virtual int getPrinterFontWidth()
```


**Return**: font width 

Specify the width of the font char in pixels. The value of fontWidth is considered only when printer is specified and is meaningful. default: 6 


### function getPrinterPixelWidth

```cpp
virtual int getPrinterPixelWidth()
```


**Return**: pixel width 

Specify the width of the printer in pixels. The value of pixelWidth is considered only when printer is specified and is meaningful. default: 256 


### function isBarcodeReaderSupported

```cpp
virtual bool isBarcodeReaderSupported()
```


**Return**: true if supported 

Indicates if the Payment Application supports barcode reader default: false 


### function getBeaconType

```cpp
virtual std::vector< std::string > getBeaconType()
```


**Return**: supported beacon types 

Specifies the list of beacon types supported. Currently only IBEACON and EDDYSTONE are supported. default: ["IBEACON", "EDDYSTONE"] 


### function isPOSSupported

```cpp
virtual bool isPOSSupported()
```


**Return**: true if supported 

Indicates if Payment Application supports a POS (ECR) default: false 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100