---
title: sdi/src/pathutil.h

---

# sdi/src/pathutil.h



## Functions

|                | Name           |
| -------------- | -------------- |
| std::string | **[pathclean](pathutil_8h.md#function-pathclean)**(const std::string & path) |
| std::string | **[pathcat](pathutil_8h.md#function-pathcat)**(const std::string & p1, const std::string & p2) |
| void | **[current_dir](pathutil_8h.md#function-current-dir)**(std::string & cwd) |
| bool | **[is_absolute_path](pathutil_8h.md#function-is-absolute-path)**(const std::string & path) |
| std::string | **[dirname](pathutil_8h.md#function-dirname)**(const std::string & path) |
| std::string | **[filename_from_path](pathutil_8h.md#function-filename-from-path)**(const std::string & path) |
| bool | **[make_dir](pathutil_8h.md#function-make-dir)**(const std::string & path, mode_t mode =0777) |


## Functions Documentation

### function pathclean

```cpp
std::string pathclean(
    const std::string & path
)
```


cleanup path, examples:

* "a//b" -> "a/b"
* "a/../b" -> "b" pathpath to be cleaned up 

cleaned up path 


### function pathcat

```cpp
std::string pathcat(
    const std::string & p1,
    const std::string & p2
)
```


**Parameters**: 

  * **p1** first path component 
  * **p2** second path component 


**Return**: resulting combined path 

concatenate two path components into a path. It handles also the case that the second component _p2_ is an absolute path, e.g. "a" + "/b" -> "/b" 


### function current_dir

```cpp
void current_dir(
    std::string & cwd
)
```


**Parameters**: 

  * **cwd** path to current working directory 


returns the path of current working directory 


### function is_absolute_path

```cpp
bool is_absolute_path(
    const std::string & path
)
```


**Parameters**: 

  * **path** path name 


**Return**: true for an absolute path, else false 

returns true, if parameter _path_ is an absolute path 


### function dirname

```cpp
std::string dirname(
    const std::string & path
)
```


**Parameters**: 

  * **path** file name including path 


**Return**: directory name 

**Note**: _path_ supports both / and \ as path separator 

strip non-directory suffix from file name 


### function filename_from_path

```cpp
std::string filename_from_path(
    const std::string & path
)
```


**Parameters**: 

  * **path** file name including path 


**Return**: file name 

**Note**: _path_ supports both / and \ as path separator 

strip directory prefix from file name 


### function make_dir

```cpp
bool make_dir(
    const std::string & path,
    mode_t mode =0777
)
```


**Parameters**: 

  * **path** path to be created 
  * **mode** mode specifies the permissions to use (as used for mkdir()) 


**Return**: true if the directory was created or was already existing, false if the directory could not be created 

create directory and parent directories if required. 




## Source code

```cpp

#ifndef PATHUTIL_H
#define PATHUTIL_H

#include <string>
#include <sys/types.h>

std::string pathclean(const std::string &path);

std::string pathcat(const std::string &p1, const std::string &p2);

void current_dir(std::string &cwd);

bool is_absolute_path(const std::string &path);

std::string dirname(const std::string &path);

std::string filename_from_path(const std::string &path);

bool make_dir(const std::string &path, mode_t mode = 0777);

#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
