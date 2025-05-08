---
layout: stdlib-reference
---

# diffPair

## Description

Constructs a <span class='code'><a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a></span> value from a primal value and a differential value.




## Signature 

<pre>
<a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="diffpair-4.html#typeparam-T" class="code_type">T</a>&gt; <a href="diffpair-4.html">diffPair</a>&lt;<a href="diffpair-4.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="diffpair-4.html#typeparam-T" class="code_type">T</a> <a href="diffpair-4.html#decl-primal" class="code_param">primal</a>,
    <a href="diffpair-4.html#typeparam-T" class="code_type">T</a>.Differential <a href="diffpair-4.html#decl-diff" class="code_param">diff</a>)
    <span class='code_keyword'>where</span> <a href="diffpair-4.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

<a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="diffpair-4.html#typeparam-T" class="code_type">T</a>&gt; <a href="diffpair-4.html">diffPair</a>&lt;<a href="diffpair-4.html#typeparam-T" class="code_type">T</a>&gt;(<a href="diffpair-4.html#typeparam-T" class="code_type">T</a> <a href="diffpair-4.html#decl-primal" class="code_param">primal</a>)
    <span class='code_keyword'>where</span> <a href="diffpair-4.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IDifferentiable](../interfaces/idifferentiable-01/index.html)

## Parameters

####  <a id="decl-primal"></a>primal  : [T](diffpair-4.html#typeparam-T)
####  <a id="decl-diff"></a>diff  : [T](diffpair-4.html#typeparam-T)\.Differential

