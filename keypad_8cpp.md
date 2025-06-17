---
title: sdi/src/keypad.cpp

---

# sdi/src/keypad.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[openKeypad](keypad_8cpp.md#function-openkeypad)**()<br>get fileDescriptor of keypad device  |


## Functions Documentation

### function openKeypad

```cpp
static int openKeypad()
```

get fileDescriptor of keypad device 

**Return**: fd Descriptor 



## Source code

```cpp
#include <string.h>

#include "timestamp.h"

#include "ui.h"

#include "keypad.h"
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

#include "sys.h"

#include <sys/stat.h>

using namespace std;
using namespace csd;

KeyPad::KeyPad()
{
}

KeyPad::~KeyPad()
{
}

static int openKeypad()
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

    r = read(fd, fname, sizeof(fname));
    close(fd);

    if (r <= 0)
    {
      continue;
    }

    fname[r - 1] = '\0';

    struct stat info;

    if (0 == stat("/usr/local/lib/libvatsos.so.1", &info))
    {
      if (0 != strncmp(fname, "Verifone Virtual Keyboard UX300", 31))
      {
        continue;
      }
    }
    else if (NULL == strstr(fname, "keypad"))
    {
      continue;
    }

    sprintf(fname, "/dev/input/event%d", i);
    _LOGF_INFO("openKeypad: open device %s\n", fname);
    fd = open(fname, O_RDONLY | O_NONBLOCK);

    if (fd < 0)
    {
      continue;
    }

    return fd;
  }

  return RESULT_FAIL;
}

int KeyPad::enterData(csd_string &data, enum DataEntryType entryType, callback_t cb, unsigned char minInputLength, unsigned char maxInputLength, unsigned short timeout, unsigned char skipCb9FFE)
{

  /* Open Device */
  int fd = openKeypad();

  if (fd == -1)
  {
    return RESULT_FAIL;
  }

  // set default timeout of 300 seconds if there is no timeout set
  sdi::TimeStamp timeoutVal = sdi::TimeStamp::Monotonic() + ((timeout > 0 ? timeout : 300) * sdi::TimeStamp::S);

  bool panConfirmed = false;

  for (;;)
  {
    const ssize_t ev_size = sizeof(struct input_event);
    ssize_t       size;
    struct        input_event ev;
    int           interrupt;

    // Check for timeout
    if (sdi::TimeStamp::Monotonic() >= timeoutVal)
    {
      // Timeout
      _LOGF_ERROR("KeyPad::enterData: Timeout reached");
      close(fd);
      return RESULT_TIMEOUT;
    }

    usleep(10000);

    // Check for Abort or communication to mobile device interrupted
    interrupt = check4Interrupt();

    if (interrupt != RESULT_OK)
    {
      _LOGF_ERROR("KeyPad::enterData: check4Interrupt returned RESULT_MOBILE_ABORT or RESULT_NO_LINK");
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

      _LOGF_ERROR("KeyPad::enterData: Reading error, errno=%d", errno);
      close(fd);
      return RESULT_FAIL;
    }
    else if ((size == ev_size) &&
             (ev.type == EV_KEY) &&
             (ev.value == 1))
    {
      switch (ev.code)
      {
        case KEY_0:
        case KEY_1:
        case KEY_2:
        case KEY_3:
        case KEY_4:
        case KEY_5:
        case KEY_6:
        case KEY_7:
        case KEY_8:
        case KEY_9:
        {
          if (data.length() < maxInputLength)
          {
            data += ev.code == KEY_0 ? "0" :
                    ev.code == KEY_1 ? "1" :
                    ev.code == KEY_2 ? "2" :
                    ev.code == KEY_3 ? "3" :
                    ev.code == KEY_4 ? "4" :
                    ev.code == KEY_5 ? "5" :
                    ev.code == KEY_6 ? "6" :
                    ev.code == KEY_7 ? "7" :
                    ev.code == KEY_8 ? "8" : "9";
            _LOGF_INFO("KeyPad::enterData: Number of Digits entered: %zu", data.length());

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

        case KEY_ENTER:
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
            close(fd);
            _LOGF_INFO("KeyPad::enterData: Result Ok");
            return RESULT_OK;
          }

          break;
        }

        case KEY_BACKSPACE:
        {
          data = data.substr(0, data.length() - 1);
          _LOGF_INFO("KeyPad::enterData: keyCorrection, Number of Digits entered: %zu", data.length());

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

        case KEY_ESC:
        {
          close(fd);
          _LOGF_INFO("keypad.cpp: enterData: User cancel");
          return RESULT_USER_CANCEL;
        }

        default:
        {
          _LOGF_INFO("KeyPad::enterData: No key");
          break;
        }
      }
    }
  }
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
