---
title: sdi/src/touch_k81.cpp

---

# sdi/src/touch_k81.cpp






## Source code

```cpp
#include <string.h>

#include "ui.h"

#include "touch.h"
#include "_logf.h"

#include <string>
#include <stdlib.h>
#include <unistd.h>

#include <ui/touch.h>

using namespace std;
using namespace csd;

TouchPad::TouchPad()
{
}

TouchPad::~TouchPad()
{
}

char TouchPad::click(int x, int y)
{
  // unused
  (void) x;
  (void) y;
  return keyNoKey;
}

void TouchPad::setHotspots(const t_hotspots &hotspots)
{
  m_hotspots = hotspots;
}

int TouchPad::sendHotspotsToVault()
{
  // only perform checks, on K81 hotspots are passed in vfcsec_Pinpad_StartInput()

  if (m_hotspots.empty())
  {
#ifdef FORCE_PIN_ON_GLASS
    _LOGF_ERROR("TouchPad::sendHotspotsToVault: define hotspots first!");
    return RESULT_FAIL;
#else
    _LOGF_INFO("TouchPad::sendHotspotsToVault: No hotspots defined. Skip configuring vault");
    return RESULT_OK;
#endif
  }


  if (m_hotspots.size() != (10 + 3))
  {
    _LOGF_WARN("TouchPad::sendHotspotsToVault: defined Hotspots should define Digits '0'-'9', keyCancel=27,  keyOK=13 and keyCorrection=8");
  }

  return RESULT_OK;
}


int TouchPad::enterData(csd_string &data, enum DataEntryType entryType, callback_t cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout, unsigned char skipCb9FFE)
{
  bool firstConfirm = false;
  int interrupt;

  _LOGF_INFO("TouchPad::enterData");

  if (m_hotspots.empty())
  {
    _LOGF_ERROR("TouchPad::enterData: define hotspots first!");
    return RESULT_FAIL;
  }

  if (maxInputLength > 32)
  {
    _LOGF_ERROR("TouchPad::enterData: maxInputLength %d >32", int(maxInputLength));
    return RESULT_FAIL;
  }

  // set maximum timeout to 300 seconds if there is no timeout set
  const unsigned short timeout_internal = timeout != 0 ? timeout : 300;

  if (PAL_OK != pal::ui::startInput(m_hotspots, minInputLength, maxInputLength, timeout_internal))
  {
    return RESULT_FAIL;
  }

  if (data.length() > 0)
  {
    if (PAL_OK != pal::ui::injectClearTextData(data.c_str(), data.length()))
    {
      pal::ui::touchCancel();
      return RESULT_FAIL;
    }
  }

  char clearText[33] = {0};

  while (1)
  {
    unsigned char numberOfDigits;
    enum pal::ui::TouchStatus status;

    if (PAL_OK != pal::ui::checkTouchEvent(status, numberOfDigits, clearText, sizeof(clearText)))
    {
      pal::ui::touchCancel();
      return RESULT_FAIL;
    }

    if (status != pal::ui::PAL_PINPAD_STATUS_NO_EVENT)
    {
      _LOGF_INFO("TouchPad::enterData: CheckTouchEvent status %d len %zu", status, strlen(clearText));
    }

    switch (status)
    {
      case pal::ui::PAL_PINPAD_STATUS_TIMEOUT:
        _LOGF_ERROR("TouchPad::enterData: Timeout reached");
        pal::ui::touchCancel();
        return RESULT_TIMEOUT;

      default:
      case pal::ui::PAL_PINPAD_STATUS_ERROR:
        _LOGF_INFO("TouchPad::enterData: User cancel");
        pal::ui::touchCancel();
        return RESULT_FAIL;

      case pal::ui::PAL_PINPAD_STATUS_CANCEL:
      case pal::ui::PAL_PINPAD_STATUS_CANCELED_BY_PHYSICAL_BUTTON:
        _LOGF_INFO("TouchPad::enterData: User cancel");
        pal::ui::touchCancel();
        return RESULT_USER_CANCEL;

      case pal::ui::PAL_PINPAD_STATUS_CONFIRM:
        data = clearText;
        memset(clearText, 0, sizeof(clearText));

        if (entryType == TYPE_PAN)
        {
          csd_string help = data;

          if (skipCb9FFE == 0x01)
          {
            firstConfirm = true; // PWMADK-1942: Skip Callback 9FFE (double confimation of PAN entry in headless mode)
          }

          if (!firstConfirm)
          {
            firstConfirm = true;
            obfuscatePAN(help, csd_string::npos, '*');
            cb(PAN_ENTERED_CHECK_AND_CONFIRM, help);
            pal::ui::touchCancel();

            if (PAL_OK != pal::ui::startInput(m_hotspots, minInputLength, maxInputLength, timeout_internal))
            {
              _LOGF_ERROR("%s: pal::ui::startInput failed", __FUNCTION__);
              pal::ui::touchCancel();
              return RESULT_FAIL;
            }

            //Inject the clear text data into the input buffer
            if (PAL_OK != pal::ui::injectClearTextData(data.c_str(), data.length()))
            {
              _LOGF_ERROR("%s: injectClearTextData failed", __FUNCTION__);
              pal::ui::touchCancel();
              return RESULT_FAIL;
            }

            _LOGF_INFO("TouchPad:: first time confirmed pressed");
            break;
          }
        }

        _LOGF_INFO("TouchPad::enterData: Result Ok");
        pal::ui::touchCancel();
        return RESULT_OK;

      case pal::ui::PAL_PINPAD_STATUS_CONFIRMED_BUT_LEN_NOT_ALLOWED:
        if (entryType == TYPE_PAN && !firstConfirm)
        {
          cb(TOO_FEW_DIGITS_ENTERED, "");
        }
        else
        {
          data = clearText;
          pal::ui::touchCancel();
          return RESULT_OK;
        }

        break;

      case pal::ui::PAL_PINPAD_STATUS_EXCEED_LIMIT:
        cb(TOO_MANY_DIGITS_ENTERED, "");
        break;

      case pal::ui::PAL_PINPAD_STATUS_DIGIT:
      case pal::ui::PAL_PINPAD_STATUS_CLEAR:
      case pal::ui::PAL_PINPAD_STATUS_BACKSPACE:
        _LOGF_INFO("TouchPad::enterData: Number of Digits entered: %zu", strlen(clearText));

        if (entryType == TYPE_PAN)
        {
          firstConfirm = false;
          csd_string help = clearText;

          if (help.length() > 6)
          {
            help.replace(6, help.length() - 6, help.length() - 6, '*');
          }

          cb(help.length(), help);
        }
        else
        {
          cb(strlen(clearText), "");
        }

        break;

      case pal::ui::PAL_PINPAD_STATUS_NO_EVENT:
        break;
    }

    // Check for Abort or communication to mobile device interrupted
    interrupt = check4Interrupt();

    if (interrupt != RESULT_OK)
    {
      _LOGF_INFO("TouchPad::enterData: check4Interrupt returned RESULT_MOBILE_ABORT or RESULT_NO_LINK");
      pal::ui::touchCancel();
      return interrupt;
    }

    usleep(50000);
  }
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
