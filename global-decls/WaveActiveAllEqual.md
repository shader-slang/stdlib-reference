---
layout: stdlib-reference
---

# WaveActiveAllEqual

## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/WaveActiveAllEqual">WaveActiveAllEqual</a>&lt;T&gt;(T <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

/// Requires Capability Set 1:
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/WaveActiveAllEqual">WaveActiveAllEqual</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

/// Requires Capability Set 2:
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/WaveActiveAllEqual">WaveActiveAllEqual</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T">T</a>, N, M&gt; <span class='code_param'>value</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

</pre>

## Parameters

* `T`
* `N`
* `M`
* `value`

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformVote`.

### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### cuda
Available in all stages.



