---
layout: stdlib-reference
---

# DifferentialPair\<T\>\.dadd\.remat

## Description





## Signature 

<pre>
<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="../differentialpair-0c/dadd.html">dadd</a>.remat(
     ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>.Differential&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>.Differential&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="../vector/dadd.html">dadd</a>.remat(
     ,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; ,
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.<a href="../matrix/dadd.html">dadd</a>.remat(
     ,
    <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt; ,
    <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

__syn_BackwardDiffIntermediateContextType__S4core16NullDifferential4daddp2pi_4core16NullDifferentiali_4core16NullDifferential4core16NullDifferentialb <a href="../nulldifferential-04/index.html" class="code_type">NullDifferential</a>.<a href="../nulldifferential-04/dadd.html">dadd</a>.remat(
    __syn_BackwardDiffMinimalContextType__S4core16NullDifferential4daddp2pi_4core16NullDifferentiali_4core16NullDifferential4core16NullDifferentialb ,
    <a href="../nulldifferential-04/index.html" class="code_type">NullDifferential</a> ,
    <a href="../nulldifferential-04/index.html" class="code_type">NullDifferential</a> );

<a href="index.html#typeparam-T" class="code_type">T</a>[<a href="index.html#decl-N" class="code_var">N</a>].dadd.<a href="remat.html">remat</a>(
     ,
    <a href="index.html#typeparam-T" class="code_type">T</a>.Differential[<a href="index.html#decl-N" class="code_var">N</a>] ,
    <a href="index.html#typeparam-T" class="code_type">T</a>.Differential[<a href="index.html#decl-N" class="code_var">N</a>] )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

<a href="../optional-0/index.html" class="code_type">Optional</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="../optional-0/dadd.html">dadd</a>.remat(
     ,
    <a href="../optional-0/index.html" class="code_type">Optional</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>.Differential&gt; ,
    <a href="../optional-0/index.html" class="code_type">Optional</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>.Differential&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="../tuple-0/dadd.html">dadd</a>.remat(
     ,
    <a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<span class="code_keyword">expand</span> <span class="code_keyword">each</span> <a href="index.html#typeparam-T" class="code_type">T</a>.Differential&gt; ,
    <a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<span class="code_keyword">expand</span> <span class="code_keyword">each</span> <a href="index.html#typeparam-T" class="code_type">T</a>.Differential&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

</pre>

## Parameters


