---
hidden: true
title: sec2.h
---

<a href="sec2_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef SEC_H
 2 #define SEC_H
 3 
 4 #include <stdint.h>
 5 
 15 /***************************************************************************
 16  * Includes
 17  **************************************************************************/
 18 
 19 /***************************************************************************
 20  * Using
 21  **************************************************************************/
 22 
 23 /***************************************************************************
 24  * Module namspace: begin
 25  **************************************************************************/
 26 
 27 /***************************************************************************
 28 * Preprocessor constant definitions
 29 **************************************************************************/
 30 
 31 #define CODE_UNLOCK (0)
 32 #define CODE_LOCK (1)
 33 
 34 #define CODE_ACTION (0x80)
 35 
 36 #define RESP_CODE_SIZE ( 1)
 37 
 38 #define RESP_CODE_SUCCESS ( 0)
 39 #define RESP_CODE_FAILED ( 1)
 40 #define RESP_CODE_TIMEOUT ( 2)
 41 #define RESP_CODE_PIN_EQUAL ( 3)
 42 #define RESP_CODE_HOST_NOT_FOUND ( 4)
 43 
 44 #define RESP_CODE_PIN_CANCEL ( 20)
 45 #define RESP_CODE_PIN_BYPASS ( 21)
 46 #define RESP_CODE_PIN_CANCELED_BY_CLEAR_KEY ( 22)
 47 #define RESP_CODE_SIZE_ERROR ( 23)
 48 #define RESP_CODE_MAC_VER_FAILED ( 24)
 49 #define RESP_CODE_MSG_SIZE_TO_LONG ( 25)
 50 #define RESP_CODE_CMD_SEQ_ERROR ( 26)
 51 #define RESP_CODE_RETRY_LIMIT ( 31)
 52 #define RESP_CODE_INVALID_REQ ( 35)
 53 #define RESP_CODE_API_REQ ( 36)
 54 #define RESP_CODE_INVALID_CMD ( 37)
 55 #define RESP_CODE_INVALID_LOCAL_KEY_IDX ( 40)
 56 #define RESP_CODE_UPDATE_KEY_FAILED ( 41)
 57 #define RESP_CODE_TRANSPORT_KEYS_CHANGED ( 42)
 58 #define RESP_CODE_KEY_UPDATE_LIMIT ( 43)
 59 #define RESP_CODE_INVALID_KEY ( 45)
 60 #define RESP_CODE_PIN_BLOCKED ( 90)
 61 #define RESP_CODE_PIN_GET_CHALLENGE_ERROR ( 91)
 62 #define RESP_CODE_PIN_ENCIPHER_ERROR ( 92)
 63 #define RESP_CODE_PIN_VERIFY_FAILED ( 93)
 64 #define RESP_CODE_PIN_MISSING_PIN_BLOCK_DATA ( 94)
 65 #define RESP_CODE_INVALID_KEY_LENGTH ( 95)
 66 #define RESP_CODE_MISSING_TMK_OR_DUKPT_KEY ( 96)
 67 #define RESP_CODE_MISSING_TPK_OR_TAK ( 97)
 68 #define RESP_CODE_MISSING_STAN_OR_PAN ( 98)
 69 #define RESP_CODE_ADE_NOT_ACTIVE ( 99)
 70 #define RESP_CODE_CARD_REMOVED (100)
 71 #define RESP_CODE_TAMPERED (101)
 72 #define RESP_CODE_NOT_SUPPORTED_KSID (102)
 73 #define RESP_CODE_NOT_SUPPORTED_KEY_TYPE (103)
 74 #define RESP_CODE_ASYNC_PIN_NOT_READY (104)
 75 #define RESP_CODE_CRYPTO_DEVICE_BLOCKED (105)
 76 #define RESP_CODE_KSN_INCREMENTATION_ERROR (106)
 77 
 78 #define RESP_CODE_CMD_BUSY (249)
 79 #define RESP_CODE_INVALID_APP_ID (250)
 80 #define RESP_CODE_POS_INVALID_FIELD_LEN (251)
 81 #define RESP_CODE_POS_MSG_LEN (252)
 82 #define RESP_CODE_UNKNOWN_CMD (253)
 83 #define RESP_CODE_INVAL (254)
 84 
 85 #define RESP_ADE_NOT_ACTIVE RESP_CODE_ADE_NOT_ACTIVE
 86 
 87 
 88 
 89 #define ADD_SCREEN_TEXT (16)
 90 #define ACTION_CODE_SIZE ( 1)
 91 #define COMMAND_SIZE ( 1)
 92 #define DATA_ALGORITHM_SIZE ( 1)
 93 #define PAN_SIZE (10)
 94 #define STAN_SIZE ( 6)
 95 #define TRANS_AMOUNT_SIZE ( 6)
 96 #define TRANS_CURR_CODE_SIZE ( 2)
 97 #define ONLINE_PIN_CIPHER_BLOCK_SIZE ( 8)
 98 #define KSN_SIZE (10)
 99 #define AES_KSN_SIZE (12)
 100 #define POS_TIMEOUT_SIZE ( 1)
 101 #define HOST_ID_SIZE ( 1)
 102 #define KEY_TYPE_SIZE ( 1)
 103 #define LOCK_SIZE ( 1)
 104 #define PIN_ENTRY_TYPE_SIZE ( 1)
 105 #define PIN_BLOCK_FORMAT_SIZE ( 1)
 106 #define KEY_MANAGEMENT_SIZE ( 1)
 107 #define PIN_ALGORITHM_SIZE ( 1)
 108 #define PIN_TRY_FLAG_SIZE ( 1)
 109 #define TRANS_CURR_EXPONENT_SIZE ( 1)
 110 #define MAX_PIN_LENGTH_SIZE ( 1)
 111 #define MIN_PIN_LENGTH_SIZE ( 1)
 112 #define PIN_ENTRY_TIMEOUT_SIZE ( 2)
 113 #define PIN_CANCEL_SIZE ( 1)
 114 #define USE_DEFAULT_CV_FLAG_SIZE ( 1)
 115 #define MAC_MODE_SIZE ( 1)
 116 #define HTML_FILE_PATH_SIZE (128)
 117 
 118 #define MACRO_PAN_SIZE ( 6)
 119 
 120 #define KEK_FLAG_SIZE ( 1)
 121 #define AS2805_FUNC_SIZE ( 1)
 122 #define DES_IV_SIZE ( 8)
 123 
 124 #define POS_TIMEOUT_TS (2)
 125 #define ACTION_CODE_TS (2)
 126 #define HOST_KEY_FILE_TS (3)
 127 #define CODE_TS (2)
 128 #define HOST_ID_TS (2)
 129 #define KEY_TYPE_TS (2)
 130 #define KEY_DATA_TS (2)
 131 #define LOCK_TS (3)
 132 #define PAN_TS (2)
 133 #define STAN_TS (2)
 134 #define TRANS_AMOUNT_TS (2)
 135 #define TRANS_CURR_CODE_TS (2)
 136 #define TRANS_CURR_EXP_TS (2)
 137 #define PIN_BLOCK_FORMAT_TS (3)
 138 #define PIN_TRY_FLAG_TS (2)
 139 #define ADD_SCREEN_TEXT_TS (3)
 140 #define ADD_SCREEN_TEXT_2_TS (3)
 141 #define MIN_PIN_LENGTH_TS (3)
 142 #define MAX_PIN_LENGTH_TS (3)
 143 #define PIN_ENTRY_TIMEOUT_TS (3)
 144 #define MESS_FOR_MAC_TS (2)
 145 #define MAC_TS (2)
 146 #define MESS_FOR_ENC_TS (2)
 147 #define PIN_ENTRY_TYPE_TS (2)
 148 #define KEY_MANAGEMENT_TS (3)
 149 #define PIN_ALGORITHM_TS (3)
 150 #define DATA_ALGORITHM_TS (3)
 151 #define KSN_TS (3)
 152 #define TRANS_CAT_EXP_TS (2)
 153 #define PLAIN_TXT_PIN_BLOCK_TS (3)
 154 #define SCRIPT_NAME_TS (3)
 155 #define PIN_CANCEL_TS (3)
 156 #define ONLINE_PIN_CIPHER_TS (2)
 157 #define MESS_FOR_DEC_TS (3)
 158 #define FLAGS_TS (3)
 159 #define MSG_ENTER_PIN_TS (3)
 160 #define MSG_AMOUNT_TS (3)
 161 #define MSG_FONT_FILE_TS (3)
 162 #define MONITOR_PERIOD_TS (3)
 163 #define SCREEN_LINES_TS (3)
 164 #define PROMPT_FILL_TS (3)
 165 #define DUKPT_MASK_TS (3)
 166 
 167 
 168 /*
 169 #define ENTER_AND_ENCRYPT_PIN_COM (24)
 170 #define ENTER_AND_HOLD_PIN_COM (25)
 171 
 172 #define CANCEL_PIN_COM (27)
 173 //#define CANCEL_PROCESS_COM (36)
 174 //#define LOCK_CANCEL_PROCESS_COM (37)
 175 #define LOAD_DUKPT_COM (41)
 176 #define SELECT_HOST_CONF_COM (42)
 177 
 178 #define SET_SECURITY_CONF_COM (48)
 179 #define GET_SECURITY_CONF_COM (49)
 180 #define INCREMENT_KSN_COM (50)
 181 //#define DECRYPT_STREAM_COM (51)
 182 //#define ENCRYPT_STREAM_COM (52)
 183 //#define WAIT_FOR_CARD (53)
 184 //#define RESET_EXTERNAL_READER (54)
 185 #define AS2805_KEY_MGMENT_COM (55)
 186 #define SET_DUKPT_MASK_COM (59)
 187 #define GET_VSS_FILE_NAMES_COM (61)
 188 */
 189 
 190 enum sec_cmd_code
 191 {
 192  UPDATE_KEY_COM =43,
 193  RETRIEVE_ENCRYPTED_PIN_COM = 26,
 194  GENERATE_MAC_COM = 44,
 195  VERIFY_MAC_COM = 45,
 196  ENCRYPT_DATA_COM=46,
 197  DECRYPT_DATA_COM=47,
 198  GET_KEY_DATA_COM = 54,
 199  GET_SVC_VERSION_COM = 60,
 200  OPEN_SCHEMA_COM = 62,
 201  CLOSE_SCHEMA_COM = 63,
 202  PUT_TRANSACTIONDATA_COM = 64,
 203  GET_KEY_INVENTORY_COM = 65,
 204  GET_TRANSACTION_VALUE = 66,
 205  GET_PERMISSION = 67,
 206  CLEAR_TRANSACTIONDATA_COM = 68,
 207  GET_STATUS_COM = 69,
 208 
 209  CRT_CHECK_CONN_COM = 70,
 210  CRT_GET_CERT_CHAIN_COM = 71,
 211  CRT_GET_KEY_COM = 72,
 212  CRT_UPDATE_CERT_COM = 73,
 213  CRT_UPDATE_KEY_COM = 74,
 214  CRT_GET_SVC_VERSION_COM = 75,
 215 };
 216 
 217 
 218 #define AMOUNT_EMV_TS (2)
 219 #define CURR_CODE_EMV_TS (2)
 220 #define CURR_EXP_EMV_TS (2)
 221 
 222 #define DOUBLE_KEY_SIZE (32)
 223 
 224 
 225 #define MAPP_UNLOCK_DISPLAY (57)
 226 #define MAPP_LOCK_DISPLAY (58)
 227 
 228 #define INSTALL_VSS_COM (160)
 229 #define EXECUTE_VSS_MACRO_COM (161)
 230 
 231 #ifndef _VRXEVO
 232  #define SC_PIPE_NAME "/tmp/scdata";
 233  #define CERTSTORE_PIPE_NAME "/tmp/csdata";
 234 #else
 235  #define SC_PIPE_NAME "scdata";
 236  #define CERTSTORE_PIPE_NAME "csdata";
 237  #define DRIVE_RAM "I:"
 238  #define DRIVE_FLASH "F:"
 239 #endif
 240 
 241 // environment variables
 242 //#define LOGMASK_VALUE "SEC_LOGMASK"
 243 #define IPP_SET_SPEED "IPP19K"
 244 #define CFG_FILE_NAME "SCAPPCFG"
 245 #define CFG_FILE_NAME_DEF "sccfg.json"
 246 
 247 
 248 // Calculation basic parameters used by secDigits() for LRC/CRC:
 249 // Width of crc in bits (8, 16 or 32)
 250 // Generator polynomial (poly)
 251 // Initialization value (init=0 or -1 here)
 252 // Whether input bytes are reflected (refin=1) or not (refin=0) before being used
 253 // Whether the output crc is reflected (refot=1) or not (refot=0) at end of calculation
 254 // A value to exclusive-or to the final crc (xorot=0 or -1 here)
 255 //
 256 // Finally a check value (chk) is supplied to show the result of applying the alogorithm
 257 // to the 9 byte ascii test message "123456789"
 258 
 259 #define SEC_DIG_LRC 0x00 // width=8, poly=0x01, init=0, refin=0,refot=0,xorot=0, chk=0x31
 260 #define SEC_DIG_CRC_CRC16LSB 0x01 // width=16,poly=0xa001, init=0, refin=0,refot=0,xorot=0, chk=0xa47b
 261 #define SEC_DIG_CRC_CRC16MSB 0x02 // width=16,poly=0x8005, init=0, refin=0,refot=0,xorot=0, chk=0xfee8; CRC-16/BUYPASS
 262 #define SEC_DIG_CRC_CCITTLSB 0x03 // width=16,poly=0x8408, init=-1,refin=0,refot=0,xorot=0, chk=0x0520
 263 #define SEC_DIG_CRC_CCITTMSB 0x04 // width=16,poly=0x1021, init=-1,refin=0,refot=0,xorot=0, chk=0x29b1; CRC-16/CCITT-FALSE
 264 #define SEC_DIG_CRC_CRC32LSB_0 0x05 // width=32,poly=0x04c11db7,init=0, refin=1,refot=1,xorot=0, chk=0x2dfd2d88
 265 #define SEC_DIG_CRC_CRC32LSB 0x06 // width=32,poly=0x04c11db7,init=-1,refin=1,refot=1,xorot=-1,chk=0xcbf43926; CRC-32
 266 #define SEC_DIG_CRC_CRC16MSB_1 0x07 // width=16,poly=0x8005, init=0, refin=1,refot=1,xorot=0, chk=0xbb3d; CRC-16/ARC
 267 #define SEC_DIG_CRC_CCITTMSB_1 0x08 // width=16,poly=0x1021, init=-1,refin=1,refot=1,xorot=0, chk=0x6f91; CRC-16/MCRF4XX
 268 
 269 #define SEC_DIG_SHA1 0x10
 270 #define SEC_DIG_SHA256 0x11
 271 //#define SEC_DIG_SHA512 0x12
 272 
 273 namespace com_verifone_host
 274 {
 275 
 276 /***************************************************************************
 277  * Macro definitions
 278  **************************************************************************/
 279 
 280 /***************************************************************************
 281  * Data type definitions
 282  **************************************************************************/
 287  // for backward compatibility
 288  #define KEY_TYPE_TPK_FOR_PIN KEY_TYPE_PPK
 289  #define KEY_TYPE_TAK_FOR_GEN_MAC KEY_TYPE_MGK
 290  #define KEY_TYPE_TPK_FOR_ENC_DATA KEY_TYPE_DEK
 291  #define KEY_TYPE_TAK_FOR_VER_MAC KEY_TYPE_MVK
 292  #define KEY_TYPE_TPK_FOR_DEC_DATA KEY_TYPE_DDK
 293  #define KEY_TYPE_TPK_FOR_KEK KEY_TYPE_KEK
 294 
 296  enum key_type_e
 297  {
 298  KEY_TYPE__INVALID_E = -1,
 299  KEY_TYPE_TMK = 0,
 300  KEY_TYPE_PPK = 1,
 301  KEY_TYPE_MGK = 2,
 302  KEY_TYPE_DEK = 3,
 303  KEY_TYPE_TCU_PK = 4,
 304  KEY_TYPE_SPONSOR_PK = 5,
 305  KEY_TYPE_SPONSOR_MK = 6,
 306  KEY_TYPE_SPONSOR_KI = 7,
 307  KEY_TYPE_SEC_ACQ_KI = 8,
 308  KEY_TYPE_ACQUIRER_MK = 9,
 309  KEY_TYPE_SEC_ACQ_MK = 10,
 310  KEY_TYPE_ACQ_SESSION_KEYS = 11,
 311  KEY_TYPE_ENC_KI_FMT_0 = 12,
 312  KEY_TYPE_ENC_KI_FMT_1 = 13,
 313  KEY_TYPE_ENC_KI_FMT_2 = 14,
 314  KEY_TYPE_ENC_PPID = 15,
 315  KEY_TYPE_ENC_PPASN = 16,
 316  KEY_TYPE_KVC_KIA = 17,
 317  KEY_TYPE_KVC_KEK1 = 18,
 318  KEY_TYPE_MVK = 19,
 319  KEY_TYPE_DDK = 20,
 320  KEY_TYPE_KEK = 21,
 321  KEY_TYPE_DUKPT = 22,
 322  KEY_TYPE_CERT = 23,
 323  KEY_TYPE_DIRECT_MK_PLAIN = 24,
 327  KEY_TYPE_DIRECT_MK_ENC = 25,
 329  KEY_TYPE_DIRECT_SYSK_PLAIN = 26,
 333  KEY_TYPE_DIRECT_SYSK_ENC = 27,
 335  KEY_TYPE_DELETE_ALL_KEYS = 28,
 336  KEY_TYPE_DELETE_SYS_KEY = 29,
 337  KEY_TYPE_DIRECT_AUTHEX_ENC = 30,
 339  KEY_TYPE_DIRECT_AUTHEX_SYSK= 31,
 341  KEY_TYPE_DELETE_ALL_CUST_KEYS = 32,
 342  KEY_TYPE_DIRECT_CUSTOM_ASYM = 33,
 344  KEY_TYPE_DIRECT_CUSTOM_ASYM_SYSK = 34,
 346 };
 347  typedef uint8_t key_type_t;
 348 
 349 
 350 
 352  typedef enum pin_entry_type_e
 353  {
 354  PIN_ENTRY_TYPE__INVALID_E = -1,
 355  PIN_ENTRY_TYPE_MANDATORY_E = 0,
 356  PIN_ENTRY_TYPE_OPTIONAL_E = 1,
 357  PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_ENC_E = 2,
 358  PIN_ENTRY_TYPE_OPTIONAL_0LN_PIN_E = 3
 360  } pin_entry_type_t;
 361 
 362 
 364  typedef enum pin_block_format_e
 365  {
 366  PIN_BLOCK_FORMAT__INVALID_E = -1,
 367  PIN_BLOCK_FORMAT_ISO0_E = 0,
 368  PIN_BLOCK_FORMAT_ISO1_E = 1,
 369  PIN_BLOCK_FORMAT_ISO2_E = 2,
 370  PIN_BLOCK_FORMAT_ISO3_E = 3,
 371  PIN_BLOCK_FORMAT_ISO4_E = 4,
 372  PIN_BLOCK_FORMAT_INC_KSN = 4,
 373  } pin_block_format_t;
 374 
 375 #define PIN_BLOCK_FORMAT_MIN (PIN_BLOCK_FORMAT_ISO0_E)
 376 #define PIN_BLOCK_FORMAT_MAX (PIN_BLOCK_FORMAT_INC_KSN)
 377 
 378 
 380 #define NEXT_KSN 1 
 381 #define SAME_KSN 2 
 382 #define VISADSP_NEXT_KSN NEXT_KSN
 383 #define VISADSP_SAME_KSN SAME_KSN
 384 
 385 #define DO_KSN_INCREMENTATION "KSN incrementation"
 386 
 387 
 388 /***************************************************************************
 389  * Exported variable declarations
 390  **************************************************************************/
 391 
 392 /***************************************************************************
 393  * Exported class declarations
 394  **************************************************************************/
 395 
 396 /***************************************************************************
 397  * Module namspace: end
 398  **************************************************************************/
 399 }
 400 
 401 #endif // SEC_H
 402 
```
