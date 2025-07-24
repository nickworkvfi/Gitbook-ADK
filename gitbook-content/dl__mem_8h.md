---
hidden: true
title: dl_mem.h File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

`#include "`<a href="dl__base_8h_source.md">dl_base.h</a>`"`
`#include "`<a href="dl__err_8h_source.md">dl_err.h</a>`"`
`#include <string.h>`

Include dependency graph for dl_mem.h:

![](dl__mem_8h__incl.png)

This graph shows which files directly or indirectly include this file:

![](dl__mem_8h__dep__incl.png)

<a href="dl__mem_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Macros |  |
| #define  | [ISO_EXP_DECL](#afd0131fdb432c83b6a30719f866ef15a) |
| #define  | [kDL_ERR_MEM_ALLOC](#ae4cd069b11886e438e65b1831cc0fcec)   (<a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>)(1000+0) |
| #define  | [DL_MEM_free](#a744c6817dabe916ffe06478f9386f689)(ptr)   { <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a12d403643236776c26b6081a4e570a27">if</a> ( (ptr) != NULL ) { free(ptr) ; (ptr) = NULL ; } } |
| #define  | [DL_MEM_memset](#aa091e9b1839086b7943127073cdac88a)(ptr, <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, numBytes)   ((void)memset((void\*)(ptr),(int)(<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>),(size_t)(numBytes))) |
| #define  | [DL_MEM_memcpy](#ad8625484f4ea7abdecbefbf4c661b43e)(toPtr, fromPtr, numBytes)   ((void)memcpy((void\*)(toPtr),(void\*)(fromPtr),(size_t)(numBytes))) |
| #define  | [DL_MEM_memcmp](#a7d89c9c5c7d97e149deb2b51497a6b24)(aPtr, bPtr, len)   (memcmp((void\*)(aPtr),(void\*)(bPtr),(size_t)(len))) |

|  |  |
|----|----|
| Functions |  |
| <a href="_safe_buffer_8hpp.md#afd0131fdb432c83b6a30719f866ef15a">ISO_EXP_DECL</a> <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [DL_MEM_malloc](#aa2d96ba0b43b73290ef431d18e9ec79f) (<a href="dl__base_8h.md#a2b6bafb1286aa226f7f001cb7fd68c66">DL_UINT32</a> iNumBytes, void \*\*oPtr) |
| <a href="_safe_buffer_8hpp.md#afd0131fdb432c83b6a30719f866ef15a">ISO_EXP_DECL</a> <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>  | [DL_MEM_callocWithInit](#ad749c1fc223a8c37d26f2dafe28dc610) (<a href="dl__base_8h.md#a2b6bafb1286aa226f7f001cb7fd68c66">DL_UINT32</a> numItems, size_t itemSize, void \*\*out) |

## MacroDefinition Documentation {#macro-definition-documentation}

## DL_MEM_free <a href="#a744c6817dabe916ffe06478f9386f689" id="a744c6817dabe916ffe06478f9386f689"></a>

<p>#define DL_MEM_free</p>

## DL_MEM_memcmp <a href="#a7d89c9c5c7d97e149deb2b51497a6b24" id="a7d89c9c5c7d97e149deb2b51497a6b24"></a>

<p>#define DL_MEM_memcmp</p>

## DL_MEM_memcpy <a href="#ad8625484f4ea7abdecbefbf4c661b43e" id="ad8625484f4ea7abdecbefbf4c661b43e"></a>

<p>#define DL_MEM_memcpy</p>

## DL_MEM_memset <a href="#aa091e9b1839086b7943127073cdac88a" id="aa091e9b1839086b7943127073cdac88a"></a>

<p>#define DL_MEM_memset</p>

## ISO_EXP_DECL <a href="#afd0131fdb432c83b6a30719f866ef15a" id="afd0131fdb432c83b6a30719f866ef15a"></a>

<p>#define ISO_EXP_DECL</p>

## kDL_ERR_MEM_ALLOC <a href="#ae4cd069b11886e438e65b1831cc0fcec" id="ae4cd069b11886e438e65b1831cc0fcec"></a>

<p>#define kDL_ERR_MEM_ALLOC   (<a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a>)(1000+0)</p>

## FunctionDocumentation {#function-documentation}

## DL_MEM_callocWithInit() <a href="#ad749c1fc223a8c37d26f2dafe28dc610" id="ad749c1fc223a8c37d26f2dafe28dc610"></a>

<p><a href="_safe_buffer_8hpp.md#afd0131fdb432c83b6a30719f866ef15a">ISO_EXP_DECL</a> <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> DL_MEM_callocWithInit</p>

## DL_MEM_malloc() <a href="#aa2d96ba0b43b73290ef431d18e9ec79f" id="aa2d96ba0b43b73290ef431d18e9ec79f"></a>

<p><a href="_safe_buffer_8hpp.md#afd0131fdb432c83b6a30719f866ef15a">ISO_EXP_DECL</a> <a href="dl__err_8h.md#ada368ca184bede6f4325b99208f6a97a">DL_ERR</a> DL_MEM_malloc</p>
