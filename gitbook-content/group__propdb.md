---
hidden: true
title: Property Database API
---

[Files](#files) \| [Data Structures](#nested-classes) \| [Macros](#define-members) \| [Typedefs](#typedef-members) \| [Enumerations](#enum-members)

Allows for easy to use hierarchical key/value storage. [More\...](#details)

|        |                                                   |
|--------|---------------------------------------------------|
| Files  |                                                   |
| file   | <a href="infodb_8h.md">infodb.h</a>      |
|        | Hierarchical Property Database API.<br/> |

|  |  |
|----|----|
| Data Structures |  |
| struct   | [InfoChildren](#struct_info_children) |
|   | structure for returning the names of the direct child nodes [More\...](#struct_info_children)<br/> |

|  |  |
|----|----|
| Macros |  |
| #define  | [PROP_NAME](#ga2062ba7b5292b2cb9456209022cbdac7)   \"registry\" |
|   | property table name [More\...](#ga2062ba7b5292b2cb9456209022cbdac7)<br/> |

|  |  |
|----|----|
| Typedefs |  |
| typedef long long  | [InfoNode](#ga371205fdb002d88c01543e80d67c188d) |
|   | 64-bit ID referencing one node/key in the database, IDs are always positive numbers, [INFO_ROOT](#gga726ca809ffd3d67ab4b8476646f26635a9752fad95ea540238bfad2ac28fbf1b0 "Dedicated root node of the hierarchical storage.") is the ID of the root node [More\...](#ga371205fdb002d88c01543e80d67c188d)<br/> |
| typedef struct InfoDBHandle  | [InfoDB](#ga4ddf94c49950552d783161dda5443e0f) |
|   | Database handle. [More\...](#ga4ddf94c49950552d783161dda5443e0f)<br/> |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) {<br/>  [INFO_OK](#gga1f20dc2829c95bd71bdb14239bc3b2c8aeed232bfb806b5e87f0f1308aca346ef) = 0, [INFO_FAIL](#gga1f20dc2829c95bd71bdb14239bc3b2c8a84e5813d027c7b570cf59b048a276419) = -1, [INFO_NO_DB](#gga1f20dc2829c95bd71bdb14239bc3b2c8a0703a78aa4d8dbb735f4f885cf2f8f7e) = -2, [INFO_NOT_FOUND](#gga1f20dc2829c95bd71bdb14239bc3b2c8a3b1f244145443aefc6bc416ee178110d) = -3,<br/>  [INFO_INVALID_PARAM](#gga1f20dc2829c95bd71bdb14239bc3b2c8ab35a928a60d11b22b11200706f346f50) = -4, [INFO_BUSY](#gga1f20dc2829c95bd71bdb14239bc3b2c8a1144601a481f8efa44dbfb02f2c05286) = -5, [INFO_MEM](#gga1f20dc2829c95bd71bdb14239bc3b2c8a82d358474cb1a4681487cdcfe3b2e1d5) = -6, [INFO_BREAK](#gga1f20dc2829c95bd71bdb14239bc3b2c8af9b83681708f932f8f3960d39e3936c0) = -7,<br/>  [INFO_NODE_NAME_INVALID](#gga1f20dc2829c95bd71bdb14239bc3b2c8a209d19f7193b4a25e96f55ce06ffb374) = -8, [INFO_NOT_IMPL](#gga1f20dc2829c95bd71bdb14239bc3b2c8a8772e66ffc6da38cfed56f7724bb1717) = -900, [INFO_NOT_SUPP](#gga1f20dc2829c95bd71bdb14239bc3b2c8a7e732670c842bfcdaa985eff7b28b5a5) = -901<br/>} |
|   | Result codes. [More\...](#ga1f20dc2829c95bd71bdb14239bc3b2c8)<br/> |
| enum   | [InfoType](#ga4fab2721054fd66cc89f138fd029fd1f) {<br/>  [INFO_VOID](#gga4fab2721054fd66cc89f138fd029fd1fa1e2ec92ebdcd376972b8cd557aaa8b02), [INFO_INTEGER](#gga4fab2721054fd66cc89f138fd029fd1fa5dd4a9b6e283187cee362ee67501928a), [INFO_NUMBER](#gga4fab2721054fd66cc89f138fd029fd1fac11f023f86358f75382dc489903b17ef), [INFO_STRING](#gga4fab2721054fd66cc89f138fd029fd1fa02921ca454a797dd48d6d4b053eae727),<br/>  [INFO_BINARY](#gga4fab2721054fd66cc89f138fd029fd1fa667a98036d4afd2297eaa5fee8bb4358)<br/>} |
|   | Data types. [More\...](#ga4fab2721054fd66cc89f138fd029fd1f)<br/> |
| enum   | [InfoMode](#ga9b99e447e7b4f91cd7b9fba838b825f0) { [INFO_READ_ONLY](#gga9b99e447e7b4f91cd7b9fba838b825f0ae1293e987f7ec2d1963e8ee796dc4c86), [INFO_READ_WRITE](#gga9b99e447e7b4f91cd7b9fba838b825f0a2ea780c3c29a4a4989d414089641488e) } |
|   | Database open modes. [More\...](#ga9b99e447e7b4f91cd7b9fba838b825f0)<br/> |
| enum   | [InfoOption](#gaa315d0c6482a2ebccc7547e9295a211d) { [INFO_OPT_DISABLE_AUTOCOMMIT](#ggaa315d0c6482a2ebccc7547e9295a211da16008ad085c1be473320e4df194c0d27) = (0x1 \<\< 0), [INFO_OPT_MULTIPLE_ENTRIES](#ggaa315d0c6482a2ebccc7547e9295a211da238bdf391e95b811f9ac5e8c772b6af6) = (0x1 \<\< 1) } |
|   | Additional options. [More\...](#gaa315d0c6482a2ebccc7547e9295a211d)<br/> |
| enum   | { [INFO_ROOT](#gga726ca809ffd3d67ab4b8476646f26635a9752fad95ea540238bfad2ac28fbf1b0) = 0 } |

|  |  |
|----|----|
| Functions |  |
| const <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> char \*  | [info_getVersion](#ga45afbfe3853490244c17383a667fe0e7) (void) |
|   | get version of a library [More\...](#ga45afbfe3853490244c17383a667fe0e7)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> [InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*  | [info_opendb](#ga4cf176ac250d5f4ac40a717bdf49bad9) (const char \*filename, enum [InfoMode](#ga9b99e447e7b4f91cd7b9fba838b825f0) mode) |
|   | Open the database. [More\...](#ga4cf176ac250d5f4ac40a717bdf49bad9)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> void  | [info_closedb](#ga9636f5a41459a3366255bd2fc8ad2b3f) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle) |
|   | Close database and release allocated resources. [More\...](#ga9636f5a41459a3366255bd2fc8ad2b3f)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_setOptions](#ga34be6def57c4f44b170128532f78fe2d) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, int options) |
|   | Set additional options changing behavior of info\_\* functions. [More\...](#ga34be6def57c4f44b170128532f78fe2d)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> int  | [info_getOptions](#ga5a7085e70df8abd29bcaea9e4e3d2c77) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle) |
|   | Get current additional options changing behavior of info\_\* functions. [More\...](#ga5a7085e70df8abd29bcaea9e4e3d2c77)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_autocommit](#ga0801c688741d290aea51941ece9da78c) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, int enable) |
|   | Enable/disable automatic commit for every info_write\* operation. [More\...](#ga0801c688741d290aea51941ece9da78c)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_transactionBegin](#ga816c14a5630ad3e2e0734a52fe285e54) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*idb) |
|   | Save database state. [More\...](#ga816c14a5630ad3e2e0734a52fe285e54)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_transactionCommit](#ga3c2f5b212c59c57adbe313812e63b350) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*idb) |
|   | Commit changes. [More\...](#ga3c2f5b212c59c57adbe313812e63b350)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_transactionRollback](#ga61db7da4ef43b0e4994dd46d26bd0ebe) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*idb) |
|   | Rollback changes. [More\...](#ga61db7da4ef43b0e4994dd46d26bd0ebe)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> [InfoNode](#ga371205fdb002d88c01543e80d67c188d)  | [info_find](#gaa167931ed0a92796ee478b9ac93347a2) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path) |
|   | Find a node within the hierarchy and return its node ID. [More\...](#gaa167931ed0a92796ee478b9ac93347a2)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_getType](#ga507d337f52d3d7acf3691a287d565515) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, enum [InfoType](#ga4fab2721054fd66cc89f138fd029fd1f) \*type) |
|   | Determine the type of a value as it has been stored in the database. [More\...](#ga507d337f52d3d7acf3691a287d565515)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_readInt](#ga3b1d6872aab17d7043fc6258caaf4f36) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Read value from the database and convert it to int, if required. [More\...](#ga3b1d6872aab17d7043fc6258caaf4f36)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_readUnsignedInt](#gac59bbe74aae83c5888f510c3bc169063) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, unsigned int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Read value from the database and convert it to unsigned int, if required. [More\...](#gac59bbe74aae83c5888f510c3bc169063)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_readDouble](#ga8e36e70267096d0de8b8d8e50d1542a6) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, double \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Read value from the database and convert it to double, if required. [More\...](#ga8e36e70267096d0de8b8d8e50d1542a6)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_readString](#ga045b2122ffcea050015ce6de52c106f6) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, char \*\*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Read value from the database and convert it to a string, if required. [More\...](#ga045b2122ffcea050015ce6de52c106f6)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_readBinary](#ga0924a766bf84c449058a7b4f78bd1a96) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, void \*\*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, int \*size) |
|   | Read value from the database as chunk of memory. [More\...](#ga0924a766bf84c449058a7b4f78bd1a96)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_updateNodeName](#ga4bd971d1088aed8566212896522ec147) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*idb, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) node, const char \*newname, int allow_overwrite) |
|   | Update node_name. [More\...](#ga4bd971d1088aed8566212896522ec147)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_writeInt](#gaa569328ef9e8c2da03429b5c270101c5) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, int <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Write int value to the database. [More\...](#gaa569328ef9e8c2da03429b5c270101c5)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_writeUnsignedInt](#ga4347be8fa85445d67ef163ef3bdc6acd) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, unsigned int <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Write unsigned int value to the database. [More\...](#ga4347be8fa85445d67ef163ef3bdc6acd)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_writeDouble](#gadd1c03a124342cb7d889360e2a866c51) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, double <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Write double value to the database. [More\...](#gadd1c03a124342cb7d889360e2a866c51)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_writeString](#gaa820eb834650ba97b27d9cc4d558fb8d) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, const char \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Write string value to the database. [More\...](#gaa820eb834650ba97b27d9cc4d558fb8d)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_writeBinary](#ga31c4f4a46c0818f7e64a269b43d5c272) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, const void \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, int size) |
|   | Write value from the database as chunk of memory. [More\...](#ga31c4f4a46c0818f7e64a269b43d5c272)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_delete](#gab0cab9361709296139598c7edda1f1ed) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path) |
|   | Delete a node and all of its child nodes from the database. [More\...](#gab0cab9361709296139598c7edda1f1ed)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_list](#ga54f4b018748882e6c5cdc509177fcee7) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, struct [InfoChildren](#struct_info_children) \*\*list) |
|   | Obtain a list of the names of all direct child nodes of a node. [More\...](#ga54f4b018748882e6c5cdc509177fcee7)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_incrementInt](#ga0b9ac4c2f9a7b257d0610d3d7248a722) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, int delta, int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Atomically increment an integer by some delta. [More\...](#ga0b9ac4c2f9a7b257d0610d3d7248a722)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_getPath](#ga5147f1308f849af0f18ee2f9dfdadbce) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) node, char \*\*path) |
|   | Determine the absolute path of a node. [More\...](#ga5147f1308f849af0f18ee2f9dfdadbce)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_walkTree](#ga672f3d4caf24ff01c3b6801b13bf4463) ([InfoDB](#ga4ddf94c49950552d783161dda5443e0f) \*handle, [InfoNode](#ga371205fdb002d88c01543e80d67c188d) parent, const char \*path, int(\*cb)(void \*data, const char \*path, struct InfoReference \*info), void \*data) |
|   | Recursively walk over the nodes of the (sub-) tree and invoke the callback for each node. [More\...](#ga672f3d4caf24ff01c3b6801b13bf4463)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_nodeGetType](#gaf943103c0cb3018c835ee081a35c2629) (struct InfoReference \*info, enum [InfoType](#ga4fab2721054fd66cc89f138fd029fd1f) \*type) |
|   | Determine type of a node. [More\...](#gaf943103c0cb3018c835ee081a35c2629)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_nodeReadInt](#ga6d85fe7b4326970a1b00000d029fec78) (struct InfoReference \*info, int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Read value from the database and convert it to int, if required. [More\...](#ga6d85fe7b4326970a1b00000d029fec78)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_nodeReadDouble](#ga24f0af1a2b3ad3989365661e02a4682f) (struct InfoReference \*info, double \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Read value from the database and convert it to double, if required. [More\...](#ga24f0af1a2b3ad3989365661e02a4682f)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_nodeReadString](#ga9447dc74d3c0b289936bc262ef15f49b) (struct InfoReference \*info, char \*\*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
|   | Read value from the database and convert it to a string, if required. [More\...](#ga9447dc74d3c0b289936bc262ef15f49b)<br/> |
| <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)  | [info_nodeReadBinary](#ga08fcfd8fe23a1a5457b523a9cf967a10) (struct InfoReference \*info, void \*\*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, int \*size) |
|   | Read value from the database as chunk of memory. [More\...](#ga08fcfd8fe23a1a5457b523a9cf967a10)<br/> |

## DetailedDescription {#detailed-description}

Allows for easy to use hierarchical key/value storage.

In order to use Property Database API one must include `<`<a href="infodb_8h.md">inf/infodb.h</a>`>` and link against `libinf.so` or `libinf-static.a` depending on the chosen linkage model. See also the following items:

- sect-path.

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## InfoChildren <a href="#struct_info_children" id="struct_info_children"></a>

<p>struct InfoChildren</p>

structure for returning the names of the direct child nodes

| Data Fields |       |                                                      |
|-------------|-------|------------------------------------------------------|
| int         | count | number of child nodes                                |
| char \*\*   | name  | array containing the names of the direct child nodes |

## MacroDefinition Documentation {#macro-definition-documentation}

## PROP_NAME <a href="#ga2062ba7b5292b2cb9456209022cbdac7" id="ga2062ba7b5292b2cb9456209022cbdac7"></a>

<p>#define PROP_NAME   \"registry\"</p>

property table name

## TypedefDocumentation {#typedef-documentation}

## InfoDB <a href="#ga4ddf94c49950552d783161dda5443e0f" id="ga4ddf94c49950552d783161dda5443e0f"></a>

<p>typedef struct InfoDBHandle [InfoDB](#ga4ddf94c49950552d783161dda5443e0f)</p>

Database handle.

## InfoNode <a href="#ga371205fdb002d88c01543e80d67c188d" id="ga371205fdb002d88c01543e80d67c188d"></a>

<p>typedef long long [InfoNode](#ga371205fdb002d88c01543e80d67c188d)</p>

64-bit ID referencing one node/key in the database, IDs are always positive numbers, [INFO_ROOT](#gga726ca809ffd3d67ab4b8476646f26635a9752fad95ea540238bfad2ac28fbf1b0 "Dedicated root node of the hierarchical storage.") is the ID of the root node

## EnumerationType Documentation {#enumeration-type-documentation}

## anonymousenum <a href="#ga726ca809ffd3d67ab4b8476646f26635" id="ga726ca809ffd3d67ab4b8476646f26635"></a> {#anonymous-enum}

<p>anonymous enum</p>

| Enumerator |  |
|----|----|
| INFO_ROOT  | <p>Dedicated root node of the hierarchical storage.</p> |

## InfoMode <a href="#ga9b99e447e7b4f91cd7b9fba838b825f0" id="ga9b99e447e7b4f91cd7b9fba838b825f0"></a>

<p>enum [InfoMode](#ga9b99e447e7b4f91cd7b9fba838b825f0)</p>

Database open modes.

| Enumerator       |                                                        |
|------------------|--------------------------------------------------------|
| INFO_READ_ONLY   | <p>read-only access to database</p>  |
| INFO_READ_WRITE  | <p>read/write access to database</p> |

## InfoOption <a href="#gaa315d0c6482a2ebccc7547e9295a211d" id="gaa315d0c6482a2ebccc7547e9295a211d"></a>

<p>enum [InfoOption](#gaa315d0c6482a2ebccc7547e9295a211d)</p>

Additional options.

| Enumerator |  |
|----|----|
| INFO_OPT_DISABLE_AUTOCOMMIT  | <p>0x1 bit disables autocommit for every info_write\* operation</p> |
| INFO_OPT_MULTIPLE_ENTRIES  | <p>0x2 bit allows inserting multiple entries for single key</p> |

## InfoResult <a href="#ga1f20dc2829c95bd71bdb14239bc3b2c8" id="ga1f20dc2829c95bd71bdb14239bc3b2c8"></a>

<p>enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8)</p>

Result codes.

| Enumerator |  |
|----|----|
| INFO_OK  | <p>No error.</p> |
| INFO_FAIL  | <p>Generic operation failure.</p> |
| INFO_NO_DB  | <p>Database cannot be accessed.</p> |
| INFO_NOT_FOUND  | <p>Key was not found.</p> |
| INFO_INVALID_PARAM  | <p>Invalid values for function parameters.</p> |
| INFO_BUSY  | <p>The database is busy and cannot process the request within a reasonable timeframe.</p> |
| INFO_MEM  | <p>Out of memory.</p> |
| INFO_BREAK  | <p>The callback indicated to stop processing.</p> |
| INFO_NODE_NAME_INVALID  | <p>Node name is invalid (i.e. does not match \[a-zA-Z0-9-\_.@\].</p> |
| INFO_NOT_IMPL  | <p>Function is not implemented (but might be in the future)</p> |
| INFO_NOT_SUPP  | <p>Operation is not (and never will be) supported.</p> |

## InfoType <a href="#ga4fab2721054fd66cc89f138fd029fd1f" id="ga4fab2721054fd66cc89f138fd029fd1f"></a>

<p>enum [InfoType](#ga4fab2721054fd66cc89f138fd029fd1f)</p>

Data types.

| Enumerator    |                                         |
|---------------|-----------------------------------------|
| INFO_VOID     | <p>void, no value</p> |
| INFO_INTEGER  | <p>int</p>            |
| INFO_NUMBER   | <p>decimal number</p> |
| INFO_STRING   | <p>string</p>         |
| INFO_BINARY   | <p>memory chunk</p>   |

## FunctionDocumentation {#function-documentation}

## info_autocommit() <a href="#ga0801c688741d290aea51941ece9da78c" id="ga0801c688741d290aea51941ece9da78c"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_autocommit</p>

Enable/disable automatic commit for every info_write\* operation.

**Parameters**

\[in\] **handle** database handle obtained from info_opendb() \[in\] **enable** 0 - disable autocommit, any other value enables autocommit


{% hint style="info" %}
Default operation mode is enabled autocommit.
This function call is equivalent to info_setOptions function call with accordingly defined INFO_OPT_DISABLE_AUTOCOMMIT bit.
{% endhint %}

### Returns

error code

## info_closedb() <a href="#ga9636f5a41459a3366255bd2fc8ad2b3f" id="ga9636f5a41459a3366255bd2fc8ad2b3f"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> void info_closedb</p>

Close database and release allocated resources.

**Parameters**

\[in\] **handle** database handle obtained from info_opendb()


{% hint style="info" %}
It is safe to call info_closedb(NULL);
{% endhint %}

## info_delete() <a href="#gab0cab9361709296139598c7edda1f1ed" id="gab0cab9361709296139598c7edda1f1ed"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_delete</p>

Delete a node and all of its child nodes from the database.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required.

### Returns

error code

## info_find() <a href="#gaa167931ed0a92796ee478b9ac93347a2" id="gaa167931ed0a92796ee478b9ac93347a2"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> [InfoNode](#ga371205fdb002d88c01543e80d67c188d) info_find</p>

Find a node within the hierarchy and return its node ID.

This id can be used as starting node for subsequent addressing within the database (similar to the current working directory in a file system).

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path

### Returns

Node ID (\>=0) or error code (\<0).

## info_getOptions() <a href="#ga5a7085e70df8abd29bcaea9e4e3d2c77" id="ga5a7085e70df8abd29bcaea9e4e3d2c77"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> int info_getOptions</p>

Get current additional options changing behavior of info\_\* functions.

**Parameters**

\[in\] **handle** database handle obtained from info_opendb()

### Returns

current options. Negative value indicates error.

## info_getPath() <a href="#ga5147f1308f849af0f18ee2f9dfdadbce" id="ga5147f1308f849af0f18ee2f9dfdadbce"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_getPath</p>

Determine the absolute path of a node.

**Parameters**

\[in\] **handle** database handle \[in\] **node** parent node for which to determine the path \[out\] **path** absolute path of the node as C-string that has been allocated using malloc(). Use free() to release it when not needed any longer. In case of error NULL is returned.

### Returns

error code

## info_getType() <a href="#ga507d337f52d3d7acf3691a287d565515" id="ga507d337f52d3d7acf3691a287d565515"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_getType</p>

Determine the type of a value as it has been stored in the database.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path \[out\] **type** pointer for storing the type of the value in the database. In case no value was found it is set to INFO_VOID.

### Returns

error code

## info_getVersion() <a href="#ga45afbfe3853490244c17383a667fe0e7" id="ga45afbfe3853490244c17383a667fe0e7"></a>

<p>const <a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> char\* info_getVersion</p>

get version of a library

### Returns

string with version

## info_incrementInt() <a href="#ga0b9ac4c2f9a7b257d0610d3d7248a722" id="ga0b9ac4c2f9a7b257d0610d3d7248a722"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_incrementInt</p>

Atomically increment an integer by some delta.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path \[in\] **delta** amount by which to increment the value \[out\] **value** pointer for resulting value after increment, if NULL no value will be returned.

### Returns

error code


{% hint style="info" %}
If the value does not exist it is created with a default value of 0, i.e. it will have the value *delta* after incrementing.
{% endhint %}

## info_list() <a href="#ga54f4b018748882e6c5cdc509177fcee7" id="ga54f4b018748882e6c5cdc509177fcee7"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_list</p>

Obtain a list of the names of all direct child nodes of a node.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path \[in\] **list** pointer to list of child names that has been allocated using malloc(). All information is stored in a single block of memory. Use free() to release when done.

### Returns

error code


{% hint style="info" %}
Names in the result are similar to strcmp but with special handling of contained numbers: These are treated as single character and compared by value, i.e. sorting \"z\",\"n2\",\"n10\",\"n1\",\"a\" would be listed as \"a\",\"n1\",\"n2\",\"n10\",\"z\" (\"n2\" is listed before \"n10\" since 2\<10)
{% endhint %}

## info_nodeGetType() <a href="#gaf943103c0cb3018c835ee081a35c2629" id="gaf943103c0cb3018c835ee081a35c2629"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_nodeGetType</p>

Determine type of a node.

**Parameters**

\[in\] **info** handle provided to callback function \[out\] **type** pointer for storing the type of the value in the database. In case no value was found it is set to INFO_VOID.

### Returns

error code

## info_nodeReadBinary() <a href="#ga08fcfd8fe23a1a5457b523a9cf967a10" id="ga08fcfd8fe23a1a5457b523a9cf967a10"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_nodeReadBinary</p>

Read value from the database as chunk of memory.

**Parameters**

\[in\] **info** handle provided to callback function \[out\] **value** pointer for storing the chunk of memory. The memory has been allocated using malloc(), it has to be released using free() when done. In case no value was found or in case size is 0 then NULL is returned. \[out\] **size** size of the returned memory. In case no value was found 0 is returned.

### Returns

error code

## info_nodeReadDouble() <a href="#ga24f0af1a2b3ad3989365661e02a4682f" id="ga24f0af1a2b3ad3989365661e02a4682f"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_nodeReadDouble</p>

Read value from the database and convert it to double, if required.

**Parameters**

\[in\] **info** handle provided to callback function \[out\] **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged.

### Returns

error code

## info_nodeReadInt() <a href="#ga6d85fe7b4326970a1b00000d029fec78" id="ga6d85fe7b4326970a1b00000d029fec78"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_nodeReadInt</p>

Read value from the database and convert it to int, if required.

**Parameters**

\[in\] **info** handle provided to callback function \[out\] **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged.

### Returns

error code

## info_nodeReadString() <a href="#ga9447dc74d3c0b289936bc262ef15f49b" id="ga9447dc74d3c0b289936bc262ef15f49b"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_nodeReadString</p>

Read value from the database and convert it to a string, if required.

**Parameters**

\[in\] **info** handle provided to callback function \[out\] **value** pointer for storing the string. The string is returned as C-string in memory that has been allocated using malloc(), the returned string has to be released using free() when done. In case no value was found NULL is returned.

### Returns

error code

## info_opendb() <a href="#ga4cf176ac250d5f4ac40a717bdf49bad9" id="ga4cf176ac250d5f4ac40a717bdf49bad9"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> [InfoDB](#ga4ddf94c49950552d783161dda5443e0f)\* info_opendb</p>

Open the database.

**Parameters**

\[in\] **filename** filename of the database \[in\] **mode** read-only or read-write

### Returns

database handle or `NULL` in case of error


{% hint style="info" %}
If done the database has to be closed using [info_closedb()](#ga9636f5a41459a3366255bd2fc8ad2b3f "Close database and release allocated resources.")
{% endhint %}

## info_readBinary() <a href="#ga0924a766bf84c449058a7b4f78bd1a96" id="ga0924a766bf84c449058a7b4f78bd1a96"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_readBinary</p>

Read value from the database as chunk of memory.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path \[out\] **value** pointer for storing the chunk of memory. The memory has been allocated using malloc(), it has to be released using free() when done. In case no value was found or in case size is 0 then NULL is returned. \[out\] **size** size of the returned memory. In case no value was found 0 is returned.

### Returns

error code

## info_readDouble() <a href="#ga8e36e70267096d0de8b8d8e50d1542a6" id="ga8e36e70267096d0de8b8d8e50d1542a6"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_readDouble</p>

Read value from the database and convert it to double, if required.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path \[out\] **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged.

### Returns

error code

## info_readInt() <a href="#ga3b1d6872aab17d7043fc6258caaf4f36" id="ga3b1d6872aab17d7043fc6258caaf4f36"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_readInt</p>

Read value from the database and convert it to int, if required.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path \[out\] **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged.

### Returns

error code

## info_readString() <a href="#ga045b2122ffcea050015ce6de52c106f6" id="ga045b2122ffcea050015ce6de52c106f6"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_readString</p>

Read value from the database and convert it to a string, if required.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path \[out\] **value** pointer for storing the string. The string is returned as C-string in memory that has been allocated using malloc(), the returned string has to be released using free() when done. In case no value was found NULL is returned.

### Returns

error code

## info_readUnsignedInt() <a href="#gac59bbe74aae83c5888f510c3bc169063" id="gac59bbe74aae83c5888f510c3bc169063"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_readUnsignedInt</p>

Read value from the database and convert it to unsigned int, if required.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path \[out\] **value** pointer for storing the number that has been read from the database. In case no value was found it remains unchanged.

### Returns

error code

## info_setOptions() <a href="#ga34be6def57c4f44b170128532f78fe2d" id="ga34be6def57c4f44b170128532f78fe2d"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_setOptions</p>

Set additional options changing behavior of info\_\* functions.

**Parameters**

\[in\] **handle** database handle obtained from info_opendb() \[in\] **value(s)** specified in enum InfoOption. 0 - default behavior.

### Returns

error code

## info_transactionBegin() <a href="#ga816c14a5630ad3e2e0734a52fe285e54" id="ga816c14a5630ad3e2e0734a52fe285e54"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_transactionBegin</p>

Save database state.

**Parameters**

\[in\] **handle** database handle obtained from info_opendb()

## info_transactionCommit() <a href="#ga3c2f5b212c59c57adbe313812e63b350" id="ga3c2f5b212c59c57adbe313812e63b350"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_transactionCommit</p>

Commit changes.

**Parameters**

\[in\] **handle** database handle obtained from info_opendb()

## info_transactionRollback() <a href="#ga61db7da4ef43b0e4994dd46d26bd0ebe" id="ga61db7da4ef43b0e4994dd46d26bd0ebe"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_transactionRollback</p>

Rollback changes.

**Parameters**

\[in\] **handle** database handle obtained from info_opendb()

## info_updateNodeName() <a href="#ga4bd971d1088aed8566212896522ec147" id="ga4bd971d1088aed8566212896522ec147"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_updateNodeName</p>

Update node_name.

**Parameters**

\[in\] **handle** database handle. \[in\] **node** node that require change. \[in\] **newname** new name of node. \[in\] **allow_overwrite** acts when destination (newname) exists.

### Returns

error code

## info_walkTree() <a href="#ga672f3d4caf24ff01c3b6801b13bf4463" id="ga672f3d4caf24ff01c3b6801b13bf4463"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_walkTree</p>

Recursively walk over the nodes of the (sub-) tree and invoke the callback for each node.

**Parameters**

\[in\] **handle** database handle; \[in\] **parent** parent node of the (sub-) tree \[in\] **path** path see sect-path \[in\] **cb** callback that will be invoked for node parent/path and all of its descendant nodes. The callback is invoked with the path and a handle to read the type and value stored in that node. \[in\] **data** data pointer that is passed on to the callback

### Returns

error code

## info_writeBinary() <a href="#ga31c4f4a46c0818f7e64a269b43d5c272" id="ga31c4f4a46c0818f7e64a269b43d5c272"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_writeBinary</p>

Write value from the database as chunk of memory.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. \[in\] **value** pointer to memory region to be written, may be NULL, in this case an empty value of type INFO_VOID is written \[in\] **size** number of bytes to be written

### Returns

error code

## info_writeDouble() <a href="#gadd1c03a124342cb7d889360e2a866c51" id="gadd1c03a124342cb7d889360e2a866c51"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_writeDouble</p>

Write double value to the database.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. \[in\] **value** double value to be written.

### Returns

error code

## info_writeInt() <a href="#gaa569328ef9e8c2da03429b5c270101c5" id="gaa569328ef9e8c2da03429b5c270101c5"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_writeInt</p>

Write int value to the database.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. \[in\] **value** int value to be written.

### Returns

error code

## info_writeString() <a href="#gaa820eb834650ba97b27d9cc4d558fb8d" id="gaa820eb834650ba97b27d9cc4d558fb8d"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_writeString</p>

Write string value to the database.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. \[in\] **value** C-string to be written, may be NULL, in this case an empty value of type INFO_VOID is written

### Returns

error code

## info_writeUnsignedInt() <a href="#ga4347be8fa85445d67ef163ef3bdc6acd" id="ga4347be8fa85445d67ef163ef3bdc6acd"></a>

<p><a href="infodb_8h.md#aeb6fcbde9f085c588eb4b161b86b6175">INF_API</a> enum [InfoResult](#ga1f20dc2829c95bd71bdb14239bc3b2c8) info_writeUnsignedInt</p>

Write unsigned int value to the database.

**Parameters**

\[in\] **handle** database handle \[in\] **parent** parent node used as starting point for the path. Use INFO_ROOT to address relative to the root of the tree. \[in\] **path** path see sect-path. If the key does not exist yet, it is created. Parent nodes are created as required. \[in\] **value** unsigned int value to be written.

### Returns

error code
