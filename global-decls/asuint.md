---
layout: stdlib-reference
---

# asuint

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/asuint">asuint</a>(
    double <span class='code_param'>value</span>,
    out uint <span class='code_param'>lowbits</span>,
    out uint <span class='code_param'>highbits</span>);

uint <a href="/stdlib-reference/global-decls/asuint">asuint</a>(float x);

uint <a href="/stdlib-reference/global-decls/asuint">asuint</a>(int x);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;float, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; x);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;int, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; x);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint, N, M&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;float, N, M&gt; x);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint, N, M&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;int, N, M&gt; x);

uint <a href="/stdlib-reference/global-decls/asuint">asuint</a>(uint x);

<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:int&gt;(<a href="/stdlib-reference/types/vector/index">vector</a>&lt;uint, <a href="/stdlib-reference/types/vector/index#decl-N" class="code_var">N</a>&gt; x);

<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint, N, M&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;N:int, M:int&gt;(<a href="/stdlib-reference/types/matrix/index">matrix</a>&lt;uint, N, M&gt; x);

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
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<float, N, M\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<int, N, M\> {#decl-x}
#### x  : uint {#decl-x}
#### x  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
#### x  : [matrix](/stdlib-reference/types/matrix/index)\<uint, N, M\> {#decl-x}

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



