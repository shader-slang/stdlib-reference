---
layout: stdlib-reference
---

# WaveMatch

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/global-decls/WaveMatch">WaveMatch</a>&lt;<span class="code_type">T</span>&gt;(<span class="code_type">T</span> <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/global-decls/WaveMatch">WaveMatch</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/global-decls/WaveMatch">WaveMatch</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinType;

</pre>

## Parameters

#### T
#### N  : int
#### M  : int
#### value  : T
#### value  : [vector](/stdlib-reference/types/vector/index)\<T, N\>
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\>

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

Requires capabilities: `spvGroupNonUniformBallot`, `spvGroupNonUniformPartitionedNV`.


