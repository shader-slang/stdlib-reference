---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.GetLength

## Description

Returns the number of elements for the current thread.
Depending on the number of threads for the given matrix, each
thread will get smaller length.




## Signature 

<pre>
<span class='code_keyword'>static</span> <span class="code_keyword">uint</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>S, <span class="code_keyword">int</span> M, <span class="code_keyword">int</span> N, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="getlength-03.html">GetLength</a>()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Remarks
The return value is unlikely to be same to M * N.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


