---
hidden: true
title: "vficom::status Namespace Reference"
---

[Enumerations](#enum-members)

|  |  |
|----|----|
| Enumerations |  |
| enum   | [PipeStatus](#ae7ba2f563df916ce3ce6be92a19d2bbc) {<br/>  [OK](#ae7ba2f563df916ce3ce6be92a19d2bbca2bc49ec37d6a5715dd23e85f1ff5bb59) = 0, [INVALID](#ae7ba2f563df916ce3ce6be92a19d2bbcaef2863a469df3ea6871d640e3669a2f2) = 1, [NOSUPPORT](#ae7ba2f563df916ce3ce6be92a19d2bbcad7e21613367ae574d29fb0f12b02be44) = 2, [NOTREADY](#ae7ba2f563df916ce3ce6be92a19d2bbcaee9eff54c2e86e523f8be55c5ad62c58) = 3,<br/>  [FAILED](#ae7ba2f563df916ce3ce6be92a19d2bbcaecedb56d1405a60c6069f4a0139bdec5) = 5, [TIMEOUT](#ae7ba2f563df916ce3ce6be92a19d2bbcaad9dee005a3d0f9137b2ac1e0869f89b) = 6, [STARVATION](#ae7ba2f563df916ce3ce6be92a19d2bbca16447fcbaada0814065a175e7cc7823f) = 7, [USER_INTERRUPT](#ae7ba2f563df916ce3ce6be92a19d2bbca613171f09bea59d3a66afe2d09a136d0) = 8,<br/>  [MAX_ENUM](#ae7ba2f563df916ce3ce6be92a19d2bbca45fb932b1d1e8ed5779c816779acd30e) = 0x7FFFFFFF<br/>} |

## EnumerationType Documentation {#enumeration-type-documentation}

## PipeStatus <a href="#ae7ba2f563df916ce3ce6be92a19d2bbc" id="ae7ba2f563df916ce3ce6be92a19d2bbc"></a>

<p>enum [PipeStatus](#ae7ba2f563df916ce3ce6be92a19d2bbc)</p>

| Enumerator |  |
|----|----|
| OK  | <p>No Error.</p> |
| INVALID  | <p>Invalid request. This indicates an application programming error.</p> |
| NOSUPPORT  | <p>Not supported. The requested action cannot complete under any circumstance.</p> |
| NOTREADY  | <p>Try again in a short while.</p> |
| FAILED  | <p>The action failed.</p> |
| TIMEOUT  | <p>The action could not be completed in the requested time.</p> |
| STARVATION  | <p>The system is unable to allocate resources to process this request.</p> |
| USER_INTERRUPT  | <p>The FD given as the interrupt is active.</p> |
| MAX_ENUM  |  |
