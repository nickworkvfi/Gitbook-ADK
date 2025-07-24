---
hidden: true
title: Modes of application data and CAP key settingConfiguration » Application data
---

[Macros](#define-members) \| [Typedefs](#typedef-members)

Collaboration diagram for Modes of application data and CAP key setting:

![](group___a_p_p_l_i___c_o_n_f___m_o_d_e.png)

|  |  |
|----|----|
| Macros |  |
| #define  | [EMV_ADK_SET_ONE_RECORD](#ga23c45127a7eea719c5e7a1937e069393)   1 |
|   | Set record for 1 AID, If the AID exists, the parameters included are updated, not included parameters will be untouched. If the AID does not exist, not included parameters will be set with ADK default values. It is highly recommended to configure all parameters on initial setup. Remark: If the AID is existing and the AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are updated \--\> if the AIDs need to be reconfigured independently it is necessary to delete this AID and confgure again from scratch, see [EMV_ADK_FORCE_NEW_PARAMSET](#ga03b37fb330503ac5075d026a14dea68b). [More\...](#ga23c45127a7eea719c5e7a1937e069393)<br/> |
| #define  | [EMV_ADK_SET_TWO_RECORDS](#gada23f8ea45fb3bff71514365e7e7eb81)   2 |
|   | Set same record for 2 AIDS. [More\...](#gada23f8ea45fb3bff71514365e7e7eb81)<br/> |
| #define  | [EMV_ADK_SET_THREE_RECORDS](#ga531217492bce96564682f663bf2dd6db)   3 |
|   | Set same record for 3 AIDs. [More\...](#ga531217492bce96564682f663bf2dd6db)<br/> |
| #define  | [EMV_ADK_SET_FOUR_RECORDS](#ga7e6dc313c4fc78654280203a33b824d5)   4 |
|   | Set same record for 4 AIDs. [More\...](#ga7e6dc313c4fc78654280203a33b824d5)<br/> |
| #define  | [EMV_ADK_SET_FIVE_RECORDS](#ga95cbf6c47ee5e570bc4a0e58c36b035f)   5 |
|   | Set same record for 5 AIDs. [More\...](#ga95cbf6c47ee5e570bc4a0e58c36b035f)<br/> |
| #define  | [EMV_ADK_CLEAR_ONE_RECORD](#gac718528312e36e056ff6e19624871716)   0x10 |
|   | Clear data of an AID record by AID. Remark: If the same AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are deleted \--\> one record in this respect means: one AID with its multiple parameters sets, see [EMV_ADK_FORCE_NEW_PARAMSET](#ga03b37fb330503ac5075d026a14dea68b). [More\...](#gac718528312e36e056ff6e19624871716)<br/> |
| #define  | [EMV_ADK_CLEAR_ALL_RECORDS](#ga7bc8a670f539230cb315ba2cb7442ea8)   0x20 |
|   | Clear all data. [More\...](#ga7bc8a670f539230cb315ba2cb7442ea8)<br/> |
| #define  | [EMV_ADK_FORCE_NEW_PARAMSET](#ga03b37fb330503ac5075d026a14dea68b)   0x30 |
|   | This is for the CTLS EntryPoint \--\> Force a new parameterset for an existing AID but having different kernel ID. This is for Velocity CTLS only since the entry point architecture allows to have different kernels (and therefore parameter sets) used for the same AID. So each AID can be configured mutiple times. [More\...](#ga03b37fb330503ac5075d026a14dea68b)<br/> |
| #define  | [EMV_ADK_TEMP_UPDATE](#ga9014b9bb4c7b8ebf61ee98a26a7666ce)   0xF0 |

|  |  |
|----|----|
| Typedefs |  |
| typedef unsigned char  | [EMV_ADK_HANDLE_RECORD_TYPE](#gadcf8867daf908d411db4651db09aaa54) |
|   | Type for handle application data setting (SetAppliData()) [More\...](#gadcf8867daf908d411db4651db09aaa54)<br/> |

## DetailedDescription {#detailed-description}

## MacroDefinition Documentation {#macro-definition-documentation}

## EMV_ADK_CLEAR_ALL_RECORDS <a href="#ga7bc8a670f539230cb315ba2cb7442ea8" id="ga7bc8a670f539230cb315ba2cb7442ea8"></a>

<p>#define EMV_ADK_CLEAR_ALL_RECORDS   0x20</p>

Clear all data.

## EMV_ADK_CLEAR_ONE_RECORD <a href="#gac718528312e36e056ff6e19624871716" id="gac718528312e36e056ff6e19624871716"></a>

<p>#define EMV_ADK_CLEAR_ONE_RECORD   0x10</p>

Clear data of an AID record by AID. Remark: If the same AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are deleted \--\> one record in this respect means: one AID with its multiple parameters sets, see [EMV_ADK_FORCE_NEW_PARAMSET](#ga03b37fb330503ac5075d026a14dea68b).

## EMV_ADK_FORCE_NEW_PARAMSET <a href="#ga03b37fb330503ac5075d026a14dea68b" id="ga03b37fb330503ac5075d026a14dea68b"></a>

<p>#define EMV_ADK_FORCE_NEW_PARAMSET   0x30</p>

This is for the CTLS EntryPoint \--\> Force a new parameterset for an existing AID but having different kernel ID. This is for Velocity CTLS only since the entry point architecture allows to have different kernels (and therefore parameter sets) used for the same AID. So each AID can be configured mutiple times.

## EMV_ADK_SET_FIVE_RECORDS <a href="#ga95cbf6c47ee5e570bc4a0e58c36b035f" id="ga95cbf6c47ee5e570bc4a0e58c36b035f"></a>

<p>#define EMV_ADK_SET_FIVE_RECORDS   5</p>

Set same record for 5 AIDs.

## EMV_ADK_SET_FOUR_RECORDS <a href="#ga7e6dc313c4fc78654280203a33b824d5" id="ga7e6dc313c4fc78654280203a33b824d5"></a>

<p>#define EMV_ADK_SET_FOUR_RECORDS   4</p>

Set same record for 4 AIDs.

## EMV_ADK_SET_ONE_RECORD <a href="#ga23c45127a7eea719c5e7a1937e069393" id="ga23c45127a7eea719c5e7a1937e069393"></a>

<p>#define EMV_ADK_SET_ONE_RECORD   1</p>

Set record for 1 AID, If the AID exists, the parameters included are updated, not included parameters will be untouched. If the AID does not exist, not included parameters will be set with ADK default values. It is highly recommended to configure all parameters on initial setup. Remark: If the AID is existing and the AID is configured with multiple param sets (CTLS velocity only) all instances of this AID are updated \--\> if the AIDs need to be reconfigured independently it is necessary to delete this AID and confgure again from scratch, see [EMV_ADK_FORCE_NEW_PARAMSET](#ga03b37fb330503ac5075d026a14dea68b).

## EMV_ADK_SET_THREE_RECORDS <a href="#ga531217492bce96564682f663bf2dd6db" id="ga531217492bce96564682f663bf2dd6db"></a>

<p>#define EMV_ADK_SET_THREE_RECORDS   3</p>

Set same record for 3 AIDs.

## EMV_ADK_SET_TWO_RECORDS <a href="#gada23f8ea45fb3bff71514365e7e7eb81" id="gada23f8ea45fb3bff71514365e7e7eb81"></a>

<p>#define EMV_ADK_SET_TWO_RECORDS   2</p>

Set same record for 2 AIDS.

## EMV_ADK_TEMP_UPDATE <a href="#ga9014b9bb4c7b8ebf61ee98a26a7666ce" id="ga9014b9bb4c7b8ebf61ee98a26a7666ce"></a>

<p>#define EMV_ADK_TEMP_UPDATE   0xF0</p>

Temporary dynamic update of AID data during a transaction
This can be used for updating data during a transaction, e.g. if the transaction is interrupted with the parameter `TxnSteps`. The stored config in the XML files will NOT be touched
After transaction initiation: It is activated when having finished the application selection == Final Select is done
Before the final select any temporary updated data will be overwritten with the permanent AID parameters, which are copied for the current transaction after Final Select was performed.

## TypedefDocumentation {#typedef-documentation}

## EMV_ADK_HANDLE_RECORD_TYPE <a href="#gadcf8867daf908d411db4651db09aaa54" id="gadcf8867daf908d411db4651db09aaa54"></a>

<p>typedef unsigned char [EMV_ADK_HANDLE_RECORD_TYPE](#gadcf8867daf908d411db4651db09aaa54)</p>

Type for handle application data setting (SetAppliData())
