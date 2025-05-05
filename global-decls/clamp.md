---
layout: stdlib-reference
---

# clamp

## Description

Clamp. Returns the specified value clamped to the specified minimum and maximum bounds.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="clamp.html#typeparam-T" class="code_type">T</a> <a href="clamp.html">clamp</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="clamp.html#typeparam-T" class="code_type">T</a> <a href="clamp.html#decl-x" class="code_param">x</a>,
    <a href="clamp.html#typeparam-T" class="code_type">T</a> <a href="clamp.html#decl-minBound" class="code_param">minBound</a>,
    <a href="clamp.html#typeparam-T" class="code_type">T</a> <a href="clamp.html#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="clamp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 1:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html">clamp</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-minBound" class="code_param">minBound</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="clamp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 1:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>, <a href="clamp.html#decl-M" class="code_var">M</a>&gt; <a href="clamp.html">clamp</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="clamp.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>, <a href="clamp.html#decl-M" class="code_var">M</a>&gt; <a href="clamp.html#decl-x" class="code_param">x</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>, <a href="clamp.html#decl-M" class="code_var">M</a>&gt; <a href="clamp.html#decl-minBound" class="code_param">minBound</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>, <a href="clamp.html#decl-M" class="code_var">M</a>&gt; <a href="clamp.html#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="clamp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 1:
<a href="clamp.html#typeparam-T" class="code_type">T</a> <a href="clamp.html">clamp</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="clamp.html#typeparam-T" class="code_type">T</a> <a href="clamp.html#decl-x" class="code_param">x</a>,
    <a href="clamp.html#typeparam-T" class="code_type">T</a> <a href="clamp.html#decl-minBound" class="code_param">minBound</a>,
    <a href="clamp.html#typeparam-T" class="code_type">T</a> <a href="clamp.html#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="clamp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html">clamp</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-minBound" class="code_param">minBound</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="clamp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>, <a href="clamp.html#decl-M" class="code_var">M</a>&gt; <a href="clamp.html">clamp</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="clamp.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>, <a href="clamp.html#decl-M" class="code_var">M</a>&gt; <a href="clamp.html#decl-x" class="code_param">x</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>, <a href="clamp.html#decl-M" class="code_var">M</a>&gt; <a href="clamp.html#decl-minBound" class="code_param">minBound</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>, <a href="clamp.html#decl-M" class="code_var">M</a>&gt; <a href="clamp.html#decl-maxBound" class="code_param">maxBound</a>)
    <span class='code_keyword'>where</span> <a href="clamp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html">clamp</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-x" class="code_param">x</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-minVal" class="code_param">minVal</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-maxVal" class="code_param">maxVal</a>)
    <span class='code_keyword'>where</span> <a href="clamp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html">clamp</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-x" class="code_param">x</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-minVal" class="code_param">minVal</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="clamp.html#typeparam-T" class="code_type">T</a>, <a href="clamp.html#decl-N" class="code_var">N</a>&gt; <a href="clamp.html#decl-maxVal" class="code_param">maxVal</a>)
    <span class='code_keyword'>where</span> <a href="clamp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int
####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)

## Parameters

####  <a id="decl-x"></a>x  : [T](clamp#typeparam-T)
The value to clamp.

####  <a id="decl-minBound"></a>minBound  : [T](clamp#typeparam-T)
The minimum bound.

####  <a id="decl-maxBound"></a>maxBound  : [T](clamp#typeparam-T)
The maximum bound.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The value to clamp.

####  <a id="decl-minBound"></a>minBound  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The minimum bound.

####  <a id="decl-maxBound"></a>maxBound  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The maximum bound.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The value to clamp.

####  <a id="decl-minBound"></a>minBound  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The minimum bound.

####  <a id="decl-maxBound"></a>maxBound  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The maximum bound.

####  <a id="decl-x"></a>x  : [CoopVec](../types/coopvec-04/index)\<[T](../types/coopvec-04/index#typeparam-T), [N](../types/coopvec-04/index#decl-N)\>
The value to clamp.

####  <a id="decl-minVal"></a>minVal  : [CoopVec](../types/coopvec-04/index)\<[T](../types/coopvec-04/index#typeparam-T), [N](../types/coopvec-04/index#decl-N)\>
####  <a id="decl-maxVal"></a>maxVal  : [CoopVec](../types/coopvec-04/index)\<[T](../types/coopvec-04/index#typeparam-T), [N](../types/coopvec-04/index#decl-N)\>

## Return value
The clamped value.


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


