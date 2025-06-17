---
title: SDI plugin commands

---

# SDI plugin commands



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[pluginCmd](group__sdiplugin.md#function-plugincmd)**(unsigned char plugin, unsigned char cmd, bytevector & in, bytevector & out) |


## Functions Documentation

### function pluginCmd

```
int pluginCmd(
    unsigned char plugin,
    unsigned char cmd,
    bytevector & in,
    bytevector & out
)
```


**Parameters**: 

  * **plugin** plugin ID 
  * **cmd** command ID 
  * **in** command data 
  * **out** plugin response data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Send an SDI plugin command 






-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100