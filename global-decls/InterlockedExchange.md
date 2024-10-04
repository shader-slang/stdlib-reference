---
layout: stdlib-reference
---

# InterlockedExchange

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">int</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">int</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">int</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">int</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">int</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> int64_t <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> uint64_t <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">float</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">float</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">float</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">float</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <span class='code_param'>original_value</span>);

</pre>

## Parameters

* `dest`
* `value`
* `original_value`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



