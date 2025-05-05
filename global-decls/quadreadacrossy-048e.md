---
layout: stdlib-reference
---

# QuadReadAcrossY

## Description





## Signature 

<pre>
<a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a> <a href="quadreadacrossy-048e.html">QuadReadAcrossY</a>&lt;<a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a>&gt;(<a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a> <a href="quadreadacrossy-048e.html#decl-localValue" class="code_param">localValue</a>)
    <span class='code_keyword'>where</span> <a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossy-048e.html#decl-N" class="code_var">N</a>&gt; <a href="quadreadacrossy-048e.html">QuadReadAcrossY</a>&lt;<a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossy-048e.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossy-048e.html#decl-N" class="code_var">N</a>&gt; <a href="quadreadacrossy-048e.html#decl-localValue" class="code_param">localValue</a>)
    <span class='code_keyword'>where</span> <a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossy-048e.html#decl-N" class="code_var">N</a>, <a href="quadreadacrossy-048e.html#decl-M" class="code_var">M</a>&gt; <a href="quadreadacrossy-048e.html">QuadReadAcrossY</a>&lt;<a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossy-048e.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="quadreadacrossy-048e.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossy-048e.html#decl-N" class="code_var">N</a>, <a href="quadreadacrossy-048e.html#decl-M" class="code_var">M</a>&gt; <a href="quadreadacrossy-048e.html#decl-localValue" class="code_param">localValue</a>)
    <span class='code_keyword'>where</span> <a href="quadreadacrossy-048e.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinType
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-localValue"></a>localValue  : [T](quadreadacrossy-048e#typeparam-T)
####  <a id="decl-localValue"></a>localValue  : [vector](../types/vector/index)\<[T](../types/vector/index#typeparam-T), [N](../types/vector/index#decl-N)\>
####  <a id="decl-localValue"></a>localValue  : [matrix](../types/matrix/index)\<[T](../types/matrix/t-0), [N](../types/matrix/index#decl-N), [M](../types/matrix/index#decl-M)\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformQuad`.


