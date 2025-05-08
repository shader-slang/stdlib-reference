---
layout: stdlib-reference
---

# mul

## Description

Multiply.



## Signature 

<pre>
<a href="mul.html#typeparam-T" class="code_type">T</a> <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="mul.html#typeparam-T" class="code_type">T</a> <a href="mul.html#decl-x" class="code_param">x</a>,
    <a href="mul.html#typeparam-T" class="code_type">T</a> <a href="mul.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-x" class="code_param">x</a>,
    <a href="mul.html#typeparam-T" class="code_type">T</a> <a href="mul.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="mul.html#typeparam-T" class="code_type">T</a> <a href="mul.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-x" class="code_param">x</a>,
    <a href="mul.html#typeparam-T" class="code_type">T</a> <a href="mul.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="mul.html#typeparam-T" class="code_type">T</a> <a href="mul.html#decl-x" class="code_param">x</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="mul.html#typeparam-T" class="code_type">T</a> <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="mul.html#typeparam-T" class="code_type">T</a> <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

<a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt;&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt;&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt;&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-M" class="code_var">M</a>&gt;&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt;&gt; <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt;&gt; <a href="mul.html#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="mul.html">mul</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mul.html#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">inout</span> <a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-N" class="code_var">N</a>&gt;&gt; <a href="mul.html#decl-left" class="code_param">left</a>,
    <span class="code_keyword">inout</span> <a href="../types/differentialpair-0c/index.html" class="code_type">DifferentialPair</a>&lt;<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-N" class="code_var">N</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt;&gt; <a href="mul.html#decl-right" class="code_param">right</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mul.html#typeparam-T" class="code_type">T</a>, <a href="mul.html#decl-R" class="code_var">R</a>, <a href="mul.html#decl-C" class="code_var">C</a>&gt; <a href="mul.html#decl-dOut" class="code_param">dOut</a>)
    <span class='code_keyword'>where</span> <a href="mul.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int
####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index.html)
####  <a id="typeparam-T"></a>T: [\_\_BuiltinLogicalType](../interfaces/0_builtinlogicaltype-029g/index.html)
####  <a id="decl-R"></a>R  : int
####  <a id="decl-C"></a>C  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](mul.html#typeparam-T)
The first value.

####  <a id="decl-y"></a>y  : [T](mul.html#typeparam-T)
The second value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The first value.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The second value.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The first value.

####  <a id="decl-y"></a>y  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The second value.

####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), M\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [R](../types/matrix/index.html#decl-R), [N](../types/matrix/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [C](../types/matrix/index.html#decl-C)\>
####  <a id="decl-left"></a>left  : [DifferentialPair](../types/differentialpair-0c/index.html)\<[vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N) \>\>
####  <a id="decl-right"></a>right  : [DifferentialPair](../types/differentialpair-0c/index.html)\<[matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M) \>\>
####  <a id="decl-left"></a>left  : [DifferentialPair](../types/differentialpair-0c/index.html)\<[matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M) \>\>
####  <a id="decl-right"></a>right  : [DifferentialPair](../types/differentialpair-0c/index.html)\<[vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), M \>\>
####  <a id="decl-left"></a>left  : [DifferentialPair](../types/differentialpair-0c/index.html)\<[matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [R](../types/matrix/index.html#decl-R), [N](../types/matrix/index.html#decl-N) \>\>
####  <a id="decl-right"></a>right  : [DifferentialPair](../types/differentialpair-0c/index.html)\<[matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [C](../types/matrix/index.html#decl-C) \>\>
####  <a id="decl-dOut"></a>dOut  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [R](../types/matrix/index.html#decl-R), [C](../types/matrix/index.html#decl-C)\>

## Return value
The inner product of <span class='code'><a href="mul.html#decl-x" class="code_param">x</a></span> and <span class='code'><a href="mul.html#decl-y" class="code_param">y</a></span>.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



