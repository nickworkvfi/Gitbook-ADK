---
hidden: true
title: mac_demo2.mft
---

``` cpp
{
  "schema_version": "1.1",
  "application": {
   "id": "mac_demo2",
   "name": "mac_demo2",
   "version": "3.9.0",
   "status_bar": true,
   "recover": true,
   "app_resource_dir": "mac_demo2"
  },
  "desktop": {
   "label" : "mac_demo2",
   "type" : "APPLICATION",
   "cmdline": "../mac_demo2",
   "envs": [
   { "ADK_VAR1": "bar" },
   { "ADK_VAR2": "foo" },
   { "ADK_VAR3": "xyz" }
   ],
   "args": [ "arg1", "arg2", "arg3" ],
  },
  "autolaunch": {
   "cmdline" : "../mac_demo2",
   "envs": [
   { "ADK_VAR1": "bar" },
   { "ADK_VAR2": "foo" },
   { "ADK_VAR3": "xyz" }
   ],
   "args": [ "arg1", "arg2", "arg3" ],
   "type": "APPLICATION",
  },
}
```
