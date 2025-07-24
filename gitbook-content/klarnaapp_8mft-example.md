---
hidden: true
title: klarnaapp.mft
---

``` cpp
{
  "schema_version": "1.0",
  "imports_trigger": [
   {
   "file": "init.html",
   "icon": "klarnaapp-887623211/images/Klarna_icon.png",
   "optional": false,
   "id": "CP_SYSTEM_REQUESTS_ALT_PAYMENT",
   "label": "Klarna",
   "status_bar": false,
   "type": "APPLICATION",
   "interruptible": false
   },
   {
   "file": "init.html",
   "icon": "klarnaapp-887623211/images/Klarna_icon.png",
   "optional": false,
   "id": "CP_SYSTEM_NOTIFIES_TRANSACTION_ENDED",
   "label": "Klarna",
   "status_bar": false,
   "type": "APPLICATION",
   "interruptible": false
   },
   {
   "file": "init.html",
   "icon": "klarnaapp-887623211/images/Klarna_icon.png",
   "optional": false,
   "id": "CP_SYSTEM_NOTIFIES_IDLE_ENTERED",
   "label": "Klarna",
   "status_bar": false,
   "type": "APPLICATION",
   "interruptible": false
   },
   {
   "file": "init.html",
   "icon": "klarnaapp-887623211/images/Klarna_icon.png",
   "optional": false,
   "id": "CP_SYSTEM_NOTIFIES_MANUAL_LAUNCH_SELECTED",
   "label": "Klarna",
   "status_bar": false,
   "type": "APPLICATION",
   "interruptible": false
   }
  ],
  "application": {
   "is_companion_app": false,
   "name": "klarna",
   "id": "klarnaapp-887623211",
   "type": "CP_TERMINAL",
   "version": "1.4.0"
  },
  "imports_sdk": {
   "cpruntime_min_version": "2.0.0",
   "triggers_min_version": "4.3.0"
  },
  "imports_hardware": {
   "platforms": [
   "240x320C15T",
   "240x320C21N",
   "320x480C0T",
   "320x480C15T",
   "854x480C0T",
   "854x480C15T",
   "1280x800C15T"
   ]
  }
}
```
