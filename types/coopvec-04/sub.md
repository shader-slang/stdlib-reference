---
layout: stdlib-reference
---

# CoopVec\<T, int N\>\.sub

## Description

Performs component-wise subtraction with another cooperative vector.



## Signature 

<pre>
<a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>&gt;.<a href="sub.html">sub</a>(<a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="sub.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-other"></a>other  : [CoopVec](index.html)\<[T](index.html#typeparam-T), [N](index.html#decl-N)\>
The cooperative vector to subtract from this vector.


## Return value
A new cooperative vector containing the difference of the two vectors.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

Requires capability: `hlsl_coopvec_poc`.
#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

Requires capability: `optix_coopvec`.
#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


