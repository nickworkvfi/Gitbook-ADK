---
hidden: true
title: tlv.h
---

<a href="tlv_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // -*- Mode: C++ -*-
 2 #ifndef TLV_H_20180207
 3 #define TLV_H_20180207
 4 
 7 #include <vector>
 8 #include <string>
 9 #if __cplusplus>=201103
 10 #include <memory>
 11 #else
 12 #include <boost/shared_ptr.hpp>
 13 namespace std { using boost::shared_ptr; }
 14 #endif
 15 
 16 #if defined _WIN32 && defined VFI_SDICLIENT_EXPORT
 17 # define DllSpec __declspec(dllexport)
 18 #elif defined __GNUC__ && defined VFI_SDICLIENT_EXPORT
 19 # define DllSpec __attribute__((visibility ("default")))
 20 #else
 21 # define DllSpec
 22 #endif
 23 
 24 namespace vfisdi {
 25 
 40 class DllSpec TLV {
 41  public:
 42 
 43  // tag classes start with the following byte:
 44  // enum { UNIVERSAL=0, APPLICATION=0x40, CONTEXT_SPECIFIC=0x80, PRIVATE=0xC0, CONSTRUCTED=0x20 };
 45 
 47  class Tag {
 48  friend class TLV;
 49  unsigned char tag[4]; // left aligned tag ID, remaining bytes filled with 0
 50 
 52  void set(unsigned t);
 53 
 55  bool load(const unsigned char *&start, const unsigned char *end);
 56  public:
 58  Tag(const char *t);
 59 
 61  Tag(unsigned t=0) { set(t); }
 62 
 64  bool operator==(const Tag &o) const { return tag[0]==o.tag[0] && tag[1]==o.tag[1]
 65  && tag[2]==o.tag[2] && tag[3]==o.tag[3]; }
 66 
 68  bool operator!=(const Tag &o) const { return !operator==(o); }
 69 
 71  int length() const;
 72 
 74  const unsigned char *getBytes() const { return tag; }
 75 
 77  unsigned getNumber() const;
 78 
 80  bool constructed() const { return !!(tag[0]&0x20); }
 81 
 83  void constructed(bool c) { if(c) tag[0]|=0x20; else tag[0]&=~0x20; }
 84  };
 85 
 86 
 87  protected:
 88  Tag m_tag;
 89 
 90  std::vector<unsigned char> m_data;
 91  std::vector<std::shared_ptr<TLV> > m_child;
 92  unsigned m_contentsize; // size of content when stored
 93 
 98  void initSize(bool use_indefinite);
 99 
 105  unsigned storedSize(bool use_indefinite) const;
 106 
 112  void storeAdd(std::vector<unsigned char> &data, bool use_indefinite) const;
 113 
 119  bool load(const unsigned char *&start, const unsigned char *end, bool indefinite=false);
 120 
 121  public:
 122 
 126  explicit TLV(const char *t):m_tag(t) { m_contentsize=0; }
 127 
 131  explicit TLV(unsigned t=0):m_tag(t) { m_contentsize=0; }
 132 
 136  explicit TLV(const Tag &t) :m_tag(t) { m_contentsize=0; }
 137 
 139 
 141  TLV(const TLV &o);
 142 
 144  TLV &operator=(const TLV &o);
 145 
 155  void assign(const TLV &o);
 156 
 158 
 162  void tag(const char *t) { tag(Tag(t)); }
 163 
 167  void tag(unsigned t) { tag(Tag(t)); }
 168 
 172  void tag(const Tag &t);
 173 
 175  const Tag &tag() const { return m_tag; }
 176 
 178 
 182  void operator=(const std::string &data);
 183 
 187  void operator=(const char *data);
 188 
 190  operator std::string() const { return getString(); }
 191 
 193  std::string getString() const;
 194 
 196 
 200  void operator=(long data);
 201  void operator=(int data) { operator=((long)data); }
 202  void operator=(unsigned data) { operator=((long)data); }
 203 
 205  operator long() const { return getNumber(); }
 206 
 208  operator int() const { return (int)getNumber(); }
 209 
 211  operator unsigned() const { return (unsigned)getNumber(); }
 212 
 214  long getNumber() const;
 215 
 217  unsigned long getUnsigned() const;
 218 
 220 
 224  void operator=(bool data);
 225 
 227  operator bool() const { return getBool(); }
 228 
 230  bool getBool() const;
 231 
 233 
 237  void operator=(unsigned char data);
 238 
 240  operator unsigned char() const { return getByte(); }
 241 
 243  unsigned char getByte() const;
 244 
 246 
 250  void operator=(const std::vector<unsigned char> &data);
 251 
 255  void operator=(const std::vector<char> &data);
 256 
 261  void assign(const void *data, unsigned size);
 262 
 263 
 268  std::vector<unsigned char> &value();
 269 
 271  const std::vector<unsigned char> &value() const;
 272 
 274 
 279  bool load(const std::vector<unsigned char> &data, bool indefinite=false) {
 280  clear();
 281  if(data.empty()) return true;
 282  const unsigned char *start=&*data.begin();
 283  return load(start,start+data.size(),indefinite);
 284  }
 285 
 290  void store(std::vector<unsigned char> &data, bool use_indefinite=false) const;
 291 
 296  bool operator==(const TLV &o) const;
 297 
 302  bool operator!=(const TLV &o) const { return !(*this==o); }
 303 
 309  void dumptree(bool use_indefinite=false,int indent=0, bool skip_toplevel_tag=true);
 310 
 312 
 314  unsigned count() const { return constructed() ? (unsigned) m_child.size() : 0; }
 315 
 321  TLV &operator[](unsigned idx) { return *m_child[idx]; }
 322 
 328  const TLV &operator[](unsigned idx) const { return *m_child[idx]; }
 329 
 330 
 335  void erasepos(unsigned idx) { m_child.erase(m_child.begin()+idx); }
 336 
 338 
 345  TLV & operator()(const char *t, unsigned idx=0) { return operator()(Tag(t),idx); }
 346 
 353  TLV & operator()(unsigned t, unsigned idx=0) { return operator()(Tag(t),idx); }
 354 
 361  TLV & operator()(const Tag &t, unsigned idx=0);
 362 
 367  unsigned count(const char *t) const { return count(Tag(t)); }
 368 
 373  unsigned count(unsigned t) const { return count(Tag(t)); }
 374 
 379  unsigned count(const Tag &t) const;
 380 
 384  unsigned rename(const char *from, const char *to) { return rename(Tag(from),Tag(to)); }
 385 
 389  unsigned rename(unsigned from, unsigned to) { return rename(Tag(from),Tag(to)); }
 390 
 394  unsigned rename(const Tag &from, const Tag &to);
 395 
 397  bool constructed() const { return m_tag.constructed(); }
 398 
 403  TLV &add(const char *t) { return add(Tag(t)); }
 404 
 409  TLV &add(unsigned t) { return add(Tag(t)); }
 410 
 415  TLV &add(const Tag &t);
 416 
 418  void clear() { m_data.clear(); m_child.clear(); m_contentsize=0; }
 419 
 423  unsigned erasetag(const char *t) { return erasetag(Tag(t)); }
 424 
 428  unsigned erasetag(unsigned t) { return erasetag(Tag(t)); }
 429 
 433  unsigned erasetag(const Tag &t);
 434 
 435 };
 436 
 437 } // namespace vfisdi
 438 
 439 #undef DllSpec
 440 
 441 #endif
```
