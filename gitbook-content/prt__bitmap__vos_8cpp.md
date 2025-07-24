---
hidden: true
title: prt_bitmap_vos.cpp File Reference
---

[Enumerations](#enum-members) \| [Functions](#func-members)

`#include "`<a href="__logf_8h_source.md">_logf.h</a>`"`
`#include "`<a href="sdi_2src_2prt_8h_source.md">prt.h</a>`"`
`#include <printer.h>`
`#include <dlfcn.h>`
`#include <string.h>`

Include dependency graph for prt_bitmap_vos.cpp:

![](prt__bitmap__vos_8cpp__incl.png)

|  |  |
|----|----|
| Enumerations |  |
| enum   | { [BLOCK_HEIGHT](#abc5c98fcc1211af2b80116dd6e0a035dab5a7e599d7747bab6f97e9f15aa3b729) = 512 } |
| enum   | { [PRINTER_WIDTH](#ac36f475ca5b446f4fde4c9b90bec77c8aa24ed1c134538684bb1d59a06f7bde38) = 384, [PRINTER_BYTES_PER_ROW](#ac36f475ca5b446f4fde4c9b90bec77c8ac9eb66aa9aba19fda4a028305e3e999b) = (PRINTER_WIDTH + 7) / 8 } |
| enum   | [PrintResult](#a7350482c4308f419111c9dd6edb941c0) {<br/>  <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0af2ad9f75739b523e78df0375ad38a546">PRT_OK</a> = 0, <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0a8de6b77dc9ed09b215c1999c7e2ba06b">PRT_BUSY</a> = -1, <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0a97c7d651a078ac337e76812e2c065ee8">PRT_PAPERJAM</a> = -2, <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0ad9c03d6e1ea575ed6f996d945d83a945">PRT_HEADOPEN</a> = -3,<br/>  <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0a800ccbd12989598a0bfd6aa12141776c">PRT_PAPEREND</a> = -4, <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0a429988d9a2c4de64c091c963c53de39f">PRT_OVERHEAT</a> = -5, <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0a41e79c4dbe0869fdf53de2ac223a6c55">PRT_OVERVOLTAGE</a> = -6, <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0a4b5ae5a3826908d62ba457037a20f78d">PRT_UNDERVOLTAGE</a> = -7,<br/>  <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0ae4bf0cf9fc2178e4bab2ee0ddfbb1cbc">PRT_FAIL</a> = -8, <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0a7e51c5aeff1f987d71f6fe16119f026a">PRT_NO_PRINTER</a> = -10, [PRT_OK](#a7350482c4308f419111c9dd6edb941c0af2ad9f75739b523e78df0375ad38a546) = 0, [PRT_BUSY](#a7350482c4308f419111c9dd6edb941c0a8de6b77dc9ed09b215c1999c7e2ba06b) = -1,<br/>  [PRT_PAPERJAM](#a7350482c4308f419111c9dd6edb941c0a97c7d651a078ac337e76812e2c065ee8) = -2, [PRT_HEADOPEN](#a7350482c4308f419111c9dd6edb941c0ad9c03d6e1ea575ed6f996d945d83a945) = -3, [PRT_PAPEREND](#a7350482c4308f419111c9dd6edb941c0a800ccbd12989598a0bfd6aa12141776c) = -4, [PRT_OVERHEAT](#a7350482c4308f419111c9dd6edb941c0a429988d9a2c4de64c091c963c53de39f) = -5,<br/>  [PRT_OVERVOLTAGE](#a7350482c4308f419111c9dd6edb941c0a41e79c4dbe0869fdf53de2ac223a6c55) = -6, [PRT_UNDERVOLTAGE](#a7350482c4308f419111c9dd6edb941c0a4b5ae5a3826908d62ba457037a20f78d) = -7, [PRT_FAIL](#a7350482c4308f419111c9dd6edb941c0ae4bf0cf9fc2178e4bab2ee0ddfbb1cbc) = -8, [PRT_NO_PRINTER](#a7350482c4308f419111c9dd6edb941c0a7e51c5aeff1f987d71f6fe16119f026a) = -10<br/>} |

|  |  |
|----|----|
| Functions |  |
| int  | [print_bitmap](#ad23c179a90a8246f38ba424afaf63336) (int width, int height, const void \*vdata) |

## EnumerationType Documentation {#enumeration-type-documentation}

## anonymousenum <a href="#abc5c98fcc1211af2b80116dd6e0a035d" id="abc5c98fcc1211af2b80116dd6e0a035d"></a> {#anonymous-enum}

<p>anonymous enum</p>

| Enumerator    |     |
|---------------|-----|
| BLOCK_HEIGHT  |     |

## anonymousenum <a href="#ac36f475ca5b446f4fde4c9b90bec77c8" id="ac36f475ca5b446f4fde4c9b90bec77c8"></a> {#anonymous-enum-1}

<p>anonymous enum</p>

| Enumerator             |     |
|------------------------|-----|
| PRINTER_WIDTH          |     |
| PRINTER_BYTES_PER_ROW  |     |

## PrintResult <a href="#a7350482c4308f419111c9dd6edb941c0" id="a7350482c4308f419111c9dd6edb941c0"></a>

<p>enum <a href="prt__bitmap__png_8cpp.md#a7350482c4308f419111c9dd6edb941c0">PrintResult</a></p>

| Enumerator |  |
|----|----|
| PRT_OK  | <p>no error</p> |
| PRT_BUSY  | <p>Printing in progress</p> |
| PRT_PAPERJAM  | <p>Paper jam</p> |
| PRT_HEADOPEN  | <p>Head open</p> |
| PRT_PAPEREND  | <p>Paper end</p> |
| PRT_OVERHEAT  | <p>Head too hot</p> |
| PRT_OVERVOLTAGE  | <p>Head over voltage</p> |
| PRT_UNDERVOLTAGE  | <p>Head under voltage</p> |
| PRT_FAIL  | <p>function failed (generic error)</p> |
| PRT_NO_PRINTER  | <p>no printer available</p> |
| PRT_OK  | <p>no error</p> |
| PRT_BUSY  | <p>Printing in progress</p> |
| PRT_PAPERJAM  | <p>Paper jam</p> |
| PRT_HEADOPEN  | <p>Head open</p> |
| PRT_PAPEREND  | <p>Paper end</p> |
| PRT_OVERHEAT  | <p>Head too hot</p> |
| PRT_OVERVOLTAGE  | <p>Head over voltage</p> |
| PRT_UNDERVOLTAGE  | <p>Head under voltage</p> |
| PRT_FAIL  | <p>function failed (generic error)</p> |
| PRT_NO_PRINTER  | <p>no printer available</p> |

## FunctionDocumentation {#function-documentation}

## print_bitmap() <a href="#ad23c179a90a8246f38ba424afaf63336" id="ad23c179a90a8246f38ba424afaf63336"></a>

<p>int print_bitmap</p>
