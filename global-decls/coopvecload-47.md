---
layout: stdlib-reference
---

# coopVecLoad

## Description

Load values from a byte-addressable buffer into a cooperative vector.



## Signature 

<pre>
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecload-47#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecload-47">coopVecLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopvecload-47#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecload-47#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecload-47#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecload-47">coopVecLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/global-decls/coopvecload-47#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecload-47#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecload-47#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecload-47">coopVecLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopvecload-47#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecload-47#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecload-47#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecload-47">coopVecLoad</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/global-decls/coopvecload-47#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecload-47#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecload-47#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### N  : int {#decl-N}
#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}

## Parameters

#### buffer  : [ByteAddressBuffer](/stdlib-reference/types/byteaddressbuffer-04b/index) {#decl-buffer}
The source buffer to load data from.

#### byteOffset16ByteAligned  : int = 0 {#decl-byteOffset16ByteAligned}
The byte offset from the start of the buffer. Must be 16-byte aligned.

#### buffer  : [RWByteAddressBuffer](/stdlib-reference/types/rwbyteaddressbuffer-0126d/index) {#decl-buffer}
The source buffer to load data from.

#### buffer  : [StructuredBuffer](/stdlib-reference/types/structuredbuffer-0a/index)\<[T](/stdlib-reference/types/structuredbuffer-0a/index#typeparam-T), [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-buffer}
The source buffer to load data from.

#### buffer  : [RWStructuredBuffer](/stdlib-reference/types/rwstructuredbuffer-012c/index)\<[T](/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T), [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index)\> {#decl-buffer}
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


