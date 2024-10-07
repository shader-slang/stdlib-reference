---
layout: stdlib-reference
---

# EvaluateAttributeAtCentroid

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid">EvaluateAttributeAtCentroid</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid">EvaluateAttributeAtCentroid</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid">EvaluateAttributeAtCentroid</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/EvaluateAttributeAtCentroid#typeparam-T) {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

Requires capabilities: `SPV_NV_compute_shader_derivatives`, `spvMeshShadingEXT`.


