---
hidden: true
title: mac_demo3.cpp
---

``` cpp
// SDK
#include <string>
#include <pthread.h>
#include <stdio.h>
#include <time.h>
#include <sys/time.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
// ADK
#include "ipc/jsobject.h"
#include "ipc/notify.h"
#include "log/liblog2.h"
// Constants
#include "constants/notify.h"
const std::string appid("MACDEMO3");
const std::string cp_start_notification("CP_START");
const std::string cp_stop_notification("CP_STOP");
const std::string service_button_notification(SERVICE_BUTTON);
const int SUCCEED = 0;
const int FAIL = -1;
static pthread_mutex_t main_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t main_cond = PTHREAD_COND_INITIALIZER;
static void cb(
   void *data,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags);
LibLogHandle log_handle;
int main(int argc, char *argv[])
{
   int status = 0;
   for (int i = 0; i < argc; i++)
   {
   LOGF_TRACE(log_handle, "argc[%d] argv[%s]", i, argv[i]);
   }
   log_handle = LOGAPI_INIT(appid.c_str());
   vfiipc::ipcSetAppID(appid);
   status = vfiipc::ipcRegisterNotificationCB(cp_start_notification, cb, NULL, 0);
   if (SUCCEED != status)
   {
   LOGF_ERROR(log_handle, "Can't register cp start callback");
   }
   status = vfiipc::ipcRegisterNotificationCB(cp_stop_notification, cb, NULL, 0);
   if (SUCCEED != status)
   {
   LOGF_ERROR(log_handle, "Can't register cp stop callback");
   }
   status = vfiipc::ipcRegisterNotificationCB(service_button_notification, cb, NULL, 0);
   if (SUCCEED != status)
   {
   LOGF_ERROR(log_handle, "Can't register service button callback");
   }
   bool exit = false;
   while (!exit)
   {
   LOGF_TRACE(log_handle, "main loop");
   pthread_mutex_lock(&main_mutex);
   pthread_cond_wait(&main_cond, &main_mutex);
   pthread_mutex_unlock(&main_mutex);
   }
   return status;
}
static void cb(
   void *,
   const std::string &from,
   const std::string &to,
   const std::string &notification_id,
   const vfiipc::JSObject &jsobj,
   unsigned flags)
{
   LOGF_TRACE(log_handle, "notification from[%s] to[%s] id[%s] flags[%d] json[%s]",
   from.c_str(),
   to.c_str(),
   notification_id.c_str(),
   flags,
   jsobj.dump().c_str());
}
```
