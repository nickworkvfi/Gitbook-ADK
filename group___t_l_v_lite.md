---
title: TLVLite

---

# TLVLite



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ConstData_s](struct_const_data__s.md)**  |
| class | **[com_verifone_TLVLite::SafeBuffer](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CONST_DATA_DET](group___t_l_v_lite.md#define-const-data-det)**(s)  |
|  | **[CONST_DATA_DET_CAST](group___t_l_v_lite.md#define-const-data-det-cast)**(type, s)  |
|  | **[CONST_DATA_ARRAY_INIT](group___t_l_v_lite.md#define-const-data-array-init)**(arr)  |




## Macros Documentation

### define CONST_DATA_DET

```
#define CONST_DATA_DET(
    s
)
((s).buffer), ((s).size)
```


Macro definitions 


### define CONST_DATA_DET_CAST

```
#define CONST_DATA_DET_CAST(
    type,
    s
)
(static_cast<type>(s.buffer)), ((s).size)
```


### define CONST_DATA_ARRAY_INIT

```
#define CONST_DATA_ARRAY_INIT(
    arr
)
{(arr), sizeof(arr)}
```




-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100