---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.fill

## Description

Fill all elements of this CoopVec with the specified value.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="fill.html">fill</a>(<a href="index.html#typeparam-T" class="code_type">T</a> <a href="fill.html#decl-t" class="code_param">t</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-t"></a>t  : [T](index.html#typeparam-T)
The value to fill all elements with.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


