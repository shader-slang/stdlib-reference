---
layout: stdlib-reference
---

# Process2DQuadTessFactorsAvg

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/Process2DQuadTessFactorsAvg">Process2DQuadTessFactorsAvg</a>(
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <span class='code_param'>RawEdgeFactors</span>,
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <span class='code_param'>InsideScale</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <span class='code_param'>RoundedEdgeTessFactors</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <span class='code_param'>RoundedInsideTessFactors</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <span class='code_param'>UnroundedInsideTessFactors</span>);

</pre>

## Parameters

* `RawEdgeFactors`
* `InsideScale`
* `RoundedEdgeTessFactors`
* `RoundedInsideTessFactors`
* `UnroundedInsideTessFactors`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



