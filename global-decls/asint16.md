---
layout: stdlib-reference
---

# asint16

## Description





## Signature 

<pre>
int16_t <a href="/stdlib-reference/global-decls/asint16">asint16</a>(int16_t <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <a href="/stdlib-reference/global-decls/asint16">asint16</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <a href="/stdlib-reference/global-decls/asint16">asint16</a>&lt;R:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <span class='code_param'>value</span>);

int16_t <a href="/stdlib-reference/global-decls/asint16">asint16</a>(uint16_t <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <a href="/stdlib-reference/global-decls/asint16">asint16</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; <span class='code_param'>value</span>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <a href="/stdlib-reference/global-decls/asint16">asint16</a>&lt;R:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, R, C&gt; <span class='code_param'>value</span>);

/// Requires Capability Set 1:
int16_t <a href="/stdlib-reference/global-decls/asint16">asint16</a>(<span class="code_keyword">half</span> <span class='code_param'>value</span>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; <a href="/stdlib-reference/global-decls/asint16">asint16</a>&lt;N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; <span class='code_param'>value</span>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, R, C&gt; <a href="/stdlib-reference/global-decls/asint16">asint16</a>&lt;R:<span class="code_keyword">int</span>, C:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, R, C&gt; <span class='code_param'>value</span>);

</pre>

## Parameters

#### N : int
#### R : int
#### C : int
#### value : int16\_t
#### value : vector\<int16\_t,N\>
#### value : matrix\<int16\_t,R,C\>
#### value : uint16\_t
#### value : vector\<uint16\_t,N\>
#### value : matrix\<uint16\_t,R,C\>
#### value : half
#### value : vector\<half,N\>
#### value : matrix\<half,R,C\>

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.



