---
layout: stdlib-reference
---

# QuadAny

## Description

Returns true if <span class='code'><a href="/stdlib-reference/global-decls/quadany-04#decl-expr" class="code_param">expr</a></span> is true in any lane of the current quad.




## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/quadany-04">QuadAny</a>(<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/quadany-04#decl-expr" class="code_param">expr</a>);

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


