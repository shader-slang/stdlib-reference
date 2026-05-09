---
layout: stdlib-reference
---

# vector\<T,N\>\.mul\.fwd\_diff

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="../vector/mul.html">mul</a>.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt; <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.<a href="../matrix/mul.html">mul</a>.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> &lt;error&gt; <a href="../../global-decls/mul.html">mul</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.fwd_diff()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt;&gt; <a href="../../global-decls/mul.html">mul</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt;&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt;&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> &lt;error&gt; <a href="../../global-decls/mul.html">mul</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.fwd_diff()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt;&gt; <a href="../../global-decls/mul.html">mul</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt;&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt;&gt;&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> &lt;error&gt; <a href="../../global-decls/mul.html">mul</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-R" class="code_var">R</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-C" class="code_var">C</a>&gt;.fwd_diff()
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-R" class="code_var">R</a>, <a href="index.html#decl-C" class="code_var">C</a>&gt;&gt;&gt; <a href="../../global-decls/mul.html">mul</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-R" class="code_var">R</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-C" class="code_var">C</a>&gt;.fwd_diff(
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-R" class="code_var">R</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt;&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-C" class="code_var">C</a>&gt;&gt;&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class='code_keyword'>static</span> <span class="code_keyword">void</span> <a href="../../global-decls/mul.html">mul</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-R" class="code_var">R</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-C" class="code_var">C</a>&gt;.fwd_diff(
    <span class="code_keyword">inout</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-R" class="code_var">R</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;&gt;&gt; ,
    <span class="code_keyword">inout</span> <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-C" class="code_var">C</a>&gt;&gt;&gt; ,
    <a href="../differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-R" class="code_var">R</a>, <a href="index.html#decl-C" class="code_var">C</a>&gt;&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Parameters


