---
layout: stdlib-reference
---

# WaveClusteredBitXor

## Description





## Signature 

<pre>
<a href="waveclusteredbitxor-04dg.html#typeparam-T" class="code_type">T</a> <a href="waveclusteredbitxor-04dg.html">WaveClusteredBitXor</a>&lt;<a href="waveclusteredbitxor-04dg.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="waveclusteredbitxor-04dg.html#typeparam-T" class="code_type">T</a> <a href="waveclusteredbitxor-04dg.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="waveclusteredbitxor-04dg.html#decl-clusterSize" class="code_param">clusterSize</a>)
    <span class='code_keyword'>where</span> <a href="waveclusteredbitxor-04dg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveclusteredbitxor-04dg.html#typeparam-T" class="code_type">T</a>, <a href="waveclusteredbitxor-04dg.html#decl-N" class="code_var">N</a>&gt; <a href="waveclusteredbitxor-04dg.html">WaveClusteredBitXor</a>&lt;<a href="waveclusteredbitxor-04dg.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="waveclusteredbitxor-04dg.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveclusteredbitxor-04dg.html#typeparam-T" class="code_type">T</a>, <a href="waveclusteredbitxor-04dg.html#decl-N" class="code_var">N</a>&gt; <a href="waveclusteredbitxor-04dg.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="waveclusteredbitxor-04dg.html#decl-clusterSize" class="code_param">clusterSize</a>)
    <span class='code_keyword'>where</span> <a href="waveclusteredbitxor-04dg.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinlogicaltype-029g/index.html" class="code_type">__BuiltinLogicalType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinLogicalType](../interfaces/0_builtinlogicaltype-029g/index.html)
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-value"></a>value  : [T](waveclusteredbitxor-04dg.html#typeparam-T)
####  <a id="decl-clusterSize"></a>clusterSize  : uint
####  <a id="decl-value"></a>value  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformClustered`.


