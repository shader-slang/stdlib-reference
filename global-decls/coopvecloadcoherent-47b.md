---
layout: stdlib-reference
---

# coopVecLoadCoherent

## Description





## Signature 

<pre>
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecloadcoherent-47b.html#typeparam-T" class="code_type">T</a>, <a href="coopvecloadcoherent-47b.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecloadcoherent-47b.html">coopVecLoadCoherent</a>&lt;<span class="code_keyword">int</span> <a href="coopvecloadcoherent-47b.html#decl-N" class="code_var">N</a>, <a href="coopvecloadcoherent-47b.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="coopvecloadcoherent-47b.html#typeparam-T" class="code_type">T</a>, Access.ReadWrite, AddressSpace.Device&gt; <a href="coopvecloadcoherent-47b.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="coopvecloadcoherent-47b.html#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>,
    MemoryScope <a href="coopvecloadcoherent-47b.html#decl-memoryScope" class="code_param">memoryScope</a>)
    <span class='code_keyword'>where</span> <a href="coopvecloadcoherent-47b.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int
####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)

## Parameters

####  <a id="decl-buffer"></a>buffer  : [Ptr](../types/ptr-0/index.html)\<[T](../types/ptr-0/index.html#typeparam-T), Access\.ReadWrite, AddressSpace\.Device\>
####  <a id="decl-byteOffset16ByteAligned"></a>byteOffset16ByteAligned  : int = 0
####  <a id="decl-memoryScope"></a>memoryScope  : MemoryScope = MemoryScope\.Device

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capabilities: `spvCooperativeVectorNV`, `spvVulkanMemoryModelKHR`, `spvVulkanMemoryModelDeviceScopeKHR`.


