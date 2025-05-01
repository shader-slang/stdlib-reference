---
layout: stdlib-reference
---

# abs

## Description

The abs function returns the absolute value of x.



## Signature 

<pre>
<a href="abs.html#typeparam-T" class="code_type">T</a> <a href="abs.html">abs</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>&gt;(<a href="abs.html#typeparam-T" class="code_type">T</a> <a href="abs.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="abs.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>&gt; <a href="abs.html">abs</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>&gt; <a href="abs.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="abs.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>, <a href="abs.html#decl-M" class="code_var">M</a>&gt; <a href="abs.html">abs</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="abs.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>, <a href="abs.html#decl-M" class="code_var">M</a>&gt; <a href="abs.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="abs.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="abs.html#typeparam-T" class="code_type">T</a> <a href="abs.html">abs</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>&gt;(<a href="abs.html#typeparam-T" class="code_type">T</a> <a href="abs.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="abs.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>&gt; <a href="abs.html">abs</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>&gt; <a href="abs.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="abs.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>, <a href="abs.html#decl-M" class="code_var">M</a>&gt; <a href="abs.html">abs</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="abs.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="abs.html#typeparam-T" class="code_type">T</a>, <a href="abs.html#decl-N" class="code_var">N</a>, <a href="abs.html#decl-M" class="code_var">M</a>&gt; <a href="abs.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="abs.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int
####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)

## Parameters

####  <a id="decl-x"></a>x  : [T](abs#typeparam-T)
The input value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The input value.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The input value.


## Return value
The absolute value of x.


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



