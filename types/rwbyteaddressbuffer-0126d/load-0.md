---
layout: stdlib-reference
---

# RWByteAddressBuffer\.Load

## Description

Load a 32-bit unsigned integer or value with type of <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#typeparam-T" class="code_type">T</a></span> from the buffer at the specified location.



## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0">Load</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-location" class="code_param">location</a>);

/// Requires Capability Set 2:
<span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0">Load</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-status" class="code_param">status</a>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0">Load</a>&lt;<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#typeparam-T" class="code_type">T</a>&gt;(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-location" class="code_param">location</a>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0">Load</a>&lt;<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-alignment" class="code_param">alignment</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}
The type of the value to load from the buffer.


## Parameters

#### location  : int {#decl-location}
The input address in bytes, which must be a multiple of 4.

#### status  : uint {#decl-status}
\[out\] The status of the operation.

#### alignment  : int {#decl-alignment}
Specifies the alignment of the location, which must be a multiple of 4.


## Return value
The value loaded from the buffer.


## Remarks

You can't access the output parameter <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/load-0#decl-status" class="code_param">status</a></span> directly; instead,
pass the status to the <span class='code'><a href="/stdlib-reference/global-decls/checkaccessfullymapped-05bg">CheckAccessFullyMapped</a></span> intrinsic function.
<span class='code'><a href="/stdlib-reference/global-decls/checkaccessfullymapped-05bg">CheckAccessFullyMapped</a></span> returns TRUE if all values from the corresponding Sample,
Gather, or Load operation accessed mapped tiles in a tiled resource.
If any values were taken from an unmapped tile, <span class='code'><a href="/stdlib-reference/global-decls/checkaccessfullymapped-05bg">CheckAccessFullyMapped</a></span> returns FALSE.
When targeting non-HLSL, the status is always 0.


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

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.



