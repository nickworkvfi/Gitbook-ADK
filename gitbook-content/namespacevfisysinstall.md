---
hidden: true
title: vfisysinstall Namespace Referenceinstallation functions
---

[Functions](#func-members)

|  |  |
|----|----|
| Functions |  |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a>  | [sysAuthenticateFile](#a0860cad505a474f8a061cdf2d298863c) (const std::string &path) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a>  | [sysInstall](#aa32611fb3057a6b9c560396807476304) (const std::string &path) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a>  | [sysBaseInstall](#a32b8ada3672bd95b04fca4c2c61623a1) () |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a>  | [sysFreeResourcesInstall](#ae97c35980e2527791d524fb9e28f25cc) (const std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a>  | [sysGetInstallStatus](#ad0be97821636d524f2cc56c7106e1217) (<a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &json) |

## DetailedDescription {#detailed-description}

Verifone vfisysinstall namespace

## FunctionDocumentation {#function-documentation}

## sysAuthenticateFile() <a href="#a0860cad505a474f8a061cdf2d298863c" id="a0860cad505a474f8a061cdf2d298863c"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a> vfisysinstall::sysAuthenticateFile</p>

Authenticate file

### Returns

SYS_ERR_OK - file is authenticated

SYS_ERR_FAIL - authentication error

## sysBaseInstall() <a href="#a32b8ada3672bd95b04fca4c2c61623a1" id="a32b8ada3672bd95b04fca4c2c61623a1"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a> vfisysinstall::sysBaseInstall</p>

Install bundle on base

### Returns

SYS_ERR_OK

SYS_ERR_FAIL

SYS_ERR_PROP_UNSUPPORTED

SYS_ERR_NOT_DOCKED

SYS_ERR_REBOOT_NEEDED

SYS_ERR_BUNDLE_VERSION - higher version already installed

## sysFreeResourcesInstall() <a href="#ae97c35980e2527791d524fb9e28f25cc" id="ae97c35980e2527791d524fb9e28f25cc"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a> vfisysinstall::sysFreeResourcesInstall</p>

Installs packages from the filepath passed in the function.

{% hint style="info" %}
Expect that the caller of this API is killed during installtion.
Depending on what action is needed (reboot or restart apps) to extract the packages into the filesystem, the installer will do the needful. The caller upon reboot/restart should call the new status API to find out the status of the installation. (VOS2 only)
{% endhint %}

### Returns

SYS_ERR_OK

SYS_ERR_PARAMETER

SYS_ERR_FILE_DOES_NOT_EXIST

SYS_ERR_PATHNAME_TOO_LONG

SYS_ERR_GET_CWD

SYS_ERR_FAIL

### Examples

<a href="demo-sysinfo_8cpp-example.md#a184">demo-sysinfo.cpp</a>.

## sysGetInstallStatus() <a href="#ad0be97821636d524f2cc56c7106e1217" id="ad0be97821636d524f2cc56c7106e1217"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a> vfisysinstall::sysGetInstallStatus</p>

Get JSON formatted status for the install API [sysFreeResourcesInstall()](#ae97c35980e2527791d524fb9e28f25cc) (VOS2 only)

### Returns

SYS_ERR_OK

SYS_ERR_FAIL

### Examples

<a href="demo-sysinfo_8cpp-example.md#a186">demo-sysinfo.cpp</a>.

## sysInstall() <a href="#aa32611fb3057a6b9c560396807476304" id="aa32611fb3057a6b9c560396807476304"></a>

<p><a href="dllspec_8h.md#a06244aced91c3fbc18547181038765aa">SYS_INFO_API</a> <a href="namespacevfisysinfo.md#aadc050f211cba10bc174fe72cc02ac09">vfisysinfo::sysError</a> vfisysinstall::sysInstall</p>

Install bundle

### Returns

SYS_ERR_OK -

SYS_ERR_FAIL - authentication error

SYS_ERR_PARAMETER

SYS_ERR_FILE_DOES_NOT_EXIST

SYS_ERR_PERMISSION

SYS_ERR_REBOOT_NEEDED

SYS_ERR_BUNDLE_VERSION - higher version already installed


{% hint style="info" %}
This API does not remove the installation package. The caller is responsible for removing the installation package.
{% endhint %}
