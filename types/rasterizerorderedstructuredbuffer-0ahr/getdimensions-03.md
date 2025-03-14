---
layout: stdlib-reference
---

# RasterizerOrderedStructuredBuffer\<T, L\>\.GetDimensions

## Description

Get the dimensions of the buffer.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index" class="code_type">RasterizerOrderedStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/getdimensions-03">GetDimensions</a>(
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/getdimensions-03#decl-numStructs" class="code_param">numStructs</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/getdimensions-03#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rasterizerorderedstructuredbuffer-0ahr/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Parameters

#### numStructs  : uint {#decl-numStructs}
The number of structures in the buffer.

#### stride  : uint {#decl-stride}
The stride, in bytes, of each structure element.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



