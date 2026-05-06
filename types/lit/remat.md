---
layout: stdlib-reference
---

# lit\.remat

## Description

Legacy lighting function (obsolete).




## Signature 

<pre>
__syn_BackwardDiffIntermediateContextType__S4core10__lit_implp3pi_fi_fi_fv4fb <a href="../../global-decls/lit.html">lit</a>.remat(
    __syn_BackwardDiffMinimalContextType__S4core10__lit_implp3pi_fi_fi_fv4fb ,
    <span class="code_keyword">float</span> ,
    <span class="code_keyword">float</span> ,
    <span class="code_keyword">float</span> );

</pre>

## Parameters


## Return value
The lighting coefficients, (ambient, diffuse, specular, 1.0).

## Remarks
In HLSL, this function is implemented as an intrinsic. It is emulated for other targets.

