---
layout: stdlib-reference
---

# sqrt

## Description

Compute the square root of <span class='code'><a href="/stdlib-reference/global-decls/sqrt#decl-x" class="code_param">x</a></span>.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/sqrt">sqrt</a>&lt;<a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/sqrt#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sqrt#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/sqrt">sqrt</a>&lt;<a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sqrt#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sqrt#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/sqrt#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sqrt#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/sqrt#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/sqrt">sqrt</a>&lt;<a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sqrt#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/sqrt#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/sqrt#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/sqrt#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/sqrt#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/sqrt#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/sqrt#typeparam-T) {#decl-x}
The value to compute the square root of.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The value to compute the square root of.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The value to compute the square root of.


## Return value
The square root of <span class='code'><a href="/stdlib-reference/global-decls/sqrt#decl-x" class="code_param">x</a></span>.


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



