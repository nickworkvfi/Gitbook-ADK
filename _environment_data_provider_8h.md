---
title: cpl/include/commerce/EnvironmentDataProvider.h
summary: interface of class EnvironmentDataProvider Implementation with default values exists in vficpl User can overwrite each function to get another value. All environment variables can be set by user except schema and API version. 

---

# cpl/include/commerce/EnvironmentDataProvider.h

interface of class EnvironmentDataProvider Implementation with default values exists in vficpl User can overwrite each function to get another value. All environment variables can be set by user except schema and API version. 

## Namespaces

| Name           |
| -------------- |
| **[vficpl](namespacevficpl.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vficpl::EnvironmentDataProvider](classvficpl_1_1_environment_data_provider.md)**  |




## Source code

```cpp

#ifndef ENVIRONMENTDATAPROVIDER_H_
#define ENVIRONMENTDATAPROVIDER_H_

#include <string>
#include <vector>
#include "cpdllspec.h"

namespace vficpl
{
  class CPDllSpec EnvironmentDataProvider
  {
  public:

    EnvironmentDataProvider();

    virtual ~EnvironmentDataProvider();

    virtual std::string getLocale();

    virtual std::string getTimezone();

    virtual std::string getCountry();

    virtual std::string getMerchantName();

    virtual std::vector<std::string> getMerchantAddress();

    virtual float getLatitude();

    virtual float getLongitude();

    virtual float getAltitude();

    virtual std::string getPaymentAppName();

    virtual std::string getPaymentAppVersion();

    virtual bool isDCCSupported();

    virtual std::string getPrinterType();

    virtual int getPrinterColWidth();

    virtual int getPrinterFontWidth();

    virtual int getPrinterPixelWidth();

    virtual bool isBarcodeReaderSupported();

    virtual std::vector<std::string> getBeaconType();

    virtual bool isPOSSupported();
  };
} // namespace vficpl

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
