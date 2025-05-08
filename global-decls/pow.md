---
layout: stdlib-reference
---

# pow

## Description

Raise to a power.



## Signature 

<pre>
<a href="pow.html#typeparam-T" class="code_type">T</a> <a href="pow.html">pow</a>&lt;<a href="pow.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="pow.html#typeparam-T" class="code_type">T</a> <a href="pow.html#decl-x" class="code_param">x</a>,
    <a href="pow.html#typeparam-T" class="code_type">T</a> <a href="pow.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="pow.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="pow.html#typeparam-T" class="code_type">T</a>, <a href="pow.html#decl-N" class="code_var">N</a>&gt; <a href="pow.html">pow</a>&lt;<a href="pow.html#typeparam-T" class="code_type">T</a>, <a href="pow.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="pow.html#typeparam-T" class="code_type">T</a>, <a href="pow.html#decl-N" class="code_var">N</a>&gt; <a href="pow.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="pow.html#typeparam-T" class="code_type">T</a>, <a href="pow.html#decl-N" class="code_var">N</a>&gt; <a href="pow.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="pow.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="pow.html#typeparam-T" class="code_type">T</a>, <a href="pow.html#decl-N" class="code_var">N</a>, <a href="pow.html#decl-M" class="code_var">M</a>&gt; <a href="pow.html">pow</a>&lt;<a href="pow.html#typeparam-T" class="code_type">T</a>, <a href="pow.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="pow.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="pow.html#typeparam-T" class="code_type">T</a>, <a href="pow.html#decl-N" class="code_var">N</a>, <a href="pow.html#decl-M" class="code_var">M</a>&gt; <a href="pow.html#decl-x" class="code_param">x</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="pow.html#typeparam-T" class="code_type">T</a>, <a href="pow.html#decl-N" class="code_var">N</a>, <a href="pow.html#decl-M" class="code_var">M</a>&gt; <a href="pow.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="pow.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](pow.html#typeparam-T)
The base value.

####  <a id="decl-y"></a>y  : [T](pow.html#typeparam-T)
The exponent value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The base value.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The exponent value.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The base value.

####  <a id="decl-y"></a>y  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The exponent value.


## Return value
The value of <span class='code'><a href="pow.html#decl-x" class="code_param">x</a></span> raised to the power of <span class='code'><a href="pow.html#decl-y" class="code_param">y</a></span>.


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



