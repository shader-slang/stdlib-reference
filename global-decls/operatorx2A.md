---
layout: stdlib-reference
---

# operator\*

## Description





## Signature 

<pre>
Ref&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, addrSpace:uint64_t&gt;(Addr&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/operatorx2A#decl-value" class="code_param">value</a>);

int8_t operator*(
    int8_t left,
    int8_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    int8_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    int8_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, N&gt; left,
    int8_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, N, M&gt; left,
    int8_t right);

int16_t operator*(
    int16_t left,
    int16_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    int16_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    int16_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, N&gt; left,
    int16_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, N, M&gt; left,
    int16_t right);

<span class="code_keyword">int</span> operator*(
    <span class="code_keyword">int</span> left,
    <span class="code_keyword">int</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">int</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">int</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, N&gt; left,
    <span class="code_keyword">int</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, N, M&gt; left,
    <span class="code_keyword">int</span> right);

int64_t operator*(
    int64_t left,
    int64_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    int64_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    int64_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, N&gt; left,
    int64_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, N, M&gt; left,
    int64_t right);

intptr_t operator*(
    intptr_t left,
    intptr_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    intptr_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    intptr_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, N&gt; left,
    intptr_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, N, M&gt; left,
    intptr_t right);

<span class="code_keyword">half</span> operator*(
    <span class="code_keyword">half</span> left,
    <span class="code_keyword">half</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">half</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">half</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, N&gt; left,
    <span class="code_keyword">half</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, N, M&gt; left,
    <span class="code_keyword">half</span> right);

<span class="code_keyword">float</span> operator*(
    <span class="code_keyword">float</span> left,
    <span class="code_keyword">float</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">float</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">float</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, N&gt; left,
    <span class="code_keyword">float</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, N, M&gt; left,
    <span class="code_keyword">float</span> right);

<span class="code_keyword">double</span> operator*(
    <span class="code_keyword">double</span> left,
    <span class="code_keyword">double</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">double</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">double</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, N&gt; left,
    <span class="code_keyword">double</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, N, M&gt; left,
    <span class="code_keyword">double</span> right);

uint8_t operator*(
    uint8_t left,
    uint8_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    uint8_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    uint8_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, N&gt; left,
    uint8_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, N, M&gt; left,
    uint8_t right);

uint16_t operator*(
    uint16_t left,
    uint16_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    uint16_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    uint16_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, N&gt; left,
    uint16_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, N, M&gt; left,
    uint16_t right);

<span class="code_keyword">uint</span> operator*(
    <span class="code_keyword">uint</span> left,
    <span class="code_keyword">uint</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">uint</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">uint</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, N&gt; left,
    <span class="code_keyword">uint</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, N, M&gt; left,
    <span class="code_keyword">uint</span> right);

uint64_t operator*(
    uint64_t left,
    uint64_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    uint64_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    uint64_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, N&gt; left,
    uint64_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, N, M&gt; left,
    uint64_t right);

uintptr_t operator*(
    uintptr_t left,
    uintptr_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    uintptr_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    uintptr_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, N, M&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; operator*&lt;N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, N&gt; left,
    uintptr_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, N, M&gt; operator*&lt;N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, N, M&gt; left,
    uintptr_t right);

<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> left,
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N&gt; right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N, M&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N, M&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N, M&gt; right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N&gt; right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N, M&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N, M&gt; right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N&gt; left,
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N, M&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N:<span class="code_keyword">int</span>, M:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, N, M&gt; left,
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> v0,
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> v1)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iarithmetic-01/index" class="code_type">IArithmetic</a>;

<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> v0,
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> v1)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/ifloat-01/index" class="code_type">IFloat</a>;

<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/types/descriptorhandle-0a/index" class="code_type">DescriptorHandle</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/operatorx2A#decl-value" class="code_param">value</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iopaquedescriptor-017/index" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Generic Parameters

#### T {#typeparam-T}
#### addrSpace  : uint64\_t {#decl-addrSpace}
#### N  : int {#decl-N}
#### M  : int {#decl-M}
#### T: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-T}
#### T: [IArithmetic](/stdlib-reference/interfaces/iarithmetic-01/index) {#typeparam-T}
#### T: [IFloat](/stdlib-reference/interfaces/ifloat-01/index) {#typeparam-T}
#### T: [IOpaqueDescriptor](/stdlib-reference/interfaces/iopaquedescriptor-017/index) {#typeparam-T}

## Parameters

#### value  : Addr\<[T](/stdlib-reference/global-decls/operatorx2A#typeparam-T)\> {#decl-value}
#### left  : int8\_t {#decl-left}
#### right  : int8\_t {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<int8\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<int8\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<int8\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<int8\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : int16\_t {#decl-left}
#### right  : int16\_t {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<int16\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<int16\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<int16\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<int16\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : int {#decl-left}
#### right  : int {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<int, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<int, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<int, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<int, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : int64\_t {#decl-left}
#### right  : int64\_t {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<int64\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<int64\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<int64\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<int64\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : intptr\_t {#decl-left}
#### right  : intptr\_t {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<intptr\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<intptr\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<intptr\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<intptr\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : half {#decl-left}
#### right  : half {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<half, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<half, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<half, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<half, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : float {#decl-left}
#### right  : float {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<float, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<float, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<float, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<float, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : double {#decl-left}
#### right  : double {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<double, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<double, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<double, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<double, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : uint8\_t {#decl-left}
#### right  : uint8\_t {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<uint8\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<uint8\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<uint8\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<uint8\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : uint16\_t {#decl-left}
#### right  : uint16\_t {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<uint16\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<uint16\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<uint16\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<uint16\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : uint {#decl-left}
#### right  : uint {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<uint, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<uint, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<uint, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : uint64\_t {#decl-left}
#### right  : uint64\_t {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<uint64\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<uint64\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<uint64\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<uint64\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : uintptr\_t {#decl-left}
#### right  : uintptr\_t {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<uintptr\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<uintptr\_t, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<uintptr\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<uintptr\_t, [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### left  : [T](/stdlib-reference/global-decls/operatorx2A#typeparam-T) {#decl-left}
#### right  : [T](/stdlib-reference/global-decls/operatorx2A#typeparam-T) {#decl-right}
#### left  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-left}
#### right  : [vector](/stdlib-reference/types/vector/index)\<[T](/stdlib-reference/types/vector/index#typeparam-T), [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-right}
#### left  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-left}
#### right  : [matrix](/stdlib-reference/types/matrix/index)\<[T](/stdlib-reference/types/matrix/t-0), [N](/stdlib-reference/types/matrix/index#decl-N), [M](/stdlib-reference/types/matrix/index#decl-M)\> {#decl-right}
#### v0  : [T](/stdlib-reference/global-decls/operatorx2A#typeparam-T) {#decl-v0}
#### v1  : [T](/stdlib-reference/global-decls/operatorx2A#typeparam-T) {#decl-v1}
#### value  : [DescriptorHandle](/stdlib-reference/types/descriptorhandle-0a/index)\<[T](/stdlib-reference/types/descriptorhandle-0a/index#typeparam-T)\> {#decl-value}

## Availability and Requirements

Defined for the following targets:

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.



