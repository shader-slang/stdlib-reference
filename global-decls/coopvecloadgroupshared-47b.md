---
layout: stdlib-reference
---

# coopVecLoadGroupshared

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b">coopVecLoadGroupshared</a>&lt;<a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">const</span> <a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#typeparam-T" class="code_type">T</a>[<a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#decl-M" class="code_var">M</a>] <a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#decl-data" class="code_param">data</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#decl-byteOffset16ByteAligned" class="code_param">byteOffset16ByteAligned</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopvecloadgroupshared-47b#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### N  : int {#decl-N}
#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### M  : int {#decl-M}

## Parameters

#### data  : [T](/stdlib-reference/global-decls/coopvecloadgroupshared-47b#typeparam-T) \[ [M](/stdlib-reference/global-decls/coopvecloadgroupshared-47b#decl-M) \] {#decl-data}
#### byteOffset16ByteAligned  : int = 0 {#decl-byteOffset16ByteAligned}

## Availability and Requirements

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


