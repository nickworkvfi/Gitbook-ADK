---
hidden: true
title: Barcode Class Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

Represents <a href="classvficpl_1_1_barcode.md">Barcode</a> object on CP-Payment communication. [More\...](#details)

`#include <`<a href="_commerce_8h_source.md">Commerce.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [Barcode](#a291ffa0b7d79a020fb39f855c2ac3184) () |
|   | [Barcode](#a3da4627dc8fa333860ee89a61b1c6372) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &jsObj) |
| virtual  | [\~Barcode](#a54a0b91ce2363bb68644aca84c09afe3) () |

|              |                                                            |
|--------------|------------------------------------------------------------|
| Data Fields  |                                                            |
| std::string  | [content](#acaab7594675ee66e7abbf9eb5f3f37b1)              |
| float        | [xDimension](#a6e0ef472a8d6ce08053bf839c53d6c44)           |
| std::string  | [errorCorrectionLevel](#a82e2e7af34a1d3abdab4260b36fc9d1e) |
| uint16_t     | [columns](#ae98bc97235b87da7326dd2169ec05437)              |
| uint16_t     | [rows](#a58897720d39a73af3d7686c4e8303758)                 |
| std::string  | [type](#a75b160f574a0be26114bae2c7686a5e1)                 |

## DetailedDescription {#detailed-description}

Represents <a href="classvficpl_1_1_barcode.md">Barcode</a> object on CP-Payment communication.

## Constructor& Destructor Documentation

## Barcode()\[1/2\] <a href="#a291ffa0b7d79a020fb39f855c2ac3184" id="a291ffa0b7d79a020fb39f855c2ac3184"></a> {#barcode-12}

<p><a href="classvficpl_1_1_barcode.md">Barcode</a></p>

constructor of <a href="classvficpl_1_1_barcode.md">Barcode</a>

## Barcode()\[2/2\] <a href="#a3da4627dc8fa333860ee89a61b1c6372" id="a3da4627dc8fa333860ee89a61b1c6372"></a> {#barcode-22}

<p><a href="classvficpl_1_1_barcode.md">Barcode</a></p>

explicit

constructor of <a href="classvficpl_1_1_barcode.md">Barcode</a> filled with jsObj

**Parameters**

**jsObj** - JSObject with construction informations

## \~Barcode() <a href="#a54a0b91ce2363bb68644aca84c09afe3" id="a54a0b91ce2363bb68644aca84c09afe3"></a>

<p>virtual \~<a href="classvficpl_1_1_barcode.md">Barcode</a></p>

virtual

default destructor

## FieldDocumentation {#field-documentation}

## columns <a href="#ae98bc97235b87da7326dd2169ec05437" id="ae98bc97235b87da7326dd2169ec05437"></a>

<p>uint16_t columns</p>

columns - Integer value representing the number of columns for a 2D barcode.

## content <a href="#acaab7594675ee66e7abbf9eb5f3f37b1" id="acaab7594675ee66e7abbf9eb5f3f37b1"></a>

<p>std::string content</p>

content - Data to be encoded as a barcode

## errorCorrectionLevel <a href="#a82e2e7af34a1d3abdab4260b36fc9d1e" id="a82e2e7af34a1d3abdab4260b36fc9d1e"></a>

<p>std::string errorCorrectionLevel</p>

errorCorrectionLevel - Error correction level applicable to QR codes. Must be one of: L, M, Q, H

## rows <a href="#a58897720d39a73af3d7686c4e8303758" id="a58897720d39a73af3d7686c4e8303758"></a>

<p>uint16_t rows</p>

rows - Integer value representing the number of rows for a 2D barcode.

## type <a href="#a75b160f574a0be26114bae2c7686a5e1" id="a75b160f574a0be26114bae2c7686a5e1"></a>

<p>std::string type</p>

type - Type of barcode, must be one of:

- EAN_13,
- UPC_A,
- EAN_8,
- UPC_E,
- DATABAR_OMNI,
- DATABAR_TRUNCATED,
- DATABAR_STACKED,
- DATABAR_STACKED_OMNI,
- DATABAR_OMNI_LIMITED,
- DATABAR_EXPANDED,
- DATABAR_EXPANDED_STACKED,
- ITF_14,
- GS1_128
- GS1_DATAMATRIX,
- GS1_QRCODE

## xDimension <a href="#a6e0ef472a8d6ce08053bf839c53d6c44" id="a6e0ef472a8d6ce08053bf839c53d6c44"></a>

<p>float xDimension</p>

xDimension - Decimal value representing the base dimension in millimeters as per GS1 specification. Refer to: <a href="http://www.gs1.org">http://www.gs1.org</a>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- cpl/include/commerce/<a href="_commerce_8h_source.md">Commerce.h</a>
