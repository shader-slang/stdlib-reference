---
layout: stdlib-reference
---

# transpose

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, M, N&gt; <a href="/stdlib-reference/global-decls/transpose">transpose</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>:int, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; x)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, M, N&gt; <a href="/stdlib-reference/global-decls/transpose">transpose</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>:int, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; x)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a> : __BuiltinIntegerType;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, M, N&gt; <a href="/stdlib-reference/global-decls/transpose">transpose</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>:int, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; x)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinLogicalType/index">__BuiltinLogicalType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: \_\_BuiltinIntegerType {#typeparam-T}
#### T: [\_\_BuiltinLogicalType](/stdlib-reference/interfaces/BuiltinLogicalType/index) {#typeparam-T}

## Parameters

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

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



