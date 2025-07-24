---
hidden: true
title: stacktrace.h
---

<a href="stacktrace_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 // stacktrace.h (c) 2008, Timo Bingmann from http://idlebox.net/
 2 // published under the WTFPL v2.0
 3 
 4 #ifndef _STACKTRACE_H_
 5 #define _STACKTRACE_H_
 6 
 7 
 8 #ifdef _VRXEVO
 9  #define print_stacktrace() SEC_LOG_PRINT_CALLSTACK()
 10 #else
 11 
 12 
 13 #include <stdio.h>
 14 #include <stdlib.h>
 15 #include <execinfo.h>
 16 #include <cxxabi.h>
 17 
 18 #define TRUNCATED_SIZE 128
 19 #ifdef TRUNCATED_SIZE
 20 
 21 #include <string.h>
 22 #include <sec/seclogging.h>
 23 
 24 static void truncateStackTraceLine(char* func)
 25 {
 26  if (strlen(func) > TRUNCATED_SIZE)
 27  {
 29  func[TRUNCATED_SIZE] = 0;
 30  }
 31 }
 32 
 33 #else
 34 #define truncateStackTraceLine(func)
 35 #endif
 36 
 37 
 38 
 40 static inline void print_stacktrace(FILE *out = stderr,
 41  unsigned int max_frames = 63) {
 42  fprintf(out, "\x1b[36;40m"); //color cyan start
 43  fprintf(out, "stack trace:\n");
 44 
 45  // storage array for stack trace address data
 46  void* addrlist[max_frames + 1];
 47 
 48  // retrieve current stack addresses
 49  int addrlen = backtrace(addrlist, sizeof(addrlist) / sizeof(void*));
 50 
 51  if (addrlen == 0) {
 52  fprintf(out, " <empty, possibly corrupt>\n");
 53  return;
 54  }
 55 
 56  // resolve addresses into strings containing "filename(function+address)",
 57  // this array must be free()-ed
 58  char** symbollist = backtrace_symbols(addrlist, addrlen);
 59 
 60  // iterate over the returned symbol lines. skip the first, it is the
 61  // address of this function.
 62  for (int i = 1; i < addrlen; i++) {
 63  char *begin_name = 0, *begin_offset = 0, *end_offset = 0;
 64 
 65  if (addrlist[i] == addrlist[i-1])
 66  {
 67  continue; //skip printing duplicate lines
 68  }
 69 
 70  // find parentheses and +address offset surrounding the mangled name:
 71  // ./module(function+0x15c) [0x8048a6d]
 72  for (char *p = symbollist[i]; *p; ++p) {
 73  if (*p == '(')
 74  begin_name = p;
 75  else if (*p == '+')
 76  begin_offset = p;
 77  else if (*p == ')' && begin_offset) {
 78  end_offset = p;
 79  break;
 80  }
 81  }
 82 
 83  if (begin_name && begin_offset && end_offset
 84  && begin_name < begin_offset) {
 85  *begin_name++ = '\0';
 86  *begin_offset++ = '\0';
 87  *end_offset = '\0';
 88 
 89  // mangled name is now in [begin_name, begin_offset) and caller
 90  // offset in [begin_offset, end_offset). now apply
 91  // __cxa_demangle():
 92 
 93  int status;
 94  char* ret = abi::__cxa_demangle(begin_name, NULL, NULL,
 95  &status);
 96  if (status == 0) {
 97  truncateStackTraceLine(ret);
 98  fprintf(out, " %s : %s+%s\n", symbollist[i], ret,
 99  begin_offset);
 100  } else {
 101  // demangling failed. Output function name as a C function with
 102  // no arguments.
 103  fprintf(out, " %s : %s()+%s\n", symbollist[i], begin_name,
 104  begin_offset);
 105  }
 106  free(ret);
 107  } else {
 108  // couldn't parse the line? print the whole line.
 109  fprintf(out, " %s\n", symbollist[i]);
 110  }
 111  }
 112 
 113  fprintf(out, "\x1b[0m"); //ansi-color-reset
 114 
 115  free(symbollist);
 116 }
 117 #endif //not Verix
 118 
 119 #endif // _STACKTRACE_H_
```
