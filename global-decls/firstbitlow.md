---
layout: stdlib-reference
---

# firstbitlow

## Description

Find first set bit starting at low bit and working up.



## Signature 

<pre>
<span class="code_keyword">int</span> <a href="firstbitlow.html">firstbitlow</a>(<span class="code_keyword">int</span> <a href="firstbitlow.html#decl-value" class="code_param">value</a>);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="firstbitlow.html#decl-N" class="code_var">N</a>&gt; <a href="firstbitlow.html">firstbitlow</a>&lt;<a href="firstbitlow.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="firstbitlow.html#decl-N" class="code_var">N</a>&gt; <a href="firstbitlow.html#decl-value" class="code_param">value</a>);

<span class="code_keyword">uint</span> <a href="firstbitlow.html">firstbitlow</a>(<span class="code_keyword">uint</span> <a href="firstbitlow.html#decl-value" class="code_param">value</a>);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="firstbitlow.html#decl-N" class="code_var">N</a>&gt; <a href="firstbitlow.html">firstbitlow</a>&lt;<a href="firstbitlow.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="firstbitlow.html#decl-N" class="code_var">N</a>&gt; <a href="firstbitlow.html#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-value"></a>value  : int
The value to find set bits in.

####  <a id="decl-value"></a>value  : [vector](../types/vector/index.html)\<int, [N](../types/vector/index.html#decl-N)\>
The value to find set bits in.

####  <a id="decl-value"></a>value  : uint
The value to find set bits in.

####  <a id="decl-value"></a>value  : [vector](../types/vector/index.html)\<uint, [N](../types/vector/index.html#decl-N)\>
The value to find set bits in.


## Return value
The bit index number of the least significant set bit,
or all ones (-1 when interpretted as signed) if <span class='code'><a href="firstbitlow.html#decl-value" class="code_param">value</a></span> is 0.

## Remarks
For SPIR-V, this function maps to GLSL extended instruction <span class='code'>FindILsb</span>.


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



