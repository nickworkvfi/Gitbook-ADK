---
title: sdi/src/util.h

---

# sdi/src/util.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[CurrMapTable](struct_curr_map_table.md)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[verifyDate](sdi_2src_2util_8h.md#function-verifydate)**(const char * date, const char * format) |
| const char * | **[getCurrencyName](sdi_2src_2util_8h.md#function-getcurrencyname)**(unsigned short currency) |
| short | **[getCurrencyExponent](sdi_2src_2util_8h.md#function-getcurrencyexponent)**(unsigned short currency) |
| int | **[bcdValid](sdi_2src_2util_8h.md#function-bcdvalid)**(const unsigned char * a, unsigned size) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| const struct [CurrMapTable](struct_curr_map_table.md)[] | **[currSymbolTable](sdi_2src_2util_8h.md#variable-currsymboltable)**  |
| const struct [CurrMapTable](struct_curr_map_table.md)[] | **[currAbbreviationTable](sdi_2src_2util_8h.md#variable-currabbreviationtable)**  |


## Functions Documentation

### function verifyDate

```cpp
int verifyDate(
    const char * date,
    const char * format
)
```


**Parameters**: 

  * **date** Pointer to date buffer 
  * **format** Pointer to format buffer 


**Return**: 1 if date is valid, else 0 

**Note**: Two-digit year values are interpreted as 2000...2099 Four-digit year values must be at least 1776 (the date of the global introduction of the Gregorian calendar) 

Verify date 


### function getCurrencyName

```cpp
const char * getCurrencyName(
    unsigned short currency
)
```


**Parameters**: 

  * **currency** currency code 


**Return**: currency name as C-string or an empty string, if code is unknown 

returns the currency name for the corresponding currency code. If the currency code is unknown or not supported, an empty string is returned. 


### function getCurrencyExponent

```cpp
short getCurrencyExponent(
    unsigned short currency
)
```


**Parameters**: 

  * **currency** currency code 


**Return**: currency exponent or -1, if code is unknown 

returns the currency exponent for the corresponding currency code. If the currency code is unknown or not supported, -1 returned. 


### function bcdValid

```cpp
int bcdValid(
    const unsigned char * a,
    unsigned size
)
```


**Parameters**: 

  * **a** pointer to data 
  * **size** size of the buffer data points to 


**Return**: 1 if it is a valid BCD number, 0 else 

check if data is a valid BCD number 



## Attributes Documentation

### variable currSymbolTable

```cpp
const struct CurrMapTable[] currSymbolTable =
{
  
  {0x0376, "\xE2\x82\xAA", 2}, 
  {0x0388, "JM$",          2}, 
  {0x0826, "\xC2\xA3",     2}, 
  {0x0840, "\x24",         2}, 
  {0x0978, "\xE2\x82\xAC", 2}  
};
```


### variable currAbbreviationTable

```cpp
const struct CurrMapTable[] currAbbreviationTable;
```



## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#ifndef _UTIL_H_
#define _UTIL_H_

#include <stdint.h>

#ifdef __cplusplus
extern "C"
{
#endif

struct CurrMapTable
{
  unsigned short code;
  const char *name;
  short exponent;
};

const struct CurrMapTable currSymbolTable[] =
{
  // Numerical currency code (ISO 4217), currency symbol (UTF-8), currency exponent
  {0x0376, "\xE2\x82\xAA", 2}, // ILS, Israeli new shekel
  {0x0388, "JM$",          2}, // JMD, Jamaican dollar
  {0x0826, "\xC2\xA3",     2}, // GBP, Pound sterling
  {0x0840, "\x24",         2}, // USD, United States dollar
  {0x0978, "\xE2\x82\xAC", 2}  // EUR, Euro
};

const struct CurrMapTable currAbbreviationTable[] =
{
  // Numerical currency code (ISO 4217), currency abbreviation (ISO 4217), currency exponent
  {0x0008, "ALL", 2}, // Albanian lek
  {0x0012, "DZD", 2}, // Algerian dinar
  {0x0032, "ARS", 2}, // Argentine peso
  {0x0036, "AUD", 2}, // Australian dollar
  {0x0044, "BSD", 2}, // Bahamian dollar
  {0x0048, "BHD", 3}, // Bahraini dinar
  {0x0050, "BDT", 2}, // Bangladeshi taka
  {0x0051, "AMD", 2}, // Armenian dram
  {0x0052, "BBD", 2}, // Barbados dollar
  {0x0060, "BMD", 2}, // Bermudian dollar
  {0x0064, "BTN", 2}, // Bhutanese ngultrum
  {0x0068, "BOB", 2}, // Boliviano
  {0x0072, "BWP", 2}, // Botswana pula
  {0x0084, "BZD", 2}, // Belize dollar
  {0x0090, "SBD", 2}, // Solomon Islands dollar
  {0x0096, "BND", 2}, // Brunei dollar
  {0x0104, "MMK", 2}, // Myanmar kyat
  {0x0108, "BIF", 0}, // Burundian franc
  {0x0116, "KHR", 2}, // Cambodian riel
  {0x0124, "CAD", 2}, // Canadian dollar
  {0x0132, "CVE", 2}, // Cape Verdean escudo
  {0x0136, "KYD", 2}, // Cayman Islands dollar
  {0x0144, "LKR", 2}, // Sri Lankan rupee
  {0x0152, "CLP", 0}, // Chilean peso
  {0x0156, "CNY", 2}, // Renminbi
  {0x0170, "COP", 2}, // Colombian peso
  {0x0174, "KMF", 0}, // Comoro franc
  {0x0188, "CRC", 2}, // Costa Rican colon
  {0x0192, "CUP", 2}, // Cuban peso
  {0x0203, "CZK", 2}, // Czech koruna
  {0x0208, "DKK", 2}, // Danish krone
  {0x0214, "DOP", 2}, // Dominican peso
  {0x0222, "SVC", 2}, // Salvadoran colón
  {0x0230, "ETB", 2}, // Ethiopian birr
  {0x0232, "ERN", 2}, // Eritrean nakfa
  {0x0238, "FKP", 2}, // Falkland Islands pound
  {0x0242, "FJD", 2}, // Fiji dollar
  {0x0262, "DJF", 0}, // Djiboutian franc
  {0x0270, "GMD", 2}, // Gambian dalasi
  {0x0292, "GIP", 2}, // Gibraltar pound
  {0x0320, "GTQ", 2}, // Guatemalan quetzal
  {0x0324, "GNF", 0}, // Guinean franc
  {0x0328, "GYD", 2}, // Guyanese dollar
  {0x0332, "HTG", 2}, // Haitian gourde
  {0x0340, "HNL", 2}, // Honduran lempira
  {0x0344, "HKD", 2}, // Hong Kong dollar
  {0x0348, "HUF", 2}, // Hungarian forint
  {0x0352, "ISK", 0}, // Icelandic króna (plural: krónur)
  {0x0356, "INR", 2}, // Indian rupee
  {0x0360, "IDR", 2}, // Indonesian rupiah
  {0x0364, "IRR", 2}, // Iranian rial
  {0x0368, "IQD", 3}, // Iraqi dinar
  {0x0376, "ILS", 2}, // Israeli new shekel
  {0x0388, "JMD", 2}, // Jamaican dollar
  {0x0392, "JPY", 0}, // Japanese yen
  {0x0398, "KZT", 2}, // Kazakhstani tenge
  {0x0400, "JOD", 3}, // Jordanian dinar
  {0x0404, "KES", 2}, // Kenyan shilling
  {0x0408, "KPW", 2}, // North Korean won
  {0x0410, "KRW", 0}, // South Korean won
  {0x0414, "KWD", 3}, // Kuwaiti dinar
  {0x0417, "KGS", 2}, // Kyrgyzstani som
  {0x0418, "LAK", 2}, // Lao kip
  {0x0422, "LBP", 2}, // Lebanese pound
  {0x0426, "LSL", 2}, // Lesotho loti
  {0x0430, "LRD", 2}, // Liberian dollar
  {0x0434, "LYD", 3}, // Libyan dinar
  {0x0446, "MOP", 2}, // Macanese pataca
  {0x0454, "MWK", 2}, // Malawian kwacha
  {0x0458, "MYR", 2}, // Malaysian ringgit
  {0x0462, "MVR", 2}, // Maldivian rufiyaa
  {0x0480, "MUR", 2}, // Mauritian rupee
  {0x0484, "MXN", 2}, // Mexican peso
  {0x0496, "MNT", 2}, // Mongolian tögrög
  {0x0498, "MDL", 2}, // Moldovan leu
  {0x0504, "MAD", 2}, // Moroccan dirham
  {0x0512, "OMR", 3}, // Omani rial
  {0x0516, "NAD", 2}, // Namibian dollar
  {0x0524, "NPR", 2}, // Nepalese rupee
  {0x0532, "ANG", 2}, // Netherlands Antillean guilder
  {0x0533, "AWG", 2}, // Aruban florin
  {0x0548, "VUV", 0}, // Vanuatu vatu
  {0x0554, "NZD", 2}, // New Zealand dollar
  {0x0558, "NIO", 2}, // Nicaraguan córdoba
  {0x0566, "NGN", 2}, // Nigerian naira
  {0x0578, "NOK", 2}, // Norwegian krone
  {0x0586, "PKR", 2}, // Pakistani rupee
  {0x0590, "PAB", 2}, // Panamanian balboa
  {0x0598, "PGK", 2}, // Papua New Guinean kina
  {0x0600, "PYG", 0}, // Paraguayan guaraní
  {0x0604, "PEN", 2}, // Peruvian sol
  {0x0608, "PHP", 2}, // Philippine peso
  {0x0634, "QAR", 2}, // Qatari riyal
  {0x0643, "RUB", 2}, // Russian ruble
  {0x0646, "RWF", 0}, // Rwandan franc
  {0x0654, "SHP", 2}, // Saint Helena pound
  {0x0682, "SAR", 2}, // Saudi riyal
  {0x0690, "SCR", 2}, // Seychelles rupee
  {0x0694, "SLL", 2}, // Sierra Leonean leone (old leone)
  {0x0702, "SGD", 2}, // Singapore dollar
  {0x0704, "VND", 0}, // Vietnamese đồng
  {0x0706, "SOS", 2}, // Somali shilling
  {0x0710, "ZAR", 2}, // South African rand
  {0x0728, "SSP", 2}, // South Sudanese pound
  {0x0748, "SZL", 2}, // Swazi lilangeni
  {0x0752, "SEK", 2}, // Swedish krona (plural: kronor)
  {0x0756, "CHF", 2}, // Swiss franc
  {0x0760, "SYP", 2}, // Syrian pound
  {0x0764, "THB", 2}, // Thai baht
  {0x0776, "TOP", 2}, // Tongan paʻanga
  {0x0780, "TTD", 2}, // Trinidad and Tobago dollar
  {0x0784, "AED", 2}, // United Arab Emirates dirham
  {0x0788, "TND", 3}, // Tunisian dinar
  {0x0800, "UGX", 0}, // Ugandan shilling
  {0x0807, "MKD", 2}, // Macedonian denar
  {0x0818, "EGP", 2}, // Egyptian pound
  {0x0826, "GBP", 2}, // Pound sterling
  {0x0834, "TZS", 2}, // Tanzanian shilling
  {0x0840, "USD", 2}, // United States dollar
  {0x0858, "UYU", 2}, // Uruguayan peso
  {0x0860, "UZS", 2}, // Uzbekistan sum
  {0x0882, "WST", 2}, // Samoan tala
  {0x0886, "YER", 2}, // Yemeni rial
  {0x0901, "TWD", 2}, // New Taiwan dollar
  {0x0925, "SLE", 2}, // Sierra Leonean leone (new leone)
  {0x0926, "VED", 2}, // Venezuelan digital bolívar
  {0x0927, "UYW", 4}, // Unidad previsional
  {0x0928, "VES", 2}, // Venezuelan sovereign bolívar
  {0x0929, "MRU", 2}, // Mauritanian ouguiya
  {0x0930, "STN", 2}, // São Tomé and Príncipe dobra
  {0x0932, "ZWL", 2}, // Zimbabwean dollar (fifth)
  {0x0933, "BYN", 2}, // Belarusian ruble
  {0x0934, "TMT", 2}, // Turkmenistan manat
  {0x0936, "GHS", 2}, // Ghanaian cedi
  {0x0938, "SDG", 2}, // Sudanese pound
  {0x0940, "UYI", 0}, // Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)
  {0x0941, "RSD", 2}, // Serbian dinar
  {0x0943, "MZN", 2}, // Mozambican metical
  {0x0944, "AZN", 2}, // Azerbaijani manat
  {0x0946, "RON", 2}, // Romanian leu
  {0x0947, "CHE", 2}, // WIR euro (complementary currency)
  {0x0948, "CHW", 2}, // WIR franc (complementary currency)
  {0x0949, "TRY", 2}, // Turkish lira
  {0x0950, "XAF", 0}, // CFA franc BEAC
  {0x0951, "XCD", 2}, // East Caribbean dollar
  {0x0952, "XOF", 0}, // CFA franc BCEAO
  {0x0953, "XPF", 0}, // CFP franc (franc Pacifique)
  {0x0967, "ZMW", 2}, // Zambian kwacha
  {0x0968, "SRD", 2}, // Surinamese dollar
  {0x0969, "MGA", 2}, // Malagasy ariary
  {0x0970, "COU", 2}, // Unidad de Valor Real (UVR) (funds code)
  {0x0971, "AFN", 2}, // Afghan afghani
  {0x0972, "TJS", 2}, // Tajikistani somoni
  {0x0973, "AOA", 2}, // Angolan kwanza
  {0x0975, "BGN", 2}, // Bulgarian lev
  {0x0976, "CDF", 2}, // Congolese franc
  {0x0977, "BAM", 2}, // Bosnia and Herzegovina convertible mark
  {0x0978, "EUR", 2}, // Euro
  {0x0979, "MXV", 2}, // Mexican Unidad de Inversion (UDI) (funds code)
  {0x0980, "UAH", 2}, // Ukrainian hryvnia
  {0x0981, "GEL", 2}, // Georgian lari
  {0x0984, "BOV", 2}, // Bolivian Mvdol (funds code)
  {0x0985, "PLN", 2}, // Polish złoty
  {0x0986, "BRL", 2}, // Brazilian real
  {0x0990, "CLF", 4}, // Unidad de Fomento (funds code)
  {0x0997, "USN", 2}  // United States dollar (next day) (funds code)
};

int verifyDate(const char *date, const char *format);

const char *getCurrencyName(unsigned short currency);

short getCurrencyExponent(unsigned short currency);

int bcdValid(const unsigned char *a, unsigned size);

#ifdef __cplusplus
} // extern "C"

#include <string>

std::string bcdToAmountStr(const unsigned char *bcd, unsigned size, unsigned pos = 2, const std::string dsep = ",", const std::string tsep = ".");

bool matchRegex(const char *str, const char *regex);

std::string escapeRegex(const std::string &str);

inline uint16_t decodeUS(const void *buf)
{
  const unsigned char *b = (const unsigned char *)buf;
  return ((uint16_t)b[0] << 8)
         + (uint16_t)b[1];
}

inline uint32_t decodeUL(const void *buf)
{
  const unsigned char *b = (const unsigned char *)buf;
  return ((uint32_t)b[0] << 24)
         + ((uint32_t)b[1] << 16)
         + ((uint32_t)b[2] << 8)
         + (uint32_t)b[3];
}

inline void encodeUS(void *buf, uint16_t value)
{
  unsigned char *b = (unsigned char *)buf;
  b[0] = (unsigned char)(value >> 8);
  b[1] = (unsigned char) value;
}

inline void encodeUL(void *buf, uint32_t value)
{
  unsigned char *b = (unsigned char *)buf;
  b[0] = (unsigned char)(value >> 24);
  b[1] = (unsigned char)(value >> 16);
  b[2] = (unsigned char)(value >>  8);
  b[3] = (unsigned char)  value;
}

#endif // __cplusplus

#endif // _UTIL_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
