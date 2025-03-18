---
layout: stdlib-reference
---

# unpackSnorm2x16ToHalf

## Description

Unpack a 32-bit unsigned integer into two 16-bit signed integers.
Then, each 16-bit value is converted to a normalized half-precision
floating-point value to generate a 2-component vector.




## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, 2&gt; <a href="/stdlib-reference/global-decls/unpacksnorm2x16tohalf-6fh">unpackSnorm2x16ToHalf</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/unpacksnorm2x16tohalf-6fh#decl-packedValue" class="code_param">packedValue</a>);

</pre>

## Parameters

#### packedValue  : uint {#decl-packedValue}

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

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



