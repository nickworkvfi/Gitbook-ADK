---
title: ipc/src/ipc/jsobject.h

---

# ipc/src/ipc/jsobject.h



## Namespaces

| Name           |
| -------------- |
| **[vfiipc](namespacevfiipc.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfiipc::JSObject](classvfiipc_1_1_j_s_object.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](group__vfiipc.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp

#ifndef IPC_JSOBJECT_H_150611
#define IPC_JSOBJECT_H_150611

#include <string>
#include <map>
#include <vector>
#include <limits.h>

#if defined _WIN32 && defined VFI_IPC_SHARED_EXPORT
#  define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_IPC_SHARED_EXPORT
#  define DllSpec __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

namespace vfiipc {
#if 0
} // for automatic indentation
#endif

class DllSpec JSObject {

 public:
   enum JSType {
      JSTNull,    
      JSTBool,    
      JSTString,  
      JSTInt,     
      JSTFloat,   
      JSTObject,  
      JSTArray    
   };

 protected:
   JSType v_type;
   bool v_bool;
   std::string v_string;
   double v_floatnum;
   long v_intnum;
   std::map<std::string,JSObject> v_object;
   std::vector<JSObject> v_array;

   static JSObject NullObject;

   int parse(const char *s);
   int parse(const char *s, unsigned nestinglevel);

   void dump(std::string &s,bool (*filter_cb)(const std::string &key))  const;
   void prettyDump(std::string &out, int indent) const;

 public:

   JSObject() { v_type=JSTNull; }

   JSType type() const { return v_type; }

   bool isNull() const { return v_type==JSTNull; }

   bool isBool() const { return v_type==JSTBool; }

   bool isString() const { return v_type==JSTString; }

   bool isNumber() const { return v_type==JSTFloat || v_type==JSTInt; }

   bool isObject() const { return v_type==JSTObject; }

   bool isArray() const { return v_type==JSTArray; }

   std::string getString() const;

   std::string getString(const char *defaultval) const { return isNull() ? defaultval : getString(); }

   const std::string *getStringP() const;

   std::string *getStringP();

   double getNumber() const;

   long getInt() const;

   long long getInt64() const;

   bool getBool() const;

   operator bool() const               { return getBool();   }

   operator std::string() const        { return getString(); }

   operator char() const               { return (char)getInt();          }

   operator unsigned char() const      { return (unsigned char)getInt(); }

   operator short() const              { return (short)getInt();         }

   operator unsigned short() const     { return (unsigned short)getInt();}

   operator int() const                { return (int)getInt();           }

   operator unsigned() const           { return (unsigned)getInt();      }

   operator long() const               { return (long)getInt();          }

   operator unsigned long() const      { return (unsigned long)getInt(); }

   operator long long() const          { return (long long)getInt64();     }

   operator unsigned long long() const { return (unsigned long long)getInt64(); }

   operator float() const              { return (float)getNumber();         }

   operator double() const             { return (double)getNumber();        }

   void clear() { v_type=JSTNull; v_string.clear(); v_object.clear(); v_array.clear(); }

   JSObject &operator=(bool val)        { v_type=JSTBool;    v_bool=val; return *this; }

   JSObject &operator=(char *val)       { v_type=JSTString;  v_string=val?val:""; return *this; }

   JSObject &operator=(const char *val) { v_type=JSTString;  v_string=val?val:""; return *this; }

   JSObject &operator=(const std::string &val) { v_type=JSTString;  v_string=val; return *this; }

   JSObject &operator=(double val)      { v_type=JSTFloat;   v_floatnum=val; return *this; }

   JSObject &operator=(float val)       { v_type=JSTFloat;   v_floatnum=val; return *this; }

   JSObject &operator=(long long val) {
      if(val>LONG_MAX || val<LONG_MIN) {v_type=JSTFloat; v_floatnum=(double)val;}
      else {v_type=JSTInt; v_intnum=(long)val;}
      return *this;
   }

   JSObject &operator=(unsigned long long val) {
      if(val>LONG_MAX) {v_type=JSTFloat; v_floatnum=(double)val;}
      else {v_type=JSTInt; v_intnum=(long)val;}
      return *this;
   }

   template<typename T> JSObject &operator=(T val) { v_type=JSTInt;  v_intnum=val; return *this; }

   bool exists(const char *elem) const;

   bool exists(const std::string &elem) const;

   void erase(const char *elem);

   void erase(const std::string &elem);

   JSObject &operator()(const char *elem);

   const JSObject &operator()(const char *elem) const;

   JSObject &operator()(const std::string &elem);

   const JSObject &operator()(const std::string &elem) const;

   JSObject &operator[](int idx);

   const JSObject &operator[](int idx) const;

   unsigned size() const { return v_type==JSTArray?(unsigned)v_array.size():0; }

   void resize(unsigned new_size);

   typedef std::map<std::string,JSObject>::iterator iterator;
   typedef std::map<std::string,JSObject>::const_iterator const_iterator;

   iterator begin() { return v_object.begin(); }

   iterator end() { return v_object.end(); }

   const_iterator begin() const { return v_object.begin(); }

   const_iterator end() const { return v_object.end(); }

   bool load(const std::string &s) { return parse(s.c_str())==(int)s.length(); }

   std::string dump() const;

   void dump(std::string &s)  const;

   void swap(JSObject &o);


   std::string logdump(bool (*filter_cb)(const std::string &key)) const;

   void prettyDump(std::string &s) const;

   static const char *getVersion();
};

} // namespace vfiipc

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
