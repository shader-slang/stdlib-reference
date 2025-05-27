---
layout: stdlib-reference
---

# WaveMultiPrefixBitOr

## Description





## Signature 

<pre>
<a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a> <a href="wavemultiprefixbitor-049fi.html">WaveMultiPrefixBitOr</a>&lt;<a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a> <a href="wavemultiprefixbitor-049fi.html#decl-expr" class="code_param">expr</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultiprefixbitor-049fi.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixbitor-049fi.html#decl-N" class="code_var">N</a>&gt; <a href="wavemultiprefixbitor-049fi.html">WaveMultiPrefixBitOr</a>&lt;<a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixbitor-049fi.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixbitor-049fi.html#decl-N" class="code_var">N</a>&gt; <a href="wavemultiprefixbitor-049fi.html#decl-expr" class="code_param">expr</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultiprefixbitor-049fi.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixbitor-049fi.html#decl-N" class="code_var">N</a>, <a href="wavemultiprefixbitor-049fi.html#decl-M" class="code_var">M</a>&gt; <a href="wavemultiprefixbitor-049fi.html">WaveMultiPrefixBitOr</a>&lt;<a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixbitor-049fi.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="wavemultiprefixbitor-049fi.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a>, <a href="wavemultiprefixbitor-049fi.html#decl-N" class="code_var">N</a>, <a href="wavemultiprefixbitor-049fi.html#decl-M" class="code_var">M</a>&gt; <a href="wavemultiprefixbitor-049fi.html#decl-expr" class="code_param">expr</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultiprefixbitor-049fi.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultiprefixbitor-049fi.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinIntegerType](../interfaces/0_builtinintegertype-029g/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-expr"></a>expr  : [T](wavemultiprefixbitor-049fi.html#typeparam-T)
####  <a id="decl-mask"></a>mask  : [vector](../types/vector/index.html)\<uint, 4\>
####  <a id="decl-expr"></a>expr  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-expr"></a>expr  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>

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


