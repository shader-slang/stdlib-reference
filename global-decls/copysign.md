---
layout: stdlib-reference
---

# copysign

## Description

Copy-sign. Returns a value whose magnitude is from one operand and whose sign is from another operand.



## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/copysign#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/copysign">copysign</a>&lt;<a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/copysign#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/copysign#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/copysign#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/copysign#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/copysign#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/copysign">copysign</a>&lt;<a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/copysign#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/copysign#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/copysign#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The value to use as the magnitude.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The value to use as the sign.

#### x  : [T](/stdlib-reference/global-decls/copysign#typeparam-T) {#decl-x}
The value to use as the magnitude.

#### y  : [T](/stdlib-reference/global-decls/copysign#typeparam-T) {#decl-y}
The value to use as the sign.


## Return value
A value whose magnitude is from x and whose sign is from y.


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

#### spirv
Available in all stages.



