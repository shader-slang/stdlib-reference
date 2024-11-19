---
layout: stdlib-reference
---

# noise

## Description

Generate a random number (unsupported).




## Signature 

<pre>
<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/noise">noise</a>(<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/noise#decl-x" class="code_param">x</a>);

<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/noise">noise</a>&lt;<a href="/stdlib-reference/global-decls/noise#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/noise#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/noise#decl-x" class="code_param">x</a>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}

## Parameters

#### x  : float {#decl-x}
The seed value.

#### x  : [vector](/stdlib-reference/types/vector/index)\<float, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The seed value.


## Remarks
This function is not supported in that it always returns 0.

