---
layout: stdlib-reference
---

# mad

## Description

Computes multiply-add.




## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad#decl-mvalue" class="code_param">mvalue</a>,
    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad#decl-avalue" class="code_param">avalue</a>,
    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-mvalue" class="code_param">mvalue</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-avalue" class="code_param">avalue</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-mvalue" class="code_param">mvalue</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-avalue" class="code_param">avalue</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad#decl-mvalue" class="code_param">mvalue</a>,
    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad#decl-avalue" class="code_param">avalue</a>,
    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinIntegerType/index" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-mvalue" class="code_param">mvalue</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-avalue" class="code_param">avalue</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinIntegerType/index" class="code_type">__BuiltinIntegerType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-mvalue" class="code_param">mvalue</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-avalue" class="code_param">avalue</a>,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/mad#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/mad#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/mad#decl-bvalue" class="code_param">bvalue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinIntegerType/index" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/BuiltinIntegerType/index) {#typeparam-T}

## Parameters

#### mvalue  : [T](/stdlib-reference/global-decls/mad#typeparam-T) {#decl-mvalue}
#### avalue  : [T](/stdlib-reference/global-decls/mad#typeparam-T) {#decl-avalue}
#### bvalue  : [T](/stdlib-reference/global-decls/mad#typeparam-T) {#decl-bvalue}
#### mvalue  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-mvalue}
#### avalue  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-avalue}
#### bvalue  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-bvalue}
#### mvalue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-mvalue}
#### avalue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-avalue}
#### bvalue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-bvalue}

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

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.



