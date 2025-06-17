---
title: vossecins/libsecins.h

---

# vossecins/libsecins.h



## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[SecinsDeviceModeInfo](struct_secins_device_mode_info.md)** <br>Device run mode information.  |
| struct | **[child_death_cert](structchild__death__cert.md)** <br>Application termination record.  |
| struct | **[UID_GID_RANGE](struct_u_i_d___g_i_d___r_a_n_g_e.md)** <br>User/Group ID range.  |
| struct | **[SYS_INFO_OS_HMAC_SHA256_tx](struct_s_y_s___i_n_f_o___o_s___h_m_a_c___s_h_a256__tx.md)** <br>Input data for hashing.  |
| struct | **[SYS_INFO_OS_HMAC_SHA256_rx](struct_s_y_s___i_n_f_o___o_s___h_m_a_c___s_h_a256__rx.md)** <br>Data received from hashing.  |
| struct | **[SecinsDaemonAction](struct_secins_daemon_action.md)** <br>Daemon name and action to perform.  |
| struct | **[INST_DATA](struct_i_n_s_t___d_a_t_a.md)** <br>Data to install a list of dl files.  |
| struct | **[SECINS_ERROR_INFO](struct_s_e_c_i_n_s___e_r_r_o_r___i_n_f_o.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[boot_modes](libsecins_8h.md#enum-boot-modes)** { BOOT_MODE_NA = -1, BOOT_MODE_FLASH = 1, BOOT_MODE_RESCUE = 4} |

## Functions

|                | Name           |
| -------------- | -------------- |
| SecinsPkgInfo * | **[Secins_read_pkglist_entry](libsecins_8h.md#function-secins-read-pkglist-entry)**(SecinsPkgInfo * pkginfo, int pkginfosize) |
| void | **[Secins_close_pkglist](libsecins_8h.md#function-secins-close-pkglist)**(void ) |
| SecinsBdlInfo * | **[Secins_read_bdllist_entry](libsecins_8h.md#function-secins-read-bdllist-entry)**(SecinsBdlInfo * bdlinfo, int bdlinfosize) |
| void | **[Secins_close_bdllist](libsecins_8h.md#function-secins-close-bdllist)**(void ) |
| int | **[Secins_echo_test](libsecins_8h.md#function-secins-echo-test)**(char * echostr, int size, const char * str) |
| int | **[Secins_daemon_action](libsecins_8h.md#function-secins-daemon-action)**(char * daemonstr, int action) |
| int | **[Secins_install_pkgs](libsecins_8h.md#function-secins-install-pkgs)**(int * reboot_reqd) |
| int | **[Secins_install_software](libsecins_8h.md#function-secins-install-software)**(int * outflags, int inflags) |
| int | **[Secins_free_resources_install_software](libsecins_8h.md#function-secins-free-resources-install-software)**(const char * dlfilepath, int inflags) |
| int | **[Secins_install_software_extended](libsecins_8h.md#function-secins-install-software-extended)**(const char ** dlfilepaths, int nbdlfiles, int inflags) |
| int | **[Secins_precheck_software](libsecins_8h.md#function-secins-precheck-software)**(const char ** dlfilepaths, int nbdlfiles, int * outflags, int inflags) |
| int | **[Secins_match_pkg_user](libsecins_8h.md#function-secins-match-pkg-user)**(const char * path, const char * username) |
| int | **[Secins_install_json_tr34_key_payload](libsecins_8h.md#function-secins-install-json-tr34-key-payload)**(const char * json_str) |
| void | **[Secins_get_last_error_info](libsecins_8h.md#function-secins-get-last-error-info)**([SECINS_ERROR_INFO](struct_s_e_c_i_n_s___e_r_r_o_r___i_n_f_o.md) * info) |
| void | **[Secins_clear_last_error_info](libsecins_8h.md#function-secins-clear-last-error-info)**(void ) |
| int | **[Secins_reboot](libsecins_8h.md#function-secins-reboot)**(void ) |
| int | **[Secins_reboot_to_mode](libsecins_8h.md#function-secins-reboot-to-mode)**(enum [boot_modes](libsecins_8h.md#enum-boot-modes) mode) |
| int | **[Secins_hmac_check](libsecins_8h.md#function-secins-hmac-check)**(void ) |
| int | **[Secins_poweroff](libsecins_8h.md#function-secins-poweroff)**(void ) |
| int | **[Secins_abort_poweroff](libsecins_8h.md#function-secins-abort-poweroff)**(void ) |
| int | **[Secins_format_card](libsecins_8h.md#function-secins-format-card)**(void ) |
| int | **[Secins_start_app](libsecins_8h.md#function-secins-start-app)**(const char * file) |
| int | **[Secins_start_user_apps](libsecins_8h.md#function-secins-start-user-apps)**(void ) |
| int | **[Secins_start_sysmode](libsecins_8h.md#function-secins-start-sysmode)**(void ) |
| int | **[Secins_disable_sysmode](libsecins_8h.md#function-secins-disable-sysmode)**(void ) |
| int | **[Secins_enable_sysmode](libsecins_8h.md#function-secins-enable-sysmode)**(void ) |
| int | **[Secins_get_dev_mode](libsecins_8h.md#function-secins-get-dev-mode)**(int * dev_mode) |
| int | **[Secins_get_uid_gid_range](libsecins_8h.md#function-secins-get-uid-gid-range)**([UID_GID_RANGE](struct_u_i_d___g_i_d___r_a_n_g_e.md) * range, int rangesize) |
| int | **[Secins_add_group](libsecins_8h.md#function-secins-add-group)**(int gid, const char * groupname) |
| int | **[Secins_add_user](libsecins_8h.md#function-secins-add-user)**(int uid, const char * username, int gid) |
| int | **[Secins_add_group_member](libsecins_8h.md#function-secins-add-group-member)**(int gid, int uid) |
| int | **[Secins_remove_user](libsecins_8h.md#function-secins-remove-user)**(int uid) |
| int | **[Secins_remove_group](libsecins_8h.md#function-secins-remove-group)**(int gid) |
| int | **[Secins_start_app_uid](libsecins_8h.md#function-secins-start-app-uid)**(pid_t * app_pid, const char * cmdline, int uid, int gid) |
| int | **[Secins_exec_app_uid](libsecins_8h.md#function-secins-exec-app-uid)**(pid_t * app_pid, char * argp[], char * envp[], int uid, int gid) |
| int | **[Secins_signal_app](libsecins_8h.md#function-secins-signal-app)**(pid_t pid, int sig) |
| int | **[Secins_chown](libsecins_8h.md#function-secins-chown)**(const char * path, int uid, int gid) |
| int | **[Secins_remove_bdl_entry](libsecins_8h.md#function-secins-remove-bdl-entry)**(SecinsBdlInfo * bdlinfo) |
| int | **[Secins_removeall_user](libsecins_8h.md#function-secins-removeall-user)**(void ) |
| int | **[Secins_remove_file_bundle](libsecins_8h.md#function-secins-remove-file-bundle)**(const char * file, const char * pkgtype) |
| int | **[Secins_remove_user_bundle](libsecins_8h.md#function-secins-remove-user-bundle)**(const char * bundlename) |
| const char * | **[Secins_strerror](libsecins_8h.md#function-secins-strerror)**(int err) |
| int | **[Secins_secondary_share_gid](libsecins_8h.md#function-secins-secondary-share-gid)**(void ) |
| int | **[Secins_get_secondary_share_group](libsecins_8h.md#function-secins-get-secondary-share-group)**(char * groupname, int namesize) |
| gid_t | **[Secins_share_gid](libsecins_8h.md#function-secins-share-gid)**(void ) |
| gid_t | **[Secins_system_gid](libsecins_8h.md#function-secins-system-gid)**(void ) |
| gid_t | **[Secins_users_gid](libsecins_8h.md#function-secins-users-gid)**(void ) |
| unsigned int | **[Secins_user_app](libsecins_8h.md#function-secins-user-app)**(void ) |
| unsigned int | **[Secins_sys_app](libsecins_8h.md#function-secins-sys-app)**(void ) |
| gid_t | **[Secins_usrsys_gid](libsecins_8h.md#function-secins-usrsys-gid)**(uid_t uid) |
| gid_t | **[Secins_sysmode_share_gid](libsecins_8h.md#function-secins-sysmode-share-gid)**(void ) |
| gid_t | **[Secins_config_file_share_gid](libsecins_8h.md#function-secins-config-file-share-gid)**(const char * configfile) |
| int | **[Secins_start_app_argv](libsecins_8h.md#function-secins-start-app-argv)**(pid_t * app_pid, char * argp[], char * envp[], int(*)([child_death_cert](structchild__death__cert.md) cert, void *arg) cb, void * arg) |
| int | **[Secins_kill_app_pid](libsecins_8h.md#function-secins-kill-app-pid)**(pid_t app_pid, int sig, int * status) |
| int | **[Secins_delete_all_users](libsecins_8h.md#function-secins-delete-all-users)**(void ) |
| int | **[Secins_hmac_sha256](libsecins_8h.md#function-secins-hmac-sha256)**(uint8_t * hash, int * hash_size, uint8_t * keyin, int keyinsz, int mode) |
| int | **[Secins_block_on_sysmode_button](libsecins_8h.md#function-secins-block-on-sysmode-button)**(void ) |
| int | **[Secins_get_reboot_hours](libsecins_8h.md#function-secins-get-reboot-hours)**(int * hours, int rpc_timeout) |
| int | **[Secins_get_json_lowlayer_digests](libsecins_8h.md#function-secins-get-json-lowlayer-digests)**(char ** json_str_buf) |
| int | **[Secins_get_install_status](libsecins_8h.md#function-secins-get-install-status)**(char ** json_str_buf) |
| int | **[Secins_get_device_mode_info](libsecins_8h.md#function-secins-get-device-mode-info)**([SecinsDeviceModeInfo](struct_secins_device_mode_info.md) * device_mode_info) |
| int | **[Secins_get_slp_tainted_status](libsecins_8h.md#function-secins-get-slp-tainted-status)**(int * tainted) |
| int | **[Secins_add_cert](libsecins_8h.md#function-secins-add-cert)**(const char * certfile) |
| int | **[Secins_app_dev_convert](libsecins_8h.md#function-secins-app-dev-convert)**(const char * token_file, const char * token_sig, const char * cert_dir) |
| int | **[Secins_ExecuteToken](libsecins_8h.md#function-secins-executetoken)**(const char * token, const char * token_signature, const char * token_type, int options) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[SECINS_REBOOT_REQD_BIT](libsecins_8h.md#define-secins-reboot-reqd-bit)**  |
|  | **[SECINS_RESTART_APPS_REQD_BIT](libsecins_8h.md#define-secins-restart-apps-reqd-bit)**  |
|  | **[NORMALLY_TERMINATED](libsecins_8h.md#define-normally-terminated)**  |
|  | **[KILLED_BY_SIGNAL](libsecins_8h.md#define-killed-by-signal)**  |
|  | **[UNKOWN_CAUSE_OF_DEATH](libsecins_8h.md#define-unkown-cause-of-death)**  |
|  | **[SECINS_MAX_PATH](libsecins_8h.md#define-secins-max-path)**  |
|  | **[SECINS_MAX_USERNAME_LEN](libsecins_8h.md#define-secins-max-username-len)**  |
|  | **[SECINS_MAX_GROUPNAME_LEN](libsecins_8h.md#define-secins-max-groupname-len)**  |
|  | **[ERROR_SECINS](libsecins_8h.md#define-error-secins)**  |
|  | **[ERROR_SECINS_NO_MEMORY](libsecins_8h.md#define-error-secins-no-memory)**  |
|  | **[ERROR_SECINS_MKDIR](libsecins_8h.md#define-error-secins-mkdir)**  |
|  | **[ERROR_SECINS_FILE_AUTH](libsecins_8h.md#define-error-secins-file-auth)**  |
|  | **[ERROR_SECINS_MOUNT_RFS](libsecins_8h.md#define-error-secins-mount-rfs)**  |
|  | **[ERROR_SECINS_INVALID_INIT_FILE](libsecins_8h.md#define-error-secins-invalid-init-file)**  |
|  | **[ERROR_SECINS_PATHNAME_TOO_LONG](libsecins_8h.md#define-error-secins-pathname-too-long)**  |
|  | **[ERROR_SECINS_CHROOT](libsecins_8h.md#define-error-secins-chroot)**  |
|  | **[ERROR_SECINS_EXEC_INIT](libsecins_8h.md#define-error-secins-exec-init)**  |
|  | **[ERROR_SECINS_OPENDIR](libsecins_8h.md#define-error-secins-opendir)**  |
|  | **[ERROR_SECINS_RENAME_DIR](libsecins_8h.md#define-error-secins-rename-dir)**  |
|  | **[ERROR_SECINS_CHMOD](libsecins_8h.md#define-error-secins-chmod)**  |
|  | **[ERROR_SECINS_CHOWN](libsecins_8h.md#define-error-secins-chown)**  |
|  | **[ERROR_SECINS_FILE_CREATE](libsecins_8h.md#define-error-secins-file-create)**  |
|  | **[ERROR_SECINS_FILE_OPEN](libsecins_8h.md#define-error-secins-file-open)**  |
|  | **[ERROR_SECINS_FILE_WRITE](libsecins_8h.md#define-error-secins-file-write)**  |
|  | **[ERROR_SECINS_NO_SIG](libsecins_8h.md#define-error-secins-no-sig)**  |
|  | **[ERROR_SECINS_NO_PKG](libsecins_8h.md#define-error-secins-no-pkg)**  |
|  | **[ERROR_SECINS_INVALID_FILENAME](libsecins_8h.md#define-error-secins-invalid-filename)**  |
|  | **[ERROR_SECINS_INVALID_INSTALL](libsecins_8h.md#define-error-secins-invalid-install)**  |
|  | **[ERROR_SECINS_INVALID_INI_SECTION](libsecins_8h.md#define-error-secins-invalid-ini-section)**  |
|  | **[ERROR_SECINS_MKNOD](libsecins_8h.md#define-error-secins-mknod)**  |
|  | **[ERROR_SECINS_INVALID_INI_PROPERTY](libsecins_8h.md#define-error-secins-invalid-ini-property)**  |
|  | **[ERROR_SECINS_NO_CONTROL_FILE](libsecins_8h.md#define-error-secins-no-control-file)**  |
|  | **[ERROR_SECINS_INVALID_CONTROL_FILE](libsecins_8h.md#define-error-secins-invalid-control-file)**  |
|  | **[ERROR_SECINS_CREATE_CONTROL_FILE](libsecins_8h.md#define-error-secins-create-control-file)**  |
|  | **[ERROR_SECINS_OLD_PKG_VERSION](libsecins_8h.md#define-error-secins-old-pkg-version)**  |
|  | **[ERROR_SECINS_INVALID_PKG_TYPE](libsecins_8h.md#define-error-secins-invalid-pkg-type)**  |
|  | **[ERROR_SECINS_EXTRACT_PKG_CONTROL](libsecins_8h.md#define-error-secins-extract-pkg-control)**  |
|  | **[ERROR_SECINS_EXTRACT_PKG](libsecins_8h.md#define-error-secins-extract-pkg)**  |
|  | **[ERROR_SECINS_INVALID_PKG](libsecins_8h.md#define-error-secins-invalid-pkg)**  |
|  | **[ERROR_SECINS_PKG_LIST](libsecins_8h.md#define-error-secins-pkg-list)**  |
|  | **[ERROR_SECINS_PKG_FILENAME_TOO_LONG](libsecins_8h.md#define-error-secins-pkg-filename-too-long)**  |
|  | **[ERROR_SECINS_INSTALL_CONTROL_FILE](libsecins_8h.md#define-error-secins-install-control-file)**  |
|  | **[ERROR_SECINS_INSTALL_PKG](libsecins_8h.md#define-error-secins-install-pkg)**  |
|  | **[ERROR_SECINS_INSTALL_SIG](libsecins_8h.md#define-error-secins-install-sig)**  |
|  | **[ERROR_SECINS_PKG_NOT_FOUND](libsecins_8h.md#define-error-secins-pkg-not-found)**  |
|  | **[ERROR_SECINS_ADD_GROUP](libsecins_8h.md#define-error-secins-add-group)**  |
|  | **[ERROR_SECINS_ADD_USER](libsecins_8h.md#define-error-secins-add-user)**  |
|  | **[ERROR_SECINS_ADD_SHADOW](libsecins_8h.md#define-error-secins-add-shadow)**  |
|  | **[ERROR_SECINS_GET_USER](libsecins_8h.md#define-error-secins-get-user)**  |
|  | **[ERROR_SECINS_GET_GROUP](libsecins_8h.md#define-error-secins-get-group)**  |
|  | **[ERROR_SECINS_PROCESS_FORK](libsecins_8h.md#define-error-secins-process-fork)**  |
|  | **[ERROR_SECINS_CHECK_GRSEC](libsecins_8h.md#define-error-secins-check-grsec)**  |
|  | **[ERROR_SECINS_START_GRSEC](libsecins_8h.md#define-error-secins-start-grsec)**  |
|  | **[ERROR_SECINS_FORK](libsecins_8h.md#define-error-secins-fork)**  |
|  | **[ERROR_SECINS_GET_RESOURCE](libsecins_8h.md#define-error-secins-get-resource)**  |
|  | **[ERROR_SECINS_SETSID](libsecins_8h.md#define-error-secins-setsid)**  |
|  | **[ERROR_SECINS_START_LINE_TOO_LONG](libsecins_8h.md#define-error-secins-start-line-too-long)**  |
|  | **[ERROR_SECINS_START_LINE_INVALID](libsecins_8h.md#define-error-secins-start-line-invalid)**  |
|  | **[ERROR_SECINS_START_ENTRY_UNKNOWN](libsecins_8h.md#define-error-secins-start-entry-unknown)**  |
|  | **[ERROR_SECINS_EXEC_APP](libsecins_8h.md#define-error-secins-exec-app)**  |
|  | **[ERROR_SECINS_MODE_APP](libsecins_8h.md#define-error-secins-mode-app)**  |
|  | **[ERROR_SECINS_SYMLINK](libsecins_8h.md#define-error-secins-symlink)**  |
|  | **[ERROR_SECINS_INVALID_INSTALL_FILE](libsecins_8h.md#define-error-secins-invalid-install-file)**  |
|  | **[ERROR_SECINS_EXTRACT_INSTALL_FILE](libsecins_8h.md#define-error-secins-extract-install-file)**  |
|  | **[ERROR_SECINS_INVALID_PKG_FORMAT](libsecins_8h.md#define-error-secins-invalid-pkg-format)**  |
|  | **[ERROR_SECINS_AUTH_GID](libsecins_8h.md#define-error-secins-auth-gid)**  |
|  | **[ERROR_SECINS_ADD_CERT](libsecins_8h.md#define-error-secins-add-cert)**  |
|  | **[ERROR_SECINS_PATCH_VERSION](libsecins_8h.md#define-error-secins-patch-version)**  |
|  | **[ERROR_SECINS_PATCH](libsecins_8h.md#define-error-secins-patch)**  |
|  | **[ERROR_SECINS_START_SVCSEC](libsecins_8h.md#define-error-secins-start-svcsec)**  |
|  | **[ERROR_SECINS_INVALID_CERT](libsecins_8h.md#define-error-secins-invalid-cert)**  |
|  | **[ERROR_SECINS_PUT_ENV](libsecins_8h.md#define-error-secins-put-env)**  |
|  | **[ERROR_SECINS_SET_USER](libsecins_8h.md#define-error-secins-set-user)**  |
|  | **[ERROR_SECINS_INVALID_PKG_CATEGORY](libsecins_8h.md#define-error-secins-invalid-pkg-category)**  |
|  | **[ERROR_SECINS_INVALID_CMD](libsecins_8h.md#define-error-secins-invalid-cmd)**  |
|  | **[ERROR_SECINS_INVALID_BUNDLE_FILE](libsecins_8h.md#define-error-secins-invalid-bundle-file)**  |
|  | **[ERROR_SECINS_EXTRACT_BUNDLE_CONTROL](libsecins_8h.md#define-error-secins-extract-bundle-control)**  |
|  | **[ERROR_SECINS_INVALID_BUNDLE_USER](libsecins_8h.md#define-error-secins-invalid-bundle-user)**  |
|  | **[ERROR_SECINS_INVALID_PKG_USER](libsecins_8h.md#define-error-secins-invalid-pkg-user)**  |
|  | **[ERROR_SECINS_NO_BUNDLE](libsecins_8h.md#define-error-secins-no-bundle)**  |
|  | **[ERROR_SECINS_OPEN_SOCKET](libsecins_8h.md#define-error-secins-open-socket)**  |
|  | **[ERROR_SECINS_BIND_FAILURE](libsecins_8h.md#define-error-secins-bind-failure)**  |
|  | **[ERROR_SECINS_UNKNOWN_MSG](libsecins_8h.md#define-error-secins-unknown-msg)**  |
|  | **[ERROR_SECINS_MSG_SND](libsecins_8h.md#define-error-secins-msg-snd)**  |
|  | **[ERROR_SECINS_MSG_RCV](libsecins_8h.md#define-error-secins-msg-rcv)**  |
|  | **[ERROR_SECINS_MSG_SIZE](libsecins_8h.md#define-error-secins-msg-size)**  |
|  | **[ERROR_SECINS_RESP_SIZE](libsecins_8h.md#define-error-secins-resp-size)**  |
|  | **[ERROR_SECINS_INVALID_RESP](libsecins_8h.md#define-error-secins-invalid-resp)**  |
|  | **[ERROR_SECINS_FILE_READ](libsecins_8h.md#define-error-secins-file-read)**  |
|  | **[ERROR_SECINS_FILE_RENAME](libsecins_8h.md#define-error-secins-file-rename)**  |
|  | **[ERROR_SECINS_USER_APP_START](libsecins_8h.md#define-error-secins-user-app-start)**  |
|  | **[ERROR_SECINS_GET_CWD](libsecins_8h.md#define-error-secins-get-cwd)**  |
|  | **[ERROR_SECINS_INVALID_PARAM](libsecins_8h.md#define-error-secins-invalid-param)**  |
|  | **[ERROR_SECINS_NOT_ALLOWED](libsecins_8h.md#define-error-secins-not-allowed)**  |
|  | **[ERROR_SECINS_SYSMODE_START](libsecins_8h.md#define-error-secins-sysmode-start)**  |
|  | **[ERROR_SECINS_INVALID_PKGLIST](libsecins_8h.md#define-error-secins-invalid-pkglist)**  |
|  | **[ERROR_SECINS_SOCK_LISTEN](libsecins_8h.md#define-error-secins-sock-listen)**  |
|  | **[ERROR_SECINS_CONNECT_FAIL](libsecins_8h.md#define-error-secins-connect-fail)**  |
|  | **[ERROR_SECINS_PATCH_APPLIED](libsecins_8h.md#define-error-secins-patch-applied)**  |
|  | **[ERROR_SECINS_RELOAD_GRSEC](libsecins_8h.md#define-error-secins-reload-grsec)**  |
|  | **[ERROR_SECINS_CREATE_GRSEC_FILE](libsecins_8h.md#define-error-secins-create-grsec-file)**  |
|  | **[ERROR_SECINS_GRSEC_SUBJECT](libsecins_8h.md#define-error-secins-grsec-subject)**  |
|  | **[ERROR_SECINS_INVALID_POLICY_FILE](libsecins_8h.md#define-error-secins-invalid-policy-file)**  |
|  | **[ERROR_SECINS_INVALID_OBJECT](libsecins_8h.md#define-error-secins-invalid-object)**  |
|  | **[ERROR_SECINS_INVALID_OBJECT_MODE](libsecins_8h.md#define-error-secins-invalid-object-mode)**  |
|  | **[ERROR_SECINS_NO_POLICY_FILE](libsecins_8h.md#define-error-secins-no-policy-file)**  |
|  | **[ERROR_SECINS_INVALID_CAPABILITY](libsecins_8h.md#define-error-secins-invalid-capability)**  |
|  | **[ERROR_SECINS_OBJECT_NOT_HIDDEN](libsecins_8h.md#define-error-secins-object-not-hidden)**  |
|  | **[ERROR_SECINS_OBJECT_NOT_FOUND](libsecins_8h.md#define-error-secins-object-not-found)**  |
|  | **[ERROR_SECINS_FILE_CAPS](libsecins_8h.md#define-error-secins-file-caps)**  |
|  | **[ERROR_SECINS_SUBJECT_MODE](libsecins_8h.md#define-error-secins-subject-mode)**  |
|  | **[ERROR_SECINS_REMOVE_USER](libsecins_8h.md#define-error-secins-remove-user)**  |
|  | **[ERROR_SECINS_REMOVE_GROUP](libsecins_8h.md#define-error-secins-remove-group)**  |
|  | **[ERROR_SECINS_PID_NOT_FOUND](libsecins_8h.md#define-error-secins-pid-not-found)**  |
|  | **[ERROR_SECINS_SIGNAL_FAIL](libsecins_8h.md#define-error-secins-signal-fail)**  |
|  | **[ERROR_SECINS_LOAD_VSS](libsecins_8h.md#define-error-secins-load-vss)**  |
|  | **[ERROR_SECINS_UNSIGNED_PKG_USER](libsecins_8h.md#define-error-secins-unsigned-pkg-user)**  |
|  | **[ERROR_SECINS_PATCH_AUTH](libsecins_8h.md#define-error-secins-patch-auth)**  |
|  | **[ERROR_SECINS_EXTRACT_PATCH_CONTROL](libsecins_8h.md#define-error-secins-extract-patch-control)**  |
|  | **[ERROR_SECINS_GRSEC_ENTRY_UNKNOWN](libsecins_8h.md#define-error-secins-grsec-entry-unknown)**  |
|  | **[ERROR_SECINS_FILE_DELETE](libsecins_8h.md#define-error-secins-file-delete)**  |
|  | **[ERROR_SECINS_NO_SRC_PKG](libsecins_8h.md#define-error-secins-no-src-pkg)**  |
|  | **[ERROR_SECINS_NO_SRC_BUNDLE](libsecins_8h.md#define-error-secins-no-src-bundle)**  |
|  | **[ERROR_SECINS_BUNDLE_VERSION](libsecins_8h.md#define-error-secins-bundle-version)**  |
|  | **[ERROR_SECINS_BUNDLE_SRCVERSION](libsecins_8h.md#define-error-secins-bundle-srcversion)**  |
|  | **[ERROR_SECINS_WRONG_BUNDLE](libsecins_8h.md#define-error-secins-wrong-bundle)**  |
|  | **[ERROR_SECINS_TOKEN_FAIL](libsecins_8h.md#define-error-secins-token-fail)**  |
|  | **[ERROR_SECINS_BUNDLE_CHANGED](libsecins_8h.md#define-error-secins-bundle-changed)**  |
|  | **[ERROR_SECINS_BUNDLE_NOT_CHANGED](libsecins_8h.md#define-error-secins-bundle-not-changed)**  |
|  | **[ERROR_SECINS_MANU_MODE](libsecins_8h.md#define-error-secins-manu-mode)**  |
|  | **[ERROR_SECINS_MANU_MODE_REQD](libsecins_8h.md#define-error-secins-manu-mode-reqd)**  |
|  | **[ERROR_SECINS_INVALID_UMASK](libsecins_8h.md#define-error-secins-invalid-umask)**  |
|  | **[ERROR_SECINS_FILE_SEEK](libsecins_8h.md#define-error-secins-file-seek)**  |
|  | **[ERROR_SECINS_MODULE_NOT_FOUND](libsecins_8h.md#define-error-secins-module-not-found)**  |
|  | **[ERROR_SECINS_INVALID_HMAC_CFG](libsecins_8h.md#define-error-secins-invalid-hmac-cfg)**  |
|  | **[ERROR_SECINS_HMAC_SETUP](libsecins_8h.md#define-error-secins-hmac-setup)**  |
|  | **[ERROR_SECINS_HMAC_CHECK](libsecins_8h.md#define-error-secins-hmac-check)**  |
|  | **[ERROR_SECINS_CERT_NOT_FOUND](libsecins_8h.md#define-error-secins-cert-not-found)**  |
|  | **[ERROR_SECINS_BUNDLE_NOT_FOUND](libsecins_8h.md#define-error-secins-bundle-not-found)**  |
|  | **[ERROR_SECINS_TARGET_ERROR](libsecins_8h.md#define-error-secins-target-error)**  |
|  | **[ERROR_SECINS_REG_CALLBACK](libsecins_8h.md#define-error-secins-reg-callback)**  |
|  | **[ERROR_SECINS_SET_RESOURCE](libsecins_8h.md#define-error-secins-set-resource)**  |
|  | **[ERROR_SECINS_PATCHLIST_FILE](libsecins_8h.md#define-error-secins-patchlist-file)**  |
|  | **[ERROR_SECINS_SHA_COMPUTE](libsecins_8h.md#define-error-secins-sha-compute)**  |
|  | **[ERROR_SECINS_SHA_MISMATCH](libsecins_8h.md#define-error-secins-sha-mismatch)**  |
|  | **[ERROR_SECINS_COMPRESS_PKG](libsecins_8h.md#define-error-secins-compress-pkg)**  |
|  | **[ERROR_SECINS_FILE_COPY](libsecins_8h.md#define-error-secins-file-copy)**  |
|  | **[ERROR_SECINS_IS_APP_DEV](libsecins_8h.md#define-error-secins-is-app-dev)**  |
|  | **[ERROR_SECINS_APP_DEV_TOKEN](libsecins_8h.md#define-error-secins-app-dev-token)**  |
|  | **[ERROR_SECINS_APP_DEV_CERTS](libsecins_8h.md#define-error-secins-app-dev-certs)**  |
|  | **[ERROR_SECINS_DEL_CERTFILE](libsecins_8h.md#define-error-secins-del-certfile)**  |
|  | **[ERROR_SECINS_APP_DEV_SVID](libsecins_8h.md#define-error-secins-app-dev-svid)**  |
|  | **[ERROR_SECINS_SPARSE_PATCH](libsecins_8h.md#define-error-secins-sparse-patch)**  |
|  | **[ERROR_SECINS_HMAC_KEY_TOO_LONG](libsecins_8h.md#define-error-secins-hmac-key-too-long)**  |
|  | **[ERROR_SECINS_VER_NOT_SUPPORTED](libsecins_8h.md#define-error-secins-ver-not-supported)**  |
|  | **[ERROR_SECINS_NO_KEY_ELEMENT](libsecins_8h.md#define-error-secins-no-key-element)**  |
|  | **[ERROR_SECINS_NOT_SUPPORTED](libsecins_8h.md#define-error-secins-not-supported)**  |
|  | **[ERROR_SECINS_PARSING_ERROR](libsecins_8h.md#define-error-secins-parsing-error)**  |
|  | **[ERROR_SECINS_INVALID_CMS](libsecins_8h.md#define-error-secins-invalid-cms)**  |
|  | **[ERROR_SECINS_INSTALL_TR34JSON](libsecins_8h.md#define-error-secins-install-tr34json)**  |
|  | **[ERROR_SECINS_INVALID_RETVAL](libsecins_8h.md#define-error-secins-invalid-retval)**  |
|  | **[ERROR_SECINS_LOW_LAYER_INSTALL](libsecins_8h.md#define-error-secins-low-layer-install)**  |
|  | **[ERROR_SECINS_NO_SN_MATCH](libsecins_8h.md#define-error-secins-no-sn-match)**  |
|  | **[ERROR_SECINS_INSTALL_BUSY_SYSTEM](libsecins_8h.md#define-error-secins-install-busy-system)**  |
|  | **[ERROR_SECINS_DL_ERROR](libsecins_8h.md#define-error-secins-dl-error)**  |
|  | **[ERROR_SECINS_READ_LL_IMAGE](libsecins_8h.md#define-error-secins-read-ll-image)**  |
|  | **[ERROR_SECINS_FILE_TRUNCATE](libsecins_8h.md#define-error-secins-file-truncate)**  |
|  | **[ERROR_SECINS_FILE_MMAP](libsecins_8h.md#define-error-secins-file-mmap)**  |
|  | **[ERROR_SECINS_FILE_STAT](libsecins_8h.md#define-error-secins-file-stat)**  |
|  | **[ERROR_SECINS_INSTSTAT_FAIL](libsecins_8h.md#define-error-secins-inststat-fail)**  |
|  | **[ERROR_SECINS_CRITSEC_OP_FAILED](libsecins_8h.md#define-error-secins-critsec-op-failed)**  |
|  | **[ERROR_SECINS_VOS2_SIGNER_NOT_FOUND](libsecins_8h.md#define-error-secins-vos2-signer-not-found)**  |
|  | **[ERROR_SECINS_INVALID_DLLIST](libsecins_8h.md#define-error-secins-invalid-dllist)**  |
|  | **[ERROR_SECINS_DAEMON_START_FAILED](libsecins_8h.md#define-error-secins-daemon-start-failed)**  |
|  | **[ERROR_SECINS_DAEMON_STOP_FAILED](libsecins_8h.md#define-error-secins-daemon-stop-failed)**  |
|  | **[ERROR_SECINS_DAEMON_RESTART_FAILED](libsecins_8h.md#define-error-secins-daemon-restart-failed)**  |
|  | **[ERROR_SECINS_DAEMON_RELOAD_FAILED](libsecins_8h.md#define-error-secins-daemon-reload-failed)**  |
|  | **[ERROR_SECINS_NO_SPACE](libsecins_8h.md#define-error-secins-no-space)**  |
|  | **[ERROR_SECINS_PREINST](libsecins_8h.md#define-error-secins-preinst)**  |
|  | **[SECINS_BIT](libsecins_8h.md#define-secins-bit)**(n)  |
|  | **[MAX_PATH_FILE](libsecins_8h.md#define-max-path-file)**  |
|  | **[SYSMODE_BTN_SEM](libsecins_8h.md#define-sysmode-btn-sem)**  |
|  | **[SECINS_DEVICE_MODE_MANU](libsecins_8h.md#define-secins-device-mode-manu)**  |
|  | **[SECINS_DEVICE_MODE_PROD](libsecins_8h.md#define-secins-device-mode-prod)**  |
|  | **[SECINS_DEVICE_MODE_APPDEV](libsecins_8h.md#define-secins-device-mode-appdev)**  |
|  | **[SECINS_DEVICE_MODE_OSDEV](libsecins_8h.md#define-secins-device-mode-osdev)**  |
|  | **[SECINS_PROD_CERT_TREE](libsecins_8h.md#define-secins-prod-cert-tree)**  |
|  | **[SECINS_OSDEV_CERT_TREE](libsecins_8h.md#define-secins-osdev-cert-tree)**  |
|  | **[SECINS_APPDEV_CERT_TREE](libsecins_8h.md#define-secins-appdev-cert-tree)**  |
|  | **[SECINS_DAEMON_START](libsecins_8h.md#define-secins-daemon-start)**  |
|  | **[SECINS_DAEMON_STOP](libsecins_8h.md#define-secins-daemon-stop)**  |
|  | **[SECINS_DAEMON_RESTART](libsecins_8h.md#define-secins-daemon-restart)**  |
|  | **[SECINS_DAEMON_RELOAD](libsecins_8h.md#define-secins-daemon-reload)**  |
|  | **[HMAC_MAX_HMAC](libsecins_8h.md#define-hmac-max-hmac)**  |
|  | **[EVP_MAX_KEY](libsecins_8h.md#define-evp-max-key)**  |
|  | **[SECINS_MAX_DAEMON_NAME](libsecins_8h.md#define-secins-max-daemon-name)**  |
|  | **[CONTAINER_MAX_NAME_SIZE](libsecins_8h.md#define-container-max-name-size)**  |

## Types Documentation

### enum boot_modes

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| BOOT_MODE_NA | -1|   |
| BOOT_MODE_FLASH | 1|   |
| BOOT_MODE_RESCUE | 4|   |





## Functions Documentation

### function Secins_read_pkglist_entry

```cpp
SecinsPkgInfo * Secins_read_pkglist_entry(
    SecinsPkgInfo * pkginfo,
    int pkginfosize
)
```


**Parameters**: 

  * **pkginfo** - SecinsPkgInfo data structure containing package information 
  * **pkginfosize** - sizeof SecinsPkgInfo


**Return**: Struct SecinsPkgInfo - package informtion

Called recursively to retrieve the list of installed packages

Example: The following function will print the installed package versions. 

```cpp
static void print_pkg_versions(void)
{
     SecinsPkgInfo pkginfo;
     // Ensure we’re starting from the beginning of the list.
     Secins_close_pkglist();
     fprintf(stderr, "Package Versions\n");
     while (Secins_read_pkglist_entry(&pkginfo, sizeof pkginfo) != NULL)
     {
         fprintf(stderr,
             "%s %s %s %s %s %s %s %s\n",
             pkginfo.signer,
             pkginfo.user,
             pkginfo.name,
             pkginfo.version,
             pkginfo.type,
             pkginfo.bundlename,
             pkginfo.bundleversion,
             *pkginfo.bundledate ? pkginfo.bundledate : “-”);
     }
}
```



* NULL no more entries are available. 


### function Secins_close_pkglist

```cpp
void Secins_close_pkglist(
    void 
)
```


**Note**: This need only be called in the event of [Secins_read_pkglist_entry()](libsecins_8h.md#function-secins-read-pkglist-entry) not being called repeatedly until NULL is returned e.g. if the while loop in the example in the previous section was terminated prematurely. 

Close package list, opened by [Secins_read_pkglist_entry()](libsecins_8h.md#function-secins-read-pkglist-entry)


### function Secins_read_bdllist_entry

```cpp
SecinsBdlInfo * Secins_read_bdllist_entry(
    SecinsBdlInfo * bdlinfo,
    int bdlinfosize
)
```


**Parameters**: 

  * **bdlinfo** - SecinsBdlInfo data structure containing package information 
  * **bdlinfosize** - Sizeof SecinsBdlInfo


**Return**: Struct SecinsBdlInfo - Bundle informtion

Called recursively to retrieve the list of installed bundles

Example: The following function will print the installed bundle information 

```cpp
static void print_bundlelist(void)
{
     SecinsBdlInfo bdlinfo;
     while (Secins_read_bdllist_entry(&bdlinfo, sizeof bdlinfo))
     {
         fprintf(stderr,
             "%s %s %s %s %s %s\n",
             bdlinfo.name,
             bdlinfo.version,
             bdlinfo.user,
             bdlinfo.category,
             *bdlinfo.date != 0 ? bdlinfo.date : “-”,
             *bdlinfo.option != 0 ? bdlinfo.option : “-”);
     }
}
```



* NULL no more entries are available. 


### function Secins_close_bdllist

```cpp
void Secins_close_bdllist(
    void 
)
```


**Note**: This need only be called in the event of [Secins_read_bdllist_entry()](libsecins_8h.md#function-secins-read-bdllist-entry) not being called repeatedly until NULL is returned e.g. if the while loop in the example in the previous section was terminated prematurely. 

Close bundle list, opened by [Secins_read_bdllist_entry()](libsecins_8h.md#function-secins-read-bdllist-entry)


### function Secins_echo_test

```cpp
int Secins_echo_test(
    char * echostr,
    int size,
    const char * str
)
```


**Parameters**: 

  * **echostr** - Responce buffer, should be big enough to hold `str`
  * **size** - Size of echostr 
  * **str** - Arbitrary test string


**Return**: 0 if passed test or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

Send test string `str` and get it back in `echostr`


### function Secins_daemon_action

```cpp
int Secins_daemon_action(
    char * daemonstr,
    int action
)
```


**Parameters**: 

  * **daemonstr** - Daemon name 
  * **action** - one of the actions SECINS_DAEMON_XXX (START/STOP/...)


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

Request action on daemon (start, stop, etc.) This API must not be used by applications directly.


### function Secins_install_pkgs

```cpp
int Secins_install_pkgs(
    int * reboot_reqd
)
```


**Parameters**: 

  * ***reboot_reqd** - if not NULL, the secure installer will set *reboot_reqd to 1 if a reboot is required after installation is complete (e.g. if an OS package has been installed), otherwise it will set it to 0.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Warning**: This API is deprecated and has been superseded by [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended).

Installs packages from download files downloaded to /mnt/flash/install/dl


### function Secins_install_software

```cpp
int Secins_install_software(
    int * outflags,
    int inflags
)
```


**Parameters**: 

  * ***outflags** - returns a bit-mapped integer. Possible values:

* [SECINS_REBOOT_REQD_BIT](libsecins_8h.md#define-secins-reboot-reqd-bit),
* [SECINS_RESTART_APPS_REQD_BIT](libsecins_8h.md#define-secins-restart-apps-reqd-bit)
  * **inflags** - not used and should be set to 0.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Warning**: This API is deprecated and has been superseded by [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended).

Installs packages from download files downloaded to /mnt/flash/install/dl


### function Secins_free_resources_install_software

```cpp
int Secins_free_resources_install_software(
    const char * dlfilepath,
    int inflags
)
```


**Parameters**: 

  * ***dlfilepath** - full path of the dl file to be installed.

* caller could place the dl file in their falsh or
  * **inflags** - flags for installation.

* send a bit-mapped integer. Values allowed
* SECINS_FORCE_INSTALL
* SECINS_FORCE_RESTART_APPS
* SECINS_FORCE_REBOOT


**Return**: One of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on initial failure before starting the apps. or nothing as the caller is killed and restarted. 

**Note**: 

  * Expect that the caller of this API is killed during installation. Depending on what action is needed (reboot or restart apps) to extract the pkgs into the filesystem, SI will do the needful. The caller upon reboot/restart should call the new status API to find out the status of the installation.
  * It is recommended to set the inflags to ensure install process is started as soon as this API is called.


**Warning**: This API is deprecated and has been superseded by [Secins_install_software_extended()](libsecins_8h.md#function-secins-install-software-extended).

Installs packages from the filepath passed in the function



* in the usual location of /mnt/flash/install/dl.


### function Secins_install_software_extended

```cpp
int Secins_install_software_extended(
    const char ** dlfilepaths,
    int nbdlfiles,
    int inflags
)
```


**Parameters**: 

  * ****dlfilepaths** - pointer to a list of dlfile full paths to be installed Recommendation: store dlfiles in flash storage
  * **nbdlfiles** - number of dlfile paths in the dlfilepaths list
  * **inflags** - flags for installation: bit-mapped integer.

* send a bit-mapped integer. Values allowed
* SECINS_FORCE_INSTALL
* SECINS_FORCE_RESTART_APPS
* SECINS_FORCE_REBOOT


**Return**: One of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on initial failure before starting the apps. or nothing as the caller is killed and restarted. 

**Note**: This allows to install dlfiles without having to copy the dlfile in ram. This API consumes less resources and is therefore recommended over other installation APIs.

Installs one or more dlfiles from the filepath list passed to the function


If dlfile is located in:

* “flash” filesystem (Recommended), it will be extracted 'in-place' (ie. progressively consumed till deleted).
* '/mnt/flash/install/dl' (legacy), it will be extracted then deleted
* any other places, it will be extracted

To free resources during installation - SIGTERM will be sent to user applications and non-crucial system applications. SIGKILL will be sent to the apps after a timeout. If reboot/restart is required to finish installation, it will be performed. The caller upon reboot/restart should call the new status API to find out the status of the installation. When providing several dlfiles, SI guarantees reliable rollback only for the first dlfile install failure.


### function Secins_precheck_software

```cpp
int Secins_precheck_software(
    const char ** dlfilepaths,
    int nbdlfiles,
    int * outflags,
    int inflags
)
```


**Parameters**: 

  * ****dlfilepaths** - pointer to a list of dlfile full paths to be pre-checked
  * **nbdlfiles** - number of dlfile paths in the dlfilepaths list
  * ***outflags** - returns a bit-mapped integer. Possible values:

* [SECINS_REBOOT_REQD_BIT](libsecins_8h.md#define-secins-reboot-reqd-bit),
* [SECINS_RESTART_APPS_REQD_BIT](libsecins_8h.md#define-secins-restart-apps-reqd-bit)
  * **inflags** - not used and should be set to 0.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: This allows to perform a pre-check before launching an installation and give an advice on whether a reboot or restart applications will be performed when installation is started. However note that the complete checking of the dlfile will only be performed at installation.

Pre-checks one or more dlfiles from the filepath list passed to the function


Each dlfile is checked for:

* dl file valid archive
* contained bundles are valid archives and their signatures verified

This API does not extract dlfiles to any disk and performs the above checks on the fly in memory. This API timeout is 180 seconds. If pre-check is not finalized until then - error is returned.


### function Secins_match_pkg_user

```cpp
int Secins_match_pkg_user(
    const char * path,
    const char * username
)
```


**Parameters**: 

  * ***path** - dlfile full path
  * **username** - name of the user to check


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: This allows to ensure that dlfile packages belong to specified user. This API does not extract specified dlfile to any disk.

Check if dlfile has only packages of specified user


### function Secins_install_json_tr34_key_payload

```cpp
int Secins_install_json_tr34_key_payload(
    const char * json_str
)
```


**Parameters**: 

  * ***json_str** input string with TR-34 JSON Key Payload


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

This function performs key injection from TR-34 JSON Key Payload.


### function Secins_get_last_error_info

```cpp
void Secins_get_last_error_info(
    SECINS_ERROR_INFO * info
)
```


Get additional information about last recorded error.

Last error information is stored on a libsecins level, so it is unique for every libsecins library user. This information is updated on every Secure Installer call that ended with error (error code != 0). Last error information can be manually cleared with [Secins_clear_last_error_info()](libsecins_8h.md#function-secins-clear-last-error-info). 


### function Secins_clear_last_error_info

```cpp
void Secins_clear_last_error_info(
    void 
)
```


**Note**: For more detailed information about last recorded Secure Installed error info see [Secins_get_last_error_info()](libsecins_8h.md#function-secins-get-last-error-info). 

Clear information about last recorded Secure Installer error.


### function Secins_reboot

```cpp
int Secins_reboot(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

Reboot the device. This call first send SIGTERM to all user processes, followed by SIGKILL


### function Secins_reboot_to_mode

```cpp
int Secins_reboot_to_mode(
    enum boot_modes mode
)
```


**Parameters**: 

  * **mode** - Target boot mode. ( allowed values [boot_modes](libsecins_8h.md#enum-boot-modes) ).


**Return**: no return on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: Only root and sys (sys1, sys2, etc) may use this function.

Reboot device into special mode


### function Secins_hmac_check

```cpp
int Secins_hmac_check(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: This is the selftest that runs automatically every 24 hours.

**Warning**: This API is deprecated on Raptor

Performs the HMAC selftest on demand.


### function Secins_poweroff

```cpp
int Secins_poweroff(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

Power off the device. SIGTERM is first sent to all user processes, followed by SIGKILL


### function Secins_abort_poweroff

```cpp
int Secins_abort_poweroff(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

Abort secins's power off.


### function Secins_format_card

```cpp
int Secins_format_card(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

Format card


### function Secins_start_app

```cpp
int Secins_start_app(
    const char * file
)
```


**Parameters**: 

  * **file** - Executable to be started


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

Start user application.

To be used by a user application to start another user application.


### function Secins_start_user_apps

```cpp
int Secins_start_user_apps(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: This also re-generates the user home accounts (for usr1 .. usr16) from the installed user packages, so after installing package updates, this API must be called before those updates will take effect (assuming a reboot is not performed instead).

Start user applications (used by sysmode).

Will kill sysmode (sys4) processes before starting the usr1 – usr16 processes (remember that usr1 ... usr16 processes are killed when sysmode starts).


### function Secins_start_sysmode

```cpp
int Secins_start_sysmode(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise

**Note**: all user app processes (usr1 ... usr16) will be stopped before sysmode is started 

Starts sysmode.


### function Secins_disable_sysmode

```cpp
int Secins_disable_sysmode(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: Sysmode is enabled by default. If disabled using this API it will revert to enabled after a reboot.

Disables the sysmode stimulus (i.e. the 1-5-9 keypress combo or recessed button on some devices). Prevents launching of sysmode.


### function Secins_enable_sysmode

```cpp
int Secins_enable_sysmode(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: This is the default mode of operation.

Enables the sysmode stimulus (i.e. the 1-5-9 keypress combo or recessed button on some devices). Allows launching of sysmode


### function Secins_get_dev_mode

```cpp
int Secins_get_dev_mode(
    int * dev_mode
)
```


**Parameters**: 

  * **dev_mode** - Set to 1 if enabled, 0 otherwise


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

Check if development mode is enabled


### function Secins_get_uid_gid_range

```cpp
int Secins_get_uid_gid_range(
    UID_GID_RANGE * range,
    int rangesize
)
```


**Parameters**: 

  * **range** - [UID_GID_RANGE](struct_u_i_d___g_i_d___r_a_n_g_e.md) data structure containing the uid/gid range 
  * **rangesize** - Size of the [UID_GID_RANGE](struct_u_i_d___g_i_d___r_a_n_g_e.md) structure.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Get the range of users and groups assigned to a primary user.

All uids/gids in the API's that follow must be in the range returned here.


### function Secins_add_group

```cpp
int Secins_add_group(
    int gid,
    const char * groupname
)
```


**Parameters**: 

  * **gid** - The group id 
  * **groupname** - Group name ([SECINS_MAX_GROUPNAME_LEN](libsecins_8h.md#define-secins-max-groupname-len) chars max).


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Add a group

Only a primary user (usr1, usr2, etc) may use this function. The specified gid must be in range assigned to the primary user.


### function Secins_add_user

```cpp
int Secins_add_user(
    int uid,
    const char * username,
    int gid
)
```


**Parameters**: 

  * **uid** - The user id 
  * **username** - User name ([SECINS_MAX_USERNAME_LEN](libsecins_8h.md#define-secins-max-username-len) chars max). 
  * **gid** - Primary group for this user.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Add a user

Only a primary user (usr1, usr2, etc) may use this function. The specified uid and gid must be in range assigned to the primary user.


### function Secins_add_group_member

```cpp
int Secins_add_group_member(
    int gid,
    int uid
)
```


**Parameters**: 

  * **gid** - the group id to add to. 
  * **uid** - the user to be added to group gid.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Add user uid to group gid

Only a primary user (usr1, usr2, etc) may use this function. Both the user and group must already exist and must be in the range assigned to the primary user.


### function Secins_remove_user

```cpp
int Secins_remove_user(
    int uid
)
```


**Parameters**: 

  * **uid** - the user id.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Remove a user.

Only a primary user (usr1, usr2, etc) may use this function. The specified user must exist and must be in range assigned to the primary user.


### function Secins_remove_group

```cpp
int Secins_remove_group(
    int gid
)
```


**Parameters**: 

  * **gid** - the group id.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Remove a group.

Only a primary user (usr1, usr2, etc) may use this function. The specified group must exist and must be in range assigned to the primary user.


### function Secins_start_app_uid

```cpp
int Secins_start_app_uid(
    pid_t * app_pid,
    const char * cmdline,
    int uid,
    int gid
)
```


**Parameters**: 

  * **app_pid** - the process id of the application. 
  * **cmdline** - the command line to use to start the application. 
  * **uid** - the app runs with this user id. 
  * **gid** - the app runs with this group id.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Start an application (cmdline), with specified uid and gid.

Only a primary user (usr1, usr2, etc) may use this function. The specified user and group must exist and must be in range assigned to the primary user. The executable file specified in cmdline must be owned by the primary user.


### function Secins_exec_app_uid

```cpp
int Secins_exec_app_uid(
    pid_t * app_pid,
    char * argp[],
    char * envp[],
    int uid,
    int gid
)
```


**Parameters**: 

  * **app_pid** - the process id of the application. 
  * **argp** - array of argument strings, terminated by NULL ptr. 
  * **envp** - array of environment strings, terminated by NULL ptr. 
  * **uid** - the app runs with this user id. 
  * **gid** - the app runs with this group id.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

**Note**: Same as [Secins_start_app_uid()](libsecins_8h.md#function-secins-start-app-uid) except that the application to be started is specified in argv form.

Start an application, with specified uid and gid.


Only a primary user (usr1, usr2, etc) may use this function. The specified user and group must exist and must be in range assigned to the primary user. The executable file specified in argp[0] must be owned by the primary user. envp may be NULL if no environment strings required. Not all environment variables are allowed to be passed by users - they are filtered internally by whitelist and blacklist before execution and reset accordingly if required, see Secins [Appendix I: Install API guidelines]


### function Secins_signal_app

```cpp
int Secins_signal_app(
    pid_t pid,
    int sig
)
```


**Parameters**: 

  * **pid** - the process id. 
  * **sig** - Signal to send.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

**Note**: 

  * This API now has uses outside of the MagIC project.
  * Users usr1 .. usr16 may use this API to signal each other.
  * System applications may use this API to signal all other processes but may not send the non-maskable SIGKILL.


Send the signal sig to the process pid

The primary user may signal processes running as any of the users assigned to it. Other users may only signal the primary user.


### function Secins_chown

```cpp
int Secins_chown(
    const char * path,
    int uid,
    int gid
)
```


**Parameters**: 

  * **path** - pathname 
  * **uid** - the required owner. 
  * **gid** - the required group.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Change file ownership

Only a primary user (usr1, usr2, etc) may use this function. The target file must be owned by the primary user or one of the users assigned to it. Both the user and group must already exist and must be in the range assigned to the primary user.


### function Secins_remove_bdl_entry

```cpp
int Secins_remove_bdl_entry(
    SecinsBdlInfo * bdlinfo
)
```


**Parameters**: 

  * **bdlinfo** - specified bundle info


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Warning**: This API may only be used by system signed applications.

Removes the bundle specified in bdlinfo from the system.

The 'name' and 'user' fields must be supplied in bdlinfo, while the 'version' field is optional. If 'version' is specified then the bundle will only be removed if the installed version matches.


### function Secins_removeall_user

```cpp
int Secins_removeall_user(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: This can be used when a run-once type application is required.

Can be called by a user application to remove all installed bundles/packages for that user i.e. the application removes itself completely.


### function Secins_remove_file_bundle

```cpp
int Secins_remove_file_bundle(
    const char * file,
    const char * pkgtype
)
```


**Parameters**: 

  * **file** - file from bundle. 'file' must be owned by the caller. Only bundles for the calling user will be searched. 
  * **pkgtype** - package type. May be NULL, but if specified (i.e. “user”, “userflash”, etc., only pkgs of that type will be searched. So if the same file name exists in two different packages (e.g. in DRAM/securefs for a 'user' package and in flash for a 'userflash', only the specified type will be searched. If 'pkgtype' is NULL, the first package found that contains the specified file will be removed.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: An application may remove itself by specifying argv0 as the first argument file.

Can be called by a user application to remove the bundle containing the specified 'file'.


### function Secins_remove_user_bundle

```cpp
int Secins_remove_user_bundle(
    const char * bundlename
)
```


**Parameters**: 

  * **bundlename** - bundle name


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes otherwise 

**Note**: The calling user may only remove one of its own bundles.

Removes the bundle 'bundlename'.


### function Secins_strerror

```cpp
const char * Secins_strerror(
    int err
)
```


**Parameters**: 

  * **err** - one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes


**Return**: Error message string 

Returns a pointer to the error message associated with one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes


### function Secins_secondary_share_gid

```cpp
int Secins_secondary_share_gid(
    void 
)
```


**Return**: Group ID on success, -1 on error 

Returns the gid of the group created by the secure installer to allow sharing between the primary user and its secondary users i.e. The primary group and all the secondary users it creates are members of this group.


### function Secins_get_secondary_share_group

```cpp
int Secins_get_secondary_share_group(
    char * groupname,
    int namesize
)
```


**Parameters**: 

  * **groupname** - buffer where to store group name 
  * **namesize** - sizeof `groupname`


**Return**: Group ID on success, -1 on error 

Returns the group name of the group created by the secure installer to allow sharing between the primary user and its secondary users.


### function Secins_share_gid

```cpp
gid_t Secins_share_gid(
    void 
)
```


**Return**: The group id for the 'share' group, of which all users on the system are a member. 

### function Secins_system_gid

```cpp
gid_t Secins_system_gid(
    void 
)
```


**Return**: Returns the group id for the 'system' group, of which all system application users are a member. 

### function Secins_users_gid

```cpp
gid_t Secins_users_gid(
    void 
)
```


**Return**: Returns the group id for the 'users' group, of which all application users (i.e. usr1, usr2, ..., usr16) are a member. 

### function Secins_user_app

```cpp
unsigned int Secins_user_app(
    void 
)
```


**Return**: 

* 1 - the caller is a user application (i.e. usr1, usr2, ..., usr16) 
* 0 - otherwise 

Check if the caller is an user app.


### function Secins_sys_app

```cpp
unsigned int Secins_sys_app(
    void 
)
```


**Return**: 

* 1 - the caller is a system application (i.e. sys1, sys2, ..., sys16) 
* 0 - otherwise 

Check if the caller is a system app.


### function Secins_usrsys_gid

```cpp
gid_t Secins_usrsys_gid(
    uid_t uid
)
```


**Return**: Group ID or -1 on error 

Returns the system share group id for the specified user (usr1 ... usr16).


### function Secins_sysmode_share_gid

```cpp
gid_t Secins_sysmode_share_gid(
    void 
)
```


**Return**: Group ID or -1 on error 

**Note**: This group was originally for sharing with the sysmode user but now includes all system users

Same as [Secins_usrsys_gid()](libsecins_8h.md#function-secins-usrsys-gid), except it returns the system share group id for the calling user (usr1 ... usr16).

For users other than usr1 ... usr16, the current effective group id is returned.


### function Secins_config_file_share_gid

```cpp
gid_t Secins_config_file_share_gid(
    const char * configfile
)
```


**Parameters**: 

  * **configfile** - Configuration file (config.usr1, config.usr2, config.sys1, config.network ...)


**Return**: Group ID or -1 on error 

Returns the system share group id for the specified configfile.

For config.usr1 ..., config.usr16 the system share group id as described previously is returned. For other config files, the current effective group id is returned.


### function Secins_start_app_argv

```cpp
int Secins_start_app_argv(
    pid_t * app_pid,
    char * argp[],
    char * envp[],
    int(*)(child_death_cert cert, void *arg) cb,
    void * arg
)
```


**Parameters**: 

  * **app_pid** - (Optional) PID of application 
  * **argp** - array of argument strings, terminated by NULL ptr 
  * **envp** - array of environment strings, terminated by NULL ptr 
  * **cb** - (Optional) callback triggered upon application termination 
  * **arg** - (Optional) pass an argument to callback


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Start usr/sys application

To be used by a user application to start another user application. SYS users can start any USR and SYS application. USR user can start only same USR applications (e.g. SYS4, can start: SYS4, USR1, USR2 ... . USR3 only USR3). Application path should be specified in argp[0]. Not all environment variables are allowed to be passed by users - they are filtered internally by whitelist and blacklist before execution and reset accordingly if required, see Secins [Appendix I: Install API guidelines]

Preliminary: MT-Unsafe


### function Secins_kill_app_pid

```cpp
int Secins_kill_app_pid(
    pid_t app_pid,
    int sig,
    int * status
)
```


**Parameters**: 

  * **app_pid** - application PID 
  * **sig** - signal to send 

* 0 - check if application is alive 
* >0 - signal id 
  * **status** - application's status (optional, could be NULL) 

* 1 - application alive/killed 
* 0 - application dead/allready terminated (double termination attempt)


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Send signal to usr/sys application by pid Same access rights as [Secins_start_app_argv()](libsecins_8h.md#function-secins-start-app-argv)


### function Secins_delete_all_users

```cpp
int Secins_delete_all_users(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error.

**Note**: Allowed to be used only by sys4(sysmode) 

Delete all Users(usr1 .. usr16), user VCL, VSS nad IPP keys Can be used


### function Secins_hmac_sha256

```cpp
int Secins_hmac_sha256(
    uint8_t * hash,
    int * hash_size,
    uint8_t * keyin,
    int keyinsz,
    int mode
)
```


**Parameters**: 

  * **hash** - Addr Hahs buffer result 
  * **hash_size** - Hahs buffer size 
  * **keyin** - Addr key buffer 
  * **keyinsz** - key buffer size 
  * **mode** - ignored. Exists for app compatibility with Verix (or future options)


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

This function performs a HMAC-SHA256 over a portion of the firmware. The hmac returned can be used to verify that the firmware has not been compromised. This function uses the file '/etc/hmac.cfg', which is part of the 'secins' install package, to determine what should be included in the HMAC calculation. Use Secure Installer Reference for more information.


### function Secins_block_on_sysmode_button

```cpp
int Secins_block_on_sysmode_button(
    void 
)
```


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error.

**Note**: After this call user apps and sysmode will not launch until next sysmode button press 

This function will block until sysmode button (physical or 1+5+9) is pressed


### function Secins_get_reboot_hours

```cpp
int Secins_get_reboot_hours(
    int * hours,
    int rpc_timeout
)
```


**Parameters**: 

  * **hours** - totals hours 
  * **rpc_timeout** - rpc timeout in seconds (default is 30s, it's probably too much for sysmode if rpc stucks)


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Return total hours configured between resets


### function Secins_get_json_lowlayer_digests

```cpp
int Secins_get_json_lowlayer_digests(
    char ** json_str_buf
)
```


**Parameters**: 

  * **json_str_buf** - Pointer to JSON string. *json_str_buf must be initialised to NULL and freed by the caller.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Get JSON formatted list of Lowlayer SHA256 Digests


### function Secins_get_install_status

```cpp
int Secins_get_install_status(
    char ** json_str_buf
)
```


**Parameters**: 

  * **json_str_buf** - Pointer to JSON string. *json_str_buf must be initialised to NULL and freed by the caller. Strings 'dlname', 'error_msg' and integer 'error_num' can be obtained from *json_str.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Get JSON formatted list of install status for the install API [Secins_free_resources_install_software()](libsecins_8h.md#function-secins-free-resources-install-software)


### function Secins_get_device_mode_info

```cpp
int Secins_get_device_mode_info(
    SecinsDeviceModeInfo * device_mode_info
)
```


**Parameters**: 

  * **device_mode_info** - Structure to receive the device info.


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error.

**Note**: The Device run mode refers to whether the device is running in Manufacturing, Production, OS Devlopment, or App Development mode. info->curr_device_mode identifies the current run mode. info->hw_device_mode is the mode that the h/w indicates the device should run in (via the OTP registers, SVID, etc.). Normally curr_device_mode and hw_device_mode will be the same but it is possible for a device to run in a mode other than that indicated by the h/w. For example, a Development device may be configured to run in Production mode for test purposes. So hw_device_mode tells you what type of Device you have and curr_device_mode tells you what mode you are running in. 

Get Device run mode information.


### function Secins_get_slp_tainted_status

```cpp
int Secins_get_slp_tainted_status(
    int * tainted
)
```


**Parameters**: 

  * **tainted** - Pointer to int. 

* 1 - SLP tainted (corrupt) 
* 0 - SLP OK


**Return**: 0 on success or one of the [ERROR_SECINS](libsecins_8h.md#define-error-secins) error codes on error. 

Get Device Software Licensing and Protection (SLP) tainted status


### function Secins_add_cert

```cpp
int Secins_add_cert(
    const char * certfile
)
```


### function Secins_app_dev_convert

```cpp
int Secins_app_dev_convert(
    const char * token_file,
    const char * token_sig,
    const char * cert_dir
)
```


### function Secins_ExecuteToken

```cpp
int Secins_ExecuteToken(
    const char * token,
    const char * token_signature,
    const char * token_type,
    int options
)
```




## Macros Documentation

### define SECINS_REBOOT_REQD_BIT

```cpp
#define SECINS_REBOOT_REQD_BIT SECINS_BIT(0)
```


Reboot is required after installation is complete 


### define SECINS_RESTART_APPS_REQD_BIT

```cpp
#define SECINS_RESTART_APPS_REQD_BIT SECINS_BIT(1)
```


Application restart is required after installation is complete. [Secins_start_user_apps()](libsecins_8h.md#function-secins-start-user-apps) should be used for restarting user apps when required 


### define NORMALLY_TERMINATED

```cpp
#define NORMALLY_TERMINATED 0x01
```


Application terminated by exit(2) or returned from main 


### define KILLED_BY_SIGNAL

```cpp
#define KILLED_BY_SIGNAL 0x02
```


Application killed by system signal 


### define UNKOWN_CAUSE_OF_DEATH

```cpp
#define UNKOWN_CAUSE_OF_DEATH 0x03
```


Should not receive this normaly 


### define SECINS_MAX_PATH

```cpp
#define SECINS_MAX_PATH 256
```


### define SECINS_MAX_USERNAME_LEN

```cpp
#define SECINS_MAX_USERNAME_LEN 16
```


### define SECINS_MAX_GROUPNAME_LEN

```cpp
#define SECINS_MAX_GROUPNAME_LEN 16
```


### define ERROR_SECINS

```cpp
#define ERROR_SECINS 100
```


Base error code. All error RC are: ERROR_SECINS + <x> 


### define ERROR_SECINS_NO_MEMORY

```cpp
#define ERROR_SECINS_NO_MEMORY (ERROR_SECINS + 0)
```


Memory allocation failure 


### define ERROR_SECINS_MKDIR

```cpp
#define ERROR_SECINS_MKDIR (ERROR_SECINS + 1)
```


Failed to make directory 


### define ERROR_SECINS_FILE_AUTH

```cpp
#define ERROR_SECINS_FILE_AUTH (ERROR_SECINS + 2)
```


Failed to authenticate package 


### define ERROR_SECINS_MOUNT_RFS

```cpp
#define ERROR_SECINS_MOUNT_RFS (ERROR_SECINS + 3)
```


Failed to mount file system 


### define ERROR_SECINS_INVALID_INIT_FILE

```cpp
#define ERROR_SECINS_INVALID_INIT_FILE (ERROR_SECINS + 4)
```


System init file not found 


### define ERROR_SECINS_PATHNAME_TOO_LONG

```cpp
#define ERROR_SECINS_PATHNAME_TOO_LONG (ERROR_SECINS + 5)
```


Pathname too long 


### define ERROR_SECINS_CHROOT

```cpp
#define ERROR_SECINS_CHROOT (ERROR_SECINS + 6)
```


Switch root operation failed 


### define ERROR_SECINS_EXEC_INIT

```cpp
#define ERROR_SECINS_EXEC_INIT (ERROR_SECINS + 7)
```


Failed to run the system init file 


### define ERROR_SECINS_OPENDIR

```cpp
#define ERROR_SECINS_OPENDIR (ERROR_SECINS + 8)
```


Failed to open directory 


### define ERROR_SECINS_RENAME_DIR

```cpp
#define ERROR_SECINS_RENAME_DIR (ERROR_SECINS + 9)
```


Failed to rename directory 


### define ERROR_SECINS_CHMOD

```cpp
#define ERROR_SECINS_CHMOD (ERROR_SECINS + 10)
```


Failed to set file permissions 


### define ERROR_SECINS_CHOWN

```cpp
#define ERROR_SECINS_CHOWN (ERROR_SECINS + 11)
```


Failed to set file ownership 


### define ERROR_SECINS_FILE_CREATE

```cpp
#define ERROR_SECINS_FILE_CREATE (ERROR_SECINS + 12)
```


Failed to create file 


### define ERROR_SECINS_FILE_OPEN

```cpp
#define ERROR_SECINS_FILE_OPEN (ERROR_SECINS + 13)
```


Failed to open file 


### define ERROR_SECINS_FILE_WRITE

```cpp
#define ERROR_SECINS_FILE_WRITE (ERROR_SECINS + 14)
```


Failed to write file 


### define ERROR_SECINS_NO_SIG

```cpp
#define ERROR_SECINS_NO_SIG (ERROR_SECINS + 15)
```


No package signature file 


### define ERROR_SECINS_NO_PKG

```cpp
#define ERROR_SECINS_NO_PKG (ERROR_SECINS + 16)
```


No matching package file with signature 


### define ERROR_SECINS_INVALID_FILENAME

```cpp
#define ERROR_SECINS_INVALID_FILENAME (ERROR_SECINS + 17)
```


Invalid p7s signature filename 


### define ERROR_SECINS_INVALID_INSTALL

```cpp
#define ERROR_SECINS_INVALID_INSTALL (ERROR_SECINS + 18)
```


Installed package is invalid 


### define ERROR_SECINS_INVALID_INI_SECTION

```cpp
#define ERROR_SECINS_INVALID_INI_SECTION (ERROR_SECINS + 19)
```


Invalid ini file section 


### define ERROR_SECINS_MKNOD

```cpp
#define ERROR_SECINS_MKNOD (ERROR_SECINS + 20)
```


Filed to create device node 


### define ERROR_SECINS_INVALID_INI_PROPERTY

```cpp
#define ERROR_SECINS_INVALID_INI_PROPERTY (ERROR_SECINS + 21)
```


Invalid ini file property 


### define ERROR_SECINS_NO_CONTROL_FILE

```cpp
#define ERROR_SECINS_NO_CONTROL_FILE (ERROR_SECINS + 22)
```


No control file in package 


### define ERROR_SECINS_INVALID_CONTROL_FILE

```cpp
#define ERROR_SECINS_INVALID_CONTROL_FILE (ERROR_SECINS + 23)
```


Invalid control file in package 


### define ERROR_SECINS_CREATE_CONTROL_FILE

```cpp
#define ERROR_SECINS_CREATE_CONTROL_FILE (ERROR_SECINS + 24)
```


Failed to install control file 


### define ERROR_SECINS_OLD_PKG_VERSION

```cpp
#define ERROR_SECINS_OLD_PKG_VERSION (ERROR_SECINS + 25)
```


More up-to-date package already installed 


### define ERROR_SECINS_INVALID_PKG_TYPE

```cpp
#define ERROR_SECINS_INVALID_PKG_TYPE (ERROR_SECINS + 26)
```


Invalid package type 


### define ERROR_SECINS_EXTRACT_PKG_CONTROL

```cpp
#define ERROR_SECINS_EXTRACT_PKG_CONTROL (ERROR_SECINS + 27)
```


Failed to extract pkg CONTROL dir 


### define ERROR_SECINS_EXTRACT_PKG

```cpp
#define ERROR_SECINS_EXTRACT_PKG (ERROR_SECINS + 28)
```


Failed to extract package archive 


### define ERROR_SECINS_INVALID_PKG

```cpp
#define ERROR_SECINS_INVALID_PKG (ERROR_SECINS + 29)
```


Invalid package 


### define ERROR_SECINS_PKG_LIST

```cpp
#define ERROR_SECINS_PKG_LIST (ERROR_SECINS + 30)
```


Failed to read pkg contents 


### define ERROR_SECINS_PKG_FILENAME_TOO_LONG

```cpp
#define ERROR_SECINS_PKG_FILENAME_TOO_LONG (ERROR_SECINS + 31)
```


Package filename too long 


### define ERROR_SECINS_INSTALL_CONTROL_FILE

```cpp
#define ERROR_SECINS_INSTALL_CONTROL_FILE (ERROR_SECINS + 32)
```


Failed to install pkg control file 


### define ERROR_SECINS_INSTALL_PKG

```cpp
#define ERROR_SECINS_INSTALL_PKG (ERROR_SECINS + 33)
```


Failed to install pkg 


### define ERROR_SECINS_INSTALL_SIG

```cpp
#define ERROR_SECINS_INSTALL_SIG (ERROR_SECINS + 34)
```


Failed to install pkg signature 


### define ERROR_SECINS_PKG_NOT_FOUND

```cpp
#define ERROR_SECINS_PKG_NOT_FOUND (ERROR_SECINS + 35)
```


Incomplete pkg install 


### define ERROR_SECINS_ADD_GROUP

```cpp
#define ERROR_SECINS_ADD_GROUP (ERROR_SECINS + 36)
```


Failed to add group 


### define ERROR_SECINS_ADD_USER

```cpp
#define ERROR_SECINS_ADD_USER (ERROR_SECINS + 37)
```


Failed to add user 


### define ERROR_SECINS_ADD_SHADOW

```cpp
#define ERROR_SECINS_ADD_SHADOW (ERROR_SECINS + 38)
```


Failed to add shadow password entry 


### define ERROR_SECINS_GET_USER

```cpp
#define ERROR_SECINS_GET_USER (ERROR_SECINS + 39)
```


User not found 


### define ERROR_SECINS_GET_GROUP

```cpp
#define ERROR_SECINS_GET_GROUP (ERROR_SECINS + 40)
```


Group not found 


### define ERROR_SECINS_PROCESS_FORK

```cpp
#define ERROR_SECINS_PROCESS_FORK (ERROR_SECINS + 41)
```


### define ERROR_SECINS_CHECK_GRSEC

```cpp
#define ERROR_SECINS_CHECK_GRSEC (ERROR_SECINS + 42)
```


Grsecuity policy check failed 


### define ERROR_SECINS_START_GRSEC

```cpp
#define ERROR_SECINS_START_GRSEC (ERROR_SECINS + 43)
```


Failed to enable Grsecurity 


### define ERROR_SECINS_FORK

```cpp
#define ERROR_SECINS_FORK (ERROR_SECINS + 44)
```


Failed to create child process 


### define ERROR_SECINS_GET_RESOURCE

```cpp
#define ERROR_SECINS_GET_RESOURCE (ERROR_SECINS + 45)
```


Failed to get system resource limits 


### define ERROR_SECINS_SETSID

```cpp
#define ERROR_SECINS_SETSID (ERROR_SECINS + 46)
```


Failed to create new session 


### define ERROR_SECINS_START_LINE_TOO_LONG

```cpp
#define ERROR_SECINS_START_LINE_TOO_LONG (ERROR_SECINS + 47)
```


Start file line too long 


### define ERROR_SECINS_START_LINE_INVALID

```cpp
#define ERROR_SECINS_START_LINE_INVALID (ERROR_SECINS + 48)
```


Start file line invalid 


### define ERROR_SECINS_START_ENTRY_UNKNOWN

```cpp
#define ERROR_SECINS_START_ENTRY_UNKNOWN (ERROR_SECINS + 49)
```


Start file entry unknown 


### define ERROR_SECINS_EXEC_APP

```cpp
#define ERROR_SECINS_EXEC_APP (ERROR_SECINS + 50)
```


Failed to start app 


### define ERROR_SECINS_MODE_APP

```cpp
#define ERROR_SECINS_MODE_APP (ERROR_SECINS + 51)
```


Start file entry not executable 


### define ERROR_SECINS_SYMLINK

```cpp
#define ERROR_SECINS_SYMLINK (ERROR_SECINS + 52)
```


Failed to create symlink 


### define ERROR_SECINS_INVALID_INSTALL_FILE

```cpp
#define ERROR_SECINS_INVALID_INSTALL_FILE (ERROR_SECINS + 53)
```


Invalid install archive type 


### define ERROR_SECINS_EXTRACT_INSTALL_FILE

```cpp
#define ERROR_SECINS_EXTRACT_INSTALL_FILE (ERROR_SECINS + 54)
```


Failed to extract download file 


### define ERROR_SECINS_INVALID_PKG_FORMAT

```cpp
#define ERROR_SECINS_INVALID_PKG_FORMAT (ERROR_SECINS + 55)
```


Invalid package file type 


### define ERROR_SECINS_AUTH_GID

```cpp
#define ERROR_SECINS_AUTH_GID (ERROR_SECINS + 56)
```


Invalid filetype for authing 


### define ERROR_SECINS_ADD_CERT

```cpp
#define ERROR_SECINS_ADD_CERT (ERROR_SECINS + 57)
```


Failed to add Certificate 


### define ERROR_SECINS_PATCH_VERSION

```cpp
#define ERROR_SECINS_PATCH_VERSION (ERROR_SECINS + 58)
```


Patch SrcVersion does not match the installed pkg 


### define ERROR_SECINS_PATCH

```cpp
#define ERROR_SECINS_PATCH (ERROR_SECINS + 59)
```


Failed to patch package 


### define ERROR_SECINS_START_SVCSEC

```cpp
#define ERROR_SECINS_START_SVCSEC (ERROR_SECINS + 60)
```


Failed to start svcsec application 


### define ERROR_SECINS_INVALID_CERT

```cpp
#define ERROR_SECINS_INVALID_CERT (ERROR_SECINS + 61)
```


Invalid cert file 


### define ERROR_SECINS_PUT_ENV

```cpp
#define ERROR_SECINS_PUT_ENV (ERROR_SECINS + 62)
```


Failed to process package config file 


### define ERROR_SECINS_SET_USER

```cpp
#define ERROR_SECINS_SET_USER (ERROR_SECINS + 63)
```


Failed to set user id 


### define ERROR_SECINS_INVALID_PKG_CATEGORY

```cpp
#define ERROR_SECINS_INVALID_PKG_CATEGORY (ERROR_SECINS + 64)
```


Invalid package category specified 


### define ERROR_SECINS_INVALID_CMD

```cpp
#define ERROR_SECINS_INVALID_CMD (ERROR_SECINS + 65)
```


Invalid command in remove file 


### define ERROR_SECINS_INVALID_BUNDLE_FILE

```cpp
#define ERROR_SECINS_INVALID_BUNDLE_FILE (ERROR_SECINS + 66)
```


Invalid bundle file 


### define ERROR_SECINS_EXTRACT_BUNDLE_CONTROL

```cpp
#define ERROR_SECINS_EXTRACT_BUNDLE_CONTROL (ERROR_SECINS + 67)
```


Failed to extract bundle control file 


### define ERROR_SECINS_INVALID_BUNDLE_USER

```cpp
#define ERROR_SECINS_INVALID_BUNDLE_USER (ERROR_SECINS + 68)
```


Invalid bundle user specified 


### define ERROR_SECINS_INVALID_PKG_USER

```cpp
#define ERROR_SECINS_INVALID_PKG_USER (ERROR_SECINS + 69)
```


Package user does not match bundle user 


### define ERROR_SECINS_NO_BUNDLE

```cpp
#define ERROR_SECINS_NO_BUNDLE (ERROR_SECINS + 70)
```


No bundle file matching bundle p7s signature 


### define ERROR_SECINS_OPEN_SOCKET

```cpp
#define ERROR_SECINS_OPEN_SOCKET (ERROR_SECINS + 71)
```


Failed to open socket 


### define ERROR_SECINS_BIND_FAILURE

```cpp
#define ERROR_SECINS_BIND_FAILURE (ERROR_SECINS + 72)
```


Failed to bind unix domain address 


### define ERROR_SECINS_UNKNOWN_MSG

```cpp
#define ERROR_SECINS_UNKNOWN_MSG (ERROR_SECINS + 73)
```


Unknown secure installer msg 


### define ERROR_SECINS_MSG_SND

```cpp
#define ERROR_SECINS_MSG_SND (ERROR_SECINS + 74)
```


Failed to send API response msg 


### define ERROR_SECINS_MSG_RCV

```cpp
#define ERROR_SECINS_MSG_RCV (ERROR_SECINS + 75)
```


Failed to read API msg 


### define ERROR_SECINS_MSG_SIZE

```cpp
#define ERROR_SECINS_MSG_SIZE (ERROR_SECINS + 76)
```


API message too big 


### define ERROR_SECINS_RESP_SIZE

```cpp
#define ERROR_SECINS_RESP_SIZE (ERROR_SECINS + 77)
```


API response message too big 


### define ERROR_SECINS_INVALID_RESP

```cpp
#define ERROR_SECINS_INVALID_RESP (ERROR_SECINS + 78)
```


Invalid API response 


### define ERROR_SECINS_FILE_READ

```cpp
#define ERROR_SECINS_FILE_READ (ERROR_SECINS + 79)
```


Failed to read file 


### define ERROR_SECINS_FILE_RENAME

```cpp
#define ERROR_SECINS_FILE_RENAME (ERROR_SECINS + 80)
```


Failed to rename file 


### define ERROR_SECINS_USER_APP_START

```cpp
#define ERROR_SECINS_USER_APP_START (ERROR_SECINS + 81)
```


Failed to start app 


### define ERROR_SECINS_GET_CWD

```cpp
#define ERROR_SECINS_GET_CWD (ERROR_SECINS + 82)
```


Failed to get current working dir 


### define ERROR_SECINS_INVALID_PARAM

```cpp
#define ERROR_SECINS_INVALID_PARAM (ERROR_SECINS + 83)
```


Invalid parameter specified 


### define ERROR_SECINS_NOT_ALLOWED

```cpp
#define ERROR_SECINS_NOT_ALLOWED (ERROR_SECINS + 84)
```


Permission denied 


### define ERROR_SECINS_SYSMODE_START

```cpp
#define ERROR_SECINS_SYSMODE_START (ERROR_SECINS + 85)
```


No sysmode loaded 


### define ERROR_SECINS_INVALID_PKGLIST

```cpp
#define ERROR_SECINS_INVALID_PKGLIST (ERROR_SECINS + 86)
```


Package list file invalid 


### define ERROR_SECINS_SOCK_LISTEN

```cpp
#define ERROR_SECINS_SOCK_LISTEN (ERROR_SECINS + 87)
```


Failed to setup API socket 


### define ERROR_SECINS_CONNECT_FAIL

```cpp
#define ERROR_SECINS_CONNECT_FAIL (ERROR_SECINS + 88)
```


Failed to connect to secins API socket 


### define ERROR_SECINS_PATCH_APPLIED

```cpp
#define ERROR_SECINS_PATCH_APPLIED (ERROR_SECINS + 89)
```


Low Layer patch already applied 


### define ERROR_SECINS_RELOAD_GRSEC

```cpp
#define ERROR_SECINS_RELOAD_GRSEC (ERROR_SECINS + 90)
```


Failed to reload the grsecurity policy 


### define ERROR_SECINS_CREATE_GRSEC_FILE

```cpp
#define ERROR_SECINS_CREATE_GRSEC_FILE (ERROR_SECINS + 91)
```


Failed to create grsec policy file 


### define ERROR_SECINS_GRSEC_SUBJECT

```cpp
#define ERROR_SECINS_GRSEC_SUBJECT (ERROR_SECINS + 92)
```


Subject in grsec file does not exist 


### define ERROR_SECINS_INVALID_POLICY_FILE

```cpp
#define ERROR_SECINS_INVALID_POLICY_FILE (ERROR_SECINS + 93)
```


Invalid grsec policy file 


### define ERROR_SECINS_INVALID_OBJECT

```cpp
#define ERROR_SECINS_INVALID_OBJECT (ERROR_SECINS + 94)
```


Object in grsec file invalid or not allowed 


### define ERROR_SECINS_INVALID_OBJECT_MODE

```cpp
#define ERROR_SECINS_INVALID_OBJECT_MODE (ERROR_SECINS + 95)
```


Object mode in grsec file not allowed 


### define ERROR_SECINS_NO_POLICY_FILE

```cpp
#define ERROR_SECINS_NO_POLICY_FILE (ERROR_SECINS + 96)
```


System grsec policy file not found 


### define ERROR_SECINS_INVALID_CAPABILITY

```cpp
#define ERROR_SECINS_INVALID_CAPABILITY (ERROR_SECINS + 97)
```


Capability in grsec file not allowed 


### define ERROR_SECINS_OBJECT_NOT_HIDDEN

```cpp
#define ERROR_SECINS_OBJECT_NOT_HIDDEN (ERROR_SECINS + 98)
```


Object in grsec file must be hidden 


### define ERROR_SECINS_OBJECT_NOT_FOUND

```cpp
#define ERROR_SECINS_OBJECT_NOT_FOUND (ERROR_SECINS + 99)
```


Required object in grsec file not found 


### define ERROR_SECINS_FILE_CAPS

```cpp
#define ERROR_SECINS_FILE_CAPS (ERROR_SECINS + 100)
```


Failed to add file capabilities 


### define ERROR_SECINS_SUBJECT_MODE

```cpp
#define ERROR_SECINS_SUBJECT_MODE (ERROR_SECINS + 101)
```


Invalid subject mode in grsec file 


### define ERROR_SECINS_REMOVE_USER

```cpp
#define ERROR_SECINS_REMOVE_USER (ERROR_SECINS + 102)
```


Failed to remove user 


### define ERROR_SECINS_REMOVE_GROUP

```cpp
#define ERROR_SECINS_REMOVE_GROUP (ERROR_SECINS + 103)
```


Failed to remove group 


### define ERROR_SECINS_PID_NOT_FOUND

```cpp
#define ERROR_SECINS_PID_NOT_FOUND (ERROR_SECINS + 104)
```


Process does not exist 


### define ERROR_SECINS_SIGNAL_FAIL

```cpp
#define ERROR_SECINS_SIGNAL_FAIL (ERROR_SECINS + 105)
```


Failed to send signal 


### define ERROR_SECINS_LOAD_VSS

```cpp
#define ERROR_SECINS_LOAD_VSS (ERROR_SECINS + 106)
```


Failed to load VSS script to vault 


### define ERROR_SECINS_UNSIGNED_PKG_USER

```cpp
#define ERROR_SECINS_UNSIGNED_PKG_USER (ERROR_SECINS + 107)
```


Unsigned pkg being installed by invalid user 


### define ERROR_SECINS_PATCH_AUTH

```cpp
#define ERROR_SECINS_PATCH_AUTH (ERROR_SECINS + 108)
```


Failed to auth patched pkg 


### define ERROR_SECINS_EXTRACT_PATCH_CONTROL

```cpp
#define ERROR_SECINS_EXTRACT_PATCH_CONTROL (ERROR_SECINS + 109)
```


Failed to extract control file from patched pkg 


### define ERROR_SECINS_GRSEC_ENTRY_UNKNOWN

```cpp
#define ERROR_SECINS_GRSEC_ENTRY_UNKNOWN (ERROR_SECINS + 110)
```


grsec file entry unknown 


### define ERROR_SECINS_FILE_DELETE

```cpp
#define ERROR_SECINS_FILE_DELETE (ERROR_SECINS + 111)
```


Failed to delete file 


### define ERROR_SECINS_NO_SRC_PKG

```cpp
#define ERROR_SECINS_NO_SRC_PKG (ERROR_SECINS + 112)
```


Package to be patched does not exist 


### define ERROR_SECINS_NO_SRC_BUNDLE

```cpp
#define ERROR_SECINS_NO_SRC_BUNDLE (ERROR_SECINS + 113)
```


Bundle to be patched does not exist 


### define ERROR_SECINS_BUNDLE_VERSION

```cpp
#define ERROR_SECINS_BUNDLE_VERSION (ERROR_SECINS + 114)
```


Higher bundle version already installed 


### define ERROR_SECINS_BUNDLE_SRCVERSION

```cpp
#define ERROR_SECINS_BUNDLE_SRCVERSION (ERROR_SECINS + 115)
```


Bundle SrcVersion does not match the installed bundle 


### define ERROR_SECINS_WRONG_BUNDLE

```cpp
#define ERROR_SECINS_WRONG_BUNDLE (ERROR_SECINS + 116)
```


Package being installed already exists in a different bundle 


### define ERROR_SECINS_TOKEN_FAIL

```cpp
#define ERROR_SECINS_TOKEN_FAIL (ERROR_SECINS + 117)
```


Failed to install feature enablement token 


### define ERROR_SECINS_BUNDLE_CHANGED

```cpp
#define ERROR_SECINS_BUNDLE_CHANGED (ERROR_SECINS + 118)
```


Reloading same bundle version with different pkg versions 


### define ERROR_SECINS_BUNDLE_NOT_CHANGED

```cpp
#define ERROR_SECINS_BUNDLE_NOT_CHANGED (ERROR_SECINS + 119)
```


New bundle version with same pkg versions 


### define ERROR_SECINS_MANU_MODE

```cpp
#define ERROR_SECINS_MANU_MODE (ERROR_SECINS + 120)
```


Not allowed when unit in manufacture mode 


### define ERROR_SECINS_MANU_MODE_REQD

```cpp
#define ERROR_SECINS_MANU_MODE_REQD (ERROR_SECINS + 121)
```


Not allowed when unit not in manufacture mode 


### define ERROR_SECINS_INVALID_UMASK

```cpp
#define ERROR_SECINS_INVALID_UMASK (ERROR_SECINS + 122)
```


Invalid umask in package, must be octal 


### define ERROR_SECINS_FILE_SEEK

```cpp
#define ERROR_SECINS_FILE_SEEK (ERROR_SECINS + 123)
```


File seek operation failed 


### define ERROR_SECINS_MODULE_NOT_FOUND

```cpp
#define ERROR_SECINS_MODULE_NOT_FOUND (ERROR_SECINS + 124)
```


Module not installed 


### define ERROR_SECINS_INVALID_HMAC_CFG

```cpp
#define ERROR_SECINS_INVALID_HMAC_CFG (ERROR_SECINS + 125)
```


HMAC config file missing or invalid 


### define ERROR_SECINS_HMAC_SETUP

```cpp
#define ERROR_SECINS_HMAC_SETUP (ERROR_SECINS + 126)
```


Vault HMAC setup error 


### define ERROR_SECINS_HMAC_CHECK

```cpp
#define ERROR_SECINS_HMAC_CHECK (ERROR_SECINS + 127)
```


Vault HMAC check error 


### define ERROR_SECINS_CERT_NOT_FOUND

```cpp
#define ERROR_SECINS_CERT_NOT_FOUND (ERROR_SECINS + 128)
```


Certificate not found 


### define ERROR_SECINS_BUNDLE_NOT_FOUND

```cpp
#define ERROR_SECINS_BUNDLE_NOT_FOUND (ERROR_SECINS + 129)
```


Bundle not found 


### define ERROR_SECINS_TARGET_ERROR

```cpp
#define ERROR_SECINS_TARGET_ERROR (ERROR_SECINS + 130)
```


Not installing as target not met 


### define ERROR_SECINS_REG_CALLBACK

```cpp
#define ERROR_SECINS_REG_CALLBACK (ERROR_SECINS + 131)
```


Failed to register callback(full table) 


### define ERROR_SECINS_SET_RESOURCE

```cpp
#define ERROR_SECINS_SET_RESOURCE (ERROR_SECINS + 132)
```


Failed to set system resource 


### define ERROR_SECINS_PATCHLIST_FILE

```cpp
#define ERROR_SECINS_PATCHLIST_FILE (ERROR_SECINS + 133)
```


### define ERROR_SECINS_SHA_COMPUTE

```cpp
#define ERROR_SECINS_SHA_COMPUTE (ERROR_SECINS + 134)
```


### define ERROR_SECINS_SHA_MISMATCH

```cpp
#define ERROR_SECINS_SHA_MISMATCH (ERROR_SECINS + 135)
```


### define ERROR_SECINS_COMPRESS_PKG

```cpp
#define ERROR_SECINS_COMPRESS_PKG (ERROR_SECINS + 136)
```


### define ERROR_SECINS_FILE_COPY

```cpp
#define ERROR_SECINS_FILE_COPY (ERROR_SECINS + 137)
```


### define ERROR_SECINS_IS_APP_DEV

```cpp
#define ERROR_SECINS_IS_APP_DEV (ERROR_SECINS + 138)
```


### define ERROR_SECINS_APP_DEV_TOKEN

```cpp
#define ERROR_SECINS_APP_DEV_TOKEN (ERROR_SECINS + 139)
```


### define ERROR_SECINS_APP_DEV_CERTS

```cpp
#define ERROR_SECINS_APP_DEV_CERTS (ERROR_SECINS + 140)
```


### define ERROR_SECINS_DEL_CERTFILE

```cpp
#define ERROR_SECINS_DEL_CERTFILE (ERROR_SECINS + 141)
```


### define ERROR_SECINS_APP_DEV_SVID

```cpp
#define ERROR_SECINS_APP_DEV_SVID (ERROR_SECINS + 142)
```


### define ERROR_SECINS_SPARSE_PATCH

```cpp
#define ERROR_SECINS_SPARSE_PATCH (ERROR_SECINS + 143)
```


### define ERROR_SECINS_HMAC_KEY_TOO_LONG

```cpp
#define ERROR_SECINS_HMAC_KEY_TOO_LONG (ERROR_SECINS + 146)
```


### define ERROR_SECINS_VER_NOT_SUPPORTED

```cpp
#define ERROR_SECINS_VER_NOT_SUPPORTED (ERROR_SECINS + 147)
```


### define ERROR_SECINS_NO_KEY_ELEMENT

```cpp
#define ERROR_SECINS_NO_KEY_ELEMENT (ERROR_SECINS + 148)
```


### define ERROR_SECINS_NOT_SUPPORTED

```cpp
#define ERROR_SECINS_NOT_SUPPORTED (ERROR_SECINS + 149)
```


### define ERROR_SECINS_PARSING_ERROR

```cpp
#define ERROR_SECINS_PARSING_ERROR (ERROR_SECINS + 150)
```


### define ERROR_SECINS_INVALID_CMS

```cpp
#define ERROR_SECINS_INVALID_CMS (ERROR_SECINS + 151)
```


### define ERROR_SECINS_INSTALL_TR34JSON

```cpp
#define ERROR_SECINS_INSTALL_TR34JSON (ERROR_SECINS + 152)
```


### define ERROR_SECINS_INVALID_RETVAL

```cpp
#define ERROR_SECINS_INVALID_RETVAL (ERROR_SECINS + 153)
```


### define ERROR_SECINS_LOW_LAYER_INSTALL

```cpp
#define ERROR_SECINS_LOW_LAYER_INSTALL (ERROR_SECINS + 154) /* Low layer images failed to install */
```


### define ERROR_SECINS_NO_SN_MATCH

```cpp
#define ERROR_SECINS_NO_SN_MATCH (ERROR_SECINS + 155) /* VRK bundle did not contain file for this unit */
```


### define ERROR_SECINS_INSTALL_BUSY_SYSTEM

```cpp
#define ERROR_SECINS_INSTALL_BUSY_SYSTEM (ERROR_SECINS + 156) /* Do not install as the critical section on by some user */
```


### define ERROR_SECINS_DL_ERROR

```cpp
#define ERROR_SECINS_DL_ERROR (ERROR_SECINS + 157) /* Dynamic lib errors */
```


### define ERROR_SECINS_READ_LL_IMAGE

```cpp
#define ERROR_SECINS_READ_LL_IMAGE (ERROR_SECINS + 158)
```


Failed to read lowlayer image from flash 


### define ERROR_SECINS_FILE_TRUNCATE

```cpp
#define ERROR_SECINS_FILE_TRUNCATE (ERROR_SECINS + 159)
```


Failed to truncate file 


### define ERROR_SECINS_FILE_MMAP

```cpp
#define ERROR_SECINS_FILE_MMAP (ERROR_SECINS + 160)
```


### define ERROR_SECINS_FILE_STAT

```cpp
#define ERROR_SECINS_FILE_STAT (ERROR_SECINS + 161)
```


### define ERROR_SECINS_INSTSTAT_FAIL

```cpp
#define ERROR_SECINS_INSTSTAT_FAIL (ERROR_SECINS + 162)
```


### define ERROR_SECINS_CRITSEC_OP_FAILED

```cpp
#define ERROR_SECINS_CRITSEC_OP_FAILED (ERROR_SECINS + 163)
```


### define ERROR_SECINS_VOS2_SIGNER_NOT_FOUND

```cpp
#define ERROR_SECINS_VOS2_SIGNER_NOT_FOUND (ERROR_SECINS + 164)
```


### define ERROR_SECINS_INVALID_DLLIST

```cpp
#define ERROR_SECINS_INVALID_DLLIST (ERROR_SECINS + 165)
```


### define ERROR_SECINS_DAEMON_START_FAILED

```cpp
#define ERROR_SECINS_DAEMON_START_FAILED (ERROR_SECINS + 166)
```


### define ERROR_SECINS_DAEMON_STOP_FAILED

```cpp
#define ERROR_SECINS_DAEMON_STOP_FAILED (ERROR_SECINS + 167)
```


### define ERROR_SECINS_DAEMON_RESTART_FAILED

```cpp
#define ERROR_SECINS_DAEMON_RESTART_FAILED (ERROR_SECINS + 168)
```


### define ERROR_SECINS_DAEMON_RELOAD_FAILED

```cpp
#define ERROR_SECINS_DAEMON_RELOAD_FAILED (ERROR_SECINS + 169)
```


### define ERROR_SECINS_NO_SPACE

```cpp
#define ERROR_SECINS_NO_SPACE (ERROR_SECINS + 170)
```


### define ERROR_SECINS_PREINST

```cpp
#define ERROR_SECINS_PREINST (ERROR_SECINS + 171) /* Preinst script execution failure */
```


### define SECINS_BIT

```cpp
#define SECINS_BIT(
    n
)
(1 << n)
```


### define MAX_PATH_FILE

```cpp
#define MAX_PATH_FILE 256
```


### define SYSMODE_BTN_SEM

```cpp
#define SYSMODE_BTN_SEM "/si_button_block_sem"
```


### define SECINS_DEVICE_MODE_MANU

```cpp
#define SECINS_DEVICE_MODE_MANU 0
```


### define SECINS_DEVICE_MODE_PROD

```cpp
#define SECINS_DEVICE_MODE_PROD 1
```


### define SECINS_DEVICE_MODE_APPDEV

```cpp
#define SECINS_DEVICE_MODE_APPDEV 2
```


### define SECINS_DEVICE_MODE_OSDEV

```cpp
#define SECINS_DEVICE_MODE_OSDEV 3
```


### define SECINS_PROD_CERT_TREE

```cpp
#define SECINS_PROD_CERT_TREE 0
```


### define SECINS_OSDEV_CERT_TREE

```cpp
#define SECINS_OSDEV_CERT_TREE 1
```


### define SECINS_APPDEV_CERT_TREE

```cpp
#define SECINS_APPDEV_CERT_TREE 2
```


### define SECINS_DAEMON_START

```cpp
#define SECINS_DAEMON_START 0
```


### define SECINS_DAEMON_STOP

```cpp
#define SECINS_DAEMON_STOP 1
```


### define SECINS_DAEMON_RESTART

```cpp
#define SECINS_DAEMON_RESTART 2
```


### define SECINS_DAEMON_RELOAD

```cpp
#define SECINS_DAEMON_RELOAD 3
```


### define HMAC_MAX_HMAC

```cpp
#define HMAC_MAX_HMAC 32
```


### define EVP_MAX_KEY

```cpp
#define EVP_MAX_KEY 64
```


### define SECINS_MAX_DAEMON_NAME

```cpp
#define SECINS_MAX_DAEMON_NAME 64
```


### define CONTAINER_MAX_NAME_SIZE

```cpp
#define CONTAINER_MAX_NAME_SIZE 64
```


## Source code

```cpp

#ifndef _LIBSECINS_H__
#define _LIBSECINS_H__

#ifdef __cplusplus
extern "C" {
#endif

#include <sys/types.h>
#include <verifone/vfsys_defs.h>
#include <inttypes.h>

#define ERROR_SECINS                        100                  
#define ERROR_SECINS_NO_MEMORY              (ERROR_SECINS + 0)   
#define ERROR_SECINS_MKDIR                  (ERROR_SECINS + 1)   
#define ERROR_SECINS_FILE_AUTH              (ERROR_SECINS + 2)   
#define ERROR_SECINS_MOUNT_RFS              (ERROR_SECINS + 3)   
#define ERROR_SECINS_INVALID_INIT_FILE      (ERROR_SECINS + 4)   
#define ERROR_SECINS_PATHNAME_TOO_LONG      (ERROR_SECINS + 5)   
#define ERROR_SECINS_CHROOT                 (ERROR_SECINS + 6)   
#define ERROR_SECINS_EXEC_INIT              (ERROR_SECINS + 7)   
#define ERROR_SECINS_OPENDIR                (ERROR_SECINS + 8)   
#define ERROR_SECINS_RENAME_DIR             (ERROR_SECINS + 9)   
#define ERROR_SECINS_CHMOD                  (ERROR_SECINS + 10)  
#define ERROR_SECINS_CHOWN                  (ERROR_SECINS + 11)  
#define ERROR_SECINS_FILE_CREATE            (ERROR_SECINS + 12)  
#define ERROR_SECINS_FILE_OPEN              (ERROR_SECINS + 13)  
#define ERROR_SECINS_FILE_WRITE             (ERROR_SECINS + 14)  
#define ERROR_SECINS_NO_SIG                 (ERROR_SECINS + 15)  
#define ERROR_SECINS_NO_PKG                 (ERROR_SECINS + 16)  
#define ERROR_SECINS_INVALID_FILENAME       (ERROR_SECINS + 17)  
#define ERROR_SECINS_INVALID_INSTALL        (ERROR_SECINS + 18)  
#define ERROR_SECINS_INVALID_INI_SECTION    (ERROR_SECINS + 19)  
#define ERROR_SECINS_MKNOD                  (ERROR_SECINS + 20)  
#define ERROR_SECINS_INVALID_INI_PROPERTY   (ERROR_SECINS + 21)  
#define ERROR_SECINS_NO_CONTROL_FILE        (ERROR_SECINS + 22)  
#define ERROR_SECINS_INVALID_CONTROL_FILE   (ERROR_SECINS + 23)  
#define ERROR_SECINS_CREATE_CONTROL_FILE    (ERROR_SECINS + 24)  
#define ERROR_SECINS_OLD_PKG_VERSION        (ERROR_SECINS + 25)  
#define ERROR_SECINS_INVALID_PKG_TYPE       (ERROR_SECINS + 26)  
#define ERROR_SECINS_EXTRACT_PKG_CONTROL    (ERROR_SECINS + 27)  
#define ERROR_SECINS_EXTRACT_PKG            (ERROR_SECINS + 28)  
#define ERROR_SECINS_INVALID_PKG            (ERROR_SECINS + 29)  
#define ERROR_SECINS_PKG_LIST               (ERROR_SECINS + 30)  
#define ERROR_SECINS_PKG_FILENAME_TOO_LONG  (ERROR_SECINS + 31)  
#define ERROR_SECINS_INSTALL_CONTROL_FILE   (ERROR_SECINS + 32)  
#define ERROR_SECINS_INSTALL_PKG            (ERROR_SECINS + 33)  
#define ERROR_SECINS_INSTALL_SIG            (ERROR_SECINS + 34)  
#define ERROR_SECINS_PKG_NOT_FOUND          (ERROR_SECINS + 35)  
#define ERROR_SECINS_ADD_GROUP              (ERROR_SECINS + 36)  
#define ERROR_SECINS_ADD_USER               (ERROR_SECINS + 37)  
#define ERROR_SECINS_ADD_SHADOW             (ERROR_SECINS + 38)  
#define ERROR_SECINS_GET_USER               (ERROR_SECINS + 39)  
#define ERROR_SECINS_GET_GROUP              (ERROR_SECINS + 40)  
#define ERROR_SECINS_PROCESS_FORK           (ERROR_SECINS + 41)  
#define ERROR_SECINS_CHECK_GRSEC            (ERROR_SECINS + 42)  
#define ERROR_SECINS_START_GRSEC            (ERROR_SECINS + 43)  
#define ERROR_SECINS_FORK                   (ERROR_SECINS + 44)  
#define ERROR_SECINS_GET_RESOURCE           (ERROR_SECINS + 45)  
#define ERROR_SECINS_SETSID                 (ERROR_SECINS + 46)  
#define ERROR_SECINS_START_LINE_TOO_LONG    (ERROR_SECINS + 47)  
#define ERROR_SECINS_START_LINE_INVALID     (ERROR_SECINS + 48)  
#define ERROR_SECINS_START_ENTRY_UNKNOWN    (ERROR_SECINS + 49)  
#define ERROR_SECINS_EXEC_APP               (ERROR_SECINS + 50)  
#define ERROR_SECINS_MODE_APP               (ERROR_SECINS + 51)  
#define ERROR_SECINS_SYMLINK                (ERROR_SECINS + 52)  
#define ERROR_SECINS_INVALID_INSTALL_FILE   (ERROR_SECINS + 53)  
#define ERROR_SECINS_EXTRACT_INSTALL_FILE   (ERROR_SECINS + 54)  
#define ERROR_SECINS_INVALID_PKG_FORMAT     (ERROR_SECINS + 55)  
#define ERROR_SECINS_AUTH_GID               (ERROR_SECINS + 56)  
#define ERROR_SECINS_ADD_CERT               (ERROR_SECINS + 57)  
#define ERROR_SECINS_PATCH_VERSION          (ERROR_SECINS + 58)  
#define ERROR_SECINS_PATCH                  (ERROR_SECINS + 59)  
#define ERROR_SECINS_START_SVCSEC           (ERROR_SECINS + 60)  
#define ERROR_SECINS_INVALID_CERT           (ERROR_SECINS + 61)  
#define ERROR_SECINS_PUT_ENV                (ERROR_SECINS + 62)  
#define ERROR_SECINS_SET_USER               (ERROR_SECINS + 63)  
#define ERROR_SECINS_INVALID_PKG_CATEGORY   (ERROR_SECINS + 64)  
#define ERROR_SECINS_INVALID_CMD            (ERROR_SECINS + 65)  
#define ERROR_SECINS_INVALID_BUNDLE_FILE    (ERROR_SECINS + 66)  
#define ERROR_SECINS_EXTRACT_BUNDLE_CONTROL (ERROR_SECINS + 67)  
#define ERROR_SECINS_INVALID_BUNDLE_USER    (ERROR_SECINS + 68)  
#define ERROR_SECINS_INVALID_PKG_USER       (ERROR_SECINS + 69)  
#define ERROR_SECINS_NO_BUNDLE              (ERROR_SECINS + 70)  
#define ERROR_SECINS_OPEN_SOCKET            (ERROR_SECINS + 71)  
#define ERROR_SECINS_BIND_FAILURE           (ERROR_SECINS + 72)  
#define ERROR_SECINS_UNKNOWN_MSG            (ERROR_SECINS + 73)  
#define ERROR_SECINS_MSG_SND                (ERROR_SECINS + 74)  
#define ERROR_SECINS_MSG_RCV                (ERROR_SECINS + 75)  
#define ERROR_SECINS_MSG_SIZE               (ERROR_SECINS + 76)  
#define ERROR_SECINS_RESP_SIZE              (ERROR_SECINS + 77)  
#define ERROR_SECINS_INVALID_RESP           (ERROR_SECINS + 78)  
#define ERROR_SECINS_FILE_READ              (ERROR_SECINS + 79)  
#define ERROR_SECINS_FILE_RENAME            (ERROR_SECINS + 80)  
#define ERROR_SECINS_USER_APP_START         (ERROR_SECINS + 81)  
#define ERROR_SECINS_GET_CWD                (ERROR_SECINS + 82)  
#define ERROR_SECINS_INVALID_PARAM          (ERROR_SECINS + 83)  
#define ERROR_SECINS_NOT_ALLOWED            (ERROR_SECINS + 84)  
#define ERROR_SECINS_SYSMODE_START          (ERROR_SECINS + 85)  
#define ERROR_SECINS_INVALID_PKGLIST        (ERROR_SECINS + 86)  
#define ERROR_SECINS_SOCK_LISTEN            (ERROR_SECINS + 87)  
#define ERROR_SECINS_CONNECT_FAIL           (ERROR_SECINS + 88)  
#define ERROR_SECINS_PATCH_APPLIED          (ERROR_SECINS + 89)  
#define ERROR_SECINS_RELOAD_GRSEC           (ERROR_SECINS + 90)  
#define ERROR_SECINS_CREATE_GRSEC_FILE      (ERROR_SECINS + 91)  
#define ERROR_SECINS_GRSEC_SUBJECT          (ERROR_SECINS + 92)  
#define ERROR_SECINS_INVALID_POLICY_FILE    (ERROR_SECINS + 93)  
#define ERROR_SECINS_INVALID_OBJECT         (ERROR_SECINS + 94)  
#define ERROR_SECINS_INVALID_OBJECT_MODE    (ERROR_SECINS + 95)  
#define ERROR_SECINS_NO_POLICY_FILE         (ERROR_SECINS + 96)  
#define ERROR_SECINS_INVALID_CAPABILITY     (ERROR_SECINS + 97)  
#define ERROR_SECINS_OBJECT_NOT_HIDDEN      (ERROR_SECINS + 98)  
#define ERROR_SECINS_OBJECT_NOT_FOUND       (ERROR_SECINS + 99)  
#define ERROR_SECINS_FILE_CAPS              (ERROR_SECINS + 100) 
#define ERROR_SECINS_SUBJECT_MODE           (ERROR_SECINS + 101) 
#define ERROR_SECINS_REMOVE_USER            (ERROR_SECINS + 102) 
#define ERROR_SECINS_REMOVE_GROUP           (ERROR_SECINS + 103) 
#define ERROR_SECINS_PID_NOT_FOUND          (ERROR_SECINS + 104) 
#define ERROR_SECINS_SIGNAL_FAIL            (ERROR_SECINS + 105) 
#define ERROR_SECINS_LOAD_VSS               (ERROR_SECINS + 106) 
#define ERROR_SECINS_UNSIGNED_PKG_USER      (ERROR_SECINS + 107) 
#define ERROR_SECINS_PATCH_AUTH             (ERROR_SECINS + 108) 
#define ERROR_SECINS_EXTRACT_PATCH_CONTROL  (ERROR_SECINS + 109) 
#define ERROR_SECINS_GRSEC_ENTRY_UNKNOWN    (ERROR_SECINS + 110) 
#define ERROR_SECINS_FILE_DELETE            (ERROR_SECINS + 111) 
#define ERROR_SECINS_NO_SRC_PKG             (ERROR_SECINS + 112) 
#define ERROR_SECINS_NO_SRC_BUNDLE          (ERROR_SECINS + 113) 
#define ERROR_SECINS_BUNDLE_VERSION         (ERROR_SECINS + 114) 
#define ERROR_SECINS_BUNDLE_SRCVERSION      (ERROR_SECINS + 115) 
#define ERROR_SECINS_WRONG_BUNDLE           (ERROR_SECINS + 116) 
#define ERROR_SECINS_TOKEN_FAIL             (ERROR_SECINS + 117) 
#define ERROR_SECINS_BUNDLE_CHANGED         (ERROR_SECINS + 118) 
#define ERROR_SECINS_BUNDLE_NOT_CHANGED     (ERROR_SECINS + 119) 
#define ERROR_SECINS_MANU_MODE              (ERROR_SECINS + 120) 
#define ERROR_SECINS_MANU_MODE_REQD         (ERROR_SECINS + 121) 
#define ERROR_SECINS_INVALID_UMASK          (ERROR_SECINS + 122) 
#define ERROR_SECINS_FILE_SEEK              (ERROR_SECINS + 123) 
#define ERROR_SECINS_MODULE_NOT_FOUND       (ERROR_SECINS + 124) 
#define ERROR_SECINS_INVALID_HMAC_CFG       (ERROR_SECINS + 125) 
#define ERROR_SECINS_HMAC_SETUP             (ERROR_SECINS + 126) 
#define ERROR_SECINS_HMAC_CHECK             (ERROR_SECINS + 127) 
#define ERROR_SECINS_CERT_NOT_FOUND         (ERROR_SECINS + 128) 
#define ERROR_SECINS_BUNDLE_NOT_FOUND       (ERROR_SECINS + 129) 
#define ERROR_SECINS_TARGET_ERROR           (ERROR_SECINS + 130) 
#define ERROR_SECINS_REG_CALLBACK           (ERROR_SECINS + 131) 
#define ERROR_SECINS_SET_RESOURCE           (ERROR_SECINS + 132) 
#define ERROR_SECINS_PATCHLIST_FILE         (ERROR_SECINS + 133)
#define ERROR_SECINS_SHA_COMPUTE            (ERROR_SECINS + 134)
#define ERROR_SECINS_SHA_MISMATCH           (ERROR_SECINS + 135)
#define ERROR_SECINS_COMPRESS_PKG           (ERROR_SECINS + 136)
#define ERROR_SECINS_FILE_COPY              (ERROR_SECINS + 137)
#define ERROR_SECINS_IS_APP_DEV             (ERROR_SECINS + 138)
#define ERROR_SECINS_APP_DEV_TOKEN          (ERROR_SECINS + 139)

#define ERROR_SECINS_APP_DEV_CERTS          (ERROR_SECINS + 140)
#define ERROR_SECINS_DEL_CERTFILE           (ERROR_SECINS + 141)
#define ERROR_SECINS_APP_DEV_SVID           (ERROR_SECINS + 142)

#define ERROR_SECINS_SPARSE_PATCH           (ERROR_SECINS + 143)

#define ERROR_SECINS_HMAC_KEY_TOO_LONG      (ERROR_SECINS + 146)
#define ERROR_SECINS_VER_NOT_SUPPORTED      (ERROR_SECINS + 147)

#define ERROR_SECINS_NO_KEY_ELEMENT         (ERROR_SECINS + 148)
#define ERROR_SECINS_NOT_SUPPORTED          (ERROR_SECINS + 149)
#define ERROR_SECINS_PARSING_ERROR          (ERROR_SECINS + 150)
#define ERROR_SECINS_INVALID_CMS            (ERROR_SECINS + 151)
#define ERROR_SECINS_INSTALL_TR34JSON       (ERROR_SECINS + 152)
#define ERROR_SECINS_INVALID_RETVAL         (ERROR_SECINS + 153)

#define ERROR_SECINS_LOW_LAYER_INSTALL      (ERROR_SECINS + 154) /* Low layer images failed to install */
#define ERROR_SECINS_NO_SN_MATCH            (ERROR_SECINS + 155) /* VRK bundle did not contain file for this unit */
#define ERROR_SECINS_INSTALL_BUSY_SYSTEM    (ERROR_SECINS + 156) /* Do not install as the critical section on by some user */
#define ERROR_SECINS_DL_ERROR               (ERROR_SECINS + 157) /* Dynamic lib errors */
#define ERROR_SECINS_READ_LL_IMAGE          (ERROR_SECINS + 158) 
#define ERROR_SECINS_FILE_TRUNCATE          (ERROR_SECINS + 159) 
#define ERROR_SECINS_FILE_MMAP              (ERROR_SECINS + 160)
#define ERROR_SECINS_FILE_STAT              (ERROR_SECINS + 161)

#define ERROR_SECINS_INSTSTAT_FAIL          (ERROR_SECINS + 162)
#define ERROR_SECINS_CRITSEC_OP_FAILED      (ERROR_SECINS + 163)
#define ERROR_SECINS_VOS2_SIGNER_NOT_FOUND  (ERROR_SECINS + 164)
#define ERROR_SECINS_INVALID_DLLIST         (ERROR_SECINS + 165)

#define ERROR_SECINS_DAEMON_START_FAILED    (ERROR_SECINS + 166)
#define ERROR_SECINS_DAEMON_STOP_FAILED     (ERROR_SECINS + 167)
#define ERROR_SECINS_DAEMON_RESTART_FAILED  (ERROR_SECINS + 168)
#define ERROR_SECINS_DAEMON_RELOAD_FAILED   (ERROR_SECINS + 169)

#define ERROR_SECINS_NO_SPACE           (ERROR_SECINS + 170)

#define ERROR_SECINS_PREINST            (ERROR_SECINS + 171) /* Preinst script execution failure */


#define SECINS_BIT(n)                       (1 << n)

#define SECINS_REBOOT_REQD_BIT          SECINS_BIT(0) 
#define SECINS_RESTART_APPS_REQD_BIT    SECINS_BIT(1) 
#ifdef RAPTOR
#define SECINS_L1BOOT_REQD_BIT          SECINS_BIT(2)
#endif

#ifdef RAPTOR
#define SECINS_FORCE_INSTALL            SECINS_BIT(0) 
#define SECINS_FORCE_RESTART_APPS       SECINS_BIT(1) 
#define SECINS_FORCE_REBOOT             SECINS_BIT(2) 
#endif

#define MAX_PATH_FILE               256

// if SYSMODE_BTN_SEM changed - grsec policy should be changed as well
#define SYSMODE_BTN_SEM     "/si_button_block_sem"

#define NORMALLY_TERMINATED         0x01 
#define KILLED_BY_SIGNAL            0x02 
#define UNKOWN_CAUSE_OF_DEATH       0x03 
/*
 * @name SI Device run modes.
 * The run mode is mainly determined by the hardware SVID value but may also
 * be set by SI configuration items.
 */
#define SECINS_DEVICE_MODE_MANU         0
#define SECINS_DEVICE_MODE_PROD         1
#define SECINS_DEVICE_MODE_APPDEV       2
#define SECINS_DEVICE_MODE_OSDEV        3

/* @name SI Certificate tree types */
#define SECINS_PROD_CERT_TREE           0
#define SECINS_OSDEV_CERT_TREE          1
#define SECINS_APPDEV_CERT_TREE         2

/* @name SI Daemon action types */
#define SECINS_DAEMON_START             0
#define SECINS_DAEMON_STOP              1
#define SECINS_DAEMON_RESTART           2
#define SECINS_DAEMON_RELOAD            3

/* @name Device Reboot supported modes */
enum boot_modes {
    BOOT_MODE_NA = -1,
    BOOT_MODE_FLASH = 1,
    BOOT_MODE_RESCUE = 4,
};

typedef struct
{
    int curr_device_mode;
    int hw_device_mode;
    int cert_tree_type;

} SecinsDeviceModeInfo;

typedef struct
{
    int cause_of_death;
    int death_details;
    pid_t pid;
} child_death_cert;


#define SECINS_MAX_PATH             256

#define SECINS_MAX_USERNAME_LEN         16
#define SECINS_MAX_GROUPNAME_LEN        16

typedef struct
{
    int start_uid;
    int num_uids;
    int start_gid;
    int num_gids;
} UID_GID_RANGE;

# define HMAC_MAX_HMAC      32
# define EVP_MAX_KEY        64

typedef struct
{
    unsigned char key[HMAC_MAX_HMAC];
    unsigned int keysize;
    int mode;
} SYS_INFO_OS_HMAC_SHA256_tx;

typedef struct
{
    unsigned char hmac[HMAC_MAX_HMAC];
    unsigned int hmacsize;
} SYS_INFO_OS_HMAC_SHA256_rx;

#define SECINS_MAX_DAEMON_NAME 64

typedef struct
{
    char daemon[SECINS_MAX_DAEMON_NAME];
    int action;
} SecinsDaemonAction;


typedef struct
{
    unsigned int inflags;
    int dlpathslength;
    char dlpaths[];
} INST_DATA;


SecinsPkgInfo *Secins_read_pkglist_entry(SecinsPkgInfo *pkginfo, int pkginfosize);


void Secins_close_pkglist(void);


SecinsBdlInfo *Secins_read_bdllist_entry(SecinsBdlInfo *bdlinfo, int bdlinfosize);


void Secins_close_bdllist(void);


int Secins_echo_test(char *echostr, int size, const char *str);


int Secins_daemon_action(char *daemonstr, int action);


int Secins_install_pkgs(int *reboot_reqd);


int Secins_install_software(int *outflags, int inflags);


int Secins_free_resources_install_software(const char *dlfilepath, int inflags);

int Secins_install_software_extended(const char **dlfilepaths, int nbdlfiles, int inflags);

int Secins_precheck_software(const char **dlfilepaths, int nbdlfiles, int *outflags, int inflags);

int Secins_match_pkg_user(const char *path, const char *username);

int Secins_install_json_tr34_key_payload(const char *json_str);


#define CONTAINER_MAX_NAME_SIZE 64

typedef struct
{
    char bundle_name[CONTAINER_MAX_NAME_SIZE];  
    char package_name[CONTAINER_MAX_NAME_SIZE]; 
} SECINS_ERROR_INFO;


void Secins_get_last_error_info(SECINS_ERROR_INFO *info);


void Secins_clear_last_error_info(void);


int Secins_reboot(void);



int Secins_reboot_to_mode(enum boot_modes mode);


int Secins_hmac_check(void);


int Secins_poweroff(void);


int Secins_abort_poweroff(void);


int Secins_format_card(void);


int Secins_start_app(const char *file);


int Secins_start_user_apps(void);


int Secins_start_sysmode(void);


int Secins_disable_sysmode(void);


int Secins_enable_sysmode(void);


int Secins_get_dev_mode(int *dev_mode);


int Secins_get_uid_gid_range(UID_GID_RANGE *range, int rangesize);


int Secins_add_group(int gid, const char *groupname);


int Secins_add_user(int uid, const char *username, int gid);


int Secins_add_group_member(int gid, int uid);


int Secins_remove_user(int uid);


int Secins_remove_group(int gid);


int Secins_start_app_uid(pid_t *app_pid, const char *cmdline, int uid, int gid);


int Secins_exec_app_uid(pid_t *app_pid,
                        char *argp[],
                        char *envp[],
                        int uid,
                        int gid);


int Secins_signal_app(pid_t pid, int sig);

int Secins_chown(const char *path, int uid, int gid);


int Secins_remove_bdl_entry(SecinsBdlInfo *bdlinfo);


int Secins_removeall_user(void);


int Secins_remove_file_bundle(const char *file, const char *pkgtype);


int Secins_remove_user_bundle(const char *bundlename);


const char *Secins_strerror(int err);


int Secins_secondary_share_gid(void);


int Secins_get_secondary_share_group(char *groupname, int namesize);


gid_t Secins_share_gid(void);


gid_t Secins_system_gid(void);


gid_t Secins_users_gid(void);


unsigned int Secins_user_app(void);


unsigned int Secins_sys_app(void);

gid_t Secins_usrsys_gid(uid_t uid);


gid_t Secins_sysmode_share_gid(void);


gid_t Secins_config_file_share_gid(const char *configfile);


int Secins_start_app_argv(pid_t *app_pid,
                          char *argp[],
                          char *envp[],
                          int (*cb)(child_death_cert cert, void *arg),
                          void *arg);


int Secins_kill_app_pid(pid_t app_pid, int sig, int *status);


int Secins_delete_all_users(void);


int Secins_hmac_sha256(uint8_t* hash, int* hash_size, uint8_t* keyin, int keyinsz, int mode);


int Secins_block_on_sysmode_button(void);


int Secins_get_reboot_hours(int *hours, int rpc_timeout);


int Secins_get_json_lowlayer_digests(char **json_str_buf);

int Secins_get_install_status(char **json_str_buf);

int Secins_get_device_mode_info(SecinsDeviceModeInfo *device_mode_info);

int Secins_get_slp_tainted_status(int * tainted);


int Secins_add_cert(const char *certfile);

int Secins_app_dev_convert(const char *token_file,
                           const char *token_sig,
                           const char *cert_dir);
int Secins_ExecuteToken(const char *token,
        const char *token_signature,
        const char *token_type,
        int options);

#ifdef __cplusplus
}
#endif

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:27 +0100
