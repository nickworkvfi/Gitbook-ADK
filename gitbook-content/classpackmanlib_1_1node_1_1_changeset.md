---
hidden: true
title: Changeset Class Reference
---

[Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods) \| [Data Fields](#pub-attribs)

Inheritance diagram for Changeset:

![Inheritance graph](classpackmanlib_1_1node_1_1_changeset__inherit__graph.png)

\[<a href="graph_legend.md">legend</a>\]

Collaboration diagram for Changeset:

![Collaboration graph](classpackmanlib_1_1node_1_1_changeset__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

|  |  |
|----|----|
| Public Member Functions |  |
| def  | [\_\_init\_\_](#a727cb9769de881c9c73a873635d8248e) (self, <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ab74e6bf80237ddc4109968cedc58c151">name</a>=None, <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a457d913bff1ebc8671c1eca1c9d5fc03">parent</a>=None, <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ac9728b28ae902f349b97f7d526fb4885">tarinfo</a>=None) |
| def  | [update_with_defaults](#a45cb89bfce223f154a5a355f0518d935) (self) |
| def  | [is_differential](#a6c5853cf5dd2015af4bf1a3941f90a9a) (self) |
| ![-](closed.png) Public Member Functions inherited from <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md">NodePathMixin</a> |  |
| def  | <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#a90b48062a797319956c8709266a69bac">get_path_nodes</a> (self, include_root=False, within_archive=False) |
| str  | <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#ab2255afca64a863f2ec99ec620989e40">get_path</a> (self, include_root=False, within_archive=False) |
|   | Retrieve path of this node within the archive or withing whole tree of archives Separator \'/\' is used within archives and for recursion into archives. <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#ab2255afca64a863f2ec99ec620989e40">More...</a><br/> |
| int  | <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#ac26736fbf81b8e69cdf63c98c8a47c67">get_depth</a> (self, within_archive=False) |
|   | Retrieve depth of node within the archive or within whole tree of archives. <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#ac26736fbf81b8e69cdf63c98c8a47c67">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#aedc1244bbf30d7e02332d97b105e4fe2">find</a> (self, str node_path) |
|   | Find node according to node path provided. <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#aedc1244bbf30d7e02332d97b105e4fe2">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#a4c21f678e8e3fe263962b7f38733124c">find_re</a> (self, str node_path_re) |
|   | Find node according to regular expression node path provided Search will look for regex matching node name match along the path. <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#a4c21f678e8e3fe263962b7f38733124c">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#ad79ec1eccbcc7f72ba14c3c50b91dde1">has_ancestor</a> (self, ancestor) |
|   | Find if node has another node as ancestor. <a href="classpackmanlib_1_1nodepath_1_1_node_path_mixin.md#ad79ec1eccbcc7f72ba14c3c50b91dde1">More...</a><br/> |
| ![-](closed.png) Public Member Functions inherited from <a href="classpackmanlib_1_1basenode_1_1_base_node.md">BaseNode</a> |  |
| def  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#aee93ed72a2829b54a0e13377d0f84b6a">__init__</a> (self, str <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ab74e6bf80237ddc4109968cedc58c151">name</a>=None, <a href="classpackmanlib_1_1basenode_1_1_base_node.md">BaseNode</a> <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a457d913bff1ebc8671c1eca1c9d5fc03">parent</a>=None, tarfile.TarInfo <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ac9728b28ae902f349b97f7d526fb4885">tarinfo</a>=None) |
| str  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a97064a535f192320c134e450ac478e60">get_type_str</a> (self) |
|   | Returns node type as string Supported are: \"Package\", \"Bundle\", \"Dlfile\", \"Signature\", \"Control\", \"Manifest\", \"Dir\", \"File\", \"Symlink\". <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a97064a535f192320c134e450ac478e60">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a40036e92a96400bbf76bacb62fc97ced">is_csd</a> (self) |
|   | Test if node is a CSD. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a40036e92a96400bbf76bacb62fc97ced">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a0aa49779f6dac40e366fb98ec8ff311c">is_inf</a> (self) |
|   | Test if node is an INF. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a0aa49779f6dac40e366fb98ec8ff311c">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a2d50a1b2388573865420bb7a54cf797b">is_meta</a> (self) |
|   | Test if node is a META. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a2d50a1b2388573865420bb7a54cf797b">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a03b8f2bf011d738d9c66f0d4488a03db">is_manifest</a> (self) |
|   | Test if node is a manifest. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a03b8f2bf011d738d9c66f0d4488a03db">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a42def0c1678d16515df9b441fde73ba7">is_changeset</a> (self) |
|   | Test if node is a changeset. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a42def0c1678d16515df9b441fde73ba7">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#afb49d022eb8d0e551f9c5d57872086eb">is_archive</a> (self) |
|   | Test if node is an archive. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#afb49d022eb8d0e551f9c5d57872086eb">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a6327b157864352a36826a505ee8870ad">is_dlfile</a> (self) |
|   | Test if node is a dlfile. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a6327b157864352a36826a505ee8870ad">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#acf1c247a2b5b619a761649da45f9d974">is_upfile</a> (self) |
|   | Test if node is an upfile. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#acf1c247a2b5b619a761649da45f9d974">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a6c8f1769f4874c20b3dc5e7f22169c23">is_bundle</a> (self) |
|   | Test if node is a bundle. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a6c8f1769f4874c20b3dc5e7f22169c23">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a9cf4df8f61cbc1db2e463deb9956adda">is_package</a> (self) |
|   | Test if node is a package. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a9cf4df8f61cbc1db2e463deb9956adda">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a59551a137c22107950f7fe2b4a20e247">is_signature</a> (self) |
|   | Test if node is a signature. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a59551a137c22107950f7fe2b4a20e247">More...</a><br/> |
| bool  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ad01c8a8ff3a9536ea1adbab2ddaf15f4">is_control</a> (self) |
|   | Test if node is a control. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ad01c8a8ff3a9536ea1adbab2ddaf15f4">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a5c02300a2d52e15bf94b8286acdad576">mark_modified</a> (self) |
| def  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a2f67b333aa5e0d678c748c2ebbdeee7f">get_parent_archive</a> (self) |
|   | Retrieve parent archive node. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a2f67b333aa5e0d678c748c2ebbdeee7f">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a6199c59cb64af881cd70a380d639f62e">get_platform</a> (self) |
|   | Retrieve platform for this node. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a6199c59cb64af881cd70a380d639f62e">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#acb1a58b36d03f8b533010786b27456c4">get_root_archive</a> (self) |
|   | Retrieve root archive node Root archive node has no parent archive. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#acb1a58b36d03f8b533010786b27456c4">More...</a><br/> |
| int  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a8805808f42b6763bd9c2696d2854c7db">get_index</a> (self) |
|   | Retrieve index of this node in the list of its parent\'s children. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a8805808f42b6763bd9c2696d2854c7db">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#adc09e25e108582cfddcbfd41fb8298a4">get_signer</a> (self) |
| int  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a604c74b4565be8a42ee33de761c28f51">get_mode</a> (self) |
|   | Retrieve file mode of this node. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a604c74b4565be8a42ee33de761c28f51">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a23e8041ce1015febe4fdace3225714f9">__str__</a> (self) |
| ![-](closed.png) Public Member Functions inherited from <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md">NodeActionMixin</a> |  |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ae1d4914f90457a3ead581dff3517a9c9">unlink</a> (self) |
|   | Remove this node from tree. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ae1d4914f90457a3ead581dff3517a9c9">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a997ac515f8cd659ce5e5eabf1d6c3bd2">destroy</a> (self) |
|   | Remove and destroy this node and all its children. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a997ac515f8cd659ce5e5eabf1d6c3bd2">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ac677e661c13c724e1fcc4f565cd7616d">add_child</a> (self, child_node, index=None) |
|   | Add a child node. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ac677e661c13c724e1fcc4f565cd7616d">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a4437d79802d682f8b1e0f396cd1cff5a">create_dir</a> (self, dir_name) |
|   | Add a child directory If same child name exists, it will be replaced. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a4437d79802d682f8b1e0f396cd1cff5a">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a51ad047a52fc93584d61631c49d6b34f">create_file</a> (self, file_name, content=b\'\') |
|   | Add a child file. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a51ad047a52fc93584d61631c49d6b34f">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#aeb2b80d1ea897e663737503cc6272939">set_content</a> (self, content) |
|   | Set the content of this file node. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#aeb2b80d1ea897e663737503cc6272939">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a0c4ac8fd259814e6e7bc817276841e6c">set_mode</a> (self, mode) |
|   | Set the mode of this file/directory. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a0c4ac8fd259814e6e7bc817276841e6c">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a0fce3dbdea1e301de08dcc5416de18fa">set_user_name</a> (self, <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ab74e6bf80237ddc4109968cedc58c151">name</a>) |
|   | Set the user name of this file/directory. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a0fce3dbdea1e301de08dcc5416de18fa">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#af9676e075896e55fbf0ba87c438390e7">set_group_name</a> (self, <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ab74e6bf80237ddc4109968cedc58c151">name</a>) |
|   | Set the group name of this file/directory. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#af9676e075896e55fbf0ba87c438390e7">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#aebf6261b742ae694c16790726a8c77c5">copy</a> (self) |
|   | Make a deep copy of this node and its content, children and attributes. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#aebf6261b742ae694c16790726a8c77c5">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a10e06ee65b46422469910ecd7e4568c6">move</a> (self, <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a457d913bff1ebc8671c1eca1c9d5fc03">parent</a>) |
|   | Move this node to another parent. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a10e06ee65b46422469910ecd7e4568c6">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a188c163d171ffd6fd7df2efd434a498d">rename</a> (self, newname) |
|   | Rename this node and underlying tarinfo name. <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a188c163d171ffd6fd7df2efd434a498d">More...</a><br/> |
| ![-](closed.png) Public Member Functions inherited from <a href="classpackmanlib_1_1node_1_1_j_s_o_n_content.md">JSONContent</a> |  |
| def  | <a href="classpackmanlib_1_1node_1_1_j_s_o_n_content.md#ae64f0875afe3067b97ba370b354b9213">__init__</a> (self) |
| def  | <a href="classpackmanlib_1_1node_1_1_j_s_o_n_content.md#afa290894a22415ef36180fef33c45fb3">set_jsoncontent_from_dict</a> (self) |
| def  | <a href="classpackmanlib_1_1node_1_1_j_s_o_n_content.md#af2af7ce2df5cb0b0bb0d45f259dc1b33">set_dict_from_jsoncontent</a> (self) |
| def  | <a href="classpackmanlib_1_1node_1_1_j_s_o_n_content.md#afa69507b8ff9910c7903732047fbba87">dict</a> (self) |

|  |  |
|----|----|
| Static Public Member Functions |  |
| def  | [create](#a55c611f70165c4d5e20cea8205c1f962) () |
| ![-](closed.png) Static Public Member Functions inherited from <a href="classpackmanlib_1_1node_1_1_node.md">Node</a> |  |
| def  | <a href="classpackmanlib_1_1node_1_1_node.md#a57ab1e1ab24335aeaf07ac3ae39c59ee">create_node</a> (<a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ab74e6bf80237ddc4109968cedc58c151">name</a>, entry_type) |
| ![-](closed.png) Static Public Member Functions inherited from <a href="classpackmanlib_1_1basenode_1_1_base_node.md">BaseNode</a> |  |
| tarfile.TarInfo  | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a858aac03715077f836c526caa69896c7">create_tarinfo</a> (str tarinfo_name, entry_type) |
|   | Tarinfo creation helper. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a858aac03715077f836c526caa69896c7">More...</a><br/> |

|  |  |
|----|----|
| Data Fields |  |
|   | [writable](#afd1b23203751d19ddbf744bc063a06c5) |
| ![-](closed.png) Data Fields inherited from <a href="classpackmanlib_1_1basenode_1_1_base_node.md">BaseNode</a> |  |
|   | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ab74e6bf80237ddc4109968cedc58c151">name</a> |
|   | node name (str) <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ab74e6bf80237ddc4109968cedc58c151">More...</a><br/> |
|   | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a457d913bff1ebc8671c1eca1c9d5fc03">parent</a> |
|   | parent node (<a href="classpackmanlib_1_1basenode_1_1_base_node.md">BaseNode</a>) <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a457d913bff1ebc8671c1eca1c9d5fc03">More...</a><br/> |
|   | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ac9728b28ae902f349b97f7d526fb4885">tarinfo</a> |
|   | children of this node in order. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ac9728b28ae902f349b97f7d526fb4885">More...</a><br/> |
|   | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ae8834017c3a98209d379e0384e291215">file_content</a> |
|   | Object representing the content of the file. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#ae8834017c3a98209d379e0384e291215">More...</a><br/> |
|   | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a71101782c2fbd10a9832594113078cd2">signature_nodes</a> |
|   | Nodes holding signature of this node. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a71101782c2fbd10a9832594113078cd2">More...</a><br/> |
|   | <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a691c0b70ad22568ebe48b0b21b22ee2c">additional_signature_nodes</a> |
|   | Nodes holding additional signature of this node. <a href="classpackmanlib_1_1basenode_1_1_base_node.md#a691c0b70ad22568ebe48b0b21b22ee2c">More...</a><br/> |
| ![-](closed.png) Data Fields inherited from <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md">NodeActionMixin</a> |  |
|   | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a457d913bff1ebc8671c1eca1c9d5fc03">parent</a> |
|   | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a0ad3c9f0298ae46424fb2461b3e2d506">children</a> |
|   | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ae8834017c3a98209d379e0384e291215">file_content</a> |
|   | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#ab74e6bf80237ddc4109968cedc58c151">name</a> |
|   | <a href="classpackmanlib_1_1nodeaction_1_1_node_action_mixin.md#a71101782c2fbd10a9832594113078cd2">signature_nodes</a> |
| ![-](closed.png) Data Fields inherited from <a href="classpackmanlib_1_1node_1_1_j_s_o_n_content.md">JSONContent</a> |  |
|   | <a href="classpackmanlib_1_1node_1_1_j_s_o_n_content.md#a1aabac6d068eef6a7bad3fdf50a05cc8">d</a> |

## DetailedDescription {#detailed-description}

``` fragment
Represents a changeset file node 
```

## Constructor& Destructor Documentation

## \_\_init\_\_() <a href="#a727cb9769de881c9c73a873635d8248e" id="a727cb9769de881c9c73a873635d8248e"></a>

<p>def \_\_init\_\_</p>

Reimplemented from <a href="classpackmanlib_1_1node_1_1_node.md#a727cb9769de881c9c73a873635d8248e">Node</a>.

## MemberFunction Documentation {#member-function-documentation}

## create() <a href="#a55c611f70165c4d5e20cea8205c1f962" id="a55c611f70165c4d5e20cea8205c1f962"></a>

<p>def create</p>

static

## is_differential() <a href="#a6c5853cf5dd2015af4bf1a3941f90a9a" id="a6c5853cf5dd2015af4bf1a3941f90a9a"></a>

<p>def is_differential</p>

## update_with_defaults() <a href="#a45cb89bfce223f154a5a355f0518d935" id="a45cb89bfce223f154a5a355f0518d935"></a>

<p>def update_with_defaults</p>

## FieldDocumentation {#field-documentation}

## writable <a href="#afd1b23203751d19ddbf744bc063a06c5" id="afd1b23203751d19ddbf744bc063a06c5"></a>

<p>writable</p>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- packman/packmanlib/<a href="node_8py.md">node.py</a>
