---
title: sdi/src/madk_pp_protocol.h

---

# sdi/src/madk_pp_protocol.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[mADK_PP_Prot](classm_a_d_k___p_p___prot.md)**  |
| class | **[mADK_PP_ProtBusyLock](classm_a_d_k___p_p___prot_busy_lock.md)**  |




## Source code

```cpp
/*****************************************************************************
 *  Company:     Verifone
 *  Author:      GSS R&D Germany
 *  Content:     SDI-Server
 ****************************************************************************/
#ifndef _MADK_PP_PROTOCOL_H_
#define _MADK_PP_PROTOCOL_H_

#include <vector>
#include <string>
#include <pthread.h>

struct mADK_PP_Prot_Loader;
struct ProtStatus;
struct ConnectInfo;
struct TcpInfo;
struct UdsInfo;

class mADK_PP_Prot
{
  public:

    enum ProtocolState
    {
      PS_Stopped = 0, 
      PS_Running = 1, 
      PS_Aborted = 2  
    };

    enum AbortState
    {
      AS_NotAborted = 0,     
      AS_AbortIdle = 1,      
      AS_ConnectionLost = 2  
    };

  private:
#ifndef _STM32 // no SDI protocol thread on Titus
    pthread_t proto_thread;
#endif
    pthread_mutex_t mutex;
    pthread_cond_t cond;
    std::vector<unsigned char> cmdbuf;
    char prot_type;  
    unsigned msg_id; 
    unsigned msg_id_payment; 
    unsigned msg_id_nested;  
    enum ProtocolState prot_state; 
    bool cmd_active; 
    bool nested_cmd; 
    enum AbortState aborted;  
    unsigned cmd_counter; 
    struct mADK_PP_Prot_Loader *lib; 
    enum CommandType
    {
      Cmd_Any                   = 0, 
      Cmd_Abort                 = 1, 
      Cmd_LockPayment           = 2, 
      Cmd_ResetLink             = 3, 
      Cmd_Check4Update          = 4, 
      Cmd_ExtButton             = 5, 
      Cmd_EmvCbResponse         = 6, 
      Cmd_CtrlCbResponse        = 7, 
      Cmd_TrgrCbResponse        = 8, 
      Cmd_PaymentNotificationCb = 9  
    };
    enum RequestType
    {
      Request_None = 0,  
      Request_EMV  = 1,  
      Request_Ctrl = 2,  
      Request_Trgr = 3   
    };
    RequestType req_type; 
    bool recovery_mode; 
    bool busy; 
    bool cancelled; 
    bool unlock_payment_pending; 
    void *main_handle;  
    void *busy_handle; 
    static mADK_PP_Prot *obj; // singleton

    // disable calling copy constructor and assignment operator
    mADK_PP_Prot(const mADK_PP_Prot &);
    void operator=(const mADK_PP_Prot &);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    mADK_PP_Prot(const mADK_PP_Prot&&);
    mADK_PP_Prot& operator=(mADK_PP_Prot&&);
#endif

    // disable constructor and force caller to use getInstance()
    mADK_PP_Prot();
    virtual ~mADK_PP_Prot();

    static void *run(void *data);

    static enum CommandType getCommandType(const unsigned char *cmd, unsigned size);

    static bool isCallbackResponse(const enum CommandType cmd);

    bool _poll(int timeout_msec);

    bool _receive(std::vector<unsigned char> &cmd, int timeout_msec);

    bool _send(void *handle, const unsigned char *cmd, unsigned size, char protType, unsigned msgId) const;

    int _get_connection_type(void *handle);
  public:

    static mADK_PP_Prot *getInstance();

    inline struct mADK_PP_Prot_Loader *loader()
    {
      return lib;
    }

    bool poll(int timeout_msec = -1);

    bool receive(std::vector<unsigned char> &cmd, int timeout_msec = -1);

    bool abort();

    bool send(const unsigned char *cmd, unsigned size);

    inline bool send(const std::vector<unsigned char> &cmd)
    {
      return send(cmd.size() > 0 ? &cmd[0] : 0, cmd.size());
    }

    bool command(const unsigned char *cmd, unsigned size);

    bool request(const unsigned char *cmd, unsigned size);

    inline bool request(const std::vector<unsigned char> &cmd)
    {
      return request(cmd.size() > 0 ? &cmd[0] : 0, cmd.size());
    }

    bool recv_response(std::vector<unsigned char> &response, int timeout_msec = -1);

    bool set_busy(bool flag, bool cmd_ctx = true);

    bool loadAcl();

    enum CMDActiveType
    {
      CMD_None   = 0, 
      CMD_Active = 1, 
      CMD_Nested = 2  
    };
    inline enum CMDActiveType command_active() const
    {
      if (cmd_active)
      {
        if (nested_cmd)
        {
          return CMD_Nested;
        }

        return CMD_Active;
      }

      return CMD_None;
    }

    bool start();

    void stop();

    void setRecoveryMode(bool on_off);

    inline enum ProtocolState get_protocol_state() const
    {
      return prot_state;
    }

    inline bool connected() const
    {
      return !!get_handle();
    }

    inline bool check_abort() const
    {
      return cancelled;
    }

    void set_command(void *handle, char *cmd, int size, char protType, unsigned msgId);

    bool get_status(struct ProtStatus *status) const;

    bool get_connection_info(struct ConnectInfo *info) const;

    void free_connection_info(struct ConnectInfo *info) const;

    void set_com_profile(const char *file) const;

    bool trusted_connection();

    bool get_tcp_info(struct TcpInfo *info);

    bool get_uds_info(struct UdsInfo *info);

    void *get_handle() const;

    char get_protocol_type() const;

    bool isConnectionThread() const;

    bool isMainConnectionThread() const;

    int select(int comInterfaces, char **ComFileName);

    void reset();
};

class mADK_PP_ProtBusyLock
{
    mADK_PP_Prot *m_proto;
    bool m_locked;

    // disable copy constructor and assign operator
    mADK_PP_ProtBusyLock(const mADK_PP_ProtBusyLock&);
    mADK_PP_ProtBusyLock& operator=(const mADK_PP_ProtBusyLock&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    mADK_PP_ProtBusyLock(const mADK_PP_ProtBusyLock&&);
    mADK_PP_ProtBusyLock& operator=(mADK_PP_ProtBusyLock&&);
#endif

  public:
    mADK_PP_ProtBusyLock(bool cmd_ctx = true)
    {
      m_proto = mADK_PP_Prot::getInstance();
      m_locked = m_proto->set_busy(true, cmd_ctx);
    }
    virtual ~mADK_PP_ProtBusyLock()
    {
      unlock();
    }
    void unlock()
    {
      if (m_locked)
      {
        m_proto->set_busy(false);
        m_locked = false;
      }
    }
    bool locked() const
    {
      return m_locked;
    }
};

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
