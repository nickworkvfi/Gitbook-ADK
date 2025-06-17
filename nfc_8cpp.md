---
title: sdi/src/nfc.cpp

---

# sdi/src/nfc.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[setInputPollRequest](nfc_8cpp.md#function-setinputpollrequest)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, [pollReq](titusstubs_8cpp.md#typedef-pollreq) * inputPollReq) |
| void | **[setOutputPollResponse](nfc_8cpp.md#function-setoutputpollresponse)**(unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize, [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) responseCode, [pollRes](titusstubs_8cpp.md#typedef-pollres) * outputPollRes) |
| void | **[setOutputPollResponseFull](nfc_8cpp.md#function-setoutputpollresponsefull)**(unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize, [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) responseCode, [pollResFull](titusstubs_8cpp.md#typedef-pollresfull) * outputPollResFull) |
| void | **[handleAPDU](nfc_8cpp.md#function-handleapdu)**(unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[setInputParameters4Activation](nfc_8cpp.md#function-setinputparameters4activation)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, [NFC_CARD_TYPE](titusstubs_8cpp.md#enum-nfc-card-type) * cardType, [rawData](structraw_data.md) * rd_activationData) |
| void | **[setInputParameters4TxRx](nfc_8cpp.md#function-setinputparameters4txrx)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, [NFC_CARD_TYPE](titusstubs_8cpp.md#enum-nfc-card-type) * cardType, [rawData](structraw_data.md) * inputData) |
| void | **[setOutputResponse4TxRx](nfc_8cpp.md#function-setoutputresponse4txrx)**(unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize, [rawData](structraw_data.md) * outputData) |
| void | **[setInputParams4MifareAuthentication](nfc_8cpp.md#function-setinputparams4mifareauthentication)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, unsigned char * blockNumber, [MIFARE_KEY_TYPE](titusstubs_8cpp.md#enum-mifare-key-type) * keyType, [rawData](structraw_data.md) * Key) |
| void | **[setInputParams4MifareRead](nfc_8cpp.md#function-setinputparams4mifareread)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, [I_MIFARE_CARD_TYPE](titusstubs_8cpp.md#enum-i-mifare-card-type) * m_cardType, unsigned char * startBlockNum, unsigned char * blockAmount) |
| void | **[setOutput4MifareRead](nfc_8cpp.md#function-setoutput4mifareread)**(unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize, [rawData](structraw_data.md) * outputData) |
| void | **[setInputParams4MifareWrite](nfc_8cpp.md#function-setinputparams4mifarewrite)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, [I_MIFARE_CARD_TYPE](titusstubs_8cpp.md#enum-i-mifare-card-type) * m_cardType, unsigned char * startBlockNum, unsigned char * blockAmount, [rawData](structraw_data.md) * in_buff) |
| void | **[getInputParams4MifareIncrDecr](nfc_8cpp.md#function-getinputparams4mifareincrdecr)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, unsigned & blockNum, int & amount) |
| void | **[getInputParams4MifareRestoreTransfer](nfc_8cpp.md#function-getinputparams4mifarerestoretransfer)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, unsigned & blockNum) |
| void | **[setInputParams4FelicaPolling](nfc_8cpp.md#function-setinputparams4felicapolling)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, unsigned int * pollTimeout, [felicaPolling](structfelica_polling.md) * inData) |
| void | **[setOuputParams4FelicaPolling](nfc_8cpp.md#function-setouputparams4felicapolling)**(unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize, [felicaPollingOutput](structfelica_polling_output.md) * outData) |
| void | **[setInputParams4FelicaExchange](nfc_8cpp.md#function-setinputparams4felicaexchange)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, [felicaTxData](structfelica_tx_data.md) * in_buff) |
| void | **[setOuputParams4FelicaExchange](nfc_8cpp.md#function-setouputparams4felicaexchange)**(unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize, [felicaRxData](structfelica_rx_data.md) * out_buff) |
| void | **[writeTags](nfc_8cpp.md#function-writetags)**([rawData](structraw_data.md) & output, unsigned char * rsp, unsigned short * rspSize, unsigned short rspBufSize) |
| bool | **[extractInt](nfc_8cpp.md#function-extractint)**(const struct [BTLVNode](struct_b_t_l_v_node.md) * pxParent, const char * path, int & value)<br>Extract signed integer values from [BTLVNode](struct_b_t_l_v_node.md).  |
| bool | **[extractUnsigned](nfc_8cpp.md#function-extractunsigned)**(const struct [BTLVNode](struct_b_t_l_v_node.md) * pxParent, const char * path, unsigned & value)<br>Extract unsigned integer values from [BTLVNode](struct_b_t_l_v_node.md).  |
| void | **[targetAction](nfc_8cpp.md#function-targetaction)**(unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[createNdef](nfc_8cpp.md#function-createndef)**(unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[setInputPollABFRequest](nfc_8cpp.md#function-setinputpollabfrequest)**(unsigned char * msg, unsigned short msgSize, unsigned char * rsp, unsigned short * rspSize, pollABFParams * inputPollABFReq) |
| void | **[setOutputPollABFResponse](nfc_8cpp.md#function-setoutputpollabfresponse)**(unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize, [ResponseCodes](titusstubs_8cpp.md#enum-responsecodes) responseCode, pollABFRes * outputPollABFRes) |
| std::vector< std::string > & | **[NFC_get_appID_Static](nfc_8cpp.md#function-nfc-get-appid-static)**() |
| std::string & | **[NFC_get_appID_Preload](nfc_8cpp.md#function-nfc-get-appid-preload)**() |
| void | **[getPreloadFilePath](nfc_8cpp.md#function-getpreloadfilepath)**(char * buffer, unsigned buffersize) |
| void | **[NFC_deletePreloadFile](nfc_8cpp.md#function-nfc-deletepreloadfile)**() |
| bool | **[NFC_getPreloadFileName](nfc_8cpp.md#function-nfc-getpreloadfilename)**(char * filename, unsigned buffersize, string appID) |
| void | **[handleNFC](nfc_8cpp.md#function-handlenfc)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handleVAS](nfc_8cpp.md#function-handlevas)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| vector< string > | **[appID_Static](nfc_8cpp.md#variable-appid-static)**  |
| string | **[appID_Preload](nfc_8cpp.md#variable-appid-preload)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[CLASS](nfc_8cpp.md#define-class)**  |
|  | **[INSTRUCTION](nfc_8cpp.md#define-instruction)**  |
|  | **[P1](nfc_8cpp.md#define-p1)**  |
|  | **[P2](nfc_8cpp.md#define-p2)**  |
|  | **[NFC_BUFFER_SIZE](nfc_8cpp.md#define-nfc-buffer-size)**  |
|  | **[SET_RESULT](nfc_8cpp.md#define-set-result)**(sw1, sw2)  |


## Functions Documentation

### function setInputPollRequest

```cpp
static void setInputPollRequest(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    pollReq * inputPollReq
)
```


### function setOutputPollResponse

```cpp
static void setOutputPollResponse(
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    ResponseCodes responseCode,
    pollRes * outputPollRes
)
```


### function setOutputPollResponseFull

```cpp
static void setOutputPollResponseFull(
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    ResponseCodes responseCode,
    pollResFull * outputPollResFull
)
```


### function handleAPDU

```cpp
static void handleAPDU(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function setInputParameters4Activation

```cpp
static void setInputParameters4Activation(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    NFC_CARD_TYPE * cardType,
    rawData * rd_activationData
)
```


### function setInputParameters4TxRx

```cpp
static void setInputParameters4TxRx(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    NFC_CARD_TYPE * cardType,
    rawData * inputData
)
```


### function setOutputResponse4TxRx

```cpp
static void setOutputResponse4TxRx(
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    rawData * outputData
)
```


### function setInputParams4MifareAuthentication

```cpp
static void setInputParams4MifareAuthentication(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    unsigned char * blockNumber,
    MIFARE_KEY_TYPE * keyType,
    rawData * Key
)
```


### function setInputParams4MifareRead

```cpp
static void setInputParams4MifareRead(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    I_MIFARE_CARD_TYPE * m_cardType,
    unsigned char * startBlockNum,
    unsigned char * blockAmount
)
```


### function setOutput4MifareRead

```cpp
static void setOutput4MifareRead(
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    rawData * outputData
)
```


### function setInputParams4MifareWrite

```cpp
static void setInputParams4MifareWrite(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    I_MIFARE_CARD_TYPE * m_cardType,
    unsigned char * startBlockNum,
    unsigned char * blockAmount,
    rawData * in_buff
)
```


### function getInputParams4MifareIncrDecr

```cpp
static void getInputParams4MifareIncrDecr(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    unsigned & blockNum,
    int & amount
)
```


### function getInputParams4MifareRestoreTransfer

```cpp
static void getInputParams4MifareRestoreTransfer(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    unsigned & blockNum
)
```


### function setInputParams4FelicaPolling

```cpp
static void setInputParams4FelicaPolling(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    unsigned int * pollTimeout,
    felicaPolling * inData
)
```


### function setOuputParams4FelicaPolling

```cpp
static void setOuputParams4FelicaPolling(
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    felicaPollingOutput * outData
)
```


### function setInputParams4FelicaExchange

```cpp
static void setInputParams4FelicaExchange(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    felicaTxData * in_buff
)
```


### function setOuputParams4FelicaExchange

```cpp
static void setOuputParams4FelicaExchange(
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    felicaRxData * out_buff
)
```


### function writeTags

```cpp
static void writeTags(
    rawData & output,
    unsigned char * rsp,
    unsigned short * rspSize,
    unsigned short rspBufSize
)
```


### function extractInt

```cpp
static bool extractInt(
    const struct BTLVNode * pxParent,
    const char * path,
    int & value
)
```

Extract signed integer values from [BTLVNode](struct_b_t_l_v_node.md). 

**Parameters**: 

  * **pxNode** data node or parent node to search in 
  * **path** for search within pxNode, NULL if pxNode is the data node 
  * **value** extracted integer 


**Return**: false for error, output value not valid 

The pxNode argument is either the parent node to search in or the data node if path is a null pointer. The value length is not fixed. Integers have to be send in network byte order as binary data. Sign is given by first bit. Examples for integer values: 'FF' = -1 '80' = -128 '00 80' = 128 '80 00 00 00' = -2147483648 'FF FF FF FF' = -1


### function extractUnsigned

```cpp
static bool extractUnsigned(
    const struct BTLVNode * pxParent,
    const char * path,
    unsigned & value
)
```

Extract unsigned integer values from [BTLVNode](struct_b_t_l_v_node.md). 

**Parameters**: 

  * **pxNode** data node or parent node to search in 
  * **path** for search within pxNode, NULL if pxNode is the data node 
  * **value** extracted integer 


**Return**: false for error, output value not valid 

The pxNode argument is either the parent node to search in or the data node if path is a null pointer. The value length is not fixed. Integers have to be send in network byte order as binary data. Examples for integer values: '80' = 128 '00 80' = 128 '80 00 00 00' = 2147483648 'FF FF FF FF' = 4294967295


### function targetAction

```cpp
static void targetAction(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function createNdef

```cpp
static void createNdef(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function setInputPollABFRequest

```cpp
static void setInputPollABFRequest(
    unsigned char * msg,
    unsigned short msgSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    pollABFParams * inputPollABFReq
)
```


### function setOutputPollABFResponse

```cpp
static void setOutputPollABFResponse(
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize,
    ResponseCodes responseCode,
    pollABFRes * outputPollABFRes
)
```


### function NFC_get_appID_Static

```cpp
std::vector< std::string > & NFC_get_appID_Static()
```


### function NFC_get_appID_Preload

```cpp
std::string & NFC_get_appID_Preload()
```


### function getPreloadFilePath

```cpp
static void getPreloadFilePath(
    char * buffer,
    unsigned buffersize
)
```


### function NFC_deletePreloadFile

```cpp
void NFC_deletePreloadFile()
```


### function NFC_getPreloadFileName

```cpp
bool NFC_getPreloadFileName(
    char * filename,
    unsigned buffersize,
    string appID
)
```


### function handleNFC

```cpp
void handleNFC(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


### function handleVAS

```cpp
void handleVAS(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```



## Attributes Documentation

### variable appID_Static

```cpp
static vector< string > appID_Static;
```


### variable appID_Preload

```cpp
static string appID_Preload;
```



## Macros Documentation

### define CLASS

```cpp
#define CLASS 0
```


### define INSTRUCTION

```cpp
#define INSTRUCTION 1
```


### define P1

```cpp
#define P1 2
```


### define P2

```cpp
#define P2 3
```


### define NFC_BUFFER_SIZE

```cpp
#define NFC_BUFFER_SIZE 8192
```


### define SET_RESULT

```cpp
#define SET_RESULT(
    sw1,
    sw2
)
{ rsp[0] = sw1; rsp[1] = sw2; *rspSize = 2; }
```


## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stddef.h>
#include <pwd.h>
#include <algorithm>

#include <unistd.h>
#include <fcntl.h>
#include <errno.h>
#include "nfc.h"

#include "_logf.h"
#include "nfc/NFC_Client.h"
#include "nfc/NFC_Interface.h"
#include "hexutil.h"
#include "btlv_helper.h"
#include "tec/tec.h"
#include "sys.h"
#include "sdi_tags.h"
#include "config.h"
#include "directory.h"
#include "epp/counterTop.h"

using namespace std;

#define CLASS       0
#define INSTRUCTION 1
#define P1          2
#define P2          3

#define NFC_BUFFER_SIZE 8192

#define SET_RESULT(sw1, sw2) { rsp[0] = sw1; rsp[1] = sw2; *rspSize = 2; }

static void setInputPollRequest(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, pollReq *inputPollReq);
static void setOutputPollResponse(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, ResponseCodes responseCode, pollRes *outputPollRes);
static void setOutputPollResponseFull(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, ResponseCodes responseCode, pollResFull *outputPollResFull);
static void handleAPDU(unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void setInputParameters4Activation(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, NFC_CARD_TYPE *cardType, rawData *rd_activationData);
static void setInputParameters4TxRx(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, NFC_CARD_TYPE *cardType, rawData *inputData);
static void setOutputResponse4TxRx(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, rawData *outputData);
static void setInputParams4MifareAuthentication(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, unsigned char *blockNumber, MIFARE_KEY_TYPE *keyType, rawData *Key);
static void setInputParams4MifareRead(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, I_MIFARE_CARD_TYPE *m_cardType, unsigned char *startBlockNum, unsigned char *blockAmount);
static void setOutput4MifareRead(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, rawData *outputData);
static void setInputParams4MifareWrite(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, I_MIFARE_CARD_TYPE *m_cardType, unsigned char *startBlockNum, unsigned char *blockAmount, rawData *in_buff);
static void getInputParams4MifareIncrDecr(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, unsigned& blockNum, int& amount);
static void getInputParams4MifareRestoreTransfer(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, unsigned& blockNum);
static void setInputParams4FelicaPolling(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, unsigned int *pollTimeout, felicaPolling *inData);
static void setOuputParams4FelicaPolling(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, felicaPollingOutput *outData);
static void setInputParams4FelicaExchange(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, felicaTxData *in_buff);
static void setOuputParams4FelicaExchange(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, felicaRxData *out_buff);
static void writeTags(rawData &output, unsigned char *rsp, unsigned short *rspSize, unsigned short rspBufSize);
static bool extractInt(const struct BTLVNode* pxParent, const char* path, int& value);
static bool extractUnsigned(const struct BTLVNode* pxParent, const char* path, unsigned& value);
static void targetAction(unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void createNdef(unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize);
static void setInputPollABFRequest(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, pollABFParams *inputPollABFReq);
static void setOutputPollABFResponse(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, ResponseCodes responseCode, pollABFRes *outputPollABFRes);

// appID storage for configuration cloning
static vector<string> appID_Static;  // appID list for which a static VAS configuration is available
static string         appID_Preload; // appID for which a preload VAS configuration is available

std::vector<std::string> &NFC_get_appID_Static()
{
  return appID_Static;
}

std::string  &NFC_get_appID_Preload()
{
  return appID_Preload;
}

void writeTags(rawData &output, unsigned char *rsp, unsigned short *rspSize, unsigned short rspBufSize)
{
  if (output.bufferLen)
  {
    ULTAG2ASCBUF
    struct BTLVRootNode xBtlvr;
    struct BTLVNode *node = pxBTLVAppendTag(&xBtlvr, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (node)
    {
      int size;
      pxBTLVAppendTag(node, ULTAG2ASC(TAG_DFA300_NFC_VAS_IN_OUT_DATA), output.buffer, output.bufferLen);
      size = iBTLVExport(&xBtlvr, &rsp[2], rspBufSize - 2);

      if (size > 0)
      {
        *rspSize = size + 2;
      }
    }
  }
}

//Construct the path for the NFC preload file depending on the platform
static void getPreloadFilePath(char* buffer, unsigned buffersize)
{
  memset(buffer, 0x00, buffersize);
#ifdef __ANDROID__

  if (buffersize > 2)
  {
    strcpy(buffer, "./");
  }

#else

  if (buffersize > 6)
  {
    strcpy(buffer, "flash/");
  }

#endif
}


/* Delete the NFC preload configuration file created by SDI Server.
 * NFC preload configuration is stored in a file in oder to be mirrored/cloned to EPP whenever an EPP hot-plug is detected.
 * As NFC configuration is not persistent inside NFC ADK (it gets cleared at every SDI restart) we need to delete
 * the persistently stored file at every SDI startup. NFC configuration needs anyway to be re-transmitted by application.
 */
void NFC_deletePreloadFile()
{
  char path[255];
  const char *s;
  const char *e;

  getPreloadFilePath(path, sizeof(path));

  for (s = e = path; *s; s = e)
  {
    while (*e && *e != ':')
    {
      e++;
    }

    string path(s, e);

    if (*e == ':')
    {
      e++;
    }

    Directory d;

    if (!d.open(path))
    {
      continue;
    }

    Directory::Entry entry;

    while (d.readEntry(entry))
    {
      if (entry.filename == "." || entry.filename == "..")
      {
        continue;
      }

      // check length
      if (entry.filename.length() < 17)
      {
        continue;  // minimum: "NFC_Preload_.json"
      }

      // check prefix
      if (entry.filename.compare(0, 12, "NFC_Preload_"))
      {
        continue;
      }

      // check extension
      if (entry.filename.compare(entry.filename.length() - 5, 5, ".json"))
      {
        continue;
      }

      remove(entry.name.c_str());
    }
  }
}

/* We store the NFC preload configuration in a file in oder to be able to mirror/clone it to EPP whenever an EPP hot-plug
 * is detected.
 * Build the file name for the preload configuration file.
 * File name is composed of a prefix (NFC_Preload_) and the App ID
 */
bool NFC_getPreloadFileName(char* filename, unsigned buffersize, string appID)
{
  getPreloadFilePath(filename, buffersize);

  if (strlen(filename) > 0)
  {
    unsigned len = strlen(filename) + 12 + appID.size() + 5;

    if (buffersize > len)
    {
      strcat(filename, "NFC_Preload_");
      strcat(filename, appID.c_str());
      strcat(filename, ".json");
      return true;
    }
  }

  return false;
}


void handleNFC(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;


  if (msg[CLASS] != CLA_NFC)
  {
    // unknown CLA
    SET_RESULT(0x6E, 0x00)
    return;
  }

  if (rspBufSize < 2)
  {
    *rspSize = 0;
    return;
  }

  if (msgSize < 4)
  {
    // nfc length error
    SET_RESULT(0x67, 0x00)
    return;
  }

  if ((msg[INSTRUCTION] == INS_NFC_PT_POLLING) && (msgSize < 5))
  {
    // nfc length error
    SET_RESULT(0x67, 0x00)
    return;
  }

  switch (msg[INSTRUCTION])
  {
    case INS_NFC_CLIENT_INIT:
    {
      CL_STATUS ret;

      if (msg[P2] == 0x00)
      {
        ret = NFC_Client_Init(CL_TYPE_CLIENT_SERVER);
      }
      else if (msg[P2] == 0x01)
      {
        ret = NFC_Client_Init(CL_TYPE_FUNCTION);
      }
      else
      {
        ret = CL_STATUS_NOT_SUPPORTED;
      }

      SET_RESULT(0x90, (unsigned char)ret)
      _LOGF_INFO("NFC_Client_Init(%d): %d", msg[P2], ret);
      break;
    }

    case INS_NFC_PING:
    {
      ResponseCodes ret;
      unsigned char pingRes = 0;
      rawData output = {&pingRes, 0, 1};

      ret =  NFC_Ping(&output);
      SET_RESULT(0x90, (unsigned char)ret)

      if (ret == EMB_APP_OK)
      {
        ULTAG2ASCBUF
        struct BTLVRootNode xBtlv;
        struct BTLVNode *nodeF0 = NULL;

        // Error In TLV Data Object
        SET_RESULT(0x94, 0xF3);

        nodeF0 = pxBTLVAppendTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG), NULL, 0);

        if (nodeF0)
        {
          int len;
          pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_PING_TAG), output.buffer, 1);
          len = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

          if (len > 0)
          {
            // OK so far
            rsp[0] = 0x90;
            rsp[1] = 0x00;
            *rspSize = len + 2;
          }

          _LOGF_INFO("NFC_Ping(): *rspSize  %d ", *rspSize);
        }

        _LOGF_INFO("NFC_Ping(): %d  bufferLen: %u  pingRes: x%02X", ret, output.bufferLen, pingRes);
      }
      else
      {
        _LOGF_ERROR("NFC_Ping() error: %d", ret);
      }

      break;
    }

    case INS_NFC_GET_VERSION:
    {
      ResponseCodes ret;
      unsigned char version[256] = {0};
      rawData output = { version, 0, sizeof(version) - 1 };

      ret = NFC_Get_Version(&output);
      SET_RESULT(0x90, (unsigned char)ret)

      if (ret == EMB_APP_OK)
      {
        ULTAG2ASCBUF
        struct BTLVRootNode xBtlv;
        struct BTLVNode *nodeF0 = NULL;

        // Error In TLV Data Object
        SET_RESULT(0x94, 0xF3);

        nodeF0 = pxBTLVAppendTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG), NULL, 0);

        if (nodeF0)
        {
          int len;
          pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_VERSION_TAG), output.buffer, output.bufferLen);
          len = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

          if (len > 0)
          {
            // OK so far
            rsp[0] = 0x90;
            rsp[1] = 0x00;
            *rspSize = len + 2;
          }

          _LOGF_INFO("NFC_Get_Version(): *rspSize  %d ", *rspSize);
        }
      }

      _LOGF_INFO("NFC_Get_Version(): %d len: %u", ret, output.bufferLen);
      _LOGF_INFO("NFC version: '%s'", (char *) version);
      break;
    }

    case INS_NFC_CONFIG_INIT:
    {
      ResponseCodes ret;

      ret = NFC_Config_Init();
      // TODO: NFC_Config_Init() fails. There is not description about this function.
      SET_RESULT(0x90, (unsigned char)ret)
      _LOGF_INFO("NFC_Config_Init(): %d", ret);
      break;
    }

    case INS_NFC_PT_OPEN:
    {
      ResponseCodes ret;

      ret = NFC_PT_Open();
      SET_RESULT(0x90, (unsigned char)ret)
      _LOGF_INFO("NFC_PT_Open(): %d", ret);
      break;
    }

    case INS_NFC_PT_CLOSE:
    {
      ResponseCodes ret;

      ret = NFC_PT_Close();
      SET_RESULT(0x90, (unsigned char)ret)
      _LOGF_INFO("NFC_PT_Close(): %d", ret);
      break;
    }

    case INS_NFC_PT_FIELDON:
    {
      ResponseCodes ret;

      ret = NFC_PT_FieldOn();
      SET_RESULT(0x90, (unsigned char)ret)
      _LOGF_INFO("NFC_PT_FieldOn(): %d", ret);
      break;
    }

    case INS_NFC_PT_FIELDOFF:
    {
      ResponseCodes ret;

      ret = NFC_PT_FieldOff();
      SET_RESULT(0x90, (unsigned char)ret)
      _LOGF_INFO("NFC_PT_FieldOff(): %d", ret);
      break;
    }

    case INS_NFC_PT_POLLING:
    {
      pollReq inPollReq;
      pollRes outPollRes;
      ResponseCodes ret;

      memset(&inPollReq, 0, sizeof(pollReq));
      memset(&outPollRes, 0, sizeof(pollReq));

      setInputPollRequest(msg, msgSize, rsp, rspSize, &inPollReq);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ret = NFC_PT_Polling(&inPollReq, &outPollRes);
        _LOGF_INFO("NFC_PT_Polling(): %d", ret);

        if ((ret == EMB_APP_OK) || (ret == EMB_APP_MULTI_CARDS))
        {
          setOutputPollResponse(rspBufSize, rsp, rspSize, ret, &outPollRes);
        }
        else
        {
          SET_RESULT(0x90, (unsigned char)ret)
        }

        NFC_Free_Poll_Data(&outPollRes);
      }

      if (inPollReq.customData.buffer)
      {
        free(inPollReq.customData.buffer);
      }

      break;
    }

    case INS_NFC_PT_CANCEL_POLLING:
    {
      ResponseCodes ret = NFC_PT_Cancel_Polling();
      _LOGF_INFO("NFC_PT_Cancel_Polling(): %d", ret);
      SET_RESULT(0x90, (unsigned char)ret)
      break;
    }

    case INS_NFC_PT_POLLINGFULL:
    {
      pollReq inPollReq;
      pollResFull outPollResFull;

      memset(&inPollReq, 0, sizeof(pollReq));
      memset(&outPollResFull, 0, sizeof(pollResFull));

      setInputPollRequest(msg, msgSize, rsp, rspSize, &inPollReq);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret;

        ret = NFC_PT_PollingFull(&inPollReq, &outPollResFull);
        _LOGF_INFO("NFC_PT_PollingFull(): %d", ret);

        if ((ret == EMB_APP_OK) || (ret == EMB_APP_MULTI_CARDS))
        {
          setOutputPollResponseFull(rspBufSize, rsp, rspSize, ret, &outPollResFull);
        }
        else
        {
          SET_RESULT(0x90, (unsigned char)ret)
        }

        NFC_Free_Poll_DataFull(&outPollResFull);
      }

      if (inPollReq.customData.buffer)
      {
        free(inPollReq.customData.buffer);
      }

      break;
    }

    case INS_NFC_PT_ACTIVATION:
    {
      NFC_CARD_TYPE cardType;
      rawData rd_activationData;

      setInputParameters4Activation(msg, msgSize, rsp, rspSize, &cardType, &rd_activationData);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret;

        ret = NFC_PT_Activation(cardType, &rd_activationData);
        _LOGF_INFO("NFC_PT_Activation(): %d", ret);
        SET_RESULT(0x90, (unsigned char)ret)
      }

      if (rd_activationData.buffer)
      {
        free(rd_activationData.buffer);
      }

      break;
    }

    case INS_NFC_PT_TXRX:
    {
      // Function disabled on Countertop interface by checkCLA() function but should be
      // allowed on EPP for requests coming from plugins running on Countertop

      NFC_CARD_TYPE cardType;
      unsigned char TxRx[NFC_BUFFER_SIZE] = {0};
      rawData inputData;
      rawData outputData;

      outputData.buffer = TxRx;
      outputData.bufferLen = 0;
      outputData.bufferMaxSize = sizeof(TxRx);

      setInputParameters4TxRx(msg, msgSize, rsp, rspSize, &cardType, &inputData);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret;

        ret = NFC_PT_TxRx(cardType, &inputData, &outputData);
        _LOGF_INFO("NFC_PT_TxRx(): %d", ret);

        if (ret == EMB_APP_OK)
        {
          setOutputResponse4TxRx(rspBufSize, rsp, rspSize, &outputData);
        }
        else
        {
          SET_RESULT(0x90, (unsigned char)ret)
        }
      }

      if (inputData.buffer)
      {
        free(inputData.buffer);
      }

      break;
    }

    case INS_NFC_PT_FETCHBAUD:
    {
      ResponseCodes ret;

      if (msg[P2] == 0x00)
      {
        ret = NFC_PT_FtechBaud(INF_BAUD212);
      }
      else if (msg[P2] == 0x01)
      {
        ret = NFC_PT_FtechBaud(INF_BAUD424);
      }
      else
      {
        ret = EMB_APP_PARAMETER_NOT_SUPPORTED;
      }

      _LOGF_INFO("NFC_PT_FtechBaud(): %d", ret);
      SET_RESULT(0x90, (unsigned char)ret)
      break;
    }

    case INS_NFC_APDU_EXCH:
    {
      // Function disabled on Countertop interface by checkCLA() function but should be
      // allowed on EPP for requests coming from plugins running on Countertop
      handleAPDU(msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_NFC_MIFARE_AUTH:
    {
      unsigned char blockNumber;
      MIFARE_KEY_TYPE keyType;
      rawData Key;

      setInputParams4MifareAuthentication(msg, msgSize, rsp, rspSize, &blockNumber, &keyType, &Key);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret;
        ret =  NFC_Mifare_Authenticate(blockNumber, keyType, &Key);
        SET_RESULT(0x90, (unsigned char)ret)
        _LOGF_INFO("NFC_Mifare_Authenticate(): x%02X", ret);
      }

      if (Key.buffer)
      {
        free(Key.buffer);
      }

      break;
    }

    case INS_NFC_MIFARE_READ:
    {
      I_MIFARE_CARD_TYPE m_cardType;
      unsigned char startBlockNum;
      unsigned char blockAmount;

      setInputParams4MifareRead(msg, msgSize, rsp, rspSize, &m_cardType, &startBlockNum, &blockAmount);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret;
        rawData out_buff;
        unsigned char readData[NFC_BUFFER_SIZE] = {0};

        out_buff.buffer = readData;
        out_buff.bufferLen = 0;
        out_buff.bufferMaxSize = sizeof(readData);

        ret = NFC_Mifare_Read(m_cardType, (unsigned int)startBlockNum, (unsigned int)blockAmount, &out_buff);
        _LOGF_INFO("NFC_Mifare_Read(): x%02X", ret);

        if (ret == EMB_APP_OK)
        {
          setOutput4MifareRead(rspBufSize, rsp, rspSize, &out_buff);
        }
        else
        {
          SET_RESULT(0x90, (unsigned char)ret)
        }
      }

      break;
    }

    case INS_NFC_MIFARE_WRITE:
    {
      I_MIFARE_CARD_TYPE m_cardType;
      unsigned char startBlockNum;
      unsigned char blockAmount;
      rawData in_buff;

      setInputParams4MifareWrite(msg, msgSize, rsp, rspSize, &m_cardType, &startBlockNum, &blockAmount, &in_buff);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret;
        ret = NFC_Mifare_Write(m_cardType, (unsigned int)startBlockNum, (unsigned int)blockAmount, &in_buff);
        _LOGF_INFO("NFC_Mifare_Write(): x%02X", ret);
        SET_RESULT(0x90, (unsigned char)ret);
      }

      if (in_buff.buffer)
      {
        free(in_buff.buffer);
      }

      break;
    }

    case INS_NFC_MIFARE_INCREMENT:
    {
      unsigned blockNum;
      int amount;

      getInputParams4MifareIncrDecr(msg, msgSize, rsp, rspSize,  blockNum, amount);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret = NFC_Mifare_Increment(blockNum, amount);
        _LOGF_INFO("NFC_Mifare_Increment(): x%02X", ret);
        SET_RESULT(0x90, (unsigned char)ret);
      }

      break;
    }

    case INS_NFC_MIFARE_DECREMENT:
    {
      unsigned blockNum;
      int amount;

      getInputParams4MifareIncrDecr(msg, msgSize, rsp, rspSize,  blockNum, amount);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret = NFC_Mifare_Decrement(blockNum, amount);
        _LOGF_INFO("NFC_Mifare_Decrement(): x%02X", ret);
        SET_RESULT(0x90, (unsigned char)ret);
      }

      break;
    }

    case INS_NFC_MIFARE_INCR_ONLY:
    {
      unsigned blockNum;
      int amount;

      getInputParams4MifareIncrDecr(msg, msgSize, rsp, rspSize,  blockNum, amount);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret = NFC_Mifare_Increment_Only(blockNum, amount);
        _LOGF_INFO("NFC_Mifare_Increment_Only(): x%02X", ret);
        SET_RESULT(0x90, (unsigned char)ret);
      }

      break;
    }

    case INS_NFC_MIFARE_DECR_ONLY:
    {
      unsigned blockNum;
      int amount;

      getInputParams4MifareIncrDecr(msg, msgSize, rsp, rspSize,  blockNum, amount);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret = NFC_Mifare_Decrement_Only(blockNum, amount);
        _LOGF_INFO("NFC_Mifare_Decrement_Only(): x%02X", ret);
        SET_RESULT(0x90, (unsigned char)ret);
      }

      break;
    }

    case INS_NFC_MIFARE_RESTORE:
    {
      unsigned blockNum;

      getInputParams4MifareRestoreTransfer(msg, msgSize, rsp, rspSize, blockNum);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret = NFC_Mifare_Restore(blockNum);
        _LOGF_INFO("NFC_Mifare_Restore(): x%02X", ret);
        SET_RESULT(0x90, (unsigned char)ret);
      }

      break;
    }

    case INS_NFC_MIFARE_TRANSFER:
    {
      unsigned blockNum;

      getInputParams4MifareRestoreTransfer(msg, msgSize, rsp, rspSize, blockNum);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes ret = NFC_Mifare_Transfer(blockNum);
        _LOGF_INFO("NFC_Mifare_Transfer(): x%02X", ret);
        SET_RESULT(0x90, (unsigned char)ret);
      }

      break;
    }

    case INS_NFC_FELICA_POLLING:
    {
      unsigned int pollTimeout;
      felicaPolling inData;
      felicaPollingOutput outData;

      setInputParams4FelicaPolling(msg, msgSize, rsp, rspSize, &pollTimeout, &inData);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes  ret;

        _LOGF_INFO("pollTimeout:   x%08X = %u", pollTimeout, pollTimeout);
        _LOGF_INFO("reciveTimeOUt: x%08X = %u", inData.reciveTimeOUt, inData.reciveTimeOUt);
        _LOGF_INFO("systemCode[0]: x%02X systemCode[1]: x%02X", inData.systemCode[0], inData.systemCode[1]);
        _LOGF_INFO("requestCode:   x%02X", inData.requestCode);
        _LOGF_INFO("TimeSlot:      x%02X", inData.TimeSlot);

        ret = NFC_Felica_Polling(pollTimeout, &inData, &outData);
        _LOGF_INFO("NFC_Felica_Polling(): x%02X", ret);

        if (ret == EMB_APP_OK)
        {
          setOuputParams4FelicaPolling(rspBufSize, rsp, rspSize, &outData);
        }
        else
        {
          SET_RESULT(0x90, (unsigned char)ret);
        }
      }

      break;
    }

    case INS_NFC_FELICA_EXCHANGE:
    {
      felicaTxData in_buff;
      felicaRxData out_buff;
      unsigned char rxBuffer[NFC_BUFFER_SIZE] = {0};

      out_buff.rxData.buffer = rxBuffer;
      out_buff.rxData.bufferLen = 0;
      out_buff.rxData.bufferMaxSize = sizeof(rxBuffer);

      setInputParams4FelicaExchange(msg, msgSize, rsp, rspSize, &in_buff);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ResponseCodes  ret;

        _LOGF_INFO("timeOut: x%08X = %u", in_buff.timeOut, in_buff.timeOut);
        _LOGF_INFO("in_buff.txData:");
        _LOGAPI_HEXDUMP_RAW_INFO(in_buff.txData.buffer, in_buff.txData.bufferLen);

        ret =  NFC_Felica_Exchange(&in_buff, &out_buff);
        _LOGF_INFO("NFC_Felica_Exchange(): x%02X", ret);

        if (ret == EMB_APP_OK)
        {
          setOuputParams4FelicaExchange(rspBufSize, rsp, rspSize, &out_buff);
        }
        else
        {
          SET_RESULT(0x90, (unsigned char)ret);
        }
      }

      if (in_buff.txData.buffer)
      {
        free(in_buff.txData.buffer);
      }

      break;
    }

    case INS_NFC_TARGET_ACTION:
    {
      targetAction(msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_NFC_CREATE_NDEF:
    {
      createNdef(msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_NFC_PT_POLLINGABF:
    {
      pollABFParams inPollABFReq;
      pollABFRes    outPollABFRes;
      ResponseCodes ret;

      memset(&inPollABFReq, 0, sizeof(pollABFParams));
      memset(&outPollABFRes, 0, sizeof(pollABFRes));

      setInputPollABFRequest(msg, msgSize, rsp, rspSize, &inPollABFReq);

      if ((rsp[0] == 0x90) && (rsp[1] == 0x00))
      {
        ret = NFC_PT_PollingABF(&inPollABFReq, &outPollABFRes);
        _LOGF_INFO("NFC_PT_PollingABF(): %d", ret);

        if ((ret == EMB_APP_OK) || (ret == EMB_APP_MULTI_CARDS))
        {
          setOutputPollABFResponse(rspBufSize, rsp, rspSize, ret, &outPollABFRes);
        }
        else
        {
          SET_RESULT(0x90, (unsigned char)ret)
        }

        NFC_Free_Poll_DataFull(&outPollABFRes.abresponse);
      }

      if (inPollABFReq.customData.buffer)
      {
        free(inPollABFReq.customData.buffer);
      }

      break;
    }

    default:
    {
      // Attention!!!
      // E105 returns an execution error in this case.

      // unknown INS
      SET_RESULT(0x6D, 0x00)
      _LOGF_ERROR("handleNFC: unknown INS %u", msg[INSTRUCTION]);
      break;
    }
  }

  return;
}


void handleVAS(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  ULTAG2ASCBUF
  (void) msgBufSize;
  struct BTLVRootNode xBtlv;

  if (rspBufSize < 2)
  {
    *rspSize = 0;
    return;
  }

  if (msgSize < 4)
  {
    // Message Length Error
    SET_RESULT(0x67, 0x00)
    return;
  }

  if (msg[CLASS] != CLA_VAS)
  {
    // Unknown Class
    SET_RESULT(0x6E, 0x00)
    return;
  }

  switch (msg[INSTRUCTION])
  {
    case INS_VAS_NFC_TERM_CONFIG:
    case INS_VAS_ACTIVATE:
    case INS_VAS_UPDATE_CONFIG:
    case INS_VAS_PRELOAD:
    case INS_VAS_DECRYPT:
    case INS_VAS_ACTION:
    {
      // Set default result to execution error
      SET_RESULT(0x64, 0x00)

      if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
      {
        struct BTLVNode *node = NULL;
        struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA);

        // Extract the input data
        if (nodeF0 && ((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA300_NFC_VAS_IN_OUT_DATA))) != NULL))
        {
          _LOGF_INFO("handleVAS: pxBTLVFindTag DFA300 OK");
          VasStatus ret = VAS_FAIL;
          rawData input;
          rawData output;
          unsigned char buffer[10240];
          memset(buffer, 0, sizeof(buffer));

          input.buffer = node->pucData;
          input.bufferLen = node->uSize;
          input.bufferMaxSize = node->uSize;

          output.buffer = buffer;
          output.bufferLen = 0;
          output.bufferMaxSize = sizeof(buffer) - 1;

          if (msg[INSTRUCTION] == INS_VAS_NFC_TERM_CONFIG)
          {
            ret = NFC_Terminal_Config(&input, &output);
            SET_RESULT(0x90, ret);
          }
          else // functions requiring an application ID
          {
            // Extract the appID
            if ((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA301_NFC_VAS_APP_ID))) != NULL)
            {
              _LOGF_INFO("handleVAS: pxBTLVFindTag DFA301 OK");
              rawData appID;
              appID.buffer = node->pucData;
              appID.bufferLen = node->uSize;
              appID.bufferMaxSize = node->uSize;

              if (msg[INSTRUCTION] == INS_VAS_ACTIVATE)
              {
                ret = NFC_VAS_Activate(&appID, &input, &output);
              }
              else if (msg[INSTRUCTION] == INS_VAS_UPDATE_CONFIG)
              {
                ret = NFC_VAS_UpdateConfig(&appID, &input, &output);

                if (ret == VAS_OK)
                {
                  string str((const char*)appID.buffer, appID.bufferLen);
                  vfiepm::CounterTop& ctp = vfiepm::CounterTop::getInstance();

                  if (std::find(appID_Static.begin(), appID_Static.end(), str) == appID_Static.end())
                  {
                    appID_Static.push_back(str);
                  }

                  // Transfer wallet keys to EPP after each Wallet configuration command
                  if (ctp.isCounterTopMode() &&
                      ctp.isEppEnabled())
                  {
                    ctp.transferNFCWalletKeysToEpp();
                  }
                }
              }
              else if (msg[INSTRUCTION] == INS_VAS_PRELOAD)
              {
                ret = NFC_VAS_PreLoad(&appID, &input, &output);

                if (ret == VAS_OK)
                {
                  char filename[255];
                  string str((const char*)appID.buffer, appID.bufferLen);
                  // Store preload VAS config in a file for EPP use
                  ret = VAS_FAIL;

                  if (NFC_getPreloadFileName(filename, sizeof(filename), str))
                  {
                    int fileHdl = open(filename, O_CREAT | O_TRUNC | O_WRONLY, S_IRUSR | S_IWUSR);

                    if (fileHdl >= 0)
                    {
                      if (write(fileHdl, input.buffer, input.bufferLen) == (int)input.bufferLen)
                      {
                        appID_Preload.assign(str);
                        ret = VAS_OK;
                      }

                      fsync(fileHdl);
                      close(fileHdl);
                    }
                  }

                  if (ret == VAS_FAIL)
                  {
                    _LOGF_ERROR("handleVAS: Error saving preload data in a file %d", errno);
                    _LOGF_ERROR("handleVAS: preload cancelled");
                    NFC_VAS_CancelPreLoad(&appID);
                    appID_Preload.clear();
                  }
                }
              }
              else if (msg[INSTRUCTION] == INS_VAS_DECRYPT)
              {
                ret = NFC_VAS_Decrypt(&appID, &input, &output);
              }
              else if (msg[INSTRUCTION] == INS_VAS_ACTION)
              {
                // extract action
                int action = 0;

                if (((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA302_NFC_VAS_ACTION))) != NULL) && (node->uSize == 4))
                {
                  _LOGF_INFO("handleVAS: pxBTLVFindTag DFA302 OK");
                  action = (node->pucData[0] << 24) + ((int)node->pucData[1] << 16) + ((int)node->pucData[2] << 8) + (int)node->pucData[3];
                }

                ret = NFC_VAS_Action(&appID, action, &input, &output);
              }

              SET_RESULT(0x90, ret);

              writeTags(output, rsp, rspSize, rspBufSize);
            }
            else
            {
              // Tag Error
              SET_RESULT(0x62, 0x00);
            }
          }
        }
        else
        {
          // Tag Error
          SET_RESULT(0x62, 0x00);
        }
      }
      else
      {
        // Error In TLV Data Object
        SET_RESULT(0x94, 0xF3);
      }

      vBTLVClear(&xBtlv);
      break;
    }

    case INS_VAS_NFC_TERM_READ_CONFIG:
    case INS_VAS_READ_CONFIG:
    case INS_VAS_CANCEL_CONFIG:
    case INS_VAS_CANCEL_PRELOAD:
    {
      // Set default result to execution error
      SET_RESULT(0x64, 0x00)

      if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
      {
        rawData appID;
        struct BTLVNode *node = NULL;
        struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA);

        // Extract the application ID
        if (nodeF0 && ((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA301_NFC_VAS_APP_ID))) != NULL))
        {
          _LOGF_INFO("handleVAS: pxBTLVFindTag DFA301 OK");
          appID.buffer = node->pucData;
          appID.bufferLen = node->uSize;
          appID.bufferMaxSize = node->uSize;
          VasStatus ret = VAS_FAIL;
          unsigned char buffer[4096];
          memset(buffer, 0, sizeof(buffer));
          rawData output = { buffer, 0, sizeof(buffer) };

          if (msg[INSTRUCTION] == INS_VAS_NFC_TERM_READ_CONFIG)
          {
            ret = NFC_TERMINAL_ReadConfig(&appID, &output);
          }
          else if (msg[INSTRUCTION] == INS_VAS_READ_CONFIG)
          {
            ret = NFC_VAS_ReadConfig(&appID, &output);
          }
          else if (msg[INSTRUCTION] == INS_VAS_CANCEL_CONFIG)
          {
            ret = NFC_VAS_CancelConfig(&appID);

            if (ret == VAS_OK)
            {
              string str((const char*)appID.buffer, appID.bufferLen);
              vector<string>::iterator it = std::find(appID_Static.begin(), appID_Static.end(), str);

              if (it != appID_Static.end())
              {
                appID_Static.erase(it);
              }

              if (str == appID_Preload)
              {
                char filename[255];

                if (NFC_getPreloadFileName(filename, sizeof(filename), str))
                {
                  remove(filename);
                  appID_Preload.clear();
                }
              }
            }
          }
          else if (msg[INSTRUCTION] == INS_VAS_CANCEL_PRELOAD)
          {
            ret = NFC_VAS_CancelPreLoad(&appID);

            if (ret == VAS_OK)
            {
              string str((const char*)appID.buffer, appID.bufferLen);

              if (str == appID_Preload)
              {
                char filename[255];

                if (NFC_getPreloadFileName(filename, sizeof(filename), str))
                {
                  remove(filename);
                  appID_Preload.clear();
                }
              }
            }
          }

          SET_RESULT(0x90, ret);

          writeTags(output, rsp, rspSize, rspBufSize);
        }
        else
        {
          // Tag Error
          SET_RESULT(0x62, 0x00);
        }
      }
      else
      {
        // Error In TLV Data Object
        SET_RESULT(0x94, 0xF3);
      }

      vBTLVClear(&xBtlv);
      break;
    }

    case INS_VAS_CANCEL:
    {
      VasStatus ret;
      ret = NFC_VAS_Cancel();
      SET_RESULT(0x90, ret);
      break;
    }

    default:
    {
      // unknown INS
      SET_RESULT(0x6D, 0x00)
      _LOGF_ERROR("handleVAS: unknown INS");
      break;
    }
  }

  return;
}

static void setInputPollRequest(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, pollReq *inputPollReq)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      int len;
      unsigned char byte_au8[4] = {0x00};

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_TECH_BITMAP_TAG), byte_au8, 4);

      if (len == 4)
      {
        inputPollReq->tech_bitmap = (byte_au8[0] << 24) | (byte_au8[1] << 16) | (byte_au8[2] << 8) | byte_au8[3];
        _LOGF_INFO("tech_bitmap: %u", inputPollReq->tech_bitmap);

        len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_POLL_TIMEOUT_TAG), byte_au8, 4);

        if (len == 4)
        {
          inputPollReq->poll_timeout = (byte_au8[0] << 24) | (byte_au8[1] << 16) | (byte_au8[2] << 8) | byte_au8[3];
          _LOGF_INFO("poll_timeout: %u", inputPollReq->poll_timeout);
          // OK so far
          rsp[0] = 0x90;
          rsp[1] = 0x00;

          // TAG_DFA21A_NFC_DUTY_CYCLE_TAG and EMB_APP_CUSTOM_POLL_DATA_TAG are optional
          struct BTLVNode *dutyCycle = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA21A_NFC_DUTY_CYCLE_TAG));

          if (dutyCycle && dutyCycle->uSize == 1)
          {
            inputPollReq->turnDutyCycleOn = dutyCycle->pucData[0] ? true : false;
          }
          else
          {
            inputPollReq->turnDutyCycleOn = true;
          }

          _LOGF_INFO("turnDutyCycleOn is: %s", inputPollReq->turnDutyCycleOn ? "true" : "false");

          struct BTLVNode *customData = pxBTLVFindTag(nodeF0, ULTAG2ASC(EMB_APP_CUSTOM_POLL_DATA_TAG));

          if (customData && customData->uSize)
          {
            inputPollReq->customData.buffer = (unsigned char *) malloc(customData->uSize);

            if (inputPollReq->customData.buffer)
            {
              memcpy(inputPollReq->customData.buffer, customData->pucData, customData->uSize);
              inputPollReq->customData.bufferLen = customData->uSize;
              inputPollReq->customData.bufferMaxSize = customData->uSize;
              _LOGF_INFO("customData->uSize:%u", customData->uSize);
              _LOGAPI_HEXDUMP_RAW_INFO(inputPollReq->customData.buffer, customData->uSize);
            }
            else
            {
              _LOGF_ERROR("%s: Input customData memory allocation failed", __func__);
              SET_RESULT(0x64, 0x00);
            }
          }
        }
      }
    }
  }
}

static void setOutputPollResponse(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, ResponseCodes responseCode, pollRes *outputPollRes)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;
  struct BTLVNode *nodeF0 = NULL;
  unsigned char ret = (unsigned char)responseCode;
  unsigned char cardsTotalCount = (unsigned char) outputPollRes->m_foundTargetsTotalCount;
  unsigned char cardsA = (unsigned char) outputPollRes->m_foundTargetsA;
  unsigned char cardsB = (unsigned char) outputPollRes->m_foundTargetsB;
  unsigned char cardsF = (unsigned char) outputPollRes->m_foundTargetsF;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  _LOGF_INFO("Found %u cards.", outputPollRes->m_foundTargetsTotalCount);
  _LOGF_INFO("custom_poll_result.bufferLen: %u", outputPollRes->custom_poll_result.bufferLen);

  nodeF0 = pxBTLVAppendTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG), NULL, 0);

  if (nodeF0)
  {
    unsigned int i;
    int len;

    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_NFC_RESULT), &ret, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_TOTAL_COUNT), &cardsTotalCount, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_A), &cardsA, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_B), &cardsB, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_F), &cardsF, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CUSTOM_POLL_RESULT), outputPollRes->custom_poll_result.buffer, outputPollRes->custom_poll_result.bufferLen);

    for (i = 0; i < outputPollRes->m_foundTargetsTotalCount; ++i)
    {
      char text[201];
      struct BTLVNode *nodeCard = NULL;
      unsigned char cardType = outputPollRes->cards_info_arr[i].cardType;

      sdi::bintohexstring(text, outputPollRes->cards_info_arr[i].card_info.buffer, MIN(100, outputPollRes->cards_info_arr[i].card_info.bufferLen));
      _LOGF_INFO("card[%u] type: %u card info: %s", i + 1, cardType, text);
      nodeCard = pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARD), NULL, 0);

      if (nodeCard)
      {
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_TYPE), &cardType, 1);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_INFO), outputPollRes->cards_info_arr[i].card_info.buffer, outputPollRes->cards_info_arr[i].card_info.bufferLen);
      }
    }

    len = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

    if (len > 0)
    {
      // OK so far
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = len + 2;
    }
  }
}

static void setOutputPollResponseFull(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, ResponseCodes responseCode, pollResFull *outputPollResFull)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;
  struct BTLVNode *nodeF0 = NULL;
  unsigned char ret = (unsigned char)responseCode;
  unsigned char cardsTotalCount = (unsigned char) outputPollResFull->m_foundTargetsTotalCount;
  unsigned char cardsA = (unsigned char) outputPollResFull->m_foundTargetsA;
  unsigned char cardsB = (unsigned char) outputPollResFull->m_foundTargetsB;
  unsigned char cardsF = (unsigned char) outputPollResFull->m_foundTargetsF;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  _LOGF_INFO("Found %u cards.", outputPollResFull->m_foundTargetsTotalCount);
  _LOGF_INFO("custom_poll_result.bufferLen: %u", outputPollResFull->custom_poll_result.bufferLen);

  nodeF0 = pxBTLVAppendTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG), NULL, 0);

  if (nodeF0)
  {
    unsigned int i;
    int len;

    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_NFC_RESULT), &ret, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_TOTAL_COUNT), &cardsTotalCount, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_A), &cardsA, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_B), &cardsB, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_F), &cardsF, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CUSTOM_POLL_RESULT), outputPollResFull->custom_poll_result.buffer, outputPollResFull->custom_poll_result.bufferLen);

    for (i = 0; i < outputPollResFull->m_foundTargetsTotalCount; ++i)
    {
      char text[201];
      struct BTLVNode *nodeCard = NULL;
      unsigned char cardTypeFull_arr[4];
      unsigned char cardType = outputPollResFull->cards_info_arr[i].m_modulation;
      unsigned long cardTypeFull = outputPollResFull->cards_info_arr[i].m_cardTypes;

      // convert long-type to binary array in big-endian format
      cardTypeFull_arr[0] = (unsigned char)(cardTypeFull >> 24);
      cardTypeFull_arr[1] = (unsigned char)(cardTypeFull >> 16);
      cardTypeFull_arr[2] = (unsigned char)(cardTypeFull >> 8);
      cardTypeFull_arr[3] = (unsigned char)(cardTypeFull);

      sdi::bintohexstring(text, outputPollResFull->cards_info_arr[i].mrd_UID.buffer, MIN(100, outputPollResFull->cards_info_arr[i].mrd_UID.bufferLen));
      _LOGF_INFO("card[%u] type: 0x%02X type_full: 0x%08lX card info: %s", i + 1, cardType, cardTypeFull, text);
      _LOGF_INFO("card[%u] SAK: 0x%02X ATQ[0]: 0x%02X ATQ[1]: 0x%02X mrd_RFU.bufferLen: %u", i + 1, outputPollResFull->cards_info_arr[i].m_SAK, outputPollResFull->cards_info_arr[i].ATQ[0], outputPollResFull->cards_info_arr[i].ATQ[1], outputPollResFull->cards_info_arr[i].mrd_RFU.bufferLen);

      nodeCard = pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARD), NULL, 0);

      if (nodeCard)
      {
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_TYPE), &cardType, 1);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_TYPE_FULL), cardTypeFull_arr, 4);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_SAK), &(outputPollResFull->cards_info_arr[i].m_SAK), 1);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_ATQ), outputPollResFull->cards_info_arr[i].ATQ, 2);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_INFO), outputPollResFull->cards_info_arr[i].mrd_UID.buffer, outputPollResFull->cards_info_arr[i].mrd_UID.bufferLen);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_RFU), outputPollResFull->cards_info_arr[i].mrd_RFU.buffer, outputPollResFull->cards_info_arr[i].mrd_RFU.bufferLen);
      }
    }

    len = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

    if (len > 0)
    {
      // OK so far
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = len + 2;
    }
  }
}

static void setInputPollABFRequest(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, pollABFParams *inputPollABFReq)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      int len;
      unsigned char byte_au8[4] = {0x00};

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_TECH_BITMAP_TAG), byte_au8, 4);

      if (len == 4)
      {
        inputPollABFReq->tech_bitmap = (byte_au8[0] << 24) | (byte_au8[1] << 16) | (byte_au8[2] << 8) | byte_au8[3];
        _LOGF_INFO("tech_bitmap: %u", inputPollABFReq->tech_bitmap);
      }
      else
      {
        return;
      }

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_POLL_TIMEOUT_TAG), byte_au8, 4);

      if (len == 4)
      {
        inputPollABFReq->poll_timeout = (byte_au8[0] << 24) | (byte_au8[1] << 16) | (byte_au8[2] << 8) | byte_au8[3];
        _LOGF_INFO("poll_timeout: %u", inputPollABFReq->poll_timeout);
      }
      else
      {
        return;
      }

      // TAG_DFA21A_NFC_DUTY_CYCLE_TAG and EMB_APP_CUSTOM_POLL_DATA_TAG are optional
      struct BTLVNode *dutyCycle = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA21A_NFC_DUTY_CYCLE_TAG));

      if (dutyCycle && dutyCycle->uSize == 1)
      {
        inputPollABFReq->turnDutyCycleOn = dutyCycle->pucData[0] ? true : false;
      }
      else
      {
        inputPollABFReq->turnDutyCycleOn = true;
      }

      _LOGF_INFO("turnDutyCycleOn is: %s", inputPollABFReq->turnDutyCycleOn ? "true" : "false");

      struct BTLVNode *customData = pxBTLVFindTag(nodeF0, ULTAG2ASC(EMB_APP_CUSTOM_POLL_DATA_TAG));

      if (customData && customData->uSize)
      {
        inputPollABFReq->customData.buffer = (unsigned char *) malloc(customData->uSize);

        if (inputPollABFReq->customData.buffer)
        {
          memcpy(inputPollABFReq->customData.buffer, customData->pucData, customData->uSize);
          inputPollABFReq->customData.bufferLen = customData->uSize;
          inputPollABFReq->customData.bufferMaxSize = customData->uSize;
          _LOGF_INFO("customData->uSize:%u", customData->uSize);
          _LOGAPI_HEXDUMP_RAW_INFO(inputPollABFReq->customData.buffer, customData->uSize);
        }
        else
        {
          _LOGF_ERROR("%s: Input customData memory allocation failed", __func__);
          SET_RESULT(0x64, 0x00);
          return;
        }
      }

      // Get Felica polling input parameter
      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_RECIVE_TIMEOUT_TAG), byte_au8, 4);

      if (len == 4)
      {
        inputPollABFReq->reciveTimeOUt = (byte_au8[0] << 24) | (byte_au8[1] << 16) | (byte_au8[2] << 8) | byte_au8[3];
        _LOGF_INFO("reciveTimeOUt: %u", inputPollABFReq->reciveTimeOUt);
      }
      else
      {
        return;
      }

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_SYS_CODE_TAG), inputPollABFReq->systemCode, 2);

      if (len != 2)
      {
        return;
      }

      _LOGF_INFO("systemCode[0]: 0x%02X systemCode[1]: 0x%02X", inputPollABFReq->systemCode[0], inputPollABFReq->systemCode[1]);

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_REQ_CODE_TAG), &inputPollABFReq->requestCode, 1);

      if (len != 1)
      {
        return;
      }

      _LOGF_INFO("requestCode: 0x%02X", inputPollABFReq->requestCode);

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_TIME_SLOT_TAG), &inputPollABFReq->TimeSlot, 1);

      if (len != 1)
      {
        return;
      }

      _LOGF_INFO("TimeSlot: 0x%02X", inputPollABFReq->TimeSlot);

      // OK so far
      rsp[0] = 0x90;
      rsp[1] = 0x00;
    }
  }
}

static void setOutputPollABFResponse(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, ResponseCodes responseCode, pollABFRes *outputPollABFRes)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;
  struct BTLVNode *nodeF0 = NULL;
  unsigned char ret = (unsigned char)responseCode;
  unsigned char cardsTotalCount = (unsigned char) outputPollABFRes->abresponse.m_foundTargetsTotalCount;
  unsigned char cardsA = (unsigned char) outputPollABFRes->abresponse.m_foundTargetsA;
  unsigned char cardsB = (unsigned char) outputPollABFRes->abresponse.m_foundTargetsB;
  unsigned char cardsF = (unsigned char) outputPollABFRes->abresponse.m_foundTargetsF;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  _LOGF_INFO("Found %u cards.", outputPollABFRes->abresponse.m_foundTargetsTotalCount);
  _LOGF_INFO("custom_poll_result.bufferLen: %u", outputPollABFRes->abresponse.custom_poll_result.bufferLen);

  nodeF0 = pxBTLVAppendTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG), NULL, 0);

  if (nodeF0)
  {
    unsigned int i;
    int len;

    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_NFC_RESULT), &ret, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_TOTAL_COUNT), &cardsTotalCount, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_A), &cardsA, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_B), &cardsB, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARDS_F), &cardsF, 1);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CUSTOM_POLL_RESULT), outputPollABFRes->abresponse.custom_poll_result.buffer, outputPollABFRes->abresponse.custom_poll_result.bufferLen);

    for (i = 0; i < outputPollABFRes->abresponse.m_foundTargetsTotalCount; ++i)
    {
      char text[201];
      struct BTLVNode *nodeCard = NULL;
      unsigned char cardTypeFull_arr[4];
      unsigned char cardType = outputPollABFRes->abresponse.cards_info_arr[i].m_modulation;
      unsigned long cardTypeFull = outputPollABFRes->abresponse.cards_info_arr[i].m_cardTypes;

      // convert long-type to binary array in big-endian format
      cardTypeFull_arr[0] = (unsigned char)(cardTypeFull >> 24);
      cardTypeFull_arr[1] = (unsigned char)(cardTypeFull >> 16);
      cardTypeFull_arr[2] = (unsigned char)(cardTypeFull >> 8);
      cardTypeFull_arr[3] = (unsigned char)(cardTypeFull);

      sdi::bintohexstring(text, outputPollABFRes->abresponse.cards_info_arr[i].mrd_UID.buffer, MIN(100, outputPollABFRes->abresponse.cards_info_arr[i].mrd_UID.bufferLen));
      _LOGF_INFO("card[%u] type: 0x%02X type_full: 0x%08lX card info: %s", i + 1, cardType, cardTypeFull, text);
      _LOGF_INFO("card[%u] SAK: 0x%02X ATQ[0]: 0x%02X ATQ[1]: 0x%02X mrd_RFU.bufferLen: %u", i + 1, outputPollABFRes->abresponse.cards_info_arr[i].m_SAK, outputPollABFRes->abresponse.cards_info_arr[i].ATQ[0], outputPollABFRes->abresponse.cards_info_arr[i].ATQ[1], outputPollABFRes->abresponse.cards_info_arr[i].mrd_RFU.bufferLen);

      nodeCard = pxBTLVAppendTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARD), NULL, 0);

      if (nodeCard)
      {
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_TYPE), &cardType, 1);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_TYPE_FULL), cardTypeFull_arr, 4);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_SAK), &(outputPollABFRes->abresponse.cards_info_arr[i].m_SAK), 1);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_ATQ), outputPollABFRes->abresponse.cards_info_arr[i].ATQ, 2);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_INFO), outputPollABFRes->abresponse.cards_info_arr[i].mrd_UID.buffer, outputPollABFRes->abresponse.cards_info_arr[i].mrd_UID.bufferLen);
        pxBTLVAppendTag(nodeCard, ULTAG2ASC(CTS_DATA_TAG_CARD_RFU), outputPollABFRes->abresponse.cards_info_arr[i].mrd_RFU.buffer, outputPollABFRes->abresponse.cards_info_arr[i].mrd_RFU.bufferLen);
      }
    }

    // Set Felica polling ouput parameter
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_UID_TAG), outputPollABFRes->felicaResponse.UID, 8);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_PAD_TAG), outputPollABFRes->felicaResponse.pad, 8);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_SYS_CODE_TAG), outputPollABFRes->felicaResponse.sysCode, 2);

    len = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

    if (len > 0)
    {
      // OK so far
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = len + 2;
    }
  }
}


static void handleAPDU(unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;
  struct BTLVRootNode xBtlvr;

  // Set default result to execution error
  SET_RESULT(0x64, 0x00)

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *node = NULL;
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA);

    // Extract the application ID
    if (nodeF0)
    {
      // Extract the command data.
      // Command data must be in following format : CLA INS P1 P2 Lc Data Le
      if (((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA204_NFC_APDU_CMD))) != NULL)
          && (node->uSize >= 4))
      {
        _LOGF_INFO("handleAPDU: pxBTLVFindTag DFA204 OK");

        ResponseCodes ret;
        apduTxData apduCmd;
        unsigned char buffer[256];
        apduRxData apduRsp = { 0, 0, {buffer, 0, sizeof(buffer)}};

        memset(&apduCmd, 0, sizeof(apduCmd));
        memset(buffer, 0, sizeof(buffer));

        apduCmd.clas        = node->pucData[0];
        apduCmd.instruction = node->pucData[1];
        apduCmd.param1      = node->pucData[2];
        apduCmd.param2      = node->pucData[3];
        apduCmd.expectedResponseLen = 0x101; // values > 0xFF result in no Le appended

        if (node->uSize > 4)
        {
          // APDU command data available
          apduCmd.txData.bufferLen     = node->pucData[4];
          apduCmd.txData.bufferMaxSize = node->pucData[4];
          apduCmd.txData.buffer        = &node->pucData[5];

          if (node->uSize > 4 + 1 + apduCmd.txData.bufferLen)
          {
            // Le available
            apduCmd.expectedResponseLen = node->pucData[4 + 1 + apduCmd.txData.bufferLen];
          }
        }

        ret = NFC_APDU_Exchange(&apduCmd, &apduRsp);
        SET_RESULT(0x90, ret);

        if (ret == EMB_APP_OK)
        {
          if (apduRsp.rxData.bufferLen > 0)
          {
            node = pxBTLVAppendTag(&xBtlvr, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

            if (node)
            {
              int size;
              pxBTLVAppendTag(node, ULTAG2ASC(TAG_DFA205_NFC_APDU_RSP), apduRsp.rxData.buffer, apduRsp.rxData.bufferLen);

              unsigned char sw12[2];
              sw12[0] = apduRsp.sw1 & 0xFF;
              sw12[1] = apduRsp.sw2 & 0xFF;
              pxBTLVAppendTag(node, ULTAG2ASC(TAG_DFA219_NFC_APDU_SW12), sw12, 2);

              size = iBTLVExport(&xBtlvr, &rsp[2], rspBufSize - 2);

              if (size > 0)
              {
                *rspSize = size + 2;
              }
            }

            vBTLVClear(&xBtlvr);
          }
        }
      }
    }
    else
    {
      // Tag Error
      SET_RESULT(0x62, 0x00);
    }
  }
  else
  {
    // Error In TLV Data Object
    SET_RESULT(0x94, 0xF3);
  }
}

static void setInputParameters4Activation(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, NFC_CARD_TYPE *cardType, rawData *rd_activationData)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  // Set rd_activationData to its default value
  rd_activationData->buffer = NULL;
  rd_activationData->bufferLen = 0;
  rd_activationData->bufferMaxSize = 0;
  *cardType = I_UNKNOWN_CARD_TYPE;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      int len;
      unsigned char cardType_u8;

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARD_TYPE), &cardType_u8, 1);

      if (len == 1)
      {
        struct BTLVNode *nodeCardInfo;

        *cardType = (NFC_CARD_TYPE) cardType_u8;
        _LOGF_INFO("cardType: 0x%02X", *cardType);

        nodeCardInfo = pxBTLVFindTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARD_INFO));

        if (nodeCardInfo)
        {
          rd_activationData->buffer = (unsigned char *) malloc(nodeCardInfo->uSize);

          if (rd_activationData->buffer)
          {
            memcpy(rd_activationData->buffer, nodeCardInfo->pucData, nodeCardInfo->uSize);
            rd_activationData->bufferLen = nodeCardInfo->uSize;
            rd_activationData->bufferMaxSize = nodeCardInfo->uSize;
            _LOGF_INFO("nodeCardInfo->uSize:%u", nodeCardInfo->uSize);
            _LOGF_INFO("cardInfo:");
            _LOGAPI_HEXDUMP_RAW_INFO(rd_activationData->buffer, nodeCardInfo->uSize);
            // OK so far
            rsp[0] = 0x90;
            rsp[1] = 0x00;
          }
        }
      }
    }
  }
}

static void setInputParameters4TxRx(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, NFC_CARD_TYPE *cardType, rawData *inputData)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  // Set inputData to its default value
  inputData->buffer = NULL;
  inputData->bufferLen = 0;
  inputData->bufferMaxSize = 0;
  *cardType = I_UNKNOWN_CARD_TYPE;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      int len;
      unsigned char cardType_u8;

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(CTS_DATA_TAG_CARD_TYPE), &cardType_u8, 1);

      if (len == 1)
      {
        struct BTLVNode *nodeTxRxData;

        *cardType = (NFC_CARD_TYPE) cardType_u8;
        _LOGF_INFO("cardType: 0x%02X", *cardType);

        nodeTxRxData = pxBTLVFindTag(nodeF0, ULTAG2ASC(EMB_APP_TXRX_DATA_TAG));

        if (nodeTxRxData)
        {
          inputData->buffer = (unsigned char *) malloc(nodeTxRxData->uSize);

          if (inputData->buffer)
          {
            memcpy(inputData->buffer, nodeTxRxData->pucData, nodeTxRxData->uSize);
            inputData->bufferLen = nodeTxRxData->uSize;
            inputData->bufferMaxSize = nodeTxRxData->uSize;
            _LOGF_INFO("nodeTxRxData->uSize:%u", nodeTxRxData->uSize);
            _LOGF_INFO("inputTxRxData:");
            _LOGAPI_HEXDUMP_RAW_INFO(inputData->buffer, nodeTxRxData->uSize);
            // OK so far
            rsp[0] = 0x90;
            rsp[1] = 0x00;
          }
        }
      }
    }
  }
}

static void setOutputResponse4TxRx(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, rawData *outputData)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;
  struct BTLVNode *nodeF0 = NULL;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  _LOGF_INFO("outputData:");
  _LOGAPI_HEXDUMP_RAW_INFO(outputData->buffer, outputData->bufferLen);

  nodeF0 = pxBTLVAppendTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG), NULL, 0);

  if (nodeF0)
  {
    int len;

    pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_TXRX_DATA_TAG), outputData->buffer, outputData->bufferLen);
    len = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

    if (len > 0)
    {
      // OK so far
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = len + 2;
    }
  }
}

static void setInputParams4MifareAuthentication(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, unsigned char *blockNumber, MIFARE_KEY_TYPE *keyType, rawData *Key)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  // Initialize input parameters
  *blockNumber = 0;
  *keyType = MIFARE_KEY_TYPE_A;
  Key->buffer = NULL;
  Key->bufferLen = 0;
  Key->bufferMaxSize = 0;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      int len;
      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_BLOCK_NUM_TAG), blockNumber, 1);

      if (len == 1)
      {
        struct BTLVNode *nodeKey;
        unsigned char keyType_u8;

        _LOGF_INFO("blockNumber: %d", *blockNumber);

        len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_KEY_TYPE_TAG), &keyType_u8, 1);

        if (len == 1)
        {
          _LOGF_INFO("keyType: %d", keyType_u8);

          // there are 2 key types only: MIFARE_KEY_TYPE_A and MIFARE_KEY_TYPE_B;
          if ((keyType_u8 == MIFARE_KEY_TYPE_A) || (keyType_u8 == MIFARE_KEY_TYPE_B))
          {
            *keyType = (MIFARE_KEY_TYPE)keyType_u8;
          }
          else
          {
            // invalid input parameters
            SET_RESULT(0x94, 0xF3);
            return;
          }

          nodeKey = pxBTLVFindTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_KEY_TAG));

          if (nodeKey)
          {
            Key->buffer = (unsigned char *) malloc(nodeKey->uSize);

            if (Key->buffer)
            {
              memcpy(Key->buffer, nodeKey->pucData, nodeKey->uSize);
              Key->bufferLen = nodeKey->uSize;
              Key->bufferMaxSize = nodeKey->uSize;
              _LOGF_INFO("Key->bufferLen:%u", Key->bufferLen);
              _LOGF_INFO("Key:");
              _LOGAPI_HEXDUMP_RAW_INFO(Key->buffer, Key->bufferLen);
              // OK so far
              rsp[0] = 0x90;
              rsp[1] = 0x00;
            }
          }
        }
      }
    }
  }
}

static void setInputParams4MifareRead(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, I_MIFARE_CARD_TYPE *m_cardType, unsigned char *startBlockNum, unsigned char *blockAmount)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  // Initialize input parameters
  *m_cardType = I_MIFARE_TYPE_CLASSIC;
  *startBlockNum = 0;
  *blockAmount = 0;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      int len;
      unsigned char m_cardType_u8;

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_CARD_TYPE_TAG), &m_cardType_u8, 1);

      if (len == 1)
      {
        *m_cardType = (I_MIFARE_CARD_TYPE)m_cardType_u8;
        _LOGF_INFO("m_cardType: %d", *m_cardType);

        len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_START_BLOCK_TAG), startBlockNum, 1);

        if (len == 1)
        {
          _LOGF_INFO("startBlockNum: %d", *startBlockNum);
          len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_BLOCK_AMOUNT_TAG), blockAmount, 1);

          if (len == 1)
          {
            _LOGF_INFO("blockAmount: %d", *blockAmount);
            // OK so far
            rsp[0] = 0x90;
            rsp[1] = 0x00;
          }
        }
      }
    }
  }
}

static void setOutput4MifareRead(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, rawData *outputData)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;
  struct BTLVNode *nodeF0 = NULL;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  _LOGF_INFO("MifareRead->bufferLen: %u", outputData->bufferLen);
  _LOGF_INFO("MifareRead:");
  _LOGAPI_HEXDUMP_RAW_INFO(outputData->buffer, outputData->bufferLen);

  nodeF0 = pxBTLVAppendTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG), NULL, 0);

  if (nodeF0)
  {
    int len;

    pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_READ_DATA_TAG), outputData->buffer, outputData->bufferLen);
    len = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

    if (len > 0)
    {
      // OK so far
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = len + 2;
    }
  }
}

static void setInputParams4MifareWrite(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, I_MIFARE_CARD_TYPE *m_cardType, unsigned char *startBlockNum, unsigned char *blockAmount, rawData *in_buff)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  // Initialize input parameters
  *m_cardType = I_MIFARE_TYPE_CLASSIC;
  *startBlockNum = 0;
  *blockAmount = 0;
  in_buff->buffer = NULL;
  in_buff->bufferLen = 0;
  in_buff->bufferMaxSize = 0;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      int len;
      unsigned char m_cardType_u8;

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_CARD_TYPE_TAG), &m_cardType_u8, 1);

      if (len == 1)
      {
        *m_cardType = (I_MIFARE_CARD_TYPE)m_cardType_u8;
        _LOGF_INFO("m_cardType: %d", *m_cardType);

        len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_START_BLOCK_TAG), startBlockNum, 1);

        if (len == 1)
        {
          _LOGF_INFO("startBlockNum: %d", *startBlockNum);

          len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_BLOCK_AMOUNT_TAG), blockAmount, 1);

          if (len == 1)
          {
            struct BTLVNode *nodeWriteData;
            _LOGF_INFO("blockAmount: %d", *blockAmount);
            nodeWriteData = pxBTLVFindTag(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_WRITE_DATA_TAG));

            if (nodeWriteData)
            {
              in_buff->buffer = (unsigned char *) malloc(nodeWriteData->uSize);

              if (in_buff->buffer)
              {
                memcpy(in_buff->buffer, nodeWriteData->pucData, nodeWriteData->uSize);
                in_buff->bufferLen = nodeWriteData->uSize;
                in_buff->bufferMaxSize = nodeWriteData->uSize;
                _LOGF_INFO("WriteDataLen:%u", in_buff->bufferLen);
                _LOGF_INFO("WriteData:");
                _LOGAPI_HEXDUMP_RAW_INFO(in_buff->buffer, in_buff->bufferLen);
                // OK so far
                rsp[0] = 0x90;
                rsp[1] = 0x00;
              }
            }
          }
        }
      }
    }
  }
}

/*
 * Note: For Mifare Increment and Decrement commands the block number should be
 * in the range '00' .. 'ff'. Nevertheless as the NFC API takes integer here
 * let us support integer on the serial interface and do not restrict to one
 * byte length only.
 * The amount parameter is the 'Operand' which is a 4 byte signed integer in the
 * NXP MF1S50YYX_V1 specification. Again lets support arbitrary length but
 * anyway handle it as signed integer.
 */
static void getInputParams4MifareIncrDecr(
  unsigned char *msg, unsigned short msgSize,
  unsigned char *rsp, unsigned short *rspSize,
  unsigned& blockNum, int& amount)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  // Initialize output parameters
  blockNum = 0;
  amount = 0;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      if (extractUnsigned(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_BLOCK_NUM_TAG), blockNum)
          && extractInt(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_AMOUNT_TAG), amount))
      {
        // OK so far
        rsp[0] = 0x90;
        rsp[1] = 0x00;
        _LOGF_INFO("blockNum: %u", blockNum);
        _LOGF_INFO("amount: %d", amount);
      }
    }
  }
}

static void getInputParams4MifareRestoreTransfer(
  unsigned char *msg, unsigned short msgSize,
  unsigned char *rsp, unsigned short *rspSize,
  unsigned& blockNum)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  // Initialize output parameters
  blockNum = 0;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      if (extractUnsigned(nodeF0, ULTAG2ASC(EMB_APP_MIFARE_BLOCK_NUM_TAG), blockNum))
      {
        // OK so far
        rsp[0] = 0x90;
        rsp[1] = 0x00;
        _LOGF_INFO("blockNum: %u", blockNum);
      }
    }
  }
}


static void setInputParams4FelicaPolling(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, unsigned int *pollTimeout, felicaPolling *inData)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  // Initialize input parameters
  *pollTimeout = 0;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      int len;
      unsigned char byte_au8[4];
      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_POLL_TIMEOUT_TAG), byte_au8, 4);

      if (len == 4)
      {
        *pollTimeout = (byte_au8[0] << 24) | (byte_au8[1] << 16) | (byte_au8[2] << 8) | byte_au8[3];
      }
      else
      {
        return;
      }

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_RECIVE_TIMEOUT_TAG), byte_au8, 4);

      if (len == 4)
      {
        inData->reciveTimeOUt = (byte_au8[0] << 24) | (byte_au8[1] << 16) | (byte_au8[2] << 8) | byte_au8[3];
      }
      else
      {
        return;
      }

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_SYS_CODE_TAG), inData->systemCode, 2);

      if (len != 2)
      {
        vBTLVClear(&xBtlv);
        return;
      }

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_REQ_CODE_TAG), &inData->requestCode, 1);

      if (len != 1)
      {
        return;
      }

      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_TIME_SLOT_TAG), &inData->TimeSlot, 1);

      if (len != 1)
      {
        return;
      }

      // OK so far
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      // there are 2 key types only: MIFARE_KEY_TYPE_A and MIFARE_KEY_TYPE_B;
    }
  }
}

static void setOuputParams4FelicaPolling(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, felicaPollingOutput *outData)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;
  struct BTLVNode *nodeF0 = NULL;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);
  _LOGF_INFO("UID[8]:");
  _LOGAPI_HEXDUMP_RAW_INFO(outData->UID, 8);
  _LOGF_INFO("pad[8]:");
  _LOGAPI_HEXDUMP_RAW_INFO(outData->pad, 8);
  _LOGF_INFO("sysCode[2]:");
  _LOGAPI_HEXDUMP_RAW_INFO(outData->sysCode, 2);

  nodeF0 = pxBTLVAppendTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG), NULL, 0);

  if (nodeF0)
  {
    int len;

    pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_UID_TAG), outData->UID, 8);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_PAD_TAG), outData->pad, 8);
    pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_SYS_CODE_TAG), outData->sysCode, 2);
    len = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

    if (len > 0)
    {
      // OK so far
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = len + 2;
    }
  }
}

static void setInputParams4FelicaExchange(unsigned char *msg, unsigned short msgSize, unsigned char *rsp, unsigned short *rspSize, felicaTxData *in_buff)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  // Initialize input parameters
  in_buff->timeOut = 0;
  in_buff->txData.buffer = NULL;
  in_buff->txData.bufferLen = 0;
  in_buff->txData.bufferMaxSize = 0;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG));

    if (nodeF0)
    {
      int len;
      unsigned char byte_au8[4];
      len = iBTLVExtractTag(nodeF0, ULTAG2ASC(EMB_APP_FELICA_TIMEOUT_TAG), byte_au8, 4);

      if (len == 4)
      {
        struct BTLVNode *nodeTXData;

        in_buff->timeOut = (byte_au8[0] << 24) | (byte_au8[1] << 16) | (byte_au8[2] << 8) | byte_au8[3];

        nodeTXData = pxBTLVFindTag(nodeF0, ULTAG2ASC(EMB_APP_TXRX_DATA_TAG));

        if (nodeTXData)
        {
          in_buff->txData.buffer = (unsigned char *) malloc(nodeTXData->uSize);

          if (in_buff->txData.buffer)
          {
            memcpy(in_buff->txData.buffer, nodeTXData->pucData, nodeTXData->uSize);
            in_buff->txData.bufferLen = nodeTXData->uSize;
            in_buff->txData.bufferMaxSize = nodeTXData->uSize;
            // OK so far
            rsp[0] = 0x90;
            rsp[1] = 0x00;
          }
        }
      }
    }
  }
}

static void setOuputParams4FelicaExchange(unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize, felicaRxData *out_buff)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;
  struct BTLVNode *nodeF0 = NULL;

  // Error In TLV Data Object
  SET_RESULT(0x94, 0xF3);

  _LOGF_INFO("rxData:");
  _LOGAPI_HEXDUMP_RAW_INFO(out_buff->rxData.buffer, out_buff->rxData.bufferLen);

  nodeF0 = pxBTLVAppendTag(&xBtlv, ULTAG2ASC(EMB_APP_F0_TEMPLATE_TAG), NULL, 0);

  if (nodeF0)
  {
    int len;

    pxBTLVAppendTag(nodeF0, ULTAG2ASC(EMB_APP_TXRX_DATA_TAG), out_buff->rxData.buffer, out_buff->rxData.bufferLen);
    len = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

    if (len > 0)
    {
      // OK so far
      rsp[0] = 0x90;
      rsp[1] = 0x00;
      *rspSize = len + 2;
    }
  }
}

static void targetAction(unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *node = NULL;
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA);

    // Extract the relevant Parameter and perform NFC_Target_Action()
    if (nodeF0)
    {
      // Extract the command data.
      if (((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA21B_NFC_TARGET_ACTION))) != NULL)
          && (node->uSize == 1))
      {
        unsigned int timeout = 0;
        rawData rd_inData;
        rd_inData.buffer = NULL;
        rd_inData.bufferLen = 0;
        rd_inData.bufferMaxSize = 0;

        NFC_TARGET_ACTION action = (NFC_TARGET_ACTION)node->pucData[0];

        if (((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA21C_NFC_TIMEOUT))) != NULL)
            && (node->uSize == 4))
        {
          timeout = (node->pucData[0] << 24) | (node->pucData[1] << 16) | (node->pucData[2] << 8) | node->pucData[3];
        }
        else
        {
          _LOGF_INFO("targetAction: DFA21C %s", node == NULL ? "not available" : "wrong size");
        }

        if (((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA21D_NFC_IN_DATA))) != NULL)
            && (node->uSize > 0))
        {
          rd_inData.buffer = node->pucData;
          rd_inData.bufferLen = node->uSize;
          rd_inData.bufferMaxSize = node->uSize;
        }
        else
        {
          _LOGF_INFO("targetAction: DFA21D %s", node == NULL ? "not available" : "wrong size");
        }

        unsigned char outBuffer[NFC_BUFFER_SIZE] = {0};
        rawData rd_outData = { outBuffer, 0, sizeof(outBuffer) };

        ResponseCodes ret = NFC_Target_Action(action, timeout, &rd_inData, &rd_outData);

        SET_RESULT(0x90, ret);

        if (ret == EMB_APP_OK)
        {
          if (rd_outData.bufferLen > 0)
          {
            vBTLVClear(&xBtlv);
            node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

            if (node)
            {
              int size;
              pxBTLVAppendTag(node, ULTAG2ASC(TAG_DFA21E_NFC_OUT_DATA), rd_outData.buffer, rd_outData.bufferLen);

              size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

              if (size > 0)
              {
                *rspSize = size + 2;
              }
            }
          }
        }
      }
      else
      {
        _LOGF_ERROR("targetAction: DFA21B %s", node == NULL ? "not available" : "wrong size");

        // Parameter Error
        SET_RESULT(0x64, 0xFE);
      }
    }
    else
    {
      // Tag Error
      SET_RESULT(0x62, 0x00);
    }
  }
  else
  {
    // Error In TLV Data Object
    SET_RESULT(0x94, 0xF3);
  }
}

static void createNdef(unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  ULTAG2ASCBUF
  struct BTLVRootNode xBtlv;

  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *node = NULL;
    struct BTLVNode *nodeF0 = pxBTLVFindTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA);

    // Extract the relevant Parameter and perform NFC_Create_Ndef()
    if (nodeF0)
    {
      // Extract the command data.
      if (((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA21F_NFC_NDEF_TYPES))) != NULL)
          && (node->uSize == 1))
      {
        rawData rd_inData;
        rd_inData.buffer = NULL;
        rd_inData.bufferLen = 0;
        rd_inData.bufferMaxSize = 0;

        NFC_NDEF_TYPES ndefType = (NFC_NDEF_TYPES)node->pucData[0];

        if (((node = pxBTLVFindTag(nodeF0, ULTAG2ASC(TAG_DFA21D_NFC_IN_DATA))) != NULL)
            && (node->uSize > 0))
        {
          rd_inData.buffer = node->pucData;
          rd_inData.bufferLen = node->uSize;
          rd_inData.bufferMaxSize = node->uSize;
        }
        else
        {
          _LOGF_INFO("createNdef: DFA21D %s", node == NULL ? "not available" : "wrong size");
        }

        unsigned char outBuffer[NFC_BUFFER_SIZE] = {0};
        rawData rd_outData = { outBuffer, 0, sizeof(outBuffer) };

        ResponseCodes ret = NFC_Create_Ndef(ndefType, &rd_inData, &rd_outData);

        SET_RESULT(0x90, ret);

        if (ret == EMB_APP_OK)
        {
          if (rd_outData.bufferLen > 0)
          {
            vBTLVClear(&xBtlv);
            node = pxBTLVAppendTag(&xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

            if (node)
            {
              int size;
              pxBTLVAppendTag(node, ULTAG2ASC(TAG_DFA21E_NFC_OUT_DATA), rd_outData.buffer, rd_outData.bufferLen);

              size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2);

              if (size > 0)
              {
                *rspSize = size + 2;
              }
            }
          }
        }
      }
      else
      {
        _LOGF_ERROR("createNdef: DFA21F %s", node == NULL ? "not available" : "wrong size");

        // Parameter Error
        SET_RESULT(0x64, 0xFE);
      }
    }
    else
    {
      // Tag Error
      SET_RESULT(0x62, 0x00);
    }
  }
  else
  {
    // Error In TLV Data Object
    SET_RESULT(0x94, 0xF3);
  }
}


bool extractInt(const struct BTLVNode* pxNode, const char* path, int& value)
{
  value = 0;

  if (!pxNode
      || (path && (pxNode = pxBTLVFindTag((struct BTLVNode*) pxNode, path)) == NULL)
      || pxNode->uSize == 0)
  {
    return false;
  }

  value = (pxNode->pucData[0] & 0x80) ? ~0 : 0;

  for (unsigned i = 0; i < pxNode->uSize; i++)
  {
    value = value << 8 | pxNode->pucData[i];
  }

  return true;
};

bool extractUnsigned(const struct BTLVNode* pxNode, const char* path, unsigned& value)
{
  value = 0;

  if (!pxNode
      || (path && (pxNode = pxBTLVFindTag((struct BTLVNode*) pxNode, path)) == NULL)
      || pxNode->uSize == 0)
  {
    return false;
  }

  for (unsigned i = 0; i < pxNode->uSize; i++)
  {
    value = value << 8 | pxNode->pucData[i];
  }

  return true;
};
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
