---
title: vficpl::Barcode
summary: Represents Barcode object on CP-Payment communication. 

---

# vficpl::Barcode



Represents [Barcode]() object on CP-Payment communication. 


`#include <Commerce.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Barcode](classvficpl_1_1_barcode.md#function-barcode)**() |
| | **[Barcode](classvficpl_1_1_barcode.md#function-barcode)**(const [vfiipc::JSObject](classvfiipc_1_1_j_s_object.md) & jsObj) |
| virtual | **[~Barcode](classvficpl_1_1_barcode.md#function-~barcode)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[content](classvficpl_1_1_barcode.md#variable-content)**  |
| float | **[xDimension](classvficpl_1_1_barcode.md#variable-xdimension)**  |
| std::string | **[errorCorrectionLevel](classvficpl_1_1_barcode.md#variable-errorcorrectionlevel)**  |
| uint16_t | **[columns](classvficpl_1_1_barcode.md#variable-columns)**  |
| uint16_t | **[rows](classvficpl_1_1_barcode.md#variable-rows)**  |
| std::string | **[type](classvficpl_1_1_barcode.md#variable-type)**  |

## Public Functions Documentation

### function Barcode

```cpp
Barcode()
```


constructor of [Barcode](classvficpl_1_1_barcode.md)


### function Barcode

```cpp
explicit Barcode(
    const vfiipc::JSObject & jsObj
)
```


**Parameters**: 

  * **jsObj** - JSObject with construction informations 


constructor of [Barcode](classvficpl_1_1_barcode.md) filled with jsObj 


### function ~Barcode

```cpp
virtual ~Barcode()
```


default destructor 


## Public Attributes Documentation

### variable content

```cpp
std::string content;
```


content - Data to be encoded as a barcode 


### variable xDimension

```cpp
float xDimension;
```


xDimension - Decimal value representing the base dimension in millimeters as per GS1 specification. Refer to: [http://www.gs1.org](http://www.gs1.org)


### variable errorCorrectionLevel

```cpp
std::string errorCorrectionLevel;
```


errorCorrectionLevel - Error correction level applicable to QR codes. Must be one of: L, M, Q, H 


### variable columns

```cpp
uint16_t columns;
```


columns - Integer value representing the number of columns for a 2D barcode. 


### variable rows

```cpp
uint16_t rows;
```


rows - Integer value representing the number of rows for a 2D barcode. 


### variable type

```cpp
std::string type;
```


type - Type of barcode, must be one of:

* EAN_13,
* UPC_A,
* EAN_8,
* UPC_E,
* DATABAR_OMNI,
* DATABAR_TRUNCATED,
* DATABAR_STACKED,
* DATABAR_STACKED_OMNI,
* DATABAR_OMNI_LIMITED,
* DATABAR_EXPANDED,
* DATABAR_EXPANDED_STACKED,
* ITF_14,
* GS1_128
* GS1_DATAMATRIX,
* GS1_QRCODE 


-------------------------------

Updated on 2025-06-17 at 11:52:21 +0100