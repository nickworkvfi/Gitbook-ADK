---
hidden: true
title: pathutil.h
---

<a href="pathutil_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 
 2 #ifndef PATHUTIL_H
 3 #define PATHUTIL_H
 4 
 5 #include <string>
 6 #include <sys/types.h>
 7 
 16 std::string pathclean(const std::string &path);
 17 
 24 std::string pathcat(const std::string &p1, const std::string &p2);
 25 
 29 void current_dir(std::string &cwd);
 30 
 35 bool is_absolute_path(const std::string &path);
 36 
 42 std::string dirname(const std::string &path);
 43 
 49 std::string filename_from_path(const std::string &path);
 50 
 56 bool make_dir(const std::string &path, mode_t mode = 0777);
 57 
 58 #endif
```
