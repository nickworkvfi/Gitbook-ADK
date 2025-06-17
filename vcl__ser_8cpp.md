---
title: sdi/src/vcl_ser.cpp

---

# sdi/src/vcl_ser.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[vcl_registart_sred](vcl__ser_8cpp.md#function-vcl-registart-sred)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv) |
| int | **[vcl_status](vcl__ser_8cpp.md#function-vcl-status)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv) |
| int | **[vcl_advance_ddk](vcl__ser_8cpp.md#function-vcl-advance-ddk)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv) |
| int | **[vcl_derive_query](vcl__ser_8cpp.md#function-vcl-derive-query)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv) |
| int | **[vcl_diag_query](vcl__ser_8cpp.md#function-vcl-diag-query)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv) |
| int | **[vcl_override_msg_query](vcl__ser_8cpp.md#function-vcl-override-msg-query)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv) |
| int | **[vcl_ksn_request](vcl__ser_8cpp.md#function-vcl-ksn-request)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv) |
| int | **[vcl_eParms](vcl__ser_8cpp.md#function-vcl-eparms)**(struct [BTLVNode](struct_b_t_l_v_node.md) * xBtlv) |
| void | **[handleVcl](vcl__ser_8cpp.md#function-handlevcl)**(unsigned short msgBufSize, unsigned char * msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char * rsp, unsigned short * rspSize) |


## Functions Documentation

### function vcl_registart_sred

```cpp
static int vcl_registart_sred(
    struct BTLVNode * xBtlv
)
```


**Parameters**: 

  * **xBtlv** pointer to BTLV node to return track data 


Turn on VCL encryption in SRED mode 


### function vcl_status

```cpp
static int vcl_status(
    struct BTLVNode * xBtlv
)
```


**Parameters**: 

  * **xBtlv** pointer to BTLV node to return status information 


Get the current status of VCL 


### function vcl_advance_ddk

```cpp
static int vcl_advance_ddk(
    struct BTLVNode * xBtlv
)
```


Instruct VCL to use next derived key 


### function vcl_derive_query

```cpp
static int vcl_derive_query(
    struct BTLVNode * xBtlv
)
```


### function vcl_diag_query

```cpp
static int vcl_diag_query(
    struct BTLVNode * xBtlv
)
```


### function vcl_override_msg_query

```cpp
static int vcl_override_msg_query(
    struct BTLVNode * xBtlv
)
```


Instruct VCL to use next derived key 


### function vcl_ksn_request

```cpp
static int vcl_ksn_request(
    struct BTLVNode * xBtlv
)
```


Instruct VCL to get a KSN 


### function vcl_eParms

```cpp
static int vcl_eParms(
    struct BTLVNode * xBtlv
)
```


**Parameters**: 

  * **xBtlv** pointer to BTLV node to return status information 


Get the eParms from VCL 


### function handleVcl

```cpp
void handleVcl(
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


Dispatch function to handle different VCL commands 




## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#include <stdio.h>


#include "btlv_helper.h"
#include "sdi_tags.h"
#include "vcl_client.h"
#include "vcl_ser.h"
#include "data.h" // csd only?
#include "_logf.h"
#include "sys.h"
#include <emv/btlv.h>

#include <netinet/in.h>

static int vcl_registart_sred(struct BTLVNode *xBtlv)
{
  int result = RESULT_FAIL;
  csd::csd_data track1;
  csd::csd_data track2;
  csd::csd_data track3;
  unsigned long status = 0;

  vBTLVClear(xBtlv);

  if (VCL_RegistartSRED(track1, track2, track3, &status))
  {
    struct BTLVNode *node = NULL;

    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (status != 0)
    {
      status = htonl(status);

      // Append Tag for additional error information
      pxBTLVAppendTag(node, SDI_TAG_DFA000_ADDITIONAL_RESULT_VALUE, (unsigned char *)&status, sizeof(status));
    }
    else
    {
      if (track1.size() > 0)
      {
        // Append Track1 data
        pxBTLVAppendTag(node, SDI_TAG_DFA133_VCL_TRACK1, &track1[0], track1.size());
      }

      if (track2.size() > 0)
      {
        // Append Track2 data
        pxBTLVAppendTag(node, SDI_TAG_DFA134_VCL_TRACK2, &track2[0], track2.size());
      }

      if (track3.size() > 0)
      {
        // Append Track3 data
        pxBTLVAppendTag(node, SDI_TAG_DFA135_VCL_TRACK3, &track3[0], track3.size());
      }

      result = RESULT_OK;
    }
  }
  else
  {
    _LOGF_ERROR("VCL_RegistartSRED: error detected");
  }

  return result;
}


static int vcl_status(struct BTLVNode *xBtlv)
{
  int result = RESULT_FAIL;
  csd::csd_data status;

  vBTLVClear(xBtlv);

  if (VCL_Status(status))
  {
    struct BTLVNode *node = NULL;

    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (status.size() > 0)
    {
      // Append Status
      pxBTLVAppendTag(node, SDI_TAG_DFA136_VCL_STATUS, &status[0], status.size());
    }

    result = RESULT_OK;
  }
  else
  {
    _LOGF_ERROR("VCL_Status: error detected");
  }

  return result;
}

static int vcl_advance_ddk(struct BTLVNode *xBtlv)
{
  int result = RESULT_FAIL;
  csd::csd_data track1;
  csd::csd_data track2;
  csd::csd_data track3;
  unsigned long status = 0;

  vBTLVClear(xBtlv);

  if (VCL_AdvanceDDK(track1, track2, track3, &status))
  {
    struct BTLVNode *node = NULL;

    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (status != 0)
    {
      status = htonl(status);

      // Append Tag for additional error information
      pxBTLVAppendTag(node, SDI_TAG_DFA000_ADDITIONAL_RESULT_VALUE, (unsigned char *)&status, sizeof(status));
    }
    else
    {
      if (track1.size() > 0)
      {
        // Append Track1 data
        pxBTLVAppendTag(node, SDI_TAG_DFA133_VCL_TRACK1, &track1[0], track1.size());
      }

      if (track2.size() > 0)
      {
        // Append Track2 data
        pxBTLVAppendTag(node, SDI_TAG_DFA134_VCL_TRACK2, &track2[0], track2.size());
      }

      if (track3.size() > 0)
      {
        // Append Track3 data
        pxBTLVAppendTag(node, SDI_TAG_DFA135_VCL_TRACK3, &track3[0], track3.size());
      }

      result = RESULT_OK;
    }
  }
  else
  {
    _LOGF_ERROR("vcl_advance_ddk: error detected");
  }

  return result;
}

static int vcl_derive_query(struct BTLVNode *xBtlv)
{
  int result = RESULT_FAIL;
  unsigned long status = 0;
  csd::csd_data deriveQuery;

  _LOGF_INFO("vcl_derive_query");

  vBTLVClear(xBtlv);

  if (VCL_Derive_Query(deriveQuery, &status))
  {
    struct BTLVNode *node = NULL;

    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (status != 0)
    {
      status = htonl(status);

      // Append Tag for additional error information
      pxBTLVAppendTag(node, SDI_TAG_DFA000_ADDITIONAL_RESULT_VALUE, (unsigned char *)&status, sizeof(status));
    }
    else
    {
      if (deriveQuery.size() > 0)
      {
        // Append derive query results
        pxBTLVAppendTag(node, SDI_TAG_DFA152_VCL_DERIVE_RESULT, &deriveQuery[0], deriveQuery.size());
      }

      result = RESULT_OK;
    }
  }
  else
  {
    _LOGF_ERROR("vcl_derive_query: error detected");
  }

  return result;
}

static int vcl_diag_query(struct BTLVNode *xBtlv)
{
  int result = RESULT_FAIL;

  csd::csd_data diagQuery;
  unsigned long status = 0;

  unsigned char format = 0;
  unsigned char number = 0;
  // extract output format
  struct BTLVNode *outputFormat = pxBTLVFindTag(xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA146_VCL_DQ_OUTPUT_FORMAT));

  if (outputFormat)
  {
    format = outputFormat->pucData[0];
  }

  // extract page number
  struct BTLVNode *pageNumber = pxBTLVFindTag(xBtlv, NESTED_TAG(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, SDI_TAG_DFA147_VCL_DQ_PAGE_NUMBER));

  if (pageNumber)
  {
    number = pageNumber->pucData[0];
  }

  vBTLVClear(xBtlv);

  if (VCL_Diag_Query(diagQuery, format, number, &status))
  {
    struct BTLVNode *node = NULL;

    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (status != 0)
    {
      status = htonl(status);

      // Append Tag for additional error information
      pxBTLVAppendTag(node, SDI_TAG_DFA000_ADDITIONAL_RESULT_VALUE, (unsigned char *)&status, sizeof(status));
    }
    else
    {
      if (diagQuery.size() > 0)
      {
        // Append diag query raw data
        pxBTLVAppendTag(node, SDI_TAG_DFA145_VCL_DQ_RESULT, &diagQuery[0], diagQuery.size());
      }

      result = RESULT_OK;
    }
  }
  else
  {
    _LOGF_ERROR("vcl_diag_query: error detected");
  }

  return result;
}


static int vcl_override_msg_query(struct BTLVNode *xBtlv)
{
  int result = RESULT_FAIL;
  csd::csd_data track1;
  csd::csd_data track2;
  csd::csd_data track3;
  unsigned long status = 0;

  vBTLVClear(xBtlv);

  if (VCL_Override_Msg_Query(track1, track2, track3, &status))
  {
    struct BTLVNode *node = NULL;

    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (status != 0)
    {
      status = htonl(status);

      // Append Tag for additional error information
      pxBTLVAppendTag(node, SDI_TAG_DFA000_ADDITIONAL_RESULT_VALUE, (unsigned char *)&status, sizeof(status));
    }
    else
    {
      if (track1.size() > 0)
      {
        // Append Track1 data
        pxBTLVAppendTag(node, SDI_TAG_DFA133_VCL_TRACK1, &track1[0], track1.size());
      }

      if (track2.size() > 0)
      {
        // Append Track2 data
        pxBTLVAppendTag(node, SDI_TAG_DFA134_VCL_TRACK2, &track2[0], track2.size());
      }

      if (track3.size() > 0)
      {
        // Append Track3 data
        pxBTLVAppendTag(node, SDI_TAG_DFA135_VCL_TRACK3, &track3[0], track3.size());
      }

      result = RESULT_OK;
    }
  }
  else
  {
    _LOGF_ERROR("vcl_override_msg_query: error detected");
  }

  return result;
}


static int vcl_ksn_request(struct BTLVNode *xBtlv)
{
  int result = RESULT_FAIL;
  csd::csd_data ksn;
  unsigned char status = 0;

  vBTLVClear(xBtlv);

  if (VCL_Ksn_Request(ksn, &status))
  {
    struct BTLVNode *node = NULL;

    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (status == 0)
    {
      status = htonl(status);

      // Append Tag for additional error information
      pxBTLVAppendTag(node, SDI_TAG_DFA000_ADDITIONAL_RESULT_VALUE, (unsigned char *)&status, sizeof(status));
    }
    else
    {
      // Append KSN
      pxBTLVAppendTag(node, SDI_TAG_DFA157_VCL_KSN, &ksn[0], ksn.size());

      result = RESULT_OK;
    }
  }
  else
  {
    _LOGF_ERROR("%s: error detected", __FUNCTION__);
  }

  return result;
}


#ifdef _VOS3

static int vcl_kmailin_request(struct BTLVNode *xBtlv)
{
  int result = RESULT_FAIL;

  unsigned long status = 0;

  vBTLVClear(xBtlv);

  if (VCL_KMailIn_Request(&status))
  {
    struct BTLVNode *node = NULL;

    _LOGF_ERROR("%s: status = %lu", __FUNCTION__, status);

    if (status != 0)
    {
      status = htonl(status);

      node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

      // Append Tag for additional error information
      pxBTLVAppendTag(node, SDI_TAG_DFA000_ADDITIONAL_RESULT_VALUE, (unsigned char *)&status, sizeof(status));
    }
    else
    {
      result = RESULT_OK;
    }
  }
  else
  {
    _LOGF_ERROR("%s: error detected", __FUNCTION__);
  }

  return result;
}
#endif // _VOS3

#ifndef __ANDROID__

static int vcl_eParms(struct BTLVNode *xBtlv)
{
  int result = RESULT_FAIL;
  csd::csd_data eParms;
  unsigned char status = 0;

  vBTLVClear(xBtlv);

  if (VCL_EParms(eParms, &status))
  {
    struct BTLVNode *node = NULL;

    node = pxBTLVAppendTag(xBtlv, SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, NULL, 0);

    if (status != 0)
    {
      status = htonl(status);

      // Append Tag for additional error information
      pxBTLVAppendTag(node, SDI_TAG_DFA000_ADDITIONAL_RESULT_VALUE, (unsigned char *)&status, sizeof(status));
    }
    else
    {
      if (eParms.size() > 0)
      {
        // Append eParms
        pxBTLVAppendTag(node, SDI_TAG_DFA137_VCL_EPARMS, &eParms[0], eParms.size());
      }
    }

    result = RESULT_OK;
  }
  else
  {
    _LOGF_ERROR("VCL_eParms: error detected");
  }

  return result;
}
#endif // ! __ANDROID__


//**************************************
//* handleVCLCmd                    *
//* documentation see vcl_ser.h        *
//**************************************
void handleVcl(unsigned short msgBufSize, unsigned char *msg, unsigned short msgSize, unsigned short rspBufSize, unsigned char *rsp, unsigned short *rspSize)
{
  (void) msgBufSize;
  int result = RESULT_FAIL;
  struct BTLVRootNode xBtlv;
  int size = 0;

  if (rsp == NULL || rspSize == NULL)
  {
    return;
  }

  // clear the response buffer
  memset(rsp, 0x00, rspBufSize);

  // Extract the necessary input parameter/data from the BERTLV message buffer
  if (iBTLVImport(&xBtlv, &msg[4], msgSize - 4, NULL, NULL) == 0)
  {
    switch (msg[1])
    {
      case INS_VCL_MSG_REGISTART_SRED_REQ:
      {
        result = vcl_registart_sred(&xBtlv);
        break;
      }

      case INS_VCL_MSG_STATUS_REQUEST:
      {
        result = vcl_status(&xBtlv);
        break;
      }

      case INS_VCL_MSG_ADVANCE_DDK:
      {
        result = vcl_advance_ddk(&xBtlv);
        break;
      }

      case INS_VCL_MSG_EPARMS_REQUEST:
      {
#ifdef __ANDROID__ //TODO: EPARMS workaround for Trinity
        _LOGF_WARN("%s: EPARMS request always returned with success, have to changed after implmentation is available", __FUNCTION__);

        rsp[0] = 0x90;
        rsp[1] = 0x00;
        *rspSize = 2;
        return;
#else
        result = vcl_eParms(&xBtlv);
        break;
#endif
      }

      case INS_VCL_MSG_DIAG_QUERY:
      {
        result = vcl_diag_query(&xBtlv);
        break;
      }

      case INS_VCL_MSG_DERIV_QUERY:
      {
        result = vcl_derive_query(&xBtlv);
        break;
      }

      case INS_VCL_MSG_OVERRIDE_MSG_QUERY:
      {
        result = vcl_override_msg_query(&xBtlv);
        break;
      }

      case INS_VCL_MSG_KSN_REQ:
      {
        result = vcl_ksn_request(&xBtlv);
        break;
      }

#ifdef _VOS3

      case INS_VCL_MSG_KMAILIN_REQUEST:
      {
        result = vcl_kmailin_request(&xBtlv);
        break;
      }

#endif

      default:
      {
        // unknown INS
        rsp[0] = 0x6D;
        rsp[1] = 0x00;
        *rspSize = 2;
        return;
      }
    }
  }

  if ((size = iBTLVExport(&xBtlv, &rsp[2], rspBufSize - 2)) < 0)
  {
    size = 0;
  }

  if (rspBufSize >= 2)
  {
    setSW1SW2(result, rsp);

    *rspSize = 2 + size;
  }
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
