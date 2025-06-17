---
title: guiprt/src/html/prt.h

---

# guiprt/src/html/prt.h



## Namespaces

| Name           |
| -------------- |
| **[vfihtml](namespacevfihtml.md)**  |
| **[vfiprt](namespacevfiprt.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfiprt::prtControlSeq](structvfiprt_1_1prt_control_seq.md)**  |
| struct | **[vfiprt::PrtErrorEntry](structvfiprt_1_1_prt_error_entry.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](group__vfiprt.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
/**********************************************************
  Copyright:  Verifone GmbH 2013

  Entity:     HTML Printer
  Filename:   prt.h
  Date:       May 2013

**********************************************************/
#ifndef PRINTER_IF_H_20130513
#define PRINTER_IF_H_20130513

#include <stdarg.h>
#include "types.h"
#include <vector>

#if defined _WIN32 && defined VFI_GUIPRT_SHARED_EXPORT
#  define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_GUIPRT_SHARED_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

#ifndef DOXYGEN
namespace vfihtml {}
namespace vfiprt {
#endif

#if 0
} // just to satisfy automatic indentation of the editor
#endif

using namespace vfihtml; // import common interfaces

enum PrtError
{
  PRT_OK                 =  0,    
  // error codes from RawPrinter
  PRT_BUSY               = -1,    
  PRT_PAPERJAM           = -2,    
  PRT_HEADOPEN           = -3,    
  PRT_PAPEREND           = -4,    
  PRT_OVERHEAT           = -5,    
  PRT_OVERVOLTAGE        = -6,    
  PRT_UNDERVOLTAGE       = -7,    
  PRT_FAIL               = -8,    
  PRT_SCRIPT_ERROR       = -9,    
  PRT_NO_PRINTER         = -10,   
  PRT_BATTERY            = -11,   
  PRT_UNSUPPORTED        = -20,    
  // additional error codes
  PRT_INVALID_PARAM      = -21,    
  PRT_NO_RESOURCE        = -22,    
  PRT_FILE_NOT_FOUND     = -23,    
  PRT_PROTOCOL           = -24,    
  // transient error codes
  PRT_FINAL_RESULT       =- 40,    
  PRT_TIMEOUT            = -41     
};

inline bool prtFinalResult(int x) { return x>PRT_FINAL_RESULT; }


enum PrtMode {
   PRT_PREFER_GRAPHICS, PRT_PREFER_TEXT
};

enum PrtPropertyInt {
   PRT_PROP_STATE=0,          
   PRT_PROP_HEAD_TEMP,        
   PRT_PROP_HEAD_VOLTAGE,     
   PRT_PROP_PIXEL_WIDTH,      
   PRT_PROP_CONTRAST,         
   PRT_PROP_DEFAULT_FONT_SIZE, 
   PRT_PROP_PRINT_MODE,       
   PRT_PROP_JS_QUOTA_SIZE     
};

enum PrtPropertyString {
   PRT_PROP_RESOURCE_PATH, 
   PRT_PROP_FILE_PREFIX,   
   PRT_PROP_DEFAULT_FONT,  
   PRT_PROP_CSS,           
   PRT_PROP_INIFILE,       
   PRT_PROP_JS_ROOT,       
   PRT_PROP_DEVICE,        
   PRT_PROP_JS_QUOTA_ROOT, 
   PRT_PROP_CP_APP_DIR     
};

DllSpec int prtSetPropertyInt(enum PrtPropertyInt property, int value);

DllSpec int prtGetPropertyInt(enum PrtPropertyInt property, int *value);

DllSpec int prtSetPropertyString(enum PrtPropertyString property, const char* value);

inline int prtSetPropertyString(enum PrtPropertyString property, const std::string &value)
{ return prtSetPropertyString(property,value.c_str()); }

DllSpec int prtGetPropertyString(enum PrtPropertyString property, char* value, int len);

DllSpec int prtGetPropertyString(enum PrtPropertyString property, std::string &value);

DllSpec std::string prtFormat(const char *format, ...);

DllSpec std::string prtFormatV(const char *format, va_list va);


DllSpec enum PrtError prtURL(const stringmap &value, const char *url, bool landscape=false);

inline enum PrtError prtURL(const stringmap &value, const std::string &url, bool landscape=false)
{ return prtURL(value,url.c_str(),landscape); }


inline enum PrtError prtURL(const char *url, bool landscape=false)
{ stringmap value; return prtURL(value,url,landscape); }


inline enum PrtError prtURL(const std::string &url, bool landscape=false)
{ return prtURL(url.c_str(),landscape); }

DllSpec enum PrtError prtHTML(const stringmap &value,const std::string &text, bool landscape=false);

inline enum PrtError prtHTML(const std::string &text, bool landscape=false)
{ stringmap value;  return prtHTML(value,text,landscape); }


typedef void (*prtAsyncCallback)(void *data);


DllSpec enum PrtError prtURLAsync(const stringmap &value, const char *url, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0);

inline enum PrtError prtURLAsync(const stringmap &value, const std::string &url, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0)
{ return prtURLAsync(value,url.c_str(),landscape, cb,cbdata); }


inline enum PrtError prtURLAsync(const char *url, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0)
{ stringmap value; return prtURLAsync(value,url,landscape,cb,cbdata); }

inline enum PrtError prtURLAsync(const std::string &url, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0)
{ return prtURLAsync(url.c_str(),landscape,cb,cbdata); }

DllSpec enum PrtError prtHTMLAsync(const stringmap &value, const std::string &text, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0);

inline enum PrtError prtHTMLAsync(const std::string &text, bool landscape=false, prtAsyncCallback cb=0, void *cbdata=0)
{ stringmap value; return prtHTMLAsync(value,text,landscape,cb,cbdata); }

DllSpec enum PrtError prtWait(int timeout_msec=-1);

DllSpec enum PrtError prtURL2PNG(const char *destfile, int width, const stringmap &value, const char *url, bool landscape=false);

inline enum PrtError prtURL2PNG(const std::string &destfile, int width, const stringmap &value, const char *url, bool landscape=false)
{ return prtURL2PNG(destfile.c_str(),width,value,url,landscape); }

inline enum PrtError prtURL2PNG(const char *destfile, int width, const stringmap &value, const std::string &url, bool landscape=false)
{ return prtURL2PNG(destfile,width,value,url.c_str(),landscape); }

inline enum PrtError prtURL2PNG(const std::string &destfile, int width, const stringmap &value, const std::string &url, bool landscape=false)
{ return prtURL2PNG(destfile.c_str(),width,value,url.c_str(),landscape); }



inline enum PrtError prtURL2PNG(const char *destfile, int width, const char *url, bool landscape=false)
{
   stringmap value;
   return prtURL2PNG(destfile,width,value,url,landscape);
}

inline enum PrtError prtURL2PNG(const std::string &destfile, int width, const char *url, bool landscape=false)
{ return prtURL2PNG(destfile.c_str(),width,url,landscape); }

inline enum PrtError prtURL2PNG(const char *destfile, int width, const std::string &url, bool landscape=false)
{ return prtURL2PNG(destfile,width,url.c_str(),landscape); }

inline enum PrtError prtURL2PNG(const std::string &destfile, int width, const std::string &url, bool landscape=false)
{ return prtURL2PNG(destfile.c_str(),width,url.c_str(),landscape); }


DllSpec enum PrtError prtHTML2PNG(const char *destfile, int width, const stringmap &value, const std::string &text, bool landscape=false);

inline enum PrtError prtHTML2PNG(const char *destfile, int width, const std::string &text, bool landscape=false)
{
   stringmap value;
   return prtHTML2PNG(destfile,width,value,text,landscape);
}

inline enum PrtError prtHTML2PNG(const std::string &destfile, int width, const std::string &text, bool landscape=false)
{ return prtHTML2PNG(destfile.c_str(),width,text,landscape); }

DllSpec enum PrtError prtURL2ColorPNG(const char *destfile, int width, const stringmap &value, const char *url, bool landscape=false);

inline enum PrtError prtURL2ColorPNG(const std::string &destfile, int width, const stringmap &value, const char *url, bool landscape=false)
{ return prtURL2ColorPNG(destfile.c_str(),width,value,url,landscape); }

inline enum PrtError prtURL2ColorPNG(const char *destfile, int width, const stringmap &value, const std::string &url, bool landscape=false)
{ return prtURL2ColorPNG(destfile,width,value,url.c_str(),landscape); }

inline enum PrtError prtURL2ColorPNG(const std::string &destfile, int width, const stringmap &value, const std::string &url, bool landscape=false)
{ return prtURL2ColorPNG(destfile.c_str(),width,value,url.c_str(),landscape); }



inline enum PrtError prtURL2ColorPNG(const char *destfile, int width, const char *url, bool landscape=false)
{
   stringmap value;
   return prtURL2ColorPNG(destfile,width,value,url,landscape);
}

inline enum PrtError prtURL2ColorPNG(const std::string &destfile, int width, const char *url, bool landscape=false)
{ return prtURL2ColorPNG(destfile.c_str(),width,url,landscape); }

inline enum PrtError prtURL2ColorPNG(const char *destfile, int width, const std::string &url, bool landscape=false)
{ return prtURL2ColorPNG(destfile,width,url.c_str(),landscape); }

inline enum PrtError prtURL2ColorPNG(const std::string &destfile, int width, const std::string &url, bool landscape=false)
{ return prtURL2ColorPNG(destfile.c_str(),width,url.c_str(),landscape); }


DllSpec enum PrtError prtHTML2ColorPNG(const char *destfile, int width, const stringmap &value, const std::string &text, bool landscape=false);

inline enum PrtError prtHTML2ColorPNG(const char *destfile, int width, const std::string &text, bool landscape=false)
{
   stringmap value;
   return prtHTML2ColorPNG(destfile,width,value,text,landscape);
}

inline enum PrtError prtHTML2ColorPNG(const std::string &destfile, int width, const std::string &text, bool landscape=false)
{ return prtHTML2ColorPNG(destfile.c_str(),width,text,landscape); }


struct prtControlSeq {
   std::string fontNormal;             
   std::string fontDoubleHeight;       
   std::string fontDoubleWidth;        
   std::string fontDoubleWidthHeight;  
   std::string italicOff;              
   std::string italicOn;               
   std::string boldOff;                
   std::string boldOn;                 
   std::string underlineOff;           
   std::string underlineOn;            
};

DllSpec enum PrtError prtURL2Text(std::string &result, int width, const stringmap &value, const char *url, const prtControlSeq &ctrl);

inline enum PrtError prtURL2Text(std::string &result, int width, const stringmap &value, const std::string &url, const prtControlSeq &ctrl)
{ return prtURL2Text(result,width,value,url.c_str(),ctrl); }

inline enum PrtError prtURL2Text(std::string &result, int width, const char *url, const prtControlSeq &ctrl)
{ stringmap value; return prtURL2Text(result,width,value,url,ctrl); }

inline enum PrtError prtURL2Text(std::string &result, int width, const std::string &url, const prtControlSeq &ctrl)
{ return prtURL2Text(result,width,url.c_str(),ctrl); }

DllSpec enum PrtError prtHTML2Text(std::string &result, int width, const stringmap &value, const std::string &text, const prtControlSeq &ctrl);

inline enum PrtError prtHTML2Text(std::string &result, int width, const std::string &text, const prtControlSeq &ctrl)
{ stringmap value; return prtHTML2Text(result,width,value,text,ctrl); }

DllSpec int prtGetFD();

DllSpec int prtSetCatalog(const std::string &filename);

DllSpec void prtCatalogSetDelayedRelease(unsigned num);

DllSpec unsigned prtCatalogGetDelayedRelease();

DllSpec std::string prtGetText(const std::string &name, const std::string &deflt="");

DllSpec int prtGetHtml(const std::map<std::string,std::string> &value, const std::string &text, std::string &html, bool full);
DllSpec int prtGetHtml(const std::map<std::string,std::string> &value, const std::string &text, std::string &html);

DllSpec int prtGetHtmlURL(const std::map<std::string,std::string> &value, const std::string &url, std::string &html, bool full);
DllSpec int prtGetHtmlURL(const std::map<std::string,std::string> &value, const std::string &url, std::string &html);


DllSpec int prtSetRemotePrinter(const std::string &address);


DllSpec const char *prtLibVersion();

DllSpec const char *prt_GetVersion();


struct PrtErrorEntry {
   enum ErrorType { NOT_FOUND,   
                    UNSUPPORTED, 
                    CORRUPT      
   } type; 
   std::string name; 
   PrtErrorEntry(ErrorType t, const std::string &n) :type(t),name(n) {}
};

DllSpec const std::vector<PrtErrorEntry> &prtErrorList();

DllSpec std::string prtScriptError();


DllSpec void prtSetLocalProperties(bool local);

DllSpec bool prtGetLocalProperties();


DllSpec void prtSetLogMask(unsigned mask);

DllSpec unsigned prtGetLogMask(void);

DllSpec void prtAddFontDir(const char *dir);

#ifndef DOXYGEN
} //namespace vfiprint
#endif

#undef DllSpec

#endif  // #ifndef PRINTER_IF_H_20130513
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
