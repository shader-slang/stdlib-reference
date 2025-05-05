---
layout: stdlib-reference
---

# ProcessTriTessFactorsMax

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/processtritessfactorsmax-07ael">ProcessTriTessFactorsMax</a>(
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="/stdlib-reference/global-decls/processtritessfactorsmax-07ael#decl-RawEdgeFactors" class="code_param">RawEdgeFactors</a>,
    <span class="code_keyword">in</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/processtritessfactorsmax-07ael#decl-InsideScale" class="code_param">InsideScale</a>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="/stdlib-reference/global-decls/processtritessfactorsmax-07ael#decl-RoundedEdgeTessFactors" class="code_param">RoundedEdgeTessFactors</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/processtritessfactorsmax-07ael#decl-RoundedInsideTessFactor" class="code_param">RoundedInsideTessFactor</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/processtritessfactorsmax-07ael#decl-UnroundedInsideTessFactor" class="code_param">UnroundedInsideTessFactor</a>);

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



