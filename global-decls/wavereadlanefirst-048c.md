---
layout: stdlib-reference
---

# WaveReadLaneFirst

## Description





## Signature 

<pre>
<a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a> <a href="wavereadlanefirst-048c.html">WaveReadLaneFirst</a>&lt;<a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a>&gt;(<a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a> <a href="wavereadlanefirst-048c.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a>, <a href="wavereadlanefirst-048c.html#decl-N" class="code_var">N</a>&gt; <a href="wavereadlanefirst-048c.html">WaveReadLaneFirst</a>&lt;<a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a>, <a href="wavereadlanefirst-048c.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a>, <a href="wavereadlanefirst-048c.html#decl-N" class="code_var">N</a>&gt; <a href="wavereadlanefirst-048c.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a>, <a href="wavereadlanefirst-048c.html#decl-N" class="code_var">N</a>, <a href="wavereadlanefirst-048c.html#decl-M" class="code_var">M</a>&gt; <a href="wavereadlanefirst-048c.html">WaveReadLaneFirst</a>&lt;<a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a>, <a href="wavereadlanefirst-048c.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="wavereadlanefirst-048c.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a>, <a href="wavereadlanefirst-048c.html#decl-N" class="code_var">N</a>, <a href="wavereadlanefirst-048c.html#decl-M" class="code_var">M</a>&gt; <a href="wavereadlanefirst-048c.html#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="wavereadlanefirst-048c.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinType
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-expr"></a>expr  : [T](wavereadlanefirst-048c#typeparam-T)
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

Requires capability: `spvGroupNonUniformBallot`.


