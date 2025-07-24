---
hidden: true
title: libcom3.h
---

<a href="libcom3_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 #if defined __GNUC__ && defined VFI_COM_SHARED_EXPORT
 4 #define COM3_DllSpec __attribute__((visibility("default")))
 5 #else
 6 #define COM3_DllSpec // used for both, static libraries and program symbol import
 7 #endif
 8 
 9 #include <sys/types.h>
 10 #include <ipc/jsobject.h>
 11 #include <exception>
 12 
 13 namespace vficom {
 14 
 15 namespace cmd {
 16 
 17 COM3_DllSpec extern const char ping[];
 18 COM3_DllSpec extern const char stk_on[];
 19 COM3_DllSpec extern const char stk_off[];
 20 COM3_DllSpec extern const char stk_status[];
 21 COM3_DllSpec extern const char stk_write[];
 22 COM3_DllSpec extern const char ussd_status[];
 23 COM3_DllSpec extern const char ussd_write[];
 24 COM3_DllSpec extern const char sim_access[];
 25 COM3_DllSpec extern const char wlan_scan[];
 26 
 27 } // namespace cmd
 28 
 29 namespace cmdparam {
 30 
 31 namespace in {
 32 
 33 COM3_DllSpec extern const char command[];
 34 
 35 namespace stk_on {
 36 
 37 COM3_DllSpec extern const char timeout[];
 38 
 39 } // namespace stk_on
 40 
 41 namespace stk_off {
 42 
 43 COM3_DllSpec extern const char timeout[];
 44 
 45 } // namespace stk_off
 46 
 47 namespace stk_status {
 48 
 49 COM3_DllSpec extern const char timeout[];
 50 
 51 } // namespace stk_status
 52 
 53 namespace stk_write {
 54 
 55 COM3_DllSpec extern const char timeout[];
 56 COM3_DllSpec extern const char message_obj[];
 57 
 58 namespace msg {
 59 
 60 enum STKTRCommand {
 61  STK_TR_CMD_REFRESH = 1,
 62  STK_TR_CMD_SETUP_EVENT_LIST = 5,
 63  STK_TR_CMD_SELECT_ITEM = 36,
 64  STK_TR_CMD_SETUP_MENU = 37,
 65  STK_TR_MAX_ENUM = 0x7FFFFFFF
 66 };
 67 
 68 enum STKENVCommand {
 69  STK_ENV_CMD_MENU_SELECT = 211,
 70  STK_ENV_CMD_EVENT_DOWNLOAD = 214,
 71  STK_ENV_MAX_ENUM = 0x7FFFFFFF
 72 };
 73 
 74 COM3_DllSpec extern const char usat_command[];
 75 COM3_DllSpec extern const char proactCmd[];
 76 COM3_DllSpec extern const char envCmd[];
 77 COM3_DllSpec extern const char parameters[];
 78 
 79 namespace tr {
 80 
 81 namespace refresh {
 82 
 83 COM3_DllSpec extern const char result[];
 84 
 85 } // namespace refresh
 86 
 87 namespace setup_event_list {
 88 
 89 COM3_DllSpec extern const char result[];
 90 
 91 } // namespace setup_event_list
 92 
 93 namespace select_item {
 94 
 95 COM3_DllSpec extern const char result[];
 96 COM3_DllSpec extern const char add_result[];
 97 COM3_DllSpec extern const char dcs[];
 98 COM3_DllSpec extern const char hex_string[];
 99 
 100 } // namespace select_item
 101 
 102 namespace setup_menu {
 103 
 104 COM3_DllSpec extern const char result[];
 105 
 106 } // namespace setup_menu
 107 
 108 } // namespace tr
 109 
 110 namespace env {
 111 
 112 namespace menu_select {
 113 
 114 COM3_DllSpec extern const char item_id[];
 115 
 116 } // namespace menu_select
 117 
 118 namespace event_download {
 119 
 120 COM3_DllSpec extern const char event[];
 121 
 122 } // namespace event_download
 123 
 124 } // namespace env
 125 
 126 } // namespace msg
 127 
 128 } // namespace stk_write
 129 
 130 namespace ussd_write {
 131 
 132 COM3_DllSpec extern const char n[];
 133 COM3_DllSpec extern const char str[];
 134 COM3_DllSpec extern const char dcs[];
 135 COM3_DllSpec extern const char timeout[];
 136 
 137 } // namespace ussd_write
 138 
 139 namespace ussd_status {
 140 
 141 COM3_DllSpec extern const char timeout[];
 142 
 143 } // namespace ussd_status
 144 
 145 namespace sim_access {
 146 
 147 COM3_DllSpec extern const char timeout[];
 148 COM3_DllSpec extern const char json_cmd[];
 149 
 150 } // namespace sim_access
 151 
 152 namespace ping {
 153 
 154 /* Input parameters */
 155 COM3_DllSpec extern const char destination[];
 156 COM3_DllSpec extern const char count[];
 157 COM3_DllSpec extern const char timeout[];
 158 COM3_DllSpec extern const char addr_family[];
 159 COM3_DllSpec extern const char dont_fragment[];
 160 COM3_DllSpec extern const char interface[];
 161 COM3_DllSpec extern const char interval[];
 162 COM3_DllSpec extern const char size[];
 163 COM3_DllSpec extern const char waittime[];
 164 
 165 } // namespace ping
 166 
 167 } // namespace in
 168 
 169 namespace out {
 170 
 171 COM3_DllSpec extern const char comerr[];
 172 
 173 namespace ping {
 174 
 175 /* Output parameters */
 176 COM3_DllSpec extern const char transmitted[];
 177 COM3_DllSpec extern const char received[];
 178 COM3_DllSpec extern const char rtt_avg[];
 179 COM3_DllSpec extern const char rtt_min[];
 180 COM3_DllSpec extern const char rtt_max[];
 181 
 182 } // namespace ping
 183 
 184 namespace stk_status {
 185 
 186 COM3_DllSpec extern const char status[];
 187 
 188 } // namespace stk_status
 189 
 190 namespace ussd_status {
 191 
 192 COM3_DllSpec extern const char status[];
 193 
 194 } // namespace ussd_status
 195 
 196 namespace sim_access {
 197 
 198 COM3_DllSpec extern const char json_resp[];
 199 
 200 } // namespace sim_access
 201 
 202 namespace wlan_scan {
 203 
 204 COM3_DllSpec extern const char json_resp[];
 205 
 206 namespace json_keys {
 207 
 208 // Keys of the JSON array returned by wlan_scan
 209 COM3_DllSpec extern const char ssid[]; //<! String, can be empty
 210 COM3_DllSpec extern const char bssid[];
 211 COM3_DllSpec extern const char adhoc[];
 212 COM3_DllSpec extern const char pairw[];
 213 COM3_DllSpec extern const char group[];
 214 COM3_DllSpec extern const char km[];
 215 COM3_DllSpec extern const char perc[];
 216 COM3_DllSpec extern const char dbm[];
 217 COM3_DllSpec extern const char freq[];
 218 COM3_DllSpec extern const char proto[];
 219 COM3_DllSpec extern const char std[];
 220 
 221 } // namespace json_keys
 222 
 223 } // namespace wlan_scan
 224 
 225 } // namespace out
 226 
 227 } // namespace cmdparam
 228 
 229 namespace event {
 230 enum EventType {
 231  EVT_URC_STK = 0,
 232  EVT_URC_USSD = 1,
 233  EVT_MAX_ENUM = 0x7FFFFFFF
 234 };
 235 
 236 namespace stk {
 237 enum STKURCProCommand {
 238  SET_UP_EVENT_LIST = 5,
 239  SELECT_ITEM = 36,
 240  MENU_SELECTION = 37,
 241  STK_URC_PRO_MAX_ENUM = 0x7FFFFFFF
 242 };
 243 
 244 COM3_DllSpec extern const char urc[];
 245 COM3_DllSpec extern const char proactive_command[];
 246 COM3_DllSpec extern const char parameters[];
 247 COM3_DllSpec extern const char timeout[];
 248 
 249 namespace set_up_event_list {
 250 
 251 COM3_DllSpec extern const char event_list[];
 252 
 253 } // namespace set_up_event_list
 254 
 255 namespace select_item {
 256 
 257 COM3_DllSpec extern const char cmd_qualifier[];
 258 COM3_DllSpec extern const char alpha[];
 259 COM3_DllSpec extern const char item_id[];
 260 COM3_DllSpec extern const char total_items[];
 261 COM3_DllSpec extern const char item_text[];
 262 COM3_DllSpec extern const char next_action[];
 263 COM3_DllSpec extern const char default_item[];
 264 COM3_DllSpec extern const char icon_id[];
 265 COM3_DllSpec extern const char icon_id_list_elem[];
 266 
 267 } // namespace select_item
 268 
 269 namespace menu_selection {
 270 
 271 COM3_DllSpec extern const char cmd_qualifier[];
 272 COM3_DllSpec extern const char alpha[];
 273 COM3_DllSpec extern const char item_id[];
 274 COM3_DllSpec extern const char total_items[];
 275 COM3_DllSpec extern const char item_text[];
 276 COM3_DllSpec extern const char next_action[];
 277 COM3_DllSpec extern const char icon_id[];
 278 COM3_DllSpec extern const char icon_id_list_elem[];
 279 
 280 } // namespace menu_selection
 281 
 282 } // namespace stk
 283 
 284 namespace ussd {
 285 
 286 // Names correspond to 3GPP TS 27.00, Chapter 7.15, Unstructured supplementary service data +CUSD
 287 COM3_DllSpec extern const char m[];
 288 COM3_DllSpec extern const char str[];
 289 COM3_DllSpec extern const char dcs[];
 290 
 291 } // namespace ussd
 292 
 293 } // namespace event
 294 
 295 namespace status {
 296 
 297 enum PipeStatus {
 298  OK = 0,
 299  INVALID = 1,
 300  NOSUPPORT = 2,
 301  NOTREADY = 3,
 302  FAILED = 5,
 303  TIMEOUT = 6,
 304  STARVATION = 7,
 305  USER_INTERRUPT = 8,
 306  MAX_ENUM = 0x7FFFFFFF
 307 };
 308 
 309 } // namespace status
 310 
 315 class COM3_DllSpec Exception : std::exception {
 316  char description[64];
 317  status::PipeStatus error;
 318 
 319 public:
 320  Exception(enum status::PipeStatus error, const char *description);
 321 
 322  virtual const char *what() const throw();
 323  status::PipeStatus getError() const;
 324 };
 325 
 326 class COM3_DllSpec Milliseconds {
 327 public:
 328  u_int64_t millis;
 329 
 330  Milliseconds(u_int32_t millis);
 331  ~Milliseconds();
 332 };
 333 
 334 class COM3_DllSpec CommandPipe {
 335  class ComdaemonPipe *impl;
 336 
 337  // Copy not valid
 338  CommandPipe(const CommandPipe &commandPipe);
 339  void operator=(const CommandPipe &commandPipe);
 340 
 341 public:
 342  CommandPipe();
 343  virtual ~CommandPipe();
 344 
 354  enum status::PipeStatus sendRecv(const vfiipc::JSObject &in, vfiipc::JSObject &out, Milliseconds millis);
 355 
 367  enum status::PipeStatus sendRecv(const vfiipc::JSObject &in, vfiipc::JSObject &out, Milliseconds millis, int interruptFD);
 368 };
 369 
 370 class COM3_DllSpec EventPipe {
 371  class ComdaemonPipe *impl;
 372 
 373 public:
 374  EventPipe(event::EventType type);
 375  ~EventPipe();
 376 
 377  // Copy not valid
 378  EventPipe(const EventPipe &eventPipe);
 379  void operator=(const EventPipe &eventPipe);
 380 
 389  enum status::PipeStatus recv(vfiipc::JSObject &out, Milliseconds millis);
 390 
 401  enum status::PipeStatus recv(vfiipc::JSObject &out, Milliseconds millis, int interruptFD);
 402 };
 403 
 404 } // namespace vficom
 405 
 406 #undef COM3_DllSpec
```
