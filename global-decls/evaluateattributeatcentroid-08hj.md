---
layout: stdlib-reference
---

# EvaluateAttributeAtCentroid

## Description

Interpolates vertex attribute at centroid position.



## Signature 

<pre>
<a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a> <a href="evaluateattributeatcentroid-08hj.html">EvaluateAttributeAtCentroid</a>&lt;<a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a>&gt;(<a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a> <a href="evaluateattributeatcentroid-08hj.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a>, <a href="evaluateattributeatcentroid-08hj.html#decl-N" class="code_var">N</a>&gt; <a href="evaluateattributeatcentroid-08hj.html">EvaluateAttributeAtCentroid</a>&lt;<a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a>, <a href="evaluateattributeatcentroid-08hj.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a>, <a href="evaluateattributeatcentroid-08hj.html#decl-N" class="code_var">N</a>&gt; <a href="evaluateattributeatcentroid-08hj.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a>, <a href="evaluateattributeatcentroid-08hj.html#decl-N" class="code_var">N</a>, <a href="evaluateattributeatcentroid-08hj.html#decl-M" class="code_var">M</a>&gt; <a href="evaluateattributeatcentroid-08hj.html">EvaluateAttributeAtCentroid</a>&lt;<a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a>, <a href="evaluateattributeatcentroid-08hj.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="evaluateattributeatcentroid-08hj.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a>, <a href="evaluateattributeatcentroid-08hj.html#decl-N" class="code_var">N</a>, <a href="evaluateattributeatcentroid-08hj.html#decl-M" class="code_var">M</a>&gt; <a href="evaluateattributeatcentroid-08hj.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="evaluateattributeatcentroid-08hj.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](evaluateattributeatcentroid-08hj#typeparam-T)
The vertex attribute to interpolate.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The vertex attribute to interpolate.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The vertex attribute to interpolate.


## Return value
The interpolated attribute value.

## Remarks
<span class='code'><a href="evaluateattributeatcentroid-08hj.html#decl-x" class="code_param">x</a></span> must be a direct reference to a fragment shader varying input.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `closesthit`, `raygen`, `intersection`, `anyhit`.

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `closesthit`, `raygen`, `intersection`, `anyhit`.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `closesthit`, `raygen`, `intersection`, `anyhit`.

Requires capabilities: `SPV_KHR_compute_shader_derivatives`, `spvMeshShadingEXT`.


