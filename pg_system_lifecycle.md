---
title: System Lifecycle

---

# System Lifecycle




# System Lifecycle, Modes and Device States


## Lifecycle overview

![vos3_system_lifecycle.png](.//vos3_system_lifecycle.png)


## Production and Application Development Modes

Verifone provides system users with following device modes:



* PRODUCTION mode
* APPLICATION DEVELOPMENT mode

Production mode is meant for operational usage of the device. In this mode all security provisions are fully enabled.

Application development (APP-DEV) mode is a special mode to support developers during application development and testing. Refer to the [Device Mode conversion](pg_device_mode_conversion.md#page-pg-device-mode-conversion) chapter to read details about this mode.

Conversion to APP-DEV mode is provided by Verifone and converted devices can be ordered separately.


A device can be moved out from the field using the CrtReset tool that removes authentication certificates, keys and other customer data from the device. Refer to the [System Tools](pg_system_tools.md#page-pg-system-tools) to read more details about this tool.


## System Warrantied Keys

The system comes preloaded with a set of warrantied keys as per the following table:


| Warrantied Key  | Details  | Key Type   |
|  -------- | -------- | -------- |
| VRK Key: Verifone Remote Key Loading Key  | VRK key is used for encrypt/decrypt of the VRK Payload for RSA and for key agreement of encryption/decryption key of the VRK payload for ECC.  | ECC-521   |
| Authentication Key (Authex/ AuthN)  | Authenticate the device against external service (e.g. VHQ, custom TMS)  | RSA-2048, ECC-521   |
| Pairing Key  | Authenticate a connected Verifone Device and establish trust for key exchange between Verifone Devices  | RSA-2048, ECC-521   |
| System Signer  | Reserved for Verifone private use  | ECC-521   |

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
