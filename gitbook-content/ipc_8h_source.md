---
hidden: true
title: ipc.h
---

<a href="ipc_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef IPC_H_20140521
 2 #define IPC_H_20140521
 3 
 6 #include <vector>
 7 #include <string>
 8 
 9 #if defined _WIN32 && defined VFI_IPC_SHARED_EXPORT
 10 # define DllSpec __declspec(dllexport)
 11 #elif defined __GNUC__ && defined VFI_IPC_SHARED_EXPORT
 12 # define DllSpec __attribute__((visibility ("default")))
 13 #else
 14 # define DllSpec
 15 #endif
 16 
 17 #ifndef DEPRECATED
 18 # ifdef __GNUC__
 19 # define DEPRECATED __attribute__((deprecated))
 20 # elif defined(_MSC_VER)
 21 # define DEPRECATED __declspec(deprecated)
 22 # else
 23 # define DEPRECATED
 24 # endif
 25 #endif
 26 
 27 namespace vfiipc {
 28 
 35 class IPC;
 36 typedef void (*ipcCallback)(void *data, IPC *ipc);
 37 
 45 class DllSpec IPC {
 46 
 47  // prevent usage of copy constructor and assignment operator
 48  IPC(const IPC &o);
 49  void operator=(const IPC &o);
 50 
 51  protected:
 53  class IpcPrivate;
 54 
 56  IPC(IpcPrivate *_d);
 57 
 59  IpcPrivate *d;
 60 
 61  public:
 62 
 64  virtual ~IPC();
 65 
 69  virtual bool eof();
 70 
 74  virtual bool error();
 75 
 84  virtual IPC *accept(int timeout_msec=-1) { (void)timeout_msec; return 0; }
 85 
 87  virtual void close();
 88 
 94  virtual bool write(const void *data, int size);
 95 
 102  virtual int read(void *data, int maxsize, int timeout_msec, int timeout_msec2);
 103 
 109  virtual int read(void *data, int maxsize, int timeout_msec=-1) { return read(data,maxsize,timeout_msec,timeout_msec); }
 110 
 122  int peek(void *data, int maxsize, int timeout_msec=-1);
 123 
 132  virtual bool write_msg(unsigned prefix, int msg_id, const void *msg, int size);
 133 
 141  virtual bool write_msg(unsigned prefix, int msg_id, const std::vector<unsigned char> &msg)
 142  { return write_msg(prefix,msg_id,msg.size()?&msg[0]:0,msg.size()); }
 143 
 151  virtual bool write_msg(unsigned prefix, int msg_id, const std::vector<char> &msg)
 152  { return write_msg(prefix,msg_id,msg.size()?&msg[0]:0,msg.size()); }
 153 
 164  virtual bool read_msg(unsigned prefix, int &msg_id, std::vector<unsigned char> &msg, int size_limit, int timeout_msec=-1);
 165 
 176  virtual bool read_msg(unsigned prefix, int &msg_id, std::vector<char> &msg, int size_limit, int timeout_msec=-1);
 177 
 185  virtual bool poll_in(int timeout_msec=-1);
 186 
 194  virtual const char *remote_addr() const;
 195 
 198  int getFD() const;
 199 
 207  virtual bool set_callback(ipcCallback cb, void *data=0);
 208 
 223  DEPRECATED static void set_callback_stacksize(int size=-1);
 224 
 227  static const char *getVersion();
 228 
 232  static const char *ipc_GetVersion();
 233 
 234 protected:
 235  class IpcBuffer;
 237  virtual bool read_msg(unsigned prefix, int &msg_id, IpcBuffer &msg, int size_limit, int timeout_msec=-1);
 238 
 239 public:
 247  virtual bool write_msg(unsigned prefix, int msg_id, const std::string &msg)
 248  { return write_msg(prefix,msg_id,msg.data(),msg.size()); }
 249 
 260  virtual bool read_msg(unsigned prefix, int &msg_id, std::string &msg, int size_limit, int timeout_msec=-1);
 261 
 265  virtual bool is_server();
 266 
 273  virtual const char *local_addr() const;
 274 };
 275 
 278 class DllSpec TCP: public IPC {
 279  // prevent usage of copy constructor and assignment operator
 280  TCP(const TCP &o);
 281  void operator=(const TCP &o);
 283  class TcpPrivate;
 284 
 285  public:
 286 
 288  TCP();
 290  ~TCP();
 291 
 299  bool connect(const char *hostname, unsigned short port,int timeout_msec=-1);
 300 
 309  bool listen(unsigned short port, const char *listen_address=0);
 310 
 319  IPC * accept(int timeout_msec=-1);
 320 
 322  void close();
 323 
 335  bool setFD(int socket_fd);
 336 
 346  bool setKeepalive(int cnt, int interval);
 347 };
 348 
 349 #ifndef _WIN32 // class Pipe is recently not available on Windows
 350 
 352 class DllSpec Pipe: public IPC {
 353  // prevent usage of copy constructor and assignment operator
 354  Pipe(const Pipe &o);
 355  void operator=(const Pipe &o);
 357  class PipePrivate;
 358 
 359  public:
 360 
 362  enum PipeConfig {
 363  PC_None=0,
 364  PC_EnableCredentials=1
 365  };
 366 
 368  Pipe();
 370  Pipe(int config);
 372  ~Pipe();
 373 
 378  bool connect(const char *pipe);
 379 
 384  bool listen(const char *pipe);
 385 
 394  IPC * accept(int timeout_msec=-1);
 395 
 397  void close();
 398 };
 399 #endif
 400 
 401 } // namespace vfiipc
 402 
 403 #undef DllSpec
 404 
 405 #endif
```
