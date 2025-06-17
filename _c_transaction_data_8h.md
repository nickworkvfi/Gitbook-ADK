---
title: sec/src/api/export/sec/CTransactionData.h
summary: ADK Security Service Transaction Data. 

---

# sec/src/api/export/sec/CTransactionData.h

ADK Security Service Transaction Data.  [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[com_adksec_cmd](namespacecom__adksec__cmd.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com_adksec_cmd::CTransactionValue](classcom__adksec__cmd_1_1_c_transaction_value.md)**  |
| class | **[com_adksec_cmd::CTransactionData](classcom__adksec__cmd_1_1_c_transaction_data.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpecSEC](_c_transaction_data_8h.md#define-dllspecsec)**  |

## Detailed Description

ADK Security Service Transaction Data. 

**Author**: JensW

**Date**: 11.04.2016 



## Macros Documentation

### define DllSpecSEC

```cpp
#define DllSpecSEC 
```


## Source code

```cpp

#ifndef ENCGOVERNOR_CTRANSACTIONDATA_H_
#define ENCGOVERNOR_CTRANSACTIONDATA_H_

#include <stdint.h>
#include <stddef.h>
#include <map>
#include <vector>
#include <cstring>
#include <string>
#include <ipc/jsobject.h>
#include "secError.h"

#if (defined _VRXEVO || defined _WIN32)
#  if defined VFI_SEC_SHARED_EXPORT
#    define DllSpecSEC __declspec(dllexport)
#  elif defined VFI_SEC_STATIC_EXPORT || defined _WIN32  // dllimport not required for Windows
#    define DllSpecSEC
#  else
#    define DllSpecSEC __declspec(dllimport)
#  endif
#elif defined __GNUC__ && defined VFI_SEC_SHARED_EXPORT
#  define DllSpecSEC  __attribute__((visibility ("default")))
#else
#  define DllSpecSEC
#endif


namespace com_adksec_cmd
{


typedef uint32_t secHandle_t;
typedef uint8_t bitMask_t;
typedef std::string secIndex_t;

typedef unsigned char eSecCommandtype;

class DllSpecSEC CTransactionValue
{
public:
    //secError putData(int data);
    //secError putData(std::string data);
    //secError putDataBCD(uint8_t * data, int len); // has to verify format
    //getData ...

    CTransactionValue(); //don't use this. stl-containers need this default-constructor internally.
    CTransactionValue(const std::string& s);
    CTransactionValue(const vfiipc::JSObject& json);
    CTransactionValue(const int& data);
    CTransactionValue(const std::vector<uint8_t>& vData);
    CTransactionValue(const uint8_t* pData, size_t len);
    ~CTransactionValue();

    std::string dump() const;
    void load(const std::string &jsonString);
    void load(const vfiipc::JSObject& js);

    bool getBool() const;
    int getInt() const;
    std::string getString() const;
    std::vector<uint8_t> getBuffer() const;
    std::vector<uint8_t> getRaw() const;
    void cleanBuffer();

    operator bool() const               { return getBool(); };
    operator int() const                { return (int)getInt(); };
    operator uint8_t() const            { return (uint8_t)getInt(); };
    operator uint32_t() const           { return (uint32_t)getInt(); };
    operator std::string() const        { return getString(); };
    operator std::vector<uint8_t>() const { return getBuffer(); };


    void restrictPermissions(bitMask_t allowedPermissions) {m_permissionFlags &= allowedPermissions;};

    bitMask_t getPermissions() const {return m_permissionFlags;};

    static bool isWritable(bitMask_t permissionFlags) {return (permissionFlags & PermWriteAble);};
    bool isWritable() const {return isWritable(m_permissionFlags);};

    static bool isReadable(bitMask_t permissionFlags) {return (permissionFlags & PermReadAble);};
    bool isReadable() const {return isReadable(m_permissionFlags);};

private:
    friend class CTransactionData;
    vfiipc::JSObject json() const;
    void assertReadability() const;
private:

    enum secTAValueType
    {
        secTAVnull, secTAVstring, secTAVinteger, secTAVvector, secTAVbcd, secTAVhex, secTAVkekFlag
    };

    std::vector<uint8_t> m_data; 
    bitMask_t m_permissionFlags; 
    secTAValueType m_datatype;
public:
    enum ePermissionFlags {
        PermPrivate   = 0x00,
        PermWriteAble = 0x01,
        PermReadAble  = 0x10,
        PermWriteOnly = PermWriteAble,
        PermReadOnly  = PermReadAble,
        PermReadWrite = PermWriteAble | PermReadAble, 
        PermDefault   = PermReadWrite,
    };
};

typedef CTransactionValue SecTransactionValue;


class DllSpecSEC CTransactionData: public std::map<secIndex_t, CTransactionValue>
{
private:
    // Verix compiler silently adds references to copy-methods.
    // Then tests do not compile because of undefined references (in Verix).
    // So we explicitly prohibit copy to not have this references (JensW2).
#ifdef VFI_PLATFORM_VERIXEVO
    // Do this for Verix only, because VOS/VOS2 implementation of maps works
    // with construction-copyable classes only (JensW2).
    CTransactionData( const CTransactionData& other ) {}; // non construction-copyable
#endif
    CTransactionData& operator=( const CTransactionData& ); // non copyable
public:
    CTransactionData(const std::string& jsonString);
    CTransactionData();
    virtual ~CTransactionData();

    std::string dump() const;
    void load(const std::string &jsonString);


    bool isAvailable(const secIndex_t& key) const;


    // default transaction data index using in Encryption Governor service
    static const secIndex_t TagKeySetID;
    static const secIndex_t TagIPPUseBinFormat;
    static const secIndex_t TagADEEncMode;
    static const secIndex_t TagBendigoKEKFlag;
    static const secIndex_t TagAS2805Func;
    static const secIndex_t TagVSSDUKPTMaskPIN;
    static const secIndex_t TagVSSDUKPTMaskMAC;
    static const secIndex_t TagVSSDUKPTMaskENC;
    static const secIndex_t setDUKPTmasks;
    static const secIndex_t TagHostName;
    static const secIndex_t TagPAN;                
    static const secIndex_t TagCHName;             
    static const secIndex_t TagMID;                
    static const secIndex_t TagPANandCVV;          
    static const secIndex_t TagTrack1;             
    static const secIndex_t TagTrack2;             
    static const secIndex_t TagTrack3;             
    static const secIndex_t TagAlphaNum;           
    static const secIndex_t TagByteArray;          
    static const secIndex_t TagCardDataType;       
    static const secIndex_t TagObfuscatedPAN;      
    static const secIndex_t TagObfuscatedCHName;   
    static const secIndex_t TagObfuscatedTrack1;   
    static const secIndex_t TagObfuscatedTrack2;   
    static const secIndex_t TagStan;
    static const secIndex_t TagTransAmount;
    static const secIndex_t TagVSSPropData; 
    static const secIndex_t TagFlagBypassKsnIncr;
    static const secIndex_t TagNextKSNState;       
    static const secIndex_t Tag0PinBlockRequest; 
    static const secIndex_t _TDindex; 
    static const secIndex_t _SessionKey; 
    static const secIndex_t TagCryptoRWLegacyDecrypt;
    static const secIndex_t TagTrustConn;
    static const secIndex_t TagPeerUID;
};

typedef CTransactionData SecTransactionData_t;

} /* namespace com_adksec_cmd */

#undef DllSpecSEC // important to avoid duplicated definitions of DllSpec with other component header files

#endif /* ENCGOVERNOR_CTRANSACTIONDATA_H_ */
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
