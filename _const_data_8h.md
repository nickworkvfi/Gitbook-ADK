---
title: iso8583/export/ConstData.h
summary: Helper data types to export constant data buffers/string with its size. 

---

# iso8583/export/ConstData.h

Helper data types to export constant data buffers/string with its size.  [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ConstData_s](struct_const_data__s.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ISO_EXP_DECL](_const_data_8h.md#define-iso-exp-decl)**  |
|  | **[CONST_DATA_DET](group___t_l_v_lite.md#define-const-data-det)**(s)  |
|  | **[CONST_DATA_DET_CAST](group___t_l_v_lite.md#define-const-data-det-cast)**(type, s)  |
|  | **[CONST_DATA_ARRAY_INIT](group___t_l_v_lite.md#define-const-data-array-init)**(arr)  |

## Detailed Description

Helper data types to export constant data buffers/string with its size. 

**Author**: Tomasz Saniawa ([tomasz_s1@verifone.com](mailto:tomasz_s1@verifone.com))

**Note**: Declarations are both C and C++ compatible

**Remark**: This file should be compliant with Verifone EMEA R&D C++ Coding 

 Standard 1.0.x 



## Macros Documentation

### define ISO_EXP_DECL

```cpp
#define ISO_EXP_DECL 
```


### define CONST_DATA_DET

```cpp
#define CONST_DATA_DET(
    s
)
((s).buffer), ((s).size)
```


Macro definitions 


### define CONST_DATA_DET_CAST

```cpp
#define CONST_DATA_DET_CAST(
    type,
    s
)
(static_cast<type>(s.buffer)), ((s).size)
```


### define CONST_DATA_ARRAY_INIT

```cpp
#define CONST_DATA_ARRAY_INIT(
    arr
)
{(arr), sizeof(arr)}
```


## Source code

```cpp
#ifndef EMEAV_TLVLITE_CONSTDATA_H
#define EMEAV_TLVLITE_CONSTDATA_H

/***************************************************************************
** 
 *  
 * Copyright (C) 2006 by VeriFone, Inc. 
 * 
 * All rights reserved.  No part of this software may be reproduced, 
 * transmitted, transcribed, stored in a retrieval system, or translated 
 * into any language or computer language, in any form or by any means, 
 * electronic, mechanical, magnetic, optical, chemical, manual or otherwise, 
 * without the prior written permission of VeriFone, Inc.  
 *        
 **************************************************************************/ 
 
/*************************************************************************** 
 * Includes 
 **************************************************************************/ 
#include "fwd/ConstData.h"
 
#include <stddef.h>
 
#ifdef __cplusplus
#include <cstddef>
#include <cstring>
#include <string>
#endif

#ifndef _DOXYGEN_
  #ifdef _VRXEVO
    #ifdef ISO_SHARED_EXPORT
      #define ISO_EXP_DECL __declspec(dllexport) // used for VSL symbol export
    #elif ISO_STATIC_EXPORT
      #define ISO_EXP_DECL // used for static libraries
    #else
      #define ISO_EXP_DECL __declspec(dllimport) // used for VSA symbol import (also used for static linking)
    #endif
  #elif defined __GNUC__ && defined ISO_SHARED_EXPORT
    #define ISO_EXP_DECL __attribute__((visibility("default")))
  #else
    #define ISO_EXP_DECL // used for both, static libraries and program symbol import
  #endif
#endif
 
/*************************************************************************** 
 * Module namespace: begin 
 **************************************************************************/ 

#ifdef __cplusplus
namespace com_verifone_TLVLite
{ 
#endif
 
#define CONST_DATA_DET(s)   ((s).buffer), ((s).size)
#define CONST_DATA_DET_CAST(type, s)    (static_cast<type>(s.buffer)), ((s).size)
#define CONST_DATA_ARRAY_INIT(arr)  {(arr), sizeof(arr)}

 
//@note To be compatible with C it HAS to be a POD
struct ConstData_s
{
    void const * buffer;
    size_t size;
};
 

 
#ifdef __cplusplus

#define CONST_DATA_T_DET(s)     ((s).getBuffer()), ((s).getSize())
#define CONST_DATA_T_ARRAY_INIT(arr)    ::com_verifone_TLVLite::ConstData_t((arr), sizeof(arr))



/* C++ version with full class */
class ISO_EXP_DECL ConstData : public ConstData_s
{
private:
    bool cloned;

public:
    ConstData(ConstData_s const & rhs)
    {
        this->buffer = rhs.buffer;
        this->size = rhs.size;
        this->cloned = false;
    }
    
    ConstData(ConstData_t const & rhs)
    {
        if (rhs.cloned)
        {
            void * newbuf = new char[rhs.size]; 
            std::memcpy(newbuf, rhs.buffer, rhs.size);
            this->buffer = newbuf;
            this->size = rhs.size;
            this->cloned = true;
        }
        else
        {
            this->buffer = rhs.buffer;
            this->size = rhs.size;
            this->cloned = false;
        }
    }
    
    ConstData(void const * buffer, std::size_t size)
    {
        this->buffer = buffer;
        this->size = size;
        this->cloned = false;
    }

    ConstData(std::string const & s)
    {
        this->buffer = s.c_str();
        this->size = s.size();
        this->cloned = false;
    }
    
    bool operator ==(ConstData const & rhs) const
    {
        return 
            this == &rhs  // Compare with self case
            || (size == rhs.size && std::memcmp(buffer, rhs.buffer, size) == 0);
    }
    
    bool operator !=(ConstData const & rhs) const 
    { 
        return !(*this == rhs); 
    }

    ConstData& operator =(ConstData const & rhs) 
    {
        if (this == &rhs)        //Check for self-assignment
            return *this;  // Return a reference to myself.

        if (this->cloned)
        {
            delete[] static_cast<char *>(const_cast<void *>(buffer));
        }

        if (rhs.cloned)
        {
            void * newbuf = new char[rhs.size]; 
            std::memcpy(newbuf, rhs.buffer, rhs.size);
            this->buffer = newbuf;
            this->size = rhs.size;
            this->cloned = true;
        }
        else
        {
            this->buffer = rhs.buffer;
            this->size = rhs.size;
            this->cloned = false;
        }

        return *this;  // Return a reference to myself.
    }

    ~ConstData()
    {
        if (cloned)
        {
            delete[] static_cast<char *>(const_cast<void *>(buffer));
        }
    }
    
    std::size_t getSize() const { return size; }
    void const * getBuffer() const { return buffer; }

    // @brief for convenience return buffer cast to char
    char const * getCharBuffer() const { return static_cast<char const *>(getBuffer()); }
    
    // @brief for convenience return buffer cast to unsigned char
    unsigned char const * getByteBuffer() const { return static_cast<unsigned char const *>(getBuffer()); }
    
    bool isValid() const { return buffer != NULL; }

    ConstData& clone(ConstData const & rhs)
    {
        if (this->cloned)
        {
            delete[] static_cast<char *>(const_cast<void *>(buffer));
        }

        if (rhs.isValid())
        {
            void * newbuf = new char[rhs.size]; 
            std::memcpy(newbuf, rhs.buffer, rhs.size);
            this->buffer = newbuf;
            this->size = rhs.size;
            this->cloned = true;
        }
        else
        {
            this->buffer = rhs.buffer;
            this->size = rhs.size;
            this->cloned = false;
        }

        return *this;  // Return a reference to myself.
    }
    
    static ConstData getInvalid() { return ConstData(NULL, 0); }
};
#endif
 
#ifdef __cplusplus
} /*  namespace end */
#endif

/***************************************************************************  
 * Module namespace: end   
**************************************************************************/ 
 
#endif /* EMEAV_TLVLITE_CONSTDATA_H */ 
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
