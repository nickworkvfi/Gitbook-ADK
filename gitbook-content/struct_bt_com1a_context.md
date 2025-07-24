---
hidden: true
title: BtCom1aContext Struct Reference
---

[Public Member Functions](#pub-methods) \| [Static Public Member Functions](#pub-static-methods) \| [Data Fields](#pub-attribs)

|  |  |
|----|----|
| Public Member Functions |  |
|   | [BtCom1aContext](#a489ea39ab0cd453bc537ca54df8dc1a6) (bool enable_ui, bool reconnect) |
| virtual  | [\~BtCom1aContext](#af019673debc7d844d368cdec639d5fcb) () |
| bool  | [wait](#ac5da9a8ff82c19fe2ebf2e178c2e3a2d) (unsigned seconds) |

|  |  |
|----|----|
| Static Public Member Functions |  |
| static void \*  | [ui_thread_func](#aa2f380dc467d5faf705d71a1be955df7) (void \*data) |

|                  |                                                    |
|------------------|----------------------------------------------------|
| Data Fields      |                                                    |
| pthread_mutex_t  | [mutex](#a4acff8232e4aec9cd5c6dc200ac55ef3)        |
| pthread_cond_t   | [cond](#a0a1433271fddfed84bc959ae6c202e5a)         |
| bool             | [flag](#a8b3ab54ed3e81c69863d65e4e6c424a0)         |
| bool             | [abort_ui](#a597cfc0f48c3ec6fcc07d5005c4475c0)     |
| bool             | [ui_enabled](#a968dbe1ca716971fc6e6148482e05aa4)   |
| bool             | [is_reconnect](#a70c6a45c8677969ff902ef9600cb184c) |
| pthread_t        | [ui_thread](#aef2b2c10f0a05e2fe64ca7f83aff752d)    |

## Constructor& Destructor Documentation

## BtCom1aContext() <a href="#a489ea39ab0cd453bc537ca54df8dc1a6" id="a489ea39ab0cd453bc537ca54df8dc1a6"></a>

<p><a href="struct_bt_com1a_context.md">BtCom1aContext</a></p>

inline

## \~BtCom1aContext() <a href="#af019673debc7d844d368cdec639d5fcb" id="af019673debc7d844d368cdec639d5fcb"></a>

<p>virtual \~<a href="struct_bt_com1a_context.md">BtCom1aContext</a></p>

inlinevirtual

## MemberFunction Documentation {#member-function-documentation}

## ui_thread_func() <a href="#aa2f380dc467d5faf705d71a1be955df7" id="aa2f380dc467d5faf705d71a1be955df7"></a>

<p>static void\* ui_thread_func</p>

inlinestatic

## wait() <a href="#ac5da9a8ff82c19fe2ebf2e178c2e3a2d" id="ac5da9a8ff82c19fe2ebf2e178c2e3a2d"></a>

<p>bool wait</p>

inline

## FieldDocumentation {#field-documentation}

## abort_ui <a href="#a597cfc0f48c3ec6fcc07d5005c4475c0" id="a597cfc0f48c3ec6fcc07d5005c4475c0"></a>

<p>bool abort_ui</p>

## cond <a href="#a0a1433271fddfed84bc959ae6c202e5a" id="a0a1433271fddfed84bc959ae6c202e5a"></a>

<p>pthread_cond_t cond</p>

## flag <a href="#a8b3ab54ed3e81c69863d65e4e6c424a0" id="a8b3ab54ed3e81c69863d65e4e6c424a0"></a>

<p>bool flag</p>

## is_reconnect <a href="#a70c6a45c8677969ff902ef9600cb184c" id="a70c6a45c8677969ff902ef9600cb184c"></a>

<p>bool is_reconnect</p>

## mutex <a href="#a4acff8232e4aec9cd5c6dc200ac55ef3" id="a4acff8232e4aec9cd5c6dc200ac55ef3"></a>

<p>pthread_mutex_t mutex</p>

## ui_enabled <a href="#a968dbe1ca716971fc6e6148482e05aa4" id="a968dbe1ca716971fc6e6148482e05aa4"></a>

<p>bool ui_enabled</p>

## ui_thread <a href="#aef2b2c10f0a05e2fe64ca7f83aff752d" id="aef2b2c10f0a05e2fe64ca7f83aff752d"></a>

<p>pthread_t ui_thread</p>

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- sdi/src/<a href="ui__mode_8cpp.md">ui_mode.cpp</a>
