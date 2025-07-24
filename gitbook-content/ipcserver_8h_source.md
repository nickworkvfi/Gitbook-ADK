---
hidden: true
title: ipcserver.h
---

<a href="ipcserver_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef IPC_SERVER_H
 2 #define IPC_SERVER_H
 3 
 4 
 7 #include "thread.h"
 8 #include "pthreadutil.h"
 9 #include "ipc/ipc.h"
 10 
 22 template<class Service> class IpcServer
 23 {
 24  vfiipc::IPC *m_ipc;
 25  bool m_breakflag;
 26  pthread_mutex_t m_mutex;
 27  pthread_cond_t m_cond;
 29  // disable copy constructor and assign operator
 30  IpcServer(const IpcServer&);
 31  IpcServer& operator=(const IpcServer&);
 32 #if __cplusplus >= 201103L // since C++11 also forbid usage of move
 33  IpcServer(const IpcServer&&);
 34  IpcServer& operator=(IpcServer&&);
 35 #endif
 36 
 37  public:
 38 
 42  IpcServer() : m_ipc(0), m_breakflag(false)
 43  {
 44  pthread_mutex_init(&m_mutex, 0);
 45  pthread_cond_init(&m_cond, 0);
 46  }
 47 
 48  ~IpcServer()
 49  {
 50  stop();
 51  pthread_mutex_destroy(&m_mutex);
 52  pthread_cond_destroy(&m_cond);
 53  }
 54 
 57  void set(vfiipc::IPC *ipc)
 58  {
 59  pthread_mutex_lock(&m_mutex);
 60 
 61  // take over IPC reference for run() and stop()
 62  if (!m_ipc)
 63  {
 64  m_ipc = ipc;
 65  m_breakflag = false;
 66  }
 67 
 68  pthread_mutex_unlock(&m_mutex);
 69  }
 70 
 80  bool run(vfiipc::IPC *ipc, const Service &init_value);
 81 
 83  bool stop(void);
 84 };
 85 
 87 
 88 
 89 template<class Service> bool IpcServer<Service>::stop(void)
 90 {
 91  bool stopped = false;
 92  pthread_mutex_lock(&m_mutex);
 93 
 94  while (m_ipc)
 95  {
 96  m_breakflag = true;
 97  m_ipc->close(); // let accept() return
 98  pthread_cond_wait(&m_cond, &m_mutex);
 99  stopped = true;
 100  }
 101 
 102  pthread_mutex_unlock(&m_mutex);
 103  return stopped;
 104 }
 105 
 106 template<class Service> bool IpcServer<Service>::run(vfiipc::IPC *ipc, const Service &init_value)
 107 {
 108  bool ret = true; // server aborted by break flag
 109  pthread_mutex_lock(&m_mutex);
 110 
 111  if (!m_ipc)
 112  {
 113  // take over IPC reference for stop()
 114  m_ipc = ipc;
 115  m_breakflag = false;
 116  }
 117 
 118  // ensure that we have a valid IPC server object on which listen() was called
 119  if (!m_ipc || !m_ipc->is_server())
 120  {
 121  m_ipc = 0;
 122  // signal waiter in stop() (if already invoked)
 123  pthread_cond_signal(&m_cond);
 124  pthread_mutex_unlock(&m_mutex);
 125  return false;
 126  }
 127 
 128  while (!m_breakflag)
 129  {
 130  pthread_mutex_unlock(&m_mutex);
 131  vfiipc::IPC *io = m_ipc->accept();
 132  pthread_mutex_lock(&m_mutex);
 133 
 134  if (io)
 135  {
 136  Service *s = new Service(init_value);
 137  s->setIO(io); // takes ownership of io
 138  ThreadControl tc(s, 1); // 1 means run a detached thread
 139 
 140  if (tc.getState() != ThreadControl::Detached)
 141  {
 142  ret = false;
 143  break;
 144  }
 145  }
 146  else if (!m_breakflag) // io==NULL, accept() failed and not aborted by stop()
 147  {
 148  // call failure() and check server to continue
 149  if (!init_value.failure(m_ipc))
 150  {
 151  ret = false;
 152  break;
 153  }
 154  }
 155  }
 156 
 157  m_ipc = 0;
 158  pthread_cond_signal(&m_cond);
 159  pthread_mutex_unlock(&m_mutex);
 160  return ret;
 161 }
 162 
 163 #endif
 164 
```
