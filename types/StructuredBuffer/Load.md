---
layout: stdlib-reference
---

# StructuredBuffer\<T, L\>\.Load

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
T <a href="/stdlib-reference/types/StructuredBuffer/index" class="code_type">StructuredBuffer</a>&lt;T, L&gt;.<a href="/stdlib-reference/types/StructuredBuffer/Load">Load</a>&lt;TIndex&gt;(TIndex <span class='code_param'>location</span>)
    <span class='code_keyword'>where</span> TIndex : __BuiltinIntegerType
    <span class='code_keyword'>where</span> L : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index" class="code_type">IBufferDataLayout</a>;

/// Requires Capability Set 2:
T <a href="/stdlib-reference/types/StructuredBuffer/index" class="code_type">StructuredBuffer</a>&lt;T, L&gt;.<a href="/stdlib-reference/types/StructuredBuffer/Load">Load</a>&lt;TIndex&gt;(
    TIndex <span class='code_param'>location</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>status</span>)
    <span class='code_keyword'>where</span> TIndex : __BuiltinIntegerType
    <span class='code_keyword'>where</span> L : <a href="/stdlib-reference/interfaces/IBufferDataLayout/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Parameters

#### TIndex
#### location : TIndex
#### status : uint

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



