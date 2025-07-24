---
hidden: true
title: V400m.ini
---

``` cpp
[powermngt_battery]
auto=y
boot=60
standby=15
sleep=5
deep_sleep=120
hibernate=1800
off=-1
[powermngt_line_powered]
auto=y
boot=60
standby=15
sleep=5
deep_sleep=120
hibernate=1800
off=-1
[battery]
shutdown_on_critical=y
active_while_charging=y
[x_key]
hibernate_delay = -1
powerdown_delay = 6
reboot_delay = -1
pcp_delay = 4
event_delay = 2
[wakeup_sources]
wifi=n
bt=n
mobile_data=n
usb_host=n
[pci_reboot]
reboot=n
pci_wakeup_to_alert=n
alert_start=300;
interval=30;
[display]
boot=50
active=50
standby=1
sleep=0
off=0
active_during_transition=y
[power_control_panel]
sleep=y
deep_sleep=y
hibernate=y
reboot=y
off=y
car_charger=y
```
