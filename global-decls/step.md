---
layout: stdlib-reference
---

# step

## Description

Step function.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="step.html#typeparam-T" class="code_type">T</a> <a href="step.html">step</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="step.html#typeparam-T" class="code_type">T</a> <a href="step.html#decl-y" class="code_param">y</a>,
    <a href="step.html#typeparam-T" class="code_type">T</a> <a href="step.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="step.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>&gt; <a href="step.html">step</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>&gt; <a href="step.html#decl-y" class="code_param">y</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>&gt; <a href="step.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="step.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>, <a href="step.html#decl-M" class="code_var">M</a>&gt; <a href="step.html">step</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="step.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>, <a href="step.html#decl-M" class="code_var">M</a>&gt; <a href="step.html#decl-y" class="code_param">y</a>,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>, <a href="step.html#decl-M" class="code_var">M</a>&gt; <a href="step.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="step.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>&gt; <a href="step.html">step</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>&gt; <a href="step.html#decl-edge" class="code_param">edge</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="step.html#typeparam-T" class="code_type">T</a>, <a href="step.html#decl-N" class="code_var">N</a>&gt; <a href="step.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="step.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-y"></a>y  : [T](step#typeparam-T)
The threshold value.

####  <a id="decl-x"></a>x  : [T](step#typeparam-T)
The value to compare against the threshold.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The threshold value.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
The value to compare against the threshold.

####  <a id="decl-y"></a>y  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The threshold value.

####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>
The value to compare against the threshold.

####  <a id="decl-edge"></a>edge  : [CoopVec](../types/coopvec-04/index)\<[T](../types/coopvec-04/index#typeparam-T), [N](../types/coopvec-04/index#decl-N)\>
####  <a id="decl-x"></a>x  : [CoopVec](../types/coopvec-04/index)\<[T](../types/coopvec-04/index#typeparam-T), [N](../types/coopvec-04/index#decl-N)\>
The value to compare against the threshold.


## Return value
0 if <span class='code'><a href="step.html#decl-x" class="code_param">x</a></span> is less than <span class='code'><a href="step.html#decl-y" class="code_param">y</a></span>, and 1 otherwise.


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


