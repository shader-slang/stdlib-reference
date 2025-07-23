---
layout: stdlib-reference
---

# determinant

## Description

Compute matrix determinant.

## Signature 

<pre>
<a href="determinant.html#typeparam-T" class="code_type">T</a> <a href="determinant.html">determinant</a>&lt;<a href="determinant.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="determinant.html#decl-N" class="code_var">N</a>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="determinant.html#typeparam-T" class="code_type">T</a>, <a href="determinant.html#decl-N" class="code_var">N</a>, <a href="determinant.html#decl-N" class="code_var">N</a>&gt; <a href="determinant.html#decl-m" class="code_param">m</a>)
    <span class='code_keyword'>where</span> <a href="determinant.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="determinant.html#typeparam-T" class="code_type">T</a> <a href="determinant.html">determinant</a>&lt;<a href="determinant.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="determinant.html#decl-N" class="code_var">N</a>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="determinant.html#typeparam-T" class="code_type">T</a>, <a href="determinant.html#decl-N" class="code_var">N</a>, <a href="determinant.html#decl-N" class="code_var">N</a>&gt; <a href="determinant.html#decl-m" class="code_param">m</a>)
    <span class='code_keyword'>where</span> <a href="determinant.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index.html)

## Parameters

####  <a id="decl-m"></a>m  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [N](../types/matrix/index.html#decl-N)\>
The matrix.


## Return value
The determinant of the matrix.


The determinant of the matrix.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



