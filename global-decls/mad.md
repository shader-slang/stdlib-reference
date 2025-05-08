---
layout: stdlib-reference
---

# mad

## Description

Computes multiply-add.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="mad.html#typeparam-T" class="code_type">T</a> <a href="mad.html">mad</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="mad.html#typeparam-T" class="code_type">T</a> <a href="mad.html#decl-mvalue" class="code_param">mvalue</a>,
    <a href="mad.html#typeparam-T" class="code_type">T</a> <a href="mad.html#decl-avalue" class="code_param">avalue</a>,
    <a href="mad.html#typeparam-T" class="code_type">T</a> <a href="mad.html#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="mad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>&gt; <a href="mad.html">mad</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>&gt; <a href="mad.html#decl-mvalue" class="code_param">mvalue</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>&gt; <a href="mad.html#decl-avalue" class="code_param">avalue</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>&gt; <a href="mad.html#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="mad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>, <a href="mad.html#decl-M" class="code_var">M</a>&gt; <a href="mad.html">mad</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mad.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>, <a href="mad.html#decl-M" class="code_var">M</a>&gt; <a href="mad.html#decl-mvalue" class="code_param">mvalue</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>, <a href="mad.html#decl-M" class="code_var">M</a>&gt; <a href="mad.html#decl-avalue" class="code_param">avalue</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>, <a href="mad.html#decl-M" class="code_var">M</a>&gt; <a href="mad.html#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="mad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="mad.html#typeparam-T" class="code_type">T</a> <a href="mad.html">mad</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="mad.html#typeparam-T" class="code_type">T</a> <a href="mad.html#decl-mvalue" class="code_param">mvalue</a>,
    <a href="mad.html#typeparam-T" class="code_type">T</a> <a href="mad.html#decl-avalue" class="code_param">avalue</a>,
    <a href="mad.html#typeparam-T" class="code_type">T</a> <a href="mad.html#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="mad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 2:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>&gt; <a href="mad.html">mad</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>&gt; <a href="mad.html#decl-mvalue" class="code_param">mvalue</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>&gt; <a href="mad.html#decl-avalue" class="code_param">avalue</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>&gt; <a href="mad.html#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="mad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 2:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>, <a href="mad.html#decl-M" class="code_var">M</a>&gt; <a href="mad.html">mad</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="mad.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>, <a href="mad.html#decl-M" class="code_var">M</a>&gt; <a href="mad.html#decl-mvalue" class="code_param">mvalue</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>, <a href="mad.html#decl-M" class="code_var">M</a>&gt; <a href="mad.html#decl-avalue" class="code_param">avalue</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="mad.html#typeparam-T" class="code_type">T</a>, <a href="mad.html#decl-N" class="code_var">N</a>, <a href="mad.html#decl-M" class="code_var">M</a>&gt; <a href="mad.html#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="mad.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int
####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index.html)

## Parameters

####  <a id="decl-mvalue"></a>mvalue  : [T](mad.html#typeparam-T)
The multiplier.

####  <a id="decl-avalue"></a>avalue  : [T](mad.html#typeparam-T)
The multiplicand.

####  <a id="decl-bvalue"></a>bvalue  : [T](mad.html#typeparam-T)
The addend.

####  <a id="decl-mvalue"></a>mvalue  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The multiplier.

####  <a id="decl-avalue"></a>avalue  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The multiplicand.

####  <a id="decl-bvalue"></a>bvalue  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The addend.

####  <a id="decl-mvalue"></a>mvalue  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The multiplier.

####  <a id="decl-avalue"></a>avalue  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The multiplicand.

####  <a id="decl-bvalue"></a>bvalue  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The addend.


## Return value
The result of <span class='code'><a href="mad.html#decl-mvalue" class="code_param">mvalue</a>*<a href="mad.html#decl-avalue" class="code_param">avalue</a>+<a href="mad.html#decl-bvalue" class="code_param">bvalue</a></span>.


## Availability and Requirements

### Capability Set 1

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

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.



