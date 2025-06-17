---
title: VOS3 Development Helper

---

# VOS3 Development Helper




# VOS3 Development helper


# VOS3 Development helper


## Reboot

As regular users do not have the capabilities to reboot the device, this command allows to reboot manually as a helper:



```cpp
vfidev reboot
```


## Devhome: shorter development cycle

During development of applications, frequent packaging and installations may slow down the development cycle. For this purpose, the "devhome" feature is available: this will create a writable flash filesystem (instead of a read-only flash filesystem) for the home of the usrX. Developer can then directly update files, executables and libraries in this "devhome" without installation and reboots.

This ease of use comes with the following constaints:

* developers can update shared object libraries only in the limit that ldconfig is not needed to update symlinks and caches. In that event, make one installation and pursue with devhome.

The following command will enable the devhome for current user: 

```cpp
vfidev devhome enable
```

Similarly, disabling is done with: 

```cpp
vfidev devhome disable
```

To check devhome status: 

```cpp
vfidev devhome status
```

Please remember that the "devhome" feature is a convenient feature for development however no sanity checks are done and installations are mandatory on production devices. It is therefore highly recommended to test with actual installations. 

-------------------------------

Updated on 2025-06-17 at 11:52:30 +0100
