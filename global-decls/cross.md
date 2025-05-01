---
layout: stdlib-reference
---

# cross

## Description

Cross product. Returns the cross product of two 3D vectors.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="cross.html#typeparam-T" class="code_type">T</a>, 3&gt; <a href="cross.html">cross</a>&lt;<a href="cross.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="cross.html#typeparam-T" class="code_type">T</a>, 3&gt; <a href="cross.html#decl-left" class="code_param">left</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="cross.html#typeparam-T" class="code_type">T</a>, 3&gt; <a href="cross.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="cross.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="cross.html#typeparam-T" class="code_type">T</a>, 3&gt; <a href="cross.html">cross</a>&lt;<a href="cross.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="cross.html#typeparam-T" class="code_type">T</a>, 3&gt; <a href="cross.html#decl-left" class="code_param">left</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="cross.html#typeparam-T" class="code_type">T</a>, 3&gt; <a href="cross.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="cross.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index)

## Parameters

####  <a id="decl-left"></a>left  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), 3\>
The first vector.

####  <a id="decl-right"></a>right  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), 3\>
The second vector.


## Return value
The cross product of <span class='code'><a href="cross.html#decl-left" class="code_param">left</a></span> and <span class='code'><a href="cross.html#decl-right" class="code_param">right</a></span>.


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



