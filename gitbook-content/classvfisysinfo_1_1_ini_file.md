---
hidden: true
title: IniFile Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

`#include <`<a href="inifile_8h_source.md">inifile.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [Mode](#a46c8a310cf4c094f8c80e1cb8dc1f911) { [READONLY](#a46c8a310cf4c094f8c80e1cb8dc1f911a626af06d585fcb18d2cd6cdec0d235cf), [READWRITE](#a46c8a310cf4c094f8c80e1cb8dc1f911a35c9731eb1af206e4ebcfc0bc95cd6de), [WRITEONLY](#a46c8a310cf4c094f8c80e1cb8dc1f911a4ffe959f091c61926ed8ff11a75d727e) } |

|  |  |
|----|----|
| Public Member Functions |  |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a>  | [IniFile](#a0dc66141b6814337c25dc993adf1b340) (const std::string &filename\_, [Mode](#a46c8a310cf4c094f8c80e1cb8dc1f911) mode) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a>  | [IniFile](#a07bd4d8fea4cfc129fc11ac5b7c3bade) (const std::string &content) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a>  | [IniFile](#a0ce54bd68dfc4a746022b72917651f9b) (const std::string &filename\_, const std::string &content, [Mode](#a46c8a310cf4c094f8c80e1cb8dc1f911) mode=[READWRITE](#a46c8a310cf4c094f8c80e1cb8dc1f911a35c9731eb1af206e4ebcfc0bc95cd6de)) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> std::string  | [operator()](#ae5038e3e5e05ab26caf1f52f58169dd1) (const std::string &section) const |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> std::string  | [operator()](#a35666904e1e656fc6305d3e539481e27) (const std::string &section, const std::string &var, const std::string &defaultvalue=\"\") const |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void  | [get_section](#a6c34b8d6f79328485c2580a82cca5e16) (const std::string &section, std::map\< std::string, std::string \> &values) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void  | [remove](#ac6f9c36f152f398f86c4b45347984b56) (const std::string &section, const std::string &var) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void  | [set](#a6c47b74e7363513d4e98adea214cc3a5) (const std::string &section, const std::string &var, const std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> bool  | [write](#ac88137501c7535ede2d472ca5aa43d46) () const |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int  | [error](#ac35c7adbd44f224202759428686131be) () const |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void  | [clear](#aa90907e853a7b3776a474e658d0d986e) () |
| std::string  | [getstring](#ad8fe4979ab035f93bb5d34a467a487e7) (std::map\< std::string, std::string \> &values, const std::string &id, const std::string &alternative=\"\") |

|  |  |
|----|----|
| Data Fields |  |
| std::vector\< std::string \>  | [section_names](#a5cb23ad9cddfc52bd33549e776de579c) |

## DetailedDescription {#detailed-description}

class for accessing INI files

## MemberEnumeration Documentation {#member-enumeration-documentation}

## Mode <a href="#a46c8a310cf4c094f8c80e1cb8dc1f911" id="a46c8a310cf4c094f8c80e1cb8dc1f911"></a>

<p>enum [Mode](#a46c8a310cf4c094f8c80e1cb8dc1f911)</p>

| Enumerator |     |
|------------|-----|
| READONLY   |     |
| READWRITE  |     |
| WRITEONLY  |     |

## Constructor& Destructor Documentation

## IniFile()\[1/3\] <a href="#a0dc66141b6814337c25dc993adf1b340" id="a0dc66141b6814337c25dc993adf1b340"></a> {#inifile-13}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="classvfisysinfo_1_1_ini_file.md">IniFile</a></p>

constructor, open INI file

**Parameters**

\[in\] **filename\_** file name

## IniFile()\[2/3\] <a href="#a07bd4d8fea4cfc129fc11ac5b7c3bade" id="a07bd4d8fea4cfc129fc11ac5b7c3bade"></a> {#inifile-23}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="classvfisysinfo_1_1_ini_file.md">IniFile</a></p>

constructor, open INI file

**Parameters**

\[in\] **in** file content

## IniFile()\[3/3\] <a href="#a0ce54bd68dfc4a746022b72917651f9b" id="a0ce54bd68dfc4a746022b72917651f9b"></a> {#inifile-33}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="classvfisysinfo_1_1_ini_file.md">IniFile</a></p>

constructor, open INI file

**Parameters**

\[in\] **filename\_** file name \[in\] **in** file content

## MemberFunction Documentation {#member-function-documentation}

## clear() <a href="#aa90907e853a7b3776a474e658d0d986e" id="aa90907e853a7b3776a474e658d0d986e"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void clear</p>

inline

clear content, reset error

## error() <a href="#ac35c7adbd44f224202759428686131be" id="ac35c7adbd44f224202759428686131be"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> int error</p>

inline

Check if the constructor has read a file or if a new configuration file is to be created

### Returns

-1 in case the file did not exist, 0 in case the file could be read without error, \>0 line number of syntax error

## get_section() <a href="#a6c34b8d6f79328485c2580a82cca5e16" id="a6c34b8d6f79328485c2580a82cca5e16"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void get_section</p>

reads all values from *section* to map *values* as key-value pairs

**Parameters**

\[in\] **section** section that contains the key value pairs \[in\] **values**

## getstring() <a href="#ad8fe4979ab035f93bb5d34a467a487e7" id="ad8fe4979ab035f93bb5d34a467a487e7"></a>

<p>std::string getstring</p>

## operator()()\[1/2\] <a href="#ae5038e3e5e05ab26caf1f52f58169dd1" id="ae5038e3e5e05ab26caf1f52f58169dd1"></a> {#operator-12}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> std::string operator()</p>

read content of section

**Parameters**

\[in\] **section** section to be read

### Returns

section content

## operator()()\[2/2\] <a href="#a35666904e1e656fc6305d3e539481e27" id="a35666904e1e656fc6305d3e539481e27"></a> {#operator-22}

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> std::string operator()</p>

read key

**Parameters**

\[in\] **section** section that contains the key \[in\] **var** key name \[in\] **defaultvalue** default value that is returned if the key does not exist

### Returns

key value

## remove() <a href="#ac6f9c36f152f398f86c4b45347984b56" id="ac6f9c36f152f398f86c4b45347984b56"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void remove</p>

remove key from memory

**Parameters**

\[in\] **section** section that contains the key \[in\] **var** key name

## set() <a href="#a6c47b74e7363513d4e98adea214cc3a5" id="a6c47b74e7363513d4e98adea214cc3a5"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> void set</p>

set key in memory

**Parameters**

\[in\] **section** section that contains the key \[in\] **var** key name \[in\] **value** key value

## write() <a href="#ac88137501c7535ede2d472ca5aa43d46" id="ac88137501c7535ede2d472ca5aa43d46"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> bool write</p>

write memory content back to file

### Returns

true in case of success, else false

## FieldDocumentation {#field-documentation}

## section_names <a href="#a5cb23ad9cddfc52bd33549e776de579c" id="a5cb23ad9cddfc52bd33549e776de579c"></a>

<p>std::vector\<std::string\> section_names</p>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sys/export/sysinfo/<a href="inifile_8h_source.md">inifile.h</a>
