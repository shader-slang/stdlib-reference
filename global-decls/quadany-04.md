---
layout: stdlib-reference
---

# QuadAny

## Description

Returns true if <span class='code'><a href="quadany-04.html#decl-expr" class="code_param">expr</a></span> is true in any lane of the current quad.




## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="quadany-04.html">QuadAny</a>(<span class="code_keyword">bool</span> <a href="quadany-04.html#decl-expr" class="code_param">expr</a>);

</pre>

## Parameters

####  <a id="decl-expr"></a>expr  : bool

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.

Requires capabilities: `spvGroupNonUniformVote`, `spvMaximalReconvergenceKHR`, `spvQuadControlKHR`.


