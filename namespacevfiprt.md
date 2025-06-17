---
title: vfiprt

---

# vfiprt

**Module:** **[Printing functions](group__vfiprt.md)**



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfiprt::prtControlSeq](structvfiprt_1_1prt_control_seq.md)**  |
| struct | **[vfiprt::PrtErrorEntry](structvfiprt_1_1_prt_error_entry.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[PrtError](namespacevfiprt.md#enum-prterror)** { PRT_OK =  0, PRT_BUSY = -1, PRT_PAPERJAM = -2, PRT_HEADOPEN = -3, PRT_PAPEREND = -4, PRT_OVERHEAT = -5, PRT_OVERVOLTAGE = -6, PRT_UNDERVOLTAGE = -7, PRT_FAIL = -8, PRT_SCRIPT_ERROR = -9, PRT_NO_PRINTER = -10, PRT_BATTERY = -11, PRT_UNSUPPORTED = -20, PRT_INVALID_PARAM = -21, PRT_NO_RESOURCE = -22, PRT_FILE_NOT_FOUND = -23, PRT_PROTOCOL = -24, PRT_FINAL_RESULT =- 40, PRT_TIMEOUT = -41}<br>List of general errors.  |
| enum| **[PrtMode](namespacevfiprt.md#enum-prtmode)** { PRT_PREFER_GRAPHICS, PRT_PREFER_TEXT} |
| enum| **[PrtPropertyInt](namespacevfiprt.md#enum-prtpropertyint)** { PRT_PROP_STATE =0, PRT_PROP_HEAD_TEMP, PRT_PROP_HEAD_VOLTAGE, PRT_PROP_PIXEL_WIDTH, PRT_PROP_CONTRAST, PRT_PROP_DEFAULT_FONT_SIZE, PRT_PROP_PRINT_MODE, PRT_PROP_JS_QUOTA_SIZE}<br>List of numeric properties.  |
| enum| **[PrtPropertyString](namespacevfiprt.md#enum-prtpropertystring)** { PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX, PRT_PROP_DEFAULT_FONT, PRT_PROP_CSS, PRT_PROP_INIFILE, PRT_PROP_JS_ROOT, PRT_PROP_DEVICE, PRT_PROP_JS_QUOTA_ROOT, PRT_PROP_CP_APP_DIR}<br>List of string properties.  |
| typedef void(*)(void *data) | **[prtAsyncCallback](namespacevfiprt.md#typedef-prtasynccallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[prtFinalResult](namespacevfiprt.md#function-prtfinalresult)**(int x) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtSetPropertyInt](namespacevfiprt.md#function-prtsetpropertyint)**(enum [PrtPropertyInt](namespacevfiprt.md#enum-prtpropertyint) property, int value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtGetPropertyInt](namespacevfiprt.md#function-prtgetpropertyint)**(enum [PrtPropertyInt](namespacevfiprt.md#enum-prtpropertyint) property, int * value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtSetPropertyString](namespacevfiprt.md#function-prtsetpropertystring)**(enum [PrtPropertyString](namespacevfiprt.md#enum-prtpropertystring) property, const char * value) |
| int | **[prtSetPropertyString](namespacevfiprt.md#function-prtsetpropertystring)**(enum [PrtPropertyString](namespacevfiprt.md#enum-prtpropertystring) property, const std::string & value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtGetPropertyString](namespacevfiprt.md#function-prtgetpropertystring)**(enum [PrtPropertyString](namespacevfiprt.md#enum-prtpropertystring) property, char * value, int len) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtGetPropertyString](namespacevfiprt.md#function-prtgetpropertystring)**(enum [PrtPropertyString](namespacevfiprt.md#enum-prtpropertystring) property, std::string & value) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[prtFormat](namespacevfiprt.md#function-prtformat)**(const char * format, ... ) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[prtFormatV](namespacevfiprt.md#function-prtformatv)**(const char * format, va_list va) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL](namespacevfiprt.md#function-prturl)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL](namespacevfiprt.md#function-prturl)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL](namespacevfiprt.md#function-prturl)**(const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL](namespacevfiprt.md#function-prturl)**(const std::string & url, bool landscape =false) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML](namespacevfiprt.md#function-prthtml)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML](namespacevfiprt.md#function-prthtml)**(const std::string & text, bool landscape =false) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURLAsync](namespacevfiprt.md#function-prturlasync)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, bool landscape =false, [prtAsyncCallback](namespacevfiprt.md#typedef-prtasynccallback) cb =0, void * cbdata =0) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURLAsync](namespacevfiprt.md#function-prturlasync)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, bool landscape =false, [prtAsyncCallback](namespacevfiprt.md#typedef-prtasynccallback) cb =0, void * cbdata =0) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURLAsync](namespacevfiprt.md#function-prturlasync)**(const char * url, bool landscape =false, [prtAsyncCallback](namespacevfiprt.md#typedef-prtasynccallback) cb =0, void * cbdata =0) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURLAsync](namespacevfiprt.md#function-prturlasync)**(const std::string & url, bool landscape =false, [prtAsyncCallback](namespacevfiprt.md#typedef-prtasynccallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTMLAsync](namespacevfiprt.md#function-prthtmlasync)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, bool landscape =false, [prtAsyncCallback](namespacevfiprt.md#typedef-prtasynccallback) cb =0, void * cbdata =0) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTMLAsync](namespacevfiprt.md#function-prthtmlasync)**(const std::string & text, bool landscape =false, [prtAsyncCallback](namespacevfiprt.md#typedef-prtasynccallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtWait](namespacevfiprt.md#function-prtwait)**(int timeout_msec =-1) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2PNG](namespacevfiprt.md#function-prturl2png)**(const char * destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2PNG](namespacevfiprt.md#function-prturl2png)**(const std::string & destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2PNG](namespacevfiprt.md#function-prturl2png)**(const char * destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2PNG](namespacevfiprt.md#function-prturl2png)**(const std::string & destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2PNG](namespacevfiprt.md#function-prturl2png)**(const char * destfile, int width, const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2PNG](namespacevfiprt.md#function-prturl2png)**(const std::string & destfile, int width, const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2PNG](namespacevfiprt.md#function-prturl2png)**(const char * destfile, int width, const std::string & url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2PNG](namespacevfiprt.md#function-prturl2png)**(const std::string & destfile, int width, const std::string & url, bool landscape =false) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML2PNG](namespacevfiprt.md#function-prthtml2png)**(const char * destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML2PNG](namespacevfiprt.md#function-prthtml2png)**(const char * destfile, int width, const std::string & text, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML2PNG](namespacevfiprt.md#function-prthtml2png)**(const std::string & destfile, int width, const std::string & text, bool landscape =false) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2ColorPNG](namespacevfiprt.md#function-prturl2colorpng)**(const char * destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2ColorPNG](namespacevfiprt.md#function-prturl2colorpng)**(const std::string & destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2ColorPNG](namespacevfiprt.md#function-prturl2colorpng)**(const char * destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2ColorPNG](namespacevfiprt.md#function-prturl2colorpng)**(const std::string & destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2ColorPNG](namespacevfiprt.md#function-prturl2colorpng)**(const char * destfile, int width, const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2ColorPNG](namespacevfiprt.md#function-prturl2colorpng)**(const std::string & destfile, int width, const char * url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2ColorPNG](namespacevfiprt.md#function-prturl2colorpng)**(const char * destfile, int width, const std::string & url, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2ColorPNG](namespacevfiprt.md#function-prturl2colorpng)**(const std::string & destfile, int width, const std::string & url, bool landscape =false) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML2ColorPNG](namespacevfiprt.md#function-prthtml2colorpng)**(const char * destfile, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML2ColorPNG](namespacevfiprt.md#function-prthtml2colorpng)**(const char * destfile, int width, const std::string & text, bool landscape =false) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML2ColorPNG](namespacevfiprt.md#function-prthtml2colorpng)**(const std::string & destfile, int width, const std::string & text, bool landscape =false) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2Text](namespacevfiprt.md#function-prturl2text)**(std::string & result, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, const [prtControlSeq](structvfiprt_1_1prt_control_seq.md) & ctrl) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2Text](namespacevfiprt.md#function-prturl2text)**(std::string & result, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, const [prtControlSeq](structvfiprt_1_1prt_control_seq.md) & ctrl) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2Text](namespacevfiprt.md#function-prturl2text)**(std::string & result, int width, const char * url, const [prtControlSeq](structvfiprt_1_1prt_control_seq.md) & ctrl) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtURL2Text](namespacevfiprt.md#function-prturl2text)**(std::string & result, int width, const std::string & url, const [prtControlSeq](structvfiprt_1_1prt_control_seq.md) & ctrl) |
| [DllSpec](sound_8h.md#define-dllspec) enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML2Text](namespacevfiprt.md#function-prthtml2text)**(std::string & result, int width, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, const [prtControlSeq](structvfiprt_1_1prt_control_seq.md) & ctrl) |
| enum [PrtError](namespacevfiprt.md#enum-prterror) | **[prtHTML2Text](namespacevfiprt.md#function-prthtml2text)**(std::string & result, int width, const std::string & text, const [prtControlSeq](structvfiprt_1_1prt_control_seq.md) & ctrl) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtGetFD](namespacevfiprt.md#function-prtgetfd)**() |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtSetCatalog](namespacevfiprt.md#function-prtsetcatalog)**(const std::string & filename) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[prtCatalogSetDelayedRelease](namespacevfiprt.md#function-prtcatalogsetdelayedrelease)**(unsigned num) |
| [DllSpec](sound_8h.md#define-dllspec) unsigned | **[prtCatalogGetDelayedRelease](namespacevfiprt.md#function-prtcataloggetdelayedrelease)**() |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[prtGetText](namespacevfiprt.md#function-prtgettext)**(const std::string & name, const std::string & deflt ="") |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtGetHtml](namespacevfiprt.md#function-prtgethtml)**(const std::map< std::string, std::string > & value, const std::string & text, std::string & html, bool full) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtGetHtml](namespacevfiprt.md#function-prtgethtml)**(const std::map< std::string, std::string > & value, const std::string & text, std::string & html) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtGetHtmlURL](namespacevfiprt.md#function-prtgethtmlurl)**(const std::map< std::string, std::string > & value, const std::string & url, std::string & html, bool full) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtGetHtmlURL](namespacevfiprt.md#function-prtgethtmlurl)**(const std::map< std::string, std::string > & value, const std::string & url, std::string & html) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[prtSetRemotePrinter](namespacevfiprt.md#function-prtsetremoteprinter)**(const std::string & address) |
| const [DllSpec](sound_8h.md#define-dllspec) char * | **[prtLibVersion](namespacevfiprt.md#function-prtlibversion)**() |
| const [DllSpec](sound_8h.md#define-dllspec) char * | **[prt_GetVersion](namespacevfiprt.md#function-prt-getversion)**() |
| const [DllSpec](sound_8h.md#define-dllspec) std::vector< [PrtErrorEntry](structvfiprt_1_1_prt_error_entry.md) > & | **[prtErrorList](namespacevfiprt.md#function-prterrorlist)**() |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[prtScriptError](namespacevfiprt.md#function-prtscripterror)**() |
| [DllSpec](sound_8h.md#define-dllspec) void | **[prtSetLocalProperties](namespacevfiprt.md#function-prtsetlocalproperties)**(bool local) |
| [DllSpec](sound_8h.md#define-dllspec) bool | **[prtGetLocalProperties](namespacevfiprt.md#function-prtgetlocalproperties)**() |
| [DllSpec](sound_8h.md#define-dllspec) void | **[prtSetLogMask](namespacevfiprt.md#function-prtsetlogmask)**(unsigned mask) |
| [DllSpec](sound_8h.md#define-dllspec) unsigned | **[prtGetLogMask](namespacevfiprt.md#function-prtgetlogmask)**(void ) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[prtAddFontDir](namespacevfiprt.md#function-prtaddfontdir)**(const char * dir) |

## Types Documentation

### enum PrtError

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PRT_OK |  0|  no error  |
| PRT_BUSY | -1|  Printing in progress  |
| PRT_PAPERJAM | -2|  Paper jam  |
| PRT_HEADOPEN | -3|  Head open  |
| PRT_PAPEREND | -4|  Paper end  |
| PRT_OVERHEAT | -5|  Head too hot  |
| PRT_OVERVOLTAGE | -6|  Head over voltage  |
| PRT_UNDERVOLTAGE | -7|  Head under voltage  |
| PRT_FAIL | -8|  function failed (generic error)  |
| PRT_SCRIPT_ERROR | -9|  error during script processing, check [prtScriptError()](namespacevfiprt.md#function-prtscripterror) for more details  |
| PRT_NO_PRINTER | -10|  no printer available or file cannot be created in case of printing to a file  |
| PRT_BATTERY | -11|  battery error (e.g. temperature)  |
| PRT_UNSUPPORTED | -20|  function not supported on used hardware  |
| PRT_INVALID_PARAM | -21|  invalid parameters passed, e.g. NULL pointer for mandatory parameter  |
| PRT_NO_RESOURCE | -22|  resource could not be allocated  |
| PRT_FILE_NOT_FOUND | -23|  file not found  |
| PRT_PROTOCOL | -24|  protocol error when talking to the print service  |
| PRT_FINAL_RESULT | =- 40|  will never be returned, just used for determining if a result is a final result  |
| PRT_TIMEOUT | -41|  timeout in [prtWait()](namespacevfiprt.md#function-prtwait) |



List of general errors. 

### enum PrtMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PRT_PREFER_GRAPHICS | |   |
| PRT_PREFER_TEXT | |   |




### enum PrtPropertyInt

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PRT_PROP_STATE | =0|  printer state (just using the subset of PrtError that reflects the state (read only)  |
| PRT_PROP_HEAD_TEMP | |  Head temperature value in degrees Celsius (read only)  |
| PRT_PROP_HEAD_VOLTAGE | |  Head voltage value in mV (read only)  |
| PRT_PROP_PIXEL_WIDTH | |  printer width in pixels, this may be 0 if the printer is temporarily not available. (read only)  |
| PRT_PROP_CONTRAST | |  printer contrast 0...255  |
| PRT_PROP_DEFAULT_FONT_SIZE | |  Default font size  |
| PRT_PROP_PRINT_MODE | |  Preferred print mode: PRT_PREFER_GRAPHICS (default) or PRT_PREFER_TEXT, ignored if not supported by the printer  |
| PRT_PROP_JS_QUOTA_SIZE | |  If >0 filesystem quota in kilobytes for use by JavaScript, see also [PRT_PROP_JS_QUOTA_ROOT](namespacevfiprt.md#enumvalue-prt-prop-js-quota-root) |



List of numeric properties. 

### enum PrtPropertyString

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| PRT_PROP_RESOURCE_PATH | |  Resource path, default is resource/print  |
| PRT_PROP_FILE_PREFIX | |  prefix that is added in front of the URL in uiInvokeURL and to the template names, e.g. using "en/" would access the files in the subdirectory "en".  |
| PRT_PROP_DEFAULT_FONT | |  Default font name  |
| PRT_PROP_CSS | |  name of a CSS file  |
| PRT_PROP_INIFILE | |  name of the INI file, setting this property has the effect of reading and evaluating that file, i.e. the default font, font size and the CSS file name are updated  |
| PRT_PROP_JS_ROOT | |  Setting this path activates the JavaScript filesystem module. I/O is restricted to happen inside this path. Use "$APPDIR" to refer to this path from within JavaScript. Images and videos may also use "$APPDIR" to refer to files in this path.  |
| PRT_PROP_DEVICE | |  If not empty, printer device to be used on server side, e.g. /dev/ttyAMA0, not supported on all platforms, only devices that are accessibly by the printer server can be used  |
| PRT_PROP_JS_QUOTA_ROOT | |  If not empty base directory for quota JavaScript calculation, default is "", see also [PRT_PROP_JS_QUOTA_SIZE](namespacevfiprt.md#enumvalue-prt-prop-js-quota-size) |
| PRT_PROP_CP_APP_DIR | |  CP app directory, if set only receipts from the app dir can be printed. It should point to the base app directory without platform, e.g. /home/sys14/www/<app-id> on V/OS  |



List of string properties. 

### typedef prtAsyncCallback

```cpp
typedef void(* prtAsyncCallback) (void *data);
```


**Parameters**: 

  * **data** data pointer provided by the application 


**Note**: The callback will be run within a different thread context! 

callback function that is called when printing has finished 



## Functions Documentation

### function prtFinalResult

```cpp
inline bool prtFinalResult(
    int x
)
```


### function prtSetPropertyInt

```cpp
DllSpec int prtSetPropertyInt(
    enum PrtPropertyInt property,
    int value
)
```


**Parameters**: 

  * **property** property to be set 
  * **value** new value 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

**Note**: Properties are specific to each thread 

set int property 


### function prtGetPropertyInt

```cpp
DllSpec int prtGetPropertyInt(
    enum PrtPropertyInt property,
    int * value
)
```


**Parameters**: 

  * **property** property to be set 
  * **value** current value 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

get int property 


### function prtSetPropertyString

```cpp
DllSpec int prtSetPropertyString(
    enum PrtPropertyString property,
    const char * value
)
```


**Parameters**: 

  * **property** property to be set 
  * **value** new value 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

**Note**: Properties are specific to each thread 

set string property 


### function prtSetPropertyString

```cpp
inline int prtSetPropertyString(
    enum PrtPropertyString property,
    const std::string & value
)
```


Overloaded function: Just using std::string for value 


### function prtGetPropertyString

```cpp
DllSpec int prtGetPropertyString(
    enum PrtPropertyString property,
    char * value,
    int len
)
```


**Parameters**: 

  * **property** property to be set 
  * **value** current value 
  * **len** size ouf output buffer _value_ in bytes 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

get string property 


### function prtGetPropertyString

```cpp
DllSpec int prtGetPropertyString(
    enum PrtPropertyString property,
    std::string & value
)
```


**Parameters**: 

  * **property** property to be set 
  * **value** current value 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

get string property 


### function prtFormat

```cpp
DllSpec std::string prtFormat(
    const char * format,
    ... 
)
```


**Parameters**: 

  * **format** printf-like format string. It supports the commonly known format specifiers 's', 'i', 'd', 'u', 'o', 'x', 'X', 'p', 'c', 'f', 'e', 'g'. In addition the following format specifiers are supported:

* 'S': format as string and substitute the special HTML characters '&', '<', '>', '"' and ''' by character references (e.g. '&', '<' ...).
* 'C': format as character and sustitute HTML characters 


**Return**: formatted string 

perform printf-like formatting. 


### function prtFormatV

```cpp
DllSpec std::string prtFormatV(
    const char * format,
    va_list va
)
```


perfom printf-like formatting. This is the same as [prtFormat()](namespacevfiprt.md#function-prtformat) just taking a va_list instead of a variable number of arguments 


### function prtURL

```cpp
DllSpec enum PrtError prtURL(
    const stringmap & value,
    const char * url,
    bool landscape =false
)
```


**Parameters**: 

  * **value** name value pairs that are used as for variable substitutions. 
  * **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) 
  * **landscape** activate landscape printing 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

print an HTML file (synchronous) 


### function prtURL

```cpp
inline enum PrtError prtURL(
    const stringmap & value,
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for url 


### function prtURL

```cpp
inline enum PrtError prtURL(
    const char * url,
    bool landscape =false
)
```


the same as [prtURL()](namespacevfiprt.md#function-prturl) just using an empty value map 


### function prtURL

```cpp
inline enum PrtError prtURL(
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for url 


### function prtHTML

```cpp
DllSpec enum PrtError prtHTML(
    const stringmap & value,
    const std::string & text,
    bool landscape =false
)
```


**Parameters**: 

  * **value** name value pairs that are used as for variable substitutions. 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **landscape** activate landscape printing 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

print an HTML document (synchronous) 


### function prtHTML

```cpp
inline enum PrtError prtHTML(
    const std::string & text,
    bool landscape =false
)
```


the same as [prtHTML()](namespacevfiprt.md#function-prthtml) just using an empty value map 


### function prtURLAsync

```cpp
DllSpec enum PrtError prtURLAsync(
    const stringmap & value,
    const char * url,
    bool landscape =false,
    prtAsyncCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **value** name value pairs that are used as for variable substitutions. 
  * **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) 
  * **landscape** activate landscape printing 
  * **cb** optional callback function that is called when printing has finished 
  * **cbdata** data pointer that is passed on to the callback function 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

**Note**: If [prtWait()](namespacevfiprt.md#function-prtwait) is not called the next call to [prtURLAsync()](namespacevfiprt.md#function-prturlasync) or [prtHTMLAsync()](namespacevfiprt.md#function-prthtmlasync) will return PRT_BUSY. 

asynchronously start printing an HTML file, the result has to be obtained using [prtWait()](namespacevfiprt.md#function-prtwait). 


### function prtURLAsync

```cpp
inline enum PrtError prtURLAsync(
    const stringmap & value,
    const std::string & url,
    bool landscape =false,
    prtAsyncCallback cb =0,
    void * cbdata =0
)
```


Overloaded function: Just using std::string for url 


### function prtURLAsync

```cpp
inline enum PrtError prtURLAsync(
    const char * url,
    bool landscape =false,
    prtAsyncCallback cb =0,
    void * cbdata =0
)
```


the same as [prtURLAsync()](namespacevfiprt.md#function-prturlasync) just using an empty value map 


### function prtURLAsync

```cpp
inline enum PrtError prtURLAsync(
    const std::string & url,
    bool landscape =false,
    prtAsyncCallback cb =0,
    void * cbdata =0
)
```


Overloaded function: Just using std::string for url 


### function prtHTMLAsync

```cpp
DllSpec enum PrtError prtHTMLAsync(
    const stringmap & value,
    const std::string & text,
    bool landscape =false,
    prtAsyncCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **value** name value pairs that are used as for variable substitutions. 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **landscape** activate landscape printing 
  * **cb** optional callback function that is called when printing has finished 
  * **cbdata** data pointer that is passed on to the callback function 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

**Note**: If [prtWait()](namespacevfiprt.md#function-prtwait) is not called the next call to [prtURLAsync()](namespacevfiprt.md#function-prturlasync) or [prtHTMLAsync()](namespacevfiprt.md#function-prthtmlasync) will return PRT_BUSY. 

asynchronously start printing an HTML document, the result has to be obtained using [prtWait()](namespacevfiprt.md#function-prtwait). 


### function prtHTMLAsync

```cpp
inline enum PrtError prtHTMLAsync(
    const std::string & text,
    bool landscape =false,
    prtAsyncCallback cb =0,
    void * cbdata =0
)
```


the same as [prtHTMLAsync()](namespacevfiprt.md#function-prthtmlasync) just using an empty value map 


### function prtWait

```cpp
DllSpec enum PrtError prtWait(
    int timeout_msec =-1
)
```


**Parameters**: 

  * **timeout_msec** timeout in milliseconds, a negative value means infinite timeout 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) or PRT_TIMEOUT in case the printing did not finish within the specified timeout. 

**Note**: In case of timeout [prtWait()](namespacevfiprt.md#function-prtwait) has to be called again. 

wait for the printing to finish and return the error code 


### function prtURL2PNG

```cpp
DllSpec enum PrtError prtURL2PNG(
    const char * destfile,
    int width,
    const stringmap & value,
    const char * url,
    bool landscape =false
)
```


**Parameters**: 

  * **destfile** name of the destination PNG file 
  * **width** width of the image in pixels (height if landscape==true) 
  * **value** name value pairs that are used as for variable substitutions. 
  * **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) 
  * **landscape** activate landscape printing (image is rotated by 90 degrees) 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

render an HTML file to a black and white PNG image 


### function prtURL2PNG

```cpp
inline enum PrtError prtURL2PNG(
    const std::string & destfile,
    int width,
    const stringmap & value,
    const char * url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile 


### function prtURL2PNG

```cpp
inline enum PrtError prtURL2PNG(
    const char * destfile,
    int width,
    const stringmap & value,
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for url 


### function prtURL2PNG

```cpp
inline enum PrtError prtURL2PNG(
    const std::string & destfile,
    int width,
    const stringmap & value,
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile and url 


### function prtURL2PNG

```cpp
inline enum PrtError prtURL2PNG(
    const char * destfile,
    int width,
    const char * url,
    bool landscape =false
)
```


shortcut omitting value 


### function prtURL2PNG

```cpp
inline enum PrtError prtURL2PNG(
    const std::string & destfile,
    int width,
    const char * url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile 


### function prtURL2PNG

```cpp
inline enum PrtError prtURL2PNG(
    const char * destfile,
    int width,
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for url 


### function prtURL2PNG

```cpp
inline enum PrtError prtURL2PNG(
    const std::string & destfile,
    int width,
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile and url 


### function prtHTML2PNG

```cpp
DllSpec enum PrtError prtHTML2PNG(
    const char * destfile,
    int width,
    const stringmap & value,
    const std::string & text,
    bool landscape =false
)
```


**Parameters**: 

  * **destfile** name of the destination PNG file 
  * **width** width of the image in pixels (height if landscape==true) 
  * **value** name value pairs that are used as for variable substitutions. 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **landscape** activate landscape printing (image is rotated by 90 degrees) 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

render an HTML file to a PNG image 


### function prtHTML2PNG

```cpp
inline enum PrtError prtHTML2PNG(
    const char * destfile,
    int width,
    const std::string & text,
    bool landscape =false
)
```


the same as [prtHTML2PNG()](namespacevfiprt.md#function-prthtml2png) just using an empty value map 


### function prtHTML2PNG

```cpp
inline enum PrtError prtHTML2PNG(
    const std::string & destfile,
    int width,
    const std::string & text,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile 


### function prtURL2ColorPNG

```cpp
DllSpec enum PrtError prtURL2ColorPNG(
    const char * destfile,
    int width,
    const stringmap & value,
    const char * url,
    bool landscape =false
)
```


**Parameters**: 

  * **destfile** name of the destination PNG file 
  * **width** width of the image in pixels (height if landscape==true) 
  * **value** name value pairs that are used as for variable substitutions. 
  * **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) 
  * **landscape** activate landscape printing (image is rotated by 90 degrees) 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

render an HTML file to a color PNG image 


### function prtURL2ColorPNG

```cpp
inline enum PrtError prtURL2ColorPNG(
    const std::string & destfile,
    int width,
    const stringmap & value,
    const char * url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile 


### function prtURL2ColorPNG

```cpp
inline enum PrtError prtURL2ColorPNG(
    const char * destfile,
    int width,
    const stringmap & value,
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for url 


### function prtURL2ColorPNG

```cpp
inline enum PrtError prtURL2ColorPNG(
    const std::string & destfile,
    int width,
    const stringmap & value,
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile and url 


### function prtURL2ColorPNG

```cpp
inline enum PrtError prtURL2ColorPNG(
    const char * destfile,
    int width,
    const char * url,
    bool landscape =false
)
```


shortcut omitting value 


### function prtURL2ColorPNG

```cpp
inline enum PrtError prtURL2ColorPNG(
    const std::string & destfile,
    int width,
    const char * url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile 


### function prtURL2ColorPNG

```cpp
inline enum PrtError prtURL2ColorPNG(
    const char * destfile,
    int width,
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for url 


### function prtURL2ColorPNG

```cpp
inline enum PrtError prtURL2ColorPNG(
    const std::string & destfile,
    int width,
    const std::string & url,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile and url 


### function prtHTML2ColorPNG

```cpp
DllSpec enum PrtError prtHTML2ColorPNG(
    const char * destfile,
    int width,
    const stringmap & value,
    const std::string & text,
    bool landscape =false
)
```


**Parameters**: 

  * **destfile** name of the destination PNG file 
  * **width** width of the image in pixels (height if landscape==true) 
  * **value** name value pairs that are used as for variable substitutions. 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **landscape** activate landscape printing (image is rotated by 90 degrees) 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

render an HTML file to a color PNG image 


### function prtHTML2ColorPNG

```cpp
inline enum PrtError prtHTML2ColorPNG(
    const char * destfile,
    int width,
    const std::string & text,
    bool landscape =false
)
```


the same as [prtHTML2ColorPNG()](namespacevfiprt.md#function-prthtml2colorpng) just using an empty value map 


### function prtHTML2ColorPNG

```cpp
inline enum PrtError prtHTML2ColorPNG(
    const std::string & destfile,
    int width,
    const std::string & text,
    bool landscape =false
)
```


Overloaded function: Just using std::string for destfile 


### function prtURL2Text

```cpp
DllSpec enum PrtError prtURL2Text(
    std::string & result,
    int width,
    const stringmap & value,
    const char * url,
    const prtControlSeq & ctrl
)
```


**Parameters**: 

  * **result** resulting text string 
  * **width** width of the image in printable characters 
  * **value** name value pairs that are used as for variable substitutions. 
  * **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) 
  * **ctrl** control sequences 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

convert HTML document to text string. Custom control sequences can be passed that are inserted when switching the font size or style 


### function prtURL2Text

```cpp
inline enum PrtError prtURL2Text(
    std::string & result,
    int width,
    const stringmap & value,
    const std::string & url,
    const prtControlSeq & ctrl
)
```


Overloaded function: Just using std::string for url 


### function prtURL2Text

```cpp
inline enum PrtError prtURL2Text(
    std::string & result,
    int width,
    const char * url,
    const prtControlSeq & ctrl
)
```


short cut with empty value map 


### function prtURL2Text

```cpp
inline enum PrtError prtURL2Text(
    std::string & result,
    int width,
    const std::string & url,
    const prtControlSeq & ctrl
)
```


Overloaded function: Just using std::string for url 


### function prtHTML2Text

```cpp
DllSpec enum PrtError prtHTML2Text(
    std::string & result,
    int width,
    const stringmap & value,
    const std::string & text,
    const prtControlSeq & ctrl
)
```


**Parameters**: 

  * **result** resulting text string 
  * **width** width of the image in printable characters 
  * **value** name value pairs that are used as for variable substitutions. 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **ctrl** control sequences 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

convert HTML document to text string. Custom control sequences can be passed that are inserted when switching the font size or style 


### function prtHTML2Text

```cpp
inline enum PrtError prtHTML2Text(
    std::string & result,
    int width,
    const std::string & text,
    const prtControlSeq & ctrl
)
```


short cut with empty value map 


### function prtGetFD

```cpp
DllSpec int prtGetFD()
```


**Return**: file descriptor or -1 in case no printing is active 

obtain internal file descriptor for use in poll(). This may be used to check whether the result has been received from the print service. 


### function prtSetCatalog

```cpp
DllSpec int prtSetCatalog(
    const std::string & filename
)
```


**Parameters**: 

  * **filename** of the catalog, empty string to unload the current dialog 


**Return**: PRT_OK if file was successfully loaded, else error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

load and set a catalog file containing name-value text pairs to be inserted with HTML placeholder <?text name?>. The current catalog is unloaded with filename=="" or by loading another catalog file. 


### function prtCatalogSetDelayedRelease

```cpp
DllSpec void prtCatalogSetDelayedRelease(
    unsigned num
)
```


**Parameters**: 

  * **num** number of catalogs 


**Note**: Catalog storage is shared with the GUI module, i.e. this setting may be changed by calls to [uiCatalogSetDelayedRelease()](namespacevfigui.md#function-uicatalogsetdelayedrelease)

Set the maximum number of catalogs that are kept in memory although being unused. This improves load time when a catalog is used again, since when still in memory it does not need to be read from disk (default: 0) 


### function prtCatalogGetDelayedRelease

```cpp
DllSpec unsigned prtCatalogGetDelayedRelease()
```


**Return**: number of catalogs 

**Note**: Catalog storage is shared with the GUI module, i.e. this setting may be changed by calls to [uiCatalogSetDelayedRelease()](namespacevfigui.md#function-uicatalogsetdelayedrelease)

Get the maximum number of unused catalogs that are kept in memory. 


### function prtGetText

```cpp
DllSpec std::string prtGetText(
    const std::string & name,
    const std::string & deflt =""
)
```


**Parameters**: 

  * **name** of key used to lookup the text in calalog 
  * **deflt** text that is returned, if text is not found in calalog 


**Return**: text from catalog for success, else value in parameter _default_

lookup a text from current loaded catalog by _key_ name. If text is not found in catalog or no catalog is loaded the function returns value in in parameter _default_. 


### function prtGetHtml

```cpp
DllSpec int prtGetHtml(
    const std::map< std::string, std::string > & value,
    const std::string & text,
    std::string & html,
    bool full
)
```


**Parameters**: 

  * **value** values used for insertions 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **html** resulting HTML code 
  * **full** optional parameter: If false or missing just substitute the XML processing instructions, if true in addition use inline images, insert CSS code and return full HTML document 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

preprocess HTML code and return the resulting string 


### function prtGetHtml

```cpp
DllSpec int prtGetHtml(
    const std::map< std::string, std::string > & value,
    const std::string & text,
    std::string & html
)
```


### function prtGetHtmlURL

```cpp
DllSpec int prtGetHtmlURL(
    const std::map< std::string, std::string > & value,
    const std::string & url,
    std::string & html,
    bool full
)
```


**Parameters**: 

  * **value** values used for insertions 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) unless an absolute path was provided. 
  * **html** resulting HTML code 
  * **full** optional parameter: If false or missing just substitute the XML processing instructions, if true in addition use inline images, insert CSS code and return full HTML document 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)) 

preprocess HTML code and return the resulting string 


### function prtGetHtmlURL

```cpp
DllSpec int prtGetHtmlURL(
    const std::map< std::string, std::string > & value,
    const std::string & url,
    std::string & html
)
```


### function prtSetRemotePrinter

```cpp
DllSpec int prtSetRemotePrinter(
    const std::string & address
)
```


**Parameters**: 

  * **address** printer address. This value overwrites the address set using the LPD environment variable. This may be used to set an IP address and port (e.g. ':0' would use the internal default printer). Using an empty string will revert to the default setting. 


**Return**: error code (see [PrtError](namespacevfiprt.md#enum-prterror)). 

set remote printer address 


### function prtLibVersion

```cpp
const DllSpec char * prtLibVersion()
```


**Return**: version string 

read library version 


### function prt_GetVersion

```cpp
const DllSpec char * prt_GetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of libvfiguiprt in ADK version string format: <major>.<minor>.<patch>-<build>, e.g. "1.2.3-4" 


### function prtErrorList

```cpp
const DllSpec std::vector< PrtErrorEntry > & prtErrorList()
```


**Return**: reference to the error list of the last receipt printed in this thread. 

obtain list of non-fatal errors that happened last while printing a receipt. 


### function prtScriptError

```cpp
DllSpec std::string prtScriptError()
```


**Return**: string containing information about errors that were reported during last script processing 

### function prtSetLocalProperties

```cpp
DllSpec void prtSetLocalProperties(
    bool local
)
```


**Parameters**: 

  * **local** if true activate thread local properties, if false discard them 


de-/activate thread local properties for the current thread. Activating thread local properties initially copies the global properties to the current thread. 


### function prtGetLocalProperties

```cpp
DllSpec bool prtGetLocalProperties()
```


**Return**: true if thread local properties are used, else return false 

### function prtSetLogMask

```cpp
DllSpec void prtSetLogMask(
    unsigned mask
)
```


**Parameters**: 

  * **mask** logging mask (see PRT_LOGMASK) 


Set log mask 


### function prtGetLogMask

```cpp
DllSpec unsigned prtGetLogMask(
    void 
)
```


**Return**: current log mask 

Get log mask 


### function prtAddFontDir

```cpp
DllSpec void prtAddFontDir(
    const char * dir
)
```


**Parameters**: 

  * **dir** directory to add 


**Note**: For security reasons this function is only available if the printer server runs in the context of the application (e.g. when using embedded ARRS) but it is not provided when running the printer server as separate process. 

Add directory to printer font search path 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100