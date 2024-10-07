---
layout: stdlib-reference
---

# WaveReadLaneAt

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/WaveReadLaneAt">WaveReadLaneAt</a>&lt;<a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-value" class="code_param">value</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-lane" class="code_param">lane</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneAt">WaveReadLaneAt</a>&lt;<a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-value" class="code_param">value</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-lane" class="code_param">lane</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneAt">WaveReadLaneAt</a>&lt;<a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-value" class="code_param">value</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/WaveReadLaneAt#decl-lane" class="code_param">lane</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### value  : [T](/stdlib-reference/global-decls/WaveReadLaneAt#typeparam-T) {#decl-value}
#### lane  : int {#decl-lane}
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

Requires capability: `spvGroupNonUniformShuffle`.


