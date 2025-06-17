---
title: sdi/src/tracefilter.cpp

---

# sdi/src/tracefilter.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[filterCommand](tracefilter_8cpp.md#function-filtercommand)**(const unsigned char * cmd, unsigned cmdSize, std::string & out) |
| void | **[filterSensitiveTemplate](tracefilter_8cpp.md#function-filtersensitivetemplate)**(BERTLV & tlv, SensitiveTags & st, const char * tec) |
| void | **[filterResponse](tracefilter_8cpp.md#function-filterresponse)**(const unsigned char * cmd, unsigned cmdSize, const unsigned char * rsp, unsigned rspSize, std::string & out) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TRACE_FILTER](tracefilter_8cpp.md#define-trace-filter)**  |
|  | **[MAX_TRACE_MSG_SIZE](tracefilter_8cpp.md#define-max-trace-msg-size)**  |
|  | **[BIN2HEXSTRING](tracefilter_8cpp.md#define-bin2hexstring)**(str, buf, size)  |


## Functions Documentation

### function filterCommand

```cpp
void filterCommand(
    const unsigned char * cmd,
    unsigned cmdSize,
    std::string & out
)
```


**Parameters**: 

  * **cmd** pointer to SDI command buffer (starting wich class/instruction) 
  * **cmdSize** size of command data in buffer _cmd_
  * **out** hexdump of SDI command as STL string 


**Note**: The size of the hexdump is basically limited by MAX_TRACE_MSG_SIZE in [tracefilter.cpp](tracefilter_8cpp.md#file-tracefilter.cpp). 

Prepare and SDI command for trace and return a hexdump as STL string for it. For release build variants of SDI a trace filter is applied to command data to wipe out values of TLV tags containing sensitive data. For debug build variant the trace filter is disabled by default (use -DTRACE_FILTER to activate). 


### function filterSensitiveTemplate

```cpp
static void filterSensitiveTemplate(
    BERTLV & tlv,
    SensitiveTags & st,
    const char * tec
)
```


### function filterResponse

```cpp
void filterResponse(
    const unsigned char * cmd,
    unsigned cmdSize,
    const unsigned char * rsp,
    unsigned rspSize,
    std::string & out
)
```


**Parameters**: 

  * **cmd** pointer to SDI command buffer (starting wich class/instruction) 
  * **cmdSize** size of command data in buffer _cmd_
  * **rsp** pointer to SDI response buffer (starting wich class/instruction) 
  * **rspSize** size of response data in buffer _rsp_
  * **out** hexdump of SDI response as STL string 


**Note**: The size of the hexdump is basically limited by MAX_TRACE_MSG_SIZE in [tracefilter.cpp](tracefilter_8cpp.md#file-tracefilter.cpp). 

Prepare and SDI response for trace and return a hexdump as STL string for it. For release build variants of SDI a trace filter is applied to response data to wipe out values of TLV tags containing sensitive data. For debug build variant the trace filter is disabled by default (use -DTRACE_FILTER to activate). 




## Macros Documentation

### define TRACE_FILTER

```cpp
#define TRACE_FILTER 
```


### define MAX_TRACE_MSG_SIZE

```cpp
#define MAX_TRACE_MSG_SIZE 4096
```


### define BIN2HEXSTRING

```cpp
#define BIN2HEXSTRING(
    str,
    buf,
    size
)
bintohexstring(str,buf,(size<=MAX_TRACE_MSG_SIZE?size:MAX_TRACE_MSG_SIZE))
```


## Source code

```cpp
#include "tracefilter.h"
#include "hexutil.h"

// separate _DEBUG from behavior to be able to debug the trace filter
// by compiler switch -DTRACE_FILTER for debug compilation
#ifndef _DEBUG
  #define TRACE_FILTER
#endif

// maximal put 4096 bytes of the message to trace
#define MAX_TRACE_MSG_SIZE 4096

// macro to create a hex dump in a STL string with the maximal message size limit for trace output
#define BIN2HEXSTRING(str,buf,size) bintohexstring(str,buf,(size<=MAX_TRACE_MSG_SIZE?size:MAX_TRACE_MSG_SIZE))

// DISABLED TRACE FILTER: only limit message size to MAX_TRACE_MSG_SIZE in trace
#ifndef TRACE_FILTER
using namespace std;
using namespace sdi;

void filterCommand(const unsigned char *cmd, unsigned cmdSize, std::string &out)
{
  out.clear();

  if (cmd && cmdSize > 0)
  {
    BIN2HEXSTRING(out, cmd, cmdSize);
  }
}

void filterResponse(const unsigned char *cmd, unsigned cmdSize, const unsigned char *rsp, unsigned rspSize, std::string &out)
{
  (void) cmd;
  (void) cmdSize;

  out.clear();

  if (rsp && rspSize > 0)
  {
    BIN2HEXSTRING(out, rsp, rspSize);
  }
}

// ENABLED TRACE FILTER: wipe sensitive data tags and limit message size to MAX_TRACE_MSG_SIZE in trace
#else

#include "bertlv/bertlv.h"
#include "sdi_tags.h"
#include "data.h"
#include "csd.h"
#include "epp/counterTop.h"
#include "filterconfig.h"
#include "filesystem.h"

using namespace std;
using namespace sdi;

void filterCommand(const unsigned char *cmd, unsigned cmdSize, std::string &out)
{
  out.clear();

  if (!cmd || cmdSize == 0)
  {
    return;
  }

  if (cmdSize <= 4)
  {
    BIN2HEXSTRING(out, cmd, cmdSize);
    return;
  }

  unsigned short ci = cmd[0] << 8 | cmd[1];

  if (((ci & 0xff00) == 0x2600) || // plugin command
      (ci == 0x2308 && vfiepm::CounterTop::getInstance().isEppMode())) // Provide Callback Response (EPP only)
  {
    BIN2HEXSTRING(out, cmd, 4); // concat to 4 bytes
    return;
  }
  else if ((ci == 0x2015 || ci == 0x7002 || ci == 0x7003) && cmdSize > 50)
  {
    // Prevent large HEX dumps in logs
    BIN2HEXSTRING(out, cmd, 50); // reduce to 50 bytes
    out.append("...");
    return;
  }

  // create command copy used for hexdump result below
  vector<unsigned char> cmdcpy(cmd, cmd + cmdSize);

  // now wipe the sensitive data in this copy
  BERTLV tlv(&cmdcpy[4], cmdcpy.size() - 4);
  BERTLV::Tag tag;

  // look up constructed TLV Tag F0
  if (tlv.findTag(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, tag) && tag.length() > 0)
  {
    tlv.assign(tag.data(), tag.length());

    // iterate over TLV Tags in F0
    for (BERTLV::iterator it = tlv.begin(); it != tlv.end(); ++it)
    {
      // Tag DFA120 App data (e.g. getEncData 29-00)
      if (it->name() == SDI_TAG_DFA120_OPTIONAL_APPLICATION_DATA && it->length() > 0)
      {
        csd::wipe(it->data(), it->length());
        continue;
      }

      // Tag FFA101/DFA120 Placeholder/App data (e.g. getEncMsgData 29-01, getMsgSignature 29-04)
      if (it->name() == SDI_TAG_FFA101_PLACEHOLDER_DATA && it->length() > 0)
      {
        BERTLV tlv_phd(it->data(), it->length());

        if (tlv_phd.findTag(SDI_TAG_DFA120_OPTIONAL_APPLICATION_DATA, tag) && tag.length() > 0)
        {
          csd::wipe(tag.data(), tag.length());
        }

        continue;
      }

      // Tag DFA126 Message data (e.g. getEncMsgData 29-01, getMsgSignature 29-04)
      if (it->name() == SDI_TAG_DFA126_MESSAGE_TEMPLATE && it->length() > 0)
      {
        csd::wipe(it->data(), it->length());
        continue;
      }

      // Tag DFA402 Plain text data (e.g. Crypto Encrypt 70-02)
      if (it->name() == SDI_TAG_DFA402_PLAINTEXT_DATA && it->length() > 0)
      {
        csd::wipe(it->data(), it->length());
        continue;
      }

      // Tag DFA407 Input data (e.g. Crypto Sign 70-04, Crypto Verify 70-05)
      if (it->name() == SDI_TAG_DFA407_INPUT_DATA && it->length() > 0)
      {
        csd::wipe(it->data(), it->length());
        continue;
      }
    }
  }

  // create/return hexdump of filtered data
  BIN2HEXSTRING(out, &cmdcpy[0], cmdcpy.size());
}

// helper function recursively digging into templates
static void filterSensitiveTemplate(BERTLV &tlv, SensitiveTags& st, const char* tec)
{
  for (BERTLV::iterator it = tlv.begin(); it != tlv.end(); ++it)
  {
    if (it->constructed())
    {
      BERTLV tlv2(it->data(), it->length());
      filterSensitiveTemplate(tlv2, st, tec);
      return;
    }

    if (it->length() > 0 && st.isSensitive(tec, it->name().c_str()))
    {
      csd::wipe(it->data(), it->length());
    }
  }
}

void filterResponse(const unsigned char *cmd, unsigned cmdSize, const unsigned char *rsp, unsigned rspSize, std::string &out)
{
  out.clear();

  if (!rsp || rspSize == 0)
  {
    return;
  }

  if (rspSize <= 2 || cmdSize < 2)
  {
    BIN2HEXSTRING(out, rsp, rspSize);
    return;
  }

  // response encrypted (P1)
  if (cmdSize >= 4 && (cmd[2] & 0x08))
  {
    // no trace filter required
    BIN2HEXSTRING(out, rsp, rspSize);
    return;
  }

  unsigned short ci = cmd[0] << 8 | cmd[1];

  if (((ci & 0xff00) == 0x2600) || // plugin command
      (vfiepm::CounterTop::getInstance().isEppMode())) // EPP only: restrict all responses
  {
    BIN2HEXSTRING(out, rsp, 2); // concat to 2 bytes
    return;
  }
  else if ((ci == 0x7002 || ci == 0x7003) && rspSize > 50)
  {
    // Prevent large HEX dumps in logs
    BIN2HEXSTRING(out, rsp, 50); // reduce to 50 bytes
    out.append("...");
    return;
  }

  // create response copy used for hexdump result below
  vector<unsigned char> rspcpy(rsp, rsp + rspSize);

  BERTLV tlv(&rspcpy[2], rspcpy.size() - 2);
  BERTLV::Tag tag;

  // look up constructed TLV Tag F0
  if (tlv.findTag(SDI_TAG_F0_CONSTRUCTED_MESSAGE_DATA, tag) && tag.length() > 0)
  {
    tlv.assign(tag.data(), tag.length());

    // fetchTrxTags (29-02): Wipe all tags declared by filter file as sensitive
    if (ci == 0x2902)
    {
      SensitiveTags st;
      char tec[12];
      getTechnology(tec, sizeof(tec));

      // Load the sensitive tags file
      string filename = sdi::filesystem::home_flash_file(SENSITIVE_TAGS_FILE);
      st.load(filename.c_str());
      filterSensitiveTemplate(tlv, st, tec);
    }

    // iterate over TLV Tags in F0
    for (BERTLV::iterator it = tlv.begin(); it != tlv.end(); ++it)
    {
      // Tag DFA101 Plugin response data (e.g. Card Detection 23-01, Poll Card Detection 23-04)
      if (it->name() == SDI_TAG_DFA101_PLUGIN_RESPONSE_DATA && it->length() > 0)
      {
        csd::wipe(it->data(), it->length());
        continue;
      }

      // Tag FFA107/DFA101 Multiple plugin response data (e.g. Card Detection 23-01, Poll Card Detection 23-04)
      if (it->name() == SDI_TAG_FFA107_MULTI_PLUGIN_RESPONSE && it->length() > 0)
      {
        BERTLV tlv_mpr(it->data(), it->length());

        if (tlv_mpr.findTag(SDI_TAG_DFA101_PLUGIN_RESPONSE_DATA, tag) && tag.length() > 0)
        {
          csd::wipe(tag.data(), tag.length());
        }

        continue;
      }

      // Tag DFA406 Decrypted data (e.g. Crypto Decrypt 70-03)
      if (it->name() == SDI_TAG_DFA406_DECRYPTED_DATA && it->length() > 0)
      {
        csd::wipe(it->data(), it->length());
        continue;
      }
    }
  }

  // create/return hexdump of filtered data
  BIN2HEXSTRING(out, &rspcpy[0], rspcpy.size());
}

#endif // TRACE_FILTER
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
