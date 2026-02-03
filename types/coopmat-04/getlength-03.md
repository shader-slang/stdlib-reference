---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.GetLength

## Description

Returns the number of elements for accessible by the current thread.
The number of components accessible by current thread is implementation-dependent.



## Signature 

<pre>
<span class='code_keyword'>static</span> <span class="code_keyword">uint</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="getlength-03.html">GetLength</a>()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>;

</pre>

## Return value
The number of elements accessible by the current thread.



## Remarks
The return value is unlikely to be same to M * N.


## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


