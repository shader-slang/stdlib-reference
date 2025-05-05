---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.load

## Description

Load values from a byte-addressable buffer into a cooperative vector.



## Signature 

<pre>
/// Requires Capability Set 1:
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/load">load</a>(
    <a href="/stdlib-reference/types/byteaddressbuffer-04b/index" class="code_type">ByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/load#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/load#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/load">load</a>(
    <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a> <a href="/stdlib-reference/types/coopvec-04/load#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/load#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/load">load</a>(
    <a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/types/coopvec-04/load#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/load#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/load">load</a>(
    <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/defaultdatalayout-07b/index" class="code_type">DefaultDataLayout</a>&gt; <a href="/stdlib-reference/types/coopvec-04/load#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/load#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/load">load</a>&lt;<a href="/stdlib-reference/types/coopvec-04/load#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">const</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>[M] <a href="/stdlib-reference/types/coopvec-04/load#decl-data" class="code_param">data</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/load#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### M  : int {#decl-M}

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

#### data  : [T](/stdlib-reference/types/coopvec-04/index#typeparam-T) \[ M \] {#decl-data}

## Return value
A new cooperative vector containing the loaded values.


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

Requires capability: `spvCooperativeVectorNV`.


