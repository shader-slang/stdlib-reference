---
layout: stdlib-reference
---

# transpose

## Description

Matrix transpose.



## Signature 

<pre>
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="transpose.html#typeparam-T" class="code_type">T</a>, <a href="transpose.html#decl-M" class="code_var">M</a>, <a href="transpose.html#decl-N" class="code_var">N</a>&gt; <a href="transpose.html">transpose</a>&lt;<a href="transpose.html#typeparam-T" class="code_type">T</a>, <a href="transpose.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="transpose.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="transpose.html#typeparam-T" class="code_type">T</a>, <a href="transpose.html#decl-N" class="code_var">N</a>, <a href="transpose.html#decl-M" class="code_var">M</a>&gt; <a href="transpose.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="transpose.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="transpose.html#typeparam-T" class="code_type">T</a>, <a href="transpose.html#decl-M" class="code_var">M</a>, <a href="transpose.html#decl-N" class="code_var">N</a>&gt; <a href="transpose.html">transpose</a>&lt;<a href="transpose.html#typeparam-T" class="code_type">T</a>, <a href="transpose.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="transpose.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="transpose.html#typeparam-T" class="code_type">T</a>, <a href="transpose.html#decl-N" class="code_var">N</a>, <a href="transpose.html#decl-M" class="code_var">M</a>&gt; <a href="transpose.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="transpose.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="transpose.html#typeparam-T" class="code_type">T</a>, <a href="transpose.html#decl-M" class="code_var">M</a>, <a href="transpose.html#decl-N" class="code_var">N</a>&gt; <a href="transpose.html">transpose</a>&lt;<a href="transpose.html#typeparam-T" class="code_type">T</a>, <a href="transpose.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="transpose.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="transpose.html#typeparam-T" class="code_type">T</a>, <a href="transpose.html#decl-N" class="code_var">N</a>, <a href="transpose.html#decl-M" class="code_var">M</a>&gt; <a href="transpose.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="transpose.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int
####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index.html)
####  <a id="typeparam-T"></a>T: [\_\_BuiltinLogicalType](../interfaces/0_builtinlogicaltype-029g/index.html)

## Parameters

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The matrix to transpose.


## Return value
The transposed matrix.


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

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



