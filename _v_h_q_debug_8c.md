---
title: tmsagt/src/VHQUtils/VHQDebug.c

---

# tmsagt/src/VHQUtils/VHQDebug.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| unsigned long | **[getPartitionFreeSpace](_v_h_q_debug_8c.md#function-getpartitionfreespace)**(char * patch_or_file) |
| unsigned long | **[allocateSpaceForLog](_v_h_q_debug_8c.md#function-allocatespaceforlog)**(char * file_patch) |
| void | **[LogTypetoStr](_v_h_q_debug_8c.md#function-logtypetostr)**(int LogType, char * logstr) |
| int | **[LogMsgEx](_v_h_q_debug_8c.md#function-logmsgex)**(const char * fname, char * logstr, const char * string, va_list ap) |
| int | **[LogMsg](_v_h_q_debug_8c.md#function-logmsg)**(int msgType, const char * string, ... ) |
| int | **[DebugMsg](_v_h_q_debug_8c.md#function-debugmsg)**(vhq_logging_level_t logLevel, const char * string, ... ) |
| int | **[vDebugMsg](_v_h_q_debug_8c.md#function-vdebugmsg)**(const char * LogStr, const char * string, va_list ap) |
| void | **[DebugMsgBuffer](_v_h_q_debug_8c.md#function-debugmsgbuffer)**(const char * string, const char * buffer, int buffer_size, DebugMsgBufType type) |
| void | **[DebugVoid](_v_h_q_debug_8c.md#function-debugvoid)**(const char * string, ... ) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[bVerbose](_v_h_q_debug_8c.md#variable-bverbose)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MSEC_RESOLUTION_IN_DEBUG_STATEMENTS](_v_h_q_debug_8c.md#define-msec-resolution-in-debug-statements)**  |
|  | **[MAX_DBG_MSG_LEN](_v_h_q_debug_8c.md#define-max-dbg-msg-len)**  |
|  | **[LOG_TYPE_SIZE](_v_h_q_debug_8c.md#define-log-type-size)**  |
|  | **[TRUNC_MSG](_v_h_q_debug_8c.md#define-trunc-msg)**  |
|  | **[FREE_FLASH_GAP](_v_h_q_debug_8c.md#define-free-flash-gap)**  |

## Detailed Description


Main [Event](struct_event.md) Scheduler operations 


## Functions Documentation

### function getPartitionFreeSpace

```cpp
static unsigned long getPartitionFreeSpace(
    char * patch_or_file
)
```


**Parameters**: 

  * **patch_or_file** = file name to be checked.


**Return**: free space calculated is returned. 

This function gets the free space in a file. 


### function allocateSpaceForLog

```cpp
static inline unsigned long allocateSpaceForLog(
    char * file_patch
)
```


**Parameters**: 

  * **file_patch** = file name to be checked.


**Return**: free space calculated is returned. 

This function allocates space for new log by removing old log file, if no enough memory is available. 


### function LogTypetoStr

```cpp
void LogTypetoStr(
    int LogType,
    char * logstr
)
```


**Parameters**: 

  * **LogType** = incoming log type. 
  * **logstr** = log string to display.


**Return**: void 

This function adds a log type to be displayed in logs. 


### function LogMsgEx

```cpp
int LogMsgEx(
    const char * fname,
    char * logstr,
    const char * string,
    va_list ap
)
```


**Parameters**: 

  * **fname** = incoming log type. 
  * **logstr** = log string. 
  * **string** = log 
  * **ap** = list with log contents.


**Return**: message length written into log file. 

This function displays and writes the logs into files. 


### function LogMsg

```cpp
int LogMsg(
    int msgType,
    const char * string,
    ... 
)
```


**Parameters**: 

  * **msgType** = incoming log level. 
  * **string** = log content and list.


**Return**: message length written into log file. 

This function determines the type of log file where the incoming logs should go to. 


### function DebugMsg

```cpp
int DebugMsg(
    vhq_logging_level_t logLevel,
    const char * string,
    ... 
)
```


**Parameters**: 

  * **logLevel** = incoming log level. 
  * **string** = log string and contents.


**Return**: message length written into log file. 

This function prints a debug message out the debug port (same as printf) but DebugMsg calls are stripped out of release versions. 


### function vDebugMsg

```cpp
int vDebugMsg(
    const char * LogStr,
    const char * string,
    va_list ap
)
```


**Parameters**: 

  * **LogStr** = log type string. 
  * **string** = string. 
  * **ap** = log content list.


**Return**: number of bytes written. 

This function prints a debug message out the debug port (same as printf) but DebugMsg calls are stripped out of release versions. 


### function DebugMsgBuffer

```cpp
void DebugMsgBuffer(
    const char * string,
    const char * buffer,
    int buffer_size,
    DebugMsgBufType type
)
```


**Parameters**: 

  * **string** = description printed before the data buffer. 
  * **buffer** = pointer to the buffer to be printed. 
  * **buffer_size** = the size of the buffer to be printed. 
  * **type** = debug display format


**Return**: void 

This function prints a debug message buffer in its hex or character format. 


### function DebugVoid

```cpp
void DebugVoid(
    const char * string,
    ... 
)
```


This function is a void function to suppress compiler warnings 



## Attributes Documentation

### variable bVerbose

```cpp
bool bVerbose = FALSE;
```



## Macros Documentation

### define MSEC_RESOLUTION_IN_DEBUG_STATEMENTS

```cpp
#define MSEC_RESOLUTION_IN_DEBUG_STATEMENTS 0
```


### define MAX_DBG_MSG_LEN

```cpp
#define MAX_DBG_MSG_LEN (5 * 1024)
```


### define LOG_TYPE_SIZE

```cpp
#define LOG_TYPE_SIZE 10
```


### define TRUNC_MSG

```cpp
#define TRUNC_MSG " - message TRUNCATED\n"
```


### define FREE_FLASH_GAP

```cpp
#define FREE_FLASH_GAP 64*1024
```


## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#if !defined(WIN32)
#include <pthread.h>
#endif

#include <dirent.h>
#include <fcntl.h>
#include <pthread.h>
#include <memory.h>
#include <sys/types.h>
#ifndef WIN32
#include <sys/ipc.h>
#include <sys/msg.h>
#include <sys/time.h>
#include <unistd.h>
#include <signal.h>
#include <sys/stat.h>
#include <sys/statfs.h>
#endif

#include <stdarg.h>
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#if !defined(WIN32)
#include <sys/time.h>
#else
#ifdef WIN32
#include <winsock.h>
#include <time.h>
#endif
int gettimeofday(struct timeval *tv, struct timezone *tz);
#endif
#include <ctype.h>
#include "VHQConfig.h"
#include "VHQDebug.h"
#include "VHQFileNames.h"
#include "VHQUtils.h"

#define MSEC_RESOLUTION_IN_DEBUG_STATEMENTS         0
#define MAX_DBG_MSG_LEN                             (5 * 1024)
#define LOG_TYPE_SIZE   10

bool bVerbose = FALSE;

#define TRUNC_MSG       " - message TRUNCATED\n"

#ifdef Mx2
#define FREE_FLASH_GAP  1024*1024
#else
#define FREE_FLASH_GAP  64*1024
#endif

static unsigned long getPartitionFreeSpace(char *patch_or_file)
{
  unsigned long freeSpace = 0;
  struct statfs fiData;

  if (!patch_or_file)
    return freeSpace;

  if ((statfs(patch_or_file, &fiData)) == 0)
  {
    freeSpace = fiData.f_bsize * fiData.f_bfree;
  }
  return freeSpace;
}
/*
 * If not enough space is present on the device (less than FREE_FLASH_GAP), try to delete backup files (*.x) one by one
 */

static inline unsigned long allocateSpaceForLog(char *file_patch)
{
  unsigned long freeSpace = 0;
  int x_depth = 2;
  char szName[256];

  if (!file_patch || strlen(file_patch) > (sizeof(szName) - 2))
    return freeSpace;

  for (freeSpace = getPartitionFreeSpace(file_patch);
      freeSpace && freeSpace < FREE_FLASH_GAP && 0 < x_depth; freeSpace =
          getPartitionFreeSpace(file_patch), x_depth--)
  {
    sprintf(szName, "%s.%d", file_patch, x_depth);
    printf("Partition has only %ldKb free space of %ldKb required, remove %s\n",
           (freeSpace / 1024), (unsigned long) (FREE_FLASH_GAP / 1024), szName);
    remove(szName);
  }
  return freeSpace;
}

#if 0
void PrintDirContents(char* directory, char* message)
{
    DIR* temp_dir;
    struct dirent* file;

    /* This function will just print the files in the specified directory */
    if ((temp_dir = opendir(directory)) == NULL)
    {
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Can't open %s\n", __FUNCTION__, directory);
        return;
    }

    DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: %s - Contents of %s\n", __FUNCTION__, message, directory);

    while ((file = readdir(temp_dir)) != NULL)
    {
        /* Print the filename */
        DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "\t%s\n", file->d_name);
    }
    closedir(temp_dir);
}
#endif

#if EVENT_SCHED_THREAD_MODE
static pthread_mutex_t debug_log_mutex = PTHREAD_MUTEX_INITIALIZER;
static vhq_logging_thread_descriptor LogThreadDescriptors[VHQ_LOGGING_THREAD_DESCRIPTOR_ARRAY_SIZE] =
    { { 0 } };


bool LogRegisterThreadDescription(const char *description)
{
  int i;
  for (i = 0; i < VHQ_LOGGING_THREAD_DESCRIPTOR_ARRAY_SIZE; i++)
  {
    if (LogThreadDescriptors[i].tID == 0)
    {
      LogThreadDescriptors[i].tID = pthread_self();
      LogThreadDescriptors[i].description = description;
      return TRUE;
    }
  }
  return FALSE;
}


bool LogUnRegisterThreadDescription()
{
  int i;
  pthread_t ID = pthread_self();

  for (i = 0; i < VHQ_LOGGING_THREAD_DESCRIPTOR_ARRAY_SIZE; i++)
  {
    if (LogThreadDescriptors[i].tID == ID)
    {
      LogThreadDescriptors[i].tID = 0;
      LogThreadDescriptors[i].description = NULL;
      return TRUE;
    }
  }
  return FALSE;
}
#endif

void LogTypetoStr(int LogType, char *logstr)
{
  switch (LogType)
  {
    case VHQ_LOGGING_LEVEL_EMERGENCY:
      strncpy(logstr, "EMERG", LOG_TYPE_SIZE);
      break;
    case VHQ_LOGGING_LEVEL_ALERT:
      strncpy(logstr, "ALERT", LOG_TYPE_SIZE);
      break;
    case VHQ_LOGGING_LEVEL_CRITICAL:
      strncpy(logstr, "CRITICAL", LOG_TYPE_SIZE);
      break;
    case VHQ_LOGGING_LEVEL_ERROR:
      strncpy(logstr, "ERROR", LOG_TYPE_SIZE);
      break;
    case VHQ_LOGGING_LEVEL_WARNING:
      strncpy(logstr, "WARN", LOG_TYPE_SIZE);
      break;
    case VHQ_LOGGING_LEVEL_NOTICE:
      strncpy(logstr, "NOTICE", LOG_TYPE_SIZE);
      break;
    case VHQ_LOGGING_LEVEL_INFO:
      strncpy(logstr, "INFO", LOG_TYPE_SIZE);
      break;
    case VHQ_LOGGING_LEVEL_DEBUG:
      strncpy(logstr, "DEBUG", LOG_TYPE_SIZE);
      break;
  }
  return;
}


int LogMsgEx(const char *fname, char *logstr, const char *string, va_list ap)
{
  int iFile;
  int message_len = 0;
  struct stat log_stat;
  struct timeval cur_time;
  struct tm local;
  time_t t;
  unsigned long available_space = 0;
  int allowed_log_size = GetLogSize();

#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_lock(&debug_log_mutex);
#endif
  gettimeofday(&cur_time, NULL);
  t = cur_time.tv_sec;

  if (bVerbose)
  {
    message_len = vDebugMsg(logstr, string, ap);
  }

  /* Get partition free space, delete x.1 x.2 files if not enough space available */
  available_space = allocateSpaceForLog((char*) fname);

  /* Get information about available space and make file backup copy if we reach file size limit */
  if (stat(fname, &log_stat) == 0)
  {
    /* Check if we can process so big file as mentioned in GetLogSize() since not enough space available */
    if (available_space && available_space < FREE_FLASH_GAP)
    {
      printf(
          "Device has no enough free space: (%ldKb) on partition. Force to make backup.",
          (available_space / 1024));
      allowed_log_size = 0;
    }
    /* If the logs file is too big, move it for a backup copy */
    if (log_stat.st_size > allowed_log_size)
    {
      /* We can't rename the error log because MX8 will give a "Invalid cross-device link" ERROR when renaming from sram to flash */
#if !defined(Mx2) && !defined(WIN32)
            if (strcmp(fname, VHQ_LOG_FILE_ERROR) == 0)
            {
                /* Copy file to other FLASH partition, do not validate for free memory space */
                CopyFile(fname, VHQ_LOG_FILE_ERROR_BACKUP);
                remove(fname);
            }
            else
#endif
      {
        /* Rename fname to fname.1, fname.1 to fname.2 */
        char szName1[256], szName2[256];
        sprintf(szName1, "%s.1", fname);
        sprintf(szName2, "%s.2", fname);
        if (rename(szName1, szName2) != 0)
          printf("%s: errno set in renaming file (%s.1) = %d\n", __FUNCTION__,
                 fname, errno);
        if (rename(fname, szName1) != 0)
          printf("%s: errno set in renaming file (%s) = %d\n", __FUNCTION__,
                 fname, errno);
      }
    }
  }
#ifndef WIN32
  iFile = open(fname, O_CREAT | O_APPEND | O_RDWR, S_IRWXU);
#else
    iFile= open(fname, O_CREAT | O_APPEND | O_RDWR, _S_IREAD | _S_IWRITE);
#endif
  if (iFile != -1)
  {
    char *format = NULL;
#if EVENT_SCHED_THREAD_MODE
    const unsigned int header_size = 60 * sizeof(char) + strlen(string);
#else
        const unsigned int header_size = 50 * sizeof(char) + strlen(string);
#endif
    format = malloc(header_size);
    if (format)
    {
      bool truncated = FALSE;
      char *szMsg = NULL;
#if EVENT_SCHED_THREAD_MODE
      int i;
      char thread_ID[20 + 1] = { 0 };
      pthread_t ID = pthread_self();

      for (i = 0; i < VHQ_LOGGING_THREAD_DESCRIPTOR_ARRAY_SIZE; i++)
      {
        if (LogThreadDescriptors[i].tID == ID)
        {
          snprintf(thread_ID, sizeof(thread_ID), "%s",
                   LogThreadDescriptors[i].description);
          break;
        }
      }

      if (!strlen(thread_ID))
        snprintf(thread_ID, sizeof(thread_ID), "%08x", (unsigned int) ID);

      if (linux_localtime(&t, &local))
        snprintf(format, header_size, "%d/%d/%d %02d:%02d:%02d: (%s) %s: %s",
                 local.tm_mon + 1, local.tm_mday, (local.tm_year % 100),
                 local.tm_hour, local.tm_min, local.tm_sec, thread_ID, logstr,
                 string);
      else
        snprintf(format, header_size, "Unknown local time: (%s) %s: %s",
                 thread_ID, logstr, string);
#else
            if (linux_localtime(&t, &local))
                snprintf(format, header_size, "%d/%d/%d %02d:%02d:%02d: %s: %s", local.tm_mon + 1, local.tm_mday, (local.tm_year % 100), local.tm_hour, local.tm_min, local.tm_sec, logstr, string);
            else
                snprintf(format, header_size, "Unknown local time: %s: %s",logstr, string);
    #endif
      message_len = vsnprintf(NULL, 0, format, ap);
      if (message_len > 0)
      {
        /* Add EOL */
        message_len++;

        if (message_len > MAX_DBG_MSG_LEN
            && GetLoggingLevel() != VHQ_LOGGING_LEVEL_DEBUG)
        {
          truncated = TRUE;
          message_len = MAX_DBG_MSG_LEN;
          szMsg = malloc(message_len + strlen(TRUNC_MSG));
        }
        else
          szMsg = malloc(message_len);
      }

      if (szMsg)
      {
        szMsg[0] = '\0';
        message_len = vsnprintf(szMsg, message_len, format, ap);
        if (truncated)
          strcat(szMsg, TRUNC_MSG);
        message_len = write(iFile, szMsg, strlen(szMsg));

        free(szMsg);
        szMsg = NULL;
      }

      free(format);
      format = NULL;
    }

    close(iFile);
    if (chmod(fname, 0664) != 0)
      printf("%s: errno set in chmod() = %d\n", __FUNCTION__, errno);
  }

#if EVENT_SCHED_THREAD_MODE
  pthread_mutex_unlock(&debug_log_mutex);
#endif
  return message_len;
}


int LogMsg(int msgType, const char *string, ...)
{
  int ret_val;
  char logstr[LOG_TYPE_SIZE];
  va_list ap;
  va_start(ap, string);
  LogTypetoStr(msgType, logstr);
  if (msgType <= VHQ_LOG_ERROR)
  {
    ret_val = LogMsgEx(VHQ_LOG_FILE_ERROR, logstr, string, ap);
    ret_val = LogMsgEx(VHQ_LOG_FILE, logstr, string, ap);
  }
  else
    ret_val = LogMsgEx(VHQ_LOG_FILE, logstr, string, ap);
  va_end(ap);

  return ret_val;
}


int DebugMsg(vhq_logging_level_t logLevel, const char *string, ...)
{
  char logstr[LOG_TYPE_SIZE];
  LogTypetoStr(logLevel, logstr);

  if (GetLoggingLevel() >= logLevel)
  {
    int ret_val;

    va_list ap;
    va_start(ap, string);

    /* Write into error file everything with critical problem */
    if (logLevel <= VHQ_LOGGING_LEVEL_ERROR)
      ret_val = LogMsgEx(VHQ_LOG_FILE_ERROR, logstr, string, ap);

    ret_val = LogMsgEx(VHQ_LOG_FILE, logstr, string, ap);
    va_end(ap);

    return ret_val;
  }
  else
  {
    int r = 0;

#ifndef WIN32
    if (bVerbose)
#endif
    {
      va_list ap;
      struct timeval cur_time;
      struct tm local;
      time_t t;
      int tdIndex;
      char thread_ID[8 + 1] = { 0 };
      pthread_t ID = pthread_self();

#ifdef WIN32
            char sBuf[2048];
#endif

      while ((*string == '\n') || (*string == '\r'))
      {
        printf("%c", *string);
        string++;
      }

      gettimeofday(&cur_time, NULL);
      t = cur_time.tv_sec;
      if (linux_localtime(&t, &local))
      {
#if MSEC_RESOLUTION_IN_DEBUG_STATEMENTS
                printf("%02d:%02d:%02d:%03d: ", local.tm_hour, local.tm_min, local.tm_sec, (int)cur_time.tv_usec / 1000);
#else
        printf("%02d:%02d:%02d: ", local.tm_hour, local.tm_min, local.tm_sec);
#endif
      }

      for (tdIndex = 0; tdIndex < VHQ_LOGGING_THREAD_DESCRIPTOR_ARRAY_SIZE;
          tdIndex++)
      {
        if (LogThreadDescriptors[tdIndex].tID == ID)
        {
          snprintf(thread_ID, sizeof(thread_ID), "%s",
                   LogThreadDescriptors[tdIndex].description);
          break;
        }
      }

      if (!strlen(thread_ID))
        snprintf(thread_ID, sizeof(thread_ID), "%08x", (unsigned int) ID);

      printf(" (%s) ", thread_ID);

      printf(" %s: ", logstr);

      va_start(ap, string);
#ifdef WIN32
            r = vsnprintf(sBuf, sizeof(sBuf), string, ap);
            OutputDebugString(sBuf);
            //      printf(sBuf);
#else
      r = vprintf(string, ap);
#endif
      va_end(ap);
    }

    return r;
  }
}


int vDebugMsg(const char *LogStr, const char *string, va_list ap)
{
  int r = 0;
  int tdIndex;
  char thread_ID[8 + 1] = { 0 };
  pthread_t ID = pthread_self();
  struct timeval cur_time;
  struct tm local;
  time_t t;
#ifdef WIN32
    char sBuf[2048];
#endif

  while ((*string == '\n') || (*string == '\r'))
  {
    printf("%c", *string);
    string++;
  }

  gettimeofday(&cur_time, NULL);
  t = cur_time.tv_sec;

  if (linux_localtime(&t, &local))
  {
#if MSEC_RESOLUTION_IN_DEBUG_STATEMENTS
        printf("%02d:%02d:%02d:%03d: ", local.tm_hour, local.tm_min, local.tm_sec, (int)cur_time.tv_usec/1000);
#else
    printf("%02d:%02d:%02d: ", local.tm_hour, local.tm_min, local.tm_sec);
#endif
  }

  for (tdIndex = 0; tdIndex < VHQ_LOGGING_THREAD_DESCRIPTOR_ARRAY_SIZE;
      tdIndex++)
  {
    if (LogThreadDescriptors[tdIndex].tID == ID)
    {
      snprintf(thread_ID, sizeof(thread_ID), "%s",
               LogThreadDescriptors[tdIndex].description);
      break;
    }
  }

  if (!strlen(thread_ID))
    snprintf(thread_ID, sizeof(thread_ID), "%08x", (unsigned int) ID);

  printf(" (%s) ", thread_ID);

  printf(" %s: ", LogStr);

#ifdef WIN32
    r = vsnprintf(sBuf, sizeof(sBuf), string, ap);
    OutputDebugString(sBuf);
//      printf(sBuf);
#else
  r = vprintf(string, ap);
#endif

  return r;
}


void DebugMsgBuffer(const char *string, const char *buffer, int buffer_size,
                    DebugMsgBufType type)
{
  int i;
  struct timeval cur_time;
  struct tm local;
  time_t t;

  if (bVerbose && string)
  {
    gettimeofday(&cur_time, NULL);
    t = cur_time.tv_sec;
    linux_localtime(&t, &local);

#if MSEC_RESOLUTION_IN_DEBUG_STATEMENTS
        printf("%02d:%02d:%02d:%03d: %s (size=%d):", local.tm_hour, local.tm_min, local.tm_sec, (int)cur_time.tv_usec / 1000, string, buffer_size);
#else
    printf("%02d:%02d:%02d: %s (size=%d):\n", local.tm_hour, local.tm_min,
           local.tm_sec, string, buffer_size);
#endif

    printf("[\n");
    if (!buffer)
    {
      printf("NULL");
    }
    else
    {
      switch (type)
      {
        case BUF_TYPE_HEX:
          for (i = 0; i < buffer_size; i++)
          {
            if ((i != 0) && ((i % 16) == 0))
              printf("\n");
            printf("%02x", buffer[i]);
          }
          break;
        case BUF_TYPE_CHAR:
          for (i = 0; i < buffer_size && buffer[i]; i++)
          {
            printf("%c", buffer[i]);
          }
          break;
      }
    }
    printf("]\n");
  }
}


void DebugVoid(const char *string, ...)
{
  (void) string;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
