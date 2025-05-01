---
layout: stdlib-reference
---

# divide

## Description

Divide values.



## Signature 

<pre>
<a href="divide.html#typeparam-T" class="code_type">T</a> <a href="divide.html">divide</a>&lt;<a href="divide.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="divide.html#typeparam-T" class="code_type">T</a> <a href="divide.html#decl-x" class="code_param">x</a>,
    <a href="divide.html#typeparam-T" class="code_type">T</a> <a href="divide.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="divide.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="divide.html#typeparam-T" class="code_type">T</a>, <a href="divide.html#decl-N" class="code_var">N</a>&gt; <a href="divide.html">divide</a>&lt;<a href="divide.html#typeparam-T" class="code_type">T</a>, <a href="divide.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="divide.html#typeparam-T" class="code_type">T</a>, <a href="divide.html#decl-N" class="code_var">N</a>&gt; <a href="divide.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="divide.html#typeparam-T" class="code_type">T</a>, <a href="divide.html#decl-N" class="code_var">N</a>&gt; <a href="divide.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="divide.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](divide#typeparam-T)
The dividend.

####  <a id="decl-y"></a>y  : [T](divide#typeparam-T)
The divisor.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The dividend.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The divisor.


## Return value
The result of dividing <span class='code'><a href="divide.html#decl-x" class="code_param">x</a></span> by <span class='code'><a href="divide.html#decl-y" class="code_param">y</a></span>, element-wise for vector types.


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

#### spirv
Available in all stages.



