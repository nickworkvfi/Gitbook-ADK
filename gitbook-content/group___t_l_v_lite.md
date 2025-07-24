---
hidden: true
title: TLVLite
---

[Data Structures](#nested-classes) \| [Macros](#define-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [ConstData_s](#struct_const_data__s) |
| class   | <a href="classcom__verifone___t_l_v_lite_1_1_safe_buffer.md">SafeBuffer</a> |

|  |  |
|----|----|
| Macros |  |
| #define  | [CONST_DATA_DET](#gac8dfb15824cad3ce1c27d6d0795d88d8)(s)   ((s).buffer), ((s).size) |
| #define  | [CONST_DATA_DET_CAST](#ga6ce5011c9a3d1678fc8d4a6286749fc9)(type, s)   (static_cast\<type\>(s.buffer)), ((s).size) |
| #define  | [CONST_DATA_ARRAY_INIT](#ga2b5114f408dd03f025e0f0f433ea29ec)(arr)   {(arr), sizeof(arr)} |

## DetailedDescription {#detailed-description}

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## ConstData_s <a href="#struct_const_data__s" id="struct_const_data__s"></a>

<p>struct ConstData_s</p>

Exported class declarations

| Data Fields   |        |     |
|---------------|--------|-----|
| const void \* | buffer |     |
| size_t        | size   |     |

## MacroDefinition Documentation {#macro-definition-documentation}

## CONST_DATA_ARRAY_INIT <a href="#ga2b5114f408dd03f025e0f0f433ea29ec" id="ga2b5114f408dd03f025e0f0f433ea29ec"></a>

<p>#define CONST_DATA_ARRAY_INIT</p>

## CONST_DATA_DET <a href="#gac8dfb15824cad3ce1c27d6d0795d88d8" id="gac8dfb15824cad3ce1c27d6d0795d88d8"></a>

<p>#define CONST_DATA_DET</p>

Macro definitions

## CONST_DATA_DET_CAST <a href="#ga6ce5011c9a3d1678fc8d4a6286749fc9" id="ga6ce5011c9a3d1678fc8d4a6286749fc9"></a>

<p>#define CONST_DATA_DET_CAST</p>
