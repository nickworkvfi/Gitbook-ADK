---
title: Flash Memory Using Guide

---

# Flash Memory Using Guide



NAND memory is an industry-standard HW that has a limited number of write/erase cycles.

The need to erase flash should be reduced as much as possible. NAND flash devices we use in most cases have between 50,000 and 100,000 erase cycles.

During the boot, the number shown immediately above the serial number is a measure of flash wear (the MAX erase counter of Max erased/used flash block).

There is no workaround possible for a unit with excessive flash wear – erasing a block is a physically destructive process and cannot be avoided or reversed.


User applications should use its flash (symlink to /mnt/flash/userdata/usrX) section for storing any permanent files.

Please refer to [V/OS Secure Installer](pg_vos_secins_guide.md#page-pg-vos-secins-guide) documentation for further details:

* "Introduction" and "Software Packaging" parts, for where the packages will and should be stored on the system in flash memory.
* "App packages" part for the directory explanation. 

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
