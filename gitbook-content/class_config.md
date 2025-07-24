---
hidden: true
title: Config Class Reference
---

[Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods)

`#include <`<a href="config_8h_source.md">config.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [\~Config](#a54dfba499c9d9e1003d4c9bcbe6ad1c5) () |
| int  | [emvCbApplicationSelectionMode](#a5a8c5335314e732e88c98d2991f92a8e) () const |
|   | emvCbApplicationSelectionMode [More\...](#a5a8c5335314e732e88c98d2991f92a8e)<br/> |
| int  | [emvCbLedMode](#a740eac1df9ee3ab84f8da9200b470ed1) () const |
|   | emvCbLedMode [More\...](#a740eac1df9ee3ab84f8da9200b470ed1)<br/> |
| bool  | [adminMode](#af4901a4e702173b342dc77a8b3e061d8) (unsigned \*tout_sec=0) const |
|   | adminMode Administration mode will hide info and menu button on idlescreen, unless key combination 2-5-8 is pressed (or for touch-only devices: 4 corners touches on diplay are detected). [More\...](#af4901a4e702173b342dc77a8b3e061d8)<br/> |
| bool  | [counterTopMode](#ac8ce05a0e03786cdfd6e0183c416adbb) (bool \*auto_connect=0) const |
|   | counterTopMode By default and as long as not disabled by this configuration, SDI has enabled the Countertop mode, which will prepare the device to connect to an EPP, which is attached to USB. Finally, this configuration will force Standalone mode, if this function returns false. For instance, on Engage this mode will disable USB network with gadget mode so that no connection to EPP will be possible at all. On Android, USB network setup is done by Android OS, but Standalone mode will also disable SDI to connect to the EPP on this platform. [More\...](#ac8ce05a0e03786cdfd6e0183c416adbb)<br/> |

|  |  |
|----|----|
| Static Public Member Functions |  |
| static <a href="class_config.md">Config</a> &  | [getInstance](#a1ef2bdb72ea7052082489de1e0525d09) () |

## Constructor& Destructor Documentation

## \~Config() <a href="#a54dfba499c9d9e1003d4c9bcbe6ad1c5" id="a54dfba499c9d9e1003d4c9bcbe6ad1c5"></a>

<p>\~<a href="class_config.md">Config</a></p>

destructor singleton instance must be deleted

## MemberFunction Documentation {#member-function-documentation}

## adminMode() <a href="#af4901a4e702173b342dc77a8b3e061d8" id="af4901a4e702173b342dc77a8b3e061d8"></a>

<p>bool adminMode</p>

adminMode Administration mode will hide info and menu button on idlescreen, unless key combination 2-5-8 is pressed (or for touch-only devices: 4 corners touches on diplay are detected).

**Parameters**

\[out\] **tout_sec** timeout in seconds to hide buttons on idlescreen again, once buttons were enabled by keys/touch Set to NULL, if returning timeout is not desired (default).

### Returns

true for enabled administration mode of SDI-Server, else false.

## counterTopMode() <a href="#ac8ce05a0e03786cdfd6e0183c416adbb" id="ac8ce05a0e03786cdfd6e0183c416adbb"></a>

<p>bool counterTopMode</p>

counterTopMode By default and as long as not disabled by this configuration, SDI has enabled the Countertop mode, which will prepare the device to connect to an EPP, which is attached to USB. Finally, this configuration will force Standalone mode, if this function returns false. For instance, on Engage this mode will disable USB network with gadget mode so that no connection to EPP will be possible at all. On Android, USB network setup is done by Android OS, but Standalone mode will also disable SDI to connect to the EPP on this platform.

**Parameters**

\[out\] **auto_connect** automatic TLS connection setup in idle is enabled for Countertop devices (e.g. t650c). The feature can be disabled by configuration, default: enabled. Set to NULL, if returning of auto-connect mode is not desired.

### Returns

true Countertop mode ist enabled, else false (Standalone only).

## emvCbApplicationSelectionMode() <a href="#a5a8c5335314e732e88c98d2991f92a8e" id="a5a8c5335314e732e88c98d2991f92a8e"></a>

<p>int emvCbApplicationSelectionMode</p>

emvCbApplicationSelectionMode

### Returns

0 for handling EMV application selection callback inside SDI-Server , 1 for sending to outside application

## emvCbLedMode() <a href="#a740eac1df9ee3ab84f8da9200b470ed1" id="a740eac1df9ee3ab84f8da9200b470ed1"></a>

<p>int emvCbLedMode</p>

emvCbLedMode

### Returns

0 for handling CTLS Led callback inside SDI-Server , 1 for sending to outside application

## getInstance() <a href="#a1ef2bdb72ea7052082489de1e0525d09" id="a1ef2bdb72ea7052082489de1e0525d09"></a>

<p>static <a href="class_config.md">Config</a>& getInstance</p>

inlinestatic

Singleton design

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="config_8h_source.md">config.h</a>
- sdi/src/<a href="config_8cpp.md">config.cpp</a>
