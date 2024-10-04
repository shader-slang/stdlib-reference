---
layout: stdlib-reference
---

# WaveReadLaneAt

## Description





## Signature 

<pre>
T <a href="/stdlib-reference/global-decls/WaveReadLaneAt">WaveReadLaneAt</a>&lt;T&gt;(
    T <span class='code_param'>value</span>,
    <span class="code_keyword">int</span> <span class='code_param'>lane</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneAt">WaveReadLaneAt</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>value</span>,
    <span class="code_keyword">int</span> <span class='code_param'>lane</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneAt">WaveReadLaneAt</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>value</span>,
    <span class="code_keyword">int</span> <span class='code_param'>lane</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

</pre>

## Parameters

#### T
#### N : int
#### M : int
#### value : T
#### lane : int
#### value : vector\<T,N\>
#### value : matrix\<T,N,M\>

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


