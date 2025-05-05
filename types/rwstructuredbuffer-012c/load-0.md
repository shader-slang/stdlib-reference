---
layout: stdlib-reference
---

# RWStructuredBuffer\<T, L\>\.Load

## Description

Load a element from the buffer at the specified location.



## Signature 

<pre>
<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0">Load</a>&lt;<a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#typeparam-TIndex" class="code_type">TIndex</a>&gt;(<a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#typeparam-TIndex" class="code_type">TIndex</a> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#typeparam-TIndex" class="code_type">TIndex</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0">Load</a>&lt;<a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#typeparam-TIndex" class="code_type">TIndex</a>&gt;(
    <a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#typeparam-TIndex" class="code_type">TIndex</a> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#typeparam-TIndex" class="code_type">TIndex</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Generic Parameters

#### TIndex: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-TIndex}
Type of the index.


## Parameters

#### location  : [TIndex](/stdlib-reference/types/rwstructuredbuffer-012c/load-0#typeparam-TIndex) {#decl-location}
The index of buffer.

#### status  : uint {#decl-status}
\[out\] The status of the operation.


## Return value
The element at the specified index.


## Remarks

You can't access the output parameter <span class='code'><a href="/stdlib-reference/types/rwstructuredbuffer-012c/load-0#decl-status" class="code_param">status</a></span> directly; instead,
pass the status to the <span class='code'><a href="/stdlib-reference/global-decls/checkaccessfullymapped-05bg">CheckAccessFullyMapped</a></span> intrinsic function.
<span class='code'><a href="/stdlib-reference/global-decls/checkaccessfullymapped-05bg">CheckAccessFullyMapped</a></span> returns TRUE if all values from the corresponding Sample,
Gather, or Load operation accessed mapped tiles in a tiled resource.
If any values were taken from an unmapped tile, <span class='code'><a href="/stdlib-reference/global-decls/checkaccessfullymapped-05bg">CheckAccessFullyMapped</a></span> returns FALSE.
When targeting non-HLSL, the status is always 0.


