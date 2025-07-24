---
hidden: true
title: libsecins.h
---

<a href="libsecins_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 2 #ifndef _LIBSECINS_H__
 3 #define _LIBSECINS_H__
 4 
 5 #ifdef __cplusplus
 6 extern "C" {
 7 #endif
 8 
 9 #include <sys/types.h>
 10 #include <verifone/vfsys_defs.h>
 11 #include <inttypes.h>
 12 
 13 #define ERROR_SECINS 100 
 14 #define ERROR_SECINS_NO_MEMORY (ERROR_SECINS + 0) 
 15 #define ERROR_SECINS_MKDIR (ERROR_SECINS + 1) 
 16 #define ERROR_SECINS_FILE_AUTH (ERROR_SECINS + 2) 
 17 #define ERROR_SECINS_MOUNT_RFS (ERROR_SECINS + 3) 
 18 #define ERROR_SECINS_INVALID_INIT_FILE (ERROR_SECINS + 4) 
 19 #define ERROR_SECINS_PATHNAME_TOO_LONG (ERROR_SECINS + 5) 
 20 #define ERROR_SECINS_CHROOT (ERROR_SECINS + 6) 
 21 #define ERROR_SECINS_EXEC_INIT (ERROR_SECINS + 7) 
 22 #define ERROR_SECINS_OPENDIR (ERROR_SECINS + 8) 
 23 #define ERROR_SECINS_RENAME_DIR (ERROR_SECINS + 9) 
 25 #define ERROR_SECINS_CHMOD (ERROR_SECINS + 10) 
 26 #define ERROR_SECINS_CHOWN (ERROR_SECINS + 11) 
 27 #define ERROR_SECINS_FILE_CREATE (ERROR_SECINS + 12) 
 28 #define ERROR_SECINS_FILE_OPEN (ERROR_SECINS + 13) 
 29 #define ERROR_SECINS_FILE_WRITE (ERROR_SECINS + 14) 
 30 #define ERROR_SECINS_NO_SIG (ERROR_SECINS + 15) 
 31 #define ERROR_SECINS_NO_PKG (ERROR_SECINS + 16) 
 32 #define ERROR_SECINS_INVALID_FILENAME (ERROR_SECINS + 17) 
 33 #define ERROR_SECINS_INVALID_INSTALL (ERROR_SECINS + 18) 
 34 #define ERROR_SECINS_INVALID_INI_SECTION (ERROR_SECINS + 19) 
 36 #define ERROR_SECINS_MKNOD (ERROR_SECINS + 20) 
 37 #define ERROR_SECINS_INVALID_INI_PROPERTY (ERROR_SECINS + 21) 
 38 #define ERROR_SECINS_NO_CONTROL_FILE (ERROR_SECINS + 22) 
 39 #define ERROR_SECINS_INVALID_CONTROL_FILE (ERROR_SECINS + 23) 
 40 #define ERROR_SECINS_CREATE_CONTROL_FILE (ERROR_SECINS + 24) 
 41 #define ERROR_SECINS_OLD_PKG_VERSION (ERROR_SECINS + 25) 
 42 #define ERROR_SECINS_INVALID_PKG_TYPE (ERROR_SECINS + 26) 
 43 #define ERROR_SECINS_EXTRACT_PKG_CONTROL (ERROR_SECINS + 27) 
 44 #define ERROR_SECINS_EXTRACT_PKG (ERROR_SECINS + 28) 
 45 #define ERROR_SECINS_INVALID_PKG (ERROR_SECINS + 29) 
 47 #define ERROR_SECINS_PKG_LIST (ERROR_SECINS + 30) 
 48 #define ERROR_SECINS_PKG_FILENAME_TOO_LONG (ERROR_SECINS + 31) 
 49 #define ERROR_SECINS_INSTALL_CONTROL_FILE (ERROR_SECINS + 32) 
 50 #define ERROR_SECINS_INSTALL_PKG (ERROR_SECINS + 33) 
 51 #define ERROR_SECINS_INSTALL_SIG (ERROR_SECINS + 34) 
 52 #define ERROR_SECINS_PKG_NOT_FOUND (ERROR_SECINS + 35) 
 53 #define ERROR_SECINS_ADD_GROUP (ERROR_SECINS + 36) 
 54 #define ERROR_SECINS_ADD_USER (ERROR_SECINS + 37) 
 55 #define ERROR_SECINS_ADD_SHADOW (ERROR_SECINS + 38) 
 56 #define ERROR_SECINS_GET_USER (ERROR_SECINS + 39) 
 58 #define ERROR_SECINS_GET_GROUP (ERROR_SECINS + 40) 
 59 #define ERROR_SECINS_PROCESS_FORK (ERROR_SECINS + 41) 
 60 #define ERROR_SECINS_CHECK_GRSEC (ERROR_SECINS + 42) 
 61 #define ERROR_SECINS_START_GRSEC (ERROR_SECINS + 43) 
 62 #define ERROR_SECINS_FORK (ERROR_SECINS + 44) 
 63 #define ERROR_SECINS_GET_RESOURCE (ERROR_SECINS + 45) 
 64 #define ERROR_SECINS_SETSID (ERROR_SECINS + 46) 
 65 #define ERROR_SECINS_START_LINE_TOO_LONG (ERROR_SECINS + 47) 
 66 #define ERROR_SECINS_START_LINE_INVALID (ERROR_SECINS + 48) 
 67 #define ERROR_SECINS_START_ENTRY_UNKNOWN (ERROR_SECINS + 49) 
 69 #define ERROR_SECINS_EXEC_APP (ERROR_SECINS + 50) 
 70 #define ERROR_SECINS_MODE_APP (ERROR_SECINS + 51) 
 71 #define ERROR_SECINS_SYMLINK (ERROR_SECINS + 52) 
 72 #define ERROR_SECINS_INVALID_INSTALL_FILE (ERROR_SECINS + 53) 
 73 #define ERROR_SECINS_EXTRACT_INSTALL_FILE (ERROR_SECINS + 54) 
 74 #define ERROR_SECINS_INVALID_PKG_FORMAT (ERROR_SECINS + 55) 
 75 #define ERROR_SECINS_AUTH_GID (ERROR_SECINS + 56) 
 76 #define ERROR_SECINS_ADD_CERT (ERROR_SECINS + 57) 
 77 #define ERROR_SECINS_PATCH_VERSION (ERROR_SECINS + 58) 
 78 #define ERROR_SECINS_PATCH (ERROR_SECINS + 59) 
 80 #define ERROR_SECINS_START_SVCSEC (ERROR_SECINS + 60) 
 81 #define ERROR_SECINS_INVALID_CERT (ERROR_SECINS + 61) 
 82 #define ERROR_SECINS_PUT_ENV (ERROR_SECINS + 62) 
 83 #define ERROR_SECINS_SET_USER (ERROR_SECINS + 63) 
 84 #define ERROR_SECINS_INVALID_PKG_CATEGORY (ERROR_SECINS + 64) 
 85 #define ERROR_SECINS_INVALID_CMD (ERROR_SECINS + 65) 
 86 #define ERROR_SECINS_INVALID_BUNDLE_FILE (ERROR_SECINS + 66) 
 87 #define ERROR_SECINS_EXTRACT_BUNDLE_CONTROL (ERROR_SECINS + 67) 
 88 #define ERROR_SECINS_INVALID_BUNDLE_USER (ERROR_SECINS + 68) 
 89 #define ERROR_SECINS_INVALID_PKG_USER (ERROR_SECINS + 69) 
 91 #define ERROR_SECINS_NO_BUNDLE (ERROR_SECINS + 70) 
 92 #define ERROR_SECINS_OPEN_SOCKET (ERROR_SECINS + 71) 
 93 #define ERROR_SECINS_BIND_FAILURE (ERROR_SECINS + 72) 
 94 #define ERROR_SECINS_UNKNOWN_MSG (ERROR_SECINS + 73) 
 95 #define ERROR_SECINS_MSG_SND (ERROR_SECINS + 74) 
 96 #define ERROR_SECINS_MSG_RCV (ERROR_SECINS + 75) 
 97 #define ERROR_SECINS_MSG_SIZE (ERROR_SECINS + 76) 
 98 #define ERROR_SECINS_RESP_SIZE (ERROR_SECINS + 77) 
 99 #define ERROR_SECINS_INVALID_RESP (ERROR_SECINS + 78) 
 100 #define ERROR_SECINS_FILE_READ (ERROR_SECINS + 79) 
 102 #define ERROR_SECINS_FILE_RENAME (ERROR_SECINS + 80) 
 103 #define ERROR_SECINS_USER_APP_START (ERROR_SECINS + 81) 
 104 #define ERROR_SECINS_GET_CWD (ERROR_SECINS + 82) 
 105 #define ERROR_SECINS_INVALID_PARAM (ERROR_SECINS + 83) 
 106 #define ERROR_SECINS_NOT_ALLOWED (ERROR_SECINS + 84) 
 107 #define ERROR_SECINS_SYSMODE_START (ERROR_SECINS + 85) 
 108 #define ERROR_SECINS_INVALID_PKGLIST (ERROR_SECINS + 86) 
 109 #define ERROR_SECINS_SOCK_LISTEN (ERROR_SECINS + 87) 
 110 #define ERROR_SECINS_CONNECT_FAIL (ERROR_SECINS + 88) 
 111 #define ERROR_SECINS_PATCH_APPLIED (ERROR_SECINS + 89) 
 113 #define ERROR_SECINS_RELOAD_GRSEC (ERROR_SECINS + 90) 
 114 #define ERROR_SECINS_CREATE_GRSEC_FILE (ERROR_SECINS + 91) 
 115 #define ERROR_SECINS_GRSEC_SUBJECT (ERROR_SECINS + 92) 
 116 #define ERROR_SECINS_INVALID_POLICY_FILE (ERROR_SECINS + 93) 
 117 #define ERROR_SECINS_INVALID_OBJECT (ERROR_SECINS + 94) 
 118 #define ERROR_SECINS_INVALID_OBJECT_MODE (ERROR_SECINS + 95) 
 119 #define ERROR_SECINS_NO_POLICY_FILE (ERROR_SECINS + 96) 
 120 #define ERROR_SECINS_INVALID_CAPABILITY (ERROR_SECINS + 97) 
 121 #define ERROR_SECINS_OBJECT_NOT_HIDDEN (ERROR_SECINS + 98) 
 122 #define ERROR_SECINS_OBJECT_NOT_FOUND (ERROR_SECINS + 99) 
 124 #define ERROR_SECINS_FILE_CAPS (ERROR_SECINS + 100) 
 125 #define ERROR_SECINS_SUBJECT_MODE (ERROR_SECINS + 101) 
 126 #define ERROR_SECINS_REMOVE_USER (ERROR_SECINS + 102) 
 127 #define ERROR_SECINS_REMOVE_GROUP (ERROR_SECINS + 103) 
 128 #define ERROR_SECINS_PID_NOT_FOUND (ERROR_SECINS + 104) 
 129 #define ERROR_SECINS_SIGNAL_FAIL (ERROR_SECINS + 105) 
 130 #define ERROR_SECINS_LOAD_VSS (ERROR_SECINS + 106) 
 131 #define ERROR_SECINS_UNSIGNED_PKG_USER (ERROR_SECINS + 107) 
 132 #define ERROR_SECINS_PATCH_AUTH (ERROR_SECINS + 108) 
 133 #define ERROR_SECINS_EXTRACT_PATCH_CONTROL (ERROR_SECINS + 109) 
 135 #define ERROR_SECINS_GRSEC_ENTRY_UNKNOWN (ERROR_SECINS + 110) 
 136 #define ERROR_SECINS_FILE_DELETE (ERROR_SECINS + 111) 
 137 #define ERROR_SECINS_NO_SRC_PKG (ERROR_SECINS + 112) 
 138 #define ERROR_SECINS_NO_SRC_BUNDLE (ERROR_SECINS + 113) 
 139 #define ERROR_SECINS_BUNDLE_VERSION (ERROR_SECINS + 114) 
 140 #define ERROR_SECINS_BUNDLE_SRCVERSION (ERROR_SECINS + 115) 
 141 #define ERROR_SECINS_WRONG_BUNDLE (ERROR_SECINS + 116) 
 142 #define ERROR_SECINS_TOKEN_FAIL (ERROR_SECINS + 117) 
 143 #define ERROR_SECINS_BUNDLE_CHANGED (ERROR_SECINS + 118) 
 144 #define ERROR_SECINS_BUNDLE_NOT_CHANGED (ERROR_SECINS + 119) 
 146 #define ERROR_SECINS_MANU_MODE (ERROR_SECINS + 120) 
 147 #define ERROR_SECINS_MANU_MODE_REQD (ERROR_SECINS + 121) 
 148 #define ERROR_SECINS_INVALID_UMASK (ERROR_SECINS + 122) 
 149 #define ERROR_SECINS_FILE_SEEK (ERROR_SECINS + 123) 
 150 #define ERROR_SECINS_MODULE_NOT_FOUND (ERROR_SECINS + 124) 
 151 #define ERROR_SECINS_INVALID_HMAC_CFG (ERROR_SECINS + 125) 
 152 #define ERROR_SECINS_HMAC_SETUP (ERROR_SECINS + 126) 
 153 #define ERROR_SECINS_HMAC_CHECK (ERROR_SECINS + 127) 
 154 #define ERROR_SECINS_CERT_NOT_FOUND (ERROR_SECINS + 128) 
 155 #define ERROR_SECINS_BUNDLE_NOT_FOUND (ERROR_SECINS + 129) 
 157 #define ERROR_SECINS_TARGET_ERROR (ERROR_SECINS + 130) 
 158 #define ERROR_SECINS_REG_CALLBACK (ERROR_SECINS + 131) 
 159 #define ERROR_SECINS_SET_RESOURCE (ERROR_SECINS + 132) 
 160 #define ERROR_SECINS_PATCHLIST_FILE (ERROR_SECINS + 133)
 161 #define ERROR_SECINS_SHA_COMPUTE (ERROR_SECINS + 134)
 162 #define ERROR_SECINS_SHA_MISMATCH (ERROR_SECINS + 135)
 163 #define ERROR_SECINS_COMPRESS_PKG (ERROR_SECINS + 136)
 164 #define ERROR_SECINS_FILE_COPY (ERROR_SECINS + 137)
 165 #define ERROR_SECINS_IS_APP_DEV (ERROR_SECINS + 138)
 166 #define ERROR_SECINS_APP_DEV_TOKEN (ERROR_SECINS + 139)
 167 
 168 #define ERROR_SECINS_APP_DEV_CERTS (ERROR_SECINS + 140)
 169 #define ERROR_SECINS_DEL_CERTFILE (ERROR_SECINS + 141)
 170 #define ERROR_SECINS_APP_DEV_SVID (ERROR_SECINS + 142)
 171 
 172 #define ERROR_SECINS_SPARSE_PATCH (ERROR_SECINS + 143)
 173 
 174 #define ERROR_SECINS_HMAC_KEY_TOO_LONG (ERROR_SECINS + 146)
 175 #define ERROR_SECINS_VER_NOT_SUPPORTED (ERROR_SECINS + 147)
 176 
 177 #define ERROR_SECINS_NO_KEY_ELEMENT (ERROR_SECINS + 148)
 178 #define ERROR_SECINS_NOT_SUPPORTED (ERROR_SECINS + 149)
 179 #define ERROR_SECINS_PARSING_ERROR (ERROR_SECINS + 150)
 180 #define ERROR_SECINS_INVALID_CMS (ERROR_SECINS + 151)
 181 #define ERROR_SECINS_INSTALL_TR34JSON (ERROR_SECINS + 152)
 182 #define ERROR_SECINS_INVALID_RETVAL (ERROR_SECINS + 153)
 183 
 184 #define ERROR_SECINS_LOW_LAYER_INSTALL (ERROR_SECINS + 154) /* Low layer images failed to install */
 185 #define ERROR_SECINS_NO_SN_MATCH (ERROR_SECINS + 155) /* VRK bundle did not contain file for this unit */
 186 #define ERROR_SECINS_INSTALL_BUSY_SYSTEM (ERROR_SECINS + 156) /* Do not install as the critical section on by some user */
 187 #define ERROR_SECINS_DL_ERROR (ERROR_SECINS + 157) /* Dynamic lib errors */
 188 #define ERROR_SECINS_READ_LL_IMAGE (ERROR_SECINS + 158) 
 189 #define ERROR_SECINS_FILE_TRUNCATE (ERROR_SECINS + 159) 
 190 #define ERROR_SECINS_FILE_MMAP (ERROR_SECINS + 160)
 191 #define ERROR_SECINS_FILE_STAT (ERROR_SECINS + 161)
 192 
 193 #define ERROR_SECINS_INSTSTAT_FAIL (ERROR_SECINS + 162)
 194 #define ERROR_SECINS_CRITSEC_OP_FAILED (ERROR_SECINS + 163)
 195 #define ERROR_SECINS_VOS2_SIGNER_NOT_FOUND (ERROR_SECINS + 164)
 196 #define ERROR_SECINS_INVALID_DLLIST (ERROR_SECINS + 165)
 197 
 198 #define ERROR_SECINS_DAEMON_START_FAILED (ERROR_SECINS + 166)
 199 #define ERROR_SECINS_DAEMON_STOP_FAILED (ERROR_SECINS + 167)
 200 #define ERROR_SECINS_DAEMON_RESTART_FAILED (ERROR_SECINS + 168)
 201 #define ERROR_SECINS_DAEMON_RELOAD_FAILED (ERROR_SECINS + 169)
 202 
 203 #define ERROR_SECINS_NO_SPACE (ERROR_SECINS + 170)
 204 
 205 #define ERROR_SECINS_PREINST (ERROR_SECINS + 171) /* Preinst script execution failure */
 206 
 207 
 208 #define SECINS_BIT(n) (1 << n)
 209 
 214 #define SECINS_REBOOT_REQD_BIT SECINS_BIT(0) 
 215 #define SECINS_RESTART_APPS_REQD_BIT SECINS_BIT(1) 
 217 #ifdef RAPTOR
 218 #define SECINS_L1BOOT_REQD_BIT SECINS_BIT(2)
 219 #endif
 220 
 226 #ifdef RAPTOR
 227 #define SECINS_FORCE_INSTALL SECINS_BIT(0) 
 228 #define SECINS_FORCE_RESTART_APPS SECINS_BIT(1) 
 229 #define SECINS_FORCE_REBOOT SECINS_BIT(2) 
 230 #endif
 231 
 234 #define MAX_PATH_FILE 256
 235 
 236 // if SYSMODE_BTN_SEM changed - grsec policy should be changed as well
 237 #define SYSMODE_BTN_SEM "/si_button_block_sem"
 238 
 243 #define NORMALLY_TERMINATED 0x01 
 244 #define KILLED_BY_SIGNAL 0x02 
 245 #define UNKOWN_CAUSE_OF_DEATH 0x03 
 248 /*
 249  * @name SI Device run modes.
 250  * The run mode is mainly determined by the hardware SVID value but may also
 251  * be set by SI configuration items.
 252  */
 253 #define SECINS_DEVICE_MODE_MANU 0
 254 #define SECINS_DEVICE_MODE_PROD 1
 255 #define SECINS_DEVICE_MODE_APPDEV 2
 256 #define SECINS_DEVICE_MODE_OSDEV 3
 257 
 258 /* @name SI Certificate tree types */
 259 #define SECINS_PROD_CERT_TREE 0
 260 #define SECINS_OSDEV_CERT_TREE 1
 261 #define SECINS_APPDEV_CERT_TREE 2
 262 
 263 /* @name SI Daemon action types */
 264 #define SECINS_DAEMON_START 0
 265 #define SECINS_DAEMON_STOP 1
 266 #define SECINS_DAEMON_RESTART 2
 267 #define SECINS_DAEMON_RELOAD 3
 268 
 269 /* @name Device Reboot supported modes */
 270 enum boot_modes {
 271  BOOT_MODE_NA = -1,
 272  BOOT_MODE_FLASH = 1,
 273  BOOT_MODE_RESCUE = 4,
 274 };
 275 
 288 typedef struct
 289 {
 290  int curr_device_mode;
 291  int hw_device_mode;
 292  int cert_tree_type;
 293 
 294 } SecinsDeviceModeInfo;
 295 
 308 typedef struct
 309 {
 310  int cause_of_death;
 311  int death_details;
 312  pid_t pid;
 313 } child_death_cert;
 314 
 315 
 319 #define SECINS_MAX_PATH 256
 320 
 325 #define SECINS_MAX_USERNAME_LEN 16
 326 #define SECINS_MAX_GROUPNAME_LEN 16
 327 
 344 typedef struct
 345 {
 346  int start_uid;
 347  int num_uids;
 348  int start_gid;
 349  int num_gids;
 350 } UID_GID_RANGE;
 351 
 352 # define HMAC_MAX_HMAC 32
 353 # define EVP_MAX_KEY 64
 354 
 367 typedef struct
 368 {
 369  unsigned char key[HMAC_MAX_HMAC];
 370  unsigned int keysize;
 371  int mode;
 372 } SYS_INFO_OS_HMAC_SHA256_tx;
 373 
 384 typedef struct
 385 {
 386  unsigned char hmac[HMAC_MAX_HMAC];
 387  unsigned int hmacsize;
 388 } SYS_INFO_OS_HMAC_SHA256_rx;
 389 
 390 #define SECINS_MAX_DAEMON_NAME 64
 391 
 401 typedef struct
 402 {
 403  char daemon[SECINS_MAX_DAEMON_NAME];
 404  int action;
 405 } SecinsDaemonAction;
 406 
 407 
 421 typedef struct
 422 {
 423  unsigned int inflags;
 424  int dlpathslength;
 425  char dlpaths[];
 426 } INST_DATA;
 427 
 428 
 464 SecinsPkgInfo *Secins_read_pkglist_entry(SecinsPkgInfo *pkginfo, int pkginfosize);
 465 
 466 
 474 void Secins_close_pkglist(void);
 475 
 476 
 507 SecinsBdlInfo *Secins_read_bdllist_entry(SecinsBdlInfo *bdlinfo, int bdlinfosize);
 508 
 509 
 517 void Secins_close_bdllist(void);
 518 
 519 
 530 int Secins_echo_test(char *echostr, int size, const char *str);
 531 
 532 
 543 int Secins_daemon_action(char *daemonstr, int action);
 544 
 545 
 558 int Secins_install_pkgs(int *reboot_reqd);
 559 
 560 
 574 int Secins_install_software(int *outflags, int inflags);
 575 
 576 
 604 int Secins_free_resources_install_software(const char *dlfilepath, int inflags);
 605 
 637 int Secins_install_software_extended(const char **dlfilepaths, int nbdlfiles, int inflags);
 638 
 665 int Secins_precheck_software(const char **dlfilepaths, int nbdlfiles, int *outflags, int inflags);
 666 
 679 int Secins_match_pkg_user(const char *path, const char *username);
 680 
 689 int Secins_install_json_tr34_key_payload(const char *json_str);
 690 
 691 
 692 #define CONTAINER_MAX_NAME_SIZE 64
 693 
 697 typedef struct
 698 {
 699  char bundle_name[CONTAINER_MAX_NAME_SIZE];
 700  char package_name[CONTAINER_MAX_NAME_SIZE];
 701 } SECINS_ERROR_INFO;
 702 
 703 
 713 void Secins_get_last_error_info(SECINS_ERROR_INFO *info);
 714 
 715 
 722 void Secins_clear_last_error_info(void);
 723 
 724 
 732 int Secins_reboot(void);
 733 
 734 
 735 
 745 int Secins_reboot_to_mode(enum boot_modes mode);
 746 
 747 
 758 int Secins_hmac_check(void);
 759 
 760 
 768 int Secins_poweroff(void);
 769 
 770 
 777 int Secins_abort_poweroff(void);
 778 
 779 
 786 int Secins_format_card(void);
 787 
 788 
 799 int Secins_start_app(const char *file);
 800 
 801 
 816 int Secins_start_user_apps(void);
 817 
 818 
 827 int Secins_start_sysmode(void);
 828 
 829 
 840 int Secins_disable_sysmode(void);
 841 
 842 
 852 int Secins_enable_sysmode(void);
 853 
 854 
 863 int Secins_get_dev_mode(int *dev_mode);
 864 
 865 
 876 int Secins_get_uid_gid_range(UID_GID_RANGE *range, int rangesize);
 877 
 878 
 890 int Secins_add_group(int gid, const char *groupname);
 891 
 892 
 905 int Secins_add_user(int uid, const char *username, int gid);
 906 
 907 
 920 int Secins_add_group_member(int gid, int uid);
 921 
 922 
 934 int Secins_remove_user(int uid);
 935 
 936 
 948 int Secins_remove_group(int gid);
 949 
 950 
 966 int Secins_start_app_uid(pid_t *app_pid, const char *cmdline, int uid, int gid);
 967 
 968 
 991 int Secins_exec_app_uid(pid_t *app_pid,
 992  char *argp[],
 993  char *envp[],
 994  int uid,
 995  int gid);
 996 
 997 
 1016 int Secins_signal_app(pid_t pid, int sig);
 1017 
 1033 int Secins_chown(const char *path, int uid, int gid);
 1034 
 1035 
 1049 int Secins_remove_bdl_entry(SecinsBdlInfo *bdlinfo);
 1050 
 1051 
 1061 int Secins_removeall_user(void);
 1062 
 1063 
 1081 int Secins_remove_file_bundle(const char *file, const char *pkgtype);
 1082 
 1083 
 1094 int Secins_remove_user_bundle(const char *bundlename);
 1095 
 1096 
 1105 const char *Secins_strerror(int err);
 1106 
 1107 
 1116 int Secins_secondary_share_gid(void);
 1117 
 1118 
 1129 int Secins_get_secondary_share_group(char *groupname, int namesize);
 1130 
 1131 
 1136 gid_t Secins_share_gid(void);
 1137 
 1138 
 1144 gid_t Secins_system_gid(void);
 1145 
 1146 
 1152 gid_t Secins_users_gid(void);
 1153 
 1154 
 1162 unsigned int Secins_user_app(void);
 1163 
 1164 
 1172 unsigned int Secins_sys_app(void);
 1173 
 1180 gid_t Secins_usrsys_gid(uid_t uid);
 1181 
 1182 
 1193 gid_t Secins_sysmode_share_gid(void);
 1194 
 1195 
 1207 gid_t Secins_config_file_share_gid(const char *configfile);
 1208 
 1209 
 1231 int Secins_start_app_argv(pid_t *app_pid,
 1232  char *argp[],
 1233  char *envp[],
 1234  int (*cb)(child_death_cert cert, void *arg),
 1235  void *arg);
 1236 
 1237 
 1252 int Secins_kill_app_pid(pid_t app_pid, int sig, int *status);
 1253 
 1254 
 1263 int Secins_delete_all_users(void);
 1264 
 1265 
 1281 int Secins_hmac_sha256(uint8_t* hash, int* hash_size, uint8_t* keyin, int keyinsz, int mode);
 1282 
 1283 
 1291 int Secins_block_on_sysmode_button(void);
 1292 
 1293 
 1303 int Secins_get_reboot_hours(int *hours, int rpc_timeout);
 1304 
 1305 
 1315 int Secins_get_json_lowlayer_digests(char **json_str_buf);
 1316 
 1329 int Secins_get_install_status(char **json_str_buf);
 1330 
 1351 int Secins_get_device_mode_info(SecinsDeviceModeInfo *device_mode_info);
 1352 
 1362 int Secins_get_slp_tainted_status(int * tainted);
 1363 
 1364 
 1365 int Secins_add_cert(const char *certfile);
 1366 
 1367 int Secins_app_dev_convert(const char *token_file,
 1368  const char *token_sig,
 1369  const char *cert_dir);
 1370 int Secins_ExecuteToken(const char *token,
 1371  const char *token_signature,
 1372  const char *token_type,
 1373  int options);
 1374 
 1375 #ifdef __cplusplus
 1376 }
 1377 #endif
 1378 
 1379 #endif
```
