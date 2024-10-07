---
layout: stdlib-reference
---

# any

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
bool <a href="/stdlib-reference/global-decls/any">any</a>&lt;<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a> x)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a> : __BuiltinType;

/// Requires Capability Set 1:
bool <a href="/stdlib-reference/global-decls/any">any</a>&lt;<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a>, N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; x)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a> : __BuiltinType;

/// Requires Capability Set 2:
bool <a href="/stdlib-reference/global-decls/any">any</a>&lt;<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; x)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/any#typeparam-T) {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-x}

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

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.



