---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.add

## Description

Performs component-wise addition with another cooperative vector.



## Signature 

<pre>
<a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="add.html">add</a>(<a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="add.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-other"></a>other  : [CoopVec](index.html)\<[T](index.html#typeparam-T), [N](index.html#decl-N)\>
The cooperative vector to add to this vector.


## Return value
A new cooperative vector containing the sum of the two vectors.


