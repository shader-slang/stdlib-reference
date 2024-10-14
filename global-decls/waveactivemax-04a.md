---
layout: stdlib-reference
---

# WaveActiveMax

## Description





## Signature 

<pre>
<a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/waveactivemax-04a">WaveActiveMax</a>&lt;<a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/builtinarithmetictype-0129j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/waveactivemax-04a">WaveActiveMax</a>&lt;<a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/builtinarithmetictype-0129j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/waveactivemax-04a">WaveActiveMax</a>&lt;<a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/waveactivemax-04a#decl-expr" class="code_param">expr</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/builtinarithmetictype-0129j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/builtinarithmetictype-0129j/index) {#typeparam-T}
#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### expr  : [T](/stdlib-reference/global-decls/waveactivemax-04a#typeparam-T) {#decl-expr}
#### expr  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-expr}
#### expr  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-expr}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvGroupNonUniformArithmetic`.


