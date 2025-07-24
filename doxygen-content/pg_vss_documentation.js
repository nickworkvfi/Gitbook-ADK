var pg_vss_documentation =
[
    [ "VeriShield Security Scripts (VSS)", "vss_documentation.html", [
      [ "VeriShield Security Scripts (VSS)", "vss_documentation.html#vss_documentation", null ],
      [ "Introduction", "vss_documentation.html#sec_vss_introduction", [
        [ "Purpose", "vss_documentation.html#subsec_vss_purpose", null ],
        [ "Organization", "vss_documentation.html#subsec_vss_organization", null ]
      ] ],
      [ "Overview", "vss_documentation.html#sec_vss_overview", null ],
      [ "Write a Security Script", "vss_documentation.html#sec_vss_write", [
        [ "Principle", "vss_documentation.html#subsec_vss_principle", null ],
        [ "List of Keywords", "vss_documentation.html#subsec_vss_list_of_keywords", null ],
        [ "Detailed Description of Keywords", "vss_documentation.html#subsec_vss_detailed_description_of_keywords", [
          [ "Configuration Instructions", "vss_documentation.html#subsubsec_vss_configuration_instructions", null ],
          [ "Key Definition Instructions", "vss_documentation.html#subsubsec_vss_key_definition_instructions", null ],
          [ "Macro Command Instructions", "vss_documentation.html#subsubsec_vss_macro_command_instructions", null ],
          [ "Restrictions", "vss_documentation.html#subsubsec_vss_macro_command_restrictionr", null ],
          [ "Chaining Mechanism", "vss_documentation.html#subsubsec_vss_macro_command_chaining_mechanism", null ],
          [ "Audit", "vss_documentation.html#subsubsec_vss_macro_command_audit", null ],
          [ "Script Examples", "vss_documentation.html#subsubsec_vss_macro_command_script_examples", null ]
        ] ],
        [ "Loading VSS keys in X9SWKB format", "vss_documentation.html#autotoc_md109", [
          [ "Introduction", "vss_documentation.html#autotoc_md110", null ],
          [ "Loading KBPK key", "vss_documentation.html#autotoc_md111", null ],
          [ "Implementation details", "vss_documentation.html#autotoc_md112", null ],
          [ "Implementation details", "vss_documentation.html#autotoc_md113", null ],
          [ "TDEA Key Derivation Binding (ID 'B')", "vss_documentation.html#autotoc_md114", [
            [ "KBPK loading", "vss_documentation.html#autotoc_md115", null ],
            [ "KBH loading", "vss_documentation.html#autotoc_md116", null ],
            [ "RCVD_MAC loading", "vss_documentation.html#autotoc_md117", null ],
            [ "KBEK and KBAK key derivation", "vss_documentation.html#autotoc_md118", null ],
            [ "Confidential data decryption", "vss_documentation.html#autotoc_md119", null ],
            [ "MAC verification", "vss_documentation.html#autotoc_md120", null ],
            [ "2TDEA Working Key (Session Key) loading into VSS slots", "vss_documentation.html#autotoc_md121", null ],
            [ "Working Key decryption with the plaintext Master Key", "vss_documentation.html#autotoc_md122", null ]
          ] ],
          [ "AES Key Derivation Binding (ID 'D')", "vss_documentation.html#autotoc_md123", [
            [ "KBPK loading", "vss_documentation.html#autotoc_md124", null ],
            [ "KBH loading", "vss_documentation.html#autotoc_md125", null ],
            [ "RCVD_MAC loading", "vss_documentation.html#autotoc_md126", null ],
            [ "KBEK and KBAK key derivation", "vss_documentation.html#autotoc_md127", null ],
            [ "Confidential data decryption", "vss_documentation.html#autotoc_md128", null ],
            [ "MAC verification", "vss_documentation.html#autotoc_md129", null ],
            [ "2TDEA Working Key (Session Key) loading into VSS slots", "vss_documentation.html#autotoc_md130", null ],
            [ "Working Key decryption with the plaintext Master Key", "vss_documentation.html#autotoc_md131", null ]
          ] ],
          [ "TDEA DUKPT key loading", "vss_documentation.html#autotoc_md132", [
            [ "Key unwrapping", "vss_documentation.html#autotoc_md133", null ],
            [ "KSN and key loading into VSS", "vss_documentation.html#autotoc_md134", null ],
            [ "Next Key generation", "vss_documentation.html#autotoc_md135", null ],
            [ "MAC calculation", "vss_documentation.html#autotoc_md136", null ]
          ] ],
          [ "AES DUKPT key loading", "vss_documentation.html#autotoc_md137", [
            [ "Key unwrapping", "vss_documentation.html#autotoc_md138", null ],
            [ "Key loading into VSS", "vss_documentation.html#autotoc_md139", null ]
          ] ],
          [ "Common functions", "vss_documentation.html#autotoc_md140", null ],
          [ "Script with several keys", "vss_documentation.html#autotoc_md141", null ]
        ] ]
      ] ],
      [ "Macro Command Execution", "vss_documentation.html#sec_vss_macro_command_execution", [
        [ "Security Script File Download", "vss_documentation.html#subsec_vss_security_script_file_download", [
          [ "In the SC 5000 PINpads", "vss_documentation.html#subsubsec_vss_in_the_sc_5000_pinpads", null ],
          [ "In the Vx Terminals", "vss_documentation.html#subsubsec_vss_in_the_vx_terminals", null ],
          [ "PIN Sessions", "vss_documentation.html#subsubsec_vss_pin_sessions", null ],
          [ "Security Script Library", "vss_documentation.html#subsubsec_vss_security_script_library", null ]
        ] ]
      ] ],
      [ "Tools", "vss_documentation.html#sec_vss_tools", [
        [ "Script Processor (VSS Compiler)", "vss_documentation.html#subsec_vss_script_processor", null ],
        [ "Signing Tool", "vss_documentation.html#subsec_vss_signing_tool", [
          [ "In The SC 5000 PINpad", "vss_documentation.html#subsubsec_vss_signing_tool_in_the_sc_5000_pinpad", null ]
        ] ],
        [ "Key Loading Tool", "vss_documentation.html#subsec_vss_key_loading_tool", null ]
      ] ],
      [ "VSS Key Installation APIs", "vss_documentation.html#sec_vss_loading_apis", [
        [ "VSS key encrypted with AuthEx", "vss_documentation.html#sec_vss_loading_authex", null ],
        [ "VSS key encrypted with Custom Asymmetric key", "vss_documentation.html#sec_vss_loading_custom_asymm", null ]
      ] ],
      [ "Appendix A: OP Code Table", "vss_documentation.html#sec_vss_appendix_a", null ],
      [ "Appendix B: VSS Troubleshooting Guide", "vss_documentation.html#sec_vss_appendix_b", [
        [ "VSS script fails to load", "vss_documentation.html#VSS_load_troubleshooting", null ],
        [ "VSS keys are wiped after the installation", "vss_documentation.html#VSS_keys_troubleshooting", null ],
        [ "VSS macro fails to execute", "vss_documentation.html#VSS_macro_troubleshooting", null ],
        [ "VSS script package fails to install", "vss_documentation.html#VSS_package_troubleshooting", null ],
        [ "VSS scripts not removed by SI", "vss_documentation.html#VSS_removal_troubleshooting", null ]
      ] ],
      [ "Acronyms Definition", "vss_documentation.html#sec_vss_acronyms", null ]
    ] ]
];