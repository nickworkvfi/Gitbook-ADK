---
hidden: true
title: codeconverter.h
---

<a href="codeconverter_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef CODECONVERTER_H
 2 #define CODECONVERTER_H
 3 
 4 // CodeConverter recently used for display only
 5 #ifndef HEADLESS
 6 
 7 #include <string>
 8 #include <map>
 9 #include <vector>
 10 
 11 class CodeConverter
 12 {
 13 
 14  public:
 15 
 16  // supported encodings
 17  enum Encoding
 18  {
 19  Enc_None = 0,
 20  Enc_Latin1 = 1,
 21  Enc_Latin2 = 2,
 22  Enc_Latin3 = 3,
 23  Enc_Latin4 = 4,
 24  Enc_Cyrillic = 5,
 25  Enc_Arabic = 6,
 26  Enc_Greek = 7,
 27  Enc_Hebrew = 8,
 28  Enc_Latin5 = 9,
 29  Enc_Latin6 = 10,
 30  Enc_Last = 11
 31  };
 32 
 33  CodeConverter() {}
 34  virtual ~CodeConverter() {}
 35 
 36 #ifdef CODECONV_SUPPORT_FROM_UTF8
 37 
 41  std::string utf2string(const std::string &str, enum Encoding enc);
 42 #endif
 43 
 47  std::string string2utf(const std::string &str, enum Encoding enc);
 48 };
 49 
 50 #endif // !HEADLESS
 51 
 52 #endif
```
