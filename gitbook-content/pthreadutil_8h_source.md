---
hidden: true
title: pthreadutil.h
---

<a href="pthreadutil_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef PHREADUTIL_H_SDI_
 2 #define PHREADUTIL_H_SDI_
 3 
 4 #include <pthread.h>
 5 
 6 #ifdef __cplusplus
 7 
 8 #include <unistd.h>
 9 #include <errno.h>
 10 #include "timestamp.h"
 11 
 12 // Lock mutex in constructor, unlock it in destructor
 13 class MutexLock
 14 {
 15  pthread_mutex_t *mutex;
 16  bool islocked;
 17  // disable copy constructor and assign operator
 18  MutexLock(const MutexLock &o);
 19  MutexLock &operator=(const MutexLock &o);
 20 #if __cplusplus >= 201103L // since C++11 also forbid usage of move
 21  MutexLock(const MutexLock&&);
 22  MutexLock& operator=(MutexLock&&);
 23 #endif
 24  public:
 25  MutexLock(pthread_mutex_t *m, bool no_lock = false) : mutex(m)
 26  {
 27  islocked = false;
 28 
 29  if (no_lock)
 30  {
 31  return;
 32  }
 33 
 34  if (mutex)
 35  {
 36  pthread_mutex_lock(mutex);
 37  }
 38 
 39  islocked = true;
 40  }
 41  ~MutexLock()
 42  {
 43  if (islocked && mutex)
 44  {
 45  pthread_mutex_unlock(mutex);
 46  }
 47  }
 48  void lock()
 49  {
 50  if (islocked)
 51  {
 52  return;
 53  }
 54 
 55  if (mutex)
 56  {
 57  pthread_mutex_lock(mutex);
 58  }
 59 
 60  islocked = true;
 61  }
 62  void unlock()
 63  {
 64  if (!islocked)
 65  {
 66  return;
 67  }
 68 
 69  if (mutex)
 70  {
 71  pthread_mutex_unlock(mutex);
 72  }
 73 
 74  islocked = false;
 75  }
 76  bool locked() const
 77  {
 78  return islocked;
 79  }
 80 
 81  bool trylock(unsigned tout_ms = 0)
 82  {
 83  if (!mutex)
 84  {
 85  return false;
 86  }
 87 
 88  sdi::TimeStamp deadline(0, 0);
 89 
 90  if (tout_ms > 0)
 91  {
 92  deadline = sdi::TimeStamp::Monotonic() + tout_ms * sdi::TimeStamp::MS;
 93  }
 94 
 95  while (1)
 96  {
 97  int ret = pthread_mutex_trylock(mutex);
 98 
 99  if (ret == 0)
 100  {
 101  islocked = true;
 102  return true;
 103  }
 104 
 105  // mutex already locked
 106  if (ret == EBUSY)
 107  {
 108  if (tout_ms == 0)
 109  {
 110  return false;
 111  }
 112 
 113  sdi::TimeStamp now = sdi::TimeStamp::Monotonic();
 114 
 115  if (now >= deadline)
 116  {
 117  break; // timeout
 118  }
 119 
 120  // sleep at least 10 ms
 121  long wait_ms = (deadline - now).ms();
 122 
 123  if (wait_ms > 10)
 124  {
 125  wait_ms = 10;
 126  }
 127 
 128  usleep(wait_ms * 1000);
 129  continue;
 130  }
 131 
 132  break;
 133  }
 134 
 135  return false;
 136  }
 137 };
 138 
 139 extern "C" {
 140 
 141 #endif
 142 
 143 int pthread_create_detached(pthread_t *thread, void *(*start_routine)(void *), void *arg);
 144 
 145 #ifdef __cplusplus
 146 }
 147 #endif
 148 
 149 
 150 #endif
```
