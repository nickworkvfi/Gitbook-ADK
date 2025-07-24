---
hidden: true
title: SafeBuffer.hpp
---

<a href="_safe_buffer_8hpp.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef EMEAV_TLVLITE_SAFEBUFFER_HPP
 2 #define EMEAV_TLVLITE_SAFEBUFFER_HPP 
 3 
 4 #ifndef __cplusplus 
 5 # error "This file is for C++ only!"
 6 #endif 
 7 
 8 /***************************************************************************
 9 ** 
 10  * 
 11  * Copyright (C) 2006 by VeriFone, Inc. 
 12  * 
 13  * All rights reserved. No part of this software may be reproduced, 
 14  * transmitted, transcribed, stored in a retrieval system, or translated 
 15  * into any language or computer language, in any form or by any means, 
 16  * electronic, mechanical, magnetic, optical, chemical, manual or otherwise, 
 17  * without the prior written permission of VeriFone, Inc. 
 18  * 
 19  **************************************************************************/
 20 
 32 /*************************************************************************** 
 33  * Includes 
 34  **************************************************************************/
 35 #include "ConstData.h"
 36 #include "fwd/SafeBuffer.hpp"
 37 
 38 #include <cstddef>
 39 
 40 #ifndef _DOXYGEN_
 41  #ifdef _VRXEVO
 42  #ifdef ISO_SHARED_EXPORT
 43  #define ISO_EXP_DECL __declspec(dllexport) // used for VSL symbol export
 44  #elif ISO_STATIC_EXPORT
 45  #define ISO_EXP_DECL // used for static libraries
 46  #else
 47  #define ISO_EXP_DECL __declspec(dllimport) // used for VSA symbol import (also used for static linking)
 48  #endif
 49  #elif defined __GNUC__ && defined ISO_SHARED_EXPORT
 50  #define ISO_EXP_DECL __attribute__((visibility("default")))
 51  #else
 52  #define ISO_EXP_DECL // used for both, static libraries and program symbol import
 53  #endif
 54 #endif
 55 
 56 /*************************************************************************** 
 57  * Module namespace: begin 
 58  **************************************************************************/
 59 
 60 namespace com_verifone_TLVLite
 61 {
 62 
 96  // @brief Safe wrapper over binary buffer
 97  class ISO_EXP_DECL SafeBuffer
 98  {
 99  public:
 100  SafeBuffer(void * buffer, std::size_t capacity, std::size_t alreadyUsedLength = 0)
 101  : buffer_(buffer), bufferSize_(capacity), length_(alreadyUsedLength), overflowFlag_(false)
 102  {}
 103 
 104 
 105  bool append(char c);
 106  bool append(unsigned char c) { return append(static_cast<char>(c)); }
 107 
 108  bool append(void const * data, std::size_t length);
 109  bool append(ConstData_t data) { return append(data.getBuffer(), data.getSize()); }
 110 
 111  bool append(SafeBuffer const & srcBuilder);
 112 
 113  void * getBuffer() const { return buffer_; }
 114  char * getCurrentCharPtr() const { return (static_cast<char *>(buffer_) + getLength()); }
 115  unsigned char * getCurrentBytePtr() const { return (static_cast<unsigned char *>(buffer_) + getLength()); }
 116 
 117  ConstData_t getDataDesc() const { return ConstData_t(buffer_, length_); }
 118 
 119 
 120  std::size_t getLength() const { return length_; }
 121  std::size_t getCapacity() const { return bufferSize_; }
 122  std::size_t getAvailableLen() const { return bufferSize_ - length_; }
 123 
 124  bool isFull() const { return length_ == bufferSize_; }
 125  bool isOverflow() const { return overflowFlag_; }
 126 
 127  template <typename T>
 128  bool append(T const & rhs) { return rhs.appendTo(*this); }
 129 
 130  void clear() {length_= 0; overflowFlag_ = false;}
 131 
 132  private:
 133  // Methods
 134  char * getBufferChar() const { return static_cast<char *>(buffer_); }
 135 
 136  // Attributes
 137  void * buffer_;
 138  std::size_t bufferSize_;
 139  std::size_t length_;
 140  bool overflowFlag_;
 141  };
 142 
 143 
 148 }
 149 /*************************************************************************** 
 150  * Module namespace: end 
 151 **************************************************************************/
 152 
 153 #endif /* EMEAV_TLVLITE_SAFEBUFFER_HPP */
```
