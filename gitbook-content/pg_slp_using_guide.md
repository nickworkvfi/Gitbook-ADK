---
hidden: true
title: Device Software Licensing and Protection status guide
---

Starting from ADK 4.9 (VOS2) and ADK 4.10.1 (VOS1), the additional component integrity check was implemented that provides the Device Software Licensing and Protection (SLP) status.

It compares versions of security-relevant bundles installed on a device with the expected bundle versions.

The expected bundle version list (or policy) comes with every ADK release and can change with the next releases.

See the detailed description in <a href="pg_all_packages.md#subsec_comp_pkg_adkversioninfo">ADK Version Information</a>.

During every boot, the system compares the actual installed bundle versions with the secure versions defined by the \'\'policy\'\'. If at least one bundle version does not match or doesn\'t exist, or the SLP file is missing or broken, the system sets the SLP status to \'\'tainted\'\'.

The status \"SLP TAINTED\" is also displayed in the bootup splash screen.

Additionally, on VOS2 devices the NAG screen is displayed over the display and blinks periodically, to inform the user that this device is not secure:

![](slp_tainted.png)

### Warning

It is not possible to remove the tainted status.

To fix the issue, you should install a proper ADK release.

Normally, with the correct ADK release installation, the SLP status should be OK. But, if there is a side loading and upgrading/downgrading of some ADK or OS component, the tainted status might appear if the new component version doesn\'t fit the policy.
