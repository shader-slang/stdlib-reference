---
layout: stdlib-reference
---

# any

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/any">any</a>&lt;<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/any#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a> : __BuiltinType;

/// Requires Capability Set 1:
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/any">any</a>&lt;<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/any#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/any#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/any#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a> : __BuiltinType;

/// Requires Capability Set 2:
<span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/any">any</a>&lt;<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/any#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/any#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/any#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/any#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/any#decl-x" class="code_param">x</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/any#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### x  : [T](/stdlib-reference/global-decls/any#typeparam-T) {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}

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



