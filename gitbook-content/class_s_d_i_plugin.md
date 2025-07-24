---
hidden: true
title: SDIPlugin Class Referenceabstract
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods)

`#include <`<a href="sdiplugin_8h_source.md">sdiplugin.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [SDITrigger](#a82c0da164c73dfba432f58136b1d3dab) {<br/>  [SDITrigger_None](#a82c0da164c73dfba432f58136b1d3daba3322b03f5963b663a7fd42a897370404) = 0, [SDITrigger_CardDetected](#a82c0da164c73dfba432f58136b1d3dabab2f1a65967bfd3e2c5573ea39496636f) = 1 \<\< 0, [SDITrigger_EMVConfig](#a82c0da164c73dfba432f58136b1d3daba7d1ebf14a6c946b0963f21f9bbe8b99c) = 1 \<\< 1, [SDITrigger_SDIConfig](#a82c0da164c73dfba432f58136b1d3daba48be46d570bed852705c3d424341c5c4) = 1 \<\< 2,<br/>  [SDITrigger_CardDataAvail](#a82c0da164c73dfba432f58136b1d3dabad1d714b962d5eec01039433e2c1b2558) = 1 \<\< 3, [SDITrigger_MsgDataAvail](#a82c0da164c73dfba432f58136b1d3daba5cbb4bc092032e68369de6e7723c939c) = 1 \<\< 4, [SDITrigger_EmvCndListCbk](#a82c0da164c73dfba432f58136b1d3dabae58d3b43266eada5e017367c38778779) = 1 \<\< 5, [SDITrigger_CardId](#a82c0da164c73dfba432f58136b1d3daba674dc789b9f584d8ce1632184ca3163b) = 1 \<\< 6,<br/>  [SDITrigger_FactoryReset](#a82c0da164c73dfba432f58136b1d3daba85c7dbf695f606dedbdd8805638f1832) = 1 \<\< 7, [SDITrigger_ExternalCSD](#a82c0da164c73dfba432f58136b1d3dabafe2a2ccb7d75044bde896b7be1701c6c) = 1 \<\< 8, [SDITrigger_ExtDataStore](#a82c0da164c73dfba432f58136b1d3daba2d3b27869247ee3f0437c4136d9e5040) = 1 \<\< 9, [SDITrigger_ManualPan](#a82c0da164c73dfba432f58136b1d3dabae84cca0164725d42b3e18131887f703d) = 1 \<\< 10,<br/>  [SDITrigger_CTLSSmartISO](#a82c0da164c73dfba432f58136b1d3dababb43247f17838bb28862e8af4113c136) = 1 \<\< 11<br/>} |
| enum   | [SDIExtension](#ac54b73bc0f666acecb26aec563933dab) { [SDIExt_TrustedConnection](#ac54b73bc0f666acecb26aec563933dabaf68f9bf3b8cf2c74c727593f815b2ad5) = 0, [SDIExt_PCI_Version](#ac54b73bc0f666acecb26aec563933daba06c111cc8a22f1561b77db6fc6ce4273) = 1, [SDIExt_VCL_Callback](#ac54b73bc0f666acecb26aec563933dabadfaf20e6f6b758be305a019675c7b015) = 4 } |
| typedef std::vector\< unsigned char \>  | [Buffer](#a8f502862992b828150656db48c9ce5fc) |

|  |  |
|----|----|
| Public Member Functions |  |
| virtual  | [\~SDIPlugin](#ac61cfcf3cd3dab4e87ac55016184d452) () |
| virtual const char \*  | [name](#a1a30ad8f276a2310571c36239554831a) () const =0 |
| virtual void  | [version](#a796f4754af60a767410df08daef5dc06) (int &major, int &minor, int &patch) const =0 |
| virtual int  | [moduleID](#a8d2bc1f2997927e41cff153194099c40) () const =0 |
| virtual unsigned  | [supportedTriggers](#ae369ce7304446cc914cb2f62a3f22307) () const =0 |
| virtual int  | [processMessage](#a3c7b193aa5b72dc9e8a627619230cf2f) ([Buffer](#a8f502862992b828150656db48c9ce5fc) &result, int cmd, const [Buffer](#a8f502862992b828150656db48c9ce5fc) &message)=0 |
| virtual int  | [processTrigger](#a0f730d467656f854300839d8013f9205) ([Buffer](#a8f502862992b828150656db48c9ce5fc) &result, unsigned triggerID, const [Buffer](#a8f502862992b828150656db48c9ce5fc) &message)=0 |
| virtual void \*  | [openExtension](#aae0f81c75ffaeacd5af7bbe3b4b86062) (int ext_number)=0 |
| virtual void  | [closeExtension](#a07bbd9c2e7fc03a0f408560bf09d7091) (void \*extension)=0 |

## DetailedDescription {#detailed-description}

Abstract <a href="class_s_d_i_plugin.md">SDIPlugin</a> base class

## MemberTypedef Documentation {#member-typedef-documentation}

## Buffer <a href="#a8f502862992b828150656db48c9ce5fc" id="a8f502862992b828150656db48c9ce5fc"></a>

<p>typedef std::vector\<unsigned char\> [Buffer](#a8f502862992b828150656db48c9ce5fc)</p>

buffer type

## MemberEnumeration Documentation {#member-enumeration-documentation}

## SDIExtension <a href="#ac54b73bc0f666acecb26aec563933dab" id="ac54b73bc0f666acecb26aec563933dab"></a>

<p>enum [SDIExtension](#ac54b73bc0f666acecb26aec563933dab)</p>

SDI plugin extensions

| Enumerator |  |
|----|----|
| SDIExt_TrustedConnection  | <p>Provide the information to the plugin if the SDI connection is trusted or not. This is actually used for trigger SDITrigger_EMVConfig. The [openExtension()](#aae0f81c75ffaeacd5af7bbe3b4b86062) returns a pointer to bool in that case. !!! NOTE: SDIExt_TrustedConnection is DEPRECATED and no longer invoked by SDI !!\!</p> |
| SDIExt_PCI_Version  | <p>Obtain PCI version of the plugin (if available). [openExtension()](#aae0f81c75ffaeacd5af7bbe3b4b86062) call returns C-string (const char\*) containing PCI version string. If there is no PCI versioning for the plugin, NULL is returned.</p> |
| SDIExt_VCL_Callback  | <p>Provide a function pointer (of type Vcl_Encryption_Callback_Setter) for VCL encryption by SDI. This is used for plugins that register for trigger SDITrigger_ExtDataStore. [openExtension()](#aae0f81c75ffaeacd5af7bbe3b4b86062) call returns a function pointer for which SDI will set the callback function for VCL encryption. If this functionality is not supported by the plugin, NULL is returned.</p> |

## SDITrigger <a href="#a82c0da164c73dfba432f58136b1d3dab" id="a82c0da164c73dfba432f58136b1d3dab"></a>

<p>enum [SDITrigger](#a82c0da164c73dfba432f58136b1d3dab)</p>

SDI plugin trigger IDs in the form 1\<\<n

| Enumerator |  |
|----|----|
| SDITrigger_None  | <p>No trigger</p> |
| SDITrigger_CardDetected  | <p>Card has been swiped after a card request was sent (2301)</p> |
| SDITrigger_EMVConfig  | <p>EMV config command issued by the application</p> |
| SDITrigger_SDIConfig  | <p>SDI config file upload command issued by the application</p> |
| SDITrigger_CardDataAvail  | <p>SDI server has detected track equivalent 2 data</p> |
| SDITrigger_MsgDataAvail  | <p>SDI server has created host message data</p> |
| SDITrigger_EmvCndListCbk  | <p>EMV Reduce Candidate List callback has been called</p> |
| SDITrigger_CardId  | <p>SDI server delivers a PAN to generate a unique Card Id</p> |
| SDITrigger_FactoryReset  | <p>SDI server performs a factory reset and requests the plugin the delete persistent data (e.g. files created during runtime) and to do a reinitialization with defaults</p> |
| SDITrigger_ExternalCSD  | <p>Provide extern entered PAN to the SDI server for PIN block generation</p> |
| SDITrigger_ExtDataStore  | <p>Cardholder Sensitive Data not available in the SDI Data Store, try to get them from the plugin Following tags are provided to the plugin:</p> • F0/DF3B: Options, 4 bytes. Byte 4 bit 1: Clear text flag. Relevant only in case VTP is enabled If set to true and VTP is enabled, the plugin has to deliver clear text data (VTP decrypted) Per default, when VTP is enabled, the plugin has to deliver VTP encrypted data. Byte 4 bit 2: Request to clear sensitive data. Called by SDI Server on a Clear Data Store 29-03 command |
| SDITrigger_ManualPan  | <p>Provide entered PAN during manual card data entry for further processing, e.g whitelist check</p> |
| SDITrigger_CTLSSmartISO  | <p>Redirect EMV_CTLS_SmartISO to the plugin instead of EMV ADK</p> |

## Constructor& Destructor Documentation

## \~SDIPlugin() <a href="#ac61cfcf3cd3dab4e87ac55016184d452" id="ac61cfcf3cd3dab4e87ac55016184d452"></a>

<p>virtual \~<a href="class_s_d_i_plugin.md">SDIPlugin</a></p>

inlinevirtual

Destructor

## MemberFunction Documentation {#member-function-documentation}

## closeExtension() <a href="#a07bbd9c2e7fc03a0f408560bf09d7091" id="a07bbd9c2e7fc03a0f408560bf09d7091"></a>

<p>virtual void closeExtension</p>

pure virtual

close extension

**Parameters**

\[in\] **extension** pointer as returned from openExtension

## moduleID() <a href="#a8d2bc1f2997927e41cff153194099c40" id="a8d2bc1f2997927e41cff153194099c40"></a>

<p>virtual int moduleID</p>

pure virtual

obtain module ID that identifies the plugin (parameter p1 in the SDI interface)

### Returns

module ID

## name() <a href="#a1a30ad8f276a2310571c36239554831a" id="a1a30ad8f276a2310571c36239554831a"></a>

<p>virtual const char\* name</p>

pure virtual

### Returns

String containing the name of the plugin

## openExtension() <a href="#aae0f81c75ffaeacd5af7bbe3b4b86062" id="aae0f81c75ffaeacd5af7bbe3b4b86062"></a>

<p>virtual void\* openExtension</p>

pure virtual

open extension. Extensions need to be closed using [closeExtension()](#a07bbd9c2e7fc03a0f408560bf09d7091) when no longer needed.

**Parameters**

\[in\] **ext_number** extension number

### Returns

pointer to extension or NULL if the extension is not known

## processMessage() <a href="#a3c7b193aa5b72dc9e8a627619230cf2f" id="a3c7b193aa5b72dc9e8a627619230cf2f"></a>

<p>virtual int processMessage</p>

pure virtual

process SDI message sent by application

**Parameters**

\[out\] **result** buffer containing the result of the operation. The plugin shall write the SW1/SW2 bytes in the first two bytes of the buffer, followed by the data to be returned to the application. It\'s recommended to use BER-TLV format for encoding the returned data, and enclose the data in tag F0. If the plugin does not return the SW1/SW2 bytes then SDI will ignore the result buffer and return 6802 (\"Invalid result returned from the plugin\") to the application. \[in\] **cmd** P1 parameter in the SDI interface that identifies the function \[in\] **message** input message recommended is to use BER-TLV format for encoding the content of the buffer

### Returns

result code, e.g. 0x9000 for OK

## processTrigger() <a href="#a0f730d467656f854300839d8013f9205" id="a0f730d467656f854300839d8013f9205"></a>

<p>virtual int processTrigger</p>

pure virtual

process trigger ID invoked from SDI server

**Parameters**

\[out\] **result** buffer containing the result of the operation, recommended is to use BER-TLV format for encoding the content of the buffer \[in\] **triggerID** trigger ID \[in\] **message** input input format depends on the triggerID.

### Returns

result code, e.g. 0x9000 for OK

## supportedTriggers() <a href="#ae369ce7304446cc914cb2f62a3f22307" id="ae369ce7304446cc914cb2f62a3f22307"></a>

<p>virtual unsigned supportedTriggers</p>

pure virtual

### Returns

trigger ID mask that are supported by this plugin. This is the or-ed value of all supported SDITriggers.

## version() <a href="#a796f4754af60a767410df08daef5dc06" id="a796f4754af60a767410df08daef5dc06"></a>

<p>virtual void version</p>

pure virtual

obtain version information

**Parameters**

\[out\] **major** major version \[out\] **minor** minor version \[out\] **patch** patch version

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sdi/src/<a href="sdiplugin_8h_source.md">sdiplugin.h</a>
