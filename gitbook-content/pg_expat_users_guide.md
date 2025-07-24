---
hidden: true
title: ADK-EXPAT Programmers Guide
---

# Introduction <a href="#sec_expat_introduction" id="sec_expat_introduction"></a>

Expat is an XML parser library written in C. This project delivers pre-built shared and static libraries that can be integrated easily into your build system (especially if it is based on ADK-BUILD). For more information on Expat, please refer to either of:

- An introduction page: <a href="http://www.xml.com/pub/1999/09/expat/index.md">http://www.xml.com/pub/1999/09/expat/index.html</a>
- Expat function reference: <a href="http://www.xml.com/pub/a/1999/09/expat/reference.md">http://www.xml.com/pub/a/1999/09/expat/reference.html</a>

# System Setup and Requirements <a href="#sec_expat_system_setup_and_requirements" id="sec_expat_system_setup_and_requirements"></a>

## Compiler and Linker Settings <a href="#subsec_expat_compiler_and_linker_settings" id="subsec_expat_compiler_and_linker_settings"></a>

### As a static library <a href="#subsubsec_expat_as_a_static_library" id="subsubsec_expat_as_a_static_library"></a>

Define preprocessor symbol `XMLSTATIC` and link against `libexpat-static.a`

### As a shared library <a href="#subsubsec_expat_as_a_shared_library" id="subsubsec_expat_as_a_shared_library"></a>

Just link against `libexpat.so`
