---
title: sdi/src/config.h

---

# sdi/src/config.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Config](class_config.md)**  |




## Source code

```cpp
#ifndef CONFIG_H
#define CONFIG_H

class Config
{
  public:

    ~Config();

    static Config &getInstance()
    {
      static Config instance;
      return instance;
    }

    int emvCbApplicationSelectionMode() const;

    int emvCbLedMode() const;

    bool adminMode(unsigned *tout_sec = 0) const;

    bool counterTopMode(bool *auto_connect = 0) const;

  private:
    Config();
    Config(const Config &other);   // non construction-copyable
    Config &operator=(const Config &);  // non copyable

    int emv_appl_select_mode;
    int emv_led_mode;
    bool admin_mode;
    unsigned admin_tout_sec;
    bool ct_enabled;
    bool ct_auto_connect;
};

#endif // CONFIG_H
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
