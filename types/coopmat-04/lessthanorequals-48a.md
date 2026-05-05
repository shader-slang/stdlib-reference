---
layout: stdlib-reference
---

# linalg\.CoopMat\<T, S, M, N, R\>\.lessThanOrEquals

## Description

Performs lexicographic comparison to test if this matrix is less than or equal to another.



## Signature 

<pre>
<span class="code_keyword">bool</span> linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt;.<a href="lessthanorequals-48a.html">lessThanOrEquals</a>(
    linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt; <a href="lessthanorequals-48a.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">bool</span> linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-S" class="code_var">S</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-R" class="code_var">R</a>&gt;.<a href="lessthanorequals-48a.html">lessThanOrEquals</a>(
    linalg.<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="../bfloat16-01/index.html" class="code_type">BFloat16</a>, S, M, N, R&gt; <a href="lessthanorequals-48a.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> == <a href="../bfloat16-01/index.html" class="code_type">BFloat16</a>;

</pre>

## Parameters

####  <a id="decl-other"></a>other  : linalg\.[CoopMat](index.html)\<[T](index.html#typeparam-T), [S](index.html#decl-S), [M](index.html#decl-M), [N](index.html#decl-N), [R](index.html#decl-R)\>
The cooperative matrix to compare with.

####  <a id="decl-other"></a>other  : linalg\.[CoopMat](index.html)\<[BFloat16](../bfloat16-01/index.html), S, M, N, R\>
The cooperative matrix to compare with.


## Return value
True if this matrix is lexicographically less than or equal to other, false otherwise.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `SPV_KHR_non_semantic_info`, `SPV_GOOGLE_user_type`, `spvImageQuery`, `spvImageGatherExtended`, `spvSparseResidency`, `spvMinLod`, `spvBFloat16KHR`, `spvCooperativeMatrixKHR`.
#### cuda
Available in all stages.



