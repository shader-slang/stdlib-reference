---
layout: stdlib-reference
---

# operator\*

## Description

Multiplies a cooperative matrix by a scalar value: CoopMat * scalar
Performs element-wise multiplication of each element in the matrix by the scalar.



## Signature 

<pre>
Ref&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, Access access, AddressSpace addrSpace&gt;(
    <a href="../types/ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, AddressSpace.Generic&gt; <a href="operatorx2A.html#decl-value" class="code_param">value</a>);

int8_t operator*(
    int8_t left,
    int8_t right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    int8_t left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    int8_t left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    int8_t right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    int8_t right);

int16_t operator*(
    int16_t left,
    int16_t right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    int16_t left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    int16_t left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    int16_t right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    int16_t right);

<span class="code_keyword">int</span> operator*(
    <span class="code_keyword">int</span> left,
    <span class="code_keyword">int</span> right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <span class="code_keyword">int</span> left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <span class="code_keyword">int</span> left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">int</span> right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">int</span> right);

int64_t operator*(
    int64_t left,
    int64_t right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    int64_t left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    int64_t left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    int64_t right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;int64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    int64_t right);

intptr_t operator*(
    intptr_t left,
    intptr_t right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    intptr_t left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    intptr_t left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    intptr_t right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;intptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    intptr_t right);

<span class="code_keyword">half</span> operator*(
    <span class="code_keyword">half</span> left,
    <span class="code_keyword">half</span> right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <span class="code_keyword">half</span> left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <span class="code_keyword">half</span> left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">half</span> right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">half</span> right);

<span class="code_keyword">float</span> operator*(
    <span class="code_keyword">float</span> left,
    <span class="code_keyword">float</span> right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <span class="code_keyword">float</span> left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <span class="code_keyword">float</span> left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">float</span> right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">float</span> right);

<span class="code_keyword">double</span> operator*(
    <span class="code_keyword">double</span> left,
    <span class="code_keyword">double</span> right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <span class="code_keyword">double</span> left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <span class="code_keyword">double</span> left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">double</span> right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">double</span> right);

uint8_t operator*(
    uint8_t left,
    uint8_t right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    uint8_t left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    uint8_t left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    uint8_t right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint8_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    uint8_t right);

uint16_t operator*(
    uint16_t left,
    uint16_t right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    uint16_t left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    uint16_t left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    uint16_t right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint16_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    uint16_t right);

<span class="code_keyword">uint</span> operator*(
    <span class="code_keyword">uint</span> left,
    <span class="code_keyword">uint</span> right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <span class="code_keyword">uint</span> left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <span class="code_keyword">uint</span> left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">uint</span> right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">uint</span> right);

uint64_t operator*(
    uint64_t left,
    uint64_t right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    uint64_t left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    uint64_t left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    uint64_t right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uint64_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    uint64_t right);

uintptr_t operator*(
    uintptr_t left,
    uintptr_t right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    uintptr_t left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    uintptr_t left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right);

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    uintptr_t right);

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;uintptr_t, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    uintptr_t right);

<a href="operatorx2A.html#typeparam-T" class="code_type">T</a> operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> left,
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> right)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> left,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; right)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> left,
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; right)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; left,
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> right)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt;(
    <a href="../types/matrix/index.html" class="code_type">matrix</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>&gt; left,
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> right)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

<a href="operatorx2A.html#typeparam-T" class="code_type">T</a> operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> v0,
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> v1)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iarithmetic-01/index.html" class="code_type">IArithmetic</a>;

<a href="operatorx2A.html#typeparam-T" class="code_type">T</a> operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> v0,
    <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> v1)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/ifloat-01/index.html" class="code_type">IFloat</a>;

<a href="operatorx2A.html#typeparam-T" class="code_type">T</a> operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>&gt;(<a href="../types/descriptorhandle-0a/index.html" class="code_type">DescriptorHandle</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>&gt; <a href="operatorx2A.html#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>;

/// Requires Capability Set 1:
linalg.<a href="../types/coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-S" class="code_var">S</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-R" class="code_var">R</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="operatorx2A.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, linalg.<a href="../types/coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;(
    linalg.<a href="../types/coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-S" class="code_var">S</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-R" class="code_var">R</a>&gt; <a href="operatorx2A.html#decl-lhs" class="code_param">lhs</a>,
    <span class="code_keyword">const</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> <a href="operatorx2A.html#decl-rhs" class="code_param">rhs</a>)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>;

/// Requires Capability Set 1:
linalg.<a href="../types/coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-S" class="code_var">S</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-R" class="code_var">R</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="operatorx2A.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>, linalg.<a href="../types/coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;(
    <span class="code_keyword">const</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> <a href="operatorx2A.html#decl-lhs" class="code_param">lhs</a>,
    linalg.<a href="../types/coopmat-04/index.html" class="code_type">CoopMat</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-S" class="code_var">S</a>, <a href="operatorx2A.html#decl-M" class="code_var">M</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>, <a href="operatorx2A.html#decl-R" class="code_var">R</a>&gt; <a href="operatorx2A.html#decl-rhs" class="code_param">rhs</a>)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/icoopelement-015/index.html" class="code_type">ICoopElement</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; <a href="operatorx2A.html#decl-lhs" class="code_param">lhs</a>,
    <span class="code_keyword">const</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> <a href="operatorx2A.html#decl-rhs" class="code_param">rhs</a>)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <span class="code_keyword">int</span> <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt;(
    <span class="code_keyword">const</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> <a href="operatorx2A.html#decl-lhs" class="code_param">lhs</a>,
    <a href="../types/coopvec-04/index.html" class="code_type">CoopVec</a>&lt;<a href="operatorx2A.html#typeparam-T" class="code_type">T</a>, <a href="operatorx2A.html#decl-N" class="code_var">N</a>&gt; <a href="operatorx2A.html#decl-rhs" class="code_param">rhs</a>)
    <span class='code_keyword'>where</span> <a href="operatorx2A.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T
The element type of the cooperative matrix.

####  <a id="decl-access"></a>access  : Access
####  <a id="decl-addrSpace"></a>addrSpace  : AddressSpace
####  <a id="decl-N"></a>N  : int
The number of columns in the matrix fragment.

####  <a id="decl-M"></a>M  : int
The number of rows in the matrix fragment.

####  <a id="typeparam-T"></a>T: [\_\_BuiltinArithmeticType](../interfaces/0_builtinarithmetictype-029j/index.html)
The element type of the cooperative matrix.

####  <a id="typeparam-T"></a>T: [IArithmetic](../interfaces/iarithmetic-01/index.html)
The element type of the cooperative matrix.

####  <a id="typeparam-T"></a>T: [IFloat](../interfaces/ifloat-01/index.html)
The element type of the cooperative matrix.

####  <a id="typeparam-T"></a>T: [IOpaqueDescriptor](../interfaces/iopaquedescriptor-017/index.html)
The element type of the cooperative matrix.

####  <a id="typeparam-T"></a>T: [ICoopElement](../interfaces/icoopelement-015/index.html)
The element type of the cooperative matrix.

####  <a id="decl-S"></a>S  : MemoryScope
The memory scope defining the cooperative group.

####  <a id="decl-R"></a>R  : linalg\.[CoopMatMatrixUse](../types/coopmatmatrixuse-047d/index.html)
The matrix use specifier (MatrixA, MatrixB, or MatrixAccumulator).


## Parameters

####  <a id="decl-value"></a>value  : [Ptr](../types/ptr-0/index.html)\<[T](../types/ptr-0/index.html#typeparam-T), AddressSpace\.Generic\>
####  <a id="decl-left"></a>left  : int8\_t
####  <a id="decl-right"></a>right  : int8\_t
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<int8\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<int8\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<int8\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<int8\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : int16\_t
####  <a id="decl-right"></a>right  : int16\_t
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<int16\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<int16\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<int16\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<int16\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : int
####  <a id="decl-right"></a>right  : int
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<int, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<int, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<int, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<int, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : int64\_t
####  <a id="decl-right"></a>right  : int64\_t
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<int64\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<int64\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<int64\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<int64\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : intptr\_t
####  <a id="decl-right"></a>right  : intptr\_t
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<intptr\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<intptr\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<intptr\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<intptr\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : half
####  <a id="decl-right"></a>right  : half
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<half, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<half, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<half, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<half, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : float
####  <a id="decl-right"></a>right  : float
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<float, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<float, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<float, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<float, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : double
####  <a id="decl-right"></a>right  : double
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<double, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<double, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<double, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<double, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : uint8\_t
####  <a id="decl-right"></a>right  : uint8\_t
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<uint8\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<uint8\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<uint8\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<uint8\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : uint16\_t
####  <a id="decl-right"></a>right  : uint16\_t
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<uint16\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<uint16\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<uint16\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<uint16\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : uint
####  <a id="decl-right"></a>right  : uint
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<uint, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<uint, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<uint, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<uint, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : uint64\_t
####  <a id="decl-right"></a>right  : uint64\_t
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<uint64\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<uint64\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<uint64\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<uint64\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : uintptr\_t
####  <a id="decl-right"></a>right  : uintptr\_t
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<uintptr\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<uintptr\_t, [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<uintptr\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<uintptr\_t, [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-left"></a>left  : [T](operatorx2A.html#typeparam-T)
####  <a id="decl-right"></a>right  : [T](operatorx2A.html#typeparam-T)
####  <a id="decl-left"></a>left  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-right"></a>right  : [vector](../types/vector/index.html)\<[T](../types/vector/index.html#typeparam-T), [N](../types/vector/index.html#decl-N)\>
####  <a id="decl-left"></a>left  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-right"></a>right  : [matrix](../types/matrix/index.html)\<[T](../types/matrix/t-0.html), [N](../types/matrix/index.html#decl-N), [M](../types/matrix/index.html#decl-M)\>
####  <a id="decl-v0"></a>v0  : [T](operatorx2A.html#typeparam-T)
####  <a id="decl-v1"></a>v1  : [T](operatorx2A.html#typeparam-T)
####  <a id="decl-value"></a>value  : [DescriptorHandle](../types/descriptorhandle-0a/index.html)\<[T](../types/descriptorhandle-0a/index.html#typeparam-T)\>
####  <a id="decl-lhs"></a>lhs  : linalg\.[CoopMat](../types/coopmat-04/index.html)\<[T](../types/coopmat-04/index.html#typeparam-T), [S](../types/coopmat-04/index.html#decl-S), [M](../types/coopmat-04/index.html#decl-M), [N](../types/coopmat-04/index.html#decl-N), [R](../types/coopmat-04/index.html#decl-R)\>
The cooperative matrix to multiply.

####  <a id="decl-rhs"></a>rhs  : [T](operatorx2A.html#typeparam-T)
The scalar value to multiply each element by.

####  <a id="decl-lhs"></a>lhs  : [T](operatorx2A.html#typeparam-T)
The cooperative matrix to multiply.

####  <a id="decl-rhs"></a>rhs  : linalg\.[CoopMat](../types/coopmat-04/index.html)\<[T](../types/coopmat-04/index.html#typeparam-T), [S](../types/coopmat-04/index.html#decl-S), [M](../types/coopmat-04/index.html#decl-M), [N](../types/coopmat-04/index.html#decl-N), [R](../types/coopmat-04/index.html#decl-R)\>
The scalar value to multiply each element by.

####  <a id="decl-lhs"></a>lhs  : [CoopVec](../types/coopvec-04/index.html)\<[T](../types/coopvec-04/index.html#typeparam-T), [N](../types/coopvec-04/index.html#decl-N)\>
The cooperative matrix to multiply.

####  <a id="decl-rhs"></a>rhs  : [CoopVec](../types/coopvec-04/index.html)\<[T](../types/coopvec-04/index.html#typeparam-T), [N](../types/coopvec-04/index.html#decl-N)\>
The scalar value to multiply each element by.


## Return value
A new cooperative matrix with all elements multiplied by the scalar.


## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.

### Capability Set 2

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

Requires capability: `spvCooperativeVectorNV`.


