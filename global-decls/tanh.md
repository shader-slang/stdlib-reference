---
layout: stdlib-reference
---

# tanh

## Description

Compute the hyperbolic tangent of <span class='code'><a href="tanh.html#decl-x" class="code_param">x</a></span>.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="tanh.html#typeparam-T" class="code_type">T</a> <a href="tanh.html">tanh</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>&gt;(<a href="tanh.html#typeparam-T" class="code_type">T</a> <a href="tanh.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="tanh.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>, <a href="tanh.html#decl-N" class="code_var">N</a>&gt; <a href="tanh.html">tanh</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>, <a href="tanh.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>, <a href="tanh.html#decl-N" class="code_var">N</a>&gt; <a href="tanh.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="tanh.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>, <a href="tanh.html#decl-N" class="code_var">N</a>, <a href="tanh.html#decl-M" class="code_var">M</a>&gt; <a href="tanh.html">tanh</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>, <a href="tanh.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="tanh.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>, <a href="tanh.html#decl-N" class="code_var">N</a>, <a href="tanh.html#decl-M" class="code_var">M</a>&gt; <a href="tanh.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="tanh.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>, <a href="tanh.html#decl-N" class="code_var">N</a>&gt; <a href="tanh.html">tanh</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>, <a href="tanh.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="tanh.html#typeparam-T" class="code_type">T</a>, <a href="tanh.html#decl-N" class="code_var">N</a>&gt; <a href="tanh.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="tanh.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](tanh.html#typeparam-T)
The value to compute the hyperbolic tangent of, in radians.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The value to compute the hyperbolic tangent of, in radians.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
The value to compute the hyperbolic tangent of, in radians.

####  <a id="decl-x"></a>x  : [CoopVec](../types/coopvec-04/index.html)\<[T](../types/coopvec-04/index.html#typeparam-T), [N](../types/coopvec-04/index.html#decl-N)\>
The value to compute the hyperbolic tangent of, in radians.


## Return value
The hyperbolic tangent of <span class='code'><a href="tanh.html#decl-x" class="code_param">x</a></span>.


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

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


