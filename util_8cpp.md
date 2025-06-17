---
title: sdi/src/util.cpp

---

# sdi/src/util.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[getForceCurrAbbr](util_8cpp.md#function-getforcecurrabbr)**(unsigned short currency) |
| const char * | **[getCurrencyName](util_8cpp.md#function-getcurrencyname)**(unsigned short currency) |
| short | **[getCurrencyExponent](util_8cpp.md#function-getcurrencyexponent)**(unsigned short currency) |
| int | **[verifyDate](util_8cpp.md#function-verifydate)**(const char * date, const char * format) |
| int | **[bcdValid](util_8cpp.md#function-bcdvalid)**(const unsigned char * a, unsigned size) |
| string | **[bcdToAmountStr](util_8cpp.md#function-bcdtoamountstr)**(const unsigned char * bcd, unsigned size, unsigned pos, const string dsep, const string tsep) |
| bool | **[matchRegex](util_8cpp.md#function-matchregex)**(const char * str, const char * _regex) |
| string | **[escapeRegex](util_8cpp.md#function-escaperegex)**(const string & str) |


## Functions Documentation

### function getForceCurrAbbr

```cpp
bool getForceCurrAbbr(
    unsigned short currency
)
```


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


### function bcdToAmountStr

```cpp
string bcdToAmountStr(
    const unsigned char * bcd,
    unsigned size,
    unsigned pos,
    const string dsep,
    const string tsep
)
```


### function matchRegex

```cpp
bool matchRegex(
    const char * str,
    const char * _regex
)
```


### function escapeRegex

```cpp
string escapeRegex(
    const string & str
)
```




## Source code

```cpp
/****************************************************************************
*  Product:     InFusion
*  Company:     Verifone
*  Author:      GSS R&D Germany
*  Content:     SDI-Server
****************************************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#ifndef _STM32
  // don't use std::regex on existing platforms, which requires exceptions
  #include <regex.h>
#else
  // Titus has support for std::regex only
  #include <regex>
#endif
#include <hexutil.h>

using namespace std;

#include "util.h"
#include "_logf.h"
#include "sys.h"
#include "hexutil.h"
#include "config/sdi_sysconfig.h"

using namespace config;

bool getForceCurrAbbr(unsigned short currency)
{
  std::string forceCurrAbbr = SdiSysConfig::instance().getForcedAbbrCurrs();
  char help[5] = {0};
  std::string currStr;
  sprintf(help, "%04X", currency);
  currStr = help;

  if (forceCurrAbbr.find(currStr) != string::npos)
  {
    return true;
  }

  return false;
}

const char *getCurrencyName(unsigned short currency)
{
  unsigned int i;

  // Check whether the currency abbreviation has to be used (currency dependent?)
  if (!getForceCurrAbbr(currency))
  {
    // Check for corresponding currency symbol
    for (i = 0; i < sizeof(currSymbolTable) / sizeof(currSymbolTable[0]); i++)
    {
      if (currSymbolTable[i].code == currency)
      {
        return currSymbolTable[i].name;
      }
    }
  }

  // Check for corresponding currency abbreviation because a currency symbol is not desired or not found
  for (i = 0; i < sizeof(currAbbreviationTable) / sizeof(currAbbreviationTable[0]); i++)
  {
    if (currAbbreviationTable[i].code == currency)
    {
      return currAbbreviationTable[i].name;
    }
  }

  return "";
}

short getCurrencyExponent(unsigned short currency)
{
  unsigned int i;

  // Check whether the currency abbreviation has to be used (currency dependent?)
  if (!getForceCurrAbbr(currency))
  {
    // Check for corresponding currency symbol
    for (i = 0; i < sizeof(currSymbolTable) / sizeof(currSymbolTable[0]); i++)
    {
      if (currSymbolTable[i].code == currency)
      {
        return currSymbolTable[i].exponent;
      }
    }
  }

  // Check for corresponding currency abbreviation because a currency symbol is not desired or not found
  for (i = 0; i < sizeof(currAbbreviationTable) / sizeof(currAbbreviationTable[0]); i++)
  {
    if (currAbbreviationTable[i].code == currency)
    {
      return currAbbreviationTable[i].exponent;
    }
  }

  return -1;
}

int verifyDate(const char *date, const char *format)
{
  const char *paramPtr = NULL;
  char checkValue[5] = {0};
  unsigned int month = 0;
  unsigned int year = 0;

  // Check of parameter correctness
  if (date == NULL ||
      format == NULL ||
      strlen(date) != strlen(format))
  {
    return 0;
  }

  // Check the validity of the year
  if (((paramPtr = strstr(format, "YYYY")) != NULL) &&
      (paramPtr >= format) &&
      (paramPtr - format <= 6))
  {
    memcpy(checkValue, &date[paramPtr - format], 4);
    checkValue[4] = 0x00;

    year = atoi(checkValue);

    if (year < 1776) // Worldwide launch of the Gregorian calendar
    {
      return 0;
    }
  }
  else if (((paramPtr = strstr(format, "YY")) != NULL) &&
           (paramPtr >= format) &&
           (paramPtr - format <= 6))
  {
    memcpy(checkValue, &date[paramPtr - format], 2);
    checkValue[2] = 0x00;
    year = atoi(checkValue);

    if (year == 0 && memcmp(checkValue, "00", 2) != 0)
    {
      // Non numerical value
      return 0;
    }

    year += 2000; // Year 00...99 is interpreted as 2000...2099 (required for the validity check of the day)
  }

  // Check the validity of the month
  if (((paramPtr = strstr(format, "MM")) != NULL) &&
      (paramPtr >= format) &&
      (paramPtr - format <= 6))
  {
    memcpy(checkValue, &date[paramPtr - format], 2);
    checkValue[2] = 0x00;
    month = atoi(checkValue);

    if (month == 0 || month > 12)
    {
      return 0;
    }
  }

  // Check the validity of the day
  if (((paramPtr = strstr(format, "DD")) != NULL) &&
      (paramPtr >= format) &&
      (paramPtr - format <= 6))
  {
    unsigned int day = 0;

    memcpy(checkValue, &date[paramPtr - format], 2);
    checkValue[2] = 0x00;
    day = atoi(checkValue);

    switch (month)
    {
      case 2:
      {
        // February -> up to 28/29 days per month (leap-year depending)

        unsigned int daysPerMonth;

        if (year % 400 == 0)
        {
          daysPerMonth = 29;
        }
        else if (year % 100 == 0)
        {
          daysPerMonth = 28;
        }
        else if (year % 4 == 0)
        {
          daysPerMonth = 29;
        }
        else
        {
          daysPerMonth = 28;
        }

        if (day == 0 || day > daysPerMonth)
        {
          return 0;
        }

        break;
      }

      case 4:
      case 6:
      case 9:
      case 11:
      {
        // April, June, September, November -> up to 30 days per month

        if (day == 0 || day > 30)
        {
          return 0;
        }

        break;
      }

      default:
      {
        // January, March, May, July, August, October -> up to 31 days per month

        if (day == 0 || day > 31)
        {
          return 0;
        }
      }
    }
  }

  return 1; // Date valid
}

int bcdValid(const unsigned char *a, unsigned size)
{
  unsigned i;

  if (!a || !size)
  {
    return 0;
  }

  for (i = 0; i < size; i++)
  {
    if (a[i] > 0x9f || (a[i] & 0xf) > 9)
    {
      return 0;
    }
  }

  return 1;
}

string bcdToAmountStr(const unsigned char *bcd, unsigned size, unsigned pos, const string dsep, const string tsep)
{
  string str;
  const unsigned MAX_AMOUNT_LEN = 256;

  if (size * 2 > MAX_AMOUNT_LEN || pos > MAX_AMOUNT_LEN)
  {
    return str; // parameter error
  }

  if (!bcdValid(bcd, size))
  {
    return str;  // no BCD number
  }

  if (pos && dsep.empty())
  {
    return str;  // no precision without decimal separator
  }

  sdi::bintohexstring(str, bcd, (int)size);

  // prepend '0' up to minimum length for provided precision
  if (pos > 0 && pos >= str.length())
  {
    str.insert(0, pos + 1 - str.length(), '0');
  }
  else
  {
    // count prepended '0' and remove those not required
    unsigned c;

    for (c = 0; c < str.length() && str[c] == '0'; c++);

    if (c)
    {
      if (pos > 0 && c > str.length() - (pos + 1))
      {
        c = str.length() - (pos + 1);
      }

      if (c)
      {
        str.erase(0, c);
      }
    }
  }

  for (int i = (int)(str.length() - pos); i > 0; i -= 3)
  {
    // insert decimal separator (if any)
    if (i == (int)(str.length() - pos))
    {
      if (pos)
      {
        str.insert(i, dsep);
      }

      continue;
    }

    // insert thousand separator (if any)
    if (tsep.empty())
    {
      break;  // done
    }

    str.insert(i, tsep);
  }

  return str;
}

bool matchRegex(const char *str, const char *_regex)
{
#ifndef _STM32

  // avoid using exceptions and potential issues on existing platforms
  regex_t rx;

  if (0 != regcomp(&rx, _regex, REG_EXTENDED))
  {
    return false;
  }

  bool match = (0 == regexec(&rx, str, 0, NULL, 0));
  regfree(&rx);

  return match;

#else

  // Titus FW only supports std::regex, which unfortunatelly requires exceptions
  try
  {
    const std::regex r(_regex, std::regex_constants::extended);
    return std::regex_match(str, r);
  }
  catch (const std::regex_error &e)
  {
    return false;
  }

  return false;

#endif
}

string escapeRegex(const string &str)
{
  string ret(str);

  for (unsigned i = 0, j = 1; i < ret.length(); i += j)
  {
    // escape characters for regex
    switch (ret[i])
    {
      case '.':
      case '^':
      case '$':
      case '*':
      case '+':
      case '?':
      case '(':
      case ')':
      case '{':
      case '}':
      case '\\':
      case '|':
      case '/':
        ret.insert(i, 1, '\\');
        j = 2;
        break;

      default:
        j = 1;
        break;
    }
  }

  return ret;
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
