---
layout: stdlib-reference
---

# fabs

## Description

Float-point absolute value.



## Signature 

<pre>
<a href="fabs.html#typeparam-T" class="code_type">T</a> <a href="fabs.html">fabs</a>&lt;<a href="fabs.html#typeparam-T" class="code_type">T</a>&gt;(<a href="fabs.html#typeparam-T" class="code_type">T</a> <a href="fabs.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="fabs.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fabs.html#typeparam-T" class="code_type">T</a>, <a href="fabs.html#decl-N" class="code_var">N</a>&gt; <a href="fabs.html">fabs</a>&lt;<a href="fabs.html#typeparam-T" class="code_type">T</a>, <a href="fabs.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fabs.html#typeparam-T" class="code_type">T</a>, <a href="fabs.html#decl-N" class="code_var">N</a>&gt; <a href="fabs.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="fabs.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](fabs.html#typeparam-T)
The input value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The input value.


## Return value
The absolute value of <span class='code'><a href="fabs.html#decl-x" class="code_param">x</a></span>.

## Remarks
For metal targets, this function is equivalent to the <span class='code'><a href="fabs.html">fabs</a></span> metal intrinsic.
For other targets, this function is equivalent to the <span class='code'><a href="abs.html">abs</a></span> slang function.


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



