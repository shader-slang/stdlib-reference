---
layout: stdlib-reference
---

# InterlockedAddF16Emulated

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="interlockedaddf16emulated-0beh.html">InterlockedAddF16Emulated</a>(
    <a href="../types/ptr-0/index.html" class="code_type">Ptr</a>&lt;<span class="code_keyword">half</span>, Access::ReadWrite, AddressSpace::Device&gt; <a href="interlockedaddf16emulated-0beh.html#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">half</span> <a href="interlockedaddf16emulated-0beh.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">half</span> <a href="interlockedaddf16emulated-0beh.html#decl-originalValue" class="code_param">originalValue</a>);

</pre>

## Parameters

####  <a id="decl-dest"></a>dest  : [Ptr](../types/ptr-0/index.html)\<half, Access : : ReadWrite, AddressSpace : : Device\>
####  <a id="decl-value"></a>value  : half
####  <a id="decl-originalValue"></a>originalValue  : half

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.



