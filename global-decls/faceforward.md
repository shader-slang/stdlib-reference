---
layout: stdlib-reference
---

# faceforward

## Description

Flip vector to face forward, if needed.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="faceforward.html#typeparam-T" class="code_type">T</a>, <a href="faceforward.html#decl-N" class="code_var">N</a>&gt; <a href="faceforward.html">faceforward</a>&lt;<a href="faceforward.html#typeparam-T" class="code_type">T</a>, <a href="faceforward.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="faceforward.html#typeparam-T" class="code_type">T</a>, <a href="faceforward.html#decl-N" class="code_var">N</a>&gt; <a href="faceforward.html#decl-n" class="code_param">n</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="faceforward.html#typeparam-T" class="code_type">T</a>, <a href="faceforward.html#decl-N" class="code_var">N</a>&gt; <a href="faceforward.html#decl-i" class="code_param">i</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="faceforward.html#typeparam-T" class="code_type">T</a>, <a href="faceforward.html#decl-N" class="code_var">N</a>&gt; <a href="faceforward.html#decl-ng" class="code_param">ng</a>)
    <span class='code_keyword'>where</span> <a href="faceforward.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-n"></a>n  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The vector to orient.

####  <a id="decl-i"></a>i  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The incident vector.

####  <a id="decl-ng"></a>ng  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The geometric normal vector.


## Return value
<span class='code'><a href="faceforward.html#decl-n" class="code_param">n</a></span> if the dot product of <span class='code'><a href="faceforward.html#decl-ng" class="code_param">ng</a></span> and <span class='code'><a href="faceforward.html#decl-i" class="code_param">i</a></span> is less than 0, otherwise <span class='code'>-<a href="faceforward.html#decl-n" class="code_param">n</a></span>.


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



