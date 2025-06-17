---
title: vfiprt::prtControlSeq

---

# vfiprt::prtControlSeq



 [More...](#detailed-description)


`#include <prt.h>`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[fontNormal](structvfiprt_1_1prt_control_seq.md#variable-fontnormal)**  |
| std::string | **[fontDoubleHeight](structvfiprt_1_1prt_control_seq.md#variable-fontdoubleheight)**  |
| std::string | **[fontDoubleWidth](structvfiprt_1_1prt_control_seq.md#variable-fontdoublewidth)**  |
| std::string | **[fontDoubleWidthHeight](structvfiprt_1_1prt_control_seq.md#variable-fontdoublewidthheight)**  |
| std::string | **[italicOff](structvfiprt_1_1prt_control_seq.md#variable-italicoff)**  |
| std::string | **[italicOn](structvfiprt_1_1prt_control_seq.md#variable-italicon)**  |
| std::string | **[boldOff](structvfiprt_1_1prt_control_seq.md#variable-boldoff)**  |
| std::string | **[boldOn](structvfiprt_1_1prt_control_seq.md#variable-boldon)**  |
| std::string | **[underlineOff](structvfiprt_1_1prt_control_seq.md#variable-underlineoff)**  |
| std::string | **[underlineOn](structvfiprt_1_1prt_control_seq.md#variable-underlineon)**  |

## Detailed Description

```cpp
struct vfiprt::prtControlSeq;
```


**Note**: These control sequences may contain 0-bytes! 

control sequences that will be used during conversion to text. 

## Public Attributes Documentation

### variable fontNormal

```cpp
std::string fontNormal;
```


switch to normal (default) font (activated with font-size:24, see HTMLPrinter users guide) 


### variable fontDoubleHeight

```cpp
std::string fontDoubleHeight;
```


switch to double height font (activated with font-size:32, see HTMLPrinter users guide) 


### variable fontDoubleWidth

```cpp
std::string fontDoubleWidth;
```


switch to double width font (activated with font-size:40, see HTMLPrinter users guide) 


### variable fontDoubleWidthHeight

```cpp
std::string fontDoubleWidthHeight;
```


switch to double width and height font (activated with font-size:48, see HTMLPrinter users guide) 


### variable italicOff

```cpp
std::string italicOff;
```


deactivate italic printing 


### variable italicOn

```cpp
std::string italicOn;
```


activate italic printing 


### variable boldOff

```cpp
std::string boldOff;
```


deactivate bold printing 


### variable boldOn

```cpp
std::string boldOn;
```


activate bold printing 


### variable underlineOff

```cpp
std::string underlineOff;
```


deactivate underline printing 


### variable underlineOn

```cpp
std::string underlineOn;
```


activate underline printing 


-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100