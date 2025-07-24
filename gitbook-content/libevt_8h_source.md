---
hidden: true
title: libevt.h
---

<a href="libevt_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef _LIBEVT_H_
 2 #define _LIBEVT_H_
 3 
 4 // --------------------------------------------------------------------------------------------------------------------
 5 
 6 #include <stdint.h>
 7 
 8 #ifndef EVT_API
 9 #define EVT_API
 10 #endif
 11 
 12 // --------------------------------------------------------------------------------------------------------------------
 13 
 15 typedef unsigned long int WaiterHandle;
 16 
 18 const long EVT_ANY_HANDLE = -1;
 19 
 21 const WaiterHandle EVT_INVALID_HANDLE = 0;
 22 
 24 const int EVT_INFINITE_WAIT = -1;
 25 
 27 typedef uint64_t UID;
 28 
 30 const uint32_t EVT_DATA_SIZE = 64; // 64 bytes
 31 
 33 const uint32_t EVT_MAX_COUNT = 256;
 34 
 35 // --------------------------------------------------------------------------------------------------------------------
 36 
 40 #ifdef __cplusplus
 41 extern "C"
 42 {
 43 #endif
 44 
 45 struct Event
 46 {
 48  UID id;
 50  long handle;
 51  // 'raised_' attributes are set by raise side and read by wait side.
 53  uint64_t raised_timestamp;
 55  uint16_t raised_version;
 57  uint8_t raised_flag;
 59  long raised_handle;
 61  char raised_data[EVT_DATA_SIZE];
 62 };
 63 
 64 
 65 enum OSEvents
 66 {
 67  OS_NOP = 0, /* non OS event */
 68  OS_EVT_TIMER, /* user-defined timer */
 69  OS_EVT_DOCK, /* unsupported event */
 70  OS_EVT_UNDOCK, /* unsupported event */
 71  OS_EVT_SHUTDOWN, /* unsupported event */
 72 };
 73 
 77 enum WaitPolicy
 78 {
 79  WAIT_ANY,
 80  WAIT_ALL,
 81 };
 82 
 83 enum EvtSide
 84 {
 85  SIDE_RAISER = 0,
 86  SIDE_WAITER,
 87  SIDE_BOTH
 88 };
 89 
 93 enum EvtOptions
 94 {
 95  EVT_OPT_DEFAULT = 0,
 96  EVT_OPT_COPY_NEW_ONLY_EVENTS_IN_GET_BY_HANDLE_FUNC = 0x1 << 0, // ADKEVT-161
 97 };
 98 
 99 // --------------------------------------------------------------------------------------------------------------------
 100 
 107 EVT_API UID evt_make_uid(uint16_t componentID, uint16_t eventID);
 108 
 115 EVT_API UID evt_make_uid_os(uint16_t componentID, OSEvents osEvent);
 116 
 121 EVT_API uint16_t evt_get_component_id( UID );
 122 
 128 EVT_API long evt_start_timer(uint32_t timeout);
 129 
 134 EVT_API void evt_stop_timer(long handle);
 135 
 143 EVT_API int evt_init(EvtSide side, uint16_t componentID, uint8_t capacity);
 144 
 149 EVT_API int evt_destroy();
 150 
 157 EVT_API int evt_wait(Event *event, int timeout);
 158 
 167 EVT_API int evt_wait_group(Event *events, uint32_t count, int timeout, WaitPolicy policy);
 168 
 174 EVT_API int evt_raise(Event *event);
 175 
 181 EVT_API WaiterHandle evt_init_waiter(Event* events, uint32_t count);
 182 
 191 EVT_API int evt_get_by_handle(WaiterHandle waiter, Event* events, uint32_t count);
 192 
 201 EVT_API int evt_peek_by_handle(WaiterHandle waiter, Event* events, uint32_t count);
 202 
 211 EVT_API int evt_wait_by_handle(WaiterHandle handle, int timeout, WaitPolicy policy);
 212 
 218 EVT_API int evt_destroy_waiter(WaiterHandle waiter);
 219 
 223 EVT_API void evt_set_options(int options);
 224 
 228 EVT_API int evt_get_options();
 229 
 233 EVT_API const char *evt_getVersion();
 234 
 238 EVT_API int get_dock_sts();
 239 
 240 #ifdef __cplusplus
 241 } // extern C
 242 #endif
 243 
 244 #endif //_LIBEVT_H_
```
