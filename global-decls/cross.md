---
layout: stdlib-reference
---

# cross

## Description

Cross product




## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/global-decls/cross">cross</a>&lt;<a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/global-decls/cross#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/global-decls/cross#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/global-decls/cross">cross</a>&lt;<a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/global-decls/cross#decl-left" class="code_param">left</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a>, 3&gt; <a href="/stdlib-reference/global-decls/cross#decl-right" class="code_param">right</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/cross#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-T}

## Parameters

#### left  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), 3\> {#decl-right}

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



