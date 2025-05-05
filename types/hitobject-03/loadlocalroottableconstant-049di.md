---
layout: stdlib-reference
---

# HitObject\.LoadLocalRootTableConstant

## Description

Loads a root constant from the local root table referenced by the hit object. Valid if the hit object
represents a hit or a miss. RootConstantOffsetInBytes must be a multiple of 4.




## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="index.html" class="code_type">HitObject</a>.<a href="loadlocalroottableconstant-049di.html">LoadLocalRootTableConstant</a>(<span class="code_keyword">uint</span> <a href="loadlocalroottableconstant-049di.html#decl-RootConstantOffsetInBytes" class="code_param">RootConstantOffsetInBytes</a>);

</pre>

## Parameters

####  <a id="decl-RootConstantOffsetInBytes"></a>RootConstantOffsetInBytes  : uint

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

Requires capability: `hlsl_nvapi`.


