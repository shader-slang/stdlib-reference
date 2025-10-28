---
layout: stdlib-reference
---

# CoopVec\<T, int N\>\.loadCoherent

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="loadcoherent-4.html">loadCoherent</a>(
    <a href="../ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, Access.ReadWrite, AddressSpace.Device&gt; <a href="loadcoherent-4.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="loadcoherent-4.html#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>,
    MemoryScope <a href="loadcoherent-4.html#decl-memoryScope" class="code_param">memoryScope</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-buffer"></a>buffer  : [Ptr](../ptr-0/index.html)\<[T](../ptr-0/index.html#typeparam-T), Access\.ReadWrite, AddressSpace\.Device\>
####  <a id="decl-byteOffset16ByteAligned"></a>byteOffset16ByteAligned  : int = 0
####  <a id="decl-memoryScope"></a>memoryScope  : MemoryScope = MemoryScope\.Device

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capabilities: `spvCooperativeVectorNV`, `spvVulkanMemoryModelKHR`, `spvVulkanMemoryModelDeviceScopeKHR`.


