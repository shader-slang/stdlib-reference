---
layout: stdlib-reference
---

# WaveRotate

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/waverotate-04#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/waverotate-04">WaveRotate</a>&lt;<a href="/stdlib-reference/global-decls/waverotate-04#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/waverotate-04#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/waverotate-04#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/waverotate-04#decl-delta" class="code_param">delta</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/waverotate-04#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/waverotate-04#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/waverotate-04#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/waverotate-04">WaveRotate</a>&lt;<a href="/stdlib-reference/global-decls/waverotate-04#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/waverotate-04#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/waverotate-04#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/waverotate-04#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/waverotate-04#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/waverotate-04#decl-delta" class="code_param">delta</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/waverotate-04#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### value  : [T](/stdlib-reference/global-decls/waverotate-04#typeparam-T) {#decl-value}
#### delta  : uint {#decl-delta}
#### value  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformRotateKHR`.


