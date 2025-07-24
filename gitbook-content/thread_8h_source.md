---
hidden: true
title: thread.h
---

<a href="thread_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef THREAD_H
 2 #define THREAD_H
 3 
 4 #include <pthread.h>
 5 
 6 class Thread
 7 {
 8  friend class ThreadControl;
 9 
 10  // disable copy constructor and assign operator
 11  Thread(const Thread&);
 12  Thread& operator=(const Thread&);
 13 #if __cplusplus >= 201103L // since C++11 also forbid usage of move
 14  Thread(const Thread&&);
 15  Thread& operator=(Thread&&);
 16 #endif
 17 
 18  public:
 19  Thread() {};
 20  virtual ~Thread() {};
 21 
 22  protected:
 23  virtual void *main() = 0;
 24  virtual void thread_init() {};
 25 };
 26 
 27 
 28 class ThreadControl
 29 {
 30  private:
 31 
 32  // disable copy constructor and assign operator
 33  ThreadControl(const ThreadControl&);
 34  ThreadControl& operator=(const ThreadControl&);
 35 #if __cplusplus >= 201103L // since C++11 also forbid usage of move
 36  ThreadControl(const ThreadControl&&);
 37  ThreadControl& operator=(ThreadControl&&);
 38 #endif
 39 
 40  static void *main(void *arg);
 41 
 42  pthread_t pthread;
 43 
 44  public:
 45 
 46  enum ThreadState { Initialized, Running, Stopped, Detached } threadState;
 47 
 48  ThreadControl(Thread *o, int detach = 0);
 49  virtual ~ThreadControl()
 50  {
 51  wait();
 52  }
 53 
 54  void *wait();
 55  ThreadState getState() const
 56  {
 57  return threadState;
 58  }
 59 };
 60 
 61 #endif
```
