---
title: sdi/src/keypad.h

---

# sdi/src/keypad.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[KeyPad](class_key_pad.md)**  |




## Source code

```cpp
#ifndef KEYPAD_H
#define KEYPAD_H

#include <string>
#include <vector>
#include "csd.h"
#include "ui.h"

class KeyPad
{
  public:
    typedef void (* callback_t)(unsigned char, csd::csd_string);

    static KeyPad &getInstance()
    {
      static KeyPad instance;
      return instance;
    }

    ~KeyPad();

    int enterData(csd::csd_string &data, enum DataEntryType entryType, callback_t cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout = 0, unsigned char skipCb9FFE = 0);

  private:
    KeyPad();
    KeyPad(const KeyPad &other);   // non construction-copyable
    KeyPad &operator=(const KeyPad &);  // non copyable

};

#endif // KEYPAD_H
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
