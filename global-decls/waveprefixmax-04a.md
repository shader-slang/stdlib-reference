---
layout: stdlib-reference
---

# WavePrefixMax

## Description

WavePrefixMax - Exclusive prefix maximum (equivalent to GLSL subgroupExclusiveMax)
Returns the maximum of all values from lanes with a lower index.
Lane 0 gets the identity value (type min), lane i gets max(val[0], ..., val[i-1]).




## Signature 

<pre>
<a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a> <a href="waveprefixmax-04a.html">WavePrefixMax</a>&lt;<a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a>&gt;(<a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a> <a href="waveprefixmax-04a.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveprefixmax-04a.html#decl-N" class="code_var">N</a>&gt; <a href="waveprefixmax-04a.html">WavePrefixMax</a>&lt;<a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="waveprefixmax-04a.html#decl-N" class="code_var">N</a>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveprefixmax-04a.html#decl-N" class="code_var">N</a>&gt; <a href="waveprefixmax-04a.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveprefixmax-04a.html#decl-N" class="code_var">N</a>, <a href="waveprefixmax-04a.html#decl-M" class="code_var">M</a>&gt; <a href="waveprefixmax-04a.html">WavePrefixMax</a>&lt;<a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="waveprefixmax-04a.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="waveprefixmax-04a.html#decl-M" class="code_var">M</a>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveprefixmax-04a.html#decl-N" class="code_var">N</a>, <a href="waveprefixmax-04a.html#decl-M" class="code_var">M</a>&gt; <a href="waveprefixmax-04a.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="waveprefixmax-04a.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-expr"></a>expr  : [T](waveprefixmax-04a.html#typeparam-T)
####  <a id="decl-expr"></a>expr  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-expr"></a>expr  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformArithmetic`.


