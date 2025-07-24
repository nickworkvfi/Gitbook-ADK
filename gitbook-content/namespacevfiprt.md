---
hidden: true
title: vfiprt Namespace ReferencePrinting functions
---

[Data Structures](#nested-classes) \| [Typedefs](#typedef-members) \| [Enumerations](#enum-members) \| [Functions](#func-members)

|  |  |
|----|----|
| Data Structures |  |
| struct   | [prtControlSeq](#structvfiprt_1_1prt_control_seq) |
| struct   | <a href="structvfiprt_1_1_prt_error_entry.md">PrtErrorEntry</a> |

|  |  |
|----|----|
| Typedefs |  |
| typedef void(\*  | [prtAsyncCallback](#a3691bc12eb8cadf581fb757005ff07c0)) (void \*data) |

|  |  |
|----|----|
| Enumerations |  |
| enum   | [PrtError](#aabb64aaac27500bf4b3b419feff87361) {<br/>  [PRT_OK](#aabb64aaac27500bf4b3b419feff87361af2ad9f75739b523e78df0375ad38a546) = 0, [PRT_BUSY](#aabb64aaac27500bf4b3b419feff87361a8de6b77dc9ed09b215c1999c7e2ba06b) = -1, [PRT_PAPERJAM](#aabb64aaac27500bf4b3b419feff87361a97c7d651a078ac337e76812e2c065ee8) = -2, [PRT_HEADOPEN](#aabb64aaac27500bf4b3b419feff87361ad9c03d6e1ea575ed6f996d945d83a945) = -3,<br/>  [PRT_PAPEREND](#aabb64aaac27500bf4b3b419feff87361a800ccbd12989598a0bfd6aa12141776c) = -4, [PRT_OVERHEAT](#aabb64aaac27500bf4b3b419feff87361a429988d9a2c4de64c091c963c53de39f) = -5, [PRT_OVERVOLTAGE](#aabb64aaac27500bf4b3b419feff87361a41e79c4dbe0869fdf53de2ac223a6c55) = -6, [PRT_UNDERVOLTAGE](#aabb64aaac27500bf4b3b419feff87361a4b5ae5a3826908d62ba457037a20f78d) = -7,<br/>  [PRT_FAIL](#aabb64aaac27500bf4b3b419feff87361ae4bf0cf9fc2178e4bab2ee0ddfbb1cbc) = -8, [PRT_SCRIPT_ERROR](#aabb64aaac27500bf4b3b419feff87361aac2c7fd5e450078cf3bb9758edc78814) = -9, [PRT_NO_PRINTER](#aabb64aaac27500bf4b3b419feff87361a7e51c5aeff1f987d71f6fe16119f026a) = -10, [PRT_BATTERY](#aabb64aaac27500bf4b3b419feff87361a51b6df7a298542d249f367a54894cd9d) = -11,<br/>  [PRT_UNSUPPORTED](#aabb64aaac27500bf4b3b419feff87361a297f389a033f12741f24a0f347095d24) = -20, [PRT_INVALID_PARAM](#aabb64aaac27500bf4b3b419feff87361a2f640a533852c2707eea294cb3933f9f) = -21, [PRT_NO_RESOURCE](#aabb64aaac27500bf4b3b419feff87361a85a47068700f032f8d72becd0aa2eb74) = -22, [PRT_FILE_NOT_FOUND](#aabb64aaac27500bf4b3b419feff87361ae7f67c7703e39bd2a4a798ef85e27486) = -23,<br/>  [PRT_PROTOCOL](#aabb64aaac27500bf4b3b419feff87361ae4cc3e5e3cf9534c40aa61aeeb782c36) = -24, [PRT_FINAL_RESULT](#aabb64aaac27500bf4b3b419feff87361a4c222cd1b09ce981bbaffbf59ebe4448) =- 40, [PRT_TIMEOUT](#aabb64aaac27500bf4b3b419feff87361a39eb412b95f0ff2a5a14b6eaadd8d4d3) = -41<br/>} |
|   | List of general errors. [More\...](#aabb64aaac27500bf4b3b419feff87361)<br/> |
| enum   | [PrtMode](#aee9be45580d5cde27d2a82b09fe3c601) { [PRT_PREFER_GRAPHICS](#aee9be45580d5cde27d2a82b09fe3c601a2f0f079bd5a47252c0a92a2815571c9e), [PRT_PREFER_TEXT](#aee9be45580d5cde27d2a82b09fe3c601aac04ca493dd2c33ce7f7f002512f6adf) } |
| enum   | [PrtPropertyInt](#a5616550e7b7e340d3e599ba1aece137e) {<br/>  [PRT_PROP_STATE](#a5616550e7b7e340d3e599ba1aece137eaba9ed34792864ba187e6f566646c332c) =0, [PRT_PROP_HEAD_TEMP](#a5616550e7b7e340d3e599ba1aece137ea2ec3622f20fade62b56f6a4e70700f67), [PRT_PROP_HEAD_VOLTAGE](#a5616550e7b7e340d3e599ba1aece137ea831996db2dee9c1379d132faebfc5265), [PRT_PROP_PIXEL_WIDTH](#a5616550e7b7e340d3e599ba1aece137ea9f148531a2103e693f187c9ef9e4900a),<br/>  [PRT_PROP_CONTRAST](#a5616550e7b7e340d3e599ba1aece137eae1a48bed741d94116f0de8ac98ee1467), [PRT_PROP_DEFAULT_FONT_SIZE](#a5616550e7b7e340d3e599ba1aece137ea84903dc1a82acf8fa15799764fd4fec9), [PRT_PROP_PRINT_MODE](#a5616550e7b7e340d3e599ba1aece137ea892e6822d26fbab553e7bc00c16c45f6), [PRT_PROP_JS_QUOTA_SIZE](#a5616550e7b7e340d3e599ba1aece137ead9e51751423f88f62d12e2ca667952cf)<br/>} |
|   | List of numeric properties. [More\...](#a5616550e7b7e340d3e599ba1aece137e)<br/> |
| enum   | [PrtPropertyString](#a063ad187f3b6a77eca82feb4065ed489) {<br/>  [PRT_PROP_RESOURCE_PATH](#a063ad187f3b6a77eca82feb4065ed489a9e3541d8c5a98671d1e726b0a1d8c761), [PRT_PROP_FILE_PREFIX](#a063ad187f3b6a77eca82feb4065ed489a3d1b36a7accd9f3c505b5754387e9106), [PRT_PROP_DEFAULT_FONT](#a063ad187f3b6a77eca82feb4065ed489a2e165b58fb4bf74d7629a586dc5f5ae7), [PRT_PROP_CSS](#a063ad187f3b6a77eca82feb4065ed489ab737a13ee98ce5fd500b427ba5d8cf67),<br/>  [PRT_PROP_INIFILE](#a063ad187f3b6a77eca82feb4065ed489a2ed0ec6d59747c0dc048457a4a34e1c8), [PRT_PROP_JS_ROOT](#a063ad187f3b6a77eca82feb4065ed489a5f0e296615e2361384076a4ade07019a), [PRT_PROP_DEVICE](#a063ad187f3b6a77eca82feb4065ed489a05cea7e1ceff37cacb88af05a96c7fad), [PRT_PROP_JS_QUOTA_ROOT](#a063ad187f3b6a77eca82feb4065ed489a2a431689e041726a97f3fe918ca741f8),<br/>  [PRT_PROP_CP_APP_DIR](#a063ad187f3b6a77eca82feb4065ed489aa245985ba6ce25fee7880af2238928af)<br/>} |
|   | List of string properties. [More\...](#a063ad187f3b6a77eca82feb4065ed489)<br/> |

|  |  |
|----|----|
| Functions |  |
| bool  | [prtFinalResult](#ab5aada82cb359dbc6a74d478ee7d46df) (int x) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtSetPropertyInt](#a4226eb3c80a05a57e1bdcae1d802b7fb) (enum [PrtPropertyInt](#a5616550e7b7e340d3e599ba1aece137e) property, int <a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtGetPropertyInt](#a328666bdb869598ae87db05f5376fa5b) (enum [PrtPropertyInt](#a5616550e7b7e340d3e599ba1aece137e) property, int \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtSetPropertyString](#a019a78a3989581d2412ac274c1cf3401) (enum [PrtPropertyString](#a063ad187f3b6a77eca82feb4065ed489) property, const char \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| int  | [prtSetPropertyString](#a53397309ce5cc150bb54a289066a082b) (enum [PrtPropertyString](#a063ad187f3b6a77eca82feb4065ed489) property, const std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtGetPropertyString](#a5f28969939265c39c352b0e78d0871c0) (enum [PrtPropertyString](#a063ad187f3b6a77eca82feb4065ed489) property, char \*<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, int len) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtGetPropertyString](#a6d204c112d27f61000bc6343b2f45a22) (enum [PrtPropertyString](#a063ad187f3b6a77eca82feb4065ed489) property, std::string &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string  | [prtFormat](#a5d53221623bd3d71eba771b097209ebb) (const char \*format,\...) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string  | [prtFormatV](#a7087e0d1c8dbbb4ddb7c96f2906c0edc) (const char \*format, va_list va) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL](#a31b1c26648a592e4e93cd559e10b7d75) (const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL](#a810bf85ce9c0f3e1707750267aa7e401) (const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL](#a38d5bb87f971afe9f7e9a815e5f82d57) (const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL](#a345d67f849bbabf6bf4b63d03cc66046) (const std::string &url, bool landscape=false) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML](#afe19510258113242e1b45a44a81fd27c) (const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &text, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML](#ad9eef43e35a159f1bdadf10705e6f9c6) (const std::string &text, bool landscape=false) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURLAsync](#a8de43d45ffeef13d5c41c2e21bea48e9) (const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const char \*url, bool landscape=false, [prtAsyncCallback](#a3691bc12eb8cadf581fb757005ff07c0) cb=0, void \*cbdata=0) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURLAsync](#a6b468947807758e2e79df38538804708) (const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &url, bool landscape=false, [prtAsyncCallback](#a3691bc12eb8cadf581fb757005ff07c0) cb=0, void \*cbdata=0) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURLAsync](#abc632fae0d62e53379723f35b13dce7f) (const char \*url, bool landscape=false, [prtAsyncCallback](#a3691bc12eb8cadf581fb757005ff07c0) cb=0, void \*cbdata=0) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURLAsync](#a186a4c8cd2f927b80c6a537c617ae92b) (const std::string &url, bool landscape=false, [prtAsyncCallback](#a3691bc12eb8cadf581fb757005ff07c0) cb=0, void \*cbdata=0) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTMLAsync](#ad52f1a074846b76e2b85c3a495fbe211) (const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &text, bool landscape=false, [prtAsyncCallback](#a3691bc12eb8cadf581fb757005ff07c0) cb=0, void \*cbdata=0) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTMLAsync](#a41983b7c56c6c991abac955ba15ea1e0) (const std::string &text, bool landscape=false, [prtAsyncCallback](#a3691bc12eb8cadf581fb757005ff07c0) cb=0, void \*cbdata=0) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtWait](#a83f7a62f65843e99ed9cbb9b9e40f643) (int timeout_msec=-1) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2PNG](#aaae2a4a5f9812176ccfb58301fa6f53c) (const char \*destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2PNG](#a054b7b38b39b0d94422bb68481b704d7) (const std::string &destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2PNG](#a19e23768c6942423b6361ba37adb2511) (const char \*destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2PNG](#a330b2630efc51f8d3636b1265cfecd0d) (const std::string &destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2PNG](#acfab62a558524ed8957f67089dc7ab58) (const char \*destfile, int width, const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2PNG](#a962dc49cb48b697319d41cbe8c805c30) (const std::string &destfile, int width, const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2PNG](#a9b7f3018f44a8cbec64aa1555faeeb09) (const char \*destfile, int width, const std::string &url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2PNG](#a4ec8edf8499b43e8cefa1d0d0ad0d67d) (const std::string &destfile, int width, const std::string &url, bool landscape=false) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML2PNG](#a68b5d075c73ff3ae0be5ccce9afc1d33) (const char \*destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &text, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML2PNG](#af4dea83f2276e04f338d949e6f31d183) (const char \*destfile, int width, const std::string &text, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML2PNG](#a0ecc3a65a8f7b9d6440defaeb6de99fe) (const std::string &destfile, int width, const std::string &text, bool landscape=false) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2ColorPNG](#acf30cbb37e339d1ebe62ca90a8822951) (const char \*destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2ColorPNG](#a90f17ca1c729b01fd3a7dd47c1420533) (const std::string &destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2ColorPNG](#a1d69bd9429e18e3aa99e998b8059f6fe) (const char \*destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2ColorPNG](#a1b9968e73f69b8dcf85828a868fb7d35) (const std::string &destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2ColorPNG](#a0d35889a54a1682202ec7a795e4fcd28) (const char \*destfile, int width, const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2ColorPNG](#aa1c8664b1f6cb8b5198589250d184986) (const std::string &destfile, int width, const char \*url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2ColorPNG](#a027f7e400ef3aed22ab14ea03df81c38) (const char \*destfile, int width, const std::string &url, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2ColorPNG](#ad6fd8f2cc4935bb66f3c94348e768055) (const std::string &destfile, int width, const std::string &url, bool landscape=false) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML2ColorPNG](#ace7941298deb1c71520d2ccc1f59aae5) (const char \*destfile, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &text, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML2ColorPNG](#a5fa14bf8f1254b4638b750f84076be04) (const char \*destfile, int width, const std::string &text, bool landscape=false) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML2ColorPNG](#af8a3a20c1778770a4d0acee1ef6786a3) (const std::string &destfile, int width, const std::string &text, bool landscape=false) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2Text](#a5fda025e6ba20fdc32feede8915ef8e0) (std::string &result, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const char \*url, const [prtControlSeq](#structvfiprt_1_1prt_control_seq) &ctrl) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2Text](#abd3046756f8ef15af5fb6e88485c0592) (std::string &result, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &url, const [prtControlSeq](#structvfiprt_1_1prt_control_seq) &ctrl) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2Text](#afaeaa2d5e1b72fea20693ec01a02e052) (std::string &result, int width, const char \*url, const [prtControlSeq](#structvfiprt_1_1prt_control_seq) &ctrl) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtURL2Text](#a1107e98269b7ae36ee1a3e05bda48f5d) (std::string &result, int width, const std::string &url, const [prtControlSeq](#structvfiprt_1_1prt_control_seq) &ctrl) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML2Text](#a9f3dc390acd8a321e81a3c8a23fcc473) (std::string &result, int width, const <a href="namespacevfihtml.md#a53240b3eda61c045f82728814874a1f8">stringmap</a> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &text, const [prtControlSeq](#structvfiprt_1_1prt_control_seq) &ctrl) |
| enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)  | [prtHTML2Text](#ac4b5f41ae3fc56a1fc2b1a78635af6b0) (std::string &result, int width, const std::string &text, const [prtControlSeq](#structvfiprt_1_1prt_control_seq) &ctrl) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtGetFD](#a4c7078ea0b88cacda6d6eba511606e81) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtSetCatalog](#a7678b42a2b4a33d7b8c53a71ff0c5284) (const std::string &filename) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [prtCatalogSetDelayedRelease](#acc2a03e3c65b5c8c03f9c47d3731b7ef) (unsigned num) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> unsigned  | [prtCatalogGetDelayedRelease](#a901e493ccff126fd4e97f9a94a003991) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string  | [prtGetText](#a3f09958fa5e5dfd73947570eede09f3e) (const std::string &name, const std::string &deflt=\"\") |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtGetHtml](#a894c3adbbd91f7f706ab907314ca541c) (const std::map\< std::string, std::string \> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &text, std::string &html, bool full) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtGetHtml](#a4a2c02b03cb291bdc4ed559ebf7a6f4d) (const std::map\< std::string, std::string \> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &text, std::string &html) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtGetHtmlURL](#aaea92124361b8c4129b83e65c19a187c) (const std::map\< std::string, std::string \> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &url, std::string &html, bool full) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtGetHtmlURL](#a2036b8b510f767ef947943996187124e) (const std::map\< std::string, std::string \> &<a href="_web_service_wrappers_8c.md#a6e248376c0290338633d8137822eb209">value</a>, const std::string &url, std::string &html) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int  | [prtSetRemotePrinter](#acdfd03af403f906b8ddf8f4faba80efd) (const std::string &address) |
| const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char \*  | [prtLibVersion](#abfc2b04f8ca018750fb58662de716e5e) () |
| const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char \*  | [prt_GetVersion](#aacc02fb690d18054f009b4b18d31b9f0) () |
| const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::vector\< <a href="structvfiprt_1_1_prt_error_entry.md">PrtErrorEntry</a> \> &  | [prtErrorList](#a0bf71d84338672c928d2849a74b70349) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string  | [prtScriptError](#a2b668474952d2a2c807fd227246f40a0) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [prtSetLocalProperties](#ab215cbde888ebfaf9ff0653de6811dd5) (bool local) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> bool  | [prtGetLocalProperties](#aaf735eaaf5aee3e3063ad4288b94621c) () |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [prtSetLogMask](#afaef426fe1518ee0286774d61d7cb401) (unsigned mask) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> unsigned  | [prtGetLogMask](#a7afd32c4c56826b494d22abfcb98164e) (void) |
| <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void  | [prtAddFontDir](#a75f7f156ae5226185808997e23f28d68) (const char \*dir) |

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfiprt::prtControlSeq <a href="#structvfiprt_1_1prt_control_seq" id="structvfiprt_1_1prt_control_seq"></a>

<p>struct vfiprt::prtControlSeq</p>

control sequences that will be used during conversion to text.

{% hint style="info" %}
These control sequences may contain 0-bytes!
{% endhint %}

| Data Fields |  |  |
|----|----|----|
| string | boldOff | <p>deactivate bold printing</p> |
| string | boldOn | <p>activate bold printing</p> |
| string | fontDoubleHeight | <p>switch to double height font (activated with font-size:32, see HTMLPrinter users guide)</p> |
| string | fontDoubleWidth | <p>switch to double width font (activated with font-size:40, see HTMLPrinter users guide)</p> |
| string | fontDoubleWidthHeight | <p>switch to double width and height font (activated with font-size:48, see HTMLPrinter users guide)</p> |
| string | fontNormal | <p>switch to normal (default) font (activated with font-size:24, see HTMLPrinter users guide)</p> |
| string | italicOff | <p>deactivate italic printing</p> |
| string | italicOn | <p>activate italic printing</p> |
| string | underlineOff | <p>deactivate underline printing</p> |
| string | underlineOn | <p>activate underline printing</p> |

## TypedefDocumentation {#typedef-documentation}

## prtAsyncCallback <a href="#a3691bc12eb8cadf581fb757005ff07c0" id="a3691bc12eb8cadf581fb757005ff07c0"></a>

<p>typedef void(\* prtAsyncCallback) (void \*data)</p>

callback function that is called when printing has finished

**Parameters**

\[in\] **data** data pointer provided by the application


{% hint style="info" %}
The callback will be run within a different thread context!
{% endhint %}

## EnumerationType Documentation {#enumeration-type-documentation}

## PrtError <a href="#aabb64aaac27500bf4b3b419feff87361" id="aabb64aaac27500bf4b3b419feff87361"></a>

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361)</p>

List of general errors.

| Enumerator |  |
|----|----|
| PRT_OK  | <p>no error</p> |
| PRT_BUSY  | <p>Printing in progress</p> |
| PRT_PAPERJAM  | <p>Paper jam</p> |
| PRT_HEADOPEN  | <p>Head open</p> |
| PRT_PAPEREND  | <p>Paper end</p> |
| PRT_OVERHEAT  | <p>Head too hot</p> |
| PRT_OVERVOLTAGE  | <p>Head over voltage</p> |
| PRT_UNDERVOLTAGE  | <p>Head under voltage</p> |
| PRT_FAIL  | <p>function failed (generic error)</p> |
| PRT_SCRIPT_ERROR  | <p>error during script processing, check [prtScriptError()](#a2b668474952d2a2c807fd227246f40a0) for more details</p> |
| PRT_NO_PRINTER  | <p>no printer available or file cannot be created in case of printing to a file</p> |
| PRT_BATTERY  | <p>battery error (e.g. temperature)</p> |
| PRT_UNSUPPORTED  | <p>function not supported on used hardware</p> |
| PRT_INVALID_PARAM  | <p>invalid parameters passed, e.g. NULL pointer for mandatory parameter</p> |
| PRT_NO_RESOURCE  | <p>resource could not be allocated</p> |
| PRT_FILE_NOT_FOUND  | <p>file not found</p> |
| PRT_PROTOCOL  | <p>protocol error when talking to the print service</p> |
| PRT_FINAL_RESULT  | <p>will never be returned, just used for determining if a result is a final result</p> |
| PRT_TIMEOUT  | <p>timeout in [prtWait()](#a83f7a62f65843e99ed9cbb9b9e40f643)</p> |

## PrtMode <a href="#aee9be45580d5cde27d2a82b09fe3c601" id="aee9be45580d5cde27d2a82b09fe3c601"></a>

<p>enum [PrtMode](#aee9be45580d5cde27d2a82b09fe3c601)</p>

| Enumerator           |     |
|----------------------|-----|
| PRT_PREFER_GRAPHICS  |     |
| PRT_PREFER_TEXT      |     |

## PrtPropertyInt <a href="#a5616550e7b7e340d3e599ba1aece137e" id="a5616550e7b7e340d3e599ba1aece137e"></a>

<p>enum [PrtPropertyInt](#a5616550e7b7e340d3e599ba1aece137e)</p>

List of numeric properties.

| Enumerator |  |
|----|----|
| PRT_PROP_STATE  | <p>printer state (just using the subset of PrtError that reflects the state (read only)</p> |
| PRT_PROP_HEAD_TEMP  | <p>Head temperature value in degrees Celsius (read only)</p> <br/> {% hint style="info" %} <br/> V/OS does not support reading the head temperature <br/> {% endhint %} |
| PRT_PROP_HEAD_VOLTAGE  | <p>Head voltage value in mV (read only)</p> |
| PRT_PROP_PIXEL_WIDTH  | <p>printer width in pixels, this may be 0 if the printer is temporarily not available. (read only)</p> |
| PRT_PROP_CONTRAST  | <p>printer contrast 0\...255</p> <br/> {% hint style="info" %} <br/> Setting the contrast will only show some effect if the underlying system supports it. <br/> {% endhint %} |
| PRT_PROP_DEFAULT_FONT_SIZE  | <p>Default font size<br/></p> |
| PRT_PROP_PRINT_MODE  | <p>Preferred print mode: PRT_PREFER_GRAPHICS (default) or PRT_PREFER_TEXT, ignored if not supported by the printer</p> |
| PRT_PROP_JS_QUOTA_SIZE  | <p>If \>0 filesystem quota in kilobytes for use by JavaScript, see also [PRT_PROP_JS_QUOTA_ROOT](#a063ad187f3b6a77eca82feb4065ed489a2a431689e041726a97f3fe918ca741f8)<br/></p> |

## PrtPropertyString <a href="#a063ad187f3b6a77eca82feb4065ed489" id="a063ad187f3b6a77eca82feb4065ed489"></a>

<p>enum [PrtPropertyString](#a063ad187f3b6a77eca82feb4065ed489)</p>

List of string properties.

| Enumerator |  |
|----|----|
| PRT_PROP_RESOURCE_PATH  | <p>Resource path, default is resource/print</p> |
| PRT_PROP_FILE_PREFIX  | <p>prefix that is added in front of the URL in uiInvokeURL and to the template names, e.g. using \"en/\" would access the files in the subdirectory \"en\".</p> |
| PRT_PROP_DEFAULT_FONT  | <p>Default font name<br/></p> |
| PRT_PROP_CSS  | <p>name of a CSS file</p> |
| PRT_PROP_INIFILE  | <p>name of the INI file, setting this property has the effect of reading and evaluating that file, i.e. the default font, font size and the CSS file name are updated</p> |
| PRT_PROP_JS_ROOT  | <p>Setting this path activates the JavaScript filesystem module. I/O is restricted to happen inside this path. Use \"\$APPDIR\" to refer to this path from within JavaScript. Images and videos may also use \"\$APPDIR\" to refer to files in this path.</p> |
| PRT_PROP_DEVICE  | <p>If not empty, printer device to be used on server side, e.g. /dev/ttyAMA0, not supported on all platforms, only devices that are accessibly by the printer server can be used</p> |
| PRT_PROP_JS_QUOTA_ROOT  | <p>If not empty base directory for quota JavaScript calculation, default is \"\", see also [PRT_PROP_JS_QUOTA_SIZE](#a5616550e7b7e340d3e599ba1aece137ead9e51751423f88f62d12e2ca667952cf)</p> |
| PRT_PROP_CP_APP_DIR  | <p>CP app directory, if set only receipts from the app dir can be printed. It should point to the base app directory without platform, e.g. /home/sys14/www/\<app-id\> on V/OS</p> |

## FunctionDocumentation {#function-documentation}

## prt_GetVersion() <a href="#aacc02fb690d18054f009b4b18d31b9f0" id="aacc02fb690d18054f009b4b18d31b9f0"></a>

<p>const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char\* vfiprt::prt_GetVersion</p>

returns a zero-terminated string with version and build information of libvfiguiprt in ADK version string format: \<major\>.\<minor\>.\<patch\>-\<build\>, e.g. \"1.2.3-4\"

### Returns

version string

## prtAddFontDir() <a href="#a75f7f156ae5226185808997e23f28d68" id="a75f7f156ae5226185808997e23f28d68"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void vfiprt::prtAddFontDir</p>

Add directory to printer font search path

**Parameters**

\[in\] **dir** directory to add


{% hint style="info" %}
For security reasons this function is only available if the printer server runs in the context of the application (e.g. when using embedded ARRS) but it is not provided when running the printer server as separate process.
{% endhint %}

## prtCatalogGetDelayedRelease() <a href="#a901e493ccff126fd4e97f9a94a003991" id="a901e493ccff126fd4e97f9a94a003991"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> unsigned vfiprt::prtCatalogGetDelayedRelease</p>

Get the maximum number of unused catalogs that are kept in memory.

### Returns

number of catalogs


{% hint style="info" %}
Catalog storage is shared with the GUI module, i.e. this setting may be changed by calls to <a href="namespacevfigui.md#aac69533e0d547c76b34253f4458c525c">uiCatalogSetDelayedRelease()</a>
{% endhint %}

## prtCatalogSetDelayedRelease() <a href="#acc2a03e3c65b5c8c03f9c47d3731b7ef" id="acc2a03e3c65b5c8c03f9c47d3731b7ef"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void vfiprt::prtCatalogSetDelayedRelease</p>

Set the maximum number of catalogs that are kept in memory although being unused. This improves load time when a catalog is used again, since when still in memory it does not need to be read from disk (default: 0)

**Parameters**

\[in\] **num** number of catalogs


{% hint style="info" %}
Catalog storage is shared with the GUI module, i.e. this setting may be changed by calls to <a href="namespacevfigui.md#aac69533e0d547c76b34253f4458c525c">uiCatalogSetDelayedRelease()</a>
{% endhint %}

## prtErrorList() <a href="#a0bf71d84338672c928d2849a74b70349" id="a0bf71d84338672c928d2849a74b70349"></a>

<p>const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::vector\<<a href="structvfiprt_1_1_prt_error_entry.md">PrtErrorEntry</a>\>& vfiprt::prtErrorList</p>

obtain list of non-fatal errors that happened last while printing a receipt.

### Returns

reference to the error list of the last receipt printed in this thread.

## prtFinalResult() <a href="#ab5aada82cb359dbc6a74d478ee7d46df" id="ab5aada82cb359dbc6a74d478ee7d46df"></a>

<p>bool vfiprt::prtFinalResult</p>

inline

## prtFormat() <a href="#a5d53221623bd3d71eba771b097209ebb" id="a5d53221623bd3d71eba771b097209ebb"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string vfiprt::prtFormat</p>

perform printf-like formatting.

**Parameters**

\[in\] **format** printf-like format string. It supports the commonly known format specifiers \'s\', \'i\', \'d\', \'u\', \'o\', \'x\', \'X\', \'p\', \'c\', \'f\', \'e\', \'g\'. In addition the following format specifiers are supported:\'S\': format as string and substitute the special HTML characters \'&\', \'\<\', \'\>\', \'\"\' and \'\'\' by character references (e.g. \'&\', \'\<\' \...).\'C\': format as character and sustitute HTML characters

### Returns

formatted string

## prtFormatV() <a href="#a7087e0d1c8dbbb4ddb7c96f2906c0edc" id="a7087e0d1c8dbbb4ddb7c96f2906c0edc"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string vfiprt::prtFormatV</p>

perfom printf-like formatting. This is the same as [prtFormat()](#a5d53221623bd3d71eba771b097209ebb) just taking a va_list instead of a variable number of arguments

## prtGetFD() <a href="#a4c7078ea0b88cacda6d6eba511606e81" id="a4c7078ea0b88cacda6d6eba511606e81"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtGetFD</p>

obtain internal file descriptor for use in poll(). This may be used to check whether the result has been received from the print service.

### Returns

file descriptor or -1 in case no printing is active

## prtGetHtml()\[1/2\] <a href="#a4a2c02b03cb291bdc4ed559ebf7a6f4d" id="a4a2c02b03cb291bdc4ed559ebf7a6f4d"></a> {#prtgethtml-12}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtGetHtml</p>

## prtGetHtml()\[2/2\] <a href="#a894c3adbbd91f7f706ab907314ca541c" id="a894c3adbbd91f7f706ab907314ca541c"></a> {#prtgethtml-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtGetHtml</p>

preprocess HTML code and return the resulting string

**Parameters**

\[in\] **value** values used for insertions \[in\] **text** string containing an HTML fragment (i.e. the part between \<body\> and \</body\>). \[out\] **html** resulting HTML code \[in\] **full** optional parameter: If false or missing just substitute the XML processing instructions, if true in addition use inline images, insert CSS code and return full HTML document

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtGetHtmlURL()\[1/2\] <a href="#a2036b8b510f767ef947943996187124e" id="a2036b8b510f767ef947943996187124e"></a> {#prtgethtmlurl-12}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtGetHtmlURL</p>

## prtGetHtmlURL()\[2/2\] <a href="#aaea92124361b8c4129b83e65c19a187c" id="aaea92124361b8c4129b83e65c19a187c"></a> {#prtgethtmlurl-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtGetHtmlURL</p>

preprocess HTML code and return the resulting string

**Parameters**

\[in\] **value** values used for insertions \[in\] **url** location of the dialog file. The location is prefixed by the resource path and by the optional prefix (see also UI_PROP_RESOURCE_PATH, UI_PROP_FILE_PREFIX) unless an absolute path was provided. \[out\] **html** resulting HTML code \[in\] **full** optional parameter: If false or missing just substitute the XML processing instructions, if true in addition use inline images, insert CSS code and return full HTML document

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtGetLocalProperties() <a href="#aaf735eaaf5aee3e3063ad4288b94621c" id="aaf735eaaf5aee3e3063ad4288b94621c"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> bool vfiprt::prtGetLocalProperties</p>

### Returns

true if thread local properties are used, else return false

## prtGetLogMask() <a href="#a7afd32c4c56826b494d22abfcb98164e" id="a7afd32c4c56826b494d22abfcb98164e"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> unsigned vfiprt::prtGetLogMask</p>

Get log mask

### Returns

current log mask

## prtGetPropertyInt() <a href="#a328666bdb869598ae87db05f5376fa5b" id="a328666bdb869598ae87db05f5376fa5b"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtGetPropertyInt</p>

get int property

**Parameters**

\[in\] **property** property to be set \[out\] **value** current value

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtGetPropertyString()\[1/2\] <a href="#a5f28969939265c39c352b0e78d0871c0" id="a5f28969939265c39c352b0e78d0871c0"></a> {#prtgetpropertystring-12}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtGetPropertyString</p>

get string property

**Parameters**

\[in\] **property** property to be set \[out\] **value** current value \[in\] **len** size ouf output buffer value in bytes

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtGetPropertyString()\[2/2\] <a href="#a6d204c112d27f61000bc6343b2f45a22" id="a6d204c112d27f61000bc6343b2f45a22"></a> {#prtgetpropertystring-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtGetPropertyString</p>

get string property

**Parameters**

\[in\] **property** property to be set \[out\] **value** current value

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtGetText() <a href="#a3f09958fa5e5dfd73947570eede09f3e" id="a3f09958fa5e5dfd73947570eede09f3e"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string vfiprt::prtGetText</p>

lookup a text from current loaded catalog by *key* name. If text is not found in catalog or no catalog is loaded the function returns value in in parameter *default*.

**Parameters**

\[in\] **name** of key used to lookup the text in calalog \[in\] **deflt** text that is returned, if text is not found in calalog

### Returns

text from catalog for success, else value in parameter *default*

## prtHTML()\[1/2\] <a href="#ad9eef43e35a159f1bdadf10705e6f9c6" id="ad9eef43e35a159f1bdadf10705e6f9c6"></a> {#prthtml-12}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML</p>

inline

the same as [prtHTML()](#afe19510258113242e1b45a44a81fd27c) just using an empty value map

## prtHTML()\[2/2\] <a href="#afe19510258113242e1b45a44a81fd27c" id="afe19510258113242e1b45a44a81fd27c"></a> {#prthtml-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML</p>

print an HTML document (synchronous)

**Parameters**

\[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **text** string containing an HTML fragment (i.e. the part between \<body\> and \</body\>). \[in\] **landscape** activate landscape printing

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtHTML2ColorPNG()\[1/3\] <a href="#a5fa14bf8f1254b4638b750f84076be04" id="a5fa14bf8f1254b4638b750f84076be04"></a> {#prthtml2colorpng-13}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML2ColorPNG</p>

inline

the same as [prtHTML2ColorPNG()](#ace7941298deb1c71520d2ccc1f59aae5) just using an empty value map

## prtHTML2ColorPNG()\[2/3\] <a href="#ace7941298deb1c71520d2ccc1f59aae5" id="ace7941298deb1c71520d2ccc1f59aae5"></a> {#prthtml2colorpng-23}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML2ColorPNG</p>

render an HTML file to a color PNG image

**Parameters**

\[in\] **destfile** name of the destination PNG file \[in\] **width** width of the image in pixels (height if landscape==true) \[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **text** string containing an HTML fragment (i.e. the part between \<body\> and \</body\>). \[in\] **landscape** activate landscape printing (image is rotated by 90 degrees)

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtHTML2ColorPNG()\[3/3\] <a href="#af8a3a20c1778770a4d0acee1ef6786a3" id="af8a3a20c1778770a4d0acee1ef6786a3"></a> {#prthtml2colorpng-33}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML2ColorPNG</p>

inline

Overloaded function: Just using std::string for destfile

## prtHTML2PNG()\[1/3\] <a href="#af4dea83f2276e04f338d949e6f31d183" id="af4dea83f2276e04f338d949e6f31d183"></a> {#prthtml2png-13}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML2PNG</p>

inline

the same as [prtHTML2PNG()](#a68b5d075c73ff3ae0be5ccce9afc1d33) just using an empty value map

## prtHTML2PNG()\[2/3\] <a href="#a68b5d075c73ff3ae0be5ccce9afc1d33" id="a68b5d075c73ff3ae0be5ccce9afc1d33"></a> {#prthtml2png-23}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML2PNG</p>

render an HTML file to a PNG image

**Parameters**

\[in\] **destfile** name of the destination PNG file \[in\] **width** width of the image in pixels (height if landscape==true) \[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **text** string containing an HTML fragment (i.e. the part between \<body\> and \</body\>). \[in\] **landscape** activate landscape printing (image is rotated by 90 degrees)

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtHTML2PNG()\[3/3\] <a href="#a0ecc3a65a8f7b9d6440defaeb6de99fe" id="a0ecc3a65a8f7b9d6440defaeb6de99fe"></a> {#prthtml2png-33}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML2PNG</p>

inline

Overloaded function: Just using std::string for destfile

## prtHTML2Text()\[1/2\] <a href="#ac4b5f41ae3fc56a1fc2b1a78635af6b0" id="ac4b5f41ae3fc56a1fc2b1a78635af6b0"></a> {#prthtml2text-12}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML2Text</p>

inline

short cut with empty value map

## prtHTML2Text()\[2/2\] <a href="#a9f3dc390acd8a321e81a3c8a23fcc473" id="a9f3dc390acd8a321e81a3c8a23fcc473"></a> {#prthtml2text-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTML2Text</p>

convert HTML document to text string. Custom control sequences can be passed that are inserted when switching the font size or style

**Parameters**

\[out\] **result** resulting text string \[in\] **width** width of the image in printable characters \[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **text** string containing an HTML fragment (i.e. the part between \<body\> and \</body\>). \[in\] **ctrl** control sequences

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtHTMLAsync()\[1/2\] <a href="#a41983b7c56c6c991abac955ba15ea1e0" id="a41983b7c56c6c991abac955ba15ea1e0"></a> {#prthtmlasync-12}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTMLAsync</p>

inline

the same as [prtHTMLAsync()](#ad52f1a074846b76e2b85c3a495fbe211) just using an empty value map

## prtHTMLAsync()\[2/2\] <a href="#ad52f1a074846b76e2b85c3a495fbe211" id="ad52f1a074846b76e2b85c3a495fbe211"></a> {#prthtmlasync-22}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtHTMLAsync</p>

asynchronously start printing an HTML document, the result has to be obtained using [prtWait()](#a83f7a62f65843e99ed9cbb9b9e40f643).

**Parameters**

\[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **text** string containing an HTML fragment (i.e. the part between \<body\> and \</body\>). \[in\] **landscape** activate landscape printing \[in\] **cb** optional callback function that is called when printing has finished \[in\] **cbdata** data pointer that is passed on to the callback function

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))


{% hint style="info" %}
If [prtWait()](#a83f7a62f65843e99ed9cbb9b9e40f643) is not called the next call to [prtURLAsync()](#a8de43d45ffeef13d5c41c2e21bea48e9) or [prtHTMLAsync()](#ad52f1a074846b76e2b85c3a495fbe211) will return PRT_BUSY.
{% endhint %}

## prtLibVersion() <a href="#abfc2b04f8ca018750fb58662de716e5e" id="abfc2b04f8ca018750fb58662de716e5e"></a>

<p>const <a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> char\* vfiprt::prtLibVersion</p>

read library version

### Returns

version string

## prtScriptError() <a href="#a2b668474952d2a2c807fd227246f40a0" id="a2b668474952d2a2c807fd227246f40a0"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> std::string vfiprt::prtScriptError</p>

### Returns

string containing information about errors that were reported during last script processing

## prtSetCatalog() <a href="#a7678b42a2b4a33d7b8c53a71ff0c5284" id="a7678b42a2b4a33d7b8c53a71ff0c5284"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtSetCatalog</p>

load and set a catalog file containing name-value text pairs to be inserted with HTML placeholder \<?text name?\>. The current catalog is unloaded with filename==\"\" or by loading another catalog file.

**Parameters**

\[in\] **filename** of the catalog, empty string to unload the current dialog

### Returns

PRT_OK if file was successfully loaded, else error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtSetLocalProperties() <a href="#ab215cbde888ebfaf9ff0653de6811dd5" id="ab215cbde888ebfaf9ff0653de6811dd5"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void vfiprt::prtSetLocalProperties</p>

de-/activate thread local properties for the current thread. Activating thread local properties initially copies the global properties to the current thread.

**Parameters**

\[in\] **local** if true activate thread local properties, if false discard them

## prtSetLogMask() <a href="#afaef426fe1518ee0286774d61d7cb401" id="afaef426fe1518ee0286774d61d7cb401"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> void vfiprt::prtSetLogMask</p>

Set log mask

**Parameters**

\[in\] **mask** logging mask (see PRT_LOGMASK)

## prtSetPropertyInt() <a href="#a4226eb3c80a05a57e1bdcae1d802b7fb" id="a4226eb3c80a05a57e1bdcae1d802b7fb"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtSetPropertyInt</p>

set int property

**Parameters**

\[in\] **property** property to be set \[in\] **value** new value

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))


{% hint style="info" %}
Properties are specific to each thread
{% endhint %}

## prtSetPropertyString()\[1/2\] <a href="#a019a78a3989581d2412ac274c1cf3401" id="a019a78a3989581d2412ac274c1cf3401"></a> {#prtsetpropertystring-12}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtSetPropertyString</p>

set string property

**Parameters**

\[in\] **property** property to be set \[in\] **value** new value

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))


{% hint style="info" %}
Properties are specific to each thread
{% endhint %}

## prtSetPropertyString()\[2/2\] <a href="#a53397309ce5cc150bb54a289066a082b" id="a53397309ce5cc150bb54a289066a082b"></a> {#prtsetpropertystring-22}

<p>int vfiprt::prtSetPropertyString</p>

inline

Overloaded function: Just using std::string for value

## prtSetRemotePrinter() <a href="#acdfd03af403f906b8ddf8f4faba80efd" id="acdfd03af403f906b8ddf8f4faba80efd"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> int vfiprt::prtSetRemotePrinter</p>

set remote printer address

**Parameters**

\[in\] **address** printer address. This value overwrites the address set using the LPD environment variable. This may be used to set an IP address and port (e.g. \':0\' would use the internal default printer). Using an empty string will revert to the default setting.

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors.")).

## prtURL()\[1/4\] <a href="#a38d5bb87f971afe9f7e9a815e5f82d57" id="a38d5bb87f971afe9f7e9a815e5f82d57"></a> {#prturl-14}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL</p>

inline

the same as [prtURL()](#a31b1c26648a592e4e93cd559e10b7d75) just using an empty value map

## prtURL()\[2/4\] <a href="#a345d67f849bbabf6bf4b63d03cc66046" id="a345d67f849bbabf6bf4b63d03cc66046"></a> {#prturl-24}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL</p>

inline

Overloaded function: Just using std::string for url

## prtURL()\[3/4\] <a href="#a31b1c26648a592e4e93cd559e10b7d75" id="a31b1c26648a592e4e93cd559e10b7d75"></a> {#prturl-34}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL</p>

print an HTML file (synchronous)

**Parameters**

\[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) \[in\] **landscape** activate landscape printing

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtURL()\[4/4\] <a href="#a810bf85ce9c0f3e1707750267aa7e401" id="a810bf85ce9c0f3e1707750267aa7e401"></a> {#prturl-44}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL</p>

inline

Overloaded function: Just using std::string for url

## prtURL2ColorPNG()\[1/8\] <a href="#a0d35889a54a1682202ec7a795e4fcd28" id="a0d35889a54a1682202ec7a795e4fcd28"></a> {#prturl2colorpng-18}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2ColorPNG</p>

inline

shortcut omitting value

## prtURL2ColorPNG()\[2/8\] <a href="#a027f7e400ef3aed22ab14ea03df81c38" id="a027f7e400ef3aed22ab14ea03df81c38"></a> {#prturl2colorpng-28}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2ColorPNG</p>

inline

Overloaded function: Just using std::string for url

## prtURL2ColorPNG()\[3/8\] <a href="#acf30cbb37e339d1ebe62ca90a8822951" id="acf30cbb37e339d1ebe62ca90a8822951"></a> {#prturl2colorpng-38}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2ColorPNG</p>

render an HTML file to a color PNG image

**Parameters**

\[in\] **destfile** name of the destination PNG file \[in\] **width** width of the image in pixels (height if landscape==true) \[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) \[in\] **landscape** activate landscape printing (image is rotated by 90 degrees)

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtURL2ColorPNG()\[4/8\] <a href="#a1d69bd9429e18e3aa99e998b8059f6fe" id="a1d69bd9429e18e3aa99e998b8059f6fe"></a> {#prturl2colorpng-48}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2ColorPNG</p>

inline

Overloaded function: Just using std::string for url

## prtURL2ColorPNG()\[5/8\] <a href="#aa1c8664b1f6cb8b5198589250d184986" id="aa1c8664b1f6cb8b5198589250d184986"></a> {#prturl2colorpng-58}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2ColorPNG</p>

inline

Overloaded function: Just using std::string for destfile

## prtURL2ColorPNG()\[6/8\] <a href="#ad6fd8f2cc4935bb66f3c94348e768055" id="ad6fd8f2cc4935bb66f3c94348e768055"></a> {#prturl2colorpng-68}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2ColorPNG</p>

inline

Overloaded function: Just using std::string for destfile and url

## prtURL2ColorPNG()\[7/8\] <a href="#a90f17ca1c729b01fd3a7dd47c1420533" id="a90f17ca1c729b01fd3a7dd47c1420533"></a> {#prturl2colorpng-78}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2ColorPNG</p>

inline

Overloaded function: Just using std::string for destfile

## prtURL2ColorPNG()\[8/8\] <a href="#a1b9968e73f69b8dcf85828a868fb7d35" id="a1b9968e73f69b8dcf85828a868fb7d35"></a> {#prturl2colorpng-88}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2ColorPNG</p>

inline

Overloaded function: Just using std::string for destfile and url

## prtURL2PNG()\[1/8\] <a href="#acfab62a558524ed8957f67089dc7ab58" id="acfab62a558524ed8957f67089dc7ab58"></a> {#prturl2png-18}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2PNG</p>

inline

shortcut omitting value

## prtURL2PNG()\[2/8\] <a href="#a9b7f3018f44a8cbec64aa1555faeeb09" id="a9b7f3018f44a8cbec64aa1555faeeb09"></a> {#prturl2png-28}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2PNG</p>

inline

Overloaded function: Just using std::string for url

## prtURL2PNG()\[3/8\] <a href="#aaae2a4a5f9812176ccfb58301fa6f53c" id="aaae2a4a5f9812176ccfb58301fa6f53c"></a> {#prturl2png-38}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2PNG</p>

render an HTML file to a black and white PNG image

**Parameters**

\[in\] **destfile** name of the destination PNG file \[in\] **width** width of the image in pixels (height if landscape==true) \[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) \[in\] **landscape** activate landscape printing (image is rotated by 90 degrees)

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtURL2PNG()\[4/8\] <a href="#a19e23768c6942423b6361ba37adb2511" id="a19e23768c6942423b6361ba37adb2511"></a> {#prturl2png-48}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2PNG</p>

inline

Overloaded function: Just using std::string for url

## prtURL2PNG()\[5/8\] <a href="#a962dc49cb48b697319d41cbe8c805c30" id="a962dc49cb48b697319d41cbe8c805c30"></a> {#prturl2png-58}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2PNG</p>

inline

Overloaded function: Just using std::string for destfile

## prtURL2PNG()\[6/8\] <a href="#a4ec8edf8499b43e8cefa1d0d0ad0d67d" id="a4ec8edf8499b43e8cefa1d0d0ad0d67d"></a> {#prturl2png-68}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2PNG</p>

inline

Overloaded function: Just using std::string for destfile and url

## prtURL2PNG()\[7/8\] <a href="#a054b7b38b39b0d94422bb68481b704d7" id="a054b7b38b39b0d94422bb68481b704d7"></a> {#prturl2png-78}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2PNG</p>

inline

Overloaded function: Just using std::string for destfile

## prtURL2PNG()\[8/8\] <a href="#a330b2630efc51f8d3636b1265cfecd0d" id="a330b2630efc51f8d3636b1265cfecd0d"></a> {#prturl2png-88}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2PNG</p>

inline

Overloaded function: Just using std::string for destfile and url

## prtURL2Text()\[1/4\] <a href="#afaeaa2d5e1b72fea20693ec01a02e052" id="afaeaa2d5e1b72fea20693ec01a02e052"></a> {#prturl2text-14}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2Text</p>

inline

short cut with empty value map

## prtURL2Text()\[2/4\] <a href="#a1107e98269b7ae36ee1a3e05bda48f5d" id="a1107e98269b7ae36ee1a3e05bda48f5d"></a> {#prturl2text-24}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2Text</p>

inline

Overloaded function: Just using std::string for url

## prtURL2Text()\[3/4\] <a href="#a5fda025e6ba20fdc32feede8915ef8e0" id="a5fda025e6ba20fdc32feede8915ef8e0"></a> {#prturl2text-34}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2Text</p>

convert HTML document to text string. Custom control sequences can be passed that are inserted when switching the font size or style

**Parameters**

\[out\] **result** resulting text string \[in\] **width** width of the image in printable characters \[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) \[in\] **ctrl** control sequences

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))

## prtURL2Text()\[4/4\] <a href="#abd3046756f8ef15af5fb6e88485c0592" id="abd3046756f8ef15af5fb6e88485c0592"></a> {#prturl2text-44}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURL2Text</p>

inline

Overloaded function: Just using std::string for url

## prtURLAsync()\[1/4\] <a href="#abc632fae0d62e53379723f35b13dce7f" id="abc632fae0d62e53379723f35b13dce7f"></a> {#prturlasync-14}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURLAsync</p>

inline

the same as [prtURLAsync()](#a8de43d45ffeef13d5c41c2e21bea48e9) just using an empty value map

## prtURLAsync()\[2/4\] <a href="#a186a4c8cd2f927b80c6a537c617ae92b" id="a186a4c8cd2f927b80c6a537c617ae92b"></a> {#prturlasync-24}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURLAsync</p>

inline

Overloaded function: Just using std::string for url

## prtURLAsync()\[3/4\] <a href="#a8de43d45ffeef13d5c41c2e21bea48e9" id="a8de43d45ffeef13d5c41c2e21bea48e9"></a> {#prturlasync-34}

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURLAsync</p>

asynchronously start printing an HTML file, the result has to be obtained using [prtWait()](#a83f7a62f65843e99ed9cbb9b9e40f643).

**Parameters**

\[in\] **value** name value pairs that are used as for variable substitutions. \[in\] **url** location of the HTML file. The location is prefixed by the resource path and by the optional prefix (see also PRT_PROP_RESOURCE_PATH, PRT_PROP_FILE_PREFIX) \[in\] **landscape** activate landscape printing \[in\] **cb** optional callback function that is called when printing has finished \[in\] **cbdata** data pointer that is passed on to the callback function

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors."))


{% hint style="info" %}
If [prtWait()](#a83f7a62f65843e99ed9cbb9b9e40f643) is not called the next call to [prtURLAsync()](#a8de43d45ffeef13d5c41c2e21bea48e9) or [prtHTMLAsync()](#ad52f1a074846b76e2b85c3a495fbe211) will return PRT_BUSY.
{% endhint %}

## prtURLAsync()\[4/4\] <a href="#a6b468947807758e2e79df38538804708" id="a6b468947807758e2e79df38538804708"></a> {#prturlasync-44}

<p>enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtURLAsync</p>

inline

Overloaded function: Just using std::string for url

## prtWait() <a href="#a83f7a62f65843e99ed9cbb9b9e40f643" id="a83f7a62f65843e99ed9cbb9b9e40f643"></a>

<p><a href="sound_8h.md#ad7c2e1cb200073ed64c64285a5f37231">DllSpec</a> enum [PrtError](#aabb64aaac27500bf4b3b419feff87361) vfiprt::prtWait</p>

wait for the printing to finish and return the error code

**Parameters**

\[in\] **timeout_msec** timeout in milliseconds, a negative value means infinite timeout

### Returns

error code (see [PrtError](#aabb64aaac27500bf4b3b419feff87361 "List of general errors.")) or PRT_TIMEOUT in case the printing did not finish within the specified timeout.


{% hint style="info" %}
In case of timeout [prtWait()](#a83f7a62f65843e99ed9cbb9b9e40f643) has to be called again.
{% endhint %}
