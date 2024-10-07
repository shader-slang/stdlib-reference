---
layout: stdlib-reference
---

# QuadReadLaneAt

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/QuadReadLaneAt">QuadReadLaneAt</a>&lt;<a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a>&gt;(
sourceValue    <a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a> ,
quadLaneID    uint )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/QuadReadLaneAt">QuadReadLaneAt</a>&lt;<a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a>, N:int&gt;(
sourceValue    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
quadLaneID    uint )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/QuadReadLaneAt">QuadReadLaneAt</a>&lt;<a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
sourceValue    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
quadLaneID    uint )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### sourceValue  : [T](/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T) {#decl-sourceValue}
#### quadLaneID  : uint {#decl-quadLaneID}
#### sourceValue  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-sourceValue}
#### sourceValue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-sourceValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformQuad`.


