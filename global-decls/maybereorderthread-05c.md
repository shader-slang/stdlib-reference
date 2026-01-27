---
layout: stdlib-reference
---

# MaybeReorderThread

## Description

DXR 1.3 MaybeReorderThread - reorders threads based on a coherence hint value.




## Signature 

<pre>
<span class="code_keyword">void</span> <a href="maybereorderthread-05c.html">MaybeReorderThread</a>(
    <span class="code_keyword">uint</span> <a href="maybereorderthread-05c.html#decl-CoherenceHint" class="code_param">CoherenceHint</a>,
    <span class="code_keyword">uint</span> <a href="maybereorderthread-05c.html#decl-NumCoherenceHintBitsFromLSB" class="code_param">NumCoherenceHintBitsFromLSB</a>);

<span class="code_keyword">void</span> <a href="maybereorderthread-05c.html">MaybeReorderThread</a>(
    <a href="../types/hitobject-03/index.html" class="code_type">HitObject</a> <a href="maybereorderthread-05c.html#decl-HitOrMiss" class="code_param">HitOrMiss</a>,
    <span class="code_keyword">uint</span> <a href="maybereorderthread-05c.html#decl-CoherenceHint" class="code_param">CoherenceHint</a>,
    <span class="code_keyword">uint</span> <a href="maybereorderthread-05c.html#decl-NumCoherenceHintBitsFromLSB" class="code_param">NumCoherenceHintBitsFromLSB</a>);

<span class="code_keyword">void</span> <a href="maybereorderthread-05c.html">MaybeReorderThread</a>(<a href="../types/hitobject-03/index.html" class="code_type">HitObject</a> <a href="maybereorderthread-05c.html#decl-HitOrMiss" class="code_param">HitOrMiss</a>);

</pre>

## Parameters

####  <a id="decl-CoherenceHint"></a>CoherenceHint  : uint
####  <a id="decl-NumCoherenceHintBitsFromLSB"></a>NumCoherenceHintBitsFromLSB  : uint
####  <a id="decl-HitOrMiss"></a>HitOrMiss  : [HitObject](../types/hitobject-03/index.html)

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `raygen` stage only.

Requires capability: `ser_hlsl_native`.


