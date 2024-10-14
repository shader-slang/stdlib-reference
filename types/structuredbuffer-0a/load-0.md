---
layout: stdlib-reference
---

# StructuredBuffer\<T, L\>\.Load

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/structuredbuffer-0a/load-0">Load</a>&lt;<a href="/stdlib-reference/types/structuredbuffer-0a/load-0#typeparam-TIndex" class="code_type">TIndex</a>&gt;(<a href="/stdlib-reference/types/structuredbuffer-0a/load-0#typeparam-TIndex" class="code_type">TIndex</a> <a href="/stdlib-reference/types/structuredbuffer-0a/load-0#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/structuredbuffer-0a/load-0#typeparam-TIndex" class="code_type">TIndex</a> : <a href="/stdlib-reference/interfaces/builtinintegertype-0129g/index" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/structuredbuffer-0a/index" class="code_type">StructuredBuffer</a>&lt;<a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/structuredbuffer-0a/load-0">Load</a>&lt;<a href="/stdlib-reference/types/structuredbuffer-0a/load-0#typeparam-TIndex" class="code_type">TIndex</a>&gt;(
    <a href="/stdlib-reference/types/structuredbuffer-0a/load-0#typeparam-TIndex" class="code_type">TIndex</a> <a href="/stdlib-reference/types/structuredbuffer-0a/load-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/structuredbuffer-0a/load-0#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/structuredbuffer-0a/load-0#typeparam-TIndex" class="code_type">TIndex</a> : <a href="/stdlib-reference/interfaces/builtinintegertype-0129g/index" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/structuredbuffer-0a/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Generic Parameters

#### TIndex: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/builtinintegertype-0129g/index) {#typeparam-TIndex}

## Parameters

#### location  : [TIndex](/stdlib-reference/types/structuredbuffer-0a/load-0#typeparam-TIndex) {#decl-location}
#### status  : uint {#decl-status}

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.



