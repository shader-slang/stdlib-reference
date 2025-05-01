---
layout: stdlib-reference
---

# reflect

## Description

Reflect incident vector across plane with given normal.



## Signature 

<pre>
<a href="reflect.html#typeparam-T" class="code_type">T</a> <a href="reflect.html">reflect</a>&lt;<a href="reflect.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="reflect.html#typeparam-T" class="code_type">T</a> <a href="reflect.html#decl-i" class="code_param">i</a>,
    <a href="reflect.html#typeparam-T" class="code_type">T</a> <a href="reflect.html#decl-n" class="code_param">n</a>)
    <span class='code_keyword'>where</span> <a href="reflect.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="reflect.html#typeparam-T" class="code_type">T</a>, <a href="reflect.html#decl-N" class="code_var">N</a>&gt; <a href="reflect.html">reflect</a>&lt;<a href="reflect.html#typeparam-T" class="code_type">T</a>, <a href="reflect.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="reflect.html#typeparam-T" class="code_type">T</a>, <a href="reflect.html#decl-N" class="code_var">N</a>&gt; <a href="reflect.html#decl-i" class="code_param">i</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="reflect.html#typeparam-T" class="code_type">T</a>, <a href="reflect.html#decl-N" class="code_var">N</a>&gt; <a href="reflect.html#decl-n" class="code_param">n</a>)
    <span class='code_keyword'>where</span> <a href="reflect.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-i"></a>i  : [T](reflect#typeparam-T)
The incident vector.

####  <a id="decl-n"></a>n  : [T](reflect#typeparam-T)
The normal vector.

####  <a id="decl-i"></a>i  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The incident vector.

####  <a id="decl-n"></a>n  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The normal vector.


## Return value
The reflected vector.


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



