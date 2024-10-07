---
layout: stdlib-reference
---

# clip

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/clip">clip</a>&lt;<a href="/stdlib-reference/global-decls/clip#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/clip#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/clip#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

void <a href="/stdlib-reference/global-decls/clip">clip</a>&lt;<a href="/stdlib-reference/global-decls/clip#typeparam-T" class="code_type">T</a>, N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>x</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/clip#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

void <a href="/stdlib-reference/global-decls/clip">clip</a>&lt;<a href="/stdlib-reference/global-decls/clip#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>x</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/clip#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/clip#typeparam-T) {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `fragment` stage only.

#### glsl
Available in `fragment` stage only.

#### cpp
Available in `fragment` stage only.

#### cuda
Available in `fragment` stage only.

#### spirv
Available in `fragment` stage only.



