---
title: vfisdi::EMVTxn

---

# vfisdi::EMVTxn



 [More...](#detailed-description)


`#include <sdi_emv.h>`

Inherits from [TLV](classvfisdi_1_1_t_l_v.md)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[Candidate](structvfisdi_1_1_e_m_v_txn_1_1_candidate.md)**  |
| struct | **[CandidateExt](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md)**  |
| struct | **[DomesticApp](structvfisdi_1_1_e_m_v_txn_1_1_domestic_app.md)**  |
| struct | **[FallbackMSR](structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r.md)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef std::vector< unsigned char > | **[bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[getIssuerID](structvfisdi_1_1_e_m_v_txn.md#function-getissuerid)**([Array](structvfisdi_1_1_array.md)< 4 > & id) const |
| bool | **[setAID](structvfisdi_1_1_e_m_v_txn.md#function-setaid)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & aid) |
| template <unsigned N\> <br>bool | **[setAID](structvfisdi_1_1_e_m_v_txn.md#function-setaid)**(const unsigned char(&) v[N]) |
| bool | **[getAID](structvfisdi_1_1_e_m_v_txn.md#function-getaid)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & aid) const |
| bool | **[getAppName](structvfisdi_1_1_e_m_v_txn.md#function-getappname)**(std::string & label) const |
| bool | **[getAgreedAppName](structvfisdi_1_1_e_m_v_txn.md#function-getagreedappname)**(std::string & name) const |
| bool | **[getPAN](structvfisdi_1_1_e_m_v_txn.md#function-getpan)**([Array](structvfisdi_1_1_array.md)< 10 > & pan) const |
| bool | **[getAIP](structvfisdi_1_1_e_m_v_txn.md#function-getaip)**([Array](structvfisdi_1_1_array.md)< 2 > & aip) const |
| bool | **[getDFName](structvfisdi_1_1_e_m_v_txn.md#function-getdfname)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & name) const |
| bool | **[getApplicationPriorityID](structvfisdi_1_1_e_m_v_txn.md#function-getapplicationpriorityid)**(unsigned char & id) const |
| bool | **[setAuthCode](structvfisdi_1_1_e_m_v_txn.md#function-setauthcode)**(const [Array](structvfisdi_1_1_array.md)< 6 > & code) |
| bool | **[getAuthCode](structvfisdi_1_1_e_m_v_txn.md#function-getauthcode)**([Array](structvfisdi_1_1_array.md)< 6 > & code) const |
| bool | **[setAuthResponseCode](structvfisdi_1_1_e_m_v_txn.md#function-setauthresponsecode)**(const [Array](structvfisdi_1_1_array.md)< 2 > & auth) |
| bool | **[getAuthResponseCode](structvfisdi_1_1_e_m_v_txn.md#function-getauthresponsecode)**([Array](structvfisdi_1_1_array.md)< 2 > & auth) const |
| bool | **[getCVMList](structvfisdi_1_1_e_m_v_txn.md#function-getcvmlist)**([Array](structvfisdi_1_1_array.md)< 28 > & list) const |
| bool | **[getTVR](structvfisdi_1_1_e_m_v_txn.md#function-gettvr)**([Array](structvfisdi_1_1_array.md)< 5 > & tvr) const |
| bool | **[setTransactionDate](structvfisdi_1_1_e_m_v_txn.md#function-settransactiondate)**(const [Array](structvfisdi_1_1_array.md)< 3 > & date) |
| bool | **[setTransactionDate](structvfisdi_1_1_e_m_v_txn.md#function-settransactiondate)**(const std::string & date) |
| bool | **[getTransactionDate](structvfisdi_1_1_e_m_v_txn.md#function-gettransactiondate)**([Array](structvfisdi_1_1_array.md)< 3 > & date) const |
| bool | **[getTransactionDate](structvfisdi_1_1_e_m_v_txn.md#function-gettransactiondate)**(std::string & date) const |
| bool | **[getTransactionStatusInfo](structvfisdi_1_1_e_m_v_txn.md#function-gettransactionstatusinfo)**([Array](structvfisdi_1_1_array.md)< 2 > & status) const |
| bool | **[setTransactionType](structvfisdi_1_1_e_m_v_txn.md#function-settransactiontype)**(unsigned char type) |
| bool | **[getTransactionType](structvfisdi_1_1_e_m_v_txn.md#function-gettransactiontype)**(unsigned char & type) const |
| bool | **[setCtlsLEDState](structvfisdi_1_1_e_m_v_txn.md#function-setctlsledstate)**(unsigned char state) |
| bool | **[getCtlsLEDState](structvfisdi_1_1_e_m_v_txn.md#function-getctlsledstate)**(unsigned char & state) const |
| bool | **[setServerPollTimeout](structvfisdi_1_1_e_m_v_txn.md#function-setserverpolltimeout)**(unsigned char tout) |
| bool | **[getServerPollTimeout](structvfisdi_1_1_e_m_v_txn.md#function-getserverpolltimeout)**(unsigned char & tout) const |
| bool | **[setBeepScenario](structvfisdi_1_1_e_m_v_txn.md#function-setbeepscenario)**(unsigned char bs) |
| bool | **[getBeepScenario](structvfisdi_1_1_e_m_v_txn.md#function-getbeepscenario)**(unsigned char & bs) const |
| bool | **[getCardholderName](structvfisdi_1_1_e_m_v_txn.md#function-getcardholdername)**(std::string & name) const |
| bool | **[setExpirationDate](structvfisdi_1_1_e_m_v_txn.md#function-setexpirationdate)**(const [Array](structvfisdi_1_1_array.md)< 3 > & date) |
| bool | **[getExpirationDate](structvfisdi_1_1_e_m_v_txn.md#function-getexpirationdate)**([Array](structvfisdi_1_1_array.md)< 3 > & date) const |
| bool | **[getEffectiveDate](structvfisdi_1_1_e_m_v_txn.md#function-geteffectivedate)**([Array](structvfisdi_1_1_array.md)< 3 > & date) const |
| bool | **[getEffectiveDate](structvfisdi_1_1_e_m_v_txn.md#function-geteffectivedate)**(std::string & date) const |
| bool | **[setIssuerCountryCode](structvfisdi_1_1_e_m_v_txn.md#function-setissuercountrycode)**(unsigned short country) |
| bool | **[getIssuerCountryCode](structvfisdi_1_1_e_m_v_txn.md#function-getissuercountrycode)**(unsigned short & country) const |
| bool | **[setTransactionCurrency](structvfisdi_1_1_e_m_v_txn.md#function-settransactioncurrency)**([Currency](namespacevfisdi.md#enum-currency) currency) |
| bool | **[getTransactionCurrency](structvfisdi_1_1_e_m_v_txn.md#function-gettransactioncurrency)**([Currency](namespacevfisdi.md#enum-currency) & currency) const |
| bool | **[setTransactionCurrency](structvfisdi_1_1_e_m_v_txn.md#function-settransactioncurrency)**(int currency) |
| bool | **[getTransactionCurrency](structvfisdi_1_1_e_m_v_txn.md#function-gettransactioncurrency)**(int & currency) const |
| bool | **[getLanguagePreference](structvfisdi_1_1_e_m_v_txn.md#function-getlanguagepreference)**(std::string & lang) const |
| bool | **[getServiceCode](structvfisdi_1_1_e_m_v_txn.md#function-getservicecode)**([Array](structvfisdi_1_1_array.md)< 2 > & code) const |
| bool | **[getPANSequenceNumber](structvfisdi_1_1_e_m_v_txn.md#function-getpansequencenumber)**([BCD](classvfisdi_1_1_b_c_d.md)< 1 > & num) const |
| bool | **[getPANSequenceNumber](structvfisdi_1_1_e_m_v_txn.md#function-getpansequencenumber)**(int & num) const |
| bool | **[setTransactionCurrencyExp](structvfisdi_1_1_e_m_v_txn.md#function-settransactioncurrencyexp)**(unsigned char exp) |
| bool | **[getTransactionCurrencyExp](structvfisdi_1_1_e_m_v_txn.md#function-gettransactioncurrencyexp)**(unsigned char & exp) const |
| bool | **[setAccountType](structvfisdi_1_1_e_m_v_txn.md#function-setaccounttype)**(unsigned char type) |
| bool | **[getAccountType](structvfisdi_1_1_e_m_v_txn.md#function-getaccounttype)**(unsigned char & type) const |
| bool | **[setAmount](structvfisdi_1_1_e_m_v_txn.md#function-setamount)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount) |
| bool | **[setAmount](structvfisdi_1_1_e_m_v_txn.md#function-setamount)**(int64_t amount) |
| bool | **[getAmount](structvfisdi_1_1_e_m_v_txn.md#function-getamount)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount) const |
| bool | **[getAmount](structvfisdi_1_1_e_m_v_txn.md#function-getamount)**(int64_t & amount) const |
| bool | **[setCashbackAmount](structvfisdi_1_1_e_m_v_txn.md#function-setcashbackamount)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount) |
| bool | **[setCashbackAmount](structvfisdi_1_1_e_m_v_txn.md#function-setcashbackamount)**(int64_t amount) |
| bool | **[getCashbackAmount](structvfisdi_1_1_e_m_v_txn.md#function-getcashbackamount)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount) const |
| bool | **[getCashbackAmount](structvfisdi_1_1_e_m_v_txn.md#function-getcashbackamount)**(int64_t & amount) const |
| bool | **[getTerminalAID](structvfisdi_1_1_e_m_v_txn.md#function-getterminalaid)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & aid) const |
| bool | **[getKernelAppVersionNumber](structvfisdi_1_1_e_m_v_txn.md#function-getkernelappversionnumber)**([Array](structvfisdi_1_1_array.md)< 2 > & version) const |
| bool | **[getChipAppVersionNumber](structvfisdi_1_1_e_m_v_txn.md#function-getchipappversionnumber)**([Array](structvfisdi_1_1_array.md)< 2 > & version) const |
| bool | **[getASRPD](structvfisdi_1_1_e_m_v_txn.md#function-getasrpd)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & asrpd) const |
| bool | **[getCardholderNameExt](structvfisdi_1_1_e_m_v_txn.md#function-getcardholdernameext)**(std::string & name) const |
| bool | **[getIACDefault](structvfisdi_1_1_e_m_v_txn.md#function-getiacdefault)**([Array](structvfisdi_1_1_array.md)< 5 > & iac) const |
| bool | **[getIACDenial](structvfisdi_1_1_e_m_v_txn.md#function-getiacdenial)**([Array](structvfisdi_1_1_array.md)< 5 > & iac) const |
| bool | **[getIACOnline](structvfisdi_1_1_e_m_v_txn.md#function-getiaconline)**([Array](structvfisdi_1_1_array.md)< 5 > & iac) const |
| bool | **[getIssuerAppData](structvfisdi_1_1_e_m_v_txn.md#function-getissuerappdata)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & idata) const |
| bool | **[getIssuerCodeTableID](structvfisdi_1_1_e_m_v_txn.md#function-getissuercodetableid)**(unsigned char & id) const |
| bool | **[getPreferredName](structvfisdi_1_1_e_m_v_txn.md#function-getpreferredname)**(std::string & label) const |
| bool | **[getMerchantID](structvfisdi_1_1_e_m_v_txn.md#function-getmerchantid)**(std::string & mid) const |
| bool | **[getTerminalCountryCode](structvfisdi_1_1_e_m_v_txn.md#function-getterminalcountrycode)**(unsigned short & country) const |
| bool | **[setFloorLimit](structvfisdi_1_1_e_m_v_txn.md#function-setfloorlimit)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setFloorLimit](structvfisdi_1_1_e_m_v_txn.md#function-setfloorlimit)**(int64_t limit) |
| bool | **[getFloorLimit](structvfisdi_1_1_e_m_v_txn.md#function-getfloorlimit)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getFloorLimit](structvfisdi_1_1_e_m_v_txn.md#function-getfloorlimit)**(int64_t & limit) const |
| bool | **[getIFDSerial](structvfisdi_1_1_e_m_v_txn.md#function-getifdserial)**([Array](structvfisdi_1_1_array.md)< 8 > & serial) const |
| bool | **[setTransactionTime](structvfisdi_1_1_e_m_v_txn.md#function-settransactiontime)**(const [Array](structvfisdi_1_1_array.md)< 3 > & time) |
| bool | **[setTransactionTime](structvfisdi_1_1_e_m_v_txn.md#function-settransactiontime)**(const std::string & time) |
| bool | **[getTransactionTime](structvfisdi_1_1_e_m_v_txn.md#function-gettransactiontime)**([Array](structvfisdi_1_1_array.md)< 3 > & time) const |
| bool | **[getTransactionTime](structvfisdi_1_1_e_m_v_txn.md#function-gettransactiontime)**(std::string & time) const |
| bool | **[setCryptogram](structvfisdi_1_1_e_m_v_txn.md#function-setcryptogram)**(const [Array](structvfisdi_1_1_array.md)< 8 > & crypt) |
| bool | **[getCryptogram](structvfisdi_1_1_e_m_v_txn.md#function-getcryptogram)**([Array](structvfisdi_1_1_array.md)< 8 > & crypt) const |
| bool | **[getCryptogramInfo](structvfisdi_1_1_e_m_v_txn.md#function-getcryptograminfo)**(unsigned char & info) const |
| bool | **[getTerminalCapabilities](structvfisdi_1_1_e_m_v_txn.md#function-getterminalcapabilities)**([Array](structvfisdi_1_1_array.md)< 3 > & caps) const |
| bool | **[getCVMResults](structvfisdi_1_1_e_m_v_txn.md#function-getcvmresults)**([Array](structvfisdi_1_1_array.md)< 3 > & cvmr) const |
| bool | **[getTerminalType](structvfisdi_1_1_e_m_v_txn.md#function-getterminaltype)**(unsigned char & type) const |
| bool | **[getATC](structvfisdi_1_1_e_m_v_txn.md#function-getatc)**([Array](structvfisdi_1_1_array.md)< 2 > & atc) const |
| bool | **[setUnpredictableNumber](structvfisdi_1_1_e_m_v_txn.md#function-setunpredictablenumber)**(unsigned num) |
| bool | **[getUnpredictableNumber](structvfisdi_1_1_e_m_v_txn.md#function-getunpredictablenumber)**(unsigned & num) const |
| bool | **[getPOSEntryMode](structvfisdi_1_1_e_m_v_txn.md#function-getposentrymode)**(unsigned char & mode) const |
| bool | **[getAdditionalCapabilities](structvfisdi_1_1_e_m_v_txn.md#function-getadditionalcapabilities)**([Array](structvfisdi_1_1_array.md)< 5 > & caps) const |
| bool | **[setTransactionCounter](structvfisdi_1_1_e_m_v_txn.md#function-settransactioncounter)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 4 > & counter) |
| bool | **[setTransactionCounter](structvfisdi_1_1_e_m_v_txn.md#function-settransactioncounter)**(int counter) |
| bool | **[getTransactionCounter](structvfisdi_1_1_e_m_v_txn.md#function-gettransactioncounter)**([BCD](classvfisdi_1_1_b_c_d.md)< 4 > & counter) const |
| bool | **[getTransactionCounter](structvfisdi_1_1_e_m_v_txn.md#function-gettransactioncounter)**(int & counter) const |
| bool | **[setApplicationCurrency](structvfisdi_1_1_e_m_v_txn.md#function-setapplicationcurrency)**([Currency](namespacevfisdi.md#enum-currency) currency) |
| bool | **[getApplicationCurrency](structvfisdi_1_1_e_m_v_txn.md#function-getapplicationcurrency)**([Currency](namespacevfisdi.md#enum-currency) & currency) const |
| bool | **[getDataAuthCode](structvfisdi_1_1_e_m_v_txn.md#function-getdataauthcode)**([Array](structvfisdi_1_1_array.md)< 2 > & code) const |
| bool | **[getICCDynamicNumber](structvfisdi_1_1_e_m_v_txn.md#function-geticcdynamicnumber)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & dn) const |
| bool | **[getTransactionCategory](structvfisdi_1_1_e_m_v_txn.md#function-gettransactioncategory)**(unsigned char & cat) const |
| bool | **[getAvailableOfflineAmount](structvfisdi_1_1_e_m_v_txn.md#function-getavailableofflineamount)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount) const |
| bool | **[getAvailableOfflineAmount](structvfisdi_1_1_e_m_v_txn.md#function-getavailableofflineamount)**(int64_t & amount) const |
| bool | **[getTransactionQualifier](structvfisdi_1_1_e_m_v_txn.md#function-gettransactionqualifier)**([Array](structvfisdi_1_1_array.md)< 4 > & q) const |
| bool | **[setVisaCTQ](structvfisdi_1_1_e_m_v_txn.md#function-setvisactq)**(const [Array](structvfisdi_1_1_array.md)< 2 > & ctq) |
| bool | **[getVisaCTQ](structvfisdi_1_1_e_m_v_txn.md#function-getvisactq)**([Array](structvfisdi_1_1_array.md)< 2 > & ctq) const |
| bool | **[setMasterAID](structvfisdi_1_1_e_m_v_txn.md#function-setmasteraid)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & aid) |
| template <unsigned N\> <br>bool | **[setMasterAID](structvfisdi_1_1_e_m_v_txn.md#function-setmasteraid)**(const unsigned char(&) v[N]) |
| bool | **[getMasterAID](structvfisdi_1_1_e_m_v_txn.md#function-getmasteraid)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & aid) const |
| bool | **[setBuildAppList](structvfisdi_1_1_e_m_v_txn.md#function-setbuildapplist)**(unsigned char opt) |
| bool | **[getBuildAppList](structvfisdi_1_1_e_m_v_txn.md#function-getbuildapplist)**(unsigned char & opt) const |
| bool | **[getReaderNumber](structvfisdi_1_1_e_m_v_txn.md#function-getreadernumber)**(unsigned char & num) const |
| bool | **[getNonCriticalScriptResults](structvfisdi_1_1_e_m_v_txn.md#function-getnoncriticalscriptresults)**(std::vector< [Array](structvfisdi_1_1_array.md)< 5 > > & results) const |
| bool | **[getCriticalScriptResults](structvfisdi_1_1_e_m_v_txn.md#function-getcriticalscriptresults)**(std::vector< [Array](structvfisdi_1_1_array.md)< 5 > > & results) const |
| bool | **[setFallbackMIDs](structvfisdi_1_1_e_m_v_txn.md#function-setfallbackmids)**(const [Array](structvfisdi_1_1_array.md)< 3 > & mid) |
| bool | **[getFallbackMIDs](structvfisdi_1_1_e_m_v_txn.md#function-getfallbackmids)**([Array](structvfisdi_1_1_array.md)< 3 > & mid) const |
| bool | **[setEMVFallback](structvfisdi_1_1_e_m_v_txn.md#function-setemvfallback)**(unsigned char fb) |
| bool | **[getEMVFallback](structvfisdi_1_1_e_m_v_txn.md#function-getemvfallback)**(unsigned char & fb) const |
| bool | **[getObfuscatedPAN](structvfisdi_1_1_e_m_v_txn.md#function-getobfuscatedpan)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & pan) const |
| bool | **[getObfuscatedTrack2](structvfisdi_1_1_e_m_v_txn.md#function-getobfuscatedtrack2)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & track) const |
| bool | **[setTACDenial](structvfisdi_1_1_e_m_v_txn.md#function-settacdenial)**(const [Array](structvfisdi_1_1_array.md)< 5 > & tac) |
| bool | **[getTACDenial](structvfisdi_1_1_e_m_v_txn.md#function-gettacdenial)**([Array](structvfisdi_1_1_array.md)< 5 > & tac) const |
| bool | **[setTACOnline](structvfisdi_1_1_e_m_v_txn.md#function-settaconline)**(const [Array](structvfisdi_1_1_array.md)< 5 > & tac) |
| bool | **[getTACOnline](structvfisdi_1_1_e_m_v_txn.md#function-gettaconline)**([Array](structvfisdi_1_1_array.md)< 5 > & tac) const |
| bool | **[setTACDefault](structvfisdi_1_1_e_m_v_txn.md#function-settacdefault)**(const [Array](structvfisdi_1_1_array.md)< 5 > & tac) |
| bool | **[getTACDefault](structvfisdi_1_1_e_m_v_txn.md#function-gettacdefault)**([Array](structvfisdi_1_1_array.md)< 5 > & tac) const |
| bool | **[setThreshold](structvfisdi_1_1_e_m_v_txn.md#function-setthreshold)**(unsigned th) |
| bool | **[getThreshold](structvfisdi_1_1_e_m_v_txn.md#function-getthreshold)**(unsigned & th) const |
| bool | **[setSpecialTransactions](structvfisdi_1_1_e_m_v_txn.md#function-setspecialtransactions)**(const [EMVSpecialTransactions](classvfisdi_1_1_e_m_v_special_transactions.md) & tx) |
| bool | **[getSpecialTransactions](structvfisdi_1_1_e_m_v_txn.md#function-getspecialtransactions)**([EMVSpecialTransactions](classvfisdi_1_1_e_m_v_special_transactions.md) & tx) const |
| bool | **[setLanguage](structvfisdi_1_1_e_m_v_txn.md#function-setlanguage)**(unsigned char info) |
| bool | **[getLanguage](structvfisdi_1_1_e_m_v_txn.md#function-getlanguage)**(unsigned char & info) const |
| bool | **[setTextID](structvfisdi_1_1_e_m_v_txn.md#function-settextid)**(unsigned char id) |
| bool | **[getTextID](structvfisdi_1_1_e_m_v_txn.md#function-gettextid)**(unsigned char & id) const |
| bool | **[getBalanceBefore](structvfisdi_1_1_e_m_v_txn.md#function-getbalancebefore)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount) const |
| bool | **[getBalanceBefore](structvfisdi_1_1_e_m_v_txn.md#function-getbalancebefore)**(int64_t & amount) const |
| bool | **[getDefaultAppName](structvfisdi_1_1_e_m_v_txn.md#function-getdefaultappname)**(std::string & appname) const |
| bool | **[getApplicationLabel](structvfisdi_1_1_e_m_v_txn.md#function-getapplicationlabel)**(std::string & appname) const |
| bool | **[setAmountConfirmation](structvfisdi_1_1_e_m_v_txn.md#function-setamountconfirmation)**(unsigned char when) |
| bool | **[getAmountConfirmation](structvfisdi_1_1_e_m_v_txn.md#function-getamountconfirmation)**(unsigned char & when) const |
| bool | **[setTransactionOptions](structvfisdi_1_1_e_m_v_txn.md#function-settransactionoptions)**(const [Array](structvfisdi_1_1_array.md)< 5 > & opt) |
| bool | **[setTransactionOptions](structvfisdi_1_1_e_m_v_txn.md#function-settransactionoptions)**(const [EMVTransactionOptions](namespacevfisdi.md#typedef-emvtransactionoptions) & opt) |
| bool | **[getTransactionOptions](structvfisdi_1_1_e_m_v_txn.md#function-gettransactionoptions)**([Array](structvfisdi_1_1_array.md)< 5 > & opt) const |
| bool | **[getTransactionOptions](structvfisdi_1_1_e_m_v_txn.md#function-gettransactionoptions)**([EMVTransactionOptions](namespacevfisdi.md#typedef-emvtransactionoptions) & opt) const |
| bool | **[setTransactionSteps](structvfisdi_1_1_e_m_v_txn.md#function-settransactionsteps)**(const [Array](structvfisdi_1_1_array.md)< 3 > & step) |
| bool | **[setTransactionSteps](structvfisdi_1_1_e_m_v_txn.md#function-settransactionsteps)**(const [EMVTransactionSteps](namespacevfisdi.md#typedef-emvtransactionsteps) & step) |
| bool | **[getTransactionSteps](structvfisdi_1_1_e_m_v_txn.md#function-gettransactionsteps)**([Array](structvfisdi_1_1_array.md)< 3 > & step) const |
| bool | **[getTransactionSteps](structvfisdi_1_1_e_m_v_txn.md#function-gettransactionsteps)**([EMVTransactionSteps](namespacevfisdi.md#typedef-emvtransactionsteps) & step) const |
| bool | **[getBalanceAfter](structvfisdi_1_1_e_m_v_txn.md#function-getbalanceafter)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount) const |
| bool | **[getBalanceAfter](structvfisdi_1_1_e_m_v_txn.md#function-getbalanceafter)**(int64_t & amount) const |
| bool | **[setDCCInfo](structvfisdi_1_1_e_m_v_txn.md#function-setdccinfo)**(const [Array](structvfisdi_1_1_array.md)< 3 > & info) |
| bool | **[getDCCInfo](structvfisdi_1_1_e_m_v_txn.md#function-getdccinfo)**([Array](structvfisdi_1_1_array.md)< 3 > & info) const |
| bool | **[setFallbackMSROptions](structvfisdi_1_1_e_m_v_txn.md#function-setfallbackmsroptions)**(unsigned char opt) |
| bool | **[getFallbackMSROptions](structvfisdi_1_1_e_m_v_txn.md#function-getfallbackmsroptions)**(unsigned char & opt) const |
| bool | **[setForceOnline](structvfisdi_1_1_e_m_v_txn.md#function-setforceonline)**(unsigned char force) |
| bool | **[getForceOnline](structvfisdi_1_1_e_m_v_txn.md#function-getforceonline)**(unsigned char & force) const |
| bool | **[setPINBypass](structvfisdi_1_1_e_m_v_txn.md#function-setpinbypass)**(bool bypass) |
| bool | **[getPINBypass](structvfisdi_1_1_e_m_v_txn.md#function-getpinbypass)**(bool & bypass) const |
| bool | **[getEMVStatus](structvfisdi_1_1_e_m_v_txn.md#function-getemvstatus)**(unsigned & status) const |
| bool | **[setForceAccept](structvfisdi_1_1_e_m_v_txn.md#function-setforceaccept)**(unsigned char force) |
| bool | **[getForceAccept](structvfisdi_1_1_e_m_v_txn.md#function-getforceaccept)**(unsigned char & force) const |
| bool | **[setNoDirectorySelect](structvfisdi_1_1_e_m_v_txn.md#function-setnodirectoryselect)**(unsigned char nodir) |
| bool | **[getNoDirectorySelect](structvfisdi_1_1_e_m_v_txn.md#function-getnodirectoryselect)**(unsigned char & nodir) const |
| bool | **[setPreselectedLanguage](structvfisdi_1_1_e_m_v_txn.md#function-setpreselectedlanguage)**(unsigned char lang) |
| bool | **[getPreselectedLanguage](structvfisdi_1_1_e_m_v_txn.md#function-getpreselectedlanguage)**(unsigned char & lang) const |
| bool | **[setOnlineSwitch](structvfisdi_1_1_e_m_v_txn.md#function-setonlineswitch)**(unsigned char online) |
| bool | **[getOnlineSwitch](structvfisdi_1_1_e_m_v_txn.md#function-getonlineswitch)**(unsigned char & online) const |
| bool | **[setNoCardholderConfirm](structvfisdi_1_1_e_m_v_txn.md#function-setnocardholderconfirm)**(unsigned char conf) |
| bool | **[getNoCardholderConfirm](structvfisdi_1_1_e_m_v_txn.md#function-getnocardholderconfirm)**(unsigned char & conf) const |
| bool | **[setEMVPassthrough](structvfisdi_1_1_e_m_v_txn.md#function-setemvpassthrough)**(unsigned char ep) |
| bool | **[getEMVPassthrough](structvfisdi_1_1_e_m_v_txn.md#function-getemvpassthrough)**(unsigned char & ep) const |
| bool | **[getPDOLInfo](structvfisdi_1_1_e_m_v_txn.md#function-getpdolinfo)**(unsigned char & info) const |
| bool | **[getCardType](structvfisdi_1_1_e_m_v_txn.md#function-getcardtype)**(unsigned char & type) const |
| bool | **[setOnlineResult](structvfisdi_1_1_e_m_v_txn.md#function-setonlineresult)**(bool result) |
| bool | **[getOnlineResult](structvfisdi_1_1_e_m_v_txn.md#function-getonlineresult)**(bool & result) const |
| bool | **[setVoiceReferral](structvfisdi_1_1_e_m_v_txn.md#function-setvoicereferral)**(bool result) |
| bool | **[getVoiceReferral](structvfisdi_1_1_e_m_v_txn.md#function-getvoicereferral)**(bool & result) const |
| bool | **[setAuthData](structvfisdi_1_1_e_m_v_txn.md#function-setauthdata)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & data) |
| template <unsigned N\> <br>bool | **[setAuthData](structvfisdi_1_1_e_m_v_txn.md#function-setauthdata)**(const unsigned char(&) v[N]) |
| bool | **[getAuthData](structvfisdi_1_1_e_m_v_txn.md#function-getauthdata)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & data) const |
| bool | **[setCriticalScript](structvfisdi_1_1_e_m_v_txn.md#function-setcriticalscript)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & script) |
| template <unsigned N\> <br>bool | **[setCriticalScript](structvfisdi_1_1_e_m_v_txn.md#function-setcriticalscript)**(const unsigned char(&) v[N]) |
| bool | **[getCriticalScript](structvfisdi_1_1_e_m_v_txn.md#function-getcriticalscript)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & script) const |
| bool | **[setNonCriticalScript](structvfisdi_1_1_e_m_v_txn.md#function-setnoncriticalscript)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & script) |
| template <unsigned N\> <br>bool | **[setNonCriticalScript](structvfisdi_1_1_e_m_v_txn.md#function-setnoncriticalscript)**(const unsigned char(&) v[N]) |
| bool | **[getNonCriticalScript](structvfisdi_1_1_e_m_v_txn.md#function-getnoncriticalscript)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & script) const |
| bool | **[setAuthResponseReferral](structvfisdi_1_1_e_m_v_txn.md#function-setauthresponsereferral)**(const [Array](structvfisdi_1_1_array.md)< 2 > & ac) |
| bool | **[getAuthResponseReferral](structvfisdi_1_1_e_m_v_txn.md#function-getauthresponsereferral)**([Array](structvfisdi_1_1_array.md)< 2 > & ac) const |
| bool | **[setAuthResponseSwitch](structvfisdi_1_1_e_m_v_txn.md#function-setauthresponseswitch)**(const [Array](structvfisdi_1_1_array.md)< 2 > & resp) |
| bool | **[getAuthResponseSwitch](structvfisdi_1_1_e_m_v_txn.md#function-getauthresponseswitch)**([Array](structvfisdi_1_1_array.md)< 2 > & resp) const |
| bool | **[setAuthResponseWrongPIN](structvfisdi_1_1_e_m_v_txn.md#function-setauthresponsewrongpin)**(const [Array](structvfisdi_1_1_array.md)< 2 > & ac) |
| bool | **[getAuthResponseWrongPIN](structvfisdi_1_1_e_m_v_txn.md#function-getauthresponsewrongpin)**([Array](structvfisdi_1_1_array.md)< 2 > & ac) const |
| bool | **[setAuthResponseOnlinePIN](structvfisdi_1_1_e_m_v_txn.md#function-setauthresponseonlinepin)**(const [Array](structvfisdi_1_1_array.md)< 2 > & resp) |
| bool | **[getAuthResponseOnlinePIN](structvfisdi_1_1_e_m_v_txn.md#function-getauthresponseonlinepin)**([Array](structvfisdi_1_1_array.md)< 2 > & resp) const |
| bool | **[setAdditionalResponseOK](structvfisdi_1_1_e_m_v_txn.md#function-setadditionalresponseok)**(const [Array](structvfisdi_1_1_array.md)< 2 > & ac) |
| bool | **[getAdditionalResponseOK](structvfisdi_1_1_e_m_v_txn.md#function-getadditionalresponseok)**([Array](structvfisdi_1_1_array.md)< 2 > & ac) const |
| bool | **[setWriteDSData](structvfisdi_1_1_e_m_v_txn.md#function-setwritedsdata)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & dsdata) |
| bool | **[getWriteDSData](structvfisdi_1_1_e_m_v_txn.md#function-getwritedsdata)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & dsdata) const |
| bool | **[setOfflinePINErrors](structvfisdi_1_1_e_m_v_txn.md#function-setofflinepinerrors)**(unsigned char errors) |
| bool | **[getOfflinePINErrors](structvfisdi_1_1_e_m_v_txn.md#function-getofflinepinerrors)**(unsigned char & errors) const |
| bool | **[setWriteDataStoragedData](structvfisdi_1_1_e_m_v_txn.md#function-setwritedatastorageddata)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & data) |
| bool | **[getWriteDataStoragedData](structvfisdi_1_1_e_m_v_txn.md#function-getwritedatastorageddata)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & data) const |
| bool | **[setDCCForbidden](structvfisdi_1_1_e_m_v_txn.md#function-setdccforbidden)**(unsigned char dcc) |
| bool | **[getDCCForbidden](structvfisdi_1_1_e_m_v_txn.md#function-getdccforbidden)**(unsigned char & dcc) const |
| bool | **[setDomesticInfo](structvfisdi_1_1_e_m_v_txn.md#function-setdomesticinfo)**(const [Array](structvfisdi_1_1_array.md)< 3 > & info) |
| bool | **[getDomesticInfo](structvfisdi_1_1_e_m_v_txn.md#function-getdomesticinfo)**([Array](structvfisdi_1_1_array.md)< 3 > & info) const |
| bool | **[setDomesticOptions](structvfisdi_1_1_e_m_v_txn.md#function-setdomesticoptions)**(const [Array](structvfisdi_1_1_array.md)< 3 > & opt) |
| bool | **[setDomesticOptions](structvfisdi_1_1_e_m_v_txn.md#function-setdomesticoptions)**(const [EMVDomesticOptions](namespacevfisdi.md#typedef-emvdomesticoptions) & opt) |
| bool | **[getDomesticOptions](structvfisdi_1_1_e_m_v_txn.md#function-getdomesticoptions)**([Array](structvfisdi_1_1_array.md)< 3 > & opt) const |
| bool | **[getDomesticOptions](structvfisdi_1_1_e_m_v_txn.md#function-getdomesticoptions)**([EMVDomesticOptions](namespacevfisdi.md#typedef-emvdomesticoptions) & opt) const |
| bool | **[setVelocityOriginalIndex](structvfisdi_1_1_e_m_v_txn.md#function-setvelocityoriginalindex)**(unsigned char idx) |
| bool | **[getVelocityOriginalIndex](structvfisdi_1_1_e_m_v_txn.md#function-getvelocityoriginalindex)**(unsigned char & idx) const |
| bool | **[getErrorData](structvfisdi_1_1_e_m_v_txn.md#function-geterrordata)**([Array](structvfisdi_1_1_array.md)< 15 > & error) const |
| bool | **[getDisplayTextIndex](structvfisdi_1_1_e_m_v_txn.md#function-getdisplaytextindex)**(unsigned char & id) const |
| bool | **[setVelocityProcessingResultBitmap](structvfisdi_1_1_e_m_v_txn.md#function-setvelocityprocessingresultbitmap)**(const [Array](structvfisdi_1_1_array.md)< 3 > & bm) |
| bool | **[getVelocityProcessingResultBitmap](structvfisdi_1_1_e_m_v_txn.md#function-getvelocityprocessingresultbitmap)**([Array](structvfisdi_1_1_array.md)< 3 > & bm) const |
| bool | **[getKernelDebug](structvfisdi_1_1_e_m_v_txn.md#function-getkerneldebug)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & debug) const |
| bool | **[setExcludeAID](structvfisdi_1_1_e_m_v_txn.md#function-setexcludeaid)**(const std::vector< [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) > & aid) |
| bool | **[getExcludeAID](structvfisdi_1_1_e_m_v_txn.md#function-getexcludeaid)**(std::vector< [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) > & aid) const |
| bool | **[setExcludeCombos](structvfisdi_1_1_e_m_v_txn.md#function-setexcludecombos)**(const std::vector< std::pair< [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector), [Array](structvfisdi_1_1_array.md)< 3 > > > & combos) |
| bool | **[setCardholderInfo](structvfisdi_1_1_e_m_v_txn.md#function-setcardholderinfo)**(unsigned char info) |
| bool | **[getCardholderInfo](structvfisdi_1_1_e_m_v_txn.md#function-getcardholderinfo)**(unsigned char & info) const |
| bool | **[setMerchantInfo](structvfisdi_1_1_e_m_v_txn.md#function-setmerchantinfo)**(unsigned char info) |
| bool | **[getMerchantInfo](structvfisdi_1_1_e_m_v_txn.md#function-getmerchantinfo)**(unsigned char & info) const |
| bool | **[setConfirmAmount](structvfisdi_1_1_e_m_v_txn.md#function-setconfirmamount)**(bool confirm) |
| bool | **[getConfirmAmount](structvfisdi_1_1_e_m_v_txn.md#function-getconfirmamount)**(bool & confirm) const |
| bool | **[setPANInBlacklist](structvfisdi_1_1_e_m_v_txn.md#function-setpaninblacklist)**(unsigned char contained) |
| bool | **[getPANInBlacklist](structvfisdi_1_1_e_m_v_txn.md#function-getpaninblacklist)**(unsigned char & contained) const |
| bool | **[setStoredAmount](structvfisdi_1_1_e_m_v_txn.md#function-setstoredamount)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount) |
| bool | **[setStoredAmount](structvfisdi_1_1_e_m_v_txn.md#function-setstoredamount)**(int64_t amount) |
| bool | **[getStoredAmount](structvfisdi_1_1_e_m_v_txn.md#function-getstoredamount)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & amount) const |
| bool | **[getStoredAmount](structvfisdi_1_1_e_m_v_txn.md#function-getstoredamount)**(int64_t & amount) const |
| bool | **[setSelector](structvfisdi_1_1_e_m_v_txn.md#function-setselector)**(unsigned char sel) |
| bool | **[getSelector](structvfisdi_1_1_e_m_v_txn.md#function-getselector)**(unsigned char & sel) const |
| bool | **[setReducedCanditateList](structvfisdi_1_1_e_m_v_txn.md#function-setreducedcanditatelist)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & cl) |
| template <unsigned N\> <br>bool | **[setReducedCanditateList](structvfisdi_1_1_e_m_v_txn.md#function-setreducedcanditatelist)**(const unsigned char(&) v[N]) |
| bool | **[getReducedCanditateList](structvfisdi_1_1_e_m_v_txn.md#function-getreducedcanditatelist)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & cl) const |
| bool | **[setModifyTransaction](structvfisdi_1_1_e_m_v_txn.md#function-setmodifytransaction)**(unsigned char m) |
| bool | **[getModifyTransaction](structvfisdi_1_1_e_m_v_txn.md#function-getmodifytransaction)**(unsigned char & m) const |
| bool | **[setSkipPostprocessing](structvfisdi_1_1_e_m_v_txn.md#function-setskippostprocessing)**(unsigned char skip) |
| bool | **[getSkipPostprocessing](structvfisdi_1_1_e_m_v_txn.md#function-getskippostprocessing)**(unsigned char & skip) const |
| bool | **[setPINInfo](structvfisdi_1_1_e_m_v_txn.md#function-setpininfo)**(unsigned char info) |
| bool | **[getPINInfo](structvfisdi_1_1_e_m_v_txn.md#function-getpininfo)**(unsigned char & info) const |
| bool | **[setPINPublicModulus](structvfisdi_1_1_e_m_v_txn.md#function-setpinpublicmodulus)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & modulus) |
| template <unsigned N\> <br>bool | **[setPINPublicModulus](structvfisdi_1_1_e_m_v_txn.md#function-setpinpublicmodulus)**(const unsigned char(&) v[N]) |
| bool | **[getPINPublicModulus](structvfisdi_1_1_e_m_v_txn.md#function-getpinpublicmodulus)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & modulus) const |
| bool | **[setPINPublicExponent](structvfisdi_1_1_e_m_v_txn.md#function-setpinpublicexponent)**(unsigned modulus) |
| bool | **[getPINPublicExponent](structvfisdi_1_1_e_m_v_txn.md#function-getpinpublicexponent)**(unsigned & modulus) const |
| bool | **[setDCCMode](structvfisdi_1_1_e_m_v_txn.md#function-setdccmode)**(unsigned char mode) |
| bool | **[getDCCMode](structvfisdi_1_1_e_m_v_txn.md#function-getdccmode)**(unsigned char & mode) const |
| bool | **[setDomesticAppResult](structvfisdi_1_1_e_m_v_txn.md#function-setdomesticappresult)**(unsigned char res) |
| bool | **[getDomesticAppResult](structvfisdi_1_1_e_m_v_txn.md#function-getdomesticappresult)**(unsigned char & res) const |
| bool | **[setKernelToUse](structvfisdi_1_1_e_m_v_txn.md#function-setkerneltouse)**(const [Array](structvfisdi_1_1_array.md)< 3 > & kernel) |
| bool | **[getKernelToUse](structvfisdi_1_1_e_m_v_txn.md#function-getkerneltouse)**([Array](structvfisdi_1_1_array.md)< 3 > & kernel) const |
| bool | **[setCommunicationError](structvfisdi_1_1_e_m_v_txn.md#function-setcommunicationerror)**(unsigned char err) |
| bool | **[getCommunicationError](structvfisdi_1_1_e_m_v_txn.md#function-getcommunicationerror)**(unsigned char & err) const |
| bool | **[getDestination](structvfisdi_1_1_e_m_v_txn.md#function-getdestination)**(int & dest) const |
| bool | **[setDataExchangeRequest](structvfisdi_1_1_e_m_v_txn.md#function-setdataexchangerequest)**(unsigned char req) |
| bool | **[getDataExchangeRequest](structvfisdi_1_1_e_m_v_txn.md#function-getdataexchangerequest)**(unsigned char & req) const |
| bool | **[setDataExchangeState](structvfisdi_1_1_e_m_v_txn.md#function-setdataexchangestate)**(unsigned char state) |
| bool | **[getDataExchangeState](structvfisdi_1_1_e_m_v_txn.md#function-getdataexchangestate)**(unsigned char & state) const |
| bool | **[setDataExchangeMode](structvfisdi_1_1_e_m_v_txn.md#function-setdataexchangemode)**(unsigned char state) |
| bool | **[getDataExchangeMode](structvfisdi_1_1_e_m_v_txn.md#function-getdataexchangemode)**(unsigned char & state) const |
| bool | **[setDataExchangeDataNeeded](structvfisdi_1_1_e_m_v_txn.md#function-setdataexchangedataneeded)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & dn) |
| template <unsigned N\> <br>bool | **[setDataExchangeDataNeeded](structvfisdi_1_1_e_m_v_txn.md#function-setdataexchangedataneeded)**(const unsigned char(&) v[N]) |
| bool | **[getDataExchangeDataNeeded](structvfisdi_1_1_e_m_v_txn.md#function-getdataexchangedataneeded)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & dn) const |
| bool | **[setModifiedCandidates](structvfisdi_1_1_e_m_v_txn.md#function-setmodifiedcandidates)**(const [bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & cand) |
| template <unsigned N\> <br>bool | **[setModifiedCandidates](structvfisdi_1_1_e_m_v_txn.md#function-setmodifiedcandidates)**(const unsigned char(&) v[N]) |
| bool | **[getModifiedCandidates](structvfisdi_1_1_e_m_v_txn.md#function-getmodifiedcandidates)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & cand) const |
| bool | **[getSetupResult](structvfisdi_1_1_e_m_v_txn.md#function-getsetupresult)**([Array](structvfisdi_1_1_array.md)< 5 > & result) const |
| bool | **[setCBDisplayTextIndex](structvfisdi_1_1_e_m_v_txn.md#function-setcbdisplaytextindex)**(unsigned char idx) |
| bool | **[getCBDisplayTextIndex](structvfisdi_1_1_e_m_v_txn.md#function-getcbdisplaytextindex)**(unsigned char & idx) const |
| bool | **[getCardID](structvfisdi_1_1_e_m_v_txn.md#function-getcardid)**([Array](structvfisdi_1_1_array.md)< 20 > & id) const |
| bool | **[getTrackStatus](structvfisdi_1_1_e_m_v_txn.md#function-gettrackstatus)**([Array](structvfisdi_1_1_array.md)< 3 > & track_status) const |
| bool | **[getObfuscatedTrack1String](structvfisdi_1_1_e_m_v_txn.md#function-getobfuscatedtrack1string)**(std::string & track) const |
| bool | **[getTecselData](structvfisdi_1_1_e_m_v_txn.md#function-gettecseldata)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & data) const |
| bool | **[setKernelID](structvfisdi_1_1_e_m_v_txn.md#function-setkernelid)**(const [Array](structvfisdi_1_1_array.md)< 3 > & id) |
| bool | **[setKernelID](structvfisdi_1_1_e_m_v_txn.md#function-setkernelid)**(unsigned id) |
| bool | **[getKernelID](structvfisdi_1_1_e_m_v_txn.md#function-getkernelid)**([Array](structvfisdi_1_1_array.md)< 3 > & id) const |
| bool | **[getKernelID](structvfisdi_1_1_e_m_v_txn.md#function-getkernelid)**(unsigned & id) const |
| bool | **[setAppNameChosen](structvfisdi_1_1_e_m_v_txn.md#function-setappnamechosen)**(const std::string & name) |
| bool | **[getAppNameChosen](structvfisdi_1_1_e_m_v_txn.md#function-getappnamechosen)**(std::string & name) const |
| bool | **[setApplicationKernelId](structvfisdi_1_1_e_m_v_txn.md#function-setapplicationkernelid)**(const [Array](structvfisdi_1_1_array.md)< 3 > & id) |
| bool | **[setApplicationKernelId](structvfisdi_1_1_e_m_v_txn.md#function-setapplicationkernelid)**(unsigned id) |
| bool | **[getApplicationKernelId](structvfisdi_1_1_e_m_v_txn.md#function-getapplicationkernelid)**([Array](structvfisdi_1_1_array.md)< 3 > & id) const |
| bool | **[getApplicationKernelId](structvfisdi_1_1_e_m_v_txn.md#function-getapplicationkernelid)**(unsigned & id) const |
| bool | **[setAppNameUtf8](structvfisdi_1_1_e_m_v_txn.md#function-setappnameutf8)**(const std::string & name) |
| bool | **[getAppNameUtf8](structvfisdi_1_1_e_m_v_txn.md#function-getappnameutf8)**(std::string & name) const |
| bool | **[getKernelPrivateNonBER](structvfisdi_1_1_e_m_v_txn.md#function-getkernelprivatenonber)**([bytevector](structvfisdi_1_1_e_m_v_txn.md#typedef-bytevector) & nber) const |
| bool | **[setFCIIssuerDiscrData](structvfisdi_1_1_e_m_v_txn.md#function-setfciissuerdiscrdata)**(const [TLV](classvfisdi_1_1_t_l_v.md) & data) |
| bool | **[getFCIIssuerDiscrData](structvfisdi_1_1_e_m_v_txn.md#function-getfciissuerdiscrdata)**([TLV](classvfisdi_1_1_t_l_v.md) & data) const |
| bool | **[setMemorySlotUpdateTemplate](structvfisdi_1_1_e_m_v_txn.md#function-setmemoryslotupdatetemplate)**(const [TLV](classvfisdi_1_1_t_l_v.md) & t) |
| bool | **[getMemorySlotUpdateTemplate](structvfisdi_1_1_e_m_v_txn.md#function-getmemoryslotupdatetemplate)**([TLV](classvfisdi_1_1_t_l_v.md) & t) const |
| bool | **[setMemorySlotReadTemplate](structvfisdi_1_1_e_m_v_txn.md#function-setmemoryslotreadtemplate)**(const [TLV](classvfisdi_1_1_t_l_v.md) & t) |
| bool | **[getMemorySlotReadTemplate](structvfisdi_1_1_e_m_v_txn.md#function-getmemoryslotreadtemplate)**([TLV](classvfisdi_1_1_t_l_v.md) & t) const |
| bool | **[setDomesticApps](structvfisdi_1_1_e_m_v_txn.md#function-setdomesticapps)**(const std::vector< [DomesticApp](structvfisdi_1_1_e_m_v_txn_1_1_domestic_app.md) > & app) |
| bool | **[getDomesticApps](structvfisdi_1_1_e_m_v_txn.md#function-getdomesticapps)**(std::vector< [DomesticApp](structvfisdi_1_1_e_m_v_txn_1_1_domestic_app.md) > & app) const |
| bool | **[setFallbackMSR](structvfisdi_1_1_e_m_v_txn.md#function-setfallbackmsr)**(const std::vector< [FallbackMSR](structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r.md) > & mid) |
| bool | **[getFallbackMSR](structvfisdi_1_1_e_m_v_txn.md#function-getfallbackmsr)**(std::vector< [FallbackMSR](structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r.md) > & mid) const |
| bool | **[setCandidateList](structvfisdi_1_1_e_m_v_txn.md#function-setcandidatelist)**(const std::vector< [Candidate](structvfisdi_1_1_e_m_v_txn_1_1_candidate.md) > & cand) |
| bool | **[getCandidateList](structvfisdi_1_1_e_m_v_txn.md#function-getcandidatelist)**(std::vector< [Candidate](structvfisdi_1_1_e_m_v_txn_1_1_candidate.md) > & cand) const |
| bool | **[setCBCandidateList](structvfisdi_1_1_e_m_v_txn.md#function-setcbcandidatelist)**(const std::vector< [CandidateExt](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md) > & cand) |
| bool | **[getCBCandidateList](structvfisdi_1_1_e_m_v_txn.md#function-getcbcandidatelist)**(std::vector< [CandidateExt](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md) > & cand) const |
| bool | **[setDataExchangeReceivedData](structvfisdi_1_1_e_m_v_txn.md#function-setdataexchangereceiveddata)**(const [TLV](classvfisdi_1_1_t_l_v.md) & data) |
| bool | **[getDataExchangeReceivedData](structvfisdi_1_1_e_m_v_txn.md#function-getdataexchangereceiveddata)**([TLV](classvfisdi_1_1_t_l_v.md) & data) const |
| bool | **[setDataExchangeSendData](structvfisdi_1_1_e_m_v_txn.md#function-setdataexchangesenddata)**(const [TLV](classvfisdi_1_1_t_l_v.md) & data) |
| bool | **[getDataExchangeSendData](structvfisdi_1_1_e_m_v_txn.md#function-getdataexchangesenddata)**([TLV](classvfisdi_1_1_t_l_v.md) & data) const |
| bool | **[getNFCVASData](structvfisdi_1_1_e_m_v_txn.md#function-getnfcvasdata)**([TLV](classvfisdi_1_1_t_l_v.md) & data) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[exists](structvfisdi_1_1_e_m_v_txn.md#function-exists)**(unsigned tag1) const |
| bool | **[exists](structvfisdi_1_1_e_m_v_txn.md#function-exists)**(unsigned tag1, unsigned tag2) const |

## Additional inherited members

**Public Classes inherited from [TLV](classvfisdi_1_1_t_l_v.md)**

|                | Name           |
| -------------- | -------------- |
| class | **[Tag](classvfisdi_1_1_t_l_v_1_1_tag.md)**  |

**Public Functions inherited from [TLV](classvfisdi_1_1_t_l_v.md)**

|                | Name           |
| -------------- | -------------- |
| | **[TLV](classvfisdi_1_1_t_l_v.md#function-tlv)**(const char * t) |
| | **[TLV](classvfisdi_1_1_t_l_v.md#function-tlv)**(unsigned t =0) |
| | **[TLV](classvfisdi_1_1_t_l_v.md#function-tlv)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) |
| | **[TLV](classvfisdi_1_1_t_l_v.md#function-tlv)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) |
| void | **[assign](classvfisdi_1_1_t_l_v.md#function-assign)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) |
| void | **[tag](classvfisdi_1_1_t_l_v.md#function-tag)**(const char * t) |
| void | **[tag](classvfisdi_1_1_t_l_v.md#function-tag)**(unsigned t) |
| void | **[tag](classvfisdi_1_1_t_l_v.md#function-tag)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) |
| const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & | **[tag](classvfisdi_1_1_t_l_v.md#function-tag)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const std::string & data) |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const char * data) |
| | **[operator std::string](classvfisdi_1_1_t_l_v.md#function-operator-stdstring)**() const |
| std::string | **[getString](classvfisdi_1_1_t_l_v.md#function-getstring)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(long data) |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(int data) |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(unsigned data) |
| | **[operator long](classvfisdi_1_1_t_l_v.md#function-operator-long)**() const |
| | **[operator int](classvfisdi_1_1_t_l_v.md#function-operator-int)**() const |
| | **[operator unsigned](classvfisdi_1_1_t_l_v.md#function-operator-unsigned)**() const |
| long | **[getNumber](classvfisdi_1_1_t_l_v.md#function-getnumber)**() const |
| unsigned long | **[getUnsigned](classvfisdi_1_1_t_l_v.md#function-getunsigned)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(bool data) |
| | **[operator bool](classvfisdi_1_1_t_l_v.md#function-operator-bool)**() const |
| bool | **[getBool](classvfisdi_1_1_t_l_v.md#function-getbool)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(unsigned char data) |
| | **[operator unsigned char](classvfisdi_1_1_t_l_v.md#function-operator-unsigned-char)**() const |
| unsigned char | **[getByte](classvfisdi_1_1_t_l_v.md#function-getbyte)**() const |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const std::vector< unsigned char > & data) |
| void | **[operator=](classvfisdi_1_1_t_l_v.md#function-operator=)**(const std::vector< char > & data) |
| void | **[assign](classvfisdi_1_1_t_l_v.md#function-assign)**(const void * data, unsigned size) |
| std::vector< unsigned char > & | **[value](classvfisdi_1_1_t_l_v.md#function-value)**() |
| const std::vector< unsigned char > & | **[value](classvfisdi_1_1_t_l_v.md#function-value)**() const |
| bool | **[load](classvfisdi_1_1_t_l_v.md#function-load)**(const std::vector< unsigned char > & data, bool indefinite =false) |
| void | **[store](classvfisdi_1_1_t_l_v.md#function-store)**(std::vector< unsigned char > & data, bool use_indefinite =false) const |
| bool | **[operator==](classvfisdi_1_1_t_l_v.md#function-operator==)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) const |
| bool | **[operator!=](classvfisdi_1_1_t_l_v.md#function-operator!=)**(const [TLV](classvfisdi_1_1_t_l_v.md) & o) const |
| void | **[dumptree](classvfisdi_1_1_t_l_v.md#function-dumptree)**(bool use_indefinite =false, int indent =0, bool skip_toplevel_tag =true) |
| unsigned | **[count](classvfisdi_1_1_t_l_v.md#function-count)**() const |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator[]](classvfisdi_1_1_t_l_v.md#function-operator[])**(unsigned idx) |
| const [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator[]](classvfisdi_1_1_t_l_v.md#function-operator[])**(unsigned idx) const |
| void | **[erasepos](classvfisdi_1_1_t_l_v.md#function-erasepos)**(unsigned idx) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator()](classvfisdi_1_1_t_l_v.md#function-operator())**(const char * t, unsigned idx =0) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator()](classvfisdi_1_1_t_l_v.md#function-operator())**(unsigned t, unsigned idx =0) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[operator()](classvfisdi_1_1_t_l_v.md#function-operator())**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t, unsigned idx =0) |
| unsigned | **[count](classvfisdi_1_1_t_l_v.md#function-count)**(const char * t) const |
| unsigned | **[count](classvfisdi_1_1_t_l_v.md#function-count)**(unsigned t) const |
| unsigned | **[count](classvfisdi_1_1_t_l_v.md#function-count)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) const |
| unsigned | **[rename](classvfisdi_1_1_t_l_v.md#function-rename)**(const char * from, const char * to) |
| unsigned | **[rename](classvfisdi_1_1_t_l_v.md#function-rename)**(unsigned from, unsigned to) |
| unsigned | **[rename](classvfisdi_1_1_t_l_v.md#function-rename)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & from, const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & to) |
| bool | **[constructed](classvfisdi_1_1_t_l_v.md#function-constructed)**() const |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[add](classvfisdi_1_1_t_l_v.md#function-add)**(const char * t) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[add](classvfisdi_1_1_t_l_v.md#function-add)**(unsigned t) |
| [TLV](classvfisdi_1_1_t_l_v.md) & | **[add](classvfisdi_1_1_t_l_v.md#function-add)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) |
| void | **[clear](classvfisdi_1_1_t_l_v.md#function-clear)**() |
| unsigned | **[erasetag](classvfisdi_1_1_t_l_v.md#function-erasetag)**(const char * t) |
| unsigned | **[erasetag](classvfisdi_1_1_t_l_v.md#function-erasetag)**(unsigned t) |
| unsigned | **[erasetag](classvfisdi_1_1_t_l_v.md#function-erasetag)**(const [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) & t) |

**Protected Functions inherited from [TLV](classvfisdi_1_1_t_l_v.md)**

|                | Name           |
| -------------- | -------------- |
| void | **[initSize](classvfisdi_1_1_t_l_v.md#function-initsize)**(bool use_indefinite) |
| unsigned | **[storedSize](classvfisdi_1_1_t_l_v.md#function-storedsize)**(bool use_indefinite) const |
| void | **[storeAdd](classvfisdi_1_1_t_l_v.md#function-storeadd)**(std::vector< unsigned char > & data, bool use_indefinite) const |
| bool | **[load](classvfisdi_1_1_t_l_v.md#function-load)**(const unsigned char *& start, const unsigned char * end, bool indefinite =false) |

**Protected Attributes inherited from [TLV](classvfisdi_1_1_t_l_v.md)**

|                | Name           |
| -------------- | -------------- |
| [Tag](classvfisdi_1_1_t_l_v_1_1_tag.md) | **[m_tag](classvfisdi_1_1_t_l_v.md#variable-m-tag)**  |
| std::vector< unsigned char > | **[m_data](classvfisdi_1_1_t_l_v.md#variable-m-data)**  |
| std::vector< std::shared_ptr< [TLV](classvfisdi_1_1_t_l_v.md) > > | **[m_child](classvfisdi_1_1_t_l_v.md#variable-m-child)**  |
| unsigned | **[m_contentsize](classvfisdi_1_1_t_l_v.md#variable-m-contentsize)**  |


## Detailed Description

```cpp
struct vfisdi::EMVTxn;
```


SDI EMV transaction context, provides set/get functions for common data elements 

## Public Types Documentation

### typedef bytevector

```cpp
typedef std::vector<unsigned char> bytevector;
```


byte vector typedef 


## Public Functions Documentation

### function getIssuerID

```cpp
bool getIssuerID(
    Array< 4 > & id
) const
```


**Parameters**: 

  * **id** issuer ID (42/9F0C) 


**Return**: true if successful, false if not found or invalid format 

get issuer ID


### function setAID

```cpp
bool setAID(
    const bytevector & aid
)
```


**Parameters**: 

  * **aid** AID (4F) 


**Return**: true if successful, false in case of invalid format 

set AID


### function setAID

```cpp
template <unsigned N>
inline bool setAID(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **aid** AID (4F) 


**Return**: true if successful, false in case of invalid format 

set AID


### function getAID

```cpp
bool getAID(
    bytevector & aid
) const
```


**Parameters**: 

  * **aid** AID (4F) 


**Return**: true if successful, false if not found 

get AID


### function getAppName

```cpp
bool getAppName(
    std::string & label
) const
```


**Parameters**: 

  * **label** application name (50/DFAB22) 


**Return**: true if successful, false if not found 

get application name


### function getAgreedAppName

```cpp
bool getAgreedAppName(
    std::string & name
) const
```


**Parameters**: 

  * **name** agreed application name (50/9F12) 


**Return**: true if successful, false if not found 

get agreed application name


### function getPAN

```cpp
bool getPAN(
    Array< 10 > & pan
) const
```


**Parameters**: 

  * **pan** PAN (5A) 


**Return**: true if successful, false in case of invalid format 

get PAN


### function getAIP

```cpp
bool getAIP(
    Array< 2 > & aip
) const
```


**Parameters**: 

  * **aip** application interchange profile (82) 


**Return**: true if successful, false if not found or invalid format 

get application interchange profile


### function getDFName

```cpp
bool getDFName(
    bytevector & name
) const
```


**Parameters**: 

  * **name** dedicated file name (84) 


**Return**: true if successful, false if not found 

get dedicated file (DF) name


### function getApplicationPriorityID

```cpp
bool getApplicationPriorityID(
    unsigned char & id
) const
```


**Parameters**: 

  * **id** application priority ID (87) 


**Return**: true if successful, false if not found 

get application priority ID


### function setAuthCode

```cpp
bool setAuthCode(
    const Array< 6 > & code
)
```


**Parameters**: 

  * **code** authorization code (89) 


**Return**: true 

set value given by the card issuer for an accepted transaction


### function getAuthCode

```cpp
bool getAuthCode(
    Array< 6 > & code
) const
```


**Parameters**: 

  * **code** authorization code (89) 


**Return**: true if successful, false if not found or invalid format 

get value given by the card issuer for an accepted transaction


### function setAuthResponseCode

```cpp
bool setAuthResponseCode(
    const Array< 2 > & auth
)
```


**Parameters**: 

  * **auth** authorization response code (8A) 


**Return**: true 

set authorization response code


### function getAuthResponseCode

```cpp
bool getAuthResponseCode(
    Array< 2 > & auth
) const
```


**Parameters**: 

  * **auth** authorization response code (8A) 


**Return**: true if successful, false if not found or invalid format 

get authorization response code


### function getCVMList

```cpp
bool getCVMList(
    Array< 28 > & list
) const
```


**Parameters**: 

  * **list** CVM list (8E) 


**Return**: true if successful, false if not found or invalid format 

get CVM list


### function getTVR

```cpp
bool getTVR(
    Array< 5 > & tvr
) const
```


**Parameters**: 

  * **tvr** terminal verification results (95) 


**Return**: true if successful, false if not found or invalid format 

get terminal verification results


### function setTransactionDate

```cpp
bool setTransactionDate(
    const Array< 3 > & date
)
```


**Parameters**: 

  * **date** binary date in the format YYMMDD (9A) 


**Return**: true 

set transaction date


### function setTransactionDate

```cpp
bool setTransactionDate(
    const std::string & date
)
```


**Parameters**: 

  * **date** date string in the format YYMMDD (9A) 


**Return**: true, false in case of conversion error, e.g. wrong length 

set transaction date


### function getTransactionDate

```cpp
bool getTransactionDate(
    Array< 3 > & date
) const
```


**Parameters**: 

  * **date** binary date in the format YYMMDD (9A) 


**Return**: true if successful, false if not found or invalid format 

get transaction date


### function getTransactionDate

```cpp
bool getTransactionDate(
    std::string & date
) const
```


**Parameters**: 

  * **date** binary date in the format YYMMDD (9A) 


**Return**: true if successful, false if not found or invalid format 

get transaction date


### function getTransactionStatusInfo

```cpp
bool getTransactionStatusInfo(
    Array< 2 > & status
) const
```


**Parameters**: 

  * **status** transaction status information (9B) 


**Return**: true if successful, false if not found or invalid format 

get transaction status information


### function setTransactionType

```cpp
bool setTransactionType(
    unsigned char type
)
```


**Parameters**: 

  * **type** transaction type (see [EMVTransaction](namespacevfisdi.md#enum-emvtransaction)) (9C) 


**Return**: true 

set transaction type


### function getTransactionType

```cpp
bool getTransactionType(
    unsigned char & type
) const
```


**Parameters**: 

  * **type** transaction type (see [EMVTransaction](namespacevfisdi.md#enum-emvtransaction)) (9C) 


**Return**: true if successful, false if not found 

get transaction type


### function setCtlsLEDState

```cpp
bool setCtlsLEDState(
    unsigned char state
)
```


**Parameters**: 

  * **state** LED state (C8) 


**Return**: true 

set LED state


### function getCtlsLEDState

```cpp
bool getCtlsLEDState(
    unsigned char & state
) const
```


**Parameters**: 

  * **state** LED state (C8) 


**Return**: true if successful, false if not found 

get LED state


### function setServerPollTimeout

```cpp
bool setServerPollTimeout(
    unsigned char tout
)
```


**Parameters**: 

  * **tout** timeout (C9) 


**Return**: true 

set poll timeout


### function getServerPollTimeout

```cpp
bool getServerPollTimeout(
    unsigned char & tout
) const
```


**Parameters**: 

  * **tout** timeout (C9) 


**Return**: true if successful, false if not found 

get poll timeout


### function setBeepScenario

```cpp
bool setBeepScenario(
    unsigned char bs
)
```


**Parameters**: 

  * **bs** beep scenario (CB) 


**Return**: true 

set beep scenario


### function getBeepScenario

```cpp
bool getBeepScenario(
    unsigned char & bs
) const
```


**Parameters**: 

  * **bs** beep scenario (CB) 


**Return**: true if successful, false if not found 

get beep scenario


### function getCardholderName

```cpp
bool getCardholderName(
    std::string & name
) const
```


**Parameters**: 

  * **name** cardholder name (5F20) 


**Return**: true if successful, false if not found 

get cardholder name


### function setExpirationDate

```cpp
bool setExpirationDate(
    const Array< 3 > & date
)
```


**Parameters**: 

  * **date** expiration date (5F24) 


**Return**: true 

set expiration date


### function getExpirationDate

```cpp
bool getExpirationDate(
    Array< 3 > & date
) const
```


**Parameters**: 

  * **date** expiration date (5F24) 


**Return**: true if successful, false if not found or invalid format 

get expiration date


### function getEffectiveDate

```cpp
bool getEffectiveDate(
    Array< 3 > & date
) const
```


**Parameters**: 

  * **date** binary date in the format YYMMDD (5F25) 


**Return**: true if successful, false if not found or invalid format 

get effective date


### function getEffectiveDate

```cpp
bool getEffectiveDate(
    std::string & date
) const
```


**Parameters**: 

  * **date** binary date in the format YYMMDD (5F25) 


**Return**: true if successful, false if not found or invalid format 

get effective date


### function setIssuerCountryCode

```cpp
bool setIssuerCountryCode(
    unsigned short country
)
```


**Parameters**: 

  * **country** issuer country code (5F28) 


**Return**: true 

set issuer country code


### function getIssuerCountryCode

```cpp
bool getIssuerCountryCode(
    unsigned short & country
) const
```


**Parameters**: 

  * **country** issuer country code (5F28) 


**Return**: true if successful, false if not found 

get issuer country code


### function setTransactionCurrency

```cpp
bool setTransactionCurrency(
    Currency currency
)
```


**Parameters**: 

  * **currency** currency (5F2A) 


**Return**: true 

set transaction currency


### function getTransactionCurrency

```cpp
bool getTransactionCurrency(
    Currency & currency
) const
```


**Parameters**: 

  * **currency** currency (5F2A) 


**Return**: true if successful, false if not found 

get transaction currency


### function setTransactionCurrency

```cpp
bool setTransactionCurrency(
    int currency
)
```


**Parameters**: 

  * **currency** currency (5F2A) 


**Return**: true 

set transaction currency


### function getTransactionCurrency

```cpp
bool getTransactionCurrency(
    int & currency
) const
```


**Parameters**: 

  * **currency** currency (5F2A) 


**Return**: true if successful, false if not found 

get transaction currency


### function getLanguagePreference

```cpp
bool getLanguagePreference(
    std::string & lang
) const
```


**Parameters**: 

  * **lang** language preference (5F2D) 


**Return**: true if successful, false if not found 

get language preference


### function getServiceCode

```cpp
bool getServiceCode(
    Array< 2 > & code
) const
```


**Parameters**: 

  * **code** service code (5F30) 


**Return**: true if successful, false if not found or invalid format 

get service code


### function getPANSequenceNumber

```cpp
bool getPANSequenceNumber(
    BCD< 1 > & num
) const
```


**Parameters**: 

  * **num** PAN sequence number (5F34) 


**Return**: true if successful, false if not found or invalid format 

get PAN sequence number


### function getPANSequenceNumber

```cpp
bool getPANSequenceNumber(
    int & num
) const
```


**Parameters**: 

  * **num** PAN sequence number (5F34) 


**Return**: true if successful, false if not found or invalid format 

get PAN sequence number


### function setTransactionCurrencyExp

```cpp
bool setTransactionCurrencyExp(
    unsigned char exp
)
```


**Parameters**: 

  * **exp** currency exponent (5F36) 


**Return**: true 

set transaction currency exponent


### function getTransactionCurrencyExp

```cpp
bool getTransactionCurrencyExp(
    unsigned char & exp
) const
```


**Parameters**: 

  * **exp** currency exponent (5F36) 


**Return**: true if successful, false if not found 

get transaction currency exponent


### function setAccountType

```cpp
bool setAccountType(
    unsigned char type
)
```


**Parameters**: 

  * **type** account type (5F57) 


**Return**: true 

set account type


### function getAccountType

```cpp
bool getAccountType(
    unsigned char & type
) const
```


**Parameters**: 

  * **type** account type (5F57) 


**Return**: true if successful, false if not found 

get account type


### function setAmount

```cpp
bool setAmount(
    const BCD< 6 > & amount
)
```


**Parameters**: 

  * **amount** transaction amount (9F02) 


**Return**: true 

set transaction amount


### function setAmount

```cpp
bool setAmount(
    int64_t amount
)
```


**Parameters**: 

  * **amount** transaction amount (9F02) 


**Return**: true if successful, false in case of overflow 

set transaction amount


### function getAmount

```cpp
bool getAmount(
    BCD< 6 > & amount
) const
```


**Parameters**: 

  * **amount** transaction amount (9F02) 


**Return**: true if successful, false if not found or invalid format 

get transaction amount


### function getAmount

```cpp
bool getAmount(
    int64_t & amount
) const
```


**Parameters**: 

  * **amount** transaction amount (9F02) 


**Return**: true if successful, false if not found or invalid format 

get transaction amount


### function setCashbackAmount

```cpp
bool setCashbackAmount(
    const BCD< 6 > & amount
)
```


**Parameters**: 

  * **amount** cashback amount (9F03) 


**Return**: true 

set cashback amount


### function setCashbackAmount

```cpp
bool setCashbackAmount(
    int64_t amount
)
```


**Parameters**: 

  * **amount** cashback amount (9F03) 


**Return**: true if successful, false in case of overflow 

set cashback amount


### function getCashbackAmount

```cpp
bool getCashbackAmount(
    BCD< 6 > & amount
) const
```


**Parameters**: 

  * **amount** cashback amount (9F03) 


**Return**: true if successful, false if not found or invalid format 

get cashback amount


### function getCashbackAmount

```cpp
bool getCashbackAmount(
    int64_t & amount
) const
```


**Parameters**: 

  * **amount** cashback amount (9F03) 


**Return**: true if successful, false if not found or invalid format 

get cashback amount


### function getTerminalAID

```cpp
bool getTerminalAID(
    bytevector & aid
) const
```


**Parameters**: 

  * **aid** terminal AID (9F06) 


**Return**: true if successful, false if not found 

get terminal AID


### function getKernelAppVersionNumber

```cpp
bool getKernelAppVersionNumber(
    Array< 2 > & version
) const
```


**Parameters**: 

  * **version** ICC application version number (9F08) 


**Return**: true if successful, false if not found or invalid format 

get kernel application version number


### function getChipAppVersionNumber

```cpp
bool getChipAppVersionNumber(
    Array< 2 > & version
) const
```


**Parameters**: 

  * **version** chip version number (9F09) 


**Return**: true if successful, false if not found or invalid format 

get chip application version number


### function getASRPD

```cpp
bool getASRPD(
    bytevector & asrpd
) const
```


**Parameters**: 

  * **asrpd** ASRPD (9F0A) 


**Return**: true if successful, false if not found 

get ASRPD


### function getCardholderNameExt

```cpp
bool getCardholderNameExt(
    std::string & name
) const
```


**Parameters**: 

  * **name** extended card holder name (9F0B) 


**Return**: true if successful, false if not found 

get extended card holder name


### function getIACDefault

```cpp
bool getIACDefault(
    Array< 5 > & iac
) const
```


**Parameters**: 

  * **iac** issuer action code default (9F0D) 


**Return**: true if successful, false if not found or invalid format 

get issuer action code default


### function getIACDenial

```cpp
bool getIACDenial(
    Array< 5 > & iac
) const
```


**Parameters**: 

  * **iac** issuer action code denial (9F0E) 


**Return**: true if successful, false if not found or invalid format 

get issuer action code denial


### function getIACOnline

```cpp
bool getIACOnline(
    Array< 5 > & iac
) const
```


**Parameters**: 

  * **iac** issuer action code online (9F0F) 


**Return**: true if successful, false if not found or invalid format 

get issuer action code online


### function getIssuerAppData

```cpp
bool getIssuerAppData(
    bytevector & idata
) const
```


**Parameters**: 

  * **idata** issuer application data (9F10) 


**Return**: true if successful, false if not found 

get issuer application data


### function getIssuerCodeTableID

```cpp
bool getIssuerCodeTableID(
    unsigned char & id
) const
```


**Parameters**: 

  * **id** issuer code table ID (9F11) 


**Return**: true if successful, false if not found 

get issuer code table ID


### function getPreferredName

```cpp
bool getPreferredName(
    std::string & label
) const
```


**Parameters**: 

  * **label** application preferred name (9F12) 


**Return**: true if successful, false if not found 

get application preferred name


### function getMerchantID

```cpp
bool getMerchantID(
    std::string & mid
) const
```


**Parameters**: 

  * **mid** merchant identifier (9F16) 


**Return**: true if successful, false if not found 

get merchant identifier


### function getTerminalCountryCode

```cpp
bool getTerminalCountryCode(
    unsigned short & country
) const
```


**Parameters**: 

  * **country** terminal country code (9F1A) 


**Return**: true if successful, false if not found 

get terminal country code


### function setFloorLimit

```cpp
bool setFloorLimit(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** floor limit (9F1B/DFAB40) 


**Return**: true 

set floor limit


### function setFloorLimit

```cpp
bool setFloorLimit(
    int64_t limit
)
```


**Parameters**: 

  * **limit** floor limit (9F1B/DFAB40) 


**Return**: true if successful, false in case of overflow 

set floor limit


### function getFloorLimit

```cpp
bool getFloorLimit(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** floor limit (9F1B/DFAB40) 


**Return**: true if successful, false if not found or invalid format 

get floor limit


### function getFloorLimit

```cpp
bool getFloorLimit(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** floor limit (9F1B/DFAB40) 


**Return**: true if successful, false if not found or invalid format 

get floor limit


### function getIFDSerial

```cpp
bool getIFDSerial(
    Array< 8 > & serial
) const
```


**Parameters**: 

  * **serial** serial number (9F1E) 


**Return**: true if successful, false if not found or invalid format 

get IFD serial number


### function setTransactionTime

```cpp
bool setTransactionTime(
    const Array< 3 > & time
)
```


**Parameters**: 

  * **time** binary time in the format HHMMSS (9F21) 


**Return**: true 

set transaction time


### function setTransactionTime

```cpp
bool setTransactionTime(
    const std::string & time
)
```


**Parameters**: 

  * **time** time string in the format HHMMSS (9F21) 


**Return**: true, false in case of conversion error, e.g. wrong length 

set transaction time


### function getTransactionTime

```cpp
bool getTransactionTime(
    Array< 3 > & time
) const
```


**Parameters**: 

  * **time** binary time in the format HHMMSS (9F21) 


**Return**: true if successful, false if not found or invalid format 

get transaction time


### function getTransactionTime

```cpp
bool getTransactionTime(
    std::string & time
) const
```


**Parameters**: 

  * **time** binary time in the format HHMMSS (9F21) 


**Return**: true if successful, false if not found or invalid format 

get transaction time


### function setCryptogram

```cpp
bool setCryptogram(
    const Array< 8 > & crypt
)
```


**Parameters**: 

  * **crypt** application cryptogram (9F26) 


**Return**: true 

set application cryptogram


### function getCryptogram

```cpp
bool getCryptogram(
    Array< 8 > & crypt
) const
```


**Parameters**: 

  * **crypt** application cryptogram (9F26) 


**Return**: true if successful, false if not found or invalid format 

get application cryptogram


### function getCryptogramInfo

```cpp
bool getCryptogramInfo(
    unsigned char & info
) const
```


**Parameters**: 

  * **info** cryptogram information (9F27) 


**Return**: true if successful, false if not found 

get cryptogram information


### function getTerminalCapabilities

```cpp
bool getTerminalCapabilities(
    Array< 3 > & caps
) const
```


**Parameters**: 

  * **caps** terminal capabilities (9F33) 


**Return**: true if successful, false in case of invalid format 

get terminal capabilities


### function getCVMResults

```cpp
bool getCVMResults(
    Array< 3 > & cvmr
) const
```


**Parameters**: 

  * **cvmr** CVM results (9F34) 


**Return**: true if successful, false if not found or invalid format 

get CVM results


### function getTerminalType

```cpp
bool getTerminalType(
    unsigned char & type
) const
```


**Parameters**: 

  * **type** terminal type (9F35) 


**Return**: true if successful, false if not found 

get terminal type


### function getATC

```cpp
bool getATC(
    Array< 2 > & atc
) const
```


**Parameters**: 

  * **atc** application transaction counter (9F36) 


**Return**: true if successful, false if not found or invalid format 

get application transaction counter


### function setUnpredictableNumber

```cpp
bool setUnpredictableNumber(
    unsigned num
)
```


**Parameters**: 

  * **num** unpredictable number (9F37) 


**Return**: true 

set unpredictable number


### function getUnpredictableNumber

```cpp
bool getUnpredictableNumber(
    unsigned & num
) const
```


**Parameters**: 

  * **num** unpredictable number (9F37) 


**Return**: true if successful, false if not found 

get unpredictable number


### function getPOSEntryMode

```cpp
bool getPOSEntryMode(
    unsigned char & mode
) const
```


**Parameters**: 

  * **mode** POS entry mode (9F39) 


**Return**: true if successful, false if not found 

get POS entry mode


### function getAdditionalCapabilities

```cpp
bool getAdditionalCapabilities(
    Array< 5 > & caps
) const
```


**Parameters**: 

  * **caps** terminal capabilities (9F40) 


**Return**: true if successful, false in case of invalid format 

get additional terminal capabilities


### function setTransactionCounter

```cpp
bool setTransactionCounter(
    const BCD< 4 > & counter
)
```


**Parameters**: 

  * **counter** transaction sequence counter (9F41) 


**Return**: true 

set transaction sequence counter


### function setTransactionCounter

```cpp
bool setTransactionCounter(
    int counter
)
```


**Parameters**: 

  * **counter** transaction sequence counter (9F41) 


**Return**: true if successful, false in case of overflow 

set transaction sequence counter


### function getTransactionCounter

```cpp
bool getTransactionCounter(
    BCD< 4 > & counter
) const
```


**Parameters**: 

  * **counter** transaction sequence counter (9F41) 


**Return**: true if successful, false if not found or invalid format 

get transaction sequence counter


### function getTransactionCounter

```cpp
bool getTransactionCounter(
    int & counter
) const
```


**Parameters**: 

  * **counter** transaction sequence counter (9F41) 


**Return**: true if successful, false if not found or invalid format 

get transaction sequence counter


### function setApplicationCurrency

```cpp
bool setApplicationCurrency(
    Currency currency
)
```


**Parameters**: 

  * **currency** application currency (9F42) 


**Return**: true 

set application currency


### function getApplicationCurrency

```cpp
bool getApplicationCurrency(
    Currency & currency
) const
```


**Parameters**: 

  * **currency** application currency (9F42) 


**Return**: true if successful, false if not found 

get application currency


### function getDataAuthCode

```cpp
bool getDataAuthCode(
    Array< 2 > & code
) const
```


**Parameters**: 

  * **code** data authentication code (9F45) 


**Return**: true if successful, false if not found or invalid format 

get data authentication code


### function getICCDynamicNumber

```cpp
bool getICCDynamicNumber(
    bytevector & dn
) const
```


**Parameters**: 

  * **dn** ICC dynamic number (9F4C) 


**Return**: true if successful, false if not found 

get ICC dynamic number


### function getTransactionCategory

```cpp
bool getTransactionCategory(
    unsigned char & cat
) const
```


**Parameters**: 

  * **cat** transaction category code (9F53) 


**Return**: true if successful, false if not found 

get transaction category code


### function getAvailableOfflineAmount

```cpp
bool getAvailableOfflineAmount(
    BCD< 6 > & amount
) const
```


**Parameters**: 

  * **amount** available amount (9F5D) 


**Return**: true if successful, false if not found or invalid format 

get available offline spending amout


### function getAvailableOfflineAmount

```cpp
bool getAvailableOfflineAmount(
    int64_t & amount
) const
```


**Parameters**: 

  * **amount** available amount (9F5D) 


**Return**: true if successful, false if not found or invalid format 

get available offline spending amout


### function getTransactionQualifier

```cpp
bool getTransactionQualifier(
    Array< 4 > & q
) const
```


**Parameters**: 

  * **q** transaction qualifier (9F66) 


**Return**: true if successful, false if not found or invalid format 

get transaction qualifier


### function setVisaCTQ

```cpp
bool setVisaCTQ(
    const Array< 2 > & ctq
)
```


**Parameters**: 

  * **ctq** Visa CTQ (9F6C) 


**Return**: true 

set Visa CTQ


### function getVisaCTQ

```cpp
bool getVisaCTQ(
    Array< 2 > & ctq
) const
```


**Parameters**: 

  * **ctq** Visa CTQ (9F6C) 


**Return**: true if successful, false if not found or invalid format 

get Visa CTQ


### function setMasterAID

```cpp
bool setMasterAID(
    const bytevector & aid
)
```


**Parameters**: 

  * **aid** AID (DF04) 


**Return**: true 

set master AID


### function setMasterAID

```cpp
template <unsigned N>
inline bool setMasterAID(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **aid** AID (DF04) 


**Return**: true 

set master AID


### function getMasterAID

```cpp
bool getMasterAID(
    bytevector & aid
) const
```


**Parameters**: 

  * **aid** AID (DF04) 


**Return**: true if successful, false if not found 

get master AID


### function setBuildAppList

```cpp
bool setBuildAppList(
    unsigned char opt
)
```


**Parameters**: 

  * **opt** build list options (see [EMVBuildOptions](namespacevfisdi.md#enum-emvbuildoptions)) (DF05) 


**Return**: true 

set build list options (see [EMVBuildOptions](namespacevfisdi.md#enum-emvbuildoptions))


### function getBuildAppList

```cpp
bool getBuildAppList(
    unsigned char & opt
) const
```


**Parameters**: 

  * **opt** build list options (see [EMVBuildOptions](namespacevfisdi.md#enum-emvbuildoptions)) (DF05) 


**Return**: true if successful, false if not found 

get build list options (see [EMVBuildOptions](namespacevfisdi.md#enum-emvbuildoptions))


### function getReaderNumber

```cpp
bool getReaderNumber(
    unsigned char & num
) const
```


**Parameters**: 

  * **num** card reader number (DF06) 


**Return**: true if successful, false if not found 

get card reader number


### function getNonCriticalScriptResults

```cpp
bool getNonCriticalScriptResults(
    std::vector< Array< 5 > > & results
) const
```


**Parameters**: 

  * **results** noncritical script results (DF07) 


**Return**: true if successful, false if not found 

get noncritical script results


### function getCriticalScriptResults

```cpp
bool getCriticalScriptResults(
    std::vector< Array< 5 > > & results
) const
```


**Parameters**: 

  * **results** critical script results (DF08) 


**Return**: true if successful, false if not found 

get critical script results


### function setFallbackMIDs

```cpp
bool setFallbackMIDs(
    const Array< 3 > & mid
)
```


**Parameters**: 

  * **mid** fallback MIDs (DF17) 


**Return**: true 

set fallback MIDs


### function getFallbackMIDs

```cpp
bool getFallbackMIDs(
    Array< 3 > & mid
) const
```


**Parameters**: 

  * **mid** fallback MIDs (DF17) 


**Return**: true if successful, false if not found or invalid format 

get fallback MIDs


### function setEMVFallback

```cpp
bool setEMVFallback(
    unsigned char fb
)
```


**Parameters**: 

  * **fb** How to handle Fallback after Final select for the selected application (DF18) 


**Return**: true 

set How to handle Fallback after Final select for the selected application


### function getEMVFallback

```cpp
bool getEMVFallback(
    unsigned char & fb
) const
```


**Parameters**: 

  * **fb** How to handle Fallback after Final select for the selected application (DF18) 


**Return**: true if successful, false if not found 

get How to handle Fallback after Final select for the selected application


### function getObfuscatedPAN

```cpp
bool getObfuscatedPAN(
    bytevector & pan
) const
```


**Parameters**: 

  * **pan** obfuscated PAN (DF1A) 


**Return**: true if successful, false if not found 

get obfuscated PAN


### function getObfuscatedTrack2

```cpp
bool getObfuscatedTrack2(
    bytevector & track
) const
```


**Parameters**: 

  * **track** track data (DF1B) 


**Return**: true if successful, false if not found 

get obfuscated track 2 data


### function setTACDenial

```cpp
bool setTACDenial(
    const Array< 5 > & tac
)
```


**Parameters**: 

  * **tac** contact TAC denial (DF21/DFAB44) 


**Return**: true 

set TAC denial


### function getTACDenial

```cpp
bool getTACDenial(
    Array< 5 > & tac
) const
```


**Parameters**: 

  * **tac** contact TAC denial (DF21/DFAB44) 


**Return**: true if successful, false if not found or invalid format 

get TAC denial


### function setTACOnline

```cpp
bool setTACOnline(
    const Array< 5 > & tac
)
```


**Parameters**: 

  * **tac** contact TAC online (DF22/DFAB45) 


**Return**: true 

set TAC online


### function getTACOnline

```cpp
bool getTACOnline(
    Array< 5 > & tac
) const
```


**Parameters**: 

  * **tac** contact TAC online (DF22/DFAB45) 


**Return**: true if successful, false if not found or invalid format 

get TAC online


### function setTACDefault

```cpp
bool setTACDefault(
    const Array< 5 > & tac
)
```


**Parameters**: 

  * **tac** contact TAC default (DF23/DFAB43) 


**Return**: true 

set TAC default


### function getTACDefault

```cpp
bool getTACDefault(
    Array< 5 > & tac
) const
```


**Parameters**: 

  * **tac** contact TAC default (DF23/DFAB43) 


**Return**: true if successful, false if not found or invalid format 

get TAC default


### function setThreshold

```cpp
bool setThreshold(
    unsigned th
)
```


**Parameters**: 

  * **th** threshold value (DF24) 


**Return**: true 

set threshold value for biased random online selection during risk management


### function getThreshold

```cpp
bool getThreshold(
    unsigned & th
) const
```


**Parameters**: 

  * **th** threshold value (DF24) 


**Return**: true if successful, false if not found 

get threshold value for biased random online selection during risk management


### function setSpecialTransactions

```cpp
bool setSpecialTransactions(
    const EMVSpecialTransactions & tx
)
```


**Parameters**: 

  * **tx** list of special allowed transactions (DF1C/DFAB05) 


**Return**: true 

set List of special allowed transactions (manual reversal, refund, reservation, tip, Referral)


### function getSpecialTransactions

```cpp
bool getSpecialTransactions(
    EMVSpecialTransactions & tx
) const
```


**Parameters**: 

  * **tx** list of special allowed transactions (DF1C/DFAB05) 


**Return**: true if successful, false if not found or invalid format 

get List of special allowed transactions (manual reversal, refund, reservation, tip, Referral)


### function setLanguage

```cpp
bool setLanguage(
    unsigned char info
)
```


**Parameters**: 

  * **info** language (DF30) 


**Return**: true 

set language


### function getLanguage

```cpp
bool getLanguage(
    unsigned char & info
) const
```


**Parameters**: 

  * **info** language (DF30) 


**Return**: true if successful, false if not found 

get language


### function setTextID

```cpp
bool setTextID(
    unsigned char id
)
```


**Parameters**: 

  * **id** text ID (DF31) 


**Return**: true 

set text ID


### function getTextID

```cpp
bool getTextID(
    unsigned char & id
) const
```


**Parameters**: 

  * **id** text ID (DF31) 


**Return**: true if successful, false if not found 

get text ID


### function getBalanceBefore

```cpp
bool getBalanceBefore(
    BCD< 6 > & amount
) const
```


**Parameters**: 

  * **amount** balance (DF32) 


**Return**: true if successful, false if not found or invalid format 

get balance before GenAC


### function getBalanceBefore

```cpp
bool getBalanceBefore(
    int64_t & amount
) const
```


**Parameters**: 

  * **amount** balance (DF32) 


**Return**: true if successful, false if not found or invalid format 

get balance before GenAC


### function getDefaultAppName

```cpp
bool getDefaultAppName(
    std::string & appname
) const
```


### function getApplicationLabel

```cpp
bool getApplicationLabel(
    std::string & appname
) const
```


**Parameters**: 

  * **appname** application label (DF33) 


**Return**: true if successful, false if not found 

get application label


### function setAmountConfirmation

```cpp
bool setAmountConfirmation(
    unsigned char when
)
```


**Parameters**: 

  * **when** (DF34) 


**Return**: true 

set amount confirmation


### function getAmountConfirmation

```cpp
bool getAmountConfirmation(
    unsigned char & when
) const
```


**Parameters**: 

  * **when** (DF34) 


**Return**: true if successful, false if not found 

get amount confirmation


### function setTransactionOptions

```cpp
bool setTransactionOptions(
    const Array< 5 > & opt
)
```


**Parameters**: 

  * **opt** transaction options (DF36) 


**Return**: true 

set transaction options


### function setTransactionOptions

```cpp
inline bool setTransactionOptions(
    const EMVTransactionOptions & opt
)
```


**Parameters**: 

  * **opt** transaction options (DF36) 


**Return**: true 

set transaction options


### function getTransactionOptions

```cpp
bool getTransactionOptions(
    Array< 5 > & opt
) const
```


**Parameters**: 

  * **opt** transaction options (DF36) 


**Return**: true if successful, false if not found or invalid format 

get transaction options


### function getTransactionOptions

```cpp
inline bool getTransactionOptions(
    EMVTransactionOptions & opt
) const
```


**Parameters**: 

  * **opt** transaction options (DF36) 


**Return**: true if successful, false if not found or invalid format 

get transaction options


### function setTransactionSteps

```cpp
bool setTransactionSteps(
    const Array< 3 > & step
)
```


**Parameters**: 

  * **step** transaction steps (DF37) 


**Return**: true 

set transaction steps


### function setTransactionSteps

```cpp
inline bool setTransactionSteps(
    const EMVTransactionSteps & step
)
```


**Parameters**: 

  * **step** transaction steps (DF37) 


**Return**: true 

set transaction steps


### function getTransactionSteps

```cpp
bool getTransactionSteps(
    Array< 3 > & step
) const
```


**Parameters**: 

  * **step** transaction steps (DF37) 


**Return**: true if successful, false if not found or invalid format 

get transaction steps


### function getTransactionSteps

```cpp
inline bool getTransactionSteps(
    EMVTransactionSteps & step
) const
```


**Parameters**: 

  * **step** transaction steps (DF37) 


**Return**: true if successful, false if not found or invalid format 

get transaction steps


### function getBalanceAfter

```cpp
bool getBalanceAfter(
    BCD< 6 > & amount
) const
```


**Parameters**: 

  * **amount** balance (DF38) 


**Return**: true if successful, false if not found or invalid format 

get balance after GenAC


### function getBalanceAfter

```cpp
bool getBalanceAfter(
    int64_t & amount
) const
```


**Parameters**: 

  * **amount** balance (DF38) 


**Return**: true if successful, false if not found or invalid format 

get balance after GenAC


### function setDCCInfo

```cpp
bool setDCCInfo(
    const Array< 3 > & info
)
```


**Parameters**: 

  * **info** DCC info (DF39) 


**Return**: true 

set DCC info


### function getDCCInfo

```cpp
bool getDCCInfo(
    Array< 3 > & info
) const
```


**Parameters**: 

  * **info** DCC info (DF39) 


**Return**: true if successful, false if not found or invalid format 

get DCC info


### function setFallbackMSROptions

```cpp
bool setFallbackMSROptions(
    unsigned char opt
)
```


**Parameters**: 

  * **opt** options (DF3A) 


**Return**: true 

set options for fallback decision


### function getFallbackMSROptions

```cpp
bool getFallbackMSROptions(
    unsigned char & opt
) const
```


**Parameters**: 

  * **opt** options (DF3A) 


**Return**: true if successful, false if not found 

get options for fallback decision


### function setForceOnline

```cpp
bool setForceOnline(
    unsigned char force
)
```


**Parameters**: 

  * **force** flag (DF40) 


**Return**: true 

set force online flag


### function getForceOnline

```cpp
bool getForceOnline(
    unsigned char & force
) const
```


**Parameters**: 

  * **force** flag (DF40) 


**Return**: true if successful, false if not found 

get force online flag


### function setPINBypass

```cpp
bool setPINBypass(
    bool bypass
)
```


**Parameters**: 

  * **bypass** PIN bypass allowed if true (DF41) 


**Return**: true 

set PIN bypass allowed


### function getPINBypass

```cpp
bool getPINBypass(
    bool & bypass
) const
```


**Parameters**: 

  * **bypass** PIN bypass allowed if true (DF41) 


**Return**: true if successful, false if not found 

get PIN bypass


### function getEMVStatus

```cpp
bool getEMVStatus(
    unsigned & status
) const
```


**Parameters**: 

  * **status** EMV status, see [EMVStatusInformation](namespacevfisdi.md#enum-emvstatusinformation) (DF42) 


**Return**: true if successful, false if not found 

get EMV status


### function setForceAccept

```cpp
bool setForceAccept(
    unsigned char force
)
```


**Parameters**: 

  * **force** flag (DF43) 


**Return**: true 

set force accept flag


### function getForceAccept

```cpp
bool getForceAccept(
    unsigned char & force
) const
```


**Parameters**: 

  * **force** flag (DF43) 


**Return**: true if successful, false if not found 

get force accept flag


### function setNoDirectorySelect

```cpp
bool setNoDirectorySelect(
    unsigned char nodir
)
```


**Parameters**: 

  * **nodir** (DF45) 


**Return**: true 

set no directory selection flag


### function getNoDirectorySelect

```cpp
bool getNoDirectorySelect(
    unsigned char & nodir
) const
```


**Parameters**: 

  * **nodir** (DF45) 


**Return**: true if successful, false if not found 

get no directory selection flag


### function setPreselectedLanguage

```cpp
bool setPreselectedLanguage(
    unsigned char lang
)
```


**Parameters**: 

  * **lang** preselected language (DF47) 


**Return**: true 

set preselected language


### function getPreselectedLanguage

```cpp
bool getPreselectedLanguage(
    unsigned char & lang
) const
```


**Parameters**: 

  * **lang** preselected language (DF47) 


**Return**: true if successful, false if not found 

get preselected language


### function setOnlineSwitch

```cpp
bool setOnlineSwitch(
    unsigned char online
)
```


**Parameters**: 

  * **online** flag (DF48) 


**Return**: true 

set online switch flag


### function getOnlineSwitch

```cpp
bool getOnlineSwitch(
    unsigned char & online
) const
```


**Parameters**: 

  * **online** flag (DF48) 


**Return**: true if successful, false if not found 

get online switch flag


### function setNoCardholderConfirm

```cpp
bool setNoCardholderConfirm(
    unsigned char conf
)
```


**Parameters**: 

  * **conf** (DF4D) 


**Return**: true 

set no cardholder confirmation flag


### function getNoCardholderConfirm

```cpp
bool getNoCardholderConfirm(
    unsigned char & conf
) const
```


**Parameters**: 

  * **conf** (DF4D) 


**Return**: true if successful, false if not found 

get no cardholder confirmation flag


### function setEMVPassthrough

```cpp
bool setEMVPassthrough(
    unsigned char ep
)
```


**Parameters**: 

  * **ep** EMV passthrough (DF4E) 


**Return**: true 

set EMV passthrough


### function getEMVPassthrough

```cpp
bool getEMVPassthrough(
    unsigned char & ep
) const
```


**Parameters**: 

  * **ep** EMV passthrough (DF4E) 


**Return**: true if successful, false if not found 

get EMV passthrough


### function getPDOLInfo

```cpp
bool getPDOLInfo(
    unsigned char & info
) const
```


**Parameters**: 

  * **info** PDOL tag information (DF4E) 


**Return**: true if successful, false if not found 

get PDOL tag information


### function getCardType

```cpp
bool getCardType(
    unsigned char & type
) const
```


**Parameters**: 

  * **type** card type (DF4F) 


**Return**: true if successful, false if not found 

get card type


### function setOnlineResult

```cpp
bool setOnlineResult(
    bool result
)
```


**Parameters**: 

  * **result** online result (DF50) 


**Return**: true 

set online result


### function getOnlineResult

```cpp
bool getOnlineResult(
    bool & result
) const
```


**Parameters**: 

  * **result** online result (DF50) 


**Return**: true if successful, false if not found 

get online result


### function setVoiceReferral

```cpp
bool setVoiceReferral(
    bool result
)
```


**Parameters**: 

  * **result** referral result (DF51) 


**Return**: true 

set merchant response in case of voice referral


### function getVoiceReferral

```cpp
bool getVoiceReferral(
    bool & result
) const
```


**Parameters**: 

  * **result** referral result (DF51) 


**Return**: true if successful, false if not found 

get merchant response in case of voice referral


### function setAuthData

```cpp
bool setAuthData(
    const bytevector & data
)
```


**Parameters**: 

  * **data** issuer authentication data (DF52) 


**Return**: true 

set issuer authentication data


### function setAuthData

```cpp
template <unsigned N>
inline bool setAuthData(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **data** issuer authentication data (DF52) 


**Return**: true 

set issuer authentication data


### function getAuthData

```cpp
bool getAuthData(
    bytevector & data
) const
```


**Parameters**: 

  * **data** issuer authentication data (DF52) 


**Return**: true if successful, false if not found 

get issuer authentication data


### function setCriticalScript

```cpp
bool setCriticalScript(
    const bytevector & script
)
```


**Parameters**: 

  * **script** critical script (DF53) 


**Return**: true 

set critical scripts to be performed prior to 2nd Generate AC


### function setCriticalScript

```cpp
template <unsigned N>
inline bool setCriticalScript(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **script** critical script (DF53) 


**Return**: true 

set critical scripts to be performed prior to 2nd Generate AC


### function getCriticalScript

```cpp
bool getCriticalScript(
    bytevector & script
) const
```


**Parameters**: 

  * **script** critical script (DF53) 


**Return**: true if successful, false if not found 

get critical scripts to be performed prior to 2nd Generate AC


### function setNonCriticalScript

```cpp
bool setNonCriticalScript(
    const bytevector & script
)
```


**Parameters**: 

  * **script** noncritical script (DF54) 


**Return**: true 

set noncritical scripts to be performed after 2nd Generate AC


### function setNonCriticalScript

```cpp
template <unsigned N>
inline bool setNonCriticalScript(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **script** noncritical script (DF54) 


**Return**: true 

set noncritical scripts to be performed after 2nd Generate AC


### function getNonCriticalScript

```cpp
bool getNonCriticalScript(
    bytevector & script
) const
```


**Parameters**: 

  * **script** noncritical script (DF54) 


**Return**: true if successful, false if not found 

get noncritical scripts to be performed after 2nd Generate AC


### function setAuthResponseReferral

```cpp
bool setAuthResponseReferral(
    const Array< 2 > & ac
)
```


**Parameters**: 

  * **ac** host AC for an issuer referral (DF55) 


**Return**: true 

set host AC for an issuer referral


### function getAuthResponseReferral

```cpp
bool getAuthResponseReferral(
    Array< 2 > & ac
) const
```


**Parameters**: 

  * **ac** host AC for an issuer referral (DF55) 


**Return**: true if successful, false if not found or invalid format 

get host AC for an issuer referral


### function setAuthResponseSwitch

```cpp
bool setAuthResponseSwitch(
    const Array< 2 > & resp
)
```


**Parameters**: 

  * **resp** response code (DF55) 


**Return**: true 

set response code for switch interface


### function getAuthResponseSwitch

```cpp
bool getAuthResponseSwitch(
    Array< 2 > & resp
) const
```


**Parameters**: 

  * **resp** response code (DF55) 


**Return**: true if successful, false if not found or invalid format 

get response code for switch interface


### function setAuthResponseWrongPIN

```cpp
bool setAuthResponseWrongPIN(
    const Array< 2 > & ac
)
```


**Parameters**: 

  * **ac** host AC for a wrong online PIN (DF56) 


**Return**: true 

set host AC for a wrong online PIN


### function getAuthResponseWrongPIN

```cpp
bool getAuthResponseWrongPIN(
    Array< 2 > & ac
) const
```


**Parameters**: 

  * **ac** host AC for a wrong online PIN (DF56) 


**Return**: true if successful, false if not found or invalid format 

get host AC for a wrong online PIN


### function setAuthResponseOnlinePIN

```cpp
bool setAuthResponseOnlinePIN(
    const Array< 2 > & resp
)
```


**Parameters**: 

  * **resp** response code (DF56) 


**Return**: true 

set response code for online PIN


### function getAuthResponseOnlinePIN

```cpp
bool getAuthResponseOnlinePIN(
    Array< 2 > & resp
) const
```


**Parameters**: 

  * **resp** response code (DF56) 


**Return**: true if successful, false if not found or invalid format 

get response code for online PIN


### function setAdditionalResponseOK

```cpp
bool setAdditionalResponseOK(
    const Array< 2 > & ac
)
```


**Parameters**: 

  * **ac** host AC (DF57) 


**Return**: true 

set additional host AC which is considered positive


### function getAdditionalResponseOK

```cpp
bool getAdditionalResponseOK(
    Array< 2 > & ac
) const
```


**Parameters**: 

  * **ac** host AC (DF57) 


**Return**: true if successful, false if not found or invalid format 

get additional host AC which is considered positive


### function setWriteDSData

```cpp
bool setWriteDSData(
    const bytevector & dsdata
)
```


**Parameters**: 

  * **dsdata** write DS data (DF58) 


**Return**: true 

set write DS data


### function getWriteDSData

```cpp
bool getWriteDSData(
    bytevector & dsdata
) const
```


**Parameters**: 

  * **dsdata** write DS data (DF58) 


**Return**: true if successful, false if not found 

get write DS data


### function setOfflinePINErrors

```cpp
bool setOfflinePINErrors(
    unsigned char errors
)
```


**Parameters**: 

  * **errors** offline PIN errors (DF59) 


**Return**: true 

set offline PIN errors


### function getOfflinePINErrors

```cpp
bool getOfflinePINErrors(
    unsigned char & errors
) const
```


**Parameters**: 

  * **errors** offline PIN errors (DF59) 


**Return**: true if successful, false if not found 

get offline PIN errors


### function setWriteDataStoragedData

```cpp
bool setWriteDataStoragedData(
    const bytevector & data
)
```


**Parameters**: 

  * **data** data storage write data (DF5A) 


**Return**: true 

set data storage write data


### function getWriteDataStoragedData

```cpp
bool getWriteDataStoragedData(
    bytevector & data
) const
```


**Parameters**: 

  * **data** data storage write data (DF5A) 


**Return**: true if successful, false if not found 

get data storage write data


### function setDCCForbidden

```cpp
bool setDCCForbidden(
    unsigned char dcc
)
```


**Parameters**: 

  * **dcc** DCC forbidden (DF5B) 


**Return**: true 

set DCC forbidden


### function getDCCForbidden

```cpp
bool getDCCForbidden(
    unsigned char & dcc
) const
```


**Parameters**: 

  * **dcc** DCC forbidden (DF5B) 


**Return**: true if successful, false if not found 

get DCC forbidden


### function setDomesticInfo

```cpp
bool setDomesticInfo(
    const Array< 3 > & info
)
```


**Parameters**: 

  * **info** domestic information (DF5C) 


**Return**: true 

set domestic information


### function getDomesticInfo

```cpp
bool getDomesticInfo(
    Array< 3 > & info
) const
```


**Parameters**: 

  * **info** domestic information (DF5C) 


**Return**: true if successful, false if not found or invalid format 

get domestic information


### function setDomesticOptions

```cpp
bool setDomesticOptions(
    const Array< 3 > & opt
)
```


**Parameters**: 

  * **opt** domestic options (DF5D) 


**Return**: true 

set domestic options


### function setDomesticOptions

```cpp
inline bool setDomesticOptions(
    const EMVDomesticOptions & opt
)
```


**Parameters**: 

  * **opt** domestic options (DF5D) 


**Return**: true 

set domestic options


### function getDomesticOptions

```cpp
bool getDomesticOptions(
    Array< 3 > & opt
) const
```


**Parameters**: 

  * **opt** domestic options (DF5D) 


**Return**: true if successful, false if not found or invalid format 

get domestic options


### function getDomesticOptions

```cpp
inline bool getDomesticOptions(
    EMVDomesticOptions & opt
) const
```


**Parameters**: 

  * **opt** domestic options (DF5D) 


**Return**: true if successful, false if not found or invalid format 

get domestic options


### function setVelocityOriginalIndex

```cpp
bool setVelocityOriginalIndex(
    unsigned char idx
)
```


**Parameters**: 

  * **idx** original index (DF60) 


**Return**: true 

set original index


### function getVelocityOriginalIndex

```cpp
bool getVelocityOriginalIndex(
    unsigned char & idx
) const
```


**Parameters**: 

  * **idx** original index (DF60) 


**Return**: true if successful, false if not found 

get original index


### function getErrorData

```cpp
bool getErrorData(
    Array< 15 > & error
) const
```


**Parameters**: 

  * **error** additional error data (DF62) 


**Return**: true if successful, false if not found or invalid format 

get additional error data


### function getDisplayTextIndex

```cpp
bool getDisplayTextIndex(
    unsigned char & id
) const
```


**Parameters**: 

  * **id** display text index (DF63) 


**Return**: true if successful, false if not found 

get display text index


### function setVelocityProcessingResultBitmap

```cpp
bool setVelocityProcessingResultBitmap(
    const Array< 3 > & bm
)
```


**Parameters**: 

  * **bm** velocity processing result bitmap (DF63) 


**Return**: true 

set velocity processing result bitmap


### function getVelocityProcessingResultBitmap

```cpp
bool getVelocityProcessingResultBitmap(
    Array< 3 > & bm
) const
```


**Parameters**: 

  * **bm** velocity processing result bitmap (DF63) 


**Return**: true if successful, false if not found or invalid format 

get velocity processing result bitmap


### function getKernelDebug

```cpp
bool getKernelDebug(
    bytevector & debug
) const
```


**Parameters**: 

  * **debug** kernel debug information (DF64) 


**Return**: true if successful, false if not found 

get kernel debug information


### function setExcludeAID

```cpp
bool setExcludeAID(
    const std::vector< bytevector > & aid
)
```


**Parameters**: 

  * **aid** array of AIDs (DF69) 


**Return**: true 

set list of excluded AIDs


### function getExcludeAID

```cpp
bool getExcludeAID(
    std::vector< bytevector > & aid
) const
```


**Parameters**: 

  * **aid** array of AIDs (DF69) 


**Return**: true if successful, false if not found 

get list of excluded AIDs


### function setExcludeCombos

```cpp
bool setExcludeCombos(
    const std::vector< std::pair< bytevector, Array< 3 > > > & combos
)
```


**Parameters**: 

  * **combos** array of AID - kernel Id pair (FF69) 


**Return**: true 

set list of excluded combos

Note: If AID part is empty, all combos with that kernel id are excluded and if kernel id is zero, the result is the same as for [setExcludeAID()](structvfisdi_1_1_e_m_v_txn.md#function-setexcludeaid).


### function setCardholderInfo

```cpp
bool setCardholderInfo(
    unsigned char info
)
```


**Parameters**: 

  * **info** cardholder information (DF6E) 


**Return**: true 

set cardholder information for callback


### function getCardholderInfo

```cpp
bool getCardholderInfo(
    unsigned char & info
) const
```


**Parameters**: 

  * **info** cardholder information (DF6E) 


**Return**: true if successful, false if not found 

get cardholder information for callback


### function setMerchantInfo

```cpp
bool setMerchantInfo(
    unsigned char info
)
```


**Parameters**: 

  * **info** merchant information (DF70) 


**Return**: true 

set merchant information


### function getMerchantInfo

```cpp
bool getMerchantInfo(
    unsigned char & info
) const
```


**Parameters**: 

  * **info** merchant information (DF70) 


**Return**: true if successful, false if not found 

get merchant information


### function setConfirmAmount

```cpp
bool setConfirmAmount(
    bool confirm
)
```


**Parameters**: 

  * **confirm** confirm amount (DF71) 


**Return**: true 

set confirm amount


### function getConfirmAmount

```cpp
bool getConfirmAmount(
    bool & confirm
) const
```


**Parameters**: 

  * **confirm** confirm amount (DF71) 


**Return**: true if successful, false if not found 

get confirm amount


### function setPANInBlacklist

```cpp
bool setPANInBlacklist(
    unsigned char contained
)
```


**Parameters**: 

  * **contained** PAN in blacklist (true/false) (DF72) 


**Return**: true 

set PAN in blacklist (true/false)


### function getPANInBlacklist

```cpp
bool getPANInBlacklist(
    unsigned char & contained
) const
```


**Parameters**: 

  * **contained** PAN in blacklist (true/false) (DF72) 


**Return**: true if successful, false if not found 

get PAN in blacklist (true/false)


### function setStoredAmount

```cpp
bool setStoredAmount(
    const BCD< 6 > & amount
)
```


**Parameters**: 

  * **amount** stored amount (DF73/DFD003) 


**Return**: true 

set stored amount


### function setStoredAmount

```cpp
bool setStoredAmount(
    int64_t amount
)
```


**Parameters**: 

  * **amount** stored amount (DF73/DFD003) 


**Return**: true if successful, false in case of overflow 

set stored amount


### function getStoredAmount

```cpp
bool getStoredAmount(
    BCD< 6 > & amount
) const
```


**Parameters**: 

  * **amount** stored amount (DF73/DFD003) 


**Return**: true if successful, false if not found or invalid format 

get stored amount


### function getStoredAmount

```cpp
bool getStoredAmount(
    int64_t & amount
) const
```


**Parameters**: 

  * **amount** stored amount (DF73/DFD003) 


**Return**: true if successful, false if not found or invalid format 

get stored amount


### function setSelector

```cpp
bool setSelector(
    unsigned char sel
)
```


**Parameters**: 

  * **sel** selector (DF74) 


**Return**: true 

set selector


### function getSelector

```cpp
bool getSelector(
    unsigned char & sel
) const
```


**Parameters**: 

  * **sel** selector (DF74) 


**Return**: true if successful, false if not found 

get selector


### function setReducedCanditateList

```cpp
bool setReducedCanditateList(
    const bytevector & cl
)
```


**Parameters**: 

  * **cl** reduced candidate list (DF75) 


**Return**: true 

set reduced candidate list


### function setReducedCanditateList

```cpp
template <unsigned N>
inline bool setReducedCanditateList(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **cl** reduced candidate list (DF75) 


**Return**: true 

set reduced candidate list


### function getReducedCanditateList

```cpp
bool getReducedCanditateList(
    bytevector & cl
) const
```


**Parameters**: 

  * **cl** reduced candidate list (DF75) 


**Return**: true if successful, false if not found 

get reduced candidate list


### function setModifyTransaction

```cpp
bool setModifyTransaction(
    unsigned char m
)
```


**Parameters**: 

  * **m** modify transaction (DF76) 


**Return**: true 

set modify transaction, allowed values: 0xE1 (transaction must be performed online), 0xE4 (Transaction declined), 0xEA (transaction must be aborted


### function getModifyTransaction

```cpp
bool getModifyTransaction(
    unsigned char & m
) const
```


**Parameters**: 

  * **m** modify transaction (DF76) 


**Return**: true if successful, false if not found 

get modify transaction, allowed values: 0xE1 (transaction must be performed online), 0xE4 (Transaction declined), 0xEA (transaction must be aborted


### function setSkipPostprocessing

```cpp
bool setSkipPostprocessing(
    unsigned char skip
)
```


**Parameters**: 

  * **skip** skip postprocessing (DF76) 


**Return**: true 

set skip postprocessing


### function getSkipPostprocessing

```cpp
bool getSkipPostprocessing(
    unsigned char & skip
) const
```


**Parameters**: 

  * **skip** skip postprocessing (DF76) 


**Return**: true if successful, false if not found 

get skip postprocessing


### function setPINInfo

```cpp
bool setPINInfo(
    unsigned char info
)
```


**Parameters**: 

  * **info** PIN info (DF79) 


**Return**: true 

set PIN info, depending on context this is the PIN type or result of PIN entry ([EMVPINResult](namespacevfisdi.md#enum-emvpinresult))


### function getPINInfo

```cpp
bool getPINInfo(
    unsigned char & info
) const
```


**Parameters**: 

  * **info** PIN info (DF79) 


**Return**: true if successful, false if not found 

get PIN info, depending on context this is the PIN type or result of PIN entry ([EMVPINResult](namespacevfisdi.md#enum-emvpinresult))


### function setPINPublicModulus

```cpp
bool setPINPublicModulus(
    const bytevector & modulus
)
```


**Parameters**: 

  * **modulus** PIN public key modulus (DF7A) 


**Return**: true 

set PIN public key modulus


### function setPINPublicModulus

```cpp
template <unsigned N>
inline bool setPINPublicModulus(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **modulus** PIN public key modulus (DF7A) 


**Return**: true 

set PIN public key modulus


### function getPINPublicModulus

```cpp
bool getPINPublicModulus(
    bytevector & modulus
) const
```


**Parameters**: 

  * **modulus** PIN public key modulus (DF7A) 


**Return**: true if successful, false if not found 

get PIN public key modulus


### function setPINPublicExponent

```cpp
bool setPINPublicExponent(
    unsigned modulus
)
```


**Parameters**: 

  * **modulus** PIN public key exponent (DF7B) 


**Return**: true 

set PIN public key exponent


### function getPINPublicExponent

```cpp
bool getPINPublicExponent(
    unsigned & modulus
) const
```


**Parameters**: 

  * **modulus** PIN public key exponent (DF7B) 


**Return**: true if successful, false if not found 

get PIN public key exponent


### function setDCCMode

```cpp
bool setDCCMode(
    unsigned char mode
)
```


**Parameters**: 

  * **mode** DCC mode (DF7D) 


**Return**: true 

set DCC mode


### function getDCCMode

```cpp
bool getDCCMode(
    unsigned char & mode
) const
```


**Parameters**: 

  * **mode** DCC mode (DF7D) 


**Return**: true if successful, false if not found 

get DCC mode


### function setDomesticAppResult

```cpp
bool setDomesticAppResult(
    unsigned char res
)
```


**Parameters**: 

  * **res** domestic application result (DF7E) 


**Return**: true 

set domestic application result


### function getDomesticAppResult

```cpp
bool getDomesticAppResult(
    unsigned char & res
) const
```


**Parameters**: 

  * **res** domestic application result (DF7E) 


**Return**: true if successful, false if not found 

get domestic application result


### function setKernelToUse

```cpp
bool setKernelToUse(
    const Array< 3 > & kernel
)
```


**Parameters**: 

  * **kernel** kernel to use (DF7E) 


**Return**: true 

set kernel to use


### function getKernelToUse

```cpp
bool getKernelToUse(
    Array< 3 > & kernel
) const
```


**Parameters**: 

  * **kernel** kernel to use (DF7E) 


**Return**: true if successful, false if not found or invalid format 

get kernel to use


### function setCommunicationError

```cpp
bool setCommunicationError(
    unsigned char err
)
```


**Parameters**: 

  * **err** communication error (DF7F) 


**Return**: true 

set communication error


### function getCommunicationError

```cpp
bool getCommunicationError(
    unsigned char & err
) const
```


**Parameters**: 

  * **err** communication error (DF7F) 


**Return**: true if successful, false if not found 

get communication error


### function getDestination

```cpp
bool getDestination(
    int & dest
) const
```


**Return**: true if successful, false if not found 

get destination (or source in case of result): Countertop: 01 / EPP:02 (DFA150) 


### function setDataExchangeRequest

```cpp
bool setDataExchangeRequest(
    unsigned char req
)
```


**Parameters**: 

  * **req** data exchange request (DF8010) 


**Return**: true 

set data exchange request


### function getDataExchangeRequest

```cpp
bool getDataExchangeRequest(
    unsigned char & req
) const
```


**Parameters**: 

  * **req** data exchange request (DF8010) 


**Return**: true if successful, false if not found 

get data exchange request


### function setDataExchangeState

```cpp
bool setDataExchangeState(
    unsigned char state
)
```


**Parameters**: 

  * **state** data exchange state (DF8011) 


**Return**: true 

set data exchange state


### function getDataExchangeState

```cpp
bool getDataExchangeState(
    unsigned char & state
) const
```


**Parameters**: 

  * **state** data exchange state (DF8011) 


**Return**: true if successful, false if not found 

get data exchange state


### function setDataExchangeMode

```cpp
bool setDataExchangeMode(
    unsigned char state
)
```


**Parameters**: 

  * **state** data exchange mode (DF8012) 


**Return**: true 

set data exchange mode


### function getDataExchangeMode

```cpp
bool getDataExchangeMode(
    unsigned char & state
) const
```


**Parameters**: 

  * **state** data exchange mode (DF8012) 


**Return**: true if successful, false if not found 

get data exchange mode


### function setDataExchangeDataNeeded

```cpp
bool setDataExchangeDataNeeded(
    const bytevector & dn
)
```


**Parameters**: 

  * **dn** data needed (DF8106) 


**Return**: true 

set data needed for data exchange


### function setDataExchangeDataNeeded

```cpp
template <unsigned N>
inline bool setDataExchangeDataNeeded(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **dn** data needed (DF8106) 


**Return**: true 

set data needed for data exchange


### function getDataExchangeDataNeeded

```cpp
bool getDataExchangeDataNeeded(
    bytevector & dn
) const
```


**Parameters**: 

  * **dn** data needed (DF8106) 


**Return**: true if successful, false if not found 

get data needed for data exchange


### function setModifiedCandidates

```cpp
bool setModifiedCandidates(
    const bytevector & cand
)
```


**Parameters**: 

  * **cand** candidates (DF8F01/DFD001) 


**Return**: true 

set candidates


### function setModifiedCandidates

```cpp
template <unsigned N>
inline bool setModifiedCandidates(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **cand** candidates (DF8F01/DFD001) 


**Return**: true 

set candidates


### function getModifiedCandidates

```cpp
bool getModifiedCandidates(
    bytevector & cand
) const
```


**Parameters**: 

  * **cand** candidates (DF8F01) 


**Return**: true if successful, false if not found 

get candidates


### function getSetupResult

```cpp
bool getSetupResult(
    Array< 5 > & result
) const
```


**Parameters**: 

  * **result** result (DF8F0D) 


**Return**: true if successful, false if not found or invalid format 

get result of setup transaction


### function setCBDisplayTextIndex

```cpp
bool setCBDisplayTextIndex(
    unsigned char idx
)
```


**Parameters**: 

  * **idx** callback display text index (DF8F12) 


**Return**: true 

set callback display text index


### function getCBDisplayTextIndex

```cpp
bool getCBDisplayTextIndex(
    unsigned char & idx
) const
```


**Parameters**: 

  * **idx** callback display text index (DF8F12) 


**Return**: true if successful, false if not found 

get callback display text index


### function getCardID

```cpp
bool getCardID(
    Array< 20 > & id
) const
```


**Parameters**: 

  * **id** card ID token (DFA014) 


**Return**: true if successful, false if not found or invalid format 

get card ID token


### function getTrackStatus

```cpp
bool getTrackStatus(
    Array< 3 > & track_status
) const
```


**Parameters**: 

  * **track_status** track status ([MSRTrackStatus](namespacevfisdi.md#enum-msrtrackstatus), one byte per track, in the order track3, track2, track1!) (DFA034) 


**Return**: true if successful, false if not found or invalid format 

get track status


### function getObfuscatedTrack1String

```cpp
bool getObfuscatedTrack1String(
    std::string & track
) const
```


**Parameters**: 

  * **track** obfuscated track1 (DFA040) 


**Return**: true if successful, false if not found 

get obfuscated track1


### function getTecselData

```cpp
bool getTecselData(
    bytevector & data
) const
```


**Parameters**: 

  * **data** data buffer returned by cts_WaitSelection (DFA154) 


**Return**: true if successful, false if not found 

get data buffer returned by cts_WaitSelection


### function setKernelID

```cpp
bool setKernelID(
    const Array< 3 > & id
)
```


**Parameters**: 

  * **id** kernel ID (DFAB01) 


**Return**: true 

set EMV kernel ID


### function setKernelID

```cpp
bool setKernelID(
    unsigned id
)
```


**Parameters**: 

  * **id** kernel ID (DFAB01) 


**Return**: true if successful, false in case of invalid format 

set EMV kernel ID


### function getKernelID

```cpp
bool getKernelID(
    Array< 3 > & id
) const
```


**Parameters**: 

  * **id** kernel ID (DFAB01) 


**Return**: true if successful, false if not found 

get EMV kernel ID


### function getKernelID

```cpp
bool getKernelID(
    unsigned & id
) const
```


**Parameters**: 

  * **id** kernel ID (DFAB01) 


**Return**: true if successful, false if not found or invalid format 

get EMV kernel ID


### function setAppNameChosen

```cpp
bool setAppNameChosen(
    const std::string & name
)
```


**Parameters**: 

  * **name** chosen application name (DFD002) 


**Return**: true 

set chosen application name


### function getAppNameChosen

```cpp
bool getAppNameChosen(
    std::string & name
) const
```


**Parameters**: 

  * **name** chosen application name (DFD002) 


**Return**: true if successful, false if not found 

get chosen application name


### function setApplicationKernelId

```cpp
bool setApplicationKernelId(
    const Array< 3 > & id
)
```


**Parameters**: 

  * **id** application kernel ID (DFD003) 


**Return**: true 

set application kernel ID


### function setApplicationKernelId

```cpp
bool setApplicationKernelId(
    unsigned id
)
```


**Parameters**: 

  * **id** application kernel ID (DFD003) 


**Return**: true 

set application kernel ID


### function getApplicationKernelId

```cpp
bool getApplicationKernelId(
    Array< 3 > & id
) const
```


**Parameters**: 

  * **id** application kernel ID (DFD003) 


**Return**: true if successful, false if not found or invalid format 

get application kernel ID


### function getApplicationKernelId

```cpp
bool getApplicationKernelId(
    unsigned & id
) const
```


**Parameters**: 

  * **id** application kernel ID (DFD003) 


**Return**: true if successful, false if not found or invalid format 

get application kernel ID


### function setAppNameUtf8

```cpp
bool setAppNameUtf8(
    const std::string & name
)
```


**Parameters**: 

  * **name** application name in UTF-8 (DFD00B) 


**Return**: true 

set application name in UTF-8


### function getAppNameUtf8

```cpp
bool getAppNameUtf8(
    std::string & name
) const
```


**Parameters**: 

  * **name** application name in UTF-8 (DFD00B) 


**Return**: true if successful, false if not found 

get application name in UTF-8


### function getKernelPrivateNonBER

```cpp
bool getKernelPrivateNonBER(
    bytevector & nber
) const
```


**Parameters**: 

  * **nber** private non-BER kernel data (DFDE01) 


**Return**: true if successful, false if not found 

get private non-BER kernel data


### function setFCIIssuerDiscrData

```cpp
bool setFCIIssuerDiscrData(
    const TLV & data
)
```


**Parameters**: 

  * **data** discretionary data (BF0C) 


**Return**: true 

set FCI issuer discretionary data from final select response


### function getFCIIssuerDiscrData

```cpp
bool getFCIIssuerDiscrData(
    TLV & data
) const
```


**Parameters**: 

  * **data** discretionary data (BF0C) 


**Return**: true if successful, false if not found 

get FCI issuer discretionary data from final select response


### function setMemorySlotUpdateTemplate

```cpp
bool setMemorySlotUpdateTemplate(
    const TLV & t
)
```


**Parameters**: 

  * **t** update template (BF70) 


**Return**: true 

set memory slot update template, list of data lements to update using the PUT DATA


### function getMemorySlotUpdateTemplate

```cpp
bool getMemorySlotUpdateTemplate(
    TLV & t
) const
```


**Parameters**: 

  * **t** update template (BF70) 


**Return**: true if successful, false if not found 

get memory slot update template, list of data lements to update using the PUT DATA


### function setMemorySlotReadTemplate

```cpp
bool setMemorySlotReadTemplate(
    const TLV & t
)
```


**Parameters**: 

  * **t** read template (BF71) 


**Return**: true 

set memory slot read template, list of data lements to read.


### function getMemorySlotReadTemplate

```cpp
bool getMemorySlotReadTemplate(
    TLV & t
) const
```


**Parameters**: 

  * **t** read template (BF71) 


**Return**: true if successful, false if not found 

get memory slot read template, list of data lements to read.


### function setDomesticApps

```cpp
bool setDomesticApps(
    const std::vector< DomesticApp > & app
)
```


**Parameters**: 

  * **app** array of domestic applications (FF01) 


**Return**: true 

set domestic applications


### function getDomesticApps

```cpp
bool getDomesticApps(
    std::vector< DomesticApp > & app
) const
```


**Parameters**: 

  * **app** array of domestic applications (FF01) 


**Return**: true if successful, false if not found 

get domestic applications


### function setFallbackMSR

```cpp
bool setFallbackMSR(
    const std::vector< FallbackMSR > & mid
)
```


**Parameters**: 

  * **mid** fallback configuration (FF02) 


**Return**: true 

set MSR fallback configuration


### function getFallbackMSR

```cpp
bool getFallbackMSR(
    std::vector< FallbackMSR > & mid
) const
```


**Parameters**: 

  * **mid** fallback configuration (FF02) 


**Return**: true if successful, false if not found 

get MSR fallback configuration


### function setCandidateList

```cpp
bool setCandidateList(
    const std::vector< Candidate > & cand
)
```


**Parameters**: 

  * **cand** candidate list (FF03) 


**Return**: true 

set candidate list


### function getCandidateList

```cpp
bool getCandidateList(
    std::vector< Candidate > & cand
) const
```


**Parameters**: 

  * **cand** candidate list (FF03) 


**Return**: true if successful, false if not found 

get candidate list


### function setCBCandidateList

```cpp
bool setCBCandidateList(
    const std::vector< CandidateExt > & cand
)
```


**Parameters**: 

  * **cand** candidate list 


**Return**: true 

set candidate list (in EMV callback)


### function getCBCandidateList

```cpp
bool getCBCandidateList(
    std::vector< CandidateExt > & cand
) const
```


**Parameters**: 

  * **cand** candidate list 


**Return**: true if successful, false if not found 

get candidate list (in EMV callback)


### function setDataExchangeReceivedData

```cpp
bool setDataExchangeReceivedData(
    const TLV & data
)
```


**Parameters**: 

  * **data** received data exchange data (FF10) 


**Return**: true 

set received data exchange data


### function getDataExchangeReceivedData

```cpp
bool getDataExchangeReceivedData(
    TLV & data
) const
```


**Parameters**: 

  * **data** received data exchange data (FF10) 


**Return**: true if successful, false if not found 

get received data exchange data


### function setDataExchangeSendData

```cpp
bool setDataExchangeSendData(
    const TLV & data
)
```


**Parameters**: 

  * **data** data exchange data to be sent (FF8104) 


**Return**: true 

set data exchange data to be sent


### function getDataExchangeSendData

```cpp
bool getDataExchangeSendData(
    TLV & data
) const
```


**Parameters**: 

  * **data** data exchange data to be sent (FF8104) 


**Return**: true if successful, false if not found 

get data exchange data to be sent


### function getNFCVASData

```cpp
bool getNFCVASData(
    TLV & data
) const
```


**Return**: true if successful, false if not found 

get NFC VAS Data (FFA102) 


## Protected Functions Documentation

### function exists

```cpp
bool exists(
    unsigned tag1
) const
```


### function exists

```cpp
bool exists(
    unsigned tag1,
    unsigned tag2
) const
```


-------------------------------

Updated on 2025-06-17 at 11:52:22 +0100