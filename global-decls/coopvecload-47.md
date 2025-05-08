---
layout: stdlib-reference
---

# coopVecLoad

## Description

Load values from a byte-addressable buffer into a cooperative vector.



## Signature 

<pre>
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>, <a href="coopvecload-47.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecload-47.html">coopVecLoad</a>&lt;<a href="coopvecload-47.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/byteaddressbuffer-04b/index.html" class="code_type">ByteAddressBuffer</a> <a href="coopvecload-47.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="coopvecload-47.html#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="coopvecload-47.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>, <a href="coopvecload-47.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecload-47.html">coopVecLoad</a>&lt;<a href="coopvecload-47.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="coopvecload-47.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="coopvecload-47.html#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="coopvecload-47.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>, <a href="coopvecload-47.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecload-47.html">coopVecLoad</a>&lt;<a href="coopvecload-47.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a>&lt;<a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecload-47.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="coopvecload-47.html#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="coopvecload-47.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>, <a href="coopvecload-47.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecload-47.html">coopVecLoad</a>&lt;<a href="coopvecload-47.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="coopvecload-47.html#typeparam-T" class="code_type">T</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecload-47.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="coopvecload-47.html#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="coopvecload-47.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int
####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)

## Parameters

####  <a id="decl-buffer"></a>buffer  : [ByteAddressBuffer](../types/byteaddressbuffer-04b/index.html)
The source buffer to load data from.

####  <a id="decl-byteOffset16ByteAligned"></a>byteOffset16ByteAligned  : int = 0
The byte offset from the start of the buffer. Must be 16-byte aligned.

####  <a id="decl-buffer"></a>buffer  : [RWByteAddressBuffer](../types/rwbyteaddressbuffer-0126d/index.html)
The source buffer to load data from.

####  <a id="decl-buffer"></a>buffer  : [StructuredBuffer](../types/structuredbuffer-0a/index.html)\<[T](../types/structuredbuffer-0a/index.html#typeparam-T), [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
The source buffer to load data from.

####  <a id="decl-buffer"></a>buffer  : [RWStructuredBuffer](../types/rwstructuredbuffer-012c/index.html)\<[T](../types/rwstructuredbuffer-012c/index.html#typeparam-T), [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
The source buffer to load data from.


## Return value
A new cooperative vector containing the loaded values.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


