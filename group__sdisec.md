---
title: Crypto interface

---

# Crypto interface



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[secOpen](group__sdisec.md#function-secopen)**(unsigned & handle, const std::string & hostname) |
| int | **[secClose](group__sdisec.md#function-secclose)**(unsigned handle) |
| int | **[secEncrypt](group__sdisec.md#function-secencrypt)**(unsigned handle, const bytevector & in, bytevector & out, bytevector * iv =0, bytevector * ksn =0) |
| int | **[secDecrypt](group__sdisec.md#function-secdecrypt)**(unsigned handle, const bytevector & in, bytevector & out, const bytevector * iv =0, bytevector * ksn =0) |
| int | **[secSign](group__sdisec.md#function-secsign)**(unsigned handle, const bytevector & in, bytevector & out, bytevector * iv =0, bytevector * ksn =0) |
| int | **[secVerify](group__sdisec.md#function-secverify)**(unsigned handle, const bytevector & in, const bytevector & sig, const bytevector * iv =0, bytevector * ksn =0) |
| int | **[secUpdateKey](group__sdisec.md#function-secupdatekey)**(unsigned handle, unsigned char keyType, const bytevector & key, bytevector * prop =0, const unsigned char * as2805 =0, bytevector * key_kcv =0) |
| int | **[secUpdateKey](group__sdisec.md#function-secupdatekey)**(unsigned handle, unsigned char keyType, const bytevector & key, bytevector * prop, const unsigned char * as2805, bytevector * key_kcv, const bytevector * iv) |
| int | **[secSetKeySetID](group__sdisec.md#function-secsetkeysetid)**(unsigned handle, unsigned id, unsigned master_id =0) |
| int | **[secGetEncryptedPIN](group__sdisec.md#function-secgetencryptedpin)**(unsigned handle, unsigned char fmt, bytevector & pinblock, bytevector & ksn, bool zero_pin =false) |
| int | **[secGetKeyInventory](group__sdisec.md#function-secgetkeyinventory)**(unsigned handle, std::string & json) |
| int | **[secGetKeyData](group__sdisec.md#function-secgetkeydata)**(unsigned handle, unsigned char keyType, bytevector & out, bool kek_flag =false) |
| int | **[secGetStatus](group__sdisec.md#function-secgetstatus)**(unsigned handle, std::string & json) |
| int | **[secGetStatus](group__sdisec.md#function-secgetstatus)**(const std::string & hostname, std::string & json) |
| int | **[secGetStatus](group__sdisec.md#function-secgetstatus)**(std::string & json) |
| int | **[secGetVersions](group__sdisec.md#function-secgetversions)**(std::string & version) |


## Functions Documentation

### function secOpen

```
int secOpen(
    unsigned & handle,
    const std::string & hostname
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **hostname** host name 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Open the crypto device (70-00) 


### function secClose

```
int secClose(
    unsigned handle
)
```


**Parameters**: 

  * **handle** crypto handle 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Close the crypto device (70-01) 


### function secEncrypt

```
int secEncrypt(
    unsigned handle,
    const bytevector & in,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **in** plain text data (DFA402) 
  * **out** encrypted data 
  * **iv** optional initialization vector (IV), may be NULL 
  * **ksn** optional DUKPT key serial number, may be NULL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Encrypt data (70-02) 


### function secDecrypt

```
int secDecrypt(
    unsigned handle,
    const bytevector & in,
    bytevector & out,
    const bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **in** plain text data 
  * **out** encrypted data 
  * **iv** optional initialization vector (IV), may be NULL 
  * **ksn** optional DUKPT key serial number, may be NULL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Decrypt data (70-03) 


### function secSign

```
int secSign(
    unsigned handle,
    const bytevector & in,
    bytevector & out,
    bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **in** plain text data 
  * **out** MAC or signature 
  * **iv** optional initialization vector (IV), may be NULL 
  * **ksn** optional DUKPT key serial number, may be NULL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Sign data (70-04) 


### function secVerify

```
int secVerify(
    unsigned handle,
    const bytevector & in,
    const bytevector & sig,
    const bytevector * iv =0,
    bytevector * ksn =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **in** plain text data 
  * **sig** MAC or signature 
  * **iv** optional initialization vector (IV), may be NULL 
  * **ksn** optional DUKPT key serial number, may be NULL 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Verify signature (70-05) 


### function secUpdateKey

```
int secUpdateKey(
    unsigned handle,
    unsigned char keyType,
    const bytevector & key,
    bytevector * prop =0,
    const unsigned char * as2805 =0,
    bytevector * key_kcv =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **keyType** key type ([SECKeyType](namespacevfisdi.md#enum-seckeytype)) (DFA40C) 
  * **key** key data, binary data (e.g. 8Byte for 1DES, 16Byte for 3DES and 2TDEA-ADE-DUKPT key, 120Byte for GISKE) [TLV](classvfisdi_1_1_t_l_v.md) if keyType is a Bendigo-type 'KSN incrementation' with keyType=KEY_TYPE_DUKPT effects KSN incrementation (DFA40D) 
  * **prop** if not NULL proprietary data

 in: in case of DUKPT (modules VSS, IPP DUKPT part, ADE): KSN binary data (maybe padded with 0xFF, 0xFF))

 out: in case of VSS-MSK and VSS-DUKPT (module VSS): received data from an assigned Update Finalize macro 
  * **as2805** if not NULL optional AS2805 tag data (1 byte). 
  * **key_kcv** Key Check Value, relevant for MKSK/CustomRKL Key injection and for Trinity/Neo only

 in: kcv of injecting key to verify, it is optional. No verification if empty

 out: kcv of injected key 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Update key (70-06) 


### function secUpdateKey

```
int secUpdateKey(
    unsigned handle,
    unsigned char keyType,
    const bytevector & key,
    bytevector * prop,
    const unsigned char * as2805,
    bytevector * key_kcv,
    const bytevector * iv
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **keyType** key type ([SECKeyType](namespacevfisdi.md#enum-seckeytype)) (DFA40C) 
  * **key** key data, binary data (e.g. 8Byte for 1DES, 16Byte for 3DES and 2TDEA-ADE-DUKPT key, 120Byte for GISKE) [TLV](classvfisdi_1_1_t_l_v.md) if keyType is a Bendigo-type 'KSN incrementation' with keyType=KEY_TYPE_DUKPT effects KSN incrementation (DFA40D) 
  * **prop** if not NULL proprietary data

 in: in case of DUKPT (modules VSS, IPP DUKPT part, ADE): KSN binary data (maybe padded with 0xFF, 0xFF))

 out: in case of VSS-MSK and VSS-DUKPT (module VSS): received data from an assigned Update Finalize macro 
  * **as2805** if not NULL optional AS2805 tag data (1 byte). 
  * **key_kcv** Key Check Value, relevant for MKSK/CustomRKL Key injection and for Trinity/Neo only

 in: kcv of injecting key to verify, it is optional. No verification if empty

 out: kcv of injected key 
  * **iv** if not NULL optional initial vector, relevant for Trinity/Neo only. 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Update key (70-06) 


### function secSetKeySetID

```
int secSetKeySetID(
    unsigned handle,
    unsigned id,
    unsigned master_id =0
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **id** key set ID, it must be always > 0 
  * **master_id** master key set ID, optional parameter, relevant for MKSK Session Key injection and for Trinity only 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Set key set ID (70-07) 


### function secGetEncryptedPIN

```
int secGetEncryptedPIN(
    unsigned handle,
    unsigned char fmt,
    bytevector & pinblock,
    bytevector & ksn,
    bool zero_pin =false
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **fmt** ISO PIN block format (0..3) 
  * **pinblock** encrypted PIN block 
  * **ksn** DUKPT key serial number 
  * **zero_pin** if true request zero PIN block 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Retrieve encrypted PIN block (70-08) 


### function secGetKeyInventory

```
int secGetKeyInventory(
    unsigned handle,
    std::string & json
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **json** JSON formatted information about keys 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get key inventory (70-09) 


### function secGetKeyData

```
int secGetKeyData(
    unsigned handle,
    unsigned char keyType,
    bytevector & out,
    bool kek_flag =false
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **keyType** key type 
  * **out** JSON formatted information about keys 
  * **kek_flag** optional KEK flag 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get key data (70-0A) 


### function secGetStatus

```
int secGetStatus(
    unsigned handle,
    std::string & json
)
```


**Parameters**: 

  * **handle** crypto handle 
  * **json** status information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get crypto status (70-0B) 


### function secGetStatus

```
int secGetStatus(
    const std::string & hostname,
    std::string & json
)
```


**Parameters**: 

  * **hostname** host name, if empty the status of all hosts is returned 
  * **json** status information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get crypto status of host (70-0B) 


### function secGetStatus

```
inline int secGetStatus(
    std::string & json
)
```


**Parameters**: 

  * **json** status information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get crypto status of all hosts (70-0B) 


### function secGetVersions

```
int secGetVersions(
    std::string & version
)
```


**Parameters**: 

  * **version** version information 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Get crypto version information (70-0C) 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100