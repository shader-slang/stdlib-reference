---
layout: stdlib-reference
---

# NonUniformResourceIndex

## Description

`NonUniformResourceIndex` function is used to indicate if the resource index is
divergent, and ensure scalarization happens correctly for each divergent lane.

## Signature 

<pre>
T <a href="/stdlib-reference/global-decls/NonUniformResourceIndex">NonUniformResourceIndex</a>&lt;T&gt;(T <span class='code_param'>index</span>)
    <span class='code_keyword'>where</span> T : <a href="/stdlib-reference/interfaces/BuiltinArithmeticType/index" class="code_type">__BuiltinArithmeticType</a>;

T <a href="/stdlib-reference/global-decls/NonUniformResourceIndex">NonUniformResourceIndex</a>&lt;T&gt;(T <span class='code_param'>value</span>);

</pre>

## Parameters

* `T`
* `index`
* `value`

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


