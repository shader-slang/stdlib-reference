---
layout: stdlib-reference
---

# fmax3

## Description

Floating-point maximum of 3 inputs.



## Signature 

<pre>
<a href="fmax3.html#typeparam-T" class="code_type">T</a> <a href="fmax3.html">fmax3</a>&lt;<a href="fmax3.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="fmax3.html#typeparam-T" class="code_type">T</a> <a href="fmax3.html#decl-x" class="code_param">x</a>,
    <a href="fmax3.html#typeparam-T" class="code_type">T</a> <a href="fmax3.html#decl-y" class="code_param">y</a>,
    <a href="fmax3.html#typeparam-T" class="code_type">T</a> <a href="fmax3.html#decl-z" class="code_param">z</a>)
    <span class='code_keyword'>where</span> <a href="fmax3.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmax3.html#typeparam-T" class="code_type">T</a>, <a href="fmax3.html#decl-N" class="code_var">N</a>&gt; <a href="fmax3.html">fmax3</a>&lt;<a href="fmax3.html#typeparam-T" class="code_type">T</a>, <a href="fmax3.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmax3.html#typeparam-T" class="code_type">T</a>, <a href="fmax3.html#decl-N" class="code_var">N</a>&gt; <a href="fmax3.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmax3.html#typeparam-T" class="code_type">T</a>, <a href="fmax3.html#decl-N" class="code_var">N</a>&gt; <a href="fmax3.html#decl-y" class="code_param">y</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmax3.html#typeparam-T" class="code_type">T</a>, <a href="fmax3.html#decl-N" class="code_var">N</a>&gt; <a href="fmax3.html#decl-z" class="code_param">z</a>)
    <span class='code_keyword'>where</span> <a href="fmax3.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](fmax3.html#typeparam-T)
The first value to compare.

####  <a id="decl-y"></a>y  : [T](fmax3.html#typeparam-T)
The second value to compare.

####  <a id="decl-z"></a>z  : [T](fmax3.html#typeparam-T)
The third value to compare.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The first value to compare.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The second value to compare.

####  <a id="decl-z"></a>z  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The third value to compare.


## Return value
The largest of the three values, element-wise if vector typed.

## Remarks
If any operand in the 3-way comparison is NaN, it is undefined which operand is returned.


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



