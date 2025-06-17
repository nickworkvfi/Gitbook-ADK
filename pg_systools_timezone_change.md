---
title: Timezone changing tool

---

# Timezone changing tool




# Timezone changing tool


# Intro

The tool sets appropriate timezone on the device via package installation.


# When to use

This tool can be used to set or change a timezone on the device.


# Functionality

This tool is a system signed package. For different timezones, different package should be used.

The timezone package does not include daylight saving configuration itself. The configuration for every timezone is set in the system configuration file "/cfg/properties.json" (system property value SYS_PROP_TIME_ZONE_LIST).

Timezone changing packages are supported by V/OS and V/OS2 devices.

Available packages (can be found in [vos][vos2]/load/sys-tools folder):


| Description  | Package   |
|  -------- | -------- |
| Sets time zone to Asia-Calcutta  | dl.Asia-Calcutta.tgz   |
| Sets time zone to Asia  | dl.Asia.tgz   |
| Sets time zone to Australia-ACT  | dl.Australia-ACT.tgz   |
| Sets time zone to Australia-LHI  | dl.Australia-LHI.tgz   |
| Sets time zone to Australia-NSW  | dl.Australia-NSW.tgz   |
| Sets time zone to Australia  | dl.Australia.tgz   |
| Sets time zone to Australia-West  | dl.Australia-West.tgz   |
| Sets time zone to Brazil-Acre  | dl.Brazil-Acre.tgz   |
| Sets time zone to Brazil-DeNoronha  | dl.Brazil-DeNoronha.tgz   |
| Sets time zone to Brazil-East  | dl.Brazil-East.tgz   |
| Sets time zone to Brazil  | dl.Brazil.tgz   |
| Sets time zone to Brazil-West  | dl.Brazil-West.tgz   |
| Sets time zone to Canada-Atlantic  | dl.Canada-Atlantic.tgz   |
| Sets time zone to Canada-Central  | dl.Canada-Central.tgz   |
| Sets time zone to Canada-Eastern  | dl.Canada-Eastern.tgz   |
| Sets time zone to Canada-East-Saskatchewan  | dl.Canada-East-Saskatchewan.tgz   |
| Sets time zone to Canada-Mountain  | dl.Canada-Mountain.tgz   |
| Sets time zone to Canada-Newfoundland  | dl.Canada-Newfoundland.tgz   |
| Sets time zone to Canada-Pacific  | dl.Canada-Pacific.tgz   |
| Sets time zone to Canada-Saskatchewan  | dl.Canada-Saskatchewan.tgz   |
| Sets time zone to Canada-Yukon  | dl.Canada-Yukon.tgz   |
| Sets time zone to CET  | dl.CET.tgz   |
| Sets time zone to EET  | dl.EET.tgz   |
| Sets time zone to EST  | dl.EST.tgz   |
| Sets time zone to Etc-GMT +10  | dl.Etc-GMT+10.tgz   |
| Sets time zone to Etc-GMT -10  | dl.Etc-GMT-10.tgz   |
| Sets time zone to Etc-GMT +11  | dl.Etc-GMT+11.tgz   |
| Sets time zone to Etc-GMT -11  | dl.Etc-GMT-11.tgz   |
| Sets time zone to Etc-GMT +12  | dl.Etc-GMT+12.tgz   |
| Sets time zone to Etc-GMT -12  | dl.Etc-GMT-12.tgz   |
| Sets time zone to Etc-GMT -13  | dl.Etc-GMT-13.tgz   |
| Sets time zone to Etc-GMT -14  | dl.Etc-GMT-14.tgz   |
| Sets time zone to Etc-GMT +1  | dl.Etc-GMT+1.tgz   |
| Sets time zone to Etc-GMT -1  | dl.Etc-GMT-1.tgz   |
| Sets time zone to Etc-GMT +2  | dl.Etc-GMT+2.tgz   |
| Sets time zone to Etc-GMT -2  | dl.Etc-GMT-2.tgz   |
| Sets time zone to Etc-GMT +3  | dl.Etc-GMT+3.tgz   |
| Sets time zone to Etc-GMT -3  | dl.Etc-GMT-3.tgz   |
| Sets time zone to Etc-GMT +4  | dl.Etc-GMT+4.tgz   |
| Sets time zone to Etc-GMT -4  | dl.Etc-GMT-4.tgz   |
| Sets time zone to Etc-GMT +5  | dl.Etc-GMT+5.tgz   |
| Sets time zone to Etc-GMT -5  | dl.Etc-GMT-5.tgz   |
| Sets time zone to Etc-GMT +6  | dl.Etc-GMT+6.tgz   |
| Sets time zone to Etc-GMT -6  | dl.Etc-GMT-6.tgz   |
| Sets time zone to Etc-GMT +7  | dl.Etc-GMT+7.tgz   |
| Sets time zone to Etc-GMT -7  | dl.Etc-GMT-7.tgz   |
| Sets time zone to Etc-GMT +8  | dl.Etc-GMT+8.tgz   |
| Sets time zone to Etc-GMT -8  | dl.Etc-GMT-8.tgz   |
| Sets time zone to Etc-GMT +9  | dl.Etc-GMT+9.tgz   |
| Sets time zone to Etc-GMT -9  | dl.Etc-GMT-9.tgz   |
| Sets time zone to Etc-GMT  | dl.Etc-GMT.tgz   |
| Sets time zone to Israel  | dl.Israel.tgz   |
| Sets time zone to MET  | dl.MET.tgz   |
| Sets time zone to Mexico-BajaNorte  | dl.Mexico-BajaNorte.tgz   |
| Sets time zone to Mexico-BajaSur  | dl.Mexico-BajaSur.tgz   |
| Sets time zone to Mexico-General  | dl.Mexico-General.tgz   |
| Sets time zone to MST  | dl.MST.tgz   |
| Sets time zone to Pacific-Auckland  | dl.Pacific-Auckland.tgz   |
| Sets time zone to Pacific-Samoa  | dl.Pacific-Samoa.tgz   |
| Sets time zone to PRC  | dl.PRC.tgz   |
| Sets time zone to Turkey  | dl.Turkey.tgz   |
| Sets time zone to US-Alaska  | dl.US-Alaska.tgz   |
| Sets time zone to US-Aleutian  | dl.US-Aleutian.tgz   |
| Sets time zone to US-Arizona  | dl.US-Arizona.tgz   |
| Sets time zone to US-Central  | dl.US-Central.tgz   |
| Sets time zone to US-Eastern  | dl.US-Eastern.tgz   |
| Sets time zone to US-East-Indiana  | dl.US-East-Indiana.tgz   |
| Sets time zone to US-Hawaii  | dl.US-Hawaii.tgz   |
| Sets time zone to US-Indiana-Starke  | dl.US-Indiana-Starke.tgz   |
| Sets time zone to US-Michigan  | dl.US-Michigan.tgz   |
| Sets time zone to US-Mountain  | dl.US-Mountain.tgz   |
| Sets time zone to US-Pacific  | dl.US-Pacific.tgz   |
| Sets time zone to US-Samoa  | dl.US-Samoa.tgz   |
| Sets time zone to UTC  | dl.UTC.tgz   |
| Sets time zone to WET  | dl.WET.tgz   |


**GMT:** Before the GMT timezone package installation should be taken in mind that the GMT time zone values are vice-versus, e.g. GMT+3 is actually GMT-3. Example: If the current "GMT 0" time is 12:33:45 AM, then, after installing package "GMT+3" the new time will be set to 09:33:45 AM. This is the way timezones in Linux based systems work and is not a system bug.


# Logging

Timezone changing tool is using ADK-LOG component for logging. Package installation logs are added to secins.log file (/mnt/flash/logs/system/secins.log file).


# Instruction

The package content can not be changed. User should choose appropriate package containing needed time zone and download it to the device. After the installation, device time zone is accordingly changed.


# Appendix: Glossary


| Term  | Description   |
|  -------- | -------- |
| ADK  | Application Development Kit   |
| API  | Application Program Interface   |
| GUI  | Graphical User Interface   |
| UI  | User Interface   |
| OS  | Operating System   |
| Sysmode  | V/OS system application   |

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100
