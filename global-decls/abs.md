---
layout: stdlib-reference
---

# abs

## Description

Absolute value (HLSL SM 1.0)




## Signature 

<pre>
<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/abs">abs</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/abs#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/abs">abs</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/abs#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/abs#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/abs">abs</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/abs#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/abs#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/abs#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/abs">abs</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/abs#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/abs">abs</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/abs#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/abs#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/abs">abs</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/abs#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/abs#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/abs#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/abs#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/abs#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/abs#typeparam-T) {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
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

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



