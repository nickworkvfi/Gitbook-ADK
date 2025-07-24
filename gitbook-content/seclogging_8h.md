---
hidden: true
title: seclogging.h File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

`#include <string>`

Include dependency graph for seclogging.h:

![](seclogging_8h__incl.png)

This graph shows which files directly or indirectly include this file:

![](seclogging_8h__dep__incl.png)

<a href="seclogging_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Macros |  |
| #define  | [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) |
| #define  | [LOGNAME_SEC](#a81050f161d9227cbf0d4c3f46c03426d)   \"SEC\" |
| #define  | [SEC_LOG_EMERG](#ad01beaff0a14d0f64db1e6e68e01cc9d)(\...)   [SECINTERNAL_LOG_EMERG](#a2c360063c00a4614ce1ec91ee9d1ba4d)(\_\_FILE\_\_, \_\_LINE\_\_, \_\_VA_ARGS\_\_) |
| #define  | [SEC_LOG_ALERT](#a978306e6ef449572579abfb701997f7a)(\...)   [SECINTERNAL_LOG_ALERT](#ad118b3df803c06511249907ae9f016ec)(\_\_FILE\_\_, \_\_LINE\_\_, \_\_VA_ARGS\_\_) |
| #define  | [SEC_LOG_CRIT](#acc979a6cb518d97cb5df5c3814388421)(\...)   [SECINTERNAL_LOG_CRIT](#abc4ce8b7690a58a16a31e580f4033fe2)(\_\_FILE\_\_, \_\_LINE\_\_, \_\_VA_ARGS\_\_) |
| #define  | [SEC_LOG_ERROR](#a08631f7820918469dcdcd29e5c24674a)(\...)   [SECINTERNAL_LOG_ERROR](#a86ffd8f767295b0661f70bd5d222844a)(\_\_FILE\_\_, \_\_LINE\_\_, \_\_VA_ARGS\_\_) |
| #define  | [SEC_LOG_WARN](#a3a9738987dcd9c7d2ee90fc560b540d9)(\...)   [SECINTERNAL_LOG_WARN](#ad7d5a9d46479647c9bfdb829d8bf5d3b)(\_\_FILE\_\_, \_\_LINE\_\_, \_\_VA_ARGS\_\_) |
| #define  | [SEC_LOG_NOTICE](#ae1c77968688fd70cc1f92b4f5464f11a)(\...)   [SECINTERNAL_LOG_NOTICE](#a58b35b2a310f61500aacd5e8879f868f)(\_\_FILE\_\_, \_\_LINE\_\_, \_\_VA_ARGS\_\_) |
| #define  | [SEC_LOG_INFO](#a56e091545e6f07d7a74c43b0bbbe620e)(\...)   [SECINTERNAL_LOG_INFO](#a1db286735c73f7c1f2290c74f5e73324)(\_\_FILE\_\_, \_\_LINE\_\_, \_\_VA_ARGS\_\_) |
| #define  | [SEC_LOG_TRACE](#a32f14167926d4ea28edd1d8924ff1c08)(\...)   [SECINTERNAL_LOG_TRACE](#ae8da07e4c67b9fffef701ca81ef9edc9)(\_\_FILE\_\_, \_\_LINE\_\_, \_\_VA_ARGS\_\_) |
| #define  | [SEC_LOG_HEXDUMP_TRACE](#a2ae8bd1bf377db6cbfc48eeac4655709)(a, b, c)   [SECINTERNAL_LOG_HEXDUMP_TRACE](#a6ec21626a5dadc6f2e8d5bf2ccb62294)(a, b, c) |
| #define  | [SEC_LOG_PRINT_CALLSTACK](#a2979f3a50a4daad56bf1d84c32a4beab)   [SECINTERNAL_PRINT_CALLSTACK](#a8eabc748315a01df2ecc3b2a818c597e) |
| #define  | [SEC_DBG_ERROR](#afb37a7176709bf62eacbce873c2ca00f)(\...) |
| #define  | [SEC_DBG_WARN](#aac2f1efecc4eb792d92a4c38c2414a93)(\...) |
| #define  | [SEC_DBG_INFO](#a9dfef20e6e2917ee0e5ea1def5d4033c)(\...) |
| #define  | [SEC_DBG_NOTICE](#ae54abd59888d9e1940cc81e17c8744af)(\...) |
| #define  | [SEC_DBG_TRACE](#ad74f4b5d9cebe2bf474f7ee3bdf6109f)(\...) |
| #define  | [SEC_DBG_HEXDUMP_INFO](#a2cf9ca8f17b040664f7b4bed2b6824db)(a, b, c) |
| #define  | [SEC_DBG_HEXDUMP_NOTICE](#a5bbcd3044fa422a9a354ba32d5db4a76)(a, b, c) |
| #define  | [SEC_DBG_HEXDUMP_TRACE](#aac251c3b586091a676c4484811568f0a)(a, b, c) |

|  |  |
|----|----|
| Functions |  |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_EMERG](#a2c360063c00a4614ce1ec91ee9d1ba4d) (const char \*file, unsigned int line, const char \*fmt,\...) <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((format(printf |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_ALERT](#ad118b3df803c06511249907ae9f016ec) (const char \*file, unsigned int line, const char \*fmt,\...) <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((format(printf |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_CRIT](#abc4ce8b7690a58a16a31e580f4033fe2) (const char \*file, unsigned int line, const char \*fmt,\...) <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((format(printf |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_ERROR](#a86ffd8f767295b0661f70bd5d222844a) (const char \*file, unsigned int line, const char \*fmt,\...) <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((format(printf |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_WARN](#ad7d5a9d46479647c9bfdb829d8bf5d3b) (const char \*file, unsigned int line, const char \*fmt,\...) <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((format(printf |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_NOTICE](#a58b35b2a310f61500aacd5e8879f868f) (const char \*file, unsigned int line, const char \*fmt,\...) <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((format(printf |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_INFO](#a1db286735c73f7c1f2290c74f5e73324) (const char \*file, unsigned int line, const char \*fmt,\...) <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((format(printf |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_TRACE](#ae8da07e4c67b9fffef701ca81ef9edc9) (const char \*file, unsigned int line, const char \*fmt,\...) <a href="_v_h_q__vfisyspm__wrapper_8cpp.md#a9e4fa62755aeaea9c141cacda826fbcd">__attribute__</a>((format(printf |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_HEXDUMP_INFO](#acb95ea5ff24f18a06e700e131fe970ec) (const char \*title, const void \*data, unsigned int size) |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_HEXDUMP_NOTICE](#a6d9e4ce4a4aadf761d3c23fc90755e80) (const char \*title, const void \*data, unsigned int size) |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_LOG_HEXDUMP_TRACE](#a6ec21626a5dadc6f2e8d5bf2ccb62294) (const char \*title, const void \*data, unsigned int size) |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SECINTERNAL_PRINT_CALLSTACK](#a8eabc748315a01df2ecc3b2a818c597e) () |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SEC_LOG_INIT](#a558932a059edc3beeeb8dc6d4bfb7a12) (const char \*name=[LOGNAME_SEC](#a81050f161d9227cbf0d4c3f46c03426d)) |
| [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void  | [SEC_LOG_DEINIT](#a577b13cb0031e49eea8c11c495b5d7d1) () |

## MacroDefinition Documentation {#macro-definition-documentation}

## DllSpecSEC <a href="#abcde1739ffe76c2296e21ce0b20f0ad3" id="abcde1739ffe76c2296e21ce0b20f0ad3"></a>

<p>#define DllSpecSEC</p>

## LOGNAME_SEC <a href="#a81050f161d9227cbf0d4c3f46c03426d" id="a81050f161d9227cbf0d4c3f46c03426d"></a>

<p>#define LOGNAME_SEC   \"SEC\"</p>

## SEC_DBG_ERROR <a href="#afb37a7176709bf62eacbce873c2ca00f" id="afb37a7176709bf62eacbce873c2ca00f"></a>

<p>#define SEC_DBG_ERROR</p>

## SEC_DBG_HEXDUMP_INFO <a href="#a2cf9ca8f17b040664f7b4bed2b6824db" id="a2cf9ca8f17b040664f7b4bed2b6824db"></a>

<p>#define SEC_DBG_HEXDUMP_INFO</p>

## SEC_DBG_HEXDUMP_NOTICE <a href="#a5bbcd3044fa422a9a354ba32d5db4a76" id="a5bbcd3044fa422a9a354ba32d5db4a76"></a>

<p>#define SEC_DBG_HEXDUMP_NOTICE</p>

## SEC_DBG_HEXDUMP_TRACE <a href="#aac251c3b586091a676c4484811568f0a" id="aac251c3b586091a676c4484811568f0a"></a>

<p>#define SEC_DBG_HEXDUMP_TRACE</p>

## SEC_DBG_INFO <a href="#a9dfef20e6e2917ee0e5ea1def5d4033c" id="a9dfef20e6e2917ee0e5ea1def5d4033c"></a>

<p>#define SEC_DBG_INFO</p>

## SEC_DBG_NOTICE <a href="#ae54abd59888d9e1940cc81e17c8744af" id="ae54abd59888d9e1940cc81e17c8744af"></a>

<p>#define SEC_DBG_NOTICE</p>

## SEC_DBG_TRACE <a href="#ad74f4b5d9cebe2bf474f7ee3bdf6109f" id="ad74f4b5d9cebe2bf474f7ee3bdf6109f"></a>

<p>#define SEC_DBG_TRACE</p>

## SEC_DBG_WARN <a href="#aac2f1efecc4eb792d92a4c38c2414a93" id="aac2f1efecc4eb792d92a4c38c2414a93"></a>

<p>#define SEC_DBG_WARN</p>

## SEC_LOG_ALERT <a href="#a978306e6ef449572579abfb701997f7a" id="a978306e6ef449572579abfb701997f7a"></a>

<p>#define SEC_LOG_ALERT</p>

## SEC_LOG_CRIT <a href="#acc979a6cb518d97cb5df5c3814388421" id="acc979a6cb518d97cb5df5c3814388421"></a>

<p>#define SEC_LOG_CRIT</p>

## SEC_LOG_EMERG <a href="#ad01beaff0a14d0f64db1e6e68e01cc9d" id="ad01beaff0a14d0f64db1e6e68e01cc9d"></a>

<p>#define SEC_LOG_EMERG</p>

## SEC_LOG_ERROR <a href="#a08631f7820918469dcdcd29e5c24674a" id="a08631f7820918469dcdcd29e5c24674a"></a>

<p>#define SEC_LOG_ERROR</p>

## SEC_LOG_HEXDUMP_TRACE <a href="#a2ae8bd1bf377db6cbfc48eeac4655709" id="a2ae8bd1bf377db6cbfc48eeac4655709"></a>

<p>#define SEC_LOG_HEXDUMP_TRACE</p>

## SEC_LOG_INFO <a href="#a56e091545e6f07d7a74c43b0bbbe620e" id="a56e091545e6f07d7a74c43b0bbbe620e"></a>

<p>#define SEC_LOG_INFO</p>

## SEC_LOG_NOTICE <a href="#ae1c77968688fd70cc1f92b4f5464f11a" id="ae1c77968688fd70cc1f92b4f5464f11a"></a>

<p>#define SEC_LOG_NOTICE</p>

## SEC_LOG_PRINT_CALLSTACK <a href="#a2979f3a50a4daad56bf1d84c32a4beab" id="a2979f3a50a4daad56bf1d84c32a4beab"></a>

<p>#define SEC_LOG_PRINT_CALLSTACK   [SECINTERNAL_PRINT_CALLSTACK](#a8eabc748315a01df2ecc3b2a818c597e)</p>

## SEC_LOG_TRACE <a href="#a32f14167926d4ea28edd1d8924ff1c08" id="a32f14167926d4ea28edd1d8924ff1c08"></a>

<p>#define SEC_LOG_TRACE</p>

## SEC_LOG_WARN <a href="#a3a9738987dcd9c7d2ee90fc560b540d9" id="a3a9738987dcd9c7d2ee90fc560b540d9"></a>

<p>#define SEC_LOG_WARN</p>

## FunctionDocumentation {#function-documentation}

## SEC_LOG_DEINIT() <a href="#a577b13cb0031e49eea8c11c495b5d7d1" id="a577b13cb0031e49eea8c11c495b5d7d1"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SEC_LOG_DEINIT</p>

## SEC_LOG_INIT() <a href="#a558932a059edc3beeeb8dc6d4bfb7a12" id="a558932a059edc3beeeb8dc6d4bfb7a12"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SEC_LOG_INIT</p>

## SECINTERNAL_LOG_ALERT() <a href="#ad118b3df803c06511249907ae9f016ec" id="ad118b3df803c06511249907ae9f016ec"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_ALERT</p>

## SECINTERNAL_LOG_CRIT() <a href="#abc4ce8b7690a58a16a31e580f4033fe2" id="abc4ce8b7690a58a16a31e580f4033fe2"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_CRIT</p>

## SECINTERNAL_LOG_EMERG() <a href="#a2c360063c00a4614ce1ec91ee9d1ba4d" id="a2c360063c00a4614ce1ec91ee9d1ba4d"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_EMERG</p>

## SECINTERNAL_LOG_ERROR() <a href="#a86ffd8f767295b0661f70bd5d222844a" id="a86ffd8f767295b0661f70bd5d222844a"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_ERROR</p>

## SECINTERNAL_LOG_HEXDUMP_INFO() <a href="#acb95ea5ff24f18a06e700e131fe970ec" id="acb95ea5ff24f18a06e700e131fe970ec"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_HEXDUMP_INFO</p>

## SECINTERNAL_LOG_HEXDUMP_NOTICE() <a href="#a6d9e4ce4a4aadf761d3c23fc90755e80" id="a6d9e4ce4a4aadf761d3c23fc90755e80"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_HEXDUMP_NOTICE</p>

## SECINTERNAL_LOG_HEXDUMP_TRACE() <a href="#a6ec21626a5dadc6f2e8d5bf2ccb62294" id="a6ec21626a5dadc6f2e8d5bf2ccb62294"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_HEXDUMP_TRACE</p>

## SECINTERNAL_LOG_INFO() <a href="#a1db286735c73f7c1f2290c74f5e73324" id="a1db286735c73f7c1f2290c74f5e73324"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_INFO</p>

## SECINTERNAL_LOG_NOTICE() <a href="#a58b35b2a310f61500aacd5e8879f868f" id="a58b35b2a310f61500aacd5e8879f868f"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_NOTICE</p>

## SECINTERNAL_LOG_TRACE() <a href="#ae8da07e4c67b9fffef701ca81ef9edc9" id="ae8da07e4c67b9fffef701ca81ef9edc9"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_TRACE</p>

## SECINTERNAL_LOG_WARN() <a href="#ad7d5a9d46479647c9bfdb829d8bf5d3b" id="ad7d5a9d46479647c9bfdb829d8bf5d3b"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void [DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_LOG_WARN</p>

## SECINTERNAL_PRINT_CALLSTACK() <a href="#a8eabc748315a01df2ecc3b2a818c597e" id="a8eabc748315a01df2ecc3b2a818c597e"></a>

<p>[DllSpecSEC](#abcde1739ffe76c2296e21ce0b20f0ad3) void SECINTERNAL_PRINT_CALLSTACK</p>
