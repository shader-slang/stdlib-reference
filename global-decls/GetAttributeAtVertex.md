---
layout: stdlib-reference
---

# GetAttributeAtVertex

## Description

Get the value of a vertex attribute at a specific vertex.

The <span class='code'><a href="/stdlib-reference/global-decls/GetAttributeAtVertex">GetAttributeAtVertex</a>()</span> function can be used in a fragment shader
to get the value of the given <span class='code'>attribute</span> at the vertex of the primitive
that corresponds to the given <span class='code'>vertexIndex</span>.

Note that the <span class='code'>attribute</span> must have been a declared varying input to
the fragment shader with the <span class='code'>nointerpolation</span> modifier.

This function can be applied to scalars, vectors, and matrices of
built-in scalar types.




## Signature 

<pre>
T <a href="/stdlib-reference/global-decls/GetAttributeAtVertex">GetAttributeAtVertex</a>&lt;T&gt;(
    T <span class='code_param'>attribute</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>vertexIndex</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <a href="/stdlib-reference/global-decls/GetAttributeAtVertex">GetAttributeAtVertex</a>&lt;T, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;T, N&gt; <span class='code_param'>attribute</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>vertexIndex</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <a href="/stdlib-reference/global-decls/GetAttributeAtVertex">GetAttributeAtVertex</a>&lt;T, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/types/matrix/T" class="code_type">T</a>, N, M&gt; <span class='code_param'>attribute</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>vertexIndex</span>)
    <span class='code_keyword'>where</span> T : __BuiltinType;

</pre>

## Parameters

#### T
#### N  : int
#### M  : int
#### attribute  : T
#### vertexIndex  : uint
#### attribute  : [vector](/stdlib-reference/types/vector/index)\<T, N\>
#### attribute  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/T), N, M\>

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in `fragment` stage only.

#### glsl
Available in `fragment` stage only.

#### spirv
Available in `fragment` stage only.

Requires capability: `spvFragmentBarycentricKHR`.


