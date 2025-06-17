---
title: SDI client VAS interface

---

# SDI client VAS interface



## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[vasSetTerminalConfig](group__sdivas.md#function-vassetterminalconfig)**(const std::string & config) |
| int | **[vasGetTerminalConfig](group__sdivas.md#function-vasgetterminalconfig)**(const std::string & appid, std::string & config) |
| int | **[vasGetConfig](group__sdivas.md#function-vasgetconfig)**(const std::string & appid, std::string & config) |
| int | **[vasActivate](group__sdivas.md#function-vasactivate)**(const std::string & appid, const std::string & config, std::string & data) |
| int | **[vasCancel](group__sdivas.md#function-vascancel)**() |
| int | **[vasUpdateConfig](group__sdivas.md#function-vasupdateconfig)**(const std::string & appid, const std::string & config) |
| int | **[vasCancelConfig](group__sdivas.md#function-vascancelconfig)**(const std::string & appid) |
| int | **[vasPreload](group__sdivas.md#function-vaspreload)**(const std::string & appid, const std::string & config) |
| int | **[vasCancelPreload](group__sdivas.md#function-vascancelpreload)**(const std::string & appid) |
| int | **[vasDecrypt](group__sdivas.md#function-vasdecrypt)**(const std::string & appid, const std::string & cipher, std::string & plain) |
| int | **[vasAction](group__sdivas.md#function-vasaction)**(const std::string & appid, const std::string & in, std::string & out) |


## Functions Documentation

### function vasSetTerminalConfig

```
int vasSetTerminalConfig(
    const std::string & config
)
```


**Parameters**: 

  * **config** terminal configuration in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Configure the temrinal with terminal parameters (32-00) 


### function vasGetTerminalConfig

```
int vasGetTerminalConfig(
    const std::string & appid,
    std::string & config
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** terminal configuration in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read the most updated terminal configuration (32-01) 


### function vasGetConfig

```
int vasGetConfig(
    const std::string & appid,
    std::string & config
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** terminal configuration and configuration of all wallets in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Read the most updated wallet configuration (32-02) 


### function vasActivate

```
int vasActivate(
    const std::string & appid,
    const std::string & config,
    std::string & data
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** set of dynamic parameters to be merged with configuration from data base 
  * **data** VAS data received from the handset 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Activates NFC interface, runs through wallet kernel flow and retrieves VAS data. (32-03) 


### function vasCancel

```
int vasCancel()
```


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Cancel technology discovery process (32-04) 


### function vasUpdateConfig

```
int vasUpdateConfig(
    const std::string & appid,
    const std::string & config
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** set of parameters to configure one or multiple wallets in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Configure the terminal with wallet specific parameters. (32-05) 


### function vasCancelConfig

```
int vasCancelConfig(
    const std::string & appid
)
```


**Parameters**: 

  * **appid** application unique identifier 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Clear all the VAS configuration by application ID. (32-06) 


### function vasPreload

```
int vasPreload(
    const std::string & appid,
    const std::string & config
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **config** set of preload parameters to be merged with configuration from data base in JSON format 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Configure the terminal with wallet specific parameters. (32-07) 


### function vasCancelPreload

```
int vasCancelPreload(
    const std::string & appid
)
```


**Parameters**: 

  * **appid** application unique identifier 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Clear preloaded configuration by application ID and pull latest configuration from data base. (32-08) 


### function vasDecrypt

```
int vasDecrypt(
    const std::string & appid,
    const std::string & cipher,
    std::string & plain
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **cipher** VAS data response with the included encrypted message 
  * **plain** VAS data response with the included decrypted message 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

Decrypt an encrypted VAS response. (32-09) 


### function vasAction

```
int vasAction(
    const std::string & appid,
    const std::string & in,
    std::string & out
)
```


**Parameters**: 

  * **appid** application unique identifier 
  * **in** input data 
  * **out** output data 


**Return**: SDI error code ([Result](namespacevfisdi.md#enum-result)) 

VAS action 






-------------------------------

Updated on 2025-06-17 at 11:52:23 +0100