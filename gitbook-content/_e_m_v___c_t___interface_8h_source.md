---
hidden: true
title: EMV_CT_Interface.h
---

<a href="_e_m_v___c_t___interface_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: ADK Cards Service - EMV Contact (CT)
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: Client (structure) interface - functions and definitions
 6 ****************************************************************************/
 7 
 14 #ifndef _EMV_CT_INTERFACE_H_ /* avoid double interface-includes */
 15 #define _EMV_CT_INTERFACE_H_
 16 
 17 #ifdef __cplusplus
 18 extern "C" {
 19 #endif
 20 
 21 #include "emv/EMV_Common_Interface.h"
 22 #include "EMV_CT_Link.h"
 23 #include "EMV_CT_Version.h"
 24 
 25 #define DLL_CTC // no client shared libraries anymore
 26 
 27 
 28 // ========================================================================================================
 29 // === COMMON PART ===
 30 // ========================================================================================================
 31 
 32 
 35 typedef struct EMV_CT_APPLI_STRUCT
 36 {
 37  unsigned char aidlen;
 38  unsigned char AID[16];
 39 } EMV_CT_APPLI_TYPE;
 40 
 45 typedef struct EMV_CT_CANDIDATE_STRUCT
 46 {
 47  EMV_CT_APPLI_TYPE candidate;
 48  unsigned char name[17];
 49 } EMV_CT_CANDIDATE_TYPE;
 50 
 51 #define EMV_CT_SUPPORTED_SIZE_9F0A 50 
 52 
 53 typedef struct EMV_CT_CANDIDATE_DATA_STRUCT
 58 {
 59  unsigned char API;
 60  unsigned char CodeTableIndex;
 61  unsigned char IIN[4];
 62  unsigned char IBAN[35];
 63  unsigned char BIC[12];
 64  unsigned char country2[2];
 65  unsigned char country3[3];
 66  unsigned char len9F06;
 67  unsigned char DF62_ASF[33];
 68  unsigned char selData[1+EMV_CT_SUPPORTED_SIZE_9F0A];
 69 } EMV_CT_CANDIDATE_DATA_TYPE;
 70 
 72 #define EMV_CT_COMMON_CANDS 10 
 73 
 74 typedef struct EMV_CT_DOL_STRUCT
 77 {
 78  unsigned char dollen;
 79  unsigned char DOL[EMV_ADK_MAX_LG_DDOL];
 80 } EMV_CT_DOL_TYPE;
 81 
 84 typedef struct EMV_CT_TRACK2_STRUCT
 85 {
 86  unsigned char tr2len;
 87  unsigned char tr2data[19];
 88 } EMV_CT_TRACK2_TYPE;
 89 
 92 typedef struct EMV_CT_CRDNAME_STRUCT
 93 {
 94  unsigned char crdNameLen;
 95  unsigned char crdName[26];
 96 } EMV_CT_CRDNAME_TYPE;
 97 
 100 typedef struct EMV_CT_ICCRND_STRUCT
 101 {
 102  unsigned char iccRNDLen;
 103  unsigned char iccRND[8];
 104 } EMV_CT_ICCRND_TYPE;
 105 
 108 typedef struct EMV_CT_ISSDATA_STRUCT
 109 {
 110  unsigned char issDataLen;
 111  unsigned char issData[32];
 112 } EMV_CT_ISSDATA_TYPE;
 113 
 114 
 118 
 122 #define EMV_CT_PIN_INPUT_ONLINE 0 
 123 #define EMV_CT_PIN_INPUT_PLAIN 1 
 124 #define EMV_CT_PIN_INPUT_ENCIPHERED 2 
 125 #define EMV_CT_PIN_INPUT_PLAIN_EXT 3 
 126 #define EMV_CT_PIN_INPUT_ENCIPHERED_EXT 4 
 127 #define EMV_CT_CVM_CUSTOM 5 
 128 
 130 
 135 #define EMV_CT_PIN_INPUT_OKAY 0 
 136 #define EMV_CT_PIN_INPUT_COMM_ERR 1 
 137 #define EMV_CT_PIN_INPUT_ABORT 2 
 138 #define EMV_CT_PIN_INPUT_BYPASS 3 
 139 #define EMV_CT_PIN_INPUT_TIMEOUT 4 
 140 #define EMV_CT_PIN_INPUT_OTHER_ERR 5 
 141 #define EMV_CT_PIN_UNCRIT_TIMEOUT 6 
 142 
 144 
 149 #define EMV_CT_EMV_0 0x00 
 150 #define EMV_CT_EMV_1 0x01 
 151 #define EMV_CT_NON_EMV 0xFF 
 152 
 154 
 155 // ========================================================================================================
 156 // === Transaction Information ===
 157 // ========================================================================================================
 158 
 163 
 169  #define EMV_ADK_INF_INIT 0x80 
 170  #define EMV_ADK_INF_SEL_TERMDATA 0x81 
 171  #define EMV_ADK_INF_SEL_TEXTE 0x82 
 172  #define EMV_ADK_INF_SEL_PAYINIT_OK 0x83 
 173  #define EMV_ADK_INF_SEL_CHECK_OK 0x85 
 174  #define EMV_ADK_INF_SEL_BUILD_APPLI_LIST 0x86 
 175  #define EMV_ADK_INF_SEL_ANOTHER 0x87 
 176  #define EMV_ADK_INF_SEL_FINAL 0x88 
 177  #define EMV_ADK_INF_SEL_NO 0x89 
 178  #define EMV_ADK_INF_SEL_FINISH_OK 0x8A 
 179  #define EMV_ADK_INF_SEL_BLOCK_APPLI 0x8B 
 180  #define EMV_ADK_INF_SEL_BLOCK_CARD 0x8C 
 181  #define EMV_ADK_INF_SEL_LOA_PROC 0x8D 
 182  #define EMV_ADK_INF_SEL_UI_LOA_PROC 0x8E 
 183  #define EMV_ADK_INF_TRANS_CHECK_OK 0x91 
 184  #define EMV_ADK_INF_TRANS_READ_TERM 0x92 
 185  #define EMV_ADK_INF_TRANS_READ_APPLI 0x93 
 186  #define EMV_ADK_INF_TRANS_SEL_LANG 0x95 
 187  #define EMV_ADK_INF_TRANS_CONF_AMOUNT 0x96 
 188  #define EMV_ADK_INF_TRANS_INITIATE 0x97 
 189  #define EMV_ADK_INF_TRANS_READ_CARD_DATA 0x98 
 190  #define EMV_ADK_INF_TRANS_CHECK_APPLI_DATA 0x99 
 191  #define EMV_ADK_INF_TRANS_PROC_RESTRICTION 0x9A 
 192  #define EMV_ADK_INF_TRANS_CARD_AUTH 0x9B 
 193  #define EMV_ADK_INF_TRANS_VERIFY 0x9C 
 194  #define EMV_ADK_INF_TRANS_RISK 0x9D 
 195  #define EMV_ADK_INF_TRANS_AAT 0x9E 
 196  #define EMV_ADK_INF_TRANS_1GENAC 0x9F 
 197  #define EMV_ADK_INF_TRANS_VERIFY_CARD 0xA0 
 198  #define EMV_ADK_INF_TRANS_VERIFY_ABANDON 0xA1 
 199  #define EMV_ADK_INF_TRANS_VERIFY_OTHER 0xA2 
 200  #define EMV_ADK_INF_TRANS_VERIFY_ONLINE 0xA3 
 201  #define EMV_ADK_INF_TRANS_VERIFY_NOK 0xA4 
 202  #define EMV_ADK_INF_TRANS_VERIFY_OK 0xA5 
 203  #define EMV_ADK_INF_TRANS_VERIFY_SIGNATURE 0xA6 
 204  #define EMV_ADK_INF_TRANS_1CRYPT_TC 0xA7 
 205  #define EMV_ADK_INF_TRANS_1CRYPT_ARQC_CDA 0xA8 
 206  #define EMV_ADK_INF_TRANS_1CRYPT_ARQC_OTHER 0xA9 
 207  #define EMV_ADK_INF_TRANS_1CRYPT_AAC 0xAA 
 208  #define EMV_ADK_INF_TRANS_1CRYPT_AAR 0xAB 
 209  #define EMV_ADK_INF_TRANS_1CRYPT_UNKNOWN 0xAC 
 210  #define EMV_ADK_INF_ONL_CHECK_OK 0xB1 
 211  #define EMV_ADK_INF_ONL_FALSE 0xB3 
 212  #define EMV_ADK_INF_ONL_TRUE 0xB4 
 213  #define EMV_ADK_INF_ONL_PIN 0xB5 
 214  #define EMV_ADK_INF_ONL_HOST_AUTH 0xB6 
 215  #define EMV_ADK_INF_ONL_CRIT_SC 0xB7 
 216  #define EMV_ADK_INF_ONL_AC 0xB8 
 217  #define EMV_ADK_INF_ONL_2GENAC 0xB9 
 218  #define EMV_ADK_INF_ONL_UNCRIT_SC 0xBA 
 219  #define EMV_ADK_INF_TRANS_VERIFY_PARAM 0xBB 
 220  #define EMV_ADK_INF_FETCH_TXN_TAG_DATA 0xBC 
 221 
 223 
 228  #define EMV_ADK_STEP_01 1 
 229  #define EMV_ADK_STEP_02 2 
 230  #define EMV_ADK_STEP_03 3 
 231  #define EMV_ADK_STEP_04 4 
 232  #define EMV_ADK_STEP_05 5 
 233  #define EMV_ADK_STEP_06 6 
 234  #define EMV_ADK_STEP_07 7 
 235  #define EMV_ADK_STEP_08 8 
 236  #define EMV_ADK_STEP_09 9 
 237  #define EMV_ADK_STEP_10 10 
 238  #define EMV_ADK_STEP_11 11 
 239  #define EMV_ADK_STEP_12 12 
 240  #define EMV_ADK_STEP_13 13 
 241  #define EMV_ADK_STEP_14 14 
 242  #define EMV_ADK_STEP_15 15 
 243  #define EMV_ADK_STEP_16 16 
 244  #define EMV_ADK_STEP_17 17 
 245  #define EMV_ADK_STEP_18 18 
 246  #define EMV_ADK_STEP_19 19 
 247  #define EMV_ADK_STEP_20 20 
 248  #define EMV_ADK_STEP_21 21 
 249  #define EMV_ADK_STEP_22 22 
 250  #define EMV_ADK_STEP_23 23 
 251  #define EMV_ADK_STEP_24 24 
 252  #define EMV_ADK_STEP_25 25 
 253  #define EMV_ADK_STEP_26 26 
 254  #define EMV_ADK_STEP_27 27 
 255  #define EMV_ADK_STEP_28 28 
 256  #define EMV_ADK_STEP_29 29 
 257  #define EMV_ADK_STEP_30 30 
 258 
 260 
 264  #define EMV_ADK_DF62_ERR_POS1_CHIP_RESET 0x1000u 
 265  #define EMV_ADK_DF62_ERR_POS1_SEL_LIST_AID 0x2000u 
 266  #define EMV_ADK_DF62_ERR_POS1_SEL_LIST_PSE 0x2100u 
 267  #define EMV_ADK_DF62_ERR_POS1_READ_LIST_PSE 0x2200u 
 268  #define EMV_ADK_DF62_ERR_POS1_SEL_FINAL 0x3000u 
 269  #define EMV_ADK_DF62_ERR_POS1_GPO 0x4000u 
 270  #define EMV_ADK_DF62_ERR_POS1_READ 0x5000u 
 271  #define EMV_ADK_DF62_ERR_POS1_INT_AUTH 0x6000u 
 272  #define EMV_ADK_DF62_ERR_POS1_GETDATA_PTC 0x7001u 
 273  #define EMV_ADK_DF62_ERR_POS1_GETCHALLENGE 0x7100u 
 274  #define EMV_ADK_DF62_ERR_POS1_VERIFY_ENC_PIN 0x7210u 
 275  #define EMV_ADK_DF62_ERR_POS1_VERIFY_PLAIN_PIN 0x7220u 
 276  #define EMV_ADK_DF62_ERR_POS1_GETDATA_ATC 0x8001u 
 277  #define EMV_ADK_DF62_ERR_POS1_GETDATA_LOATC 0x8002u 
 278  #define EMV_ADK_DF62_ERR_POS1_GENAC_1 0x9001u 
 279  #define EMV_ADK_DF62_ERR_POS1_GENAC_1_CDA 0x9011u 
 280  #define EMV_ADK_DF62_ERR_POS1_EXTAUTH 0xA000u 
 281  #define EMV_ADK_DF62_ERR_POS1_CRIT_SCRIPT 0xB100u 
 282  #define EMV_ADK_DF62_ERR_POS1_GENAC_2 0x9002u 
 283  #define EMV_ADK_DF62_ERR_POS1_GENAC_2_CDA 0x9012u 
 284  #define EMV_ADK_DF62_ERR_POS1_NON_CRIT_SCRIPT 0xB200u 
 285 
 287 
 291  #define EMV_ADK_DF62_ERR_POS2_TRANSPORT_LAYER 0x0000u 
 292  #define EMV_ADK_DF62_ERR_POS2_BASE_ERROR 0x0001u 
 293  #define EMV_ADK_DF62_ERR_POS2_RAPDU 0xFFFFu 
 294 // EMV_ADK_DF62_ERR_POS2_XXXX XXXX // SW1 SW2 of R-APDU
 295 
 297 
 301  #define EMV_ADK_DF62_ERR_POS3_CHIPCARD 0x01 
 302  #define EMV_ADK_DF62_ERR_POS3_TERMINAL 0x02 
 303  #define EMV_ADK_DF62_ERR_POS3_ACQUIRER 0x03 
 304  #define EMV_ADK_DF62_ERR_POS3_CARDHOLDER 0x04 
 305 
 307 
 319  #define EMV_ADK_DF62_ERR_POS7_ABORT 0x01 
 320  #define EMV_ADK_DF62_ERR_POS7_MAG_FALLBACK 0x02 
 321 
 323 
 324 
 325 // ========================================================================================================
 326 // === TERMINAL CONFIGURATION ===
 327 // ========================================================================================================
 328 
 331 typedef struct EMV_CT_TERMDATA_STRUCT /* === EMV_CT_TERMDATA_TYPE === */
 332 {
 333  unsigned char TermTyp;
 334  unsigned char TermCountryCode[2];
 335  unsigned char TermCap[3];
 336  unsigned char TermAddCap[5];
 337  unsigned char TermIdent[8];
 338  unsigned char CurrencyTrans[2];
 339  unsigned char ExpTrans;
 340  unsigned char SuppLang[EMV_ADK_MAX_LANG];
 341  unsigned char IFDSerialNumber[8];
 342 
 343  char KernelVersion[EMV_ADK_VERSION_ASCII_SIZE];
 344  char FrameworkVersion[EMV_ADK_VERSION_ASCII_SIZE];
 345  char L1DriverVersion[EMV_ADK_VERSION_ASCII_SIZE];
 346 
 347  unsigned char Info_Included_Data[8];
 348 } EMV_CT_TERMDATA_TYPE;
 349 
 350 
 355 /* Byte 1 */
 356 #define EMV_CT_INPUT_TRM_TYPE 0x01 
 357 #define EMV_CT_INPUT_TRM_CURRENCY 0x02 
 358 #define EMV_CT_INPUT_TRM_EXP_CURRENCY 0x04 
 359 #define EMV_CT_INPUT_TRM_COUNTRY_CODE 0x08 
 360 #define EMV_CT_INPUT_TRM_CAPABILITIES 0x10 
 361 #define EMV_CT_INPUT_TRM_ADD_CAPS 0x20 
 362 #define EMV_CT_INPUT_TRM_ID 0x40 
 363 /* Byte 2 */
 364 #define EMV_CT_INPUT_TRM_LANGUAGES 0x01 
 365 #define EMV_CT_INPUT_TRM_IFD_SERIAL 0x02 
 366 #define EMV_CT_INPUT_TRM_KERNEL_VERSION 0x04 
 367 #define EMV_CT_INPUT_TRM_FRAMEWORK_VERSION 0x08 
 368 #define EMV_CT_INPUT_TRM_L1DRIVER_VERSION 0x10 
 369 
 371 
 372 // ========================================================================================================
 373 // === APPLICATION CONFIGURATION ===
 374 // ========================================================================================================
 375 
 376 
 381 #define EMV_CT_PROCESS_TACIAC_DEFAULT_BEFORE 0x00 
 382 #define EMV_CT_PROCESS_TACIAC_DEFAULT_AFTER 0x01 
 383 
 385 
 398 #define EMV_CT_CHECKSUM_DEFAULT "\x00\x00\x00\x00\x00" 
 399 
 400 /* Byte 1 */
 401 #define EMV_CT_CHECKSUM_INCLUDE_VERSION 0x01 
 402 #define EMV_CT_CHECKSUM_TRANSACTION_LOG 0x02 
 403 #define EMV_CT_CHECKSUM_EXCEPTION_FILE 0x04 
 404 #define EMV_CT_CHECKSUM_FORCE_ONLINE 0x08 
 405 #define EMV_CT_CHECKSUM_FORCE_ACCEPTANCE 0x10 
 406 #define EMV_CT_CHECKSUM_SUPPORT_ONL_DATA_CAPTURE 0x20 
 407 #define EMV_CT_CHECKSUM_SUPPORT_PSE 0x40 
 408 #define EMV_CT_CHECKSUM_ACCOUNT_TYPE 0x80 
 409 
 410 /* Byte 2 */
 411 #define EMV_CT_CHECKSUM_SUPPORT_ADVICES 0x01 
 412 #define EMV_CT_CHECKSUM_SUPPORT_CARDHOLDER_CONF 0x02 
 413 #define EMV_CT_CHECKSUM_PIN_BYPASS 0x04 
 414 #define EMV_CT_CHECKSUM_SUPPORT_DEFAULT_TDOL 0x08 
 415 #define EMV_CT_CHECKSUM_SUPPORT_BATCH_DATA_CAPTURE 0x10 
 416 #define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_ISS 0x20 
 417 #define EMV_CT_CHECKSUM_SUPPORT_VOICE_REF_CARD 0x40 
 418 #define EMV_CT_CHECKSUM_MULTILANG_SUPPORT 0x80 
 419 
 420 // Byte 3
 421 #define EMV_CT_CHECKSUM_PIN_BYPASS_ONCE 0x01 
 422 
 424 #define EMV_CT_MAX_NO_OF_NON_EMVCO_TAGS 20 
 429 
 431 #define EMV_CT_MAX_TAGLIST_SIZE 20 
 432 #define EMV_CT_MAX_APP_VERS 10
 433 
 435 typedef struct EMV_CT_TAGLIST_STRUCT
 436 {
 437  unsigned char anztag;
 438  unsigned short tags[EMV_CT_MAX_TAGLIST_SIZE];
 439 } EMV_CT_TAGLIST_TYPE;
 440 
 444 typedef struct EMV_CT_APPLIDATA_STRUCT // EMV_CT_APPLIDATA_TYPE
 445 {
 446  // *** EMVCo mandatory data ***
 447  unsigned char VerNum[2];
 448  unsigned char AppName[16+1];
 449  unsigned char ASI;
 450  unsigned char BrKey[2];
 451  unsigned char TermIdent[8];
 452  unsigned char FloorLimit[4];
 453  unsigned char Threshhold[4];
 454  unsigned char TargetPercentage;
 455  unsigned char MaxTargetPercentage;
 456  unsigned char TACDenial[5];
 457  unsigned char TACOnline[5];
 458  unsigned char TACDefault[5];
 459  unsigned char EMV_Application;
 460  EMV_CT_DOL_TYPE Default_TDOL;
 461  EMV_CT_DOL_TYPE Default_DDOL;
 462  unsigned char MerchIdent[15];
 463  unsigned char CDAProcessing;
 464  unsigned char ACBeforeAfter;
 465  unsigned char AIP_CVM_not_supported;
 466  unsigned char POS_EntryMode;
 467  unsigned char Additional_Versions_No[2*EMV_CT_MAX_APP_VERS];
 468  unsigned char Security_Limit[4];
 469 
 470  unsigned char App_FlowCap[5];
 471 
 472  // Options for further development:
 473  // * define limits for AIDs, e.g. use this AID from 0$ to 100$ and another AID from 50$ to 1000$, ... to enable optimizing interchange fees for the customers
 474 
 475  // *** optional data (range 9F50 - 9F7F) ***
 476  unsigned char Additional_Tags_TRM[EMV_ADK_ADD_TAG_SIZE];
 477  EMV_CT_DOL_TYPE Additional_Tags_CRD;
 478  EMV_CT_TAGLIST_TYPE Mandatory_Tags_CRD;
 479 
 480  // Terminal data per AID, enables virtual terminals per AID, duplicated from terminal wide parameters, the terminal wide is used if not available
 481  unsigned char App_TermCap[3];
 482  unsigned char Capabilities_belowLimit[3];
 483  unsigned char App_CountryCodeTerm[2];
 484  unsigned char App_TermAddCap[5];
 485  unsigned char App_TermTyp;
 486 
 487  // parameters for domestic / local application selection and processing handling
 488  EMV_CT_APPLI_TYPE xAIDPrio[EMV_ADK_MAX_PRIO_APP];
 489  unsigned char tucFallbackMIDs[EMV_ADK_MAX_CHP_TO_MSR];
 490  unsigned char xuc_Special_TRX[8];
 491  unsigned char uc_FallBack_Handling;
 492  unsigned char Customer_CVM;
 493 
 494  unsigned char Chksum_Params[5];
 495  char ChksumASCIIEMVCO[EMV_ADK_CHECKSUM_ASCII_SIZE];
 496 
 497  EMV_CT_APPLI_TYPE MasterAID;
 498  unsigned char TxnTypesSale[3];
 499  unsigned char TxnTypesCash[3];
 503  unsigned char TxnTypesCashback[3];
 505  unsigned char TxnTypesRefund[3];
 507  unsigned char DataContainerReadIds[89];
 509  unsigned char DataContainerReadRanges[89];
 510 
 511  unsigned char Info_Included_Data[8];
 512 } EMV_CT_APPLIDATA_TYPE;
 513 
 514 
 519 /* Byte 1 */
 520 #define EMV_CT_INPUT_APL_VERSION 0x01 
 521 #define EMV_CT_INPUT_APL_NAME 0x02 
 522 #define EMV_CT_INPUT_APL_ASI 0x04 
 523 #define EMV_CT_INPUT_APL_MERCHANT_CATCODE 0x08 
 524 #define EMV_CT_INPUT_APL_TID 0x10 
 525 #define EMV_CT_INPUT_APL_FLOOR_LIMIT 0x20 
 526 #define EMV_CT_INPUT_APL_THRESH 0x40 
 527 #define EMV_CT_INPUT_APL_TARGET 0x80 
 528 /* Byte 2 */
 529 #define EMV_CT_INPUT_APL_MAXTARGET 0x01 
 530 #define EMV_CT_INPUT_APL_TAC_DENIAL 0x02 
 531 #define EMV_CT_INPUT_APL_TAC_ONLINE 0x04 
 532 #define EMV_CT_INPUT_APL_TAC_DEFAULT 0x08 
 533 #define EMV_CT_INPUT_APL_TDOL 0x10 
 534 #define EMV_CT_INPUT_APL_DDOL 0x20 
 535 #define EMV_CT_INPUT_APL_MERCHANT_IDENT 0x40 
 536 #define EMV_CT_INPUT_APL_ADD_TAGS 0x80 
 537 /* Byte 3 */
 538 #define EMV_CT_INPUT_APL_MAND_TAGS 0x01 
 539 #define EMV_CT_INPUT_APL_TERM_CAPS 0x02 
 540 #define EMV_CT_INPUT_APL_FLOW_CAPS 0x04 
 541 #define EMV_CT_INPUT_APL_AIP_CVM_NOTSUPP 0x08 
 542 #define EMV_CT_INPUT_APL_COUNTRY_CODE 0x10 
 543 #define EMV_CT_INPUT_APL_ADD_TERM_CAPS 0x20 
 544 #define EMV_CT_INPUT_APL_PRIO_APPS 0x40 
 545 #define EMV_CT_INPUT_APL_MID 0x80 
 546 /* Byte 4 */
 547 #define EMV_CT_INPUT_APL_EMV_APPKIND 0x01 
 548 #define EMV_CT_INPUT_APL_SPECIAL_TXN 0x02 
 549 #define EMV_CT_INPUT_APL_FALLBACK 0x04 
 550 #define EMV_CT_INPUT_APL_CDA 0x08 
 551 #define EMV_CT_INPUT_APL_AC_BEFOREAFTER 0x10 
 552 #define EMV_CT_INPUT_APL_POS_ENTRY 0x20 
 553 #define EMV_CT_INPUT_APL_TRM_TYPE 0x40 
 554 #define EMV_CT_INPUT_APL_CUSTOMER_CVM 0x80 
 555 /* Byte 5 */
 556 #define EMV_CT_INPUT_APL_CHECKSUM_PARAMS 0x01 
 557 #define EMV_CT_INPUT_APL_CHECKSUM 0x02 
 558 #define EMV_CT_INPUT_APL_MASTER_AID 0x04 
 559 #define EMV_CT_INPUT_APL_ADD_CRD_TAGS 0x08 
 560 #define EMV_CT_INPUT_APL_ADD_VERSIONS 0x10 
 561 #define EMV_CT_INPUT_APL_SEC_LIMIT 0x20 
 562 #define EMV_CT_INPUT_APL_SEC_CAPS 0x40 
 563 // free bit 0x80
 564 
 565 // byte 6, EMV_CT_APPLIDATA_STRUCT::Info_Included_Data[5]
 566 #define EMV_CT_INPUT_APL_TXN_TYPES_SALE 0x01 
 567 #define EMV_CT_INPUT_APL_TXN_TYPES_CASH 0x02 
 568 #define EMV_CT_INPUT_APL_TXN_TYPES_CASHBACK 0x04 
 569 #define EMV_CT_INPUT_APL_TXN_TYPES_REFUND 0x08 
 570 #define EMV_CT_INPUT_APL_DCR_LIST_IDS 0x10 
 571 #define EMV_CT_INPUT_APL_DCR_LIST_RANGES 0x20 
 572 
 574 
 579 #define CVM_CONTINUE 0x00 
 580 #define CVM_DEFAULT_SIGN 0x01 
 581 #define CVM_DEFAULT_ONLINE_PIN 0x02 
 582 #define CVM_ABORT 0x03 
 583 
 585 
 590 /* Byte 1 */
 591 #define FORCE_RISK_MANAGEMENT 0x01 
 592 #define BLACKLIST 0x02 
 593 #define TRANSACTION_LOG 0x04 
 594 #define PIN_BYPASS 0x08 
 595 #define FORCE_ONLINE 0x10 
 596 #define FORCE_ACCEPTANCE 0x20 
 597 /* Byte 2 */
 598 #define CASH_SUPPORT 0x01 
 599 #define CASHBACK_SUPPORT 0x02 
 600 #define EMV_CT_CHECK_INCONS_TRACK2_PAN 0x04 
 601 #define EMV_CT_CONF_AMOUNT_PIN 0x08 
 602 #define EMV_CT_DOMESTIC_CHECK 0x10 
 603 #define TRANSACTION_TYPE_17_FOR_CASH 0x20 
 604 #define EMV_CT_CHECK_INCONS_TRACK2_NO_EXP 0x40 
 608 #define TRANSACTION_TYPE_30_FOR_PREAUTH 0x80 
 609 /* Byte 3 */
 613 #define REFERRAL_AFTER_TRX 0x01 
 614 #define DCC_CHECK 0x02 
 615 #define REFUND_CONFIRM_AMOUNT 0x04 
 616 #define EMV_CT_USE_CFG_APPL_NAME 0x08 
 617 #define EMV_CT_FALLBACK_ON_INCONS_TRACK2 0x10 
 618 #define EMV_CT_AMOUNT_CONFIRM_ON_SIGNATURE 0x20 
 619 #define EMV_CT_SDA_SELECTED_TVR_ON 0x40 
 620 #define EMV_CASHBACK_OFFLINE_SUPPORT 0x80 
 621 /* Byte 4 */
 622 #define REFUND_PROCESSING_RESTRICTIONS 0x01 
 623 #define REFUND_NO_GENERATE_AC 0x02 
 624 #define REFUND_FLOW_INTERAC 0x04 
 625 #define REFUND_NO_ZERO_AMOUNT 0x08 
 626 #define DPAS_DATA_STORAGE_SUPPORT 0x10 
 627 #define DPAS_EXTENDED_LOGGING_SUPPORT 0x20 
 628 #define DPAS_CDCVM_SUPPORT 0x40 
 629 #define APP_FLOW_VISA_QUASI_CASH 0x80 
 630 /* Byte 5 */
 631 #define APP_FLOW_CASHBACK_TRANS_TYPE_00 0x01 
 632 #define REFUND_FLOW_ARQC 0x02 
 635 
 637 
 642 #define CDA_EMV_MODE_1 0 
 643 #define CDA_EMV_MODE_2 1 
 644 #define CDA_EMV_MODE_3 2 
 645 #define CDA_EMV_MODE_4 3 
 646 
 648 #define FB_DEFAULT_EMVCO 0x00 
 653 #define FB_GERMAN_POS_SPEC 0x01 
 654 #define FB_NO_UNATTENDED_FALLB 0x80 
 655 
 657 
 658 
 659 
 660 // ========================================================================================================
 661 // === EMV TRANSACTION DATA ===
 662 // ========================================================================================================
 663 
 668 typedef struct EMV_CT_DOM_CHIP_STRUCT
 669 {
 670  EMV_CT_APPLI_TYPE xAIDChip;
 671  unsigned char ucAppName[16+1];
 672  unsigned char ucASI;
 673  unsigned char xuc_Special_TRX[8];
 674  unsigned char uc_EMVConformSelect;
 676 } EMV_CT_DOM_CHIP_TYPE;
 679 
 680 
 684 typedef struct EMV_CT_FALLBCK_MSR_STRUCT
 685 {
 686  unsigned char xMID;
 687  unsigned char xuc_Special_TRX[8];
 688  unsigned char ucFallback;
 691  unsigned char ucOptions;
 692 } EMV_CT_FALLBCK_MSR_TYPE;
 693 
 694 
 700 typedef struct EMV_CT_PAYMENT_STRUCT
 701 {
 702  unsigned char Amount[6];
 703  unsigned char CurrencyTrans[2];
 706  unsigned char ExpTrans;
 709  unsigned char Date[3];
 712  unsigned char Time[3];
 714  unsigned char TransCount[4];
 716  unsigned char Cashback_Amount[6];
 718  unsigned char Force_Online;
 725  unsigned char Force_Acceptance;
 727  unsigned char Online_Switch;
 729  unsigned char uc_AccountType;
 731  char PreSelected_Language;
 733  unsigned char uc_AmountConfirmation;
 735  EMV_CT_TAGLIST_TYPE Additional_Result_Tags;
 738 } EMV_CT_PAYMENT_TYPE;
 739 
 740 
 744 typedef struct EMV_CT_APPS_SELECT_STRUCT
 745 {
 746  unsigned char No_DirectorySelect;
 747  char ucCardholderConfirmation;
 749  EMV_CT_APPLI_TYPE ExcludeEmvAIDs[3];
 751  unsigned char countDomesticChip;
 753  EMV_CT_DOM_CHIP_TYPE xDomestic_Chip[EMV_ADK_MAX_DOM_CHP];
 755  unsigned char countFallbackMS;
 757  EMV_CT_FALLBCK_MSR_TYPE xFallback_MS[EMV_ADK_MAX_FB_MSR];
 759  unsigned char countCommonCands;
 762  unsigned char ModifiedCandidates[EMV_CT_COMMON_CANDS];
 765 } EMV_CT_APPS_SELECT_TYPE;
 768 
 769 
 770 
 771 // ========================================================================================================
 772 // === APPLICATION SELECTION ===
 773 // ========================================================================================================
 774 
 779 #define FB_NEVER 0x00 
 780 #define FB_CHIP_APP 0x01 
 781 #define FB_APP 0x02 
 782 #define FB_CHIP 0x03 
 783 #define FB_ALWAYS 0x04 
 784 
 786 #define FB_OPT_CASHBACK 0x01 
 791 
 793 
 796 typedef struct EMV_CT_SELECT_STRUCT // EMV_CT_SELECT_TYPE
 797 {
 798  unsigned char InitTXN_Buildlist;
 799  unsigned char TransType;
 803  EMV_CT_PAYMENT_TYPE TXN_Data;
 808  EMV_CT_APPS_SELECT_TYPE SEL_Data;
 811  unsigned char TxnOptions[5];
 812  unsigned char TxnSteps[3];
 814  unsigned char Info_Included_Data[8];
 816 } EMV_CT_SELECT_TYPE;
 817 
 818 
 823 /* Byte 1 */
 824 #define INPUT_SEL_AMOUNT 0x01 
 825 #define INPUT_SEL_AMOUNT_CURRENCY 0x02 
 826 #define INPUT_SEL_CUREXPONENT 0x04 
 827 #define INPUT_SEL_DATE 0x08 
 828 #define INPUT_SEL_TIME 0x10 
 829 #define INPUT_SEL_TTYPE 0x20 
 830 #define INPUT_SEL_EXCLUDE_AID 0x40 
 831 #define INPUT_SEL_BUILDLIST 0x80 
 832 /* Byte 2 */
 833 #define INPUT_SEL_FORCE_ONLINE 0x01 
 834 #define INPUT_SEL_FORCE_ACCEPT 0x02 
 835 #define INPUT_SEL_NO_PSE 0x04 
 836 #define INPUT_SEL_CARDCONF 0x08 
 837 #define INPUT_SEL_ONLINE_SWITCH 0x10 
 838 #define INPUT_SEL_TXN_OPTIONS 0x20 
 839 #define INPUT_SEL_DOMCHIP 0x40 
 840 #define INPUT_SEL_FALLBACK_MSR 0x80 
 841 /* Byte 3 */
 842 #define INPUT_SEL_TXN_COUNTER 0x01 
 843 #define INPUT_SEL_TXN_STEPS 0x02 
 844 #define INPUT_SEL_CB_AMOUNT 0x04 
 845 #define INPUT_SEL_ACCOUNT_TYPE 0x08 
 846 #define INPUT_SEL_LANGUAGE 0x10 
 847 #define INPUT_SEL_AMOUNT_CONF 0x20 
 848 #define INPUT_SEL_ADD_TAGS 0x40 
 849 #define INPUT_SEL_MOD_CANDLIST 0x80 
 850 
 851 
 853 
 858 #define CARD_CONF_YES 0x00 
 859 #define CARD_CONF_NO 0x01 
 860 
 862 
 867 #define REUSE_LIST_REMOVE_AID 0x00 
 868 #define BUILD_NEW 0x01 
 869 
 870 #define REUSE_EXISTING_LIST_SEL_0 0xF0 
 871 #define REUSE_EXISTING_LIST_SEL_1 0xF1 
 872 #define REUSE_EXISTING_LIST_SEL_2 0xF2 
 873 #define REUSE_EXISTING_LIST_SEL_3 0xF3 
 874 #define REUSE_EXISTING_LIST_SEL_4 0xF4 
 875  // continues up to 0xFF for up to 15 candidates
 876 
 878 
 881 typedef struct EMV_CT_SELECTRES_STRUCT
 882 {
 883  EMV_CT_APPLI_TYPE T_84_DFName;
 884  unsigned char AppName[16+1];
 885  unsigned char T_50_ApplicationName[16+1];
 886  unsigned char T_9F11_CodeTable;
 887  unsigned char T_9F12_PreferredName[16+1];
 888  unsigned char T_5F2D_Lang_Pref[8+1];
 889  unsigned char T_DF62_ErrorData[15];
 890  unsigned char T_DF63_DisplayText;
 891  unsigned char countFallbackMS;
 892  EMV_CT_FALLBCK_MSR_TYPE xFallback_MS[EMV_ADK_MAX_FB_MSR];
 893  unsigned char PDOL_tags;
 894 
 895  EMV_CT_CANDIDATE_TYPE T_BF04_Candidates[EMV_CT_COMMON_CANDS];
 896  EMV_CT_APPLI_TYPE T_DF04_Aidselected;
 897 
 898  unsigned char T_DF61_Info_Received_Data[8];
 899 } EMV_CT_SELECTRES_TYPE;
 900 
 901 #define EMV_SELECTRES_PDOL_TAG_TRANSTYPE 0x20 
 902 #define EMV_SELECTRES_PDOL_TAG_ACCOUNTTYPE 0x40 
 903 #define EMV_SELECTRES_PDOL_TAG_AMOUNT 0x80 
 904 
 905 // byte 1 (T_DF61_Info_Received_Data[0])
 910 #define DF61_SEL_DF62_ERRORDATA 0x01 
 911 #define DF61_SEL_AGREED_APPNAME 0x02 
 912 #define DF61_SEL_50_APPLICATION_NAME 0x04 
 913 #define DF61_SEL_9F11_CODE_TABLE 0x08 
 914 #define DF61_SEL_5F2D_LANG_PREF 0x10 
 915 #define DF61_SEL_84_DF_NAME 0x20 
 916 #define DF61_SEL_9F12_PREF_NAME 0x40 
 917 #define DF61_SEL_9F63_DISPTXT 0x80 
 918 // byte 2 (T_DF61_Info_Received_Data[1])
 919 #define DF61_SEL_MID_DATA 0x01 
 920 #define DF61_SEL_PDOL 0x02 
 921 #define DF61_SEL_AID 0x04 
 922 #define DF61_SEL_CANDIDATES 0x08 
 923 
 925 
 926 
 927 // ========================================================================================================
 928 // === TRANSACTION EXECUTION ===
 929 // ========================================================================================================
 930 
 935  // byte 1 (TxnOptions[0])
 936  #define EMV_CT_SELOP_CBCK_APPLI_SEL 0x01 
 937  #define EMV_CT_SELOP_RESERV_ALLOW_B_ON_A 0x02 
 938  #define EMV_CT_SELOP_CBCK_DOMESTIC_APPS 0x04 
 939  #define EMV_CT_SELOP_ADDALL 0x08 
 940  #define EMV_CT_SELOP_ADDBLO 0x10 
 941  #define EMV_CT_NO_LONGEST_AID_MATCH 0x20 
 942  #define EMV_CT_ALLOW_BLOCKED 0x40 
 943  #define EMV_CT_SELOP_REMOVEALL_BUT_EXCLUDED 0x80 
 944  // byte 2 (TxnOptions[1])
 945  #define EMV_CT_TRXOP_PIN_BYPASS_NO_SUBSEQUENT 0x01 
 946  #define EMV_CT_TRXOP_MULTIPLE_RANDOM_NUMBERS 0x02 
 947  #define EMV_CT_TRXOP_DCC_CALLBACK 0x04 
 948  #define EMV_CT_TRXOP_DCC_CALLBACK_ALWAYS 0x08 
 951  #define EMV_CT_TRXOP_NO_FALLBACK_AFTER_CVM 0x10 
 952  #define EMV_CT_TRXOP_AMOUNT_CONF 0x20 
 953  #define EMV_CT_TRXOP_ENFORCE_PIN 0x40 
 954  #define EMV_CT_TRXOP_FALLBACK_GOODSERVICE 0x80 
 955  // byte 3 (TxnOptions[2])
 956  #define EMV_CT_TRXOP_MERCHINFO_CALLBACK 0x01 
 957  #define EMV_CT_TRXOP_RND_CALLBACK 0x02 
 958  #define EMV_CT_TRXOP_HOTLST_LOG_CALLBACK 0x04 
 959  #define EMV_CT_TRXOP_LOCAL_CHCK_CALLBACK 0x08 
 960  #define EMV_CT_TRXOP_CARDHINFO_CALLBACK 0x10 
 961  #define EMV_CT_TRXOP_EARLY_PIN_ENTRY 0x20 
 962  #define EMV_CT_TRXOP_DELAYED_EARLY_PIN 0x40 
 963  #define EMV_CT_TRXOP_KERNEL_PARSE_UNKNOWN_TLV 0x80 
 964  // byte 4 (TxnOptions[3])
 965  #define EMV_CT_SELOP_NO_UTF8 0x01 
 966  #define EMV_CT_TRXOP_NO_UTF8 0x01 
 967  #define EMV_CT_TRXOP_TIP_AMOUNT_ZERO 0x02 
 968 # define EMV_CT_TRXOP_NO_CHECK_BB_PADDING 0x04 
 969 # define EMV_CT_TRXOP_NO_CHECK_DDLEN 0x08 
 970  // byte 5 (TxnOptions[4])
 971  #define ONL_OPTS_LAST_PIN_TRY 0x01 
 972  #define EMV_CT_TRXOP_PERFORM_ISS_ACQ_CVM 0x02 
 973  #define EMV_CT_TRXOP_WRITE_DS_OFFLINE_TXN 0x08 
 974  #define EMV_CT_TRXOP_FORCE_TACIAC_DEFAULT 0x10 
 975  #define EMV_CT_SELOP_WEEK_PRIORITY_APPS 0x20 
 976  #define EMV_CT_CUST_APPLI_SELECTION_PERFORMED 0x40 
 977  #define EMV_CT_SELOP_DETECT_EMPTY_LIST 0x80 
 978 
 980 
 1000 // byte 1
 1001 #define RETURN_CANDIDATE_LIST 0x01 
 1002 #define RETURN_AFTER_GPO 0x02 
 1003 #define RETURN_AFTER_READ_RECORD 0x04 
 1004 #define RETURN_AFTER_DATA_AUTH 0x08 
 1005 #define RETURN_FOR_CVM_PROCESS 0x10 
 1006 #define RETURN_FOR_CVM_FINISH 0x20 
 1007  // 0x40 leave gap for a return after CVM processing but before risk management
 1008 #define RETURN_AFTER_RISK_MANGEMENT 0x80 
 1009 // byte 2
 1010 #define RETURN_CAND_LIST_PREPROC 0x01 
 1011 #define RETURN_CAND_LIST_SKIP 0x02 
 1012 // byte 3
 1013 #define MS_RETURN_CALLBACKS 0x80 
 1014 #define MS_ADD_TO_HOTLIST 0x01 
 1015 #define MS_DECLINE_AAC 0x02 
 1016 #define MS_ABORT_TXN 0x04 
 1017 #define MS_PIN_BYPASS 0x08 
 1018 #define MS_CUST_CVM_OK 0x10 
 1019 #define MS_PINPAD_NOTPRESENT 0x20 
 1020 #define MS_PINICC_STOP 0x40 
 1021 
 1023 
 1029 #define CONFIRM_AMOUNT_BEFORE_CVM 0x00 
 1030 #define CONFIRM_AMOUNT_AFTER_CVM 0x01 
 1031 
 1033 
 1039 #define MODE_DCC_NO_TRX_CONTINUE 0 
 1040 #define MODE_DCC_YES_TRX_CONTINUE 1 
 1041 #define MODE_DCC_NO_TRX_ABORT 2 
 1042 #define MODE_DCC_YES_TRX_ABORT 3 
 1043 
 1045 
 1048 typedef struct EMV_CT_TRANSAC_STRUCT // EMV_CT_TRANSAC_TYPE
 1049 {
 1050  EMV_CT_PAYMENT_TYPE TXN_Data;
 1051 
 1052  unsigned char TxnOptions[5];
 1053  unsigned char TxnSteps[3];
 1054 
 1055  unsigned char Info_Included_Data[8];
 1056 } EMV_CT_TRANSAC_TYPE;
 1057 
 1058 
 1063  /* Byte 1 */
 1064 #define INPUT_OFL_TXN_COUNTER 0x01 
 1065 #define INPUT_OFL_ADD_TAGS 0x02 
 1066 #define INPUT_OFL_CB_AMOUNT 0x04 
 1067 #define INPUT_OFL_ACCOUNT_TYPE 0x08 
 1068 #define INPUT_OFL_LANGUAGE 0x10 
 1069 #define INPUT_OFL_AMOUNT_CONF 0x20 
 1070 #define INPUT_OFL_TXN_OPTIONS 0x40 
 1071 #define INPUT_OFL_TXN_STEPS 0x80 
 1072  /* Byte 2 */
 1073 #define INPUT_OFL_AMOUNT 0x01 
 1074 #define INPUT_OFL_AMOUNT_CURRENCY 0x02 
 1075 #define INPUT_OFL_CUREXPONENT 0x04 
 1076 #define INPUT_OFL_DATE 0x08 
 1077 #define INPUT_OFL_TIME 0x10 
 1078 #define INPUT_OFL_FORCE_ONLINE 0x20 
 1079 #define INPUT_OFL_FORCE_ACCEPT 0x40 
 1080 #define INPUT_OFL_ONLINE_SWITCH 0x80 
 1081 
 1083 
 1087 typedef struct EMV_CT_SRCRIPTRES_STRUCT
 1088 {
 1089  unsigned char countScriptCrit;
 1090  unsigned char ScriptCritResult[EMV_ADK_SCRIPT_RESULT_MAX][EMV_ADK_SCRIPT_RESULT_LEN];
 1091  unsigned char countScriptUnCrit;
 1092  unsigned char ScriptUnCritResult[EMV_ADK_SCRIPT_RESULT_MAX][EMV_ADK_SCRIPT_RESULT_LEN];
 1093 } EMV_CT_SRCRIPTRES_TYPE;
 1094 
 1095 
 1098 typedef struct EMV_CT_HOST_STRUCT
 1099 {
 1100  char OnlineResult;
 1101  unsigned char AuthResp[2];
 1102  unsigned char LenAuth;
 1103  unsigned char* AuthData;
 1104  unsigned short LenScriptCrit;
 1105  unsigned char* ScriptCritData;
 1106  unsigned short LenScriptUnCrit;
 1107  unsigned char* ScriptUnCritData;
 1108  unsigned char AuthorizationCode[6];
 1109  char Result_referral;
 1110  char AuthResp_Referral[2];
 1111  char AuthResp_Wrong_PIN[2];
 1112  char AuthResp_Positive[2];
 1113  unsigned char PreAuth_Amount[6];
 1114  unsigned char amountOthUpd[6];
 1117  unsigned char TxnOptions[5];
 1119  unsigned char TxnSteps[3];
 1120 
 1121  unsigned short WriteDataStorageLen;
 1122  unsigned char* WriteDataStorageData;
 1123 
 1124  unsigned char Info_Included_Data[8];
 1125 } EMV_CT_HOST_TYPE;
 1126 
 1127 
 1132  /* Byte 1, Index 0 */
 1133 #define INPUT_ONL_ONLINE_RESP 0x01 
 1134 #define INPUT_ONL_ONLINE_AC 0x02 
 1135 #define INPUT_ONL_AUTHDATA 0x04 
 1136 #define INPUT_ONL_SCRIPTCRIT 0x08 
 1137 #define INPUT_ONL_SCRIPTUNCRIT 0x10 
 1138 #define INPUT_ONL_AUTHCODE 0x20 
 1139 #define INPUT_ONL_RESULT_REFERRAL 0x40 
 1140 #define INPUT_ONL_ARC_REFERRAL 0x80 
 1141  /* Byte 2, Index 1 */
 1142 #define INPUT_ONL_ARC_WRONGPIN 0x01 
 1143 #define INPUT_ONL_TXN_OPTIONS 0x02 
 1144 #define INPUT_ONL_AMOUNT_GAC2 0x04 
 1145 #define INPUT_ONL_TXN_STEPS 0x08 
 1146 #define INPUT_ONL_ARC_POSITIVE 0x10 
 1147 #define INPUT_ONL_WRITE_DS_DATA 0x20 
 1148 #define INPUT_ONL_AMOUNT_OTH 0x40 
 1149 
 1151 
 1155 typedef struct EMV_CT_TRANSRES_STRUCT // EMV_CT_TRANSRES_TYPE
 1156 {
 1157  unsigned long StatusInfo;
 1158  unsigned char T_9F27_CryptInfo;
 1159  unsigned char T_9F36_ATC[2];
 1160  unsigned char T_9F26_Cryptogramm[8];
 1161  unsigned char T_5A_PAN[10];
 1162  unsigned char T_9F39_POSEntryMode;
 1163  unsigned char T_5F24_AppExpDate[3];
 1164  unsigned char T_9F41_TransCount[4];
 1165  unsigned char T_5F34_PANSequenceNo[1];
 1167  EMV_CT_TRACK2_TYPE T_57_DataTrack2;
 1168  EMV_CT_ISSDATA_TYPE T_9F10_DataIssuer;
 1169  unsigned char T_9F37_RandomNumber[4];
 1170  unsigned char T_95_TVR[5];
 1171  unsigned char T_9A_Date[3];
 1172  unsigned char T_9F21_Time[3];
 1173  unsigned char T_9C_TransType;
 1174  unsigned char T_5F2A_CurrencyTrans[2];
 1179  unsigned char T_82_AIP[2];
 1180  unsigned char T_9F1A_TermCountryCode[2];
 1181  unsigned char T_9F34_CVM_Res[3];
 1182  unsigned char T_9F33_TermCap[3];
 1183  unsigned char T_9F35_TermTyp;
 1185  unsigned char T_9F1E_IFDSerialNumber[8];
 1186  EMV_CT_APPLI_TYPE T_84_DFName;
 1187  unsigned char T_9F09_VerNum[2];
 1188  EMV_CT_SRCRIPTRES_TYPE scriptresults;
 1189  unsigned char T_9B_TSI[2];
 1190  EMV_CT_APPLI_TYPE T_9F06_AID;
 1191  unsigned char Add_TXN_Tags[EMV_ADK_ADD_TAG_SIZE];
 1192  unsigned char T_9F02_TXNAmount[6];
 1193  unsigned char T_9F03_TXNAdditionalAmount[6];
 1194  unsigned char T_9F53_MC_CatCode[1];
 1195  unsigned char AppName[16+1];
 1196  unsigned char T_5F25_AppEffDate[3];
 1198  unsigned char T_5F28_IssCountryCode[2];
 1199  unsigned char T_9F45_DataAuthCode[2];
 1200  EMV_CT_ICCRND_TYPE T_9F4C_ICCDynNumber;
 1201  unsigned char TACDenial[5];
 1202  unsigned char TACOnline[5];
 1203  unsigned char TACDefault[5];
 1204  unsigned char T_9F0E_IACDenial[5];
 1205  unsigned char T_9F0F_IACOnline[5];
 1206  unsigned char T_9F0D_IACDefault[5];
 1207  unsigned char T_9F40_AddTermCap[5];
 1208  unsigned char T_DF62_ErrorData[15];
 1210  unsigned char T_9F16_MerchIdent[15];
 1211  unsigned char T_DF63_DisplayText;
 1212  EMV_CT_CRDNAME_TYPE T_5F20_Cardholder;
 1213  unsigned char T_5F2D_Lang_Pref[8+1];
 1214  unsigned char T_9F08_ICC_Appli_Vers_No[2];
 1215  unsigned char T_5F36_Trx_Currency_Exp;
 1216  unsigned char T_DF59_Offl_PIN_errors;
 1217  unsigned char T_5F30_ServiceCode[2];
 1218  unsigned char T_DF17_FallbackMID;
 1219  unsigned char T_8E_CVM_List[EMV_ADK_MAX_CVM_LIST_LEN];
 1221  unsigned char T_DF64_KernelDebugData[EMV_ADK_DEBUG_DATA_SIZE];
 1223  unsigned char T_DF61_Info_Received_Data[8];
 1224 } EMV_CT_TRANSRES_TYPE;
 1225 
 1226 
 1231 /* Byte 1 */
 1232 #define TRX_STATUSINFO 0x01 
 1233 #define TRX_9F27_CRYPTINFO 0x02 
 1234 #define TRX_9F36_ATC 0x04 
 1235 #define TRX_9F26_CRYPTOGRAMM 0x08 
 1236 #define TRX_5A_PAN 0x10 
 1237 #define TRX_9F39_POS_ENTRY_MODE 0x20 
 1238 #define TRX_5F24_APPEXPDATE 0x40 
 1239 #define TRX_9F41_TRANSCOUNT 0x80 
 1240 
 1241 /* Byte 2 */
 1242 #define TRX_5F34_PAN_SEQ_NUMBER 0x01 
 1243 #define TRX_57_DATA_TRACK2 0x02 
 1244 #define TRX_9F10_DATAISSUER 0x04 
 1245 #define TRX_9F37_RANDOM_NUMBER 0x08 
 1246 #define TRX_95_TVR 0x10 
 1247 #define TRX_9A_DATE 0x20 
 1248 #define TRX_9F21_TIME 0x40 
 1249 #define TRX_9C_TRANSTYPE 0x80 
 1250 
 1251 /* Byte 3 */
 1252 #define TRX_5F2A_TRX_CURRENCY 0x01 
 1253 #define TRX_82_AIP 0x02 
 1254 #define TRX_9F1A_TERM_COUNTRY_CODE 0x04 
 1255 #define TRX_9F34_CVM_RES 0x08 
 1256 #define TRX_9F33_TERMCAP 0x10 
 1257 #define TRX_9F35_TERMTYP 0x20 
 1258 #define TRX_9F1E_IFDSERIALNUMBER 0x40 
 1259 #define TRX_84_DFNAME 0x80 
 1260 
 1261 /* Byte 4 */
 1262 #define TRX_9F09_VERNUM 0x01 
 1263 #define TRX_SCRIPTRESULTS 0x02 
 1264 #define TRX_9B_TSI 0x04 
 1265 #define TRX_9F06_AID 0x08 
 1266 #define TRX_ADDITIONAL_TAGS 0x10 
 1267 #define TRX_APPNAME 0x20 
 1268 #define TRX_5F25_APPEFFDATE 0x40 
 1269 #define TRX_5F28_ISSCOUNTRYCODE 0x80 
 1270 
 1271 /* Byte 5 */
 1272 #define TRX_9F45_DATAAUTHCODE 0x01 
 1273 #define TRX_9F4C_ICCDYNNUMBER 0x02 
 1274 #define TRX_TAC_DENIAL 0x04 
 1275 #define TRX_TAC_ONLINE 0x08 
 1276 #define TRX_TAC_DEFAULT 0x10 
 1277 #define TRX_9F0E_IAC_DENIAL 0x20 
 1278 #define TRX_9F0F_IAC_ONLINE 0x40 
 1279 #define TRX_9F0D_IAC_DEFAULT 0x80 
 1280 
 1281 /* Byte 6 */
 1282 //#define TRX_9F42_APPCURRENCYCODE 0x01 ///< B6b1: 2013-11-20 removed former T_9F42_AppCurrencyCode (only ::EMV_CT_CARDDATA_TYPE)
 1283 #define TRX_9F40_TERMCAP 0x02 
 1284 #define TRX_DF62_ERRORDATA_TRANS 0x04 
 1285 #define TRX_9F16_MERCHANT_ID 0x08 
 1286 #define TRX_5F20_CARDHOLDER 0x10 
 1287 #define TRX_5F2D_LANG_PREFERENCE 0x20 
 1288 #define TRX_9F08_ICC_APPLI_VERS_NO 0x40 
 1289 #define TRX_5F36_TRX_CURRENCY_EXPO 0x80 
 1290 
 1291 /* Byte 7 */
 1292 #define TRX_5F30_SERVICE_CODE 0x01 
 1293 #define EMV_CT_TRX_DF17_FALLBACK_MID 0x02 
 1294 #define EMV_CT_TRX_8E_CVM_List 0x04 
 1295 #define TRX_DF63_DISPLAY_ID 0x08 
 1296 #define TRX_DF64_KERNEL_DEBUG 0x10 
 1297 #define TRX_9F02_AMOUNT 0x20 
 1298 #define TRX_9F03_CB_AMOUNT 0x40 
 1299 #define TRX_9F53_MC_CATCODE 0x80 
 1300 
 1301 /* Byte 8 */
 1302 #define TRX_DF59_OFFLINE_PIN_ERRORS 0x01 
 1303 
 1304 
 1306 
 1307 
 1308 // ========================================================================================================
 1309 // === MISCELLANEOUS ===
 1310 // ========================================================================================================
 1311 
 1312 
 1313 // ========================================================================================================
 1314 // === CALLBACK defines ===
 1315 // ========================================================================================================
 1316 
 1323 typedef unsigned char EMV_ADK_MerchantInfo;
 1324 #define eEMVMerCustSelApp 0 
 1325 #define eEMVMerConfAmount 1 
 1326 #define eEMVMerCrdhldVerif 2 
 1327 #define eEMVMerReadAppData 3 
 1328 #define eEMVMerOffAuth 4 
 1329 #define eEMVMer1stGAC 5 
 1330 #define eEMVMer2ndGAC 6 
 1331 #define eEMVMerSelect 7 
 1332 #define eEMVMerPINProgress 8 
 1333 #define eEMVMerCustConf 9 
 1334 #define eEMVMerPINInput 10 
 1335 #define eEMVMerLangSelect 11 
 1336 
 1337 #define eEMVMerCustLang 0x80 
 1338 
 1340 typedef unsigned char eCardholderInfo;
 1346 #define eEMVCrdWrongPIN 0 
 1347 #define eEMVCrdCorrectPIN 1 
 1348 #define eEMVCrdAppChange 2 
 1349 #define eEMVCrdLastTryPIN 3 
 1350 
 1352 
 1357 #define CBK_SEL_MERCHANT 0x00 
 1358 #define CBK_SEL_CUSTOMER 0x01 
 1359 
 1361 
 1366 #define CBK_DOMAPP_REMAIN 0 
 1367 #define CBK_DOMAPP_REMOVE 1 
 1368 #define CBK_DOMAPP_REMAIN2 2 
 1369 #define CBK_DOMAPP_REMAIN3 3 
 1370 
 1372 
 1379 #define DOM_OPTION_LEN 3 
 1380 #define DOM_OPTION_AUSTRIAN_NGV 0x01 
 1381 #define DOM_OPTION_TRX_INTERCEPT 0x02 
 1382 #define DOM_OPTION_ABORT_NO_TEXT 0x04 
 1383 #define DOM_OPTION_TIP_OFF 0x08 
 1384 
 1386 
 1391 #define DOM_INFO_LEN 3 
 1392 #define DOM_INFO_ICC_REQ_AMOUNT 0x01 
 1393 #define DOM_INFO_ICC_REQ_TRANSTYPE 0x02 
 1394 
 1396 #define DCC_CBCK_INFO_LEN 3 
 1403 #define DCC_CBCK_INFO_PDOL_FORBIT 0x01 
 1404 
 1406 
 1407 #define MAX_CONF_KEYS 60 // deprecated: This limit is not used anywhere
 1408 
 1411 typedef struct EMV_CT_CAPKEY_STRUCT
 1412 {
 1413  unsigned char *RID;
 1414  unsigned char Index;
 1415  unsigned char *Key;
 1416  unsigned char KeyLen;
 1417  unsigned char Exponent;
 1418  unsigned char *Hash;
 1419  unsigned char noOfRevocEntries;
 1420  unsigned char* RevocEntries;
 1421 } EMV_CT_CAPKEY_TYPE;
 1422 
 1423 
 1426 typedef struct EMV_CT_CAPREAD_STRUCT
 1427 {
 1428  unsigned char RID[5];
 1429  unsigned char Index;
 1430  unsigned char KeyLen;
 1431 } EMV_CT_CAPREAD_TYPE;
 1432 
 1433 
 1434 // ========================================================================================================
 1435 // === CALLBACK FUNCTION for additional features and apps interaction during the transaction ===
 1436 // === (PIN, Application Selection, DCC, ...) ===
 1437 // ========================================================================================================
 1438 
 1449 #define TAG_BF01_CBK_MERCHINFO 0xBF01 
 1450 #define TAG_BF02_CBK_AMOUNTCONF 0xBF02 
 1455 #define TAG_BF03_CBK_LOG_HOTLIST 0xBF03 
 1465 #define TAG_BF04_CBK_REDUCE_CAND 0xBF04 
 1473 #define TAG_BF05_CBK_DOM_APPS 0xBF05 
 1491 #define TAG_BF06_CBK_LOCAL_CHECKS 0xBF06 
 1496 #define TAG_BF07_CBK_DCC 0xBF07 
 1520 #define TAG_BF08_CBK_PIN 0xBF08 
 1539 #define TAG_BF09_CBK_CARDHOLDERINFO 0xBF09 
 1549 #define TAG_BF7F_CBK_TRACE 0xBF7F 
 1554 #define TAG_BF13_CBK_RND 0xBF13 
 1560 
 1566 
 1567 
 1568 #define FS_CALLBACK_DATA_RECORD 0xFF // currently max. 201 bytes (5 candidates in cbk_reduceCandidateList())
 1569 
 1570 // ========================================================================================================
 1571 // === SERIALIZED FUNCTIONAL CONTACT INTERFACE ===
 1572 // ========================================================================================================
 1573 
 1574 
 1575 #define EMV_CT_SER_Init_Framework(dataIn, dataInLen, dataOut, dataOutLen) EMV_CT_SER_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (dataIn), (dataInLen), (dataOut), (dataOutLen))
 1576 
 1577 DLL_CTC EMV_ADK_INFO EMV_CT_SER_Init_Framework_Client(const char *version, const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1578 
 1579 DLL_CTC void EMV_CT_SER_Exit_Framework(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1580 
 1581 DLL_CTC EMV_ADK_INFO EMV_CT_SER_MapVirtualTerminal(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1582 
 1583 DLL_CTC EMV_ADK_INFO EMV_CT_SER_StoreCAPKey(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1584 
 1585 DLL_CTC EMV_ADK_INFO EMV_CT_SER_ReadCAPKeys(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1586 
 1587 DLL_CTC EMV_ADK_INFO EMV_CT_SER_SetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1588 
 1589 DLL_CTC EMV_ADK_INFO EMV_CT_SER_GetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1590 
 1591 DLL_CTC EMV_ADK_INFO EMV_CT_SER_SetAppliData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1592 
 1593 DLL_CTC EMV_ADK_INFO EMV_CT_SER_GetAppliData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1594 
 1595 DLL_CTC EMV_ADK_INFO EMV_CT_SER_StartTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1596 
 1597 DLL_CTC EMV_ADK_INFO EMV_CT_SER_GetCandidateData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1598 
 1599 DLL_CTC EMV_ADK_INFO EMV_CT_SER_ContinueOffline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1600 
 1601 DLL_CTC EMV_ADK_INFO EMV_CT_SER_ContinueOnline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1602 
 1603 DLL_CTC EMV_ADK_INFO EMV_CT_SER_fetchTxnTags(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1604 
 1605 DLL_CTC EMV_ADK_INFO EMV_CT_SER_fetchTxnDOL(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1606 
 1607 DLL_CTC EMV_ADK_INFO EMV_CT_SER_updateTxnTags(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1608 
 1609 DLL_CTC EMV_ADK_INFO EMV_CT_SER_CheckSupportedAID(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1610 
 1611 DLL_CTC EMV_ADK_INFO EMV_CT_SER_EndTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1612 
 1613 DLL_CTC unsigned char EMV_CT_SER_SmartISO(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1614 
 1615 DLL_CTC unsigned char EMV_CT_SER_SmartDetect(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1616 
 1617 DLL_CTC unsigned char EMV_CT_SER_SmartReset(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1618 
 1619 DLL_CTC unsigned char EMV_CT_SER_SmartPowerOff(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1620 
 1621 DLL_CTC unsigned char EMV_CT_SER_SmartPIN(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1622 
 1623 DLL_CTC unsigned char EMV_CT_SER_Send_PIN_Offline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 1624 
 1625 
 1626 // ========================================================================================================
 1627 // === FUNCTIONAL CONTACT INTERFACE ===
 1628 // ========================================================================================================
 1629 
 1630 
 1635 #define EMV_CT_INIT_OPT_BASE_INIT 0x00000001 
 1636 #define EMV_CT_INIT_OPT_L1_DUMP 0x00000002 
 1637 #define EMV_CT_INIT_OPT_CONFIG_MODE 0x00000008 
 1638 #define EMV_CT_INIT_OPT_USE_DEF_VT_CAPK 0x00000010 
 1641 #define EMV_CT_INIT_OPT_DELETE_ALL 0x00000020 
 1642 #define EMV_CT_INIT_OPT_TRACE 0x00000100 
 1643 #define EMV_CT_INIT_OPT_TRACE_CLT 0x00000200 
 1644 #define EMV_CT_INIT_OPT_TRACE_SYSLOG 0x00000800 
 1645 #define EMV_CT_INIT_OPT_TRACE_ADK_LOG 0x00080000 
 1646 #define EMV_CT_INIT_OPT_TIMINGS 0x00100000 
 1647 #define EMV_CT_INIT_OPT_SHARED_CONFIG 0x00200000 
 1648 #define EMV_CT_INIT_OPT_EPP_MASTER 0x00400000 
 1651 
 1655 #define EMV_CT_INIT_VIRT_1 0x01000000 
 1656 #define EMV_CT_INIT_VIRT_2 0x02000000 
 1657 #define EMV_CT_INIT_VIRT_3 0x03000000 
 1658 #define EMV_CT_INIT_VIRT_4 0x04000000 
 1659 #define EMV_CT_INIT_VIRT_5 0x05000000 
 1660 #define EMV_CT_INIT_VIRT_6 0x06000000 
 1661 #define EMV_CT_INIT_VIRT_7 0x07000000 
 1662 #define EMV_CT_INIT_VIRT_8 0x08000000 
 1663 #define EMV_CT_INIT_VIRT_9 0x09000000 
 1664 #define EMV_CT_INIT_VIRT_10 0x0A000000 
 1665 #define EMV_CT_INIT_VIRT_11 0x0B000000 
 1666 #define EMV_CT_INIT_VIRT_12 0x0C000000 
 1667 #define EMV_CT_INIT_VIRT_13 0x0D000000 
 1668 #define EMV_CT_INIT_VIRT_14 0x0E000000 
 1669 #define EMV_CT_INIT_VIRT_15 0x0F000000 
 1670 #define EMV_CT_INIT_VIRT_16 0x10000000 
 1671 #define EMV_CT_INIT_VIRT_17 0x11000000 
 1672 #define EMV_CT_INIT_VIRT_18 0x12000000 
 1673 #define EMV_CT_INIT_VIRT_19 0x13000000 
 1674 #define EMV_CT_INIT_VIRT_20 0x14000000 
 1675 
 1677 
 1678 #define EMV_CT_Init_Framework(numberOfAIDs, EMV_Callback, externalData, options) EMV_CT_Init_Framework_Client(EMV_CT_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options))
 1679 
 1704 /*****************************************************************************
 1705 * EMV_CT_Init_Framework_Client
 1706 *****************************************************************************/
 1711 DLL_CTC EMV_ADK_INFO EMV_CT_Init_Framework_Client(const char *version, unsigned char numberOfAIDs, EMV_CT_CALLBACK_FnT EMV_Callback, void* externalData, unsigned long options);
 1712 
 1713 
 1714 /*****************************************************************************
 1715 * EMV_CT_Exit_Framework
 1716 *****************************************************************************/
 1728 DLL_CTC void EMV_CT_Exit_Framework(void);
 1729 
 1730 /*****************************************************************************
 1731 * EMV_CT_Exit_Framework_extended
 1732 *****************************************************************************/
 1747 DLL_CTC void EMV_CT_Exit_Framework_extended(unsigned char options);
 1748 
 1753 #define EXIT_CT_BASE 0x00 
 1754 #define EXIT_CT_COMPLETE 0x01 
 1757 
 1760 
 1761 /*****************************************************************************
 1762 * EMV_CT_CLIENT_GetVersion
 1763 *****************************************************************************/
 1771 DLL_CTC const char* EMV_CT_CLIENT_GetVersion(void);
 1772 
 1773 
 1774 /*****************************************************************************
 1775 * EMV_CT_FRAMEWORK_GetVersion
 1776 *****************************************************************************/
 1789 DLL_CTC const char* EMV_CT_FRAMEWORK_GetVersion(void);
 1790 
 1791 
 1792 /*****************************************************************************
 1793 * EMV_CT_MapVirtualTerminal
 1794 *****************************************************************************/
 1819 DLL_CTC EMV_ADK_INFO EMV_CT_MapVirtualTerminal(EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType, unsigned char *TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal);
 1820 
 1821 
 1822 /*****************************************************************************
 1823 * EMV_CT_StoreCAPKey
 1824 *****************************************************************************/
 1847 DLL_CTC EMV_ADK_INFO EMV_CT_StoreCAPKey(EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType, const EMV_CT_CAPKEY_TYPE *pxKeyData);
 1848 
 1849 
 1850 /*****************************************************************************
 1851 * EMV_CT_ReadCAPKeys
 1852 *****************************************************************************/
 1881 DLL_CTC EMV_ADK_INFO EMV_CT_ReadCAPKeys(EMV_CT_CAPREAD_TYPE *pxKeyData, unsigned char *pucMaxnum);
 1882 
 1883 /*****************************************************************************
 1884 * EMV_CT_GetCAPKeyInfo
 1885 *****************************************************************************/
 1922 DLL_CTC EMV_ADK_INFO EMV_CT_GetCAPKeyInfo(EMV_CT_CAPREAD_TYPE *pxKeyInfo, unsigned capacity, unsigned offset, unsigned *received, unsigned *configured);
 1923 
 1924 
 1925 /*****************************************************************************
 1926 * EMV_CT_SetTermData
 1927 *****************************************************************************/
 1948 DLL_CTC EMV_ADK_INFO EMV_CT_SetTermData(EMV_CT_TERMDATA_TYPE* pxTermData);
 1949 
 1950 /*****************************************************************************
 1951 * EMV_CT_GetTermData
 1952 *****************************************************************************/
 1972 DLL_CTC EMV_ADK_INFO EMV_CT_GetTermData(EMV_CT_TERMDATA_TYPE* pxTermData);
 1973 
 1974 /*****************************************************************************
 1975 * EMV_CT_SetAppliData
 1976 *****************************************************************************/
 2004 DLL_CTC EMV_ADK_INFO EMV_CT_SetAppliData(EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CT_APPLI_TYPE* pxAID, EMV_CT_APPLIDATA_TYPE* pxAppliData);
 2005 
 2006 /*****************************************************************************
 2007 * EMV_CT_GetAppliData
 2008 *****************************************************************************/
 2033 DLL_CTC EMV_ADK_INFO EMV_CT_GetAppliData(EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CT_APPLI_TYPE* pxAID, EMV_CT_APPLIDATA_TYPE* pxAppliData);
 2034 
 2035 
 2036 /*****************************************************************************
 2037 * EMV_CT_ApplyConfiguration
 2038 *****************************************************************************/
 2062 DLL_CTC EMV_ADK_INFO EMV_CT_ApplyConfiguration(unsigned long options);
 2063 
 2064 
 2065 /*****************************************************************************
 2066 * EMV_CT_StartTransaction
 2067 *****************************************************************************/
 2102 DLL_CTC EMV_ADK_INFO EMV_CT_StartTransaction(EMV_CT_SELECT_TYPE *pxSelectInput, EMV_CT_SELECTRES_TYPE* pxSelectRes);
 2103 
 2104 /*****************************************************************************
 2105 * EMV_CT_GetCandidateData
 2106 *****************************************************************************/
 2125 DLL_CTC EMV_ADK_INFO EMV_CT_GetCandidateData(EMV_CT_CANDIDATE_DATA_TYPE *candidateData);
 2126 
 2127 /*****************************************************************************
 2128 * EMV_CT_ContinueOffline
 2129 *****************************************************************************/
 2177 DLL_CTC EMV_ADK_INFO EMV_CT_ContinueOffline(EMV_CT_TRANSAC_TYPE *pxTransactionInput, EMV_CT_TRANSRES_TYPE *pxTransRes);
 2178 
 2179 /*****************************************************************************
 2180 * EMV_CT_ContinueOnline
 2181 *****************************************************************************/
 2205 DLL_CTC EMV_ADK_INFO EMV_CT_ContinueOnline(EMV_CT_HOST_TYPE *pxOnlineInput, EMV_CT_TRANSRES_TYPE *pxTransRes);
 2206 
 2207 /*****************************************************************************
 2208 * EMV_CT_fetchTxnTags
 2209 *****************************************************************************/
 2240 DLL_CTC EMV_ADK_INFO EMV_CT_fetchTxnTags(unsigned long options, unsigned long* requestedTags, unsigned short noOfRequestedTags,
 2241  unsigned char* tlvBuffer, unsigned short bufferLength, unsigned short* tlvDataLength );
 2242 
 2243 
 2244 /*****************************************************************************
 2245 * EMV_CT_fetchTxnDOL
 2246 *****************************************************************************/
 2278 DLL_CTC EMV_ADK_INFO EMV_CT_fetchTxnDOL(unsigned long options, const unsigned char* DOL, unsigned dolLen, unsigned char* buffer, unsigned bufferSize, unsigned* dataLength);
 2279 
 2280 /*****************************************************************************
 2281 * EMV_CT_updateTxnTags
 2282 *****************************************************************************/
 2339 DLL_CTC EMV_ADK_INFO EMV_CT_updateTxnTags(unsigned long options, unsigned char *tlvBuffer, unsigned short bufferLength);
 2340 
 2343 typedef struct
 2344 {
 2345  EMV_CT_APPLI_TYPE aid;
 2346  unsigned char API;
 2348  unsigned char text[17];
 2350  unsigned char aux_text[17];
 2352  unsigned char code_table;
 2354  unsigned char lang_pref[9];
 2360 } EMV_CT_CandListType;
 2362 
 2363 /*****************************************************************************
 2364  * EMV_CT_CheckSupportedAID
 2365  *****************************************************************************/
 2402 DLL_CTC EMV_ADK_INFO EMV_CT_CheckSupportedAID(
 2403  const EMV_CT_APPLI_TYPE* aid, unsigned char ASI,
 2404  const unsigned char* defaultLabel,
 2405  EMV_CT_CandListType* pCandList, unsigned char MaxCand,
 2406  unsigned char* pCandidateCount, unsigned short* sw12,
 2407  const unsigned char* adtCardTagList);
 2408 
 2409 /*****************************************************************************
 2410 * EMV_CT_EndTransaction
 2411 *****************************************************************************/
 2426 DLL_CTC EMV_ADK_INFO EMV_CT_EndTransaction(unsigned long options);
 2427 
 2428 // ========================================================================================================
 2429 // === CONTACT FUNCTIONS for transparent ICC access of the customer card ===
 2430 // ========================================================================================================
 2431 
 2436 #define EMV_CT_CUSTOMER 0x00 
 2437 #define EMV_CT_SAM_1 0x01 
 2438 #define EMV_CT_SAM_2 0x02 
 2439 #define EMV_CT_SAM_3 (EMV_CT_SAM_1|EMV_CT_SAM_2) 
 2440 #define EMV_CT_TRY_PPS 0x04 
 2441 #define EMV_CT_SKIP_ATR 0x08 
 2442 #define EMV_CT_TRY_PPS_EPA 0x10 
 2443 #define EMV_CT_WARMRESET 0x20 
 2444 // bit 7,8 ID 0 Slot only
 2445 #define EMV_CT_DETECT_WRONG_ATR 0x40 
 2446 #define EMV_CT_ID0_ISO_MODE 0x80 
 2447 // bit 7,8 SAM slots only
 2448 #define EMV_CT_SAM_EMV_MODE 0x40 
 2449 #define EMV_CT_CARD_CLASS_B_3V 0x80 
 2450 
 2452 
 2453 /*****************************************************************************
 2454 * EMV_CT_SmartISO
 2455 *****************************************************************************/
 2474 DLL_CTC unsigned char EMV_CT_SmartISO (unsigned char ucOptions, unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut, unsigned short usOutBufferLength);
 2475 
 2476 /*****************************************************************************
 2477 * EMV_CT_SmartDetect
 2478 *****************************************************************************/
 2493 DLL_CTC unsigned char EMV_CT_SmartDetect(unsigned char ucOptions);
 2494 
 2495 /*****************************************************************************
 2496 * EMV_CT_SmartReset
 2497 *****************************************************************************/
 2515 DLL_CTC unsigned char EMV_CT_SmartReset(unsigned char ucOptions, unsigned char* pucATR, unsigned long* pnATRLength);
 2516 
 2517 /*****************************************************************************
 2518 * EMV_CT_SmartPowerOff
 2519 *****************************************************************************/
 2534 DLL_CTC unsigned char EMV_CT_SmartPowerOff(unsigned char ucOptions);
 2535 
 2536 /*****************************************************************************
 2537 * EMV_CT_SmartPIN
 2538 *****************************************************************************/
 2565 DLL_CTC unsigned char EMV_CT_SmartPIN(const unsigned char * INICCRandom,
 2566  const unsigned char * PubKeyData,
 2567  int PubKeyLen,
 2568  int Exponent,
 2569  unsigned char* pucPINResultData);
 2570 
 2571 
 2572 /*****************************************************************************
 2573 * EMV_CT_Send_PIN_Offline
 2574 *****************************************************************************/
 2598 DLL_CTC unsigned char EMV_CT_Send_PIN_Offline(unsigned char *pucPINResultData);
 2599 
 2600 
 2605  #define CONTACT_LED_ID_0 0x00 
 2606 
 2607  #define CONTACT_LED_OFF 0x00 
 2608  #define CONTACT_LED_ON 0x01 
 2609  #define CONTACT_LED_BLINK 0x02 
 2610 
 2611  #define CONTACT_LED_COLOR_WHITE 0x01 
 2612  #define CONTACT_LED_COLOR_RED 0x02 
 2613  #define CONTACT_LED_COLOR_GREEN 0x03 
 2614  #define CONTACT_LED_COLOR_BLUE 0x04 
 2615  #define CONTACT_LED_COLOR_YELLOW 0x05 
 2616 
 2618 /*****************************************************************************
 2619 * EMV_CT_LED
 2620 *****************************************************************************/
 2633 DLL_CTC unsigned char EMV_CT_LED(unsigned char ucLedId, unsigned char ucLedState, unsigned char ucLedColor, unsigned long ulTimeoutMs);
 2634 
 2635 
 2636 #ifdef __cplusplus
 2637 } // extern "C"
 2638 #endif
 2639 
 2640 #endif // #ifndef _EMV_CT_INTERFACE_H_
```
