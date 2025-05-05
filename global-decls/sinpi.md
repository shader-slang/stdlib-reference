---
layout: stdlib-reference
---

# sinpi

## Description

Compute the sine of <span class='code'><a href="sinpi.html#decl-x" class="code_param">x</a>*pi</span>.



## Signature 

<pre>
<a href="sinpi.html#typeparam-T" class="code_type">T</a> <a href="sinpi.html">sinpi</a>&lt;<a href="sinpi.html#typeparam-T" class="code_type">T</a>&gt;(<a href="sinpi.html#typeparam-T" class="code_type">T</a> <a href="sinpi.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="sinpi.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="sinpi.html#typeparam-T" class="code_type">T</a>, <a href="sinpi.html#decl-N" class="code_var">N</a>&gt; <a href="sinpi.html">sinpi</a>&lt;<a href="sinpi.html#typeparam-T" class="code_type">T</a>, <a href="sinpi.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="sinpi.html#typeparam-T" class="code_type">T</a>, <a href="sinpi.html#decl-N" class="code_var">N</a>&gt; <a href="sinpi.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="sinpi.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](sinpi#typeparam-T)
The value to compute the sine of.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The value to compute the sine of.


## Return value
The sine of <span class='code'><a href="sinpi.html#decl-x" class="code_param">x</a>*pi</span>.


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



