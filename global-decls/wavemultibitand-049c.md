---
layout: stdlib-reference
---

# WaveMultiBitAnd

## Description





## Signature 

<pre>
<a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a> <a href="wavemultibitand-049c.html">WaveMultiBitAnd</a>&lt;<a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a> <a href="wavemultibitand-049c.html#decl-value" class="code_param">value</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultibitand-049c.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a>, <a href="wavemultibitand-049c.html#decl-N" class="code_var">N</a>&gt; <a href="wavemultibitand-049c.html">WaveMultiBitAnd</a>&lt;<a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="wavemultibitand-049c.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a>, <a href="wavemultibitand-049c.html#decl-N" class="code_var">N</a>&gt; <a href="wavemultibitand-049c.html#decl-value" class="code_param">value</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultibitand-049c.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a>, <a href="wavemultibitand-049c.html#decl-N" class="code_var">N</a>, <a href="wavemultibitand-049c.html#decl-M" class="code_var">M</a>&gt; <a href="wavemultibitand-049c.html">WaveMultiBitAnd</a>&lt;<a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="wavemultibitand-049c.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="wavemultibitand-049c.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a>, <a href="wavemultibitand-049c.html#decl-N" class="code_var">N</a>, <a href="wavemultibitand-049c.html#decl-M" class="code_var">M</a>&gt; <a href="wavemultibitand-049c.html#decl-value" class="code_param">value</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavemultibitand-049c.html#decl-mask" class="code_param">mask</a>)
    <span class='code_keyword'>where</span> <a href="wavemultibitand-049c.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinLogicalType](../interfaces/0_builtinlogicaltype-029g/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-value"></a>value  : [T](wavemultibitand-049c.html#typeparam-T)
####  <a id="decl-mask"></a>mask  : [vector](../types/vector/index.html)\<uint, 4\>
####  <a id="decl-value"></a>value  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-value"></a>value  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvGroupNonUniformBallot`, `spvGroupNonUniformArithmetic`, `spvGroupNonUniformPartitionedNV`.


