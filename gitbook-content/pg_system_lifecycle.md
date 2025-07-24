---
hidden: true
title: System Lifecycle
---

# System Lifecycle, Modes and Device States <a href="#system_lifecycle_modes_device_states" id="system_lifecycle_modes_device_states"></a>

## Lifecycle overview <a href="#lifecycle_overview" id="lifecycle_overview"></a>

![](vos3_system_lifecycle.png)

## Production and Application Development Modes <a href="#prod_and_app_dev_modes" id="prod_and_app_dev_modes"></a>

Verifone provides system users with following device modes:

- PRODUCTION mode
- APPLICATION DEVELOPMENT mode

Production mode is meant for operational usage of the device. In this mode all security provisions are fully enabled.

Application development (APP-DEV) mode is a special mode to support developers during application development and testing. Refer to the <a href="pg_device_mode_conversion.md">Device Mode conversion</a> chapter to read details about this mode.

{% hint style="info" %}
Conversion to APP-DEV mode is provided by Verifone and converted devices can be ordered separately.
{% endhint %}

A device can be moved out from the field using the CrtReset tool that removes authentication certificates, keys and other customer data from the device. Refer to the <a href="pg_system_tools.md">System Tools</a> to read more details about this tool.

## System Warrantied Keys <a href="#system_warrantied_keys" id="system_warrantied_keys"></a>

The system comes preloaded with a set of warrantied keys as per the following table:

| Warrantied Key | Details | Key Type |
|----|----|----|
| <p>VRK Key: Verifone Remote Key Loading Key</p> | <p>VRK key is used for encrypt/decrypt of the VRK Payload for RSA and for key agreement of encryption/decryption key of the VRK payload for ECC.</p> | <p>ECC-521</p> |
| <p>Authentication Key (Authex/ AuthN)</p> | <p>Authenticate the device against external service (e.g. VHQ, custom TMS)</p> | <p>RSA-2048, ECC-521</p> |
| <p>Pairing Key</p> | <p>Authenticate a connected Verifone Device and establish trust for key exchange between Verifone Devices</p> | <p>RSA-2048, ECC-521</p> |
| <p>System Signer</p> | <p>Reserved for Verifone private use</p> | <p>ECC-521</p> |
