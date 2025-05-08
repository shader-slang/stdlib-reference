---
layout: stdlib-reference
---

# fma

## Description

Fused multiply-add.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="fma.html#typeparam-T" class="code_type">T</a> <a href="fma.html">fma</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="fma.html#typeparam-T" class="code_type">T</a> <a href="fma.html#decl-a" class="code_param">a</a>,
    <a href="fma.html#typeparam-T" class="code_type">T</a> <a href="fma.html#decl-b" class="code_param">b</a>,
    <a href="fma.html#typeparam-T" class="code_type">T</a> <a href="fma.html#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="fma.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>&gt; <a href="fma.html">fma</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>&gt; <a href="fma.html#decl-a" class="code_param">a</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>&gt; <a href="fma.html#decl-b" class="code_param">b</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>&gt; <a href="fma.html#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="fma.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>, <a href="fma.html#decl-M" class="code_var">M</a>&gt; <a href="fma.html">fma</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="fma.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>, <a href="fma.html#decl-M" class="code_var">M</a>&gt; <a href="fma.html#decl-a" class="code_param">a</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>, <a href="fma.html#decl-M" class="code_var">M</a>&gt; <a href="fma.html#decl-b" class="code_param">b</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>, <a href="fma.html#decl-M" class="code_var">M</a>&gt; <a href="fma.html#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="fma.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>&gt; <a href="fma.html">fma</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>&gt; <a href="fma.html#decl-a" class="code_param">a</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>&gt; <a href="fma.html#decl-b" class="code_param">b</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="fma.html#typeparam-T" class="code_type">T</a>, <a href="fma.html#decl-N" class="code_var">N</a>&gt; <a href="fma.html#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="fma.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-a"></a>a  : [T](fma.html#typeparam-T)
The first value to multiply.

####  <a id="decl-b"></a>b  : [T](fma.html#typeparam-T)
The second value to multiply.

####  <a id="decl-c"></a>c  : [T](fma.html#typeparam-T)
The value to add to the product of <span class='code'><a href="fma.html#decl-a" class="code_param">a</a></span> and <span class='code'><a href="fma.html#decl-b" class="code_param">b</a></span>.

####  <a id="decl-a"></a>a  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The first value to multiply.

####  <a id="decl-b"></a>b  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The second value to multiply.

####  <a id="decl-c"></a>c  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The value to add to the product of <span class='code'><a href="fma.html#decl-a" class="code_param">a</a></span> and <span class='code'><a href="fma.html#decl-b" class="code_param">b</a></span>.

####  <a id="decl-a"></a>a  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The first value to multiply.

####  <a id="decl-b"></a>b  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The second value to multiply.

####  <a id="decl-c"></a>c  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The value to add to the product of <span class='code'><a href="fma.html#decl-a" class="code_param">a</a></span> and <span class='code'><a href="fma.html#decl-b" class="code_param">b</a></span>.

####  <a id="decl-a"></a>a  : [CoopVec](../types/coopvec-04/index.html)\<[T](../types/coopvec-04/index.html#typeparam-T), [N](../types/coopvec-04/index.html#decl-N)\>
The first value to multiply.

####  <a id="decl-b"></a>b  : [CoopVec](../types/coopvec-04/index.html)\<[T](../types/coopvec-04/index.html#typeparam-T), [N](../types/coopvec-04/index.html#decl-N)\>
The second value to multiply.

####  <a id="decl-c"></a>c  : [CoopVec](../types/coopvec-04/index.html)\<[T](../types/coopvec-04/index.html#typeparam-T), [N](../types/coopvec-04/index.html#decl-N)\>
The value to add to the product of <span class='code'><a href="fma.html#decl-a" class="code_param">a</a></span> and <span class='code'><a href="fma.html#decl-b" class="code_param">b</a></span>.


## Return value
The result of <span class='code'><a href="fma.html#decl-a" class="code_param">a</a>*<a href="fma.html#decl-b" class="code_param">b</a>+<a href="fma.html#decl-c" class="code_param">c</a></span>.


## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


