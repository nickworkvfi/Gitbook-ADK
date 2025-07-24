---
hidden: true
title: Timezone changing tool
---

### Tableof Contents

- [Timezone changing tool](#pg_systools_timezone_change)
- [Intro](#sec_systools_timezone_change_intro)
- [When to use](#sec_systools_timezone_change_when)
- [Functionality](#sec_systools_timezone_change_functionality)
- [Logging](#sec_systools_timezone_change_logging)
- [Instruction](#sec_systools_timezone_change_instruction)

# Timezone changing tool <a href="#pg_systools_timezone_change" id="pg_systools_timezone_change"></a>

# Intro <a href="#sec_systools_timezone_change_intro" id="sec_systools_timezone_change_intro"></a>

The tool sets appropriate timezone on the device via package installation.

# When to use <a href="#sec_systools_timezone_change_when" id="sec_systools_timezone_change_when"></a>

This tool can be used to set or change a timezone on the device.

# Functionality <a href="#sec_systools_timezone_change_functionality" id="sec_systools_timezone_change_functionality"></a>

This tool is a system signed package. For different timezones, different package should be used.

The timezone package does not include daylight saving configuration itself. The configuration for every timezone is set in the system configuration file \"/cfg/properties.json\" (system property value SYS_PROP_TIME_ZONE_LIST).

Timezone changing packages are supported by V/OS and V/OS2 devices.

Available packages (can be found in \[vos\]\[vos2\]/load/sys-tools folder):

| Description | Package |
|----|----|
| <p>Sets time zone to Asia-Calcutta</p> | <p>dl.Asia-Calcutta.tgz</p> |
| <p>Sets time zone to Asia</p> | <p>dl.Asia.tgz</p> |
| <p>Sets time zone to Australia-ACT</p> | <p>dl.Australia-ACT.tgz</p> |
| <p>Sets time zone to Australia-LHI</p> | <p>dl.Australia-LHI.tgz</p> |
| <p>Sets time zone to Australia-NSW</p> | <p>dl.Australia-NSW.tgz</p> |
| <p>Sets time zone to Australia</p> | <p>dl.Australia.tgz</p> |
| <p>Sets time zone to Australia-West</p> | <p>dl.Australia-West.tgz</p> |
| <p>Sets time zone to Brazil-Acre</p> | <p>dl.Brazil-Acre.tgz</p> |
| <p>Sets time zone to Brazil-DeNoronha</p> | <p>dl.Brazil-DeNoronha.tgz</p> |
| <p>Sets time zone to Brazil-East</p> | <p>dl.Brazil-East.tgz</p> |
| <p>Sets time zone to Brazil</p> | <p>dl.Brazil.tgz</p> |
| <p>Sets time zone to Brazil-West</p> | <p>dl.Brazil-West.tgz</p> |
| <p>Sets time zone to Canada-Atlantic</p> | <p>dl.Canada-Atlantic.tgz</p> |
| <p>Sets time zone to Canada-Central</p> | <p>dl.Canada-Central.tgz</p> |
| <p>Sets time zone to Canada-Eastern</p> | <p>dl.Canada-Eastern.tgz</p> |
| <p>Sets time zone to Canada-East-Saskatchewan</p> | <p>dl.Canada-East-Saskatchewan.tgz</p> |
| <p>Sets time zone to Canada-Mountain</p> | <p>dl.Canada-Mountain.tgz</p> |
| <p>Sets time zone to Canada-Newfoundland</p> | <p>dl.Canada-Newfoundland.tgz</p> |
| <p>Sets time zone to Canada-Pacific</p> | <p>dl.Canada-Pacific.tgz</p> |
| <p>Sets time zone to Canada-Saskatchewan</p> | <p>dl.Canada-Saskatchewan.tgz</p> |
| <p>Sets time zone to Canada-Yukon</p> | <p>dl.Canada-Yukon.tgz</p> |
| <p>Sets time zone to CET</p> | <p>dl.CET.tgz</p> |
| <p>Sets time zone to EET</p> | <p>dl.EET.tgz</p> |
| <p>Sets time zone to EST</p> | <p>dl.EST.tgz</p> |
| <p>Sets time zone to Etc-GMT +10</p> | <p>dl.Etc-GMT+10.tgz</p> |
| <p>Sets time zone to Etc-GMT -10</p> | <p>dl.Etc-GMT-10.tgz</p> |
| <p>Sets time zone to Etc-GMT +11</p> | <p>dl.Etc-GMT+11.tgz</p> |
| <p>Sets time zone to Etc-GMT -11</p> | <p>dl.Etc-GMT-11.tgz</p> |
| <p>Sets time zone to Etc-GMT +12</p> | <p>dl.Etc-GMT+12.tgz</p> |
| <p>Sets time zone to Etc-GMT -12</p> | <p>dl.Etc-GMT-12.tgz</p> |
| <p>Sets time zone to Etc-GMT -13</p> | <p>dl.Etc-GMT-13.tgz</p> |
| <p>Sets time zone to Etc-GMT -14</p> | <p>dl.Etc-GMT-14.tgz</p> |
| <p>Sets time zone to Etc-GMT +1</p> | <p>dl.Etc-GMT+1.tgz</p> |
| <p>Sets time zone to Etc-GMT -1</p> | <p>dl.Etc-GMT-1.tgz</p> |
| <p>Sets time zone to Etc-GMT +2</p> | <p>dl.Etc-GMT+2.tgz</p> |
| <p>Sets time zone to Etc-GMT -2</p> | <p>dl.Etc-GMT-2.tgz</p> |
| <p>Sets time zone to Etc-GMT +3</p> | <p>dl.Etc-GMT+3.tgz</p> |
| <p>Sets time zone to Etc-GMT -3</p> | <p>dl.Etc-GMT-3.tgz</p> |
| <p>Sets time zone to Etc-GMT +4</p> | <p>dl.Etc-GMT+4.tgz</p> |
| <p>Sets time zone to Etc-GMT -4</p> | <p>dl.Etc-GMT-4.tgz</p> |
| <p>Sets time zone to Etc-GMT +5</p> | <p>dl.Etc-GMT+5.tgz</p> |
| <p>Sets time zone to Etc-GMT -5</p> | <p>dl.Etc-GMT-5.tgz</p> |
| <p>Sets time zone to Etc-GMT +6</p> | <p>dl.Etc-GMT+6.tgz</p> |
| <p>Sets time zone to Etc-GMT -6</p> | <p>dl.Etc-GMT-6.tgz</p> |
| <p>Sets time zone to Etc-GMT +7</p> | <p>dl.Etc-GMT+7.tgz</p> |
| <p>Sets time zone to Etc-GMT -7</p> | <p>dl.Etc-GMT-7.tgz</p> |
| <p>Sets time zone to Etc-GMT +8</p> | <p>dl.Etc-GMT+8.tgz</p> |
| <p>Sets time zone to Etc-GMT -8</p> | <p>dl.Etc-GMT-8.tgz</p> |
| <p>Sets time zone to Etc-GMT +9</p> | <p>dl.Etc-GMT+9.tgz</p> |
| <p>Sets time zone to Etc-GMT -9</p> | <p>dl.Etc-GMT-9.tgz</p> |
| <p>Sets time zone to Etc-GMT</p> | <p>dl.Etc-GMT.tgz</p> |
| <p>Sets time zone to Israel</p> | <p>dl.Israel.tgz</p> |
| <p>Sets time zone to MET</p> | <p>dl.MET.tgz</p> |
| <p>Sets time zone to Mexico-BajaNorte</p> | <p>dl.Mexico-BajaNorte.tgz</p> |
| <p>Sets time zone to Mexico-BajaSur</p> | <p>dl.Mexico-BajaSur.tgz</p> |
| <p>Sets time zone to Mexico-General</p> | <p>dl.Mexico-General.tgz</p> |
| <p>Sets time zone to MST</p> | <p>dl.MST.tgz</p> |
| <p>Sets time zone to Pacific-Auckland</p> | <p>dl.Pacific-Auckland.tgz</p> |
| <p>Sets time zone to Pacific-Samoa</p> | <p>dl.Pacific-Samoa.tgz</p> |
| <p>Sets time zone to PRC</p> | <p>dl.PRC.tgz</p> |
| <p>Sets time zone to Turkey</p> | <p>dl.Turkey.tgz</p> |
| <p>Sets time zone to US-Alaska</p> | <p>dl.US-Alaska.tgz</p> |
| <p>Sets time zone to US-Aleutian</p> | <p>dl.US-Aleutian.tgz</p> |
| <p>Sets time zone to US-Arizona</p> | <p>dl.US-Arizona.tgz</p> |
| <p>Sets time zone to US-Central</p> | <p>dl.US-Central.tgz</p> |
| <p>Sets time zone to US-Eastern</p> | <p>dl.US-Eastern.tgz</p> |
| <p>Sets time zone to US-East-Indiana</p> | <p>dl.US-East-Indiana.tgz</p> |
| <p>Sets time zone to US-Hawaii</p> | <p>dl.US-Hawaii.tgz</p> |
| <p>Sets time zone to US-Indiana-Starke</p> | <p>dl.US-Indiana-Starke.tgz</p> |
| <p>Sets time zone to US-Michigan</p> | <p>dl.US-Michigan.tgz</p> |
| <p>Sets time zone to US-Mountain</p> | <p>dl.US-Mountain.tgz</p> |
| <p>Sets time zone to US-Pacific</p> | <p>dl.US-Pacific.tgz</p> |
| <p>Sets time zone to US-Samoa</p> | <p>dl.US-Samoa.tgz</p> |
| <p>Sets time zone to UTC</p> | <p>dl.UTC.tgz</p> |
| <p>Sets time zone to WET</p> | <p>dl.WET.tgz</p> |

{% hint style="info" %}
**GMT:** Before the GMT timezone package installation should be taken in mind that the GMT time zone values are vice-versus, e.g. GMT+3 is actually GMT-3. Example: If the current \"GMT 0\" time is 12:33:45 AM, then, after installing package \"GMT+3\" the new time will be set to 09:33:45 AM. This is the way timezones in Linux based systems work and is not a system bug.
{% endhint %}

# Logging <a href="#sec_systools_timezone_change_logging" id="sec_systools_timezone_change_logging"></a>

Timezone changing tool is using ADK-LOG component for logging. Package installation logs are added to secins.log file (/mnt/flash/logs/system/secins.log file).

# Instruction <a href="#sec_systools_timezone_change_instruction" id="sec_systools_timezone_change_instruction"></a>

The package content can not be changed. User should choose appropriate package containing needed time zone and download it to the device. After the installation, device time zone is accordingly changed.

# Appendix: Glossary <a href="#sec_ast_glossary" id="sec_ast_glossary"></a>

| Term | Description |
|----|----|
| <p>ADK</p> | <p>Application Development Kit</p> |
| <p>API</p> | <p>Application Program Interface</p> |
| <p>GUI</p> | <p>Graphical User Interface</p> |
| <p>UI</p> | <p>User Interface</p> |
| <p>OS</p> | <p>Operating System</p> |
| <p>Sysmode</p> | <p>V/OS system application</p> |
