---
hidden: true
title: mac_demo1.mft
---

``` cpp
[application]
id=mac_demo1
version=3.2.0
statusbar=y
app_resource_dir=mac_demo1
depends=mac_demo2;mac_demo3;
recover=n
allow_launch_on_tamper=y
[desktop]
label=MAC Demo 1
translations=de=MAC Demo 1;fr=MAC Démo 1;es=MAC manifestación 1;
icon=mac_demo1/default/verifone-icon.png
cmdline=../mac_demo1
args=r1d2 r2d3
[autolaunch]
cmdline=../mac_demo1
start_hidden=y
```
