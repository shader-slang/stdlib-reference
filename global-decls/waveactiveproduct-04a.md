---
layout: stdlib-reference
---

# WaveActiveProduct

## Description





## Signature 

<pre>
<a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a> <a href="waveactiveproduct-04a.html">WaveActiveProduct</a>&lt;<a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a>&gt;(<a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a> <a href="waveactiveproduct-04a.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveactiveproduct-04a.html#decl-N" class="code_var">N</a>&gt; <a href="waveactiveproduct-04a.html">WaveActiveProduct</a>&lt;<a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveactiveproduct-04a.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveactiveproduct-04a.html#decl-N" class="code_var">N</a>&gt; <a href="waveactiveproduct-04a.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveactiveproduct-04a.html#decl-N" class="code_var">N</a>, <a href="waveactiveproduct-04a.html#decl-M" class="code_var">M</a>&gt; <a href="waveactiveproduct-04a.html">WaveActiveProduct</a>&lt;<a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveactiveproduct-04a.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="waveactiveproduct-04a.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a>, <a href="waveactiveproduct-04a.html#decl-N" class="code_var">N</a>, <a href="waveactiveproduct-04a.html#decl-M" class="code_var">M</a>&gt; <a href="waveactiveproduct-04a.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="waveactiveproduct-04a.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-expr"></a>expr  : [T](waveactiveproduct-04a#typeparam-T)
####  <a id="decl-expr"></a>expr  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
####  <a id="decl-expr"></a>expr  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformArithmetic`.


