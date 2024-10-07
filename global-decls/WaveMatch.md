---
layout: stdlib-reference
---

# WaveMatch

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/global-decls/WaveMatch">WaveMatch</a>&lt;<a href="/stdlib-reference/global-decls/WaveMatch#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/WaveMatch#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/WaveMatch#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveMatch#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/global-decls/WaveMatch">WaveMatch</a>&lt;<a href="/stdlib-reference/global-decls/WaveMatch#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/WaveMatch#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/WaveMatch#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveMatch#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/global-decls/WaveMatch">WaveMatch</a>&lt;<a href="/stdlib-reference/global-decls/WaveMatch#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/WaveMatch#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/WaveMatch#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/WaveMatch#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveMatch#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### value  : [T](/stdlib-reference/global-decls/WaveMatch#typeparam-T) {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-value}

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


