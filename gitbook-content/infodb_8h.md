---
hidden: true
title: infodb.h File ReferenceProperty Database API
---

[Data Structures](#nested-classes) \| [Macros](#define-members) \| [Typedefs](#typedef-members) \| [Enumerations](#enum-members)

Hierarchical Property Database API. [More\...](#details)

<a href="infodb_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Data Structures |  |
| struct   | <a href="group__propdb.md#struct_info_children">InfoChildren</a> |
|   | structure for returning the names of the direct child nodes <a href="group__propdb.md#struct_info_children">More...</a><br/> |

|  |  |
|----|----|
| Macros |  |
| #define  | [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) |
| #define  | <a href="group__propdb.md#ga2062ba7b5292b2cb9456209022cbdac7">PROP_NAME</a>   \"registry\" |
|   | property table name <a href="group__propdb.md#ga2062ba7b5292b2cb9456209022cbdac7">More...</a><br/> |

|  |  |
|----|----|
| Typedefs |  |
| typedef long long  | <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> |
|   | 64-bit ID referencing one node/key in the database, IDs are always positive numbers, <a href="group__propdb.md#gga726ca809ffd3d67ab4b8476646f26635a9752fad95ea540238bfad2ac28fbf1b0">INFO_ROOT</a> is the ID of the root node <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">More...</a><br/> |
| typedef struct InfoDBHandle  | <a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> |
|   | Database handle. <a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">More...</a><br/> |

|  |  |
|----|----|
| Enumerations |  |
| enum   | <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a> {<br/>  <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8aeed232bfb806b5e87f0f1308aca346ef">INFO_OK</a> = 0, <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8a84e5813d027c7b570cf59b048a276419">INFO_FAIL</a> = -1, <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8a0703a78aa4d8dbb735f4f885cf2f8f7e">INFO_NO_DB</a> = -2, <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8a3b1f244145443aefc6bc416ee178110d">INFO_NOT_FOUND</a> = -3,<br/>  <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8ab35a928a60d11b22b11200706f346f50">INFO_INVALID_PARAM</a> = -4, <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8a1144601a481f8efa44dbfb02f2c05286">INFO_BUSY</a> = -5, <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8a82d358474cb1a4681487cdcfe3b2e1d5">INFO_MEM</a> = -6, <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8af9b83681708f932f8f3960d39e3936c0">INFO_BREAK</a> = -7,<br/>  <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8a209d19f7193b4a25e96f55ce06ffb374">INFO_NODE_NAME_INVALID</a> = -8, <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8a8772e66ffc6da38cfed56f7724bb1717">INFO_NOT_IMPL</a> = -900, <a href="group__propdb.md#gga1f20dc2829c95bd71bdb14239bc3b2c8a7e732670c842bfcdaa985eff7b28b5a5">INFO_NOT_SUPP</a> = -901<br/>} |
|   | Result codes. <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">More...</a><br/> |
| enum   | <a href="group__propdb.md#ga4fab2721054fd66cc89f138fd029fd1f">InfoType</a> {<br/>  <a href="group__propdb.md#gga4fab2721054fd66cc89f138fd029fd1fa1e2ec92ebdcd376972b8cd557aaa8b02">INFO_VOID</a>, <a href="group__propdb.md#gga4fab2721054fd66cc89f138fd029fd1fa5dd4a9b6e283187cee362ee67501928a">INFO_INTEGER</a>, <a href="group__propdb.md#gga4fab2721054fd66cc89f138fd029fd1fac11f023f86358f75382dc489903b17ef">INFO_NUMBER</a>, <a href="group__propdb.md#gga4fab2721054fd66cc89f138fd029fd1fa02921ca454a797dd48d6d4b053eae727">INFO_STRING</a>,<br/>  <a href="group__propdb.md#gga4fab2721054fd66cc89f138fd029fd1fa667a98036d4afd2297eaa5fee8bb4358">INFO_BINARY</a><br/>} |
|   | Data types. <a href="group__propdb.md#ga4fab2721054fd66cc89f138fd029fd1f">More...</a><br/> |
| enum   | <a href="group__propdb.md#ga9b99e447e7b4f91cd7b9fba838b825f0">InfoMode</a> { <a href="group__propdb.md#gga9b99e447e7b4f91cd7b9fba838b825f0ae1293e987f7ec2d1963e8ee796dc4c86">INFO_READ_ONLY</a>, <a href="group__propdb.md#gga9b99e447e7b4f91cd7b9fba838b825f0a2ea780c3c29a4a4989d414089641488e">INFO_READ_WRITE</a> } |
|   | Database open modes. <a href="group__propdb.md#ga9b99e447e7b4f91cd7b9fba838b825f0">More...</a><br/> |
| enum   | <a href="group__propdb.md#gaa315d0c6482a2ebccc7547e9295a211d">InfoOption</a> { <a href="group__propdb.md#ggaa315d0c6482a2ebccc7547e9295a211da16008ad085c1be473320e4df194c0d27">INFO_OPT_DISABLE_AUTOCOMMIT</a> = (0x1 \<\< 0), <a href="group__propdb.md#ggaa315d0c6482a2ebccc7547e9295a211da238bdf391e95b811f9ac5e8c772b6af6">INFO_OPT_MULTIPLE_ENTRIES</a> = (0x1 \<\< 1) } |
|   | Additional options. <a href="group__propdb.md#gaa315d0c6482a2ebccc7547e9295a211d">More...</a><br/> |
| enum   | { <a href="group__propdb.md#gga726ca809ffd3d67ab4b8476646f26635a9752fad95ea540238bfad2ac28fbf1b0">INFO_ROOT</a> = 0 } |

  ------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Functions                                                                                                                                   

  Functions                                                                                                                                   

  const [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) char \*                                                                                 <a href="group__propdb.md#ga45afbfe3853490244c17383a667fe0e7">info_getVersion</a> (void)

                                                                                                                                              get version of a library <a href="group__propdb.md#ga45afbfe3853490244c17383a667fe0e7">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) <a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*          <a href="group__propdb.md#ga4cf176ac250d5f4ac40a717bdf49bad9">info_opendb</a> (const char \*filename, enum <a href="group__propdb.md#ga9b99e447e7b4f91cd7b9fba838b825f0">InfoMode</a> mode)

                                                                                                                                              Open the database. <a href="group__propdb.md#ga4cf176ac250d5f4ac40a717bdf49bad9">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) void                                                                                          <a href="group__propdb.md#ga9636f5a41459a3366255bd2fc8ad2b3f">info_closedb</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle)

                                                                                                                                              Close database and release allocated resources. <a href="group__propdb.md#ga9636f5a41459a3366255bd2fc8ad2b3f">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga34be6def57c4f44b170128532f78fe2d">info_setOptions</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, int options)

                                                                                                                                              Set additional options changing behavior of info\_\* functions. <a href="group__propdb.md#ga34be6def57c4f44b170128532f78fe2d">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) int                                                                                           <a href="group__propdb.md#ga5a7085e70df8abd29bcaea9e4e3d2c77">info_getOptions</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle)

                                                                                                                                              Get current additional options changing behavior of info\_\* functions. <a href="group__propdb.md#ga5a7085e70df8abd29bcaea9e4e3d2c77">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga0801c688741d290aea51941ece9da78c">info_autocommit</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, int enable)

                                                                                                                                              Enable/disable automatic commit for every info_write\* operation. <a href="group__propdb.md#ga0801c688741d290aea51941ece9da78c">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga816c14a5630ad3e2e0734a52fe285e54">info_transactionBegin</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*idb)

                                                                                                                                              Save database state. <a href="group__propdb.md#ga816c14a5630ad3e2e0734a52fe285e54">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga3c2f5b212c59c57adbe313812e63b350">info_transactionCommit</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*idb)

                                                                                                                                              Commit changes. <a href="group__propdb.md#ga3c2f5b212c59c57adbe313812e63b350">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga61db7da4ef43b0e4994dd46d26bd0ebe">info_transactionRollback</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*idb)

                                                                                                                                              Rollback changes. <a href="group__propdb.md#ga61db7da4ef43b0e4994dd46d26bd0ebe">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a>           <a href="group__propdb.md#gaa167931ed0a92796ee478b9ac93347a2">info_find</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path)

                                                                                                                                              Find a node within the hierarchy and return its node ID. <a href="group__propdb.md#gaa167931ed0a92796ee478b9ac93347a2">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga507d337f52d3d7acf3691a287d565515">info_getType</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, enum <a href="group__propdb.md#ga4fab2721054fd66cc89f138fd029fd1f">InfoType</a> \*type)

                                                                                                                                              Determine the type of a value as it has been stored in the database. <a href="group__propdb.md#ga507d337f52d3d7acf3691a287d565515">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga3b1d6872aab17d7043fc6258caaf4f36">info_readInt</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Read value from the database and convert it to int, if required. <a href="group__propdb.md#ga3b1d6872aab17d7043fc6258caaf4f36">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#gac59bbe74aae83c5888f510c3bc169063">info_readUnsignedInt</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, unsigned int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Read value from the database and convert it to unsigned int, if required. <a href="group__propdb.md#gac59bbe74aae83c5888f510c3bc169063">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga8e36e70267096d0de8b8d8e50d1542a6">info_readDouble</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, double \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Read value from the database and convert it to double, if required. <a href="group__propdb.md#ga8e36e70267096d0de8b8d8e50d1542a6">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga045b2122ffcea050015ce6de52c106f6">info_readString</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, char \*\*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Read value from the database and convert it to a string, if required. <a href="group__propdb.md#ga045b2122ffcea050015ce6de52c106f6">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga0924a766bf84c449058a7b4f78bd1a96">info_readBinary</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, void \*\*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, int \*size)

                                                                                                                                              Read value from the database as chunk of memory. <a href="group__propdb.md#ga0924a766bf84c449058a7b4f78bd1a96">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga4bd971d1088aed8566212896522ec147">info_updateNodeName</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*idb, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> node, const char \*newname, int allow_overwrite)

                                                                                                                                              Update node_name. <a href="group__propdb.md#ga4bd971d1088aed8566212896522ec147">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#gaa569328ef9e8c2da03429b5c270101c5">info_writeInt</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, int <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Write int value to the database. <a href="group__propdb.md#gaa569328ef9e8c2da03429b5c270101c5">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga4347be8fa85445d67ef163ef3bdc6acd">info_writeUnsignedInt</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, unsigned int <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Write unsigned int value to the database. <a href="group__propdb.md#ga4347be8fa85445d67ef163ef3bdc6acd">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#gadd1c03a124342cb7d889360e2a866c51">info_writeDouble</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, double <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Write double value to the database. <a href="group__propdb.md#gadd1c03a124342cb7d889360e2a866c51">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#gaa820eb834650ba97b27d9cc4d558fb8d">info_writeString</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, const char \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Write string value to the database. <a href="group__propdb.md#gaa820eb834650ba97b27d9cc4d558fb8d">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga31c4f4a46c0818f7e64a269b43d5c272">info_writeBinary</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, const void \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, int size)

                                                                                                                                              Write value from the database as chunk of memory. <a href="group__propdb.md#ga31c4f4a46c0818f7e64a269b43d5c272">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#gab0cab9361709296139598c7edda1f1ed">info_delete</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path)

                                                                                                                                              Delete a node and all of its child nodes from the database. <a href="group__propdb.md#gab0cab9361709296139598c7edda1f1ed">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga54f4b018748882e6c5cdc509177fcee7">info_list</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, struct <a href="group__propdb.md#struct_info_children">InfoChildren</a> \*\*list)

                                                                                                                                              Obtain a list of the names of all direct child nodes of a node. <a href="group__propdb.md#ga54f4b018748882e6c5cdc509177fcee7">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga0b9ac4c2f9a7b257d0610d3d7248a722">info_incrementInt</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, int delta, int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Atomically increment an integer by some delta. <a href="group__propdb.md#ga0b9ac4c2f9a7b257d0610d3d7248a722">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga5147f1308f849af0f18ee2f9dfdadbce">info_getPath</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> node, char \*\*path)

                                                                                                                                              Determine the absolute path of a node. <a href="group__propdb.md#ga5147f1308f849af0f18ee2f9dfdadbce">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga672f3d4caf24ff01c3b6801b13bf4463">info_walkTree</a> (<a href="group__propdb.md#ga4ddf94c49950552d783161dda5443e0f">InfoDB</a> \*handle, <a href="group__propdb.md#ga371205fdb002d88c01543e80d67c188d">InfoNode</a> parent, const char \*path, int(\*cb)(void \*data, const char \*path, struct InfoReference \*info), void \*data)

                                                                                                                                              Recursively walk over the nodes of the (sub-) tree and invoke the callback for each node. <a href="group__propdb.md#ga672f3d4caf24ff01c3b6801b13bf4463">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#gaf943103c0cb3018c835ee081a35c2629">info_nodeGetType</a> (struct InfoReference \*info, enum <a href="group__propdb.md#ga4fab2721054fd66cc89f138fd029fd1f">InfoType</a> \*type)

                                                                                                                                              Determine type of a node. <a href="group__propdb.md#gaf943103c0cb3018c835ee081a35c2629">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga6d85fe7b4326970a1b00000d029fec78">info_nodeReadInt</a> (struct InfoReference \*info, int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Read value from the database and convert it to int, if required. <a href="group__propdb.md#ga6d85fe7b4326970a1b00000d029fec78">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga24f0af1a2b3ad3989365661e02a4682f">info_nodeReadDouble</a> (struct InfoReference \*info, double \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Read value from the database and convert it to double, if required. <a href="group__propdb.md#ga24f0af1a2b3ad3989365661e02a4682f">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga9447dc74d3c0b289936bc262ef15f49b">info_nodeReadString</a> (struct InfoReference \*info, char \*\*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>)

                                                                                                                                              Read value from the database and convert it to a string, if required. <a href="group__propdb.md#ga9447dc74d3c0b289936bc262ef15f49b">More...</a><br/>

  [INF_API](#aeb6fcbde9f085c588eb4b161b86b6175) enum <a href="group__propdb.md#ga1f20dc2829c95bd71bdb14239bc3b2c8">InfoResult</a>    <a href="group__propdb.md#ga08fcfd8fe23a1a5457b523a9cf967a10">info_nodeReadBinary</a> (struct InfoReference \*info, void \*\*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, int \*size)

                                                                                                                                              Read value from the database as chunk of memory. <a href="group__propdb.md#ga08fcfd8fe23a1a5457b523a9cf967a10">More...</a><br/>
  ------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## DetailedDescription {#detailed-description}

Hierarchical Property Database API.

## MacroDefinition Documentation {#macro-definition-documentation}

## INF_API <a href="#aeb6fcbde9f085c588eb4b161b86b6175" id="aeb6fcbde9f085c588eb4b161b86b6175"></a>

<p>#define INF_API</p>
