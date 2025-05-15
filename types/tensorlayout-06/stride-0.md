---
layout: stdlib-reference
---

# linalg\.TensorLayout\<Dim, ClampMode\>\.Stride

## Description





## Signature 

<pre>
linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;1, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="stride-0.html">Stride</a>(
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride0" class="code_param">stride0</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 1;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;2, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="stride-0.html">Stride</a>(
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride0" class="code_param">stride0</a>,
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride1" class="code_param">stride1</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 2;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;3, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="stride-0.html">Stride</a>(
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride0" class="code_param">stride0</a>,
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride1" class="code_param">stride1</a>,
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride2" class="code_param">stride2</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 3;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;4, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="stride-0.html">Stride</a>(
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride0" class="code_param">stride0</a>,
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride1" class="code_param">stride1</a>,
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride2" class="code_param">stride2</a>,
    <span class="code_keyword">uint</span> <a href="stride-0.html#decl-stride3" class="code_param">stride3</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 4;

</pre>

## Parameters

####  <a id="decl-stride0"></a>stride0  : uint
####  <a id="decl-stride1"></a>stride1  : uint
####  <a id="decl-stride2"></a>stride2  : uint
####  <a id="decl-stride3"></a>stride3  : uint

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvTensorAddressingNV`.


