---
layout: stdlib-reference
---

# ProcessTriTessFactorsMax

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsMax">ProcessTriTessFactorsMax</a>(
    in <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 3&gt; <span class='code_param'>RawEdgeFactors</span>,
    in float <span class='code_param'>InsideScale</span>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 3&gt; <span class='code_param'>RoundedEdgeTessFactors</span>,
    out float <span class='code_param'>RoundedInsideTessFactor</span>,
    out float <span class='code_param'>UnroundedInsideTessFactor</span>);

</pre>

## Parameters

#### RawEdgeFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-RawEdgeFactors}
#### InsideScale  : float {#decl-InsideScale}
#### RoundedEdgeTessFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-RoundedEdgeTessFactors}
#### RoundedInsideTessFactor  : float {#decl-RoundedInsideTessFactor}
#### UnroundedInsideTessFactor  : float {#decl-UnroundedInsideTessFactor}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



