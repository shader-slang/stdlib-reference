---
layout: stdlib-reference
---

# isinf

## Description

Test if a floating-point value is infinite.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="isinf.html">isinf</a>&lt;<a href="isinf.html#typeparam-T" class="code_type">T</a>&gt;(<a href="isinf.html#typeparam-T" class="code_type">T</a> <a href="isinf.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="isinf.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">bool</span>, <a href="isinf.html#decl-N" class="code_var">N</a>&gt; <a href="isinf.html">isinf</a>&lt;<a href="isinf.html#typeparam-T" class="code_type">T</a>, <a href="isinf.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="isinf.html#typeparam-T" class="code_type">T</a>, <a href="isinf.html#decl-N" class="code_var">N</a>&gt; <a href="isinf.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="isinf.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">bool</span>, <a href="isinf.html#decl-N" class="code_var">N</a>, <a href="isinf.html#decl-M" class="code_var">M</a>&gt; <a href="isinf.html">isinf</a>&lt;<a href="isinf.html#typeparam-T" class="code_type">T</a>, <a href="isinf.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="isinf.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="isinf.html#typeparam-T" class="code_type">T</a>, <a href="isinf.html#decl-N" class="code_var">N</a>, <a href="isinf.html#decl-M" class="code_var">M</a>&gt; <a href="isinf.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="isinf.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](isinf#typeparam-T)
The input value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The input value.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The input value.


## Return value
<span class='code'>true</span> if <span class='code'><a href="isinf.html#decl-x" class="code_param">x</a></span> is infinite, <span class='code'>false</span> otherwise.


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



