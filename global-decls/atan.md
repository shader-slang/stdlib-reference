---
layout: stdlib-reference
---

# atan

## Description

Arc tangent. Returns the angle whose tangent is the specified number.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/atan">atan</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/atan#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/atan#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/atan">atan</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/atan#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/atan#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/atan#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/atan#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/atan#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/atan">atan</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/atan#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/atan#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/atan#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/atan#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/atan#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/atan#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/atan">atan</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/atan#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/atan#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/atan#decl-yOverX" class="code_param">yOverX</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/atan#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/atan#typeparam-T) {#decl-x}
The tangent value.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The tangent value.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The tangent value.

#### yOverX  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-yOverX}

## Return value
The angle in radians, in the range of [-pi/2, pi/2].


## Availability and Requirements

### Capability Set 1

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


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


