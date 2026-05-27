---
layout: stdlib-reference
---

# DifferentialPair\<T\>\.$init\.apply\_bwd

## Description

Initialize a matrix where all elements have the same scalar <span class='code'>value</span>.




## Signature 

<pre>
<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;, &gt; <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.<a href="../differentialpair-0c/init.html">init</a>.apply_bwd(
    <a href="index.html#typeparam-T" class="code_type">T</a> ,
    <a href="index.html#typeparam-T" class="code_type">T</a>.Differential )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;, &gt; <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="../vector/init.html">init</a>.apply_bwd(<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;, &gt; <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="../vector/init.html">init</a>&lt;<a href="index.html#typeparam-U" class="code_type">U</a>&gt;.apply_bwd(<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-U" class="code_type">U</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;, &gt; <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="../vector/init.html">init</a>.apply_bwd(<span class="code_keyword">float</span> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;, &gt; <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.<a href="../matrix/init.html">init</a>.apply_bwd(<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;, &gt; <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.<a href="../matrix/init.html">init</a>.apply_bwd(<span class="code_keyword">int</span> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;, &gt; <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.<a href="../matrix/init.html">init</a>.apply_bwd(<span class="code_keyword">float</span> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;, &gt; <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.<a href="../matrix/init.html">init</a>.apply_bwd(<a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../tuple-0/index.html" class="code_type">Tuple</a>&lt;<a href="../nulldifferential-04/index.html" class="code_type">NullDifferential</a>, __syn_BackwardDiffMinimalContextType__S4core16NullDifferentialR8_24xinitp1pi_ffb&gt; <a href="../nulldifferential-04/index.html" class="code_type">NullDifferential</a>.init.apply_bwd(<span class="code_keyword">float</span> );

</pre>

## Parameters


