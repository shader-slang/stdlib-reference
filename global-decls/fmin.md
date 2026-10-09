---
layout: stdlib-reference
---

# fmin

## Description

Floating-point minimum.



## Signature 

<pre>
<a href="fmin.html#typeparam-T" class="code_type">T</a> <a href="fmin.html">fmin</a>&lt;<a href="fmin.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="fmin.html#typeparam-T" class="code_type">T</a> <a href="fmin.html#decl-x" class="code_param">x</a>,
    <a href="fmin.html#typeparam-T" class="code_type">T</a> <a href="fmin.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="fmin.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmin.html#typeparam-T" class="code_type">T</a>, <a href="fmin.html#decl-N" class="code_var">N</a>&gt; <a href="fmin.html">fmin</a>&lt;<a href="fmin.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="fmin.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmin.html#typeparam-T" class="code_type">T</a>, <a href="fmin.html#decl-N" class="code_var">N</a>&gt; <a href="fmin.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="fmin.html#typeparam-T" class="code_type">T</a>, <a href="fmin.html#decl-N" class="code_var">N</a>&gt; <a href="fmin.html#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="fmin.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](fmin.html#typeparam-T)
The first value to compare.

####  <a id="decl-y"></a>y  : [T](fmin.html#typeparam-T)
The second value to compare.

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The first value to compare.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
The second value to compare.


## Return value
The smaller of the two values, element-wise if vector typed.

## Remarks
HLSL/DXIL returns the numeric operand for one NaN, and a NaN for two NaNs.
SPIR-V uses the corresponding <span class='code'>NMin</span>/<span class='code'>NMax</span> operations; target floating-point modes may relax
special-value behavior. GLSL uses native <span class='code'><a href="min.html">min</a></span>/<span class='code'><a href="max.html">max</a></span>, which need not follow those NaN rules.
Zero-sign selection also follows the target operation.


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

#### llvm
Available in all stages.



