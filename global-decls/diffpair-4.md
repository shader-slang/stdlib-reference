---
layout: stdlib-reference
---

# diffPair

## Description

Constructs a <span class='code'><a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a></span> value from a primal value and a differential value.




## Signature 

<pre>
<a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/global-decls/diffpair-4#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/diffpair-4">diffPair</a>&lt;<a href="/stdlib-reference/global-decls/diffpair-4#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/diffpair-4#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/diffpair-4#decl-primal" class="code_param">primal</a>,
    <a href="/stdlib-reference/global-decls/diffpair-4#typeparam-T" class="code_type">T</a>.Differential <a href="/stdlib-reference/global-decls/diffpair-4#decl-diff" class="code_param">diff</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/diffpair-4#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/idifferentiable-01/index" class="code_type">IDifferentiable</a>;

<a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/global-decls/diffpair-4#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/diffpair-4">diffPair</a>&lt;<a href="/stdlib-reference/global-decls/diffpair-4#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/diffpair-4#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/diffpair-4#decl-primal" class="code_param">primal</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/diffpair-4#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/idifferentiable-01/index" class="code_type">IDifferentiable</a>;

</pre>

## Generic Parameters

#### T: [IDifferentiable](/stdlib-reference/interfaces/idifferentiable-01/index) {#typeparam-T}

## Parameters

#### primal  : [T](/stdlib-reference/global-decls/diffpair-4#typeparam-T) {#decl-primal}
#### diff  : [T](/stdlib-reference/global-decls/diffpair-4#typeparam-T)\.Differential {#decl-diff}

