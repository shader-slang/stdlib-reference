---
layout: stdlib-reference
---

# min3

## Description

Minimum of 3 inputs.



## Signature 

<pre>
<a href="min3.html#typeparam-T" class="code_type">T</a> <a href="min3.html">min3</a>&lt;<a href="min3.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="min3.html#typeparam-T" class="code_type">T</a> <a href="min3.html#decl-x" class="code_param">x</a>,
    <a href="min3.html#typeparam-T" class="code_type">T</a> <a href="min3.html#decl-y" class="code_param">y</a>,
    <a href="min3.html#typeparam-T" class="code_type">T</a> <a href="min3.html#decl-z" class="code_param">z</a>)
    <span class='code_keyword'>where</span> <a href="min3.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="min3.html#typeparam-T" class="code_type">T</a>, <a href="min3.html#decl-N" class="code_var">N</a>&gt; <a href="min3.html">min3</a>&lt;<a href="min3.html#typeparam-T" class="code_type">T</a>, <a href="min3.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="min3.html#typeparam-T" class="code_type">T</a>, <a href="min3.html#decl-N" class="code_var">N</a>&gt; <a href="min3.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="min3.html#typeparam-T" class="code_type">T</a>, <a href="min3.html#decl-N" class="code_var">N</a>&gt; <a href="min3.html#decl-y" class="code_param">y</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="min3.html#typeparam-T" class="code_type">T</a>, <a href="min3.html#decl-N" class="code_var">N</a>&gt; <a href="min3.html#decl-z" class="code_param">z</a>)
    <span class='code_keyword'>where</span> <a href="min3.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](min3#typeparam-T)
The first value to compare.

####  <a id="decl-y"></a>y  : [T](min3#typeparam-T)
The second value to compare.

####  <a id="decl-z"></a>z  : [T](min3#typeparam-T)
The third value to compare.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The first value to compare.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The second value to compare.

####  <a id="decl-z"></a>z  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The third value to compare.


## Return value
The smallest of the three values, element-wise if vector typed.


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



