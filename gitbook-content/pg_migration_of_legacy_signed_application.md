---
hidden: true
title: How to migrate legacy signed application to ADK 4.8.x
---

# Introduction <a href="#sec_migration_of_legacy_signed_application_intro" id="sec_migration_of_legacy_signed_application_intro"></a>

Starting release ADK 4.8, a new V/OS2 application partition is introduced for V/OS2 devices. This will only allow the application packages signed with the new online V/OS2 signer to be installed on the device.

# Device types impacted <a href="#sec_migration_of_legacy_signed_application_impacted" id="sec_migration_of_legacy_signed_application_impacted"></a>

All V/OS2 Engage devices and device modes like Production and CP Dev are impacted by this feature.

V/OS devices are not impacted and will require legacy signing cards for app signing.

# Migrate legacy signed application to ADK 4.8.x <a href="#sec_migration_of_legacy_signed_application_migrate_legacy_app" id="sec_migration_of_legacy_signed_application_migrate_legacy_app"></a>

First of all, the Customer needs to sign software license agreement and get the access to Verifone Signing Portal (please contact the Verifone Support team to get access to the Signing Portal).

The migration process to ADK 4.8.x is a two-step process and can be done in 2 following ways:

## Option 1 <a href="#subsec_migration_to_adk48_option1" id="subsec_migration_to_adk48_option1"></a>

1.  Install new pedguard (dl.NewUsrSgnPed_prod.tgz) on pre-4.8 release. This will allow the Terminal to accept new Online certificate.
2.  Install the Online signed user dl combined with ADK 4.8 OS/ADK dl.

{% hint style="info" %}
This is 2 step process as device needs to reboot to apply new pedguard.
{% endhint %}

## Option 2 <a href="#subsec_migration_to_adk48_option2" id="subsec_migration_to_adk48_option2"></a>

1.  Install pure ADK 4.8.x (OS/ADK) on top of the pre-4.8 ADK. The ADK 4.8. includes a new pedguard to authorise new Online certs. Your pre-4.8 user applications will still be started.
2.  Install new user applications (Online signed)

{% hint style="info" %}
The second option is not advised as OS/ADK is backwards compatible, but it could not be fully guaranteed. So there might be a risk that your pre-4.8 apps will crash/not work on runtime.
{% endhint %}

# Status of the applications on the device after a buildall upgrade <a href="#sec_migration_of_legacy_signed_application_status_of_the_applications" id="sec_migration_of_legacy_signed_application_status_of_the_applications"></a>

Applications already installed on the device will be kept and will continue to run after the ADK buildall update. Only the applications installed thereafter will be impacted by this feature - installation of new user bundles signed with Legacy sign cards will fail.

New user bundles must be signed in the Signing Portal, old signing cards are not allowed to be used on ADK 4.8+.

# Installing dev signed packages on CPdev devices <a href="#sec_migration_of_legacy_signed_application_cpdev" id="sec_migration_of_legacy_signed_application_cpdev"></a>

Starting with ADK 4.8 release, customers can use CPdev devices that do not require signing with the Signing Portal.

But the license file dl.new_user_sgn_cpdev.tgz that contains required certificates for CPdev devices has to be installed first on the device before installing any development signed application packages. No need to install this license file every time ADK is upgraded. The certificates remain on the device until a CrtReset is performed.

{% hint style="info" %}
The cp_recovery package still needs to be installed after any OS upgrade of CPappdev to \"restore\" CPapp dev mode.
{% endhint %}
