---
layout: stdlib-reference
---

# InterlockedAdd

## Description

Perform an atomic add operation on <span class='code'><a href="/stdlib-reference/global-decls/interlockedadd-0b#decl-dest" class="code_param">dest</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedadd-0b">InterlockedAdd</a>&lt;<a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/interlockedadd-0b#decl-dest" class="code_param">dest</a>,
    <a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/interlockedadd-0b#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iarithmeticatomicable-01b/index" class="code_type">IArithmeticAtomicable</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedadd-0b">InterlockedAdd</a>&lt;<a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/interlockedadd-0b#decl-dest" class="code_param">dest</a>,
    <a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/interlockedadd-0b#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/interlockedadd-0b#decl-original_value" class="code_param">original_value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iarithmeticatomicable-01b/index" class="code_type">IArithmeticAtomicable</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedadd-0b">InterlockedAdd</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/interlockedadd-0b#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/interlockedadd-0b#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

#### T: [IArithmeticAtomicable](/stdlib-reference/interfaces/iarithmeticatomicable-01b/index) {#typeparam-T}
The type of the value to perform the atomic operation on.


## Parameters

#### dest  : [T](/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T) {#decl-dest}
The value to perform the atomic operation on.

#### value  : [T](/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T) {#decl-value}
The operand to the atomic operation.

#### original\_value  : [T](/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T) {#decl-original_value}
The value of <span class='code'><a href="/stdlib-reference/global-decls/interlockedadd-0b#decl-dest" class="code_param">dest</a></span> before the operation.

#### dest  : uint {#decl-dest}
The value to perform the atomic operation on.

#### value  : int {#decl-value}
The operand to the atomic operation.


## Remarks
When targeting HLSL, it is invalid to call this function with <span class='code'><a href="/stdlib-reference/global-decls/interlockedadd-0b#typeparam-T" class="code_type">T</a></span> being a floating-point type, since
HLSL does not allow atomic operations on floating point types. For <span class='code'><a href="/stdlib-reference/global-decls/interlockedadd-0b">InterlockedAdd</a></span>, consider using
<span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf32-0be">InterlockedAddF32</a></span> or <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf16-0be">InterlockedAddF16</a></span> instead when NVAPI is available.
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



