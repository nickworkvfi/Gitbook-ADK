---
title: AuthSec

---

# AuthSec





Inherits from [Auth](class_auth.md)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual bool | **[check_script](class_auth_sec.md#function-check-script)**() |
| virtual bool | **[calculate_CMAC](class_auth_sec.md#function-calculate-cmac)**([Inputype](crypt_8h.md#enum-inputype) type, const char * fileToMAC, unsigned char * dataToMAC, unsigned dataSize, unsigned char * MAC) |
| virtual bool | **[encrypt](class_auth_sec.md#function-encrypt)**(unsigned char * data, unsigned long dataSize, unsigned char * encryptedData, unsigned long * encryptedDataSize) |
| virtual bool | **[decrypt](class_auth_sec.md#function-decrypt)**(unsigned char * data, unsigned long dataSize, unsigned char * decryptedData, unsigned long * decryptedDataSize) |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[Auth](class_auth_sec.md#friend-auth)**  |

## Additional inherited members

**Public Functions inherited from [Auth](class_auth.md)**

|                | Name           |
| -------------- | -------------- |
| [Auth](class_auth.md) * | **[instance](class_auth.md#function-instance)**() |
| bool | **[auth](class_auth.md#function-auth)**(enum [AuthStep](crypt_8h.md#enum-authstep) as, unsigned char * in, unsigned short in_size, unsigned char * out, unsigned short * out_size) |


## Public Functions Documentation

### function check_script

```cpp
inline virtual bool check_script()
```


**Reimplements**: [Auth::check_script](class_auth.md#function-check-script)


### function calculate_CMAC

```cpp
inline virtual bool calculate_CMAC(
    Inputype type,
    const char * fileToMAC,
    unsigned char * dataToMAC,
    unsigned dataSize,
    unsigned char * MAC
)
```


**Reimplements**: [Auth::calculate_CMAC](class_auth.md#function-calculate-cmac)


### function encrypt

```cpp
inline virtual bool encrypt(
    unsigned char * data,
    unsigned long dataSize,
    unsigned char * encryptedData,
    unsigned long * encryptedDataSize
)
```


**Reimplements**: [Auth::encrypt](class_auth.md#function-encrypt)


### function decrypt

```cpp
inline virtual bool decrypt(
    unsigned char * data,
    unsigned long dataSize,
    unsigned char * decryptedData,
    unsigned long * decryptedDataSize
)
```


**Reimplements**: [Auth::decrypt](class_auth.md#function-decrypt)


## Friends

### friend Auth

```cpp
friend class Auth;
```


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100