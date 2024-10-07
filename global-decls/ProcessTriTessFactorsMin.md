---
layout: stdlib-reference
---

# ProcessTriTessFactorsMin

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsMin">ProcessTriTessFactorsMin</a>(
    in <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 3&gt; <span class='code_param'>RawEdgeFactors</span>,
    in float <span class='code_param'>InsideScale</span>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 3&gt; <span class='code_param'>RoundedEdgeTessFactors</span>,
    out float <span class='code_param'>RoundedInsideTessFactors</span>,
    out float <span class='code_param'>UnroundedInsideTessFactors</span>);

</pre>

## Parameters

#### RawEdgeFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-RawEdgeFactors}
#### InsideScale  : float {#decl-InsideScale}
#### RoundedEdgeTessFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-RoundedEdgeTessFactors}
#### RoundedInsideTessFactors  : float {#decl-RoundedInsideTessFactors}
#### UnroundedInsideTessFactors  : float {#decl-UnroundedInsideTessFactors}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



