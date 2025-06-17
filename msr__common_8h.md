---
title: msr/export/msr_common.h

---

# msr/export/msr_common.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[MSR_Track_1](struct_m_s_r___track__1.md)**  |
| struct | **[MSR_Track_2](struct_m_s_r___track__2.md)**  |
| struct | **[MSR_Track_3](struct_m_s_r___track__3.md)**  |
| struct | **[MSR_TrackData](struct_m_s_r___track_data.md)**  |
| struct | **[MSR_TrackData2](struct_m_s_r___track_data2.md)**  |
| struct | **[MSR_TrackData3](struct_m_s_r___track_data3.md)**  |
| struct | **[MSR_TrackData4](struct_m_s_r___track_data4.md)**  |
| struct | **[MSR_Decoded_Track_1](struct_m_s_r___decoded___track__1.md)**  |
| struct | **[MSR_Decoded_Track_2](struct_m_s_r___decoded___track__2.md)**  |
| struct | **[MSR_DecodedData](struct_m_s_r___decoded_data.md)**  |
| struct | **[MSR_DecodedData4](struct_m_s_r___decoded_data4.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(const char *str, void *data) | **[MSR_TraceCallback](msr__common_8h.md#typedef-msr-tracecallback)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[MSR_Version](msr__common_8h.md#function-msr-version)**(char * version, unsigned char len) |
| void | **[MSR_SetTraceCallback](msr__common_8h.md#function-msr-settracecallback)**([MSR_TraceCallback](msr__common_8h.md#typedef-msr-tracecallback) cbf, void * cb_data) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[MSR_OK](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-ok)**  |
|  | **[MSR_ERROR](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-error)**  |
|  | **[MSR_TIMEOUT](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-timeout)**  |
|  | **[MSR_ABORTED](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-aborted)**  |
|  | **[MSR_ACTIVE](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-active)**  |
|  | **[MSR_PARAM](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-param)**  |
|  | **[MSR_PROCESS](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-process)**  |
|  | **[MSR_NO_DEVICE](group___m_s_r___e_r_r_o_r___c_o_d_e_s.md#define-msr-no-device)**  |
|  | **[MSR_STATUS_NOERR](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-noerr)**  |
|  | **[MSR_STATUS_NODATA](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-nodata)**  |
|  | **[MSR_STATUS_NOSTX](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-nostx)**  |
|  | **[MSR_STATUS_NOETX](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-noetx)**  |
|  | **[MSR_STATUS_BADLRC](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-badlrc)**  |
|  | **[MSR_STATUS_PARITY](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-parity)**  |
|  | **[MSR_STATUS_REVETX](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-revetx)**  |
|  | **[MSR_STATUS_BADJIS](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-badjis)**  |
|  | **[MSR_STATUS_BADTRK](group___m_s_r___s_t_a_t_u_s___c_o_d_e_s.md#define-msr-status-badtrk)**  |
|  | **[MSR_TYPE_PHYSICAL](group___m_s_r___c_a_r_d___c_o_d_e_s.md#define-msr-type-physical)**  |
|  | **[MSR_TYPE_SAMSUNG](group___m_s_r___c_a_r_d___c_o_d_e_s.md#define-msr-type-samsung)**  |
|  | **[MSR_CARD_UNKNOWN](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-unknown)**  |
|  | **[MSR_CARD_ISO](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-iso)**  |
|  | **[MSR_CARD_JIS_II](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-jis-ii)**  |
|  | **[MSR_CARD_AAMVA](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-aamva)**  |
|  | **[MSR_CARD_CADLID](group___m_s_r___t_r_a_c_k___t_y_p_e_s.md#define-msr-card-cadlid)**  |
|  | **[MSR_UX_ENHANCEMENTS](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-ux-enhancements)** <br>options[0] Hybrid reader: ignore card insertion  |
|  | **[MSR_SAMSUNG_TRACK1](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-samsung-track1)** <br>options[0] not used anymore  |
|  | **[MSR_ONE_SWIPE](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-one-swipe)** <br>options[0] Only read on first swipe  |
|  | **[MSR_LEDS](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-leds)** <br>options[0] Light MSR LEDs while card swipe is possible.  |
|  | **[MSR_ENABLE_LICENSE_DECODE](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-enable-license-decode)** <br>options[0] Enable detection of US driving license  |
|  | **[MSR_DETECT_ISO](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-detect-iso)** <br>options[1] Detect ISO cards  |
|  | **[MSR_DETECT_JIS_II](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-detect-jis-ii)** <br>options[1] Detect JIS-II cards  |
|  | **[MSR_DETECT_ALL](group___m_s_r___o_p_t_i_o_n_s___b_i_t_m_a_s_k.md#define-msr-detect-all)** <br>options[1] Detect both ISO and JIS-II cards.  |
|  | **[MSR_LED_OFF](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-off)**  |
|  | **[MSR_LED_WHITE](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-white)**  |
|  | **[MSR_LED_RED](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-red)**  |
|  | **[MSR_LED_GREEN](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-green)**  |
|  | **[MSR_LED_BLUE](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-blue)**  |
|  | **[MSR_LED_YELLOW](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-yellow)**  |
|  | **[MSR_LED_BLINK](group___l_e_d___s_t_a_t_e_s.md#define-msr-led-blink)**  |

## Types Documentation

### typedef MSR_TraceCallback

```cpp
typedef void(* MSR_TraceCallback) (const char *str, void *data);
```


**Parameters**: 

  * **str** : Trace message. 
  * **data** : Data pointer provided by the application. 


Type of function that is called for traces, see [MSR_SetTraceCallback()](msr__common_8h.md#function-msr-settracecallback)



## Functions Documentation

### function MSR_Version

```cpp
void MSR_Version(
    char * version,
    unsigned char len
)
```


**Parameters**: 

  * **version** : Buffer to store null-terminated version string. 
  * **len** : Size of buffer version. 


Get version of libmsr. 


### function MSR_SetTraceCallback

```cpp
void MSR_SetTraceCallback(
    MSR_TraceCallback cbf,
    void * cb_data
)
```


**Parameters**: 

  * **cbf** : Callback function for trace messages, may be NULL. 
  * **cb_data** : Data pointer that is passed on to the callback function cbf, may be NULL. 


Set callback function for trace output. 




## Macros Documentation

### define MSR_OK

```cpp
#define MSR_OK 0
```


No error, function executed successfully. 


### define MSR_ERROR

```cpp
#define MSR_ERROR -1
```


Device error, magnetic card reader not activated, or internal error. 


### define MSR_TIMEOUT

```cpp
#define MSR_TIMEOUT -2
```


Timeout occurred (returned by [MSR_GetData()](msr_8h.md#function-msr-getdata)). 


### define MSR_ABORTED

```cpp
#define MSR_ABORTED -3
```


Aborted by user (returned by [MSR_GetData()](msr_8h.md#function-msr-getdata)). 


### define MSR_ACTIVE

```cpp
#define MSR_ACTIVE -4
```


Already activated (returned by [MSR_Activate()](msr_8h.md#function-msr-activate)). 


### define MSR_PARAM

```cpp
#define MSR_PARAM -5
```


Parameter error (returned by [MSR_GetData()](msr_8h.md#function-msr-getdata), [MSR_SetOptions()](msr_8h.md#function-msr-setoptions) and [MSR_SwitchLeds()](msr_8h.md#function-msr-switchleds)). 


### define MSR_PROCESS

```cpp
#define MSR_PROCESS -6
```


Process error (returned by [MSR_GetData()](msr_8h.md#function-msr-getdata) and [MSR_DataAvailable()](msr_8h.md#function-msr-dataavailable)). 


### define MSR_NO_DEVICE

```cpp
#define MSR_NO_DEVICE -7
```


No MSR hardware available (returned by [MSR_Activate()](msr_8h.md#function-msr-activate)) 


### define MSR_STATUS_NOERR

```cpp
#define MSR_STATUS_NOERR 0
```


Valid data. 


### define MSR_STATUS_NODATA

```cpp
#define MSR_STATUS_NODATA 1
```


No data. 


### define MSR_STATUS_NOSTX

```cpp
#define MSR_STATUS_NOSTX 2
```


Missing start sentinel or insufficient data. 


### define MSR_STATUS_NOETX

```cpp
#define MSR_STATUS_NOETX 3
```


Missing end sentinel or excessive data. 


### define MSR_STATUS_BADLRC

```cpp
#define MSR_STATUS_BADLRC 4
```


Missing LRC or LRC error. 


### define MSR_STATUS_PARITY

```cpp
#define MSR_STATUS_PARITY 5
```


Parity error. 


### define MSR_STATUS_REVETX

```cpp
#define MSR_STATUS_REVETX 6
```


Reversed end sentinel found. 


### define MSR_STATUS_BADJIS

```cpp
#define MSR_STATUS_BADJIS 7
```


Insufficient printable characters. 


### define MSR_STATUS_BADTRK

```cpp
#define MSR_STATUS_BADTRK 8
```


Insufficient characters. 


### define MSR_TYPE_PHYSICAL

```cpp
#define MSR_TYPE_PHYSICAL 0
```


Normal magstripe swipe. 


### define MSR_TYPE_SAMSUNG

```cpp
#define MSR_TYPE_SAMSUNG 1
```


LoopPay or Samsung Phone swipe. 


### define MSR_CARD_UNKNOWN

```cpp
#define MSR_CARD_UNKNOWN 0x00
```


Unknown track data. 


### define MSR_CARD_ISO

```cpp
#define MSR_CARD_ISO 0x01
```


ISO track data. 


### define MSR_CARD_JIS_II

```cpp
#define MSR_CARD_JIS_II 0x02
```


JIS-II track data. 


### define MSR_CARD_AAMVA

```cpp
#define MSR_CARD_AAMVA 0x04
```


AAMVA driver license magnetic card encoding (returned since VOS 3), see also option MSR_ENABLE_LICENSE_DECODE 


### define MSR_CARD_CADLID

```cpp
#define MSR_CARD_CADLID 0x08
```


CADLID driver license magnetic card encoding (returned since VOS 3) see also option MSR_ENABLE_LICENSE_DECODE 


### define MSR_UX_ENHANCEMENTS

```cpp
#define MSR_UX_ENHANCEMENTS 0x01
```

options[0] Hybrid reader: ignore card insertion 

Relevant for UX, V/OS only: use improved noise filter and ignore card insertion, only read on card removal. 


### define MSR_SAMSUNG_TRACK1

```cpp
#define MSR_SAMSUNG_TRACK1 0x02
```

options[0] not used anymore 

**Deprecated**: 

Samsung LoopPay Detection is activated by default. 

### define MSR_ONE_SWIPE

```cpp
#define MSR_ONE_SWIPE 0x04
```

options[0] Only read on first swipe 

In opposite to default behavior only read first swiped card after each call of [MSR_Activate()](msr_8h.md#function-msr-activate). Subsequently swiped cards will not be read and will not overwrite the stored data. The stored data is deleted as usually upon call of [MSR_GetData()](msr_8h.md#function-msr-getdata) or [MSR_Deactivate()](msr_8h.md#function-msr-deactivate). To read the next card application has to call [MSR_Deactivate()](msr_8h.md#function-msr-deactivate) and [MSR_Activate()](msr_8h.md#function-msr-activate). 


### define MSR_LEDS

```cpp
#define MSR_LEDS 0x08
```

options[0] Light MSR LEDs while card swipe is possible. 

### define MSR_ENABLE_LICENSE_DECODE

```cpp
#define MSR_ENABLE_LICENSE_DECODE 0x10
```

options[0] Enable detection of US driving license 

Enable the decoding of California Drivers License and American Association of Motor Vehicle Administrators (AAMVA) Drivers License. By default, this option is disabled. 


### define MSR_DETECT_ISO

```cpp
#define MSR_DETECT_ISO 0x01
```

options[1] Detect ISO cards 

this is the default and presumed if options[1] == 0. 


### define MSR_DETECT_JIS_II

```cpp
#define MSR_DETECT_JIS_II 0x02
```

options[1] Detect JIS-II cards 

Currently only supported on V/OS2. 


### define MSR_DETECT_ALL

```cpp
#define MSR_DETECT_ALL 0x03
```

options[1] Detect both ISO and JIS-II cards. 

JIS-II cards currently only supported on V/OS2. 


### define MSR_LED_OFF

```cpp
#define MSR_LED_OFF 0x0000
```


LED is switched off. 


### define MSR_LED_WHITE

```cpp
#define MSR_LED_WHITE 0x0001
```


LED shines white. 


### define MSR_LED_RED

```cpp
#define MSR_LED_RED 0x0002
```


LED shines red. 


### define MSR_LED_GREEN

```cpp
#define MSR_LED_GREEN 0x0003
```


LED shines green. 


### define MSR_LED_BLUE

```cpp
#define MSR_LED_BLUE 0x0004
```


LED shines blue. 


### define MSR_LED_YELLOW

```cpp
#define MSR_LED_YELLOW 0x0005
```


LED shines yellow. 


### define MSR_LED_BLINK

```cpp
#define MSR_LED_BLINK 0x0100
```


LED blinks (500ms on, 500ms off), must be combined with one of the "color defines". 


## Source code

```cpp

#ifndef __MSR_LIB_INTERFACE_COMMON__
#define __MSR_LIB_INTERFACE_COMMON__


#define MSR_OK         0  
#define MSR_ERROR     -1  
#define MSR_TIMEOUT   -2  
#define MSR_ABORTED   -3  
#define MSR_ACTIVE    -4  
#define MSR_PARAM     -5  
#define MSR_PROCESS   -6  
#define MSR_NO_DEVICE -7  
#define MSR_STATUS_NOERR  0  
#define MSR_STATUS_NODATA 1  
#define MSR_STATUS_NOSTX  2  
#define MSR_STATUS_NOETX  3  
#define MSR_STATUS_BADLRC 4  
#define MSR_STATUS_PARITY 5  
#define MSR_STATUS_REVETX 6  
#define MSR_STATUS_BADJIS 7  
#define MSR_STATUS_BADTRK 8  
#define MSR_TYPE_PHYSICAL  0  
#define MSR_TYPE_SAMSUNG   1  
#define MSR_CARD_UNKNOWN  0x00  
#define MSR_CARD_ISO      0x01  
#define MSR_CARD_JIS_II   0x02  
#define MSR_CARD_AAMVA    0x04  
#define MSR_CARD_CADLID   0x08  
#define MSR_UX_ENHANCEMENTS       0x01 

#define MSR_SAMSUNG_TRACK1        0x02 

#define MSR_ONE_SWIPE             0x04 

#define MSR_LEDS                  0x08 

#define MSR_ENABLE_LICENSE_DECODE 0x10 

#define MSR_DETECT_ISO            0x01 

#define MSR_DETECT_JIS_II         0x02 

#define MSR_DETECT_ALL            0x03 

#define MSR_LED_OFF     0x0000 
#define MSR_LED_WHITE   0x0001 
#define MSR_LED_RED     0x0002 
#define MSR_LED_GREEN   0x0003 
#define MSR_LED_BLUE    0x0004 
#define MSR_LED_YELLOW  0x0005 
#define MSR_LED_BLINK   0x0100 
typedef struct
{
  unsigned char status;     
           char data[80];   
} MSR_Track_1;

typedef struct
{
  unsigned char status;     
           char data[41];   
} MSR_Track_2;

typedef struct
{
  unsigned char status;     
           char data[108];  
} MSR_Track_3;

typedef struct
{
  MSR_Track_1 t1;  
  MSR_Track_2 t2;  
  MSR_Track_3 t3;  
} MSR_TrackData;

typedef struct
{
  unsigned char card_type; 
  MSR_Track_1   t1;        
  MSR_Track_2   t2;        
  MSR_Track_3   t3;        
} MSR_TrackData2;

typedef struct
{
  unsigned char add_info[8]; 
  MSR_Track_1   t1;          
  MSR_Track_2   t2;          
  MSR_Track_3   t3;          
} MSR_TrackData3;

typedef struct
{
  unsigned char add_info[8];   
  MSR_Track_1   t1;            
  MSR_Track_2   t2;            
  MSR_Track_3   t3;            
  unsigned char add_info2[8];  
  MSR_Track_1   t21;           
  MSR_Track_2   t22;           
  MSR_Track_3   t23;           
} MSR_TrackData4;

typedef struct
{
  unsigned char valid;            
           char pan[20];          
           char name[27];         
           char exp_date[5];      
           char service_code[4];  
           char disc_data[72];    
} MSR_Decoded_Track_1;

typedef struct
{
  unsigned char valid;            
           char pan[20];          
           char exp_date[5];      
           char service_code[4];  
           char disc_data[35];    
} MSR_Decoded_Track_2;

typedef struct
{
  MSR_Decoded_Track_1 t1;  
  MSR_Decoded_Track_2 t2;  
} MSR_DecodedData;

typedef struct
{
  MSR_Decoded_Track_1 t1;   
  MSR_Decoded_Track_2 t2;   
  MSR_Decoded_Track_1 t21;  
  MSR_Decoded_Track_2 t22;  
} MSR_DecodedData4;


typedef void (* MSR_TraceCallback) (const char *str, void *data);

void MSR_Version(char *version, unsigned char len);

void MSR_SetTraceCallback(MSR_TraceCallback cbf, void *cb_data);


#endif  // avoid double include
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
