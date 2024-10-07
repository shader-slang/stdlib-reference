---
layout: stdlib-reference
---

# EvaluateAttributeAtSample

## Description





## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample">EvaluateAttributeAtSample</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>x</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>sampleindex</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample">EvaluateAttributeAtSample</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>x</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>sampleindex</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/EvaluateAttributeAtSample">EvaluateAttributeAtSample</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>x</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>sampleindex</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : T {#decl-x}
#### sampleindex  : uint {#decl-sampleindex}
#### x  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

#### spirv
Available in stages: `amplification`, `fragment`, `compute`, `mesh`, `miss`, `callable`, `raygen`, `intersection`, `anyhit`, `closesthit`.

Requires capabilities: `SPV_NV_compute_shader_derivatives`, `spvMeshShadingEXT`.


