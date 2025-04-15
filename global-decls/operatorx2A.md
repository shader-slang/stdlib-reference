---
layout: stdlib-reference
---

# operator\*

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
Ref&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, addrSpace:uint64_t&gt;(Addr&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/operatorx2A#decl-value" class="code_param">value</a>);

int8_t operator*(
    int8_t left,
    int8_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    int8_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    int8_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    int8_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    int8_t right);

int16_t operator*(
    int16_t left,
    int16_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    int16_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    int16_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    int16_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    int16_t right);

<span class="code_keyword">int</span> operator*(
    <span class="code_keyword">int</span> left,
    <span class="code_keyword">int</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">int</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">int</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">int</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">int</span> right);

int64_t operator*(
    int64_t left,
    int64_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    int64_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    int64_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    int64_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;int64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    int64_t right);

intptr_t operator*(
    intptr_t left,
    intptr_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    intptr_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    intptr_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    intptr_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;intptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    intptr_t right);

<span class="code_keyword">half</span> operator*(
    <span class="code_keyword">half</span> left,
    <span class="code_keyword">half</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">half</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">half</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">half</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">half</span> right);

<span class="code_keyword">float</span> operator*(
    <span class="code_keyword">float</span> left,
    <span class="code_keyword">float</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">float</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">float</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">float</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">float</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">float</span> right);

<span class="code_keyword">double</span> operator*(
    <span class="code_keyword">double</span> left,
    <span class="code_keyword">double</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">double</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">double</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">double</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">double</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">double</span> right);

uint8_t operator*(
    uint8_t left,
    uint8_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    uint8_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    uint8_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    uint8_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint8_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    uint8_t right);

uint16_t operator*(
    uint16_t left,
    uint16_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    uint16_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    uint16_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    uint16_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint16_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    uint16_t right);

<span class="code_keyword">uint</span> operator*(
    <span class="code_keyword">uint</span> left,
    <span class="code_keyword">uint</span> right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">uint</span> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">uint</span> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <span class="code_keyword">uint</span> right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<span class="code_keyword">uint</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <span class="code_keyword">uint</span> right);

uint64_t operator*(
    uint64_t left,
    uint64_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    uint64_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    uint64_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    uint64_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uint64_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    uint64_t right);

uintptr_t operator*(
    uintptr_t left,
    uintptr_t right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    uintptr_t left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    uintptr_t left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right);

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    uintptr_t right);

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;uintptr_t, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    uintptr_t right);

<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> left,
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> left,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> left,
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; left,
    <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> right)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

<a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/matrix/index" class="code_type">matrix</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>&gt; left,
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

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-R" class="code_var">R</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;(
    <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/global-decls/operatorx2A#decl-lhs" class="code_param">lhs</a>,
    <span class="code_keyword">const</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/operatorx2A#decl-rhs" class="code_param">rhs</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-R" class="code_var">R</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-S" class="code_var">S</a>:<a href="/stdlib-reference/types/coopmatscope-047/index" class="code_type">CoopMatScope</a>, M:<span class="code_keyword">int</span>, N:<span class="code_keyword">int</span>, R:<a href="/stdlib-reference/types/coopmatmatrixuse-047d/index" class="code_type">CoopMatMatrixUse</a>&gt;(
    <span class="code_keyword">const</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/operatorx2A#decl-lhs" class="code_param">lhs</a>,
    <a href="/stdlib-reference/types/coopmat-04/index" class="code_type">CoopMat</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-S" class="code_var">S</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-M" class="code_var">M</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-R" class="code_var">R</a>&gt; <a href="/stdlib-reference/global-decls/operatorx2A#decl-rhs" class="code_param">rhs</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 3:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/operatorx2A#decl-lhs" class="code_param">lhs</a>,
    <span class="code_keyword">const</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/operatorx2A#decl-rhs" class="code_param">rhs</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 3:
<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; operator*&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <span class="code_keyword">const</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/operatorx2A#decl-lhs" class="code_param">lhs</a>,
    <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/global-decls/operatorx2A#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/operatorx2A#decl-rhs" class="code_param">rhs</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/operatorx2A#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

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
#### S  : [CoopMatScope](/stdlib-reference/types/coopmatscope-047/index) {#decl-S}
#### R  : [CoopMatMatrixUse](/stdlib-reference/types/coopmatmatrixuse-047d/index) {#decl-R}

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
#### lhs  : [CoopMat](/stdlib-reference/types/coopmat-04/index)\<[T](/stdlib-reference/types/coopmat-04/index#typeparam-T), [S](/stdlib-reference/types/coopmat-04/index#decl-S), [M](/stdlib-reference/types/coopmat-04/index#decl-M), [N](/stdlib-reference/types/coopmat-04/index#decl-N), [R](/stdlib-reference/types/coopmat-04/index#decl-R)\> {#decl-lhs}
#### rhs  : [T](/stdlib-reference/global-decls/operatorx2A#typeparam-T) {#decl-rhs}
#### lhs  : [T](/stdlib-reference/global-decls/operatorx2A#typeparam-T) {#decl-lhs}
#### rhs  : [CoopMat](/stdlib-reference/types/coopmat-04/index)\<[T](/stdlib-reference/types/coopmat-04/index#typeparam-T), [S](/stdlib-reference/types/coopmat-04/index#decl-S), [M](/stdlib-reference/types/coopmat-04/index#decl-M), [N](/stdlib-reference/types/coopmat-04/index#decl-N), [R](/stdlib-reference/types/coopmat-04/index#decl-R)\> {#decl-rhs}
#### lhs  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-lhs}
#### rhs  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<[T](/stdlib-reference/types/coopvec-04/index#typeparam-T), [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-rhs}

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.

### Capability Set 3

Defined for the following targets:

#### hlsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvCooperativeVectorNV`.


