---
layout: stdlib-reference
---

# WaveReadLaneAt

## Description





## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/WaveReadLaneAt">WaveReadLaneAt</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>value</span>,
    <span class="code_keyword">int</span> <span class='code_param'>lane</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneAt">WaveReadLaneAt</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>value</span>,
    <span class="code_keyword">int</span> <span class='code_param'>lane</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneAt">WaveReadLaneAt</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>value</span>,
    <span class="code_keyword">int</span> <span class='code_param'>lane</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### value  : T {#decl-value}
#### lane  : int {#decl-lane}
#### value  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-value}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformShuffle`.


