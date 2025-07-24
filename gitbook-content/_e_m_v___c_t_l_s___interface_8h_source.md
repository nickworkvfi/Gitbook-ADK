---
hidden: true
title: EMV_CTLS_Interface.h
---

<a href="_e_m_v___c_t_l_s___interface_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: VeriFone
 4 * Author: GSS R&D Germany
 5 * Content: Interface definitions and functions
 6 ****************************************************************************/
 7 
 14 #ifndef _EMV_CTLS_INTERFACE_H_ /* avoid double interface-includes */
 15 #define _EMV_CTLS_INTERFACE_H_
 16 
 17 #ifdef __cplusplus
 18 extern "C" {
 19 #endif
 20 
 21 #include "emv/EMV_Common_Interface.h"
 22 #include "EMV_CTLS_Link.h"
 23 #include "EMV_CTLS_Version.h"
 24 
 25 #define DLL_CLC // no client shared libraries anymore
 26 
 27 
 28 // ========================================================================================================
 29 // === COMMON PART ===
 30 // ========================================================================================================
 31 
 32 
 35 typedef struct EMV_CTLS_APPLI_STRUCT
 36 {
 37  unsigned char aidlen;
 38  unsigned char AID[16];
 39 } EMV_CTLS_APPLI_TYPE;
 40 
 43 typedef struct EMV_CTLS_APPLI_KERNEL_STRUCT
 44 {
 45  unsigned char KernelID[3];
 46  unsigned char aidlen;
 47  unsigned char AID[16];
 48 } EMV_CTLS_APPLI_KERNEL_TYPE;
 49 
 50 typedef struct EMV_CTLS_DATA_STRUCT {
 51  unsigned short len;
 52  unsigned char *data;
 53 } EMV_CTLS_DATA_TYPE;
 54 
 57 typedef struct EMV_CTLS_DOL_STRUCT
 58 {
 59  unsigned char dollen;
 60  unsigned char DOL[EMV_ADK_MAX_LG_DDOL];
 61 } EMV_CTLS_DOL_TYPE;
 62 
 65 typedef struct EMV_CTLS_TRACK2_STRUCT
 66 {
 67  unsigned char tr2len;
 68  unsigned char tr2data[19];
 69 } EMV_CTLS_TRACK2_TYPE;
 70 
 73 typedef struct EMV_CTLS_CRDNAME_STRUCT
 74 {
 75  unsigned char crdNameLen;
 76  unsigned char crdName[26];
 77 } EMV_CTLS_CRDNAME_TYPE;
 78 
 81 typedef struct EMV_CTLS_ICCRND_STRUCT
 82 {
 83  unsigned char iccRNDLen;
 84  unsigned char iccRND[8];
 85 } EMV_CTLS_ICCRND_TYPE;
 86 
 89 typedef struct EMV_CTLS_ISSDATA_STRUCT
 90 {
 91  unsigned char issDataLen;
 92  unsigned char issData[32];
 93 } EMV_CTLS_ISSDATA_TYPE;
 94 
 95 
 96 // ========================================================================================================
 97 // === Transaction Information ===
 98 // ========================================================================================================
 99 
 104 
 121  #define EMV_CTLS_ADK_SETUP_START 0x80 
 122  #define EMV_CTLS_ADK_SETUP_NO_CONTEXT 0x81 
 123  #define EMV_CTLS_ADK_SETUP_NO_INIT 0x82 
 124  #define EMV_CTLS_ADK_SETUP_TERMDATA 0x83 
 125  //#define EMV_CTLS_ADK_SETUP_CL_DISABLED 0x84 
 126  #define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_EMV_ONLY 0x85 
 127  #define EMV_CTLS_ADK_SETUP_ABOVE_CEILING_NO_DOM 0x86 
 128  #define EMV_CTLS_ADK_SETUP_RND_FAIL 0x87 
 129  #define EMV_CTLS_ADK_SETUP_DETECT 0x88 
 130  #define EMV_CTLS_ADK_SETUP_SET_PARAM_FAIL 0x89 
 131  #define EMV_CTLS_ADK_SETUP_OK 0x8A 
 132 
 133  #define EMV_CTLS_ADK_TXN_START 0xA0 
 134  #define EMV_CTLS_ADK_TXN_NO_ATR 0xA1 
 135  #define EMV_CTLS_ADK_TXN_2_CARDS 0xA2 
 136  #define EMV_CTLS_ADK_TXN_CAND_LIST_EMPTY 0xA3 
 137  #define EMV_CTLS_ADK_TXN_DOM_ONE_APP_SELECTED 0xA4 
 138  #define EMV_CTLS_ADK_TXN_DOM_ONE_APP_FAIL 0xA5 
 139  #define EMV_CTLS_ADK_TXN_L1_DIR_READING 0xA6 
 140  #define EMV_CTLS_ADK_TXN_L1_CAND_LIST 0xA7 
 141  #define EMV_CTLS_ADK_TXN_DOM_APP_NOT_SELECTED 0xA8 
 142  #define EMV_CTLS_ADK_TXN_DOM_APP_SELECTED 0xA9 
 143  #define EMV_CTLS_ADK_TXN_NO_COMBO_EMPTY_LIST 0xAA 
 144  #define EMV_CTLS_ADK_TXN_NO_DOM_APP_SELECT_NO_FINAL 0xAB 
 145  #define EMV_CTLS_ADK_TXN_L1_FINAL_SELECT 0xAC 
 146  #define EMV_CTLS_ADK_TXN_AID_NOT_READ_EMPTY 0xAD 
 147  #define EMV_CTLS_ADK_TXN_AID_SKIP_DOM_EMPTY 0xAE 
 148  #define EMV_CTLS_ADK_TXN_AID_SKIP_EMV_EMPTY 0xAF 
 149  #define EMV_CTLS_ADK_TXN_DOM_FINAL_SEL_OK 0xB0 
 150  #define EMV_CTLS_ADK_TXN_UNKNOW_KERNEL 0xB1 
 151  #define EMV_CTLS_ADK_TXN_EP_INIT_FAILED 0xB2 
 152  #define EMV_CTLS_ADK_TXN_LIST_ITERATION_KO 0xB3 
 153  #define EMV_CTLS_ADK_TXN_CANDIDATE_EVAL 0xB4 
 154  #define EMV_CTLS_ADK_TXN_CANDIDATE_FINAL_SELECT 0xB5 
 155 
 156  #define EMV_CTLS_ADK_TXN_MK_START 0xC0 
 157  #define EMV_CTLS_ADK_TXN_MK_NEW_SEL 0xC1 
 158  #define EMV_CTLS_ADK_TXN_MK_RETAP_START 0xC2 
 159  #define EMV_CTLS_ADK_TXN_MK_MOBILE_START 0xC3 
 160  #define EMV_CTLS_ADK_TXN_MK_L1_START 0xC4 
 161  #define EMV_CTLS_ADK_TXN_MK_RETAP_MSD 0xC5 
 162  #define EMV_CTLS_ADK_TXN_MK_MOBILE_MSD 0xC6 
 163  #define EMV_CTLS_ADK_TXN_MK_L1_MSD 0xC7 
 164  #define EMV_CTLS_ADK_TXN_MK_NO_DATA_MSD 0xC8 
 165  #define EMV_CTLS_ADK_TXN_MK_DECLINE_MSD 0xC9 
 166  #define EMV_CTLS_ADK_TXN_MK_OK_MSD 0xCA 
 167  #define EMV_CTLS_ADK_TXN_MK_ONLINE_MSD 0xCB 
 168  #define EMV_CTLS_ADK_TXN_MK_OTHER_MSD 0xCC 
 169  #define EMV_CTLS_ADK_TXN_MK_RETAP_CHP 0xCD 
 170  #define EMV_CTLS_ADK_TXN_MK_MOBILE_CHP 0xCE 
 171  #define EMV_CTLS_ADK_TXN_MK_L1_CHP 0xCF 
 172  #define EMV_CTLS_ADK_TXN_MK_CARDREAD_CHP 0xD0 
 173  #define EMV_CTLS_ADK_TXN_MK_DECLINE_CHP 0xD1 
 174  #define EMV_CTLS_ADK_TXN_MK_ONLINE_CHP 0xD2 
 175  #define EMV_CTLS_ADK_TXN_MK_OK_CHP 0xD3 
 176  #define EMV_CTLS_ADK_TXN_MK_INTERFACE_CHP 0xD4 
 177  #define EMV_CTLS_ADK_TXN_MK_NEW_SEL_CHP 0xD5 
 178  #define EMV_CTLS_ADK_TXN_MK_OTHER_CHP 0xD6 
 179  #define EMV_CTLS_ADK_TXN_MK_DECLINE_BEFORE_GAC 0xD7 
 180  #define EMV_CTLS_ADK_TXN_MK_FALLBACK_START 0xD8 
 181  #define EMV_CTLS_ADK_TXN_MK_INIT_FAIL 0xD9 
 182  #define EMV_CTLS_ADK_TXN_MK_GPO_RR 0xDA 
 183  #define EMV_CTLS_ADK_TXN_MK_FALLBACK_OTHERCARD 0xDB 
 184 
 185  #define EMV_CTLS_ADK_TXN_VK_START 0x10 
 186  #define EMV_CTLS_ADK_TXN_VK_NEW_SEL 0x11 
 187  #define EMV_CTLS_ADK_TXN_VK_MOBILE_START 0x12 
 188  #define EMV_CTLS_ADK_TXN_VK_L1_START 0x13 
 189  #define EMV_CTLS_ADK_TXN_VK_L1_MSD 0x14 
 190  #define EMV_CTLS_ADK_TXN_VK_FALLBACK_MSD 0x15 
 191  #define EMV_CTLS_ADK_TXN_VK_DECLINE_MSD 0x16 
 192  #define EMV_CTLS_ADK_TXN_VK_OK_MSD 0x17 
 193  #define EMV_CTLS_ADK_TXN_VK_ONLINE_MSD 0x18 
 194  #define EMV_CTLS_ADK_TXN_VK_OTHER_MSD 0x19 
 195  #define EMV_CTLS_ADK_TXN_VK_L1_CHP 0x1A 
 196  #define EMV_CTLS_ADK_TXN_VK_READCARD_CHP 0x1B 
 197  #define EMV_CTLS_ADK_TXN_VK_DECLINE_CHP 0x1C 
 198  #define EMV_CTLS_ADK_TXN_VK_ONLINE_CHP 0x1D 
 199  #define EMV_CTLS_ADK_TXN_VK_OK_CHP 0x1E 
 200  #define EMV_CTLS_ADK_TXN_VK_FALLBACK_CHP 0x1F 
 201  #define EMV_CTLS_ADK_TXN_VK_OTHER_CHP 0x20 
 202  #define EMV_CTLS_ADK_TXN_VK_DECLINE_START 0x21 
 203  #define EMV_CTLS_ADK_TXN_VK_FALLBACK_START 0x22 
 204  #define EMV_CTLS_ADK_TXN_VK_OTHER_START 0x23 
 205  #define EMV_CTLS_ADK_TXN_VK_INIT_FAIL 0x24 
 206  #define EMV_CTLS_ADK_TXN_VK_GPO_RR 0x25 
 207  #define EMV_CTLS_ADK_TXN_VK_INCONS_TRACK2 0x26 
 208  #define EMV_CTLS_ADK_TXN_VK_READCARD_MSD 0x27 
 209  #define EMV_CTLS_ADK_TXN_VK_RETAP_START 0x28 
 210  #define EMV_CTLS_ADK_TXN_VK_FALLBACK_CARD_LOG 0x29 
 211 
 212  #define EMV_CTLS_ADK_TXN_KERNEL_START 0x30 
 213  #define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL 0x31 
 214  #define EMV_CTLS_ADK_TXN_KERNEL_RETAP_START 0x32 
 215  #define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_START 0x33 
 216  #define EMV_CTLS_ADK_TXN_KERNEL_L1_START 0x34 
 217  #define EMV_CTLS_ADK_TXN_KERNEL_RETAP_MSD 0x35 
 218  #define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_MSD 0x36 
 219  #define EMV_CTLS_ADK_TXN_KERNEL_L1_MSD 0x37 
 220  #define EMV_CTLS_ADK_TXN_KERNEL_NO_DATA_MSD 0x38 
 221  #define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_MSD 0x39 
 222  #define EMV_CTLS_ADK_TXN_KERNEL_OK_MSD 0x3A 
 223  #define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_MSD 0x3B 
 224  #define EMV_CTLS_ADK_TXN_KERNEL_OTHER_MSD 0x3C 
 225  #define EMV_CTLS_ADK_TXN_KERNEL_RETAP_CHP 0x3D 
 226  #define EMV_CTLS_ADK_TXN_KERNEL_MOBILE_CHP 0x3E 
 227  #define EMV_CTLS_ADK_TXN_KERNEL_L1_CHP 0x3F 
 228  #define EMV_CTLS_ADK_TXN_KERNEL_CARDREAD_CHP 0x40 
 229  #define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_CHP 0x41 
 230  #define EMV_CTLS_ADK_TXN_KERNEL_ONLINE_CHP 0x42 
 231  #define EMV_CTLS_ADK_TXN_KERNEL_OK_CHP 0x43 
 232  #define EMV_CTLS_ADK_TXN_KERNEL_INTERFACE_CHP 0x44 
 233  #define EMV_CTLS_ADK_TXN_KERNEL_NEW_SEL_CHP 0x45 
 234  #define EMV_CTLS_ADK_TXN_KERNEL_OTHER_CHP 0x46 
 235  #define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_BEFORE_GAC 0x47 
 236  #define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_START 0x48 
 237  #define EMV_CTLS_ADK_TXN_KERNEL_INIT_FAIL 0x49 
 238  #define EMV_CTLS_ADK_TXN_KERNEL_GPO_RR 0x4A 
 239  #define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_OTHERCARD 0x4B 
 240  #define EMV_CTLS_ADK_TXN_KERNEL_TRY_ZIP 0x4C 
 241  #define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_MSD 0x4D 
 242  #define EMV_CTLS_ADK_TXN_KERNEL_DECLINE_START 0x4E 
 243  #define EMV_CTLS_ADK_TXN_KERNEL_READCARD_MSD 0x4F 
 244  #define EMV_CTLS_ADK_TXN_KERNEL_FALLBACK_CHP 0x50 
 245  #define EMV_CTLS_ADK_TXN_KERNEL_START_FALLBACK_OTHERCARD 0x51 
 246  #define EMV_CTLS_ADK_TXN_KERNEL_OTHER_TERM_CHP 0x52 
 247  #define EMV_CTLS_ADK_TXN_KERNEL_TOO_MANY_TAPS 0x53 
 248  #define EMV_CTLS_ADK_TXN_KERNEL_BAD_FFI 0x54 
 249 
 250  #define EMV_CTLS_ADK_TXN_GK_GET_DATA_OKAY 0x70 
 251  #define EMV_CTLS_ADK_TXN_GK_GET_DATA_FAIL 0x71 
 252  #define EMV_CTLS_ADK_TXN_GK_PUT_DATA_OKAY 0x72 
 253  #define EMV_CTLS_ADK_TXN_GK_PUT_DATA_FAIL 0x73 
 254 
 255  #define EMV_CTLS_ADK_ONL_START 0xF0 
 256  #define EMV_CTLS_ADK_ONL_NO_CTLS_TXN 0xF1 
 257  #define EMV_CTLS_ADK_ONL_NO_HOST 0xF2 
 258  #define EMV_CTLS_ADK_ONL_HOST_OK 0xF3 
 259  #define EMV_CTLS_ADK_ONL_HOST_DECLINE 0xF4 
 260 #define EMV_CTLS_ADK_ONL_HOST_SWITCH_IF 0xF5 
 261 #define EMV_CTLS_ADK_ONL_HOST_ONLINE_PIN 0xF6 
 262 #define EMV_CTLS_ADK_END_TXN 0xFE 
 263 
 265 
 270  #define EMV_CTLS_ADK_STEP_01 1 
 271  #define EMV_CTLS_ADK_STEP_02 2 
 272  #define EMV_CTLS_ADK_STEP_03 3 
 273  #define EMV_CTLS_ADK_STEP_04 4 
 274  #define EMV_CTLS_ADK_STEP_05 5 
 275  #define EMV_CTLS_ADK_STEP_06 6 
 276  #define EMV_CTLS_ADK_STEP_07 7 
 277  #define EMV_CTLS_ADK_STEP_08 8 
 278  #define EMV_CTLS_ADK_STEP_09 9 
 279  #define EMV_CTLS_ADK_STEP_10 10 
 280  #define EMV_CTLS_ADK_STEP_11 11 
 281  #define EMV_CTLS_ADK_STEP_12 12 
 282  #define EMV_CTLS_ADK_STEP_13 13 
 283  #define EMV_CTLS_ADK_STEP_14 14 
 284  #define EMV_CTLS_ADK_STEP_15 15 
 285  #define EMV_CTLS_ADK_STEP_16 16 
 286  #define EMV_CTLS_ADK_STEP_17 17 
 287  #define EMV_CTLS_ADK_STEP_18 18 
 288  #define EMV_CTLS_ADK_STEP_19 19 
 289  #define EMV_CTLS_ADK_STEP_20 20 
 290 
 292 
 293 // ========================================================================================================
 294 // === TERMINAL CONFIGURATION ===
 295 // ========================================================================================================
 296 
 300 #define EMV_CTLS_KERNEL_VERSION_SIZE 255 
 301 
 303 typedef struct EMV_CTLS_TERMDATA_STRUCT /* === EMV_CTLS_TERMDATA_TYPE === */
 306 {
 307  unsigned long CL_Modes_Supported;
 308  unsigned char TermTyp;
 309  unsigned char CountryCodeTerm[2];
 311  unsigned char CurrencyTrans[2];
 312  unsigned char ExpTrans;
 314  unsigned char SuppLang[EMV_ADK_MAX_LANG];
 316  unsigned char IFDSerialNumber[8];
 317  unsigned char FlowOptions[10];
 323  unsigned char MaxCTLSTranslimit[4];
 324  unsigned short BeepVolume;
 327  unsigned short BeepFrequencySuccess;
 330  unsigned short BeepFrequencyAlert;
 333  unsigned char HostCommunicationTimeout;
 336  unsigned char SecondTapDelay;
 341  const unsigned char* Hotlist;
 346  EMV_CTLS_DATA_TYPE poiInformation;
 355 
 356  char KernelVersion[EMV_CTLS_KERNEL_VERSION_SIZE];
 357  char FrameworkVersion[EMV_ADK_VERSION_ASCII_SIZE];
 358  char L1DriverVersion[EMV_ADK_VERSION_ASCII_SIZE];
 359 
 360  unsigned char Info_Included_Data[8];
 361 } EMV_CTLS_TERMDATA_TYPE;
 362 
 367 /* Byte 1 */
 368 #define INPUT_CTLS_TRM_SUPPORTED_CTLS 0x01 
 369 #define INPUT_CTLS_TRM_TYPE 0x02 
 370 #define INPUT_CTLS_TRM_CURRENCY 0x04 
 371 #define INPUT_CTLS_TRM_EXP_CURRENCY 0x08 
 372 #define INPUT_CTLS_TRM_COUNTRY_CODE 0x10 
 373 #define INPUT_CTLS_TRM_FLOW_OPTIONS 0x20 
 374 #define INPUT_CTLS_TRM_MAXCTLS_TRANSLIMIT 0x40 
 375 #define INPUT_CTLS_TRM_BEEP_VOLUME 0x80 
 376 
 377 /* Byte 2 */
 378 #define INPUT_CTLS_TRM_LANGUAGES 0x01 
 379 #define INPUT_CTLS_TRM_IFD_SERIAL 0x02 
 380 #define INPUT_CTLS_TRM_KERNEL_VERSION 0x04 
 381 #define INPUT_CTLS_TRM_FRAMEWORK_VERSION 0x08 
 382 #define INPUT_CTLS_TRM_HOTLIST 0x10 
 383 #define INPUT_CTLS_TRM_BEEP_FREQ_SUCCESS 0x20 
 384 #define INPUT_CTLS_TRM_BEEP_FREQ_ALERT 0x40 
 385 #define INPUT_CTLS_TRM_L1DRIVER_VERSION 0x80 
 386 
 387 /* Byte 3 */
 388 #define INPUT_CTLS_TRM_SECOND_TAP_DELAY 0x01 
 389 #define INPUT_CTLS_TRM_HOST_COMM_TIMEOUT 0x02 
 390 #define INPUT_CTLS_TRM_POI_INFORMATION 0x04 
 391 
 393 #define CL_DISABLED 0x00 
 400 #define CL_MC_PAYPASS_CHIP 0x01 
 401 #define CL_MC_PAYPASS_MSR 0x02 
 402 #define CL_MC_PAYPASS_COMBINED 0x03 
 403 #define CL_VISA_CHIP 0x04 
 404 #define CL_VISA_MSR 0x08 
 405 #define CL_VISA_COMBINED 0x0C 
 406 #define CL_AMEX_COMBINED 0x10 
 407 #define CL_DISCOVER_ZIP 0x20 
 408 #define CL_INTERAC 0x40 
 409 #define CL_QPBOC_COMBINED 0x80 
 410 #define CL_JCB 0x100 
 411 #define CL_EPAL 0x200 
 412 #define CL_AMEX_MSR 0x400 
 413 #define CL_DISCOVER_DPAS_CHIP 0x800 
 414 #define CL_DISCOVER_DPAS_MSR 0x1000 
 415 #define CL_DISCOVER_DPAS_COMBINED 0x1800 
 416 #define CL_RUPAY 0x2000 
 417 #define CL_JCB_EMV 0x4000 
 418 #define CL_JCB_LEGACY 0x8000 
 419 #define CL_GEMALTO 0x010000 
 420 #define CL_GIROCARD 0x020000 
 421 #define CL_SIBS 0x040000 
 422 #define CL_PAGOBANCOMAT 0x080000 
 423 #define CL_MIR 0x100000 
 424 
 425 #define CL_SUPPORTED_VELOCITY 0xFFFFFF 
 426 #define CL_SUPPORTED_VFI 0xFFFFFF 
 427 #define CL_ALL 0xFFFFFF 
 428 
 429 #define CL_UNKNOWN 0x40000000 
 430 #define CL_APPS_KERNEL 0x80000000 
 431 
 433 /* Byte 1 */
 438 #define INPUT_CTLS_TRM_FLOWOPT_VISA_WAVE 0x01 
 439 #define INPUT_CTLS_CKO_AMEXEMV_OR_NONEMV_MARKET 0x02 
 440 #define INPUT_CTLS_TRM_FLOWOPT_UI_SCHEME_DEFAULT 0x04 
 441 #define INPUT_CTLS_TRM_IFD_SERIAL_USE_TID 0x08 
 442 #define INPUT_CTLS_TRM_FLOWOPT_LED_NON_VISA_EUROPE 0x10 
 443 #define INPUT_CTLS_TRM_FLOWOPT_LED_EP_OPTION_2 0x20 
 444 #define INPUT_CTLS_TRM_FLOWOPT_LED_INTERAC 0x40 
 445 #define INPUT_CTLS_TRM_FLOWOPT_FORWARD_VFI_FAIL 0x80 
 446 
 447 /* Byte 2 */
 448 #define INPUT_CTLS_TRM_FLOWOPT_DISABLE_DISCOVER_ZIP_CHECK 0x01 
 449 
 451 // ========================================================================================================
 452 // === APPLICATION CONFIGURATION ===
 453 // ========================================================================================================
 454 
 459 #define VISA_TTQ_MAGSTRIPE_SUPPORTED 0x80 
 460 #define VISA_TTQ_VSDC_SUPPORTED 0x40 
 461 #define VISA_TTQ_qVSDC_SUPPORTED 0x20 
 462 #define VISA_TTQ_CONTACT_VSDC_SUPPORTED 0x10 
 463 #define VISA_TTQ_OFFLINE_ONLY 0x08 
 464 #define VISA_TTQ_ONLINE_PIN_SUPPORTED 0x04 
 465 #define VISA_TTQ_SIGNATURE_SUPPORTED 0x02 
 466 #define VISA_TTQ_ODA_ONLINE_SUPPORTED 0x01 
 467 #define VISA_TTQ_ONLINE_FORCED 0x80 
 468 #define VISA_TTQ_CVM_FORCED 0x40 
 469 #define VISA_TTQ_CONTACT_PINOFFL 0x20 
 470 
 472 // Byte 1
 484 #define TTQ_MAGSTRIPE_MODE_SUPPORTED 0x80 
 485 #define TTQ_EMV_MODE_SUPPORTED 0x20 
 486 #define TTQ_CONTACT_CHIP_SUPPORTED 0x10 
 487 #define TTQ_OFFLINE_ONLY 0x08 
 488 #define TTQ_ONLINE_PIN_SUPPORTED 0x04 
 489 #define TTQ_SIGNATURE_SUPPORTED 0x02 
 490 #define TTQ_ODA_SUPPORTED 0x01 
 491 // Byte 2
 492 #define TTQ_ONLINE_CRYPTOGRAM_REQUIRED 0x80 
 493 #define TTQ_CVM_REQUIRED 0x40 
 494 #define TTQ_CONTACT_OFFLINE_PIN 0x20 
 495 // Byte 3
 496 #define TTQ_ISSUER_UPDATE_SUPPORTED 0x80 
 497 #define TTQ_CD_CVM_SUPPORTED 0x40 
 498 
 500 
 503 
 508 #define VISA_DRL_DISABLE_ZERO_AMOUNT_CHECK 0x01 
 509 #define VISA_DRL_ENABLE_STATUS_CHECK 0x02 
 510 
 511 #define VISA_AMEX_DRL_DISABLE_FLOOR_LIMIT_CHECK 0x20 
 512 #define VISA_AMEX_DRL_DISABLE_TRANS_LIMIT_CHECK 0x40 
 513 #define VISA_AMEX_DRL_DISABLE_CV_LIMIT_CHECK 0x80 
 514 
 516 #define EMV_ADK_DRL_ENTRIES_VISA 4 
 521 #define EMV_ADK_DRL_ENTRIES_AMEX 16 
 522 
 524 #define EMV_ADK_PMSG_ENTRIES 10
 530 
 535 #define EMV_CTLS_MAX_NO_OF_NON_EMVCO_TAGS 25 
 536 #define EMV_CTLS_BUFFER_FOR_NON_EMVCO_TAGS 1230 
 537 
 539 #define EMV_CTLS_MAX_TAGLIST_SIZE 20 
 540 #define EMV_CTLS_MAX_APP_VERS 10 
 541 
 542 typedef struct EMV_CTLS_TAGLIST_STRUCT
 545 {
 546  unsigned char anztag;
 547  unsigned short tags[EMV_CTLS_MAX_TAGLIST_SIZE];
 548 } EMV_CTLS_TAGLIST_TYPE;
 549 
 554 #define CTLS_APPLY_CFG_APPS 0x00000001 
 555 #define CTLS_APPLY_CFG_TERM 0x00000002 
 556 #define CTLS_APPLY_CFG_CAPK 0x00000004 
 557 #define CTLS_APPLY_CFG_ALL 0x00000007 
 558 #define CTLS_APPLY_CFG_FORCE 0x00000008 
 559 
 561 // ========================================================================
 562 // === APPLICATION CONFIGURATION (new scheme specific config interface) ===
 563 // ========================================================================
 564 
 565 
 579 // EMVCo standard
 580 #define EMV_CTLS_KERN_EP 0x00 
 581 #define EMV_CTLS_KERN_PK 0x01 
 582 #define EMV_CTLS_KERN_MK 0x02 
 583 #define EMV_CTLS_KERN_VK 0x03 
 584 #define EMV_CTLS_KERN_AK 0x04 
 585 #define EMV_CTLS_KERN_JK 0x05 
 586 #define EMV_CTLS_KERN_DK 0x06 
 587 #define EMV_CTLS_KERN_CK 0x07 
 588 
 589 // Verifone Internal
 590 #define EMV_CTLS_KERN_IK 0x10 
 591 #define EMV_CTLS_KERN_EK 0x11 
 592 #define EMV_CTLS_KERN_RK 0x12 
 593 #define EMV_CTLS_KERN_GK 0x13 
 594 #define EMV_CTLS_KERN_PB 0x14 
 595 // 0x15 VERTEX value for MIR, not used on ADK interface
 596 #define EMV_CTLS_KERN_WK 0x16 
 597 #define EMV_CTLS_KERN_BK 0x17 
 598 
 599 // EMVCo registered
 600 #define EMV_CTLS_KERN_GC 0x2A 
 601 #define EMV_CTLS_KERN_SAMA 0x2D 
 602 #define EMV_CTLS_KERN_CPACE 0x2E 
 603 #define EMV_CTLS_KERN_WLA 0x31 
 604 
 605 #define EMV_CTLS_KERN_DOM 0xF0 
 606 
 609 // Extended Kernel Ids
 610 #define EMV_CTLS_KERN_MR 0x810643 
 611 #define EMV_CTLS_KERN_SK 0xC1 
 612 #define EMV_CTLS_KERN_SB 0xC14D42 
 613 
 614 
 616 #define KERNEL_ID_TO_BYTE_ARRAY(kernelId, byteArray)\
 617  if ((kernelId)<0xff)\
 618  {\
 619  byteArray[0] = (unsigned char) (kernelId);\
 620  byteArray[1] = 0;\
 621  byteArray[2] = 0;\
 622  }\
 623  else\
 624  {\
 625  byteArray[0] = (unsigned char) ((kernelId) >> 16);\
 626  byteArray[1] = (unsigned char) ((kernelId) >> 8);\
 627  byteArray[2] = (unsigned char) ((kernelId));\
 628  }
 629 
 630 #define KERNEL_ID_TO_INT(byteArray)\
 631  ((byteArray[0] >= EMV_CTLS_KERN_DOM && byteArray[1] == 0 && byteArray[2] == 0)\
 632  ? EMV_CTLS_KERN_DOM :\
 633  ((byteArray[0] & 0x80) ? ((unsigned) byteArray[0] << 16) | ((unsigned) byteArray[1] << 8) | byteArray[2] : byteArray[0]))
 634 
 643 #define EMV_CTLS_TEC_CHIP 0x01 
 644 #define EMV_CTLS_TEC_MSR 0x02 
 645 
 647 #define EMV_CTLS_MK_CFG_NOMSR 0x80 
 651 #define EMV_CTLS_MK_CFG_NOCHIP 0x40 
 652 #define EMV_CTLS_MK_CFG_ONDEVCVM 0x20 
 653 #define EMV_CTLS_MK_CFG_RRP 0x10 
 654 
 656 #define EMV_CTLS_RK_CFG_ONDEVCVM 0x20 
 660 
 662  /* Byte 1 */
 667 #define EMV_CTLS_FLOW_GLOB_DOM_NO_FINAL_SELECT_0 0x01 
 668 #define EMV_CTLS_FLOW_GLOB_LOA_ENABLE_0 0x02 
 669 #define EMV_CTLS_FLOW_GLOB_CASH_SUPPORT_0 0x04 
 670 #define EMV_CTLS_FLOW_GLOB_CASHBACK_SUPPORT_0 0x08 
 671 #define EMV_CTLS_FLOW_GLOB_OMIT_NOT_ALLOWED_SELECTION_0 0x10 
 672 #define EMV_CTLS_FLOW_GLOB_FORCE_ENTRY_POINT_0 0x20 
 673 #define EMV_CTLS_FLOW_GLOB_FORCE_KERNEL_USAGE_0 0x40 
 674 #define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_MISSING_ONLY_0 0x80 
 675  /* Byte 2 */
 676 #define EMV_CTLS_FLOW_GLOB_LIST_OF_AIDS_IF_PPSE_FAILED_ONLY_1 0x01 
 677 #define EMV_CTLS_FLOW_GLOB_CARD_READ_TXN_ZERO_AMOUNT_1 0x02 
 678 #define EMV_CTLS_FLOW_GLOB_SKIP_CARDSELECTION_APPS_1 0x04 
 679 #define EMV_CTLS_FLOW_GLOB_SKIP_TXN_LIMIT_CHECK_1 0x08 
 680 #define EMV_CTLS_FLOW_GLOB_FORCE_ONLINE_1 0x10 
 681 #define EMV_CTLS_FLOW_GLOB_WAIT_CARD_REMOVAL_END_1 0x20 
 682 #define EMV_CTLS_FLOW_GLOB_START_REMOVAL_DETECTION_1 0x40 
 683 #define EMV_CTLS_FLOW_GLOB_EP_EXTENDED_SELECTION_1 0x80 
 684 // byte3
 685 #define EMV_CTLS_FLOW_GLOB_MULTIPLE_AID_KERNEL_ID_2 0x01 
 686 #define EMV_CTLS_FLOW_GLOB_ENABLE_OFFLINE_CASHBACK_2 0x02 
 689 #define EMV_CTLS_FLOW_GLOB_RESET_TXN_TYPE_2 0x04 
 693 #define EMV_CTLS_FLOW_GLOB_CFG_APPL_NAME_2 0x08 
 695 #define EMV_CTLS_FLOW_GLOB_CARD_READ_SKIP_TXN_LIMIT_CHECK_2 0x10 
 696 
 698  /* Byte 1 */
 703 #define EMV_CTLS_FLOW_MK_READ_BALANCE_BEFORE_GAC_0 0x01 
 704 #define EMV_CTLS_FLOW_MK_READ_BALANCE_AFTER_GAC_0 0x02 
 705 #define EMV_CTLS_FLOW_MK_ENABLE_DATA_EXCHANGE_0 0x04 
 706 #define EMV_CTLS_FLOW_MK_TRANSACTION_TYPE_17_FOR_CASH_0 0x08 
 707 #define EMV_CTLS_FLOW_MK_CARD_READ_ACTION_ANALYSIS_0 0x10 
 710 
 712  /* Byte 1 */
 717 #define EMV_CTLS_FLOW_VK_STATUS_CHECK_ENABLE_0 0x01 
 718 #define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_SKIP_0 0x02 
 719 #define EMV_CTLS_FLOW_VK_ZERO_CHECK_ENABLE_ONLINE_0 0x04 
 720 #define EMV_CTLS_FLOW_VK_CHECK_INCONS_TRACK2_PAN_0 0x08 
 721 #define EMV_CTLS_FLOW_VK_CASHBACK_NOT_FORCED_CVM_0 0x10 
 722 #define EMV_CTLS_FLOW_VK_SUCCESS_TONE_ON_DECLINE 0x20 
 723 #define EMV_CTLS_FLOW_VK_ALERT_TONE_ON_DECLINE 0x40 
 724 #define EMV_CTLS_FLOW_VK_GET_DATA_9F68_0 0x80 
 727 
 728 // Byte 2, EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31[1]
 729 #define EMV_CTLS_FLOW_VK_ENABLE_TAGS_AT_GPO 0x01 
 730 #define EMV_CTLS_FLOW_VK_ZERO_CHECK_DISABLE_1 0x02 
 731 // B2b3 RFU
 732 #define EMV_CTLS_FLOW_VK_ODO_SUPPORT_1 0x08 
 733 #define EMV_CTLS_FLOW_VK_ODO_SDA_1 0x10 
 734 #define EMV_CTLS_FLOW_VK_ODO_DDA_1 0x20 
 735 #define EMV_CTLS_FLOW_VK_ODO_SDA_ERR_ONLINE_1 0x40 
 736 #define EMV_CTLS_FLOW_VK_ODO_DDA_ERR_ONLINE_1 0x80 
 737 
 738 // Byte 3, EMV_CTLS_APPLIDATA_VK_STRUCT::AppFlowCap_DFAB31[2]
 739 #define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASH_2 0x01 
 740 #define EMV_CTLS_FLOW_VK_OMIT_AUC_INT_CASHBACK_2 0x02 
 741 #define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASH_2 0x04 
 742 #define EMV_CTLS_FLOW_VK_OMIT_AUC_DOM_CASHBACK_2 0x08 
 743 #define EMV_CTLS_FLOW_VK_ZERO_CASHBACK_AMOUNT_2 0x10 
 744 #define EMV_CTLS_FLOW_VK_CASHBACK_TRANS_TYPE_09_2 0x20 
 745 #define EMV_CTLS_FLOW_VK_QUASI_CASH_2 0x40 
 746 #define EMV_CTLS_FLOW_VK_DO_NOT_CFG_9F21_TIME_2 0x80 
 747 
 749  /* Byte 1 */
 754 #define EMV_CTLS_FLOW_AK_CARDREAD_GENAC1_ARQC_0 0x01 
 755 #define EMV_CTLS_FLOW_AK_TRANSACTION_TYPE_30_FOR_PREAUTH_0 0x02 
 756 #define EMV_CTLS_FLOW_AK_STATUS_CHECK_ENABLE_0 0x04 
 760 #define EMV_CTLS_FLOW_AK_ZERO_CHECK_ENABLE_ONLINE_0 0x08 
 761 #define EMV_CTLS_FLOW_AK_DISABLE_9F6E_KERNEL_VERSION_0 0x10 
 762 
 763 
 769  /* Byte 1 */
 770 #define EMV_CTLS_FLOW_JK_MULTIPLE_RANDOM_NUMBERS_0 0x01 
 771 
 773  /* Byte 1 */
 778 #define EMV_CTLS_FLOW_DK_CASHBACK_NOT_FORCED_CVM_0 0x01 
 779 #define EMV_CTLS_FLOW_DK_DATA_STORAGE_0 0x02 
 780 #define EMV_CTLS_FLOW_DK_EXTENDED_LOGGGING_0 0x04 
 781 #define EMV_CTLS_FLOW_DK_TORN_TXN_RECOVERY_0 0x08 
 782 #define EMV_CTLS_FLOW_DK_DEFERRED_AUTHORISATION_0 0x10 
 783 #define EMV_CTLS_FLOW_DK_STATUS_CHECK_ENABLE_0 0x20 
 784 #define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_SKIP_0 0x40 
 785 #define EMV_CTLS_FLOW_DK_ZERO_CHECK_ENABLE_ONLINE_0 0x80 
 786 
 787 
 793  /* Byte 1 */
 794 #define EMV_CTLS_FLOW_IK_REQUEST_CDA_WITH_ARQC_0 0x01 
 795 #define EMV_CTLS_FLOW_IK_REFUND_FLOW_INTERAC_0 0x02 
 796 
 798  /* Byte 1 */
 803 #define EMV_CTLS_FLOW_EK_READ_CARD_REFUND_0 0x01 
 804 
 806  /* Byte 1 */
 811 #define EMV_CTLS_FLOW_PK_CHECK_INCONS_TRACK2_PAN_0 0x01 
 812 #define EMV_CTLS_FLOW_PK_CASHBACK_NOT_FORCED_CVM_0 0x02 
 813 
 815  /* Byte 1 */
 820 #define EMV_CTLS_FLOW_CK_STATUS_CHECK_ENABLE_0 0x01 
 821 #define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_SKIP_0 0x02 
 822 #define EMV_CTLS_FLOW_CK_ZERO_CHECK_ENABLE_ONLINE_0 0x04 
 823 #define EMV_CTLS_FLOW_CK_CHECK_INCONS_TRACK2_PAN_0 0x08 
 824 #define EMV_CTLS_FLOW_CK_CASHBACK_NOT_FORCED_CVM_0 0x10 
 825 #define EMV_CTLS_FLOW_CK_ENABLE_FDDA_VERSION_0 0x20 
 826 #define EMV_CTLS_FLOW_CK_DISABLE_PIN_BELOW_CVM_0 0x40 
 827 
 829 /* Byte 1 (index 0) */
 834 #define EMV_CTLS_FLOW_GK_SUPPORT_APPLI_AUTHENTICATE_0 0x01 
 835 #define EMV_CTLS_FLOW_GK_SUPPORT_GETDATA_0 0x02 
 836 #define EMV_CTLS_FLOW_GK_SUPPORT_PUTDATA_0 0x04 
 837 #define EMV_CTLS_FLOW_GK_AMOUNT_MULTIPLY_100_0 0x08 
 838 
 840  /* Byte 1 */
 845 #define EMV_CTLS_FLOW_RK_SERVICE_FEATURE_ENABLE_0 0x01 
 846 #define EMV_CTLS_FLOW_RK_TORN_TRANSACTION_INDICATOR_0 0x02 
 847 #define EMV_CTLS_FLOW_RK_READ_RECORD_SFI1_QDDA_0 0x04 
 848 #define EMV_CTLS_FLOW_RK_MULTIPLE_RANDOM_NUMBERS_0 0x08 
 849 #define EMV_CTLS_FLOW_RK_ONLINE_PIN_SUPPORTED_0 0x10 
 850 #define EMV_CTLS_FLOW_RK_SIGNATURE_SUPPORTED_0 0x20 
 851 #define EMV_CTLS_FLOW_RK_ON_DEVICE_CVM_SUPPORTED_0 0x40 
 852 #define EMV_CTLS_FLOW_RK_CVM_REQUIRED_0 0x80 
 853 
 854  /* Byte 2 */
 855 #define EMV_CTLS_FLOW_RK_ISSUER_UPDATE_SUPPORTED_1 0x01 
 856 
 858  /* Byte 1 */
 864 
 869  /* Byte 1 */
 871 
 876 #define EMV_CTLS_FLOW_WK_STATUS_CHECK_ENABLE_0 0x01 
 877 #define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_SKIP_0 0x02 
 878 #define EMV_CTLS_FLOW_WK_ZERO_CHECK_ENABLE_ONLINE_0 0x04 
 879 #define EMV_CTLS_FLOW_WK_NO_CDCVM 0x08 
 880 
 882  /* Byte 1 */
 888 
 893  /* Byte 1 */
 895 
 896 
 898 // MasterCard //
 900 
 904 typedef struct EMV_CTLS_APPLIDATA_MK_STRUCT {
 905  unsigned char IncludedData[8];
 906  unsigned char TermIdent_9F1C[8];
 907  unsigned char TerminalCountryCode_9F1A[2];
 908  unsigned char TerminalType_9F35;
 909  unsigned char AdditionalTerminalCapabilities_9F40[5];
 910  unsigned char MagstripeCVM_aboveLimit_DF811E;
 911  unsigned char MagstripeCVM_belowLimit_DF812C;
 912  unsigned char ChipCVM_aboveLimit_DF8118;
 913  unsigned char ChipCVM_belowLimit_DF8119;
 914  unsigned char SecurityCapability_DF811F;
 915  unsigned char CardDataInputCapability_DF8117;
 916  unsigned char FloorLimit_DF8123[6];
 917  unsigned char TransactionLimitNoOnDevice_DF8124[6];
 918  unsigned char TransactionLimitOnDevice_DF8125[6];
 919  unsigned char CVMRequiredLimit_DF8126[6];
 920  unsigned char ChipVersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 921  unsigned char MSRVersionNumber_9F6D[2*EMV_CTLS_MAX_APP_VERS];
 922  unsigned char KernelConfiguration_DF811B;
 923  unsigned char TransactionCategoryCode_9F53;
 924  unsigned char TACDefault_DF8120[5];
 925  unsigned char TACDenial_DF8121[5];
 926  unsigned char TACOnline_DF8122[5];
 927  unsigned char KernelID_DF810C;
 928  unsigned char TerminalRiskManagementData_9F1D[8];
 929  unsigned char MerchantCategoryCode_9F15[2];
 930  char MerchantIdentifier_9F16[15+1];
 931  char MerchantNameAndLocation_9F4E[40+1];
 932  unsigned char AcquirerIdentifier_9F01[6];
 933  unsigned char HoldTimeValue_DF8130;
 934  unsigned char MessageHoldTime_DF812D[3];
 935  unsigned char TornTransactionLifetime_DF811C[2];
 936  unsigned char TornTransactionNumber_DF811D;
 937  EMV_CTLS_DATA_TYPE PhoneMessageTable_DF8131;
 938  EMV_CTLS_DATA_TYPE TagsToRead_DF8112;
 939  EMV_CTLS_DATA_TYPE TagsToWriteBeforeGenAC_FF8102;
 940  EMV_CTLS_DATA_TYPE TagsToWriteAfterGenAC_FF8103;
 941  unsigned char ProceedToFirstWriteFlag_DF8110;
 942  unsigned char DSRequestedOperatorID_9F5C[8];
 943  unsigned char DETimeoutValue_DF8127[2];
 944  unsigned char AppFlowCap_DFAB31[5];
 945  unsigned char RR_MinGracePeriod_DF8132[2];
 946  unsigned char RR_MaxGracePeriod_DF8133[2];
 947  unsigned char RR_ExpectedTransTime_CAPDU_DF8134[2];
 948  unsigned char RR_ExpectedTransTime_RAPDU_DF8135[2];
 949  unsigned char RR_AccuracyThreshold_DF8136[2];
 950  unsigned char RR_TransTimeMismatchThreshold_DF8137;
 951  unsigned char MerchantCustomData_9F7C[20];
 952 } EMV_CTLS_APPLIDATA_MK_TYPE;
 953 
 954 #define EMV_CTLS_APPLIDATA_GC_TYPE EMV_CTLS_APPLIDATA_MK_TYPE // Kernel 2a configuration is same as PayPass for instance
 955 
 960  /* Byte 1 */
 961 #define INPUT_CTLS_APL_MK_9F1C_0 0x01 
 962 #define INPUT_CTLS_APL_MK_9F1A_0 0x02 
 963 #define INPUT_CTLS_APL_MK_9F35_0 0x04 
 964 #define INPUT_CTLS_APL_MK_9F40_0 0x08 
 965 #define INPUT_CTLS_APL_MK_DF811E_0 0x10 
 966 #define INPUT_CTLS_APL_MK_DF812C_0 0x20 
 967 #define INPUT_CTLS_APL_MK_DF8118_0 0x40 
 968 #define INPUT_CTLS_APL_MK_DF8119_0 0x80 
 969  /* Byte 2 */
 970 #define INPUT_CTLS_APL_MK_DF811F_1 0x01 
 971 #define INPUT_CTLS_APL_MK_DF8117_1 0x02 
 972 #define INPUT_CTLS_APL_MK_DF8123_1 0x04 
 973 #define INPUT_CTLS_APL_MK_DF8124_1 0x08 
 974 #define INPUT_CTLS_APL_MK_DF8125_1 0x10 
 975 #define INPUT_CTLS_APL_MK_DF8126_1 0x20 
 976 #define INPUT_CTLS_APL_MK_9F09_1 0x40 
 977 #define INPUT_CTLS_APL_MK_9F6D_1 0x80 
 978  /* Byte 3 */
 979 #define INPUT_CTLS_APL_MK_DF811B_2 0x01 
 980 #define INPUT_CTLS_APL_MK_9F53_2 0x02 
 981 #define INPUT_CTLS_APL_MK_DF8120_2 0x04 
 982 #define INPUT_CTLS_APL_MK_DF8121_2 0x08 
 983 #define INPUT_CTLS_APL_MK_DF8122_2 0x10 
 984 #define INPUT_CTLS_APL_MK_DF810C_2 0x20 
 985 #define INPUT_CTLS_APL_MK_9F1D_2 0x40 
 986 #define INPUT_CTLS_APL_MK_9F15_2 0x80 
 987  /* Byte 4 */
 988 #define INPUT_CTLS_APL_MK_9F16_3 0x01 
 989 #define INPUT_CTLS_APL_MK_9F4E_3 0x02 
 990 #define INPUT_CTLS_APL_MK_9F01_3 0x04 
 991 #define INPUT_CTLS_APL_MK_DF8130_3 0x08 
 992 #define INPUT_CTLS_APL_MK_DF812D_3 0x10 
 993 #define INPUT_CTLS_APL_MK_DF811C_3 0x20 
 994 #define INPUT_CTLS_APL_MK_DF811D_3 0x40 
 995 #define INPUT_CTLS_APL_MK_DF8131_3 0x80 
 996  /* Byte 5 */
 997 #define INPUT_CTLS_APL_MK_DFAB31_4 0x01 
 998 #define INPUT_CTLS_APL_MK_DF8112_4 0x02 
 999 #define INPUT_CTLS_APL_MK_FF8102_4 0x04 
 1000 #define INPUT_CTLS_APL_MK_FF8103_4 0x08 
 1001 #define INPUT_CTLS_APL_MK_DF8110_4 0x10 
 1002 #define INPUT_CTLS_APL_MK_9F5C_4 0x20 
 1003 #define INPUT_CTLS_APL_MK_DF8127_4 0x40 
 1004 
 1005 // Byte 6
 1006 #define INPUT_CTLS_APL_MK_DF8132_5 0x01 
 1007 #define INPUT_CTLS_APL_MK_DF8133_5 0x02 
 1008 #define INPUT_CTLS_APL_MK_DF8134_5 0x04 
 1009 #define INPUT_CTLS_APL_MK_DF8135_5 0x08 
 1010 #define INPUT_CTLS_APL_MK_DF8136_5 0x10 
 1011 #define INPUT_CTLS_APL_MK_DF8137_5 0x20 
 1012 #define INPUT_CTLS_APL_MK_9F7C_5 0x40 
 1013 
 1014 
 1020 #define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_NO 0x00 
 1021 #define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_YES 0x01 
 1022 #define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_EMPTY 0xFF 
 1023 #define INPUT_CTLS_MK_PROCEED_TO_FIRST_WRITE_ABSENT 0xFE 
 1024 
 1026 // Visa //
 1029 
 1033 typedef struct EMV_CTLS_VK_DRL_ENTRY_STRUCT {
 1034  unsigned char AppProgramId_9F5A[16];
 1035  unsigned char AppProgramIdLen;
 1036  unsigned char ContactlessFloorLimit_DFAB40[6];
 1037  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1038  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1039  unsigned char OnOffSwitch_DFAB49;
 1040 } EMV_CTLS_VK_DRL_ENTRY_TYPE;
 1041 
 1045 typedef struct EMV_CTLS_VK_DRL_STRUCT {
 1046  unsigned short cnt;
 1047  EMV_CTLS_VK_DRL_ENTRY_TYPE *data;
 1048 } EMV_CTLS_VK_DRL_TYPE;
 1049 
 1053 typedef struct EMV_CTLS_APPLIDATA_VK_STRUCT {
 1054  unsigned char IncludedData[8];
 1055  unsigned char TermIdent_9F1C[8];
 1056  unsigned char TerminalCountryCode_9F1A[2];
 1057  unsigned char TerminalType_9F35;
 1058  unsigned char TerminalTransactionQualifier_9F66[4];
 1059  unsigned char TerminalCapabilities_9F33[3];
 1060  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1061  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1062  unsigned char MerchantCategoryCode_9F15[2];
 1063  char MerchantIdentifier_9F16[15+1];
 1064  char MerchantNameAndLocation_9F4E[40+1];
 1065  unsigned char TecSupport_DFAB30;
 1066  unsigned char AppFlowCap_DFAB31[5];
 1067  unsigned char ContactlessFloorLimit_DFAB40[6];
 1068  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1069  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1070  EMV_CTLS_VK_DRL_TYPE VisaDRLParams_FFAB01;
 1071 } EMV_CTLS_APPLIDATA_VK_TYPE;
 1072 
 1077  /* Byte 1 */
 1078 #define INPUT_CTLS_APL_VK_9F1C_0 0x01 
 1079 #define INPUT_CTLS_APL_VK_9F1A_0 0x02 
 1080 #define INPUT_CTLS_APL_VK_9F35_0 0x04 
 1081 #define INPUT_CTLS_APL_VK_9F66_0 0x08 
 1082 #define INPUT_CTLS_APL_VK_9F33_0 0x10 
 1083 #define INPUT_CTLS_APL_VK_9F40_0 0x20 
 1084 #define INPUT_CTLS_APL_VK_9F09_0 0x40 
 1085 #define INPUT_CTLS_APL_VK_9F15_0 0x80 
 1086  /* Byte 2 */
 1087 #define INPUT_CTLS_APL_VK_9F16_1 0x01 
 1088 #define INPUT_CTLS_APL_VK_9F4E_1 0x02 
 1089 #define INPUT_CTLS_APL_VK_DFAB30_1 0x04 
 1090 #define INPUT_CTLS_APL_VK_DFAB31_1 0x08 
 1091 #define INPUT_CTLS_APL_VK_DFAB40_1 0x10 
 1092 #define INPUT_CTLS_APL_VK_DFAB41_1 0x20 
 1093 #define INPUT_CTLS_APL_VK_DFAB42_1 0x40 
 1094 #define INPUT_CTLS_APL_VK_FFAB01_1 0x80 
 1095 
 1097 
 1099 // American Express //
 1101 
 1105 typedef struct EMV_CTLS_AK_DRL_ENTRY_STRUCT {
 1106  unsigned char ContactlessFloorLimit_DFAB40[6];
 1107  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1108  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1109  unsigned char OnOffSwitch_DFAB49;
 1110 } EMV_CTLS_AK_DRL_ENTRY_TYPE;
 1111 
 1115 typedef struct EMV_CTLS_AK_DRL_STRUCT {
 1116  unsigned short cnt;
 1117  EMV_CTLS_AK_DRL_ENTRY_TYPE *data;
 1118 } EMV_CTLS_AK_DRL_TYPE;
 1119 
 1123 typedef struct EMV_CTLS_APPLIDATA_AK_STRUCT {
 1124  unsigned char IncludedData[8];
 1125  unsigned char TermIdent_9F1C[8];
 1126  unsigned char TerminalCountryCode_9F1A[2];
 1127  unsigned char TerminalType_9F35;
 1128  unsigned char AmexContactlessReaderCapabilities_9F6D;
 1129  unsigned char AmexTerminalTransactionCapabilities_9F6E[4];
 1130  unsigned char TerminalCapabilities_9F33[3];
 1131  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1132  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1133  unsigned char MerchantCategoryCode_9F15[2];
 1134  char MerchantIdentifier_9F16[15+1];
 1135  char MerchantNameAndLocation_9F4E[40+1];
 1136  unsigned char AcquirerIdentifier_9F01[6];
 1137  unsigned char TecSupport_DFAB30;
 1138  unsigned char AppFlowCap_DFAB31[5];
 1139  unsigned char ContactlessFloorLimit_DFAB40[6];
 1140  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1141  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1142  unsigned char TACDefault_DFAB43[5];
 1143  unsigned char TACDenial_DFAB44[5];
 1144  unsigned char TACOnline_DFAB45[5];
 1145  EMV_CTLS_AK_DRL_TYPE AmexDRLParams_FFAB01;
 1146  unsigned char UnpredictableNumberRange_DFAB52;
 1147 } EMV_CTLS_APPLIDATA_AK_TYPE;
 1148 
 1153  /* Byte 1 */
 1154 #define INPUT_CTLS_APL_AK_9F1C_0 0x01 
 1155 #define INPUT_CTLS_APL_AK_9F1A_0 0x02 
 1156 #define INPUT_CTLS_APL_AK_9F35_0 0x04 
 1157 #define INPUT_CTLS_APL_AK_9F6D_0 0x08 
 1158 #define INPUT_CTLS_APL_AK_9F6E_0 0x10 
 1159 #define INPUT_CTLS_APL_AK_9F33_0 0x20 
 1160 #define INPUT_CTLS_APL_AK_9F40_0 0x40 
 1161 #define INPUT_CTLS_APL_AK_9F09_0 0x80 
 1162  /* Byte 2 */
 1163 #define INPUT_CTLS_APL_AK_9F15_1 0x01 
 1164 #define INPUT_CTLS_APL_AK_9F16_1 0x02 
 1165 #define INPUT_CTLS_APL_AK_9F4E_1 0x04 
 1166 #define INPUT_CTLS_APL_AK_9F01_1 0x08 
 1167 #define INPUT_CTLS_APL_AK_DFAB30_1 0x10 
 1168 #define INPUT_CTLS_APL_AK_DFAB31_1 0x20 
 1169 #define INPUT_CTLS_APL_AK_DFAB40_1 0x40 
 1170 #define INPUT_CTLS_APL_AK_DFAB41_1 0x80 
 1171  /* Byte 3 */
 1172 #define INPUT_CTLS_APL_AK_DFAB42_2 0x01 
 1173 #define INPUT_CTLS_APL_AK_DFAB43_2 0x02 
 1174 #define INPUT_CTLS_APL_AK_DFAB44_2 0x04 
 1175 #define INPUT_CTLS_APL_AK_DFAB45_2 0x08 
 1176 #define INPUT_CTLS_APL_AK_FFAB01_2 0x10 
 1177 #define INPUT_CTLS_APL_AK_DFAB52_2 0x20 
 1178 
 1180 
 1184 
 1188 typedef struct EMV_CTLS_APPLIDATA_JK_STRUCT {
 1189  unsigned char IncludedData[8];
 1190  unsigned char TermIdent_9F1C[8];
 1191  unsigned char TerminalCountryCode_9F1A[2];
 1192  unsigned char TerminalType_9F35;
 1193  unsigned char TerminalInterchangeProfile_9F53[3];
 1194  unsigned char MerchantCategoryCode_9F15[2];
 1195  char MerchantNameAndLocation_9F4E[40+1];
 1196  unsigned char AcquirerIdentifier_9F01[6];
 1197  unsigned char AppFlowCap_DFAB31[5];
 1198  unsigned char ContactlessFloorLimit_DFAB40[6];
 1199  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1200  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1201  unsigned char TACDefault_DFAB43[5];
 1202  unsigned char TACDenial_DFAB44[5];
 1203  unsigned char TACOnline_DFAB45[5];
 1204  unsigned char RiskManagementThreshold_DFAB46[6];
 1205  unsigned char RiskManagementTargetPercentage_DFAB47;
 1206  unsigned char RiskManagementMaximumTargetPercentage_DFAB48;
 1207  unsigned char CombinationOptions_DFAB4B[2];
 1208  unsigned char RemovalTimeout_DFAB4C[2];
 1209  unsigned char ContactlessTransactionLimit_ODCVM_DFAB5B[6];
 1210 } EMV_CTLS_APPLIDATA_JK_TYPE;
 1211 
 1216  /* Byte 1 */
 1217 #define INPUT_CTLS_APL_JK_9F1C_0 0x01 
 1218 #define INPUT_CTLS_APL_JK_9F1A_0 0x02 
 1219 #define INPUT_CTLS_APL_JK_9F35_0 0x04 
 1220 #define INPUT_CTLS_APL_JK_9F53_0 0x08 
 1221 #define INPUT_CTLS_APL_JK_9F15_0 0x10 
 1222 #define INPUT_CTLS_APL_JK_9F4E_0 0x20 
 1223 #define INPUT_CTLS_APL_JK_9F01_0 0x40 
 1224 #define INPUT_CTLS_APL_JK_DFAB31_0 0x80 
 1225  /* Byte 2 */
 1226 #define INPUT_CTLS_APL_JK_DFAB40_1 0x01 
 1227 #define INPUT_CTLS_APL_JK_DFAB41_1 0x02 
 1228 #define INPUT_CTLS_APL_JK_DFAB42_1 0x04 
 1229 #define INPUT_CTLS_APL_JK_DFAB43_1 0x08 
 1230 #define INPUT_CTLS_APL_JK_DFAB44_1 0x10 
 1231 #define INPUT_CTLS_APL_JK_DFAB45_1 0x20 
 1232 #define INPUT_CTLS_APL_JK_DFAB46_1 0x40 
 1233 #define INPUT_CTLS_APL_JK_DFAB47_1 0x80 
 1234  /* Byte 3 */
 1235 #define INPUT_CTLS_APL_JK_DFAB48_2 0x01 
 1236 #define INPUT_CTLS_APL_JK_DFAB4B_2 0x02 
 1237 #define INPUT_CTLS_APL_JK_DFAB4C_2 0x04 
 1238 #define INPUT_CTLS_APL_JK_DFAB5B_2 0x08 
 1239 
 1241 
 1243 // Discover //
 1245 
 1249 typedef struct EMV_CTLS_APPLIDATA_DK_STRUCT {
 1250  unsigned char IncludedData[8];
 1251  unsigned char TermIdent_9F1C[8];
 1252  unsigned char TerminalCountryCode_9F1A[2];
 1253  unsigned char TerminalType_9F35;
 1254  unsigned char TerminalTransactionQualifier_9F66[4];
 1255  unsigned char TerminalCapabilities_9F33[3];
 1256  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1257  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1258  unsigned char MerchantCategoryCode_9F15[2];
 1259  unsigned char TecSupport_DFAB30;
 1260  unsigned char AppFlowCap_DFAB31[5];
 1261  unsigned char ContactlessFloorLimit_DFAB40[6];
 1262  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1263  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1264  EMV_CTLS_DATA_TYPE DataContainerReadIds_DFAB58;
 1265  EMV_CTLS_DATA_TYPE DataContainerReadRanges_DFAB59;
 1266 } EMV_CTLS_APPLIDATA_DK_TYPE;
 1271  /* Byte 1 */
 1272 #define INPUT_CTLS_APL_DK_9F1C_0 0x01 
 1273 #define INPUT_CTLS_APL_DK_9F1A_0 0x02 
 1274 #define INPUT_CTLS_APL_DK_9F35_0 0x04 
 1275 #define INPUT_CTLS_APL_DK_9F66_0 0x08 
 1276 #define INPUT_CTLS_APL_DK_9F33_0 0x10 
 1277 #define INPUT_CTLS_APL_DK_9F40_0 0x20 
 1278 #define INPUT_CTLS_APL_DK_9F09_0 0x40 
 1279 #define INPUT_CTLS_APL_DK_9F15_0 0x80 
 1280  /* Byte 2 */
 1281 #define INPUT_CTLS_APL_DK_DFAB30_1 0x01 
 1282 #define INPUT_CTLS_APL_DK_DFAB31_1 0x02 
 1283 #define INPUT_CTLS_APL_DK_DFAB40_1 0x04 
 1284 #define INPUT_CTLS_APL_DK_DFAB41_1 0x08 
 1285 #define INPUT_CTLS_APL_DK_DFAB42_1 0x10 
 1286 #define INPUT_CTLS_APL_DK_DFAB58_1 0x20 
 1287 #define INPUT_CTLS_APL_DK_DFAB59_1 0x40 
 1288 
 1290 
 1292 // Interac //
 1294 
 1298 typedef struct EMV_CTLS_APPLIDATA_IK_STRUCT {
 1299  unsigned char IncludedData[8];
 1300  unsigned char TermIdent_9F1C[8];
 1301  unsigned char TerminalCountryCode_9F1A[2];
 1302  unsigned char TerminalType_9F35;
 1303  unsigned char TerminalCapabilities_9F33[3];
 1304  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1305  unsigned char ContactlessFloorLimit_9F5F[6];
 1306  unsigned char MerchantTypeIndicator_9F58;
 1307  unsigned char TerminalTransactionInformation_9F59[3];
 1308  unsigned char TerminalTransactionType_9F5A;
 1309  unsigned char TerminalOptionStatus_9F5E[2];
 1310  unsigned char ReceiptRequiredLimit_9F5D[6];
 1311  unsigned char TryAgainLimit_DF6D;
 1312  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1313  unsigned char MerchantCategoryCode_9F15[2];
 1314  char MerchantIdentifier_9F16[15+1];
 1315  char MerchantNameAndLocation_9F4E[40+1];
 1316  unsigned char AcquirerIdentifier_9F01[6];
 1317  unsigned char AppFlowCap_DFAB31[5];
 1318  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1319  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1320  unsigned char TACDefault_DFAB43[5];
 1321  unsigned char TACDenial_DFAB44[5];
 1322  unsigned char TACOnline_DFAB45[5];
 1323  unsigned char RiskManagementThreshold_DFAB46[6];
 1324  unsigned char RiskManagementTargetPercentage_DFAB47;
 1325  unsigned char RiskManagementMaximumTargetPercentage_DFAB48;
 1326 } EMV_CTLS_APPLIDATA_IK_TYPE;
 1327 
 1332  /* Byte 1 */
 1333 #define INPUT_CTLS_APL_IK_9F1C_0 0x01 
 1334 #define INPUT_CTLS_APL_IK_9F1A_0 0x02 
 1335 #define INPUT_CTLS_APL_IK_9F35_0 0x04 
 1336 #define INPUT_CTLS_APL_IK_9F33_0 0x08 
 1337 #define INPUT_CTLS_APL_IK_9F40_0 0x10 
 1338 #define INPUT_CTLS_APL_IK_9F5F_0 0x20 
 1339 #define INPUT_CTLS_APL_IK_9F58_0 0x40 
 1340 #define INPUT_CTLS_APL_IK_9F59_0 0x80 
 1341  /* Byte 2 */
 1342 #define INPUT_CTLS_APL_IK_9F5A_1 0x01 
 1343 #define INPUT_CTLS_APL_IK_9F5E_1 0x02 
 1344 #define INPUT_CTLS_APL_IK_9F5D_1 0x04 
 1345 #define INPUT_CTLS_APL_IK_DF6D_1 0x08 
 1346 #define INPUT_CTLS_APL_IK_9F09_1 0x10 
 1347 #define INPUT_CTLS_APL_IK_9F15_1 0x20 
 1348 #define INPUT_CTLS_APL_IK_9F16_1 0x40 
 1349 #define INPUT_CTLS_APL_IK_9F4E_1 0x80 
 1350  /* Byte 3 */
 1351 #define INPUT_CTLS_APL_IK_9F01_2 0x01 
 1352 #define INPUT_CTLS_APL_IK_DFAB31_2 0x02 
 1353 #define INPUT_CTLS_APL_IK_DFAB41_2 0x04 
 1354 #define INPUT_CTLS_APL_IK_DFAB42_2 0x08 
 1355 #define INPUT_CTLS_APL_IK_DFAB43_2 0x10 
 1356 #define INPUT_CTLS_APL_IK_DFAB44_2 0x20 
 1357 #define INPUT_CTLS_APL_IK_DFAB45_2 0x40 
 1358 #define INPUT_CTLS_APL_IK_DFAB46_2 0x80 
 1359  /* Byte 4 */
 1360 #define INPUT_CTLS_APL_IK_DFAB47_3 0x01 
 1361 #define INPUT_CTLS_APL_IK_DFAB48_3 0x02 
 1362 
 1364 
 1366 // EPAL //
 1368 
 1372 typedef struct EMV_CTLS_APPLIDATA_EK_STRUCT {
 1373  unsigned char IncludedData[8];
 1374  unsigned char TermIdent_9F1C[8];
 1375  unsigned char TerminalCountryCode_9F1A[2];
 1376  unsigned char TerminalType_9F35;
 1377  unsigned char TerminalCapabilities_9F33[3];
 1378  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1379  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1380  unsigned char MerchantCategoryCode_9F15[2];
 1381  char MerchantIdentifier_9F16[15+1];
 1382  char MerchantNameAndLocation_9F4E[40+1];
 1383  unsigned char AcquirerIdentifier_9F01[6];
 1384  unsigned char TerminalTransactionQualifier_9F66[4];
 1385  unsigned char AppFlowCap_DFAB31[5];
 1386  unsigned char ContactlessFloorLimit_DFAB40[6];
 1387  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1388  unsigned char TACDefault_DFAB43[5];
 1389  unsigned char TACDenial_DFAB44[5];
 1390  unsigned char TACOnline_DFAB45[5];
 1391  unsigned char CtlsTransactionLimitCash_DFAB4A[6];
 1392 } EMV_CTLS_APPLIDATA_EK_TYPE;
 1393 
 1398  /* Byte 1 */
 1399 #define INPUT_CTLS_APL_EK_9F1C_0 0x01 
 1400 #define INPUT_CTLS_APL_EK_9F1A_0 0x02 
 1401 #define INPUT_CTLS_APL_EK_9F35_0 0x04 
 1402 #define INPUT_CTLS_APL_EK_9F33_0 0x08 
 1403 #define INPUT_CTLS_APL_EK_9F40_0 0x10 
 1404 #define INPUT_CTLS_APL_EK_9F09_0 0x20 
 1405 #define INPUT_CTLS_APL_EK_9F15_0 0x40 
 1406 #define INPUT_CTLS_APL_EK_9F16_0 0x80 
 1407  /* Byte 2 */
 1408 #define INPUT_CTLS_APL_EK_9F4E_1 0x01 
 1409 #define INPUT_CTLS_APL_EK_9F01_1 0x02 
 1410 #define INPUT_CTLS_APL_EK_DFAB31_1 0x04 
 1411 #define INPUT_CTLS_APL_EK_DFAB40_1 0x08 
 1412 #define INPUT_CTLS_APL_EK_DFAB41_1 0x10 
 1413 #define INPUT_CTLS_APL_EK_DFAB43_1 0x20 
 1414 #define INPUT_CTLS_APL_EK_DFAB44_1 0x40 
 1415 #define INPUT_CTLS_APL_EK_DFAB45_1 0x80 
 1416  /* Byte 3 */
 1417 #define INPUT_CTLS_APL_EK_DFAB4A_2 0x01 
 1418 #define INPUT_CTLS_APL_EK_9F66_2 0x02 
 1419 
 1421 
 1423 // Visa Asia/Pacific //
 1425 
 1429 typedef struct EMV_CTLS_APPLIDATA_PK_STRUCT {
 1430  unsigned char IncludedData[8];
 1431  unsigned char TermIdent_9F1C[8];
 1432  unsigned char TerminalCountryCode_9F1A[2];
 1433  unsigned char TerminalType_9F35;
 1434  unsigned char CvmRequirements_DF04;
 1435  unsigned char AppFlowCap_DFAB31[5];
 1436  unsigned char ContactlessFloorLimit_DF02[6];
 1437  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1438  unsigned char ContactlessCVMRequiredLimit_DF01[6];
 1439 } EMV_CTLS_APPLIDATA_PK_TYPE;
 1440 
 1445  /* Byte 1 */
 1446 #define INPUT_CTLS_APL_PK_9F1C_0 0x01 
 1447 #define INPUT_CTLS_APL_PK_9F1A_0 0x02 
 1448 #define INPUT_CTLS_APL_PK_9F35_0 0x04 
 1449 #define INPUT_CTLS_APL_PK_DF04_0 0x08 
 1450 #define INPUT_CTLS_APL_PK_DFAB31_0 0x10 
 1451 #define INPUT_CTLS_APL_PK_DF02_0 0x20 
 1452 #define INPUT_CTLS_APL_PK_DFAB41_0 0x40 
 1453 #define INPUT_CTLS_APL_PK_DF01_0 0x80 
 1454  /* Byte 2 */
 1455 
 1457 
 1459 // China Union PAY - qPBOC //
 1461 
 1465 typedef struct EMV_CTLS_APPLIDATA_CK_STRUCT {
 1466  unsigned char IncludedData[8];
 1467  unsigned char TermIdent_9F1C[8];
 1468  unsigned char TerminalCountryCode_9F1A[2];
 1469  unsigned char TerminalType_9F35;
 1470  unsigned char TerminalTransactionQualifier_9F66[4];
 1471  unsigned char TerminalCapabilities_9F33[3];
 1472  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1473  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1474  unsigned char MerchantCategoryCode_9F15[2];
 1475  char MerchantIdentifier_9F16[15+1];
 1476  char MerchantNameAndLocation_9F4E[40+1];
 1477  unsigned char TecSupport_DFAB30;
 1478  unsigned char AppFlowCap_DFAB31[5];
 1479  unsigned char ContactlessFloorLimit_DFAB40[6];
 1480  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1481  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1482 } EMV_CTLS_APPLIDATA_CK_TYPE;
 1483 
 1488  /* Byte 1 */
 1489 #define INPUT_CTLS_APL_CK_9F1C_0 0x01 
 1490 #define INPUT_CTLS_APL_CK_9F1A_0 0x02 
 1491 #define INPUT_CTLS_APL_CK_9F35_0 0x04 
 1492 #define INPUT_CTLS_APL_CK_9F66_0 0x08 
 1493 #define INPUT_CTLS_APL_CK_9F33_0 0x10 
 1494 #define INPUT_CTLS_APL_CK_9F40_0 0x20 
 1495 #define INPUT_CTLS_APL_CK_9F09_0 0x40 
 1496 #define INPUT_CTLS_APL_CK_9F15_0 0x80 
 1497  /* Byte 2 */
 1498 #define INPUT_CTLS_APL_CK_9F16_1 0x01 
 1499 #define INPUT_CTLS_APL_CK_9F4E_1 0x02 
 1500 #define INPUT_CTLS_APL_CK_DFAB30_1 0x04 
 1501 #define INPUT_CTLS_APL_CK_DFAB31_1 0x08 
 1502 #define INPUT_CTLS_APL_CK_DFAB40_1 0x10 
 1503 #define INPUT_CTLS_APL_CK_DFAB41_1 0x20 
 1504 #define INPUT_CTLS_APL_CK_DFAB42_1 0x40 
 1505 
 1507 
 1509 // Gemalto Pure //
 1511 
 1515 typedef struct EMV_CTLS_APPLIDATA_GK_STRUCT {
 1516  unsigned char IncludedData[8];
 1517  unsigned char TermIdent_9F1C[8];
 1518  unsigned char TerminalCountryCode_9F1A[2];
 1519  unsigned char TerminalType_9F35;
 1520  unsigned char TerminalCapabilities_9F33[3];
 1521  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1522  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1523  unsigned char MerchantCategoryCode_9F15[2];
 1524  char MerchantIdentifier_9F16[15+1];
 1525  char MerchantNameAndLocation_9F4E[40+1];
 1526  unsigned char AcquirerIdentifier_9F01[6];
 1527  unsigned char AppFlowCap_DFAB31[5];
 1528  unsigned char ContactlessFloorLimit_DFAB40[6];
 1529  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1530  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1531  unsigned char TACDefault_DFAB43[5];
 1532  unsigned char TACDenial_DFAB44[5];
 1533  unsigned char TACOnline_DFAB45[5];
 1534  unsigned char CtlsAppKernelCap_DFAB4F[5];
 1535  EMV_CTLS_DATA_TYPE MTOL_DFAB50;
 1536  EMV_CTLS_DATA_TYPE DefaultDDOL_DFAB51;
 1537  EMV_CTLS_DATA_TYPE TerminalTransactionData_9F76;
 1538  unsigned char AppliAuthTransType_DFAB5A;
 1539 } EMV_CTLS_APPLIDATA_GK_TYPE;
 1540 
 1545  /* Byte 1 */
 1546 #define INPUT_CTLS_APL_GK_9F1C_0 0x01 
 1547 #define INPUT_CTLS_APL_GK_9F1A_0 0x02 
 1548 #define INPUT_CTLS_APL_GK_9F35_0 0x04 
 1549 #define INPUT_CTLS_APL_GK_9F33_0 0x08 
 1550 #define INPUT_CTLS_APL_GK_9F40_0 0x10 
 1551 #define INPUT_CTLS_APL_GK_9F09_0 0x20 
 1552 #define INPUT_CTLS_APL_GK_9F15_0 0x40 
 1553 #define INPUT_CTLS_APL_GK_9F16_0 0x80 
 1554  /* Byte 2 */
 1555 #define INPUT_CTLS_APL_GK_9F4E_1 0x01 
 1556 #define INPUT_CTLS_APL_GK_9F01_1 0x02 
 1557 #define INPUT_CTLS_APL_GK_DFAB31_1 0x04 
 1558 #define INPUT_CTLS_APL_GK_DFAB40_1 0x08 
 1559 #define INPUT_CTLS_APL_GK_DFAB41_1 0x10 
 1560 #define INPUT_CTLS_APL_GK_DFAB42_1 0x20 
 1561 #define INPUT_CTLS_APL_GK_DFAB43_1 0x40 
 1562 #define INPUT_CTLS_APL_GK_DFAB44_1 0x80 
 1563  /* Byte 3 */
 1564 #define INPUT_CTLS_APL_GK_DFAB45_2 0x01 
 1565 #define INPUT_CTLS_APL_GK_DFAB4F_2 0x02 
 1566 #define INPUT_CTLS_APL_GK_DFAB50_2 0x04 
 1567 #define INPUT_CTLS_APL_GK_DFAB51_2 0x08 
 1568 #define INPUT_CTLS_APL_GK_9F76_2 0x10 
 1569 #define INPUT_CTLS_APL_GK_DFAB5A_2 0x20 
 1570 
 1572 
 1574 // RuPay //
 1576 
 1580 typedef struct EMV_CTLS_APPLIDATA_RK_STRUCT {
 1581  unsigned char IncludedData[8];
 1582  unsigned char TermIdent_9F1C[8];
 1583  unsigned char TerminalCountryCode_9F1A[2];
 1584  unsigned char TerminalType_9F35;
 1585  unsigned char TerminalCapabilities_9F33[3];
 1586  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1587  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1588  unsigned char MerchantCategoryCode_9F15[2];
 1589  unsigned char AppFlowCap_DFAB31[5];
 1590  unsigned char ContactlessFloorLimit_DFAB40[6];
 1591  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1592  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1593  unsigned char TACDefault_DFAB43[5];
 1594  unsigned char TACDenial_DFAB44[5];
 1595  unsigned char TACOnline_DFAB45[5];
 1596  unsigned char RiskManagementThreshold_DFAB46[6];
 1597  unsigned char RiskManagementTargetPercentage_DFAB47;
 1598  unsigned char RiskManagementMaximumTargetPercentage_DFAB48;
 1599  unsigned char CallbackTimeout_DFAB4D[2];
 1600  unsigned char TornTransactionInterval_DFAB4E[2];
 1601  unsigned char AdditionalTerminalCapabilitiesExt_DF3A[5];
 1602 } EMV_CTLS_APPLIDATA_RK_TYPE;
 1603 
 1608  /* Byte 1 */
 1609 #define INPUT_CTLS_APL_RK_9F1C_0 0x01 
 1610 #define INPUT_CTLS_APL_RK_9F1A_0 0x02 
 1611 #define INPUT_CTLS_APL_RK_9F35_0 0x04 
 1612 #define INPUT_CTLS_APL_RK_9F33_0 0x08 
 1613 #define INPUT_CTLS_APL_RK_9F40_0 0x10 
 1614 #define INPUT_CTLS_APL_RK_9F09_0 0x20 
 1615 #define INPUT_CTLS_APL_RK_9F15_0 0x40 
 1616 #define INPUT_CTLS_APL_RK_DFAB31_0 0x80 
 1617  /* Byte 2 */
 1618 #define INPUT_CTLS_APL_RK_DFAB40_1 0x01 
 1619 #define INPUT_CTLS_APL_RK_DFAB41_1 0x02 
 1620 #define INPUT_CTLS_APL_RK_DFAB42_1 0x04 
 1621 #define INPUT_CTLS_APL_RK_DFAB43_1 0x08 
 1622 #define INPUT_CTLS_APL_RK_DFAB44_1 0x10 
 1623 #define INPUT_CTLS_APL_RK_DFAB45_1 0x20 
 1624 #define INPUT_CTLS_APL_RK_DFAB46_1 0x40 
 1625 #define INPUT_CTLS_APL_RK_DFAB47_1 0x80 
 1626 /* Byte 3 */
 1627 #define INPUT_CTLS_APL_RK_DFAB48_2 0x01 
 1628 #define INPUT_CTLS_APL_RK_DFAB4D_2 0x02 
 1629 #define INPUT_CTLS_APL_RK_DFAB4E_2 0x04 
 1630 #define INPUT_CTLS_APL_RK_DF3A_2 0x08 
 1631 
 1633 
 1637 
 1641 typedef struct EMV_CTLS_APPLIDATA_SK_STRUCT {
 1642  unsigned char IncludedData[8];
 1643  unsigned char TermIdent_9F1C[8];
 1644  unsigned char TerminalCountryCode_9F1A[2];
 1645  unsigned char TerminalType_9F35;
 1646  unsigned char TerminalCapabilities_9F33[3];
 1647  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1648  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1649  unsigned char MerchantCategoryCode_9F15[2];
 1650  char MerchantNameAndLocation_9F4E[40+1];
 1651  unsigned char AppFlowCap_DFAB31[5];
 1652  unsigned char ContactlessFloorLimit_DFAB40[6];
 1653  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1654  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1655  unsigned char TACDefault_DFAB43[5];
 1656  unsigned char TACDenial_DFAB44[5];
 1657  unsigned char TACOnline_DFAB45[5];
 1658  unsigned char TermCap_aboveCVMLimit_DFAB53[3];
 1659  unsigned char TermCap_belowCVMLimit_DFAB54[3];
 1660 } EMV_CTLS_APPLIDATA_SK_TYPE;
 1661 
 1666  /* Byte 1 */
 1667 #define INPUT_CTLS_APL_SK_9F1C_0 0x01 
 1668 #define INPUT_CTLS_APL_SK_9F1A_0 0x02 
 1669 #define INPUT_CTLS_APL_SK_9F35_0 0x04 
 1670 #define INPUT_CTLS_APL_SK_9F33_0 0x08 
 1671 #define INPUT_CTLS_APL_SK_9F40_0 0x10 
 1672 #define INPUT_CTLS_APL_SK_9F09_0 0x20 
 1673 #define INPUT_CTLS_APL_SK_9F15_0 0x40 
 1674 #define INPUT_CTLS_APL_SK_9F4E_0 0x80 
 1675  /* Byte 2 */
 1676 #define INPUT_CTLS_APL_SK_DFAB31_1 0x01 
 1677 #define INPUT_CTLS_APL_SK_DFAB40_1 0x02 
 1678 #define INPUT_CTLS_APL_SK_DFAB41_1 0x04 
 1679 #define INPUT_CTLS_APL_SK_DFAB42_1 0x08 
 1680 #define INPUT_CTLS_APL_SK_DFAB43_1 0x10 
 1681 #define INPUT_CTLS_APL_SK_DFAB44_1 0x20 
 1682 #define INPUT_CTLS_APL_SK_DFAB45_1 0x40 
 1683 #define INPUT_CTLS_APL_SK_DFAB53_1 0x80 
 1684  /* Byte 3 */
 1685 #define INPUT_CTLS_APL_SK_DFAB54_2 0x01 
 1686 
 1688 
 1690 // PagoBancomat //
 1692 
 1696 typedef struct EMV_CTLS_APPLIDATA_PB_STRUCT {
 1697  unsigned char IncludedData[8];
 1698  unsigned char TermIdent_9F1C[8];
 1699  unsigned char TerminalCountryCode_9F1A[2];
 1701  unsigned char TerminalType_9F35;
 1703  unsigned char TerminalTransactionQualifier_9F66[4];
 1705  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1707  char MerchantNameAndLocation_9F4E[40+1];
 1709  unsigned char AppFlowCap_DFAB31[5];
 1711  unsigned char ContactlessFloorLimit_DFAB40[6];
 1713  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1715  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1718  unsigned char TACDefault_DFAB43[5];
 1721  unsigned char TACDenial_DFAB44[5];
 1723  unsigned char TACOnline_DFAB45[5];
 1725  unsigned char RiskManagementThreshold_DFAB46[6];
 1727  unsigned char RiskManagementTargetPercentage_DFAB47;
 1729  unsigned char RiskManagementMaximumTargetPercentage_DFAB48;
 1732  unsigned char TACSwitchInterface_DFAB55[5];
 1734  unsigned char IACSwitchInterface_DFAB56[5];
 1737 } EMV_CTLS_APPLIDATA_PB_TYPE;
 1740 
 1745  /* Byte 1 */
 1746 #define INPUT_CTLS_APL_PB_9F1C_0 0x01 
 1747 #define INPUT_CTLS_APL_PB_9F1A_0 0x02 
 1748 #define INPUT_CTLS_APL_PB_9F35_0 0x04 
 1749 #define INPUT_CTLS_APL_PB_9F66_0 0x08 
 1750 #define INPUT_CTLS_APL_PB_9F09_0 0x10 
 1751 #define INPUT_CTLS_APL_PB_9F4E_0 0x20 
 1752 #define INPUT_CTLS_APL_PB_DFAB31_0 0x40 
 1753 #define INPUT_CTLS_APL_PB_DFAB40_0 0x80 
 1754 /* Byte 2 */
 1755 #define INPUT_CTLS_APL_PB_DFAB41_1 0x01 
 1756 #define INPUT_CTLS_APL_PB_DFAB42_1 0x02 
 1757 #define INPUT_CTLS_APL_PB_DFAB43_1 0x04 
 1758 #define INPUT_CTLS_APL_PB_DFAB44_1 0x08 
 1759 #define INPUT_CTLS_APL_PB_DFAB45_1 0x10 
 1760 #define INPUT_CTLS_APL_PB_DFAB46_1 0x20 
 1761 #define INPUT_CTLS_APL_PB_DFAB47_1 0x40 
 1762 #define INPUT_CTLS_APL_PB_DFAB48_1 0x80 
 1763 /* Byte 3 */
 1764 #define INPUT_CTLS_APL_PB_DFAB55_2 0x01 
 1765 #define INPUT_CTLS_APL_PB_DFAB56_2 0x02 
 1766 
 1768 // WISE //
 1771 
 1785 typedef struct EMV_CTLS_APPLIDATA_WK_STRUCT {
 1786  unsigned char IncludedData[8];
 1787  unsigned char AcquirerIdentifier_9F01[6];
 1788  unsigned char TermIdent_9F1C[8];
 1789  unsigned char TerminalCountryCode_9F1A[2];
 1790  unsigned char TerminalType_9F35;
 1791  unsigned char TerminalCapabilities_9F33[3];
 1792  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1793  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1794  unsigned char MerchantCategoryCode_9F15[2];
 1795  char MerchantIdentifier_9F16[15+1];
 1796  char MerchantNameAndLocation_9F4E[40+1];
 1797  unsigned char TecSupport_DFAB30;
 1798  unsigned char AppFlowCap_DFAB31[5];
 1799  unsigned char ContactlessFloorLimit_DFAB40[6];
 1800  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1801  unsigned char ContactlessCVMRequiredLimit_DFAB42[6];
 1802 } EMV_CTLS_APPLIDATA_WK_TYPE;
 1803 
 1808 #define INPUT_CTLS_APL_WK_9F01_0 0x01 
 1809 #define INPUT_CTLS_APL_WK_9F1C_0 0x02 
 1810 #define INPUT_CTLS_APL_WK_9F1A_0 0x04 
 1811 #define INPUT_CTLS_APL_WK_9F35_0 0x08 
 1812 #define INPUT_CTLS_APL_WK_9F33_0 0x10 
 1813 #define INPUT_CTLS_APL_WK_9F40_0 0x20 
 1814 #define INPUT_CTLS_APL_WK_9F09_0 0x40 
 1815 #define INPUT_CTLS_APL_WK_9F15_0 0x80 
 1816 
 1817 #define INPUT_CTLS_APL_WK_9F16_1 0x01 
 1818 #define INPUT_CTLS_APL_WK_9F4E_1 0x02 
 1819 #define INPUT_CTLS_APL_WK_DFAB30_1 0x04 
 1820 #define INPUT_CTLS_APL_WK_DFAB31_1 0x08 
 1821 #define INPUT_CTLS_APL_WK_DFAB40_1 0x10 
 1822 #define INPUT_CTLS_APL_WK_DFAB41_1 0x20 
 1823 #define INPUT_CTLS_APL_WK_DFAB42_1 0x40 
 1824 
 1825 
 1828 // CPACE //
 1830 
 1833 typedef struct EMV_CTLS_APPLIDATA_BK_STRUCT {
 1834  unsigned char IncludedData[8];
 1835  unsigned char TermIdent_9F1C[8];
 1836  unsigned char TerminalCountryCode_9F1A[2];
 1837  unsigned char TerminalType_9F35;
 1838  unsigned char TerminalCapabilities_9F33[3];
 1839  unsigned char AdditionalTerminalCapabilities_9F40[5];
 1840  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1841  unsigned char MerchantCategoryCode_9F15[2];
 1842  char MerchantIdentifier_9F16[15+1];
 1843  char MerchantNameAndLocation_9F4E[40+1];
 1844  unsigned char AcquirerIdentifier_9F01[6];
 1845  unsigned char AppFlowCap_DFAB31[5];
 1846  unsigned char CVM_aboveLimit_DF8118;
 1847  unsigned char CVM_belowLimit_DF8119;
 1848  unsigned char KernelConfiguration_DF811B;
 1849  unsigned char TACDefault_DF8120[5];
 1850  unsigned char TACDenial_DF8121[5];
 1851  unsigned char TACOnline_DF8122[5];
 1852  unsigned char FloorLimit_DF8123[6];
 1853  unsigned char TransactionLimitNoCDCVM_DF8124[6];
 1854  unsigned char TransactionLimitCDCVM_DF8125[6];
 1855  unsigned char CVMRequiredLimit_DF8126[6];
 1856  unsigned char MessageHoldTime_DF812D[3];
 1857  EMV_CTLS_DATA_TYPE CHV_CS_MessageTable_DF8131;
 1858  unsigned char RR_TimeToleranceMin_DF8132[2];
 1859  unsigned char RR_TimeToleranceMax_DF8133[2];
 1860  unsigned char RR_TransmissionTime_CAPDU_DF8134[2];
 1861  unsigned char RR_TransmissionTime_RAPDU_DF8135[2];
 1862  unsigned char RR_MinTimeDifferenceLimit_DF8136[2];
 1863  unsigned char RR_TransTimeMismatchLimit_DF8137;
 1864 } EMV_CTLS_APPLIDATA_BK_TYPE;
 1865 
 1870 #define INPUT_CTLS_APL_BK_9F1C_0 0x01 
 1871 #define INPUT_CTLS_APL_BK_9F1A_0 0x02 
 1872 #define INPUT_CTLS_APL_BK_9F35_0 0x04 
 1873 #define INPUT_CTLS_APL_BK_9F33_0 0x08 
 1874 #define INPUT_CTLS_APL_BK_9F40_0 0x10 
 1875 #define INPUT_CTLS_APL_BK_9F09_0 0x20 
 1876 #define INPUT_CTLS_APL_BK_9F15_0 0x40 
 1877 #define INPUT_CTLS_APL_BK_9F16_0 0x80 
 1878 
 1879 #define INPUT_CTLS_APL_BK_9F4E_1 0x01 
 1880 #define INPUT_CTLS_APL_BK_9F01_1 0x02 
 1881 #define INPUT_CTLS_APL_BK_DFAB31_1 0x04 
 1882 #define INPUT_CTLS_APL_BK_DF8118_1 0x08 
 1883 #define INPUT_CTLS_APL_BK_DF8119_1 0x10 
 1884 #define INPUT_CTLS_APL_BK_DF811B_1 0x20 
 1885 #define INPUT_CTLS_APL_BK_DF8120_1 0x40 
 1886 #define INPUT_CTLS_APL_BK_DF8121_1 0x80 
 1887 
 1888 #define INPUT_CTLS_APL_BK_DF8122_2 0x01 
 1889 #define INPUT_CTLS_APL_BK_DF8123_2 0x02 
 1890 #define INPUT_CTLS_APL_BK_DF8124_2 0x04 
 1891 #define INPUT_CTLS_APL_BK_DF8125_2 0x08 
 1892 #define INPUT_CTLS_APL_BK_DF8126_2 0x10 
 1893 #define INPUT_CTLS_APL_BK_DF812D_2 0x20 
 1894 #define INPUT_CTLS_APL_BK_DF8131_2 0x40 
 1895 #define INPUT_CTLS_APL_BK_DF8132_2 0x80 
 1896 
 1897 #define INPUT_CTLS_APL_BK_DF8133_3 0x01 
 1898 #define INPUT_CTLS_APL_BK_DF8134_3 0x02 
 1899 #define INPUT_CTLS_APL_BK_DF8135_3 0x04 
 1900 #define INPUT_CTLS_APL_BK_DF8136_3 0x08 
 1901 #define INPUT_CTLS_APL_BK_DF8137_3 0x10 
 1902 
 1903 
 1906 // MIR //
 1908 
 1912 typedef struct EMV_CTLS_APPLIDATA_MR_STRUCT {
 1913  unsigned char IncludedData[8];
 1914  unsigned char TermIdent_9F1C[8];
 1915  unsigned char TerminalCountryCode_9F1A[2];
 1916  unsigned char TerminalType_9F35;
 1917  unsigned char VersionNumber_9F09[2*EMV_CTLS_MAX_APP_VERS];
 1918  unsigned char MerchantCategoryCode_9F15[2];
 1919  char MerchantNameAndLocation_9F4E[40+1];
 1920  unsigned char AcquirerIdentifier_9F01[6];
 1921  unsigned char TerminalFloorLimit_DF51[6];
 1922  unsigned char TerminalNoCVMLimit_DF52[6];
 1923  unsigned char TerminalContactlessLimitNonCDCVM_DF53[6];
 1924  unsigned char TerminalContactlessLimitCDCVM_DF54[6];
 1925  unsigned char TerminalTPMCapabilities_DF55[2];
 1926  unsigned char TransactionRecoveryLimit_DF56;
 1927  unsigned char AppFlowCap_DFAB31[5];
 1928  unsigned char TACDefault_DFAB43[5];
 1929  unsigned char TACDenial_DFAB44[5];
 1930  unsigned char TACOnline_DFAB45[5];
 1931  EMV_CTLS_DATA_TYPE DataExchangeTagList_DFAB57;
 1932 } EMV_CTLS_APPLIDATA_MR_TYPE;
 1933 
 1938  /* Byte 1 */
 1939 #define INPUT_CTLS_APL_MR_9F1C_0 0x01 
 1940 #define INPUT_CTLS_APL_MR_9F1A_0 0x02 
 1941 #define INPUT_CTLS_APL_MR_9F35_0 0x04 
 1942 #define INPUT_CTLS_APL_MR_9F09_0 0x08 
 1943 #define INPUT_CTLS_APL_MR_9F15_0 0x10 
 1944 #define INPUT_CTLS_APL_MR_9F4E_0 0x20 
 1945 #define INPUT_CTLS_APL_MR_9F01_0 0x40 
 1946 #define INPUT_CTLS_APL_MR_DF51_0 0x80 
 1947 /* Byte 2 */
 1948 #define INPUT_CTLS_APL_MR_DF52_1 0x01 
 1949 #define INPUT_CTLS_APL_MR_DF53_1 0x02 
 1950 #define INPUT_CTLS_APL_MR_DF54_1 0x04 
 1951 #define INPUT_CTLS_APL_MR_DF55_1 0x08 
 1952 #define INPUT_CTLS_APL_MR_DF56_1 0x10 
 1953 #define INPUT_CTLS_APL_MR_DFAB31_1 0x20 
 1954 #define INPUT_CTLS_APL_MR_DFAB43_1 0x40 
 1955 #define INPUT_CTLS_APL_MR_DFAB44_1 0x80 
 1956 /* Byte 3 */
 1957 #define INPUT_CTLS_APL_MR_DFAB45_2 0x01 
 1958 #define INPUT_CTLS_APL_MR_DFAB57_2 0x02 
 1959 
 1961 
 1963 // Domestic //
 1965 
 1969 typedef struct EMV_CTLS_APPLIDATA_DOM_STRUCT {
 1970  unsigned char IncludedData[8];
 1971  unsigned char AppFlowCap_DFAB31[5];
 1972  unsigned char ContactlessTransactionLimit_DFAB41[6];
 1973  } EMV_CTLS_APPLIDATA_DOM_TYPE;
 1974 
 1979 /* Byte 1 */
 1980 #define INPUT_CTLS_APL_DOM_DFAB31_0 0x01 
 1981 #define INPUT_CTLS_APL_DOM_DFAB41_0 0x02 
 1982 
 1984 
 1989 /* Byte 1 */
 1990 #define EMV_CTLS_FLOW_DOM_EXPLICIT_SELECT 0x01 
 1991 
 1993 // global //
 1996 
 2001 typedef struct EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_STRUCT {
 2002 
 2003  unsigned char IncludedData[8];
 2004 
 2005  // Global ADK related parameters
 2006  unsigned char ASI_DFAB02;
 2007  unsigned char AppFlowCap_DFAB03[5];
 2010  EMV_CTLS_APPLI_TYPE PriorityApplications_DFAB04[EMV_ADK_MAX_PRIO_APP];
 2012  unsigned char SpecialTRXConfig_DFAB05[8];
 2014  char ChksumEntryPoint_DFAB06[EMV_ADK_CHECKSUM_ASCII_SIZE];
 2016  char ChksumKernel_DFAB07[EMV_ADK_CHECKSUM_ASCII_SIZE];
 2018  unsigned char RetapFieldOff_DFAB08;
 2020 
 2023  // Global kernel related parameters. These are relevant for ADK AND kernel configuration and therefore are handled for each of the kernels (if applicable only)
 2024  EMV_CTLS_DATA_TYPE AdditionalTagsTRM_DFAB20;
 2025  EMV_CTLS_DATA_TYPE AdditionalTagsCRD_DFAB21;
 2029  char DefaultApplicationName_DFAB22[16+1];
 2037  unsigned InternalKernelId_DFAB23;
 2040 
 2045  union {
 2046  EMV_CTLS_APPLIDATA_MK_TYPE MK;
 2047  EMV_CTLS_APPLIDATA_GC_TYPE GC;
 2048  EMV_CTLS_APPLIDATA_VK_TYPE VK;
 2049  EMV_CTLS_APPLIDATA_AK_TYPE AK;
 2050  EMV_CTLS_APPLIDATA_JK_TYPE JK;
 2051  EMV_CTLS_APPLIDATA_DK_TYPE DK;
 2052  EMV_CTLS_APPLIDATA_IK_TYPE IK;
 2053  EMV_CTLS_APPLIDATA_EK_TYPE EK;
 2054  EMV_CTLS_APPLIDATA_PK_TYPE PK;
 2055  EMV_CTLS_APPLIDATA_CK_TYPE CK;
 2056  EMV_CTLS_APPLIDATA_GK_TYPE GK;
 2057  EMV_CTLS_APPLIDATA_RK_TYPE RK;
 2058  EMV_CTLS_APPLIDATA_WK_TYPE WK;
 2059  EMV_CTLS_APPLIDATA_BK_TYPE BK;
 2060  EMV_CTLS_APPLIDATA_SK_TYPE SK;
 2061  EMV_CTLS_APPLIDATA_PB_TYPE PB;
 2062  EMV_CTLS_APPLIDATA_MR_TYPE MR;
 2063  EMV_CTLS_APPLIDATA_DOM_TYPE DOM;
 2064  } Scheme;
 2065 
 2066 } EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE;
 2067 
 2072  /* Byte 1 */
 2073 #define INPUT_CTLS_APL_GLOB_DFAB02_0 0x01 
 2074 #define INPUT_CTLS_APL_GLOB_DFAB03_0 0x02 
 2075 #define INPUT_CTLS_APL_GLOB_DFAB04_0 0x04 
 2076 #define INPUT_CTLS_APL_GLOB_DFAB05_0 0x08 
 2077 #define INPUT_CTLS_APL_GLOB_DFAB06_0 0x10 
 2078 #define INPUT_CTLS_APL_GLOB_DFAB07_0 0x20 
 2079 #define INPUT_CTLS_APL_GLOB_DFAB08_0 0x40 
 2080  /* Byte 2 */
 2081 #define INPUT_CTLS_APL_GLOB_DFAB20_1 0x01 
 2082 #define INPUT_CTLS_APL_GLOB_DFAB21_1 0x02 
 2083 #define INPUT_CTLS_APL_GLOB_DFAB22_1 0x04 
 2084 #define INPUT_CTLS_APL_GLOB_DFAB23_1 0x08 
 2085 
 2087 // ========================================================================================================
 2088 // === EMV TRANSACTION DATA ===
 2089 // ========================================================================================================
 2090 
 2095 typedef struct EMV_CTLS_PAYMENT_STRUCT // EMV_CTLS_PAYMENT_TYPE
 2096 {
 2097  unsigned char Amount[6];
 2098  unsigned char CurrencyTrans[2];
 2099  unsigned char ExpTrans;
 2100  unsigned char Date[3];
 2101  unsigned char Time[3];
 2102  unsigned char TransCount[4];
 2103  unsigned char Cashback_Amount[6];
 2104  unsigned char Force_Online;
 2106  unsigned char Online_Switch;
 2107  unsigned char uc_AccountType;
 2108  EMV_CTLS_TAGLIST_TYPE Additional_Result_Tags;
 2110 } EMV_CTLS_PAYMENT_TYPE;
 2111 
 2112 
 2117 typedef struct EMV_CTLS_APPS_SELECT_STRUCT // EMV_CTLS_APPS_SELECT_TYPE
 2118 {
 2119  EMV_CTLS_APPLI_TYPE ExcludeEmvAIDs[3];
 2120  EMV_CTLS_APPLI_KERNEL_TYPE ExcludeCombos[3];
 2121 } EMV_CTLS_APPS_SELECT_TYPE;
 2122 
 2123 
 2124 // ========================================================================================================
 2125 // === APPLICATION SETUP ===
 2126 // ========================================================================================================
 2127 
 2132  // byte 1
 2133 #define CLTRXOP_SUPPRESS_ERRMSGBEEP 0x01 
 2134 #define CLTRXOP_REPEAT_L1 0x02 
 2135 #define CLTRXOP_NO_DOMESTIC_KERNEL 0x04 
 2136 #define CLTRXOP_NO_GLOBAL 0x08 
 2137 #define CLTRXOP_PP_TORNTXN_RESET 0x10 
 2138 #define CLTRXOP_AK_DELAYED_AUTH 0x20 
 2139 
 2140 #define CLTRXOP_REMOVEALL_BUT_EXCLUDED 0x80 
 2141 // byte 2
 2142 #define CLTRXOP_CANDLIST_CALLBACK 0x01 
 2143 #define CLTRXOP_APPSELECTED_CALLBACK 0x02 
 2144 #define CLTRXOP_NO_BUL12 0x04 
 2145 //#define CLTRXOP_MULTIPLE_MATCH_AID 0x08 
 2146 #define CLTRXOP_NO_LONGEST_AID_MATCH 0x10 
 2147 #define CLTRXOP_SPURIOUS_CARD_DETECT 0x20 
 2148 #define CLTRXOP_NO_PAN_RETRIEVE_DEF 0x40 
 2149 #define CLTRXOP_RND_CALLBACK 0x80 
 2151 //byte 3
 2152 #define CLTRXOP_OMIT_CHECKSUM_CHECK 0x01 
 2153 #define CLTRXOP_STOP_ON_CHKSUM_DIFF 0x02 
 2154 #define CLTRXOP_NO_AMOUNT_PRECHECK 0x08 
 2155 #define CLTRXOP_L1_ERROR_CALLBACK 0x10 
 2157 #define CLTRXOP_SETUP_WAIT_FOR_ERROR 0x20 
 2159 #define CLTRXOP_WEEK_PRIORITY_APPS 0x40 
 2161 #define CLTRXOP_PRELOAD_TRANSACTION 0x80 
 2162 //byte 4
 2163 #define CLTRXOP_KEEP_MULTIPLE_KERNEL 0x01 
 2164 #define CLTRXOP_TIP_AMOUNT_ZERO 0x02 
 2165 #define CLTRXOP_SILENT_ON_EMPTY_LIST 0x04 
 2166 #define CLTRXOP_CVM_REQUIRED 0x08 
 2167 #define CLTRXOP_LONG_TAP_TIMER 0x10 
 2168 #define CLTRXOP_SEND_POI_INFORMATION 0x20 
 2171 #define CLTRXOP_BEEP_BY_BUZZER 0x40 
 2172 #define CLTRXOP_BEEP_OS_VOLUME 0x80 
 2173 //byte 5
 2174 
 2180 #define EMV_CTLS_TRAN_TYPE_PURE_GETDATA 0x78 
 2181 #define EMV_CTLS_TRAN_TYPE_PURE_PUTDATA 0x79 
 2182 #define EMV_CTLS_TRAN_TYPE_PURE_AUTHENTICATE 0x90 
 2183 
 2187 #define CLTRX_PASSTHROUGH_OFF 0x00 
 2192 #define CLTRX_PASSTHROUGH_NONISO 0x01 
 2193 #define CLTRX_PASSTHROUGH_ALL 0x02 
 2194 
 2196 #define CLTRX_CARDTYPE_ISO 0x01 
 2201 #define CLTRX_CARDTYPE_MIFARE 0x02 
 2202 #define CLTRX_CARDTYPE_OTHER 0x03 
 2203 
 2205 typedef struct EMV_CTLS_START_STRUCT
 2208 {
 2209  unsigned char ServerPollTimeout;
 2210  unsigned char TransType;
 2214  EMV_CTLS_PAYMENT_TYPE TXN_Data;
 2216  EMV_CTLS_APPS_SELECT_TYPE SEL_Data;
 2218  unsigned char TxnOptions[5];
 2219  unsigned char passthroughCardTypes;
 2220  unsigned char Info_Included_Data[8];
 2223 } EMV_CTLS_START_TYPE;
 2224 
 2225 
 2230 /* Byte 1 */
 2231 #define INPUT_CTLS_SEL_AMOUNT 0x01 
 2232 #define INPUT_CTLS_SEL_AMOUNT_CURRENCY 0x02 
 2233 #define INPUT_CTLS_SEL_CUREXPONENT 0x04 
 2234 #define INPUT_CTLS_SEL_DATE 0x08 
 2235 #define INPUT_CTLS_SEL_TIME 0x10 
 2236 #define INPUT_CTLS_SEL_TTYPE 0x20 
 2237 #define INPUT_CTLS_SEL_EXCLUDE_AID 0x40 
 2238 #define INPUT_CTLS_SEL_FORCE_ONLINE 0x80 
 2239 /* Byte 2 */
 2240 #define INPUT_CTLS_SEL_ONLINE_SWITCH 0x01 
 2241 #define INPUT_CTLS_SEL_TXN_COUNTER 0x02 
 2242 #define INPUT_CTLS_SEL_CB_AMOUNT 0x04 
 2243 #define INPUT_CTLS_SEL_ACCOUNT_TYPE 0x08 
 2244 #define INPUT_CTLS_SEL_TXN_OPTIONS 0x10 
 2245 #define INPUT_CTLS_SEL_POLL_TIMEOUT 0x20 
 2246 #define INPUT_CTLS_SEL_PASSTHROUGH 0x40 
 2247 #define INPUT_CTLS_SEL_ADD_TAGS 0x80 
 2248 
 2249 // Byte 3, Info_Included_Data[2]
 2250 #define INPUT_CTLS_SEL_EXCLUDE_COMBO 0x01 
 2251 
 2253 /* Byte 1 */
 2258 #define EMV_CTLS_SETUPTRX_RES_CHKSUM_DIFF 0x01 
 2259 
 2261 /* Byte 1 */
 2266 #define OUTPUT_CTLS_SEL_TXN_INFO 0x01 
 2267 
 2269 typedef struct EMV_CTLS_STARTRES_STRUCT
 2272 {
 2273  unsigned char TxnInformation[5];
 2274  unsigned char T_DF61_Info_Received_Data[8];
 2276 } EMV_CTLS_STARTRES_TYPE;
 2277 
 2278 
 2279 
 2280 // ========================================================================================================
 2281 // === TRANSACTION EXECUTION ===
 2282 // ========================================================================================================
 2283 
 2286 typedef struct EMV_CTLS_HOST_STRUCT
 2287 {
 2288  char OnlineResult;
 2289  unsigned char AuthResp[2];
 2293  unsigned char TxnOptions[5];
 2295  unsigned short LenScriptData;
 2296  const unsigned char* ScriptData;
 2297  unsigned char LenAuth;
 2299  const unsigned char* AuthData;
 2300  unsigned char AuthResp_Positive[2];
 2301  unsigned char AuthResp_SwitchInterface[2];
 2304  unsigned char AuthResp_OnlinePIN[2];
 2310  unsigned char amountUpd[EMV_ADK_BCD_AMOUNT_LEN];
 2314  unsigned char amountOthUpd[EMV_ADK_BCD_AMOUNT_LEN];
 2316  unsigned char Info_Included_Data[8];
 2317 } EMV_CTLS_HOST_TYPE;
 2318 
 2319 
 2324 /* Byte 1 */
 2325 #define INPUT_CTLS_ONL_ONLINE_RESP 0x01 
 2326 #define INPUT_CTLS_ONL_AUTH_RESP 0x02 
 2327 #define INPUT_CTLS_ONL_TXN_OPTIONS 0x04 
 2328 #define INPUT_CTLS_ONL_SCRIPT 0x08 
 2329 #define INPUT_CTLS_ONL_AUTHDATA 0x10 
 2330 #define INPUT_CTLS_ONL_ARC_POSITIVE 0x20 
 2331 #define INPUT_CTLS_ONL_ARC_SWITCH_IF 0x40 
 2332 #define INPUT_CTLS_ONL_ARC_ONLINE_PIN 0x80 
 2333 
 2334 #define INPUT_CTLS_ONL_AMOUNT 0x01 
 2335 #define INPUT_CTLS_ONL_AMOUNT_OTH 0x02 
 2336 
 2338 
 2339 #define EMV_ADK_CL_SCRIPTRES_LEN (EMV_ADK_SCRIPT_RESULT_MAX * EMV_ADK_SCRIPT_RESULT_LEN + 6) 
 2340 
 2341 typedef struct EMV_CTLS_CONT_OFFL_STRUCT
 2345 {
 2346  unsigned long options;
 2347  unsigned char Info_Included_Data[8];
 2348 } EMV_CTLS_CONT_OFFL_TYPE;
 2349 
 2352 // @brief Contents of the input in EMV_CTLS_CONT_OFFL_STRUCT::Info_Included_Data, EMV_CTLS_ContinueOfflineExt()
 2353 #define INPUT_CTLS_CONT_OFFL_OPTIONS 0x01 
 2354 
 2355 
 2360 #define INPUT_CTLS_CONT_OFFL_OPT_PIN 0x01 
 2361 #define INPUT_CTLS_CONT_OFFL_OPT_PIN_CANCELLED 0x02 
 2362 #define INPUT_CTLS_CONT_OFFL_OPT_PIN_BYPASSED 0x04 
 2363 #define INPUT_CTLS_CONT_OFFL_OPT_PIN_ERROR 0x06 
 2364 
 2366 typedef struct EMV_CTLS_TRANSRES_STRUCT // EMV_CTLS_TRANSRES_TYPE
 2371 {
 2372  unsigned long StatusInfo;
 2373  unsigned char T_9F27_CryptInfo;
 2374  unsigned char T_9F36_ATC[2];
 2375  unsigned char T_9F26_Cryptogramm[8];
 2376  unsigned char T_5A_PAN[10];
 2377  unsigned char T_9F39_POSEntryMode;
 2378  unsigned char T_5F24_AppExpDate[3];
 2379  unsigned char T_9F41_TransCount[4];
 2380  unsigned char T_5F34_PANSequenceNo[1];
 2382  EMV_CTLS_TRACK2_TYPE T_57_DataTrack2;
 2383  EMV_CTLS_ISSDATA_TYPE T_9F10_DataIssuer;
 2384  unsigned char T_9F37_RandomNumber[4];
 2385  unsigned char T_95_TVR[5];
 2386  unsigned char T_9A_Date[3];
 2387  unsigned char T_9F21_Time[3];
 2388  unsigned char T_9C_TransType;
 2389  unsigned char T_5F2A_CurrencyTrans[2];
 2394  unsigned char T_82_AIP[2];
 2395  unsigned char T_9F1A_TermCountryCode[2];
 2396  unsigned char T_9F34_CVM_Res[3];
 2397  unsigned char T_9F33_TermCap[3];
 2398  unsigned char T_9F35_TermTyp;
 2399  unsigned char T_9F1E_IFDSerialNumber[8];
 2400  EMV_CTLS_APPLI_TYPE T_84_DFName;
 2401  unsigned char T_9F09_VerNum[2];
 2402  unsigned char T_9B_TSI[2];
 2403  EMV_CTLS_APPLI_TYPE T_9F06_AID;
 2404  unsigned char Add_TXN_Tags[EMV_ADK_ADD_TAG_SIZE];
 2405  unsigned char T_9F02_TXNAmount[6];
 2406  unsigned char T_9F03_TXNAdditionalAmount[6];
 2407  unsigned char T_9F53_MC_CatCode[1];
 2408  unsigned char AppName[16+1];
 2409  unsigned char T_5F25_AppEffDate[3];
 2411  unsigned char T_5F28_IssCountryCode[2];
 2412  unsigned char T_9F45_DataAuthCode[2];
 2413  EMV_CTLS_ICCRND_TYPE T_9F4C_ICCDynNumber;
 2414  unsigned char TACDenial[5];
 2415  unsigned char TACOnline[5];
 2416  unsigned char TACDefault[5];
 2417  unsigned char T_9F0E_IACDenial[5];
 2418  unsigned char T_9F0F_IACOnline[5];
 2419  unsigned char T_9F0D_IACDefault[5];
 2420  unsigned char T_9F40_AddTermCap[5];
 2421  unsigned char T_9F16_MerchIdent[15];
 2422  EMV_CTLS_CRDNAME_TYPE T_5F20_Cardholder;
 2423  unsigned char T_5F2D_Lang_Pref[8+1];
 2424  unsigned char T_9F08_ICC_Appli_Vers_No[2];
 2425  unsigned char T_5F36_Trx_Currency_Exp;
 2426  unsigned char T_5F30_ServiceCode[2];
 2427  unsigned long CL_Mode;
 2428  unsigned char T_9F66_CL_TTQ[4];
 2432  EMV_CTLS_TRACK2_TYPE T_DF5D_CL_MAGSTRIPE_T2;
 2433  unsigned char T_9F6C_CL_VISA_CTQ[2];
 2435  unsigned char T_9F5D_CL_VISA_AOSA[EMV_ADK_BCD_AMOUNT_LEN];
 2436  unsigned char T_DF8104_CL_MC_BALANCE[EMV_ADK_BCD_AMOUNT_LEN];
 2437  unsigned char T_DF8105_CL_MC_BALANCE[EMV_ADK_BCD_AMOUNT_LEN];
 2438  unsigned char T_DF64_KernelDebugData[32];
 2439  unsigned char ctlsCardType;
 2440  unsigned char ScriptResults[EMV_ADK_CL_SCRIPTRES_LEN];
 2444  unsigned short ScriptResultsLen;
 2445 
 2446  unsigned char T_DF61_Info_Received_Data[8];
 2447 } EMV_CTLS_TRANSRES_TYPE;
 2448 
 2449 
 2454 /* Byte 1 */
 2455 #define TRX_CTLS_STATUSINFO 0x01 
 2456 #define TRX_CTLS_9F27_CRYPTINFO 0x02 
 2457 #define TRX_CTLS_9F36_ATC 0x04 
 2458 #define TRX_CTLS_9F26_CRYPTOGRAMM 0x08 
 2459 #define TRX_CTLS_5A_PAN 0x10 
 2460 #define TRX_CTLS_9F39_POS_ENTRY_MODE 0x20 
 2461 #define TRX_CTLS_5F24_APPEXPDATE 0x40 
 2462 #define TRX_CTLS_9F41_TRANSCOUNT 0x80 
 2463 
 2464 /* Byte 2 */
 2465 #define TRX_CTLS_5F34_PAN_SEQ_NUMBER 0x01 
 2466 #define TRX_CTLS_57_DATA_TRACK2 0x02 
 2467 #define TRX_CTLS_9F10_DATAISSUER 0x04 
 2468 #define TRX_CTLS_9F37_RANDOM_NUMBER 0x08 
 2469 #define TRX_CTLS_95_TVR 0x10 
 2470 #define TRX_CTLS_9A_DATE 0x20 
 2471 #define TRX_CTLS_9F21_TIME 0x40 
 2472 #define TRX_CTLS_9C_TRANSTYPE 0x80 
 2473 
 2474 /* Byte 3 */
 2475 #define TRX_CTLS_5F2A_TRANS_CURRENCY 0x01 
 2476 #define TRX_CTLS_82_AIP 0x02 
 2477 #define TRX_CTLS_9F1A_TERM_COUNTRY_CODE 0x04 
 2478 #define TRX_CTLS_9F34_CVM_RES 0x08 
 2479 #define TRX_CTLS_9F33_TERMCAP 0x10 
 2480 #define TRX_CTLS_9F35_TERMTYP 0x20 
 2481 #define TRX_CTLS_9F1E_IFDSERIALNUMBER 0x40 
 2482 #define TRX_CTLS_84_DFNAME 0x80 
 2483 
 2484 /* Byte 4 */
 2485 #define TRX_CTLS_9F09_VERNUM 0x01 
 2486 #define TRX_CTLS_9B_TSI 0x02 
 2487 #define TRX_CTLS_9F06_AID 0x04 
 2488 #define TRX_CTLS_ADDITIONAL_TAGS 0x08 
 2489 #define TRX_CTLS_APPNAME 0x10 
 2490 #define TRX_CTLS_5F25_APPEFFDATE 0x20 
 2491 #define TRX_CTLS_5F28_ISSCOUNTRYCODE 0x40 
 2492 #define TRX_CTLS_9F45_DATAAUTHCODE 0x80 
 2493 
 2494 /* Byte 5 */
 2495 #define TRX_CTLS_9F4C_ICCDYNNUMBER 0x01 
 2496 #define TRX_CTLS_TAC_DENIAL 0x02 
 2497 #define TRX_CTLS_TAC_ONLINE 0x04 
 2498 #define TRX_CTLS_TAC_DEFAULT 0x08 
 2499 #define TRX_CTLS_9F0E_IAC_DENIAL 0x10 
 2500 #define TRX_CTLS_9F0F_IAC_ONLINE 0x20 
 2501 #define TRX_CTLS_9F0D_IAC_DEFAULT 0x40 
 2502 #define TRX_CTLS_9F40_TERMCAP 0x80 
 2503 
 2504 /* Byte 6 */
 2505 #define TRX_CTLS_RFU_B6B1 0x01 
 2506 #define TRX_CTLS_9F16_MERCHANT_ID 0x02 
 2507 #define TRX_CTLS_RFU_B6B3 0x04 
 2508 #define TRX_CTLS_5F20_CARDHOLDER 0x08 
 2509 #define TRX_CTLS_5F2D_LANG_PREFERENCE 0x10 
 2510 #define TRX_CTLS_9F08_ICC_APPLI_VERS_NO 0x20 
 2511 #define TRX_CTLS_5F36_TRX_CURRENCY_EXPO 0x40 
 2512 #define TRX_CTLS_5F30_SERVICE_CODE 0x80 
 2513 
 2514 /* Byte 7 */
 2515 #define TRX_CTLS_CTLS_MODES 0x01 
 2516 #define TRX_CTLS_9F66_TTQ 0x02 
 2517 #define TRX_CTLS_DF5D_CL_MAGSTRIPE 0x04 
 2518 #define TRX_CTLS_9F6C_VISA_CTQ 0x08 
 2519 #define TRX_CTLS_9F5D_VISA_AOSA 0x10 
 2520 #define TRX_CTLS_DF8104_MC_BALANCE 0x20 
 2521 #define TRX_CTLS_DF8105_MC_BALANCE 0x40 
 2522 #define TRX_CTLS_DF64_KERNEL_DEBUG 0x80 
 2523 
 2524 /* Byte 8 */
 2525 #define TRX_CTLS_9F02_AMOUNT 0x01 
 2526 #define TRX_CTLS_9F03_CB_AMOUNT 0x02 
 2527 #define TRX_CTLS_9F53_MC_CATCODE 0x04 
 2528 #define TRX_CTLS_CARDTYPE 0x08 
 2529 #define TRX_CTLS_SCRIPTRESULTS 0x10 
 2530 
 2532 
 2537 #define EXIT_CTLS_BASE 0x00 
 2538 #define EXIT_CTLS_STOP_LEDS 0x01 
 2541 #define EXIT_CTLS_COMPLETE 0x02 
 2543 #define EXIT_CTLS_SEND_CALLBACK EXIT_CTLS_COMPLETE 
 2547 
 2549 
 2554 #define END_TXN_CTLS_NO_LEDS_OFF 0x01 
 2555 
 2557 
 2558 // ========================================================================================================
 2559 // === MISCELLANEOUS ===
 2560 // ========================================================================================================
 2561 
 2562 #define MAX_CTLS_CONF_KEYS 99 
 2563 
 2564 typedef struct EMV_CTLS_CAPKEY_STRUCT
 2570 {
 2571  unsigned char *RID;
 2572  unsigned char Index;
 2573  unsigned char *Key;
 2574  unsigned char KeyLen;
 2575  unsigned char Exponent;
 2576  unsigned char *Hash;
 2577  unsigned char noOfRevocEntries;
 2578  unsigned char* RevocEntries;
 2579 } EMV_CTLS_CAPKEY_TYPE;
 2580 
 2583 typedef struct EMV_CTLS_CAPREAD_STRUCT
 2584 {
 2585  unsigned char RID[5];
 2586  unsigned char Index;
 2587  unsigned char KeyLen;
 2588 } EMV_CTLS_CAPREAD_TYPE;
 2589 
 2594 #define EMV_CTLS_DE_REQ_DEK 0x00 
 2595 #define EMV_CTLS_DE_REQ_DET 0x01 
 2596 
 2598 #define EMV_CTLS_DE_STATE_0 0x00 
 2603 #define EMV_CTLS_DE_STATE_1 0x01 
 2604 #define EMV_CTLS_DE_STATE_2 0x02 
 2605 #define EMV_CTLS_DE_STATE_3 0x03 
 2606 #define EMV_CTLS_DE_STATE_4 0x04 
 2607 #define EMV_CTLS_DE_STATE_5 0x05 
 2608 #define EMV_CTLS_DE_STATE_6 0x06 
 2609 #define EMV_CTLS_DE_STATE_7 0x07 
 2610 #define EMV_CTLS_DE_STATE_8 0x08 
 2611 
 2613 #define EMV_CTLS_DE_MODE_STOP 0x00 
 2618 #define EMV_CTLS_DE_MODE_CONT 0x01 
 2619 #define EMV_CTLS_DE_MODE_MORE 0x02 
 2620 
 2622 // ========================================================================================================
 2623 // === CALLBACK FUNCTION for additional features and apps interaction during the transaction ===
 2624 // === (PIN, Application Selection, DCC, ...) ===
 2625 // ========================================================================================================
 2626 
 2637 #define TAG_BF0B_INIT_CALLBACK_THREAD 0xBF0B 
 2638 #define TAG_BF0C_CTLS_CBK_APP_SELECTED 0xBF0C 
 2643 #define TAG_BF0E_CBK_DATA_EXCHANGE 0xBF0E 
 2655 #define TAG_BF0F_EXIT_CALLBACK_THREAD 0xBF0F 
 2659 #define TAG_BF10_CTLS_CBK_LEDS 0xBF10 
 2663 #define TAG_BF12_CBK_MODIFY_CAND 0xBF12 
 2671 #define TAG_BF13_CBK_RND 0xBF13 
 2690 #define TAG_BF14_CBK_TEXT_DISPLAY 0xBF14 
 2695 #define TAG_BF15_CBK_CARD_TAPPED 0xBF15 
 2706 #define TAG_BF16_CBK_SERVICE_SHORTLIST 0xBF16 
 2711 #define TAG_BF17_CBK_SERVICE_FOR_GENAC 0xBF17 
 2716 #define TAG_BF18_CBK_PURE_GET_PUT_DATA 0xBF18 
 2720 #define TAG_BF19_CTLS_CBK_BEEP 0xBF19 
 2725 #define TAG_BF7F_CTLS_CBK_TRACE 0xBF7F 
 2729 
 2736 
 2737 // ========================================================================================================
 2738 // === SERIALIZED FUNCTIONAL CONTACTLESS INTERFACE
 2739 // ========================================================================================================
 2740 
 2741 
 2742 #define EMV_CTLS_SER_Init_Framework(dataIn, dataInLen, dataOut, dataOutLen) EMV_CTLS_SER_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (dataIn), (dataInLen), (dataOut), (dataOutLen))
 2743 
 2744 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_Init_Framework_Client(const char *version, const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2745 
 2746 DLL_CLC void EMV_CTLS_SER_Exit_Framework(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2747 
 2748 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_MapVirtualTerminal(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2749 
 2750 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_StoreCAPKey(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2751 
 2752 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_ReadCAPKeys(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2753 
 2754 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_SetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2755 
 2756 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_GetTermData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2757 
 2758 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_SetAppliDataSchemeSpecific(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2759 
 2760 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_GetAppliDataSchemeSpecific(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2761 
 2762 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_SetupTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2763 
 2764 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_ContinueOffline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2765 
 2766 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_ContinueOnline(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2767 
 2768 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_fetchTxnTags(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2769 
 2770 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_EndTransaction(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2771 
 2772 DLL_CLC unsigned char EMV_CTLS_SER_TransparentCommand(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen)
 2773 #if defined(_VOS) || !defined(_VOS2)
 2774 ;
 2775 #else
 2776 __attribute ((deprecated));
 2777 #endif
 2778 
 2779 DLL_CLC unsigned char EMV_CTLS_SER_SmartISO(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2780 
 2781 DLL_CLC unsigned char EMV_CTLS_SER_SmartReset(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2782 
 2783 DLL_CLC unsigned char EMV_CTLS_SER_SmartPowerOff(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2784 
 2785 DLL_CLC unsigned char EMV_CTLS_SER_CardRemoval(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2786 
 2787 DLL_CLC unsigned char EMV_CTLS_SER_LED_SetMode(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2788 
 2789 DLL_CLC unsigned char EMV_CTLS_SER_LED(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2790 
 2791 DLL_CLC unsigned char EMV_CTLS_SER_LED_ConfigDesign(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2792 
 2793 DLL_CLC unsigned char EMV_CTLS_SER_Break(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2794 
 2795 DLL_CLC EMV_ADK_INFO EMV_CTLS_SER_GetCandidateData(const unsigned char *dataIn, unsigned short dataInLen, unsigned char *dataOut, unsigned short *dataOutLen);
 2796 
 2797 // ========================================================================================================
 2798 // === FUNCTIONAL CONTACTLESS INTERFACE ===
 2799 // ========================================================================================================
 2800 
 2801 
 2806 #define EMV_CTLS_INIT_OPT_BASE_INIT 0x00000001 
 2807 #define EMV_CTLS_INIT_OPT_L1_DUMP 0x00000002 
 2808 #define EMV_CTLS_INIT_OPT_AUTO_RETAP 0x00000004 
 2809 #define EMV_CTLS_INIT_OPT_CONFIG_MODE 0x00000008 
 2810 #define EMV_CTLS_INIT_OPT_USE_DEF_VT_CAPK 0x00000010 
 2813 #define EMV_CTLS_INIT_OPT_DELETE_ALL 0x00000020 
 2814 #define EMV_CTLS_INIT_OPT_USE_VFI 0x00000040 
 2815 #define EMV_CTLS_INIT_OPT_USE_VERTEX 0x00000080 
 2816 #define EMV_CTLS_INIT_OPT_TRACE 0x00000100 
 2817 #define EMV_CTLS_INIT_OPT_TRACE_CLT 0x00000200 
 2818 #define EMV_CTLS_INIT_OPT_LED_CBK_EXT 0x00000400 
 2819 #define EMV_CTLS_INIT_OPT_TRACE_SYSLOG 0x00000800 
 2822 #define EMV_CTLS_INIT_OPT_LED_VFI_INT 0x00001000 
 2823 #define EMV_CTLS_INIT_OPT_VFI_BUZZER_ADK 0x00004000 
 2824 #define EMV_CTLS_INIT_OPT_CALC_CHKSUM 0x00010000 
 2825 #define EMV_CTLS_INIT_OPT_NEW_CFG_INTF 0x00020000 
 2826 #define EMV_CTLS_INIT_OPT_BEEP_CBK_EXT 0x00040000 
 2827 #define EMV_CTLS_INIT_OPT_TRACE_ADK_LOG 0x00080000 
 2828 #define EMV_CTLS_INIT_OPT_TIMINGS 0x00100000 
 2829 #define EMV_CTLS_INIT_OPT_SHARED_CONFIG 0x00200000 
 2830 #define EMV_CTLS_INIT_OPT_EPP_MASTER 0x00400000 
 2833 
 2837 #define EMV_CTLS_INIT_VIRT_1 0x01000000 
 2838 #define EMV_CTLS_INIT_VIRT_2 0x02000000 
 2839 #define EMV_CTLS_INIT_VIRT_3 0x03000000 
 2840 #define EMV_CTLS_INIT_VIRT_4 0x04000000 
 2841 #define EMV_CTLS_INIT_VIRT_5 0x05000000 
 2842 #define EMV_CTLS_INIT_VIRT_6 0x06000000 
 2843 #define EMV_CTLS_INIT_VIRT_7 0x07000000 
 2844 #define EMV_CTLS_INIT_VIRT_8 0x08000000 
 2845 #define EMV_CTLS_INIT_VIRT_9 0x09000000 
 2846 #define EMV_CTLS_INIT_VIRT_10 0x0A000000 
 2847 #define EMV_CTLS_INIT_VIRT_11 0x0B000000 
 2848 #define EMV_CTLS_INIT_VIRT_12 0x0C000000 
 2849 #define EMV_CTLS_INIT_VIRT_13 0x0D000000 
 2850 #define EMV_CTLS_INIT_VIRT_14 0x0E000000 
 2851 #define EMV_CTLS_INIT_VIRT_15 0x0F000000 
 2852 #define EMV_CTLS_INIT_VIRT_16 0x10000000 
 2853 #define EMV_CTLS_INIT_VIRT_17 0x11000000 
 2854 #define EMV_CTLS_INIT_VIRT_18 0x12000000 
 2855 #define EMV_CTLS_INIT_VIRT_19 0x13000000 
 2856 #define EMV_CTLS_INIT_VIRT_20 0x14000000 
 2857 
 2859 #define EMV_CTLS_INIT_RES_CHKSUM_DIFF 0x00000001 
 2864 #define EMV_CTLS_INIT_RES_VFI_READER_MISS 0x00000002 
 2865 #define EMV_CTLS_INIT_RES_ENTRY_POINT_MISS 0x00000004 
 2866 
 2868 #define EMV_CTLS_Init_Framework(numberOfAIDs, EMV_Callback, externalData, options,ulResult) EMV_CTLS_Init_Framework_Client(EMV_CTLS_FRAMEWORK_VERSION, (numberOfAIDs), (EMV_Callback), (externalData), (options),(ulResult))
 2869 
 2895 /*****************************************************************************
 2896 * EMV_CTLS_Init_Framework_Client
 2897 *****************************************************************************/
 2902 DLL_CLC EMV_ADK_INFO EMV_CTLS_Init_Framework_Client(const char *version, unsigned char numberOfAIDs, EMV_CTLS_CALLBACK_FnT EMV_Callback, void* externalData, unsigned long options,unsigned long *ulResult);
 2903 
 2904 /*****************************************************************************
 2905 * EMV_CTLS_Exit_Framework
 2906 *****************************************************************************/
 2918 DLL_CLC void EMV_CTLS_Exit_Framework(void);
 2919 
 2920 /*****************************************************************************
 2921 * EMV_CTLS_Exit_Framework_extended
 2922 *****************************************************************************/
 2932 DLL_CLC void EMV_CTLS_Exit_Framework_extended(unsigned char options);
 2933 
 2934 
 2935 /*****************************************************************************
 2936 * EMV_CTLS_CLIENT_GetVersion
 2937 *****************************************************************************/
 2945 DLL_CLC const char* EMV_CTLS_CLIENT_GetVersion(void);
 2946 
 2947 
 2948 /*****************************************************************************
 2949 * EMV_CTLS_FRAMEWORK_GetVersion
 2950 *****************************************************************************/
 2962 DLL_CLC const char* EMV_CTLS_FRAMEWORK_GetVersion(void);
 2963 
 2964 
 2965 /*****************************************************************************
 2966 * EMV_CTLS_MapVirtualTerminal
 2967 *****************************************************************************/
 2991 DLL_CLC EMV_ADK_INFO EMV_CTLS_MapVirtualTerminal(EMV_ADK_VIRTUALTERMMAP_TYPE VirtualTermMapType, unsigned char *TLVSwitchValue, unsigned int TLVBufLen, unsigned char VirtualTerminal);
 2992 
 2993 
 2994 /*****************************************************************************
 2995 * EMV_CTLS_StoreCAPKey
 2996 *****************************************************************************/
 3020 DLL_CLC EMV_ADK_INFO EMV_CTLS_StoreCAPKey(EMV_ADK_HANDLE_RECORD_TYPE eHandleCAPKeyType, const EMV_CTLS_CAPKEY_TYPE *pxKeyData);
 3021 
 3022 
 3023 /*****************************************************************************
 3024 * EMV_CTLS_ReadCAPKeys
 3025 *****************************************************************************/
 3052 DLL_CLC EMV_ADK_INFO EMV_CTLS_ReadCAPKeys(EMV_CTLS_CAPREAD_TYPE *pxKeyData, unsigned char *pucMaxnum);
 3053 
 3054 /*****************************************************************************
 3055 * EMV_CTLS_ReadCAPKeyInfo
 3056 *****************************************************************************/
 3093 DLL_CLC EMV_ADK_INFO EMV_CTLS_GetCAPKeyInfo(EMV_CTLS_CAPREAD_TYPE *pxKeyData, unsigned capacity, unsigned offset, unsigned* numberRead, unsigned* numberConfigured);
 3094 
 3095 /*****************************************************************************
 3096 * EMV_CTLS_SetTermData
 3097 *****************************************************************************/
 3119 DLL_CLC EMV_ADK_INFO EMV_CTLS_SetTermData(EMV_CTLS_TERMDATA_TYPE* pxTermData);
 3120 
 3121 /*****************************************************************************
 3122 * EMV_CTLS_GetTermData
 3123 *****************************************************************************/
 3143 DLL_CLC EMV_ADK_INFO EMV_CTLS_GetTermData(EMV_CTLS_TERMDATA_TYPE* pxTermData);
 3144 
 3145 /*****************************************************************************
 3146 * EMV_CTLS_SetAppliDataSchemeSpecific
 3147 *****************************************************************************/
 3177 DLL_CLC EMV_ADK_INFO EMV_CTLS_SetAppliDataSchemeSpecific(EMV_ADK_HANDLE_RECORD_TYPE eHandleAppliType, EMV_CTLS_APPLI_KERNEL_TYPE* pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE* pxAppliData);
 3178 
 3179 /*****************************************************************************
 3180 * EMV_CTLS_GetAppliDataSchemeSpecific
 3181 *****************************************************************************/
 3211 DLL_CLC EMV_ADK_INFO EMV_CTLS_GetAppliDataSchemeSpecific(EMV_ADK_READAPPLI_TYPE eReadAppliType, EMV_CTLS_APPLI_KERNEL_TYPE* pxAID, EMV_CTLS_APPLIDATA_SCHEME_SPECIFIC_TYPE* pxAppliData);
 3212 
 3213 /*****************************************************************************
 3214 * EMV_CTLS_ApplyConfiguration
 3215 *****************************************************************************/
 3239 DLL_CLC EMV_ADK_INFO EMV_CTLS_ApplyConfiguration(unsigned long options);
 3240 
 3241 /*****************************************************************************
 3242 * EMV_CTLS_SetupTransaction
 3243 *****************************************************************************/
 3272 DLL_CLC EMV_ADK_INFO EMV_CTLS_SetupTransaction( EMV_CTLS_START_TYPE *pxStartInput, EMV_CTLS_STARTRES_TYPE* pxStartRes);
 3273 
 3274 /*****************************************************************************
 3275 * EMV_CTLS_ContinueOffline
 3276 *****************************************************************************/
 3330 DLL_CLC EMV_ADK_INFO EMV_CTLS_ContinueOffline(EMV_CTLS_TRANSRES_TYPE *pxTransRes);
 3331 
 3332 /*****************************************************************************
 3333 * EMV_CTLS_ContinueOfflineExt
 3334 *****************************************************************************/
 3385 DLL_CLC EMV_ADK_INFO EMV_CTLS_ContinueOfflineExt(EMV_CTLS_CONT_OFFL_TYPE *pxContOfflInput, EMV_CTLS_TRANSRES_TYPE *pxTransRes);
 3386 
 3387 /*****************************************************************************
 3388 * EMV_CTLS_ContinueOnline
 3389 *****************************************************************************/
 3422 DLL_CLC EMV_ADK_INFO EMV_CTLS_ContinueOnline(EMV_CTLS_HOST_TYPE *pxOnlineInput, EMV_CTLS_TRANSRES_TYPE *pxTransRes);
 3423 
 3424 /*****************************************************************************
 3425 * EMV_CTLS_fetchTxnTags
 3426 *****************************************************************************/
 3461 DLL_CLC EMV_ADK_INFO EMV_CTLS_fetchTxnTags(unsigned long options, unsigned long* requestedTags, unsigned short noOfRequestedTags, unsigned char* tlvBuffer, unsigned short bufferLength, unsigned short* tlvDataLength );
 3462 
 3463 /*****************************************************************************
 3464 * EMV_CTLS_fetchTxnDOL
 3465 *****************************************************************************/
 3498 DLL_CLC EMV_ADK_INFO EMV_CTLS_fetchTxnDOL(unsigned long options, const unsigned char* DOL, unsigned dolLen, unsigned char* buffer, unsigned bufferSize, unsigned* dataLength);
 3499 
 3500 /*****************************************************************************
 3501 * EMV_CTLS_EndTransaction
 3502 *****************************************************************************/
 3520 DLL_CLC EMV_ADK_INFO EMV_CTLS_EndTransaction(unsigned long options);
 3521 
 3522 
 3523 // ========================================================================================================
 3524 // === CONTACTLESS FUNCTIONS to be implemented in entity in which framework is running ===
 3525 // ========================================================================================================
 3526 
 3531 # define CONTACTLESS_LED_FIRST 0x01 
 3532 # define CONTACTLESS_LED_SECOND 0x02 
 3533 # define CONTACTLESS_LED_THIRD 0x04 
 3534 # define CONTACTLESS_LED_FOURTH 0x08 
 3535 // and a second list for those who like colours according Book A, Architecture and General Requirements, 9.3.3 Option 2 for Card Read Successfully/Processing Error
 3536 # define CONTACTLESS_LED_BLUE CONTACTLESS_LED_FIRST 
 3537 # define CONTACTLESS_LED_YELLOW CONTACTLESS_LED_SECOND 
 3538 # define CONTACTLESS_LED_GREEN CONTACTLESS_LED_THIRD 
 3539 # define CONTACTLESS_LED_RED CONTACTLESS_LED_FOURTH 
 3540 // the original and deprecated list.
 3541 # define CONTACTLESS_LED_0 CONTACTLESS_LED_FIRST 
 3542 # define CONTACTLESS_LED_1 CONTACTLESS_LED_SECOND 
 3543 # define CONTACTLESS_LED_2 CONTACTLESS_LED_THIRD 
 3544 # define CONTACTLESS_LED_3 CONTACTLESS_LED_FOURTH 
 3545 
 3546 # define CONTACTLESS_LED_ALL 0x0F 
 3547 # define CONTACTLESS_LED_LOGO 0x80 
 3548 
 3550 #define CONTACTLESS_LED_OFF 0x00 
 3555 #define CONTACTLESS_LED_ON 0x01 
 3556 #define CONTACTLESS_LED_IDLE_BLINK 0x02 
 3557 #define CONTACTLESS_LED_ONLINE_BLINK 0x03 
 3558 #define CONTACTLESS_LED_HANDLE_EOT_SILENT 0x04 
 3559 #define CONTACTLESS_LED_HANDLE_EOT_SUCCESS 0x05 
 3560 #define CONTACTLESS_LED_HANDLE_EOT_FAIL 0x06 
 3561 #define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK 0x07 
 3562 #define CONTACTLESS_LED_HANDLE_EOT_FAIL_BLINK_3 0x08 
 3563 
 3565 #define CONTACTLESS_LED_MODE_OFF 0x00 
 3570 #define CONTACTLESS_LED_MODE_API 0x01 
 3571 #define CONTACTLESS_LED_MODE_EMV 0x02 
 3572 
 3574 #define EMV_CTLS_BEEP_SUCCESS 1 
 3579 #define EMV_CTLS_BEEP_ALERT 2 
 3580 
 3582 #define EMV_CTLS_RFU_1 0x01 
 3587 #define EMV_CTLS_RESET_KEEP_FIELD_ON 0x02 
 3588 #define EMV_CTLS_SPURIOUS_DETECT 0x04 
 3589 #define EMV_CTLS_EMV_COMPLIANT 0x08 
 3590 #define EMV_CTLS_RESET_NO_EMV 0x10 
 3591 #define EMV_CTLS_RESET_PICC_OPEN_ONLY 0x20 
 3592 #define EMV_CTLS_SKIP_FIELD_ON 0x40 
 3593 #define EMV_CTLS_RESET_PLUS_PPSE 0x40 
 3594 
 3597 #define EMV_CTLS_OPEN_READER EMV_CTLS_RESET_PICC_OPEN_ONLY 
 3598 #define EMV_CTLS_CLOSE_READER 0x40 
 3599 #define EMV_CTLS_DETECT_REMOVAL 0x80 
 3600 
 3601 
 3603 /*****************************************************************************
 3604 * EMV_CTLS_TransparentCommand
 3605 *****************************************************************************/
 3633 DLL_CLC unsigned char EMV_CTLS_TransparentCommand (unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut)
 3634 #if defined(_VOS) || !defined(_VOS2)
 3635 ;
 3636 #else
 3637 __attribute ((deprecated));
 3638 #endif
 3639 
 3640 
 3641 /*****************************************************************************
 3642 * EMV_CTLS_TransparentSend
 3643 *****************************************************************************/
 3664 DLL_CLC unsigned char EMV_CTLS_TransparentSend (unsigned short usInDataLen, unsigned char *pucDataIn)
 3665 #if defined(_VOS) || !defined(_VOS2)
 3666 ;
 3667 #else
 3668 __attribute ((deprecated));
 3669 #endif
 3670 
 3671 
 3672 /*****************************************************************************
 3673 * EMV_CTLS_TransparentReceive
 3674 *****************************************************************************/
 3695 DLL_CLC unsigned char EMV_CTLS_TransparentReceive (unsigned short *pusOutDataLen, unsigned char *pucDataOut)
 3696 #if defined(_VOS) || !defined(_VOS2)
 3697 ;
 3698 #else
 3699 __attribute ((deprecated));
 3700 #endif
 3701 
 3702 
 3703 /*****************************************************************************
 3704 * EMV_CTLS_SmartISO
 3705 *****************************************************************************/
 3727 DLL_CLC unsigned char EMV_CTLS_SmartISO (unsigned char ucOptions, unsigned short usInDataLen, unsigned char *pucDataIn, unsigned short *pusOutDataLen, unsigned char *pucDataOut, unsigned short usOutBufferLength);
 3728 
 3729 /*****************************************************************************
 3730 * EMV_CTLS_SmartReset
 3731 *****************************************************************************/
 3752 DLL_CLC unsigned char EMV_CTLS_SmartReset(unsigned char ucOptions, unsigned char* pucCardInfo, unsigned long* pnInfoLength);
 3753 
 3754 /*****************************************************************************
 3755 * EMV_CTLS_SmartPowerOff
 3756 *****************************************************************************/
 3774 DLL_CLC unsigned char EMV_CTLS_SmartPowerOff(unsigned char ucOptions);
 3775 
 3776 
 3777 /*****************************************************************************
 3778  * EMV_CTLS_CardRemoval
 3779  *****************************************************************************/
 3800 DLL_CLC unsigned char EMV_CTLS_CardRemoval(long timeoutMillis);
 3801 
 3802 /*****************************************************************************
 3803 * EMV_CTLS_LED_SetMode
 3804 *****************************************************************************/
 3825 DLL_CLC unsigned char EMV_CTLS_LED_SetMode(unsigned char ucLedMode);
 3826 
 3827 /*****************************************************************************
 3828 * EMV_CTLS_LED
 3829 *****************************************************************************/
 3856 DLL_CLC unsigned char EMV_CTLS_LED(unsigned char ucLedId, unsigned char ucLedState);
 3857 
 3858 /*****************************************************************************
 3859 * EMV_CTLS_LED_ConfigDesign
 3860 *****************************************************************************/
 3886 DLL_CLC unsigned char EMV_CTLS_LED_ConfigDesign(unsigned short width, unsigned short height, unsigned char* color_off, unsigned char* color_on,
 3887  unsigned short xRegion, unsigned short yRegion, unsigned short wRegion, unsigned short hRegion)
 3888 __attribute ((deprecated));
 3889 
 3890 
 3893 #define EMV_CTLS_LED_SHAPE_RECTANGLE 0 
 3894 #define EMV_CTLS_LED_SHAPE_CIRCLE 1 
 3895 
 3896 typedef struct EMV_CTLS_LED_COLORS_STRUCT
 3899 {
 3900  unsigned char num_colors;
 3901  unsigned char *colors;
 3902 } EMV_CTLS_LED_COLORS;
 3903 
 3906 typedef struct EMV_CTLS_LED_CONFIG_STRUCT
 3907 {
 3908  unsigned short region_x;
 3909  unsigned short region_y;
 3910  unsigned short region_width;
 3911  unsigned short region_height;
 3912  EMV_CTLS_LED_COLORS colors_off;
 3913  EMV_CTLS_LED_COLORS colors_on;
 3914  unsigned char *bg_color;
 3915  unsigned char shape;
 3916  unsigned short *shape_params;
 3917  unsigned char *options;
 3918 } EMV_CTLS_LED_CONFIG;
 3919 
 3920 /*****************************************************************************
 3921 * EMV_CTLS_LED_ConfigDesign_Extended
 3922 *****************************************************************************/
 3938 DLL_CLC unsigned char EMV_CTLS_LED_ConfigDesign_Extended(const EMV_CTLS_LED_CONFIG *led_config) __attribute ((deprecated));
 3939 
 3940 /*****************************************************************************
 3941 * EMV_CTLS_Break
 3942 *****************************************************************************/
 3957 DLL_CLC unsigned char EMV_CTLS_Break(void);
 3958 
 3959 #define EMV_CTLS_SUPPORTED_SIZE_9F0A 50 
 3960 #define EMV_CTLS_SUPPORTED_SIZE_DISC 50 
 3961 
 3962 typedef struct EMV_CTLS_CANDIDATE_DATA_STRUCT
 3968 {
 3969  unsigned char API;
 3970  unsigned char IIN[4];
 3971  unsigned char IBAN[35];
 3972  unsigned char BIC[12];
 3973  unsigned char country2[2];
 3974  unsigned char country3[3];
 3975  unsigned char len9F06;
 3976  unsigned char selData[1+EMV_CTLS_SUPPORTED_SIZE_9F0A];
 3977  unsigned char disc[1+50];
 3978 } EMV_CTLS_CANDIDATE_DATA_TYPE;
 3979 
 3980 #define EMV_CTLS_ADDTAG_COMBOS 6 
 3981 
 3982 /*****************************************************************************
 3983 * EMV_CTLS_GetCandidateData
 3984 *****************************************************************************/
 4009 DLL_CLC EMV_ADK_INFO EMV_CTLS_GetCandidateData(EMV_CTLS_CANDIDATE_DATA_TYPE *candidateData);
 4010 
 4011 /*****************************************************************************
 4012 * EMV_CTLS_GetCandidateDataMax
 4013 *****************************************************************************/
 4033 DLL_CLC EMV_ADK_INFO EMV_CTLS_GetCandidateDataMax(EMV_CTLS_CANDIDATE_DATA_TYPE *candidateData, unsigned maxCandidates);
 4034 
 4035 #ifdef __cplusplus
 4036 } // extern "C"
 4037 #endif
 4038 
 4039 #endif // #ifndef _EMV_CTLS_INTERFACE_H_
```
