---
hidden: true
title: secError.h
---

<a href="sec_error_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 10 #ifndef ENCGOVERNOR_SECERROR_H_
 11 #define ENCGOVERNOR_SECERROR_H_
 12 
 13 #include <errno.h>
 14 
 15 #ifdef _VRXEVO
 16 #include <SVC_NET.H>
 17 
 18 #define ELOOP 40 /* Too many symbolic links encountered */
 19 #define ENOMSG 42 /* No message of desired type */
 20 #define EIDRM 43 /* Identifier removed */
 21 #define ECHRNG 44 /* Channel number out of range */
 22 #define EL2NSYNC 45 /* Level 2 not synchronized */
 23 #define EL3HLT 46 /* Level 3 halted */
 24 #define EL3RST 47 /* Level 3 reset */
 25 #define ELNRNG 48 /* Link number out of range */
 26 #define EUNATCH 49 /* Protocol driver not attached */
 27 #define ENOCSI 50 /* No CSI structure available */
 28 #define EL2HLT 51 /* Level 2 halted */
 29 #define EBADE 52 /* Invalid exchange */
 30 #define EBADR 53 /* Invalid request descriptor */
 31 #define EXFULL 54 /* Exchange full */
 32 #define ENOANO 55 /* No anode */
 33 #define EBADRQC 56 /* Invalid request code */
 34 #define EBADSLT 57 /* Invalid slot */
 35 #define EBFONT 59 /* Bad font file format */
 36 #define ENOSTR 60 /* Device not a stream */
 37 #define ENODATA 61 /* No data available */
 38 #define ETIME 62 /* Timer expired */
 39 #define ENOSR 63 /* Out of streams resources */
 40 #define ENONET 64 /* Machine is not on the network */
 41 #define ENOPKG 65 /* Package not installed */
 42 #define EREMOTE 66 /* Object is remote */
 43 #define ENOLINK 67 /* Link has been severed */
 44 #define EADV 68 /* Advertise error */
 45 #define ESRMNT 69 /* Srmount error */
 46 #define ECOMM 70 /* Communication error on send */
 47 //#define EPROTO 71 /* Protocol error */
 48 #define EMULTIHOP 72 /* Multihop attempted */
 49 #define EDOTDOT 73 /* RFS specific error */
 50 #define EBADMSG 74 /* Not a data message */
 51 #define EOVERFLOW 75 /* Value too large for defined data type */
 52 #define ENOTUNIQ 76 /* Name not unique on network */
 53 #define EBADFD 77 /* File descriptor in bad state */
 54 #define EREMCHG 78 /* Remote address changed */
 55 #define ELIBACC 79 /* Can not access a needed shared library */
 56 #define ELIBBAD 80 /* Accessing a corrupted shared library */
 57 #define ELIBSCN 81 /* .lib section in a.out corrupted */
 58 #define ELIBMAX 82 /* Attempting to link in too many shared libraries */
 59 #define ELIBEXEC 83 /* Cannot exec a shared library directly */
 60 #define EILSEQ 84 /* Illegal byte sequence */
 61 #define ERESTART 85 /* Interrupted system call should be restarted */
 62 #define ESTRPIPE 86 /* Streams pipe error */
 63 #define EUSERS 87 /* Too many users */
 64 
 65 #define ESTALE 116 /* Stale NFS file handle */
 66 #define EUCLEAN 117 /* Structure needs cleaning */
 67 #define ENOTNAM 118 /* Not a XENIX named type file */
 68 #define ENAVAIL 119 /* No XENIX semaphores available */
 69 #define EISNAM 120 /* Is a named type file */
 70 #define EREMOTEIO 121 /* Remote I/O error */
 71 #define EDQUOT 122 /* Quota exceeded */
 72 #define ENOMEDIUM 123 /* No medium found */
 73 #define EMEDIUMTYPE 124 /* Wrong medium type */
 74 #define ECANCELED 125 /* Operation Canceled */
 75 #define ENOKEY 126 /* Required key not available */
 76 #define EKEYEXPIRED 127 /* Key has expired */
 77 #define EKEYREVOKED 128 /* Key has been revoked */
 78 #define EKEYREJECTED 129 /* Key was rejected by service */
 79 #define EOWNERDEAD 130 /* Owner died */
 80 #define ENOTRECOVERABLE 131 /* State not recoverable */
 81 #define ERFKILL 132 /* Operation not possible due to RF-kill */
 82 #endif
 83 
 84 #ifndef EHWPOISON
 85  #define EHWPOISON 133 /* Memory page has hardware error */
 86 #endif
 87 
 88 
 89 #include <stdint.h>
 90 #include <string>
 91 #if defined( LOGAPI_ENABLE_DEBUG )
 92  #if defined VFI_PLATFORM_VOS3 || defined _VOS3
 93  #define print_stacktrace()
 94  #else
 95  #include "stacktrace.h"
 96  #endif
 97 #else
 98  #include <stdio.h>
 99  #include <stdlib.h>
 100  #include <execinfo.h>
 101  #include <cxxabi.h>
 102  #include <string.h>
 103 #endif
 104 
 105 namespace com_adksec_cmd
 106 {
 107 
 111 enum secErrorGroup {
 112  EsecGroupCommon = 0x00000000,
 113  EsecGroupApi = 0x00010000,
 114  EsecGroupEncGov = 0x00020000,
 115  EsecGroupIPC = 0x00030000,
 116  EsecGroupEncConfig = 0x00040000,
 117  EsecGroupEncTA = 0x00050000,
 118 
 119  EsecGroupEncVSS = 0x00110000,
 120  EsecGroupEncIPP = 0x00120000,
 121  EsecGroupEncSRED = 0x00130000,
 122  EsecGroupEncADE = 0x00140000,
 123  EsecGroupEncBendigo = 0x00150000,
 124  EsecGroupEncVOL = 0x00160000,
 125  EsecGroupEncVDSP = 0x00170000,
 126  EsecGroupEncRSA = 0x00180000,
 127  EsecGroupEncAES = 0x00190000,
 128  EsecGroupEncCryptRW = 0x001A0000,
 129  EsecGroupEncMSK = 0x001B0000,
 130  EsecGroupEncCustRKL = 0x001C0000,
 131  EsecGroupDUKPT = 0x001D0000,
 132 
 133  EsecGroupMASK = 0x00FF0000, // auxiliary element
 134 };
 135 
 139 typedef uint32_t secError_t;
 140 
 141 
 142 #define RESP_CODE_OLD_DEFAULT RESP_CODE_FAILED
 143 
 144 /*
 145  * @internal
 146  */
 147 //Following macro-table is for generation of secError, getErrorString(), getErrorDescription() and getOldError(). Format is:
 148 //
 149 //( Name , Group , Offset , Old , Description
 150 
 151 #define ERRORS(DO) \
 152 DO( EsecOK , 0 , 0 , RESP_CODE_SUCCESS , "everything is OK") \
 153 DO( EsecPERM , EsecGroupCommon, EPERM , RESP_CODE_OLD_DEFAULT, "Operation not permitted") \
 154 DO( EsecNOENT , EsecGroupCommon, ENOENT , RESP_CODE_OLD_DEFAULT, "No such file or directory") \
 155 DO( EsecSRCH , EsecGroupCommon, ESRCH , RESP_CODE_OLD_DEFAULT, "No such process") \
 156 DO( EsecINTR , EsecGroupCommon, EINTR , RESP_CODE_OLD_DEFAULT, "Interrupted system call") \
 157 DO( EsecIO , EsecGroupCommon, EIO , RESP_CODE_OLD_DEFAULT, "I/O error") \
 158 DO( EsecNXIO , EsecGroupCommon, ENXIO , RESP_CODE_OLD_DEFAULT, "No such device or address") \
 159 DO( Esec2BIG , EsecGroupCommon, E2BIG , RESP_CODE_OLD_DEFAULT, "Argument list too long") \
 160 DO( EsecNOEXEC , EsecGroupCommon, ENOEXEC , RESP_CODE_OLD_DEFAULT, "Exec format error") \
 161 DO( EsecBADF , EsecGroupCommon, EBADF , RESP_CODE_OLD_DEFAULT, "Bad file number") \
 162 DO( EsecCHILD , EsecGroupCommon, ECHILD , RESP_CODE_OLD_DEFAULT, "No child processes") \
 163 DO( EsecAGAIN , EsecGroupCommon, EAGAIN , RESP_CODE_OLD_DEFAULT, "Try again / Operation would block") \
 164 DO( EsecNOMEM , EsecGroupCommon, ENOMEM , RESP_CODE_OLD_DEFAULT, "Out of memory") \
 165 DO( EsecACCES , EsecGroupCommon, EACCES , RESP_CODE_OLD_DEFAULT, "Permission denied") \
 166 DO( EsecFAULT , EsecGroupCommon, EFAULT , RESP_CODE_OLD_DEFAULT, "Bad address") \
 167 DO( EsecNOTBLK , EsecGroupCommon, ENOTBLK , RESP_CODE_OLD_DEFAULT, "Block device required") \
 168 DO( EsecBUSY , EsecGroupCommon, EBUSY , RESP_CODE_OLD_DEFAULT, "Device or resource busy") \
 169 DO( EsecEXIST , EsecGroupCommon, EEXIST , RESP_CODE_OLD_DEFAULT, "File exists") \
 170 DO( EsecXDEV , EsecGroupCommon, EXDEV , RESP_CODE_OLD_DEFAULT, "Cross-device link") \
 171 DO( EsecNODEV , EsecGroupCommon, ENODEV , RESP_CODE_OLD_DEFAULT, "No such device") \
 172 DO( EsecNOTDIR , EsecGroupCommon, ENOTDIR , RESP_CODE_OLD_DEFAULT, "Not a directory") \
 173 DO( EsecISDIR , EsecGroupCommon, EISDIR , RESP_CODE_OLD_DEFAULT, "Is a directory") \
 174 DO( EsecINVAL , EsecGroupCommon, EINVAL , RESP_CODE_INVAL , "Invalid argument RESP_CODE_INVAL") \
 175 DO( EsecNFILE , EsecGroupCommon, ENFILE , RESP_CODE_OLD_DEFAULT, "File table overflow") \
 176 DO( EsecMFILE , EsecGroupCommon, EMFILE , RESP_CODE_OLD_DEFAULT, "Too many open files") \
 177 DO( EsecNOTTY , EsecGroupCommon, ENOTTY , RESP_CODE_OLD_DEFAULT, "Not a typewriter") \
 178 DO( EsecTXTBSY , EsecGroupCommon, ETXTBSY , RESP_CODE_OLD_DEFAULT, "Text file busy") \
 179 DO( EsecFBIG , EsecGroupCommon, EFBIG , RESP_CODE_OLD_DEFAULT, "File too large") \
 180 DO( EsecNOSPC , EsecGroupCommon, ENOSPC , RESP_CODE_OLD_DEFAULT, "No space left on device") \
 181 DO( EsecSPIPE , EsecGroupCommon, ESPIPE , RESP_CODE_OLD_DEFAULT, "Illegal seek") \
 182 DO( EsecROFS , EsecGroupCommon, EROFS , RESP_CODE_OLD_DEFAULT, "Read-only file system") \
 183 DO( EsecMLINK , EsecGroupCommon, EMLINK , RESP_CODE_OLD_DEFAULT, "Too many links") \
 184 DO( EsecPIPE , EsecGroupCommon, EPIPE , RESP_CODE_OLD_DEFAULT, "Broken pipe") \
 185 DO( EsecDOM , EsecGroupCommon, EDOM , RESP_CODE_OLD_DEFAULT, "Math argument out of domain of func") \
 186 DO( EsecRANGE , EsecGroupCommon, ERANGE , RESP_CODE_OLD_DEFAULT, "Math result not representable") \
 187 \
 188 DO( EsecDEADLK , EsecGroupCommon, EDEADLK , RESP_CODE_OLD_DEFAULT, "Resource deadlock would occur") \
 189 DO( EsecNAMETOOLONG , EsecGroupCommon, ENAMETOOLONG , RESP_CODE_OLD_DEFAULT, "File name too long") \
 190 DO( EsecNOLCK , EsecGroupCommon, ENOLCK , RESP_CODE_OLD_DEFAULT, "No record locks available") \
 191 DO( EsecNOSYS , EsecGroupCommon, ENOSYS , RESP_CODE_OLD_DEFAULT, "Function not implemented") \
 192 DO( EsecNOTEMPTY , EsecGroupCommon, ENOTEMPTY , RESP_CODE_OLD_DEFAULT, "Directory not empty") \
 193 DO( EsecLOOP , EsecGroupCommon, ELOOP , RESP_CODE_OLD_DEFAULT, "Too many symbolic links encountered") \
 194 DO( EsecNOMSG , EsecGroupCommon, ENOMSG , RESP_CODE_OLD_DEFAULT, "No message of desired type") \
 195 DO( EsecIDRM , EsecGroupCommon, EIDRM , RESP_CODE_OLD_DEFAULT, "Identifier removed") \
 196 DO( EsecCHRNG , EsecGroupCommon, ECHRNG , RESP_CODE_OLD_DEFAULT, "Channel number out of range") \
 197 DO( EsecL2NSYNC , EsecGroupCommon, EL2NSYNC , RESP_CODE_OLD_DEFAULT, "Level 2 not synchronized") \
 198 DO( EsecL3HLT , EsecGroupCommon, EL3HLT , RESP_CODE_OLD_DEFAULT, "Level 3 halted") \
 199 DO( EsecL3RST , EsecGroupCommon, EL3RST , RESP_CODE_OLD_DEFAULT, "Level 3 reset") \
 200 DO( EsecLNRNG , EsecGroupCommon, ELNRNG , RESP_CODE_OLD_DEFAULT, "Link number out of range") \
 201 DO( EsecUNATCH , EsecGroupCommon, EUNATCH , RESP_CODE_OLD_DEFAULT, "Protocol driver not attached") \
 202 DO( EsecNOCSI , EsecGroupCommon, ENOCSI , RESP_CODE_OLD_DEFAULT, "No CSI structure available") \
 203 DO( EsecL2HLT , EsecGroupCommon, EL2HLT , RESP_CODE_OLD_DEFAULT, "Level 2 halted") \
 204 DO( EsecBADE , EsecGroupCommon, EBADE , RESP_CODE_OLD_DEFAULT, "Invalid exchange") \
 205 DO( EsecBADR , EsecGroupCommon, EBADR , RESP_CODE_OLD_DEFAULT, "Invalid request descriptor") \
 206 DO( EsecXFULL , EsecGroupCommon, EXFULL , RESP_CODE_OLD_DEFAULT, "Exchange full") \
 207 DO( EsecNOANO , EsecGroupCommon, ENOANO , RESP_CODE_OLD_DEFAULT, "No anode") \
 208 DO( EsecBADRQC , EsecGroupCommon, EBADRQC , RESP_CODE_OLD_DEFAULT, "Invalid request code") \
 209 DO( EsecBADSLT , EsecGroupCommon, EBADSLT , RESP_CODE_OLD_DEFAULT, "Invalid slot") \
 210 DO( EsecBFONT , EsecGroupCommon, EBFONT , RESP_CODE_OLD_DEFAULT, "Bad font file format") \
 211 DO( EsecNOSTR , EsecGroupCommon, ENOSTR , RESP_CODE_OLD_DEFAULT, "Device not a stream") \
 212 DO( EsecNODATA , EsecGroupCommon, ENODATA , RESP_CODE_OLD_DEFAULT, "No data available") \
 213 DO( EsecTIME , EsecGroupCommon, ETIME , RESP_CODE_OLD_DEFAULT, "Timer expired") \
 214 DO( EsecNOSR , EsecGroupCommon, ENOSR , RESP_CODE_OLD_DEFAULT, "Out of streams resources") \
 215 DO( EsecNONET , EsecGroupCommon, ENONET , RESP_CODE_OLD_DEFAULT, "Machine is not on the network") \
 216 DO( EsecNOPKG , EsecGroupCommon, ENOPKG , RESP_CODE_OLD_DEFAULT, "Package not installed") \
 217 DO( EsecREMOTE , EsecGroupCommon, EREMOTE , RESP_CODE_OLD_DEFAULT, "Object is remote") \
 218 DO( EsecNOLINK , EsecGroupCommon, ENOLINK , RESP_CODE_OLD_DEFAULT, "Link has been severed") \
 219 DO( EsecADV , EsecGroupCommon, EADV , RESP_CODE_OLD_DEFAULT, "Advertise error") \
 220 DO( EsecSRMNT , EsecGroupCommon, ESRMNT , RESP_CODE_OLD_DEFAULT, "Srmount error") \
 221 DO( EsecCOMM , EsecGroupCommon, ECOMM , RESP_CODE_OLD_DEFAULT, "Communication error on send") \
 222 DO( EsecPROTO , EsecGroupCommon, EPROTO , RESP_CODE_OLD_DEFAULT, "Protocol error") \
 223 DO( EsecMULTIHOP , EsecGroupCommon, EMULTIHOP , RESP_CODE_OLD_DEFAULT, "Multihop attempted") \
 224 DO( EsecDOTDOT , EsecGroupCommon, EDOTDOT , RESP_CODE_OLD_DEFAULT, "RFS specific error") \
 225 DO( EsecBADMSG , EsecGroupCommon, EBADMSG , RESP_CODE_OLD_DEFAULT, "Not a data message") \
 226 DO( EsecOVERFLOW , EsecGroupCommon, EOVERFLOW , RESP_CODE_OLD_DEFAULT, "Value too large for defined data type") \
 227 DO( EsecNOTUNIQ , EsecGroupCommon, ENOTUNIQ , RESP_CODE_OLD_DEFAULT, "Name not unique on network") \
 228 DO( EsecBADFD , EsecGroupCommon, EBADFD , RESP_CODE_OLD_DEFAULT, "File descriptor in bad state") \
 229 DO( EsecREMCHG , EsecGroupCommon, EREMCHG , RESP_CODE_OLD_DEFAULT, "Remote address changed") \
 230 DO( EsecLIBACC , EsecGroupCommon, ELIBACC , RESP_CODE_OLD_DEFAULT, "Can not access a needed shared library") \
 231 DO( EsecLIBBAD , EsecGroupCommon, ELIBBAD , RESP_CODE_OLD_DEFAULT, "Accessing a corrupted shared library") \
 232 DO( EsecLIBSCN , EsecGroupCommon, ELIBSCN , RESP_CODE_OLD_DEFAULT, ".lib section in a.out corrupted") \
 233 DO( EsecLIBMAX , EsecGroupCommon, ELIBMAX , RESP_CODE_OLD_DEFAULT, "Attempting to link in too many shared libraries") \
 234 DO( EsecLIBEXEC , EsecGroupCommon, ELIBEXEC , RESP_CODE_OLD_DEFAULT, "Cannot exec a shared library directly") \
 235 DO( EsecILSEQ , EsecGroupCommon, EILSEQ , RESP_CODE_OLD_DEFAULT, "Illegal byte sequence") \
 236 DO( EsecRESTART , EsecGroupCommon, ERESTART , RESP_CODE_OLD_DEFAULT, "Interrupted system call should be restarted") \
 237 DO( EsecSTRPIPE , EsecGroupCommon, ESTRPIPE , RESP_CODE_OLD_DEFAULT, "Streams pipe error") \
 238 DO( EsecUSERS , EsecGroupCommon, EUSERS , RESP_CODE_OLD_DEFAULT, "Too many users") \
 239 DO( EsecNOTSOCK , EsecGroupCommon, ENOTSOCK , RESP_CODE_OLD_DEFAULT, "Socket operation on non-socket") \
 240 DO( EsecDESTADDRREQ , EsecGroupCommon, EDESTADDRREQ , RESP_CODE_OLD_DEFAULT, "Destination address required") \
 241 DO( EsecMSGSIZE , EsecGroupCommon, EMSGSIZE , RESP_CODE_OLD_DEFAULT, "Message too long") \
 242 DO( EsecPROTOTYPE , EsecGroupCommon, EPROTOTYPE , RESP_CODE_OLD_DEFAULT, "Protocol wrong type for socket") \
 243 DO( EsecNOPROTOOPT , EsecGroupCommon, ENOPROTOOPT , RESP_CODE_OLD_DEFAULT, "Protocol not available") \
 244 DO( EsecPROTONOSUPPORT , EsecGroupCommon, EPROTONOSUPPORT , RESP_CODE_OLD_DEFAULT, "Protocol not supported") \
 245 DO( EsecSOCKTNOSUPPORT , EsecGroupCommon, ESOCKTNOSUPPORT , RESP_CODE_OLD_DEFAULT, "Socket type not supported") \
 246 DO( EsecOPNOTSUPP , EsecGroupCommon, EOPNOTSUPP , RESP_CODE_OLD_DEFAULT, "Operation not supported on transport endpoint") \
 247 DO( EsecPFNOSUPPORT , EsecGroupCommon, EPFNOSUPPORT , RESP_CODE_OLD_DEFAULT, "Protocol family not supported") \
 248 DO( EsecAFNOSUPPORT , EsecGroupCommon, EAFNOSUPPORT , RESP_CODE_OLD_DEFAULT, "Address family not supported by protocol") \
 249 DO( EsecADDRINUSE , EsecGroupCommon, EADDRINUSE , RESP_CODE_OLD_DEFAULT, "Address already in use") \
 250 DO( EsecADDRNOTAVAIL , EsecGroupCommon, EADDRNOTAVAIL , RESP_CODE_OLD_DEFAULT, "Cannot assign requested address") \
 251 DO( EsecNETDOWN , EsecGroupCommon, ENETDOWN , RESP_CODE_OLD_DEFAULT, "Network is down") \
 252 DO( EsecNETUNREACH , EsecGroupCommon, ENETUNREACH , RESP_CODE_OLD_DEFAULT, "Network is unreachable") \
 253 DO( EsecNETRESET , EsecGroupCommon, ENETRESET , RESP_CODE_OLD_DEFAULT, "Network dropped connection because of reset") \
 254 DO( EsecCONNABORTED , EsecGroupCommon, ECONNABORTED , RESP_CODE_OLD_DEFAULT, "Software caused connection abort") \
 255 DO( EsecCONNRESET , EsecGroupCommon, ECONNRESET , RESP_CODE_OLD_DEFAULT, "Connection reset by peer") \
 256 DO( EsecNOBUFS , EsecGroupCommon, ENOBUFS , RESP_CODE_OLD_DEFAULT, "No buffer space available") \
 257 DO( EsecISCONN , EsecGroupCommon, EISCONN , RESP_CODE_OLD_DEFAULT, "Transport endpoint is already connected") \
 258 DO( EsecNOTCONN , EsecGroupCommon, ENOTCONN , RESP_CODE_OLD_DEFAULT, "Transport endpoint is not connected") \
 259 DO( EsecSHUTDOWN , EsecGroupCommon, ESHUTDOWN , RESP_CODE_OLD_DEFAULT, "Cannot send after transport endpoint shutdown") \
 260 DO( EsecTOOMANYREFS , EsecGroupCommon, ETOOMANYREFS , RESP_CODE_OLD_DEFAULT, "Too many references: cannot splice") \
 261 DO( EsecTIMEDOUT , EsecGroupCommon, ETIMEDOUT , RESP_CODE_OLD_DEFAULT, "Connection timed out") \
 262 DO( EsecCONNREFUSED , EsecGroupCommon, ECONNREFUSED , RESP_CODE_OLD_DEFAULT, "Connection refused") \
 263 DO( EsecHOSTDOWN , EsecGroupCommon, EHOSTDOWN , RESP_CODE_OLD_DEFAULT, "Host is down") \
 264 DO( EsecHOSTUNREACH , EsecGroupCommon, EHOSTUNREACH , RESP_CODE_OLD_DEFAULT, "No route to host") \
 265 DO( EsecALREADY , EsecGroupCommon, EALREADY , RESP_CODE_OLD_DEFAULT, "Operation already in progress") \
 266 DO( EsecINPROGRESS , EsecGroupCommon, EINPROGRESS , RESP_CODE_OLD_DEFAULT, "Operation now in progress") \
 267 DO( EsecSTALE , EsecGroupCommon, ESTALE , RESP_CODE_OLD_DEFAULT, "Stale NFS file handle") \
 268 DO( EsecUCLEAN , EsecGroupCommon, EUCLEAN , RESP_CODE_OLD_DEFAULT, "Structure needs cleaning") \
 269 DO( EsecNOTNAM , EsecGroupCommon, ENOTNAM , RESP_CODE_OLD_DEFAULT, "Not a XENIX named type file") \
 270 DO( EsecNAVAIL , EsecGroupCommon, ENAVAIL , RESP_CODE_OLD_DEFAULT, "No XENIX semaphores available") \
 271 DO( EsecISNAM , EsecGroupCommon, EISNAM , RESP_CODE_OLD_DEFAULT, "Is a named type file") \
 272 DO( EsecREMOTEIO , EsecGroupCommon, EREMOTEIO , RESP_CODE_OLD_DEFAULT, "Remote I/O error") \
 273 DO( EsecDQUOT , EsecGroupCommon, EDQUOT , RESP_CODE_OLD_DEFAULT, "Quota exceeded") \
 274 DO( EsecNOMEDIUM , EsecGroupCommon, ENOMEDIUM , RESP_CODE_OLD_DEFAULT, "No medium found") \
 275 DO( EsecMEDIUMTYPE , EsecGroupCommon, EMEDIUMTYPE , RESP_CODE_OLD_DEFAULT, "Wrong medium type") \
 276 DO( EsecCANCELED , EsecGroupCommon, ECANCELED , RESP_CODE_OLD_DEFAULT, "Operation Canceled") \
 277 DO( EsecNOKEY , EsecGroupCommon, ENOKEY , RESP_CODE_OLD_DEFAULT, "Required key not available") \
 278 DO( EsecKEYEXPIRED , EsecGroupCommon, EKEYEXPIRED , RESP_CODE_OLD_DEFAULT, "Key has expired") \
 279 DO( EsecKEYREVOKED , EsecGroupCommon, EKEYREVOKED , RESP_CODE_OLD_DEFAULT, "Key has been revoked") \
 280 DO( EsecKEYREJECTED , EsecGroupCommon, EKEYREJECTED , RESP_CODE_OLD_DEFAULT, "Key was rejected by service") \
 281 DO( EsecOWNERDEAD , EsecGroupCommon, EOWNERDEAD , RESP_CODE_OLD_DEFAULT, "Owner died") \
 282 DO( EsecNOTRECOVERABLE , EsecGroupCommon, ENOTRECOVERABLE , RESP_CODE_OLD_DEFAULT, "State not recoverable") \
 283 DO( EsecRFKILL , EsecGroupCommon, ERFKILL , RESP_CODE_OLD_DEFAULT, "Operation not possible due to RF-kill") \
 284 DO( EsecHWPOISON , EsecGroupCommon, EHWPOISON , RESP_CODE_OLD_DEFAULT, "Memory page has hardware error") \
 285 \
 286 DO( EsecAssertion , EsecGroupCommon, 0xFFFE , RESP_CODE_OLD_DEFAULT, "internal Assertion failed, please report this BUG with full trace") \
 287 DO( EsecUnknown , EsecGroupCommon, 0xFFFF , RESP_CODE_OLD_DEFAULT, "fallback to catch unconvertible exceptions") \
 288 \
 289 DO( EsecModuleCreateFailure , EsecGroupEncGov, 0x0001, RESP_CODE_OLD_DEFAULT, "module cannot be created for command processing") \
 290 DO( EsecGetKeyInfoFailure , EsecGroupEncGov, 0x0002, RESP_CODE_OLD_DEFAULT, "K81 Get Key Info function failure. More details see syslog") \
 291 \
 292 DO( EsecIPCNoCode , EsecGroupIPC, 0x0001, RESP_CODE_OLD_DEFAULT, "tag with secError code is missing") \
 293 DO( EsecIPCTagMissing , EsecGroupIPC, 0x0002, RESP_CODE_OLD_DEFAULT, "Requested tag is missing in IPC message") \
 294 DO( EsecIPCWrongSize , EsecGroupIPC, 0x0003, RESP_CODE_OLD_DEFAULT, "Requested tag exists, but data has wrong size") \
 295 DO( EsecIPCError , EsecGroupIPC, 0x0004, RESP_CODE_OLD_DEFAULT, "IPCPACKET_ERROR") \
 296 DO( EsecIPCNotFound , EsecGroupIPC, 0x0005, RESP_CODE_OLD_DEFAULT, "IPCPACKET_NOTFOUND") \
 297 DO( EsecIPCComNotInit , EsecGroupIPC, 0x0006, RESP_CODE_OLD_DEFAULT, "IPCPACKET_COM_NOT_INIT") \
 298 DO( EsecIPCTlvEmpty , EsecGroupIPC, 0x0007, RESP_CODE_OLD_DEFAULT, "IPCPACKET_TLV_EMPTY") \
 299 DO( EsecIPCTimeOut , EsecGroupIPC, 0x0008, RESP_CODE_OLD_DEFAULT, "IPCPACKET_TIME_OUT") \
 300 DO( EsecIPCEmpty , EsecGroupIPC, 0x0009, RESP_CODE_OLD_DEFAULT, "IPCPACKET_EMPTY") \
 301 \
 302 DO( EsecConfigScriptMissing , EsecGroupEncConfig, 0x0001, RESP_CODE_OLD_DEFAULT, "EXC_CFG_SCRIPT_MISSING") \
 303 DO( EsecConfigEngineMissing , EsecGroupEncConfig, 0x0002, RESP_CODE_OLD_DEFAULT, "EXC_CFG_ENGINE_MISSING") \
 304 DO( EsecModuleConfigMissing , EsecGroupEncConfig, 0x0003, RESP_CODE_OLD_DEFAULT, "EXC_CFG_ENGINE_MISSING") \
 305 DO( EsecNotSupportedModule , EsecGroupEncConfig, 0x0004, RESP_CODE_INVALID_REQ, "Host configuration contains not supported module reference") \
 306 DO( EsecConfigKeyMngMissing , EsecGroupEncConfig, 0x0005, RESP_CODE_OLD_DEFAULT, "KeyManagementType missing") \
 307 DO( EsecConfigKSNIncTypeMissing , EsecGroupEncConfig, 0x0006, RESP_CODE_OLD_DEFAULT, "KSNIncrementationType missing") \
 308 DO( EsecConfigKTTMissing , EsecGroupEncConfig, 0x0007, RESP_CODE_OLD_DEFAULT, "KeyTranslationTable missing") \
 309 DO( EsecConfigKTTInval , EsecGroupEncConfig, 0x0008, RESP_CODE_OLD_DEFAULT, "KeyTranslationTable is incomplete / KeySet is invalid") \
 310 DO( EsecCommandNotAllowed , EsecGroupEncConfig, 0x0009, RESP_CODE_OLD_DEFAULT, "Command is not allowed for untrusted connection") \
 311 DO( EsecHostCfgNotFound , EsecGroupEncConfig, 0x000A, RESP_CODE_OLD_DEFAULT, "Host configuration does not exist") \
 312 \
 313 DO( EsecDUKPTUnsupportedKeyType , EsecGroupDUKPT, 0x0001, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "RESP_CODE_NOT_SUPPORTED_KEY_TYPE") \
 314 DO( EsecDUKPTUpdateKey , EsecGroupDUKPT, 0x0002, RESP_CODE_OLD_DEFAULT, "Update Key failed, for more details see system error log") \
 315 DO( EsecDUKPTUnsupportedOperation , EsecGroupDUKPT, 0x0003, RESP_CODE_OLD_DEFAULT, "Update Key failed due to not supported operation") \
 316 DO( EsecDUKPTdataNotPadded , EsecGroupDUKPT, 0x0004, RESP_CODE_OLD_DEFAULT, "Padding type is NONE, data must be multiple of block size") \
 317 DO( EsecDUKPTencrypt , EsecGroupDUKPT, 0x0005, RESP_CODE_OLD_DEFAULT, "Data encryption failed") \
 318 DO( EsecDUKPTdecrypt , EsecGroupDUKPT, 0x0006, RESP_CODE_OLD_DEFAULT, "Data decryption failed") \
 319 DO( EsecDUKPTSign , EsecGroupDUKPT, 0x0007, RESP_CODE_OLD_DEFAULT, "Data signing failed") \
 320 DO( EsecDUKPTVerify , EsecGroupDUKPT, 0x0008, RESP_CODE_OLD_DEFAULT, "Data signing verification failed") \
 321 DO( EsecDUKPTCfgUnknowPaddingType , EsecGroupDUKPT, 0x0009, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow padding type") \
 322 DO( EsecDUKPTCfgUnknowMACAlgo , EsecGroupDUKPT, 0x000A, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow signing algorithm") \
 323 DO( EsecDUKPTCfgUnknowIVtype , EsecGroupDUKPT, 0x000B, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow IV type") \
 324 DO( EsecDUKPTCfgUnknowKeyVariant , EsecGroupDUKPT, 0x000C, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow DUKPT key variant") \
 325 DO( EsecDUKPTCfgUnsuppUpdKeyMethod, EsecGroupDUKPT, 0x000C, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow DUKPT Update Key Method. Only #CFG_ENTRY_UPDATEKEY_METHOD are supported") \
 326 \
 327 DO( EsecTAInvalidSessionId , EsecGroupEncTA, 0x0001, RESP_CODE_OLD_DEFAULT, "TransactionData could not be found with given SessionId") \
 328 DO( EsecTAWriteProtected , EsecGroupEncTA, 0x0002, RESP_CODE_OLD_DEFAULT, "TransactionData could not be written because item is private or read-only") \
 329 DO( EsecTAReadProtected , EsecGroupEncTA, 0x0003, RESP_CODE_OLD_DEFAULT, "TransactionData could not be read because item is private or write-only") \
 330 DO( EsecTANoEntry , EsecGroupEncTA, 0x0004, RESP_CODE_OLD_DEFAULT, "TransactionData could not be read because item is not available") \
 331 \
 332 DO( EsecVSSUpdateKey , EsecGroupEncVSS, 0x0001, RESP_CODE_OLD_DEFAULT, "RESP_CODE_UPDATE_KEY_FAILED") \
 333 DO( EsecVSSnotFound , EsecGroupEncVSS, 0x0002, RESP_CODE_OLD_DEFAULT, "requested VSS is not installed in system") \
 334 DO( EsecVSSsetDUKPTmasks , EsecGroupEncVSS, 0x0003, RESP_CODE_OLD_DEFAULT, "") \
 335 DO( EsecVSSunsupportedKeyType , EsecGroupEncVSS, 0x0004, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "RESP_CODE_NOT_SUPPORTED_KEY_TYPE") \
 336 DO( EsecVSSMissingTPKorTAK , EsecGroupEncVSS, 0x0005, RESP_CODE_MISSING_TPK_OR_TAK, "RESP_CODE_MISSING_TPK_OR_TAK") \
 337 DO( EsecVSSMacVer , EsecGroupEncVSS, 0x0006, RESP_CODE_OLD_DEFAULT, "Mac-Verification failed RESP_CODE_MAC_VER_FAILED") \
 338 DO( EsecVSSSystemError , EsecGroupEncVSS, 0x0101, RESP_CODE_OLD_DEFAULT, "CVSScript::ESYSTEMERROR, CVSSEngine::ESYSTEMERROR") \
 339 DO( EsecVSSFileNotLoaded , EsecGroupEncVSS, 0x0102, RESP_CODE_OLD_DEFAULT, "CVSScript::EFILENOTLOADED, ") \
 340 DO( EsecVSSCryptpdevice , EsecGroupEncVSS, 0x0103, RESP_CODE_CRYPTO_DEVICE_BLOCKED, "CVSScript::ECRYPTODEVICE, ") \
 341 DO( EsecVSSInvalidPointer , EsecGroupEncVSS, 0x0104, RESP_CODE_OLD_DEFAULT, "CVSScript::EINVALIDPOINTER, ") \
 342 DO( EsecVSSNotDefined , EsecGroupEncVSS, 0x0105, RESP_CODE_OLD_DEFAULT, "CVSScript::ENOTDEFINED, CVSSEngine::ENOTDEFINED") \
 343 DO( EsecVSSNotInstalled , EsecGroupEncVSS, 0x0106, RESP_CODE_OLD_DEFAULT, "CVSScript::ENOTINSTALLED, ") \
 344 DO( EsecVSSMacroNotExists , EsecGroupEncVSS, 0x0107, RESP_CODE_OLD_DEFAULT, "CVSScript::EMACRONOTEXISTS, CVSSEngine::EsecVSSMacroNotExists") \
 345 DO( EsecVSSMacroError , EsecGroupEncVSS, 0x0108, RESP_CODE_FAILED , "CVSScript::EMACROERROR, CVSSEngine::EMACROERROR") \
 346 DO( EsecVSSBadChaining , EsecGroupEncVSS, 0x0109, RESP_CODE_OLD_DEFAULT, "CVSScript::EBADCHAINING, ") \
 347 DO( EsecVSSBadLength , EsecGroupEncVSS, 0x010A, RESP_CODE_OLD_DEFAULT, "CVSScript::EBADLENGTH, ") \
 348 DO( EsecVSSNotInitialize , EsecGroupEncVSS, 0x010B, RESP_CODE_OLD_DEFAULT, "CVSScript::ENOTINITIALIZE, ") \
 349 DO( EsecVSSNumberNotSet , EsecGroupEncVSS, 0x010C, RESP_CODE_OLD_DEFAULT, "CVSScript::ENUMBERNOTSET, ") \
 350 DO( EsecVSSInvalidArg , EsecGroupEncVSS, 0x010D, RESP_CODE_NOT_SUPPORTED_KSID, "CVSScript::EINVALIDARG, CVSSEngine::EINVALIDARG") \
 351 DO( EsecVSSGetPinError , EsecGroupEncVSS, 0x010E, RESP_CODE_OLD_DEFAULT, "CVSScript::EGETPINERROR CVSSEngine::EGETPINERROR") \
 352 DO( EsecVSSSelectKeySetVer1 , EsecGroupEncVSS, 0x010F, RESP_CODE_OLD_DEFAULT, "Version 1 of Key-Set-Id-Table is limited to 8 ksid") \
 353 DO( EsecVSSPinEqual , EsecGroupEncVSS, 0x010F, RESP_CODE_OLD_DEFAULT, "CVSSEngine::EPINEQUAL") \
 354 DO( EsecVSSDataNoPadded , EsecGroupEncVSS, 0x0110, RESP_CODE_OLD_DEFAULT, "CVSSEngine::EsecVSSDataNoPadded") \
 355 DO( EsecVSSPinBlockFormat , EsecGroupEncVSS, 0x0111, RESP_CODE_OLD_DEFAULT, "CVSSEngine::EPINBLOCKFORMAT") \
 356 DO( EsecVSSMacVerifi , EsecGroupEncVSS, 0x0112, RESP_CODE_MAC_VER_FAILED, "CVSSEngine::EMACVERIFI") \
 357 DO( EsecVSSBadKey , EsecGroupEncVSS, 0x0113, RESP_CODE_MAC_VER_FAILED, "CVSSEngine::EsecVSSBadKey") \
 358 DO( EsecVSSincrKsnError , EsecGroupEncVSS, 0x0114, RESP_CODE_KSN_INCREMENTATION_ERROR, "CVSSEngine::EsecVSSMacroError") \
 359 DO( EsecVSSConfig , EsecGroupEncVSS, 0x0115, RESP_CODE_OLD_DEFAULT, "CVSSEngine::EsecVSSConfig") \
 360 DO( EsecVSSPaddingError , EsecGroupEncVSS, 0x0116, RESP_CODE_FAILED , "CVSSEngine::EsecVSSPaddingError") \
 361 \
 362 DO( EsecIPPMACGeneration , EsecGroupEncIPP, 0x0001, RESP_CODE_OLD_DEFAULT, "MAC generation failed") \
 363 DO( EsecIPPSelectMK , EsecGroupEncIPP, 0x0002, RESP_CODE_OLD_DEFAULT, "Select MK failed") \
 364 DO( EsecIPPunsupportedKeyType , EsecGroupEncIPP, 0x0003, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "RESP_CODE_NOT_SUPPORTED_KEY_TYPE") \
 365 DO( EsecIPPUpdateKey , EsecGroupEncIPP, 0x0004, RESP_CODE_OLD_DEFAULT, "RESP_CODE_UPDATE_KEY_FAILED") \
 366 DO( EsecIPPInvalidKeyLength , EsecGroupEncIPP, 0x0005, RESP_CODE_OLD_DEFAULT, "RESP_CODE_INVALID_KEY_LENGTH") \
 367 DO( EsecIPPInvalidKey , EsecGroupEncIPP, 0x0006, RESP_CODE_OLD_DEFAULT, "RESP_CODE_INVALID_KEY") \
 368 DO( EsecIPPComm , EsecGroupEncIPP, 0x0007, RESP_CODE_OLD_DEFAULT, "Error with IPP communication") \
 369 DO( EsecIPPFailure , EsecGroupEncIPP, 0x0008, RESP_CODE_OLD_DEFAULT, "PP_COMM_FAILURE") \
 370 DO( EsecIPPCancelled , EsecGroupEncIPP, 0x0009, RESP_CODE_OLD_DEFAULT, "RESP_CODE_PIN_CANCEL PP_COMM_CANCELLED PP_COMM_PIN_BREAK") \
 371 DO( EsecIPPTimeout , EsecGroupEncIPP, 0x000A, RESP_CODE_TIMEOUT , "RESP_CODE_TIMEOUT PP_COMM_TIMEOUT") \
 372 DO( EsecIPPNoAck , EsecGroupEncIPP, 0x000B, RESP_CODE_OLD_DEFAULT, "PP_COMM_OK_NO_ACK") \
 373 DO( EsecIPPPinBreak , EsecGroupEncIPP, 0x000C, RESP_CODE_OLD_DEFAULT, "PP_COMM_PIN_BREAK") \
 374 DO( EsecIPPNoMSK , EsecGroupEncIPP, 0x0011, RESP_CODE_OLD_DEFAULT, "No master key") \
 375 DO( EsecIPPWorkingKey , EsecGroupEncIPP, 0x0012, RESP_CODE_OLD_DEFAULT, "Account or working key error") \
 376 DO( EsecIPPLongPin , EsecGroupEncIPP, 0x0013, RESP_CODE_OLD_DEFAULT, "PIN too long") \
 377 DO( EsecIPPShortPin , EsecGroupEncIPP, 0x0014, RESP_CODE_OLD_DEFAULT, "PIN too short / non-decimal digits in PIN.") \
 378 DO( EsecIPPPDUKPTinMSK , EsecGroupEncIPP, 0x0015, RESP_CODE_OLD_DEFAULT, "PIN pad used as DUKPT (in MS command)") \
 379 DO( EsecIPPPMSKAttribute , EsecGroupEncIPP, 0x0016, RESP_CODE_OLD_DEFAULT, "Master key attributes error") \
 380 DO( EsecIPPPGiskeAttribute , EsecGroupEncIPP, 0x0017, RESP_CODE_OLD_DEFAULT, "KOF/GISKE working key attributes error") \
 381 DO( EsecIPPNoKey , EsecGroupEncIPP, 0x0018, RESP_CODE_OLD_DEFAULT, "No key") \
 382 DO( EsecIPPPAccount , EsecGroupEncIPP, 0x0019, RESP_CODE_OLD_DEFAULT, "Account error") \
 383 DO( EsecIPPPMSKinDUKPT , EsecGroupEncIPP, 0x001A, RESP_CODE_OLD_DEFAULT, "PIN pad used as MS (in DUKPT command)") \
 384 DO( EsecIPPPOverflow , EsecGroupEncIPP, 0x001B, RESP_CODE_OLD_DEFAULT, "PIN pad has over 1 million transactions") \
 385 DO( EsecIPPKMmode , EsecGroupEncIPP, 0x0021, RESP_CODE_INVALID_KEY, "IPP in incorrect KM mode") \
 386 DO( EsecIPPUsage , EsecGroupEncIPP, 0x0022, RESP_CODE_INVALID_KEY, "incorrect key usage, mode of use, algorithm, or key length") \
 387 DO( EsecIPPVersion , EsecGroupEncIPP, 0x0023, RESP_CODE_INVALID_KEY, "Version error") \
 388 DO( EsecIPPSKlkExists , EsecGroupEncIPP, 0x0024, RESP_CODE_INVALID_KEY, "Error: KLK already exists or new KLK was not encrypted from the previous KLK") \
 389 DO( EsecIPPPGiske , EsecGroupEncIPP, 0x0025, RESP_CODE_INVALID_KEY, "GISKE decryption or MAC error") \
 390 DO( EsecIPPPMatch , EsecGroupEncIPP, 0x0026, RESP_CODE_INVALID_KEY, "VOSCOR-12713 -> duplicate keys are not allowed (docu says 'master key address does not match the address range described in Packet')") \
 391 DO( EsecIPPPAdressing , EsecGroupEncIPP, 0x0027, RESP_CODE_INVALID_KEY, "inappropriate master key addressing") \
 392 DO( EsecIPPNoSessionKey , EsecGroupEncIPP, 0x0028, RESP_CODE_OLD_DEFAULT, "No SessionKey in TD, updateKey first") \
 393 DO( EsecIPPPinBlockFormat , EsecGroupEncIPP, 0x0029, RESP_CODE_OLD_DEFAULT, "Not supported PIN block format") \
 394 \
 395 DO( EsecIPPAdeInternal , EsecGroupEncIPP, 0x0080, RESP_CODE_OLD_DEFAULT, "ADE interface of IPP: Internal error") \
 396 DO( EsecIPPAdeFormat , EsecGroupEncIPP, 0x0081, RESP_CODE_INVALID_KEY_LENGTH, "ADE interface of IPP: Invalid format") \
 397 DO( EsecIPPAdeSlot , EsecGroupEncIPP, 0x0082, RESP_CODE_OLD_DEFAULT, "ADE interface of IPP: Unsupported key slot") \
 398 DO( EsecIPPAdeDuplicate , EsecGroupEncIPP, 0x0083, RESP_CODE_OLD_DEFAULT, "ADE interface of IPP: Duplicate key") \
 399 \
 400 \
 401 DO( EsecADEnotActive , EsecGroupEncADE, 0x0001, RESP_ADE_NOT_ACTIVE , "RESP_CODE_ADE_NOT_ACTIVE") \
 402 DO( EsecADEencrypt , EsecGroupEncADE, 0x0002, RESP_CODE_OLD_DEFAULT, "ade_encrypt failed") \
 403 DO( EsecADEConfig , EsecGroupEncADE, 0x0003, RESP_CODE_OLD_DEFAULT, "ade invalid configuration") \
 404 DO( EsecADEdataNotPadded , EsecGroupEncADE, 0x0004, RESP_CODE_OLD_DEFAULT, "according to host configuration data must be padded by application") \
 405 \
 406 DO( EsecBendigoStoreKey , EsecGroupEncBendigo, 0x0001, RESP_CODE_OLD_DEFAULT, "") \
 407 DO( EsecBendigoStoreRN , EsecGroupEncBendigo, 0x0002, RESP_CODE_OLD_DEFAULT, "") \
 408 DO( EsecBendigoStoreDateTime , EsecGroupEncBendigo, 0x0003, RESP_CODE_OLD_DEFAULT, "") \
 409 DO( EsecBendigoStoreKCA , EsecGroupEncBendigo, 0x0004, RESP_CODE_OLD_DEFAULT, "") \
 410 DO( EsecBendigoStoreKMACH , EsecGroupEncBendigo, 0x0005, RESP_CODE_OLD_DEFAULT, "") \
 411 DO( EsecBendigoStoreAIIC , EsecGroupEncBendigo, 0x0006, RESP_CODE_OLD_DEFAULT, "") \
 412 DO( EsecBendigoComputeKIA , EsecGroupEncBendigo, 0x0007, RESP_CODE_OLD_DEFAULT, "") \
 413 DO( EsecBendigoComputeKMACI , EsecGroupEncBendigo, 0x0008, RESP_CODE_OLD_DEFAULT, "") \
 414 DO( EsecBendigoValidateAcqMkMac , EsecGroupEncBendigo, 0x0009, RESP_CODE_OLD_DEFAULT, "") \
 415 DO( EsecBendigoStoreKEK1 , EsecGroupEncBendigo, 0x000A, RESP_CODE_OLD_DEFAULT, "") \
 416 DO( EsecBendigoStoreKEK2 , EsecGroupEncBendigo, 0x000B, RESP_CODE_OLD_DEFAULT, "") \
 417 DO( EsecBendigoStorePPASN , EsecGroupEncBendigo, 0x000C, RESP_CODE_OLD_DEFAULT, "") \
 418 DO( EsecBendigoStoreKMACr , EsecGroupEncBendigo, 0x000D, RESP_CODE_OLD_DEFAULT, "") \
 419 DO( EsecBendigoStoreKMACs , EsecGroupEncBendigo, 0x000E, RESP_CODE_OLD_DEFAULT, "") \
 420 DO( EsecBendigoStoreKDr , EsecGroupEncBendigo, 0x000F, RESP_CODE_OLD_DEFAULT, "") \
 421 DO( EsecBendigoStoreKDs , EsecGroupEncBendigo, 0x0010, RESP_CODE_OLD_DEFAULT, "") \
 422 DO( EsecBendigoStoreKPP , EsecGroupEncBendigo, 0x0011, RESP_CODE_OLD_DEFAULT, "") \
 423 DO( EsecBendigoRollKEK1 , EsecGroupEncBendigo, 0x0012, RESP_CODE_OLD_DEFAULT, "") \
 424 DO( EsecBendigoRollKEK2 , EsecGroupEncBendigo, 0x0013, RESP_CODE_OLD_DEFAULT, "") \
 425 DO( EsecBendigoUnsupportedKeyType , EsecGroupEncBendigo, 0x0014, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "RESP_CODE_NOT_SUPPORTED_KEY_TYPE") \
 426 \
 427 DO( EsecVOLLoadEngineFailed , EsecGroupEncVOL, 0x0001, RESP_CODE_OLD_DEFAULT, "load engine failed") \
 428 DO( EsecVOLInitEncFailed , EsecGroupEncVOL, 0x0002, RESP_CODE_OLD_DEFAULT, "encryption init failed") \
 429 DO( EsecVOLSetParamFailed , EsecGroupEncVOL, 0x0003, RESP_CODE_OLD_DEFAULT, "context parameter setting failed") \
 430 DO( EsecVOLGenKeyFailed , EsecGroupEncVOL, 0x0004, RESP_CODE_OLD_DEFAULT, "key generation failed") \
 431 DO( EsecVOLEncDataFailed , EsecGroupEncVOL, 0x0005, RESP_CODE_OLD_DEFAULT, "data encryption failed") \
 432 DO( EsecVOLInvalidParam , EsecGroupEncVOL, 0x0006, RESP_CODE_OLD_DEFAULT, "parameter value is invalid") \
 433 DO( EsecVOLNoETB , EsecGroupEncVOL, 0x0007, RESP_CODE_OLD_DEFAULT, "no ETB delivered") \
 434 DO( EsecVOLNoETBDOB , EsecGroupEncVOL, 0x0008, RESP_CODE_OLD_DEFAULT, "no ETB DOB (getting key creation date failed)") \
 435 DO( EsecVOLKeyMissing , EsecGroupEncVOL, 0x0009, RESP_CODE_OLD_DEFAULT, "voltage key is missing") \
 436 DO( EsecVOLKeyRollingFailed , EsecGroupEncVOL, 0x000A, RESP_CODE_OLD_DEFAULT, "key rolling failed") \
 437 DO( EsecVOLKeyDelFailed , EsecGroupEncVOL, 0x000B, RESP_CODE_OLD_DEFAULT, "removing of session key failed") \
 438 DO( EsecVOLSetDefCiphFailed , EsecGroupEncVOL, 0x000C, RESP_CODE_OLD_DEFAULT, "set default ciphers failed") \
 439 DO( EsecVOLTransDataMissing , EsecGroupEncVOL, 0x000D, RESP_CODE_OLD_DEFAULT, "Transaction Data missing") \
 440 DO( EsecVOLReadFileFailed , EsecGroupEncVOL, 0x000E, RESP_CODE_OLD_DEFAULT, "reading file failed") \
 441 \
 442 DO( EsecVDSPTransDataMissing , EsecGroupEncVDSP, 0x0001, RESP_CODE_OLD_DEFAULT, "Transaction Data missing") \
 443 DO( EsecVDSPUnvalidEncAlgo , EsecGroupEncVDSP, 0x0002, RESP_CODE_OLD_DEFAULT, "invalid encryption algorithm") \
 444 DO( EsecVDSPDataEncFailed , EsecGroupEncVDSP, 0x0003, RESP_CODE_OLD_DEFAULT, "data encryption failed") \
 445 DO( EsecVDSPInvalidData , EsecGroupEncVDSP, 0x0004, RESP_CODE_OLD_DEFAULT, "invalid data") \
 446 DO( EsecVDSPNotSupportedFunction , EsecGroupEncVDSP, 0x0005, RESP_CODE_OLD_DEFAULT, "Function is not supported by this module") \
 447 \
 448 DO( EsecRSAConfig , EsecGroupEncRSA, 0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration") \
 449 DO( EsecRSAPubKey , EsecGroupEncRSA, 0x0002, RESP_CODE_OLD_DEFAULT, "Public Key related") \
 450 DO( EsecRSAPrivKey , EsecGroupEncRSA, 0x0003, RESP_CODE_OLD_DEFAULT, "Private Key related") \
 451 DO( EsecRSAEncrypt , EsecGroupEncRSA, 0x0004, RESP_CODE_OLD_DEFAULT, "") \
 452 DO( EsecRSADecrypt , EsecGroupEncRSA, 0x0005, RESP_CODE_OLD_DEFAULT, "") \
 453 DO( EsecRSASign , EsecGroupEncRSA, 0x0006, RESP_CODE_OLD_DEFAULT, "") \
 454 DO( EsecRSAVerify , EsecGroupEncRSA, 0x0007, RESP_CODE_OLD_DEFAULT, "") \
 455 DO( EsecRSAMismatch , EsecGroupEncRSA, 0x0008, RESP_CODE_OLD_DEFAULT, "Mismatch during Verification") \
 456 DO( EsecRSADigest , EsecGroupEncRSA, 0x0009, RESP_CODE_OLD_DEFAULT, "Digest needed for Sign and Verify") \
 457 DO( EsecRSAKey , EsecGroupEncRSA, 0x000A, RESP_CODE_OLD_DEFAULT, "Set Key") \
 458 DO( EsecRSAUpdateKey , EsecGroupEncRSA, 0x000B, RESP_CODE_OLD_DEFAULT, "Update Key failure") \
 459 DO( EsecRSAunsupportedKeyType , EsecGroupEncRSA, 0x000C, RESP_CODE_NOT_SUPPORTED_KEY_TYPE, "Not supported key type by module RSA") \
 460 DO( EsecRSAPaddingOp , EsecGroupEncRSA, 0x000D, RESP_CODE_OLD_DEFAULT, "Padding cannot be set or removed") \
 461 DO( EsecRSAunsupportedPadding , EsecGroupEncRSA, 0x000E, RESP_CODE_OLD_DEFAULT, "Not supported padding type by module RSA") \
 462 DO( EsecRSAwrongDataSize , EsecGroupEncRSA, 0x000F, RESP_CODE_OLD_DEFAULT, "Input data must have size according HASH function defined in host configuration") \
 463 \
 464 DO( EsecAESConfig , EsecGroupEncAES, 0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration") \
 465 DO( EsecAESUnsuppHashType , EsecGroupEncAES, 0x0002, RESP_CODE_OLD_DEFAULT, "Unsupported hash algorithm") \
 466 DO( EsecAESUnsuppMethod , EsecGroupEncAES, 0x0003, RESP_CODE_OLD_DEFAULT, "Unsupported encryption method") \
 467 DO( EsecAESEncrypt , EsecGroupEncAES, 0x0004, RESP_CODE_OLD_DEFAULT, "") \
 468 DO( EsecAESDecrypt , EsecGroupEncAES, 0x0005, RESP_CODE_OLD_DEFAULT, "") \
 469 DO( EsecAESSign , EsecGroupEncAES, 0x0006, RESP_CODE_OLD_DEFAULT, "") \
 470 DO( EsecAESVerify , EsecGroupEncAES, 0x0007, RESP_CODE_OLD_DEFAULT, "") \
 471 DO( EsecAESMismatch , EsecGroupEncAES, 0x0008, RESP_CODE_OLD_DEFAULT, "Mismatch during Verification") \
 472 DO( EsecAESDigest , EsecGroupEncAES, 0x0009, RESP_CODE_OLD_DEFAULT, "Digest needed for Sign and Verify") \
 473 DO( EsecAESKey , EsecGroupEncAES, 0x000A, RESP_CODE_OLD_DEFAULT, "Set Key") \
 474 DO( EsecAESRetrEncPIN , EsecGroupEncAES, 0x000B, RESP_CODE_OLD_DEFAULT, "") \
 475 DO( EsecAESCfgUnsuppKSNIncType , EsecGroupEncAES, 0x000C, RESP_CODE_OLD_DEFAULT, "Unsupported KSN Incrementation type") \
 476 DO( EsecAESCfgUnsuppKSNIncState , EsecGroupEncAES, 0x000D, RESP_CODE_OLD_DEFAULT, "Unsupported KSN Incrementation state") \
 477 DO( EsecAESGetKSNFailue , EsecGroupEncAES, 0x000E, RESP_CODE_OLD_DEFAULT, "KSN cannot be retrieved from engine") \
 478 \
 479 DO( EsecSREDConfig , EsecGroupEncSRED, 0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration") \
 480 DO( EsecSREDSign , EsecGroupEncSRED, 0x0002, RESP_CODE_OLD_DEFAULT, "") \
 481 DO( EsecSREDVerify , EsecGroupEncSRED, 0x0003, RESP_CODE_OLD_DEFAULT, "") \
 482 DO( EsecSREDMismatch , EsecGroupEncSRED, 0x0004, RESP_CODE_OLD_DEFAULT, "Mismatch during Verification") \
 483 DO( EsecSREDNoKey , EsecGroupEncSRED, 0x0005, RESP_CODE_OLD_DEFAULT, "No key available") \
 484 DO( EsecSREDCfgUnsuppKSNIncType , EsecGroupEncSRED, 0x0006, RESP_CODE_OLD_DEFAULT, "Unsupported KSN Incrementation type") \
 485 DO( EsecSREDCfgUnsuppKSNIncState , EsecGroupEncSRED, 0x0007, RESP_CODE_OLD_DEFAULT, "Unsupported KSN Incrementation state") \
 486 \
 487 DO( EsecCryptoRead , EsecGroupEncCryptRW, 0x0001, RESP_CODE_OLD_DEFAULT, "CryptoRead failed") \
 488 DO( EsecCryptoWrite , EsecGroupEncCryptRW, 0x0002, RESP_CODE_OLD_DEFAULT, "CryptoWrite failed") \
 489 \
 490 DO( EsecMSKConfig , EsecGroupEncMSK, 0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, for more details see system error log") \
 491 DO( EsecMSKUpdateKey , EsecGroupEncMSK, 0x0002, RESP_CODE_OLD_DEFAULT, "Update Key failed") \
 492 DO( EsecMKSMasterKeyProtected , EsecGroupEncMSK, 0x0003, RESP_CODE_OLD_DEFAULT, "Master Key is nor writable, entered in 'updateKey_protected' section of host configuration") \
 493 DO( EsecMSKunsupportedKeyType , EsecGroupEncMSK, 0x0004, RESP_CODE_OLD_DEFAULT, "Update Key is not defined for this key type") \
 494 DO( EsecMSKEncryptDataFailed , EsecGroupEncMSK, 0x0005, RESP_CODE_OLD_DEFAULT, "data encrypt operation failed") \
 495 DO( EsecMSKDecryptDataFailed , EsecGroupEncMSK, 0x0006, RESP_CODE_OLD_DEFAULT, "data decryption operation failed") \
 496 DO( EsecMSKSignFailed , EsecGroupEncMSK, 0x0007, RESP_CODE_OLD_DEFAULT, "signature calculation failed") \
 497 DO( EsecMSKVerify , EsecGroupEncMSK, 0x0008, RESP_CODE_OLD_DEFAULT, "signature calculation failed") \
 498 DO( EsecMSKVerifyFailed , EsecGroupEncMSK, 0x0009, RESP_CODE_OLD_DEFAULT, "signature comparation failed") \
 499 DO( EsecMSKgetPINfailure , EsecGroupEncMSK, 0x000A, RESP_CODE_OLD_DEFAULT, "get PIN Block failed") \
 500 DO( EsecMSKdataNotPadded , EsecGroupEncMSK, 0x000B, RESP_CODE_OLD_DEFAULT, "according to host configuration data must be padded by application") \
 501 DO( EsecMSKCfgUnknowPaddingType , EsecGroupEncMSK, 0x000C, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow padding type") \
 502 DO( EsecMSKCfgUnknowMACAlgo , EsecGroupEncMSK, 0x000D, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow signing algorithm") \
 503 DO( EsecMSKCfgUnknowIVtype , EsecGroupEncMSK, 0x000E, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, unknow IV type") \
 504 DO( EsecMSKunexpectedKCV , EsecGroupEncMSK, 0x000F, RESP_CODE_OLD_DEFAULT, "KCV of injecting key does not mach") \
 505 \
 506 DO( EsecCustRKLConfig , EsecGroupEncCustRKL, 0x0001, RESP_CODE_OLD_DEFAULT, "Invalid Configuration, for more details see system error log") \
 507 DO( EsecCustRKLUpdateKey , EsecGroupEncCustRKL, 0x0002, RESP_CODE_OLD_DEFAULT, "Update Key failed, for more details see system error log") \
 508 DO( EsecCustRKLunsupportedKeyType , EsecGroupEncCustRKL, 0x0003, RESP_CODE_OLD_DEFAULT, "Update Key is not defined for this key type") \
 509 
 510 
 511 
 516 #define DO_ENUM(Name, Group, Offset, Old, Description) Name = Group + Offset,
 517 
 518 
 522 enum secError {
 523 
 535  ERRORS(DO_ENUM)
 536 
 537 };
 538 
 539 
 545 std::string getErrorString(secError_t error);
 546 
 547 
 553 std::string getErrorDescription(secError_t error);
 554 
 555 
 556 /***
 557  * Use this macro to throw errors.
 558  * printing a callstack is added in debug-builds.
 559  */
 560 #ifndef BOOST_NO_EXCEPTIONS
 561  #if defined( LOGAPI_ENABLE_DEBUG )
 562  #define LOG_THROW_EX(error, txt) \
 563  { \
 564  print_stacktrace(); \
 565  SEC_LOG_ERROR(txt " throw " #error); \
 566  throw (com_adksec_cmd::secError)error; \
 567  }
 568  #else
 569  #define LOG_THROW_EX(error, txt) \
 570  { \
 571  SEC_LOG_ERROR(txt " throw " #error); \
 572  throw (com_adksec_cmd::secError)error; \
 573  }
 574  #endif
 575 #else
 576  #if defined( LOGAPI_ENABLE_DEBUG )
 577  #define LOG_THROW_EX(error, txt) \
 578  { \
 579  print_stacktrace(); \
 580  SEC_LOG_ALERT(txt " would throw " #error); \
 581  }
 582  #else
 583  #define LOG_THROW_EX(error, txt) \
 584  { \
 585  SEC_LOG_ALERT(txt " would throw " #error); \
 586  }
 587  #endif
 588 #endif
 589 
 590 
 591 #define LOG_THROW(error) LOG_THROW_EX(error, "")
 592 
 593 #define LOG_ASSERT(assertion) \
 594 { \
 595  if(!(assertion)) \
 596  { \
 597  SEC_LOG_CRIT("Assertion failed: " #assertion); \
 598  LOG_THROW(com_adksec_cmd::EsecAssertion); \
 599  } \
 600 }
 601 
 602 
 603 //to use with std::vector
 604 #define LOG_HEXDUMP(vec) SEC_DBG_HEXDUMP_TRACE(#vec, &vec[0], vec.size())
 605 
 606 
 607 
 608 #if defined( LOGAPI_ENABLE_DEBUG )
 609  #define LOG_RETURN_EX(error, txt) \
 610  { \
 611  print_stacktrace(); \
 612  SEC_LOG_ERROR(txt " return %s (0x%08x): %s", getErrorString(error).c_str(), error, getErrorDescription(error).c_str()); \
 613  return (com_adksec_cmd::secError)error; \
 614  }
 615 #else
 616  #define LOG_RETURN_EX(error, txt) \
 617  { \
 618  SEC_LOG_ERROR(txt " return %s (0x%08x): %s", getErrorString(error).c_str(), error, getErrorDescription(error).c_str()); \
 619  return (com_adksec_cmd::secError)error; \
 620  }
 621 
 622 #endif
 623 
 624 #define LOG_RETURN(error) LOG_RETURN_EX(error, "")
 625 
 626 #if defined( LOGAPI_ENABLE_DEBUG )
 627  #define RETURN_ON(func) {secError err=func; if(err) LOG_RETURN_EX(err, #func)}
 628 #else
 629  #define RETURN_ON(func) {secError err=func; if(err) LOG_RETURN_EX(err, "")}
 630 #endif
 631 
 632 
 633 } /* namespace com_adksec_cmd */
 634 
 635 #endif /* ENCGOVERNOR_SECERROR_H_ */
```
