---
title: sdi/src/directory.cpp

---

# sdi/src/directory.cpp






## Source code

```cpp
#include "directory.h"

#ifndef _WIN32

#include <dirent.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>
#include <time.h>

Directory::Directory()
{
  dir = 0;
  push_back = 0;
}

int Directory::open(const std::string &_dirname)
{
  close();
  dirname = _dirname;

  while (dirname.length() > 1 && dirname[dirname.length() - 1] == '/')
  {
    dirname.erase(dirname.length() - 1);
  }

  dir = opendir(dirname.c_str());
  return !!dir;
}

int Directory::readEntry(Entry &entry)
{
  if (push_back)
  {
    push_back = 0;
    entry = backup;
    return 1;
  }

  if (!dir)
  {
    return 0;
  }

  struct dirent *d;

  d = readdir((DIR *)dir);

  if (!d)
  {
    return 0;
  }

  entry.filename = d->d_name;
  entry.name = dirname + "/" + d->d_name;
  std::string::size_type pos;

  while ((pos = entry.name.find("//")) != std::string::npos)
  {
    entry.name.erase(pos, 1);
  }

  while (entry.name.length() >= 2 && entry.name[0] == '.' && entry.name[1] == '/')
  {
    entry.name.erase(0, 2);
  }

  struct stat s;

  if (!stat(entry.name.c_str(), &s))
  {
    entry.size = s.st_size;

    if (S_ISREG(s.st_mode))
    {
      entry.type = Directory::File;
    }
    else if (S_ISDIR(s.st_mode))
    {
      entry.type = Directory::Dir;
    }
    else if (S_ISLNK(s.st_mode))
    {
      entry.type = Directory::Link;
    }
    else
    {
      entry.type = Directory::Special;
    }

    struct tm t;

    localtime_r(&s.st_mtime, &t);

    entry.year = t.tm_year + 1900;

    entry.month = t.tm_mon + 1;

    entry.day = t.tm_mday;

    entry.hour = t.tm_hour;

    entry.min = t.tm_min;

    entry.sec = t.tm_sec;

    unsigned m = 0; // determine access rights of the current user

#ifdef _STM32
    entry.mode = (Read | Write);

#else
    if (getuid() == s.st_uid)
    {
      m = s.st_mode >> 6 & 7;
    }
    else if (getgid() == s.st_gid)
    {
      m = s.st_mode >> 3 & 7;
    }
    else
    {
      m = s.st_mode & 7;
    }

    entry.mode = 0;

    if (m & 4)
    {
      entry.mode |= Read;
    }

    if (m & 2)
    {
      entry.mode |= Write;
    }

#endif
  }
  else
  {
    entry.mode = 0;
    entry.size = 0;
    entry.type = Special;
    entry.hour = entry.min = entry.sec = 0;
    entry.year = 0;
    entry.month = entry.day = 0;
  }

  backup = entry;

  return 1;
}

void Directory::close()
{
  if (!dir)
  {
    return;
  }

  closedir((DIR *)dir);
  dir = 0;
}

#else

#include "windows.h"

Directory::Directory()
{
  dir = INVALID_HANDLE_VALUE;
  push_back = 0;
}

int Directory::open(const std::string &_dirname)
{
  close();
  dirname = _dirname;

  while (dirname.length() > 1 && dirname[dirname.length() - 1] == '/')
  {
    dirname.erase(dirname.length() - 1);
  }

  std::string d = dirname + "\\*";

  WIN32_FIND_DATA data;
  dir = FindFirstFile(d.c_str(), &data);

  if (dir == INVALID_HANDLE_VALUE)
  {
    return 0;
  }

  push_back = 1;
  backup.filename = data.cFileName;
  backup.name = dirname + "\\" + data.cFileName;

  std::string::size_type pos;

  while ((pos = backup.name.find("\\\\")) != std::string::npos)
  {
    backup.name.erase(pos, 1);
  }

  while (backup.name.length() >= 2 && backup.name[0] == '.' && backup.name[1] == '\\')
  {
    backup.name.erase(0, 2);
  }


  backup.size = data.nFileSizeLow;

  if (data.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY)
  {
    backup.type = Dir;
  }
  else
  {
    backup.type = File;
  }

  if (data.dwFileAttributes & FILE_ATTRIBUTE_READONLY)
  {
    backup.mode = Read;
  }
  else
  {
    backup.mode = Read | Write;
  }

  FILETIME localtime;
  FileTimeToLocalFileTime(&data.ftLastWriteTime, &localtime);
  SYSTEMTIME systime;
  FileTimeToSystemTime(&localtime, &systime);
  backup.year = systime.wYear;
  backup.month = (unsigned char)systime.wMonth;
  backup.day = (unsigned char)systime.wDay;
  backup.hour = (unsigned char)systime.wHour;
  backup.min = (unsigned char)systime.wMinute;
  backup.sec = (unsigned char)systime.wSecond;
  return 1;
}

int Directory::readEntry(Entry &entry)
{
  if (push_back)
  {
    push_back = 0;
    entry = backup;
    return 1;
  }

  if (dir == INVALID_HANDLE_VALUE)
  {
    return 0;
  }

  WIN32_FIND_DATA data;

  if (!FindNextFile((HANDLE) dir, &data))
  {
    return 0;
  }

  backup.filename = data.cFileName;
  backup.name = dirname + "\\" + data.cFileName;

  std::string::size_type pos;

  while ((pos = backup.name.find("\\\\")) != std::string::npos)
  {
    backup.name.erase(pos, 1);
  }

  while (backup.name.length() >= 2 && backup.name[0] == '.' && backup.name[1] == '\\')
  {
    backup.name.erase(0, 2);
  }


  backup.size = data.nFileSizeLow;

  if (data.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY)
  {
    backup.type = Dir;
  }
  else
  {
    backup.type = File;
  }

  if (data.dwFileAttributes & FILE_ATTRIBUTE_READONLY)
  {
    backup.mode = Read;
  }
  else
  {
    backup.mode = Read | Write;
  }

  FILETIME localtime;
  FileTimeToLocalFileTime(&data.ftLastWriteTime, &localtime);
  SYSTEMTIME systime;
  FileTimeToSystemTime(&localtime, &systime);
  backup.year = systime.wYear;
  backup.month = (unsigned char)systime.wMonth;
  backup.day = (unsigned char)systime.wDay;
  backup.hour = (unsigned char)systime.wHour;
  backup.min = (unsigned char)systime.wMinute;
  backup.sec = (unsigned char)systime.wSecond;

  entry = backup;
  return 1;
}

void Directory::close()
{
  if (dir != INVALID_HANDLE_VALUE)
  {
    FindClose((HANDLE)dir);
    dir = INVALID_HANDLE_VALUE;
  }
}

#endif


#ifdef DIRTEST
#include <stdio.h>
using namespace vfihtml;
int main(int argc, char *argv[])
{
  Directory dir;

  if (dir.open(argc >= 2 ? argv[1] : "."))
  {
    Directory::Entry entry;

    while (dir.readEntry(entry))
    {
      const char *t[] = {"File", "Dir", "Link", "Special"};
      const char *m[] = {"--", "R-", "-W", "RW"};

      printf("%s %8s  %04u.%02u.%02u %02u:%02u:%02u %8u %s\n",
             m[entry.mode],
             t[entry.type],
             entry.year, entry.month, entry.day,
             entry.hour, entry.min, entry.sec,
             entry.size,
             entry.name.c_str());
    }

    dir.close();
  }
}
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
