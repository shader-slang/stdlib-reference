---
layout: stdlib-reference
---

# fmax

## Description

Floating-point maximum.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fmax">fmax</a>&lt;<a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fmax#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fmax#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fmax#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fmax">fmax</a>&lt;<a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fmax#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fmax#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fmax#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fmax#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fmax#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fmax#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/fmax#typeparam-T) {#decl-x}
The first value to compare.

#### y  : [T](/stdlib-reference/global-decls/fmax#typeparam-T) {#decl-y}
The second value to compare.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The first value to compare.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The second value to compare.


## Return value
The larger of the two values, element-wise if vector typed.

## Remarks
Result is <span class='code'><a href="/stdlib-reference/global-decls/fmax#decl-y" class="code_param">y</a></span> if <span class='code'><a href="/stdlib-reference/global-decls/fmax#decl-x" class="code_param">x</a></span> < <span class='code'><a href="/stdlib-reference/global-decls/fmax#decl-y" class="code_param">y</a></span>, either <span class='code'><a href="/stdlib-reference/global-decls/fmax#decl-x" class="code_param">x</a></span> or <span class='code'><a href="/stdlib-reference/global-decls/fmax#decl-y" class="code_param">y</a></span> if both <span class='code'><a href="/stdlib-reference/global-decls/fmax#decl-x" class="code_param">x</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/fmax#decl-y" class="code_param">y</a></span> are zeros, otherwise <span class='code'><a href="/stdlib-reference/global-decls/fmax#decl-x" class="code_param">x</a></span>. Which operand is the result is undefined if one of the operands is a NaN.


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



