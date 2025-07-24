---
hidden: true
title: config.h
---

<a href="config_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef CONFIG_H
 2 #define CONFIG_H
 3 
 4 class Config
 5 {
 6  public:
 7 
 12  ~Config();
 13 
 17  static Config &getInstance()
 18  {
 19  static Config instance;
 20  return instance;
 21  }
 22 
 27  int emvCbApplicationSelectionMode() const;
 28 
 33  int emvCbLedMode() const;
 34 
 43  bool adminMode(unsigned *tout_sec = 0) const;
 44 
 57  bool counterTopMode(bool *auto_connect = 0) const;
 58 
 59  private:
 60  Config();
 61  Config(const Config &other); // non construction-copyable
 62  Config &operator=(const Config &); // non copyable
 63 
 64  int emv_appl_select_mode;
 65  int emv_led_mode;
 66  bool admin_mode;
 67  unsigned admin_tout_sec;
 68  bool ct_enabled;
 69  bool ct_auto_connect;
 70 };
 71 
 72 #endif // CONFIG_H
```
