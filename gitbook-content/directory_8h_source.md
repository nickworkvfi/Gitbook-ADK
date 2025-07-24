---
hidden: true
title: directory.h
---

<a href="directory_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #ifndef DIRECTORY_H
 2 #define DIRECTORY_H
 3 
 4 #include <string>
 5 
 9 class Directory
 10 {
 11 
 12  public:
 13 
 14  enum FileType { File, Dir, Link, Special };
 15  enum { Read = 1, Write = 2 };
 16 
 17 
 19  struct Entry
 20  {
 21  std::string name;
 22  std::string filename;
 23  unsigned type;
 24  unsigned mode;
 25  unsigned size;
 26  unsigned year;
 27  unsigned char month;
 28  unsigned char day;
 29  unsigned char hour;
 30  unsigned char min;
 31  unsigned char sec;
 32  Entry()
 33  {
 34  type = mode = size = year = 0;
 35  month = day = hour = min = sec = 0;
 36  }
 37  };
 38 
 39 
 40 
 41  private:
 42  void *dir;
 43  std::string dirname;
 44  Entry backup;
 45  int push_back;
 46 
 47  // disable the default copy constructor and assignment operator
 48  Directory(const Directory &);
 49  void operator=(const Directory &);
 50 
 51  public:
 52 
 54  Directory();
 55 
 57  virtual ~Directory()
 58  {
 59  close();
 60  }
 61 
 66  int open(const std::string &_dirname);
 67 
 72  int readEntry(Entry &entry);
 73 
 77  void pushBack()
 78  {
 79  push_back = 1;
 80  }
 81 
 83  void close();
 84 
 85 
 86 };
 87 
 88 
 89 
 90 #endif
```
