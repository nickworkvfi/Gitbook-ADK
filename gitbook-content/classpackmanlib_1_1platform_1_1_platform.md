---
hidden: true
title: Platform Class Reference
---

[Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods) \| [Data Fields](#pub-attribs) \| [Static Public Attributes](#pub-static-attribs)

|  |  |
|----|----|
| Public Member Functions |  |
| def  | [\_\_init\_\_](#ac1f269f187d7993a4459415dfc3f8666) (self, [name](#ab74e6bf80237ddc4109968cedc58c151)) |
| bool  | [is_vos1](#a616bcb5e43af476248151268b4d3ae5b) (self) |
| bool  | [is_vos2](#a6bc3f593e67e76a67cdcd39fe2481532) (self) |
| bool  | [is_vos3](#a1c1ced2d6dd7b99bdc60a670bab75c33) (self) |
| bool  | [is_vaos](#a9782f56d82c2111338c5e3d41afdbcc2) (self) |
| def  | [get_signature_names](#a681125d92d29ddb11f3fedc182f08335) (self, base_name) |
|   | Creates list of names using base_name + signature extensions. [More\...](#a681125d92d29ddb11f3fedc182f08335)<br/> |
| def  | [get_signature_strindex](#ab32a0af3073777233f04cd8f9fea2556) (self, [name](#ab74e6bf80237ddc4109968cedc58c151)) |
| def  | [get_signed_node_name](#ad03cf3ff63ba77e967266b0f7c8430d5) (self, sig_name) |
|   | Get signed node name from signature name. [More\...](#ad03cf3ff63ba77e967266b0f7c8430d5)<br/> |
| def  | [get_mode](#a1360437086e20b7e8d476c11718ee7c7) (self) |
| def  | [user_is_valid](#a0ccc8eebf159fcda78c2910955623b6f) (self, user) |
| def  | [user_type](#aeb6a2d3cb5015d76a55c9f73a3058828) (self, user) |
| def  | [can_remove](#a2e1c063382f6eabfdc0f46c8d76161d8) (self, user, user_to_remove) |

|  |  |
|----|----|
| Static Public Member Functions |  |
| def  | [get](#aebcffe7fdc65e22e0aa82c019bbf8eb9) (str [name](#ab74e6bf80237ddc4109968cedc58c151)) |
|   | Retrieve platform instance by name. [More\...](#aebcffe7fdc65e22e0aa82c019bbf8eb9)<br/> |

|  |  |
|----|----|
| Data Fields |  |
|   | [name](#ab74e6bf80237ddc4109968cedc58c151) |
|   | [dlfile_compressed](#aeda554c2e9d7cccbda12be097dacc58d) |
|   | [package_compressed](#a09c15f373ecd692cb8662a699f8ce9ad) |
|   | [naming](#ad9d22f87e441d618386f7607280a07c7) |
|   | [filelist_optim](#a2f909f4663bc4d3a69dfa51e94740420) |
|   | [blacklist_optim](#ad1d7d4879d1fb8ed0d41ebe4dce1adc2) |
|   | [order_optim](#a587c2655bf70050447b7419b04588f9b) |
|   | [sig_ext](#a212cfcd526b5a3eae43d49ce92e76e0f) |
|   | [signature_count](#a9edee768e042c770efd8cf79e0ba5895) |
|   | [mode](#a1a6b6fb557d8d37d59700faf4e4c9167) |
|   | [vfi_nocheck](#a7e1d9a6d9381888dc8e6dd5b3347edcf) |
|   | [vfi_noumask](#ac3edc88900696d497c1315f9257c060a) |
|   | [collapse_fixed_issues](#a8c9c13aeb7d77e912bbd545fe17bb795) |
|   | [windows_force_permissions](#a2a0a1a467bcd7b7e18525def33a37caa) |
|   | [vfi_internal](#a1574a62a0662c3df8fdda241d8478a6b) |
|   | [vhq_force_info](#a05a34872ac45df8d37c34d3a3488972f) |

|  |  |
|----|----|
| Static Public Attributes |  |
| list  | [ALL](#a0c20de7e6bc3597a492eb33efd308985) = \[<a href="namespacepackmanlib_1_1platform.md#a5820612e0af069fdcd24c4f7e2b9053a">PLATFORM_VOS1</a>, <a href="namespacepackmanlib_1_1platform.md#a4c737af6597267ff8e5dce690a736a94">PLATFORM_VOS2</a>, <a href="namespacepackmanlib_1_1platform.md#a990a08f2f7cde867e2fb1efedf753258">PLATFORM_VOS3</a>, <a href="namespacepackmanlib_1_1platform.md#a5c2044fcc1a7c7c9887037e7127fd626">PLATFORM_VAOS</a>\] |
| list  | [UI_SUPPORTED](#a50c9f40d6746fa434234e254fa9d7ac5) = \[<a href="namespacepackmanlib_1_1platform.md#a5820612e0af069fdcd24c4f7e2b9053a">PLATFORM_VOS1</a>, <a href="namespacepackmanlib_1_1platform.md#a4c737af6597267ff8e5dce690a736a94">PLATFORM_VOS2</a>, <a href="namespacepackmanlib_1_1platform.md#a990a08f2f7cde867e2fb1efedf753258">PLATFORM_VOS3</a>\] |
| list  | [MODES](#a54e9ae393c97cba8f0d9061e504028c8) = \[<a href="namespacepackmanlib_1_1platform.md#a3ce429033eb7aef5183eec7c35e3ad48">MODE_OSDEV</a>, <a href="namespacepackmanlib_1_1platform.md#adbf9a232501bdb387977dccb5bbcc9ee">MODE_APPDEV</a>, <a href="namespacepackmanlib_1_1platform.md#a460688c88e6e0e578a92acfe36fdc4d5">MODE_PROD</a>\] |

## Constructor& Destructor Documentation

## \_\_init\_\_() <a href="#ac1f269f187d7993a4459415dfc3f8666" id="ac1f269f187d7993a4459415dfc3f8666"></a>

<p>def \_\_init\_\_</p>

## MemberFunction Documentation {#member-function-documentation}

## can_remove() <a href="#a2e1c063382f6eabfdc0f46c8d76161d8" id="a2e1c063382f6eabfdc0f46c8d76161d8"></a>

<p>def can_remove</p>

## get() <a href="#aebcffe7fdc65e22e0aa82c019bbf8eb9" id="aebcffe7fdc65e22e0aa82c019bbf8eb9"></a>

<p>def get</p>

static

Retrieve platform instance by name.

**Parameters**

**name** name of platform (one of PLATFORM_XXX)

### Returns

<a href="classpackmanlib_1_1platform_1_1_platform.md">Platform</a> instance

## get_mode() <a href="#a1360437086e20b7e8d476c11718ee7c7" id="a1360437086e20b7e8d476c11718ee7c7"></a>

<p>def get_mode</p>

## get_signature_names() <a href="#a681125d92d29ddb11f3fedc182f08335" id="a681125d92d29ddb11f3fedc182f08335"></a>

<p>def get_signature_names</p>

Creates list of names using base_name + signature extensions.

### Returns

list of signature names

## get_signature_strindex() <a href="#ab32a0af3073777233f04cd8f9fea2556" id="ab32a0af3073777233f04cd8f9fea2556"></a>

<p>def get_signature_strindex</p>

## get_signed_node_name() <a href="#ad03cf3ff63ba77e967266b0f7c8430d5" id="ad03cf3ff63ba77e967266b0f7c8430d5"></a>

<p>def get_signed_node_name</p>

Get signed node name from signature name.

### Returns

signed node name

## is_vaos() <a href="#a9782f56d82c2111338c5e3d41afdbcc2" id="a9782f56d82c2111338c5e3d41afdbcc2"></a>

<p>bool is_vaos</p>

## is_vos1() <a href="#a616bcb5e43af476248151268b4d3ae5b" id="a616bcb5e43af476248151268b4d3ae5b"></a>

<p>bool is_vos1</p>

## is_vos2() <a href="#a6bc3f593e67e76a67cdcd39fe2481532" id="a6bc3f593e67e76a67cdcd39fe2481532"></a>

<p>bool is_vos2</p>

## is_vos3() <a href="#a1c1ced2d6dd7b99bdc60a670bab75c33" id="a1c1ced2d6dd7b99bdc60a670bab75c33"></a>

<p>bool is_vos3</p>

## user_is_valid() <a href="#a0ccc8eebf159fcda78c2910955623b6f" id="a0ccc8eebf159fcda78c2910955623b6f"></a>

<p>def user_is_valid</p>

## user_type() <a href="#aeb6a2d3cb5015d76a55c9f73a3058828" id="aeb6a2d3cb5015d76a55c9f73a3058828"></a>

<p>def user_type</p>

## FieldDocumentation {#field-documentation}

## ALL <a href="#a0c20de7e6bc3597a492eb33efd308985" id="a0c20de7e6bc3597a492eb33efd308985"></a>

<p>list ALL = \[<a href="namespacepackmanlib_1_1platform.md#a5820612e0af069fdcd24c4f7e2b9053a">PLATFORM_VOS1</a>, <a href="namespacepackmanlib_1_1platform.md#a4c737af6597267ff8e5dce690a736a94">PLATFORM_VOS2</a>, <a href="namespacepackmanlib_1_1platform.md#a990a08f2f7cde867e2fb1efedf753258">PLATFORM_VOS3</a>, <a href="namespacepackmanlib_1_1platform.md#a5c2044fcc1a7c7c9887037e7127fd626">PLATFORM_VAOS</a>\]</p>

static

## blacklist_optim <a href="#ad1d7d4879d1fb8ed0d41ebe4dce1adc2" id="ad1d7d4879d1fb8ed0d41ebe4dce1adc2"></a>

<p>blacklist_optim</p>

## collapse_fixed_issues <a href="#a8c9c13aeb7d77e912bbd545fe17bb795" id="a8c9c13aeb7d77e912bbd545fe17bb795"></a>

<p>collapse_fixed_issues</p>

## dlfile_compressed <a href="#aeda554c2e9d7cccbda12be097dacc58d" id="aeda554c2e9d7cccbda12be097dacc58d"></a>

<p>dlfile_compressed</p>

## filelist_optim <a href="#a2f909f4663bc4d3a69dfa51e94740420" id="a2f909f4663bc4d3a69dfa51e94740420"></a>

<p>filelist_optim</p>

## mode <a href="#a1a6b6fb557d8d37d59700faf4e4c9167" id="a1a6b6fb557d8d37d59700faf4e4c9167"></a>

<p>mode</p>

## MODES <a href="#a54e9ae393c97cba8f0d9061e504028c8" id="a54e9ae393c97cba8f0d9061e504028c8"></a>

<p>list MODES = \[<a href="namespacepackmanlib_1_1platform.md#a3ce429033eb7aef5183eec7c35e3ad48">MODE_OSDEV</a>, <a href="namespacepackmanlib_1_1platform.md#adbf9a232501bdb387977dccb5bbcc9ee">MODE_APPDEV</a>, <a href="namespacepackmanlib_1_1platform.md#a460688c88e6e0e578a92acfe36fdc4d5">MODE_PROD</a>\]</p>

static

## name <a href="#ab74e6bf80237ddc4109968cedc58c151" id="ab74e6bf80237ddc4109968cedc58c151"></a>

<p>name</p>

## naming <a href="#ad9d22f87e441d618386f7607280a07c7" id="ad9d22f87e441d618386f7607280a07c7"></a>

<p>naming</p>

## order_optim <a href="#a587c2655bf70050447b7419b04588f9b" id="a587c2655bf70050447b7419b04588f9b"></a>

<p>order_optim</p>

## package_compressed <a href="#a09c15f373ecd692cb8662a699f8ce9ad" id="a09c15f373ecd692cb8662a699f8ce9ad"></a>

<p>package_compressed</p>

## sig_ext <a href="#a212cfcd526b5a3eae43d49ce92e76e0f" id="a212cfcd526b5a3eae43d49ce92e76e0f"></a>

<p>sig_ext</p>

## signature_count <a href="#a9edee768e042c770efd8cf79e0ba5895" id="a9edee768e042c770efd8cf79e0ba5895"></a>

<p>signature_count</p>

## UI_SUPPORTED <a href="#a50c9f40d6746fa434234e254fa9d7ac5" id="a50c9f40d6746fa434234e254fa9d7ac5"></a>

<p>list UI_SUPPORTED = \[<a href="namespacepackmanlib_1_1platform.md#a5820612e0af069fdcd24c4f7e2b9053a">PLATFORM_VOS1</a>, <a href="namespacepackmanlib_1_1platform.md#a4c737af6597267ff8e5dce690a736a94">PLATFORM_VOS2</a>, <a href="namespacepackmanlib_1_1platform.md#a990a08f2f7cde867e2fb1efedf753258">PLATFORM_VOS3</a>\]</p>

static

## vfi_internal <a href="#a1574a62a0662c3df8fdda241d8478a6b" id="a1574a62a0662c3df8fdda241d8478a6b"></a>

<p>vfi_internal</p>

## vfi_nocheck <a href="#a7e1d9a6d9381888dc8e6dd5b3347edcf" id="a7e1d9a6d9381888dc8e6dd5b3347edcf"></a>

<p>vfi_nocheck</p>

## vfi_noumask <a href="#ac3edc88900696d497c1315f9257c060a" id="ac3edc88900696d497c1315f9257c060a"></a>

<p>vfi_noumask</p>

## vhq_force_info <a href="#a05a34872ac45df8d37c34d3a3488972f" id="a05a34872ac45df8d37c34d3a3488972f"></a>

<p>vhq_force_info</p>

## windows_force_permissions <a href="#a2a0a1a467bcd7b7e18525def33a37caa" id="a2a0a1a467bcd7b7e18525def33a37caa"></a>

<p>windows_force_permissions</p>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- packman/packmanlib/<a href="platform_8py.md">platform.py</a>
