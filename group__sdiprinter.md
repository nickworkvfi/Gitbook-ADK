---
title: Printer interface

---

# Printer interface



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[printSetPropertyString](group__sdiprinter.md#function-printsetpropertystring)**(int property, const std::string & in) |
| int | **[printSetPropertyInt](group__sdiprinter.md#function-printsetpropertyint)**(int property, int in) |
| int | **[printGetPropertyString](group__sdiprinter.md#function-printgetpropertystring)**(int property, std::string & out) |
| int | **[printGetPropertyInt](group__sdiprinter.md#function-printgetpropertyint)**(int property, int & out) |
| int | **[printHTML](group__sdiprinter.md#function-printhtml)**(const std::string & html, bool landscape =false) |
| int | **[printBitmap](group__sdiprinter.md#function-printbitmap)**(int width, int height, const void * bitmap, unsigned size) |
| int | **[printBitmap](group__sdiprinter.md#function-printbitmap)**(int width, int height, const bytevector & bitmap) |


## Functions Documentation

### function printSetPropertyString

```
int printSetPropertyString(
    int property,
    const std::string & in
)
```


**Parameters**: 

  * **property** property ID ([PrtPropertyString](namespacevfisdi.md#enum-prtpropertystring)) 
  * **in** new property value 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set string property (25-00) 


### function printSetPropertyInt

```
int printSetPropertyInt(
    int property,
    int in
)
```


**Parameters**: 

  * **property** property ID ([PrtPropertyInt](namespacevfisdi.md#enum-prtpropertyint)) 
  * **in** new property value 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

set int property (25-00) 


### function printGetPropertyString

```
int printGetPropertyString(
    int property,
    std::string & out
)
```


**Parameters**: 

  * **property** property ID ([PrtPropertyString](namespacevfisdi.md#enum-prtpropertystring)) 
  * **out** read property 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read string property (25-01) 


### function printGetPropertyInt

```
int printGetPropertyInt(
    int property,
    int & out
)
```


**Parameters**: 

  * **property** property ID ([PrtPropertyInt](namespacevfisdi.md#enum-prtpropertyint)) 
  * **out** read property 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

read int property (25-01) 


### function printHTML

```
int printHTML(
    const std::string & html,
    bool landscape =false
)
```


**Parameters**: 

  * **html** HTML document 
  * **landscape** if true print in landscape 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

print HTML document 


### function printBitmap

```
int printBitmap(
    int width,
    int height,
    const void * bitmap,
    unsigned size
)
```


**Parameters**: 

  * **width** width of bitmap 
  * **height** height of bitmap 
  * **bitmap** bitmap data, set bits represent black pixels, ordering left to right is MSB to LSB. 
  * **size** size of _bitmap_ in bytes 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

print bitmap 


### function printBitmap

```
inline int printBitmap(
    int width,
    int height,
    const bytevector & bitmap
)
```


**Parameters**: 

  * **width** width of bitmap 
  * **height** height of bitmap 
  * **bitmap** bitmap data, set bits represent black pixels, ordering left to right is MSB to LSB. 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

print bitmap 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100