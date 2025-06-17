---
title: sdi/src/pthreadutil.h

---

# sdi/src/pthreadutil.h



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[pthread_create_detached](pthreadutil_8h.md#function-pthread-create-detached)**(pthread_t * thread, void *(*)(void *) start_routine, void * arg) |


## Functions Documentation

### function pthread_create_detached

```cpp
int pthread_create_detached(
    pthread_t * thread,
    void *(*)(void *) start_routine,
    void * arg
)
```




## Source code

```cpp
#ifndef PHREADUTIL_H_SDI_
#define PHREADUTIL_H_SDI_

#include <pthread.h>

#ifdef __cplusplus

#include <unistd.h>
#include <errno.h>
#include "timestamp.h"

// Lock mutex in constructor, unlock it in destructor
class MutexLock
{
    pthread_mutex_t *mutex;
    bool islocked;
    // disable copy constructor and assign operator
    MutexLock(const MutexLock &o);
    MutexLock &operator=(const MutexLock &o);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    MutexLock(const MutexLock&&);
    MutexLock& operator=(MutexLock&&);
#endif
  public:
    MutexLock(pthread_mutex_t *m, bool no_lock = false) : mutex(m)
    {
      islocked = false;

      if (no_lock)
      {
        return;
      }

      if (mutex)
      {
        pthread_mutex_lock(mutex);
      }

      islocked = true;
    }
    ~MutexLock()
    {
      if (islocked && mutex)
      {
        pthread_mutex_unlock(mutex);
      }
    }
    void lock()
    {
      if (islocked)
      {
        return;
      }

      if (mutex)
      {
        pthread_mutex_lock(mutex);
      }

      islocked = true;
    }
    void unlock()
    {
      if (!islocked)
      {
        return;
      }

      if (mutex)
      {
        pthread_mutex_unlock(mutex);
      }

      islocked = false;
    }
    bool locked() const
    {
      return islocked;
    }

    bool trylock(unsigned tout_ms = 0)
    {
      if (!mutex)
      {
        return false;
      }

      sdi::TimeStamp deadline(0, 0);

      if (tout_ms > 0)
      {
        deadline = sdi::TimeStamp::Monotonic() + tout_ms * sdi::TimeStamp::MS;
      }

      while (1)
      {
        int ret = pthread_mutex_trylock(mutex);

        if (ret == 0)
        {
          islocked = true;
          return true;
        }

        // mutex already locked
        if (ret == EBUSY)
        {
          if (tout_ms == 0)
          {
            return false;
          }

          sdi::TimeStamp now = sdi::TimeStamp::Monotonic();

          if (now >= deadline)
          {
            break; // timeout
          }

          // sleep at least 10 ms
          long wait_ms = (deadline - now).ms();

          if (wait_ms > 10)
          {
            wait_ms = 10;
          }

          usleep(wait_ms * 1000);
          continue;
        }

        break;
      }

      return false;
    }
};

extern "C" {

#endif

int pthread_create_detached(pthread_t *thread, void *(*start_routine)(void *), void *arg);

#ifdef __cplusplus
}
#endif


#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
