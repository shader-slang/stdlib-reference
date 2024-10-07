---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAdd64

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
    uint <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>valueToAdd</span>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
    uint <span class='code_param'>byteAddress</span>,
    int64_t <span class='code_param'>valueToAdd</span>,
    out int64_t <span class='code_param'>outOriginalValue</span>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
    uint <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>valueToAdd</span>);

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
    uint <span class='code_param'>byteAddress</span>,
    uint64_t <span class='code_param'>valueToAdd</span>,
    out uint64_t <span class='code_param'>outOriginalValue</span>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### valueToAdd  : int64\_t {#decl-valueToAdd}
#### outOriginalValue  : int64\_t {#decl-outOriginalValue}
#### valueToAdd  : uint64\_t {#decl-valueToAdd}
#### outOriginalValue  : uint64\_t {#decl-outOriginalValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvInt64Atomics`.


