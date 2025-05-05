---
layout: stdlib-reference
---

# AppendStructuredBuffer\<T, L\>\.GetDimensions

## Description

Get information about the number of elements and stride of the buffer.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/appendstructuredbuffer-06g/index" class="code_type">AppendStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/appendstructuredbuffer-06g/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/appendstructuredbuffer-06g/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/appendstructuredbuffer-06g/getdimensions-03">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/appendstructuredbuffer-06g/getdimensions-03#decl-numStructs" class="code_param">numStructs</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/appendstructuredbuffer-06g/getdimensions-03#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/appendstructuredbuffer-06g/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Parameters

#### numStructs  : uint {#decl-numStructs}
The number of elements in the buffer.

#### stride  : uint {#decl-stride}
The stride of the buffer.


