---
layout: stdlib-reference
---

# updatePair

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/updatepair-6">updatePair</a>&lt;<a href="/stdlib-reference/global-decls/updatepair-6#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/global-decls/updatepair-6#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/updatepair-6#decl-p" class="code_param">p</a>,
    <a href="/stdlib-reference/global-decls/updatepair-6#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/updatepair-6#decl-newPrimal" class="code_param">newPrimal</a>,
    <a href="/stdlib-reference/global-decls/updatepair-6#typeparam-T" class="code_type">T</a>.Differential <a href="/stdlib-reference/global-decls/updatepair-6#decl-newDiff" class="code_param">newDiff</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/updatepair-6#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/idifferentiable-01/index" class="code_type">IDifferentiable</a>;

</pre>

## Generic Parameters

#### T: [IDifferentiable](/stdlib-reference/interfaces/idifferentiable-01/index) {#typeparam-T}

## Parameters

#### p  : [DifferentialPair](/stdlib-reference/types/differentialpair-0c/index)\<[T](/stdlib-reference/types/differentialpair-0c/index#typeparam-T)\> {#decl-p}
#### newPrimal  : [T](/stdlib-reference/global-decls/updatepair-6#typeparam-T) {#decl-newPrimal}
#### newDiff  : [T](/stdlib-reference/global-decls/updatepair-6#typeparam-T)\.Differential {#decl-newDiff}

