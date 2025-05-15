---
layout: stdlib-reference
---

# linalg\.TensorLayout\<Dim, ClampMode\>\.BlockSize

## Description





## Signature 

<pre>
linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;1, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="blocksize-05.html">BlockSize</a>(
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize0" class="code_param">blockSize0</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 1;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;2, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="blocksize-05.html">BlockSize</a>(
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize0" class="code_param">blockSize0</a>,
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize1" class="code_param">blockSize1</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 2;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;3, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="blocksize-05.html">BlockSize</a>(
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize0" class="code_param">blockSize0</a>,
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize1" class="code_param">blockSize1</a>,
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize2" class="code_param">blockSize2</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 3;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;4, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="blocksize-05.html">BlockSize</a>(
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize0" class="code_param">blockSize0</a>,
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize1" class="code_param">blockSize1</a>,
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize2" class="code_param">blockSize2</a>,
    <span class="code_keyword">uint</span> <a href="blocksize-05.html#decl-blockSize3" class="code_param">blockSize3</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 4;

</pre>

## Parameters

####  <a id="decl-blockSize0"></a>blockSize0  : uint
####  <a id="decl-blockSize1"></a>blockSize1  : uint
####  <a id="decl-blockSize2"></a>blockSize2  : uint
####  <a id="decl-blockSize3"></a>blockSize3  : uint

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvTensorAddressingNV`.


