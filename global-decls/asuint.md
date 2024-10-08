---
layout: stdlib-reference
---

# asuint

## Description

Reinterpret bits of double as a uint (HLSL SM 5.0)




## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/asuint">asuint</a>(
    <span class="code_keyword">double</span> <a href="/stdlib-reference/global-decls/asuint#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asuint#decl-lowbits" class="code_param">lowbits</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asuint#decl-highbits" class="code_param">highbits</a>);

<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asuint">asuint</a>(<span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asuint">asuint</a>(<span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asuint">asuint</a>(<span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint">asuint</a>&lt;<a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/asuint#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/asuint#decl-M" class="code_var">M</a>&gt; <a href="/stdlib-reference/global-decls/asuint#decl-x" class="code_param">x</a>);

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



