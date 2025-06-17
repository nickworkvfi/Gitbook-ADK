---
title: sdi/src/touch.cpp

---

# sdi/src/touch.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[openTouch](touch_8cpp.md#function-opentouch)**()<br>get fileDescriptor of touch device  |


## Functions Documentation

### function openTouch

```cpp
static int openTouch()
```

get fileDescriptor of touch device 

**Return**: fd Descriptor 



## Source code

```cpp
#include <string.h>

#include "timestamp.h"
#include "ui.h"

#include "touch.h"
#include "_logf.h"

#include <inttypes.h>
#include <unistd.h>
#include <fcntl.h>
#include <linux/input.h>
#include <time.h>
#include <string>
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

#ifdef _VOS2
  #include <dlfcn.h>
  #include <svcmgr/svc_touch.h>
#endif

#include <sys/stat.h>

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
  for (t_hotspots::iterator it = m_hotspots.begin(); it != m_hotspots.end(); ++it)
  {
    if ((x > it->x1) && (x < it->x2) && (y > it->y1) && (y < it->y2))
    {
      return it->result;
    }
  }

  return keyNoKey;
}

void TouchPad::setHotspots(const t_hotspots &hotspots)
{
  m_hotspots = hotspots;
}

int TouchPad::sendHotspotsToVault()
{
#ifdef FORCE_PIN_ON_GLASS

  if (m_hotspots.empty())
  {
    _LOGF_ERROR("TouchPad::sendHotspotsToVault: define hotspots first! %d!", errno);
    return RESULT_FAIL;
  }

#else

  if (m_hotspots.empty())
  {
    _LOGF_INFO("TouchPad::sendHotspotsToVault: No hotspots defined. Skip configuring vault");
    return RESULT_OK;
  }

#endif

  if (m_hotspots.size() != (10 + 3))
  {
    _LOGF_WARN("TouchPad::sendHotspotsToVault: defined Hotspots should define Digits '0'-'9', keyCancel=27,  keyOK=13 and keyCorrection=8");
  }

  touch_hs_s sp;

  // Initialize touch_hs_s structure
  memset(&sp, 0x00, sizeof(sp));

  if (m_hotspots.size() > MAX_NUM_HOTSPOTS)
  {
    m_hotspots.resize(MAX_NUM_HOTSPOTS);
  }

  sp.num_hotspots = m_hotspots.size();

  for (unsigned i = 0; i < m_hotspots.size(); i++)
  {
    t_hotspot &k = m_hotspots[i];

    sp.touch_spot[i].x1 = k.x1;
    sp.touch_spot[i].y1 = k.y1;
    sp.touch_spot[i].x2 = k.x2;
    sp.touch_spot[i].y2 = k.y2;
    sp.touch_spot[i].result = k.result;
    _LOGF_INFO("TouchPad::sendHotspotsToVault: pininput.cpp: x1=%d y1=%d x2=%d y2=%d result=%d\n",
               sp.touch_spot[i].x1,
               sp.touch_spot[i].y1,
               sp.touch_spot[i].x2,
               sp.touch_spot[i].y2,
               sp.touch_spot[i].result);
  }

  _LOGF_INFO("TouchPad::sendHotspotsToVault: ernno before setSecurePINDisplayParameters %d", errno);
  setSecurePINDisplayParameters(&sp, 0);

  if (errno)
  {
    _LOGF_ERROR("TouchPad::sendHotspotsToVault: setSecurePINDisplayParameters failed (errno=%d)! invalid hotspots?", errno);
    return RESULT_FAIL;
  }

  return RESULT_OK;
}

static int openTouch()
{
  int i;
  int r;
  char fname[64];

  for (i = 0; i < 32; i++)
  {
    int fd;

    sprintf(fname, "/sys/class/input/event%d/device/name", i);
    fd = open(fname, O_RDONLY);

    if (fd < 0)
    {
      continue;
    }

    // Determine the device name
    r = read(fd, fname, sizeof(fname));

    close(fd);

    if (r <= 0)
    {
      continue;
    }

    // Zero terminator at the end of the device name
    fname[r - 1] = '\0';

    if (0 == strncmp(fname, "ti-mag", 6))
    {
      continue;
    }

    struct stat info;

    if (0 == stat("/usr/local/lib/libvatsos.so.1", &info) &&
        0 != strncmp(fname, "Verifone Virtual Keyboard UX300", 31))
    {
      continue;
    }

    _LOGF_INFO("openTouch: Open device is %s\n", fname);

    sprintf(fname, "/sys/class/input/event%d/device/capabilities/ev", i);
    fd = open(fname, O_RDONLY);

    if (fd < 0)
    {
      continue;
    }

    // Determine the device capabilities
    r = read(fd, fname, sizeof(fname));

    close(fd);

    if (r <= 0)
    {
      continue;
    }

    // Zero terminator at the end of the device capabilities
    fname[r - 1] = '\0';

    if ((strtoul(fname, NULL, 16) & (1 << EV_ABS)) == 0)
    {
      continue;
    }

    // Open input device
    sprintf(fname, "/dev/input/event%d", i);
    _LOGF_INFO("openTouch: Nanox: open device %s\n", fname);
    fd = open(fname, O_RDONLY | O_NONBLOCK);

    if (fd < 0)
    {
      continue;
    }

    return fd;
  }

  return RESULT_FAIL;
}

int TouchPad::enterData(csd_string &data, enum DataEntryType entryType, callback_t cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout, unsigned char skipCb9FFE)
{
  if (m_hotspots.empty())
  {
    _LOGF_ERROR("TouchPad::enterData: define hotspots first! %d!", errno);
    return RESULT_FAIL;
  }

  /* Open Device */
  int fd = openTouch();

  if (fd == -1)
  {
    return RESULT_FAIL;
  }

  int x = 0;
  int y = 0;
  int z = 0;
  bool finish = false;

  // set default timeout of 300 seconds if there is no timeout set
  sdi::TimeStamp timeoutVal = sdi::TimeStamp::Monotonic() + ((timeout > 0 ? timeout : 300) * sdi::TimeStamp::S);

  bool panConfirmed = false;

  for (;;)
  {
    const ssize_t ev_size = sizeof(struct input_event);
    ssize_t       size;
    struct        input_event ev;
    int           interrupt;

    if (sdi::TimeStamp::Monotonic() >= timeoutVal)
    {
      // Timeout
      _LOGF_ERROR("TouchPad::enterData: Timeout reached");
      close(fd);
      return RESULT_TIMEOUT;
    }

    // Check for Abort or communication to mobile device interrupted
    interrupt = check4Interrupt();

    if (interrupt != RESULT_OK)
    {
      _LOGF_ERROR("TouchPad::enterData: check4Interrupt returned RESULT_MOBILE_ABORT or RESULT_NO_LINK");
      close(fd);
      return interrupt;
    }

    // Event handling
    size = read(fd, &ev, ev_size);

    if (size == -1)
    {
      if (errno == 11)
      {
        continue;
      }

      _LOGF_ERROR("TouchPad::enterData: Reading error, errno=%d", errno);
      close(fd);
      return RESULT_FAIL;
    }

    //_LOGF_INFO("enterData: ev.type=%d", ev.type);

    switch (ev.type)
    {
      case EV_KEY:
        if (ev.code == BTN_TOUCH)
        {
          if (z == 0 && ev.value == 1)
          {
            finish = false;
          }
          else if (z == 1 && ev.value == 0)
          {
            finish = true;
          }

          z = ev.value;

          //_LOGF_INFO("TouchPad::enterData:EV_KEY: ev.value=%d", ev.value);
        }

        break;

      case EV_ABS:
        switch (ev.code)
        {
          case ABS_X:
          {
            x = ev.value;
            //_LOGF_INFO("TouchPad::enterData:EV_ABS: x=%d", x);
          }

          break;

          case ABS_Y:
          {
            y = ev.value;
            //_LOGF_INFO("TouchPad::enterData:EV_ABS: y=%d", y);
          }

          break;
        }

        break;

      case EV_SYN:

        if (finish == true)
        {
          char c = click(x, y);

          switch (c)
          {
            case keyCancel:
              close(fd);
              _LOGF_INFO("TouchPad::enterData: User cancel");
              return RESULT_USER_CANCEL;

            case keyOK:

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
                close(fd);
                _LOGF_INFO("TouchPad::enterData: Result Ok");
                return RESULT_OK;
              }

              break;

            case keyCorrection:
              data = data.substr(0, data.length() - 1);
              _LOGF_INFO("TouchPad::enterData: keyCorrection, Number of Digits entered: %zu", data.length());

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

            case keyNoKey:
              _LOGF_INFO("TouchPad::enterData: No key");
              break;

            default:
              if (data.length() < maxInputLength)
              {
                data += c;
                _LOGF_INFO("TouchPad::enterData: Number of Digits entered: %zu", data.length());

                if (entryType == TYPE_PAN)
                {
                  // Add string display for obfuscated PAN to the callback
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
              }
              else
              {
                // Send callback to inform the payment app that maximum number of digits is reached
                cb(TOO_MANY_DIGITS_ENTERED, "");
              }

              break;
          }

          finish = false;
        }

        break;
    }
  }
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
