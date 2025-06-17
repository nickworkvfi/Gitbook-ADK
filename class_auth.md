---
title: Auth

---

# Auth





Inherited by [AuthSec](class_auth_sec.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [Auth](class_auth.md) * | **[instance](class_auth.md#function-instance)**() |
| bool | **[auth](class_auth.md#function-auth)**(enum [AuthStep](crypt_8h.md#enum-authstep) as, unsigned char * in, unsigned short in_size, unsigned char * out, unsigned short * out_size) |
| virtual bool | **[check_script](class_auth.md#function-check-script)**() =0 |
| virtual bool | **[calculate_CMAC](class_auth.md#function-calculate-cmac)**([Inputype](crypt_8h.md#enum-inputype) type, const char * fileToMAC, unsigned char * dataToMAC, unsigned dataSize, unsigned char * MAC) =0 |
| virtual bool | **[encrypt](class_auth.md#function-encrypt)**(unsigned char * data, unsigned long dataSize, unsigned char * encryptedData, unsigned long * encryptedDataSize) =0 |
| virtual bool | **[decrypt](class_auth.md#function-decrypt)**(unsigned char * data, unsigned long dataSize, unsigned char * decryptedData, unsigned long * decryptedDataSize) =0 |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[AuthSec](class_auth.md#friend-authsec)**  |

## Public Functions Documentation

### function instance

```cpp
static Auth * instance()
```


### function auth

```cpp
inline bool auth(
    enum AuthStep as,
    unsigned char * in,
    unsigned short in_size,
    unsigned char * out,
    unsigned short * out_size
)
```


### function check_script

```cpp
virtual bool check_script() =0
```


**Reimplemented by**: [AuthSec::check_script](class_auth_sec.md#function-check-script)


### function calculate_CMAC

```cpp
virtual bool calculate_CMAC(
    Inputype type,
    const char * fileToMAC,
    unsigned char * dataToMAC,
    unsigned dataSize,
    unsigned char * MAC
) =0
```


**Reimplemented by**: [AuthSec::calculate_CMAC](class_auth_sec.md#function-calculate-cmac)


### function encrypt

```cpp
virtual bool encrypt(
    unsigned char * data,
    unsigned long dataSize,
    unsigned char * encryptedData,
    unsigned long * encryptedDataSize
) =0
```


**Reimplemented by**: [AuthSec::encrypt](class_auth_sec.md#function-encrypt)


### function decrypt

```cpp
virtual bool decrypt(
    unsigned char * data,
    unsigned long dataSize,
    unsigned char * decryptedData,
    unsigned long * decryptedDataSize
) =0
```


**Reimplemented by**: [AuthSec::decrypt](class_auth_sec.md#function-decrypt)


## Friends

### friend AuthSec

```cpp
friend class AuthSec;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100