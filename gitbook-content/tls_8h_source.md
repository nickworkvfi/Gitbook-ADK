---
hidden: true
title: tls.h
---

<a href="tls_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef IPC_TLS_H_20200130
 2 #define IPC_TLS_H_20200130
 3 
 6 #include <ipc/ipc.h>
 7 
 8 #if defined _WIN32 && defined VFI_IPCTLS_SHARED_EXPORT
 9 # define DllSpec __declspec(dllexport)
 10 #elif defined __GNUC__ && defined VFI_IPCTLS_SHARED_EXPORT
 11 # define DllSpec __attribute__((visibility ("default")))
 12 #else
 13 # define DllSpec
 14 #endif
 15 
 16 namespace vfiipc {
 17 
 18 
 20 class DllSpec TLS: public IPC {
 21 
 22  private:
 23  // prevent usage of copy constructor and assignment operator
 24  TLS(const TLS &o);
 25  void operator=(const TLS &o);
 26 
 27  protected:
 28  friend class TLSPrivate;
 29  void setLink(void *l);
 30  void getAddr(char *&remote, char *&local);
 31 
 32  public:
 33 
 35  enum Error {
 36  OK,
 37  ERR_HOST,
 38  ERR_PORT,
 39  ERR_SOCKET,
 40  ERR_UNKNOWN_HOST,
 41  ERR_CONNECT,
 42  ERR_TIMEOUT,
 43  ERR_AUTHENTICATION,
 44  ERR_FAIL
 45  };
 46 
 48  enum CheckConfig {
 49  IGNORE_NONE=0,
 50  IGNORE_ALL=1,
 51  IGNORE_SELF_SIGNED=2,
 52  IGNORE_EXPIRED=4,
 53  IGNORE_NOT_YET_VALID=8,
 54  IGNORE_HOSTNAME=16
 55  };
 56 
 58  TLS();
 60  ~TLS();
 61 
 62  virtual bool eof();
 63  virtual bool error();
 64 
 69  Error TLSError(std::string *err);
 70 
 75  void setKeyCert(const char *key, const char *cert);
 76 
 82  void addCA(const char *filename, const char *path);
 83 
 85  void setCA(const char *filename, const char *path);
 86 
 88  void addDefaultCA();
 89 
 93  void setClientAuth(bool on);
 94 
 98  void setCheckConfig(unsigned check_flags);
 99 
 103  static bool hasAuthEx();
 104 
 117  bool connect(const char *hostname, unsigned short port,int timeout_msec=-1);
 118 
 127  bool listen(unsigned short port, const char *listen_address=0);
 128 
 129  IPC * accept(int timeout_msec=-1);
 130 
 132  void close();
 133 
 134  virtual bool write(const void *data, int size);
 135  virtual int read(void *data, int maxsize, int timeout_msec, int timeout_msec2);
 136 
 137  virtual bool write_msg(unsigned prefix, int msg_id, const void *msg, int size);
 138  virtual bool write_msg(unsigned prefix, int msg_id, const std::vector<unsigned char> &msg)
 139  { return write_msg(prefix,msg_id,msg.size()?&msg[0]:0,msg.size()); }
 140  virtual bool write_msg(unsigned prefix, int msg_id, const std::vector<char> &msg)
 141  { return write_msg(prefix,msg_id,msg.size()?&msg[0]:0,msg.size()); }
 142  virtual bool write_msg(unsigned prefix, int msg_id, const std::string &msg)
 143  { return write_msg(prefix,msg_id,msg.data(),msg.size()); }
 144 
 145  virtual bool read_msg(unsigned prefix, int &msg_id, std::vector<unsigned char> &msg, int size_limit, int timeout_msec=-1);
 146  virtual bool read_msg(unsigned prefix, int &msg_id, std::vector<char> &msg, int size_limit, int timeout_msec=-1);
 147 
 148  virtual bool poll_in(int timeout_msec=-1);
 149  virtual const char *remote_addr() const;
 150 
 153  int getFD() const;
 154  virtual bool set_callback(ipcCallback cb, void *data=0);
 155 protected:
 157  virtual bool read_msg(unsigned prefix, int &msg_id, IPC::IpcBuffer &msg, int size_limit, int timeout_msec=-1);
 158 
 159 public:
 160  virtual bool read_msg(unsigned prefix, int &msg_id, std::string &msg, int size_limit, int timeout_msec=-1);
 161  virtual bool is_server();
 162  virtual const char *local_addr() const;
 163 
 164 };
 165 
 166 
 167 
 168 } // namespace
 169 
 170 #undef DllSpec
 171 
 172 #endif
```
