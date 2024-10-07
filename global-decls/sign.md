---
layout: stdlib-reference
---

# sign

## Description





## Signature 

<pre>
<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/sign">sign</a>&lt;<span class="code_type">T</span>&gt;(<span class="code_type">T</span> <span class='code_param'>x</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinSignedArithmeticType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; <a href="/stdlib-reference/global-decls/sign">sign</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>x</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinSignedArithmeticType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; <a href="/stdlib-reference/global-decls/sign">sign</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>x</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinSignedArithmeticType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinSignedArithmeticType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinSignedArithmeticType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : T {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



