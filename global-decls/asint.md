---
layout: stdlib-reference
---

# asint

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/asint">asint</a>(<span class="code_keyword">float</span> <span class='code_param'>x</span>);

/// Requires Capability Set 1:
<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/asint">asint</a>(<span class="code_keyword">uint</span> <span class='code_param'>x</span>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <a href="/stdlib-reference/global-decls/asint">asint</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>x</span>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <a href="/stdlib-reference/global-decls/asint">asint</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>x</span>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; <a href="/stdlib-reference/global-decls/asint">asint</a>&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; <span class='code_param'>x</span>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; <a href="/stdlib-reference/global-decls/asint">asint</a>&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; <span class='code_param'>x</span>);

<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/asint">asint</a>(<span class="code_keyword">int</span> <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <a href="/stdlib-reference/global-decls/asint">asint</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; <a href="/stdlib-reference/global-decls/asint">asint</a>&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; <span class='code_param'>x</span>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : float {#decl-x}
#### x  : uint {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<float, N\> {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<uint, N\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<float, N, M\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<uint, N, M\> {#decl-x}
#### x  : int {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<int, N\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<int, N, M\> {#decl-x}

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



