---
layout: stdlib-reference
---

# asfloat16

## Description





## Signature 

<pre>
<span class="code_keyword">half</span> <a href="/stdlib-reference/global-decls/asfloat16">asfloat16</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <a href="/stdlib-reference/global-decls/asfloat16">asfloat16</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <a href="/stdlib-reference/global-decls/asfloat16">asfloat16</a>&lt;R:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>);

/// Requires Capability Set 1:
<span class="code_keyword">half</span> <a href="/stdlib-reference/global-decls/asfloat16">asfloat16</a>(uint16_t <span class='code_param'>value</span>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <a href="/stdlib-reference/global-decls/asfloat16">asfloat16</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <a href="/stdlib-reference/global-decls/asfloat16">asfloat16</a>&lt;R:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>);

/// Requires Capability Set 2:
<span class="code_keyword">half</span> <a href="/stdlib-reference/global-decls/asfloat16">asfloat16</a>(int16_t <span class='code_param'>value</span>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <a href="/stdlib-reference/global-decls/asfloat16">asfloat16</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>);

/// Requires Capability Set 3:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <a href="/stdlib-reference/global-decls/asfloat16">asfloat16</a>&lt;R:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>);

</pre>

## Parameters

#### N  : int
#### R  : int
#### C  : int
#### value  : half
#### value  : [vector](/stdlib-reference/types/vector/index)\<half, N\>
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<half, R, C\>
#### value  : uint16\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint16\_t, N\>
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<uint16\_t, R, C\>
#### value  : int16\_t
#### value  : [vector](/stdlib-reference/types/vector/index)\<int16\_t, N\>
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<int16\_t, R, C\>

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 3

Defined for the following targets:

#### hlsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.



