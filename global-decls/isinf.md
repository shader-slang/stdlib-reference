---
layout: stdlib-reference
---

# isinf

## Description





## Signature 

<pre>
bool <a href="/stdlib-reference/global-decls/isinf">isinf</a>&lt;<a href="/stdlib-reference/global-decls/isinf#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/isinf#typeparam-T" class="code_type">T</a> x)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/isinf#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;bool, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/isinf">isinf</a>&lt;<a href="/stdlib-reference/global-decls/isinf#typeparam-T" class="code_type">T</a>, N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; x)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/isinf#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;bool, N, M&gt; <a href="/stdlib-reference/global-decls/isinf">isinf</a>&lt;<a href="/stdlib-reference/global-decls/isinf#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; x)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/isinf#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/isinf#typeparam-T) {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}

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



