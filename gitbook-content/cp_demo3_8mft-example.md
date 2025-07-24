---
hidden: true
title: cp_demo3.mft
---

``` cpp
{
  "schema_version" : "1.0",
  "application" : {
   "purpose" : "CP_INSTALL",
   "name" : "cp_demo3",
   "id" : "cp_demo3",
   "type" : "CP_TERMINAL",
   "version" : "3.9.0",
   "signatures" : [ "VOS", "VOS2" ]
  },
  "desktop" : {
   "file" : "demo1.html",
   "label" : "cp_demo3",
   "statusbar" : "n"
  },
  "imports_trigger": [
   {
   "file" : "demo1.html",
   "optional" : true,
   "id": "CP_SYSTEM_NOTIFIES_IDLE_ENTERED"
   },
   {
   "file" : "demo1.html",
   "optional" : true,
   "id": "CP_SYSTEM_NOTIFIES_MANUAL_LAUNCH_SELECTED"
   },
   {
   "file" : "demo1.html",
   "optional" : true,
   "id": "CP_SYSTEM_NOTIFIES_TRANSACTION_STARTED"
   }
  ]
}
```
