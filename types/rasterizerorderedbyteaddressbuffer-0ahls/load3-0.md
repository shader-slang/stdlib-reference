---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.Load3

## Description

Load three 32-bit unsigned integers from the buffer at the specified location.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0">Load3</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0#decl-location" class="code_param">location</a>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0">Load3</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0#decl-alignment" class="code_param">alignment</a>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 3&gt; <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0">Load3</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0#decl-status" class="code_param">status</a>);

</pre>

## Parameters

#### location  : int {#decl-location}
The input address in bytes, which must be a multiple of 4.

#### alignment  : int {#decl-alignment}
Specifies the alignment of the location, which must be a multiple of 4.

#### status  : uint {#decl-status}
\[out\] The status of the operation.


## Return value
<span class='code'>uint3</span> Three 32-bit unsigned integer value loaded from the buffer.


## Remarks

This function only supports when targeting HLSL.
You can't access the output parameter <span class='code'><a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/load3-0#decl-status" class="code_param">status</a></span> directly; instead,
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

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.



