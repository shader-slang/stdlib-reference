---
layout: stdlib-reference
---

# tanpi

## Description

Compute the tangent of <span class='code'><a href="/stdlib-reference/global-decls/tanpi#decl-x" class="code_param">x</a>*pi</span>.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/tanpi#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/tanpi">tanpi</a>&lt;<a href="/stdlib-reference/global-decls/tanpi#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/tanpi#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/tanpi#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/tanpi#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/tanpi#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/tanpi#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/tanpi">tanpi</a>&lt;<a href="/stdlib-reference/global-decls/tanpi#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/tanpi#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/tanpi#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/tanpi#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/tanpi#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/tanpi#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/tanpi#typeparam-T) {#decl-x}
The value to compute the tangent of.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The value to compute the tangent of.


## Return value
The tangent of <span class='code'><a href="/stdlib-reference/global-decls/tanpi#decl-x" class="code_param">x</a>*pi</span>.


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



