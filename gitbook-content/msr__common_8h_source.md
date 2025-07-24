---
hidden: true
title: msr_common.h
---

<a href="msr__common_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 8 #ifndef __MSR_LIB_INTERFACE_COMMON__
 9 #define __MSR_LIB_INTERFACE_COMMON__
 10 
 11 
 15 #define MSR_OK 0 
 16 #define MSR_ERROR -1 
 17 #define MSR_TIMEOUT -2 
 18 #define MSR_ABORTED -3 
 19 #define MSR_ACTIVE -4 
 20 #define MSR_PARAM -5 
 21 #define MSR_PROCESS -6 
 22 #define MSR_NO_DEVICE -7 
 28 #define MSR_STATUS_NOERR 0 
 29 #define MSR_STATUS_NODATA 1 
 30 #define MSR_STATUS_NOSTX 2 
 31 #define MSR_STATUS_NOETX 3 
 32 #define MSR_STATUS_BADLRC 4 
 33 #define MSR_STATUS_PARITY 5 
 34 #define MSR_STATUS_REVETX 6 
 35 #define MSR_STATUS_BADJIS 7 
 36 #define MSR_STATUS_BADTRK 8 
 42 #define MSR_TYPE_PHYSICAL 0 
 43 #define MSR_TYPE_SAMSUNG 1 
 49 #define MSR_CARD_UNKNOWN 0x00 
 50 #define MSR_CARD_ISO 0x01 
 51 #define MSR_CARD_JIS_II 0x02 
 52 #define MSR_CARD_AAMVA 0x04 
 54 #define MSR_CARD_CADLID 0x08 
 63 #define MSR_UX_ENHANCEMENTS 0x01 
 64 
 67 #define MSR_SAMSUNG_TRACK1 0x02 
 68 
 70 #define MSR_ONE_SWIPE 0x04 
 71 
 76 #define MSR_LEDS 0x08 
 77 
 78 #define MSR_ENABLE_LICENSE_DECODE 0x10 
 79 
 81 #define MSR_DETECT_ISO 0x01 
 82 
 84 #define MSR_DETECT_JIS_II 0x02 
 85 
 87 #define MSR_DETECT_ALL 0x03 
 88 
 97 #define MSR_LED_OFF 0x0000 
 98 #define MSR_LED_WHITE 0x0001 
 99 #define MSR_LED_RED 0x0002 
 100 #define MSR_LED_GREEN 0x0003 
 101 #define MSR_LED_BLUE 0x0004 
 102 #define MSR_LED_YELLOW 0x0005 
 103 #define MSR_LED_BLINK 0x0100 
 108 typedef struct
 109 {
 110  unsigned char status;
 111  char data[80];
 112 } MSR_Track_1;
 113 
 115 typedef struct
 116 {
 117  unsigned char status;
 118  char data[41];
 119 } MSR_Track_2;
 120 
 122 typedef struct
 123 {
 124  unsigned char status;
 125  char data[108];
 126 } MSR_Track_3;
 127 
 129 typedef struct
 130 {
 131  MSR_Track_1 t1;
 132  MSR_Track_2 t2;
 133  MSR_Track_3 t3;
 134 } MSR_TrackData;
 135 
 137 typedef struct
 138 {
 139  unsigned char card_type;
 140  MSR_Track_1 t1;
 141  MSR_Track_2 t2;
 142  MSR_Track_3 t3;
 143 } MSR_TrackData2;
 144 
 146 typedef struct
 147 {
 148  unsigned char add_info[8];
 149  MSR_Track_1 t1;
 150  MSR_Track_2 t2;
 151  MSR_Track_3 t3;
 152 } MSR_TrackData3;
 153 
 155 typedef struct
 156 {
 157  unsigned char add_info[8];
 158  MSR_Track_1 t1;
 159  MSR_Track_2 t2;
 160  MSR_Track_3 t3;
 161  unsigned char add_info2[8];
 162  MSR_Track_1 t21;
 163  MSR_Track_2 t22;
 164  MSR_Track_3 t23;
 165 } MSR_TrackData4;
 166 
 168 typedef struct
 169 {
 170  unsigned char valid;
 171  char pan[20];
 172  char name[27];
 173  char exp_date[5];
 174  char service_code[4];
 175  char disc_data[72];
 176 } MSR_Decoded_Track_1;
 177 
 179 typedef struct
 180 {
 181  unsigned char valid;
 182  char pan[20];
 183  char exp_date[5];
 184  char service_code[4];
 185  char disc_data[35];
 186 } MSR_Decoded_Track_2;
 187 
 189 typedef struct
 190 {
 191  MSR_Decoded_Track_1 t1;
 192  MSR_Decoded_Track_2 t2;
 193 } MSR_DecodedData;
 194 
 196 typedef struct
 197 {
 198  MSR_Decoded_Track_1 t1;
 199  MSR_Decoded_Track_2 t2;
 200  MSR_Decoded_Track_1 t21;
 201  MSR_Decoded_Track_2 t22;
 202 } MSR_DecodedData4;
 203 
 204 
 210 typedef void (* MSR_TraceCallback) (const char *str, void *data);
 211 
 217 void MSR_Version(char *version, unsigned char len);
 218 
 224 void MSR_SetTraceCallback(MSR_TraceCallback cbf, void *cb_data);
 225 
 226 
 227 #endif // avoid double include
```
