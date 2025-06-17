---
title: sdi/src/prt_bitmap_png.cpp

---

# sdi/src/prt_bitmap_png.cpp



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PrintResult](prt__bitmap__png_8cpp.md#enum-printresult)** { PRT_OK =  0, PRT_BUSY = -1, PRT_PAPERJAM = -2, PRT_HEADOPEN = -3, PRT_PAPEREND = -4, PRT_OVERHEAT = -5, PRT_OVERVOLTAGE = -6, PRT_UNDERVOLTAGE = -7, PRT_FAIL = -8, PRT_NO_PRINTER = -10, PRT_OK =  0, PRT_BUSY = -1, PRT_PAPERJAM = -2, PRT_HEADOPEN = -3, PRT_PAPEREND = -4, PRT_OVERHEAT = -5, PRT_OVERVOLTAGE = -6, PRT_UNDERVOLTAGE = -7, PRT_FAIL = -8, PRT_NO_PRINTER = -10} |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[print_bitmap](prt__bitmap__png_8cpp.md#function-print-bitmap)**(int width, int height, const void * vdata) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[chmod](prt__bitmap__png_8cpp.md#define-chmod)**(a, b)  |
|  | **[FILENAME](prt__bitmap__png_8cpp.md#define-filename)**  |

## Types Documentation

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

### function print_bitmap

```cpp
int print_bitmap(
    int width,
    int height,
    const void * vdata
)
```




## Macros Documentation

### define chmod

```cpp
#define chmod(
    a,
    b
)

```


### define FILENAME

```cpp
#define FILENAME "out.png"
```


## Source code

```cpp
#include "_logf.h"
#include "prt.h"
#include <png.h>

#include <stdio.h>
#include <stdlib.h>
#if defined linux
  #include <unistd.h>
  #include <sys/stat.h>
#else
  #define chmod(a,b)
#endif
#include <sys/types.h>
#include <vector>

using std::vector;

#define FILENAME "out.png"


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

int print_bitmap(int width, int height, const void *vdata)
{
  if (width <= 0 || height <= 0)
  {
    return PRT_FAIL;
  }

  unsigned char *data = (unsigned char *)vdata;

  FILE *fp = fopen(FILENAME, "wb");

  if (!fp)
  {
    return PRT_NO_PRINTER;
  }

  png_structp png_ptr = png_create_write_struct(PNG_LIBPNG_VER_STRING, 0, 0, 0);

  if (!png_ptr)
  {
    fclose(fp);
    return PRT_FAIL;
  }

  png_infop info_ptr = png_create_info_struct(png_ptr);

  if (!info_ptr)
  {
    png_destroy_write_struct(&png_ptr, 0);
    fclose(fp);
    return PRT_FAIL;
  }

  if (setjmp(png_jmpbuf(png_ptr)))
  {
    png_destroy_write_struct(&png_ptr, &info_ptr);
    fclose(fp);
    chmod(FILENAME, 0666);
    return PRT_FAIL;
  }

  png_init_io(png_ptr, fp);

  png_set_IHDR(png_ptr, info_ptr,
               width, height,
               1, PNG_COLOR_TYPE_GRAY,
               PNG_INTERLACE_NONE,
               PNG_COMPRESSION_TYPE_DEFAULT,
               PNG_FILTER_TYPE_DEFAULT);

  vector<png_bytep> row(height);
  int bytes_per_row = (width + 7) / 8;

  for (unsigned i = 0; i < row.size(); i++)
  {
    row[i] = data + i * bytes_per_row;
  }

  png_set_rows(png_ptr, info_ptr, &row[0]);

  png_write_png(png_ptr, info_ptr, PNG_TRANSFORM_INVERT_MONO, 0);

  png_destroy_write_struct(&png_ptr, &info_ptr);

  fclose(fp);
#if defined (linux) || defined (__CYGWIN__)
  chmod(FILENAME, 0666);
#endif

  return PRT_OK;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
