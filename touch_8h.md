---
title: sdi/src/touch.h

---

# sdi/src/touch.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[TouchPad](class_touch_pad.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[SpecialKey](touch_8h.md#enum-specialkey)** { keyCancel = 27, keyOK = 13, keyCorrection = 8, keyNoKey = 0} |

## Types Documentation

### enum SpecialKey

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| keyCancel | 27|   |
| keyOK | 13|   |
| keyCorrection | 8|   |
| keyNoKey | 0|   |







## Source code

```cpp
#ifndef TOUCH_H
#define TOUCH_H

#include "sys.h"

#include <svcsec.h>

#include <string>
#include <vector>
#include "csd.h"


//TODO: can we use constants defined somewhere else?
enum SpecialKey
{
  keyCancel = 27,
  keyOK = 13,
  keyCorrection = 8,
  keyNoKey = 0
};

class TouchPad
{
  public:
    //use touch_hotspot_info from <svcsec.h>
    typedef touch_hotspot_info t_hotspot;
    typedef std::vector<t_hotspot> t_hotspots;

    typedef void (* callback_t)(unsigned char, csd::csd_string);

    static TouchPad &getInstance()
    {
      static TouchPad instance;
      return instance;
    }

    ~TouchPad();

    void setHotspots(const t_hotspots &hotspots);

    int enterData(csd::csd_string &data, enum DataEntryType entryType, callback_t cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout = 0, unsigned char skipCb9FFE = 0);
    int sendHotspotsToVault(); //send hotspots to vault

  private:
    TouchPad();
    TouchPad(const TouchPad &other);   // non construction-copyable
    TouchPad &operator=(const TouchPad &);  // non copyable


    t_hotspots m_hotspots;

    char click(int x, int y);
};

#endif // TOUCH_H
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
