---
hidden: true
title: btlv_helper.h
---

<a href="btlv__helper_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef __BTLV_HELPER__
 2 #define __BTLV_HELPER__
 3 
 4 #include "emv/btlv.h"
 5 
 8 struct BTLVRootNode : public BTLVNode
 9 {
 12  BTLVRootNode(MemoryPool *mp = 0)
 13  {
 14  vBTLVInit(this, mp);
 15  }
 18  virtual ~BTLVRootNode()
 19  {
 20  vBTLVClear(this);
 21  }
 22  private:
 23  // disable copy constructor and assign operator
 24  BTLVRootNode(const BTLVRootNode&);
 25  BTLVRootNode& operator=(const BTLVRootNode&);
 26 #if __cplusplus >= 201103L // since C++11 also forbid usage of move
 27  BTLVRootNode(const BTLVRootNode&&);
 28  BTLVRootNode& operator=(BTLVRootNode&&);
 29 #endif
 30 };
 31 
 32 #endif
```
