---
title: cp_demo3.mft

---

# cp_demo3.mft



```mft

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

_Filename: cp_demo3.mft_

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100
