---
layout: stdlib-reference
---

# reversebits

## Description

Reverse order of bits.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="reversebits.html">reversebits</a>(<span class="code_keyword">uint</span> <a href="reversebits.html#decl-value" class="code_param">value</a>);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="reversebits.html#decl-N" class="code_var">N</a>&gt; <a href="reversebits.html">reversebits</a>&lt;<a href="reversebits.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="reversebits.html#decl-N" class="code_var">N</a>&gt; <a href="reversebits.html#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-value"></a>value  : uint
The value to reverse bits of.

####  <a id="decl-value"></a>value  : [vector](../types/vector/index.html)\<uint, [N](../types/vector/index.html#decl-N)\>
The value to reverse bits of.


## Return value
The bits of <span class='code'><a href="reversebits.html#decl-value" class="code_param">value</a></span>, reversed such that bit n of the result is equal to bit (width - 1 - n) of <span class='code'><a href="reversebits.html#decl-value" class="code_param">value</a></span>.

## Remarks
For SPIR-V, this function maps to <span class='code'>OpBitReverse</span>.


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



