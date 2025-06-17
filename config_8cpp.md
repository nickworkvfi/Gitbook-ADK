---
title: sdi/src/config.cpp

---

# sdi/src/config.cpp






## Source code

```cpp
#include "config.h"
#include "_logf.h"
#include <string>
#include "ipc/jsobject.h"
#include "filesystem.h"

using namespace std;
using namespace vfiipc;

Config::Config()
{
  string file = sdi::filesystem::lookup_config_file(SDI_CONFIG_FILE);
  string content;
  JSObject json;

  if (file.empty() || !sdi::filesystem::read_file(file.c_str(), content))
  {
    if (file.empty())
    {
      _LOGF_INFO("Config(): configuration file %s not found", SDI_CONFIG_FILE);
    }
    else
    {
      _LOGF_ERROR("Config(): couldn't read configuration file %s", file.c_str());
    }
  }
  else
  {
    if (json.load(content))
    {
      _LOGF_INFO("Config(): loaded configuration file %s", file.c_str());
    }
    else
    {
      _LOGF_ERROR("Config(): invalid format of configuration file %s", file.c_str());
    }
  }

  // set configuration defaults
  emv_appl_select_mode = 0; // EMV application selection callback forwarding disabled
  emv_led_mode = 1;         // EMV LED callback forwarding enabled
  admin_mode = false;       // Administration mode disabled
  admin_tout_sec = 30;      // Administartion mode timeout (seconds), use if admin mode is enabled w/o timeout
  ct_enabled = true;        // enable Countertop support, false will force Standalone mode
  ct_auto_connect = true;   // on Countertop devices (e.g. T650c), enable auto TLS connection to EPP in idle

  // use default for EMV application selection
  bool defval = true;

  if (json.exists("emvCallbacks") &&
      json("emvCallbacks").exists("applicationSelectionMode") &&
      json("emvCallbacks")("applicationSelectionMode").isNumber())
  {
    emv_appl_select_mode = (json("emvCallbacks")("applicationSelectionMode").getInt() == 1 ? 1 : 0);
    defval = false;
  }

  _LOGF_INFO("Config(): Forwarding of EMV application selection callbacks %s by %s",
             emv_appl_select_mode == 1 ? "enabled" : "disabled", defval ? "default" : file.c_str());

  // use default for EMV LED mode
  defval = true;

  if (json.exists("emvCallbacks") &&
      json("emvCallbacks").exists("ledMode") &&
      json("emvCallbacks")("ledMode").isNumber())
  {
    emv_led_mode = (json("emvCallbacks")("ledMode").getInt() == 1 ? 1 : 0);
    defval = false;
  }

  _LOGF_INFO("Config(): Forwarding of EMV LED callbacks %s by %s",
             emv_led_mode == 1 ? "enabled" : "disabled", defval ? "default" : file.c_str());

  // use default for admin mode
  defval = true;

  if (json.exists("adminMode") &&
      json("adminMode").exists("enabled") &&
      json("adminMode")("enabled").isBool())
  {
    admin_mode = json("adminMode")("enabled").getBool();
    defval = false;
  }

  _LOGF_INFO("Config(): Admin mode %s by %s",
             admin_mode ? "enabled" : "disabled", defval ? "default" : file.c_str());

  if (admin_mode) // optimize: don't read timeout and ignore, if admin mode is off
  {
    // use default for admin mode timeout
    defval = true;

    if (json.exists("adminMode") &&
        json("adminMode").exists("timeout") &&
        json("adminMode")("timeout").isNumber())
    {
      int tout = json("adminMode")("timeout").getInt();

      if (tout > 0)
      {
        admin_tout_sec = (unsigned) tout;
        defval = false;
      }
    }

    _LOGF_INFO("Config(): Admin mode timeout set to %u by %s",
               admin_tout_sec, defval ? "default" : file.c_str());
  }

  // use default for Countertop enabled
  defval = true;

  if (json.exists("countertop") &&
      json("countertop").exists("enabled") &&
      json("countertop")("enabled").isBool())
  {
    ct_enabled = json("countertop")("enabled").getBool();
    defval = false;
  }

  _LOGF_INFO("Config(): Countertop support %s by %s",
             ct_enabled ? "enabled" : "disabled", defval ? "default" : file.c_str());

  if (ct_enabled) // optimize: don't read auto-connect and ignore, if Countertop mode is off
  {
    // use default for Countertop auto-connect enabled
    defval = true;

    if (json.exists("countertop") &&
        json("countertop").exists("auto_connect") &&
        json("countertop")("auto_connect").isBool())
    {
      ct_auto_connect = json("countertop")("auto_connect").getBool();
      defval = false;
    }

    _LOGF_INFO("Config(): Countertop EPP auto-connect %s by %s",
               ct_auto_connect ? "enabled" : "disabled", defval ? "default" : file.c_str());
  }
}

Config::~Config()
{
  //empty
}

int Config::emvCbApplicationSelectionMode() const
{
  return emv_appl_select_mode;
}

int Config::emvCbLedMode() const
{
  return emv_led_mode;
}

bool Config::adminMode(unsigned *tout_sec) const
{
  if (tout_sec)
  {
    *tout_sec = admin_tout_sec;
  }

  return admin_mode;
}

bool Config::counterTopMode(bool *auto_connect) const
{
  if (auto_connect)
  {
    // automatic TLS connection setup to EPP depends on enabled Countertop mode
    *auto_connect = (ct_enabled && ct_auto_connect);
  }

  return ct_enabled;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
