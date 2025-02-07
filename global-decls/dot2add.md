---
layout: stdlib-reference
---

# dot2add

## Description

Computes <span class='code'><a href="/stdlib-reference/global-decls/dot">dot</a>(left, right)+acc</span>.
May not produce infinities or NaNs for intermediate results that overflow the range of <span class='code'><span class="code_keyword">half</span></span>




## Signature 

<pre>
<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/dot2add">dot2add</a>(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="/stdlib-reference/global-decls/dot2add#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="/stdlib-reference/global-decls/dot2add#decl-right" class="code_param">right</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/dot2add#decl-acc" class="code_param">acc</a>);

</pre>

## Parameters

#### left  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-right}
#### acc  : float {#decl-acc}

