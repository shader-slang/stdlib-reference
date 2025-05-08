---
layout: stdlib-reference
---

# ProcessQuadTessFactorsMax

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="processquadtessfactorsmax-07bfm.html">ProcessQuadTessFactorsMax</a>(
    <span class="code_keyword">in</span> <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <a href="processquadtessfactorsmax-07bfm.html#decl-RawEdgeFactors" class="code_param">RawEdgeFactors</a>,
    <span class="code_keyword">in</span> <span class="code_keyword">float</span> <a href="processquadtessfactorsmax-07bfm.html#decl-InsideScale" class="code_param">InsideScale</a>,
    <span class="code_keyword">out</span> <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <a href="processquadtessfactorsmax-07bfm.html#decl-RoundedEdgeTessFactors" class="code_param">RoundedEdgeTessFactors</a>,
    <span class="code_keyword">out</span> <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="processquadtessfactorsmax-07bfm.html#decl-RoundedInsideTessFactors" class="code_param">RoundedInsideTessFactors</a>,
    <span class="code_keyword">out</span> <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <a href="processquadtessfactorsmax-07bfm.html#decl-UnroundedInsideTessFactors" class="code_param">UnroundedInsideTessFactors</a>);

</pre>

## Parameters

####  <a id="decl-RawEdgeFactors"></a>RawEdgeFactors  : [vector](../types/vector/index.html)\<float, 4\>
####  <a id="decl-InsideScale"></a>InsideScale  : float
####  <a id="decl-RoundedEdgeTessFactors"></a>RoundedEdgeTessFactors  : [vector](../types/vector/index.html)\<float, 4\>
####  <a id="decl-RoundedInsideTessFactors"></a>RoundedInsideTessFactors  : [vector](../types/vector/index.html)\<float, 2\>
####  <a id="decl-UnroundedInsideTessFactors"></a>UnroundedInsideTessFactors  : [vector](../types/vector/index.html)\<float, 2\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



