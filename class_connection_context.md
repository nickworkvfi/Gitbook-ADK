---
title: ConnectionContext

---

# ConnectionContext





## Public Functions

|                | Name           |
| -------------- | -------------- |
| [ConnectionContext](class_connection_context.md) * | **[get](class_connection_context.md#function-get)**() |
| [ConnectionContext](class_connection_context.md) * | **[create](class_connection_context.md#function-create)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| void * | **[handle](class_connection_context.md#variable-handle)**  |
| char | **[prot_type](class_connection_context.md#variable-prot-type)**  |
| unsigned | **[msg_id](class_connection_context.md#variable-msg-id)**  |

## Public Functions Documentation

### function get

```cpp
static ConnectionContext * get()
```


### function create

```cpp
static ConnectionContext * create()
```


## Public Attributes Documentation

### variable handle

```cpp
void * handle;
```


handle of the SDI connection 


### variable prot_type

```cpp
char prot_type;
```


protocol type of this SDI command 


### variable msg_id

```cpp
unsigned msg_id;
```


message ID of this SDI command 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100