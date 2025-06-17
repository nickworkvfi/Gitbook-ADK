---
title: sec/doc/example/DEMO/src/DemoVDSPApp.cpp
summary: Demo Application sub-functions for Visa DSP. 

---

# sec/doc/example/DEMO/src/DemoVDSPApp.cpp

Demo Application sub-functions for Visa DSP.  [More...](#detailed-description)

## Detailed Description

Demo Application sub-functions for Visa DSP. 




# Demo Application sub-functions for Visa DSP

The Demo Application sub-functions perform Visa DSP cardholder data encryptions for two encryption methods: P2PE and FPE


# Functionality

Prefixed functions:

* [DEMO_InjectKeys()](_demo_app_8cpp.md#function-demo-injectkeys) - key loading
    * loading DUKPT initial key and initial KSN for using IPP-DUKPT

Demo Application sub-functions:

* DEMO_HandleVisaDSP_P2PE() - handle Visa DSP P2PE, initiate PIN entry and retrieve encrypted PIN block
Following tasks are performed:
    * put cardholder data PAN, CHName, Track1 and Track2 data to TD
    * P2PE encryption and obfuscation of the card data
    * get obfuscated data
    * initiate PIN entry
    * retrieve the encrypted PIN
* DEMO_HandleVisaDSP_FPE() - handle Visa DSP FPE, initiate PIN entry and retrieve encrypted PIN block
Following tasks are performed:
    * put cardholder data PAN, CHName, Track1 and Track2 data to TD
    * FPE encryption of the card data
    * initiate PIN entry
    * retrieve the encrypted PIN


# Build, load and run the Demo Application

see [DemoApp.cpp](_demo_app_8cpp.md#file-demoapp.cpp)




## Source code

```cpp

#ifdef _VOS2

#include <string.h>
#include <stdint.h>
#include <vector>

// ADK Headers
#include <log/liblog.h>
#include <sec/libsec.h>


extern bool DEMO_RequestPIN(void);

using namespace std;
using namespace com_adksec_cmd;
using namespace com_verifone_seccmd;
using namespace com_verifone_host;


/***************************************************************************/
void DEMO_HandleVisaDSP_P2PE(void)
/***************************************************************************/
{
  /*
  *  This function performs the following tasks using host VisaDSP_P2PE_Host:
  *  - opens the host session VisaDSP_P2PE_Host and gets a handle as a reference for all ADK-SEC functions using this host
  *  - puts cardholder data  into Transaction Data (TD)
  *  - set KSN incrementation to 'next KSN' in TD
  *  - perform P2PE encryption of PAN (inclusive obfuscation) and dump encryption result
  *  - set KSN incrementation to 'same KSN' in TD
  *  - perform P2PE encryption of Card Holder Name (use same key) (inclusive obfuscation) and dump encryption result
  *  - perform P2PE encryption of P2PE encryption of Track1 data (use same key) (inclusive obfuscation) and dump encryption result
  *  - perform P2PE encryption of P2PE encryption of Track2 data (use same key) (inclusive obfuscation) and dump encryption result
  *  - get obfuscated data PAN and dump result
  *  - get obfuscated data CHName and dump result
  *  - get obfuscated data Track1 Data and dump result
  *  - get obfuscated data Track2 Data and dump result
  *  - initiate a PIN entry by ADK-GUI and dump result
  *  - retrieve and encrypt the PIN. PAN is retrieved from TD
  *  - close the session
  */
  secError_t                  errCode = EsecOK;
  static                      secHandle_t handle_P2PE;
  SecTransactionData_t        transData;
  std::vector<uint8_t>        encPAN;
  std::vector<uint8_t>        encCHName;
  std::vector<uint8_t>        encTrack1;
  std::vector<uint8_t>        encTrack2;
  std::vector<uint8_t>        iv(8, 0);
  std::vector<uint8_t>        ksn;

  DBGF_INFO("******************************************************************************************************");
  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE *****************************************");
  DBGF_INFO("******************************************************************************************************");

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - open VisaDSP scheme for P2PE ('VisaDSP_P2PE_Host') *****************************************");
  if ((errCode = secOpen("VisaDSP_P2PE_Host", handle_P2PE)) != EsecOK) {
    LOGF_ERROR("secOpen failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - put Card Data to TD *****************************************");
  std::string  sPAN("4005520000000129");
  std::string  sCHName("CARD 12/VISA TEST");
  std::string  sTrack1("ABCDEFGHIJKLMNOPQRSTUVWXYZ12ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  std::string  sTrack2("1234567890123456789");

  transData[CTransactionData::TagPAN]    = sPAN;
  transData[CTransactionData::TagCHName] = sCHName;
  transData[CTransactionData::TagTrack1] = sTrack1;
  transData[CTransactionData::TagTrack2] = sTrack2;
  transData[CTransactionData::TagNextKSNState] = VISADSP_NEXT_KSN; // set KSN 'increment KSN first'
  if ((errCode = secPutTransactionData(handle_P2PE, transData)) != EsecOK) {
    secClose(handle_P2PE);
    LOGF_ERROR("secPutTransactionData (Card Holder Data) failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - P2PE encryption of PAN *****************************************");
  if ((errCode = secEncryptTransactionData(handle_P2PE, CTransactionData::TagPAN, encPAN, iv, ksn)) != EsecOK)
  {
    LOGF_ERROR("secEncryptTransactionData (PAN) failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result encPAN:", (void *)encPAN.data(), encPAN.size());
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result ksn:", (void *)ksn.data(), ksn.size());

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - set KSN 'same KSN' *****************************************");
  transData[CTransactionData::TagNextKSNState] = VISADSP_SAME_KSN;
  if ((errCode = secPutTransactionData(handle_P2PE, transData)) != EsecOK) {
    LOGF_ERROR("secPutTransactionData failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - P2PE encryption of Card Holder Name (same key) *****************************************");
  if ((errCode = secEncryptTransactionData(handle_P2PE, CTransactionData::TagCHName, encCHName, iv, ksn)) != EsecOK)
  {
    LOGF_ERROR("secEncryptTransactionData (CHName) failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result encCHName:", (void *)encCHName.data(), encCHName.size());
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result ksn:", (void *)ksn.data(), ksn.size());

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - P2PE encryption of Track1 data (same key) *****************************************");
  if ((errCode = secEncryptTransactionData(handle_P2PE, CTransactionData::TagTrack1, encTrack1, iv, ksn)) != EsecOK)
  {
    LOGF_ERROR("secEncryptTransactionData (Track1) failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result encTrack1:", (void *)encTrack1.data(), encTrack1.size());
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result ksn:", (void *)ksn.data(), ksn.size());

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - P2PE encryption of Track2 data (same key) *****************************************");
  if ((errCode = secEncryptTransactionData(handle_P2PE, CTransactionData::TagTrack2, encTrack2, iv, ksn)) != EsecOK)
  {
    LOGF_ERROR("secEncryptTransactionData (Track2) failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result encTrack2:", (void *)encTrack2.data(), encTrack2.size());
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result ksn:", (void *)ksn.data(), ksn.size());

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - get obfuscated data PAN *****************************************");
  SecTransactionValue  transDataOut;
  if ((errCode = secGetTransactionValue(handle_P2PE, CTransactionData::TagObfuscatedPAN, transDataOut)) != EsecOK)
  {
    LOGF_ERROR("secGetTransactionValue (PAN) failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }
  std::vector<uint8_t> outData = transDataOut.getRaw();
  DBG_HEXDUMP_TRACE("secGetTransactionValue result obfuscated PAN:", (void *)&outData[0], outData.size());
  outData.push_back(0);

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - get obfuscated data CHName *****************************************");
  if ((errCode = secGetTransactionValue(handle_P2PE, CTransactionData::TagObfuscatedCHName, transDataOut)) != EsecOK)
  {
    LOGF_ERROR("secGetTransactionValue (CHName) failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }
  outData = transDataOut.getRaw();
  DBG_HEXDUMP_TRACE("secGetTransactionValue result obfuscated CHName:", (void *)&outData[0], outData.size());
  outData.push_back(0);

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - get obfuscated data Track1 *****************************************");
  if ((errCode = secGetTransactionValue(handle_P2PE, CTransactionData::TagObfuscatedTrack1, transDataOut)) != EsecOK)
  {
    LOGF_ERROR("secGetTransactionValue (Track1) failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }
  outData = transDataOut.getRaw();
  DBG_HEXDUMP_TRACE("secGetTransactionValue result obfuscated Track1:", (void *)&outData[0], outData.size());
  outData.push_back(0);

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - get obfuscated data Track2 *****************************************");
  if ((errCode = secGetTransactionValue(handle_P2PE, CTransactionData::TagObfuscatedTrack2, transDataOut)) != EsecOK)
  {
    LOGF_ERROR("secGetTransactionValue (Track2) failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }
  outData = transDataOut.getRaw();
  DBG_HEXDUMP_TRACE("secGetTransactionValue result obfuscated Track2:", (void *)&outData[0], outData.size());
  outData.push_back(0);

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - request PIN *****************************************");
  if (!DEMO_RequestPIN()) {
    LOGF_ERROR("DEMO_RequestPIN failed");
    secClose(handle_P2PE);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE - Retrieve Encrypted PIN *****************************************");
  const uint8_t pinBlockFormat = PIN_BLOCK_FORMAT_ISO0_E;
  std::vector<unsigned char> PINblock;
  // (PAN is already in TD)
  if ((errCode = secRetrieveEncryptedPIN(handle_P2PE, pinBlockFormat, PINblock, ksn)) != EsecOK) {
    LOGF_ERROR("secRetrieveEncryptedPIN failed: errCode=%X", errCode);
    secClose(handle_P2PE);
    return;
  }
  DBG_HEXDUMP_TRACE("secRetrieveEncryptedPIN result -> PIN block:", (void *)&PINblock[0], PINblock.size());
  DBG_HEXDUMP_TRACE("secEncryptData result -> KSN:", (void *)&ksn[0], ksn.size());

  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - close 'VisaDSP_P2PE_Host' *****************************************");
  if ((errCode = secClose(handle_P2PE)) != EsecOK) {
    LOGF_ERROR("secClose failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("******************************************************************************************************");
  DBGF_INFO("************************************ DEMO_HandleVisaDSP_P2PE (END) ***********************************");
  DBGF_INFO("******************************************************************************************************");

  return;
}


/***************************************************************************/
void DEMO_HandleVisaDSP_FPE(void)
/***************************************************************************/
{
  /*
  *  This function performs the following tasks using host VisaDSP_FPE_Host:
  *  - opens the host session VisaDSP_FPE_Host and gets a handle as a reference for all ADK-SEC functions using this host
  *  - puts cardholder data  into Transaction Data (TD)
  *  - set KSN incrementation to 'next KSN' in TD
  *  - perform FPE encryption of PAN and dump result
  *  - set KSN incrementation to 'same KSN' in TD
  *  - perform FPE encryption of Card Holder Name (use same key) and dump result
  *  - perform FPE encryption of FPE encryption of Track1 data (use same key) and dump result
  *  - perform FPE encryption of FPE encryption of Track2 data (use same key) and dump result
  *  - initiate a PIN entry by ADK-GUI and dump result
  *  - retrieve and encrypt the PIN. PAN is retrieved from TD
  *  - close the session
  */
  secError_t                  errCode = EsecOK;
  static                      secHandle_t handle_FPE;
  SecTransactionData_t        transData;
  std::vector<uint8_t>        encPAN;
  std::vector<uint8_t>        encCHName;
  std::vector<uint8_t>        encTrack1;
  std::vector<uint8_t>        encTrack2;
  std::vector<uint8_t>        iv(8, 0);
  std::vector<uint8_t>        ksn;


  DBGF_INFO("******************************************************************************************************");
  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE *****************************************");
  DBGF_INFO("******************************************************************************************************");

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE_Host - open VisaDSP scheme for FPE ('VisaDSP_FPE_Host') *****************************************");
  if ((errCode = secOpen("VisaDSP_FPE_Host", handle_FPE)) != EsecOK) {
    LOGF_ERROR("secOpen failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE_Host - put Card Data to TD *****************************************");
  std::string  sPAN("1234567890123452");
  std::string  sCHName("LARRY MOE CURLY");
  std::string  sTrack1("123");
  std::string  sTrack2("123");

  transData[CTransactionData::TagPAN]    = sPAN;
  transData[CTransactionData::TagCHName] = sCHName;
  transData[CTransactionData::TagTrack1] = sTrack1;
  transData[CTransactionData::TagTrack2] = sTrack2;
  transData[CTransactionData::TagNextKSNState] = VISADSP_NEXT_KSN; // set KSN 'increment KSN first'
  if ((errCode = secPutTransactionData(handle_FPE, transData)) != EsecOK) {
    secClose(handle_FPE);
    LOGF_ERROR("secPutTransactionData (Card Holder Data) failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE_Host - FPE encryption of PAN *****************************************");
  if ((errCode = secEncryptTransactionData(handle_FPE, CTransactionData::TagPAN, encPAN, iv, ksn)) != EsecOK)
  {
    LOGF_ERROR("secEncryptTransactionData (PAN) failed: errCode=%X", errCode);
    secClose(handle_FPE);
    return;
  }
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result encPAN:", (void *)encPAN.data(), encPAN.size());
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result ksn:", (void *)ksn.data(), ksn.size());

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE - set KSN 'same KSN' *****************************************");
  transData[CTransactionData::TagNextKSNState] = VISADSP_SAME_KSN;
  if ((errCode = secPutTransactionData(handle_FPE, transData)) != EsecOK) {
    LOGF_ERROR("secPutTransactionData failed: errCode=%X", errCode);
    secClose(handle_FPE);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE - FPE encryption of Card Holder Name (same key) *****************************************");
  if ((errCode = secEncryptTransactionData(handle_FPE, CTransactionData::TagCHName, encCHName, iv, ksn)) != EsecOK)
  {
    LOGF_ERROR("secEncryptTransactionData (CHName) failed: errCode=%X", errCode);
    secClose(handle_FPE);
    return;
  }
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result encCHName:", (void *)encCHName.data(), encCHName.size());
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result ksn:", (void *)ksn.data(), ksn.size());

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE - FPE encryption of Track1 data (same key) *****************************************");
  if ((errCode = secEncryptTransactionData(handle_FPE, CTransactionData::TagTrack1, encTrack1, iv, ksn)) != EsecOK)
  {
    LOGF_ERROR("secEncryptTransactionData (Track1) failed: errCode=%X", errCode);
    secClose(handle_FPE);
    return;
  }
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result encTrack1:", (void *)encTrack1.data(), encTrack1.size());
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result ksn:", (void *)ksn.data(), ksn.size());

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE - FPE encryption of Track2 data (same key) *****************************************");
  if ((errCode = secEncryptTransactionData(handle_FPE, CTransactionData::TagTrack2, encTrack2, iv, ksn)) != EsecOK)
  {
    LOGF_ERROR("secEncryptTransactionData (Track2) failed: errCode=%X", errCode);
    secClose(handle_FPE);
    return;
  }
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result encTrack2:", (void *)encTrack2.data(), encTrack2.size());
  DBG_HEXDUMP_TRACE("secEncryptTransactionData result ksn:", (void *)ksn.data(), ksn.size());

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE - request PIN *****************************************");
  if (!DEMO_RequestPIN()) {
    LOGF_ERROR("DEMO_RequestPIN failed");
    secClose(handle_FPE);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE - Retrieve Encrypted PIN *****************************************");
  const uint8_t pinBlockFormat = PIN_BLOCK_FORMAT_ISO0_E;
  std::vector<unsigned char> PINblock;
  // (PAN is already in TD)
  if ((errCode = secRetrieveEncryptedPIN(handle_FPE, pinBlockFormat, PINblock, ksn)) != EsecOK) {
    LOGF_ERROR("secRetrieveEncryptedPIN failed: errCode=%X", errCode);
    secClose(handle_FPE);
    return;
  }
  DBG_HEXDUMP_TRACE("secRetrieveEncryptedPIN result -> PIN block:", (void *)&PINblock[0], PINblock.size());
  DBG_HEXDUMP_TRACE("secEncryptData result -> KSN:", (void *)&ksn[0], ksn.size());

  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - close 'VisaDSP_FPE_Host' *****************************************");
  if ((errCode = secClose(handle_FPE)) != EsecOK) {
    LOGF_ERROR("secClose failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("******************************************************************************************************");
  DBGF_INFO("************************************ DEMO_HandleVisaDSP_FPE (END) ***********************************");
  DBGF_INFO("******************************************************************************************************");

  return;
}

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
