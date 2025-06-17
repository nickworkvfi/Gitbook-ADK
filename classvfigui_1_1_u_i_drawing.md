---
title: vfigui::UIDrawing

---

# vfigui::UIDrawing



 [More...](#detailed-description)


`#include <gui.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[@5](classvfigui_1_1_u_i_drawing.md#enum-@5)** { FNT_NORMAL =0x0, FNT_ITALIC =0x1, FNT_BOLD =0x700} |
| enum| **[ImageType](classvfigui_1_1_u_i_drawing.md#enum-imagetype)** { IMG_BMP, IMG_GIF, IMG_JPEG, IMG_PAM, IMG_PBM, IMG_PNG, IMG_RAW} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[UIDrawing](classvfigui_1_1_u_i_drawing.md#function-uidrawing)**() |
| | **[~UIDrawing](classvfigui_1_1_u_i_drawing.md#function-~uidrawing)**() |
| void | **[reset](classvfigui_1_1_u_i_drawing.md#function-reset)**() |
| void | **[clear](classvfigui_1_1_u_i_drawing.md#function-clear)**(unsigned rgb) |
| void | **[color](classvfigui_1_1_u_i_drawing.md#function-color)**(unsigned rgb) |
| void | **[linewidth](classvfigui_1_1_u_i_drawing.md#function-linewidth)**(int w) |
| void | **[line](classvfigui_1_1_u_i_drawing.md#function-line)**(int x, int y, int x2, int y2) |
| void | **[pixel](classvfigui_1_1_u_i_drawing.md#function-pixel)**(int x, int y) |
| void | **[rect](classvfigui_1_1_u_i_drawing.md#function-rect)**(int x, int y, int w, int h) |
| void | **[rectf](classvfigui_1_1_u_i_drawing.md#function-rectf)**(int x, int y, int w, int h) |
| void | **[trif](classvfigui_1_1_u_i_drawing.md#function-trif)**(int x, int y, int x2, int y2, int x3, int y3) |
| void | **[font](classvfigui_1_1_u_i_drawing.md#function-font)**(const char * name, int size, unsigned style =[FNT_NORMAL](classvfigui_1_1_u_i_drawing.md#enumvalue-fnt-normal)) |
| void | **[font](classvfigui_1_1_u_i_drawing.md#function-font)**(const std::string & name, int size, unsigned style =[FNT_NORMAL](classvfigui_1_1_u_i_drawing.md#enumvalue-fnt-normal)) |
| void | **[text](classvfigui_1_1_u_i_drawing.md#function-text)**(const char * text, int x, int y) |
| void | **[text](classvfigui_1_1_u_i_drawing.md#function-text)**(const std::string & text, int x, int y) |
| void | **[image](classvfigui_1_1_u_i_drawing.md#function-image)**([ImageType](classvfigui_1_1_u_i_drawing.md#enum-imagetype) type, const void * data, unsigned size, int x, int y, int w =0, int h =0) |
| void | **[image](classvfigui_1_1_u_i_drawing.md#function-image)**(const char * filename, int x, int y) |
| void | **[image](classvfigui_1_1_u_i_drawing.md#function-image)**(const std::string & filename, int x, int y) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [vfihtml::JSObject](namespacevfihtml.md#typedef-jsobject) | **[drawlist](classvfigui_1_1_u_i_drawing.md#variable-drawlist)**  |

## Detailed Description

```cpp
class vfigui::UIDrawing;
```


class for creating a drawing list 

## Public Types Documentation

### enum @5

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| FNT_NORMAL | =0x0|  normal font  |
| FNT_ITALIC | =0x1|  italic style  |
| FNT_BOLD | =0x700|  bold style  |




font style, values can be combined by or-ing them together 


### enum ImageType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| IMG_BMP | |  BMP image  |
| IMG_GIF | |  GIF image  |
| IMG_JPEG | |  JPEG image  |
| IMG_PAM | |  PAM image  |
| IMG_PBM | |  PBM image  |
| IMG_PNG | |  PNG image  |
| IMG_RAW | |  raw image data, the format is inferred from the size information of the data.  |




image type 


## Public Functions Documentation

### function UIDrawing

```cpp
UIDrawing()
```


constructor 


### function ~UIDrawing

```cpp
~UIDrawing()
```


destructor 


### function reset

```cpp
void reset()
```


reset drawing 


### function clear

```cpp
void clear(
    unsigned rgb
)
```


**Parameters**: 

  * **rgb** 24-bit color value to be used for clearing the canvas 


clear canvas 


### function color

```cpp
void color(
    unsigned rgb
)
```


**Parameters**: 

  * **rgb** 24-bit color value 


set current color for successive drawing commands 


### function linewidth

```cpp
void linewidth(
    int w
)
```


**Parameters**: 

  * **w** line width in pixels, 0 is default 


set line width for line and rect 


### function line

```cpp
void line(
    int x,
    int y,
    int x2,
    int y2
)
```


**Parameters**: 

  * **x** x-coodinate first point 
  * **y** y-coodinate first point 
  * **x2** x-coodinate second point 
  * **y2** y-coodinate second point 


draw line between the given points 


### function pixel

```cpp
void pixel(
    int x,
    int y
)
```


**Parameters**: 

  * **x** x-coodinate 
  * **y** y-coodinate 


draw single pixel pixel 


### function rect

```cpp
void rect(
    int x,
    int y,
    int w,
    int h
)
```


**Parameters**: 

  * **x** x-coodinate 
  * **y** x-coodinate 
  * **w** width 
  * **h** height 


draw rectangle 


### function rectf

```cpp
void rectf(
    int x,
    int y,
    int w,
    int h
)
```


**Parameters**: 

  * **x** x-coodinate 
  * **y** x-coodinate 
  * **w** width 
  * **h** height 


draw filled rectangle 


### function trif

```cpp
void trif(
    int x,
    int y,
    int x2,
    int y2,
    int x3,
    int y3
)
```


**Parameters**: 

  * **x** x-coodinate first point 
  * **y** y-coodinate first point 
  * **x2** x-coodinate second point 
  * **y2** y-coodinate second point 
  * **x3** x-coodinate third point 
  * **y3** y-coodinate third point 


draw filled triangle given by three points 


### function font

```cpp
void font(
    const char * name,
    int size,
    unsigned style =FNT_NORMAL
)
```


**Parameters**: 

  * **name** font name 
  * **size** nominal font height 
  * **style** font style 


set the current font 


### function font

```cpp
void font(
    const std::string & name,
    int size,
    unsigned style =FNT_NORMAL
)
```


**Parameters**: 

  * **name** font name 
  * **size** nominal font height 
  * **style** font style 


set the current font 


### function text

```cpp
void text(
    const char * text,
    int x,
    int y
)
```


**Parameters**: 

  * **text** text 
  * **x** x-coodinate first point 
  * **y** y-coodinate first point 


**Note**: Coordinates refer to the starting point of the base line, e.g. drawing an 'A', x/y refers to the leftmost bottom pixel of 'A'. 

draw text using current font and color 


### function text

```cpp
void text(
    const std::string & text,
    int x,
    int y
)
```


**Parameters**: 

  * **text** text 
  * **x** x-coodinate first point 
  * **y** y-coodinate first point 


**Note**: Coordinates refer to the starting point of the base line, e.g. drawing an 'A', x/y refers to the leftmost bottom pixel of 'A'. 

draw text using current font and color 


### function image

```cpp
void image(
    ImageType type,
    const void * data,
    unsigned size,
    int x,
    int y,
    int w =0,
    int h =0
)
```


**Parameters**: 

  * **type** image type 
  * **data** image data (format depends on type) 
  * **size** number of bytes in data 
  * **x** x-coordinate 
  * **y** y-coordinate 
  * **w** width of the image, only used for IMG_RAW 
  * **h** height of the image, only used for IMG_RAW 


**Note**: In case of IMG_RAW the number of bytes per pixel is determined from size and w*h. Depending on the number of bytes per pixel the image format is considered to be as follows:

* 1: Grayscale image
* 2: Grayscale image with alpha
* 3: RGB image
* 4: RGB image with alpha 

draw image data to screen 


### function image

```cpp
void image(
    const char * filename,
    int x,
    int y
)
```


**Parameters**: 

  * **filename** image file name 
  * **x** x-coordinate 
  * **y** y-coordinate 


draw image data to screen 


### function image

```cpp
void image(
    const std::string & filename,
    int x,
    int y
)
```


**Parameters**: 

  * **filename** image file name 
  * **x** x-coordinate 
  * **y** y-coordinate 


draw image data to screen 


## Public Attributes Documentation

### variable drawlist

```cpp
vfihtml::JSObject drawlist;
```


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100