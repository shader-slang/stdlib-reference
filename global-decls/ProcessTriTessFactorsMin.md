---
layout: stdlib-reference
---

# ProcessTriTessFactorsMin

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsMin">ProcessTriTessFactorsMin</a>(
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsMin#decl-RawEdgeFactors" class="code_param">RawEdgeFactors</a>,
    <span class="code_keyword">in</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsMin#decl-InsideScale" class="code_param">InsideScale</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsMin#decl-RoundedEdgeTessFactors" class="code_param">RoundedEdgeTessFactors</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsMin#decl-RoundedInsideTessFactors" class="code_param">RoundedInsideTessFactors</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/ProcessTriTessFactorsMin#decl-UnroundedInsideTessFactors" class="code_param">UnroundedInsideTessFactors</a>);

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



