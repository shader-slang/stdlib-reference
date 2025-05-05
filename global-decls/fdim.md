---
layout: stdlib-reference
---

# fdim

## Description

Computes <span class='code'><a href="max.html">max</a>(0, <a href="max.html#decl-x" class="code_param">x</a>-<a href="max.html#decl-y" class="code_param">y</a>)</span>.



## Signature 

<pre>
<a href="fdim.html#typeparam-T" class="code_type">T</a> <a href="fdim.html">fdim</a>&lt;<a href="fdim.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="fdim.html#typeparam-T" class="code_type">T</a> <a href="fdim.html#decl-x" class="code_param">x</a>,
    <a href="fdim.html#typeparam-T" class="code_type">T</a> <a href="fdim.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="fdim.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fdim.html#typeparam-T" class="code_type">T</a>, <a href="fdim.html#decl-N" class="code_var">N</a>&gt; <a href="fdim.html">fdim</a>&lt;<a href="fdim.html#typeparam-T" class="code_type">T</a>, <a href="fdim.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fdim.html#typeparam-T" class="code_type">T</a>, <a href="fdim.html#decl-N" class="code_var">N</a>&gt; <a href="fdim.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fdim.html#typeparam-T" class="code_type">T</a>, <a href="fdim.html#decl-N" class="code_var">N</a>&gt; <a href="fdim.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="fdim.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](fdim#typeparam-T)
The first value.

####  <a id="decl-y"></a>y  : [T](fdim#typeparam-T)
The second value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The first value.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The second value.


## Return value
The result of <span class='code'><a href="max.html">max</a>(0, <a href="max.html#decl-x" class="code_param">x</a>-<a href="max.html#decl-y" class="code_param">y</a>)</span>.


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



