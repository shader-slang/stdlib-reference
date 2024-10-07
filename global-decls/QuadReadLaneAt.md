---
layout: stdlib-reference
---

# QuadReadLaneAt

## Description





## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/QuadReadLaneAt">QuadReadLaneAt</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>sourceValue</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>quadLaneID</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/QuadReadLaneAt">QuadReadLaneAt</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>sourceValue</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>quadLaneID</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/QuadReadLaneAt">QuadReadLaneAt</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>sourceValue</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>quadLaneID</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType

## Generic Parameters

#### T: \_\_BuiltinType
#### N  : int
#### M  : int

## Parameters

#### sourceValue  : T
#### quadLaneID  : uint
#### sourceValue  : [vector](/stdlib-reference/types/vector/index)\<T, N\>
#### sourceValue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformQuad`.


