---
layout: stdlib-reference
---

# QuadReadAcrossX

## Description





## Signature 

<pre>
<a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a> <a href="quadreadacrossx-048e.html">QuadReadAcrossX</a>&lt;<a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a>&gt;(<a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a> <a href="quadreadacrossx-048e.html#decl-localValue" class="code_param">localValue</a>)
    <span class='code_keyword'>where</span> <a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossx-048e.html#decl-N" class="code_var">N</a>&gt; <a href="quadreadacrossx-048e.html">QuadReadAcrossX</a>&lt;<a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="quadreadacrossx-048e.html#decl-N" class="code_var">N</a>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossx-048e.html#decl-N" class="code_var">N</a>&gt; <a href="quadreadacrossx-048e.html#decl-localValue" class="code_param">localValue</a>)
    <span class='code_keyword'>where</span> <a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossx-048e.html#decl-N" class="code_var">N</a>, <a href="quadreadacrossx-048e.html#decl-M" class="code_var">M</a>&gt; <a href="quadreadacrossx-048e.html">QuadReadAcrossX</a>&lt;<a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="quadreadacrossx-048e.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="quadreadacrossx-048e.html#decl-M" class="code_var">M</a>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a>, <a href="quadreadacrossx-048e.html#decl-N" class="code_var">N</a>, <a href="quadreadacrossx-048e.html#decl-M" class="code_var">M</a>&gt; <a href="quadreadacrossx-048e.html#decl-localValue" class="code_param">localValue</a>)
    <span class='code_keyword'>where</span> <a href="quadreadacrossx-048e.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinType
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-localValue"></a>localValue  : [T](quadreadacrossx-048e.html#typeparam-T)
####  <a id="decl-localValue"></a>localValue  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-localValue"></a>localValue  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>

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

Requires capability: `spvGroupNonUniformQuad`.


