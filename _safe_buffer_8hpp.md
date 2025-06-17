---
title: iso8583/export/SafeBuffer.hpp
summary: Class to provide a safe wrapper over binary buffer. 

---

# iso8583/export/SafeBuffer.hpp

Class to provide a safe wrapper over binary buffer.  [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[com_verifone_TLVLite](namespacecom__verifone___t_l_v_lite.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[com_verifone_TLVLite::SafeBuffer](classcom__verifone___t_l_v_lite_1_1_safe_buffer.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ISO_EXP_DECL](_safe_buffer_8hpp.md#define-iso-exp-decl)**  |

## Detailed Description

Class to provide a safe wrapper over binary buffer. 

**Author**: Tomasz Saniawa ([tomasz_s1@verifone.com](mailto:tomasz_s1@verifone.com))

**Remark**: This file should be compliant with Verifone EMEA R&D C++ Coding 

 Standard 1.0.x 



## Macros Documentation

### define ISO_EXP_DECL

```cpp
#define ISO_EXP_DECL 
```


## Source code

```cpp
#ifndef EMEAV_TLVLITE_SAFEBUFFER_HPP
#define EMEAV_TLVLITE_SAFEBUFFER_HPP 
 
#ifndef __cplusplus 
#  error "This file is for C++ only!"
#endif 
 
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
#include "ConstData.h"
#include "fwd/SafeBuffer.hpp"
 
#include <cstddef>
 
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
 
namespace com_verifone_TLVLite
{ 
 
    // @brief Safe wrapper over binary buffer
    class ISO_EXP_DECL SafeBuffer
    {
    public:
        SafeBuffer(void * buffer, std::size_t capacity, std::size_t alreadyUsedLength = 0)
            : buffer_(buffer), bufferSize_(capacity), length_(alreadyUsedLength), overflowFlag_(false)
        {}
    
        
        bool append(char c);
        bool append(unsigned char c) { return append(static_cast<char>(c)); }

        bool append(void const * data, std::size_t length);
        bool append(ConstData_t data) { return append(data.getBuffer(), data.getSize()); }

        bool append(SafeBuffer const & srcBuilder);

        void * getBuffer() const { return buffer_; }
        char * getCurrentCharPtr() const { return (static_cast<char *>(buffer_) + getLength()); }
        unsigned char * getCurrentBytePtr() const { return (static_cast<unsigned char *>(buffer_) + getLength()); }

        ConstData_t getDataDesc() const { return ConstData_t(buffer_, length_); }
        

        std::size_t getLength() const { return length_; }
        std::size_t getCapacity() const { return bufferSize_; }
        std::size_t getAvailableLen() const { return bufferSize_ - length_; }

        bool isFull() const { return length_ == bufferSize_; }
        bool isOverflow() const { return overflowFlag_; }

        template <typename T> 
        bool append(T const & rhs) { return rhs.appendTo(*this); }
        
        void clear() {length_= 0; overflowFlag_ = false;}

    private:
        // Methods
        char * getBufferChar() const { return static_cast<char *>(buffer_); }

        // Attributes
        void * buffer_;
        std::size_t bufferSize_;
        std::size_t length_;
        bool overflowFlag_;
    };

 
} 
/***************************************************************************  
 * Module namespace: end   
**************************************************************************/ 
 
#endif /* EMEAV_TLVLITE_SAFEBUFFER_HPP */
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
