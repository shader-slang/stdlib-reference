---
layout: stdlib-reference
---

# EvaluateAttributeSnapped

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped">EvaluateAttributeSnapped</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;int, 2&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped">EvaluateAttributeSnapped</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped#typeparam-T" class="code_type">T</a>, N:int&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;int, 2&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped">EvaluateAttributeSnapped</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>x</span>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;int, 2&gt; <span class='code_param'>offset</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeSnapped#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/EvaluateAttributeSnapped#typeparam-T) {#decl-x}
#### offset  : [vector](/stdlib-reference/types/vector/index)\<int, 2\> {#decl-offset}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

Requires capabilities: `SPV_NV_compute_shader_derivatives`, `spvMeshShadingEXT`.


