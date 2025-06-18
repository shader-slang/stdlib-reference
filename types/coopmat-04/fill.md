---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.fill

## Description

Fills the cooperative matrix with the specified value.



## Signature 

<pre>
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="../memoryscope-06/index.html" class="code_type">MemoryScope</a>S, <span class="code_keyword">int</span> M, <span class="code_keyword">int</span> N, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="fill.html">fill</a>(
    <a href="index.html#typeparam-T" class="code_type">T</a> <a href="fill.html#decl-t" class="code_param">t</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-t"></a>t  : [T](index.html#typeparam-T)
The value to fill the matrix with.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


