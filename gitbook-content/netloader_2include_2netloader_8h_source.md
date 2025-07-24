---
hidden: true
title: netloader.h
---

<a href="netloader_2include_2netloader_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef NETLOADER_H_20220916
 2 #define NETLOADER_H_20220916
 3 
 6 #include <string>
 7 #include <vector>
 8 
 9 #if defined _WIN32 && defined NETLOADER_SHARED_EXPORT
 10 # define DllSpec __declspec(dllexport)
 11 #elif defined __GNUC__ && defined NETLOADER_SHARED_EXPORT
 12 # define DllSpec __attribute__((visibility ("default")))
 13 #else
 14 # define DllSpec
 15 #endif
 16 
 18 
 19 #ifdef __cplusplus
 20 extern "C" {
 21 #endif
 22 
 24 enum NetLoaderResult {
 25  NETLD_OK,
 26  NETLD_RUNNING,
 27  NETLD_ERROR
 28 };
 29 
 31 enum NetLoaderStatus {
 32  NETLD_REBOOT_REQUESTED,
 33  NETLD_STOP_REQUESTED,
 34  NETLD_DISPLAY_MESSAGE,
 35  NETLD_SET_TIME,
 37  NETLD_DOWNLOAD_FILE=0x10,
 38  NETLD_INSTALL_FILE,
 39  NETLD_DOWNLOAD_OK,
 40  NETLD_DOWNLOAD_ERROR,
 41  NETLD_INSTALL_OK,
 42  NETLD_INSTALL_ERROR,
 43 };
 44 
 46 enum NetLoaderInstallResult {
 47  NETINST_OK,
 48  NETINST_INVALID_PARAM,
 49  NETINST_NO_SOFTWARE,
 50  NETINST_FAIL
 51 };
 52 
 53 
 72 DllSpec enum NetLoaderResult netloader_start(
 73  const char *download_dir,
 74  void (*status_cb)(void *data,
 75  enum NetLoaderStatus status,
 76  const char *msg,
 77  int progress),
 78  enum NetLoaderInstallResult (*install_cb)(void *data,
 79  const char **files),
 80  void *data
 81 );
 82 
 85 DllSpec void netloader_stop();
 86 
 87 #ifdef __cplusplus
 88 } // extern "C"
 89 
 91 
 93 class DllSpec NetLoaderClient {
 94  public:
 96  enum Result {
 97  // positive results (check with result < ERR_FAIL)
 98  OK,
 99  OK_DOWNLOAD,
 100  OK_EXPANSION,
 101  OK_INSTALL,
 102  OK_REBOOT,
 104  // error results
 105  ERR_FAIL=0x100,
 106  ERR_CONNECT,
 107  ERR_READ,
 108  ERR_SEND,
 109  ERR_NOSPACE,
 110  ERR_PARAM,
 111  ERR_DOWNLOAD,
 112  ERR_INSTALL,
 113  };
 114 
 116  struct Bundle {
 117  std::string name;
 118  std::string version;
 119  std::string owner;
 120  Bundle(const std::string &n, const std::string &v, const std::string &o=std::string()) :name(n),version(v),owner(o) {}
 121  };
 122 
 124  struct Package {
 125  std::string name;
 126  std::string version;
 127  std::string bundle;
 128  Package(const std::string &n, const std::string &v, const std::string &b=std::string()) :name(n),version(v),bundle(b) {}
 129  };
 130 
 132  struct ComponentInfo {
 133  std::string name;
 134  std::string version;
 135  ComponentInfo(const std::string &n, const std::string &v) :name(n),version(v) {}
 136  };
 137 
 139  struct TerminalInfo {
 140  std::string netloaderVersion;
 141  std::string serialNumber;
 142  std::string model;
 143  std::string softwareRelease;
 144  std::string rootFSVersion;
 145  std::string partNumber;
 146  std::string hwRevision;
 147  std::vector<ComponentInfo> component;
 148  std::string discretionary;
 149  std::string keyStatus;
 150  std::string msrHTdesStatus;
 151  };
 152 
 153  private:
 154 
 155  struct PrivateData;
 156  PrivateData *d;
 157  public:
 161  NetLoaderClient(const std::string &h);
 162 
 163  NetLoaderClient(const NetLoaderClient &)=delete;
 164  NetLoaderClient &operator=(const NetLoaderClient &)=delete;
 165 
 167  virtual ~NetLoaderClient();
 168 
 180  Result sendFile(const void *data, size_t size, const std::string &dstfilename, unsigned mask,
 181  const std::string &user, const std::string &group, int type='P');
 182 
 193  Result sendFile(const std::string &srcfilename, const std::string &dstfilename, unsigned mask,
 194  const std::string &user, const std::string &group, int type='P');
 195 
 199  Result reset();
 200 
 202  Result stop();
 203 
 208  Result setDateTime(const std::string &yyyymmddhhmmss);
 209 
 214  Result display(const std::string &message);
 215 
 220  Result getNetLoaderVersion(std::string &version);
 221 
 226  Result getTerminalInfo(TerminalInfo &info);
 227 
 233  Result getSoftwareInfo(std::vector<Bundle> &bundles, std::vector<Package> &packages);
 234 };
 235 
 236 #endif // __cplusplus
 237 
 238 #undef DllSpec
 239 
 240 #endif
```
