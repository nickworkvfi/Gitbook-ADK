---
hidden: true
title: CTransactionData.h
---

<a href="_c_transaction_data_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 10 #ifndef ENCGOVERNOR_CTRANSACTIONDATA_H_
 11 #define ENCGOVERNOR_CTRANSACTIONDATA_H_
 12 
 13 #include <stdint.h>
 14 #include <stddef.h>
 15 #include <map>
 16 #include <vector>
 17 #include <cstring>
 18 #include <string>
 19 #include <ipc/jsobject.h>
 20 #include "secError.h"
 21 
 22 #if (defined _VRXEVO || defined _WIN32)
 23 # if defined VFI_SEC_SHARED_EXPORT
 24 # define DllSpecSEC __declspec(dllexport)
 25 # elif defined VFI_SEC_STATIC_EXPORT || defined _WIN32 // dllimport not required for Windows
 26 # define DllSpecSEC
 27 # else
 28 # define DllSpecSEC __declspec(dllimport)
 29 # endif
 30 #elif defined __GNUC__ && defined VFI_SEC_SHARED_EXPORT
 31 # define DllSpecSEC __attribute__((visibility ("default")))
 32 #else
 33 # define DllSpecSEC
 34 #endif
 35 
 36 
 37 namespace com_adksec_cmd
 38 {
 39 
 40 
 41 typedef uint32_t secHandle_t;
 42 typedef uint8_t bitMask_t;
 43 typedef std::string secIndex_t;
 44 
 45 typedef unsigned char eSecCommandtype;
 46 
 47 class DllSpecSEC CTransactionValue
 48 {
 49 public:
 50  //secError putData(int data);
 51  //secError putData(std::string data);
 52  //secError putDataBCD(uint8_t * data, int len); // has to verify format
 53  //getData ...
 54 
 55  CTransactionValue(); //don't use this. stl-containers need this default-constructor internally.
 56  CTransactionValue(const std::string& s);
 57  CTransactionValue(const vfiipc::JSObject& json);
 58  CTransactionValue(const int& data);
 59  CTransactionValue(const std::vector<uint8_t>& vData);
 60  CTransactionValue(const uint8_t* pData, size_t len);
 61  ~CTransactionValue();
 62 
 67  std::string dump() const;
 68  void load(const std::string &jsonString);
 69  void load(const vfiipc::JSObject& js);
 70 
 71  bool getBool() const;
 72  int getInt() const;
 73  std::string getString() const;
 74  std::vector<uint8_t> getBuffer() const;
 75  std::vector<uint8_t> getRaw() const;
 76  void cleanBuffer();
 77 
 78  operator bool() const { return getBool(); };
 79  operator int() const { return (int)getInt(); };
 80  operator uint8_t() const { return (uint8_t)getInt(); };
 81  operator uint32_t() const { return (uint32_t)getInt(); };
 82  operator std::string() const { return getString(); };
 83  operator std::vector<uint8_t>() const { return getBuffer(); };
 84 
 85 
 91  void restrictPermissions(bitMask_t allowedPermissions) {m_permissionFlags &= allowedPermissions;};
 92 
 97  bitMask_t getPermissions() const {return m_permissionFlags;};
 98 
 104  static bool isWritable(bitMask_t permissionFlags) {return (permissionFlags & PermWriteAble);};
 105  bool isWritable() const {return isWritable(m_permissionFlags);};
 106 
 112  static bool isReadable(bitMask_t permissionFlags) {return (permissionFlags & PermReadAble);};
 113  bool isReadable() const {return isReadable(m_permissionFlags);};
 114 
 115 private:
 116  friend class CTransactionData;
 117  vfiipc::JSObject json() const;
 118  void assertReadability() const;
 119 private:
 120 
 121  enum secTAValueType
 122  {
 123  secTAVnull, secTAVstring, secTAVinteger, secTAVvector, secTAVbcd, secTAVhex, secTAVkekFlag
 124  };
 125 
 126  std::vector<uint8_t> m_data;
 127  bitMask_t m_permissionFlags;
 128  secTAValueType m_datatype;
 129 public:
 130  enum ePermissionFlags {
 131  PermPrivate = 0x00,
 132  PermWriteAble = 0x01,
 133  PermReadAble = 0x10,
 134  PermWriteOnly = PermWriteAble,
 135  PermReadOnly = PermReadAble,
 136  PermReadWrite = PermWriteAble | PermReadAble,
 137  PermDefault = PermReadWrite,
 138  };
 139 };
 140 
 141 typedef CTransactionValue SecTransactionValue;
 142 
 143 
 144 class DllSpecSEC CTransactionData: public std::map<secIndex_t, CTransactionValue>
 145 {
 146 private:
 147  // Verix compiler silently adds references to copy-methods.
 148  // Then tests do not compile because of undefined references (in Verix).
 149  // So we explicitly prohibit copy to not have this references (JensW2).
 150 #ifdef VFI_PLATFORM_VERIXEVO
 151  // Do this for Verix only, because VOS/VOS2 implementation of maps works
 152  // with construction-copyable classes only (JensW2).
 153  CTransactionData( const CTransactionData& other ) {}; // non construction-copyable
 154 #endif
 155  CTransactionData& operator=( const CTransactionData& ); // non copyable
 156 public:
 157  CTransactionData(const std::string& jsonString);
 158  CTransactionData();
 159  virtual ~CTransactionData();
 160 
 161  std::string dump() const;
 162  void load(const std::string &jsonString);
 163 
 164 
 165  bool isAvailable(const secIndex_t& key) const;
 166 
 167 
 168  // default transaction data index using in Encryption Governor service
 169  static const secIndex_t TagKeySetID;
 170  static const secIndex_t TagIPPUseBinFormat;
 171  static const secIndex_t TagADEEncMode;
 172  static const secIndex_t TagBendigoKEKFlag;
 173  static const secIndex_t TagAS2805Func;
 174  static const secIndex_t TagVSSDUKPTMaskPIN;
 175  static const secIndex_t TagVSSDUKPTMaskMAC;
 176  static const secIndex_t TagVSSDUKPTMaskENC;
 177  static const secIndex_t setDUKPTmasks;
 178  static const secIndex_t TagHostName;
 179  static const secIndex_t TagPAN;
 180  static const secIndex_t TagCHName;
 181  static const secIndex_t TagMID;
 182  static const secIndex_t TagPANandCVV;
 183  static const secIndex_t TagTrack1;
 184  static const secIndex_t TagTrack2;
 185  static const secIndex_t TagTrack3;
 186  static const secIndex_t TagAlphaNum;
 187  static const secIndex_t TagByteArray;
 188  static const secIndex_t TagCardDataType;
 189  static const secIndex_t TagObfuscatedPAN;
 190  static const secIndex_t TagObfuscatedCHName;
 191  static const secIndex_t TagObfuscatedTrack1;
 192  static const secIndex_t TagObfuscatedTrack2;
 193  static const secIndex_t TagStan;
 194  static const secIndex_t TagTransAmount;
 195  static const secIndex_t TagVSSPropData;
 196  static const secIndex_t TagFlagBypassKsnIncr;
 197  static const secIndex_t TagNextKSNState;
 198  static const secIndex_t Tag0PinBlockRequest;
 199  static const secIndex_t _TDindex;
 200  static const secIndex_t _SessionKey;
 201  static const secIndex_t TagCryptoRWLegacyDecrypt;
 202  static const secIndex_t TagTrustConn;
 203  static const secIndex_t TagPeerUID;
 204 };
 205 
 206 typedef CTransactionData SecTransactionData_t;
 207 
 208 } /* namespace com_adksec_cmd */
 209 
 210 #undef DllSpecSEC // important to avoid duplicated definitions of DllSpec with other component header files
 211 
 212 #endif /* ENCGOVERNOR_CTRANSACTIONDATA_H_ */
```
