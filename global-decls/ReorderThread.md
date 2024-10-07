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
void <a href="/stdlib-reference/global-decls/ReorderThread">ReorderThread</a>(
    uint <span class='code_param'>CoherenceHint</span>,
    uint <span class='code_param'>NumCoherenceHintBitsFromLSB</span>);

void <a href="/stdlib-reference/global-decls/ReorderThread">ReorderThread</a>(
    <a href="/stdlib-reference/types/HitObject/index">HitObject</a> <span class='code_param'>HitOrMiss</span>,
    uint <span class='code_param'>CoherenceHint</span>,
    uint <span class='code_param'>NumCoherenceHintBitsFromLSB</span>);

void <a href="/stdlib-reference/global-decls/ReorderThread">ReorderThread</a>(<a href="/stdlib-reference/types/HitObject/index">HitObject</a> <span class='code_param'>HitOrMiss</span>);

</pre>

## Parameters

#### CoherenceHint  : uint {#decl-CoherenceHint}
#### NumCoherenceHintBitsFromLSB  : uint {#decl-NumCoherenceHintBitsFromLSB}
#### HitOrMiss  : [HitObject](/stdlib-reference/types/HitObject/index) {#decl-HitOrMiss}

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


