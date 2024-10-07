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

## Generic Parameters

#### N  : int {#decl-N}
#### R  : int {#decl-R}
#### C  : int {#decl-C}

## Parameters

#### value  : int16\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<int16\_t, N\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<int16\_t, R, C\> {#decl-value}
#### value  : uint16\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint16\_t, N\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<uint16\_t, R, C\> {#decl-value}
#### value  : half {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<half, N\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<half, R, C\> {#decl-value}

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



