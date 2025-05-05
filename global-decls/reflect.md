---
layout: stdlib-reference
---

# reflect

## Description

Reflect incident vector across plane with given normal.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/reflect">reflect</a>&lt;<a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/reflect#decl-i" class="code_param">i</a>,
    <a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/reflect#decl-n" class="code_param">n</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/reflect#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/reflect">reflect</a>&lt;<a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/reflect#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/reflect#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/reflect#decl-i" class="code_param">i</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/reflect#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/reflect#decl-n" class="code_param">n</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/reflect#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### i  : [T](/stdlib-reference/global-decls/reflect#typeparam-T) {#decl-i}
The incident vector.

#### n  : [T](/stdlib-reference/global-decls/reflect#typeparam-T) {#decl-n}
The normal vector.

#### i  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-i}
The incident vector.

#### n  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-n}
The normal vector.


## Return value
The reflected vector.


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



