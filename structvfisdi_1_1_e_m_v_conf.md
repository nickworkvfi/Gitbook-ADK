---
title: vfisdi::EMVConf

---

# vfisdi::EMVConf



 [More...](#detailed-description)


`#include <sdi_emv.h>`

Inherits from [TLV](classvfisdi_1_1_t_l_v.md)

## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[DynamicReaderLimits](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits.md)**  |

## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef std::vector< unsigned char > | **[bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector)**  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[setIssuerID](structvfisdi_1_1_e_m_v_conf.md#function-setissuerid)**(const [Array](structvfisdi_1_1_array.md)< 4 > & id) |
| bool | **[getIssuerID](structvfisdi_1_1_e_m_v_conf.md#function-getissuerid)**([Array](structvfisdi_1_1_array.md)< 4 > & id) const |
| bool | **[setAID](structvfisdi_1_1_e_m_v_conf.md#function-setaid)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & aid) |
| template <unsigned N\> <br>bool | **[setAID](structvfisdi_1_1_e_m_v_conf.md#function-setaid)**(const unsigned char(&) v[N]) |
| bool | **[getAID](structvfisdi_1_1_e_m_v_conf.md#function-getaid)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & aid) const |
| bool | **[setPOIInfo](structvfisdi_1_1_e_m_v_conf.md#function-setpoiinfo)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & poi) |
| bool | **[getPOIInfo](structvfisdi_1_1_e_m_v_conf.md#function-getpoiinfo)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & poi) const |
| bool | **[setDefaultAppName](structvfisdi_1_1_e_m_v_conf.md#function-setdefaultappname)**(const std::string & appname) |
| bool | **[getDefaultAppName](structvfisdi_1_1_e_m_v_conf.md#function-getdefaultappname)**(std::string & appname) const |
| bool | **[setTransactionCurrency](structvfisdi_1_1_e_m_v_conf.md#function-settransactioncurrency)**([Currency](namespacevfisdi.md#enum-currency) currency) |
| bool | **[getTransactionCurrency](structvfisdi_1_1_e_m_v_conf.md#function-gettransactioncurrency)**([Currency](namespacevfisdi.md#enum-currency) & currency) const |
| bool | **[setTransactionCurrency](structvfisdi_1_1_e_m_v_conf.md#function-settransactioncurrency)**(int currency) |
| bool | **[getTransactionCurrency](structvfisdi_1_1_e_m_v_conf.md#function-gettransactioncurrency)**(int & currency) const |
| bool | **[setTransactionCurrencyExp](structvfisdi_1_1_e_m_v_conf.md#function-settransactioncurrencyexp)**(unsigned char exp) |
| bool | **[getTransactionCurrencyExp](structvfisdi_1_1_e_m_v_conf.md#function-gettransactioncurrencyexp)**(unsigned char & exp) const |
| bool | **[setAcquirerID](structvfisdi_1_1_e_m_v_conf.md#function-setacquirerid)**(const [Array](structvfisdi_1_1_array.md)< 6 > & acq) |
| bool | **[getAcquirerID](structvfisdi_1_1_e_m_v_conf.md#function-getacquirerid)**([Array](structvfisdi_1_1_array.md)< 6 > & acq) const |
| bool | **[setChipAppVersionNumber](structvfisdi_1_1_e_m_v_conf.md#function-setchipappversionnumber)**(const std::vector< unsigned short > & version) |
| template <unsigned N\> <br>bool | **[setChipAppVersionNumber](structvfisdi_1_1_e_m_v_conf.md#function-setchipappversionnumber)**(const unsigned short(&) v[N]) |
| bool | **[getChipAppVersionNumber](structvfisdi_1_1_e_m_v_conf.md#function-getchipappversionnumber)**(std::vector< unsigned short > & version) const |
| bool | **[setMerchantCategory](structvfisdi_1_1_e_m_v_conf.md#function-setmerchantcategory)**(const [Array](structvfisdi_1_1_array.md)< 2 > & category) |
| bool | **[getMerchantCategory](structvfisdi_1_1_e_m_v_conf.md#function-getmerchantcategory)**([Array](structvfisdi_1_1_array.md)< 2 > & category) const |
| bool | **[setMerchantID](structvfisdi_1_1_e_m_v_conf.md#function-setmerchantid)**(const std::string & mid) |
| bool | **[getMerchantID](structvfisdi_1_1_e_m_v_conf.md#function-getmerchantid)**(std::string & mid) const |
| bool | **[setTerminalCountryCode](structvfisdi_1_1_e_m_v_conf.md#function-setterminalcountrycode)**(unsigned short country) |
| bool | **[getTerminalCountryCode](structvfisdi_1_1_e_m_v_conf.md#function-getterminalcountrycode)**(unsigned short & country) const |
| bool | **[setFloorLimit](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimit)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setFloorLimit](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimit)**(int64_t limit) |
| bool | **[getFloorLimit](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimit)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getFloorLimit](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimit)**(int64_t & limit) const |
| bool | **[setTerminalID](structvfisdi_1_1_e_m_v_conf.md#function-setterminalid)**(const [Array](structvfisdi_1_1_array.md)< 8 > & id) |
| bool | **[getTerminalID](structvfisdi_1_1_e_m_v_conf.md#function-getterminalid)**([Array](structvfisdi_1_1_array.md)< 8 > & id) const |
| bool | **[setTerminalRiskManagement](structvfisdi_1_1_e_m_v_conf.md#function-setterminalriskmanagement)**(const [Array](structvfisdi_1_1_array.md)< 8 > & trm) |
| bool | **[getTerminalRiskManagement](structvfisdi_1_1_e_m_v_conf.md#function-getterminalriskmanagement)**([Array](structvfisdi_1_1_array.md)< 8 > & trm) const |
| bool | **[setIFDSerial](structvfisdi_1_1_e_m_v_conf.md#function-setifdserial)**(const [Array](structvfisdi_1_1_array.md)< 8 > & serial) |
| bool | **[getIFDSerial](structvfisdi_1_1_e_m_v_conf.md#function-getifdserial)**([Array](structvfisdi_1_1_array.md)< 8 > & serial) const |
| bool | **[setTerminalCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-setterminalcapabilities)**(const [Array](structvfisdi_1_1_array.md)< 3 > & caps) |
| bool | **[getTerminalCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-getterminalcapabilities)**([Array](structvfisdi_1_1_array.md)< 3 > & caps) const |
| bool | **[setTerminalType](structvfisdi_1_1_e_m_v_conf.md#function-setterminaltype)**(unsigned char type) |
| bool | **[getTerminalType](structvfisdi_1_1_e_m_v_conf.md#function-getterminaltype)**(unsigned char & type) const |
| bool | **[setPOSEntryMode](structvfisdi_1_1_e_m_v_conf.md#function-setposentrymode)**(unsigned char mode) |
| bool | **[getPOSEntryMode](structvfisdi_1_1_e_m_v_conf.md#function-getposentrymode)**(unsigned char & mode) const |
| bool | **[setAdditionalCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-setadditionalcapabilities)**(const [Array](structvfisdi_1_1_array.md)< 5 > & caps) |
| bool | **[getAdditionalCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-getadditionalcapabilities)**([Array](structvfisdi_1_1_array.md)< 5 > & caps) const |
| bool | **[setMerchantNameLocation](structvfisdi_1_1_e_m_v_conf.md#function-setmerchantnamelocation)**(const std::string & nameloc) |
| bool | **[getMerchantNameLocation](structvfisdi_1_1_e_m_v_conf.md#function-getmerchantnamelocation)**(std::string & nameloc) const |
| bool | **[setTransactionCategory](structvfisdi_1_1_e_m_v_conf.md#function-settransactioncategory)**(unsigned char cat) |
| bool | **[getTransactionCategory](structvfisdi_1_1_e_m_v_conf.md#function-gettransactioncategory)**(unsigned char & cat) const |
| bool | **[setInterchangeProfile](structvfisdi_1_1_e_m_v_conf.md#function-setinterchangeprofile)**(const [Array](structvfisdi_1_1_array.md)< 3 > & icc) |
| bool | **[getInterchangeProfile](structvfisdi_1_1_e_m_v_conf.md#function-getinterchangeprofile)**([Array](structvfisdi_1_1_array.md)< 3 > & icc) const |
| bool | **[setMerchantType](structvfisdi_1_1_e_m_v_conf.md#function-setmerchanttype)**(unsigned char type) |
| bool | **[getMerchantType](structvfisdi_1_1_e_m_v_conf.md#function-getmerchanttype)**(unsigned char & type) const |
| bool | **[setTerminalTransactionInformation](structvfisdi_1_1_e_m_v_conf.md#function-setterminaltransactioninformation)**(const [Array](structvfisdi_1_1_array.md)< 3 > & info) |
| bool | **[getTerminalTransactionInformation](structvfisdi_1_1_e_m_v_conf.md#function-getterminaltransactioninformation)**([Array](structvfisdi_1_1_array.md)< 3 > & info) const |
| bool | **[setAppProgramID](structvfisdi_1_1_e_m_v_conf.md#function-setappprogramid)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & id) |
| template <unsigned N\> <br>bool | **[setAppProgramID](structvfisdi_1_1_e_m_v_conf.md#function-setappprogramid)**(const unsigned char(&) v[N]) |
| bool | **[getAppProgramID](structvfisdi_1_1_e_m_v_conf.md#function-getappprogramid)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & id) const |
| bool | **[setDataStoreRequestedOperatorID](structvfisdi_1_1_e_m_v_conf.md#function-setdatastorerequestedoperatorid)**(const [Array](structvfisdi_1_1_array.md)< 8 > & id) |
| bool | **[getDataStoreRequestedOperatorID](structvfisdi_1_1_e_m_v_conf.md#function-getdatastorerequestedoperatorid)**([Array](structvfisdi_1_1_array.md)< 8 > & id) const |
| bool | **[setReceiptRequiredLimit](structvfisdi_1_1_e_m_v_conf.md#function-setreceiptrequiredlimit)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setReceiptRequiredLimit](structvfisdi_1_1_e_m_v_conf.md#function-setreceiptrequiredlimit)**(int64_t limit) |
| bool | **[getReceiptRequiredLimit](structvfisdi_1_1_e_m_v_conf.md#function-getreceiptrequiredlimit)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getReceiptRequiredLimit](structvfisdi_1_1_e_m_v_conf.md#function-getreceiptrequiredlimit)**(int64_t & limit) const |
| bool | **[setOptionStatus](structvfisdi_1_1_e_m_v_conf.md#function-setoptionstatus)**(const [Array](structvfisdi_1_1_array.md)< 2 > & status) |
| bool | **[getOptionStatus](structvfisdi_1_1_e_m_v_conf.md#function-getoptionstatus)**([Array](structvfisdi_1_1_array.md)< 2 > & status) const |
| bool | **[setTransactionQualifier](structvfisdi_1_1_e_m_v_conf.md#function-settransactionqualifier)**(const [Array](structvfisdi_1_1_array.md)< 4 > & q) |
| bool | **[getTransactionQualifier](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionqualifier)**([Array](structvfisdi_1_1_array.md)< 4 > & q) const |
| bool | **[setMSRVersionNumber](structvfisdi_1_1_e_m_v_conf.md#function-setmsrversionnumber)**(const std::vector< unsigned short > & ver) |
| template <unsigned N\> <br>bool | **[setMSRVersionNumber](structvfisdi_1_1_e_m_v_conf.md#function-setmsrversionnumber)**(const unsigned short(&) v[N]) |
| bool | **[getMSRVersionNumber](structvfisdi_1_1_e_m_v_conf.md#function-getmsrversionnumber)**(std::vector< unsigned short > & ver) const |
| bool | **[setReaderCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-setreadercapabilities)**(unsigned char caps) |
| bool | **[getReaderCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-getreadercapabilities)**(unsigned char & caps) const |
| bool | **[setTransactionCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-settransactioncapabilities)**(const [Array](structvfisdi_1_1_array.md)< 4 > & caps) |
| bool | **[getTransactionCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-gettransactioncapabilities)**([Array](structvfisdi_1_1_array.md)< 4 > & caps) const |
| bool | **[setTerminalTransactionData](structvfisdi_1_1_e_m_v_conf.md#function-setterminaltransactiondata)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & data) |
| template <unsigned N\> <br>bool | **[setTerminalTransactionData](structvfisdi_1_1_e_m_v_conf.md#function-setterminaltransactiondata)**(const unsigned char(&) v[N]) |
| bool | **[getTerminalTransactionData](structvfisdi_1_1_e_m_v_conf.md#function-getterminaltransactiondata)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & data) const |
| bool | **[setMerchantCustomData](structvfisdi_1_1_e_m_v_conf.md#function-setmerchantcustomdata)**(const [Array](structvfisdi_1_1_array.md)< 20 > & data) |
| bool | **[getMerchantCustomData](structvfisdi_1_1_e_m_v_conf.md#function-getmerchantcustomdata)**([Array](structvfisdi_1_1_array.md)< 20 > & data) const |
| bool | **[getLibVersion](structvfisdi_1_1_e_m_v_conf.md#function-getlibversion)**(std::string & version) const |
| bool | **[getEMVCOChecksum](structvfisdi_1_1_e_m_v_conf.md#function-getemvcochecksum)**(std::string & chk) const |
| bool | **[setEMVCOChecksumParameter](structvfisdi_1_1_e_m_v_conf.md#function-setemvcochecksumparameter)**(const [Array](structvfisdi_1_1_array.md)< 5 > & cp) |
| bool | **[setEMVCOChecksumParameter](structvfisdi_1_1_e_m_v_conf.md#function-setemvcochecksumparameter)**(const [EMVChecksumOptions](namespacevfisdi.md#typedef-emvchecksumoptions) & cp) |
| bool | **[getEMVCOChecksumParameter](structvfisdi_1_1_e_m_v_conf.md#function-getemvcochecksumparameter)**([Array](structvfisdi_1_1_array.md)< 5 > & cp) const |
| bool | **[getEMVCOChecksumParameter](structvfisdi_1_1_e_m_v_conf.md#function-getemvcochecksumparameter)**([EMVChecksumOptions](namespacevfisdi.md#typedef-emvchecksumoptions) & cp) const |
| bool | **[setOfflineOnly](structvfisdi_1_1_e_m_v_conf.md#function-setofflineonly)**(bool flag) |
| bool | **[getOfflineOnly](structvfisdi_1_1_e_m_v_conf.md#function-getofflineonly)**(bool & flag) const |
| bool | **[setTACIACDefaultHandling](structvfisdi_1_1_e_m_v_conf.md#function-settaciacdefaulthandling)**(unsigned char def) |
| bool | **[getTACIACDefaultHandling](structvfisdi_1_1_e_m_v_conf.md#function-gettaciacdefaulthandling)**(unsigned char & def) const |
| bool | **[setFallbackMIDs](structvfisdi_1_1_e_m_v_conf.md#function-setfallbackmids)**(const [Array](structvfisdi_1_1_array.md)< 3 > & mid) |
| bool | **[getFallbackMIDs](structvfisdi_1_1_e_m_v_conf.md#function-getfallbackmids)**([Array](structvfisdi_1_1_array.md)< 3 > & mid) const |
| bool | **[setEMVFallback](structvfisdi_1_1_e_m_v_conf.md#function-setemvfallback)**(unsigned char fb) |
| bool | **[getEMVFallback](structvfisdi_1_1_e_m_v_conf.md#function-getemvfallback)**(unsigned char & fb) const |
| bool | **[setSpecialTransactions](structvfisdi_1_1_e_m_v_conf.md#function-setspecialtransactions)**(const [EMVSpecialTransactions](classvfisdi_1_1_e_m_v_special_transactions.md) & tx) |
| bool | **[getSpecialTransactions](structvfisdi_1_1_e_m_v_conf.md#function-getspecialtransactions)**([EMVSpecialTransactions](classvfisdi_1_1_e_m_v_special_transactions.md) & tx) const |
| bool | **[setPriorityApplications](structvfisdi_1_1_e_m_v_conf.md#function-setpriorityapplications)**(const std::vector< [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) > & apps) |
| bool | **[getPriorityApplications](structvfisdi_1_1_e_m_v_conf.md#function-getpriorityapplications)**(std::vector< [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) > & apps) const |
| bool | **[setASI](structvfisdi_1_1_e_m_v_conf.md#function-setasi)**(unsigned char asi) |
| bool | **[getASI](structvfisdi_1_1_e_m_v_conf.md#function-getasi)**(unsigned char & asi) const |
| bool | **[setTACDenial](structvfisdi_1_1_e_m_v_conf.md#function-settacdenial)**(const [Array](structvfisdi_1_1_array.md)< 5 > & tac) |
| bool | **[getTACDenial](structvfisdi_1_1_e_m_v_conf.md#function-gettacdenial)**([Array](structvfisdi_1_1_array.md)< 5 > & tac) const |
| bool | **[setTACOnline](structvfisdi_1_1_e_m_v_conf.md#function-settaconline)**(const [Array](structvfisdi_1_1_array.md)< 5 > & tac) |
| bool | **[getTACOnline](structvfisdi_1_1_e_m_v_conf.md#function-gettaconline)**([Array](structvfisdi_1_1_array.md)< 5 > & tac) const |
| bool | **[setTACDefault](structvfisdi_1_1_e_m_v_conf.md#function-settacdefault)**(const [Array](structvfisdi_1_1_array.md)< 5 > & tac) |
| bool | **[getTACDefault](structvfisdi_1_1_e_m_v_conf.md#function-gettacdefault)**([Array](structvfisdi_1_1_array.md)< 5 > & tac) const |
| bool | **[setThreshold](structvfisdi_1_1_e_m_v_conf.md#function-setthreshold)**(unsigned th) |
| bool | **[getThreshold](structvfisdi_1_1_e_m_v_conf.md#function-getthreshold)**(unsigned & th) const |
| bool | **[setMaxPercentOnline](structvfisdi_1_1_e_m_v_conf.md#function-setmaxpercentonline)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 1 > & p) |
| bool | **[setMaxPercentOnline](structvfisdi_1_1_e_m_v_conf.md#function-setmaxpercentonline)**(int p) |
| bool | **[getMaxPercentOnline](structvfisdi_1_1_e_m_v_conf.md#function-getmaxpercentonline)**([BCD](classvfisdi_1_1_b_c_d.md)< 1 > & p) const |
| bool | **[getMaxPercentOnline](structvfisdi_1_1_e_m_v_conf.md#function-getmaxpercentonline)**(int & p) const |
| bool | **[setPercentOnline](structvfisdi_1_1_e_m_v_conf.md#function-setpercentonline)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 1 > & p) |
| bool | **[setPercentOnline](structvfisdi_1_1_e_m_v_conf.md#function-setpercentonline)**(int p) |
| bool | **[getPercentOnline](structvfisdi_1_1_e_m_v_conf.md#function-getpercentonline)**([BCD](classvfisdi_1_1_b_c_d.md)< 1 > & p) const |
| bool | **[getPercentOnline](structvfisdi_1_1_e_m_v_conf.md#function-getpercentonline)**(int & p) const |
| bool | **[setDefaultTDOL](structvfisdi_1_1_e_m_v_conf.md#function-setdefaulttdol)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & tdol) |
| template <unsigned N\> <br>bool | **[setDefaultTDOL](structvfisdi_1_1_e_m_v_conf.md#function-setdefaulttdol)**(const unsigned char(&) v[N]) |
| bool | **[getDefaultTDOL](structvfisdi_1_1_e_m_v_conf.md#function-getdefaulttdol)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & tdol) const |
| bool | **[setDefaultDDOL](structvfisdi_1_1_e_m_v_conf.md#function-setdefaultddol)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & ddol) |
| template <unsigned N\> <br>bool | **[setDefaultDDOL](structvfisdi_1_1_e_m_v_conf.md#function-setdefaultddol)**(const unsigned char(&) v[N]) |
| bool | **[getDefaultDDOL](structvfisdi_1_1_e_m_v_conf.md#function-getdefaultddol)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & ddol) const |
| bool | **[setAdditionalTags](structvfisdi_1_1_e_m_v_conf.md#function-setadditionaltags)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & tags) |
| template <unsigned N\> <br>bool | **[setAdditionalTags](structvfisdi_1_1_e_m_v_conf.md#function-setadditionaltags)**(const unsigned char(&) v[N]) |
| bool | **[getAdditionalTags](structvfisdi_1_1_e_m_v_conf.md#function-getadditionaltags)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & tags) const |
| bool | **[setMandatoryTags](structvfisdi_1_1_e_m_v_conf.md#function-setmandatorytags)**(const std::vector< unsigned > & tags) |
| template <unsigned N\> <br>bool | **[setMandatoryTags](structvfisdi_1_1_e_m_v_conf.md#function-setmandatorytags)**(const unsigned(&) v[N]) |
| bool | **[getMandatoryTags](structvfisdi_1_1_e_m_v_conf.md#function-getmandatorytags)**(std::vector< unsigned > & tags) const |
| bool | **[setAppFlowCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-setappflowcapabilities)**(const [Array](structvfisdi_1_1_array.md)< 5 > & caps) |
| bool | **[setAppFlowCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-setappflowcapabilities)**(const [EMVAppFlowCapabilities](namespacevfisdi.md#typedef-emvappflowcapabilities) & caps) |
| bool | **[getAppFlowCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-getappflowcapabilities)**([Array](structvfisdi_1_1_array.md)< 5 > & caps) const |
| bool | **[getAppFlowCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-getappflowcapabilities)**([EMVAppFlowCapabilities](namespacevfisdi.md#typedef-emvappflowcapabilities) & caps) const |
| bool | **[setAdditionalTagsCRD](structvfisdi_1_1_e_m_v_conf.md#function-setadditionaltagscrd)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & tags) |
| template <unsigned N\> <br>bool | **[setAdditionalTagsCRD](structvfisdi_1_1_e_m_v_conf.md#function-setadditionaltagscrd)**(const unsigned char(&) v[N]) |
| bool | **[getAdditionalTagsCRD](structvfisdi_1_1_e_m_v_conf.md#function-getadditionaltagscrd)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & tags) const |
| bool | **[setEMVApplication](structvfisdi_1_1_e_m_v_conf.md#function-setemvapplication)**(unsigned char emv) |
| bool | **[getEMVApplication](structvfisdi_1_1_e_m_v_conf.md#function-getemvapplication)**(unsigned char & emv) const |
| bool | **[setAIPNoCVM](structvfisdi_1_1_e_m_v_conf.md#function-setaipnocvm)**(unsigned char cvm) |
| bool | **[getAIPNoCVM](structvfisdi_1_1_e_m_v_conf.md#function-getaipnocvm)**(unsigned char & cvm) const |
| bool | **[setCustomCVM](structvfisdi_1_1_e_m_v_conf.md#function-setcustomcvm)**(unsigned char cvm) |
| bool | **[getCustomCVM](structvfisdi_1_1_e_m_v_conf.md#function-getcustomcvm)**(unsigned char & cvm) const |
| bool | **[setAdditionalTerminalCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-setadditionalterminalcapabilities)**(const [Array](structvfisdi_1_1_array.md)< 5 > & caps) |
| bool | **[getAdditionalTerminalCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-getadditionalterminalcapabilities)**([Array](structvfisdi_1_1_array.md)< 5 > & caps) const |
| bool | **[setCDAProcessing](structvfisdi_1_1_e_m_v_conf.md#function-setcdaprocessing)**(unsigned char cda) |
| bool | **[getCDAProcessing](structvfisdi_1_1_e_m_v_conf.md#function-getcdaprocessing)**(unsigned char & cda) const |
| bool | **[getObfuscatedPANString](structvfisdi_1_1_e_m_v_conf.md#function-getobfuscatedpanstring)**(std::string & pan) const |
| bool | **[getObfuscatedTrack2String](structvfisdi_1_1_e_m_v_conf.md#function-getobfuscatedtrack2string)**(std::string & track) const |
| bool | **[setSecurityLimit](structvfisdi_1_1_e_m_v_conf.md#function-setsecuritylimit)**(unsigned limit) |
| bool | **[getSecurityLimit](structvfisdi_1_1_e_m_v_conf.md#function-getsecuritylimit)**(unsigned & limit) const |
| bool | **[setCapabilitiesBelowLimit](structvfisdi_1_1_e_m_v_conf.md#function-setcapabilitiesbelowlimit)**(const [Array](structvfisdi_1_1_array.md)< 3 > & caps) |
| bool | **[getCapabilitiesBelowLimit](structvfisdi_1_1_e_m_v_conf.md#function-getcapabilitiesbelowlimit)**([Array](structvfisdi_1_1_array.md)< 3 > & caps) const |
| bool | **[setBeepVolume](structvfisdi_1_1_e_m_v_conf.md#function-setbeepvolume)**(unsigned short volume) |
| bool | **[getBeepVolume](structvfisdi_1_1_e_m_v_conf.md#function-getbeepvolume)**(unsigned short & volume) const |
| bool | **[getKernelVersion](structvfisdi_1_1_e_m_v_conf.md#function-getkernelversion)**(std::string & version) const |
| bool | **[setConfigCommand](structvfisdi_1_1_e_m_v_conf.md#function-setconfigcommand)**(unsigned char cmd) |
| bool | **[getConfigCommand](structvfisdi_1_1_e_m_v_conf.md#function-getconfigcommand)**(unsigned char & cmd) const |
| bool | **[setSupportedLanguages](structvfisdi_1_1_e_m_v_conf.md#function-setsupportedlanguages)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & lang) |
| template <unsigned N\> <br>bool | **[setSupportedLanguages](structvfisdi_1_1_e_m_v_conf.md#function-setsupportedlanguages)**(const unsigned char(&) v[N]) |
| bool | **[getSupportedLanguages](structvfisdi_1_1_e_m_v_conf.md#function-getsupportedlanguages)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & lang) const |
| bool | **[setRetryLimit](structvfisdi_1_1_e_m_v_conf.md#function-setretrylimit)**(unsigned char limit) |
| bool | **[getRetryLimit](structvfisdi_1_1_e_m_v_conf.md#function-getretrylimit)**(unsigned char & limit) const |
| bool | **[getL1DriverVersion](structvfisdi_1_1_e_m_v_conf.md#function-getl1driverversion)**(std::string & version) const |
| bool | **[getCtL1DriverVersion](structvfisdi_1_1_e_m_v_conf.md#function-getctl1driverversion)**(std::string & version) const |
| bool | **[getCtlsL1DriverVersion](structvfisdi_1_1_e_m_v_conf.md#function-getctlsl1driverversion)**(std::string & version) const |
| bool | **[setShortKernelID](structvfisdi_1_1_e_m_v_conf.md#function-setshortkernelid)**(unsigned char id) |
| bool | **[getShortKernelID](structvfisdi_1_1_e_m_v_conf.md#function-getshortkernelid)**(unsigned char & id) const |
| bool | **[setProceedToFirstWriteFlag](structvfisdi_1_1_e_m_v_conf.md#function-setproceedtofirstwriteflag)**(unsigned char flag) |
| bool | **[getProceedToFirstWriteFlag](structvfisdi_1_1_e_m_v_conf.md#function-getproceedtofirstwriteflag)**(unsigned char & flag) const |
| bool | **[setTagsToRead](structvfisdi_1_1_e_m_v_conf.md#function-settagstoread)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & ttr) |
| template <unsigned N\> <br>bool | **[setTagsToRead](structvfisdi_1_1_e_m_v_conf.md#function-settagstoread)**(const unsigned char(&) v[N]) |
| bool | **[getTagsToRead](structvfisdi_1_1_e_m_v_conf.md#function-gettagstoread)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & ttr) const |
| bool | **[setCardDataInputCapability](structvfisdi_1_1_e_m_v_conf.md#function-setcarddatainputcapability)**(unsigned char cap) |
| bool | **[getCardDataInputCapability](structvfisdi_1_1_e_m_v_conf.md#function-getcarddatainputcapability)**(unsigned char & cap) const |
| bool | **[setChipCVMAboveLimit](structvfisdi_1_1_e_m_v_conf.md#function-setchipcvmabovelimit)**(unsigned char cvm) |
| bool | **[getChipCVMAboveLimit](structvfisdi_1_1_e_m_v_conf.md#function-getchipcvmabovelimit)**(unsigned char & cvm) const |
| bool | **[setChipCVMBelowLimit](structvfisdi_1_1_e_m_v_conf.md#function-setchipcvmbelowlimit)**(unsigned char cvm) |
| bool | **[getChipCVMBelowLimit](structvfisdi_1_1_e_m_v_conf.md#function-getchipcvmbelowlimit)**(unsigned char & cvm) const |
| bool | **[setKernelConfiguration](structvfisdi_1_1_e_m_v_conf.md#function-setkernelconfiguration)**(unsigned char conf) |
| bool | **[getKernelConfiguration](structvfisdi_1_1_e_m_v_conf.md#function-getkernelconfiguration)**(unsigned char & conf) const |
| bool | **[setTornTransactionLifetime](structvfisdi_1_1_e_m_v_conf.md#function-settorntransactionlifetime)**(unsigned short ttl) |
| bool | **[getTornTransactionLifetime](structvfisdi_1_1_e_m_v_conf.md#function-gettorntransactionlifetime)**(unsigned short & ttl) const |
| bool | **[setTornTransactionNumber](structvfisdi_1_1_e_m_v_conf.md#function-settorntransactionnumber)**(unsigned char num) |
| bool | **[getTornTransactionNumber](structvfisdi_1_1_e_m_v_conf.md#function-gettorntransactionnumber)**(unsigned char & num) const |
| bool | **[setMagstripeCVMAboveLimit](structvfisdi_1_1_e_m_v_conf.md#function-setmagstripecvmabovelimit)**(unsigned char cvm) |
| bool | **[getMagstripeCVMAboveLimit](structvfisdi_1_1_e_m_v_conf.md#function-getmagstripecvmabovelimit)**(unsigned char & cvm) const |
| bool | **[setSecurityCapability](structvfisdi_1_1_e_m_v_conf.md#function-setsecuritycapability)**(unsigned char cap) |
| bool | **[getSecurityCapability](structvfisdi_1_1_e_m_v_conf.md#function-getsecuritycapability)**(unsigned char & cap) const |
| bool | **[setTransactionLimitNoCVMOnDevice](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitnocvmondevice)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setTransactionLimitNoCVMOnDevice](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitnocvmondevice)**(int64_t limit) |
| bool | **[getTransactionLimitNoCVMOnDevice](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitnocvmondevice)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getTransactionLimitNoCVMOnDevice](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitnocvmondevice)**(int64_t & limit) const |
| bool | **[setTransactionLimitCVMOnDevice](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitcvmondevice)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setTransactionLimitCVMOnDevice](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitcvmondevice)**(int64_t limit) |
| bool | **[getTransactionLimitCVMOnDevice](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitcvmondevice)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getTransactionLimitCVMOnDevice](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitcvmondevice)**(int64_t & limit) const |
| bool | **[setDataExchangeTimeout](structvfisdi_1_1_e_m_v_conf.md#function-setdataexchangetimeout)**(unsigned short tout) |
| bool | **[getDataExchangeTimeout](structvfisdi_1_1_e_m_v_conf.md#function-getdataexchangetimeout)**(unsigned short & tout) const |
| bool | **[setMagstripeCVMBelowLimit](structvfisdi_1_1_e_m_v_conf.md#function-setmagstripecvmbelowlimit)**(unsigned char cvm) |
| bool | **[getMagstripeCVMBelowLimit](structvfisdi_1_1_e_m_v_conf.md#function-getmagstripecvmbelowlimit)**(unsigned char & cvm) const |
| bool | **[setMessageHoldTime](structvfisdi_1_1_e_m_v_conf.md#function-setmessageholdtime)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 3 > & time) |
| bool | **[setMessageHoldTime](structvfisdi_1_1_e_m_v_conf.md#function-setmessageholdtime)**(int time) |
| bool | **[getMessageHoldTime](structvfisdi_1_1_e_m_v_conf.md#function-getmessageholdtime)**([BCD](classvfisdi_1_1_b_c_d.md)< 3 > & time) const |
| bool | **[getMessageHoldTime](structvfisdi_1_1_e_m_v_conf.md#function-getmessageholdtime)**(int & time) const |
| bool | **[setFieldOffTime](structvfisdi_1_1_e_m_v_conf.md#function-setfieldofftime)**(unsigned char time) |
| bool | **[getFieldOffTime](structvfisdi_1_1_e_m_v_conf.md#function-getfieldofftime)**(unsigned char & time) const |
| bool | **[setPhoneMessageTable](structvfisdi_1_1_e_m_v_conf.md#function-setphonemessagetable)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & pmt) |
| template <unsigned N\> <br>bool | **[setPhoneMessageTable](structvfisdi_1_1_e_m_v_conf.md#function-setphonemessagetable)**(const unsigned char(&) v[N]) |
| bool | **[getPhoneMessageTable](structvfisdi_1_1_e_m_v_conf.md#function-getphonemessagetable)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & pmt) const |
| bool | **[setRelayResistanceMinGracePeriod](structvfisdi_1_1_e_m_v_conf.md#function-setrelayresistancemingraceperiod)**(unsigned short time) |
| bool | **[getRelayResistanceMinGracePeriod](structvfisdi_1_1_e_m_v_conf.md#function-getrelayresistancemingraceperiod)**(unsigned short & time) const |
| bool | **[setRelayResistanceMaxGracePeriod](structvfisdi_1_1_e_m_v_conf.md#function-setrelayresistancemaxgraceperiod)**(unsigned short time) |
| bool | **[getRelayResistanceMaxGracePeriod](structvfisdi_1_1_e_m_v_conf.md#function-getrelayresistancemaxgraceperiod)**(unsigned short & time) const |
| bool | **[setRelayResistanceCAPDUTime](structvfisdi_1_1_e_m_v_conf.md#function-setrelayresistancecapdutime)**(unsigned short time) |
| bool | **[getRelayResistanceCAPDUTime](structvfisdi_1_1_e_m_v_conf.md#function-getrelayresistancecapdutime)**(unsigned short & time) const |
| bool | **[setRelayResistanceRAPDUTime](structvfisdi_1_1_e_m_v_conf.md#function-setrelayresistancerapdutime)**(unsigned short time) |
| bool | **[getRelayResistanceRAPDUTime](structvfisdi_1_1_e_m_v_conf.md#function-getrelayresistancerapdutime)**(unsigned short & time) const |
| bool | **[setRelayResistanceAccuracy](structvfisdi_1_1_e_m_v_conf.md#function-setrelayresistanceaccuracy)**(unsigned short time) |
| bool | **[getRelayResistanceAccuracy](structvfisdi_1_1_e_m_v_conf.md#function-getrelayresistanceaccuracy)**(unsigned short & time) const |
| bool | **[setRelayResistanceTimeMismatchThreshold](structvfisdi_1_1_e_m_v_conf.md#function-setrelayresistancetimemismatchthreshold)**(unsigned char percent) |
| bool | **[getRelayResistanceTimeMismatchThreshold](structvfisdi_1_1_e_m_v_conf.md#function-getrelayresistancetimemismatchthreshold)**(unsigned char & percent) const |
| bool | **[setFlowOptions](structvfisdi_1_1_e_m_v_conf.md#function-setflowoptions)**(const [Array](structvfisdi_1_1_array.md)< 10 > & opt) |
| bool | **[setFlowOptions](structvfisdi_1_1_e_m_v_conf.md#function-setflowoptions)**(const [EMVFlowOptions](namespacevfisdi.md#typedef-emvflowoptions) & opt) |
| bool | **[getFlowOptions](structvfisdi_1_1_e_m_v_conf.md#function-getflowoptions)**([Array](structvfisdi_1_1_array.md)< 10 > & opt) const |
| bool | **[getFlowOptions](structvfisdi_1_1_e_m_v_conf.md#function-getflowoptions)**([EMVFlowOptions](namespacevfisdi.md#typedef-emvflowoptions) & opt) const |
| bool | **[setCtlsTerminalLimit](structvfisdi_1_1_e_m_v_conf.md#function-setctlsterminallimit)**(unsigned limit) |
| bool | **[getCtlsTerminalLimit](structvfisdi_1_1_e_m_v_conf.md#function-getctlsterminallimit)**(unsigned & limit) const |
| bool | **[setKernelID](structvfisdi_1_1_e_m_v_conf.md#function-setkernelid)**(const [Array](structvfisdi_1_1_array.md)< 3 > & id) |
| bool | **[setKernelID](structvfisdi_1_1_e_m_v_conf.md#function-setkernelid)**(unsigned id) |
| bool | **[getKernelID](structvfisdi_1_1_e_m_v_conf.md#function-getkernelid)**([Array](structvfisdi_1_1_array.md)< 3 > & id) const |
| bool | **[getKernelID](structvfisdi_1_1_e_m_v_conf.md#function-getkernelid)**(unsigned & id) const |
| bool | **[getEntryPointChecksum](structvfisdi_1_1_e_m_v_conf.md#function-getentrypointchecksum)**(std::string & chk) const |
| bool | **[getKernelChecksum](structvfisdi_1_1_e_m_v_conf.md#function-getkernelchecksum)**(std::string & chk) const |
| bool | **[setRetapFieldOff](structvfisdi_1_1_e_m_v_conf.md#function-setretapfieldoff)**(unsigned char offtime) |
| bool | **[getRetapFieldOff](structvfisdi_1_1_e_m_v_conf.md#function-getretapfieldoff)**(unsigned char & offtime) const |
| bool | **[setInternalKernelID](structvfisdi_1_1_e_m_v_conf.md#function-setinternalkernelid)**(const [Array](structvfisdi_1_1_array.md)< 3 > & id) |
| bool | **[setInternalKernelID](structvfisdi_1_1_e_m_v_conf.md#function-setinternalkernelid)**(unsigned id) |
| bool | **[getInternalKernelID](structvfisdi_1_1_e_m_v_conf.md#function-getinternalkernelid)**([Array](structvfisdi_1_1_array.md)< 3 > & id) const |
| bool | **[getInternalKernelID](structvfisdi_1_1_e_m_v_conf.md#function-getinternalkernelid)**(unsigned & id) const |
| bool | **[setTECSupport](structvfisdi_1_1_e_m_v_conf.md#function-settecsupport)**(unsigned char ts) |
| bool | **[getTECSupport](structvfisdi_1_1_e_m_v_conf.md#function-gettecsupport)**(unsigned char & ts) const |
| bool | **[setKernelAppFlowCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-setkernelappflowcapabilities)**(const [Array](structvfisdi_1_1_array.md)< 5 > & caps) |
| bool | **[setKernelAppFlowCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-setkernelappflowcapabilities)**(const [EMVKernelAppFlowCapabilities](namespacevfisdi.md#typedef-emvkernelappflowcapabilities) & caps) |
| bool | **[getKernelAppFlowCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-getkernelappflowcapabilities)**([Array](structvfisdi_1_1_array.md)< 5 > & caps) const |
| bool | **[getKernelAppFlowCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-getkernelappflowcapabilities)**([EMVKernelAppFlowCapabilities](namespacevfisdi.md#typedef-emvkernelappflowcapabilities) & caps) const |
| bool | **[setCtlsTransactionLimit](structvfisdi_1_1_e_m_v_conf.md#function-setctlstransactionlimit)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setCtlsTransactionLimit](structvfisdi_1_1_e_m_v_conf.md#function-setctlstransactionlimit)**(int64_t limit) |
| bool | **[getCtlsTransactionLimit](structvfisdi_1_1_e_m_v_conf.md#function-getctlstransactionlimit)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getCtlsTransactionLimit](structvfisdi_1_1_e_m_v_conf.md#function-getctlstransactionlimit)**(int64_t & limit) const |
| bool | **[setCVMRequiredLimit](structvfisdi_1_1_e_m_v_conf.md#function-setcvmrequiredlimit)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setCVMRequiredLimit](structvfisdi_1_1_e_m_v_conf.md#function-setcvmrequiredlimit)**(int64_t limit) |
| bool | **[getCVMRequiredLimit](structvfisdi_1_1_e_m_v_conf.md#function-getcvmrequiredlimit)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getCVMRequiredLimit](structvfisdi_1_1_e_m_v_conf.md#function-getcvmrequiredlimit)**(int64_t & limit) const |
| bool | **[setRiskManagementThreshold](structvfisdi_1_1_e_m_v_conf.md#function-setriskmanagementthreshold)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & t) |
| bool | **[setRiskManagementThreshold](structvfisdi_1_1_e_m_v_conf.md#function-setriskmanagementthreshold)**(int64_t t) |
| bool | **[getRiskManagementThreshold](structvfisdi_1_1_e_m_v_conf.md#function-getriskmanagementthreshold)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & t) const |
| bool | **[getRiskManagementThreshold](structvfisdi_1_1_e_m_v_conf.md#function-getriskmanagementthreshold)**(int64_t & t) const |
| bool | **[setRiskManagementTargetPercentage](structvfisdi_1_1_e_m_v_conf.md#function-setriskmanagementtargetpercentage)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 1 > & p) |
| bool | **[setRiskManagementTargetPercentage](structvfisdi_1_1_e_m_v_conf.md#function-setriskmanagementtargetpercentage)**(int p) |
| bool | **[getRiskManagementTargetPercentage](structvfisdi_1_1_e_m_v_conf.md#function-getriskmanagementtargetpercentage)**([BCD](classvfisdi_1_1_b_c_d.md)< 1 > & p) const |
| bool | **[getRiskManagementTargetPercentage](structvfisdi_1_1_e_m_v_conf.md#function-getriskmanagementtargetpercentage)**(int & p) const |
| bool | **[setRiskManagementMaxTargetPercentage](structvfisdi_1_1_e_m_v_conf.md#function-setriskmanagementmaxtargetpercentage)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 1 > & p) |
| bool | **[setRiskManagementMaxTargetPercentage](structvfisdi_1_1_e_m_v_conf.md#function-setriskmanagementmaxtargetpercentage)**(int p) |
| bool | **[getRiskManagementMaxTargetPercentage](structvfisdi_1_1_e_m_v_conf.md#function-getriskmanagementmaxtargetpercentage)**([BCD](classvfisdi_1_1_b_c_d.md)< 1 > & p) const |
| bool | **[getRiskManagementMaxTargetPercentage](structvfisdi_1_1_e_m_v_conf.md#function-getriskmanagementmaxtargetpercentage)**(int & p) const |
| bool | **[setDynamicReaderLimitsOptions](structvfisdi_1_1_e_m_v_conf.md#function-setdynamicreaderlimitsoptions)**(unsigned char opts) |
| bool | **[getDynamicReaderLimitsOptions](structvfisdi_1_1_e_m_v_conf.md#function-getdynamicreaderlimitsoptions)**(unsigned char & opts) const |
| bool | **[setTransactionLimitCash](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitcash)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setTransactionLimitCash](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitcash)**(int64_t limit) |
| bool | **[getTransactionLimitCash](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitcash)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getTransactionLimitCash](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitcash)**(int64_t & limit) const |
| bool | **[setCombinationOptions](structvfisdi_1_1_e_m_v_conf.md#function-setcombinationoptions)**(const [Array](structvfisdi_1_1_array.md)< 2 > & opt) |
| bool | **[getCombinationOptions](structvfisdi_1_1_e_m_v_conf.md#function-getcombinationoptions)**([Array](structvfisdi_1_1_array.md)< 2 > & opt) const |
| bool | **[setRemovalTimeout](structvfisdi_1_1_e_m_v_conf.md#function-setremovaltimeout)**(unsigned short tout) |
| bool | **[getRemovalTimeout](structvfisdi_1_1_e_m_v_conf.md#function-getremovaltimeout)**(unsigned short & tout) const |
| bool | **[setCallbackTimeout](structvfisdi_1_1_e_m_v_conf.md#function-setcallbacktimeout)**(unsigned short tout) |
| bool | **[getCallbackTimeout](structvfisdi_1_1_e_m_v_conf.md#function-getcallbacktimeout)**(unsigned short & tout) const |
| bool | **[setTornTransactionInterval](structvfisdi_1_1_e_m_v_conf.md#function-settorntransactioninterval)**(const [Array](structvfisdi_1_1_array.md)< 2 > & interval) |
| bool | **[getTornTransactionInterval](structvfisdi_1_1_e_m_v_conf.md#function-gettorntransactioninterval)**([Array](structvfisdi_1_1_array.md)< 2 > & interval) const |
| bool | **[setCtlsKernelCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-setctlskernelcapabilities)**(const [Array](structvfisdi_1_1_array.md)< 5 > & caps) |
| bool | **[getCtlsKernelCapabilities](structvfisdi_1_1_e_m_v_conf.md#function-getctlskernelcapabilities)**([Array](structvfisdi_1_1_array.md)< 5 > & caps) const |
| bool | **[setMTOL](structvfisdi_1_1_e_m_v_conf.md#function-setmtol)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & mtol) |
| template <unsigned N\> <br>bool | **[setMTOL](structvfisdi_1_1_e_m_v_conf.md#function-setmtol)**(const unsigned char(&) v[N]) |
| bool | **[getMTOL](structvfisdi_1_1_e_m_v_conf.md#function-getmtol)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & mtol) const |
| bool | **[setUnpredictableNumberRange](structvfisdi_1_1_e_m_v_conf.md#function-setunpredictablenumberrange)**(unsigned char range) |
| bool | **[getUnpredictableNumberRange](structvfisdi_1_1_e_m_v_conf.md#function-getunpredictablenumberrange)**(unsigned char & range) const |
| bool | **[setTermcapAboveCVMLimit](structvfisdi_1_1_e_m_v_conf.md#function-settermcapabovecvmlimit)**(const [Array](structvfisdi_1_1_array.md)< 3 > & tcap) |
| bool | **[getTermcapAboveCVMLimit](structvfisdi_1_1_e_m_v_conf.md#function-gettermcapabovecvmlimit)**([Array](structvfisdi_1_1_array.md)< 3 > & tcap) const |
| bool | **[setTermcapBelowCVMLimit](structvfisdi_1_1_e_m_v_conf.md#function-settermcapbelowcvmlimit)**(const [Array](structvfisdi_1_1_array.md)< 3 > & tcap) |
| bool | **[getTermcapBelowCVMLimit](structvfisdi_1_1_e_m_v_conf.md#function-gettermcapbelowcvmlimit)**([Array](structvfisdi_1_1_array.md)< 3 > & tcap) const |
| bool | **[setTACSwitch](structvfisdi_1_1_e_m_v_conf.md#function-settacswitch)**(const [Array](structvfisdi_1_1_array.md)< 5 > & sw) |
| bool | **[getTACSwitch](structvfisdi_1_1_e_m_v_conf.md#function-gettacswitch)**([Array](structvfisdi_1_1_array.md)< 5 > & sw) const |
| bool | **[setIACSwitch](structvfisdi_1_1_e_m_v_conf.md#function-setiacswitch)**(const [Array](structvfisdi_1_1_array.md)< 5 > & sw) |
| bool | **[getIACSwitch](structvfisdi_1_1_e_m_v_conf.md#function-getiacswitch)**([Array](structvfisdi_1_1_array.md)< 5 > & sw) const |
| bool | **[setDataExchangeTags](structvfisdi_1_1_e_m_v_conf.md#function-setdataexchangetags)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & tags) |
| template <unsigned N\> <br>bool | **[setDataExchangeTags](structvfisdi_1_1_e_m_v_conf.md#function-setdataexchangetags)**(const unsigned char(&) v[N]) |
| bool | **[getDataExchangeTags](structvfisdi_1_1_e_m_v_conf.md#function-getdataexchangetags)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & tags) const |
| bool | **[setDCRListIDs](structvfisdi_1_1_e_m_v_conf.md#function-setdcrlistids)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & idlist) |
| bool | **[getDCRListIDs](structvfisdi_1_1_e_m_v_conf.md#function-getdcrlistids)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & idlist) const |
| bool | **[setDCRListRanges](structvfisdi_1_1_e_m_v_conf.md#function-setdcrlistranges)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & rangelist) |
| bool | **[getDCRListRanges](structvfisdi_1_1_e_m_v_conf.md#function-getdcrlistranges)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & rangelist) const |
| bool | **[setApplicationAuthTransactionType](structvfisdi_1_1_e_m_v_conf.md#function-setapplicationauthtransactiontype)**(unsigned char type) |
| bool | **[getApplicationAuthTransactionType](structvfisdi_1_1_e_m_v_conf.md#function-getapplicationauthtransactiontype)**(unsigned char & type) const |
| bool | **[setsetCtlsTransactionLimitODCVM](structvfisdi_1_1_e_m_v_conf.md#function-setsetctlstransactionlimitodcvm)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setsetCtlsTransactionLimitODCVM](structvfisdi_1_1_e_m_v_conf.md#function-setsetctlstransactionlimitodcvm)**(int64_t limit) |
| bool | **[getsetCtlsTransactionLimitODCVM](structvfisdi_1_1_e_m_v_conf.md#function-getsetctlstransactionlimitodcvm)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getsetCtlsTransactionLimitODCVM](structvfisdi_1_1_e_m_v_conf.md#function-getsetctlstransactionlimitodcvm)**(int64_t & limit) const |
| bool | **[setTransactionTypesSale](structvfisdi_1_1_e_m_v_conf.md#function-settransactiontypessale)**(const [Array](structvfisdi_1_1_array.md)< 3 > & type) |
| bool | **[getTransactionTypesSale](structvfisdi_1_1_e_m_v_conf.md#function-gettransactiontypessale)**([Array](structvfisdi_1_1_array.md)< 3 > & type) const |
| bool | **[setTransactionTypesCash](structvfisdi_1_1_e_m_v_conf.md#function-settransactiontypescash)**(const [Array](structvfisdi_1_1_array.md)< 3 > & type) |
| bool | **[getTransactionTypesCash](structvfisdi_1_1_e_m_v_conf.md#function-gettransactiontypescash)**([Array](structvfisdi_1_1_array.md)< 3 > & type) const |
| bool | **[setTransactionTypesCashback](structvfisdi_1_1_e_m_v_conf.md#function-settransactiontypescashback)**(const [Array](structvfisdi_1_1_array.md)< 3 > & type) |
| bool | **[getTransactionTypesCashback](structvfisdi_1_1_e_m_v_conf.md#function-gettransactiontypescashback)**([Array](structvfisdi_1_1_array.md)< 3 > & type) const |
| bool | **[setBeepFreqSuccess](structvfisdi_1_1_e_m_v_conf.md#function-setbeepfreqsuccess)**(unsigned short freq) |
| bool | **[getBeepFreqSuccess](structvfisdi_1_1_e_m_v_conf.md#function-getbeepfreqsuccess)**(unsigned short & freq) const |
| bool | **[setTransactionTypesRefund](structvfisdi_1_1_e_m_v_conf.md#function-settransactiontypesrefund)**(const [Array](structvfisdi_1_1_array.md)< 3 > & type) |
| bool | **[getTransactionTypesRefund](structvfisdi_1_1_e_m_v_conf.md#function-gettransactiontypesrefund)**([Array](structvfisdi_1_1_array.md)< 3 > & type) const |
| bool | **[setBeepFreqAlert](structvfisdi_1_1_e_m_v_conf.md#function-setbeepfreqalert)**(unsigned short freq) |
| bool | **[getBeepFreqAlert](structvfisdi_1_1_e_m_v_conf.md#function-getbeepfreqalert)**(unsigned short & freq) const |
| bool | **[setSecondTapDelay](structvfisdi_1_1_e_m_v_conf.md#function-setsecondtapdelay)**(unsigned char delay) |
| bool | **[getSecondTapDelay](structvfisdi_1_1_e_m_v_conf.md#function-getsecondtapdelay)**(unsigned char & delay) const |
| bool | **[setHostTimeout](structvfisdi_1_1_e_m_v_conf.md#function-sethosttimeout)**(unsigned char tout) |
| bool | **[getHostTimeout](structvfisdi_1_1_e_m_v_conf.md#function-gethosttimeout)**(unsigned char & tout) const |
| bool | **[setHotlist](structvfisdi_1_1_e_m_v_conf.md#function-sethotlist)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & hotlist) |
| template <unsigned N\> <br>bool | **[setHotlist](structvfisdi_1_1_e_m_v_conf.md#function-sethotlist)**(const unsigned char(&) v[N]) |
| bool | **[setHotlist](structvfisdi_1_1_e_m_v_conf.md#function-sethotlist)**(const [TLV](classvfisdi_1_1_t_l_v.md) & hotlist) |
| bool | **[getHotlist](structvfisdi_1_1_e_m_v_conf.md#function-gethotlist)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & hotlist) const |
| bool | **[getHotlist](structvfisdi_1_1_e_m_v_conf.md#function-gethotlist)**([TLV](classvfisdi_1_1_t_l_v.md) & hotlist) const |
| bool | **[setTagsToWriteBeforeGenAC](structvfisdi_1_1_e_m_v_conf.md#function-settagstowritebeforegenac)**(const [TLV](classvfisdi_1_1_t_l_v.md) & ttw) |
| bool | **[getTagsToWriteBeforeGenAC](structvfisdi_1_1_e_m_v_conf.md#function-gettagstowritebeforegenac)**([TLV](classvfisdi_1_1_t_l_v.md) & ttw) const |
| bool | **[setTagsToWriteAfterGenAC](structvfisdi_1_1_e_m_v_conf.md#function-settagstowriteaftergenac)**(const [TLV](classvfisdi_1_1_t_l_v.md) & ttw) |
| bool | **[getTagsToWriteAfterGenAC](structvfisdi_1_1_e_m_v_conf.md#function-gettagstowriteaftergenac)**([TLV](classvfisdi_1_1_t_l_v.md) & ttw) const |
| bool | **[setDynamicReaderLimits](structvfisdi_1_1_e_m_v_conf.md#function-setdynamicreaderlimits)**(const std::vector< [DynamicReaderLimits](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits.md) > & limits) |
| bool | **[getDynamicReaderLimits](structvfisdi_1_1_e_m_v_conf.md#function-getdynamicreaderlimits)**(std::vector< [DynamicReaderLimits](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits.md) > & limits) const |
| bool | **[setTransactionTypeIK](structvfisdi_1_1_e_m_v_conf.md#function-settransactiontypeik)**(unsigned char type) |
| bool | **[getTransactionTypeIK](structvfisdi_1_1_e_m_v_conf.md#function-gettransactiontypeik)**(unsigned char & type) const |
| bool | **[setFloorLimitIK](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimitik)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setFloorLimitIK](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimitik)**(int64_t limit) |
| bool | **[getFloorLimitIK](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimitik)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getFloorLimitIK](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimitik)**(int64_t & limit) const |
| bool | **[setCVMRequiredLimitPK](structvfisdi_1_1_e_m_v_conf.md#function-setcvmrequiredlimitpk)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setCVMRequiredLimitPK](structvfisdi_1_1_e_m_v_conf.md#function-setcvmrequiredlimitpk)**(int64_t limit) |
| bool | **[getCVMRequiredLimitPK](structvfisdi_1_1_e_m_v_conf.md#function-getcvmrequiredlimitpk)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getCVMRequiredLimitPK](structvfisdi_1_1_e_m_v_conf.md#function-getcvmrequiredlimitpk)**(int64_t & limit) const |
| bool | **[setFloorlimitPK](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimitpk)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setFloorlimitPK](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimitpk)**(int64_t limit) |
| bool | **[getFloorlimitPK](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimitpk)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getFloorlimitPK](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimitpk)**(int64_t & limit) const |
| bool | **[setFloorLimitMIR](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimitmir)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setFloorLimitMIR](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimitmir)**(int64_t limit) |
| bool | **[getFloorLimitMIR](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimitmir)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getFloorLimitMIR](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimitmir)**(int64_t & limit) const |
| bool | **[setTransactionLimitNoCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitnocvmmir)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setTransactionLimitNoCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitnocvmmir)**(int64_t limit) |
| bool | **[getTransactionLimitNoCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitnocvmmir)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getTransactionLimitNoCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitnocvmmir)**(int64_t & limit) const |
| bool | **[setTransactionLimitNoCDCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitnocdcvmmir)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setTransactionLimitNoCDCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitnocdcvmmir)**(int64_t limit) |
| bool | **[getTransactionLimitNoCDCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitnocdcvmmir)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getTransactionLimitNoCDCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitnocdcvmmir)**(int64_t & limit) const |
| bool | **[setTransactionLimitCDCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitcdcvmmir)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setTransactionLimitCDCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-settransactionlimitcdcvmmir)**(int64_t limit) |
| bool | **[getTransactionLimitCDCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitcdcvmmir)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getTransactionLimitCDCVMMIR](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionlimitcdcvmmir)**(int64_t & limit) const |
| bool | **[setTPMCapabilitiesMIR](structvfisdi_1_1_e_m_v_conf.md#function-settpmcapabilitiesmir)**(const [Array](structvfisdi_1_1_array.md)< 2 > & caps) |
| bool | **[getTPMCapabilitiesMIR](structvfisdi_1_1_e_m_v_conf.md#function-gettpmcapabilitiesmir)**([Array](structvfisdi_1_1_array.md)< 2 > & caps) const |
| bool | **[setTransactionRecoveryLimitMIR](structvfisdi_1_1_e_m_v_conf.md#function-settransactionrecoverylimitmir)**(unsigned char limit) |
| bool | **[getTransactionRecoveryLimitMIR](structvfisdi_1_1_e_m_v_conf.md#function-gettransactionrecoverylimitmir)**(unsigned char & limit) const |
| bool | **[setAdditionalVersionNumbers](structvfisdi_1_1_e_m_v_conf.md#function-setadditionalversionnumbers)**(const [bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & ver) |
| template <unsigned N\> <br>bool | **[setAdditionalVersionNumbers](structvfisdi_1_1_e_m_v_conf.md#function-setadditionalversionnumbers)**(const unsigned char(&) v[N]) |
| bool | **[getAdditionalVersionNumbers](structvfisdi_1_1_e_m_v_conf.md#function-getadditionalversionnumbers)**([bytevector](structvfisdi_1_1_e_m_v_conf.md#typedef-bytevector) & ver) const |
| bool | **[setTACDefaultMK](structvfisdi_1_1_e_m_v_conf.md#function-settacdefaultmk)**(const [Array](structvfisdi_1_1_array.md)< 5 > & tac) |
| bool | **[getTACDefaultMK](structvfisdi_1_1_e_m_v_conf.md#function-gettacdefaultmk)**([Array](structvfisdi_1_1_array.md)< 5 > & tac) const |
| bool | **[setTACDenialMK](structvfisdi_1_1_e_m_v_conf.md#function-settacdenialmk)**(const [Array](structvfisdi_1_1_array.md)< 5 > & tac) |
| bool | **[getTACDenialMK](structvfisdi_1_1_e_m_v_conf.md#function-gettacdenialmk)**([Array](structvfisdi_1_1_array.md)< 5 > & tac) const |
| bool | **[setTACOnlineMK](structvfisdi_1_1_e_m_v_conf.md#function-settaconlinemk)**(const [Array](structvfisdi_1_1_array.md)< 5 > & tac) |
| bool | **[getTACOnlineMK](structvfisdi_1_1_e_m_v_conf.md#function-gettaconlinemk)**([Array](structvfisdi_1_1_array.md)< 5 > & tac) const |
| bool | **[setFloorLimitMK](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimitmk)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setFloorLimitMK](structvfisdi_1_1_e_m_v_conf.md#function-setfloorlimitmk)**(int64_t limit) |
| bool | **[getFloorLimitMK](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimitmk)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getFloorLimitMK](structvfisdi_1_1_e_m_v_conf.md#function-getfloorlimitmk)**(int64_t & limit) const |
| bool | **[setCVMRequiredLimitMK](structvfisdi_1_1_e_m_v_conf.md#function-setcvmrequiredlimitmk)**(const [BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) |
| bool | **[setCVMRequiredLimitMK](structvfisdi_1_1_e_m_v_conf.md#function-setcvmrequiredlimitmk)**(int64_t limit) |
| bool | **[getCVMRequiredLimitMK](structvfisdi_1_1_e_m_v_conf.md#function-getcvmrequiredlimitmk)**([BCD](classvfisdi_1_1_b_c_d.md)< 6 > & limit) const |
| bool | **[getCVMRequiredLimitMK](structvfisdi_1_1_e_m_v_conf.md#function-getcvmrequiredlimitmk)**(int64_t & limit) const |

## Protected Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[exists](structvfisdi_1_1_e_m_v_conf.md#function-exists)**(unsigned tag1) const |
| bool | **[exists](structvfisdi_1_1_e_m_v_conf.md#function-exists)**(unsigned tag1, unsigned tag2) const |

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
struct vfisdi::EMVConf;
```


SDI EMV configuration context, provides set/get functions for common data elements 

## Public Types Documentation

### typedef bytevector

```cpp
typedef std::vector<unsigned char> bytevector;
```


byte vector typedef 


## Public Functions Documentation

### function setIssuerID

```cpp
bool setIssuerID(
    const Array< 4 > & id
)
```


**Parameters**: 

  * **id** issuer ID (42) 


**Return**: true 

set issuer ID


### function getIssuerID

```cpp
bool getIssuerID(
    Array< 4 > & id
) const
```


**Parameters**: 

  * **id** issuer ID (42) 


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


### function setPOIInfo

```cpp
bool setPOIInfo(
    const bytevector & poi
)
```


**Parameters**: 

  * **poi** POI information (8B) 


**Return**: true 

set POI information


### function getPOIInfo

```cpp
bool getPOIInfo(
    bytevector & poi
) const
```


**Parameters**: 

  * **poi** POI information (8B) 


**Return**: true if successful, false if not found 

get POI information


### function setDefaultAppName

```cpp
bool setDefaultAppName(
    const std::string & appname
)
```


**Parameters**: 

  * **appname** application name (50/DFAB22) 


**Return**: true 

set application name


### function getDefaultAppName

```cpp
bool getDefaultAppName(
    std::string & appname
) const
```


**Parameters**: 

  * **appname** application name (50/DFAB22) 


**Return**: true if successful, false if not found 

get application name


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


### function setAcquirerID

```cpp
bool setAcquirerID(
    const Array< 6 > & acq
)
```


**Parameters**: 

  * **acq** acquirer ID (9F01) 


**Return**: true 

set acquirer ID


### function getAcquirerID

```cpp
bool getAcquirerID(
    Array< 6 > & acq
) const
```


**Parameters**: 

  * **acq** acquirer ID (9F01) 


**Return**: true if successful, false if not found or invalid format 

get acquirer ID


### function setChipAppVersionNumber

```cpp
bool setChipAppVersionNumber(
    const std::vector< unsigned short > & version
)
```


**Parameters**: 

  * **version** version numbers (up to 10) (9F09) 


**Return**: true 

set get chip application version numbers


### function setChipAppVersionNumber

```cpp
template <unsigned N>
inline bool setChipAppVersionNumber(
    const unsigned short(&) v[N]
)
```


**Parameters**: 

  * **version** version numbers (up to 10) (9F09) 


**Return**: true 

set get chip application version numbers


### function getChipAppVersionNumber

```cpp
bool getChipAppVersionNumber(
    std::vector< unsigned short > & version
) const
```


**Parameters**: 

  * **version** version number (9F09) 


**Return**: true if successful, false if not found or invalid format 

get get chip application version number


### function setMerchantCategory

```cpp
bool setMerchantCategory(
    const Array< 2 > & category
)
```


**Parameters**: 

  * **category** merchant category code (9F15) 


**Return**: true 

set merchant category code


### function getMerchantCategory

```cpp
bool getMerchantCategory(
    Array< 2 > & category
) const
```


**Parameters**: 

  * **category** merchant category code (9F15) 


**Return**: true if successful, false if not found or invalid format 

get merchant category code


### function setMerchantID

```cpp
bool setMerchantID(
    const std::string & mid
)
```


**Parameters**: 

  * **mid** merchant identifier (9F16) 


**Return**: true 

set merchant identifier


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


### function setTerminalCountryCode

```cpp
bool setTerminalCountryCode(
    unsigned short country
)
```


**Parameters**: 

  * **country** terminal country code (9F1A) 


**Return**: true 

set terminal country code


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


### function setTerminalID

```cpp
bool setTerminalID(
    const Array< 8 > & id
)
```


**Parameters**: 

  * **id** terminal ID (9F1C) 


**Return**: true 

set terminal ID


### function getTerminalID

```cpp
bool getTerminalID(
    Array< 8 > & id
) const
```


**Parameters**: 

  * **id** terminal ID (9F1C) 


**Return**: true if successful, false if not found or invalid format 

get terminal ID


### function setTerminalRiskManagement

```cpp
bool setTerminalRiskManagement(
    const Array< 8 > & trm
)
```


**Parameters**: 

  * **trm** terminal risk management (9F1D) 


**Return**: true 

set terminal risk management


### function getTerminalRiskManagement

```cpp
bool getTerminalRiskManagement(
    Array< 8 > & trm
) const
```


**Parameters**: 

  * **trm** terminal risk management (9F1D) 


**Return**: true if successful, false if not found or invalid format 

get terminal risk management


### function setIFDSerial

```cpp
bool setIFDSerial(
    const Array< 8 > & serial
)
```


**Parameters**: 

  * **serial** serial number (9F1E) 


**Return**: true 

set IFD serial number


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


### function setTerminalCapabilities

```cpp
bool setTerminalCapabilities(
    const Array< 3 > & caps
)
```


**Parameters**: 

  * **caps** terminal capabilities (9F33) 


**Return**: true 

set terminal capabilities


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


### function setTerminalType

```cpp
bool setTerminalType(
    unsigned char type
)
```


**Parameters**: 

  * **type** terminal type ([EMVTerminalType](namespacevfisdi.md#enum-emvterminaltype)) (9F35) 


**Return**: true 

set terminal type


### function getTerminalType

```cpp
bool getTerminalType(
    unsigned char & type
) const
```


**Parameters**: 

  * **type** terminal type ([EMVTerminalType](namespacevfisdi.md#enum-emvterminaltype)) (9F35) 


**Return**: true if successful, false if not found 

get terminal type


### function setPOSEntryMode

```cpp
bool setPOSEntryMode(
    unsigned char mode
)
```


**Parameters**: 

  * **mode** POS entry mode, should be always 5 (9F39) 


**Return**: true 

set POS entry mode


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


### function setAdditionalCapabilities

```cpp
bool setAdditionalCapabilities(
    const Array< 5 > & caps
)
```


**Parameters**: 

  * **caps** terminal capabilities (9F40) 


**Return**: true 

set additional terminal capabilities


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


### function setMerchantNameLocation

```cpp
bool setMerchantNameLocation(
    const std::string & nameloc
)
```


**Parameters**: 

  * **nameloc** merchant name and location (9F4E) 


**Return**: true if successful, false if length too long 

set merchant name and location


### function getMerchantNameLocation

```cpp
bool getMerchantNameLocation(
    std::string & nameloc
) const
```


**Parameters**: 

  * **nameloc** merchant name and location (9F4E) 


**Return**: true if successful, false if not found 

get merchant name and location


### function setTransactionCategory

```cpp
bool setTransactionCategory(
    unsigned char cat
)
```


**Parameters**: 

  * **cat** transaction category code (9F53) 


**Return**: true 

set transaction category code


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


### function setInterchangeProfile

```cpp
bool setInterchangeProfile(
    const Array< 3 > & icc
)
```


**Parameters**: 

  * **icc** interchange profile (9F53) 


**Return**: true 

set interchange profile


### function getInterchangeProfile

```cpp
bool getInterchangeProfile(
    Array< 3 > & icc
) const
```


**Parameters**: 

  * **icc** interchange profile (9F53) 


**Return**: true if successful, false if not found or invalid format 

get interchange profile


### function setMerchantType

```cpp
bool setMerchantType(
    unsigned char type
)
```


**Parameters**: 

  * **type** merchant type (9F58) 


**Return**: true 

set merchant type


### function getMerchantType

```cpp
bool getMerchantType(
    unsigned char & type
) const
```


**Parameters**: 

  * **type** merchant type (9F58) 


**Return**: true if successful, false if not found 

get merchant type


### function setTerminalTransactionInformation

```cpp
bool setTerminalTransactionInformation(
    const Array< 3 > & info
)
```


**Parameters**: 

  * **info** terminal transaction information (9F59) 


**Return**: true 

set terminal transaction information


### function getTerminalTransactionInformation

```cpp
bool getTerminalTransactionInformation(
    Array< 3 > & info
) const
```


**Parameters**: 

  * **info** terminal transaction information (9F59) 


**Return**: true if successful, false if not found or invalid format 

get terminal transaction information


### function setAppProgramID

```cpp
bool setAppProgramID(
    const bytevector & id
)
```


**Parameters**: 

  * **id** application program ID (9F5A) 


**Return**: true 

set application program ID


### function setAppProgramID

```cpp
template <unsigned N>
inline bool setAppProgramID(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **id** application program ID (9F5A) 


**Return**: true 

set application program ID


### function getAppProgramID

```cpp
bool getAppProgramID(
    bytevector & id
) const
```


**Parameters**: 

  * **id** application program ID (9F5A) 


**Return**: true if successful, false if not found 

get application program ID


### function setDataStoreRequestedOperatorID

```cpp
bool setDataStoreRequestedOperatorID(
    const Array< 8 > & id
)
```


**Parameters**: 

  * **id** ID for data storage (9F5C) 


**Return**: true 

set ID for data storage


### function getDataStoreRequestedOperatorID

```cpp
bool getDataStoreRequestedOperatorID(
    Array< 8 > & id
) const
```


**Parameters**: 

  * **id** ID for data storage (9F5C) 


**Return**: true if successful, false if not found or invalid format 

get ID for data storage


### function setReceiptRequiredLimit

```cpp
bool setReceiptRequiredLimit(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** receipt required limit (9F5D) 


**Return**: true 

set receipt required limit


### function setReceiptRequiredLimit

```cpp
bool setReceiptRequiredLimit(
    int64_t limit
)
```


**Parameters**: 

  * **limit** receipt required limit (9F5D) 


**Return**: true if successful, false in case of overflow 

set receipt required limit


### function getReceiptRequiredLimit

```cpp
bool getReceiptRequiredLimit(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** receipt required limit (9F5D) 


**Return**: true if successful, false if not found or invalid format 

get receipt required limit


### function getReceiptRequiredLimit

```cpp
bool getReceiptRequiredLimit(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** receipt required limit (9F5D) 


**Return**: true if successful, false if not found or invalid format 

get receipt required limit


### function setOptionStatus

```cpp
bool setOptionStatus(
    const Array< 2 > & status
)
```


**Parameters**: 

  * **status** option status (9F5E) 


**Return**: true 

set option status


### function getOptionStatus

```cpp
bool getOptionStatus(
    Array< 2 > & status
) const
```


**Parameters**: 

  * **status** option status (9F5E) 


**Return**: true if successful, false if not found or invalid format 

get option status


### function setTransactionQualifier

```cpp
bool setTransactionQualifier(
    const Array< 4 > & q
)
```


**Parameters**: 

  * **q** transaction qualifier (9F66) 


**Return**: true 

set transaction qualifier


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


### function setMSRVersionNumber

```cpp
bool setMSRVersionNumber(
    const std::vector< unsigned short > & ver
)
```


**Parameters**: 

  * **ver** up to 10 version numbers (9F6D) 


**Return**: true 

set MSR version numbers


### function setMSRVersionNumber

```cpp
template <unsigned N>
inline bool setMSRVersionNumber(
    const unsigned short(&) v[N]
)
```


**Parameters**: 

  * **ver** up to 10 version numbers (9F6D) 


**Return**: true 

set MSR version numbers


### function getMSRVersionNumber

```cpp
bool getMSRVersionNumber(
    std::vector< unsigned short > & ver
) const
```


**Parameters**: 

  * **ver** up to 10 version numbers (9F6D) 


**Return**: true if successful, false if not found or invalid format 

get MSR version numbers


### function setReaderCapabilities

```cpp
bool setReaderCapabilities(
    unsigned char caps
)
```


**Parameters**: 

  * **caps** reader capabilities (9F6D) 


**Return**: true 

set reader capabilities


### function getReaderCapabilities

```cpp
bool getReaderCapabilities(
    unsigned char & caps
) const
```


**Parameters**: 

  * **caps** reader capabilities (9F6D) 


**Return**: true if successful, false if not found 

get reader capabilities


### function setTransactionCapabilities

```cpp
bool setTransactionCapabilities(
    const Array< 4 > & caps
)
```


**Parameters**: 

  * **caps** transaction capabilities (9F6E) 


**Return**: true 

set transaction capabilities


### function getTransactionCapabilities

```cpp
bool getTransactionCapabilities(
    Array< 4 > & caps
) const
```


**Parameters**: 

  * **caps** transaction capabilities (9F6E) 


**Return**: true if successful, false if not found or invalid format 

get transaction capabilities


### function setTerminalTransactionData

```cpp
bool setTerminalTransactionData(
    const bytevector & data
)
```


**Parameters**: 

  * **data** terminal transaction data (9F76) 


**Return**: true 

set terminal transaction data


### function setTerminalTransactionData

```cpp
template <unsigned N>
inline bool setTerminalTransactionData(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **data** terminal transaction data (9F76) 


**Return**: true 

set terminal transaction data


### function getTerminalTransactionData

```cpp
bool getTerminalTransactionData(
    bytevector & data
) const
```


**Parameters**: 

  * **data** terminal transaction data (9F76) 


**Return**: true if successful, false if not found 

get terminal transaction data


### function setMerchantCustomData

```cpp
bool setMerchantCustomData(
    const Array< 20 > & data
)
```


**Parameters**: 

  * **data** merchant data (9F7C) 


**Return**: true 

set merchant data


### function getMerchantCustomData

```cpp
bool getMerchantCustomData(
    Array< 20 > & data
) const
```


**Parameters**: 

  * **data** merchant data (9F7C) 


**Return**: true if successful, false if not found or invalid format 

get merchant data


### function getLibVersion

```cpp
bool getLibVersion(
    std::string & version
) const
```


**Parameters**: 

  * **version** kernel version (DF11) 


**Return**: true if successful, false if not found 

get library version


### function getEMVCOChecksum

```cpp
bool getEMVCOChecksum(
    std::string & chk
) const
```


**Parameters**: 

  * **chk** EMVCO checksum (DF12) 


**Return**: true if successful, false if not found 

get EMVCO checksum


### function setEMVCOChecksumParameter

```cpp
bool setEMVCOChecksumParameter(
    const Array< 5 > & cp
)
```


**Parameters**: 

  * **cp** EMVCO checksum parameter (DF13) 


**Return**: true 

set EMVCO checksum parameter


### function setEMVCOChecksumParameter

```cpp
inline bool setEMVCOChecksumParameter(
    const EMVChecksumOptions & cp
)
```


**Parameters**: 

  * **cp** EMVCO checksum parameter (DF13) 


**Return**: true 

set EMVCO checksum parameter


### function getEMVCOChecksumParameter

```cpp
bool getEMVCOChecksumParameter(
    Array< 5 > & cp
) const
```


**Parameters**: 

  * **cp** EMVCO checksum parameter (DF13) 


**Return**: true if successful, false if not found or invalid format 

get EMVCO checksum parameter


### function getEMVCOChecksumParameter

```cpp
inline bool getEMVCOChecksumParameter(
    EMVChecksumOptions & cp
) const
```


**Parameters**: 

  * **cp** EMVCO checksum parameter (DF13) 


**Return**: true if successful, false if not found or invalid format 

get EMVCO checksum parameter


### function setOfflineOnly

```cpp
bool setOfflineOnly(
    bool flag
)
```


**Parameters**: 

  * **flag** EMV offline only processing (DF15) 


**Return**: true 

**Note**: deprecated, use [setTACIACDefaultHandling()](structvfisdi_1_1_e_m_v_conf.md#function-settaciacdefaulthandling) instead 

set EMV offline only processing


### function getOfflineOnly

```cpp
bool getOfflineOnly(
    bool & flag
) const
```


**Parameters**: 

  * **flag** EMV offline only processing (DF15) 


**Return**: true if successful, false if not found 

**Note**: deprecated, use [setTACIACDefaultHandling()](structvfisdi_1_1_e_m_v_conf.md#function-settaciacdefaulthandling) instead 

get EMV offline only processing


### function setTACIACDefaultHandling

```cpp
bool setTACIACDefaultHandling(
    unsigned char def
)
```


**Parameters**: 

  * **def** TAC IAC default handling 


**Return**: true 

set EMV Ct TAC IAC default handling ([EMVTACIACDefaultHandling](namespacevfisdi.md#enum-emvtaciacdefaulthandling)) (DF15) 


### function getTACIACDefaultHandling

```cpp
bool getTACIACDefaultHandling(
    unsigned char & def
) const
```


**Parameters**: 

  * **def** TAC IAC default handling 


**Return**: true if successful, false if not found or invalid format 

get EMV Ct TAC IAC default handling ([EMVTACIACDefaultHandling](namespacevfisdi.md#enum-emvtaciacdefaulthandling)) (DF15) 


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


### function setSpecialTransactions

```cpp
bool setSpecialTransactions(
    const EMVSpecialTransactions & tx
)
```


**Parameters**: 

  * **tx** list of special allowed transactions (DF1C/DFAB05) 


**Return**: true 

set list of special allowed transactions (manual reversal, refund, reservation, tip, Referral)


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


### function setPriorityApplications

```cpp
bool setPriorityApplications(
    const std::vector< bytevector > & apps
)
```


**Parameters**: 

  * **apps** priority applications (DF1D/DFAB04) 


**Return**: true 

set list of priority applications. To delete all applications set a list containing a single, empty application. 


### function getPriorityApplications

```cpp
bool getPriorityApplications(
    std::vector< bytevector > & apps
) const
```


**Parameters**: 

  * **apps** priority applications (DF1D/DFAB04) 


**Return**: true if successful, false if not found 

get list of priority applications


### function setASI

```cpp
bool setASI(
    unsigned char asi
)
```


**Parameters**: 

  * **asi** application selection indicator (DF20/DFAB02) 


**Return**: true 

set application selection indicator


### function getASI

```cpp
bool getASI(
    unsigned char & asi
) const
```


**Parameters**: 

  * **asi** application selection indicator (DF20/DFAB02) 


**Return**: true if successful, false if not found 

get application selection indicator


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


### function setMaxPercentOnline

```cpp
bool setMaxPercentOnline(
    const BCD< 1 > & p
)
```


**Parameters**: 

  * **p** percentage (DF25) 


**Return**: true 

set maximum target percentage for random online selection during risk management


### function setMaxPercentOnline

```cpp
bool setMaxPercentOnline(
    int p
)
```


**Parameters**: 

  * **p** percentage (DF25) 


**Return**: true if successful, false in case of overflow 

set maximum target percentage for random online selection during risk management


### function getMaxPercentOnline

```cpp
bool getMaxPercentOnline(
    BCD< 1 > & p
) const
```


**Parameters**: 

  * **p** percentage (DF25) 


**Return**: true if successful, false if not found or invalid format 

get maximum target percentage for random online selection during risk management


### function getMaxPercentOnline

```cpp
bool getMaxPercentOnline(
    int & p
) const
```


**Parameters**: 

  * **p** percentage (DF25) 


**Return**: true if successful, false if not found or invalid format 

get maximum target percentage for random online selection during risk management


### function setPercentOnline

```cpp
bool setPercentOnline(
    const BCD< 1 > & p
)
```


**Parameters**: 

  * **p** percentage (DF26) 


**Return**: true 

set target percentage for random online selection during risk management


### function setPercentOnline

```cpp
bool setPercentOnline(
    int p
)
```


**Parameters**: 

  * **p** percentage (DF26) 


**Return**: true if successful, false in case of overflow 

set target percentage for random online selection during risk management


### function getPercentOnline

```cpp
bool getPercentOnline(
    BCD< 1 > & p
) const
```


**Parameters**: 

  * **p** percentage (DF26) 


**Return**: true if successful, false if not found or invalid format 

get target percentage for random online selection during risk management


### function getPercentOnline

```cpp
bool getPercentOnline(
    int & p
) const
```


**Parameters**: 

  * **p** percentage (DF26) 


**Return**: true if successful, false if not found or invalid format 

get target percentage for random online selection during risk management


### function setDefaultTDOL

```cpp
bool setDefaultTDOL(
    const bytevector & tdol
)
```


**Parameters**: 

  * **tdol** TDOL (DF27) 


**Return**: true 

set TDOL


### function setDefaultTDOL

```cpp
template <unsigned N>
inline bool setDefaultTDOL(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **tdol** TDOL (DF27) 


**Return**: true 

set TDOL


### function getDefaultTDOL

```cpp
bool getDefaultTDOL(
    bytevector & tdol
) const
```


**Parameters**: 

  * **tdol** TDOL (DF27) 


**Return**: true if successful, false if not found 

get TDOL


### function setDefaultDDOL

```cpp
bool setDefaultDDOL(
    const bytevector & ddol
)
```


**Parameters**: 

  * **ddol** DDOL (DF28/DFAB51) 


**Return**: true 

set DDOL


### function setDefaultDDOL

```cpp
template <unsigned N>
inline bool setDefaultDDOL(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **ddol** DDOL (DF28/DFAB51) 


**Return**: true 

set DDOL


### function getDefaultDDOL

```cpp
bool getDefaultDDOL(
    bytevector & ddol
) const
```


**Parameters**: 

  * **ddol** DDOL (DF28/DFAB51) 


**Return**: true if successful, false if not found 

get DDOL


### function setAdditionalTags

```cpp
bool setAdditionalTags(
    const bytevector & tags
)
```


**Parameters**: 

  * **tags** additional tags (DF29/DFAB20) 


**Return**: true 

set additional terminal tags


### function setAdditionalTags

```cpp
template <unsigned N>
inline bool setAdditionalTags(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **tags** additional tags (DF29/DFAB20) 


**Return**: true 

set additional terminal tags


### function getAdditionalTags

```cpp
bool getAdditionalTags(
    bytevector & tags
) const
```


**Parameters**: 

  * **tags** additional tags (DF29/DFAB20) 


**Return**: true if successful, false if not found 

get additional terminal tags


### function setMandatoryTags

```cpp
bool setMandatoryTags(
    const std::vector< unsigned > & tags
)
```


**Parameters**: 

  * **tags** list of mandatory tags (DF2A) 


**Return**: true 

set mandatory tags


### function setMandatoryTags

```cpp
template <unsigned N>
inline bool setMandatoryTags(
    const unsigned(&) v[N]
)
```


**Parameters**: 

  * **tags** list of mandatory tags (DF2A) 


**Return**: true 

set mandatory tags


### function getMandatoryTags

```cpp
bool getMandatoryTags(
    std::vector< unsigned > & tags
) const
```


**Parameters**: 

  * **tags** list of mandatory tags (DF2A) 


**Return**: true if successful, false if not found 

get mandatory tags


### function setAppFlowCapabilities

```cpp
bool setAppFlowCapabilities(
    const Array< 5 > & caps
)
```


**Parameters**: 

  * **caps** capabilities (DF2B/DFAB03) 


**Return**: true 

set application flow capabilities


### function setAppFlowCapabilities

```cpp
inline bool setAppFlowCapabilities(
    const EMVAppFlowCapabilities & caps
)
```


**Parameters**: 

  * **caps** capabilities (DF2B/DFAB03) 


**Return**: true 

set application flow capabilities


### function getAppFlowCapabilities

```cpp
bool getAppFlowCapabilities(
    Array< 5 > & caps
) const
```


**Parameters**: 

  * **caps** capabilities (DF2B/DFAB03) 


**Return**: true if successful, false if not found or invalid format 

get application flow capabilities


### function getAppFlowCapabilities

```cpp
inline bool getAppFlowCapabilities(
    EMVAppFlowCapabilities & caps
) const
```


**Parameters**: 

  * **caps** capabilities (DF2B/DFAB03) 


**Return**: true if successful, false if not found or invalid format 

get application flow capabilities


### function setAdditionalTagsCRD

```cpp
bool setAdditionalTagsCRD(
    const bytevector & tags
)
```


**Parameters**: 

  * **tags** additional tags (DF2C/DFAB21) 


**Return**: true 

set additional ICC tags


### function setAdditionalTagsCRD

```cpp
template <unsigned N>
inline bool setAdditionalTagsCRD(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **tags** additional tags (DF2C/DFAB21) 


**Return**: true 

set additional ICC tags


### function getAdditionalTagsCRD

```cpp
bool getAdditionalTagsCRD(
    bytevector & tags
) const
```


**Parameters**: 

  * **tags** additional tags (DF2C/DFAB21) 


**Return**: true if successful, false if not found 

get additional ICC tags


### function setEMVApplication

```cpp
bool setEMVApplication(
    unsigned char emv
)
```


**Parameters**: 

  * **emv** EMV application ([EMVApplication](namespacevfisdi.md#enum-emvapplication)) (DF2D) 


**Return**: true 

set EMV application


### function getEMVApplication

```cpp
bool getEMVApplication(
    unsigned char & emv
) const
```


**Parameters**: 

  * **emv** EMV application ([EMVApplication](namespacevfisdi.md#enum-emvapplication)) (DF2D) 


**Return**: true if successful, false if not found 

get EMV application


### function setAIPNoCVM

```cpp
bool setAIPNoCVM(
    unsigned char cvm
)
```


**Parameters**: 

  * **cvm** CVM not supported ([EMVAIPNoCVM](namespacevfisdi.md#enum-emvaipnocvm)) (DF2E) 


**Return**: true 

set AIP 'CVM not supported'


### function getAIPNoCVM

```cpp
bool getAIPNoCVM(
    unsigned char & cvm
) const
```


**Parameters**: 

  * **cvm** CVM not supported ([EMVAIPNoCVM](namespacevfisdi.md#enum-emvaipnocvm)) (DF2E) 


**Return**: true if successful, false if not found 

get AIP 'CVM not supported'


### function setCustomCVM

```cpp
bool setCustomCVM(
    unsigned char cvm
)
```


**Parameters**: 

  * **cvm** customer CVM (DF2F) 


**Return**: true 

set custom CVM


### function getCustomCVM

```cpp
bool getCustomCVM(
    unsigned char & cvm
) const
```


**Parameters**: 

  * **cvm** customer CVM (DF2F) 


**Return**: true if successful, false if not found 

get custom CVM


### function setAdditionalTerminalCapabilities

```cpp
bool setAdditionalTerminalCapabilities(
    const Array< 5 > & caps
)
```


**Parameters**: 

  * **caps** capabilities (DF3A) 


**Return**: true 

set additional terminal capabilities


### function getAdditionalTerminalCapabilities

```cpp
bool getAdditionalTerminalCapabilities(
    Array< 5 > & caps
) const
```


**Parameters**: 

  * **caps** capabilities (DF3A) 


**Return**: true if successful, false if not found or invalid format 

get additional terminal capabilities


### function setCDAProcessing

```cpp
bool setCDAProcessing(
    unsigned char cda
)
```


**Parameters**: 

  * **cda** CDA processing ([EMVCDAMode](namespacevfisdi.md#enum-emvcdamode)) (DF3E) 


**Return**: true 

set CDA processing


### function getCDAProcessing

```cpp
bool getCDAProcessing(
    unsigned char & cda
) const
```


**Parameters**: 

  * **cda** CDA processing ([EMVCDAMode](namespacevfisdi.md#enum-emvcdamode)) (DF3E) 


**Return**: true if successful, false if not found 

get CDA processing


### function getObfuscatedPANString

```cpp
bool getObfuscatedPANString(
    std::string & pan
) const
```


**Parameters**: 

  * **pan** obfuscated PAN (DF44) 


**Return**: true if successful, false if not found 

get obfuscated PAN


### function getObfuscatedTrack2String

```cpp
bool getObfuscatedTrack2String(
    std::string & track
) const
```


**Parameters**: 

  * **track** obfuscated track 2 (DF49) 


**Return**: true if successful, false if not found 

get obfuscated track 2


### function setSecurityLimit

```cpp
bool setSecurityLimit(
    unsigned limit
)
```


**Parameters**: 

  * **limit** Security limit (DF49) 


**Return**: true 

set Security limit


### function getSecurityLimit

```cpp
bool getSecurityLimit(
    unsigned & limit
) const
```


**Parameters**: 

  * **limit** Security limit (DF49) 


**Return**: true if successful, false if not found 

get Security limit


### function setCapabilitiesBelowLimit

```cpp
bool setCapabilitiesBelowLimit(
    const Array< 3 > & caps
)
```


**Parameters**: 

  * **caps** capabilities below limit (DF4A) 


**Return**: true 

set capabilities below limit


### function getCapabilitiesBelowLimit

```cpp
bool getCapabilitiesBelowLimit(
    Array< 3 > & caps
) const
```


**Parameters**: 

  * **caps** capabilities below limit (DF4A) 


**Return**: true if successful, false if not found or invalid format 

get capabilities below limit


### function setBeepVolume

```cpp
bool setBeepVolume(
    unsigned short volume
)
```


**Parameters**: 

  * **volume** beep volume (DF62) 


**Return**: true 

set beep volume


### function getBeepVolume

```cpp
bool getBeepVolume(
    unsigned short & volume
) const
```


**Parameters**: 

  * **volume** beep volume (DF62) 


**Return**: true if successful, false if not found 

get beep volume


### function getKernelVersion

```cpp
bool getKernelVersion(
    std::string & version
) const
```


**Parameters**: 

  * **version** kernel version (DF65) 


**Return**: true if successful, false if not found 

get kernel version


### function setConfigCommand

```cpp
bool setConfigCommand(
    unsigned char cmd
)
```


**Parameters**: 

  * **cmd** configuration command (DF66) 


**Return**: true 

set configuration command


### function getConfigCommand

```cpp
bool getConfigCommand(
    unsigned char & cmd
) const
```


**Parameters**: 

  * **cmd** configuration command (DF66) 


**Return**: true if successful, false if not found 

get configuration command


### function setSupportedLanguages

```cpp
bool setSupportedLanguages(
    const bytevector & lang
)
```


**Parameters**: 

  * **lang** array containing the supported languages (DF67) 


**Return**: true 

set supported languages


### function setSupportedLanguages

```cpp
template <unsigned N>
inline bool setSupportedLanguages(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **lang** array containing the supported languages (DF67) 


**Return**: true 

set supported languages


### function getSupportedLanguages

```cpp
bool getSupportedLanguages(
    bytevector & lang
) const
```


**Parameters**: 

  * **lang** array containing the supported languages (DF67) 


**Return**: true if successful, false if not found 

get supported languages


### function setRetryLimit

```cpp
bool setRetryLimit(
    unsigned char limit
)
```


**Parameters**: 

  * **limit** limit of retries (DF6D) 


**Return**: true 

set limit of retries


### function getRetryLimit

```cpp
bool getRetryLimit(
    unsigned char & limit
) const
```


**Parameters**: 

  * **limit** limit of retries (DF6D) 


**Return**: true if successful, false if not found 

get limit of retries


### function getL1DriverVersion

```cpp
bool getL1DriverVersion(
    std::string & version
) const
```


**Parameters**: 

  * **version** L1 driver version (CT or CTLS) 


**Return**: true if successful, false if not found 

get level 1 CT driver version (DF6B) or CTLS PCD version (DF6F) If both (DF6B) or (DF6F) exist, (DF6B) is returned. In this case, please use [getCtlsL1DriverVersion()](structvfisdi_1_1_e_m_v_conf.md#function-getctlsl1driverversion) to obtain CLTS driver version. 


### function getCtL1DriverVersion

```cpp
bool getCtL1DriverVersion(
    std::string & version
) const
```


**Parameters**: 

  * **version** L1 driver version (CT) 


**Return**: true if successful, false if not found 

get level 1 CT driver version (DF6B) 


### function getCtlsL1DriverVersion

```cpp
bool getCtlsL1DriverVersion(
    std::string & version
) const
```


**Parameters**: 

  * **version** L1 driver version (CTLS) 


**Return**: true if successful, false if not found 

get level 1 CTLS PCD version (DF6F) 


### function setShortKernelID

```cpp
bool setShortKernelID(
    unsigned char id
)
```


**Parameters**: 

  * **id** short kernel ID (DF810C) 


**Return**: true 

set short kernel ID


### function getShortKernelID

```cpp
bool getShortKernelID(
    unsigned char & id
) const
```


**Parameters**: 

  * **id** short kernel ID (DF810C) 


**Return**: true if successful, false if not found 

get short kernel ID


### function setProceedToFirstWriteFlag

```cpp
bool setProceedToFirstWriteFlag(
    unsigned char flag
)
```


**Parameters**: 

  * **flag** flag (DF8110) 


**Return**: true 

set proceed to first write flag


### function getProceedToFirstWriteFlag

```cpp
bool getProceedToFirstWriteFlag(
    unsigned char & flag
) const
```


**Parameters**: 

  * **flag** flag (DF8110) 


**Return**: true in case of success, false if not found 

get proceed to first write flag


### function setTagsToRead

```cpp
bool setTagsToRead(
    const bytevector & ttr
)
```


**Parameters**: 

  * **ttr** tags to read (DF8112) 


**Return**: true 

set tags to read


### function setTagsToRead

```cpp
template <unsigned N>
inline bool setTagsToRead(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **ttr** tags to read (DF8112) 


**Return**: true 

set tags to read


### function getTagsToRead

```cpp
bool getTagsToRead(
    bytevector & ttr
) const
```


**Parameters**: 

  * **ttr** tags to read (DF8112) 


**Return**: true if successful, false if not found 

get tags to read


### function setCardDataInputCapability

```cpp
bool setCardDataInputCapability(
    unsigned char cap
)
```


**Parameters**: 

  * **cap** input capability (DF8117) 


**Return**: true 

set card data input capability of the terminal and reader


### function getCardDataInputCapability

```cpp
bool getCardDataInputCapability(
    unsigned char & cap
) const
```


**Parameters**: 

  * **cap** input capability (DF8117) 


**Return**: true if successful, false if not found 

get card data input capability of the terminal and reader


### function setChipCVMAboveLimit

```cpp
bool setChipCVMAboveLimit(
    unsigned char cvm
)
```


**Parameters**: 

  * **cvm** CVM method above limit ([EMVChipCVMCapability](namespacevfisdi.md#enum-emvchipcvmcapability)) (DF8118) 


**Return**: true 

set chip CVM method above limit


### function getChipCVMAboveLimit

```cpp
bool getChipCVMAboveLimit(
    unsigned char & cvm
) const
```


**Parameters**: 

  * **cvm** CVM method above limit ([EMVChipCVMCapability](namespacevfisdi.md#enum-emvchipcvmcapability)) (DF8118) 


**Return**: true if successful, false if not found 

get chip CVM method above limit


### function setChipCVMBelowLimit

```cpp
bool setChipCVMBelowLimit(
    unsigned char cvm
)
```


**Parameters**: 

  * **cvm** CVM method below limit ([EMVChipCVMCapability](namespacevfisdi.md#enum-emvchipcvmcapability)) (DF8119) 


**Return**: true 

set chip CVM method below limit


### function getChipCVMBelowLimit

```cpp
bool getChipCVMBelowLimit(
    unsigned char & cvm
) const
```


**Parameters**: 

  * **cvm** CVM method below limit ([EMVChipCVMCapability](namespacevfisdi.md#enum-emvchipcvmcapability)) (DF8119) 


**Return**: true if successful, false if not found 

get chip CVM method below limit


### function setKernelConfiguration

```cpp
bool setKernelConfiguration(
    unsigned char conf
)
```


**Parameters**: 

  * **conf** kernel configuration (DF811B) 


**Return**: true 

set kernel configuration


### function getKernelConfiguration

```cpp
bool getKernelConfiguration(
    unsigned char & conf
) const
```


**Parameters**: 

  * **conf** kernel configuration (DF811B) 


**Return**: true if successful, false if not found 

get kernel configuration


### function setTornTransactionLifetime

```cpp
bool setTornTransactionLifetime(
    unsigned short ttl
)
```


**Parameters**: 

  * **ttl** torn transaction lifetime in seconds (DF811C) 


**Return**: true 

set torn transaction lifetime in seconds


### function getTornTransactionLifetime

```cpp
bool getTornTransactionLifetime(
    unsigned short & ttl
) const
```


**Parameters**: 

  * **ttl** torn transaction lifetime in seconds (DF811C) 


**Return**: true if successful, false if not found 

get torn transaction lifetime in seconds


### function setTornTransactionNumber

```cpp
bool setTornTransactionNumber(
    unsigned char num
)
```


**Parameters**: 

  * **num** number of torn transaction (DF811D) 


**Return**: true 

set number of torn transaction


### function getTornTransactionNumber

```cpp
bool getTornTransactionNumber(
    unsigned char & num
) const
```


**Parameters**: 

  * **num** number of torn transaction (DF811D) 


**Return**: true if successful, false if not found 

get number of torn transaction


### function setMagstripeCVMAboveLimit

```cpp
bool setMagstripeCVMAboveLimit(
    unsigned char cvm
)
```


**Parameters**: 

  * **cvm** CVM method above limit ([EMVMsrCVMCapability](namespacevfisdi.md#enum-emvmsrcvmcapability)) (DF811E) 


**Return**: true 

set MSR CVM method above limit


### function getMagstripeCVMAboveLimit

```cpp
bool getMagstripeCVMAboveLimit(
    unsigned char & cvm
) const
```


**Parameters**: 

  * **cvm** CVM method above limit ([EMVMsrCVMCapability](namespacevfisdi.md#enum-emvmsrcvmcapability)) (DF811E) 


**Return**: true if successful, false if not found 

get MSR CVM method above limit


### function setSecurityCapability

```cpp
bool setSecurityCapability(
    unsigned char cap
)
```


**Parameters**: 

  * **cap** security capability of the kernel (DF811F) 


**Return**: true 

set security capability of the kernel


### function getSecurityCapability

```cpp
bool getSecurityCapability(
    unsigned char & cap
) const
```


**Parameters**: 

  * **cap** security capability of the kernel (DF811F) 


**Return**: true if successful, false if not found 

get security capability of the kernel


### function setTransactionLimitNoCVMOnDevice

```cpp
bool setTransactionLimitNoCVMOnDevice(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** transaction limit for no on-device CVM (DF8124) 


**Return**: true 

set transaction limit for no on-device CVM


### function setTransactionLimitNoCVMOnDevice

```cpp
bool setTransactionLimitNoCVMOnDevice(
    int64_t limit
)
```


**Parameters**: 

  * **limit** transaction limit for no on-device CVM (DF8124) 


**Return**: true if successful, false in case of overflow 

set transaction limit for no on-device CVM


### function getTransactionLimitNoCVMOnDevice

```cpp
bool getTransactionLimitNoCVMOnDevice(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** transaction limit for no on-device CVM (DF8124) 


**Return**: true if successful, false if not found or invalid format 

get transaction limit for no on-device CVM


### function getTransactionLimitNoCVMOnDevice

```cpp
bool getTransactionLimitNoCVMOnDevice(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** transaction limit for no on-device CVM (DF8124) 


**Return**: true if successful, false if not found or invalid format 

get transaction limit for no on-device CVM


### function setTransactionLimitCVMOnDevice

```cpp
bool setTransactionLimitCVMOnDevice(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** transaction limit for on-device CVM (DF8125) 


**Return**: true 

set transaction limit for on-device CVM


### function setTransactionLimitCVMOnDevice

```cpp
bool setTransactionLimitCVMOnDevice(
    int64_t limit
)
```


**Parameters**: 

  * **limit** transaction limit for on-device CVM (DF8125) 


**Return**: true if successful, false in case of overflow 

set transaction limit for on-device CVM


### function getTransactionLimitCVMOnDevice

```cpp
bool getTransactionLimitCVMOnDevice(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** transaction limit for on-device CVM (DF8125) 


**Return**: true if successful, false if not found or invalid format 

get transaction limit for on-device CVM


### function getTransactionLimitCVMOnDevice

```cpp
bool getTransactionLimitCVMOnDevice(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** transaction limit for on-device CVM (DF8125) 


**Return**: true if successful, false if not found or invalid format 

get transaction limit for on-device CVM


### function setDataExchangeTimeout

```cpp
bool setDataExchangeTimeout(
    unsigned short tout
)
```


**Parameters**: 

  * **tout** data exchange timeout in ms (DF8127) 


**Return**: true 

set data exchange timeout in ms


### function getDataExchangeTimeout

```cpp
bool getDataExchangeTimeout(
    unsigned short & tout
) const
```


**Parameters**: 

  * **tout** data exchange timeout in ms (DF8127) 


**Return**: true if successful, false if not found 

get data exchange timeout in ms


### function setMagstripeCVMBelowLimit

```cpp
bool setMagstripeCVMBelowLimit(
    unsigned char cvm
)
```


**Parameters**: 

  * **cvm** CVM method below limit ([EMVMsrCVMCapability](namespacevfisdi.md#enum-emvmsrcvmcapability)) (DF812C) 


**Return**: true 

set MSR CVM method below limit


### function getMagstripeCVMBelowLimit

```cpp
bool getMagstripeCVMBelowLimit(
    unsigned char & cvm
) const
```


**Parameters**: 

  * **cvm** CVM method below limit ([EMVMsrCVMCapability](namespacevfisdi.md#enum-emvmsrcvmcapability)) (DF812C) 


**Return**: true if successful, false if not found 

get MSR CVM method below limit


### function setMessageHoldTime

```cpp
bool setMessageHoldTime(
    const BCD< 3 > & time
)
```


**Parameters**: 

  * **time** hold time (DF812D) 


**Return**: true 

set message hold time in 100ms units


### function setMessageHoldTime

```cpp
bool setMessageHoldTime(
    int time
)
```


**Parameters**: 

  * **time** hold time (DF812D) 


**Return**: true if successful, false in case of overflow 

set message hold time in 100ms units


### function getMessageHoldTime

```cpp
bool getMessageHoldTime(
    BCD< 3 > & time
) const
```


**Parameters**: 

  * **time** hold time (DF812D) 


**Return**: true if successful, false if not found or invalid format 

get message hold time in 100ms units


### function getMessageHoldTime

```cpp
bool getMessageHoldTime(
    int & time
) const
```


**Parameters**: 

  * **time** hold time (DF812D) 


**Return**: true if successful, false if not found or invalid format 

get message hold time in 100ms units


### function setFieldOffTime

```cpp
bool setFieldOffTime(
    unsigned char time
)
```


**Parameters**: 

  * **time** off time in units of 100ms (DF8130) 


**Return**: true 

set field off time after the transaction is completed


### function getFieldOffTime

```cpp
bool getFieldOffTime(
    unsigned char & time
) const
```


**Parameters**: 

  * **time** off time in units of 100ms (DF8130) 


**Return**: true if successful, false if not found 

get field off time after the transaction is completed


### function setPhoneMessageTable

```cpp
bool setPhoneMessageTable(
    const bytevector & pmt
)
```


**Parameters**: 

  * **pmt** phone message table (DF8131) 


**Return**: true 

set phone message table


### function setPhoneMessageTable

```cpp
template <unsigned N>
inline bool setPhoneMessageTable(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **pmt** phone message table (DF8131) 


**Return**: true 

set phone message table


### function getPhoneMessageTable

```cpp
bool getPhoneMessageTable(
    bytevector & pmt
) const
```


**Parameters**: 

  * **pmt** phone message table (DF8131) 


**Return**: true if successful, false if not found 

get phone message table


### function setRelayResistanceMinGracePeriod

```cpp
bool setRelayResistanceMinGracePeriod(
    unsigned short time
)
```


**Parameters**: 

  * **time** minimum relay resistance grace period (DF8132) 


**Return**: true 

set minimum relay resistance grace period


### function getRelayResistanceMinGracePeriod

```cpp
bool getRelayResistanceMinGracePeriod(
    unsigned short & time
) const
```


**Parameters**: 

  * **time** minimum relay resistance grace period (DF8132) 


**Return**: true if successful, false if not found 

get minimum relay resistance grace period


### function setRelayResistanceMaxGracePeriod

```cpp
bool setRelayResistanceMaxGracePeriod(
    unsigned short time
)
```


**Parameters**: 

  * **time** maximum relay resistance grace period (DF8133) 


**Return**: true 

set maximum relay resistance grace period


### function getRelayResistanceMaxGracePeriod

```cpp
bool getRelayResistanceMaxGracePeriod(
    unsigned short & time
) const
```


**Parameters**: 

  * **time** maximum relay resistance grace period (DF8133) 


**Return**: true if successful, false if not found 

get maximum relay resistance grace period


### function setRelayResistanceCAPDUTime

```cpp
bool setRelayResistanceCAPDUTime(
    unsigned short time
)
```


**Parameters**: 

  * **time** expected transmission time for C-APDU (DF8134) 


**Return**: true 

set expected transmission time for C-APDU


### function getRelayResistanceCAPDUTime

```cpp
bool getRelayResistanceCAPDUTime(
    unsigned short & time
) const
```


**Parameters**: 

  * **time** expected transmission time for C-APDU (DF8134) 


**Return**: true if successful, false if not found 

get expected transmission time for C-APDU


### function setRelayResistanceRAPDUTime

```cpp
bool setRelayResistanceRAPDUTime(
    unsigned short time
)
```


**Parameters**: 

  * **time** expected transmission time for R-APDU (DF8135) 


**Return**: true 

set expected transmission time for R-APDU


### function getRelayResistanceRAPDUTime

```cpp
bool getRelayResistanceRAPDUTime(
    unsigned short & time
) const
```


**Parameters**: 

  * **time** expected transmission time for R-APDU (DF8135) 


**Return**: true if successful, false if not found 

get expected transmission time for R-APDU


### function setRelayResistanceAccuracy

```cpp
bool setRelayResistanceAccuracy(
    unsigned short time
)
```


**Parameters**: 

  * **time** relay resistance accuracy threshold (DF8136) 


**Return**: true 

set relay resistance accuracy threshold


### function getRelayResistanceAccuracy

```cpp
bool getRelayResistanceAccuracy(
    unsigned short & time
) const
```


**Parameters**: 

  * **time** relay resistance accuracy threshold (DF8136) 


**Return**: true if successful, false if not found 

get relay resistance accuracy threshold


### function setRelayResistanceTimeMismatchThreshold

```cpp
bool setRelayResistanceTimeMismatchThreshold(
    unsigned char percent
)
```


**Parameters**: 

  * **percent** relay resistance transmission time mismatch threshold in percent (DF8137) 


**Return**: true 

set relay resistance transmission time mismatch threshold in percent


### function getRelayResistanceTimeMismatchThreshold

```cpp
bool getRelayResistanceTimeMismatchThreshold(
    unsigned char & percent
) const
```


**Parameters**: 

  * **percent** relay resistance transmission time mismatch threshold in percent (DF8137) 


**Return**: true if successful, false if not found 

get relay resistance transmission time mismatch threshold in percent


### function setFlowOptions

```cpp
bool setFlowOptions(
    const Array< 10 > & opt
)
```


**Parameters**: 

  * **opt** options (DF8F0B) 


**Return**: true 

set flow options


### function setFlowOptions

```cpp
inline bool setFlowOptions(
    const EMVFlowOptions & opt
)
```


**Parameters**: 

  * **opt** options (DF8F0B) 


**Return**: true 

set flow options


### function getFlowOptions

```cpp
bool getFlowOptions(
    Array< 10 > & opt
) const
```


**Parameters**: 

  * **opt** options (DF8F0B) 


**Return**: true if successful, false if not found or invalid format 

get flow options


### function getFlowOptions

```cpp
inline bool getFlowOptions(
    EMVFlowOptions & opt
) const
```


**Parameters**: 

  * **opt** options (DF8F0B) 


**Return**: true if successful, false if not found or invalid format 

get flow options


### function setCtlsTerminalLimit

```cpp
bool setCtlsTerminalLimit(
    unsigned limit
)
```


**Parameters**: 

  * **limit** limit amount (DF8F0E) 


**Return**: true 

set terminal contactless transaction limit


### function getCtlsTerminalLimit

```cpp
bool getCtlsTerminalLimit(
    unsigned & limit
) const
```


**Parameters**: 

  * **limit** limit amount (DF8F0E) 


**Return**: true if successful, false if not found 

get terminal contactless transaction limit


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


### function getEntryPointChecksum

```cpp
bool getEntryPointChecksum(
    std::string & chk
) const
```


**Parameters**: 

  * **chk** checksum (DFAB06) 


**Return**: true if successful, false if not found 

get checksum of entry point


### function getKernelChecksum

```cpp
bool getKernelChecksum(
    std::string & chk
) const
```


**Parameters**: 

  * **chk** checksum (DFAB07) 


**Return**: true if successful, false if not found 

get checksum of entry point


### function setRetapFieldOff

```cpp
bool setRetapFieldOff(
    unsigned char offtime
)
```


**Parameters**: 

  * **offtime** field off time (DFAB08) 


**Return**: true 

set field off time


### function getRetapFieldOff

```cpp
bool getRetapFieldOff(
    unsigned char & offtime
) const
```


**Parameters**: 

  * **offtime** field off time (DFAB08) 


**Return**: true if successful, false if not found 

get field off time


### function setInternalKernelID

```cpp
bool setInternalKernelID(
    const Array< 3 > & id
)
```


**Parameters**: 

  * **id** kernel ID (DFAB23) 


**Return**: true 

set internal EMV kernel ID


### function setInternalKernelID

```cpp
bool setInternalKernelID(
    unsigned id
)
```


**Parameters**: 

  * **id** kernel ID (DFAB23) 


**Return**: true if successful, false in case of invalid format 

set internal EMV kernel ID


### function getInternalKernelID

```cpp
bool getInternalKernelID(
    Array< 3 > & id
) const
```


**Parameters**: 

  * **id** kernel ID (DFAB23) 


**Return**: true if successful, false if not found 

get internal EMV kernel ID


### function getInternalKernelID

```cpp
bool getInternalKernelID(
    unsigned & id
) const
```


**Parameters**: 

  * **id** kernel ID (DFAB23) 


**Return**: true if successful, false if not found or invalid format 

get internal EMV kernel ID


### function setTECSupport

```cpp
bool setTECSupport(
    unsigned char ts
)
```


**Parameters**: 

  * **ts** TEC support: chip=1, msr=2, chip+msr=3 (DFAB30) 


**Return**: true 

set TEC support


### function getTECSupport

```cpp
bool getTECSupport(
    unsigned char & ts
) const
```


**Parameters**: 

  * **ts** TEC support: chip=1, msr=2, chip+msr=3 (DFAB30) 


**Return**: true if successful, false if not found 

get TEC support


### function setKernelAppFlowCapabilities

```cpp
bool setKernelAppFlowCapabilities(
    const Array< 5 > & caps
)
```


**Parameters**: 

  * **caps** application flow capabilities (DFAB31) 


**Return**: true 

set kernel specific application flow capabilities


### function setKernelAppFlowCapabilities

```cpp
inline bool setKernelAppFlowCapabilities(
    const EMVKernelAppFlowCapabilities & caps
)
```


**Parameters**: 

  * **caps** application flow capabilities (DFAB31) 


**Return**: true 

set kernel specific application flow capabilities


### function getKernelAppFlowCapabilities

```cpp
bool getKernelAppFlowCapabilities(
    Array< 5 > & caps
) const
```


**Parameters**: 

  * **caps** application flow capabilities (DFAB31) 


**Return**: true if successful, false if not found or invalid format 

get kernel specific application flow capabilities


### function getKernelAppFlowCapabilities

```cpp
inline bool getKernelAppFlowCapabilities(
    EMVKernelAppFlowCapabilities & caps
) const
```


**Parameters**: 

  * **caps** application flow capabilities (DFAB31) 


**Return**: true if successful, false if not found or invalid format 

get kernel specific application flow capabilities


### function setCtlsTransactionLimit

```cpp
bool setCtlsTransactionLimit(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** transaction limit (DFAB41) 


**Return**: true 

set application specific contactless transaction limit


### function setCtlsTransactionLimit

```cpp
bool setCtlsTransactionLimit(
    int64_t limit
)
```


**Parameters**: 

  * **limit** transaction limit (DFAB41) 


**Return**: true if successful, false in case of overflow 

set application specific contactless transaction limit


### function getCtlsTransactionLimit

```cpp
bool getCtlsTransactionLimit(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** transaction limit (DFAB41) 


**Return**: true if successful, false if not found or invalid format 

get application specific contactless transaction limit


### function getCtlsTransactionLimit

```cpp
bool getCtlsTransactionLimit(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** transaction limit (DFAB41) 


**Return**: true if successful, false if not found or invalid format 

get application specific contactless transaction limit


### function setCVMRequiredLimit

```cpp
bool setCVMRequiredLimit(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** CVM required limit (DFAB42) 


**Return**: true 

set CVM required limit


### function setCVMRequiredLimit

```cpp
bool setCVMRequiredLimit(
    int64_t limit
)
```


**Parameters**: 

  * **limit** CVM required limit (DFAB42) 


**Return**: true if successful, false in case of overflow 

set CVM required limit


### function getCVMRequiredLimit

```cpp
bool getCVMRequiredLimit(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** CVM required limit (DFAB42) 


**Return**: true if successful, false if not found 

get CVM required limit


### function getCVMRequiredLimit

```cpp
bool getCVMRequiredLimit(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** CVM required limit (DFAB42) 


**Return**: true if successful, false if not found 

get CVM required limit


### function setRiskManagementThreshold

```cpp
bool setRiskManagementThreshold(
    const BCD< 6 > & t
)
```


**Parameters**: 

  * **t** risk management threshold (DFAB46) 


**Return**: true 

set risk management threshold


### function setRiskManagementThreshold

```cpp
bool setRiskManagementThreshold(
    int64_t t
)
```


**Parameters**: 

  * **t** risk management threshold (DFAB46) 


**Return**: true if successful, false in case of overflow 

set risk management threshold


### function getRiskManagementThreshold

```cpp
bool getRiskManagementThreshold(
    BCD< 6 > & t
) const
```


**Parameters**: 

  * **t** risk management threshold (DFAB46) 


**Return**: true if successful, false if not found or invalid format 

get risk management threshold


### function getRiskManagementThreshold

```cpp
bool getRiskManagementThreshold(
    int64_t & t
) const
```


**Parameters**: 

  * **t** risk management threshold (DFAB46) 


**Return**: true if successful, false if not found or invalid format 

get risk management threshold


### function setRiskManagementTargetPercentage

```cpp
bool setRiskManagementTargetPercentage(
    const BCD< 1 > & p
)
```


**Parameters**: 

  * **p** risk management target percentage (DFAB47) 


**Return**: true 

set risk management target percentage


### function setRiskManagementTargetPercentage

```cpp
bool setRiskManagementTargetPercentage(
    int p
)
```


**Parameters**: 

  * **p** risk management target percentage (DFAB47) 


**Return**: true if successful, false in case of overflow 

set risk management target percentage


### function getRiskManagementTargetPercentage

```cpp
bool getRiskManagementTargetPercentage(
    BCD< 1 > & p
) const
```


**Parameters**: 

  * **p** risk management target percentage (DFAB47) 


**Return**: true if successful, false if not found or invalid format 

get risk management target percentage


### function getRiskManagementTargetPercentage

```cpp
bool getRiskManagementTargetPercentage(
    int & p
) const
```


**Parameters**: 

  * **p** risk management target percentage (DFAB47) 


**Return**: true if successful, false if not found or invalid format 

get risk management target percentage


### function setRiskManagementMaxTargetPercentage

```cpp
bool setRiskManagementMaxTargetPercentage(
    const BCD< 1 > & p
)
```


**Parameters**: 

  * **p** risk management maximum target percentage (DFAB48) 


**Return**: true 

set risk management maximum target percentage


### function setRiskManagementMaxTargetPercentage

```cpp
bool setRiskManagementMaxTargetPercentage(
    int p
)
```


**Parameters**: 

  * **p** risk management maximum target percentage (DFAB48) 


**Return**: true if successful, false in case of overflow 

set risk management maximum target percentage


### function getRiskManagementMaxTargetPercentage

```cpp
bool getRiskManagementMaxTargetPercentage(
    BCD< 1 > & p
) const
```


**Parameters**: 

  * **p** risk management maximum target percentage (DFAB48) 


**Return**: true if successful, false if not found or invalid format 

get risk management maximum target percentage


### function getRiskManagementMaxTargetPercentage

```cpp
bool getRiskManagementMaxTargetPercentage(
    int & p
) const
```


**Parameters**: 

  * **p** risk management maximum target percentage (DFAB48) 


**Return**: true if successful, false if not found or invalid format 

get risk management maximum target percentage


### function setDynamicReaderLimitsOptions

```cpp
bool setDynamicReaderLimitsOptions(
    unsigned char opts
)
```


**Parameters**: 

  * **opts** dynamic reader limits options (DFAB49) 


**Return**: true 

set dynamic reader limits options


### function getDynamicReaderLimitsOptions

```cpp
bool getDynamicReaderLimitsOptions(
    unsigned char & opts
) const
```


**Parameters**: 

  * **opts** dynamic reader limits options (DFAB49) 


**Return**: true if successful, false if not found 

get dynamic reader limits options


### function setTransactionLimitCash

```cpp
bool setTransactionLimitCash(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** limit for cash and cashback transactions (DFAB4A) 


**Return**: true 

set limit for cash and cashback transactions


### function setTransactionLimitCash

```cpp
bool setTransactionLimitCash(
    int64_t limit
)
```


**Parameters**: 

  * **limit** limit for cash and cashback transactions (DFAB4A) 


**Return**: true if successful, false in case of overflow 

set limit for cash and cashback transactions


### function getTransactionLimitCash

```cpp
bool getTransactionLimitCash(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** limit for cash and cashback transactions (DFAB4A) 


**Return**: true if successful, false if not found or invalid format 

get limit for cash and cashback transactions


### function getTransactionLimitCash

```cpp
bool getTransactionLimitCash(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** limit for cash and cashback transactions (DFAB4A) 


**Return**: true if successful, false if not found or invalid format 

get limit for cash and cashback transactions


### function setCombinationOptions

```cpp
bool setCombinationOptions(
    const Array< 2 > & opt
)
```


**Parameters**: 

  * **opt** flags for terminal apabilities (DFAB4B) 


**Return**: true 

set flags for terminal apabilities


### function getCombinationOptions

```cpp
bool getCombinationOptions(
    Array< 2 > & opt
) const
```


**Parameters**: 

  * **opt** flags for terminal apabilities (DFAB4B) 


**Return**: true if successful, false if not found or invalid format 

get flags for terminal apabilities


### function setRemovalTimeout

```cpp
bool setRemovalTimeout(
    unsigned short tout
)
```


**Parameters**: 

  * **tout** removal timeout (DFAB4C) 


**Return**: true 

set removal timeout


### function getRemovalTimeout

```cpp
bool getRemovalTimeout(
    unsigned short & tout
) const
```


**Parameters**: 

  * **tout** removal timeout (DFAB4C) 


**Return**: true if successful, false if not found 

get removal timeout


### function setCallbackTimeout

```cpp
bool setCallbackTimeout(
    unsigned short tout
)
```


**Parameters**: 

  * **tout** callback timeout (DFAB4D) 


**Return**: true 

set callback timeout


### function getCallbackTimeout

```cpp
bool getCallbackTimeout(
    unsigned short & tout
) const
```


**Parameters**: 

  * **tout** callback timeout (DFAB4D) 


**Return**: true if successful, false if not found 

get callback timeout


### function setTornTransactionInterval

```cpp
bool setTornTransactionInterval(
    const Array< 2 > & interval
)
```


**Parameters**: 

  * **interval** torn transaction interval (DFAB4E) 


**Return**: true 

set torn transaction interval


### function getTornTransactionInterval

```cpp
bool getTornTransactionInterval(
    Array< 2 > & interval
) const
```


**Parameters**: 

  * **interval** torn transaction interval (DFAB4E) 


**Return**: true if successful, false if not found or invalid format 

get torn transaction interval


### function setCtlsKernelCapabilities

```cpp
bool setCtlsKernelCapabilities(
    const Array< 5 > & caps
)
```


**Parameters**: 

  * **caps** contactless kernel capabilities (DFAB4F) 


**Return**: true 

set contactless kernel capabilities


### function getCtlsKernelCapabilities

```cpp
bool getCtlsKernelCapabilities(
    Array< 5 > & caps
) const
```


**Parameters**: 

  * **caps** contactless kernel capabilities (DFAB4F) 


**Return**: true if successful, false if not found or invalid format 

get contactless kernel capabilities


### function setMTOL

```cpp
bool setMTOL(
    const bytevector & mtol
)
```


**Parameters**: 

  * **mtol** mandatory tag object list (DFAB50) 


**Return**: true 

set mandatory tag object list


### function setMTOL

```cpp
template <unsigned N>
inline bool setMTOL(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **mtol** mandatory tag object list (DFAB50) 


**Return**: true 

set mandatory tag object list


### function getMTOL

```cpp
bool getMTOL(
    bytevector & mtol
) const
```


**Parameters**: 

  * **mtol** mandatory tag object list (DFAB50) 


**Return**: true if successful, false if not found 

get mandatory tag object list


### function setUnpredictableNumberRange

```cpp
bool setUnpredictableNumberRange(
    unsigned char range
)
```


**Parameters**: 

  * **range** unpredictable number range (DFAB52) 


**Return**: true 

set unpredictable number range


### function getUnpredictableNumberRange

```cpp
bool getUnpredictableNumberRange(
    unsigned char & range
) const
```


**Parameters**: 

  * **range** unpredictable number range (DFAB52) 


**Return**: true if successful, false if not found 

get unpredictable number range


### function setTermcapAboveCVMLimit

```cpp
bool setTermcapAboveCVMLimit(
    const Array< 3 > & tcap
)
```


**Parameters**: 

  * **tcap** CVM methods above CVM limit (DFAB53) 


**Return**: true 

set CVM methods above CVM limit


### function getTermcapAboveCVMLimit

```cpp
bool getTermcapAboveCVMLimit(
    Array< 3 > & tcap
) const
```


**Parameters**: 

  * **tcap** CVM methods above CVM limit (DFAB53) 


**Return**: true if successful, false if not found or invalid format 

get CVM methods above CVM limit


### function setTermcapBelowCVMLimit

```cpp
bool setTermcapBelowCVMLimit(
    const Array< 3 > & tcap
)
```


**Parameters**: 

  * **tcap** CVM methods below CVM limit (DFAB54) 


**Return**: true 

set CVM methods below CVM limit


### function getTermcapBelowCVMLimit

```cpp
bool getTermcapBelowCVMLimit(
    Array< 3 > & tcap
) const
```


**Parameters**: 

  * **tcap** CVM methods below CVM limit (DFAB54) 


**Return**: true if successful, false if not found or invalid format 

get CVM methods below CVM limit


### function setTACSwitch

```cpp
bool setTACSwitch(
    const Array< 5 > & sw
)
```


**Parameters**: 

  * **sw** terminal action code switch interface (DFAB55) 


**Return**: true 

set terminal action code switch interface


### function getTACSwitch

```cpp
bool getTACSwitch(
    Array< 5 > & sw
) const
```


**Parameters**: 

  * **sw** terminal action code switch interface (DFAB55) 


**Return**: true if successful, false if not found or invalid format 

get terminal action code switch interface


### function setIACSwitch

```cpp
bool setIACSwitch(
    const Array< 5 > & sw
)
```


**Parameters**: 

  * **sw** issuer action code switch interface (DFAB56) 


**Return**: true 

set issuer action code switch interface


### function getIACSwitch

```cpp
bool getIACSwitch(
    Array< 5 > & sw
) const
```


**Parameters**: 

  * **sw** issuer action code switch interface (DFAB56) 


**Return**: true if successful, false if not found or invalid format 

get issuer action code switch interface


### function setDataExchangeTags

```cpp
bool setDataExchangeTags(
    const bytevector & tags
)
```


**Parameters**: 

  * **tags** data exchange tag list (DFAB57) 


**Return**: true 

set data exchange tag list


### function setDataExchangeTags

```cpp
template <unsigned N>
inline bool setDataExchangeTags(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **tags** data exchange tag list (DFAB57) 


**Return**: true 

set data exchange tag list


### function getDataExchangeTags

```cpp
bool getDataExchangeTags(
    bytevector & tags
) const
```


**Parameters**: 

  * **tags** data exchange tag list (DFAB57) 


**Return**: true if successful, false if not found 

get data exchange tag list


### function setDCRListIDs

```cpp
bool setDCRListIDs(
    const bytevector & idlist
)
```


**Parameters**: 

  * **idlist** data container read list IDs (89 bytes for CT, variable for CTLS) (DFAB58) 


**Return**: true 

set data container read list IDs (CTLS/CT)


### function getDCRListIDs

```cpp
bool getDCRListIDs(
    bytevector & idlist
) const
```


**Parameters**: 

  * **idlist** data container read list IDs (DFAB58) 


**Return**: true if successful, false if not found 

get data container read list IDs (CTLS/CT)


### function setDCRListRanges

```cpp
bool setDCRListRanges(
    const bytevector & rangelist
)
```


**Parameters**: 

  * **rangelist** data container read list ranges (89 bytes for CT, variable for CTLS) (DFAB59) 


**Return**: true 

set data container read list ranges


### function getDCRListRanges

```cpp
bool getDCRListRanges(
    bytevector & rangelist
) const
```


**Parameters**: 

  * **rangelist** data container read list ranges (DFAB59) 


**Return**: true if successful, false if not found 

get data container read list ranges


### function setApplicationAuthTransactionType

```cpp
bool setApplicationAuthTransactionType(
    unsigned char type
)
```


**Parameters**: 

  * **type** transaction type used for application authentication transaction (DFAB5A) 


**Return**: true 

set transaction type used for application authentication transaction


### function getApplicationAuthTransactionType

```cpp
bool getApplicationAuthTransactionType(
    unsigned char & type
) const
```


**Parameters**: 

  * **type** transaction type used for application authentication transaction (DFAB5A) 


**Return**: true if successful, false if not found 

get transaction type used for application authentication transaction


### function setsetCtlsTransactionLimitODCVM

```cpp
bool setsetCtlsTransactionLimitODCVM(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** contactless transaction limit for On-Device Card Holder Verification Method (DFAB5B) 


**Return**: true 

set contactless transaction limit for On-Device Card Holder Verification Method


### function setsetCtlsTransactionLimitODCVM

```cpp
bool setsetCtlsTransactionLimitODCVM(
    int64_t limit
)
```


**Parameters**: 

  * **limit** contactless transaction limit for On-Device Card Holder Verification Method (DFAB5B) 


**Return**: true if successful, false in case of overflow 

set contactless transaction limit for On-Device Card Holder Verification Method


### function getsetCtlsTransactionLimitODCVM

```cpp
bool getsetCtlsTransactionLimitODCVM(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** contactless transaction limit for On-Device Card Holder Verification Method (DFAB5B) 


**Return**: true if successful, false if not found or invalid format 

get contactless transaction limit for On-Device Card Holder Verification Method


### function getsetCtlsTransactionLimitODCVM

```cpp
bool getsetCtlsTransactionLimitODCVM(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** contactless transaction limit for On-Device Card Holder Verification Method (DFAB5B) 


**Return**: true if successful, false if not found or invalid format 

get contactless transaction limit for On-Device Card Holder Verification Method


### function setTransactionTypesSale

```cpp
bool setTransactionTypesSale(
    const Array< 3 > & type
)
```


**Parameters**: 

  * **type** transaction types (DFD004) 


**Return**: true 

set transaction types for sale


### function getTransactionTypesSale

```cpp
bool getTransactionTypesSale(
    Array< 3 > & type
) const
```


**Parameters**: 

  * **type** transaction types (DFD004) 


**Return**: true if successful, false if not found or invalid format 

get transaction types for sale


### function setTransactionTypesCash

```cpp
bool setTransactionTypesCash(
    const Array< 3 > & type
)
```


**Parameters**: 

  * **type** transaction types (DFD005) 


**Return**: true 

set transaction types for cash


### function getTransactionTypesCash

```cpp
bool getTransactionTypesCash(
    Array< 3 > & type
) const
```


**Parameters**: 

  * **type** transaction types (DFD005) 


**Return**: true if successful, false if not found or invalid format 

get transaction types for cash


### function setTransactionTypesCashback

```cpp
bool setTransactionTypesCashback(
    const Array< 3 > & type
)
```


**Parameters**: 

  * **type** transaction types (DFD006) 


**Return**: true 

set transaction types for cashbash


### function getTransactionTypesCashback

```cpp
bool getTransactionTypesCashback(
    Array< 3 > & type
) const
```


**Parameters**: 

  * **type** transaction types (DFD006) 


**Return**: true if successful, false if not found or invalid format 

get transaction types for cashbash


### function setBeepFreqSuccess

```cpp
bool setBeepFreqSuccess(
    unsigned short freq
)
```


**Parameters**: 

  * **freq** frequency (DFD006) 


**Return**: true 

set beep frequence for success


### function getBeepFreqSuccess

```cpp
bool getBeepFreqSuccess(
    unsigned short & freq
) const
```


**Parameters**: 

  * **freq** frequency (DFD006) 


**Return**: true if successful, false if not found 

get beep frequence for success


### function setTransactionTypesRefund

```cpp
bool setTransactionTypesRefund(
    const Array< 3 > & type
)
```


**Parameters**: 

  * **type** transaction types (DFD007) 


**Return**: true 

set transaction types for refund


### function getTransactionTypesRefund

```cpp
bool getTransactionTypesRefund(
    Array< 3 > & type
) const
```


**Parameters**: 

  * **type** transaction types (DFD007) 


**Return**: true if successful, false if not found or invalid format 

get transaction types for refund


### function setBeepFreqAlert

```cpp
bool setBeepFreqAlert(
    unsigned short freq
)
```


**Parameters**: 

  * **freq** frequency (DFD007) 


**Return**: true 

set beep frequence for alert


### function getBeepFreqAlert

```cpp
bool getBeepFreqAlert(
    unsigned short & freq
) const
```


**Parameters**: 

  * **freq** frequency (DFD007) 


**Return**: true if successful, false if not found 

get beep frequence for alert


### function setSecondTapDelay

```cpp
bool setSecondTapDelay(
    unsigned char delay
)
```


**Parameters**: 

  * **delay** delay (DFD008) 


**Return**: true 

set second tap delay


### function getSecondTapDelay

```cpp
bool getSecondTapDelay(
    unsigned char & delay
) const
```


**Parameters**: 

  * **delay** delay (DFD008) 


**Return**: true if successful, false if not found 

get second tap delay


### function setHostTimeout

```cpp
bool setHostTimeout(
    unsigned char tout
)
```


**Parameters**: 

  * **tout** host connection timeout (DFD009) 


**Return**: true 

set host connection timeout


### function getHostTimeout

```cpp
bool getHostTimeout(
    unsigned char & tout
) const
```


**Parameters**: 

  * **tout** host connection timeout (DFD009) 


**Return**: true if successful, false if not found 

get host connection timeout


### function setHotlist

```cpp
bool setHotlist(
    const bytevector & hotlist
)
```


**Parameters**: 

  * **hotlist** [TLV](classvfisdi_1_1_t_l_v.md) encoded hotlist (FF05) 


**Return**: true if successful, false in case of invalid format 

set hotlist


### function setHotlist

```cpp
template <unsigned N>
inline bool setHotlist(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **hotlist** [TLV](classvfisdi_1_1_t_l_v.md) encoded hotlist (FF05) 


**Return**: true if successful, false in case of invalid format 

set hotlist


### function setHotlist

```cpp
bool setHotlist(
    const TLV & hotlist
)
```


**Parameters**: 

  * **hotlist** hotlist (FF05) 


**Return**: true 

set hotlist


### function getHotlist

```cpp
bool getHotlist(
    bytevector & hotlist
) const
```


**Parameters**: 

  * **hotlist** [TLV](classvfisdi_1_1_t_l_v.md) encoded hotlist (FF05) 


**Return**: true if successful, false if not found 

get hotlist


### function getHotlist

```cpp
bool getHotlist(
    TLV & hotlist
) const
```


**Parameters**: 

  * **hotlist** [TLV](classvfisdi_1_1_t_l_v.md) encoded hotlist (FF05) 


**Return**: true if successful, false if not found 

get hotlist


### function setTagsToWriteBeforeGenAC

```cpp
bool setTagsToWriteBeforeGenAC(
    const TLV & ttw
)
```


**Parameters**: 

  * **ttw** tags to write before Gen AC (FF8102) 


**Return**: true 

set tags to write before Gen AC


### function getTagsToWriteBeforeGenAC

```cpp
bool getTagsToWriteBeforeGenAC(
    TLV & ttw
) const
```


**Parameters**: 

  * **ttw** tags to write before Gen AC (FF8102) 


**Return**: true if successful, false if not found 

get tags to write before Gen AC


### function setTagsToWriteAfterGenAC

```cpp
bool setTagsToWriteAfterGenAC(
    const TLV & ttw
)
```


**Parameters**: 

  * **ttw** tags to write after Gen AC (FF8103) 


**Return**: true 

set tags to write after Gen AC


### function getTagsToWriteAfterGenAC

```cpp
bool getTagsToWriteAfterGenAC(
    TLV & ttw
) const
```


**Parameters**: 

  * **ttw** tags to write after Gen AC (FF8103) 


**Return**: true if successful, false if not found 

get tags to write after Gen AC


### function setDynamicReaderLimits

```cpp
bool setDynamicReaderLimits(
    const std::vector< DynamicReaderLimits > & limits
)
```


**Parameters**: 

  * **limits** dynamic limits (FFAB01) 


**Return**: true 

set dynamic reader limits


### function getDynamicReaderLimits

```cpp
bool getDynamicReaderLimits(
    std::vector< DynamicReaderLimits > & limits
) const
```


**Parameters**: 

  * **limits** dynamic limits (FFAB01) 


**Return**: true in case of success, false if not found or invalid format 

get dynamic reader limits


### function setTransactionTypeIK

```cpp
bool setTransactionTypeIK(
    unsigned char type
)
```


**Parameters**: 

  * **type** transaction type (9F5A) 


**Return**: true 

set Interac transaction type


### function getTransactionTypeIK

```cpp
bool getTransactionTypeIK(
    unsigned char & type
) const
```


**Parameters**: 

  * **type** transaction type (9F5A) 


**Return**: true if successful, false if not found 

get Interac transaction type


### function setFloorLimitIK

```cpp
bool setFloorLimitIK(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** floor limit Interac (9F5F) 


**Return**: true 

set floor limit Interac


### function setFloorLimitIK

```cpp
bool setFloorLimitIK(
    int64_t limit
)
```


**Parameters**: 

  * **limit** floor limit Interac (9F5F) 


**Return**: true if successful, false in case of overflow 

set floor limit Interac


### function getFloorLimitIK

```cpp
bool getFloorLimitIK(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** floor limit Interac (9F5F) 


**Return**: true if successful, false if not found or invalid format 

get floor limit Interac


### function getFloorLimitIK

```cpp
bool getFloorLimitIK(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** floor limit Interac (9F5F) 


**Return**: true if successful, false if not found or invalid format 

get floor limit Interac


### function setCVMRequiredLimitPK

```cpp
bool setCVMRequiredLimitPK(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** limit (DF01) 


**Return**: true 

set Visa Asia/Pacific CVM required limit


### function setCVMRequiredLimitPK

```cpp
bool setCVMRequiredLimitPK(
    int64_t limit
)
```


**Parameters**: 

  * **limit** limit (DF01) 


**Return**: true if successful, false in case of overflow 

set Visa Asia/Pacific CVM required limit


### function getCVMRequiredLimitPK

```cpp
bool getCVMRequiredLimitPK(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** limit (DF01) 


**Return**: true if successful, false if not found or invalid format 

get Visa Asia/Pacific CVM required limit


### function getCVMRequiredLimitPK

```cpp
bool getCVMRequiredLimitPK(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** limit (DF01) 


**Return**: true if successful, false if not found or invalid format 

get Visa Asia/Pacific CVM required limit


### function setFloorlimitPK

```cpp
bool setFloorlimitPK(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** limit (DF02) 


**Return**: true 

set Visa Asia/Pacific floor limit


### function setFloorlimitPK

```cpp
bool setFloorlimitPK(
    int64_t limit
)
```


**Parameters**: 

  * **limit** limit (DF02) 


**Return**: true if successful, false in case of overflow 

set Visa Asia/Pacific floor limit


### function getFloorlimitPK

```cpp
bool getFloorlimitPK(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** limit (DF02) 


**Return**: true if successful, false if not found or invalid format 

get Visa Asia/Pacific floor limit


### function getFloorlimitPK

```cpp
bool getFloorlimitPK(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** limit (DF02) 


**Return**: true if successful, false if not found or invalid format 

get Visa Asia/Pacific floor limit


### function setFloorLimitMIR

```cpp
bool setFloorLimitMIR(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** floor limit (DF51) 


**Return**: true 

set MIR floor limit


### function setFloorLimitMIR

```cpp
bool setFloorLimitMIR(
    int64_t limit
)
```


**Parameters**: 

  * **limit** floor limit (DF51) 


**Return**: true if successful, false in case of overflow 

set MIR floor limit


### function getFloorLimitMIR

```cpp
bool getFloorLimitMIR(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** floor limit (DF51) 


**Return**: true if successful, false if not found or invalid format 

get MIR floor limit


### function getFloorLimitMIR

```cpp
bool getFloorLimitMIR(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** floor limit (DF51) 


**Return**: true if successful, false if not found or invalid format 

get MIR floor limit


### function setTransactionLimitNoCVMMIR

```cpp
bool setTransactionLimitNoCVMMIR(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** limit (DF52) 


**Return**: true 

set MIR transaction limit for no-CVM


### function setTransactionLimitNoCVMMIR

```cpp
bool setTransactionLimitNoCVMMIR(
    int64_t limit
)
```


**Parameters**: 

  * **limit** limit (DF52) 


**Return**: true if successful, false in case of overflow 

set MIR transaction limit for no-CVM


### function getTransactionLimitNoCVMMIR

```cpp
bool getTransactionLimitNoCVMMIR(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** limit (DF52) 


**Return**: true if successful, false if not found or invalid format 

get MIR transaction limit for no-CVM


### function getTransactionLimitNoCVMMIR

```cpp
bool getTransactionLimitNoCVMMIR(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** limit (DF52) 


**Return**: true if successful, false if not found or invalid format 

get MIR transaction limit for no-CVM


### function setTransactionLimitNoCDCVMMIR

```cpp
bool setTransactionLimitNoCDCVMMIR(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** contactless limit for non CD-VM (DF53) 


**Return**: true 

set MIR contactless limit for non CD-VM


### function setTransactionLimitNoCDCVMMIR

```cpp
bool setTransactionLimitNoCDCVMMIR(
    int64_t limit
)
```


**Parameters**: 

  * **limit** contactless limit for non CD-VM (DF53) 


**Return**: true if successful, false in case of overflow 

set MIR contactless limit for non CD-VM


### function getTransactionLimitNoCDCVMMIR

```cpp
bool getTransactionLimitNoCDCVMMIR(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** contactless limit for non CD-VM (DF53) 


**Return**: true if successful, false if not found or invalid format 

get MIR contactless limit for non CD-VM


### function getTransactionLimitNoCDCVMMIR

```cpp
bool getTransactionLimitNoCDCVMMIR(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** contactless limit for non CD-VM (DF53) 


**Return**: true if successful, false if not found or invalid format 

get MIR contactless limit for non CD-VM


### function setTransactionLimitCDCVMMIR

```cpp
bool setTransactionLimitCDCVMMIR(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** contactless limit for CD-CVM (DF54) 


**Return**: true 

set MIR contactless limit for CD-CVM


### function setTransactionLimitCDCVMMIR

```cpp
bool setTransactionLimitCDCVMMIR(
    int64_t limit
)
```


**Parameters**: 

  * **limit** contactless limit for CD-CVM (DF54) 


**Return**: true if successful, false in case of overflow 

set MIR contactless limit for CD-CVM


### function getTransactionLimitCDCVMMIR

```cpp
bool getTransactionLimitCDCVMMIR(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** contactless limit for CD-CVM (DF54) 


**Return**: true if successful, false if not found or invalid format 

get MIR contactless limit for CD-CVM


### function getTransactionLimitCDCVMMIR

```cpp
bool getTransactionLimitCDCVMMIR(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** contactless limit for CD-CVM (DF54) 


**Return**: true if successful, false if not found or invalid format 

get MIR contactless limit for CD-CVM


### function setTPMCapabilitiesMIR

```cpp
bool setTPMCapabilitiesMIR(
    const Array< 2 > & caps
)
```


**Parameters**: 

  * **caps** TPM capabilities (DF55) 


**Return**: true 

set MIR TPM capabilities


### function getTPMCapabilitiesMIR

```cpp
bool getTPMCapabilitiesMIR(
    Array< 2 > & caps
) const
```


**Parameters**: 

  * **caps** TPM capabilities (DF55) 


**Return**: true if successful, false if not found or invalid format 

get MIR TPM capabilities


### function setTransactionRecoveryLimitMIR

```cpp
bool setTransactionRecoveryLimitMIR(
    unsigned char limit
)
```


**Parameters**: 

  * **limit** MIR transaction recovery limit (DF56) 


**Return**: true 

set MIR transaction recovery limit


### function getTransactionRecoveryLimitMIR

```cpp
bool getTransactionRecoveryLimitMIR(
    unsigned char & limit
) const
```


**Parameters**: 

  * **limit** MIR transaction recovery limit (DF56) 


**Return**: true if successful, false if not found 

get MIR transaction recovery limit


### function setAdditionalVersionNumbers

```cpp
bool setAdditionalVersionNumbers(
    const bytevector & ver
)
```


**Parameters**: 

  * **ver** additional version numbers (DF5F) 


**Return**: true 

set additional version numbers


### function setAdditionalVersionNumbers

```cpp
template <unsigned N>
inline bool setAdditionalVersionNumbers(
    const unsigned char(&) v[N]
)
```


**Parameters**: 

  * **ver** additional version numbers (DF5F) 


**Return**: true 

set additional version numbers


### function getAdditionalVersionNumbers

```cpp
bool getAdditionalVersionNumbers(
    bytevector & ver
) const
```


**Parameters**: 

  * **ver** additional version numbers (DF5F) 


**Return**: true if successful, false if not found 

get additional version numbers


### function setTACDefaultMK

```cpp
bool setTACDefaultMK(
    const Array< 5 > & tac
)
```


**Parameters**: 

  * **tac** Mastercard TAC default (DF8120) 


**Return**: true 

set Mastercard/CPACE TAC default


### function getTACDefaultMK

```cpp
bool getTACDefaultMK(
    Array< 5 > & tac
) const
```


**Parameters**: 

  * **tac** Mastercard TAC default (DF8120) 


**Return**: true if successful, false if not found or invalid format 

get Mastercard/CPACE TAC default


### function setTACDenialMK

```cpp
bool setTACDenialMK(
    const Array< 5 > & tac
)
```


**Parameters**: 

  * **tac** Mastercard TAC denial (DF8121) 


**Return**: true 

set Mastercard/CPACE TAC denial


### function getTACDenialMK

```cpp
bool getTACDenialMK(
    Array< 5 > & tac
) const
```


**Parameters**: 

  * **tac** Mastercard TAC denial (DF8121) 


**Return**: true if successful, false if not found or invalid format 

get Mastercard/CPACE TAC denial


### function setTACOnlineMK

```cpp
bool setTACOnlineMK(
    const Array< 5 > & tac
)
```


**Parameters**: 

  * **tac** Mastercard TAC online (DF8122) 


**Return**: true 

set Mastercard/CPACE TAC online


### function getTACOnlineMK

```cpp
bool getTACOnlineMK(
    Array< 5 > & tac
) const
```


**Parameters**: 

  * **tac** Mastercard TAC online (DF8122) 


**Return**: true if successful, false if not found or invalid format 

get Mastercard/CPACE TAC online


### function setFloorLimitMK

```cpp
bool setFloorLimitMK(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** Mastercard floor limit (DF8123) 


**Return**: true 

set Mastercard/CPACE floor limit


### function setFloorLimitMK

```cpp
bool setFloorLimitMK(
    int64_t limit
)
```


**Parameters**: 

  * **limit** Mastercard floor limit (DF8123) 


**Return**: true if successful, false in case of overflow 

set Mastercard/CPACE floor limit


### function getFloorLimitMK

```cpp
bool getFloorLimitMK(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** Mastercard floor limit (DF8123) 


**Return**: true if successful, false if not found or invalid format 

get Mastercard/CPACE floor limit


### function getFloorLimitMK

```cpp
bool getFloorLimitMK(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** Mastercard floor limit (DF8123) 


**Return**: true if successful, false if not found or invalid format 

get Mastercard/CPACE floor limit


### function setCVMRequiredLimitMK

```cpp
bool setCVMRequiredLimitMK(
    const BCD< 6 > & limit
)
```


**Parameters**: 

  * **limit** Mastercard CVM required limit (DF8126) 


**Return**: true 

set Mastercard/CPACE CVM required limit


### function setCVMRequiredLimitMK

```cpp
bool setCVMRequiredLimitMK(
    int64_t limit
)
```


**Parameters**: 

  * **limit** Mastercard CVM required limit (DF8126) 


**Return**: true if successful, false in case of overflow 

set Mastercard/CPACE CVM required limit


### function getCVMRequiredLimitMK

```cpp
bool getCVMRequiredLimitMK(
    BCD< 6 > & limit
) const
```


**Parameters**: 

  * **limit** Mastercard CVM required limit (DF8126) 


**Return**: true if successful, false if not found or invalid format 

get Mastercard/CPACE CVM required limit


### function getCVMRequiredLimitMK

```cpp
bool getCVMRequiredLimitMK(
    int64_t & limit
) const
```


**Parameters**: 

  * **limit** Mastercard CVM required limit (DF8126) 


**Return**: true if successful, false if not found or invalid format 

get Mastercard/CPACE CVM required limit


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