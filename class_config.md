---
title: Config

---

# Config






`#include <config.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~Config](class_config.md#function-~config)**() |
| int | **[emvCbApplicationSelectionMode](class_config.md#function-emvcbapplicationselectionmode)**() const<br>emvCbApplicationSelectionMode  |
| int | **[emvCbLedMode](class_config.md#function-emvcbledmode)**() const<br>emvCbLedMode  |
| bool | **[adminMode](class_config.md#function-adminmode)**(unsigned * tout_sec =0) const<br>adminMode Administration mode will hide info and menu button on idlescreen, unless key combination 2-5-8 is pressed (or for touch-only devices: 4 corners touches on diplay are detected).  |
| bool | **[counterTopMode](class_config.md#function-countertopmode)**(bool * auto_connect =0) const<br>counterTopMode By default and as long as not disabled by this configuration, SDI has enabled the Countertop mode, which will prepare the device to connect to an EPP, which is attached to USB. Finally, this configuration will force Standalone mode, if this function returns false. For instance, on Engage this mode will disable USB network with gadget mode so that no connection to EPP will be possible at all. On Android, USB network setup is done by Android OS, but Standalone mode will also disable SDI to connect to the EPP on this platform.  |
| [Config](class_config.md) & | **[getInstance](class_config.md#function-getinstance)**() |

## Public Functions Documentation

### function ~Config

```cpp
~Config()
```


destructor singleton instance must be deleted 


### function emvCbApplicationSelectionMode

```cpp
int emvCbApplicationSelectionMode() const
```

emvCbApplicationSelectionMode 

**Return**: 0 for handling EMV application selection callback inside SDI-Server , 1 for sending to outside application 

### function emvCbLedMode

```cpp
int emvCbLedMode() const
```

emvCbLedMode 

**Return**: 0 for handling CTLS Led callback inside SDI-Server , 1 for sending to outside application 

### function adminMode

```cpp
bool adminMode(
    unsigned * tout_sec =0
) const
```

adminMode Administration mode will hide info and menu button on idlescreen, unless key combination 2-5-8 is pressed (or for touch-only devices: 4 corners touches on diplay are detected). 

**Parameters**: 

  * **tout_sec** timeout in seconds to hide buttons on idlescreen again, once buttons were enabled by keys/touch Set to NULL, if returning timeout is not desired (default). 


**Return**: true for enabled administration mode of SDI-Server, else false. 

### function counterTopMode

```cpp
bool counterTopMode(
    bool * auto_connect =0
) const
```

counterTopMode By default and as long as not disabled by this configuration, SDI has enabled the Countertop mode, which will prepare the device to connect to an EPP, which is attached to USB. Finally, this configuration will force Standalone mode, if this function returns false. For instance, on Engage this mode will disable USB network with gadget mode so that no connection to EPP will be possible at all. On Android, USB network setup is done by Android OS, but Standalone mode will also disable SDI to connect to the EPP on this platform. 

**Parameters**: 

  * **auto_connect** automatic TLS connection setup in idle is enabled for Countertop devices (e.g. t650c). The feature can be disabled by configuration, default: enabled. Set to NULL, if returning of auto-connect mode is not desired. 


**Return**: true Countertop mode ist enabled, else false (Standalone only). 

### function getInstance

```cpp
static inline Config & getInstance()
```


Singleton design 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100