---
layout: stdlib-reference
---

# InterlockedCompareExchange

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>compare_value</span>,
    int64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>compare_value</span>,
    int64_t <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> int64_t <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>compare_value</span>,
    uint64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>compare_value</span>,
    uint64_t <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> uint64_t <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
    <span class="code_keyword">int</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">int</span> <span class='code_param'>compare_value</span>,
    <span class="code_keyword">int</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <span class='code_param'>original_value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>compare_value</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>value</span>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <span class='code_param'>original_value</span>);

</pre>

## Parameters

#### dest : int64\_t
#### compare\_value : int64\_t
#### value : int64\_t
#### original\_value : int64\_t
#### dest : uint64\_t
#### compare\_value : uint64\_t
#### value : uint64\_t
#### original\_value : uint64\_t
#### dest : int
#### compare\_value : int
#### value : int
#### original\_value : int
#### dest : uint
#### compare\_value : uint
#### value : uint
#### original\_value : uint

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



