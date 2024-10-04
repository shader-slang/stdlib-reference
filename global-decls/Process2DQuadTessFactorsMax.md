---
layout: stdlib-reference
---

# Process2DQuadTessFactorsMax

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/Process2DQuadTessFactorsMax">Process2DQuadTessFactorsMax</a>(
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <span class='code_param'>RawEdgeFactors</span>,
    <span class="code_keyword">in</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <span class='code_param'>InsideScale</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 4&gt; <span class='code_param'>RoundedEdgeTessFactors</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <span class='code_param'>RoundedInsideTessFactors</span>,
    <span class="code_keyword">out</span> <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, 2&gt; <span class='code_param'>UnroundedInsideTessFactors</span>);

</pre>

## Parameters

#### RawEdgeFactors : vector\<float,4\>
#### InsideScale : vector\<float,2\>
#### RoundedEdgeTessFactors : vector\<float,4\>
#### RoundedInsideTessFactors : vector\<float,2\>
#### UnroundedInsideTessFactors : vector\<float,2\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



