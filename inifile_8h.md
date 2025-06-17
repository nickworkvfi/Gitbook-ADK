---
title: sys/export/sysinfo/inifile.h

---

# sys/export/sysinfo/inifile.h



## Namespaces

| Name           |
| -------------- |
| **[vfisysinfo](namespacevfisysinfo.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfisysinfo::IniFile](classvfisysinfo_1_1_ini_file.md)**  |




## Source code

```cpp
#pragma once

#include "dllspec.h"
#include <map>
#include <vector>
#include <string>
 
#ifndef DOXYGEN

namespace vfisysinfo 
{
#endif

class IniFile 
{
        std::string filename;
        std::map<std::string,std::string> config;
        int error_line;

    public:
        std::vector<std::string> section_names;
        enum Mode { READONLY, READWRITE, WRITEONLY };

        SYS_INFO_API IniFile(const std::string &filename_, Mode mode );

        SYS_INFO_API IniFile( const std::string & content );

        SYS_INFO_API IniFile(const std::string &filename_, const std::string &content, Mode mode=READWRITE);

        SYS_INFO_API std::string operator()(const std::string &section) const;

        SYS_INFO_API std::string operator()(const std::string &section,const std::string &var, const std::string &defaultvalue="") const;

        SYS_INFO_API void get_section(const std::string &section, std::map<std::string,std::string> &values);

        SYS_INFO_API void remove(const std::string &section, const std::string &var);

        SYS_INFO_API void set(const std::string &section, const std::string &var, const std::string &value);

        SYS_INFO_API bool write() const;

        SYS_INFO_API int error() const { return error_line; }

        SYS_INFO_API void clear() { config.clear(); error_line=0; }

        std::string getstring( 
        std::map<std::string,std::string> & values,
        const std::string & id, 
        const std::string & alternative = "" ); 
};

#ifndef DOXYGEN
} // namespace vfisysinfo
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
