---
layout: stdlib-reference
---

# WaveReadLaneFirst

## Description





## Signature 

<pre>
T <a href="/stdlib-reference/global-decls/WaveReadLaneFirst">WaveReadLaneFirst</a>&lt;T&gt;(T <span class='code_param'>expr</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneFirst">WaveReadLaneFirst</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>expr</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneFirst">WaveReadLaneFirst</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>expr</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

</pre>

## Parameters

#### T
#### N : int
#### M : int
#### expr : T
#### expr : vector\<T,N\>
#### expr : matrix\<T,N,M\>

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

Requires capability: `spvGroupNonUniformBallot`.


