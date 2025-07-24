---
hidden: true
title: pathutil.cpp File Reference
---

[Macros](#define-members) \| [Functions](#func-members)

`#include "`<a href="pathutil_8h_source.md">pathutil.h</a>`"`
`#include <limits.h>`
`#include <vector>`
`#include <stdio.h>`
`#include <sys/stat.h>`
`#include <unistd.h>`

Include dependency graph for pathutil.cpp:

![](pathutil_8cpp__incl.png)

|          |                                                              |
|----------|--------------------------------------------------------------|
| Macros   |                                                              |
| #define  | [PATH_SEPARATOR](#a256a5721249aa3309437212cc21a9fe4)   \"/\" |

|  |  |
|----|----|
| Functions |  |
| string  | [pathclean](#a347cd6565ce1d822a333b272312c72eb) (const string &path) |
| string  | [pathcat](#a5dd4ecc523c12d8cf7421fe1f5a1e395) (const string &p1, const string &p2) |
| void  | [current_dir](#a09608c3ce15e00f7f375ecdcf050ee72) (string &cwd) |
| bool  | [is_absolute_path](#a5f02ed450e4d048f1779afacae02eb47) (const std::string &path) |
| string  | [dirname](#a6e314424ccc777b68ffc08f7e73ed6fb) (const std::string &path) |
| string  | [filename_from_path](#a475bedd9e98ac098526869dcb060713d) (const std::string &path) |
| bool  | [make_dir](#aa6b97cc16b900a0aac54399bdb24d594) (const std::string &path, mode_t mode) |

## MacroDefinition Documentation {#macro-definition-documentation}

## PATH_SEPARATOR <a href="#a256a5721249aa3309437212cc21a9fe4" id="a256a5721249aa3309437212cc21a9fe4"></a>

<p>#define PATH_SEPARATOR   \"/\"</p>

## FunctionDocumentation {#function-documentation}

## current_dir() <a href="#a09608c3ce15e00f7f375ecdcf050ee72" id="a09608c3ce15e00f7f375ecdcf050ee72"></a>

<p>void current_dir</p>

## dirname() <a href="#a6e314424ccc777b68ffc08f7e73ed6fb" id="a6e314424ccc777b68ffc08f7e73ed6fb"></a>

<p>string dirname</p>

strip non-directory suffix from file name

**Parameters**

\[in\] **path** file name including path

### Returns

directory name


{% hint style="info" %}
*path* supports both / and \\ as path separator
{% endhint %}

## filename_from_path() <a href="#a475bedd9e98ac098526869dcb060713d" id="a475bedd9e98ac098526869dcb060713d"></a>

<p>string filename_from_path</p>

strip directory prefix from file name

**Parameters**

\[in\] **path** file name including path

### Returns

file name


{% hint style="info" %}
*path* supports both / and \\ as path separator
{% endhint %}

## is_absolute_path() <a href="#a5f02ed450e4d048f1779afacae02eb47" id="a5f02ed450e4d048f1779afacae02eb47"></a>

<p>bool is_absolute_path</p>

returns true, if parameter *path* is an absolute path

**Parameters**

\[in\] **path** path name

### Returns

true for an absolute path, else false

## make_dir() <a href="#aa6b97cc16b900a0aac54399bdb24d594" id="aa6b97cc16b900a0aac54399bdb24d594"></a>

<p>bool make_dir</p>

create directory and parent directories if required.

**Parameters**

\[in\] **path** path to be created \[in\] **mode** mode specifies the permissions to use (as used for mkdir())

### Returns

true if the directory was created or was already existing, false if the directory could not be created

## pathcat() <a href="#a5dd4ecc523c12d8cf7421fe1f5a1e395" id="a5dd4ecc523c12d8cf7421fe1f5a1e395"></a>

<p>string pathcat</p>

## pathclean() <a href="#a347cd6565ce1d822a333b272312c72eb" id="a347cd6565ce1d822a333b272312c72eb"></a>

<p>string pathclean</p>
