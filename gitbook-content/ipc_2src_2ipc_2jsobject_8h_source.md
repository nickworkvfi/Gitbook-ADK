---
hidden: true
title: jsobject.h
---

<a href="ipc_2src_2ipc_2jsobject_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 2 #ifndef IPC_JSOBJECT_H_150611
 3 #define IPC_JSOBJECT_H_150611
 4 
 9 #include <string>
 10 #include <map>
 11 #include <vector>
 12 #include <limits.h>
 13 
 14 #if defined _WIN32 && defined VFI_IPC_SHARED_EXPORT
 15 # define DllSpec __declspec(dllexport)
 16 #elif defined __GNUC__ && defined VFI_IPC_SHARED_EXPORT
 17 # define DllSpec __attribute__((visibility ("default")))
 18 #else
 19 # define DllSpec
 20 #endif
 21 
 22 namespace vfiipc {
 23 #if 0
 24 } // for automatic indentation
 25 #endif
 26 
 28 class DllSpec JSObject {
 29 
 30  public:
 32  enum JSType {
 33  JSTNull,
 34  JSTBool,
 35  JSTString,
 36  JSTInt,
 37  JSTFloat,
 38  JSTObject,
 39  JSTArray
 40  };
 41 
 42  protected:
 43  JSType v_type;
 44  bool v_bool;
 45  std::string v_string;
 46  double v_floatnum;
 47  long v_intnum;
 48  std::map<std::string,JSObject> v_object;
 49  std::vector<JSObject> v_array;
 50 
 51  static JSObject NullObject;
 52 
 53  int parse(const char *s);
 54  int parse(const char *s, unsigned nestinglevel);
 55 
 56  void dump(std::string &s,bool (*filter_cb)(const std::string &key)) const;
 57  void prettyDump(std::string &out, int indent) const;
 58 
 59  public:
 60 
 62  JSObject() { v_type=JSTNull; }
 63 
 65  JSType type() const { return v_type; }
 66 
 68  bool isNull() const { return v_type==JSTNull; }
 69 
 71  bool isBool() const { return v_type==JSTBool; }
 72 
 74  bool isString() const { return v_type==JSTString; }
 75 
 77  bool isNumber() const { return v_type==JSTFloat || v_type==JSTInt; }
 78 
 80  bool isObject() const { return v_type==JSTObject; }
 81 
 83  bool isArray() const { return v_type==JSTArray; }
 84 
 86  std::string getString() const;
 87 
 89  std::string getString(const char *defaultval) const { return isNull() ? defaultval : getString(); }
 90 
 95  const std::string *getStringP() const;
 96 
 101  std::string *getStringP();
 102 
 104  double getNumber() const;
 105 
 107  long getInt() const;
 108 
 110  long long getInt64() const;
 111 
 113  bool getBool() const;
 114 
 116  operator bool() const { return getBool(); }
 117 
 119  operator std::string() const { return getString(); }
 120 
 122  operator char() const { return (char)getInt(); }
 123 
 125  operator unsigned char() const { return (unsigned char)getInt(); }
 126 
 128  operator short() const { return (short)getInt(); }
 129 
 131  operator unsigned short() const { return (unsigned short)getInt();}
 132 
 134  operator int() const { return (int)getInt(); }
 135 
 137  operator unsigned() const { return (unsigned)getInt(); }
 138 
 140  operator long() const { return (long)getInt(); }
 141 
 143  operator unsigned long() const { return (unsigned long)getInt(); }
 144 
 146  operator long long() const { return (long long)getInt64(); }
 147 
 149  operator unsigned long long() const { return (unsigned long long)getInt64(); }
 150 
 152  operator float() const { return (float)getNumber(); }
 153 
 155  operator double() const { return (double)getNumber(); }
 156 
 158  void clear() { v_type=JSTNull; v_string.clear(); v_object.clear(); v_array.clear(); }
 159 
 161  JSObject &operator=(bool val) { v_type=JSTBool; v_bool=val; return *this; }
 162 
 164  JSObject &operator=(char *val) { v_type=JSTString; v_string=val?val:""; return *this; }
 165 
 167  JSObject &operator=(const char *val) { v_type=JSTString; v_string=val?val:""; return *this; }
 168 
 170  JSObject &operator=(const std::string &val) { v_type=JSTString; v_string=val; return *this; }
 171 
 173  JSObject &operator=(double val) { v_type=JSTFloat; v_floatnum=val; return *this; }
 174 
 176  JSObject &operator=(float val) { v_type=JSTFloat; v_floatnum=val; return *this; }
 177 
 179  JSObject &operator=(long long val) {
 180  if(val>LONG_MAX || val<LONG_MIN) {v_type=JSTFloat; v_floatnum=(double)val;}
 181  else {v_type=JSTInt; v_intnum=(long)val;}
 182  return *this;
 183  }
 184 
 186  JSObject &operator=(unsigned long long val) {
 187  if(val>LONG_MAX) {v_type=JSTFloat; v_floatnum=(double)val;}
 188  else {v_type=JSTInt; v_intnum=(long)val;}
 189  return *this;
 190  }
 191 
 193  template<typename T> JSObject &operator=(T val) { v_type=JSTInt; v_intnum=val; return *this; }
 194 
 198  bool exists(const char *elem) const;
 199 
 203  bool exists(const std::string &elem) const;
 204 
 206  void erase(const char *elem);
 207 
 209  void erase(const std::string &elem);
 210 
 215  JSObject &operator()(const char *elem);
 216 
 221  const JSObject &operator()(const char *elem) const;
 222 
 227  JSObject &operator()(const std::string &elem);
 228 
 233  const JSObject &operator()(const std::string &elem) const;
 234 
 239  JSObject &operator[](int idx);
 240 
 245  const JSObject &operator[](int idx) const;
 246 
 249  unsigned size() const { return v_type==JSTArray?(unsigned)v_array.size():0; }
 250 
 255  void resize(unsigned new_size);
 256 
 262  typedef std::map<std::string,JSObject>::iterator iterator;
 263  typedef std::map<std::string,JSObject>::const_iterator const_iterator;
 264 
 266  iterator begin() { return v_object.begin(); }
 267 
 269  iterator end() { return v_object.end(); }
 270 
 272  const_iterator begin() const { return v_object.begin(); }
 273 
 275  const_iterator end() const { return v_object.end(); }
 276 
 280  bool load(const std::string &s) { return parse(s.c_str())==(int)s.length(); }
 281 
 285  std::string dump() const;
 286 
 290  void dump(std::string &s) const;
 291 
 295  void swap(JSObject &o);
 296 
 297 
 302  std::string logdump(bool (*filter_cb)(const std::string &key)) const;
 303 
 307  void prettyDump(std::string &s) const;
 308 
 311  static const char *getVersion();
 312 };
 313 
 314 } // namespace vfiipc
 315 
 316 #undef DllSpec
 317 
 319 #endif
```
