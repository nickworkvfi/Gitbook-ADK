---
hidden: true
title: VOSTreeInfo Class Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

|  |  |
|----|----|
| Public Member Functions |  |
| def  | [\_\_init\_\_](#a1937f6c896b510c227a14f2cd94fbd72) (self, [dlfile](#ac2881de57842eff0a0fc5b310000fae5)) |
| def  | [get_adk_version](#af7e8e8d7c65613ff8f629caa2e98e200) (self) |
|   | Retrieve ADK version. [More\...](#af7e8e8d7c65613ff8f629caa2e98e200)<br/> |
| def  | [get_os_version](#a6450c87767d20c192984f618b5c87807) (self) |
|   | Retrieve OS version. [More\...](#a6450c87767d20c192984f618b5c87807)<br/> |
| def  | [has_os](#a93b2779240f10ad31268a857e1c00c98) (self) |
|   | Check if contains an OS. [More\...](#a93b2779240f10ad31268a857e1c00c98)<br/> |
| def  | [has_blacklists](#ab23bef047899c8bc70dc5bc9358c4bab) (self) |
|   | Check if contains blacklists. [More\...](#ab23bef047899c8bc70dc5bc9358c4bab)<br/> |
| def  | [get_blacklists](#a582a87139a98071d4f70c3e466f22a9f) (self) |
|   | Returns dictionary such as dict\[device\] = set(blacklisted bundles,\...) [More\...](#a582a87139a98071d4f70c3e466f22a9f)<br/> |
| def  | [get_full_device_list](#af5306da4f486b490938e2dadcd66de61) (self) |
|   | Return sorted list of devices. [More\...](#af5306da4f486b490938e2dadcd66de61)<br/> |
| def  | [get_bundle_device_list](#ae7bf46fcdd4e445628357dc30bb0b835) (self, bundle) |
|   | Returns sorted list of all products on which this bundle can be installed. [More\...](#ae7bf46fcdd4e445628357dc30bb0b835)<br/> |

|             |                                                        |
|-------------|--------------------------------------------------------|
| Data Fields |                                                        |
|             | [dlfile](#ac2881de57842eff0a0fc5b310000fae5)           |
|             | [blacklists](#a1a742cbc15274c5862c2d86ebb946399)       |
|             | [full_device_list](#aa8ae066defd5d597cda90fbf82336268) |

## Constructor& Destructor Documentation

## \_\_init\_\_() <a href="#a1937f6c896b510c227a14f2cd94fbd72" id="a1937f6c896b510c227a14f2cd94fbd72"></a>

<p>def \_\_init\_\_</p>

## MemberFunction Documentation {#member-function-documentation}

## get_adk_version() <a href="#af7e8e8d7c65613ff8f629caa2e98e200" id="af7e8e8d7c65613ff8f629caa2e98e200"></a>

<p>def get_adk_version</p>

Retrieve ADK version.

### Returns

adk version string or empty string if not found

## get_blacklists() <a href="#a582a87139a98071d4f70c3e466f22a9f" id="a582a87139a98071d4f70c3e466f22a9f"></a>

<p>def get_blacklists</p>

Returns dictionary such as dict\[device\] = set(blacklisted bundles,\...)

### Returns

return blacklists dictionary

## get_bundle_device_list() <a href="#ae7bf46fcdd4e445628357dc30bb0b835" id="ae7bf46fcdd4e445628357dc30bb0b835"></a>

<p>def get_bundle_device_list</p>

Returns sorted list of all products on which this bundle can be installed.

This takes into account blacklisting and targeting :param bundle: bundle node

### Returns

sorted list of supported devices for this bundle

## get_full_device_list() <a href="#af5306da4f486b490938e2dadcd66de61" id="af5306da4f486b490938e2dadcd66de61"></a>

<p>def get_full_device_list</p>

Return sorted list of devices.

Dlfile must contain an OS. Looks for devices in blacklists, then by llayer bundle names

### Returns

sorted list of devices

## get_os_version() <a href="#a6450c87767d20c192984f618b5c87807" id="a6450c87767d20c192984f618b5c87807"></a>

<p>def get_os_version</p>

Retrieve OS version.

### Returns

adk version string or empty string if not found

## has_blacklists() <a href="#ab23bef047899c8bc70dc5bc9358c4bab" id="ab23bef047899c8bc70dc5bc9358c4bab"></a>

<p>def has_blacklists</p>

Check if contains blacklists.

### Returns

True if contains blacklists, False if not

## has_os() <a href="#a93b2779240f10ad31268a857e1c00c98" id="a93b2779240f10ad31268a857e1c00c98"></a>

<p>def has_os</p>

Check if contains an OS.

### Returns

True if contains OS, False if not

## FieldDocumentation {#field-documentation}

## blacklists <a href="#a1a742cbc15274c5862c2d86ebb946399" id="a1a742cbc15274c5862c2d86ebb946399"></a>

<p>blacklists</p>

## dlfile <a href="#ac2881de57842eff0a0fc5b310000fae5" id="ac2881de57842eff0a0fc5b310000fae5"></a>

<p>dlfile</p>

## full_device_list <a href="#aa8ae066defd5d597cda90fbf82336268" id="aa8ae066defd5d597cda90fbf82336268"></a>

<p>full_device_list</p>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- packman/packmanlib/<a href="treeinfo_8py.md">treeinfo.py</a>
