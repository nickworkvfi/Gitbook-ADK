---
title: cpl/include/commerce/CpFunctional.h

---

# cpl/include/commerce/CpFunctional.h



## Namespaces

| Name           |
| -------------- |
| **[vficpl](namespacevficpl.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[vficpl::CpBaseFnImp](structvficpl_1_1_cp_base_fn_imp.md)**  |
| struct | **[vficpl::CpBaseFnImp< R, A1, A2 >](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_00_01_a2_01_4.md)**  |
| struct | **[vficpl::CpBaseFnImp< R, A1 >](structvficpl_1_1_cp_base_fn_imp_3_01_r_00_01_a1_01_4.md)**  |
| struct | **[vficpl::CpBaseFnImp< R >](structvficpl_1_1_cp_base_fn_imp_3_01_r_01_4.md)**  |
| struct | **[vficpl::CpFreeFnImp](structvficpl_1_1_cp_free_fn_imp.md)**  |
| struct | **[vficpl::CpFreeFnImp< F, R, A1, A2 >](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_00_01_a1_00_01_a2_01_4.md)**  |
| struct | **[vficpl::CpFreeFnImp< F, R, A1 >](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_00_01_a1_01_4.md)**  |
| struct | **[vficpl::CpFreeFnImp< F, R >](structvficpl_1_1_cp_free_fn_imp_3_01_f_00_01_r_01_4.md)**  |
| struct | **[vficpl::CpMemberFnImp](structvficpl_1_1_cp_member_fn_imp.md)**  |
| struct | **[vficpl::CpMemberFnImp< M, T, R, A1, A2 >](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_00_01_a1_00_01_a2_01_4.md)**  |
| struct | **[vficpl::CpMemberFnImp< M, T, R, A1 >](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_00_01_a1_01_4.md)**  |
| struct | **[vficpl::CpMemberFnImp< M, T, R >](structvficpl_1_1_cp_member_fn_imp_3_01_m_00_01_t_00_01_r_01_4.md)**  |
| class | **[vficpl::CpFunction](classvficpl_1_1_cp_function.md)**  |
| class | **[vficpl::CpFunction< R >](classvficpl_1_1_cp_function_3_01_r_01_4.md)**  |
| class | **[vficpl::CpFunction< R, A1 >](classvficpl_1_1_cp_function_3_01_r_00_01_a1_01_4.md)**  |
| class | **[vficpl::CpFunction< R, A1, A2 >](classvficpl_1_1_cp_function_3_01_r_00_01_a1_00_01_a2_01_4.md)**  |
| class | **[vficpl::CpFunction](classvficpl_1_1_cp_function.md)**  |




## Source code

```cpp
#pragma once

namespace vficpl
{

template<typename R, typename A1 = void, typename A2 = void, typename A3 = void>
struct CpBaseFnImp
{
  virtual ~CpBaseFnImp() {}
  virtual R invoke(A1, A2, A3) = 0;
};

template<typename R, typename A1, typename A2>
struct CpBaseFnImp<R, A1, A2>
{
  virtual ~CpBaseFnImp() {}
  virtual R invoke(A1, A2) = 0;
};

template<typename R, typename A1>
struct CpBaseFnImp<R, A1>
{
  virtual ~CpBaseFnImp() {}
  virtual R invoke(A1) = 0;
};

template<typename R>
struct CpBaseFnImp<R>
{
  virtual ~CpBaseFnImp() {}
  virtual R invoke() = 0;
};

template<typename F, typename R, typename A1 = void, typename A2 = void, typename A3 = void>
struct CpFreeFnImp : CpBaseFnImp<R, A1, A2, A3>
{
  CpFreeFnImp(F fn) : m_fn(fn) {}
  virtual R invoke(A1 a1, A2 a2, A3 a3) { return m_fn(a1, a2, a3); }
  F m_fn;
};

template<typename F, typename R, typename A1, typename A2>
struct CpFreeFnImp<F, R, A1, A2> : CpBaseFnImp<R, A1, A2>
{
  CpFreeFnImp(F fn) : m_fn(fn) {}
  virtual R invoke(A1 a1, A2 a2) { return m_fn(a1, a2); }
  F m_fn;
};

template<typename F, typename R, typename A1>
struct CpFreeFnImp<F, R, A1> : CpBaseFnImp<R, A1>
{
  CpFreeFnImp(F fn) : m_fn(fn) {}
  virtual R invoke(A1 a1) { return m_fn(a1); }
  F m_fn;
};

template<typename F, typename R>
struct CpFreeFnImp<F, R> : CpBaseFnImp<R>
{
  CpFreeFnImp(F fn) : m_fn(fn) {}
  virtual R invoke() { return m_fn(); }
  F m_fn;
};

template<typename M, typename T, typename R, typename A1 = void, typename A2 = void, typename A3 = void>
struct CpMemberFnImp : CpBaseFnImp<R, A1, A2, A3>
{
  CpMemberFnImp(T* obj, M memfn) : m_memfn(memfn), m_obj(obj) {}
  CpMemberFnImp(T& obj, M memfn) : m_memfn(memfn), m_obj(&obj) {}
  virtual R invoke(A1 a1, A2 a2, A3 a3) { return (m_obj->*m_memfn)(a1, a2, a3); }
  M m_memfn;
  T* m_obj;
};

template<typename M, typename T, typename R, typename A1, typename A2>
struct CpMemberFnImp<M, T, R, A1, A2> : CpBaseFnImp<R, A1, A2>
{
  CpMemberFnImp(T* obj, M memfn) : m_memfn(memfn), m_obj(obj) {}
  CpMemberFnImp(T& obj, M memfn) : m_memfn(memfn), m_obj(&obj) {}
  virtual R invoke(A1 a1, A2 a2) { return (m_obj->*m_memfn)(a1, a2); }

  M m_memfn;
  T* m_obj;
};

template<typename M, typename T, typename R, typename A1>
struct CpMemberFnImp<M, T, R, A1> : CpBaseFnImp<R, A1>
{
  CpMemberFnImp(T* obj, M memfn) : m_memfn(memfn), m_obj(obj) {}
  CpMemberFnImp(T& obj, M memfn) : m_memfn(memfn), m_obj(&obj) {}
  virtual R invoke(A1 a1) { return (m_obj->*m_memfn)(a1); }
  M m_memfn;
  T* m_obj;
};

template<typename M, typename T, typename R>
struct CpMemberFnImp<M, T, R> : CpBaseFnImp<R>
{
  CpMemberFnImp(T* obj, M memfn) : m_memfn(memfn), m_obj(obj) {}
  CpMemberFnImp(T& obj, M memfn) : m_memfn(memfn), m_obj(&obj) {}
  virtual R invoke() { return (m_obj->*m_memfn)(); }
  M m_memfn;
  T* m_obj;
};

template<typename R, typename A1 = void, typename A2 = void, typename A3 = void>
class CpFunction;

template<typename R>
class CpFunction<R>
{
public:
  CpFunction() : m_imp(NULL) {}
  ~CpFunction() { delete m_imp; }

  template<typename F>
  void assign(F f) { swap(new CpFreeFnImp<F, R>(f)); }
  template<typename M, typename T>
  void assign(T* obj, M mem) { swap(new CpMemberFnImp<M, T, R>(obj, mem)); }

  R operator()() { return m_imp->invoke(); }

private:
  template<typename T>
  void swap(T* imp) { if (m_imp) delete m_imp; m_imp = imp; }

  CpBaseFnImp<R, void, void, void>* m_imp;
};

template<typename R, typename A1>
class CpFunction<R, A1>
{
public:
  CpFunction() : m_imp(NULL) {}
  ~CpFunction() { delete m_imp; }

  template<typename F>
  void assign(F f) { swap(new CpFreeFnImp<F, R, A1>(f)); }
  template<typename M, typename T>
  void assign(T* obj, M mem) { swap(new CpMemberFnImp<M, T, R, A1>(obj, mem)); }

  R operator()(A1 arg1) { return m_imp->invoke(arg1); }

private:
  CpFunction(const CpFunction&);
  CpFunction& operator=(const CpFunction&);

  template<typename T>
  void swap(T* imp) { if (m_imp) delete m_imp; m_imp = imp; }

  CpBaseFnImp<R, A1>* m_imp;
};

template<typename R, typename A1, typename A2>
class CpFunction<R, A1, A2>
{
public:
  CpFunction() : m_imp(NULL) {}
  ~CpFunction() { delete m_imp; }

  template<typename F>
  void assign(F f) { swap(new CpFreeFnImp<F, R, A1, A2>(f)); }
  template<typename M, typename T>
  void assign(T* obj, M mem) { swap(new CpMemberFnImp<M, T, R, A1, A2>(obj, mem)); }

  R operator()(A1 arg1, A2 arg2) { return m_imp->invoke(arg1, arg2); }

private:
  CpFunction(const CpFunction&);
  CpFunction& operator=(const CpFunction&);

  template<typename T>
  void swap(T* imp) { if (m_imp) delete m_imp; m_imp = imp; }

  CpBaseFnImp<R, A1, A2>* m_imp;
};

template<typename R, typename A1, typename A2, typename A3>
class CpFunction
{
public:
  CpFunction() : m_imp(NULL) {}
  ~CpFunction() { delete m_imp; }

  template<typename F>
  void assign(F f) { swap(new CpFreeFnImp<F, R, A1, A2, A3>(f)); }
  template<typename M, typename T>
  void assign(T* obj, M mem) { swap(new CpMemberFnImp<M, T, R, A1, A2, A3>(obj, mem)); }

  R operator()(A1 arg1, A2 arg2, A3 arg3) { return m_imp->invoke(arg1, arg2, arg3); }

private:
  CpFunction(const CpFunction&);
  CpFunction& operator=(const CpFunction&);

  template<typename T>
  void swap(T* imp) { if (m_imp) delete m_imp; m_imp = imp; }

  CpBaseFnImp<R, A1, A2, A3>* m_imp;
};

}
```


-------------------------------

Updated on 2025-06-17 at 11:52:24 +0100
