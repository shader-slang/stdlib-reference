---
layout: stdlib-reference
---

# NonUniformResourceIndex

## Description

<span class='code'><a href="nonuniformresourceindex-03ai.html">NonUniformResourceIndex</a></span> function is used to indicate if the resource index is
divergent, and ensure scalarization happens correctly for each divergent lane.




## Signature 

<pre>
<a href="nonuniformresourceindex-03ai.html#typeparam-T" class="code_type">T</a> <a href="nonuniformresourceindex-03ai.html">NonUniformResourceIndex</a>&lt;<a href="nonuniformresourceindex-03ai.html#typeparam-T" class="code_type">T</a>&gt;(<a href="nonuniformresourceindex-03ai.html#typeparam-T" class="code_type">T</a> <a href="nonuniformresourceindex-03ai.html#decl-index" class="code_param">index</a>)
    <span class='code_keyword'>where</span> <a href="nonuniformresourceindex-03ai.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="nonuniformresourceindex-03ai.html#typeparam-T" class="code_type">T</a> <a href="nonuniformresourceindex-03ai.html">NonUniformResourceIndex</a>&lt;<a href="nonuniformresourceindex-03ai.html#typeparam-T" class="code_type">T</a>&gt;(<a href="nonuniformresourceindex-03ai.html#typeparam-T" class="code_type">T</a> <a href="nonuniformresourceindex-03ai.html#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index)
####  <a id="typeparam-T"></a>T

## Parameters

####  <a id="decl-index"></a>index  : [T](nonuniformresourceindex-03ai#typeparam-T)
####  <a id="decl-value"></a>value  : [T](nonuniformresourceindex-03ai#typeparam-T)

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


