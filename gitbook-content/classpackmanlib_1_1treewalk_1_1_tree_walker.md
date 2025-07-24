---
hidden: true
title: TreeWalker Class Reference
---

[Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods) \| [Data Fields](#pub-attribs)

|  |  |
|----|----|
| Public Member Functions |  |
| def  | [\_\_init\_\_](#a8959b99ed170ca2ff5746a9f132b3fec) (self, [max_arc_depth](#a6477cbfdaff96a77de0cfe7edc1ddb11), [max_depth](#abe0b4340c0a3ede312856c001b86d7ed), [writable_only](#af47dbfb6056d76098bd84472beab442f), [post_order](#a81bec6e1a4754daae86bdef84ac8fa14)) |

|  |  |
|----|----|
| Static Public Member Functions |  |
| def  | [walk](#ac3ce320a4b61165e04d04473720d017c) (nodes, [observers](#a6b0642912968743133a34ab9d32e2285), [max_arc_depth](#a6477cbfdaff96a77de0cfe7edc1ddb11)=-1, [max_depth](#abe0b4340c0a3ede312856c001b86d7ed)=-1, children_start=False, [writable_only](#af47dbfb6056d76098bd84472beab442f)=False, [post_order](#a81bec6e1a4754daae86bdef84ac8fa14)=False) |
|   | Performs a depth-first / pre-order walk through the node calling observers callbacks. [More\...](#ac3ce320a4b61165e04d04473720d017c)<br/> |

|             |                                                     |
|-------------|-----------------------------------------------------|
| Data Fields |                                                     |
|             | [observers](#a6b0642912968743133a34ab9d32e2285)     |
|             | [max_arc_depth](#a6477cbfdaff96a77de0cfe7edc1ddb11) |
|             | [max_depth](#abe0b4340c0a3ede312856c001b86d7ed)     |
|             | [writable_only](#af47dbfb6056d76098bd84472beab442f) |
|             | [post_order](#a81bec6e1a4754daae86bdef84ac8fa14)    |

## Constructor& Destructor Documentation

## \_\_init\_\_() <a href="#a8959b99ed170ca2ff5746a9f132b3fec" id="a8959b99ed170ca2ff5746a9f132b3fec"></a>

<p>def \_\_init\_\_</p>

## MemberFunction Documentation {#member-function-documentation}

## walk() <a href="#ac3ce320a4b61165e04d04473720d017c" id="ac3ce320a4b61165e04d04473720d017c"></a>

<p>def walk</p>

static

Performs a depth-first / pre-order walk through the node calling observers callbacks.

**Parameters**

**node** start traversal from these nodes (single or list) **observers** list of observers to be called **max_arc_depth** maximum archive recursion depth, negative is infinite **max_depth** maximum recursion depth, negative is infinite **children_start** start with node\'s children instead of node itself **writable_only** call observers only on writable nodes **post_order** post-order traversal if True, pre-order traversal if False

## FieldDocumentation {#field-documentation}

## max_arc_depth <a href="#a6477cbfdaff96a77de0cfe7edc1ddb11" id="a6477cbfdaff96a77de0cfe7edc1ddb11"></a>

<p>max_arc_depth</p>

## max_depth <a href="#abe0b4340c0a3ede312856c001b86d7ed" id="abe0b4340c0a3ede312856c001b86d7ed"></a>

<p>max_depth</p>

## observers <a href="#a6b0642912968743133a34ab9d32e2285" id="a6b0642912968743133a34ab9d32e2285"></a>

<p>observers</p>

## post_order <a href="#a81bec6e1a4754daae86bdef84ac8fa14" id="a81bec6e1a4754daae86bdef84ac8fa14"></a>

<p>post_order</p>

## writable_only <a href="#af47dbfb6056d76098bd84472beab442f" id="af47dbfb6056d76098bd84472beab442f"></a>

<p>writable_only</p>

------------------------------------------------------------------------

The documentation for this class was generated from the following file:

- packman/packmanlib/<a href="treewalk_8py.md">treewalk.py</a>
