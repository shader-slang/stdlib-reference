---
layout: stdlib-reference
---

# atan2

## Description

Arc tangent of y/x. Returns the angle whose tangent is the quotient of two specified numbers.



## Signature 

<pre>
<a href="atan2.html#typeparam-T" class="code_type">T</a> <a href="atan2.html">atan2</a>&lt;<a href="atan2.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="atan2.html#typeparam-T" class="code_type">T</a> <a href="atan2.html#decl-y" class="code_param">y</a>,
    <a href="atan2.html#typeparam-T" class="code_type">T</a> <a href="atan2.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="atan2.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="atan2.html#typeparam-T" class="code_type">T</a>, <a href="atan2.html#decl-N" class="code_var">N</a>&gt; <a href="atan2.html">atan2</a>&lt;<a href="atan2.html#typeparam-T" class="code_type">T</a>, <a href="atan2.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="atan2.html#typeparam-T" class="code_type">T</a>, <a href="atan2.html#decl-N" class="code_var">N</a>&gt; <a href="atan2.html#decl-y" class="code_param">y</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="atan2.html#typeparam-T" class="code_type">T</a>, <a href="atan2.html#decl-N" class="code_var">N</a>&gt; <a href="atan2.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="atan2.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="atan2.html#typeparam-T" class="code_type">T</a>, <a href="atan2.html#decl-N" class="code_var">N</a>, <a href="atan2.html#decl-M" class="code_var">M</a>&gt; <a href="atan2.html">atan2</a>&lt;<a href="atan2.html#typeparam-T" class="code_type">T</a>, <a href="atan2.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="atan2.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="atan2.html#typeparam-T" class="code_type">T</a>, <a href="atan2.html#decl-N" class="code_var">N</a>, <a href="atan2.html#decl-M" class="code_var">M</a>&gt; <a href="atan2.html#decl-y" class="code_param">y</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="atan2.html#typeparam-T" class="code_type">T</a>, <a href="atan2.html#decl-N" class="code_var">N</a>, <a href="atan2.html#decl-M" class="code_var">M</a>&gt; <a href="atan2.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="atan2.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-y"></a>y  : [T](atan2.html#typeparam-T)
The numerator.

####  <a id="decl-x"></a>x  : [T](atan2.html#typeparam-T)
The denominator.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The numerator.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The denominator.

####  <a id="decl-y"></a>y  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The numerator.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The denominator.


## Return value
The angle in radians, in the range of [-pi, pi].


## Availability and Requirements

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



