---
title: vfigui

---

# vfigui

**Module:** **[Graphical User Interface](group__vfigui.md)**

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfigui::UIBacklight](structvfigui_1_1_u_i_backlight.md)**  |
| class | **[vfigui::UICBData](classvfigui_1_1_u_i_c_b_data.md)**  |
| class | **[vfigui::UIDrawing](classvfigui_1_1_u_i_drawing.md)**  |
| struct | **[vfigui::UIErrorEntry](structvfigui_1_1_u_i_error_entry.md)**  |
| struct | **[vfigui::UIMenuEntry](structvfigui_1_1_u_i_menu_entry.md)**  |
| struct | **[vfigui::UIRegion](structvfigui_1_1_u_i_region.md)**  |
| struct | **[vfigui::UIStatistics](structvfigui_1_1_u_i_statistics.md)**  |
| struct | **[vfigui::UITextWidth](structvfigui_1_1_u_i_text_width.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[UICBType](namespacevfigui.md#enum-uicbtype)** { UI_CB_RESULT, UI_CB_UPDATE, UI_CB_LOAD, UI_CB_ERROR_LIST, UI_CB_STATISTICS, UI_CB_EVENT} |
| enum| **[@2](namespacevfigui.md#enum-@2)** { UI_REGION_DEFAULT =0} |
| enum| **[@3](namespacevfigui.md#enum-@3)** { UI_REGION_FLAG_HIDDEN =1} |
| enum| **[UIPropertyInt](namespacevfigui.md#enum-uipropertyint)** { UI_PROP_TIMEOUT =0, UI_PROP_PASSWORD_CHAR, UI_PROP_DEFAULT_FONT_SIZE, UI_PROP_PIN_AUTO_ENTER, UI_PROP_PIN_CLEAR_ALL, UI_PROP_PIN_BYPASS_KEY, UI_PROP_PIN_ALGORITHM, UI_PROP_PIN_INTERCHAR_TIMEOUT, UI_PROP_PASSWORD_SHOW_CHAR, UI_PROP_KEEP_DISPLAY, UI_PROP_UPDATE_EVENTS, UI_PROP_CIRCULAR_MENU, UI_PROP_TOUCH_ACTION_BEEP, UI_PROP_STATISTICS, UI_PROP_RESTRICTED, UI_PROP_CP_APP_MODE, UI_PROP_SCROLL_COLOR, UI_PROP_INPUT_ERROR_BEEP, UI_PROP_ZOOM_MAX, UI_PROP_SCROLL_DISPLAY, UI_PROP_JS_QUOTA_SIZE, UI_PROP_SCROLL_WIDTH, UI_DEVICE_WIDTH =1000, UI_DEVICE_HEIGHT, UI_DEVICE_COLOR_DEPTH, UI_DEVICE_SUPPORTS_TOUCH, UI_DEVICE_SUPPORTS_BEEPER, UI_DEVICE_SUPPORTS_AUDIO, UI_DEVICE_SUPPORTS_VIDEO, UI_DEVICE_SUPPORTS_SIGCAP, UI_DEVICE_SUPPORTS_COLOR_DISPLAY, UI_DEVICE_HAS_CAP_TOUCH_KEYPAD, UI_DEVICE_SUPPORTS_NAVIGATOR_MODE, UI_DEVICE_KEY_COUNT} |
| enum| **[UIPropertyString](namespacevfigui.md#enum-uipropertystring)** { UI_PROP_DECIMAL_SEPARATOR =2000, UI_PROP_THOUSANDS_SEPARATOR, UI_PROP_DEFAULT_FONT, UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX, UI_PROP_KEYMAP, UI_PROP_CSS, UI_PROP_RESOURCE_DEFAULT_PATH, UI_PROP_GUI_EXTENSIONS, UI_PROP_HTTP_HEADER_FIELDS, UI_PROP_CP_APP_DIR, UI_PROP_LANGUAGE, UI_PROP_JS_ROOT, UI_PROP_PRINT_ROOT, UI_PROP_PRINT_CSS, UI_PROP_JS_QUOTA_ROOT, UI_DEVICE_MODEL =3000} |
| enum| **[UIServerProperty](namespacevfigui.md#enum-uiserverproperty)** { UI_SERVER_TOUCH_ACTION_BEEP, UI_SERVER_INPUT_ERROR_BEEP, UI_SERVER_KEYMAP} |
| enum| **[@4](namespacevfigui.md#enum-@4)** { UI_TRANS_UP =0x1, UI_TRANS_RIGHT =0x2, UI_TRANS_DOWN =0x4, UI_TRANS_LEFT =0x8, UI_TRANS_DIRECTION_MASK =0xf, UI_TRANS_EASE_IN =0x10, UI_TRANS_EASE_OUT =0x20, UI_TRANS_EASE_INOUT =0x30, UI_TRANS_EASE_MASK =0x30, UI_TRANS_NONE =0x000, UI_TRANS_SLIDE =0x100, UI_TRANS_SLIDEON =0x200, UI_TRANS_SWAP =0x300, UI_TRANS_CROSSFADE =0x400, UI_TRANS_TYPE_MASK =0xfff00} |
| enum| **[UILEDShape](namespacevfigui.md#enum-uiledshape)** { UI_SHAPE_RECTANGLE, UI_SHAPE_ELLIPSE} |
| enum| **[UIEdge](namespacevfigui.md#enum-uiedge)** { UI_EDGE_TOP, UI_EDGE_RIGHT, UI_EDGE_BOTTOM, UI_EDGE_LEFT} |
| enum| **[UIScrollPosition](namespacevfigui.md#enum-uiscrollposition)** { UI_SCROLL_TOP, UI_SCROLL_BOTTOM} |
| enum| **[UIBeep](namespacevfigui.md#enum-uibeep)** { UI_BEEP_NORMAL, UI_BEEP_ERROR} |
| enum| **[UINagScreenType](namespacevfigui.md#enum-uinagscreentype)** { UI_NAG_TEST_DEVICE} |
| enum| **[UICanvasEvent](namespacevfigui.md#enum-uicanvasevent)** { UI_PUSH, UI_DRAG, UI_RELEASE, UI_KEYDOWN, UI_KEYUP, UI_TERMINATE} |
| enum| **[UIMenuOptions](namespacevfigui.md#enum-uimenuoptions)** { UI_MENU_DISABLED =1} |
| typedef bool(*)(void *data) | **[uiCallback](namespacevfigui.md#typedef-uicallback)**  |
| typedef void(*)(void *data, UICBType type, UICBData &uidata) | **[uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback)**  |
| typedef void(*)(int display) | **[uiDisconnectCallback](namespacevfigui.md#typedef-uidisconnectcallback)**  |
| typedef void(*)(void *data, UICanvasEvent event, int x, int y, int key, unsigned flags) | **[uiEventCallback](namespacevfigui.md#typedef-uieventcallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiSetConnectAttempts](namespacevfigui.md#function-uisetconnectattempts)**(int num) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetConnectAttempts](namespacevfigui.md#function-uigetconnectattempts)**() |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiSetDisconnectCallback](namespacevfigui.md#function-uisetdisconnectcallback)**([uiDisconnectCallback](namespacevfigui.md#typedef-uidisconnectcallback) cb) |
| [DllSpec](sound_8h.md#define-dllspec)[uiDisconnectCallback](namespacevfigui.md#typedef-uidisconnectcallback) | **[uiGetDisconnectCallback](namespacevfigui.md#function-uigetdisconnectcallback)**() |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiSetKeepalive](namespacevfigui.md#function-uisetkeepalive)**(int count, int interval) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiGetKeepalive](namespacevfigui.md#function-uigetkeepalive)**(int & count, int & interval) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiDisconnect](namespacevfigui.md#function-uidisconnect)**(int display) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiReadRuntimeID](namespacevfigui.md#function-uireadruntimeid)**(int display, std::string & id, int timeout_msec =5000) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiPrint](namespacevfigui.md#function-uiprint)**(const char * format, ... ) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiPrintV](namespacevfigui.md#function-uiprintv)**(const char * format, va_list va) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplayCount](namespacevfigui.md#function-uidisplaycount)**() |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplay](namespacevfigui.md#function-uidisplay)**(int display, int region_id, const std::string & text) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplay](namespacevfigui.md#function-uidisplay)**(int region_id, const std::string & text) |
| int | **[uiDisplay](namespacevfigui.md#function-uidisplay)**(const std::string & text) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvoke](namespacevfigui.md#function-uiinvoke)**(int display, int region_id, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvoke](namespacevfigui.md#function-uiinvoke)**(int region_id, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvoke](namespacevfigui.md#function-uiinvoke)**([stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvoke](namespacevfigui.md#function-uiinvoke)**(int display, int region_id, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvoke](namespacevfigui.md#function-uiinvoke)**(int region_id, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvoke](namespacevfigui.md#function-uiinvoke)**(const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeTemplate](namespacevfigui.md#function-uiinvoketemplate)**(int display, int region_id, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & template_name, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeTemplate](namespacevfigui.md#function-uiinvoketemplate)**(int region_id, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & template_name, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeTemplate](namespacevfigui.md#function-uiinvoketemplate)**([stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & template_name, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeTemplate](namespacevfigui.md#function-uiinvoketemplate)**(int display, int region_id, const std::string & template_name, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeTemplate](namespacevfigui.md#function-uiinvoketemplate)**(int region_id, const std::string & template_name, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeTemplate](namespacevfigui.md#function-uiinvoketemplate)**(const std::string & template_name, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(int display, int region_id, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(int region_id, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**([stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(int display, int region_id, const char * url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(int region_id, const char * url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(const char * url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(int display, int region_id, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(int region_id, [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**([stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(int display, int region_id, const std::string & url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(int region_id, const std::string & url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInvokeURL](namespacevfigui.md#function-uiinvokeurl)**(const std::string & url, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeAsync](namespacevfigui.md#function-uiinvokeasync)**(int display, int region_id, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeAsync](namespacevfigui.md#function-uiinvokeasync)**(int region_id, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeAsync](namespacevfigui.md#function-uiinvokeasync)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeAsync](namespacevfigui.md#function-uiinvokeasync)**(int display, int region_id, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeAsync](namespacevfigui.md#function-uiinvokeasync)**(int region_id, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeAsync](namespacevfigui.md#function-uiinvokeasync)**(const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeTemplateAsync](namespacevfigui.md#function-uiinvoketemplateasync)**(int display, int region_id, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & template_name, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeTemplateAsync](namespacevfigui.md#function-uiinvoketemplateasync)**(int region_id, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & template_name, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeTemplateAsync](namespacevfigui.md#function-uiinvoketemplateasync)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & template_name, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeTemplateAsync](namespacevfigui.md#function-uiinvoketemplateasync)**(int display, int region_id, const std::string & template_name, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeTemplateAsync](namespacevfigui.md#function-uiinvoketemplateasync)**(int region_id, const std::string & template_name, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeTemplateAsync](namespacevfigui.md#function-uiinvoketemplateasync)**(const std::string & template_name, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(int display, int region_id, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(int region_id, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const char * url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(int display, int region_id, const char * url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(int region_id, const char * url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(const char * url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(int display, int region_id, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(int region_id, const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(const [stringmap](namespacevfihtml.md#typedef-stringmap) & value, const std::string & url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(int display, int region_id, const std::string & url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(int region_id, const std::string & url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInvokeURLAsync](namespacevfigui.md#function-uiinvokeurlasync)**(const std::string & url, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeWait](namespacevfigui.md#function-uiinvokewait)**(int txn_id, std::map< std::string, std::string > & value, int timeout_msec =-1) |
| int | **[uiInvokeWait](namespacevfigui.md#function-uiinvokewait)**(int txn_id, int timeout_msec =-1) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeCancel](namespacevfigui.md#function-uiinvokecancel)**(int txn_id, std::map< std::string, std::string > & value) |
| int | **[uiInvokeCancel](namespacevfigui.md#function-uiinvokecancel)**(int txn_id) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeCancelAsync](namespacevfigui.md#function-uiinvokecancelasync)**(int txn_id) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeURLDetached](namespacevfigui.md#function-uiinvokeurldetached)**(int display, int region_id, const char * url) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInvokeURLDetached](namespacevfigui.md#function-uiinvokeurldetached)**(int region_id, const char * url) |
| int | **[uiInvokeURLDetached](namespacevfigui.md#function-uiinvokeurldetached)**(const char * url) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiClear](namespacevfigui.md#function-uiclear)**(int display, int region_id) |
| int | **[uiClear](namespacevfigui.md#function-uiclear)**(int region_id) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetPropertyInt](namespacevfigui.md#function-uisetpropertyint)**(int display, enum [UIPropertyInt](namespacevfigui.md#enum-uipropertyint) property, int value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetPropertyInt](namespacevfigui.md#function-uisetpropertyint)**(enum [UIPropertyInt](namespacevfigui.md#enum-uipropertyint) property, int value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetPropertyInt](namespacevfigui.md#function-uigetpropertyint)**(int display, enum [UIPropertyInt](namespacevfigui.md#enum-uipropertyint) property, int * value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetPropertyInt](namespacevfigui.md#function-uigetpropertyint)**(enum [UIPropertyInt](namespacevfigui.md#enum-uipropertyint) property, int * value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetPropertyString](namespacevfigui.md#function-uisetpropertystring)**(int display, enum [UIPropertyString](namespacevfigui.md#enum-uipropertystring) property, const char * value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetPropertyString](namespacevfigui.md#function-uisetpropertystring)**(enum [UIPropertyString](namespacevfigui.md#enum-uipropertystring) property, const char * value) |
| int | **[uiSetPropertyString](namespacevfigui.md#function-uisetpropertystring)**(int display, enum [UIPropertyString](namespacevfigui.md#enum-uipropertystring) property, const std::string & value) |
| int | **[uiSetPropertyString](namespacevfigui.md#function-uisetpropertystring)**(enum [UIPropertyString](namespacevfigui.md#enum-uipropertystring) property, const std::string & value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetPropertyString](namespacevfigui.md#function-uigetpropertystring)**(int display, enum [UIPropertyString](namespacevfigui.md#enum-uipropertystring) property, char * value, int len) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetPropertyString](namespacevfigui.md#function-uigetpropertystring)**(enum [UIPropertyString](namespacevfigui.md#enum-uipropertystring) property, char * value, int len) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetPropertyString](namespacevfigui.md#function-uigetpropertystring)**(int display, enum [UIPropertyString](namespacevfigui.md#enum-uipropertystring) property, std::string & value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetPropertyString](namespacevfigui.md#function-uigetpropertystring)**(enum [UIPropertyString](namespacevfigui.md#enum-uipropertystring) property, std::string & value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetServerProperty](namespacevfigui.md#function-uisetserverproperty)**(int display, enum [UIServerProperty](namespacevfigui.md#enum-uiserverproperty) property, const std::string & value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetServerProperty](namespacevfigui.md#function-uigetserverproperty)**(int display, enum [UIServerProperty](namespacevfigui.md#enum-uiserverproperty) property, std::string & value) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetTerminalResourceDir](namespacevfigui.md#function-uigetterminalresourcedir)**(int display, const std::string & www_path) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetTerminalResourceDir](namespacevfigui.md#function-uigetterminalresourcedir)**(const std::string & www_path) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetKeypadType](namespacevfigui.md#function-uigetkeypadtype)**(int display) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiSetLocalProperties](namespacevfigui.md#function-uisetlocalproperties)**(bool local) |
| [DllSpec](sound_8h.md#define-dllspec) bool | **[uiGetLocalProperties](namespacevfigui.md#function-uigetlocalproperties)**() |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiLayout](namespacevfigui.md#function-uilayout)**(int display, const [UIRegion](structvfigui_1_1_u_i_region.md) * region, int regcnt, const [UIRegion](structvfigui_1_1_u_i_region.md) * oldreg, int oldregcnt) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiLayout](namespacevfigui.md#function-uilayout)**(const [UIRegion](structvfigui_1_1_u_i_region.md) * region, int regcnt, const [UIRegion](structvfigui_1_1_u_i_region.md) * oldreg, int oldregcnt) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiLayout](namespacevfigui.md#function-uilayout)**(int display, const [UIRegion](structvfigui_1_1_u_i_region.md) * region, int regcnt) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiLayout](namespacevfigui.md#function-uilayout)**(const [UIRegion](structvfigui_1_1_u_i_region.md) * region, int regcnt) |
| int | **[uiLayout](namespacevfigui.md#function-uilayout)**(int display, const std::vector< [UIRegion](structvfigui_1_1_u_i_region.md) > & reg) |
| int | **[uiLayout](namespacevfigui.md#function-uilayout)**(const std::vector< [UIRegion](structvfigui_1_1_u_i_region.md) > & reg) |
| int | **[uiLayout](namespacevfigui.md#function-uilayout)**(int display, const std::vector< [UIRegion](structvfigui_1_1_u_i_region.md) > & reg, const std::vector< [UIRegion](structvfigui_1_1_u_i_region.md) > & oldreg) |
| int | **[uiLayout](namespacevfigui.md#function-uilayout)**(const std::vector< [UIRegion](structvfigui_1_1_u_i_region.md) > & reg, const std::vector< [UIRegion](structvfigui_1_1_u_i_region.md) > & oldreg) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiLayout](namespacevfigui.md#function-uilayout)**(int display, const char * name) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiLayout](namespacevfigui.md#function-uilayout)**(const char * name) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetLayout](namespacevfigui.md#function-uigetlayout)**(int display, std::vector< [UIRegion](structvfigui_1_1_u_i_region.md) > & region) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetLayout](namespacevfigui.md#function-uigetlayout)**(std::vector< [UIRegion](structvfigui_1_1_u_i_region.md) > & region) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetRegionSize](namespacevfigui.md#function-uigetregionsize)**(int display, int region_id, int & width, int & height) |
| int | **[uiGetRegionSize](namespacevfigui.md#function-uigetregionsize)**(int region_id, int & width, int & height) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiEnterRegion](namespacevfigui.md#function-uienterregion)**(int display, int region_id) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiEnterRegion](namespacevfigui.md#function-uienterregion)**(int region_id) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiLeaveRegion](namespacevfigui.md#function-uileaveregion)**(int display) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiLeaveRegion](namespacevfigui.md#function-uileaveregion)**() |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiCurrentRegionPath](namespacevfigui.md#function-uicurrentregionpath)**(int display) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiCurrentRegionPath](namespacevfigui.md#function-uicurrentregionpath)**() |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetCurrentRegionPath](namespacevfigui.md#function-uisetcurrentregionpath)**(int display, const std::string & path) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetCurrentRegionPath](namespacevfigui.md#function-uisetcurrentregionpath)**(const std::string & path) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiRegionIsVisible](namespacevfigui.md#function-uiregionisvisible)**(int display, int region_id) |
| int | **[uiRegionIsVisible](namespacevfigui.md#function-uiregionisvisible)**(int region_id) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiReadConfig](namespacevfigui.md#function-uireadconfig)**(int display) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiReadConfig](namespacevfigui.md#function-uireadconfig)**() |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetCatalog](namespacevfigui.md#function-uisetcatalog)**(int display, const std::string & filename) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetCatalog](namespacevfigui.md#function-uisetcatalog)**(const std::string & filename) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetCatalog](namespacevfigui.md#function-uigetcatalog)**(int display) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetCatalog](namespacevfigui.md#function-uigetcatalog)**() |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiCatalogSetDelayedRelease](namespacevfigui.md#function-uicatalogsetdelayedrelease)**(unsigned num) |
| [DllSpec](sound_8h.md#define-dllspec) unsigned | **[uiCatalogGetDelayedRelease](namespacevfigui.md#function-uicataloggetdelayedrelease)**() |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetText](namespacevfigui.md#function-uigettext)**(int display, const std::string & name, const std::string & deflt ="") |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetText](namespacevfigui.md#function-uigettext)**(const std::string & name, const std::string & deflt ="") |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetText](namespacevfigui.md#function-uigettext)**(int display, const std::string & filename, const std::string & name, const std::string & deflt) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetText](namespacevfigui.md#function-uigettext)**(const std::string & filename, const std::string & name, const std::string & deflt) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetHtml](namespacevfigui.md#function-uigethtml)**(int display, const std::map< std::string, std::string > & value, const std::string & text, std::string & html) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetHtml](namespacevfigui.md#function-uigethtml)**(const std::map< std::string, std::string > & value, const std::string & text, std::string & html) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetHtmlURL](namespacevfigui.md#function-uigethtmlurl)**(int display, const std::map< std::string, std::string > & value, const std::string & url, std::string & html) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetHtmlURL](namespacevfigui.md#function-uigethtmlurl)**(const std::map< std::string, std::string > & value, const std::string & url, std::string & html) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetURLPath](namespacevfigui.md#function-uigeturlpath)**(int display, const std::string & url) |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiGetURLPath](namespacevfigui.md#function-uigeturlpath)**(const std::string & url) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiScreenshotPNG](namespacevfigui.md#function-uiscreenshotpng)**(int display, const char * filename) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiScreenshotPNG](namespacevfigui.md#function-uiscreenshotpng)**(const char * filename) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiScreenshotPNG](namespacevfigui.md#function-uiscreenshotpng)**(int display, const char * filename, int x, int y, int w, int h) |
| int | **[uiScreenshotPNG](namespacevfigui.md#function-uiscreenshotpng)**(const char * filename, int x, int y, int w, int h) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiScreenshotPNGData](namespacevfigui.md#function-uiscreenshotpngdata)**(int display, std::vector< unsigned char > & data) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiScreenshotPNGData](namespacevfigui.md#function-uiscreenshotpngdata)**(std::vector< unsigned char > & data) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiScreenshotPNGData](namespacevfigui.md#function-uiscreenshotpngdata)**(int display, std::vector< unsigned char > & data, int x, int y, int w, int h) |
| int | **[uiScreenshotPNGData](namespacevfigui.md#function-uiscreenshotpngdata)**(std::vector< unsigned char > & data, int x, int y, int w, int h) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiURL2PNG](namespacevfigui.md#function-uiurl2png)**(const char * filename, int width, int height, const std::map< std::string, std::string > & value, const std::string & url) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiURL2PNGData](namespacevfigui.md#function-uiurl2pngdata)**(std::vector< unsigned char > & data, int width, int height, const std::map< std::string, std::string > & value, const std::string & url) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiHTML2PNG](namespacevfigui.md#function-uihtml2png)**(const char * filename, int width, int height, const std::map< std::string, std::string > & value, const std::string & text) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiHTML2PNGData](namespacevfigui.md#function-uihtml2pngdata)**(std::vector< unsigned char > & data, int width, int height, const std::map< std::string, std::string > & value, const std::string & text) |
| const [DllSpec](sound_8h.md#define-dllspec) char * | **[uiLibVersion](namespacevfigui.md#function-uilibversion)**() |
| const [DllSpec](sound_8h.md#define-dllspec) char * | **[gui_GetVersion](namespacevfigui.md#function-gui-getversion)**() |
| const [DllSpec](sound_8h.md#define-dllspec) char * | **[gui_GetSvcVersion](namespacevfigui.md#function-gui-getsvcversion)**(int display) |
| const [DllSpec](sound_8h.md#define-dllspec) char * | **[gui_GetSvcVersion](namespacevfigui.md#function-gui-getsvcversion)**() |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetTransition](namespacevfigui.md#function-uisettransition)**(int display, int region_id, unsigned transtype, int duration_ms) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetTransition](namespacevfigui.md#function-uisettransition)**(int region_id, unsigned transtype, int duration_ms) |
| int | **[uiSetTransition](namespacevfigui.md#function-uisettransition)**(unsigned transtype, int duration_ms) |
| const [DllSpec](sound_8h.md#define-dllspec) std::vector< [UIErrorEntry](structvfigui_1_1_u_i_error_entry.md) > & | **[uiErrorList](namespacevfigui.md#function-uierrorlist)**() |
| const [DllSpec](sound_8h.md#define-dllspec)[UIStatistics](structvfigui_1_1_u_i_statistics.md) & | **[uiStatistics](namespacevfigui.md#function-uistatistics)**() |
| [DllSpec](sound_8h.md#define-dllspec) std::string | **[uiScriptError](namespacevfigui.md#function-uiscripterror)**() |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetIdleTime](namespacevfigui.md#function-uigetidletime)**(int display =0) |
| [DllSpec](sound_8h.md#define-dllspec) void | **[uiSetLogMask](namespacevfigui.md#function-uisetlogmask)**(unsigned mask) |
| [DllSpec](sound_8h.md#define-dllspec) unsigned | **[uiGetLogMask](namespacevfigui.md#function-uigetlogmask)**(void ) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiConfigLEDs](namespacevfigui.md#function-uiconfigleds)**(int display, [UILEDShape](namespacevfigui.md#enum-uiledshape) shape, int width, int height, unsigned off_rgba, unsigned on0_rgba, unsigned on1_rgba, unsigned on2_rgba, unsigned on3_rgba) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiConfigLEDs](namespacevfigui.md#function-uiconfigleds)**([UILEDShape](namespacevfigui.md#enum-uiledshape) shape, int width, int height, unsigned off_rgba, unsigned on0_rgba, unsigned on1_rgba, unsigned on2_rgba, unsigned on3_rgba) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiConfigLEDs](namespacevfigui.md#function-uiconfigleds)**(int display, const char * filename) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiConfigLEDs](namespacevfigui.md#function-uiconfigleds)**(const char * filename) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiShowLEDArea](namespacevfigui.md#function-uishowledarea)**(int display, [UIEdge](namespacevfigui.md#enum-uiedge) edge, int width, int height, unsigned bg_rgba) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiShowLEDArea](namespacevfigui.md#function-uishowledarea)**([UIEdge](namespacevfigui.md#enum-uiedge) edge, int width, int height, unsigned bg_rgba) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiHideLEDArea](namespacevfigui.md#function-uihideledarea)**(int display) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiHideLEDArea](namespacevfigui.md#function-uihideledarea)**() |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetLED](namespacevfigui.md#function-uisetled)**(int display, unsigned led, bool state) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetLED](namespacevfigui.md#function-uisetled)**(unsigned led, bool state) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetBacklightConfig](namespacevfigui.md#function-uisetbacklightconfig)**(int display, const std::vector< [UIBacklight](structvfigui_1_1_u_i_backlight.md) > & levels) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetBacklightConfig](namespacevfigui.md#function-uigetbacklightconfig)**(int display, std::vector< [UIBacklight](structvfigui_1_1_u_i_backlight.md) > & levels) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetBacklightLevel](namespacevfigui.md#function-uisetbacklightlevel)**(int display, int level) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiGetBacklightLevel](namespacevfigui.md#function-uigetbacklightlevel)**(int display, int & level) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiSetInput](namespacevfigui.md#function-uisetinput)**(int display, int region_id, const std::string & name, const std::string & value) |
| int | **[uiSetInput](namespacevfigui.md#function-uisetinput)**(int region_id, const std::string & name, const std::string & value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiRunAction](namespacevfigui.md#function-uirunaction)**(int display, int region_id, const std::string & name) |
| int | **[uiRunAction](namespacevfigui.md#function-uirunaction)**(int region_id, const std::string & name) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiRunAction2](namespacevfigui.md#function-uirunaction2)**(int display, int region_id, const std::string & name) |
| int | **[uiRunAction2](namespacevfigui.md#function-uirunaction2)**(int region_id, const std::string & name) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiAddOption](namespacevfigui.md#function-uiaddoption)**(int display, int region_id, const std::string & name, const std::string & value, const std::string & text, const std::string & style ="", const std::string & action ="", int position =-1) |
| int | **[uiAddOption](namespacevfigui.md#function-uiaddoption)**(int region_id, const std::string & name, const std::string & value, const std::string & text, const std::string & style ="", const std::string & action ="", int position =-1) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiScrollOption](namespacevfigui.md#function-uiscrolloption)**(int display, int region_id, const std::string & name, const std::string & value, [UIScrollPosition](namespacevfigui.md#enum-uiscrollposition) pos) |
| int | **[uiScrollOption](namespacevfigui.md#function-uiscrolloption)**(int region_id, const std::string & name, const std::string & value, [UIScrollPosition](namespacevfigui.md#enum-uiscrollposition) pos) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiRemoveOption](namespacevfigui.md#function-uiremoveoption)**(int display, int region_id, const std::string & name, const std::string & value) |
| int | **[uiRemoveOption](namespacevfigui.md#function-uiremoveoption)**(int region_id, const std::string & name, const std::string & value) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisablePINOK](namespacevfigui.md#function-uidisablepinok)**(int display =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiEnablePINOK](namespacevfigui.md#function-uienablepinok)**(int display =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiUpdate](namespacevfigui.md#function-uiupdate)**(int display, int region_id, const std::string & name, const std::string & html) |
| int | **[uiUpdate](namespacevfigui.md#function-uiupdate)**(int region_id, const std::string & name, const std::string & html) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiBeep](namespacevfigui.md#function-uibeep)**(int display, [UIBeep](namespacevfigui.md#enum-uibeep) beep) |
| int | **[uiBeep](namespacevfigui.md#function-uibeep)**([UIBeep](namespacevfigui.md#enum-uibeep) beep) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiNagScreen](namespacevfigui.md#function-uinagscreen)**(int display, enum [UINagScreenType](namespacevfigui.md#enum-uinagscreentype) type, int hide, int show) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiCanvas](namespacevfigui.md#function-uicanvas)**(int display, int region_id, [uiEventCallback](namespacevfigui.md#typedef-uieventcallback) cb, void * data =0) |
| int | **[uiCanvas](namespacevfigui.md#function-uicanvas)**(int region_id, [uiEventCallback](namespacevfigui.md#typedef-uieventcallback) cb, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDraw](namespacevfigui.md#function-uidraw)**(int display, int region_id, const [UIDrawing](classvfigui_1_1_u_i_drawing.md) & drawing) |
| int | **[uiDraw](namespacevfigui.md#function-uidraw)**(int region_id, const [UIDrawing](classvfigui_1_1_u_i_drawing.md) & drawing) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDrawAsync](namespacevfigui.md#function-uidrawasync)**(int display, int region_id, const [UIDrawing](classvfigui_1_1_u_i_drawing.md) & drawing, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiDrawAsync](namespacevfigui.md#function-uidrawasync)**(int region_id, const [UIDrawing](classvfigui_1_1_u_i_drawing.md) & drawing, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiTextMetrics](namespacevfigui.md#function-uitextmetrics)**(int display, int region_id, const std::string & font, int size, unsigned style, std::vector< [UITextWidth](structvfigui_1_1_u_i_text_width.md) > & width, int & height, int & descent) |
| int | **[uiTextMetrics](namespacevfigui.md#function-uitextmetrics)**(int region_id, const std::string & font, int size, unsigned style, std::vector< [UITextWidth](structvfigui_1_1_u_i_text_width.md) > & width, int & height, int & descent) |
| const [DllSpec](sound_8h.md#define-dllspec) char * | **[uiDataURLType](namespacevfigui.md#function-uidataurltype)**(const std::string & in) |
| [DllSpec](sound_8h.md#define-dllspec) bool | **[uiDataURLToString](namespacevfigui.md#function-uidataurltostring)**(std::string & out, const std::string & in) |
| [DllSpec](sound_8h.md#define-dllspec) bool | **[uiDataURLToFile](namespacevfigui.md#function-uidataurltofile)**(const char * filename, const std::string & in) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplay](namespacevfigui.md#function-uidisplay)**(int display, int region_id, const std::string & templateName, const std::string & text) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplay](namespacevfigui.md#function-uidisplay)**(int region_id, const std::string & templateName, const std::string & text) |
| int | **[uiDisplay](namespacevfigui.md#function-uidisplay)**(const std::string & templateName, const std::string & text) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplayAsync](namespacevfigui.md#function-uidisplayasync)**(int display, int region_id, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplayAsync](namespacevfigui.md#function-uidisplayasync)**(int region_id, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiDisplayAsync](namespacevfigui.md#function-uidisplayasync)**(const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplayAsync](namespacevfigui.md#function-uidisplayasync)**(int display, int region_id, const std::string & templateName, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplayAsync](namespacevfigui.md#function-uidisplayasync)**(int region_id, const std::string & templateName, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiDisplayAsync](namespacevfigui.md#function-uidisplayasync)**(const std::string & templateName, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiDisplayWait](namespacevfigui.md#function-uidisplaywait)**(int txn_id, int timeout_msec =-1) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiConfirm](namespacevfigui.md#function-uiconfirm)**(int display, int region_id, const std::string & templateName, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiConfirm](namespacevfigui.md#function-uiconfirm)**(int region_id, const std::string & templateName, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiConfirm](namespacevfigui.md#function-uiconfirm)**(const std::string & templateName, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiConfirmAsync](namespacevfigui.md#function-uiconfirmasync)**(int display, int region_id, const std::string & templateName, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiConfirmAsync](namespacevfigui.md#function-uiconfirmasync)**(int region_id, const std::string & templateName, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiConfirmAsync](namespacevfigui.md#function-uiconfirmasync)**(const std::string & templateName, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiConfirmWait](namespacevfigui.md#function-uiconfirmwait)**(int txn_id, int timeout_msec =-1) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInput](namespacevfigui.md#function-uiinput)**(int display, int region_id, const std::string & templateName, std::vector< std::string > & value, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInput](namespacevfigui.md#function-uiinput)**(int region_id, const std::string & templateName, std::vector< std::string > & value, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInput](namespacevfigui.md#function-uiinput)**(const std::string & templateName, std::vector< std::string > & value, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInputAsync](namespacevfigui.md#function-uiinputasync)**(int display, int region_id, const std::string & templateName, const std::vector< std::string > & value, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInputAsync](namespacevfigui.md#function-uiinputasync)**(int region_id, const std::string & templateName, const std::vector< std::string > & value, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInputAsync](namespacevfigui.md#function-uiinputasync)**(const std::string & templateName, const std::vector< std::string > & value, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInputWait](namespacevfigui.md#function-uiinputwait)**(int txn_id, std::vector< std::string > & value, int timeout_msec =-1) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInputPINCheck](namespacevfigui.md#function-uiinputpincheck)**(int display, int region_id, const std::string & templateName, const std::string & referencePIN, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInputPINCheck](namespacevfigui.md#function-uiinputpincheck)**(int region_id, const std::string & templateName, const std::string & referencePIN, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiInputPINCheck](namespacevfigui.md#function-uiinputpincheck)**(const std::string & templateName, const std::string & referencePIN, const std::string & text, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInputPINCheckAsync](namespacevfigui.md#function-uiinputpincheckasync)**(int display, int region_id, const std::string & templateName, const std::string & referencePIN, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInputPINCheckAsync](namespacevfigui.md#function-uiinputpincheckasync)**(int region_id, const std::string & templateName, const std::string & referencePIN, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiInputPINCheckAsync](namespacevfigui.md#function-uiinputpincheckasync)**(const std::string & templateName, const std::string & referencePIN, const std::string & text, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiInputPINCheckWait](namespacevfigui.md#function-uiinputpincheckwait)**(int txn_id, int timeout_msec =-1) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiMenu](namespacevfigui.md#function-uimenu)**(int display, int region_id, const std::string & templateName, const std::string & text, const struct [UIMenuEntry](structvfigui_1_1_u_i_menu_entry.md) menu[], int menusize, int preselect, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiMenu](namespacevfigui.md#function-uimenu)**(int region_id, const std::string & templateName, const std::string & text, const struct [UIMenuEntry](structvfigui_1_1_u_i_menu_entry.md) menu[], int menusize, int preselect, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| int | **[uiMenu](namespacevfigui.md#function-uimenu)**(const std::string & templateName, const std::string & text, const struct [UIMenuEntry](structvfigui_1_1_u_i_menu_entry.md) menu[], int menusize, int preselect, [uiCallback](namespacevfigui.md#typedef-uicallback) cb =0, void * cbdata =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiMenuAsync](namespacevfigui.md#function-uimenuasync)**(int display, int region_id, const std::string & templateName, const std::string & text, const struct [UIMenuEntry](structvfigui_1_1_u_i_menu_entry.md) menu[], int menusize, int preselect, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiMenuAsync](namespacevfigui.md#function-uimenuasync)**(int region_id, const std::string & templateName, const std::string & text, const struct [UIMenuEntry](structvfigui_1_1_u_i_menu_entry.md) menu[], int menusize, int preselect, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| int | **[uiMenuAsync](namespacevfigui.md#function-uimenuasync)**(const std::string & template_name, const std::string & text, const struct [UIMenuEntry](structvfigui_1_1_u_i_menu_entry.md) menu[], int menusize, int preselect, [uiAsyncCallback](namespacevfigui.md#typedef-uiasynccallback) cb =0, void * data =0) |
| [DllSpec](sound_8h.md#define-dllspec) int | **[uiMenuWait](namespacevfigui.md#function-uimenuwait)**(int txn_id, int timeout_msec =-1) |

## Detailed Description


Verifone GUI namespace 

## Types Documentation

### enum UICBType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_CB_RESULT | |  callback was invoked due to receiving the result  |
| UI_CB_UPDATE | |  callback was invoked due to receiving an update event  |
| UI_CB_LOAD | |  callback was invoked due to switching to a new dialog  |
| UI_CB_ERROR_LIST | |  callback was invoked due to receiving error data  |
| UI_CB_STATISTICS | |  callback was invoked due to receiving statistics data  |
| UI_CB_EVENT | |  callback was invoked due to receiving a custom event  |




Reason why the callback was invoked 


### enum @2

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_REGION_DEFAULT | =0|  default region ID  |




### enum @3

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_REGION_FLAG_HIDDEN | =1|  do not show region: Hiding a region does not terminate the contained dialog  |




### enum UIPropertyInt

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_PROP_TIMEOUT | =0|  Idle timeout in milliseconds, set to -1 to deactivate  |
| UI_PROP_PASSWORD_CHAR | |  Password masking character  |
| UI_PROP_DEFAULT_FONT_SIZE | |  Default font size  |
| UI_PROP_PIN_AUTO_ENTER | |  Automatically terminate the PIN entry when the maximum number of digits has been reached  |
| UI_PROP_PIN_CLEAR_ALL | |  The clear key deletes all entered digits instead of only the last one  |
| UI_PROP_PIN_BYPASS_KEY | |  Key code that is used for PIN bypass. Setting it to 0 disables PIN bypass. Supported bypass keys are: 13 (enter/confirm key), 8 (clear/backspace key) Add 1000 to disable bypass as soon as a digit has been entered, e.g. using 1013 will use the enter key as bypass key but only if no digit has been entered in between.  |
| UI_PROP_PIN_ALGORITHM | |  value used for iPS_SelectPINAlgo(), e.g. EMV_PIN, see "MX 900 Series Programmers Guide"  |
| UI_PROP_PIN_INTERCHAR_TIMEOUT | |  if >0: inter character timeout for PIN entry in milliseconds  |
| UI_PROP_PASSWORD_SHOW_CHAR | |  Time (in ms) to show last entered password character before masking it (ignored for PIN entry)  |
| UI_PROP_KEEP_DISPLAY | |  Determines whether the display is cleared (0) or whether the display keeps displaying the old content (1) when updating the layout using uiLayout. Keeping the display on layout updates does not work on all platforms, therefore, default is to clear.  |
| UI_PROP_UPDATE_EVENTS | |  if not 0 send update events each time the content of an input field changes or if the URL changes due to a load action (default: 0)  |
| UI_PROP_CIRCULAR_MENU | |  if not 0 the actions "up" and "down" actions of the menu will not stop at the start/end of the menu but jump to the last/first element instead. (default: 0)  |
| UI_PROP_TOUCH_ACTION_BEEP | |  if set (1) beep when an action was triggered from the touch screen. (default: 0) May be overwritten by server setting, see also [UI_SERVER_TOUCH_ACTION_BEEP](namespacevfigui.md#enumvalue-ui-server-touch-action-beep) |
| UI_PROP_STATISTICS | |  if not 0 update statistics information that can be read using uiStatistics. (default: 0)  |
| UI_PROP_RESTRICTED | |  if set (1) only up to three digit keys may be entered in a row. (default: 0)  |
| UI_PROP_CP_APP_MODE | |  if set (1) activate CP app specific restrictions, (default: 0)  |
| UI_PROP_SCROLL_COLOR | |  RGBA color value used for the scrollbar overlays, the value is an unsigned cast to an int (default: 0x00000060)  |
| UI_PROP_INPUT_ERROR_BEEP | |  if set (1) beep when an input character cannot be inserted into an input field (input field full or invalid character) (default: 0) May be overwritten by server setting, see also [UI_SERVER_INPUT_ERROR_BEEP](namespacevfigui.md#enumvalue-ui-server-input-error-beep) |
| UI_PROP_ZOOM_MAX | |  maximum zoom in percent (multitouch enabled ADKGUI only, default:400, minimum:100)  |
| UI_PROP_SCROLL_DISPLAY | |  time to show the scrollbar overlays in milliseconds. Scrollbar overlays are disabled by setting this to 0. When set to a negative value, overlays are displayed permanently  |
| UI_PROP_JS_QUOTA_SIZE | |  If >0 filesystem quota in kilobytes for use by JavaScript, see also [UI_PROP_JS_QUOTA_ROOT](namespacevfigui.md#enumvalue-ui-prop-js-quota-root) |
| UI_PROP_SCROLL_WIDTH | |  width of the scrollbar overlay in pixels, if 0 width is selected automatically based on screen resolution (default: 0)  |
| UI_DEVICE_WIDTH | =1000|  width of the display in pixels  |
| UI_DEVICE_HEIGHT | |  height of the display in pixels  |
| UI_DEVICE_COLOR_DEPTH | |  color depth in bits  |
| UI_DEVICE_SUPPORTS_TOUCH | |  1 if the device supports touch, else 0  |
| UI_DEVICE_SUPPORTS_BEEPER | |   |
| UI_DEVICE_SUPPORTS_AUDIO | |  1 if the device supports audio output, else 0  |
| UI_DEVICE_SUPPORTS_VIDEO | |  1 if the device supports video output, else 0  |
| UI_DEVICE_SUPPORTS_SIGCAP | |  1 if the device supports signature capture, else 0  |
| UI_DEVICE_SUPPORTS_COLOR_DISPLAY | |  1 if the device supports color display, else 0 (B/W display)  |
| UI_DEVICE_HAS_CAP_TOUCH_KEYPAD | |  1 if the device has a capacitive touch keypad, else 0  |
| UI_DEVICE_SUPPORTS_NAVIGATOR_MODE | |  1 if the device supports navigator mode  |
| UI_DEVICE_KEY_COUNT | |  number of keypad keys  |




Int properties for configuring global GUI options 


### enum UIPropertyString

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_PROP_DECIMAL_SEPARATOR | =2000|  Decimal separator  |
| UI_PROP_THOUSANDS_SEPARATOR | |  Thousands separator  |
| UI_PROP_DEFAULT_FONT | |  Default font name  |
| UI_PROP_RESOURCE_PATH | |  Resource path, default is www/<platform>  |
| UI_PROP_FILE_PREFIX | |  prefix that is added in front of the URL in uiInvokeURL and to the template names, e.g. using "en/" would access the files in the subdirectory "en".  |
| UI_PROP_KEYMAP | |  Keymap string of the format: "<key>=<char><char>...<char>\n<key>=<char>..."  |
| UI_PROP_CSS | |  name of a CSS file  |
| UI_PROP_RESOURCE_DEFAULT_PATH | |  Resource default path, default is www/default (or resource/default)  |
| UI_PROP_GUI_EXTENSIONS | |  (removed)  |
| UI_PROP_HTTP_HEADER_FIELDS | |  (removed)  |
| UI_PROP_CP_APP_DIR | |  CP app directory, if set only dialogs from the app dir can be shown. It should point to the base app directory without platform, e.g. /home/sys14/www/<app-id> on V/OS  |
| UI_PROP_LANGUAGE | |  ISO 639-1 language code (2 bytes, lowercase) or BCP 47 locale (5 bytes, 2 bytes lowercase language code, '-', 2 bytes uppercase country code, e.g. "en-US"). Setting the language loads catalog file <language>.ctlg. It is searched in the resource folder (e.g. www/VX820) and in the default resource folder (www/default) In case of a 5-byte locale if the file cannot be found, the country code is stripped and a catalog file just using the language code is searched. For example, using "de-AT", it would search for de-AT.ctlg in the resource and default resource folder and then it would search for de.ctlg in those two folders.  |
| UI_PROP_JS_ROOT | |  Setting this path activates the JavaScript filesystem module. I/O is restricted to happen inside this path. Use "$APPDIR" to refer to this path from within JavaScript. Images and videos may also use "$APPDIR" to refer to files in this path.  |
| UI_PROP_PRINT_ROOT | |  Setting this path activates JavaScript printing support. Receipts to be printed are looked up relative to this path.  |
| UI_PROP_PRINT_CSS | |  Name of the CSS file used for JavaScript printing. Default is "print.css"  |
| UI_PROP_JS_QUOTA_ROOT | |  If not empty base directory for JavaScript quota calculation, default is "", see also [UI_PROP_JS_QUOTA_SIZE](namespacevfigui.md#enumvalue-ui-prop-js-quota-size) |
| UI_DEVICE_MODEL | =3000|  Terminal model name, e.g. "Razor" or "VX820"  |




String properties for configuring global GUI options 


### enum UIServerProperty

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_SERVER_TOUCH_ACTION_BEEP | |  Configure action beep. "" use the application setting from [UI_PROP_TOUCH_ACTION_BEEP](namespacevfigui.md#enumvalue-ui-prop-touch-action-beep), "on" ignore [UI_PROP_TOUCH_ACTION_BEEP](namespacevfigui.md#enumvalue-ui-prop-touch-action-beep) and play an action beep, "off" ignore [UI_PROP_TOUCH_ACTION_BEEP](namespacevfigui.md#enumvalue-ui-prop-touch-action-beep) and do not play an action beep  |
| UI_SERVER_INPUT_ERROR_BEEP | |  Configure input error beep. "" use the application setting from [UI_PROP_INPUT_ERROR_BEEP](namespacevfigui.md#enumvalue-ui-prop-input-error-beep), "on" ignore [UI_PROP_INPUT_ERROR_BEEP](namespacevfigui.md#enumvalue-ui-prop-input-error-beep) and play an input error beep, "off" ignore [UI_PROP_INPUT_ERROR_BEEP](namespacevfigui.md#enumvalue-ui-prop-input-error-beep) and do not play an input error beep  |
| UI_SERVER_KEYMAP | |  Configure global keymap that overrides application settings. The format is the same as for [UI_PROP_KEYMAP](namespacevfigui.md#enumvalue-ui-prop-keymap). Set to "" to revert to application settings  |




Server properties 


### enum @4

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_TRANS_UP | =0x1|  movement direction: up, depending on the transition type horizontal an vertical movement may be combined.  |
| UI_TRANS_RIGHT | =0x2|  movement direction: right, depending on the transition type horizontal an vertical movement may be combined.  |
| UI_TRANS_DOWN | =0x4|  movement direction: down, depending on the transition type horizontal an vertical movement may be combined.  |
| UI_TRANS_LEFT | =0x8|  movement direction: left, depending on the transition type horizontal an vertical movement may be combined.  |
| UI_TRANS_DIRECTION_MASK | =0xf|  mask containing the movement direction bits  |
| UI_TRANS_EASE_IN | =0x10|  transition accelerates after the start  |
| UI_TRANS_EASE_OUT | =0x20|  transition decelerates before the end  |
| UI_TRANS_EASE_INOUT | =0x30|  combination of UI_TRANS_EASE_IN and UI_TRANS_EASE_OUT  |
| UI_TRANS_EASE_MASK | =0x30|  mask containing the acceleration bits  |
| UI_TRANS_NONE | =0x000|  No transition  |
| UI_TRANS_SLIDE | =0x100|  The dialog slides to the screen shifting out the old one  |
| UI_TRANS_SLIDEON | =0x200|  The dialog slides to the screen covering the old one  |
| UI_TRANS_SWAP | =0x300|  The new dialog starts behind the old one. Then both slide to opposite sides and then back, this time with the new dialog in front.  |
| UI_TRANS_CROSSFADE | =0x400|  Crossfade between old and new dialog. The movement direction flags are ignored.  |
| UI_TRANS_TYPE_MASK | =0xfff00|  mask containing the transition type bits  |




bit mask constants for describing the transition 


### enum UILEDShape

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_SHAPE_RECTANGLE | |  rectangular shape  |
| UI_SHAPE_ELLIPSE | |  elliptic shape  |




LED shape 


### enum UIEdge

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_EDGE_TOP | |  top edge of display  |
| UI_EDGE_RIGHT | |  right edge of display  |
| UI_EDGE_BOTTOM | |  bottom edge of display  |
| UI_EDGE_LEFT | |  left edge of display  |




Display edge selection 


### enum UIScrollPosition

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_SCROLL_TOP | |  scroll element to top of menu  |
| UI_SCROLL_BOTTOM | |  scroll element to bottom of menu  |




scroll position for uiScrollOption 


### enum UIBeep

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_BEEP_NORMAL | |  normal beep  |
| UI_BEEP_ERROR | |  error beep  |




Beep 


### enum UINagScreenType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_NAG_TEST_DEVICE | |  device is a test device  |




Nag screen type 


### enum UICanvasEvent

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_PUSH | |  The user has touched the screen  |
| UI_DRAG | |  The user is dragging the finger on the screen  |
| UI_RELEASE | |  The user has released the screen  |
| UI_KEYDOWN | |  The user has pressed a button on the keypad  |
| UI_KEYUP | |  The user has released a button on the keypad  |
| UI_TERMINATE | |  The dialog has terminated, the return code can be found in _key_ |




Canvas events 


### enum UIMenuOptions

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| UI_MENU_DISABLED | =1|  show the menu entry as disabled or leave it out (depending on device)  |




menu options 


### typedef uiCallback

```cpp
typedef bool(* uiCallback) (void *data);
```



# Parameter Overloading

Most functions take a `display` and `region_id` parameter. For convenience these functions are overloaded so that these parameters may be omitted when using the default display and region:

* When the default display is to be used, `display` may be omitted
* When the default region on the default display is to be used `display` and `region_id` may be omitted.

If the key-value map is not required for a specific purpose, an overloaded version is provided so that the key-value map can be omitted. callback function that is called at regular intervals while the dialog is displayed. If the callback returns false, the dialog is cancelled; datadata pointer provided by the application 


### typedef uiAsyncCallback

```cpp
typedef void(* uiAsyncCallback) (void *data, UICBType type, UICBData &uidata);
```


**Parameters**: 

  * **data** data pointer provided by the application 
  * **type** type / reason why the callback was invoked 
  * **uidata** object to access data of the current transaction 


**Note**: The callback will be run within a different thread context, so make sure to use appropriate locking if required. All callback functions share the same thread. Therefore, do not use functions that block for a long time, in particular [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) must not be called. 

callback function that is called when a dialog has returned some data. In case of dialog sequences (e.g. a dialog uses the load-URL action) the callback is invoked after each step of the sequence. 


### typedef uiDisconnectCallback

```cpp
typedef void(* uiDisconnectCallback) (int display);
```


**Parameters**: 

  * **display** display number 


callback function that is called when the contact to a server is lost. It runs in parallel to UI functions that will return UI_ERR_CONNECTION_LOST so the order of returning the error and invocation of the callback is unspecified. 


### typedef uiEventCallback

```cpp
typedef void(* uiEventCallback) (void *data, UICanvasEvent event, int x, int y, int key, unsigned flags);
```


**Parameters**: 

  * **data** data pointer provided by the application 
  * **event** event type 
  * **x** x-coordinate (for [UI_PUSH](namespacevfigui.md#enumvalue-ui-push), [UI_DRAG](namespacevfigui.md#enumvalue-ui-drag) and [UI_RELEASE](namespacevfigui.md#enumvalue-ui-release)) 
  * **y** y-coordinate (for [UI_PUSH](namespacevfigui.md#enumvalue-ui-push), [UI_DRAG](namespacevfigui.md#enumvalue-ui-drag) and [UI_RELEASE](namespacevfigui.md#enumvalue-ui-release)) 
  * **key** key code (for [UI_KEYDOWN](namespacevfigui.md#enumvalue-ui-keydown) and [UI_KEYUP](namespacevfigui.md#enumvalue-ui-keyup)) or return code (UI_TERMINATE) 
  * **flags** reserved for future use, currently always 0 


**Note**: The callback will be run within a different thread context, so make sure to use appropriate locking if required. All callback functions share the same thread. Therefore, do not use functions that block for a long time, in particular [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) must not be called. 

callback function for receiving Canvas events. 



## Functions Documentation

### function uiSetConnectAttempts

```cpp
DllSpec void uiSetConnectAttempts(
    int num
)
```


**Parameters**: 

  * **num** number of attempts, if 0 use an infinite number of attempts (default: 30). 


**Note**: This takes effect on the next attempt to connect to the server, therefore, it should be invoked before any other function. 

set the number of attempts to contact the server. After a failed attempt the library waits for about 1s. 


### function uiGetConnectAttempts

```cpp
DllSpec int uiGetConnectAttempts()
```


**Return**: Number of attempts 

get the number of attempts to contact the server 


### function uiSetDisconnectCallback

```cpp
DllSpec void uiSetDisconnectCallback(
    uiDisconnectCallback cb
)
```


**Parameters**: 

  * **cb** callback function or NULLThe callback is invoked with the display number. 


set callback that gets invoked if the contact to the server is lost 


### function uiGetDisconnectCallback

```cpp
DllSpecuiDisconnectCallback uiGetDisconnectCallback()
```


**Return**: callback function as set with [uiSetDisconnectCallback()](namespacevfigui.md#function-uisetdisconnectcallback); 

get callback that gets invoked if the contact to the server is lost 


### function uiSetKeepalive

```cpp
DllSpec void uiSetKeepalive(
    int count,
    int interval
)
```


**Parameters**: 

  * **count** number of keepalive probes to send before dropping the link 
  * **interval** time in seconds between sending keepalive probes 


**Note**: This needs to be invoked before any other functions that might establish a connection to the GUI server. 

set keepalive settings for the next connection setup. 


### function uiGetKeepalive

```cpp
DllSpec void uiGetKeepalive(
    int & count,
    int & interval
)
```


**Parameters**: 

  * **count** number of keepalive probes to send before dropping the link 
  * **interval** time in seconds between sending keepalive probes 


get keepalive settings 


### function uiDisconnect

```cpp
DllSpec void uiDisconnect(
    int display
)
```


**Parameters**: 

  * **display** display 


disconnect from GUI server. The next call to another GUI function will implicitely reconnect to the server 


### function uiReadRuntimeID

```cpp
DllSpec int uiReadRuntimeID(
    int display,
    std::string & id,
    int timeout_msec =5000
)
```


**Parameters**: 

  * **display** display 
  * **id** runtime ID string 
  * **timeout_msec** timeout in milliseconds. In case of a negative timeout wait forever. 


**Return**: error code 

read runtime ID: This is a random string, that remains the same during the runtime of the server and changes, if the server has been restarted 


### function uiPrint

```cpp
DllSpec std::string uiPrint(
    const char * format,
    ... 
)
```


**Parameters**: 

  * **format** printf-like format string. It supports the commonly known format specifiers 's', 'i', 'd', 'u', 'o', 'x', 'X', 'p', 'c', 'f', 'e', 'g'. In addition the following format specifiers are supported:

* 'S': format as string and substitute the special HTML characters '&', '<', '>', '"' and '\'' by character references (e.g. '&amp;', '&lt;' ...).
* 'C': format as character and sustitute HTML characters 


**Return**: formatted string 

perform printf-like formatting. 


### function uiPrintV

```cpp
DllSpec std::string uiPrintV(
    const char * format,
    va_list va
)
```


perfom printf-like formatting. This is the same as [uiPrint()](namespacevfigui.md#function-uiprint) just taking a va_list instead of a variable number of arguments 


### function uiDisplayCount

```cpp
DllSpec int uiDisplayCount()
```


**Return**: number of displays 

determine the number of displays 


### function uiDisplay

```cpp
DllSpec int uiDisplay(
    int display,
    int region_id,
    const std::string & text
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ and _region_id_ are optional, see [Parameter Overloading]

Display an HTML document on screen 


### function uiDisplay

```cpp
DllSpec int uiDisplay(
    int region_id,
    const std::string & text
)
```


### function uiDisplay

```cpp
inline int uiDisplay(
    const std::string & text
)
```


### function uiInvoke

```cpp
DllSpec int uiInvoke(
    int display,
    int region_id,
    stringmap & value,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. On return _value_ contains the updated input values. 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **cb** optional callback function 
  * **cbdata** data pointer passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the HTML fragment 

**Note**: _display_, _region_id_ and _value_ are optional, see [Parameter Overloading]

Invoke an HTML dialog. 


### function uiInvoke

```cpp
DllSpec int uiInvoke(
    int region_id,
    stringmap & value,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvoke

```cpp
inline int uiInvoke(
    stringmap & value,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvoke

```cpp
inline int uiInvoke(
    int display,
    int region_id,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvoke

```cpp
inline int uiInvoke(
    int region_id,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvoke

```cpp
inline int uiInvoke(
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvokeTemplate

```cpp
DllSpec int uiInvokeTemplate(
    int display,
    int region_id,
    stringmap & value,
    const std::string & template_name,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. On return _value_ contains the updated input values. 
  * **template_name** file name of template into which _text_ is inserted 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **cb** optional callback function 
  * **cbdata** data pointer passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the HTML fragment 

**Note**: _display_, _region_id_ and _value_ are optional, see [Parameter Overloading]

Invoke an HTML dialog with template: The provided text is inserted into the template file and then displayed. 


### function uiInvokeTemplate

```cpp
DllSpec int uiInvokeTemplate(
    int region_id,
    stringmap & value,
    const std::string & template_name,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvokeTemplate

```cpp
inline int uiInvokeTemplate(
    stringmap & value,
    const std::string & template_name,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvokeTemplate

```cpp
inline int uiInvokeTemplate(
    int display,
    int region_id,
    const std::string & template_name,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvokeTemplate

```cpp
inline int uiInvokeTemplate(
    int region_id,
    const std::string & template_name,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvokeTemplate

```cpp
inline int uiInvokeTemplate(
    const std::string & template_name,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInvokeURL

```cpp
DllSpec int uiInvokeURL(
    int display,
    int region_id,
    stringmap & value,
    const char * url,
    uiCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. On return _value_ contains the updated input values. 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) 
  * **cb** optional callback function 
  * **cbdata** data pointer passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the HTML fragment 

**Note**: _display_, _region_id_ and _value_ are optional, see [Parameter Overloading]

display a dialog 


### function uiInvokeURL

```cpp
DllSpec int uiInvokeURL(
    int region_id,
    stringmap & value,
    const char * url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for uiInvokeURL(0,region_id,value,url,cb,cbdata); 


### function uiInvokeURL

```cpp
inline int uiInvokeURL(
    stringmap & value,
    const char * url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for uiInvokeURL(0,UI_REGION_DEFAULT,value,url,cb,cbdata); 


### function uiInvokeURL

```cpp
inline int uiInvokeURL(
    int display,
    int region_id,
    const char * url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for uiInvokeURL(display, region_id, dummy_value,url,cb,cbdata); 


### function uiInvokeURL

```cpp
inline int uiInvokeURL(
    int region_id,
    const char * url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for uiInvokeURL(0,region_id,dummy_value,url,cb,cbdata); 


### function uiInvokeURL

```cpp
inline int uiInvokeURL(
    const char * url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for uiInvokeURL(0,UI_REGION_DEFAULT,dummy_value,url,cb,cbdata); 


### function uiInvokeURL

```cpp
DllSpec int uiInvokeURL(
    int display,
    int region_id,
    stringmap & value,
    const std::string & url,
    uiCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. On return _value_ contains the updated input values. 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) 
  * **cb** optional callback function 
  * **cbdata** data pointer passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the HTML fragment 

**Note**: _display_, _region_id_ and _value_ are optional, see [Parameter Overloading]

display a dialog 


### function uiInvokeURL

```cpp
inline int uiInvokeURL(
    int region_id,
    stringmap & value,
    const std::string & url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for iInvokeURL(0,region_id,value,url,cb,cbdata); 


### function uiInvokeURL

```cpp
inline int uiInvokeURL(
    stringmap & value,
    const std::string & url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for iInvokeURL(0,UI_REGION_DEFAULT,value,url,cb,cbdata); 


### function uiInvokeURL

```cpp
inline int uiInvokeURL(
    int display,
    int region_id,
    const std::string & url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for uiInvokeURL(display,region_id,dummy_value,url,cb,cbdata); 


### function uiInvokeURL

```cpp
inline int uiInvokeURL(
    int region_id,
    const std::string & url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for uiInvokeURL(0,region_id,dummy_value,url,cb,cbdata); 


### function uiInvokeURL

```cpp
inline int uiInvokeURL(
    const std::string & url,
    uiCallback cb =0,
    void * cbdata =0
)
```


shortcut for uiInvokeURL(0,UI_REGION_DEFAULT, dummy_value,url,cb,cbdata); 


### function uiInvokeAsync

```cpp
DllSpec int uiInvokeAsync(
    int display,
    int region_id,
    const stringmap & value,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or transaction ID. The transaction ID is required for obtaining the dialog result using [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait)

**Note**: 

  * _display_, _region_id_ and _value_ are optional, see [Parameter Overloading]
  * If no callback was provided, [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) must be called to obtain the result and release allocated memory or [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) needs to be called to cancel the dialog. If a callback was provided [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) cannot be used and will return UI_ERR_INVALID. 


Asynchronously invoke an HTML dialog. 


### function uiInvokeAsync

```cpp
DllSpec int uiInvokeAsync(
    int region_id,
    const stringmap & value,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeAsync(0,region_id,value,text,cb,data); 


### function uiInvokeAsync

```cpp
inline int uiInvokeAsync(
    const stringmap & value,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeAsync(0,UI_REGION_DEFAULT, value, text,cb,data); 


### function uiInvokeAsync

```cpp
inline int uiInvokeAsync(
    int display,
    int region_id,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeAsync(display, region_id,dummy_value,text,cb,data); 


### function uiInvokeAsync

```cpp
inline int uiInvokeAsync(
    int region_id,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeAsync(0,region_id,dummy_value,text,cb,data); 


### function uiInvokeAsync

```cpp
inline int uiInvokeAsync(
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeAsync(0,UI_REGION_DEFAULT, dummy_value, text,cb,data); 


### function uiInvokeTemplateAsync

```cpp
DllSpec int uiInvokeTemplateAsync(
    int display,
    int region_id,
    const stringmap & value,
    const std::string & template_name,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **template_name** template file 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or transaction ID. The transaction ID is required for obtaining the dialog result using [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait)

**Note**: 

  * _display_, _region_id_ and _value_ are optional, see [Parameter Overloading]
  * If no callback was provided, [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) must be called to obtain the result and release allocated memory or [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) needs to be called to cancel the dialog. If a callback was provided [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) cannot be used and will return UI_ERR_INVALID. 


Asynchronously invoke an HTML dialog. The provided text is inserted into the template file and then the dialog is displayed 


### function uiInvokeTemplateAsync

```cpp
DllSpec int uiInvokeTemplateAsync(
    int region_id,
    const stringmap & value,
    const std::string & template_name,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeTemplateAsync(0,region_id,value,template_name,text,cb,data); 


### function uiInvokeTemplateAsync

```cpp
inline int uiInvokeTemplateAsync(
    const stringmap & value,
    const std::string & template_name,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeTemplateAsync(0, UI_REGION_DEFAULT, value, template_name, text, cb,data); 


### function uiInvokeTemplateAsync

```cpp
inline int uiInvokeTemplateAsync(
    int display,
    int region_id,
    const std::string & template_name,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeTemplateAsync(display,region_id,dummy_value,template_name,text, cb,data); 


### function uiInvokeTemplateAsync

```cpp
inline int uiInvokeTemplateAsync(
    int region_id,
    const std::string & template_name,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeTemplateAsync(0,region_id,dummy_value,template_name,text, cb,data); 


### function uiInvokeTemplateAsync

```cpp
inline int uiInvokeTemplateAsync(
    const std::string & template_name,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeTemplateAsync(0,UI_REGION_DEFAULT, dummy_value, template_name, text, cb,data); 


### function uiInvokeURLAsync

```cpp
DllSpec int uiInvokeURLAsync(
    int display,
    int region_id,
    const stringmap & value,
    const char * url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or transaction ID. The transaction ID is required for obtaining the dialog result using [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait)

**Note**: 

  * _display_, _region_id_ and _value_ are optional, see [Parameter Overloading]
  * If no callback was provided, [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) must be called to obtain the result and release allocated memory or [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) needs to be called to cancel the dialog. If a callback was provided [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) cannot be used and will return UI_ERR_INVALID. 


Asynchronously invoke an HTML dialog 


### function uiInvokeURLAsync

```cpp
DllSpec int uiInvokeURLAsync(
    int region_id,
    const stringmap & value,
    const char * url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(0,region_id,value,url,cb,data); 


### function uiInvokeURLAsync

```cpp
inline int uiInvokeURLAsync(
    const stringmap & value,
    const char * url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); 


### function uiInvokeURLAsync

```cpp
inline int uiInvokeURLAsync(
    int display,
    int region_id,
    const char * url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(display, region_id,dummy_value,url,cb,data); 


### function uiInvokeURLAsync

```cpp
inline int uiInvokeURLAsync(
    int region_id,
    const char * url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(0,region_id,dummy_value,url,cb,data); 


### function uiInvokeURLAsync

```cpp
inline int uiInvokeURLAsync(
    const char * url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(0, UI_REGION_DEFAULT, dummy_value, url,cb,data); 


### function uiInvokeURLAsync

```cpp
DllSpec int uiInvokeURLAsync(
    int display,
    int region_id,
    const stringmap & value,
    const std::string & url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or transaction ID. The transaction ID is required for obtaining the dialog result using [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait)

**Note**: 

  * _display_, _region_id_ and _value_ are optional, see [Parameter Overloading]
  * If no callback was provided, [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) must be called to obtain the result and release allocated memory or [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) needs to be called to cancel the dialog. If a callback was provided [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) cannot be used and will return UI_ERR_INVALID. 


Asynchronously invoke an HTML dialog 


### function uiInvokeURLAsync

```cpp
inline int uiInvokeURLAsync(
    int region_id,
    const stringmap & value,
    const std::string & url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(0, region_id, value, url,cb,data); 


### function uiInvokeURLAsync

```cpp
inline int uiInvokeURLAsync(
    const stringmap & value,
    const std::string & url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(0, UI_REGION_DEFAULT, value, url,cb,data); 


### function uiInvokeURLAsync

```cpp
inline int uiInvokeURLAsync(
    int display,
    int region_id,
    const std::string & url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(display, region_id,dummy_value,url,cb,data); 


### function uiInvokeURLAsync

```cpp
inline int uiInvokeURLAsync(
    int region_id,
    const std::string & url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(0,region_id,dummy_value,url,cb,data); 


### function uiInvokeURLAsync

```cpp
inline int uiInvokeURLAsync(
    const std::string & url,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiInvokeURLAsync(0, UI_REGION_DEFAULT, dummy_value, url,cb,data); 


### function uiInvokeWait

```cpp
DllSpec int uiInvokeWait(
    int txn_id,
    std::map< std::string, std::string > & value,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **txn_id** Request ID of the dialog 
  * **value** entered values are added to this map 
  * **timeout_msec** timeout in milliseconds. In case of a negative timeout wait forever. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the HTML fragment. In case of a timeout UI_ERR_WAIT_TIMEOUT is returned and [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) has to be called again or memory may be leaked. As an alternative [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) may be called to cancel the dialog. 

**Note**: 

  * uiInvokeWait cannot be called if a callback function has been provided when invoking the dialog. 
  * When displaying dialog sequences (e.g. using load url in an action) [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) handles the switching to the next dialog in the sequence. 


Wait for a dialog to finish 


### function uiInvokeWait

```cpp
inline int uiInvokeWait(
    int txn_id,
    int timeout_msec =-1
)
```


the same as uiInvokeWait(int txn_id, std::map<std::string,std::string> &value, int timeout_msec=-1) but discards returned input values 


### function uiInvokeCancel

```cpp
DllSpec int uiInvokeCancel(
    int txn_id,
    std::map< std::string, std::string > & value
)
```


**Parameters**: 

  * **txn_id** Request ID of the dialog 
  * **value** entered values are added to this map 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)). For asynchronous calls with callback function the return value cannot be obtained since it is delivered to the callback function. In this case always UI_ERR_OK is returned. Normally the error code will be UI_ERR_CANCELLED, however, the returncode reflects the true result of the dialog, i.e. if the user terminated the dialog just before cancelling it, the returncode will contain the result of the dialog. 

Cancel dialog. This may be called whenever [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) can be called and cancels the dialog. 


### function uiInvokeCancel

```cpp
inline int uiInvokeCancel(
    int txn_id
)
```


the same as [uiInvokeCancel(int txn_id, std::map<std::string,std::string> &value)](namespacevfigui.md#function-uiinvokecancel) but discards returned input values 


### function uiInvokeCancelAsync

```cpp
DllSpec int uiInvokeCancelAsync(
    int txn_id
)
```


**Parameters**: 

  * **txn_id** Request ID of the dialog 


**Return**: error code 

Cancel dialog without reading the result, i.e. [uiInvokeWait()](namespacevfigui.md#function-uiinvokewait) will have to be called afterwards. 


### function uiInvokeURLDetached

```cpp
DllSpec int uiInvokeURLDetached(
    int display,
    int region_id,
    const char * url
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) (but no result from dialog) 

**Note**: 

  * _display_ and _region_id_ are optional, see [Parameter Overloading]
  * This function is useful for example for displaying some kind of virtual keyboard. 


Create a new thread and display a dialog from within this thread. The thread terminates when the dialog terminates. Dialog return values are discarded. 


### function uiInvokeURLDetached

```cpp
DllSpec int uiInvokeURLDetached(
    int region_id,
    const char * url
)
```


shortcut for uiInvokeURLDetached(0,region_id,url); 


### function uiInvokeURLDetached

```cpp
inline int uiInvokeURLDetached(
    const char * url
)
```


shortcut for uiInvokeURLDetached(0,UI_REGION_DEFAULT,url); 


### function uiClear

```cpp
DllSpec int uiClear(
    int display,
    int region_id
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

Remove a dialog or sub-regions from a region. If the dialog is still active, it is cancelled. After the the dialog has been removed, the region is empty, i.e. it displays nothing and does not clear the region. 


### function uiClear

```cpp
inline int uiClear(
    int region_id
)
```


shortcut for uiClear(0,region_id); 


### function uiSetPropertyInt

```cpp
DllSpec int uiSetPropertyInt(
    int display,
    enum UIPropertyInt property,
    int value
)
```


**Parameters**: 

  * **display** display 
  * **property** property to be set 
  * **value** new value 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ is optional, see [Parameter Overloading]

set int property 


### function uiSetPropertyInt

```cpp
DllSpec int uiSetPropertyInt(
    enum UIPropertyInt property,
    int value
)
```


shortcut for uiSetPropertyInt(0,property,value); 


### function uiGetPropertyInt

```cpp
DllSpec int uiGetPropertyInt(
    int display,
    enum UIPropertyInt property,
    int * value
)
```


**Parameters**: 

  * **display** display 
  * **property** property to be set 
  * **value** current value 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ is optional, see [Parameter Overloading]

get int property 


### function uiGetPropertyInt

```cpp
DllSpec int uiGetPropertyInt(
    enum UIPropertyInt property,
    int * value
)
```


shortcut for uiGetPropertyInt(0,property,value); 


### function uiSetPropertyString

```cpp
DllSpec int uiSetPropertyString(
    int display,
    enum UIPropertyString property,
    const char * value
)
```


**Parameters**: 

  * **display** display 
  * **property** property to be set 
  * **value** new value 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ is optional, see [Parameter Overloading]

set string property 


### function uiSetPropertyString

```cpp
DllSpec int uiSetPropertyString(
    enum UIPropertyString property,
    const char * value
)
```


shortcut for uiSetPropertyString(0,property,value); 


### function uiSetPropertyString

```cpp
inline int uiSetPropertyString(
    int display,
    enum UIPropertyString property,
    const std::string & value
)
```


**Parameters**: 

  * **display** display 
  * **property** property to be set 
  * **value** new value 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ is optional, see [Parameter Overloading]

set string property 


### function uiSetPropertyString

```cpp
inline int uiSetPropertyString(
    enum UIPropertyString property,
    const std::string & value
)
```


shortcut for uiSetPropertyString(0,property,value); 


### function uiGetPropertyString

```cpp
DllSpec int uiGetPropertyString(
    int display,
    enum UIPropertyString property,
    char * value,
    int len
)
```


**Parameters**: 

  * **display** display 
  * **property** property to be set 
  * **value** current value 
  * **len** size ouf output buffer _value_ in bytes 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ is optional, see [Parameter Overloading]

get string property 


### function uiGetPropertyString

```cpp
DllSpec int uiGetPropertyString(
    enum UIPropertyString property,
    char * value,
    int len
)
```


shortcut for uiGetPropertyString(0,property,value,len); 


### function uiGetPropertyString

```cpp
DllSpec int uiGetPropertyString(
    int display,
    enum UIPropertyString property,
    std::string & value
)
```


**Parameters**: 

  * **display** display 
  * **property** property to be set 
  * **value** current value 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ is optional, see [Parameter Overloading]

get string property 


### function uiGetPropertyString

```cpp
DllSpec int uiGetPropertyString(
    enum UIPropertyString property,
    std::string & value
)
```


shortcut for uiGetPropertyString(0,property,value); 


### function uiSetServerProperty

```cpp
DllSpec int uiSetServerProperty(
    int display,
    enum UIServerProperty property,
    const std::string & value
)
```


**Parameters**: 

  * **display** display 
  * **property** property to be set 
  * **value** new value 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

set global server property 


### function uiGetServerProperty

```cpp
DllSpec int uiGetServerProperty(
    int display,
    enum UIServerProperty property,
    std::string & value
)
```


**Parameters**: 

  * **display** display 
  * **property** property to be set 
  * **value** current value 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

get global server property 


### function uiGetTerminalResourceDir

```cpp
DllSpec std::string uiGetTerminalResourceDir(
    int display,
    const std::string & www_path
)
```


**Parameters**: 

  * **display** display 
  * **www_path** path of the www directory containing the resource files 


**Return**: path to the terminal specific subdirectory 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * The environment variable GUIPRT_APPNAME is not considered. 


determine the HW dependent terminal specific subdirectory inside the 'www' directory 


### function uiGetTerminalResourceDir

```cpp
DllSpec std::string uiGetTerminalResourceDir(
    const std::string & www_path
)
```


shortcut for uiGetTerminalResourceDir(0,www_path); 


### function uiGetKeypadType

```cpp
DllSpec std::string uiGetKeypadType(
    int display
)
```


**Return**: keypad type 

determine the keypad type 


### function uiSetLocalProperties

```cpp
DllSpec void uiSetLocalProperties(
    bool local
)
```


**Parameters**: 

  * **local** if true activate thread local properties, if false discard them 


**Note**: Switching affects all displays. 

de-/activate thread local properties for the current thread. Activating thread local properties initially copies the global properties to the current thread. 


### function uiGetLocalProperties

```cpp
DllSpec bool uiGetLocalProperties()
```


**Return**: true if thread local properties are used, else return false 

### function uiLayout

```cpp
DllSpec int uiLayout(
    int display,
    const UIRegion * region,
    int regcnt,
    const UIRegion * oldreg,
    int oldregcnt
)
```


**Parameters**: 

  * **display** display 
  * **region** array containing the regions, at least one region must be provided 
  * **regcnt** number of entries in _region_
  * **oldreg** optional: if not NULL array containing the previous set of regions 
  * **oldregcnt** optional: number of entries in _oldreg_


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * If a region is removed that still contains a dialog this dialog is cancelled. 


define output regions on the display. Region with id==0 is the default region. For incremental layout updates the previous layout may be provided to be checked before applying the new layout. If the previous layout does not match the current layout in guiserver, UI_ERR_MODIFIED is returned. This feature can be used to detect and prevent race conditions if several processes concurrently try to update a layout. 


### function uiLayout

```cpp
DllSpec int uiLayout(
    const UIRegion * region,
    int regcnt,
    const UIRegion * oldreg,
    int oldregcnt
)
```


shortcut for uiLayout(0,region,regcnt,oldreg,oldregcnt); 


### function uiLayout

```cpp
DllSpec int uiLayout(
    int display,
    const UIRegion * region,
    int regcnt
)
```


shortcut for uiLayout(display, region,regcnt,0,0); 


### function uiLayout

```cpp
DllSpec int uiLayout(
    const UIRegion * region,
    int regcnt
)
```


shortcut for uiLayout(0,region,regcnt,0,0); 


### function uiLayout

```cpp
inline int uiLayout(
    int display,
    const std::vector< UIRegion > & reg
)
```


**Parameters**: 

  * **display** display 
  * **reg** vector containing the regions, at least one region must be provided 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * If a region is removed that still contains a dialog this dialog is cancelled. 


define output regions on the display. Region with id==0 is the default region. 


### function uiLayout

```cpp
inline int uiLayout(
    const std::vector< UIRegion > & reg
)
```


shortcut for uiLayout(0,reg); 


### function uiLayout

```cpp
inline int uiLayout(
    int display,
    const std::vector< UIRegion > & reg,
    const std::vector< UIRegion > & oldreg
)
```


**Parameters**: 

  * **display** display 
  * **reg** vector containing the regions, at least one region must be provided 
  * **oldreg** vector containing the previous set of regions. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * If a region is removed that still contains a dialog this dialog is cancelled. 


define output regions on the display. Region with id==0 is the default region. The old layout provided in _oldreg_ must match the current layout in guiserver or the layout will not be updated and UI_ERR_MODIFIED will be returned. 


### function uiLayout

```cpp
inline int uiLayout(
    const std::vector< UIRegion > & reg,
    const std::vector< UIRegion > & oldreg
)
```


shortcut for uiLayout(0,reg,oldreg); 


### function uiLayout

```cpp
DllSpec int uiLayout(
    int display,
    const char * name
)
```


**Parameters**: 

  * **display** display 
  * **name** name of the layout section in gui.ini 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)), in case the section is not found in gui.ini or it is does not contain a valid configuration, then UI_ERR_REGION is returned. 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * changing the layout may cancel all currently active dialogs 


define output regions of the display. The layout definition is read from section _name_ of gui.ini 


### function uiLayout

```cpp
DllSpec int uiLayout(
    const char * name
)
```


shortcut for uiLayout(0,name); 


### function uiGetLayout

```cpp
DllSpec int uiGetLayout(
    int display,
    std::vector< UIRegion > & region
)
```


**Parameters**: 

  * **display** display 
  * **region** returned region layout 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ is optional, see [Parameter Overloading]

read the current layout setting 


### function uiGetLayout

```cpp
DllSpec int uiGetLayout(
    std::vector< UIRegion > & region
)
```


shortcut for uiGetLayout(0,region); 


### function uiGetRegionSize

```cpp
DllSpec int uiGetRegionSize(
    int display,
    int region_id,
    int & width,
    int & height
)
```


**Parameters**: 

  * **display** display; 
  * **region_id** region ID; 
  * **width** width in pixels 
  * **height** height in pixels 


**Return**: error code 

Determine size of a region in pixels 


### function uiGetRegionSize

```cpp
inline int uiGetRegionSize(
    int region_id,
    int & width,
    int & height
)
```


shortcut for uiGetRegionSize(0,region_id,width,height); 


### function uiEnterRegion

```cpp
DllSpec int uiEnterRegion(
    int display,
    int region_id
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * a new default region is created if required. 


Enter region _region_id_ making it the parent region for all successive [uiLayout()](namespacevfigui.md#function-uilayout) and [uiGetLayout()](namespacevfigui.md#function-uigetlayout) commands. This is used to create a tree of regions. 


### function uiEnterRegion

```cpp
DllSpec int uiEnterRegion(
    int region_id
)
```


shortcut for uiEnterRegion(0,region_id); 


### function uiLeaveRegion

```cpp
DllSpec int uiLeaveRegion(
    int display
)
```


**Return**: error code: UI_ERR_OK if region was left, UI_ERR_REGION if already at the highest level 

**Note**: _display_ is optional, see [Parameter Overloading]

Ascend one level in the tree of regions. 


### function uiLeaveRegion

```cpp
DllSpec int uiLeaveRegion()
```


shortcut for uiLeaveRegion(0); 


### function uiCurrentRegionPath

```cpp
DllSpec std::string uiCurrentRegionPath(
    int display
)
```


**Parameters**: 

  * **display** display 


**Return**: current region path 

**Note**: _display_ is optional, see [Parameter Overloading]

Return the current region path that was constructed using [uiEnterRegion()](namespacevfigui.md#function-uienterregion). The region path contains the regions passed on to successive calls of [uiEnterRegion()](namespacevfigui.md#function-uienterregion) separated by '/', e.g calling the sequence uiEnterRegion(1); uiEnterRegion(2); uiEnterRegion(3); the region path would be "1/2/3". If no region path is used, the empty string is returned. 


### function uiCurrentRegionPath

```cpp
DllSpec std::string uiCurrentRegionPath()
```


shortcut for uiCurrentRegionPath(0); 


### function uiSetCurrentRegionPath

```cpp
DllSpec int uiSetCurrentRegionPath(
    int display,
    const std::string & path
)
```


**Parameters**: 

  * **display** display 
  * **path** absolute region path to be set 


**Return**: error code 

**Note**: _display_ is optional, see [Parameter Overloading]

set region path. 


### function uiSetCurrentRegionPath

```cpp
DllSpec int uiSetCurrentRegionPath(
    const std::string & path
)
```


shortcut for uiSetCurrentRegionPath(0,path); 


### function uiRegionIsVisible

```cpp
DllSpec int uiRegionIsVisible(
    int display,
    int region_id
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 


**Return**: 1 if visible, 0 if not visible, <0 if error 

check if region is visible on screen or hidden 


### function uiRegionIsVisible

```cpp
inline int uiRegionIsVisible(
    int region_id
)
```


**Parameters**: 

  * **region_id** region ID 


**Return**: 1 if visible, 0 if not visible, <0 if error 

check if region is visible on screen or hidden 


### function uiReadConfig

```cpp
DllSpec void uiReadConfig(
    int display
)
```


**Parameters**: 

  * **display** display 


**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * gui.ini is read automatically on startup. Invoking [uiReadConfig()](namespacevfigui.md#function-uireadconfig) is required if gui.ini has been modified by the application or the resource path has been changed by updating UI_PROP_RESOURCE_PATH and re-reading of the file is required. 


re-read configuration from file gui.ini from within the resource directory associated with a display 


### function uiReadConfig

```cpp
DllSpec void uiReadConfig()
```


shortcut for uiReadConfig(0); 


### function uiSetCatalog

```cpp
DllSpec int uiSetCatalog(
    int display,
    const std::string & filename
)
```


**Parameters**: 

  * **display** display 
  * **filename** of the catalog, empty string to unload the current dialog 


**Return**: UI_ERR_OK if file was successfully loaded, else error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * Setting the catalog file resets UI_PROP_LANGUAGE 


load and set a catalog file containing name-value text pairs to be inserted with HTML placeholder <?text name?>. The current catalog is unloaded with filename=="" or by loading another catalog file. 


### function uiSetCatalog

```cpp
DllSpec int uiSetCatalog(
    const std::string & filename
)
```


shortcut for uiSetCatalog(0,filename); 


### function uiGetCatalog

```cpp
DllSpec std::string uiGetCatalog(
    int display
)
```


**Parameters**: 

  * **display** display 


**Return**: file name of the current catalog file or empty string in case none has been loaded 

**Note**: _display_ is optional, see [Parameter Overloading]

### function uiGetCatalog

```cpp
DllSpec std::string uiGetCatalog()
```


shortcut for uiGetCatalog(0); 


### function uiCatalogSetDelayedRelease

```cpp
DllSpec void uiCatalogSetDelayedRelease(
    unsigned num
)
```


**Parameters**: 

  * **num** number of catalogs 


**Note**: Catalog storage is shared with the printer module, i.e. this setting may be changed by calls to [prtCatalogSetDelayedRelease()](namespacevfiprt.md#function-prtcatalogsetdelayedrelease)

Set the maximum number of catalogs that are kept in memory although being unused. This improves load time when a catalog is used again, since when still in memory it does not need to be read from disk (default: 0) 


### function uiCatalogGetDelayedRelease

```cpp
DllSpec unsigned uiCatalogGetDelayedRelease()
```


**Return**: number of catalogs 

**Note**: Catalog storage is shared with the printer module, i.e. this setting may be changed by calls to [prtCatalogSetDelayedRelease()](namespacevfiprt.md#function-prtcatalogsetdelayedrelease)

Get the maximum number of unused catalogs that are kept in memory. 


### function uiGetText

```cpp
DllSpec std::string uiGetText(
    int display,
    const std::string & name,
    const std::string & deflt =""
)
```


**Parameters**: 

  * **display** display 
  * **name** of key used to lookup the text in calalog 
  * **deflt** text that is returned, if text is not found in calalog 


**Return**: text from catalog for success, else value in parameter _default_

**Note**: _display_ is optional, see [Parameter Overloading]

lookup a text from current loaded catalog by _key_ name. If text is not found in catalog or no catalog is loaded the function returns value in in parameter _default_. 


### function uiGetText

```cpp
DllSpec std::string uiGetText(
    const std::string & name,
    const std::string & deflt =""
)
```


shortcut for uiGetText(0,name,deflt); 


### function uiGetText

```cpp
DllSpec std::string uiGetText(
    int display,
    const std::string & filename,
    const std::string & name,
    const std::string & deflt
)
```


**Parameters**: 

  * **filename** of the catalog 
  * **display** display 
  * **name** of key used to lookup the text in calalog 
  * **deflt** text that is returned, if text is not found in calalog 


**Return**: text from catalog for success, else value in parameter _default_

**Note**: 

  * Applications must call [uiSetCatalog()](namespacevfigui.md#function-uisetcatalog) before HTML documents can use XML processing instructions <?text name?>. Parameter _display_ is ignored, if _filename_ contains an absolute file path. In case of a relative file path, the function looks up the file relative to UI_PROP_RESOURCE_PATH and UI_PROP_RESOURCE_DEFAULT_PATH, therefore, parameter _display_ is required to get the related UI resource paths from the UI property context. 
  * This function might delete another unused catalog, which was kept in internal catalog cache. For more details, see [uiCatalogSetDelayedRelease()](namespacevfigui.md#function-uicatalogsetdelayedrelease). 
  * _display_ is optional, see [Parameter Overloading]


lookup a text from a catalog file referred by _filename_. In difference to [uiGetText()](namespacevfigui.md#function-uigettext) functions above, the catalog need not to be loaded with [uiSetCatalog()](namespacevfigui.md#function-uisetcatalog), thus, is not applied to UI property context. 


### function uiGetText

```cpp
DllSpec std::string uiGetText(
    const std::string & filename,
    const std::string & name,
    const std::string & deflt
)
```


shortcut for uiGetText(0,filename,name,deflt); 


### function uiGetHtml

```cpp
DllSpec int uiGetHtml(
    int display,
    const std::map< std::string, std::string > & value,
    const std::string & text,
    std::string & html
)
```


**Parameters**: 

  * **display** display whose settings should be used (e.g. text catalog, css file, etc.) 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **html** resulting HTML code 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ is optional, see [Parameter Overloading]

preprocess HTML code and return the resulting string 


### function uiGetHtml

```cpp
DllSpec int uiGetHtml(
    const std::map< std::string, std::string > & value,
    const std::string & text,
    std::string & html
)
```


shortcut for uiGetHtml(0,value,text,html); 


### function uiGetHtmlURL

```cpp
DllSpec int uiGetHtmlURL(
    int display,
    const std::map< std::string, std::string > & value,
    const std::string & url,
    std::string & html
)
```


**Parameters**: 

  * **display** display whose settings should be used (e.g. text catalog, css file, etc.) 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) unless an absolute path was provided. 
  * **html** resulting HTML code 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ is optional, see [Parameter Overloading]

preprocess HTML code and return the resulting string 


### function uiGetHtmlURL

```cpp
DllSpec int uiGetHtmlURL(
    const std::map< std::string, std::string > & value,
    const std::string & url,
    std::string & html
)
```


shortcut for uiGetHtmlURL(0,value,url,html); 


### function uiGetURLPath

```cpp
DllSpec std::string uiGetURLPath(
    int display,
    const std::string & url
)
```


**Parameters**: 

  * **display** display whose settings should be used (e.g. text catalog, css file, etc.) 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) unless an absolute path was provided. 


**Return**: full path of the HTML file or empty string if not found. 

**Note**: _display_ is optional, see [Parameter Overloading]

determine the full path of an url taking into account all settings and rules for looking up files 


### function uiGetURLPath

```cpp
DllSpec std::string uiGetURLPath(
    const std::string & url
)
```


shortcut for uiGetURLPath(0,url); 


### function uiScreenshotPNG

```cpp
DllSpec int uiScreenshotPNG(
    int display,
    const char * filename
)
```


**Parameters**: 

  * **display** display 
  * **filename** file name 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * Only supported by DirectGUI 


take a screenshot and save as PNG file 


### function uiScreenshotPNG

```cpp
DllSpec int uiScreenshotPNG(
    const char * filename
)
```


shortcut for uiScreenshotPNG(0,filename); 


### function uiScreenshotPNG

```cpp
DllSpec int uiScreenshotPNG(
    int display,
    const char * filename,
    int x,
    int y,
    int w,
    int h
)
```


**Parameters**: 

  * **display** display 
  * **filename** file name 
  * **x** x-coordinate of the screen area 
  * **y** y-coordinate of the screen area 
  * **w** width of the screen area 
  * **h** height of the screen area 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * If the position/size does not fit on the screen it will be cropped 
  * _display_ is optional, see [Parameter Overloading]
  * Only supported by DirectGUI 


take a screenshot of a screen area and save as PNG file 


### function uiScreenshotPNG

```cpp
inline int uiScreenshotPNG(
    const char * filename,
    int x,
    int y,
    int w,
    int h
)
```


shortcut for uiScreenshotPNG(0,filename,x,y,w,h); 


### function uiScreenshotPNGData

```cpp
DllSpec int uiScreenshotPNGData(
    int display,
    std::vector< unsigned char > & data
)
```


**Parameters**: 

  * **display** display 
  * **data** data of PNG file 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * Only supported by DirectGUI 


take a screenshot and return PNG data in vector 


### function uiScreenshotPNGData

```cpp
DllSpec int uiScreenshotPNGData(
    std::vector< unsigned char > & data
)
```


shortcut for uiScreenshotPNGData(0,data); 


### function uiScreenshotPNGData

```cpp
DllSpec int uiScreenshotPNGData(
    int display,
    std::vector< unsigned char > & data,
    int x,
    int y,
    int w,
    int h
)
```


**Parameters**: 

  * **display** display 
  * **data** data of PNG file 
  * **x** x-coordinate of the screen area 
  * **y** y-coordinate of the screen area 
  * **w** width of the screen area 
  * **h** height of the screen area 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * If the position/size does not fit on the screen it will be cropped 
  * _display_ is optional, see [Parameter Overloading]
  * Only supported by DirectGUI 


take a screenshot of a screen area and return PNG data in vector 


### function uiScreenshotPNGData

```cpp
inline int uiScreenshotPNGData(
    std::vector< unsigned char > & data,
    int x,
    int y,
    int w,
    int h
)
```


shortcut for uiScreenshotPNGData(0,data,x,y,w,h); 


### function uiURL2PNG

```cpp
DllSpec int uiURL2PNG(
    const char * filename,
    int width,
    int height,
    const std::map< std::string, std::string > & value,
    const std::string & url
)
```


**Parameters**: 

  * **filename** file name of the PNG file 
  * **width** width of the image 
  * **height** height of the image 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) unless an absolute path was provided. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

convert a dialog to a PNG image 


### function uiURL2PNGData

```cpp
DllSpec int uiURL2PNGData(
    std::vector< unsigned char > & data,
    int width,
    int height,
    const std::map< std::string, std::string > & value,
    const std::string & url
)
```


**Parameters**: 

  * **data** data of PNG file 
  * **width** width of the image 
  * **height** height of the image 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) unless an absolute path was provided. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

convert a dialog to a PNG image 


### function uiHTML2PNG

```cpp
DllSpec int uiHTML2PNG(
    const char * filename,
    int width,
    int height,
    const std::map< std::string, std::string > & value,
    const std::string & text
)
```


**Parameters**: 

  * **filename** file name of the PNG file 
  * **width** width of the image 
  * **height** height of the image 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **text** HTML code 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

convert a dialog to a PNG image 


### function uiHTML2PNGData

```cpp
DllSpec int uiHTML2PNGData(
    std::vector< unsigned char > & data,
    int width,
    int height,
    const std::map< std::string, std::string > & value,
    const std::string & text
)
```


**Parameters**: 

  * **data** data of PNG file 
  * **width** width of the image 
  * **height** height of the image 
  * **value** name value pairs that are used as initial value of input fields, checkboxes, etc. and that are used during script processing. 
  * **text** HTML code 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

convert a dialog to a PNG image 


### function uiLibVersion

```cpp
const DllSpec char * uiLibVersion()
```


**Return**: string containing the version 

read library version 


### function gui_GetVersion

```cpp
const DllSpec char * gui_GetVersion()
```


**Return**: version string 

returns a zero-terminated string with version and build information of libvfiguiprt in ADK version string format: <major>.<minor>.<patch>-<build>, e.g. "1.2.3-4" 


### function gui_GetSvcVersion

```cpp
const DllSpec char * gui_GetSvcVersion(
    int display
)
```


**Parameters**: 

  * **display** display 


**Return**: version string 

returns a zero-terminated string with version and build information of guiserver/guiprtserver in ADK version string format: <major>.<minor>.<patch>-<build>, e.g. "1.2.3-4" 


### function gui_GetSvcVersion

```cpp
const DllSpec char * gui_GetSvcVersion()
```


### function uiSetTransition

```cpp
DllSpec int uiSetTransition(
    int display,
    int region_id,
    unsigned transtype,
    int duration_ms
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 
  * **transtype** transition type 
  * **duration_ms** duration for the transition in milliseconds, ignored for UI_TRANS_NONE which is the default transition type. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ is optional, see [Parameter Overloading]
  * Configured transitions are reset when changing the layout 


set the transition type for a region 


### function uiSetTransition

```cpp
DllSpec int uiSetTransition(
    int region_id,
    unsigned transtype,
    int duration_ms
)
```


shortcut for accessing display 0 


### function uiSetTransition

```cpp
inline int uiSetTransition(
    unsigned transtype,
    int duration_ms
)
```


shortcut for accessing UI_REGION_DEFAULT on display 0 


### function uiErrorList

```cpp
const DllSpec std::vector< UIErrorEntry > & uiErrorList()
```


**Return**: reference to the error list of the last dialog shown in this thread. 

obtain list of non-fatal errors that happened while displaying a dialog. In case of synchronous dialogs the error list is reset as part of displaying the dialog. In case of asynchronous dialogs this list is reset when displaying the dialog using one of the ui*Async functions and when calling uiInvokeWait (or one of the other ui*Wait functions) 


### function uiStatistics

```cpp
const DllSpecUIStatistics & uiStatistics()
```


**Return**: reference to statistics information of the last dialog shown in this thread. 

obtain statistics information for the last completed dialog. In case of synchronous dialogs the statistics information is reset as part of displaying the dialog. In case of asynchronous dialogs this information is reset as part of calling uiInvokeWait (or one of the other ui*Wait functions) 


### function uiScriptError

```cpp
DllSpec std::string uiScriptError()
```


**Return**: string containing information about errors that were reported during last script processing in this thread. 

Obtain script error message 


### function uiGetIdleTime

```cpp
DllSpec int uiGetIdleTime(
    int display =0
)
```


**Return**: Idle time in milliseconds (>=0) or error code (<0). 

Determine the amount of time passed since the last user interaction. 


### function uiSetLogMask

```cpp
DllSpec void uiSetLogMask(
    unsigned mask
)
```


**Parameters**: 

  * **mask** logging mask (see GUI_LOGMASK) 


Set log mask 


### function uiGetLogMask

```cpp
DllSpec unsigned uiGetLogMask(
    void 
)
```


**Return**: current log mask 

Get log mask 


### function uiConfigLEDs

```cpp
DllSpec int uiConfigLEDs(
    int display,
    UILEDShape shape,
    int width,
    int height,
    unsigned off_rgba,
    unsigned on0_rgba,
    unsigned on1_rgba,
    unsigned on2_rgba,
    unsigned on3_rgba
)
```


**Parameters**: 

  * **display** display 
  * **shape** LED shape 
  * **width** width of a single LED 
  * **height** height of a single LED 
  * **off_rgba** color of the LED when switched off 
  * **on0_rgba** color of LED 0 when switched on 
  * **on1_rgba** color of LED 1 when switched on 
  * **on2_rgba** color of LED 2 when switched on 
  * **on3_rgba** color of LED 3 when switched on 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

set LED configuration. If present the LED area is cleared with the background color and the LEDs are drawn in off-state. 


### function uiConfigLEDs

```cpp
DllSpec int uiConfigLEDs(
    UILEDShape shape,
    int width,
    int height,
    unsigned off_rgba,
    unsigned on0_rgba,
    unsigned on1_rgba,
    unsigned on2_rgba,
    unsigned on3_rgba
)
```


shortcut for accessing display 0 


### function uiConfigLEDs

```cpp
DllSpec int uiConfigLEDs(
    int display,
    const char * filename
)
```


**Parameters**: 

  * **display** display 
  * **filename** file name of the PNG image 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

set LED configuration from PNG file. The PNG file has to contain 5 LEDs next to each other. The first LED shows the off state, the remaining 4 LEDs show the on state of the 4 LEDs on screen. The alpha channel is supported to display non-rectangular LEDs. If present the LED area is cleared with the background color and the LEDs are drawn in off-state. 


### function uiConfigLEDs

```cpp
DllSpec int uiConfigLEDs(
    const char * filename
)
```


shortcut for accessing display 0 


### function uiShowLEDArea

```cpp
DllSpec int uiShowLEDArea(
    int display,
    UIEdge edge,
    int width,
    int height,
    unsigned bg_rgba
)
```


**Parameters**: 

  * **display** display 
  * **edge** selects edge of the display at which to reserve some room. UI_EDGE_OFF removes the LED area 
  * **width** width of the area 
  * **height** height of the area 
  * **bg_rgba** background color in RGBA format (alpha channel is ignored) 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * The size of the LED area determines how much room is available for distributing the contactless LEDs. It does not need to fit the width (or height depending on the edge) of the display, clearing the background happens using the full width (height). 
  * If uiShowLEDArea is called more than once, then the later calls do not update the parameters but only increase a reference counter. [uiHideLEDArea()](namespacevfigui.md#function-uihideledarea) has to be called the same number of times to remove the area. 
  * uiConfigLEDs should be called before calling [uiShowLEDArea()](namespacevfigui.md#function-uishowledarea). 


show virtual LEDs on the display and/or increment the LED area reference counter. The LED area is cleared with the background color and the LEDs are drawn in off-state. 


### function uiShowLEDArea

```cpp
DllSpec int uiShowLEDArea(
    UIEdge edge,
    int width,
    int height,
    unsigned bg_rgba
)
```


shortcut for accessing display 0 


### function uiHideLEDArea

```cpp
DllSpec int uiHideLEDArea(
    int display
)
```


**Parameters**: 

  * **display** display 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

Decrement the LED area reference counter and hide the LED area if the counter reaches 0. 


### function uiHideLEDArea

```cpp
DllSpec int uiHideLEDArea()
```


shortcut for accessing display 0 


### function uiSetLED

```cpp
DllSpec int uiSetLED(
    int display,
    unsigned led,
    bool state
)
```


**Parameters**: 

  * **display** display 
  * **led** led number (0..3) 
  * **state** on (true) or off (false) 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

switch led on/off 


### function uiSetLED

```cpp
DllSpec int uiSetLED(
    unsigned led,
    bool state
)
```


shortcut for accessing display 0 


### function uiSetBacklightConfig

```cpp
DllSpec int uiSetBacklightConfig(
    int display,
    const std::vector< UIBacklight > & levels
)
```


**Parameters**: 

  * **display** display 
  * **levels** backlight brightness levels and timeouts. The entries in the vector are considered to represent decreasing brightness, i.e. levels[0] represents maximum brighness and levels[[levels.size()](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-size)-1] represents minimum brightness. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: If more than one brightness level is configured, the first level is considered to be the on state. This level is activated as soon as there is some user interaction. The last level is considered to be the off state. In this state, if the brighness is 0, the first touch or keypress is used to wake up the device and is otherwise dropped to not inadvertedly trigger an action. 

set up backlight parameters 


### function uiGetBacklightConfig

```cpp
DllSpec int uiGetBacklightConfig(
    int display,
    std::vector< UIBacklight > & levels
)
```


**Parameters**: 

  * **display** display 
  * **levels** backlight brightness levels and timeouts 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

read backlight parameters 


### function uiSetBacklightLevel

```cpp
DllSpec int uiSetBacklightLevel(
    int display,
    int level
)
```


**Parameters**: 

  * **display** display 
  * **level** new level in the range 0..[levels.size()](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-size)-1 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: The level is evaluated modulus the number of configured levels, i.e. setting it to -1 can be used to select the level with lowest brightness. 

set backlight level to one of the levels defined using uiSetBacklightParam 


### function uiGetBacklightLevel

```cpp
DllSpec int uiGetBacklightLevel(
    int display,
    int & level
)
```


**Parameters**: 

  * **display** display 
  * **level** current level in the range 0..[levels.size()](namespacevficom_1_1cmdparam_1_1in_1_1ping.md#variable-size)-1 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

get backlight level 


### function uiSetInput

```cpp
DllSpec int uiSetInput(
    int display,
    int region_id,
    const std::string & name,
    const std::string & value
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 
  * **name** name of the input element 
  * **value** new value 


**Return**: error code 

set the value of an input element on screen. This covers <input> and <select> elements 


### function uiSetInput

```cpp
inline int uiSetInput(
    int region_id,
    const std::string & name,
    const std::string & value
)
```


shortcut for uiSetInput(0,region_id,name,value); 


### function uiRunAction

```cpp
DllSpec int uiRunAction(
    int display,
    int region_id,
    const std::string & name
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 
  * **name** name of the input element 


**Return**: error code 

Run the action of an input element on screen. This covers <input>, <select> and <button> 


### function uiRunAction

```cpp
inline int uiRunAction(
    int region_id,
    const std::string & name
)
```


shortcut for uiRunAction(0,region_id,name); 


### function uiRunAction2

```cpp
DllSpec int uiRunAction2(
    int display,
    int region_id,
    const std::string & name
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 
  * **name** name of the input element 


**Return**: error code 

Run the action2 of an input element on screen. This covers <input>, <select> and <button> 


### function uiRunAction2

```cpp
inline int uiRunAction2(
    int region_id,
    const std::string & name
)
```


shortcut for uiRunAction2(0,region_id,name); 


### function uiAddOption

```cpp
DllSpec int uiAddOption(
    int display,
    int region_id,
    const std::string & name,
    const std::string & value,
    const std::string & text,
    const std::string & style ="",
    const std::string & action ="",
    int position =-1
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 
  * **name** name of the <select> element 
  * **value** value of the element to be added 
  * **text** text to be displayed 
  * **style** CSS style, if empty use default style 
  * **action** optional action 
  * **position** position at which to insert the entry. Negative values refer to the position from the end, e.g. -1 adds the element to the end. 


**Return**: error code 

**Note**: Only a subset of the style settings is supported (setting style and color of text). 

Add an option to a <select> element. The option is added at the end of the list. 


### function uiAddOption

```cpp
inline int uiAddOption(
    int region_id,
    const std::string & name,
    const std::string & value,
    const std::string & text,
    const std::string & style ="",
    const std::string & action ="",
    int position =-1
)
```


shortcut for uiAddOption(0,region_id,name,value,text,style,action,position); 


### function uiScrollOption

```cpp
DllSpec int uiScrollOption(
    int display,
    int region_id,
    const std::string & name,
    const std::string & value,
    UIScrollPosition pos
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 
  * **name** name of the <select> element 
  * **value** value of the element to be scrolled 
  * **pos** position 


**Note**: Scrolling is only supported if the content is larger than the containing element. Scrolling is limited to the amount the user could scroll using the touch screen. 

scroll an entry in a <select> element to the top or bottom position 


### function uiScrollOption

```cpp
inline int uiScrollOption(
    int region_id,
    const std::string & name,
    const std::string & value,
    UIScrollPosition pos
)
```


shortcut for uiScrollOption(0,region_id,name,value,pos) 


### function uiRemoveOption

```cpp
DllSpec int uiRemoveOption(
    int display,
    int region_id,
    const std::string & name,
    const std::string & value
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 
  * **name** name of the <select> element 
  * **value** value of the element to be removed 


**Return**: error code 

Remove an option from a <select> element 


### function uiRemoveOption

```cpp
inline int uiRemoveOption(
    int region_id,
    const std::string & name,
    const std::string & value
)
```


shortcut for uiRemoveOption(0,region_id,name,value); 


### function uiDisablePINOK

```cpp
DllSpec int uiDisablePINOK(
    int display =0
)
```


**Parameters**: 

  * **display** display 


**Return**: error code. 

disable the OK button during PIN entry, e.g. since the amount has not yet been displayed. Use [uiEnablePINOK()](namespacevfigui.md#function-uienablepinok) to re-enable the OK button. The dialog must already be displayed to disable the OK button, i.e. use it after [uiInvokeAsync()](namespacevfigui.md#function-uiinvokeasync). When invoked when no PIN entry is active UI_ERR_PARAMETER is returned. 


### function uiEnablePINOK

```cpp
DllSpec int uiEnablePINOK(
    int display =0
)
```


**Parameters**: 

  * **display** display 


**Return**: error code. 

**Note**: Invocation of this function is only required if uiDisablePINOK has been used. 

enable the OK button when it has been disabled using [uiDisablePINOK()](namespacevfigui.md#function-uidisablepinok). Use [uiEnablePINOK()](namespacevfigui.md#function-uienablepinok) to re-enable the OK button 


### function uiUpdate

```cpp
DllSpec int uiUpdate(
    int display,
    int region_id,
    const std::string & name,
    const std::string & html
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region id 
  * **name** name of the div element, whose HTML content is to be replaced 
  * **html** new HTML code, which replaces the old one 


**Return**: error code 

**Note**: 

  * IMPORTANT: Neither the old nor the new HTML code must use the CSS position attribute or the behavior is undefined (e.g. elements may not be removed from screen) 
  * Preprocessing is not supported by this command. 


**Par**: 

Update HTML code 


### function uiUpdate

```cpp
inline int uiUpdate(
    int region_id,
    const std::string & name,
    const std::string & html
)
```


shortcut for uiUpdate(0,region_id,name,html); 


### function uiBeep

```cpp
DllSpec int uiBeep(
    int display,
    UIBeep beep
)
```


**Parameters**: 

  * **display** display 
  * **beep** kind of beep to play 


**Return**: error code 

play beep 


### function uiBeep

```cpp
inline int uiBeep(
    UIBeep beep
)
```


shortcut for uiBeep(0,beep); 


### function uiNagScreen

```cpp
DllSpec int uiNagScreen(
    int display,
    enum UINagScreenType type,
    int hide,
    int show
)
```


**Parameters**: 

  * **display** display 
  * **type** nag screen type 
  * **hide** hide time in seconds 
  * **show** show time in seconds 


**Return**: error code; 

trigger display of a nag screen. The nag screen is hidden and shown in a loop hide and show times can be configured. Once triggered, the nag screen cannot be disabled for security reasons until next reboot. Currently only useful on VOS3 


### function uiCanvas

```cpp
DllSpec int uiCanvas(
    int display,
    int region_id,
    uiEventCallback cb,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **cb** event callback function, it is invoked for touch and keyboard events. 
  * **data** data pointer that is passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or transaction ID. 

install a canvas for drawing in the given region 


### function uiCanvas

```cpp
inline int uiCanvas(
    int region_id,
    uiEventCallback cb,
    void * data =0
)
```


shortcut for uiCanvas(0,region_id,cb,data); 


### function uiDraw

```cpp
DllSpec int uiDraw(
    int display,
    int region_id,
    const UIDrawing & drawing
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **drawing** set of drawing primitives 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

draw to canvas 


### function uiDraw

```cpp
inline int uiDraw(
    int region_id,
    const UIDrawing & drawing
)
```


shortcut for uiDraw(0,region_id,drawing); 


### function uiDrawAsync

```cpp
DllSpec int uiDrawAsync(
    int display,
    int region_id,
    const UIDrawing & drawing,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **drawing** set of drawing primitives 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

Asynchronously draw to canvas 


### function uiDrawAsync

```cpp
inline int uiDrawAsync(
    int region_id,
    const UIDrawing & drawing,
    uiAsyncCallback cb =0,
    void * data =0
)
```


shortcut for uiDraw(0,region_id,drawing); 


### function uiTextMetrics

```cpp
DllSpec int uiTextMetrics(
    int display,
    int region_id,
    const std::string & font,
    int size,
    unsigned style,
    std::vector< UITextWidth > & width,
    int & height,
    int & descent
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **font** font name 
  * **size** nominal font height 
  * **style** font style 
  * **width** array with the texts for which the width should be determined, the widths are filled in on return. 
  * **height** font height, may be different from nominal font height 
  * **descent** number of pixels below line 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

determine size of text in pixels 


### function uiTextMetrics

```cpp
inline int uiTextMetrics(
    int region_id,
    const std::string & font,
    int size,
    unsigned style,
    std::vector< UITextWidth > & width,
    int & height,
    int & descent
)
```


shortcut for uiTextMetrics(0,region_id,font,size,style,width,height,descent); 


### function uiDataURLType

```cpp
const DllSpec char * uiDataURLType(
    const std::string & in
)
```


**Parameters**: 

  * **s** string containing data 


**Return**: file type as string or NULL if _s_ does not contain a known data URL type. 

check if a string contains a data URL and return the type as string (e.g. "png" for a PNG image) 


### function uiDataURLToString

```cpp
DllSpec bool uiDataURLToString(
    std::string & out,
    const std::string & in
)
```


**Parameters**: 

  * **out** extracted data 
  * **in** data URL 


**Return**: true in case of success, else false 

extract data from data URL to string 


### function uiDataURLToFile

```cpp
DllSpec bool uiDataURLToFile(
    const char * filename,
    const std::string & in
)
```


**Parameters**: 

  * **filename** file name 
  * **in** data URL 


**Return**: true in case of success, else false 

extract data from data URL to file 


### function uiDisplay

```cpp
DllSpec int uiDisplay(
    int display,
    int region_id,
    const std::string & templateName,
    const std::string & text
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: _display_ and _region_id_ are optional, see [Parameter Overloading]

Display an HTML document on screen using a template file. 


### function uiDisplay

```cpp
DllSpec int uiDisplay(
    int region_id,
    const std::string & templateName,
    const std::string & text
)
```


### function uiDisplay

```cpp
inline int uiDisplay(
    const std::string & templateName,
    const std::string & text
)
```


### function uiDisplayAsync

```cpp
DllSpec int uiDisplayAsync(
    int display,
    int region_id,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: transaction ID or error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ and _region_id_ are optional, see [Parameter Overloading]
  * use [uiDisplayWait()](namespacevfigui.md#function-uidisplaywait) to wait for the dialog to finish or use [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) to cancel the dialog 


Asynchronously display an HTML document on screen 


### function uiDisplayAsync

```cpp
DllSpec int uiDisplayAsync(
    int region_id,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiDisplayAsync

```cpp
inline int uiDisplayAsync(
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiDisplayAsync

```cpp
DllSpec int uiDisplayAsync(
    int display,
    int region_id,
    const std::string & templateName,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: transaction ID or error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ and _region_id_ are optional, see [Parameter Overloading]
  * use [uiDisplayWait()](namespacevfigui.md#function-uidisplaywait) to wait for the dialog to finish or use uiInvokeCancl() to cancel the dialog 


Asynchronously display an HTML document on screen using a template file. 


### function uiDisplayAsync

```cpp
DllSpec int uiDisplayAsync(
    int region_id,
    const std::string & templateName,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiDisplayAsync

```cpp
inline int uiDisplayAsync(
    const std::string & templateName,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiDisplayWait

```cpp
DllSpec int uiDisplayWait(
    int txn_id,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **txn_id** transaction id as returned by [uiDisplayAsync()](namespacevfigui.md#function-uidisplayasync)
  * **timeout_msec** timeout in milliseconds. In case of a negative timeout wait forever. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the HTML fragment. In case of a timeout UI_ERR_WAIT_TIMEOUT is returned and [uiDisplayWait()](namespacevfigui.md#function-uidisplaywait) may be called again. 

Wait for the result of the display 


### function uiConfirm

```cpp
DllSpec int uiConfirm(
    int display,
    int region_id,
    const std::string & templateName,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **cb** optional callback function 
  * **cbdata** data pointer passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the template 

**Note**: _display_ and _region_id_ are optional, see [Parameter Overloading]

Display an HTML confirmation dialog on screen using a template file. 


### function uiConfirm

```cpp
DllSpec int uiConfirm(
    int region_id,
    const std::string & templateName,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiConfirm

```cpp
inline int uiConfirm(
    const std::string & templateName,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiConfirmAsync

```cpp
DllSpec int uiConfirmAsync(
    int display,
    int region_id,
    const std::string & templateName,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: transaction ID or error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ and _region_id_ are optional, see [Parameter Overloading]
  * use [uiConfirmWait()](namespacevfigui.md#function-uiconfirmwait) to wait for the dialog to finish or use [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) to cancel the dialog 


Asynchronously display an HTML confirmation dialog on screen using a template file. 


### function uiConfirmAsync

```cpp
DllSpec int uiConfirmAsync(
    int region_id,
    const std::string & templateName,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiConfirmAsync

```cpp
inline int uiConfirmAsync(
    const std::string & templateName,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiConfirmWait

```cpp
DllSpec int uiConfirmWait(
    int txn_id,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **txn_id** transaction id as returned by [uiConfirmAsync()](namespacevfigui.md#function-uiconfirmasync)
  * **timeout_msec** timeout in milliseconds. In case of a negative timeout wait forever. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the HTML fragment. In case of a timeout UI_ERR_WAIT_TIMEOUT is returned and [uiConfirmWait()](namespacevfigui.md#function-uiconfirmwait) may be called again. 

Wait for the confirm dialog to finish 


### function uiInput

```cpp
DllSpec int uiInput(
    int display,
    int region_id,
    const std::string & templateName,
    std::vector< std::string > & value,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **value** initial value and returned value of the input fields. The first value refers to the first input field, the second to the second, etc. 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). The input fields have to be specified as HTML input fields (e.g. <input type='text' ...>). The following input types are supported:

* **text:** text input
* **password:** password input
* **checkbox:** checkbox
* **number:** numeric input (HTML extension)
* **mask:** masked input (HTML extension)
* **pin:** PIN input


The following attributes are supported:

* **allowed_chars:** list of allowed characters
* **mask:** input mask (HTML extension): '*' is used as place holder for filling in characters
* **maxlengh:** maximum input length
* **name:** name of the input field
* **precision:** number of decimal places
* **size:** size of the input field in characters for display on screen 
  * **cb** optional callback function 
  * **cbdata** data pointer passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the template 

**Note**: 

  * _display_ and _region_id_ are optional, see [Parameter Overloading]
  * PIN input cannot be combined with other input types since the keyboard is exclusively locked by the PIN entry function. In case of PIN entry the value returned in _value_ is the number of digits entered or "error" in case of an error, "cancel" if the user pressed CANCEL, "clear" if the user pressed CLEAR, "bypass" in case of PIN bypass and "timeout" in case of timeout. 
  * Radio buttons will not behave as expected since these use more than one input element to represent a single input value. 


Display an HTML input dialog on screen using a template file. 


### function uiInput

```cpp
DllSpec int uiInput(
    int region_id,
    const std::string & templateName,
    std::vector< std::string > & value,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInput

```cpp
inline int uiInput(
    const std::string & templateName,
    std::vector< std::string > & value,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInputAsync

```cpp
DllSpec int uiInputAsync(
    int display,
    int region_id,
    const std::string & templateName,
    const std::vector< std::string > & value,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **value** initial value of the input fields. The first value refers to the first input field, the second to the second, etc. 
  * **text** string containing an HTML fragment 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: transaction ID or error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ and _region_id_ are optional, see [Parameter Overloading]
  * see also [uiInput()](namespacevfigui.md#function-uiinput)
  * use [uiInputWait()](namespacevfigui.md#function-uiinputwait) to wait for the dialog to finish or use [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) to cancel the dialog 


Asynchronously display an HTML input dialog on screen using a template file. 


### function uiInputAsync

```cpp
DllSpec int uiInputAsync(
    int region_id,
    const std::string & templateName,
    const std::vector< std::string > & value,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiInputAsync

```cpp
inline int uiInputAsync(
    const std::string & templateName,
    const std::vector< std::string > & value,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiInputWait

```cpp
DllSpec int uiInputWait(
    int txn_id,
    std::vector< std::string > & value,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **txn_id** transaction id as returned by [uiInputAsync()](namespacevfigui.md#function-uiinputasync)
  * **value** returned value of the input fields. The first value refers to the first input field, the second to the second, etc. 
  * **timeout_msec** timeout in milliseconds. In case of a negative timeout wait forever. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the HTML fragment. In case of a timeout UI_ERR_WAIT_TIMEOUT is returned and [uiInputWait()](namespacevfigui.md#function-uiinputwait) may be called again. 

Wait for the input dialog to finish 


### function uiInputPINCheck

```cpp
DllSpec int uiInputPINCheck(
    int display,
    int region_id,
    const std::string & templateName,
    const std::string & referencePIN,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **referencePIN** reference PIN 
  * **text** string containing an HTML fragment 
  * **cb** optional callback function 
  * **cbdata** data pointer passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) (UI_ERR_WRON_PIN in case of a wrong PIN, UI_ERR_OK in case the PIN was OK) 

**Note**: _display_ and _region_id_ are optional, see [Parameter Overloading]

Display a PIN check dialog: The entered PIN is checkec against a known PIN 


### function uiInputPINCheck

```cpp
DllSpec int uiInputPINCheck(
    int region_id,
    const std::string & templateName,
    const std::string & referencePIN,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInputPINCheck

```cpp
inline int uiInputPINCheck(
    const std::string & templateName,
    const std::string & referencePIN,
    const std::string & text,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiInputPINCheckAsync

```cpp
DllSpec int uiInputPINCheckAsync(
    int display,
    int region_id,
    const std::string & templateName,
    const std::string & referencePIN,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **text** string containing an HTML fragment 
  * **referencePIN** reference PIN 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: transaction ID or error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ and _region_id_ are optional, see [Parameter Overloading]
  * use [uiInputPINCheckWait()](namespacevfigui.md#function-uiinputpincheckwait) to wait for the dialog to finish or use [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) to cancel the dialog 


Asynchronously display a PIN check dialog: The entered PIN is checkec against a known PIN 


### function uiInputPINCheckAsync

```cpp
DllSpec int uiInputPINCheckAsync(
    int region_id,
    const std::string & templateName,
    const std::string & referencePIN,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiInputPINCheckAsync

```cpp
inline int uiInputPINCheckAsync(
    const std::string & templateName,
    const std::string & referencePIN,
    const std::string & text,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiInputPINCheckWait

```cpp
DllSpec int uiInputPINCheckWait(
    int txn_id,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **txn_id** transaction id as returned by [uiInputPINCheckAsync()](namespacevfigui.md#function-uiinputpincheckasync)
  * **timeout_msec** timeout in milliseconds. In case of a negative timeout wait forever. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or return value specified in the HTML fragment. In case of a timeout UI_ERR_WAIT_TIMEOUT is returned and [uiInputPINCheckWait()](namespacevfigui.md#function-uiinputpincheckwait) may be called again. 

**Note**: update events are currently not supported for [uiInputPINCheckWait()](namespacevfigui.md#function-uiinputpincheckwait). 

Wait for the PIN check dialog to finish 


### function uiMenu

```cpp
DllSpec int uiMenu(
    int display,
    int region_id,
    const std::string & templateName,
    const std::string & text,
    const struct UIMenuEntry menu[],
    int menusize,
    int preselect,
    uiCallback cb =0,
    void * cbdata =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **text** string containing an HTML fragment (i.e. the part between <body> and lt;/body>). 
  * **menu** array containing menu entries 
  * **menusize** number of entries in the array 
  * **preselect** value of the menu entry to be preselected. 
  * **cb** optional callback function 
  * **cbdata** data pointer passed on to the callback function 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or value of selected menu entry. 

**Note**: _display_ and _region_id_ are optional, see [Parameter Overloading]

Display an HTML menu dialog on screen using a template file. 


### function uiMenu

```cpp
DllSpec int uiMenu(
    int region_id,
    const std::string & templateName,
    const std::string & text,
    const struct UIMenuEntry menu[],
    int menusize,
    int preselect,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiMenu

```cpp
inline int uiMenu(
    const std::string & templateName,
    const std::string & text,
    const struct UIMenuEntry menu[],
    int menusize,
    int preselect,
    uiCallback cb =0,
    void * cbdata =0
)
```


### function uiMenuAsync

```cpp
DllSpec int uiMenuAsync(
    int display,
    int region_id,
    const std::string & templateName,
    const std::string & text,
    const struct UIMenuEntry menu[],
    int menusize,
    int preselect,
    uiAsyncCallback cb =0,
    void * data =0
)
```


**Parameters**: 

  * **display** display 
  * **region_id** region ID 
  * **templateName** name of a template file. The HTML code found in _text_ is inserted into the template 
  * **text** string containing an HTML fragment (i.e. the part between <body> and </body>). 
  * **menu** array containing menu entries 
  * **menusize** number of entries in the array 
  * **preselect** value of the menu entry to be preselected. 
  * **cb** optional callback function that is called when the dialog has returned 
  * **data** data pointer that is passed on to the callback function 


**Return**: transaction ID or error code (see [UIError](group__vfigui.md#enum-uierror)) 

**Note**: 

  * _display_ and _region_id_ are optional, see [Parameter Overloading]
  * use [uiMenuWait()](namespacevfigui.md#function-uimenuwait) to wait for the dialog to finish or use [uiInvokeCancel()](namespacevfigui.md#function-uiinvokecancel) to cancel the dialog 


Asynchronously display an HTML menu dialog on screen using a template file. 


### function uiMenuAsync

```cpp
DllSpec int uiMenuAsync(
    int region_id,
    const std::string & templateName,
    const std::string & text,
    const struct UIMenuEntry menu[],
    int menusize,
    int preselect,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiMenuAsync

```cpp
inline int uiMenuAsync(
    const std::string & template_name,
    const std::string & text,
    const struct UIMenuEntry menu[],
    int menusize,
    int preselect,
    uiAsyncCallback cb =0,
    void * data =0
)
```


### function uiMenuWait

```cpp
DllSpec int uiMenuWait(
    int txn_id,
    int timeout_msec =-1
)
```


**Parameters**: 

  * **txn_id** transaction id as returned by [uiMenuAsync()](namespacevfigui.md#function-uimenuasync)
  * **timeout_msec** timeout in milliseconds. In case of a negative timeout wait forever. 


**Return**: error code (see [UIError](group__vfigui.md#enum-uierror)) or value of selected menu entry. In case of a timeout UI_ERR_WAIT_TIMEOUT is returned and [uiMenuWait()](namespacevfigui.md#function-uimenuwait) may be called again. 

Wait for the menu dialog to finish 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100