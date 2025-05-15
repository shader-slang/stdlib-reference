---
layout: stdlib-reference
---

# linalg\.TensorLayout\<Dim, ClampMode\>\.Dimension

## Description





## Signature 

<pre>
linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;1, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="dimension-0.html">Dimension</a>(
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim0" class="code_param">dim0</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 1;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;2, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="dimension-0.html">Dimension</a>(
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim0" class="code_param">dim0</a>,
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim1" class="code_param">dim1</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 2;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;3, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="dimension-0.html">Dimension</a>(
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim0" class="code_param">dim0</a>,
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim1" class="code_param">dim1</a>,
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim2" class="code_param">dim2</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 3;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;4, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="dimension-0.html">Dimension</a>(
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim0" class="code_param">dim0</a>,
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim1" class="code_param">dim1</a>,
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim2" class="code_param">dim2</a>,
    <span class="code_keyword">uint</span> <a href="dimension-0.html#decl-dim3" class="code_param">dim3</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 4;

</pre>

## Parameters

####  <a id="decl-dim0"></a>dim0  : uint
####  <a id="decl-dim1"></a>dim1  : uint
####  <a id="decl-dim2"></a>dim2  : uint
####  <a id="decl-dim3"></a>dim3  : uint

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvTensorAddressingNV`.


