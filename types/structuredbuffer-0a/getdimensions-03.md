---
layout: stdlib-reference
---

# StructuredBuffer\<T, L\>\.GetDimensions

## Description

Get the dimensions of the buffer.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/structuredbuffer-0a/getdimensions-03">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/structuredbuffer-0a/getdimensions-03#decl-numStructs" class="code_param">numStructs</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/structuredbuffer-0a/getdimensions-03#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Parameters

#### numStructs  : uint {#decl-numStructs}
The number of structures in the buffer.

#### stride  : uint {#decl-stride}
The stride, in bytes, of each structure element.


