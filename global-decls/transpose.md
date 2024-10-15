---
layout: stdlib-reference
---

# transpose

## Description

Matrix transpose.




## Signature 

<pre>
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/transpose">transpose</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/transpose#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/transpose">transpose</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/transpose#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/transpose">transpose</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/transpose#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/transpose#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/transpose#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/transpose#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinlogicaltype-029g/index" class="code_type">__BuiltinLogicalType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-T}
#### T: [\_\_BuiltinLogicalType](/stdlib-reference/interfaces/0_builtinlogicaltype-029g/index) {#typeparam-T}

## Parameters

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}

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



