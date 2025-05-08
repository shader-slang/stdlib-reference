---
layout: stdlib-reference
---

# copysign\_float

## Description

Copy-sign. Returns a value whose magnitude is from one operand and whose sign is from another operand.



## Signature 

<pre>
<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="copysign_float.html#decl-N" class="code_var">N</a>&gt; <a href="copysign_float.html">copysign_float</a>&lt;<a href="copysign_float.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="copysign_float.html#decl-N" class="code_var">N</a>&gt; <a href="copysign_float.html#decl-x" class="code_param">x</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="copysign_float.html#decl-N" class="code_var">N</a>&gt; <a href="copysign_float.html#decl-y" class="code_param">y</a>);

</pre>

## Generic Parameters

####  <a id="decl-N"></a>N  : int

## Parameters

####  <a id="decl-x"></a>x  : [vector](../types/vector/index.html)\<float, [N](../types/vector/index.html#decl-N)\>
The value to use as the magnitude.

####  <a id="decl-y"></a>y  : [vector](../types/vector/index.html)\<float, [N](../types/vector/index.html#decl-N)\>
The value to use as the sign.


## Return value
A value whose magnitude is from <span class='code'><a href="copysign_float.html#decl-x" class="code_param">x</a></span> and whose sign is from <span class='code'><a href="copysign_float.html#decl-y" class="code_param">y</a></span>.


## Availability and Requirements

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



