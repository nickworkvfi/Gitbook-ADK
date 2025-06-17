---
title: sdi/src/ipcserver.h

---

# sdi/src/ipcserver.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[IpcServer](class_ipc_server.md)**  |




## Source code

```cpp
#ifndef IPC_SERVER_H
#define IPC_SERVER_H


#include "thread.h"
#include "pthreadutil.h"
#include "ipc/ipc.h"

template<class Service> class IpcServer
{
    vfiipc::IPC *m_ipc;      
    bool m_breakflag;        
    pthread_mutex_t m_mutex; 
    pthread_cond_t m_cond;   
    // disable copy constructor and assign operator
    IpcServer(const IpcServer&);
    IpcServer& operator=(const IpcServer&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    IpcServer(const IpcServer&&);
    IpcServer& operator=(IpcServer&&);
#endif

  public:

    IpcServer() : m_ipc(0), m_breakflag(false)
    {
      pthread_mutex_init(&m_mutex, 0);
      pthread_cond_init(&m_cond, 0);
    }

    ~IpcServer()
    {
      stop();
      pthread_mutex_destroy(&m_mutex);
      pthread_cond_destroy(&m_cond);
    }

    void set(vfiipc::IPC *ipc)
    {
      pthread_mutex_lock(&m_mutex);

      // take over IPC reference for run() and stop()
      if (!m_ipc)
      {
        m_ipc = ipc;
        m_breakflag = false;
      }

      pthread_mutex_unlock(&m_mutex);
    }

    bool run(vfiipc::IPC *ipc, const Service &init_value);

    bool stop(void);
};



template<class Service> bool IpcServer<Service>::stop(void)
{
  bool stopped = false;
  pthread_mutex_lock(&m_mutex);

  while (m_ipc)
  {
    m_breakflag = true;
    m_ipc->close(); // let accept() return
    pthread_cond_wait(&m_cond, &m_mutex);
    stopped = true;
  }

  pthread_mutex_unlock(&m_mutex);
  return stopped;
}

template<class Service> bool IpcServer<Service>::run(vfiipc::IPC *ipc, const Service &init_value)
{
  bool ret = true; // server aborted by break flag
  pthread_mutex_lock(&m_mutex);

  if (!m_ipc)
  {
    // take over IPC reference for stop()
    m_ipc = ipc;
    m_breakflag = false;
  }

  // ensure that we have a valid IPC server object on which listen() was called
  if (!m_ipc || !m_ipc->is_server())
  {
    m_ipc = 0;
    // signal waiter in stop() (if already invoked)
    pthread_cond_signal(&m_cond);
    pthread_mutex_unlock(&m_mutex);
    return false;
  }

  while (!m_breakflag)
  {
    pthread_mutex_unlock(&m_mutex);
    vfiipc::IPC *io = m_ipc->accept();
    pthread_mutex_lock(&m_mutex);

    if (io)
    {
      Service *s = new Service(init_value);
      s->setIO(io);  // takes ownership of io
      ThreadControl tc(s, 1); // 1 means run a detached thread

      if (tc.getState() != ThreadControl::Detached)
      {
        ret = false;
        break;
      }
    }
    else if (!m_breakflag) // io==NULL, accept() failed and not aborted by stop()
    {
      // call failure() and check server to continue
      if (!init_value.failure(m_ipc))
      {
        ret = false;
        break;
      }
    }
  }

  m_ipc = 0;
  pthread_cond_signal(&m_cond);
  pthread_mutex_unlock(&m_mutex);
  return ret;
}

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
