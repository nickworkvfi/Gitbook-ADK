---
title: ADK-INF-UTIL Programmers Guide

---

# ADK-INF-UTIL Programmers Guide




# Preface

This document is for programmers and developers who want to understand and use the ADK Information Service Import/Export Utility.


## Audience

This guide provides all the information required for application developers to integrate and utilise the functionality of the ADK Information Service Import/Export Utility.


## Organization

This guide is organized as follows:

[Introduction], Provides a summary of the Import/Export utility.

[Getting Started]. Lists coding samples for performing various functions.

[Programming]. Detailed features descriptions.

[System Setup and Requirements] Describes the build options and deliverables.

[Troubleshooting]. Gives solutions for possible issues in ADK-INF-UTIL.

[Appendix]. Acronym Definitions. Describes the XMSD schemas for Import/Export meta files.


# Introduction

This chapter explains the basic functionality and purpose of the Import/Export utility.


## Concepts

Information Service is a set of components for manipulating data via simple and concise API. ![04_inf_util_overview.png](.//04_inf_util_overview.png)Information Service![04_inf_util_overview.png](.//04_inf_util_overview.png)Information Service![04_inf_util_overview.png](.//04_inf_util_overview.png)Information Service![04_inf_util_overview.png](.//04_inf_util_overview.png)Information Service

Currently it provides two distinct pieces of functionality:

* Import and export of XML data to and from SQLite database
* Storage and manipulation of hierarchical data incorporated in so-called Property DB (more info in **inf-programmers-guide.pdf**)

The purpose of Import/Export utility are:

* to simplify initial application's database population from a data file;
* to facilitate application's database import/export from/to TMS.

Conceptually, it has four sources of information:

* definition of database schema
* definition of a data file format to be imported/exported
* the data file
* mapping instructions for the tool on how to convert the data between the “internal” database schema and “external” data file format (currently is omitted from the processes of import/export).

Please see [Features Not Implemented Features] for the list of features not included in the current implementation.


# Getting Started

Makefile-based project with some of the most common use-cases can be found under **doc/inf/example/** folder. Please note, that build system produces dynamically-linked apps.

V/OS platform prevents applications data files creation in the user directory. Application must use /home/usr1/flash directory instead of /home/usr1/.

 Accordingly, code 
```cpp

const char *db_name = "test.db";
```

 must be rewritten to 
```cpp

const char *db_name = "flash/test.db"
```

 for instance in examples below for V/OS platform.


## Importing data into a database

```cpp

#include <inf/inf_util.h>

const char *db_name = "test.db”; 

int main(int argc, char *argv[])
{
    ErrorInfo err;
    ErrorCode rc = info_import("file_format.xml", "database_schema.xml", db_name, "file_data.xml", &err);
    // check err 
    error_info_free(&err);
    return 0;
}
```


## Exporting data from a database

```cpp

#include <inf/inf_util.h>

const char *db_name = "test.db”; 

int main(int argc, char *argv[])
{
    ErrorInfo err;
    ErrorCode rc = info_export("file_format.xml", "database_schema.xml", db_name, "output_data.xml", &err);
    // check err 
    error_info_free(&err);
    return 0;
}
```


## Importing data with “info_partial_import_property_db” function

```cpp

#include <inf/inf_util.h>

const char *db_name = "test.db”;

int main(int argc, char *argv[])
{
    ErrorInfo err;
    ErrorCode rc;
    InfoDBHandle *handle = NULL;
    char* str_value = NULL;

    handle = info_opendb(db_name, INFO_READ_WRITE);
    info_writeString(handle, INFO_ROOT, "com/verifone/adk/version", "0.9");
    info_writeString(handle, INFO_ROOT, "just_name", "just_value");
    info_closedb(handle);
    
    rc = info_partial_import_property_db(db_name, "sample_prop_data_4.xml", &err);
    // check err
    error_info_free(&err);
    
    handle = info_opendb(db_name, INFO_READ_WRITE);
    info_readString(handle, INFO_ROOT, "com/verifone/adk/version", &str_value);
    if(str_value && 0 == strcmp(str_value, "1.5"))
    {
            //success, initial value is updated to “1.5”
    }
    info_readString(handle, INFO_ROOT, "just_name", &str_value);
    if(str_value && 0 == strcmp(str_value, "just_value"))
    {
        //success, initial record remained after partial import
    }
    return 0;
}
```


# Programming

This section contains detailed features descriptions.


## Detailed Definitions

The following chapter covers the database schema, logical types, schema mapping, and data file formats in detail.


### Description of Processing Logic

In order to perform its function, the utility uses two pieces of metadata:

* Description of a database schema (the part of it that participates import/ export)
* Description of data file format

These inputs are fed to the utility in the form of XML files.

![05_inf_util_Schematic_Depiction_of_Import_Process.png](.//05_inf_util_Schematic_Depiction_of_Import_Process.png)Schematic Depiction of “Import” Process![05_inf_util_Schematic_Depiction_of_Import_Process.png](.//05_inf_util_Schematic_Depiction_of_Import_Process.png)Schematic Depiction of “Import” Process![05_inf_util_Schematic_Depiction_of_Import_Process.png](.//05_inf_util_Schematic_Depiction_of_Import_Process.png)Schematic Depiction of “Import” Process![05_inf_util_Schematic_Depiction_of_Import_Process.png](.//05_inf_util_Schematic_Depiction_of_Import_Process.png)Schematic Depiction of “Import” Process

![06_inf_util_Schematic_Depiction_of_Export_Process.png](.//06_inf_util_Schematic_Depiction_of_Export_Process.png)Schematic Depiction of “Export” Process![06_inf_util_Schematic_Depiction_of_Export_Process.png](.//06_inf_util_Schematic_Depiction_of_Export_Process.png)Schematic Depiction of “Export” Process![06_inf_util_Schematic_Depiction_of_Export_Process.png](.//06_inf_util_Schematic_Depiction_of_Export_Process.png)Schematic Depiction of “Export” Process![06_inf_util_Schematic_Depiction_of_Export_Process.png](.//06_inf_util_Schematic_Depiction_of_Export_Process.png)Schematic Depiction of “Export” Process


### Types

In order to perform its functions, the utility needs information about a logical type of an element. Therefore it defines the following list of data types:

* INTEGER
* FLOAT
* BOOL
* TEXT
* BLOB
* DATETIME

See examples and definitions below.


### Extensibility (different back ends)

In order to create an extensible solution, the following approach is chosen for meta information files and application code:

* all meta-data files are in XML format
* XML Schemas (see [Appendix]) are provided for meta-data files so these can be validated by developers
* each back end library will understand the same base schema of the XML meta information. A schema can be supplied extended attributes in the form of `<xattr>` elements
* meta-data file will specify which back end it uses: database schema definition mush include `backend="sqlite"` , and data file format description should define `filter="xmlfile"`. Thus import/export utility will read the back end name to be used and will invoke it.

See examples and definitions below.


### Database Schema Description

Database schema description defines **tables** and **columns** with their data types.

All this information is translated into a language of an underlying database, that is, in the case of SQLite, the utility will be able to synthesize `CREATE``TABLE`, `SELECT` and `INSERT` statements from the schema description.

The generic database schema description has the following limitations:

* Only tables are supported (i.e. no views, indexes, or other database objects)
* Only the following column SQL constraints are supported:
    * `NOT``NULL`
    * `PRIMARY``KEY`
    * `DEFAULT`

`sample-db-schema.xml`: Database Schema Description sample ```xml

<?xml version="1.0" encoding="UTF-8"?>
<db:schema xmlns:db="http://www.verifone.com/adk/information-service/schema/db" backend="sqlite" library_version="1.7.1">
    <table create="true" name="CONFIG">
        <column name="KEY" type="TEXT" primary_key="true" nullable="false" />
        <column name="VALUE" type="TEXT" />
    </table>
</db:schema>
```

XML examples used in this guide can also be obtained from `doc/inf/example/pkg/` folder (file names are preserved).


### Data File Format Description

Just as database schema description, data file format description defines **records** (“tables” in DB schema) and **fields** (“columns” in DB schema) with types and back end-specific attributes like locations of these elements in the file (e.g. `<xattr` name=”path”>).

The data file format description will provide the following information:

* names of records
* names of fields in the records and their logical data types. Type information will be needed by e.g. TMS in order to manipulate and validate the contents of data files.
* backend-specific (like `<xattr` name=”path”> for XML mentioned above)

sample-file-format.xml: Data File Format Description sample ```xml

<?xml version="1.0" encoding="UTF-8"?>
<f:format xmlns:f="http://www.verifone.com/adk/information-service/schema/datafile" filter="xmlfile" library_version="1.7.1">
    <record_type name="CONFIG">
        <xattr name="path" value="/config/key" />
        <field name="KEY" type="TEXT">
            <xattr name="path" value="name" />
        </field>
        <field name="VALUE" type="TEXT">
            <xattr name="path" value="value" />
        </field>
    </record_type>
</f:format>
```


### Schema Mapping Instructions

Conceptually, schema mapping instructions should map tables to tables, and within each table, columns to columns, making type or/and name conversions on the way.

Currently the schema mapping is not defined by a separate XML file. It is implied by the following restrictions:

* names of tables and columns in database schema description must match names of corresponding record types and fields in data file format description
* record structures of database tables must match the structure of corresponding records in data file, or missing fields should allow NULL values or have default values defined.


### Binary Data Embedding into XML data file

Binary data in XML data file are encoded by Base64 encoding. XML tag in this case must contain appropriate attribute, which indicates Base64 encoding. Here is an example of XML data file containing base64 encoded data

```xml

<?xml version="1.0" encoding="utf-8"?>
<data>
    <key>
        <node_name>somedata</node_name>
        <value types:dt="base64binary" xmlns:types="http://www.w3.org/2001/XMLSchema">
            SGVsbG8gV29ybGQh
        </value>
    </key>
</data>
```

And example for [Example 4 (simple format with compound names)] case of XML data format. ```xml

<?xml version="1.0" encoding="utf-8"?>
<data>
  <Tag Name='somedata' types:dt='base64binary' xmlns:types='http://www.w3.org/2001/XMLSchema' Value='SGVsbG8gV29ybGQh'>
</data>
```


## Hierarchical Data Handling

The Import/Export utility is able to work with hierarchical data, such as database created by Information Service's Property Database API. Data hierarchy is defined by linking “parent” and “child” records by certain rules:

* in a **database**, by keeping `ID` and `PARENT_ID` fields in each record, where `PARENT_ID` would contain `ID` of a parent record, or `NULL` if it is a top-level record. For the Property Database, top-level record is `INFO_ROOT` (defined in `[infodb.h](infodb_8h.md#file-infodb.h)`).
* in a **data file**, by expressing record hierarchy via file structure. For example, in the case of XML, child record XML elements could be nested within parent record XML elements. See [Example 1 (structure)].
* in a **data file**, by coding the hierarchy into compound name of the record. For example, record with `ID` of "com.verifone.adk" suggests that its parent is a record with the name "com.verifone", whose parent is a record with a name “com”. See [Example 2 (compound names)].


### Example 1 (structure)

`sample_prop_db_schema.xml:` database schema description for Property Database ```xml

<?xml version="1.0" encoding="UTF-8"?>
<db:schema xmlns:db="http://www.verifone.com/adk/information-service/schema/db" backend="sqlite" library_version="1.7.1">
    <table name="REGISTRY" create="true" topology="hierarchical" parent_id="ID" child_link="PARENT_ID">
        <column name="ID" type="INTEGER" primary_key="true" nullable="false" />
        <column name="PARENT_ID" type="INTEGER" />
        <column name="NODE_NAME" type="TEXT" nullable="false" />
        <column name="VALUE" type="TEXT" />
    </table>
</db:schema>
```

 sample_prop_xml_format.xml: file format description for Property Database ```xml

<?xml version="1.0" encoding="UTF-8"?>
<f:format xmlns:f="http://www.verifone.com/adk/information-service/schema/datafile" filter="xmlfile" library_version="1.7.1">
    <record_type name="REGISTRY" topology="hierarchical" parent_id="ID" child_link="PARENT_ID" connect_by="structure">
        <xattr name="path" value="/data/REGISTRY-DB/key" />
        <xattr name="child_path" value="key" />
        <field name="NODE_NAME" type="TEXT">
            <xattr name="path" value="name" />
        </field>
        <field name="VALUE" type="TEXT">
            <xattr name="path" value="value" />
        </field>
        <field name="ID" type="INTEGER" hidden="true" />
        <field name="PARENT_ID" type="INTEGER" hidden="true" />
    </record_type>
</f:format>
```

`hidden=”true”` means that following element will not be exported.

`<connect_by="structure">` attribute defines data file processing strategy.

`<xattr``name="path"``value="/data/REGISTRY-DB/key">` sets XML path to element from which we start the import.

`<xattr``name="child_path"``value="key">` describes XML tag which should be interpreted as start of child node.

`xattr``name="path"` after field describes which XML tag correspondents to current database field. They can be different.


Input/resulting data file: `sample_prop_data.xml:` XML data file ```xml

<?xml version="1.0" encoding="UTF-8"?>
<data>
    <REGISTRY-DB>
        <key>
            <name>com</name>
            <key>
                <name>verifone</name>
                <key>
                    <name>adk</name>
                    <key>
                        <name>version</name>
                        <value>1.5</value>
                    </key>
                    <key>
                        <name>release_date</name>
                        <value>2014-08-15</value>
                    </key>
                </key>
                <key>
                    <name>sdk</name>
                    <value>1.0</value>
                </key>
            </key>
        </key>
    </REGISTRY-DB>
</data>
```


### Example 2 (compound names)

Using the same database schema description, one can work with another representation of the hierarchical property data in XML. The following example presents a more compact way to encode the same data using compound names of data records.

Although a '.' character is allowed to appear in a node name, this character should not be used if it is planned to export the created database through `[info_export()](group__inf__util__public.md#function-info-export)` API in "compound names" format.

database schema is the same as in the preceding example.

`sample_prop_xml_format_2.xml:` XML file format #2 for Property Database ```xml

<?xml version="1.0" encoding="UTF-8"?>
<f:format xmlns:f="http://www.verifone.com/adk/information-service/schema/datafile" filter="xmlfile" library_version="1.7.1">
    <record_type name="REGISTRY" topology="hierarchical" connect_by="name" name_field="NODE_NAME" parent_id="ID" child_link="PARENT_ID">
        <xattr name="path" value="/data/REGISTRY-DB/key" />
        <field name="NODE_NAME" type="TEXT">
            <xattr name="path" value="name" />
        </field>
        <field name="VALUE" type="TEXT">
            <xattr name="path" value="value" />
        </field>
        <field name="ID" type="INTEGER" hidden="true" />
        <field name="PARENT_ID" type="INTEGER" hidden="true" />
    </record_type>
</f:format>
```

`hidden="true"` means that following element will not be exported. 

 Attribute `connect_by` has the value `"name"`, and attribute `name_field` specifies the data field that contains the compound name of the record.


Input/resulting data file:

`sample_prop_data_2.xml:` XML data file #2 ```xml

<?xml version="1.0" encoding="UTF-8"?>
<data>
    <REGISTRY-DB>
        <key>
            <name>com.verifone.adk.version</name>
            <value>1.5</value>
        </key>
        <key>
            <name>com.verifone.adk.release_date</name>
            <value>2014-08-15</value>
        </key>
        <key>
            <name>com.verifone.sdk</name>
            <value>1.5</value>
        </key>
    </REGISTRY-DB>
</data>
```


### Example 3 (IDs)

Exact specifying of `ID` and `PARENT_ID` for the every element.

Database schema is the same as in the preceding example.

`sample_prop_xml_format_3.xml:` XML file format #3 for Property Database ```xml

<?xml version="1.0" encoding="UTF-8"?>
<f:format xmlns:f="http://www.verifone.com/adk/information-service/schema/datafile" filter="xmlfile" library_version="1.7.1">
    <record_type name="REGISTRY" topology="hierarchical" parent_id="ID" child_link="PARENT_ID" connect_by="structure">
        <xattr name="path" value="/data/REGISTRY-DB/key" />
        <xattr name="child_path" value="key" />
        <field name="NODE_NAME" type="TEXT">
            <xattr name="path" value="name" />
        </field>
        <field name="VALUE" type="TEXT">
            <xattr name="path" value="value" />
        </field>
        <field name="ID" type="INTEGER" hidden="false">
            <xattr name="path" value="id" />
        </field>
        <field name="PARENT_ID" type="INTEGER" hidden="false">
            <xattr name="path" value="parent_id" />
        </field>
    </record_type>
</f:format>
```

Input/resulting data file:

`sample_prop_data_3.xml:` XML data file #3 ```xml

<?xml version="1.0" encoding="UTF-8"?>
<data>
    <REGISTRY-DB>
        <key>
            <id>0</id>
            <parent_id>-1</parent_id>
            <name />
            <key>
                <id>1</id>
                <parent_id>0</parent_id>
                <name>com</name>
                <key>
                    <id>2</id>
                    <parent_id>1</parent_id>
                    <name>verifone</name>
                    <key>
                        <id>3</id>
                        <parent_id>2</parent_id>
                        <name>adk</name>
                        <key>
                            <id>4</id>
                            <parent_id>3</parent_id>
                            <name>version</name>
                            <value>1.5</value>
                        </key>
                        <key>
                            <id>5</id>
                            <parent_id>3</parent_id>
                            <name>release_date</name>
                            <value>2014-08-15</value>
                        </key>
                    </key>
                    <key>
                        <id>6</id>
                        <parent_id>2</parent_id>
                        <name>sdk</name>
                        <value>1.0</value>
                    </key>
                </key>
            </key>
        </key>
    </REGISTRY-DB>
</data>
```

XML structure in this example is just for better interpretation of nodes relationship. Here can be plain list of nodes with specified `ID` and `PARENT_ID`.

It is some kind of binary tree: by changing only one `PARENT_ID` (by function `[info_partial_import()](group__inf__util__public.md#function-info-partial-import)` call) we can move whole branch of subnodes.


### Example 4 (simple format with compound names)

Only one XML file containing input data is needed. This is shortest and easiest way for data importing into property database.

`sample_prop_data_4.xml:` XML data file #4 ```xml

<?xml version="1.0" encoding="UTF-8"?>
<data>
    <Tag Name='com/verifone/adk/release_date' Value='2014-08-15'/>
    <Tag Name='com/verifone/adk/version' Value='1.5'/>
    <Tag Name='com/verifone/sdk' Value='1.0'/>
</data>
```

This type of XML data is for property database table only, so it does not contain table name ("REGISTRY").

 Special functions `info_import_property_db` and `info_export_property_db` should be used for this short type of data file.

 Back end functionality is not supported by these functions: they use `sqlite` (via `libinf`) and `expat` libraries straightly.


## Advanced Import Options

Advanced import options (aka "Refresh of the Import Format") is available from the ADK-INF 1.13.0 version.

There is basic [info_partial_import()](group__inf__util__public.md#function-info-partial-import) function for the "partial" data importing purposes in the inf_util libary: ```cpp

INF_UTIL_API ErrorCode  info_partial_import(const char *dataSchemaFile, const char *dbSchemaFile, const char *dbName, const char *inputFileName, ErrorInfo* error);
```

This functions handle three new types of operations:

* record insertion (creation) – where a new record for a specified table is supplied and added to the table;
* update of one or more fields in a record – where only the data for the fields being updated along with the record primary key are provided and the record is updated in the specified table;
* record deletion – where an existing record in a specified table is identified by its record primary key and removed from the table.

New operations are differentiated by special XML attribute "action" values:

* action="insert_new"
* action="update_fields"
* action="delete_record"
* action="insert_or_update" - default mode, applied also if "action" attribute is not specified.

This attribute must belong to predefined XML namespace: ```xml

xmlns:d="http://www.verifone.com/adk/information-service/action"
```


### Plain db example

So, whole data file example, that uses new attribute may looks so for a relational ("plain") db: ```xml

<data>
    <STATIC_IP_CONFIG d:action="insert_new" xmlns:d="http://www.verifone.com/adk/information-service/action">
        <SETUP >
            <STATIC_IP_CONFIG_PROFILE_ID>1</STATIC_IP_CONFIG_PROFILE_ID>
            <TERMINAL_IP>A.B.C.D</TERMINAL_IP>
            <SUBNET_MASK>A1.B1.C1.D1</SUBNET_MASK>
            <GATEWAY_ADDRESS>A2.B2.C2.D2</GATEWAY_ADDRESS>
            <DNS_PRIMARY_ADDRESS>A3.B3.C3.D3</DNS_PRIMARY_ADDRESS>
            <DNS_SECONDARY_ADDRESS>A4.B4.C4.D4</DNS_SECONDARY_ADDRESS>
        </SETUP>
        <SETUP d:action="update_fields">
            <STATIC_IP_CONFIG_PROFILE_ID>2</STATIC_IP_CONFIG_PROFILE_ID>
            <GATEWAY_ADDRESS>A5.B5.C5.D5</GATEWAY_ADDRESS>
        </SETUP>
        <SETUP d:action="delete_record">
            <STATIC_IP_CONFIG_PROFILE_ID>3</STATIC_IP_CONFIG_PROFILE_ID>
        </SETUP>
    </STATIC_IP_CONFIG>
</data>
```

 , where "insert_new" action is defined for the whole STATIC_IP_CONFIG tag scope, which is overridden for the second row as "update_fields", and "delete_record" for the third row respectively.

 Hierarchical XML data file can be represented in four variants (as it also listed in [Hierarchical Data Handling] section):


### Example 1 (structure)

```xml

<data>
    <REGISTRY-DB d:action="update_fields" xmlns:d="http://www.verifone.com/adk/information-service/action">
        <key>
            <node_name>Server</node_name>
            <key>
                <node_name>Validate_Protocol_Hostname</node_name><value>0</value>
            </key>
        </key>
        <key>
            <node_name>VHQ</node_name>
            <key d:action="insert_new">
                <node_name>UploadFileSize</node_name><value>2048</value>
            </key>
        </key>
        <key>
            <node_name>Proxy_Agent</node_name>
            <key d:action="delete_record">
                <node_name>PPPauthtype</node_name>
            </key>
        </key>
    </REGISTRY-DB>
</data>
```


### Example 2 (compound names)

```xml

<?xml version="1.0" encoding="utf-8"?>
<data>
    <REGISTRY-DB d:action="update_fields" xmlns:d="http://www.verifone.com/adk/information-service/action">
        <key>
            <node_name>Server.Validate_Protocol_Hostname</node_name><value>0</value>
        </key>
        <key d:action="insert_new">
            <node_name>VHQ.UploadFileSize</node_name><value>2048</value>
        </key>
        <key d:action="delete_record">
            <node_name>Proxy_Agent.PPPauthtype</node_name>
        </key>
    </REGISTRY-DB>
</data>
```


### Example 3 (IDs)

```xml

<?xml version="1.0" encoding="utf-8"?>
<data>
    <REGISTRY-DB d:action="update_fields" xmlns:d="http://www.verifone.com/adk/information-service/action">
        <key>
            <id>5</id><value>0</value>
        </key>
        <key d:action="insert_new">
            <id>39</id><parent_id>2</parent_id><node_name>UploadFileSize</node_name><value>2048</value>
        </key>
        <key d:action="delete_record">
            <id>53</id>
        </key>
    </REGISTRY-DB>
</data>
```


### Example 4 (simple format with compound names)

```xml

<?xml version="1.0" encoding="utf-8"?>
<data d:action="update_fields" xmlns:d="http://www.verifone.com/adk/information-service/action">
    <Tag Name="Server.Validate_Protocol_Hostname" Value="0"/>
    <Tag d:action="insert_new" Name="VHQ.UploadFileSize" Value="2048"/>
    <Tag d:action="delete_record" Name="Proxy_Agent.PPPauthtype"/>
</data>
```


### Hierarchical db "Before" and "After"

Above listed examples change initial hierarchical db: ![07_h_initial.png](.//07_h_initial.png)![07_h_initial.png](.//07_h_initial.png)![07_h_initial.png](.//07_h_initial.png)![07_h_initial.png](.//07_h_initial.png)

to the ![08_h_after.png](.//08_h_after.png)![08_h_after.png](.//08_h_after.png)![08_h_after.png](.//08_h_after.png)![08_h_after.png](.//08_h_after.png)

Here are three actions performed:

1. Value updating for the "Server.Validate_Protocol_Hostname" element name.
2. Inserting of "VHQ.UploadFileSize" element with value " 2048".
3. Deleting row with name equal to "Proxy_Agent.PPPauthtype".

"Example 3 (IDs)" do the same but by specifying ID instead of node_name's path.

Data file examples as well as database schemas and file format schemas can be found in **doc/inf/example/pkg/** folder (file names are preserved).

 For the plain db:

* ref_database_schema.xml
* ref_file_format.xml
* ref_file_data.xml

, and

* ref_h_database_schema.xml
* ref_h_file_format.xml
* ref_h1_file_data.xml
* ref_h2_file_format.xml
* ref_h2_file_data.xml
* ref_h3_file_data.xml
* ref_h4_file_data.xml

for the hierarchical db.


### NOT_FOUND error handling

NOT_FOUND is error specific for the

* "update_fields"
* "delete_record"

actions.

It is possible to skip this type error with the `d:error="ignore_record_not_found"` attribute.

 So, whole XML example may looks so: ```xml

<?xml version="1.0" encoding="utf-8"?>
<data xmlns:d="http://www.verifone.com/adk/information-service/action">
    <Tag d:error="ignore_record_not_found" d:action="delete_record" Name='some_name'/>
</data>
```

 for the forth import format [Example 4 (simple format with compound names)].

As well as for `d:action` attribute, `d:error` attribute can be placed in any XML tag scope: ```xml

<?xml version="1.0" encoding="utf-8"?>
<data d:error="abort_record_not_found" xmlns:d="http://www.verifone.com/adk/information-service/action">
    <REGISTRY-DB d:action="insert_new" d:error="ignore_record_not_found">
        <key d:action="delete_record">
            <node_name>Server.some_node</node_name>
        </key>
    </REGISTRY-DB>
</data>
```

Resulting "Server.some_node" node action will be "delete_record", with ignoring NOT_FOUND error. This example stands for the second import format [Example 2 (compound names)]. 

`d:error="abort_record_not_found"` is opposite attribute value. This is also default behavior of Infoservice.


## Conditional Import

There is "conditional" attribute for the conditional import. This attribute must belong to predefined XML namespace, the same as per as "action" and "ignore_record_not_found" attributes explained above: ```xml

xmlns:d="http://www.verifone.com/adk/information-service/action"
```

Following regexp constructs are supported:
`"*"`&nbsp;&nbsp;&nbsp;(an "asterix") matches zero or more characters
`"."`&nbsp;&nbsp;&nbsp;&nbsp;(a dot)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; matches any single character


 Both DB types are supported: hierarchical and plain. Below is an example for the hierarchical database that uses both, "action" and "condition" attributes. ```xml

 <?xml version="1.0" encoding="utf-8"?>
<data>
    <REGISTRY-DB d:action="update_fields" xmlns:d="http://www.verifone.com/adk/information-service/action">
        <key d:condition="401-*-93."><node_name>ETH0</node_name>
            <key>
                <node_name>IP_address</node_name<value>123.123.123.123</value>
            </key>
        </key>
        <key d:condition="540-007-730"><node_name>ETH0</node_name>
            <key>
                <node_name>IP_address</node_name<value>123.123.123.124</value>
            </key>
        </key>
   </REGISTRY-DB>
</data>
```

 Importing function with additional parameter `const char *condition` should be used for XML import with a conditional string. Appropriate code for the above XML example ```cpp

info_partial_import_property_db("test.db", "flash/hc4data01.xml", 401-231-93, &error);
```

 will update `"ETH/IP_address"` node to the `"123.123.123.123"` value.


## Error Handling


### On Error



* import/export process aborts,
* function returns code different from INFO_E_OK,
* "ErrorInfo* error" structure contains following information:

```cpp

typedef struct
{
    ErrorCode errorCode;    // final error code
    char* shortMessage;     // short message that can be shown to the end user
    char* location;         // location of the faulty object. Can be file name, file/line, or database table.
    char* extendedMessage;  // message that provides details of the failure
} ErrorInfo;
```

`ErrorInfo*``error` is the last parameter of the import/export function.

 Example of filled "ErrorInfo" structure: ```cpp

INFTEST:F:test_import2.cpp|L:00310|ErrorInfo:
{
-14
database delete operation failed
resource/h3data03.xml:6
Record was not found for the 'delete' action in the 'registry’  db
}
```


## Library API

This subsection lists the functions of the `libinf_util` library. In order to use these functions in your program, you must include `[inf_util.h](inf__util_8h.md#file-inf-util.h)` and link against either static or shared version of the library. “Simple format with compound names”(example 4) usage requires `libinf` library too.


### Function infoutil_getVersion

Function return string with version of a library.

**Out** values for infoutil_getVersion


| out values  | Type  | Description   |
|  -------- | -------- | -------- |
| `return` | `const``char*` | String with version of a library   |



### Function info_import()

Perform a database import operation given all the necessary meta information, data file names and a database. Target tables are deleted before importing data from dataFile.

**In** values for [info_import()](group__inf__util__public.md#function-info-import)


| in values  | Type  | Description   |
|  -------- | -------- | -------- |
| `dataSchemaFile` | `const``char*` | name of XML file containing schema of the data file   |
| `dbSchemaFile` | `const``char*` | dbSchemaFile name of XML file containing schema of the database   |
| `dbName` | `const``char*` | dbName name of a database to which data will be imported   |
| `condition` | `const``char*` | condition string to match (for the function with additional `"condition"` parameter)   |
| `inputFileName` | `const``char*` | name of data file to be loaded   |


**Out** values for [info_import()](group__inf__util__public.md#function-info-import)


| out values  | Type  | Description   |
|  -------- | -------- | -------- |
| `return` | `int` | INFO_E_OK on success   |
| `error` | `ErrorInfo*` | pointer to struct [ErrorInfo](struct_error_info.md) |



### Function info_partial_import()

Perform a database import operation given all the necessary meta information, data file names and a database. This function unlike `[info_import()](group__inf__util__public.md#function-info-import)` function, doesn’t delete target tables before importing. Second difference is that this function do record’s update if destination record already exist. Destination and source records matching is regulated by the primary key (ID). Side effect of it is that constraint about unique IDs in source file, will not work: DB will be updated to the last record with the same ID.

**In** values for [info_partial_import()](group__inf__util__public.md#function-info-partial-import)


| in values  | Type  | Description   |
|  -------- | -------- | -------- |
| `dataSchemaFile` | `const``char*` | name of XML file containing schema of the data file   |
| `dbSchemaFile` | `const``char*` | name of XML file containing schema of the database   |
| `dbName` | `const``char*` | name of a database to which data will be imported   |
| `condition` | `const``char*` | condition string to match (for the function with additional `"condition"` parameter)   |
| `inputFileName` | `const``char*` | name of data file with new/updated records   |


**Out** values for [info_partial_import()](group__inf__util__public.md#function-info-partial-import)


| out values  | Type  | Description   |
|  -------- | -------- | -------- |
| `Return` | `int``string` | 0=OK, else error   |
| `Error` | `ErrorInfo*` | pointer to `struct``[ErrorInfo](struct_error_info.md)` |



### Function info_export()

Perform a database export operation given all the necessary meta information, data file names and a database.

**In** values for [info_export()](group__inf__util__public.md#function-info-export)


| **In** values  | Type  | Description   |
|  -------- | -------- | -------- |
| `dataSchemaFile` | `const``char*` | name of XML file containing schema of the data file   |
| `dbSchemaFile` | `const``char*` | name of XML file containing schema of the database   |
| `dbName` | `const``char*` | name of a database that contains the data to be exported   |
| `outputFileName` | `const``char*` | name of data file to be created   |


**Out** values for [info_export()](group__inf__util__public.md#function-info-export)


| out values  | Type  | Description   |
|  -------- | -------- | -------- |
| `return` | `int` | `INFO_E_OK` on success   |
| `error` | `ErrorInfo*` | pointer to `struct``[ErrorInfo](struct_error_info.md)` |



### Function info_import_property_db()

Perform import of hierarchical ("property") data file into database. This function operates like `[info_import()](group__inf__util__public.md#function-info-import)function`, but for property DB only.

**In** values for [info_import_property_db()](group__inf__util__public.md#function-info-import-property-db)


| in values  | Type  | Description   |
|  -------- | -------- | -------- |
| `dbName` | `const``char*` | name of a database to which data will be imported   |
| `inputFileName` | `const``char*` | name of data file to be loaded   |
| `condition` | `const``char*` | condition string to match (for the function with additional `"condition"` parameter)   |


**Out** values for [info_import_property_db()](group__inf__util__public.md#function-info-import-property-db)


| out values  | Type  | Description   |
|  -------- | -------- | -------- |
| `return` | `int` | `INFO_E_OK` on success   |
| `Error` | `ErrorInfo*` | pointer to `struct``[ErrorInfo](struct_error_info.md)` |



### Function info_partial_import_property_db()

Perform import of hierarchical ("property") data file into database. This function operates like `[info_partial_import()](group__inf__util__public.md#function-info-partial-import)` function, but for property DB only.

**In** values for [info_partial_import_property_db()](group__inf__util__public.md#function-info-partial-import-property-db)


| in values  | Type  | Description   |
|  -------- | -------- | -------- |
| `dbName` | `const``char*` | name of a database to which data will be imported   |
| `inputFileName` | `const``char*` | name of data file to be loaded   |
| `condition` | `const``char*` | condition string to match (for the function with additional `"condition"` parameter)   |


**Out** values for [info_partial_import_property_db()](group__inf__util__public.md#function-info-partial-import-property-db)


| out values  | Type  | Description   |
|  -------- | -------- | -------- |
| `return` | `int` | `INFO_E_OK` on success   |
| `error` | `ErrorInfo*` | pointer to `struct``[ErrorInfo](struct_error_info.md)` |



### Function info_merge_import_property_db()

Perform import of hierarchical ("property") data file into database. Data from input file is inserted if not presented in destination database.

**In** values for [info_merge_import_property_db()](group__inf__util__public.md#function-info-merge-import-property-db)


| in values  | Type  | Description   |
|  -------- | -------- | -------- |
| `dbName` | `const``char*` | name of a database to which data will be imported   |
| `inputFileName` | `const``char*` | name of data file to be loaded   |
| `condition` | `const``char*` | condition string to match (for the function with additional `"condition"` parameter)   |


**Out** values for [info_merge_import_property_db()](group__inf__util__public.md#function-info-merge-import-property-db)


| out values  | Type  | Description   |
|  -------- | -------- | -------- |
| `return` | `int` | `INFO_E_OK` on success   |
| `error` | `ErrorInfo*` | pointer to `struct``[ErrorInfo](struct_error_info.md)` |



### Function info_export_property_db()

Perform export of hierarchical ("property") data from database. This function operates like `[info_export()](group__inf__util__public.md#function-info-export)` function, but for property DB only.

**In** values for In Values for [info_export_property_db()](group__inf__util__public.md#function-info-export-property-db)


| in values  | Type  | Description   |
|  -------- | -------- | -------- |
| `dbName` | `const``char*` | name of a database that contains the data to be exported   |
| `outputFileName` | `const``char*` | name of data file to be created   |


**Out** values for [info_export_property_db()](group__inf__util__public.md#function-info-export-property-db)


| out values  | Type  | Description   |
|  -------- | -------- | -------- |
| `return` | `int` | `INFO_E_OK` on success   |
| `error` | `ErrorInfo*` | pointer to `struct``[ErrorInfo](struct_error_info.md)` |



### Function error_info_free()

Deallocate resources referenced by a `[ErrorInfo](struct_error_info.md)` structure

**In** values for [error_info_free()](group__inf__util__public.md#function-error-info-free)


| in values  | Type  | Description   |
|  -------- | -------- | -------- |
| `error` | `ErrorInfo*` | Pointer to `struct``[ErrorInfo](struct_error_info.md)` |



# System Setup and Requirements


## Compiler and Linker Settings

An application using InfoSvc can be built either as a “monolithic” (statically-linked) executable or as a dynamically linked executable.

The first option combines all used libraries together with the application code into one complete executable file.

The second option relies on OS’s dynamic linker to load necessary shared libraries on application startup. The required libraries must be loaded to the terminal together with the application.

the sections below assume the libraries are extracted into `import/<platform>/lib` directory, where `<platform>` is either “vos” or “vos2”.


### Monolithic Library

The list of statically-linked, monolithic libraries are listed below:

In the form of `-l<name>` options to gcc:

* `-linf_util-static`
* `-linf_util_sqlite-static` (*)
* `-linf_util_xmlfile-static` (*)
* `-lsqlite-static`
* `-lexpat-static`
* `-linf-static`

(*) this library is required only if import/export backend that it implements is required by the application. If it is not the case, then the library may be omitted. See more below on **Backend mix-and-match for static builds**.


### Dynamic Library

Dynamic libaries are listed below:

**V/OS** In the form of `-l<name>` options to gcc:

* `-linf_util`
* `-lsqlite`
* `-linf`
* `-lexpat`

libsqlite.so.x and libexpat.so.x must be loaded on terminal even then when application don't use their functions directly:

* `-`**libinf is dependent from libsqlite** library
* `-`**libinf_util is dependent from libsqlite and expat** libraries 

Some terminal options has expat library as part of OS platform, in this case expat library can be skipped.


### Backend Mix-and-Match for Static Builds

When building a statically linked program which uses `libinf_util`, the program must explicitly link the backends it intends to use. In order to do that, the following actions must be taken:

This information is only relevant for static builds.



1. Link with a static library that contains the required backend code
2. In one of .cpp files of the application, add backend registration code
3. Define some preprocessor symbol (e.g., `INF_STATIC_BUILD`) for static build only

The following static libraries are provided with InfoSvc:


| Library Name  | Implements  | Class Name   |
|  -------- | -------- | -------- |
| `libinf_util_sqlite-static.a` | SQLite database backend  | SQLiteBackend   |
| `libinf_util_xmlfile-static.a` | XML file backend  | XMLFileBackend   |




1. Link your program with these libraries to be able to use corresponding backends.
2. Next, in one of .cpp files of your program, insert the following code at file level:


```cpp
#ifdef INF_STATIC_BUILD
#include <inf/inf_util/backend_api.h> 
REGISTER_STATIC_BACKEND(XMLFileBackend); 
REGISTER_STATIC_BACKEND(SQLiteBackend);
#endif
```

3. Then, in your Makefile, define symbol `INF_STATIC_BUILD` for static build only.



* In case when you didn't add the registration code, then static backends will not be available, and import or export operations will fail with a “backend not found” error.
* In case when you added registration code but didn't linked corresponding static library, the linker will fail with unresolved symbol error.


## Deliverables

The following chapter lists the deliverables for V/OS.


### V/OS



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
    * `dl.libinf-remove.tgz` – Property DB library removal package
    * `dl.libinf_util`.<`VER>`.`tgz` – Import/Export package
    * `dl.libinf_util.remove.tgz` – Import/Export library removal package


### doc

Folder locations and descriptions of each file are provided below:



* `inf/`
    * `example/`
        * contains example projects for InfoSvc and InfoSvc utility
        * `config-module/` – contains XML files which can be used to test import functionality, i.e. schema are in sync with data file.
    * `schema/`
        * `datafile.xsd` – XSD schema for validating user’s file schemas
        * `db.xsd` – XSD schema for validating user’s database schemas
    * `hierarchical_schemas/`
        * `adk_inf_propdb.xml` – DB schema for import/export to/from hierarchical DB
        * `file_format.xml` – data schema for import/export to/from hierarchical DB


## External code sources versions



* ADK-DB-SQLITE, built on SQLite version 3.49.1;
* ADK-EXPAT, built on Expat version 2.1.1.


# Troubleshooting


## Logging

ADK-INF-UTIL uses "new" logging method via configuration file in JSON format. Please refer to the ADK-LOG documentation for details.

 The logging ID for this component is `"INF"`. In order to lookup the corresponding configuration file, ADKLOG uses component identifiers, which are reserved for each ADK component. For the `INF` component, configuration file is `INF_log.conf`
Enabled `LOG_DEBUG` level dramatically decreases Infoservice performance.


## Errors

`inf_util` library provides detailed errors description. See [Error Handling] for details.


# Appendix


## Acronym  Definitions

Acronyms used in this manual.


| Acronym  | Definitions   |
|  -------- | -------- |
| ADK  | Application Development Kit   |
| API  | Application Protocol Interface   |
| OS  | Operating System   |
| H5000  | H5000 Operating System   |



## XML Schemas (XSD) for Import/Export Meta Information Files

These schemas should be used by developers to validate their database schema definition and/or file format description XML files.



* XML Schema for Database Schema Description: **doc\inf\schema\db.xsd**
* XML Schema for Data File Format Description: **doc\inf\schema\datafile.xsd**


## Features Not Implemented Features


| #  | Title  | Description   |
|  -------- | -------- | -------- |
| 1  | Explicit mapping of records and columns  | Possibility to specify (record ↔ table) and (field ↔ column) mappings explicitly, i.e. allow them to have different names   |
| 2  | Data conversion options  | Possibility to specify conversion options for data fields. This could be useful for e.g. DATETIME fields, if parties use different type or format for storing this field.   |

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100
