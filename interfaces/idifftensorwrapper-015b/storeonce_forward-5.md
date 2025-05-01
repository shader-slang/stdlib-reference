---
layout: stdlib-reference
---

# IDiffTensorWrapper\.storeOnce\_forward

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">IDiffTensorWrapper</a>.<a href="storeonce_forward-5.html">storeOnce_forward</a>&lt;<a href="storeonce_forward-5.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="storeonce_forward-5.html#decl-i" class="code_param">i</a>,
    <a href="storeonce_forward-5.html#typeparam-T" class="code_type">T</a> <a href="storeonce_forward-5.html#decl-dx" class="code_param">dx</a>)
    <span class='code_keyword'>where</span> <a href="storeonce_forward-5.html#typeparam-T" class="code_type">T</a> : <a href="../0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="index.html" class="code_type">IDiffTensorWrapper</a>.<a href="storeonce_forward-5.html">storeOnce_forward</a>&lt;<a href="storeonce_forward-5.html#typeparam-T" class="code_type">T</a>, <a href="storeonce_forward-5.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="storeonce_forward-5.html#decl-N" class="code_var">N</a>&gt; <a href="storeonce_forward-5.html#decl-i" class="code_param">i</a>,
    <a href="storeonce_forward-5.html#typeparam-T" class="code_type">T</a> <a href="storeonce_forward-5.html#decl-dx" class="code_param">dx</a>)
    <span class='code_keyword'>where</span> <a href="storeonce_forward-5.html#typeparam-T" class="code_type">T</a> : <a href="../0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-i"></a>i  : uint
####  <a id="decl-dx"></a>dx  : [T](storeonce_forward-5#typeparam-T)
####  <a id="decl-i"></a>i  : [vector](../../types/vector/index)\<uint, [N](../../types/vector/index#decl-N)\>

