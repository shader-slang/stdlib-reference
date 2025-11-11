---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.LoadCoherent

## Description

Loads a cooperative matrix from a pointer buffer with coherent memory access.
Ensures memory reads observe writes made visible across the specified memory scope. Vulkan only.



## Signature 

<pre>
<span class='code_keyword'>static</span> linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="loadcoherent-04.html">LoadCoherent</a>&lt;linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>matrixLayout&gt;(
    <a href="../ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, Access.ReadWrite, AddressSpace.Device&gt; <a href="loadcoherent-04.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="loadcoherent-04.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="loadcoherent-04.html#decl-stride" class="code_param">stride</a>,
    MemoryScope <a href="loadcoherent-04.html#decl-memoryScope" class="code_param">memoryScope</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="decl-matrixLayout"></a>matrixLayout  : linalg\.[CoopMatMatrixLayout](../coopmatmatrixlayout-047d/index.html)
The memory layout (RowMajor or ColMajor) of the data in the buffer.


## Parameters

####  <a id="decl-buffer"></a>buffer  : [Ptr](../ptr-0/index.html)\<[T](../ptr-0/index.html#typeparam-T), Access\.ReadWrite, AddressSpace\.Device\>
The pointer to the buffer to load from.

####  <a id="decl-element"></a>element  : uint
The starting element index in the buffer.

####  <a id="decl-stride"></a>stride  : uint
The stride in elements between consecutive rows (for row major) or columns (for column major).

####  <a id="decl-memoryScope"></a>memoryScope  : MemoryScope
The scope from which writes should be visible (e.g., Device, Workgroup).


## Return value
A cooperative matrix loaded from the buffer.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capabilities: `spvCooperativeMatrixKHR`, `spvVulkanMemoryModelKHR`, `spvVulkanMemoryModelDeviceScopeKHR`.


