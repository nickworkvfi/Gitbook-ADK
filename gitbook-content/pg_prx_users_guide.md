---
hidden: true
title: ADK-Proxy Programmers Guide
---

# Preface <a href="#sec_prx_preface" id="sec_prx_preface"></a>

This document contains information on how to use and integrate Cloud Proxy to access the Verifone Cloud.

## Audience <a href="#subsec_prx_audience" id="subsec_prx_audience"></a>

This guide helps application developers to install and utilize the functionality of Cloud Proxy.

## Organization <a href="#subsec_prx_organization" id="subsec_prx_organization"></a>

This guide is organized as follows:

[Chapter 1, Overview](#sec_prx_overview): Provides the introduction and overview for Cloud Proxy.

[Chapter 2, Supported Platforms & System Requirements](#sec_prx_supported_platforms): Shows the OS platforms Cloud Proxy is provided for and specifies prerequisites to the environment.

[Chapter 3, Environments and Download Packages](#sec_prx_cloud_proxy_packages): Description of Cloud Proxy installation packages and packages to activate or add additional cloud environments.

[Chapter 4, Environment Configuration File](#sec_prx_environment_configuration): Description of Cloud Proxy environment configuration file and parameters.

[Chapter 5, Local HTTP Proxy Support](#sec_prx_local_http_proxy_support): Description how to configure a local HTTP proxy

[Chapter 6, Getting Started](#sec_prx_getting_started): How to getting Cloud Proxy started on several platforms.

[Chapter 7, Error Handling](#sec_prx_error_handling): Internal Error messages of Cloud Proxy and its meaning.

[Chapter 8, Troubleshooting](#sec_prx_troubleshooting): Measures for identification and fixing problems.

[Chapter 9, CP Log Forwarder](#sec_prx_cp_log_forwarder): How to setup and configure the CP Log Forwarder.

[Chapter 10, Cloud Proxy Configuration Interface](#sec_prx_configuration_interface): How to use Cloud Proxy Configuration Interface.

Appendix [Version History and Greenbox Migration](#sec_prx_versions_greenbox) provides additional information about Cloud Proxy Version History. Depending on version, Cloud Proxy will migrate to Greenbox (GSC endpoints).

## Related Documentation <a href="#subsec_prx_relateddocs" id="subsec_prx_relateddocs"></a>

To learn more about the ADK framework, please refer to the following documents:

- ADK GUI Programmers Guide
- ADK SYS Programmers Guide
- ADK Communication Service Programmers Guide
- ADK Logging Programmers Guide

# Acronyms Definition <a href="#sec_prx_acronyms" id="sec_prx_acronyms"></a>

| Acronym | Definitions |
|----|----|
| <p>ADK</p> | <p>Application Development Kit</p> |
| <p>API</p> | <p>Application Programming Interface</p> |
| <p>DNS</p> | <p>Domain Name System</p> |
| <p>EOF</p> | <p>End of File</p> |
| <p>IPC</p> | <p>Inter Process Communication</p> |
| <p>JSON</p> | <p>JavaScript Object Notation</p> |
| <p>OS</p> | <p>Operating System</p> |
| <p>SDK</p> | <p>Software Development Kit</p> |
| <p>TCP/IP</p> | <p>Transmission Control Protocol/Internet Protocol</p> |
| <p>VOS</p> | <p>Verifone Operating System</p> |
| <p>VOS2</p> | <p>Verifone Operating System (Version 2)</p> |
| <p>VFI Cloud</p> | <p>Computer network providing online services and applications to Verifone terminals</p> |
| <p>CP</p> | <p>Commerce Platform</p> |
| <p>CPR</p> | <p>Commerce Platform Runtime</p> |
| <p>HTML</p> | <p>Hypertext Markup Language</p> |
| <p>CSS</p> | <p>Cascading Style Sheets</p> |
| <p>JS</p> | <p>JavaScript</p> |
| <p>MAC</p> | <p>Multi Application Controller</p> |
| <p>TLS</p> | <p>Transport Layer Security</p> |
| <p>SSL</p> | <p>Secure Socket Layer</p> |
| <p>PK</p> | <p>Private Key</p> |
| <p>CA</p> | <p>Certificate Authority</p> |
| <p>URL</p> | <p>Uniform Resource Locator</p> |
| <p>PEM</p> | <p>Privacy Enhanced Mail</p> |
| <p>base 64</p> | <p>Binary-to-text encoding schemes that represent binary data in an ASCII string format</p> |
| <p>sysmode</p> | <p>System mode, administration GUI front-end on Fusion/Engage</p> |
| <p>RTT</p> | <p>Round Trip Time</p> |
| <p>CpDev</p> | <p>CP Development Unit</p> |
| <p>OsDev</p> | <p>OS Development Unit</p> |
| <p>ASL</p> | <p>ADK system launcher</p> |
| <p>LAN</p> | <p>Local area network</p> |

# Overview <a href="#sec_prx_overview" id="sec_prx_overview"></a>

With Verifone Commerce Platform Runtime (CPR) a new application type was introduced: **Commerce Platform Applications (CP applications)**.

CP applications are considered as alternative applications formed by HTML/CSS/JS and can run beside native C/C++ applications that are typically in use for payment processing. CP applications usually operate online and they use HTTP requests to communicate with remote services of the VFI Cloud. Due to security reasons, CP applications must not be allowed to open arbitrary connections to external servers. Also direct incoming connections must not be allowed. For this reason, CP applications run in a controlled environment, some kind of sandbox, which is provided by the Multi Application Controller (MAC).

![Cloud Proxy Overview](proxy_overview.png)

All connections initiated by CP applications are established and processed in context of MAC, which uses the local loopback device to connect to the Cloud Proxy running on the same terminal. MAC uses HTML based ADK GUI component, which allows CP applications to use JavaScript (JS) interface `xmlHTTPRequest()` for sending and receiving HTTP requests and responses. Cloud Proxy acts as HTTP gateway for CP applications and provides a secure SSL channel to VFI Cloud (TLSv1.2). For establishing the mutual authenticated SSL channel both instances, Cloud Proxy and Server have certificates and private keys required for secure encryption and authentication:

*Cloud Proxy:*

| Data file | Description |
|----|----|
| <p>Cloud Proxy certificate</p> | <p>Certificate containing the public key of the Cloud Proxy signed by Verifone Certificate Authority (VFI CA). This is used to authenticate the Cloud Proxy on the Cloud Server side.</p> |
| <p>VFI CA certificate</p> | <p>Certificate of the VFI CA. Cloud Proxy uses this certificate to verify the signature of the Cloud Server certificate to authenticate the Cloud Server.</p> |
| <p>PK Cloud Proxy</p> | <p>Private key of the Cloud Proxy, usually stored in secure area of the terminal. This key corresponds to the public key stored in Cloud Proxy certificate and it is used authenticate the Cloud Proxy on the Cloud Server side.</p> |

*Cloud Server:*

| Data file | Description |
|----|----|
| <p>Cloud Server certificate</p> | <p>Certificate containing the public key of the Cloud Server signed by Verifone Certificate Authority (VFI CA). This is used to authenticate the Cloud Server on the Cloud Proxy side.</p> |
| <p>VFI CA certificate</p> | <p>Certificate of the VFI CA. Cloud Server uses this certificate to verify the signature of the Cloud Proxy certificate to authenticate the Cloud Proxy.</p> |
| <p>PK Cloud Server</p> | <p>Private key of the Cloud Server. This key corresponds to the public key stored in Cloud Server certificate and it is used authenticate the Cloud Server on the Cloud Proxy side.</p> |

{% hint style="info" %}
Overview illustrates the case that both certificates, Cloud Proxy and Cloud Server certificate, were signed by one common VFI CA.
{% endhint %}

### **Long-lived TLS connection to Cloud Server**

If a local client (e.g. CP app) sends a HTTP request, Cloud Proxy will establish a new TLS connection, if it has not connected before or the existing connection was closed or is disturbed. After some validation of the HTTP document, Cloud Proxy redirects the message to the Cloud Server. When response from Cloud Server is received, Cloud Proxy keeps the existing TLS channel as long as it is not closed by the server. This will avoid high RTTs for multiple HTTP requests, which would be caused by overhead of the TLS handshake during connection setup. After SSL negotiation, more efficient symmetric ciphers are used, therefore subsequent HTTP requests can be transmitted more faster than single, sporadic requests, which require a reconnect to the server.

{% hint style="info" %}
Since version 2.0.0 Cloud Proxy has implemented SSL sessionID caching according RFC 5246. SSL session resumption eliminates the private key operation when reconnecting to a service and, therefore, dramatically speeds up TLS connection setup.
{% endhint %}

# Supported Platforms & System Requirements <a href="#sec_prx_supported_platforms" id="sec_prx_supported_platforms"></a>

Download packages for Cloud Proxy are available for the following platforms:

- Fusion (VOS)
  System requirements: Cloud Proxy for VOS requires at least OS version 30250102 or later.
- Engage (VOS2)
  System requirements: Cloud Proxy for VOS2 requires at least OS version 30350102 or later.
- VOS3
  System requirements: Cloud Proxy for VOS3 requires at least OS version VOS3_0.0.30-CD or later.

# Environments and Download Packages <a href="#sec_prx_cloud_proxy_packages" id="sec_prx_cloud_proxy_packages"></a>

There are several variants and endpoints of Verifone Cloud. Each variant/endpoint represents an environment, which is addressed by its own URL. Implementation and configuration of these environments are different, therefore, users must be aware of using the correct endpoint, which provides required web services for the used CP apps. In addition, these environment endpoints require different authentication settings like certificates to establish secure connection with SSL. For this reason, several download packages are provided to install and activate a specific environment.

Cloud Proxy installs several default environments with the base package (see chapter [Cloud Proxy base packages](#subsec_prx_base_packages)). Users can install an additional activation package on top to activate a specific default environment (see chapter [Default environments and activation](#subsec_prx_default_environments)). In addition, users have to the option to install an User Configuration Package to add own environments if required (see chapter [Install additional environments](#subsec_prx_install_additional_environments)).

{% hint style="info" %}
Since version 3.1.0 of Cloud Proxy, terminals will migrate to new GSC environments of **Verifone Greenbox**. Old default environment endpoints of Verifone Cloud Gateway (CG) can still be used for compatibility reasons, but please note that Cloud Proxy will automatically switch to new GSC endpoints when it is updated. For more details please refer to chapter [Version History and Greenbox Migration](#sec_prx_versions_greenbox).
Since version 3.2.0 (and version 3.0.40), Cloud Proxy has added support to add environments with the installation of an User Configuration Package. For more details please refere to chapter [Install additional environments](#subsec_prx_install_additional_environments).
{% endhint %}

## Cloud Proxy base packages <a href="#subsec_prx_base_packages" id="subsec_prx_base_packages"></a>

The following table lists the base download packages to install or uninstall Cloud Proxy:

[TABLE]

## Default environments and activation <a href="#subsec_prx_default_environments" id="subsec_prx_default_environments"></a>

Each environment is specified by a configuration file having name `<environment>.env`. The content and configuration settings for an environment file are described in chapter [Environment Configuration File](#sec_prx_environment_configuration).
Cloud Proxy base package (see [Cloud Proxy base packages](#subsec_prx_base_packages)) installs several default environments, which are listed in the following table:

| Environment name | Configuration file | Description |
|----|----|----|
| <p>**`gsc_dev`**</p> | <p>`gsc-dev.env`</p> | <p>Environment settings for GSC Development Cloud [**(default for CpDev and OsDev units)**]{style="color:red"}</p> |
| <p>**`gsc_qat`**</p> | <p>`gsc-qat.env`</p> | <p>Environment settings for GSC Test Cloud</p> |
| <p>**`gsc_cst`**</p> | <p>`gsc-cst.env`</p> | <p>Environment settings for GSC Staging Cloud</p> |
| <p>**`gsc_prod`**</p> | <p>`gsc-prod.env`</p> | <p>Environment settings for GSC Productive Cloud [**(Default for productive units)**]{style="color:red"}</p> |
| <p>**`gsc_cst_us`**</p> | <p>`gsc-cst-us.env`</p> | <p>Environment settings for GSC Staging Cloud **(US region)**</p> |
| <p>**`gsc_prod_us`**</p> | <p>`gsc-prod-us.env`</p> | <p>Environment settings for GSC Productive Cloud **(US region)**</p> |

On Fusion (VOS) and Engage (VOS2) the default environment files are located in subfolder `proxy` in working directory of binary `cloudproxy` under `/home/sys13`.
On VOS3 platform the user has changed to `sys_prx`, thus, all files of Cloud Proxy are installed under `/home/sys_prx`.

In addition, Cloud Proxy base package installs the following symbolic links pointing to one environment file above:

| Environment link | Environment file | Description |
|----|----|----|
| <p>**`dev.env`**</p> | <p>`gsc-dev.env`</p> | <p>Environment settings for GSC Development Cloud</p> |
| <p>**`test.env`**</p> | <p>`gsc-qat.env`</p> | <p>Environment settings for GSC Test Cloud</p> |
| <p>**`statging1.env`**</p> | <p>`gsc-cst.env`</p> | <p>Environment settings for GSC Staging Cloud</p> |
| <p>**`prod.env`**</p> | <p>`gsc-prod.env`</p> | <p>Environment settings for GSC Productive Cloud</p> |

{% hint style="info" %}
Symbolic links were introduced for the following since version 3.0.40 and 3.4.0 for the following reasons: \[unsupported block\]
{% endhint %}

With installation of an additional activation package, the user can activate another environment to select another cloud gateway endpoint.
Depending on the device type, Cloud Proxy uses a specified environment as default, if it was started for the first time without installed activation package.

{% hint style="info" %}
In addition, since versions 3.0.40 and 3.4.0 different CG and GSC endpoint are used as defaults. Please refer to documentation of corresponding Cloud Proxy version to get more details.
Since version 3.5.0 (VOS3 support added), CG endpoints are no longer installed as default environments with the base package. Only versions \>=3.0.50 can use it, which is available for VOS/VOS2 only.
{% endhint %}

The following activation packages are provided with this Cloud Proxy release:

[TABLE]

## Install additional environments <a href="#subsec_prx_install_additional_environments" id="subsec_prx_install_additional_environments"></a>

Since version 3.2.0 (and version 3.0.40), Cloud Proxy has added support to install User Configuration Packages to add additional environments with required SSL certificates. User Configuration Packages are provided by the Cloud Proxy end users (application or integration team), thus, these packages can be signed having sponsor signing previleges (e.g. with regional singing cards for VOS/VOS2).

{% hint style="info" %}
Cloud Proxy uses the same configuration files for different platforms. Please note that VOS3 platform uses a different package format and location on target. Therefore, the following chapters will show the differences for each supported platform.
{% endhint %}

### VOS/VOS2 User Configuration Packages <a href="#subsubsec_prx_user_config_vos_vos2" id="subsubsec_prx_user_config_vos_vos2"></a>

Basically, Cloud Proxy User Configuration Packages for VOS/VOS2 are installed to following read-only device location:

``` fragment
/etc/config
```

User Configuration Packages for Cloud Proxy must use subfolder `proxy` so that the related files will be located on the devices at follows:

``` fragment
/etc/config/proxy
```

User Configuration Packages may contain the following data:

1.  Bundle with arbitrary name (user: `usr1-usr16`):
    - Package with arbitrary name (user: `usr1-usr16`, group: `share`, type: `config`):
      | Destination | File | Description |
      |----|----|----|
      | <p>`/etc/config/proxy`</p> | <p>`<environment>.env`</p> | <p>Environment configuration file as specified in chapter [Environment Configuration File](#sec_prx_environment_configuration).</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>Flag `activate` in section `cloud` in the configuration file can be used to activate the environment with the next startup of Cloud Proxy (after the User Configuration Package is installed).</p> <p><br/></p> {% endhint %} <p>The filename `<environment>.env` must differ to default environment files as installed with the Cloud Proxy base package (see chapter [Default environments and activation](#subsec_prx_default_environments)). If a name conflicts, the environment file `<environment>.env` of the User Configuration Package is ignored.</p> |
      | <p>`/etc/config/proxy`</p> | <p>`*.pem, *.p12`</p> | <p>Additional certificates/key files, which are referred by the environment file `<environment>.env`. For more details refer to descritiption of `ca-file` and `client-id` in chapter [Environment Configuration File](#sec_prx_environment_configuration).</p> |

{% hint style="info" %}
For more details how to create such an User <a href="class_config.md">Config</a> Package, please refer to user guide Verifone Secure Installer ERS.
{% endhint %}

### VOS3 User Configuration Packages <a href="#subsubsec_prx_user_config_vos3" id="subsubsec_prx_user_config_vos3"></a>

Cloud Proxy user configuration is read-only and shall be installed with user previleges (signer `SPONSOR`).
VOS3 system typically installs read-only user files with package type `user_ro`, which means that the files will be placed to home directory for user `usr1`-`usr16`:

``` fragment
/home/usr<X>
```

Since other application files are located there, User configuration Packages for Cloud Proxy must use subfolder `proxy` to separate them from application:

``` fragment
/home/usr<X>/proxy
```

Additional group permissions must be set for the package so that Cloud Proxy is able to access and lookup the files.

At startup Cloud Proxy checks for the existence of the folder with included files starting from `usr1` up to `usr16`. If there are related files found under a specific user, this user directory is applied as source for user configuration files.
This means, the first user providing the files wins, other users with higher user numbers will be ignored.

User Configuration Packages may contain the following data:

1.  Bundle with arbitrary name (user: `usr1-usr16`):
    - Package with arbitrary name (user: `usr1-usr16`, group: `usr1sys`, type: `user_ro`):
      | Destination | File | Description |
      |----|----|----|
      | <p>`/home/usr<X>/proxy`</p> | <p>`<environment>.env`</p> | <p>Same as for VOS/VOS2 platform, for description please refer to chapter [VOS/VOS2 User Configuration Packages](#subsubsec_prx_user_config_vos_vos2) above.</p> |
      | <p>`/home/usr<X>/proxy`</p> | <p>`*.pem, *.p12`</p> | <p>Same as for VOS/VOS2 platform, for description please refer to chapter [VOS/VOS2 User Configuration Packages](#subsubsec_prx_user_config_vos_vos2) above.</p> |

A sample User Configuration Package for the corresponding platform comes along in subfolder `example/load/usr_config` of documentation package `prx-doc-X.X.X-X.zip`:

- **dl.prx-usrconfig-sample-env-X.X.X-X.tar**
  This package installs a sample environment file `sample.env` with a root CA certificate `mycloud-ca.pem`. The certificate is refered by `ca-file` in the environment file, which is used to autenticate the server for cloud endpoint `url`.
- **dl.prx-usrconfig-old-cg-envs-X.X.X-X.tar**
  This package installs old CG environments (`dev`, `test`, `staging1` and `prod`) for `verifone.cgateway.com`. Please note that these environments are [deprecated]{style="color:red"} and shouldn\'t longer be used productive environments. Users should migrate to the new GSC environments soon, since old CG environment endpoints will go offline sooner or later. For more details please refer to chapter [Version History and Greenbox Migration](#sec_prx_versions_greenbox).

# Environment Configuration File <a href="#sec_prx_environment_configuration" id="sec_prx_environment_configuration"></a>

This chapter describes the content and settings of an environment configuration file. Several default environments come along with installation of Cloud Proxy base package (see chapter [Cloud Proxy base packages](#subsec_prx_base_packages)), which can be activated with additional packages installed on top of the base installation. In addition, users have the option to install additional environments with a User Configuration Package (see chapter [Install additional environments](#subsec_prx_install_additional_environments)).

The configuration file for the active environment is read at startup of Cloud Proxy and contains the following settings:

(Example configuration file: `gsc_qat` environment in file `test.env`)

``` fragment
[cloud]
; URL of the VFI-Cloud environment, e.g. vfi-cloud.verifone.com:8843, URL is mandatory, default port: 8843
url=qat2.test-gsc.vfims.com:443
; name of the environment (alias). This is used as 'environment name' with the Cloud Proxy Configuration Interface
; (see parameters cloud_env_list and cloud_env_list2). If not set, the environment filename is used without
; extension *.env. Please note that alias must be identical crossover environment configuration files and also not
; conflict with other environment filenames, if these files don't use an alias.
alias=gsc_qat
; productive environment, set to value 'true', if this environment uses productive AuthEx CA, which can be used by productive units only.
; Value 'false' implies that only cp-dev and os-dev devices can use this environment having DEV AuthEx CA (default: false).
; Please note variable 'allow_prod_unit', which allows productive units to use non-prod environment with AuthEx!
prod=false
allow_prod_unit=true
; activate this environment after it is installed with user config package, default: false
; activate=false -> default configuration coming along with Cloud Proxy base package
; name of the file containing the root CA certificate of VFI cloud, default=cloud-ca.pem
; Note: In case of using 'new-ca-file', 'ca-file' contains 2 CA root certificates, which
; are used during transition phase to migrate VFI cloud to a new CA (CA update):
; 1. CA certificate: for VFI cloud with the current CA to be replaced (before the CA update)
; 2. CA certificate: for VFI cloud with the new CA (after the CA update)
ca-file=cloud-ca.pem
; name of the file containing the new root CA certificate of VFI cloud after a pending
; CA update, default=empty
; Note: This certificate must equal the new 2. CA certificate specified in file 'ca-file',
;       since Cloud Proxy switches from 'ca-file' to 'new-ca-file', after it has connected
;       to the updated VFI cloud for the first time. From this point, Cloud Proxy will not
;       be able to connect to VFI cloud using the old CA.
; new-ca-file=new-cloud-ca.pem

[proxy]
; filename of the PEM or PKCS12 file containing an alternative client certificate/private key.
; This is used, if device hasn't installed AuthEx certificate/key or AuthEx was disabled Cloud Proxy Configuration Interface.
; default: empty (force usage of AuthEx certifcate/key if installed)
; client-id=
; label string used by cloudproxy for the client certificate (if empty 'client-id' w/o file extension is used)
; client-id-label=
; client timeout in sec when waiting for replies from the cloud, default=30sec
timeout=30
; listen port number for incoming connections from the clients, default=8888
port=8888

[logservice]
; URL of the log gateway (usually a relative path)
url=/cp
; host as destination for the logs (host used for routing the logs)
host=logging-service.verifone.com
; initial log level used for CP app logging, default=5
loglevel=7

[connectivity]
; URL of the availability service (usually a relative path)
url=/DeviceConnectivity/Check
; availability service host
host=gsc
```

Description of settings in configuration file `<environment>.env`:

| Section | Parameter | Description |
|----|----|----|
| <p>`cloud`</p> | <p>`url`</p> | <p>URL of the VFI Cloud gateway, which specifies a host name (and a port). Both parameters are separated by \':\'. If no port is specified, port `8843` is used as default.</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>Please note that the cloud host name is mandatory and Cloud Proxy will not start, if it is not configured.</p> <p><br/></p> {% endhint %} |
| <p>`cloud`</p> | <p>`alias`</p> | <p>Name or alias used for the environment. Parameter `alias` is optional. If not set, the environment filename is used without extension `*.env` (e.g. `prod.env` will use name `prod`).</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>The environment name must be unambiguous crossover environment configuration files. If it conflicts with another environment name, the environment file is ignored. The environment name is used [Cloud Proxy Configuration Interface](#sec_prx_configuration_interface) for parameters `cloud_env`, `cloud_env_list`, `cloud_env_list2`.</p> <p><br/></p> {% endhint %} |
| <p>`cloud`</p> | <p>`prod`</p> | <p>Flag set to `true`, if the environment is productive and uses productive AuthEx CA. This CA can be used by productive units only. Value `false` means that the environment is not productive and can only be accessed by CpDev and OsDev devices (as long as `allow_prod_unit` is not set to `true` (see below). Default value for `prod` is `false`.</p> |
| <p>`cloud`</p> | <p>`allow_prod_unit`</p> | <p>Flag set to `true`, if the non-productive environment (`prod` set to `false`) is allowed to be used by a productive unit using AuthEx. This value is ignored, if `prod` is set to `true`. Default value for `allow_prod_unit` is `false`.</p> |
| <p>`cloud`</p> | <p>`activate`</p> | <p>Flag set to `true`, if the environment specified with this configuration files shall be activated, if it is installed (default: `false`). Default environments installed with Cloud Proxy base package don\'t use this flag. This was introduced for additional environments installed with an User Configuration Package (see chapter [Install additional environments](#subsec_prx_install_additional_environments)).</p> |
| <p>`cloud`</p> | <p>`ca-file`</p> | <p>File containing the X.509 root CA certificate of the VFI cloud. Cloud Proxy uses this certificate to verify the signature of the Cloud Server certificate to authenticate the Cloud Server. The file is in PEM format (Privacy Enhanced Mail) and stores the certificate base 64 encoded. If parameter `ca-file` is not specified, Cloud Proxy uses ca-file.pem as default. If the file does not exist, Cloud Proxy will not start and aborts with an error.</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>If a relative file path is used, Cloud Proxy binary will lookup the certificate file relative to this environment configuration file.</p> <p><br/></p> <p>In case of using `new-ca-file`, `ca-file` contains 2 CA root certificates, which are used during transition phase to migrate VFI cloud to a new CA (CA update): \[unsupported block\]</p> <p><br/></p> {% endhint %} |
| <p>`cloud`</p> | <p>`new-ca-file`</p> | <p>File containing the new X.509 root CA certificate for the VFI cloud after a pending CA update. The file is in PEM format (Privacy Enhanced Mail) and stores the certificate base 64 encoded. If parameter `new-ca-file` is not specified, Cloud Proxy is not prepared for a CA update and and uses the root CA certificate specified by `ca-file` . If `new-ca-file` is specified and the file does not exist, Cloud Proxy will not start and aborts with an error.</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>The new root certificate must equal the new 2. CA certificate specified in file `ca-file`, since Cloud Proxy switches from `ca-file` to `new-ca-file`, after it has connected to the updated VFI cloud for the first time. From this point, Cloud Proxy will not be able to connect to VFI cloud using the old CA.</p> <p><br/></p> <p>If a relative file path is used, Cloud Proxy binary will lookup the certificate file relative to this environment configuration file.</p> <p><br/></p> {% endhint %} |
| <p>`proxy`</p> | <p>`client-id`</p> | <p>For testing purposes (e.g. development tests) or due to legacy reasons the filed `client-id` can optionally used to provide a file containing a X.509 certificate and a private key, which will be used as alternative to AuthEx. The certificate is transmitted to Cloud Server during connection setup to authenticate the terminal as a trusted client (mutual authenticated SSL connection). The file can be provided in PEM format (base 64 encoded, plain text) or in PKCS12 format, which data is usually encrypted with a password.</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>It is definitely **not recommented** to use an own client certificate/key, since storing the private key in file system is potentially insecure! Therefore, the field `client-id` should be removed (or kept empty) that will enable AuthEx certificate/key as preferred authentication method. AuthEx is usually available with pre-installed Warrenty Keys on all terminals. Warrenty Keys are stored in the terminal\'s vault and cloudproxy will use secure SSL engine to access the keys.</p> <p><br/></p> <p>If a relative file path is used, Cloud Proxy binary will lookup the certificate file relative to this environment configuration file.</p> <p><br/></p> {% endhint %} |
| <p>`proxy`</p> | <p>`client-id-label`</p> | <p>Label string used by Cloud Proxy for the client certificate specified by `client-id`. The label is returned [Cloud Proxy Configuration Interface](#sec_prx_configuration_interface) in certificate list for each in environemnt (see parameter `cloud_env_list2`). If this parameter is empty, Cloud Proxy used filename `client-id` w/o file extension.</p> |
| <p>`proxy`</p> | <p>`timeout`</p> | <p>Timeout in seconds which is used by Cloud Proxy to connect or receive data from the Cloud Server. If no connection could be established or no data is received from Cloud Server within the specified timeout, the Cloud Proxy returns a HTTP error response to the requesting client. For more details please refer to chapter [Error Handling](#sec_prx_error_handling).</p> |
| <p>`proxy`</p> | <p>`port`</p> | <p>This parameter specifies the listen port for incoming connections from clients. Please note that the listen port on productive units is restricted to local loopback device and external incoming connections are declined. No authentication is implemented and all local processes are allowed to connect. This means that access is not restricted to CP applications and MAC only. Default port is `8888`.</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>For testing and development purposes the port is enabled for external access when using a test unit (CpDev and OsDev).</p> <p><br/></p> {% endhint %} |
| <p>`logservice`</p> | <p>`url`</p> | <p>URL of the webserver providing the *Verifone CP Logging Service*. This is usually a fully qualified URL with a host name (and a port). If the webserver is behind a reverse proxy the URL might be relative path. Optional parameter `host` can be specified to address a downstream server behind the proxy. Host name and port of the URL are separated by \':\'. If no port is specified, port `80` is used as default. Please note that this URL is mandatory and CP Log Forwarder is disabled, if it is not configured or empty. For more details please refer to chapter [CP Log Forwarder](#sec_prx_cp_log_forwarder).</p> |
| <p>`logservice`</p> | <p>`host`</p> | <p>This value specifies the destination host for the logs. Usually this parameter is used for routing, if the webserver for the *Verifone CP Logging Service* is behind a proxy. This could also be third party host receiving the logs. CP Logging data is forwarded to the VFI Cloud gateway, therefore, value `host` is not interpreted, just added as field `Host` in HTTP header of the CP logging message. The parameter `host` is optional.</p> |
| <p>`logservice`</p> | <p>`loglevel`</p> | <p>This is the initial log level used for CP app logging. The default is 5. CP log messages with a logging level above `loglevel` are filtered and not send to *Verifone CP Logging Service*. The VFI Cloud may update this value per CP app during runtime.</p> |
| <p>`connectivity`</p> | <p>`url`</p> | <p>URL of the webserver providing the *Verifone Connectivity Service*. This is usually a fully qualified URL with a host name (and a port). If the webserver is behind a reverse proxy the URL might be relative path. Optional parameter `host` can be specified to address a downstream server behind the proxy. Host name and port of the URL are separated by \':\'. If no port is specified, port `80` is used as default. Please note that this URL is mandatory and connectivity check is disabled, if it is not configured or empty. For more details please refer to chapter [Cloud Connectivity Check](#subsec_prx_connectivity_check).</p> |
| <p>`connectivity`</p> | <p>`host`</p> | <p>This value specifies the destination host for the connectivity check requests. Usually this parameter is used for routing, if the webserver for *Verifone Connectivity Service* is behind a proxy. HTTP messages for connectivity check are forwarded to the VFI Cloud gateway, therefore, value `host` is not interpreted, just added as field `Host` in HTTP header of the connectivity check request. The parameter `host` is optional.</p> |

# Local HTTP Proxy Support <a href="#sec_prx_local_http_proxy_support" id="sec_prx_local_http_proxy_support"></a>

Since version 3.4.0 (and version 3.0.40), Cloud Proxy has added support to establish Cloud connections over a HTTP proxy. This HTTP proxy usually is available in LAN and provides HTTP clients access to outer world. Instead of connecting to Cloud endpoint directly (which is specified by [Environment Configuration File](#sec_prx_environment_configuration)), Cloud Proxy first establishes the TCP/IP connection to this local HTTP proxy. As second step it sends a HTTP CONNECT request to this proxy to establish a transparent TCP/IP channel to the Cloud endpoint. Finally, Cloud Proxy does the TLS handshake over this spliced channel to establish a secure end-to-end TLS connection to the Cloud endpoint.

The activation of a local HTTP proxy is done by configuration file `httpproxy.cfg`.
The file may contain multiple sections to configure a HTTP proxy for one or more specific Cloud environments.

``` fragment
; productive environment gsc_prod uses this proxy (specified by prod.env)
[gsc_prod]
proxy=192.168.188.250:8888
attribute_1=Proxy-Authorization: Basic YW5kcmU6ZHJvd3NzYXA=
attribute_2=X-VFI-TEST: Some proxy data
attribute_3=X-VFI-TEST2: More proxy data

; pseudo environment name 'default' is used to configure a default HTTP proxy
[default]
proxy=192.168.188.250:8080
attribute_1=X-VFI-TEST: Some proxy data
attribute_2=X-VFI-TEST2: More proxy data
```

The section name represents the environment name, which is either the environment alias specified in (see [Environment Configuration File](#sec_prx_environment_configuration)) or the basename of environment configuration file w/o extension, in case no alias is used.

{% hint style="info" %}
Default environment configurations provided with Cloud Proxy base package use aliases, which are listed in table of chapter [Default environments and activation](#subsec_prx_default_environments) as environment name. Thus, user must specify the section by these names to match an environment, e.g. `gsc_prod` is used for environment file `gsc-prod.env`.
{% endhint %}

Pseudo environment name `default` represents the default HTTP proxy, which is used, if the name of the active environment does not match any other section. Section `default` can be used as one and only section, if only one proxy shall be used for all environments. If section `default` is omitted and no corresponding section matches to the name of the active environment, no local HTTP proxy will be used.

{% hint style="info" %}
If additional environments are installed by User Configuration Package (see chapter [Install additional environments](#subsec_prx_install_additional_environments)), users should avoid to use `default` as environment name. In this case section `default` would be applied for this environment only.
{% endhint %}

Description of section parameters in configuration file `httproxy.cfg`:

| Parameter | Description |
|----|----|
| <p>`proxy`</p> | <p>URL of the HTTP proxy, which specifies a host name or IP address (with a port). Both parameters are separated by \':\'. If no port is specified, port `8888` is used as default.</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>Please note that parameter `proxy` is mandatory and section skipped, if it misses mandatory data or contains an invalid format.</p> <p><br/></p> <p>IPv6 IP address are bracketed with `[]`, example: `proxy=[::1]:12345`.</p> <p><br/></p> {% endhint %} |
| <p>`attribute_<number>`</p> | <p>HTTP header attribute(s) added to HTTP CONNECT request, which is sent to HTTP proxy to establish the TCP/IP channel. Attribute `<number>` starts with 1, numbers of following attributes must have ascending order.</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>Attributes for HTTP CONNECT might be required, if the HTTP proxy requires authentication with `Proxy-Authorization`.</p> <p><br/></p> {% endhint %} |

HTTP proxy configuration file `httpproxy.cfg` is installed with an User Configuration Package. User Configuration Packages are provided by the Cloud Proxy end users (application or integration team), thus, these packages can be signed having sponsor signing previleges (e.g. with regional singing cards for VOS/VOS2).

{% hint style="info" %}
Cloud Proxy uses the same configuration files for different platforms. Please note that VOS3 platform uses a different package format and location on target. Therefore, the following chapters will show the differences for each supported platform.
{% endhint %}

## VOS/VOS2 User Configuration Packages <a href="#subsec_prx_local_proxy_user_config_vos_vos2" id="subsec_prx_local_proxy_user_config_vos_vos2"></a>

A VOS/VOS2 User Configuration Package is installed to `/etc/config`, whereas Cloud Proxy uses subfolder `/etc/config/proxy` (see also chapter [Install additional environments](#subsec_prx_install_additional_environments)).

An User Configuration Package to active/configure a HTTP proxy may contain the following data:

1.  Bundle with arbitrary name (user: `usr1-usr16`):
    - Package with arbitrary name (user: `usr1-usr16`, group: `share`, type: `config`):
      | Destination | File | Description |
      |----|----|----|
      | <p>`/etc/config/proxy`</p> | <p>`httpproxy.cfg`</p> | <p>HTTP proxy configuration file with content specified above. With restart of Cloud Proxy, the configuration will be read and applied for the environments.</p> |

## VOS3 User Configuration Packages <a href="#subsec_prx_local_proxy_user_config_vos3" id="subsec_prx_local_proxy_user_config_vos3"></a>

User Configuration Packages for VOS3 are installed to user home directory `/home/usr<X>`, whereas Cloud Proxy uses subfolder `/home/usr<X>/proxy` (see also chapter [Install additional environments](#subsec_prx_install_additional_environments)).

A VOS3 User Configuration Package to active/configure a HTTP proxy may contain the following data:

1.  Bundle with arbitrary name (user: `usr1-usr16`):
    - Package with arbitrary name (user: `usr1-usr16`, group: `usr1sys`, type: `user_ro`):
      | Destination | File | Description |
      |----|----|----|
      | <p>`/home/usr<X>/proxy`</p> | <p>`httpproxy.cfg`</p> | <p>Same as for VOS/VOS2 platform, for description please refer to chapter [VOS/VOS2 User Configuration Packages](#subsec_prx_local_proxy_user_config_vos_vos2).</p> |

A sample User Configuration Package for the corresponding platform comes along in subfolder `example/load/usr_config` of documentation package `prx-doc-X.X.X-X.zip`:

- **dl.prx-usrconfig-sample-proxy-X.X.X-X.tar**
  This package installs a sample configuration file `httpproxy.cfg` for using one HTTP proxy `192.168.188.34:8888` for all environments:

  ``` fragment
  ; all environments use 'default' proxy
  [default]
  proxy=192.168.188.34:8888
  attribute_1=Proxy-Authorization: Basic YW5kcmU6ZHJvd3NzYXA=
  attribute_2=X-VFI-TEST: Hello
  attribute_3=X-VFI-TEST2: World
  ```

# Getting Started <a href="#sec_prx_getting_started" id="sec_prx_getting_started"></a>

Depending on platform do the following steps to install Cloud Proxy:

- VOS/VOS2 platform:
  - Get latest load distribution package `prx-vos-load-X.X.X-X.zip` or `prx-vos2-load-X.X.X-X.zip` from Artifactory and extract it. Alternatively download full package `prx-full-X.X.X-X.zip` containing packages for all platforms.
  - On terminal enter sysmode (system mode) and put terminal into Netloader download mode
  - On PC start MX9 Downloader tool and download the base package `dl.cloudproxy-X.X.X-X.tar` (see chapter [Cloud Proxy base packages](#subsec_prx_base_packages))
  - After installation of the package in home directory of user `sys13`, the terminal reboots and cloudproxy service is automatically launched by launched by MAC. Please note that cloudproxy get launched only, if at least one CPApp is installed.
  - If required, user can install an additional activation package to enable a specific default environment (see chapter [Default environments and activation](#subsec_prx_default_environments)). For this, just repeat the steps above with the corresponding activation package.
- VOS3 platform:
  - Get latest load distribution package `prx-vos3-load-X.X.X-X.zip` from Artifactory and extract it. Alternatively download full package `prx-full-X.X.X-X.zip` containing packages for all platforms.
  - On terminal enter Software Control Panel (provided with MAC) and select button \"Download Netloader\" to put terminal into Netloader download mode
  - On PC start MX9 Downloader tool and download the base package `dl.cloudproxy-X.X.X-X.tar` (see chapter [Cloud Proxy base packages](#subsec_prx_base_packages))
  - After installation of the package in home directory of user `sys_prx`, the terminal reboots and cloudproxy service is automatically launched by MAC. Please note that cloudproxy get launched only, if at least one CPApp is installed.
  - If required, user can install an additional activation package to enable a specific default environment (see chapter [Default environments and activation](#subsec_prx_default_environments)). For this, just repeat the steps above with the corresponding activation package.

  {% hint style="info" %}
  Please note that Cloud Proxy binary depends on ADK libraries `libvfiipc` and `liblog`. Instructions for installation on the corresponding platform can be found in documentations of *ADKIPC* and *ADKLOG* projects.
  {% endhint %}

# Error Handling <a href="#sec_prx_error_handling" id="sec_prx_error_handling"></a>

After Cloud Proxy has accepted a new client connection to process a HTTP request, there might occur several errors for a variety of reasons. Behaviour and actions of Cloud Proxy in this error situations depend on phase of the live circle of the HTTP request. The following table lists the session states of Cloud Proxy in which HTTP request is processed and the possible errors, which will lead to the resulting actions:

[TABLE]

# Troubleshooting <a href="#sec_prx_troubleshooting" id="sec_prx_troubleshooting"></a>

On all platforms logging messages can be enabled by setting environment variable `PRX_LOGMASK`. This variable is defined as a bitmask consisting of following decimal values:

``` cpp
1 = LOG_EMERG: log messages for conditions, if system is unusable
2 = LOG_ALERT: log messages, which action must be taken immediately
4 = LOG_CRIT: log messages for critical conditions
8 = LOG_ERR: log messages for error conditions
16 = LOG_WARNING: log messages for warning conditions
32 = LOG_NOTICE: log messages for normal but significant conditions
64 = LOG_INFO: log messages with informational contents
128 = LOG_DEBUG: log debug-level messages
```

Default value for `PRX_LOGMASK` is `0`, which means that no logging outputs are activated by default. `LOG_EMERG` represents the lowest logging level, which only generates messages, if Cloud Proxy cannot be started or is not working at all. The highest level `LOG_DEBUG` will produce many messages of low-level I/O routines and should only be enabled for debugging purposes. For first analyses it is recommended to set `LOG_ERR`, which will provide information about error conditions, e.g. communication problems.

A console logging message consist of the following fields:

![](prx_logging_vos.png)

1\) *timestamp:*
The timestamp format is `<seconds>`.`<milliseconds>`. The value represents the time since beginning of capture (startup or first usage of IPC component).

2\) *log* *prefix*, *log* *channel:*
The field `log` `prefix` is used to identify Cloud Proxy as logging source. For identification of the subcomponent the field `log` `channel` was introduced. Recently this is always `PRX`, but other names can be used for future extensions.

{% hint style="info" %}
On Fusion (VOS), Engage (VOS2) and VOS3 Cloud Proxy is running as system process and environment variables can be set with intallation package only. Due to the fact that system packages require additional privileges to modify and resign them, users should prefer ADKLOG logging mechanism for these platforms, which is descriped below.
{% endhint %}

**Support for ADKLOG: Logging with liblog library**

Since version 2.0.1 the Cloud Proxy also has added support for ADKLOG component. ADKLOG is required to implement the new ADK logging concept, which provides the Logging Control Panel (LCP) used as central instance to configure and enable logging for the several ADK components. For this, LCP uses a configuration files (recently one for Cloud Proxy), which are read by `liblog` library. If installed on the system, `liblog` library will be used by Cloud Proxy to output logging messages. In this case, the logging messages are passed to `liblog` library instead of using console logging mechanism (with stderr), which is described above.

In order to lookup the corresponding configuration files, ADKLOG uses component identifiers, which are reserved for each ADK component. Cloud Proxy uses the following:

| Component Id | Configuration file | Description |
|----|----|----|
| <p>`PRX`</p> | <p>`PRX_log.conf`</p> | <p>Cloud Proxy related log settings</p> |

The configuration files contain several settings for logging like output channels, verbosity and a logging mask, which is similar to environment variable `PRX_LOGMASK`. For more details about configuration settings or logging message formats, please refer to documentation of ADKLOG project.

{% hint style="info" %}
If environment variable `PRX_LOGMASK` is set, console logging is preferred and ADKLOG with `liblog` is disabled. Only if the environment variable is unset, Cloud Proxy will lookup `liblog` library from the system to enable logging via ADKLOG.
{% endhint %}

# CP Log Forwarder <a href="#sec_prx_cp_log_forwarder" id="sec_prx_cp_log_forwarder"></a>

CP applications may generate logging messages, which needs to be transmitted to *Verifone CP Logging Service*. This service is coupled to the VFI Cloud server and the basic usage is to provide an interface to CP apps for statistics and error reporting. Without the need initially of a sensitive data logging filter the messages must be transferred in a secure way. Therefore, Cloud Proxy has implemented a CP Log Forwarder, which redirects messages to the *Verifone CP Logging Service* over the secure SSL channel to VFI Cloud. The CP Log Forwarder receives logging data from CP apps with notification `_CPLog` over interface of *ADKIPC* component. No result notification is returned to CP applications by the CP Log Forwarder. Content and format of Log HTTP messages are described in *CPR* documentation. For details about notification interface, please refer to *ADKIPC* documentation and the programmers guide.

CP Log Forwarder is configured in environment configuration file `<environment>.env` (see chapter [Environment Configuration File](#sec_prx_environment_configuration)).

# Cloud Proxy Configuration Interface <a href="#sec_prx_configuration_interface" id="sec_prx_configuration_interface"></a>

Since version 3.0.0 of Cloud Proxy, applications are allowed to use the remote configuration interface to read out information and settings of Cloud Proxy. Recently, the interface is fully implemented by CPDownloader application, which comes along with ADKGUI component. CPDownloader allows to show information like installed Cloud Proxy version or which environment or certificates are being used. In addition, a small amount of settings can be configured into Cloud Proxy, for instance, it is possible to switch the cloud environment during runtime. This chapter provides an overview about the Cloud Proxy Configuration Interface and instructions for applications that want to implement the interface instead of using CPDownloader.

Cloud Proxy Configuration Interface is provided via notification service of *ADKIPC* component. An application can send configuration requests as IPC notification with notification `CloudProxyConf`. After Cloud Proxy has processed the request, it responds with notification `CloudProxyConfResponse`. Both, configuration request and responses have a JSON encoded payload and use a JSON object `proxy` as container, which contains all data. An overview about the supported commands and its parameters is given by the following chapters.

{% hint style="info" %}
Please note that an application must initialize IPC notification service with a unique application ID. For more details please refer to *ADKIPC* documentation and the programmers guide.
{% endhint %}

## Read Static Information <a href="#subsec_prx_read_information" id="subsec_prx_read_information"></a>

Static information parameters like version and build details can be requested with command `info`. Static information parameters won\'t change until next reboot.

`CloudProxyConf` parameters:

| Container | Parameter | Content |
|----|----|----|
| <p>`proxy`</p> | <p>`command`</p> | <p>`info`</p> |

Example:

``` cpp
{
  "proxy" : {
   "command" : "info"
  }
}
```

`CloudProxyConfResponse` parameters:

| Container | Parameter | Content |
|----|----|----|
| <p>`proxy`</p> | <p>`auth_ex_support`</p> | <p>AuthEx key/certificate for SSL client authentication is installed and supported by the system:<br/>`1`=supported<br/>`0`=unsupported</p> |
| <p>`proxy`</p> | <p>`buildinfo`</p> | <p>Build information string of format:<br/>`<name> <version> <month> <day> <year> <hour>:<min>:<sec>`</p> |
| <p>`proxy`</p> | <p>`device_type`</p> | <p>Detected device type string:<br/>`prod`=productive unit<br/>`os-dev`=Fusion/Engage OsDev unit<br/>`cp-dev`=Fusion/Engage CpDev unit</p> |
| <p>`proxy`</p> | <p>`version`</p> | <p>Version string in format:<br/>`<major number>.<minor number>.<bugfix number>-<build number>`</p> |
| <p>`proxy`</p> | <p>`result`</p> | <p>Result:<br/>`success`=command successful<br/>`error`=command failed</p> |

Example:

``` cpp
{
  "proxy" : {
   "auth_ex_support" : 0,
   "buildinfo" : "cloudproxy 3.0.0-1 Mar 14 2018 12:16:56",
   "device_type" : "prod",
   "version" : "3.0.0-1",
   "result" : "success"
  }
}
```

## Read Configuration <a href="#subsec_prx_read_config" id="subsec_prx_read_config"></a>

Configuration settings can be read with command `readconfig`.

`CloudProxyConf` parameters:

| Container | Parameter | Content |
|----|----|----|
| <p>`proxy`</p> | <p>`command`</p> | <p>`readconfig`</p> |

Example:

``` cpp
{
  "proxy" : {
   "command" : "readconfig"
  }
}
```

`CloudProxyConfResponse` parameters:

[TABLE]

Example:

``` cpp
{
  "proxy" : {
   "auth_ex" : 1,
   "cloud_env" : "dev",
   "cloud_env_file" : "proxy/dev.env",
   "cloud_env_list" : ["prod", "dev", "test", "staging1"],
   "cloud_env_list2" : [
   {"name":"prod",
   "prod":true,
   "certs":["auth-ex"]
   },
   {"name":"dev",
   "prod":false,
   "certs":["auth-ex"]
   },
   {"name":"test",
   "prod":false,
   "certs":["auth-ex"]
   },
   {"name":"staging1",
   "prod":false,
   "certs":["auth-ex"]
   }
   ],
   "cloud_hostname" : "dev.cgateway.verifone.com",
   "result" : "success"
  }
}
```

## Write Configuration <a href="#subsec_prx_write_config" id="subsec_prx_write_config"></a>

Configuration settings can be written with command `writeconfig`.

`CloudProxyConf` parameters:

| Container | Parameter | Content |
|----|----|----|
| <p>`proxy`</p> | <p>`command`</p> | <p>`writeconfig`</p> |
| <p>`proxy`</p> | <p>`cloud_env`</p> | <p>Name of cloud environment to be enabled, a string of environment list provided with parameter `cloud_env_list` in command `readconfig` (see above).</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>Test units (CpDev and OsDev) does not allow to enable environment `prod` and in this case command `writeconfig` will fail on these devices.</p> <p><br/></p> {% endhint %} |
| <p>`proxy`</p> | <p>`auth_ex`</p> | <p>If installed and supported, AuthEx certificate for SSL client authentication can be enabled or disabled:<br/>`1`=enable<br/>`0`=disable</p> <p><br/></p> {% hint style="info" %} <p><br/></p> <p>It is not allowed to disable AuthEx certificate for an environment, which does not provide an alternative certificate in certificate list different than string `auth-ex` (see parameter `certs` in environment list `cloud_env_list2`).<br/>In addition, AuthEx certificate cannot be enabled, if it is not installed or supported by the system (see chapters [Read Static Information](#subsec_prx_read_information) and [Read Configuration](#subsec_prx_read_config)).<br/>In both cases command `writeconfig` will fail.</p> <p><br/></p> {% endhint %} |

Example:

``` cpp
{
  "proxy" : {
   "command" : "writeconfig",
   "cloud_env" : "dev",
   "auth_ex" : 0
  }
}
```

`CloudProxyConfResponse` parameters:

| Container | Parameter | Content |
|----|----|----|
| <p>`proxy`</p> | <p>`result`</p> | <p>Result:<br/>`success`=command successful<br/>`error`=command failed</p> |

Example:

``` cpp
{
  "proxy" : {
   "result" : "success"
  }
}
```

## Cloud Connectivity Check <a href="#subsec_prx_connectivity_check" id="subsec_prx_connectivity_check"></a>

Applications can use command `cloudcheck` to check the connectivity to VFI Cloud gateway. With this command Cloud Proxy will establish a secure SSL connection to VFI Cloud gateway, which will forward the request to *Verifone Connectivity Service* webserver, which is behind the VFI Cloud gateway. URL and host of the *Verifone Connectivity Service* webserver is configured in environment configuration file `<environment>.env` (see chapter [Environment Configuration File](#sec_prx_environment_configuration)).

`CloudProxyConf` parameters:

| Container | Parameter | Content |
|----|----|----|
| <p>`proxy`</p> | <p>`command`</p> | <p>`cloudcheck`</p> |

Example:

``` cpp
{
  "proxy" : {
   "command" : "cloudcheck"
  }
}
```

`CloudProxyConfResponse` parameters:

[TABLE]

Example:

``` cpp
{
  "proxy" : {
   "error_code" : 200,
   "error_reason" : "OK",
   "result" : "success"
  }
}
```

# Version History and Greenbox Migration <a href="#sec_prx_versions_greenbox" id="sec_prx_versions_greenbox"></a>

Versions \< 3.0.7 are out-dated and cannot be used any longer, since Commerce Gateway (CG) has changed server certificates to new root CA \"AddTrust External CA Root\" (Sectigo Limited). Therefore, older Cloud Proxy version won\'t be able to connect if installed.

Basically, ADK Cloud Proxy is provided as two different version variants:

- Versions \< 3.1.0 are used for older ADKs (ADK \<4.9), which use Verifone Commerce Gateway (CG) endpoints with base URL `cgateway.verifone.com`
- Versions \>= 3.1.0 are planned for ADKs \>=4.9 intened for use of new GSC environments of **Verifone Greenbox**.

With update of Cloud Proxy to version \>= 3.1.0, new GSC entpoints will automatically be applied with installation of the base package (see chapter [Cloud Proxy base packages](#subsec_prx_base_packages)).
The configured environment endpoint (used by old Cloud Proxy \< 3.1.0) is mapped to the corresponding new GSC endpoint, which will be used by the updated Cloud Proxy \>= 3.1.0.
The mapping of the environments during the update shows the follwing table:

| CG environment with old versions (\< 3.1.0) | GSC environment with new version (\>= 3.1.0) |
|----|----|
| <p>**`dev`** (dev.cgateway.verifone.com)</p> | <p>**`gsc_dev`** (dev2.test-gsc.vfims.com)</p> |
| <p>**`test`** (test.cgateway.verifone.com)</p> | <p>**`gsc_qat`** (qat2.test-gsc.vfims.com)</p> |
| <p>**`staging1`** (staging1.cgateway.verifone.com)</p> | <p>**`gsc_cst`** (cst2.test-gsc.vfims.com)</p> |
| <p>**`prod`** (cgateway.verifone.com)</p> | <p>**`gsc_prod`** (gsc.verifone.cloud)</p> |

Even version \>= 3.1.0 might use old CG environment endpoints, if the corresponding activation package is installed.
Finally, version 3.1.0 ADK Cloud Proxy has dropped support for Activation and Parameter Service, because the services were not used in past and no longer required. For this reason, customers must disable requests to the Activation and Parameter Service when using a newer Cloud Proxy in an older ADKs with Multi Application Controller (MAC) \< 3.78.3. Otherwise it won\'t be possible to activate installed CPApps. For more details please refer to MAC documentation or documentation of old Cloud Proxy versions.

Since version 3.2.0 Cloud Proxy has added support to add environments with the installation of an User Configuration Package (see chapter [Install additional environments](#subsec_prx_install_additional_environments)).

Because customers weren\'t able to migrate their CPApps to new GSC endpoints within the envisaged timeframe, existing ADKs still have integrated an old version 3.0.x.
Since 3.0.40 and 3.4.0 both version branches were synchronized and have a common code base, since features implemented for ADK 4.9 (e.g. GSC support) were also required for old ADKs. The only difference is version 3.4.0 will automatically switch to GSC endpoints with its installation, whereas version 3.0.40 will keep CG endpoints and must use activation packages to configure a GSC endpoint (see chapter [Default environments and activation](#subsec_prx_default_environments)). Thus, future ADKPRX releases will be provide in 2 variants supporting the same features. These variants use the following version schemes:

- `x.y.z` used for ADKs \>= 4.9
- `x.0.yz` used for older ADKs \< 4.9

With version 3.5.0 Cloud Proxy has added support for VOS3 platform. In addition, old CG endpoint were removed from the base package (see [Cloud Proxy base packages](#subsec_prx_base_packages)). Thus, old CG endpoints (`dev`, `test`, `staging1` and `prod`) are no longer available with default environments (see [Default environments and activation](#subsec_prx_default_environments) of version 3.5.0). Old ADKs for VOS/VOS2 from now must use version 3.0.50, if they still want to keep support for old endpoints, since version 3.5.0 as dropped it. Finally, documentation of version 3.0.50 declares CG endpoints as deprecated with recommendations to migrate to GSC. The last option to use old CG endpoints with version 3.5.0 is the installation of an User Configuration package on top of the base package. (see chapter [Install additional environments](#subsec_prx_install_additional_environments)). Customers are advised not to do this for new productive installations, since old CG environment endpoints will go offline sooner or later.

Since version 3.5.3 Cloud Proxy base package is provided as second variant for VOS and VOS2 platform. The reason is Cloud Proxy binary depends on OpenSSL, whereas older OS versions use OpenSSL 1.0.2, but since ADK 4.10 the OS will be upgraded to OpenSSL 3. Due to the fact different OpenSSL versions are used on these platforms for different ADKs, Cloud Proxy base package is provided as seperate variant `dl.cloudproxy-`**`ossl3`**`-X.X.X-X.tar` `dl.cloudproxy-`**`ossl3`**`-X.X.X-X-prod.tar`, which use name suffix **`-ossl3`**. The 2 variants will cover transition phase to new ADK 4.10 and the package w/o the suffix is kept as long as older ADKs with OpenSSL 1.0.2 must be supported.

For more version details please read release notes `prx-releasenotes-X.X.X-X.pdf` included in documentation package `prx-doc-X.X.X-X.zip`, which is provided with the ADK Cloud Proxy release.
