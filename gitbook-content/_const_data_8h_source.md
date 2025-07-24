---
hidden: true
title: ConstData.h
---

<a href="_const_data_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef EMEAV_TLVLITE_CONSTDATA_H
 2 #define EMEAV_TLVLITE_CONSTDATA_H
 3 
 4 /***************************************************************************
 5 ** 
 6  * 
 7  * Copyright (C) 2006 by VeriFone, Inc. 
 8  * 
 9  * All rights reserved. No part of this software may be reproduced, 
 10  * transmitted, transcribed, stored in a retrieval system, or translated 
 11  * into any language or computer language, in any form or by any means, 
 12  * electronic, mechanical, magnetic, optical, chemical, manual or otherwise, 
 13  * without the prior written permission of VeriFone, Inc. 
 14  * 
 15  **************************************************************************/
 16 
 30 /*************************************************************************** 
 31  * Includes 
 32  **************************************************************************/
 33 #include "fwd/ConstData.h"
 34 
 35 #include <stddef.h>
 36 
 37 #ifdef __cplusplus
 38 #include <cstddef>
 39 #include <cstring>
 40 #include <string>
 41 #endif
 42 
 43 #ifndef _DOXYGEN_
 44  #ifdef _VRXEVO
 45  #ifdef ISO_SHARED_EXPORT
 46  #define ISO_EXP_DECL __declspec(dllexport) // used for VSL symbol export
 47  #elif ISO_STATIC_EXPORT
 48  #define ISO_EXP_DECL // used for static libraries
 49  #else
 50  #define ISO_EXP_DECL __declspec(dllimport) // used for VSA symbol import (also used for static linking)
 51  #endif
 52  #elif defined __GNUC__ && defined ISO_SHARED_EXPORT
 53  #define ISO_EXP_DECL __attribute__((visibility("default")))
 54  #else
 55  #define ISO_EXP_DECL // used for both, static libraries and program symbol import
 56  #endif
 57 #endif
 58 
 59 /*************************************************************************** 
 60  * Module namespace: begin 
 61  **************************************************************************/
 62 
 63 #ifdef __cplusplus
 64 namespace com_verifone_TLVLite
 65 {
 66 #endif
 67 
 78 #define CONST_DATA_DET(s) ((s).buffer), ((s).size)
 79 #define CONST_DATA_DET_CAST(type, s) (static_cast<type>(s.buffer)), ((s).size)
 80 #define CONST_DATA_ARRAY_INIT(arr) {(arr), sizeof(arr)}
 81 
 82 
 87 //@note To be compatible with C it HAS to be a POD
 88 struct ConstData_s
 89 {
 90  void const * buffer;
 91  size_t size;
 92 };
 93 
 94 
 95 
 96 #ifdef __cplusplus
 97 
 98 #define CONST_DATA_T_DET(s) ((s).getBuffer()), ((s).getSize())
 99 #define CONST_DATA_T_ARRAY_INIT(arr) ::com_verifone_TLVLite::ConstData_t((arr), sizeof(arr))
 100 
 101 
 102 
 103 /* C++ version with full class */
 104 class ISO_EXP_DECL ConstData : public ConstData_s
 105 {
 106 private:
 107  bool cloned;
 108 
 109 public:
 110  ConstData(ConstData_s const & rhs)
 111  {
 112  this->buffer = rhs.buffer;
 113  this->size = rhs.size;
 114  this->cloned = false;
 115  }
 116 
 117  ConstData(ConstData_t const & rhs)
 118  {
 119  if (rhs.cloned)
 120  {
 121  void * newbuf = new char[rhs.size];
 122  std::memcpy(newbuf, rhs.buffer, rhs.size);
 123  this->buffer = newbuf;
 124  this->size = rhs.size;
 125  this->cloned = true;
 126  }
 127  else
 128  {
 129  this->buffer = rhs.buffer;
 130  this->size = rhs.size;
 131  this->cloned = false;
 132  }
 133  }
 134 
 135  ConstData(void const * buffer, std::size_t size)
 136  {
 137  this->buffer = buffer;
 138  this->size = size;
 139  this->cloned = false;
 140  }
 141 
 142  ConstData(std::string const & s)
 143  {
 144  this->buffer = s.c_str();
 145  this->size = s.size();
 146  this->cloned = false;
 147  }
 148 
 149  bool operator ==(ConstData const & rhs) const
 150  {
 151  return
 152  this == &rhs // Compare with self case
 153  || (size == rhs.size && std::memcmp(buffer, rhs.buffer, size) == 0);
 154  }
 155 
 156  bool operator !=(ConstData const & rhs) const 
 157  {
 158  return !(*this == rhs);
 159  }
 160 
 161  ConstData& operator =(ConstData const & rhs)
 162  {
 163  if (this == &rhs) //Check for self-assignment
 164  return *this; // Return a reference to myself.
 165 
 166  if (this->cloned)
 167  {
 168  delete[] static_cast<char *>(const_cast<void *>(buffer));
 169  }
 170 
 171  if (rhs.cloned)
 172  {
 173  void * newbuf = new char[rhs.size];
 174  std::memcpy(newbuf, rhs.buffer, rhs.size);
 175  this->buffer = newbuf;
 176  this->size = rhs.size;
 177  this->cloned = true;
 178  }
 179  else
 180  {
 181  this->buffer = rhs.buffer;
 182  this->size = rhs.size;
 183  this->cloned = false;
 184  }
 185 
 186  return *this; // Return a reference to myself.
 187  }
 188 
 189  ~ConstData()
 190  {
 191  if (cloned)
 192  {
 193  delete[] static_cast<char *>(const_cast<void *>(buffer));
 194  }
 195  }
 196 
 197  std::size_t getSize() const { return size; }
 198  void const * getBuffer() const { return buffer; }
 199 
 200  // @brief for convenience return buffer cast to char
 201  char const * getCharBuffer() const { return static_cast<char const *>(getBuffer()); }
 202 
 203  // @brief for convenience return buffer cast to unsigned char
 204  unsigned char const * getByteBuffer() const { return static_cast<unsigned char const *>(getBuffer()); }
 205 
 206  bool isValid() const { return buffer != NULL; }
 207 
 208  ConstData& clone(ConstData const & rhs)
 209  {
 210  if (this->cloned)
 211  {
 212  delete[] static_cast<char *>(const_cast<void *>(buffer));
 213  }
 214 
 215  if (rhs.isValid())
 216  {
 217  void * newbuf = new char[rhs.size];
 218  std::memcpy(newbuf, rhs.buffer, rhs.size);
 219  this->buffer = newbuf;
 220  this->size = rhs.size;
 221  this->cloned = true;
 222  }
 223  else
 224  {
 225  this->buffer = rhs.buffer;
 226  this->size = rhs.size;
 227  this->cloned = false;
 228  }
 229 
 230  return *this; // Return a reference to myself.
 231  }
 232 
 233  static ConstData getInvalid() { return ConstData(NULL, 0); }
 234 };
 235 #endif
 236 
 241 #ifdef __cplusplus
 242 } /* namespace end */
 243 #endif
 244 
 245 /*************************************************************************** 
 246  * Module namespace: end 
 247 **************************************************************************/
 248 
 249 #endif /* EMEAV_TLVLITE_CONSTDATA_H */ 
```
