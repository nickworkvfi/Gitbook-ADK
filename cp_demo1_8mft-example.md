---
title: cp_demo1.mft

---

# cp_demo1.mft



```mft

{
    "schema_version": "1.0",

    "application": {
        "name": "cp_demo1",
        "id": "cp_demo1",
        "version": "3.9.0",
        "type": "CP_TERMINAL",
        "is_companion_app": true
    },

    "desktop" : {
         "label" : "cp_demo1",
         "file" : "demo1.html",
         "type" : "app",
         "icon" : "cp_demo1/default/vflogo.png"
    },

    "imports_trigger": [
    {
      "file" : "demo1.html",
      "optional" : true,
      "id": "CP_SYSTEM_NOTIFIES_IDLE_ENTERED",
      "icon" : "cp_demo1/default/vflogo.png"
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
    },
    {
      "file" : "test.html",
      "optional" : true,
      "id": "CP_TEST",
      "icon" : "cp_demo1/default/vflogo.png"
    }
  ]
}  
```

_Filename: cp_demo1.mft_

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100
