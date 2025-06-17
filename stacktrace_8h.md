---
title: sec/src/api/export/sec/stacktrace.h

---

# sec/src/api/export/sec/stacktrace.h



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[truncateStackTraceLine](stacktrace_8h.md#function-truncatestacktraceline)**(char * func) |
| void | **[print_stacktrace](stacktrace_8h.md#function-print-stacktrace)**(FILE * out =stderr, unsigned int max_frames =63) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TRUNCATED_SIZE](stacktrace_8h.md#define-truncated-size)**  |


## Functions Documentation

### function truncateStackTraceLine

```cpp
static void truncateStackTraceLine(
    char * func
)
```


Todotrunc inside of templates, or something else 


### function print_stacktrace

```cpp
static inline void print_stacktrace(
    FILE * out =stderr,
    unsigned int max_frames =63
)
```


Print a demangled stack backtrace of the caller function to FILE* out. 




## Macros Documentation

### define TRUNCATED_SIZE

```cpp
#define TRUNCATED_SIZE 128
```


## Source code

```cpp
// stacktrace.h (c) 2008, Timo Bingmann from http://idlebox.net/
// published under the WTFPL v2.0

#ifndef _STACKTRACE_H_
#define _STACKTRACE_H_


#ifdef _VRXEVO
    #define print_stacktrace() SEC_LOG_PRINT_CALLSTACK()
#else


#include <stdio.h>
#include <stdlib.h>
#include <execinfo.h>
#include <cxxabi.h>

#define TRUNCATED_SIZE 128
#ifdef TRUNCATED_SIZE

#include <string.h>
#include <sec/seclogging.h>

static void truncateStackTraceLine(char* func)
{
    if (strlen(func) > TRUNCATED_SIZE)
    {
        func[TRUNCATED_SIZE] = 0;
    }
}

#else
#define truncateStackTraceLine(func)
#endif



static inline void print_stacktrace(FILE *out = stderr,
        unsigned int max_frames = 63) {
    fprintf(out, "\x1b[36;40m"); //color cyan start
    fprintf(out, "stack trace:\n");

    // storage array for stack trace address data
    void* addrlist[max_frames + 1];

    // retrieve current stack addresses
    int addrlen = backtrace(addrlist, sizeof(addrlist) / sizeof(void*));

    if (addrlen == 0) {
        fprintf(out, "  <empty, possibly corrupt>\n");
        return;
    }

    // resolve addresses into strings containing "filename(function+address)",
    // this array must be free()-ed
    char** symbollist = backtrace_symbols(addrlist, addrlen);

    // iterate over the returned symbol lines. skip the first, it is the
    // address of this function.
    for (int i = 1; i < addrlen; i++) {
        char *begin_name = 0, *begin_offset = 0, *end_offset = 0;

        if (addrlist[i] == addrlist[i-1])
        {
            continue; //skip printing duplicate lines
        }

        // find parentheses and +address offset surrounding the mangled name:
        // ./module(function+0x15c) [0x8048a6d]
        for (char *p = symbollist[i]; *p; ++p) {
            if (*p == '(')
                begin_name = p;
            else if (*p == '+')
                begin_offset = p;
            else if (*p == ')' && begin_offset) {
                end_offset = p;
                break;
            }
        }

        if (begin_name && begin_offset && end_offset
                && begin_name < begin_offset) {
            *begin_name++ = '\0';
            *begin_offset++ = '\0';
            *end_offset = '\0';

            // mangled name is now in [begin_name, begin_offset) and caller
            // offset in [begin_offset, end_offset). now apply
            // __cxa_demangle():

            int status;
            char* ret = abi::__cxa_demangle(begin_name, NULL, NULL,
                    &status);
            if (status == 0) {
                truncateStackTraceLine(ret);
                fprintf(out, "  %s : %s+%s\n", symbollist[i], ret,
                        begin_offset);
            } else {
                // demangling failed. Output function name as a C function with
                // no arguments.
                fprintf(out, "  %s : %s()+%s\n", symbollist[i], begin_name,
                        begin_offset);
            }
            free(ret);
        } else {
            // couldn't parse the line? print the whole line.
            fprintf(out, "  %s\n", symbollist[i]);
        }
    }

    fprintf(out, "\x1b[0m"); //ansi-color-reset

    free(symbollist);
}
#endif //not Verix

#endif // _STACKTRACE_H_
```


-------------------------------

Updated on 2025-06-17 at 11:52:26 +0100
