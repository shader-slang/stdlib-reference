---
layout: stdlib-reference
---

# WaveClusteredRotate

## Description





## Signature 

<pre>
<a href="waveclusteredrotate-04d.html#typeparam-T" class="code_type">T</a> <a href="waveclusteredrotate-04d.html">WaveClusteredRotate</a>&lt;<a href="waveclusteredrotate-04d.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="waveclusteredrotate-04d.html#typeparam-T" class="code_type">T</a> <a href="waveclusteredrotate-04d.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="waveclusteredrotate-04d.html#decl-delta" class="code_param">delta</a>,
    <span class="code_keyword">uint</span> <a href="waveclusteredrotate-04d.html#decl-clusterSize" class="code_param">clusterSize</a>)
    <span class='code_keyword'>where</span> <a href="waveclusteredrotate-04d.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveclusteredrotate-04d.html#typeparam-T" class="code_type">T</a>, <a href="waveclusteredrotate-04d.html#decl-N" class="code_var">N</a>&gt; <a href="waveclusteredrotate-04d.html">WaveClusteredRotate</a>&lt;<a href="waveclusteredrotate-04d.html#typeparam-T" class="code_type">T</a>, <a href="waveclusteredrotate-04d.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="waveclusteredrotate-04d.html#typeparam-T" class="code_type">T</a>, <a href="waveclusteredrotate-04d.html#decl-N" class="code_var">N</a>&gt; <a href="waveclusteredrotate-04d.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">uint</span> <a href="waveclusteredrotate-04d.html#decl-delta" class="code_param">delta</a>,
    <span class="code_keyword">uint</span> <a href="waveclusteredrotate-04d.html#decl-clusterSize" class="code_param">clusterSize</a>)
    <span class='code_keyword'>where</span> <a href="waveclusteredrotate-04d.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinType
####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-value"></a>value  : [T](waveclusteredrotate-04d#typeparam-T)
####  <a id="decl-delta"></a>delta  : uint
####  <a id="decl-clusterSize"></a>clusterSize  : uint
####  <a id="decl-value"></a>value  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformRotateKHR`.


