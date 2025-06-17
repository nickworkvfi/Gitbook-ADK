---
title: vfigui::UICBData

---

# vfigui::UICBData



 [More...](#detailed-description)


`#include <gui.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual | **[~UICBData](classvfigui_1_1_u_i_c_b_data.md#function-~uicbdata)**() |
| virtual int & | **[result](classvfigui_1_1_u_i_c_b_data.md#function-result)**() =0 |
| virtual int | **[txn_id](classvfigui_1_1_u_i_c_b_data.md#function-txn-id)**() =0 |
| virtual [stringmap](namespacevfihtml.md#typedef-stringmap) & | **[value](classvfigui_1_1_u_i_c_b_data.md#function-value)**() =0 |
| virtual std::string & | **[url](classvfigui_1_1_u_i_c_b_data.md#function-url)**() =0 |
| virtual std::vector< [UIErrorEntry](structvfigui_1_1_u_i_error_entry.md) > & | **[error](classvfigui_1_1_u_i_c_b_data.md#function-error)**() =0 |
| virtual std::string & | **[script_error](classvfigui_1_1_u_i_c_b_data.md#function-script-error)**() =0 |
| virtual [UIStatistics](structvfigui_1_1_u_i_statistics.md) & | **[statistics](classvfigui_1_1_u_i_c_b_data.md#function-statistics)**() =0 |

## Detailed Description

```cpp
class vfigui::UICBData;
```


class for accessing data of the current transaction 

## Public Functions Documentation

### function ~UICBData

```cpp
inline virtual ~UICBData()
```


Destructor 


### function result

```cpp
virtual int & result() =0
```


**Return**: result result code of the dialog or event code in case of custom event 

### function txn_id

```cpp
virtual int txn_id() =0
```


**Return**: transaction ID 

### function value

```cpp
virtual stringmap & value() =0
```


**Return**: key value map containing data received from the dialog 

### function url

```cpp
virtual std::string & url() =0
```


**Return**: url of the dialog as provided by the application. 

### function error

```cpp
virtual std::vector< UIErrorEntry > & error() =0
```


**Return**: current status of error list 

### function script_error

```cpp
virtual std::string & script_error() =0
```


**Return**: script error message 

### function statistics

```cpp
virtual UIStatistics & statistics() =0
```


**Return**: statistics data 

-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100