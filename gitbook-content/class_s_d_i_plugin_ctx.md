---
hidden: true
title: SDIPluginCtx Class Reference
---

[Public Member Functions](#pub-methods)

`#include <`<a href="loadplugin_8h_source.md">loadplugin.h</a>`>`

|  |  |
|----|----|
| Public Member Functions |  |
|   | [SDIPluginCtx](#a6b533aff0ecca5dc3c995d339419f9a9) () |
|   | [SDIPluginCtx](#a0687be6f4fc47724f06e3889b0af53b2) (const std::string &file) |
| virtual  | [\~SDIPluginCtx](#a99a5459291b3a7467c75d02040f1d895) () |
| bool  | [load](#a9c68305a6794dc960db947d68839b724) (const std::string &file) |
| bool  | [loaded](#a9db6efbd569e694169b5cd566a42a5e3) () const |
| void  | [unload](#a75d84312cb36261792b879ffc61e7e16) () |
| const std::string &  | [getFile](#abc8867830407c255f71aaeca1b2a687a) () const |
| const std::string &  | [getName](#a8802382fe16a9f1966b9565e38a8495a) () const |
| const std::string &  | [getVersion](#a4ed176ddd88ada6e6f0dee0e214e21d6) () const |
| <a href="class_s_d_i_plugin.md">SDIPlugin</a> \*  | [getObj](#a3bf2b55aff33a3b6d03348daccfe1df4) () |

## DetailedDescription {#detailed-description}

helper class to store the context of a loaded plugin

## Constructor& Destructor Documentation

## SDIPluginCtx()\[1/2\] <a href="#a6b533aff0ecca5dc3c995d339419f9a9" id="a6b533aff0ecca5dc3c995d339419f9a9"></a> {#sdipluginctx-12}

<p><a href="class_s_d_i_plugin_ctx.md">SDIPluginCtx</a></p>

inline

## SDIPluginCtx()\[2/2\] <a href="#a0687be6f4fc47724f06e3889b0af53b2" id="a0687be6f4fc47724f06e3889b0af53b2"></a> {#sdipluginctx-22}

<p><a href="class_s_d_i_plugin_ctx.md">SDIPluginCtx</a></p>

inline

## \~SDIPluginCtx() <a href="#a99a5459291b3a7467c75d02040f1d895" id="a99a5459291b3a7467c75d02040f1d895"></a>

<p>virtual \~<a href="class_s_d_i_plugin_ctx.md">SDIPluginCtx</a></p>

inlinevirtual

## MemberFunction Documentation {#member-function-documentation}

## getFile() <a href="#abc8867830407c255f71aaeca1b2a687a" id="abc8867830407c255f71aaeca1b2a687a"></a>

<p>const std::string& getFile</p>

inline

returns the filename of the plugin shared object (including full path)

### Returns

filename of the plugin shared object as full path

## getName() <a href="#a8802382fe16a9f1966b9565e38a8495a" id="a8802382fe16a9f1966b9565e38a8495a"></a>

<p>const std::string& getName</p>

inline

returns the plugin name

### Returns

plugin name as string

## getObj() <a href="#a3bf2b55aff33a3b6d03348daccfe1df4" id="a3bf2b55aff33a3b6d03348daccfe1df4"></a>

<p><a href="class_s_d_i_plugin.md">SDIPlugin</a>\* getObj</p>

inline

## getVersion() <a href="#a4ed176ddd88ada6e6f0dee0e214e21d6" id="a4ed176ddd88ada6e6f0dee0e214e21d6"></a>

<p>const std::string& getVersion</p>

inline

returns the plugin version as string in format \"\\\<major\\\>.\\\<minor\\\>.\\\<bugfix\\\>\"

### Returns

plugin version string

## load() <a href="#a9c68305a6794dc960db947d68839b724" id="a9c68305a6794dc960db947d68839b724"></a>

<p>bool load</p>

load a SDI plugin by its filename. If the plugin is already loaded, it is reloaded.

### Returns

true for success, else false

## loaded() <a href="#a9db6efbd569e694169b5cd566a42a5e3" id="a9db6efbd569e694169b5cd566a42a5e3"></a>

<p>bool loaded</p>

inline

check if the SDI plugin was successfully loaded

### Returns

true for successfully loaded, else false

## unload() <a href="#a75d84312cb36261792b879ffc61e7e16" id="a75d84312cb36261792b879ffc61e7e16"></a>

<p>void unload</p>

unload a SDI plugin and free the plugin context

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="loadplugin_8h_source.md">loadplugin.h</a>
- sdi/src/<a href="loadplugin_8cpp.md">loadplugin.cpp</a>
