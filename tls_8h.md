---
title: ipc/src/ipc/tls.h

---

# ipc/src/ipc/tls.h



## Namespaces

| Name           |
| -------------- |
| **[vfiipc](namespacevfiipc.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfiipc::TLS](classvfiipc_1_1_t_l_s.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](tls_8h.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
#ifndef IPC_TLS_H_20200130
#define IPC_TLS_H_20200130

#include <ipc/ipc.h>

#if defined _WIN32 && defined VFI_IPCTLS_SHARED_EXPORT
#  define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_IPCTLS_SHARED_EXPORT
#  define DllSpec __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

namespace vfiipc {


class DllSpec TLS: public IPC {

 private:
   // prevent usage of copy constructor and assignment operator
   TLS(const TLS &o);
   void operator=(const TLS &o);

 protected:
   friend class TLSPrivate;
   void setLink(void *l);
   void getAddr(char *&remote, char *&local);

 public:

   enum Error {
      OK,               
      ERR_HOST,         
      ERR_PORT,         
      ERR_SOCKET,       
      ERR_UNKNOWN_HOST, 
      ERR_CONNECT,      
      ERR_TIMEOUT,      
      ERR_AUTHENTICATION, 
      ERR_FAIL          
   };

   enum CheckConfig {
      IGNORE_NONE=0,         
      IGNORE_ALL=1,          
      IGNORE_SELF_SIGNED=2,  
      IGNORE_EXPIRED=4,      
      IGNORE_NOT_YET_VALID=8,
      IGNORE_HOSTNAME=16     
   };

   TLS();
   ~TLS();

   virtual bool eof();
   virtual bool error();

   Error TLSError(std::string *err);

   void setKeyCert(const char *key, const char *cert);

   void addCA(const char *filename, const char *path);

   void setCA(const char *filename, const char *path);

   void addDefaultCA();

   void setClientAuth(bool on);

   void setCheckConfig(unsigned check_flags);

   static bool hasAuthEx();

   bool connect(const char *hostname, unsigned short port,int timeout_msec=-1);

   bool listen(unsigned short port, const char *listen_address=0);

   IPC * accept(int timeout_msec=-1);

   void close();

   virtual bool write(const void *data, int size);
   virtual int read(void *data, int maxsize, int timeout_msec, int timeout_msec2);

   virtual bool write_msg(unsigned prefix, int msg_id, const void *msg, int size);
   virtual bool write_msg(unsigned prefix, int msg_id, const std::vector<unsigned char> &msg)
      { return write_msg(prefix,msg_id,msg.size()?&msg[0]:0,msg.size()); }
   virtual bool write_msg(unsigned prefix, int msg_id, const std::vector<char> &msg)
      { return write_msg(prefix,msg_id,msg.size()?&msg[0]:0,msg.size()); }
   virtual bool write_msg(unsigned prefix, int msg_id, const std::string &msg)
      { return write_msg(prefix,msg_id,msg.data(),msg.size()); }

   virtual bool read_msg(unsigned prefix, int &msg_id, std::vector<unsigned char> &msg, int size_limit, int timeout_msec=-1);
   virtual bool read_msg(unsigned prefix, int &msg_id, std::vector<char> &msg, int size_limit, int timeout_msec=-1);

   virtual bool poll_in(int timeout_msec=-1);
   virtual const char *remote_addr() const;

   int getFD() const;
   virtual bool set_callback(ipcCallback cb, void *data=0);
protected:
   virtual bool read_msg(unsigned prefix, int &msg_id, IPC::IpcBuffer &msg, int size_limit, int timeout_msec=-1);

public:
     virtual bool read_msg(unsigned prefix, int &msg_id, std::string &msg, int size_limit, int timeout_msec=-1);
   virtual bool is_server();
   virtual const char *local_addr() const;

};



} // namespace

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
