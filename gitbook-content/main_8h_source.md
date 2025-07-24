---
hidden: true
title: main.h
---

<a href="main_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 #ifndef _MAIN_H_
 8 #define _MAIN_H_
 9 
 10 #include <vector>
 11 #include <string>
 12 #include <pthread.h>
 13 
 36 void dispatch(std::vector<unsigned char> &cmd);
 37 
 58 bool process_side_command(unsigned char *cmd, unsigned size);
 59 
 82 unsigned short check_mac_decrypt(unsigned char *cmd, unsigned &cmdSize, std::vector<unsigned char> &out);
 83 
 90 void pm_setCriticalSection(bool enable);
 91 
 94 bool pm_criticalSection();
 95 
 100 void sdi_exit(int status);
 101 
 102 #endif
```
