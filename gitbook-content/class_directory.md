---
hidden: true
title: Directory Class Reference
---

[Data Structures](#nested-classes) \| [Public Types](#pub-types) \| [Public Member Functions](#pub-methods)

`#include <`<a href="directory_8h_source.md">directory.h</a>`>`

|  |  |
|----|----|
| Data Structures |  |
| struct   | <a href="struct_directory_1_1_entry.md">Entry</a> |

|  |  |
|----|----|
| Public Types |  |
| enum   | [FileType](#a2c794c5c13ab4dd7e65bad031dbe41c3) { [File](#a2c794c5c13ab4dd7e65bad031dbe41c3a1ab5ebbd194ab0b95e5697aca9ba274f), [Dir](#a2c794c5c13ab4dd7e65bad031dbe41c3ade1fdd6d5cfced39efa84b6ba6db7ca2), [Link](#a2c794c5c13ab4dd7e65bad031dbe41c3ad288cb65204ac772551b27769451efc2), [Special](#a2c794c5c13ab4dd7e65bad031dbe41c3ac18c85698a8e17ceb09f0393f47d43d3) } |
| enum   | { [Read](#abed82baf7f470b522273a3e37c24c600a809abe96853e69894bbf8e5730b31348) = 1, [Write](#abed82baf7f470b522273a3e37c24c600aa56670174817e3fed92bfd8182d7c0d1) = 2 } |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [Directory](#a38d47b06522240db90b8b01e51af6968) () |
| virtual  | [\~Directory](#aafb25e10c4cbdc7824beecf2a28cf10a) () |
| int  | [open](#adf02eebfa74c648cdf8eb58331ec2334) (const std::string &\_dirname) |
| int  | [readEntry](#a146efd6a8d54b8727b20c2164a9333d8) (<a href="struct_directory_1_1_entry.md">Entry</a> &entry) |
| void  | [pushBack](#ad46c690eb8d3d3ca0958371d41ae5556) () |
| void  | [close](#a5ae591df94fc66ccb85cbb6565368bca) () |

## DetailedDescription {#detailed-description}

class for reading directories

## MemberEnumeration Documentation {#member-enumeration-documentation}

## anonymousenum <a href="#abed82baf7f470b522273a3e37c24c600" id="abed82baf7f470b522273a3e37c24c600"></a> {#anonymous-enum}

<p>anonymous enum</p>

| Enumerator |     |
|------------|-----|
| Read       |     |
| Write      |     |

## FileType <a href="#a2c794c5c13ab4dd7e65bad031dbe41c3" id="a2c794c5c13ab4dd7e65bad031dbe41c3"></a>

<p>enum [FileType](#a2c794c5c13ab4dd7e65bad031dbe41c3)</p>

| Enumerator |     |
|------------|-----|
| File       |     |
| Dir        |     |
| Link       |     |
| Special    |     |

## Constructor& Destructor Documentation

## Directory() <a href="#a38d47b06522240db90b8b01e51af6968" id="a38d47b06522240db90b8b01e51af6968"></a>

<p><a href="class_directory.md">Directory</a></p>

constructor

## \~Directory() <a href="#aafb25e10c4cbdc7824beecf2a28cf10a" id="aafb25e10c4cbdc7824beecf2a28cf10a"></a>

<p>virtual \~<a href="class_directory.md">Directory</a></p>

inlinevirtual

destructor

## MemberFunction Documentation {#member-function-documentation}

## close() <a href="#a5ae591df94fc66ccb85cbb6565368bca" id="a5ae591df94fc66ccb85cbb6565368bca"></a>

<p>void close</p>

close the directory

## open() <a href="#adf02eebfa74c648cdf8eb58331ec2334" id="adf02eebfa74c648cdf8eb58331ec2334"></a>

<p>int open</p>

open a directory for reading

**Parameters**

\[in\] **\_dirname** name of the directory

### Returns

1 in case of success, 0 in case of failure

## pushBack() <a href="#ad46c690eb8d3d3ca0958371d41ae5556" id="ad46c690eb8d3d3ca0958371d41ae5556"></a>

<p>void pushBack</p>

inline

push back one directory entry (it will be read by the next [readEntry()](#a146efd6a8d54b8727b20c2164a9333d8)). Only one entry can be pushed back.

## readEntry() <a href="#a146efd6a8d54b8727b20c2164a9333d8" id="a146efd6a8d54b8727b20c2164a9333d8"></a>

<p>int readEntry</p>

read the next directory entry

**Parameters**

\[out\] **entry** next directory entry

### Returns

1 in case of success, 0 in case of failure (e.g. end of directory)

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="directory_8h_source.md">directory.h</a>
- sdi/src/<a href="directory_8cpp.md">directory.cpp</a>
