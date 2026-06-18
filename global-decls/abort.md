---
layout: stdlib-reference
---

# abort

## Description

Try to terminate the current draw or dispatch call (HLSL SM 4.0)




## Signature 

<pre>
<span class="code_keyword">void</span> <a href="abort.html">abort</a>();

<span class="code_keyword">void</span> <a href="abort.html">abort</a>&lt;<span class="code_keyword">each</span> <a href="abort.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/nativestring-06/index.html" class="code_type">NativeString</a> <a href="abort.html#decl-format" class="code_param">format</a>,
    <span class="code_keyword">const</span> <a href="abort.html#typeparam-T" class="code_type">T</a> <a href="abort.html#decl-args" class="code_param">args</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T

## Parameters

####  <a id="decl-format"></a>format  : [NativeString](../types/nativestring-06/index.html)
####  <a id="decl-args"></a>args  : [T](abort.html#typeparam-T)

## Availability and Requirements

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `SPV_KHR_shader_abort`.


