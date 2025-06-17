---
title: Device Mode Conversion

---

# Device Mode Conversion




# Preface

This document is for programmers and users who want to perform a device conversion procedure from the production to Application developer mode or "APP-DEV mode" (sometimes referred to as cp-dev, CPdev) on VOS2 devices.

Starting from ADK 4.1 there are 2 types of modes available - APP-DEV unit and Full production devices.


# Conversion of VOS1, VOS2 devices

APP-DEV unit is used for application development and conversion is a one-way process.

On an APP-DEV mode device, development user applications should be used. The prod-signed files shouldn't be uised on comverted devices.

Once converted the unit can never be returned to production status, the unit cannot be used in the field and also no signing card is needed for user applications.


The terminal will only display the conversion menu if certain criteria are met:



* Terminal is a production terminal;
* There are no application signer certificates installed;
* Terminal is not tampered.

The APP-DEV does not work for ux300/ux100 or ux410/ux100 configuration and for vx675. The ADC-DEV conversion should be performed instead. Contact the Support team for instructions.

On multiline terminals (M440, M424, CM5) only the Android side could be converted to APP-DEV. The Engage side couldn't be converted to APP-DEV and remains PROD. For development needs, please use the specific UAT Sponsor for Engage for user-app signing.


## Conversion Procedure



1. Contact your Regional Support team for Conversion procedure instruction.
2. Setup tools and equipment needed for conversion according to instructions (could be different depending on device model).
3. Follow instructions and perform the conversion procedure.
4. According to the procedure, send the 'challenge.dev' file along with the filled form "VF210x App Development Unit Generation Authorization Form.docx" to your support team and they will contact the responsible team to generate the conversion payload file and further instructions.
5. Support team will provide you conversion payload file and further instructions.
6. Follow instructions received by the Support team.


## Using new APP-DEV terminal

An APP-DEV terminal is identified as one in which the hardware SVID value is 7, and the Certificate Tree is "App Development". Both these conditions must be met for the terminal to be treated as an APP-DEV by the Secure Installer.

Login capabilities will automatically be available on APP-DEV devices. "Root" access is not allowed.

A "Nag" screen will periodically be displayed on the LCD of an APP-DEV device. This cannot be disabled.

Some limited '`root'` operations are possible using the '`sudo'` command.

The following is what is currently available with '`sudo'` on an APP-DEV device e.g. you can type '`sudo``ps'`, which gives more detailed output than the regular '`ps'`.



```
/bin/mount * /mnt/pc -t nfs mount an nfs drive at /mnt/pc
/bin/umount /mnt/pc Unmount /mnt/pc
/bin/ps More detailed 'ps'
/usr/bin/top    More detailed 'top'
/usr/local/bin/setconsolestate  Enable/Disable the Linux console on /dev/ttyAMA0
/sbin/reboot    Reboot the system
/bin/ping   ping <ip address>
/bin/netstat    status of network connections
```

Beware that in cases above that contain a wildcard '`*'` character; you can only replace the wildcard part of the command when used with '`sudo'`. The remainder of the command must be typed exactly as specified.

For example, the following will work fine:



```
$ sudo mount 10.71.40.31:/home/someuser -o ro,nolock /mnt/pc -t nfs
```

 The next one, however, will not work, even though it is a valid '`mount'` command (and would work fine if used by '`root'` without the '`sudo'` prefix):



```
$ sudo -t nfs mount 10.71.40.31:/home/someuser -o ro,nolock /mnt/pc
```

 So only an nfs mount is currently allowed.

If the unit is successfully converted to APP DEV – no signing card is needed. If you are using the File Signing Tool (FST), you should use the "TEST (no card)" option to sign the file. See the detailed description of signing using the FST here: [Start Signing Process].


# Conversion of VOS3 devices


## Use cases

Use of VOS3 APP-DEV devices for Application development teams inside and outside of Verifone.


## Conversion Procedure

The following procedure is for an engineer, this guide is used to convert a device from PRODUCTION Mode to APPDEV / OSDEV for further development work.


### Collection of Device Data



1. Boot your payment terminal into fastboot mode (e.g. on P630 hold the Red "X" button whilst applying power to the device).
2. Either use the following command below or read the MSM-Serial-Number of the device off the fastboot screen and note them down.



```
fastboot getvar msm-serial-number ```

On Linux (Ubuntu flavored), you may need to use sudo for any fastboot command:

```
sudo fastboot getvar msm-serial-number ```


### Apply for Device Token

To apply for the device conversion token please contact the Support team.


### Apply Token to Terminal



1. Download the token from the web page using the download button or collect the zipped file from artifactory.
2. Boot your payment terminal into fastboot again and then use the following commands to apply the token to your device.



```
fastboot flash devinfo <b>tokenname</b>.img ```



```
fastboot reboot bootloader ```



1. Once the device has been rebooted it should now show the token you have applied in the AP Dev Status line of the fastboot screen. Or you can use the following command to run back the Token in the CMD window:



```
fastboot getvar vfi-mode ```


### Apply Required variant of ADK fast boot Script

If you have not yet loaded a proper SW, you may end up in an error screen after restarting the device. This section explains, how you apply a new fast boot image to your device.

If the SW doesn not match the token, you will see the error "The device is corrupt".



1. Use the <Cancel> key to enter "Options menu".
2. Download the correct ADK package, as per the table above, from release notes page.
3. Extract the .img files and script file (.sh for Linux)
4. Run a CMD prompt instance, enter this folder and then run the following command:

On Windows: 

```
install.bat ```

On Linux: 

```
./install.sh ```

Once this script has finished the device should reboot into the ADK MAC Screen. If it doesn't you need to go back and check if you have applied the token correctly.


## Remove token and convert back to production


### Tamper management

Devices converted back to production mode will be tampered. De tampering can only happen in a repair facility or similar site.


### Token removal and SW installation

Fastboot provides a command to delete tokens:



```
fastboot oem remove-token ```

As an alternative, you can apply a "clear token" img.

As a second step, install a production fastboot file. Instead of applying a token, remove it as explained above. 

-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
