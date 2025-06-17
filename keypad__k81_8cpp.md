---
title: sdi/src/keypad_k81.cpp

---

# sdi/src/keypad_k81.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| pal_ReturnCodes | **[abort_callback](keypad__k81_8cpp.md#function-abort-callback)**(void * prv) |


## Functions Documentation

### function abort_callback

```cpp
static pal_ReturnCodes abort_callback(
    void * prv
)
```




## Source code

```cpp
#include "_logf.h"
#include "keypad.h"
#include "sys.h"
#include "timestamp.h"

#include <thread>
#include <ui/keypad.h>

using namespace std;
using namespace csd;

KeyPad::KeyPad() {}

KeyPad::~KeyPad() {}

static pal_ReturnCodes abort_callback(void *prv)
{
  if (!prv)
  {
    return PAL_ABORTED;
  }

  int *abortCode = (int*) prv;
  *abortCode = check4Interrupt();

  return (*abortCode != RESULT_OK) ? PAL_ABORTED : PAL_OK;
}

int KeyPad::enterData(csd_string &data, enum DataEntryType entryType, callback_t cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout, unsigned char skipCb9FFE)
{
  if (PAL_OK != pal::ui::openKeypad())
  {
    _LOGF_ERROR("%s: Failed to open keypad", __func__);
    return RESULT_FAIL;
  }

  // set maximum timeout to 300 seconds if there is no timeout set
  const unsigned short timeout_internal = timeout != 0 ? timeout : 300;
  _LOGF_INFO("%s: Keypad open. Reading keys with a timeout of %d seconds...", __func__, timeout_internal);

  bool panConfirmed = false;

  sdi::TimeStamp last(sdi::TimeStamp::Monotonic());
  unsigned int passed = 0;

  int interrupt = RESULT_OK;

  for (;;)
  {
    char key;

    pal_ReturnCodes ret = pal::ui::readKeypad(key, (timeout_internal - passed) * 1000, abort_callback, &interrupt);

    if (PAL_TIMEOUT == ret)
    {
      _LOGF_WARN("%s: readKeypad() timed out ...", __func__);
      pal::ui::closeKeypad();
      return RESULT_TIMEOUT;
    }

    if (PAL_ABORTED == ret)
    {
      _LOGF_WARN("%s: readKeypad() was aborted ...", __func__);
      pal::ui::closeKeypad();
      return interrupt;
    }

    switch (((int)key))
    {
      case pal::ui::KEY_CODE_0:
      case pal::ui::KEY_CODE_1:
      case pal::ui::KEY_CODE_2:
      case pal::ui::KEY_CODE_3:
      case pal::ui::KEY_CODE_4:
      case pal::ui::KEY_CODE_5:
      case pal::ui::KEY_CODE_6:
      case pal::ui::KEY_CODE_7:
      case pal::ui::KEY_CODE_8:
      case pal::ui::KEY_CODE_9:
      {
        if (data.length() >= maxInputLength)
        {
          // Send callback to inform the payment app that maximum number of digits is reached
          cb(TOO_MANY_DIGITS_ENTERED, "");
          break;
        }

        data += key;
        _LOGF_INFO("%s: Number of Digits entered: %zu", __func__, data.length());

        if (entryType == TYPE_PAN)
        {
          // Add string display for obfuscated PAN to the callback
          if (data.length() > 6)
          {
            csd_string help = data;

            // Put asterixes after the 1st six digits of the PAN
            help.replace(6, help.length() - 6, help.length() - 6, '*');
            cb(help.length(), help);
          }
          else
          {
            cb(data.length(), data);
          }

          panConfirmed = false;
        }
        else
        {
          cb(data.length(), "");
        }

      }
      break;

      case pal::ui::KEY_CODE_STAR:
      case pal::ui::KEY_CODE_HASH:
        break;

      case pal::ui::KEY_CODE_CANCEL:
      {
        pal::ui::closeKeypad();
        _LOGF_INFO("%s: enterData: User cancel", __func__);
        return RESULT_USER_CANCEL;
      }

      case pal::ui::KEY_CODE_BACK:
      {
        data = data.substr(0, data.length() - 1);
        _LOGF_INFO("%s: keyCorrection, Number of Digits entered: %zu", __func__, data.length());

        if (entryType == TYPE_PAN)
        {
          // Add string display the obfuscated PAN to the callback
          if (data.length() > 6)
          {
            csd_string help = data;

            // Put asterixes after the 1st six digits of the PAN
            help.replace(6,  help.length() - 6,  help.length() - 6, '*');
            cb(help.length(), help);
          }
          else
          {
            cb(data.length(), data);
          }

          panConfirmed = false;
        }
        else
        {
          cb(data.length(), "");
        }

        break;
      }

      case pal::ui::KEY_CODE_OK:
      {
        if (skipCb9FFE == 0x01)
        {
          panConfirmed = true; // PWMADK-1942: Skip Callback 9FFE (double confimation of PAN entry in headless mode)
        }

        if ((entryType == TYPE_PAN) && (panConfirmed == false))
        {
          // Send obfuscated PAN in callback
          if (data.length() >= minInputLength)
          {
            csd_string help = data;

            // Obfuscate the PAN
            obfuscatePAN(help, csd_string::npos, '*');

            cb(PAN_ENTERED_CHECK_AND_CONFIRM, help);

            panConfirmed = true;
          }
          else
          {
            // Send callback to inform the payment app that data are not completely entered
            cb(TOO_FEW_DIGITS_ENTERED, "");
          }
        }
        else
        {
          pal::ui::closeKeypad();
          _LOGF_INFO("%s: Result Ok", __func__);
          return RESULT_OK;
        }

        break;
      }

      default:
        _LOGF_INFO("%s: Unknown keycode catched: %d (%c)", __func__, key, key);
        break;
    }

    sdi::TimeStamp cur(sdi::TimeStamp::Monotonic());
    passed += cur.s() - last.s();
    last = cur;
    //_LOGF_INFO("    ....    time left = %d sec\n", timeout_internal - passed);
  }

  return RESULT_OK;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
