---
title: sdi/src/directory.h

---

# sdi/src/directory.h



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[Directory](class_directory.md)**  |
| struct | **[Directory::Entry](struct_directory_1_1_entry.md)**  |




## Source code

```cpp
#ifndef DIRECTORY_H
#define DIRECTORY_H

#include <string>

class Directory
{

  public:

    enum FileType { File, Dir, Link, Special };
    enum { Read = 1, Write = 2 };


    struct Entry
    {
      std::string name;          
      std::string filename;      
      unsigned type;             
      unsigned mode;             
      unsigned size;             
      unsigned year;             
      unsigned char month;       
      unsigned char day;         
      unsigned char hour;        
      unsigned char min;         
      unsigned char sec;         
      Entry()
      {
        type = mode = size = year = 0;
        month = day = hour = min = sec = 0;
      }
    };



  private:
    void *dir;
    std::string dirname;
    Entry backup;
    int push_back;

    // disable the default copy constructor and assignment operator
    Directory(const Directory &);
    void operator=(const Directory &);

  public:

    Directory();

    virtual ~Directory()
    {
      close();
    }

    int open(const std::string &_dirname);

    int readEntry(Entry &entry);

    void pushBack()
    {
      push_back = 1;
    }

    void close();


};



#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
