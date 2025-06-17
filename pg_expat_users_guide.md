---
title: ADK-EXPAT Programmers Guide

---

# ADK-EXPAT Programmers Guide




# Introduction

Expat is an XML parser library written in C. This project delivers pre-built shared and static libraries that can be integrated easily into your build system (especially if it is based on ADK-BUILD). For more information on Expat, please refer to either of:

* An introduction page: [http://www.xml.com/pub/1999/09/expat/index.html](http://www.xml.com/pub/1999/09/expat/index.html)
* Expat function reference: [http://www.xml.com/pub/a/1999/09/expat/reference.html](http://www.xml.com/pub/a/1999/09/expat/reference.html)


# System Setup and Requirements


## Compiler and Linker Settings


### As a static library

Define preprocessor symbol `XMLSTATIC` and link against `libexpat-static.a`


### As a shared library

Just link against `libexpat.so`

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100
