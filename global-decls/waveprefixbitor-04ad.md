---
layout: stdlib-reference
---

# WavePrefixBitOr

## Description

WavePrefixBitOr - Exclusive prefix bitwise OR (equivalent to GLSL subgroupExclusiveOr)
Note: CUDA/HLSL require subgroup_partitioned capability (SM 6.5 for HLSL)




## Signature 

<pre>
<a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a> <a href="waveprefixbitor-04ad.html">WavePrefixBitOr</a>&lt;<a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a>&gt;(<a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a> <a href="waveprefixbitor-04ad.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a>, <a href="waveprefixbitor-04ad.html#decl-N" class="code_var">N</a>&gt; <a href="waveprefixbitor-04ad.html">WavePrefixBitOr</a>&lt;<a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="waveprefixbitor-04ad.html#decl-N" class="code_var">N</a>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a>, <a href="waveprefixbitor-04ad.html#decl-N" class="code_var">N</a>&gt; <a href="waveprefixbitor-04ad.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a>, <a href="waveprefixbitor-04ad.html#decl-N" class="code_var">N</a>, <a href="waveprefixbitor-04ad.html#decl-M" class="code_var">M</a>&gt; <a href="waveprefixbitor-04ad.html">WavePrefixBitOr</a>&lt;<a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="waveprefixbitor-04ad.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="waveprefixbitor-04ad.html#decl-M" class="code_var">M</a>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a>, <a href="waveprefixbitor-04ad.html#decl-N" class="code_var">N</a>, <a href="waveprefixbitor-04ad.html#decl-M" class="code_var">M</a>&gt; <a href="waveprefixbitor-04ad.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="waveprefixbitor-04ad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinLogicalType](../interfaces/0_builtinlogicaltype-029g/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-expr"></a>expr  : [T](waveprefixbitor-04ad.html#typeparam-T)
####  <a id="decl-expr"></a>expr  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-expr"></a>expr  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformArithmetic`.
#### hlsl
Available in all stages.

#### cuda
Available in all stages.



