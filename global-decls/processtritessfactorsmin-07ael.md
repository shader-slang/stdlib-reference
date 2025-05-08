---
layout: stdlib-reference
---

# ProcessTriTessFactorsMin

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="processtritessfactorsmin-07ael.html">ProcessTriTessFactorsMin</a>(
    <span class="code_keyword">in</span> <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="processtritessfactorsmin-07ael.html#decl-RawEdgeFactors" class="code_param">RawEdgeFactors</a>,
    <span class="code_keyword">in</span> <span class="code_keyword">float</span> <a href="processtritessfactorsmin-07ael.html#decl-InsideScale" class="code_param">InsideScale</a>,
    <span class="code_keyword">out</span> <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 3&gt; <a href="processtritessfactorsmin-07ael.html#decl-RoundedEdgeTessFactors" class="code_param">RoundedEdgeTessFactors</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="processtritessfactorsmin-07ael.html#decl-RoundedInsideTessFactors" class="code_param">RoundedInsideTessFactors</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="processtritessfactorsmin-07ael.html#decl-UnroundedInsideTessFactors" class="code_param">UnroundedInsideTessFactors</a>);

</pre>

## Parameters

####  <a id="decl-RawEdgeFactors"></a>RawEdgeFactors  : [vector](../types/vector/index.html)\<float, 3\>
####  <a id="decl-InsideScale"></a>InsideScale  : float
####  <a id="decl-RoundedEdgeTessFactors"></a>RoundedEdgeTessFactors  : [vector](../types/vector/index.html)\<float, 3\>
####  <a id="decl-RoundedInsideTessFactors"></a>RoundedInsideTessFactors  : float
####  <a id="decl-UnroundedInsideTessFactors"></a>UnroundedInsideTessFactors  : float

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



