---
layout: stdlib-reference
---

# updateDiff

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="updatediff-6.html">updateDiff</a>&lt;<a href="updatediff-6.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">inout</span> <a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="updatediff-6.html#typeparam-T" class="code_type">T</a>&gt; <a href="updatediff-6.html#decl-p" class="code_param">p</a>,
    <a href="updatediff-6.html#typeparam-T" class="code_type">T</a>.Differential <a href="updatediff-6.html#decl-newDiff" class="code_param">newDiff</a>)
    <span class='code_keyword'>where</span> <a href="updatediff-6.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IDifferentiable](../interfaces/idifferentiable-01/index.html)

## Parameters

####  <a id="decl-p"></a>p  : [DifferentialPair](../types/differentialpair-0c/index.html)\<[T](../types/differentialpair-0c/index.html#typeparam-T)\>
####  <a id="decl-newDiff"></a>newDiff  : [T](updatediff-6.html#typeparam-T)\.Differential

