---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAdd64

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-byteAddress" class="code_param">byteAddress</a>    uint ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-valueToAdd" class="code_param">valueToAdd</a>    int64_t );

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-byteAddress" class="code_param">byteAddress</a>    uint ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-valueToAdd" class="code_param">valueToAdd</a>    int64_t ,
outOriginalValue    out int64_t );

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-byteAddress" class="code_param">byteAddress</a>    uint ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-valueToAdd" class="code_param">valueToAdd</a>    uint64_t );

void <a href="/stdlib-reference/types/RWByteAddressBuffer/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64">InterlockedAdd64</a>(
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-byteAddress" class="code_param">byteAddress</a>    uint ,
<a href="/stdlib-reference/types/RWByteAddressBuffer/InterlockedAdd64#decl-valueToAdd" class="code_param">valueToAdd</a>    uint64_t ,
outOriginalValue    out uint64_t );

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


