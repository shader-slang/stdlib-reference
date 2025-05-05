---
layout: stdlib-reference
---

# InterlockedMin

## Description

Perform an atomic min operation on <span class='code'><a href="interlockedmin-0b.html#decl-dest" class="code_param">dest</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="interlockedmin-0b.html">InterlockedMin</a>&lt;<a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a> <a href="interlockedmin-0b.html#decl-dest" class="code_param">dest</a>,
    <a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a> <a href="interlockedmin-0b.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iarithmeticatomicable-01b/index.html" class="code_type">IArithmeticAtomicable</a>;

<span class="code_keyword">void</span> <a href="interlockedmin-0b.html">InterlockedMin</a>&lt;<a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a> <a href="interlockedmin-0b.html#decl-dest" class="code_param">dest</a>,
    <a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a> <a href="interlockedmin-0b.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a> <a href="interlockedmin-0b.html#decl-original_value" class="code_param">original_value</a>)
    <span class='code_keyword'>where</span> <a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iarithmeticatomicable-01b/index.html" class="code_type">IArithmeticAtomicable</a>;

<span class="code_keyword">void</span> <a href="interlockedmin-0b.html">InterlockedMin</a>(
    <span class="code_keyword">uint</span> <a href="interlockedmin-0b.html#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">int</span> <a href="interlockedmin-0b.html#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IArithmeticAtomicable](../interfaces/iarithmeticatomicable-01b/index)
The type of the value to perform the atomic operation on.


## Parameters

####  <a id="decl-dest"></a>dest  : [T](interlockedmin-0b#typeparam-T)
The value to perform the atomic operation on.

####  <a id="decl-value"></a>value  : [T](interlockedmin-0b#typeparam-T)
The operand to the atomic operation.

####  <a id="decl-original_value"></a>original\_value  : [T](interlockedmin-0b#typeparam-T)
The value of <span class='code'><a href="interlockedmin-0b.html#decl-dest" class="code_param">dest</a></span> before the operation.

####  <a id="decl-dest"></a>dest  : uint
The value to perform the atomic operation on.

####  <a id="decl-value"></a>value  : int
The operand to the atomic operation.


## Remarks
When targeting HLSL, it is invalid to call this function with <span class='code'><a href="interlockedmin-0b.html#typeparam-T" class="code_type">T</a></span> being a floating-point type, since
HLSL does not allow atomic operations on floating point types. For <span class='code'><a href="interlockedadd-0b.html">InterlockedAdd</a></span>, consider using
<span class='code'><a href="../types/rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a>.<a href="../types/rwbyteaddressbuffer-0126d/interlockedaddf32-0be.html">InterlockedAddF32</a></span> or <span class='code'><a href="../types/rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a>.<a href="../types/rwbyteaddressbuffer-0126d/interlockedaddf16-0be.html">InterlockedAddF16</a></span> instead when NVAPI is available.
On SPIR-V (Vulkan), all integer and floating point types are supported.
On Metal and WGSL, all floating-point types are not supported.


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



