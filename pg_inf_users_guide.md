---
title: ADK-INF Programmers Guide

---

# ADK-INF Programmers Guide




# Preface

This document is for programmers and developers who want to understand and use the ADK Information Service.


## Audience

This guide provides all the information required for application developers to integrate and utilise the functionality of the ADK Information Service.


## Organization

This guide is organized as follows:

[Introduction]. Provides an overview of the ADK Information Service functionality.

[Getting Started]. Lists coding samples for performing various functions.

[Programming]. Programming advices for actual use-cases.

[System Setup and Requirements]. Describes the build options and deliverables.

[Troubleshooting]. Gives solutions for possible issues in ADK-INF.

[Appendix]. Glossary. Acronym Definitions.


# Introduction

Information Service is a set of components for manipulating data via simple and concise API.


## Concepts

Currently, Information Service provides the following functions:



* Import and export of XML data to and from SQLite database (For more information, please refer to the _ADK Import/Export Utility Programmers Guide, VPN - DOC00666_).
* Storage and manipulation of hierarchical data incorporated in so-called Property DB. A few key points regarding the latter:
    * Provides a way for applications to store name/value pairs, optionally organized into a hierarchy (similar to Windows Registry).
    * The type of a value is determined by choosing the corresponding write function. Read functions convert to the desired type. The following types are supported: INT, DOUBLE, STRING, BINARY. Currently, there is no type enforcement.
    * The database is referenced by a handle obtained using `database``open` / `close` instead of using a string for the database name.

Refer to the following diagram for a better understanding of the ADK Information Service functionality. ![04_inf_util_overview.png](.//04_inf_util_overview.png)Information Service Overview![04_inf_util_overview.png](.//04_inf_util_overview.png)Information Service Overview![04_inf_util_overview.png](.//04_inf_util_overview.png)Information Service Overview![04_inf_util_overview.png](.//04_inf_util_overview.png)Information Service Overview


# Getting Started

This chapter contains coding samples for performing various functions.


## Using the API

In order to use the Property Database API, one must include file `[infodb.h](infodb_8h.md#file-infodb.h)` and link against `libinf` library, either static or shared variant.

There is a Makefile-based project under the `example/` folder. Please note, that build system produces dynamically-linked apps.

V/OS platform prevents applications data files creation in the user directory. Application must use `/home/usr1/flash` directory instead of `/home/usr1/`.

 Accordingly, code 
```cpp

const char *db_name = "test.db";
```

 must be rewritten to 
```cpp

const char *db_name = "flash/test.db"
```

 in examples below for V/OS platform.


## Get version of a library

This is a sample code for getting version of a library. ```cpp

#include <inf/infodb.h>
void main(int argc, char *argv[])
{
    char buf[50] = {0};
    snprintf(buf, sizeof(buf), "info_getVersion %s", info_getVersion());
    printf(buf);
}
```


## Writing Different Types of Data

This is a sample code for writing different data types. ```cpp

#include <inf/infodb.h>

const char *db_name = "test.db";

int main(int argc, char *argv[])
{
    InfoNode node;
    InfoResult rc;
    InfoDBHandle* handle;

    //open with write permissions
    handle = info_opendb(db_name, INFO_READ_WRITE);

    //write integer 10 under "/start" path
    rc = info_writeInt(handle, INFO_ROOT, "start", 10);

    //find node "/start"
    node = info_find(handle, INFO_ROOT, "start");

    //write "5.0" to "/start/2/third" path
    rc = info_writeDouble(handle, node, "2/third", 5.0);

    //find node "/start/2/third"
    node = info_find(handle, node, "2/third");

    //write a string "Hi there" under "/start/2/third/4th"
    rc = info_writeString(handle, node, "4th", "Hi there"); char bin[] = {"HI"};

    //write bin array to "/start/2/third/4th/5th"
    rc = info_writeBinary(handle, node, "5th", bin, sizeof(bin)/ sizeof(bin[0]));

    //close the database 
    info_closedb(handle);
    return 0;
}
```


## Getting a Type of a Node

This is a sample code for getting a node type. ```cpp

#include <stdio.h>
#include <inf/infodb.h>

const char *db_name = "test.db";
int main(int argc, char *argv[])
{
    InfoNode node;
    InfoResult rc;
    InfoDBHandle* handle;
    InfoType type;

    handle = info_opendb(db_name, INFO_READ_WRITE); char bin[20] = {0};

    //write bin array to "/bin" path
    rc = info_writeBinary(handle, INFO_ROOT, "bin", bin, sizeof(bin)/ sizeof(bin[0]));

    //get type of the node just created
    rc = info_getType(handle, INFO_ROOT, "bin", &type);

    //prints "1"
    printf("%d",type == INFO_BINARY);

    //write NULL to "/void" path
    rc = info_writeBinary(handle, INFO_ROOT, "void", 0, 0);

    //get type of the node just created
    rc = info_getType(handle, INFO_ROOT, "void", &type);

    //prints "1"
    printf("%d", type == INFO_VOID);

    //close the database 
    info_closedb(handle);
    return 0;
}
```


## Getting Immediate Children of a Node

This is a sample code for getting the immediate children of a node. ```cpp

#include <stdio.h>
#include <inf/infodb.h>

const char *db_name = "test.db";

int main(int argc, char *argv[])
{
    InfoChildren *i_childs; 
    InfoNode node;
    InfoResult rc;
    InfoDBHandle* handle;

    handle = info_opendb(db_name, INFO_READ_WRITE);

    const char *node_names[]= {"1st_node", "2nd_node"};

    //write "0" to "/start" path
    rc = info_writeInt(handle, INFO_ROOT, "start", 0);

    //find a node under "/start" path
    node = info_find(handle, INFO_ROOT, "start");

    //write "0" to "/start/1st node" path
    rc = info_writeInt(handle, node, node_names[0], 0);

    //write "0" to "/start/2nd node" path
    rc = info_writeInt(handle, node, node_names[1], 0);

    //get a list of children of "/start" node
    rc = info_list(handle, node, "", &i_childs);

    //prints "1"
    printf("%d\n", sizeof(node_names)/sizeof(node_names[0]) == i_childs->count);

    for(int i = 0; i < i_childs->count; i++)
    {
        //prints "1"
            printf("%d\n",!strcmp(node_names[i], i_childs->name[i]));
    }

    //close the database
    info_closedb(handle);
    return 0;
}
```


## Deleting a Node

This is a sample code for deleting a node. ```cpp

#include <stdio.h>
#include <inf/infodb.h>

const char *db_name = "test.db";

int main(int argc, char *argv[])
{
    const char *node_names[]= {"1st node", "2nd node"}; 
    InfoNode node;
    InfoResult rc;
    InfoDBHandle* handle;

    handle = info_opendb(db_name, INFO_READ_WRITE);

    rc = info_writeInt(handle, INFO_ROOT, "start", 0); 
    node = info_find(handle, INFO_ROOT, "start");
    rc = info_writeInt(handle, node, node_names[0], 0); 
    rc = info_writeInt(handle, node, node_names[1], 0);

    //delete node under "/start" path and all of its children 
    rc = info_delete(handle, INFO_ROOT, "start");

    //find node under "/start" path
    node = info_find(handle, INFO_ROOT, "start");

    //prints "1"
    printf("%d", node < 0);

    //close the database
    info_closedb(handle);
    return 0;
}
```


## Find a Path of a Node

This is a sample code for finding a node path. ```cpp

#include <stdio.h>
#include <inf/infodb.h>

const char *db_name = "test.db";

int main(int argc, char *argv[])
{
    InfoNode node;
    InfoResult rc;
    InfoDBHandle* handle;

    handle = info_opendb(db_name, INFO_READ_WRITE);

    rc = info_writeInt(handle, INFO_ROOT, "start", 0);

    //find a path node under "/start"
    node = info_find(handle, INFO_ROOT, "start");

    rc = info_writeInt(handle, node, "second/third", 5);

    //find a path node under "/start/second/third" 
    node = info_find(handle, node, "second/third"); 
    rc = info_writeInt(handle, node, "last/one", 10);

    //find a path node under "/start/second/third/last/one" 
    node = info_find(handle, node, "last/one");

    char* s;

    //get a path of a node
    rc = info_getPath(handle, node, &s);

    //prints "1"
    printf("%d", !strcmp(s, "start/second/third/last/one"));

    //close the database
    info_closedb(handle);
    return 0;
}
```


## Walk a Whole Tree

This is a sample code for walking a whole tree. ```cpp

#include <stdio.h>
#include <inf/infodb.h>

const char *db_name = "test.db";

int callback_types(void *data, const char *path, struct InfoReference *info)
{
    InfoResult rc; 
    InfoType type;
    int ival;
    double dval;
    char *str;
    char *bin; 
    int size;

    //get type of a current node
    info_nodeGetType(info, &type);

    switch(type)
    {
    case INFO_VOID: break;
    case INFO_INTEGER:
        rc = info_nodeReadInt(info, &ival); 
        printf("%d\n", ival);
        break;
    case INFO_NUMBER: 
        rc = info_nodeReadDouble(info, &dval); 
        printf("%f\n", dval);
        break;
    case INFO_STRING:
        rc = info_nodeReadString(info, &str); 
        printf("%s\n", str);
        break;
    case INFO_BINARY: 
        rc = info_nodeReadBinary(info, (void **)&bin, &size); 
        printf("Got binary of size :%d\n", size);
        break;

    }

    return 0;
}

int main(int argc, char *argv[])
{
    InfoNode node;
    InfoResult rc;
    InfoDBHandle* handle;

    handle = info_opendb(db_name, INFO_READ_WRITE);

    //write "10" to "/start" path
    rc = info_writeInt(handle, INFO_ROOT, "start", 10);

    //find node under "/start"
    node = info_find(handle, INFO_ROOT, "start");

    //write "5.0" to "/start/2/third"
    rc = info_writeDouble(handle, node, "2/third", 5.0);

    //write "Hi there" to "/start/2/third/4th"
    rc = info_writeString(handle, node, "2/third/4th", "Hi there");

    char bin[] = {"HI"};
    //write "Hi there" to "/start/2/third/4th"
    rc = info_writeBinary(handle, node, "2/third/5th", bin, sizeof(bin)/ sizeof(bin[0]));

    //would print "10", "5.0", "Hi there", "Got binary of size 3"
    rc = info_walkTree(handle, INFO_ROOT, "", callback_types, NULL);

    info_closedb(handle);
    return 0;
}
```


## Automatic commit and manual transaction

This is a sample code for autocommit and manual transaction. ```cpp

#include <stdio.h>
#include <inf/infodb.h>

const char *db_name = "test.db";
int main(int argc, char *argv[])
{
    InfoNode node;
    InfoResult rc;
    InfoDBHandle* handle;
    int read_value;

    handle= info_opendb(db_name, INFO_READ_WRITE);
    rc = info_writeInt(handle, INFO_ROOT, "start", 1);

    // disable default autocommit
    rc = info_autocommit(handle, 0);

    // set manual transaction startpoint
    rc = info_transactionBegin(handle);
    rc = info_writeInt(handle, INFO_ROOT, "start2", 1);
    // rollback to initial state
    rc = info_transactionRollback(handle);

    rc = info_readInt(handle, INFO_ROOT, "start", &read_value);
    printf("\"start\" read rc: %d (expected: %d)\n", rc, INFO_OK);
    rc = info_readInt(handle, INFO_ROOT, "start2", &read_value);
    printf("\"start2\" read rc: %d (expected: %d)\n", rc, INFO_NOT_FOUND);

    info_closedb(handle);
    return 0;
}
```


# Programming

This section contains programming advices.


## Multithreading

ADK-INF has full multithreading support since version 1.5.1. Different multithreading modes are described at [https://www.sqlite.org/threadsafe.html](https://www.sqlite.org/threadsafe.html) link. So, ADK-INF supports all three modes:

* "Single-thread",
* "Multi-thread",
* "Serialized",


## Good practice

It is not prohibited to access same DB by read/write (`libinf`) and import/export (`libinf_util`) functions simultaneously, but it is not recommended, due to frequent collision errors (`INFO_NOT_FOUND`, `INFO_BUSY`, or `INFO_E_DB_INSERT`), returned by both libraries.

`libinf` and `libinf_util` libraries usage good practice:

1. Application get InfoDB* handle from `info_opendb` function and uses it for the `info_read/info_write/info_walk/…` functions in concurrent manner for all threads.
2. Application stops `libinf` function usage (or just close InfoDB* handle) before `info_import/info_export` functions usage.
3. Application resumes `libinf` function usage (or reopen InfoDB* handle).

These recommendations are also suitable for the handle received directly from SQLite engine (as it is for not hierarchical tables), instead of ADK-INF `info_opendb` function.

Please note that `info_opendb` and `info_closedb` are relatively resource-intensive functions, comparing to `info_read/info_write`. This is a reason to keep DB opened all application running time.


## Notes on Hierarchical Property Database API


### Paths for accessing values

Within the hierarchical storage nodes form a tree and are addressed by a path similar to a path in a file system. The path consists of a sequence of node names separated by a single '/', e.g. a/b/c would address node c that is child of node b which is a child of a. Paths are relative to a parent node that has to be provided as separate parameter. The root of the tree is represented by the node `INFO_ROOT`. Node names should be restricted to the following characters: [a-zA-Z0-9-_.@], whitespace and quotes ('") are not allowed. For obvious reasons '/' cannot be used within a node name. Unlike in file systems '.' and '..' have no special meaning. Providing `NULL` as path is equivalent of providing an empty path ("") which refers to the provided parent node. 


### INFO_ROOT

`INFO_ROOT` is a special node that is always present. Trying to delete [INFO_ROOT](group__propdb.md#enumvalue-info-root) will just reset its associated value.


# System Setup and Requirements


## Compiler and Linker Settings

An application that uses the InfoSvc functionality can be built either as a **monolithic** (statically linked) executable, or as a **dynamically linked executable**.

The first option combines all used libraries together with the application code into one complete executable file.

The second option relies on the OS’s dynamic linker to load necessary shared libraries on application startup. The required libraries must be loaded to the terminal together with the application.

The sections below assume the libraries are extracted into the `import/<platform>/lib` directory, where <platform> is either **"vos"** or **"vos2"**.


### Monolithic Binary

In order to build a statically linked binary with the ADK Infomation Service libraries, one must link against the following libraries.

In the form of `-l<name>` options to gcc:

* `-linf-static`
* `-lsqlite-static`


### Dynamic Binary

Dynamic libaries are listed below.

In the form of `-l<name>` options to gcc:

* `-linf`
* `-lsqlite`


## Deliverables

This chapter lists the components of the ADK Information Service library.


### V/OS

Folder locations and descriptions of each file are provided below:



* `include/`
    * `inf/`
        * `[infodb.h](infodb_8h.md#file-infodb.h)` – hierarchical database API
        * `[inf_util.h](inf__util_8h.md#file-inf-util.h)` – import/export API
        * `inf_util/`
            * `backend_api.h` – declarations for backend API
            * `StaticRegistry.h` – facility for registering static backends
            * `[types.h](types_8h.md#file-types.h)` – typedefs
* `lib/`
    * `libinf.so`, `libinf.so.1` – library for working with hierarchical store, shared object
    * `libinf-static.a` – the same, statically compiled
    * `libinf_util.so`, `libinf_util.so.1` – import/export library, shared object
    * `libinf_util-static.a` – the same, statically compiled
    * `libinf_util_sqlite-static.a` – import/export SQLite database backend, static library
    * `libinf_util_xmlfile-static.a` – import/export XML file backend, static library lib
* `load/`
    * `dl.libinf`.<`VER>`.`tgz` – Property DB package
    * `dl.libinf-remove.tgz` – Property DB removal package
    * `dl.libinf_util`.<`VER>`.`tgz` – Import/Export library package
    * `dl.libinf_util-remove.tgz` – Import/Export library removal package


### doc

Folder locations and descriptions of each file are provided below:



* `inf/`
    * `example/`
        * contains example projects for InfoSvc and InfoSvc utility
        * `config-module/` – contains XML files which can be used to test import functionality, i.e. schema are in sync with data file.
    * `doc/` – contains files used on Confluence page
    * `schema/`
        * `datafile.xsd` – XSD schema for validating user’s file schemas
        * `db.xsd` – XSD schema for validating user’s database schemas
    * `hierarchical_schemas/`
        * `adk_inf_propdb.xml` - DB schema for import/export to/from hierarchical DB
        * `file_format.xml` - data schema for import/export to/from hierarchical DB


## External code sources versions




* ADK-DB-SQLITE, built on SQLite version 3.49.1;
* ADK-EXPAT, built on Expat version 2.1.1.


# Troubleshooting


## Logging

ADK-INF uses "new" logging method via configuration file in JSON format. Please refer to the ADK-LOG documentation for details.

 The logging ID for this component is `"INF"`. In order to lookup the corresponding configuration file, ADKLOG uses component identifiers, which are reserved for each ADK component. For the `INF` component, configuration file is `INF_log.conf`

## Performance Optimization

`info_opendb` and `info_closedb` are relatively resource-intensive functions, comparing to `info_read/info_write`. This is a reason to keep DB opened all application running time.

Another hint for the `libinf` functions execution time reducing, is autocommit disabling for the continuous DB write operations. Here is code snippet, demonstrating this approach: ```cpp

info_setOptions(handle, INFO_OPT_DISABLE_AUTOCOMMIT); // this is same as info_autocommit(handle, 0);
rc = info_transactionBegin(handle);
while(parameters[i].name)
{
    rc = info_writeString(handle, INFO_ROOT, parameters[i].name, parameters[i].value);
}
rc = info_transactionCommit(handle);
info_setOptions(handle, 0); // reset to default
```

Please refer to [Automatic commit and manual transaction] for another autocommit example.


# Appendix


## Glossary


| Term  | Description   |
|  -------- | -------- |
| Database schema  | Metafile for describing database internal schema. Not to be confused with database schema.   |
| File schema / file format  | Metafile for describing XML file structure. Not to be confused with XSD schema.   |
| libinf  | DB library   |
| libinf-util  | Import/export library   |
| Property DB / hierarchy DB  | info_ API for creating registry-like database.   |



## Acronym Definitions


| Acronym  | Definitions   |
|  -------- | -------- |
| ADK  | Application Development Kit   |
| API  | Application Protocol Interface   |
| OS  | Operating System   |

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100
