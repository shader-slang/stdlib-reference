---
layout: stdlib-reference
---

# NonUniformResourceIndex

## Description

<span class='code'><a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai">NonUniformResourceIndex</a></span> function is used to indicate if the resource index is
divergent, and ensure scalarization happens correctly for each divergent lane.




## Signature 

<pre>
<a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai">NonUniformResourceIndex</a>&lt;<a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai#decl-index" class="code_param">index</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai">NonUniformResourceIndex</a>&lt;<a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/nonuniformresourceindex-03ai#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### T {#typeparam-T}

## Parameters

#### index  : [T](/stdlib-reference/global-decls/nonuniformresourceindex-03ai#typeparam-T) {#decl-index}
#### value  : [T](/stdlib-reference/global-decls/nonuniformresourceindex-03ai#typeparam-T) {#decl-value}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `SPV_KHR_non_semantic_info`, `SPV_GOOGLE_user_type`, `spvDerivativeControl`, `spvImageQuery`, `spvImageGatherExtended`, `spvSparseResidency`, `spvMinLod`, `spvFragmentFullyCoveredEXT`, `spvShaderNonUniformEXT`.


