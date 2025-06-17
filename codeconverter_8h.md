---
title: sdi/src/codeconverter.h

---

# sdi/src/codeconverter.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[CodeConverter](class_code_converter.md)**  |




## Source code

```cpp
#ifndef CODECONVERTER_H
#define CODECONVERTER_H

// CodeConverter recently used for display only
#ifndef HEADLESS

#include <string>
#include <map>
#include <vector>

class CodeConverter
{

  public:

    // supported encodings
    enum Encoding
    {
      Enc_None   =   0, 
      Enc_Latin1 =   1, 
      Enc_Latin2 =   2, 
      Enc_Latin3 =   3, 
      Enc_Latin4 =   4, 
      Enc_Cyrillic = 5, 
      Enc_Arabic =   6, 
      Enc_Greek =    7, 
      Enc_Hebrew =   8, 
      Enc_Latin5 =   9, 
      Enc_Latin6 =  10, 
      Enc_Last   =  11  
    };

    CodeConverter() {}
    virtual ~CodeConverter() {}

#ifdef CODECONV_SUPPORT_FROM_UTF8

    std::string utf2string(const std::string &str, enum Encoding enc);
#endif

    std::string string2utf(const std::string &str, enum Encoding enc);
};

#endif // !HEADLESS

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
