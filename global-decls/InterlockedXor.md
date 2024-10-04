---
layout: stdlib-reference
---

# InterlockedXor

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    <span class="code_keyword">int</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">int</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    <span class="code_keyword">int</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">int</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">int</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> int64_t <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> uint64_t <span class='code_param'>original_value</span>);

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



