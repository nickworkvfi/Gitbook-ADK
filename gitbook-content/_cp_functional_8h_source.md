---
hidden: true
title: CpFunctional.h
---

<a href="_cp_functional_8h.md">Go to the documentation of this file.</a>

``` cpp
 1 #pragma once
 2 
 3 namespace vficpl
 4 {
 5 
 6 template<typename R, typename A1 = void, typename A2 = void, typename A3 = void>
 7 struct CpBaseFnImp
 8 {
 9  virtual ~CpBaseFnImp() {}
 10  virtual R invoke(A1, A2, A3) = 0;
 11 };
 12 
 13 template<typename R, typename A1, typename A2>
 14 struct CpBaseFnImp<R, A1, A2>
 15 {
 16  virtual ~CpBaseFnImp() {}
 17  virtual R invoke(A1, A2) = 0;
 18 };
 19 
 20 template<typename R, typename A1>
 21 struct CpBaseFnImp<R, A1>
 22 {
 23  virtual ~CpBaseFnImp() {}
 24  virtual R invoke(A1) = 0;
 25 };
 26 
 27 template<typename R>
 28 struct CpBaseFnImp<R>
 29 {
 30  virtual ~CpBaseFnImp() {}
 31  virtual R invoke() = 0;
 32 };
 33 
 34 template<typename F, typename R, typename A1 = void, typename A2 = void, typename A3 = void>
 35 struct CpFreeFnImp : CpBaseFnImp<R, A1, A2, A3>
 36 {
 37  CpFreeFnImp(F fn) : m_fn(fn) {}
 38  virtual R invoke(A1 a1, A2 a2, A3 a3) { return m_fn(a1, a2, a3); }
 39  F m_fn;
 40 };
 41 
 42 template<typename F, typename R, typename A1, typename A2>
 43 struct CpFreeFnImp<F, R, A1, A2> : CpBaseFnImp<R, A1, A2>
 44 {
 45  CpFreeFnImp(F fn) : m_fn(fn) {}
 46  virtual R invoke(A1 a1, A2 a2) { return m_fn(a1, a2); }
 47  F m_fn;
 48 };
 49 
 50 template<typename F, typename R, typename A1>
 51 struct CpFreeFnImp<F, R, A1> : CpBaseFnImp<R, A1>
 52 {
 53  CpFreeFnImp(F fn) : m_fn(fn) {}
 54  virtual R invoke(A1 a1) { return m_fn(a1); }
 55  F m_fn;
 56 };
 57 
 58 template<typename F, typename R>
 59 struct CpFreeFnImp<F, R> : CpBaseFnImp<R>
 60 {
 61  CpFreeFnImp(F fn) : m_fn(fn) {}
 62  virtual R invoke() { return m_fn(); }
 63  F m_fn;
 64 };
 65 
 66 template<typename M, typename T, typename R, typename A1 = void, typename A2 = void, typename A3 = void>
 67 struct CpMemberFnImp : CpBaseFnImp<R, A1, A2, A3>
 68 {
 69  CpMemberFnImp(T* obj, M memfn) : m_memfn(memfn), m_obj(obj) {}
 70  CpMemberFnImp(T& obj, M memfn) : m_memfn(memfn), m_obj(&obj) {}
 71  virtual R invoke(A1 a1, A2 a2, A3 a3) { return (m_obj->*m_memfn)(a1, a2, a3); }
 72  M m_memfn;
 73  T* m_obj;
 74 };
 75 
 76 template<typename M, typename T, typename R, typename A1, typename A2>
 77 struct CpMemberFnImp<M, T, R, A1, A2> : CpBaseFnImp<R, A1, A2>
 78 {
 79  CpMemberFnImp(T* obj, M memfn) : m_memfn(memfn), m_obj(obj) {}
 80  CpMemberFnImp(T& obj, M memfn) : m_memfn(memfn), m_obj(&obj) {}
 81  virtual R invoke(A1 a1, A2 a2) { return (m_obj->*m_memfn)(a1, a2); }
 82 
 83  M m_memfn;
 84  T* m_obj;
 85 };
 86 
 87 template<typename M, typename T, typename R, typename A1>
 88 struct CpMemberFnImp<M, T, R, A1> : CpBaseFnImp<R, A1>
 89 {
 90  CpMemberFnImp(T* obj, M memfn) : m_memfn(memfn), m_obj(obj) {}
 91  CpMemberFnImp(T& obj, M memfn) : m_memfn(memfn), m_obj(&obj) {}
 92  virtual R invoke(A1 a1) { return (m_obj->*m_memfn)(a1); }
 93  M m_memfn;
 94  T* m_obj;
 95 };
 96 
 97 template<typename M, typename T, typename R>
 98 struct CpMemberFnImp<M, T, R> : CpBaseFnImp<R>
 99 {
 100  CpMemberFnImp(T* obj, M memfn) : m_memfn(memfn), m_obj(obj) {}
 101  CpMemberFnImp(T& obj, M memfn) : m_memfn(memfn), m_obj(&obj) {}
 102  virtual R invoke() { return (m_obj->*m_memfn)(); }
 103  M m_memfn;
 104  T* m_obj;
 105 };
 106 
 107 template<typename R, typename A1 = void, typename A2 = void, typename A3 = void>
 108 class CpFunction;
 109 
 110 template<typename R>
 111 class CpFunction<R>
 112 {
 113 public:
 114  CpFunction() : m_imp(NULL) {}
 115  ~CpFunction() { delete m_imp; }
 116 
 117  template<typename F>
 118  void assign(F f) { swap(new CpFreeFnImp<F, R>(f)); }
 119  template<typename M, typename T>
 120  void assign(T* obj, M mem) { swap(new CpMemberFnImp<M, T, R>(obj, mem)); }
 121 
 122  R operator()() { return m_imp->invoke(); }
 123 
 124 private:
 125  template<typename T>
 126  void swap(T* imp) { if (m_imp) delete m_imp; m_imp = imp; }
 127 
 128  CpBaseFnImp<R, void, void, void>* m_imp;
 129 };
 130 
 131 template<typename R, typename A1>
 132 class CpFunction<R, A1>
 133 {
 134 public:
 135  CpFunction() : m_imp(NULL) {}
 136  ~CpFunction() { delete m_imp; }
 137 
 138  template<typename F>
 139  void assign(F f) { swap(new CpFreeFnImp<F, R, A1>(f)); }
 140  template<typename M, typename T>
 141  void assign(T* obj, M mem) { swap(new CpMemberFnImp<M, T, R, A1>(obj, mem)); }
 142 
 143  R operator()(A1 arg1) { return m_imp->invoke(arg1); }
 144 
 145 private:
 146  CpFunction(const CpFunction&);
 147  CpFunction& operator=(const CpFunction&);
 148 
 149  template<typename T>
 150  void swap(T* imp) { if (m_imp) delete m_imp; m_imp = imp; }
 151 
 152  CpBaseFnImp<R, A1>* m_imp;
 153 };
 154 
 155 template<typename R, typename A1, typename A2>
 156 class CpFunction<R, A1, A2>
 157 {
 158 public:
 159  CpFunction() : m_imp(NULL) {}
 160  ~CpFunction() { delete m_imp; }
 161 
 162  template<typename F>
 163  void assign(F f) { swap(new CpFreeFnImp<F, R, A1, A2>(f)); }
 164  template<typename M, typename T>
 165  void assign(T* obj, M mem) { swap(new CpMemberFnImp<M, T, R, A1, A2>(obj, mem)); }
 166 
 167  R operator()(A1 arg1, A2 arg2) { return m_imp->invoke(arg1, arg2); }
 168 
 169 private:
 170  CpFunction(const CpFunction&);
 171  CpFunction& operator=(const CpFunction&);
 172 
 173  template<typename T>
 174  void swap(T* imp) { if (m_imp) delete m_imp; m_imp = imp; }
 175 
 176  CpBaseFnImp<R, A1, A2>* m_imp;
 177 };
 178 
 179 template<typename R, typename A1, typename A2, typename A3>
 180 class CpFunction
 181 {
 182 public:
 183  CpFunction() : m_imp(NULL) {}
 184  ~CpFunction() { delete m_imp; }
 185 
 186  template<typename F>
 187  void assign(F f) { swap(new CpFreeFnImp<F, R, A1, A2, A3>(f)); }
 188  template<typename M, typename T>
 189  void assign(T* obj, M mem) { swap(new CpMemberFnImp<M, T, R, A1, A2, A3>(obj, mem)); }
 190 
 191  R operator()(A1 arg1, A2 arg2, A3 arg3) { return m_imp->invoke(arg1, arg2, arg3); }
 192 
 193 private:
 194  CpFunction(const CpFunction&);
 195  CpFunction& operator=(const CpFunction&);
 196 
 197  template<typename T>
 198  void swap(T* imp) { if (m_imp) delete m_imp; m_imp = imp; }
 199 
 200  CpBaseFnImp<R, A1, A2, A3>* m_imp;
 201 };
 202 
 203 }
```
