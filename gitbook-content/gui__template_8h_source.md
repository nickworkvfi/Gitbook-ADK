---
hidden: true
title: gui_template.h
---

<a href="gui__template_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++; -*-
 2 #ifndef GUI_TEMPLATE_H_2014_11_17
 3 #define GUI_TEMPLATE_H_2014_11_17
 4 
 10 #include "gui.h"
 11 
 12 #if defined _WIN32 && defined VFI_GUIPRT_SHARED_EXPORT
 13 # define DllSpec __declspec(dllexport)
 14 #elif defined __GNUC__ && defined VFI_GUIPRT_SHARED_EXPORT
 15 # define DllSpec __attribute__((visibility ("default")))
 16 #else
 17 # define DllSpec
 18 #endif
 19 
 21 #ifndef DOXYGEN
 22 namespace vfigui {
 23 #endif
 24 #if 0
 25 } // just to satisfy automatic indentation of the editor
 26 #endif
 27 
 28 
 30 enum UIMenuOptions {
 31  UI_MENU_DISABLED=1
 32 };
 33 
 43 DllSpec int uiDisplay(int display, int region_id,const std::string &templateName, const std::string &text);
 44 DllSpec int uiDisplay(int region_id,const std::string &templateName, const std::string &text);
 45 inline int uiDisplay(const std::string &templateName, const std::string &text)
 46 { return uiDisplay(0,UI_REGION_DEFAULT,templateName,text); }
 47 
 48 
 60 DllSpec int uiDisplayAsync(int display,int region_id, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 61 DllSpec int uiDisplayAsync(int region_id, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 62 inline int uiDisplayAsync(const std::string &text, uiAsyncCallback cb=0, void *data=0 )
 63 { return uiDisplayAsync(0,UI_REGION_DEFAULT,text,cb,data); }
 64 
 78 DllSpec int uiDisplayAsync(int display, int region_id, const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 79 DllSpec int uiDisplayAsync(int region_id, const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 80 inline int uiDisplayAsync(const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 )
 81 { return uiDisplayAsync(0,UI_REGION_DEFAULT,templateName,text,cb,data); }
 82 
 83 
 90 DllSpec int uiDisplayWait(int txn_id, int timeout_msec=-1);
 91 
 103 DllSpec int uiConfirm(int display, int region_id, const std::string &templateName, const std::string &text, uiCallback cb=0, void *cbdata=0);
 104 DllSpec int uiConfirm(int region_id, const std::string &templateName, const std::string &text, uiCallback cb=0, void *cbdata=0);
 105 inline int uiConfirm(const std::string &templateName, const std::string &text, uiCallback cb=0, void *cbdata=0)
 106 { return uiConfirm(0,UI_REGION_DEFAULT,templateName,text,cb,cbdata); }
 107 
 121 DllSpec int uiConfirmAsync(int display,int region_id, const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 122 DllSpec int uiConfirmAsync(int region_id, const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 123 inline int uiConfirmAsync(const std::string &templateName, const std::string &text, uiAsyncCallback cb=0, void *data=0 )
 124 { return uiConfirmAsync(0,UI_REGION_DEFAULT, templateName, text,cb,data); }
 125 
 132 DllSpec int uiConfirmWait(int txn_id, int timeout_msec=-1);
 133 
 171 DllSpec int uiInput(int display, int region_id, const std::string &templateName, std::vector<std::string> &value, const std::string &text, uiCallback cb=0, void *cbdata=0);
 172 DllSpec int uiInput(int region_id, const std::string &templateName, std::vector<std::string> &value, const std::string &text, uiCallback cb=0, void *cbdata=0);
 173 inline int uiInput(const std::string &templateName, std::vector<std::string> &value, const std::string &text, uiCallback cb=0, void *cbdata=0)
 174 { return uiInput(0,UI_REGION_DEFAULT,templateName,value,text,cb,cbdata); }
 175 
 191 DllSpec int uiInputAsync(int display, int region_id, const std::string &templateName, const std::vector<std::string> &value, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 192 DllSpec int uiInputAsync(int region_id, const std::string &templateName, const std::vector<std::string> &value, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 193 inline int uiInputAsync(const std::string &templateName, const std::vector<std::string> &value, const std::string &text, uiAsyncCallback cb=0, void *data=0 )
 194 { return uiInputAsync(0,UI_REGION_DEFAULT, templateName, value, text,cb,data); }
 195 
 204 DllSpec int uiInputWait(int txn_id, std::vector<std::string> &value, int timeout_msec=-1);
 205 
 206 
 218 DllSpec int uiInputPINCheck(int display, int region_id, const std::string &templateName, const std::string &referencePIN, const std::string &text, uiCallback cb=0, void *cbdata=0);
 219 DllSpec int uiInputPINCheck(int region_id, const std::string &templateName, const std::string &referencePIN, const std::string &text, uiCallback cb=0, void *cbdata=0);
 220 inline int uiInputPINCheck(const std::string &templateName, const std::string &referencePIN, const std::string &text, uiCallback cb=0, void *cbdata=0)
 221 { return uiInputPINCheck(0,UI_REGION_DEFAULT,templateName,referencePIN,text,cb,cbdata); }
 222 
 223 
 237 DllSpec int uiInputPINCheckAsync(int display, int region_id, const std::string &templateName, const std::string &referencePIN, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 238 DllSpec int uiInputPINCheckAsync(int region_id, const std::string &templateName, const std::string &referencePIN, const std::string &text, uiAsyncCallback cb=0, void *data=0 );
 239 inline int uiInputPINCheckAsync(const std::string &templateName, const std::string &referencePIN, const std::string &text, uiAsyncCallback cb=0, void *data=0)
 240 { return uiInputPINCheckAsync(0,UI_REGION_DEFAULT, templateName, referencePIN, text,cb,data); }
 241 
 249 DllSpec int uiInputPINCheckWait(int txn_id, int timeout_msec=-1);
 250 
 251 
 253 struct UIMenuEntry
 254 {
 255  std::string text;
 256  int value;
 257  unsigned options;
 258 };
 259 
 260 
 274 DllSpec int uiMenu(int display, int region_id, const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiCallback cb=0, void *cbdata=0);
 275 DllSpec int uiMenu(int region_id, const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiCallback cb=0, void *cbdata=0);
 276 inline int uiMenu(const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiCallback cb=0, void *cbdata=0)
 277 { return uiMenu(0,UI_REGION_DEFAULT,templateName,text,menu,menusize,preselect,cb,cbdata); }
 278 
 279 
 295 DllSpec int uiMenuAsync(int display, int region_id, const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiAsyncCallback cb=0, void *data=0);
 296 DllSpec int uiMenuAsync(int region_id, const std::string &templateName, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiAsyncCallback cb=0, void *data=0);
 297 inline int uiMenuAsync(const std::string &template_name, const std::string &text, const struct UIMenuEntry menu[], int menusize, int preselect, uiAsyncCallback cb=0, void *data=0)
 298 { return uiMenuAsync(0,UI_REGION_DEFAULT, template_name, text, menu, menusize, preselect,cb,data); }
 299 
 306 DllSpec int uiMenuWait(int txn_id, int timeout_msec=-1);
 307 
 308 
 309 #ifndef DOXYGEN
 310 } // namespace vfigui
 311 #endif
 312 
 313 
 316 #undef DllSpec
 317 
 318 #endif
```
