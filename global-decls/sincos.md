---
layout: stdlib-reference
---

# sincos

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/sincos">sincos</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> <span class='code_param'>x</span>,
    out <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> <span class='code_param'>s</span>,
    out <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> <span class='code_param'>c</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

void <a href="/stdlib-reference/global-decls/sincos">sincos</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, N:int&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <span class='code_param'>x</span>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <span class='code_param'>s</span>,
    out <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <span class='code_param'>c</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

void <a href="/stdlib-reference/global-decls/sincos">sincos</a>&lt;<a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a>, N:int, M:int, L1:int, L2:int&gt;(
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>x</span>,
    out <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>s</span>,
    out <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>c</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/sincos#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### L1  : int {#decl-L1}
#### L2  : int {#decl-L2}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/sincos#typeparam-T) {#decl-x}
#### s  : [T](/stdlib-reference/global-decls/sincos#typeparam-T) {#decl-s}
#### c  : [T](/stdlib-reference/global-decls/sincos#typeparam-T) {#decl-c}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### s  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-s}
#### c  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-c}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}
#### s  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-s}
#### c  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-c}

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



