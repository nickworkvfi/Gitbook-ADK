---
hidden: true
title: alipayapp.mft
---

``` cpp
{
  "schema_version": "1.0",
  "imports_trigger": [
   {
   "file": "init.html",
   "icon": "alipayapp-887623211/images/Alipay_icon.png",
   "optional": false,
   "id": "CP_SYSTEM_REQUESTS_ALT_PAYMENT",
   "label": "Alipay",
   "status_bar": false,
   "type": "APPLICATION",
   "interruptible": false
   },
   {
   "file": "init.html",
   "icon": "alipayapp-887623211/images/Alipay_icon.png",
   "optional": false,
   "id": "CP_SYSTEM_NOTIFIES_TRANSACTION_ENDED",
   "label": "Alipay",
   "status_bar": false,
   "type": "APPLICATION",
   "interruptible": false
   },
   {
   "file": "init.html",
   "icon": "alipayapp-887623211/images/Alipay_icon.png",
   "optional": false,
   "id": "CP_SYSTEM_NOTIFIES_IDLE_ENTERED",
   "label": "Alipay",
   "status_bar": false,
   "type": "APPLICATION",
   "interruptible": false
   },
   {
   "file": "init.html",
   "icon": "alipayapp-887623211/images/Alipay_icon.png",
   "optional": false,
   "id": "CP_SYSTEM_NOTIFIES_MANUAL_LAUNCH_SELECTED",
   "label": "Alipay",
   "status_bar": false,
   "type": "APPLICATION",
   "interruptible": false
   }
  ],
  "application": {
   "is_companion_app": false,
   "name": "alipay",
   "id": "alipayapp-887623211",
   "type": "CP_TERMINAL",
   "version": "2.5.0"
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
