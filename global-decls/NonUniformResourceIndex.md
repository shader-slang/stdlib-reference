---
layout: stdlib-reference
---

# NonUniformResourceIndex

## Description

<span class='code'><a href="/stdlib-reference/global-decls/NonUniformResourceIndex">NonUniformResourceIndex</a></span> function is used to indicate if the resource index is
divergent, and ensure scalarization happens correctly for each divergent lane.




## Signature 

<pre>
<a href="/stdlib-reference/global-decls/NonUniformResourceIndex#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/NonUniformResourceIndex">NonUniformResourceIndex</a>&lt;<a href="/stdlib-reference/global-decls/NonUniformResourceIndex#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/NonUniformResourceIndex#typeparam-T" class="code_type">T</a> <span class='code_param'>index</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/NonUniformResourceIndex#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/global-decls/NonUniformResourceIndex#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/NonUniformResourceIndex">NonUniformResourceIndex</a>&lt;<a href="/stdlib-reference/global-decls/NonUniformResourceIndex#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/NonUniformResourceIndex#typeparam-T" class="code_type">T</a> <span class='code_param'>value</span>);

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index) {#typeparam-T}
#### T {#typeparam-T}

## Parameters

#### index  : [T](/stdlib-reference/global-decls/NonUniformResourceIndex#typeparam-T) {#decl-index}
#### value  : [T](/stdlib-reference/global-decls/NonUniformResourceIndex#typeparam-T) {#decl-value}

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


