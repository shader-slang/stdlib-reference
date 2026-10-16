---
layout: stdlib-reference
---

# T\.init

## Description





## Signature 

<pre>
<a href="index.html#typeparam-T" class="code_type">T</a>.<a href="init.html">init</a>(<a href="../floate4m3-057/index.html" class="code_type">FloatE4M3</a> <a href="init.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="index.html#typeparam-T" class="code_type">T</a>.<a href="init.html">init</a>(<a href="../floate5m2-057/index.html" class="code_type">FloatE5M2</a> <a href="init.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="index.html#typeparam-T" class="code_type">T</a>.<a href="init.html">init</a>(<a href="../bfloat16-01/index.html" class="code_type">BFloat16</a> <a href="init.html#decl-val" class="code_param">val</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="index.html#typeparam-T" class="code_type">T</a>.<a href="init.html">init</a>(<a href="index.html#typeparam-T" class="code_type">T</a>.Element <a href="init.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexeldata-016/index.html" class="code_type">ITexelData</a>;

<a href="index.html#typeparam-T" class="code_type">T</a>.<a href="init.html">init</a>(<a href="index.html#typeparam-T" class="code_type">T</a> <a href="init.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexeldata-016/index.html" class="code_type">ITexelData</a>;

<a href="index.html#typeparam-T" class="code_type">T</a>.<a href="init.html">init</a>&lt;<a href="init.html#typeparam-U" class="code_type">U</a>&gt;(<a href="init.html#typeparam-U" class="code_type">U</a> <a href="init.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/itexelelement-016/index.html" class="code_type">ITexelElement</a>
    <span class='code_keyword'>where</span> <a href="init.html#typeparam-U" class="code_type">U</a>.<a href="datatype-04.html" class="code_type">DataType</a> == <a href="index.html#typeparam-T" class="code_type">T</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/itexeldata-016/index.html" class="code_type">ITexelData</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [ITexelElement](../../interfaces/itexelelement-016/index.html)

## Parameters

####  <a id="decl-val"></a>val  : [FloatE4M3](../floate4m3-057/index.html)
####  <a id="decl-val"></a>val  : [FloatE5M2](../floate5m2-057/index.html)
####  <a id="decl-val"></a>val  : [BFloat16](../bfloat16-01/index.html)
####  <a id="decl-value"></a>value  : [T](index.html#typeparam-T)\.Element
####  <a id="decl-value"></a>value  : [T](index.html#typeparam-T)
####  <a id="decl-value"></a>value  : [U](init.html#typeparam-U)

