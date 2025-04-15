---
layout: stdlib-reference
---

# coopMatMulAdd

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-V" class="code_type">V</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-RC" class="code_var">RC</a>&gt; <a href="/stdlib-reference/global-decls/coopmatmuladd-47a">coopMatMulAdd</a>&lt;<a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-V" class="code_type">V</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, K:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, RA:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>, RB:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>, RC:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;(
    <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-K" class="code_var">K</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-RA" class="code_var">RA</a>&gt; <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-matA" class="code_param">matA</a>,
    <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-K" class="code_var">K</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-RB" class="code_var">RB</a>&gt; <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-matB" class="code_param">matB</a>,
    <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-V" class="code_type">V</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-RC" class="code_var">RC</a>&gt; <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-matC" class="code_param">matC</a>,
    <a href="/stdlib-reference/types/coopmatmatrixoperands-047d/index" class="code_type">CoopMatMatrixOperands</a> <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#decl-operands" class="code_param">operands</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/coopmatmuladd-47a#typeparam-V" class="code_type">V</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### U: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-U}
#### V: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-V}
#### S  : [CoopMatScope](/stdlib-reference/types/coopmatscope-047/index) {#decl-S}
#### M  : int {#decl-M}
#### K  : int {#decl-K}
#### N  : int {#decl-N}
#### RA  : [CoopMatMatrixUse](/stdlib-reference/types/coopmatmatrixuse-047d/index) {#decl-RA}
#### RB  : [CoopMatMatrixUse](/stdlib-reference/types/coopmatmatrixuse-047d/index) {#decl-RB}
#### RC  : [CoopMatMatrixUse](/stdlib-reference/types/coopmatmatrixuse-047d/index) {#decl-RC}

## Parameters

#### matA  : [CoopMat](/stdlib-reference/types/coopmat-04/index)\<[T](/stdlib-reference/types/coopmat-04/index#typeparam-T), [S](/stdlib-reference/types/coopmat-04/index#decl-S), [M](/stdlib-reference/types/coopmat-04/index#decl-M), K, RA\> {#decl-matA}
#### matB  : [CoopMat](/stdlib-reference/types/coopmat-04/index)\<U, [S](/stdlib-reference/types/coopmat-04/index#decl-S), K, [N](/stdlib-reference/types/coopmat-04/index#decl-N), RB\> {#decl-matB}
#### matC  : [CoopMat](/stdlib-reference/types/coopmat-04/index)\<V, [S](/stdlib-reference/types/coopmat-04/index#decl-S), [M](/stdlib-reference/types/coopmat-04/index#decl-M), [N](/stdlib-reference/types/coopmat-04/index#decl-N), RC\> {#decl-matC}
#### operands  : [CoopMatMatrixOperands](/stdlib-reference/types/coopmatmatrixoperands-047d/index) {#decl-operands}

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.


