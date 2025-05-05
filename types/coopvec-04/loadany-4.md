---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.loadAny

## Description

Load values from a groupshared array into a CoopVec, allowing type conversion between source and destination elements.
This operation is only available when targeting SPIR-V.



## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/loadany-4">loadAny</a>&lt;<a href="/stdlib-reference/types/coopvec-04/loadany-4#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/loadany-4#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">const</span> <a href="/stdlib-reference/types/coopvec-04/loadany-4#typeparam-U" class="code_type">U</a>[<a href="/stdlib-reference/types/coopvec-04/loadany-4#decl-M" class="code_var">M</a>] <a href="/stdlib-reference/types/coopvec-04/loadany-4#decl-data" class="code_param">data</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/loadany-4#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/loadany-4#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/loadany-4">loadAny</a>&lt;<a href="/stdlib-reference/types/coopvec-04/loadany-4#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/loadany-4#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/coopvec-04/loadany-4#decl-L" class="code_var">L</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">const</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/coopvec-04/loadany-4#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/loadany-4#decl-L" class="code_var">L</a>&gt;[M] <a href="/stdlib-reference/types/coopvec-04/loadany-4#decl-data" class="code_param">data</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/coopvec-04/loadany-4#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/loadany-4#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### U: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-U}
#### M  : int {#decl-M}
#### L  : int {#decl-L}

## Parameters

#### data  : [U](/stdlib-reference/types/coopvec-04/loadany-4#typeparam-U) \[ [M](/stdlib-reference/types/coopvec-04/loadany-4#decl-M) \] {#decl-data}
The source groupshared array to load from. The element type U can be different from the CoopVec element type T.

#### byteOffset16ByteAligned  : int = 0 {#decl-byteOffset16ByteAligned}
The byte offset from the start of the array. Must be 16-byte aligned.

#### data  : [vector](/stdlib-reference/types/vector/index)\<U, L\> \[ M \] {#decl-data}
The source groupshared array to load from. The element type U can be different from the CoopVec element type T.


## Return value
A new CoopVec containing the loaded and type-converted values.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


