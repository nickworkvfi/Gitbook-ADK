---
hidden: true
title: madk_pp_protocol.h
---

<a href="madk__pp__protocol_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /*****************************************************************************
 2  * Company: Verifone
 3  * Author: GSS R&D Germany
 4  * Content: SDI-Server
 5  ****************************************************************************/
 6 #ifndef _MADK_PP_PROTOCOL_H_
 7 #define _MADK_PP_PROTOCOL_H_
 8 
 9 #include <vector>
 10 #include <string>
 11 #include <pthread.h>
 12 
 14 struct mADK_PP_Prot_Loader;
 16 struct ProtStatus;
 17 struct ConnectInfo;
 18 struct TcpInfo;
 19 struct UdsInfo;
 20 
 23 class mADK_PP_Prot
 24 {
 25  public:
 26 
 27  enum ProtocolState
 28  {
 29  PS_Stopped = 0,
 30  PS_Running = 1,
 31  PS_Aborted = 2
 32  };
 33 
 34  enum AbortState
 35  {
 36  AS_NotAborted = 0,
 37  AS_AbortIdle = 1,
 38  AS_ConnectionLost = 2
 41  };
 42 
 43  private:
 44 #ifndef _STM32 // no SDI protocol thread on Titus
 45  pthread_t proto_thread;
 46 #endif
 47  pthread_mutex_t mutex;
 48  pthread_cond_t cond;
 49  std::vector<unsigned char> cmdbuf;
 50  char prot_type;
 52  unsigned msg_id;
 53  unsigned msg_id_payment;
 54  unsigned msg_id_nested;
 55  enum ProtocolState prot_state;
 56  bool cmd_active;
 57  bool nested_cmd;
 58  enum AbortState aborted;
 59  unsigned cmd_counter;
 61  struct mADK_PP_Prot_Loader *lib;
 65  enum CommandType
 66  {
 67  Cmd_Any = 0,
 68  Cmd_Abort = 1,
 69  Cmd_LockPayment = 2,
 71  Cmd_ResetLink = 3,
 74  Cmd_Check4Update = 4,
 75  Cmd_ExtButton = 5,
 76  Cmd_EmvCbResponse = 6,
 77  Cmd_CtrlCbResponse = 7,
 78  Cmd_TrgrCbResponse = 8,
 79  Cmd_PaymentNotificationCb = 9
 80  };
 82  enum RequestType
 83  {
 84  Request_None = 0,
 85  Request_EMV = 1,
 86  Request_Ctrl = 2,
 87  Request_Trgr = 3
 88  };
 89  RequestType req_type;
 90  bool recovery_mode;
 91  bool busy;
 92  bool cancelled;
 93  bool unlock_payment_pending;
 96  void *main_handle;
 103  void *busy_handle;
 106  static mADK_PP_Prot *obj; // singleton
 107 
 108  // disable calling copy constructor and assignment operator
 109  mADK_PP_Prot(const mADK_PP_Prot &);
 110  void operator=(const mADK_PP_Prot &);
 111 #if __cplusplus >= 201103L // since C++11 also forbid usage of move
 112  mADK_PP_Prot(const mADK_PP_Prot&&);
 113  mADK_PP_Prot& operator=(mADK_PP_Prot&&);
 114 #endif
 115 
 116  // disable constructor and force caller to use getInstance()
 117  mADK_PP_Prot();
 120  virtual ~mADK_PP_Prot();
 121 
 124  static void *run(void *data);
 125 
 132  static enum CommandType getCommandType(const unsigned char *cmd, unsigned size);
 133 
 138  static bool isCallbackResponse(const enum CommandType cmd);
 139 
 147  bool _poll(int timeout_msec);
 148 
 157  bool _receive(std::vector<unsigned char> &cmd, int timeout_msec);
 158 
 165  bool _send(void *handle, const unsigned char *cmd, unsigned size, char protType, unsigned msgId) const;
 166 
 173  int _get_connection_type(void *handle);
 174  public:
 175 
 178  static mADK_PP_Prot *getInstance();
 179 
 183  inline struct mADK_PP_Prot_Loader *loader()
 184  {
 185  return lib;
 186  }
 187 
 194  bool poll(int timeout_msec = -1);
 195 
 203  bool receive(std::vector<unsigned char> &cmd, int timeout_msec = -1);
 204 
 213  bool abort();
 214 
 226  bool send(const unsigned char *cmd, unsigned size);
 227 
 229  inline bool send(const std::vector<unsigned char> &cmd)
 230  {
 231  return send(cmd.size() > 0 ? &cmd[0] : 0, cmd.size());
 232  }
 233 
 245  bool command(const unsigned char *cmd, unsigned size);
 246 
 263  bool request(const unsigned char *cmd, unsigned size);
 264 
 266  inline bool request(const std::vector<unsigned char> &cmd)
 267  {
 268  return request(cmd.size() > 0 ? &cmd[0] : 0, cmd.size());
 269  }
 270 
 283  bool recv_response(std::vector<unsigned char> &response, int timeout_msec = -1);
 284 
 308  bool set_busy(bool flag, bool cmd_ctx = true);
 309 
 313  bool loadAcl();
 314 
 316  enum CMDActiveType
 317  {
 318  CMD_None = 0,
 319  CMD_Active = 1,
 320  CMD_Nested = 2
 321  };
 325  inline enum CMDActiveType command_active() const
 326  {
 327  if (cmd_active)
 328  {
 329  if (nested_cmd)
 330  {
 331  return CMD_Nested;
 332  }
 333 
 334  return CMD_Active;
 335  }
 336 
 337  return CMD_None;
 338  }
 339 
 343  bool start();
 344 
 348  void stop();
 349 
 352  void setRecoveryMode(bool on_off);
 353 
 356  inline enum ProtocolState get_protocol_state() const
 357  {
 358  return prot_state;
 359  }
 360 
 366  inline bool connected() const
 367  {
 368  return !!get_handle();
 369  }
 370 
 375  inline bool check_abort() const
 376  {
 377  return cancelled;
 378  }
 379 
 388  void set_command(void *handle, char *cmd, int size, char protType, unsigned msgId);
 389 
 391  bool get_status(struct ProtStatus *status) const;
 392 
 394  bool get_connection_info(struct ConnectInfo *info) const;
 395 
 397  void free_connection_info(struct ConnectInfo *info) const;
 398 
 400  void set_com_profile(const char *file) const;
 401 
 406  bool trusted_connection();
 407 
 414  bool get_tcp_info(struct TcpInfo *info);
 415 
 422  bool get_uds_info(struct UdsInfo *info);
 423 
 428  void *get_handle() const;
 429 
 432  char get_protocol_type() const;
 433 
 448  bool isConnectionThread() const;
 449 
 457  bool isMainConnectionThread() const;
 458 
 465  int select(int comInterfaces, char **ComFileName);
 466 
 469  void reset();
 470 };
 471 
 474 class mADK_PP_ProtBusyLock
 475 {
 476  mADK_PP_Prot *m_proto;
 477  bool m_locked;
 478 
 479  // disable copy constructor and assign operator
 480  mADK_PP_ProtBusyLock(const mADK_PP_ProtBusyLock&);
 481  mADK_PP_ProtBusyLock& operator=(const mADK_PP_ProtBusyLock&);
 482 #if __cplusplus >= 201103L // since C++11 also forbid usage of move
 483  mADK_PP_ProtBusyLock(const mADK_PP_ProtBusyLock&&);
 484  mADK_PP_ProtBusyLock& operator=(mADK_PP_ProtBusyLock&&);
 485 #endif
 486 
 487  public:
 492  mADK_PP_ProtBusyLock(bool cmd_ctx = true)
 493  {
 494  m_proto = mADK_PP_Prot::getInstance();
 495  m_locked = m_proto->set_busy(true, cmd_ctx);
 496  }
 498  virtual ~mADK_PP_ProtBusyLock()
 499  {
 500  unlock();
 501  }
 504  void unlock()
 505  {
 506  if (m_locked)
 507  {
 508  m_proto->set_busy(false);
 509  m_locked = false;
 510  }
 511  }
 514  bool locked() const
 515  {
 516  return m_locked;
 517  }
 518 };
 519 
 520 #endif
```
