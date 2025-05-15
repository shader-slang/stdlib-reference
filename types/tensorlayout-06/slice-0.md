---
layout: stdlib-reference
---

# linalg\.TensorLayout\<Dim, ClampMode\>\.Slice

## Description





## Signature 

<pre>
linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;1, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="slice-0.html">Slice</a>(
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset0" class="code_param">offset0</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span0" class="code_param">span0</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 1;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;2, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="slice-0.html">Slice</a>(
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset0" class="code_param">offset0</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span0" class="code_param">span0</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset1" class="code_param">offset1</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span1" class="code_param">span1</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 2;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;3, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="slice-0.html">Slice</a>(
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset0" class="code_param">offset0</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span0" class="code_param">span0</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset1" class="code_param">offset1</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span1" class="code_param">span1</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset2" class="code_param">offset2</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span2" class="code_param">span2</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 3;

linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;4, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; linalg.<a href="index.html" class="code_type">TensorLayout</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-ClampMode" class="code_var">ClampMode</a>&gt;.<a href="slice-0.html">Slice</a>(
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset0" class="code_param">offset0</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span0" class="code_param">span0</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset1" class="code_param">offset1</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span1" class="code_param">span1</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset2" class="code_param">offset2</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span2" class="code_param">span2</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-offset3" class="code_param">offset3</a>,
    <span class="code_keyword">uint</span> <a href="slice-0.html#decl-span3" class="code_param">span3</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 4;

</pre>

## Parameters

####  <a id="decl-offset0"></a>offset0  : uint
####  <a id="decl-span0"></a>span0  : uint
####  <a id="decl-offset1"></a>offset1  : uint
####  <a id="decl-span1"></a>span1  : uint
####  <a id="decl-offset2"></a>offset2  : uint
####  <a id="decl-span2"></a>span2  : uint
####  <a id="decl-offset3"></a>offset3  : uint
####  <a id="decl-span3"></a>span3  : uint

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvTensorAddressingNV`.


