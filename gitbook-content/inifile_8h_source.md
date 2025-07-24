---
hidden: true
title: inifile.h
---

<a href="inifile_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 #include "dllspec.h"
 4 #include <map>
 5 #include <vector>
 6 #include <string>
 7 
 8 #ifndef DOXYGEN
 9 
 10 namespace vfisysinfo
 11 {
 12 #endif
 13 
 15 class IniFile
 16 {
 17  std::string filename;
 18  std::map<std::string,std::string> config;
 19  int error_line;
 20 
 21  public:
 22  std::vector<std::string> section_names;
 23  enum Mode { READONLY, READWRITE, WRITEONLY };
 24 
 28  SYS_INFO_API IniFile(const std::string &filename_, Mode mode );
 29 
 33  SYS_INFO_API IniFile( const std::string & content );
 34 
 39  SYS_INFO_API IniFile(const std::string &filename_, const std::string &content, Mode mode=READWRITE);
 40 
 45  SYS_INFO_API std::string operator()(const std::string &section) const;
 46 
 53  SYS_INFO_API std::string operator()(const std::string &section,const std::string &var, const std::string &defaultvalue="") const;
 54 
 59  SYS_INFO_API void get_section(const std::string &section, std::map<std::string,std::string> &values);
 60 
 65  SYS_INFO_API void remove(const std::string &section, const std::string &var);
 66 
 72  SYS_INFO_API void set(const std::string &section, const std::string &var, const std::string &value);
 73 
 77  SYS_INFO_API bool write() const;
 78 
 81  SYS_INFO_API int error() const { return error_line; }
 82 
 84  SYS_INFO_API void clear() { config.clear(); error_line=0; }
 85 
 86  std::string getstring(
 87  std::map<std::string,std::string> & values,
 88  const std::string & id,
 89  const std::string & alternative = "" );
 90 };
 91 
 92 #ifndef DOXYGEN
 93 } // namespace vfisysinfo
 94 #endif
 95 
```
