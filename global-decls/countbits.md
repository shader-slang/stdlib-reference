---
layout: stdlib-reference
---

# countbits

## Description

Population count.
Counts the number of set bits in the binary representation of a value.



## Signature 

<pre>
<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/countbits">countbits</a>&lt;<a href="/stdlib-reference/global-decls/countbits#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/global-decls/countbits#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/countbits#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/countbits#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/countbits#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/countbits">countbits</a>&lt;<a href="/stdlib-reference/global-decls/countbits#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/countbits#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/countbits#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/countbits#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/countbits#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/countbits#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinintegertype-029g/index" class="code_type">__BuiltinIntegerType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinIntegerType](/stdlib-reference/interfaces/0_builtinintegertype-029g/index) {#typeparam-T}
#### N  : int {#decl-N}

## Parameters

#### value  : [T](/stdlib-reference/global-decls/countbits#typeparam-T) {#decl-value}
The value to count bits in.

#### value  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
The value to count bits in.


## Return value
The number of bits in the binary representation of <span class='code'><a href="/stdlib-reference/global-decls/countbits#decl-value" class="code_param">value</a></span> that are set to one.

## Remarks
For SPIR-V, this function maps to <span class='code'>OpBitCount</span>.


## Availability and Requirements

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



