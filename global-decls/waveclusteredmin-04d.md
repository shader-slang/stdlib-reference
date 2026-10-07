---
layout: stdlib-reference
---

# WaveClusteredMin

## Description





## Signature 

<pre>
<a href="waveclusteredmin-04d.html#typeparam-T" class="code_type">T</a> <a href="waveclusteredmin-04d.html">WaveClusteredMin</a>&lt;<a href="waveclusteredmin-04d.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="waveclusteredmin-04d.html#typeparam-T" class="code_type">T</a> <a href="waveclusteredmin-04d.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="waveclusteredmin-04d.html#decl-clusterSize" class="code_param">clusterSize</a>)
    <span class='code_keyword'>where</span> <a href="waveclusteredmin-04d.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveclusteredmin-04d.html#typeparam-T" class="code_type">T</a>, <a href="waveclusteredmin-04d.html#decl-N" class="code_var">N</a>&gt; <a href="waveclusteredmin-04d.html">WaveClusteredMin</a>&lt;<a href="waveclusteredmin-04d.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="waveclusteredmin-04d.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveclusteredmin-04d.html#typeparam-T" class="code_type">T</a>, <a href="waveclusteredmin-04d.html#decl-N" class="code_var">N</a>&gt; <a href="waveclusteredmin-04d.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="waveclusteredmin-04d.html#decl-clusterSize" class="code_param">clusterSize</a>)
    <span class='code_keyword'>where</span> <a href="waveclusteredmin-04d.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-value"></a>value  : [T](waveclusteredmin-04d.html#typeparam-T)
####  <a id="decl-clusterSize"></a>clusterSize  : uint
####  <a id="decl-value"></a>value  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformClustered`.


