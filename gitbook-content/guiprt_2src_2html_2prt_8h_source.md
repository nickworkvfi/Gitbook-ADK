---
hidden: true
title: prt.h
---

<a href="guiprt_2src_2html_2prt_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /**********************************************************
 2  Copyright: Verifone GmbH 2013
 3 
 4  Entity: HTML Printer
 5  Filename: prt.h
 6  Date: May 2013
 7 
 8 **********************************************************/
 9 #ifndef PRINTER_IF_H_20130513
 10 #define PRINTER_IF_H_20130513
 11 
 17 #include <stdarg.h>
 18 #include "types.h"
 19 #include <vector>
 20 
 21 #if defined _WIN32 && defined VFI_GUIPRT_SHARED_EXPORT
 22 # define DllSpec __declspec(dllexport)
 23 #elif defined __GNUC__ && defined VFI_GUIPRT_SHARED_EXPORT
 24 # define DllSpec __attribute__((visibility ("default")))
 25 #else
 26 # define DllSpec
 27 #endif
 28 
 29 #ifndef DOXYGEN
 30 namespace vfihtml {}
 31 namespace vfiprt {
 32 #endif
 33 
 34 #if 0
 35 } // just to satisfy automatic indentation of the editor
 36 #endif
 37 
 38 using namespace vfihtml; // import common interfaces
 39 
 41 enum PrtError
 42 {
 43  PRT_OK = 0,
 44  // error codes from RawPrinter
 45  PRT_BUSY = -1,
 46  PRT_PAPERJAM = -2,
 47  PRT_HEADOPEN = -3,
 48  PRT_PAPEREND = -4,
 49  PRT_OVERHEAT = -5,
 50  PRT_OVERVOLTAGE = -6,
 51  PRT_UNDERVOLTAGE = -7,
 52  PRT_FAIL = -8,
 53  PRT_SCRIPT_ERROR = -9,
 54  PRT_NO_PRINTER = -10,
 55  PRT_BATTERY = -11,
 56  PRT_UNSUPPORTED = -20,
 58  // additional error codes
 59  PRT_INVALID_PARAM = -21,
 60  PRT_NO_RESOURCE = -22,
 61  PRT_FILE_NOT_FOUND = -23,
 62  PRT_PROTOCOL = -24,
 64  // transient error codes
 65  PRT_FINAL_RESULT =- 40,
 66  PRT_TIMEOUT = -41
 67 };
 68 
 69 inline bool prtFinalResult(int x) { return x>PRT_FINAL_RESULT; }
 70 
 71 
 72 enum PrtMode {
 73  PRT_PREFER_GRAPHICS, PRT_PREFER_TEXT
 74 };
 75 
 77 enum PrtPropertyInt {
 78  PRT_PROP_STATE=0,
 79  PRT_PROP_HEAD_TEMP,
 80  PRT_PROP_HEAD_VOLTAGE,
 81  PRT_PROP_PIXEL_WIDTH,
 82  PRT_PROP_CONTRAST,
 83  PRT_PROP_DEFAULT_FONT_SIZE,
 84  PRT_PROP_PRINT_MODE,
 85  PRT_PROP_JS_QUOTA_SIZE
 87 };
 88 
 90 enum PrtPropertyString {
 91  PRT_PROP_RESOURCE_PATH,
 92  PRT_PROP_FILE_PREFIX,
 94  PRT_PROP_DEFAULT_FONT,
 95  PRT_PROP_CSS,
 96  PRT_PROP_INIFILE,
 98  PRT_PROP_JS_ROOT,
 101  PRT_PROP_DEVICE,
 103  PRT_PROP_JS_QUOTA_ROOT,
 104  PRT_PROP_CP_APP_DIR
 106 };
 107 
 114 DllSpec int prtSetPropertyInt(enum PrtPropertyInt property, int value);
 115 
 121 DllSpec int prtGetPropertyInt(enum PrtPropertyInt property, int *value);
 122 
 129 DllSpec int prtSetPropertyString(enum PrtPropertyString property, const char* value);
 130 
 132 inline int prtSetPropertyString(enum PrtPropertyString property, const std::string &value)
 133 { return prtSetPropertyString(property,value.c_str()); }
 134 
 141 DllSpec int prtGetPropertyString(enum PrtPropertyString property, char* value, int len);
 142 
 148 DllSpec int prtGetPropertyString(enum PrtPropertyString property, std::string &value);
 149 
 158 DllSpec std::string prtFormat(const char *format, ...);
 159 
 162 DllSpec std::string prtFormatV(const char *format, va_list va);
 163 
 164 
 172 DllSpec enum PrtError prtURL(const stringmap &value, const char *url, bool landscape=false);
 173 
 175 inline enum PrtError prtURL(const stringmap &value, const std::string &url, bool landscape=false)
 176 { return prtURL(value,url.c_str(),landscape); }
 177 
 178 
 180 inline enum PrtError prtURL(const char *url, bool landscape=false)
 181 { stringmap value; return prtURL(value,url,landscape); }
 182 
 183 
 185 inline enum PrtError prtURL(const std::string &url, bool landscape=false)
 186 { return prtURL(url.c_str(),landscape); }
 187 
 194 DllSpec enum PrtError prtHTML(const stringmap &value,const std::string &text, bool landscape=false);
 195 
 197 inline enum PrtError prtHTML(const std::string &text, bool landscape=false)
 198 { stringmap value; return prtHTML(value,text,landscape); }
 199 
 200 
 205 typedef void (*prtAsyncCallback)(void *data);
 206 
 207 
 218 DllSpec enum PrtError prtURLAsync(const stringmap &value, const char *url, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0);
 219 
 221 inline enum PrtError prtURLAsync(const stringmap &value, const std::string &url, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0)
 222 { return prtURLAsync(value,url.c_str(),landscape, cb,cbdata); }
 223 
 224 
 226 inline enum PrtError prtURLAsync(const char *url, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0)
 227 { stringmap value; return prtURLAsync(value,url,landscape,cb,cbdata); }
 228 
 230 inline enum PrtError prtURLAsync(const std::string &url, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0)
 231 { return prtURLAsync(url.c_str(),landscape,cb,cbdata); }
 232 
 242 DllSpec enum PrtError prtHTMLAsync(const stringmap &value, const std::string &text, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0);
 243 
 245 inline enum PrtError prtHTMLAsync(const std::string &text, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0)
 246 { stringmap value; return prtHTMLAsync(value,text,landscape,cb,cbdata); }
 247 
 253 DllSpec enum PrtError prtWait(int timeout_msec=-1);
 254 
 264 DllSpec enum PrtError prtURL2PNG(const char *destfile, int width, const stringmap &value, const char *url, bool landscape=false);
 265 
 267 inline enum PrtError prtURL2PNG(const std::string &destfile, int width, const stringmap &value, const char *url, bool landscape=false)
 268 { return prtURL2PNG(destfile.c_str(),width,value,url,landscape); }
 269 
 271 inline enum PrtError prtURL2PNG(const char *destfile, int width, const stringmap &value, const std::string &url, bool landscape=false)
 272 { return prtURL2PNG(destfile,width,value,url.c_str(),landscape); }
 273 
 275 inline enum PrtError prtURL2PNG(const std::string &destfile, int width, const stringmap &value, const std::string &url, bool landscape=false)
 276 { return prtURL2PNG(destfile.c_str(),width,value,url.c_str(),landscape); }
 277 
 278 
 279 
 281 inline enum PrtError prtURL2PNG(const char *destfile, int width, const char *url, bool landscape=false)
 282 {
 283  stringmap value;
 284  return prtURL2PNG(destfile,width,value,url,landscape);
 285 }
 286 
 288 inline enum PrtError prtURL2PNG(const std::string &destfile, int width, const char *url, bool landscape=false)
 289 { return prtURL2PNG(destfile.c_str(),width,url,landscape); }
 290 
 292 inline enum PrtError prtURL2PNG(const char *destfile, int width, const std::string &url, bool landscape=false)
 293 { return prtURL2PNG(destfile,width,url.c_str(),landscape); }
 294 
 296 inline enum PrtError prtURL2PNG(const std::string &destfile, int width, const std::string &url, bool landscape=false)
 297 { return prtURL2PNG(destfile.c_str(),width,url.c_str(),landscape); }
 298 
 299 
 308 DllSpec enum PrtError prtHTML2PNG(const char *destfile, int width, const stringmap &value, const std::string &text, bool landscape=false);
 309 
 311 inline enum PrtError prtHTML2PNG(const char *destfile, int width, const std::string &text, bool landscape=false)
 312 {
 313  stringmap value;
 314  return prtHTML2PNG(destfile,width,value,text,landscape);
 315 }
 316 
 318 inline enum PrtError prtHTML2PNG(const std::string &destfile, int width, const std::string &text, bool landscape=false)
 319 { return prtHTML2PNG(destfile.c_str(),width,text,landscape); }
 320 
 330 DllSpec enum PrtError prtURL2ColorPNG(const char *destfile, int width, const stringmap &value, const char *url, bool landscape=false);
 331 
 333 inline enum PrtError prtURL2ColorPNG(const std::string &destfile, int width, const stringmap &value, const char *url, bool landscape=false)
 334 { return prtURL2ColorPNG(destfile.c_str(),width,value,url,landscape); }
 335 
 337 inline enum PrtError prtURL2ColorPNG(const char *destfile, int width, const stringmap &value, const std::string &url, bool landscape=false)
 338 { return prtURL2ColorPNG(destfile,width,value,url.c_str(),landscape); }
 339 
 341 inline enum PrtError prtURL2ColorPNG(const std::string &destfile, int width, const stringmap &value, const std::string &url, bool landscape=false)
 342 { return prtURL2ColorPNG(destfile.c_str(),width,value,url.c_str(),landscape); }
 343 
 344 
 345 
 347 inline enum PrtError prtURL2ColorPNG(const char *destfile, int width, const char *url, bool landscape=false)
 348 {
 349  stringmap value;
 350  return prtURL2ColorPNG(destfile,width,value,url,landscape);
 351 }
 352 
 354 inline enum PrtError prtURL2ColorPNG(const std::string &destfile, int width, const char *url, bool landscape=false)
 355 { return prtURL2ColorPNG(destfile.c_str(),width,url,landscape); }
 356 
 358 inline enum PrtError prtURL2ColorPNG(const char *destfile, int width, const std::string &url, bool landscape=false)
 359 { return prtURL2ColorPNG(destfile,width,url.c_str(),landscape); }
 360 
 362 inline enum PrtError prtURL2ColorPNG(const std::string &destfile, int width, const std::string &url, bool landscape=false)
 363 { return prtURL2ColorPNG(destfile.c_str(),width,url.c_str(),landscape); }
 364 
 365 
 374 DllSpec enum PrtError prtHTML2ColorPNG(const char *destfile, int width, const stringmap &value, const std::string &text, bool landscape=false);
 375 
 377 inline enum PrtError prtHTML2ColorPNG(const char *destfile, int width, const std::string &text, bool landscape=false)
 378 {
 379  stringmap value;
 380  return prtHTML2ColorPNG(destfile,width,value,text,landscape);
 381 }
 382 
 384 inline enum PrtError prtHTML2ColorPNG(const std::string &destfile, int width, const std::string &text, bool landscape=false)
 385 { return prtHTML2ColorPNG(destfile.c_str(),width,text,landscape); }
 386 
 387 
 391 struct prtControlSeq {
 392  std::string fontNormal;
 393  std::string fontDoubleHeight;
 394  std::string fontDoubleWidth;
 395  std::string fontDoubleWidthHeight;
 397  std::string italicOff;
 398  std::string italicOn;
 399  std::string boldOff;
 400  std::string boldOn;
 401  std::string underlineOff;
 402  std::string underlineOn;
 403 };
 404 
 414 DllSpec enum PrtError prtURL2Text(std::string &result, int width, const stringmap &value, const char *url, const prtControlSeq &ctrl);
 415 
 417 inline enum PrtError prtURL2Text(std::string &result, int width, const stringmap &value, const std::string &url, const prtControlSeq &ctrl)
 418 { return prtURL2Text(result,width,value,url.c_str(),ctrl); }
 419 
 421 inline enum PrtError prtURL2Text(std::string &result, int width, const char *url, const prtControlSeq &ctrl)
 422 { stringmap value; return prtURL2Text(result,width,value,url,ctrl); }
 423 
 425 inline enum PrtError prtURL2Text(std::string &result, int width, const std::string &url, const prtControlSeq &ctrl)
 426 { return prtURL2Text(result,width,url.c_str(),ctrl); }
 427 
 436 DllSpec enum PrtError prtHTML2Text(std::string &result, int width, const stringmap &value, const std::string &text, const prtControlSeq &ctrl);
 437 
 439 inline enum PrtError prtHTML2Text(std::string &result, int width, const std::string &text, const prtControlSeq &ctrl)
 440 { stringmap value; return prtHTML2Text(result,width,value,text,ctrl); }
 441 
 446 DllSpec int prtGetFD();
 447 
 453 DllSpec int prtSetCatalog(const std::string &filename);
 454 
 462 DllSpec void prtCatalogSetDelayedRelease(unsigned num);
 463 
 469 DllSpec unsigned prtCatalogGetDelayedRelease();
 470 
 477 DllSpec std::string prtGetText(const std::string &name, const std::string &deflt="");
 478 
 487 DllSpec int prtGetHtml(const std::map<std::string,std::string> &value, const std::string &text, std::string &html, bool full);
 488 DllSpec int prtGetHtml(const std::map<std::string,std::string> &value, const std::string &text, std::string &html);
 489 
 499 DllSpec int prtGetHtmlURL(const std::map<std::string,std::string> &value, const std::string &url, std::string &html, bool full);
 500 DllSpec int prtGetHtmlURL(const std::map<std::string,std::string> &value, const std::string &url, std::string &html);
 501 
 502 
 509 DllSpec int prtSetRemotePrinter(const std::string &address);
 510 
 511 
 515 DllSpec const char *prtLibVersion();
 516 
 520 DllSpec const char *prt_GetVersion();
 521 
 522 
 524 struct PrtErrorEntry {
 526  enum ErrorType { NOT_FOUND,
 527  UNSUPPORTED,
 528  CORRUPT
 529  } type;
 530  std::string name;
 532  PrtErrorEntry(ErrorType t, const std::string &n) :type(t),name(n) {}
 533 };
 534 
 538 DllSpec const std::vector<PrtErrorEntry> &prtErrorList();
 539 
 541 DllSpec std::string prtScriptError();
 542 
 543 
 548 DllSpec void prtSetLocalProperties(bool local);
 549 
 551 DllSpec bool prtGetLocalProperties();
 552 
 553 
 557 DllSpec void prtSetLogMask(unsigned mask);
 558 
 562 DllSpec unsigned prtGetLogMask(void);
 563 
 570 DllSpec void prtAddFontDir(const char *dir);
 571 
 572 #ifndef DOXYGEN
 573 } //namespace vfiprint
 574 #endif
 575 
 576 #undef DllSpec
 577 
 580 #endif // #ifndef PRINTER_IF_H_20130513
```
