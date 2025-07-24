---
hidden: true
title: ui_mode.h
---

<a href="ui__mode_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 #ifndef _UI_MODE_H_
 8 #define _UI_MODE_H_
 9 
 10 #include <string>
 11 
 22 #ifndef HEADLESS
 23 
 25  void init_ui_mode();
 26 
 40  bool select_com_profile(int comInterfaces, char **ComFileName);
 41 
 45  void reset_com_profile();
 46 
 50  struct ProtStatus;
 51  void protocol_status_ui_update(const struct ProtStatus *status);
 52 
 58  bool multi_connection_support_enabled();
 59 
 63  bool comcfg_file_valid(const std::string &comcfg_file);
 64 
 68  void show_idle_connect_status();
 69 
 70 #endif // HEADLESS
 71 #endif // _UI_MODE_H_
```
