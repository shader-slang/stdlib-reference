---
layout: stdlib-reference
---

# lit\.fwd\_diff

## Description

Legacy lighting function (obsolete).




## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt;&gt; <a href="../../global-decls/lit.html">lit</a>.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<span class="code_keyword">float</span>&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<span class="code_keyword">float</span>&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<span class="code_keyword">float</span>&gt; );

</pre>

## Parameters


## Return value
The lighting coefficients, (ambient, diffuse, specular, 1.0).

## Remarks
In HLSL, this function is implemented as an intrinsic. It is emulated for other targets.

