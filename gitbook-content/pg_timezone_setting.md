---
hidden: true
title: Time Zone Setting
---

# Overview <a href="#sec_timezone_overview" id="sec_timezone_overview"></a>

Time zone setting is different on VOS1/VOS2 and VOS3 devices.

The common way on all platforms is to use the ADK-SYS property:

``` cpp
sysSetPropertyString( SYS_PROP_TIME_ZONE_NAME, value )
```

- write-only, Set time zone using name, e.g. US/Hawaii 

## Alternate time setting on VOS1, VOS2 <a href="#sec_timezone_vos1_vos2" id="sec_timezone_vos1_vos2"></a>

- by the <a href="pg_systools_timezone_change.md#pg_systools_timezone_change">Timezone setting</a> package install;

## Alternate time setting on VOS3 <a href="#sec_timezone_vos3" id="sec_timezone_vos3"></a>

- via the **MAC Control Panel / Date&Time / Time zone menu**;
