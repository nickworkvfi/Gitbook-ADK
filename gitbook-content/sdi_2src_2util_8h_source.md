---
hidden: true
title: util.h
---

<a href="sdi_2src_2util_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 /****************************************************************************
 2 * Product: InFusion
 3 * Company: Verifone
 4 * Author: GSS R&D Germany
 5 * Content: SDI-Server
 6 ****************************************************************************/
 7 
 8 #ifndef _UTIL_H_
 9 #define _UTIL_H_
 10 
 11 #include <stdint.h>
 12 
 13 #ifdef __cplusplus
 14 extern "C"
 15 {
 16 #endif
 17 
 18 struct CurrMapTable
 19 {
 20  unsigned short code;
 21  const char *name;
 22  short exponent;
 23 };
 24 
 25 const struct CurrMapTable currSymbolTable[] =
 26 {
 27  // Numerical currency code (ISO 4217), currency symbol (UTF-8), currency exponent
 28  {0x0376, "\xE2\x82\xAA", 2}, // ILS, Israeli new shekel
 29  {0x0388, "JM$", 2}, // JMD, Jamaican dollar
 30  {0x0826, "\xC2\xA3", 2}, // GBP, Pound sterling
 31  {0x0840, "\x24", 2}, // USD, United States dollar
 32  {0x0978, "\xE2\x82\xAC", 2} // EUR, Euro
 33 };
 34 
 35 const struct CurrMapTable currAbbreviationTable[] =
 36 {
 37  // Numerical currency code (ISO 4217), currency abbreviation (ISO 4217), currency exponent
 38  {0x0008, "ALL", 2}, // Albanian lek
 39  {0x0012, "DZD", 2}, // Algerian dinar
 40  {0x0032, "ARS", 2}, // Argentine peso
 41  {0x0036, "AUD", 2}, // Australian dollar
 42  {0x0044, "BSD", 2}, // Bahamian dollar
 43  {0x0048, "BHD", 3}, // Bahraini dinar
 44  {0x0050, "BDT", 2}, // Bangladeshi taka
 45  {0x0051, "AMD", 2}, // Armenian dram
 46  {0x0052, "BBD", 2}, // Barbados dollar
 47  {0x0060, "BMD", 2}, // Bermudian dollar
 48  {0x0064, "BTN", 2}, // Bhutanese ngultrum
 49  {0x0068, "BOB", 2}, // Boliviano
 50  {0x0072, "BWP", 2}, // Botswana pula
 51  {0x0084, "BZD", 2}, // Belize dollar
 52  {0x0090, "SBD", 2}, // Solomon Islands dollar
 53  {0x0096, "BND", 2}, // Brunei dollar
 54  {0x0104, "MMK", 2}, // Myanmar kyat
 55  {0x0108, "BIF", 0}, // Burundian franc
 56  {0x0116, "KHR", 2}, // Cambodian riel
 57  {0x0124, "CAD", 2}, // Canadian dollar
 58  {0x0132, "CVE", 2}, // Cape Verdean escudo
 59  {0x0136, "KYD", 2}, // Cayman Islands dollar
 60  {0x0144, "LKR", 2}, // Sri Lankan rupee
 61  {0x0152, "CLP", 0}, // Chilean peso
 62  {0x0156, "CNY", 2}, // Renminbi
 63  {0x0170, "COP", 2}, // Colombian peso
 64  {0x0174, "KMF", 0}, // Comoro franc
 65  {0x0188, "CRC", 2}, // Costa Rican colon
 66  {0x0192, "CUP", 2}, // Cuban peso
 67  {0x0203, "CZK", 2}, // Czech koruna
 68  {0x0208, "DKK", 2}, // Danish krone
 69  {0x0214, "DOP", 2}, // Dominican peso
 70  {0x0222, "SVC", 2}, // Salvadoran colón
 71  {0x0230, "ETB", 2}, // Ethiopian birr
 72  {0x0232, "ERN", 2}, // Eritrean nakfa
 73  {0x0238, "FKP", 2}, // Falkland Islands pound
 74  {0x0242, "FJD", 2}, // Fiji dollar
 75  {0x0262, "DJF", 0}, // Djiboutian franc
 76  {0x0270, "GMD", 2}, // Gambian dalasi
 77  {0x0292, "GIP", 2}, // Gibraltar pound
 78  {0x0320, "GTQ", 2}, // Guatemalan quetzal
 79  {0x0324, "GNF", 0}, // Guinean franc
 80  {0x0328, "GYD", 2}, // Guyanese dollar
 81  {0x0332, "HTG", 2}, // Haitian gourde
 82  {0x0340, "HNL", 2}, // Honduran lempira
 83  {0x0344, "HKD", 2}, // Hong Kong dollar
 84  {0x0348, "HUF", 2}, // Hungarian forint
 85  {0x0352, "ISK", 0}, // Icelandic króna (plural: krónur)
 86  {0x0356, "INR", 2}, // Indian rupee
 87  {0x0360, "IDR", 2}, // Indonesian rupiah
 88  {0x0364, "IRR", 2}, // Iranian rial
 89  {0x0368, "IQD", 3}, // Iraqi dinar
 90  {0x0376, "ILS", 2}, // Israeli new shekel
 91  {0x0388, "JMD", 2}, // Jamaican dollar
 92  {0x0392, "JPY", 0}, // Japanese yen
 93  {0x0398, "KZT", 2}, // Kazakhstani tenge
 94  {0x0400, "JOD", 3}, // Jordanian dinar
 95  {0x0404, "KES", 2}, // Kenyan shilling
 96  {0x0408, "KPW", 2}, // North Korean won
 97  {0x0410, "KRW", 0}, // South Korean won
 98  {0x0414, "KWD", 3}, // Kuwaiti dinar
 99  {0x0417, "KGS", 2}, // Kyrgyzstani som
 100  {0x0418, "LAK", 2}, // Lao kip
 101  {0x0422, "LBP", 2}, // Lebanese pound
 102  {0x0426, "LSL", 2}, // Lesotho loti
 103  {0x0430, "LRD", 2}, // Liberian dollar
 104  {0x0434, "LYD", 3}, // Libyan dinar
 105  {0x0446, "MOP", 2}, // Macanese pataca
 106  {0x0454, "MWK", 2}, // Malawian kwacha
 107  {0x0458, "MYR", 2}, // Malaysian ringgit
 108  {0x0462, "MVR", 2}, // Maldivian rufiyaa
 109  {0x0480, "MUR", 2}, // Mauritian rupee
 110  {0x0484, "MXN", 2}, // Mexican peso
 111  {0x0496, "MNT", 2}, // Mongolian tögrög
 112  {0x0498, "MDL", 2}, // Moldovan leu
 113  {0x0504, "MAD", 2}, // Moroccan dirham
 114  {0x0512, "OMR", 3}, // Omani rial
 115  {0x0516, "NAD", 2}, // Namibian dollar
 116  {0x0524, "NPR", 2}, // Nepalese rupee
 117  {0x0532, "ANG", 2}, // Netherlands Antillean guilder
 118  {0x0533, "AWG", 2}, // Aruban florin
 119  {0x0548, "VUV", 0}, // Vanuatu vatu
 120  {0x0554, "NZD", 2}, // New Zealand dollar
 121  {0x0558, "NIO", 2}, // Nicaraguan córdoba
 122  {0x0566, "NGN", 2}, // Nigerian naira
 123  {0x0578, "NOK", 2}, // Norwegian krone
 124  {0x0586, "PKR", 2}, // Pakistani rupee
 125  {0x0590, "PAB", 2}, // Panamanian balboa
 126  {0x0598, "PGK", 2}, // Papua New Guinean kina
 127  {0x0600, "PYG", 0}, // Paraguayan guaraní
 128  {0x0604, "PEN", 2}, // Peruvian sol
 129  {0x0608, "PHP", 2}, // Philippine peso
 130  {0x0634, "QAR", 2}, // Qatari riyal
 131  {0x0643, "RUB", 2}, // Russian ruble
 132  {0x0646, "RWF", 0}, // Rwandan franc
 133  {0x0654, "SHP", 2}, // Saint Helena pound
 134  {0x0682, "SAR", 2}, // Saudi riyal
 135  {0x0690, "SCR", 2}, // Seychelles rupee
 136  {0x0694, "SLL", 2}, // Sierra Leonean leone (old leone)
 137  {0x0702, "SGD", 2}, // Singapore dollar
 138  {0x0704, "VND", 0}, // Vietnamese đồng
 139  {0x0706, "SOS", 2}, // Somali shilling
 140  {0x0710, "ZAR", 2}, // South African rand
 141  {0x0728, "SSP", 2}, // South Sudanese pound
 142  {0x0748, "SZL", 2}, // Swazi lilangeni
 143  {0x0752, "SEK", 2}, // Swedish krona (plural: kronor)
 144  {0x0756, "CHF", 2}, // Swiss franc
 145  {0x0760, "SYP", 2}, // Syrian pound
 146  {0x0764, "THB", 2}, // Thai baht
 147  {0x0776, "TOP", 2}, // Tongan paʻanga
 148  {0x0780, "TTD", 2}, // Trinidad and Tobago dollar
 149  {0x0784, "AED", 2}, // United Arab Emirates dirham
 150  {0x0788, "TND", 3}, // Tunisian dinar
 151  {0x0800, "UGX", 0}, // Ugandan shilling
 152  {0x0807, "MKD", 2}, // Macedonian denar
 153  {0x0818, "EGP", 2}, // Egyptian pound
 154  {0x0826, "GBP", 2}, // Pound sterling
 155  {0x0834, "TZS", 2}, // Tanzanian shilling
 156  {0x0840, "USD", 2}, // United States dollar
 157  {0x0858, "UYU", 2}, // Uruguayan peso
 158  {0x0860, "UZS", 2}, // Uzbekistan sum
 159  {0x0882, "WST", 2}, // Samoan tala
 160  {0x0886, "YER", 2}, // Yemeni rial
 161  {0x0901, "TWD", 2}, // New Taiwan dollar
 162  {0x0925, "SLE", 2}, // Sierra Leonean leone (new leone)
 163  {0x0926, "VED", 2}, // Venezuelan digital bolívar
 164  {0x0927, "UYW", 4}, // Unidad previsional
 165  {0x0928, "VES", 2}, // Venezuelan sovereign bolívar
 166  {0x0929, "MRU", 2}, // Mauritanian ouguiya
 167  {0x0930, "STN", 2}, // São Tomé and Príncipe dobra
 168  {0x0932, "ZWL", 2}, // Zimbabwean dollar (fifth)
 169  {0x0933, "BYN", 2}, // Belarusian ruble
 170  {0x0934, "TMT", 2}, // Turkmenistan manat
 171  {0x0936, "GHS", 2}, // Ghanaian cedi
 172  {0x0938, "SDG", 2}, // Sudanese pound
 173  {0x0940, "UYI", 0}, // Uruguay Peso en Unidades Indexadas (URUIURUI) (funds code)
 174  {0x0941, "RSD", 2}, // Serbian dinar
 175  {0x0943, "MZN", 2}, // Mozambican metical
 176  {0x0944, "AZN", 2}, // Azerbaijani manat
 177  {0x0946, "RON", 2}, // Romanian leu
 178  {0x0947, "CHE", 2}, // WIR euro (complementary currency)
 179  {0x0948, "CHW", 2}, // WIR franc (complementary currency)
 180  {0x0949, "TRY", 2}, // Turkish lira
 181  {0x0950, "XAF", 0}, // CFA franc BEAC
 182  {0x0951, "XCD", 2}, // East Caribbean dollar
 183  {0x0952, "XOF", 0}, // CFA franc BCEAO
 184  {0x0953, "XPF", 0}, // CFP franc (franc Pacifique)
 185  {0x0967, "ZMW", 2}, // Zambian kwacha
 186  {0x0968, "SRD", 2}, // Surinamese dollar
 187  {0x0969, "MGA", 2}, // Malagasy ariary
 188  {0x0970, "COU", 2}, // Unidad de Valor Real (UVR) (funds code)
 189  {0x0971, "AFN", 2}, // Afghan afghani
 190  {0x0972, "TJS", 2}, // Tajikistani somoni
 191  {0x0973, "AOA", 2}, // Angolan kwanza
 192  {0x0975, "BGN", 2}, // Bulgarian lev
 193  {0x0976, "CDF", 2}, // Congolese franc
 194  {0x0977, "BAM", 2}, // Bosnia and Herzegovina convertible mark
 195  {0x0978, "EUR", 2}, // Euro
 196  {0x0979, "MXV", 2}, // Mexican Unidad de Inversion (UDI) (funds code)
 197  {0x0980, "UAH", 2}, // Ukrainian hryvnia
 198  {0x0981, "GEL", 2}, // Georgian lari
 199  {0x0984, "BOV", 2}, // Bolivian Mvdol (funds code)
 200  {0x0985, "PLN", 2}, // Polish złoty
 201  {0x0986, "BRL", 2}, // Brazilian real
 202  {0x0990, "CLF", 4}, // Unidad de Fomento (funds code)
 203  {0x0997, "USN", 2} // United States dollar (next day) (funds code)
 204 };
 205 
 214 int verifyDate(const char *date, const char *format);
 215 
 220 const char *getCurrencyName(unsigned short currency);
 221 
 226 short getCurrencyExponent(unsigned short currency);
 227 
 232 int bcdValid(const unsigned char *a, unsigned size);
 233 
 234 #ifdef __cplusplus
 235 } // extern "C"
 236 
 237 #include <string>
 238 
 260 std::string bcdToAmountStr(const unsigned char *bcd, unsigned size, unsigned pos = 2, const std::string dsep = ",", const std::string tsep = ".");
 261 
 266 bool matchRegex(const char *str, const char *regex);
 267 
 270 std::string escapeRegex(const std::string &str);
 271 
 275 inline uint16_t decodeUS(const void *buf)
 276 {
 277  const unsigned char *b = (const unsigned char *)buf;
 278  return ((uint16_t)b[0] << 8)
 279  + (uint16_t)b[1];
 280 }
 281 
 285 inline uint32_t decodeUL(const void *buf)
 286 {
 287  const unsigned char *b = (const unsigned char *)buf;
 288  return ((uint32_t)b[0] << 24)
 289  + ((uint32_t)b[1] << 16)
 290  + ((uint32_t)b[2] << 8)
 291  + (uint32_t)b[3];
 292 }
 293 
 298 inline void encodeUS(void *buf, uint16_t value)
 299 {
 300  unsigned char *b = (unsigned char *)buf;
 301  b[0] = (unsigned char)(value >> 8);
 302  b[1] = (unsigned char) value;
 303 }
 304 
 309 inline void encodeUL(void *buf, uint32_t value)
 310 {
 311  unsigned char *b = (unsigned char *)buf;
 312  b[0] = (unsigned char)(value >> 24);
 313  b[1] = (unsigned char)(value >> 16);
 314  b[2] = (unsigned char)(value >> 8);
 315  b[3] = (unsigned char) value;
 316 }
 317 
 318 #endif // __cplusplus
 319 
 320 #endif // _UTIL_H_
```
