---
title: sdi/src/pathutil.cpp

---

# sdi/src/pathutil.cpp



## Functions

|                | Name           |
| -------------- | -------------- |
| string | **[pathclean](pathutil_8cpp.md#function-pathclean)**(const string & path) |
| string | **[pathcat](pathutil_8cpp.md#function-pathcat)**(const string & p1, const string & p2) |
| void | **[current_dir](pathutil_8cpp.md#function-current-dir)**(string & cwd) |
| bool | **[is_absolute_path](pathutil_8cpp.md#function-is-absolute-path)**(const std::string & path) |
| string | **[dirname](pathutil_8cpp.md#function-dirname)**(const std::string & path) |
| string | **[filename_from_path](pathutil_8cpp.md#function-filename-from-path)**(const std::string & path) |
| bool | **[make_dir](pathutil_8cpp.md#function-make-dir)**(const std::string & path, mode_t mode =0777) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[PATH_SEPARATOR](pathutil_8cpp.md#define-path-separator)**  |


## Functions Documentation

### function pathclean

```cpp
string pathclean(
    const string & path
)
```


### function pathcat

```cpp
string pathcat(
    const string & p1,
    const string & p2
)
```


### function current_dir

```cpp
void current_dir(
    string & cwd
)
```


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
string dirname(
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
string filename_from_path(
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




## Macros Documentation

### define PATH_SEPARATOR

```cpp
#define PATH_SEPARATOR "/"
```


## Source code

```cpp

#include "pathutil.h"
#ifdef _STM32
  #include <sys/syslimits.h>
#else
  #include <limits.h>
#endif
#include <vector>
#include <stdio.h>
#include <sys/stat.h>
#include <unistd.h>
#define PATH_SEPARATOR "/" // path separator string

using namespace std;

string pathclean(const string &path)
{
  vector<string> pc;

  string::size_type start, end;

  // split path into components
  for (start = 0; start < path.length(); start = end + 1)
  {
    end = path.find_first_of("/\\", start);

    if (end == string::npos)
    {
      end = path.length();
    }

    pc.push_back(path.substr(start, end - start));
  }

  if (!pc.size())
  {
    return ".";
  }

  // check for absolute path
  string abs = pc[0];

  if (abs == "")
  {
    abs = PATH_SEPARATOR;
    pc.erase(pc.begin());
  }
  else if (abs[abs.length() - 1] == ':')
  {
    abs += PATH_SEPARATOR;
    pc.erase(pc.begin());
  }
  else
  {
    abs = "";
  }

  // normalize path, e.g. a/b/../c -> a/c
  unsigned i;

  for (i = 0; i < pc.size(); i++)
  {
    if (pc[i] == "" || pc[i] == ".")
    {
      pc.erase(pc.begin() + i--);
    }
    else if (i && pc[i - 1] != ".." && pc[i] == "..")
    {
      pc.erase(pc.begin() + i - 1, pc.begin() + i + 1);
      i -= 2;
    }
  }


  // rebuild path

  string result = abs;

  for (i = 0; i < pc.size(); i++)
  {

    if (i)
    {
      result += PATH_SEPARATOR;
    }

    result += pc[i];
  }

  if (result == "")
  {
    result = ".";
  }

  return result;
}

string pathcat(const string &p1, const string &p2)
{
  if (is_absolute_path(p2))
  {
    return p2;
  }

  return pathclean(p1 + PATH_SEPARATOR + p2);
}

void current_dir(string &cwd)
{
#ifdef _STM32
  cwd = ".";
#else
  char buffer[PATH_MAX] = {0};

  if (getcwd(buffer, sizeof(buffer)) != NULL)
  {
    cwd = buffer;
  }

#endif
  return;
}


bool is_absolute_path(const std::string &path)
{
  string::size_type pos;
  pos = path.find_first_of("/\\");

  if (pos == 0)
  {
    return true;  // test for "/xy"
  }

  if (pos == string::npos)
  {
    return path.length() ? path[path.length() - 1] == ':' : false; // test for "c:"
  }

  return path[pos - 1] == ':'; // test for "c:/xy"
}

string dirname(const std::string &path)
{
  string::size_type pos;
  pos = path.find_last_of("/\\");

  // handle 'filename'
  if (pos == string::npos)
  {
    return ".";
  }

  // handle '/filename'
  if (pos == 0)
  {
    return path.substr(0, 1);
  }

  // handle absolute path 'c:/filename'
  if (is_absolute_path(path) && pos == path.find_first_of("/\\"))
  {
    return path.substr(0, pos + 1);
  }

  return path.substr(0, pos);
}

string filename_from_path(const std::string &path)
{
  string::size_type pos;
  pos = path.find_last_of("/\\");

  // handle 'filename'
  if (pos == string::npos)
  {
    return path;
  }

  return path.substr(pos + 1);
}


bool make_dir(const std::string &path, mode_t mode)
{
  if (path.empty())
  {
    return true;  // this may happen in case of '/dir', ignore
  }

  struct stat s;

  if (stat(path.c_str(), &s) == 0)
  {
    if (!S_ISDIR(s.st_mode))
    {
      return false; // existing file/symlink already using same name
    }

    return true;  // directory exists
  }

  string::size_type pos = path.find_last_of("/\\");

  if (pos != string::npos)
  {
    if (path.length() - pos == 3 && path.compare(pos + 1, 2, "..") == 0)
    {
      // This would invoke mkdir(".."), this will not work
      // Prevent that other directories are created during
      // recursion by aborting here.
      return false;
    }

    // recursively create directories if required
    if (!make_dir(path.substr(0, pos), mode))
    {
      return false;
    }
  }

  return mkdir(path.c_str(), mode) == 0;
}

#ifdef PATHUTILTEST

#include <stdio.h>
struct Test
{
  const char *input;
  const char *result;
};

struct Test2
{
  const char *input1;
  const char *input2;
  const char *result;
};

int main()
{

  struct Test t[] = { { "/a/b/c", "/a/b/c"},
    { "/a/b/../c", "/a/c"},
    { "/a/../..", "/.."},
    { "//a/b/c", "/a/b/c"},
    { "/a/./b/c", "/a/b/c"},
    { "/a//b/c", "/a/b/c"},
    { "/a/b/c/", "/a/b/c"},
    { "a/b/c/", "a/b/c"},
    { "a//b/./c/", "a/b/c"},
    { "a/b/../c/", "a/c"},
    { "c:/a/b/c", "c:/a/b/c"},
    { "c:/a/b/../c", "c:/a/c"},
    { "://a/b/./c", ":/a/b/c"},
    { ":a/b//c", ":a/b/c"},
    { "c:\\a\\b\\c", "c:/a/b/c"}
  };

  unsigned i;

  for (i = 0; i < sizeof(t) / sizeof(t[0]); i++)
  {
    string z = pathclean(t[i].input);
    printf("'%s' --> '%s'\t", t[i].input, z.c_str());

    if (z != t[i].result)
    {
      printf("failed, expected: '%s'\n", t[i].result);
    }
    else
    {
      printf("OK\n");
    }
  }


  struct Test2 t2[] = { {"a", "b", "a/b"},
    {"a", "/b", "/b"},
    {"a", "..", "."},
    {"/a", "..", "/"},
    {"/a", "./b", "/a/b"},
    {"/a", "c:/b", "c:/b"},
    {"c:", "b", "c:/b"}
  };

  for (i = 0; i < sizeof(t2) / sizeof(t2[0]); i++)
  {
    string z = pathcat(t2[i].input1, t2[i].input2);
    printf("'%s' + '%s' --> '%s'\t", t2[i].input1, t2[i].input2, z.c_str());

    if (z != t2[i].result)
    {
      printf("failed, expected: '%s'\n", t2[i].result);
    }
    else
    {
      printf("OK\n");
    }
  }


  struct Test t3[] = { {"/a/b/c", "/a/b"},
    {"/a", "/"},
    {"a/b/c", "a/b"},
    {"a", "."},
    {"c:/a", "c:/"},
    {"c:/a/b", "c:/a"}
  };

  for (i = 0; i < sizeof(t3) / sizeof(t3[0]); i++)
  {
    string z = dirname(t3[i].input);
    printf("'%s' --> '%s'\t", t3[i].input, z.c_str());

    if (z != t3[i].result)
    {
      printf("failed, expected: '%s'\n", t3[i].result);
    }
    else
    {
      printf("OK\n");
    }
  }

  return 0;
}

#endif

#ifdef PATHUTILTEST2
using namespace vfihtml;
int main(int argc, char *argv[])
{
  if (argc != 2)
  {
    fprintf(stderr, "Usage: %s <path>\n", argv[0]);
    return 1;
  }

  printf("make_dir(%s)=%d\n", argv[1], make_dir(argv[1]));
  return 0;
}
#endif
```


-------------------------------

Updated on 2025-06-17 at 11:52:25 +0100
