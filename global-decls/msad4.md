---
layout: stdlib-reference
---

# msad4

## Description

Masked sum of absolute differences of byte alignments.
This function computes the absolute differences of the byte alignments of the reference and source values, and adds them to the accumulated differences.



## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/global-decls/msad4">msad4</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/msad4#decl-reference" class="code_param">reference</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="/stdlib-reference/global-decls/msad4#decl-source" class="code_param">source</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="/stdlib-reference/global-decls/msad4#decl-accum" class="code_param">accum</a>);

</pre>

## Parameters

#### reference  : uint {#decl-reference}
The reference 4 bytes packed in a uint.

#### source  : [vector](/stdlib-reference/types/vector/index)\<uint, 2\> {#decl-source}
The source 2 uints packed in a uint2.

#### accum  : [vector](/stdlib-reference/types/vector/index)\<uint, 4\> {#decl-accum}
The accumulated differences.


## Return value
The updated accumulated differences.

## Remarks
In HLSL, this is implemented with the msad4 intrinsic.


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

#### spirv
Available in all stages.



