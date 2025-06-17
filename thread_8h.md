---
title: sdi/src/thread.h

---

# sdi/src/thread.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Thread](class_thread.md)**  |
| class | **[ThreadControl](class_thread_control.md)**  |




## Source code

```cpp
#ifndef THREAD_H
#define THREAD_H

#include <pthread.h>

class Thread
{
    friend class ThreadControl;

    // disable copy constructor and assign operator
    Thread(const Thread&);
    Thread& operator=(const Thread&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    Thread(const Thread&&);
    Thread& operator=(Thread&&);
#endif

  public:
    Thread() {};
    virtual ~Thread() {};

  protected:
    virtual void *main() = 0;
    virtual void thread_init() {};
};


class ThreadControl
{
  private:

    // disable copy constructor and assign operator
    ThreadControl(const ThreadControl&);
    ThreadControl& operator=(const ThreadControl&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    ThreadControl(const ThreadControl&&);
    ThreadControl& operator=(ThreadControl&&);
#endif

    static void *main(void *arg);

    pthread_t pthread;

  public:

    enum ThreadState { Initialized, Running, Stopped, Detached } threadState;

    ThreadControl(Thread *o, int detach = 0);
    virtual ~ThreadControl()
    {
      wait();
    }

    void *wait();
    ThreadState getState() const
    {
      return threadState;
    }
};

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
