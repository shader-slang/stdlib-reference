---
layout: stdlib-reference
---

# ProcessTriTessFactorsMin

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsMin">ProcessTriTessFactorsMin</a>(
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <span class='code_param'>RawEdgeFactors</span>,
    <span class="code_keyword">in</span> <span class="code_keyword">float</span> <span class='code_param'>InsideScale</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <span class='code_param'>RoundedEdgeTessFactors</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>RoundedInsideTessFactors</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>UnroundedInsideTessFactors</span>);

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



