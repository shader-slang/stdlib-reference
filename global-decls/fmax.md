---
layout: stdlib-reference
---

# fmax

## Description

Floating-point maximum.



## Signature 

<pre>
<a href="fmax.html#typeparam-T" class="code_type">T</a> <a href="fmax.html">fmax</a>&lt;<a href="fmax.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="fmax.html#typeparam-T" class="code_type">T</a> <a href="fmax.html#decl-x" class="code_param">x</a>,
    <a href="fmax.html#typeparam-T" class="code_type">T</a> <a href="fmax.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="fmax.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmax.html#typeparam-T" class="code_type">T</a>, <a href="fmax.html#decl-N" class="code_var">N</a>&gt; <a href="fmax.html">fmax</a>&lt;<a href="fmax.html#typeparam-T" class="code_type">T</a>, <a href="fmax.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmax.html#typeparam-T" class="code_type">T</a>, <a href="fmax.html#decl-N" class="code_var">N</a>&gt; <a href="fmax.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmax.html#typeparam-T" class="code_type">T</a>, <a href="fmax.html#decl-N" class="code_var">N</a>&gt; <a href="fmax.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="fmax.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](fmax.html#typeparam-T)
The first value to compare.

####  <a id="decl-y"></a>y  : [T](fmax.html#typeparam-T)
The second value to compare.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The first value to compare.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The second value to compare.


## Return value
The larger of the two values, element-wise if vector typed.

## Remarks
Result is <span class='code'><a href="fmax.html#decl-y" class="code_param">y</a></span> if <span class='code'><a href="fmax.html#decl-x" class="code_param">x</a></span> < <span class='code'><a href="fmax.html#decl-y" class="code_param">y</a></span>, either <span class='code'><a href="fmax.html#decl-x" class="code_param">x</a></span> or <span class='code'><a href="fmax.html#decl-y" class="code_param">y</a></span> if both <span class='code'><a href="fmax.html#decl-x" class="code_param">x</a></span> and <span class='code'><a href="fmax.html#decl-y" class="code_param">y</a></span> are zeros, otherwise <span class='code'><a href="fmax.html#decl-x" class="code_param">x</a></span>. Which operand is the result is undefined if one of the operands is a NaN.


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

#### spirv
Available in all stages.



