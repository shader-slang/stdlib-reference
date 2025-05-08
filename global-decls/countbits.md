---
layout: stdlib-reference
---

# countbits

## Description

Population count.
Counts the number of set bits in the binary representation of a value.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="countbits.html">countbits</a>&lt;<a href="countbits.html#typeparam-T" class="code_type">T</a>&gt;(<a href="countbits.html#typeparam-T" class="code_type">T</a> <a href="countbits.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="countbits.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="countbits.html#decl-N" class="code_var">N</a>&gt; <a href="countbits.html">countbits</a>&lt;<a href="countbits.html#typeparam-T" class="code_type">T</a>, <a href="countbits.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="countbits.html#typeparam-T" class="code_type">T</a>, <a href="countbits.html#decl-N" class="code_var">N</a>&gt; <a href="countbits.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="countbits.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index.html)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-value"></a>value  : [T](countbits.html#typeparam-T)
The value to count bits in.

####  <a id="decl-value"></a>value  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The value to count bits in.


## Return value
The number of bits in the binary representation of <span class='code'><a href="countbits.html#decl-value" class="code_param">value</a></span> that are set to one.

## Remarks
For SPIR-V, this function maps to <span class='code'>OpBitCount</span>.


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

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



