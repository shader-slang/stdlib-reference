---
layout: stdlib-reference
---

# refract

## Description

Refract incident vector given surface normal and index of refraction.




## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/refract#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/refract">refract</a>&lt;<a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/refract#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/refract#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/refract#decl-i" class="code_param">i</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/refract#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/refract#decl-n" class="code_param">n</a>,
    <a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/refract#decl-eta" class="code_param">eta</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/builtinfloatingpointtype-0129hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/refract">refract</a>&lt;<a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/refract#decl-i" class="code_param">i</a>,
    <a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/refract#decl-n" class="code_param">n</a>,
    <a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/refract#decl-eta" class="code_param">eta</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/refract#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/builtinfloatingpointtype-0129hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/builtinfloatingpointtype-0129hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### i  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-i}
#### n  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-n}
#### eta  : [T](/stdlib-reference/global-decls/refract#typeparam-T) {#decl-eta}
#### i  : [T](/stdlib-reference/global-decls/refract#typeparam-T) {#decl-i}
#### n  : [T](/stdlib-reference/global-decls/refract#typeparam-T) {#decl-n}

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



