---
hidden: true
title: VOS3TreeInfo.UPFileCounter Class Reference
---

[Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

Inheritance diagram for VOS3TreeInfo.UPFileCounter:

![Inheritance graph](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_u_p_file_counter__inherit__graph.png)

\[<a href="graph_legend.md">legend</a>\]

Collaboration diagram for VOS3TreeInfo.UPFileCounter:

![Collaboration graph](classpackmanlib_1_1treeinfo_1_1_v_o_s3_tree_info_1_1_u_p_file_counter__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

|  |  |
|----|----|
| Public Member Functions |  |
| def  | [\_\_init\_\_](#ae64f0875afe3067b97ba370b354b9213) (self) |
| def  | [found_upfile_cb](#ab7683a66151046935d5fc429c51fd083) (self, upfile) |
|   | Callback for all upfile nodes visited. [More\...](#ab7683a66151046935d5fc429c51fd083)<br/> |
| def  | [get_nb_upfiles](#a97c114943cadd582ba107226be4ea5de) (self) |
| ![-](closed.png) Public Member Functions inherited from <a href="classpackmanlib_1_1treewalk_1_1_observer.md">Observer</a> |  |
| def  | <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a105daf7d38d3518013ba998c7ced4966">found_node_cb</a> (self, node) |
|   | Callback for all nodes visited. <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a105daf7d38d3518013ba998c7ced4966">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a4339f9ca68bfdbd28e44f729dc96986e">found_archive_cb</a> (self, archive) |
|   | Callback for all archive nodes visited. <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a4339f9ca68bfdbd28e44f729dc96986e">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a4658c97464b5e6183818fca2569e7a8e">found_dlfile_cb</a> (self, dlfile) |
|   | Callback for all dlfile nodes visited. <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a4658c97464b5e6183818fca2569e7a8e">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1treewalk_1_1_observer.md#ab0c64a83f57aafaaf2b5e9f5ff6c9b28">found_bundle_cb</a> (self, bundle) |
|   | Callback for all bundle nodes visited. <a href="classpackmanlib_1_1treewalk_1_1_observer.md#ab0c64a83f57aafaaf2b5e9f5ff6c9b28">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a2e71416030fe50ca62bff56697cd4ee3">found_package_cb</a> (self, package) |
|   | Callback for all package nodes visited. <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a2e71416030fe50ca62bff56697cd4ee3">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1treewalk_1_1_observer.md#ad324df3784468c2b8876d1096027bfc4">found_csd_cb</a> (self, csd) |
|   | Callback for all csd nodes visited. <a href="classpackmanlib_1_1treewalk_1_1_observer.md#ad324df3784468c2b8876d1096027bfc4">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a8af64daa34d66290c5e9b88a138abd34">found_inf_cb</a> (self, inf) |
|   | Callback for all inf nodes visited. <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a8af64daa34d66290c5e9b88a138abd34">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1treewalk_1_1_observer.md#abda2863e87d519845652d3c3f628fe3b">found_meta_cb</a> (self, meta) |
|   | Callback for all meta nodes visited. <a href="classpackmanlib_1_1treewalk_1_1_observer.md#abda2863e87d519845652d3c3f628fe3b">More...</a><br/> |
| def  | <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a5feaf5a94cffa0c0d626f4ba4573c9b7">end_cb</a> (self, node) |
|   | Callback called once at the end of the tree walk. <a href="classpackmanlib_1_1treewalk_1_1_observer.md#a5feaf5a94cffa0c0d626f4ba4573c9b7">More...</a><br/> |

|             |                                               |
|-------------|-----------------------------------------------|
| Data Fields |                                               |
|             | [upfiles](#a85db3f0032ed4cb30880e5f259f794f0) |

## Constructor& Destructor Documentation

## \_\_init\_\_() <a href="#ae64f0875afe3067b97ba370b354b9213" id="ae64f0875afe3067b97ba370b354b9213"></a>

<p>def \_\_init\_\_</p>

## MemberFunction Documentation {#member-function-documentation}

## found_upfile_cb() <a href="#ab7683a66151046935d5fc429c51fd083" id="ab7683a66151046935d5fc429c51fd083"></a>

<p>def found_upfile_cb</p>

Callback for all upfile nodes visited.

**Parameters**

**upfile** upfile visited

Reimplemented from <a href="classpackmanlib_1_1treewalk_1_1_observer.md#ab7683a66151046935d5fc429c51fd083">Observer</a>.

## get_nb_upfiles() <a href="#a97c114943cadd582ba107226be4ea5de" id="a97c114943cadd582ba107226be4ea5de"></a>

<p>def get_nb_upfiles</p>

## FieldDocumentation {#field-documentation}

## upfiles <a href="#a85db3f0032ed4cb30880e5f259f794f0" id="a85db3f0032ed4cb30880e5f259f794f0"></a>

<p>upfiles</p>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- packman/packmanlib/<a href="treeinfo_8py.md">treeinfo.py</a>
