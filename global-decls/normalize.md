---
layout: stdlib-reference
---

# normalize

## Description

Normalize a vector.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="normalize.html#typeparam-T" class="code_type">T</a>, <a href="normalize.html#decl-N" class="code_var">N</a>&gt; <a href="normalize.html">normalize</a>&lt;<a href="normalize.html#typeparam-T" class="code_type">T</a>, <a href="normalize.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="normalize.html#typeparam-T" class="code_type">T</a>, <a href="normalize.html#decl-N" class="code_var">N</a>&gt; <a href="normalize.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="normalize.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="normalize.html#typeparam-T" class="code_type">T</a> <a href="normalize.html">normalize</a>&lt;<a href="normalize.html#typeparam-T" class="code_type">T</a>&gt;(<a href="normalize.html#typeparam-T" class="code_type">T</a> <a href="normalize.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="normalize.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The vector to normalize.

####  <a id="decl-x"></a>x  : [T](normalize.html#typeparam-T)
The vector to normalize.


## Return value
The normalized vector, <span class='code'><a href="normalize.html#decl-x" class="code_param">x</a></span>/<span class='code'><a href="length.html">length</a>(<a href="length.html#decl-x" class="code_param">x</a>)</span>.


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



