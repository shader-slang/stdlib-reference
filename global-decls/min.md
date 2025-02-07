---
layout: stdlib-reference
---

# min

## Description

Minimum.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/min">min</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/min#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/min#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min">min</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/min#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/min">min</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/min#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/min#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/min#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/min">min</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/min#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/min#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min">min</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/min#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/min">min</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/min#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/min#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/min#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min">min</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min">min</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/min#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/min#decl-y" class="code_param">y</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/min#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/min#typeparam-T) {#decl-x}
The first value to compare.

#### y  : [T](/stdlib-reference/global-decls/min#typeparam-T) {#decl-y}
The second value to compare.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The first value to compare.

#### y  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The second value to compare.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The first value to compare.

#### y  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-y}
The second value to compare.

#### x  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-x}
The first value to compare.

#### y  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-y}
The second value to compare.


## Return value
The smaller of the two values, element-wise if vector typed.

## Remarks
For HLSL, GLSL, and metal targets, this is implemented with the min() intrinsic.
For SPIR-V, it is implemented with the UMin or SMin instruction, depending on the signedness of the type.


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


