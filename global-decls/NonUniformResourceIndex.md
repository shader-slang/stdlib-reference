---
layout: stdlib-reference
---

# NonUniformResourceIndex

## Description

<span class='code'><a href="/stdlib-reference/global-decls/NonUniformResourceIndex">NonUniformResourceIndex</a></span> function is used to indicate if the resource index is
divergent, and ensure scalarization happens correctly for each divergent lane.




## Signature 

<pre>
<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/NonUniformResourceIndex">NonUniformResourceIndex</a>&lt;<span class="code_type">T</span>&gt;(<span class="code_type">T</span> <span class='code_param'>index</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/NonUniformResourceIndex">NonUniformResourceIndex</a>&lt;<span class="code_type">T</span>&gt;(<span class="code_type">T</span> <span class='code_param'>value</span>);

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index)

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/BuiltinArithmeticType/index)
#### T

## Parameters

#### index  : T
#### value  : T

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


