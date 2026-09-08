---
layout: stdlib-reference
---

# vector\<T,N\>\.div\.fwd\_diff

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="../vector/div.html">div</a>.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt; <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.<a href="../matrix/div.html">div</a>.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="../coopvec-04/div.html">div</a>.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="../coopvec-04/div.html">div</a>.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="fwd_diff.html#decl-self" class="code_param">self</a>,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="fwd_diff.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-self"></a>self  : [DifferentialPair](../differentialpair-0c/index.html)\<[CoopVec](../coopvec-04/index.html)\<[T](../coopvec-04/index.html#typeparam-T), [N](../coopvec-04/index.html#decl-N) \>\>
####  <a id="decl-other"></a>other  : [DifferentialPair](../differentialpair-0c/index.html)\<[CoopVec](../coopvec-04/index.html)\<[T](../coopvec-04/index.html#typeparam-T), [N](../coopvec-04/index.html#decl-N) \>\>

