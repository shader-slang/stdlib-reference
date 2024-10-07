---
layout: stdlib-reference
---

# mad

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>&gt;(
mvalue    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> ,
avalue    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> ,
bvalue    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, N:int&gt;(
mvalue    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
avalue    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
bvalue    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
mvalue    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
avalue    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
bvalue    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/BuiltinFloatingPointType/index">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>&gt;(
mvalue    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> ,
avalue    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> ,
bvalue    <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : __BuiltinIntegerType;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, N:int&gt;(
mvalue    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
avalue    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; ,
bvalue    <a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : __BuiltinIntegerType;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/mad">mad</a>&lt;<a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(
mvalue    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
avalue    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; ,
bvalue    <a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; )
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/mad#typeparam-T" class="code_type">T</a> : __BuiltinIntegerType;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/BuiltinFloatingPointType/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: \_\_BuiltinIntegerType {#typeparam-T}

## Parameters

#### mvalue  : [T](/stdlib-reference/global-decls/mad#typeparam-T) {#decl-mvalue}
#### avalue  : [T](/stdlib-reference/global-decls/mad#typeparam-T) {#decl-avalue}
#### bvalue  : [T](/stdlib-reference/global-decls/mad#typeparam-T) {#decl-bvalue}
#### mvalue  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-mvalue}
#### avalue  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-avalue}
#### bvalue  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-bvalue}
#### mvalue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-mvalue}
#### avalue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-avalue}
#### bvalue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-bvalue}

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



