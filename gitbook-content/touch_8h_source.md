---
hidden: true
title: touch.h
---

<a href="touch_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef TOUCH_H
 2 #define TOUCH_H
 3 
 4 #include "sys.h"
 5 
 6 #include <svcsec.h>
 7 
 8 #include <string>
 9 #include <vector>
 10 #include "csd.h"
 11 
 12 
 13 //TODO: can we use constants defined somewhere else?
 14 enum SpecialKey
 15 {
 16  keyCancel = 27,
 17  keyOK = 13,
 18  keyCorrection = 8,
 19  keyNoKey = 0
 20 };
 21 
 22 class TouchPad
 23 {
 24  public:
 25  //use touch_hotspot_info from <svcsec.h>
 26  typedef touch_hotspot_info t_hotspot;
 27  typedef std::vector<t_hotspot> t_hotspots;
 28 
 29  typedef void (* callback_t)(unsigned char, csd::csd_string);
 30 
 34  static TouchPad &getInstance()
 35  {
 36  static TouchPad instance;
 37  return instance;
 38  }
 39 
 40  ~TouchPad();
 41 
 42  void setHotspots(const t_hotspots &hotspots);
 43 
 55  int enterData(csd::csd_string &data, enum DataEntryType entryType, callback_t cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout = 0, unsigned char skipCb9FFE = 0);
 56  int sendHotspotsToVault(); //send hotspots to vault
 57 
 58  private:
 59  TouchPad();
 60  TouchPad(const TouchPad &other); // non construction-copyable
 61  TouchPad &operator=(const TouchPad &); // non copyable
 62 
 63 
 64  t_hotspots m_hotspots;
 65 
 72  char click(int x, int y);
 73 };
 74 
 75 #endif // TOUCH_H
```
