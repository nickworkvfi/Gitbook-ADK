---
hidden: true
title: CTransactionValue Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods) \| [Friends](#friends)

`#include <`<a href="_c_transaction_data_8h_source.md">CTransactionData.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [ePermissionFlags](#ab3f9770819064256df1acad2b1f099e7) {<br/>  [PermPrivate](#ab3f9770819064256df1acad2b1f099e7a365dcdfb1a6183338e17c067a7b15e09) = 0x00, [PermWriteAble](#ab3f9770819064256df1acad2b1f099e7a2c67698e87a41dc88b9e0a2d241f7b2a) = 0x01, [PermReadAble](#ab3f9770819064256df1acad2b1f099e7a3340371e06537abe47876a1a201225d8) = 0x10, [PermWriteOnly](#ab3f9770819064256df1acad2b1f099e7a7eab1f38a3daadc01722b33529f20b23) = PermWriteAble,<br/>  [PermReadOnly](#ab3f9770819064256df1acad2b1f099e7add42429b4665a58e6c0c4cd4965c729d) = PermReadAble, [PermReadWrite](#ab3f9770819064256df1acad2b1f099e7a4079243ab3bb9bc6b80ba7d25fb42328) = PermWriteAble \| PermReadAble, [PermDefault](#ab3f9770819064256df1acad2b1f099e7a805e399a7a4f86c2e94866b45686a309) = PermReadWrite<br/>} |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [CTransactionValue](#a16f97cab11e0659925387b4f056e62cf) () |
|   | [CTransactionValue](#a98dca0763539fe678a221169a5c95777) (const std::string &s) |
|   | [CTransactionValue](#a0630fb4abee77fdd49ca731eabfa32a6) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &json) |
|   | [CTransactionValue](#af058f8c2e7f00ae4a5f2fff0a872b534) (const int &data) |
|   | [CTransactionValue](#a39b15e9e1071e898eced9cb50a7e5003) (const std::vector\< uint8_t \> &vData) |
|   | [CTransactionValue](#af05ce7cba0a3b85c08abfb8ba23a98cb) (const uint8_t \*pData, size_t len) |
|   | [\~CTransactionValue](#a806daf50cb4173a2ae9e5f907e5b3a19) () |
| std::string  | [dump](#a7de861082da81700dd1481385268c4ff) () const |
| void  | [load](#a52363cd24719cd696e4b260fdac780db) (const std::string &jsonString) |
| void  | [load](#aa644937495f6f415d28945f59a168c47) (const <a href="classvfiipc_1_1_j_s_object.md">vfiipc::JSObject</a> &js) |
| bool  | [getBool](#a56e70a2d753746f23f8bfb677a030086) () const |
| int  | [getInt](#aaef76f1478cdc2c18950b75e33afcece) () const |
| std::string  | [getString](#a23bdc20544ca28878b1ffea144ac2730) () const |
| std::vector\< uint8_t \>  | [getBuffer](#a2a569652fed85f4bd06ee9844e164598) () const |
| std::vector\< uint8_t \>  | [getRaw](#a03b81c8eaf741faeab4235ae397eedc5) () const |
| void  | [cleanBuffer](#a750be53afe22b006b8b36b42f3c12323) () |
|   | [operator bool](#a67b76affb3b5d35fa419ac234144038b) () const |
|   | [operator int](#a48d27bd92e68c69527589ea65a9af69f) () const |
|   | [operator uint8_t](#a700c88abf744146bbcfd835905755748) () const |
|   | [operator uint32_t](#aa5b4a78975082f121bd1c84d1a20c34e) () const |
|   | [operator std::string](#a3888dcd59dd5acd1ca5b9bee4c2e252a) () const |
|   | [operator std::vector\< uint8_t \>](#a729f94ab32e7ceb581c896c4f45913b0) () const |
| void  | [restrictPermissions](#a38fbeccfeda816ba75d642e654899fee) (<a href="namespacecom__adksec__cmd.md#af79ae13c5f9ec8424f44764288144041">bitMask_t</a> allowedPermissions) |
| <a href="namespacecom__adksec__cmd.md#af79ae13c5f9ec8424f44764288144041">bitMask_t</a>  | [getPermissions](#a94afb4a8b2432c56c395d7ec37b38f3a) () const |
| bool  | [isWritable](#a85e799a990b59dd38f79cd2021e6d9c4) () const |
| bool  | [isReadable](#ad8d5f051609fd46406407e5fc33eb3ce) () const |

|  |  |
|----|----|
| Static Public Member Functions |  |
| static bool  | [isWritable](#aa30eff3be11ca2eac85d109748d71032) (<a href="namespacecom__adksec__cmd.md#af79ae13c5f9ec8424f44764288144041">bitMask_t</a> permissionFlags) |
| static bool  | [isReadable](#a542ca0672a5dce96acbb98e170b4d4a3) (<a href="namespacecom__adksec__cmd.md#af79ae13c5f9ec8424f44764288144041">bitMask_t</a> permissionFlags) |

|         |                                                        |
|---------|--------------------------------------------------------|
| Friends |                                                        |
| class   | [CTransactionData](#aaae80603fff21bf5331f90196242b85a) |

## MemberEnumeration Documentation {#member-enumeration-documentation}

## ePermissionFlags <a href="#ab3f9770819064256df1acad2b1f099e7" id="ab3f9770819064256df1acad2b1f099e7"></a>

<p>enum [ePermissionFlags](#ab3f9770819064256df1acad2b1f099e7)</p>

| Enumerator     |                                          |
|----------------|------------------------------------------|
| PermPrivate    |                                          |
| PermWriteAble  |                                          |
| PermReadAble   |                                          |
| PermWriteOnly  | <p>01 - write only</p> |
| PermReadOnly   | <p>10 - read only</p>  |
| PermReadWrite  | <p>11 - read/write</p> |
| PermDefault    |                                          |

## Constructor& Destructor Documentation

## CTransactionValue()\[1/6\] <a href="#a16f97cab11e0659925387b4f056e62cf" id="a16f97cab11e0659925387b4f056e62cf"></a> {#ctransactionvalue-16}

<p><a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a></p>

## CTransactionValue()\[2/6\] <a href="#a98dca0763539fe678a221169a5c95777" id="a98dca0763539fe678a221169a5c95777"></a> {#ctransactionvalue-26}

<p><a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a></p>

## CTransactionValue()\[3/6\] <a href="#a0630fb4abee77fdd49ca731eabfa32a6" id="a0630fb4abee77fdd49ca731eabfa32a6"></a> {#ctransactionvalue-36}

<p><a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a></p>

## CTransactionValue()\[4/6\] <a href="#af058f8c2e7f00ae4a5f2fff0a872b534" id="af058f8c2e7f00ae4a5f2fff0a872b534"></a> {#ctransactionvalue-46}

<p><a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a></p>

## CTransactionValue()\[5/6\] <a href="#a39b15e9e1071e898eced9cb50a7e5003" id="a39b15e9e1071e898eced9cb50a7e5003"></a> {#ctransactionvalue-56}

<p><a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a></p>

## CTransactionValue()\[6/6\] <a href="#af05ce7cba0a3b85c08abfb8ba23a98cb" id="af05ce7cba0a3b85c08abfb8ba23a98cb"></a> {#ctransactionvalue-66}

<p><a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a></p>

## \~CTransactionValue() <a href="#a806daf50cb4173a2ae9e5f907e5b3a19" id="a806daf50cb4173a2ae9e5f907e5b3a19"></a>

<p>\~<a href="classcom__adksec__cmd_1_1_c_transaction_value.md">CTransactionValue</a></p>

## MemberFunction Documentation {#member-function-documentation}

## cleanBuffer() <a href="#a750be53afe22b006b8b36b42f3c12323" id="a750be53afe22b006b8b36b42f3c12323"></a>

<p>void cleanBuffer</p>

## dump() <a href="#a7de861082da81700dd1481385268c4ff" id="a7de861082da81700dd1481385268c4ff"></a>

<p>std::string dump</p>

get a json representation of the object

### Returns

JSON string

## getBool() <a href="#a56e70a2d753746f23f8bfb677a030086" id="a56e70a2d753746f23f8bfb677a030086"></a>

<p>bool getBool</p>

## getBuffer() <a href="#a2a569652fed85f4bd06ee9844e164598" id="a2a569652fed85f4bd06ee9844e164598"></a>

<p>std::vector\<uint8_t\> getBuffer</p>

## getInt() <a href="#aaef76f1478cdc2c18950b75e33afcece" id="aaef76f1478cdc2c18950b75e33afcece"></a>

<p>int getInt</p>

## getPermissions() <a href="#a94afb4a8b2432c56c395d7ec37b38f3a" id="a94afb4a8b2432c56c395d7ec37b38f3a"></a>

<p><a href="namespacecom__adksec__cmd.md#af79ae13c5f9ec8424f44764288144041">bitMask_t</a> getPermissions</p>

inline

provide the Permissions of this value

### Returns

Permissions

## getRaw() <a href="#a03b81c8eaf741faeab4235ae397eedc5" id="a03b81c8eaf741faeab4235ae397eedc5"></a>

<p>std::vector\<uint8_t\> getRaw</p>

## getString() <a href="#a23bdc20544ca28878b1ffea144ac2730" id="a23bdc20544ca28878b1ffea144ac2730"></a>

<p>std::string getString</p>

## isReadable()\[1/2\] <a href="#ad8d5f051609fd46406407e5fc33eb3ce" id="ad8d5f051609fd46406407e5fc33eb3ce"></a> {#isreadable-12}

<p>bool isReadable</p>

inline

## isReadable()\[2/2\] <a href="#a542ca0672a5dce96acbb98e170b4d4a3" id="a542ca0672a5dce96acbb98e170b4d4a3"></a> {#isreadable-22}

<p>static bool isReadable</p>

inlinestatic

test if reading is allowed

**Parameters**

**permissionFlags** value of ePermissionFlags

### Returns

## isWritable()\[1/2\] <a href="#a85e799a990b59dd38f79cd2021e6d9c4" id="a85e799a990b59dd38f79cd2021e6d9c4"></a> {#iswritable-12}

<p>bool isWritable</p>

inline

## isWritable()\[2/2\] <a href="#aa30eff3be11ca2eac85d109748d71032" id="aa30eff3be11ca2eac85d109748d71032"></a> {#iswritable-22}

<p>static bool isWritable</p>

inlinestatic

test if writing is allowed

**Parameters**

**permissionFlags** value of ePermissionFlags

### Returns

## load()\[1/2\] <a href="#a52363cd24719cd696e4b260fdac780db" id="a52363cd24719cd696e4b260fdac780db"></a> {#load-12}

<p>void load</p>

## load()\[2/2\] <a href="#aa644937495f6f415d28945f59a168c47" id="aa644937495f6f415d28945f59a168c47"></a> {#load-22}

<p>void load</p>

## operatorbool() <a href="#a67b76affb3b5d35fa419ac234144038b" id="a67b76affb3b5d35fa419ac234144038b"></a> {#operator-bool}

<p>operator bool</p>

inline

## operatorint() <a href="#a48d27bd92e68c69527589ea65a9af69f" id="a48d27bd92e68c69527589ea65a9af69f"></a> {#operator-int}

<p>operator int</p>

inline

## operatorstd::string() <a href="#a3888dcd59dd5acd1ca5b9bee4c2e252a" id="a3888dcd59dd5acd1ca5b9bee4c2e252a"></a> {#operator-stdstring}

<p>operator std::string</p>

inline

## operatorstd::vector\< uint8_t \>() <a href="#a729f94ab32e7ceb581c896c4f45913b0" id="a729f94ab32e7ceb581c896c4f45913b0"></a> {#operator-stdvector-uint8_t}

<p>operator std::vector\< uint8_t \></p>

inline

## operatoruint32_t() <a href="#aa5b4a78975082f121bd1c84d1a20c34e" id="aa5b4a78975082f121bd1c84d1a20c34e"></a> {#operator-uint32_t}

<p>operator uint32_t</p>

inline

## operatoruint8_t() <a href="#a700c88abf744146bbcfd835905755748" id="a700c88abf744146bbcfd835905755748"></a> {#operator-uint8_t}

<p>operator uint8_t</p>

inline

## restrictPermissions() <a href="#a38fbeccfeda816ba75d642e654899fee" id="a38fbeccfeda816ba75d642e654899fee"></a>

<p>void restrictPermissions</p>

inline

reduce the Permissions of this value

{% hint style="info" %}
it\'s not possible to grant additional permissions again after they have been restricted
{% endhint %} **Parameters**

**allowedPermissions**

## FriendsAnd Related Function Documentation {#friends-and-related-function-documentation}

## CTransactionData <a href="#aaae80603fff21bf5331f90196242b85a" id="aaae80603fff21bf5331f90196242b85a"></a>

<p>friend class <a href="classcom__adksec__cmd_1_1_c_transaction_data.md">CTransactionData</a></p>

friend

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- sec/src/api/export/sec/<a href="_c_transaction_data_8h_source.md">CTransactionData.h</a>
