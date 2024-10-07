---
layout: stdlib-reference
---

# ProcessQuadTessFactorsMax

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/ProcessQuadTessFactorsMax">ProcessQuadTessFactorsMax</a>(
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <span class='code_param'>RawEdgeFactors</span>,
    <span class="code_keyword">in</span> <span class="code_keyword">float</span> <span class='code_param'>InsideScale</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <span class='code_param'>RoundedEdgeTessFactors</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <span class='code_param'>RoundedInsideTessFactors</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <span class='code_param'>UnroundedInsideTessFactors</span>);

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



