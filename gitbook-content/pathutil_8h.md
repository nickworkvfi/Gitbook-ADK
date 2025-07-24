---
hidden: true
title: pathutil.h File Reference
---

[Functions](#func-members)

`#include <string>`
`#include <sys/types.h>`

Include dependency graph for pathutil.h:

![](pathutil_8h__incl.png)

This graph shows which files directly or indirectly include this file:

![](pathutil_8h__dep__incl.png)

<a href="pathutil_8h_source.md">Go to the source code of this file.</a>

|  |  |
|----|----|
| Functions |  |
| std::string  | [pathclean](#aa01a783fcf5ab8dfb3371ddf1937b1d8) (const std::string &path) |
| std::string  | [pathcat](#a01bbf38e5df83444a0b653a5424d1471) (const std::string &p1, const std::string &p2) |
| void  | [current_dir](#a5338868628e8af64851c06a4d5672474) (std::string &cwd) |
| bool  | [is_absolute_path](#a5f02ed450e4d048f1779afacae02eb47) (const std::string &path) |
| std::string  | [dirname](#a9181ca7ec40f7d471eb410a1215a2321) (const std::string &path) |
| std::string  | [filename_from_path](#ad2f12525e3b8ec94ed3a22f8d96ac145) (const std::string &path) |
| bool  | [make_dir](#adc366505b5f6eb4fcf1099dce96fabc6) (const std::string &path, mode_t mode=0777) |

## FunctionDocumentation {#function-documentation}

## current_dir() <a href="#a5338868628e8af64851c06a4d5672474" id="a5338868628e8af64851c06a4d5672474"></a>

<p>void current_dir</p>

returns the path of current working directory

**Parameters**

\[in,out\] **cwd** path to current working directory

## dirname() <a href="#a9181ca7ec40f7d471eb410a1215a2321" id="a9181ca7ec40f7d471eb410a1215a2321"></a>

<p>std::string dirname</p>

strip non-directory suffix from file name

**Parameters**

\[in\] **path** file name including path

### Returns

directory name


{% hint style="info" %}
*path* supports both / and \\ as path separator
{% endhint %}

## filename_from_path() <a href="#ad2f12525e3b8ec94ed3a22f8d96ac145" id="ad2f12525e3b8ec94ed3a22f8d96ac145"></a>

<p>std::string filename_from_path</p>

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

## make_dir() <a href="#adc366505b5f6eb4fcf1099dce96fabc6" id="adc366505b5f6eb4fcf1099dce96fabc6"></a>

<p>bool make_dir</p>

create directory and parent directories if required.

**Parameters**

\[in\] **path** path to be created \[in\] **mode** mode specifies the permissions to use (as used for mkdir())

### Returns

true if the directory was created or was already existing, false if the directory could not be created

## pathcat() <a href="#a01bbf38e5df83444a0b653a5424d1471" id="a01bbf38e5df83444a0b653a5424d1471"></a>

<p>std::string pathcat</p>

concatenate two path components into a path. It handles also the case that the second component *p2* is an absolute path, e.g. \"a\" + \"/b\" -\> \"/b\"

**Parameters**

\[in\] **p1** first path component \[in\] **p2** second path component

### Returns

resulting combined path

## pathclean() <a href="#aa01a783fcf5ab8dfb3371ddf1937b1d8" id="aa01a783fcf5ab8dfb3371ddf1937b1d8"></a>

<p>std::string pathclean</p>

cleanup path, examples:

- \"a//b\" -\> \"a/b\"

- \"a/../b\" -\> \"b\" **Parameters**

  \[in\] **path** path to be cleaned up

  ### Returns

  cleaned up path
