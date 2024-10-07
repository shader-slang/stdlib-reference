---
layout: stdlib-reference
---

# ProcessQuadTessFactorsMax

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/ProcessQuadTessFactorsMax">ProcessQuadTessFactorsMax</a>(
    in <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 4&gt; <span class='code_param'>RawEdgeFactors</span>,
    in float <span class='code_param'>InsideScale</span>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 4&gt; <span class='code_param'>RoundedEdgeTessFactors</span>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 2&gt; <span class='code_param'>RoundedInsideTessFactors</span>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 2&gt; <span class='code_param'>UnroundedInsideTessFactors</span>);

</pre>

## Parameters

#### RawEdgeFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 4\> {#decl-RawEdgeFactors}
#### InsideScale  : float {#decl-InsideScale}
#### RoundedEdgeTessFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 4\> {#decl-RoundedEdgeTessFactors}
#### RoundedInsideTessFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-RoundedInsideTessFactors}
#### UnroundedInsideTessFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-UnroundedInsideTessFactors}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



