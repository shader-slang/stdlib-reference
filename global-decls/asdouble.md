---
layout: stdlib-reference
---

# asdouble

## Description

Reinterpret bits as a double.




## Signature 

<pre>
<span class="code_keyword">double</span> <a href="asdouble.html">asdouble</a>(
    <span class="code_keyword">uint</span> <a href="asdouble.html#decl-lowbits" class="code_param">lowbits</a>,
    <span class="code_keyword">uint</span> <a href="asdouble.html#decl-highbits" class="code_param">highbits</a>);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, 2&gt; <a href="asdouble.html">asdouble</a>(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="asdouble.html#decl-lowbits" class="code_param">lowbits</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, 2&gt; <a href="asdouble.html#decl-highbits" class="code_param">highbits</a>);

</pre>

## Parameters

####  <a id="decl-lowbits"></a>lowbits  : uint
####  <a id="decl-highbits"></a>highbits  : uint
####  <a id="decl-lowbits"></a>lowbits  : [vector](../types/vector/index)\<uint, 2\>
####  <a id="decl-highbits"></a>highbits  : [vector](../types/vector/index)\<uint, 2\>

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



