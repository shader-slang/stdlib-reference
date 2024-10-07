---
layout: stdlib-reference
---

# ProcessTriTessFactorsAvg

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg">ProcessTriTessFactorsAvg</a>(
    in <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 3&gt; <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-RawEdgeFactors" class="code_param">RawEdgeFactors</a>,
    in float <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-InsideScale" class="code_param">InsideScale</a>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 3&gt; <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-RoundedEdgeTessFactors" class="code_param">RoundedEdgeTessFactors</a>,
    out float <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-RoundedInsideTessFactor" class="code_param">RoundedInsideTessFactor</a>,
    out float <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-UnroundedInsideTessFactor" class="code_param">UnroundedInsideTessFactor</a>);

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



