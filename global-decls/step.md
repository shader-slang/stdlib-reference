---
layout: stdlib-reference
---

# step

## Description

Step function.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/step">step</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/step#decl-y" class="code_param">y</a>,
    <a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/step#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/step">step</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/step#decl-y" class="code_param">y</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/step#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/step#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/step">step</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/step#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/step#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/step#decl-y" class="code_param">y</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/step#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/step#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/step">step</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/step#decl-edge" class="code_param">edge</a>,
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/step#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/step#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/step#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### y  : [T](/stdlib-reference/global-decls/step#typeparam-T) {#decl-y}
The threshold value.

#### x  : [T](/stdlib-reference/global-decls/step#typeparam-T) {#decl-x}
The value to compare against the threshold.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The threshold value.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The value to compare against the threshold.

#### y  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-y}
The threshold value.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The value to compare against the threshold.

#### edge  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-edge}
#### x  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-x}
The value to compare against the threshold.


## Return value
0 if <span class='code'><a href="/stdlib-reference/global-decls/step#decl-x" class="code_param">x</a></span> is less than <span class='code'><a href="/stdlib-reference/global-decls/step#decl-y" class="code_param">y</a></span>, and 1 otherwise.


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


