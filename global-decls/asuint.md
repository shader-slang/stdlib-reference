---
layout: stdlib-reference
---

# asuint

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/asuint">asuint</a>(
    <span class="code_keyword">double</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>lowbits</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>highbits</span>);

<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asuint">asuint</a>(<span class="code_keyword">float</span> <span class='code_param'>x</span>);

<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asuint">asuint</a>(<span class="code_keyword">int</span> <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; <span class='code_param'>x</span>);

<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asuint">asuint</a>(<span class="code_keyword">uint</span> <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; <span class='code_param'>x</span>);

</pre>

## Parameters

#### N : int
#### M : int
#### value : double
#### lowbits : uint
#### highbits : uint
#### x : float
#### x : int
#### x : vector\<float,N\>
#### x : vector\<int,N\>
#### x : matrix\<float,N,M\>
#### x : matrix\<int,N,M\>
#### x : uint
#### x : vector\<uint,N\>
#### x : matrix\<uint,N,M\>

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



