---
layout: stdlib-reference
---

# determinant

## Description

Compute matrix determinant.



## Signature 

<pre>
<a href="/stdlib-reference/global-decls/determinant#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/determinant">determinant</a>&lt;<a href="/stdlib-reference/global-decls/determinant#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/determinant#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/determinant#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/determinant#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/determinant#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/determinant#decl-m" class="code_param">m</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/determinant#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### m  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [N](/stdlib-reference/types/matrix/index#decl-N)\> {#decl-m}
The matrix.


## Return value
The determinant of the matrix.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### metal
Available in all stages.

#### wgsl
Available in all stages.

#### spirv
Available in all stages.



