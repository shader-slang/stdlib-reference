---
layout: stdlib-reference
---

# asfloat

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>(<span class="code_keyword">int</span> <span class='code_param'>x</span>);

/// Requires Capability Set 1:
<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>(<span class="code_keyword">uint</span> <span class='code_param'>x</span>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>x</span>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>x</span>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; <span class='code_param'>x</span>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; <span class='code_param'>x</span>);

<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>(<span class="code_keyword">float</span> <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; <span class='code_param'>x</span>);

</pre>

## Parameters

#### N : int
#### M : int
#### x : int
#### x : uint
#### x : vector\<int,N\>
#### x : vector\<uint,N\>
#### x : matrix\<int,N,M\>
#### x : matrix\<uint,N,M\>
#### x : float
#### x : vector\<float,N\>
#### x : matrix\<float,N,M\>

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



