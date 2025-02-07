---
layout: stdlib-reference
---

# exp

## Description

Computes base-e exponent.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/exp">exp</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/exp#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/exp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/exp">exp</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/exp#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/exp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/exp#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 1:
<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/exp#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/exp#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/exp">exp</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/exp#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/exp#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/exp#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/exp#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/exp#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/exp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/exp">exp</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/exp#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/exp#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/exp#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/exp#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index" class="code_type">__BuiltinFloatingPointType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinFloatingPointType](/stdlib-reference/interfaces/0_builtinfloatingpointtype-029hm/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/exp#typeparam-T) {#decl-x}
The input value.

#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The input value.

#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
The input value.

#### x  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-x}
The input value.


## Return value
The base-e exponent of <span class='code'><a href="/stdlib-reference/global-decls/exp#decl-x" class="code_param">x</a></span>.


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


