---
layout: stdlib-reference
---

# AtomicAdd\.store\_forward

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">AtomicAdd</a>.<a href="store_forward.html">store_forward</a>&lt;<a href="store_forward.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="store_forward.html#decl-i" class="code_param">i</a>,
    <a href="store_forward.html#typeparam-T" class="code_type">T</a> <a href="store_forward.html#decl-dx" class="code_param">dx</a>)
    <span class='code_keyword'>where</span> <a href="store_forward.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">AtomicAdd</a>.<a href="store_forward.html">store_forward</a>&lt;<a href="store_forward.html#typeparam-T" class="code_type">T</a>, <a href="store_forward.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="store_forward.html#decl-N" class="code_var">N</a>&gt; <a href="store_forward.html#decl-i" class="code_param">i</a>,
    <a href="store_forward.html#typeparam-T" class="code_type">T</a> <a href="store_forward.html#decl-dx" class="code_param">dx</a>)
    <span class='code_keyword'>where</span> <a href="store_forward.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-i"></a>i  : uint
####  <a id="decl-dx"></a>dx  : [T](store_forward#typeparam-T)
####  <a id="decl-i"></a>i  : [vector](../vector/index)\<uint, [N](../vector/index#decl-N)\>

