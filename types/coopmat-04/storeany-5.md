---
layout: stdlib-reference
---

# CoopMat\<T, S:CoopMatScope, M:int, N:int, R:CoopMatMatrixUse\>\.storeAny

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="/stdlib-reference/types/coopmat-04/storeany-5">storeAny</a>&lt;<a href="/stdlib-reference/types/coopmat-04/storeany-5#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-V" class="code_var">V</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopmat-04/storeany-5#typeparam-U" class="code_type">U</a>[<a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-V" class="code_var">V</a>] <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopmat-04/index#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;.<a href="/stdlib-reference/types/coopmat-04/storeany-5">storeAny</a>&lt;<a href="/stdlib-reference/types/coopmat-04/storeany-5#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-V" class="code_var">V</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-L" class="code_var">L</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/types/coopmat-04/storeany-5#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-L" class="code_var">L</a>&gt;[V] <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-stride" class="code_param">stride</a>,
    <a href="/stdlib-reference/types/coopmatmatrixlayout-047d/index" class="code_type">CoopMatMatrixLayout</a> <a href="/stdlib-reference/types/coopmat-04/storeany-5#decl-matrixLayout" class="code_param">matrixLayout</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopmat-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### U {#typeparam-U}
#### V  : int {#decl-V}
#### L  : int {#decl-L}

## Parameters

#### data  : [U](/stdlib-reference/types/coopmat-04/storeany-5#typeparam-U) \[ [V](/stdlib-reference/types/coopmat-04/storeany-5#decl-V) \] {#decl-data}
#### element  : uint {#decl-element}
#### stride  : uint {#decl-stride}
#### matrixLayout  : [CoopMatMatrixLayout](/stdlib-reference/types/coopmatmatrixlayout-047d/index) {#decl-matrixLayout}
#### data  : [vector](/stdlib-reference/types/vector/index)\<U, L\> \[ V \] {#decl-data}

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


