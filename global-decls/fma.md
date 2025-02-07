---
layout: stdlib-reference
---

# fma

## Description

Fused multiply-add.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fma">fma</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fma#decl-a" class="code_param">a</a>,
    <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fma#decl-b" class="code_param">b</a>,
    <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/fma#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fma">fma</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fma#decl-a" class="code_param">a</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fma#decl-b" class="code_param">b</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/fma#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/fma#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/fma">fma</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/fma#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/fma#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/fma#decl-a" class="code_param">a</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/fma#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/fma#decl-b" class="code_param">b</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/fma#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/fma#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/fma#decl-c" class="code_param">c</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/fma#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### a  : [T](/stdlib-reference/global-decls/fma#typeparam-T) {#decl-a}
The first value to multiply.

#### b  : [T](/stdlib-reference/global-decls/fma#typeparam-T) {#decl-b}
The second value to multiply.

#### c  : [T](/stdlib-reference/global-decls/fma#typeparam-T) {#decl-c}
The value to add to the product of <span class='code'><a href="/stdlib-reference/global-decls/fma#decl-a" class="code_param">a</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/fma#decl-b" class="code_param">b</a></span>.

#### a  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-a}
The first value to multiply.

#### b  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-b}
The second value to multiply.

#### c  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-c}
The value to add to the product of <span class='code'><a href="/stdlib-reference/global-decls/fma#decl-a" class="code_param">a</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/fma#decl-b" class="code_param">b</a></span>.

#### a  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-a}
The first value to multiply.

#### b  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-b}
The second value to multiply.

#### c  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-c}
The value to add to the product of <span class='code'><a href="/stdlib-reference/global-decls/fma#decl-a" class="code_param">a</a></span> and <span class='code'><a href="/stdlib-reference/global-decls/fma#decl-b" class="code_param">b</a></span>.


## Return value
The result of <span class='code'><a href="/stdlib-reference/global-decls/fma#decl-a" class="code_param">a</a>*<a href="/stdlib-reference/global-decls/fma#decl-b" class="code_param">b</a>+<a href="/stdlib-reference/global-decls/fma#decl-c" class="code_param">c</a></span>.


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



