---
layout: stdlib-reference
---

# WaveMultiPrefixInclusiveSum

## Description





## Signature 

<pre>
<a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a> <a href="wavemultiprefixinclusivesum-049fo.html">WaveMultiPrefixInclusiveSum</a>&lt;<a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a> <a href="wavemultiprefixinclusivesum-049fo.html#decl-value" class="code_param">value</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultiprefixinclusivesum-049fo.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixinclusivesum-049fo.html#decl-N" class="code_var">N</a>&gt; <a href="wavemultiprefixinclusivesum-049fo.html">WaveMultiPrefixInclusiveSum</a>&lt;<a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="wavemultiprefixinclusivesum-049fo.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixinclusivesum-049fo.html#decl-N" class="code_var">N</a>&gt; <a href="wavemultiprefixinclusivesum-049fo.html#decl-value" class="code_param">value</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultiprefixinclusivesum-049fo.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixinclusivesum-049fo.html#decl-N" class="code_var">N</a>, <a href="wavemultiprefixinclusivesum-049fo.html#decl-M" class="code_var">M</a>&gt; <a href="wavemultiprefixinclusivesum-049fo.html">WaveMultiPrefixInclusiveSum</a>&lt;<a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="wavemultiprefixinclusivesum-049fo.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="wavemultiprefixinclusivesum-049fo.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixinclusivesum-049fo.html#decl-N" class="code_var">N</a>, <a href="wavemultiprefixinclusivesum-049fo.html#decl-M" class="code_var">M</a>&gt; <a href="wavemultiprefixinclusivesum-049fo.html#decl-value" class="code_param">value</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultiprefixinclusivesum-049fo.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultiprefixinclusivesum-049fo.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-value"></a>value  : [T](wavemultiprefixinclusivesum-049fo.html#typeparam-T)
####  <a id="decl-mask"></a>mask  : [vector](../types/vector/index.html)\<uint, 4\>
####  <a id="decl-value"></a>value  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-value"></a>value  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>

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


