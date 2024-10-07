---
layout: stdlib-reference
---

# ProcessQuadTessFactorsMax

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/ProcessQuadTessFactorsMax">ProcessQuadTessFactorsMax</a>(
    in <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 4&gt; <a href="/stdlib-reference/global-decls/ProcessQuadTessFactorsMax#decl-RawEdgeFactors" class="code_param">RawEdgeFactors</a>,
    in float <a href="/stdlib-reference/global-decls/ProcessQuadTessFactorsMax#decl-InsideScale" class="code_param">InsideScale</a>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 4&gt; <a href="/stdlib-reference/global-decls/ProcessQuadTessFactorsMax#decl-RoundedEdgeTessFactors" class="code_param">RoundedEdgeTessFactors</a>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 2&gt; <a href="/stdlib-reference/global-decls/ProcessQuadTessFactorsMax#decl-RoundedInsideTessFactors" class="code_param">RoundedInsideTessFactors</a>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, 2&gt; <a href="/stdlib-reference/global-decls/ProcessQuadTessFactorsMax#decl-UnroundedInsideTessFactors" class="code_param">UnroundedInsideTessFactors</a>);

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



