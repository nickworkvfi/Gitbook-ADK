---
hidden: true
title: sdi_emv.h
---

<a href="sdiapi_2src_2sdiapi_2sdi__emv_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++ -*-
 2 #ifndef SDI_EMV_H_20200406
 3 #define SDI_EMV_H_20200406
 4 
 6 #include "tlv.h"
 7 #include "sdi_enum.h"
 8 #include "sdi_emvbits.h"
 9 #include "array.h"
 10 #include "bcd.h"
 11 #include <utility> // for std::pair
 12 
 13 #if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
 14 # define DllSpec __declspec(dllexport)
 15 #elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
 16 # define DllSpec __attribute__((visibility ("default")))
 17 #else
 18 # define DllSpec
 19 #endif
 20 
 21 namespace vfisdi {
 22 
 24 typedef BitMask<40,EMVAppFlowCapabilityBits> EMVAppFlowCapabilities;
 25 
 27 typedef BitMask<40,EMVKernelAppFlowCapabilityBits> EMVKernelAppFlowCapabilities;
 28 
 30 typedef BitMask<80,EMVFlowOptionBits> EMVFlowOptions;
 31 
 33 typedef BitMask<40,EMVChecksumOptionBits> EMVChecksumOptions;
 34 
 36 typedef BitMask<40,EMVTransactionOptionBits> EMVTransactionOptions;
 37 
 39 typedef BitMask<24,EMVTransactionStepBits> EMVTransactionSteps;
 40 
 41 typedef BitMask<24,EMVDomesticOptionBits> EMVDomesticOptions;
 42 
 43 
 45 class EMVSpecialTransactions: public Array<8> {
 46  public:
 48  EMVSpecialTransactions():Array<8>() {}
 51  EMVSpecialTransactions(const unsigned char val[8]) { set(val); }
 52 
 55  void setReversal(EMVSpecialReversal r) { v[0]=(v[0]&0xf)|(unsigned char)(r<<4); }
 58  EMVSpecialReversal getReversal() const { return EMVSpecialReversal(v[0]>>4 & 0xf); }
 59 
 62  void setRefund(EMVSpecialRefund r) { v[0]=(v[0]&0xf0)|(unsigned char)r; }
 65  EMVSpecialRefund getRefund() const { return EMVSpecialRefund(v[0] & 0xf); }
 66 
 69  void setReservation(EMVSpecialReservation r) { v[1]=(v[1]&0xf)|(unsigned char)(r<<4); }
 72  EMVSpecialReservation getReservation() const { return EMVSpecialReservation(v[1]>>4 & 0xf); }
 73 
 76  void setTip(EMVSpecialTip r) { v[1]=(v[1]&0xf0)|(unsigned char)r; }
 79  EMVSpecialTip getTip() const { return EMVSpecialTip(v[1] & 0xf); }
 80 
 83  void setReferral(EMVSpecialReferral r) { v[2]=(v[2]&0xf)|(unsigned char)(r<<4); }
 86  EMVSpecialReferral getReferral() const { return EMVSpecialReferral(v[2]>>4 & 0xf); }
 87 
 90  void setVoice(EMVSpecialVoice r) { v[2]=(v[2]&0xf0)|(unsigned char)r; }
 93  EMVSpecialVoice getVoice() const { return EMVSpecialVoice(v[2] & 0xf); }
 94 
 97  void setFallback(EMVSpecialFallback r) { v[3]=(v[3]&0xf0)|(unsigned char)r; }
 100  EMVSpecialFallback getFallback() const { return EMVSpecialFallback(v[3] & 0xf); }
 101 
 104  void setIgnoreCard(EMVSpecialIgnoreCard r) { v[4]=(v[4]&0xf)|(unsigned char)(r<<4); }
 107  EMVSpecialIgnoreCard getIgnoreCard() const { return EMVSpecialIgnoreCard(v[4]>>4 & 0xf); }
 108 };
 109 
 113 
 116 struct DllSpec EMVConf: public TLV {
 117  public:
 119  typedef std::vector<unsigned char> bytevector;
 120 
 121  protected:
 122  bool exists(unsigned tag1) const;
 123  bool exists(unsigned tag1, unsigned tag2) const;
 124 
 125  public:
 126 
 128  // primitive data elements //
 130 
 133  bool setIssuerID(const Array<4> &id);
 136  bool getIssuerID(Array<4> &id) const;
 137 
 140  bool setAID(const bytevector &aid);
 142  template<unsigned N> bool setAID(const unsigned char (&v)[N])
 143  { return setAID(bytevector(v,v+N)); }
 146  bool getAID(bytevector &aid) const;
 147 
 150  bool setPOIInfo(const bytevector &poi);
 153  bool getPOIInfo(bytevector &poi) const;
 154 
 157  bool setDefaultAppName(const std::string &appname);
 160  bool getDefaultAppName(std::string &appname) const;
 161 
 164  bool setTransactionCurrency(Currency currency);
 167  bool getTransactionCurrency(Currency &currency) const;
 168 
 171  bool setTransactionCurrency(int currency);
 174  bool getTransactionCurrency(int &currency) const;
 175 
 178  bool setTransactionCurrencyExp(unsigned char exp);
 181  bool getTransactionCurrencyExp(unsigned char &exp) const;
 182 
 185  bool setAcquirerID(const Array<6> &acq);
 188  bool getAcquirerID(Array<6> &acq) const;
 189 
 192  bool setChipAppVersionNumber(const std::vector<unsigned short> &version);
 194  template<unsigned N> bool setChipAppVersionNumber(const unsigned short (&v)[N])
 195  { return setChipAppVersionNumber(std::vector<unsigned short>(v,v+N)); }
 198  bool getChipAppVersionNumber(std::vector<unsigned short> &version) const;
 199 
 200 
 203  bool setMerchantCategory(const Array<2> &category);
 206  bool getMerchantCategory(Array<2> &category) const;
 207 
 210  bool setMerchantID(const std::string &mid);
 213  bool getMerchantID(std::string &mid) const;
 214 
 217  bool setTerminalCountryCode(unsigned short country);
 220  bool getTerminalCountryCode(unsigned short &country) const;
 221 
 224  bool setFloorLimit(const BCD<6> &limit);
 227  bool setFloorLimit(int64_t limit);
 230  bool getFloorLimit(BCD<6> &limit) const;
 233  bool getFloorLimit(int64_t &limit) const;
 234 
 237  bool setTerminalID(const Array<8> &id);
 240  bool getTerminalID(Array<8> &id) const;
 241 
 244  bool setTerminalRiskManagement(const Array<8> &trm);
 247  bool getTerminalRiskManagement(Array<8> &trm) const;
 248 
 251  bool setIFDSerial(const Array<8> &serial);
 254  bool getIFDSerial(Array<8> &serial) const;
 255 
 258  bool setTerminalCapabilities(const Array<3> &caps);
 261  bool getTerminalCapabilities(Array<3> &caps) const;
 262 
 265  bool setTerminalType(unsigned char type);
 268  bool getTerminalType(unsigned char &type) const;
 269 
 272  bool setPOSEntryMode(unsigned char mode);
 275  bool getPOSEntryMode(unsigned char &mode) const;
 276 
 279  bool setAdditionalCapabilities(const Array<5> &caps);
 282  bool getAdditionalCapabilities(Array<5> &caps) const;
 283 
 286  bool setMerchantNameLocation(const std::string &nameloc);
 289  bool getMerchantNameLocation(std::string &nameloc) const;
 290 
 293  bool setTransactionCategory(unsigned char cat);
 296  bool getTransactionCategory(unsigned char &cat) const;
 297 
 300  bool setInterchangeProfile(const Array<3> &icc);
 303  bool getInterchangeProfile(Array<3> &icc) const;
 304 
 307  bool setMerchantType(unsigned char type);
 310  bool getMerchantType(unsigned char &type) const;
 311 
 314  bool setTerminalTransactionInformation(const Array<3> &info);
 317  bool getTerminalTransactionInformation(Array<3> &info) const;
 318 
 321  bool setAppProgramID(const bytevector &id);
 323  template<unsigned N> bool setAppProgramID(const unsigned char (&v)[N])
 324  { return setAppProgramID(bytevector(v,v+N)); }
 327  bool getAppProgramID(bytevector &id) const;
 328 
 331  bool setDataStoreRequestedOperatorID(const Array<8> &id);
 334  bool getDataStoreRequestedOperatorID(Array<8> &id) const;
 335 
 338  bool setReceiptRequiredLimit(const BCD<6> &limit);
 341  bool setReceiptRequiredLimit(int64_t limit);
 344  bool getReceiptRequiredLimit(BCD<6> &limit) const;
 347  bool getReceiptRequiredLimit(int64_t &limit) const;
 348 
 351  bool setOptionStatus(const Array<2> &status);
 354  bool getOptionStatus(Array<2> &status) const;
 355 
 358  bool setTransactionQualifier(const Array<4> &q);
 361  bool getTransactionQualifier(Array<4> &q) const;
 362 
 365  bool setMSRVersionNumber(const std::vector<unsigned short> &ver);
 367  template<unsigned N> bool setMSRVersionNumber(const unsigned short (&v)[N])
 368  { return setMSRVersionNumber(std::vector<unsigned short>(v,v+N)); }
 371  bool getMSRVersionNumber(std::vector<unsigned short> &ver) const;
 372 
 375  bool setReaderCapabilities(unsigned char caps);
 378  bool getReaderCapabilities(unsigned char &caps) const;
 379 
 382  bool setTransactionCapabilities(const Array<4> &caps);
 385  bool getTransactionCapabilities(Array<4> &caps) const;
 386 
 389  bool setTerminalTransactionData(const bytevector &data);
 391  template<unsigned N> bool setTerminalTransactionData(const unsigned char (&v)[N])
 392  { return setTerminalTransactionData(bytevector(v,v+N)); }
 395  bool getTerminalTransactionData(bytevector &data) const;
 396 
 399  bool setMerchantCustomData(const Array<20> &data);
 402  bool getMerchantCustomData(Array<20> &data) const;
 403 
 406  bool getLibVersion(std::string &version) const;
 407 
 410  bool getEMVCOChecksum(std::string &chk) const;
 411 
 414  bool setEMVCOChecksumParameter(const Array<5> &cp);
 417  bool setEMVCOChecksumParameter(const EMVChecksumOptions &cp)
 418  { return setEMVCOChecksumParameter(cp.array()); }
 421  bool getEMVCOChecksumParameter(Array<5> &cp) const;
 424  bool getEMVCOChecksumParameter(EMVChecksumOptions &cp) const
 425  { return getEMVCOChecksumParameter(cp.array()); }
 426 
 430  bool setOfflineOnly(bool flag);
 434  bool getOfflineOnly(bool &flag) const;
 435 
 439  bool setTACIACDefaultHandling(unsigned char def);
 443  bool getTACIACDefaultHandling(unsigned char &def) const;
 444 
 447  bool setFallbackMIDs(const Array<3> &mid);
 450  bool getFallbackMIDs(Array<3> &mid) const;
 451 
 454  bool setEMVFallback(unsigned char fb);
 457  bool getEMVFallback(unsigned char &fb) const;
 458 
 461  bool setSpecialTransactions(const EMVSpecialTransactions &tx);
 464  bool getSpecialTransactions(EMVSpecialTransactions &tx) const;
 465 
 470  bool setPriorityApplications(const std::vector<bytevector> &apps);
 473  bool getPriorityApplications(std::vector<bytevector> &apps) const;
 474 
 477  bool setASI(unsigned char asi);
 480  bool getASI(unsigned char &asi) const;
 481 
 484  bool setTACDenial(const Array<5> &tac);
 487  bool getTACDenial(Array<5> &tac) const;
 488 
 491  bool setTACOnline(const Array<5> &tac);
 494  bool getTACOnline(Array<5> &tac) const;
 495 
 498  bool setTACDefault(const Array<5> &tac);
 501  bool getTACDefault(Array<5> &tac) const;
 502 
 505  bool setThreshold(unsigned th);
 508  bool getThreshold(unsigned &th) const;
 509 
 512  bool setMaxPercentOnline(const BCD<1> &p);
 515  bool setMaxPercentOnline(int p);
 518  bool getMaxPercentOnline(BCD<1> &p) const;
 521  bool getMaxPercentOnline(int &p) const;
 522 
 525  bool setPercentOnline(const BCD<1> &p);
 528  bool setPercentOnline(int p);
 531  bool getPercentOnline(BCD<1> &p) const;
 534  bool getPercentOnline(int &p) const;
 535 
 538  bool setDefaultTDOL(const bytevector &tdol);
 540  template<unsigned N> bool setDefaultTDOL(const unsigned char (&v)[N])
 541  { return setDefaultTDOL(bytevector(v,v+N)); }
 544  bool getDefaultTDOL(bytevector &tdol) const;
 545 
 548  bool setDefaultDDOL(const bytevector &ddol);
 550  template<unsigned N> bool setDefaultDDOL(const unsigned char (&v)[N])
 551  { return setDefaultDDOL(bytevector(v,v+N)); }
 554  bool getDefaultDDOL(bytevector &ddol) const;
 555 
 558  bool setAdditionalTags(const bytevector &tags);
 560  template<unsigned N> bool setAdditionalTags(const unsigned char (&v)[N])
 561  { return setAdditionalTags(bytevector(v,v+N)); }
 564  bool getAdditionalTags(bytevector &tags) const;
 565 
 568  bool setMandatoryTags(const std::vector<unsigned> &tags);
 570  template<unsigned N> bool setMandatoryTags(const unsigned (&v)[N])
 571  { return setMandatoryTags(std::vector<unsigned>(v,v+N)); }
 574  bool getMandatoryTags(std::vector<unsigned> &tags) const;
 575 
 578  bool setAppFlowCapabilities(const Array<5> &caps);
 581  bool setAppFlowCapabilities(const EMVAppFlowCapabilities &caps)
 582  { return setAppFlowCapabilities(caps.array()); }
 585  bool getAppFlowCapabilities(Array<5> &caps) const;
 588  bool getAppFlowCapabilities(EMVAppFlowCapabilities &caps) const
 589  { return getAppFlowCapabilities(caps.array()); }
 590 
 593  bool setAdditionalTagsCRD(const bytevector &tags);
 595  template<unsigned N> bool setAdditionalTagsCRD(const unsigned char (&v)[N])
 596  { return setAdditionalTagsCRD(bytevector(v,v+N)); }
 599  bool getAdditionalTagsCRD(bytevector &tags) const;
 600 
 603  bool setEMVApplication(unsigned char emv);
 606  bool getEMVApplication(unsigned char &emv) const;
 607 
 610  bool setAIPNoCVM(unsigned char cvm);
 613  bool getAIPNoCVM(unsigned char &cvm) const;
 614 
 617  bool setCustomCVM(unsigned char cvm);
 620  bool getCustomCVM(unsigned char &cvm) const;
 621 
 624  bool setAdditionalTerminalCapabilities(const Array<5> &caps);
 627  bool getAdditionalTerminalCapabilities(Array<5> &caps) const;
 628 
 631  bool setCDAProcessing(unsigned char cda);
 634  bool getCDAProcessing(unsigned char &cda) const;
 635 
 638  bool getObfuscatedPANString(std::string &pan) const;
 639 
 642  bool getObfuscatedTrack2String(std::string &track) const;
 643 
 646  bool setSecurityLimit(unsigned limit);
 649  bool getSecurityLimit(unsigned &limit) const;
 650 
 653  bool setCapabilitiesBelowLimit(const Array<3> &caps);
 656  bool getCapabilitiesBelowLimit(Array<3> &caps) const;
 657 
 660  bool setBeepVolume(unsigned short volume);
 663  bool getBeepVolume(unsigned short &volume) const;
 664 
 667  bool getKernelVersion(std::string &version) const;
 668 
 671  bool setConfigCommand(unsigned char cmd);
 674  bool getConfigCommand(unsigned char &cmd) const;
 675 
 678  bool setSupportedLanguages(const bytevector &lang);
 680  template<unsigned N> bool setSupportedLanguages(const unsigned char (&v)[N])
 681  { return setSupportedLanguages(bytevector(v,v+N)); }
 684  bool getSupportedLanguages(bytevector &lang) const;
 685 
 688  bool setRetryLimit(unsigned char limit);
 691  bool getRetryLimit(unsigned char &limit) const;
 692 
 698  bool getL1DriverVersion(std::string &version) const;
 699 
 703  bool getCtL1DriverVersion(std::string &version) const;
 704 
 708  bool getCtlsL1DriverVersion(std::string &version) const;
 709 
 712  bool setShortKernelID(unsigned char id);
 715  bool getShortKernelID(unsigned char &id) const;
 716 
 719  bool setProceedToFirstWriteFlag(unsigned char flag);
 722  bool getProceedToFirstWriteFlag(unsigned char &flag) const;
 723 
 726  bool setTagsToRead(const bytevector &ttr);
 728  template<unsigned N> bool setTagsToRead(const unsigned char (&v)[N])
 729  { return setTagsToRead(bytevector(v,v+N)); }
 732  bool getTagsToRead(bytevector &ttr) const;
 733 
 736  bool setCardDataInputCapability(unsigned char cap);
 739  bool getCardDataInputCapability(unsigned char &cap) const;
 740 
 743  bool setChipCVMAboveLimit(unsigned char cvm);
 746  bool getChipCVMAboveLimit(unsigned char &cvm) const;
 747 
 750  bool setChipCVMBelowLimit(unsigned char cvm);
 753  bool getChipCVMBelowLimit(unsigned char &cvm) const;
 754 
 757  bool setKernelConfiguration(unsigned char conf);
 760  bool getKernelConfiguration(unsigned char &conf) const;
 761 
 764  bool setTornTransactionLifetime(unsigned short ttl);
 767  bool getTornTransactionLifetime(unsigned short &ttl) const;
 768 
 771  bool setTornTransactionNumber(unsigned char num);
 774  bool getTornTransactionNumber(unsigned char &num) const;
 775 
 778  bool setMagstripeCVMAboveLimit(unsigned char cvm);
 781  bool getMagstripeCVMAboveLimit(unsigned char &cvm) const;
 782 
 785  bool setSecurityCapability(unsigned char cap);
 788  bool getSecurityCapability(unsigned char &cap) const;
 789 
 792  bool setTransactionLimitNoCVMOnDevice(const BCD<6> &limit);
 795  bool setTransactionLimitNoCVMOnDevice(int64_t limit);
 798  bool getTransactionLimitNoCVMOnDevice(BCD<6> &limit) const;
 801  bool getTransactionLimitNoCVMOnDevice(int64_t &limit) const;
 802 
 805  bool setTransactionLimitCVMOnDevice(const BCD<6> &limit);
 808  bool setTransactionLimitCVMOnDevice(int64_t limit);
 811  bool getTransactionLimitCVMOnDevice(BCD<6> &limit) const;
 814  bool getTransactionLimitCVMOnDevice(int64_t &limit) const;
 815 
 818  bool setDataExchangeTimeout(unsigned short tout);
 821  bool getDataExchangeTimeout(unsigned short &tout) const;
 822 
 825  bool setMagstripeCVMBelowLimit(unsigned char cvm);
 828  bool getMagstripeCVMBelowLimit(unsigned char &cvm) const;
 829 
 832  bool setMessageHoldTime(const BCD<3> &time);
 835  bool setMessageHoldTime(int time);
 838  bool getMessageHoldTime(BCD<3> &time) const;
 841  bool getMessageHoldTime(int &time) const;
 842 
 845  bool setFieldOffTime(unsigned char time);
 848  bool getFieldOffTime(unsigned char &time) const;
 849 
 852  bool setPhoneMessageTable(const bytevector &pmt);
 854  template<unsigned N> bool setPhoneMessageTable(const unsigned char (&v)[N])
 855  { return setPhoneMessageTable(bytevector(v,v+N)); }
 858  bool getPhoneMessageTable(bytevector &pmt) const;
 859 
 862  bool setRelayResistanceMinGracePeriod(unsigned short time);
 865  bool getRelayResistanceMinGracePeriod(unsigned short &time) const;
 866 
 869  bool setRelayResistanceMaxGracePeriod(unsigned short time);
 872  bool getRelayResistanceMaxGracePeriod(unsigned short &time) const;
 873 
 876  bool setRelayResistanceCAPDUTime(unsigned short time);
 879  bool getRelayResistanceCAPDUTime(unsigned short &time) const;
 880 
 883  bool setRelayResistanceRAPDUTime(unsigned short time);
 886  bool getRelayResistanceRAPDUTime(unsigned short &time) const;
 887 
 890  bool setRelayResistanceAccuracy(unsigned short time);
 893  bool getRelayResistanceAccuracy(unsigned short &time) const;
 894 
 897  bool setRelayResistanceTimeMismatchThreshold(unsigned char percent);
 900  bool getRelayResistanceTimeMismatchThreshold(unsigned char &percent) const;
 901 
 904  bool setFlowOptions(const Array<10> &opt);
 907  bool setFlowOptions(const EMVFlowOptions &opt)
 908  { return setFlowOptions(opt.array()); }
 911  bool getFlowOptions(Array<10> &opt) const;
 914  bool getFlowOptions(EMVFlowOptions &opt) const
 915  { return getFlowOptions(opt.array()); }
 916 
 919  bool setCtlsTerminalLimit(unsigned limit);
 922  bool getCtlsTerminalLimit(unsigned &limit) const;
 923 
 926  bool setKernelID(const Array<3> &id);
 929  bool setKernelID(unsigned id);
 932  bool getKernelID(Array<3> &id) const;
 935  bool getKernelID(unsigned &id) const;
 936 
 939  bool getEntryPointChecksum(std::string &chk) const;
 940 
 943  bool getKernelChecksum(std::string &chk) const;
 944 
 947  bool setRetapFieldOff(unsigned char offtime);
 950  bool getRetapFieldOff(unsigned char &offtime) const;
 951 
 954  bool setInternalKernelID(const Array<3> &id);
 957  bool setInternalKernelID(unsigned id);
 960  bool getInternalKernelID(Array<3> &id) const;
 963  bool getInternalKernelID(unsigned &id) const;
 964 
 967  bool setTECSupport(unsigned char ts);
 970  bool getTECSupport(unsigned char &ts) const;
 971 
 974  bool setKernelAppFlowCapabilities(const Array<5> &caps);
 977  bool setKernelAppFlowCapabilities(const EMVKernelAppFlowCapabilities &caps)
 978  { return setKernelAppFlowCapabilities(caps.array()); }
 981  bool getKernelAppFlowCapabilities(Array<5> &caps) const;
 984  bool getKernelAppFlowCapabilities(EMVKernelAppFlowCapabilities &caps) const
 985  { return getKernelAppFlowCapabilities(caps.array()); }
 986 
 989  bool setCtlsTransactionLimit(const BCD<6> &limit);
 992  bool setCtlsTransactionLimit(int64_t limit);
 995  bool getCtlsTransactionLimit(BCD<6> &limit) const;
 998  bool getCtlsTransactionLimit(int64_t &limit) const;
 999 
 1002  bool setCVMRequiredLimit(const BCD<6> &limit);
 1005  bool setCVMRequiredLimit(int64_t limit);
 1008  bool getCVMRequiredLimit(BCD<6> &limit) const;
 1011  bool getCVMRequiredLimit(int64_t &limit) const;
 1012 
 1015  bool setRiskManagementThreshold(const BCD<6> &t);
 1018  bool setRiskManagementThreshold(int64_t t);
 1021  bool getRiskManagementThreshold(BCD<6> &t) const;
 1024  bool getRiskManagementThreshold(int64_t &t) const;
 1025 
 1028  bool setRiskManagementTargetPercentage(const BCD<1> &p);
 1031  bool setRiskManagementTargetPercentage(int p);
 1034  bool getRiskManagementTargetPercentage(BCD<1> &p) const;
 1037  bool getRiskManagementTargetPercentage(int &p) const;
 1038 
 1041  bool setRiskManagementMaxTargetPercentage(const BCD<1> &p);
 1044  bool setRiskManagementMaxTargetPercentage(int p);
 1047  bool getRiskManagementMaxTargetPercentage(BCD<1> &p) const;
 1050  bool getRiskManagementMaxTargetPercentage(int &p) const;
 1051 
 1054  bool setDynamicReaderLimitsOptions(unsigned char opts);
 1057  bool getDynamicReaderLimitsOptions(unsigned char &opts) const;
 1058 
 1061  bool setTransactionLimitCash(const BCD<6> &limit);
 1064  bool setTransactionLimitCash(int64_t limit);
 1067  bool getTransactionLimitCash(BCD<6> &limit) const;
 1070  bool getTransactionLimitCash(int64_t &limit) const;
 1071 
 1074  bool setCombinationOptions(const Array<2> &opt);
 1077  bool getCombinationOptions(Array<2> &opt) const;
 1078 
 1079 
 1082  bool setRemovalTimeout(unsigned short tout);
 1085  bool getRemovalTimeout(unsigned short &tout) const;
 1086 
 1089  bool setCallbackTimeout(unsigned short tout);
 1092  bool getCallbackTimeout(unsigned short &tout) const;
 1093 
 1096  bool setTornTransactionInterval(const Array<2> &interval);
 1099  bool getTornTransactionInterval(Array<2> &interval) const;
 1100 
 1103  bool setCtlsKernelCapabilities(const Array<5> &caps);
 1106  bool getCtlsKernelCapabilities(Array<5> &caps) const;
 1107 
 1110  bool setMTOL(const bytevector &mtol);
 1112  template<unsigned N> bool setMTOL(const unsigned char (&v)[N])
 1113  { return setMTOL(bytevector(v,v+N)); }
 1116  bool getMTOL(bytevector &mtol) const;
 1117 
 1120  bool setUnpredictableNumberRange(unsigned char range);
 1123  bool getUnpredictableNumberRange(unsigned char &range) const;
 1124 
 1127  bool setTermcapAboveCVMLimit(const Array<3> &tcap);
 1130  bool getTermcapAboveCVMLimit(Array<3> &tcap) const;
 1131 
 1134  bool setTermcapBelowCVMLimit(const Array<3> &tcap);
 1137  bool getTermcapBelowCVMLimit(Array<3> &tcap) const;
 1138 
 1141  bool setTACSwitch(const Array<5> &sw);
 1144  bool getTACSwitch(Array<5> &sw) const;
 1145 
 1148  bool setIACSwitch(const Array<5> &sw);
 1151  bool getIACSwitch(Array<5> &sw) const;
 1152 
 1155  bool setDataExchangeTags(const bytevector &tags);
 1157  template<unsigned N> bool setDataExchangeTags(const unsigned char (&v)[N])
 1158  { return setDataExchangeTags(bytevector(v,v+N)); }
 1161  bool getDataExchangeTags(bytevector &tags) const;
 1162 
 1165  bool setDCRListIDs(const bytevector &idlist);
 1168  bool getDCRListIDs(bytevector &idlist) const;
 1169 
 1172  bool setDCRListRanges(const bytevector &rangelist);
 1175  bool getDCRListRanges(bytevector &rangelist) const;
 1176 
 1179  bool setApplicationAuthTransactionType(unsigned char type);
 1182  bool getApplicationAuthTransactionType(unsigned char &type) const;
 1183 
 1186  bool setsetCtlsTransactionLimitODCVM(const BCD<6> &limit);
 1189  bool setsetCtlsTransactionLimitODCVM(int64_t limit);
 1192  bool getsetCtlsTransactionLimitODCVM(BCD<6> &limit) const;
 1195  bool getsetCtlsTransactionLimitODCVM(int64_t &limit) const;
 1196 
 1199  bool setTransactionTypesSale(const Array<3> &type);
 1202  bool getTransactionTypesSale(Array<3> &type) const;
 1203 
 1206  bool setTransactionTypesCash(const Array<3> &type);
 1209  bool getTransactionTypesCash(Array<3> &type) const;
 1210 
 1213  bool setTransactionTypesCashback(const Array<3> &type);
 1216  bool getTransactionTypesCashback(Array<3> &type) const;
 1217 
 1220  bool setBeepFreqSuccess(unsigned short freq);
 1223  bool getBeepFreqSuccess(unsigned short &freq) const;
 1224 
 1227  bool setTransactionTypesRefund(const Array<3> &type);
 1230  bool getTransactionTypesRefund(Array<3> &type) const;
 1231 
 1234  bool setBeepFreqAlert(unsigned short freq);
 1237  bool getBeepFreqAlert(unsigned short &freq) const;
 1238 
 1241  bool setSecondTapDelay(unsigned char delay);
 1244  bool getSecondTapDelay(unsigned char &delay) const;
 1245 
 1248  bool setHostTimeout(unsigned char tout);
 1251  bool getHostTimeout(unsigned char &tout) const;
 1252 
 1253 
 1255  // constructed data elements //
 1257 
 1260  bool setHotlist(const bytevector &hotlist);
 1262  template<unsigned N> bool setHotlist(const unsigned char (&v)[N])
 1263  { return setHotlist(bytevector(v,v+N)); }
 1266  bool setHotlist(const TLV &hotlist);
 1269  bool getHotlist(bytevector &hotlist) const;
 1272  bool getHotlist(TLV &hotlist) const;
 1273 
 1276  bool setTagsToWriteBeforeGenAC(const TLV &ttw);
 1279  bool getTagsToWriteBeforeGenAC(TLV &ttw) const;
 1280 
 1283  bool setTagsToWriteAfterGenAC(const TLV &ttw);
 1286  bool getTagsToWriteAfterGenAC(TLV &ttw) const;
 1287 
 1289  struct DynamicReaderLimits {
 1290  bytevector appProgramID;
 1291  BCD<6> floorLimit;
 1292  BCD<6> transactionLimit;
 1293  BCD<6> CVMRequiredLimit;
 1294  unsigned char options;
 1295 #if __cplusplus >= 201103
 1296  DynamicReaderLimits(const bytevector &aid_,
 1297  const BCD<6> &floorLimit_,
 1298  const BCD<6> &transactionLimit_,
 1299  const BCD<6> &CVMRequiredLimit_,
 1300  unsigned char options_)
 1301  : appProgramID(aid_),
 1302  floorLimit(floorLimit_),
 1303  transactionLimit(transactionLimit_),
 1304  CVMRequiredLimit(CVMRequiredLimit_),
 1305  options(options_) {}
 1306  DynamicReaderLimits() = default;
 1307 #endif
 1308  };
 1309 
 1312  bool setDynamicReaderLimits(const std::vector<DynamicReaderLimits> &limits);
 1315  bool getDynamicReaderLimits(std::vector<DynamicReaderLimits> &limits) const;
 1316 
 1318  // issuer specific
 1319 
 1322  bool setTransactionTypeIK(unsigned char type);
 1325  bool getTransactionTypeIK(unsigned char &type) const;
 1326 
 1329  bool setFloorLimitIK(const BCD<6> &limit);
 1332  bool setFloorLimitIK(int64_t limit);
 1335  bool getFloorLimitIK(BCD<6> &limit) const;
 1338  bool getFloorLimitIK(int64_t &limit) const;
 1339 
 1342  bool setCVMRequiredLimitPK(const BCD<6> &limit);
 1345  bool setCVMRequiredLimitPK(int64_t limit);
 1348  bool getCVMRequiredLimitPK(BCD<6> &limit) const;
 1351  bool getCVMRequiredLimitPK(int64_t &limit) const;
 1352 
 1355  bool setFloorlimitPK(const BCD<6> &limit);
 1358  bool setFloorlimitPK(int64_t limit);
 1361  bool getFloorlimitPK(BCD<6> &limit) const;
 1364  bool getFloorlimitPK(int64_t &limit) const;
 1365 
 1368  bool setFloorLimitMIR(const BCD<6> &limit);
 1371  bool setFloorLimitMIR(int64_t limit);
 1374  bool getFloorLimitMIR(BCD<6> &limit) const;
 1377  bool getFloorLimitMIR(int64_t &limit) const;
 1378 
 1381  bool setTransactionLimitNoCVMMIR(const BCD<6> &limit);
 1384  bool setTransactionLimitNoCVMMIR(int64_t limit);
 1387  bool getTransactionLimitNoCVMMIR(BCD<6> &limit) const;
 1390  bool getTransactionLimitNoCVMMIR(int64_t &limit) const;
 1391 
 1394  bool setTransactionLimitNoCDCVMMIR(const BCD<6> &limit);
 1397  bool setTransactionLimitNoCDCVMMIR(int64_t limit);
 1400  bool getTransactionLimitNoCDCVMMIR(BCD<6> &limit) const;
 1403  bool getTransactionLimitNoCDCVMMIR(int64_t &limit) const;
 1404 
 1407  bool setTransactionLimitCDCVMMIR(const BCD<6> &limit);
 1410  bool setTransactionLimitCDCVMMIR(int64_t limit);
 1413  bool getTransactionLimitCDCVMMIR(BCD<6> &limit) const;
 1416  bool getTransactionLimitCDCVMMIR(int64_t &limit) const;
 1417 
 1420  bool setTPMCapabilitiesMIR(const Array<2> &caps);
 1423  bool getTPMCapabilitiesMIR(Array<2> &caps) const;
 1424 
 1427  bool setTransactionRecoveryLimitMIR(unsigned char limit);
 1430  bool getTransactionRecoveryLimitMIR(unsigned char &limit) const;
 1431 
 1434  bool setAdditionalVersionNumbers(const bytevector &ver);
 1436  template<unsigned N> bool setAdditionalVersionNumbers(const unsigned char (&v)[N])
 1437  { return setAdditionalVersionNumbers(bytevector(v,v+N)); }
 1440  bool getAdditionalVersionNumbers(bytevector &ver) const;
 1441 
 1442 
 1444 
 1447  bool setTACDefaultMK(const Array<5> &tac);
 1450  bool getTACDefaultMK(Array<5> &tac) const;
 1451 
 1454  bool setTACDenialMK(const Array<5> &tac);
 1457  bool getTACDenialMK(Array<5> &tac) const;
 1458 
 1461  bool setTACOnlineMK(const Array<5> &tac);
 1464  bool getTACOnlineMK(Array<5> &tac) const;
 1465 
 1468  bool setFloorLimitMK(const BCD<6> &limit);
 1471  bool setFloorLimitMK(int64_t limit);
 1474  bool getFloorLimitMK(BCD<6> &limit) const;
 1477  bool getFloorLimitMK(int64_t &limit) const;
 1478 
 1481  bool setCVMRequiredLimitMK(const BCD<6> &limit);
 1484  bool setCVMRequiredLimitMK(int64_t limit);
 1487  bool getCVMRequiredLimitMK(BCD<6> &limit) const;
 1490  bool getCVMRequiredLimitMK(int64_t &limit) const;
 1491 
 1492 };
 1493 
 1494 
 1500 
 1501 
 1504 struct DllSpec EMVTxn: public TLV {
 1505  public:
 1507  typedef std::vector<unsigned char> bytevector;
 1508 
 1509  protected:
 1510  bool exists(unsigned tag1) const;
 1511  bool exists(unsigned tag1, unsigned tag2) const;
 1512 
 1513  public:
 1514 
 1516  // primitive data elements //
 1518 
 1521  bool getIssuerID(Array<4> &id) const;
 1522 
 1525  bool setAID(const bytevector &aid);
 1527  template<unsigned N> bool setAID(const unsigned char (&v)[N])
 1528  { return setAID(bytevector(v,v+N)); }
 1531  bool getAID(bytevector &aid) const;
 1532 
 1535  bool getAppName(std::string &label) const;
 1536 
 1539  bool getAgreedAppName(std::string &name) const;
 1540 
 1543  bool getPAN(Array<10> &pan) const;
 1544 
 1547  bool getAIP(Array<2> &aip) const;
 1548 
 1551  bool getDFName(bytevector &name) const;
 1552 
 1555  bool getApplicationPriorityID(unsigned char &id) const;
 1556 
 1559  bool setAuthCode(const Array<6> &code);
 1562  bool getAuthCode(Array<6> &code) const;
 1563 
 1566  bool setAuthResponseCode(const Array<2> &auth);
 1569  bool getAuthResponseCode(Array<2> &auth) const;
 1570 
 1573  bool getCVMList(Array<28> &list) const;
 1574 
 1577  bool getTVR(Array<5> &tvr) const;
 1578 
 1581  bool setTransactionDate(const Array<3> &date);
 1584  bool setTransactionDate(const std::string &date);
 1587  bool getTransactionDate(Array<3> &date) const;
 1590  bool getTransactionDate(std::string &date) const;
 1591 
 1594  bool getTransactionStatusInfo(Array<2> &status) const;
 1595 
 1598  bool setTransactionType(unsigned char type);
 1601  bool getTransactionType(unsigned char &type) const;
 1602 
 1605  bool setCtlsLEDState(unsigned char state);
 1608  bool getCtlsLEDState(unsigned char &state) const;
 1609 
 1612  bool setServerPollTimeout(unsigned char tout);
 1615  bool getServerPollTimeout(unsigned char &tout) const;
 1616 
 1619  bool setBeepScenario(unsigned char bs);
 1622  bool getBeepScenario(unsigned char &bs) const;
 1623 
 1626  bool getCardholderName(std::string &name) const;
 1627 
 1630  bool setExpirationDate(const Array<3> &date);
 1633  bool getExpirationDate(Array<3> &date) const;
 1634 
 1637  bool getEffectiveDate(Array<3> &date) const;
 1640  bool getEffectiveDate(std::string &date) const;
 1641 
 1644  bool setIssuerCountryCode(unsigned short country);
 1647  bool getIssuerCountryCode(unsigned short &country) const;
 1648 
 1651  bool setTransactionCurrency(Currency currency);
 1654  bool getTransactionCurrency(Currency &currency) const;
 1655 
 1658  bool setTransactionCurrency(int currency);
 1661  bool getTransactionCurrency(int &currency) const;
 1662 
 1665  bool getLanguagePreference(std::string &lang) const;
 1666 
 1669  bool getServiceCode(Array<2> &code) const;
 1670 
 1673  bool getPANSequenceNumber(BCD<1> &num) const;
 1676  bool getPANSequenceNumber(int &num) const;
 1677 
 1680  bool setTransactionCurrencyExp(unsigned char exp);
 1683  bool getTransactionCurrencyExp(unsigned char &exp) const;
 1684 
 1687  bool setAccountType(unsigned char type);
 1690  bool getAccountType(unsigned char &type) const;
 1691 
 1694  bool setAmount(const BCD<6> &amount);
 1697  bool setAmount(int64_t amount);
 1700  bool getAmount(BCD<6> &amount) const;
 1703  bool getAmount(int64_t &amount) const;
 1704 
 1707  bool setCashbackAmount(const BCD<6> &amount);
 1710  bool setCashbackAmount(int64_t amount);
 1713  bool getCashbackAmount(BCD<6> &amount) const;
 1716  bool getCashbackAmount(int64_t &amount) const;
 1717 
 1720  bool getTerminalAID(bytevector &aid) const;
 1721 
 1724  bool getKernelAppVersionNumber(Array<2> &version) const;
 1725 
 1728  bool getChipAppVersionNumber(Array<2> &version) const;
 1729 
 1732  bool getASRPD(bytevector &asrpd) const;
 1733 
 1736  bool getCardholderNameExt(std::string &name) const;
 1737 
 1740  bool getIACDefault(Array<5> &iac) const;
 1741 
 1744  bool getIACDenial(Array<5> &iac) const;
 1745 
 1748  bool getIACOnline(Array<5> &iac) const;
 1749 
 1752  bool getIssuerAppData(bytevector &idata) const;
 1753 
 1756  bool getIssuerCodeTableID(unsigned char &id) const;
 1757 
 1760  bool getPreferredName(std::string &label) const;
 1761 
 1764  bool getMerchantID(std::string &mid) const;
 1765 
 1768  bool getTerminalCountryCode(unsigned short &country) const;
 1769 
 1772  bool setFloorLimit(const BCD<6> &limit);
 1775  bool setFloorLimit(int64_t limit);
 1778  bool getFloorLimit(BCD<6> &limit) const;
 1781  bool getFloorLimit(int64_t &limit) const;
 1782 
 1785  bool getIFDSerial(Array<8> &serial) const;
 1786 
 1789  bool setTransactionTime(const Array<3> &time);
 1792  bool setTransactionTime(const std::string &time);
 1795  bool getTransactionTime(Array<3> &time) const;
 1798  bool getTransactionTime(std::string &time) const;
 1799 
 1802  bool setCryptogram(const Array<8> &crypt);
 1805  bool getCryptogram(Array<8> &crypt) const;
 1806 
 1809  bool getCryptogramInfo(unsigned char &info) const;
 1810 
 1813  bool getTerminalCapabilities(Array<3> &caps) const;
 1814 
 1817  bool getCVMResults(Array<3> &cvmr) const;
 1818 
 1821  bool getTerminalType(unsigned char &type) const;
 1822 
 1825  bool getATC(Array<2> &atc) const;
 1826 
 1829  bool setUnpredictableNumber(unsigned num);
 1832  bool getUnpredictableNumber(unsigned &num) const;
 1833 
 1836  bool getPOSEntryMode(unsigned char &mode) const;
 1837 
 1840  bool getAdditionalCapabilities(Array<5> &caps) const;
 1841 
 1844  bool setTransactionCounter(const BCD<4> &counter);
 1847  bool setTransactionCounter(int counter);
 1850  bool getTransactionCounter(BCD<4> &counter) const;
 1853  bool getTransactionCounter(int &counter) const;
 1854 
 1857  bool setApplicationCurrency(Currency currency);
 1860  bool getApplicationCurrency(Currency &currency) const;
 1861 
 1864  bool getDataAuthCode(Array<2> &code) const;
 1865 
 1868  bool getICCDynamicNumber(bytevector &dn) const;
 1869 
 1872  bool getTransactionCategory(unsigned char &cat) const;
 1873 
 1876  bool getAvailableOfflineAmount(BCD<6> &amount) const;
 1879  bool getAvailableOfflineAmount(int64_t &amount) const;
 1880 
 1883  bool getTransactionQualifier(Array<4> &q) const;
 1884 
 1887  bool setVisaCTQ(const Array<2> &ctq);
 1890  bool getVisaCTQ(Array<2> &ctq) const;
 1891 
 1894  bool setMasterAID(const bytevector &aid);
 1896  template<unsigned N> bool setMasterAID(const unsigned char (&v)[N])
 1897  { return setMasterAID(bytevector(v,v+N)); }
 1900  bool getMasterAID(bytevector &aid) const;
 1901 
 1904  bool setBuildAppList(unsigned char opt);
 1907  bool getBuildAppList(unsigned char &opt) const;
 1908 
 1911  bool getReaderNumber(unsigned char &num) const;
 1912 
 1915  bool getNonCriticalScriptResults(std::vector<Array<5> > &results) const;
 1916 
 1919  bool getCriticalScriptResults(std::vector<Array<5> > &results) const;
 1920 
 1923  bool setFallbackMIDs(const Array<3> &mid);
 1926  bool getFallbackMIDs(Array<3> &mid) const;
 1927 
 1930  bool setEMVFallback(unsigned char fb);
 1933  bool getEMVFallback(unsigned char &fb) const;
 1934 
 1937  bool getObfuscatedPAN(bytevector &pan) const;
 1938 
 1941  bool getObfuscatedTrack2(bytevector &track) const;
 1942 
 1945  bool setTACDenial(const Array<5> &tac);
 1948  bool getTACDenial(Array<5> &tac) const;
 1949 
 1952  bool setTACOnline(const Array<5> &tac);
 1955  bool getTACOnline(Array<5> &tac) const;
 1956 
 1959  bool setTACDefault(const Array<5> &tac);
 1962  bool getTACDefault(Array<5> &tac) const;
 1963 
 1966  bool setThreshold(unsigned th);
 1969  bool getThreshold(unsigned &th) const;
 1970 
 1973  bool setSpecialTransactions(const EMVSpecialTransactions &tx);
 1976  bool getSpecialTransactions(EMVSpecialTransactions &tx) const;
 1977 
 1980  bool setLanguage(unsigned char info);
 1983  bool getLanguage(unsigned char &info) const;
 1984 
 1987  bool setTextID(unsigned char id);
 1990  bool getTextID(unsigned char &id) const;
 1991 
 1994  bool getBalanceBefore(BCD<6> &amount) const;
 1997  bool getBalanceBefore(int64_t &amount) const;
 1998 
 1999  /* deprecated: always returns false */
 2000  bool getDefaultAppName(std::string &appname) const;
 2001 
 2004  bool getApplicationLabel(std::string &appname) const;
 2005 
 2008  bool setAmountConfirmation(unsigned char when);
 2011  bool getAmountConfirmation(unsigned char &when) const;
 2012 
 2015  bool setTransactionOptions(const Array<5> &opt);
 2018  bool setTransactionOptions(const EMVTransactionOptions &opt)
 2019  { return setTransactionOptions(opt.array()); }
 2022  bool getTransactionOptions(Array<5> &opt) const;
 2025  bool getTransactionOptions(EMVTransactionOptions &opt) const
 2026  { return getTransactionOptions(opt.array()); }
 2027 
 2030  bool setTransactionSteps(const Array<3> &step);
 2033  bool setTransactionSteps(const EMVTransactionSteps &step)
 2034  { return setTransactionSteps(step.array()); }
 2037  bool getTransactionSteps(Array<3> &step) const;
 2040  bool getTransactionSteps(EMVTransactionSteps &step) const
 2041  { return getTransactionSteps(step.array()); }
 2042 
 2045  bool getBalanceAfter(BCD<6> &amount) const;
 2048  bool getBalanceAfter(int64_t &amount) const;
 2049 
 2052  bool setDCCInfo(const Array<3> &info);
 2055  bool getDCCInfo(Array<3> &info) const;
 2056 
 2059  bool setFallbackMSROptions(unsigned char opt);
 2062  bool getFallbackMSROptions(unsigned char &opt) const;
 2063 
 2066  bool setForceOnline(unsigned char force);
 2069  bool getForceOnline(unsigned char &force) const;
 2070 
 2073  bool setPINBypass(bool bypass);
 2076  bool getPINBypass(bool &bypass) const;
 2077 
 2080  bool getEMVStatus(unsigned &status) const;
 2081 
 2084  bool setForceAccept(unsigned char force);
 2087  bool getForceAccept(unsigned char &force) const;
 2088 
 2091  bool setNoDirectorySelect(unsigned char nodir);
 2094  bool getNoDirectorySelect(unsigned char &nodir) const;
 2095 
 2098  bool setPreselectedLanguage(unsigned char lang);
 2101  bool getPreselectedLanguage(unsigned char &lang) const;
 2102 
 2105  bool setOnlineSwitch(unsigned char online);
 2108  bool getOnlineSwitch(unsigned char &online) const;
 2109 
 2112  bool setNoCardholderConfirm(unsigned char conf);
 2115  bool getNoCardholderConfirm(unsigned char &conf) const;
 2116 
 2119  bool setEMVPassthrough(unsigned char ep);
 2122  bool getEMVPassthrough(unsigned char &ep) const;
 2123 
 2126  bool getPDOLInfo(unsigned char &info) const;
 2127 
 2130  bool getCardType(unsigned char &type) const;
 2131 
 2134  bool setOnlineResult(bool result);
 2137  bool getOnlineResult(bool &result) const;
 2138 
 2141  bool setVoiceReferral(bool result);
 2144  bool getVoiceReferral(bool &result) const;
 2145 
 2148  bool setAuthData(const bytevector &data);
 2150  template<unsigned N> bool setAuthData(const unsigned char (&v)[N])
 2151  { return setAuthData(bytevector(v,v+N)); }
 2154  bool getAuthData(bytevector &data) const;
 2155 
 2158  bool setCriticalScript(const bytevector &script);
 2160  template<unsigned N> bool setCriticalScript(const unsigned char (&v)[N])
 2161  { return setCriticalScript(bytevector(v,v+N)); }
 2164  bool getCriticalScript(bytevector &script) const;
 2165 
 2168  bool setNonCriticalScript(const bytevector &script);
 2170  template<unsigned N> bool setNonCriticalScript(const unsigned char (&v)[N])
 2171  { return setNonCriticalScript(bytevector(v,v+N)); }
 2174  bool getNonCriticalScript(bytevector &script) const;
 2175 
 2178  bool setAuthResponseReferral(const Array<2> &ac);
 2181  bool getAuthResponseReferral(Array<2> &ac) const;
 2182 
 2185  bool setAuthResponseSwitch(const Array<2> &resp);
 2188  bool getAuthResponseSwitch(Array<2> &resp) const;
 2189 
 2192  bool setAuthResponseWrongPIN(const Array<2> &ac);
 2195  bool getAuthResponseWrongPIN(Array<2> &ac) const;
 2196 
 2199  bool setAuthResponseOnlinePIN(const Array<2> &resp);
 2202  bool getAuthResponseOnlinePIN(Array<2> &resp) const;
 2203 
 2206  bool setAdditionalResponseOK(const Array<2> &ac);
 2209  bool getAdditionalResponseOK(Array<2> &ac) const;
 2210 
 2213  bool setWriteDSData(const bytevector &dsdata);
 2216  bool getWriteDSData(bytevector &dsdata) const;
 2217 
 2220  bool setOfflinePINErrors(unsigned char errors);
 2223  bool getOfflinePINErrors(unsigned char &errors) const;
 2224 
 2227  bool setWriteDataStoragedData(const bytevector &data);
 2230  bool getWriteDataStoragedData(bytevector &data) const;
 2231 
 2234  bool setDCCForbidden(unsigned char dcc);
 2237  bool getDCCForbidden(unsigned char &dcc) const;
 2238 
 2241  bool setDomesticInfo(const Array<3> &info);
 2244  bool getDomesticInfo(Array<3> &info) const;
 2245 
 2248  bool setDomesticOptions(const Array<3> &opt);
 2251  bool setDomesticOptions(const EMVDomesticOptions &opt)
 2252  { return setDomesticOptions(opt.array()); }
 2255  bool getDomesticOptions(Array<3> &opt) const;
 2258  bool getDomesticOptions(EMVDomesticOptions &opt) const
 2259  { return getDomesticOptions(opt.array()); }
 2260 
 2263  bool setVelocityOriginalIndex(unsigned char idx);
 2266  bool getVelocityOriginalIndex(unsigned char &idx) const;
 2267 
 2270  bool getErrorData(Array<15> &error) const;
 2271 
 2274  bool getDisplayTextIndex(unsigned char &id) const;
 2275 
 2278  bool setVelocityProcessingResultBitmap(const Array<3> &bm);
 2281  bool getVelocityProcessingResultBitmap(Array<3> &bm) const;
 2282 
 2285  bool getKernelDebug(bytevector &debug) const;
 2286 
 2289  bool setExcludeAID(const std::vector<bytevector> &aid);
 2292  bool getExcludeAID(std::vector<bytevector> &aid) const;
 2293 
 2301  bool setExcludeCombos(const std::vector<std::pair<bytevector, Array<3> > > &combos);
 2302 
 2305  bool setCardholderInfo(unsigned char info);
 2308  bool getCardholderInfo(unsigned char &info) const;
 2309 
 2312  bool setMerchantInfo(unsigned char info);
 2315  bool getMerchantInfo(unsigned char &info) const;
 2316 
 2319  bool setConfirmAmount(bool confirm);
 2322  bool getConfirmAmount(bool &confirm) const;
 2323 
 2326  bool setPANInBlacklist(unsigned char contained);
 2329  bool getPANInBlacklist(unsigned char &contained) const;
 2330 
 2333  bool setStoredAmount(const BCD<6> &amount);
 2336  bool setStoredAmount(int64_t amount);
 2339  bool getStoredAmount(BCD<6> &amount) const;
 2342  bool getStoredAmount(int64_t &amount) const;
 2343 
 2346  bool setSelector(unsigned char sel);
 2349  bool getSelector(unsigned char &sel) const;
 2350 
 2353  bool setReducedCanditateList(const bytevector &cl);
 2355  template<unsigned N> bool setReducedCanditateList(const unsigned char (&v)[N])
 2356  { return setReducedCanditateList(bytevector(v,v+N)); }
 2359  bool getReducedCanditateList(bytevector &cl) const;
 2360 
 2363  bool setModifyTransaction(unsigned char m);
 2366  bool getModifyTransaction(unsigned char &m) const;
 2367 
 2370  bool setSkipPostprocessing(unsigned char skip);
 2373  bool getSkipPostprocessing(unsigned char &skip) const;
 2374 
 2377  bool setPINInfo(unsigned char info);
 2380  bool getPINInfo(unsigned char &info) const;
 2381 
 2384  bool setPINPublicModulus(const bytevector &modulus);
 2386  template<unsigned N> bool setPINPublicModulus(const unsigned char (&v)[N])
 2387  { return setPINPublicModulus(bytevector(v,v+N)); }
 2390  bool getPINPublicModulus(bytevector &modulus) const;
 2391 
 2394  bool setPINPublicExponent(unsigned modulus);
 2397  bool getPINPublicExponent(unsigned &modulus) const;
 2398 
 2401  bool setDCCMode(unsigned char mode);
 2404  bool getDCCMode(unsigned char &mode) const;
 2405 
 2408  bool setDomesticAppResult(unsigned char res);
 2411  bool getDomesticAppResult(unsigned char &res) const;
 2412 
 2415  bool setKernelToUse(const Array<3> &kernel);
 2418  bool getKernelToUse(Array<3> &kernel) const;
 2419 
 2422  bool setCommunicationError(unsigned char err);
 2425  bool getCommunicationError(unsigned char &err) const;
 2426 
 2429  bool getDestination(int &dest) const;
 2430 
 2433  bool setDataExchangeRequest(unsigned char req);
 2436  bool getDataExchangeRequest(unsigned char &req) const;
 2437 
 2440  bool setDataExchangeState(unsigned char state);
 2443  bool getDataExchangeState(unsigned char &state) const;
 2444 
 2447  bool setDataExchangeMode(unsigned char state);
 2450  bool getDataExchangeMode(unsigned char &state) const;
 2451 
 2454  bool setDataExchangeDataNeeded(const bytevector &dn);
 2456  template<unsigned N> bool setDataExchangeDataNeeded(const unsigned char (&v)[N])
 2457  { return setDataExchangeDataNeeded(bytevector(v,v+N)); }
 2460  bool getDataExchangeDataNeeded(bytevector &dn) const;
 2461 
 2464  bool setModifiedCandidates(const bytevector &cand);
 2466  template<unsigned N> bool setModifiedCandidates(const unsigned char (&v)[N])
 2467  { return setModifiedCandidates(bytevector(v,v+N)); }
 2470  bool getModifiedCandidates(bytevector &cand) const;
 2471 
 2474  bool getSetupResult(Array<5> &result) const;
 2475 
 2478  bool setCBDisplayTextIndex(unsigned char idx);
 2481  bool getCBDisplayTextIndex(unsigned char &idx) const;
 2482 
 2485  bool getCardID(Array<20> &id) const;
 2486 
 2489  bool getTrackStatus(Array<3> &track_status) const;
 2490 
 2493  bool getObfuscatedTrack1String(std::string &track) const;
 2494 
 2497  bool getTecselData(bytevector &data) const;
 2498 
 2501  bool setKernelID(const Array<3> &id);
 2504  bool setKernelID(unsigned id);
 2507  bool getKernelID(Array<3> &id) const;
 2510  bool getKernelID(unsigned &id) const;
 2511 
 2514  bool setAppNameChosen(const std::string &name);
 2517  bool getAppNameChosen(std::string &name) const;
 2518 
 2521  bool setApplicationKernelId(const Array<3> &id);
 2524  bool setApplicationKernelId(unsigned id);
 2527  bool getApplicationKernelId(Array<3> &id) const;
 2530  bool getApplicationKernelId(unsigned &id) const;
 2531 
 2534  bool setAppNameUtf8(const std::string &name);
 2537  bool getAppNameUtf8(std::string &name) const;
 2538 
 2541  bool getKernelPrivateNonBER(bytevector &nber) const;
 2542 
 2544  // constructed data elements //
 2546 
 2549  bool setFCIIssuerDiscrData(const TLV &data);
 2552  bool getFCIIssuerDiscrData(TLV &data) const;
 2553 
 2556  bool setMemorySlotUpdateTemplate(const TLV &t);
 2559  bool getMemorySlotUpdateTemplate(TLV &t) const;
 2560 
 2563  bool setMemorySlotReadTemplate(const TLV &t);
 2566  bool getMemorySlotReadTemplate(TLV &t) const;
 2567 
 2569  struct DomesticApp {
 2570  bytevector aid;
 2571  std::string appLabel;
 2572  unsigned char asi;
 2573  unsigned char specialTX[8];
 2574  unsigned char noEMVConformSelect;
 2575 #if __cplusplus >= 201103
 2576  DomesticApp(const bytevector &aid_,
 2577  const std::string &appLabel_,
 2578  unsigned char asi_,
 2579  const unsigned char specialTx_[8],
 2580  unsigned char noEMVConformSelect_)
 2581  : aid(aid_),
 2582  appLabel(appLabel_),
 2583  asi(asi_),
 2584  noEMVConformSelect(noEMVConformSelect_) {
 2585  memcpy(specialTX, specialTx_, 8);
 2586  }
 2587  DomesticApp() = default;
 2588 #endif
 2589  };
 2590 
 2593  bool setDomesticApps(const std::vector<DomesticApp> &app);
 2596  bool getDomesticApps(std::vector<DomesticApp> &app) const;
 2597 
 2599  struct FallbackMSR {
 2600  unsigned char mid;
 2601  unsigned char specialTX[8];
 2602  unsigned char fallback;
 2603  unsigned char options;
 2604 #if __cplusplus >= 201103
 2605  FallbackMSR(unsigned char mid_,
 2606  const unsigned char *specialTx_,
 2607  unsigned char fallback_,
 2608  unsigned char options_)
 2609  : mid(mid_), fallback(fallback_), options(options_) {
 2610  memcpy(specialTX, specialTx_, 8);
 2611  }
 2612  FallbackMSR() = default;
 2613 #endif
 2614  };
 2615 
 2618  bool setFallbackMSR(const std::vector<FallbackMSR> &mid);
 2621  bool getFallbackMSR(std::vector<FallbackMSR> &mid) const;
 2622 
 2624  struct Candidate {
 2625  bytevector aid;
 2626  std::string appName;
 2627 #if __cplusplus >= 201103
 2628  Candidate(const bytevector &aid_, const std::string &appName_)
 2629  : aid(aid_), appName(appName_) {}
 2630  Candidate() = default;
 2631 #endif
 2632  };
 2633 
 2636  bool setCandidateList(const std::vector<Candidate> &cand);
 2639  bool getCandidateList(std::vector<Candidate> &cand) const;
 2640 
 2642  struct CandidateExt {
 2643  bytevector aid;
 2644  std::string appName;
 2645  std::string language;
 2646  unsigned kernelID;
 2647  unsigned char velocityOrigIdx;
 2648  unsigned char velocityProcResult;
 2649 #if __cplusplus >= 201103
 2650  CandidateExt(const bytevector &aid_,
 2651  const std::string &appName_,
 2652  const std::string &language_,
 2653  unsigned kernelID_,
 2654  unsigned char velocityOrigIdx_,
 2655  unsigned char velocityProcResult_)
 2656  : aid(aid_),
 2657  appName(appName_),
 2658  language(language_),
 2659  kernelID(kernelID_),
 2660  velocityOrigIdx(velocityOrigIdx_),
 2661  velocityProcResult(velocityProcResult_) {}
 2662  CandidateExt() = default;
 2663 #endif
 2664  };
 2665 
 2668  bool setCBCandidateList(const std::vector<CandidateExt> &cand);
 2671  bool getCBCandidateList(std::vector<CandidateExt> &cand) const;
 2672 
 2675  bool setDataExchangeReceivedData(const TLV &data);
 2678  bool getDataExchangeReceivedData(TLV &data) const;
 2679 
 2682  bool setDataExchangeSendData(const TLV &data);
 2685  bool getDataExchangeSendData(TLV &data) const;
 2686 
 2689  bool getNFCVASData(TLV &data) const;
 2690 };
 2691 
 2692 } // namespace vfisdi
 2693 
 2694 #undef DllSpec
 2695 
 2696 #endif
```
