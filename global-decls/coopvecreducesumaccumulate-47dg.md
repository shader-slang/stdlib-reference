---
layout: stdlib-reference
---

# coopVecReduceSumAccumulate

## Description

Accumulate the sum of a cooperative vector into a buffer at the specified offset.



## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg">coopVecReduceSumAccumulate</a>&lt;<a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-v" class="code_param">v</a>,
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg">coopVecReduceSumAccumulate</a>&lt;<a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-v" class="code_param">v</a>,
    <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-IgnoredBufferElementType" class="code_type">IgnoredBufferElementType</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg">coopVecReduceSumAccumulate</a>&lt;<a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-IgnoredBufferSize" class="code_var">IgnoredBufferSize</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-v" class="code_param">v</a>,
    <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-U" class="code_type">U</a>[<a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-IgnoredBufferSize" class="code_var">IgnoredBufferSize</a>] <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-offset" class="code_param">offset</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### N  : int {#decl-N}
#### IgnoredBufferElementType {#typeparam-IgnoredBufferElementType}
#### U {#typeparam-U}
#### IgnoredBufferSize  : int {#decl-IgnoredBufferSize}

## Parameters

#### v  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-v}
The cooperative vector to sum.

#### buffer  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-buffer}
The buffer to accumulate the sum into.

#### offset  : int {#decl-offset}
Byte offset into the buffer.

#### buffer  : [RWStructuredBuffer](/stdlib-reference/types/rwstructuredbuffer-012c/index)\<IgnoredBufferElementType, [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-buffer}
The buffer to accumulate the sum into.

#### buffer  : [U](/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#typeparam-U) \[ [IgnoredBufferSize](/stdlib-reference/global-decls/coopvecreducesumaccumulate-47dg#decl-IgnoredBufferSize) \] {#decl-buffer}
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


