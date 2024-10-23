---
layout: stdlib-reference
---

# firstbitlow

## Description

Find first set bit starting at low bit and working up.



## Signature 

<pre>
<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/firstbitlow">firstbitlow</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/firstbitlow#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/firstbitlow#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/firstbitlow">firstbitlow</a>&lt;<a href="/stdlib-reference/global-decls/firstbitlow#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/firstbitlow#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/firstbitlow#decl-value" class="code_param">value</a>);

<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/firstbitlow">firstbitlow</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/firstbitlow#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/firstbitlow#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/firstbitlow">firstbitlow</a>&lt;<a href="/stdlib-reference/global-decls/firstbitlow#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/firstbitlow#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/firstbitlow#decl-value" class="code_param">value</a>);

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
The bit index number of the least significant set bit,
or all ones (-1 when interpretted as signed) if <span class='code'><a href="/stdlib-reference/global-decls/firstbitlow#decl-value" class="code_param">value</a></span> is 0.

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



