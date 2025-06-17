---
title: Time Zone Setting

---

# Time Zone Setting




# Overview

Time zone setting is different on VOS1/VOS2 and VOS3 devices.

The common way on all platforms is to use the ADK-SYS property:



```cpp
sysSetPropertyString( SYS_PROP_TIME_ZONE_NAME, value ) 
```



* write-only, Set time zone using name, e.g. US/Hawaii&nbsp;


## Alternate time setting  on VOS1, VOS2



* by the [Timezone setting] package install;


## Alternate time setting on VOS3



* via the **MAC Control Panel / Date&Time / Time zone menu**;

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
