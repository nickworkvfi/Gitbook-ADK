---
title: sdiapi/src/sdiapi/sdi_emv.h

---

# sdiapi/src/sdiapi/sdi_emv.h



## Namespaces

| Name           |
| -------------- |
| **[vfisdi](namespacevfisdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfisdi::EMVSpecialTransactions](classvfisdi_1_1_e_m_v_special_transactions.md)**  |
| struct | **[vfisdi::EMVConf](structvfisdi_1_1_e_m_v_conf.md)**  |
| struct | **[vfisdi::EMVConf::DynamicReaderLimits](structvfisdi_1_1_e_m_v_conf_1_1_dynamic_reader_limits.md)**  |
| struct | **[vfisdi::EMVTxn](structvfisdi_1_1_e_m_v_txn.md)**  |
| struct | **[vfisdi::EMVTxn::DomesticApp](structvfisdi_1_1_e_m_v_txn_1_1_domestic_app.md)**  |
| struct | **[vfisdi::EMVTxn::FallbackMSR](structvfisdi_1_1_e_m_v_txn_1_1_fallback_m_s_r.md)**  |
| struct | **[vfisdi::EMVTxn::Candidate](structvfisdi_1_1_e_m_v_txn_1_1_candidate.md)**  |
| struct | **[vfisdi::EMVTxn::CandidateExt](structvfisdi_1_1_e_m_v_txn_1_1_candidate_ext.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](sdiapi_2src_2sdiapi_2sdi__emv_8h.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
// -*- Mode: C++ -*-
#ifndef SDI_EMV_H_20200406
#define SDI_EMV_H_20200406

#include "tlv.h"
#include "sdi_enum.h"
#include "sdi_emvbits.h"
#include "array.h"
#include "bcd.h"
#include <utility> // for std::pair

#if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
#   define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

namespace vfisdi {

typedef BitMask<40,EMVAppFlowCapabilityBits> EMVAppFlowCapabilities;

typedef BitMask<40,EMVKernelAppFlowCapabilityBits> EMVKernelAppFlowCapabilities;

typedef BitMask<80,EMVFlowOptionBits> EMVFlowOptions;

typedef BitMask<40,EMVChecksumOptionBits> EMVChecksumOptions;

typedef BitMask<40,EMVTransactionOptionBits> EMVTransactionOptions;

typedef BitMask<24,EMVTransactionStepBits> EMVTransactionSteps;

typedef BitMask<24,EMVDomesticOptionBits> EMVDomesticOptions;


class EMVSpecialTransactions: public Array<8> {
 public:
   EMVSpecialTransactions():Array<8>() {}
   EMVSpecialTransactions(const unsigned char val[8]) { set(val); }

   void setReversal(EMVSpecialReversal r) { v[0]=(v[0]&0xf)|(unsigned char)(r<<4); }
   EMVSpecialReversal getReversal() const { return EMVSpecialReversal(v[0]>>4 & 0xf); }

   void setRefund(EMVSpecialRefund r) { v[0]=(v[0]&0xf0)|(unsigned char)r; }
   EMVSpecialRefund getRefund() const { return EMVSpecialRefund(v[0] & 0xf); }

   void setReservation(EMVSpecialReservation r) { v[1]=(v[1]&0xf)|(unsigned char)(r<<4); }
   EMVSpecialReservation getReservation() const { return EMVSpecialReservation(v[1]>>4 & 0xf); }

   void setTip(EMVSpecialTip r) { v[1]=(v[1]&0xf0)|(unsigned char)r; }
   EMVSpecialTip getTip() const { return EMVSpecialTip(v[1] & 0xf); }

   void setReferral(EMVSpecialReferral r) { v[2]=(v[2]&0xf)|(unsigned char)(r<<4); }
   EMVSpecialReferral getReferral() const { return EMVSpecialReferral(v[2]>>4 & 0xf); }

   void setVoice(EMVSpecialVoice r) { v[2]=(v[2]&0xf0)|(unsigned char)r; }
   EMVSpecialVoice getVoice() const { return EMVSpecialVoice(v[2] & 0xf); }

   void setFallback(EMVSpecialFallback r) { v[3]=(v[3]&0xf0)|(unsigned char)r; }
   EMVSpecialFallback getFallback() const { return EMVSpecialFallback(v[3] & 0xf); }

   void setIgnoreCard(EMVSpecialIgnoreCard r) { v[4]=(v[4]&0xf)|(unsigned char)(r<<4); }
   EMVSpecialIgnoreCard getIgnoreCard() const { return EMVSpecialIgnoreCard(v[4]>>4 & 0xf); }
};


struct DllSpec EMVConf: public TLV {
 public:
   typedef std::vector<unsigned char> bytevector;

 protected:
   bool exists(unsigned tag1) const;
   bool exists(unsigned tag1, unsigned tag2) const;

 public:

   // primitive data elements //

   bool setIssuerID(const Array<4> &id);
   bool getIssuerID(Array<4> &id) const;

   bool setAID(const bytevector &aid);
   template<unsigned N> bool setAID(const unsigned char (&v)[N])
   { return setAID(bytevector(v,v+N)); }
   bool getAID(bytevector &aid) const;

   bool setPOIInfo(const bytevector &poi);
   bool getPOIInfo(bytevector &poi) const;

   bool setDefaultAppName(const std::string &appname);
   bool getDefaultAppName(std::string &appname) const;

   bool setTransactionCurrency(Currency currency);
   bool getTransactionCurrency(Currency &currency) const;

   bool setTransactionCurrency(int currency);
   bool getTransactionCurrency(int &currency) const;

   bool setTransactionCurrencyExp(unsigned char exp);
   bool getTransactionCurrencyExp(unsigned char &exp) const;

   bool setAcquirerID(const Array<6> &acq);
   bool getAcquirerID(Array<6> &acq) const;

   bool setChipAppVersionNumber(const std::vector<unsigned short> &version);
   template<unsigned N> bool setChipAppVersionNumber(const unsigned short (&v)[N])
   { return setChipAppVersionNumber(std::vector<unsigned short>(v,v+N)); }
   bool getChipAppVersionNumber(std::vector<unsigned short> &version) const;


   bool setMerchantCategory(const Array<2> &category);
   bool getMerchantCategory(Array<2> &category) const;

   bool setMerchantID(const std::string &mid);
   bool getMerchantID(std::string &mid) const;

   bool setTerminalCountryCode(unsigned short country);
   bool getTerminalCountryCode(unsigned short &country) const;

   bool setFloorLimit(const BCD<6> &limit);
   bool setFloorLimit(int64_t limit);
   bool getFloorLimit(BCD<6> &limit) const;
   bool getFloorLimit(int64_t &limit) const;

   bool setTerminalID(const Array<8> &id);
   bool getTerminalID(Array<8> &id) const;

   bool setTerminalRiskManagement(const Array<8> &trm);
   bool getTerminalRiskManagement(Array<8> &trm) const;

   bool setIFDSerial(const Array<8> &serial);
   bool getIFDSerial(Array<8> &serial) const;

   bool setTerminalCapabilities(const Array<3> &caps);
   bool getTerminalCapabilities(Array<3> &caps) const;

   bool setTerminalType(unsigned char type);
   bool getTerminalType(unsigned char &type) const;

   bool setPOSEntryMode(unsigned char mode);
   bool getPOSEntryMode(unsigned char &mode) const;

   bool setAdditionalCapabilities(const Array<5> &caps);
   bool getAdditionalCapabilities(Array<5> &caps) const;

   bool setMerchantNameLocation(const std::string &nameloc);
   bool getMerchantNameLocation(std::string &nameloc) const;

   bool setTransactionCategory(unsigned char cat);
   bool getTransactionCategory(unsigned char &cat) const;

   bool setInterchangeProfile(const Array<3> &icc);
   bool getInterchangeProfile(Array<3> &icc) const;

   bool setMerchantType(unsigned char type);
   bool getMerchantType(unsigned char &type) const;

   bool setTerminalTransactionInformation(const Array<3> &info);
   bool getTerminalTransactionInformation(Array<3> &info) const;

   bool setAppProgramID(const bytevector &id);
   template<unsigned N> bool setAppProgramID(const unsigned char (&v)[N])
   { return setAppProgramID(bytevector(v,v+N)); }
   bool getAppProgramID(bytevector &id) const;

   bool setDataStoreRequestedOperatorID(const Array<8> &id);
   bool getDataStoreRequestedOperatorID(Array<8> &id) const;

   bool setReceiptRequiredLimit(const BCD<6> &limit);
   bool setReceiptRequiredLimit(int64_t limit);
   bool getReceiptRequiredLimit(BCD<6> &limit) const;
   bool getReceiptRequiredLimit(int64_t &limit) const;

   bool setOptionStatus(const Array<2> &status);
   bool getOptionStatus(Array<2> &status) const;

   bool setTransactionQualifier(const Array<4> &q);
   bool getTransactionQualifier(Array<4> &q) const;

   bool setMSRVersionNumber(const std::vector<unsigned short> &ver);
   template<unsigned N> bool setMSRVersionNumber(const unsigned short (&v)[N])
   { return setMSRVersionNumber(std::vector<unsigned short>(v,v+N)); }
   bool getMSRVersionNumber(std::vector<unsigned short> &ver) const;

   bool setReaderCapabilities(unsigned char caps);
   bool getReaderCapabilities(unsigned char &caps) const;

   bool setTransactionCapabilities(const Array<4> &caps);
   bool getTransactionCapabilities(Array<4> &caps) const;

   bool setTerminalTransactionData(const bytevector &data);
   template<unsigned N> bool setTerminalTransactionData(const unsigned char (&v)[N])
   { return setTerminalTransactionData(bytevector(v,v+N)); }
   bool getTerminalTransactionData(bytevector &data) const;

   bool setMerchantCustomData(const Array<20> &data);
   bool getMerchantCustomData(Array<20> &data) const;

   bool getLibVersion(std::string &version) const;

   bool getEMVCOChecksum(std::string &chk) const;

   bool setEMVCOChecksumParameter(const Array<5> &cp);
   bool setEMVCOChecksumParameter(const EMVChecksumOptions &cp)
   { return setEMVCOChecksumParameter(cp.array());  }
   bool getEMVCOChecksumParameter(Array<5> &cp) const;
   bool getEMVCOChecksumParameter(EMVChecksumOptions &cp) const
   { return getEMVCOChecksumParameter(cp.array());  }

   bool setOfflineOnly(bool flag);
   bool getOfflineOnly(bool &flag) const;

   bool setTACIACDefaultHandling(unsigned char def);
   bool getTACIACDefaultHandling(unsigned char &def) const;

   bool setFallbackMIDs(const Array<3> &mid);
   bool getFallbackMIDs(Array<3> &mid) const;

   bool setEMVFallback(unsigned char fb);
   bool getEMVFallback(unsigned char &fb) const;

   bool setSpecialTransactions(const EMVSpecialTransactions &tx);
   bool getSpecialTransactions(EMVSpecialTransactions &tx) const;

   bool setPriorityApplications(const std::vector<bytevector> &apps);
   bool getPriorityApplications(std::vector<bytevector> &apps) const;

   bool setASI(unsigned char asi);
   bool getASI(unsigned char &asi) const;

   bool setTACDenial(const Array<5> &tac);
   bool getTACDenial(Array<5> &tac) const;

   bool setTACOnline(const Array<5> &tac);
   bool getTACOnline(Array<5> &tac) const;

   bool setTACDefault(const Array<5> &tac);
   bool getTACDefault(Array<5> &tac) const;

   bool setThreshold(unsigned th);
   bool getThreshold(unsigned &th) const;

   bool setMaxPercentOnline(const BCD<1> &p);
   bool setMaxPercentOnline(int p);
   bool getMaxPercentOnline(BCD<1> &p) const;
   bool getMaxPercentOnline(int &p) const;

   bool setPercentOnline(const BCD<1> &p);
   bool setPercentOnline(int p);
   bool getPercentOnline(BCD<1> &p) const;
   bool getPercentOnline(int &p) const;

   bool setDefaultTDOL(const bytevector &tdol);
   template<unsigned N> bool setDefaultTDOL(const unsigned char (&v)[N])
   { return setDefaultTDOL(bytevector(v,v+N)); }
   bool getDefaultTDOL(bytevector &tdol) const;

   bool setDefaultDDOL(const bytevector &ddol);
   template<unsigned N> bool setDefaultDDOL(const unsigned char (&v)[N])
   { return setDefaultDDOL(bytevector(v,v+N)); }
   bool getDefaultDDOL(bytevector &ddol) const;

   bool setAdditionalTags(const bytevector &tags);
   template<unsigned N> bool setAdditionalTags(const unsigned char (&v)[N])
   { return setAdditionalTags(bytevector(v,v+N)); }
   bool getAdditionalTags(bytevector &tags) const;

   bool setMandatoryTags(const std::vector<unsigned> &tags);
   template<unsigned N> bool setMandatoryTags(const unsigned (&v)[N])
   { return setMandatoryTags(std::vector<unsigned>(v,v+N)); }
   bool getMandatoryTags(std::vector<unsigned> &tags) const;

   bool setAppFlowCapabilities(const Array<5> &caps);
   bool setAppFlowCapabilities(const EMVAppFlowCapabilities &caps)
   { return setAppFlowCapabilities(caps.array()); }
   bool getAppFlowCapabilities(Array<5> &caps) const;
   bool getAppFlowCapabilities(EMVAppFlowCapabilities &caps) const
   { return getAppFlowCapabilities(caps.array()); }

   bool setAdditionalTagsCRD(const bytevector &tags);
   template<unsigned N> bool setAdditionalTagsCRD(const unsigned char (&v)[N])
   { return setAdditionalTagsCRD(bytevector(v,v+N)); }
   bool getAdditionalTagsCRD(bytevector &tags) const;

   bool setEMVApplication(unsigned char emv);
   bool getEMVApplication(unsigned char &emv) const;

   bool setAIPNoCVM(unsigned char cvm);
   bool getAIPNoCVM(unsigned char &cvm) const;

   bool setCustomCVM(unsigned char cvm);
   bool getCustomCVM(unsigned char &cvm) const;

   bool setAdditionalTerminalCapabilities(const Array<5> &caps);
   bool getAdditionalTerminalCapabilities(Array<5> &caps) const;

   bool setCDAProcessing(unsigned char cda);
   bool getCDAProcessing(unsigned char &cda) const;

   bool getObfuscatedPANString(std::string &pan) const;

   bool getObfuscatedTrack2String(std::string &track) const;

   bool setSecurityLimit(unsigned limit);
   bool getSecurityLimit(unsigned &limit) const;

   bool setCapabilitiesBelowLimit(const Array<3> &caps);
   bool getCapabilitiesBelowLimit(Array<3> &caps) const;

   bool setBeepVolume(unsigned short volume);
   bool getBeepVolume(unsigned short &volume) const;

   bool getKernelVersion(std::string &version) const;

   bool setConfigCommand(unsigned char cmd);
   bool getConfigCommand(unsigned char &cmd) const;

   bool setSupportedLanguages(const bytevector &lang);
   template<unsigned N> bool setSupportedLanguages(const unsigned char (&v)[N])
   { return setSupportedLanguages(bytevector(v,v+N)); }
   bool getSupportedLanguages(bytevector &lang) const;

   bool setRetryLimit(unsigned char limit);
   bool getRetryLimit(unsigned char &limit) const;

   bool getL1DriverVersion(std::string &version) const;

   bool getCtL1DriverVersion(std::string &version) const;

   bool getCtlsL1DriverVersion(std::string &version) const;

   bool setShortKernelID(unsigned char id);
   bool getShortKernelID(unsigned char &id) const;

   bool setProceedToFirstWriteFlag(unsigned char flag);
   bool getProceedToFirstWriteFlag(unsigned char &flag) const;

   bool setTagsToRead(const bytevector &ttr);
   template<unsigned N> bool setTagsToRead(const unsigned char (&v)[N])
   { return setTagsToRead(bytevector(v,v+N)); }
   bool getTagsToRead(bytevector &ttr) const;

   bool setCardDataInputCapability(unsigned char cap);
   bool getCardDataInputCapability(unsigned char &cap) const;

   bool setChipCVMAboveLimit(unsigned char cvm);
   bool getChipCVMAboveLimit(unsigned char &cvm) const;

   bool setChipCVMBelowLimit(unsigned char cvm);
   bool getChipCVMBelowLimit(unsigned char &cvm) const;

   bool setKernelConfiguration(unsigned char conf);
   bool getKernelConfiguration(unsigned char &conf) const;

   bool setTornTransactionLifetime(unsigned short ttl);
   bool getTornTransactionLifetime(unsigned short &ttl) const;

   bool setTornTransactionNumber(unsigned char num);
   bool getTornTransactionNumber(unsigned char &num) const;

   bool setMagstripeCVMAboveLimit(unsigned char cvm);
   bool getMagstripeCVMAboveLimit(unsigned char &cvm) const;

   bool setSecurityCapability(unsigned char cap);
   bool getSecurityCapability(unsigned char &cap) const;

   bool setTransactionLimitNoCVMOnDevice(const BCD<6> &limit);
   bool setTransactionLimitNoCVMOnDevice(int64_t limit);
   bool getTransactionLimitNoCVMOnDevice(BCD<6> &limit) const;
   bool getTransactionLimitNoCVMOnDevice(int64_t &limit) const;

   bool setTransactionLimitCVMOnDevice(const BCD<6> &limit);
   bool setTransactionLimitCVMOnDevice(int64_t limit);
   bool getTransactionLimitCVMOnDevice(BCD<6> &limit) const;
   bool getTransactionLimitCVMOnDevice(int64_t &limit) const;

   bool setDataExchangeTimeout(unsigned short tout);
   bool getDataExchangeTimeout(unsigned short &tout) const;

   bool setMagstripeCVMBelowLimit(unsigned char cvm);
   bool getMagstripeCVMBelowLimit(unsigned char &cvm) const;

   bool setMessageHoldTime(const BCD<3> &time);
   bool setMessageHoldTime(int time);
   bool getMessageHoldTime(BCD<3> &time) const;
   bool getMessageHoldTime(int &time) const;

   bool setFieldOffTime(unsigned char time);
   bool getFieldOffTime(unsigned char &time) const;

   bool setPhoneMessageTable(const bytevector &pmt);
   template<unsigned N> bool setPhoneMessageTable(const unsigned char (&v)[N])
   { return setPhoneMessageTable(bytevector(v,v+N)); }
   bool getPhoneMessageTable(bytevector &pmt) const;

   bool setRelayResistanceMinGracePeriod(unsigned short time);
   bool getRelayResistanceMinGracePeriod(unsigned short &time) const;

   bool setRelayResistanceMaxGracePeriod(unsigned short time);
   bool getRelayResistanceMaxGracePeriod(unsigned short &time) const;

   bool setRelayResistanceCAPDUTime(unsigned short time);
   bool getRelayResistanceCAPDUTime(unsigned short &time) const;

   bool setRelayResistanceRAPDUTime(unsigned short time);
   bool getRelayResistanceRAPDUTime(unsigned short &time) const;

   bool setRelayResistanceAccuracy(unsigned short time);
   bool getRelayResistanceAccuracy(unsigned short &time) const;

   bool setRelayResistanceTimeMismatchThreshold(unsigned char percent);
   bool getRelayResistanceTimeMismatchThreshold(unsigned char &percent) const;

   bool setFlowOptions(const Array<10> &opt);
   bool setFlowOptions(const EMVFlowOptions &opt)
   { return setFlowOptions(opt.array()); }
   bool getFlowOptions(Array<10> &opt) const;
   bool getFlowOptions(EMVFlowOptions &opt) const
   { return getFlowOptions(opt.array()); }

   bool setCtlsTerminalLimit(unsigned limit);
   bool getCtlsTerminalLimit(unsigned &limit) const;

   bool setKernelID(const Array<3> &id);
   bool setKernelID(unsigned id);
   bool getKernelID(Array<3> &id) const;
   bool getKernelID(unsigned &id) const;

   bool getEntryPointChecksum(std::string &chk) const;

   bool getKernelChecksum(std::string &chk) const;

   bool setRetapFieldOff(unsigned char offtime);
   bool getRetapFieldOff(unsigned char &offtime) const;

   bool setInternalKernelID(const Array<3> &id);
   bool setInternalKernelID(unsigned id);
   bool getInternalKernelID(Array<3> &id) const;
   bool getInternalKernelID(unsigned &id) const;

   bool setTECSupport(unsigned char ts);
   bool getTECSupport(unsigned char &ts) const;

   bool setKernelAppFlowCapabilities(const Array<5> &caps);
   bool setKernelAppFlowCapabilities(const EMVKernelAppFlowCapabilities &caps)
   { return setKernelAppFlowCapabilities(caps.array()); }
   bool getKernelAppFlowCapabilities(Array<5> &caps) const;
   bool getKernelAppFlowCapabilities(EMVKernelAppFlowCapabilities &caps) const
   { return getKernelAppFlowCapabilities(caps.array()); }

   bool setCtlsTransactionLimit(const BCD<6> &limit);
   bool setCtlsTransactionLimit(int64_t limit);
   bool getCtlsTransactionLimit(BCD<6> &limit) const;
   bool getCtlsTransactionLimit(int64_t &limit) const;

   bool setCVMRequiredLimit(const BCD<6> &limit);
   bool setCVMRequiredLimit(int64_t limit);
   bool getCVMRequiredLimit(BCD<6> &limit) const;
   bool getCVMRequiredLimit(int64_t &limit) const;

   bool setRiskManagementThreshold(const BCD<6> &t);
   bool setRiskManagementThreshold(int64_t t);
   bool getRiskManagementThreshold(BCD<6> &t) const;
   bool getRiskManagementThreshold(int64_t &t) const;

   bool setRiskManagementTargetPercentage(const BCD<1> &p);
   bool setRiskManagementTargetPercentage(int p);
   bool getRiskManagementTargetPercentage(BCD<1> &p) const;
   bool getRiskManagementTargetPercentage(int &p) const;

   bool setRiskManagementMaxTargetPercentage(const BCD<1> &p);
   bool setRiskManagementMaxTargetPercentage(int p);
   bool getRiskManagementMaxTargetPercentage(BCD<1> &p) const;
   bool getRiskManagementMaxTargetPercentage(int &p) const;

   bool setDynamicReaderLimitsOptions(unsigned char opts);
   bool getDynamicReaderLimitsOptions(unsigned char &opts) const;

   bool setTransactionLimitCash(const BCD<6> &limit);
   bool setTransactionLimitCash(int64_t limit);
   bool getTransactionLimitCash(BCD<6> &limit) const;
   bool getTransactionLimitCash(int64_t &limit) const;

   bool setCombinationOptions(const Array<2> &opt);
   bool getCombinationOptions(Array<2> &opt) const;


   bool setRemovalTimeout(unsigned short tout);
   bool getRemovalTimeout(unsigned short &tout) const;

   bool setCallbackTimeout(unsigned short tout);
   bool getCallbackTimeout(unsigned short &tout) const;

   bool setTornTransactionInterval(const Array<2> &interval);
   bool getTornTransactionInterval(Array<2> &interval) const;

   bool setCtlsKernelCapabilities(const Array<5> &caps);
   bool getCtlsKernelCapabilities(Array<5> &caps) const;

   bool setMTOL(const bytevector &mtol);
   template<unsigned N> bool setMTOL(const unsigned char (&v)[N])
   { return setMTOL(bytevector(v,v+N)); }
   bool getMTOL(bytevector &mtol) const;

   bool setUnpredictableNumberRange(unsigned char range);
   bool getUnpredictableNumberRange(unsigned char &range) const;

   bool setTermcapAboveCVMLimit(const Array<3> &tcap);
   bool getTermcapAboveCVMLimit(Array<3> &tcap) const;

   bool setTermcapBelowCVMLimit(const Array<3> &tcap);
   bool getTermcapBelowCVMLimit(Array<3> &tcap) const;

   bool setTACSwitch(const Array<5> &sw);
   bool getTACSwitch(Array<5> &sw) const;

   bool setIACSwitch(const Array<5> &sw);
   bool getIACSwitch(Array<5> &sw) const;

   bool setDataExchangeTags(const bytevector &tags);
   template<unsigned N> bool setDataExchangeTags(const unsigned char (&v)[N])
   { return setDataExchangeTags(bytevector(v,v+N)); }
   bool getDataExchangeTags(bytevector &tags) const;

   bool setDCRListIDs(const bytevector &idlist);
   bool getDCRListIDs(bytevector &idlist) const;

   bool setDCRListRanges(const bytevector &rangelist);
   bool getDCRListRanges(bytevector &rangelist) const;

   bool setApplicationAuthTransactionType(unsigned char type);
   bool getApplicationAuthTransactionType(unsigned char &type) const;

   bool setsetCtlsTransactionLimitODCVM(const BCD<6> &limit);
   bool setsetCtlsTransactionLimitODCVM(int64_t limit);
   bool getsetCtlsTransactionLimitODCVM(BCD<6> &limit) const;
   bool getsetCtlsTransactionLimitODCVM(int64_t &limit) const;

   bool setTransactionTypesSale(const Array<3> &type);
   bool getTransactionTypesSale(Array<3> &type) const;

   bool setTransactionTypesCash(const Array<3> &type);
   bool getTransactionTypesCash(Array<3> &type) const;

   bool setTransactionTypesCashback(const Array<3> &type);
   bool getTransactionTypesCashback(Array<3> &type) const;

   bool setBeepFreqSuccess(unsigned short freq);
   bool getBeepFreqSuccess(unsigned short &freq) const;

   bool setTransactionTypesRefund(const Array<3> &type);
   bool getTransactionTypesRefund(Array<3> &type) const;

   bool setBeepFreqAlert(unsigned short freq);
   bool getBeepFreqAlert(unsigned short &freq) const;

   bool setSecondTapDelay(unsigned char delay);
   bool getSecondTapDelay(unsigned char &delay) const;

   bool setHostTimeout(unsigned char tout);
   bool getHostTimeout(unsigned char &tout) const;


   // constructed data elements //

   bool setHotlist(const bytevector &hotlist);
   template<unsigned N> bool setHotlist(const unsigned char (&v)[N])
   { return setHotlist(bytevector(v,v+N)); }
   bool setHotlist(const TLV &hotlist);
   bool getHotlist(bytevector &hotlist) const;
   bool getHotlist(TLV &hotlist) const;

   bool setTagsToWriteBeforeGenAC(const TLV &ttw);
   bool getTagsToWriteBeforeGenAC(TLV &ttw) const;

   bool setTagsToWriteAfterGenAC(const TLV &ttw);
   bool getTagsToWriteAfterGenAC(TLV &ttw) const;

   struct DynamicReaderLimits {
      bytevector appProgramID;  
      BCD<6> floorLimit;        
      BCD<6> transactionLimit;  
      BCD<6> CVMRequiredLimit;  
      unsigned char options;    
#if __cplusplus >= 201103
      DynamicReaderLimits(const bytevector &aid_,
                          const BCD<6> &floorLimit_,
                          const BCD<6> &transactionLimit_,
                          const BCD<6> &CVMRequiredLimit_,
                          unsigned char options_)
          : appProgramID(aid_),
            floorLimit(floorLimit_),
            transactionLimit(transactionLimit_),
            CVMRequiredLimit(CVMRequiredLimit_),
            options(options_) {}
      DynamicReaderLimits() = default;
#endif
   };

   bool setDynamicReaderLimits(const std::vector<DynamicReaderLimits> &limits);
   bool getDynamicReaderLimits(std::vector<DynamicReaderLimits> &limits) const;

   // issuer specific

   bool setTransactionTypeIK(unsigned char type);
   bool getTransactionTypeIK(unsigned char &type) const;

   bool setFloorLimitIK(const BCD<6> &limit);
   bool setFloorLimitIK(int64_t limit);
   bool getFloorLimitIK(BCD<6> &limit) const;
   bool getFloorLimitIK(int64_t &limit) const;

   bool setCVMRequiredLimitPK(const BCD<6> &limit);
   bool setCVMRequiredLimitPK(int64_t limit);
   bool getCVMRequiredLimitPK(BCD<6> &limit) const;
   bool getCVMRequiredLimitPK(int64_t &limit) const;

   bool setFloorlimitPK(const BCD<6> &limit);
   bool setFloorlimitPK(int64_t limit);
   bool getFloorlimitPK(BCD<6> &limit) const;
   bool getFloorlimitPK(int64_t &limit) const;

   bool setFloorLimitMIR(const BCD<6> &limit);
   bool setFloorLimitMIR(int64_t limit);
   bool getFloorLimitMIR(BCD<6> &limit) const;
   bool getFloorLimitMIR(int64_t &limit) const;

   bool setTransactionLimitNoCVMMIR(const BCD<6> &limit);
   bool setTransactionLimitNoCVMMIR(int64_t limit);
   bool getTransactionLimitNoCVMMIR(BCD<6> &limit) const;
   bool getTransactionLimitNoCVMMIR(int64_t &limit) const;

   bool setTransactionLimitNoCDCVMMIR(const BCD<6> &limit);
   bool setTransactionLimitNoCDCVMMIR(int64_t limit);
   bool getTransactionLimitNoCDCVMMIR(BCD<6> &limit) const;
   bool getTransactionLimitNoCDCVMMIR(int64_t &limit) const;

   bool setTransactionLimitCDCVMMIR(const BCD<6> &limit);
   bool setTransactionLimitCDCVMMIR(int64_t limit);
   bool getTransactionLimitCDCVMMIR(BCD<6> &limit) const;
   bool getTransactionLimitCDCVMMIR(int64_t &limit) const;

   bool setTPMCapabilitiesMIR(const Array<2> &caps);
   bool getTPMCapabilitiesMIR(Array<2> &caps) const;

   bool setTransactionRecoveryLimitMIR(unsigned char limit);
   bool getTransactionRecoveryLimitMIR(unsigned char &limit) const;

   bool setAdditionalVersionNumbers(const bytevector &ver);
   template<unsigned N> bool setAdditionalVersionNumbers(const unsigned char (&v)[N])
   { return setAdditionalVersionNumbers(bytevector(v,v+N)); }
   bool getAdditionalVersionNumbers(bytevector &ver) const;



   bool setTACDefaultMK(const Array<5> &tac);
   bool getTACDefaultMK(Array<5> &tac) const;

   bool setTACDenialMK(const Array<5> &tac);
   bool getTACDenialMK(Array<5> &tac) const;

   bool setTACOnlineMK(const Array<5> &tac);
   bool getTACOnlineMK(Array<5> &tac) const;

   bool setFloorLimitMK(const BCD<6> &limit);
   bool setFloorLimitMK(int64_t limit);
   bool getFloorLimitMK(BCD<6> &limit) const;
   bool getFloorLimitMK(int64_t &limit) const;

   bool setCVMRequiredLimitMK(const BCD<6> &limit);
   bool setCVMRequiredLimitMK(int64_t limit);
   bool getCVMRequiredLimitMK(BCD<6> &limit) const;
   bool getCVMRequiredLimitMK(int64_t &limit) const;

};




struct DllSpec EMVTxn: public TLV {
 public:
   typedef std::vector<unsigned char> bytevector;

 protected:
   bool exists(unsigned tag1) const;
   bool exists(unsigned tag1, unsigned tag2) const;

 public:

   // primitive data elements //

   bool getIssuerID(Array<4> &id) const;

   bool setAID(const bytevector &aid);
   template<unsigned N> bool setAID(const unsigned char (&v)[N])
   { return setAID(bytevector(v,v+N)); }
   bool getAID(bytevector &aid) const;

   bool getAppName(std::string &label) const;

   bool getAgreedAppName(std::string &name) const;

   bool getPAN(Array<10> &pan) const;

   bool getAIP(Array<2> &aip) const;

   bool getDFName(bytevector &name) const;

   bool getApplicationPriorityID(unsigned char &id) const;

   bool setAuthCode(const Array<6> &code);
   bool getAuthCode(Array<6> &code) const;

   bool setAuthResponseCode(const Array<2> &auth);
   bool getAuthResponseCode(Array<2> &auth) const;

   bool getCVMList(Array<28> &list) const;

   bool getTVR(Array<5> &tvr) const;

   bool setTransactionDate(const Array<3> &date);
   bool setTransactionDate(const std::string &date);
   bool getTransactionDate(Array<3> &date) const;
   bool getTransactionDate(std::string &date) const;

   bool getTransactionStatusInfo(Array<2> &status) const;

   bool setTransactionType(unsigned char type);
   bool getTransactionType(unsigned char &type) const;

   bool setCtlsLEDState(unsigned char state);
   bool getCtlsLEDState(unsigned char &state) const;

   bool setServerPollTimeout(unsigned char tout);
   bool getServerPollTimeout(unsigned char &tout) const;

   bool setBeepScenario(unsigned char bs);
   bool getBeepScenario(unsigned char &bs) const;

   bool getCardholderName(std::string &name) const;

   bool setExpirationDate(const Array<3> &date);
   bool getExpirationDate(Array<3> &date) const;

   bool getEffectiveDate(Array<3> &date) const;
   bool getEffectiveDate(std::string &date) const;

   bool setIssuerCountryCode(unsigned short country);
   bool getIssuerCountryCode(unsigned short &country) const;

   bool setTransactionCurrency(Currency currency);
   bool getTransactionCurrency(Currency &currency) const;

   bool setTransactionCurrency(int currency);
   bool getTransactionCurrency(int &currency) const;

   bool getLanguagePreference(std::string &lang) const;

   bool getServiceCode(Array<2> &code) const;

   bool getPANSequenceNumber(BCD<1> &num) const;
   bool getPANSequenceNumber(int &num) const;

   bool setTransactionCurrencyExp(unsigned char exp);
   bool getTransactionCurrencyExp(unsigned char &exp) const;

   bool setAccountType(unsigned char type);
   bool getAccountType(unsigned char &type) const;

   bool setAmount(const BCD<6> &amount);
   bool setAmount(int64_t amount);
   bool getAmount(BCD<6> &amount) const;
   bool getAmount(int64_t &amount) const;

   bool setCashbackAmount(const BCD<6> &amount);
   bool setCashbackAmount(int64_t amount);
   bool getCashbackAmount(BCD<6> &amount) const;
   bool getCashbackAmount(int64_t &amount) const;

   bool getTerminalAID(bytevector &aid) const;

   bool getKernelAppVersionNumber(Array<2> &version) const;

   bool getChipAppVersionNumber(Array<2> &version) const;

   bool getASRPD(bytevector &asrpd) const;

   bool getCardholderNameExt(std::string &name) const;

   bool getIACDefault(Array<5> &iac) const;

   bool getIACDenial(Array<5> &iac) const;

   bool getIACOnline(Array<5> &iac) const;

   bool getIssuerAppData(bytevector &idata) const;

   bool getIssuerCodeTableID(unsigned char &id) const;

   bool getPreferredName(std::string &label) const;

   bool getMerchantID(std::string &mid) const;

   bool getTerminalCountryCode(unsigned short &country) const;

   bool setFloorLimit(const BCD<6> &limit);
   bool setFloorLimit(int64_t limit);
   bool getFloorLimit(BCD<6> &limit) const;
   bool getFloorLimit(int64_t &limit) const;

   bool getIFDSerial(Array<8> &serial) const;

   bool setTransactionTime(const Array<3> &time);
   bool setTransactionTime(const std::string &time);
   bool getTransactionTime(Array<3> &time) const;
   bool getTransactionTime(std::string &time) const;

   bool setCryptogram(const Array<8> &crypt);
   bool getCryptogram(Array<8> &crypt) const;

   bool getCryptogramInfo(unsigned char &info) const;

   bool getTerminalCapabilities(Array<3> &caps) const;

   bool getCVMResults(Array<3> &cvmr) const;

   bool getTerminalType(unsigned char &type) const;

   bool getATC(Array<2> &atc) const;

   bool setUnpredictableNumber(unsigned num);
   bool getUnpredictableNumber(unsigned &num) const;

   bool getPOSEntryMode(unsigned char &mode) const;

   bool getAdditionalCapabilities(Array<5> &caps) const;

   bool setTransactionCounter(const BCD<4> &counter);
   bool setTransactionCounter(int counter);
   bool getTransactionCounter(BCD<4> &counter) const;
   bool getTransactionCounter(int &counter) const;

   bool setApplicationCurrency(Currency currency);
   bool getApplicationCurrency(Currency &currency) const;

   bool getDataAuthCode(Array<2> &code) const;

   bool getICCDynamicNumber(bytevector &dn) const;

   bool getTransactionCategory(unsigned char &cat) const;

   bool getAvailableOfflineAmount(BCD<6> &amount) const;
   bool getAvailableOfflineAmount(int64_t &amount) const;

   bool getTransactionQualifier(Array<4> &q) const;

   bool setVisaCTQ(const Array<2> &ctq);
   bool getVisaCTQ(Array<2> &ctq) const;

   bool setMasterAID(const bytevector &aid);
   template<unsigned N> bool setMasterAID(const unsigned char (&v)[N])
   { return setMasterAID(bytevector(v,v+N)); }
   bool getMasterAID(bytevector &aid) const;

   bool setBuildAppList(unsigned char opt);
   bool getBuildAppList(unsigned char &opt) const;

   bool getReaderNumber(unsigned char &num) const;

   bool getNonCriticalScriptResults(std::vector<Array<5> > &results) const;

   bool getCriticalScriptResults(std::vector<Array<5> > &results) const;

   bool setFallbackMIDs(const Array<3> &mid);
   bool getFallbackMIDs(Array<3> &mid) const;

   bool setEMVFallback(unsigned char fb);
   bool getEMVFallback(unsigned char &fb) const;

   bool getObfuscatedPAN(bytevector &pan) const;

   bool getObfuscatedTrack2(bytevector &track) const;

   bool setTACDenial(const Array<5> &tac);
   bool getTACDenial(Array<5> &tac) const;

   bool setTACOnline(const Array<5> &tac);
   bool getTACOnline(Array<5> &tac) const;

   bool setTACDefault(const Array<5> &tac);
   bool getTACDefault(Array<5> &tac) const;

   bool setThreshold(unsigned th);
   bool getThreshold(unsigned &th) const;

   bool setSpecialTransactions(const EMVSpecialTransactions &tx);
   bool getSpecialTransactions(EMVSpecialTransactions &tx) const;

   bool setLanguage(unsigned char info);
   bool getLanguage(unsigned char &info) const;

   bool setTextID(unsigned char id);
   bool getTextID(unsigned char &id) const;

   bool getBalanceBefore(BCD<6> &amount) const;
   bool getBalanceBefore(int64_t &amount) const;

   /* deprecated: always returns false */
   bool getDefaultAppName(std::string &appname) const;

   bool getApplicationLabel(std::string &appname) const;

   bool setAmountConfirmation(unsigned char when);
   bool getAmountConfirmation(unsigned char &when) const;

   bool setTransactionOptions(const Array<5> &opt);
   bool setTransactionOptions(const EMVTransactionOptions &opt)
   { return setTransactionOptions(opt.array()); }
   bool getTransactionOptions(Array<5> &opt) const;
   bool getTransactionOptions(EMVTransactionOptions &opt) const
   { return getTransactionOptions(opt.array()); }

   bool setTransactionSteps(const Array<3> &step);
   bool setTransactionSteps(const EMVTransactionSteps &step)
   { return setTransactionSteps(step.array()); }
   bool getTransactionSteps(Array<3> &step) const;
   bool getTransactionSteps(EMVTransactionSteps &step) const
   { return getTransactionSteps(step.array()); }

   bool getBalanceAfter(BCD<6> &amount) const;
   bool getBalanceAfter(int64_t &amount) const;

   bool setDCCInfo(const Array<3> &info);
   bool getDCCInfo(Array<3> &info) const;

   bool setFallbackMSROptions(unsigned char opt);
   bool getFallbackMSROptions(unsigned char &opt) const;

   bool setForceOnline(unsigned char force);
   bool getForceOnline(unsigned char &force) const;

   bool setPINBypass(bool bypass);
   bool getPINBypass(bool &bypass) const;

   bool getEMVStatus(unsigned &status) const;

   bool setForceAccept(unsigned char force);
   bool getForceAccept(unsigned char &force) const;

   bool setNoDirectorySelect(unsigned char nodir);
   bool getNoDirectorySelect(unsigned char &nodir) const;

   bool setPreselectedLanguage(unsigned char lang);
   bool getPreselectedLanguage(unsigned char &lang) const;

   bool setOnlineSwitch(unsigned char online);
   bool getOnlineSwitch(unsigned char &online) const;

   bool setNoCardholderConfirm(unsigned char conf);
   bool getNoCardholderConfirm(unsigned char &conf) const;

   bool setEMVPassthrough(unsigned char ep);
   bool getEMVPassthrough(unsigned char &ep) const;

   bool getPDOLInfo(unsigned char &info) const;

   bool getCardType(unsigned char &type) const;

   bool setOnlineResult(bool result);
   bool getOnlineResult(bool &result) const;

   bool setVoiceReferral(bool result);
   bool getVoiceReferral(bool &result) const;

   bool setAuthData(const bytevector &data);
   template<unsigned N> bool setAuthData(const unsigned char (&v)[N])
   { return setAuthData(bytevector(v,v+N)); }
   bool getAuthData(bytevector &data) const;

   bool setCriticalScript(const bytevector &script);
   template<unsigned N> bool setCriticalScript(const unsigned char (&v)[N])
   { return setCriticalScript(bytevector(v,v+N)); }
   bool getCriticalScript(bytevector &script) const;

   bool setNonCriticalScript(const bytevector &script);
   template<unsigned N> bool setNonCriticalScript(const unsigned char (&v)[N])
   { return setNonCriticalScript(bytevector(v,v+N)); }
   bool getNonCriticalScript(bytevector &script) const;

   bool setAuthResponseReferral(const Array<2> &ac);
   bool getAuthResponseReferral(Array<2> &ac) const;

   bool setAuthResponseSwitch(const Array<2> &resp);
   bool getAuthResponseSwitch(Array<2> &resp) const;

   bool setAuthResponseWrongPIN(const Array<2> &ac);
   bool getAuthResponseWrongPIN(Array<2> &ac) const;

   bool setAuthResponseOnlinePIN(const Array<2> &resp);
   bool getAuthResponseOnlinePIN(Array<2> &resp) const;

   bool setAdditionalResponseOK(const Array<2> &ac);
   bool getAdditionalResponseOK(Array<2> &ac) const;

   bool setWriteDSData(const bytevector &dsdata);
   bool getWriteDSData(bytevector &dsdata) const;

   bool setOfflinePINErrors(unsigned char errors);
   bool getOfflinePINErrors(unsigned char &errors) const;

   bool setWriteDataStoragedData(const bytevector &data);
   bool getWriteDataStoragedData(bytevector &data) const;

   bool setDCCForbidden(unsigned char dcc);
   bool getDCCForbidden(unsigned char &dcc) const;

   bool setDomesticInfo(const Array<3> &info);
   bool getDomesticInfo(Array<3> &info) const;

   bool setDomesticOptions(const Array<3> &opt);
   bool setDomesticOptions(const EMVDomesticOptions &opt)
   { return setDomesticOptions(opt.array()); }
   bool getDomesticOptions(Array<3> &opt) const;
   bool getDomesticOptions(EMVDomesticOptions &opt) const
   { return getDomesticOptions(opt.array()); }

   bool setVelocityOriginalIndex(unsigned char idx);
   bool getVelocityOriginalIndex(unsigned char &idx) const;

   bool getErrorData(Array<15> &error) const;

   bool getDisplayTextIndex(unsigned char &id) const;

   bool setVelocityProcessingResultBitmap(const Array<3> &bm);
   bool getVelocityProcessingResultBitmap(Array<3> &bm) const;

   bool getKernelDebug(bytevector &debug) const;

   bool setExcludeAID(const std::vector<bytevector> &aid);
   bool getExcludeAID(std::vector<bytevector> &aid) const;

   bool setExcludeCombos(const std::vector<std::pair<bytevector, Array<3> > > &combos);

   bool setCardholderInfo(unsigned char info);
   bool getCardholderInfo(unsigned char &info) const;

   bool setMerchantInfo(unsigned char info);
   bool getMerchantInfo(unsigned char &info) const;

   bool setConfirmAmount(bool confirm);
   bool getConfirmAmount(bool &confirm) const;

   bool setPANInBlacklist(unsigned char contained);
   bool getPANInBlacklist(unsigned char &contained) const;

   bool setStoredAmount(const BCD<6> &amount);
   bool setStoredAmount(int64_t amount);
   bool getStoredAmount(BCD<6> &amount) const;
   bool getStoredAmount(int64_t &amount) const;

   bool setSelector(unsigned char sel);
   bool getSelector(unsigned char &sel) const;

   bool setReducedCanditateList(const bytevector &cl);
   template<unsigned N> bool setReducedCanditateList(const unsigned char (&v)[N])
   { return setReducedCanditateList(bytevector(v,v+N)); }
   bool getReducedCanditateList(bytevector &cl) const;

   bool setModifyTransaction(unsigned char m);
   bool getModifyTransaction(unsigned char &m) const;

   bool setSkipPostprocessing(unsigned char skip);
   bool getSkipPostprocessing(unsigned char &skip) const;

   bool setPINInfo(unsigned char info);
   bool getPINInfo(unsigned char &info) const;

   bool setPINPublicModulus(const bytevector &modulus);
   template<unsigned N> bool setPINPublicModulus(const unsigned char (&v)[N])
   { return setPINPublicModulus(bytevector(v,v+N)); }
   bool getPINPublicModulus(bytevector &modulus) const;

   bool setPINPublicExponent(unsigned modulus);
   bool getPINPublicExponent(unsigned &modulus) const;

   bool setDCCMode(unsigned char mode);
   bool getDCCMode(unsigned char &mode) const;

   bool setDomesticAppResult(unsigned char res);
   bool getDomesticAppResult(unsigned char &res) const;

   bool setKernelToUse(const Array<3> &kernel);
   bool getKernelToUse(Array<3> &kernel) const;

   bool setCommunicationError(unsigned char err);
   bool getCommunicationError(unsigned char &err) const;

   bool getDestination(int &dest) const;

   bool setDataExchangeRequest(unsigned char req);
   bool getDataExchangeRequest(unsigned char &req) const;

   bool setDataExchangeState(unsigned char state);
   bool getDataExchangeState(unsigned char &state) const;

   bool setDataExchangeMode(unsigned char state);
   bool getDataExchangeMode(unsigned char &state) const;

   bool setDataExchangeDataNeeded(const bytevector &dn);
   template<unsigned N> bool setDataExchangeDataNeeded(const unsigned char (&v)[N])
   { return setDataExchangeDataNeeded(bytevector(v,v+N)); }
   bool getDataExchangeDataNeeded(bytevector &dn) const;

   bool setModifiedCandidates(const bytevector &cand);
   template<unsigned N> bool setModifiedCandidates(const unsigned char (&v)[N])
   { return setModifiedCandidates(bytevector(v,v+N)); }
   bool getModifiedCandidates(bytevector &cand) const;

   bool getSetupResult(Array<5> &result) const;

   bool setCBDisplayTextIndex(unsigned char idx);
   bool getCBDisplayTextIndex(unsigned char &idx) const;

   bool getCardID(Array<20> &id) const;

   bool getTrackStatus(Array<3> &track_status) const;

   bool getObfuscatedTrack1String(std::string &track) const;

   bool getTecselData(bytevector &data) const;

   bool setKernelID(const Array<3> &id);
   bool setKernelID(unsigned id);
   bool getKernelID(Array<3> &id) const;
   bool getKernelID(unsigned &id) const;

   bool setAppNameChosen(const std::string &name);
   bool getAppNameChosen(std::string &name) const;

   bool setApplicationKernelId(const Array<3> &id);
   bool setApplicationKernelId(unsigned id);
   bool getApplicationKernelId(Array<3> &id) const;
   bool getApplicationKernelId(unsigned &id) const;

   bool setAppNameUtf8(const std::string &name);
   bool getAppNameUtf8(std::string &name) const;

   bool getKernelPrivateNonBER(bytevector &nber) const;

   // constructed data elements //

   bool setFCIIssuerDiscrData(const TLV &data);
   bool getFCIIssuerDiscrData(TLV &data) const;

   bool setMemorySlotUpdateTemplate(const TLV &t);
   bool getMemorySlotUpdateTemplate(TLV &t) const;

   bool setMemorySlotReadTemplate(const TLV &t);
   bool getMemorySlotReadTemplate(TLV &t) const;

   struct DomesticApp {
      bytevector aid;                   
      std::string appLabel;             
      unsigned char asi;                
      unsigned char specialTX[8];       
      unsigned char noEMVConformSelect; 
#if __cplusplus >= 201103
      DomesticApp(const bytevector &aid_,
                  const std::string &appLabel_,
                  unsigned char asi_,
                  const unsigned char specialTx_[8],
                  unsigned char noEMVConformSelect_)
          : aid(aid_),
            appLabel(appLabel_),
            asi(asi_),
            noEMVConformSelect(noEMVConformSelect_) {
        memcpy(specialTX, specialTx_, 8);
      }
      DomesticApp() = default;
#endif
   };

   bool setDomesticApps(const std::vector<DomesticApp> &app);
   bool getDomesticApps(std::vector<DomesticApp> &app) const;

   struct FallbackMSR {
      unsigned char mid;          
      unsigned char specialTX[8]; 
      unsigned char fallback;     
      unsigned char options;      
#if __cplusplus >= 201103
      FallbackMSR(unsigned char mid_,
                  const unsigned char *specialTx_,
                  unsigned char fallback_,
                  unsigned char options_)
          : mid(mid_), fallback(fallback_), options(options_) {
        memcpy(specialTX, specialTx_, 8);
      }
      FallbackMSR() = default;
#endif
   };

   bool setFallbackMSR(const std::vector<FallbackMSR> &mid);
   bool getFallbackMSR(std::vector<FallbackMSR> &mid) const;

   struct Candidate {
      bytevector aid;       
      std::string appName;  
#if __cplusplus >= 201103
      Candidate(const bytevector &aid_, const std::string &appName_)
          : aid(aid_), appName(appName_) {}
      Candidate() = default;
#endif
   };

   bool setCandidateList(const std::vector<Candidate> &cand);
   bool getCandidateList(std::vector<Candidate> &cand) const;

   struct CandidateExt {
      bytevector aid;                   
      std::string appName;              
      std::string language;             
      unsigned kernelID;                
      unsigned char velocityOrigIdx;    
      unsigned char velocityProcResult; 
#if __cplusplus >= 201103
      CandidateExt(const bytevector &aid_,
                   const std::string &appName_,
                   const std::string &language_,
                   unsigned kernelID_,
                   unsigned char velocityOrigIdx_,
                   unsigned char velocityProcResult_)
          : aid(aid_),
            appName(appName_),
            language(language_),
            kernelID(kernelID_),
            velocityOrigIdx(velocityOrigIdx_),
            velocityProcResult(velocityProcResult_) {}
      CandidateExt() = default;
#endif
   };

   bool setCBCandidateList(const std::vector<CandidateExt> &cand);
   bool getCBCandidateList(std::vector<CandidateExt> &cand) const;

   bool setDataExchangeReceivedData(const TLV &data);
   bool getDataExchangeReceivedData(TLV &data) const;

   bool setDataExchangeSendData(const TLV &data);
   bool getDataExchangeSendData(TLV &data) const;

   bool getNFCVASData(TLV &data) const;
};

} // namespace vfisdi

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
