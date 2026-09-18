---
layout: stdlib-reference
---

# lit\.apply\_bwd

## Description

Legacy lighting function (obsolete).




## Signature 

<pre>
<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt;, __syn_BackwardDiffMinimalContextType__S4core10__lit_implp3pi_fi_fi_fv4fb&gt; <a href="../../global-decls/lit.html">lit</a>.apply_bwd(
    <span class="code_keyword">float</span> ,
    <span class="code_keyword">float</span> ,
    <span class="code_keyword">float</span> );

</pre>

## Parameters


## Return value
The lighting coefficients, (ambient, diffuse, specular, 1.0).

## Remarks
In HLSL, this function is implemented as an intrinsic. It is emulated for other targets.

