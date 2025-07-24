---
hidden: true
title: libseccmd-comp.h
---

<a href="libseccmd-comp_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef _LIBSECCMD_H_
 2 #define _LIBSECCMD_H_
 3 
 15 /***************************************************************************
 16  * Includes
 17  **************************************************************************/
 18 #include <stdlib.h>
 19 #include "sec2.h"
 20 
 21 #ifdef _VRXEVO
 22 #include <unistd.h>
 23 #include <string>
 24 #include <SVC_NET.H>
 25 #endif
 26 
 27 #ifdef _VOS
 28 #include <string>
 29 #include <stdint.h>
 30 #endif
 31 #include "libsec.h"
 32 #include "compatibilityHelper.h"
 33 #include <algorithm>
 34 #include <cstring>
 35 #include <climits>
 36 #include <sec/seclogging.h>
 37 #include "html/gui.h"
 38 #include <stdio.h>
 39 
 40 
 41 /***************************************************************************
 42  * Namespace
 43  **************************************************************************/
 44 using namespace com_verifone_host;
 45 
 46 /***************************************************************************
 47  * Preprocessor constant definitions
 48  **************************************************************************/
 49 #define FLAG_BYPASS_KSN_INCR 0x0001
 50 
 51 
 52 /***************************************************************************
 53  * Global variable declarations
 54  **************************************************************************/
 55 namespace com_verifone_seccmd
 56 {
 59  #ifndef DEPRECATED
 60  # ifdef __GNUC__
 61  # define DEPRECATED __attribute__((deprecated))
 62  # elif defined(_MSC_VER)
 63  # define DEPRECATED __declspec(deprecated)
 64  # else
 65  # define DEPRECATED
 66  # endif
 67  #endif
 68 
 69  #define SCRIPT_NAME_LENGTH 10
 70 
 72  #define MIN_COMM_TIMEOUT 30000
 73  #define DEFAULT_COMM_TIMEOUT -1 
 76  enum SecCmd_errors
 77  {
 78  SC_SUCCESS = 0,
 79  SC_ERROR = -1,
 80  SC_WRONG_PAR = -2,
 81  SC_SEND_FAILED = -3,
 82  SC_RECBUF_SMALL = -4,
 83  SC_TIMER_ERROR = -5
 84  };
 85 
 86 #define ASSERT_PARAM(assertion) \
 87 { \
 88  if(!(assertion)) \
 89  { \
 90  SEC_LOG_CRIT("Parameter assertion failed: " #assertion); \
 91  return SC_WRONG_PAR; \
 92  } \
 93 }
 94 
 95 #define ASSERT_BUFSIZE(assertion) \
 96 { \
 97  if(!(assertion)) \
 98  { \
 99  SEC_LOG_CRIT("Output-Buffer too small: " #assertion); \
 100  return SC_RECBUF_SMALL; \
 101  } \
 102 }
 103 
 104 
 106  struct EncDecData
 107  {
 108  uint8_t *pInData;
 109  u_long uiInLen;
 110  uint8_t *pOutData;
 111  u_long uiOutLen;
 112  uint8_t *stan;
 113  uint8_t *tid;
 114  };
 115 
 117  struct EncDecDataIV
 118  {
 119  uint8_t *pInData;
 120  u_long uiInLen;
 121  uint8_t *pOutData;
 122  u_long uiOutLen;
 123  uint8_t *IV;
 124  u_long uiIVLen;
 125  };
 126 
 128  struct MACData
 129  {
 130  uint8_t *pData;
 131  u_long uiLen;
 132  };
 133 
 135  struct genMAC
 136  {
 137  uint8_t *pMAC;
 138  u_char ucMACLen;
 139  };
 140 
 142  struct PINBlockParams
 143  {
 144  u_char *pPAN;
 145  u_char *pSTAN;
 146  u_char PinBlockFormat;
 147  u_char TransAmount[TRANS_AMOUNT_SIZE];
 148  };
 149 
 151  struct PropData
 152  {
 153  uint8_t *pPropData;
 154  u_long uiPropDataLen;
 155  };
 156 
 158  struct EncPINBlock
 159  {
 160  uint8_t *pPINBlock;
 161  u_char ucPINBlockLen;
 162  };
 163 
 165  struct SecConfig
 166  {
 167  u_char PinEntryType;
 168  u_char PinBlockFormat;
 169  u_char KeyManagement;
 170  u_char PINAlgo;
 171  u_char DataAlgo;
 172  u_char ScriptIdent[SCRIPT_NAME_LENGTH];
 173  };
 174 
 176  struct Ksn
 177  {
 178  u_char KSN[KSN_SIZE];
 179  };
 180 
 182  struct Ksn_v2
 183  {
 184  u_char *KSN;
 185  u_long KSNLen;
 186  };
 187 
 189  struct DUKPTmask
 190  {
 191  u_char *maskPIN;
 192  u_char *maskMAC;
 193  u_char *maskENC;
 194  u_char sizeP;
 195  u_char sizeM;
 196  u_char sizeE;
 197  };
 198 
 199 
 200 
 201 /***************************************************************************
 202  * Helper Functions
 203  **************************************************************************/
 204 
 205 inline bool hex2binCH(char in, unsigned char *out)
 206 {
 207  if (in >= 0x30 && in <= 0x39)
 208  *out = (unsigned char) (in - 0x30);
 209  else if (in >= 'A' && in <= 'F')
 210  *out = (unsigned char) (in - 'A' + 10);
 211  else if (in >= 'a' && in <= 'f')
 212  *out = (unsigned char) (in - 'a' + 10);
 213  else
 214  return false;
 215  return true;
 216 }
 217 
 218 inline int convDsp2Hex(const char *dsp, size_t dsp_len, char *hex, const size_t max_hex_len)
 219 {
 220  if (!dsp || !hex || dsp == hex || dsp_len == 0)
 221  return -1;
 222  if (dsp_len % 2)
 223  --dsp_len; // skip one byte
 224  dsp_len >>= 1;
 225 
 226  int i;
 227  unsigned char t1 = 0, t2 = 0;
 228  int end = (dsp_len > max_hex_len) ? (max_hex_len) : (dsp_len);
 229  for (i = 0; i < end; i++)
 230  {
 231  if (!hex2binCH(*dsp, &t1))
 232  return i;
 233  if (!hex2binCH(*(dsp + 1), &t2))
 234  return i;
 235  hex[i] = (char) ((t1 << 4) | t2);
 236  dsp += 2;
 237  }
 238  return end;
 239 }
 240 
 241 
 242 #define DO_OLD(Name, Group, Offset, Old, Description) if (error==Name) return Old;
 243 
 244 inline uint8_t getCompatibleCode(secError error)
 245 {
 246  ERRORS(DO_OLD)
 247 
 248  return RESP_CODE_OLD_DEFAULT;
 249 }
 250 
 251 
 252 inline int getCompatibleReturn(secError newError)
 253 {
 254  SEC_LOG_TRACE("getCompatibleReturn: secError=%#x ", newError);
 255  if (newError == EsecINVAL) return SC_WRONG_PAR;
 256 
 257  if ((newError & EsecGroupMASK) == EsecGroupIPC) return SC_SEND_FAILED;
 258  if ((newError & EsecGroupMASK) == EsecGroupApi) return SC_ERROR;
 259 
 260  return SC_SUCCESS;
 261 }
 262 
 263 inline int getCompatibleReturn(secError newError, uint8_t* oldError)
 264 {
 265  ASSERT_PARAM(oldError);
 266 
 267  *oldError = getCompatibleCode(newError);
 268  SEC_LOG_TRACE("getCompatibleReturn: secError=%#x -> errCode(old)=%d", newError, *oldError);
 269 
 270  return getCompatibleReturn(newError);
 271 }
 272 
 273 
 274 /***************************************************************************
 275  * Exported function declarations
 276  **************************************************************************/
 277 
 282  DEPRECATED inline int Sec_Init( u_char* /*appName*/ = NULL )
 283  {
 284  return getCompatibleReturn(secInit());
 285  }
 286 
 291  DEPRECATED inline void Sec_Destroy( )
 292  {
 293  secDestroy();
 294  }
 295 
 296 
 297 /***************************************************************************
 298  * Exported function declarations
 299  **************************************************************************/
 300 
 301 
 309 DEPRECATED inline u_char Sec_Open(const std::string &schemaName, uint8_t *errCode)
 310 {
 311  u_char oldHandle = 0;
 312  secHandle_t handle;
 313  secError ret = secOpen(schemaName, handle);
 314 
 315  if (!ret)
 316  {
 317  oldHandle = secCompatiblity_registerHandle(handle);
 318  }
 319 
 320  getCompatibleReturn(ret, errCode);
 321  return oldHandle;
 322 }
 323 
 324 DEPRECATED inline u_char Sec_Open( u_char * schemaName, uint8_t *errCode )
 325 {
 326  return Sec_Open(schemaName, errCode);
 327 }
 328 
 329 
 336  DEPRECATED inline int Sec_Close(u_char HostId, uint8_t *errCode)
 337  {
 338  ASSERT_PARAM(errCode);
 339 
 340  secHandle_t handle;
 341  secError err = secCompatiblity_getHandle(HostId, handle);
 342  if (err) return getCompatibleReturn(err, errCode);
 343 
 344  secError ret = secClose(handle);
 345  if (ret) return getCompatibleReturn(ret, errCode);
 346 
 347  ret = secCompatiblity_deregisterHandle(HostId);
 348  return getCompatibleReturn(ret, errCode);
 349  }
 350 
 351 
 358  DEPRECATED inline int Sec_SelectHostConf(u_char HostId, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
 359  {
 360  ASSERT_PARAM(errCode);
 361 
 362  secHandle_t handle;
 363  secError err = secCompatiblity_getHandle(HostId, handle);
 364  return getCompatibleReturn(err, errCode);
 365  }
 366 
 387 DEPRECATED inline int Sec_GetKeyData(u_char HostId, u_char GKD_KeyType, u_char kekFlag, char *aOutBuf, u_long *uiOutBufLen,
 388  uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
 389 {
 390  ASSERT_PARAM(aOutBuf);
 391  ASSERT_PARAM(uiOutBufLen);
 392  ASSERT_PARAM(errCode);
 393 
 394  secHandle_t handle;
 395  secError err = secCompatiblity_getHandle(HostId, handle);
 396  if (err) return getCompatibleReturn(err, errCode);
 397 
 398  //kekFlag==0 -> ignore
 399  if (kekFlag)
 400  {
 401  SecTransactionData_t td;
 402  td[CTransactionData::TagBendigoKEKFlag] = kekFlag;
 403  secPutTransactionData(handle, td);
 404  }
 405 
 406  std::vector<uint8_t> out;
 407 
 408  secError ret = secGetKeyData(handle, (com_verifone_host::key_type_t) GKD_KeyType, out);
 409 
 410  ASSERT_BUFSIZE(*uiOutBufLen >= out.size());
 411  memcpy(aOutBuf, &out[0], out.size());
 412  *uiOutBufLen = out.size();
 413 
 414  secClearTransactionData(handle);
 415 
 416  return getCompatibleReturn(ret, errCode);
 417 }
 418 
 419 DEPRECATED inline int Sec_GetKeyData(u_char GKD_HostId, u_char GKD_KeyType, char *aOutBuf, u_long *uiOutBufLen, uint8_t *errCode,
 420  long timeout = DEFAULT_COMM_TIMEOUT)
 421 {
 422  return Sec_GetKeyData(GKD_HostId, GKD_KeyType, (u_char) 0, aOutBuf, uiOutBufLen, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 423 }
 424 
 425 
 426 
 427 static inline bool is_hex_notation(std::string const& s)
 428 {
 429  return ((!(s.length() % 2)) && (s.find_first_not_of("0123456789abcdefABCDEF") == std::string::npos));
 430 }
 431 
 432 
 433 static inline std::vector<uint8_t> hexString_to_binary(const std::string& input)
 434 {
 435  static const char* const lut = "0123456789ABCDEF";
 436  size_t len = input.length();
 437  LOG_ASSERT(!(len & 1) /*even length*/);
 438 
 439  std::vector<uint8_t> output;
 440  output.reserve(len / 2);
 441  for (size_t i = 0; i < len; i += 2)
 442  {
 443  char a = input[i];
 444  const char* p = std::lower_bound(lut, lut + 16, a);
 445  LOG_ASSERT (*p == a); //else not a hex digit
 446 
 447  char b = input[i + 1];
 448  const char* q = std::lower_bound(lut, lut + 16, b);
 449  LOG_ASSERT (*q == b); //else not a hex digit
 450 
 451  output.push_back(((p - lut) << 4) | (q - lut));
 452  }
 453  return output;
 454 }
 455 
 456 static inline std::string binary_to_hexString(const std::vector<uint8_t>& input)
 457 {
 458  static const char* const lut = "0123456789ABCDEF";
 459  size_t len = input.size();
 460 
 461  std::string output;
 462  output.reserve(2 * len);
 463  for (size_t i = 0; i < len; ++i)
 464  {
 465  const unsigned char c = input[i];
 466  output.push_back(lut[c >> 4]);
 467  output.push_back(lut[c & 15]);
 468  }
 469  return output;
 470 }
 471 
 483 DEPRECATED inline int Sec_UpdateKey(u_char HostId, key_type_t UpK_KeyType, u_char kekFlag,
 484  char *aKeyData, u_long uiKeyDataLen, Ksn_v2 KSN,
 485  uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
 486  {
 487  ASSERT_PARAM(errCode);
 488  secHandle_t handle;
 489  secError err = secCompatiblity_getHandle(HostId, handle);
 490  if (err) return getCompatibleReturn(err, errCode);
 491 
 492  //kekFlag==0 -> ignore
 493 
 494  secError ret=EsecOK;
 495 
 496  if (kekFlag)
 497  {
 498  SecTransactionData_t td;
 499  td[CTransactionData::TagBendigoKEKFlag] = kekFlag;
 500  ret = secPutTransactionData(handle, td);
 501  }
 502 
 503  if (!ret)
 504  {
 505  std::vector<uint8_t> keyData;
 506  if(aKeyData)
 507  {
 508  std::string sKeyData(aKeyData, uiKeyDataLen);
 509 
 510  if (is_hex_notation(sKeyData))
 511  {
 512  SEC_LOG_WARN("Assuming key is hex-string instead of binary data - use Compatibility Workaround");
 513  keyData = hexString_to_binary(sKeyData);
 514  } else {
 515 
 516  keyData.assign(aKeyData, aKeyData+uiKeyDataLen);
 517  }
 518  }
 519 
 520  std::vector<uint8_t> ksn;
 521  if(KSN.KSN && KSN.KSNLen)
 522  {
 523  ksn.assign(KSN.KSN, KSN.KSN+KSN.KSNLen);
 524  }
 525 
 526  ret = secUpdateKey(handle, UpK_KeyType, keyData, ksn);
 527  }
 528 
 529  // Do not secClearTransactionData(handle) as IPP session keys must still be available for further functions
 530 
 531  return getCompatibleReturn(ret, errCode);
 532  }
 533 
 534 inline Ksn_v2 getKsn_v2(Ksn *pKSN)
 535 {
 536  Ksn_v2 KSN = {NULL,0};
 537  if(pKSN)
 538  {
 539  KSN.KSN = pKSN->KSN;
 540  KSN.KSNLen = KSN_SIZE;
 541  }
 542  return KSN;
 543 }
 544 
 545 
 546 DEPRECATED inline int Sec_UpdateKey(u_char UpK_HostId, key_type_t UpK_KeyType, u_char kekFlag, char *aKeyData, u_long uiKeyDataLen,
 547  Ksn *pKSN, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
 548 
 549 {
 550  Ksn_v2 KSN = getKsn_v2(pKSN);
 551  return Sec_UpdateKey(UpK_HostId, UpK_KeyType, kekFlag, aKeyData, uiKeyDataLen, KSN, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 552 }
 553 
 554 DEPRECATED inline int Sec_UpdateKey(u_char UpK_HostId, u_char UpK_KeyType, u_char kekFlag, char *aKeyData, u_long uiKeyDataLen,
 555  uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
 556 {
 557  return Sec_UpdateKey(UpK_HostId, (key_type_t) UpK_KeyType, kekFlag, aKeyData, uiKeyDataLen, (Ksn*) NULL, errCode,
 558  timeout = DEFAULT_COMM_TIMEOUT);
 559 }
 560 
 561 DEPRECATED inline int Sec_UpdateKey(u_char UpK_HostId, u_char UpK_KeyType, char *aKeyData, u_long uiKeyDataLen, uint8_t *errCode,
 562  long timeout = DEFAULT_COMM_TIMEOUT)
 563 {
 564  return Sec_UpdateKey(UpK_HostId, UpK_KeyType, 0, aKeyData, uiKeyDataLen, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 565 }
 566 
 567 
 568 
 569 DEPRECATED inline int Sec_AS2805KeyMgmnt(u_char HostId, u_char AS2805_AS2805Func, char *aKeyData, u_long *uiKeyDataLen,
 570  u_long /*uiMaxKeyDataLen*/, uint8_t *errCode, long /*timeout*/= DEFAULT_COMM_TIMEOUT)
 571 {
 572  ASSERT_PARAM(aKeyData);
 573  ASSERT_PARAM(uiKeyDataLen);
 574  ASSERT_PARAM(errCode);
 575 
 576  secHandle_t handle;
 577  secError err = secCompatiblity_getHandle(HostId, handle);
 578  if (err) return getCompatibleReturn(err, errCode);
 579 
 580  SecTransactionData_t td;
 581  td[CTransactionData::TagAS2805Func] = AS2805_AS2805Func;
 582  secPutTransactionData(handle, td);
 583 
 584  std::vector<uint8_t> keyData;
 585  keyData.assign(aKeyData, aKeyData + *uiKeyDataLen);
 586 
 587  std::vector<uint8_t> ksnDummy;
 588 
 589  secError ret = secUpdateKey(handle, 0, keyData, ksnDummy);
 590 
 591  secClearTransactionData(handle);
 592 
 593  return getCompatibleReturn(ret, errCode);
 594 }
 595 
 596 
 608 DEPRECATED inline int Sec_EncryptData(u_char HostId, u_char EncD_EncMode, EncDecDataIV *pData, Ksn *pKSN, uint8_t *errCode,
 609  long /*timeout*/= DEFAULT_COMM_TIMEOUT)
 610 {
 611 
 612  ASSERT_PARAM(pData);
 613  ASSERT_PARAM(pData->pInData);
 614  ASSERT_PARAM(pData->pOutData);
 615  ASSERT_PARAM(pData->uiOutLen);
 616  ASSERT_PARAM(errCode);
 617 
 618  secHandle_t handle;
 619  secError err = secCompatiblity_getHandle(HostId, handle);
 620  if (err) return getCompatibleReturn(err, errCode);
 621 
 622  //EncD_EncMode==0 -> ignore
 623  //if (EncD_EncMode)
 624  {
 625 
 626  SecTransactionData_t td;
 627  td[CTransactionData::TagADEEncMode] = EncD_EncMode;
 628  secPutTransactionData(handle, td);
 629  }
 630 
 631  std::vector<uint8_t> plainData;
 632  plainData.assign(pData->pInData, pData->pInData + pData->uiInLen);
 633 
 634  std::vector<uint8_t> encData;
 635 
 636  std::vector<uint8_t> iv;
 637  if (pData->IV && pData->uiIVLen)
 638  {
 639  iv.assign(pData->IV, pData->IV + pData->uiIVLen);
 640  }
 641 
 642  std::vector<uint8_t> ksn;
 643 
 644  secError ret = secEncryptData(handle, plainData, encData, iv, ksn);
 645 
 646  if (pKSN)
 647  {
 648  ASSERT_BUFSIZE(ksn.size() <= sizeof(pKSN->KSN));
 649  memcpy(pKSN->KSN, &ksn[0], ksn.size());
 650  }
 651 
 652  memcpy(pData->pOutData, &encData[0], encData.size());
 653  pData->uiOutLen = encData.size();
 654 
 655  if (pData->IV)
 656  {
 657  memcpy(pData->IV, &iv[0], iv.size());
 658  pData->uiIVLen = iv.size();
 659  }
 660 
 661  secClearTransactionData(handle);
 662 
 663  return getCompatibleReturn(ret, errCode);
 664 }
 665 
 676  DEPRECATED inline int Sec_EncryptData(u_char EncD_HostId, EncDecDataIV *pData, Ksn *pKSN, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
 677  {
 678  return Sec_EncryptData(EncD_HostId, 0, pData, pKSN, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 679  }
 680 
 681 
 682 DEPRECATED inline int Sec_EncryptData(u_char EncD_HostId, EncDecDataIV *pData, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
 683 {
 684  return Sec_EncryptData(EncD_HostId, 0, pData, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 685 }
 686 
 687 DEPRECATED inline int Sec_EncryptData(u_char EncD_HostId, u_char EncD_EncMode, EncDecData *pData, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
 688 {
 689  ASSERT_PARAM(pData);
 690 
 691  uint8_t IV[DES_IV_SIZE];
 692  memset(IV, 0x00, sizeof(IV));
 693  if (pData->stan || pData->tid)
 694  {
 695  if (pData->stan)
 696  {
 697  uint8_t formattedStanStr[DES_IV_SIZE * 2];
 698  uint8_t formattedStan[DES_IV_SIZE];
 699  memset(formattedStanStr, 0x30, sizeof(formattedStanStr));
 700  memset(formattedStan, 0x0, sizeof(formattedStan));
 701  memcpy(&formattedStanStr[sizeof(formattedStanStr) - strlen((const char *) pData->stan)], pData->stan,
 702  strlen((const char *) pData->stan));
 703  convDsp2Hex((const char *) formattedStanStr, sizeof(formattedStanStr),
 704  reinterpret_cast<char *>(formattedStan), sizeof(formattedStan));
 705  memcpy(IV, formattedStan, sizeof(formattedStan));
 706  }
 707 
 708  if (pData->tid)
 709  for (int i = 0; i < DES_IV_SIZE && pData->tid[i] != 0; i++)
 710  IV[i] ^= pData->tid[i];
 711  }
 712 
 713  EncDecDataIV EncDecDataIV;
 714  EncDecDataIV.IV = IV;
 715  EncDecDataIV.uiIVLen = sizeof(IV);
 716  EncDecDataIV.pOutData = pData->pOutData;
 717  EncDecDataIV.uiOutLen = pData->uiOutLen;
 718  EncDecDataIV.pInData = pData->pInData;
 719  EncDecDataIV.uiInLen = pData->uiInLen;
 720 
 721  int ret = Sec_EncryptData(EncD_HostId, EncD_EncMode, &EncDecDataIV, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 722 
 723  pData->uiOutLen = EncDecDataIV.uiOutLen;
 724  return ret;
 725 }
 726 
 727 
 737  DEPRECATED inline int Sec_DecryptData(u_char HostId, EncDecDataIV *pData, Ksn *pKSN, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
 738  {
 739  ASSERT_PARAM(pData);
 740  ASSERT_PARAM(pData->pInData);
 741  ASSERT_PARAM(pData->pOutData);
 742  ASSERT_PARAM(pData->uiOutLen);
 743  ASSERT_PARAM(errCode);
 744 
 745  secHandle_t handle;
 746  secError err = secCompatiblity_getHandle(HostId, handle);
 747  if (err) return getCompatibleReturn(err, errCode);
 748 
 749  std::vector<uint8_t> encData;
 750  encData.assign(pData->pInData, pData->pInData + pData->uiInLen);
 751 
 752  std::vector<uint8_t> plainData;
 753 
 754  std::vector<uint8_t> iv;
 755  if(pData->IV && pData->uiIVLen)
 756  {
 757  iv.assign(pData->IV, pData->IV + pData->uiIVLen);
 758  }
 759 
 760  std::vector<uint8_t> ksn;
 761 
 762  secError ret = secDecryptData(handle, encData, plainData, iv, ksn);
 763 
 764  memcpy(pData->pOutData, &plainData[0], plainData.size());
 765  pData->uiOutLen = plainData.size();
 766 
 767  if(pData->IV)
 768  {
 769  memcpy(pData->IV, &iv[0], iv.size());
 770  pData->uiIVLen = iv.size();
 771  }
 772 
 773  if (pKSN)
 774  {
 775  memcpy(pKSN->KSN, &ksn[0], std::min((size_t)KSN_SIZE, ksn.size()));
 776  }
 777 
 778  return getCompatibleReturn(ret, errCode);
 779  }
 780 
 781 DEPRECATED inline int Sec_DecryptData(u_char DecD_HostId, EncDecDataIV *pData, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
 782 {
 783  return Sec_DecryptData(DecD_HostId, pData, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 784 }
 785 
 786 DEPRECATED inline int Sec_DecryptData(u_char DecD_HostId, u_char /*DecD_DecMode*/, EncDecData *pData, uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
 787 {
 788  ASSERT_PARAM(pData);
 789 
 790  uint8_t IV[DES_IV_SIZE];
 791  memset(IV,0x00,sizeof(IV));
 792  if( pData->stan || pData->tid )
 793  {
 794  if( pData->stan )
 795  {
 796  uint8_t formattedStanStr[DES_IV_SIZE*2];
 797  uint8_t formattedStan[DES_IV_SIZE];
 798  memset(formattedStanStr, 0x30, sizeof(formattedStanStr));
 799  memset(formattedStan, 0x0, sizeof(formattedStan));
 800  memcpy(&formattedStanStr[sizeof(formattedStanStr) - strlen((const char *)pData->stan)], pData->stan, strlen((const char *)pData->stan));
 801  convDsp2Hex((const char *)formattedStanStr, sizeof(formattedStanStr), reinterpret_cast<char *>(formattedStan), sizeof(formattedStan));
 802  memcpy(IV,formattedStan,sizeof(formattedStan));
 803  }
 804 
 805  if( pData->tid )
 806  for(int i=0; i<DES_IV_SIZE && pData->tid[i]!=0; i++ )
 807  IV[i] ^= pData->tid[i];
 808  }
 809 
 810  EncDecDataIV EncDecDataIV;
 811  EncDecDataIV.IV = IV;
 812  EncDecDataIV.uiIVLen = sizeof(IV);
 813  EncDecDataIV.pOutData = pData->pOutData;
 814  EncDecDataIV.uiOutLen = pData->uiOutLen;
 815  EncDecDataIV.pInData = pData->pInData;
 816  EncDecDataIV.uiInLen = pData->uiInLen;
 817  int ret = Sec_DecryptData(DecD_HostId, &EncDecDataIV, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 818 
 819  pData->uiOutLen = EncDecDataIV.uiOutLen;
 820  return ret;
 821 }
 822 
 823 
 845 DEPRECATED inline int Sec_GenerateMAC(u_char HostId, u_char /*GMAC_UseDefaultCV*/, u_char GMAC_MACMode,
 846  MACData *pData, genMAC *pMAC, Ksn *pKSN, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
 847  {
 848  ASSERT_PARAM(pData);
 849  ASSERT_PARAM(pData->pData);
 850  ASSERT_PARAM(pMAC);
 851  ASSERT_PARAM(pMAC->pMAC);
 852  ASSERT_PARAM(errCode);
 853 
 854  secHandle_t handle;
 855  secError err = secCompatiblity_getHandle(HostId, handle);
 856  if (err) return getCompatibleReturn(err, errCode);
 857 
 858  std::vector<uint8_t> data;
 859 
 860  if (GMAC_MACMode == 5)
 861  {
 862  // convert data to BIN format
 863  std::string sData((char*)pData->pData, pData->uiLen);
 864  data = hexString_to_binary(sData);
 865  }
 866  else
 867  {
 868  // use data in BIN format
 869  data.assign(pData->pData, pData->pData + pData->uiLen);
 870  }
 871 
 872  std::vector<uint8_t> mac;
 873  std::vector<uint8_t> ksn;
 874  std::vector<uint8_t> dummy_iv(8,0);
 875 
 876  secError ret = secSign(handle, data, mac, dummy_iv, ksn);
 877 
 878  if (GMAC_MACMode == 5)
 879  {
 880  // convert MAC to ASCII format
 881  std::string sMAC = binary_to_hexString(mac);
 882 
 883  ASSERT_BUFSIZE(sMAC.size() <= UCHAR_MAX);
 884  memcpy(pMAC->pMAC, &sMAC[0], sMAC.size());
 885  pMAC->ucMACLen = (u_char)sMAC.size();
 886 
 887  /*it seems user expects c-string - add a trailing zero: */
 888  pMAC->pMAC[sMAC.size()] = 0x00;
 889  SEC_DBG_TRACE("MAC (ASCII): %s", pMAC->pMAC);
 890  }
 891  else
 892  {
 893  ASSERT_BUFSIZE(mac.size() <= UCHAR_MAX);
 894  memcpy(pMAC->pMAC, &mac[0], mac.size());
 895  pMAC->ucMACLen = (u_char)mac.size();
 896  }
 897 
 898  if (!ksn.empty())
 899  {
 900  if (pKSN == NULL)
 901  {
 902  SEC_LOG_WARN("SCAPP_API: SCAPP_API: No memory for KSN, ignore");
 903  } else if (KSN_SIZE < ksn.size())
 904  {
 905  SEC_LOG_ERROR("SCAPP_API: KSN buffer is to small, returned %d bytes key data", ksn.size());
 906  return EsecINVAL;
 907  } else {
 908  ASSERT_BUFSIZE(KSN_SIZE >= ksn.size());
 909  memcpy(pKSN->KSN, &ksn[0], ksn.size());
 910  }
 911  }
 912  else
 913  {
 914  SEC_LOG_TRACE("SCAPP_API: No KSN");
 915  if (pKSN != NULL)
 916  {
 917  memset(pKSN->KSN, 0x00, KSN_SIZE);
 918  }
 919  }
 920 
 921  return getCompatibleReturn(ret, errCode);
 922  }
 923 
 924 
 925 DEPRECATED inline int Sec_GenerateMAC(u_char GMAC_HostId, u_char GMAC_UseDefaultCV, u_char GMAC_MACMode, MACData *pData, genMAC *pMAC,
 926  uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
 927 {
 928  return Sec_GenerateMAC(GMAC_HostId, GMAC_UseDefaultCV, GMAC_MACMode, pData, pMAC, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 929 }
 930 
 931 
 932 
 943  DEPRECATED inline int Sec_VerifyMAC(u_char HostId, u_char /*VMAC_UseDefaultCV*/, u_char VMAC_MACMode,
 944  MACData *pData, genMAC MAC, Ksn *pKSN, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT){
 945 
 946  ASSERT_PARAM(pData);
 947  ASSERT_PARAM(pData->pData);
 948  ASSERT_PARAM(MAC.pMAC);
 949  ASSERT_PARAM(errCode);
 950 
 951  secHandle_t handle;
 952  secError err = secCompatiblity_getHandle(HostId, handle);
 953  if (err) return getCompatibleReturn(err, errCode);
 954 
 955  std::vector<uint8_t> data;
 956 
 957  if (VMAC_MACMode == 5)
 958  {
 959  // convert data to BIN format
 960  std::string sData((char*)pData->pData, pData->uiLen);
 961  data = hexString_to_binary(sData);
 962  }
 963  else
 964  {
 965  // use data in BIN format
 966  data.assign(pData->pData, pData->pData + pData->uiLen);
 967  }
 968 
 969  std::vector<uint8_t> mac;
 970  mac.assign(MAC.pMAC, MAC.pMAC + MAC.ucMACLen);
 971 
 972  std::vector<uint8_t> ksn;
 973  std::vector<uint8_t> dummy_iv(8,0);
 974 
 975  secError ret = secVerify(handle, data, mac, dummy_iv, ksn);
 976 
 977  if(pKSN)
 978  {
 979  memcpy(pKSN->KSN, &ksn[0], std::min((size_t)KSN_SIZE, ksn.size()));
 980  }
 981 
 982  return getCompatibleReturn(ret, errCode);
 983  }
 984 
 985 
 986 DEPRECATED inline int Sec_VerifyMAC(u_char VMAC_HostId, u_char VMAC_UseDefaultCV, u_char VMAC_MACMode, MACData *pData, genMAC MAC,
 987  uint8_t *errCode, long timeout = DEFAULT_COMM_TIMEOUT)
 988 {
 989  return Sec_VerifyMAC(VMAC_HostId, VMAC_UseDefaultCV, VMAC_MACMode, pData, MAC, NULL, errCode, timeout = DEFAULT_COMM_TIMEOUT);
 990 }
 991 
 992 
 993 
 1026 DEPRECATED inline int Sec_RetrieveEncryptedPIN(u_char HostId, PINBlockParams *pREP_PINBlockParams, uint16_t REP_Flags,
 1027  PropData REP_PropData, EncPINBlock *pREP_encPIN, Ksn_v2 *pREP_KSN, uint8_t *errCode, long /*timeout*/ =
 1028  DEFAULT_COMM_TIMEOUT)
 1029 {
 1030  ASSERT_PARAM(errCode);
 1031 
 1032  secHandle_t handle;
 1033  secError err = secCompatiblity_getHandle(HostId, handle);
 1034  if (err) return getCompatibleReturn(err, errCode);
 1035 
 1036  ASSERT_PARAM(pREP_PINBlockParams);
 1037  const uint8_t pinBlockFormat = pREP_PINBlockParams->PinBlockFormat;
 1038  std::vector<uint8_t> pinBlk;
 1039  std::vector<uint8_t> ksn;
 1040 
 1041  ASSERT_PARAM(pREP_encPIN);
 1042  ASSERT_PARAM(pREP_encPIN->pPINBlock);
 1043 
 1044  {
 1045  SecTransactionData_t taData;
 1046 
 1047  if ( REP_Flags & FLAG_BYPASS_KSN_INCR)
 1048  {
 1049  taData[CTransactionData::TagFlagBypassKsnIncr] = true;
 1050  } else {
 1051  taData[CTransactionData::TagFlagBypassKsnIncr] = false;
 1052  }
 1053 
 1054  if(pREP_PINBlockParams->pPAN)
 1055  {
 1056  char paddedPanStr[PAN_SIZE * 2];
 1057  memset(paddedPanStr, 'F', sizeof(paddedPanStr));
 1058  memcpy(paddedPanStr, pREP_PINBlockParams->pPAN, (strlen((const char *)pREP_PINBlockParams->pPAN) > sizeof(paddedPanStr)) ? sizeof(paddedPanStr) : strlen((const char *)pREP_PINBlockParams->pPAN));
 1059  taData[CTransactionData::TagPAN] = std::string(paddedPanStr, sizeof(paddedPanStr));
 1060  }
 1061 
 1062  if(pREP_PINBlockParams->pSTAN)
 1063  {
 1064  char paddedStanStr[STAN_SIZE * 2];
 1065  memset(paddedStanStr, 0x30, sizeof(paddedStanStr));
 1066  memcpy(&paddedStanStr[STAN_SIZE * 2 - strlen((const char *)pREP_PINBlockParams->pSTAN)], pREP_PINBlockParams->pSTAN, strlen((const char *)pREP_PINBlockParams->pSTAN));
 1067  taData[CTransactionData::TagStan] = std::string(paddedStanStr, sizeof(paddedStanStr));
 1068  }
 1069 
 1070  if(REP_PropData.pPropData && (REP_PropData.uiPropDataLen > 0))
 1071  {
 1072  std::vector<uint8_t>vPropData(REP_PropData.pPropData, REP_PropData.pPropData + REP_PropData.uiPropDataLen);
 1073  taData[CTransactionData::TagVSSPropData] = vPropData;
 1074  }
 1075 
 1076  u_char zeros [TRANS_AMOUNT_SIZE] = {0,};
 1077  if(memcmp(pREP_PINBlockParams->TransAmount, zeros, TRANS_AMOUNT_SIZE))
 1078  {
 1079  std::vector<uint8_t>vAmount(&pREP_PINBlockParams->TransAmount[0], &pREP_PINBlockParams->TransAmount[TRANS_AMOUNT_SIZE]);
 1080  taData[CTransactionData::TagTransAmount] = vAmount;
 1081  }
 1082 
 1083  if (!taData.empty())
 1084  {
 1085  secPutTransactionData(handle, taData);
 1086  }
 1087  }
 1088 
 1089 
 1090  secError ret = secRetrieveEncryptedPIN(handle, pinBlockFormat, pinBlk, ksn);
 1091 
 1092  if(!pinBlk.empty())
 1093  {
 1094  if( pREP_encPIN->ucPINBlockLen < pinBlk.size() )
 1095  {
 1096  SEC_LOG_ERROR("SCAPP_API: PIN Block buffer is to small, returned %d bytes key data", pinBlk.size());
 1097  pREP_encPIN->ucPINBlockLen = 0;
 1098  secClearTransactionData(handle);
 1099  return SC_WRONG_PAR;
 1100  }
 1101  else
 1102  {
 1103  memcpy(pREP_encPIN->pPINBlock, &pinBlk[0], pinBlk.size());
 1104  pREP_encPIN->ucPINBlockLen = pinBlk.size();
 1105  }
 1106  }
 1107 
 1108  if (pREP_KSN && pREP_KSN->KSN && (!ksn.empty()))
 1109  {
 1110  if( pREP_KSN->KSNLen < ksn.size() )
 1111  {
 1112  SEC_LOG_ERROR("SCAPP_API: KSN buffer is to small, returned %d bytes of key serial number", ksn.size());
 1113  pREP_KSN->KSNLen = 0;
 1114  secClearTransactionData(handle);
 1115  return SC_WRONG_PAR;
 1116  }
 1117  else
 1118  {
 1119  memcpy(pREP_KSN->KSN, &ksn[0], ksn.size());
 1120  pREP_KSN->KSNLen = ksn.size();
 1121  }
 1122  }
 1123 
 1124  secClearTransactionData(handle);
 1125 
 1126  return getCompatibleReturn(ret, errCode);
 1127 }
 1128 
 1129 DEPRECATED inline int Sec_RetrieveEncryptedPIN(u_char REP_HostId, PINBlockParams *pREP_PINBlockParams, u_char REP_Flags,
 1130  PropData REP_PropData, EncPINBlock *pREP_encPIN, uint8_t *errCode, long timeout=0)
 1131 {
 1132  REP_Flags = 0;
 1133  return Sec_RetrieveEncryptedPIN(REP_HostId, pREP_PINBlockParams, REP_Flags, REP_PropData, pREP_encPIN,
 1134  (Ksn_v2 *) NULL, errCode, timeout);
 1135 }
 1136 
 1137 DEPRECATED inline int Sec_RetrieveEncryptedPIN(u_char REP_HostId, PINBlockParams *pREP_PINBlockParams, uint16_t REP_Flags,
 1138  PropData REP_PropData, EncPINBlock *pREP_encPIN, Ksn *pREP_KSN, uint8_t *errCode, long timeout)
 1139 {
 1140  Ksn_v2 REP_KSN, *pREP_KSN_out = NULL;
 1141 
 1142  if (pREP_KSN)
 1143  {
 1144  REP_KSN.KSN = pREP_KSN->KSN;
 1145  REP_KSN.KSNLen = KSN_SIZE;
 1146  pREP_KSN_out = &REP_KSN;
 1147  }
 1148  return Sec_RetrieveEncryptedPIN(REP_HostId, pREP_PINBlockParams, REP_Flags, REP_PropData, pREP_encPIN, pREP_KSN_out,
 1149  errCode, timeout);
 1150 }
 1151 
 1152 
 1153 #if 0
 1154 
 1186  int Sec_SetSecurityConfig(u_char SSC_HostId,
 1187  PropData SSC_PropData,
 1188  SecConfig *pSSC_SecConfig,
 1189  uint8_t *errCode,
 1190  long timeout = DEFAULT_COMM_TIMEOUT);
 1191 
 1192 
 1225  int Sec_GetSecurityConfig(u_char GSC_HostId,
 1226  PropData GSC_PropData,
 1227  SecConfig *pGSC_SecConfig,
 1228  uint8_t *errCode,
 1229  long timeout = DEFAULT_COMM_TIMEOUT);
 1230 #endif
 1231 
 1244  DEPRECATED inline int Sec_GetVersions(std::string *pVersions, uint8_t *errCode, long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
 1245  {
 1246  ASSERT_PARAM(pVersions);
 1247  ASSERT_PARAM(errCode);
 1248  secError ret = secGetVersions(*pVersions);
 1249 
 1250  return getCompatibleReturn(ret, errCode);
 1251 
 1252  }
 1253 
 1254 
 1255 const size_t VERSION_BUFF_SIZE=20;
 1260 DEPRECATED inline const char *Sec_GetVersion(void)
 1261 {
 1262  static char APIversion[VERSION_BUFF_SIZE]={0,};
 1263  std::string sAPIversion = secGetApiVersion();
 1264  LOG_ASSERT(sAPIversion.size() <= sizeof(APIversion));
 1265  memcpy(APIversion, sAPIversion.c_str(), sAPIversion.size());
 1266  return APIversion;
 1267 }
 1268 
 1273 DEPRECATED inline const char *Sec_GetSvcVersion(void)
 1274 {
 1275  static char SvcVersion[VERSION_BUFF_SIZE]={0,};
 1276  std::string sVersion = secGetSvcVersion();
 1277  LOG_ASSERT(sVersion.size() <= sizeof(SvcVersion));
 1278  memcpy(SvcVersion, sVersion.c_str(), sVersion.size());
 1279  return SvcVersion;
 1280 }
 1281 
 1282 
 1294  DEPRECATED inline int Sec_SetKSId(u_char HostId, uint8_t ksid)
 1295  {
 1296  secHandle_t handle;
 1297  secError err = secCompatiblity_getHandle(HostId, handle);
 1298  if (err) return getCompatibleReturn(err);
 1299 
 1300  return secSetKSId(handle, ksid);
 1301  }
 1302 
 1303 
 1311 DEPRECATED inline int Sec_SetDUKPTMask(u_char HostId,
 1312  DUKPTmask *pDUKPTMask,
 1313  uint8_t *errCode,
 1314  long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
 1315 {
 1316  ASSERT_PARAM(errCode);
 1317 
 1318  secHandle_t handle;
 1319  secError err = secCompatiblity_getHandle(HostId, handle);
 1320  if (err) return getCompatibleReturn(err, errCode);
 1321 
 1322  ASSERT_PARAM(pDUKPTMask);
 1323  ASSERT_PARAM(pDUKPTMask->maskPIN);
 1324  ASSERT_PARAM(pDUKPTMask->maskMAC);
 1325  ASSERT_PARAM(pDUKPTMask->maskENC);
 1326 
 1327  secError ret;
 1328 
 1329  {
 1330  SecTransactionData_t taData;
 1331  taData[CTransactionData::TagVSSDUKPTMaskPIN] = CTransactionValue(pDUKPTMask->maskPIN, pDUKPTMask->sizeP);
 1332  taData[CTransactionData::TagVSSDUKPTMaskMAC] = CTransactionValue(pDUKPTMask->maskMAC, pDUKPTMask->sizeM);
 1333  taData[CTransactionData::TagVSSDUKPTMaskENC] = CTransactionValue(pDUKPTMask->maskENC, pDUKPTMask->sizeE);
 1334  taData[CTransactionData::setDUKPTmasks] = true;
 1335  ret = secPutTransactionData(handle, taData);
 1336  }
 1337 
 1338  if (!ret)
 1339  {
 1340  std::vector<uint8_t> dummy;
 1341  ret = secUpdateKey(handle, KEY_TYPE_DUKPT, dummy, dummy);
 1342  }
 1343 
 1344  secClearTransactionData(handle);
 1345 
 1346  return getCompatibleReturn(ret, errCode);
 1347 }
 1348 
 1349 
 1357 DEPRECATED inline int Sec_IncrementKSN( u_char HostId,
 1358  Ksn *pKSN,
 1359  uint8_t *errCode,
 1360  long /*timeout*/ = DEFAULT_COMM_TIMEOUT)
 1361 {
 1362  ASSERT_PARAM(pKSN);
 1363  ASSERT_PARAM(errCode);
 1364 
 1365  secHandle_t handle;
 1366  secError err = secCompatiblity_getHandle(HostId, handle);
 1367  if (err) return getCompatibleReturn(err, errCode);
 1368 
 1369  std::string KSNincIdent("KSN incrementation");
 1370  std::vector<uint8_t> keyData(KSNincIdent.begin(), KSNincIdent.end());
 1371  std::vector<unsigned char> ksn;
 1372  secError ret = secUpdateKey(handle, KEY_TYPE_DUKPT, keyData, ksn);
 1373 
 1374  memset(pKSN->KSN, 0x00, KSN_SIZE);
 1375  memcpy(pKSN->KSN, &ksn[0], ksn.size());
 1376 
 1377  return getCompatibleReturn(ret, errCode);
 1378 }
 1379 
 1380 
 1381 } //namespace com_verifone_host;
 1382 
 1385 #endif //_LIBSECCMD_H_
```
