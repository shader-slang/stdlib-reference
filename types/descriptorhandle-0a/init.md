---
layout: stdlib-reference
---

# DescriptorHandle\<T\>\.init

## Description

Constructor for uint64_t handles




## Signature 

<pre>
/// Requires Capability Set 1:
<a href="index.html" class="code_type">DescriptorHandle</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="init.html">init</a>(<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="init.html#decl-handleValue" class="code_param">handleValue</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>;

/// Requires Capability Set 2:
<a href="index.html" class="code_type">DescriptorHandle</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="init.html">init</a>(uint64_t <a href="init.html#decl-handleValue" class="code_param">handleValue</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Parameters

####  <a id="decl-handleValue"></a>handleValue  : [vector](../vector/index.html)\<uint, 2\>
####  <a id="decl-handleValue"></a>handleValue  : uint64\_t

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

#### hlsl
Available in all stages.

#### wgsl
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvBindlessTextureNV`.


