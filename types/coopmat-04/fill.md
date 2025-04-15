---
layout: stdlib-reference
---

# CoopMat\<T, S:CoopMatScope, M:int, N:int, R:CoopMatMatrixUse\>\.fill

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="/stdlib-reference/types/coopmat-04/fill">fill</a>(
    <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/types/coopmat-04/fill#decl-t" class="code_param">t</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

#### t  : [T](/stdlib-reference/types/coopmat-04/index#typeparam-T) {#decl-t}

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


