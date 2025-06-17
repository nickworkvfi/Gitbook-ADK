---
title: Low level message interface

---

# Low level message interface



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[sendMessage](group__sdilowlevel.md#function-sendmessage)**(unsigned short cmd, unsigned short p1p2, const bytevector & data) |
| int | **[sendMessage](group__sdilowlevel.md#function-sendmessage)**(unsigned short cmd, const bytevector & data) |
| int | **[receiveMessage](group__sdilowlevel.md#function-receivemessage)**(unsigned short & sw1sw2, bytevector & data) |
| int | **[sendReply](group__sdilowlevel.md#function-sendreply)**(unsigned short cmd, const bytevector & data) |
| int | **[sendReceiveMessage](group__sdilowlevel.md#function-sendreceivemessage)**(unsigned short cmd, unsigned short p1p2, const bytevector & sdata, unsigned short & sw1sw2, bytevector & rdata) |
| int | **[sendReceiveMessage](group__sdilowlevel.md#function-sendreceivemessage)**(unsigned short cmd, const bytevector & sdata, unsigned short & sw1sw2, bytevector & rdata) |


## Functions Documentation

### function sendMessage

```
int sendMessage(
    unsigned short cmd,
    unsigned short p1p2,
    const bytevector & data
)
```


**Parameters**: 

  * **cmd** class and instruction of the command to be sent 
  * **p1p2** P1 and P2 of the command to be sent 
  * **data** command data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

send SDI message 


### function sendMessage

```
inline int sendMessage(
    unsigned short cmd,
    const bytevector & data
)
```


**Parameters**: 

  * **cmd** class and instruction of the command to be sent 
  * **data** command data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

send SDI command with P1P2=0x0000 


### function receiveMessage

```
int receiveMessage(
    unsigned short & sw1sw2,
    bytevector & data
)
```


**Parameters**: 

  * **sw1sw2** SW1 SW2 packed into an unsigned short as returned from SDI 
  * **data** reply data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

receive SDI reply with internal handling of SDI callbacks. 


### function sendReply

```
int sendReply(
    unsigned short cmd,
    const bytevector & data
)
```


**Parameters**: 

  * **cmd** class and instruction of the reply to be sent 
  * **data** command data 


**Return**: 0 in case of success, -1 in case of failure 

send SDI reply for an SDI callback message 


### function sendReceiveMessage

```
int sendReceiveMessage(
    unsigned short cmd,
    unsigned short p1p2,
    const bytevector & sdata,
    unsigned short & sw1sw2,
    bytevector & rdata
)
```


**Parameters**: 

  * **cmd** class and instruction of the command to be sent 
  * **p1p2** P1 and P2 of the command to be sent 
  * **sdata** command data 
  * **sw1sw2** SW1 SW2 packed into an unsigned short as returned from SDI 
  * **rdata** reply data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

send and receive SDI message 


### function sendReceiveMessage

```
inline int sendReceiveMessage(
    unsigned short cmd,
    const bytevector & sdata,
    unsigned short & sw1sw2,
    bytevector & rdata
)
```






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100