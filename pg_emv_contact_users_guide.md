---
title: ADK-EMV Contact Programmers Guide

---

# ADK-EMV Contact Programmers Guide




# Preface

ADK EMV Contact Programmer's Guide. This guide provides detailed descriptions of the ADK EMV Contact framework features, with comprehensive information on configuring and programming with the ADK EMV Contact framework, plus plenty of use cases for additional support.


## Audience

This document is for programmers and developers who want to understand and use the ADK EMV Contact framework in their custom payment applications.


## Organization

This guide is organized as follows:

[Introduction]. Provides an overview of the ADK EMV Contact framework.

[Getting Started]. Shows sample applications for the ADK EMV Contact framework.

[Programming]. Outlines the different APIs for the ADK EMV Contact framework. Provides descriptions for various features like PIN Entry support or Virtual terminal mapping table support.

[System Setup and Requirements]. Provides information about hardware supported as well as about software requirements.

[Troubleshooting]. Provides tips on problem solving approaches in form of FAQ. Additional advices are given about possible ways of debugging and tracing.

[Appendix]. Contains some useful links to related documents and a ** quick reference to the interface functions:**[Table of API functions]


# Introduction

The Verifone ADK EMV Contact framework supports payment applications following the EMVCo specifications (see [EMVCo Homepage](http://www.emvco.com/)).

Please refer to the [ADK-EMV Contactless Programmers Guide](./pg_emv_contactless_users_guide.html) for information on the CTLS framework.

It's recommended to analyse sources of "ADK-EMV Demo Application" to get a better understanding how to control the interfaces ("doc/vdedemo/EmvTestApp" in ADK bundle).


## Configuration Flow

![09_emv_ct_Configuration_Flow.png](.//09_emv_ct_Configuration_Flow.png)Figure: Configuration Flow![09_emv_ct_Configuration_Flow.png](.//09_emv_ct_Configuration_Flow.png)Figure: Configuration Flow![09_emv_ct_Configuration_Flow.png](.//09_emv_ct_Configuration_Flow.png)Figure: Configuration Flow![09_emv_ct_Configuration_Flow.png](.//09_emv_ct_Configuration_Flow.png)Figure: Configuration Flow

**Description:**

* Typically the calling application gets the desired configuration dynamically at run-time (from host, TMS, or acquirer). 
* Initialization is needed prior to calling config commands: [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework)
* Terminal data setting: [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata)
* For each supported payment application (AID) one call to [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata) is required. 
* For each CAP key one call to [EMV_CT_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey) is needed. 
* To free resources it's possible to optionally call [EMV_CT_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework). 
* ** Alternative: ** Directly write the [XML Configuration Files]. 

 Only recommended for experienced users. 

 Application shall make sure that no EMV transaction is active and either [EMV_CT_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework) has been called if applicable or at least [EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode) has not been used. 

 Application writes XML configuration files. 

 EMV ADK reads new configuration data when [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) is called.


For more details see [Configuration Commands]


## Transaction Flow

![10_emv_ct_Transaction_Flow.png](.//10_emv_ct_Transaction_Flow.png)Figure: Transaction Flow![10_emv_ct_Transaction_Flow.png](.//10_emv_ct_Transaction_Flow.png)Figure: Transaction Flow![10_emv_ct_Transaction_Flow.png](.//10_emv_ct_Transaction_Flow.png)Figure: Transaction Flow![10_emv_ct_Transaction_Flow.png](.//10_emv_ct_Transaction_Flow.png)Figure: Transaction Flow


**Description:**

* EMV ADK framework needs to be initialized before transaction start: [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework)
* Calling application has to detect card insertion. It may use [EMV_CT_SmartDetect()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect) for that.
* Calling application has to activate the chip card. It's recommended to use [EMV_CT_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset) for that.
* Transaction is started by [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction).
* Return data of this function gives information which payment application is used for the transaction. Depending on this the calling application may need to temporary modify the configuration by means of [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata) with [EMV_ADK_TEMP_UPDATE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-temp-update).
* Offline part of the transaction is performed inside [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline).
* The outcome determines if transaction is declined, offline approved, or has to be sent to host for the decision.
* If host connection is needed the host response has to be put in [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline).
* At this point only two outcomes are possible: declined or approved.
* It's recommended to call [EMV_CT_EndTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-endtransaction) after each transaction. This function wipes sensitive data from memory.
* Calling [EMV_CT_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework) after each transaction would decrease performance. It's not needed at this point, but in principle it's possible.


## Android

In Android the ADK-EMV is hidden inside SDI. So application has to use the "Card Detection (23-01)", "EMV System Interface", respectively "EMV Transaction Interface" from [ADK-SDI Programmers Guide](./pg_sdi_users_guide.html).


## VOS3

In VOS3 ADK-EMV is accessible through SDI. The ADK-EMV-interface is rebuild in [ADK-SDI-Client Programmers Guide](./pg_sdiclient_users_guide.html).


## Two-Piece Solution

Former Two-Piece Solution with Client/Server architecture for EMV, MSR, TEC, ... is not supported anymore. 

 SDI EPP has to be used instead (see [ADK-SDI Programmers Guide](./pg_sdi_users_guide.html)).


## Use cases

**Usecase 1-4**

![04_emv_ct_Usecase_Samples_1_to_4.png](.//04_emv_ct_Usecase_Samples_1_to_4.png)Figure: Usecase 1-4![04_emv_ct_Usecase_Samples_1_to_4.png](.//04_emv_ct_Usecase_Samples_1_to_4.png)Figure: Usecase 1-4![04_emv_ct_Usecase_Samples_1_to_4.png](.//04_emv_ct_Usecase_Samples_1_to_4.png)Figure: Usecase 1-4![04_emv_ct_Usecase_Samples_1_to_4.png](.//04_emv_ct_Usecase_Samples_1_to_4.png)Figure: Usecase 1-4

**Description:**

* ** Usecase 1**

 Used on systems without SDI server. Only possible on VOS and VOS2. 

 Calling application links the static library `libEMV_CT_Client.a`. 

 So it uses the functional interface with all data in C structs. 

 Dynamic library `libEMV_CT_Link.so` manages the communication to EMV ADK (`libEMV_CT_Framework.so`).
* ** Usecase 2**

 Used on systems with SDI server respectively SDI service. 
`libsdiclient.a` internally configures [EMV_CLIENT_MODE_SDI](_e_m_v___common___interface_8h.md#enumvalue-emv-client-mode-sdi). 

 So `libEMV_CT_Link.so` uses `libsdiprotocol.so` to manage the connection to SDI server/service.
    * VOS3 
`libsdiclient.a` provides the same API as ADK-EMV in Usecase 1. 

 That way application does not need source code change when migrating from VOS/VOS2 to VOS3.
    * Usage without `libsdiclient.a`

 Alternatively application may use `libEMV_CTLS_Client.a` directly. 

 In that case it must set [EMV_CLIENT_MODE_SDI](_e_m_v___common___interface_8h.md#enumvalue-emv-client-mode-sdi).
* ** Usecase 3 **

 Similar to Usecase 2, but calling application implements it's own module to de-/serialize the data and do the communication with the SDI server/service.
* ** Usecase 4 **

 Similar to Usecase 1, but calling application implements it's own module to de-/serialize the data and do the EMV ADK connection (calling [EMV_CT_SerInterface()](_e_m_v___c_t___ser_interface_8h.md#function-emv-ct-serinterface)).


## Concepts


### GUI

UI handling is country-, regional- and domestic-specific. This is why ADK separates business logic from GUI interface. 

 EMV ADK does itself not directly control the GUI. It just gives advice, in case display or cardholder interaction is required. 

 Examples: 
[eEMVCrdLastTryPIN](group___c_a_r_d_h_o_l_d_e_r___i_n_f_o.md#define-eemvcrdlasttrypin) is given when cardholder display is needed (callback [TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo)). 
[TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin) callback is invoked when PIN entry is required.

It is recommended to use GUI ADK.


### Interface type: Structure-based vs. serialized

The Verifone EMV services are designed as a serialized interface. On this interface (CLA/INS) all parameters are tag based and where the parameters are named in the EMVCo specification we follow the tags and format of EMVCo. The parameters on this interface will vary depending on EMVCo, Scheme and Feature updates. Whenever an old parameter is obsolete it will removed from the serialized interface and whenever a new parameter is necessary it'll be added. Additionally we provide for better readability an interface, which is structure based and allows to set parameters without setting up a TLV based binary stream. Both approaches are supported with the client on top of the EMV framework. There is no force to use this client, you can at any time directly use the framework API with CLA/INS directly. However because of easier code maintenance it may be beneficial to use the client API, either struct or TLV based. 

Each struct parameter is 1:1 converted to a serialized tag without the need to know the tag and format inside the serialized stream. Whenever you fill a parameter inside the struct you simply need to raise the config flag for this struct parameter and it'll be added to the serialized stream automatically. 


 Example: 

```
TXN_Data.Force_Online = FALSE; // no force Online
Info_Included_Data[1] |=  INPUT_SEL_FORCE_ONLINE; //raise the flag
```


### Updating to a new EMV ADK version

Please have in mind that adding new features and specification changes requires that transaction and configuration structs are modified regularly. If you want to update to a newer release of the EMV-ADK without taking benefits of new features, spec updates or certifications this can be done anytime by downloading the new framework and kernels and keeping the original client. This allows you to reuse the old application even without recompiling it, even we recommend to update your application to the latest to be up to date with latest EMV testcases, spec changes and feature sets. 

If you decide to update the client to use the new features have in mind that you fill the new parameters accordingly. If you use the TLV stream add the new tags and remove obsolete tags. If you use the struct API have in mind that old parameters disappear and new tags are added. 

The new client is compatible to an old framework (the old framework will not see unknown new tags in the serialized stream) and an old client is compatible to a new framework (obsolete tags are not parsed any more by the new framework, missing tags will be set with compliant defaults). This allows to have the API up to date to the fast changing specifications, enables introducing new parameters and removing obsolete parameters, so that legacy stuff is always kept away from new users and new parameters can be introduced without implications. 


Additional considerations:

* Do not update kernels if you do not update to the latest feature and specification set because new kernels may require up to date configuration.
* There are most probably multiple kernels for Contact and Contactless in an EMV-ADK delivery. Do stock picking of the kernels and load only those to the system that fit to your terminal and your application ICS needs.
* If you use the serialized interface properly it is no problem to pick a new client without updating to new features and certifications. However we do not recommend to do so but adapt to the latest spec updates or (if already certified for example) keep the client and kernels you implemented against.
* The EMV-ADK updates are independent of the release planning of the ADK integration packages. As soon as new L2 certifications are available and as soon as new E2E tests are integrated we provide a release if possible.
* This requires to cross check for the latest regularly to pass the latest E2E tests with your application.
* Vice versa you need to take care that you do not automatically update to a newer EMV-ADK version once you have certified your app, you may want to lock it not to endanger your certification.


### Callback and Reentrance Mode

For the transaction sequence, there are two general modes possible:

* **Callback Mode.**

 This is the "standard mode". It is most robust and easy-to-use. 

 Calling application can activate several callbacks. These are invoked during transaction processing. 

 Callback activation is done in [EMV_CT_SELECT_STRUCT::TxnOptions](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-txnoptions), [EMV_CT_TRANSAC_STRUCT::TxnOptions](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md#variable-txnoptions), e.g. [EMV_CT_TRXOP_MERCHINFO_CALLBACK](group___t_x_n___o_p_t_i_o_n_s.md#define-emv-ct-trxop-merchinfo-callback). 

 For an overview about all callback functions see [Transaction Callback Command].
* **Reentrance Mode.**

 This mode is only recommended for experienced users. 

 Transaction is interrupted at certain points. At these points the application can perform certain processes: change parameters, handle GUI, etc. The application has full control over all parameters and the complete configuration interface. 

 Transaction is continued by re-calling the same EMV ADK function. 

 Configuration options can be found here: [Re-entrance options](group___t_x_n___s_t_e_p_s.md)

![29_emv_ct_Reentrance_Mode.png](.//29_emv_ct_Reentrance_Mode.png)Figure: Reentrance vs. Callback Mode![29_emv_ct_Reentrance_Mode.png](.//29_emv_ct_Reentrance_Mode.png)Figure: Reentrance vs. Callback Mode![29_emv_ct_Reentrance_Mode.png](.//29_emv_ct_Reentrance_Mode.png)Figure: Reentrance vs. Callback Mode![29_emv_ct_Reentrance_Mode.png](.//29_emv_ct_Reentrance_Mode.png)Figure: Reentrance vs. Callback Mode


### XML Configuration Files

The configuration of the framework is stored in XML files. These are created dynamically using the configuration functions. Missing parameters will be automatically filled with a default.

In V/OS and VOS2 you can find the XML files in the sub folder "flash" of the corresponding user. In Verix they are placed in "I:/1/".

Mapping from XML tags to struct parameters (and TLV tags) can be found in [EMV_CT_XML.h](_e_m_v___c_t___x_m_l_8h.md#file-emv-ct-xml.h).

**Terminal data** (file name: `EMV_Terminal.xml`) 

```cpp
<TerminalData>
<TermTyp>22</TermTyp>
<CurrencyTrans>0978</CurrencyTrans>
<ExpTrans>02</ExpTrans>
<CountryCodeTerm>0250</CountryCodeTerm>
<TermCap>E0F8C8</TermCap>
<TermAddCap>F000B0A001</TermAddCap>
<SuppLang>0102000000000000</SuppLang>
<IFD_SerialNumber>12345678</IFD_SerialNumber>
<KernelVersion>L26.16l</KernelVersion>
<FrameworkVersion>01.00.00-rc1</FrameworkVersion>
</TerminalData>
```

**Applications** (file name: `EMV_Applications.xml`) 

```cpp
<Application AID="A0000000041010">
<VerNum>0002</VerNum>
<AppName>Mastercard</AppName>
<ASI>01</ASI>
<BrKey>5999</BrKey>
<TermIdent>3132333435363738</TermIdent>
<FloorLimit>00001388</FloorLimit>
<Threshold>000001F4</Threshold>
<TargetPercentage>00</TargetPercentage>
<MaxTargetPercentage>00</MaxTargetPercentage>
<TAC_Denial>0400000000</TAC_Denial>
<TAC_Online>F850ACF800</TAC_Online>
<TAC_Default>FC50ACA000</TAC_Default>
<EMV_Application>01</EMV_Application>
<DefaultTDOL>9F02065F2A029A039C0195059F3704</DefaultTDOL>
<DefaultDDOL>9F3704</DefaultDDOL>
<MerchIdent>202020202020202020202020202020</MerchIdent>
<CDA_Processing>02</CDA_Processing>
<AC_BeforeAfter>00</AC_BeforeAfter>
<POS_EntryMode>05</POS_EntryMode>
<AdditionalTags>9F530152</AdditionalTags>
<Taglist>008E</Taglist>
<AppTermCap>E0F8C8</AppTermCap>
<AppFlowCap>3F1F170000</AppFlowCap>
<AIP_CVM_NotSupported>00</AIP_CVM_NotSupported>
<CountryCodeTerm>0250</CountryCodeTerm>
<AppTermAddCap>F000B0A001</AppTermAddCap>
<AppTerminalType>22</AppTerminalType>
<AID_Prio />
<AID_Prio />
<AID_Prio />
<AID_Prio />
<AID_Prio />
<FallbackMIDs>000000</FallbackMIDs>
<SpecialTRX>2120110000000000</SpecialTRX>
<FallbackHandling>00</FallbackHandling>
<ChksumParams>0100000000</ChksumParams>
<ChksumASCII_EMVCO>BE3FB52A</ChksumASCII_EMVCO>
<MasterAID />
</Application>
```

**Keys** (file name: `EMV_Keys.xml`) 

```cpp
<CapKey Index="F8" RID="A000000004">
   <Exponent>03</Exponent>
   <KeyLen>80</KeyLen>
   <Key>A1F5E1C9BD8650BD43AB6EE56B891EF7459C0A24FA84F9127D1A6C79D4930F6DB185 2E2510F18B61CD354DB83A356BD190B88AB8DF04284D02A4204A7B6CB7C5551977A9B36379CA3DE1A08E69F301C95CC1C20506959275F41723DD5D2925290579E5A95B0DF6323FC8E9273D6F849198C4996209166D9BFC973C361CC826E1</Key>
   <Hash>F06ECC6D2AAEBF259B7E755A38D9A9B24E2FF3DD</Hash>
   <RevocationList>010203</ RevocationList >
</CapKey>
```


# Getting Started

In this chapter you will find execution flow diagrams as well as real code examples describing steps which are required in order to successfully configure application and make a payment transaction.


## Sample Application

For a payment application example, please refer to EMV testapp.


### Examples of Serialized Flow

**Configuration**



```cpp
Init:

CLIENT MSG  CMD:    39 00 [0]

MSG RESP:   90 00 [0]

CFG Terminal Data:

CLIENT MSG  CMD:    39 01 [68] F0429F3501225F2A0209785F3601029F1A0202509F3303E0F8C89F4005F000B0A001 …
CLIENT MSG RESP:    90 00 [0]


CFG Application Data (Delete All): MSG  CMD:    39 02 [6] F004DF660120
CLIENT MSG RESP:    90 00 [0]


CFG Application Data (Set AID, MC) MSG  CMD:    39 02 [381]
F0820179DF6601014F07A00000000410109F09020002500A4D617374657263617264 … CLIENT MSG RESP: 90 00 [ 0]

CFG Application Data (Set AID, VISA) CMD:   39 02 [362]
F0820166DF6601014F07A00000000310109F0902008C500456697361DF2001019F15 … CLIENT MSG RESP: 90 00 [ 0]


… repeat per AID


CFG CAP Keys (Delete All)

CLIENT MSG  CMD:    39 03 [6] F004DF660120

CLIENT MSG RESP:    90 00 [0]


CFG CAP Keys (Set CAP Keys, repeat n times) CLIENT MSG  CMD:    39 03 [178]
F081AFDF660101DF0901F8DF0A05A000000004DF0B8180A1F5E1C9BD8650BD43AB6E … MSG RESP:    90 00 [0]
CLIENT MSG  CMD:    39 03 [194] F081BFDF660101DF0901F3DF0A05A000000004DF0B819098F0C770F23864C2E766DF …
MSG RESP:   90 00 [0]
```

**Transaction**

```cpp
Init:

CLIENT MSG  CMD:    39 00 [0]

MSG RESP:   90 00 [0]

Activate ICC (Applications technology selection process) CLIENT MSG CMD:    41 02 [6] F004DF060100
CLIENT MSG RESP:    90 00 [19] F011DF680E3B6A00FF4A434F50333156323332


Start Transaction

CLIENT MSG  CMD:    39 10 [57] F0379C01009F02060000000156999A031211019F2103120000DF400100DF430100DF …
CLIENT MSG RESP:    90 00 [112] F06E8408A000000003101002500F4352454449544F2044452056495341DF330B5649 …

Continue Transaction Offline CLIENT MSG CMD:    39 11 [ 30]
F01C9F410400000000DF5806000000000000DF4E0100DF470100DF340100

(Callback example, here: BF08 == PIN Input, Online PIN) CLIENT MSG  CBK:    91 01 [13] F00BBF0808DF790100DF410101
CLIENT MSG CBKR:    92 00 [6] F004DF790100

CLIENT MSG RESP:    90 E2 [405] F0820193DF4204000000019F2701809F3602005E9F260845CFA9C81F28B5BD5A0A476173
…

Continue Transaction Online CLIENT MSG  CMD:    39 12 [28]
F01ADF5001018A0230308906000000000000DF55023031DF56023535

CLIENT MSG RESP:    90 E3 [401] F082018FDF4204000000019F2701409F3602005E9F2608A2471F498B8BD5695A0A476173
…

Deactivate ICC (optional, it is deactivated by the framework if the transaction is completed, not in any terminate or fallback case because the subsequent processing is not known to the framework).

CLIENT MSG  CMD:    41 04 [6] F004DF060100

CLIENT MSG RESP:    90 03 [0]
```


## Code Snippets

Use the following sample code snippets for basic implementation.


### Initialization



```cpp
erg = EMV_CT_Init_Framework(64, (EMV_CT_CALLBACK_FnT)FrameworkEMVCallbackFunction, (void*)NULL, EMV_CT_INIT_OPT_TRACE|EMV_CT_INIT_OPT_TRACE_CLT);

  if(erg != EMV_ADK_OK)
  {
    APP_TRACE("Init EMV framework returned %d", erg);

    return(EMV_INIT_ERR_INIT_KERNEL);
  }
```


### Application Selection



```cpp
/* Step 1: Application Selection */
do
{
 // call kernel: select application from terminal- and card-/list
 eEMVInfo = EMV_CT_StartTransaction(&xterminaldata,  // IN:  terminaldata
                                    &xSelectRes);    // OUT: select info

 xterminaldata.Buildlist = FALSE;
} while(eEMVInfo == _EMV_BADAPP);

switch(eEMVInfo)
{
 case _EMV_OK: // application selected, everything OK
      break;
  ……
}
```


### Offline Part of the Transaction



```cpp
/* Step 2: Performing EMV transaction */

// start EMV-payment
eEMVInfo = EMV_CT_ContinueOffline(&xEMVTransType, &xEMVTransRes);

// at this point, it is possible to select a new application
while(eEMVInfo == _EMV_BADAPP)
{
 // select new application
 xterminaldata.Buildlist = FALSE;

 eEMVInfo = EMV_CT_StartTransaction( &xterminaldata,  // IN:  dummy
                                     &xSelectRes);    // OUT: select info
 if(eEMVInfo == _EMV_OK)
 {
   memset((void*) &xEMVTransRes,  0, sizeof(EMV_TRANSRES_TYPE));

   eEMVInfo = EMV_CT_ContinueOffline(&xEMVTransType, &xEMVTransRes);
 }
}

switch(eEMVInfo)
{
  case _EMV_ARQC:                // go online

    /* transaction requires communication to the host */
    /* TRX not finished yet --> contact your host */
    /* no text to display */
    /* continue, see below */
    break;

  case _EMV_TC:                  // write offline-file
    /* transaction successfully finished */
…
}
```


### Online Response from Host

Authorization Response Code, Issuer Authentication Data, possible Scripts (critical + uncritical), following EMVCo formats:



```cpp
/* Step 3: Completing a transaction Online */

memcpy(pxTxnRec->xHostRespRec.AuthResp, "\x30\x30", 2);

pxTxnRec->xHostRespRec.LenAuth = 0x0A;
memcpy(ucAuth_Data, "\x91\x08\x11\x22\x33\x44\x55\x66\x77\x88", pxTxnRec->xHostRespRec.LenAuth);

pxTxnRec->xHostRespRec.LenScriptCrit = 26;
memcpy(ucCritScript_Data, "\x71\x18\x9F\x18\x04\x00\x00\x00\x01\x86\x0F\x84\x1E\x00\x00\x0A\x8E\x08\x11\x22\x33\x44\x55\x66\x77\x88", pxTxnRec->xHostRespRec.LenScriptCrit);

pxTxnRec->xHostRespRec.LenScriptUnCrit = 26;
memcpy(ucUnCritScript_Data, "\x72\x18\x9F\x18\x04\x00\x00\x00\x01\x86\x0F\x84\x1E\x00\x00\x0A\x8E\x08\x11\x22\x33\x44\x55\x66\x77\x88", pxTxnRec->xHostRespRec.LenScriptUnCrit);

…

eEMVInfo = EMV_CT_ContinueOnline(pxTxnRec, &xEMVOnlineRes);
```


### PIN Entry

A code example for managing PIN entry. PIN entry is done using GUI-ADK ([ADK-GUI Programmers Guide](./pg_gui_users_guide.html)). 

 In case of offline PIN the EMV-ADK transmits the PIN from vault to card (for verification). 

```cpp
unsigned char UIEnterPin(GuiPinParam *pinParam)
{
    int r = -1;

    int disp = getCardHolderDisplay();

    // if card holder display is separate, show cashier message
    if (disp)
        UI_ShowMessage(UI_STR_CARDHOLDER_INPUT, "card holder prompted for PIN input");

    {
        if(disp != UI_DISP_DEFAULT)
            disp = UI_DISP_DEFAULT;

        int digits;
        UIParams values;
        map<string,string>::iterator i;
        guiCb = pinParam->callback;

        uiSetPropertyInt(disp, UI_PROP_PIN_ALGORITHM, (int) pinParam->ucPinAlgo);
        uiSetPropertyInt(disp, UI_PROP_PASSWORD_CHAR, (int) pinParam->ulEchoChar);
        uiSetPropertyInt(disp, UI_PROP_PIN_AUTO_ENTER, (int) pinParam->ucAutoEnter);
        uiSetPropertyInt(disp, UI_PROP_PIN_BYPASS_KEY, (int) pinParam->ulBypassKey);
        uiSetPropertyInt(disp, UI_PROP_PIN_CLEAR_ALL, (int) pinParam->ucClearAll);
        uiSetPropertyInt(disp, UI_PROP_TIMEOUT, (int) pinParam->lTimeoutMs);

        std::string str = pinParam->currency;
        str += " ";
        str += pinParam->amount;
        str += " ";

        values.clear();
        values["msgPIN"] = UI_STR_ENTER_PIN;
        values["amount"] = str;
        values["caution_icon"] = "1";
        values["title"] = pinParam->appLabel;

        if(isKeypadExist())
        {
            while ((r = uiInvokeURL(disp, UI_REGION_ID_MAIN, values, "helper_pin.html", &guiCallback, NULL)) == UI_ERR_PERMISSION)
                usleep(1000);
        }
        else // X10, Carbon, Swordfish, e280
        {
            initializeUiRegions(UI_REGION_ID_MAIN|UI_REGION_ID_SOFTWARE_LEDS);
            while ((r = uiInvokeURL(disp, UI_REGION_ID_MAIN, values, "kbd_pin.html", &guiCallback, NULL)) == UI_ERR_PERMISSION)
                usleep(1000);
        }

        if(r == UI_ERR_OK)
        {
            for (i = values.begin(); i != values.end(); ++i) {
                if (!strcmp(i->first.c_str(), "pin")) {
                    break;
                }
            }
            if (i == values.end()) {
                return EMV_CT_PIN_INPUT_OTHER_ERR;
            }
            if (sscanf(i->second.c_str(), "%d", &digits) == 1) {
                Demo_SplashPleaseWait();
                return EMV_CT_PIN_INPUT_OKAY;
            }
            if (!strcmp(i->second.c_str(), "bypass")) {
                return EMV_CT_PIN_INPUT_BYPASS;
            }
            if (!strcmp(i->second.c_str(), "cancel")) {
                return EMV_CT_PIN_INPUT_ABORT;
            }
            return EMV_CT_PIN_INPUT_OTHER_ERR;
        }
    }

    switch (r) {
        case UI_ERR_TIMEOUT:
            return EMV_CT_PIN_INPUT_TIMEOUT;
        case UI_ERR_ABORT:
        case UI_ERR_CANCELLED:
            return EMV_CT_PIN_INPUT_ABORT;
        default:
            return EMV_CT_PIN_INPUT_OTHER_ERR;
    }
    return EMV_CT_PIN_INPUT_OTHER_ERR;
}

unsigned char _EMVADK_cbk_duringPINinput(void)
{
  if(EMV_CT_SmartDetect(0) != EMV_ADK_SMART_STATUS_OK)
  {
    APP_TRACE("--> WHERE IS THE CARD ???????");
    return true;
  }

  return false;
}

unsigned char ucInputPIN( unsigned char pintype,
                          unsigned char bypass,
                          unsigned char* pucPINResultData)
{
  unsigned char rsp;
  int r = 0;
  unsigned long BypassKey = 0;
  unsigned char tucAmount[6] = {0};
  unsigned char tucAmountAscii[13] = {0};
  char finalAmount[13] = {0};
  guiPinParam pinParam;
  unsigned long TAGR;
  unsigned char Buffer[32];
  unsigned short TAGL = 0;

  if (bypass)
  {
    APP_TRACE("start PIN entry: Bypass active: YES");
    BypassKey = 13; // Bypass activated with Enter Key 0 digits
  }
  else
  {
    APP_TRACE("start PIN entry: Bypass active: NO");
    BypassKey = 0;
  }

  pinParam.ucPinAlgo = EMV_PIN;
  pinParam.ucAutoEnter = 0;
  pinParam.ucClearAll = 0;
  pinParam.ulEchoChar = '*';
  pinParam.ulBypassKey = BypassKey;
  pinParam.lTimeoutMs = 30000;
  pinParam.callback = _EMVADK_cbk_duringPINinput;
  pinParam.currency = UI_STR_CURRENCY;

  TAGR = 0x9F02;

  if (pintype == EMV_CTLS_PIN_INPUT_ONLINE)
  {
    TAGL = 0;
    EMV_CTLS_fetchTxnTags(0, &TAGR, 1, Buffer, 32, &TAGL);
    if (TAGL > 0)
      memcpy(tucAmount, &Buffer[3], 6);
  }
  else
  {
    EMV_CT_fetchTxnTags(EMV_ADK_FETCHTAGS_NO_EMPTY, &TAGR, 1, Buffer, 32, &TAGL);
    if (TAGL > 0)
      memcpy(tucAmount, &Buffer[3], 6);
  }

  APP_TRACE("Amount extracted: %02X%02X%02X%02X%02X%02X",
                     Buffer[3], Buffer[4],
                     Buffer[5], Buffer[6],
                     Buffer[7], Buffer[8]);

  vAmountBCD2ASCII(tucAmount, tucAmountAscii, 6);
  vAmountForDisplay(finalAmount, sizeof(finalAmount), (char*)tucAmountAscii, 2);
  pinParam.amount = finalAmount;

  if ((pintype == EMV_CT_PIN_INPUT_ENCIPHERED) || (pintype == EMV_CT_PIN_INPUT_PLAIN))
  {
    // PIN Entry using GUI-ADK
    rsp = UIEnterPin(&pinParam);

    APP_TRACE("=== result of PIN entry: %d ===", rsp);

    if (rsp == EMV_CT_PIN_INPUT_BYPASS)
      APP_TRACE("PIN Bypass from customer");

    if (rsp != EMV_CT_PIN_INPUT_OKAY)
    {
      return(rsp);
    }

    rsp = EMV_CT_Send_PIN_Offline(pucPINResultData);

    APP_TRACE("=== result of PIN offline: %d ===", rsp);

    switch (rsp)
    {
      case EMV_ADK_SMART_STATUS_OK:
        if (pucPINResultData[0] == 0x63)
        {
          if (pucPINResultData[1] == 0xC1)
             r = UI_ShowOkCancelMessageExt(getCardHolderDisplay(), 100000, UI_STR_PIN, UI_STR_WRONG_PIN_TRY_LAST, NULL);
          else if (pucPINResultData[1] == 0xC0)
             r = UI_ShowOkCancelMessageExt(getCardHolderDisplay(), 100000, UI_STR_PIN, UI_STR_WRONG_PIN_GAME_OVER, NULL);
          else
            r = UI_ShowOkCancelMessageExt(getCardHolderDisplay(), 100000, UI_STR_PIN, UI_STR_WRONG_PIN_TRY_AGAIN, NULL);
          if (r == -1)
            return EMV_CT_PIN_INPUT_ABORT;
        }
        return EMV_CT_PIN_INPUT_OKAY; // need to check SW1 SW2

      default:
        return EMV_CT_PIN_INPUT_COMM_ERR;
    }
  }
  else if ((pintype == EMV_CT_PIN_INPUT_ONLINE) || (pintype == EMV_CTLS_PIN_INPUT_ONLINE))
  {
    // with Online PIN of CTLS there is no need to check card insertion
    if (pintype == EMV_CTLS_PIN_INPUT_ONLINE)
      pinParam.callback = NULL;

    rsp = UIEnterPin(&pinParam);

    APP_TRACE("=== result of PIN entry: %d ===", rsp);

    if (rsp != EMV_CT_PIN_INPUT_OKAY)
    {
      return rsp;
    }

    // Online PIN needs to be fetched by the local/domestic VSS script handling the online PIN block
    // transmission towards the acquirer/network provider
    return EMV_CT_PIN_INPUT_OKAY;
  }
  else if (pintype == EMV_CT_CVM_CUSTOM)
  {
    // custom CVM method
    APP_TRACE("=== result of custom CVM method: OK");
    return EMV_CT_PIN_INPUT_OKAY;
  }
  return EMV_CT_PIN_INPUT_OTHER_ERR;
}
```


# Programming

Here you can find flow-specific use cases and general guidance of scenarios that you may need for implementation.


## Programming and API Principles

This section provides programming function reference for the ADK EMV Contact framework.


### Configuration Commands

For schematic figure see [Configuration Flow]

The EMV Configuration comprises the following steps:

* [Initialize EMV Framework]: Turns on EMV Framework
* [Configure Terminal Data]: Configures terminal data.
* [Configure Application Data]: Configures AID data.
* [Configure CAP Keys]: Configures CAP Keys
* **Exit****Framework:** Turns off the EMV Framework (`[EMV_CT_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework)`)

The following sequence shows an EMV Configuration example for 2 AIDs and 3 CAP Keys:

![28_emv_ct_EMV_Config_Flow_Example.png](.//28_emv_ct_EMV_Config_Flow_Example.png)Figure: EMV Config Flow Example![28_emv_ct_EMV_Config_Flow_Example.png](.//28_emv_ct_EMV_Config_Flow_Example.png)Figure: EMV Config Flow Example![28_emv_ct_EMV_Config_Flow_Example.png](.//28_emv_ct_EMV_Config_Flow_Example.png)Figure: EMV Config Flow Example![28_emv_ct_EMV_Config_Flow_Example.png](.//28_emv_ct_EMV_Config_Flow_Example.png)Figure: EMV Config Flow Example


The EMV configuration is stored permanently in flash files.

**Initialize EMV Framework**

You should initialize the ADK EMV Contact framework before usage, preferably during terminal startup. In case of memory shortage, the application can separate initialization into two steps:

* **Base****initialization**

Call with `EMV_CT_INIT_OPT_BASE_INIT` set in options 

To be done at terminal startup, no memory allocation.
* **Transaction****initialization**

To be done for every transaction. Must provide memory allocation. 

After end of transaction, application calls `[EMV_CT_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework)`.

_Serial Interface_

The command uses the following format:

**Table: Command**


| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x39  | x00  | x00  | x00/x01  | Data   |


**P2 = 0: Init Framework**

**P2 = 1: Exit Framework**


**Table: Response**


| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| None  | x90  | xXX  | Function executed, xx = response code (P2=0)   |
| None  | x90  | x00  | Function executed, xx = response code (P2=1)   |


![14_emv_ct_Init_Framework.png](.//14_emv_ct_Init_Framework.png)Figure: Init Framework![14_emv_ct_Init_Framework.png](.//14_emv_ct_Init_Framework.png)Figure: Init Framework![14_emv_ct_Init_Framework.png](.//14_emv_ct_Init_Framework.png)Figure: Init Framework![14_emv_ct_Init_Framework.png](.//14_emv_ct_Init_Framework.png)Figure: Init Framework


The parameters inside the tag F0 are identical to the structure in the functional interface.


_Function Interface_

The function interface includes four parameters:

* The number of AIDs to support
* The function pointer for the callback
* An arbitrary pointer, which will be relayed unchanged to callback function call (useful for object-oriented applications)
* Initialization options.

On the serial interface the callbacks are realized by intermediate messages. Those are received by the EMV-client (use case 1 and 2 in [anchor_emv_ct_Use_Case_Samples_1to4]). If EMV-client is not used the application has to handle this data (use case 3 and 4). In any case it's mandatory to call the Init and Exit functions.


[EMV_CT_Init_Framework](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework), [EMV_CT_Init_Framework_Client()](_e_m_v___c_t___interface_8h.md#function-emv-ct-init-framework-client)

**Configure Terminal Data**

This section presents an overview of the typical tags for terminal configuration.

This function provides the ADK EMV Contact framework and subsequent kernel with the terminal data it needs. The framework checks and saves the provided data in an XML file. You can configure the XML file directly (file configuration), instead of using this function (dynamic configuration).

_Serial Interface_

The command uses the following format:

**Table: Command**
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x39  | x01  | don’t care  | x00/x01  | Data   |


**P2 = 0: Set Data**

**P2 = 1: Get Data**

**Table: Response**
| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| None  | x90  | xXX  | Function executed, xx = response code (P2=0)   |
| Terminal data  | x90  | x00  | Function executed, xx = response code (P2=1)   |


The following illustration shows the Set/Get Terminal Data function.

![11_emv_ct_Set_Get_Terminal_Data.png](.//11_emv_ct_Set_Get_Terminal_Data.png)Figure: Set/Get Terminal Data![11_emv_ct_Set_Get_Terminal_Data.png](.//11_emv_ct_Set_Get_Terminal_Data.png)Figure: Set/Get Terminal Data![11_emv_ct_Set_Get_Terminal_Data.png](.//11_emv_ct_Set_Get_Terminal_Data.png)Figure: Set/Get Terminal Data![11_emv_ct_Set_Get_Terminal_Data.png](.//11_emv_ct_Set_Get_Terminal_Data.png)Figure: Set/Get Terminal Data


The parameters inside the tag F0 are identical to the structure in the functional interface.

_Function Interface_

[EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata), [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

**Defaults and Guides**

The default terminal data is an attended combined offline/online terminal, supporting all variants of CVM and card authentication:

* Currency: EUR
* Supported languages: English
* Country Code: France.

It is recommended to configure all terminal-wide parameters from the application. If any of the parameters are missing, the default will be used. The configuration will not fail because of a missing parameter.

The following table show samples of configuration values.

**Table: Configuration Values**
| Tags  | Size  | Default Value  | Description   |
|  -------- | -------- | -------- | -------- |
| 9F35  | 1  | 0x22  | Terminal type   |
| 9F1A  | 2  | 0x02, 0x50 (France)  | Terminal country code according ISO 3166   |
| 9F33  | 3  | 0xE0, 0xF8, 0xC8  | Terminal capabilities   |
| 9F40  | 5  | 0xF0, 0x00, 0xB0, 0xA0, 0x01  | Additional Terminal capabilities   |
| 9F1C  | 8  | "00000001"  | Terminal Identification   |
| 5F2A  | 2  | 0x09, 0x78 (EUR)  | Transaction currency code according ISO 4217. For a single transaction this value may be overwritten.   |
| 5F36  | 1  | 0x02  | Transaction currency Exponent   |
| DF67  | 20  | 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 

 (Only 1 supported: English)  | Supported languages by host (up to 20)   |
| 9F1E  | 8  | < S/N (last 8 digits) >  | IFD Serial Number   |
| DF65  | 128  | (response only)  | Version of EMV kernel   |
| DF11  | 128  | (response only)  | Version of EMV framework   |
| DF6B  | 128  | (response only)  | version of L1 Driver   |


**EMV Application Terminal Configuration Examples**

_Terminal Configuration Example – Set all but IFD serial number_```text

Command
39  01  00  00  F0  42  9F  35  01  22  5F  2A  02  08  40  5F    9....B.5."_*..@_
36  01  02  9F  1A  02  08  40  9F  33  03  E0  F8  C8  9F  40    6......@.3.....@
05  F0  00  B0  A0  01  9F  1C  08  32  32  32  32  32  32  32    .........2222222
32  DF  67  14  01  02  00  00  00  00  00  00  00  00  00  00    2.g.............
00  00  00  00  00  00  00  00                                    ........
Response                        
90  00                      
```

_Terminal Configuration Example – Set Country_

```cpp
Command
39 01   00  00  F0  05  9F  1A  02  02  80                  

Response                        
90  00                      
```

_Terminal Configuration Example – Get Current_

```text

Command
39  01  00  01

Response
90  00  F0  81  B2  9F  35  01  22  5F  2A  02  08  40  5F  36    ......5."_*..@_6
01  02  9F  1A  02  08  40  9F  33  03  E0  F8  C8  9F  40  05    ......@.3.....@.
F0  00  B0  A0  01  9F  1C  08  30  30  30  30  30  30  30  31    ........00000001
DF  67  14  01  02  00  00  00  00  00  00  00  00  00  00  00    .g..............
00  00  00  00  00  00  00  9F  1E  08  30  31  31  30  30  32    ..........011002
30  39  DF  65  08  4C  32  37  2E  30  2E  33  72  DF  11  07    09.e.L27.0.3r...
34  2E  31  30  2E  32  39  DF  6B  3A  49  46  4D  31  38  63    4.10.29.k:IFM18c
2D  45  4D  56  34  2E  33  5F  41  30  30  2C  20  53  57  5F    -EMV4.3_A00, SW_
41  30  30  2C  20  48  57  5F  41  30  30  3B  30  31  2E  33    A00, HW_A00;01.3
37  20  30  34  2F  32  30  32  32  3B  56  32  30  30  63  20    7 04/2022;V200c 
43  54  4C  53  DF  6C  10  30  31  31  30  30  32  30  39  30    CTLS.l.011002090
30  30  30  30  30  32  62                                        000002b
```

**Configure Application Data**

This function provides the ADK EMV Contact framework and subsequent kernel with the application data it needs. The framework checks and saves the provided data in an XML file. You should configure one set of parameters per application (AID). You can configure the XML file directly (file configuration), instead of using this function (dynamic configuration).

_Serial Interface_

The command uses the following format:

**Table: Command**


| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x39  | x02  | x00  | x00/x01  | Data   |


**P2 = 0: Set Data**

**P2 = 1: Get Data**


**Table: Response**
| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| None  | x90  | xXX  | Function executed, xx = response code (P2=0)   |
| Application data  | x90  | x00  | Function executed, xx = response code (P2=1)   |


![12_emv_ct_Set_Get_Application_Data.png](.//12_emv_ct_Set_Get_Application_Data.png)Figure: Set/Get Application Data![12_emv_ct_Set_Get_Application_Data.png](.//12_emv_ct_Set_Get_Application_Data.png)Figure: Set/Get Application Data![12_emv_ct_Set_Get_Application_Data.png](.//12_emv_ct_Set_Get_Application_Data.png)Figure: Set/Get Application Data![12_emv_ct_Set_Get_Application_Data.png](.//12_emv_ct_Set_Get_Application_Data.png)Figure: Set/Get Application Data

The parameters inside the tag F0 are identical to the structure in the functional interface.


_Function Interface_

[EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata), [EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.


**Defaults and Guides**

The default application is named “Default App” and includes typical EMV parameters for TACs, CDA mode 3, floorlimit 0, partial selection supported, default DOLs == 9F37, no additional or mandatory tags and terminal-wide parameters as configured per terminal and not limited. You should configure almost all AID parameters from the application because they might be changed if applicable. If any of the parameters are missing, the default will be used. The configuration will not fail because of a missing parameter once a correct AID is available.

The following table show samples of configuration values.

**Table: AID Configuration Control**
| Tags  | Size  | Description   |
|  -------- | -------- | -------- |
| DF66  | 1  | AID Set Requests: 

 0x01 > Write one AID config 0x10 > Write/Clear AID config 

 0x20 > Write/Clear all AID configs   |
| DF66  | 1  | AID Get Data Request: 

 0x00 > Read one AID config 

 0x01 > Read first AID config 0x02 > Read next AID config   |


**Table: AID Configuration Data**
| Tags  | Size  | Default Value  | Description   |
|  -------- | -------- | -------- | -------- |
| 4F  | 5..16  | **Mandatory** (**No****Default**)  | Application ID   |
| 9F09  | 2  | < none > <sup>[1)][2)]</sup> | Terminal application version number   |
| 50  | ..16  | "Default App" <sup>[2)]</sup> | Default application name to be used in case application label (tag 50) and application preferred name (tag 9F12) are not read from chip   |
| DF20  | 1  | 0x01  | Application selection indicator (ASI)   |
| 9F15  | 2  | 0x59, 0x99  | Merchant category code   |
| 9F1C  | 8  | 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x31  | Terminal Identification   |
| 9F1B  | 4  | 0x00, 0x00, 0x00, 0x00  | Terminal floor limit (binary coded)   |
| DF24  | 4  | 0x00, 0x00, 0x00, 0x00  | Threshold Value for Biased Random Online Selection during risk management (binary coded)   |
| DF26  | 1  | 0x00  | Target percentage (BCD coded) for random online selection during risk management   |
| DF25  | 1  | 0x00  | Maximum target percentage (BCD coded) for random online selection during risk management   |
| DF21  | 5  | 0x04, 0x00, 0x00, 0x00, 0x00 <sup>[2)]</sup> | Terminal Action Code - Denial   |
| DF22  | 5  | 0xF8, 0x50, 0xAC, 0xF8, 0x00 <sup>[2)]</sup> | Terminal Action Code - Online   |
| DF23  | 5  | 0xFC, 0x50, 0xAC, 0xA0, 0x00 <sup>[2)]</sup> | Terminal Action Code - Default   |
| DF2D  | 1  | 0x01  | 0xNN = EMV-Application (or similar) 

 0xFF = non-EMV-Application   |
| DF27  | ..80  | 0x9F, 0x37, 0x04 <sup>[2)]</sup> | Default TDOL   |
| DF28  | ..80  | 0x9F, 0x37, 0x04  | Default DDOL   |
| 9F16  | 15  | 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20  | Merchant Identifier   |
| DF3E  | 1  | 0x02  | CDA processing, maximum security or maximum speed: 

 0x00 - CDA for ARQC: yes, for TC after successful online communication: yes 

 0x01 - CDA for ARQC: yes, for TC after successful online communication: no 

 0x02 - CDA for ARQC: no, for TC after successful online communication: no 

 0x03 - CDA for ARQC: no, for TC after successful online communication: yes   |
| DF15  | 1  | 0x00  | TACIAC Default handling: 

 0x00 - process default action codes prior to 1st GENERATE AC 

 0x01 - process default action codes after 1st GENERATE AC   |
| DF2E  | 1  | 0x00  | Behavior for AIP 'CVM not supported': 

 0x00 - continue transaction 0x01 - execute CVM signature 

 0x02 - execute CVM online PIN 0x03 - abort transaction   |
| 9F39  | 1  | 0x05  | POS entry mode according ISO 8583:1987   |
| DF5F  | ..20  | < none >  | Up to 10 additional terminal application version numbers (each two byte, network byte order)   |
| DF2B  | 5  | 0x01, 0x1A, 0x00, 0x00, 0x00 <sup>[2)]</sup> | See AID Application Flow Capabilities (see [Defines for Application flow capabilities](group___a_p_p___f_l_o_w___c_a_p_s.md))   |
| DF29  | ..255  | < none >  | Additional Tags, TLV encoded   |
| DF2A  | ..40  | 0  | Up to 20 mandatory tags (each two bytes, network byte order)   |
| 9F33  | 3  | 0xE0, 0xF8, 0xC8 <sup>[2)]</sup> | Application Specific Terminal capabilities   |
| 5F28  | 2  | 0x02, 0x50  | Application Specific Terminal country code   |
| 9F40  | 5  | 0xF0, 0x00, 0xB0, 0xA0, 0x01 <sup>[2)]</sup> | Application Specific Additional terminal capabilities   |
| 9F35  | 1  | 0x22  | Application Specific Terminal Type   |
| DF1D  | 5..16  | < none >  | priority applications (tag might occur up to 5 times) <sup>[3)]</sup> |
| DF17  | 5  | 0, 0, 0  | 3 associated mag. stripe IDs, only non-Null values are relevant <sup>[3)]</sup> |
| DF1C  | 8  | 0x21, 0x20, 0x11, 0x02, 0x00, 0x00, 0x00, 0x00  | 16 half bytes transaction use case filter <sup>[3)]</sup> |
| DF18  | 1  | 0x00  | settings for fallback from chip to mag. stripe in conjunction with DF17 <sup>[3)]</sup> |
| DF2F  | 1  | 0x00  | code for custom (non-EMVCo defined) CVM method supported by this application   |
| DF13  | 5  | 0x21, 0x05, 0x00, 0x00, 0x00  | flags for supplementary terminal capabilities affecting EMVCo configuration checksum   |
| DF12  | 32  | (response only)  | EMVCo checksum   |
| DFD004  | ..3  | 0x00, 0x00, 0x00  | Transaction types for sale (omitted in response if at default)   |
| DFD005  | ..3  | 0x01, 0x01, 0x01  | Transaction types for cash-out (omitted in response if at default)   |
| DFD006  | ..3  | 0x09, 0x09, 0x09  | Transaction types for cash back (omitted in response if at default)   |
| DFD007  | ..3  | 0x20, 0x20, 0x20  | Transaction types for refund (omitted in response if at default)   |
| DFAB58  | ..88  | < none >  | Data Container Read IDs for D-PAS data exchange   |
| DFAB59  | ..88  | < none >  | Data Container Read ranges for D-PAS data exchange   |


<sup> 1) </sup> If none is configured card's application version is used during transaction

<sup> 2) </sup> Depending on AID and Terminal Type some default application data settings get adapted values, e.g. a MasterCard application gets "Mastercard" as default application label. Note that these default settings might change any time as ADK EMV evolves. Also note that especially Terminal Capabilities and Additional Terminal Capabilities are not inherited from the terminal settings. Therefore do not rely on and configure all fields as recommended above.

<sup> 3) </sup> Settings for special operation. Do not configure unless required.

**EMV Application (AID) Configuration Examples**

_AID Configuration Example – Set MC Data_

```cpp
Command – Configure Multiple Parameters
39  02  00  00  F0  81  A2  DF  66  01  01  4F  07  A0  00  00
00  04  10  10  9F  09  02  00  02  50  0B  4D  61  73  74  65
72  63  61  72  64  00  DF  20  01  01  9F  15  02  59  99  9F
1C  08  31  32  33  34  35  36  37  38  9F  1B  04  00  00  13
88  DF  24  04  00  00  01  F4  DF  26  01  00  DF  25  01  00
DF  21  05  04  00  00  00  00  DF  22  05  F8  50  AC  F8  00
DF  23  05  FC  50  AC  A0  00  DF  2D  01  01  DF  27  0F  9F
02  06  5F  2A  02  9A  03  9C  01  95  05  9F  37  04  DF  28
03  9F  37  04  9F  16  0F  20  20  20  20  20  20  20  20  20
20  20  20  20  20  20  DF  29  04  9F  53  01  52  DF  2A  01
8E  DF  2B  05  0E  00  22  00  00      
                    
Response 
90 00
```

_AID Configuration Example – Set Visa Data_```text

Command – Configure Label Only  
39  02  00  00  F0  1B  DF  66  01  01  4F  07  A0  00  00  00   9......f..O.....
03  10  10  50  0C  56  69  73  61  20  64  65  66  61  75  6C   ...P.Visa defaul
74                                                               t
Response 
90 00
```

_AID Configuration Example – Get Visa Data_```text

Command
39  02  00  01  F0  0D  DF  66  01  00  4F  07  A0  00  00  00
03  10  10

Response
90  00  F0  82  01  28  4F  07  A0  00  00  00  03  10  10  9F    .....(O.........
09  02  00  8C  DF  5F  14  FF  FF  FF  FF  FF  FF  FF  FF  FF    ....._..........
FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  FF  50  0C  56  69  73    ...........P.Vis
61  20  64  65  66  61  75  6C  74  DF  20  01  01  9F  15  02    a default. .....
59  99  9F  1C  08  30  30  30  30  30  30  30  31  9F  1B  04    Y....00000001...
00  00  00  00  DF  49  04  00  00  00  00  DF  4A  03  E0  F8    .....I......J...
C8  DF  24  04  00  00  00  00  DF  26  01  00  DF  25  01  00    ..$......&...%..
DF  21  05  00  10  00  00  00  DF  22  05  DC  40  04  F8  00    .!......."..@...
DF  23  05  DC  40  00  80  00  DF  2D  01  01  DF  27  03  9F    .#..@....-...'..
37  04  DF  28  03  9F  37  04  9F  16  0F  20  20  20  20  20    7..(..7....     
20  20  20  20  20  20  20  20  20  20  DF  15  01  00  9F  39              .....9
01  05  DF  3E  01  02  DF  29  00  DF  2C  00  DF  2A  00  9F    ...>...)..,..*..
33  03  E0  F8  C8  DF  2B  05  01  03  00  00  00  DF  2E  01    3.....+.........
00  9F  1A  02  02  50  5F  28  02  02  50  9F  40  05  F0  00    .....P_(..P.@...
B0  A0  01  9F  35  01  22  DF  17  03  00  00  00  DF  1C  08    ....5.".........
21  20  11  02  00  00  00  00  DF  18  01  00  DF  2F  01  00    ! .........../..
DF  13  05  21  05  00  00  00  DF  12  20  36  33  30  34  31    ...!...... 63041
38  41  45  37  30  38  42  38  38  45  38  35  36  45  34  37    8AE708B88E856E47
36  39  45  36  32  39  41  43  33  37  43  DF  04  00            69E629AC37C...
```

**Configure CAP Keys**

This function provides the ADK EMV Contact framework and subsequent kernel with the CAP keys it needs. The framework checks and saves the provided data in an XML file. You can configure the XML file directly (file configuration), instead of using this function (dynamic configuration). Additionally, you can add revoked certificates for each of the keys here, if the application supports the request. Currently, maximum number of CAP keys to be stored is 100 (for both: file and dynamic configuration).

_Serial Interface_

The command uses the following format:

**Table: Command**


| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x39  | x03  | x00  | x00/x01  | Data   |


**P2 = 0: Set Data**

**P2 = 1: Get Data**


**Table: Response**
| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| None  | x90  | xXX  | Function executed, xx = response code (P2=0)   |
| Key data  | x90  | x00  | Function executed, xx = response code (P2=1)   |


![13_emv_ct_Set_Get_CAP_Keys.png](.//13_emv_ct_Set_Get_CAP_Keys.png)Figure: Set/Get CAP Keys![13_emv_ct_Set_Get_CAP_Keys.png](.//13_emv_ct_Set_Get_CAP_Keys.png)Figure: Set/Get CAP Keys![13_emv_ct_Set_Get_CAP_Keys.png](.//13_emv_ct_Set_Get_CAP_Keys.png)Figure: Set/Get CAP Keys![13_emv_ct_Set_Get_CAP_Keys.png](.//13_emv_ct_Set_Get_CAP_Keys.png)Figure: Set/Get CAP Keys

The parameters inside the tag F0 are identical to the structure in the functional interface.


_Function Interface_

[EMV_CT_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey), [EMV_CT_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-readcapkeys), [EMV_CT_GetCAPKeyInfo()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getcapkeyinfo)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

**Table: CA Key Configuration Control**


| Tags  | Size  | Description   |
|  -------- | -------- | -------- |
| DF66  | 1  | CA Key Set Request: 

 0x01 > Write one CA Key 

 0x10 > Clear one CA Key 

 0x20 > Clear all CA Keys   |


**Table: CA Key Configuration Data**
| Tags  | Size  | Description   |
|  -------- | -------- | -------- |
| DF09  | 1  | Key Index   |
| DF0B  | 248 Max  | Key Data (modulus)   |
| DF0A  | 5  | Associated RID   |
| DF0D  | 1  | 3 (0x03) or 65535 (0x01)   |
| DF0C  | 20  | SHA-1 of RID, Index, Key, Exp   |
| DF0E  | Var  | Revocation Serial Numbers (3 bytes each)   |



_Defaults and Example_

The default is an empty CAP Key list. Not configuring keys will result in card authentication failure and the corresponding TVR bits will be raised by the kernel. Once a hash is included to the CAP key injection, this will be cross checked. If not Ok, the injection will be rejected.

**EMV CA Key Configuration Example**

_CA Key Configuration Example – Set Visa Key 99_

```cpp
Command
39  03  44  00  F0  81  AF  DF  66  01  01  DF  09  01  99  DF
0A  05  A0  00  00  00  03  DF  0B  81  80  AB  79  FC  C9  52
08  96  96  7E  77  6E  64  44  4E  5D  CD  D6  E1  36  11  87
4F  39  85  72  25  20  42  52  95  EE  A4  BD  0C  27  81  DE
7F  31  CD  3D  04  1F  56  5F  74  73  06  EE  D6  29  54  B1
7E  DA  BA  3A  6C  5B  85  A1  DE  1B  EB  9A  34  14  1A  F3
8F  CF  82  79  C9  DE  A0  D5  A6  71  0D  08  DB  41  24  F0
41  94  55  87  E2  03  59  BA  B4  7B  75  75  AD  94  26  2D
4B  25  F2  64  AF  33  DE  DC  F2  8E  09  61  5E  93  7D  E3
2E  DC  03  C5  44  45  FE  7E  38  27  77  DF  0C  14  4A  BF
FD  6B  1C  51  21  2D  05  55  2E  43  1C  5B  17  00  7D  2F
5E  6D  DF  0D  01  03                                      

Response
90 00
```


### Transaction Commands

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

Use the following to implement Transaction Commands:

* [Starting a Transaction]
* [Continue a Transaction Offline Part]
* [Continue a Transaction Online Part]
* [Fetching Additional Tags]
* [Send EMV PIN to Smart Card]


### Transaction Sequence

The following illustration shows the transaction sequence flow.

![30_emv_ct_Transaction_Sequence.png](.//30_emv_ct_Transaction_Sequence.png)Figure: Transaction Sequence![30_emv_ct_Transaction_Sequence.png](.//30_emv_ct_Transaction_Sequence.png)Figure: Transaction Sequence![30_emv_ct_Transaction_Sequence.png](.//30_emv_ct_Transaction_Sequence.png)Figure: Transaction Sequence![30_emv_ct_Transaction_Sequence.png](.//30_emv_ct_Transaction_Sequence.png)Figure: Transaction Sequence

**Starting a Transaction**

You can use this function to start a transaction, which runs application selection. Terminals are usually configured with several applications, but on the ICC, the configuration may include one or several applications.

You should determine which application to use for payment transactions.

Use the following ways to find out how the ICC and the terminal (000candidate list) support AIDs:

* **PSE**

Only possible with the support of terminal and ICC.

ICC contains a directory including all supported applications. Find intersection with the terminal‘s supported AIDs.
* **Explicit****Select** for all terminal-known applications.

If there are several candidates, a callback prompts the cardholder to choose the application.

The Final SELECT is done for the chosen application. The ICC works on the AID’s data.
_Serial Interface_

The command uses the following format:

**Table: Command**


| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x39  | x10  | x00  | x00  | Txn Data   |


**Table: Response**


| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| txn data (application selection)  | x90  | xXX  | Function executed, xx = response code   |


![15_emv_ct_Start_Transaction.png](.//15_emv_ct_Start_Transaction.png)Figure: Start Transaction![15_emv_ct_Start_Transaction.png](.//15_emv_ct_Start_Transaction.png)Figure: Start Transaction![15_emv_ct_Start_Transaction.png](.//15_emv_ct_Start_Transaction.png)Figure: Start Transaction![15_emv_ct_Start_Transaction.png](.//15_emv_ct_Start_Transaction.png)Figure: Start Transaction


The parameters inside the tag F0 are identical to the structure in the functional interface.

_Function Interface_

[EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

_Defaults and Example_

Use this function to initialize a transaction. You can set the known amount, transaction type, currency, date, time and a number of transaction options. You should supply these essential transaction parameters at this point, although you can change parameters further during transaction processing. In contact mode this step performs application selection including the final select. Subsequently the application may proceed with its own apps kernel or use `Continue_Offline` to use the EMV kernel to process an EMV transaction.

_Typical tags_

This section presents an overview of typical tags for the Start transaction.

**Table: Start Transaction Command Data**
| Tag  | Size  | Mandatory  | Description   |
|  -------- | -------- | -------- | -------- |
| 9C  | 1  | Y  | Transaction type, according to ISO 8583 - Annex A: 

 Processing Code, Position 1 + 2   |
| 9F02  | 6  | Y  | Transaction amount auth   |
| 5F2A  | 2  | -  | Currency code to be used for transaction. 

 Only needed in case of DCC   |
| 5F36  | 1  | -  | Currency exponent to be used for transaction. Only needed in case of DCC   |
| 9A  | 3  | Y  | Transaction date (YYMMDD). 

 E105 RTC does not supply transaction date.   |
| 9F21  | 3  | Y  | Transaction time (HHMMSS). 

 E105 RTC does not supply transaction time.   |
| 9F41  | 4  | Y  | Transaction Sequence Counter 

 Must be supplied. E105 does not keep sequence counter.   |
| 9F03  | 6  | -  | Amount Other (CashBack)   |
| DF40  | 1  | -  | Force Online (if supported by AID config) 0x01 = True, 0x00 = False   |
| DF43  | 1  | -  | Force Accept (if supported by AID config) 0x01 = True, 0x00 = False   |
| DF48  | 1  | -  | ”Request ARQC from card, but don’t set “suspicious bit” 

 0x01 = True, 0x00 = False   |
| DF57  | 1  | -  | Account Type: 

 > 0x00 Default 

 > 0x10 Savings 

 > 0x20 Cheque Debit 

 > 0x30 Credit   |
| DF47  | 1  | -  | Preselected customer language. 

 See [Different Languages] .   |
| DF34  | 1  | -  | Amount confirmation (if not PIN + Amount Confirm) not configured): 

 > 0x00 Confirm Amount immediately after language selection before CVM 

 > 0x01 Confirm Amount after cardholder verification   |
| DF05  | 1  | -  | Build App List: 

 > 0x00 Reuse the existing list and remove the currently activated AID, e.g. 6985 at GPO 

 > 0x01 Build a new candidate list (needs to be set on start of transaction) 

 > 0xFn Reuse the existing list do not remove anything and select candidate n of the candidate list   |
| DF45  | 1  | -  | Do not process PSE (E105 default is False): 0x01 = True, 0x00 = False   |
| DF4D  | 1  | -  | Cardholder confirmation: 0x00 = Yes, 0x01 = No   |
| DF36  | 5  | -  | See [Options for transaction processing](group___t_x_n___o_p_t_i_o_n_s.md) .   |
| DF37  | 3  | -  | See [Re-entrance options](group___t_x_n___s_t_e_p_s.md) .   |


**Table: Start Transaction Response Data**
| Tag  | Size  | Mandatory  | Description   |
|  -------- | -------- | -------- | -------- |
| 84  | 17  | -  | DF Name   |
| 50  | 17  | -  | App Label (not App Label according to EMVCo)   |
| DF33  | Var  | -  | App Name   |
| 9F11  | 1  | -  | Issuer code table   |
| 9F12  | Var  | -  | App preferred name   |
| 5F2D  | Var  | -  | Preferred language   |
| DF62  | 15  | -  | EMV Framework Error data   |
| DF63  | 1  | -  | Display Text Index   |
| DF4E  | -  | -  | 0x80 = final amount (9F02/81) is required for application initialization (GPO)   |
| FF03  | var  | -  | Candidate list containing: 

 DF04 - AID 

 50 - App Label (not App Label according to EMVCo)   |
| DF04  | 17  | -  | Selected AID Name   |


**EMV Start Transaction Examples**

_Start Transaction Command for EUR 1.00 on Multi App Card_

```cpp
Start Command >>
39  10  00  00  F0  2C  9F  02  06  00  00  00  00  01  00  5F
2A  02  09  78  5F  36  01  02  9A  03  13  02  01  9F  21  03
12  00  00  9C  01  00  DF  05  01  01  DF  36  05  01  00  00
00  00                                                      

AppSel Callback Command <<
91  01  F0  34  BF  04  31  DF  74  01  01  50  0B  56  69  73
61  20  43  72  65  64  69  74  50  0A  4D  61  73  74  65  72
63  61  72  64  DF  04  07  A0  00  00  00  03  10  10  DF  04
07  A0  00  00  00  04  10  10                              

AppSel Callback Response >> 
92  01  F0  04  DF  75  01  01

Start Response <<
90  00  F0  66  84  07  A0  00  00  00  03  10  10  50  0B  56
69  73  61  20  43  72  65  64  69  74  9F  11  01  01  5F  2D
08  65  6E  65  73  64  65  66  72  DF  4E  01  00  FF  03  17
DF  04  07  A0  00  00  00  03  10  10  50  0B  56  69  73  61
20  43  72  65  64  69  74  FF  03  16  DF  04  07  A0  00  00
00  04  10  10  50  0A  4D  61  73  74  65  72  63  61  72  64
DF  04  07  A0  00  00  00  03  10  10                      


Start Transaction Command for EUR 1.00 on single app card 
Start Command >>
39  10  00  00  F0  24  9F  02  06  00  00  00  00  01  00  5F
2A  02  09  78  5F  36  01  02  9A  03  13  02  01  9F  21  03
12  00  00  9C  01  00  DF  05  01  01                      

Start Response <<
90  00  F0  48  84  07  A0  00  00  00  03  10  10  50  0F  43
52  45  44  49  54  4F  20  44  45  20  56  49  53  41  DF  33
0B  56  49  53  41  20  43  52  45  44  49  54  9F  11  01  01
9F  12  0F  43  52  45  44  49  54  4F  20  44  45  20  56  49
53  41  DF  04  07  A0  00  00  00  03  10  10              
```

**Continue a Transaction (Offline Part)**

This section presents an overview on typical tags for continuing the transaction after the final selection by using the EMVCo CT kernel.

If the “EMV Start Transaction” phase results in an EMV application being found on the card, then a transaction shall be performed. The EMV Offline Transaction performs the offline part of an EMV transaction.

During the EMV Offline Transaction various Callback shall be used. Some of the Callback require UI processing and checking by the host device. The potential callbacks are:

* **Amount****Conf:** For Amount Confirmation
* **Hotlist/Log**: For Transaction Log and Hotlist
* **Domestic/Local** Checks: For local PAN checks
* **DCC:** For DCC processing.

You can use this function to perform offline EMV transactions. Possible results for Offline Transactions:

* Decline
* Accept offline
* Go online
* Terminate
* Fallback.

The following diagram shows the flow for offline transactions.

![16_emv_ct_Offline_Transaction.png](.//16_emv_ct_Offline_Transaction.png)Figure: Offline Transaction![16_emv_ct_Offline_Transaction.png](.//16_emv_ct_Offline_Transaction.png)Figure: Offline Transaction![16_emv_ct_Offline_Transaction.png](.//16_emv_ct_Offline_Transaction.png)Figure: Offline Transaction![16_emv_ct_Offline_Transaction.png](.//16_emv_ct_Offline_Transaction.png)Figure: Offline Transaction


_Serial Interface_

The command uses the following format:

**Table: Command**


| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x39  | x11  | x00  | x00  | Txn Data   |


**Table: Response**


| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| txn data (txn result offline)  | x90  | xXX  | Function executed, xx = response code   |


![17_emv_ct_Continue_Transaction_Offline.png](.//17_emv_ct_Continue_Transaction_Offline.png)Figure: Continue Transaction Offline![17_emv_ct_Continue_Transaction_Offline.png](.//17_emv_ct_Continue_Transaction_Offline.png)Figure: Continue Transaction Offline![17_emv_ct_Continue_Transaction_Offline.png](.//17_emv_ct_Continue_Transaction_Offline.png)Figure: Continue Transaction Offline![17_emv_ct_Continue_Transaction_Offline.png](.//17_emv_ct_Continue_Transaction_Offline.png)Figure: Continue Transaction Offline


The parameters inside the tag F0 are identical to the structure in the functional interface.


_Function Interface_

[EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

_Defaults and Example_

Use this section to determine how to continue an offline EMV transaction. You can change the amount, add a cashback amount, add the transaction counter for this AID and configure a few more transaction parameters (e.g., callbacks supported). In contact mode, this step performs the offline part of the transaction, ending with the 1st GAC. The payment is completed after this step.

**Table: EMV Transaction Offline Command Data**
| Tag  | Size  | Mandatory  | Description   |
|  -------- | -------- | -------- | -------- |
| 9F02  | 6  | -  | Transaction amount auth   |
| 5F2A  | 2  | -  | Currency code to be used for transaction. 

 Only needed in case of DCC   |
| 5F36  | 1  | -  | Currency exponent to be used for transaction. Only needed in case of DCC   |
| 9A  | 3  | -  | Transaction date (YYMMDD).   |
| 9F21  | 3  | -  | Transaction time (HHMMSS).   |
| 9F03  | 6  | -  | Amount Other (CashBack)   |
| DF40  | 1  | -  | Force Online (if supported by AID config) 

 0x01 = True, 0x00 = False   |
| DF43  | 1  | -  | Force Accept (if supported by AID config) 

 0x01 = True, 0x00 = False   |
| DF48  | 1  | -  | Request ARQC from card, but don't set “suspicious bit” 

 0x01 = True, 0x00 = False   |
| DF57  | 1  | -  | Account Type: 

 > 0x00 Default 

 > 0x10 Savings 

 > 0x20 Cheque Debit 

 > 0x30 Credit   |
| DF47  | 1  | -  | Preselected customer language. 

 See [Different Languages] .   |
| DF34  | 1  | -  | Amount confirmation (if not PIN + Amount Confirm) not configured): 

 > 0x00 Confirm Amount immediately after language selection before CVM 

 > 0x01 Confirm Amount after cardholder verification   |
| DF14  | Var  | -  | Additional Tags   |
| DF36  | 5  | -  | See EMV Transaction Options (Tag DF36)   |
| DF37  | 3  | -  | See EMV Transaction Steps (Tag DF37)   |


**Table: EMV Transaction (offline and online) Response Data**
| Tag  | Size  | Mandatory  | Description   |
|  -------- | -------- | -------- | -------- |
| -  | -  | -  | For Card Data See: 

 > Offline Transaction Card Data 

 > Online Transaction Card Data 

 > Online Transaction with Online PIN Card Data   |
| DF42  | 4  | -  | Status Info   |
| 9F27  | 1  | -  | Cryptogram information data (CID)   |
| 9F36  | 2  | -  | Application transaction counter (ATC)   |
| 9F26  | 8  | -  | Application cryptogram   |
| 9F39  | 1  | -  | POS entry mode   |
| 9F41  | 4  | -  | Transaction Sequence Counter   |
| 5F34  | 1  | -  | PAN sequence number   |
| 9F10  | 9  | -  | Issuer Application Data   |
| 9F37  | 4  | -  | Unpredictable Number   |
| 95  | 5  | -  | Terminal Verification Results   |
| 9A  | 3  | -  | Transaction Date   |
| 9F21  | 3  | -  | Transaction Time   |
| 9C  | 1  | -  | Transaction Type   |
| 5F2A  | 2  | -  | Transaction Currency Code   |
| 82  | 2  | -  | Application Interchange Profile   |
| 9F1A  | 2  | -  | Terminal Country Code   |
| 9F34  | 3  | -  | CVM Results   |
| 9F33  | 3  | -  | Terminal Capabilities   |
| 9F35  | 1  | -  | Terminal Type   |
| 9F1E  | 8  | -  | Interface Device (IFD) serial number   |
| 84  | 17  | -  | 1 Byte Length. Dedicated File (DF) Name   |
| 9F09  | 2  | -  | vApplication Version Number   |
| DF08  | Var  | -  | Script Result Critical   |
| DF07  | Var  | -  | Script Result Uncritical   |
| 9B  | 2  | -  | Transaction Status Information   |
| 9F06  | 17  | -  | Application Identifier (AID)   |
| DF29  | Var  | -  | Additional Tags   |
| 9F53  | 1  | -  | Transaction Category Code   |
| 9F02  | 6  | -  | Amount [Auth](class_auth.md) Numeric   |
| 9F03  | 6  | -  | Amount [Auth](class_auth.md) Other   |
| 9F12  | 17  | -  | Application name, zero terminated   |
| 5F25  | 3  | -  | Application Effective Date   |
| 5F28  | 2  | -  | Issuer Country Code   |
| 9F45  | 2  | -  | Data Authentication Code, present if SDA card   |
| 9F4C  | 9  | -  | 1 Byte Length. optional: present if DDA/CDA card   |
| DF21  | 5  | -  | Terminal Action Code - Denial   |
| DF22  | 5  | -  | Terminal Action Code - Online   |
| DF23  | 5  | -  | Terminal Action Code - Default   |
| 9F0E  | 5  | -  | Issuer Action Code - Denial   |
| 9F0F  | 5  | -  | Issuer Action Code - Online   |
| 9F0D  | 5  | -  | Issuer Action Code - Default   |
| 9F40  | 5  | -  | Additional Terminal Capabilities   |
| 5A  | 10  | -  | PAN   |
| 57  | 19  | -  | Track 2 equivalent data   |
| DF62  | 15  | -  | Additional error data, filled if transaction is not successful   |
| DF64  | 32  | -  | Kernel Debug   |
| 9F16  | 15  | -  | Merchant Identifier   |
| DF63  | 1  | -  | Filled with index of display text id if anything should be displayed   |
| 5F20  | 27  | -  | 1 Byte Length. Cardholder Name   |
| 5F2D  | 9  | -  | Language Preference (zero terminated)   |
| 9F08  | 2  | -  | ICC Application Version Number   |
| 5F36  | 1  | -  | Transaction Currency Exponent   |
| DF59  | 1  | -  | Number of wrong PIN entries (only in case of offline PIN)   |
| 5F30  | 2  | -  | Service code as defined in ISO/IEC 7813 for track 1 and track 2 format   |
| DF17  | 1  | -  | Fallback MID to be used.   |
| 8E  | 28  | -  | CVM list retrieved from ICC   |


EMV Offline **Transaction Example**

_Offline Transaction Command_

```cpp
Offline Command >>
39  11  00  00  F0  2D  9F  41  04  00  00  00  01  DF  46  06
00  00  00  00  00  00  DF  58  06  00  00  00  00  00  00  DF
4E  01  00  DF  47  01  00  DF  34  01  00  DF  36  05  01  2C
0C  00  00                                                  

Amount Conf Callback Command <<
91  01  F0  20  BF  02  1D  DF  30  01  01  DF  31  01  02  9F
02  06  00  00  00  00  01  00  9F  03  06  00  00  00  00  00
00  9C  01  00                              

Amount Conf Callback Response >> 
92  01  F0  04  DF  71  01  01

Hotlist/Log Callback Command <<
91  01  F0  3D  BF  03  3A  DF  1A  08  47  61  73  FF  FF  FF
FF  FF  DF  3D  10  2B  D9  50  22  25  9D  58  31  6C  34  C2
2D  75  45  A3  10  DF  16  08  A3  EC  41  60  43  21  C9  8E
DF  3F  0A  DD  DD  98  76  54  22  22  E0  00  0E  5F  34  01
01                                                          

Hotlist/Log Callback Response >> 
92  01  F0  00

Offline Response <<
90  E3  F0  82  01  A0  DF  3D  10  2B  D9  50  22  25  9D  58
31  6C  34  C2  2D  75  45  A3  10  DF  16  08  A3  EC  41  60
43  21  C9  8E  DF  3F  0A  DD  DD  98  76  54  22  22  E0  00
0E  DF  1A  0A  47  61  73  FF  FF  FF  FF  FF  FF  FF  DF  42
02  00  00  9F  27  01  40  9F  36  02  00  02  9F  26  08  CE
D8  D6  C7  04  15  81  69  9F  39  01  05  9F  41  04  00  00
00  01  5F  34  01  01  9F  10  07  06  01  0A  03  60  00  00
9F  37  04  B9  C2  98  98  95  05  00  00  00  00  00  9A  03
13  02  01  9F  21  03  12  00  00  9C  01  00  5F  2A  02  09
78  82  02  5C  00  9F  1A  02  02  80  9F  34  03  41  03  02
9F  33  03  E0  F8  C8  9F  35  01  22  9F  1E  08  31  32  33
34  35  36  37  38  84  07  A0  00  00  00  03  10  10  9F  09
02  00  8C  9B  02  E8  00  9F  06  07  A0  00  00  00  03  10
10  9F  12  0B  56  69  73  61  20  43  72  65  64  69  74  5F
25  03  10  01  01  5F  28  02  08  40  9F  45  02  DA  C0  DF
21  05  00  10  00  00  00  DF  22  05  D8  40  04  F8  00  DF
23  05  D8  40  00  A8  00  9F  0E  05  00  50  88  00  00  9F
0F  05  F0  20  04  98  00  9F  0D  05  F0  20  04  00  00  9F
40  05  F0  00  B0  A0  01  DF  64  20  90  00  00  00  BA  C1
08  00  40  40  FF  FF  00  21  90  90  01  00  00  00  D1  85
6F  00  00  00  00  00  00  00  00  00  9F  16  0F  20  20  20
20  20  20  20  20  20  20  20  20  20  20  20  DF  63  01  03
5F  20  08  53  44  41  5F  4E  4F  52  4D  5F  2D  08  65  6E
65  73  64  65  66  72  9F  08  02  00  8C  5F  36  01  02  DF
59  01  00  5F  30  02  02  01  8E  1C  00  00  00  00  00  00
00  00  41  03  42  03  5E  03  43  03  1F  00  00  00  00  00
00 00   00  00  00  00
```

**Continue a Transaction (Online Part)**

This section presents an overview of the typical tags for continuing the transaction after the host call.

If the “EMV Offline Transaction” results in “Go online“ then the host device must contact the Payment Host for a decision about the transaction. The Payment Host can return the following outcomes:

* Decline
* Approve
* Host not reachable

The Payment Host may send Authentication data that must be transferred to the ICC. The ICC will check Authentication data to assure authenticity of host response.

The Payment Host may also send issuer scripts, e.g. PIN (un)block, or any other proprietary commands. These must also be relayed to the ICC.

Two categories of issuer scripts:

* Critical scripts – to be sent to ICC before GENAC2
* Uncritical scripts – to be processed after GENAC2

You can use this function to perform online EMV transactions. Possible outcomes for Online Transactions:

* Decline
* Approve
* Host not reachable.

The host may send Authentication data to the ICC. The ICC will check the data to for authenticity of the host response.

The host may also send issuer scripts, e.g. PIN (un)block, or any other proprietary commands to the ICC.

Two categories of issuer scripts:

* Critical scripts – to be sent to ICC before GENAC2
* Uncritical scripts – to be processed after GENAC2.

The following diagram shows the flow for online transactions.

![18_emv_ct_Online_Transaction.png](.//18_emv_ct_Online_Transaction.png)Figure: Online Transaction![18_emv_ct_Online_Transaction.png](.//18_emv_ct_Online_Transaction.png)Figure: Online Transaction![18_emv_ct_Online_Transaction.png](.//18_emv_ct_Online_Transaction.png)Figure: Online Transaction![18_emv_ct_Online_Transaction.png](.//18_emv_ct_Online_Transaction.png)Figure: Online Transaction


_Serial Interface_

The command uses the following format:

**Table: Command**


| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x39  | x12  | x00  | x00  | Host Data   |


**Table: Response**


| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| txn data (txn result online)  | x90  | xXX  | Function executed, xx = response code   |


![18_emv_ct_Continue_Transaction_Online.png](.//18_emv_ct_Continue_Transaction_Online.png)Figure: Continue Transaction Online![18_emv_ct_Continue_Transaction_Online.png](.//18_emv_ct_Continue_Transaction_Online.png)Figure: Continue Transaction Online![18_emv_ct_Continue_Transaction_Online.png](.//18_emv_ct_Continue_Transaction_Online.png)Figure: Continue Transaction Online![18_emv_ct_Continue_Transaction_Online.png](.//18_emv_ct_Continue_Transaction_Online.png)Figure: Continue Transaction Online

The parameters inside the tag F0 are identical to the structure in the functional interface.

_Function Interface_

[EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

_Defaults and Example_

Use this section to complete a transaction after host communication. The parameters do not have any default values because they are either received by the host or they are not available. This includes the response code from the host, issuer application data, as well as critical and uncritical scripts. In contact mode this step performs issuer authentication, script processing and the 2nd GAC. The transaction is completed with this step.

**Table: EMV Transaction Online Command Data ([EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md))**
| Tag  | Size  | Mandatory  | Description   |
|  -------- | -------- | -------- | -------- |
| DF50  | 4  | -  | OnlineResult   |
| 8A  | 4  | -  | AuthResp   |
| DF52  | 4  | -  | LenAuth, AuthData   |
| DF53  | 4  | -  | LenScriptCrit, ScriptCritData   |
| DF54  | 4  | -  | LenScriptUnCrit, ScriptUnCritData   |
| 89  | 4  | -  | AuthorizationCode   |
| DF51  | 4  | -  | Result_referral   |
| DF55  | 4  | -  | AuthResp_Referral   |
| DF56  | 4  | -  | AuthResp_Wrong_PIN   |
| DF57  | 4  | -  | AuthResp_Positive   |
| 9F02  | 4  | -  | PreAuth_Amount   |
| DF36  | 4  | -  | TxnOptions   |
| DF37  | 4  | -  | TxnSteps   |


**Table: EMV Transaction Online Response Data ([EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md))**
| Tag  | Size  | Mandatory  | Description   |
|  -------- | -------- | -------- | -------- |
| DF42  | 4  | -  | Status Info   |
| 9F27  | 1  | -  | Cryptogram information data (CID)   |
| 9F36  | 2  | -  | Application transaction counter (ATC)   |
| 9F26  | 8  | -  | Application cryptogram   |
| 9F39  | 1  | -  | POS entry mode   |
| 9F41  | 4  | -  | Transaction Sequence Counter   |
| 5F34  | 1  | -  | PAN sequence number   |
| 9F10  | 9  | -  | Issuer Application Data   |
| 9F37  | 4  | -  | Unpredictable Number   |
| 95  | 5  | -  | Terminal Verification Results   |
| 9A  | 3  | -  | Transaction Date   |
| 9F21  | 3  | -  | Transaction Time   |
| 9C  | 1  | -  | Transaction Type   |
| 5F2A  | 2  | -  | Transaction Currency Code   |
| 82  | 2  | -  | Application Interchange Profile   |
| 9F1A  | 2  | -  | Terminal Country Code   |
| 9F34  | 3  | -  | CVM Results   |
| 9F33  | 3  | -  | Terminal Capabilities   |
| 9F35  | 1  | -  | Terminal Type   |
| 9F1E  | 8  | -  | Interface Device (IFD) serial number   |
| 84  | 17  | -  | 1 Byte Length. Dedicated File (DF) Name   |
| 9F09  | 2  | -  | Application Version Number   |
| DF08  | Var  | -  | Script Result Critical   |
| DF07  | Var  | -  | Script Result Uncritical   |
| 9B  | 2  | -  | Transaction Status Information   |
| 9F06  | 17  | -  | Application Identifier (AID)   |
| DF29  | Var  | -  | Additional Tags   |
| 9F53  | 1  | -  | Transaction Category Code   |
| 9F02  | 6  | -  | Amount [Auth](class_auth.md) Numeric   |
| 9F03  | 6  | -  | Amount [Auth](class_auth.md) Other   |
| 9F12  | 17  | -  | Application name, zero terminated   |
| 5F25  | 3  | -  | Application Effective Date   |
| 5F28  | 2  | -  | Issuer Country Code   |
| 9F45  | 2  | -  | Data Authentication Code, present if SDA card   |
| 9F4C  | 9  | -  | 1 Byte Length. optional: present if DDA/CDA card   |
| DF21  | 5  | -  | Terminal Action Code - Denial   |
| DF22  | 5  | -  | Terminal Action Code - Online   |
| DF23  | 5  | -  | Terminal Action Code - Default   |
| 9F0E  | 5  | -  | Issuer Action Code - Denial   |
| 9F0F  | 5  | -  | Issuer Action Code - Online   |
| 9F0D  | 5  | -  | Issuer Action Code - Default   |
| 9F40  | 5  | -  | Additional Terminal Capabilities   |
| 5A  | 10  | -  | PAN   |
| 57  | 19  | -  | Track 2 equivalent data   |
| DF62  | 15  | -  | Additional error data, filled if transaction is not successful   |
| DF64  | 32  | -  | Kernel Debug   |
| 9F16  | 15  | -  | Merchant Identifier   |
| DF63  | 1  | -  | Filled with index of display text ID if anything should be displayed   |
| 5F20  | 27  | -  | 1 Byte Length. Cardholder Name   |
| 5F2D  | 9  | -  | Language Preference (zero terminated)   |
| 9F08  | 2  | -  | ICC Application Version Number   |
| 5F36  | 1  | -  | Transaction Currency Exponent   |
| DF59  | 1  | -  | Number of wrong PIN entries (only in case of offline PIN)   |
| 5F30  | 2  | -  | Service code as defined in ISO/IEC 7813 for track 1 and track 2 format   |
| DF17  | 1  | -  | Fallback MID to be used.   |
| 8E  | 28  | -  | CVM list retrieved from ICC   |


**EMV Online Transaction Example**

_Online Transaction Command_

```cpp
Online Command >>
39  12  00  00  F0  1D  DF  50  01  01  8A  02  30  30  DF  52
0A  91  08  11  22  33  44  55  66  77  88  89  06  00  00  00
00  00  00                                              

Online Response <<
90  E3  F0  82  01  9D  DF  42  02  00  01  DF  3D  10  6B  81
68  B8  97  D5  75  C6  80  F1  66  BE  7B  79  4F  76  DF  16
08  7C  F3  28  E0  A2  CB  C8  5D  DF  3F  0A  DD  DD  98  76
54  22  22  E0  00  0F  DF  1A  0A  47  61  73  FF  FF  FF  FF
FF  FF  FF  9F  27  01  40  9F  36  02  00  02  9F  26  08  72
40  46  E0  19  6D  06  7B  9F  39  01  05  9F  41  04  00  00
00  01  5F  34  01  01  9F  10  07  06  01  0A  03  60  00  00
9F  37  04  C4  21  8D  F1  95  05  00  00  04  00  40  9A  03
13  02  01  9F  21  03  12  00  00  9C  01  00  5F  2A  02  09
78  82  02  5C  00  9F  1A  02  02  80  9F  34  03  42  03  00
9F  33  03  E0  F8  C8  9F  35  01  22  9F  1E  08  31  32  33
34  35  36  37  38  84  07  A0  00  00  00  03  10  10  9F  09
02  00  8C  9B  02  F8  00  9F  06  07  A0  00  00  00  03  10
10  9F  12  0A  4F  4E  4C  49  4E  45  5F  50  49  4E  5F  25
03  10  01  01  5F  28  02  08  40  9F  45  02  DA  C0  DF  21
05  00  10  00  00  00  DF  22  05  D8  40  04  F8  00  DF  23
05  D8  40  00  A8  00  9F  0E  05  00  50  88  00  00  9F  0F
05  F0  20  04  98  00  9F  0D  05  F0  20  04  00  00  9F  40
05  F0  00  B0  A0  01  DF  64  20  90  00  00  00  BB  C1  20
00  80  80  40  40  00  21  90  90  02  00  00  00  D1  85  6F
00  00  00  00  00  00  00  00  00  9F  16  0F  20  20  20  20
20  20  20  20  20  20  20  20  20  20  20  5F  20  0A  4F  4E
4C  49  4E  45  5F  50  49  4E  5F  2D  08  65  6E  65  73  64
65  66  72  9F  08  02  00  8C  5F  36  01  02  DF  59  01  00
5F  30  02  02  01  8E  1C  00  00  00  00  00  00  00  00  42
03  5E  03  1F  00  00  00  00  00  00  00  00  00  00  00  00
00  00  00                                                  
```

**Fetching Additional Tags**

Use this function access all ADK EMV Contact tags used during the transaction. The standard Transaction Flow already presents all needed tags for a standard EMV transaction in a readable way (without the need of tag crawling). This function allows you to read all tags from the various tag stores used. This is useful for application-specific tags, various environments, to complete access to all tags and allow a second possibility for implementation.

The requested tag is read from the kernels tag store. If the tag is not available there, the framework tag store is searched, and if not there, the configuration parameters are searched for the tag.

_Serial Interface_

The command uses the following format:

**Table: Command**


| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x39  | x14  | x00  | x00  | Tag(s) requested   |


**Table: Response**


| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| tag data  | x90  | xXX  | Function executed, xx = response code   |


![19_emv_ct_Fetch_an_EMV_tag.png](.//19_emv_ct_Fetch_an_EMV_tag.png)Figure: Fetch an EMV tag![19_emv_ct_Fetch_an_EMV_tag.png](.//19_emv_ct_Fetch_an_EMV_tag.png)Figure: Fetch an EMV tag![19_emv_ct_Fetch_an_EMV_tag.png](.//19_emv_ct_Fetch_an_EMV_tag.png)Figure: Fetch an EMV tag![19_emv_ct_Fetch_an_EMV_tag.png](.//19_emv_ct_Fetch_an_EMV_tag.png)Figure: Fetch an EMV tag


The parameters inside the tag F0 are identical to the structure in the functional interface.


_Function Interface_

[EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

_Defaults and Example_

Use this section to fetch transaction information once the transaction is complete. There are no defaults, but you can fetch a single tag and use it with several calls for each tag or you can you see it by providing a tag list (DOL) and fetch several tags with one call.

This is an additional function to fetch additional data or already presented data in a different way.

**Send EMV PIN to Smart Card**

Use this command to send a PIN (stored in the vault) to the ICC (see also [PIN Handling]). This command supports both plaintext PIN and Enciphered Offline PIN. The functions need to be called after customer PIN entry. The verification result will be forwarded to the application. The encryption, forwarding and results handling are processed internally and can’t be altered.

_Serial Interface_

The command uses the following format:

**Table: Command**


| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x41  | x05  | 00  | x00  | &mdash; |


**Table: Response**


| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| Data  | x90  | xXX  | Function executed, xx = response code   |


![20_emv_ct_Send_Offline_PIN_Command.png](.//20_emv_ct_Send_Offline_PIN_Command.png)Figure: Send Offline PIN Command![20_emv_ct_Send_Offline_PIN_Command.png](.//20_emv_ct_Send_Offline_PIN_Command.png)Figure: Send Offline PIN Command![20_emv_ct_Send_Offline_PIN_Command.png](.//20_emv_ct_Send_Offline_PIN_Command.png)Figure: Send Offline PIN Command![20_emv_ct_Send_Offline_PIN_Command.png](.//20_emv_ct_Send_Offline_PIN_Command.png)Figure: Send Offline PIN Command


The parameters inside the tag F0 are identical to the structure in the functional interface.


_Function Interface_

[EMV_CT_Send_PIN_Offline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline)

The parameters are identical to the parameters inside tag F0 in the serial interface.


### Evaluating Contact Transaction Results

The following status codes are returned by the EMV command interface:

**Table: EMV Command Interface Status Codes**
| Value  | Definition  | Comment   |
|  -------- | -------- | -------- |
| 0x00  | [EMV_ADK_OK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-ok) | Function successful, no error.   |
| 0xE0  | [EMV_ADK_NOAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-noapp) | No common application card / terminal.   |
| 0xE2  | [EMV_ADK_ARQC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-arqc) | Transaction must be performed online.   |
| 0xE3  | [EMV_ADK_TC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tc) | Transaction performed (offline / online).   |
| 0xE4  | [EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac) | Transaction cancellation.   |
| 0xE5  | [EMV_ADK_AAR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aar) | Transaction cancellation (former “card referral”).   |
| 0xE6  | [EMV_ADK_PARAM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-param) | Parameter error.   |
| 0xE7  | [EMV_ADK_CARDERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-carderr) | Proprietary card error.   |
| 0xE8  | [EMV_ADK_BADAPP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-badapp) | Repeat `EMV_Select` function call-up because selected application on the proprietary card is erroneous.   |
| 0xE9  | [EMV_ADK_CVM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-cvm) | User abort during PIN input (cancel button, timeout, card removed).   |
| 0xEA  | [EMV_ADK_ABORT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-abort) | Current transaction must be aborted.   |
| 0xEB  | [EMV_ADK_CARD_BLOCKED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-card-blocked) | Blocked card, regional dependent if fallback to magstripe should be done   |
| 0xEC  | [EMV_ADK_CARDERR_FORMAT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-carderr-format) | Card error e.g. erroneous TLV coding, incorrect data. No transaction cancellation.   |
| 0xED  | [EMV_ADK_INTERNAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-internal) | Erroneous communication to PINPad, internal error.   |
| 0xEE  | [EMV_ADK_ONLINE_PIN_RETRY](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-online-pin-retry) | Online PIN re-entered (PIN check).   |
| 0xEF  | [EMV_ADK_SAVE_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-save-error) | Required TLV data object is missing. (has not been entered by the application). Implementation error, no process control information (only used by the config functions).   |
| 0xF0  | [EMV_ADK_APP_BLOCKED](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-blocked) | Application blocked: AID evaluation at fallback, no global fallback because it is not allowed for this special blocked application.   |
| 0xF1  | [EMV_ADK_READ_ERROR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-read-error) | Error while reading EMV configuration.   |
| 0xF2  | [EMV_ADK_ERR_HSM](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-err-hsm) | Erroneous communication to PINPad, internal error   |
| 0xF3  | [EMV_ADK_TLV_BUILD_ERR](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-tlv-build-err) | Error in TLV data object = internal error.   |
| 0xF4  | [EMV_ADK_FALLBACK](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-fallback) | Fallback to magstripe must be performed.   |
| 0xF5  | [EMV_ADK_ONL_PIN_REPEAT](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-onl-pin-repeat) | Wrong Online-PIN, repeat transaction (reduced) beginning with `[EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction)`.   |
| 0xF6  | [EMV_ADK_MAND_ELEM_MISSING](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-mand-elem-missing) | Mandatory (TLV) element missing (EMV- configuration).   |
| 0xF7  | [EMV_ADK_INVALID_TERM_CAP](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-invalid-term-cap) | Invalid terminal capabilities (EMV- configuration).   |
| 0xF8  | [EMV_ADK_REFERRAL](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-referral) | A referral of the application decides if the TRX is approved or not.   |


The following status codes are returned by the EMV command interface for the Re-entry feature:

**Table: Re-entry Status Codes**
| Value  | Definition  | Comment   |
|  -------- | -------- | -------- |
| 0xA0  | [EMV_ADK_APP_REQ_START](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-start) | Application requested return start reserved codes.   |
| 0xA1  | [EMV_ADK_APP_REQ_CANDIDATE](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-candidate) | Application requested return application selection.   |
| 0xA2  | [EMV_ADK_APP_REQ_READREC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-readrec) | Application requested return read records.   |
| 0xA3  | [EMV_ADK_APP_REQ_DATAAUTH](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-dataauth) | Application requested return data authentication.   |
| 0xA4  | [EMV_ADK_APP_REQ_ONL_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-onl-pin) | Application requested return for online PIN entry.   |
| 0xA5  | [EMV_ADK_APP_REQ_OFL_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-ofl-pin) | Application requested return for offline PIN entry.   |
| 0xA6  | [EMV_ADK_APP_REQ_PLAIN_PIN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-plain-pin) | Application requested return for plaintext PIN entry.   |
| 0xA7  | [EMV_ADK_APP_REQ_CVM_END](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-cvm-end) | Application requested return cardholder verification.   |
| 0xA8  | [EMV_ADK_APP_REQ_RISK_MAN](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-risk-man) | Application requested return risk management.   |
| 0xAF  | [EMV_ADK_APP_REQ_END](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-app-req-end) | Application requested return end of reserved codes.   |



### Transaction Callback Command

To learn about the different operation modes callback/reentrance see [Callback and Reentrance Mode].

Transaction callbacks can be activated to provide intermediate transaction results and update transaction parameters. 

 All callbacks are handled in ONE function. 

 It is called with TLV data enclosed in a constructed tag which identifies the callback type.

_Serial Interface_



* The command uses the following format:

**Table: Request**


| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| Callback data  | x91  | xXX  | Callback Request, data includes info about the callback   |




* **SW2 = 0x01**: EMV Transaction Request
* **SW2 = 0x02**: External card reader request (future use)
* **SW2 = 0xFF**: Trace Data follows (see [Traces])

**Table: Response**


| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x92  | xXX  | not applicable  | not applicable  | Data   |




* **INS = SW2**: From the request to indicate the response belongs to the request

![23_emv_ct_Callback_Flow.png](.//23_emv_ct_Callback_Flow.png)Figure: Callback Flow![23_emv_ct_Callback_Flow.png](.//23_emv_ct_Callback_Flow.png)Figure: Callback Flow![23_emv_ct_Callback_Flow.png](.//23_emv_ct_Callback_Flow.png)Figure: Callback Flow![23_emv_ct_Callback_Flow.png](.//23_emv_ct_Callback_Flow.png)Figure: Callback Flow


The parameters inside the tag F0 are identical to the structure in the function interface (see below).

_Function Interface_

Application's callback is handed over as a function pointer to [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework). 

 It is called with a TLV stream as input. 

 This is enclosed in a constructed tag identifying the type of callback.

_Callback Types_

The callback types can be activated separately. 

 The contructed tags used as identifiers can be seen in following table:


| Constructed tag  | Description   |
|  -------- | -------- |
| [TAG_BF01_CBK_MERCHINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf01-cbk-merchinfo) | Progress information for the merchant   |
| [TAG_BF02_CBK_AMOUNTCONF](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf02-cbk-amountconf) | Request to let the cardholder confirm the amount   |
| [TAG_BF03_CBK_LOG_HOTLIST](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf03-cbk-log-hotlist) | EMVCo features "transaction log" and "hotlist" (blacklist, exception list)   |
| [TAG_BF04_CBK_REDUCE_CAND](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf04-cbk-reduce-cand) | Application candidate list created, calling application can modify it   |
| [TAG_BF05_CBK_DOM_APPS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf05-cbk-dom-apps) | Domestic app detected during application selection   |
| [TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks) | Local checks after reading the PAN (and other card dat)   |
| [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc) | DCC (Dynamic Currency Conversion, see [Dynamic Currency Change])   |
| [TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin) | Request to let the cardholder input the PIN   |
| [TAG_BF09_CBK_CARDHOLDERINFO](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf09-cbk-cardholderinfo) | Information to be shown to the cardholder   |
| [TAG_BF7F_CBK_TRACE](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf7f-cbk-trace) | Traces (see [Traces])   |


For a detailed description refer to [Constructed tags for callback functions](group___c_b_c_k___f_c_t___t_a_g_s.md).


### Transparent ICC Commands

Use the following to implement Transparent ICC Commands:

* [Detecting a Smart Card]
* [Activating a Smart Card]
* [ISO Command to a Smart Card]
* [Deactivate a Smart Card]

**Detecting a Smart Card**

Use the following information to implement the smart card detection function.

_Serial Interface_

The command uses the following format:

**Table: Command**
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x41  | x01  | x00  | x00  | Data   |


**Table: Response**
| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| None  | x90  | xXX  | Function executed, xx = response code   |


![24_emv_ct_Detect_Smart_Card.png](.//24_emv_ct_Detect_Smart_Card.png)Figure: Detect Smart Card![24_emv_ct_Detect_Smart_Card.png](.//24_emv_ct_Detect_Smart_Card.png)Figure: Detect Smart Card![24_emv_ct_Detect_Smart_Card.png](.//24_emv_ct_Detect_Smart_Card.png)Figure: Detect Smart Card![24_emv_ct_Detect_Smart_Card.png](.//24_emv_ct_Detect_Smart_Card.png)Figure: Detect Smart Card


The parameters inside the tag F0 are identical to the structure in the functional interface.

_Function Interface_

[EMV_CT_SmartDetect()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

**Activating a Smart Card**

Use the following information to implement the smart card activation function.

_Serial Interface_

The command uses the following format:

**Table: Command**
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x41  | x02  | x00  | x00  | Data   |


**Table: Response**
| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| Data  | x90  | xXX  | Function executed, xx = response code   |


The following illustration shows the data flow for the function.

![25_emv_ct_Activate_Smart_Card.png](.//25_emv_ct_Activate_Smart_Card.png)Figure: Activate Smart Card![25_emv_ct_Activate_Smart_Card.png](.//25_emv_ct_Activate_Smart_Card.png)Figure: Activate Smart Card![25_emv_ct_Activate_Smart_Card.png](.//25_emv_ct_Activate_Smart_Card.png)Figure: Activate Smart Card![25_emv_ct_Activate_Smart_Card.png](.//25_emv_ct_Activate_Smart_Card.png)Figure: Activate Smart Card


The parameters inside the tag F0 are identical to the structure in the functional interface.

_Function Interface_

[EMV_CT_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

**Send an ISO Command to a Smart Card**

Use the following information to implement the function.

_Serial Interface_

The command uses the following format:

**Table: Command**
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x41  | x03  | x00  | x00  | Data   |


**Table: Response**
| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| Data  | x90  | xXX  | Function executed, xx = response code   |


![26_emv_ct_ISO_Smart_Card_Command.png](.//26_emv_ct_ISO_Smart_Card_Command.png)Figure: ISO Smart Card Command![26_emv_ct_ISO_Smart_Card_Command.png](.//26_emv_ct_ISO_Smart_Card_Command.png)Figure: ISO Smart Card Command![26_emv_ct_ISO_Smart_Card_Command.png](.//26_emv_ct_ISO_Smart_Card_Command.png)Figure: ISO Smart Card Command![26_emv_ct_ISO_Smart_Card_Command.png](.//26_emv_ct_ISO_Smart_Card_Command.png)Figure: ISO Smart Card Command


The parameters inside the tag F0 are identical to the structure in the functional interface.

_Function Interface_

[EMV_CT_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.

**Deactivate a Smart Card**

Use the following information to implement the smart card deactivation function.

_Serial Interface_

The command uses the following format:

**Table: Command**
| CLA  | INS  | P1  | P2  | Data   |
|  -------- | -------- | -------- | -------- | -------- |
| x41  | x01  | x04  | x00  | Data   |


**Table: Response**
| Data  | SW1  | SW2  | Comment   |
|  -------- | -------- | -------- | -------- |
| none  | x90  | xXX  | Function executed, xx = response code   |


The following illustration shows the Deactivate Smart Card function.

![27_emv_ct_Deactivate_Smart_Card.png](.//27_emv_ct_Deactivate_Smart_Card.png)Figure: Deactivate Smart Card![27_emv_ct_Deactivate_Smart_Card.png](.//27_emv_ct_Deactivate_Smart_Card.png)Figure: Deactivate Smart Card![27_emv_ct_Deactivate_Smart_Card.png](.//27_emv_ct_Deactivate_Smart_Card.png)Figure: Deactivate Smart Card![27_emv_ct_Deactivate_Smart_Card.png](.//27_emv_ct_Deactivate_Smart_Card.png)Figure: Deactivate Smart Card


The parameters inside the tag F0 are identical to the structure in the functional interface.

_Function Interface_

[EMV_CT_SmartPowerOff()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpoweroff)

The members of the structures are identical to the parameters inside tag F0 in the serial interface.


## Dynamic Currency Change

Depending on card parameters (e.g. PAN, customer selection ,...) the calling application needs to execute the running transaction in a currency different to the one configured in [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata) respectively [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata).

To enable DCC feature [DCC_CHECK](group___a_p_p___f_l_o_w___c_a_p_s.md#define-dcc-check) must be activated in [EMV_CT_APPLIDATA_STRUCT::App_FlowCap](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-app-flowcap).

The following variants are supported:


### Decision at callback for local checks after READ RECORD

Decision about currency change is taken in callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks).

** Schematic flow diagram (with currency change): **
![31_emv_ct_DCC_DecisionAtLocalCheck.png](.//31_emv_ct_DCC_DecisionAtLocalCheck.png)

** Detailed description: **


* Amount confirmation must be done after DCC decision. 

 Configure [EMV_CT_CONF_AMOUNT_PIN](group___a_p_p___f_l_o_w___c_a_p_s.md#define-emv-ct-conf-amount-pin) or [CONFIRM_AMOUNT_AFTER_CVM](group___c_o_n_f_i_r_m___a_m_o_u_n_t___w_h_e_n.md#define-confirm-amount-after-cvm). 
* Transaction is going the normal way until [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks). 
* Calling application determines, if DCC has to be done for this transaction. 

 This check is project dependent. 

 For example [TAG_5A_APP_PAN](group___e_m_v_c_o___t_a_g_s.md#define-tag-5a-app-pan) and/or [TAG_9F42_APP_CURRENCY_CODE](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f42-app-currency-code) may be checked. 

 And (if DCC is allowed for the used card) the cardholder is asked for the currency to be used. 
* In case ** no DCC ** has to be done, no special action is needed. 

 Subsequent callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc) will be called and has to be answered with [MODE_DCC_NO_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-no-trx-continue). 

 Transaction will be completed with configured terminal currency. 
* In case ** DCC has to be done ** calling application has to check input parameter [TAG_DF5B_DCC_PROHIBIT](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df5b-dcc-prohibit). 
* In case of `FALSE` (=0): no special action needed at this step. 

 Subsequent callback [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc) will be invoked. 

 Calling application has to fill in new currency code ([TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency)) and exponent ([TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp)). 

 Amount ([TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth)), floor limit ([TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit)) and threshold value ([TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)) 

 has to be converted and also given back. 

 Return value ([TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check)) must be [MODE_DCC_YES_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-yes-trx-continue). 

 Transaction will be completed in the new currency. 
* In case of `TRUE:` Calling application has to set [TAG_DF76_CBK_MANIPUL_TRX](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df76-cbk-manipul-trx) to [EMV_ADK_AAC](group___a_d_k___r_e_t___c_o_d_e.md#define-emv-adk-aac). 
* Running transaction will be terminated. 
* Calling application has to start a new transaction with [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction). 

 As [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount) the converted amount has to be filled in. 
[EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans) and [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans) must be set according to the new currency to be used. 
* Local check callback ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF06_CBK_LOCAL_CHECKS](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf06-cbk-local-checks)) will be invoked as above. 

 No special action needed for calling application. 

 Just mirror the parameters. 
* DCC callback ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) will be invoked. 

 Calling application has to give back converted values for floor limit ([TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit)) and threshold ([TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)). 

 Return value ([TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check)) must be [MODE_DCC_YES_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-yes-trx-continue). 

 Amount ([TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth)) and currency ([TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency), [TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp)) must not be mirrored unchanged at this step! 

 Otherwise transaction will abort. 

 Transaction will be completed in the new currency.


### Decision at online connection

Transaction is handled online. Host decides if dynamic currency change is allowed. If yes: Transaction is terminated. The cardholder is asked to select his favourite currency. Transaction is restarted with this currency.

** Schematic flow diagram (with currency change): **
![32_emv_ct_DCC_DecisionAtOnlineConnection.png](.//32_emv_ct_DCC_DecisionAtOnlineConnection.png)

** Detailed description: **


* Including the first cryptogram the transaction is going like usual. 
* In case of going online the host decides if DCC is allowed. 
* If no: The transaction continues as usually. 
* If yes: Host answers with protocol specific DCC information. 
* Calling application has to call [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) with any [EMV_CT_HOST_STRUCT::AuthResp](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md#variable-authresp) indicating "decline" 

 (e.g. "88" for ZKA Germany). 
* Running transaction will be terminated. 
* If project requires: Cardholder is asked for the currency to be used. 
* Calling application has to start a new transaction with [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction). 
_ In case of currency change: _ As [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount) the converted amount has to be filled in. 
[EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans) and [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans) must be set according to the new currency to be used. 
_ In case of NO currency change: _ Fill [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount) with the original value. 
* DCC callback ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)): 
_ In case of changed currency: _ This function will be called unconditionally. 

 Calling application has to give back converted values for floor limit ([TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit)) and threshold ([TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)). 

 Return value ([TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check)) must be [MODE_DCC_YES_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-yes-trx-continue). 

 Amount ([TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth)) and currency ([TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency), [TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp)) must not be changed at this step! 

 Otherwise transaction will abort. 
_ In case of unchanged currency: _ This function may be called, depending on other transaction conditions. 

 All values shall be mirrored unchanged and return value ([TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check)) must be [MODE_DCC_NO_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-no-trx-continue). 
* Transaction will be completed in the chosen currency.


### Decision after break at DCC callback

Transaction is aborted in case DCC is allowed. Host contact and cardholder interaction can be done outside of any callbacks. Transaction is restarted with new currency.

** Schematic flow diagram (with currency change): **
![33_emv_ct_DCC_DecisionAfterBreakDCCCallback.png](.//33_emv_ct_DCC_DecisionAfterBreakDCCCallback.png)



* Transaction is going the normal way until DCC callback ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)). 
* Calling application determines, if DCC is possible for this transaction (e.g. check PAN). 
* _ In case NO: _ return value ([TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check)) must be [MODE_DCC_NO_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-no-trx-continue). 

 Transaction will be completed without change of the currency. 
* _ In case YES: _ return [MODE_DCC_YES_TRX_ABORT](group___d_c_c___m_o_d_e.md#define-mode-dcc-yes-trx-abort). 

 TransactionFlow will abort the transaction (no display to cardholder or cashier). 

 Calling application has the possibility to contact host for DCC decision. 

 And (if host allows DCC) ask the cardholder for the currency to be used. 
* Calling application has to start a new transaction with [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction). 

 As [EMV_CT_SELECT_STRUCT::TransType](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md#variable-transtype) value [EMV_ADK_TRAN_TYPE_REPEAT_AMOUNT_CHANGE](group___t_r_a_n_s___t_y_p_e_s.md#define-emv-adk-tran-type-repeat-amount-change) has to be used. 
_ In case of currency change: _ As [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount) the converted amount has to be filled in. 
[EMV_CT_PAYMENT_STRUCT::CurrencyTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-currencytrans) and [EMV_CT_PAYMENT_STRUCT::ExpTrans](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-exptrans) must be set according to the new currency to be used. 
_ In case of NO currency change: _ Fill [EMV_CT_PAYMENT_STRUCT::Amount](struct_e_m_v___c_t___p_a_y_m_e_n_t___s_t_r_u_c_t.md#variable-amount) with the original value. 
* DCC callback ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF07_CBK_DCC](adk__emv__contactless__programmers__guide_8dox.md#define-tag-bf07-cbk-dcc)) 
_ In case of changed currency: _ This function will be called unconditionally. 

 Calling application has to give back converted values for floor limit ([TAG_9F1B_TRM_FLOOR_LIMIT](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f1b-trm-floor-limit)) and threshold ([TAG_DF24_THRESHHOLD](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df24-threshhold)). 

 Return value ([TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check)) must be [MODE_DCC_YES_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-yes-trx-continue). 

 Amount ([TAG_9F02_NUM_AMOUNT_AUTH](group___e_m_v_c_o___t_a_g_s.md#define-tag-9f02-num-amount-auth)) and currency ([TAG_5F2A_TRANS_CURRENCY](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f2a-trans-currency), [TAG_5F36_TRANS_CURRENCY_EXP](group___e_m_v_c_o___t_a_g_s.md#define-tag-5f36-trans-currency-exp)) must not be changed at this step! 

 Otherwise transaction will abort. 
_ In case of unchanged currency: _ This function may be called, depending on other transaction conditions. 

 All values shall be mirrored unchanged and return value ([TAG_DF7D_CBK_DCC_CHECK](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df7d-cbk-dcc-check)) must be [MODE_DCC_NO_TRX_CONTINUE](group___d_c_c___m_o_d_e.md#define-mode-dcc-no-trx-continue). 
* Transaction will be completed in the chosen currency.


## PIN Handling

A transaction may require cardholder PIN entry. In this case EMV ADK will call the appropiate ** callback function ** ([EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin)).

Input from EMV ADK (encapsulated in `TAG_BF08_CBK_PIN`):

* PIN Type (DF79)
* Bypass Info (DF41)
* Random number (9F37)
* Public Key Modulus (DF7A)
* Public key Exponent (DF7B)
* Amount (9F02) – only if the amount confirmation is processed together with PIN entry
* Cashback Amount (9F03) – only if the amount confirmation is processed together with PIN entry

Output to EMV ADK:

* PIN Outcome (DF79)
* Verify Result SW12 (DF6F)

The application must implement this callback function. Three PIN methods are defined by EMV: offline plaintext, offline enciphered and online enciphered PIN. The application has to use the ** Vault ** to realize PIN input.

How application shall implement the callback function [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt) with [TAG_BF08_CBK_PIN](group___c_b_c_k___f_c_t___t_a_g_s.md#define-tag-bf08-cbk-pin): 

* Check which _ method of PIN _ is required: [TAG_DF79_CBK_PIN_INFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df79-cbk-pin-info)

 The value is one of [Input params for PIN entry](group___a_d_k___p_i_n___i_n_p_u_t.md)



* Check if PIN bypass shall be allowed: [TAG_DF41_PIN_BYPASS](group___v_e_r_i___p_r_i_m___t_a_g_s.md#define-tag-df41-pin-bypass)



* _ Version 1: Usage of GUI ADK _

 Realize PIN input into vault with the appropriate GUI ADK functions. 
_ Version 2: without GUI ADK _

 Realize PIN input into vault with the appropriate OS functions.



* Evaluate the PIN entry result (PIN outcome can be success, timeout, bypass, cancel)



* If success and it is `EMV_PIN:`

 Call [EMV_CT_Send_PIN_Offline](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline) to forward the entered offline PIN to the ICC for verification.



* If success and it is `POST_PROC_PIN:`

 Use your local host encryption routines and scripts to handle the PIN and forward it once you receive an ARQC at the end of the transaction.



* If no success, inform the EMV ADK about the outcome ([TAG_DF79_CBK_PIN_INFO](group___t_l_v___c_b_c_k___t_l_v.md#define-tag-df79-cbk-pin-info)): 
[EMV_CT_PIN_INPUT_OKAY](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-okay), [EMV_CT_PIN_INPUT_COMM_ERR](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-comm-err), [EMV_CT_PIN_INPUT_ABORT](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-abort), [EMV_CT_PIN_INPUT_BYPASS](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-bypass), [EMV_CT_PIN_INPUT_TIMEOUT](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-timeout), [EMV_CT_PIN_INPUT_OTHER_ERR](group___a_d_k___p_i_n___r_e_t_u_r_n.md#define-emv-ct-pin-input-other-err)


### Schematic flow diagram

![34_emv_ct_TLV_CallbackPin.png](.//34_emv_ct_TLV_CallbackPin.png)callback flow


## Transaction Status Information

At the end of the transaction, the status information provides the results, including Online PIN entry. 

```cpp
#define     EMV_ADK_SI_ONLINE_PIN_REQUIRED   0x0001u
    Online PIN processing to be done. 
#define     EMV_ADK_SI_SIGNATURE_REQUIRED   0x0002u
    Signature verification required. 
#define     EMV_ADK_SI_FORCED_ACCEPTANCE   0x0004u
    Forced acceptance. 
#define     EMV_ADK_SI_USER_DEFINED_CVM   0x0008u
    user defined CVM 
#define     EMV_ADK_SI_CUSTOMER_CARDWITHDRAWL   0x0080u
    Result is EMV_ADK_ABORT because customer has pulled out the card. 
#define     EMV_ADK_SI_GICC_TIPPABLE   0x0100u
    A tip transaction may follow this payment. 
#define     EMV_ADK_SI_PIN_FAILURE   0x0400u
    Last entered offline PIN was wrong. 
```


## Different Languages

Language selection is usually up the application, however, if not selected by the application, the EMV-ADK will run the selection during processing.

Explanation:

You can configure up to 20 languages in terminal configuration using the definitions in the header file:



```
/// @defgroup TF_LANGUAGES Known languages
/// @ingroup DEF_CONF_TEXT
/// @brief see ::EMV_ADK_TXT_TYPE
/// @}
#define EMV_ADK_LANG_NO_LANG            0x00 ///< internal use only
#define EMV_ADK_LANG_ENGLISH            0x01 ///< English
#define EMV_ADK_LANG_GERMAN             0x02 ///< German
#define EMV_ADK_LANG_FRENCH             0x03 ///< French
#define EMV_ADK_LANG_SPANISH            0x04 ///< Spanish
….
```

However, this is to fulfill the EMVCo specs. In most cases it is expected that the application will use the config option to pre-select a language at the beginning of a transaction. This can be configured in the transaction data if the application needs to support more than one language.

There are two common ways to select the language:

* a For unattended terminals, it is usually the customer who selects the language first, before starting a transaction. Once this selection is complete, the EMVCo language selection does not take place any more (pre-selected terminal language from customer).
* b For attended machines, the customer usually selects the language after the AID is known. Therefore the results of the `StartTransaction` includes the tag 5F2D and the application can handle this on its own (GUI is part of the application not of the EMV framework) and forward the preselected language at the beginning of `ContinueOffline` function, using the same parameter as in Step [a].

If either step is not performed, the framework will use the provided language list (as mentioned above) and compare it to the tag 5F2D internally to “fix” the language according to EMVCo needs.

However, there will be never a display from the framework, so it is just used for the subsequent callbacks (amount confirmation, PIN entry) to tell the application the currently selected language, which may be used by the application in customer displays.


## Display Messages

The following codes present additional information about display messages. This is optional and the application may display messages based on this information but may use return codes and debug data as well for the command.

**Table: Display Messages**


| Value  | Definition  | Comment   |
|  -------- | -------- | -------- |
| 0x00  | `EMV_TXT_NO_TXT` | No text (internal use)   |
| 0x01  | `EMV_TXT_REFUND_CONF_AMOUNT` | Refund EUR XXXXXX, XX PLEASE CONFIRM.   |
| 0x02  | `EMV_TXT_AMOUNT` | AMOUNT EUR XXXXXX, XX PLEASE CONFIRM   |
| 0x03  | `EMV_TXT_APPROVED` | APPROVED   |
| 0xA3  | `EMV_TXT_AUTH_APPROVED` | Like #EMV_TXT_APPROVED, but for reservation   |
| 0x04  | `EMV_TXT_DECLINED` | DECLINED   |
| 0xA4  | `EMV_TXT_AUTH_DECLINED` | Like #EMV_TXT_DECLINED, but for reservation   |
| 0x05  | `EMV_TXT_NOT_ACCEPTED` | NOT ACCEPTED   |
| 0x06  | `EMV_TXT_CARD_ERROR` | CARD ERROR   |
| 0x07  | `EMV_TXT_PROCESSING_ERROR` | PROCESSING ERROR   |
| 0x08  | `EMV_TXT_CARD_READ_OK` | Card read ok   |
| 0x09  | `EMV_TXT_AUTHORIZING` | Authorizing, online txn CTLS   |
| 0x10  | `EMV_TXT_REMOVE_CARD` | REMOVE CARD   |
| 0x11  | `EMV_TXT_USE_CHIP_READER` | -   |
| 0x12  | `EMV_TXT_USE_MAG_STRIPE` | -   |
| 0x13  | `EMV_TXT_VOICEAUT` | Voice authorization in case of communication problem   |



## Card Deactivation

The card is deactivated inside the ADK if:

* User aborts during Application Selection
* On internal errors
* If an AAC was requested explicitly
* If an AAC was delivered by card
* If a TC was the outcome of a transaction
* On any fallback decision or termination after GPO
* Any card read transaction after application selection process
* Always after Online processing
* On critical errors during apps selection process.
* See also chapter [Process Termination]

The card is NOT deactivated when no common apps in the candidate list allow further processing in the application without resetting the card.


## Additional Tags

This chapter provides information how additional tags are handled using the EMV kernels and the ADK.


### Additional tags provided by the terminal

The EMV kernel allows to define an additional tag store for each AID. This concept also reflects in the ADK interface. For additional tags there is a special configuration field in the AID configuration interface, resulting in a separate XML tag for each AID in the XML configuration file. You can configure AIDs using the EMV_CT_SetAppliData function (for details refer to the ADK documentation). The parameter for additional terminal tags is: 

 unsigned char Additional_Tags_TRM [EMV_ADK_ADD_TAG_SIZE] 

 Tag + Length + Value: Additional terminal data for special applications 

 Example: MasterCard 9F53, validity bit EMV_CT_INPUT_APL_ADD_TAGS 

 Tag, Struct, XML Reference: 

 TLV tag TAG_DF29_ADD_TAGS, 

 Additional_Tags_TRM in [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_TRM](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-trm), 

 XML Tag: XML_TAG_APPLIDATA_ADDITIONAL_TAGS_TRM.

You need to provide probable additional terminal tags for each AID when you configure the system. If you know the value already at that time (e.g. it will not change per transaction) you can provide the final value for this tag already. Otherwise simply configure a valuable default here and update the value at the time of transaction.

For updating tags during a transaction you simply start the transaction as usual. Once the application is selected (final select performed) you can update the tags for the selected AID as needed. Once [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction) is completed you can use [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata) with option [EMV_ADK_TEMP_UPDATE](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-temp-update) or [EMV_CT_updateTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags) to update the tags according to your needs dynamically. In this way you can guarantee that in any DOL (PDOL, DDOL, CDOL, …) the correct values are provided to the ICC.

Example: ` {unsigned char additionalTagsTerminal[] = {0x9F,0x53,0x01,0x52}; `


### Additional tags provided by the ICC

Data sent by the card during SELECT, READ RECORDS and GENERATE AC operations is either stored by the L2 kernel or automatically stored by the EMV ADK automatic tag store. In both cases [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) with option [EMV_ADK_FETCHTAGS_KERNEL](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-kernel) offers access to these tags, no matter which part stored the data.

Previous approaches to use [EMV_CT_APPLIDATA_STRUCT::Additional_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-additional-tags-crd) or [EMV_CT_INIT_OPT_L1_DUMP](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-l1-dump) are deprecated or no more supported.


### Additional tags read with GET DATA

[EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) with option [EMV_ADK_FETCHTAGS_GET_DATA](group___f_e_t_c_h___t_a_g_s___o_p_t_i_o_n_s.md#define-emv-adk-fetchtags-get-data) will cause a GET DATA command sent to ICC.


## Handling of special tags


### Mandatory ICC tags

There are domestic specifications defining mandatory ICC tags. 

 In case the ICC does not provide them the transaction must be declined. 

 To realize this requirement one has to set these tags in [EMV_CT_APPLIDATA_STRUCT::Mandatory_Tags_CRD](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-mandatory-tags-crd). 

 EMV ADK will decline the transaction if any of these tags is not provided by the ICC.


## Priority applications

An EMV chipcard may include _ several applications (AIDs) _. 

 In case the terminal supports more than one of them, the _ cardholder has to select _ one for the transaction. 

 In many countries the cards are equipped with one (or more) national application(s) and one (or more) international. 

 Example for Germany: national = girocard, international = maestro 


 In these countries it's usual to have ** rules ** in place like this: 
` if card_supports_national_issuer then use_national_issuer 

 else use_international_issuer `

To realize this requirement the EMV Framework supports so called "priority applications". 

** Example for configuration: **
_ Requirement: _ girocard (AID A0 00 00 00 03 59 10 10 02 80 01) shall take priority over maestro (AID A0 00 00 00 04 30 60). 
_ Configuration: _

* Configure girocard as usual (with [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata)). 
* Configure maestro with desired parameters. As usually use [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata). 

 In [EMV_CT_APPLIDATA_STRUCT::xAIDPrio](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xaidprio) fill in girocard AID (A0 00 00 00 03 59 10 10 02 80 01).

_ Transaction behavior: _

 In case a card is inserted, which supports both girocard and maestro, the transaction is (automatically) done with girocard (_without cardholder selection_).


## Virtual terminal mapping table

There may be the need to use different parameter sets per transaction type or currency. Typical use case is setting the floor limit to zero for refund. And of course you have to set different floor limit for different currency. This requirement can be realized by the "Virtual terminal mapping table". Approach lets you to have several parameter sets for the same application.

It goes this way:

1. ** Create a mapping table **

 for linkage between
    * virtual terminal ID 

 and
    * transaction type respectively currency

For each desired map entry call [EMV_CT_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal). Pre-condition: [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) for any Virtual Terminal has been called before. 

 Don't use Virtual Terminal value zero as this is used as "default": It's used in case the current transaction does not match any table entry.
2. ** Set parameters for the virtual terminals **

 For virtual terminal 0 and every entry in above created table you have to
    * Set to virtual terminal: [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework), 

 set `options` accordingly (e.g. [EMV_CT_INIT_VIRT_1](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-1), [EMV_CT_INIT_VIRT_2](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-2), or ...) 

 For virtual terminal 0: set most significant byte to zero.
    * Set terminal data: [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata)
    * Set application data: [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata), 

 if needed clear history with [EMV_ADK_CLEAR_ALL_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-clear-all-records)
    * Set keys: [EMV_CT_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey), 

 if needed clear history with [EMV_ADK_CLEAR_ALL_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-clear-all-records)
3. ** Reset virtual terminal to zero **

 To have a defined state: [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) with most significant byte set to zero
4. ** Apply the configuration **

 if [EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode) is set: use [EMV_CT_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration) to write the configuration to disk
5. ** Execute transactions **

 Use transaction commands as usual: 
[EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction), [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline), [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)

 EMV ADK will take care that parameter set matching current transaction's currency/transaction type is used.

Remark: The order of 1. and 2. can be changed.


## "Original" Virtual Terminal Approach

[Virtual terminal mapping table] provides useful feature allowing application to map different input data (like currency or transaction type) with preconfigured parameters set. However, sometimes it is useful to have different parameter sets without mapping them to transaction data fields. In case we just want to have different parameter sets and switch between them on demand, we still can use the same approach, but this time without calling method [EMV_CT_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal), since there is no mapping anymore.

This functionality is supported by Vertex framework only.


So, in order to work with different parameter sets, first, we need to prepare them and save them in the terminal's flash memory. All parameters will be automatically saved with ids added to their parameter file names: EMV_CT_Applications.xml for virtual terminal 0, EMV_CT_Applications_01.xml - for virtual terminal with id == 1, etc.

Workflow should follow the algorithm described below:



1. ** First, set parameters for your virtual terminals **

 For each virtual terminal you have to
    * Set Vertex framework into configuration mode first by calling [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) with option [EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode) enabled, 

 set other `options` accordingly (e.g. [EMV_CT_INIT_VIRT_1](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-1) for your first Virtual Terminal, [EMV_CT_INIT_VIRT_2](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-2) - for second and so on)
    * Set terminal data: [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata)
    * Set application data: [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata), 

 if needed clear history with [EMV_ADK_CLEAR_ALL_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-clear-all-records)
    * Set keys: [EMV_CT_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey), 

 if needed clear history with [EMV_ADK_CLEAR_ALL_RECORDS](group___a_p_p_l_i___c_o_n_f___m_o_d_e.md#define-emv-adk-clear-all-records)
    * Switch configuration mode off by calling method [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) again, but this time without option [EMV_CT_INIT_OPT_CONFIG_MODE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-config-mode) enabled.
    * call [EMV_CT_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration) to write configuration to disk.
2. ** Execute transactions **

 Use transaction commands as usual: 
[EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction), [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline), [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)

 EMV ADK will take care that parameter set matching current Virtual Terminal will be used.
3. ** Switch Virtual Terminal **

 In order to switch to another set of parameters (to another Virtual Terminal), you need to call [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework) with appropriate Virtual Terminal ID ([EMV_CT_INIT_VIRT_1](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-1) for ID 1, [EMV_CT_INIT_VIRT_2](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-virt-2) for ID 2 etc.). Once done, transactions are performed using usual methods without any additional modifications ([EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction), [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline), [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline)). There is no EMV_CT_INIT_VIRT_0 defined, since 0 is reserved for your default (real) terminal. In order to return back to your default terminal set most significant option byte to zero.



## Process Termination

On process exit the EMV-CT-Framework switches off customer contact card as well as SAM cards slots 1-3. This is done by an exit function which is registered with Linux API function `atexit`. In order to make this function be invoked the processes main function has to return or `exit` has to be called. For handling such events like switching to sysmode it recommended to create an exit handler that calls `exit` and which is registered with `signal(SIGTERM,my_exit_handler)`.


# System Setup and Requirements


## Compiler and Linker Settings

Chapter is empty.


## Hardware

The ADK EMV Contact framework is hardware platform agnostic and supports installation on V/OS, VOS2, Android, and VOS3 terminals. 

For currently supported platforms see release notes (emv-release-notes-x.x.x-xxx.pdf).


## Software

The EMV framework requires installation of corresponding platform packages. 

For details please refer to the release notes (emv-release-notes-x.x.x-xxx.pdf).


## Deliverables and Deployment


### VOS/VOS2: ADK integration solution packages

Recommended way is to use ADK integration solution packages. 

 Those packages guarantee that all needed SW components are available and compatible. 

 They are named like `adk-full-ext-x.x.x-xxxx.zip`


| Package name  | Description   |
|  -------- | -------- |
| **vos/** |
| `include/` , `lib/` | development packages (header + libs)   |
| **vos/load/solutions/** |
| `dl.adk-x.x.x-xxxx-vos-ux-prod.tgz` | Usage without SDI   |
| `dl.adk-x.x.x-xxxx-vos-sdi-prod.tgz` | SDI in standard mode   |
| `dl.adk-x.x.x-xxxx-vos-ux_sdi_hdl_solution-prod.tgz` | SDI in headless mode   |
| **vos2/** |
| `include/` , `lib/` | development packages (header + libs)   |
| **vos2/load/solutions/** |
| `dl.adk-x.x.x-xxxx-vos2-engage-prod.tgz` | Usage without SDI   |
| `dl.adk-x.x.x-xxxx-vos2-sdi_solution-prod.tgz` | SDI in standard mode   |
| `dl.adk-x.x.x-xxxx-vos2-sdi_hdl_solution-prod.tgz` | SDI in headless mode   |
| `dl.adk-x.x.x-xxxx-vos2-sdi_epm_solution-prod.tgz` | Download package for external PINPad (EPP)   |



### emv-desired.xml

This file contains device specific lists of L2 kernels &ndash; contact and contactless &ndash; that a main application needs to select. In contrast to contactless for the contact L2 kernel there is a default (L27.0.3 at time of writing). Projects that require to keep the contact L1 driver at state of L3 certification can additionally set an IFM version in an <L1> node. A main application has to provide its own emv-desired.xml and install it either as a user config package at /etc/config/emv-desired.xml (VOS, VOS2) or together with the user-signed main application at $HOME/emv-desired.xml (VOS, VOS2) and /u00/buildagent-home/sdi/emv/emv-desired.xml (VOS3). For Android see [ADK-SDI Programmers Guide](./pg_sdi_users_guide.html). The EMV-ADK documentation archive (emv-doc-x.x.x-xxx.zip) contains a sample file and a corresponding XSD file (emv-desired.xsd) that can be used to validate the formal correctness of the project specific emv-desired.xml.

 Available certifications decide which kernel version is allowed to use on which terminal (see [EMVCo Homepage](http://www.emvco.com/)).

Example ```xml

<?xml version="1.0" encoding="ISO-8859-1"?>
<!-- The value of attribute emv-desired is arbitrary text and is intended to identify the emv-desired.xml file. It will be printed to trace and warning messages if applicable. -->
<emv emv-desired = "my project and version">
<ct> <!-- no device specification for other, unlisted devices -->
    <L2>L27.0.3</L2> <!-- without trailing platform letter -->
</ct>
<ct> <!-- As L2 certifications are not device specific it is possible to give an entire platform, see emv-desired.xsd for possible values -->
    <platform>VOS</platform>
    <L2>L27.0.2</L2>
</ct>
<ct> <!-- device specific entry, especially required for freezing IFM version -->
    <device>V200c</device>
    <device>P200</device>
    <device>P400</device>
    <device>M400</device>
    <L1>IFM18c-EMV4.3_A00</L1> <!-- the beginning of the IFM version is sufficient, optional entry -->
    <L2>L27.0.3</L2> <!-- mandatory entry -->
</ct>
</emv>
```


### Android

Android Applications are typically implemented in Java. For those the Verifone PSDK is the recommended interface. 

 This documentation does not deal with PSDK but is written for C/C++ users. Typically applications on vos/vos2 are using C/C++ and need to be migrated to Android.

On Android systems the ADK-EMV is integrated in the SDI service and therefore not directly accessible. 

 See Usecase 2 and 3 in [Usecases 1 to 4]. 

 It's recommended to use `libsdiclient` ([ADK-SDI-Client Programmers Guide](./pg_sdiclient_users_guide.html)) for SDI respectively EMV access.

Verifone Android Terminals come with a preloaded SDI service. 

 If needed this can be updated by installation of `SDIService-`(trinity|neo)-x.x.x-xxx.apk.


### VOS3

Similar to Android the ADK-EMV is integrated in the SDI service and therefore not directly accessible. 

 See Usecase 2 and 3 in [Usecases 1 to 4]. 

 SW to be loaded on the terminal:

* `dl.adk-VOS3_x.x.x-CD-xxx-vos3-`(m450|p630|ux700)-prod.tar 

 or
* `adk-VOS3_x.x.x-CD-xxx-vos3-`(m450|p630|ux700)-fastboot-prod.tgz 

 or
* `adk-VOS3_x.x.x-CD-xxx-vos3-`(m450|p630|ux700)-flatimage-prod.tgz

**Development headers and libs**

 All EMV headers are included in SDK `adk-sdk-vos3-VOS3_x.x.xx-CD-xxx.zip`. 

 Also the needed libs, which are:

* `libEMV_CT_Client.a`
* `libEMV_CT_Link.so`, `libEMV_CT_Link.so.x`
* `libTLV_Util.so`, `libTLV_Util.so.x`

**VOS2 compatibility mode:**
`libsdiclient` ([ADK-SDI-Client Programmers Guide](./pg_sdiclient_users_guide.html)) offers the interfaces from ADK-EMV, ADK-MSR and ADK-TEC. 

 To make use of this feature it's needed to load the vos3-cards-plugin to the terminal.


### VOS/VOS2: Internal structure of packages

ADK-EMV loading packages are also provided separately. 

 When using those the user is responsible for version compatibility to the other used SW components. 

 Packages delivered (x - version number digit):


| Package name  | Description   |
|  -------- | -------- |
| `emv-doc-x.x.x-xxx.zip` | Documentation   |
| `emv-vos-dev-x.x.x-xxx.zip` | VOS development package, to be installed in PC build environment   |
| `emv-vos-load-x.x.x-xxx.zip` | VOS load package, to be installed on terminal   |
| `emv-vos2-dev-x.x.x-xxx.zip` | VOS2 development package, to be installed in PC build environment   |
| `emv-vos2-load-x.x.x-xxx.zip` | VOS2 load package, to be installed on terminal   |
| `emv-vats-vos-load-x.x.x-xxx.zip` | VOS load package with VATS transaction simulation, to be installed on terminal   |
| `emv-vats-vos2-load-x.x.x-xxx.zip` | VOS2 load package with VATS transaction simulation, to be installed on terminal   |
| `emv-full-x.x.x-xxx.zip` | Full package (Documentation, development and load packages for VOS, VOS2, Android, and VOS3)   |
| `emv-vats-full-x.x.x-xxx.zip` | Full package with VATS transaction simulation (Load packages for VOS, VOS2, Android, and VOS3)   |


In these packages you can find:



* **Development****packages**
    * Include headers 
`include/emv`
    * Libraries for linking
        * Usecase 1 and 2 (see [Usecases 1 to 4]) 
`libEMV_CT_Client.a`, `libEMV_CT_Link.so`
        * Usecase 4 (see [Usecases 1 to 4]) 
`libEMV_CT_Framework.so`
    * TLV utility 

 To ease handling of BER TLV streams used on EMV ADK interface a library is provided: 
`libTLV_Util.so`

 Please note: This shared library is also used by the EMV-ADK components themselves and therefore has to be deployed to the target device. 

 The predecessor `libTLV_Util.a` is **deprecated** and will by discontinued.
    * Special Use Case 

 This library provides the EMV-ADK functional interface, serialize the commands in the EMV-ADK native way and calls `EMV_CT_SerInterface`. 

 It is intended for payment applications that are split to multiple processes which do interprocess communication via an application specific protocol. 
`libEmvSerialise.a`
    * Internal use only 

 Needed by TEC server: `libEmvTecClient.a`

* **Load****packages**


    * VOS, VOS2
        * Components needed for Usecase 1 (see [Usecases 1 to 4])
            * Framework linker 
`dl.libEMV_CT_Link.so.x.x.x.tar`
            * Framework 
`dl.libEMV_CT_Framework.so.x.x.x+VEL.tar`
            * L2 Kernel 
`dl.EMV_CT_VERTEX-x.x.x-nnn.tar` (L2 kernel set) 
`dl.emv-allowed-x.x.x.tar` (list of certified L2 kernels) 
`emv-desired.xml` list of required L2 kernels) 
`If` EMV ADK framework init option EMV_CT_INIT_OPT_SHARED_CONFIG/EMV_CTLS_INIT_OPT_SHARED_CONFIG is active the primary location for the emv-desired is 
`/etc/config/adkemv/emv-desired`.xml (e.g. SDI Server usage) otherwise it is ${HOME}/emv-desired.xml 
`In` both cases the secondary search location is /etc/config/emv-desired.xml
        * Components needed for Usecase 2 (see [Usecases 1 to 4])
            * Framework linker 
`dl.libEMV_CT_Link.so.x.x.x.tar`
        * Components needed for Usecase 4 (see [Usecases 1 to 4])
            * Framework 
`dl.libEMV_CT_Framework.so.x.x.x+VEL.tar`
            * L2 Kernel 
`dl.EMV_CT_VERTEX-x.x.x-nnn.tar` (L2 kernel set) 
`dl.emv-allowed-x.x.x.tar` (list of certified L2 kernels) 
`/etc/config/emv-desired`.xml or $HOME/emv-desired.xml (list of required L2 kernels)
    * VATS (Verifone Automatic test system) - internal use 

 A special version of framework shared object is delivered. By means of VATS python test scripts the reponses of EMV ADK transaction functions can be simulated. 
`dl.libEMV_CT_Framework.so.x.x.x+VEL_VATS.tar`

    * Encryption manager: VTP / VSP 

 See also [ADK-EMV Encryption Manager Programmers Guide](./pg_emv_encryption_manager_users_guide.html).
        * VOS: VTP 
`dl.libEMV_EM.so.x.x.x+VTPx.x.x.tar`
        * Verix: VSP 
`dl.libEMV_EM.so.x.x.x+VSPx.x.x.xx.zip`


# Troubleshooting


## How to start analyzing an EMV problem?



* Fetch the basic information
    * which ADK EMV version is used and which L2 kernel is used
    * config XML files available
    * trace of the EMV transaction available
    * test case or card used
    * OS, terminal, ADK integration package used


## Guide for EMV Analysis



1. Double check the EMV version in the trace If CTLS find out which kernels are loaded and which was used for the transaction 
2. Try to understand the transaction
    * Transaction Type and Amount
    * Application selection (if relevant)
    * CVM performed
    * SDA or DDA or CDA
    * Outcome of the transaction 
3. Check especially the outcome as in the description there should be something like (expected outcome, real outcome) Use the kernel debug data (This is most important)
    * Exit Code
    * Last SW12
    * ODA bitmaps 
4. Check the TVR, what happened during the transaction
    * Check if AAC,TC or ARQC was requested from terminal side and why (TAC/IAC analysis)
    * Check TSI and what is supported by the card
    * For CTLS check if there is something scheme specific to consider
    * Check the “outcome tags” of the transaction if you see something suspicious 
5. Now you may be know why the txn outcome differs from the expected. Try to think what you would need to change in this transaction to come to the expected outcome.
    * Cross check with test case requirement
    * Cross check if you have the test card or Collis script available to reproduce the problem 
6. Now it might be XML file review time: Check if you can see already something from the transaction parameters or XML config parameters of the AID that may be wrong configured and would lead to a wrong behavior. 
7. If everything is seems correct and you don’t detect obvious misconfiguration:
    * Try to reproduce the issue with the software stack given in the ticket
    * Try to reproduce with the latest software stack (newest) and see if still existing 
8. If not reproducible: Try to compare with customer environment and blame their application :D If reproducible: Try to fix it with parameter changes or test app adoption 
9. If no help: Check if the test case is correctly chosen and if applicable or may be something wrong with test case 
10. If no help: Contact ADK guys and discuss


## Frequently Asked Questions


### What is EMV?



* The term EMV comes from Europay, MasterCard and Visa. These 3 credit card companies got together in 1994 to start to develop the EMV Specifications to apply chip card technology in payment transactions.
* EMVCo was later formed to manage the maintenance of the Specifications and administration of EMV type approval process. EMVCo, LLC, was formed in February 1999.
* Europay became part of MasterCard in 2002. The current members of EMVCo are American Express, JCB, Discover, MasterCard, UnionPay and Visa. Each of these organizations owns an equal share of EMVCo and has representatives in the EMVCo organization at the management and working group levels.


### What is an ICC?



* In EMV context, smart card, chip card, ICC (integrated circuit card) and EMV card are referred to the same thing.
* A chip card used in payment transactions is usually a card with a magstripe at the back (will disappear in future) plus a chip in front which is a self-contained microprocessor.
* A chip card can be,
    * Contact only
    * Contactless only
    * Dual-interface, i.e. contact and contactless


### Why is EMV called Chip and PIN?

When EMV was rolled out in UK, it was given a marketing name of “Chip and PIN”. This is because of the chip on the card and that offline PIN verification is usually required during the transaction, even for credit card transactions. However, whether PIN is required for cardholder verification is up to the issuer to decide. In many Asian Pacific countries, EMV cards were issued with signature as the preferred CVM for POS transactions.


### What is an AID?

AID stands for Application Identifier. Every card application in EMV is identified by an AID. The structure of AID is defined in ISO 7816-4. It consists of 2parts, Rid and PIX. Samples:

* { 7, {0xA0,0x00,0x00,0x00,0x04,0x10,0x10} };
* { 7, {0xA0,0x00,0x00,0x00,0x03,0x10,0x10} };
* { 7, {0xA0,0x00,0x00,0x00,0x04,0x30,0x60} };
* { 7, {0xA0,0x00,0x00,0x00,0x04,0x60,0x00} };
* { 7, {0xA0,0x00,0x00,0x00,0x03,0x20,0x10} };
* { 7, {0xA0,0x00,0x00,0x00,0x03,0x20,0x20} };
* { 7, {0xA0,0x00,0x00,0x00,0x03,0x30,0x10} };
* { 7, {0xA0,0x00,0x00,0x00,0x03,0x80,0x10} };


### What is a PCD, PICC?



* PCD which stands for Promixity Coupling Device is the contactless reader used in contactless payments. It generates RF field through which the contactless card (PICC) gets the power and communicates with the reader.
* PICC stands for Proximity ICC which is the contactless card used in contactless payments


### Can A customer simply plug in a Verifone device and expect chip payment transactions to work immediately?

No, plug and play is not possible for EMV.

* Despite the fact that we have hardware and software ready for customers, customers will need to process the followings, through either a standalone or integrated payment application,
* Provide EMV terminal configurations, e.g. AID list supported, CAPKs, floor limit, etc
* Process callbacks for process customization
* Handle EMV data such as Application Cryptogram in host communication
* Process non-EMV requirements which are required for EMV transactions, e.g. reversal if host approval is rejected by the card


### What kinds of certification are required for implementing contact EMV?



* EMVCo defines and maintains EMV specifications. These provide global requirements to ensure interoperability. EMV Level 1 and Level 2 certifications are managed by EMVCo. The objective of these certifications is to prove that the device conforms to the EMV specifications.
* EMVCo does not own or operate any card scheme. Each card scheme defines its own implementation details in addition to the EMVCo's global requirements, e.g.
* Visa - VIS
* MasterCard - M/Chip
* Amex - AEIPS, etc Each card scheme manages its own End to End Certification for payment application that supports the card scheme's contact EMV requirements. All of the card schemes require EMV Level 1 and Level 2 certification as a pre-requisite for requesting the End to End Certification. End to End Certification is the responsibility of acquirers.


### What kinds of certification are required for implementing contactless payments?

Unlike contact EMV requirement which was started off in a cooperation manner from Europay, MasterCard and Visa, contactless payment requirements were started off as competition. As a result, each card scheme defines its own contactless requirements which are totally different from each other. Thus, while there is only one contact EMV kernel in the device, it requires one contactless kernel for each card scheme's contactless specification. The contactless kernel certification is managed by individual card scheme. Certifications are per kernel AND per hardware (not per terminal family).


### What is a certified or approved terminal configuration?



* Different EMV terminal configurations used may result in different ways an EMV transaction be processed. For example, an offline only terminal will never request for an online host authorization while an online only terminal will never approve a transaction without online processing. Because this, EMV Level 2 type approval request for an EMV kernel is submitted with an ICS (Implementation Conformance Statement) with a list configurations to be used. The listed configurations are tested during the certification process.
* A Letter of Approval will be issued with all the configurations tested after the certification is successful. These configurations are known as certified or approved terminal configurations of the certified EMV kernel. When the EMV kernel is used in a payment system, the terminal configuration used has to be one the certified configurations. Otherwise, it is running in non-compliant mode.


### What is a major or minor EMV terminal configuration item?



* EMVCo issued type approval bulletins TA11 and TA31 to classify EMV terminal configuration items into Major, Minor, Hide-able and Variable categories. Major items must be followed exactly as the certified configurations shown on Letter of Approval. Other types of items are allowed to be different.


### What is required in an EMV application?



* Bear in mind that all EMV requirements specified in the EMVCo’s Specifications have been implemented in the EMV kernel and the kernel has been certified. The application you’re going to create is to address the followings,
* Customize the transaction flow to meet the merchant or acquirer’s requirements, e.g. EMV related display messages, prompts, receipts etc
* EMV transaction related process that is not specified in EMV Specifications, e.g. enforcing to use chip technology, fallback to use magstripe in case of chip failure, etc
* Communicate with host with EMV specific transaction data


### What is fallback to MSR?



* In EMV using chip card for MSR transactions is only allowed after attempting to process a chip transaction but failed due to chip malfunction or other issues.
* If CTLS fails there might be fallback scenarios to other technologies (Chip / msr) depending on the scheme. Also here MSR usage is allowed only if the chip part (CTLS chip or CTLS msr) is not working


### What Are Card Read Transactions?



* A full EMV transaction involves validation processing steps such as data authentication, cardholder verification, terminal risk management etc.
* The purpose of non-EMV transaction using EMV functionality is only to read the PAN or track 2 equivalent data from the chip card. This involves only the first few steps such as Application Selection, Initiate Application Selection and then Read Application Data. As soon as the PAN is received from the rest of the EMV transaction steps will be skipped. Usually an AAC is requested.
* Also the rest of the transaction will then be processed as if the PAN is read from the magnetic stripe, i.e. non-EMV.
* Reversal, Refund, Reservation Confirmation, separate tip, …


### Under which situation(s), is a host approval required to be reversed?



* The chip card is required to stay in the chip reader throughout the whole transaction. The reason is that at the end of the transaction, the card is required to generate an Application Cryptogram (AC). The AC will be stored by payment systems to proof that such transaction was performed with the genuine card’s presence.
* After the online processing, if the host approves the transaction, the host decision (in the form of ARPC which is a type of AC) is required to be sent to the card. The card will authenticate the ARPC to make sure that the response is good before accepting the approval.
* If either the card rejects the decision or the card has been prematurely removed, a reversal is required to be sent back to the host.


### What are common EMVCo Terms?



* AIP is Application Interchange Profile. It specifies the application functions that are supported by the card application.
* AFL is Application File Locator. It consists of the list of files and related records for the currently selected application that shall be read by the terminal application for the subsequent transaction processing.
* TVR is Terminal Verification Results. It is a 5-byte data element which is used as a bitmap. Each bit records the result of a validation during Data Authentication, Processing Restrictions, Cardholder Verification and Terminal Risk Management.
* AC is Application Cryptogram. It is generated by the card using an Issuer specific algorithm and cryptographic keys.
* There are 3 types of AC,
    * TC, Transaction Certificate, which is generated for an approved transaction
    * ARQC, Authorization Request Cryptogram, which is generated for host authorization request
    * AAC, Application Authentication Cryptogram, which is generated for a declined transaction


### What is TAC IAC processing?



* TAC is Terminal Action Code and IAC is Issuer Action Code. Each of them comes in a set of 3, namely,
* TAC – Denial, TAC – Online, TAC – Default, and
* IAC – Denial, IAC – Online, IAC – Default
* Each of these data element has the exactly same structure as TVR. They are used in pairs, e.g. TAC – Denial and IAC – Denial, to compare to the TVR to decide if the specific action shall be taken.


### What is tearing?



* During a chip payment transaction, the card has to communicate with the terminal throughout the transaction.
* For contact chip card, the card is required to stay in the reader. For contactless chip card, the card is required to stay within the RF field generated by the reader.
* Tearing occurs when the card removed such that the communication is no longer possible. Tearing is a lot easier to occur in contactless transactions.


### What is collision?



* Collision occurs when more than one contactless chip card is moved within the RF field generated by the contactless reader and the reader is not able to establish a comms channel to any of the CTLS cards. This is not unusual in contactless transactions, e.g. a cardholder puts a Visa and a MasterCard contactless card in a wallet and presents the wallet to the reader during the transaction.
* Collision only occurs in contactless transactions. Collision detection can not be guaranteed, especially if the contactless reader is able to communictae stable with one of the cards in the field it will progress with this card even there seems there are 2 cards inside the antenna range.


### What is contactless magstripe and contactless EMV?



* Contactless payments were started off as competition. MasterCard and Visa defined separately their own requirements in applying contactless technology in payment.
* Early contactless chip specifications were designed for MSR payment network to address counterfeit fraud in MSR cards. A dynamic card verification code that can only be generated by a genuine card is added into the track 1 and track 2 data. The code is generated by the card and formatted by the reader into track data. The process is transparent to the existing terminal application. The dynamic code is verified by the issuer host. This code is known as CVC3 for MasterCard and dCVV for Visa.
* Both MasterCard and Visa later defined new requirements for EMV infrastructure. Visa called its requirement payWave qVSDC while MasterCard called it PayPass M/Chip. Their original requirement payWave MSD and PayPass magstripe respectively.


### What are Callbacks?



* Callbacks are used to customize EMV applications, e.g. for regional/domestic requirements.
* Callbacks are used to provide intermediate transaction results to the terminal application and to fetch updated parameters from the terminal application depending on the transaction progress.
* Typical use case are
    * Specific processing one the PAN/BIN range is known
    * Language and application selection requirements
    * Co branded Cards
    * additional security checks, e.g. blacklist, online txn, …


### What are the most important callbacks for Contact EMV?



* CVM (PIN Offline, Online, Biometrics)
* Application Selection
* Blacklist
* DCC
* Domestic Reconfig Example: Continue Transaction Offline CLIENT MSG CMD: 39 11 [ 30] F01C9F410400000000DF5806000000000000DF4E0100DF470100DF340100 (Callback example, here: BF08 == PIN Input, Online PIN) CLIENT MSG CBK: 91 01 [13] F00BBF0808DF790100DF410101 CLIENT MSG CBKR: 92 00 [6] F004DF790100 CLIENT MSG RESP: 90 E2 [405] F0820193DF4204000000019F2701809F3602005E9F260845CFA9C81F28B5BD5A0A476173


### What are the most important callbacks for Contactless EMV?



* Contactless Callbacks are avoided whenever possible because of the 500msecs txn time requirement
* Application Selection (e.g. US Common Debit)
    * No customer involvement
* Kernel Selection (e.g. French Card Bancaire)
    * Same AID can point to different kernels


### How is the Configuration for EMV Working?

There are different kind of parameters

* Terminal Wide
* Application Specific
    * The same per scheme in CT
    * Different per scheme in CTLS
* CAP Keys (used to secure the transaction)
* You configure all those parameters as they come from your acquirer. Alternatively you can use TMS or a fixed configuration (file download).
* Parameters must be updatable in the field.


### Why are there in CTLS so many different configuration Options?



* In opposite to CT, there is an own kernel for each CTLS scheme
* There are around 15 different kernels as per today, each having their own independent specification
* Each kernel brings its own data and configuration
* The specs are independent on each other and define their own flow and configuration tags and fields
* Each of those must be configured indepedently


### Where do I find an overview on CTLS Kernel certifications?



* Certification in CTLS have to be performed per terminal
* different antenna layout per terminal
* underlying CTLS L1 Ask your PM or support team for advice here


### How does the ADK cross check the used kernels (allowed XML)?



* New kernels that are not yet certified are just provided after certification
* During End of certification and LOA there are usually several weeks until the kernel becomes valid and allowed to be used
* It happens that a kernel from one to the other product is unchanged (e.g. one common set of kernels for Engage as far as possible) ? Anyhow I am only allowed to use kernels that have LOA available
* As soon as the LOA of a kernel is available the next ADK Cards release will add this kernel to the allowed file and activate this for official usage
* Allowed XML file is system signed and part of the ADK release


### What happens if I use a not certified kernel?



* If an uncertified kernel is used, then it will not be in the allowed XML and the ADK will recognize this
    * Add remarks/warnings to the trace
    * Issue a warning beep (Once on first Init Framework after bootup)
    * Display a Splash Screen with warning that uncertified kernels are loaded.
* This will allow development with pre-released kernels but obviously will indicate if a wrong kernel is downloaded in the field (which is a requirement from the EMV team).


### How can I select the kernel I want to use (desired XML)?



* Add your kernels to the desired XML file
    * Per terminal
    * One file for all
    * Sample/Default delivered with each EMV ADK release: “doc/emv/emv-desired.xml“ (also as load package in latest releases)
* Payment applications might want to load only a subset of kernels or require to load fixed specific kernel versions as they were used for their national or bank approval. The payment application must specify this setting in the emv-desired.xml configuration file.


### What has an influence on transaction speed for EMV Contact (Contactless)?

There are many parameters that influence the speed of an EMV Chip transaction. Since the card processing time in EMV contact transactions is significantly bigger than the terminal processing time, the used card has a major influence on the overall transaction time of an EMV transaction.

* transaction processing on terminal apps side
    * minimize processor load during transaction (no videos, animated HTMLS, ...)
    * NO TRACES!!!
    * cardholder interaction
    * no delay in between subsequent kernel calls / subsequent ADK calls (move apps processing that is not needed immediately after the end of the transaction)
    * have all transaction data available on card insertion and do not collect it during the transaction
* used card
    * card supports SDA/DDA/CDA
    * PSE support
    * key length needed for private key operations
    * cards OS implementation
    * support of baudrate increase on L1
    * cards processor / crypto co processor / internal characteristics of the card
* Contactless (similar to contact):
    * baudrate of comms is higher
    * time critical: Cryptogram calculation on the ICC
    * PSE ALWAYS supported
    * Specs have speed optimized flow (e.g. no offline PIN, data authentication after card removal)
* An up to date CT card is as fast as a CTLS card
    * 4 paramters go into the calculation
    * Terminal processing time
    * Card processing time
    * Terminal transmission time
    * Card transmission time


### What options do I have for LED usage, especially on screen LEDs?



* The VERTEX kernels and the VFI-Reader have callbacks to indicate LED switches
* On terminals with physical LEDs the ADK switches them automatically, fastest way and recommended
* On terminals with screen LEDs you can invoke a callback and use ADK GUI to display the LEDs. There is a speed optimized display option implemented that will display the LEDs fast.


### What restrictions do apply with On Screen LEDs?



* slower than physical LEDs
* Screen refreshes only all xx msecs depending on scree refresh rate
* Thus no consecutive switching possible but even if LEDs switche din order, they will be switched on at the same time.
* Apps needs to consider LEDs in screen layout
* ADK GUI solution reserves the border of the display for the LEDs, remaining screen free visible.
* Example in EMV test app (function configureSoftLeds --> uiConfigLEDs)


### What do I need to consider with the CTLS logo positioning?



* Location: CTLS Logo must be centered over the "landing zone" where the signal is strongest.
* Size: Contactless Symbol image appears optimally when shown no smaller than 13mm in height and 22mm in width
* Clear Space: A minimum clear space of ¼ the height of the Contactless Symbol should be maintained on all four sides of the image


### How to integrate MSR, CT, CTLS with technology selection?



* Standard Use Cases MSR and CT activation and CTLS (Auto) EMV-Transaction MSR and CT activation and CTLS EMV ISO detection
* To drive a complete EMV transaction via TECHSEL it is necessary to Setup the EMV transaction in advance SetupCTLSTransaction CallTechnologySelection Polls msr, CT and CTLS (performs complete CTLS txn) Evaluate TECHSEL outcome If(msr) Handle Track Data else if (CT) StartTransactionCT /ContinueOfflineCT (start CT transaction) else if (CTLS) ContinueOfflineCTLS (fetch CTLS data / handle CTLS txn)


### How does mobile EMV payment (Apple, Android, Samsung) work?

Tokenization

* “virtual card” created on issuer side, which is connected to the originally photographed / entered card data
* This is loaded to mobile and just at issuer backend the original card is referenced/mapped to the original card and bank account
* Apple / Samsung have security module, card keys can be downloaded to device
* Cheaper Android systems do not have this ? HCE (Host Cloud Emulation)


### From where to fetch the last Status Word from chipcard?

In response data of [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline) the first two bytes of [EMV_CT_TRANSRES_TYPE::T_DF64_KernelDebugData](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md#variable-t-df64-kerneldebugdata) give the last status word from ICC.


## Traces

Traces are essential for all kind of analysis. 

 Please use ADK-LOG ([ADK-LOG Programmers Guide](./pg_logging_users_guide.html)) to fetch them. 

 Following logging channels contain EMV related data:

* EMVCT
* EMVCTLS
* TEC
* when using SDI:
    * SDI
    * SDICLT
    * SDIPROT

To fetch ALL traces use "Log Level = Trace". 

 To have timestamps with milliseconds use "Log format = RFC 5424".


### For special needs: Trace callbacks

For compatibility reasons the trace callback mechanism is still available. 

 Please only use in case ADK-LOG functionality does not cover your needs. 

 Trace callback mechanism can be configured by

* [EMV_CT_INIT_OPT_TRACE](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace),
* [EMV_CT_INIT_OPT_TRACE_CLT](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-clt),
* [EMV_CT_INIT_OPT_TRACE_SYSLOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-syslog),
* [EMV_CT_INIT_OPT_TRACE_ADK_LOG](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-trace-adk-log).


### Timing Traces

A trace option for timings is implemented: [EMV_CT_INIT_OPT_TIMINGS](group___c_t_i_n_i_t___o_p_t_i_o_n_s.md#define-emv-ct-init-opt-timings).

This will do the following:

Once activated automatically disables the EMV client logs and EMV transaction logs

Fetch time stamps at the begining of each CT and CTLS transaction call, e.g. 

```
StartTransaction / SetupTransaction
ContinueOffline
ContinueOnline
```

Fetch time stamps before and after each CT and CTLS L1 command

Fetch a time stamp at the end of the transaction (CT switched off (offline or online)), (CTLS field disabled and LED/Beep thread started)

All these data will be written just to RAM during the transaction. Just at the end when the card is deactivated and transaction completed it will be written to log (either to callback trace or to ADK-LOG as configured by the application). This way it will have alsmost zero influence on the transaction timing.

The above measure points allow to differ clearly in

* card calculation time (slow card),
* ADK and kernel calculation time (slow ADK or kernel) and
* Application calculation time in between the ADK calls (slow application).

As long as the same card is used it also excludes the card itself since the card calclulation time can be removed from the process. We don't have any influence on card speed (except PPS procedure, which should be activated by application).

It allows application developers to create tests, where they can measure their application processing time. It also allows applications to find out with this log if they have an exceptional slow card for testing.


## Kernel Debug Data

Debug Data is part of the transaction results and can be used for evaluating the status and possible issues within the last transaction. Currently there are 32 bytes reserved for the Debug Data. It is recommended to have the debug data available for support, trace or analysis.

The debug data is composed of 2-byte ADK debug data and kernel debug data.

The 2-byte ADK debug data offers information on the ADK exit point and on the status or sub steps of the transaction. The trailing bytes are the ADK debug data.

The kernel debug data is stored in the leading bytes.

For the Vertex contact kernel there are 24 bytes of transaction information available: 

```cpp
0   // ICC SW1

1   // ICC SW2

2   // Level 1 exit status

3   // Kernel exit status

4   // Bitmap indicating transaction progress

5   // Status of certificate recovery

6   // Status of CVM process

7   // Status of script processing

8   // 1st GenerateAC cryptogram type requested.

9   // 1st GenerateAC cryptogram type received.

10  // 2nd GenerateAC cryptogram type requested.

11  // 2nd GenerateAC cryptogram type received.

12  // Auxiliary debug data

13  // Cryptography operation

14  // Cryptography outcome (Data Authentication)

15  // ZKA debug "Step" data

16  // ZKA debug "Sub-step" data

17  // Yet another auxiliary debug data byte

18  // Cryptography outcome (Encrypted PIN)

19  // 'Control' byte of selected application

20  // Kernel configuration byte

21  // RFU

22  // RFU

23  // RFU
```



```
// Kernel debug data
// Identifiers for each debug byte
EMVL2_STATUS_ICCSW1    0  // ICC SW1
EMVL2_STATUS_ICCSW2    1  // ICC SW2
EMVL2_STATUS_L1EXIT    2  // Level 1 exit status
EMVL2_STATUS_KEXIT     3  // Kernel exit status
EMVL2_STATUS_PROG      4  // Bitmap indicating transaction progress
EMVL2_STATUS_CRYPT     5  // Status of certificate recovery
EMVL2_STATUS_CVM       6  // Status of CVM process
EMVL2_STATUS_SCRIPT    7  // Status of script processing
EMVL2_STATUS_GAC1REQ   8  // 1st GenerateAC cryptogram type requested.
EMVL2_STATUS_GAC1RSP   9  // 1st GenerateAC cryptogram type received.
EMVL2_STATUS_GAC2REQ  10  // 2nd GenerateAC cryptogram type requested.
EMVL2_STATUS_GAC2RSP  11  // 2nd GenerateAC cryptogram type received.
EMVL2_STATUS_AUX1     12  // Auxiliary debug data
EMVL2_STATUS_CSTAGE   13  // Cryptography operation
EMVL2_STATUS_CSTAT1   14  // Cryptography outcome (Data Authentication)
EMVL2_STATUS_ZKASTEP1 15  // ZKA debug "Step" data
EMVL2_STATUS_ZKASTEP2 16  // ZKA debug "Sub-step" data
EMVL2_STATUS_AUX2     17  // Yet another auxiliary debug data byte
EMVL2_STATUS_CSTAT2   18  // Cryptography outcome (Encrypted PIN)
EMVL2_STATUS_ACONTROL 19  // 'Control' byte of selected application
EMVL2_STATUS_KCONFIG  20  // Kernel configuration byte
EMVL2_STATUS_AUX3     21  // RFU
EMVL2_STATUS_AUX4     22  // RFU
EMVL2_STATUS_AUX5     23  // RFU


// Kernel exit status values [byte 3]
L2ES_00  0x00 // Exit status not defined

// Select PSE (01 - 0F)
L2ES_01  0x01 // Select PSE, L1 Error 
L2ES_02  0x02 // Select PSE, Card blocked 
L2ES_03  0x03 // Select PSE, Non EMV card detected
L2ES_04  0x04 // Candidate list full
L2ES_05  0x05 // Candidate list empty 
L2ES_06  0x06 // Auto select only candidate
L2ES_07  0x07 // Auto select first candidate
L2ES_08  0x08 // Manual selection by user required
                      
// Final Select (10 - 1F)
L2ES_10  0x10 // Final select, L1 Error
L2ES_11  0x11 // Final select, application successfully selected
L2ES_12  0x12 // Final select, non EMV Card detected
L2ES_13  0x13 // Final select, card blocked
L2ES_14  0x14 // Final select, mandatory data (tag 84) missing
L2ES_15  0x15 // Final select, card AID differs from that requested
L2ES_16  0x16 // Final select, bad parameter values supplied by user
                      
// Get Processing Options (20 - 2F)
L2ES_20  0x20 // GPO, L1 error
L2ES_21  0x21 // GPO, Bad SW12 response 
L2ES_22  0x22 // GPO, Conditions of use not satisfied (6985)
L2ES_23  0x23 // GPO, parsing error
L2ES_24  0x24 // GPO, mandatory data missing (tag 82 and tag 94)
L2ES_25  0x25 // GPO, bad AFL length
L2ES_26  0x26 // GPO, bad AFL format

// Read Records (30 - 3F)
L2ES_30  0x30 // Read Records, L1 error
L2ES_31  0x31 // Read Records, Bad SW12 response 
L2ES_32  0x32 // Read Records, mandatory data Exp Date || PAN || CDOL1 || CDOL2 missing
L2ES_33  0x33 // Read Records, parsing error 

// Data authentication (40 - 4F)
L2ES_40  0x40 // Internal authenticate, L1 error
L2ES_41  0x41 // Internal authenticate, Bad SW12 response 
L2ES_42  0x42 // Internal authenticate, DDOL syntax error
L2ES_43  0x43 // Internal authenticate, parsing error

// Cardholder Verification (50 - 5F)
L2ES_50  0x50 // CVM, bad parameter supplied
L2ES_51  0x51 // CVM, bad CVM list format
L2ES_52  0x52 // Online PIN, unknown state encountered
L2ES_53  0x53 // User error, offline PIN, functionality no longer supported
L2ES_54  0x54 // External PED reports ICC L1 error
L2ES_55  0x55 // Get PTC, L1 error 
L2ES_56  0x56 // Verify, L1 error
L2ES_57  0x57 // Verify, bad SW12
L2ES_58  0x58 // Verify, SW1 = '63' but bad SW2 value    
L2ES_59  0x59 // Get Challenge, L1 error

// Validate transaction (60 - 6F)
L2ES_60  0x60 // VT, bad parameter supplied
L2ES_61  0x61 // Get Data ATC, L1 error
L2ES_62  0x62 // Get Data LOATC, L1 error

// Action analysis (70 - 8F)
L2ES_70  0x70 // Bad parameter supplied
L2ES_71  0x71 // GenAC1 CDOL1 syntax error
L2ES_72  0x72 // GenAC1 L1 error
L2ES_73  0x73 // GenAC1 Bad SW12
L2ES_74  0x74 // GenAC1 SW12 = 6985
L2ES_75  0x75 // GenAC1 parsing error
L2ES_76  0x76 // GenAC1 logic error
L2ES_77  0x77 // GenAC1 Mandatory data missing (9F26)
L2ES_78  0x78 // GenAC1 Mandatory data missing (9F27, 9F36)
L2ES_79  0x79 // GenAC1 Mandatory data missing (9F4B)
L2ES_7A  0x7A // GenAC1 Accept
L2ES_7B  0x7B // GenAC1 Decline
L2ES_7C  0x7C // GenAC1 Forced Decline
L2ES_7D  0x7D // GenAC1 Unknown card response
L2ES_7E  0x7E // GenAC1 Online

// Complete Online Txn (90 - AF)
L2ES_90  0x90 // Bad parameter supplied
L2ES_91  0x91 // GenAC2 CDOL2 syntax error
L2ES_92  0x92 // GenAC2 L1 error
L2ES_93  0x93 // GenAC2 Bad SW12
L2ES_94  0x94 // GenAC2 SW12 = 6985
L2ES_95  0x95 // GenAC2 parsing error
L2ES_96  0x96 // GenAC2 logic error
L2ES_97  0x97 // GenAC2 Mandatory data missing (9F26)
L2ES_98  0x98 // GenAC2 Mandatory data missing (9F27, 9F36)
L2ES_99  0x99 // GenAC2 Mandatory data missing (9F4B)
L2ES_9A  0x9A // GenAC2 Accept
L2ES_9B  0x9B // GenAC2 Decline
L2ES_9C  0x9C // GenAC2 Forced decline
L2ES_9D  0x9D // GenAC2 Unknown card response
                      
                      
// Bitmap values for transaction progress (PROG) byte [4] 
EMVL2_PROG_OT    0x01  // Complete online transaction has been attempted
EMVL2_PROG_AA    0x02  // Action analysis has been attempted
EMVL2_PROG_VT    0x04  // Validate transaction has been attempted
EMVL2_PROG_CV    0x08  // Cardholder verification has been attempted
EMVL2_PROG_DA    0x10  // Data authentication has been attempted
EMVL2_PROG_SA    0x20  // Final application selection has been attempted
EMVL2_PROG_LOA   0x40  // List of AIDs processing has been attempted
EMVL2_PROG_PSE   0x80  // PSE processing has been attempted 


// Values for cryptography (CRYPT) byte [5]
// Bits 0 and 1 used to store authentication method as follows
EMVL2_CRYPT_NONE         0  // (00)  No method performed
EMVL2_CRYPT_SDA          1  // (01)  SDA attempted
EMVL2_CRYPT_DDA          2  // (10)  DDA attempted
EMVL2_CRYPT_GENAC_DDA    3  // (11)  Combined GenAC/DDA attempted

// Bits 2 - 7 are a bitmap defined as follows
EMVL2_CRYPT_DD2_REC   0x04  // (Cert 05) Signed dynamic data (DDA/GenAC2)
EMVL2_CRYPT_DD1_REC   0x08  // (Cert 05) Signed dynamic data (DDA - DDA/GenAC1)
EMVL2_CRYPT_PIN_REC   0x10  // (Cert 04) PIN encryption public key recovered
EMVL2_CRYPT_ICC_REC   0x20  // (Cert 04) ICC public key recovered
EMVL2_CRYPT_SSD_REC   0x40  // (Cert 03) Signed static data recovered
EMVL2_CRYPT_ISS_REC   0x80  // (Cert 02) Issuer public key recovered

//Values for Cardholder Verification (CVM) byte [6]
EMVL2_CVM_NONE        0x01  // Method "No CVM Required" requested
EMVL2_CVM_FAIL        0x02  // Method "Fail CVM Always" requested
EMVL2_CVM_SIGN        0x04  // Method "Signatrue" requested
EMVL2_CVM_OFPP        0x08  // Method "Offline Plain text PIN" requested
EMVL2_CVM_OFEP        0x10  // Method "Offline encrypted PIN" requested
EMVL2_CVM_ONEP        0x20  // Method "Online encrypted requested"
EMVL2_CVM_SIGRQD      0x40  // Txn should request signature at end of txn                             
EMVL2_CVM_PINKEY      0x80  // PIN encryption key identified and successfully recovered

//Values for Script processing (SCRIPT) byte [7]
EMVL2_SCRIPT_71SREC   0x01  // Type 71 script received
EMVL2_SCRIPT_72SREC   0x02  // Type 72 script received
EMVL2_SCRIPT_71PERR   0x04  // Type 71 script parsing error
EMVL2_SCRIPT_72PERR   0x08  // Type 72 script parsing error
EMVL2_SCRIPT_71SRUN   0x10  // Type 71 script run
EMVL2_SCRIPT_72SRUN   0x20  // Type 72 script run
EMVL2_SCRIPT_71SERR   0x40  // Type 71 script run error
EMVL2_SCRIPT_72SERR   0x80  // Type 72 script run error

// Values for Aux byte 1 [12]
EMVL2_CAPK_MISSING    0x01  // Cert auth public key not found
EMVL2_CAPK_EXPIRED    0x02  // Cert auth PK expired
EMVL2_CAPK_BADHASH    0x04  // Cert auth PK has incorrect hash value
EMVL2_IPKC_REVOKED    0x08  // Issuer public key certificate revoked
EMVL2_AUTH_RECBAD     0x10  // Record nominated for data authentication not present in tag 70 
EMVL2_HASH_OVRFLOW    0x20  // Hash input data memory overflow
EMVL2_TDH_OVRFLOW     0x40  // TDH Hash input buffer overflow 
EMVL2_CERT_MISMATCH   0x80  // CDA encrypted and clear certificate types do not match 


// Values for cryptography operation byte  [13]
EMVL2_CRYPTO_NODATA   0x00 // No cryptography operation requested
EMVL2_CRYPTO_STORE1   0x01 // Store signed card records
EMVL2_CRYPTO_STORE2   0x02 // Store SDA Tag List
EMVL2_CRYPTO_STORE3   0x03 // Store TDOL input data (CDOL1)
EMVL2_CRYPTO_STORE4   0x04 // Store TDOL input data (CDOL2)
EMVL2_CRYPTO_STORE5   0x05 // Store TDH data (PDOL)
EMVL2_CRYPTO_STORE6   0x06 // Store TDH data (CDOL1)
EMVL2_CRYPTO_STORE7   0x07 // Store TDH data (CDOL2)
EMVL2_CRYPTO_STORE8   0x08 // Store TDH data (GenAC response)
EMVL2_CRYPTO_HASH0    0x0A // Hash kernel checksum 
EMVL2_CRYPTO_HASH1    0x0B // Hash public key

EMVL2_CRYPTO_RSA2     0x10 // Recover issuer public key certificate 02
EMVL2_CRYPTO_HASH2    0x11 // Hash issuer public key certificate 02
EMVL2_CRYPTO_RSA3     0x20 // Recover signed static data certificate 03
EMVL2_CRYPTO_HASH3    0x21 // Hash signed static data certificate 03
EMVL2_CRYPTO_RSA4a    0x30 // Recover ICC public key certificate 04
EMVL2_CRYPTO_HASH4a   0x31 // Hash ICC public key certificate 04   
EMVL2_CRYPTO_RSA4b    0x40 // Recover PIN public key certificate 04
EMVL2_CRYPTO_HASH4b   0x41 // Hash PIN public key certificate 04
EMVL2_CRYPTO_RSA5a    0x50 // Recover DDA certificate 05
EMVL2_CRYPTO_HASH5a   0x51 // Hash DDA signed certificate 05
EMVL2_CRYPTO_RSA5b    0x60 // Recover CDA certificate 05 (GenAC1)
EMVL2_CRYPTO_HASH6    0x61 // Hash TDOL in CDOL1         (GenAC1) 
EMVL2_CRYPTO_HASH5c   0x62 // Hash CDA certificate 05    (GenAC1)
EMVL2_CRYPTO_HASH5b   0x63 // Hash CDA transaction data  (GenAC1)
EMVL2_CRYPTO_RSA5c    0x70 // Recover CDA certificate 05 (GenAC2)
EMVL2_CRYPTO_HASH7    0x71 // Hash TDOL in CDOL2         (GenAC1) 
EMVL2_CRYPTO_HASH5e   0x72 // Hash CDA certificate 05    (GenAC2)
EMVL2_CRYPTO_HASH5d   0x73 // Hash CDA transaction data  (GenAC2)
EMVL2_CRYPTO_RSA6     0x80 // Encrypt PIN using ICC public key
EMVL2_CRYPTO_RSA7     0x90 // Encrypt PIN using PIN public key

// Kernel checksum
EMVL2_CHKSUM_PARAM    0xA0 // Bad parameters supplied
EMVL2_CHKSUM_TTYPE    0xA1 // Terminal type (tag 9F35) absent
EMVL2_CHKSUM_TCAP     0xA2 // Terminal Capabilities (tag 9F33) absent
EMVL2_CHKSUM_ATCAP    0xA3 // Additional terminal capabilities absent
EMVL2_CHKSUM_APCAP    0xA4 // Application capabilities absent
EMVL2_CHKSUM_HASH1    0xA5 // Hash checksum op 1
EMVL2_CHKSUM_HASH2    0xA6 // Hash checksum op 2
EMVL2_CHKSUM_HASH3    0xA7 // Hash checksum op 3
EMVL2_CHKSUM_HASH4    0xA8 // Hash checksum op 4
EMVL2_CHKSUM_HASH5    0xA9 // Hash checksum op 5
EMVL2_CHKSUM_HASH6    0xAA // Hash checksum op 6
EMVL2_CHKSUM_RSA1     0xAB // RSA  checksum op 1
EMVL2_CHKSUM_RSA2     0xAC // RSA  checksum op 2



// Values for cryptography result byte [14] 
//      EMVL2_CRYPTO_NODATA   0x00 // No cryptography result available

// Pre RSA Checks
EMVL2_CRYPTO_NOCERT   0x01 // Encrypted certificate missing
EMVL2_CRYPTO_NOINDEX  0x02 // Public key index missing
EMVL2_CRYPTO_PKERR    0x03 // Public key error (See aux byte 1 for error details)
EMVL2_CRYPRO_BADLEN   0x04 // Data and key lengths differ
EMVL2_CRYPTO_NOEXP    0x05 // Public exponent required to validate hash is missing
#define EMVL2_CRYPRO_BADEXP   0x06 // Public exponent value other than 3 or 2^16+1

// RSA or Hash in progress
EMVL2_CRYPTO_WAITING  0x10 // Crypto calculation in progress

// Post RSA Errors
EMVL2_CRYPTO_NOTBC    0x20 // Footer is not 'BC'
EMVL2_CRYPTO_NOT6A    0x21 // Header is not '6A'
EMVL2_CRYPTO_BADCERT  0x22 // Incorrect certificate type '02, 03' etc
EMVL2_CRYPTO_BADPKALG 0x23 // Unknown public key algorithm
EMVL2_CRYPTO_CERTEXPD 0x24 // Certificate has expired
EMVL2_CRYPTO_BADPAN   0x25 // Decrypted and Transaction PANs differ
EMVL2_CRYPTO_BADCID   0x26 // Plain text and encrypted CIDs do not match
EMVL2_CRYPTO_NOREMAIN 0x27 // Required remainder missing
EMVL2_CRYPTO_DDSHORT  0x28 // ICC Dynamic Data too short
EMVL2_CRYPTO_DNSHORT  0x29 // ICC Dynamic Number too short 
EMVL2_CRYPTO_DNLONG   0x2A // ICC Dynamic Number too long 
EMVL2_CRYPTO_BADDATE  0x2B // Incorrect expiry date format
EMVL2_CRYPTO_CERTRVKD 0x2C // Iss PK Cert revoked 
                                   
//----------------------------0x30 // RFU
//----------------------------0x31 // RFU
//----------------------------0x32 // RFU
//----------------------------0x33 // RFU

// SHA Errors
EMVL2_CRYPTO_MEMFULL  0x40 // Memory overflow while storing hash input data
EMVL2_CRYPTO_BADHASH  0x41 // Decrypted and calculated hash values differ

// Final outcomes
EMVL2_CRYPTO_SUCCESS  0x90 // Certificate successfully recovered and validated
EMVL2_CRYPTO_DONE     0x91 // Crypto operation complete
                                   
// Bytes [15] and [16]
// These bytes hold the ZKA Step and Sub-step information which can be used to determine the 
// most recent smart card command transmitted by the kernel.
// Byte [15]    Byte [16]   SmartCard Command
// 20              xx       List of AIDs - Select
// 21              xx       PSE - Select
// 22              xx       PSE - Read Record
// 30              00       Final Select
// 40              00       Get Processing Options
// 50              xx       Read Record
// 60              00       Internal Authenticate
// 70              01       Get Data - PIN Try Counter
// 71              00       Get Challenge
// 72              10       Verify - Encrypted offline PIN
// 72              20       Verify - Plaintext PIN
// 80              01       Get Data - ATC
// 80              02       Get Data - LOATC
// 90              01       GenerateAC1 (Non CDA)
// 90              11       GenerateAC1 (CDA)
// 90              02       GenerateAC2 (Non CDA)
// 90              12       GenerateAC2 (CDA)
// A0              00       External Authenticate
// B1              xx       Type 71 (Critical) Issuer script command
// B2              xx       Type 72 (Non critical) Issuer script command
// Note
// 'xx' indicates a counter value which is incremented each time that the corresponding 
// smart card command is transmitted by the kernel.
 

// Aux 2 Debug byte [17]
EMVL2_ADT_FORMERR     0x01 // Insufficient memory to format additional tag store
EMVL2_ADT_MULTI       0x02 // Multiple tag definition detected
EMVL2_ADT_TAGERR      0x04 // Additional tag definition error
EMVL2_SPR_MEMFULL     0x08 // Script processing results memory full
EMVL2_CVM_MISSING     0x10 // CVM list missing or contains only X and Y values
EMVL2_CVM_FORMAT      0x20 // CVM list contains format error
// -----------------------    0x80 // RFU
// -----------------------    0x80 // RFU
```


# Appendix


## Serialized Interface Basics

This chapter contains programming guidelines for the ADK EMV Contactless framework.


### Basic Format

The EMV Application Layer is based on ISO 7816 or APDU. The command and response pairs have the following formats:


| CLA  | INS  | P1  | P2  | DATA   |
|  -------- | -------- | -------- | -------- | -------- |


**Figure: EMV Application Command**


| DATA  | SW1  | SW2   |
|  -------- | -------- | -------- |


**Figure: EMV Application Response**

The main features are:

* **CLA:** Class of command
* **INS:** Specific Instruction within a class
* **P1:** Parameter 1
* **P2:** Parameter 2
* **Data:** Command data or Response data
* **SW1:** Status word 1
* **SW2:** Status word 2.

Values for CLA, INS, P1, P2 or defined in [Tags for transport layer](group___a_d_k___t_r_a_n_s_p_o_r_t___t_a_g_s.md)


### Basic Flows

The command and response pair must have a standard flow:

![06_emv_ct_EMV_Application_Command_and_Response.png](.//06_emv_ct_EMV_Application_Command_and_Response.png)Figure: EMV Application Command and Response![06_emv_ct_EMV_Application_Command_and_Response.png](.//06_emv_ct_EMV_Application_Command_and_Response.png)Figure: EMV Application Command and Response![06_emv_ct_EMV_Application_Command_and_Response.png](.//06_emv_ct_EMV_Application_Command_and_Response.png)Figure: EMV Application Command and Response![06_emv_ct_EMV_Application_Command_and_Response.png](.//06_emv_ct_EMV_Application_Command_and_Response.png)Figure: EMV Application Command and Response

The Application Protocol must also have a callback flow required for EMV:

![07_emv_ct_EMV_Application_Command_and_Response_with_Callback.png](.//07_emv_ct_EMV_Application_Command_and_Response_with_Callback.png)Figure: EMV Application Command and Response with Callback![07_emv_ct_EMV_Application_Command_and_Response_with_Callback.png](.//07_emv_ct_EMV_Application_Command_and_Response_with_Callback.png)Figure: EMV Application Command and Response with Callback![07_emv_ct_EMV_Application_Command_and_Response_with_Callback.png](.//07_emv_ct_EMV_Application_Command_and_Response_with_Callback.png)Figure: EMV Application Command and Response with Callback![07_emv_ct_EMV_Application_Command_and_Response_with_Callback.png](.//07_emv_ct_EMV_Application_Command_and_Response_with_Callback.png)Figure: EMV Application Command and Response with Callback


### Status Words

The following standard status words are used:


| SW1  | SW2  | Meaning   |
|  -------- | -------- | -------- |
| x90  | x00  | All OK   |
| x90  | xXX  | Function executed xx = response code   |
| x91  | xXX  | Callback Request   |
| x92  | xXX  | Callback Response   |
| xXX  | xXX  | any other use case specific error code   |



### Data Coding

The data stream is BER-TLV (ISO/IEC 8825) encoded. Both Primitive and Constructed TLVs are used. All data are included in the xF0 Constructed Tag.


### P1-P2 Coding

These 2 bytes are coded as:

![06_emv_ctls_P1_P2_Coding.png](.//06_emv_ctls_P1_P2_Coding.png)Figure: P1-P2 Coding![06_emv_ctls_P1_P2_Coding.png](.//06_emv_ctls_P1_P2_Coding.png)Figure: P1-P2 Coding![06_emv_ctls_P1_P2_Coding.png](.//06_emv_ctls_P1_P2_Coding.png)Figure: P1-P2 Coding![06_emv_ctls_P1_P2_Coding.png](.//06_emv_ctls_P1_P2_Coding.png)Figure: P1-P2 Coding



### Conversion Of Data Objects

All tags defined by EMVCo follow the EMVCo rules. For other tags please follow the length in the function description. The following rules for length apply: byte = 1 byte, short = 2 byte, long = 4 byte. All serial data have in field[0] have the most significant value. Example:, follow the 9F02 for the EMV amount of a transaction, where in amount[5] is the cent value and in amount[0] the highest BCD number


## Configuration of application data: special transaction

See [EMV_CT_APPLIDATA_STRUCT::xuc_Special_TRX](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md#variable-xuc-special-trx)

Example how to interpret [EMV_ADK_TRX_CONFIG_DEFAULT](group___s_p_e_c_i_a_l___t_r_x_s.md#define-emv-adk-trx-config-default)



* Byte 1: 0x21
    * Higher nibble: 2 


```cpp
xuc_Special_TRX[EMV_ADK_EMV_ADK_MANUAL_REVERSAL_BYTE] EMV_ADK_MANUAL_REVERSAL_NIBBLE) == EMV_ADK_MANUAL_REVERSAL_B 
```

    * Lower nibble: 1 


```cpp
xuc_Special_TRX[EMV_ADK_REFUND_BYTE] EMV_ADK_REFUND_NIBBLE) == EMV_ADK_REFUND_YES 
```

* Byte 2: 0x20
    * Higher nibble: 2 


```cpp
xuc_Special_TRX[EMV_ADK_EMV_ADK_RESERVATION_BYTE] EMV_ADK_RESERVATION_NIBBLE) == EMV_ADK_RESERVATION_A_PLUS 
```

    * Lower nibble: 0 


```cpp
xuc_Special_TRX[EMV_ADK_TIP_BYTE] EMV_ADK_TIP_NIBBLE) == EMV_ADK_TIP_NO 
```

* Byte 3: 0x11
    * Higher nibble: 1 


```cpp
xuc_Special_TRX[EMV_ADK_REFERRAL_BYTE] EMV_ADK_REFERRAL_NIBBLE) == EMV_ADK_REFERRAL_YES 
```

    * Lower nibble: 1 


```cpp
xuc_Special_TRX[EMV_ADK_VOICEAUT_BYTE] EMV_ADK_VOICEAUT_NIBBLE) == EMV_ADK_VOICEAUT_YES 
```

* Byte 4: 0x00
    * Higher nibble: 0 

 not used
    * Lower nibble: 0 


```cpp
xuc_Special_TRX[EMV_ADK_FALLBACK_AFTER_CVM_BYTE] EMV_ADK_FALLBACK_AFTER_CVM_NIBBLE) == EMV_ADK_FALLBACK_AFTER_CVM_NO 
```

* Byte 5: 0x00
    * Higher nibble: 0 


```cpp
xuc_Special_TRX[EMV_ADK_IGNORE_CARD_ERROR_BYTE] EMV_ADK_IGNORE_CARD_ERROR_NIBBLE) == EMV_ADK_IGNORE_CARD_ERROR_NO 
```

    * Lower nibble: 0 

 not used


## Related Documentation

To learn more about the ADK EMV framework, please refer to the following documents:



* [ADK-EMV Contact Programmers Guide](./pg_emv_contact_users_guide.html) this document 
* [ADK-EMV Contactless Programmers Guide](./pg_emv_contactless_users_guide.html)
* [ADK-TEC Programmers Guide](./pg_tec_programmers_guide.html)
* [ADK-MSR Programmers Guide](./pg_msr_programmers_guide.html)
* [ADK-NFC Programmers Guide](./pg_nfc_users_guide.html)
* [ADK-SDI Programmers Guide](./pg_sdi_users_guide.html)
* [ADK-SDI-Client Programmers Guide](./pg_sdiclient_users_guide.html)


## Acronym Definitions


| Acronym  | Definitions   |
|  -------- | -------- |
| AAC  | Application Authentication Cryptogram   |
| AAR  | Application Authorization Referral   |
| AC  | Application Cryptogram   |
| ADK  | Application Development Kit   |
| AES  | Advanced Encryption Standard   |
| AFL  | Algorithm Application File Locator   |
| AID  | Application Identifier   |
| AIP  | Application Interchange Profile   |
| APDU  | Application Protocol Data Unit   |
| API  | Application Protocol Interface   |
| ARM  | Advanced RISC Machines   |
| ARQC  | Authorization Request Cryptogram   |
| ASI  | Application Selection Indicator   |
| ATR  | Answer To Reset   |
| BER-TLV  | Basic Encoding Rules - Tag Length Value   |
| CAPK  | Certification Authority Public Key as in the EMV standard   |
| CBC  | Cipher Block Chaining mode, as defined in ANSI X3.106   |
| CDA  | Combined Dynamic Data Authentication   |
| CID  | Cryptogram Information Data   |
| CVM  | Cardholder Verification Method   |
| DA  | Data Authentication   |
| DDA  | Dynamic Data Authentication   |
| DEA/DES  | Data Encryption Algorithm/Standard, as defined in ANSI X3.92   |
| DOL  | Data Object List   |
| DDOL  | Dynamic Data Authentication Data Object List   |
| DUKPT  | Derived Unique Key Per Transaction   |
| EMV  | Joint Europay, MasterCard and Visa Standard   |
| FCI  | File Control Information   |
| IAC  | Issuer Action Code   |
| ICC  | Integrated Circuit Card (Smart Card)   |
| IFD  | Interface Device   |
| MAC  | Message Authentication Code, as defined in ANSI X9.19   |
| MMU  | Memory Management Unit   |
| OS  | Operating System   |
| PAN  | Primary Account Number   |
| PED  | PIN Entry Device   |
| PDOL  | Processing Options Data Object List   |
| PIN  | Personal Identification Number   |
| POS  | Point-of-Sale   |
| PRD  | Product Requirement Document   |
| PSE  | Payment System Environment   |
| RID  | Registered Application Provider Identifier   |
| RSA  | Rivest, Shamir and Adelman offline data authentication public key algorithm   |
| SOC  | System on Chip   |
| SAM  | Secure Access Module   |
| SC  | Smart Card (Integrated Chip Card)   |
| SDA  | Static Data Authentication   |
| SDK  | Software Development Kit   |
| SW1, SW2  | Status Bytes   |
| TAC  | Terminal Action Code   |
| TC  | Transaction Certificate   |
| TDOL  | Transaction Certificate Data Object List   |
| TLV  | Tag Length Value   |
| TVR  | Terminal Verification Results   |
| UI  | User Interface   |
| USB  | Universal Serial Bus   |
| XML  | Extensible Markup Language   |



# Table of API functions

** Interface functions: **

| Topic   | CLA INS   | Structures respectively functions    |
|  -------- | -------- | -------- |
|  |
| INITIALIZE EMV FRAMEWORK  | 39 00  | [EMV_CT_Init_Framework()](group___f_u_n_c___i_n_i_t.md#define-emv-ct-init-framework), [EMV_CT_Exit_Framework()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-exit-framework) |
|  |
| CONFIGURE TERMINAL DATA  | 39 01  | [EMV_CT_TERMDATA_STRUCT](struct_e_m_v___c_t___t_e_r_m_d_a_t_a___s_t_r_u_c_t.md) | [EMV_CT_SetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-settermdata), [EMV_CT_GetTermData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-gettermdata) |
| CONFIGURE APPLICATION DATA  | 39 02  | [EMV_CT_APPLIDATA_STRUCT](struct_e_m_v___c_t___a_p_p_l_i_d_a_t_a___s_t_r_u_c_t.md) | [EMV_CT_SetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-setapplidata), [EMV_CT_GetAppliData()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getapplidata) |
| CONFIGURE CAP KEYS  | 39 03  | [EMV_CT_CAPKEY_STRUCT](struct_e_m_v___c_t___c_a_p_k_e_y___s_t_r_u_c_t.md) | [EMV_CT_StoreCAPKey()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-storecapkey), [EMV_CT_ReadCAPKeys()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-readcapkeys), [EMV_CT_GetCAPKeyInfo()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-getcapkeyinfo) |
| SAVE ADK CONFIG  | 39 04  |  | [EMV_CT_ApplyConfiguration()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-applyconfiguration) |
| GET ADK VERSION  | 39 05  | [EMV_CT_FRAMEWORK_GetVersion()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-framework-getversion), without CLA INS: [EMV_CT_CLIENT_GetVersion()](group___f_u_n_c___i_n_i_t.md#function-emv-ct-client-getversion) |
| SET VIRTUAL TERMINAL MAP  | 39 06  | [EMV_CT_MapVirtualTerminal()](group___f_u_n_c___c_o_n_f.md#function-emv-ct-mapvirtualterminal) |
|  |
| TRANSACTION COMMANDS  | 39 10  | [EMV_CT_SELECT_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t___s_t_r_u_c_t.md), [EMV_CT_SELECTRES_STRUCT](struct_e_m_v___c_t___s_e_l_e_c_t_r_e_s___s_t_r_u_c_t.md) | [EMV_CT_StartTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-starttransaction) |
| 39 11  | [EMV_CT_TRANSAC_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_a_c___s_t_r_u_c_t.md), [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md) | [EMV_CT_ContinueOffline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueoffline) |
| 39 12  | [EMV_CT_HOST_STRUCT](struct_e_m_v___c_t___h_o_s_t___s_t_r_u_c_t.md), [EMV_CT_TRANSRES_STRUCT](struct_e_m_v___c_t___t_r_a_n_s_r_e_s___s_t_r_u_c_t.md) | [EMV_CT_ContinueOnline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-continueonline) |
| 39 13  | optional: [EMV_CT_updateTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-updatetxntags) |
| 39 14  | optional: [EMV_CT_fetchTxnTags()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxntags) |
| 39 15  | optional: [EMV_CT_EndTransaction()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-endtransaction) |
| 39 16  | optional: [EMV_CT_GetCandidateData()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-getcandidatedata) |
| 39 17  | optional: [EMV_CT_CheckSupportedAID()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-checksupportedaid) |
| 39 18  | optional: [EMV_CT_fetchTxnDOL()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-fetchtxndol) |
| TRANSACTION CALLBACKS  |  | [EMV_CT_CALLBACK_FnT](adk__emv__contactless__programmers__guide_8dox.md#typedef-emv-ct-callback-fnt), PIN handling: [EMV_CT_Send_PIN_Offline()](group___f_u_n_c___f_l_o_w.md#function-emv-ct-send-pin-offline)
 |
| 
 |
| TRANSPARENT ICC COMMANDS  | 41 xx | [EMV_CT_SmartISO()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartiso) 41 03, [EMV_CT_SmartDetect()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartdetect) 41 01, [EMV_CT_SmartReset()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartreset) 41 02, [EMV_CT_SmartPowerOff()](group___f_u_n_c___i_c_c.md#function-emv-ct-smartpoweroff) 41 04    |

-------------------------------

Updated on 2025-06-17 at 11:52:29 +0100
