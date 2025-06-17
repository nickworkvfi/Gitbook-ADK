---
title: sdi/src/btlv_helper.h

---

# sdi/src/btlv_helper.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[BTLVRootNode](struct_b_t_l_v_root_node.md)**  |




## Source code

```cpp
#ifndef __BTLV_HELPER__
#define __BTLV_HELPER__

#include "emv/btlv.h"

struct BTLVRootNode : public BTLVNode
{
    BTLVRootNode(MemoryPool *mp = 0)
    {
      vBTLVInit(this, mp);
    }
    virtual ~BTLVRootNode()
    {
      vBTLVClear(this);
    }
  private:
    // disable copy constructor and assign operator
    BTLVRootNode(const BTLVRootNode&);
    BTLVRootNode& operator=(const BTLVRootNode&);
#if __cplusplus >= 201103L // since C++11 also forbid usage of move
    BTLVRootNode(const BTLVRootNode&&);
    BTLVRootNode& operator=(BTLVRootNode&&);
#endif
};

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
