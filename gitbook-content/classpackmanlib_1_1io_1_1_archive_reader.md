---
hidden: true
title: ArchiveReader Class Reference
---

[Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods) \| [Data Fields](#pub-attribs)

|  |  |
|----|----|
| Public Member Functions |  |
| def  | [\_\_init\_\_](#ae64f0875afe3067b97ba370b354b9213) (self) |

|  |  |
|----|----|
| Static Public Member Functions |  |
| def  | [read_file](#aee6c445359ec4572d7b5aceeeb1818df) (archive, path) |
|   | Extract archive from file recursively to build in-memory node tree. [More\...](#aee6c445359ec4572d7b5aceeeb1818df)<br/> |
| def  | [read_fileobj](#aec6d086b6d253ccb7edf3035c7056d6f) (archive, fileobj, name) |
|   | Extract archive from file object recursively to build in-memory node tree. [More\...](#aec6d086b6d253ccb7edf3035c7056d6f)<br/> |
| def  | [read_pickled_file](#ac595ebf7d477bad0e3f526fe176875c0) (path, gz=False) |
|   | Extract pickled file. [More\...](#ac595ebf7d477bad0e3f526fe176875c0)<br/> |

|             |                                                             |
|-------------|-------------------------------------------------------------|
| Data Fields |                                                             |
|             | [last_node_added_stack](#a4a0cd187ea06b5a8913c722a51e1d265) |

## Constructor& Destructor Documentation

## \_\_init\_\_() <a href="#ae64f0875afe3067b97ba370b354b9213" id="ae64f0875afe3067b97ba370b354b9213"></a>

<p>def \_\_init\_\_</p>

## MemberFunction Documentation {#member-function-documentation}

## read_file() <a href="#aee6c445359ec4572d7b5aceeeb1818df" id="aee6c445359ec4572d7b5aceeeb1818df"></a>

<p>def read_file</p>

static

Extract archive from file recursively to build in-memory node tree.

**Parameters**

**archive** archive root node **path** path to the archive file

## read_fileobj() <a href="#aec6d086b6d253ccb7edf3035c7056d6f" id="aec6d086b6d253ccb7edf3035c7056d6f"></a>

<p>def read_fileobj</p>

static

Extract archive from file object recursively to build in-memory node tree.

**Parameters**

**archive** archive root node **fileobj** path to the archive file **name** name of the root archive node

## read_pickled_file() <a href="#ac595ebf7d477bad0e3f526fe176875c0" id="ac595ebf7d477bad0e3f526fe176875c0"></a>

<p>def read_pickled_file</p>

static

Extract pickled file.

**Parameters**

**path** path to the pickled file **gz** whether pickled file is gzipped :return pickled object

## FieldDocumentation {#field-documentation}

## last_node_added_stack <a href="#a4a0cd187ea06b5a8913c722a51e1d265" id="a4a0cd187ea06b5a8913c722a51e1d265"></a>

<p>last_node_added_stack</p>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- packman/packmanlib/<a href="io_8py.md">io.py</a>
