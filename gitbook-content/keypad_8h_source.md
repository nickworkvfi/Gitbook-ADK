---
hidden: true
title: keypad.h
---

<a href="keypad_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef KEYPAD_H
 2 #define KEYPAD_H
 3 
 4 #include <string>
 5 #include <vector>
 6 #include "csd.h"
 7 #include "ui.h"
 8 
 9 class KeyPad
 10 {
 11  public:
 12  typedef void (* callback_t)(unsigned char, csd::csd_string);
 13 
 17  static KeyPad &getInstance()
 18  {
 19  static KeyPad instance;
 20  return instance;
 21  }
 22 
 23  ~KeyPad();
 24 
 36  int enterData(csd::csd_string &data, enum DataEntryType entryType, callback_t cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout = 0, unsigned char skipCb9FFE = 0);
 37 
 38  private:
 39  KeyPad();
 40  KeyPad(const KeyPad &other); // non construction-copyable
 41  KeyPad &operator=(const KeyPad &); // non copyable
 42 
 43 };
 44 
 45 #endif // KEYPAD_H
```
