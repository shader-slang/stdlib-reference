---
layout: stdlib-reference
---

# ProcessTriTessFactorsAvg

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg">ProcessTriTessFactorsAvg</a>(
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-RawEdgeFactors" class="code_param">RawEdgeFactors</a>,
    <span class="code_keyword">in</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-InsideScale" class="code_param">InsideScale</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-RoundedEdgeTessFactors" class="code_param">RoundedEdgeTessFactors</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-RoundedInsideTessFactor" class="code_param">RoundedInsideTessFactor</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsAvg#decl-UnroundedInsideTessFactor" class="code_param">UnroundedInsideTessFactor</a>);

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



