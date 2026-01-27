---
layout: stdlib-reference
---

# HitObject\.FromRayQuery

## Description

Creates a HitObject from a committed hit in a RayQuery.
The RayQuery must have a committed hit (COMMITTED_TRIANGLE_HIT or COMMITTED_PROCEDURAL_PRIMITIVE_HIT).
DXR 1.3 only.




## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="fromrayquery-047.html">FromRayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="fromrayquery-047.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt;(
    <a href="../rayquery-03/index.html" class="code_type">RayQuery</a>&lt;<a href="fromrayquery-047.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt; <a href="fromrayquery-047.html#decl-Query" class="code_param">Query</a>);

<span class='code_keyword'>static</span> <a href="index.html" class="code_type">HitObject</a> <a href="index.html" class="code_type">HitObject</a>.<a href="fromrayquery-047.html">FromRayQuery</a>&lt;<span class="code_keyword">uint</span> <a href="fromrayquery-047.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>, <a href="fromrayquery-047.html#typeparam-attr_t" class="code_type">attr_t</a>&gt;(
    <a href="../rayquery-03/index.html" class="code_type">RayQuery</a>&lt;<a href="fromrayquery-047.html#decl-rayFlagsGeneric" class="code_var">rayFlagsGeneric</a>&gt; <a href="fromrayquery-047.html#decl-Query" class="code_param">Query</a>,
    <span class="code_keyword">uint</span> <a href="fromrayquery-047.html#decl-CommittedCustomHitKind" class="code_param">CommittedCustomHitKind</a>,
    <a href="fromrayquery-047.html#typeparam-attr_t" class="code_type">attr_t</a> <a href="fromrayquery-047.html#decl-CommittedCustomAttribs" class="code_param">CommittedCustomAttribs</a>);

</pre>

## Generic Parameters

####  <a id="decl-rayFlagsGeneric"></a>rayFlagsGeneric  : uint
####  <a id="typeparam-attr_t"></a>attr\_t

## Parameters

####  <a id="decl-Query"></a>Query  : [RayQuery](../rayquery-03/index.html)\<[rayFlagsGeneric](../rayquery-03/index.html#decl-rayFlagsGeneric)\>
####  <a id="decl-CommittedCustomHitKind"></a>CommittedCustomHitKind  : uint
####  <a id="decl-CommittedCustomAttribs"></a>CommittedCustomAttribs  : [attr\_t](fromrayquery-047.html#typeparam-attr_t)

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `raygen` stage only.

Requires capability: `ser_hlsl_native`.


