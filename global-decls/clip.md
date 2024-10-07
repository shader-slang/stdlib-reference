---
layout: stdlib-reference
---

# clip

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/clip">clip</a>&lt;<span class="code_type">T</span>&gt;(<span class="code_type">T</span> <span class='code_param'>x</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/clip">clip</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>x</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/clip">clip</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>x</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : T {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `fragment` stage only.

#### glsl
Available in `fragment` stage only.

#### cpp
Available in `fragment` stage only.

#### cuda
Available in `fragment` stage only.

#### spirv
Available in `fragment` stage only.



