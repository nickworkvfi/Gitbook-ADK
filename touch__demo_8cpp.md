---
title: sdi/src/touch_demo.cpp

---

# sdi/src/touch_demo.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setTestButtons](touch__demo_8cpp.md#function-settestbuttons)**([TouchPad](class_touch_pad.md) & t)<br>setTestButtons generate hotspots with same layout as we have it on the pinpad  |
| void | **[enterDataCB](touch__demo_8cpp.md#function-enterdatacb)**(int num) |
| void | **[enterPinCB](touch__demo_8cpp.md#function-enterpincb)**(int num) |
| int | **[main](touch__demo_8cpp.md#function-main)**(int argc, char * argv[]) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[Carbon](touch__demo_8cpp.md#define-carbon)**  |


## Functions Documentation

### function setTestButtons

```cpp
void setTestButtons(
    TouchPad & t
)
```

setTestButtons generate hotspots with same layout as we have it on the pinpad 

**Parameters**: 

  * **t** 


### function enterDataCB

```cpp
void enterDataCB(
    int num
)
```


### function enterPinCB

```cpp
void enterPinCB(
    int num
)
```


### function main

```cpp
int main(
    int argc,
    char * argv[]
)
```




## Macros Documentation

### define Carbon

```cpp
#define Carbon 
```


## Source code

```cpp
#include "touch.h"

#include <stdio.h>


void setTestButtons(TouchPad &t)
{
#define Carbon
#if defined Raptor
  const int height = 480;
  const int width = 320;
#elif defined Carbon
  const int height = 480;
  const int width = 856;
#endif

  const int xMax = 3;
  const int yMax = 5;

  const int margin = 10;

  char Buttons[][xMax] = {{'1', '2', '3'}, {'4', '5', '6'}, {'7', '8', '9'}, {keyNoKey, '0', keyNoKey}, {keyCancel, keyCorrection, keyOK}};

  TouchPad::t_hotspots hotspots;

  for (int x = 0; x < xMax; ++x)
  {
    for (int y = 0; y < yMax; ++y)
    {
      if (Buttons[y][x])
      {
        TouchPad::t_hotspot b;
        b.x1 = x * width / xMax + margin;
        b.x2 = (x + 1) * width / xMax - margin;

        b.y1 = y * height / yMax + margin;
        b.y2 = (y + 1) * height / yMax - margin;

        b.result = Buttons[y][x];
        b.options = 0; //do not warn missing initializer for member

        hotspots.push_back(b);
      }
    }
  }

  t.setHotspots(hotspots);
}


void enterDataCB(int num)
{
  printf("enterDataCB can show %d stars\n", num);
}

void enterPinCB(int num)
{
  printf("enterPinCB can show %d stars\n", num);
}


int main(int argc, char *argv[])
{
  TouchPad &touchpad = TouchPad::getInstance();

  touchpad.sendHotspotsToVault();

  setTestButtons(touchpad);
  {
    TouchPad::callback_t func = enterDataCB;
    std::string data;
    ExtserverResult result = touchpad.enterData(data, func);

    switch (result)
    {
      case RESULT_OK:
        printf("Entered %s\n", data.c_str());
        break;

      case RESULT_USER_CANCEL:
        printf("user cancellation\n");
        break;

      default:
        printf("Error\n");
        break;
    }
  }

  {
    TouchPad::callback_t func = enterPinCB;
    ExtserverResult result = touchpad.enterPin(func);

    switch (result)
    {
      case RESULT_OK:
        printf("Entered Pin OK\n");
        break;

      case RESULT_USER_CANCEL:
        printf("user cancellation\n");
        break;

      default:
        printf("Error\n");
        break;
    }
  }


}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
