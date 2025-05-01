---
layout: stdlib-reference
---

# firstbithigh

## Description

Find first set bit starting at high bit and working down.



## Signature 

<pre>
<span class="code_keyword">int</span> <a href="firstbithigh.html">firstbithigh</a>(<span class="code_keyword">int</span> <a href="firstbithigh.html#decl-value" class="code_param">value</a>);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="firstbithigh.html#decl-N" class="code_var">N</a>&gt; <a href="firstbithigh.html">firstbithigh</a>&lt;<a href="firstbithigh.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="firstbithigh.html#decl-N" class="code_var">N</a>&gt; <a href="firstbithigh.html#decl-value" class="code_param">value</a>);

<span class="code_keyword">uint</span> <a href="firstbithigh.html">firstbithigh</a>(<span class="code_keyword">uint</span> <a href="firstbithigh.html#decl-value" class="code_param">value</a>);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="firstbithigh.html#decl-N" class="code_var">N</a>&gt; <a href="firstbithigh.html">firstbithigh</a>&lt;<a href="firstbithigh.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="firstbithigh.html#decl-N" class="code_var">N</a>&gt; <a href="firstbithigh.html#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-value"></a>value  : int
The value to find set bits in.

####  <a id="decl-value"></a>value  : [vector](../types/vector/index)\<int, [N](../types/vector/index#decl-N)\>
The value to find set bits in.

####  <a id="decl-value"></a>value  : uint
The value to find set bits in.

####  <a id="decl-value"></a>value  : [vector](../types/vector/index)\<uint, [N](../types/vector/index#decl-N)\>
The value to find set bits in.


## Return value
The bit index number of the most significant bit,
or returns -1 if <span class='code'><a href="firstbithigh.html#decl-value" class="code_param">value</a></span> is either 0 if value is
a signed type and equal to -1.

## Remarks
If <span class='code'><a href="firstbithigh.html#decl-value" class="code_param">value</a></span> is unsigned, or signed with positive value, the bit index returned is the highest 1-bit.
If <span class='code'><a href="firstbithigh.html#decl-value" class="code_param">value</a></span> is signed with negative value, the bit index returned is the highest 0-bit.
For SPIR-V, this function maps to GLSL extended instruction <span class='code'>FindSMsb</span> if <span class='code'><a href="firstbithigh.html#decl-value" class="code_param">value</a></span> is signed,
or <span class='code'>FindUMsb</span> if <span class='code'><a href="firstbithigh.html#decl-value" class="code_param">value</a></span> is unsigned.


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



