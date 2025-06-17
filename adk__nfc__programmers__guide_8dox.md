---
title: adk_nfc_programmers_guide.dox

---

# adk_nfc_programmers_guide.dox






## Source code

```cpp

ResponseCodes       NFC_Set_Callback_Function(rawData* id, NfcCallbackFunction *callbackFunction );
\endverbatim

\n
\verbatim
/*
*  This function is responsible to parse the callback data and populate the callbackInfo structure
*
* (in ) data            - Data associated with callback BUZZER reason.
* (in ) dataSizeBytes   - Size of data buffer.
* (out) pCallbackBuzzer - Pointer to callbackBuzzer structure to be populated by this function
*
*/
ResponseCodes       CallbackParseData(unsigned char *data, size_t dataSizeBytes, callbackInfo *pCallbackInfo );
\endverbatim

\n
\verbatim
/*
*  NFC callback prototype
*
* (in ) data            - Data associated with callback reason. It should be fed into a
*                         CallbackParseData function to have the callbackInfo structure populated.
* (in ) dataSizeBytes   - Size of data buffer.
*
*/
typedef void (NfcCallbackFunction) (unsigned char *data, size_t dataSizeBytes);
\endverbatim

\n
\n
\subsection sec_ADK_NFC_UI_types UI types definition

\n
\subsubsection sec_ADK_NFC_UI_types_flags UI Callback flags
* callbackFlags, this bit field tells what info is present in this callback
* Multiple info might be present in one callback
\verbatim
typedef struct
{
    unsigned int     init           : 1;
    unsigned int     textPresent    : 1;
    unsigned int     ledsPresent    : 1;
    unsigned int     buzzerPresent  : 1;
} callbackFlags;
\endverbatim

\n
\subsubsection sec_ADK_NFC_UI_types_text Text
* Text message to be displayed on the terminal screen.
\verbatim
#define CALLBACK_MAX_TEXT_SIZE         (64)
typedef struct
{
    // Null terminated string
    char            text[CALLBACK_MAX_TEXT_SIZE];
}callbackText;
\endverbatim

\n
\subsubsection sec_ADK_NFC_UI_types_leds LED
* LED info, this bit field tells the state each LED should take: 1-> turn LED on, 0->Turn LED off, 2-> flash LED
\verbatim
typedef struct
{
    unsigned int     led1           : 1;
    unsigned int     led2           : 1;
    unsigned int     led3           : 1;
    unsigned int     led4           : 1;
}callbackLeds;
\endverbatim

\n
\subsubsection sec_ADK_NFC_UI_types_buzzer Buzzer
* Buzzer info
\verbatim

/*
* Buzzer frequencies used by callbackBuzzer
*/
typedef enum
{
    CALLBACK_BUZZER_FREQUENCY_LOW   = 0,
    CALLBACK_BUZZER_FREQUENCY_HIGH  = 1
} callbackBuzzerFrequency;


typedef struct
{
    // Frequency
    callbackBuzzerFrequency         frequency;

    // Time in milliseconds the buzzer should be ON
    unsigned int                    on_ms;

    // Time in milliseconds the buzzer should be OFF
    unsigned int                    of_ms;

    // Number of times the buzzer cycle(ON-OFF) should repeat
    unsigned int                    nTimes;
}callbackBuzzer;
\endverbatim


\n
\subsubsection sec_ADK_NFC_UI_types_callback_info General Callback Info
\verbatim
typedef struct
{
    // Flags tells what info is present
    callbackFlags                   flags;

    // Text info
    callbackText                    text;

    // Leds info
    callbackLeds                    leds;

    // Buzzer info
    callbackBuzzer                  buzzer;
}callbackInfo;
\endverbatim



\n
\subsubsection subsubsec_adk_nfc_vas_key_transfer SDI Wallets Key Transfer
\verbatim
Wallet Key Transfare APIs have been introduced in order to support external Pinpad solution.
EPP - External Pinpad
CTP - Countertop
Step 1 - EPP has to be authenticated by CTP. This is done by validation of Random Number and other data fields encrypted with shared secret.
Step 2 - If the authentication process is completed successfully, CTP can pass the wallet key using SDI secure channel.

API:
NFC_VAS_Action(rawData* id, int action,rawData* inData, rawData* outBuff) is a function to be used to authenticate the sides and to transfer the keys.

Possible actions:
#define ACTION_STORE_WALLET_KEYS    3
#define ACTION_GET_WALLET_KEYS      4
#define ACTION_GET_TOKEN            5
#define ACTION_ENCRYPT_TOKEN        6

Flow:

CTP to EPP
    SDI CTP calls NFC_VAS_Action(ACTION_GET_TOKEN)
    NFC CTP generates random number (RN) and returns it to SDI CTP
    SDI CTP sends RN to SDI EPP
    SDI EPP calls NFC_VAS_Action(ACTION_ENCRYPT_TOKEN)
    NFC EPP add additional data to RN and encrypt it all

EPP to CTP
    SDI EPP received the encrypted token from NFC EPP
    SDI EPP passes the token to SDI CTP
    SDI CTP calls NFC_VAS_Action(ACTION_GET_WALLET_KEYS) and passes encrypted token to NFC CTP
    NFC CTP decrypts the token and validates RN and other data fields
    NFC CTP returns serialized key array to SDI CTP after successful validation

CTP to EPP
    SDI CTP transfers key array to SDI EPP
    SDI EPP calls NFC_VAS_Action(ACTION_STORE_WALLET_KEYS)
    NFC EPP stores wallet keys
FINISH

\endverbatim



\n
\n
\section sec_ADK_NFC_Types TYPES

\n
\subsection subsec_adk_nfc_VasStatus VasStatus
\verbatim
typedef enum
{
    VAS_OK =0,
    VAS_DO_PAY,                 // 0x01
    VAS_FAIL,                   // 0x02
    VAS_ERR_CTLS_DRIVER_CLOSE,  // 0x03
    VAS_CANCEL,                 // 0x04
    VAS_TIME_OUT,               // 0x05
    VAS_ERR_CONFIG,             // 0x06
    VAS_DUMMY_CALL,             // 0x07
    VAS_CANCEL_NOT_ALLOWED,     // 0x08
    VAS_CANCEL_IRRELEVANT,      // 0x09
    VAS_COMM_ERR,               // 0x0A
    VAS_INIT_ERROR,             // 0x0B
    VAS_DO_PAY_DECRYPT_REQ,     // 0x0C
    VAS_OK_DECRYPT_REQ          // 0x0D
}VasStatus;
\endverbatim


\n
\subsection subsec_adk_nfc_ResponseCodes ResponseCodes
\verbatim
typedef enum
{
    EMB_APP_OK=0,
    EMB_APP_INCORRECT_HEADER,               // 0x01
    EMB_APP_UNKNOWN_COMMAND,                // 0x02
    EMB_APP_UNKNOWN_SUBCOMMAND,             // 0x03
    EMB_APP_COMMAND_NOT_SUPPORTED,          // 0x04
    EMB_APP_SUBCOMMAND_NOT_SUPPORTED,       // 0x05
    EMB_APP_CRC_ERROR,                      // 0x06
    EMB_APP_FAILED,                         // 0x07
    EMB_APP_TIMEOUT,                        // 0x08
    EMB_APP_UNKNOWN_APP_NAME,               // 0x09
    EMB_APP_PARAMETER_NOT_SUPPORTED,        // 0x0A
    EMB_APP_MULTI_CARDS,                    // 0x0D
    EMB_APP_START_PAYMENT,                  // 0x0E
    EMB_APP_COMM_ERROR,                     // 0x0F
    EMB_APP_INCORRECT_DATA,                 // 0x11
    EMB_APP_CANCEL_DONE,                    // 0x12
    EMB_APP_CANCEL_IRRELEVANT,              // 0x13
    EMB_APP_CANCEL_NOT_ALLOWED,             // 0x14
    EMB_APP_DISCOVERY_CANCELED,             // 0x15
    EMB_APP_UNSUPPORTED_CARD,               // 0x16
    EMB_APP_2ND_AUTHENTICATION_FAILED,      // 0x19
    EMB_APP_INCORRECT_LEN,                  // 0x1B
    EMB_APP_COMMAND_NOT_ALLOWED,            // 0x1D
    EMB_APP_MISSING_MANDATORY_DATA,         // 0x1E
    EMB_APP_APPLICATION_NOT_FOUND,          // 0X22
    EMB_APP_WALLET_NOT_EXIST,               // 0x24
    EMB_APP_NFCUTIL_ERROR,                  // 0x25
    EMB_APP_USER_ACTION_REQUIRED_UI,        // 0x26
    EMB_APP_VAS_DATA_NOT_ACTIVATED,         // 0x27
    EMB_APP_BAD_SYNTAX,                     // 0x28
    EMB_APP_INTERNAL_ERROR,                 // 0x29
    EMB_APP_CARD_NOT_FOUND,                 // 0x2A
    EMB_APP_CARD_ERROR,                     // 0x2B
    EMB_APP_L1_CARD_PROTOCOL_ERROR,         // 0x2C
    EMB_APP_L1_CARD_NOT_ACTIVE,             // 0x2D
    EMB_APP_DUMMY_FUNC_CALL                 // 0x2E
    EMB_APP_CALLBACK_SET_ERROR,             // 0x2F
    EMB_APP_INIT_ERROR,                     // 0x30
    EMB_APP_L1_DRIVER_CLOSED                // 0x31
}ResponseCodes;                                    
\endverbatim

\n
\subsection subsec_adk_nfc_client_status CL_STATUS
\verbatim
typedef enum
{
    CL_STATUS_SUCCESS = 0x00,           //0
    CL_STATUS_CARD_ERROR,               //0x01
    CL_STATUS_NOT_SUPPORTED,            //0x02
    CL_STATUS_TIMEOUT,                  //0x03
    CL_STATUS_DATA_ERROR,               //0x04
    CL_STATUS_SIZE_ERROR,               //0x05
    CL_STATUS_INIT_ERROR,               //0x06
    CL_STATUS_IPC_ERROR,                //0x07
    CL_STATUS_GENERAL_ERROR,            //0x08
    CL_STATUS_PROT_ERROR,               //0x09
    CL_STATUS_INTERNAL_ERROR,           //0x0A
    CL_STATUS_NFC_INCOMPATABLE,         //0x0B
    CL_STATUS_NFC_INITILIZED_ALREADY    //0x0C
}CL_STATUS;
\endverbatim

\n
\subsection subsec_adk_nfc_poll_tech Polling Technologies Bitmap
\verbatim
typedef enum                                   
{                                              
    NFC_COMM_POLL_PARAM_TECH_A      =   0x01,  
    NFC_COMM_POLL_PARAM_TECH_B      =   0x02,  
    NFC_COMM_POLL_PARAM_TECH_AB     =   0x03,  
    NFC_COMM_POLL_PARAM_TECH_F_DEP  =   0x04,  
    NFC_COMM_POLL_PARAM_TECH_FELICA =   0x08,  
}NFC_POLL_PARAM_TECH; 

NOTE: NFC_COMM_POLL_PARAM_TECH_F_DEP is not supported yet since it requires "NFC-Forum Digital Exchange Protocol" being implemented.
                         
\endverbatim

\n
\subsection subsec_adk_nfc_frm_state NFC Framework State
\verbatim
typedef enum
{
    IDLE = 1,
    BUSY = 2,
}FrameworkState;
\endverbatim

\n
\subsection subsec_adk_nfc_rawData rawData
Note: The user will allocate and free the memory.
\verbatim
typedef struct             
{                          
    byte*   buffer;        
    usint   bufferLen;     
    usint   bufferMaxSize; 
}rawData;                  
\endverbatim

\n
\subsection subsec_adk_nfc_polltime_calc Polling time definition
\verbatim
Minimum Polling time - 0 (one polling cycle)
Maximum Polling time - 0xFFFFFFFF (infinite)
Polling time units - milliseconds                 
\endverbatim

\n
\subsection subsec_adk_nfc_poll_req pollReq
\verbatim
typedef struct                     
{                                  
    usint           tech_bitmap;   
    ulint           poll_timeout;  
    buffData        customData;  
    bool            turnDutyCycleOn;    
}pollReq;                          
\endverbatim

\n
\subsection subsec_adk_nfc_poll_res pollRes
The use will free the memory by calling NFC_Free_Poll_Data().
\verbatim
typedef struct                                 
{                                              
    int             m_foundTargetsTotalCount;  
    int             m_foundTargetsA;           
    int             m_foundTargetsB;           
    int             m_foundTargetsF;           
    cardInfo*       cards_info_arr;                
    buffData        custom_poll_result;        
}pollRes;                                      
\endverbatim

\n
\subsection subsec_adk_nfc_poll_res_full pollResFull
The use will free the memory by calling NFC_Free_Poll_Data().
\verbatim
typedef struct _pollResFull
{
    unsigned int    m_foundTargetsTotalCount;
    unsigned int    m_foundTargetsA;
    unsigned int    m_foundTargetsB;
    unsigned int    m_foundTargetsF;
    cardInfoFull    *cards_info_arr;
    rawData         custom_poll_result;
}pollResFull;                                      
\endverbatim

\n
\subsection subsec_adk_nfc_poll_req_ABF pollReq
\verbatim
typedef struct _pollABFParams
{
    unsigned int        tech_bitmap;
    unsigned int        poll_timeout;
    rawData             customData;
    bool                turnDutyCycleOn;
    unsigned char       systemCode[2];
    unsigned char       requestCode;
    unsigned char       TimeSlot;
    unsigned int        reciveTimeOUt;
}pollABFParams;                        
\endverbatim

\n
\subsection subsec_adk_nfc_poll_res_ABF pollResFull
The use will free the memory by calling NFC_Free_Poll_Data().
\verbatim
typedef struct _pollABFRes
{
    pollResFull         abresponse;
    felicaPollingOutput felicaResponse;
}pollABFRes;                                     
\endverbatim

\n
\subsection subsec_adk_nfc_card_info Card Information
<table border="5" cellspacing="2" cellpadding="2">
<tr> <th align="center">                Card Type   </th>   <th align="center"> Information             </th>   <td align="center"> Length (bytes)  </th>   </tr>
<tr> <th align="center">                A           </th>   <td align="left"> Unique Identifier         </td>   <td align="center"> 4 or 7          </td>   </tr>
<tr> <th align="center" rowspan="3">    B           </th>   <td align="left"> Pseudo-Unique Identifier  </td>   <td align="center"> 4               </td>   </tr>
<tr>                                                        <td align="left"> Application Data          </td>   <td align="center"> 4               </td>   </tr>
<tr>                                                        <td align="left"> Protocol Info             </td>   <td align="center"> 3 or 4          </td>   </tr>
<tr> <th align="center" rowspan="5">    F/Felica    </th>   <td align="left"> Communication Status      </td>   <td align="center"> 1               </td>   </tr>
<tr>                                                        <td align="left"> Info data lenght(HEX)     </td>   <td align="center"> 1               </td>   </tr>
<tr>                                                        <td align="left"> Response Code             </td>   <td align="center"> 1               </td>   </tr>
<tr>                                                        <td align="left"> NFCID2 or IDm             </td>   <td align="center"> 8               </td>   </tr>
<tr>                                                        <td align="left"> PMm                       </td>   <td align="center"> 8               </td>   </tr>
</table>

\n
\subsection subsec_adk_nfc_cardInfo cardInfo
\verbatim
typedef struct _cardInfo
{
    rawData             card_info;
    NFC_CARD_TYPE       cardType;

}cardInfo;
\endverbatim

\n
\subsection subsec_adk_nfc_cardInfo_full cardInfoFull
\verbatim
typedef struct _cardInfoFull
{
    byte                m_modulation;       // Modulation 'A', 'B' or 'F'
    int                 m_cardTypesFull;    // Bitmap representing subtype of Modulation
    byte                m_SAK;              // Value of SAK
    byte                ATQ[2];             // Value of ATQ
    rawData             mrd_UID;            // Unique ID of the card
    rawData             mrd_RFU;
}cardInfoFull;
\endverbatim
Reference:
@ref subsec_adk_nfc_card_modulations
@ref subsec_adk_nfc_card_types_full

\n
\subsection subsec_adk_nfc_card_types NFC_CARD_TYPE
\verbatim
typedef enum                                                           
{                                                                      
    I_ISO14443A                 = 1,                                                   
    I_JEWEL                     = 2,                                                       
    I_ISO14443B                 = 3,                                                   
    I_ISO14443BI                = 4, // pre-ISO14443B aka ISO/IEC 14443 B' or Type B' 
    I_ISO14443B2SR              = 5, // ISO14443-2B ST SRx                          
    I_ISO14443B2CT              = 6, // ISO14443-2B ASK CTx                         
    I_DEP                       = 7,                                                         
    I_FELICA                    = 8,                                                      
    I_ISO14443A_MIFARE_MINI     = 9,                                       
    I_ISO14443A_MIFARE_1K       = 10,                                        
    I_ISO14443A_MIFARE_4K       = 11,                                        
    I_ISO14443A_MIFARE_DES      = 12,                                       
    I_ISO14443A_MIFARE_PLUS     = 13,                                      
    I_ISO14443A_MIFARE_UL       = 14,                                        
    I_ISO14443A_MIFARE_UL_C     = 15,                                      
    I_UNKNOWN_CARD_TYPE         = 16,
    I_ISO14443A_APDU_MIFARE_1K  = 17,
    I_NFC_TYPE_3_TAG            = 18
}NFC_CARD_TYPE;                                                         
\endverbatim

\n
\subsection subsec_adk_nfc_card_modulations m_modulation
\verbatim                                                                   
    I_ISO14443A                 = 1,                                                   
    I_JEWEL                     = 2,                                                       
    I_ISO14443B                 = 3,                                                   
    I_ISO14443BI                = 4,
    I_ISO14443B2SR              = 5,                        
    I_ISO14443B2CT              = 6,                       
    I_DEP                       = 7,                                                         
    I_FELICA                    = 8                                                        
\endverbatim


\n
\subsection subsec_adk_nfc_card_types_full m_cardTypesFull
\verbatim                                                                     
#define UNKNOWN                         0x00000000
#define MIFARE_NO_DESFIRE               0x00000001
#define ULTRALIGHT                      0x00000002
#define MINI                            0x00000004
#define CLASSIC_1K                      0x00000008
#define CLASSIC_4K                      0x00000010
#define DESFIRE_CL1                     0x00000020
#define DESFIRE_CL2                     0x00000040
#define PLUS_2K_SL_1                    0x00000080
#define PLUS_4K_SL_1                    0x00000100
#define PLUS_2K_SL_2                    0x00000200
#define PLUS_4K_SL_2                    0x00000400
#define PLUS_2K_SL_3                    0x00000800
#define PLUS_4K_SL_3                    0x00001000
#define TNP3xxx                         0x00002000
#define SMART_MX_1K_EMULATION           0x00004000
#define SMART_MX_4K_EMULATION           0x00008000
#define SMART_MX                        0x00010000
#define APDU_COMPLIANT                  0x00020000
#define NFC_COMPLIANT                   0x00040000
#define ULTRALIGHT_C                    0x00080000                                                        
\endverbatim

\n
\subsection subsec_adk_nfc_mifare_card_types I_MIFARE_CARD_TYPE
\verbatim
typedef enum                   
{                              
    I_MIFARE_TYPE_CLASSIC,      //0     
    I_MIFARE_TYPE_ULTRALIGHT,   //0x01
    I_MIFARE_TYPE_ULTRALIGHT_C  //0x02
}I_MIFARE_CARD_TYPE;           
\endverbatim

\n
\subsection subsec_adk_nfc_mifare_key_types MIFARE_KEY_TYPE
\verbatim
typedef enum           
{                      
    MIFARE_KEY_TYPE_A, 
    MIFARE_KEY_TYPE_B, 
}MIFARE_KEY_TYPE;      
\endverbatim

\n
\subsection subsec_adk_nfc_apdu_TxData apduTxData
\verbatim
typedef struct                         
{                                      
    unsigned int clas;                 
    unsigned int instruction;          
    unsigned int param1;               
    unsigned int param2;               
    unsigned int expectedResponseLen;  
    rawData txData;                    
}apduTxData;                           
\endverbatim

\n
\subsection subsec_adk_nfc_apdu_RxData apduRxData
\verbatim
typedef struct                 
{                              
    unsigned int        sw1;   
    unsigned int        sw2;   
    rawData             rxData;
}apduRxData;                   
\endverbatim

\n
\subsection subsec_adk_nfc_felica_TxData FeliCa TxData
\verbatim
typedef struct
{
     usint     timeOut; 
     rawData txData;
}felicaTxData;

timeOut - in milliseconds, response waiting time (how long to wait for response after sending data).
NOTE: 'timeout' field is maximum 5 seconds value
\endverbatim

\n
\subsection subsec_adk_nfc_felica_polling_param FeliCa Polling Parameters
\verbatim
typedef struct
{
    unsigned int    reciveTimeOUt;
    unsigned char   systemCode[2];
    unsigned char       requestCode;
    unsigned char       TimeSlot;
}felicaPolling;
\endverbatim

\verbatim
NOTE: The values for VOS2 and VOS are different since it calculated in different units, please use the values below.
\endverbatim

\verbatim 
reciveTimeOUt values for VOS2 (in clock cycles):
48912
65296
81680
98064
114448
130832
147216
163600
179984
196368
212752
229136
245520
261904
278288
294672
\endverbatim

\verbatim
reciveTimeOUt values for VOS (in milliseconds):
305
607
1211
2419
4836
9669
19335
38667
77331
154660
309317 
618631   
1237260  
2474518  
4949034
\endverbatim

\n
\subsection subsec_adk_nfc_felica_polling_result FeliCa Polling Result
\verbatim
typedef struct{
    unsigned char UID[8];
    unsigned char pad[8];
    unsigned char sysCode[2];
}felicaPollingOutput;
\endverbatim

\n
\subsection subsec_adk_nfc_felica_RxData FeliCa RxData
\verbatim
typedef struct
{
     rawData rxData;
}felicaRxData;
\endverbatim

\n
\subsection subsec_adk_nfc_conn_type CONNECTION_TYPE
\verbatim
typedef enum
{
    CL_TYPE_CLIENT_SERVER =0,
    CL_TYPE_FUNCTION
}CONNECTION_TYPE;

NOTE:  CL_TYPE_CLIENT_SERVER is not supported on Verix based platforms.
\endverbatim

\n
\subsection subsec_adk_nfc_F_Baud NFC_F_BAUD
\verbatim
typedef enum
{
    INF_BAUD212,    //0
    INF_BAUD424     //0x01
}NFC_F_BAUD;
\endverbatim

\n
\subsection subsec_adk_nfc_Baud_Rate NFC_BAUD_RATE
\verbatim
typedef enum
{
    BAUD_RATE_106,
    BAUD_RATE_212,
    BAUD_RATE_424,
    BAUD_RATE_848
}NFC_BAUD_RATE;
\endverbatim

\n
\subsection subsec_adk_nfc_target_actions NFC_TARGET_ACTION
\verbatim
typedef enum {
  TARGET_MODE_START,
  TARGET_MODE_STOP,
  TARGET_NFC_SEND,
  TARGET_NFC_RECEIVE,
  TARGET_MODE_SUPPORTED
} NFC_TARGET_ACTION;
\endverbatim

\n
\subsection subsec_adk_nfc_ndef_types NFC_NDEF_TYPES
\verbatim
typedef enum {
    NDEF_URI
}NFC_NDEF_TYPES;
\endverbatim

\n
\subsection subsec_adk_nfc_log_bitmask LOG BIT MASK
\verbatim
LOG_ERROR_MASK          1
LOG_WARNING_MASK        2
LOG_INFO_MASK           4
LOG_DEBUG_MASK          8
LOG_PERFORMANCE_MASK    16 

Examples: 
 - 24 should be used for LOG_DEBUG_MASK and LOG_PERFORMANCE_MASK in the same time.
 - 31 should be used for all logs options.
\endverbatim

\n
\section sec_ADK_NFC_MemoryAllocation MEMORY ALLOCATION
\verbatim
- 'rawData' type requires memory allocation and free by the user.
- 'pollRes' type requires memory free by the user by calling NFC_Free_Poll_Data().
- Maximum data size handled by ADK-NFC framework is 10K bytes.
\endverbatim

\n
\section sec_ADK_NFC_Example EXAMPLES
Provides different examples on how ADK-NFC solution interfaces with User Application

\n
\subsection subsec_adk_nfc_examples_how_to_poll How to initiate polling - functional interface 
\verbatim
- Call NFC_Client_Init(CL_TYPE_FUNCTION) to initialize direct/functional interface.
- Call NFC_PT_Open() to open L1 driver.
- Call NFC_PT_FieldOn() to open RF field.
- Call NFC_PT_Polling() to initiate polling.
- Tap Card on the terminal surface.
\endverbatim

\n
\subsection subsec_adk_nfc_examples_how_to_poll_serial How to initiate polling - serial interface 
\verbatim
- Call NFC_Client_Init(CL_TYPE_CLIENT_SERVER) to initialize serial interface.
- Call NFC_PT_Open() to open L1 driver.
- Call NFC_PT_FieldOn() to open RF field.
- Call NFC_PT_Polling() to initiate polling.
- Tap Card on the terminal surface.
\endverbatim


\n
\section sec_ADK_NFC_KnownIssues KNOWN ISSUES
\verbatim
- NFC_PT_Activation() parameter: rawData *rd_activationData is ignored in VOS since L1 driver doesn't support it and VOS2 implementation alligned to it. Jira ticket:VERTEX-1087
- NFC_VAS_Continue() not supported, use NFC_VAS_Activate() instead.
\endverbatim
\n
\section sec_ADK_NFC_History HISTORY

<table border="5" cellspacing="2" cellpadding="2">
<tr> <th align="center" rowspan="1">    Version     </th>   <th align="center" rowspan="1">     Date        </th>   <th align="center" rowspan="1">     Author              </th>   <th align="center">     Description of changes                                                              </th>   </tr>
<tr> <td align="center" rowspan="1">    1.0.1       </td>   <td align="center" rowspan="1">     04/21/2016  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Initial version                                                                     </td>   </tr>
<tr> <td align="center" rowspan="1">    1.0.4       </td>   <td align="center" rowspan="1">     04/15/2016  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Added Flow charts, Minor fixes                                                      </td>   </tr>
<tr> <td align="center" rowspan="8">    1.0.5       </td>   <td align="center" rowspan="8">     04/27/2016  </td>   <td align="center" rowspan="8">     Evgeny S.           </td>   <td align="left">       Added "Documentation and Links" section.                                            </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Removed PreLoadConfig() since it is not supported.                                  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Removed NFC_Continue() since it is not supported.                                   </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Removed NFC_TERMINAL_ReadConfig() since it is not supported.                        </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       List of return codes in VasStatus type was changed.                                 </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Added explanation to NFC_VAS_UpdateConfig() and NFC_TERMINAL_Config().              </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Added notes to 'rawData' and 'pollRes' types.                                       </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Added 'Memory allocation' section.                                                  </td>   </tr>
<tr> <td align="center" rowspan="2">    1.0.7       </td>   <td align="center" rowspan="2">     05/06/2016  </td>   <td align="center" rowspan="2">     Evgeny S.           </td>   <td align="left">       Added NFC_VAS_PreLoad().                                                            </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Added NFC_VAS_Continue().                                                           </td>   </tr>
<tr> <td align="center" rowspan="3">    1.0.8       </td>   <td align="center" rowspan="3">     05/11/2016  </td>   <td align="center" rowspan="3">     Evgeny S.           </td>   <td align="left">       Moved   NFC_Get_Version() to "General Interface" section.                           </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Added NFC_Ping() function.                                                          </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Added VAS_CANCEL_NOT_ALLOWED and VAS_CANCEL_IRRELEVANT to VasStatus.                </td>   </tr>
<tr> <td align="center" rowspan="1">    1.0.9       </td>   <td align="center" rowspan="1">     05/20/2016  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Changed NFC_Felica_Exchange() interface.                                            </td>   </tr>
<tr> <td align="center" rowspan="2">    1.0.10      </td>   <td align="center" rowspan="2">     05/26/2016  </td>   <td align="center" rowspan="2">     Evgeny S.           </td>   <td align="left">       Added VAS configuration flowcharts.                                                 </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Added NFC_Felica_Polling() function.                                                </td>   </tr>
<tr> <td align="center" rowspan="6">    1.0.12      </td>   <td align="center" rowspan="6">     06/03/2016  </td>   <td align="center" rowspan="6">     Evgeny S.           </td>   <td align="left">       In NFC_TERMINAL_Config(), jsonStreamOut changed to RFU.                             </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Polling time calculation section added.                                             </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       CustomPollData changed to be Optional.                                              </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       PreLoad Configuration Parameters table added.                                       </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Read Terminal Configuration Parameters table added.                                 </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Protocol_Version" changed to "Mobile_App_Version" in VAS Wallet Response.          </td>   </tr>
<tr> <td align="center" rowspan="6">    1.0.13      </td>   <td align="center" rowspan="6">     06/08/2016  </td>   <td align="center" rowspan="6">     Evgeny S.           </td>   <td align="left">       NFC_COMM_POLL_PARAM_TECH_F_DEP is not supported.                                    </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       NFC_VAS_CancelPreLoad() added.                                                      </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Update and PreLoad configuration flow" section added.                              </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Added description for NFC_TERMINAL_ReadConfig()                                     </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Polling time definition" section added.                                            </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Polling time calculation" section removed                                          </td>   </tr>
<tr> <td align="center" rowspan="7">    1.1.0       </td>   <td align="center" rowspan="7">     06/10/2016  </td>   <td align="center" rowspan="7">     Evgeny S.           </td>   <td align="left">       "Source_List" and "Source" removed from "Read Terminal Configuration Parameters".   </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Status_Word" moved to be under "Services" object in "VAS Wallet Response Format".  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Mobile_Token" removed from "VAS Wallet Response Format".                           </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Mobile_Data" renamed to "VAS_Data" and put to be an optional.                      </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Merchant_Name" added to "VAS Wallet Response Format".                              </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       jsonStreamOut parameter not return data for NFC_VAS_PreLoad()                       </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       NFC_Ping() interface is updated.                                                    </td>   </tr>
<tr> <td align="center" rowspan="2">    1.1.1       </td>   <td align="center" rowspan="2">     06/10/2016  </td>   <td align="center" rowspan="2">     Evgeny S.           </td>   <td align="left">       pollTimeout parameters is functional in NFC_Felica_Polling().                       </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       List of values for reciveTimeOUt shown in @ref subsec_adk_nfc_felica_polling_param. </td>   </tr>
<tr> <td align="center" rowspan="6">    1.1.2       </td>   <td align="center" rowspan="6">     06/29/2016  </td>   <td align="center" rowspan="6">     Evgeny S.           </td>   <td align="left">       Terminal Configuration Parameters table updated.                                    </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Updated VAS configuration examples.                                                 </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       Added "Log" configuration and LOG BIT MASK options.                                 </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       @ref subsubsec_adk_nfc_Update_vs_PreLoad updated.                                   </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       @ref subsec_adk_nfc_vas_wallet_json_objects added.                                  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       In @ref sec_ADK_NFC_Gen_Interface added clarification for NFC_Get_Version() output. </td>   </tr>
<tr> <td align="center" rowspan="2">    1.1.3       </td>   <td align="center" rowspan="2">     07/08/2016  </td>   <td align="center" rowspan="2">     Evgeny S.           </td>   <td align="left">       Document updated based on SQA feedback. Default values added.                       </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       @ref subsec_adk_nfc_vas_Select_OSe_Response table added.                            </td>   </tr>
<tr> <td align="center" rowspan="6">    1.1.4       </td>   <td align="center" rowspan="6">     07/27/2016  </td>   <td align="center" rowspan="6">     Evgeny S.           </td>   <td align="left">       "Configuration Version" and "Capabilities" objects changed to be mandatory.         </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "AutoPay" object added to Termianl configuration.                                   </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "APDU_Max_Len" object added to Termianl configuration.                              </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Compression" option added to "system" object in Terminal Configuration.            </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       "Presigned_Auth" option added to "Terminal_Capabilities" object.                    </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       In NFC_VAS_UpdateConfig() jsonStreamOut does not return any data. VERTEX-1086.      </td>   </tr>
<tr> <td align="center" rowspan="1">    1.2.0       </td>   <td align="center" rowspan="1">     08/04/2016  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Terminal Configuration (Set/Read) updated based on latest VWI changes.              </td>   </tr>
<tr> <td align="center" rowspan="5">    1.2.1       </td>   <td align="center" rowspan="5">     08/16/2016  </td>   <td align="center" rowspan="5">     Evgeny S.           </td>   <td align="left">       VERTEX-1140 fixed.                                                                  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1137 fixed.                                                                  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1059 fixed.                                                                  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1087 fixed.                                                                  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VAS_COMM_ERR added to @ref subsec_adk_nfc_VasStatus.                                </td>   </tr>
<tr> <td align="center" rowspan="4">    1.2.2       </td>   <td align="center" rowspan="4">     09/06/2016  </td>   <td align="center" rowspan="4">     Evgeny S.           </td>   <td align="left">       "Compression" type fixed.                                                           </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1206 fixed.                                                                  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1195 fixed.                                                                  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       @ref subsec_adk_nfc_vas_preload_dynamic_config_types added.                         </td>   </tr>
<tr> <td align="center" rowspan="1">    1.2.3       </td>   <td align="center" rowspan="1">     09/12/2016  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       VERTEX-1277 fixed.                                                                  </td>   </tr>
<tr> <td align="center" rowspan="1">    1.2.4       </td>   <td align="center" rowspan="1">     09/22/2016  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       VERTEX-1325 fixed.                                                                  </td>   </tr>
<tr> <td align="center" rowspan="1">    1.3.0       </td>   <td align="center" rowspan="1">     10/14/2016  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Added support for Verix.                                                            </td>   </tr>
<tr> <td align="center" rowspan="1">    1.3.1       </td>   <td align="center" rowspan="1">     10/26/2016  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       ADK4.3 RC3 readiness.                                                               </td>   </tr>
<tr> <td align="center" rowspan="2">    1.3.2       </td>   <td align="center" rowspan="2">     11/10/2016  </td>   <td align="center" rowspan="2">     Evgeny S.           </td>   <td align="left">       ADK4.3 RC3.1 readiness.                                                             </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1339 fixed.                                                                  </td>   </tr>
<tr> <td align="center" rowspan="5">    1.3.3       </td>   <td align="center" rowspan="5">     12/02/2016  </td>   <td align="center" rowspan="5">     Evgeny S.           </td>   <td align="left">       Section "Examples" was removed.                                                     </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1552 fixed.                                                                  </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1371 fixed. Added note to @ref subsec_adk_nfc_fun_table_Mifare               </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1376 fixed. Added note to @ref subsec_adk_nfc_fun_table_Mifare               </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1126 fixed. Added note to @ref subsec_adk_nfc_felica_TxData                  </td>   </tr>
<tr> <td align="center" rowspan="1">    1.3.6       </td>   <td align="center" rowspan="1">     01/09/2017  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       VERTEX-1371 fixed. Default value of Autopay changed to '1'                          </td>   </tr>
<tr> <td align="center" rowspan="2">    1.3.7       </td>   <td align="center" rowspan="2">     01/26/2017  </td>   <td align="center" rowspan="2">     Evgeny S.           </td>   <td align="left">       VERTEX-708  fixed. Response codes updated to add Init Error case.                   </td>   </tr>
<tr>                                                                                                                                                                                <td align="left">       VERTEX-1681 fixed.                                                                  </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     03/08/2017  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Note added to @subsec_adk_nfc_felica_TxData VERTEX-1684.                            </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     03/10/2017  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       NFC_VAS_Decrypt() API and corresponding Response codes introduced to cover CR012.   </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     06/01/2017  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       @ref subsec_adk_nfc_card_info updated to explain polling Type B results.            </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     06/06/2017  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       @ref subsec_adk_nfc_ResponseCodes updated to include EMB_APP_L1_DRIVER_CLOSED.      </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     06/13/2017  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       @ref subsec_adk_nfc_conn_type updated. Note added to fix VERTEX-1502.               </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     07/25/2017  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Added @ref subsec_adk_nfc_VAS_Wallets_General_Flow                                  </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     09/13/2017  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Added I_ISO14443A_APDU_MIFARE_1K to @ref subsec_adk_nfc_card_types                  </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     09/27/2017  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Added note to @ref subsec_adk_nfc_vas_terminal_config_types                         </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     01/14/2018  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Added NFC_Mifare_Increment(), NFC_Mifare_Decrement() and NFC_PT_PollingFull().      </td>   </tr>
<tr> <td align="center" rowspan="1">    x.x.x       </td>   <td align="center" rowspan="1">     01/14/2018  </td>   <td align="center" rowspan="1">     Evgeny S.           </td>   <td align="left">       Added CL_STATUS_NFC_INITILIZED_ALREADY CL Status.                                   </td>   </tr>
</table>
 
\n
\n
\n


*/


*/
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
