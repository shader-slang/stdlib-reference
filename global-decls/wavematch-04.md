---
layout: stdlib-reference
---

# WaveMatch

## Description





## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavematch-04.html">WaveMatch</a>&lt;<a href="wavematch-04.html#typeparam-T" class="code_type">T</a>&gt;(<a href="wavematch-04.html#typeparam-T" class="code_type">T</a> <a href="wavematch-04.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="wavematch-04.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavematch-04.html">WaveMatch</a>&lt;<a href="wavematch-04.html#typeparam-T" class="code_type">T</a>, <a href="wavematch-04.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavematch-04.html#typeparam-T" class="code_type">T</a>, <a href="wavematch-04.html#decl-N" class="code_var">N</a>&gt; <a href="wavematch-04.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="wavematch-04.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 4&gt; <a href="wavematch-04.html">WaveMatch</a>&lt;<a href="wavematch-04.html#typeparam-T" class="code_type">T</a>, <a href="wavematch-04.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="wavematch-04.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavematch-04.html#typeparam-T" class="code_type">T</a>, <a href="wavematch-04.html#decl-N" class="code_var">N</a>, <a href="wavematch-04.html#decl-M" class="code_var">M</a>&gt; <a href="wavematch-04.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="wavematch-04.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinType
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-value"></a>value  : [T](wavematch-04#typeparam-T)
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

Requires capabilities: `spvGroupNonUniformBallot`, `spvGroupNonUniformPartitionedNV`.


