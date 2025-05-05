---
layout: stdlib-reference
---

# struct DiffTensorView\<T, A\>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index) = float
####  <a id="typeparam-A"></a>A: [IDiffTensorWrapper](../../interfaces/idifftensorwrapper-015b/index) = [AtomicAdd](../atomicadd-06/index)

## Fields

####  <a id="decl-diff"></a>[diff](diff) : [A](index#typeparam-A)
####  <a id="decl-primal"></a>[primal](primal) : [TensorView](../tensorview-06/index)\<[T](../tensorview-06/index#typeparam-T)\>

## Methods

* [size](size)
* [dims](dims)
* [stride](stride)
* [init](init)
* [load](load)
* [store](store)
* [subscript](subscript)
* [loadOnce](loadonce-4)
* [storeOnce](storeonce-5)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

diff <diff>
dims <dims>
init <init>
load <load>
loadOnce <loadonce-4>
primal <primal>
size <size>
store <store>
storeOnce <storeonce-5>
stride <stride>
subscript <subscript>
```
RTD-TOC-END -->
