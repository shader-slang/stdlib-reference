---
layout: stdlib-reference
---

# ReorderThread

## Description

Reorders threads based on a coherence hint value. NumCoherenceHintBits indicates how many of
the least significant bits of CoherenceHint should be considered during reordering (max: 16).
Applications should set this to the lowest value required to represent all possible values in
CoherenceHint. For best performance, all threads should provide the same value for
NumCoherenceHintBits.
Where possible, reordering will also attempt to retain locality in the thread429496726642949671684294967193s launch indices
(DispatchRaysIndex in DXR).




## Signature 

<pre>
<span class="code_keyword">void</span> <a href="reorderthread-07.html">ReorderThread</a>(
    <span class="code_keyword">uint</span> <a href="reorderthread-07.html#decl-CoherenceHint" class="code_param">CoherenceHint</a>,
    <span class="code_keyword">uint</span> <a href="reorderthread-07.html#decl-NumCoherenceHintBitsFromLSB" class="code_param">NumCoherenceHintBitsFromLSB</a>);

<span class="code_keyword">void</span> <a href="reorderthread-07.html">ReorderThread</a>(
    <a href="../types/hitobject-03/index.html" class="code_type">HitObject</a> <a href="reorderthread-07.html#decl-HitOrMiss" class="code_param">HitOrMiss</a>,
    <span class="code_keyword">uint</span> <a href="reorderthread-07.html#decl-CoherenceHint" class="code_param">CoherenceHint</a>,
    <span class="code_keyword">uint</span> <a href="reorderthread-07.html#decl-NumCoherenceHintBitsFromLSB" class="code_param">NumCoherenceHintBitsFromLSB</a>);

<span class="code_keyword">void</span> <a href="reorderthread-07.html">ReorderThread</a>(<a href="../types/hitobject-03/index.html" class="code_type">HitObject</a> <a href="reorderthread-07.html#decl-HitOrMiss" class="code_param">HitOrMiss</a>);

</pre>

## Parameters

####  <a id="decl-CoherenceHint"></a>CoherenceHint  : uint
####  <a id="decl-NumCoherenceHintBitsFromLSB"></a>NumCoherenceHintBitsFromLSB  : uint
####  <a id="decl-HitOrMiss"></a>HitOrMiss  : [HitObject](../types/hitobject-03/index.html)

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `raygen` stage only.

Requires capability: `hlsl_nvapi`.
#### glsl
Available in `raygen` stage only.

#### spirv
Available in `raygen` stage only.

Requires capabilities: `spvRayTracingKHR`, `spvShaderInvocationReorderNV`.


