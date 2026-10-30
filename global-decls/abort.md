---
layout: stdlib-reference
---

# abort

## Description

Terminate execution.



## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">void</span> <a href="abort.html">abort</a>();

/// Requires Capability Set 2:
<span class="code_keyword">void</span> <a href="abort.html">abort</a>&lt;<span class="code_keyword">each</span> <a href="abort.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/nativestring-06/index.html" class="code_type">NativeString</a> <a href="abort.html#decl-format" class="code_param">format</a>,
    <a href="abort.html#typeparam-T" class="code_type">T</a> <a href="abort.html#decl-args" class="code_param">args</a>);

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T

## Parameters

####  <a id="decl-format"></a>format  : [NativeString](../types/nativestring-06/index.html)
####  <a id="decl-args"></a>args  : [T](abort.html#typeparam-T)

## Remarks
Available on HLSL and C++ only. On HLSL (SM 4.0 and later) it tries to terminate the
current draw or dispatch call. On C++ it calls the host <span class='code'><a href="abort.html">abort</a>()</span> from <span class='code'>&lt;stdlib.h&gt;</span>, which ends
the whole process. Calling it for any other target is a capability error. GLSL and SPIR-V
targets have <span class='code'><a href="abort.html">abort</a>(<a href="abort.html#decl-format" class="code_param">format</a>, <a href="abort.html#decl-args" class="code_param">args</a>...)</span> instead, through GL_EXT_shader_abort on GLSL and
SPV_KHR_abort on SPIR-V (both VK_KHR_shader_abort). CUDA, Metal and WGSL have no form of
<span class='code'><a href="abort.html">abort</a></span>.


## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvAbort`.


