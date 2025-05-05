---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareStore

## Description

Perform a 32-bit integer atomic compare-and-store operation at
the specified byte address within the <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore-0bi">InterlockedCompareStore</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore-0bi#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore-0bi#decl-compare_value" class="code_param">compare_value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore-0bi#decl-value" class="code_param">value</a>);

</pre>

## Parameters

#### dest  : uint {#decl-dest}
The address at which to perform the atomic add operation.

#### compare\_value  : uint {#decl-compare_value}
The value to perform comparison to the value at <span class='code'>byteAddress</span>.

#### value  : uint {#decl-value}
The value to store at <span class='code'>byteAddress</span> if the comparison is successful.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicCompareExchange</span>. For HLSL, this function
translates to <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcomparestore-0bi">InterlockedCompareStore</a></span>.
For CUDA, this function maps to <span class='code'>atomicCAS</span>.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



