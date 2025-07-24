---
hidden: true
title: infodb.h
---

<a href="infodb_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 18 #ifndef INFODB_H_
 19 #define INFODB_H_
 20 
 21 #ifndef INF_API
 22 
 23 #ifdef _VRXEVO
 24 # ifdef _INF_API_EXPORT
 25 # define INF_API __declspec(dllexport)
 26 # else
 27 # define INF_API __declspec(dllimport)
 28 # endif
 29 #else
 30 # define INF_API
 31 #endif
 32 #endif
 33 
 38 #define PROP_NAME "registry"
 39 
 40 
 41 #ifdef __cplusplus
 42 extern "C"
 43 {
 44 #endif
 45 
 46 
 47 
 48 
 53 struct InfoChildren
 54 {
 55  int count;
 56  char **name;
 57 };
 58 
 59 
 64 enum InfoResult
 65 {
 66  INFO_OK = 0,
 67  INFO_FAIL = -1,
 68  INFO_NO_DB = -2,
 69  INFO_NOT_FOUND = -3,
 70  INFO_INVALID_PARAM = -4,
 71  INFO_BUSY = -5,
 72  INFO_MEM = -6,
 73  INFO_BREAK = -7,
 74  INFO_NODE_NAME_INVALID = -8,
 75 
 76  INFO_NOT_IMPL = -900,
 77  INFO_NOT_SUPP = -901
 78 };
 79 
 84 enum InfoType
 85 {
 86  INFO_VOID,
 87  INFO_INTEGER,
 88  INFO_NUMBER,
 89  INFO_STRING,
 90  INFO_BINARY
 91 };
 92 
 97 enum InfoMode
 98 {
 99  INFO_READ_ONLY,
 100  INFO_READ_WRITE
 101 };
 102 
 107 enum InfoOption
 108 {
 109  INFO_OPT_DISABLE_AUTOCOMMIT = (0x1 << 0),
 110  INFO_OPT_MULTIPLE_ENTRIES = (0x1 << 1)
 111 };
 112 
 117 typedef long long InfoNode;
 118 
 119 struct InfoDBHandle;
 120 struct InfoReference;
 121 
 126 typedef struct InfoDBHandle InfoDB;
 127 
 131 enum
 132 {
 133  INFO_ROOT = 0
 134 };
 135 
 148 INF_API const char *info_getVersion(void);
 149 
 157 INF_API InfoDB *info_opendb(const char *filename, enum InfoMode mode);
 158 
 164 INF_API void info_closedb(InfoDB *handle);
 165 
 172 INF_API enum InfoResult info_setOptions(InfoDB *handle, int options);
 173 
 179 INF_API int info_getOptions(InfoDB *handle);
 180 
 189 INF_API enum InfoResult info_autocommit(InfoDB *handle, int enable);
 190 
 195 INF_API enum InfoResult info_transactionBegin(InfoDB *idb);
 196 
 201 INF_API enum InfoResult info_transactionCommit(InfoDB *idb);
 202 
 207 INF_API enum InfoResult info_transactionRollback(InfoDB *idb);
 208 
 220 INF_API InfoNode info_find(InfoDB *handle, InfoNode parent, const char *path);
 221 
 232 INF_API enum InfoResult info_getType(InfoDB *handle, InfoNode parent, const char *path, enum InfoType *type);
 233 
 244 INF_API enum InfoResult info_readInt(InfoDB *handle, InfoNode parent, const char *path, int *value);
 245 
 256 INF_API enum InfoResult info_readUnsignedInt(InfoDB *handle, InfoNode parent, const char *path, unsigned int *value);
 257 
 268 INF_API enum InfoResult info_readDouble(InfoDB *handle, InfoNode parent, const char *path, double *value);
 269 
 281 INF_API enum InfoResult info_readString(InfoDB *handle, InfoNode parent, const char *path, char **value);
 282 
 295 INF_API enum InfoResult info_readBinary(InfoDB *handle, InfoNode parent, const char *path, void **value, int *size);
 296 
 298 
 307 INF_API enum InfoResult info_updateNodeName(InfoDB *idb, InfoNode node, const char *newname, int allow_overwrite);
 308 
 319 INF_API enum InfoResult info_writeInt(InfoDB *handle, InfoNode parent, const char *path, int value);
 320 
 321 
 332 INF_API enum InfoResult info_writeUnsignedInt(InfoDB *handle, InfoNode parent, const char *path, unsigned int value);
 333 
 334 
 345 INF_API enum InfoResult info_writeDouble(InfoDB *handle, InfoNode parent, const char *path, double value);
 346 
 357 INF_API enum InfoResult info_writeString(InfoDB *handle, InfoNode parent, const char *path, const char *value);
 358 
 370 INF_API enum InfoResult info_writeBinary(InfoDB *handle, InfoNode parent, const char *path, const void *value,
 371  int size);
 372 
 374 
 384 INF_API enum InfoResult info_delete(InfoDB *handle, InfoNode parent, const char *path);
 385 
 387 
 388 
 403 INF_API enum InfoResult info_list(InfoDB *handle, InfoNode parent, const char *path, struct InfoChildren **list);
 404 
 417 INF_API enum InfoResult info_incrementInt(InfoDB *handle, InfoNode parent, const char *path, int delta, int *value);
 418 
 428 INF_API enum InfoResult info_getPath(InfoDB *handle, InfoNode node, char **path);
 429 
 440 INF_API enum InfoResult info_walkTree(InfoDB *handle, InfoNode parent, const char *path,
 441  int(*cb)(void *data, const char *path, struct InfoReference *info),
 442  void *data);
 443 
 451 INF_API enum InfoResult info_nodeGetType(struct InfoReference *info, enum InfoType *type);
 452 
 460 INF_API enum InfoResult info_nodeReadInt(struct InfoReference *info, int *value);
 461 
 469 INF_API enum InfoResult info_nodeReadDouble(struct InfoReference *info, double *value);
 470 
 479 INF_API enum InfoResult info_nodeReadString(struct InfoReference *info, char **value);
 480 
 490 INF_API enum InfoResult info_nodeReadBinary(struct InfoReference *info, void **value, int *size);
 491 
 496 #ifdef __cplusplus
 497 }
 498 #endif
 499 
 500 #endif // INFODB_H_
```
