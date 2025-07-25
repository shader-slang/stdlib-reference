---
layout: stdlib-reference
---

# ceil

## Description

Ceiling. Returns the smallest integer that is greater than or equal to the specified value.



## Signature 

<pre>
<a href="ceil.html#typeparam-T" class="code_type">T</a> <a href="ceil.html">ceil</a>&lt;<a href="ceil.html#typeparam-T" class="code_type">T</a>&gt;(<a href="ceil.html#typeparam-T" class="code_type">T</a> <a href="ceil.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="ceil.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ceil.html#typeparam-T" class="code_type">T</a>, <a href="ceil.html#decl-N" class="code_var">N</a>&gt; <a href="ceil.html">ceil</a>&lt;<a href="ceil.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="ceil.html#decl-N" class="code_var">N</a>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="ceil.html#typeparam-T" class="code_type">T</a>, <a href="ceil.html#decl-N" class="code_var">N</a>&gt; <a href="ceil.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="ceil.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="ceil.html#typeparam-T" class="code_type">T</a>, <a href="ceil.html#decl-N" class="code_var">N</a>, <a href="ceil.html#decl-M" class="code_var">M</a>&gt; <a href="ceil.html">ceil</a>&lt;<a href="ceil.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="ceil.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="ceil.html#decl-M" class="code_var">M</a>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="ceil.html#typeparam-T" class="code_type">T</a>, <a href="ceil.html#decl-N" class="code_var">N</a>, <a href="ceil.html#decl-M" class="code_var">M</a>&gt; <a href="ceil.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="ceil.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](ceil.html#typeparam-T)
The value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The value.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The value.


## Return value
The smallest integer that is greater than or equal to the specified value.


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



