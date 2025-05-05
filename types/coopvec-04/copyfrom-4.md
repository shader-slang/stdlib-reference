---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.copyFrom

## Description

Copy values from another CoopVec instance into this one. The source CoopVec can have a different element type,
in which case appropriate type conversion will be performed.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="copyfrom-4.html">copyFrom</a>&lt;<a href="copyfrom-4.html#typeparam-U" class="code_type">U</a>&gt;(<a href="index.html" class="code_type">CoopVec</a>&lt;<a href="copyfrom-4.html#typeparam-U" class="code_type">U</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="copyfrom-4.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="copyfrom-4.html#typeparam-U" class="code_type">U</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-U"></a>U: [\_\_BuiltinArithmeticType](../../interfaces/0_builtinarithmetictype-029j/index)

## Parameters

####  <a id="decl-other"></a>other  : [CoopVec](index)\<U, [N](index#decl-N)\>
The source CoopVec to copy from.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



