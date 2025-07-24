---
hidden: true
title: jsproc.h
---

<a href="jsproc_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++; -*-
 2 #ifndef JSPROC_H_20150609
 3 #define JSPROC_H_20150609
 4 
 7 #include <string>
 8 #include <vector>
 9 #include <map>
 10 
 11 #if defined _WIN32 && defined VFI_JSPROC_SHARED_EXPORT
 12 # define DllSpec __declspec(dllexport)
 13 #elif defined __GNUC__ && defined VFI_JSPROC_SHARED_EXPORT
 14 # define DllSpec __attribute__((visibility ("default")))
 15 #else
 16 # define DllSpec
 17 #endif
 18 
 19 namespace vfihtml { class ExtContext; }
 20 
 21 #ifndef DOXYGEN
 22 namespace js {
 23 #endif
 24 
 34 DllSpec bool jsProcessor(void *data,
 35  const std::string &sourcecode,
 36  std::map<std::string,std::string> &arg,
 37  std::string &out,
 38  std::string &err,
 39  std::string &exitcode);
 40 
 51 DllSpec bool jsProcessorExt(void *data,
 52  const std::string &sourcecode,
 53  std::map<std::string,std::string> &arg,
 54  std::string &out,
 55  std::string &err,
 56  std::string &exitcode,
 57  vfihtml::ExtContext *context);
 58 
 60 DllSpec const char *jsProcVersion();
 61 
 62 
 66 DllSpec void jsSetHttpProxy(const char *proxy);
 67 
 71 DllSpec const char *jsGetHttpProxy();
 72 
 85 DllSpec void jsSetConsole( void (*cb)(void *data, const char *text), void *data);
 86 
 91 DllSpec void jsGetConsole( void (*&cb)(void *, const char *), void *&data);
 92 
 110 DllSpec void jsSetNotify( int (*cb)(void *data,
 111  const char *to,
 112  const char *notification_id,
 113  const char *json_param,
 114  unsigned flags,
 115  const char *from), void *data);
 116 
 121 DllSpec void jsGetNotify( int (*&cb)(void *data,
 122  const char *to,
 123  const char *notification_id,
 124  const char *json_param,
 125  unsigned flags,
 126  const char *from), void *&data);
 127 
 148 DllSpec void jsSetNotifyAndWait( int (*cb)(void *data,
 149  const char *to,
 150  const char *notification_id,
 151  const char *json_param,
 152  unsigned flags,
 153  const char *from,
 154  const char *wait_id,
 155  std::string &result,
 156  int timeout_msec), void *data);
 157 
 162 DllSpec void jsGetNotifyAndWait( int (*&cb)(void *data,
 163  const char *to,
 164  const char *notification_id,
 165  const char *json_param,
 166  unsigned flags,
 167  const char *from,
 168  const char *wait_id,
 169  std::string &result,
 170  int timeout_msec), void *&data);
 171 
 173 enum JSTraceType {
 174  JST_HTTPGET,
 175  JST_HTTPPOST,
 176  JST_HTTPRESULT
 177 };
 178 
 193 DllSpec void jsSetTrace( void (*cb)(void *data,
 194  JSTraceType type,
 195  const std::string &app_id,
 196  std::map<std::string,std::string> &trace), void *data);
 197 
 202 DllSpec void jsGetTrace( void (*&cb)(void *data,
 203  JSTraceType type,
 204  const std::string &app_id,
 205  std::map<std::string,std::string> &trace), void *&data);
 206 
 207 
 208 enum JSLogLevel {
 209  JSL_EMERGENCY=0,
 210  JSL_ALERT=1,
 211  JSL_CRITICAL=2,
 212  JSL_ERROR=3,
 213  JSL_WARNING=4,
 214  JSL_NOTICE=5,
 215  JSL_INFO=6,
 216  JSL_DEBUG=7
 217 };
 218 
 233 DllSpec void jsSetLog( void (*cb)(void *data,
 234  const std::string &app_id,
 235  JSLogLevel log_level,
 236  const std::vector<std::string> &msg), void *data);
 237 
 242 DllSpec void jsGetLog( void (*&cb)(void *data,
 243  const std::string &app_id,
 244  JSLogLevel log_level,
 245  const std::vector<std::string> &msg), void *&data);
 246 
 247 #ifndef DOXYGEN
 248 } // namespace
 249 #endif
 250 
 251 #undef DllSpec
 252 
 253 #endif
```
