---
title: sdi/src/crypt.h

---

# sdi/src/crypt.h



## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Inputype](crypt_8h.md#enum-inputype)** { INPUT_TYPE_FILE, INPUT_TYPE_BUFFER} |
| enum| **[AuthStep](crypt_8h.md#enum-authstep)** { AuthStep_1 = 0, AuthStep_2} |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[check_AuthScript](crypt_8h.md#function-check-authscript)**() |
| int | **[system_Auth](crypt_8h.md#function-system-auth)**(enum [AuthStep](crypt_8h.md#enum-authstep) as, unsigned char * in, unsigned short in_size, unsigned char * out, unsigned short * out_size) |
| int | **[calculate_CMAC](crypt_8h.md#function-calculate-cmac)**([Inputype](crypt_8h.md#enum-inputype) type, const char * fileToMAC, unsigned char * dataToMAC, unsigned dataSize, unsigned char * MAC) |
| int | **[check_CMAC](crypt_8h.md#function-check-cmac)**([Inputype](crypt_8h.md#enum-inputype) type, const char * filename, unsigned char * data, unsigned dataSize, unsigned char * MAC) |
| int | **[encrypt_Data](crypt_8h.md#function-encrypt-data)**(unsigned char * data, unsigned long dataSize, unsigned char * encryptedData, unsigned long * encryptedDataSize) |
| int | **[decrypt_Data](crypt_8h.md#function-decrypt-data)**(unsigned char * data, unsigned long dataSize, unsigned char * decryptedData, unsigned long * decryptedDataSize) |
| int | **[calculate_MD5](crypt_8h.md#function-calculate-md5)**(const char * file, unsigned char * checkSum) |

## Types Documentation

### enum Inputype

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| INPUT_TYPE_FILE | |  Calculate MAC from file  |
| INPUT_TYPE_BUFFER | |  Calculate MAC from buffer  |




### enum AuthStep

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| AuthStep_1 | 0|  System Authentication Step 1  |
| AuthStep_2 | |  System Authentication Step 2  |





## Functions Documentation

### function check_AuthScript

```cpp
int check_AuthScript()
```


**Return**: RESULT_OK for success, else RESULT_FAIL for failure 

checks the status of VSS script used for SDI message integrity check (message MAC) and SDI message encryption 


### function system_Auth

```cpp
int system_Auth(
    enum AuthStep as,
    unsigned char * in,
    unsigned short in_size,
    unsigned char * out,
    unsigned short * out_size
)
```


**Parameters**: 

  * **as** For System Authentication Step 1: AuthStep_1 For System Authentication Step 2: AuthStep_2 Input and output data of this function depend on this parameter (see below). 
  * **in** pointer to input data buffer For AuthStep_1 (16 bytes): 16 bytes (Server random, plain) For AuthStep_2 (32 bytes): [16 bytes (E105 token) + 16 bytes (Server token)] SK encrypted 
  * **in_size** size of input buffer (depend on auth. step, see parameter `in`) 
  * **out** pointer to output buffer For AuthStep_1 (42 bytes): [16 bytes (E105 token) + 16 bytes (E105 token)] DUKPT encrypted + 10 bytes (KSN) For AuthStep_2 (32 bytes): [16 bytes (Server token) + 16 bytes (E105 serial number)] SK encrypted 
  * **out_size** in: size of output buffer out: size of output buffer data (depend on auth. step, see parameter `out`) 


**Return**: RESULT_OK for success, else RESULT_FAIL for failure 

Process System Authentication step 1 or 2. With success of step 2, the SDI client (Server) is successfully authenticated against SDI server (E105). In addition, the session key (SK) was stored to vault successfully. This is the prerequisite that other functions [calculate_CMAC()](crypt_8h.md#function-calculate-cmac), [check_CMAC()](crypt_8h.md#function-check-cmac), [encrypt_Data()](crypt_8h.md#function-encrypt-data) and [decrypt_Data()](crypt_8h.md#function-decrypt-data) will work, since these functions use the session key (SK). 


### function calculate_CMAC

```cpp
int calculate_CMAC(
    Inputype type,
    const char * fileToMAC,
    unsigned char * dataToMAC,
    unsigned dataSize,
    unsigned char * MAC
)
```


**Parameters**: 

  * **type** input type. can be a file or a data buffer 
  * **fileToMAC** file name (when input type is INPUT_TYPE_FILE) 
  * **dataToMAC** pointer to input message buffer (when input type is INPUT_TYPE_BUFFER) 
  * **dataSize** size of the input message (when input type is INPUT_TYPE_BUFFER) 
  * **MAC** pointer to the MAC value buffer 


**Return**: RESULT_OK on success otherwise RESULT_FAIL 

Calculate the CMAC value for the given data 


### function check_CMAC

```cpp
int check_CMAC(
    Inputype type,
    const char * filename,
    unsigned char * data,
    unsigned dataSize,
    unsigned char * MAC
)
```


**Parameters**: 

  * **type** input type. can be a file or a data buffer 
  * **filename** file name (when input type is INPUT_TYPE_FILE) 
  * **data** pointer to input message buffer (when input type is INPUT_TYPE_BUFFER) 
  * **dataSize** size of the input message (when input type is INPUT_TYPE_BUFFER) 
  * **MAC** pointer to the MAC value buffer 


**Return**: RESULT_OK on success otherwise RESULT_FAIL 

Check the CMAC value of the given data 


### function encrypt_Data

```cpp
int encrypt_Data(
    unsigned char * data,
    unsigned long dataSize,
    unsigned char * encryptedData,
    unsigned long * encryptedDataSize
)
```


**Parameters**: 

  * **data** pointer to input message buffer 
  * **dataSize** size of the input message 
  * **encryptedData** pointer to encrypted data buffer 
  * **encryptedDataSize** pointer to encrypted data buffer size 


**Return**: RESULT_OK on success otherwise RESULT_FAIL 

Encrypt the given data 


### function decrypt_Data

```cpp
int decrypt_Data(
    unsigned char * data,
    unsigned long dataSize,
    unsigned char * decryptedData,
    unsigned long * decryptedDataSize
)
```


**Parameters**: 

  * **data** pointer to input message buffer 
  * **dataSize** size of the input message 
  * **decryptedData** pointer to decrypted data buffer 
  * **decryptedDataSize** pointer to decrypted data buffer size 


**Return**: RESULT_OK on success otherwise RESULT_FAIL 

Decrypt the given data 


### function calculate_MD5

```cpp
int calculate_MD5(
    const char * file,
    unsigned char * checkSum
)
```


**Parameters**: 

  * **file** file of which MD5 checksum shall be calculated 
  * **checkSum** output buffer for calculated MD5 checksum, buffer must have at least 16 bytes 


**Return**: 1 for success, else 0 for error (e.g. file does not exist) 

Compute and MD5 digest of file `file`




## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _CRYPT_H_
#define _CRYPT_H_

/* input types used for functions calculate_CMAC() and check_CMAC() */
enum Inputype
{
  INPUT_TYPE_FILE,    
  INPUT_TYPE_BUFFER,  
};

/* system authentication steps, for more details see function system_Auth() */
enum AuthStep
{
  AuthStep_1 = 0, 
  AuthStep_2      
};

#ifdef __cplusplus
extern "C"
{
#endif

int check_AuthScript();

int system_Auth(enum AuthStep as,
                unsigned char *in, unsigned short in_size,
                unsigned char *out, unsigned short *out_size);

int calculate_CMAC(Inputype type,
                   const char *fileToMAC,
                   unsigned char *dataToMAC,
                   unsigned dataSize,
                   unsigned char  *MAC);

int check_CMAC(Inputype type,
               const char *filename,
               unsigned char  *data,
               unsigned dataSize,
               unsigned char  *MAC);

int encrypt_Data(unsigned char *data,
                 unsigned long dataSize,
                 unsigned char *encryptedData,
                 unsigned long *encryptedDataSize);

int decrypt_Data(unsigned char  *data,
                 unsigned long dataSize,
                 unsigned char  *decryptedData,
                 unsigned long *decryptedDataSize);

int calculate_MD5(const char *file, unsigned char *checkSum);

#ifdef __cplusplus
}
#endif

#endif // _CRYPT_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
