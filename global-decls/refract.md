---
layout: stdlib-reference
---

# refract

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <a href="/stdlib-reference/global-decls/refract">refract</a>&lt;<span class="code_type">T</span>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>i</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, N&gt; <span class='code_param'>n</span>,
    <span class="code_type">T</span> <span class='code_param'>eta</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<span class="code_type">T</span> <a href="/stdlib-reference/global-decls/refract">refract</a>&lt;<span class="code_type">T</span>&gt;(
    <span class="code_type">T</span> <span class='code_param'>i</span>,
    <span class="code_type">T</span> <span class='code_param'>n</span>,
    <span class="code_type">T</span> <span class='code_param'>eta</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### i  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-i}
#### n  : [vector](/stdlib-reference/types/vector/index)\<T, N\> {#decl-n}
#### eta  : T {#decl-eta}
#### i  : T {#decl-i}
#### n  : T {#decl-n}

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

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



