---
layout: stdlib-reference
---

# cross

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 3&gt; <a href="/stdlib-reference/global-decls/cross">cross</a>&lt;<span class="code_type">T</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 3&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 3&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 3&gt; <a href="/stdlib-reference/global-decls/cross">cross</a>&lt;<span class="code_type">T</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 3&gt; <span class='code_param'>left</span>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_type">T</span>, 3&gt; <span class='code_param'>right</span>)
    <span class='code_keyword'>where</span> <span class="code_type">T</span> : __BuiltinIntegerType;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### T: \_\_BuiltinIntegerType {#typeparam-T}

## Parameters

#### left  : [vector](/stdlib-reference/types/vector/index)\<T, 3\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<T, 3\> {#decl-right}

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



