---
title: sec/src/api/export/sec/secError.h
summary: ADK Security Service Error Codes. 

---

# sec/src/api/export/sec/secError.h

ADK Security Service Error Codes.  [More...](#detailed-description)

## Namespaces

| Name           |
| -------------- |
| **[com_adksec_cmd](namespacecom__adksec__cmd.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[EHWPOISON](sec_error_8h.md#define-ehwpoison)**  |
|  | **[RESP_CODE_OLD_DEFAULT](sec_error_8h.md#define-resp-code-old-default)**  |
|  | **[ERRORS](sec_error_8h.md#define-errors)**(DO)  |
|  | **[DO_ENUM](sec_error_8h.md#define-do-enum)**(Name, Group, Offset, Old, Description)  |
|  | **[LOG_THROW_EX](sec_error_8h.md#define-log-throw-ex)**(error, txt)  |
|  | **[LOG_THROW](sec_error_8h.md#define-log-throw)**(error)  |
|  | **[LOG_ASSERT](sec_error_8h.md#define-log-assert)**(assertion)  |
|  | **[LOG_HEXDUMP](sec_error_8h.md#define-log-hexdump)**(vec)  |
|  | **[LOG_RETURN_EX](sec_error_8h.md#define-log-return-ex)**(error, txt)  |
|  | **[LOG_RETURN](sec_error_8h.md#define-log-return)**(error)  |
|  | **[RETURN_ON](sec_error_8h.md#define-return-on)**(func)  |

## Detailed Description

ADK Security Service Error Codes. 

**Author**: JensW

**Date**: 19.04.2016 



## Macros Documentation

### define EHWPOISON

```cpp
#define EHWPOISON 133     /* Memory page has hardware error */
```


### define RESP_CODE_OLD_DEFAULT

```cpp
#define RESP_CODE_OLD_DEFAULT RESP_CODE_FAILED
```


### define ERRORS

```cpp
#define ERRORS(
    DO
)

```


### define DO_ENUM

```cpp
#define DO_ENUM(
    Name,
    Group,
    Offset,
    Old,
    Description
)
/** Description (in compatibility mapped to Old) */ Name = Group + Offset,
```


### define LOG_THROW_EX

```cpp
#define LOG_THROW_EX(
    error,
    txt
)
            { \
                SEC_LOG_ERROR(txt " throw " #error); \
                throw (com_adksec_cmd::secError)error; \
            }
```


### define LOG_THROW

```cpp
#define LOG_THROW(
    error
)
LOG_THROW_EX(error, "")
```


### define LOG_ASSERT

```cpp
#define LOG_ASSERT(
    assertion
)
{ \
    if(!(assertion)) \
    { \
        SEC_LOG_CRIT("Assertion failed: " #assertion); \
        LOG_THROW(com_adksec_cmd::EsecAssertion); \
    } \
}
```


### define LOG_HEXDUMP

```cpp
#define LOG_HEXDUMP(
    vec
)
SEC_DBG_HEXDUMP_TRACE(#vec, &vec[0], vec.size())
```


### define LOG_RETURN_EX

```cpp
#define LOG_RETURN_EX(
    error,
    txt
)
        { \
            SEC_LOG_ERROR(txt " return %s (0x%08x): %s", getErrorString(error).c_str(), error, getErrorDescription(error).c_str()); \
            return (com_adksec_cmd::secError)error; \
        }
```


### define LOG_RETURN

```cpp
#define LOG_RETURN(
    error
)
LOG_RETURN_EX(error, "")
```


### define RETURN_ON

```cpp
#define RETURN_ON(
    func
)
{secError err=func; if(err) LOG_RETURN_EX(err, "")}
```


## Source code

```cpp

#ifndef ENCGOVERNOR_SECERROR_H_
#define ENCGOVERNOR_SECERROR_H_

#include <errno.h>

#ifdef _VRXEVO
#include <SVC_NET.H>

#define ELOOP       40  /* Too many symbolic links encountered */
#define ENOMSG      42  /* No message of desired type */
#define EIDRM       43  /* Identifier removed */
#define ECHRNG      44  /* Channel number out of range */
#define EL2NSYNC    45  /* Level 2 not synchronized */
#define EL3HLT      46  /* Level 3 halted */
#define EL3RST      47  /* Level 3 reset */
#define ELNRNG      48  /* Link number out of range */
#define EUNATCH     49  /* Protocol driver not attached */
#define ENOCSI      50  /* No CSI structure available */
#define EL2HLT      51  /* Level 2 halted */
#define EBADE       52  /* Invalid exchange */
#define EBADR       53  /* Invalid request descriptor */
#define EXFULL      54  /* Exchange full */
#define ENOANO      55  /* No anode */
#define EBADRQC     56  /* Invalid request code */
#define EBADSLT     57  /* Invalid slot */
#define EBFONT      59  /* Bad font file format */
#define ENOSTR      60  /* Device not a stream */
#define ENODATA     61  /* No data available */
#define ETIME       62  /* Timer expired */
#define ENOSR       63  /* Out of streams resources */
#define ENONET      64  /* Machine is not on the network */
#define ENOPKG      65  /* Package not installed */
#define EREMOTE     66  /* Object is remote */
#define ENOLINK     67  /* Link has been severed */
#define EADV        68  /* Advertise error */
#define ESRMNT      69  /* Srmount error */
#define ECOMM       70  /* Communication error on send */
//#define EPROTO      71  /* Protocol error */
#define EMULTIHOP   72  /* Multihop attempted */
#define EDOTDOT     73  /* RFS specific error */
#define EBADMSG     74  /* Not a data message */
#define EOVERFLOW   75  /* Value too large for defined data type */
#define ENOTUNIQ    76  /* Name not unique on network */
#define EBADFD      77  /* File descriptor in bad state */
#define EREMCHG     78  /* Remote address changed */
#define ELIBACC     79  /* Can not access a needed shared library */
#define ELIBBAD     80  /* Accessing a corrupted shared library */
#define ELIBSCN     81  /* .lib section in a.out corrupted */
#define ELIBMAX     82  /* Attempting to link in too many shared libraries */
#define ELIBEXEC    83  /* Cannot exec a shared library directly */
#define EILSEQ      84  /* Illegal byte sequence */
#define ERESTART    85  /* Interrupted system call should be restarted */
#define ESTRPIPE    86  /* Streams pipe error */
#define EUSERS      87  /* Too many users */

#define ESTALE      116 /* Stale NFS file handle */
#define EUCLEAN     117 /* Structure needs cleaning */
#define ENOTNAM     118 /* Not a XENIX named type file */
#define ENAVAIL     119 /* No XENIX semaphores available */
#define EISNAM      120 /* Is a named type file */
#define EREMOTEIO   121 /* Remote I/O error */
#define EDQUOT      122 /* Quota exceeded */
#define ENOMEDIUM   123 /* No medium found */
#define EMEDIUMTYPE 124 /* Wrong medium type */
#define ECANCELED   125 /* Operation Canceled */
#define ENOKEY      126 /* Required key not available */
#define EKEYEXPIRED 127 /* Key has expired */
#define EKEYREVOKED 128 /* Key has been revoked */
#define EKEYREJECTED    129 /* Key was rejected by service */
#define EOWNERDEAD  130 /* Owner died */
#define ENOTRECOVERABLE 131 /* State not recoverable */
#define ERFKILL     132 /* Operation not possible due to RF-kill */
#endif

#ifndef EHWPOISON
    #define EHWPOISON       133     /* Memory page has hardware error */
#endif


#include <stdint.h>
#include <string>
#if defined( LOGAPI_ENABLE_DEBUG )
    #if defined VFI_PLATFORM_VOS3 || defined _VOS3
        #define print_stacktrace()
    #else
        #include "stacktrace.h"
    #endif
#else
  #include <stdio.h>
  #include <stdlib.h>
  #include <execinfo.h>
  #include <cxxabi.h>
  #include <string.h>
#endif

namespace com_adksec_cmd
{

enum secErrorGroup {
    EsecGroupCommon                  = 0x00000000, 
    EsecGroupApi                     = 0x00010000, 
    EsecGroupEncGov                  = 0x00020000, 
    EsecGroupIPC                     = 0x00030000, 
    EsecGroupEncConfig               = 0x00040000, 
    EsecGroupEncTA                   = 0x00050000, 

    EsecGroupEncVSS                  = 0x00110000, 
    EsecGroupEncIPP                  = 0x00120000, 
    EsecGroupEncSRED                 = 0x00130000, 
    EsecGroupEncADE                  = 0x00140000, 
    EsecGroupEncBendigo              = 0x00150000, 
    EsecGroupEncVOL                  = 0x00160000, 
    EsecGroupEncVDSP                 = 0x00170000, 
    EsecGroupEncRSA                  = 0x00180000, 
    EsecGroupEncAES                  = 0x00190000, 
    EsecGroupEncCryptRW              = 0x001A0000, 
    EsecGroupEncMSK                  = 0x001B0000, 
    EsecGroupEncCustRKL              = 0x001C0000, 
    EsecGroupDUKPT                   = 0x001D0000, 

    EsecGroupMASK                    = 0x00FF0000, // auxiliary element
};

typedef uint32_t secError_t;


#define RESP_CODE_OLD_DEFAULT        RESP_CODE_FAILED

/*
 * @internal
 */
//Following macro-table is for generation of secError, getErrorString(), getErrorDescription() and getOldError(). Format is:
//
//( Name                          , Group          , Offset          , Old              , Description

#define ERRORS(DO) \
DO( EsecOK                        , 0              , 0               , RESP_CODE_SUCCESS    , "everything is OK") \
DO( EsecPERM                      , EsecGroupCommon, EPERM           , RESP_CODE_OLD_DEFAULT, "Operation not permitted") \
DO( EsecNOENT                     , EsecGroupCommon, ENOENT          , RESP_CODE_OLD_DEFAULT, "No such file or directory") \
DO( EsecSRCH                      , EsecGroupCommon, ESRCH           , RESP_CODE_OLD_DEFAULT, "No such process") \
DO( EsecINTR                      , EsecGroupCommon, EINTR           , RESP_CODE_OLD_DEFAULT, "Interrupted system call") \
DO( EsecIO                        , EsecGroupCommon, EIO             , RESP_CODE_OLD_DEFAULT, "I/O error") \
DO( EsecNXIO                      , EsecGroupCommon, ENXIO           , RESP_CODE_OLD_DEFAULT, "No such device or address") \
DO( Esec2BIG                      , EsecGroupCommon, E2BIG           , RESP_CODE_OLD_DEFAULT, "Argument list too long") \
DO( EsecNOEXEC                    , EsecGroupCommon, ENOEXEC         , RESP_CODE_OLD_DEFAULT, "Exec format error") \
DO( EsecBADF                      , EsecGroupCommon, EBADF           , RESP_CODE_OLD_DEFAULT, "Bad file number") \
DO( EsecCHILD                     , EsecGroupCommon, ECHILD          , RESP_CODE_OLD_DEFAULT, "No child processes") \
DO( EsecAGAIN                     , EsecGroupCommon, EAGAIN          , RESP_CODE_OLD_DEFAULT, "Try again / Operation would block") \
DO( EsecNOMEM                     , EsecGroupCommon, ENOMEM          , RESP_CODE_OLD_DEFAULT, "Out of memory") \
DO( EsecACCES                     , EsecGroupCommon, EACCES          , RESP_CODE_OLD_DEFAULT, "Permission denied") \
DO( EsecFAULT                     , EsecGroupCommon, EFAULT          , RESP_CODE_OLD_DEFAULT, "Bad address") \
DO( EsecNOTBLK                    , EsecGroupCommon, ENOTBLK         , RESP_CODE_OLD_DEFAULT, "Block device required") \
DO( EsecBUSY                      , EsecGroupCommon, EBUSY           , RESP_CODE_OLD_DEFAULT, "Device or resource busy") \
DO( EsecEXIST                     , EsecGroupCommon, EEXIST          , RESP_CODE_OLD_DEFAULT, "File exists") \
DO( EsecXDEV                      , EsecGroupCommon, EXDEV           , RESP_CODE_OLD_DEFAULT, "Cross-device link") \
DO( EsecNODEV                     , EsecGroupCommon, ENODEV          , RESP_CODE_OLD_DEFAULT, "No such device") \
DO( EsecNOTDIR                    , EsecGroupCommon, ENOTDIR         , RESP_CODE_OLD_DEFAULT, "Not a directory") \
DO( EsecISDIR                     , EsecGroupCommon, EISDIR          , RESP_CODE_OLD_DEFAULT, "Is a directory") \
DO( EsecINVAL                     , EsecGroupCommon, EINVAL          , RESP_CODE_INVAL      , "Invalid argument RESP_CODE_INVAL") \
DO( EsecNFILE                     , EsecGroupCommon, ENFILE          , RESP_CODE_OLD_DEFAULT, "File table overflow") \
DO( EsecMFILE                     , EsecGroupCommon, EMFILE          , RESP_CODE_OLD_DEFAULT, "Too many open files") \
DO( EsecNOTTY                     , EsecGroupCommon, ENOTTY          , RESP_CODE_OLD_DEFAULT, "Not a typewriter") \
DO( EsecTXTBSY                    , EsecGroupCommon, ETXTBSY         , RESP_CODE_OLD_DEFAULT, "Text file busy") \
DO( EsecFBIG                      , EsecGroupCommon, EFBIG           , RESP_CODE_OLD_DEFAULT, "File too large") \
DO( EsecNOSPC                     , EsecGroupCommon, ENOSPC          , RESP_CODE_OLD_DEFAULT, "No space left on device") \
DO( EsecSPIPE                     , EsecGroupCommon, ESPIPE          , RESP_CODE_OLD_DEFAULT, "Illegal seek") \
DO( EsecROFS                      , EsecGroupCommon, EROFS           , RESP_CODE_OLD_DEFAULT, "Read-only file system") \
DO( EsecMLINK                     , EsecGroupCommon, EMLINK          , RESP_CODE_OLD_DEFAULT, "Too many links") \
DO( EsecPIPE                      , EsecGroupCommon, EPIPE           , RESP_CODE_OLD_DEFAULT, "Broken pipe") \
DO( EsecDOM                       , EsecGroupCommon, EDOM            , RESP_CODE_OLD_DEFAULT, "Math argument out of domain of func") \
DO( EsecRANGE                     , EsecGroupCommon, ERANGE          , RESP_CODE_OLD_DEFAULT, "Math result not representable") \
\
DO( EsecDEADLK                    , EsecGroupCommon, EDEADLK         , RESP_CODE_OLD_DEFAULT, "Resource deadlock would occur") \
DO( EsecNAMETOOLONG               , EsecGroupCommon, ENAMETOOLONG    , RESP_CODE_OLD_DEFAULT, "File name too long") \
DO( EsecNOLCK                     , EsecGroupCommon, ENOLCK          , RESP_CODE_OLD_DEFAULT, "No record locks available") \
DO( EsecNOSYS                     , EsecGroupCommon, ENOSYS          , RESP_CODE_OLD_DEFAULT, "Function not implemented") \
DO( EsecNOTEMPTY                  , EsecGroupCommon, ENOTEMPTY       , RESP_CODE_OLD_DEFAULT, "Directory not empty") \
DO( EsecLOOP                      , EsecGroupCommon, ELOOP           , RESP_CODE_OLD_DEFAULT, "Too many symbolic links encountered") \
DO( EsecNOMSG                     , EsecGroupCommon, ENOMSG          , RESP_CODE_OLD_DEFAULT, "No message of desired type") \
DO( EsecIDRM                      , EsecGroupCommon, EIDRM           , RESP_CODE_OLD_DEFAULT, "Identifier removed") \
DO( EsecCHRNG                     , EsecGroupCommon, ECHRNG          , RESP_CODE_OLD_DEFAULT, "Channel number out of range") \
DO( EsecL2NSYNC                   , EsecGroupCommon, EL2NSYNC        , RESP_CODE_OLD_DEFAULT, "Level 2 not synchronized") \
DO( EsecL3HLT                     , EsecGroupCommon, EL3HLT          , RESP_CODE_OLD_DEFAULT, "Level 3 halted") \
DO( EsecL3RST                     , EsecGroupCommon, EL3RST          , RESP_CODE_OLD_DEFAULT, "Level 3 reset") \
DO( EsecLNRNG                     , EsecGroupCommon, ELNRNG          , RESP_CODE_OLD_DEFAULT, "Link number out of range") \
DO( EsecUNATCH                    , EsecGroupCommon, EUNATCH         , RESP_CODE_OLD_DEFAULT, "Protocol driver not attached") \
DO( EsecNOCSI                     , EsecGroupCommon, ENOCSI          , RESP_CODE_OLD_DEFAULT, "No CSI structure available") \
DO( EsecL2HLT                     , EsecGroupCommon, EL2HLT          , RESP_CODE_OLD_DEFAULT, "Level 2 halted") \
DO( EsecBADE                      , EsecGroupCommon, EBADE           , RESP_CODE_OLD_DEFAULT, "Invalid exchange") \
DO( EsecBADR                      , EsecGroupCommon, EBADR           , RESP_CODE_OLD_DEFAULT, "Invalid request descriptor") \
DO( EsecXFULL                     , EsecGroupCommon, EXFULL          , RESP_CODE_OLD_DEFAULT, "Exchange full") \
DO( EsecNOANO                     , EsecGroupCommon, ENOANO          , RESP_CODE_OLD_DEFAULT, "No anode") \
DO( EsecBADRQC                    , EsecGroupCommon, EBADRQC         , RESP_CODE_OLD_DEFAULT, "Invalid request code") \
DO( EsecBADSLT                    , EsecGroupCommon, EBADSLT         , RESP_CODE_OLD_DEFAULT, "Invalid slot") \
DO( EsecBFONT                     , EsecGroupCommon, EBFONT          , RESP_CODE_OLD_DEFAULT, "Bad font file format") \
DO( EsecNOSTR                     , EsecGroupCommon, ENOSTR          , RESP_CODE_OLD_DEFAULT, "Device not a stream") \
DO( EsecNODATA                    , EsecGroupCommon, ENODATA         , RESP_CODE_OLD_DEFAULT, "No data available") \
DO( EsecTIME                      , EsecGroupCommon, ETIME           , RESP_CODE_OLD_DEFAULT, "Timer expired") \
DO( EsecNOSR                      , EsecGroupCommon, ENOSR           , RESP_CODE_OLD_DEFAULT, "Out of streams resources") \
DO( EsecNONET                     , EsecGroupCommon, ENONET          , RESP_CODE_OLD_DEFAULT, "Machine is not on the network") \
DO( EsecNOPKG                     , EsecGroupCommon, ENOPKG          , RESP_CODE_OLD_DEFAULT, "Package not installed") \
DO( EsecREMOTE                    , EsecGroupCommon, EREMOTE         , RESP_CODE_OLD_DEFAULT, "Object is remote") \
DO( EsecNOLINK                    , EsecGroupCommon, ENOLINK         , RESP_CODE_OLD_DEFAULT, "Link has been severed") \
DO( EsecADV                       , EsecGroupCommon, EADV            , RESP_CODE_OLD_DEFAULT, "Advertise error") \
DO( EsecSRMNT                     , EsecGroupCommon, ESRMNT          , RESP_CODE_OLD_DEFAULT, "Srmount error") \
DO( EsecCOMM                      , EsecGroupCommon, ECOMM           , RESP_CODE_OLD_DEFAULT, "Communication error on send") \
DO( EsecPROTO                     , EsecGroupCommon, EPROTO          , RESP_CODE_OLD_DEFAULT, "Protocol error") \
DO( EsecMULTIHOP                  , EsecGroupCommon, EMULTIHOP       , RESP_CODE_OLD_DEFAULT, "Multihop attempted") \
DO( EsecDOTDOT                    , EsecGroupCommon, EDOTDOT         , RESP_CODE_OLD_DEFAULT, "RFS specific error") \
DO( EsecBADMSG                    , EsecGroupCommon, EBADMSG         , RESP_CODE_OLD_DEFAULT, "Not a data message") \
DO( EsecOVERFLOW                  , EsecGroupCommon, EOVERFLOW       , RESP_CODE_OLD_DEFAULT, "Value too large for defined data type") \
DO( EsecNOTUNIQ                   , EsecGroupCommon, ENOTUNIQ        , RESP_CODE_OLD_DEFAULT, "Name not unique on network") \
DO( EsecBADFD                     , EsecGroupCommon, EBADFD          , RESP_CODE_OLD_DEFAULT, "File descriptor in bad state") \
DO( EsecREMCHG                    , EsecGroupCommon, EREMCHG         , RESP_CODE_OLD_DEFAULT, "Remote address changed") \
DO( EsecLIBACC                    , EsecGroupCommon, ELIBACC         , RESP_CODE_OLD_DEFAULT, "Can not access a needed shared library") \
DO( EsecLIBBAD                    , EsecGroupCommon, ELIBBAD         , RESP_CODE_OLD_DEFAULT, "Accessing a corrupted shared library") \
DO( EsecLIBSCN                    , EsecGroupCommon, ELIBSCN         , RESP_CODE_OLD_DEFAULT, ".lib section in a.out corrupted") \
DO( EsecLIBMAX                    , EsecGroupCommon, ELIBMAX         , RESP_CODE_OLD_DEFAULT, "Attempting to link in too many shared libraries") \
DO( EsecLIBEXEC                   , EsecGroupCommon, ELIBEXEC        , RESP_CODE_OLD_DEFAULT, "Cannot exec a shared library directly") \
DO( EsecILSEQ                     , EsecGroupCommon, EILSEQ          , RESP_CODE_OLD_DEFAULT, "Illegal byte sequence") \
DO( EsecRESTART                   , EsecGroupCommon, ERESTART        , RESP_CODE_OLD_DEFAULT, "Interrupted system call should be restarted") \
DO( EsecSTRPIPE                   , EsecGroupCommon, ESTRPIPE        , RESP_CODE_OLD_DEFAULT, "Streams pipe error") \
DO( EsecUSERS                     , EsecGroupCommon, EUSERS          , RESP_CODE_OLD_DEFAULT, "Too many users") \
DO( EsecNOTSOCK                   , EsecGroupCommon, ENOTSOCK        , RESP_CODE_OLD_DEFAULT, "Socket operation on non-socket") \
DO( EsecDESTADDRREQ               , EsecGroupCommon, EDESTADDRREQ    , RESP_CODE_OLD_DEFAULT, "Destination address required") \
DO( EsecMSGSIZE                   , EsecGroupCommon, EMSGSIZE        , RESP_CODE_OLD_DEFAULT, "Message too long") \
DO( EsecPROTOTYPE                 , EsecGroupCommon, EPROTOTYPE      , RESP_CODE_OLD_DEFAULT, "Protocol wrong type for socket") \
DO( EsecNOPROTOOPT                , EsecGroupCommon, ENOPROTOOPT     , RESP_CODE_OLD_DEFAULT, "Protocol not available") \
DO( EsecPROTONOSUPPORT            , EsecGroupCommon, EPROTONOSUPPORT , RESP_CODE_OLD_DEFAULT, "Protocol not supported") \
DO( EsecSOCKTNOSUPPORT            , EsecGroupCommon, ESOCKTNOSUPPORT , RESP_CODE_OLD_DEFAULT, "Socket type not supported") \
DO( EsecOPNOTSUPP                 , EsecGroupCommon, EOPNOTSUPP      , RESP_CODE_OLD_DEFAULT, "Operation not supported on transport endpoint") \
DO( EsecPFNOSUPPORT               , EsecGroupCommon, EPFNOSUPPORT    , RESP_CODE_OLD_DEFAULT, "Protocol family not supported") \
DO( EsecAFNOSUPPORT               , EsecGroupCommon, EAFNOSUPPORT    , RESP_CODE_OLD_DEFAULT, "Address family not supported by protocol") \
DO( EsecADDRINUSE                 , EsecGroupCommon, EADDRINUSE      , RESP_CODE_OLD_DEFAULT, "Address already in use") \
DO( EsecADDRNOTAVAIL              , EsecGroupCommon, EADDRNOTAVAIL   , RESP_CODE_OLD_DEFAULT, "Cannot assign requested address") \
DO( EsecNETDOWN                   , EsecGroupCommon, ENETDOWN        , RESP_CODE_OLD_DEFAULT, "Network is down") \
DO( EsecNETUNREACH                , EsecGroupCommon, ENETUNREACH     , RESP_CODE_OLD_DEFAULT, "Network is unreachable") \
DO( EsecNETRESET                  , EsecGroupCommon, ENETRESET       , RESP_CODE_OLD_DEFAULT, "Network dropped connection because of reset") \
DO( EsecCONNABORTED               , EsecGroupCommon, ECONNABORTED    , RESP_CODE_OLD_DEFAULT, "Software caused connection abort") \
DO( EsecCONNRESET                 , EsecGroupCommon, ECONNRESET      , RESP_CODE_OLD_DEFAULT, "Connection reset by peer") \
DO( EsecNOBUFS                    , EsecGroupCommon, ENOBUFS         , RESP_CODE_OLD_DEFAULT, "No buffer space available") \
DO( EsecISCONN                    , EsecGroupCommon, EISCONN         , RESP_CODE_OLD_DEFAULT, "Transport endpoint is already connected") \
DO( EsecNOTCONN                   , EsecGroupCommon, ENOTCONN        , RESP_CODE_OLD_DEFAULT, "Transport endpoint is not connected") \
DO( EsecSHUTDOWN                  , EsecGroupCommon, ESHUTDOWN       , RESP_CODE_OLD_DEFAULT, "Cannot send after transport endpoint shutdown") \
DO( EsecTOOMANYREFS               , EsecGroupCommon, ETOOMANYREFS    , RESP_CODE_OLD_DEFAULT, "Too many references: cannot splice") \
DO( EsecTIMEDOUT                  , EsecGroupCommon, ETIMEDOUT       , RESP_CODE_OLD_DEFAULT, "Connection timed out") \
DO( EsecCONNREFUSED               , EsecGroupCommon, ECONNREFUSED    , RESP_CODE_OLD_DEFAULT, "Connection refused") \
DO( EsecHOSTDOWN                  , EsecGroupCommon, EHOSTDOWN       , RESP_CODE_OLD_DEFAULT, "Host is down") \
DO( EsecHOSTUNREACH               , EsecGroupCommon, EHOSTUNREACH    , RESP_CODE_OLD_DEFAULT, "No route to host") \
DO( EsecALREADY                   , EsecGroupCommon, EALREADY        , RESP_CODE_OLD_DEFAULT, "Operation already in progress") \
DO( EsecINPROGRESS                , EsecGroupCommon, EINPROGRESS     , RESP_CODE_OLD_DEFAULT, "Operation now in progress") \
DO( EsecSTALE                     , EsecGroupCommon, ESTALE          , RESP_CODE_OLD_DEFAULT, "Stale NFS file handle") \
DO( EsecUCLEAN                    , EsecGroupCommon, EUCLEAN         , RESP_CODE_OLD_DEFAULT, "Structure needs cleaning") \
DO( EsecNOTNAM                    , EsecGroupCommon, ENOTNAM         , RESP_CODE_OLD_DEFAULT, "Not a XENIX named type file") \
DO( EsecNAVAIL                    , EsecGroupCommon, ENAVAIL         , RESP_CODE_OLD_DEFAULT, "No XENIX semaphores available") \
DO( EsecISNAM                     , EsecGroupCommon, EISNAM          , RESP_CODE_OLD_DEFAULT, "Is a named type file") \
DO( EsecREMOTEIO                  , EsecGroupCommon, EREMOTEIO       , RESP_CODE_OLD_DEFAULT, "Remote I/O error") \
DO( EsecDQUOT                     , EsecGroupCommon, EDQUOT          , RESP_CODE_OLD_DEFAULT, "Quota exceeded") \
DO( EsecNOMEDIUM                  , EsecGroupCommon, ENOMEDIUM       , RESP_CODE_OLD_DEFAULT, "No medium found") \
DO( EsecMEDIUMTYPE                , EsecGroupCommon, EMEDIUMTYPE     , RESP_CODE_OLD_DEFAULT, "Wrong medium type") \
DO( EsecCANCELED                  , EsecGroupCommon, ECANCELED       , RESP_CODE_OLD_DEFAULT, "Operation Canceled") \
DO( EsecNOKEY                     , EsecGroupCommon, ENOKEY          , RESP_CODE_OLD_DEFAULT, "Required key not available") \
DO( EsecKEYEXPIRED                , EsecGroupCommon, EKEYEXPIRED     , RESP_CODE_OLD_DEFAULT, "Key has expired") \
DO( EsecKEYREVOKED                , EsecGroupCommon, EKEYREVOKED     , RESP_CODE_OLD_DEFAULT, "Key has been revoked") \
DO( EsecKEYREJECTED               , EsecGroupCommon, EKEYREJECTED    , RESP_CODE_OLD_DEFAULT, "Key was rejected by service") \
DO( EsecOWNERDEAD                 , EsecGroupCommon, EOWNERDEAD      , RESP_CODE_OLD_DEFAULT, "Owner died") \
DO( EsecNOTRECOVERABLE            , EsecGroupCommon, ENOTRECOVERABLE , RESP_CODE_OLD_DEFAULT, "State not recoverable") \
DO( EsecRFKILL                    , EsecGroupCommon, ERFKILL         , RESP_CODE_OLD_DEFAULT, "Operation not possible due to RF-kill") \
DO( EsecHWPOISON                  , EsecGroupCommon, EHWPOISON       , RESP_CODE_OLD_DEFAULT, "Memory page has hardware error") \
\
DO( EsecAssertion                 , EsecGroupCommon, 0xFFFE          , RESP_CODE_OLD_DEFAULT, "internal Assertion failed, please report this BUG with full trace") \
DO( EsecUnknown                   , EsecGroupCommon, 0xFFFF          , RESP_CODE_OLD_DEFAULT, "fallback to catch unconvertible exceptions") \
\
DO( EsecModuleCreateFailure       , EsecGroupEncGov, 0x0001, RESP_CODE_OLD_DEFAULT, "module cannot be created for command processing") \
DO( EsecGetKeyInfoFailure         , EsecGroupEncGov, 0x0002, RESP_CODE_OLD_DEFAULT, "K81 Get Key Info function failure. More details see syslog") \
\
DO( EsecIPCNoCode                 , EsecGroupIPC, 0x0001, RESP_CODE_OLD_DEFAULT, "tag with secError code is missing") \
DO( EsecIPCTagMissing             , EsecGroupIPC, 0x0002, RESP_CODE_OLD_DEFAULT, "Requested tag is missing in IPC message") \
DO( EsecIPCWrongSize              , EsecGroupIPC, 0x0003, RESP_CODE_OLD_DEFAULT, "Requested tag exists, but data has wrong size") \
DO( EsecIPCError                  , EsecGroupIPC, 0x0004, RESP_CODE_OLD_DEFAULT, "IPCPACKET_ERROR") \
DO( EsecIPCNotFound               , EsecGroupIPC, 0x0005, RESP_CODE_OLD_DEFAULT, "IPCPACKET_NOTFOUND") \
DO( EsecIPCComNotInit             , EsecGroupIPC, 0x0006, RESP_CODE_OLD_DEFAULT, "IPCPACKET_COM_NOT_INIT") \
DO( EsecIPCTlvEmpty               , EsecGroupIPC, 0x0007, RESP_CODE_OLD_DEFAULT, "IPCPACKET_TLV_EMPTY") \
DO( EsecIPCTimeOut                , EsecGroupIPC, 0x0008, RESP_CODE_OLD_DEFAULT, "IPCPACKET_TIME_OUT") \
DO( EsecIPCEmpty                  , EsecGroupIPC, 0x0009, RESP_CODE_OLD_DEFAULT, "IPCPACKET_EMPTY") \
\
DO( EsecConfigScriptMissing       , EsecGroupEncConfig, 0x0001, RESP_CODE_OLD_DEFAULT, "EXC_CFG_SCRIPT_MISSING") \
DO( EsecConfigEngineMissing       , EsecGroupEncConfig, 0x0002, RESP_CODE_OLD_DEFAULT, "EXC_CFG_ENGINE_MISSING") \
DO( EsecModuleConfigMissing       , EsecGroupEncConfig, 0x0003, RESP_CODE_OLD_DEFAULT, "EXC_CFG_ENGINE_MISSING") \
DO( EsecNotSupportedModule        , EsecGroupEncConfig, 0x0004, RESP_CODE_INVALID_REQ, "Host configuration contains not supported module reference") \
DO( EsecConfigKeyMngMissing       , EsecGroupEncConfig, 0x0005, RESP_CODE_OLD_DEFAULT, "KeyManagementType missing") \
DO( EsecConfigKSNIncTypeMissing   , EsecGroupEncConfig, 0x0006, RESP_CODE_OLD_DEFAULT, "KSNIncrementationType missing") \
DO( EsecConfigKTTMissing          , EsecGroupEncConfig, 0x0007, RESP_CODE_OLD_DEFAULT, "KeyTranslationTable missing") \
DO( EsecConfigKTTInval            , EsecGroupEncConfig, 0x0008, RESP_CODE_OLD_DEFAULT, "KeyTranslationTable is incomplete / KeySet is invalid") \
DO( EsecCommandNotAllowed         , EsecGroupEncConfig, 0x0009, RESP_CODE_OLD_DEFAULT, "Command is not allowed for untrusted connection") \
DO( EsecHostCfgNotFound           , EsecGroupEncConfig, 0x000A, RESP_CODE_OLD_DEFAULT, "Host configuration does not exist") \
\
DO( EsecDUKPTUnsupportedKeyType   , EsecGroupDUKPT, 0x0001, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "RESP_CODE_NOT_SUPPORTED_KEY_TYPE") \
DO( EsecDUKPTUpdateKey            , EsecGroupDUKPT, 0x0002, RESP_CODE_OLD_DEFAULT,     "Update Key failed, for more details see system error log") \
DO( EsecDUKPTUnsupportedOperation , EsecGroupDUKPT, 0x0003, RESP_CODE_OLD_DEFAULT,     "Update Key failed due to not supported operation") \
DO( EsecDUKPTdataNotPadded        , EsecGroupDUKPT, 0x0004, RESP_CODE_OLD_DEFAULT,     "Padding type is NONE, data must be multiple of block size") \
DO( EsecDUKPTencrypt              , EsecGroupDUKPT, 0x0005, RESP_CODE_OLD_DEFAULT,     "Data encryption failed") \
DO( EsecDUKPTdecrypt              , EsecGroupDUKPT, 0x0006, RESP_CODE_OLD_DEFAULT,     "Data decryption failed") \
DO( EsecDUKPTSign                 , EsecGroupDUKPT, 0x0007, RESP_CODE_OLD_DEFAULT,     "Data signing failed") \
DO( EsecDUKPTVerify               , EsecGroupDUKPT, 0x0008, RESP_CODE_OLD_DEFAULT,     "Data signing verification failed") \
DO( EsecDUKPTCfgUnknowPaddingType , EsecGroupDUKPT, 0x0009, RESP_CODE_OLD_DEFAULT,     "Invalid Configuration, unknow padding type") \
DO( EsecDUKPTCfgUnknowMACAlgo     , EsecGroupDUKPT, 0x000A, RESP_CODE_OLD_DEFAULT,     "Invalid Configuration, unknow signing algorithm") \
DO( EsecDUKPTCfgUnknowIVtype      , EsecGroupDUKPT, 0x000B, RESP_CODE_OLD_DEFAULT,     "Invalid Configuration, unknow IV type") \
DO( EsecDUKPTCfgUnknowKeyVariant  , EsecGroupDUKPT, 0x000C, RESP_CODE_OLD_DEFAULT,     "Invalid Configuration, unknow DUKPT key variant") \
DO( EsecDUKPTCfgUnsuppUpdKeyMethod, EsecGroupDUKPT, 0x000C, RESP_CODE_OLD_DEFAULT,     "Invalid Configuration, unknow DUKPT Update Key Method. Only #CFG_ENTRY_UPDATEKEY_METHOD are supported") \
\
DO( EsecTAInvalidSessionId        , EsecGroupEncTA, 0x0001, RESP_CODE_OLD_DEFAULT, "TransactionData could not be found with given SessionId") \
DO( EsecTAWriteProtected          , EsecGroupEncTA, 0x0002, RESP_CODE_OLD_DEFAULT, "TransactionData could not be written because item is private or read-only") \
DO( EsecTAReadProtected           , EsecGroupEncTA, 0x0003, RESP_CODE_OLD_DEFAULT, "TransactionData could not be read because item is private or write-only") \
DO( EsecTANoEntry                 , EsecGroupEncTA, 0x0004, RESP_CODE_OLD_DEFAULT, "TransactionData could not be read because item is not available") \
\
DO( EsecVSSUpdateKey              , EsecGroupEncVSS, 0x0001, RESP_CODE_OLD_DEFAULT, "RESP_CODE_UPDATE_KEY_FAILED") \
DO( EsecVSSnotFound               , EsecGroupEncVSS, 0x0002, RESP_CODE_OLD_DEFAULT, "requested VSS is not installed in system") \
DO( EsecVSSsetDUKPTmasks          , EsecGroupEncVSS, 0x0003, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecVSSunsupportedKeyType     , EsecGroupEncVSS, 0x0004, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "RESP_CODE_NOT_SUPPORTED_KEY_TYPE") \
DO( EsecVSSMissingTPKorTAK        , EsecGroupEncVSS, 0x0005, RESP_CODE_MISSING_TPK_OR_TAK, "RESP_CODE_MISSING_TPK_OR_TAK") \
DO( EsecVSSMacVer                 , EsecGroupEncVSS, 0x0006, RESP_CODE_OLD_DEFAULT, "Mac-Verification failed RESP_CODE_MAC_VER_FAILED") \
DO( EsecVSSSystemError            , EsecGroupEncVSS, 0x0101, RESP_CODE_OLD_DEFAULT, "CVSScript::ESYSTEMERROR,    CVSSEngine::ESYSTEMERROR") \
DO( EsecVSSFileNotLoaded          , EsecGroupEncVSS, 0x0102, RESP_CODE_OLD_DEFAULT, "CVSScript::EFILENOTLOADED,  ") \
DO( EsecVSSCryptpdevice           , EsecGroupEncVSS, 0x0103, RESP_CODE_CRYPTO_DEVICE_BLOCKED, "CVSScript::ECRYPTODEVICE,   ") \
DO( EsecVSSInvalidPointer         , EsecGroupEncVSS, 0x0104, RESP_CODE_OLD_DEFAULT, "CVSScript::EINVALIDPOINTER, ") \
DO( EsecVSSNotDefined             , EsecGroupEncVSS, 0x0105, RESP_CODE_OLD_DEFAULT, "CVSScript::ENOTDEFINED,     CVSSEngine::ENOTDEFINED") \
DO( EsecVSSNotInstalled           , EsecGroupEncVSS, 0x0106, RESP_CODE_OLD_DEFAULT, "CVSScript::ENOTINSTALLED,   ") \
DO( EsecVSSMacroNotExists         , EsecGroupEncVSS, 0x0107, RESP_CODE_OLD_DEFAULT, "CVSScript::EMACRONOTEXISTS, CVSSEngine::EsecVSSMacroNotExists") \
DO( EsecVSSMacroError             , EsecGroupEncVSS, 0x0108, RESP_CODE_FAILED     , "CVSScript::EMACROERROR,     CVSSEngine::EMACROERROR") \
DO( EsecVSSBadChaining            , EsecGroupEncVSS, 0x0109, RESP_CODE_OLD_DEFAULT, "CVSScript::EBADCHAINING,    ") \
DO( EsecVSSBadLength              , EsecGroupEncVSS, 0x010A, RESP_CODE_OLD_DEFAULT, "CVSScript::EBADLENGTH,      ") \
DO( EsecVSSNotInitialize          , EsecGroupEncVSS, 0x010B, RESP_CODE_OLD_DEFAULT, "CVSScript::ENOTINITIALIZE,  ") \
DO( EsecVSSNumberNotSet           , EsecGroupEncVSS, 0x010C, RESP_CODE_OLD_DEFAULT, "CVSScript::ENUMBERNOTSET,   ") \
DO( EsecVSSInvalidArg             , EsecGroupEncVSS, 0x010D, RESP_CODE_NOT_SUPPORTED_KSID, "CVSScript::EINVALIDARG,     CVSSEngine::EINVALIDARG") \
DO( EsecVSSGetPinError            , EsecGroupEncVSS, 0x010E, RESP_CODE_OLD_DEFAULT, "CVSScript::EGETPINERROR     CVSSEngine::EGETPINERROR") \
DO( EsecVSSSelectKeySetVer1       , EsecGroupEncVSS, 0x010F, RESP_CODE_OLD_DEFAULT, "Version 1 of Key-Set-Id-Table is limited to 8 ksid") \
DO( EsecVSSPinEqual               , EsecGroupEncVSS, 0x010F, RESP_CODE_OLD_DEFAULT, "CVSSEngine::EPINEQUAL") \
DO( EsecVSSDataNoPadded           , EsecGroupEncVSS, 0x0110, RESP_CODE_OLD_DEFAULT, "CVSSEngine::EsecVSSDataNoPadded") \
DO( EsecVSSPinBlockFormat         , EsecGroupEncVSS, 0x0111, RESP_CODE_OLD_DEFAULT, "CVSSEngine::EPINBLOCKFORMAT") \
DO( EsecVSSMacVerifi              , EsecGroupEncVSS, 0x0112, RESP_CODE_MAC_VER_FAILED, "CVSSEngine::EMACVERIFI") \
DO( EsecVSSBadKey                 , EsecGroupEncVSS, 0x0113, RESP_CODE_MAC_VER_FAILED, "CVSSEngine::EsecVSSBadKey") \
DO( EsecVSSincrKsnError           , EsecGroupEncVSS, 0x0114, RESP_CODE_KSN_INCREMENTATION_ERROR, "CVSSEngine::EsecVSSMacroError") \
DO( EsecVSSConfig                 , EsecGroupEncVSS, 0x0115, RESP_CODE_OLD_DEFAULT, "CVSSEngine::EsecVSSConfig") \
DO( EsecVSSPaddingError           , EsecGroupEncVSS, 0x0116, RESP_CODE_FAILED     , "CVSSEngine::EsecVSSPaddingError") \
\
DO( EsecIPPMACGeneration          , EsecGroupEncIPP, 0x0001, RESP_CODE_OLD_DEFAULT, "MAC generation failed") \
DO( EsecIPPSelectMK               , EsecGroupEncIPP, 0x0002, RESP_CODE_OLD_DEFAULT, "Select MK failed") \
DO( EsecIPPunsupportedKeyType     , EsecGroupEncIPP, 0x0003, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "RESP_CODE_NOT_SUPPORTED_KEY_TYPE") \
DO( EsecIPPUpdateKey              , EsecGroupEncIPP, 0x0004, RESP_CODE_OLD_DEFAULT, "RESP_CODE_UPDATE_KEY_FAILED") \
DO( EsecIPPInvalidKeyLength       , EsecGroupEncIPP, 0x0005, RESP_CODE_OLD_DEFAULT, "RESP_CODE_INVALID_KEY_LENGTH") \
DO( EsecIPPInvalidKey             , EsecGroupEncIPP, 0x0006, RESP_CODE_OLD_DEFAULT, "RESP_CODE_INVALID_KEY") \
DO( EsecIPPComm                   , EsecGroupEncIPP, 0x0007, RESP_CODE_OLD_DEFAULT, "Error with IPP communication") \
DO( EsecIPPFailure                , EsecGroupEncIPP, 0x0008, RESP_CODE_OLD_DEFAULT, "PP_COMM_FAILURE") \
DO( EsecIPPCancelled              , EsecGroupEncIPP, 0x0009, RESP_CODE_OLD_DEFAULT, "RESP_CODE_PIN_CANCEL PP_COMM_CANCELLED PP_COMM_PIN_BREAK") \
DO( EsecIPPTimeout                , EsecGroupEncIPP, 0x000A, RESP_CODE_TIMEOUT    , "RESP_CODE_TIMEOUT PP_COMM_TIMEOUT") \
DO( EsecIPPNoAck                  , EsecGroupEncIPP, 0x000B, RESP_CODE_OLD_DEFAULT, "PP_COMM_OK_NO_ACK") \
DO( EsecIPPPinBreak               , EsecGroupEncIPP, 0x000C, RESP_CODE_OLD_DEFAULT, "PP_COMM_PIN_BREAK") \
DO( EsecIPPNoMSK                  , EsecGroupEncIPP, 0x0011, RESP_CODE_OLD_DEFAULT, "No master key") \
DO( EsecIPPWorkingKey             , EsecGroupEncIPP, 0x0012, RESP_CODE_OLD_DEFAULT, "Account or working key error") \
DO( EsecIPPLongPin                , EsecGroupEncIPP, 0x0013, RESP_CODE_OLD_DEFAULT, "PIN too long") \
DO( EsecIPPShortPin               , EsecGroupEncIPP, 0x0014, RESP_CODE_OLD_DEFAULT, "PIN too short / non-decimal digits in PIN.") \
DO( EsecIPPPDUKPTinMSK            , EsecGroupEncIPP, 0x0015, RESP_CODE_OLD_DEFAULT, "PIN pad used as DUKPT (in MS command)") \
DO( EsecIPPPMSKAttribute          , EsecGroupEncIPP, 0x0016, RESP_CODE_OLD_DEFAULT, "Master key attributes error") \
DO( EsecIPPPGiskeAttribute        , EsecGroupEncIPP, 0x0017, RESP_CODE_OLD_DEFAULT, "KOF/GISKE working key attributes error") \
DO( EsecIPPNoKey                  , EsecGroupEncIPP, 0x0018, RESP_CODE_OLD_DEFAULT, "No key") \
DO( EsecIPPPAccount               , EsecGroupEncIPP, 0x0019, RESP_CODE_OLD_DEFAULT, "Account error") \
DO( EsecIPPPMSKinDUKPT            , EsecGroupEncIPP, 0x001A, RESP_CODE_OLD_DEFAULT, "PIN pad used as MS (in DUKPT command)") \
DO( EsecIPPPOverflow              , EsecGroupEncIPP, 0x001B, RESP_CODE_OLD_DEFAULT, "PIN pad has over 1 million transactions") \
DO( EsecIPPKMmode                 , EsecGroupEncIPP, 0x0021, RESP_CODE_INVALID_KEY, "IPP in incorrect KM mode") \
DO( EsecIPPUsage                  , EsecGroupEncIPP, 0x0022, RESP_CODE_INVALID_KEY, "incorrect key usage, mode of use, algorithm, or key length") \
DO( EsecIPPVersion                , EsecGroupEncIPP, 0x0023, RESP_CODE_INVALID_KEY, "Version error") \
DO( EsecIPPSKlkExists             , EsecGroupEncIPP, 0x0024, RESP_CODE_INVALID_KEY, "Error: KLK already exists or new KLK was not encrypted from the previous KLK") \
DO( EsecIPPPGiske                 , EsecGroupEncIPP, 0x0025, RESP_CODE_INVALID_KEY, "GISKE decryption or MAC error") \
DO( EsecIPPPMatch                 , EsecGroupEncIPP, 0x0026, RESP_CODE_INVALID_KEY, "VOSCOR-12713 -> duplicate keys are not allowed (docu says 'master key address does not match the address range described in Packet')") \
DO( EsecIPPPAdressing             , EsecGroupEncIPP, 0x0027, RESP_CODE_INVALID_KEY, "inappropriate master key addressing") \
DO( EsecIPPNoSessionKey           , EsecGroupEncIPP, 0x0028, RESP_CODE_OLD_DEFAULT, "No SessionKey in TD, updateKey first") \
DO( EsecIPPPinBlockFormat         , EsecGroupEncIPP, 0x0029, RESP_CODE_OLD_DEFAULT, "Not supported PIN block format") \
\
DO( EsecIPPAdeInternal            , EsecGroupEncIPP, 0x0080, RESP_CODE_OLD_DEFAULT, "ADE interface of IPP: Internal error") \
DO( EsecIPPAdeFormat              , EsecGroupEncIPP, 0x0081, RESP_CODE_INVALID_KEY_LENGTH, "ADE interface of IPP: Invalid format") \
DO( EsecIPPAdeSlot                , EsecGroupEncIPP, 0x0082, RESP_CODE_OLD_DEFAULT, "ADE interface of IPP: Unsupported key slot") \
DO( EsecIPPAdeDuplicate           , EsecGroupEncIPP, 0x0083, RESP_CODE_OLD_DEFAULT, "ADE interface of IPP: Duplicate key") \
\
\
DO( EsecADEnotActive              , EsecGroupEncADE, 0x0001, RESP_ADE_NOT_ACTIVE  , "RESP_CODE_ADE_NOT_ACTIVE") \
DO( EsecADEencrypt                , EsecGroupEncADE, 0x0002, RESP_CODE_OLD_DEFAULT, "ade_encrypt failed") \
DO( EsecADEConfig                 , EsecGroupEncADE, 0x0003, RESP_CODE_OLD_DEFAULT, "ade invalid configuration") \
DO( EsecADEdataNotPadded          , EsecGroupEncADE, 0x0004, RESP_CODE_OLD_DEFAULT, "according to host configuration data must be padded by application") \
\
DO( EsecBendigoStoreKey           , EsecGroupEncBendigo, 0x0001, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreRN            , EsecGroupEncBendigo, 0x0002, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreDateTime      , EsecGroupEncBendigo, 0x0003, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreKCA           , EsecGroupEncBendigo, 0x0004, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreKMACH         , EsecGroupEncBendigo, 0x0005, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreAIIC          , EsecGroupEncBendigo, 0x0006, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoComputeKIA         , EsecGroupEncBendigo, 0x0007, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoComputeKMACI       , EsecGroupEncBendigo, 0x0008, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoValidateAcqMkMac   , EsecGroupEncBendigo, 0x0009, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreKEK1          , EsecGroupEncBendigo, 0x000A, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreKEK2          , EsecGroupEncBendigo, 0x000B, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStorePPASN         , EsecGroupEncBendigo, 0x000C, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreKMACr         , EsecGroupEncBendigo, 0x000D, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreKMACs         , EsecGroupEncBendigo, 0x000E, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreKDr           , EsecGroupEncBendigo, 0x000F, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreKDs           , EsecGroupEncBendigo, 0x0010, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoStoreKPP           , EsecGroupEncBendigo, 0x0011, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoRollKEK1           , EsecGroupEncBendigo, 0x0012, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoRollKEK2           , EsecGroupEncBendigo, 0x0013, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecBendigoUnsupportedKeyType , EsecGroupEncBendigo, 0x0014, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "RESP_CODE_NOT_SUPPORTED_KEY_TYPE") \
\
DO( EsecVOLLoadEngineFailed       , EsecGroupEncVOL, 0x0001, RESP_CODE_OLD_DEFAULT, "load engine failed") \
DO( EsecVOLInitEncFailed          , EsecGroupEncVOL, 0x0002, RESP_CODE_OLD_DEFAULT, "encryption init failed") \
DO( EsecVOLSetParamFailed         , EsecGroupEncVOL, 0x0003, RESP_CODE_OLD_DEFAULT, "context parameter setting failed") \
DO( EsecVOLGenKeyFailed           , EsecGroupEncVOL, 0x0004, RESP_CODE_OLD_DEFAULT, "key generation failed") \
DO( EsecVOLEncDataFailed          , EsecGroupEncVOL, 0x0005, RESP_CODE_OLD_DEFAULT, "data encryption failed") \
DO( EsecVOLInvalidParam           , EsecGroupEncVOL, 0x0006, RESP_CODE_OLD_DEFAULT, "parameter value is invalid") \
DO( EsecVOLNoETB                  , EsecGroupEncVOL, 0x0007, RESP_CODE_OLD_DEFAULT, "no ETB delivered") \
DO( EsecVOLNoETBDOB               , EsecGroupEncVOL, 0x0008, RESP_CODE_OLD_DEFAULT, "no ETB DOB (getting key creation date failed)") \
DO( EsecVOLKeyMissing             , EsecGroupEncVOL, 0x0009, RESP_CODE_OLD_DEFAULT, "voltage key is missing") \
DO( EsecVOLKeyRollingFailed       , EsecGroupEncVOL, 0x000A, RESP_CODE_OLD_DEFAULT, "key rolling failed") \
DO( EsecVOLKeyDelFailed           , EsecGroupEncVOL, 0x000B, RESP_CODE_OLD_DEFAULT, "removing of session key failed") \
DO( EsecVOLSetDefCiphFailed       , EsecGroupEncVOL, 0x000C, RESP_CODE_OLD_DEFAULT, "set default ciphers failed") \
DO( EsecVOLTransDataMissing       , EsecGroupEncVOL, 0x000D, RESP_CODE_OLD_DEFAULT, "Transaction Data missing") \
DO( EsecVOLReadFileFailed         , EsecGroupEncVOL, 0x000E, RESP_CODE_OLD_DEFAULT, "reading file failed") \
\
DO( EsecVDSPTransDataMissing      , EsecGroupEncVDSP, 0x0001, RESP_CODE_OLD_DEFAULT, "Transaction Data missing") \
DO( EsecVDSPUnvalidEncAlgo        , EsecGroupEncVDSP, 0x0002, RESP_CODE_OLD_DEFAULT, "invalid encryption algorithm") \
DO( EsecVDSPDataEncFailed         , EsecGroupEncVDSP, 0x0003, RESP_CODE_OLD_DEFAULT, "data encryption failed") \
DO( EsecVDSPInvalidData           , EsecGroupEncVDSP, 0x0004, RESP_CODE_OLD_DEFAULT, "invalid data") \
DO( EsecVDSPNotSupportedFunction  , EsecGroupEncVDSP, 0x0005, RESP_CODE_OLD_DEFAULT, "Function is not supported by this module") \
\
DO( EsecRSAConfig                 , EsecGroupEncRSA, 0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration") \
DO( EsecRSAPubKey                 , EsecGroupEncRSA, 0x0002, RESP_CODE_OLD_DEFAULT, "Public Key related") \
DO( EsecRSAPrivKey                , EsecGroupEncRSA, 0x0003, RESP_CODE_OLD_DEFAULT, "Private Key related") \
DO( EsecRSAEncrypt                , EsecGroupEncRSA, 0x0004, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecRSADecrypt                , EsecGroupEncRSA, 0x0005, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecRSASign                   , EsecGroupEncRSA, 0x0006, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecRSAVerify                 , EsecGroupEncRSA, 0x0007, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecRSAMismatch               , EsecGroupEncRSA, 0x0008, RESP_CODE_OLD_DEFAULT, "Mismatch during Verification") \
DO( EsecRSADigest                 , EsecGroupEncRSA, 0x0009, RESP_CODE_OLD_DEFAULT, "Digest needed for Sign and Verify") \
DO( EsecRSAKey                    , EsecGroupEncRSA, 0x000A, RESP_CODE_OLD_DEFAULT, "Set Key") \
DO( EsecRSAUpdateKey              , EsecGroupEncRSA, 0x000B, RESP_CODE_OLD_DEFAULT, "Update Key failure") \
DO( EsecRSAunsupportedKeyType     , EsecGroupEncRSA, 0x000C, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "Not supported key type by module RSA") \
DO( EsecRSAPaddingOp              , EsecGroupEncRSA, 0x000D, RESP_CODE_OLD_DEFAULT, "Padding cannot be set or removed") \
DO( EsecRSAunsupportedPadding     , EsecGroupEncRSA, 0x000E, RESP_CODE_OLD_DEFAULT, "Not supported padding type by module RSA") \
DO( EsecRSAwrongDataSize          , EsecGroupEncRSA, 0x000F, RESP_CODE_OLD_DEFAULT, "Input data must have size according HASH function defined in host configuration") \
\
DO( EsecAESConfig                 , EsecGroupEncAES, 0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration") \
DO( EsecAESUnsuppHashType         , EsecGroupEncAES, 0x0002, RESP_CODE_OLD_DEFAULT, "Unsupported hash algorithm") \
DO( EsecAESUnsuppMethod           , EsecGroupEncAES, 0x0003, RESP_CODE_OLD_DEFAULT, "Unsupported encryption method") \
DO( EsecAESEncrypt                , EsecGroupEncAES, 0x0004, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecAESDecrypt                , EsecGroupEncAES, 0x0005, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecAESSign                   , EsecGroupEncAES, 0x0006, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecAESVerify                 , EsecGroupEncAES, 0x0007, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecAESMismatch               , EsecGroupEncAES, 0x0008, RESP_CODE_OLD_DEFAULT, "Mismatch during Verification") \
DO( EsecAESDigest                 , EsecGroupEncAES, 0x0009, RESP_CODE_OLD_DEFAULT, "Digest needed for Sign and Verify") \
DO( EsecAESKey                    , EsecGroupEncAES, 0x000A, RESP_CODE_OLD_DEFAULT, "Set Key") \
DO( EsecAESRetrEncPIN             , EsecGroupEncAES, 0x000B, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecAESCfgUnsuppKSNIncType    , EsecGroupEncAES, 0x000C, RESP_CODE_OLD_DEFAULT, "Unsupported KSN Incrementation type") \
DO( EsecAESCfgUnsuppKSNIncState   , EsecGroupEncAES, 0x000D, RESP_CODE_OLD_DEFAULT, "Unsupported KSN Incrementation state") \
DO( EsecAESGetKSNFailue           , EsecGroupEncAES, 0x000E, RESP_CODE_OLD_DEFAULT, "KSN cannot be retrieved from engine") \
\
DO( EsecSREDConfig                , EsecGroupEncSRED, 0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration") \
DO( EsecSREDSign                  , EsecGroupEncSRED, 0x0002, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecSREDVerify                , EsecGroupEncSRED, 0x0003, RESP_CODE_OLD_DEFAULT, "") \
DO( EsecSREDMismatch              , EsecGroupEncSRED, 0x0004, RESP_CODE_OLD_DEFAULT, "Mismatch during Verification") \
DO( EsecSREDNoKey                 , EsecGroupEncSRED, 0x0005, RESP_CODE_OLD_DEFAULT, "No key available") \
DO( EsecSREDCfgUnsuppKSNIncType   , EsecGroupEncSRED, 0x0006, RESP_CODE_OLD_DEFAULT, "Unsupported KSN Incrementation type") \
DO( EsecSREDCfgUnsuppKSNIncState  , EsecGroupEncSRED, 0x0007, RESP_CODE_OLD_DEFAULT, "Unsupported KSN Incrementation state") \
\
DO( EsecCryptoRead                , EsecGroupEncCryptRW, 0x0001, RESP_CODE_OLD_DEFAULT, "CryptoRead failed") \
DO( EsecCryptoWrite               , EsecGroupEncCryptRW, 0x0002, RESP_CODE_OLD_DEFAULT, "CryptoWrite failed") \
\
DO( EsecMSKConfig                 , EsecGroupEncMSK,     0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, for more details see system error log") \
DO( EsecMSKUpdateKey              , EsecGroupEncMSK,     0x0002, RESP_CODE_OLD_DEFAULT, "Update Key failed") \
DO( EsecMKSMasterKeyProtected     , EsecGroupEncMSK,     0x0003, RESP_CODE_OLD_DEFAULT, "Master Key is nor writable, entered in 'updateKey_protected' section of host configuration") \
DO( EsecMSKunsupportedKeyType     , EsecGroupEncMSK,     0x0004, RESP_CODE_OLD_DEFAULT, "Update Key is not defined for this key type") \
DO( EsecMSKEncryptDataFailed      , EsecGroupEncMSK,     0x0005, RESP_CODE_OLD_DEFAULT, "data encrypt operation failed") \
DO( EsecMSKDecryptDataFailed      , EsecGroupEncMSK,     0x0006, RESP_CODE_OLD_DEFAULT, "data decryption operation failed") \
DO( EsecMSKSignFailed             , EsecGroupEncMSK,     0x0007, RESP_CODE_OLD_DEFAULT, "signature calculation failed") \
DO( EsecMSKVerify                 , EsecGroupEncMSK,     0x0008, RESP_CODE_OLD_DEFAULT, "signature calculation failed") \
DO( EsecMSKVerifyFailed           , EsecGroupEncMSK,     0x0009, RESP_CODE_OLD_DEFAULT, "signature comparation failed") \
DO( EsecMSKgetPINfailure          , EsecGroupEncMSK,     0x000A, RESP_CODE_OLD_DEFAULT, "get PIN Block failed") \
DO( EsecMSKdataNotPadded          , EsecGroupEncMSK,     0x000B, RESP_CODE_OLD_DEFAULT, "according to host configuration data must be padded by application") \
DO( EsecMSKCfgUnknowPaddingType   , EsecGroupEncMSK,     0x000C, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow padding type") \
DO( EsecMSKCfgUnknowMACAlgo       , EsecGroupEncMSK,     0x000D, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow signing algorithm") \
DO( EsecMSKCfgUnknowIVtype        , EsecGroupEncMSK,     0x000E, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow IV type") \
DO( EsecMSKunexpectedKCV          , EsecGroupEncMSK,     0x000F, RESP_CODE_OLD_DEFAULT, "KCV of injecting key does not mach") \
\
DO( EsecCustRKLConfig             , EsecGroupEncCustRKL, 0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, for more details see system error log") \
DO( EsecCustRKLUpdateKey          , EsecGroupEncCustRKL, 0x0002, RESP_CODE_OLD_DEFAULT, "Update Key failed, for more details see system error log") \
DO( EsecCustRKLunsupportedKeyType , EsecGroupEncCustRKL, 0x0003, RESP_CODE_OLD_DEFAULT, "Update Key is not defined for this key type") \



#define DO_ENUM(Name, Group, Offset, Old, Description)   Name = Group + Offset,


enum secError {

    ERRORS(DO_ENUM)

};


std::string getErrorString(secError_t error);


std::string getErrorDescription(secError_t error);


/***
 * Use this macro to throw errors.
 * printing a callstack is added in debug-builds.
 */
#ifndef BOOST_NO_EXCEPTIONS
    #if defined( LOGAPI_ENABLE_DEBUG )
        #define LOG_THROW_EX(error, txt) \
            { \
                print_stacktrace(); \
                SEC_LOG_ERROR(txt " throw " #error); \
                throw (com_adksec_cmd::secError)error; \
            }
    #else
        #define LOG_THROW_EX(error, txt) \
            { \
                SEC_LOG_ERROR(txt " throw " #error); \
                throw (com_adksec_cmd::secError)error; \
            }
    #endif
#else
    #if defined( LOGAPI_ENABLE_DEBUG )
        #define LOG_THROW_EX(error, txt) \
            { \
                print_stacktrace(); \
                SEC_LOG_ALERT(txt " would throw " #error); \
            }
    #else
        #define LOG_THROW_EX(error, txt) \
            { \
                SEC_LOG_ALERT(txt " would throw " #error); \
            }
    #endif
#endif


#define LOG_THROW(error) LOG_THROW_EX(error, "")

#define LOG_ASSERT(assertion) \
{ \
    if(!(assertion)) \
    { \
        SEC_LOG_CRIT("Assertion failed: " #assertion); \
        LOG_THROW(com_adksec_cmd::EsecAssertion); \
    } \
}


//to use with std::vector
#define LOG_HEXDUMP(vec) SEC_DBG_HEXDUMP_TRACE(#vec, &vec[0], vec.size())



#if defined( LOGAPI_ENABLE_DEBUG )
    #define LOG_RETURN_EX(error, txt) \
        { \
            print_stacktrace(); \
            SEC_LOG_ERROR(txt " return %s (0x%08x): %s", getErrorString(error).c_str(), error, getErrorDescription(error).c_str()); \
            return (com_adksec_cmd::secError)error; \
        }
#else
    #define LOG_RETURN_EX(error, txt) \
        { \
            SEC_LOG_ERROR(txt " return %s (0x%08x): %s", getErrorString(error).c_str(), error, getErrorDescription(error).c_str()); \
            return (com_adksec_cmd::secError)error; \
        }

#endif

#define LOG_RETURN(error) LOG_RETURN_EX(error, "")

#if defined( LOGAPI_ENABLE_DEBUG )
    #define RETURN_ON(func) {secError err=func; if(err) LOG_RETURN_EX(err, #func)}
#else
    #define RETURN_ON(func) {secError err=func; if(err) LOG_RETURN_EX(err, "")}
#endif


} /* namespace com_adksec_cmd */

#endif /* ENCGOVERNOR_SECERROR_H_ */
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
