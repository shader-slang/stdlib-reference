---
layout: stdlib-reference
---

# coopVecReduceSumAccumulate

## Description

Accumulate the sum of a cooperative vector into a buffer at the specified offset.



## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="coopvecreducesumaccumulate-47dg.html">coopVecReduceSumAccumulate</a>&lt;<a href="coopvecreducesumaccumulate-47dg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecreducesumaccumulate-47dg.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecreducesumaccumulate-47dg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecreducesumaccumulate-47dg.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecreducesumaccumulate-47dg.html#decl-v" class="code_param">v</a>,
    <a href="../types/rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="coopvecreducesumaccumulate-47dg.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="coopvecreducesumaccumulate-47dg.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="coopvecreducesumaccumulate-47dg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="coopvecreducesumaccumulate-47dg.html">coopVecReduceSumAccumulate</a>&lt;<a href="coopvecreducesumaccumulate-47dg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecreducesumaccumulate-47dg.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="coopvecreducesumaccumulate-47dg.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecreducesumaccumulate-47dg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecreducesumaccumulate-47dg.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecreducesumaccumulate-47dg.html#decl-v" class="code_param">v</a>,
    <a href="../types/rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="coopvecreducesumaccumulate-47dg.html#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="../types/defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="coopvecreducesumaccumulate-47dg.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="coopvecreducesumaccumulate-47dg.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="coopvecreducesumaccumulate-47dg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="coopvecreducesumaccumulate-47dg.html">coopVecReduceSumAccumulate</a>&lt;<a href="coopvecreducesumaccumulate-47dg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecreducesumaccumulate-47dg.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="coopvecreducesumaccumulate-47dg.html#typeparam-U" class="code_type">U</a>, <a href="coopvecreducesumaccumulate-47dg.html#decl-IgnoredBufferSize" class="code_var">IgnoredBufferSize</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="coopvecreducesumaccumulate-47dg.html#typeparam-T" class="code_type">T</a>, <a href="coopvecreducesumaccumulate-47dg.html#decl-N" class="code_var">N</a>&gt; <a href="coopvecreducesumaccumulate-47dg.html#decl-v" class="code_param">v</a>,
    <a href="coopvecreducesumaccumulate-47dg.html#typeparam-U" class="code_type">U</a>[<a href="coopvecreducesumaccumulate-47dg.html#decl-IgnoredBufferSize" class="code_var">IgnoredBufferSize</a>] <a href="coopvecreducesumaccumulate-47dg.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="coopvecreducesumaccumulate-47dg.html#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="coopvecreducesumaccumulate-47dg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="typeparam-IgnoredBufferElementType"></a>IgnoredBufferElementType
####  <a id="typeparam-U"></a>U
####  <a id="decl-IgnoredBufferSize"></a>IgnoredBufferSize  : int

## Parameters

####  <a id="decl-v"></a>v  : [CoopVec](../types/coopvec-04/index.html)\<[T](../types/coopvec-04/index.html#typeparam-T), [N](../types/coopvec-04/index.html#decl-N)\>
The cooperative vector to sum.

####  <a id="decl-buffer"></a>buffer  : [RWByteAddressBuffer](../types/rwbyteaddressbuffer-0126d/index.html)
The buffer to accumulate the sum into.

####  <a id="decl-offset"></a>offset  : int
Byte offset into the buffer.

####  <a id="decl-buffer"></a>buffer  : [RWStructuredBuffer](../types/rwstructuredbuffer-012c/index.html)\<IgnoredBufferElementType, [DefaultDataLayout](../types/defaultdatalayout-07b/index.html)\>
The buffer to accumulate the sum into.

####  <a id="decl-buffer"></a>buffer  : [U](coopvecreducesumaccumulate-47dg.html#typeparam-U) \[ [IgnoredBufferSize](coopvecreducesumaccumulate-47dg.html#decl-IgnoredBufferSize) \]
The buffer to accumulate the sum into.


## Availability and Requirements

### Capability Set 1

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

### Capability Set 2

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorTrainingNV`.


