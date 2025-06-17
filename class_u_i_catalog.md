---
title: UICatalog

---

# UICatalog



 [More...](#detailed-description)


`#include <ui.h>`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum| **[Priority](class_u_i_catalog.md#enum-priority)** { Intern = 0, Extern = 1, IntExt = 2, ExtInt = 3} |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[UICatalog](class_u_i_catalog.md#function-uicatalog)**(sdi::Language lang =sdi::LANG_NO_LANG, const std::string & www_dir ="") |
| virtual | **[~UICatalog](class_u_i_catalog.md#function-~uicatalog)**() |
| bool | **[set](class_u_i_catalog.md#function-set)**(sdi::Language lang, const std::string & www_dir ="") |
| std::string | **[error](class_u_i_catalog.md#function-error)**() |
| bool | **[valid](class_u_i_catalog.md#function-valid)**([Priority](class_u_i_catalog.md#enum-priority) prio) |
| bool | **[setUIGlobal](class_u_i_catalog.md#function-setuiglobal)**([Priority](class_u_i_catalog.md#enum-priority) prio, bool restore =true) |
| std::string | **[getText](class_u_i_catalog.md#function-gettext)**(const std::string & name, const std::string & deflt ="", [Priority](class_u_i_catalog.md#enum-priority) prio =[Intern](class_u_i_catalog.md#enumvalue-intern)) |

## Detailed Description

```cpp
class UICatalog;
```


**Note**: [UICatalog](class_u_i_catalog.md) is designed for usage on stack, since function [setUIGlobal()](class_u_i_catalog.md#function-setuiglobal) allows to switch global language catalog for ADKGUI temporarily (with use of [uiSetCatalog()](namespacevfigui.md#function-uisetcatalog)). Depending on the restore flag of this function, the previous ADKGUI catalog is restored, if the [UICatalog](class_u_i_catalog.md) object is deleted or [set()](class_u_i_catalog.md#function-set) function is called to switch the catalog. Thus, [UICatalog](class_u_i_catalog.md) object must not be shared between threads and if multiple threads use different [UICatalog](class_u_i_catalog.md) objects at the same time they might have to enable thread local properties (ADKGUI), since [uiSetCatalog()](namespacevfigui.md#function-uisetcatalog) would switch language of ADKGUI globally. 

helper class to use 2 UI text catalogs (one internal and one external, provided by customer) at the same time, which is not supported by ADKGUI. SDI passes all texts with XML processing instruction <?var name?> or <?varhtml name?> to its HTML dialogs (<?text key?> in HTML is not used). All catalog texts are previously looked up by [UICatalog](class_u_i_catalog.md):[getText()](class_u_i_catalog.md#function-gettext) function. For the dual catalog support, SDI implements an additional XML processing instruction <?custom key?>, which more or less works the same as <?text key?> (as supported by ADKGUI), but this instruction has a special meaning when used in internal SDI text catalogs: If an internal text is looked up, UiCatalog:[getText()](class_u_i_catalog.md#function-gettext) substitutes all place holders <?custom key?> by the corresponding text value provided by the external customer catalog (if available). In this way, SDI supports priorization of custom texts (from external catatag) before using SDI default texts (in own internal text catalog). In addition, instruction <?text key?> in internal catalog will directly refer the corresponding text key in the internal catalog only, thus, this instruction can be used to compose SDI texts from multiple private text keys. Intructions <?custom key?> and <?text key?>, both work in texts of the internal catalog only, whereas instruction <?text key?> read from the external catalog are kept, since these are processed by ADKGUI running with the external catalog afterwards. [UICatalog](class_u_i_catalog.md):[getText()](class_u_i_catalog.md#function-gettext) and other functions of class [UICatalog](class_u_i_catalog.md) use parameter of enum Priority, which allows to select the catalog type and and to specify priority for catalog access. 

## Public Types Documentation

### enum Priority

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Intern | 0|  use/lookup internal catalog only  |
| Extern | 1|  use/lookup external catalog only  |
| IntExt | 2|  use/lookup internal catalog first. If internal catalog is not available (or text not found there), use the external catalog afterwards.  |
| ExtInt | 3|  use/lookup external catalog first. If external catalog is not available (or text not found there), use the internal catalog afterwards.  |




priority to select catalog type for [valid()](class_u_i_catalog.md#function-valid), [setUIGlobal()](class_u_i_catalog.md#function-setuiglobal) and [getText()](class_u_i_catalog.md#function-gettext)


## Public Functions Documentation

### function UICatalog

```cpp
UICatalog(
    sdi::Language lang =sdi::LANG_NO_LANG,
    const std::string & www_dir =""
)
```


constructor, which checks for required internal and external dialog depending on required language. The catalog works with both catalogs at the same time. By default (with empty _www_dir_), the external (custom) catalog custom-<lang>.ctlg is looked up from external user configuration folders: VOS/VOS2: 1. "/etc/config/sdi/www/<\terminal folder\>"

1. "/etc/config/sdi/www/default" VOS3: 1. "/home/usr\<X\>/sdi/www/<\terminal folder\>"



1. "/home/usr\<X\>/sdi/www/default" In addition, the internal calalog sdi-<lang>.ctlg is looked up from internal SDI resource



1. "$HOME/www/\<terminal folder\>"
2. "$HOME/www/default" langlanguage ID (see supported SDI languages in lang.h) LANG_NO_LANG means using the SDI system default language. 

www_dirInstead of using standard SDI www folders above, the folder <www> might be specified by parameter _www_dir_ to look up catalog files:
    * "\<www\>/\<terminal folder\>"
    * "\<www\>/default" Providing an external <www> directory with parameter _www_dir_ will always use "custom-\<lang\>.ctlg" and ommit usage of "sdi-\<lang\>.ctlg". 
Usually SDI uses flags SDI standard folders to lookup catalog files. Only SDI command HTML Dialog (24-0A) uses parameter _www_dir_, since customer dialogs/resource files are separated from normal SDI dialogs (installed to "www/custom" with the standard system package). 


### function ~UICatalog

```cpp
virtual ~UICatalog()
```


destructor (will restore the previous ADKGUI catalog, if setUIGlobal(true) was invoked on this object) 


### function set

```cpp
bool set(
    sdi::Language lang,
    const std::string & www_dir =""
)
```


**Parameters**: 

  * **lang** language ID (for more details see constructor description) 
  * **www_dir** alternative www folder (for more details see constructor description) 


**Return**: true if catalog is valid, else false (call [error()](class_u_i_catalog.md#function-error) for more details) 

switch the catalog for this object Please note that this function will restore the previous ADKGUI catalog, if setUIGlobal(true) was invoked on this object. 


### function error

```cpp
inline std::string error()
```


**Return**: readable error information as string (e.g. used for trace) 

returns the error string in case of internal error 


### function valid

```cpp
bool valid(
    Priority prio
)
```


**Parameters**: 

  * **prio** specifying the catalog to validate (see enum Priority). 


**Return**: true if the catalog(s) is/are valid and available. 

**Note**: 

  * Priority ExtInt and IntExt effect the same and check availability of both, internal and external catalog. 
  * In case false is returned, function [error()](class_u_i_catalog.md#function-error) can be used to retrieve error reason. 


returns true, if this [UICatalog](class_u_i_catalog.md) object is valid/available for the specified catalog priority _prio_. [UICatalog::getText()](class_u_i_catalog.md#function-gettext) will work for this catalog priority and not just returning default value. In addtion, [UICatalog::setUIGlobal()](class_u_i_catalog.md#function-setuiglobal) will effectly load an UI catalog and not just reset the recent one. 


### function setUIGlobal

```cpp
bool setUIGlobal(
    Priority prio,
    bool restore =true
)
```


**Parameters**: 

  * **restore** set to true, if the previous global UI dialog shall be restored, if this object is deleted or [set()](class_u_i_catalog.md#function-set) is called to switch the dialog. Set to false to keep this catalog for UI after object deletion. 
  * **prio** specifying the catalog priorty (see enum Priority). 


**Return**: true for success, else false if [uiSetCatalog()](namespacevfigui.md#function-uisetcatalog) has failed (call [error()](class_u_i_catalog.md#function-error) for more details). In case this function is invoked with catalog priority, which is not valid (see function [UICatalog::valid()](class_u_i_catalog.md#function-valid)), the UI catalog is reset to empty and the function returns true. Then ADKGUI invokes dialogs w/o catalog support. 

If the object is valid, this functions sets the catalog to UI property context with [uiSetCatalog()](namespacevfigui.md#function-uisetcatalog), so that HTML documents can use XML processing instruction <?text key?> with next call of [uiInvoke()](namespacevfigui.md#function-uiinvoke)/uiInvokeURL(). 


### function getText

```cpp
std::string getText(
    const std::string & name,
    const std::string & deflt ="",
    Priority prio =Intern
)
```


**Parameters**: 

  * **name** of key used to lookup the text in calalog 
  * **deflt** text that is returned, if text is not found in calalog 
  * **prio** specifying catalog priority and lookup order (see enum Priority) 


**Return**: text from catalog for success, else default value passed with parameter `deflt`

lookup a text from this catalog object by key `name`. If text is not found in catalog(s) or the corresponding catalog does not exist, the function returns default value passed with parameter `deflt`. Parameter _prio_ specifies priority, which catalog is used to lookup the text first. Usually, SDI looks up texts from internal catalog with default priority _Intern_. Internal SDI texts may contain processing instructions <?text key?> or <?custom key?>. Placeholder <?custom key?> will be automatically substituted with the corresponding value of the external custom catalog (if the referred key is found there), for more details see description of function textSubstitute(). Placeholder <?text key?> in internal catalog works the same as for ADKGUI and is used to refer private text variables of the internal text catalog only. For special cases (e.g. PIN entry) SDI accesses external catalog directly with priority _Extern_. External catalog lookups do not substitute <?text key?> or <?custom key?> as described above. 


-------------------------------

Updated on 2025-06-17 at 11:52:20 +0100