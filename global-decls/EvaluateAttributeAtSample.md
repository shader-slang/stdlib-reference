---
layout: stdlib-reference
---

# EvaluateAttributeAtSample

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample">EvaluateAttributeAtSample</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample#typeparam-T" class="code_type">T</a>&gt;(
x    <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample#typeparam-T" class="code_type">T</a> ,
sampleindex    uint )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample">EvaluateAttributeAtSample</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample#typeparam-T" class="code_type">T</a>, N:int&gt;(
x    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
sampleindex    uint )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample">EvaluateAttributeAtSample</a>&lt;<a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
x    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
sampleindex    uint )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/EvaluateAttributeAtSample#typeparam-T) {#decl-x}
#### sampleindex  : uint {#decl-sampleindex}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

Requires capabilities: `SPV_NV_compute_shader_derivatives`, `spvMeshShadingEXT`.


