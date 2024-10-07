---
layout: stdlib-reference
---

# WaveActiveAllEqual

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
bool <a href="/stdlib-reference/global-decls/WaveActiveAllEqual">WaveActiveAllEqual</a>&lt;<a href="/stdlib-reference/global-decls/WaveActiveAllEqual#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/WaveActiveAllEqual#typeparam-T" class="code_type">T</a> value)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveActiveAllEqual#typeparam-T" class="code_type">T</a> : __BuiltinType;

/// Requires Capability Set 1:
bool <a href="/stdlib-reference/global-decls/WaveActiveAllEqual">WaveActiveAllEqual</a>&lt;<a href="/stdlib-reference/global-decls/WaveActiveAllEqual#typeparam-T" class="code_type">T</a>, N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; value)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveActiveAllEqual#typeparam-T" class="code_type">T</a> : __BuiltinType;

/// Requires Capability Set 2:
bool <a href="/stdlib-reference/global-decls/WaveActiveAllEqual">WaveActiveAllEqual</a>&lt;<a href="/stdlib-reference/global-decls/WaveActiveAllEqual#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; value)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/WaveActiveAllEqual#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### value  : [T](/stdlib-reference/global-decls/WaveActiveAllEqual#typeparam-T) {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-value}

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformVote`.

### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### cuda
Available in all stages.



