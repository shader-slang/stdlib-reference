---
layout: stdlib-reference
---

# firstbithigh

## Description

Find first set bit starting at high bit and working down.



## Signature 

<pre>
<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/firstbithigh">firstbithigh</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/firstbithigh#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/firstbithigh#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/firstbithigh">firstbithigh</a>&lt;<a href="/stdlib-reference/global-decls/firstbithigh#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/firstbithigh#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/firstbithigh#decl-value" class="code_param">value</a>);

<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/firstbithigh">firstbithigh</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/firstbithigh#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/firstbithigh#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/firstbithigh">firstbithigh</a>&lt;<a href="/stdlib-reference/global-decls/firstbithigh#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/firstbithigh#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/firstbithigh#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}

## Parameters

#### value  : int {#decl-value}
The value to find set bits in.

#### value  : [vector](/stdlib-reference/types/vector/index)\<int, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
The value to find set bits in.

#### value  : uint {#decl-value}
The value to find set bits in.

#### value  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
The value to find set bits in.


## Return value
The bit index number of the most significant bit,
or returns -1 if <span class='code'><a href="/stdlib-reference/global-decls/firstbithigh#decl-value" class="code_param">value</a></span> is either 0 if value is
a signed type and equal to -1.

## Remarks
If <span class='code'><a href="/stdlib-reference/global-decls/firstbithigh#decl-value" class="code_param">value</a></span> is unsigned, or signed with positive value, the bit index returned is the highest 1-bit.
If <span class='code'><a href="/stdlib-reference/global-decls/firstbithigh#decl-value" class="code_param">value</a></span> is signed with negative value, the bit index returned is the highest 0-bit.
For SPIR-V, this function maps to GLSL extended instruction <span class='code'>FindSMsb</span> if <span class='code'><a href="/stdlib-reference/global-decls/firstbithigh#decl-value" class="code_param">value</a></span> is signed,
or <span class='code'>FindUMsb</span> if <span class='code'><a href="/stdlib-reference/global-decls/firstbithigh#decl-value" class="code_param">value</a></span> is unsigned.


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



