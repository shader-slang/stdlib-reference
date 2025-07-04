---
layout: stdlib-reference
---

# tanpi

## Description

Compute the tangent of <span class='code'><a href="tanpi.html#decl-x" class="code_param">x</a>*pi</span>.



## Signature 

<pre>
<a href="tanpi.html#typeparam-T" class="code_type">T</a> <a href="tanpi.html">tanpi</a>&lt;<a href="tanpi.html#typeparam-T" class="code_type">T</a>&gt;(<a href="tanpi.html#typeparam-T" class="code_type">T</a> <a href="tanpi.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="tanpi.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="tanpi.html#typeparam-T" class="code_type">T</a>, <a href="tanpi.html#decl-N" class="code_var">N</a>&gt; <a href="tanpi.html">tanpi</a>&lt;<a href="tanpi.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="tanpi.html#decl-N" class="code_var">N</a>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="tanpi.html#typeparam-T" class="code_type">T</a>, <a href="tanpi.html#decl-N" class="code_var">N</a>&gt; <a href="tanpi.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="tanpi.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](tanpi.html#typeparam-T)
The value to compute the tangent of.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The value to compute the tangent of.


## Return value
The tangent of <span class='code'><a href="tanpi.html#decl-x" class="code_param">x</a>*pi</span>.


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



