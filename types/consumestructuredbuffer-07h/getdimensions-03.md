---
layout: stdlib-reference
---

# ConsumeStructuredBuffer\<T, L\>\.GetDimensions

## Description

Gets the dimensions of the resource.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/consumestructuredbuffer-07h/index" class="code_type">ConsumeStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/consumestructuredbuffer-07h/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/consumestructuredbuffer-07h/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/consumestructuredbuffer-07h/getdimensions-03">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/consumestructuredbuffer-07h/getdimensions-03#decl-numStructs" class="code_param">numStructs</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/consumestructuredbuffer-07h/getdimensions-03#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/consumestructuredbuffer-07h/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Parameters

#### numStructs  : uint {#decl-numStructs}
\[out\] The number of structures in the buffer.

#### stride  : uint {#decl-stride}
\[out\] The stride, in bytes, of each element


