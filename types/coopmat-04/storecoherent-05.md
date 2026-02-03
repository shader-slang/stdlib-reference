---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.StoreCoherent

## Description

Stores the cooperative matrix into a pointer buffer with coherent memory access.
Ensures memory writes are made available across the specified memory scope. Vulkan only.



## Signature 

<pre>
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="storecoherent-05.html">StoreCoherent</a>&lt;linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>matrixLayout&gt;(
    <a href="../ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, Access.ReadWrite, AddressSpace.Device&gt; <a href="storecoherent-05.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="storecoherent-05.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="storecoherent-05.html#decl-stride" class="code_param">stride</a>,
    MemoryScope <a href="storecoherent-05.html#decl-memoryScope" class="code_param">memoryScope</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>;

</pre>

## Generic Parameters

####  <a id="decl-matrixLayout"></a>matrixLayout  : linalg\.[CoopMatMatrixLayout](../coopmatmatrixlayout-047d/index.html)
The memory layout (RowMajor or ColMajor) to use when storing.


## Parameters

####  <a id="decl-buffer"></a>buffer  : [Ptr](../ptr-0/index.html)\<[T](../ptr-0/index.html#typeparam-T), Access\.ReadWrite, AddressSpace\.Device\>
The pointer to the buffer to store the matrix into.

####  <a id="decl-element"></a>element  : uint
The starting element index in the buffer.

####  <a id="decl-stride"></a>stride  : uint
The stride in elements between consecutive rows (for row major) or columns (for column major).

####  <a id="decl-memoryScope"></a>memoryScope  : MemoryScope
The scope across which the write should be made visible (e.g., Device, Workgroup).


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capabilities: `spvCooperativeMatrixKHR`, `spvVulkanMemoryModelKHR`, `spvVulkanMemoryModelDeviceScopeKHR`.


