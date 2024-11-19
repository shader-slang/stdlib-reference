---
layout: stdlib-reference
---

# mul

## Description

Multiply.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mul#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mul#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mul#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mul#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mul#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mul#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinlogicaltype-029g/index" class="code_type">__BuiltinLogicalType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinlogicaltype-029g/index" class="code_type">__BuiltinLogicalType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinlogicaltype-029g/index" class="code_type">__BuiltinLogicalType</a>;

<a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-M" class="code_var">M</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/mul">mul</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul#decl-left" class="code_param">left</a>,
    <span class="code_keyword">inout</span> <a href="/stdlib-reference/types/differentialpair-0c/index" class="code_type">DifferentialPair</a>&lt;<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt;&gt; <a href="/stdlib-reference/global-decls/mul#decl-right" class="code_param">right</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mul#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/global-decls/mul#decl-C" class="code_var">C</a>&gt; dOut)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mul#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-T}
#### T: [\_\_BuiltinLogicalType](/stdlib-reference/interfaces/0_builtinlogicaltype-029g/index) {#typeparam-T}
#### R  : int {#decl-R}
#### C  : int {#decl-C}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/mul#typeparam-T) {#decl-x}
The first value.

#### y  : [T](/stdlib-reference/global-decls/mul#typeparam-T) {#decl-y}
The second value.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The first value.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The second value.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The first value.

#### y  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-y}
The second value.

#### left  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), M\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [R](/stdlib-reference/types/matrix/index#decl-R), [N](/stdlib-reference/types/matrix/index#decl-N)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [C](/stdlib-reference/types/matrix/index#decl-C)\> {#decl-right}
#### left  : [DifferentialPair](/stdlib-reference/types/differentialpair-0c/index)\<[vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N) \>\> {#decl-left}
#### right  : [DifferentialPair](/stdlib-reference/types/differentialpair-0c/index)\<[matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M) \>\> {#decl-right}
#### left  : [DifferentialPair](/stdlib-reference/types/differentialpair-0c/index)\<[matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M) \>\> {#decl-left}
#### right  : [DifferentialPair](/stdlib-reference/types/differentialpair-0c/index)\<[vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), M \>\> {#decl-right}
#### left  : [DifferentialPair](/stdlib-reference/types/differentialpair-0c/index)\<[matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [R](/stdlib-reference/types/matrix/index#decl-R), [N](/stdlib-reference/types/matrix/index#decl-N) \>\> {#decl-left}
#### right  : [DifferentialPair](/stdlib-reference/types/differentialpair-0c/index)\<[matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [C](/stdlib-reference/types/matrix/index#decl-C) \>\> {#decl-right}
#### dOut  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [R](/stdlib-reference/types/matrix/index#decl-R), [C](/stdlib-reference/types/matrix/index#decl-C)\> {#decl-dOut}

## Return value
The inner product of <span class='code'><a href="/stdlib-reference/global-decls/mul#decl-x" class="code_param">x</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/mul#decl-y" class="code_param">y</a></span>.


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



