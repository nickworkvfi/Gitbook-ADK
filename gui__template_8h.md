---
title: guiprt/src/html/gui_template.h

---

# guiprt/src/html/gui_template.h



## Namespaces

| Name           |
| -------------- |
| **[vfigui](namespacevfigui.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vfigui::UIMenuEntry](structvfigui_1_1_u_i_menu_entry.md)**  |

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
#ifndef GUI_TEMPLATE_H_2014_11_17
#define GUI_TEMPLATE_H_2014_11_17

#include "gui.h"

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


enum UIMenuOptions {
   UI_MENU_DISABLED=1 
};

DllSpec int uiDisplay(int display, int region_id,const std::string &templateName, const std::string &text);
DllSpec int uiDisplay(int region_id,const std::string &templateName, const std::string &text);
inline int uiDisplay(const std::string &templateName, const std::string &text)
{ return uiDisplay(0,UI_REGION_DEFAULT,templateName,text); }


DllSpec int uiDisplayAsync(int display,int region_id, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
DllSpec int uiDisplayAsync(int region_id, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
inline int uiDisplayAsync(const std::string &text, uiAsyncCallback cb=0, void *data=0 )
{ return uiDisplayAsync(0,UI_REGION_DEFAULT,text,cb,data); }

DllSpec int uiDisplayAsync(int display, int region_id, const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
DllSpec int uiDisplayAsync(int region_id, const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
inline int uiDisplayAsync(const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 )
{ return uiDisplayAsync(0,UI_REGION_DEFAULT,templateName,text,cb,data); }


DllSpec int uiDisplayWait(int txn_id, int timeout_msec=-1);

DllSpec int uiConfirm(int display, int region_id, const std::string &templateName, const std::string &text, uiCallback cb=0, void *cbdata=0);
DllSpec int uiConfirm(int region_id, const std::string &templateName, const std::string &text, uiCallback cb=0, void *cbdata=0);
inline int uiConfirm(const std::string &templateName, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ return uiConfirm(0,UI_REGION_DEFAULT,templateName,text,cb,cbdata); }

DllSpec int uiConfirmAsync(int display,int region_id, const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
DllSpec int uiConfirmAsync(int region_id, const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
inline int uiConfirmAsync(const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 )
{ return uiConfirmAsync(0,UI_REGION_DEFAULT, templateName, text,cb,data); }

DllSpec int uiConfirmWait(int txn_id, int timeout_msec=-1);

DllSpec int uiInput(int display, int region_id, const std::string &templateName, std::vector<std::string> &value, const std::string &text, uiCallback cb=0, void *cbdata=0);
DllSpec int uiInput(int region_id, const std::string &templateName, std::vector<std::string> &value, const std::string &text, uiCallback cb=0, void *cbdata=0);
inline int uiInput(const std::string &templateName, std::vector<std::string> &value, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ return uiInput(0,UI_REGION_DEFAULT,templateName,value,text,cb,cbdata); }

DllSpec int uiInputAsync(int display, int region_id, const std::string &templateName, const std::vector<std::string> &value, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
DllSpec int uiInputAsync(int region_id, const std::string &templateName, const std::vector<std::string> &value, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
inline int uiInputAsync(const std::string &templateName, const std::vector<std::string> &value, const std::string &text, uiAsyncCallback cb=0, void *data=0 )
{ return uiInputAsync(0,UI_REGION_DEFAULT, templateName, value, text,cb,data); }

DllSpec int uiInputWait(int txn_id, std::vector<std::string> &value, int timeout_msec=-1);


DllSpec int uiInputPINCheck(int display, int region_id, const std::string &templateName, const std::string &referencePIN, const std::string &text, uiCallback cb=0, void *cbdata=0);
DllSpec int uiInputPINCheck(int region_id, const std::string &templateName, const std::string &referencePIN, const std::string &text, uiCallback cb=0, void *cbdata=0);
inline int uiInputPINCheck(const std::string &templateName, const std::string &referencePIN, const std::string &text, uiCallback cb=0, void *cbdata=0)
{ return uiInputPINCheck(0,UI_REGION_DEFAULT,templateName,referencePIN,text,cb,cbdata); }


DllSpec int uiInputPINCheckAsync(int display, int region_id, const std::string &templateName, const std::string &referencePIN, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
DllSpec int uiInputPINCheckAsync(int region_id, const std::string &templateName, const std::string &referencePIN, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
inline int uiInputPINCheckAsync(const std::string &templateName, const std::string &referencePIN, const std::string &text, uiAsyncCallback cb=0, void *data=0)
{ return uiInputPINCheckAsync(0,UI_REGION_DEFAULT, templateName, referencePIN, text,cb,data); }

DllSpec int uiInputPINCheckWait(int txn_id, int timeout_msec=-1);


struct UIMenuEntry
{
   std::string text; 
   int value;        
   unsigned options; 
};


DllSpec int uiMenu(int display, int region_id, const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiCallback cb=0, void *cbdata=0);
DllSpec int uiMenu(int region_id, const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiCallback cb=0, void *cbdata=0);
inline int uiMenu(const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiCallback cb=0, void *cbdata=0)
{ return uiMenu(0,UI_REGION_DEFAULT,templateName,text,menu,menusize,preselect,cb,cbdata); }


DllSpec int uiMenuAsync(int display, int region_id, const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiAsyncCallback cb=0, void *data=0);
DllSpec int uiMenuAsync(int region_id, const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiAsyncCallback cb=0, void *data=0);
inline int uiMenuAsync(const std::string &template_name, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiAsyncCallback cb=0, void *data=0)
{ return uiMenuAsync(0,UI_REGION_DEFAULT, template_name, text, menu, menusize, preselect,cb,data); }

DllSpec int uiMenuWait(int txn_id, int timeout_msec=-1);


#ifndef DOXYGEN
} // namespace vfigui
#endif


#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
