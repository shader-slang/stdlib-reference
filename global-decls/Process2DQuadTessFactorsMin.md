---
layout: stdlib-reference
---

# Process2DQuadTessFactorsMin

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/Process2DQuadTessFactorsMin">Process2DQuadTessFactorsMin</a>(
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <a href="/stdlib-reference/global-decls/Process2DQuadTessFactorsMin#decl-RawEdgeFactors" class="code_param">RawEdgeFactors</a>,
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="/stdlib-reference/global-decls/Process2DQuadTessFactorsMin#decl-InsideScale" class="code_param">InsideScale</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <a href="/stdlib-reference/global-decls/Process2DQuadTessFactorsMin#decl-RoundedEdgeTessFactors" class="code_param">RoundedEdgeTessFactors</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="/stdlib-reference/global-decls/Process2DQuadTessFactorsMin#decl-RoundedInsideTessFactors" class="code_param">RoundedInsideTessFactors</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="/stdlib-reference/global-decls/Process2DQuadTessFactorsMin#decl-UnroundedInsideTessFactors" class="code_param">UnroundedInsideTessFactors</a>);

</pre>

## Parameters

#### RawEdgeFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 4\> {#decl-RawEdgeFactors}
#### InsideScale  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-InsideScale}
#### RoundedEdgeTessFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 4\> {#decl-RoundedEdgeTessFactors}
#### RoundedInsideTessFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-RoundedInsideTessFactors}
#### UnroundedInsideTessFactors  : [vector](/stdlib-reference/types/vector/index)\<float, 2\> {#decl-UnroundedInsideTessFactors}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



