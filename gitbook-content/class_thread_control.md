---
hidden: true
title: ThreadControl Class Reference
---

[Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Data Fields](#pub-attribs)

`#include <`<a href="thread_8h_source.md">thread.h</a>`>`

|  |  |
|----|----|
| Public Types |  |
| enum   | [ThreadState](#ab3804a8a4369184ad46dadf8e54957b6) { [Initialized](#ab3804a8a4369184ad46dadf8e54957b6aae32940b344dab2f4e31be660ce1ab02), [Running](#ab3804a8a4369184ad46dadf8e54957b6a2f5f2c4a8c4f4f0519d503dcdfbf55cb), [Stopped](#ab3804a8a4369184ad46dadf8e54957b6a4d049c6d45e08a294523df186ad77a75), [Detached](#ab3804a8a4369184ad46dadf8e54957b6afd18e4f2bba11fcc7bb1bf9a615a3c59) } |

|  |  |
|----|----|
| Public Member Functions |  |
|   | [ThreadControl](#a57eb72b8afea8a2ce2dc208d1caae309) (<a href="class_thread.md">Thread</a> \*o, int detach=0) |
| virtual  | [\~ThreadControl](#a1b9b6aaeefff5243fc4147e6d4d31746) () |
| void \*  | [wait](#a712fd14bb4c71d93a7197efb8ac8052b) () |
| [ThreadState](#ab3804a8a4369184ad46dadf8e54957b6)  | [getState](#ac7385bbd7d6e5784dae317c3564b4932) () const |

|  |  |
|----|----|
| Data Fields |  |
| enum [ThreadControl::ThreadState](#ab3804a8a4369184ad46dadf8e54957b6)  | [threadState](#ae893022edc8b823c353afddfb2fd0c42) |

## MemberEnumeration Documentation {#member-enumeration-documentation}

## ThreadState <a href="#ab3804a8a4369184ad46dadf8e54957b6" id="ab3804a8a4369184ad46dadf8e54957b6"></a>

<p>enum [ThreadState](#ab3804a8a4369184ad46dadf8e54957b6)</p>

| Enumerator   |     |
|--------------|-----|
| Initialized  |     |
| Running      |     |
| Stopped      |     |
| Detached     |     |

## Constructor& Destructor Documentation

## ThreadControl() <a href="#a57eb72b8afea8a2ce2dc208d1caae309" id="a57eb72b8afea8a2ce2dc208d1caae309"></a>

<p><a href="class_thread_control.md">ThreadControl</a></p>

## \~ThreadControl() <a href="#a1b9b6aaeefff5243fc4147e6d4d31746" id="a1b9b6aaeefff5243fc4147e6d4d31746"></a>

<p>virtual \~<a href="class_thread_control.md">ThreadControl</a></p>

inlinevirtual

## MemberFunction Documentation {#member-function-documentation}

## getState() <a href="#ac7385bbd7d6e5784dae317c3564b4932" id="ac7385bbd7d6e5784dae317c3564b4932"></a>

<p>[ThreadState](#ab3804a8a4369184ad46dadf8e54957b6) getState</p>

inline

## wait() <a href="#a712fd14bb4c71d93a7197efb8ac8052b" id="a712fd14bb4c71d93a7197efb8ac8052b"></a>

<p>void \* wait</p>

## FieldDocumentation {#field-documentation}

## threadState <a href="#ae893022edc8b823c353afddfb2fd0c42" id="ae893022edc8b823c353afddfb2fd0c42"></a>

<p>enum [ThreadControl::ThreadState](#ab3804a8a4369184ad46dadf8e54957b6) threadState</p>

------------------------------------------------------------------------

The documentation for this class was generated from the following files:

- sdi/src/<a href="thread_8h_source.md">thread.h</a>
- sdi/src/<a href="thread_8cpp.md">thread.cpp</a>
