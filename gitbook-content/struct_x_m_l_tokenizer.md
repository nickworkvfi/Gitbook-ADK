---
hidden: true
title: XMLTokenizer Struct Reference
---

[Data Fields](#pub-attribs)

`#include <`<a href="xmldoc_8h_source.md">xmldoc.h</a>`>`

|  |  |
|----|----|
| Data Fields |  |
| char \*  | [buffer](#aff2566f4c366b48d73479bef43ee4d2e) |
| int  | [inside_node](#ad1b6b31b707d910f98cb5ee0cd494d5f) |
| char  | [bn](#a30782372abbc2adb360148192e53bd29) |
|   | backup for byte temporarily overwritten by 0-byte to terminate name [More\...](#a30782372abbc2adb360148192e53bd29)<br/> |
| char  | [bv](#ad2ee8371dd21488388ec6d0fdd2c5c4d) |
|   | backup for byte temporarily overwritten by 0-byte to terminate value [More\...](#ad2ee8371dd21488388ec6d0fdd2c5c4d)<br/> |
| enum <a href="xmldoc_8h.md#aa5d1bb6cbd537293ccc23cbe090c4256">XMLTokenizer__Encoding</a>  | [encoding](#ab6ecbfeecc6ed099337748958c2771bc) |
| char \*  | [name](#a5ac083a645d964373f022d03df4849c8) |
| int  | [name_len](#a299efd1f0f06729d349e9c000260a4a1) |
| char \*  | [value](#a4e9aec275e566b978a3ccb4e043d8c61) |
| int  | [value_len](#a2f4ca32f475d4554a45911e5924c4214) |
| char \*(\*  | [fill](#a220959f4e31233aae9f69acacc8a6cf4) )(void \*[fill_data](#a8bae1c7fffe501d71742b7579898c98c)) |
| void \*  | [fill_data](#a8bae1c7fffe501d71742b7579898c98c) |

## DetailedDescription {#detailed-description}

class for splitting XML code into tokens

## FieldDocumentation {#field-documentation}

## bn <a href="#a30782372abbc2adb360148192e53bd29" id="a30782372abbc2adb360148192e53bd29"></a>

<p>char bn</p>

backup for byte temporarily overwritten by 0-byte to terminate name

## buffer <a href="#aff2566f4c366b48d73479bef43ee4d2e" id="aff2566f4c366b48d73479bef43ee4d2e"></a>

<p>char\* buffer</p>

## bv <a href="#ad2ee8371dd21488388ec6d0fdd2c5c4d" id="ad2ee8371dd21488388ec6d0fdd2c5c4d"></a>

<p>char bv</p>

backup for byte temporarily overwritten by 0-byte to terminate value

## encoding <a href="#ab6ecbfeecc6ed099337748958c2771bc" id="ab6ecbfeecc6ed099337748958c2771bc"></a>

<p>enum <a href="xmldoc_8h.md#aa5d1bb6cbd537293ccc23cbe090c4256">XMLTokenizer__Encoding</a> encoding</p>

## fill <a href="#a220959f4e31233aae9f69acacc8a6cf4" id="a220959f4e31233aae9f69acacc8a6cf4"></a>

<p>char\*(\* fill(void \*[fill_data](#a8bae1c7fffe501d71742b7579898c98c))</p>

## fill_data <a href="#a8bae1c7fffe501d71742b7579898c98c" id="a8bae1c7fffe501d71742b7579898c98c"></a>

<p>void\* fill_data</p>

## inside_node <a href="#ad1b6b31b707d910f98cb5ee0cd494d5f" id="ad1b6b31b707d910f98cb5ee0cd494d5f"></a>

<p>int inside_node</p>

## name <a href="#a5ac083a645d964373f022d03df4849c8" id="a5ac083a645d964373f022d03df4849c8"></a>

<p>char\* name</p>

## name_len <a href="#a299efd1f0f06729d349e9c000260a4a1" id="a299efd1f0f06729d349e9c000260a4a1"></a>

<p>int name_len</p>

## value <a href="#a4e9aec275e566b978a3ccb4e043d8c61" id="a4e9aec275e566b978a3ccb4e043d8c61"></a>

<p>char\* value</p>

## value_len <a href="#a2f4ca32f475d4554a45911e5924c4214" id="a2f4ca32f475d4554a45911e5924c4214"></a>

<p>int value_len</p>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- sdi/src/<a href="xmldoc_8h_source.md">xmldoc.h</a>
