---
title: ipc/src/ipc/ipc.h

---

# ipc/src/ipc/ipc.h

 [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[vfiipc](namespacevfiipc.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfiipc::IPC](classvfiipc_1_1_i_p_c.md)**  |
| class | **[vfiipc::TCP](classvfiipc_1_1_t_c_p.md)**  |
| class | **[vfiipc::Pipe](classvfiipc_1_1_pipe.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](ipc_8h.md#define-dllspec)**  |
|  | **[DEPRECATED](ipc_8h.md#define-deprecated)**  |

## Detailed Description


inter process communication 




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


### define DEPRECATED

```cpp
#define DEPRECATED 
```


## Source code

```cpp
#ifndef IPC_H_20140521
#define IPC_H_20140521

#include <vector>
#include <string>

#if defined _WIN32 && defined VFI_IPC_SHARED_EXPORT
#  define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_IPC_SHARED_EXPORT
#  define DllSpec __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

#ifndef DEPRECATED
#  ifdef __GNUC__
#    define DEPRECATED __attribute__((deprecated))
#  elif defined(_MSC_VER)
#    define DEPRECATED __declspec(deprecated)
#  else
#    define DEPRECATED
#  endif
#endif

namespace vfiipc {

class IPC;
typedef void (*ipcCallback)(void *data, IPC *ipc);

class DllSpec IPC {

   // prevent usage of copy constructor and assignment operator
   IPC(const IPC &o);
   void operator=(const IPC &o);

 protected:
   class IpcPrivate;

   IPC(IpcPrivate *_d);

   IpcPrivate *d;

 public:

   virtual ~IPC();

   virtual bool eof();

   virtual bool error();

   virtual IPC *accept(int timeout_msec=-1) { (void)timeout_msec; return 0; }

   virtual void close();

   virtual bool write(const void *data, int size);

   virtual int read(void *data, int maxsize, int timeout_msec, int timeout_msec2);

   virtual int read(void *data, int maxsize, int timeout_msec=-1) { return read(data,maxsize,timeout_msec,timeout_msec); }

   int peek(void *data, int maxsize, int timeout_msec=-1);

   virtual bool write_msg(unsigned prefix, int msg_id, const void *msg, int size);

   virtual bool write_msg(unsigned prefix, int msg_id, const std::vector<unsigned char> &msg)
      { return write_msg(prefix,msg_id,msg.size()?&msg[0]:0,msg.size()); }

   virtual bool write_msg(unsigned prefix, int msg_id, const std::vector<char> &msg)
      { return write_msg(prefix,msg_id,msg.size()?&msg[0]:0,msg.size()); }

   virtual bool read_msg(unsigned prefix, int &msg_id, std::vector<unsigned char> &msg, int size_limit, int timeout_msec=-1);

   virtual bool read_msg(unsigned prefix, int &msg_id, std::vector<char> &msg, int size_limit, int timeout_msec=-1);

   virtual bool poll_in(int timeout_msec=-1);

   virtual const char *remote_addr() const;

   int getFD() const;

   virtual bool set_callback(ipcCallback cb, void *data=0);

   DEPRECATED static void set_callback_stacksize(int size=-1);

   static const char *getVersion();

   static const char *ipc_GetVersion();

protected:
   class IpcBuffer;
   virtual bool read_msg(unsigned prefix, int &msg_id, IpcBuffer &msg, int size_limit, int timeout_msec=-1);

public:
   virtual bool write_msg(unsigned prefix, int msg_id, const std::string &msg)
      { return write_msg(prefix,msg_id,msg.data(),msg.size()); }

   virtual bool read_msg(unsigned prefix, int &msg_id, std::string &msg, int size_limit, int timeout_msec=-1);

   virtual bool is_server();

   virtual const char *local_addr() const;
};

class DllSpec TCP: public IPC {
   // prevent usage of copy constructor and assignment operator
   TCP(const TCP &o);
   void operator=(const TCP &o);
   class TcpPrivate;

 public:

   TCP();
   ~TCP();

   bool connect(const char *hostname, unsigned short port,int timeout_msec=-1);

   bool listen(unsigned short port, const char *listen_address=0);

   IPC * accept(int timeout_msec=-1);

   void close();

   bool setFD(int socket_fd);

   bool setKeepalive(int cnt, int interval);
};

#ifndef _WIN32 // class Pipe is recently not available on Windows

class DllSpec Pipe: public IPC {
   // prevent usage of copy constructor and assignment operator
   Pipe(const Pipe &o);
   void operator=(const Pipe &o);
   class PipePrivate;

 public:

   enum PipeConfig {
     PC_None=0,              
     PC_EnableCredentials=1  
   };

   Pipe();
   Pipe(int config);
   ~Pipe();

   bool connect(const char *pipe);

   bool listen(const char *pipe);

   IPC * accept(int timeout_msec=-1);

   void close();
};
#endif

} // namespace vfiipc

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
