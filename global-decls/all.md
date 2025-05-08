---
layout: stdlib-reference
---

# all

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">bool</span> <a href="all.html">all</a>&lt;<a href="all.html#typeparam-T" class="code_type">T</a>&gt;(<a href="all.html#typeparam-T" class="code_type">T</a> <a href="all.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="all.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

/// Requires Capability Set 1:
<span class="code_keyword">bool</span> <a href="all.html">all</a>&lt;<a href="all.html#typeparam-T" class="code_type">T</a>, <a href="all.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="all.html#typeparam-T" class="code_type">T</a>, <a href="all.html#decl-N" class="code_var">N</a>&gt; <a href="all.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="all.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

/// Requires Capability Set 2:
<span class="code_keyword">bool</span> <a href="all.html">all</a>&lt;<a href="all.html#typeparam-T" class="code_type">T</a>, <a href="all.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="all.html#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="all.html#typeparam-T" class="code_type">T</a>, <a href="all.html#decl-N" class="code_var">N</a>, <a href="all.html#decl-M" class="code_var">M</a>&gt; <a href="all.html#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="all.html#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinType
####  <a id="decl-N"></a>N  : int
####  <a id="decl-M"></a>M  : int

## Parameters

####  <a id="decl-x"></a>x  : [T](all.html#typeparam-T)
####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-x"></a>x  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



