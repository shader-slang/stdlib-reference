---
layout: stdlib-reference
---

# QuadReadLaneAt

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/QuadReadLaneAt">QuadReadLaneAt</a>&lt;<a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/QuadReadLaneAt#decl-sourceValue" class="code_param">sourceValue</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/QuadReadLaneAt#decl-quadLaneID" class="code_param">quadLaneID</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/QuadReadLaneAt">QuadReadLaneAt</a>&lt;<a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/QuadReadLaneAt#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/QuadReadLaneAt#decl-sourceValue" class="code_param">sourceValue</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/QuadReadLaneAt#decl-quadLaneID" class="code_param">quadLaneID</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/QuadReadLaneAt">QuadReadLaneAt</a>&lt;<a href="/stdlib-reference/global-decls/QuadReadLaneAt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/QuadReadLaneAt#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/QuadReadLaneAt#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/QuadReadLaneAt#decl-sourceValue" class="code_param">sourceValue</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/QuadReadLaneAt#decl-quadLaneID" class="code_param">quadLaneID</a>)
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
#### sourceValue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-sourceValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformQuad`.


