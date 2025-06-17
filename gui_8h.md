---
title: guiprt/src/html/gui.h

---

# guiprt/src/html/gui.h



## Namespaces

| Name           |
| -------------- |
| **[vfigui](namespacevfigui.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfigui::UICBData](classvfigui_1_1_u_i_c_b_data.md)**  |
| struct | **[vfigui::UIRegion](structvfigui_1_1_u_i_region.md)**  |
| struct | **[vfigui::UIErrorEntry](structvfigui_1_1_u_i_error_entry.md)**  |
| struct | **[vfigui::UIStatistics](structvfigui_1_1_u_i_statistics.md)**  |
| struct | **[vfigui::UIBacklight](structvfigui_1_1_u_i_backlight.md)**  |
| class | **[vfigui::UIDrawing](classvfigui_1_1_u_i_drawing.md)**  |
| struct | **[vfigui::UITextWidth](structvfigui_1_1_u_i_text_width.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](group__vfigui.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
// -*- Mode: C++; -*-
#ifndef GUI_H_2013_03_14
#define GUI_H_2013_03_14

#include <stdarg.h>
#include <pthread.h>
#include "jsobject.h"
#include "timestamp.h"
#include "gui_error.h"
#include "types.h"

#if defined _WIN32 && defined VFI_GUIPRT_SHARED_EXPORT
#    define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_GUIPRT_SHARED_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

#ifndef DOXYGEN
namespace vfigui {
#endif
#if 0
} // just to satisfy automatic indentation of the editor
#endif

using namespace vfihtml; // import common interfaces

typedef bool (*uiCallback)(void *data);

enum UICBType { UI_CB_RESULT,     
                UI_CB_UPDATE,     
                UI_CB_LOAD,       
                UI_CB_ERROR_LIST, 
                UI_CB_STATISTICS, 
                UI_CB_EVENT       
};

struct UIErrorEntry;
struct UIStatistics;

class UICBData {
 public:

   virtual ~UICBData() {}

   virtual int &result()=0;

   virtual int txn_id()=0;

   virtual stringmap &value()=0;

   virtual std::string &url()=0;

   virtual std::vector<UIErrorEntry> &error()=0;

   virtual std::string &script_error()=0;

   virtual UIStatistics &statistics()=0;

};


typedef void (*uiAsyncCallback)(void *data, UICBType type, UICBData &uidata);

struct UIRegion {
   int id; 
   int left;   
   int top;    
   int right;  
   int bottom; 
   int flags;  
};

enum { UI_REGION_DEFAULT=0      
};

enum {
   UI_REGION_FLAG_HIDDEN=1         
};


DllSpec void uiSetConnectAttempts(int num);

DllSpec int uiGetConnectAttempts();

typedef void (*uiDisconnectCallback)(int display);

DllSpec void uiSetDisconnectCallback(uiDisconnectCallback cb);

DllSpec uiDisconnectCallback uiGetDisconnectCallback();

DllSpec void uiSetKeepalive(int count, int interval);

DllSpec void uiGetKeepalive(int &count, int &interval);

DllSpec void uiDisconnect(int display);

DllSpec int uiReadRuntimeID(int display, std::string &id, int timeout_msec=5000);

DllSpec std::string uiPrint(const char *format, ...);

DllSpec std::string uiPrintV(const char *format, va_list va);


DllSpec int uiDisplayCount();


DllSpec int uiDisplay(int display, int region_id, const std::string &text);

DllSpec int uiDisplay(int region_id, const std::string &text);

inline int uiDisplay(const std::string &text) { return uiDisplay(0,UI_REGION_DEFAULT,text); }


DllSpec int uiInvoke(int display, int region_id, stringmap &value, const std::string &text, uiCallback cb=0, void *cbdata=0);

DllSpec int uiInvoke(int region_id, stringmap &value, const std::string &text, uiCallback cb=0, void *cbdata=0);

inline int uiInvoke(stringmap &value, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ return uiInvoke(0,UI_REGION_DEFAULT,value,text,cb,cbdata); }

inline int uiInvoke(int display, int region_id, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvoke(display, region_id,value,text,cb,cbdata); }

inline int uiInvoke(int region_id, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvoke(0,region_id,value,text,cb,cbdata); }

inline int uiInvoke(const std::string &text, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvoke(0,UI_REGION_DEFAULT,value,text,cb,cbdata); }

DllSpec int uiInvokeTemplate(int display, int region_id, stringmap &value, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0);

DllSpec int uiInvokeTemplate(int region_id, stringmap &value, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0);

inline int uiInvokeTemplate(stringmap &value, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ return uiInvokeTemplate(0,UI_REGION_DEFAULT,value,template_name,text,cb,cbdata); }

inline int uiInvokeTemplate(int display, int region_id, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvokeTemplate(display,region_id,value,template_name,text,cb,cbdata); }

inline int uiInvokeTemplate(int region_id, const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvokeTemplate(0,region_id,value,template_name,text,cb,cbdata); }

inline int uiInvokeTemplate(const std::string &template_name, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvokeTemplate(0,UI_REGION_DEFAULT,value,template_name,text,cb,cbdata); }


DllSpec int uiInvokeURL(int display, int region_id, stringmap &value, const char *url, uiCallback cb=0, void *cbdata=0);

DllSpec int uiInvokeURL(int region_id, stringmap &value, const char *url, uiCallback cb=0, void *cbdata=0);

inline int uiInvokeURL(stringmap &value, const char *url, uiCallback cb=0, void *cbdata=0)
{ return uiInvokeURL(0,UI_REGION_DEFAULT,value,url,cb,cbdata); }

inline int uiInvokeURL(int display, int region_id, const char *url, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvokeURL(display, region_id,value,url,cb,cbdata); }

inline int uiInvokeURL(int region_id, const char *url, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvokeURL(0,region_id,value,url,cb,cbdata); }

inline int uiInvokeURL(const char *url, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvokeURL(0,UI_REGION_DEFAULT,value,url,cb,cbdata); }


DllSpec int uiInvokeURL(int display, int region_id, stringmap &value, const std::string &url, uiCallback cb=0, void *cbdata=0);

inline int uiInvokeURL(int region_id, stringmap &value, const std::string &url, uiCallback cb=0, void *cbdata=0)
{ return uiInvokeURL(0,region_id,value,url,cb,cbdata); }

inline int uiInvokeURL(stringmap &value, const std::string &url, uiCallback cb=0, void *cbdata=0)
{ return uiInvokeURL(0,UI_REGION_DEFAULT,value,url,cb,cbdata); }

inline int uiInvokeURL(int display, int region_id, const std::string &url, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvokeURL(display,region_id,value,url,cb,cbdata); }

inline int uiInvokeURL(int region_id, const std::string &url, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvokeURL(0,region_id,value,url,cb,cbdata); }

inline int uiInvokeURL(const std::string &url, uiCallback cb=0, void *cbdata=0)
{ stringmap value; return uiInvokeURL(0,UI_REGION_DEFAULT, value,url,cb,cbdata); }


DllSpec int uiInvokeAsync(int display, int region_id, const stringmap &value, const std::string &text, uiAsyncCallback cb=0, void *data=0);

DllSpec int uiInvokeAsync(int region_id, const stringmap &value, const std::string &text, uiAsyncCallback cb=0, void *data=0);

inline int uiInvokeAsync(const stringmap &value, const std::string &text, uiAsyncCallback cb=0, void *data=0)
{ return uiInvokeAsync(0,UI_REGION_DEFAULT, value, text,cb,data); }

inline int uiInvokeAsync(int display, int region_id, const std::string &text, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeAsync(display, region_id,value,text,cb,data); }

inline int uiInvokeAsync(int region_id, const std::string &text, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeAsync(0,region_id,value,text,cb,data); }

inline int uiInvokeAsync(const std::string &text, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeAsync(0,UI_REGION_DEFAULT, value, text,cb,data); }

DllSpec int uiInvokeTemplateAsync(int display, int region_id, const stringmap &value, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0);

DllSpec int uiInvokeTemplateAsync(int region_id, const stringmap &value, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0);

inline int uiInvokeTemplateAsync(const stringmap &value, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0)
{ return uiInvokeTemplateAsync(0, UI_REGION_DEFAULT, value, template_name, text, cb,data); }

inline int uiInvokeTemplateAsync(int display, int region_id, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeTemplateAsync(display,region_id,value,template_name,text, cb,data); }

inline int uiInvokeTemplateAsync(int region_id, const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeTemplateAsync(0,region_id,value,template_name,text, cb,data); }

inline int uiInvokeTemplateAsync(const std::string &template_name, const std::string &text, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeTemplateAsync(0,UI_REGION_DEFAULT, value, template_name, text, cb,data); }


DllSpec int uiInvokeURLAsync(int display, int region_id, const stringmap &value, const char *url, uiAsyncCallback cb=0, void *data=0);

DllSpec int uiInvokeURLAsync(int region_id, const stringmap &value, const char *url, uiAsyncCallback cb=0, void *data=0);

inline int uiInvokeURLAsync(const stringmap &value, const char *url, uiAsyncCallback cb=0, void *data=0)
{ return uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); }

inline int uiInvokeURLAsync(int display, int region_id,const char *url, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeURLAsync(display, region_id,value,url,cb,data); }

inline int uiInvokeURLAsync(int region_id,const char *url, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeURLAsync(0,region_id,value,url,cb,data); }

inline int uiInvokeURLAsync(const char *url, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); }


DllSpec int uiInvokeURLAsync(int display, int region_id, const stringmap &value, const std::string &url, uiAsyncCallback cb=0, void *data=0);

inline int uiInvokeURLAsync(int region_id, const stringmap &value, const std::string &url, uiAsyncCallback cb=0, void *data=0)
{ return uiInvokeURLAsync(0, region_id, value, url,cb,data); }

inline int uiInvokeURLAsync(const stringmap &value, const std::string &url, uiAsyncCallback cb=0, void *data=0)
{ return uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); }

inline int uiInvokeURLAsync(int display, int region_id,const std::string &url, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeURLAsync(display, region_id,value,url,cb,data); }

inline int uiInvokeURLAsync(int region_id,const std::string &url, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeURLAsync(0,region_id,value,url,cb,data); }

inline int uiInvokeURLAsync(const std::string &url, uiAsyncCallback cb=0, void *data=0)
{ stringmap value; return uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); }


DllSpec int uiInvokeWait(int txn_id, std::map<std::string,std::string> &value, int timeout_msec=-1);


inline int uiInvokeWait(int txn_id, int timeout_msec=-1)
{
   std::map<std::string,std::string> value;
   return uiInvokeWait(txn_id,value,timeout_msec);
}

DllSpec int uiInvokeCancel(int txn_id, std::map<std::string,std::string> &value);

inline int uiInvokeCancel(int txn_id)
{
   std::map<std::string,std::string> value;
   return uiInvokeCancel(txn_id,value);
}

DllSpec int uiInvokeCancelAsync(int txn_id);

DllSpec int uiInvokeURLDetached(int display, int region_id, const char *url);

DllSpec int uiInvokeURLDetached(int region_id, const char *url);

inline int uiInvokeURLDetached(const char *url)
{ return uiInvokeURLDetached(0, UI_REGION_DEFAULT,url); }


DllSpec int uiClear(int display, int region_id);

inline int uiClear(int region_id) { return uiClear(0,region_id); }

enum UIPropertyInt {
   UI_PROP_TIMEOUT=0,                
   UI_PROP_PASSWORD_CHAR,            
   UI_PROP_DEFAULT_FONT_SIZE,        
   UI_PROP_PIN_AUTO_ENTER,           
   UI_PROP_PIN_CLEAR_ALL,            
   UI_PROP_PIN_BYPASS_KEY,           
   UI_PROP_PIN_ALGORITHM,            
   UI_PROP_PIN_INTERCHAR_TIMEOUT,    
   UI_PROP_PASSWORD_SHOW_CHAR,       
   UI_PROP_KEEP_DISPLAY,             
   UI_PROP_UPDATE_EVENTS,            
   UI_PROP_CIRCULAR_MENU,            
   UI_PROP_TOUCH_ACTION_BEEP,        
   UI_PROP_STATISTICS,               
   UI_PROP_RESTRICTED,               
   UI_PROP_CP_APP_MODE,              
   UI_PROP_SCROLL_COLOR,             
   UI_PROP_INPUT_ERROR_BEEP,         
   UI_PROP_ZOOM_MAX,                 
   UI_PROP_SCROLL_DISPLAY,           
   UI_PROP_JS_QUOTA_SIZE,               
   UI_PROP_SCROLL_WIDTH,             
   // Readonly properties
   UI_DEVICE_WIDTH=1000,             
   UI_DEVICE_HEIGHT,                 
   UI_DEVICE_COLOR_DEPTH,            
   UI_DEVICE_SUPPORTS_TOUCH,         
   UI_DEVICE_SUPPORTS_BEEPER,        // not supported, do not use. Left here for compatibility reasons.
   UI_DEVICE_SUPPORTS_AUDIO,         
   UI_DEVICE_SUPPORTS_VIDEO,         
   UI_DEVICE_SUPPORTS_SIGCAP,        
   UI_DEVICE_SUPPORTS_COLOR_DISPLAY, 
   UI_DEVICE_HAS_CAP_TOUCH_KEYPAD,   
   UI_DEVICE_SUPPORTS_NAVIGATOR_MODE,
   UI_DEVICE_KEY_COUNT               
};

enum UIPropertyString {
   UI_PROP_DECIMAL_SEPARATOR=2000, 
   UI_PROP_THOUSANDS_SEPARATOR,    
   UI_PROP_DEFAULT_FONT,           
   UI_PROP_RESOURCE_PATH,          
   UI_PROP_FILE_PREFIX,            
   UI_PROP_KEYMAP,                 
   UI_PROP_CSS,                    
   UI_PROP_RESOURCE_DEFAULT_PATH,  
   UI_PROP_GUI_EXTENSIONS,         
   UI_PROP_HTTP_HEADER_FIELDS,     
   UI_PROP_CP_APP_DIR,             
   UI_PROP_LANGUAGE,               
   UI_PROP_JS_ROOT,                
   UI_PROP_PRINT_ROOT,             
   UI_PROP_PRINT_CSS,              
   UI_PROP_JS_QUOTA_ROOT,          
   // Readonly properties
   UI_DEVICE_MODEL=3000            
};

DllSpec int uiSetPropertyInt(int display, enum UIPropertyInt property, int value);

DllSpec int uiSetPropertyInt(enum UIPropertyInt property, int value);

DllSpec int uiGetPropertyInt(int display, enum UIPropertyInt property, int *value);

DllSpec int uiGetPropertyInt(enum UIPropertyInt property, int *value);

DllSpec int uiSetPropertyString(int display, enum UIPropertyString property, const char *value);

DllSpec int uiSetPropertyString(enum UIPropertyString property, const char *value);

inline int uiSetPropertyString(int display, enum UIPropertyString property, const std::string &value)
{ return uiSetPropertyString(display,property,value.c_str()); }

inline int uiSetPropertyString(enum UIPropertyString property, const std::string &value)
{ return uiSetPropertyString(0,property,value.c_str()); }

DllSpec int uiGetPropertyString(int display, enum UIPropertyString property, char* value, int len);

DllSpec int uiGetPropertyString(enum UIPropertyString property, char* value, int len);

DllSpec int uiGetPropertyString(int display, enum UIPropertyString property, std::string &value);

DllSpec int uiGetPropertyString(enum UIPropertyString property, std::string &value);


enum UIServerProperty {
   UI_SERVER_TOUCH_ACTION_BEEP, 
   UI_SERVER_INPUT_ERROR_BEEP, 
   UI_SERVER_KEYMAP,           
};

DllSpec int uiSetServerProperty(int display, enum UIServerProperty property, const std::string &value);

DllSpec int uiGetServerProperty(int display, enum UIServerProperty property, std::string &value);

DllSpec std::string uiGetTerminalResourceDir(int display, const std::string &www_path);

DllSpec std::string uiGetTerminalResourceDir(const std::string &www_path);

DllSpec std::string uiGetKeypadType(int display);

DllSpec void uiSetLocalProperties(bool local);

DllSpec bool uiGetLocalProperties();

DllSpec int uiLayout(int display, const UIRegion *region, int regcnt, const UIRegion *oldreg, int oldregcnt);

DllSpec int uiLayout(const UIRegion *region, int regcnt, const UIRegion *oldreg, int oldregcnt);

DllSpec int uiLayout(int display, const UIRegion *region, int regcnt);

DllSpec int uiLayout(const UIRegion *region, int regcnt);

inline int uiLayout(int display, const std::vector<UIRegion> &reg) {
   UIRegion dummy;
   return uiLayout(display, reg.size() ? &reg[0] : &dummy,reg.size());
}

inline int uiLayout(const std::vector<UIRegion> &reg) {
   UIRegion dummy;
   return uiLayout(0, reg.size() ? &reg[0] : &dummy,reg.size());
}

inline int uiLayout(int display, const std::vector<UIRegion> &reg, const std::vector<UIRegion> &oldreg)
{
   UIRegion dummy;
   return uiLayout(display, reg.size() ? &reg[0] : &dummy,reg.size(), oldreg.size() ? &oldreg[0] : &dummy, oldreg.size());
}

inline int uiLayout(const std::vector<UIRegion> &reg, const std::vector<UIRegion> &oldreg)
{
   UIRegion dummy;
   return uiLayout(0,reg.size() ? &reg[0] : &dummy,reg.size(), oldreg.size() ? &oldreg[0] : &dummy, oldreg.size());
}

DllSpec int uiLayout(int display, const char *name);

DllSpec int uiLayout(const char *name);

DllSpec int uiGetLayout(int display, std::vector<UIRegion> &region);

DllSpec int uiGetLayout(std::vector<UIRegion> &region);

DllSpec int uiGetRegionSize(int display, int region_id, int &width, int &height);

inline int uiGetRegionSize(int region_id, int &width, int &height)
{
   return uiGetRegionSize(0,region_id,width,height);
}

DllSpec int uiEnterRegion(int display, int region_id);

DllSpec int uiEnterRegion(int region_id);

DllSpec int uiLeaveRegion(int display);

DllSpec int uiLeaveRegion();

DllSpec std::string uiCurrentRegionPath(int display);

DllSpec std::string uiCurrentRegionPath();

DllSpec int uiSetCurrentRegionPath(int display, const std::string &path);

DllSpec int uiSetCurrentRegionPath(const std::string &path);


DllSpec int uiRegionIsVisible(int display, int region_id);

inline int uiRegionIsVisible(int region_id)
{return uiRegionIsVisible(0,region_id); }


DllSpec void uiReadConfig(int display);

DllSpec void uiReadConfig();


DllSpec int uiSetCatalog(int display, const std::string &filename);

DllSpec int uiSetCatalog(const std::string &filename);

DllSpec std::string uiGetCatalog(int display);

DllSpec std::string uiGetCatalog();

DllSpec void uiCatalogSetDelayedRelease(unsigned num);

DllSpec unsigned uiCatalogGetDelayedRelease();


DllSpec std::string uiGetText(int display, const std::string &name, const std::string &deflt="");

DllSpec std::string uiGetText(const std::string &name, const std::string &deflt="");

DllSpec std::string uiGetText(int display, const std::string &filename, const std::string &name, const std::string &deflt);

DllSpec std::string uiGetText(const std::string &filename, const std::string &name, const std::string &deflt);

DllSpec int uiGetHtml(int display, const std::map<std::string,std::string> &value, const std::string &text, std::string &html);

DllSpec int uiGetHtml(const std::map<std::string,std::string> &value, const std::string &text, std::string &html);

DllSpec int uiGetHtmlURL(int display, const std::map<std::string,std::string> &value, const std::string &url, std::string &html);

DllSpec int uiGetHtmlURL(const std::map<std::string,std::string> &value, const std::string &url, std::string &html);


DllSpec std::string uiGetURLPath(int display, const std::string &url);

DllSpec std::string uiGetURLPath(const std::string &url);


DllSpec int uiScreenshotPNG(int display, const char *filename);

DllSpec int uiScreenshotPNG(const char *filename);

DllSpec int uiScreenshotPNG(int display, const char *filename, int x, int y, int w, int h);

inline int uiScreenshotPNG(const char *filename, int x, int y, int w, int h)
{
   return uiScreenshotPNG(0,filename,x,y,w,h);
}


DllSpec int uiScreenshotPNGData(int display, std::vector<unsigned char> &data);

DllSpec int uiScreenshotPNGData(std::vector<unsigned char> &data);

DllSpec int uiScreenshotPNGData(int display, std::vector<unsigned char> &data, int x, int y, int w, int h);

inline int uiScreenshotPNGData(std::vector<unsigned char> &data, int x, int y, int w, int h)
{
   return uiScreenshotPNGData(0,data,x,y,w,h);
}


DllSpec int uiURL2PNG(const char *filename, int width, int height, const std::map<std::string,std::string> &value, const std::string &url);

DllSpec int uiURL2PNGData(std::vector<unsigned char> &data, int width, int height, const std::map<std::string,std::string> &value, const std::string &url);

DllSpec int uiHTML2PNG(const char *filename, int width, int height, const std::map<std::string,std::string> &value, const std::string &text);

DllSpec int uiHTML2PNGData(std::vector<unsigned char> &data, int width, int height, const std::map<std::string,std::string> &value, const std::string &text);

DllSpec const char *uiLibVersion();

DllSpec const char *gui_GetVersion();


DllSpec const char *gui_GetSvcVersion(int display);
DllSpec const char *gui_GetSvcVersion();

enum {
   // lowest 4 bits: direction flags
   UI_TRANS_UP     =0x1,  
   UI_TRANS_RIGHT  =0x2,  
   UI_TRANS_DOWN   =0x4,  
   UI_TRANS_LEFT   =0x8,  
   UI_TRANS_DIRECTION_MASK=0xf, 
   // 2 bits affecting speed:
   UI_TRANS_EASE_IN    =0x10, 
   UI_TRANS_EASE_OUT   =0x20, 
   UI_TRANS_EASE_INOUT =0x30, 
   UI_TRANS_EASE_MASK=0x30, 
   // Transition type
   UI_TRANS_NONE     =0x000, 
   UI_TRANS_SLIDE    =0x100, 
   UI_TRANS_SLIDEON  =0x200, 
   UI_TRANS_SWAP     =0x300, 
   UI_TRANS_CROSSFADE=0x400, 
   UI_TRANS_TYPE_MASK=0xfff00 
};

DllSpec int uiSetTransition(int display, int region_id, unsigned transtype, int duration_ms);

DllSpec int uiSetTransition(int region_id, unsigned transtype, int duration_ms);

inline int uiSetTransition(unsigned transtype, int duration_ms)
{ return uiSetTransition(0,UI_REGION_DEFAULT,transtype,duration_ms); }


struct UIErrorEntry {
   enum ErrorType { NOT_FOUND,   
                    UNSUPPORTED, 
                    CORRUPT      
   } type; 
   std::string name; 
   UIErrorEntry(ErrorType t, const std::string &n) :type(t),name(n) {}
};

DllSpec const std::vector<UIErrorEntry> &uiErrorList();

struct UIStatistics {
   vfigui::TimeStamp start;  
   vfigui::TimeStamp css;    
   vfigui::TimeStamp html;   
   vfigui::TimeStamp draw;   
};


DllSpec const UIStatistics &uiStatistics();


DllSpec std::string uiScriptError();


DllSpec int uiGetIdleTime(int display=0);

DllSpec void uiSetLogMask(unsigned mask);

DllSpec unsigned uiGetLogMask(void);

enum UILEDShape {
   UI_SHAPE_RECTANGLE,  
   UI_SHAPE_ELLIPSE     
};

DllSpec int uiConfigLEDs(int display,
                         UILEDShape shape, int width, int height,
                         unsigned off_rgba,
                         unsigned on0_rgba, unsigned on1_rgba, unsigned on2_rgba, unsigned on3_rgba);

DllSpec int uiConfigLEDs(UILEDShape shape, int width, int height,
                         unsigned off_rgba,
                         unsigned on0_rgba, unsigned on1_rgba, unsigned on2_rgba, unsigned on3_rgba);


DllSpec int uiConfigLEDs(int display, const char *filename);

DllSpec int uiConfigLEDs(const char *filename);

enum UIEdge {
   UI_EDGE_TOP,  
   UI_EDGE_RIGHT,  
   UI_EDGE_BOTTOM, 
   UI_EDGE_LEFT    
};

DllSpec int uiShowLEDArea(int display, UIEdge edge, int width, int height, unsigned bg_rgba);

DllSpec int uiShowLEDArea(UIEdge edge, int width, int height, unsigned bg_rgba);

DllSpec int uiHideLEDArea(int display);

DllSpec int uiHideLEDArea();

DllSpec int uiSetLED(int display, unsigned led, bool state);

DllSpec int uiSetLED(unsigned led, bool state);


struct UIBacklight {
   unsigned brightness; 
   unsigned timeout;    
};

DllSpec int uiSetBacklightConfig(int display, const std::vector<UIBacklight> &levels);

DllSpec int uiGetBacklightConfig(int display, std::vector<UIBacklight> &levels);

DllSpec int uiSetBacklightLevel(int display, int level);

DllSpec int uiGetBacklightLevel(int display, int &level);


DllSpec int uiSetInput(int display, int region_id, const std::string &name, const std::string &value);

inline int uiSetInput(int region_id, const std::string &name, const std::string &value)
{
   return uiSetInput(0,region_id,name,value);
}

DllSpec int uiRunAction(int display, int region_id, const std::string &name);

inline int uiRunAction(int region_id, const std::string &name)
{
   return uiRunAction(0,region_id,name);
}


DllSpec int uiRunAction2(int display, int region_id, const std::string &name);

inline int uiRunAction2(int region_id, const std::string &name)
{
   return uiRunAction2(0,region_id,name);
}

DllSpec int uiAddOption(int display, int region_id, const std::string &name, const std::string &value, const std::string &text, const std::string &style="", const std::string &action="", int position=-1);

inline int uiAddOption(int region_id, const std::string &name, const std::string &value, const std::string &text, const std::string &style="", const std::string &action="", int position=-1)
{
   return uiAddOption(0,region_id,name,value,text,style,action,position);
}

enum UIScrollPosition { UI_SCROLL_TOP,   
                        UI_SCROLL_BOTTOM 
};


DllSpec int uiScrollOption(int display, int region_id, const std::string &name, const std::string &value, UIScrollPosition pos);

inline int uiScrollOption(int region_id, const std::string &name, const std::string &value, UIScrollPosition pos)
{
   return uiScrollOption(0,region_id,name,value,pos);
}

DllSpec int uiRemoveOption(int display, int region_id, const std::string &name, const std::string &value);

inline int uiRemoveOption(int region_id, const std::string &name, const std::string &value)
{
   return uiRemoveOption(0,region_id,name,value);
}

DllSpec int uiDisablePINOK(int display=0);

DllSpec int uiEnablePINOK(int display=0);


DllSpec int uiUpdate(int display, int region_id, const std::string &name, const std::string &html);

inline int uiUpdate(int region_id, const std::string &name, const std::string &html)
{
   return uiUpdate(0,region_id,name,html);
}

enum UIBeep {
   UI_BEEP_NORMAL, 
   UI_BEEP_ERROR   
};

DllSpec int uiBeep(int display, UIBeep beep);

inline int uiBeep(UIBeep beep) {
   return uiBeep(0,beep);
}


enum UINagScreenType {
   UI_NAG_TEST_DEVICE 
};

DllSpec int uiNagScreen(int display, enum UINagScreenType type, int hide, int show);

/*****************************************************************************/
/*****************************************************************************/
/**************************** Canvas interface *******************************/
/*****************************************************************************/
/*****************************************************************************/

enum UICanvasEvent {
   UI_PUSH,   
   UI_DRAG,   
   UI_RELEASE,
   UI_KEYDOWN,
   UI_KEYUP,  
   UI_TERMINATE 
};

typedef void (*uiEventCallback)(void *data, UICanvasEvent event, int x, int y, int key, unsigned flags);

class DllSpec UIDrawing {

 public:
   vfihtml::JSObject drawlist;

   enum {
      FNT_NORMAL=0x0, 
      FNT_ITALIC=0x1, 
      FNT_BOLD=0x700  
   };

   enum ImageType {
      IMG_BMP,  
      IMG_GIF,  
      IMG_JPEG, 
      IMG_PAM,  
      IMG_PBM,  
      IMG_PNG,  
      IMG_RAW   
   };

   UIDrawing();

   ~UIDrawing();

   void reset();

   void clear(unsigned rgb);

   void color(unsigned rgb);

   void linewidth(int w);

   void line(int x, int y, int x2, int y2);

   void pixel(int x, int y);

   void rect(int x, int y, int w, int h);

   void rectf(int x, int y, int w, int h);

   void trif(int x, int y, int x2, int y2, int x3, int y3);

   void font(const char *name, int size, unsigned style=FNT_NORMAL);

   void font(const std::string &name, int size, unsigned style=FNT_NORMAL);

   void text(const char *text, int x, int y);

   void text(const std::string &text, int x, int y);


   void image(ImageType type, const void *data, unsigned size, int x, int y, int w=0, int h=0);

   void image(const char *filename, int x, int y);

   void image(const std::string &filename, int x, int y);

};


DllSpec int uiCanvas(int display, int region_id, uiEventCallback cb, void *data=0);

inline int uiCanvas(int region_id, uiEventCallback cb, void *data=0)
{
   return uiCanvas(0,region_id,cb,data);
}

DllSpec int uiDraw(int display, int region_id, const UIDrawing &drawing);

inline int uiDraw(int region_id, const UIDrawing &drawing)
{
   return uiDraw(0,region_id,drawing);
}

DllSpec int uiDrawAsync(int display, int region_id, const UIDrawing &drawing, uiAsyncCallback cb=0, void *data=0);

inline int uiDrawAsync(int region_id, const UIDrawing &drawing, uiAsyncCallback cb=0, void *data=0)
{
   return uiDrawAsync(0,region_id,drawing,cb,data);
}

struct UITextWidth {
   std::string text; 
   int width;        
   UITextWidth(const std::string &s="") { text=s; width=0; }
};


DllSpec int uiTextMetrics(int display, int region_id, const std::string &font, int size, unsigned style, std::vector<UITextWidth> &width, int &height, int &descent);

inline int uiTextMetrics(int region_id, const std::string &font, int size, unsigned style, std::vector<UITextWidth> &width, int &height, int &descent)
{
   return uiTextMetrics(0,region_id,font,size,style,width,height,descent);
}


DllSpec const char *uiDataURLType(const std::string &in);

DllSpec bool uiDataURLToString(std::string &out,const std::string &in);

DllSpec bool uiDataURLToFile(const char *filename,const std::string &in);


#ifndef DOXYGEN
} // namespace vfigui
#endif


#undef DllSpec


#include "gui_template.h" // add "old" template functions

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
