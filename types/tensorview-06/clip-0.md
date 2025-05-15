---
layout: stdlib-reference
---

# linalg\.TensorView\<Dim, HasDimensions, p0, p1, p2, p3, p4\>\.Clip

## Description





## Signature 

<pre>
linalg.<a href="index.html" class="code_type">TensorView</a>&lt;1, <a href="index.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="index.html#decl-Dim0" class="code_var">Dim0</a>, 255, 255, 255, 255&gt; linalg.<a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="index.html#decl-p0" class="code_var">p0</a>, <a href="index.html#decl-p1" class="code_var">p1</a>, <a href="index.html#decl-p2" class="code_var">p2</a>, <a href="index.html#decl-p3" class="code_var">p3</a>, <a href="index.html#decl-p4" class="code_var">p4</a>&gt;.<a href="clip-0.html">Clip</a>(
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipRowOffset" class="code_param">clipRowOffset</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipRowSpan" class="code_param">clipRowSpan</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipColOffset" class="code_param">clipColOffset</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipColSpan" class="code_param">clipColSpan</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 1
    <span class='code_keyword'>where</span> <a href="index.html#decl-p1" class="code_var">p1</a> == 255
    <span class='code_keyword'>where</span> <a href="index.html#decl-p2" class="code_var">p2</a> == 255
    <span class='code_keyword'>where</span> <a href="index.html#decl-p3" class="code_var">p3</a> == 255
    <span class='code_keyword'>where</span> <a href="index.html#decl-p4" class="code_var">p4</a> == 255;

linalg.<a href="index.html" class="code_type">TensorView</a>&lt;2, <a href="index.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="index.html#decl-Dim0" class="code_var">Dim0</a>, <a href="index.html#decl-Dim1" class="code_var">Dim1</a>, 255, 255, 255&gt; linalg.<a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="index.html#decl-p0" class="code_var">p0</a>, <a href="index.html#decl-p1" class="code_var">p1</a>, <a href="index.html#decl-p2" class="code_var">p2</a>, <a href="index.html#decl-p3" class="code_var">p3</a>, <a href="index.html#decl-p4" class="code_var">p4</a>&gt;.<a href="clip-0.html">Clip</a>(
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipRowOffset" class="code_param">clipRowOffset</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipRowSpan" class="code_param">clipRowSpan</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipColOffset" class="code_param">clipColOffset</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipColSpan" class="code_param">clipColSpan</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 2
    <span class='code_keyword'>where</span> <a href="index.html#decl-p2" class="code_var">p2</a> == 255
    <span class='code_keyword'>where</span> <a href="index.html#decl-p3" class="code_var">p3</a> == 255
    <span class='code_keyword'>where</span> <a href="index.html#decl-p4" class="code_var">p4</a> == 255;

linalg.<a href="index.html" class="code_type">TensorView</a>&lt;3, <a href="index.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="index.html#decl-Dim0" class="code_var">Dim0</a>, <a href="index.html#decl-Dim1" class="code_var">Dim1</a>, <a href="index.html#decl-Dim2" class="code_var">Dim2</a>, 255, 255&gt; linalg.<a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="index.html#decl-p0" class="code_var">p0</a>, <a href="index.html#decl-p1" class="code_var">p1</a>, <a href="index.html#decl-p2" class="code_var">p2</a>, <a href="index.html#decl-p3" class="code_var">p3</a>, <a href="index.html#decl-p4" class="code_var">p4</a>&gt;.<a href="clip-0.html">Clip</a>(
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipRowOffset" class="code_param">clipRowOffset</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipRowSpan" class="code_param">clipRowSpan</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipColOffset" class="code_param">clipColOffset</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipColSpan" class="code_param">clipColSpan</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 3
    <span class='code_keyword'>where</span> <a href="index.html#decl-p3" class="code_var">p3</a> == 255
    <span class='code_keyword'>where</span> <a href="index.html#decl-p4" class="code_var">p4</a> == 255;

linalg.<a href="index.html" class="code_type">TensorView</a>&lt;4, <a href="index.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="index.html#decl-Dim0" class="code_var">Dim0</a>, <a href="index.html#decl-Dim1" class="code_var">Dim1</a>, <a href="index.html#decl-Dim2" class="code_var">Dim2</a>, <a href="index.html#decl-Dim3" class="code_var">Dim3</a>, 255&gt; linalg.<a href="index.html" class="code_type">TensorView</a>&lt;<a href="index.html#decl-Dim" class="code_var">Dim</a>, <a href="index.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="index.html#decl-p0" class="code_var">p0</a>, <a href="index.html#decl-p1" class="code_var">p1</a>, <a href="index.html#decl-p2" class="code_var">p2</a>, <a href="index.html#decl-p3" class="code_var">p3</a>, <a href="index.html#decl-p4" class="code_var">p4</a>&gt;.<a href="clip-0.html">Clip</a>(
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipRowOffset" class="code_param">clipRowOffset</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipRowSpan" class="code_param">clipRowSpan</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipColOffset" class="code_param">clipColOffset</a>,
    <span class="code_keyword">uint</span> <a href="clip-0.html#decl-clipColSpan" class="code_param">clipColSpan</a>)
    <span class='code_keyword'>where</span> <a href="index.html#decl-Dim" class="code_var">Dim</a> == 4
    <span class='code_keyword'>where</span> <a href="index.html#decl-p4" class="code_var">p4</a> == 255;

</pre>

## Parameters

####  <a id="decl-clipRowOffset"></a>clipRowOffset  : uint
####  <a id="decl-clipRowSpan"></a>clipRowSpan  : uint
####  <a id="decl-clipColOffset"></a>clipColOffset  : uint
####  <a id="decl-clipColSpan"></a>clipColSpan  : uint

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvTensorAddressingNV`.


