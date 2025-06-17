---
title: sdi/src/com_config.h

---

# sdi/src/com_config.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[ComConfig](class_com_config.md)**  |




## Source code

```cpp
#ifndef _COM_CONFIG_H_
#define _COM_CONFIG_H_

#include <vector>
#include <string>
#include <pthread.h>
#include "ipc/jsobject.h"

class ComConfig
{
  private:
    // disable copy constructor and assign operator
    ComConfig(const ComConfig&);
    ComConfig& operator=(const ComConfig&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    ComConfig(const ComConfig&&);
    ComConfig& operator=(ComConfig&&);
#endif

    // mutex protecting members
    pthread_mutex_t m_mutex;

    std::string m_profile; 
    std::vector<std::string> m_whitelist; 
    std::string m_bt_address; 
    std::string m_bt_device; 
    std::string m_com1a_address; 
    std::string m_com1a_device; 
    bool m_com1a_btclient_reconnect_idle; 
    unsigned m_com1a_mode; 
    bool m_com1a_btserver_pairing_idle; 
    std::string m_ble_address; 
    std::string m_ble_device; 
    std::string m_bt_own_device_name; 
    unsigned m_bt_num_paired; 
    int m_idx; 
    std::vector<unsigned> m_idx_list; 
    ComConfig();
    virtual ~ComConfig();

  public:
    // operation modes for COM1A profile
    enum Com1aMode
    {
      Com1a_Usb      =  0, // COM1A USB (default)
      Com1a_BtClient = 1,  // COM1A BT-client
      Com1a_BtServer = 2   // COM1A BT-server
    };

    static ComConfig& getInstance();

    inline void lock()
    {
      pthread_mutex_lock(&m_mutex);
    }
    inline void unlock()
    {
      pthread_mutex_unlock(&m_mutex);
    }
    inline pthread_mutex_t &getMutex()
    {
      return m_mutex;
    }

    inline std::string& profile()
    {
      return m_profile;  // written/changed by select_com_profile()
    }
    inline const std::vector<std::string>& whitelist()
    {
      return m_whitelist;
    }
    inline std::string& bt_address()
    {
      return m_bt_address;  // written/changes by bt_pan_menu()
    }
    inline std::string& bt_device()
    {
      return  m_bt_device;  // written/changes by bt_pan_menu()
    }
    inline std::string& com1a_address()
    {
      return m_com1a_address;  // written/changes by com1a_menu()
    }
    inline std::string& com1a_device()
    {
      return m_com1a_device;  // written/changes by com1a_menu()
    }
    inline bool& com1a_btclient_reconnect_idle()
    {
      return m_com1a_btclient_reconnect_idle;  // written/changed by com1a_menu()
    }
    inline unsigned& com1a_mode()
    {
      return m_com1a_mode;  // written/changed by com1a_menu()
    }
    inline bool& com1a_btserver_pairing_idle()
    {
      return m_com1a_btserver_pairing_idle;  // written/changed by com1a_menu()
    }
    inline std::string& ble_address()
    {
      return m_ble_address;  // written/changed by bt_pairing_submenu()
    }
    inline std::string& ble_device()
    {
      return m_ble_device;  // written/changed by bt_pairing_submenu()
    }
    inline const std::string& bt_own_device_name()
    {
      return m_bt_own_device_name;  // written/changed by activateConnectionProfile()
    }
    inline unsigned bt_num_paired()
    {
      return m_bt_num_paired;
    }

    inline int& idx()
    {
      return m_idx;  // written/changed by select_com_profile() and displayCOMMenu()
    }
    inline std::vector<unsigned>& idx_list()
    {
      return m_idx_list;  // written/changed by select_com_profile()
    }

    void clear();

    void read(bool *storage_needed = 0);

    void store();

    static std::string getCom1aModeName(unsigned mode);

    static bool load(const std::string &com_if_file, vfiipc::JSObject &res, bool *storage_needed = 0);

    enum MultiConnectMode
    {
      MCM_Default =  0,  
      MCM_Enabled =  1,  
      MCM_Disabled = 2   
    };
    static enum MultiConnectMode getMultiConnectMode();
};

#endif // _COM_CONFIG_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
