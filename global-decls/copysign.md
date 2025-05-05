---
layout: stdlib-reference
---

# copysign

## Description

Copy-sign. Returns a value whose magnitude is from one operand and whose sign is from another operand.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="copysign.html#typeparam-T" class="code_type">T</a>, <a href="copysign.html#decl-N" class="code_var">N</a>&gt; <a href="copysign.html">copysign</a>&lt;<a href="copysign.html#typeparam-T" class="code_type">T</a>, <a href="copysign.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="copysign.html#typeparam-T" class="code_type">T</a>, <a href="copysign.html#decl-N" class="code_var">N</a>&gt; <a href="copysign.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="copysign.html#typeparam-T" class="code_type">T</a>, <a href="copysign.html#decl-N" class="code_var">N</a>&gt; <a href="copysign.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="copysign.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="copysign.html#typeparam-T" class="code_type">T</a> <a href="copysign.html">copysign</a>&lt;<a href="copysign.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="copysign.html#typeparam-T" class="code_type">T</a> <a href="copysign.html#decl-x" class="code_param">x</a>,
    <a href="copysign.html#typeparam-T" class="code_type">T</a> <a href="copysign.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="copysign.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The value to use as the magnitude.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The value to use as the sign.

####  <a id="decl-x"></a>x  : [T](copysign#typeparam-T)
The value to use as the magnitude.

####  <a id="decl-y"></a>y  : [T](copysign#typeparam-T)
The value to use as the sign.


## Return value
A value whose magnitude is from x and whose sign is from y.


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



