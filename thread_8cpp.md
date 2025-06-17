---
title: sdi/src/thread.cpp

---

# sdi/src/thread.cpp






## Source code

```cpp
#include "thread.h"
#include <stdio.h>

void *ThreadControl::main(void *arg)
{
  Thread *threadObj = (Thread *)arg;

  // run initialization function
  threadObj->thread_init();

  // start main
  void *r = threadObj->main();
  delete threadObj;
  return r;
}

ThreadControl::ThreadControl(Thread *obj, int detach)
{
  threadState = Initialized;

  if (detach)
  {
    pthread_attr_t attr;
    pthread_attr_init(&attr);
    pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_DETACHED);

    if (!pthread_create(&pthread, &attr, main, obj))
    {
      threadState = Detached;
    }
    else
    {
      delete obj;
    }

    pthread_attr_destroy(&attr);
  }
  else
  {
    if (!pthread_create(&pthread, 0, main, obj))
    {
      threadState = Running;
    }
    else
    {
      delete obj;
    }
  }
}

void *ThreadControl::wait()
{
  if (threadState != Running)
  {
    return 0;
  }

  void *result = 0;
  pthread_join(pthread, &result);
  return result;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
