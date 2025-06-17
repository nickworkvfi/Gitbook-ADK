---
title: sdi/src/prt_bitmap_k81.cpp

---

# sdi/src/prt_bitmap_k81.cpp



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[@9](prt__bitmap__k81_8cpp.md#enum-@9)** { BLOCK_HEIGHT = 512} |
| enum| **[@10](prt__bitmap__k81_8cpp.md#enum-@10)** { PRINTER_WIDTH = 384, PRINTER_BYTES_PER_ROW = (PRINTER_WIDTH + 7) / 8} |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[convert](prt__bitmap__k81_8cpp.md#function-convert)**(unsigned char * out, const unsigned char * in, int width, int height) |
| int | **[print_getStatus](prt__bitmap__k81_8cpp.md#function-print-getstatus)**(void ) |
| int | **[print_bitmap](prt__bitmap__k81_8cpp.md#function-print-bitmap)**(int width, int height, const void * vdata) |

## Types Documentation

### enum @9

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BLOCK_HEIGHT | 512|   |




### enum @10

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PRINTER_WIDTH | 384|   |
| PRINTER_BYTES_PER_ROW | (PRINTER_WIDTH + 7) / 8|   |





## Functions Documentation

### function convert

```cpp
static void convert(
    unsigned char * out,
    const unsigned char * in,
    int width,
    int height
)
```


### function print_getStatus

```cpp
int print_getStatus(
    void 
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




## Source code

```cpp
#include "_logf.h"
#include "prt.h"
#include "prt_bitmap.h"
#include <stdio.h>
#include <string.h>

#include "pal/printer.h"

enum { BLOCK_HEIGHT = 512  };
enum { PRINTER_WIDTH = 384,
       PRINTER_BYTES_PER_ROW = (PRINTER_WIDTH + 7) / 8
     };

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

int print_getStatus(void)
{
  return palPrtGetStatus();
}

int print_bitmap(int width, int height, const void *vdata)
{
  int ret;
  _LOGF_INFO("API %s called", __func__);

  if ((ret = print_getStatus()) != PALPRT_OK)
  {
    _LOGF_ERROR("%s: print_getStatus failed %d", __func__, ret);
    return ret;
  }

  const unsigned char *data = (const unsigned char *)vdata;

  if (width > PRINTER_WIDTH)
  {
    int bytes_per_row = (width + 7) / 8;
    unsigned char buffer[PRINTER_BYTES_PER_ROW * BLOCK_HEIGHT];

    while (height > 0)
    {
      int h = height > BLOCK_HEIGHT ? BLOCK_HEIGHT : height;
      convert(buffer, data, width, h);
      ret = print_bitmap(PRINTER_WIDTH, h, buffer);
      data += bytes_per_row * h;
      height -= h;

      if (ret)
      {
        return ret;
      }
    }

    return PALPRT_OK;
  }

  ret = palPrtPrintImage(width, height, data);

  if (PALPRT_OK != ret)
  {
    return ret;
  }

  do
  {
    ret = print_getStatus();
  }
  while (ret == PALPRT_BUSY);

  return ret;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
