---
hidden: true
title: EnvironmentDataProvider.h
---

<a href="_environment_data_provider_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 8 #ifndef ENVIRONMENTDATAPROVIDER_H_
 9 #define ENVIRONMENTDATAPROVIDER_H_
 10 
 11 #include <string>
 12 #include <vector>
 13 #include "cpdllspec.h"
 14 
 15 namespace vficpl
 16 {
 17  class CPDllSpec EnvironmentDataProvider
 18  {
 19  public:
 20 
 24  EnvironmentDataProvider();
 25 
 29  virtual ~EnvironmentDataProvider();
 30 
 37  virtual std::string getLocale();
 38 
 45  virtual std::string getTimezone();
 46 
 53  virtual std::string getCountry();
 54 
 60  virtual std::string getMerchantName();
 61 
 67  virtual std::vector<std::string> getMerchantAddress();
 68 
 74  virtual float getLatitude();
 75 
 81  virtual float getLongitude();
 82 
 88  virtual float getAltitude();
 89 
 95  virtual std::string getPaymentAppName();
 96 
 101  virtual std::string getPaymentAppVersion();
 102 
 108  virtual bool isDCCSupported();
 109 
 117  virtual std::string getPrinterType();
 118 
 125  virtual int getPrinterColWidth();
 126 
 133  virtual int getPrinterFontWidth();
 134 
 141  virtual int getPrinterPixelWidth();
 142 
 148  virtual bool isBarcodeReaderSupported();
 149 
 156  virtual std::vector<std::string> getBeaconType();
 157 
 163  virtual bool isPOSSupported();
 164  };
 165 } // namespace vficpl
 166 
 167 #endif
```
