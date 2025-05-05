---
layout: stdlib-reference
---

# ddx\_coarse

## Description

Take the coarse partial derivative of <span class='code'><a href="ddx_coarse.html#decl-p" class="code_param">p</a></span> with respect to x in screen space.



## Signature 

<pre>
<a href="ddx_coarse.html#typeparam-T" class="code_type">T</a> <a href="ddx_coarse.html">ddx_coarse</a>&lt;<a href="ddx_coarse.html#typeparam-T" class="code_type">T</a>&gt;(<a href="ddx_coarse.html#typeparam-T" class="code_type">T</a> <a href="ddx_coarse.html#decl-p" class="code_param">p</a>)
    <span class='code_keyword'>where</span> <a href="ddx_coarse.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ddx_coarse.html#typeparam-T" class="code_type">T</a>, <a href="ddx_coarse.html#decl-N" class="code_var">N</a>&gt; <a href="ddx_coarse.html">ddx_coarse</a>&lt;<a href="ddx_coarse.html#typeparam-T" class="code_type">T</a>, <a href="ddx_coarse.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ddx_coarse.html#typeparam-T" class="code_type">T</a>, <a href="ddx_coarse.html#decl-N" class="code_var">N</a>&gt; <a href="ddx_coarse.html#decl-p" class="code_param">p</a>)
    <span class='code_keyword'>where</span> <a href="ddx_coarse.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="ddx_coarse.html#typeparam-T" class="code_type">T</a>, <a href="ddx_coarse.html#decl-N" class="code_var">N</a>, <a href="ddx_coarse.html#decl-M" class="code_var">M</a>&gt; <a href="ddx_coarse.html">ddx_coarse</a>&lt;<a href="ddx_coarse.html#typeparam-T" class="code_type">T</a>, <a href="ddx_coarse.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="ddx_coarse.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="ddx_coarse.html#typeparam-T" class="code_type">T</a>, <a href="ddx_coarse.html#decl-N" class="code_var">N</a>, <a href="ddx_coarse.html#decl-M" class="code_var">M</a>&gt; <a href="ddx_coarse.html#decl-p" class="code_param">p</a>)
    <span class='code_keyword'>where</span> <a href="ddx_coarse.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-p"></a>p  : [T](ddx_coarse#typeparam-T)
The value to take partial derivative for.

####  <a id="decl-p"></a>p  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The value to take partial derivative for.

####  <a id="decl-p"></a>p  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The value to take partial derivative for.


## Return value
The partial derivative of <span class='code'><a href="ddx_coarse.html#decl-p" class="code_param">p</a></span>.

## Remarks
For SPIR-V, this function maps to <span class='code'>OpDPdxCoarse</span>.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `closesthit`, `raygen`, `intersection`, `anyhit`.

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `closesthit`, `raygen`, `intersection`, `anyhit`.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `closesthit`, `raygen`, `intersection`, `anyhit`.

Requires capabilities: `SPV_KHR_compute_shader_derivatives`, `spvMeshShadingEXT`.


