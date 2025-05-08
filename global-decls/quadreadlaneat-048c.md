---
layout: stdlib-reference
---

# QuadReadLaneAt

## Description





## Signature 

<pre>
<a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a> <a href="quadreadlaneat-048c.html">QuadReadLaneAt</a>&lt;<a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a> <a href="quadreadlaneat-048c.html#decl-sourceValue" class="code_param">sourceValue</a>,
    <span class="code_keyword">uint</span> <a href="quadreadlaneat-048c.html#decl-quadLaneID" class="code_param">quadLaneID</a>)
    <span class='code_keyword'>where</span> <a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a>, <a href="quadreadlaneat-048c.html#decl-N" class="code_var">N</a>&gt; <a href="quadreadlaneat-048c.html">QuadReadLaneAt</a>&lt;<a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a>, <a href="quadreadlaneat-048c.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a>, <a href="quadreadlaneat-048c.html#decl-N" class="code_var">N</a>&gt; <a href="quadreadlaneat-048c.html#decl-sourceValue" class="code_param">sourceValue</a>,
    <span class="code_keyword">uint</span> <a href="quadreadlaneat-048c.html#decl-quadLaneID" class="code_param">quadLaneID</a>)
    <span class='code_keyword'>where</span> <a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a>, <a href="quadreadlaneat-048c.html#decl-N" class="code_var">N</a>, <a href="quadreadlaneat-048c.html#decl-M" class="code_var">M</a>&gt; <a href="quadreadlaneat-048c.html">QuadReadLaneAt</a>&lt;<a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a>, <a href="quadreadlaneat-048c.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="quadreadlaneat-048c.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a>, <a href="quadreadlaneat-048c.html#decl-N" class="code_var">N</a>, <a href="quadreadlaneat-048c.html#decl-M" class="code_var">M</a>&gt; <a href="quadreadlaneat-048c.html#decl-sourceValue" class="code_param">sourceValue</a>,
    <span class="code_keyword">uint</span> <a href="quadreadlaneat-048c.html#decl-quadLaneID" class="code_param">quadLaneID</a>)
    <span class='code_keyword'>where</span> <a href="quadreadlaneat-048c.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinType
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-sourceValue"></a>sourceValue  : [T](quadreadlaneat-048c.html#typeparam-T)
####  <a id="decl-quadLaneID"></a>quadLaneID  : uint
####  <a id="decl-sourceValue"></a>sourceValue  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-sourceValue"></a>sourceValue  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformQuad`.


