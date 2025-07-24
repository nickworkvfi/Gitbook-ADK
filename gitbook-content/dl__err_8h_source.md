---
hidden: true
title: dl_err.h
---

<a href="dl__err_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /******************************************************************************/
 2 /* */
 3 /* Copyright (C) 2001-2007 Oscar Sanderson */
 4 /* */
 5 /* This software is provided 'as-is', without any express or implied */
 6 /* warranty. In no event will the author(s) be held liable for any damages */
 7 /* arising from the use of this software. */
 8 /* */
 9 /* Permission is granted to anyone to use this software for any purpose, */
 10 /* including commercial applications, and to alter it and redistribute it */
 11 /* freely, subject to the following restrictions: */
 12 /* */
 13 /* 1. The origin of this software must not be misrepresented; you must not */
 14 /* claim that you wrote the original software. If you use this software */
 15 /* in a product, an acknowledgment in the product documentation would be */
 16 /* appreciated but is not required. */
 17 /* */
 18 /* 2. Altered source versions must be plainly marked as such, and must not be */
 19 /* misrepresented as being the original software. */
 20 /* */
 21 /* 3. This notice may not be removed or altered from any source distribution. */
 22 /* */
 23 /******************************************************************************/
 24 /* */
 25 /* Error code definitions */
 26 /* */
 27 /******************************************************************************/
 28 
 29 #ifndef __INC_DL_ERR
 30 #define __INC_DL_ERR
 31 
 32 #include "dl_base.h"
 33 
 34 /******************************************************************************/
 35 //
 36 // TYPES
 37 //
 38 
 39 typedef DL_UINT32 DL_ERR;
 40 
 41 /******************************************************************************/
 42 //
 43 // GENERIC ERROR CODES
 44 //
 45 
 46 #define kDL_ERR_NONE (DL_ERR)0
 47 
 48 #define kDL_ERR_OTHER (DL_ERR)1
 49 #define kDL_ERR_NOT_IMPLEMENTED (DL_ERR)2
 50 #define kDL_ERR_INVALID (DL_ERR)3
 51 
 52 /******************************************************************************/
 53 //
 54 // ALLOCATED ERROR CODES
 55 //
 56 
 57 // 0000-0019 <RESERVED>
 58 // 0020-0999
 59 // 1000-1019 dl_mem
 60 // 1020-1039 dl_cgi
 61 // 1040-1059 dl_hash
 62 // 1060-1079 dl_sess
 63 // 1080-1099 <RFU>
 64 // 1100-1119 dl_file
 65 // 1120-1139 dl_dblib
 66 // 1140-1159 dl_socket
 67 // 1160-1179 dl_smtp
 68 // 1180-2499 <RFU>
 69 // 2500-2519 dl_avl
 70 // 2520-2999 <RFU>
 71 // 3000-3019 dl_threadpool
 72 // 3020-3999 <RFU>
 73 // 4000-4019 dl_staticQ
 74 
 75 /******************************************************************************/
 76 
 77 #endif /* __INC_DL_ERR */
```
