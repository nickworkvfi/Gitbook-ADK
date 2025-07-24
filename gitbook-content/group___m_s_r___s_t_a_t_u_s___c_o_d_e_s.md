---
hidden: true
title: Status code
---

[Macros](#define-members)

These values indicate the status of each read track. [More\...](#details)

|          |                                                              |
|----------|--------------------------------------------------------------|
| Macros   |                                                              |
| #define  | [MSR_STATUS_NOERR](#ga791110bd9543183bccb3576c41575938)   0  |
| #define  | [MSR_STATUS_NODATA](#ga78f00eb4a34fb6966520570d235bd36a)   1 |
| #define  | [MSR_STATUS_NOSTX](#ga5da86efc698957f2c01ffb169c9d1102)   2  |
| #define  | [MSR_STATUS_NOETX](#ga759e75448ce4d6b1560c5b65e2d19f65)   3  |
| #define  | [MSR_STATUS_BADLRC](#gaf431be387ced31744bc6456927ada79c)   4 |
| #define  | [MSR_STATUS_PARITY](#gaf57d5c094671227287fc967b5750b98a)   5 |
| #define  | [MSR_STATUS_REVETX](#ga3424e09ced6c7d2a7dae1b44e6308cfe)   6 |
| #define  | [MSR_STATUS_BADJIS](#ga0c6116104431a3b7c405427a07142dd1)   7 |
| #define  | [MSR_STATUS_BADTRK](#ga23f94d4756b6a52ea54f9ad22c33cea6)   8 |

## DetailedDescription {#detailed-description}

These values indicate the status of each read track.

## MacroDefinition Documentation {#macro-definition-documentation}

## MSR_STATUS_BADJIS <a href="#ga0c6116104431a3b7c405427a07142dd1" id="ga0c6116104431a3b7c405427a07142dd1"></a>

<p>#define MSR_STATUS_BADJIS   7</p>

Insufficient printable characters.

## MSR_STATUS_BADLRC <a href="#gaf431be387ced31744bc6456927ada79c" id="gaf431be387ced31744bc6456927ada79c"></a>

<p>#define MSR_STATUS_BADLRC   4</p>

Missing LRC or LRC error.

## MSR_STATUS_BADTRK <a href="#ga23f94d4756b6a52ea54f9ad22c33cea6" id="ga23f94d4756b6a52ea54f9ad22c33cea6"></a>

<p>#define MSR_STATUS_BADTRK   8</p>

Insufficient characters.

## MSR_STATUS_NODATA <a href="#ga78f00eb4a34fb6966520570d235bd36a" id="ga78f00eb4a34fb6966520570d235bd36a"></a>

<p>#define MSR_STATUS_NODATA   1</p>

No data.

## MSR_STATUS_NOERR <a href="#ga791110bd9543183bccb3576c41575938" id="ga791110bd9543183bccb3576c41575938"></a>

<p>#define MSR_STATUS_NOERR   0</p>

Valid data.

## MSR_STATUS_NOETX <a href="#ga759e75448ce4d6b1560c5b65e2d19f65" id="ga759e75448ce4d6b1560c5b65e2d19f65"></a>

<p>#define MSR_STATUS_NOETX   3</p>

Missing end sentinel or excessive data.

## MSR_STATUS_NOSTX <a href="#ga5da86efc698957f2c01ffb169c9d1102" id="ga5da86efc698957f2c01ffb169c9d1102"></a>

<p>#define MSR_STATUS_NOSTX   2</p>

Missing start sentinel or insufficient data.

## MSR_STATUS_PARITY <a href="#gaf57d5c094671227287fc967b5750b98a" id="gaf57d5c094671227287fc967b5750b98a"></a>

<p>#define MSR_STATUS_PARITY   5</p>

Parity error.

## MSR_STATUS_REVETX <a href="#ga3424e09ced6c7d2a7dae1b44e6308cfe" id="ga3424e09ced6c7d2a7dae1b44e6308cfe"></a>

<p>#define MSR_STATUS_REVETX   6</p>

Reversed end sentinel found.
