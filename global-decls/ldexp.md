---
layout: stdlib-reference
---

# ldexp

## Description

Construct float from mantissa and exponent.



## Signature 

<pre>
<a href="ldexp.html#typeparam-T" class="code_type">T</a> <a href="ldexp.html">ldexp</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="ldexp.html#typeparam-T" class="code_type">T</a> <a href="ldexp.html#decl-x" class="code_param">x</a>,
    <a href="ldexp.html#typeparam-T" class="code_type">T</a> <a href="ldexp.html#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="ldexp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>&gt; <a href="ldexp.html">ldexp</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>&gt; <a href="ldexp.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>&gt; <a href="ldexp.html#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="ldexp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>, <a href="ldexp.html#decl-M" class="code_var">M</a>&gt; <a href="ldexp.html">ldexp</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="ldexp.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>, <a href="ldexp.html#decl-M" class="code_var">M</a>&gt; <a href="ldexp.html#decl-x" class="code_param">x</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>, <a href="ldexp.html#decl-M" class="code_var">M</a>&gt; <a href="ldexp.html#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="ldexp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="ldexp.html#typeparam-T" class="code_type">T</a> <a href="ldexp.html">ldexp</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#typeparam-E" class="code_type">E</a>&gt;(
    <a href="ldexp.html#typeparam-T" class="code_type">T</a> <a href="ldexp.html#decl-x" class="code_param">x</a>,
    <a href="ldexp.html#typeparam-E" class="code_type">E</a> <a href="ldexp.html#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="ldexp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="ldexp.html#typeparam-E" class="code_type">E</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>&gt; <a href="ldexp.html">ldexp</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#typeparam-E" class="code_type">E</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ldexp.html#typeparam-T" class="code_type">T</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>&gt; <a href="ldexp.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ldexp.html#typeparam-E" class="code_type">E</a>, <a href="ldexp.html#decl-N" class="code_var">N</a>&gt; <a href="ldexp.html#decl-exp" class="code_param">exp</a>)
    <span class='code_keyword'>where</span> <a href="ldexp.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>
    <span class='code_keyword'>where</span> <a href="ldexp.html#typeparam-E" class="code_type">E</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int
####  <a id="typeparam-E"></a>E: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index.html)

## Parameters

####  <a id="decl-x"></a>x  : [T](ldexp.html#typeparam-T)
The significand.

####  <a id="decl-exp"></a>exp  : [T](ldexp.html#typeparam-T)
The exponent.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The significand.

####  <a id="decl-exp"></a>exp  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The exponent.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The significand.

####  <a id="decl-exp"></a>exp  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The exponent.

####  <a id="decl-exp"></a>exp  : [E](ldexp.html#typeparam-E)
The exponent.

####  <a id="decl-exp"></a>exp  : [vector](../types/vector/index.html)\<E, [N](../types/vector/index.html#decl-N)\>
The exponent.


## Return value
The floating-point number constructed from <span class='code'><a href="ldexp.html#decl-x" class="code_param">x</a></span> and <span class='code'><a href="ldexp.html#decl-exp" class="code_param">exp</a></span>.


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



