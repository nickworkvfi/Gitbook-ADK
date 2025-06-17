---
title: sdiapi/src/sdiapi/sdi_tags.h

---

# sdiapi/src/sdiapi/sdi_tags.h



## Namespaces

| Name           |
| -------------- |
| **[vfisdi](namespacevfisdi.md)**  |




## Source code

```cpp
// -*- Mode: C++ -*-
#ifndef SDI_TAGS_H_20190919
#define SDI_TAGS_H_20190919

namespace vfisdi {

enum SDITags {
   // Constructed tags
   MESSAGE_DATA                  = 0xF0,
   DISPLAY_DATA                  = 0xFFA011, // constructed, contains DFA012, DFA013
   INPUT_DATA_CONTAINER          = 0xFFA014,
   SIGNATURE_DATA                = 0xFFA015,
   BC_SYMBOLOGY                  = 0xFFBC01,

   PLACEHOLDER_DATA              = 0xFFA101,
   NFC_VAS_DATA                  = 0xFFA102,

   SDI_COMPONENT                 = 0xFFA103,

   ADDITIONAL_MATCH_LIST         = 0xFFA104,
   ADDITIONAL_MATCH              = 0xFFA105,
   KEY_ACTION                    = 0xFFA106, // constructed, contains DFA13B, DFA13C
   PLUGIN_RESPONSE_DATA_ENTRY    = 0xFFA107, // constructed, contains DFA10C, DFA10D, DFA101

   CONTINUATION_REQ_CB_PAN         = 0xBF01,
   CONTINUATION_REQ_CB_EXPIRATION_DATE = 0xBF02,

   // Primitive tags
   REQUESTED_TAGS                = 0xDF8F30,
   ADDITIONAL_RESULT_VALUE       = 0xDFA000,
   IDLE_TEXT                     = 0xDFA001,
   PRT_HTML                      = 0xDFA002,
   PRT_LANDSCAPE                 = 0xDFA003,
   PRT_URL                       = 0xDFA004,
   TIMEOUT_SEC                   = 0xDFA005,
   CONFIRMATION_REQUESTED        = 0xDFA006,
   INPUT_TEMPLATE_ID             = 0xDFA007,
   TEXT_LANGUAGE                 = 0xDFA008,
   HEADLESS_ENTRY_STRING         = 0xDFA009, // Actually used for PAN entry in headless mode (obfuscated)
   MENU_HEADLINE_TEXT            = 0xDFA00A,
   MENU_ENTRY_TEXT               = 0xDFA00B,
   MENU_ENTRY_INDEX              = 0xDFA00C,
   TEXT_BEEP                     = 0xDFA00D,
   NAME                          = 0xDFA00E, // recently used in FFA103
   VERSION                       = 0xDFA00F, // recently used in FFA103
   DISPLAY_TEMPLATE_ID           = 0xDFA010,
   DISPLAY_DATA_NAME             = 0xDFA012,
   DISPLAY_DATA_VALUE            = 0xDFA013,
   INPUT_DATA_NAME               = 0xDFA015,
   INPUT_DATA_VALUE              = 0xDFA016,
   TEMP_CARD_ENTRY_VALUE_DEACT   = 0xDFA017,
   CARD_DATA_ENTRY_MODE          = 0xDFA018,
   MASKING_CHARACTER             = 0xDFA019,
   ALT_INPUT_FORMAT_STRING       = 0xDFA01A,
   TIMER_MULTIPLIER              = 0xDFA01B,
   SIGNATURE_FORMAT              = 0xDFA01C,
   SIGNATURE_VALUE               = 0xDFA01D,
   CONFIG_UPLOAD_TYPE            = 0xDFA01E,
   CONFIG_UPLOAD_MAC             = 0xDFA01F,
   SOFTWARE_UPLOAD_FILENAME      = 0xDFA020,
   SOFTWARE_UPLOAD_RECORD_DATA   = 0xDFA021,
   SOFTWARE_UPLOAD_PACKET_NBR    = 0xDFA022,
   SOFTWARE_UPLOAD_MD5           = 0xDFA023,
   TOUCH_COORDINATES             = 0xDFA024,
   NAVIGATOR_MODE                = 0xDFA025,
   MSR_OPTIONS                   = 0xDFA026,
   MSR_LED1_STATE                = 0xDFA027,
   MSR_LED2_STATE                = 0xDFA028,
   MSR_LED3_STATE                = 0xDFA029,
   MSR_LED_DURATION              = 0xDFA02A,
   PIN_MIN_LENGTH                = 0xDFA02B,
   PIN_MAX_LENGTH                = 0xDFA02C,
   PIN_BYPASS_KEY                = 0xDFA02D,
   PIN_AUTO_ENTER                = 0xDFA02E,
   PIN_CLEAR_ALL                 = 0xDFA02F,

   PRT_BMP_DATA                  = 0xDFA030,
   PRT_BMP_WIDTH                 = 0xDFA031,
   PRT_BMP_HEIGHT                = 0xDFA032,

   MSR_SKIP_DOUBLE_PAN_CONFIRM   = 0xDFA033,
   MSR_TRACK_STATUS              = 0xDFA034,
   INTERCHAR_TIMEOUT_MSEC        = 0xDFA035, // int
   PASSWD_CHAR                   = 0xDFA036, // int
   APPLICATION_LABEL             = 0xDFA037, // string
   MSR_SENSITIVITY_LEVEL         = 0xDFA039, // uchar
   OBFUSCATED_TRACK1_DATA        = 0xDFA040, // string

   USE_STORED_TRX_DATA           = 0xDFA100, // e.g. offline transaction data
   PLUGIN_RESPONSE_DATA          = 0xDFA101,
   ENCRYPTED_TRACK1_DATA         = 0xDFA102,
   ENCRYPTED_TRACK1_DATA_KSN     = 0xDFA103,
   PIN_BYPASS                    = 0xDFA104,
   ENCRYPTED_EXPIRATION_DATE_KSN = 0xDFA105,
   ENCRYPTED_CVV                 = 0xDFA106,
   ENCRYPTED_CVV_KSN             = 0xDFA107,
   SUPPORTED_CARD_TECHNOLOGY     = 0xDFA108,
   ALLOW_CANCEL_WHILE_CARD_DETECT= 0xDFA109,
   CARD_REQUEST_DISPLAY_MODE     = 0xDFA10A,
   CARD_DETECTION_RESPONSE_MODE  = 0xDFA10B,
   PLUGIN_ID                     = 0xDFA10C,
   PLUGIN_RESPONSE_CODE          = 0xDFA10D,

   OPTIONAL_APP_DATA             = 0xDFA120,
   DATA_OPTIONS                  = 0xDFA121,
   USE_CLEAR_PAN_WHEN_VCL_ACTIVE = 0xDFA122,
   FORCE_MIN_PAN_LEN_TO_7        = 0xDFA123,
   ENCRYPTED_DATA_KSN            = 0xDFA124,
   ENCRYPTED_CARDHOLDER_DATA     = 0xDFA125,
   MESSAGE_TEMPLATE              = 0xDFA126,
   CURRENT_DATE                  = 0xDFA127, // uchar[3] (DDMMYY)
   CONTINUATION_RESPONSE         = 0xDFA128,
   RETURN_ADDITIONAL_MATCHES     = 0xDFA129, // bool
   TEC_SEL_OPTIONS               = 0xDFA12A,
   CARD_VALIDATOR_INFO           = 0xDFA12B, // string
   CARD_VALIDATOR_MATCH          = 0xDFA12C,
   EXPIRATION_CHECK_RESULT       = 0xDFA12D, // uchar
   LUHN_CHECK_RESULT             = 0xDFA12E, // uchar
   SPONSOR_CERT                  = 0xDFA12F,
   SENSITIVE_TAG_MODE            = 0xDFA130,
   CVV                           = 0xDFA131,
   ACTIVATION_CHECK_RESULT       = 0xDFA132, // uchar

   VCL_TRACK1                    = 0xDFA133,
   VCL_TRACK2                    = 0xDFA134,
   VCL_TRACK3                    = 0xDFA135,
   VCL_STATUS                    = 0xDFA136,
   VCL_EPARMS                    = 0xDFA137,

   WHITELIST_INDICATOR           = 0xDFA138,

   VCL_EXPIRATION_DATE_IN_CLEAR  = 0xDFA139,

   FETCHTXN_DATA_OPTIONS         = 0xDFA13A, // uchar
   KEY_CODE                      = 0xDFA13B, // string
   DIALOG_ACTION                 = 0xDFA13C, // string
   DIALOG_OPTIONS                = 0xDFA13D, // unsigned
   DIALOG_OK_TEXT                = 0xDFA13E, // string
   DIALOG_CLEAR_TEXT             = 0xDFA13F, // string
   DIALOG_CANCEL_TEXT            = 0xDFA140, // string
   DIALOG_UP_TEXT                = 0xDFA141, // string
   DIALOG_DOWN_TEXT              = 0xDFA142, // string
   DIALOG_HEADER_TEXT            = 0xDFA143, // string
   DIALOG_ASYNC_STATUS           = 0xDFA144, // int

   VCL_DIAG_DATA                 = 0xDFA145, // string
   VCL_DIAG_FORMAT               = 0xDFA146, // uchar 1=verbose, 2=concise, 4=xml
   VCL_PAGE                      = 0xDFA147, // uchar 1-127


   INSTALL_RESULT                = 0xDFA148, // JSON string
   INSTALL_FAILED_BUNDLE         = 0xDFA149, // string
   EPP_CMD_DESTINATION           = 0xDFA150,
   INSTALL_FAILED_PACKAGE        = 0xDFA151, // string

   VCL_KEY_STATUS                = 0xDFA152, // uchar 0=shared key, 1=unique key
   CARD_REMOVAL_TIMEOUT_MSEC     = 0xDFA153, // int
   TECSEL_DATA                   = 0xDFA154, // uchar[*]
   IDLE_ADMIN_MENU               = 0xDFA155, // int
   VCL_KSN                       = 0xDFA157, // string
   CONTINUATION_MODE             = 0xDFA158, // uchar 1=continue, 2=bypass, 3=skip
   VCL_ENCRYPTION_STATUS         = 0xDFA159, // uchar

   // Primitive tags regarding crypto functionality
   HOST_NAME                     = 0xDFA400, // string
   CRYPTO_HANDLE                 = 0xDFA401, // unsigned
   PLAINTEXT_DATA                = 0xDFA402,
   INITIAL_VECTOR                = 0xDFA403,
   ENCRYPTED_DATA                = 0xDFA404,
   KEY_SERIAL_NUMBER             = 0xDFA405,
   DECRYPTED_DATA                = 0xDFA406,
   INPUT_DATA                    = 0xDFA407,
   SIGNATURE                     = 0xDFA408,
   KEY_SET_ID                    = 0xDFA409,
   PIN_BLOCK_FORMAT              = 0xDFA40A, // uchar
   PIN_BLOCK                     = 0xDFA40B,
   KEY_TYPE                      = 0xDFA40C, // uchar
   KEY_DATA                      = 0xDFA40D,
   JSON_FORMATTED_KEY_INFO       = 0xDFA40E,
   KEY_RELEVANT_INFO             = 0xDFA40F,
   KEK_FLAG                      = 0xDFA410, // uchar
   AS2805_TAG                    = 0xDFA411,
   SEC_STATUS                    = 0xDFA412,
   CRYPTO_VERSION                = 0xDFA413,
   ZERO_PIN_BLOCK_REQUEST        = 0xDFA414, // uchar
   MASTER_KEY_SET_ID             = 0xDFA415,
   KCV                           = 0xDFA416,
   INCREMENT_KSN                 = 0xDFA417, // bool

   X509_CERT_NAME                = 0xDFA500, // string
   X509_CERT_DER                 = 0xDFA501, // X509 certificate in DER format

   PROPERTY_ID                   = 0xDFBC01,
   PROPERTY_VALUE                = 0xDFBC02,

   // Primitive tags regarding barcode reader functionality
   BC_SCANED_DATA                = 0xDFBC03,
   BC_SYMBOLOGY_PARAM            = 0xDFBC04,
   BC_SYMBOLOGY_VALUE            = 0xDFBC05,

   PLUGIN_CARD_DATA              = 0xDFFF7F, // For internal use only!

   // Tags regarding EMV stuff
   EMV_ISSUER_ID                     = 0x42, // uchar[4]
   EMV_AID                           = 0x4F, // uchar[0..16]
   EMV_CT_APP_NAME                   = 0x50, // string<16>
   EMV_TRACK1_EQUIVALENT_DATA        = 0x56, // only available via SDI fetchTxnTags
   EMV_TRACK2_EQUIVALENT_DATA        = 0x57, // only available via SDI fetchTxnTags
   EMV_TRACK3_EQUIVALENT_DATA        = 0x58, // only available via SDI fetchTxnTags
   EMV_PAN                           = 0x5A, // uchar[10]
   EMV_DIRECTORY_DISCR_TEMPLATE      = 0x73, // constructed
   EMV_AIP                           = 0x82, // uchar[2]
   EMV_DF_NAME                       = 0x84, // uchar[0..16]
   EMV_APP_PRIORITY_ID               = 0x87, // uchar
   EMV_AUTH_CODE                     = 0x89, // uchar[6]
   EMV_AUTH_RESPONSE_CODE            = 0x8A, // uchar[2]
   EMV_POI_INFORMATION               = 0x8B, // uchar[*]
   EMV_CVM_LIST                      = 0x8E, // uchar[28]
   EMV_TVR                           = 0x95, // uchar[5]
   EMV_TRANSACTION_DATE              = 0x9A, // uchar[3]
   EMV_TRANSACTION_STATUS_INFO       = 0x9B, // uchar[2]
   EMV_TRANSACTION_TYPE              = 0x9C, // uchar
   EMV_LED_ID                        = 0xC7, // uchar
   EMV_LED_STATE                     = 0xC8, // uchar
   EMV_POLL_TIMEOUT                  = 0xC9, // uchar
   EMV_BEEP_SCENARIO                 = 0xCB, // uchar
   EMV_ARRAY_ENTRY                   = 0xF1, // constructed
   EMV_CARDHOLDER_NAME               = 0x5F20, // string<26>
   EMV_EXPIRATION_DATE               = 0x5F24, // uchar[3] // only available via SDI fetchTxnTags
   EMV_EFFECTIVE_DATE                = 0x5F25, // uchar[3]
   EMV_ISSUER_COUNTRY_CODE           = 0x5F28, // uchar[2]
   EMV_TRANSACTION_CURRENCY          = 0x5F2A, // uchar[2]
   EMV_LANGUAGE_PREFERENCE           = 0x5F2D, // string<8>
   EMV_SERVICE_CODE                  = 0x5F30, // uchar[2]
   EMV_PAN_SEQUENCE_NUMBER           = 0x5F34, // uchar
   EMV_TRANSACTION_CURRENCY_EXP      = 0x5F36, // uchar
   EMV_IBAN                          = 0x5F53, // string
   EMV_BIC                           = 0x5F54, // string
   EMV_ISSUER_COUNTRY_CODE_2         = 0x5F55, // uchar[2]
   EMV_ISSUER_COUNTRY_CODE_3         = 0x5F56, // uchar[3]
   EMV_ACCOUNT_TYPE                  = 0x5F57, // uchar
   EMV_ACQUIRER_ID                   = 0x9F01, // uchar[6]
   EMV_AMOUNT_AUTH                   = 0x9F02, // BCD<6>
   EMV_AMOUNT_OTHER                  = 0x9F03, // BCD<6>
   EMV_TERMINAL_AID                  = 0x9F06, // uchar[5..16]
   EMV_TERMINAL_AID_LEN              = 0x9F06, // uchar
   EMV_KERNEL_APP_VERSION_NUMBER     = 0x9F08, // uchar[2]
   EMV_CHIP_APP_VERSION_NUMBER       = 0x9F09, // uchar[20] (config) / uchar[2] (transaction)
   EMV_ASRPD                         = 0x9F0A, // uchar[0..50]
   EMV_CARDHOLDER_NAME_EXT           = 0x9F0B, // string
   EMV_ISSUER_ID_EXT                 = 0x9F0C, // uchar[4]
   EMV_IAC_DEFAULT                   = 0x9F0D, // uchar[5]
   EMV_IAC_DENIAL                    = 0x9F0E, // uchar[5]
   EMV_IAC_ONLINE                    = 0x9F0F, // uchar[5]
   EMV_ISSUER_APP_DATA               = 0x9F10, // uchar[0..32]
   EMV_ISSUER_CODE_TABLE_ID          = 0x9F11, // uchar
   EMV_APP_PREFERRED_NAME            = 0x9F12, // string<16>
   EMV_MERCHANT_CATEGORY             = 0x9F15, // uchar[2]
   EMV_MERCHANT_ID                   = 0x9F16, // string<15>
   EMV_TERMINAL_COUNTRY_CODE         = 0x9F1A, // uchar[2]
   EMV_CT_FLOOR_LIMIT                = 0x9F1B, // unsigned
   EMV_TERMINAL_ID                   = 0x9F1C, // uchar[8]
   EMV_RISK_MGMT                     = 0x9F1D, // uchar[8]
   EMV_IFD_SERIAL_NUMBER             = 0x9F1E, // uchar[8]
   EMV_TRACK1_DISCR_DATA             = 0x9F1F, // uchar[*] // only available via SDI fetchTxnTags
   EMV_TRACK2_DISCR_DATA             = 0x9F20, // uchar[*] // only available via SDI fetchTxnTags
   EMV_TRANSACTION_TIME              = 0x9F21, // uchar[3]
   EMV_APP_CRYPTOGRAM                = 0x9F26, // uchar[8]
   EMV_CRYPTOGRAM_INFO               = 0x9F27, // uchar
   EMV_TERMINAL_CAPABILITIES         = 0x9F33, // uchar[3]
   EMV_CVM_RESULTS                   = 0x9F34, // uchar[3]
   EMV_TERMINAL_TYPE                 = 0x9F35, // uchar
   EMV_ATC                           = 0x9F36, // uchar[2]
   EMV_UNPREDICTABLE_NUMBER          = 0x9F37, // uchar[4]
   EMV_POS_ENTRY_MODE                = 0x9F39, // uchar
   EMV_ADDITIONAL_CAPABILITIES       = 0x9F40, // uchar[5]
   EMV_TRANSACTION_COUNTER           = 0x9F41, // BCD<4>
   EMV_APPLICATION_CURRENCY          = 0x9F42, // uchar[2]
   EMV_DATA_AUTH_CODE                = 0x9F45, // uchar[2]
   EMV_ICC_DYNAMIC_NUMBER            = 0x9F4C, // uchar[2..8]
   EMV_MERCHANT_NAME_LOCATION        = 0x9F4E, // string<40>
   EMV_TRANSACTION_CATEGORY          = 0x9F53, // uchar
   EMV_INTERCHANGE_PROFILE           = 0x9F53, // uchar[3]
   EMV_MERCHANT_TYPE                 = 0x9F58, // uchar
   EMV_TERMINAL_TRANSACTION_INFO     = 0x9F59, // uchar[3]
   EMV_APP_PROGRAM_ID                = 0x9F5A, // uchar
   EMV_TRANSACTION_TYPE_IK           = 0x9F5A, // uchar
   EMV_DS_REQUESTED_OPERATOR_ID      = 0x9F5C, // uchar[8]
   EMV_RECEIPT_REQUIRED_LIMIT        = 0x9F5D, // BCD<6>
   EMV_AVAILABLE_OFFLINE_AMOUNT      = 0x9F5D, // BCD<6>
   // EMV_DATA_STORAGE_ID               = 0x9F5E, // uchar[2] // unused
   EMV_OPTION_STATUS                 = 0x9F5E, // uchar[2]
   EMV_FLOOR_LIMIT_IK                = 0x9F5F, // BCD<6>
   EMV_TRANSACTION_QUALIFIER         = 0x9F66, // uchar[4]
   EMV_TRACK2_DATA                   = 0x9F6B, // uchar[*] // only available via SDI fetchTxnTags
   EMV_VISA_CTQ                      = 0x9F6C, // uchar[2]
   EMV_MSR_VERSION_NUMBER            = 0x9F6D, // ushort[0..10] //
   EMV_READER_CAPABILITIES           = 0x9F6D, // uchar
   EMV_TRANSACTION_CAPABILITIES      = 0x9F6E, // uchar[4]
   EMV_TERMINAL_TRANSACTION_DATA     = 0x9F76, // uchar[*]
   EMV_MERCHANT_CUSTOM_DATA          = 0x9F7C, // uchar[20]

   EMV_CBK_MERCHINFO                 = 0xBF01, // constructed
   EMV_CBK_AMOUNTCONF                = 0xBF02, // constructed
   EMV_CBK_LOG_HOTLIST               = 0xBF03, // constructed
   EMV_CBK_REDUCE_CAND               = 0xBF04, // constructed
   EMV_CBK_DOM_APPS                  = 0xBF05, // constructed
   EMV_CBK_LOCAL_CHECKS              = 0xBF06, // constructed
   EMV_CBK_DCC                       = 0xBF07, // constructed
   EMV_CBK_PIN                       = 0xBF08, // constructed
   EMV_CBK_CARDHOLDERINFO            = 0xBF09, // constructed
   EMV_CBK_INIT_THREAD               = 0xBF0B, // constructed (no reply is sent!)
   EMV_CBK_APP_SELECTED              = 0xBF0C, // constructed
   EMV_FCI_ISSUER_DISCR              = 0xBF0C, // constructed data, directly from card
   EMV_CBK_DATA_EXCHANGE             = 0xBF0E, // constructed
   EMV_CBK_EXIT_THREAD               = 0xBF0F, // constructed (no reply is sent!)
   EMV_CBK_LEDS                      = 0xBF10, // constructed (no reply is sent!)
   EMV_CBK_MODIFY_CAND               = 0xBF12, // constructed
   EMV_CBK_RND                       = 0xBF13, // constructed
   EMV_CBK_TEXT_DISPLAY              = 0xBF14, // constructed (no reply is sent!)
   EMV_CBK_CARD_TAPPED               = 0xBF15, // constructed (no reply is sent!)
   EMV_CBK_SERVICE_SHORTLIST         = 0xBF16, // constructed
   EMV_CBK_SERVICE_FOR_GENAC         = 0xBF17, // constructed
   EMV_CBK_PURE_GET_PUT_DATA         = 0xBF18, // constructed
   EMV_CBK_BEEP                      = 0xBF19, // constructed (no reply is sent!)
   EMV_PUT_DATA_MSUT_PURE            = 0xBF70, // constructed
   EMV_GET_DATA_MSRT_PURE            = 0xBF71, // constructed
   // EMV_CBK_TRACE                     = 0xBF7F, // constructed (no reply is sent!) not passed on by SDI
   EMV_CVM_REQUIRED_LIMIT_PK         = 0xDF01, // BCD<6>
   EMV_ISO_DATA                      = 0xDF01, //
   EMV_FLOOR_LIMIT_PK                = 0xDF02, // BCD<6>
   EMV_KEY_NUMBER                    = 0xDF03,
   EMV_MASTER_AID                    = 0xDF04, // uchar[0..16]
   EMV_CVM_REQUIREMENTS              = 0xDF04, // uchar
   EMV_BUILD_APP_LIST                = 0xDF05, // uchar
   EMV_CARDREADER_NUMBER             = 0xDF06, // uchar
   EMV_NONCRITICAL_SCRIPT_RESULTS    = 0xDF07, // uchar[*][5]
   EMV_CRITICAL_SCRIPT_RESULTS       = 0xDF08, // uchar[*][5]
   EMV_KEY_INDEX                     = 0xDF09,
   EMV_KEY_RID                       = 0xDF0A,
   EMV_KEY_DATA                      = 0xDF0B,
   EMV_KEY_HASH                      = 0xDF0C,
   EMV_KEY_EXPONENT                  = 0xDF0D,
   EMV_KEY_REVOCATION_LIST           = 0xDF0E,
   EMV_LIB_VERSION                   = 0xDF11, // string<127>
   EMV_EMVCO_CHECKSUM                = 0xDF12, // char[33]
   EMV_EMVCO_CHECKSUM_PARAM          = 0xDF13, // uchar[5]
   EMV_ADDITIONAL_REQUESTED_TAGS     = 0xDF14, // ushort[0..20]
   EMV_OFFLINE_ONLY_PROCESSING       = 0xDF15, // uchar
   EMV_KEY_LENGTH                    = 0xDF16,
   EMV_FALLBACK_MIDS                 = 0xDF17, // uchar[3]
   EMV_FALLBACK                      = 0xDF18, // uchar
   EMV_PARAMETER_4                   = 0xDF19,
   EMV_OBFUSCATED_PAN                = 0xDF1A, // uchar[10]
   EMV_OBFUSCATED_TRACK2             = 0xDF1B, // uchar[0..19]
   EMV_CT_SPECIAL_TRANSACTIONS       = 0xDF1C, // uchar[8]
   EMV_CT_PRIORITY_AID               = 0xDF1D, // uchar[0..16]
   EMV_CT_ASI                        = 0xDF20, // uchar
   EMV_CT_TAC_DENIAL                 = 0xDF21, // uchar[5]
   EMV_CT_TAC_ONLINE                 = 0xDF22, // uchar[5]
   EMV_CT_TAC_DEFAULT                = 0xDF23, // uchar[5]
   EMV_THRESHOLD                     = 0xDF24, // unsigned / BCD<6>
   EMV_MAX_PERCENT_ONLINE            = 0xDF25, // uchar
   EMV_PERCENT_ONLINE                = 0xDF26, // uchar
   EMV_DEFAULT_TDOL                  = 0xDF27, // uchar[0..80]
   EMV_CT_DEFAULT_DDOL               = 0xDF28, // uchar[0..80]
   EMV_CT_ADDITIONAL_TAGS            = 0xDF29, // uchar[0..255]
   EMV_CT_MANDATORY_TAGS             = 0xDF2A, // uchar[0..20]
   EMV_CT_APP_FLOW_CAP               = 0xDF2B, // uchar[5]
   EMV_CT_ADDITIONAL_TAGS_CRD        = 0xDF2C, // uchar[0..255]
   EMV_APPLICATION                   = 0xDF2D, // uchar
   EMV_FLOW_AIP_NO_CVM               = 0xDF2E, // uchar
   EMV_CUSTOM_CVM                    = 0xDF2F, // uchar
   EMV_LANGUAGE                      = 0xDF30, // uchar
   EMV_TEXT_ID                       = 0xDF31, // uchar
   EMV_APP_LABEL                     = 0xDF33, // string<16>
   EMV_BALANCE_BEFORE                = 0xDF32, // BCD<6>
   EMV_AMOUNT_CONFIRMATION           = 0xDF34, // uchar
   EMV_TRANSACTION_OPTIONS           = 0xDF36, // uchar[5]
   EMV_TRANSACTION_STEPS             = 0xDF37, // uchar[3]
   EMV_BALANCE_AFTER                 = 0xDF38, // BCD<6>
   EMV_DCC_INFO                      = 0xDF39, // uchar[3]
   EMV_ADDITIONAL_TERMINAL_CAPABILITIES = 0xDF3A, // uchar[5]
   EMV_FALLBACK_MSR_OPTIONS          = 0xDF3A, // uchar
   EMV_PARAMETER_1                   = 0xDF3B,
   EMV_PARAMETER_2                   = 0xDF3C,
   EMV_PARAMETER_3                   = 0xDF3D,
   EMV_CDA_PROCESSING                = 0xDF3E, // uchar
   EMV_FORCE_ONLINE                  = 0xDF40, // uchar
   EMV_PIN_BYPASS_ALLOWED            = 0xDF41, // uchar
   EMV_STATUS                        = 0xDF42, // uchar[4]
   EMV_FORCE_ACCEPT                  = 0xDF43, // uchar
   EMV_OBFUSCATED_PAN_ASCII          = 0xDF44, // string<19>
   EMV_NO_DIRECTORY_SELECT           = 0xDF45, // uchar
   EMV_PRESELECTED_LANGUAGE          = 0xDF47, // uchar
   EMV_ONLINE_SWITCH                 = 0xDF48, // uchar
   EMV_OBFUSCATED_TRACK2_ASCII       = 0xDF49, // string<19>
   EMV_SECURITY_LIMIT                = 0xDF49, // unsigned
   EMV_CAPABILITIES_BELOW_LIMIT      = 0xDF4A, // uchar[3]
   EMV_NO_CARDHOLDER_CONFIRM         = 0xDF4D, // uchar
   EMV_PASSTHROUGH                   = 0xDF4E, // uchar
   EMV_PDOL_INFO                     = 0xDF4E, // uchar
   EMV_CARDTYPE                      = 0xDF4F, // uchar
   EMV_ONLINE_RESULT                 = 0xDF50, // uchar
   EMV_FLOOR_LIMIT_MIR               = 0xDF51, // BCD<6>
   EMV_VOICE_REFERRAL_RESULT         = 0xDF51, // char
   EMV_TRANSACTION_LIMIT_NO_CVM_MIR  = 0xDF52, // BCD<6>
   EMV_AUTH_DATA                     = 0xDF52, // uchar[16]
   EMV_TRANSACTION_LIMIT_NO_CDCVM_MIR = 0xDF53, // BCD<6>
   EMV_CRITICAL_SCRIPT               = 0xDF53, // uchar[*]
   EMV_TRANSACTION_LIMIT_CDCVM_MIR   = 0xDF54, // BCD<6>
   EMV_NONCRITICAL_SCRIPT            = 0xDF54, // uchar[*]
   EMV_TPM_CAPABILITIES_MIR          = 0xDF55, // uchar[2]
   EMV_AUTH_RESPONSE_REFERRAL        = 0xDF55, // char[2]
   EMV_AUTH_RESPONSE_SWITCH          = 0xDF55, // uchar[2]
   EMV_TRANSACTION_RECOVERY_LIMIT_MIR = 0xDF56, // uchar
   EMV_AUTH_RESPONSE_WRONG_PIN       = 0xDF56, // char[2]
   EMV_AUTH_RESPONSE_ONLINE_PIN      = 0xDF56, // uchar[2]
   EMV_ADDITINAL_RESPONSE_OK         = 0xDF57, // uchar[2]
   EMV_WRITE_DS_DATA                 = 0xDF58, // uchar[0..255]
   EMV_OFFLINE_PIN_ERRORS            = 0xDF59, // uchar
   EMV_WRITE_DATA_STORAGE_DATA       = 0xDF5A, // uchar[*]
   EMV_DCC_FORBIDDEN                 = 0xDF5B, // uchar
   EMV_DOMESTIC_INFO                 = 0xDF5C, // uchar[3]
   EMV_DOMESTIC_OPTIONS              = 0xDF5D, // uchar[3]
   EMV_CTLS_TRACK2                   = 0xDF5E, // uchar[0..19]
   EMV_ADDITIONAL_VERSION_NUMBERS    = 0xDF5F, // uchar[20]
   EMV_VELOCITY_ORIGINAL_INDEX       = 0xDF60, // uchar
   EMV_RECEIVED_INFO                 = 0xDF61, // uchar[8]
   EMV_BEEP_VOLUME                   = 0xDF62, // ushort
   EMV_ERROR_DATA                    = 0xDF62, // uchar[15]
   EMV_APP_SELECTION_FLAG            = 0xDF62, // uchar[0..32]
   EMV_DISPLAY_TEXT_INDEX            = 0xDF63, // uchar
   EMV_VELOCITY_PROC_RESULT_BM       = 0xDF63, // uchar[3]
   EMV_KERNEL_DEBUG                  = 0xDF64, // uchar[32]
   EMV_HANDLE_APP_TYPE               = 0xDF66,
   EMV_KERNEL_VERSION                = 0xDF65,
   EMV_SUPPORTED_LANGUAGES           = 0xDF67,
   EMV_ATR                           = 0xDF68, // uchar[*]
   EMV_EXCLUDE_AID                   = 0xDF69,
   EMV_NO_EMV_CONFORM_SELECT         = 0xDF6A,
   EMV_CT_L1_DRIVER_VERSION          = 0xDF6B,
   EMV_TRACK1_EQUIVALENT             = 0xDF6B, // uchar[*]
   EMV_RETRY_LIMIT                   = 0xDF6D, // uchar
   EMV_CARDHOLDER_INFO               = 0xDF6E, // uchar
   EMV_ADDITIONAL_UI_INFO            = 0xDF6E,
   EMV_CTLS_L1_DRIVER_VERSION        = 0xDF6F, // char[127]
   EMV_MERCHANT_INFO                 = 0xDF70, // uchar
   EMV_CONFIRM_AMOUNT                = 0xDF71, // uchar
   EMV_PAN_IN_BLACKLIST              = 0xDF72, // uchar
   EMV_STORED_AMOUNT                 = 0xDF73, // BCD<6>
   EMV_SELECTOR                      = 0xDF74, // uchar
   EMV_REDUCED_CAND_LIST             = 0xDF75, // uchar[*]
   EMV_MODIFY_TRANSACTION            = 0xDF76, // uchar
   EMV_SKIP_POSTPROCESSING           = 0xDF76, // uchar
   EMV_PIN_INFO                      = 0xDF79, // uchar
   EMV_PIN_PUBLIC_MODULUS            = 0xDF7A, // uchar[*]
   EMV_PIN_PUBLIC_EXPONENT           = 0xDF7B, // unsigned
   EMV_DCC_MODE                      = 0xDF7D, // uchar
   EMV_DOMESTIC_APP_RESULT           = 0xDF7E, // uchar
   EMV_KERNEL_TO_USE                 = 0xDF7E, // uchar[3]
   EMV_COMMUNICATION_ERROR           = 0xDF7F, // uchar
   EMV_DATA_EXCHANGE_REQUEST         = 0xDF8010, // uchar
   EMV_DATA_EXCHANGE_STATE           = 0xDF8011, // uchar
   EMV_DATA_EXCHANGE_MODE            = 0xDF8012, // uchar
   EMV_DATA_EXCHANGE_DATA_NEEDED     = 0xDF8106, // uchar[*]
   EMV_SHORT_KERNEL_ID               = 0xDF810C, // uchar
   EMV_PROCEED_TO_FIRST_WRITE_FLAG   = 0xDF8110, // uchar
   EMV_TAGS_TO_READ                  = 0xDF8112, // uchar[*]
   EMV_CARD_DATA_INPUT_CAPABILITY    = 0xDF8117, // uchar
   EMV_CHIP_CVM_ABOVE_LIMIT          = 0xDF8118, // uchar
   EMV_CHIP_CVM_BELOW_LIMIT          = 0xDF8119, // uchar
   EMV_KERNEL_CONFIGURATION          = 0xDF811B, // uchar
   EMV_TORN_TRANSACTION_LIFETIME     = 0xDF811C, // ushort
   EMV_TORN_TRANSACTION_NUMBER       = 0xDF811D, // uchar
   EMV_MAGSTRIPE_CVM_ABOVE_LIMIT     = 0xDF811E, // uchar
   EMV_SECURITY_CAPABILITY           = 0xDF811F, // uchar
   EMV_TAC_DEFAULT_MK                = 0xDF8120, // uchar[5]
   EMV_TAC_DENIAL_MK                 = 0xDF8121, // uchar[5]
   EMV_TAC_ONLINE_MK                 = 0xDF8122, // uchar[5]
   EMV_FLOOR_LIMIT_MK                = 0xDF8123, // BCD<6>
   EMV_TRANSACTION_LIMIT_NO_CVM      = 0xDF8124, // BCD<6>
   EMV_TRANSACTION_LIMIT_CVM         = 0xDF8125, // BCD<6>
   EMV_CVM_REQUIRED_LIMIT_MK         = 0xDF8126, // BCD<6>
   EMV_DATA_EXCHANGE_TIMEOUT         = 0xDF8127, // uchar[2]
   EMV_MAGSTRIPE_CVM_BELOW_LIMIT     = 0xDF812C, // uchar
   EMV_MESSAGE_HOLD_TIME             = 0xDF812D, // uchar[3]
   EMV_FIELD_OFF_TIME                = 0xDF8130, // uchar
   EMV_PHONE_MESSAGE_TABLE           = 0xDF8131, // uchar[*]
   EMV_RELAY_RESISTANCE_MIN_PERIOD   = 0xDF8132, // uchar[2]
   EMV_RELAY_RESISTANCE_MAX_PERIOD   = 0xDF8133, // uchar[2]
   EMV_RELAY_RESISTANCE_CAPDU_TIME   = 0xDF8134, // uchar[2]
   EMV_RELAY_RESISTANCE_RAPDU_TIME   = 0xDF8135, // uchar[2]
   EMV_RELAY_RESISTANCE_ACCURACY     = 0xDF8136, // uchar[2]
   EMV_RELAY_RESISTANCE_MISMATCH     = 0xDF8137, // uchar
   EMV_MODIFIED_CANDIDATES           = 0xDF8F01, // uchar[10]
   EMV_EXIT_OPTIONS                  = 0xDF8F0A, // uchar
   EMV_FLOW_OPTIONS                  = 0xDF8F0B, // uchar[10]
   EMV_INIT_RESULT                   = 0xDF8F0C, // uchar[4]
   EMV_SETUP_RESULT                  = 0xDF8F0D, // uchar[5]
   EMV_CTLS_TERMINAL_LIMIT           = 0xDF8F0E, // uchar[4]
   EMV_APPLYCONFIG_OPTIONS           = 0xDF8F0F, // unsigned
   EMV_CB_DISPLAY_TEXT_INDEX         = 0xDF8F12, // uchar
   //EMV_LED_DESIGN_WIDTH              = 0xDF8F10, // deprecated
   //EMV_LED_DESIGN_HEIGHT             = 0xDF8F11, // deprecated
   //EMV_LED_DESIGN_OFF_COLOR          = 0xDF8F12, // deprecated
   //EMV_LED_DESIGN_ON_COLOR           = 0xDF8F13, // deprecated
   //EMV_LED_REGION_WIDTH              = 0xDF8F14, // deprecated
   //EMV_LED_REGION_HEIGHT             = 0xDF8F15, // deprecated
   //EMV_LED_REGION_X_COORDINATE       = 0xDF8F16, // deprecated
   //EMV_LED_REGION_Y_COORDINATE       = 0xDF8F17, // deprecated
   //EMV_LED_DESIGN_SHAPE              = 0xDF8F18, // deprecated
   //EMV_LED_DESIGN_SHAPE_PARAM        = 0xDF8F19, // deprecated
   //EMV_LED_DESIGN_OPTIONS            = 0xDF8F1A, // deprecated
   //EMV_LED_DESIGN_BG_COLOR           = 0xDF8F1B, // deprecated
   EMV_CARD_ID                       = 0xDFA014, // uchar[20]
   EMV_KERNEL_ID                     = 0xDFAB01, // uchar[3]
   EMV_CTLS_ASI                      = 0xDFAB02, // uchar
   EMV_CTLS_APP_FLOW_CAP             = 0xDFAB03, // uchar[5]
   EMV_CTLS_PRIORITY_AID             = 0xDFAB04, // AID[5]
   EMV_CTLS_SPECIAL_TRANSACTIONS     = 0xDFAB05, // uchar[8]
   EMV_ENTRY_POINT_CHECKSUM          = 0xDFAB06, // uchar[33]
   EMV_KERNEL_CHECKSUM               = 0xDFAB07, // uchar[33]
   EMV_RETAP_FIELD_OFF               = 0xDFAB08, // uchar
   EMV_CTLS_ADDITIONAL_TAGS          = 0xDFAB20, // uchar[*]
   EMV_CTLS_ADDITIONAL_TAGS_CRD      = 0xDFAB21, // uchar[*]
   EMV_CTLS_APP_NAME                 = 0xDFAB22, // string<16>
   EMV_INTERNAL_KERNEL_ID            = 0xDFAB23, // uchar[3]
   EMV_TEC_SUPPORT                   = 0xDFAB30, // uchar
   EMV_KERNEL_APP_FLOW_CAP           = 0xDFAB31, // uchar[5]
   EMV_CTLS_FLOOR_LIMIT              = 0xDFAB40, // BCD<6>
   EMV_CTLS_TRANSACTION_LIMIT        = 0xDFAB41, // BCD<6>
   EMV_CVM_REQUIRED_LIMIT            = 0xDFAB42, // BCD<6>
   EMV_CTLS_TAC_DEFAULT              = 0xDFAB43, // uchar[5]
   EMV_CTLS_TAC_DENIAL               = 0xDFAB44, // uchar[5]
   EMV_CTLS_TAC_ONLINE               = 0xDFAB45, // uchar[5]
   EMV_RISK_MGMT_THRESHOLD           = 0xDFAB46, // BCD<6>
   EMV_RISK_MGMT_TARGET_PERCENT      = 0xDFAB47, // uchar
   EMV_RISK_MGMT_MAX_TARGET_PERCENT  = 0xDFAB48, // uchar
   EMV_DRL_OPTIONS                   = 0xDFAB49, // uchar
   EMV_TRANSACTION_LIMIT_CASH        = 0xDFAB4A, // BCD<6>
   EMV_COMBINATION_OPTIONS           = 0xDFAB4B, // uchar[2]
   EMV_REMOVAL_TIMEOUT               = 0xDFAB4C, // ushort
   EMV_CALLBACK_TIMEOUT              = 0xDFAB4D, // ushort
   EMV_TORN_TRANSACTION_INTERVAL     = 0xDFAB4E, // uchar[2]
   EMV_CTLS_KERNEL_CAPABILITIES      = 0xDFAB4F, // uchar[5]
   EMV_MTOL                          = 0xDFAB50, // uchar[*]
   EMV_CTLS_DEFAULT_DDOL             = 0xDFAB51, // uchar[*]
   EMV_UNPREDICTABLE_NUMBER_RANGE    = 0xDFAB52, // uchar
   EMV_TERMCAP_ABOVE_CVM_LIMIT       = 0xDFAB53, // uchar[3]
   EMV_TERMCAP_BELOW_CVM_LIMIT       = 0xDFAB54, // uchar[3]
   EMV_TAC_SWITCH                    = 0xDFAB55, // uchar[5]
   EMV_IAC_SWITCH                    = 0xDFAB56, // uchar[5]
   EMV_DATA_EXCHANGE_TAGS            = 0xDFAB57, // uchar[*]
   EMV_DCR_LIST_IDS                  = 0xDFAB58, // uchar[*]
   EMV_DCR_LIST_RANGES               = 0xDFAB59, // uchar[*]
   EMV_APPLICATION_AUTH_TRANSACTION_TYPE = 0xDFAB5A, // uchar
   EMV_CTLS_TRANSACTION_LIMIT_ODCVM  = 0xDFAB5B, // BCD<6>
   EMV_MODIFIED_CAND_LIST            = 0xDFD001, // uchar[10]
   EMV_APP_NAME_CHOSEN               = 0xDFD002, // string
   EMV_STORED_AMOUNT_2               = 0xDFD003, // BCD<6>
   EMV_APPLICATION_KERNEL_ID         = 0xDFD003, // uchar[3]
   EMV_TRANSPARENT_SEND              = 0xDFD004, // uchar[*]
   EMV_TRANSACTION_TYPES_SALE        = 0xDFD004, // uchar[3]
   EMV_TRANSPARENT_RECEIVE           = 0xDFD005, // uchar[*]
   EMV_TRANSACTION_TYPES_CASH        = 0xDFD005, // uchar[3]
   EMV_BEEP_FREQ_SUCCESS             = 0xDFD006, // ushort
   EMV_TRANSACTION_TYPES_CASHBACK    = 0xDFD006, // uchar[3]
   EMV_BEEP_FREQ_ALERT               = 0xDFD007, // ushort
   EMV_TRANSACTION_TYPES_REFUND      = 0xDFD007, // uchar[3]
   EMV_SECOND_TAP_DELAY              = 0xDFD008, // uchar
   EMV_HOST_TIMEOUT                  = 0xDFD009, // uchar
   EMV_APP_NAME_UFT8                 = 0xDFD00B, // string
   EMV_KERNEL_PRIVATE_NON_BER        = 0xDFDE01, // uchar[*]
   EMV_DOMESTIC_APP_CHIP             = 0xFF01, // constructed
   EMV_FALLBACK_MSR                  = 0xFF02, // constructed
   EMV_CANDIDATE_LIST                = 0xFF03, // constructed
   EMV_CAP_KEYS                      = 0xFF04, // constructed
   EMV_HOTLIST                       = 0xFF05, // constructed
   EMV_DATA_EXCHANGE_RECEIVED_DATA   = 0xFF10, // constructed
   EMV_EXCLUDE_COMBOS                = 0xFF69, // constructed
   EMV_TAGS_TO_WRITE_BEFORE_GEN_AC   = 0xFF8102, // constructed
   EMV_TAGS_TO_WRITE_AFTER_GEN_AC    = 0xFF8103, // constructed
   EMV_DATA_EXCHANGE_SEND_DATA       = 0xFF8104, // constructed
   EMV_DATA_RECORD                   = 0xFF8105, // constructed
   EMV_DYNAMIC_READER_LIMITS         = 0xFFAB01, // constructed


   // Tags regarding NFC stuff

   NFC_PING_DATA                 = 0xDFA200, // uchar[*]
   NFC_RAW_DATA                  = 0xDFA201, // uchar[*]
   NFC_TECHNOLOGY_BITMAP         = 0xDFA202, // unsigned (uchar[4])
   NFC_POLLING_TIMEOUT           = 0xDFA203, // unsigned (uchar[4])
   NFC_INPUT_DATA                = 0xDFA204, // uchar[*]
   NFC_OUTPUT_DATA               = 0xDFA205, // uchar[*]
   NFC_DATA                      = 0xDFA206, // uchar[*] input/output data
   NFC_CUSTOM_DATA               = 0xDFA207, // uchar[*]
   NFC_BLOCK_NUMBER              = 0xDFA208, // uchar
   NFC_KEY_TYPE                  = 0xDFA209, // uchar
   NFC_KEY                       = 0xDFA20A, // uchar
   NFC_MIFARE_CARD_TYPE          = 0xDFA20B, // uchar
   NFC_MIFARE_START_BLOCK        = 0xDFA20C, // uchar
   NFC_MIFARE_BLOCK_COUNT        = 0xDFA20D, // uchar
   NFC_MIFARE_OUTPUT_DATA        = 0xDFA20E, // uchar[*]
   NFC_MIFARE_INPUT_DATA         = 0xDFA20F, // uchar[*]
   NFC_MIFARE_VALUE              = 0xDFA210, // uchar
   NFC_FELICA_POLL_TIMEOUT       = 0xDFA211, // unsigned (uchar[4])
   NFC_FELICA_RECEIVE_TIMEOUT    = 0xDFA212, // unsigned (uchar[4])
   NFC_FELICA_SYSTEM_CODE        = 0xDFA213, // ushort (uchar[2])
   NFC_FELICA_REQUEST_CODE       = 0xDFA214, // uchar
   NFC_FELICA_TIME_SLOT          = 0xDFA215, // uchar
   NFC_FELICA_UID                = 0xDFA216, // uchar[8]
   NFC_FELICA_PAD                = 0xDFA217, // uchar[8]
   NFC_FELICA_TIMEOUT            = 0xDFA218, // unsigned (uchar[4])
   NFC_SW1_SW2                   = 0xDFA219, // uchar[2]
   NFC_RETURN_CODE               = 0xDFDB20, // uchar
   NFC_TOTAL_CARD_COUNT          = 0xDFDB28, // uchar
   NFC_TOTAL_CARD_A_COUNT        = 0xDFDB29, // uchar
   NFC_TOTAL_CARD_B_COUNT        = 0xDFDB2A, // uchar
   NFC_TOTAL_CARD_F_COUNT        = 0xDFDB2B, // uchar
   NFC_CUSTOM_POLL_RESULT        = 0xDFDB2C, // uchar[*]
   NFC_CARD_TYPE                 = 0xDFDB21, // uchar
   NFC_CARD_INFO                 = 0xDFDB22, // uchar[*]
   NFC_CARD_TYPE_FULL            = 0xDFDB27, // unsigned (uchar[4])
   NFC_SAK                       = 0xDFDB2D, // uchar
   NFC_ATQ                       = 0xDFDB2E, // ushort (uchar[2])
   NFC_RFU                       = 0xDFDB2F, // uchar[*]

   NFC_CARD_DETECTED             = 0xFFDB20, // constructed

   // VAS tags

   VAS_JSON_DATA                 = 0xDFA300, // string
   VAS_APPLICATION_ID            = 0xDFA301, // string


   //  ENCRYPTED_EXPIRATION_DATE       = 0xDF16, // Old sensitive data mode only!
   //  ENCRYPTED_TRACK2_DATA           = 0xDF1E, // Old sensitive data mode only!
   //  ENCRYPTED_TRACK2_DATA_KSN       = 0xDF1F, // Old sensitive data mode only!
   //  ENCRYPTED_ONLINE_PIN            = 0xDF3B, // Old sensitive data mode only!
   //  ENCRYPTED_ONLINE_PIN_KSN        = 0xDF3C, // Old sensitive data mode only!
   //  ENCRYPTED_PAN                   = 0xDF3D, // Old sensitive data mode only!
   //  ENCRYPTED_PAN_KSN               = 0xDF3F, // Old sensitive data mode only!
   //  ENCRYPTED_TRACK2_DATA_LOYALTY   = 0xDF4F, // Old sensitive data mode only!

};

} // namespace vfisdi

#endif // _TAGS_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
