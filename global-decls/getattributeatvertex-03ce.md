---
layout: stdlib-reference
---

# GetAttributeAtVertex

## Description

Get the value of a vertex attribute at a specific vertex.

The <span class='code'><a href="getattributeatvertex-03ce.html">GetAttributeAtVertex</a>()</span> function can be used in a fragment shader
to get the value of the given <span class='code'><a href="getattributeatvertex-03ce.html#decl-attribute" class="code_param">attribute</a></span> at the vertex of the primitive
that corresponds to the given <span class='code'><a href="getattributeatvertex-03ce.html#decl-vertexIndex" class="code_param">vertexIndex</a></span>.

Note that the <span class='code'><a href="getattributeatvertex-03ce.html#decl-attribute" class="code_param">attribute</a></span> must have been a declared varying input to
the fragment shader with the <span class='code'>nointerpolation</span> modifier.

This function can be applied to scalars, vectors, and matrices of
built-in scalar types.




## Signature 

<pre>
<a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a> <a href="getattributeatvertex-03ce.html">GetAttributeAtVertex</a>&lt;<a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a> <a href="getattributeatvertex-03ce.html#decl-attribute" class="code_param">attribute</a>,
    <span class="code_keyword">uint</span> <a href="getattributeatvertex-03ce.html#decl-vertexIndex" class="code_param">vertexIndex</a>)
    <span class='code_keyword'>where</span> <a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a>, <a href="getattributeatvertex-03ce.html#decl-N" class="code_var">N</a>&gt; <a href="getattributeatvertex-03ce.html">GetAttributeAtVertex</a>&lt;<a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a>, <a href="getattributeatvertex-03ce.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a>, <a href="getattributeatvertex-03ce.html#decl-N" class="code_var">N</a>&gt; <a href="getattributeatvertex-03ce.html#decl-attribute" class="code_param">attribute</a>,
    <span class="code_keyword">uint</span> <a href="getattributeatvertex-03ce.html#decl-vertexIndex" class="code_param">vertexIndex</a>)
    <span class='code_keyword'>where</span> <a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a>, <a href="getattributeatvertex-03ce.html#decl-N" class="code_var">N</a>, <a href="getattributeatvertex-03ce.html#decl-M" class="code_var">M</a>&gt; <a href="getattributeatvertex-03ce.html">GetAttributeAtVertex</a>&lt;<a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a>, <a href="getattributeatvertex-03ce.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="getattributeatvertex-03ce.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a>, <a href="getattributeatvertex-03ce.html#decl-N" class="code_var">N</a>, <a href="getattributeatvertex-03ce.html#decl-M" class="code_var">M</a>&gt; <a href="getattributeatvertex-03ce.html#decl-attribute" class="code_param">attribute</a>,
    <span class="code_keyword">uint</span> <a href="getattributeatvertex-03ce.html#decl-vertexIndex" class="code_param">vertexIndex</a>)
    <span class='code_keyword'>where</span> <a href="getattributeatvertex-03ce.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinType
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-attribute"></a>attribute  : [T](getattributeatvertex-03ce#typeparam-T)
####  <a id="decl-vertexIndex"></a>vertexIndex  : uint
####  <a id="decl-attribute"></a>attribute  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
####  <a id="decl-attribute"></a>attribute  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `fragment` stage only.

#### glsl
Available in `fragment` stage only.

#### spirv
Available in `fragment` stage only.

Requires capability: `spvFragmentBarycentricKHR`.


