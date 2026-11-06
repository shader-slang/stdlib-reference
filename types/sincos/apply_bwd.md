---
layout: stdlib-reference
---

# sincos\<T\>\.apply\_bwd

## Description

Sine and cosine.
Calculate both the sine and cosine of <span class='code'>x</span>.



## Signature 

<pre>
<a href="../../global-decls/sincos.html">sincos</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;.apply_bwd(
    <a href="index.html#typeparam-T" class="code_type">T</a> ,
    <span class="code_keyword">out</span> <a href="index.html#typeparam-T" class="code_type">T</a> ,
    <span class="code_keyword">out</span> <a href="index.html#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../../global-decls/sincos.html">sincos</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt;.apply_bwd(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; ,
    <span class="code_keyword">out</span> <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; ,
    <span class="code_keyword">out</span> <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../../global-decls/sincos.html">sincos</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>, <a href="index.html#decl-L1" class="code_var">L1</a>, <a href="index.html#decl-L2" class="code_var">L2</a>&gt;.apply_bwd(
    <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt; ,
    <span class="code_keyword">out</span> <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt; ,
    <span class="code_keyword">out</span> <a href="../matrix/index.html" class="code_type">matrix</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>, <a href="index.html#decl-M" class="code_var">M</a>&gt; )
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Parameters


## Return value
void


