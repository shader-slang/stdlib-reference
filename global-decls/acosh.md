---
layout: stdlib-reference
---

# acosh

## Description

Arc hyperbolic cosine. Returns the arc hyperbolic cosine of the specified value.



## Signature 

<pre>
<a href="acosh.html#typeparam-T" class="code_type">T</a> <a href="acosh.html">acosh</a>&lt;<a href="acosh.html#typeparam-T" class="code_type">T</a>&gt;(<a href="acosh.html#typeparam-T" class="code_type">T</a> <a href="acosh.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="acosh.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="acosh.html#typeparam-T" class="code_type">T</a>, <a href="acosh.html#decl-N" class="code_var">N</a>&gt; <a href="acosh.html">acosh</a>&lt;<a href="acosh.html#typeparam-T" class="code_type">T</a>, <a href="acosh.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="acosh.html#typeparam-T" class="code_type">T</a>, <a href="acosh.html#decl-N" class="code_var">N</a>&gt; <a href="acosh.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="acosh.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](acosh#typeparam-T)
The value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The value.


## Return value
The arc hyperbolic cosine of the specified value.


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



