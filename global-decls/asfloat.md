---
layout: stdlib-reference
---

# asfloat

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/asfloat#decl-x" class="code_param">x</a>);

/// Requires Capability Set 1:
<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asfloat#decl-x" class="code_param">x</a>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;<a href="/stdlib-reference/global-decls/asfloat#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asfloat#decl-x" class="code_param">x</a>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;<a href="/stdlib-reference/global-decls/asfloat#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asfloat#decl-x" class="code_param">x</a>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;<a href="/stdlib-reference/global-decls/asfloat#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/asfloat#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asfloat#decl-x" class="code_param">x</a>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;<a href="/stdlib-reference/global-decls/asfloat#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/asfloat#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asfloat#decl-x" class="code_param">x</a>);

<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>(<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/asfloat#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;<a href="/stdlib-reference/global-decls/asfloat#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asfloat#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;<a href="/stdlib-reference/global-decls/asfloat#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/asfloat#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asfloat#decl-x" class="code_param">x</a>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : int {#decl-x}
#### x  : uint {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<int, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<int, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<uint, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
#### x  : float {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<float, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<float, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}

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

#### wgsl
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

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



