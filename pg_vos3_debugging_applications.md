---
title: Debugging VOS3 Applications

---

# Debugging VOS3 Applications




# Debugging VOS3 Applications

The toolchain includes a gdb that can be used for remote debugging applications on the terminal.


## Installing Debugger

There is no need to install additional software beside the VOS3 toolchain.

The GNU debugger is located in the toolchain as **bin/arm-none-linux-gnueabihf-gdb**.



```cpp
user> bin/arm-none-linux-gnueabihf-gdb --version
GNU gdb (GNU Toolchain for the Arm Architecture 11.2-2022.02 (arm-11.14)) 11.2.90.20220202-git
Copyright (C) 2022 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
```


## Using Debugger

For remote debugging to work, gdbserver needs to be started on the terminal.



```cpp
$> gdbserver :22222 mybinary
Process /home/usr1/mybinary created; pid = 1137
Listening on port 22222
```

To attach to an already running process also gdbserver can be instrumented. To allow attaching to a process, this feature needs to be enabled first as root user.



```cpp
#> echo 0 > /proc/sys/kernel/yama/ptrace_scope
$> gdbserver :22222 --attach $(pidof mybinary)
Attached; pid = 1162
Listening on port 22222
```

From the developers PC gdb can now be configured to connect to this gdbserver instance.



```cpp
user> /opt/vos3/bin/arm-none-linux-gnueabihf-gdb -q mybinary-debug
Reading symbols from mybinary-debug...
(gdb) target remote <terminal-ip-here>:22222
Remote debugging using <terminal-ip-here>:22222
Reading symbols from /opt/vos3/arm-none-linux-gnueabihf/libc/lib/ld-linux-armhf.so.3...
0xb6fdd8d4 in ?? () from /opt/vos3/arm-none-linux-gnueabihf/libc/lib/ld-linux-armhf.so.3
(gdb) b main
Breakpoint 1 at 0x11d2a: file main.cpp, line 5.
(gdb) c
Continuing.
 
Breakpoint 1, main (argc=1, argv=0xbefffe84) at main.cpp:5
5   int main(int argc, char **argv) {
```

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
