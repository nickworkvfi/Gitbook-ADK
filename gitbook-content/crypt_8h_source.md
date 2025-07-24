---
hidden: true
title: crypt.h
---

<a href="crypt_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _CRYPT_H_
 9 #define _CRYPT_H_
 10 
 11 /* input types used for functions calculate_CMAC() and check_CMAC() */
 12 enum Inputype
 13 {
 14  INPUT_TYPE_FILE,
 15  INPUT_TYPE_BUFFER,
 16 };
 17 
 18 /* system authentication steps, for more details see function system_Auth() */
 19 enum AuthStep
 20 {
 21  AuthStep_1 = 0,
 22  AuthStep_2
 23 };
 24 
 25 #ifdef __cplusplus
 26 extern "C"
 27 {
 28 #endif
 29 
 34 int check_AuthScript();
 35 
 55 int system_Auth(enum AuthStep as,
 56  unsigned char *in, unsigned short in_size,
 57  unsigned char *out, unsigned short *out_size);
 58 
 68 int calculate_CMAC(Inputype type,
 69  const char *fileToMAC,
 70  unsigned char *dataToMAC,
 71  unsigned dataSize,
 72  unsigned char *MAC);
 73 
 83 int check_CMAC(Inputype type,
 84  const char *filename,
 85  unsigned char *data,
 86  unsigned dataSize,
 87  unsigned char *MAC);
 88 
 97 int encrypt_Data(unsigned char *data,
 98  unsigned long dataSize,
 99  unsigned char *encryptedData,
 100  unsigned long *encryptedDataSize);
 101 
 110 int decrypt_Data(unsigned char *data,
 111  unsigned long dataSize,
 112  unsigned char *decryptedData,
 113  unsigned long *decryptedDataSize);
 114 
 119 int calculate_MD5(const char *file, unsigned char *checkSum);
 120 
 121 #ifdef __cplusplus
 122 }
 123 #endif
 124 
 125 #endif // _CRYPT_H_
```
