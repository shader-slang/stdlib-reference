---
layout: stdlib-reference
---

# clip

## Description

Clip (discard) fragment conditionally




## Signature 

<pre>
<span class="code_keyword">void</span> <a href="clip.html">clip</a>&lt;<a href="clip.html#typeparam-T" class="code_type">T</a>&gt;(<a href="clip.html#typeparam-T" class="code_type">T</a> <a href="clip.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="clip.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="clip.html">clip</a>&lt;<a href="clip.html#typeparam-T" class="code_type">T</a>, <a href="clip.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="clip.html#typeparam-T" class="code_type">T</a>, <a href="clip.html#decl-N" class="code_var">N</a>&gt; <a href="clip.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="clip.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="clip.html">clip</a>&lt;<a href="clip.html#typeparam-T" class="code_type">T</a>, <a href="clip.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="clip.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="clip.html#typeparam-T" class="code_type">T</a>, <a href="clip.html#decl-N" class="code_var">N</a>, <a href="clip.html#decl-M" class="code_var">M</a>&gt; <a href="clip.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="clip.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinfloatingpointtype-029hm/index.html" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [\_\_BuiltinFloatingPointType](../interfaces/0_builtinfloatingpointtype-029hm/index.html)
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](clip.html#typeparam-T)
####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `fragment` stage only.

#### glsl
Available in `fragment` stage only.

#### cpp
Available in `fragment` stage only.

#### cuda
Available in `fragment` stage only.

#### spirv
Available in `fragment` stage only.



