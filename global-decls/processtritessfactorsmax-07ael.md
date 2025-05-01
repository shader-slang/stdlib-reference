---
layout: stdlib-reference
---

# ProcessTriTessFactorsMax

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="processtritessfactorsmax-07ael.html">ProcessTriTessFactorsMax</a>(
    <span class="code_keyword">in</span> <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="processtritessfactorsmax-07ael.html#decl-RawEdgeFactors" class="code_param">RawEdgeFactors</a>,
    <span class="code_keyword">in</span> <span class="code_keyword">float</span> <a href="processtritessfactorsmax-07ael.html#decl-InsideScale" class="code_param">InsideScale</a>,
    <span class="code_keyword">out</span> <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="processtritessfactorsmax-07ael.html#decl-RoundedEdgeTessFactors" class="code_param">RoundedEdgeTessFactors</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="processtritessfactorsmax-07ael.html#decl-RoundedInsideTessFactor" class="code_param">RoundedInsideTessFactor</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="processtritessfactorsmax-07ael.html#decl-UnroundedInsideTessFactor" class="code_param">UnroundedInsideTessFactor</a>);

</pre>

## Parameters

####  <a id="decl-RawEdgeFactors"></a>RawEdgeFactors  : [vector](../types/vector/index)\<float, 3\>
####  <a id="decl-InsideScale"></a>InsideScale  : float
####  <a id="decl-RoundedEdgeTessFactors"></a>RoundedEdgeTessFactors  : [vector](../types/vector/index)\<float, 3\>
####  <a id="decl-RoundedInsideTessFactor"></a>RoundedInsideTessFactor  : float
####  <a id="decl-UnroundedInsideTessFactor"></a>UnroundedInsideTessFactor  : float

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



