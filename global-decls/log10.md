---
layout: stdlib-reference
---

# log10

## Description

Compute base-10 logarithm.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="log10.html#typeparam-T" class="code_type">T</a> <a href="log10.html">log10</a>&lt;<a href="log10.html#typeparam-T" class="code_type">T</a>&gt;(<a href="log10.html#typeparam-T" class="code_type">T</a> <a href="log10.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="log10.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="log10.html#typeparam-T" class="code_type">T</a>, <a href="log10.html#decl-N" class="code_var">N</a>&gt; <a href="log10.html">log10</a>&lt;<a href="log10.html#typeparam-T" class="code_type">T</a>, <a href="log10.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="log10.html#typeparam-T" class="code_type">T</a>, <a href="log10.html#decl-N" class="code_var">N</a>&gt; <a href="log10.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="log10.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="log10.html#typeparam-T" class="code_type">T</a>, <a href="log10.html#decl-N" class="code_var">N</a>, <a href="log10.html#decl-M" class="code_var">M</a>&gt; <a href="log10.html">log10</a>&lt;<a href="log10.html#typeparam-T" class="code_type">T</a>, <a href="log10.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="log10.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="log10.html#typeparam-T" class="code_type">T</a>, <a href="log10.html#decl-N" class="code_var">N</a>, <a href="log10.html#decl-M" class="code_var">M</a>&gt; <a href="log10.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="log10.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](log10#typeparam-T)
The input value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The input value.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The input value.


## Return value
The base-10 logarithm of <span class='code'><a href="log10.html#decl-x" class="code_param">x</a></span>.


## Availability and Requirements

### Capability Set 1

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


### Capability Set 2

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



