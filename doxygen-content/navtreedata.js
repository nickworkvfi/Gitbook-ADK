/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ADK-Programmers-Guides", "index.html", [
    [ "Application Development Kit (ADK)", "index.html", "index" ],
    [ "ADK Commerce Platform Runtime", "pg_cpr_solutions_guide.html", [
      [ "Preface", "pg_cpr_solutions_guide.html#sec_cpr_preface", [
        [ "Audience", "pg_cpr_solutions_guide.html#subsec_cpr_Audience", null ],
        [ "System Specifications", "pg_cpr_solutions_guide.html#subsec_cpr_System_Specifications", null ]
      ] ],
      [ "Overview", "pg_cpr_solutions_guide.html#sec_cpr_Overview", null ],
      [ "Concepts", "pg_cpr_solutions_guide.html#sec_cpr_Concepts", [
        [ "Application Types", "pg_cpr_solutions_guide.html#subsec_cpr_AppTypes", [
          [ "Payment Applications", "pg_cpr_solutions_guide.html#subsubsec_cpr_AppTypes_PayApps", null ],
          [ "CP Applications", "pg_cpr_solutions_guide.html#subsubsec_cpr_AppTypes_CPApps", null ],
          [ "CP Services", "pg_cpr_solutions_guide.html#subsubsec_cpr_AppTypes_CPServices", null ]
        ] ],
        [ "Trigger Points", "pg_cpr_solutions_guide.html#subsec_cpr_TriggerPoints", null ],
        [ "CP Application Lifecycle", "pg_cpr_solutions_guide.html#subsec_cpr_AppLifeCycle", null ],
        [ "Application Manifests", "pg_cpr_solutions_guide.html#subsec_cpr_AppManifests", [
          [ "Manifest Attributes for CP Application / Services", "pg_cpr_solutions_guide.html#subsubsec_cpr_AppCPManifests", null ],
          [ "Manifest Attributes for Native Applications", "pg_cpr_solutions_guide.html#subsubsec_cpr_AppNativeManifests", null ]
        ] ],
        [ "Launch of CP applications", "pg_cpr_solutions_guide.html#subsec_cpr_LaunchStrategy", [
          [ "Triggered Launch", "pg_cpr_solutions_guide.html#subsubsec_cpr_LaunchStrategyTriggeredLaunch", null ],
          [ "Manual Launch", "pg_cpr_solutions_guide.html#subsubsec_cpr_LaunchStrategyManualLaunch", null ],
          [ "Automatic Launch at System Startup", "pg_cpr_solutions_guide.html#subsubsec_cpr_LaunchStrategyAutoLaunch", null ],
          [ "Stopping a CP Application", "pg_cpr_solutions_guide.html#subsubsec_cpr_LaunchStrategyStop", null ],
          [ "CP Application Start and Stop Notifications", "pg_cpr_solutions_guide.html#subsubsec_cpr_LaunchStrategyNotify", null ]
        ] ]
      ] ],
      [ "Developing CP Applications", "pg_cpr_solutions_guide.html#sec_cpr_DevCPApps", [
        [ "Elements of a CP application", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_CPApps", null ],
        [ "HTML/CSS Support", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_HTMLCSS", null ],
        [ "JavaScript Support", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_JavaScript", null ],
        [ "Registering for Trigger Points", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_TriggerPoints", null ],
        [ "Data Handling", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_Data", [
          [ "The ARGV Context Object", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevCPApps_Context", null ],
          [ "Session Data", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevCPApps_Session", null ],
          [ "Persistent Data", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevCPApps_Persisten", null ]
        ] ],
        [ "Page Navigation", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_Navigation", null ],
        [ "Exiting the CP Application", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_Exiting", null ],
        [ "Interacting with External Servers", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_Comms", null ],
        [ "Sending and Receiving Notifications", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_Notifications", [
          [ "Accessing the Trigger Payload", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevCPApps_AccessTriggerPayload", null ],
          [ "Synchronous send and receive", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevCPApps_NotifySync", null ],
          [ "Asynchronous send", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevCPApps_NotifyAsync", null ]
        ] ],
        [ "Printing", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_Printing", [
          [ "Direct Printing", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevCPApps_PrintDirect", null ],
          [ "Printing to Buffer", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevCPApps_PrintToBuffer", null ]
        ] ],
        [ "Using Text Catalogues", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_TextCatalogs", null ],
        [ "Console Logs", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_ConsoleLog", null ],
        [ "Resource constraints", "pg_cpr_solutions_guide.html#subsec_cpr_DevCPApps_ResourceConstraints", null ]
      ] ],
      [ "Creating CP-compliant Payment Applications", "pg_cpr_solutions_guide.html#sec_cpr_CPCompliantPayApps", [
        [ "Required Integration Steps", "pg_cpr_solutions_guide.html#subsec_cpr_DevPayApps_Notifications", null ],
        [ "Provided APIs for Payment Applications", "pg_cpr_solutions_guide.html#subsec_cpr_DevPayApps_AvailableAPIs", [
          [ "Notification System Interfaces", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevPayApps_AvailableAPIs_Notifications", null ],
          [ "MAC interfaces", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevPayApps_AvailableAPIs_MAC", null ]
        ] ],
        [ "Use Cases", "pg_cpr_solutions_guide.html#subsec_cpr_DevPayApps_IntegrationSteps", [
          [ "Initialization", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevPayApps_Init", null ],
          [ "Trigger Events with Response", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevPayApps_EvtWithResp", null ],
          [ "Trigger Events without Response", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevPayApps_EvtWithoutResp", null ],
          [ "Manual Launch from Payment Application", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevPayApps_ManualLaunchFromApp", null ],
          [ "Manual Launch from MAC Desktop", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevPayApps_ManualLaunchFromMAC", null ],
          [ "Device Request from CP Application", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevPayApps_CPDeviceRequest", null ],
          [ "Multiple CP Applications at the same Trigger Point", "pg_cpr_solutions_guide.html#subsubsec_cpr_DevPayApps_MultiCPApps", null ]
        ] ]
      ] ],
      [ "CP Installer", "pg_cpr_solutions_guide.html#sec_cpr_CPInstaller", [
        [ "CP package format", "pg_cpr_solutions_guide.html#subsec_cpr_PackageFormat", null ],
        [ "CP Package Installation", "pg_cpr_solutions_guide.html#subsec_cpr_PkgInstall", null ],
        [ "\"CP Downloader\" Application", "pg_cpr_solutions_guide.html#subsec_cpr_CPDownloader", null ]
      ] ],
      [ "Connection to VFI Cloud", "pg_cpr_solutions_guide.html#sec_cpr_CloudConnection", [
        [ "Cloud Proxy", "pg_cpr_solutions_guide.html#subsec_cpr_CloudProxy", [
          [ "Proxy Configuration File", "pg_cpr_solutions_guide.html#sec_Cloud_Proxy_Configuration", null ],
          [ "Error Handling", "pg_cpr_solutions_guide.html#subsubsec_cpr_Error_Handling", null ]
        ] ],
        [ "Logging Service", "pg_cpr_solutions_guide.html#subsec_cpr_LogService", null ],
        [ "Activation Service", "pg_cpr_solutions_guide.html#subsec_cpr_ActivationService", null ]
      ] ]
    ] ],
    [ "Legal Notes", "legal_notes_page.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"__logf_8h.html",
"_e_m_v___c_t_l_s___interface_8h.html#a18329cbf6b30571aa5b666365b9ab6a1",
"_i_transaction_data_provider_8h.html#abf880d7292973573c80d9fd18ea77453a2a5e1608827ba47ba87f1e4078e24f91",
"_v_h_q_utils___app_interface_8c.html#ae6f81bce62db1e12d96544e33cbfa293",
"_v_h_q_utils__shared_8c.html#af4996d4bb0ec6ed38830f98c2b7ef9bc",
"_v_h_q_xml_utils_8c.html#a398574e582c4c94496f051a8957bdde1",
"class_config.html#af4901a4e702173b342dc77a8b3e061d8",
"classlibsdi_1_1_dialog.html#a83a548ca4c3d5b5a73b8ce20bd424d27",
"classm_a_d_k___p_p___prot.html#ad77822a0ad67023ae49897b8b80c151dae8a4ddbdf955d29d8db6d3a41d2a0512",
"classsdi_1_1_time_stamp.html#a8c53f124e0a56739dddf21f5dbc09a70",
"classvficpl_1_1_transaction_data_provider.html#adb3c398a40cb9fc5662780c747a166ad",
"classvfiipc_1_1_t_l_s.html#ae4ffb5366b5b327f89b3b4624823e4c4",
"crdsync_8h_source.html",
"disp_8h.html#abf6d3a2d716eba006c1010658bfe14f0",
"filesystem_8cpp.html#aecaf6a9545fa815deb4b8e64e144ce43a836a3a9c2556f7f29455d5fc7a9cf19c",
"functions_h.html",
"group___a_d_k___l_e_d___d_e_f_i_n_e_s.html#ga7735366355c1ae515cc555943a8d275a",
"group___a_d_k___r_e_t___c_o_d_e.html#gaa5ed8ecc7a31f36a8927e6e258187810",
"group___a_d_k___t_r_x___e_x_e_c.html#a58e0122d8211771ecfc3b84680d7992d",
"group___a_d_k___x_m_l___t_a_g_s.html#ga1bbb2b483834683506e0bbd644dba730",
"group___a_d_k___x_m_l___t_a_g_s.html#ga5369c41b68e46cc19c325115912bac32",
"group___a_d_k___x_m_l___t_a_g_s.html#ga924fa1a4ca6efcdc90ea3ba9891def95",
"group___a_d_k___x_m_l___t_a_g_s.html#gad466b4b062f6af80b154ced47fe4c5ab",
"group___a_p_p_l_i___c_o_n_f___m_o_d_e.html#ga7bc8a670f539230cb315ba2cb7442ea8",
"group___c_l___c_o_n_t___o_f_f_l___o_p_t_i_o_n_s.html#ga408e90eec979417dfff59e16fb34bd7f",
"group___c_l_t_r_x___p_a_s_s_t_r_o_u_g_h.html#ga680b72a9699246bd218b6bf66077e669",
"group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.html#ga06963aab97b48c9799d15ce84b2acb71",
"group___d_e_f___a_d_k___d_e_b_u_g___e_x_i_t.html#gaae06ec5ea8b8636a7e3da935832db02c",
"group___d_e_f___c_b_k___d_o_m_a_p_p.html#ga5a401e87789e333246ddd1b39755d004",
"group___d_e_f___c_o_n_f___a_p_p_l_i.html#a8951efd96bfad7c790084e6aee4f2bb7",
"group___d_e_f___c_o_n_f___a_p_p_l_i.html#struct_e_m_v___c_t_l_s___a_k___d_r_l___s_t_r_u_c_t",
"group___d_e_f___d_f61___t_r_a_n_s_r_e_s.html#ga53cf57b0f0e8f8f68ab2eb3172340d25",
"group___d_e_f___f_l_o_w___i_n_p_u_t.html",
"group___d_e_f___i_n_p_u_t___a_p_p_l_i.html#ga66b7fd71d420257e69f289b2dc56d5e7",
"group___d_e_f___i_n_p_u_t___a_p_p_l_i___e_k.html#gaa42b5556cf415db82327c8f8a7ece5e3",
"group___d_e_f___i_n_p_u_t___a_p_p_l_i___m_k.html#gacd90371fb73b993c9a18c24bdf11441d",
"group___d_e_f___i_n_p_u_t___a_p_p_l_i___w_k.html#ga9e328cc270643afd2ec99ecb03f8157b",
"group___d_e_f___k_e_r_n_e_l___i_d.html#ga3f55cc1e6d58675029002362bd931d46",
"group___e_m_v_c_o___t_a_g_s.html#ga4230108db4010ae0ac2b6db706eb8f5a",
"group___e_m_v_c_o___t_a_g_s.html#gaab57f1b001e401de3ec7d24b90f378a7",
"group___f_u_n_c___f_l_o_w.html#ga2b4820be53959b56fb7f672bd54f4e63",
"group___m_e_r_c_h___i_n_f_o.html#ga322e5af777fcd826a43cabd502877e16",
"group___s_p_e_c_i_a_l___t_r_x_s.html#ga5f66d7a538a6c040c5a82ca9715938cb",
"group___t_e_c___d_a_t_a___t_a_g_s.html#gafd4dad5d39906ccf5556501baea1e29d",
"group___t_l_v___c_b_c_k___t_l_v.html#ga0658b15204497033996cde25fa51de70",
"group___u_p_d_a_t_e___t_a_g_s___o_p_t_i_o_n_s.html",
"group___v_e_r_i___l1___d_u_m_p___t_a_g_s.html#ga7d6bf00e71a77815c0a60e0c9deef565",
"group___v_e_r_i___l1___d_u_m_p___t_a_g_s.html#gafc0044ffc8346e6ca7927968b06f1ca8",
"group___v_e_r_i___p_r_i_m___t_a_g_s.html#ga922c89b4319a58b5df3533a54dd21cc7",
"group___v_i_s_a___t_a_g_s.html#ga730c9d269d7399e534a6d1aad81f4fef",
"group__sdicallback.html#gae2dc52ee22f4abe358ca411baaeef759",
"group__sdiemvctls.html#ga7d2ce83ac34e16de199bb35aad617aad",
"group__sdisystem.html#ga21ec43a34504219da1656b945530b231",
"group__vss.html#ga3879e6c5999e10831396eb49c5eef807",
"gui_8h.html#a3a15c62f2a57d17c7cf9d3e87b284267",
"gui__template_8h.html#abc2e22a493f5dbdb8bfad06dd187d51a",
"leds_8h.html#ab6831a7d06c0a2bc69f9b024f6445a80a7b834594a2fa42d8d30faa3577421f99",
"libcom_8h.html#a23c4e2ad22ebe7b8a5595e94ff49f969",
"libcom_8h.html#a349d5a976cc39e5a11c8c6fa43b2f3f4",
"libcom_8h.html#a73fa559c069856b86c692f6ef2db0503a096e7c30040e4efbcc67e45b18aa59e0",
"libcom_8h.html#a875af98e1774bedacdd8e84d64ffdc99a85b4684bd6ce375b1ff9f2a2cf034c13",
"libcom_8h.html#ad7c2e1cb200073ed64c64285a5f37231",
"libsec_8h.html#a85ada2e35c1d1cbf60c05454b88b4b44",
"libsecins_8h.html#aa41f96e027710a23066a08c1917430a4",
"mac_8h.html#a343256ae5f150542a1f6a38fcaca216caf0bdc46094bdcbb96d29c4a145e2fd33",
"msr__common_8h.html#struct_m_s_r___track_data4",
"namespacevficpl.html#ad19513ebf5181e1f8f0774b876eb42ee",
"notify_8h.html#a80d9206c7e76f24c2e2176308dbc3e06",
"pg_agt_users_guide.html#subsubsec_agt_tms_dataAccessorCallback_Returns",
"pg_com_users_guide.html#sec_com_APPENDIX_P_POWER_MODE",
"pg_device_mode_conversion.html#sec_device_mode_conversion_VOS3",
"pg_emv_contactless_users_guide.html#subsubsec_emv_ctls_concept_gui",
"pg_gui_users_guide.html#gui_javascript_console",
"pg_ipc_users_guide.html#sec_ipc_notification_service",
"pg_nfc_users_guide.html#subsec_adk_nfc_client_status",
"pg_printer_users_guide.html#subsubsec_prt_Programming_Programming_Overview_HTML_Resources_CSS_Support",
"pg_sdi_users_guide.html#subsubsec_sdi_nfc_mifare_restore",
"pg_sound_users_guide.html#snd_hw_support",
"pg_vos3_architecture.html#vos3_secure_boot_and_system_verification",
"pi_2src_2sdiapi_2sdi__tags_8h.html#ac9842112c341daedac40f79bbfdd65a4a013f3021efb4fe384a78c20e562d1dc6",
"pi_2src_2sdiapi_2sdi__tags_8h.html#ac9842112c341daedac40f79bbfdd65a4a693340c0f73a0cf1db2435084e77e9e0",
"pi_2src_2sdiapi_2sdi__tags_8h.html#ac9842112c341daedac40f79bbfdd65a4ada2dcc7117e271ec14668a9feb1b63c5",
"sdi__emvbits_8h.html#a0410f3919a081084ec7990094952a466a588e15d40fa2fe9044f3253d23f37441",
"sdi__enum_8h.html#a063ad187f3b6a77eca82feb4065ed489a2e165b58fb4bf74d7629a586dc5f5ae7",
"sdi__enum_8h.html#a28287671eaf7406afd604bd055ba4066a5152853e727462cd9773dff4efa0e6be",
"sdi__enum_8h.html#a28287671eaf7406afd604bd055ba4066ab5d1ab365730edc6ab9d03002f87abf1",
"sdi__enum_8h.html#a53e0b4c578c61cc0de3c3daa5fee72b6a208ec2c5e2391b98c8f49cb89b5fe22b",
"sdi__enum_8h.html#a59f74bf9ae55ffd390b8806b2559021cad9d72c391a58dbe765ec1932ee19ebb5",
"sdi__enum_8h.html#a904e5abfa09e53cda6dd4c6ba5fa5b02a7ca0eacce76fd68f2513cf6fef6b39af",
"sdi__enum_8h.html#ad10397eed245df0858717fd542bd73f5aa3342e8e4536e986b3670cc9340b4437",
"sdi__nfc_8h.html#ac17cf22c461d04ea8daf5f2993e559d9",
"sec2_8h.html#a453e6542f2cb31abde608e81d8ba6837ad8f3c27adce11ca7c9e5da8aeed6c300",
"seclogging_8h.html#a1db286735c73f7c1f2290c74f5e73324",
"src_2sdi__tags_8h.html#af3effdde01482a170b1328c74f9037d2",
"structvfisdi_1_1_e_m_v_conf.html#a07f7cf7609d9babc5ee6e7a0ad34767f",
"structvfisdi_1_1_e_m_v_conf.html#aa3e4426435a48d2eab8cb87096ca4ed4",
"structvfisdi_1_1_e_m_v_txn.html#a5680b103f0e5a6ddf6635a307bd9ef16",
"svc__tms_8h.html#a14987582765ed6419e9dc74f9a1210d1",
"sys_2export_2sysinfo_2util_8h.html#a2f4d2c358c2c96255fe07dc63815c341",
"sysinfo_8h.html#a53e0b4c578c61cc0de3c3daa5fee72b6a7f2802bdba2a6b9d3ba1c039065cb851",
"syslogcmd_8h.html#aa5ce2add12b42175db5dbab55d3c384ca99788d1f27bac42d0c7bac63026c5959",
"titusstubs_8cpp.html#a94f6365a483e2fb1dd94af58b1a9df9e",
"ui_8h.html#ab30732de7d5a5c7664efde3ba8904adc",
"vfisyspm_8h.html#a40ea12a9b19b561cd7403fc1362c49d0afaf2574140a1d211dddea048530e3229",
"xmldoc_8h.html#af1dad427b690336ae7242fcb821b72b5afd96bfc4d811b8814771732135dbbddd"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';