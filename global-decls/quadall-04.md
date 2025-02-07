---
layout: stdlib-reference
---

# QuadAll

## Description

Returns true if <span class='code'><a href="/stdlib-reference/global-decls/quadall-04#decl-expr" class="code_param">expr</a></span> is true in all lanes of the current quad.




## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/quadall-04">QuadAll</a>(<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/quadall-04#decl-expr" class="code_param">expr</a>);

</pre>

## Parameters

#### expr  : bool {#decl-expr}

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


