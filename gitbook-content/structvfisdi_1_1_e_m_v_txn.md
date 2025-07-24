---
hidden: true
title: EMVTxn Struct Reference
---

[Data Structures](#nested-classes) \| [Public Types](#pub-types) \| [Public Member Functions](#pub-methods) \| [Protected Member Functions](#pro-methods)

`#include <`<a href="sdiapi_2src_2sdiapi_2sdi__emv_8h_source.md">sdi_emv.h</a>`>`

Inheritance diagram for EMVTxn:

![Inheritance graph](structvfisdi_1_1_e_m_v_txn__inherit__graph.png)

\[<a href="graph_legend.md">legend</a>\]

Collaboration diagram for EMVTxn:

![Collaboration graph](structvfisdi_1_1_e_m_v_txn__coll__graph.png)

\[<a href="graph_legend.md">legend</a>\]

|  |  |
|----|----|
| Data Structures |  |
| struct   | [Candidate](#structvfisdi_1_1_e_m_v_txn_1_1_candidate) |
| struct   | [CandidateExt](#structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext) |
| struct   | [DomesticApp](#structvfisdi_1_1_e_m_v_txn_1_1_domestic_app) |
| struct   | [FallbackMSR](#structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r) |

|  |  |
|----|----|
| Public Types |  |
| typedef std::vector\< unsigned char \>  | [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) |

|  |  |
|----|----|
| Public Member Functions |  |
| bool  | [getIssuerID](#aefa82473aa949ff4b84b49636e15268b) (<a href="structvfisdi_1_1_array.md">Array</a>\< 4 \> &id) const |
| bool  | [setAID](#afa6ca2d77399d2db1c12d1ff7eeda01f) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &aid) |
| template\<unsigned N\> |  |
| bool  | [setAID](#a8f3822d556d2dc65cc8ebde4a87124f5) (const unsigned char(&v)\[N\]) |
| bool  | [getAID](#a23c0f9cbcb8eac7af6d7ef6a9701f2de) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &aid) const |
| bool  | [getAppName](#a182e23eeefddc5125d3ce3b63a825815) (std::string &label) const |
| bool  | [getAgreedAppName](#a3e2e667cc1620a9e590dc9317a57bfc0) (std::string &name) const |
| bool  | [getPAN](#af197754c5472b1f365a0ff6b14191c90) (<a href="structvfisdi_1_1_array.md">Array</a>\< 10 \> &pan) const |
| bool  | [getAIP](#a22fb2842fa8fb5125f27e0ab61a4916f) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &aip) const |
| bool  | [getDFName](#a0c3eb9c659b94c3c83d6fa52ee045f38) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &name) const |
| bool  | [getApplicationPriorityID](#aa3822824c808b30140c9f88394839427) (unsigned char &id) const |
| bool  | [setAuthCode](#ab1ee5613275eaffc5e18e65f42d350ef) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 6 \> &code) |
| bool  | [getAuthCode](#ab5e9d49d4a61b323c0718808dab185d3) (<a href="structvfisdi_1_1_array.md">Array</a>\< 6 \> &code) const |
| bool  | [setAuthResponseCode](#abfab8f80dd77da0a34452beb87450f77) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &auth) |
| bool  | [getAuthResponseCode](#acb7af559de0f1913e64b619b7b8bf0a9) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &auth) const |
| bool  | [getCVMList](#a54d72993a2cac07bdb1b05cc10abb4fc) (<a href="structvfisdi_1_1_array.md">Array</a>\< 28 \> &list) const |
| bool  | [getTVR](#a86c9ddd3f7fceea21cd0dc5f0b48b4da) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &tvr) const |
| bool  | [setTransactionDate](#a4d3fd172bf9b9f584c48367ee98f98e7) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &date) |
| bool  | [setTransactionDate](#a916a12d7c7b15f0b84dfbe1c77bfa1f8) (const std::string &date) |
| bool  | [getTransactionDate](#af73759646ee087fda4a944647c75bd1e) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &date) const |
| bool  | [getTransactionDate](#a24da4d5f9d3575e0cefa69f2ff86dea6) (std::string &date) const |
| bool  | [getTransactionStatusInfo](#aae9a5ddf1de643b2eaffc7abe7df4b20) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &status) const |
| bool  | [setTransactionType](#ad38f45424b98294f97b9246dd37d9bbf) (unsigned char type) |
| bool  | [getTransactionType](#a103b9c2fa2c6075082ed0fe02496164c) (unsigned char &type) const |
| bool  | [setCtlsLEDState](#a25867e91d5e2d73f8673548c41cfce91) (unsigned char state) |
| bool  | [getCtlsLEDState](#af3a8a6ee3b1c667e4ab5b7be3749699f) (unsigned char &state) const |
| bool  | [setServerPollTimeout](#a6f4eb4aaf10f0708dde18271fcf0e8de) (unsigned char tout) |
| bool  | [getServerPollTimeout](#a05b24e2f23267e4ba665e21d60ae4fd3) (unsigned char &tout) const |
| bool  | [setBeepScenario](#a2293f21102af94e846adb15491807f91) (unsigned char bs) |
| bool  | [getBeepScenario](#a8f463c85de1a0ca552942ed68167f508) (unsigned char &bs) const |
| bool  | [getCardholderName](#a7e2e8088a66943208867d9bb95f22114) (std::string &name) const |
| bool  | [setExpirationDate](#a78378a9ad813ee879281f0cb1a5c22d2) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &date) |
| bool  | [getExpirationDate](#ae16935dc1e17bbaa1de7aaf93e1aa200) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &date) const |
| bool  | [getEffectiveDate](#aab6007b9544521c765ee365f4e3e4297) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &date) const |
| bool  | [getEffectiveDate](#a2c12d3f69ef23adb6bff6191b80c3fe0) (std::string &date) const |
| bool  | [setIssuerCountryCode](#a212164fd96c64f4e81e11d101ec1dd2f) (unsigned short country) |
| bool  | [getIssuerCountryCode](#a5680b103f0e5a6ddf6635a307bd9ef16) (unsigned short &country) const |
| bool  | [setTransactionCurrency](#a4de424306b728dc26ef8e9bd286b3869) (<a href="namespacevfisdi.md#a59f74bf9ae55ffd390b8806b2559021c">Currency</a> currency) |
| bool  | [getTransactionCurrency](#a7034b34fd69701b07a04477dd8a05c7d) (<a href="namespacevfisdi.md#a59f74bf9ae55ffd390b8806b2559021c">Currency</a> &currency) const |
| bool  | [setTransactionCurrency](#a249190029aeeb1d5dfe563a730cee322) (int currency) |
| bool  | [getTransactionCurrency](#ad79f4105407ee8e94477b65584b185f9) (int &currency) const |
| bool  | [getLanguagePreference](#a531768c4057ce865f80a5d10b9f30dc9) (std::string &lang) const |
| bool  | [getServiceCode](#ac3bc9df20cc108a48a815bb3ac12d12c) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &code) const |
| bool  | [getPANSequenceNumber](#a0d39362259bf38a77deed79a2859051b) (<a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 1 \> &num) const |
| bool  | [getPANSequenceNumber](#a9ddb30e5c8449ac956c5fb23332c7ce7) (int &num) const |
| bool  | [setTransactionCurrencyExp](#a14b479242c47c4fb95ba179b4ffc1fd0) (unsigned char exp) |
| bool  | [getTransactionCurrencyExp](#a6067411ff4ac08ed983b918f83910a80) (unsigned char &exp) const |
| bool  | [setAccountType](#ad75e8a88a01622379a242d0e0f629350) (unsigned char type) |
| bool  | [getAccountType](#a3999a26395349ca33d1fed1027edd1b7) (unsigned char &type) const |
| bool  | [setAmount](#a29ea8e420c17b5aec59fe58ab2953063) (const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount) |
| bool  | [setAmount](#af9a5a22e4c5e805a981c96611ba66a84) (int64_t amount) |
| bool  | [getAmount](#a22c01e4c5ed7df6d063634951268e4e8) (<a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount) const |
| bool  | [getAmount](#a9c8f1c907166321d13b1ba4edf3d7db2) (int64_t &amount) const |
| bool  | [setCashbackAmount](#a43a41c9ee1f9ff39f8bfe7a602cbc93d) (const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount) |
| bool  | [setCashbackAmount](#ad03314c9e1a1a1f0604ac9379ff8e01f) (int64_t amount) |
| bool  | [getCashbackAmount](#adce2b48499554625d4a5d0d312ea4dd0) (<a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount) const |
| bool  | [getCashbackAmount](#a9f203b05014b9d3d05670a8c0d940cc6) (int64_t &amount) const |
| bool  | [getTerminalAID](#a1954efebbe554d727777b029942e18e8) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &aid) const |
| bool  | [getKernelAppVersionNumber](#ae1df5edafde84d7d286df2ee99e80b43) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &version) const |
| bool  | [getChipAppVersionNumber](#a2bb11f40972b297942652292237ca595) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &version) const |
| bool  | [getASRPD](#a5e26345283b02364b4f2ad5b55500e3d) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &asrpd) const |
| bool  | [getCardholderNameExt](#a1bc527fc41230f941d0b5d864622fa0a) (std::string &name) const |
| bool  | [getIACDefault](#ac353b92a5cb3c0f609a39938154cea9c) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &iac) const |
| bool  | [getIACDenial](#a713b329b9095d82fb9b2a9f5570700ad) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &iac) const |
| bool  | [getIACOnline](#aff7585557f19d64883a64d324b515cd3) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &iac) const |
| bool  | [getIssuerAppData](#a39dedefcccb5eba27709d4940a87ad3c) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &idata) const |
| bool  | [getIssuerCodeTableID](#a9604daa5bfb0224c833ecfc8ab908268) (unsigned char &id) const |
| bool  | [getPreferredName](#a7ae5f1582eaa174218ec309ff2c64b2c) (std::string &label) const |
| bool  | [getMerchantID](#a292dea077b233ee2dbc2dc679951cef3) (std::string &mid) const |
| bool  | [getTerminalCountryCode](#a7fdcd205b403d55f1c70e60b77d4b4c7) (unsigned short &country) const |
| bool  | [setFloorLimit](#ab595e9743cf110f2b3f50171ebc00d01) (const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &limit) |
| bool  | [setFloorLimit](#aa515b4e613db7aadde9b59ca6a4d6e1b) (int64_t limit) |
| bool  | [getFloorLimit](#aa4ca8e0f280cf96e95ebaaa7144896ee) (<a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &limit) const |
| bool  | [getFloorLimit](#a80a7761ccbbe9d48abe26a9bb845c590) (int64_t &limit) const |
| bool  | [getIFDSerial](#a32be7437a7f7ac177dd68832ea31f0f7) (<a href="structvfisdi_1_1_array.md">Array</a>\< 8 \> &serial) const |
| bool  | [setTransactionTime](#af69bcffc5b953e56fcb5e4753859fd6a) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &time) |
| bool  | [setTransactionTime](#a75ce81e3dc70a7e166fffcc59de9173d) (const std::string &time) |
| bool  | [getTransactionTime](#a8179180d62d99c64643fa0fdc4f8a996) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &time) const |
| bool  | [getTransactionTime](#a48481357d16a0e96af1c0c90c2761cf0) (std::string &time) const |
| bool  | [setCryptogram](#a16554128021353039e14db07f15a2ddc) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 8 \> &crypt) |
| bool  | [getCryptogram](#a20aa9f38f4f2ab80a2d3c699435722d3) (<a href="structvfisdi_1_1_array.md">Array</a>\< 8 \> &crypt) const |
| bool  | [getCryptogramInfo](#a52d2d97a72ddcddc9f6ff252dbe15da0) (unsigned char &info) const |
| bool  | [getTerminalCapabilities](#a69f4d7f026f4298506088e080dbc332d) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &caps) const |
| bool  | [getCVMResults](#ac3a6ba6bc1ae0675ed42e05ed60bc8a5) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &cvmr) const |
| bool  | [getTerminalType](#a41858348eb0babcc5e7ee61aaa31fcb4) (unsigned char &type) const |
| bool  | [getATC](#af5a86e852a3fc9ebf21c5b6354643b24) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &atc) const |
| bool  | [setUnpredictableNumber](#a3869e44318fae7a974d076eadf1acd18) (unsigned num) |
| bool  | [getUnpredictableNumber](#a4cf2ff328e95fda0733f01f09412c971) (unsigned &num) const |
| bool  | [getPOSEntryMode](#af0a7d48a059d253f4595690d55f38a35) (unsigned char &mode) const |
| bool  | [getAdditionalCapabilities](#a2742ef7d2429c0fe340bc29c046cae3c) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &caps) const |
| bool  | [setTransactionCounter](#acca2b99537fec06f0d1803c3a1702306) (const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 4 \> &counter) |
| bool  | [setTransactionCounter](#a9f25e3917ff526c226ce8650220e3e8f) (int counter) |
| bool  | [getTransactionCounter](#aa760cfd80c28476a0678c6ab4a0f9b33) (<a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 4 \> &counter) const |
| bool  | [getTransactionCounter](#aa43b13b1b74b3db4ac007843fe015a52) (int &counter) const |
| bool  | [setApplicationCurrency](#a855c849eaf29dfbaa486b9c88926f900) (<a href="namespacevfisdi.md#a59f74bf9ae55ffd390b8806b2559021c">Currency</a> currency) |
| bool  | [getApplicationCurrency](#abb508a1ad820ae3ab9c3dab443a395c0) (<a href="namespacevfisdi.md#a59f74bf9ae55ffd390b8806b2559021c">Currency</a> &currency) const |
| bool  | [getDataAuthCode](#a470a51213e4f7d39f5083c8c1b45242d) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &code) const |
| bool  | [getICCDynamicNumber](#a85904ca2d6cdfa3d52a94d56ab209c20) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &dn) const |
| bool  | [getTransactionCategory](#a11e7e5dc1f9dc1cb95a86ee7b25f841f) (unsigned char &cat) const |
| bool  | [getAvailableOfflineAmount](#a12edb21c2efea9b114daecba99dfd37d) (<a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount) const |
| bool  | [getAvailableOfflineAmount](#ac8ff2f6f3f188487a3ff986c59931405) (int64_t &amount) const |
| bool  | [getTransactionQualifier](#a963ccd93741c4a44bd2a26a4cd3eecab) (<a href="structvfisdi_1_1_array.md">Array</a>\< 4 \> &q) const |
| bool  | [setVisaCTQ](#a61443ab6abf864d689c07d9919bcd83d) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &ctq) |
| bool  | [getVisaCTQ](#add4de43f37019b053e243bc8579fafce) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &ctq) const |
| bool  | [setMasterAID](#a73c791c477ee3e571afad9c694719f0d) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &aid) |
| template\<unsigned N\> |  |
| bool  | [setMasterAID](#a0681983bab260a5f6ee31a0d6fa75d2f) (const unsigned char(&v)\[N\]) |
| bool  | [getMasterAID](#a9a9dea71749282886ef2471bcd3cc30a) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &aid) const |
| bool  | [setBuildAppList](#a1e2c6e556b7fd4f9a0289e694836dcd3) (unsigned char opt) |
| bool  | [getBuildAppList](#a4e9557a4bf135beea3f0b9d2271bc3e6) (unsigned char &opt) const |
| bool  | [getReaderNumber](#ad108c15acfc6f0cff9b96b8c9f8962f3) (unsigned char &num) const |
| bool  | [getNonCriticalScriptResults](#a1a2856b4efea60b64e96bfdd994f975e) (std::vector\< <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> \> &results) const |
| bool  | [getCriticalScriptResults](#a500861c36527d46c22afd197ec0ab4c5) (std::vector\< <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> \> &results) const |
| bool  | [setFallbackMIDs](#aa873c4ba7490d4a915015730720cab44) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &mid) |
| bool  | [getFallbackMIDs](#a575a64e54ab99e140150e09888007bc2) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &mid) const |
| bool  | [setEMVFallback](#a7a402df3400009a6e11f0a2e21a4d81f) (unsigned char fb) |
| bool  | [getEMVFallback](#ae9a523919303b0a5213bbea4f8035e5c) (unsigned char &fb) const |
| bool  | [getObfuscatedPAN](#afaa7438c803c0819b686b5b1ec148f75) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &pan) const |
| bool  | [getObfuscatedTrack2](#a62e8644ecc2855893c70d0ebb09d4e8c) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &track) const |
| bool  | [setTACDenial](#a1fbe09894edee9a9defb6392bf9b0d4c) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &tac) |
| bool  | [getTACDenial](#ac315853ec5525af2be4c64f080aeb387) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &tac) const |
| bool  | [setTACOnline](#a54adce7113b725b91b03bc4196f373e5) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &tac) |
| bool  | [getTACOnline](#aafd3a4332acc0a0d47f268fff2d58e51) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &tac) const |
| bool  | [setTACDefault](#aa16dc8da02807d622670272a08e83180) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &tac) |
| bool  | [getTACDefault](#ac7fc5757e37d02f050b8ac83eb859195) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &tac) const |
| bool  | [setThreshold](#a2dec606c02b9ae63632f58cc782f1f6d) (unsigned th) |
| bool  | [getThreshold](#ac262cb7820834aff81225314a6c86ad0) (unsigned &th) const |
| bool  | [setSpecialTransactions](#ae4fd867a3e4118251e40456cc288d972) (const <a href="classvfisdi_1_1_e_m_v_special_transactions.md">EMVSpecialTransactions</a> &tx) |
| bool  | [getSpecialTransactions](#a0e4a0afe63161c7252abc9d7bfc3b559) (<a href="classvfisdi_1_1_e_m_v_special_transactions.md">EMVSpecialTransactions</a> &tx) const |
| bool  | [setLanguage](#a45a58c1db43de5b3cbdea58c7a5436f8) (unsigned char info) |
| bool  | [getLanguage](#acb82c044458a9d0e4bd55948ab942085) (unsigned char &info) const |
| bool  | [setTextID](#af69b45fb4b708150223c6d9776ce224b) (unsigned char id) |
| bool  | [getTextID](#afeeeb276905b1880e5b4b9d429cd2d01) (unsigned char &id) const |
| bool  | [getBalanceBefore](#a06f9976eaa34a0387333a64f9b095a94) (<a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount) const |
| bool  | [getBalanceBefore](#aa1c9d570b0dcdb37369eb69afae8a066) (int64_t &amount) const |
| bool  | [getDefaultAppName](#a27002271f09298ae87fa9b98ae710198) (std::string &appname) const |
| bool  | [getApplicationLabel](#aef3494c3a118d2b57bdc4a7315230d01) (std::string &appname) const |
| bool  | [setAmountConfirmation](#ae44d6104806e03e6822b52c1cb629364) (unsigned char when) |
| bool  | [getAmountConfirmation](#a132e52525a1aa036d991705bacc45349) (unsigned char &when) const |
| bool  | [setTransactionOptions](#a09223f88e07551e197d6abdb5c6eb132) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &opt) |
| bool  | [setTransactionOptions](#a1b9fabcd648e4482c4ff80cdf4e063dc) (const <a href="namespacevfisdi.md#aa3b8e383f2f4b4a88300bbeb10f423bb">EMVTransactionOptions</a> &opt) |
| bool  | [getTransactionOptions](#a6be085e07dfd7589eb3f0804cb7cac55) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &opt) const |
| bool  | [getTransactionOptions](#a5b6922659bb65ad81fbc1d70fb2dd147) (<a href="namespacevfisdi.md#aa3b8e383f2f4b4a88300bbeb10f423bb">EMVTransactionOptions</a> &opt) const |
| bool  | [setTransactionSteps](#aba1b8f48adf11970673a546a9b55e59d) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &step) |
| bool  | [setTransactionSteps](#ab2cb0d3128b548d52a436f83b170a337) (const <a href="namespacevfisdi.md#ab48783102ea080d5f86d54616950c195">EMVTransactionSteps</a> &step) |
| bool  | [getTransactionSteps](#ae54c5207a3697f4de625ef511533d2a7) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &step) const |
| bool  | [getTransactionSteps](#a46dc90ec3e077f136c0159f89e6a6ce0) (<a href="namespacevfisdi.md#ab48783102ea080d5f86d54616950c195">EMVTransactionSteps</a> &step) const |
| bool  | [getBalanceAfter](#a3c63786f906e758de9a94a0ed53865d3) (<a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount) const |
| bool  | [getBalanceAfter](#a484ed2999de2327fa55ce83300531e4a) (int64_t &amount) const |
| bool  | [setDCCInfo](#ae7e98270a763d0d13dd7a4b6a48caee3) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &info) |
| bool  | [getDCCInfo](#a205a0948d9094865e35128eeda5b54e1) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &info) const |
| bool  | [setFallbackMSROptions](#a1035db5058ce4118849df434f192c91b) (unsigned char opt) |
| bool  | [getFallbackMSROptions](#abf9bbb55fa6526c53e801c0e0e3d4857) (unsigned char &opt) const |
| bool  | [setForceOnline](#a2c7ffcfb5edcf7c4d7d31f50e7ff83a2) (unsigned char force) |
| bool  | [getForceOnline](#af46be7c7b03dd7b59a73998e96325522) (unsigned char &force) const |
| bool  | [setPINBypass](#a405b374ab2d4175d087053332d6671a5) (bool bypass) |
| bool  | [getPINBypass](#a311265f562ab91000db77f8952991a89) (bool &bypass) const |
| bool  | [getEMVStatus](#af478ef9501e0eb25ef20935166934fe2) (unsigned &status) const |
| bool  | [setForceAccept](#ac1c4bda81cb538548ff1ef4ad84f2549) (unsigned char force) |
| bool  | [getForceAccept](#a12943982462ac554ae9b2f7b4d7d1b93) (unsigned char &force) const |
| bool  | [setNoDirectorySelect](#a9ca508c1a8ffe02d64199ae7cb6f8c85) (unsigned char nodir) |
| bool  | [getNoDirectorySelect](#a1fb6358d25dc629af023f05b75b1d32b) (unsigned char &nodir) const |
| bool  | [setPreselectedLanguage](#a92c3055d5b39bf82ab545eba378e0ef0) (unsigned char lang) |
| bool  | [getPreselectedLanguage](#a2c0cc0ad0faaa17a338bc3680025b040) (unsigned char &lang) const |
| bool  | [setOnlineSwitch](#a05eb50321cac8cd0d99642cf6da75310) (unsigned char online) |
| bool  | [getOnlineSwitch](#a86b9ca681d4d202029fe93bd037d3a6e) (unsigned char &online) const |
| bool  | [setNoCardholderConfirm](#a7e1e62a0180a27669cdd811035869d32) (unsigned char conf) |
| bool  | [getNoCardholderConfirm](#af13541a4a2218804363a6ef228644644) (unsigned char &conf) const |
| bool  | [setEMVPassthrough](#a7ae0d3ed2397780899cfc5faf7ef8abd) (unsigned char ep) |
| bool  | [getEMVPassthrough](#a1121f832e91848d76d6055ea16af5252) (unsigned char &ep) const |
| bool  | [getPDOLInfo](#abdf58ceaf36c76d5b0ea1bdfa37ce330) (unsigned char &info) const |
| bool  | [getCardType](#a44cb3616647b6bc5f62353bf4eb0abb9) (unsigned char &type) const |
| bool  | [setOnlineResult](#aca7bd5476ce3431b939cb0cea83e4c57) (bool result) |
| bool  | [getOnlineResult](#a6abfaed15e3e3c15ee1bc892145df49f) (bool &result) const |
| bool  | [setVoiceReferral](#ab0ff0ac5ad94d7742c1fd2349aac571f) (bool result) |
| bool  | [getVoiceReferral](#af82273b369d92d066a458c559d43bbba) (bool &result) const |
| bool  | [setAuthData](#ac8331d2f06776b97f255ed2f4890eed3) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &data) |
| template\<unsigned N\> |  |
| bool  | [setAuthData](#a053bd18427ce543edba85a662f22f060) (const unsigned char(&v)\[N\]) |
| bool  | [getAuthData](#a436cd8b24a0185a8132b08dfa820ca53) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &data) const |
| bool  | [setCriticalScript](#ac41876dbd49f59fd423332a3a0c7d077) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &script) |
| template\<unsigned N\> |  |
| bool  | [setCriticalScript](#a835336e6f07e02510f68fe21b2ab3107) (const unsigned char(&v)\[N\]) |
| bool  | [getCriticalScript](#a7ec119f656ae474e27640949fa83c2e6) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &script) const |
| bool  | [setNonCriticalScript](#af2edf9d69099e0fa4779724b2459c217) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &script) |
| template\<unsigned N\> |  |
| bool  | [setNonCriticalScript](#a7d2b6e37f9793a888faab0fbbecf9e99) (const unsigned char(&v)\[N\]) |
| bool  | [getNonCriticalScript](#a6c1426d9f6a529c4e86e333c6342652f) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &script) const |
| bool  | [setAuthResponseReferral](#a52fecf0643155872da0c0236c89d453f) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &ac) |
| bool  | [getAuthResponseReferral](#a3efe3a14d848339e0b0d45f130d20eef) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &ac) const |
| bool  | [setAuthResponseSwitch](#ac86ebed11e6840694b67f56dad02010e) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &resp) |
| bool  | [getAuthResponseSwitch](#adb1133473b905ea63ebac64001f21507) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &resp) const |
| bool  | [setAuthResponseWrongPIN](#ae2de2d2de85e052447537fc2d9c64d0c) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &ac) |
| bool  | [getAuthResponseWrongPIN](#ab5bf99b7d794044cf2c7a26c4780b6c8) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &ac) const |
| bool  | [setAuthResponseOnlinePIN](#afcaa99513fcfbc7ee10a4f020670cc88) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &resp) |
| bool  | [getAuthResponseOnlinePIN](#a22fbd08d67c102a8cf8d40d9d91724c3) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &resp) const |
| bool  | [setAdditionalResponseOK](#a53260cf3f6a6f515a87ac768aaabd84b) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &ac) |
| bool  | [getAdditionalResponseOK](#a5ac63ddb2ab3cd5578212be03df2be77) (<a href="structvfisdi_1_1_array.md">Array</a>\< 2 \> &ac) const |
| bool  | [setWriteDSData](#a744b89076d4b8d940366949be7eb9305) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &dsdata) |
| bool  | [getWriteDSData](#af34b96d0cf583e31954dc1f29b0cad06) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &dsdata) const |
| bool  | [setOfflinePINErrors](#ac0e3bbabeb6b7d22202f60a4c1b40d6c) (unsigned char errors) |
| bool  | [getOfflinePINErrors](#a032a8c4116be90bbf3f5bbf719b826d1) (unsigned char &errors) const |
| bool  | [setWriteDataStoragedData](#a90947c3c3dc3aa0414356665b8d0b779) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &data) |
| bool  | [getWriteDataStoragedData](#a77f6627d8006dba36b1257cb573da0f1) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &data) const |
| bool  | [setDCCForbidden](#ab979f0229fa56d8f129bf460ddd829d3) (unsigned char dcc) |
| bool  | [getDCCForbidden](#a144090e0b69e080ede7c81f0daea9db6) (unsigned char &dcc) const |
| bool  | [setDomesticInfo](#a7d3b373115ea12cdb46e12d92948ace9) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &info) |
| bool  | [getDomesticInfo](#a5e60496d442d9d7033705ae88135adfc) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &info) const |
| bool  | [setDomesticOptions](#adde548042475cc7703d3bad11e31f7ae) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &opt) |
| bool  | [setDomesticOptions](#aecdedce81adcf0d06dbafa6aa016af7b) (const <a href="namespacevfisdi.md#a7fcca20a9f7822f498e8019bb6418bd9">EMVDomesticOptions</a> &opt) |
| bool  | [getDomesticOptions](#ab0c5b96907eb40cde7b21dd2ea3e4a0b) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &opt) const |
| bool  | [getDomesticOptions](#a1e17455340cacff127821b5ef54d9e81) (<a href="namespacevfisdi.md#a7fcca20a9f7822f498e8019bb6418bd9">EMVDomesticOptions</a> &opt) const |
| bool  | [setVelocityOriginalIndex](#a9f5db021c26e6e09c9c4f28af2fb8dae) (unsigned char idx) |
| bool  | [getVelocityOriginalIndex](#a2079cfba6d4c7d14f622b289834c8b15) (unsigned char &idx) const |
| bool  | [getErrorData](#ad6e06a14b08a30d6f666af7c7c4e9685) (<a href="structvfisdi_1_1_array.md">Array</a>\< 15 \> &error) const |
| bool  | [getDisplayTextIndex](#ab0ec6694cb4d96a12749a7b5fbb3c21e) (unsigned char &id) const |
| bool  | [setVelocityProcessingResultBitmap](#a07edd1a4c2600dd60cf56915fdc072af) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &bm) |
| bool  | [getVelocityProcessingResultBitmap](#a749bdbbf03f56f76c09eda7a27971eca) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &bm) const |
| bool  | [getKernelDebug](#a4686bc70b512e3915065ac1028ba9b5d) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &debug) const |
| bool  | [setExcludeAID](#a94799e03509a55a5bd304a62a7158786) (const std::vector\< [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) \> &aid) |
| bool  | [getExcludeAID](#a47d09026694a2553f0eccafe64a94aff) (std::vector\< [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) \> &aid) const |
| bool  | [setExcludeCombos](#a8e7526e928d48fee13f86d3f751bada8) (const std::vector\< std::pair\< [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5), <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> \> \> &combos) |
| bool  | [setCardholderInfo](#a405d6b2d43254a924ce064f59bb734a7) (unsigned char info) |
| bool  | [getCardholderInfo](#a9b97f6a2b9fe084931177cf7f03f3774) (unsigned char &info) const |
| bool  | [setMerchantInfo](#aed97b31ce5e56786f1c987fc2dd1ff4b) (unsigned char info) |
| bool  | [getMerchantInfo](#a5fa1cf34f3661c1175ccf34fe6d7f460) (unsigned char &info) const |
| bool  | [setConfirmAmount](#a0bede37c87ca5f34358dbda81df2c479) (bool confirm) |
| bool  | [getConfirmAmount](#a98560d083a184e5b1900ae3c73a79f05) (bool &confirm) const |
| bool  | [setPANInBlacklist](#a0413bb0ee5e86390630af1939fd43c67) (unsigned char contained) |
| bool  | [getPANInBlacklist](#aee901538b215c198a6e2998bcc566597) (unsigned char &contained) const |
| bool  | [setStoredAmount](#a8f016343f4e695efd1709454240cd64b) (const <a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount) |
| bool  | [setStoredAmount](#a1f6a2eb5d4146eeeeb5eb56dba4e5673) (int64_t amount) |
| bool  | [getStoredAmount](#a32f6b02c313ee2f22ca1e8716589323b) (<a href="classvfisdi_1_1_b_c_d.md">BCD</a>\< 6 \> &amount) const |
| bool  | [getStoredAmount](#ac621377f84d887f97e5ae692303432ff) (int64_t &amount) const |
| bool  | [setSelector](#a8124deb63208158d872bfafb2bd9ef67) (unsigned char sel) |
| bool  | [getSelector](#aa2b3afdd4d652d7657a240966390dc98) (unsigned char &sel) const |
| bool  | [setReducedCanditateList](#adb0a839b6188b5ff12f1f448950210e2) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &cl) |
| template\<unsigned N\> |  |
| bool  | [setReducedCanditateList](#af100bad77dfdbf440cbc73d33b94b22f) (const unsigned char(&v)\[N\]) |
| bool  | [getReducedCanditateList](#a5a0c9f62d152119b0214ab09e8e2d6bc) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &cl) const |
| bool  | [setModifyTransaction](#a80430a5a50816b94951f1986d1561a11) (unsigned char m) |
| bool  | [getModifyTransaction](#aaf5186dbe316fa7c96b5be1e1a7ac787) (unsigned char &m) const |
| bool  | [setSkipPostprocessing](#a1438ef92103dc7875a844702f0e6ec4b) (unsigned char skip) |
| bool  | [getSkipPostprocessing](#a7bc54c742de0706deb34587b1731e188) (unsigned char &skip) const |
| bool  | [setPINInfo](#ad66faf15b1d87e92ba62865a79a6435a) (unsigned char info) |
| bool  | [getPINInfo](#a34de756e5e70e2d2198e436fbcb6e393) (unsigned char &info) const |
| bool  | [setPINPublicModulus](#abcf48233212282df3f1c1f642c4a2a16) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &modulus) |
| template\<unsigned N\> |  |
| bool  | [setPINPublicModulus](#a2e10866f123a7e525c912954376c1e02) (const unsigned char(&v)\[N\]) |
| bool  | [getPINPublicModulus](#a2173a5991bbcf3fc80d79b48687d74eb) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &modulus) const |
| bool  | [setPINPublicExponent](#a482ffd050a25650047e38d921e6dd9b8) (unsigned modulus) |
| bool  | [getPINPublicExponent](#a917c8600fe72e809e0ca9882633fd62b) (unsigned &modulus) const |
| bool  | [setDCCMode](#a84692cb17a083a269110eeb9a0896ba2) (unsigned char mode) |
| bool  | [getDCCMode](#aa1cfb658afb96b40857d4a2c7c09fb51) (unsigned char &mode) const |
| bool  | [setDomesticAppResult](#a7e2b1c600b0523e43fbc275234240be5) (unsigned char res) |
| bool  | [getDomesticAppResult](#ae28be2bd10580f80921c7e043224eeb8) (unsigned char &res) const |
| bool  | [setKernelToUse](#a37d22986e07ddd7797f7e32aac36d819) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &kernel) |
| bool  | [getKernelToUse](#ab5b07272f42a1358d8148094fb642782) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &kernel) const |
| bool  | [setCommunicationError](#ab4a2a0c5a7c0a11a315bdf3e66b60f9f) (unsigned char err) |
| bool  | [getCommunicationError](#ada86b988154ec921f2c490d3f27bdf74) (unsigned char &err) const |
| bool  | [getDestination](#a169b4e5d8a9f7d5bf5d949a89eba16b9) (int &dest) const |
| bool  | [setDataExchangeRequest](#a48a2af9e2722714d5547b22d2ecd6f2c) (unsigned char req) |
| bool  | [getDataExchangeRequest](#afc52e2d634005fe7a73a279b01132e13) (unsigned char &req) const |
| bool  | [setDataExchangeState](#a1ab64a7c79082a5b1325de6879ae8a7e) (unsigned char state) |
| bool  | [getDataExchangeState](#a97008084cf99268fc203c8559debe86f) (unsigned char &state) const |
| bool  | [setDataExchangeMode](#a7a1496238583825b8edc305e9a546d5d) (unsigned char state) |
| bool  | [getDataExchangeMode](#a62681ec8b6d35b0d4d0bd534c05a99b2) (unsigned char &state) const |
| bool  | [setDataExchangeDataNeeded](#a77f41dc63f292bc2a3db17668d4a2e4d) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &dn) |
| template\<unsigned N\> |  |
| bool  | [setDataExchangeDataNeeded](#a8c003f308feae67c5101f596aeffdb1c) (const unsigned char(&v)\[N\]) |
| bool  | [getDataExchangeDataNeeded](#ab3905706a0e0838442335571a8aab794) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &dn) const |
| bool  | [setModifiedCandidates](#af74ac98d87d6290dcb604cd8662578a1) (const [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &cand) |
| template\<unsigned N\> |  |
| bool  | [setModifiedCandidates](#abb1ccb9c8d4d13cb724627ce087ee711) (const unsigned char(&v)\[N\]) |
| bool  | [getModifiedCandidates](#a236a19c333f73e5f8cfb81993f6df322) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &cand) const |
| bool  | [getSetupResult](#ad937c0206bdf3f8b1980e8fc332efde3) (<a href="structvfisdi_1_1_array.md">Array</a>\< 5 \> &result) const |
| bool  | [setCBDisplayTextIndex](#a559ac16ef8a00d3ff4b46f0626fd109f) (unsigned char idx) |
| bool  | [getCBDisplayTextIndex](#adb3c3e0069fa51478554d67600434954) (unsigned char &idx) const |
| bool  | [getCardID](#a6b2eaa0e9a96552d35260f396be28d30) (<a href="structvfisdi_1_1_array.md">Array</a>\< 20 \> &id) const |
| bool  | [getTrackStatus](#a7c550da026b7f5c7eb7fcfcc31f52ab3) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &track_status) const |
| bool  | [getObfuscatedTrack1String](#a76310bdd150c0eadd15b4eb2282acc6f) (std::string &track) const |
| bool  | [getTecselData](#a828ec738e81e93debedbcba587eca203) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &data) const |
| bool  | [setKernelID](#acf57e5f023c2eb15ec9553b1a5eeac5a) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &id) |
| bool  | [setKernelID](#a401e0c9ca0cf63771b81faec6e853411) (unsigned id) |
| bool  | [getKernelID](#ac124e485e36a770c4ee9d7006e746f69) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &id) const |
| bool  | [getKernelID](#a83e1f97ad3d1760c391c7e1883397b97) (unsigned &id) const |
| bool  | [setAppNameChosen](#a4c545804aced64c4bbfef52d4e4dd8f8) (const std::string &name) |
| bool  | [getAppNameChosen](#a318353908444effcc80b3e04b7174021) (std::string &name) const |
| bool  | [setApplicationKernelId](#a2212546665c7ec64ccdaaaf8a0aa9634) (const <a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &id) |
| bool  | [setApplicationKernelId](#a736b7c216068c6cccc430679b1b66ad4) (unsigned id) |
| bool  | [getApplicationKernelId](#a28b1f9363cd396cbf97d6973b9ccea39) (<a href="structvfisdi_1_1_array.md">Array</a>\< 3 \> &id) const |
| bool  | [getApplicationKernelId](#acd25498c0eba3ca82cc444d23b4f1242) (unsigned &id) const |
| bool  | [setAppNameUtf8](#afd566a5ad852fc1b6b4077c3379c6ca1) (const std::string &name) |
| bool  | [getAppNameUtf8](#a5124bb4a5a3b2edbbd74a96dc31a99e4) (std::string &name) const |
| bool  | [getKernelPrivateNonBER](#a8666525eed3adc6d09252c2068ec56c6) ([bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) &nber) const |
| bool  | [setFCIIssuerDiscrData](#a24639703987bf24f5d6d648da6aa4f8f) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &data) |
| bool  | [getFCIIssuerDiscrData](#aa3895c84212c383b9052d3cf42de7845) (<a href="classvfisdi_1_1_t_l_v.md">TLV</a> &data) const |
| bool  | [setMemorySlotUpdateTemplate](#adce850858dc6606b8613844e0131fb80) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &t) |
| bool  | [getMemorySlotUpdateTemplate](#ae950094f144693c7141233f2edf0c0aa) (<a href="classvfisdi_1_1_t_l_v.md">TLV</a> &t) const |
| bool  | [setMemorySlotReadTemplate](#aba97f85963b44e4c2bd0892704093dac) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &t) |
| bool  | [getMemorySlotReadTemplate](#a8d6383318d480b11b7f369207ffbf335) (<a href="classvfisdi_1_1_t_l_v.md">TLV</a> &t) const |
| bool  | [setDomesticApps](#a44f4870023e923c9b968d4b126d60c33) (const std::vector\< [DomesticApp](#structvfisdi_1_1_e_m_v_txn_1_1_domestic_app) \> &app) |
| bool  | [getDomesticApps](#a620bb0cdf403312e6d720f3ac1f9e44f) (std::vector\< [DomesticApp](#structvfisdi_1_1_e_m_v_txn_1_1_domestic_app) \> &app) const |
| bool  | [setFallbackMSR](#a13d7042db2b7d1a153c1c29819f41bfc) (const std::vector\< [FallbackMSR](#structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r) \> &mid) |
| bool  | [getFallbackMSR](#ac93177465cd1b708cef4da23583d9b4d) (std::vector\< [FallbackMSR](#structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r) \> &mid) const |
| bool  | [setCandidateList](#a02a64570bd2fb70b9b74e75fd3545260) (const std::vector\< [Candidate](#structvfisdi_1_1_e_m_v_txn_1_1_candidate) \> &cand) |
| bool  | [getCandidateList](#a6eace38d95dda9bfde71c99572783f0f) (std::vector\< [Candidate](#structvfisdi_1_1_e_m_v_txn_1_1_candidate) \> &cand) const |
| bool  | [setCBCandidateList](#a72fa767909bde5a93b7d56ac62835bbd) (const std::vector\< [CandidateExt](#structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext) \> &cand) |
| bool  | [getCBCandidateList](#a12b95942075f032a218819d7aca72719) (std::vector\< [CandidateExt](#structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext) \> &cand) const |
| bool  | [setDataExchangeReceivedData](#a22cd5491e72ea40e86dc3456412ed65c) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &data) |
| bool  | [getDataExchangeReceivedData](#a83bc16793e4c1c9a5f1461eada6dd425) (<a href="classvfisdi_1_1_t_l_v.md">TLV</a> &data) const |
| bool  | [setDataExchangeSendData](#afd16a6687e77de5af051338706842545) (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &data) |
| bool  | [getDataExchangeSendData](#a8d4ff066ff42dd8f1dfec2ad324e878e) (<a href="classvfisdi_1_1_t_l_v.md">TLV</a> &data) const |
| bool  | [getNFCVASData](#a3e9016a479213f2a262d5691c5b86b3e) (<a href="classvfisdi_1_1_t_l_v.md">TLV</a> &data) const |
| ![-](closed.png) Public Member Functions inherited from <a href="classvfisdi_1_1_t_l_v.md">TLV</a> |  |
|   | <a href="classvfisdi_1_1_t_l_v.md#adadcd6e42174d9efaf5a865af404c110">TLV</a> (const char \*t) |
|   | <a href="classvfisdi_1_1_t_l_v.md#a8a8f3aeb5d4c632ca8016ce176a21747">TLV</a> (unsigned t=0) |
|   | <a href="classvfisdi_1_1_t_l_v.md#a88bf7d93f01d3f32956a08ab6f32f73c">TLV</a> (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) |
|   | <a href="classvfisdi_1_1_t_l_v.md#aed2b08b3df2ad75ba400b3bf8dd774db">TLV</a> (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | <a href="classvfisdi_1_1_t_l_v.md#a75d46eee22a46308f285eb71cae10157">operator=</a> (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#ae930d8b6374a5c5ec0bfd38daf6c1419">assign</a> (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a3eae1500a6c7de2686a8aa681ffda0f9">tag</a> (const char \*t) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#ab1ec860091384b859a71b54ecb0b4981">tag</a> (unsigned t) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#ad19dd4ec1fd1b22699e44b4fbb63a8cd">tag</a> (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) |
| const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &  | <a href="classvfisdi_1_1_t_l_v.md#ab329e76e88f49dd0d203def343e78adb">tag</a> () const |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a82392f1ed229723c1c7df979f4e29087">operator=</a> (const std::string &data) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a92d118aca55189a6549b6ce9c9117d97">operator=</a> (const char \*data) |
|   | <a href="classvfisdi_1_1_t_l_v.md#a3888dcd59dd5acd1ca5b9bee4c2e252a">operator std::string</a> () const |
| std::string  | <a href="classvfisdi_1_1_t_l_v.md#a23bdc20544ca28878b1ffea144ac2730">getString</a> () const |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a223ecb947b6d285e46543dab8042d2c5">operator=</a> (long data) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a1a78e62dcebf1473663ab7952690f3ac">operator=</a> (int data) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a77859fa0bdc7e0f43b79a26fe0da5c23">operator=</a> (unsigned data) |
|   | <a href="classvfisdi_1_1_t_l_v.md#ad7ce59321a0dd63e7f1fab6dceabe53b">operator long</a> () const |
|   | <a href="classvfisdi_1_1_t_l_v.md#a48d27bd92e68c69527589ea65a9af69f">operator int</a> () const |
|   | <a href="classvfisdi_1_1_t_l_v.md#a7fa77e07b31af13679aa65b9cd60e548">operator unsigned</a> () const |
| long  | <a href="classvfisdi_1_1_t_l_v.md#af777e662a783ae11cf93d6b5d355277a">getNumber</a> () const |
| unsigned long  | <a href="classvfisdi_1_1_t_l_v.md#a1ea25a489f43dcbe390a609ba912cbcb">getUnsigned</a> () const |
| void  | <a href="classvfisdi_1_1_t_l_v.md#afd260029cef89db3e86258c8ac847754">operator=</a> (bool data) |
|   | <a href="classvfisdi_1_1_t_l_v.md#a67b76affb3b5d35fa419ac234144038b">operator bool</a> () const |
| bool  | <a href="classvfisdi_1_1_t_l_v.md#a56e70a2d753746f23f8bfb677a030086">getBool</a> () const |
| void  | <a href="classvfisdi_1_1_t_l_v.md#ad6daa5d828624745ba7e25921531f52f">operator=</a> (unsigned char data) |
|   | <a href="classvfisdi_1_1_t_l_v.md#a891f3d5b152d0bd0b8bc27726d45a491">operator unsigned char</a> () const |
| unsigned char  | <a href="classvfisdi_1_1_t_l_v.md#ad1a7498668250d5596044bf990ad35f5">getByte</a> () const |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a4d834054339da8c3b4f06c5b38dd5d30">operator=</a> (const std::vector\< unsigned char \> &data) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a2ed0480b92a6c441073c7de9225f7b0c">operator=</a> (const std::vector\< char \> &data) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#ab7fd53770bccecd3bde53277b9b53a29">assign</a> (const void \*data, unsigned size) |
| std::vector\< unsigned char \> &  | <a href="classvfisdi_1_1_t_l_v.md#a91ff9d66f21f0e4ec5fc1dc4a7f9a7e9">value</a> () |
| const std::vector\< unsigned char \> &  | <a href="classvfisdi_1_1_t_l_v.md#a275964d772537b4db3c7bdec7d53f85c">value</a> () const |
| bool  | <a href="classvfisdi_1_1_t_l_v.md#a34ae3b644043aa36d38f313a8d32217b">load</a> (const std::vector\< unsigned char \> &data, bool indefinite=false) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#ab49c30c493b589a012e3f6889baee8dd">store</a> (std::vector\< unsigned char \> &data, bool use_indefinite=false) const |
| bool  | <a href="classvfisdi_1_1_t_l_v.md#adc704c269fd1ee99360afc447920358d">operator==</a> (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) const |
| bool  | <a href="classvfisdi_1_1_t_l_v.md#a239917db00f9c13d7df8e323582532c8">operator!=</a> (const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &o) const |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a99aee2ed96208af2ef520b3d8e9c6d97">dumptree</a> (bool use_indefinite=false, int indent=0, bool skip_toplevel_tag=true) |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#a5b0bf194cbc6562759f877a82aa5ad28">count</a> () const |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | <a href="classvfisdi_1_1_t_l_v.md#aea4f1a4a85b385f08634a6a8c6e317fa">operator[]</a> (unsigned idx) |
| const <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | <a href="classvfisdi_1_1_t_l_v.md#ada66e365c36d43f34151a9b7f5735c3e">operator[]</a> (unsigned idx) const |
| void  | <a href="classvfisdi_1_1_t_l_v.md#ad1030ac85b7ccb1fe5e190a2d1b40c79">erasepos</a> (unsigned idx) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | <a href="classvfisdi_1_1_t_l_v.md#a30b22ed76f2c6745d8a9d7d075917b72">operator()</a> (const char \*t, unsigned idx=0) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | <a href="classvfisdi_1_1_t_l_v.md#ad329e848a42ff3f39bd29a9f9c8c0b92">operator()</a> (unsigned t, unsigned idx=0) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | <a href="classvfisdi_1_1_t_l_v.md#ad406f97de0275e34b6516777846d2c3b">operator()</a> (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t, unsigned idx=0) |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#a021f777c8da209f75e387bb78f1ddcbe">count</a> (const char \*t) const |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#a60bb5fe248b02ff1ccc01aacca577bd4">count</a> (unsigned t) const |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#a19377f556d4118d75da504a2159398e6">count</a> (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) const |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#a4059a86d9d3afa2b94a53e8a7e428fd9">rename</a> (const char \*from, const char \*to) |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#ab78b6da71aa6afd0e5a46ada612c237f">rename</a> (unsigned from, unsigned to) |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#ad6fb714f198bc53716e9a713757076f0">rename</a> (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &from, const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &to) |
| bool  | <a href="classvfisdi_1_1_t_l_v.md#a27abda24ad246b03c2244f695d7ba639">constructed</a> () const |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | <a href="classvfisdi_1_1_t_l_v.md#aea80d57ebb1a89005665d685ded70bda">add</a> (const char \*t) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | <a href="classvfisdi_1_1_t_l_v.md#a9329215305b8bb3711fe9dbe73398aba">add</a> (unsigned t) |
| <a href="classvfisdi_1_1_t_l_v.md">TLV</a> &  | <a href="classvfisdi_1_1_t_l_v.md#a272a220c4a8e3f194e6472586c6f1b60">add</a> (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) |
| void  | <a href="classvfisdi_1_1_t_l_v.md#ac8bb3912a3ce86b15842e79d0b421204">clear</a> () |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#a932be40e588c0287cb1fa38e4f3a152d">erasetag</a> (const char \*t) |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#a11104ed545ccded52eedb452b0150b08">erasetag</a> (unsigned t) |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#a13f15840dc0bdbf7c90020c6a4bc7ecc">erasetag</a> (const <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a> &t) |

|  |  |
|----|----|
| Protected Member Functions |  |
| bool  | [exists](#afaab4aca1d134a05fb0990b5c78a9575) (unsigned tag1) const |
| bool  | [exists](#a2e12447be1d21f68a93a6f3d62964617) (unsigned tag1, unsigned tag2) const |
| ![-](closed.png) Protected Member Functions inherited from <a href="classvfisdi_1_1_t_l_v.md">TLV</a> |  |
| void  | <a href="classvfisdi_1_1_t_l_v.md#a596d0da8a3f24918e1da061ab58e1ab3">initSize</a> (bool use_indefinite) |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#a3cc82af912384a0099a9646cd0706815">storedSize</a> (bool use_indefinite) const |
| void  | <a href="classvfisdi_1_1_t_l_v.md#aeb3bb0b33fa1d0331fc810db5efddae0">storeAdd</a> (std::vector\< unsigned char \> &data, bool use_indefinite) const |
| bool  | <a href="classvfisdi_1_1_t_l_v.md#af502026d9727fde52b81a3a64f3c620e">load</a> (const unsigned char \*&start, const unsigned char \*end, bool indefinite=false) |

|  |  |
|----|----|
| Additional Inherited Members |  |
| ![-](closed.png) Protected Attributes inherited from <a href="classvfisdi_1_1_t_l_v.md">TLV</a> |  |
| <a href="classvfisdi_1_1_t_l_v_1_1_tag.md">Tag</a>  | <a href="classvfisdi_1_1_t_l_v.md#a48ed14e787b1be6dd92a2782d11a4ff4">m_tag</a> |
| std::vector\< unsigned char \>  | <a href="classvfisdi_1_1_t_l_v.md#a4252108bbe731880b31e853b01cd16d0">m_data</a> |
| std::vector\< std::shared_ptr\< <a href="classvfisdi_1_1_t_l_v.md">TLV</a> \> \>  | <a href="classvfisdi_1_1_t_l_v.md#afcc2734e12c53b8280390e586b4daf54">m_child</a> |
| unsigned  | <a href="classvfisdi_1_1_t_l_v.md#abf78ef14b931e61d33be622a0605f454">m_contentsize</a> |

## DetailedDescription {#detailed-description}

SDI EMV transaction context, provides set/get functions for common data elements

------------------------------------------------------------------------

## DataStructure Documentation {#data-structure-documentation}

## vfisdi::EMVTxn::Candidate <a href="#structvfisdi_1_1_e_m_v_txn_1_1_candidate" id="structvfisdi_1_1_e_m_v_txn_1_1_candidate"></a>

<p>struct vfisdi::EMVTxn::Candidate</p>

[Candidate](#structvfisdi_1_1_e_m_v_txn_1_1_candidate)

| Data Fields |  |  |
|----|----|----|
| [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) | aid | <p>(DF04)</p> |
| string | appName | <p>(50)<br/></p> |

## vfisdi::EMVTxn::CandidateExt <a href="#structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext" id="structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext"></a>

<p>struct vfisdi::EMVTxn::CandidateExt</p>

[Candidate](#structvfisdi_1_1_e_m_v_txn_1_1_candidate) entry in callback

| Data Fields |  |  |
|----|----|----|
| [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) | aid | <p>(DF04)</p> |
| string | appName | <p>(50)<br/></p> |
| unsigned | kernelID | <p>(DFD003)</p> |
| string | language | <p>(5F2D)</p> |
| unsigned char | velocityOrigIdx | <p>(DF60)</p> |
| unsigned char | velocityProcResult | <p>(DF63)</p> |

## vfisdi::EMVTxn::DomesticApp <a href="#structvfisdi_1_1_e_m_v_txn_1_1_domestic_app" id="structvfisdi_1_1_e_m_v_txn_1_1_domestic_app"></a>

<p>struct vfisdi::EMVTxn::DomesticApp</p>

domestic application information

| Data Fields |  |  |
|----|----|----|
| [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5) | aid | <p>(DF04)<br/></p> |
| string | appLabel | <p>(50)<br/></p> |
| unsigned char | asi | <p>(DFAB02)</p> |
| unsigned char | noEMVConformSelect | <p>(DF6A)<br/></p> |
| unsigned char | specialTX\[8\] | <p>(DF1C)<br/></p> |

## vfisdi::EMVTxn::FallbackMSR <a href="#structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r" id="structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r"></a>

<p>struct vfisdi::EMVTxn::FallbackMSR</p>

fallback configuration

| Data Fields   |                |                                 |
|---------------|----------------|---------------------------------|
| unsigned char | fallback       | <p>(DF18)</p> |
| unsigned char | mid            | <p>(DF17)</p> |
| unsigned char | options        | <p>(DF3A)</p> |
| unsigned char | specialTX\[8\] | <p>(DF1C)</p> |

## MemberTypedef Documentation {#member-typedef-documentation}

## bytevector <a href="#a64b5be62be31dcda165d2c6c3c262fb5" id="a64b5be62be31dcda165d2c6c3c262fb5"></a>

<p>typedef std::vector\<unsigned char\> [bytevector](#a64b5be62be31dcda165d2c6c3c262fb5)</p>

byte vector typedef

## MemberFunction Documentation {#member-function-documentation}

## exists()\[1/2\] <a href="#afaab4aca1d134a05fb0990b5c78a9575" id="afaab4aca1d134a05fb0990b5c78a9575"></a> {#exists-12}

<p>bool exists</p>

protected

## exists()\[2/2\] <a href="#a2e12447be1d21f68a93a6f3d62964617" id="a2e12447be1d21f68a93a6f3d62964617"></a> {#exists-22}

<p>bool exists</p>

protected

## getAccountType() <a href="#a3999a26395349ca33d1fed1027edd1b7" id="a3999a26395349ca33d1fed1027edd1b7"></a>

<p>bool getAccountType</p>

get account type

**Parameters**

\[out\] **type** account type (5F57)

### Returns

true if successful, false if not found

## getAdditionalCapabilities() <a href="#a2742ef7d2429c0fe340bc29c046cae3c" id="a2742ef7d2429c0fe340bc29c046cae3c"></a>

<p>bool getAdditionalCapabilities</p>

get additional terminal capabilities

**Parameters**

\[out\] **caps** terminal capabilities (9F40)

### Returns

true if successful, false in case of invalid format

## getAdditionalResponseOK() <a href="#a5ac63ddb2ab3cd5578212be03df2be77" id="a5ac63ddb2ab3cd5578212be03df2be77"></a>

<p>bool getAdditionalResponseOK</p>

get additional host AC which is considered positive

**Parameters**

\[out\] **ac** host AC (DF57)

### Returns

true if successful, false if not found or invalid format

## getAgreedAppName() <a href="#a3e2e667cc1620a9e590dc9317a57bfc0" id="a3e2e667cc1620a9e590dc9317a57bfc0"></a>

<p>bool getAgreedAppName</p>

get agreed application name

**Parameters**

\[out\] **name** agreed application name (50/9F12)

### Returns

true if successful, false if not found

## getAID() <a href="#a23c0f9cbcb8eac7af6d7ef6a9701f2de" id="a23c0f9cbcb8eac7af6d7ef6a9701f2de"></a>

<p>bool getAID</p>

get AID

**Parameters**

\[out\] **aid** AID (4F)

### Returns

true if successful, false if not found

## getAIP() <a href="#a22fb2842fa8fb5125f27e0ab61a4916f" id="a22fb2842fa8fb5125f27e0ab61a4916f"></a>

<p>bool getAIP</p>

get application interchange profile

**Parameters**

\[out\] **aip** application interchange profile (82)

### Returns

true if successful, false if not found or invalid format

## getAmount()\[1/2\] <a href="#a22c01e4c5ed7df6d063634951268e4e8" id="a22c01e4c5ed7df6d063634951268e4e8"></a> {#getamount-12}

<p>bool getAmount</p>

get transaction amount

**Parameters**

\[out\] **amount** transaction amount (9F02)

### Returns

true if successful, false if not found or invalid format

## getAmount()\[2/2\] <a href="#a9c8f1c907166321d13b1ba4edf3d7db2" id="a9c8f1c907166321d13b1ba4edf3d7db2"></a> {#getamount-22}

<p>bool getAmount</p>

get transaction amount

**Parameters**

\[out\] **amount** transaction amount (9F02)

### Returns

true if successful, false if not found or invalid format

## getAmountConfirmation() <a href="#a132e52525a1aa036d991705bacc45349" id="a132e52525a1aa036d991705bacc45349"></a>

<p>bool getAmountConfirmation</p>

get amount confirmation

**Parameters**

\[out\] **when** (DF34)

### Returns

true if successful, false if not found

## getApplicationCurrency() <a href="#abb508a1ad820ae3ab9c3dab443a395c0" id="abb508a1ad820ae3ab9c3dab443a395c0"></a>

<p>bool getApplicationCurrency</p>

get application currency

**Parameters**

\[out\] **currency** application currency (9F42)

### Returns

true if successful, false if not found

## getApplicationKernelId()\[1/2\] <a href="#a28b1f9363cd396cbf97d6973b9ccea39" id="a28b1f9363cd396cbf97d6973b9ccea39"></a> {#getapplicationkernelid-12}

<p>bool getApplicationKernelId</p>

get application kernel ID

**Parameters**

\[out\] **id** application kernel ID (DFD003)

### Returns

true if successful, false if not found or invalid format

## getApplicationKernelId()\[2/2\] <a href="#acd25498c0eba3ca82cc444d23b4f1242" id="acd25498c0eba3ca82cc444d23b4f1242"></a> {#getapplicationkernelid-22}

<p>bool getApplicationKernelId</p>

get application kernel ID

**Parameters**

\[out\] **id** application kernel ID (DFD003)

### Returns

true if successful, false if not found or invalid format

## getApplicationLabel() <a href="#aef3494c3a118d2b57bdc4a7315230d01" id="aef3494c3a118d2b57bdc4a7315230d01"></a>

<p>bool getApplicationLabel</p>

get application label

**Parameters**

\[out\] **appname** application label (DF33)

### Returns

true if successful, false if not found

## getApplicationPriorityID() <a href="#aa3822824c808b30140c9f88394839427" id="aa3822824c808b30140c9f88394839427"></a>

<p>bool getApplicationPriorityID</p>

get application priority ID

**Parameters**

\[out\] **id** application priority ID (87)

### Returns

true if successful, false if not found

## getAppName() <a href="#a182e23eeefddc5125d3ce3b63a825815" id="a182e23eeefddc5125d3ce3b63a825815"></a>

<p>bool getAppName</p>

get application name

**Parameters**

\[out\] **label** application name (50/DFAB22)

### Returns

true if successful, false if not found

## getAppNameChosen() <a href="#a318353908444effcc80b3e04b7174021" id="a318353908444effcc80b3e04b7174021"></a>

<p>bool getAppNameChosen</p>

get chosen application name

**Parameters**

\[out\] **name** chosen application name (DFD002)

### Returns

true if successful, false if not found

## getAppNameUtf8() <a href="#a5124bb4a5a3b2edbbd74a96dc31a99e4" id="a5124bb4a5a3b2edbbd74a96dc31a99e4"></a>

<p>bool getAppNameUtf8</p>

get application name in UTF-8

**Parameters**

\[out\] **name** application name in UTF-8 (DFD00B)

### Returns

true if successful, false if not found

## getASRPD() <a href="#a5e26345283b02364b4f2ad5b55500e3d" id="a5e26345283b02364b4f2ad5b55500e3d"></a>

<p>bool getASRPD</p>

get ASRPD

**Parameters**

\[out\] **asrpd** ASRPD (9F0A)

### Returns

true if successful, false if not found

## getATC() <a href="#af5a86e852a3fc9ebf21c5b6354643b24" id="af5a86e852a3fc9ebf21c5b6354643b24"></a>

<p>bool getATC</p>

get application transaction counter

**Parameters**

\[out\] **atc** application transaction counter (9F36)

### Returns

true if successful, false if not found or invalid format

## getAuthCode() <a href="#ab5e9d49d4a61b323c0718808dab185d3" id="ab5e9d49d4a61b323c0718808dab185d3"></a>

<p>bool getAuthCode</p>

get value given by the card issuer for an accepted transaction

**Parameters**

\[out\] **code** authorization code (89)

### Returns

true if successful, false if not found or invalid format

## getAuthData() <a href="#a436cd8b24a0185a8132b08dfa820ca53" id="a436cd8b24a0185a8132b08dfa820ca53"></a>

<p>bool getAuthData</p>

get issuer authentication data

**Parameters**

\[out\] **data** issuer authentication data (DF52)

### Returns

true if successful, false if not found

## getAuthResponseCode() <a href="#acb7af559de0f1913e64b619b7b8bf0a9" id="acb7af559de0f1913e64b619b7b8bf0a9"></a>

<p>bool getAuthResponseCode</p>

get authorization response code

**Parameters**

\[out\] **auth** authorization response code (8A)

### Returns

true if successful, false if not found or invalid format

## getAuthResponseOnlinePIN() <a href="#a22fbd08d67c102a8cf8d40d9d91724c3" id="a22fbd08d67c102a8cf8d40d9d91724c3"></a>

<p>bool getAuthResponseOnlinePIN</p>

get response code for online PIN

**Parameters**

\[out\] **resp** response code (DF56)

### Returns

true if successful, false if not found or invalid format

## getAuthResponseReferral() <a href="#a3efe3a14d848339e0b0d45f130d20eef" id="a3efe3a14d848339e0b0d45f130d20eef"></a>

<p>bool getAuthResponseReferral</p>

get host AC for an issuer referral

**Parameters**

\[out\] **ac** host AC for an issuer referral (DF55)

### Returns

true if successful, false if not found or invalid format

## getAuthResponseSwitch() <a href="#adb1133473b905ea63ebac64001f21507" id="adb1133473b905ea63ebac64001f21507"></a>

<p>bool getAuthResponseSwitch</p>

get response code for switch interface

**Parameters**

\[out\] **resp** response code (DF55)

### Returns

true if successful, false if not found or invalid format

## getAuthResponseWrongPIN() <a href="#ab5bf99b7d794044cf2c7a26c4780b6c8" id="ab5bf99b7d794044cf2c7a26c4780b6c8"></a>

<p>bool getAuthResponseWrongPIN</p>

get host AC for a wrong online PIN

**Parameters**

\[out\] **ac** host AC for a wrong online PIN (DF56)

### Returns

true if successful, false if not found or invalid format

## getAvailableOfflineAmount()\[1/2\] <a href="#a12edb21c2efea9b114daecba99dfd37d" id="a12edb21c2efea9b114daecba99dfd37d"></a> {#getavailableofflineamount-12}

<p>bool getAvailableOfflineAmount</p>

get available offline spending amout

**Parameters**

\[out\] **amount** available amount (9F5D)

### Returns

true if successful, false if not found or invalid format

## getAvailableOfflineAmount()\[2/2\] <a href="#ac8ff2f6f3f188487a3ff986c59931405" id="ac8ff2f6f3f188487a3ff986c59931405"></a> {#getavailableofflineamount-22}

<p>bool getAvailableOfflineAmount</p>

get available offline spending amout

**Parameters**

\[out\] **amount** available amount (9F5D)

### Returns

true if successful, false if not found or invalid format

## getBalanceAfter()\[1/2\] <a href="#a3c63786f906e758de9a94a0ed53865d3" id="a3c63786f906e758de9a94a0ed53865d3"></a> {#getbalanceafter-12}

<p>bool getBalanceAfter</p>

get balance after GenAC

**Parameters**

\[out\] **amount** balance (DF38)

### Returns

true if successful, false if not found or invalid format

## getBalanceAfter()\[2/2\] <a href="#a484ed2999de2327fa55ce83300531e4a" id="a484ed2999de2327fa55ce83300531e4a"></a> {#getbalanceafter-22}

<p>bool getBalanceAfter</p>

get balance after GenAC

**Parameters**

\[out\] **amount** balance (DF38)

### Returns

true if successful, false if not found or invalid format

## getBalanceBefore()\[1/2\] <a href="#a06f9976eaa34a0387333a64f9b095a94" id="a06f9976eaa34a0387333a64f9b095a94"></a> {#getbalancebefore-12}

<p>bool getBalanceBefore</p>

get balance before GenAC

**Parameters**

\[out\] **amount** balance (DF32)

### Returns

true if successful, false if not found or invalid format

## getBalanceBefore()\[2/2\] <a href="#aa1c9d570b0dcdb37369eb69afae8a066" id="aa1c9d570b0dcdb37369eb69afae8a066"></a> {#getbalancebefore-22}

<p>bool getBalanceBefore</p>

get balance before GenAC

**Parameters**

\[out\] **amount** balance (DF32)

### Returns

true if successful, false if not found or invalid format

## getBeepScenario() <a href="#a8f463c85de1a0ca552942ed68167f508" id="a8f463c85de1a0ca552942ed68167f508"></a>

<p>bool getBeepScenario</p>

get beep scenario

**Parameters**

\[out\] **bs** beep scenario (CB)

### Returns

true if successful, false if not found

## getBuildAppList() <a href="#a4e9557a4bf135beea3f0b9d2271bc3e6" id="a4e9557a4bf135beea3f0b9d2271bc3e6"></a>

<p>bool getBuildAppList</p>

get build list options (see <a href="namespacevfisdi.md#a02bb8f6a423b436e4ca090da42697125">EMVBuildOptions</a>)

**Parameters**

\[out\] **opt** build list options (see EMVBuildOptions) (DF05)

### Returns

true if successful, false if not found

## getCandidateList() <a href="#a6eace38d95dda9bfde71c99572783f0f" id="a6eace38d95dda9bfde71c99572783f0f"></a>

<p>bool getCandidateList</p>

get candidate list

**Parameters**

\[out\] **cand** candidate list (FF03)

### Returns

true if successful, false if not found

## getCardholderInfo() <a href="#a9b97f6a2b9fe084931177cf7f03f3774" id="a9b97f6a2b9fe084931177cf7f03f3774"></a>

<p>bool getCardholderInfo</p>

get cardholder information for callback

**Parameters**

\[out\] **info** cardholder information (DF6E)

### Returns

true if successful, false if not found

## getCardholderName() <a href="#a7e2e8088a66943208867d9bb95f22114" id="a7e2e8088a66943208867d9bb95f22114"></a>

<p>bool getCardholderName</p>

get cardholder name

**Parameters**

\[out\] **name** cardholder name (5F20)

### Returns

true if successful, false if not found

## getCardholderNameExt() <a href="#a1bc527fc41230f941d0b5d864622fa0a" id="a1bc527fc41230f941d0b5d864622fa0a"></a>

<p>bool getCardholderNameExt</p>

get extended card holder name

**Parameters**

\[out\] **name** extended card holder name (9F0B)

### Returns

true if successful, false if not found

## getCardID() <a href="#a6b2eaa0e9a96552d35260f396be28d30" id="a6b2eaa0e9a96552d35260f396be28d30"></a>

<p>bool getCardID</p>

get card ID token

**Parameters**

\[out\] **id** card ID token (DFA014)

### Returns

true if successful, false if not found or invalid format

## getCardType() <a href="#a44cb3616647b6bc5f62353bf4eb0abb9" id="a44cb3616647b6bc5f62353bf4eb0abb9"></a>

<p>bool getCardType</p>

get card type

**Parameters**

\[out\] **type** card type (DF4F)

### Returns

true if successful, false if not found

## getCashbackAmount()\[1/2\] <a href="#adce2b48499554625d4a5d0d312ea4dd0" id="adce2b48499554625d4a5d0d312ea4dd0"></a> {#getcashbackamount-12}

<p>bool getCashbackAmount</p>

get cashback amount

**Parameters**

\[out\] **amount** cashback amount (9F03)

### Returns

true if successful, false if not found or invalid format

## getCashbackAmount()\[2/2\] <a href="#a9f203b05014b9d3d05670a8c0d940cc6" id="a9f203b05014b9d3d05670a8c0d940cc6"></a> {#getcashbackamount-22}

<p>bool getCashbackAmount</p>

get cashback amount

**Parameters**

\[out\] **amount** cashback amount (9F03)

### Returns

true if successful, false if not found or invalid format

## getCBCandidateList() <a href="#a12b95942075f032a218819d7aca72719" id="a12b95942075f032a218819d7aca72719"></a>

<p>bool getCBCandidateList</p>

get candidate list (in EMV callback)

**Parameters**

\[out\] **cand** candidate list

### Returns

true if successful, false if not found

## getCBDisplayTextIndex() <a href="#adb3c3e0069fa51478554d67600434954" id="adb3c3e0069fa51478554d67600434954"></a>

<p>bool getCBDisplayTextIndex</p>

get callback display text index

**Parameters**

\[out\] **idx** callback display text index (DF8F12)

### Returns

true if successful, false if not found

## getChipAppVersionNumber() <a href="#a2bb11f40972b297942652292237ca595" id="a2bb11f40972b297942652292237ca595"></a>

<p>bool getChipAppVersionNumber</p>

get chip application version number

**Parameters**

\[out\] **version** chip version number (9F09)

### Returns

true if successful, false if not found or invalid format

## getCommunicationError() <a href="#ada86b988154ec921f2c490d3f27bdf74" id="ada86b988154ec921f2c490d3f27bdf74"></a>

<p>bool getCommunicationError</p>

get communication error

**Parameters**

\[out\] **err** communication error (DF7F)

### Returns

true if successful, false if not found

## getConfirmAmount() <a href="#a98560d083a184e5b1900ae3c73a79f05" id="a98560d083a184e5b1900ae3c73a79f05"></a>

<p>bool getConfirmAmount</p>

get confirm amount

**Parameters**

\[out\] **confirm** confirm amount (DF71)

### Returns

true if successful, false if not found

## getCriticalScript() <a href="#a7ec119f656ae474e27640949fa83c2e6" id="a7ec119f656ae474e27640949fa83c2e6"></a>

<p>bool getCriticalScript</p>

get critical scripts to be performed prior to 2nd Generate AC

**Parameters**

\[out\] **script** critical script (DF53)

### Returns

true if successful, false if not found

## getCriticalScriptResults() <a href="#a500861c36527d46c22afd197ec0ab4c5" id="a500861c36527d46c22afd197ec0ab4c5"></a>

<p>bool getCriticalScriptResults</p>

get critical script results

**Parameters**

\[out\] **results** critical script results (DF08)

### Returns

true if successful, false if not found

## getCryptogram() <a href="#a20aa9f38f4f2ab80a2d3c699435722d3" id="a20aa9f38f4f2ab80a2d3c699435722d3"></a>

<p>bool getCryptogram</p>

get application cryptogram

**Parameters**

\[out\] **crypt** application cryptogram (9F26)

### Returns

true if successful, false if not found or invalid format

## getCryptogramInfo() <a href="#a52d2d97a72ddcddc9f6ff252dbe15da0" id="a52d2d97a72ddcddc9f6ff252dbe15da0"></a>

<p>bool getCryptogramInfo</p>

get cryptogram information

**Parameters**

\[out\] **info** cryptogram information (9F27)

### Returns

true if successful, false if not found

## getCtlsLEDState() <a href="#af3a8a6ee3b1c667e4ab5b7be3749699f" id="af3a8a6ee3b1c667e4ab5b7be3749699f"></a>

<p>bool getCtlsLEDState</p>

get LED state

**Parameters**

\[out\] **state** LED state (C8)

### Returns

true if successful, false if not found

## getCVMList() <a href="#a54d72993a2cac07bdb1b05cc10abb4fc" id="a54d72993a2cac07bdb1b05cc10abb4fc"></a>

<p>bool getCVMList</p>

get CVM list

**Parameters**

\[out\] **list** CVM list (8E)

### Returns

true if successful, false if not found or invalid format

## getCVMResults() <a href="#ac3a6ba6bc1ae0675ed42e05ed60bc8a5" id="ac3a6ba6bc1ae0675ed42e05ed60bc8a5"></a>

<p>bool getCVMResults</p>

get CVM results

**Parameters**

\[out\] **cvmr** CVM results (9F34)

### Returns

true if successful, false if not found or invalid format

## getDataAuthCode() <a href="#a470a51213e4f7d39f5083c8c1b45242d" id="a470a51213e4f7d39f5083c8c1b45242d"></a>

<p>bool getDataAuthCode</p>

get data authentication code

**Parameters**

\[out\] **code** data authentication code (9F45)

### Returns

true if successful, false if not found or invalid format

## getDataExchangeDataNeeded() <a href="#ab3905706a0e0838442335571a8aab794" id="ab3905706a0e0838442335571a8aab794"></a>

<p>bool getDataExchangeDataNeeded</p>

get data needed for data exchange

**Parameters**

\[out\] **dn** data needed (DF8106)

### Returns

true if successful, false if not found

## getDataExchangeMode() <a href="#a62681ec8b6d35b0d4d0bd534c05a99b2" id="a62681ec8b6d35b0d4d0bd534c05a99b2"></a>

<p>bool getDataExchangeMode</p>

get data exchange mode

**Parameters**

\[out\] **state** data exchange mode (DF8012)

### Returns

true if successful, false if not found

## getDataExchangeReceivedData() <a href="#a83bc16793e4c1c9a5f1461eada6dd425" id="a83bc16793e4c1c9a5f1461eada6dd425"></a>

<p>bool getDataExchangeReceivedData</p>

get received data exchange data

**Parameters**

\[out\] **data** received data exchange data (FF10)

### Returns

true if successful, false if not found

## getDataExchangeRequest() <a href="#afc52e2d634005fe7a73a279b01132e13" id="afc52e2d634005fe7a73a279b01132e13"></a>

<p>bool getDataExchangeRequest</p>

get data exchange request

**Parameters**

\[out\] **req** data exchange request (DF8010)

### Returns

true if successful, false if not found

## getDataExchangeSendData() <a href="#a8d4ff066ff42dd8f1dfec2ad324e878e" id="a8d4ff066ff42dd8f1dfec2ad324e878e"></a>

<p>bool getDataExchangeSendData</p>

get data exchange data to be sent

**Parameters**

\[out\] **data** data exchange data to be sent (FF8104)

### Returns

true if successful, false if not found

## getDataExchangeState() <a href="#a97008084cf99268fc203c8559debe86f" id="a97008084cf99268fc203c8559debe86f"></a>

<p>bool getDataExchangeState</p>

get data exchange state

**Parameters**

\[out\] **state** data exchange state (DF8011)

### Returns

true if successful, false if not found

## getDCCForbidden() <a href="#a144090e0b69e080ede7c81f0daea9db6" id="a144090e0b69e080ede7c81f0daea9db6"></a>

<p>bool getDCCForbidden</p>

get DCC forbidden

**Parameters**

\[out\] **dcc** DCC forbidden (DF5B)

### Returns

true if successful, false if not found

## getDCCInfo() <a href="#a205a0948d9094865e35128eeda5b54e1" id="a205a0948d9094865e35128eeda5b54e1"></a>

<p>bool getDCCInfo</p>

get DCC info

**Parameters**

\[out\] **info** DCC info (DF39)

### Returns

true if successful, false if not found or invalid format

## getDCCMode() <a href="#aa1cfb658afb96b40857d4a2c7c09fb51" id="aa1cfb658afb96b40857d4a2c7c09fb51"></a>

<p>bool getDCCMode</p>

get DCC mode

**Parameters**

\[out\] **mode** DCC mode (DF7D)

### Returns

true if successful, false if not found

## getDefaultAppName() <a href="#a27002271f09298ae87fa9b98ae710198" id="a27002271f09298ae87fa9b98ae710198"></a>

<p>bool getDefaultAppName</p>

## getDestination() <a href="#a169b4e5d8a9f7d5bf5d949a89eba16b9" id="a169b4e5d8a9f7d5bf5d949a89eba16b9"></a>

<p>bool getDestination</p>

get destination (or source in case of result): Countertop: 01 / EPP:02 (DFA150)

### Returns

true if successful, false if not found

## getDFName() <a href="#a0c3eb9c659b94c3c83d6fa52ee045f38" id="a0c3eb9c659b94c3c83d6fa52ee045f38"></a>

<p>bool getDFName</p>

get dedicated file (DF) name

**Parameters**

\[out\] **name** dedicated file name (84)

### Returns

true if successful, false if not found

## getDisplayTextIndex() <a href="#ab0ec6694cb4d96a12749a7b5fbb3c21e" id="ab0ec6694cb4d96a12749a7b5fbb3c21e"></a>

<p>bool getDisplayTextIndex</p>

get display text index

**Parameters**

\[out\] **id** display text index (DF63)

### Returns

true if successful, false if not found

## getDomesticAppResult() <a href="#ae28be2bd10580f80921c7e043224eeb8" id="ae28be2bd10580f80921c7e043224eeb8"></a>

<p>bool getDomesticAppResult</p>

get domestic application result

**Parameters**

\[out\] **res** domestic application result (DF7E)

### Returns

true if successful, false if not found

## getDomesticApps() <a href="#a620bb0cdf403312e6d720f3ac1f9e44f" id="a620bb0cdf403312e6d720f3ac1f9e44f"></a>

<p>bool getDomesticApps</p>

get domestic applications

**Parameters**

\[out\] **app** array of domestic applications (FF01)

### Returns

true if successful, false if not found

## getDomesticInfo() <a href="#a5e60496d442d9d7033705ae88135adfc" id="a5e60496d442d9d7033705ae88135adfc"></a>

<p>bool getDomesticInfo</p>

get domestic information

**Parameters**

\[out\] **info** domestic information (DF5C)

### Returns

true if successful, false if not found or invalid format

## getDomesticOptions()\[1/2\] <a href="#ab0c5b96907eb40cde7b21dd2ea3e4a0b" id="ab0c5b96907eb40cde7b21dd2ea3e4a0b"></a> {#getdomesticoptions-12}

<p>bool getDomesticOptions</p>

get domestic options

**Parameters**

\[out\] **opt** domestic options (DF5D)

### Returns

true if successful, false if not found or invalid format

## getDomesticOptions()\[2/2\] <a href="#a1e17455340cacff127821b5ef54d9e81" id="a1e17455340cacff127821b5ef54d9e81"></a> {#getdomesticoptions-22}

<p>bool getDomesticOptions</p>

inline

get domestic options

**Parameters**

\[out\] **opt** domestic options (DF5D)

### Returns

true if successful, false if not found or invalid format

## getEffectiveDate()\[1/2\] <a href="#aab6007b9544521c765ee365f4e3e4297" id="aab6007b9544521c765ee365f4e3e4297"></a> {#geteffectivedate-12}

<p>bool getEffectiveDate</p>

get effective date

**Parameters**

\[out\] **date** binary date in the format YYMMDD (5F25)

### Returns

true if successful, false if not found or invalid format

## getEffectiveDate()\[2/2\] <a href="#a2c12d3f69ef23adb6bff6191b80c3fe0" id="a2c12d3f69ef23adb6bff6191b80c3fe0"></a> {#geteffectivedate-22}

<p>bool getEffectiveDate</p>

get effective date

**Parameters**

\[out\] **date** binary date in the format YYMMDD (5F25)

### Returns

true if successful, false if not found or invalid format

## getEMVFallback() <a href="#ae9a523919303b0a5213bbea4f8035e5c" id="ae9a523919303b0a5213bbea4f8035e5c"></a>

<p>bool getEMVFallback</p>

get How to handle Fallback after Final select for the selected application

**Parameters**

\[out\] **fb** How to handle Fallback after Final select for the selected application (DF18)

### Returns

true if successful, false if not found

## getEMVPassthrough() <a href="#a1121f832e91848d76d6055ea16af5252" id="a1121f832e91848d76d6055ea16af5252"></a>

<p>bool getEMVPassthrough</p>

get EMV passthrough

**Parameters**

\[out\] **ep** EMV passthrough (DF4E)

### Returns

true if successful, false if not found

## getEMVStatus() <a href="#af478ef9501e0eb25ef20935166934fe2" id="af478ef9501e0eb25ef20935166934fe2"></a>

<p>bool getEMVStatus</p>

get EMV status

**Parameters**

\[out\] **status** EMV status, see EMVStatusInformation (DF42)

### Returns

true if successful, false if not found

## getErrorData() <a href="#ad6e06a14b08a30d6f666af7c7c4e9685" id="ad6e06a14b08a30d6f666af7c7c4e9685"></a>

<p>bool getErrorData</p>

get additional error data

**Parameters**

\[out\] **error** additional error data (DF62)

### Returns

true if successful, false if not found or invalid format

## getExcludeAID() <a href="#a47d09026694a2553f0eccafe64a94aff" id="a47d09026694a2553f0eccafe64a94aff"></a>

<p>bool getExcludeAID</p>

get list of excluded AIDs

**Parameters**

\[out\] **aid** array of AIDs (DF69)

### Returns

true if successful, false if not found

## getExpirationDate() <a href="#ae16935dc1e17bbaa1de7aaf93e1aa200" id="ae16935dc1e17bbaa1de7aaf93e1aa200"></a>

<p>bool getExpirationDate</p>

get expiration date

**Parameters**

\[out\] **date** expiration date (5F24)

### Returns

true if successful, false if not found or invalid format

## getFallbackMIDs() <a href="#a575a64e54ab99e140150e09888007bc2" id="a575a64e54ab99e140150e09888007bc2"></a>

<p>bool getFallbackMIDs</p>

get fallback MIDs

**Parameters**

\[out\] **mid** fallback MIDs (DF17)

### Returns

true if successful, false if not found or invalid format

## getFallbackMSR() <a href="#ac93177465cd1b708cef4da23583d9b4d" id="ac93177465cd1b708cef4da23583d9b4d"></a>

<p>bool getFallbackMSR</p>

get MSR fallback configuration

**Parameters**

\[out\] **mid** fallback configuration (FF02)

### Returns

true if successful, false if not found

## getFallbackMSROptions() <a href="#abf9bbb55fa6526c53e801c0e0e3d4857" id="abf9bbb55fa6526c53e801c0e0e3d4857"></a>

<p>bool getFallbackMSROptions</p>

get options for fallback decision

**Parameters**

\[out\] **opt** options (DF3A)

### Returns

true if successful, false if not found

## getFCIIssuerDiscrData() <a href="#aa3895c84212c383b9052d3cf42de7845" id="aa3895c84212c383b9052d3cf42de7845"></a>

<p>bool getFCIIssuerDiscrData</p>

get FCI issuer discretionary data from final select response

**Parameters**

\[out\] **data** discretionary data (BF0C)

### Returns

true if successful, false if not found

## getFloorLimit()\[1/2\] <a href="#aa4ca8e0f280cf96e95ebaaa7144896ee" id="aa4ca8e0f280cf96e95ebaaa7144896ee"></a> {#getfloorlimit-12}

<p>bool getFloorLimit</p>

get floor limit

**Parameters**

\[out\] **limit** floor limit (9F1B/DFAB40)

### Returns

true if successful, false if not found or invalid format

## getFloorLimit()\[2/2\] <a href="#a80a7761ccbbe9d48abe26a9bb845c590" id="a80a7761ccbbe9d48abe26a9bb845c590"></a> {#getfloorlimit-22}

<p>bool getFloorLimit</p>

get floor limit

**Parameters**

\[out\] **limit** floor limit (9F1B/DFAB40)

### Returns

true if successful, false if not found or invalid format

## getForceAccept() <a href="#a12943982462ac554ae9b2f7b4d7d1b93" id="a12943982462ac554ae9b2f7b4d7d1b93"></a>

<p>bool getForceAccept</p>

get force accept flag

**Parameters**

\[out\] **force** flag (DF43)

### Returns

true if successful, false if not found

## getForceOnline() <a href="#af46be7c7b03dd7b59a73998e96325522" id="af46be7c7b03dd7b59a73998e96325522"></a>

<p>bool getForceOnline</p>

get force online flag

**Parameters**

\[out\] **force** flag (DF40)

### Returns

true if successful, false if not found

## getIACDefault() <a href="#ac353b92a5cb3c0f609a39938154cea9c" id="ac353b92a5cb3c0f609a39938154cea9c"></a>

<p>bool getIACDefault</p>

get issuer action code default

**Parameters**

\[out\] **iac** issuer action code default (9F0D)

### Returns

true if successful, false if not found or invalid format

## getIACDenial() <a href="#a713b329b9095d82fb9b2a9f5570700ad" id="a713b329b9095d82fb9b2a9f5570700ad"></a>

<p>bool getIACDenial</p>

get issuer action code denial

**Parameters**

\[out\] **iac** issuer action code denial (9F0E)

### Returns

true if successful, false if not found or invalid format

## getIACOnline() <a href="#aff7585557f19d64883a64d324b515cd3" id="aff7585557f19d64883a64d324b515cd3"></a>

<p>bool getIACOnline</p>

get issuer action code online

**Parameters**

\[out\] **iac** issuer action code online (9F0F)

### Returns

true if successful, false if not found or invalid format

## getICCDynamicNumber() <a href="#a85904ca2d6cdfa3d52a94d56ab209c20" id="a85904ca2d6cdfa3d52a94d56ab209c20"></a>

<p>bool getICCDynamicNumber</p>

get ICC dynamic number

**Parameters**

\[out\] **dn** ICC dynamic number (9F4C)

### Returns

true if successful, false if not found

## getIFDSerial() <a href="#a32be7437a7f7ac177dd68832ea31f0f7" id="a32be7437a7f7ac177dd68832ea31f0f7"></a>

<p>bool getIFDSerial</p>

get IFD serial number

**Parameters**

\[out\] **serial** serial number (9F1E)

### Returns

true if successful, false if not found or invalid format

## getIssuerAppData() <a href="#a39dedefcccb5eba27709d4940a87ad3c" id="a39dedefcccb5eba27709d4940a87ad3c"></a>

<p>bool getIssuerAppData</p>

get issuer application data

**Parameters**

\[out\] **idata** issuer application data (9F10)

### Returns

true if successful, false if not found

## getIssuerCodeTableID() <a href="#a9604daa5bfb0224c833ecfc8ab908268" id="a9604daa5bfb0224c833ecfc8ab908268"></a>

<p>bool getIssuerCodeTableID</p>

get issuer code table ID

**Parameters**

\[out\] **id** issuer code table ID (9F11)

### Returns

true if successful, false if not found

## getIssuerCountryCode() <a href="#a5680b103f0e5a6ddf6635a307bd9ef16" id="a5680b103f0e5a6ddf6635a307bd9ef16"></a>

<p>bool getIssuerCountryCode</p>

get issuer country code

**Parameters**

\[out\] **country** issuer country code (5F28)

### Returns

true if successful, false if not found

## getIssuerID() <a href="#aefa82473aa949ff4b84b49636e15268b" id="aefa82473aa949ff4b84b49636e15268b"></a>

<p>bool getIssuerID</p>

get issuer ID

**Parameters**

\[out\] **id** issuer ID (42/9F0C)

### Returns

true if successful, false if not found or invalid format

## getKernelAppVersionNumber() <a href="#ae1df5edafde84d7d286df2ee99e80b43" id="ae1df5edafde84d7d286df2ee99e80b43"></a>

<p>bool getKernelAppVersionNumber</p>

get kernel application version number

**Parameters**

\[out\] **version** ICC application version number (9F08)

### Returns

true if successful, false if not found or invalid format

## getKernelDebug() <a href="#a4686bc70b512e3915065ac1028ba9b5d" id="a4686bc70b512e3915065ac1028ba9b5d"></a>

<p>bool getKernelDebug</p>

get kernel debug information

**Parameters**

\[out\] **debug** kernel debug information (DF64)

### Returns

true if successful, false if not found

## getKernelID()\[1/2\] <a href="#ac124e485e36a770c4ee9d7006e746f69" id="ac124e485e36a770c4ee9d7006e746f69"></a> {#getkernelid-12}

<p>bool getKernelID</p>

get EMV kernel ID

**Parameters**

\[out\] **id** kernel ID (DFAB01)

### Returns

true if successful, false if not found

## getKernelID()\[2/2\] <a href="#a83e1f97ad3d1760c391c7e1883397b97" id="a83e1f97ad3d1760c391c7e1883397b97"></a> {#getkernelid-22}

<p>bool getKernelID</p>

get EMV kernel ID

**Parameters**

\[out\] **id** kernel ID (DFAB01)

### Returns

true if successful, false if not found or invalid format

## getKernelPrivateNonBER() <a href="#a8666525eed3adc6d09252c2068ec56c6" id="a8666525eed3adc6d09252c2068ec56c6"></a>

<p>bool getKernelPrivateNonBER</p>

get private non-BER kernel data

**Parameters**

\[out\] **nber** private non-BER kernel data (DFDE01)

### Returns

true if successful, false if not found

## getKernelToUse() <a href="#ab5b07272f42a1358d8148094fb642782" id="ab5b07272f42a1358d8148094fb642782"></a>

<p>bool getKernelToUse</p>

get kernel to use

**Parameters**

\[out\] **kernel** kernel to use (DF7E)

### Returns

true if successful, false if not found or invalid format

## getLanguage() <a href="#acb82c044458a9d0e4bd55948ab942085" id="acb82c044458a9d0e4bd55948ab942085"></a>

<p>bool getLanguage</p>

get language

**Parameters**

\[out\] **info** language (DF30)

### Returns

true if successful, false if not found

## getLanguagePreference() <a href="#a531768c4057ce865f80a5d10b9f30dc9" id="a531768c4057ce865f80a5d10b9f30dc9"></a>

<p>bool getLanguagePreference</p>

get language preference

**Parameters**

\[out\] **lang** language preference (5F2D)

### Returns

true if successful, false if not found

## getMasterAID() <a href="#a9a9dea71749282886ef2471bcd3cc30a" id="a9a9dea71749282886ef2471bcd3cc30a"></a>

<p>bool getMasterAID</p>

get master AID

**Parameters**

\[out\] **aid** AID (DF04)

### Returns

true if successful, false if not found

## getMemorySlotReadTemplate() <a href="#a8d6383318d480b11b7f369207ffbf335" id="a8d6383318d480b11b7f369207ffbf335"></a>

<p>bool getMemorySlotReadTemplate</p>

get memory slot read template, list of data lements to read.

**Parameters**

\[out\] **t** read template (BF71)

### Returns

true if successful, false if not found

## getMemorySlotUpdateTemplate() <a href="#ae950094f144693c7141233f2edf0c0aa" id="ae950094f144693c7141233f2edf0c0aa"></a>

<p>bool getMemorySlotUpdateTemplate</p>

get memory slot update template, list of data lements to update using the PUT DATA

**Parameters**

\[out\] **t** update template (BF70)

### Returns

true if successful, false if not found

## getMerchantID() <a href="#a292dea077b233ee2dbc2dc679951cef3" id="a292dea077b233ee2dbc2dc679951cef3"></a>

<p>bool getMerchantID</p>

get merchant identifier

**Parameters**

\[out\] **mid** merchant identifier (9F16)

### Returns

true if successful, false if not found

## getMerchantInfo() <a href="#a5fa1cf34f3661c1175ccf34fe6d7f460" id="a5fa1cf34f3661c1175ccf34fe6d7f460"></a>

<p>bool getMerchantInfo</p>

get merchant information

**Parameters**

\[out\] **info** merchant information (DF70)

### Returns

true if successful, false if not found

## getModifiedCandidates() <a href="#a236a19c333f73e5f8cfb81993f6df322" id="a236a19c333f73e5f8cfb81993f6df322"></a>

<p>bool getModifiedCandidates</p>

get candidates

**Parameters**

\[out\] **cand** candidates (DF8F01)

### Returns

true if successful, false if not found

## getModifyTransaction() <a href="#aaf5186dbe316fa7c96b5be1e1a7ac787" id="aaf5186dbe316fa7c96b5be1e1a7ac787"></a>

<p>bool getModifyTransaction</p>

get modify transaction, allowed values: 0xE1 (transaction must be performed online), 0xE4 (Transaction declined), 0xEA (transaction must be aborted

**Parameters**

\[out\] **m** modify transaction (DF76)

### Returns

true if successful, false if not found

## getNFCVASData() <a href="#a3e9016a479213f2a262d5691c5b86b3e" id="a3e9016a479213f2a262d5691c5b86b3e"></a>

<p>bool getNFCVASData</p>

get NFC VAS Data (FFA102)

### Returns

true if successful, false if not found

## getNoCardholderConfirm() <a href="#af13541a4a2218804363a6ef228644644" id="af13541a4a2218804363a6ef228644644"></a>

<p>bool getNoCardholderConfirm</p>

get no cardholder confirmation flag

**Parameters**

\[out\] **conf** (DF4D)

### Returns

true if successful, false if not found

## getNoDirectorySelect() <a href="#a1fb6358d25dc629af023f05b75b1d32b" id="a1fb6358d25dc629af023f05b75b1d32b"></a>

<p>bool getNoDirectorySelect</p>

get no directory selection flag

**Parameters**

\[out\] **nodir** (DF45)

### Returns

true if successful, false if not found

## getNonCriticalScript() <a href="#a6c1426d9f6a529c4e86e333c6342652f" id="a6c1426d9f6a529c4e86e333c6342652f"></a>

<p>bool getNonCriticalScript</p>

get noncritical scripts to be performed after 2nd Generate AC

**Parameters**

\[out\] **script** noncritical script (DF54)

### Returns

true if successful, false if not found

## getNonCriticalScriptResults() <a href="#a1a2856b4efea60b64e96bfdd994f975e" id="a1a2856b4efea60b64e96bfdd994f975e"></a>

<p>bool getNonCriticalScriptResults</p>

get noncritical script results

**Parameters**

\[out\] **results** noncritical script results (DF07)

### Returns

true if successful, false if not found

## getObfuscatedPAN() <a href="#afaa7438c803c0819b686b5b1ec148f75" id="afaa7438c803c0819b686b5b1ec148f75"></a>

<p>bool getObfuscatedPAN</p>

get obfuscated PAN

**Parameters**

\[out\] **pan** obfuscated PAN (DF1A)

### Returns

true if successful, false if not found

## getObfuscatedTrack1String() <a href="#a76310bdd150c0eadd15b4eb2282acc6f" id="a76310bdd150c0eadd15b4eb2282acc6f"></a>

<p>bool getObfuscatedTrack1String</p>

get obfuscated track1

**Parameters**

\[out\] **track** obfuscated track1 (DFA040)

### Returns

true if successful, false if not found

## getObfuscatedTrack2() <a href="#a62e8644ecc2855893c70d0ebb09d4e8c" id="a62e8644ecc2855893c70d0ebb09d4e8c"></a>

<p>bool getObfuscatedTrack2</p>

get obfuscated track 2 data

**Parameters**

\[out\] **track** track data (DF1B)

### Returns

true if successful, false if not found

## getOfflinePINErrors() <a href="#a032a8c4116be90bbf3f5bbf719b826d1" id="a032a8c4116be90bbf3f5bbf719b826d1"></a>

<p>bool getOfflinePINErrors</p>

get offline PIN errors

**Parameters**

\[out\] **errors** offline PIN errors (DF59)

### Returns

true if successful, false if not found

## getOnlineResult() <a href="#a6abfaed15e3e3c15ee1bc892145df49f" id="a6abfaed15e3e3c15ee1bc892145df49f"></a>

<p>bool getOnlineResult</p>

get online result

**Parameters**

\[out\] **result** online result (DF50)

### Returns

true if successful, false if not found

## getOnlineSwitch() <a href="#a86b9ca681d4d202029fe93bd037d3a6e" id="a86b9ca681d4d202029fe93bd037d3a6e"></a>

<p>bool getOnlineSwitch</p>

get online switch flag

**Parameters**

\[out\] **online** flag (DF48)

### Returns

true if successful, false if not found

## getPAN() <a href="#af197754c5472b1f365a0ff6b14191c90" id="af197754c5472b1f365a0ff6b14191c90"></a>

<p>bool getPAN</p>

get PAN

**Parameters**

\[out\] **pan** PAN (5A)

### Returns

true if successful, false in case of invalid format

## getPANInBlacklist() <a href="#aee901538b215c198a6e2998bcc566597" id="aee901538b215c198a6e2998bcc566597"></a>

<p>bool getPANInBlacklist</p>

get PAN in blacklist (true/false)

**Parameters**

\[out\] **contained** PAN in blacklist (true/false) (DF72)

### Returns

true if successful, false if not found

## getPANSequenceNumber()\[1/2\] <a href="#a0d39362259bf38a77deed79a2859051b" id="a0d39362259bf38a77deed79a2859051b"></a> {#getpansequencenumber-12}

<p>bool getPANSequenceNumber</p>

get PAN sequence number

**Parameters**

\[out\] **num** PAN sequence number (5F34)

### Returns

true if successful, false if not found or invalid format

## getPANSequenceNumber()\[2/2\] <a href="#a9ddb30e5c8449ac956c5fb23332c7ce7" id="a9ddb30e5c8449ac956c5fb23332c7ce7"></a> {#getpansequencenumber-22}

<p>bool getPANSequenceNumber</p>

get PAN sequence number

**Parameters**

\[out\] **num** PAN sequence number (5F34)

### Returns

true if successful, false if not found or invalid format

## getPDOLInfo() <a href="#abdf58ceaf36c76d5b0ea1bdfa37ce330" id="abdf58ceaf36c76d5b0ea1bdfa37ce330"></a>

<p>bool getPDOLInfo</p>

get PDOL tag information

**Parameters**

\[out\] **info** PDOL tag information (DF4E)

### Returns

true if successful, false if not found

## getPINBypass() <a href="#a311265f562ab91000db77f8952991a89" id="a311265f562ab91000db77f8952991a89"></a>

<p>bool getPINBypass</p>

get PIN bypass

**Parameters**

\[out\] **bypass** PIN bypass allowed if true (DF41)

### Returns

true if successful, false if not found

## getPINInfo() <a href="#a34de756e5e70e2d2198e436fbcb6e393" id="a34de756e5e70e2d2198e436fbcb6e393"></a>

<p>bool getPINInfo</p>

get PIN info, depending on context this is the PIN type or result of PIN entry (<a href="namespacevfisdi.md#a95cf5c31200663caf8179c8a7917d501">EMVPINResult</a>)

**Parameters**

\[out\] **info** PIN info (DF79)

### Returns

true if successful, false if not found

## getPINPublicExponent() <a href="#a917c8600fe72e809e0ca9882633fd62b" id="a917c8600fe72e809e0ca9882633fd62b"></a>

<p>bool getPINPublicExponent</p>

get PIN public key exponent

**Parameters**

\[out\] **modulus** PIN public key exponent (DF7B)

### Returns

true if successful, false if not found

## getPINPublicModulus() <a href="#a2173a5991bbcf3fc80d79b48687d74eb" id="a2173a5991bbcf3fc80d79b48687d74eb"></a>

<p>bool getPINPublicModulus</p>

get PIN public key modulus

**Parameters**

\[out\] **modulus** PIN public key modulus (DF7A)

### Returns

true if successful, false if not found

## getPOSEntryMode() <a href="#af0a7d48a059d253f4595690d55f38a35" id="af0a7d48a059d253f4595690d55f38a35"></a>

<p>bool getPOSEntryMode</p>

get POS entry mode

**Parameters**

\[out\] **mode** POS entry mode (9F39)

### Returns

true if successful, false if not found

## getPreferredName() <a href="#a7ae5f1582eaa174218ec309ff2c64b2c" id="a7ae5f1582eaa174218ec309ff2c64b2c"></a>

<p>bool getPreferredName</p>

get application preferred name

**Parameters**

\[out\] **label** application preferred name (9F12)

### Returns

true if successful, false if not found

## getPreselectedLanguage() <a href="#a2c0cc0ad0faaa17a338bc3680025b040" id="a2c0cc0ad0faaa17a338bc3680025b040"></a>

<p>bool getPreselectedLanguage</p>

get preselected language

**Parameters**

\[out\] **lang** preselected language (DF47)

### Returns

true if successful, false if not found

## getReaderNumber() <a href="#ad108c15acfc6f0cff9b96b8c9f8962f3" id="ad108c15acfc6f0cff9b96b8c9f8962f3"></a>

<p>bool getReaderNumber</p>

get card reader number

**Parameters**

\[out\] **num** card reader number (DF06)

### Returns

true if successful, false if not found

## getReducedCanditateList() <a href="#a5a0c9f62d152119b0214ab09e8e2d6bc" id="a5a0c9f62d152119b0214ab09e8e2d6bc"></a>

<p>bool getReducedCanditateList</p>

get reduced candidate list

**Parameters**

\[out\] **cl** reduced candidate list (DF75)

### Returns

true if successful, false if not found

## getSelector() <a href="#aa2b3afdd4d652d7657a240966390dc98" id="aa2b3afdd4d652d7657a240966390dc98"></a>

<p>bool getSelector</p>

get selector

**Parameters**

\[out\] **sel** selector (DF74)

### Returns

true if successful, false if not found

## getServerPollTimeout() <a href="#a05b24e2f23267e4ba665e21d60ae4fd3" id="a05b24e2f23267e4ba665e21d60ae4fd3"></a>

<p>bool getServerPollTimeout</p>

get poll timeout

**Parameters**

\[out\] **tout** timeout (C9)

### Returns

true if successful, false if not found

## getServiceCode() <a href="#ac3bc9df20cc108a48a815bb3ac12d12c" id="ac3bc9df20cc108a48a815bb3ac12d12c"></a>

<p>bool getServiceCode</p>

get service code

**Parameters**

\[out\] **code** service code (5F30)

### Returns

true if successful, false if not found or invalid format

## getSetupResult() <a href="#ad937c0206bdf3f8b1980e8fc332efde3" id="ad937c0206bdf3f8b1980e8fc332efde3"></a>

<p>bool getSetupResult</p>

get result of setup transaction

**Parameters**

\[out\] **result** result (DF8F0D)

### Returns

true if successful, false if not found or invalid format

## getSkipPostprocessing() <a href="#a7bc54c742de0706deb34587b1731e188" id="a7bc54c742de0706deb34587b1731e188"></a>

<p>bool getSkipPostprocessing</p>

get skip postprocessing

**Parameters**

\[out\] **skip** skip postprocessing (DF76)

### Returns

true if successful, false if not found

## getSpecialTransactions() <a href="#a0e4a0afe63161c7252abc9d7bfc3b559" id="a0e4a0afe63161c7252abc9d7bfc3b559"></a>

<p>bool getSpecialTransactions</p>

get List of special allowed transactions (manual reversal, refund, reservation, tip, Referral)

**Parameters**

\[out\] **tx** list of special allowed transactions (DF1C/DFAB05)

### Returns

true if successful, false if not found or invalid format

## getStoredAmount()\[1/2\] <a href="#a32f6b02c313ee2f22ca1e8716589323b" id="a32f6b02c313ee2f22ca1e8716589323b"></a> {#getstoredamount-12}

<p>bool getStoredAmount</p>

get stored amount

**Parameters**

\[out\] **amount** stored amount (DF73/DFD003)

### Returns

true if successful, false if not found or invalid format

## getStoredAmount()\[2/2\] <a href="#ac621377f84d887f97e5ae692303432ff" id="ac621377f84d887f97e5ae692303432ff"></a> {#getstoredamount-22}

<p>bool getStoredAmount</p>

get stored amount

**Parameters**

\[out\] **amount** stored amount (DF73/DFD003)

### Returns

true if successful, false if not found or invalid format

## getTACDefault() <a href="#ac7fc5757e37d02f050b8ac83eb859195" id="ac7fc5757e37d02f050b8ac83eb859195"></a>

<p>bool getTACDefault</p>

get TAC default

**Parameters**

\[out\] **tac** contact TAC default (DF23/DFAB43)

### Returns

true if successful, false if not found or invalid format

## getTACDenial() <a href="#ac315853ec5525af2be4c64f080aeb387" id="ac315853ec5525af2be4c64f080aeb387"></a>

<p>bool getTACDenial</p>

get TAC denial

**Parameters**

\[out\] **tac** contact TAC denial (DF21/DFAB44)

### Returns

true if successful, false if not found or invalid format

## getTACOnline() <a href="#aafd3a4332acc0a0d47f268fff2d58e51" id="aafd3a4332acc0a0d47f268fff2d58e51"></a>

<p>bool getTACOnline</p>

get TAC online

**Parameters**

\[out\] **tac** contact TAC online (DF22/DFAB45)

### Returns

true if successful, false if not found or invalid format

## getTecselData() <a href="#a828ec738e81e93debedbcba587eca203" id="a828ec738e81e93debedbcba587eca203"></a>

<p>bool getTecselData</p>

get data buffer returned by cts_WaitSelection

**Parameters**

\[out\] **data** data buffer returned by cts_WaitSelection (DFA154)

### Returns

true if successful, false if not found

## getTerminalAID() <a href="#a1954efebbe554d727777b029942e18e8" id="a1954efebbe554d727777b029942e18e8"></a>

<p>bool getTerminalAID</p>

get terminal AID

**Parameters**

\[out\] **aid** terminal AID (9F06)

### Returns

true if successful, false if not found

## getTerminalCapabilities() <a href="#a69f4d7f026f4298506088e080dbc332d" id="a69f4d7f026f4298506088e080dbc332d"></a>

<p>bool getTerminalCapabilities</p>

get terminal capabilities

**Parameters**

\[out\] **caps** terminal capabilities (9F33)

### Returns

true if successful, false in case of invalid format

## getTerminalCountryCode() <a href="#a7fdcd205b403d55f1c70e60b77d4b4c7" id="a7fdcd205b403d55f1c70e60b77d4b4c7"></a>

<p>bool getTerminalCountryCode</p>

get terminal country code

**Parameters**

\[out\] **country** terminal country code (9F1A)

### Returns

true if successful, false if not found

## getTerminalType() <a href="#a41858348eb0babcc5e7ee61aaa31fcb4" id="a41858348eb0babcc5e7ee61aaa31fcb4"></a>

<p>bool getTerminalType</p>

get terminal type

**Parameters**

\[out\] **type** terminal type (9F35)

### Returns

true if successful, false if not found

## getTextID() <a href="#afeeeb276905b1880e5b4b9d429cd2d01" id="afeeeb276905b1880e5b4b9d429cd2d01"></a>

<p>bool getTextID</p>

get text ID

**Parameters**

\[out\] **id** text ID (DF31)

### Returns

true if successful, false if not found

## getThreshold() <a href="#ac262cb7820834aff81225314a6c86ad0" id="ac262cb7820834aff81225314a6c86ad0"></a>

<p>bool getThreshold</p>

get threshold value for biased random online selection during risk management

**Parameters**

\[out\] **th** threshold value (DF24)

### Returns

true if successful, false if not found

## getTrackStatus() <a href="#a7c550da026b7f5c7eb7fcfcc31f52ab3" id="a7c550da026b7f5c7eb7fcfcc31f52ab3"></a>

<p>bool getTrackStatus</p>

get track status

**Parameters**

\[out\] **track_status** track status (MSRTrackStatus, one byte per track, in the order track3, track2, track1!) (DFA034)

### Returns

true if successful, false if not found or invalid format

## getTransactionCategory() <a href="#a11e7e5dc1f9dc1cb95a86ee7b25f841f" id="a11e7e5dc1f9dc1cb95a86ee7b25f841f"></a>

<p>bool getTransactionCategory</p>

get transaction category code

**Parameters**

\[out\] **cat** transaction category code (9F53)

### Returns

true if successful, false if not found

## getTransactionCounter()\[1/2\] <a href="#aa760cfd80c28476a0678c6ab4a0f9b33" id="aa760cfd80c28476a0678c6ab4a0f9b33"></a> {#gettransactioncounter-12}

<p>bool getTransactionCounter</p>

get transaction sequence counter

**Parameters**

\[out\] **counter** transaction sequence counter (9F41)

### Returns

true if successful, false if not found or invalid format

## getTransactionCounter()\[2/2\] <a href="#aa43b13b1b74b3db4ac007843fe015a52" id="aa43b13b1b74b3db4ac007843fe015a52"></a> {#gettransactioncounter-22}

<p>bool getTransactionCounter</p>

get transaction sequence counter

**Parameters**

\[out\] **counter** transaction sequence counter (9F41)

### Returns

true if successful, false if not found or invalid format

## getTransactionCurrency()\[1/2\] <a href="#a7034b34fd69701b07a04477dd8a05c7d" id="a7034b34fd69701b07a04477dd8a05c7d"></a> {#gettransactioncurrency-12}

<p>bool getTransactionCurrency</p>

get transaction currency

**Parameters**

\[out\] **currency** currency (5F2A)

### Returns

true if successful, false if not found

## getTransactionCurrency()\[2/2\] <a href="#ad79f4105407ee8e94477b65584b185f9" id="ad79f4105407ee8e94477b65584b185f9"></a> {#gettransactioncurrency-22}

<p>bool getTransactionCurrency</p>

get transaction currency

**Parameters**

\[out\] **currency** currency (5F2A)

### Returns

true if successful, false if not found

## getTransactionCurrencyExp() <a href="#a6067411ff4ac08ed983b918f83910a80" id="a6067411ff4ac08ed983b918f83910a80"></a>

<p>bool getTransactionCurrencyExp</p>

get transaction currency exponent

**Parameters**

\[out\] **exp** currency exponent (5F36)

### Returns

true if successful, false if not found

## getTransactionDate()\[1/2\] <a href="#af73759646ee087fda4a944647c75bd1e" id="af73759646ee087fda4a944647c75bd1e"></a> {#gettransactiondate-12}

<p>bool getTransactionDate</p>

get transaction date

**Parameters**

\[out\] **date** binary date in the format YYMMDD (9A)

### Returns

true if successful, false if not found or invalid format

## getTransactionDate()\[2/2\] <a href="#a24da4d5f9d3575e0cefa69f2ff86dea6" id="a24da4d5f9d3575e0cefa69f2ff86dea6"></a> {#gettransactiondate-22}

<p>bool getTransactionDate</p>

get transaction date

**Parameters**

\[out\] **date** binary date in the format YYMMDD (9A)

### Returns

true if successful, false if not found or invalid format

## getTransactionOptions()\[1/2\] <a href="#a6be085e07dfd7589eb3f0804cb7cac55" id="a6be085e07dfd7589eb3f0804cb7cac55"></a> {#gettransactionoptions-12}

<p>bool getTransactionOptions</p>

get transaction options

**Parameters**

\[out\] **opt** transaction options (DF36)

### Returns

true if successful, false if not found or invalid format

## getTransactionOptions()\[2/2\] <a href="#a5b6922659bb65ad81fbc1d70fb2dd147" id="a5b6922659bb65ad81fbc1d70fb2dd147"></a> {#gettransactionoptions-22}

<p>bool getTransactionOptions</p>

inline

get transaction options

**Parameters**

\[out\] **opt** transaction options (DF36)

### Returns

true if successful, false if not found or invalid format

## getTransactionQualifier() <a href="#a963ccd93741c4a44bd2a26a4cd3eecab" id="a963ccd93741c4a44bd2a26a4cd3eecab"></a>

<p>bool getTransactionQualifier</p>

get transaction qualifier

**Parameters**

\[out\] **q** transaction qualifier (9F66)

### Returns

true if successful, false if not found or invalid format

## getTransactionStatusInfo() <a href="#aae9a5ddf1de643b2eaffc7abe7df4b20" id="aae9a5ddf1de643b2eaffc7abe7df4b20"></a>

<p>bool getTransactionStatusInfo</p>

get transaction status information

**Parameters**

\[out\] **status** transaction status information (9B)

### Returns

true if successful, false if not found or invalid format

## getTransactionSteps()\[1/2\] <a href="#ae54c5207a3697f4de625ef511533d2a7" id="ae54c5207a3697f4de625ef511533d2a7"></a> {#gettransactionsteps-12}

<p>bool getTransactionSteps</p>

get transaction steps

**Parameters**

\[out\] **step** transaction steps (DF37)

### Returns

true if successful, false if not found or invalid format

## getTransactionSteps()\[2/2\] <a href="#a46dc90ec3e077f136c0159f89e6a6ce0" id="a46dc90ec3e077f136c0159f89e6a6ce0"></a> {#gettransactionsteps-22}

<p>bool getTransactionSteps</p>

inline

get transaction steps

**Parameters**

\[out\] **step** transaction steps (DF37)

### Returns

true if successful, false if not found or invalid format

## getTransactionTime()\[1/2\] <a href="#a8179180d62d99c64643fa0fdc4f8a996" id="a8179180d62d99c64643fa0fdc4f8a996"></a> {#gettransactiontime-12}

<p>bool getTransactionTime</p>

get transaction time

**Parameters**

\[out\] **time** binary time in the format HHMMSS (9F21)

### Returns

true if successful, false if not found or invalid format

## getTransactionTime()\[2/2\] <a href="#a48481357d16a0e96af1c0c90c2761cf0" id="a48481357d16a0e96af1c0c90c2761cf0"></a> {#gettransactiontime-22}

<p>bool getTransactionTime</p>

get transaction time

**Parameters**

\[out\] **time** binary time in the format HHMMSS (9F21)

### Returns

true if successful, false if not found or invalid format

## getTransactionType() <a href="#a103b9c2fa2c6075082ed0fe02496164c" id="a103b9c2fa2c6075082ed0fe02496164c"></a>

<p>bool getTransactionType</p>

get transaction type

**Parameters**

\[out\] **type** transaction type (see EMVTransaction) (9C)

### Returns

true if successful, false if not found

## getTVR() <a href="#a86c9ddd3f7fceea21cd0dc5f0b48b4da" id="a86c9ddd3f7fceea21cd0dc5f0b48b4da"></a>

<p>bool getTVR</p>

get terminal verification results

**Parameters**

\[out\] **tvr** terminal verification results (95)

### Returns

true if successful, false if not found or invalid format

## getUnpredictableNumber() <a href="#a4cf2ff328e95fda0733f01f09412c971" id="a4cf2ff328e95fda0733f01f09412c971"></a>

<p>bool getUnpredictableNumber</p>

get unpredictable number

**Parameters**

\[out\] **num** unpredictable number (9F37)

### Returns

true if successful, false if not found

## getVelocityOriginalIndex() <a href="#a2079cfba6d4c7d14f622b289834c8b15" id="a2079cfba6d4c7d14f622b289834c8b15"></a>

<p>bool getVelocityOriginalIndex</p>

get original index

**Parameters**

\[out\] **idx** original index (DF60)

### Returns

true if successful, false if not found

## getVelocityProcessingResultBitmap() <a href="#a749bdbbf03f56f76c09eda7a27971eca" id="a749bdbbf03f56f76c09eda7a27971eca"></a>

<p>bool getVelocityProcessingResultBitmap</p>

get velocity processing result bitmap

**Parameters**

\[out\] **bm** velocity processing result bitmap (DF63)

### Returns

true if successful, false if not found or invalid format

## getVisaCTQ() <a href="#add4de43f37019b053e243bc8579fafce" id="add4de43f37019b053e243bc8579fafce"></a>

<p>bool getVisaCTQ</p>

get Visa CTQ

**Parameters**

\[out\] **ctq** Visa CTQ (9F6C)

### Returns

true if successful, false if not found or invalid format

## getVoiceReferral() <a href="#af82273b369d92d066a458c559d43bbba" id="af82273b369d92d066a458c559d43bbba"></a>

<p>bool getVoiceReferral</p>

get merchant response in case of voice referral

**Parameters**

\[out\] **result** referral result (DF51)

### Returns

true if successful, false if not found

## getWriteDataStoragedData() <a href="#a77f6627d8006dba36b1257cb573da0f1" id="a77f6627d8006dba36b1257cb573da0f1"></a>

<p>bool getWriteDataStoragedData</p>

get data storage write data

**Parameters**

\[out\] **data** data storage write data (DF5A)

### Returns

true if successful, false if not found

## getWriteDSData() <a href="#af34b96d0cf583e31954dc1f29b0cad06" id="af34b96d0cf583e31954dc1f29b0cad06"></a>

<p>bool getWriteDSData</p>

get write DS data

**Parameters**

\[out\] **dsdata** write DS data (DF58)

### Returns

true if successful, false if not found

## setAccountType() <a href="#ad75e8a88a01622379a242d0e0f629350" id="ad75e8a88a01622379a242d0e0f629350"></a>

<p>bool setAccountType</p>

set account type

**Parameters**

\[in\] **type** account type (5F57)

### Returns

true

## setAdditionalResponseOK() <a href="#a53260cf3f6a6f515a87ac768aaabd84b" id="a53260cf3f6a6f515a87ac768aaabd84b"></a>

<p>bool setAdditionalResponseOK</p>

set additional host AC which is considered positive

**Parameters**

\[in\] **ac** host AC (DF57)

### Returns

true

## setAID()\[1/2\] <a href="#afa6ca2d77399d2db1c12d1ff7eeda01f" id="afa6ca2d77399d2db1c12d1ff7eeda01f"></a> {#setaid-12}

<p>bool setAID</p>

set AID

**Parameters**

\[in\] **aid** AID (4F)

### Returns

true if successful, false in case of invalid format

## setAID()\[2/2\] <a href="#a8f3822d556d2dc65cc8ebde4a87124f5" id="a8f3822d556d2dc65cc8ebde4a87124f5"></a> {#setaid-22}

<p>bool setAID</p>

inline

set AID

**Parameters**

\[in\] **aid** AID (4F)

### Returns

true if successful, false in case of invalid format

## setAmount()\[1/2\] <a href="#a29ea8e420c17b5aec59fe58ab2953063" id="a29ea8e420c17b5aec59fe58ab2953063"></a> {#setamount-12}

<p>bool setAmount</p>

set transaction amount

**Parameters**

\[in\] **amount** transaction amount (9F02)

### Returns

true

## setAmount()\[2/2\] <a href="#af9a5a22e4c5e805a981c96611ba66a84" id="af9a5a22e4c5e805a981c96611ba66a84"></a> {#setamount-22}

<p>bool setAmount</p>

set transaction amount

**Parameters**

\[in\] **amount** transaction amount (9F02)

### Returns

true if successful, false in case of overflow

## setAmountConfirmation() <a href="#ae44d6104806e03e6822b52c1cb629364" id="ae44d6104806e03e6822b52c1cb629364"></a>

<p>bool setAmountConfirmation</p>

set amount confirmation

**Parameters**

\[in\] **when** (DF34)

### Returns

true

## setApplicationCurrency() <a href="#a855c849eaf29dfbaa486b9c88926f900" id="a855c849eaf29dfbaa486b9c88926f900"></a>

<p>bool setApplicationCurrency</p>

set application currency

**Parameters**

\[in\] **currency** application currency (9F42)

### Returns

true

## setApplicationKernelId()\[1/2\] <a href="#a2212546665c7ec64ccdaaaf8a0aa9634" id="a2212546665c7ec64ccdaaaf8a0aa9634"></a> {#setapplicationkernelid-12}

<p>bool setApplicationKernelId</p>

set application kernel ID

**Parameters**

\[in\] **id** application kernel ID (DFD003)

### Returns

true

## setApplicationKernelId()\[2/2\] <a href="#a736b7c216068c6cccc430679b1b66ad4" id="a736b7c216068c6cccc430679b1b66ad4"></a> {#setapplicationkernelid-22}

<p>bool setApplicationKernelId</p>

set application kernel ID

**Parameters**

\[in\] **id** application kernel ID (DFD003)

### Returns

true

## setAppNameChosen() <a href="#a4c545804aced64c4bbfef52d4e4dd8f8" id="a4c545804aced64c4bbfef52d4e4dd8f8"></a>

<p>bool setAppNameChosen</p>

set chosen application name

**Parameters**

\[in\] **name** chosen application name (DFD002)

### Returns

true

## setAppNameUtf8() <a href="#afd566a5ad852fc1b6b4077c3379c6ca1" id="afd566a5ad852fc1b6b4077c3379c6ca1"></a>

<p>bool setAppNameUtf8</p>

set application name in UTF-8

**Parameters**

\[in\] **name** application name in UTF-8 (DFD00B)

### Returns

true

## setAuthCode() <a href="#ab1ee5613275eaffc5e18e65f42d350ef" id="ab1ee5613275eaffc5e18e65f42d350ef"></a>

<p>bool setAuthCode</p>

set value given by the card issuer for an accepted transaction

**Parameters**

\[in\] **code** authorization code (89)

### Returns

true

## setAuthData()\[1/2\] <a href="#ac8331d2f06776b97f255ed2f4890eed3" id="ac8331d2f06776b97f255ed2f4890eed3"></a> {#setauthdata-12}

<p>bool setAuthData</p>

set issuer authentication data

**Parameters**

\[in\] **data** issuer authentication data (DF52)

### Returns

true

## setAuthData()\[2/2\] <a href="#a053bd18427ce543edba85a662f22f060" id="a053bd18427ce543edba85a662f22f060"></a> {#setauthdata-22}

<p>bool setAuthData</p>

inline

set issuer authentication data

**Parameters**

\[in\] **data** issuer authentication data (DF52)

### Returns

true

## setAuthResponseCode() <a href="#abfab8f80dd77da0a34452beb87450f77" id="abfab8f80dd77da0a34452beb87450f77"></a>

<p>bool setAuthResponseCode</p>

set authorization response code

**Parameters**

\[in\] **auth** authorization response code (8A)

### Returns

true

## setAuthResponseOnlinePIN() <a href="#afcaa99513fcfbc7ee10a4f020670cc88" id="afcaa99513fcfbc7ee10a4f020670cc88"></a>

<p>bool setAuthResponseOnlinePIN</p>

set response code for online PIN

**Parameters**

\[in\] **resp** response code (DF56)

### Returns

true

## setAuthResponseReferral() <a href="#a52fecf0643155872da0c0236c89d453f" id="a52fecf0643155872da0c0236c89d453f"></a>

<p>bool setAuthResponseReferral</p>

set host AC for an issuer referral

**Parameters**

\[in\] **ac** host AC for an issuer referral (DF55)

### Returns

true

## setAuthResponseSwitch() <a href="#ac86ebed11e6840694b67f56dad02010e" id="ac86ebed11e6840694b67f56dad02010e"></a>

<p>bool setAuthResponseSwitch</p>

set response code for switch interface

**Parameters**

\[in\] **resp** response code (DF55)

### Returns

true

## setAuthResponseWrongPIN() <a href="#ae2de2d2de85e052447537fc2d9c64d0c" id="ae2de2d2de85e052447537fc2d9c64d0c"></a>

<p>bool setAuthResponseWrongPIN</p>

set host AC for a wrong online PIN

**Parameters**

\[in\] **ac** host AC for a wrong online PIN (DF56)

### Returns

true

## setBeepScenario() <a href="#a2293f21102af94e846adb15491807f91" id="a2293f21102af94e846adb15491807f91"></a>

<p>bool setBeepScenario</p>

set beep scenario

**Parameters**

\[in\] **bs** beep scenario (CB)

### Returns

true

## setBuildAppList() <a href="#a1e2c6e556b7fd4f9a0289e694836dcd3" id="a1e2c6e556b7fd4f9a0289e694836dcd3"></a>

<p>bool setBuildAppList</p>

set build list options (see <a href="namespacevfisdi.md#a02bb8f6a423b436e4ca090da42697125">EMVBuildOptions</a>)

**Parameters**

\[in\] **opt** build list options (see EMVBuildOptions) (DF05)

### Returns

true

## setCandidateList() <a href="#a02a64570bd2fb70b9b74e75fd3545260" id="a02a64570bd2fb70b9b74e75fd3545260"></a>

<p>bool setCandidateList</p>

set candidate list

**Parameters**

\[in\] **cand** candidate list (FF03)

### Returns

true

## setCardholderInfo() <a href="#a405d6b2d43254a924ce064f59bb734a7" id="a405d6b2d43254a924ce064f59bb734a7"></a>

<p>bool setCardholderInfo</p>

set cardholder information for callback

**Parameters**

\[in\] **info** cardholder information (DF6E)

### Returns

true

## setCashbackAmount()\[1/2\] <a href="#a43a41c9ee1f9ff39f8bfe7a602cbc93d" id="a43a41c9ee1f9ff39f8bfe7a602cbc93d"></a> {#setcashbackamount-12}

<p>bool setCashbackAmount</p>

set cashback amount

**Parameters**

\[in\] **amount** cashback amount (9F03)

### Returns

true

## setCashbackAmount()\[2/2\] <a href="#ad03314c9e1a1a1f0604ac9379ff8e01f" id="ad03314c9e1a1a1f0604ac9379ff8e01f"></a> {#setcashbackamount-22}

<p>bool setCashbackAmount</p>

set cashback amount

**Parameters**

\[in\] **amount** cashback amount (9F03)

### Returns

true if successful, false in case of overflow

## setCBCandidateList() <a href="#a72fa767909bde5a93b7d56ac62835bbd" id="a72fa767909bde5a93b7d56ac62835bbd"></a>

<p>bool setCBCandidateList</p>

set candidate list (in EMV callback)

**Parameters**

\[in\] **cand** candidate list

### Returns

true

## setCBDisplayTextIndex() <a href="#a559ac16ef8a00d3ff4b46f0626fd109f" id="a559ac16ef8a00d3ff4b46f0626fd109f"></a>

<p>bool setCBDisplayTextIndex</p>

set callback display text index

**Parameters**

\[in\] **idx** callback display text index (DF8F12)

### Returns

true

## setCommunicationError() <a href="#ab4a2a0c5a7c0a11a315bdf3e66b60f9f" id="ab4a2a0c5a7c0a11a315bdf3e66b60f9f"></a>

<p>bool setCommunicationError</p>

set communication error

**Parameters**

\[in\] **err** communication error (DF7F)

### Returns

true

## setConfirmAmount() <a href="#a0bede37c87ca5f34358dbda81df2c479" id="a0bede37c87ca5f34358dbda81df2c479"></a>

<p>bool setConfirmAmount</p>

set confirm amount

**Parameters**

\[in\] **confirm** confirm amount (DF71)

### Returns

true

## setCriticalScript()\[1/2\] <a href="#ac41876dbd49f59fd423332a3a0c7d077" id="ac41876dbd49f59fd423332a3a0c7d077"></a> {#setcriticalscript-12}

<p>bool setCriticalScript</p>

set critical scripts to be performed prior to 2nd Generate AC

**Parameters**

\[in\] **script** critical script (DF53)

### Returns

true

## setCriticalScript()\[2/2\] <a href="#a835336e6f07e02510f68fe21b2ab3107" id="a835336e6f07e02510f68fe21b2ab3107"></a> {#setcriticalscript-22}

<p>bool setCriticalScript</p>

inline

set critical scripts to be performed prior to 2nd Generate AC

**Parameters**

\[in\] **script** critical script (DF53)

### Returns

true

## setCryptogram() <a href="#a16554128021353039e14db07f15a2ddc" id="a16554128021353039e14db07f15a2ddc"></a>

<p>bool setCryptogram</p>

set application cryptogram

**Parameters**

\[in\] **crypt** application cryptogram (9F26)

### Returns

true

## setCtlsLEDState() <a href="#a25867e91d5e2d73f8673548c41cfce91" id="a25867e91d5e2d73f8673548c41cfce91"></a>

<p>bool setCtlsLEDState</p>

set LED state

**Parameters**

\[in\] **state** LED state (C8)

### Returns

true

## setDataExchangeDataNeeded()\[1/2\] <a href="#a77f41dc63f292bc2a3db17668d4a2e4d" id="a77f41dc63f292bc2a3db17668d4a2e4d"></a> {#setdataexchangedataneeded-12}

<p>bool setDataExchangeDataNeeded</p>

set data needed for data exchange

**Parameters**

\[in\] **dn** data needed (DF8106)

### Returns

true

## setDataExchangeDataNeeded()\[2/2\] <a href="#a8c003f308feae67c5101f596aeffdb1c" id="a8c003f308feae67c5101f596aeffdb1c"></a> {#setdataexchangedataneeded-22}

<p>bool setDataExchangeDataNeeded</p>

inline

set data needed for data exchange

**Parameters**

\[in\] **dn** data needed (DF8106)

### Returns

true

## setDataExchangeMode() <a href="#a7a1496238583825b8edc305e9a546d5d" id="a7a1496238583825b8edc305e9a546d5d"></a>

<p>bool setDataExchangeMode</p>

set data exchange mode

**Parameters**

\[in\] **state** data exchange mode (DF8012)

### Returns

true

## setDataExchangeReceivedData() <a href="#a22cd5491e72ea40e86dc3456412ed65c" id="a22cd5491e72ea40e86dc3456412ed65c"></a>

<p>bool setDataExchangeReceivedData</p>

set received data exchange data

**Parameters**

\[in\] **data** received data exchange data (FF10)

### Returns

true

## setDataExchangeRequest() <a href="#a48a2af9e2722714d5547b22d2ecd6f2c" id="a48a2af9e2722714d5547b22d2ecd6f2c"></a>

<p>bool setDataExchangeRequest</p>

set data exchange request

**Parameters**

\[in\] **req** data exchange request (DF8010)

### Returns

true

## setDataExchangeSendData() <a href="#afd16a6687e77de5af051338706842545" id="afd16a6687e77de5af051338706842545"></a>

<p>bool setDataExchangeSendData</p>

set data exchange data to be sent

**Parameters**

\[in\] **data** data exchange data to be sent (FF8104)

### Returns

true

## setDataExchangeState() <a href="#a1ab64a7c79082a5b1325de6879ae8a7e" id="a1ab64a7c79082a5b1325de6879ae8a7e"></a>

<p>bool setDataExchangeState</p>

set data exchange state

**Parameters**

\[in\] **state** data exchange state (DF8011)

### Returns

true

## setDCCForbidden() <a href="#ab979f0229fa56d8f129bf460ddd829d3" id="ab979f0229fa56d8f129bf460ddd829d3"></a>

<p>bool setDCCForbidden</p>

set DCC forbidden

**Parameters**

\[in\] **dcc** DCC forbidden (DF5B)

### Returns

true

## setDCCInfo() <a href="#ae7e98270a763d0d13dd7a4b6a48caee3" id="ae7e98270a763d0d13dd7a4b6a48caee3"></a>

<p>bool setDCCInfo</p>

set DCC info

**Parameters**

\[in\] **info** DCC info (DF39)

### Returns

true

## setDCCMode() <a href="#a84692cb17a083a269110eeb9a0896ba2" id="a84692cb17a083a269110eeb9a0896ba2"></a>

<p>bool setDCCMode</p>

set DCC mode

**Parameters**

\[in\] **mode** DCC mode (DF7D)

### Returns

true

## setDomesticAppResult() <a href="#a7e2b1c600b0523e43fbc275234240be5" id="a7e2b1c600b0523e43fbc275234240be5"></a>

<p>bool setDomesticAppResult</p>

set domestic application result

**Parameters**

\[in\] **res** domestic application result (DF7E)

### Returns

true

## setDomesticApps() <a href="#a44f4870023e923c9b968d4b126d60c33" id="a44f4870023e923c9b968d4b126d60c33"></a>

<p>bool setDomesticApps</p>

set domestic applications

**Parameters**

\[in\] **app** array of domestic applications (FF01)

### Returns

true

## setDomesticInfo() <a href="#a7d3b373115ea12cdb46e12d92948ace9" id="a7d3b373115ea12cdb46e12d92948ace9"></a>

<p>bool setDomesticInfo</p>

set domestic information

**Parameters**

\[in\] **info** domestic information (DF5C)

### Returns

true

## setDomesticOptions()\[1/2\] <a href="#adde548042475cc7703d3bad11e31f7ae" id="adde548042475cc7703d3bad11e31f7ae"></a> {#setdomesticoptions-12}

<p>bool setDomesticOptions</p>

set domestic options

**Parameters**

\[in\] **opt** domestic options (DF5D)

### Returns

true

## setDomesticOptions()\[2/2\] <a href="#aecdedce81adcf0d06dbafa6aa016af7b" id="aecdedce81adcf0d06dbafa6aa016af7b"></a> {#setdomesticoptions-22}

<p>bool setDomesticOptions</p>

inline

set domestic options

**Parameters**

\[in\] **opt** domestic options (DF5D)

### Returns

true

## setEMVFallback() <a href="#a7a402df3400009a6e11f0a2e21a4d81f" id="a7a402df3400009a6e11f0a2e21a4d81f"></a>

<p>bool setEMVFallback</p>

set How to handle Fallback after Final select for the selected application

**Parameters**

\[in\] **fb** How to handle Fallback after Final select for the selected application (DF18)

### Returns

true

## setEMVPassthrough() <a href="#a7ae0d3ed2397780899cfc5faf7ef8abd" id="a7ae0d3ed2397780899cfc5faf7ef8abd"></a>

<p>bool setEMVPassthrough</p>

set EMV passthrough

**Parameters**

\[in\] **ep** EMV passthrough (DF4E)

### Returns

true

## setExcludeAID() <a href="#a94799e03509a55a5bd304a62a7158786" id="a94799e03509a55a5bd304a62a7158786"></a>

<p>bool setExcludeAID</p>

set list of excluded AIDs

**Parameters**

\[in\] **aid** array of AIDs (DF69)

### Returns

true

## setExcludeCombos() <a href="#a8e7526e928d48fee13f86d3f751bada8" id="a8e7526e928d48fee13f86d3f751bada8"></a>

<p>bool setExcludeCombos</p>

set list of excluded combos

Note: If AID part is empty, all combos with that kernel id are excluded and if kernel id is zero, the result is the same as for [setExcludeAID()](#a94799e03509a55a5bd304a62a7158786).

**Parameters**

\[in\] **combos** array of AID - kernel Id pair (FF69)

### Returns

true

## setExpirationDate() <a href="#a78378a9ad813ee879281f0cb1a5c22d2" id="a78378a9ad813ee879281f0cb1a5c22d2"></a>

<p>bool setExpirationDate</p>

set expiration date

**Parameters**

\[in\] **date** expiration date (5F24)

### Returns

true

## setFallbackMIDs() <a href="#aa873c4ba7490d4a915015730720cab44" id="aa873c4ba7490d4a915015730720cab44"></a>

<p>bool setFallbackMIDs</p>

set fallback MIDs

**Parameters**

\[in\] **mid** fallback MIDs (DF17)

### Returns

true

## setFallbackMSR() <a href="#a13d7042db2b7d1a153c1c29819f41bfc" id="a13d7042db2b7d1a153c1c29819f41bfc"></a>

<p>bool setFallbackMSR</p>

set MSR fallback configuration

**Parameters**

\[in\] **mid** fallback configuration (FF02)

### Returns

true

## setFallbackMSROptions() <a href="#a1035db5058ce4118849df434f192c91b" id="a1035db5058ce4118849df434f192c91b"></a>

<p>bool setFallbackMSROptions</p>

set options for fallback decision

**Parameters**

\[in\] **opt** options (DF3A)

### Returns

true

## setFCIIssuerDiscrData() <a href="#a24639703987bf24f5d6d648da6aa4f8f" id="a24639703987bf24f5d6d648da6aa4f8f"></a>

<p>bool setFCIIssuerDiscrData</p>

set FCI issuer discretionary data from final select response

**Parameters**

\[in\] **data** discretionary data (BF0C)

### Returns

true

## setFloorLimit()\[1/2\] <a href="#ab595e9743cf110f2b3f50171ebc00d01" id="ab595e9743cf110f2b3f50171ebc00d01"></a> {#setfloorlimit-12}

<p>bool setFloorLimit</p>

set floor limit

**Parameters**

\[in\] **limit** floor limit (9F1B/DFAB40)

### Returns

true

## setFloorLimit()\[2/2\] <a href="#aa515b4e613db7aadde9b59ca6a4d6e1b" id="aa515b4e613db7aadde9b59ca6a4d6e1b"></a> {#setfloorlimit-22}

<p>bool setFloorLimit</p>

set floor limit

**Parameters**

\[in\] **limit** floor limit (9F1B/DFAB40)

### Returns

true if successful, false in case of overflow

## setForceAccept() <a href="#ac1c4bda81cb538548ff1ef4ad84f2549" id="ac1c4bda81cb538548ff1ef4ad84f2549"></a>

<p>bool setForceAccept</p>

set force accept flag

**Parameters**

\[in\] **force** flag (DF43)

### Returns

true

## setForceOnline() <a href="#a2c7ffcfb5edcf7c4d7d31f50e7ff83a2" id="a2c7ffcfb5edcf7c4d7d31f50e7ff83a2"></a>

<p>bool setForceOnline</p>

set force online flag

**Parameters**

\[in\] **force** flag (DF40)

### Returns

true

## setIssuerCountryCode() <a href="#a212164fd96c64f4e81e11d101ec1dd2f" id="a212164fd96c64f4e81e11d101ec1dd2f"></a>

<p>bool setIssuerCountryCode</p>

set issuer country code

**Parameters**

\[in\] **country** issuer country code (5F28)

### Returns

true

## setKernelID()\[1/2\] <a href="#acf57e5f023c2eb15ec9553b1a5eeac5a" id="acf57e5f023c2eb15ec9553b1a5eeac5a"></a> {#setkernelid-12}

<p>bool setKernelID</p>

set EMV kernel ID

**Parameters**

\[in\] **id** kernel ID (DFAB01)

### Returns

true

## setKernelID()\[2/2\] <a href="#a401e0c9ca0cf63771b81faec6e853411" id="a401e0c9ca0cf63771b81faec6e853411"></a> {#setkernelid-22}

<p>bool setKernelID</p>

set EMV kernel ID

**Parameters**

\[in\] **id** kernel ID (DFAB01)

### Returns

true if successful, false in case of invalid format

## setKernelToUse() <a href="#a37d22986e07ddd7797f7e32aac36d819" id="a37d22986e07ddd7797f7e32aac36d819"></a>

<p>bool setKernelToUse</p>

set kernel to use

**Parameters**

\[in\] **kernel** kernel to use (DF7E)

### Returns

true

## setLanguage() <a href="#a45a58c1db43de5b3cbdea58c7a5436f8" id="a45a58c1db43de5b3cbdea58c7a5436f8"></a>

<p>bool setLanguage</p>

set language

**Parameters**

\[in\] **info** language (DF30)

### Returns

true

## setMasterAID()\[1/2\] <a href="#a73c791c477ee3e571afad9c694719f0d" id="a73c791c477ee3e571afad9c694719f0d"></a> {#setmasteraid-12}

<p>bool setMasterAID</p>

set master AID

**Parameters**

\[in\] **aid** AID (DF04)

### Returns

true

## setMasterAID()\[2/2\] <a href="#a0681983bab260a5f6ee31a0d6fa75d2f" id="a0681983bab260a5f6ee31a0d6fa75d2f"></a> {#setmasteraid-22}

<p>bool setMasterAID</p>

inline

set master AID

**Parameters**

\[in\] **aid** AID (DF04)

### Returns

true

## setMemorySlotReadTemplate() <a href="#aba97f85963b44e4c2bd0892704093dac" id="aba97f85963b44e4c2bd0892704093dac"></a>

<p>bool setMemorySlotReadTemplate</p>

set memory slot read template, list of data lements to read.

**Parameters**

\[in\] **t** read template (BF71)

### Returns

true

## setMemorySlotUpdateTemplate() <a href="#adce850858dc6606b8613844e0131fb80" id="adce850858dc6606b8613844e0131fb80"></a>

<p>bool setMemorySlotUpdateTemplate</p>

set memory slot update template, list of data lements to update using the PUT DATA

**Parameters**

\[in\] **t** update template (BF70)

### Returns

true

## setMerchantInfo() <a href="#aed97b31ce5e56786f1c987fc2dd1ff4b" id="aed97b31ce5e56786f1c987fc2dd1ff4b"></a>

<p>bool setMerchantInfo</p>

set merchant information

**Parameters**

\[in\] **info** merchant information (DF70)

### Returns

true

## setModifiedCandidates()\[1/2\] <a href="#af74ac98d87d6290dcb604cd8662578a1" id="af74ac98d87d6290dcb604cd8662578a1"></a> {#setmodifiedcandidates-12}

<p>bool setModifiedCandidates</p>

set candidates

**Parameters**

\[in\] **cand** candidates (DF8F01/DFD001)

### Returns

true

## setModifiedCandidates()\[2/2\] <a href="#abb1ccb9c8d4d13cb724627ce087ee711" id="abb1ccb9c8d4d13cb724627ce087ee711"></a> {#setmodifiedcandidates-22}

<p>bool setModifiedCandidates</p>

inline

set candidates

**Parameters**

\[in\] **cand** candidates (DF8F01/DFD001)

### Returns

true

## setModifyTransaction() <a href="#a80430a5a50816b94951f1986d1561a11" id="a80430a5a50816b94951f1986d1561a11"></a>

<p>bool setModifyTransaction</p>

set modify transaction, allowed values: 0xE1 (transaction must be performed online), 0xE4 (Transaction declined), 0xEA (transaction must be aborted

**Parameters**

\[in\] **m** modify transaction (DF76)

### Returns

true

## setNoCardholderConfirm() <a href="#a7e1e62a0180a27669cdd811035869d32" id="a7e1e62a0180a27669cdd811035869d32"></a>

<p>bool setNoCardholderConfirm</p>

set no cardholder confirmation flag

**Parameters**

\[in\] **conf** (DF4D)

### Returns

true

## setNoDirectorySelect() <a href="#a9ca508c1a8ffe02d64199ae7cb6f8c85" id="a9ca508c1a8ffe02d64199ae7cb6f8c85"></a>

<p>bool setNoDirectorySelect</p>

set no directory selection flag

**Parameters**

\[in\] **nodir** (DF45)

### Returns

true

## setNonCriticalScript()\[1/2\] <a href="#af2edf9d69099e0fa4779724b2459c217" id="af2edf9d69099e0fa4779724b2459c217"></a> {#setnoncriticalscript-12}

<p>bool setNonCriticalScript</p>

set noncritical scripts to be performed after 2nd Generate AC

**Parameters**

\[in\] **script** noncritical script (DF54)

### Returns

true

## setNonCriticalScript()\[2/2\] <a href="#a7d2b6e37f9793a888faab0fbbecf9e99" id="a7d2b6e37f9793a888faab0fbbecf9e99"></a> {#setnoncriticalscript-22}

<p>bool setNonCriticalScript</p>

inline

set noncritical scripts to be performed after 2nd Generate AC

**Parameters**

\[in\] **script** noncritical script (DF54)

### Returns

true

## setOfflinePINErrors() <a href="#ac0e3bbabeb6b7d22202f60a4c1b40d6c" id="ac0e3bbabeb6b7d22202f60a4c1b40d6c"></a>

<p>bool setOfflinePINErrors</p>

set offline PIN errors

**Parameters**

\[in\] **errors** offline PIN errors (DF59)

### Returns

true

## setOnlineResult() <a href="#aca7bd5476ce3431b939cb0cea83e4c57" id="aca7bd5476ce3431b939cb0cea83e4c57"></a>

<p>bool setOnlineResult</p>

set online result

**Parameters**

\[in\] **result** online result (DF50)

### Returns

true

## setOnlineSwitch() <a href="#a05eb50321cac8cd0d99642cf6da75310" id="a05eb50321cac8cd0d99642cf6da75310"></a>

<p>bool setOnlineSwitch</p>

set online switch flag

**Parameters**

\[in\] **online** flag (DF48)

### Returns

true

## setPANInBlacklist() <a href="#a0413bb0ee5e86390630af1939fd43c67" id="a0413bb0ee5e86390630af1939fd43c67"></a>

<p>bool setPANInBlacklist</p>

set PAN in blacklist (true/false)

**Parameters**

\[in\] **contained** PAN in blacklist (true/false) (DF72)

### Returns

true

## setPINBypass() <a href="#a405b374ab2d4175d087053332d6671a5" id="a405b374ab2d4175d087053332d6671a5"></a>

<p>bool setPINBypass</p>

set PIN bypass allowed

**Parameters**

\[in\] **bypass** PIN bypass allowed if true (DF41)

### Returns

true

## setPINInfo() <a href="#ad66faf15b1d87e92ba62865a79a6435a" id="ad66faf15b1d87e92ba62865a79a6435a"></a>

<p>bool setPINInfo</p>

set PIN info, depending on context this is the PIN type or result of PIN entry (<a href="namespacevfisdi.md#a95cf5c31200663caf8179c8a7917d501">EMVPINResult</a>)

**Parameters**

\[in\] **info** PIN info (DF79)

### Returns

true

## setPINPublicExponent() <a href="#a482ffd050a25650047e38d921e6dd9b8" id="a482ffd050a25650047e38d921e6dd9b8"></a>

<p>bool setPINPublicExponent</p>

set PIN public key exponent

**Parameters**

\[in\] **modulus** PIN public key exponent (DF7B)

### Returns

true

## setPINPublicModulus()\[1/2\] <a href="#abcf48233212282df3f1c1f642c4a2a16" id="abcf48233212282df3f1c1f642c4a2a16"></a> {#setpinpublicmodulus-12}

<p>bool setPINPublicModulus</p>

set PIN public key modulus

**Parameters**

\[in\] **modulus** PIN public key modulus (DF7A)

### Returns

true

## setPINPublicModulus()\[2/2\] <a href="#a2e10866f123a7e525c912954376c1e02" id="a2e10866f123a7e525c912954376c1e02"></a> {#setpinpublicmodulus-22}

<p>bool setPINPublicModulus</p>

inline

set PIN public key modulus

**Parameters**

\[in\] **modulus** PIN public key modulus (DF7A)

### Returns

true

## setPreselectedLanguage() <a href="#a92c3055d5b39bf82ab545eba378e0ef0" id="a92c3055d5b39bf82ab545eba378e0ef0"></a>

<p>bool setPreselectedLanguage</p>

set preselected language

**Parameters**

\[in\] **lang** preselected language (DF47)

### Returns

true

## setReducedCanditateList()\[1/2\] <a href="#adb0a839b6188b5ff12f1f448950210e2" id="adb0a839b6188b5ff12f1f448950210e2"></a> {#setreducedcanditatelist-12}

<p>bool setReducedCanditateList</p>

set reduced candidate list

**Parameters**

\[in\] **cl** reduced candidate list (DF75)

### Returns

true

## setReducedCanditateList()\[2/2\] <a href="#af100bad77dfdbf440cbc73d33b94b22f" id="af100bad77dfdbf440cbc73d33b94b22f"></a> {#setreducedcanditatelist-22}

<p>bool setReducedCanditateList</p>

inline

set reduced candidate list

**Parameters**

\[in\] **cl** reduced candidate list (DF75)

### Returns

true

## setSelector() <a href="#a8124deb63208158d872bfafb2bd9ef67" id="a8124deb63208158d872bfafb2bd9ef67"></a>

<p>bool setSelector</p>

set selector

**Parameters**

\[in\] **sel** selector (DF74)

### Returns

true

## setServerPollTimeout() <a href="#a6f4eb4aaf10f0708dde18271fcf0e8de" id="a6f4eb4aaf10f0708dde18271fcf0e8de"></a>

<p>bool setServerPollTimeout</p>

set poll timeout

**Parameters**

\[in\] **tout** timeout (C9)

### Returns

true

## setSkipPostprocessing() <a href="#a1438ef92103dc7875a844702f0e6ec4b" id="a1438ef92103dc7875a844702f0e6ec4b"></a>

<p>bool setSkipPostprocessing</p>

set skip postprocessing

**Parameters**

\[in\] **skip** skip postprocessing (DF76)

### Returns

true

## setSpecialTransactions() <a href="#ae4fd867a3e4118251e40456cc288d972" id="ae4fd867a3e4118251e40456cc288d972"></a>

<p>bool setSpecialTransactions</p>

set List of special allowed transactions (manual reversal, refund, reservation, tip, Referral)

**Parameters**

\[in\] **tx** list of special allowed transactions (DF1C/DFAB05)

### Returns

true

## setStoredAmount()\[1/2\] <a href="#a8f016343f4e695efd1709454240cd64b" id="a8f016343f4e695efd1709454240cd64b"></a> {#setstoredamount-12}

<p>bool setStoredAmount</p>

set stored amount

**Parameters**

\[in\] **amount** stored amount (DF73/DFD003)

### Returns

true

## setStoredAmount()\[2/2\] <a href="#a1f6a2eb5d4146eeeeb5eb56dba4e5673" id="a1f6a2eb5d4146eeeeb5eb56dba4e5673"></a> {#setstoredamount-22}

<p>bool setStoredAmount</p>

set stored amount

**Parameters**

\[in\] **amount** stored amount (DF73/DFD003)

### Returns

true if successful, false in case of overflow

## setTACDefault() <a href="#aa16dc8da02807d622670272a08e83180" id="aa16dc8da02807d622670272a08e83180"></a>

<p>bool setTACDefault</p>

set TAC default

**Parameters**

\[in\] **tac** contact TAC default (DF23/DFAB43)

### Returns

true

## setTACDenial() <a href="#a1fbe09894edee9a9defb6392bf9b0d4c" id="a1fbe09894edee9a9defb6392bf9b0d4c"></a>

<p>bool setTACDenial</p>

set TAC denial

**Parameters**

\[in\] **tac** contact TAC denial (DF21/DFAB44)

### Returns

true

## setTACOnline() <a href="#a54adce7113b725b91b03bc4196f373e5" id="a54adce7113b725b91b03bc4196f373e5"></a>

<p>bool setTACOnline</p>

set TAC online

**Parameters**

\[in\] **tac** contact TAC online (DF22/DFAB45)

### Returns

true

## setTextID() <a href="#af69b45fb4b708150223c6d9776ce224b" id="af69b45fb4b708150223c6d9776ce224b"></a>

<p>bool setTextID</p>

set text ID

**Parameters**

\[in\] **id** text ID (DF31)

### Returns

true

## setThreshold() <a href="#a2dec606c02b9ae63632f58cc782f1f6d" id="a2dec606c02b9ae63632f58cc782f1f6d"></a>

<p>bool setThreshold</p>

set threshold value for biased random online selection during risk management

**Parameters**

\[in\] **th** threshold value (DF24)

### Returns

true

## setTransactionCounter()\[1/2\] <a href="#acca2b99537fec06f0d1803c3a1702306" id="acca2b99537fec06f0d1803c3a1702306"></a> {#settransactioncounter-12}

<p>bool setTransactionCounter</p>

set transaction sequence counter

**Parameters**

\[in\] **counter** transaction sequence counter (9F41)

### Returns

true

## setTransactionCounter()\[2/2\] <a href="#a9f25e3917ff526c226ce8650220e3e8f" id="a9f25e3917ff526c226ce8650220e3e8f"></a> {#settransactioncounter-22}

<p>bool setTransactionCounter</p>

set transaction sequence counter

**Parameters**

\[in\] **counter** transaction sequence counter (9F41)

### Returns

true if successful, false in case of overflow

## setTransactionCurrency()\[1/2\] <a href="#a4de424306b728dc26ef8e9bd286b3869" id="a4de424306b728dc26ef8e9bd286b3869"></a> {#settransactioncurrency-12}

<p>bool setTransactionCurrency</p>

set transaction currency

**Parameters**

\[in\] **currency** currency (5F2A)

### Returns

true

## setTransactionCurrency()\[2/2\] <a href="#a249190029aeeb1d5dfe563a730cee322" id="a249190029aeeb1d5dfe563a730cee322"></a> {#settransactioncurrency-22}

<p>bool setTransactionCurrency</p>

set transaction currency

**Parameters**

\[in\] **currency** currency (5F2A)

### Returns

true

## setTransactionCurrencyExp() <a href="#a14b479242c47c4fb95ba179b4ffc1fd0" id="a14b479242c47c4fb95ba179b4ffc1fd0"></a>

<p>bool setTransactionCurrencyExp</p>

set transaction currency exponent

**Parameters**

\[in\] **exp** currency exponent (5F36)

### Returns

true

## setTransactionDate()\[1/2\] <a href="#a4d3fd172bf9b9f584c48367ee98f98e7" id="a4d3fd172bf9b9f584c48367ee98f98e7"></a> {#settransactiondate-12}

<p>bool setTransactionDate</p>

set transaction date

**Parameters**

\[in\] **date** binary date in the format YYMMDD (9A)

### Returns

true

## setTransactionDate()\[2/2\] <a href="#a916a12d7c7b15f0b84dfbe1c77bfa1f8" id="a916a12d7c7b15f0b84dfbe1c77bfa1f8"></a> {#settransactiondate-22}

<p>bool setTransactionDate</p>

set transaction date

**Parameters**

\[in\] **date** date string in the format YYMMDD (9A)

### Returns

true, false in case of conversion error, e.g. wrong length

## setTransactionOptions()\[1/2\] <a href="#a09223f88e07551e197d6abdb5c6eb132" id="a09223f88e07551e197d6abdb5c6eb132"></a> {#settransactionoptions-12}

<p>bool setTransactionOptions</p>

set transaction options

**Parameters**

\[in\] **opt** transaction options (DF36)

### Returns

true

## setTransactionOptions()\[2/2\] <a href="#a1b9fabcd648e4482c4ff80cdf4e063dc" id="a1b9fabcd648e4482c4ff80cdf4e063dc"></a> {#settransactionoptions-22}

<p>bool setTransactionOptions</p>

inline

set transaction options

**Parameters**

\[in\] **opt** transaction options (DF36)

### Returns

true

## setTransactionSteps()\[1/2\] <a href="#aba1b8f48adf11970673a546a9b55e59d" id="aba1b8f48adf11970673a546a9b55e59d"></a> {#settransactionsteps-12}

<p>bool setTransactionSteps</p>

set transaction steps

**Parameters**

\[in\] **step** transaction steps (DF37)

### Returns

true

## setTransactionSteps()\[2/2\] <a href="#ab2cb0d3128b548d52a436f83b170a337" id="ab2cb0d3128b548d52a436f83b170a337"></a> {#settransactionsteps-22}

<p>bool setTransactionSteps</p>

inline

set transaction steps

**Parameters**

\[in\] **step** transaction steps (DF37)

### Returns

true

## setTransactionTime()\[1/2\] <a href="#af69bcffc5b953e56fcb5e4753859fd6a" id="af69bcffc5b953e56fcb5e4753859fd6a"></a> {#settransactiontime-12}

<p>bool setTransactionTime</p>

set transaction time

**Parameters**

\[in\] **time** binary time in the format HHMMSS (9F21)

### Returns

true

## setTransactionTime()\[2/2\] <a href="#a75ce81e3dc70a7e166fffcc59de9173d" id="a75ce81e3dc70a7e166fffcc59de9173d"></a> {#settransactiontime-22}

<p>bool setTransactionTime</p>

set transaction time

**Parameters**

\[in\] **time** time string in the format HHMMSS (9F21)

### Returns

true, false in case of conversion error, e.g. wrong length

## setTransactionType() <a href="#ad38f45424b98294f97b9246dd37d9bbf" id="ad38f45424b98294f97b9246dd37d9bbf"></a>

<p>bool setTransactionType</p>

set transaction type

**Parameters**

\[in\] **type** transaction type (see EMVTransaction) (9C)

### Returns

true

## setUnpredictableNumber() <a href="#a3869e44318fae7a974d076eadf1acd18" id="a3869e44318fae7a974d076eadf1acd18"></a>

<p>bool setUnpredictableNumber</p>

set unpredictable number

**Parameters**

\[in\] **num** unpredictable number (9F37)

### Returns

true

## setVelocityOriginalIndex() <a href="#a9f5db021c26e6e09c9c4f28af2fb8dae" id="a9f5db021c26e6e09c9c4f28af2fb8dae"></a>

<p>bool setVelocityOriginalIndex</p>

set original index

**Parameters**

\[in\] **idx** original index (DF60)

### Returns

true

## setVelocityProcessingResultBitmap() <a href="#a07edd1a4c2600dd60cf56915fdc072af" id="a07edd1a4c2600dd60cf56915fdc072af"></a>

<p>bool setVelocityProcessingResultBitmap</p>

set velocity processing result bitmap

**Parameters**

\[in\] **bm** velocity processing result bitmap (DF63)

### Returns

true

## setVisaCTQ() <a href="#a61443ab6abf864d689c07d9919bcd83d" id="a61443ab6abf864d689c07d9919bcd83d"></a>

<p>bool setVisaCTQ</p>

set Visa CTQ

**Parameters**

\[in\] **ctq** Visa CTQ (9F6C)

### Returns

true

## setVoiceReferral() <a href="#ab0ff0ac5ad94d7742c1fd2349aac571f" id="ab0ff0ac5ad94d7742c1fd2349aac571f"></a>

<p>bool setVoiceReferral</p>

set merchant response in case of voice referral

**Parameters**

\[in\] **result** referral result (DF51)

### Returns

true

## setWriteDataStoragedData() <a href="#a90947c3c3dc3aa0414356665b8d0b779" id="a90947c3c3dc3aa0414356665b8d0b779"></a>

<p>bool setWriteDataStoragedData</p>

set data storage write data

**Parameters**

\[in\] **data** data storage write data (DF5A)

### Returns

true

## setWriteDSData() <a href="#a744b89076d4b8d940366949be7eb9305" id="a744b89076d4b8d940366949be7eb9305"></a>

<p>bool setWriteDSData</p>

set write DS data

**Parameters**

\[in\] **dsdata** write DS data (DF58)

### Returns

true

------------------------------------------------------------------------

The documentation for this struct was generated from the following file:

- sdiapi/src/sdiapi/<a href="sdiapi_2src_2sdiapi_2sdi__emv_8h_source.md">sdi_emv.h</a>
