---
hidden: true
title: gui.h
---

<a href="gui_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++; -*-
 2 #ifndef GUI_H_2013_03_14
 3 #define GUI_H_2013_03_14
 4 
 10 #include <stdarg.h>
 11 #include <pthread.h>
 12 #include "jsobject.h"
 13 #include "timestamp.h"
 14 #include "gui_error.h"
 15 #include "types.h"
 16 
 17 #if defined _WIN32 && defined VFI_GUIPRT_SHARED_EXPORT
 18 # define DllSpec __declspec(dllexport)
 19 #elif defined __GNUC__ && defined VFI_GUIPRT_SHARED_EXPORT
 20 # define DllSpec __attribute__((visibility ("default")))
 21 #else
 22 # define DllSpec
 23 #endif
 24 
 26 #ifndef DOXYGEN
 27 namespace vfigui {
 28 #endif
 29 #if 0
 30 } // just to satisfy automatic indentation of the editor
 31 #endif
 32 
 33 using namespace vfihtml; // import common interfaces
 34 
 51 typedef bool (*uiCallback)(void *data);
 52 
 54 enum UICBType { UI_CB_RESULT,
 55  UI_CB_UPDATE,
 56  UI_CB_LOAD,
 57  UI_CB_ERROR_LIST,
 58  UI_CB_STATISTICS,
 59  UI_CB_EVENT
 60 };
 61 
 62 struct UIErrorEntry;
 63 struct UIStatistics;
 64 
 66 class UICBData {
 67  public:
 68 
 70  virtual ~UICBData() {}
 71 
 73  virtual int &result()=0;
 74 
 76  virtual int txn_id()=0;
 77 
 79  virtual stringmap &value()=0;
 80 
 82  virtual std::string &url()=0;
 83 
 85  virtual std::vector<UIErrorEntry> &error()=0;
 86 
 88  virtual std::string &script_error()=0;
 89 
 91  virtual UIStatistics &statistics()=0;
 92 
 93 };
 94 
 95 
 105 typedef void (*uiAsyncCallback)(void *data, UICBType type, UICBData &uidata);
 106 
 109 struct UIRegion {
 110  int id;
 111  int left;
 112  int top;
 113  int right;
 114  int bottom;
 115  int flags;
 116 };
 117 
 118 enum { UI_REGION_DEFAULT=0
 119 };
 120 
 121 enum {
 122  UI_REGION_FLAG_HIDDEN=1
 124 };
 125 
 126 
 131 DllSpec void uiSetConnectAttempts(int num);
 132 
 136 DllSpec int uiGetConnectAttempts();
 137 
 143 typedef void (*uiDisconnectCallback)(int display);
 144 
 150 DllSpec void uiSetDisconnectCallback(uiDisconnectCallback cb);
 151 
 155 DllSpec uiDisconnectCallback uiGetDisconnectCallback();
 156 
 163 DllSpec void uiSetKeepalive(int count, int interval);
 164 
 169 DllSpec void uiGetKeepalive(int &count, int &interval);
 170 
 175 DllSpec void uiDisconnect(int display);
 176 
 184 DllSpec int uiReadRuntimeID(int display, std::string &id, int timeout_msec=5000);
 185 
 194 DllSpec std::string uiPrint(const char *format, ...);
 195 
 198 DllSpec std::string uiPrintV(const char *format, va_list va);
 199 
 200 
 204 DllSpec int uiDisplayCount();
 205 
 206 
 214 DllSpec int uiDisplay(int display, int region_id, const std::string &text);
 215 
 216 DllSpec int uiDisplay(int region_id, const std::string &text);
 217 
 218 inline int uiDisplay(const std::string &text) { return uiDisplay(0,UI_REGION_DEFAULT,text); }
 219 
 220 
 232 DllSpec int uiInvoke(int display, int region_id, stringmap &value, const std::string &text, uiCallback cb=0, void *cbdata=0);
 233 
 234 DllSpec int uiInvoke(int region_id, stringmap &value, const std::string &text, uiCallback cb=0, void *cbdata=0);
 235 
 236 inline int uiInvoke(stringmap &value, const std::string &text, uiCallback cb=0, void *cbdata=0)
 237 { return uiInvoke(0,UI_REGION_DEFAULT,value,text,cb,cbdata); }
 238 
 239 inline int uiInvoke(int display, int region_id, const std::string &text, uiCallback cb=0, void *cbdata=0)
 240 { stringmap value; return uiInvoke(display, region_id,value,text,cb,cbdata); }
 241 
 242 inline int uiInvoke(int region_id, const std::string &text, uiCallback cb=0, void *cbdata=0)
 243 { stringmap value; return uiInvoke(0,region_id,value,text,cb,cbdata); }
 244 
 245 inline int uiInvoke(const std::string &text, uiCallback cb=0, void *cbdata=0)
 246 { stringmap value; return uiInvoke(0,UI_REGION_DEFAULT,value,text,cb,cbdata); }
 247 
 260 DllSpec int uiInvokeTemplate(int display, int region_id, stringmap &value, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0);
 261 
 262 DllSpec int uiInvokeTemplate(int region_id, stringmap &value, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0);
 263 
 264 inline int uiInvokeTemplate(stringmap &value, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0)
 265 { return uiInvokeTemplate(0,UI_REGION_DEFAULT,value,template_name,text,cb,cbdata); }
 266 
 267 inline int uiInvokeTemplate(int display, int region_id, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0)
 268 { stringmap value; return uiInvokeTemplate(display,region_id,value,template_name,text,cb,cbdata); }
 269 
 270 inline int uiInvokeTemplate(int region_id, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0)
 271 { stringmap value; return uiInvokeTemplate(0,region_id,value,template_name,text,cb,cbdata); }
 272 
 273 inline int uiInvokeTemplate(const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0)
 274 { stringmap value; return uiInvokeTemplate(0,UI_REGION_DEFAULT,value,template_name,text,cb,cbdata); }
 275 
 276 
 289 DllSpec int uiInvokeURL(int display, int region_id, stringmap &value, const char *url, uiCallback cb=0, void *cbdata=0);
 290 
 292 DllSpec int uiInvokeURL(int region_id, stringmap &value, const char *url, uiCallback cb=0, void *cbdata=0);
 293 
 295 inline int uiInvokeURL(stringmap &value, const char *url, uiCallback cb=0, void *cbdata=0)
 296 { return uiInvokeURL(0,UI_REGION_DEFAULT,value,url,cb,cbdata); }
 297 
 299 inline int uiInvokeURL(int display, int region_id, const char *url, uiCallback cb=0, void *cbdata=0)
 300 { stringmap value; return uiInvokeURL(display, region_id,value,url,cb,cbdata); }
 301 
 303 inline int uiInvokeURL(int region_id, const char *url, uiCallback cb=0, void *cbdata=0)
 304 { stringmap value; return uiInvokeURL(0,region_id,value,url,cb,cbdata); }
 305 
 307 inline int uiInvokeURL(const char *url, uiCallback cb=0, void *cbdata=0)
 308 { stringmap value; return uiInvokeURL(0,UI_REGION_DEFAULT,value,url,cb,cbdata); }
 309 
 310 
 323 DllSpec int uiInvokeURL(int display, int region_id, stringmap &value, const std::string &url, uiCallback cb=0, void *cbdata=0);
 324 
 326 inline int uiInvokeURL(int region_id, stringmap &value, const std::string &url, uiCallback cb=0, void *cbdata=0)
 327 { return uiInvokeURL(0,region_id,value,url,cb,cbdata); }
 328 
 330 inline int uiInvokeURL(stringmap &value, const std::string &url, uiCallback cb=0, void *cbdata=0)
 331 { return uiInvokeURL(0,UI_REGION_DEFAULT,value,url,cb,cbdata); }
 332 
 334 inline int uiInvokeURL(int display, int region_id, const std::string &url, uiCallback cb=0, void *cbdata=0)
 335 { stringmap value; return uiInvokeURL(display,region_id,value,url,cb,cbdata); }
 336 
 338 inline int uiInvokeURL(int region_id, const std::string &url, uiCallback cb=0, void *cbdata=0)
 339 { stringmap value; return uiInvokeURL(0,region_id,value,url,cb,cbdata); }
 340 
 342 inline int uiInvokeURL(const std::string &url, uiCallback cb=0, void *cbdata=0)
 343 { stringmap value; return uiInvokeURL(0,UI_REGION_DEFAULT, value,url,cb,cbdata); }
 344 
 345 
 358 DllSpec int uiInvokeAsync(int display, int region_id, const stringmap &value, const std::string &text, uiAsyncCallback cb=0, void *data=0);
 359 
 361 DllSpec int uiInvokeAsync(int region_id, const stringmap &value, const std::string &text, uiAsyncCallback cb=0, void *data=0);
 362 
 364 inline int uiInvokeAsync(const stringmap &value, const std::string &text, uiAsyncCallback cb=0, void *data=0)
 365 { return uiInvokeAsync(0,UI_REGION_DEFAULT, value, text,cb,data); }
 366 
 368 inline int uiInvokeAsync(int display, int region_id, const std::string &text, uiAsyncCallback cb=0, void *data=0)
 369 { stringmap value; return uiInvokeAsync(display, region_id,value,text,cb,data); }
 370 
 372 inline int uiInvokeAsync(int region_id, const std::string &text, uiAsyncCallback cb=0, void *data=0)
 373 { stringmap value; return uiInvokeAsync(0,region_id,value,text,cb,data); }
 374 
 376 inline int uiInvokeAsync(const std::string &text, uiAsyncCallback cb=0, void *data=0)
 377 { stringmap value; return uiInvokeAsync(0,UI_REGION_DEFAULT, value, text,cb,data); }
 378 
 392 DllSpec int uiInvokeTemplateAsync(int display, int region_id, const stringmap &value, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0);
 393 
 395 DllSpec int uiInvokeTemplateAsync(int region_id, const stringmap &value, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0);
 396 
 398 inline int uiInvokeTemplateAsync(const stringmap &value, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0)
 399 { return uiInvokeTemplateAsync(0, UI_REGION_DEFAULT, value, template_name, text, cb,data); }
 400 
 402 inline int uiInvokeTemplateAsync(int display, int region_id, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0)
 403 { stringmap value; return uiInvokeTemplateAsync(display,region_id,value,template_name,text, cb,data); }
 404 
 406 inline int uiInvokeTemplateAsync(int region_id, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0)
 407 { stringmap value; return uiInvokeTemplateAsync(0,region_id,value,template_name,text, cb,data); }
 408 
 410 inline int uiInvokeTemplateAsync(const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0)
 411 { stringmap value; return uiInvokeTemplateAsync(0,UI_REGION_DEFAULT, value, template_name, text, cb,data); }
 412 
 413 
 427 DllSpec int uiInvokeURLAsync(int display, int region_id, const stringmap &value, const char *url, uiAsyncCallback cb=0, void *data=0);
 428 
 430 DllSpec int uiInvokeURLAsync(int region_id, const stringmap &value, const char *url, uiAsyncCallback cb=0, void *data=0);
 431 
 433 inline int uiInvokeURLAsync(const stringmap &value, const char *url, uiAsyncCallback cb=0, void *data=0)
 434 { return uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); }
 435 
 437 inline int uiInvokeURLAsync(int display, int region_id,const char *url, uiAsyncCallback cb=0, void *data=0)
 438 { stringmap value; return uiInvokeURLAsync(display, region_id,value,url,cb,data); }
 439 
 441 inline int uiInvokeURLAsync(int region_id,const char *url, uiAsyncCallback cb=0, void *data=0)
 442 { stringmap value; return uiInvokeURLAsync(0,region_id,value,url,cb,data); }
 443 
 445 inline int uiInvokeURLAsync(const char *url, uiAsyncCallback cb=0, void *data=0)
 446 { stringmap value; return uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); }
 447 
 448 
 462 DllSpec int uiInvokeURLAsync(int display, int region_id, const stringmap &value, const std::string &url, uiAsyncCallback cb=0, void *data=0);
 463 
 465 inline int uiInvokeURLAsync(int region_id, const stringmap &value, const std::string &url, uiAsyncCallback cb=0, void *data=0)
 466 { return uiInvokeURLAsync(0, region_id, value, url,cb,data); }
 467 
 469 inline int uiInvokeURLAsync(const stringmap &value, const std::string &url, uiAsyncCallback cb=0, void *data=0)
 470 { return uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); }
 471 
 473 inline int uiInvokeURLAsync(int display, int region_id,const std::string &url, uiAsyncCallback cb=0, void *data=0)
 474 { stringmap value; return uiInvokeURLAsync(display, region_id,value,url,cb,data); }
 475 
 477 inline int uiInvokeURLAsync(int region_id,const std::string &url, uiAsyncCallback cb=0, void *data=0)
 478 { stringmap value; return uiInvokeURLAsync(0,region_id,value,url,cb,data); }
 479 
 481 inline int uiInvokeURLAsync(const std::string &url, uiAsyncCallback cb=0, void *data=0)
 482 { stringmap value; return uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); }
 483 
 484 
 496 DllSpec int uiInvokeWait(int txn_id, std::map<std::string,std::string> &value, int timeout_msec=-1);
 497 
 498 
 500 inline int uiInvokeWait(int txn_id, int timeout_msec=-1)
 501 {
 502  std::map<std::string,std::string> value;
 503  return uiInvokeWait(txn_id,value,timeout_msec);
 504 }
 505 
 515 DllSpec int uiInvokeCancel(int txn_id, std::map<std::string,std::string> &value);
 516 
 518 inline int uiInvokeCancel(int txn_id)
 519 {
 520  std::map<std::string,std::string> value;
 521  return uiInvokeCancel(txn_id,value);
 522 }
 523 
 527 DllSpec int uiInvokeCancelAsync(int txn_id);
 528 
 539 DllSpec int uiInvokeURLDetached(int display, int region_id, const char *url);
 540 
 542 DllSpec int uiInvokeURLDetached(int region_id, const char *url);
 543 
 545 inline int uiInvokeURLDetached(const char *url)
 546 { return uiInvokeURLDetached(0, UI_REGION_DEFAULT,url); }
 547 
 548 
 555 DllSpec int uiClear(int display, int region_id);
 556 
 558 inline int uiClear(int region_id) { return uiClear(0,region_id); }
 559 
 561 enum UIPropertyInt {
 562  UI_PROP_TIMEOUT=0,
 563  UI_PROP_PASSWORD_CHAR,
 564  UI_PROP_DEFAULT_FONT_SIZE,
 565  UI_PROP_PIN_AUTO_ENTER,
 566  UI_PROP_PIN_CLEAR_ALL,
 567  UI_PROP_PIN_BYPASS_KEY,
 572  UI_PROP_PIN_ALGORITHM,
 574  UI_PROP_PIN_INTERCHAR_TIMEOUT,
 575  UI_PROP_PASSWORD_SHOW_CHAR,
 576  UI_PROP_KEEP_DISPLAY,
 579  UI_PROP_UPDATE_EVENTS,
 581  UI_PROP_CIRCULAR_MENU,
 583  UI_PROP_TOUCH_ACTION_BEEP,
 585  UI_PROP_STATISTICS,
 586  UI_PROP_RESTRICTED,
 587  UI_PROP_CP_APP_MODE,
 588  UI_PROP_SCROLL_COLOR,
 589  UI_PROP_INPUT_ERROR_BEEP,
 592  UI_PROP_ZOOM_MAX,
 593  UI_PROP_SCROLL_DISPLAY,
 595  UI_PROP_JS_QUOTA_SIZE,
 597  UI_PROP_SCROLL_WIDTH,
 600  // Readonly properties
 601  UI_DEVICE_WIDTH=1000,
 602  UI_DEVICE_HEIGHT,
 603  UI_DEVICE_COLOR_DEPTH,
 604  UI_DEVICE_SUPPORTS_TOUCH,
 605  UI_DEVICE_SUPPORTS_BEEPER, // not supported, do not use. Left here for compatibility reasons.
 606  UI_DEVICE_SUPPORTS_AUDIO,
 607  UI_DEVICE_SUPPORTS_VIDEO,
 608  UI_DEVICE_SUPPORTS_SIGCAP,
 609  UI_DEVICE_SUPPORTS_COLOR_DISPLAY,
 610  UI_DEVICE_HAS_CAP_TOUCH_KEYPAD,
 611  UI_DEVICE_SUPPORTS_NAVIGATOR_MODE,
 612  UI_DEVICE_KEY_COUNT
 613 };
 614 
 616 enum UIPropertyString {
 617  UI_PROP_DECIMAL_SEPARATOR=2000,
 618  UI_PROP_THOUSANDS_SEPARATOR,
 619  UI_PROP_DEFAULT_FONT,
 620  UI_PROP_RESOURCE_PATH,
 621  UI_PROP_FILE_PREFIX,
 623  UI_PROP_KEYMAP,
 624  UI_PROP_CSS,
 625  UI_PROP_RESOURCE_DEFAULT_PATH,
 626  UI_PROP_GUI_EXTENSIONS,
 627  UI_PROP_HTTP_HEADER_FIELDS,
 629  UI_PROP_CP_APP_DIR,
 631  UI_PROP_LANGUAGE,
 639  UI_PROP_JS_ROOT,
 642  UI_PROP_PRINT_ROOT,
 644  UI_PROP_PRINT_CSS,
 646  UI_PROP_JS_QUOTA_ROOT,
 648  // Readonly properties
 649  UI_DEVICE_MODEL=3000
 650 };
 651 
 659 DllSpec int uiSetPropertyInt(int display, enum UIPropertyInt property, int value);
 660 
 662 DllSpec int uiSetPropertyInt(enum UIPropertyInt property, int value);
 663 
 671 DllSpec int uiGetPropertyInt(int display, enum UIPropertyInt property, int *value);
 672 
 674 DllSpec int uiGetPropertyInt(enum UIPropertyInt property, int *value);
 675 
 683 DllSpec int uiSetPropertyString(int display, enum UIPropertyString property, const char *value);
 684 
 686 DllSpec int uiSetPropertyString(enum UIPropertyString property, const char *value);
 687 
 695 inline int uiSetPropertyString(int display, enum UIPropertyString property, const std::string &value)
 696 { return uiSetPropertyString(display,property,value.c_str()); }
 697 
 699 inline int uiSetPropertyString(enum UIPropertyString property, const std::string &value)
 700 { return uiSetPropertyString(0,property,value.c_str()); }
 701 
 710 DllSpec int uiGetPropertyString(int display, enum UIPropertyString property, char* value, int len);
 711 
 713 DllSpec int uiGetPropertyString(enum UIPropertyString property, char* value, int len);
 714 
 722 DllSpec int uiGetPropertyString(int display, enum UIPropertyString property, std::string &value);
 723 
 725 DllSpec int uiGetPropertyString(enum UIPropertyString property, std::string &value);
 726 
 727 
 729 enum UIServerProperty {
 730  UI_SERVER_TOUCH_ACTION_BEEP,
 733  UI_SERVER_INPUT_ERROR_BEEP,
 736  UI_SERVER_KEYMAP,
 738 };
 739 
 746 DllSpec int uiSetServerProperty(int display, enum UIServerProperty property, const std::string &value);
 747 
 754 DllSpec int uiGetServerProperty(int display, enum UIServerProperty property, std::string &value);
 755 
 763 DllSpec std::string uiGetTerminalResourceDir(int display, const std::string &www_path);
 764 
 766 DllSpec std::string uiGetTerminalResourceDir(const std::string &www_path);
 767 
 770 DllSpec std::string uiGetKeypadType(int display);
 771 
 777 DllSpec void uiSetLocalProperties(bool local);
 778 
 780 DllSpec bool uiGetLocalProperties();
 781 
 795 DllSpec int uiLayout(int display, const UIRegion *region, int regcnt, const UIRegion *oldreg, int oldregcnt);
 796 
 798 DllSpec int uiLayout(const UIRegion *region, int regcnt, const UIRegion *oldreg, int oldregcnt);
 799 
 801 DllSpec int uiLayout(int display, const UIRegion *region, int regcnt);
 802 
 804 DllSpec int uiLayout(const UIRegion *region, int regcnt);
 805 
 813 inline int uiLayout(int display, const std::vector<UIRegion> &reg) {
 814  UIRegion dummy;
 815  return uiLayout(display, reg.size() ? &reg[0] : &dummy,reg.size());
 816 }
 817 
 819 inline int uiLayout(const std::vector<UIRegion> &reg) {
 820  UIRegion dummy;
 821  return uiLayout(0, reg.size() ? &reg[0] : &dummy,reg.size());
 822 }
 823 
 834 inline int uiLayout(int display, const std::vector<UIRegion> &reg, const std::vector<UIRegion> &oldreg)
 835 {
 836  UIRegion dummy;
 837  return uiLayout(display, reg.size() ? &reg[0] : &dummy,reg.size(), oldreg.size() ? &oldreg[0] : &dummy, oldreg.size());
 838 }
 839 
 841 inline int uiLayout(const std::vector<UIRegion> &reg, const std::vector<UIRegion> &oldreg)
 842 {
 843  UIRegion dummy;
 844  return uiLayout(0,reg.size() ? &reg[0] : &dummy,reg.size(), oldreg.size() ? &oldreg[0] : &dummy, oldreg.size());
 845 }
 846 
 854 DllSpec int uiLayout(int display, const char *name);
 855 
 857 DllSpec int uiLayout(const char *name);
 858 
 865 DllSpec int uiGetLayout(int display, std::vector<UIRegion> &region);
 866 
 868 DllSpec int uiGetLayout(std::vector<UIRegion> &region);
 869 
 877 DllSpec int uiGetRegionSize(int display, int region_id, int &width, int &height);
 878 
 880 inline int uiGetRegionSize(int region_id, int &width, int &height)
 881 {
 882  return uiGetRegionSize(0,region_id,width,height);
 883 }
 884 
 893 DllSpec int uiEnterRegion(int display, int region_id);
 894 
 896 DllSpec int uiEnterRegion(int region_id);
 897 
 902 DllSpec int uiLeaveRegion(int display);
 903 
 905 DllSpec int uiLeaveRegion();
 906 
 915 DllSpec std::string uiCurrentRegionPath(int display);
 916 
 918 DllSpec std::string uiCurrentRegionPath();
 919 
 926 DllSpec int uiSetCurrentRegionPath(int display, const std::string &path);
 927 
 929 DllSpec int uiSetCurrentRegionPath(const std::string &path);
 930 
 931 
 937 DllSpec int uiRegionIsVisible(int display, int region_id);
 938 
 943 inline int uiRegionIsVisible(int region_id)
 944 {return uiRegionIsVisible(0,region_id); }
 945 
 946 
 955 DllSpec void uiReadConfig(int display);
 956 
 958 DllSpec void uiReadConfig();
 959 
 960 
 969 DllSpec int uiSetCatalog(int display, const std::string &filename);
 970 
 972 DllSpec int uiSetCatalog(const std::string &filename);
 973 
 979 DllSpec std::string uiGetCatalog(int display);
 980 
 982 DllSpec std::string uiGetCatalog();
 983 
 991 DllSpec void uiCatalogSetDelayedRelease(unsigned num);
 992 
 998 DllSpec unsigned uiCatalogGetDelayedRelease();
 999 
 1000 
 1009 DllSpec std::string uiGetText(int display, const std::string &name, const std::string &deflt="");
 1010 
 1012 DllSpec std::string uiGetText(const std::string &name, const std::string &deflt="");
 1013 
 1030 DllSpec std::string uiGetText(int display, const std::string &filename, const std::string &name, const std::string &deflt);
 1031 
 1033 DllSpec std::string uiGetText(const std::string &filename, const std::string &name, const std::string &deflt);
 1034 
 1044 DllSpec int uiGetHtml(int display, const std::map<std::string,std::string> &value, const std::string &text, std::string &html);
 1045 
 1047 DllSpec int uiGetHtml(const std::map<std::string,std::string> &value, const std::string &text, std::string &html);
 1048 
 1059 DllSpec int uiGetHtmlURL(int display, const std::map<std::string,std::string> &value, const std::string &url, std::string &html);
 1060 
 1062 DllSpec int uiGetHtmlURL(const std::map<std::string,std::string> &value, const std::string &url, std::string &html);
 1063 
 1064 
 1072 DllSpec std::string uiGetURLPath(int display, const std::string &url);
 1073 
 1075 DllSpec std::string uiGetURLPath(const std::string &url);
 1076 
 1077 
 1085 DllSpec int uiScreenshotPNG(int display, const char *filename);
 1086 
 1088 DllSpec int uiScreenshotPNG(const char *filename);
 1089 
 1102 DllSpec int uiScreenshotPNG(int display, const char *filename, int x, int y, int w, int h);
 1103 
 1105 inline int uiScreenshotPNG(const char *filename, int x, int y, int w, int h)
 1106 {
 1107  return uiScreenshotPNG(0,filename,x,y,w,h);
 1108 }
 1109 
 1110 
 1118 DllSpec int uiScreenshotPNGData(int display, std::vector<unsigned char> &data);
 1119 
 1121 DllSpec int uiScreenshotPNGData(std::vector<unsigned char> &data);
 1122 
 1135 DllSpec int uiScreenshotPNGData(int display, std::vector<unsigned char> &data, int x, int y, int w, int h);
 1136 
 1138 inline int uiScreenshotPNGData(std::vector<unsigned char> &data, int x, int y, int w, int h)
 1139 {
 1140  return uiScreenshotPNGData(0,data,x,y,w,h);
 1141 }
 1142 
 1143 
 1154 DllSpec int uiURL2PNG(const char *filename, int width, int height, const std::map<std::string,std::string> &value, const std::string &url);
 1155 
 1166 DllSpec int uiURL2PNGData(std::vector<unsigned char> &data, int width, int height, const std::map<std::string,std::string> &value, const std::string &url);
 1167 
 1177 DllSpec int uiHTML2PNG(const char *filename, int width, int height, const std::map<std::string,std::string> &value, const std::string &text);
 1178 
 1188 DllSpec int uiHTML2PNGData(std::vector<unsigned char> &data, int width, int height, const std::map<std::string,std::string> &value, const std::string &text);
 1189 
 1193 DllSpec const char *uiLibVersion();
 1194 
 1198 DllSpec const char *gui_GetVersion();
 1199 
 1200 
 1205 DllSpec const char *gui_GetSvcVersion(int display);
 1206 DllSpec const char *gui_GetSvcVersion();
 1207 
 1209 enum {
 1210  // lowest 4 bits: direction flags
 1211  UI_TRANS_UP =0x1,
 1212  UI_TRANS_RIGHT =0x2,
 1213  UI_TRANS_DOWN =0x4,
 1214  UI_TRANS_LEFT =0x8,
 1216  UI_TRANS_DIRECTION_MASK=0xf,
 1218  // 2 bits affecting speed:
 1219  UI_TRANS_EASE_IN =0x10,
 1220  UI_TRANS_EASE_OUT =0x20,
 1221  UI_TRANS_EASE_INOUT =0x30,
 1223  UI_TRANS_EASE_MASK=0x30,
 1225  // Transition type
 1226  UI_TRANS_NONE =0x000,
 1227  UI_TRANS_SLIDE =0x100,
 1228  UI_TRANS_SLIDEON =0x200,
 1229  UI_TRANS_SWAP =0x300,
 1231  UI_TRANS_CROSSFADE=0x400,
 1233  UI_TRANS_TYPE_MASK=0xfff00
 1234 };
 1235 
 1245 DllSpec int uiSetTransition(int display, int region_id, unsigned transtype, int duration_ms);
 1246 
 1248 DllSpec int uiSetTransition(int region_id, unsigned transtype, int duration_ms);
 1249 
 1251 inline int uiSetTransition(unsigned transtype, int duration_ms)
 1252 { return uiSetTransition(0,UI_REGION_DEFAULT,transtype,duration_ms); }
 1253 
 1254 
 1256 struct UIErrorEntry {
 1258  enum ErrorType { NOT_FOUND,
 1259  UNSUPPORTED,
 1260  CORRUPT
 1261  } type;
 1262  std::string name;
 1264  UIErrorEntry(ErrorType t, const std::string &n) :type(t),name(n) {}
 1265 };
 1266 
 1273 DllSpec const std::vector<UIErrorEntry> &uiErrorList();
 1274 
 1276 struct UIStatistics {
 1277  vfigui::TimeStamp start;
 1278  vfigui::TimeStamp css;
 1279  vfigui::TimeStamp html;
 1280  vfigui::TimeStamp draw;
 1281 };
 1282 
 1283 
 1289 DllSpec const UIStatistics &uiStatistics();
 1290 
 1291 
 1295 DllSpec std::string uiScriptError();
 1296 
 1297 
 1301 DllSpec int uiGetIdleTime(int display=0);
 1302 
 1306 DllSpec void uiSetLogMask(unsigned mask);
 1307 
 1311 DllSpec unsigned uiGetLogMask(void);
 1312 
 1314 enum UILEDShape {
 1315  UI_SHAPE_RECTANGLE,
 1316  UI_SHAPE_ELLIPSE
 1317 };
 1318 
 1332 DllSpec int uiConfigLEDs(int display,
 1333  UILEDShape shape, int width, int height,
 1334  unsigned off_rgba,
 1335  unsigned on0_rgba, unsigned on1_rgba, unsigned on2_rgba, unsigned on3_rgba);
 1336 
 1338 DllSpec int uiConfigLEDs(UILEDShape shape, int width, int height,
 1339  unsigned off_rgba,
 1340  unsigned on0_rgba, unsigned on1_rgba, unsigned on2_rgba, unsigned on3_rgba);
 1341 
 1342 
 1352 DllSpec int uiConfigLEDs(int display, const char *filename);
 1353 
 1355 DllSpec int uiConfigLEDs(const char *filename);
 1356 
 1358 enum UIEdge {
 1359  UI_EDGE_TOP,
 1360  UI_EDGE_RIGHT,
 1361  UI_EDGE_BOTTOM,
 1362  UI_EDGE_LEFT
 1363 };
 1364 
 1381 DllSpec int uiShowLEDArea(int display, UIEdge edge, int width, int height, unsigned bg_rgba);
 1382 
 1384 DllSpec int uiShowLEDArea(UIEdge edge, int width, int height, unsigned bg_rgba);
 1385 
 1390 DllSpec int uiHideLEDArea(int display);
 1391 
 1393 DllSpec int uiHideLEDArea();
 1394 
 1401 DllSpec int uiSetLED(int display, unsigned led, bool state);
 1402 
 1404 DllSpec int uiSetLED(unsigned led, bool state);
 1405 
 1406 
 1408 struct UIBacklight {
 1409  unsigned brightness;
 1410  unsigned timeout;
 1412 };
 1413 
 1427 DllSpec int uiSetBacklightConfig(int display, const std::vector<UIBacklight> &levels);
 1428 
 1434 DllSpec int uiGetBacklightConfig(int display, std::vector<UIBacklight> &levels);
 1435 
 1443 DllSpec int uiSetBacklightLevel(int display, int level);
 1444 
 1450 DllSpec int uiGetBacklightLevel(int display, int &level);
 1451 
 1452 
 1460 DllSpec int uiSetInput(int display, int region_id, const std::string &name, const std::string &value);
 1461 
 1463 inline int uiSetInput(int region_id, const std::string &name, const std::string &value)
 1464 {
 1465  return uiSetInput(0,region_id,name,value);
 1466 }
 1467 
 1474 DllSpec int uiRunAction(int display, int region_id, const std::string &name);
 1475 
 1477 inline int uiRunAction(int region_id, const std::string &name)
 1478 {
 1479  return uiRunAction(0,region_id,name);
 1480 }
 1481 
 1482 
 1489 DllSpec int uiRunAction2(int display, int region_id, const std::string &name);
 1490 
 1492 inline int uiRunAction2(int region_id, const std::string &name)
 1493 {
 1494  return uiRunAction2(0,region_id,name);
 1495 }
 1496 
 1510 DllSpec int uiAddOption(int display, int region_id, const std::string &name, const std::string &value, const std::string &text, const std::string &style="", const std::string &action="", int position=-1);
 1511 
 1513 inline int uiAddOption(int region_id, const std::string &name, const std::string &value, const std::string &text, const std::string &style="", const std::string &action="", int position=-1)
 1514 {
 1515  return uiAddOption(0,region_id,name,value,text,style,action,position);
 1516 }
 1517 
 1519 enum UIScrollPosition { UI_SCROLL_TOP,
 1520  UI_SCROLL_BOTTOM
 1521 };
 1522 
 1523 
 1533 DllSpec int uiScrollOption(int display, int region_id, const std::string &name, const std::string &value, UIScrollPosition pos);
 1534 
 1536 inline int uiScrollOption(int region_id, const std::string &name, const std::string &value, UIScrollPosition pos)
 1537 {
 1538  return uiScrollOption(0,region_id,name,value,pos);
 1539 }
 1540 
 1548 DllSpec int uiRemoveOption(int display, int region_id, const std::string &name, const std::string &value);
 1549 
 1551 inline int uiRemoveOption(int region_id, const std::string &name, const std::string &value)
 1552 {
 1553  return uiRemoveOption(0,region_id,name,value);
 1554 }
 1555 
 1563 DllSpec int uiDisablePINOK(int display=0);
 1564 
 1571 DllSpec int uiEnablePINOK(int display=0);
 1572 
 1573 
 1585 DllSpec int uiUpdate(int display, int region_id, const std::string &name, const std::string &html);
 1586 
 1588 inline int uiUpdate(int region_id, const std::string &name, const std::string &html)
 1589 {
 1590  return uiUpdate(0,region_id,name,html);
 1591 }
 1592 
 1594 enum UIBeep {
 1595  UI_BEEP_NORMAL,
 1596  UI_BEEP_ERROR
 1597 };
 1598 
 1604 DllSpec int uiBeep(int display, UIBeep beep);
 1605 
 1607 inline int uiBeep(UIBeep beep) {
 1608  return uiBeep(0,beep);
 1609 }
 1610 
 1611 
 1613 enum UINagScreenType {
 1614  UI_NAG_TEST_DEVICE
 1615 };
 1616 
 1627 DllSpec int uiNagScreen(int display, enum UINagScreenType type, int hide, int show);
 1628 
 1629 /*****************************************************************************/
 1630 /*****************************************************************************/
 1631 /**************************** Canvas interface *******************************/
 1632 /*****************************************************************************/
 1633 /*****************************************************************************/
 1634 
 1636 enum UICanvasEvent {
 1637  UI_PUSH,
 1638  UI_DRAG,
 1639  UI_RELEASE,
 1640  UI_KEYDOWN,
 1641  UI_KEYUP,
 1642  UI_TERMINATE
 1643 };
 1644 
 1656 typedef void (*uiEventCallback)(void *data, UICanvasEvent event, int x, int y, int key, unsigned flags);
 1657 
 1659 class DllSpec UIDrawing {
 1660 
 1661  public:
 1662  vfihtml::JSObject drawlist;
 1663 
 1665  enum {
 1666  FNT_NORMAL=0x0,
 1667  FNT_ITALIC=0x1,
 1668  FNT_BOLD=0x700
 1669  };
 1670 
 1672  enum ImageType {
 1673  IMG_BMP,
 1674  IMG_GIF,
 1675  IMG_JPEG,
 1676  IMG_PAM,
 1677  IMG_PBM,
 1678  IMG_PNG,
 1679  IMG_RAW
 1680  };
 1681 
 1683  UIDrawing();
 1684 
 1686  ~UIDrawing();
 1687 
 1689  void reset();
 1690 
 1693  void clear(unsigned rgb);
 1694 
 1697  void color(unsigned rgb);
 1698 
 1701  void linewidth(int w);
 1702 
 1708  void line(int x, int y, int x2, int y2);
 1709 
 1713  void pixel(int x, int y);
 1714 
 1720  void rect(int x, int y, int w, int h);
 1721 
 1727  void rectf(int x, int y, int w, int h);
 1728 
 1736  void trif(int x, int y, int x2, int y2, int x3, int y3);
 1737 
 1742  void font(const char *name, int size, unsigned style=FNT_NORMAL);
 1743 
 1748  void font(const std::string &name, int size, unsigned style=FNT_NORMAL);
 1749 
 1757  void text(const char *text, int x, int y);
 1758 
 1760  void text(const std::string &text, int x, int y);
 1761 
 1762 
 1778  void image(ImageType type, const void *data, unsigned size, int x, int y, int w=0, int h=0);
 1779 
 1785  void image(const char *filename, int x, int y);
 1786 
 1788  void image(const std::string &filename, int x, int y);
 1789 
 1790 };
 1791 
 1792 
 1800 DllSpec int uiCanvas(int display, int region_id, uiEventCallback cb, void *data=0);
 1801 
 1803 inline int uiCanvas(int region_id, uiEventCallback cb, void *data=0)
 1804 {
 1805  return uiCanvas(0,region_id,cb,data);
 1806 }
 1807 
 1814 DllSpec int uiDraw(int display, int region_id, const UIDrawing &drawing);
 1815 
 1817 inline int uiDraw(int region_id, const UIDrawing &drawing)
 1818 {
 1819  return uiDraw(0,region_id,drawing);
 1820 }
 1821 
 1828 DllSpec int uiDrawAsync(int display, int region_id, const UIDrawing &drawing, uiAsyncCallback cb=0, void *data=0);
 1829 
 1831 inline int uiDrawAsync(int region_id, const UIDrawing &drawing, uiAsyncCallback cb=0, void *data=0)
 1832 {
 1833  return uiDrawAsync(0,region_id,drawing,cb,data);
 1834 }
 1835 
 1837 struct UITextWidth {
 1838  std::string text;
 1839  int width;
 1842  UITextWidth(const std::string &s="") { text=s; width=0; }
 1843 };
 1844 
 1845 
 1857 DllSpec int uiTextMetrics(int display, int region_id, const std::string &font, int size, unsigned style, std::vector<UITextWidth> &width, int &height, int &descent);
 1858 
 1860 inline int uiTextMetrics(int region_id, const std::string &font, int size, unsigned style, std::vector<UITextWidth> &width, int &height, int &descent)
 1861 {
 1862  return uiTextMetrics(0,region_id,font,size,style,width,height,descent);
 1863 }
 1864 
 1865 
 1870 DllSpec const char *uiDataURLType(const std::string &in);
 1871 
 1876 DllSpec bool uiDataURLToString(std::string &out,const std::string &in);
 1877 
 1882 DllSpec bool uiDataURLToFile(const char *filename,const std::string &in);
 1883 
 1884 
 1885 #ifndef DOXYGEN
 1886 } // namespace vfigui
 1887 #endif
 1888 
 1889 
 1892 #undef DllSpec
 1893 
 1894 
 1895 #include "gui_template.h" // add "old" template functions
 1896 
 1897 #endif
```
