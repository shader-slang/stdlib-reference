---
layout: stdlib-reference
---

# fma

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fma">fma</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> <span class='code_param'>a</span>,
    <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> <span class='code_param'>b</span>,
    <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> <span class='code_param'>c</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fma">fma</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, N:int&gt;(
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <span class='code_param'>a</span>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <span class='code_param'>b</span>,
    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <span class='code_param'>c</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/fma">fma</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>a</span>,
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>b</span>,
    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>c</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### a  : [T](/stdlib-reference/global-decls/fma#typeparam-T) {#decl-a}
#### b  : [T](/stdlib-reference/global-decls/fma#typeparam-T) {#decl-b}
#### c  : [T](/stdlib-reference/global-decls/fma#typeparam-T) {#decl-c}
#### a  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-a}
#### b  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-b}
#### c  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-c}
#### a  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-a}
#### b  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-b}
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



