---
layout: stdlib-reference
---

# asuint16

## Description





## Signature 

<pre>
uint16_t <a href="/stdlib-reference/global-decls/asuint16">asuint16</a>(uint16_t <a href="/stdlib-reference/global-decls/asuint16#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint16">asuint16</a>&lt;N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint16#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/asuint16">asuint16</a>&lt;R:int, C:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/asuint16#decl-value" class="code_param">value</a>);

uint16_t <a href="/stdlib-reference/global-decls/asuint16">asuint16</a>(int16_t <a href="/stdlib-reference/global-decls/asuint16#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint16">asuint16</a>&lt;N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;int16_t, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint16#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/asuint16">asuint16</a>&lt;R:int, C:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;int16_t, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/asuint16#decl-value" class="code_param">value</a>);

uint16_t <a href="/stdlib-reference/global-decls/asuint16">asuint16</a>(half <a href="/stdlib-reference/global-decls/asuint16#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint16_t, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint16">asuint16</a>&lt;N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;half, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint16#decl-value" class="code_param">value</a>);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/asuint16">asuint16</a>&lt;R:int, C:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;half, <a href="/stdlib-reference/types/matrix/index#decl-R" class="code_var">R</a>, <a href="/stdlib-reference/types/matrix/index#decl-C" class="code_var">C</a>&gt; <a href="/stdlib-reference/global-decls/asuint16#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}
#### R  : int {#decl-R}
#### C  : int {#decl-C}

## Parameters

#### value  : uint16\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<uint16\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<uint16\_t, [R](/stdlib-reference/types/matrix/index#decl-R), [C](/stdlib-reference/types/matrix/index#decl-C)\> {#decl-value}
#### value  : int16\_t {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<int16\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<int16\_t, [R](/stdlib-reference/types/matrix/index#decl-R), [C](/stdlib-reference/types/matrix/index#decl-C)\> {#decl-value}
#### value  : half {#decl-value}
#### value  : [vector](/stdlib-reference/types/vector/index)\<half, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-value}
#### value  : [matrix](/stdlib-reference/types/matrix/index)\<half, [R](/stdlib-reference/types/matrix/index#decl-R), [C](/stdlib-reference/types/matrix/index#decl-C)\> {#decl-value}

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



