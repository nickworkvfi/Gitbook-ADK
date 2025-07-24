---
hidden: true
title: UICatalog Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods)

`#include <`<a href="ui_8h_source.md">ui.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [Priority](#a315655b1bb5848c063491adffde62b15) { [Intern](#a315655b1bb5848c063491adffde62b15a080ea5eddade4e450a13597d3abfc7cb) = 0, [Extern](#a315655b1bb5848c063491adffde62b15acc2095146c832d047006acd1fbad8d40) = 1, [IntExt](#a315655b1bb5848c063491adffde62b15aa66af95f11d4ab9cb729a44a46bcbb29) = 2, [ExtInt](#a315655b1bb5848c063491adffde62b15a0f50e7103bfa6183d89169bdd33f16af) = 3 } |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [UICatalog](#ad503da21c91ade8c4d676010393836ec) (sdi::Language lang=sdi::LANG_NO_LANG, const std::string &www_dir=\"\") |
| virtual  | [\~UICatalog](#ab85073367df4bd2b88e6588ea085235e) () |
| bool  | [set](#a358e213b2dc57bf1d49d353707b6c0ae) (sdi::Language lang, const std::string &www_dir=\"\") |
| std::string  | [error](#a088fd30b0c4d1f217fcf44728f789f36) () |
| bool  | [valid](#a9b7ed11a4b19fd017a125345cdb7ef4e) ([Priority](#a315655b1bb5848c063491adffde62b15) prio) |
| bool  | [setUIGlobal](#aab3ca0cbe3d23cd9577ae2ecdcf191ae) ([Priority](#a315655b1bb5848c063491adffde62b15) prio, bool restore=true) |
| std::string  | [getText](#a9bf11d9db05366a4dc04f6c53a16c2e6) (const std::string &name, const std::string &deflt=\"\", [Priority](#a315655b1bb5848c063491adffde62b15) prio=[Intern](#a315655b1bb5848c063491adffde62b15a080ea5eddade4e450a13597d3abfc7cb)) |

## DetailedDescription {#detailed-description}

helper class to use 2 UI text catalogs (one internal and one external, provided by customer) at the same time, which is not supported by ADKGUI. SDI passes all texts with XML processing instruction \<?var name?\> or \<?varhtml name?\> to its HTML dialogs (\<?text key?\> in HTML is not used). All catalog texts are previously looked up by <a href="class_u_i_catalog.md">UICatalog</a>:[getText()](#a9bf11d9db05366a4dc04f6c53a16c2e6) function. For the dual catalog support, SDI implements an additional XML processing instruction \<?custom key?\>, which more or less works the same as \<?text key?\> (as supported by ADKGUI), but this instruction has a special meaning when used in internal SDI text catalogs: If an internal text is looked up, UiCatalog:[getText()](#a9bf11d9db05366a4dc04f6c53a16c2e6) substitutes all place holders \<?custom key?\> by the corresponding text value provided by the external customer catalog (if available). In this way, SDI supports priorization of custom texts (from external catatag) before using SDI default texts (in own internal text catalog). In addition, instruction \<?text key?\> in internal catalog will directly refer the corresponding text key in the internal catalog only, thus, this instruction can be used to compose SDI texts from multiple private text keys. Intructions \<?custom key?\> and \<?text key?\>, both work in texts of the internal catalog only, whereas instruction \<?text key?\> read from the external catalog are kept, since these are processed by ADKGUI running with the external catalog afterwards. <a href="class_u_i_catalog.md">UICatalog</a>:[getText()](#a9bf11d9db05366a4dc04f6c53a16c2e6) and other functions of class <a href="class_u_i_catalog.md">UICatalog</a> use parameter of enum Priority, which allows to select the catalog type and and to specify priority for catalog access.

{% hint style="info" %}
<a href="class_u_i_catalog.md">UICatalog</a> is designed for usage on stack, since function [setUIGlobal()](#aab3ca0cbe3d23cd9577ae2ecdcf191ae) allows to switch global language catalog for ADKGUI temporarily (with use of <a href="namespacevfigui.md#ab103c683852a0d4b19695e76f90dcf82">uiSetCatalog()</a>). Depending on the restore flag of this function, the previous ADKGUI catalog is restored, if the <a href="class_u_i_catalog.md">UICatalog</a> object is deleted or [set()](#a358e213b2dc57bf1d49d353707b6c0ae) function is called to switch the catalog. Thus, <a href="class_u_i_catalog.md">UICatalog</a> object must not be shared between threads and if multiple threads use different <a href="class_u_i_catalog.md">UICatalog</a> objects at the same time they might have to enable thread local properties (ADKGUI), since <a href="namespacevfigui.md#ab103c683852a0d4b19695e76f90dcf82">uiSetCatalog()</a> would switch language of ADKGUI globally.
{% endhint %}

## MemberEnumeration Documentation {#member-enumeration-documentation}

## Priority <a href="#a315655b1bb5848c063491adffde62b15" id="a315655b1bb5848c063491adffde62b15"></a>

<p>enum [Priority](#a315655b1bb5848c063491adffde62b15)</p>

priority to select catalog type for [valid()](#a9b7ed11a4b19fd017a125345cdb7ef4e), [setUIGlobal()](#aab3ca0cbe3d23cd9577ae2ecdcf191ae) and [getText()](#a9bf11d9db05366a4dc04f6c53a16c2e6)

| Enumerator |  |
|----|----|
| Intern  | <p>use/lookup internal catalog only</p> |
| Extern  | <p>use/lookup external catalog only</p> |
| IntExt  | <p>use/lookup internal catalog first. If internal catalog is not available (or text not found there), use the external catalog afterwards.</p> |
| ExtInt  | <p>use/lookup external catalog first. If external catalog is not available (or text not found there), use the internal catalog afterwards.</p> |

## Constructor& Destructor Documentation

## UICatalog() <a href="#ad503da21c91ade8c4d676010393836ec" id="ad503da21c91ade8c4d676010393836ec"></a>

<p><a href="class_u_i_catalog.md">UICatalog</a></p>

constructor, which checks for required internal and external dialog depending on required language. The catalog works with both catalogs at the same time. By default (with empty *www_dir*), the external (custom) catalog custom-\<lang\>.ctlg is looked up from external user configuration folders: VOS/VOS2: 1. \"/etc/config/sdi/www/\<\\terminal folder\\\>\"

1.  \"/etc/config/sdi/www/default\" VOS3: 1. \"/home/usr\\\<X\\\>/sdi/www/\<\\terminal folder\\\>\"

&nbsp;

1.  \"/home/usr\\\<X\\\>/sdi/www/default\" In addition, the internal calalog sdi-\<lang\>.ctlg is looked up from internal SDI resource

&nbsp;

1.  \"\$HOME/www/\\\<terminal folder\\\>\"
2.  \"\$HOME/www/default\" **Parameters**

    \[in\] **lang** language ID (see supported SDI languages in lang.h) LANG_NO_LANG means using the SDI system default language. \[in\] **www_dir** Instead of using standard SDI www folders above, the folder \<www\> might be specified by parameter www_dir to look up catalog files:\"\\\<www\\\>/\\\<terminal folder\\\>\"\"\\\<www\\\>/default\" Providing an external \<www\> directory with parameter www_dir will always use \"custom-\\\<lang\\\>.ctlg\" and ommit usage of \"sdi-\\\<lang\\\>.ctlg\".


    {% hint style="info" %}
    Usually SDI uses flags SDI standard folders to lookup catalog files. Only SDI command HTML Dialog (24-0A) uses parameter *www_dir*, since customer dialogs/resource files are separated from normal SDI dialogs (installed to \"www/custom\" with the standard system package).
    {% endhint %}

## \~UICatalog() <a href="#ab85073367df4bd2b88e6588ea085235e" id="ab85073367df4bd2b88e6588ea085235e"></a>

<p>\~<a href="class_u_i_catalog.md">UICatalog</a></p>

virtual

destructor (will restore the previous ADKGUI catalog, if setUIGlobal(true) was invoked on this object)

## MemberFunction Documentation {#member-function-documentation}

## error() <a href="#a088fd30b0c4d1f217fcf44728f789f36" id="a088fd30b0c4d1f217fcf44728f789f36"></a>

<p>std::string error</p>

inline

returns the error string in case of internal error

### Returns

readable error information as string (e.g. used for trace)

## getText() <a href="#a9bf11d9db05366a4dc04f6c53a16c2e6" id="a9bf11d9db05366a4dc04f6c53a16c2e6"></a>

<p>string getText</p>

lookup a text from this catalog object by key `name`. If text is not found in catalog(s) or the corresponding catalog does not exist, the function returns default value passed with parameter `deflt`. Parameter *prio* specifies priority, which catalog is used to lookup the text first. Usually, SDI looks up texts from internal catalog with default priority *Intern*. Internal SDI texts may contain processing instructions \<?text key?\> or \<?custom key?\>. Placeholder \<?custom key?\> will be automatically substituted with the corresponding value of the external custom catalog (if the referred key is found there), for more details see description of function textSubstitute(). Placeholder \<?text key?\> in internal catalog works the same as for ADKGUI and is used to refer private text variables of the internal text catalog only. For special cases (e.g. PIN entry) SDI accesses external catalog directly with priority *Extern*. External catalog lookups do not substitute \<?text key?\> or \<?custom key?\> as described above.

**Parameters**

\[in\] **name** of key used to lookup the text in calalog \[in\] **deflt** text that is returned, if text is not found in calalog \[in\] **prio** specifying catalog priority and lookup order (see enum Priority)

### Returns

text from catalog for success, else default value passed with parameter `deflt`

## set() <a href="#a358e213b2dc57bf1d49d353707b6c0ae" id="a358e213b2dc57bf1d49d353707b6c0ae"></a>

<p>bool set</p>

switch the catalog for this object Please note that this function will restore the previous ADKGUI catalog, if setUIGlobal(true) was invoked on this object.

**Parameters**

\[in\] **lang** language ID (for more details see constructor description) \[in\] **www_dir** alternative www folder (for more details see constructor description)

### Returns

true if catalog is valid, else false (call [error()](#a088fd30b0c4d1f217fcf44728f789f36) for more details)

## setUIGlobal() <a href="#aab3ca0cbe3d23cd9577ae2ecdcf191ae" id="aab3ca0cbe3d23cd9577ae2ecdcf191ae"></a>

<p>bool setUIGlobal</p>

If the object is valid, this functions sets the catalog to UI property context with <a href="namespacevfigui.md#ab103c683852a0d4b19695e76f90dcf82">uiSetCatalog()</a>, so that HTML documents can use XML processing instruction \<?text key?\> with next call of <a href="namespacevfigui.md#af330e250493b2c6546274bea96d87fca">uiInvoke()</a>/uiInvokeURL().

**Parameters**

\[in\] **restore** set to true, if the previous global UI dialog shall be restored, if this object is deleted or set() is called to switch the dialog. Set to false to keep this catalog for UI after object deletion. \[in\] **prio** specifying the catalog priorty (see enum Priority).

### Returns

true for success, else false if <a href="namespacevfigui.md#ab103c683852a0d4b19695e76f90dcf82">uiSetCatalog()</a> has failed (call [error()](#a088fd30b0c4d1f217fcf44728f789f36) for more details). In case this function is invoked with catalog priority, which is not valid (see function [UICatalog::valid()](#a9b7ed11a4b19fd017a125345cdb7ef4e)), the UI catalog is reset to empty and the function returns true. Then ADKGUI invokes dialogs w/o catalog support.

## valid() <a href="#a9b7ed11a4b19fd017a125345cdb7ef4e" id="a9b7ed11a4b19fd017a125345cdb7ef4e"></a>

<p>bool valid</p>

returns true, if this <a href="class_u_i_catalog.md">UICatalog</a> object is valid/available for the specified catalog priority *prio*. [UICatalog::getText()](#a9bf11d9db05366a4dc04f6c53a16c2e6) will work for this catalog priority and not just returning default value. In addtion, [UICatalog::setUIGlobal()](#aab3ca0cbe3d23cd9577ae2ecdcf191ae) will effectly load an UI catalog and not just reset the recent one.

**Parameters**

\[in\] **prio** specifying the catalog to validate (see enum Priority).


{% hint style="info" %}
Priority ExtInt and IntExt effect the same and check availability of both, internal and external catalog.
{% endhint %}

### Returns

true if the catalog(s) is/are valid and available.


{% hint style="info" %}
In case false is returned, function [error()](#a088fd30b0c4d1f217fcf44728f789f36) can be used to retrieve error reason.
{% endhint %}

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="ui_8h_source.md">ui.h</a>
- sdi/src/<a href="ui__priv_8cpp.md">ui_priv.cpp</a>
