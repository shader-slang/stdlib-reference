---
layout: stdlib-reference
---

# cospi

## Description

Compute the cosine of pi times the input.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/cospi#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/cospi">cospi</a>&lt;<a href="/stdlib-reference/global-decls/cospi#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/cospi#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/cospi#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/cospi#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/cospi#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/cospi#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/cospi">cospi</a>&lt;<a href="/stdlib-reference/global-decls/cospi#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/cospi#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/cospi#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/cospi#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/cospi#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/cospi#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/cospi#typeparam-T) {#decl-x}
The input value.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The input value.


## Return value
The cosine of pi times the input.

## Remarks
This function is equivalent to <span class='code'><a href="/stdlib-reference/global-decls/cos">cos</a>(PI*<a href="/stdlib-reference/global-decls/cos#decl-x" class="code_param">x</a>)</span>. On Metal, this function is implemented using the <span class='code'><a href="/stdlib-reference/global-decls/cospi">cospi</a></span> intrinsic.


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



