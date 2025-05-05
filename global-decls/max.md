---
layout: stdlib-reference
---

# max

## Description

Maximum.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="max.html#typeparam-T" class="code_type">T</a> <a href="max.html">max</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="max.html#typeparam-T" class="code_type">T</a> <a href="max.html#decl-x" class="code_param">x</a>,
    <a href="max.html#typeparam-T" class="code_type">T</a> <a href="max.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="max.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 1:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html">max</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="max.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 1:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>, <a href="max.html#decl-M" class="code_var">M</a>&gt; <a href="max.html">max</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="max.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>, <a href="max.html#decl-M" class="code_var">M</a>&gt; <a href="max.html#decl-x" class="code_param">x</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>, <a href="max.html#decl-M" class="code_var">M</a>&gt; <a href="max.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="max.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 1:
<a href="max.html#typeparam-T" class="code_type">T</a> <a href="max.html">max</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="max.html#typeparam-T" class="code_type">T</a> <a href="max.html#decl-x" class="code_param">x</a>,
    <a href="max.html#typeparam-T" class="code_type">T</a> <a href="max.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="max.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html">max</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="max.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>, <a href="max.html#decl-M" class="code_var">M</a>&gt; <a href="max.html">max</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="max.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>, <a href="max.html#decl-M" class="code_var">M</a>&gt; <a href="max.html#decl-x" class="code_param">x</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>, <a href="max.html#decl-M" class="code_var">M</a>&gt; <a href="max.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="max.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html">max</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html#decl-x" class="code_param">x</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="max.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html">max</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html#decl-x" class="code_param">x</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="max.html#typeparam-T" class="code_type">T</a>, <a href="max.html#decl-N" class="code_var">N</a>&gt; <a href="max.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="max.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int
####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)

## Parameters

####  <a id="decl-x"></a>x  : [T](max#typeparam-T)
The first value.

####  <a id="decl-y"></a>y  : [T](max#typeparam-T)
The second value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The first value.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The second value.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The first value.

####  <a id="decl-y"></a>y  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The second value.

####  <a id="decl-x"></a>x  : [CoopVec](../types/coopvec-04/index)\<[T](../types/coopvec-04/index#typeparam-T), [N](../types/coopvec-04/index#decl-N)\>
The first value.

####  <a id="decl-y"></a>y  : [CoopVec](../types/coopvec-04/index)\<[T](../types/coopvec-04/index#typeparam-T), [N](../types/coopvec-04/index#decl-N)\>
The second value.


## Return value
The maximum of <span class='code'><a href="max.html#decl-x" class="code_param">x</a></span> and <span class='code'><a href="max.html#decl-y" class="code_param">y</a></span>.


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


