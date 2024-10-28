---
layout: stdlib-reference
---

# RWByteAddressBuffer\.LoadAligned

## Description

Load an element with type <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/loadaligned-04#typeparam-T" class="code_type">T</a></span> from the buffer at the specified location with alignment of <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/loadaligned-04#typeparam-T" class="code_type">T</a></span>.



## Signature 

<pre>
<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/loadaligned-04#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/loadaligned-04">LoadAligned</a>&lt;<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/loadaligned-04#typeparam-T" class="code_type">T</a>&gt;(<span class="code_keyword">int</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/loadaligned-04#decl-location" class="code_param">location</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}

## Parameters

#### location  : int {#decl-location}
The input address in bytes which must be a multiple of size of <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/loadaligned-04#typeparam-T" class="code_type">T</a></span>.


## Return value
T value with type <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/loadaligned-04#typeparam-T" class="code_type">T</a></span> loaded from the buffer.

## Remarks

Currently, this function only supports when <span class='code'><a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/loadaligned-04#typeparam-T" class="code_type">T</a></span> is scalar, vector, or matrix type.


## Availability and Requirements

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



