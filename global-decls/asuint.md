---
layout: stdlib-reference
---

# asuint

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/asuint">asuint</a>(
    double <a href="/stdlib-reference/global-decls/asuint#decl-value" class="code_param">value</a>,
    out uint <a href="/stdlib-reference/global-decls/asuint#decl-lowbits" class="code_param">lowbits</a>,
    out uint <a href="/stdlib-reference/global-decls/asuint#decl-highbits" class="code_param">highbits</a>);

uint <a href="/stdlib-reference/global-decls/asuint">asuint</a>(float <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

uint <a href="/stdlib-reference/global-decls/asuint">asuint</a>(int <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:int, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;float, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:int, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;int, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

uint <a href="/stdlib-reference/global-decls/asuint">asuint</a>(uint <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:int, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint, <a href="/stdlib-reference/types/matrix/index#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/types/matrix/index#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}
#### M  : int {#decl-M}

## Parameters

#### value  : double {#decl-value}
#### lowbits  : uint {#decl-lowbits}
#### highbits  : uint {#decl-highbits}
#### x  : float {#decl-x}
#### x  : int {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<float, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<int, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<float, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<int, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}
#### x  : uint {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<uint, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-x}

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

#### spirv
Available in all stages.



