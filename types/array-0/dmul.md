---
layout: stdlib-reference
---

# T\[N\]\.dmul

## Description





## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html#typeparam-T" class="code_type">T</a>.<a href="differential-0.html" class="code_type">Differential</a>[<a href="index.html#decl-N" class="code_var">N</a>] <a href="index.html#typeparam-T" class="code_type">T</a>[<a href="index.html#decl-N" class="code_var">N</a>].<a href="dmul.html">dmul</a>&lt;<a href="dmul.html#typeparam-U" class="code_type">U</a>&gt;(
    <a href="dmul.html#typeparam-U" class="code_type">U</a> <a href="dmul.html#decl-a" class="code_param">a</a>,
    <a href="index.html#typeparam-T" class="code_type">T</a>.<a href="differential-0.html" class="code_type">Differential</a>[<a href="index.html#decl-N" class="code_var">N</a>] <a href="dmul.html#decl-b" class="code_param">b</a>)
    <span class='code_keyword'>where</span> <a href="dmul.html#typeparam-U" class="code_type">U</a> : __BuiltinRealType
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/idifferentiable-01/index.html" class="code_type">IDifferentiable</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: \_\_BuiltinRealType

## Parameters

####  <a id="decl-a"></a>a  : [U](dmul.html#typeparam-U)
####  <a id="decl-b"></a>b  : [T](index.html#typeparam-T)\.[Differential](differential-0.html) \[ [N](index.html#decl-N) \]

