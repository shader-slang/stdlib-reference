---
layout: stdlib-reference
---

# WaveMultiPrefixSum

## Description





## Signature 

<pre>
<a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a> <a href="wavemultiprefixsum-049f.html">WaveMultiPrefixSum</a>&lt;<a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a> <a href="wavemultiprefixsum-049f.html#decl-value" class="code_param">value</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultiprefixsum-049f.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixsum-049f.html#decl-N" class="code_var">N</a>&gt; <a href="wavemultiprefixsum-049f.html">WaveMultiPrefixSum</a>&lt;<a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixsum-049f.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixsum-049f.html#decl-N" class="code_var">N</a>&gt; <a href="wavemultiprefixsum-049f.html#decl-value" class="code_param">value</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultiprefixsum-049f.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixsum-049f.html#decl-N" class="code_var">N</a>, <a href="wavemultiprefixsum-049f.html#decl-M" class="code_var">M</a>&gt; <a href="wavemultiprefixsum-049f.html">WaveMultiPrefixSum</a>&lt;<a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixsum-049f.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="wavemultiprefixsum-049f.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixsum-049f.html#decl-N" class="code_var">N</a>, <a href="wavemultiprefixsum-049f.html#decl-M" class="code_var">M</a>&gt; <a href="wavemultiprefixsum-049f.html#decl-value" class="code_param">value</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultiprefixsum-049f.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultiprefixsum-049f.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-value"></a>value  : [T](wavemultiprefixsum-049f#typeparam-T)
####  <a id="decl-mask"></a>mask  : [vector](../types/vector/index)\<uint, 4\>
####  <a id="decl-value"></a>value  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
####  <a id="decl-value"></a>value  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvGroupNonUniformBallot`, `spvGroupNonUniformArithmetic`, `spvGroupNonUniformPartitionedNV`.


