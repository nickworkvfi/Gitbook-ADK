---
hidden: true
title: "Directory::Entry Struct Reference"
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

`#include <`<a href="directory_8h_source.md">directory.h</a>`>`

|                         |                                                |
|-------------------------|------------------------------------------------|
| Public Member Functions |                                                |
|                         | [Entry](#a39deb917068018b4c69ffb32652454ab) () |

|                |                                                |
|----------------|------------------------------------------------|
| Data Fields    |                                                |
| std::string    | [name](#a9b45b3e13bd9167aab02e17e08916231)     |
| std::string    | [filename](#ae80f820219e45772366a2a68de6a54c4) |
| unsigned       | [type](#afa65f328561a1fb0d243d9be5d7f37dd)     |
| unsigned       | [mode](#a79f1aed8545a4399ce7dbcbe5d0a38f5)     |
| unsigned       | [size](#a245260f6f74972558f61b85227df5aae)     |
| unsigned       | [year](#a2a7fd6ec9f3bf84d7c564990dcf0bfb8)     |
| unsigned char  | [month](#a4900720b55a67c901372712af062d615)    |
| unsigned char  | [day](#ab9ba6d415537c392fea1a330751865f9)      |
| unsigned char  | [hour](#accdfe3c33766c9d6b3dc8996bb828dff)     |
| unsigned char  | [min](#a9b6e0d1177f74dafd99583456cdd53c4)      |
| unsigned char  | [sec](#a82015813ad639914dc140eb7eb2dd475)      |

## DetailedDescription {#detailed-description}

directory entry

## Constructor& Destructor Documentation

## Entry() <a href="#a39deb917068018b4c69ffb32652454ab" id="a39deb917068018b4c69ffb32652454ab"></a>

<p><a href="struct_directory_1_1_entry.md">Entry</a></p>

inline

## FieldDocumentation {#field-documentation}

## day <a href="#ab9ba6d415537c392fea1a330751865f9" id="ab9ba6d415537c392fea1a330751865f9"></a>

<p>unsigned char day</p>

modification date: day

## filename <a href="#ae80f820219e45772366a2a68de6a54c4" id="ae80f820219e45772366a2a68de6a54c4"></a>

<p>std::string filename</p>

file-/directory name without path

## hour <a href="#accdfe3c33766c9d6b3dc8996bb828dff" id="accdfe3c33766c9d6b3dc8996bb828dff"></a>

<p>unsigned char hour</p>

modification time: hour

## min <a href="#a9b6e0d1177f74dafd99583456cdd53c4" id="a9b6e0d1177f74dafd99583456cdd53c4"></a>

<p>unsigned char min</p>

modification time: minute

## mode <a href="#a79f1aed8545a4399ce7dbcbe5d0a38f5" id="a79f1aed8545a4399ce7dbcbe5d0a38f5"></a>

<p>unsigned mode</p>

file mode (permissions)

## month <a href="#a4900720b55a67c901372712af062d615" id="a4900720b55a67c901372712af062d615"></a>

<p>unsigned char month</p>

modification date: month

## name <a href="#a9b45b3e13bd9167aab02e17e08916231" id="a9b45b3e13bd9167aab02e17e08916231"></a>

<p>std::string name</p>

file-/directory name including full path

## sec <a href="#a82015813ad639914dc140eb7eb2dd475" id="a82015813ad639914dc140eb7eb2dd475"></a>

<p>unsigned char sec</p>

modification time: second

## size <a href="#a245260f6f74972558f61b85227df5aae" id="a245260f6f74972558f61b85227df5aae"></a>

<p>unsigned size</p>

file size

## type <a href="#afa65f328561a1fb0d243d9be5d7f37dd" id="afa65f328561a1fb0d243d9be5d7f37dd"></a>

<p>unsigned type</p>

type of entry (see FileType)

## year <a href="#a2a7fd6ec9f3bf84d7c564990dcf0bfb8" id="a2a7fd6ec9f3bf84d7c564990dcf0bfb8"></a>

<p>unsigned year</p>

modification date: year

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- sdi/src/<a href="directory_8h_source.md">directory.h</a>
