---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.replicate

## Description

Creates a new cooperative vector with all elements initialized to the specified scalar value.



## Signature 

<pre>
<span class='code_keyword'>static</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="replicate.html">replicate</a>(<a href="index.html#typeparam-T" class="code_type">T</a> <a href="replicate.html#decl-t" class="code_param">t</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-t"></a>t  : [T](index#typeparam-T)
The scalar value to replicate across all elements.


## Return value
A new cooperative vector where each element equals the input value.


