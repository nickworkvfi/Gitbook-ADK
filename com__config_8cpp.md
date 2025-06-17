---
title: sdi/src/com_config.cpp

---

# sdi/src/com_config.cpp



## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[BT_NUM_PAIRED_DEFAULT](com__config_8cpp.md#define-bt-num-paired-default)**  |




## Macros Documentation

### define BT_NUM_PAIRED_DEFAULT

```cpp
#define BT_NUM_PAIRED_DEFAULT 2
```


## Source code

```cpp
#include "com_config.h"
#include "_logf.h"
#include "filesystem.h"
#include "ipc/jsobject.h"
#include "sysinfo/sysinfo.h"

#define BT_NUM_PAIRED_DEFAULT 2  // default for max. paired BT devices

using namespace std;
using namespace vfiipc;

string ComConfig::getCom1aModeName(unsigned mode)
{
  switch (mode)
  {
    case Com1a_Usb:
      return "usb"; // COM1A USB

    case Com1a_BtClient:
      return "bt-client"; // COM1A BT-client

    case Com1a_BtServer:
      return "bt-server"; // COM1A BT-server

    default:
      break;
  }

  return "";
}

// COM configuration singleton
ComConfig &ComConfig::getInstance()
{
  static ComConfig com_cfg;
  return com_cfg;
}

ComConfig::ComConfig()
{
  pthread_mutex_init(&m_mutex, 0);
  clear();
}

ComConfig::~ComConfig()
{
  pthread_mutex_destroy(&m_mutex);
}

bool ComConfig::load(const string &com_if_file, JSObject &res, bool *storage_needed)
{
  string data;

  if (!sdi::filesystem::read_file(com_if_file.c_str(), data))
  {
    _LOGF_INFO("ComConfig::load(): '%s' not found", com_if_file.c_str());
    return false;
  }

  _LOGF_INFO("ComConfig::load(): Found '%s' with data:\n%s", com_if_file.c_str(), data.c_str());

  // if not JSON format, convert old file format to JSObject
  if (!res.load(data))
  {
    size_t pos = data.find_first_of("\r\n");

    if (pos != string::npos)
    {
      data.erase(pos);
    }

    if (!data.empty())
    {
      // CONNECT_COM1A.XML may be appended by BT address
      if (!data.compare(0, 17, CONNECT_COM1A_FILE))
      {
        res("profile") = CONNECT_COM1A_FILE;

        if (data.length() > 17)
        {
          res("com1a_address") = data.substr(17);
        }
      }
      else
      {
        res("profile") = data;
      }

      // new format requires file update
      if (storage_needed)
      {
        *storage_needed = true;
      }
    }
  }

  return (res.exists("profile") && !res("profile").getString().empty());
}

void ComConfig::clear()
{
  m_profile.clear();
  m_whitelist.clear();
  m_bt_address.clear();
  m_bt_device.clear();
  m_com1a_address.clear();
  m_com1a_device.clear();
  m_com1a_btclient_reconnect_idle = true;
  m_com1a_mode = Com1a_Usb;
  m_com1a_btserver_pairing_idle = true;
  m_ble_address.clear();
  m_ble_device.clear();
  m_bt_own_device_name.clear();
  m_bt_num_paired = BT_NUM_PAIRED_DEFAULT;

  m_idx = -1;
  m_idx_list.clear();
}

void ComConfig::read(bool *storage_needed)
{
  clear(); // set defaults

  // init
  if (storage_needed)
  {
    *storage_needed = false;
  }

  JSObject json;
  string com_if_file = sdi::filesystem::home_flash_file(COM_PREFIX COM_IF_CONFIG_FILE);

  if (!load(com_if_file, json, storage_needed))
  {
    _LOGF_INFO("ComConfig::read(): couldn't load '%s'", com_if_file.c_str());
    return;
  }

  // set profile
  m_profile = json("profile").getString(); // existance of element checked by load()

  // set profile whitelist
  if (json.exists("whitelist") && json("whitelist").isArray())
  {
    for (unsigned i = 0; i < json("whitelist").size(); i++)
    {
      m_whitelist.push_back(json("whitelist")[i].getString());
    }
  }

  // set BT address
  if (json.exists("bt_address") && json("bt_address").isString())
  {
    m_bt_address = json("bt_address").getString();
  }

  // set BT device name
  if (json.exists("bt_device") && json("bt_device").isString())
  {
    m_bt_device = json("bt_device").getString();
  }

  // set BT address for COM1A BT-Client
  bool com1a_addr_exists = json.exists("com1a_address");

  if (com1a_addr_exists && json("com1a_address").isString())
  {
    m_com1a_address = json("com1a_address").getString();
  }

  // set BT device name for COM1A BT-Client
  if (json.exists("com1a_device") && json("com1a_device").isString())
  {
    m_com1a_device = json("com1a_device").getString();
  }

  // set flag to enable COM1A BT-Client reconnect when idle
  if (json.exists("com1a_btclient_reconnect_idle") && json("com1a_btclient_reconnect_idle").isBool())
  {
    m_com1a_btclient_reconnect_idle = json("com1a_btclient_reconnect_idle").getBool();
  }

  // set the com1a_mode, which was introduced with mode COM1A BT-server
  if (json.exists("com1a_mode") && json("com1a_mode").isString())
  {
    string m = json("com1a_mode").getString();

    unsigned i = 0;
    string mode;

    while (!(mode = getCom1aModeName(i++)).empty())
    {
      if (m == mode)
      {
        m_com1a_mode = i;
        break;
      }
    }
  }
  else
  {
    /* for previous SDI versions this value was missing and mode COM1A (BT-client)
     * was used, if address of the BT-Client (com1a_address) has exist. For a
     * missing BT address, mode COM1A (USB) was enabled. Thus, we do the same. */
    if (com1a_addr_exists)
    {
      m_com1a_mode = Com1a_BtClient;
    }

    // else: Com1a_Usb
    if (storage_needed)
    {
      *storage_needed = true; // update file (if valid provile exists)
    }
  }

  // set flag to enable BT prairing when idle
  if (json.exists("com1a_btserver_pairing_idle") && json("com1a_btserver_pairing_idle").isBool())
  {
    m_com1a_btserver_pairing_idle = json("com1a_btserver_pairing_idle").getBool();
  }

  // set BLE address
  if (json.exists("ble_address") && json("ble_address").isString())
  {
    m_ble_address = json("ble_address").getString();
  }

  // set BLE device name
  if (json.exists("ble_device") && json("ble_device").isString())
  {
    m_ble_device = json("ble_device").getString();
  }

  // set device name (of this terminal) for BT pairing
  if (json.exists("bt_own_device_name") && json("bt_own_device_name").isString())
  {
    m_bt_own_device_name = json("bt_own_device_name").getString();
  }
  else
  {
    m_bt_own_device_name = "SDI_";
    string sn;

    if (vfisysinfo::sysGetPropertyString(vfisysinfo::SYS_PROP_HW_SERIALNO, sn) != vfisysinfo::SYS_ERR_OK)
    {
      sn = "Server";
    }

    m_bt_own_device_name += sn;
  }

  // set max. number of paired BT devices for BT pairing
  if (json.exists("bt_num_paired") && json("bt_num_paired").isNumber())
  {
    int n = json("bt_num_paired").getInt();

    if (n >= 0)
    {
      m_bt_num_paired = n;
    }
  }
}

void ComConfig::store()
{
  // read file first not to lose read-only settings
  string com_if_file = sdi::filesystem::home_flash_file(COM_PREFIX COM_IF_CONFIG_FILE);
  JSObject json;

  if (!load(com_if_file, json))
  {
    _LOGF_INFO("ComConfig::store(): file '%s' not found or valid, will create it", com_if_file.c_str());
  }

  json("profile") = m_profile;
  // m_whitelist is read-only
  json("bt_address") = m_bt_address;
  json("bt_device") = m_bt_device;
  json("com1a_address") = m_com1a_address;
  json("com1a_device") = m_com1a_device;
  json("com1a_btclient_reconnect_idle") = m_com1a_btclient_reconnect_idle;
  json("com1a_mode") = getCom1aModeName(m_com1a_mode);
  json("com1a_btserver_pairing_idle") = m_com1a_btserver_pairing_idle;
  json("ble_address") = m_ble_address;
  json("ble_device") = m_ble_device;
  // m_bt_own_device_name and m_bt_num_paired are read-only
  // multi_connect_support is read-only

  string file = json.dump();

  if (!sdi::filesystem::write_file(com_if_file.c_str(), file))
  {
    _LOGF_ERROR("ComConfig::store(): failed to store file '%s'", com_if_file.c_str());
    return;
  }

  _LOGF_INFO("ComConfig::store(): stored file '%s' with data:\n%s", com_if_file.c_str(), file.c_str());
}

enum ComConfig::MultiConnectMode ComConfig::getMultiConnectMode()
{
  string com_if_file = sdi::filesystem::home_flash_file(COM_PREFIX COM_IF_CONFIG_FILE);
  JSObject json;

  if (!ComConfig::load(com_if_file, json))
  {
    return MCM_Default; // configuration file not found/invalid, use default
  }

  if (!json.exists("multi_connect_support") || !json("multi_connect_support").isBool())
  {
    return MCM_Default; // multi_connect_support does not exists or has wrong format, use default
  }

  bool ret = json("multi_connect_support").getBool();

  if (ret)
  {
    _LOGF_INFO("ComConfig::isMultiConnectEnabled(): Multi connection support for Engage enabled by COM interface configuration");
    return MCM_Enabled;
  }

  return MCM_Disabled;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
