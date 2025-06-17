---
title: sdiapi/src/sdiapi/tlv.h

---

# sdiapi/src/sdiapi/tlv.h



## Namespaces

| Name           |
| -------------- |
| **[std](namespacestd.md)**  |
| **[vfisdi](namespacevfisdi.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[vfisdi::TLV](classvfisdi_1_1_t_l_v.md)**  |
| class | **[vfisdi::TLV::Tag](classvfisdi_1_1_t_l_v_1_1_tag.md)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[DllSpec](tlv_8h.md#define-dllspec)**  |




## Macros Documentation

### define DllSpec

```cpp
#define DllSpec 
```


## Source code

```cpp
// -*- Mode: C++ -*-
#ifndef TLV_H_20180207
#define TLV_H_20180207

#include <vector>
#include <string>
#if __cplusplus>=201103
#include <memory>
#else
#include <boost/shared_ptr.hpp>
namespace std { using boost::shared_ptr; }
#endif

#if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
#   define DllSpec __declspec(dllexport)
#elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
#  define DllSpec  __attribute__((visibility ("default")))
#else
#  define DllSpec
#endif

namespace vfisdi {

class DllSpec TLV {
 public:

   // tag classes start with the following byte:
   // enum { UNIVERSAL=0, APPLICATION=0x40, CONTEXT_SPECIFIC=0x80, PRIVATE=0xC0, CONSTRUCTED=0x20 };

   class Tag {
      friend class TLV;
      unsigned char tag[4]; // left aligned tag ID, remaining bytes filled with 0

      void set(unsigned t);

      bool load(const unsigned char *&start, const unsigned char *end);
   public:
      Tag(const char *t);

      Tag(unsigned t=0) { set(t); }

      bool operator==(const Tag &o) const  { return tag[0]==o.tag[0] && tag[1]==o.tag[1]
                                             && tag[2]==o.tag[2] && tag[3]==o.tag[3]; }

      bool operator!=(const Tag &o) const { return !operator==(o); }

      int length() const;

      const unsigned char *getBytes() const { return tag; }

      unsigned getNumber() const;

      bool constructed() const { return !!(tag[0]&0x20); }

      void constructed(bool c) { if(c) tag[0]|=0x20; else tag[0]&=~0x20; }
   };


 protected:
   Tag m_tag;

   std::vector<unsigned char> m_data;
   std::vector<std::shared_ptr<TLV> > m_child;
   unsigned m_contentsize; // size of content when stored

   void initSize(bool use_indefinite);

   unsigned storedSize(bool use_indefinite) const;

   void storeAdd(std::vector<unsigned char> &data, bool use_indefinite) const;

   bool load(const unsigned char *&start, const unsigned char *end, bool indefinite=false);

 public:

   explicit TLV(const char *t):m_tag(t) { m_contentsize=0; }

   explicit TLV(unsigned t=0):m_tag(t) { m_contentsize=0; }

   explicit TLV(const Tag &t) :m_tag(t) { m_contentsize=0; }


   TLV(const TLV &o);

   TLV &operator=(const TLV &o);

   void assign(const TLV &o);


   void tag(const char *t) { tag(Tag(t)); }

   void tag(unsigned t)    { tag(Tag(t)); }

   void tag(const Tag &t);

   const Tag &tag() const { return m_tag; }


   void operator=(const std::string &data);

   void operator=(const char *data);

   operator std::string() const { return getString(); }

   std::string getString() const;


   void operator=(long data);
   void operator=(int data) { operator=((long)data); }
   void operator=(unsigned data) { operator=((long)data); }

   operator long() const { return getNumber(); }

   operator int() const { return (int)getNumber(); }

   operator unsigned() const { return (unsigned)getNumber(); }

   long getNumber() const;

   unsigned long getUnsigned() const;


   void operator=(bool data);

   operator bool() const { return getBool(); }

   bool getBool() const;


   void operator=(unsigned char data);

   operator unsigned char() const { return getByte(); }

   unsigned char getByte() const;


   void operator=(const std::vector<unsigned char> &data);

   void operator=(const std::vector<char> &data);

   void assign(const void *data, unsigned size);


   std::vector<unsigned char> &value();

   const std::vector<unsigned char> &value() const;


   bool load(const std::vector<unsigned char> &data, bool indefinite=false) {
      clear();
      if(data.empty()) return true;
      const unsigned char *start=&*data.begin();
      return load(start,start+data.size(),indefinite);
   }

   void store(std::vector<unsigned char> &data, bool use_indefinite=false) const;

   bool operator==(const TLV &o) const;

   bool operator!=(const TLV &o) const { return !(*this==o); }

   void dumptree(bool use_indefinite=false,int indent=0, bool skip_toplevel_tag=true);


   unsigned count() const { return constructed() ? (unsigned) m_child.size() : 0; }

   TLV &operator[](unsigned idx) { return *m_child[idx]; }

   const TLV &operator[](unsigned idx) const { return *m_child[idx]; }


   void erasepos(unsigned idx) { m_child.erase(m_child.begin()+idx); }


   TLV & operator()(const char *t, unsigned idx=0) { return operator()(Tag(t),idx); }

   TLV & operator()(unsigned t,    unsigned idx=0) { return operator()(Tag(t),idx); }

   TLV & operator()(const Tag &t,  unsigned idx=0);

   unsigned count(const char *t) const { return count(Tag(t)); }

   unsigned count(unsigned t)    const { return count(Tag(t)); }

   unsigned count(const Tag &t)  const;

   unsigned rename(const char *from, const char *to) { return rename(Tag(from),Tag(to)); }

   unsigned rename(unsigned from, unsigned to) { return rename(Tag(from),Tag(to)); }

   unsigned rename(const Tag &from, const Tag &to);

   bool constructed() const { return m_tag.constructed(); }

   TLV &add(const char *t) { return add(Tag(t)); }

   TLV &add(unsigned t) { return add(Tag(t)); }

   TLV &add(const Tag &t);

   void clear() { m_data.clear(); m_child.clear(); m_contentsize=0; }

   unsigned erasetag(const char *t) { return erasetag(Tag(t)); }

   unsigned erasetag(unsigned t) { return erasetag(Tag(t)); }

   unsigned erasetag(const Tag &t);

};

} // namespace vfisdi

#undef DllSpec

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
