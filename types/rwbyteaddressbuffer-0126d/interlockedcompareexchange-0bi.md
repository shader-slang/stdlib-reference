---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedCompareExchange

## Description

Perform a 32-bit integer atomic compare-and-exchange operation at
the specified byte address within the <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchange-0bi">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchange-0bi#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchange-0bi#decl-compare_value" class="code_param">compare_value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchange-0bi#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchange-0bi#decl-original_value" class="code_param">original_value</a>);

</pre>

## Parameters

#### dest  : uint {#decl-dest}
The address at which to perform the atomic compare-and-exchange operation.

#### compare\_value  : uint {#decl-compare_value}
The value to perform bitwise comparison to the value at <span class='code'>byteAddress</span>.

#### value  : uint {#decl-value}
The value to store at <span class='code'>byteAddress</span> if the comparison is successful.

#### original\_value  : uint {#decl-original_value}
The original value at <span class='code'>byteAddress</span> before the compare-and-exchange operation.


## Remarks
For SPIR-V, this function maps to <span class='code'>OpAtomicCompareExchange</span>. For HLSL, this function
translates to <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedcompareexchange-0bi">InterlockedCompareExchange</a></span>.
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



