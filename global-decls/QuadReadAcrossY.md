---
layout: stdlib-reference
---

# QuadReadAcrossY

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/QuadReadAcrossY#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/QuadReadAcrossY">QuadReadAcrossY</a>&lt;<a href="/stdlib-reference/global-decls/QuadReadAcrossY#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/QuadReadAcrossY#typeparam-T" class="code_type">T</a> <span class='code_param'>localValue</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/QuadReadAcrossY#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/QuadReadAcrossY">QuadReadAcrossY</a>&lt;<a href="/stdlib-reference/global-decls/QuadReadAcrossY#typeparam-T" class="code_type">T</a>, N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;<a href="/stdlib-reference/types/vector/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/vector/index#typeparam-N" class="code_var">N</a>&gt; <span class='code_param'>localValue</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/QuadReadAcrossY#typeparam-T" class="code_type">T</a> : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/QuadReadAcrossY">QuadReadAcrossY</a>&lt;<a href="/stdlib-reference/global-decls/QuadReadAcrossY#typeparam-T" class="code_type">T</a>, N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>localValue</span>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/QuadReadAcrossY#typeparam-T" class="code_type">T</a> : __BuiltinType;

</pre>

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}

## Generic Parameters

#### T: \_\_BuiltinType {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### localValue  : [T](/stdlib-reference/global-decls/QuadReadAcrossY#typeparam-T) {#decl-localValue}
#### localValue  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#typeparam-N)\> {#decl-localValue}
#### localValue  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\> {#decl-localValue}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformQuad`.


