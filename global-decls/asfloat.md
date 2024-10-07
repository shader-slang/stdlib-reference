---
layout: stdlib-reference
---

# asfloat

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
float <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>(int <span class='code_param'>x</span>);

/// Requires Capability Set 1:
float <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>(uint <span class='code_param'>x</span>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>x</span>);

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>x</span>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;float, N, M&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;int, N, M&gt; <span class='code_param'>x</span>);

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;float, N, M&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint, N, M&gt; <span class='code_param'>x</span>);

float <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>(float <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>x</span>);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;float, N, M&gt; <a href="/stdlib-reference/global-decls/asfloat">asfloat</a>&lt;N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;float, N, M&gt; <span class='code_param'>x</span>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : int {#decl-x}
#### x  : uint {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<int, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<int, N, M\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<uint, N, M\> {#decl-x}
#### x  : float {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<float, [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<float, N, M\> {#decl-x}

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.



