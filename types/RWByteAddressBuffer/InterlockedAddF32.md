---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddF32

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddF32">InterlockedAddF32</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    <span class="code_keyword">float</span> <span class='code_param'>valueToAdd</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>originalValue</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAddF32">InterlockedAddF32</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>byteAddress</span>,
    <span class="code_keyword">float</span> <span class='code_param'>valueToAdd</span>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### valueToAdd  : float {#decl-valueToAdd}
#### originalValue  : float {#decl-originalValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvAtomicFloat32AddEXT`, `spvAtomicFloat32MinMaxEXT`.


