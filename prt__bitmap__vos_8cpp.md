---
title: sdi/src/prt_bitmap_vos.cpp

---

# sdi/src/prt_bitmap_vos.cpp



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[@11](prt__bitmap__vos_8cpp.md#enum-@11)** { BLOCK_HEIGHT = 512} |
| enum| **[@12](prt__bitmap__vos_8cpp.md#enum-@12)** { PRINTER_WIDTH = 384, PRINTER_BYTES_PER_ROW = (PRINTER_WIDTH + 7) / 8} |
| enum| **[PrintResult](prt__bitmap__vos_8cpp.md#enum-printresult)** { PRT_OK =  0, PRT_BUSY = -1, PRT_PAPERJAM = -2, PRT_HEADOPEN = -3, PRT_PAPEREND = -4, PRT_OVERHEAT = -5, PRT_OVERVOLTAGE = -6, PRT_UNDERVOLTAGE = -7, PRT_FAIL = -8, PRT_NO_PRINTER = -10, PRT_OK =  0, PRT_BUSY = -1, PRT_PAPERJAM = -2, PRT_HEADOPEN = -3, PRT_PAPEREND = -4, PRT_OVERHEAT = -5, PRT_OVERVOLTAGE = -6, PRT_UNDERVOLTAGE = -7, PRT_FAIL = -8, PRT_NO_PRINTER = -10} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[init_print](prt__bitmap__vos_8cpp.md#function-init-print)**() |
| void | **[convert](prt__bitmap__vos_8cpp.md#function-convert)**(unsigned char * out, const unsigned char * in, int width, int height) |
| int | **[map_error](prt__bitmap__vos_8cpp.md#function-map-error)**(int r) |
| int | **[print_bitmap](prt__bitmap__vos_8cpp.md#function-print-bitmap)**(int width, int height, const void * vdata) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| int(*)(const char *buf, int length) | **[__Printer_PrintBitMap](prt__bitmap__vos_8cpp.md#variable---printer-printbitmap)**  |
| int(*)(unsigned int job_id, unsigned int timeout) | **[__Printer_WaitReady](prt__bitmap__vos_8cpp.md#variable---printer-waitready)**  |
| void(*)(void) | **[__Printer_CancelPrint](prt__bitmap__vos_8cpp.md#variable---printer-cancelprint)**  |

## Types Documentation

### enum @11

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BLOCK_HEIGHT | 512|   |




### enum @12

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PRINTER_WIDTH | 384|   |
| PRINTER_BYTES_PER_ROW | (PRINTER_WIDTH + 7) / 8|   |




### enum PrintResult

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PRT_OK |  0|  no error  |
| PRT_BUSY | -1|  Printing in progress  |
| PRT_PAPERJAM | -2|  Paper jam  |
| PRT_HEADOPEN | -3|  Head open  |
| PRT_PAPEREND | -4|  Paper end  |
| PRT_OVERHEAT | -5|  Head too hot  |
| PRT_OVERVOLTAGE | -6|  Head over voltage  |
| PRT_UNDERVOLTAGE | -7|  Head under voltage  |
| PRT_FAIL | -8|  function failed (generic error)  |
| PRT_NO_PRINTER | -10|  no printer available  |
| PRT_OK |  0|  no error  |
| PRT_BUSY | -1|  Printing in progress  |
| PRT_PAPERJAM | -2|  Paper jam  |
| PRT_HEADOPEN | -3|  Head open  |
| PRT_PAPEREND | -4|  Paper end  |
| PRT_OVERHEAT | -5|  Head too hot  |
| PRT_OVERVOLTAGE | -6|  Head over voltage  |
| PRT_UNDERVOLTAGE | -7|  Head under voltage  |
| PRT_FAIL | -8|  function failed (generic error)  |
| PRT_NO_PRINTER | -10|  no printer available  |





## Functions Documentation

### function init_print

```cpp
static void init_print()
```


### function convert

```cpp
static void convert(
    unsigned char * out,
    const unsigned char * in,
    int width,
    int height
)
```


### function map_error

```cpp
static int map_error(
    int r
)
```


### function print_bitmap

```cpp
int print_bitmap(
    int width,
    int height,
    const void * vdata
)
```



## Attributes Documentation

### variable __Printer_PrintBitMap

```cpp
static int(*)(const char *buf, int length) __Printer_PrintBitMap;
```


### variable __Printer_WaitReady

```cpp
static int(*)(unsigned int job_id, unsigned int timeout) __Printer_WaitReady;
```


### variable __Printer_CancelPrint

```cpp
static void(*)(void) __Printer_CancelPrint;
```



## Source code

```cpp
#include "_logf.h"
#include "prt.h"
#include <printer.h>
#include <dlfcn.h>
#include <string.h>

enum { BLOCK_HEIGHT = 512  }; // block size for processing, BLOCK_HEIGHT*PRINTER_BYTES_PER_ROW<65536!
enum { PRINTER_WIDTH = 384,
       PRINTER_BYTES_PER_ROW = (PRINTER_WIDTH + 7) / 8
     };

enum PrintResult
{
  PRT_OK                 =  0,  
  PRT_BUSY               = -1,  
  PRT_PAPERJAM           = -2,  
  PRT_HEADOPEN           = -3,  
  PRT_PAPEREND           = -4,  
  PRT_OVERHEAT           = -5,  
  PRT_OVERVOLTAGE        = -6,  
  PRT_UNDERVOLTAGE       = -7,  
  PRT_FAIL               = -8,  
  PRT_NO_PRINTER         = -10, 
};

static int (*__Printer_PrintBitMap)(const char *buf, int length);
static int (*__Printer_WaitReady)(unsigned int job_id, unsigned int timeout);
static void (*__Printer_CancelPrint)(void);

static void init_print()
{
  static bool init = false;

  if (init)
  {
    return;
  }

  init = true;

  void *handle;
  handle = dlopen("/usr/local/lib/libvfiltp.so.1", RTLD_LAZY);

  if (handle)
  {
    __Printer_PrintBitMap = (int (*)(const char *, int))          dlsym(handle, "Printer_PrintBitMap");
    __Printer_WaitReady   = (int (*)(unsigned int, unsigned int))dlsym(handle, "Printer_WaitReady");
    __Printer_CancelPrint = (void (*)(void))                        dlsym(handle, "Printer_CancelPrint");

    if (!__Printer_PrintBitMap || !__Printer_WaitReady || !__Printer_CancelPrint)
    {
      __Printer_PrintBitMap = 0;
      __Printer_WaitReady   = 0;
      __Printer_CancelPrint = 0;
      dlclose(handle);
      _LOGF_ERROR("init_print(): Missing symbols in libvfiltp.so.1.\n");
      return;
    }
  }
  else
  {
    _LOGF_ERROR("init_print(): libvfiltp.so.1 not found, no printer support.\n");
  }
}

// convert to width of printer
static void convert(unsigned char *out, const unsigned char *in, int width, int height)
{
  int bytes_per_row = (width + 7) / 8;

  for (int i = 0; i < height; i++)
  {
    memcpy(out, in, bytes_per_row < PRINTER_BYTES_PER_ROW ? bytes_per_row : PRINTER_BYTES_PER_ROW);

    if (bytes_per_row < PRINTER_BYTES_PER_ROW)
    {
      memset(out + bytes_per_row, 0, PRINTER_BYTES_PER_ROW - bytes_per_row);
    }

    out += PRINTER_BYTES_PER_ROW;
    in += bytes_per_row;
  }
}





static int map_error(int r)
{
  switch (r)
  {
    case PRINTER_OK:
      return PRT_OK;

    case PRINTER_OVERHEAT:
      return PRT_OVERHEAT;

    case PRINTER_VP_ERROR:
      return PRT_OVERVOLTAGE;

    case PRINTER_OUT_OF_PAPER:
      return PRT_PAPEREND;

    case PRINTER_LOW_BATTERY:
      return PRT_UNDERVOLTAGE;

    default:
      return PRT_FAIL;
  }
}

int print_bitmap(int width, int height, const void *vdata)
{

  init_print();

  if (!__Printer_PrintBitMap)
  {
    return PRT_NO_PRINTER;
  }

  const unsigned char *data = (const unsigned char *)vdata;
  int bytes_per_row = (width + 7) / 8;

  unsigned char buffer[PRINTER_BYTES_PER_ROW * BLOCK_HEIGHT];

  int job_id, last_id = -1;
  int r = PRINTER_OK;

  while (height > 0)
  {
    int h = height > BLOCK_HEIGHT ? BLOCK_HEIGHT : height;
    convert(buffer, data, width, h);

    job_id = __Printer_PrintBitMap((char *)buffer, h * PRINTER_BYTES_PER_ROW);

    data += bytes_per_row * h;
    height -= h;

    if (job_id >= 0)
    {
      if (last_id >= 0)
      {
        r = __Printer_WaitReady(last_id, 30);
      }

      last_id = job_id;
    }
    else
    {
      r = job_id;
    }

    if (r != PRINTER_OK)
    {
      __Printer_CancelPrint();
      last_id = -1;
      return map_error(r);
    }
  }

  if (last_id >= 0)
  {
    r = __Printer_WaitReady(last_id, 30);
  }

  return map_error(r);
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
