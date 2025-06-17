---
title: sdi/src/prt.cpp

---

# sdi/src/prt.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[prt_init](prt_8cpp.md#function-prt-init)**() |
| unsigned | **[get_unsigned](prt_8cpp.md#function-get-unsigned)**(void * buffer, int size) |
| void | **[PRT_setProperty](prt_8cpp.md#function-prt-setproperty)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[PRT_getProperty](prt_8cpp.md#function-prt-getproperty)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[PRT_HTML](prt_8cpp.md#function-prt-html)**(unsigned short msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[PRT_BITMAP](prt_8cpp.md#function-prt-bitmap)**(unsigned short msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |
| void | **[handlePrt](prt_8cpp.md#function-handleprt)**(unsigned short msgBufSize, unsigned char * msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| pthread_mutex_t | **[mutex](prt_8cpp.md#variable-mutex)**  |


## Functions Documentation

### function prt_init

```cpp
static void prt_init()
```


### function get_unsigned

```cpp
static unsigned get_unsigned(
    void * buffer,
    int size
)
```


### function PRT_setProperty

```cpp
void PRT_setProperty(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Set Printer Property 


### function PRT_getProperty

```cpp
void PRT_getProperty(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned short msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Get Printer Property 


### function PRT_HTML

```cpp
static void PRT_HTML(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned long msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Print HTML 


### function PRT_BITMAP

```cpp
static void PRT_BITMAP(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned long msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


Print BITMAP 


### function handlePrt

```cpp
void handlePrt(
    unsigned short msgBufSize,
    unsigned char * msg,
    unsigned long msgSize,
    unsigned short rspBufSize,
    unsigned char * rsp,
    unsigned short * rspSize
)
```


**Parameters**: 

  * **msgBufSize** size of the input message buffer 
  * **msg** pointer to the input message buffer 
  * **msgSize** size of the input message 
  * **rspBufSize** maximum size of the response buffer 
  * **rsp** pointer to the response buffer 
  * **rspSize** pointer to the response message size 


**Note**: [handlePrt()](sdi_2src_2prt_8h.md#function-handleprt) is always executed, even if invoked by a side command. Therefore, this function has no return value, see also [process_side_command()](main_8cpp.md#function-process-side-command). 

Dispatch function to handle different printer commands 



## Attributes Documentation

### variable mutex

```cpp
static pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
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
#include <map>
#include <string>
#include "_logf.h"
#include "sys.h"
#include "prt.h"
#include "prt_bitmap.h"
#include "html/scriptproc.h"
#include "html/jsproc.h"
#include "html/prt.h"
#ifdef __ANDROID__
  #include "sdi-pal.h"
  #include <pal/printer.h>
#endif
#include "btlv_helper.h"
#include "sdi_tags.h"
#include "pthreadutil.h"

#include "common/respVal.h"

#include <netinet/in.h>


using namespace std;
using namespace vfiprt;

// mutex protecting PRT functions
static pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

static void prt_init()
{
  /* prt_init() is invoked at begin of every function using PRT properties.
   * Since PWM-2042 must support parallel access of printer interface
   * provided for multiple connections. So if not done for this
   * thread, we have to activate thread local properties so that
   * every connections uses its own printer properties. */
  prtSetLocalProperties(true);

  static bool init = false;

  if (!init)
  {
    htmlSetScriptProcessor("js", js::jsProcessorExt, 0);
    init = true;
  }
}

static unsigned get_unsigned(void *buffer, int size)
{
  unsigned char *buf = (unsigned char *)buffer;
  unsigned r = 0;

  while (size--)
  {
    r = (r << 8 | *buf++);
  }

  return r;
}

void PRT_setProperty(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;
  int             property = 0;
  int             valueInt = 0;
  int             ret = PRT_OK;
  std::string     valueString;

  (void) msgBufSize;

  prt_init();

  if (msgSize > 4 && iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    // Determine the Property
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC01_PROPERTY_ID))) != NULL)
    {
      if (node->uSize > sizeof(property))
      {
        _LOGF_ERROR("prtSetProperty: Tag DFBC01 has wrong length");
        rsp[0] = 0x63;
        rsp[1] = 0x00;
        *rspSize = 2;
        ret = PRT_FAIL;
      }
      else
      {
        unsigned int i;

        for (i = 0; i < node->uSize; i++)
        {
          if (i > 0)
          {
            property = property << 8;
          }

          property += node->pucData[i];
        }

        // Determine the Value
        if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC02_PROPERTY_VALUE))) != NULL)
        {
          if (msg[3] == 0x00) // Property to set is an int
          {
            if (node->uSize > sizeof(valueInt))
            {
              _LOGF_ERROR("prtSetProperty: Tag DFBC02 has wrong length");
              rsp[0] = 0x63;
              rsp[1] = 0x00;
              *rspSize = 2;
              ret = PRT_FAIL;
            }
            else
            {
              for (i = 0; i < node->uSize; i++)
              {
                if (i > 0)
                {
                  valueInt = valueInt << 8;
                }

                valueInt += node->pucData[i];
              }
            }
          }
          else // Property to set is a string
          {
            valueString.assign((char *)node->pucData, node->uSize);
          }
        }
        else
        {
          _LOGF_ERROR("prtSetProperty: Tag DFBC02 not available");
          rsp[0] = 0x62;
          rsp[1] = 0x00;
          *rspSize = 2;
          ret = PRT_FAIL;
        }
      }
    }
    else
    {
      _LOGF_ERROR("prtSetProperty: Tag DFBC01 not available");
      rsp[0] = 0x62;
      rsp[1] = 0x00;
      *rspSize = 2;
      ret = PRT_FAIL;
    }

    vBTLVClear(&xBtlv);
  }
  else
  {
    _LOGF_ERROR("prtSetProperty: No TLV data available");
    rsp[0] = 0x62;
    rsp[1] = 0x00;
    *rspSize = 2;
    ret = PRT_FAIL;
  }

  if (ret == PRT_OK)
  {
    int size = 0;
    int result = RESULT_FAIL;

    if (msg[3] == 0x00) // Property to set is an int
    {
      _LOGF_INFO("%s %d%s %d", "prtSetProperty: Property =", property, ", Value =", valueInt);

#ifdef __ANDROID__

      if (property == PRT_PROP_CONTRAST)
      {
        palPrtSetContrast(valueInt);
      }

#endif

      ret = prtSetPropertyInt((PrtPropertyInt)property, valueInt);

      if (ret == PRT_OK)
      {
        result = RESULT_OK;
      }
      else
      {
        _LOGF_ERROR("%s %d", "prtSetPropertyInt: Failed: ", ret);
        result = common::appendRespVal(ret, rspBufSize - 2, &rsp[2], &size);
      }
    }
    else // Property to set is a string
    {
      _LOGF_ERROR("%s %d%s %s", "prtSetProperty: Property =", property, ", Value =", valueString.c_str());

      ret = prtSetPropertyString((PrtPropertyString)property, valueString);

      if (ret == PRT_OK)
      {
        result = RESULT_OK;
      }
      else
      {
        _LOGF_ERROR("%s %d", "prtSetPropertyString: Failed: ", ret);
        result = common::appendRespVal(ret, rspBufSize - 2, &rsp[2], &size);
      }
    }

    if (rspBufSize >= 2)
    {
      setSW1SW2(result, rsp);

      *rspSize = 2 + size;
    }
  }
}

void PRT_getProperty(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;
  int             property = 0;
  int             valueInt = 0;
  std::string     valueString;
  int             ret = PRT_OK;
  unsigned int    i;

  (void) msgBufSize;

  prt_init();

  if (msgSize > 4 && iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    // Determine the Property
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC01_PROPERTY_ID))) != NULL)
    {
      if (node->uSize > sizeof(property))
      {
        _LOGF_ERROR("prtGetProperty: Tag DFBC01 has wrong length");
        rsp[0] = 0x63;
        rsp[1] = 0x00;
        *rspSize = 2;
        ret = PRT_FAIL;
      }
      else
      {
        for (i = 0; i < node->uSize; i++)
        {
          if (i > 0)
          {
            property = property << 8;
          }

          property += node->pucData[i];
        }
      }
    }
    else
    {
      _LOGF_ERROR("prtGetProperty: Tag DFBC01 not available");
      rsp[0] = 0x62;
      rsp[1] = 0x00;
      *rspSize = 2;
      ret = PRT_FAIL;
    }
  }
  else
  {
    _LOGF_ERROR("prtGetProperty: No TLV data available");
    rsp[0] = 0x62;
    rsp[1] = 0x00;
    *rspSize = 2;
    ret = PRT_FAIL;
  }

  if (ret == PRT_OK)
  {
    int size = 0;
    int result = RESULT_FAIL;

    if (msg[3] == 0x00) // Property to get is an int
    {
      ret = prtGetPropertyInt((PrtPropertyInt)property, &valueInt);

      if (ret == PRT_OK)
      {
        result = RESULT_OK;
      }
      else
      {
        _LOGF_ERROR("%s %d %s %d", "prtGetProperty: Get Int failed: ", ret, ", Property =", property);
        result = common::appendRespVal(ret, rspBufSize - 2, &rsp[2], &size);
      }
    }
    else // Property to get is a string
    {
      ret = prtGetPropertyString((PrtPropertyString)property, valueString);

      if (ret == PRT_OK)
      {
        result = RESULT_OK;
      }
      else
      {
        _LOGF_ERROR("%s %d %s %d", "prtGetProperty: Get String failed: ", ret, ", Property =", property);
        result = common::appendRespVal(ret, rspBufSize - 2, &rsp[2], &size);
      }
    }

    if (rspBufSize >= 2)
    {
      setSW1SW2(result, rsp);

      *rspSize = 2 + size;
    }
  }

  if (ret == PRT_OK)
  {
    _LOGF_INFO("%s %d", "prtGetProperty: Property =", property);

    vBTLVClear(&xBtlv);

    i = 3; // To avoid 4 byte Tag if property is zero

    if (property != 0x00000000)
    {
      // Determine the leading zero bytes
      for (i = 0; i < sizeof(property); i++)
      {
        if ((property & 0xFF000000) == 0x00000000)
        {
          property = property << 8;
        }
        else
        {
          break;
        }
      }
    }

    property = htonl(property);

    // Write the property without leading zero bytes to the TLV stucture
    if (pxBTLVWriteTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC01_PROPERTY_ID), (unsigned char *)&property, sizeof(property) - i) != NULL)
    {
      int size;

      if (msg[3] == 0x00) // Property to get is an int
      {
        i = 3; // To avoid 4 byte Tag if valueInt is zero

        if (valueInt != 0x00000000)
        {
          // Determine the leading zero bytes
          for (i = 0; i < sizeof(valueInt); i++)
          {
            if ((valueInt & 0xFF000000) == 0x00000000)
            {
              valueInt = valueInt << 8;
            }
            else
            {
              break;
            }
          }
        }

        valueInt = htonl(valueInt);

        // Write the int value without leading zero bytes to the TLV structure and build the response
        if (pxBTLVWriteTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC02_PROPERTY_VALUE), (unsigned char *)&valueInt, sizeof(valueInt) - i) != NULL &&
            (size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) > 0)
        {
          rsp[0] = 0x90;
          rsp[1] = 0x00;
          *rspSize = 2 + size;
        }
        else
        {
          _LOGF_ERROR("prtGetProperty: Write/Export Int Error");
          rsp[0] = 0x64;
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
      else // Property to get is a string
      {
        // Write the string value to the TLV structure and build the response
        if (pxBTLVWriteTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFBC02_PROPERTY_VALUE), (unsigned char *)valueString.c_str(), valueString.size()) != NULL &&
            (size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) > 0)
        {
          rsp[0] = 0x90;
          rsp[1] = 0x00;
          *rspSize = 2 + size;
        }
        else
        {
          _LOGF_ERROR("prtGetProperty: Write/Export String Error");
          rsp[0] = 0x64;
          rsp[1] = 0x00;
          *rspSize = 2;
        }
      }
    }
    else
    {
      _LOGF_ERROR("prtGetProperty: Write Error");
      rsp[0] = 0x64;
      rsp[1] = 0x00;
      *rspSize = 2;
    }
  }
}

static void PRT_HTML(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  struct BTLVRootNode xBtlv;
  struct BTLVNode *node = NULL;
  int             ret = PRT_OK;
  std::string     htmlString;
  unsigned char   landscape = 0;

  (void) msgBufSize;

  prt_init();

  if (msgSize > 4 && iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    // Determine the html string
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA002_PRT_HTML))) != NULL)
    {
      htmlString.assign((char *)node->pucData, node->uSize);

      // Determine the optional landscape value
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA003_PRT_LANDSCAPE))) != NULL &&
          node->uSize == 1)
      {
        landscape = node->pucData[0];
      }
    }
    else
    {
      _LOGF_ERROR("prtHTML: Tag DFA002 not available");
      rsp[0] = 0x62;
      rsp[1] = 0x00;
      *rspSize = 2;
      ret = PRT_FAIL;
    }
  }
  else
  {
    _LOGF_ERROR("prtHTML: No TLV data available");
    rsp[0] = 0x62;
    rsp[1] = 0x00;
    *rspSize = 2;
    ret = PRT_FAIL;
  }

  if (ret == PRT_OK)
  {
    int size = 0;
    int result = RESULT_FAIL;

#ifdef __ANDROID__
    int vatsRet = 0;

    _LOGF_INFO("VATS: ANDROID: prt.cpp: PRT_HTML: htmlString.size()=%d", htmlString.size());
    vatsRet = palVatsPrintingHtml((int)landscape, htmlString.size(), (char*) htmlString.c_str());   // new function in sdi-pal.cpp
    // vatsRet = 0: VATS is disabled: print handling as usual
    // vatsRet = 1: VATS is enabled : send bitmap via VATS Handler towards VATS PC (no physical printing)
    // vatsRet = 2: VATS is enabled : send bitmap via VATS Handler towards VATS PC + physical printing
    _LOGF_INFO("VATS: ANDROID: prt.cpp: PRT_HTML: vatsRet=%d", vatsRet);

    if ((vatsRet == 0) || (vatsRet == 2))
    {
      ret = prtHTML(htmlString, landscape);
    }

#else
    ret = prtHTML(htmlString, landscape);
#endif

    if (ret == PRT_OK)
    {
      result = RESULT_OK;
    }
    else
    {
      _LOGF_ERROR("%s %d", "prtHTML: Failed: ", ret);
      result = common::appendRespVal(ret, rspBufSize - 2, &rsp[2], &size);
    }

    if (rspBufSize >= 2)
    {
      setSW1SW2(result, rsp);

      *rspSize = 2 + size;
    }
  }
}

#if 0

static void PRT_URL(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  struct BTLVRootNode xBtlv;
  int             ret = PRT_OK;
  std::string     url;
  unsigned char   landscape = 0;

  (void) msgBufSize;
  (void) rspBufSize;

  if (msgSize > 4 && iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    struct BTLVNode *node = NULL;

    // Determine the URL string
    if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA004_PRT_URL))) != NULL)
    {
      url.assign((char *)node->pucData, node->uSize);

      // Determine the optional landscape value
      if ((node = pxBTLVFindTag(&xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA003_PRT_LANDSCAPE))) != NULL &&
          node->uSize == 1)
      {
        landscape = node->pucData[0];
      }
    }
    else
    {
      _LOGF_ERROR("PRT_URL: Tag DFA002 not available");
      rsp[0] = 0x62;
      rsp[1] = 0x00;
      *rspSize = 2;
      ret = PRT_FAIL;
    }
  }
  else
  {
    _LOGF_ERROR("PRT_URL: No TLV data available");
    rsp[0] = 0x62;
    rsp[1] = 0x00;
    *rspSize = 2;
    ret = PRT_FAIL;
  }

  if (ret == PRT_OK)
  {
    int size = 0;
    int result = RESULT_FAIL;

    ret = prtURL(url, landscape);

    if (ret == PRT_OK)
    {
      result = RESULT_OK;
    }
    else
    {
      _LOGF_ERROR("%s %d", "PRT_URL: Failed: ", ret);
      result = appendAddPrtRespVal(&xBtlv, node, ret, rspBufSize - 2, &rsp[2], &size);
    }

    if (rspBufSize >= 2)
    {
      setSW1SW2(result, rsp);

      *rspSize = 2 + size;
    }
  }
}
#endif

static void PRT_BITMAP(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;

  int ret = PRT_FAIL;
  struct BTLVRootNode root;
  struct BTLVNode *node = NULL;

  if (msgSize > 4 && iBTLVImport(&root, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    int width = -1, height = -1, size = -1;
    void *data = 0;

    if ((node = pxBTLVFindTag(&root, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA031_PRT_BMP_WIDTH))) != 0)
    {
      width = (int)get_unsigned(node->pucData, node->uSize);
    }

    if ((node = pxBTLVFindTag(&root, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA032_PRT_BMP_HEIGHT))) != 0)
    {
      height = (int)get_unsigned(node->pucData, node->uSize);
    }

    if ((node = pxBTLVFindTag(&root, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA030_PRT_BMP_DATA))) != 0)
    {
      data = node->pucData;
      size = (int)node->uSize;
    }

    if (width > 0 && height > 0 && size == (width + 7) / 8 * height)
    {
      ret = print_bitmap(width, height, data);
    }
    else
    {
      _LOGF_ERROR("prtBitmap: Invalid data width=%d height=%d size=%d\n", width, height, size);
    }
  }

  int size = 0;
  int result = RESULT_FAIL;

  if (ret == PRT_OK)
  {
    result = RESULT_OK;
  }
  else
  {
    _LOGF_ERROR("%s %d", "prtBitmap: Failed: ", ret);
    result = common::appendRespVal(ret, rspBufSize - 2, &rsp[2], &size);
  }

  if (rspBufSize >= 2)
  {
    setSW1SW2(result, rsp);
    *rspSize = 2 + size;
  }
}


void handlePrt(unsigned short msgBufSize, unsigned char *msg, unsigned long msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  // clear the response buffer
  memset(rsp, 0x00, rspBufSize);

  switch (msg[1])
  {
    case INS_PRT_SET_PROPERTY:
    {
      /* PRT_setProperty works thread local, therefore, we could access
       * it from multiple connection threads at the same time. But some
       * properties are set remotely in prtserver, which will lead to PRT_BUSY
       * while the server is printing. Therefore, we use the printer mutex, too. */
      MutexLock m(&mutex);
      PRT_setProperty(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_PRT_GET_PROPERTY:
    {
      /* PRT_getProperty works thread local, therefore, we could access
       * it from multiple connection threads at the same time. But some
       * properties are read remotely in prtserver, which will lead to PRT_BUSY
       * while the server is printing. Therefore, we use the printer mutex, too. */
      MutexLock m(&mutex);
      PRT_getProperty(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    case INS_PRT_HTML:
    {
      // only one connection thread can use printer at the same time
      MutexLock m(&mutex);
      PRT_HTML(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

#if 0

    case INS_PRT_URL:
    {
      // only one connection thread can use printer at the same time
      MutexLock m(&mutex);
      PRT_URL(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

#endif

    case INS_PRT_BITMAP:
    {
      // only one connection thread can use printer at the same time
      MutexLock m(&mutex);
      PRT_BITMAP(msgBufSize, msg, msgSize, rspBufSize, rsp, rspSize);
      break;
    }

    default:
    {
      // unknown INS
      rsp[0] = 0x6D;
      rsp[1] = 0x00;
      *rspSize = 2;
    }
  }

}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
