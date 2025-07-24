---
hidden: true
title: btlv.h
---

<a href="btlv_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: VeriFone
 4 * Author: GSS R&D Germany
 5 * Content: BER TLV functions
 6 ****************************************************************************/
 7 
 8 #ifndef BTLV_H
 9 #define BTLV_H
 10 
 11 #include "mem_pool.h"
 12 
 13 #ifdef __cplusplus
 14 extern "C" {
 15 #endif
 16 
 17 #define TLV_UTIL_INTERFACE // NOTE: Do not set visibility("default") because export.map is used
 18 
 19 #define MAX_TAGSIZE 3 
 22 enum {
 23  CONTEXT_CLASS =0x80,
 24  PRIVATE_CLASS =0xC0,
 25  CONSTRUCTET_TAG =0x20, // typo, use CONSTRUCTED_TAG instead
 26  CONSTRUCTED_TAG =0x20,
 27  PRIMITIVE_TAG =0x00
 28 };
 29 
 31 enum BTLV_ERROR {
 32  BTLV_ERR_INVALID=-1,
 33  BTLV_ERR_BUFFER=-2,
 34  BTLV_ERR_MEMORY=-3,
 35  BTLV_ERR_FILE=-4,
 36  BTLV_ERR_NOT_FOUND=-5,
 37  BTLV_ERR_CONSTRUCTED=-6,
 38  BTLV_ERR_DONE_FILTER=-7,
 39  BTLV_ERR_ABORT_FILTER=-8
 40 };
 41 
 42 
 44 enum BTLVFilter {
 45  BTLV_FLTR_KEEP=0,
 46  BTLV_FLTR_DONE=-1,
 49  BTLV_FLTR_REMOVE=-2,
 50  BTLV_FLTR_ABORT=-3
 51 };
 52 
 53 
 55 enum BTLVContext {
 56  BTLV_IMPORT_START,
 57  BTLV_IMPORT_DONE
 58 };
 59 
 61 enum BTLVMatch {
 62  BTLV_MISMATCH,
 63  BTLV_MATCH,
 64  BTLV_CHILDMATCH,
 65  BTLV_PARENTMATCH
 66 };
 67 
 68 
 72 struct BTLVNode {
 73  struct BTLVNode *pxNext;
 74  struct BTLVNode *pxFirst;
 75  struct BTLVNode *pxParent;
 76  struct MemoryPool *pxMempool;
 77  char tcName[2*MAX_TAGSIZE+1];
 78  char cConstructed;
 79  unsigned char *pucData;
 80  unsigned uSize;
 84 };
 85 
 86 
 97 TLV_UTIL_INTERFACE void vBTLVInit(struct BTLVNode *pxNode, struct MemoryPool *pxMempool);
 98 
 99 
 120 TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVAppendTag(struct BTLVNode *pxRoot,
 121  const char *pcPath,
 122  const unsigned char *pucData, unsigned uSize);
 123 
 124 
 140 TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVWriteTag(struct BTLVNode *pxRoot,
 141  const char *pcPath,
 142  const unsigned char *pucData,
 143  unsigned uSize);
 144 
 145 
 154 TLV_UTIL_INTERFACE int iBTLVWriteData(struct BTLVNode *pxNode, unsigned char *pucData, unsigned uSize);
 155 
 156 
 168 TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVFindTag(struct BTLVNode *pxRoot,const char *pcPath);
 169 
 170 
 186 TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVFindNextTag(struct BTLVNode *pxRoot,
 187  const char *pcPath,
 188  struct BTLVNode *pxPrev);
 189 
 190 
 196 TLV_UTIL_INTERFACE void vBTLVClear(struct BTLVNode *pxNode);
 197 
 198 
 205 TLV_UTIL_INTERFACE void vBTLVRemoveNode(struct BTLVNode *pxNode);
 206 
 207 
 215 TLV_UTIL_INTERFACE void vBTLVMoveNode(struct BTLVNode *pxRoot, struct BTLVNode *pxNode);
 216 
 217 
 223 TLV_UTIL_INTERFACE unsigned uBTLVContentSize(struct BTLVNode *pxRoot);
 224 
 225 
 235 TLV_UTIL_INTERFACE int iBTLVExport(struct BTLVNode *pxRoot, unsigned char *pucBuffer, unsigned uMaxSize);
 236 
 237 
 250 TLV_UTIL_INTERFACE int iBTLVExportFile(struct BTLVNode *pxRoot, const char *pcFilename);
 251 
 252 
 267 TLV_UTIL_INTERFACE int iBTLVAppendFile(struct BTLVNode *pxRoot, const char *pcFilename);
 268 
 269 
 287 TLV_UTIL_INTERFACE int iBTLVImport(struct BTLVNode *pxRoot, const unsigned char *pucBuffer, unsigned uSize,
 288  enum BTLVFilter (*pxFilter)(void *, struct BTLVNode *, enum BTLVContext),void *pvData);
 289 
 290 
 308 TLV_UTIL_INTERFACE int iBTLVImportFile(struct BTLVNode *pxRoot, const char *pcFilename,
 309  enum BTLVFilter (*pxFilter)(void *, struct BTLVNode *, enum BTLVContext),void *pvData);
 310 
 311 
 328 TLV_UTIL_INTERFACE int iBTLVExtractTag(struct BTLVNode *pxRoot, const char *pcPath, unsigned char *pucBuffer, unsigned uSize);
 329 
 330 
 342 TLV_UTIL_INTERFACE enum BTLVMatch xBTLVMatchPath(struct BTLVNode *pxRoot, const char *pcPath);
 343 
 344 
 352 TLV_UTIL_INTERFACE int iBTLVGetPath(struct BTLVNode *pxRoot, char *pcBuffer, int iMaxsize);
 353 
 354 
 355 
 356 
 357 #define BTLVTagBufSize 9
 358 typedef char BTLVTagBufType[BTLVTagBufSize];
 359 
 360 #define ULTAG2ASC(ulTag) pcBTLVTagStr2(ulTag,_ULTAG2ASC_BUF)
 361 #define ULTAG2ASCBUF BTLVTagBufType _ULTAG2ASC_BUF;
 362 
 372 TLV_UTIL_INTERFACE char *pcBTLVTagStr2(unsigned long ulTag, BTLVTagBufType tcTagBuf);
 373 
 374 
 381 TLV_UTIL_INTERFACE char *pcBTLVTagStr(unsigned long ulTag) __attribute ((deprecated));
 382 
 383 
 389 TLV_UTIL_INTERFACE unsigned long ulBTLVTagNum(const char *pcTag);
 390 
 391 
 408 TLV_UTIL_INTERFACE void vBTLVBuildTag(unsigned char ucbyte1, unsigned long tag_number, char* pcTag);
 409 
 410 
 416 TLV_UTIL_INTERFACE void vBTLVGetTagNumber(unsigned char* ucTag, unsigned long* ptag_number);
 417 
 418 
 424 TLV_UTIL_INTERFACE unsigned long ulBTLVGetTagNumber(const char *Tag);
 425 
 426 
 432 TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVGetChild(const struct BTLVNode *pxParent,int n);
 433 
 434 
 440 TLV_UTIL_INTERFACE int iBTLVGetChildOffset(const struct BTLVNode *pxParent, const struct BTLVNode *pxChild);
 441 
 442 
 447 TLV_UTIL_INTERFACE int iBTLVGetChildCount(const struct BTLVNode *pxParent);
 448 
 449 
 454 TLV_UTIL_INTERFACE struct BTLVNode *pxBTLVGetParent(const struct BTLVNode *pxChild);
 455 
 456 
 464 TLV_UTIL_INTERFACE void vBTLVWipeAndClear(struct BTLVNode *pxNode) __attribute ((deprecated));
 465 
 466 
 475 TLV_UTIL_INTERFACE void vBTLVWipeAndRemoveNode(struct BTLVNode *pxNode) __attribute ((deprecated));
 488 TLV_UTIL_INTERFACE void vBTLVSetWipeCallback(void(*cb)(void *,unsigned));
 489 
 490 #ifdef __cplusplus
 491 }
 492 #endif
 493 
 494 #ifndef TLV_UTIL_COMPILE
 495 # undef TLV_UTIL_INTERFACE
 496 #endif
 497 
 498 #endif
```
