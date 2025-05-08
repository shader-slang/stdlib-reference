---
layout: stdlib-reference
---

# msad4

## Description

Masked sum of absolute differences of byte alignments.
This function computes the absolute differences of the byte alignments of the reference and source values, and adds them to the accumulated differences.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="msad4.html">msad4</a>(
    <span class="code_keyword">uint</span> <a href="msad4.html#decl-reference" class="code_param">reference</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="msad4.html#decl-source" class="code_param">source</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="msad4.html#decl-accum" class="code_param">accum</a>);

</pre>

## Parameters

####  <a id="decl-reference"></a>reference  : uint
The reference 4 bytes packed in a uint.

####  <a id="decl-source"></a>source  : [vector](../types/vector/index.html)\<uint, 2\>
The source 2 uints packed in a uint2.

####  <a id="decl-accum"></a>accum  : [vector](../types/vector/index.html)\<uint, 4\>
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



