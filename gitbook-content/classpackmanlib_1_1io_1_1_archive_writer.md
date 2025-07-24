---
hidden: true
title: ArchiveWriter Class Reference
---

[Data Structures](#nested-classes) \| [Static Public Member Functions](#pub-static-methods)

|  |  |
|----|----|
| Data Structures |  |
| class   | <a href="classpackmanlib_1_1io_1_1_archive_writer_1_1_modified_archive_lister.md">ModifiedArchiveLister</a> |

|  |  |
|----|----|
| Static Public Member Functions |  |
| def  | [write_file](#af9b3f577c2c055f2f1d8168032f83265) (archive, path, fix=True, force_resign=True) |
|   | Write archive to file by recursively walking through the in-memory node tree. [More\...](#af9b3f577c2c055f2f1d8168032f83265)<br/> |
| def  | [write_fileobj](#a2acb76b599b02849510c2e5778053ad8) (archive, fileobj, fix=True, force_resign=True) |
|   | Write archive to file object by recursively walking through the in-memory node tree. [More\...](#a2acb76b599b02849510c2e5778053ad8)<br/> |
| def  | [write_pickled_file](#a9dc1a2b812a7bef1aed7bd4b16a5d4af) (archive, path, gz=False) |
|   | Write pickled file. [More\...](#a9dc1a2b812a7bef1aed7bd4b16a5d4af)<br/> |

## MemberFunction Documentation {#member-function-documentation}

## write_file() <a href="#af9b3f577c2c055f2f1d8168032f83265" id="af9b3f577c2c055f2f1d8168032f83265"></a>

<p>def write_file</p>

static

Write archive to file by recursively walking through the in-memory node tree.

**Parameters**

**archive** archive node **path** path to the file to write to **fix** fix archive before writing **force_resign** True will for resigning even if a signature file is already present

## write_fileobj() <a href="#a2acb76b599b02849510c2e5778053ad8" id="a2acb76b599b02849510c2e5778053ad8"></a>

<p>def write_fileobj</p>

static

Write archive to file object by recursively walking through the in-memory node tree.

**Parameters**

**archive** archive node **fileobj** file object to write to **fix** fix archive before writing **force_resign** True will for resigning even if a signature file is already present

## write_pickled_file() <a href="#a9dc1a2b812a7bef1aed7bd4b16a5d4af" id="a9dc1a2b812a7bef1aed7bd4b16a5d4af"></a>

<p>def write_pickled_file</p>

static

Write pickled file.

**Parameters**

**o** object to pickle **path** path to the pickled file **gz** wether pickled file is gzipped

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- packman/packmanlib/<a href="io_8py.md">io.py</a>
