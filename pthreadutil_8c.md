---
title: sdi/src/pthreadutil.c

---

# sdi/src/pthreadutil.c



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[pthread_create_detached](pthreadutil_8c.md#function-pthread-create-detached)**(pthread_t * thread, void *(*)(void *) start_routine, void * arg) |


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
#include "pthreadutil.h"

int pthread_create_detached(pthread_t *thread, void *(*start_routine)(void *), void *arg)
{
  int r;
  pthread_attr_t attr;
  r = pthread_attr_init(&attr);

  if (r)
  {
    return r;
  }

  r = pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_DETACHED);

  if (!r)
  {
    r = pthread_create(thread, &attr, start_routine, arg);
  }

  pthread_attr_destroy(&attr);

  return r;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
