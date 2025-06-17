---
title: sec/doc/example/DEMO/src/DemoApp.cpp
summary: Demo Application. 

---

# sec/doc/example/DEMO/src/DemoApp.cpp

Demo Application.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ResponseFromHost](struct_response_from_host.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| std::string | **[sCard1BIN](_demo_app_8cpp.md#function-scard1bin)**(6 , '1' ) |
| std::string | **[sCard2BIN](_demo_app_8cpp.md#function-scard2bin)**(6 , '2' ) |
| void | **[LOGAPI_init](_demo_app_8cpp.md#function-logapi-init)**(void ) |
| bool | **[DEMO_RequestPIN](_demo_app_8cpp.md#function-demo-requestpin)**(void ) |
| void | **[DEMO_GetStatus](_demo_app_8cpp.md#function-demo-getstatus)**(void ) |
| int | **[readCardData](_demo_app_8cpp.md#function-readcarddata)**([secHandle_t](namespacecom__adksec__cmd.md#typedef-sechandle-t) handle) |
| void | **[DEMO_HandlePaymentWithCard](_demo_app_8cpp.md#function-demo-handlepaymentwithcard)**(void ) |
| void | **[DEMO_InjectKeys](_demo_app_8cpp.md#function-demo-injectkeys)**(void ) |
| int | **[main](_demo_app_8cpp.md#function-main)**(int argc, char * argv[]) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[HOST1](_demo_app_8cpp.md#define-host1)**  |
|  | **[HOST2](_demo_app_8cpp.md#define-host2)**  |

## Detailed Description

Demo Application. 




# Demo Application

The Demo Application performs a simple (virtual) payment transactions. Two security schemes will be used: IPP-DUKPT and VSS-MSK.


# Functionality

Prefixed functions:

* [DEMO_GetStatus()](_demo_app_8cpp.md#function-demo-getstatus) - get status of security component (scapp) This function delivers information from scapp about
    * version of API and service
    * available modules (security schemes)
    * loaded VSS scripts
* [DEMO_InjectKeys()](_demo_app_8cpp.md#function-demo-injectkeys) - key loading
    * loading DUKPT initial key and initial KSN for using IPP-DUKPT
    * loading Terminal Master Key (TMK) and session keys for using VSS-MSK

Payment functions:

* [DEMO_HandlePaymentWithCard()](_demo_app_8cpp.md#function-demo-handlepaymentwithcard) - handle a payment transaction and use card data
Following tasks are performed using IPP-DUKPT scheme:
    * read (virtual) card data PAN and BIN and put it to TD (not ADK-SEC functionality)
    * initiate PIN entry (not ADK-SEC functionality)
    * retrieve the encrypted PIN (PAN is retrieved from TD)
    * get acquirer BIN from Transaction Data (TD)
Following tasks are performed using VSS-MSK scheme:
    * encrypt card data
    * generate the MAC of card data
    * send data to host (not ADK-SEC functionality)
    * verify a MAC


# Build the Demo Application

Following components have to be available:

* [DemoApp.cpp](_demo_app_8cpp.md#file-demoapp.cpp) - Demo Application source
* sccfg.json - scapp configuration file
* TS010322.vss - VSS script for key management DUKPT

Put [DemoApp.cpp](_demo_app_8cpp.md#file-demoapp.cpp) in your makefile and build the DemoApp with linking one of the following libraries:

* libsec.so (shared ADK-SEC-API library) or
* libseccmd-static.a (static ADK-SEC-API library)

Convert VSS script to vso-format and create following application packages:

* Demo Application package (includes DemoApp)
* config package (incudes sccfg.json)
* VSS script package (includes TS010322.vso)


# Setup a VOS Device

Prerequisites on the device:

* Provide following ADK components by loading the appropriate packages : liblog, libvfiipc, libguiprt, guiprtserver, libsysinfo
* Load the following ADK-SEC packages:
    * dl.sec-scapp-2.x.x.tar
    * dl.libsec-2.x.x.tar

Load the above listed application packages on the device.


# Run Demo Application

The Demo Application is started automatically after system start. 


## Functions Documentation

### function sCard1BIN

```cpp
std::string sCard1BIN(
    6 ,
    '1' 
)
```


### function sCard2BIN

```cpp
std::string sCard2BIN(
    6 ,
    '2' 
)
```


### function LOGAPI_init

```cpp
void LOGAPI_init(
    void 
)
```


### function DEMO_RequestPIN

```cpp
bool DEMO_RequestPIN(
    void 
)
```


### function DEMO_GetStatus

```cpp
void DEMO_GetStatus(
    void 
)
```


### function readCardData

```cpp
int readCardData(
    secHandle_t handle
)
```


### function DEMO_HandlePaymentWithCard

```cpp
void DEMO_HandlePaymentWithCard(
    void 
)
```


### function DEMO_InjectKeys

```cpp
void DEMO_InjectKeys(
    void 
)
```


### function main

```cpp
int main(
    int argc,
    char * argv[]
)
```




## Macros Documentation

### define HOST1

```cpp
#define HOST1 1
```


### define HOST2

```cpp
#define HOST2 2
```


## Source code

```cpp

#ifdef _VRXEVO
#include <svc_sec.h>
#endif

#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <map>

// ADK Headers
#include <log/liblog.h>
#include <html/gui.h>
#include <sec/libsec.h>

#ifdef _VOS2
void DEMO_HandleVisaDSP_P2PE(void);
void DEMO_HandleVisaDSP_FPE(void);
#endif

using namespace std;
using namespace com_adksec_cmd;
using namespace com_verifone_seccmd;
using namespace com_verifone_host;

/***************************************************************************
 * Preprocessor constant definitions
 **************************************************************************/
#define HOST1   1
#define HOST2   2

/***************************************************************************
 * Global variable declarations
 **************************************************************************/
std::string sCard1BIN(6, '1');
std::string sCard2BIN(6, '2');

/***************************************************************************
 * Data type definitions
 **************************************************************************/
struct ResponseFromHost
{
  std::vector<uint8_t> data;
  std::vector<uint8_t> signature;
};


/***************************************************************************/
void LOGAPI_init(void)
/***************************************************************************/
{
  LOGAPI_SET_VERBOSITY(LOGAPI_VERB_FILE_LINE); // prefix File:Line
  LOGAPI_INIT("DEMOAPP");
  LOGAPI_SETLEVEL(LOGAPI_OFF);

#ifdef LOGAPI_SET_DEBUG
  LOGAPI_SETOUTPUT(LOGAPI_CONSOLE);
#else
  LOGAPI_SETOUTPUT(LOGAPI_SYSLOG);
#endif
  LOGAPI_SETLEVEL(LOGAPI_TRACE);

return;
}

/**************************************************************************************************************************************************/
bool DEMO_RequestPIN(void)
/**************************************************************************************************************************************************/
{
  /*
  *   Request a PIN in DirectGUI
  */
  int ret = 0;
  std::map<std::string, std::string> value;

  try
  {
    std::string sHTML;
    sHTML = "EnterPIN.html";
    LOGF_TRACE("GetPIN_HTML: assigned HTML file: %s", sHTML.c_str());

    std::string minPinLen = "4";
    std::string maxPinLen = "8";

    // modify this values to change default behaviour of PIN entry
    uiSetPropertyInt(vfigui::UI_PROP_PASSWORD_CHAR, (int)'%');
    uiSetPropertyInt(vfigui::UI_PROP_PIN_AUTO_ENTER, 0);  // 1 -> enable
    uiSetPropertyInt(vfigui::UI_PROP_PIN_CLEAR_ALL,  1);  // 1 -> enable
    uiSetPropertyInt(vfigui::UI_PROP_PIN_BYPASS_KEY, 0);  // 0 -> No PIN bypass, 13 -> enter key, 8 -> clear key
    uiSetPropertyInt(vfigui::UI_PROP_PIN_ALGORITHM,  0x0B); // for use in VSS scripts
    uiSetPropertyInt(vfigui::UI_PROP_TIMEOUT,        60000); // 60 sec

    value.clear();
    value["msgPIN"] = "Please enter your PIN:";
    value["extra"]  = "(DEMO accepts any PIN)";
    value["minPinLen"]  = minPinLen;
    value["maxPinLen"]  = maxPinLen;

    ret = vfigui::uiInvokeURL(value, sHTML); //, NULL, this);

    LOGF_TRACE("directGUI ret: %d", ret);
    for(std::map<std::string, std::string>::iterator it = value.begin(); it!=value.end(); ++it)
    {
      LOGF_TRACE("%s => %s", (it->first).c_str(), (it->second).c_str());
    }
  }
  catch(...)
  {
    LOGF_ERROR("%s: unexpected error", __FUNCTION__);
    return (false);
  }
  return true;
}

/***************************************************************************/
void DEMO_GetStatus(void)
/***************************************************************************/
{
/*
 *  Function gets
 *  - lists of all installed VSS scripts incl. slots
 *  - scapp status incl. versions as json string
 */
  secError_t            errCode = EsecOK;

  DBGF_INFO("************************************ DEMO_GetStatus *****************************************");
  // get scapp status
  std::string jsStatus;
  if ((errCode = secGetStatus(jsStatus)) != EsecOK) {
    LOGF_ERROR("secGetStatus failed: errCode=%X", errCode);
    return;
  }
  DBGF_INFO("--------------------------------------------- DEMO_GetStatus - result: ---------------------------------------------");
  LOGF_INFO("DEMO_GetStatus: SCAPP_API-secGetStatus: %s", jsStatus.c_str());
  DBGF_INFO("--------------------------------------------- DEMO_GetStatus - result end ---------------------------------------------");

  DBGF_INFO("************************************ DEMO_GetStatus end (success) *****************************************");
  return;
}

/***************************************************************************/
int readCardData(secHandle_t handle)
/***************************************************************************/
{
  /*
  *  This function simulates reading a PAN from a card.
  *  PAN is stored in Transaction Data
  */
  secError_t            errCode = EsecOK;
  SecTransactionData_t  td;
  std::string           sCard1PAN("1122334455667786");    // simulated PAN1 data
  std::string           sCard2PAN("1878547811223344556"); // simulated PAN2 data
  static int            pseudoRandom = 0;

  // simulate reading PAN from card
  pseudoRandom++;
  if (pseudoRandom%2) {
    // Write Card1 PAN and BIN
    td[CTransactionData::TagPAN] = sCard1PAN;
    sCard1BIN = sCard1PAN.substr(0, 6);  // first 6 digits of PAN
    td["BIN"] = sCard1BIN;
  }
  else {
    // Write Card2 PAN and BIN
    td[CTransactionData::TagPAN] = sCard2PAN;
    sCard2BIN = sCard2PAN.substr(0, 6);  // first 6 digits of PAN
    td["BIN"] = sCard2BIN;
  }

  // put PAN to TD
  if ((errCode = secPutTransactionData(handle, td)) != EsecOK) {
    LOGF_ERROR("secPutTransactionData failed: errCode=%X", errCode);
  }
  return (int)(errCode);
}

/***************************************************************************/
void DEMO_HandlePaymentWithCard(void)
/***************************************************************************/
{
  /*
  *  This function performs the following tasks in IPP-DUKPT scheme:
  *  - open the IPP-DUKPT session and get a handle as a reference for all ADK-SEC functions using this scheme
  *  - call a card reading function (not ADK-SEC) which puts the card data (PAN, BIN) into Transaction Data (TD)
  *  - initiate a PIN entry by ADK-GUI
  *  - retrieve and encrypt the PIN. PAN is retrieved from TD.
  *  This function performs the following tasks in VSS-MSK scheme:
  *  - open the IPP_DUKPT session and get a handle as a reference for all ADK-SEC functions using this scheme
  *  - encrypt ... data
  *  - generate a MAC
  *  - get Transaction Data BIN of IPP-DUKPT scheme
  *  - close the IPP-DUKPT session
  *  - send data to acquirer host and getting response
  *  - verify response
  *  - close the VSS-MSK session
  */
  secError_t                  errCode = EsecOK;
  int                         ret;
  static                      secHandle_t handle_05;
  static                      secHandle_t handle_01;
  std::vector<unsigned char>  ksn;


  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - open IPP-DUKPT scheme ('05') *****************************************");
  if ((errCode = secOpen("05", handle_05)) != EsecOK) {
    LOGF_ERROR("secOpen failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - read Card Data and put it to TD *****************************************");
  if ((ret = readCardData(handle_05)) != 0) {
    LOGF_ERROR("readCardData failed: ret=%X", ret);
    secClose(handle_05);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - DEMO_RequestPIN *****************************************");
  // request a PIN
  if (!DEMO_RequestPIN()) {
    LOGF_ERROR("DEMO_RequestPIN failed");
    secClose(handle_05);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - secRetrieveEncryptedPIN *****************************************");
  // retrieve and encrypt the PIN
  const uint8_t pinBlockFormat = PIN_BLOCK_FORMAT_ISO0_E;
  std::vector<unsigned char> PINblock;
  if ((errCode = secRetrieveEncryptedPIN(handle_05, pinBlockFormat, PINblock, ksn)) != EsecOK) {
    LOGF_ERROR("secRetrieveEncryptedPIN failed: errCode=%X", errCode);
    secClose(handle_05);
    return;
  }
  DBG_HEXDUMP_TRACE("secRetrieveEncryptedPIN result -> PIN block:", (void *)&PINblock[0], PINblock.size());
  DBG_HEXDUMP_TRACE("secRetrieveEncryptedPIN result -> KSN:", (void *)&ksn[0], ksn.size());


  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - open VSS-MSK scheme ('01') *****************************************");
  if ((errCode = secOpen("01", handle_01)) != EsecOK) { // open VSS-MSK session
    LOGF_ERROR("secOpen failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - secEncryptData *****************************************");
  // encrypt ... data
  const std::string           sPlainData("00001111000011110000111100001111222233332222333322223333222233334444555544445555444455554444555566667777666677776666777766667777");
  std::vector<uint8_t>       encData;
  std::vector<uint8_t>       iv(8, 0);
  const std::vector<uint8_t> plainData(sPlainData.begin(), sPlainData.end());
  if ((errCode = secEncryptData(handle_01, plainData, encData, iv, ksn)) != EsecOK) {
    LOGF_ERROR("secEncryptData failed: errCode=%X", errCode);
    secClose(handle_01);
    return;
  }
  DBG_HEXDUMP_TRACE("secEncryptData result -> encrypted data:", (void *)&encData[0], encData.size());


  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - secSign *****************************************");
  // generate a MAC
  const std::string     sData("00001111000011110000111100001111222233332222333322223333222233334444555544445555444455554444555566667777666677776666777766667777");
  std::vector<uint8_t>  mac;
  const std::vector<uint8_t> data(sData.begin(), sData.end());
  if ((errCode = secSign(handle_01, data, mac, iv, ksn)) != EsecOK) {
    LOGF_ERROR("secSign failed: errCode=%X", errCode);
    secClose(handle_01);
    return;
  }
  DBG_HEXDUMP_TRACE("secSign result -> MAC:", (void *)&mac[0], mac.size());


  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - secGetTransactionValue *****************************************");
  // get BIN from TD to identify the card acquirer
  SecTransactionValue bin;
  if ((errCode = secGetTransactionValue(handle_05, "BIN", bin)) != EsecOK) {
    LOGF_ERROR("secGetTransactionValue failed: errCode=%X", errCode);
    secClose(handle_05);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - close IPP-DUKPT scheme *****************************************");
  if ((errCode = secClose(handle_05)) != EsecOK) {
    LOGF_ERROR("secClose failed: errCode=%X", errCode);
    secClose(handle_01);
    return;
  }

  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - secVerify *****************************************");
  // verify response
  if ((errCode = secVerify(handle_01, data, mac, iv, ksn)) != EsecOK) {
    LOGF_ERROR("secVerify failed: errCode=%X", errCode);
  }

  DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - close VSS-MSK scheme *****************************************");
  if ((errCode = secClose(handle_01)) != EsecOK) {
    LOGF_ERROR("secClose failed: errCode=%X", errCode);
    return;
  }
}


/***************************************************************************/
void DEMO_InjectKeys(void)
/***************************************************************************/
{
  secError_t   errCode = EsecOK;
  static       secHandle_t handle_05;
  static       secHandle_t handle_01;

#ifdef _VRXEVO
  int ret=0;

  // install script TS020122
  std::string sVSSfn("TS020122.vso");
  LOGF_TRACE("%s(): slot %d, install a script <%s>", __FUNCTION__, 0, sVSSfn.c_str());
  ret = iPS_InstallScript((char *)sVSSfn.c_str());
  LOGF_TRACE("%s(): installation returns 0x%X", __FUNCTION__, ret);
#endif

  DBGF_INFO("************************************ DEMO_InjectKeys - load System Key KLK and Terminal Master Key TMK *****************************************");

  // This functions should be used exclusively in a secure environment!!!

  // load the System Key KLK
  uint8_t SysKey[] = {0x12, 0x34, 0x56, 0x78, 0x90, 0x12, 0x34, 0x56, 0xAB, 0xCD, 0xEF, 0xAB, 0xCD, 0xEF, 0xAB, 0xCD};
  std::vector<uint8_t> vSysKey(SysKey, SysKey + sizeof(SysKey)/sizeof(uint8_t));
  if ((errCode = secUpdateKey(0, KEY_TYPE_DIRECT_SYSK_PLAIN, vSysKey)) != EsecOK)
  {
      LOGF_ERROR("Unable to set System Key [errCode %d]", errCode);
      return;
  }
  LOGF_TRACE("System Key KLK loaded");

  DBGF_INFO("************************************ DEMO_InjectKeys - open VSS-MSK scheme ('01') *****************************************");
  if ((errCode = secOpen("01", handle_01)) != EsecOK) {
    LOGF_ERROR("secOpen failed: errCode=%X", errCode);
    return;
  }

  // load Terminal Master Key TMK in slots 0-1
  unsigned char keyData1[] = {0x87, 0xC5, 0xA4, 0x58, 0x43, 0x76, 0x89, 0x20};
  unsigned char keyData2[] = {0x8B, 0xFD, 0xA1, 0x71, 0x87, 0xEC, 0xE3, 0x52};
  std::vector<uint8_t> vKeyData1(keyData1, keyData1 + sizeof(keyData1)/sizeof(uint8_t));
  std::vector<uint8_t> vKeyData2(keyData2, keyData2 + sizeof(keyData2)/sizeof(uint8_t));
  if ( ((errCode = secSetKSId(handle_01, 1)) != EsecOK) ||
       ((errCode = secUpdateKey(handle_01, KEY_TYPE_DIRECT_MK_PLAIN, vKeyData1)) != EsecOK) )
  {
    LOGF_TRACE("Terminal Master Key (part 1) couldn't be loaded (return: %X)", errCode);
  }
  else
  {
    if ( ((errCode = secSetKSId(handle_01, 2)) != EsecOK) ||
         ((errCode = secUpdateKey(handle_01, KEY_TYPE_DIRECT_MK_PLAIN, vKeyData2)) != EsecOK) )
    {
      LOGF_TRACE("Terminal Master Key (part 2) couldn't be loaded (return: %X)", errCode);
    }
  }
  LOGF_TRACE("Terminal Master Key TMK loaded");

  DBGF_INFO("************************************ DEMO_InjectKeys - secClose *****************************************");
  if ((errCode = secClose(handle_01)) != EsecOK) {
    LOGF_ERROR("secClose failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("************************************ DEMO_InjectKeys - open IPP-DUKPT scheme ('05') *****************************************");
  if ((errCode = secOpen("05", handle_05)) != EsecOK) {
    LOGF_ERROR("secOpen failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("************************************ DEMO_InjectKeys - load initial DUKPT key and IKSN for IPP-DUKPT *****************************************");
  const uint8_t DUKPTKey[] = {0x61, 0x11, 0x11, 0xFA, 0xA1, 0x31, 0x5B, 0x4D, 0x85, 0x8A, 0xB3, 0xA3, 0xD7, 0xD5, 0x93, 0x3A};
  std::vector<uint8_t> vDUKPTKey(DUKPTKey, DUKPTKey + sizeof(DUKPTKey)/sizeof(uint8_t));
  const uint8_t ksn[] = {0xFF, 0xFF, 0x98, 0x76, 0x54, 0x11, 0x11, 0xE0, 0x00, 0x00};
  std::vector<uint8_t> vIKSN(ksn, ksn + sizeof(ksn)/sizeof(uint8_t));
  if ((errCode = secUpdateKey(handle_05, KEY_TYPE_DUKPT, vDUKPTKey, vIKSN)) != EsecOK) {
    LOGF_ERROR("secUpdateKey failed: errCode=%X", errCode);
  }

  DBGF_INFO("************************************ DEMO_InjectKeys - secClose *****************************************");
  if ((errCode = secClose(handle_05)) != EsecOK) {
    LOGF_ERROR("secClose failed: errCode=%X", errCode);
    return;
  }


  DBGF_INFO("************************************ DEMO_InjectKeys - open VSS-MSK scheme ('01') *****************************************");
  if ((errCode = secOpen("01", handle_01)) != EsecOK) {
    LOGF_ERROR("secOpen failed: errCode=%X", errCode);
    return;
  }

  DBGF_INFO("************************************ DEMO_InjectKeys - secUpdateKey (KEK) *****************************************");
  // load VSS-MSK Key Encryption Key (KEK)
  const uint8_t kek[] = {0xA9, 0xD5, 0x11, 0xB8, 0xD8, 0x27, 0xE0, 0x9F, 0x3D, 0x87, 0x11, 0x3C, 0xD6, 0x8C, 0xD9, 0x0D};
  std::vector<uint8_t> vKEK(kek, kek + sizeof(kek)/sizeof(uint8_t));
  if ((errCode = secUpdateKey(handle_01, KEY_TYPE_KEK, vKEK)) != EsecOK) {
    LOGF_ERROR("secUpdateKey failed: errCode=%X", errCode);
    secClose(handle_01);
    return;
  }
  DBGF_INFO("************************************ DEMO_InjectKeys - secUpdateKey (PPK) *****************************************");
  // Load VSS-MSK PPK
  const uint8_t ppk[] = {0x0A, 0x0A, 0xD4, 0xE1, 0x61, 0x9E, 0xF2, 0x86, 0x03, 0xE1, 0xC3, 0x73, 0xE6, 0x73, 0x39, 0xF6};
  std::vector<uint8_t>vPPK(ppk, ppk+sizeof(ppk)/sizeof(uint8_t));
  if ((errCode = secUpdateKey(handle_01, KEY_TYPE_PPK, vPPK)) != EsecOK) {
    LOGF_ERROR("secUpdateKey failed: errCode=%X", errCode);
    secClose(handle_01);
    return;
  }
  DBGF_INFO("************************************ DEMO_InjectKeys - secUpdateKey (MGK) *****************************************");
  // Load VSS-MSK MGK
  const uint8_t mgk[] = {0x87, 0x1D, 0x7A, 0x0F, 0x03, 0x74, 0x94, 0xC2, 0x41, 0x99, 0xB0, 0x93, 0x8C, 0x78, 0x14, 0x52};
  std::vector<uint8_t>vMGK(mgk, mgk+sizeof(mgk)/sizeof(uint8_t));
  if ((errCode = secUpdateKey(handle_01, KEY_TYPE_MGK, vMGK)) != EsecOK) {
    LOGF_ERROR("secUpdateKey failed: errCode=%X", errCode);
    secClose(handle_01);
    return;
  }
  DBGF_INFO("************************************ DEMO_InjectKeys - secUpdateKey (MVK) *****************************************");
  // Load VSS-MSK MVK
  const uint8_t mvk[] = {0x87, 0x1D, 0x7A, 0x0F, 0x03, 0x74, 0x94, 0xC2, 0x41, 0x99, 0xB0, 0x93, 0x8C, 0x78, 0x14, 0x52};
  std::vector<uint8_t>vMVK(mvk, mvk+sizeof(mvk)/sizeof(uint8_t));
  if ((errCode = secUpdateKey(handle_01, KEY_TYPE_MVK, vMVK)) != EsecOK) {
    LOGF_ERROR("secUpdateKey failed: errCode=%X", errCode);
    secClose(handle_01);
    return;
  }
  DBGF_INFO("************************************ DEMO_InjectKeys - secUpdateKey (DEK) *****************************************");
  // Load VSS-MSK DEK
  const uint8_t dek[] = {0x87, 0x1D, 0x7A, 0x04, 0xDB, 0x6B, 0xC2, 0x01, 0xD5, 0x79, 0xB0, 0x93, 0x8C, 0x78, 0x14, 0x52};
  std::vector<uint8_t>vDEK(dek, dek+sizeof(dek)/sizeof(uint8_t));
  if ((errCode = secUpdateKey(handle_01, KEY_TYPE_DEK, vDEK)) != EsecOK) {
    LOGF_ERROR("secUpdateKey failed: errCode=%X", errCode);
    secClose(handle_01);
    return;
  }
  DBGF_INFO("************************************ DEMO_InjectKeys - secUpdateKey (DDK) *****************************************");
  // Load VSS-MSK DDK
  const uint8_t ddk[] = {0x4F, 0xD7, 0xA0, 0xF0, 0x37, 0x4D, 0xB6, 0xBC, 0x20, 0x1D, 0x57, 0xEC, 0xA5, 0x95, 0x7B, 0x52};
  std::vector<uint8_t>vDDK(ddk, ddk+sizeof(ddk)/sizeof(uint8_t));
  if ((errCode = secUpdateKey(handle_01, KEY_TYPE_DDK, vDDK)) != EsecOK) {
    LOGF_ERROR("secUpdateKey failed: errCode=%X", errCode);
  }

  DBGF_INFO("************************************ DEMO_InjectKeys - secClose *****************************************");
  if ((errCode = secClose(handle_01)) != EsecOK) {
    LOGF_ERROR("secClose failed: errCode=%X", errCode);
    return;
  }
}


/***************************************************************************/
int main(int argc, char *argv[])
/***************************************************************************/
{
  int ret = 0;

  LOGAPI_init();
  LOGF_INFO("*****%s has STARTED*****", "Demo Application");

#ifdef _VRXEVO
  // launch neccessary services
  static const char * appToStart[] = {
      "F:1/SYSLOG.OUT",
      "F:GUIPRTSERVER.OUT",
      "F:1/SCAPP.OUT",
  };

  for (int i = 0; i < sizeof(appToStart)/sizeof(appToStart[0]); ++i) {
      LOGF_TRACE("Starting app %s", appToStart[i]);
      int res = run(appToStart[i], NULL);
      LOGF_TRACE("Startup result %d", res);
      if (res < 0) LOGF_ERROR(" --> means FAILURE! errno %d", errno);
      else SVC_WAIT(100); // give some time to the task to initialise!
  }
#endif

  ret = secInit();
  for (int l=2; l>0; l--) {
    LOGF_TRACE("Demo application starts in %d sec", l);
    sleep(1);
  }

  DEMO_GetStatus();

  DEMO_InjectKeys();

#ifdef _VOS2
  for (int k=1; k<argc; k++)
   {
     LOGF_TRACE("argv[%d]: %s", k, argv[k]);
     if (!strcmp(argv[k], "VDSP_P2PE"))
     {
       DEMO_HandleVisaDSP_P2PE();
       return ret;
     }
     if (!strcmp(argv[k], "VDSP_FPE"))
     {
       DEMO_HandleVisaDSP_FPE();
     }
     return ret;
   }
#else
  (void)argc;
  (void)argv;
#endif //_VOS2

  for (int i = 0; i < 2; ++i) { // 2 cycles to handle different cards (see readCardData()
    DBGF_INFO("************************************ DEMO_HandlePaymentWithCard - %d. cycle *****************************************", i+1);
    DEMO_HandlePaymentWithCard();
  }

  secDestroy();
  DBGF_INFO("************************************ Demo Application end *****************************************");
  LOGAPI_DEINIT();
  return ret;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
