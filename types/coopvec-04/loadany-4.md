---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.loadAny

## Description

Load values from a groupshared array into a CoopVec, allowing type conversion between source and destination elements.
This operation is only available when targeting SPIR-V.



## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="loadany-4.html">loadAny</a>&lt;<a href="loadany-4.html#typeparam-U" class="code_type">U</a>, <a href="loadany-4.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">const</span> <a href="loadany-4.html#typeparam-U" class="code_type">U</a>[<a href="loadany-4.html#decl-M" class="code_var">M</a>] <a href="loadany-4.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">int</span> <a href="loadany-4.html#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="loadany-4.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="loadany-4.html">loadAny</a>&lt;<a href="loadany-4.html#typeparam-U" class="code_type">U</a>, <a href="loadany-4.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>, <a href="loadany-4.html#decl-L" class="code_var">L</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">const</span> <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="loadany-4.html#typeparam-U" class="code_type">U</a>, <a href="loadany-4.html#decl-L" class="code_var">L</a>&gt;[M] <a href="loadany-4.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">int</span> <a href="loadany-4.html#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="loadany-4.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index)
####  <a id="decl-M"></a>M  : int
####  <a id="decl-L"></a>L  : int

## Parameters

####  <a id="decl-data"></a>data  : [U](loadany-4#typeparam-U) \[ [M](loadany-4#decl-M) \]
The source groupshared array to load from. The element type U can be different from the CoopVec element type T.

####  <a id="decl-byteOffset16ByteAligned"></a>byteOffset16ByteAligned  : int = 0
The byte offset from the start of the array. Must be 16-byte aligned.

####  <a id="decl-data"></a>data  : [vector](../vector/index)\<U, L\> \[ M \]
The source groupshared array to load from. The element type U can be different from the CoopVec element type T.


## Return value
A new CoopVec containing the loaded and type-converted values.


## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


