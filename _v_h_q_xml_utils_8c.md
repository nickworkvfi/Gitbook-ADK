---
title: tmsagt/src/VHQXmlPackager/VHQXmlUtils.c

---

# tmsagt/src/VHQXmlPackager/VHQXmlUtils.c

 [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[GetIntAttrFromNode](_v_h_q_xml_utils_8c.md#function-getintattrfromnode)**(xmlNode * node, char * attr_name, int * value) |
| bool | **[GetLongIntAttrFromNode](_v_h_q_xml_utils_8c.md#function-getlongintattrfromnode)**(xmlNode * node, char * attr_name, long long int * value) |
| char * | **[GetStrAttrFromNode](_v_h_q_xml_utils_8c.md#function-getstrattrfromnode)**(xmlNode * node, char * attr_name)<br>Finds the attribute of node that contains the passed in name.  |
| xmlNode * | **[GetNodeByName](_v_h_q_xml_utils_8c.md#function-getnodebyname)**(xmlNode * top_node, const char * element_name) |
| void | **[addBinaryNode](_v_h_q_xml_utils_8c.md#function-addbinarynode)**(xmlDocPtr doc, xmlNode * top_node, char * element_name, unsigned char * bin_data, uint16 bin_data_len, bool base64) |
| bool | **[GetBinaryFromNode](_v_h_q_xml_utils_8c.md#function-getbinaryfromnode)**(xmlNode * bin_node, char * bin_data, uint16 bin_data_len, bool base64)<br>Gets Binary Data from a node by converting the string to binary.  |
| xmlNode * | **[addIntegerNode](_v_h_q_xml_utils_8c.md#function-addintegernode)**(xmlNode * top_node, char * element_name, int element_int_value)<br>Adds an integer to a node by converting it to a string.  |
| bool | **[addIntegerAttr](_v_h_q_xml_utils_8c.md#function-addintegerattr)**(xmlNode * top_node, char * element_name, int element_int_value)<br>Adds an integer attribute to a node by converting it to a string.  |
| bool | **[addUnsignedIntegerAttr](_v_h_q_xml_utils_8c.md#function-addunsignedintegerattr)**(xmlNode * top_node, char * element_name, uint32 element_int_value) |
| xmlNode * | **[addTimeNode](_v_h_q_xml_utils_8c.md#function-addtimenode)**(xmlNode * top_node, char * element_name, time_t element_time)<br>Adds an integer to a node by converting it to a string.  |
| bool | **[addTimeAttr](_v_h_q_xml_utils_8c.md#function-addtimeattr)**(xmlNode * top_node, char * element_name, time_t element_time, bool conv_to_local) |
| bool | **[addBinaryAttr](_v_h_q_xml_utils_8c.md#function-addbinaryattr)**(xmlNode * top_node, char * element_name, unsigned char * bin_data, uint16 bin_data_len, bool base64) |

## Detailed Description


XML Utilty functions 


## Functions Documentation

### function GetIntAttrFromNode

```cpp
bool GetIntAttrFromNode(
    xmlNode * node,
    char * attr_name,
    int * value
)
```


**Parameters**: 

  * **node** = pointer to the top node to search under 
  * **attr_name** = string to search for in the name field 
  * **value** = value contained in attribute


**Return**: TRUE, if found 

Debug Stuff Local definitions Local functions Global functions

This function finds the attribute of node that contains the passed in name 


### function GetLongIntAttrFromNode

```cpp
bool GetLongIntAttrFromNode(
    xmlNode * node,
    char * attr_name,
    long long int * value
)
```


**Parameters**: 

  * **node** = pointer to the top node to search under 
  * **attr_name** = string to search for in the name field 
  * **value** = value contained in attribute


**Return**: TRUE, if found 

This function finds the attribute of node that contains the passed in name 


### function GetStrAttrFromNode

```cpp
char * GetStrAttrFromNode(
    xmlNode * node,
    char * attr_name
)
```

Finds the attribute of node that contains the passed in name. 

**Parameters**: 

  * **node** - pointer to the node to search under 
  * **attr_name** - string to search for in the attribute field 


**Return**: pointer to the string contained in the attribute 

### function GetNodeByName

```cpp
xmlNode * GetNodeByName(
    xmlNode * top_node,
    const char * element_name
)
```


**Parameters**: 

  * **top_node** = pointer to the top node to search under 
  * **element_name** = string to search for in the name field


**Return**: pointer to the node that matches the passed in name 

This function Finds the node under top_node that contains the passed in name. 


### function addBinaryNode

```cpp
void addBinaryNode(
    xmlDocPtr doc,
    xmlNode * top_node,
    char * element_name,
    unsigned char * bin_data,
    uint16 bin_data_len,
    bool base64
)
```


**Parameters**: 

  * **doc** = pointer to xml doc 
  * **top_node** = pointer to the top node to add this node to 
  * **element_name** = name of the new attribute 
  * **bin_data** = binary data to be added 
  * **bin_data_len** = length of binary data 
  * **base64** = TRUE, if conversion


**Return**: void 

This function adds Binary Data in HEX format to a node by converting it to a string. 


### function GetBinaryFromNode

```cpp
bool GetBinaryFromNode(
    xmlNode * bin_node,
    char * bin_data,
    uint16 bin_data_len,
    bool base64
)
```

Gets Binary Data from a node by converting the string to binary. 

**Parameters**: 

  * **bin_node** - pointer to the node to read bin data from 
  * **bin_data** - pointer to the binary data buffer 
  * **bin_data_len** - length of the binary data buffer 
  * **base64** - TRUE if data is base 64 data, FALSE for hex data 


**Return**: pointer to the node that matches the passed in name 

### function addIntegerNode

```cpp
xmlNode * addIntegerNode(
    xmlNode * top_node,
    char * element_name,
    int element_int_value
)
```

Adds an integer to a node by converting it to a string. 

**Parameters**: 

  * **top_node** - pointer to the top node to add this node to 
  * **element_name** - name of the new element 
  * **element_value** - integer to convert to a string for the new node 


**Return**: pointer to the node that matches the passed in name 

### function addIntegerAttr

```cpp
bool addIntegerAttr(
    xmlNode * top_node,
    char * element_name,
    int element_int_value
)
```

Adds an integer attribute to a node by converting it to a string. 

**Parameters**: 

  * **top_node** - pointer to the top node to add this node to 
  * **element_name** - name of the new attribute 
  * **element_int_value** - integer to convert to a string for the new attribute 


**Return**: TRUE if successful, FALSE otherwise 

### function addUnsignedIntegerAttr

```cpp
bool addUnsignedIntegerAttr(
    xmlNode * top_node,
    char * element_name,
    uint32 element_int_value
)
```


**Parameters**: 

  * **top_node** = pointer to the top node to add this node to 
  * **element_name** = name of the new attribute 
  * **element_int_value** = value to be converted and added


**Return**: TRUE if successful, FALSE otherwise 

This function adds an unsigned integer attribute to a node by converting it to a string. 


### function addTimeNode

```cpp
xmlNode * addTimeNode(
    xmlNode * top_node,
    char * element_name,
    time_t element_time
)
```

Adds an integer to a node by converting it to a string. 

**Parameters**: 

  * **top_node** - pointer to the top node to add this node to 
  * **element_name** - name of the new element 
  * **element_time** - time_t to convert to a string for the new node 


**Return**: pointer to the node that matches the passed in name 

### function addTimeAttr

```cpp
bool addTimeAttr(
    xmlNode * top_node,
    char * element_name,
    time_t element_time,
    bool conv_to_local
)
```


**Parameters**: 

  * **top_node** = pointer to the top node to add this node to. 
  * **element_name** = name of the new attribute. 
  * **element_time** = integer to convert to a string for the new time attribute. 
  * **conv_to_local** = TRUE, if UTC time should be converted to local time.


**Return**: TRUE if successful, FALSE otherwise 

This function adds a time attribute to a node by converting it to a string. 


### function addBinaryAttr

```cpp
bool addBinaryAttr(
    xmlNode * top_node,
    char * element_name,
    unsigned char * bin_data,
    uint16 bin_data_len,
    bool base64
)
```


**Parameters**: 

  * **top_node** = pointer to the top node to add this node to 
  * **element_name** = name of the new attribute 
  * **bin_data** = binary input data 
  * **bin_data_len** = length of binary input data 
  * **base64** = TRUE, if base conversion


**Return**: TRUE if successful, FALSE otherwise 

This function adds a binary attribute to a node by converting it to a string. 




## Source code

```cpp
/*
 */
// comments that are not part of documentation begin with // instead of ///
#include <memory.h>
#include <stdio.h>
#include <string.h>
#include "VHQDebug.h"
#include "VHQTypes.h"
#include "VHQXmlUtils.h"
#include "VHQUtils.h"
#include "VHQXmlPackager.h"
#include <libxml/parser.h>
#include <libxml/tree.h>
#include <libxml/xmlwriter.h>






bool GetIntAttrFromNode(xmlNode *node, char *attr_name, int *value)
{
  bool ret_val = FALSE;
  char *attr_data;

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Looking for attribute %s in node 0x%08x\n", __FUNCTION__, attr_name, node);
  attr_data = (char*) xmlGetProp(node, (const xmlChar*) attr_name);

  if (attr_data)
  {
    *value = atoi(attr_data);
    ret_val = TRUE;
  }
  else
  {
    dbg_err("%s ERROR: Could not find %s in node!!!!!!!!!!!!!\n", __FUNCTION__,
            attr_name);
    *value = 0;
    ret_val = FALSE;
  }

  xmlFree(attr_data);
  return ret_val;
}


bool GetLongIntAttrFromNode(xmlNode *node, char *attr_name,
                            long long int *value)
{
  bool ret_val = FALSE;
  char *attr_data;

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Looking for attribute %s in node 0x%08x\n", __FUNCTION__, attr_name, node);
  attr_data = (char*) xmlGetProp(node, (const xmlChar*) attr_name);

  if (attr_data)
  {
    char *endptr = NULL;

    *value = strtoll(attr_data, &endptr, 10);
    if (endptr != NULL)
      ret_val = TRUE;
    else
      ret_val = FALSE;
  }
  else
  {
    dbg_err("%s ERROR: Could not find %s in node!!!!!!!!!!!!!\n", __FUNCTION__,
            attr_name);
    *value = 0;
    ret_val = FALSE;
  }
  xmlFree(attr_data);
  return ret_val;
}

char* GetStrAttrFromNode(xmlNode *node, char *attr_name)
{
  char *attr_data;

  //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Looking for attribute %s in node 0x%08x\n", __FUNCTION__, attr_name, node);
  attr_data = (char*) xmlGetProp(node, (const xmlChar*) attr_name);

  return attr_data;
}


xmlNode* GetNodeByName(xmlNode *top_node, const char *element_name)
{
  xmlNode *cur_node = NULL;
  xmlNode *found_node = NULL;

  for (cur_node = top_node; cur_node; cur_node = cur_node->next)
  {
    if ((cur_node->type == XML_ELEMENT_NODE)
        && (strcmp((const char*) cur_node->name, element_name) == 0))
    {
      //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Found node %s\n", __FUNCTION__, cur_node->name);
      return cur_node;
    }

    found_node = GetNodeByName(cur_node->children, element_name);
    if (found_node)
      return found_node;
  }

  /* We did not find the name if we got here */
  return NULL;
}


void addBinaryNode(xmlDocPtr doc, xmlNode *top_node, char *element_name,
                   unsigned char *bin_data, uint16 bin_data_len, bool base64)
{
  int rc;
  xmlTextWriterPtr xml_writer;

  xml_writer = xmlNewTextWriterTree(doc, top_node, 0);
  if (xml_writer == NULL)
  {
    log_dbg("%s: xmlNewTextWriterTree() returned NULL\n", __FUNCTION__);
    return;
  }

  /* Start the element */
  rc = xmlTextWriterStartElement(xml_writer, BAD_CAST element_name);

  /* Write the binary data in desired form */
  if (base64)
    rc = xmlTextWriterWriteBase64(xml_writer, (char*) bin_data, 0,
                                  bin_data_len);
  else
    rc = xmlTextWriterWriteBinHex(xml_writer, (char*) bin_data, 0,
                                  bin_data_len);

  /* End element */
  rc = xmlTextWriterEndElement(xml_writer);

  /* Close and free the text writer */
  rc = xmlTextWriterEndDocument(xml_writer);
  if (rc < 0)
  {
    printf("%s: Error at xmlTextWriterEndDocument\n", __FUNCTION__);
  }
  xmlFreeTextWriter(xml_writer);
}

bool GetBinaryFromNode(xmlNode *bin_node, char *bin_data, uint16 bin_data_len,
                       bool base64)
{
  if (base64)
  {
    log_err("%s ERROR: base 64 conversion not supported yet!!!!!\n",
            __FUNCTION__);
    assert(0);
    return FALSE;
  }
  else
  {
    int i;
    char *XMLHexData = (char*) xmlNodeGetContent(bin_node);
    int node_str_len = (XMLHexData) ? strlen(XMLHexData) : 0;

    if ((node_str_len % 2) != 0)
    {
      log_warn("%s WARNING: XML Binary data length %d is not even\n",
               __FUNCTION__, node_str_len);
      node_str_len--;
    }

    if ((node_str_len / 2) > bin_data_len)
    {
      log_warn(
          "%s WARNING: XML Binary data length %d is larger than buffer size %d\n",
          __FUNCTION__, (node_str_len / 2), bin_data_len);
      node_str_len = bin_data_len * 2;
    }

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Converting %s to bin_data - 0x", __FUNCTION__, XMLHexData);
    for (i = 0; i < node_str_len; i += 2)
    {
      unsigned int temp_hex;
      sscanf(&XMLHexData[i], "%02x", &temp_hex);
      //printf("\ntemp_hex = %08x\n", temp_hex);
      bin_data[i / 2] = (char) temp_hex;
      //printf("%02x", bin_data[i/2]);
    }
    //printf("\n");

    if (XMLHexData)
      xmlFree(XMLHexData);

    return TRUE;
  }
}

xmlNode* addIntegerNode(xmlNode *top_node, char *element_name,
                        int element_int_value)
{
  char integer_str[(sizeof(int) * 8 + 1)];

  memset(integer_str, 0, sizeof(integer_str));
  sprintf(integer_str, "%d", element_int_value);
  if (!strlen(integer_str))
  {
    dbg_err("%s: Unable to convert integer (%d) to string\n", __FUNCTION__,
            element_int_value);
    return NULL;
  }

  return (xmlNewChild(top_node, NULL, BAD_CAST element_name,
                      BAD_CAST integer_str));
}

bool addIntegerAttr(xmlNode *top_node, char *element_name,
                    int element_int_value)
{
  char integer_str[(sizeof(int) * 8 + 1)];

  memset(integer_str, 0, sizeof(integer_str));
  sprintf(integer_str, "%d", element_int_value);
  if (!strlen(integer_str))
  {
    dbg_err("%s: Unable to convert integer (%d) to string\n", __FUNCTION__,
            element_int_value);
    return FALSE;
  }

  xmlSetProp(top_node, BAD_CAST element_name, BAD_CAST integer_str);
  return TRUE;
}


bool addUnsignedIntegerAttr(xmlNode *top_node, char *element_name,
                            uint32 element_int_value)
{
  char integer_str[(sizeof(int) * 8 + 1)];

  memset(integer_str, 0, sizeof(integer_str));
  sprintf(integer_str, "%u", element_int_value);
  if (!strlen(integer_str))
  {
    dbg_err("%s: Unable to convert integer (%d) to string\n", __FUNCTION__,
            element_int_value);
    return FALSE;
  }

  xmlSetProp(top_node, BAD_CAST element_name, BAD_CAST integer_str);
  return TRUE;
}

xmlNode* addTimeNode(xmlNode *top_node, char *element_name, time_t element_time)
{
  char time_str[(sizeof(time_t) * 8 + 1)];

  memset(time_str, 0, sizeof(time_str));
  sprintf(time_str, "%lu", element_time);
  if (!strlen(time_str))
  {
    dbg_err("%s: Unable to convert time_t (%lu) to string\n", __FUNCTION__,
            element_time);
    return NULL;
  }

  return (xmlNewChild(top_node, NULL, BAD_CAST element_name, BAD_CAST time_str));
}


bool addTimeAttr(xmlNode *top_node, char *element_name, time_t element_time,
                 bool conv_to_local)
{
  time_t converted_time = element_time;
  char time_str[(sizeof(time_t) * 8 + 1)];

  if (conv_to_local)
  {
    converted_time = ConvertDeviceUTCToServerLocalTime(element_name,
                                                       element_time);
  }

  memset(time_str, 0, sizeof(time_str));
  sprintf(time_str, "%lu", converted_time);
  if (!strlen(time_str))
  {
    dbg_err("%s: Unable to convert time_t (%lu) to string\n", __FUNCTION__,
            converted_time);
    return FALSE;
  }

  xmlSetProp(top_node, BAD_CAST element_name, BAD_CAST time_str);
  return TRUE;
}


bool addBinaryAttr(xmlNode *top_node, char *element_name,
                   unsigned char *bin_data, uint16 bin_data_len, bool base64)
{
  if (base64)
  {
    log_err("%s ERROR: base 64 conversion not supported yet!!!!!\n",
            __FUNCTION__);
    assert(0);

    return FALSE;
  }
  else
  {
    int i;
    char *bin_data_str = malloc((bin_data_len * 2) + 1);

    if (!bin_data_str)
      return FALSE;

    memset(bin_data_str, 0, ((bin_data_len * 2) + 1));

    //DebugMsg(VHQ_LOGGING_LEVEL_DEBUG, "%s: Converting bin_data 0x", __FUNCTION__);
    for (i = 0; i < bin_data_len; i++)
    {
      char temp_hex[3];

      //printf("%02x", bin_data[i]);
      sprintf(temp_hex, "%02x", bin_data[i]);
      strcat(bin_data_str, temp_hex);
    }

    //printf(" to %s", bin_data_str);

    xmlSetProp(top_node, BAD_CAST element_name, BAD_CAST bin_data_str);

    if (bin_data_str)
      free(bin_data_str);

    return TRUE;
  }
}
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
