---
hidden: true
title: DemoVDSPApp.cpp File Reference
---

Demo Application sub-functions for Visa DSP. [More\...](#details)

## DetailedDescription {#detailed-description}

Demo Application sub-functions for Visa DSP.

# Demo Application sub-functions for Visa DSP <a href="#autotoc_md42" id="autotoc_md42"></a>

The Demo Application sub-functions perform Visa DSP cardholder data encryptions for two encryption methods: P2PE and FPE

# Functionality <a href="#autotoc_md43" id="autotoc_md43"></a>

Prefixed functions:

- <a href="_demo_app_8cpp.md#a0662130b4714f539176c568f6a5c260b">DEMO_InjectKeys()</a> - key loading
  - loading DUKPT initial key and initial KSN for using IPP-DUKPT

Demo Application sub-functions:

- DEMO_HandleVisaDSP_P2PE() - handle Visa DSP P2PE, initiate PIN entry and retrieve encrypted PIN block

  Following tasks are performed:

  - put cardholder data PAN, CHName, Track1 and Track2 data to TD
  - P2PE encryption and obfuscation of the card data
  - get obfuscated data
  - initiate PIN entry
  - retrieve the encrypted PIN

- DEMO_HandleVisaDSP_FPE() - handle Visa DSP FPE, initiate PIN entry and retrieve encrypted PIN block

  Following tasks are performed:

  - put cardholder data PAN, CHName, Track1 and Track2 data to TD
  - FPE encryption of the card data
  - initiate PIN entry
  - retrieve the encrypted PIN

# Build, load and run the Demo Application <a href="#autotoc_md44" id="autotoc_md44"></a>

see <a href="_demo_app_8cpp.md">DemoApp.cpp</a>
